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



var $0___SIZE = 352; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
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
  
var _strop_module__doc__;
var _splitfields__doc__;
var _PyExc_DeprecationWarning;
var __str;
var __str1;
var _PyExc_ValueError;
var __str2;
var _joinfields__doc__;
var __str3;
var __str4;
var _PyExc_TypeError;
var __str5;
var _PyExc_OverflowError;
var __str6;
var __str7;
var _find__doc__;
var __str8;
var _rfind__doc__;
var __str9;
var _strip__doc__;
var _lstrip__doc__;
var _rstrip__doc__;
var _lower__doc__;
var _upper__doc__;
var _capitalize__doc__;
var _expandtabs__doc__;
var __str10;
var __str11;
var __str12;
var _count__doc__;
var __str13;
var _swapcase__doc__;
var _atoi__doc__;
var __str14;
var __str15;
var __str16;
var __str17;
var _atol__doc__;
var __str18;
var __str19;
var __str20;
var __str21;
var _atof__doc__;
var __str22;
var __str23;
var __str24;
var _maketrans__doc__;
var __str25;
var __str26;
var _translate__doc__;
var __str27;
var __str28;
var __str29;
var __str30;
var ___PRETTY_FUNCTION___9892;
var _replace__doc__;
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
var _strop_methods;
var __str54;
var __str55;
var __str56;
var __str57;





































  function _split_whitespace($s, $len, $maxsplit) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $len_addr=__stackBase__+4;
        var $maxsplit_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $i=__stackBase__+20;
        var $j=__stackBase__+24;
        var $err=__stackBase__+28;
        var $countsplit=__stackBase__+32;
        var $item=__stackBase__+36;
        var $list=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$len_addr]=$len;
        HEAP[$maxsplit_addr]=$maxsplit;
        HEAP[$i]=0; //@line 32 "stropmodule.c"
        HEAP[$countsplit]=0; //@line 34 "stropmodule.c"
        var $1=_PyList_New(0); //@line 36 "stropmodule.c"
        HEAP[$list]=$1; //@line 36 "stropmodule.c"
        var $2=HEAP[$list]; //@line 38 "stropmodule.c"
        var $3=($2)==0; //@line 38 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 38 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 39 "stropmodule.c"
        __label__ = 33; break; //@line 39 "stropmodule.c"
      case 2: // $bb1
        __label__ = 28; break; //@line 39 "stropmodule.c"
      case 3: // $bb2
        __label__ = 5; break; //@line 39 "stropmodule.c"
      case 4: // $bb3
        var $4=HEAP[$i]; //@line 43 "stropmodule.c"
        var $5=((($4) + 1)&4294967295); //@line 43 "stropmodule.c"
        HEAP[$i]=$5; //@line 43 "stropmodule.c"
        __label__ = 5; break; //@line 43 "stropmodule.c"
      case 5: // $bb4
        var $6=HEAP[$i]; //@line 42 "stropmodule.c"
        var $7=HEAP[$len_addr]; //@line 42 "stropmodule.c"
        var $8=((($6))|0) >= ((($7))|0); //@line 42 "stropmodule.c"
        if ($8) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 42 "stropmodule.c"
      case 6: // $bb5
        var $9=___ctype_b_loc(); //@line 42 "stropmodule.c"
        var $10=HEAP[$9]; //@line 42 "stropmodule.c"
        var $11=HEAP[$s_addr]; //@line 42 "stropmodule.c"
        var $12=HEAP[$i]; //@line 42 "stropmodule.c"
        var $13=(($11+$12)&4294967295); //@line 42 "stropmodule.c"
        var $14=HEAP[$13]; //@line 42 "stropmodule.c"
        var $15=unSign(($14), 8, 0); //@line 42 "stropmodule.c"
        var $16=(($10+2*$15)&4294967295); //@line 42 "stropmodule.c"
        var $17=HEAP[$16]; //@line 42 "stropmodule.c"
        var $18=unSign(($17), 16, 0); //@line 42 "stropmodule.c"
        var $19=($18) & 8192; //@line 42 "stropmodule.c"
        var $20=((($19))|0)!=0; //@line 42 "stropmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 42 "stropmodule.c"
      case 7: // $bb6
        var $21=HEAP[$i]; //@line 45 "stropmodule.c"
        HEAP[$j]=$21; //@line 45 "stropmodule.c"
        __label__ = 9; break; //@line 45 "stropmodule.c"
      case 8: // $bb7
        var $22=HEAP[$i]; //@line 47 "stropmodule.c"
        var $23=((($22) + 1)&4294967295); //@line 47 "stropmodule.c"
        HEAP[$i]=$23; //@line 47 "stropmodule.c"
        __label__ = 9; break; //@line 47 "stropmodule.c"
      case 9: // $bb8
        var $24=HEAP[$i]; //@line 46 "stropmodule.c"
        var $25=HEAP[$len_addr]; //@line 46 "stropmodule.c"
        var $26=((($24))|0) >= ((($25))|0); //@line 46 "stropmodule.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 46 "stropmodule.c"
      case 10: // $bb9
        var $27=___ctype_b_loc(); //@line 46 "stropmodule.c"
        var $28=HEAP[$27]; //@line 46 "stropmodule.c"
        var $29=HEAP[$s_addr]; //@line 46 "stropmodule.c"
        var $30=HEAP[$i]; //@line 46 "stropmodule.c"
        var $31=(($29+$30)&4294967295); //@line 46 "stropmodule.c"
        var $32=HEAP[$31]; //@line 46 "stropmodule.c"
        var $33=unSign(($32), 8, 0); //@line 46 "stropmodule.c"
        var $34=(($28+2*$33)&4294967295); //@line 46 "stropmodule.c"
        var $35=HEAP[$34]; //@line 46 "stropmodule.c"
        var $36=unSign(($35), 16, 0); //@line 46 "stropmodule.c"
        var $37=($36) & 8192; //@line 46 "stropmodule.c"
        var $38=((($37))|0)==0; //@line 46 "stropmodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 46 "stropmodule.c"
      case 11: // $bb10
        var $39=HEAP[$j]; //@line 49 "stropmodule.c"
        var $40=HEAP[$i]; //@line 49 "stropmodule.c"
        var $41=((($39))|0) < ((($40))|0); //@line 49 "stropmodule.c"
        if ($41) { __label__ = 12; break; } else { __label__ = 28; break; } //@line 49 "stropmodule.c"
      case 12: // $bb11
        var $42=HEAP[$i]; //@line 50 "stropmodule.c"
        var $43=HEAP[$j]; //@line 50 "stropmodule.c"
        var $44=((($42) - ($43))&4294967295); //@line 50 "stropmodule.c"
        var $45=HEAP[$s_addr]; //@line 50 "stropmodule.c"
        var $46=HEAP[$j]; //@line 50 "stropmodule.c"
        var $47=(($45+$46)&4294967295); //@line 50 "stropmodule.c"
        var $48=_PyString_FromStringAndSize($47, $44); //@line 50 "stropmodule.c"
        HEAP[$item]=$48; //@line 50 "stropmodule.c"
        var $49=HEAP[$item]; //@line 51 "stropmodule.c"
        var $50=($49)==0; //@line 51 "stropmodule.c"
        if ($50) { __label__ = 30; break; } else { __label__ = 13; break; } //@line 51 "stropmodule.c"
      case 13: // $bb12
        var $51=HEAP[$list]; //@line 54 "stropmodule.c"
        var $52=HEAP[$item]; //@line 54 "stropmodule.c"
        var $53=_PyList_Append($51, $52); //@line 54 "stropmodule.c"
        HEAP[$err]=$53; //@line 54 "stropmodule.c"
        var $54=HEAP[$item]; //@line 55 "stropmodule.c"
        var $55=(($54)&4294967295); //@line 55 "stropmodule.c"
        var $56=HEAP[$55]; //@line 55 "stropmodule.c"
        var $57=((($56) - 1)&4294967295); //@line 55 "stropmodule.c"
        var $58=HEAP[$item]; //@line 55 "stropmodule.c"
        var $59=(($58)&4294967295); //@line 55 "stropmodule.c"
        HEAP[$59]=$57; //@line 55 "stropmodule.c"
        var $60=HEAP[$item]; //@line 55 "stropmodule.c"
        var $61=(($60)&4294967295); //@line 55 "stropmodule.c"
        var $62=HEAP[$61]; //@line 55 "stropmodule.c"
        var $63=((($62))|0)==0; //@line 55 "stropmodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 55 "stropmodule.c"
      case 14: // $bb13
        var $64=HEAP[$item]; //@line 55 "stropmodule.c"
        var $65=(($64+4)&4294967295); //@line 55 "stropmodule.c"
        var $66=HEAP[$65]; //@line 55 "stropmodule.c"
        var $67=(($66+24)&4294967295); //@line 55 "stropmodule.c"
        var $68=HEAP[$67]; //@line 55 "stropmodule.c"
        var $69=HEAP[$item]; //@line 55 "stropmodule.c"
        FUNCTION_TABLE[$68]($69); //@line 55 "stropmodule.c"
        __label__ = 15; break; //@line 55 "stropmodule.c"
      case 15: // $bb14
        var $70=HEAP[$err]; //@line 56 "stropmodule.c"
        var $71=((($70))|0) < 0; //@line 56 "stropmodule.c"
        if ($71) { __label__ = 30; break; } else { __label__ = 16; break; } //@line 56 "stropmodule.c"
      case 16: // $bb15
        var $72=HEAP[$countsplit]; //@line 59 "stropmodule.c"
        var $73=((($72) + 1)&4294967295); //@line 59 "stropmodule.c"
        HEAP[$countsplit]=$73; //@line 59 "stropmodule.c"
        __label__ = 18; break; //@line 59 "stropmodule.c"
      case 17: // $bb16
        var $74=HEAP[$i]; //@line 61 "stropmodule.c"
        var $75=((($74) + 1)&4294967295); //@line 61 "stropmodule.c"
        HEAP[$i]=$75; //@line 61 "stropmodule.c"
        __label__ = 18; break; //@line 61 "stropmodule.c"
      case 18: // $bb17
        var $76=HEAP[$i]; //@line 60 "stropmodule.c"
        var $77=HEAP[$len_addr]; //@line 60 "stropmodule.c"
        var $78=((($76))|0) >= ((($77))|0); //@line 60 "stropmodule.c"
        if ($78) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 60 "stropmodule.c"
      case 19: // $bb18
        var $79=___ctype_b_loc(); //@line 60 "stropmodule.c"
        var $80=HEAP[$79]; //@line 60 "stropmodule.c"
        var $81=HEAP[$s_addr]; //@line 60 "stropmodule.c"
        var $82=HEAP[$i]; //@line 60 "stropmodule.c"
        var $83=(($81+$82)&4294967295); //@line 60 "stropmodule.c"
        var $84=HEAP[$83]; //@line 60 "stropmodule.c"
        var $85=unSign(($84), 8, 0); //@line 60 "stropmodule.c"
        var $86=(($80+2*$85)&4294967295); //@line 60 "stropmodule.c"
        var $87=HEAP[$86]; //@line 60 "stropmodule.c"
        var $88=unSign(($87), 16, 0); //@line 60 "stropmodule.c"
        var $89=($88) & 8192; //@line 60 "stropmodule.c"
        var $90=((($89))|0)!=0; //@line 60 "stropmodule.c"
        if ($90) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 60 "stropmodule.c"
      case 20: // $bb19
        var $91=HEAP[$maxsplit_addr]; //@line 63 "stropmodule.c"
        var $92=((($91))|0)!=0; //@line 63 "stropmodule.c"
        if ($92) { __label__ = 21; break; } else { __label__ = 28; break; } //@line 63 "stropmodule.c"
      case 21: // $bb20
        var $93=HEAP[$countsplit]; //@line 63 "stropmodule.c"
        var $94=HEAP[$maxsplit_addr]; //@line 63 "stropmodule.c"
        var $95=((($93))|0) >= ((($94))|0); //@line 63 "stropmodule.c"
        if ($95) { __label__ = 22; break; } else { __label__ = 28; break; } //@line 63 "stropmodule.c"
      case 22: // $bb21
        var $96=HEAP[$i]; //@line 63 "stropmodule.c"
        var $97=HEAP[$len_addr]; //@line 63 "stropmodule.c"
        var $98=((($96))|0) < ((($97))|0); //@line 63 "stropmodule.c"
        if ($98) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 63 "stropmodule.c"
      case 23: // $bb22
        var $99=HEAP[$len_addr]; //@line 64 "stropmodule.c"
        var $100=HEAP[$i]; //@line 64 "stropmodule.c"
        var $101=((($99) - ($100))&4294967295); //@line 64 "stropmodule.c"
        var $102=HEAP[$s_addr]; //@line 64 "stropmodule.c"
        var $103=HEAP[$i]; //@line 64 "stropmodule.c"
        var $104=(($102+$103)&4294967295); //@line 64 "stropmodule.c"
        var $105=_PyString_FromStringAndSize($104, $101); //@line 64 "stropmodule.c"
        HEAP[$item]=$105; //@line 64 "stropmodule.c"
        var $106=HEAP[$item]; //@line 66 "stropmodule.c"
        var $107=($106)==0; //@line 66 "stropmodule.c"
        if ($107) { __label__ = 30; break; } else { __label__ = 24; break; } //@line 66 "stropmodule.c"
      case 24: // $bb23
        var $108=HEAP[$list]; //@line 69 "stropmodule.c"
        var $109=HEAP[$item]; //@line 69 "stropmodule.c"
        var $110=_PyList_Append($108, $109); //@line 69 "stropmodule.c"
        HEAP[$err]=$110; //@line 69 "stropmodule.c"
        var $111=HEAP[$item]; //@line 70 "stropmodule.c"
        var $112=(($111)&4294967295); //@line 70 "stropmodule.c"
        var $113=HEAP[$112]; //@line 70 "stropmodule.c"
        var $114=((($113) - 1)&4294967295); //@line 70 "stropmodule.c"
        var $115=HEAP[$item]; //@line 70 "stropmodule.c"
        var $116=(($115)&4294967295); //@line 70 "stropmodule.c"
        HEAP[$116]=$114; //@line 70 "stropmodule.c"
        var $117=HEAP[$item]; //@line 70 "stropmodule.c"
        var $118=(($117)&4294967295); //@line 70 "stropmodule.c"
        var $119=HEAP[$118]; //@line 70 "stropmodule.c"
        var $120=((($119))|0)==0; //@line 70 "stropmodule.c"
        if ($120) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 70 "stropmodule.c"
      case 25: // $bb24
        var $121=HEAP[$item]; //@line 70 "stropmodule.c"
        var $122=(($121+4)&4294967295); //@line 70 "stropmodule.c"
        var $123=HEAP[$122]; //@line 70 "stropmodule.c"
        var $124=(($123+24)&4294967295); //@line 70 "stropmodule.c"
        var $125=HEAP[$124]; //@line 70 "stropmodule.c"
        var $126=HEAP[$item]; //@line 70 "stropmodule.c"
        FUNCTION_TABLE[$125]($126); //@line 70 "stropmodule.c"
        __label__ = 26; break; //@line 70 "stropmodule.c"
      case 26: // $bb25
        var $127=HEAP[$err]; //@line 71 "stropmodule.c"
        var $128=((($127))|0) < 0; //@line 71 "stropmodule.c"
        if ($128) { __label__ = 30; break; } else { __label__ = 27; break; } //@line 71 "stropmodule.c"
      case 27: // $bb26
        var $129=HEAP[$len_addr]; //@line 74 "stropmodule.c"
        HEAP[$i]=$129; //@line 74 "stropmodule.c"
        __label__ = 28; break; //@line 74 "stropmodule.c"
      case 28: // $bb27
        var $130=HEAP[$i]; //@line 41 "stropmodule.c"
        var $131=HEAP[$len_addr]; //@line 41 "stropmodule.c"
        var $132=((($130))|0) < ((($131))|0); //@line 41 "stropmodule.c"
        if ($132) { __label__ = 3; break; } else { __label__ = 29; break; } //@line 41 "stropmodule.c"
      case 29: // $bb28
        var $133=HEAP[$list]; //@line 78 "stropmodule.c"
        HEAP[$0]=$133; //@line 78 "stropmodule.c"
        __label__ = 33; break; //@line 78 "stropmodule.c"
      case 30: // $finally
        var $134=HEAP[$list]; //@line 80 "stropmodule.c"
        var $135=(($134)&4294967295); //@line 80 "stropmodule.c"
        var $136=HEAP[$135]; //@line 80 "stropmodule.c"
        var $137=((($136) - 1)&4294967295); //@line 80 "stropmodule.c"
        var $138=HEAP[$list]; //@line 80 "stropmodule.c"
        var $139=(($138)&4294967295); //@line 80 "stropmodule.c"
        HEAP[$139]=$137; //@line 80 "stropmodule.c"
        var $140=HEAP[$list]; //@line 80 "stropmodule.c"
        var $141=(($140)&4294967295); //@line 80 "stropmodule.c"
        var $142=HEAP[$141]; //@line 80 "stropmodule.c"
        var $143=((($142))|0)==0; //@line 80 "stropmodule.c"
        if ($143) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 80 "stropmodule.c"
      case 31: // $bb29
        var $144=HEAP[$list]; //@line 80 "stropmodule.c"
        var $145=(($144+4)&4294967295); //@line 80 "stropmodule.c"
        var $146=HEAP[$145]; //@line 80 "stropmodule.c"
        var $147=(($146+24)&4294967295); //@line 80 "stropmodule.c"
        var $148=HEAP[$147]; //@line 80 "stropmodule.c"
        var $149=HEAP[$list]; //@line 80 "stropmodule.c"
        FUNCTION_TABLE[$148]($149); //@line 80 "stropmodule.c"
        __label__ = 32; break; //@line 80 "stropmodule.c"
      case 32: // $bb30
        HEAP[$0]=0; //@line 81 "stropmodule.c"
        __label__ = 33; break; //@line 81 "stropmodule.c"
      case 33: // $bb31
        var $150=HEAP[$0]; //@line 39 "stropmodule.c"
        HEAP[$retval]=$150; //@line 39 "stropmodule.c"
        __label__ = 34; break; //@line 39 "stropmodule.c"
      case 34: // $return
        var $retval32=HEAP[$retval]; //@line 39 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 39 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_splitfields($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $len=__stackBase__+16;
        var $n=__stackBase__+20;
        var $i=__stackBase__+24;
        var $j=__stackBase__+28;
        var $err=__stackBase__+32;
        var $splitcount=__stackBase__+36;
        var $maxsplit=__stackBase__+40;
        var $s=__stackBase__+44;
        var $sub=__stackBase__+48;
        var $list=__stackBase__+52;
        var $item=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 104 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 104 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 104 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 104 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 104 "stropmodule.c"
        __label__ = 31; break; //@line 104 "stropmodule.c"
      case 2: // $bb1
        HEAP[$sub]=0; //@line 105 "stropmodule.c"
        HEAP[$n]=0; //@line 106 "stropmodule.c"
        HEAP[$splitcount]=0; //@line 107 "stropmodule.c"
        HEAP[$maxsplit]=0; //@line 108 "stropmodule.c"
        var $4=HEAP[$args_addr]; //@line 109 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str1)&4294967295), $s, $len, $sub, $n, $maxsplit); //@line 109 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 109 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 109 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 110 "stropmodule.c"
        __label__ = 31; break; //@line 110 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$sub]; //@line 111 "stropmodule.c"
        var $8=($7)==0; //@line 111 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 111 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[$maxsplit]; //@line 112 "stropmodule.c"
        var $10=HEAP[$len]; //@line 112 "stropmodule.c"
        var $11=HEAP[$s]; //@line 112 "stropmodule.c"
        var $12=_split_whitespace($11, $10, $9); //@line 112 "stropmodule.c"
        HEAP[$0]=$12; //@line 112 "stropmodule.c"
        __label__ = 31; break; //@line 112 "stropmodule.c"
      case 6: // $bb5
        var $13=HEAP[$n]; //@line 113 "stropmodule.c"
        var $14=((($13))|0)==0; //@line 113 "stropmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 113 "stropmodule.c"
      case 7: // $bb6
        var $15=HEAP[_PyExc_ValueError]; //@line 114 "stropmodule.c"
        _PyErr_SetString($15, ((__str2)&4294967295)); //@line 114 "stropmodule.c"
        HEAP[$0]=0; //@line 115 "stropmodule.c"
        __label__ = 31; break; //@line 115 "stropmodule.c"
      case 8: // $bb7
        var $16=_PyList_New(0); //@line 118 "stropmodule.c"
        HEAP[$list]=$16; //@line 118 "stropmodule.c"
        var $17=HEAP[$list]; //@line 119 "stropmodule.c"
        var $18=($17)==0; //@line 119 "stropmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 119 "stropmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 120 "stropmodule.c"
        __label__ = 31; break; //@line 120 "stropmodule.c"
      case 10: // $bb9
        HEAP[$j]=0; //@line 122 "stropmodule.c"
        var $19=HEAP[$j]; //@line 122 "stropmodule.c"
        HEAP[$i]=$19; //@line 122 "stropmodule.c"
        __label__ = 22; break; //@line 122 "stropmodule.c"
      case 11: // $bb10
        var $20=HEAP[$s]; //@line 124 "stropmodule.c"
        var $21=HEAP[$i]; //@line 124 "stropmodule.c"
        var $22=(($20+$21)&4294967295); //@line 124 "stropmodule.c"
        var $23=HEAP[$22]; //@line 124 "stropmodule.c"
        var $24=HEAP[$sub]; //@line 124 "stropmodule.c"
        var $25=(($24)&4294967295); //@line 124 "stropmodule.c"
        var $26=HEAP[$25]; //@line 124 "stropmodule.c"
        var $27=reSign(($23), 8, 0)!=reSign(($26), 8, 0); //@line 124 "stropmodule.c"
        if ($27) { __label__ = 21; break; } else { __label__ = 12; break; } //@line 124 "stropmodule.c"
      case 12: // $bb11
        var $28=HEAP[$n]; //@line 124 "stropmodule.c"
        var $29=((($28))|0)==1; //@line 124 "stropmodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 124 "stropmodule.c"
      case 13: // $bb12
        var $30=HEAP[$n]; //@line 124 "stropmodule.c"
        var $31=HEAP[$sub]; //@line 124 "stropmodule.c"
        var $32=HEAP[$s]; //@line 124 "stropmodule.c"
        var $33=HEAP[$i]; //@line 124 "stropmodule.c"
        var $34=(($32+$33)&4294967295); //@line 124 "stropmodule.c"
        var $35=_memcmp($34, $31, $30); //@line 124 "stropmodule.c"
        var $36=((($35))|0)==0; //@line 124 "stropmodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 21; break; } //@line 124 "stropmodule.c"
      case 14: // $bb13
        var $37=HEAP[$i]; //@line 125 "stropmodule.c"
        var $38=HEAP[$j]; //@line 125 "stropmodule.c"
        var $39=((($37) - ($38))&4294967295); //@line 125 "stropmodule.c"
        var $40=HEAP[$s]; //@line 125 "stropmodule.c"
        var $41=HEAP[$j]; //@line 125 "stropmodule.c"
        var $42=(($40+$41)&4294967295); //@line 125 "stropmodule.c"
        var $43=_PyString_FromStringAndSize($42, $39); //@line 125 "stropmodule.c"
        HEAP[$item]=$43; //@line 125 "stropmodule.c"
        var $44=HEAP[$item]; //@line 126 "stropmodule.c"
        var $45=($44)==0; //@line 126 "stropmodule.c"
        if ($45) { __label__ = 28; break; } else { __label__ = 15; break; } //@line 126 "stropmodule.c"
      case 15: // $bb14
        var $46=HEAP[$list]; //@line 128 "stropmodule.c"
        var $47=HEAP[$item]; //@line 128 "stropmodule.c"
        var $48=_PyList_Append($46, $47); //@line 128 "stropmodule.c"
        HEAP[$err]=$48; //@line 128 "stropmodule.c"
        var $49=HEAP[$item]; //@line 129 "stropmodule.c"
        var $50=(($49)&4294967295); //@line 129 "stropmodule.c"
        var $51=HEAP[$50]; //@line 129 "stropmodule.c"
        var $52=((($51) - 1)&4294967295); //@line 129 "stropmodule.c"
        var $53=HEAP[$item]; //@line 129 "stropmodule.c"
        var $54=(($53)&4294967295); //@line 129 "stropmodule.c"
        HEAP[$54]=$52; //@line 129 "stropmodule.c"
        var $55=HEAP[$item]; //@line 129 "stropmodule.c"
        var $56=(($55)&4294967295); //@line 129 "stropmodule.c"
        var $57=HEAP[$56]; //@line 129 "stropmodule.c"
        var $58=((($57))|0)==0; //@line 129 "stropmodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 129 "stropmodule.c"
      case 16: // $bb15
        var $59=HEAP[$item]; //@line 129 "stropmodule.c"
        var $60=(($59+4)&4294967295); //@line 129 "stropmodule.c"
        var $61=HEAP[$60]; //@line 129 "stropmodule.c"
        var $62=(($61+24)&4294967295); //@line 129 "stropmodule.c"
        var $63=HEAP[$62]; //@line 129 "stropmodule.c"
        var $64=HEAP[$item]; //@line 129 "stropmodule.c"
        FUNCTION_TABLE[$63]($64); //@line 129 "stropmodule.c"
        __label__ = 17; break; //@line 129 "stropmodule.c"
      case 17: // $bb16
        var $65=HEAP[$err]; //@line 130 "stropmodule.c"
        var $66=((($65))|0) < 0; //@line 130 "stropmodule.c"
        if ($66) { __label__ = 28; break; } else { __label__ = 18; break; } //@line 130 "stropmodule.c"
      case 18: // $bb17
        var $67=HEAP[$n]; //@line 132 "stropmodule.c"
        var $68=HEAP[$i]; //@line 132 "stropmodule.c"
        var $69=((($68) + ($67))&4294967295); //@line 132 "stropmodule.c"
        HEAP[$j]=$69; //@line 132 "stropmodule.c"
        var $70=HEAP[$j]; //@line 132 "stropmodule.c"
        HEAP[$i]=$70; //@line 132 "stropmodule.c"
        var $71=HEAP[$splitcount]; //@line 133 "stropmodule.c"
        var $72=((($71) + 1)&4294967295); //@line 133 "stropmodule.c"
        HEAP[$splitcount]=$72; //@line 133 "stropmodule.c"
        var $73=HEAP[$maxsplit]; //@line 134 "stropmodule.c"
        var $74=((($73))|0)!=0; //@line 134 "stropmodule.c"
        if ($74) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 134 "stropmodule.c"
      case 19: // $bb18
        var $75=HEAP[$maxsplit]; //@line 134 "stropmodule.c"
        var $76=HEAP[$splitcount]; //@line 134 "stropmodule.c"
        var $77=((($76))|0) >= ((($75))|0); //@line 134 "stropmodule.c"
        if ($77) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 134 "stropmodule.c"
      case 20: // $bb19
        __label__ = 22; break; //@line 134 "stropmodule.c"
      case 21: // $bb20
        var $78=HEAP[$i]; //@line 138 "stropmodule.c"
        var $79=((($78) + 1)&4294967295); //@line 138 "stropmodule.c"
        HEAP[$i]=$79; //@line 138 "stropmodule.c"
        __label__ = 22; break; //@line 138 "stropmodule.c"
      case 22: // $bb21
        var $80=HEAP[$n]; //@line 123 "stropmodule.c"
        var $81=HEAP[$i]; //@line 123 "stropmodule.c"
        var $82=((($81) + ($80))&4294967295); //@line 123 "stropmodule.c"
        var $83=HEAP[$len]; //@line 123 "stropmodule.c"
        var $84=((($82))|0) <= ((($83))|0); //@line 123 "stropmodule.c"
        if ($84) { __label__ = 11; break; } else { __label__ = 23; break; } //@line 123 "stropmodule.c"
      case 23: // $bb22
        var $85=HEAP[$len]; //@line 140 "stropmodule.c"
        var $86=HEAP[$j]; //@line 140 "stropmodule.c"
        var $87=((($85) - ($86))&4294967295); //@line 140 "stropmodule.c"
        var $88=HEAP[$s]; //@line 140 "stropmodule.c"
        var $89=HEAP[$j]; //@line 140 "stropmodule.c"
        var $90=(($88+$89)&4294967295); //@line 140 "stropmodule.c"
        var $91=_PyString_FromStringAndSize($90, $87); //@line 140 "stropmodule.c"
        HEAP[$item]=$91; //@line 140 "stropmodule.c"
        var $92=HEAP[$item]; //@line 141 "stropmodule.c"
        var $93=($92)==0; //@line 141 "stropmodule.c"
        if ($93) { __label__ = 28; break; } else { __label__ = 24; break; } //@line 141 "stropmodule.c"
      case 24: // $bb23
        var $94=HEAP[$list]; //@line 143 "stropmodule.c"
        var $95=HEAP[$item]; //@line 143 "stropmodule.c"
        var $96=_PyList_Append($94, $95); //@line 143 "stropmodule.c"
        HEAP[$err]=$96; //@line 143 "stropmodule.c"
        var $97=HEAP[$item]; //@line 144 "stropmodule.c"
        var $98=(($97)&4294967295); //@line 144 "stropmodule.c"
        var $99=HEAP[$98]; //@line 144 "stropmodule.c"
        var $100=((($99) - 1)&4294967295); //@line 144 "stropmodule.c"
        var $101=HEAP[$item]; //@line 144 "stropmodule.c"
        var $102=(($101)&4294967295); //@line 144 "stropmodule.c"
        HEAP[$102]=$100; //@line 144 "stropmodule.c"
        var $103=HEAP[$item]; //@line 144 "stropmodule.c"
        var $104=(($103)&4294967295); //@line 144 "stropmodule.c"
        var $105=HEAP[$104]; //@line 144 "stropmodule.c"
        var $106=((($105))|0)==0; //@line 144 "stropmodule.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 144 "stropmodule.c"
      case 25: // $bb24
        var $107=HEAP[$item]; //@line 144 "stropmodule.c"
        var $108=(($107+4)&4294967295); //@line 144 "stropmodule.c"
        var $109=HEAP[$108]; //@line 144 "stropmodule.c"
        var $110=(($109+24)&4294967295); //@line 144 "stropmodule.c"
        var $111=HEAP[$110]; //@line 144 "stropmodule.c"
        var $112=HEAP[$item]; //@line 144 "stropmodule.c"
        FUNCTION_TABLE[$111]($112); //@line 144 "stropmodule.c"
        __label__ = 26; break; //@line 144 "stropmodule.c"
      case 26: // $bb25
        var $113=HEAP[$err]; //@line 145 "stropmodule.c"
        var $114=((($113))|0) < 0; //@line 145 "stropmodule.c"
        if ($114) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 145 "stropmodule.c"
      case 27: // $bb26
        var $115=HEAP[$list]; //@line 148 "stropmodule.c"
        HEAP[$0]=$115; //@line 148 "stropmodule.c"
        __label__ = 31; break; //@line 148 "stropmodule.c"
      case 28: // $fail
        var $116=HEAP[$list]; //@line 151 "stropmodule.c"
        var $117=(($116)&4294967295); //@line 151 "stropmodule.c"
        var $118=HEAP[$117]; //@line 151 "stropmodule.c"
        var $119=((($118) - 1)&4294967295); //@line 151 "stropmodule.c"
        var $120=HEAP[$list]; //@line 151 "stropmodule.c"
        var $121=(($120)&4294967295); //@line 151 "stropmodule.c"
        HEAP[$121]=$119; //@line 151 "stropmodule.c"
        var $122=HEAP[$list]; //@line 151 "stropmodule.c"
        var $123=(($122)&4294967295); //@line 151 "stropmodule.c"
        var $124=HEAP[$123]; //@line 151 "stropmodule.c"
        var $125=((($124))|0)==0; //@line 151 "stropmodule.c"
        if ($125) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 151 "stropmodule.c"
      case 29: // $bb27
        var $126=HEAP[$list]; //@line 151 "stropmodule.c"
        var $127=(($126+4)&4294967295); //@line 151 "stropmodule.c"
        var $128=HEAP[$127]; //@line 151 "stropmodule.c"
        var $129=(($128+24)&4294967295); //@line 151 "stropmodule.c"
        var $130=HEAP[$129]; //@line 151 "stropmodule.c"
        var $131=HEAP[$list]; //@line 151 "stropmodule.c"
        FUNCTION_TABLE[$130]($131); //@line 151 "stropmodule.c"
        __label__ = 30; break; //@line 151 "stropmodule.c"
      case 30: // $bb28
        HEAP[$0]=0; //@line 152 "stropmodule.c"
        __label__ = 31; break; //@line 152 "stropmodule.c"
      case 31: // $bb29
        var $132=HEAP[$0]; //@line 104 "stropmodule.c"
        HEAP[$retval]=$132; //@line 104 "stropmodule.c"
        __label__ = 32; break; //@line 104 "stropmodule.c"
      case 32: // $return
        var $retval30=HEAP[$retval]; //@line 104 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 104 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_joinfields($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $seq=__stackBase__+16;
        var $sep=__stackBase__+20;
        var $seqlen=__stackBase__+24;
        var $seplen=__stackBase__+28;
        var $i=__stackBase__+32;
        var $reslen=__stackBase__+36;
        var $slen=__stackBase__+40;
        var $sz=__stackBase__+44;
        var $res=__stackBase__+48;
        var $p=__stackBase__+52;
        var $getitemfunc=__stackBase__+56;
        var $item=__stackBase__+60;
        var $item20=__stackBase__+64;
        var $item44=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sep]=0; //@line 170 "stropmodule.c"
        HEAP[$seplen]=0; //@line 171 "stropmodule.c"
        HEAP[$reslen]=0; //@line 172 "stropmodule.c"
        HEAP[$slen]=0; //@line 172 "stropmodule.c"
        HEAP[$sz]=100; //@line 172 "stropmodule.c"
        HEAP[$res]=0; //@line 173 "stropmodule.c"
        HEAP[$p]=0; //@line 174 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 177 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 177 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 177 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 177 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 177 "stropmodule.c"
        __label__ = 73; break; //@line 177 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 178 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str3)&4294967295), $seq, $sep, $seplen); //@line 178 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 178 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 178 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 179 "stropmodule.c"
        __label__ = 73; break; //@line 179 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$sep]; //@line 180 "stropmodule.c"
        var $8=($7)==0; //@line 180 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 180 "stropmodule.c"
      case 5: // $bb4
        HEAP[$sep]=((__str4)&4294967295); //@line 181 "stropmodule.c"
        HEAP[$seplen]=1; //@line 182 "stropmodule.c"
        __label__ = 6; break; //@line 182 "stropmodule.c"
      case 6: // $bb5
        var $9=HEAP[$seq]; //@line 185 "stropmodule.c"
        var $10=_PySequence_Size($9); //@line 185 "stropmodule.c"
        HEAP[$seqlen]=$10; //@line 185 "stropmodule.c"
        var $11=HEAP[$seqlen]; //@line 186 "stropmodule.c"
        var $12=((($11))|0) < 0; //@line 186 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 186 "stropmodule.c"
      case 7: // $bb6
        var $13=_PyErr_Occurred(); //@line 186 "stropmodule.c"
        var $14=($13)!=0; //@line 186 "stropmodule.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 186 "stropmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 187 "stropmodule.c"
        __label__ = 73; break; //@line 187 "stropmodule.c"
      case 9: // $bb8
        var $15=HEAP[$seqlen]; //@line 189 "stropmodule.c"
        var $16=((($15))|0)==1; //@line 189 "stropmodule.c"
        if ($16) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 189 "stropmodule.c"
      case 10: // $bb9
        var $17=HEAP[$seq]; //@line 191 "stropmodule.c"
        var $18=_PySequence_GetItem($17, 0); //@line 191 "stropmodule.c"
        HEAP[$item]=$18; //@line 191 "stropmodule.c"
        var $19=HEAP[$item]; //@line 192 "stropmodule.c"
        var $20=($19)!=0; //@line 192 "stropmodule.c"
        if ($20) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 192 "stropmodule.c"
      case 11: // $bb10
        var $21=HEAP[$item]; //@line 192 "stropmodule.c"
        var $22=(($21+4)&4294967295); //@line 192 "stropmodule.c"
        var $23=HEAP[$22]; //@line 192 "stropmodule.c"
        var $24=(($23+84)&4294967295); //@line 192 "stropmodule.c"
        var $25=HEAP[$24]; //@line 192 "stropmodule.c"
        var $26=($25) & 134217728; //@line 192 "stropmodule.c"
        var $27=((($26))|0)==0; //@line 192 "stropmodule.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 192 "stropmodule.c"
      case 12: // $bb11
        var $28=HEAP[_PyExc_TypeError]; //@line 193 "stropmodule.c"
        _PyErr_SetString($28, ((__str5)&4294967295)); //@line 193 "stropmodule.c"
        var $29=HEAP[$item]; //@line 195 "stropmodule.c"
        var $30=(($29)&4294967295); //@line 195 "stropmodule.c"
        var $31=HEAP[$30]; //@line 195 "stropmodule.c"
        var $32=((($31) - 1)&4294967295); //@line 195 "stropmodule.c"
        var $33=HEAP[$item]; //@line 195 "stropmodule.c"
        var $34=(($33)&4294967295); //@line 195 "stropmodule.c"
        HEAP[$34]=$32; //@line 195 "stropmodule.c"
        var $35=HEAP[$item]; //@line 195 "stropmodule.c"
        var $36=(($35)&4294967295); //@line 195 "stropmodule.c"
        var $37=HEAP[$36]; //@line 195 "stropmodule.c"
        var $38=((($37))|0)==0; //@line 195 "stropmodule.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 195 "stropmodule.c"
      case 13: // $bb12
        var $39=HEAP[$item]; //@line 195 "stropmodule.c"
        var $40=(($39+4)&4294967295); //@line 195 "stropmodule.c"
        var $41=HEAP[$40]; //@line 195 "stropmodule.c"
        var $42=(($41+24)&4294967295); //@line 195 "stropmodule.c"
        var $43=HEAP[$42]; //@line 195 "stropmodule.c"
        var $44=HEAP[$item]; //@line 195 "stropmodule.c"
        FUNCTION_TABLE[$43]($44); //@line 195 "stropmodule.c"
        __label__ = 14; break; //@line 195 "stropmodule.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 196 "stropmodule.c"
        __label__ = 73; break; //@line 196 "stropmodule.c"
      case 15: // $bb14
        var $45=HEAP[$item]; //@line 198 "stropmodule.c"
        HEAP[$0]=$45; //@line 198 "stropmodule.c"
        __label__ = 73; break; //@line 198 "stropmodule.c"
      case 16: // $bb15
        var $46=HEAP[$sz]; //@line 201 "stropmodule.c"
        var $47=_PyString_FromStringAndSize(0, $46); //@line 201 "stropmodule.c"
        HEAP[$res]=$47; //@line 201 "stropmodule.c"
        var $48=HEAP[$res]; //@line 201 "stropmodule.c"
        var $49=($48)==0; //@line 201 "stropmodule.c"
        if ($49) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 201 "stropmodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 202 "stropmodule.c"
        __label__ = 73; break; //@line 202 "stropmodule.c"
      case 18: // $bb17
        var $50=HEAP[$res]; //@line 203 "stropmodule.c"
        var $51=_PyString_AsString($50); //@line 203 "stropmodule.c"
        HEAP[$p]=$51; //@line 203 "stropmodule.c"
        var $52=HEAP[$seq]; //@line 209 "stropmodule.c"
        var $53=(($52+4)&4294967295); //@line 209 "stropmodule.c"
        var $54=HEAP[$53]; //@line 209 "stropmodule.c"
        var $55=(($54+84)&4294967295); //@line 209 "stropmodule.c"
        var $56=HEAP[$55]; //@line 209 "stropmodule.c"
        var $57=($56) & 33554432; //@line 209 "stropmodule.c"
        var $58=((($57))|0)!=0; //@line 209 "stropmodule.c"
        if ($58) { __label__ = 19; break; } else { __label__ = 39; break; } //@line 209 "stropmodule.c"
      case 19: // $bb18
        HEAP[$i]=0; //@line 210 "stropmodule.c"
        __label__ = 37; break; //@line 210 "stropmodule.c"
      case 20: // $bb19
        var $59=HEAP[$seq]; //@line 211 "stropmodule.c"
        var $60=$59; //@line 211 "stropmodule.c"
        var $61=(($60+12)&4294967295); //@line 211 "stropmodule.c"
        var $62=HEAP[$61]; //@line 211 "stropmodule.c"
        var $63=HEAP[$i]; //@line 211 "stropmodule.c"
        var $64=(($62+4*$63)&4294967295); //@line 211 "stropmodule.c"
        var $65=HEAP[$64]; //@line 211 "stropmodule.c"
        HEAP[$item20]=$65; //@line 211 "stropmodule.c"
        var $66=HEAP[$item20]; //@line 212 "stropmodule.c"
        var $67=(($66+4)&4294967295); //@line 212 "stropmodule.c"
        var $68=HEAP[$67]; //@line 212 "stropmodule.c"
        var $69=(($68+84)&4294967295); //@line 212 "stropmodule.c"
        var $70=HEAP[$69]; //@line 212 "stropmodule.c"
        var $71=($70) & 134217728; //@line 212 "stropmodule.c"
        var $72=((($71))|0)==0; //@line 212 "stropmodule.c"
        if ($72) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 212 "stropmodule.c"
      case 21: // $bb21
        var $73=HEAP[_PyExc_TypeError]; //@line 213 "stropmodule.c"
        _PyErr_SetString($73, ((__str5)&4294967295)); //@line 213 "stropmodule.c"
        var $74=HEAP[$res]; //@line 215 "stropmodule.c"
        var $75=(($74)&4294967295); //@line 215 "stropmodule.c"
        var $76=HEAP[$75]; //@line 215 "stropmodule.c"
        var $77=((($76) - 1)&4294967295); //@line 215 "stropmodule.c"
        var $78=(($74)&4294967295); //@line 215 "stropmodule.c"
        HEAP[$78]=$77; //@line 215 "stropmodule.c"
        var $79=(($74)&4294967295); //@line 215 "stropmodule.c"
        var $80=HEAP[$79]; //@line 215 "stropmodule.c"
        var $81=((($80))|0)==0; //@line 215 "stropmodule.c"
        if ($81) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 215 "stropmodule.c"
      case 22: // $bb22
        var $82=HEAP[$res]; //@line 215 "stropmodule.c"
        var $83=(($82+4)&4294967295); //@line 215 "stropmodule.c"
        var $84=HEAP[$83]; //@line 215 "stropmodule.c"
        var $85=(($84+24)&4294967295); //@line 215 "stropmodule.c"
        var $86=HEAP[$85]; //@line 215 "stropmodule.c"
        var $87=HEAP[$res]; //@line 215 "stropmodule.c"
        FUNCTION_TABLE[$86]($87); //@line 215 "stropmodule.c"
        __label__ = 23; break; //@line 215 "stropmodule.c"
      case 23: // $bb23
        HEAP[$0]=0; //@line 216 "stropmodule.c"
        __label__ = 73; break; //@line 216 "stropmodule.c"
      case 24: // $bb24
        var $88=HEAP[$item20]; //@line 218 "stropmodule.c"
        var $89=$88; //@line 218 "stropmodule.c"
        var $90=(($89+8)&4294967295); //@line 218 "stropmodule.c"
        var $91=HEAP[$90]; //@line 218 "stropmodule.c"
        HEAP[$slen]=$91; //@line 218 "stropmodule.c"
        var $92=HEAP[$reslen]; //@line 219 "stropmodule.c"
        var $93=((2147483647 - ($92))&4294967295); //@line 219 "stropmodule.c"
        var $94=HEAP[$slen]; //@line 219 "stropmodule.c"
        var $95=((($93))|0) < ((($94))|0); //@line 219 "stropmodule.c"
        if ($95) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 219 "stropmodule.c"
      case 25: // $bb25
        var $96=HEAP[$reslen]; //@line 219 "stropmodule.c"
        var $97=((2147483647 - ($96))&4294967295); //@line 219 "stropmodule.c"
        var $98=HEAP[$seplen]; //@line 219 "stropmodule.c"
        var $99=((($97) - ($98))&4294967295); //@line 219 "stropmodule.c"
        var $100=HEAP[$seplen]; //@line 219 "stropmodule.c"
        var $101=((($99))|0) < ((($100))|0); //@line 219 "stropmodule.c"
        if ($101) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 219 "stropmodule.c"
      case 26: // $bb26
        var $102=HEAP[_PyExc_OverflowError]; //@line 221 "stropmodule.c"
        _PyErr_SetString($102, ((__str6)&4294967295)); //@line 221 "stropmodule.c"
        var $103=HEAP[$res]; //@line 223 "stropmodule.c"
        var $104=(($103)&4294967295); //@line 223 "stropmodule.c"
        var $105=HEAP[$104]; //@line 223 "stropmodule.c"
        var $106=((($105) - 1)&4294967295); //@line 223 "stropmodule.c"
        var $107=(($103)&4294967295); //@line 223 "stropmodule.c"
        HEAP[$107]=$106; //@line 223 "stropmodule.c"
        var $108=(($103)&4294967295); //@line 223 "stropmodule.c"
        var $109=HEAP[$108]; //@line 223 "stropmodule.c"
        var $110=((($109))|0)==0; //@line 223 "stropmodule.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 223 "stropmodule.c"
      case 27: // $bb27
        var $111=HEAP[$res]; //@line 223 "stropmodule.c"
        var $112=(($111+4)&4294967295); //@line 223 "stropmodule.c"
        var $113=HEAP[$112]; //@line 223 "stropmodule.c"
        var $114=(($113+24)&4294967295); //@line 223 "stropmodule.c"
        var $115=HEAP[$114]; //@line 223 "stropmodule.c"
        var $116=HEAP[$res]; //@line 223 "stropmodule.c"
        FUNCTION_TABLE[$115]($116); //@line 223 "stropmodule.c"
        __label__ = 28; break; //@line 223 "stropmodule.c"
      case 28: // $bb28
        HEAP[$0]=0; //@line 224 "stropmodule.c"
        __label__ = 73; break; //@line 224 "stropmodule.c"
      case 29: // $bb29
        __label__ = 33; break; //@line 224 "stropmodule.c"
      case 30: // $bb30
        var $117=HEAP[$sz]; //@line 227 "stropmodule.c"
        var $118=((($117) * 2)&4294967295); //@line 227 "stropmodule.c"
        var $119=__PyString_Resize($res, $118); //@line 227 "stropmodule.c"
        var $120=((($119))|0) < 0; //@line 227 "stropmodule.c"
        if ($120) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 227 "stropmodule.c"
      case 31: // $bb31
        HEAP[$0]=0; //@line 228 "stropmodule.c"
        __label__ = 73; break; //@line 228 "stropmodule.c"
      case 32: // $bb32
        var $121=HEAP[$sz]; //@line 229 "stropmodule.c"
        var $122=((($121) * 2)&4294967295); //@line 229 "stropmodule.c"
        HEAP[$sz]=$122; //@line 229 "stropmodule.c"
        var $123=HEAP[$res]; //@line 230 "stropmodule.c"
        var $124=_PyString_AsString($123); //@line 230 "stropmodule.c"
        var $125=HEAP[$reslen]; //@line 230 "stropmodule.c"
        var $126=(($124+$125)&4294967295); //@line 230 "stropmodule.c"
        HEAP[$p]=$126; //@line 230 "stropmodule.c"
        __label__ = 33; break; //@line 230 "stropmodule.c"
      case 33: // $bb33
        var $127=HEAP[$reslen]; //@line 226 "stropmodule.c"
        var $128=HEAP[$slen]; //@line 226 "stropmodule.c"
        var $129=((($127) + ($128))&4294967295); //@line 226 "stropmodule.c"
        var $130=HEAP[$seplen]; //@line 226 "stropmodule.c"
        var $131=((($129) + ($130))&4294967295); //@line 226 "stropmodule.c"
        var $132=HEAP[$sz]; //@line 226 "stropmodule.c"
        var $133=((($131))|0) >= ((($132))|0); //@line 226 "stropmodule.c"
        if ($133) { __label__ = 30; break; } else { __label__ = 34; break; } //@line 226 "stropmodule.c"
      case 34: // $bb34
        var $134=HEAP[$i]; //@line 232 "stropmodule.c"
        var $135=((($134))|0) > 0; //@line 232 "stropmodule.c"
        if ($135) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 232 "stropmodule.c"
      case 35: // $bb35
        var $136=HEAP[$seplen]; //@line 233 "stropmodule.c"
        var $137=HEAP[$sep]; //@line 233 "stropmodule.c"
        var $138=HEAP[$p]; //@line 233 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($138, $137, $136, 1, 0); //@line 233 "stropmodule.c"
        var $139=HEAP[$seplen]; //@line 234 "stropmodule.c"
        var $140=HEAP[$p]; //@line 234 "stropmodule.c"
        var $141=(($140+$139)&4294967295); //@line 234 "stropmodule.c"
        HEAP[$p]=$141; //@line 234 "stropmodule.c"
        var $142=HEAP[$seplen]; //@line 235 "stropmodule.c"
        var $143=HEAP[$reslen]; //@line 235 "stropmodule.c"
        var $144=((($143) + ($142))&4294967295); //@line 235 "stropmodule.c"
        HEAP[$reslen]=$144; //@line 235 "stropmodule.c"
        __label__ = 36; break; //@line 235 "stropmodule.c"
      case 36: // $bb36
        var $145=HEAP[$slen]; //@line 237 "stropmodule.c"
        var $146=HEAP[$item20]; //@line 237 "stropmodule.c"
        var $147=$146; //@line 237 "stropmodule.c"
        var $148=(($147+20)&4294967295); //@line 237 "stropmodule.c"
        var $149=(($148)&4294967295); //@line 237 "stropmodule.c"
        var $150=HEAP[$p]; //@line 237 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($150, $149, $145, 1, 0); //@line 237 "stropmodule.c"
        var $151=HEAP[$p]; //@line 238 "stropmodule.c"
        var $152=HEAP[$slen]; //@line 238 "stropmodule.c"
        var $153=(($151+$152)&4294967295); //@line 238 "stropmodule.c"
        HEAP[$p]=$153; //@line 238 "stropmodule.c"
        var $154=HEAP[$reslen]; //@line 239 "stropmodule.c"
        var $155=HEAP[$slen]; //@line 239 "stropmodule.c"
        var $156=((($154) + ($155))&4294967295); //@line 239 "stropmodule.c"
        HEAP[$reslen]=$156; //@line 239 "stropmodule.c"
        var $157=HEAP[$i]; //@line 210 "stropmodule.c"
        var $158=((($157) + 1)&4294967295); //@line 210 "stropmodule.c"
        HEAP[$i]=$158; //@line 210 "stropmodule.c"
        __label__ = 37; break; //@line 210 "stropmodule.c"
      case 37: // $bb37
        var $159=HEAP[$i]; //@line 210 "stropmodule.c"
        var $160=HEAP[$seqlen]; //@line 210 "stropmodule.c"
        var $161=((($159))|0) < ((($160))|0); //@line 210 "stropmodule.c"
        if ($161) { __label__ = 20; break; } else { __label__ = 38; break; } //@line 210 "stropmodule.c"
      case 38: // $bb38
        var $162=HEAP[$reslen]; //@line 241 "stropmodule.c"
        var $163=__PyString_Resize($res, $162); //@line 241 "stropmodule.c"
        var $164=HEAP[$res]; //@line 242 "stropmodule.c"
        HEAP[$0]=$164; //@line 242 "stropmodule.c"
        __label__ = 73; break; //@line 242 "stropmodule.c"
      case 39: // $bb39
        var $165=HEAP[$seq]; //@line 245 "stropmodule.c"
        var $166=(($165+4)&4294967295); //@line 245 "stropmodule.c"
        var $167=HEAP[$166]; //@line 245 "stropmodule.c"
        var $168=(($167+52)&4294967295); //@line 245 "stropmodule.c"
        var $169=HEAP[$168]; //@line 245 "stropmodule.c"
        var $170=($169)==0; //@line 245 "stropmodule.c"
        if ($170) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 245 "stropmodule.c"
      case 40: // $bb40
        var $171=HEAP[$seq]; //@line 245 "stropmodule.c"
        var $172=(($171+4)&4294967295); //@line 245 "stropmodule.c"
        var $173=HEAP[$172]; //@line 245 "stropmodule.c"
        var $174=(($173+52)&4294967295); //@line 245 "stropmodule.c"
        var $175=HEAP[$174]; //@line 245 "stropmodule.c"
        var $176=(($175+12)&4294967295); //@line 245 "stropmodule.c"
        var $177=HEAP[$176]; //@line 245 "stropmodule.c"
        HEAP[$getitemfunc]=$177; //@line 245 "stropmodule.c"
        var $178=HEAP[$getitemfunc]; //@line 245 "stropmodule.c"
        var $179=($178)==0; //@line 245 "stropmodule.c"
        if ($179) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 245 "stropmodule.c"
      case 41: // $bb41
        var $180=HEAP[_PyExc_TypeError]; //@line 248 "stropmodule.c"
        _PyErr_SetString($180, ((__str7)&4294967295)); //@line 248 "stropmodule.c"
        HEAP[$0]=0; //@line 250 "stropmodule.c"
        __label__ = 73; break; //@line 250 "stropmodule.c"
      case 42: // $bb42
        HEAP[$i]=0; //@line 253 "stropmodule.c"
        __label__ = 71; break; //@line 253 "stropmodule.c"
      case 43: // $bb43
        var $181=HEAP[$seq]; //@line 254 "stropmodule.c"
        var $182=HEAP[$getitemfunc]; //@line 254 "stropmodule.c"
        var $183=HEAP[$i]; //@line 254 "stropmodule.c"
        var $184=FUNCTION_TABLE[$182]($181, $183); //@line 254 "stropmodule.c"
        HEAP[$item44]=$184; //@line 254 "stropmodule.c"
        var $185=HEAP[$item44]; //@line 255 "stropmodule.c"
        var $186=($185)==0; //@line 255 "stropmodule.c"
        if ($186) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 255 "stropmodule.c"
      case 44: // $bb45
        var $187=HEAP[$item44]; //@line 255 "stropmodule.c"
        var $188=(($187+4)&4294967295); //@line 255 "stropmodule.c"
        var $189=HEAP[$188]; //@line 255 "stropmodule.c"
        var $190=(($189+84)&4294967295); //@line 255 "stropmodule.c"
        var $191=HEAP[$190]; //@line 255 "stropmodule.c"
        var $192=($191) & 134217728; //@line 255 "stropmodule.c"
        var $193=((($192))|0)==0; //@line 255 "stropmodule.c"
        if ($193) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 255 "stropmodule.c"
      case 45: // $bb46
        var $194=HEAP[_PyExc_TypeError]; //@line 256 "stropmodule.c"
        _PyErr_SetString($194, ((__str5)&4294967295)); //@line 256 "stropmodule.c"
        var $195=HEAP[$res]; //@line 258 "stropmodule.c"
        var $196=(($195)&4294967295); //@line 258 "stropmodule.c"
        var $197=HEAP[$196]; //@line 258 "stropmodule.c"
        var $198=((($197) - 1)&4294967295); //@line 258 "stropmodule.c"
        var $199=(($195)&4294967295); //@line 258 "stropmodule.c"
        HEAP[$199]=$198; //@line 258 "stropmodule.c"
        var $200=(($195)&4294967295); //@line 258 "stropmodule.c"
        var $201=HEAP[$200]; //@line 258 "stropmodule.c"
        var $202=((($201))|0)==0; //@line 258 "stropmodule.c"
        if ($202) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 258 "stropmodule.c"
      case 46: // $bb47
        var $203=HEAP[$res]; //@line 258 "stropmodule.c"
        var $204=(($203+4)&4294967295); //@line 258 "stropmodule.c"
        var $205=HEAP[$204]; //@line 258 "stropmodule.c"
        var $206=(($205+24)&4294967295); //@line 258 "stropmodule.c"
        var $207=HEAP[$206]; //@line 258 "stropmodule.c"
        var $208=HEAP[$res]; //@line 258 "stropmodule.c"
        FUNCTION_TABLE[$207]($208); //@line 258 "stropmodule.c"
        __label__ = 47; break; //@line 258 "stropmodule.c"
      case 47: // $bb48
        var $209=HEAP[$item44]; //@line 259 "stropmodule.c"
        var $210=($209)!=0; //@line 259 "stropmodule.c"
        if ($210) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 259 "stropmodule.c"
      case 48: // $bb49
        var $211=HEAP[$item44]; //@line 259 "stropmodule.c"
        var $212=(($211)&4294967295); //@line 259 "stropmodule.c"
        var $213=HEAP[$212]; //@line 259 "stropmodule.c"
        var $214=((($213) - 1)&4294967295); //@line 259 "stropmodule.c"
        var $215=HEAP[$item44]; //@line 259 "stropmodule.c"
        var $216=(($215)&4294967295); //@line 259 "stropmodule.c"
        HEAP[$216]=$214; //@line 259 "stropmodule.c"
        var $217=HEAP[$item44]; //@line 259 "stropmodule.c"
        var $218=(($217)&4294967295); //@line 259 "stropmodule.c"
        var $219=HEAP[$218]; //@line 259 "stropmodule.c"
        var $220=((($219))|0)==0; //@line 259 "stropmodule.c"
        if ($220) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 259 "stropmodule.c"
      case 49: // $bb50
        var $221=HEAP[$item44]; //@line 259 "stropmodule.c"
        var $222=(($221+4)&4294967295); //@line 259 "stropmodule.c"
        var $223=HEAP[$222]; //@line 259 "stropmodule.c"
        var $224=(($223+24)&4294967295); //@line 259 "stropmodule.c"
        var $225=HEAP[$224]; //@line 259 "stropmodule.c"
        var $226=HEAP[$item44]; //@line 259 "stropmodule.c"
        FUNCTION_TABLE[$225]($226); //@line 259 "stropmodule.c"
        __label__ = 50; break; //@line 259 "stropmodule.c"
      case 50: // $bb51
        HEAP[$0]=0; //@line 260 "stropmodule.c"
        __label__ = 73; break; //@line 260 "stropmodule.c"
      case 51: // $bb52
        var $227=HEAP[$item44]; //@line 262 "stropmodule.c"
        var $228=$227; //@line 262 "stropmodule.c"
        var $229=(($228+8)&4294967295); //@line 262 "stropmodule.c"
        var $230=HEAP[$229]; //@line 262 "stropmodule.c"
        HEAP[$slen]=$230; //@line 262 "stropmodule.c"
        var $231=HEAP[$reslen]; //@line 263 "stropmodule.c"
        var $232=((2147483647 - ($231))&4294967295); //@line 263 "stropmodule.c"
        var $233=HEAP[$slen]; //@line 263 "stropmodule.c"
        var $234=((($232))|0) < ((($233))|0); //@line 263 "stropmodule.c"
        if ($234) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 263 "stropmodule.c"
      case 52: // $bb53
        var $235=HEAP[$reslen]; //@line 263 "stropmodule.c"
        var $236=((2147483647 - ($235))&4294967295); //@line 263 "stropmodule.c"
        var $237=HEAP[$seplen]; //@line 263 "stropmodule.c"
        var $238=((($236) - ($237))&4294967295); //@line 263 "stropmodule.c"
        var $239=HEAP[$seplen]; //@line 263 "stropmodule.c"
        var $240=((($238))|0) < ((($239))|0); //@line 263 "stropmodule.c"
        if ($240) { __label__ = 53; break; } else { __label__ = 59; break; } //@line 263 "stropmodule.c"
      case 53: // $bb54
        var $241=HEAP[_PyExc_OverflowError]; //@line 265 "stropmodule.c"
        _PyErr_SetString($241, ((__str6)&4294967295)); //@line 265 "stropmodule.c"
        var $242=HEAP[$res]; //@line 267 "stropmodule.c"
        var $243=(($242)&4294967295); //@line 267 "stropmodule.c"
        var $244=HEAP[$243]; //@line 267 "stropmodule.c"
        var $245=((($244) - 1)&4294967295); //@line 267 "stropmodule.c"
        var $246=(($242)&4294967295); //@line 267 "stropmodule.c"
        HEAP[$246]=$245; //@line 267 "stropmodule.c"
        var $247=(($242)&4294967295); //@line 267 "stropmodule.c"
        var $248=HEAP[$247]; //@line 267 "stropmodule.c"
        var $249=((($248))|0)==0; //@line 267 "stropmodule.c"
        if ($249) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 267 "stropmodule.c"
      case 54: // $bb55
        var $250=HEAP[$res]; //@line 267 "stropmodule.c"
        var $251=(($250+4)&4294967295); //@line 267 "stropmodule.c"
        var $252=HEAP[$251]; //@line 267 "stropmodule.c"
        var $253=(($252+24)&4294967295); //@line 267 "stropmodule.c"
        var $254=HEAP[$253]; //@line 267 "stropmodule.c"
        var $255=HEAP[$res]; //@line 267 "stropmodule.c"
        FUNCTION_TABLE[$254]($255); //@line 267 "stropmodule.c"
        __label__ = 55; break; //@line 267 "stropmodule.c"
      case 55: // $bb56
        var $256=HEAP[$item44]; //@line 268 "stropmodule.c"
        var $257=($256)!=0; //@line 268 "stropmodule.c"
        if ($257) { __label__ = 56; break; } else { __label__ = 58; break; } //@line 268 "stropmodule.c"
      case 56: // $bb57
        var $258=HEAP[$item44]; //@line 268 "stropmodule.c"
        var $259=(($258)&4294967295); //@line 268 "stropmodule.c"
        var $260=HEAP[$259]; //@line 268 "stropmodule.c"
        var $261=((($260) - 1)&4294967295); //@line 268 "stropmodule.c"
        var $262=HEAP[$item44]; //@line 268 "stropmodule.c"
        var $263=(($262)&4294967295); //@line 268 "stropmodule.c"
        HEAP[$263]=$261; //@line 268 "stropmodule.c"
        var $264=HEAP[$item44]; //@line 268 "stropmodule.c"
        var $265=(($264)&4294967295); //@line 268 "stropmodule.c"
        var $266=HEAP[$265]; //@line 268 "stropmodule.c"
        var $267=((($266))|0)==0; //@line 268 "stropmodule.c"
        if ($267) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 268 "stropmodule.c"
      case 57: // $bb58
        var $268=HEAP[$item44]; //@line 268 "stropmodule.c"
        var $269=(($268+4)&4294967295); //@line 268 "stropmodule.c"
        var $270=HEAP[$269]; //@line 268 "stropmodule.c"
        var $271=(($270+24)&4294967295); //@line 268 "stropmodule.c"
        var $272=HEAP[$271]; //@line 268 "stropmodule.c"
        var $273=HEAP[$item44]; //@line 268 "stropmodule.c"
        FUNCTION_TABLE[$272]($273); //@line 268 "stropmodule.c"
        __label__ = 58; break; //@line 268 "stropmodule.c"
      case 58: // $bb59
        HEAP[$0]=0; //@line 269 "stropmodule.c"
        __label__ = 73; break; //@line 269 "stropmodule.c"
      case 59: // $bb60
        __label__ = 65; break; //@line 269 "stropmodule.c"
      case 60: // $bb61
        var $274=HEAP[$sz]; //@line 272 "stropmodule.c"
        var $275=((($274) * 2)&4294967295); //@line 272 "stropmodule.c"
        var $276=__PyString_Resize($res, $275); //@line 272 "stropmodule.c"
        var $277=((($276))|0) < 0; //@line 272 "stropmodule.c"
        if ($277) { __label__ = 61; break; } else { __label__ = 64; break; } //@line 272 "stropmodule.c"
      case 61: // $bb62
        var $278=HEAP[$item44]; //@line 273 "stropmodule.c"
        var $279=(($278)&4294967295); //@line 273 "stropmodule.c"
        var $280=HEAP[$279]; //@line 273 "stropmodule.c"
        var $281=((($280) - 1)&4294967295); //@line 273 "stropmodule.c"
        var $282=HEAP[$item44]; //@line 273 "stropmodule.c"
        var $283=(($282)&4294967295); //@line 273 "stropmodule.c"
        HEAP[$283]=$281; //@line 273 "stropmodule.c"
        var $284=HEAP[$item44]; //@line 273 "stropmodule.c"
        var $285=(($284)&4294967295); //@line 273 "stropmodule.c"
        var $286=HEAP[$285]; //@line 273 "stropmodule.c"
        var $287=((($286))|0)==0; //@line 273 "stropmodule.c"
        if ($287) { __label__ = 62; break; } else { __label__ = 63; break; } //@line 273 "stropmodule.c"
      case 62: // $bb63
        var $288=HEAP[$item44]; //@line 273 "stropmodule.c"
        var $289=(($288+4)&4294967295); //@line 273 "stropmodule.c"
        var $290=HEAP[$289]; //@line 273 "stropmodule.c"
        var $291=(($290+24)&4294967295); //@line 273 "stropmodule.c"
        var $292=HEAP[$291]; //@line 273 "stropmodule.c"
        var $293=HEAP[$item44]; //@line 273 "stropmodule.c"
        FUNCTION_TABLE[$292]($293); //@line 273 "stropmodule.c"
        __label__ = 63; break; //@line 273 "stropmodule.c"
      case 63: // $bb64
        HEAP[$0]=0; //@line 274 "stropmodule.c"
        __label__ = 73; break; //@line 274 "stropmodule.c"
      case 64: // $bb65
        var $294=HEAP[$sz]; //@line 276 "stropmodule.c"
        var $295=((($294) * 2)&4294967295); //@line 276 "stropmodule.c"
        HEAP[$sz]=$295; //@line 276 "stropmodule.c"
        var $296=HEAP[$res]; //@line 277 "stropmodule.c"
        var $297=_PyString_AsString($296); //@line 277 "stropmodule.c"
        var $298=HEAP[$reslen]; //@line 277 "stropmodule.c"
        var $299=(($297+$298)&4294967295); //@line 277 "stropmodule.c"
        HEAP[$p]=$299; //@line 277 "stropmodule.c"
        __label__ = 65; break; //@line 277 "stropmodule.c"
      case 65: // $bb66
        var $300=HEAP[$reslen]; //@line 271 "stropmodule.c"
        var $301=HEAP[$slen]; //@line 271 "stropmodule.c"
        var $302=((($300) + ($301))&4294967295); //@line 271 "stropmodule.c"
        var $303=HEAP[$seplen]; //@line 271 "stropmodule.c"
        var $304=((($302) + ($303))&4294967295); //@line 271 "stropmodule.c"
        var $305=HEAP[$sz]; //@line 271 "stropmodule.c"
        var $306=((($304))|0) >= ((($305))|0); //@line 271 "stropmodule.c"
        if ($306) { __label__ = 60; break; } else { __label__ = 66; break; } //@line 271 "stropmodule.c"
      case 66: // $bb67
        var $307=HEAP[$i]; //@line 279 "stropmodule.c"
        var $308=((($307))|0) > 0; //@line 279 "stropmodule.c"
        if ($308) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 279 "stropmodule.c"
      case 67: // $bb68
        var $309=HEAP[$seplen]; //@line 280 "stropmodule.c"
        var $310=HEAP[$sep]; //@line 280 "stropmodule.c"
        var $311=HEAP[$p]; //@line 280 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($311, $310, $309, 1, 0); //@line 280 "stropmodule.c"
        var $312=HEAP[$seplen]; //@line 281 "stropmodule.c"
        var $313=HEAP[$p]; //@line 281 "stropmodule.c"
        var $314=(($313+$312)&4294967295); //@line 281 "stropmodule.c"
        HEAP[$p]=$314; //@line 281 "stropmodule.c"
        var $315=HEAP[$seplen]; //@line 282 "stropmodule.c"
        var $316=HEAP[$reslen]; //@line 282 "stropmodule.c"
        var $317=((($316) + ($315))&4294967295); //@line 282 "stropmodule.c"
        HEAP[$reslen]=$317; //@line 282 "stropmodule.c"
        __label__ = 68; break; //@line 282 "stropmodule.c"
      case 68: // $bb69
        var $318=HEAP[$slen]; //@line 284 "stropmodule.c"
        var $319=HEAP[$item44]; //@line 284 "stropmodule.c"
        var $320=$319; //@line 284 "stropmodule.c"
        var $321=(($320+20)&4294967295); //@line 284 "stropmodule.c"
        var $322=(($321)&4294967295); //@line 284 "stropmodule.c"
        var $323=HEAP[$p]; //@line 284 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($323, $322, $318, 1, 0); //@line 284 "stropmodule.c"
        var $324=HEAP[$p]; //@line 285 "stropmodule.c"
        var $325=HEAP[$slen]; //@line 285 "stropmodule.c"
        var $326=(($324+$325)&4294967295); //@line 285 "stropmodule.c"
        HEAP[$p]=$326; //@line 285 "stropmodule.c"
        var $327=HEAP[$reslen]; //@line 286 "stropmodule.c"
        var $328=HEAP[$slen]; //@line 286 "stropmodule.c"
        var $329=((($327) + ($328))&4294967295); //@line 286 "stropmodule.c"
        HEAP[$reslen]=$329; //@line 286 "stropmodule.c"
        var $330=HEAP[$item44]; //@line 287 "stropmodule.c"
        var $331=(($330)&4294967295); //@line 287 "stropmodule.c"
        var $332=HEAP[$331]; //@line 287 "stropmodule.c"
        var $333=((($332) - 1)&4294967295); //@line 287 "stropmodule.c"
        var $334=HEAP[$item44]; //@line 287 "stropmodule.c"
        var $335=(($334)&4294967295); //@line 287 "stropmodule.c"
        HEAP[$335]=$333; //@line 287 "stropmodule.c"
        var $336=HEAP[$item44]; //@line 287 "stropmodule.c"
        var $337=(($336)&4294967295); //@line 287 "stropmodule.c"
        var $338=HEAP[$337]; //@line 287 "stropmodule.c"
        var $339=((($338))|0)==0; //@line 287 "stropmodule.c"
        if ($339) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 287 "stropmodule.c"
      case 69: // $bb70
        var $340=HEAP[$item44]; //@line 287 "stropmodule.c"
        var $341=(($340+4)&4294967295); //@line 287 "stropmodule.c"
        var $342=HEAP[$341]; //@line 287 "stropmodule.c"
        var $343=(($342+24)&4294967295); //@line 287 "stropmodule.c"
        var $344=HEAP[$343]; //@line 287 "stropmodule.c"
        var $345=HEAP[$item44]; //@line 287 "stropmodule.c"
        FUNCTION_TABLE[$344]($345); //@line 287 "stropmodule.c"
        __label__ = 70; break; //@line 287 "stropmodule.c"
      case 70: // $bb71
        var $346=HEAP[$i]; //@line 253 "stropmodule.c"
        var $347=((($346) + 1)&4294967295); //@line 253 "stropmodule.c"
        HEAP[$i]=$347; //@line 253 "stropmodule.c"
        __label__ = 71; break; //@line 253 "stropmodule.c"
      case 71: // $bb72
        var $348=HEAP[$i]; //@line 253 "stropmodule.c"
        var $349=HEAP[$seqlen]; //@line 253 "stropmodule.c"
        var $350=((($348))|0) < ((($349))|0); //@line 253 "stropmodule.c"
        if ($350) { __label__ = 43; break; } else { __label__ = 72; break; } //@line 253 "stropmodule.c"
      case 72: // $bb73
        var $351=HEAP[$reslen]; //@line 289 "stropmodule.c"
        var $352=__PyString_Resize($res, $351); //@line 289 "stropmodule.c"
        var $353=HEAP[$res]; //@line 290 "stropmodule.c"
        HEAP[$0]=$353; //@line 290 "stropmodule.c"
        __label__ = 73; break; //@line 290 "stropmodule.c"
      case 73: // $bb74
        var $354=HEAP[$0]; //@line 177 "stropmodule.c"
        HEAP[$retval]=$354; //@line 177 "stropmodule.c"
        __label__ = 74; break; //@line 177 "stropmodule.c"
      case 74: // $return
        var $retval75=HEAP[$retval]; //@line 177 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval75; //@line 177 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_find($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $sub=__stackBase__+20;
        var $len=__stackBase__+24;
        var $n=__stackBase__+28;
        var $i=__stackBase__+32;
        var $last=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$i]=0; //@line 307 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 307 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 309 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 309 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 309 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 309 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 309 "stropmodule.c"
        __label__ = 25; break; //@line 309 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 310 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str8)&4294967295), $s, $len, $sub, $n, $i, $last); //@line 310 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 310 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 310 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 311 "stropmodule.c"
        __label__ = 25; break; //@line 311 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 313 "stropmodule.c"
        var $8=HEAP[$len]; //@line 313 "stropmodule.c"
        var $9=((($7))|0) > ((($8))|0); //@line 313 "stropmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 313 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 314 "stropmodule.c"
        HEAP[$last]=$10; //@line 314 "stropmodule.c"
        __label__ = 6; break; //@line 314 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$last]; //@line 315 "stropmodule.c"
        var $12=((($11))|0) < 0; //@line 315 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 315 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$last]; //@line 316 "stropmodule.c"
        var $14=HEAP[$len]; //@line 316 "stropmodule.c"
        var $15=((($13) + ($14))&4294967295); //@line 316 "stropmodule.c"
        HEAP[$last]=$15; //@line 316 "stropmodule.c"
        __label__ = 8; break; //@line 316 "stropmodule.c"
      case 8: // $bb7
        var $16=HEAP[$last]; //@line 317 "stropmodule.c"
        var $17=((($16))|0) < 0; //@line 317 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 317 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 318 "stropmodule.c"
        __label__ = 10; break; //@line 318 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 319 "stropmodule.c"
        var $19=((($18))|0) < 0; //@line 319 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 319 "stropmodule.c"
      case 11: // $bb10
        var $20=HEAP[$i]; //@line 320 "stropmodule.c"
        var $21=HEAP[$len]; //@line 320 "stropmodule.c"
        var $22=((($20) + ($21))&4294967295); //@line 320 "stropmodule.c"
        HEAP[$i]=$22; //@line 320 "stropmodule.c"
        __label__ = 12; break; //@line 320 "stropmodule.c"
      case 12: // $bb11
        var $23=HEAP[$i]; //@line 321 "stropmodule.c"
        var $24=((($23))|0) < 0; //@line 321 "stropmodule.c"
        if ($24) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 321 "stropmodule.c"
      case 13: // $bb12
        HEAP[$i]=0; //@line 322 "stropmodule.c"
        __label__ = 14; break; //@line 322 "stropmodule.c"
      case 14: // $bb13
        var $25=HEAP[$n]; //@line 324 "stropmodule.c"
        var $26=((($25))|0)==0; //@line 324 "stropmodule.c"
        if ($26) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 324 "stropmodule.c"
      case 15: // $bb14
        var $27=HEAP[$i]; //@line 324 "stropmodule.c"
        var $28=HEAP[$last]; //@line 324 "stropmodule.c"
        var $29=((($27))|0) <= ((($28))|0); //@line 324 "stropmodule.c"
        if ($29) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 324 "stropmodule.c"
      case 16: // $bb15
        var $30=HEAP[$i]; //@line 325 "stropmodule.c"
        var $31=_PyInt_FromLong($30); //@line 325 "stropmodule.c"
        HEAP[$0]=$31; //@line 325 "stropmodule.c"
        __label__ = 25; break; //@line 325 "stropmodule.c"
      case 17: // $bb16
        var $32=HEAP[$last]; //@line 327 "stropmodule.c"
        var $33=HEAP[$n]; //@line 327 "stropmodule.c"
        var $34=((($32) - ($33))&4294967295); //@line 327 "stropmodule.c"
        HEAP[$last]=$34; //@line 327 "stropmodule.c"
        __label__ = 23; break; //@line 327 "stropmodule.c"
      case 18: // $bb17
        var $35=HEAP[$s]; //@line 329 "stropmodule.c"
        var $36=HEAP[$i]; //@line 329 "stropmodule.c"
        var $37=(($35+$36)&4294967295); //@line 329 "stropmodule.c"
        var $38=HEAP[$37]; //@line 329 "stropmodule.c"
        var $39=HEAP[$sub]; //@line 329 "stropmodule.c"
        var $40=(($39)&4294967295); //@line 329 "stropmodule.c"
        var $41=HEAP[$40]; //@line 329 "stropmodule.c"
        var $42=reSign(($38), 8, 0)==reSign(($41), 8, 0); //@line 329 "stropmodule.c"
        if ($42) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 329 "stropmodule.c"
      case 19: // $bb18
        var $43=HEAP[$n]; //@line 329 "stropmodule.c"
        var $44=((($43))|0)==1; //@line 329 "stropmodule.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 329 "stropmodule.c"
      case 20: // $bb19
        var $45=HEAP[$n]; //@line 329 "stropmodule.c"
        var $46=((($45) - 1)&4294967295); //@line 329 "stropmodule.c"
        var $47=HEAP[$sub]; //@line 329 "stropmodule.c"
        var $48=(($47+1)&4294967295); //@line 329 "stropmodule.c"
        var $49=HEAP[$s]; //@line 329 "stropmodule.c"
        var $50=HEAP[$i]; //@line 329 "stropmodule.c"
        var $51=((($50) + 1)&4294967295); //@line 329 "stropmodule.c"
        var $52=(($49+$51)&4294967295); //@line 329 "stropmodule.c"
        var $53=_memcmp($52, $48, $46); //@line 329 "stropmodule.c"
        var $54=((($53))|0)==0; //@line 329 "stropmodule.c"
        if ($54) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 329 "stropmodule.c"
      case 21: // $bb20
        var $55=HEAP[$i]; //@line 331 "stropmodule.c"
        var $56=_PyInt_FromLong($55); //@line 331 "stropmodule.c"
        HEAP[$0]=$56; //@line 331 "stropmodule.c"
        __label__ = 25; break; //@line 331 "stropmodule.c"
      case 22: // $bb21
        var $57=HEAP[$i]; //@line 328 "stropmodule.c"
        var $58=((($57) + 1)&4294967295); //@line 328 "stropmodule.c"
        HEAP[$i]=$58; //@line 328 "stropmodule.c"
        __label__ = 23; break; //@line 328 "stropmodule.c"
      case 23: // $bb22
        var $59=HEAP[$i]; //@line 328 "stropmodule.c"
        var $60=HEAP[$last]; //@line 328 "stropmodule.c"
        var $61=((($59))|0) <= ((($60))|0); //@line 328 "stropmodule.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 328 "stropmodule.c"
      case 24: // $bb23
        var $62=_PyInt_FromLong(-1); //@line 333 "stropmodule.c"
        HEAP[$0]=$62; //@line 333 "stropmodule.c"
        __label__ = 25; break; //@line 333 "stropmodule.c"
      case 25: // $bb24
        var $63=HEAP[$0]; //@line 309 "stropmodule.c"
        HEAP[$retval]=$63; //@line 309 "stropmodule.c"
        __label__ = 26; break; //@line 309 "stropmodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 309 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 309 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_rfind($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $sub=__stackBase__+20;
        var $len=__stackBase__+24;
        var $n=__stackBase__+28;
        var $j=__stackBase__+32;
        var $i=__stackBase__+36;
        var $last=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$i]=0; //@line 351 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 351 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 353 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 353 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 353 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 353 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 353 "stropmodule.c"
        __label__ = 25; break; //@line 353 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 354 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str9)&4294967295), $s, $len, $sub, $n, $i, $last); //@line 354 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 354 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 354 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 355 "stropmodule.c"
        __label__ = 25; break; //@line 355 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 357 "stropmodule.c"
        var $8=HEAP[$len]; //@line 357 "stropmodule.c"
        var $9=((($7))|0) > ((($8))|0); //@line 357 "stropmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 357 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 358 "stropmodule.c"
        HEAP[$last]=$10; //@line 358 "stropmodule.c"
        __label__ = 6; break; //@line 358 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$last]; //@line 359 "stropmodule.c"
        var $12=((($11))|0) < 0; //@line 359 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 359 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$last]; //@line 360 "stropmodule.c"
        var $14=HEAP[$len]; //@line 360 "stropmodule.c"
        var $15=((($13) + ($14))&4294967295); //@line 360 "stropmodule.c"
        HEAP[$last]=$15; //@line 360 "stropmodule.c"
        __label__ = 8; break; //@line 360 "stropmodule.c"
      case 8: // $bb7
        var $16=HEAP[$last]; //@line 361 "stropmodule.c"
        var $17=((($16))|0) < 0; //@line 361 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 361 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 362 "stropmodule.c"
        __label__ = 10; break; //@line 362 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 363 "stropmodule.c"
        var $19=((($18))|0) < 0; //@line 363 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 363 "stropmodule.c"
      case 11: // $bb10
        var $20=HEAP[$i]; //@line 364 "stropmodule.c"
        var $21=HEAP[$len]; //@line 364 "stropmodule.c"
        var $22=((($20) + ($21))&4294967295); //@line 364 "stropmodule.c"
        HEAP[$i]=$22; //@line 364 "stropmodule.c"
        __label__ = 12; break; //@line 364 "stropmodule.c"
      case 12: // $bb11
        var $23=HEAP[$i]; //@line 365 "stropmodule.c"
        var $24=((($23))|0) < 0; //@line 365 "stropmodule.c"
        if ($24) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 365 "stropmodule.c"
      case 13: // $bb12
        HEAP[$i]=0; //@line 366 "stropmodule.c"
        __label__ = 14; break; //@line 366 "stropmodule.c"
      case 14: // $bb13
        var $25=HEAP[$n]; //@line 368 "stropmodule.c"
        var $26=((($25))|0)==0; //@line 368 "stropmodule.c"
        if ($26) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 368 "stropmodule.c"
      case 15: // $bb14
        var $27=HEAP[$i]; //@line 368 "stropmodule.c"
        var $28=HEAP[$last]; //@line 368 "stropmodule.c"
        var $29=((($27))|0) <= ((($28))|0); //@line 368 "stropmodule.c"
        if ($29) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 368 "stropmodule.c"
      case 16: // $bb15
        var $30=HEAP[$last]; //@line 369 "stropmodule.c"
        var $31=_PyInt_FromLong($30); //@line 369 "stropmodule.c"
        HEAP[$0]=$31; //@line 369 "stropmodule.c"
        __label__ = 25; break; //@line 369 "stropmodule.c"
      case 17: // $bb16
        var $32=HEAP[$last]; //@line 371 "stropmodule.c"
        var $33=HEAP[$n]; //@line 371 "stropmodule.c"
        var $34=((($32) - ($33))&4294967295); //@line 371 "stropmodule.c"
        HEAP[$j]=$34; //@line 371 "stropmodule.c"
        __label__ = 23; break; //@line 371 "stropmodule.c"
      case 18: // $bb17
        var $35=HEAP[$s]; //@line 372 "stropmodule.c"
        var $36=HEAP[$j]; //@line 372 "stropmodule.c"
        var $37=(($35+$36)&4294967295); //@line 372 "stropmodule.c"
        var $38=HEAP[$37]; //@line 372 "stropmodule.c"
        var $39=HEAP[$sub]; //@line 372 "stropmodule.c"
        var $40=(($39)&4294967295); //@line 372 "stropmodule.c"
        var $41=HEAP[$40]; //@line 372 "stropmodule.c"
        var $42=reSign(($38), 8, 0)==reSign(($41), 8, 0); //@line 372 "stropmodule.c"
        if ($42) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 372 "stropmodule.c"
      case 19: // $bb18
        var $43=HEAP[$n]; //@line 372 "stropmodule.c"
        var $44=((($43))|0)==1; //@line 372 "stropmodule.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 372 "stropmodule.c"
      case 20: // $bb19
        var $45=HEAP[$n]; //@line 372 "stropmodule.c"
        var $46=((($45) - 1)&4294967295); //@line 372 "stropmodule.c"
        var $47=HEAP[$sub]; //@line 372 "stropmodule.c"
        var $48=(($47+1)&4294967295); //@line 372 "stropmodule.c"
        var $49=HEAP[$s]; //@line 372 "stropmodule.c"
        var $50=HEAP[$j]; //@line 372 "stropmodule.c"
        var $51=((($50) + 1)&4294967295); //@line 372 "stropmodule.c"
        var $52=(($49+$51)&4294967295); //@line 372 "stropmodule.c"
        var $53=_memcmp($52, $48, $46); //@line 372 "stropmodule.c"
        var $54=((($53))|0)==0; //@line 372 "stropmodule.c"
        if ($54) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 372 "stropmodule.c"
      case 21: // $bb20
        var $55=HEAP[$j]; //@line 374 "stropmodule.c"
        var $56=_PyInt_FromLong($55); //@line 374 "stropmodule.c"
        HEAP[$0]=$56; //@line 374 "stropmodule.c"
        __label__ = 25; break; //@line 374 "stropmodule.c"
      case 22: // $bb21
        var $57=HEAP[$j]; //@line 371 "stropmodule.c"
        var $58=((($57) - 1)&4294967295); //@line 371 "stropmodule.c"
        HEAP[$j]=$58; //@line 371 "stropmodule.c"
        __label__ = 23; break; //@line 371 "stropmodule.c"
      case 23: // $bb22
        var $59=HEAP[$i]; //@line 371 "stropmodule.c"
        var $60=HEAP[$j]; //@line 371 "stropmodule.c"
        var $61=((($60))|0) >= ((($59))|0); //@line 371 "stropmodule.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 371 "stropmodule.c"
      case 24: // $bb23
        var $62=_PyInt_FromLong(-1); //@line 376 "stropmodule.c"
        HEAP[$0]=$62; //@line 376 "stropmodule.c"
        __label__ = 25; break; //@line 376 "stropmodule.c"
      case 25: // $bb24
        var $63=HEAP[$0]; //@line 353 "stropmodule.c"
        HEAP[$retval]=$63; //@line 353 "stropmodule.c"
        __label__ = 26; break; //@line 353 "stropmodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 353 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 353 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _do_strip($args, $striptype) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr=__stackBase__;
        var $striptype_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $len=__stackBase__+20;
        var $i=__stackBase__+24;
        var $j=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$args_addr]=$args;
        HEAP[$striptype_addr]=$striptype;
        var $1=HEAP[$args_addr]; //@line 387 "stropmodule.c"
        var $2=_PyString_AsStringAndSize($1, $s, $len); //@line 387 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 387 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 387 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 388 "stropmodule.c"
        __label__ = 15; break; //@line 388 "stropmodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 390 "stropmodule.c"
        var $4=HEAP[$striptype_addr]; //@line 391 "stropmodule.c"
        var $5=((($4))|0)!=1; //@line 391 "stropmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 391 "stropmodule.c"
      case 3: // $bb2
        __label__ = 5; break; //@line 391 "stropmodule.c"
      case 4: // $bb3
        var $6=HEAP[$i]; //@line 393 "stropmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 393 "stropmodule.c"
        HEAP[$i]=$7; //@line 393 "stropmodule.c"
        __label__ = 5; break; //@line 393 "stropmodule.c"
      case 5: // $bb4
        var $8=HEAP[$len]; //@line 392 "stropmodule.c"
        var $9=HEAP[$i]; //@line 392 "stropmodule.c"
        var $10=((($9))|0) >= ((($8))|0); //@line 392 "stropmodule.c"
        if ($10) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 392 "stropmodule.c"
      case 6: // $bb5
        var $11=___ctype_b_loc(); //@line 392 "stropmodule.c"
        var $12=HEAP[$11]; //@line 392 "stropmodule.c"
        var $13=HEAP[$s]; //@line 392 "stropmodule.c"
        var $14=HEAP[$i]; //@line 392 "stropmodule.c"
        var $15=(($13+$14)&4294967295); //@line 392 "stropmodule.c"
        var $16=HEAP[$15]; //@line 392 "stropmodule.c"
        var $17=unSign(($16), 8, 0); //@line 392 "stropmodule.c"
        var $18=(($12+2*$17)&4294967295); //@line 392 "stropmodule.c"
        var $19=HEAP[$18]; //@line 392 "stropmodule.c"
        var $20=unSign(($19), 16, 0); //@line 392 "stropmodule.c"
        var $21=($20) & 8192; //@line 392 "stropmodule.c"
        var $22=((($21))|0)!=0; //@line 392 "stropmodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 392 "stropmodule.c"
      case 7: // $bb6
        var $23=HEAP[$len]; //@line 397 "stropmodule.c"
        HEAP[$j]=$23; //@line 397 "stropmodule.c"
        var $24=HEAP[$striptype_addr]; //@line 398 "stropmodule.c"
        var $25=((($24))|0)!=0; //@line 398 "stropmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 398 "stropmodule.c"
      case 8: // $bb7
        var $26=HEAP[$j]; //@line 400 "stropmodule.c"
        var $27=((($26) - 1)&4294967295); //@line 400 "stropmodule.c"
        HEAP[$j]=$27; //@line 400 "stropmodule.c"
        var $28=HEAP[$j]; //@line 401 "stropmodule.c"
        var $29=HEAP[$i]; //@line 401 "stropmodule.c"
        var $30=((($28))|0) < ((($29))|0); //@line 401 "stropmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 401 "stropmodule.c"
      case 9: // $bb8
        var $31=___ctype_b_loc(); //@line 401 "stropmodule.c"
        var $32=HEAP[$31]; //@line 401 "stropmodule.c"
        var $33=HEAP[$s]; //@line 401 "stropmodule.c"
        var $34=HEAP[$j]; //@line 401 "stropmodule.c"
        var $35=(($33+$34)&4294967295); //@line 401 "stropmodule.c"
        var $36=HEAP[$35]; //@line 401 "stropmodule.c"
        var $37=unSign(($36), 8, 0); //@line 401 "stropmodule.c"
        var $38=(($32+2*$37)&4294967295); //@line 401 "stropmodule.c"
        var $39=HEAP[$38]; //@line 401 "stropmodule.c"
        var $40=unSign(($39), 16, 0); //@line 401 "stropmodule.c"
        var $41=($40) & 8192; //@line 401 "stropmodule.c"
        var $42=((($41))|0)!=0; //@line 401 "stropmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 401 "stropmodule.c"
      case 10: // $bb9
        var $43=HEAP[$j]; //@line 402 "stropmodule.c"
        var $44=((($43) + 1)&4294967295); //@line 402 "stropmodule.c"
        HEAP[$j]=$44; //@line 402 "stropmodule.c"
        __label__ = 11; break; //@line 402 "stropmodule.c"
      case 11: // $bb10
        var $45=HEAP[$i]; //@line 405 "stropmodule.c"
        var $46=((($45))|0)!=0; //@line 405 "stropmodule.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 405 "stropmodule.c"
      case 12: // $bb11
        var $47=HEAP[$len]; //@line 405 "stropmodule.c"
        var $48=HEAP[$j]; //@line 405 "stropmodule.c"
        var $49=((($48))|0)!=((($47))|0); //@line 405 "stropmodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 405 "stropmodule.c"
      case 13: // $bb12
        var $50=HEAP[$args_addr]; //@line 406 "stropmodule.c"
        var $51=(($50)&4294967295); //@line 406 "stropmodule.c"
        var $52=HEAP[$51]; //@line 406 "stropmodule.c"
        var $53=((($52) + 1)&4294967295); //@line 406 "stropmodule.c"
        var $54=HEAP[$args_addr]; //@line 406 "stropmodule.c"
        var $55=(($54)&4294967295); //@line 406 "stropmodule.c"
        HEAP[$55]=$53; //@line 406 "stropmodule.c"
        var $56=HEAP[$args_addr]; //@line 407 "stropmodule.c"
        HEAP[$0]=$56; //@line 407 "stropmodule.c"
        __label__ = 15; break; //@line 407 "stropmodule.c"
      case 14: // $bb13
        var $57=HEAP[$j]; //@line 410 "stropmodule.c"
        var $58=HEAP[$i]; //@line 410 "stropmodule.c"
        var $59=((($57) - ($58))&4294967295); //@line 410 "stropmodule.c"
        var $60=HEAP[$s]; //@line 410 "stropmodule.c"
        var $61=HEAP[$i]; //@line 410 "stropmodule.c"
        var $62=(($60+$61)&4294967295); //@line 410 "stropmodule.c"
        var $63=_PyString_FromStringAndSize($62, $59); //@line 410 "stropmodule.c"
        HEAP[$0]=$63; //@line 410 "stropmodule.c"
        __label__ = 15; break; //@line 410 "stropmodule.c"
      case 15: // $bb14
        var $64=HEAP[$0]; //@line 388 "stropmodule.c"
        HEAP[$retval]=$64; //@line 388 "stropmodule.c"
        __label__ = 16; break; //@line 388 "stropmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 388 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 388 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_strip($self, $args) {
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
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 423 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 423 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 423 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 423 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 423 "stropmodule.c"
        __label__ = 3; break; //@line 423 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 424 "stropmodule.c"
        var $5=_do_strip($4, 2); //@line 424 "stropmodule.c"
        HEAP[$0]=$5; //@line 424 "stropmodule.c"
        __label__ = 3; break; //@line 424 "stropmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 423 "stropmodule.c"
        HEAP[$retval]=$6; //@line 423 "stropmodule.c"
        __label__ = 4; break; //@line 423 "stropmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 423 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 423 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_lstrip($self, $args) {
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
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 436 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 436 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 436 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 436 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 436 "stropmodule.c"
        __label__ = 3; break; //@line 436 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 437 "stropmodule.c"
        var $5=_do_strip($4, 0); //@line 437 "stropmodule.c"
        HEAP[$0]=$5; //@line 437 "stropmodule.c"
        __label__ = 3; break; //@line 437 "stropmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 436 "stropmodule.c"
        HEAP[$retval]=$6; //@line 436 "stropmodule.c"
        __label__ = 4; break; //@line 436 "stropmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 436 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 436 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_rstrip($self, $args) {
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
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 449 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 449 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 449 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 449 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 449 "stropmodule.c"
        __label__ = 3; break; //@line 449 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 450 "stropmodule.c"
        var $5=_do_strip($4, 1); //@line 450 "stropmodule.c"
        HEAP[$0]=$5; //@line 450 "stropmodule.c"
        __label__ = 3; break; //@line 450 "stropmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 449 "stropmodule.c"
        HEAP[$retval]=$6; //@line 449 "stropmodule.c"
        __label__ = 4; break; //@line 449 "stropmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 449 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 449 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_lower($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $s_new=__stackBase__+20;
        var $i=__stackBase__+24;
        var $n=__stackBase__+28;
        var $newstr=__stackBase__+32;
        var $changed=__stackBase__+36;
        var $c=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 467 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 467 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 467 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 467 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 467 "stropmodule.c"
        __label__ = 17; break; //@line 467 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 468 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 468 "stropmodule.c"
        var $6=((($5))|0)!=0; //@line 468 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 468 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 469 "stropmodule.c"
        __label__ = 17; break; //@line 469 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 470 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 470 "stropmodule.c"
        HEAP[$newstr]=$8; //@line 470 "stropmodule.c"
        var $9=HEAP[$newstr]; //@line 471 "stropmodule.c"
        var $10=($9)==0; //@line 471 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 471 "stropmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 472 "stropmodule.c"
        __label__ = 17; break; //@line 472 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$newstr]; //@line 473 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 473 "stropmodule.c"
        HEAP[$s_new]=$12; //@line 473 "stropmodule.c"
        HEAP[$changed]=0; //@line 474 "stropmodule.c"
        HEAP[$i]=0; //@line 475 "stropmodule.c"
        __label__ = 11; break; //@line 475 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$s]; //@line 476 "stropmodule.c"
        var $14=HEAP[$13]; //@line 476 "stropmodule.c"
        var $15=unSign(($14), 8, 0); //@line 476 "stropmodule.c"
        HEAP[$c]=$15; //@line 476 "stropmodule.c"
        var $16=(($13+1)&4294967295); //@line 476 "stropmodule.c"
        HEAP[$s]=$16; //@line 476 "stropmodule.c"
        var $17=___ctype_b_loc(); //@line 477 "stropmodule.c"
        var $18=HEAP[$17]; //@line 477 "stropmodule.c"
        var $19=HEAP[$c]; //@line 477 "stropmodule.c"
        var $20=(($18+2*$19)&4294967295); //@line 477 "stropmodule.c"
        var $21=HEAP[$20]; //@line 477 "stropmodule.c"
        var $22=unSign(($21), 16, 0); //@line 477 "stropmodule.c"
        var $23=($22) & 256; //@line 477 "stropmodule.c"
        var $24=((($23))|0)!=0; //@line 477 "stropmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 477 "stropmodule.c"
      case 8: // $bb7
        HEAP[$changed]=1; //@line 478 "stropmodule.c"
        var $25=HEAP[$c]; //@line 479 "stropmodule.c"
        var $26=_tolower($25); //@line 479 "stropmodule.c"
        var $27=((($26)) & 255); //@line 479 "stropmodule.c"
        var $28=HEAP[$s_new]; //@line 479 "stropmodule.c"
        HEAP[$28]=$27; //@line 479 "stropmodule.c"
        __label__ = 10; break; //@line 479 "stropmodule.c"
      case 9: // $bb8
        var $29=HEAP[$c]; //@line 481 "stropmodule.c"
        var $30=((($29)) & 255); //@line 481 "stropmodule.c"
        var $31=HEAP[$s_new]; //@line 481 "stropmodule.c"
        HEAP[$31]=$30; //@line 481 "stropmodule.c"
        __label__ = 10; break; //@line 481 "stropmodule.c"
      case 10: // $bb9
        var $32=HEAP[$s_new]; //@line 482 "stropmodule.c"
        var $33=(($32+1)&4294967295); //@line 482 "stropmodule.c"
        HEAP[$s_new]=$33; //@line 482 "stropmodule.c"
        var $34=HEAP[$i]; //@line 475 "stropmodule.c"
        var $35=((($34) + 1)&4294967295); //@line 475 "stropmodule.c"
        HEAP[$i]=$35; //@line 475 "stropmodule.c"
        __label__ = 11; break; //@line 475 "stropmodule.c"
      case 11: // $bb10
        var $36=HEAP[$n]; //@line 475 "stropmodule.c"
        var $37=HEAP[$i]; //@line 475 "stropmodule.c"
        var $38=((($37))|0) < ((($36))|0); //@line 475 "stropmodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 475 "stropmodule.c"
      case 12: // $bb11
        var $39=HEAP[$changed]; //@line 484 "stropmodule.c"
        var $40=((($39))|0)==0; //@line 484 "stropmodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 484 "stropmodule.c"
      case 13: // $bb12
        var $41=HEAP[$newstr]; //@line 485 "stropmodule.c"
        var $42=(($41)&4294967295); //@line 485 "stropmodule.c"
        var $43=HEAP[$42]; //@line 485 "stropmodule.c"
        var $44=((($43) - 1)&4294967295); //@line 485 "stropmodule.c"
        var $45=HEAP[$newstr]; //@line 485 "stropmodule.c"
        var $46=(($45)&4294967295); //@line 485 "stropmodule.c"
        HEAP[$46]=$44; //@line 485 "stropmodule.c"
        var $47=HEAP[$newstr]; //@line 485 "stropmodule.c"
        var $48=(($47)&4294967295); //@line 485 "stropmodule.c"
        var $49=HEAP[$48]; //@line 485 "stropmodule.c"
        var $50=((($49))|0)==0; //@line 485 "stropmodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 485 "stropmodule.c"
      case 14: // $bb13
        var $51=HEAP[$newstr]; //@line 485 "stropmodule.c"
        var $52=(($51+4)&4294967295); //@line 485 "stropmodule.c"
        var $53=HEAP[$52]; //@line 485 "stropmodule.c"
        var $54=(($53+24)&4294967295); //@line 485 "stropmodule.c"
        var $55=HEAP[$54]; //@line 485 "stropmodule.c"
        var $56=HEAP[$newstr]; //@line 485 "stropmodule.c"
        FUNCTION_TABLE[$55]($56); //@line 485 "stropmodule.c"
        __label__ = 15; break; //@line 485 "stropmodule.c"
      case 15: // $bb14
        var $57=HEAP[$args_addr]; //@line 486 "stropmodule.c"
        var $58=(($57)&4294967295); //@line 486 "stropmodule.c"
        var $59=HEAP[$58]; //@line 486 "stropmodule.c"
        var $60=((($59) + 1)&4294967295); //@line 486 "stropmodule.c"
        var $61=HEAP[$args_addr]; //@line 486 "stropmodule.c"
        var $62=(($61)&4294967295); //@line 486 "stropmodule.c"
        HEAP[$62]=$60; //@line 486 "stropmodule.c"
        var $63=HEAP[$args_addr]; //@line 487 "stropmodule.c"
        HEAP[$0]=$63; //@line 487 "stropmodule.c"
        __label__ = 17; break; //@line 487 "stropmodule.c"
      case 16: // $bb15
        var $64=HEAP[$newstr]; //@line 489 "stropmodule.c"
        HEAP[$0]=$64; //@line 489 "stropmodule.c"
        __label__ = 17; break; //@line 489 "stropmodule.c"
      case 17: // $bb16
        var $65=HEAP[$0]; //@line 467 "stropmodule.c"
        HEAP[$retval]=$65; //@line 467 "stropmodule.c"
        __label__ = 18; break; //@line 467 "stropmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 467 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 467 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_upper($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $s_new=__stackBase__+20;
        var $i=__stackBase__+24;
        var $n=__stackBase__+28;
        var $newstr=__stackBase__+32;
        var $changed=__stackBase__+36;
        var $c=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 506 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 506 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 506 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 506 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 506 "stropmodule.c"
        __label__ = 17; break; //@line 506 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 507 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 507 "stropmodule.c"
        var $6=((($5))|0)!=0; //@line 507 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 507 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 508 "stropmodule.c"
        __label__ = 17; break; //@line 508 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 509 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 509 "stropmodule.c"
        HEAP[$newstr]=$8; //@line 509 "stropmodule.c"
        var $9=HEAP[$newstr]; //@line 510 "stropmodule.c"
        var $10=($9)==0; //@line 510 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 510 "stropmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 511 "stropmodule.c"
        __label__ = 17; break; //@line 511 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$newstr]; //@line 512 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 512 "stropmodule.c"
        HEAP[$s_new]=$12; //@line 512 "stropmodule.c"
        HEAP[$changed]=0; //@line 513 "stropmodule.c"
        HEAP[$i]=0; //@line 514 "stropmodule.c"
        __label__ = 11; break; //@line 514 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$s]; //@line 515 "stropmodule.c"
        var $14=HEAP[$13]; //@line 515 "stropmodule.c"
        var $15=unSign(($14), 8, 0); //@line 515 "stropmodule.c"
        HEAP[$c]=$15; //@line 515 "stropmodule.c"
        var $16=(($13+1)&4294967295); //@line 515 "stropmodule.c"
        HEAP[$s]=$16; //@line 515 "stropmodule.c"
        var $17=___ctype_b_loc(); //@line 516 "stropmodule.c"
        var $18=HEAP[$17]; //@line 516 "stropmodule.c"
        var $19=HEAP[$c]; //@line 516 "stropmodule.c"
        var $20=(($18+2*$19)&4294967295); //@line 516 "stropmodule.c"
        var $21=HEAP[$20]; //@line 516 "stropmodule.c"
        var $22=unSign(($21), 16, 0); //@line 516 "stropmodule.c"
        var $23=($22) & 512; //@line 516 "stropmodule.c"
        var $24=((($23))|0)!=0; //@line 516 "stropmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 516 "stropmodule.c"
      case 8: // $bb7
        HEAP[$changed]=1; //@line 517 "stropmodule.c"
        var $25=HEAP[$c]; //@line 518 "stropmodule.c"
        var $26=_toupper($25); //@line 518 "stropmodule.c"
        var $27=((($26)) & 255); //@line 518 "stropmodule.c"
        var $28=HEAP[$s_new]; //@line 518 "stropmodule.c"
        HEAP[$28]=$27; //@line 518 "stropmodule.c"
        __label__ = 10; break; //@line 518 "stropmodule.c"
      case 9: // $bb8
        var $29=HEAP[$c]; //@line 520 "stropmodule.c"
        var $30=((($29)) & 255); //@line 520 "stropmodule.c"
        var $31=HEAP[$s_new]; //@line 520 "stropmodule.c"
        HEAP[$31]=$30; //@line 520 "stropmodule.c"
        __label__ = 10; break; //@line 520 "stropmodule.c"
      case 10: // $bb9
        var $32=HEAP[$s_new]; //@line 521 "stropmodule.c"
        var $33=(($32+1)&4294967295); //@line 521 "stropmodule.c"
        HEAP[$s_new]=$33; //@line 521 "stropmodule.c"
        var $34=HEAP[$i]; //@line 514 "stropmodule.c"
        var $35=((($34) + 1)&4294967295); //@line 514 "stropmodule.c"
        HEAP[$i]=$35; //@line 514 "stropmodule.c"
        __label__ = 11; break; //@line 514 "stropmodule.c"
      case 11: // $bb10
        var $36=HEAP[$n]; //@line 514 "stropmodule.c"
        var $37=HEAP[$i]; //@line 514 "stropmodule.c"
        var $38=((($37))|0) < ((($36))|0); //@line 514 "stropmodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 514 "stropmodule.c"
      case 12: // $bb11
        var $39=HEAP[$changed]; //@line 523 "stropmodule.c"
        var $40=((($39))|0)==0; //@line 523 "stropmodule.c"
        if ($40) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 523 "stropmodule.c"
      case 13: // $bb12
        var $41=HEAP[$newstr]; //@line 524 "stropmodule.c"
        var $42=(($41)&4294967295); //@line 524 "stropmodule.c"
        var $43=HEAP[$42]; //@line 524 "stropmodule.c"
        var $44=((($43) - 1)&4294967295); //@line 524 "stropmodule.c"
        var $45=HEAP[$newstr]; //@line 524 "stropmodule.c"
        var $46=(($45)&4294967295); //@line 524 "stropmodule.c"
        HEAP[$46]=$44; //@line 524 "stropmodule.c"
        var $47=HEAP[$newstr]; //@line 524 "stropmodule.c"
        var $48=(($47)&4294967295); //@line 524 "stropmodule.c"
        var $49=HEAP[$48]; //@line 524 "stropmodule.c"
        var $50=((($49))|0)==0; //@line 524 "stropmodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 524 "stropmodule.c"
      case 14: // $bb13
        var $51=HEAP[$newstr]; //@line 524 "stropmodule.c"
        var $52=(($51+4)&4294967295); //@line 524 "stropmodule.c"
        var $53=HEAP[$52]; //@line 524 "stropmodule.c"
        var $54=(($53+24)&4294967295); //@line 524 "stropmodule.c"
        var $55=HEAP[$54]; //@line 524 "stropmodule.c"
        var $56=HEAP[$newstr]; //@line 524 "stropmodule.c"
        FUNCTION_TABLE[$55]($56); //@line 524 "stropmodule.c"
        __label__ = 15; break; //@line 524 "stropmodule.c"
      case 15: // $bb14
        var $57=HEAP[$args_addr]; //@line 525 "stropmodule.c"
        var $58=(($57)&4294967295); //@line 525 "stropmodule.c"
        var $59=HEAP[$58]; //@line 525 "stropmodule.c"
        var $60=((($59) + 1)&4294967295); //@line 525 "stropmodule.c"
        var $61=HEAP[$args_addr]; //@line 525 "stropmodule.c"
        var $62=(($61)&4294967295); //@line 525 "stropmodule.c"
        HEAP[$62]=$60; //@line 525 "stropmodule.c"
        var $63=HEAP[$args_addr]; //@line 526 "stropmodule.c"
        HEAP[$0]=$63; //@line 526 "stropmodule.c"
        __label__ = 17; break; //@line 526 "stropmodule.c"
      case 16: // $bb15
        var $64=HEAP[$newstr]; //@line 528 "stropmodule.c"
        HEAP[$0]=$64; //@line 528 "stropmodule.c"
        __label__ = 17; break; //@line 528 "stropmodule.c"
      case 17: // $bb16
        var $65=HEAP[$0]; //@line 506 "stropmodule.c"
        HEAP[$retval]=$65; //@line 506 "stropmodule.c"
        __label__ = 18; break; //@line 506 "stropmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 506 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 506 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_capitalize($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $s_new=__stackBase__+20;
        var $i=__stackBase__+24;
        var $n=__stackBase__+28;
        var $newstr=__stackBase__+32;
        var $changed=__stackBase__+36;
        var $c=__stackBase__+40;
        var $c12=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 546 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 546 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 546 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 546 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 546 "stropmodule.c"
        __label__ = 22; break; //@line 546 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 547 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 547 "stropmodule.c"
        var $6=((($5))|0)!=0; //@line 547 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 547 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 548 "stropmodule.c"
        __label__ = 22; break; //@line 548 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 549 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 549 "stropmodule.c"
        HEAP[$newstr]=$8; //@line 549 "stropmodule.c"
        var $9=HEAP[$newstr]; //@line 550 "stropmodule.c"
        var $10=($9)==0; //@line 550 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 550 "stropmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 551 "stropmodule.c"
        __label__ = 22; break; //@line 551 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$newstr]; //@line 552 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 552 "stropmodule.c"
        HEAP[$s_new]=$12; //@line 552 "stropmodule.c"
        HEAP[$changed]=0; //@line 553 "stropmodule.c"
        var $13=HEAP[$n]; //@line 554 "stropmodule.c"
        var $14=((($13))|0) > 0; //@line 554 "stropmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 554 "stropmodule.c"
      case 7: // $bb6
        var $15=HEAP[$s]; //@line 555 "stropmodule.c"
        var $16=HEAP[$15]; //@line 555 "stropmodule.c"
        var $17=unSign(($16), 8, 0); //@line 555 "stropmodule.c"
        HEAP[$c]=$17; //@line 555 "stropmodule.c"
        var $18=(($15+1)&4294967295); //@line 555 "stropmodule.c"
        HEAP[$s]=$18; //@line 555 "stropmodule.c"
        var $19=___ctype_b_loc(); //@line 556 "stropmodule.c"
        var $20=HEAP[$19]; //@line 556 "stropmodule.c"
        var $21=HEAP[$c]; //@line 556 "stropmodule.c"
        var $22=(($20+2*$21)&4294967295); //@line 556 "stropmodule.c"
        var $23=HEAP[$22]; //@line 556 "stropmodule.c"
        var $24=unSign(($23), 16, 0); //@line 556 "stropmodule.c"
        var $25=($24) & 512; //@line 556 "stropmodule.c"
        var $26=((($25))|0)!=0; //@line 556 "stropmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 556 "stropmodule.c"
      case 8: // $bb7
        HEAP[$changed]=1; //@line 557 "stropmodule.c"
        var $27=HEAP[$c]; //@line 558 "stropmodule.c"
        var $28=_toupper($27); //@line 558 "stropmodule.c"
        var $29=((($28)) & 255); //@line 558 "stropmodule.c"
        var $30=HEAP[$s_new]; //@line 558 "stropmodule.c"
        HEAP[$30]=$29; //@line 558 "stropmodule.c"
        __label__ = 10; break; //@line 558 "stropmodule.c"
      case 9: // $bb8
        var $31=HEAP[$c]; //@line 560 "stropmodule.c"
        var $32=((($31)) & 255); //@line 560 "stropmodule.c"
        var $33=HEAP[$s_new]; //@line 560 "stropmodule.c"
        HEAP[$33]=$32; //@line 560 "stropmodule.c"
        __label__ = 10; break; //@line 560 "stropmodule.c"
      case 10: // $bb9
        var $34=HEAP[$s_new]; //@line 561 "stropmodule.c"
        var $35=(($34+1)&4294967295); //@line 561 "stropmodule.c"
        HEAP[$s_new]=$35; //@line 561 "stropmodule.c"
        __label__ = 11; break; //@line 561 "stropmodule.c"
      case 11: // $bb10
        HEAP[$i]=1; //@line 563 "stropmodule.c"
        __label__ = 16; break; //@line 563 "stropmodule.c"
      case 12: // $bb11
        var $36=HEAP[$s]; //@line 564 "stropmodule.c"
        var $37=HEAP[$36]; //@line 564 "stropmodule.c"
        var $38=unSign(($37), 8, 0); //@line 564 "stropmodule.c"
        HEAP[$c12]=$38; //@line 564 "stropmodule.c"
        var $39=(($36+1)&4294967295); //@line 564 "stropmodule.c"
        HEAP[$s]=$39; //@line 564 "stropmodule.c"
        var $40=___ctype_b_loc(); //@line 565 "stropmodule.c"
        var $41=HEAP[$40]; //@line 565 "stropmodule.c"
        var $42=HEAP[$c12]; //@line 565 "stropmodule.c"
        var $43=(($41+2*$42)&4294967295); //@line 565 "stropmodule.c"
        var $44=HEAP[$43]; //@line 565 "stropmodule.c"
        var $45=unSign(($44), 16, 0); //@line 565 "stropmodule.c"
        var $46=($45) & 256; //@line 565 "stropmodule.c"
        var $47=((($46))|0)!=0; //@line 565 "stropmodule.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 565 "stropmodule.c"
      case 13: // $bb13
        HEAP[$changed]=1; //@line 566 "stropmodule.c"
        var $48=HEAP[$c12]; //@line 567 "stropmodule.c"
        var $49=_tolower($48); //@line 567 "stropmodule.c"
        var $50=((($49)) & 255); //@line 567 "stropmodule.c"
        var $51=HEAP[$s_new]; //@line 567 "stropmodule.c"
        HEAP[$51]=$50; //@line 567 "stropmodule.c"
        __label__ = 15; break; //@line 567 "stropmodule.c"
      case 14: // $bb14
        var $52=HEAP[$c12]; //@line 569 "stropmodule.c"
        var $53=((($52)) & 255); //@line 569 "stropmodule.c"
        var $54=HEAP[$s_new]; //@line 569 "stropmodule.c"
        HEAP[$54]=$53; //@line 569 "stropmodule.c"
        __label__ = 15; break; //@line 569 "stropmodule.c"
      case 15: // $bb15
        var $55=HEAP[$s_new]; //@line 570 "stropmodule.c"
        var $56=(($55+1)&4294967295); //@line 570 "stropmodule.c"
        HEAP[$s_new]=$56; //@line 570 "stropmodule.c"
        var $57=HEAP[$i]; //@line 563 "stropmodule.c"
        var $58=((($57) + 1)&4294967295); //@line 563 "stropmodule.c"
        HEAP[$i]=$58; //@line 563 "stropmodule.c"
        __label__ = 16; break; //@line 563 "stropmodule.c"
      case 16: // $bb16
        var $59=HEAP[$n]; //@line 563 "stropmodule.c"
        var $60=HEAP[$i]; //@line 563 "stropmodule.c"
        var $61=((($60))|0) < ((($59))|0); //@line 563 "stropmodule.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 563 "stropmodule.c"
      case 17: // $bb17
        var $62=HEAP[$changed]; //@line 572 "stropmodule.c"
        var $63=((($62))|0)==0; //@line 572 "stropmodule.c"
        if ($63) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 572 "stropmodule.c"
      case 18: // $bb18
        var $64=HEAP[$newstr]; //@line 573 "stropmodule.c"
        var $65=(($64)&4294967295); //@line 573 "stropmodule.c"
        var $66=HEAP[$65]; //@line 573 "stropmodule.c"
        var $67=((($66) - 1)&4294967295); //@line 573 "stropmodule.c"
        var $68=HEAP[$newstr]; //@line 573 "stropmodule.c"
        var $69=(($68)&4294967295); //@line 573 "stropmodule.c"
        HEAP[$69]=$67; //@line 573 "stropmodule.c"
        var $70=HEAP[$newstr]; //@line 573 "stropmodule.c"
        var $71=(($70)&4294967295); //@line 573 "stropmodule.c"
        var $72=HEAP[$71]; //@line 573 "stropmodule.c"
        var $73=((($72))|0)==0; //@line 573 "stropmodule.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 573 "stropmodule.c"
      case 19: // $bb19
        var $74=HEAP[$newstr]; //@line 573 "stropmodule.c"
        var $75=(($74+4)&4294967295); //@line 573 "stropmodule.c"
        var $76=HEAP[$75]; //@line 573 "stropmodule.c"
        var $77=(($76+24)&4294967295); //@line 573 "stropmodule.c"
        var $78=HEAP[$77]; //@line 573 "stropmodule.c"
        var $79=HEAP[$newstr]; //@line 573 "stropmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 573 "stropmodule.c"
        __label__ = 20; break; //@line 573 "stropmodule.c"
      case 20: // $bb20
        var $80=HEAP[$args_addr]; //@line 574 "stropmodule.c"
        var $81=(($80)&4294967295); //@line 574 "stropmodule.c"
        var $82=HEAP[$81]; //@line 574 "stropmodule.c"
        var $83=((($82) + 1)&4294967295); //@line 574 "stropmodule.c"
        var $84=HEAP[$args_addr]; //@line 574 "stropmodule.c"
        var $85=(($84)&4294967295); //@line 574 "stropmodule.c"
        HEAP[$85]=$83; //@line 574 "stropmodule.c"
        var $86=HEAP[$args_addr]; //@line 575 "stropmodule.c"
        HEAP[$0]=$86; //@line 575 "stropmodule.c"
        __label__ = 22; break; //@line 575 "stropmodule.c"
      case 21: // $bb21
        var $87=HEAP[$newstr]; //@line 577 "stropmodule.c"
        HEAP[$0]=$87; //@line 577 "stropmodule.c"
        __label__ = 22; break; //@line 577 "stropmodule.c"
      case 22: // $bb22
        var $88=HEAP[$0]; //@line 546 "stropmodule.c"
        HEAP[$retval]=$88; //@line 546 "stropmodule.c"
        __label__ = 23; break; //@line 546 "stropmodule.c"
      case 23: // $return
        var $retval23=HEAP[$retval]; //@line 546 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 546 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_expandtabs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $e=__stackBase__+16;
        var $p=__stackBase__+20;
        var $q=__stackBase__+24;
        var $i=__stackBase__+28;
        var $j=__stackBase__+32;
        var $old_j=__stackBase__+36;
        var $out=__stackBase__+40;
        var $string=__stackBase__+44;
        var $stringlen=__stackBase__+48;
        var $tabsize=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$tabsize]=8; //@line 600 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 602 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 602 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 602 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 602 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 602 "stropmodule.c"
        __label__ = 30; break; //@line 602 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 604 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str10)&4294967295), $string, $stringlen, $tabsize); //@line 604 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 604 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 604 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 605 "stropmodule.c"
        __label__ = 30; break; //@line 605 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$tabsize]; //@line 606 "stropmodule.c"
        var $8=((($7))|0) <= 0; //@line 606 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 606 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 607 "stropmodule.c"
        _PyErr_SetString($9, ((__str11)&4294967295)); //@line 607 "stropmodule.c"
        HEAP[$0]=0; //@line 609 "stropmodule.c"
        __label__ = 30; break; //@line 609 "stropmodule.c"
      case 6: // $bb5
        HEAP[$old_j]=0; //@line 613 "stropmodule.c"
        var $10=HEAP[$old_j]; //@line 613 "stropmodule.c"
        HEAP[$j]=$10; //@line 613 "stropmodule.c"
        var $11=HEAP[$j]; //@line 613 "stropmodule.c"
        HEAP[$i]=$11; //@line 613 "stropmodule.c"
        var $12=HEAP[$string]; //@line 614 "stropmodule.c"
        var $13=HEAP[$stringlen]; //@line 614 "stropmodule.c"
        var $14=(($12+$13)&4294967295); //@line 614 "stropmodule.c"
        HEAP[$e]=$14; //@line 614 "stropmodule.c"
        var $15=HEAP[$string]; //@line 615 "stropmodule.c"
        HEAP[$p]=$15; //@line 615 "stropmodule.c"
        __label__ = 14; break; //@line 615 "stropmodule.c"
      case 7: // $bb6
        var $16=HEAP[$p]; //@line 616 "stropmodule.c"
        var $17=HEAP[$16]; //@line 616 "stropmodule.c"
        var $18=reSign(($17), 8, 0)==9; //@line 616 "stropmodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 616 "stropmodule.c"
      case 8: // $bb7
        var $19=HEAP[$tabsize]; //@line 617 "stropmodule.c"
        var $20=HEAP[$tabsize]; //@line 617 "stropmodule.c"
        var $21=HEAP[$j]; //@line 617 "stropmodule.c"
        var $22=((($21))|0) % ((($20))|0); //@line 617 "stropmodule.c"
        var $23=((($19) - ($22))&4294967295); //@line 617 "stropmodule.c"
        var $24=HEAP[$j]; //@line 617 "stropmodule.c"
        var $25=((($23) + ($24))&4294967295); //@line 617 "stropmodule.c"
        HEAP[$j]=$25; //@line 617 "stropmodule.c"
        var $26=HEAP[$old_j]; //@line 618 "stropmodule.c"
        var $27=HEAP[$j]; //@line 618 "stropmodule.c"
        var $28=((($26))|0) > ((($27))|0); //@line 618 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 618 "stropmodule.c"
      case 9: // $bb8
        var $29=HEAP[_PyExc_OverflowError]; //@line 619 "stropmodule.c"
        _PyErr_SetString($29, ((__str12)&4294967295)); //@line 619 "stropmodule.c"
        HEAP[$0]=0; //@line 621 "stropmodule.c"
        __label__ = 30; break; //@line 621 "stropmodule.c"
      case 10: // $bb9
        var $30=HEAP[$j]; //@line 623 "stropmodule.c"
        HEAP[$old_j]=$30; //@line 623 "stropmodule.c"
        __label__ = 13; break; //@line 623 "stropmodule.c"
      case 11: // $bb10
        var $31=HEAP[$j]; //@line 625 "stropmodule.c"
        var $32=((($31) + 1)&4294967295); //@line 625 "stropmodule.c"
        HEAP[$j]=$32; //@line 625 "stropmodule.c"
        var $33=HEAP[$p]; //@line 626 "stropmodule.c"
        var $34=HEAP[$33]; //@line 626 "stropmodule.c"
        var $35=reSign(($34), 8, 0)==10; //@line 626 "stropmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 626 "stropmodule.c"
      case 12: // $bb11
        var $36=HEAP[$i]; //@line 627 "stropmodule.c"
        var $37=HEAP[$j]; //@line 627 "stropmodule.c"
        var $38=((($36) + ($37))&4294967295); //@line 627 "stropmodule.c"
        HEAP[$i]=$38; //@line 627 "stropmodule.c"
        HEAP[$j]=0; //@line 628 "stropmodule.c"
        __label__ = 13; break; //@line 628 "stropmodule.c"
      case 13: // $bb12
        var $39=HEAP[$p]; //@line 615 "stropmodule.c"
        var $40=(($39+1)&4294967295); //@line 615 "stropmodule.c"
        HEAP[$p]=$40; //@line 615 "stropmodule.c"
        __label__ = 14; break; //@line 615 "stropmodule.c"
      case 14: // $bb13
        var $41=HEAP[$p]; //@line 615 "stropmodule.c"
        var $42=HEAP[$e]; //@line 615 "stropmodule.c"
        var $43=($41) < ($42); //@line 615 "stropmodule.c"
        if ($43) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 615 "stropmodule.c"
      case 15: // $bb14
        var $44=HEAP[$i]; //@line 633 "stropmodule.c"
        var $45=HEAP[$j]; //@line 633 "stropmodule.c"
        var $46=((($44) + ($45))&4294967295); //@line 633 "stropmodule.c"
        var $47=((($46))|0) < 0; //@line 633 "stropmodule.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 633 "stropmodule.c"
      case 16: // $bb15
        var $48=HEAP[_PyExc_OverflowError]; //@line 634 "stropmodule.c"
        _PyErr_SetString($48, ((__str12)&4294967295)); //@line 634 "stropmodule.c"
        HEAP[$0]=0; //@line 635 "stropmodule.c"
        __label__ = 30; break; //@line 635 "stropmodule.c"
      case 17: // $bb16
        var $49=HEAP[$i]; //@line 639 "stropmodule.c"
        var $50=HEAP[$j]; //@line 639 "stropmodule.c"
        var $51=((($49) + ($50))&4294967295); //@line 639 "stropmodule.c"
        var $52=_PyString_FromStringAndSize(0, $51); //@line 639 "stropmodule.c"
        HEAP[$out]=$52; //@line 639 "stropmodule.c"
        var $53=HEAP[$out]; //@line 640 "stropmodule.c"
        var $54=($53)==0; //@line 640 "stropmodule.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 640 "stropmodule.c"
      case 18: // $bb17
        HEAP[$0]=0; //@line 641 "stropmodule.c"
        __label__ = 30; break; //@line 641 "stropmodule.c"
      case 19: // $bb18
        HEAP[$i]=0; //@line 643 "stropmodule.c"
        var $55=HEAP[$out]; //@line 644 "stropmodule.c"
        var $56=$55; //@line 644 "stropmodule.c"
        var $57=(($56+20)&4294967295); //@line 644 "stropmodule.c"
        var $58=(($57)&4294967295); //@line 644 "stropmodule.c"
        HEAP[$q]=$58; //@line 644 "stropmodule.c"
        var $59=HEAP[$string]; //@line 646 "stropmodule.c"
        HEAP[$p]=$59; //@line 646 "stropmodule.c"
        __label__ = 28; break; //@line 646 "stropmodule.c"
      case 20: // $bb19
        var $60=HEAP[$p]; //@line 647 "stropmodule.c"
        var $61=HEAP[$60]; //@line 647 "stropmodule.c"
        var $62=reSign(($61), 8, 0)==9; //@line 647 "stropmodule.c"
        if ($62) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 647 "stropmodule.c"
      case 21: // $bb20
        var $63=HEAP[$tabsize]; //@line 648 "stropmodule.c"
        var $64=HEAP[$tabsize]; //@line 648 "stropmodule.c"
        var $65=HEAP[$i]; //@line 648 "stropmodule.c"
        var $66=((($65))|0) % ((($64))|0); //@line 648 "stropmodule.c"
        var $67=((($63) - ($66))&4294967295); //@line 648 "stropmodule.c"
        HEAP[$j]=$67; //@line 648 "stropmodule.c"
        var $68=HEAP[$i]; //@line 649 "stropmodule.c"
        var $69=HEAP[$j]; //@line 649 "stropmodule.c"
        var $70=((($68) + ($69))&4294967295); //@line 649 "stropmodule.c"
        HEAP[$i]=$70; //@line 649 "stropmodule.c"
        __label__ = 23; break; //@line 649 "stropmodule.c"
      case 22: // $bb21
        var $71=HEAP[$q]; //@line 651 "stropmodule.c"
        HEAP[$71]=32; //@line 651 "stropmodule.c"
        var $72=HEAP[$q]; //@line 651 "stropmodule.c"
        var $73=(($72+1)&4294967295); //@line 651 "stropmodule.c"
        HEAP[$q]=$73; //@line 651 "stropmodule.c"
        __label__ = 23; break; //@line 651 "stropmodule.c"
      case 23: // $bb22
        var $74=HEAP[$j]; //@line 650 "stropmodule.c"
        var $75=((($74))|0) > 0; //@line 650 "stropmodule.c"
        var $76=unSign(($75), 1, 0); //@line 650 "stropmodule.c"
        var $77=HEAP[$j]; //@line 650 "stropmodule.c"
        var $78=((($77) - 1)&4294967295); //@line 650 "stropmodule.c"
        HEAP[$j]=$78; //@line 650 "stropmodule.c"
        var $toBool=reSign(($76), 8, 0)!=0; //@line 650 "stropmodule.c"
        if ($toBool) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 650 "stropmodule.c"
      case 24: // $bb23
        __label__ = 27; break; //@line 650 "stropmodule.c"
      case 25: // $bb24
        var $79=HEAP[$p]; //@line 653 "stropmodule.c"
        var $80=HEAP[$79]; //@line 653 "stropmodule.c"
        var $81=HEAP[$q]; //@line 653 "stropmodule.c"
        HEAP[$81]=$80; //@line 653 "stropmodule.c"
        var $82=HEAP[$q]; //@line 653 "stropmodule.c"
        var $83=(($82+1)&4294967295); //@line 653 "stropmodule.c"
        HEAP[$q]=$83; //@line 653 "stropmodule.c"
        var $84=HEAP[$i]; //@line 654 "stropmodule.c"
        var $85=((($84) + 1)&4294967295); //@line 654 "stropmodule.c"
        HEAP[$i]=$85; //@line 654 "stropmodule.c"
        var $86=HEAP[$p]; //@line 655 "stropmodule.c"
        var $87=HEAP[$86]; //@line 655 "stropmodule.c"
        var $88=reSign(($87), 8, 0)==10; //@line 655 "stropmodule.c"
        if ($88) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 655 "stropmodule.c"
      case 26: // $bb25
        HEAP[$i]=0; //@line 656 "stropmodule.c"
        __label__ = 27; break; //@line 656 "stropmodule.c"
      case 27: // $bb26
        var $89=HEAP[$p]; //@line 646 "stropmodule.c"
        var $90=(($89+1)&4294967295); //@line 646 "stropmodule.c"
        HEAP[$p]=$90; //@line 646 "stropmodule.c"
        __label__ = 28; break; //@line 646 "stropmodule.c"
      case 28: // $bb27
        var $91=HEAP[$p]; //@line 646 "stropmodule.c"
        var $92=HEAP[$e]; //@line 646 "stropmodule.c"
        var $93=($91) < ($92); //@line 646 "stropmodule.c"
        if ($93) { __label__ = 20; break; } else { __label__ = 29; break; } //@line 646 "stropmodule.c"
      case 29: // $bb28
        var $94=HEAP[$out]; //@line 660 "stropmodule.c"
        HEAP[$0]=$94; //@line 660 "stropmodule.c"
        __label__ = 30; break; //@line 660 "stropmodule.c"
      case 30: // $bb29
        var $95=HEAP[$0]; //@line 602 "stropmodule.c"
        HEAP[$retval]=$95; //@line 602 "stropmodule.c"
        __label__ = 31; break; //@line 602 "stropmodule.c"
      case 31: // $return
        var $retval30=HEAP[$retval]; //@line 602 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 602 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_count($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $sub=__stackBase__+20;
        var $len=__stackBase__+24;
        var $n=__stackBase__+28;
        var $i=__stackBase__+32;
        var $last=__stackBase__+36;
        var $m=__stackBase__+40;
        var $r=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$i]=0; //@line 676 "stropmodule.c"
        HEAP[$last]=2147483647; //@line 676 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 679 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 679 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 679 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 679 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 679 "stropmodule.c"
        __label__ = 22; break; //@line 679 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 680 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str13)&4294967295), $s, $len, $sub, $n, $i, $last); //@line 680 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 680 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 680 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 681 "stropmodule.c"
        __label__ = 22; break; //@line 681 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$last]; //@line 682 "stropmodule.c"
        var $8=HEAP[$len]; //@line 682 "stropmodule.c"
        var $9=((($7))|0) > ((($8))|0); //@line 682 "stropmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 682 "stropmodule.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 683 "stropmodule.c"
        HEAP[$last]=$10; //@line 683 "stropmodule.c"
        __label__ = 6; break; //@line 683 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$last]; //@line 684 "stropmodule.c"
        var $12=((($11))|0) < 0; //@line 684 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 684 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$last]; //@line 685 "stropmodule.c"
        var $14=HEAP[$len]; //@line 685 "stropmodule.c"
        var $15=((($13) + ($14))&4294967295); //@line 685 "stropmodule.c"
        HEAP[$last]=$15; //@line 685 "stropmodule.c"
        __label__ = 8; break; //@line 685 "stropmodule.c"
      case 8: // $bb7
        var $16=HEAP[$last]; //@line 686 "stropmodule.c"
        var $17=((($16))|0) < 0; //@line 686 "stropmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 686 "stropmodule.c"
      case 9: // $bb8
        HEAP[$last]=0; //@line 687 "stropmodule.c"
        __label__ = 10; break; //@line 687 "stropmodule.c"
      case 10: // $bb9
        var $18=HEAP[$i]; //@line 688 "stropmodule.c"
        var $19=((($18))|0) < 0; //@line 688 "stropmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 688 "stropmodule.c"
      case 11: // $bb10
        var $20=HEAP[$i]; //@line 689 "stropmodule.c"
        var $21=HEAP[$len]; //@line 689 "stropmodule.c"
        var $22=((($20) + ($21))&4294967295); //@line 689 "stropmodule.c"
        HEAP[$i]=$22; //@line 689 "stropmodule.c"
        __label__ = 12; break; //@line 689 "stropmodule.c"
      case 12: // $bb11
        var $23=HEAP[$i]; //@line 690 "stropmodule.c"
        var $24=((($23))|0) < 0; //@line 690 "stropmodule.c"
        if ($24) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 690 "stropmodule.c"
      case 13: // $bb12
        HEAP[$i]=0; //@line 691 "stropmodule.c"
        __label__ = 14; break; //@line 691 "stropmodule.c"
      case 14: // $bb13
        var $25=HEAP[$last]; //@line 692 "stropmodule.c"
        var $26=((($25) + 1)&4294967295); //@line 692 "stropmodule.c"
        var $27=HEAP[$n]; //@line 692 "stropmodule.c"
        var $28=((($26) - ($27))&4294967295); //@line 692 "stropmodule.c"
        HEAP[$m]=$28; //@line 692 "stropmodule.c"
        var $29=HEAP[$n]; //@line 693 "stropmodule.c"
        var $30=((($29))|0)==0; //@line 693 "stropmodule.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 693 "stropmodule.c"
      case 15: // $bb14
        var $31=HEAP[$i]; //@line 694 "stropmodule.c"
        var $32=HEAP[$m]; //@line 694 "stropmodule.c"
        var $33=((($32) - ($31))&4294967295); //@line 694 "stropmodule.c"
        var $34=_PyInt_FromLong($33); //@line 694 "stropmodule.c"
        HEAP[$0]=$34; //@line 694 "stropmodule.c"
        __label__ = 22; break; //@line 694 "stropmodule.c"
      case 16: // $bb15
        HEAP[$r]=0; //@line 696 "stropmodule.c"
        __label__ = 20; break; //@line 696 "stropmodule.c"
      case 17: // $bb16
        var $35=HEAP[$n]; //@line 698 "stropmodule.c"
        var $36=HEAP[$sub]; //@line 698 "stropmodule.c"
        var $37=HEAP[$s]; //@line 698 "stropmodule.c"
        var $38=HEAP[$i]; //@line 698 "stropmodule.c"
        var $39=(($37+$38)&4294967295); //@line 698 "stropmodule.c"
        var $40=_memcmp($39, $36, $35); //@line 698 "stropmodule.c"
        var $41=((($40))|0)==0; //@line 698 "stropmodule.c"
        if ($41) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 698 "stropmodule.c"
      case 18: // $bb17
        var $42=HEAP[$r]; //@line 699 "stropmodule.c"
        var $43=((($42) + 1)&4294967295); //@line 699 "stropmodule.c"
        HEAP[$r]=$43; //@line 699 "stropmodule.c"
        var $44=HEAP[$i]; //@line 700 "stropmodule.c"
        var $45=HEAP[$n]; //@line 700 "stropmodule.c"
        var $46=((($44) + ($45))&4294967295); //@line 700 "stropmodule.c"
        HEAP[$i]=$46; //@line 700 "stropmodule.c"
        __label__ = 20; break; //@line 700 "stropmodule.c"
      case 19: // $bb18
        var $47=HEAP[$i]; //@line 702 "stropmodule.c"
        var $48=((($47) + 1)&4294967295); //@line 702 "stropmodule.c"
        HEAP[$i]=$48; //@line 702 "stropmodule.c"
        __label__ = 20; break; //@line 702 "stropmodule.c"
      case 20: // $bb19
        var $49=HEAP[$i]; //@line 697 "stropmodule.c"
        var $50=HEAP[$m]; //@line 697 "stropmodule.c"
        var $51=((($49))|0) < ((($50))|0); //@line 697 "stropmodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 21; break; } //@line 697 "stropmodule.c"
      case 21: // $bb20
        var $52=HEAP[$r]; //@line 705 "stropmodule.c"
        var $53=_PyInt_FromLong($52); //@line 705 "stropmodule.c"
        HEAP[$0]=$53; //@line 705 "stropmodule.c"
        __label__ = 22; break; //@line 705 "stropmodule.c"
      case 22: // $bb21
        var $54=HEAP[$0]; //@line 679 "stropmodule.c"
        HEAP[$retval]=$54; //@line 679 "stropmodule.c"
        __label__ = 23; break; //@line 679 "stropmodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 679 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 679 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_swapcase($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $s_new=__stackBase__+20;
        var $i=__stackBase__+24;
        var $n=__stackBase__+28;
        var $newstr=__stackBase__+32;
        var $changed=__stackBase__+36;
        var $c=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 723 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 723 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 723 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 723 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 723 "stropmodule.c"
        __label__ = 19; break; //@line 723 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 724 "stropmodule.c"
        var $5=_PyString_AsStringAndSize($4, $s, $n); //@line 724 "stropmodule.c"
        var $6=((($5))|0)!=0; //@line 724 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 724 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 725 "stropmodule.c"
        __label__ = 19; break; //@line 725 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$n]; //@line 726 "stropmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 726 "stropmodule.c"
        HEAP[$newstr]=$8; //@line 726 "stropmodule.c"
        var $9=HEAP[$newstr]; //@line 727 "stropmodule.c"
        var $10=($9)==0; //@line 727 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 727 "stropmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 728 "stropmodule.c"
        __label__ = 19; break; //@line 728 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$newstr]; //@line 729 "stropmodule.c"
        var $12=_PyString_AsString($11); //@line 729 "stropmodule.c"
        HEAP[$s_new]=$12; //@line 729 "stropmodule.c"
        HEAP[$changed]=0; //@line 730 "stropmodule.c"
        HEAP[$i]=0; //@line 731 "stropmodule.c"
        __label__ = 13; break; //@line 731 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[$s]; //@line 732 "stropmodule.c"
        var $14=HEAP[$13]; //@line 732 "stropmodule.c"
        var $15=unSign(($14), 8, 0); //@line 732 "stropmodule.c"
        HEAP[$c]=$15; //@line 732 "stropmodule.c"
        var $16=(($13+1)&4294967295); //@line 732 "stropmodule.c"
        HEAP[$s]=$16; //@line 732 "stropmodule.c"
        var $17=___ctype_b_loc(); //@line 733 "stropmodule.c"
        var $18=HEAP[$17]; //@line 733 "stropmodule.c"
        var $19=HEAP[$c]; //@line 733 "stropmodule.c"
        var $20=(($18+2*$19)&4294967295); //@line 733 "stropmodule.c"
        var $21=HEAP[$20]; //@line 733 "stropmodule.c"
        var $22=unSign(($21), 16, 0); //@line 733 "stropmodule.c"
        var $23=($22) & 512; //@line 733 "stropmodule.c"
        var $24=((($23))|0)!=0; //@line 733 "stropmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 733 "stropmodule.c"
      case 8: // $bb7
        HEAP[$changed]=1; //@line 734 "stropmodule.c"
        var $25=HEAP[$c]; //@line 735 "stropmodule.c"
        var $26=_toupper($25); //@line 735 "stropmodule.c"
        var $27=((($26)) & 255); //@line 735 "stropmodule.c"
        var $28=HEAP[$s_new]; //@line 735 "stropmodule.c"
        HEAP[$28]=$27; //@line 735 "stropmodule.c"
        __label__ = 12; break; //@line 735 "stropmodule.c"
      case 9: // $bb8
        var $29=___ctype_b_loc(); //@line 737 "stropmodule.c"
        var $30=HEAP[$29]; //@line 737 "stropmodule.c"
        var $31=HEAP[$c]; //@line 737 "stropmodule.c"
        var $32=(($30+2*$31)&4294967295); //@line 737 "stropmodule.c"
        var $33=HEAP[$32]; //@line 737 "stropmodule.c"
        var $34=unSign(($33), 16, 0); //@line 737 "stropmodule.c"
        var $35=($34) & 256; //@line 737 "stropmodule.c"
        var $36=((($35))|0)!=0; //@line 737 "stropmodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 737 "stropmodule.c"
      case 10: // $bb9
        HEAP[$changed]=1; //@line 738 "stropmodule.c"
        var $37=HEAP[$c]; //@line 739 "stropmodule.c"
        var $38=_tolower($37); //@line 739 "stropmodule.c"
        var $39=((($38)) & 255); //@line 739 "stropmodule.c"
        var $40=HEAP[$s_new]; //@line 739 "stropmodule.c"
        HEAP[$40]=$39; //@line 739 "stropmodule.c"
        __label__ = 12; break; //@line 739 "stropmodule.c"
      case 11: // $bb10
        var $41=HEAP[$c]; //@line 742 "stropmodule.c"
        var $42=((($41)) & 255); //@line 742 "stropmodule.c"
        var $43=HEAP[$s_new]; //@line 742 "stropmodule.c"
        HEAP[$43]=$42; //@line 742 "stropmodule.c"
        __label__ = 12; break; //@line 742 "stropmodule.c"
      case 12: // $bb11
        var $44=HEAP[$s_new]; //@line 743 "stropmodule.c"
        var $45=(($44+1)&4294967295); //@line 743 "stropmodule.c"
        HEAP[$s_new]=$45; //@line 743 "stropmodule.c"
        var $46=HEAP[$i]; //@line 731 "stropmodule.c"
        var $47=((($46) + 1)&4294967295); //@line 731 "stropmodule.c"
        HEAP[$i]=$47; //@line 731 "stropmodule.c"
        __label__ = 13; break; //@line 731 "stropmodule.c"
      case 13: // $bb12
        var $48=HEAP[$n]; //@line 731 "stropmodule.c"
        var $49=HEAP[$i]; //@line 731 "stropmodule.c"
        var $50=((($49))|0) < ((($48))|0); //@line 731 "stropmodule.c"
        if ($50) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 731 "stropmodule.c"
      case 14: // $bb13
        var $51=HEAP[$changed]; //@line 745 "stropmodule.c"
        var $52=((($51))|0)==0; //@line 745 "stropmodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 745 "stropmodule.c"
      case 15: // $bb14
        var $53=HEAP[$newstr]; //@line 746 "stropmodule.c"
        var $54=(($53)&4294967295); //@line 746 "stropmodule.c"
        var $55=HEAP[$54]; //@line 746 "stropmodule.c"
        var $56=((($55) - 1)&4294967295); //@line 746 "stropmodule.c"
        var $57=HEAP[$newstr]; //@line 746 "stropmodule.c"
        var $58=(($57)&4294967295); //@line 746 "stropmodule.c"
        HEAP[$58]=$56; //@line 746 "stropmodule.c"
        var $59=HEAP[$newstr]; //@line 746 "stropmodule.c"
        var $60=(($59)&4294967295); //@line 746 "stropmodule.c"
        var $61=HEAP[$60]; //@line 746 "stropmodule.c"
        var $62=((($61))|0)==0; //@line 746 "stropmodule.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 746 "stropmodule.c"
      case 16: // $bb15
        var $63=HEAP[$newstr]; //@line 746 "stropmodule.c"
        var $64=(($63+4)&4294967295); //@line 746 "stropmodule.c"
        var $65=HEAP[$64]; //@line 746 "stropmodule.c"
        var $66=(($65+24)&4294967295); //@line 746 "stropmodule.c"
        var $67=HEAP[$66]; //@line 746 "stropmodule.c"
        var $68=HEAP[$newstr]; //@line 746 "stropmodule.c"
        FUNCTION_TABLE[$67]($68); //@line 746 "stropmodule.c"
        __label__ = 17; break; //@line 746 "stropmodule.c"
      case 17: // $bb16
        var $69=HEAP[$args_addr]; //@line 747 "stropmodule.c"
        var $70=(($69)&4294967295); //@line 747 "stropmodule.c"
        var $71=HEAP[$70]; //@line 747 "stropmodule.c"
        var $72=((($71) + 1)&4294967295); //@line 747 "stropmodule.c"
        var $73=HEAP[$args_addr]; //@line 747 "stropmodule.c"
        var $74=(($73)&4294967295); //@line 747 "stropmodule.c"
        HEAP[$74]=$72; //@line 747 "stropmodule.c"
        var $75=HEAP[$args_addr]; //@line 748 "stropmodule.c"
        HEAP[$0]=$75; //@line 748 "stropmodule.c"
        __label__ = 19; break; //@line 748 "stropmodule.c"
      case 18: // $bb17
        var $76=HEAP[$newstr]; //@line 750 "stropmodule.c"
        HEAP[$0]=$76; //@line 750 "stropmodule.c"
        __label__ = 19; break; //@line 750 "stropmodule.c"
      case 19: // $bb18
        var $77=HEAP[$0]; //@line 723 "stropmodule.c"
        HEAP[$retval]=$77; //@line 723 "stropmodule.c"
        __label__ = 20; break; //@line 723 "stropmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 723 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 723 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atoi($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 288; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $end=__stackBase__+20;
        var $base=__stackBase__+24;
        var $x=__stackBase__+28;
        var $buffer=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$base]=10; //@line 768 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 772 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 772 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 772 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 772 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 772 "stropmodule.c"
        __label__ = 27; break; //@line 772 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 773 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str14)&4294967295), $s, $base); //@line 773 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 773 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 773 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 774 "stropmodule.c"
        __label__ = 27; break; //@line 774 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$base]; //@line 776 "stropmodule.c"
        var $8=((($7))|0)==0; //@line 776 "stropmodule.c"
        if ($8) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 776 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[$base]; //@line 776 "stropmodule.c"
        var $10=((($9))|0) <= 1; //@line 776 "stropmodule.c"
        if ($10) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 776 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$base]; //@line 776 "stropmodule.c"
        var $12=((($11))|0) > 36; //@line 776 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 776 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[_PyExc_ValueError]; //@line 777 "stropmodule.c"
        _PyErr_SetString($13, ((__str15)&4294967295)); //@line 777 "stropmodule.c"
        HEAP[$0]=0; //@line 778 "stropmodule.c"
        __label__ = 27; break; //@line 778 "stropmodule.c"
      case 8: // $bb7
        __label__ = 10; break; //@line 778 "stropmodule.c"
      case 9: // $bb8
        var $14=HEAP[$s]; //@line 782 "stropmodule.c"
        var $15=(($14+1)&4294967295); //@line 782 "stropmodule.c"
        HEAP[$s]=$15; //@line 782 "stropmodule.c"
        __label__ = 10; break; //@line 782 "stropmodule.c"
      case 10: // $bb9
        var $16=HEAP[$s]; //@line 781 "stropmodule.c"
        var $17=HEAP[$16]; //@line 781 "stropmodule.c"
        var $18=reSign(($17), 8, 0)==0; //@line 781 "stropmodule.c"
        if ($18) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 781 "stropmodule.c"
      case 11: // $bb10
        var $19=___ctype_b_loc(); //@line 781 "stropmodule.c"
        var $20=HEAP[$19]; //@line 781 "stropmodule.c"
        var $21=HEAP[$s]; //@line 781 "stropmodule.c"
        var $22=HEAP[$21]; //@line 781 "stropmodule.c"
        var $23=unSign(($22), 8, 0); //@line 781 "stropmodule.c"
        var $24=(($20+2*$23)&4294967295); //@line 781 "stropmodule.c"
        var $25=HEAP[$24]; //@line 781 "stropmodule.c"
        var $26=unSign(($25), 16, 0); //@line 781 "stropmodule.c"
        var $27=($26) & 8192; //@line 781 "stropmodule.c"
        var $28=((($27))|0)!=0; //@line 781 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 781 "stropmodule.c"
      case 12: // $bb11
        var $29=___errno_location(); //@line 783 "stropmodule.c"
        HEAP[$29]=0; //@line 783 "stropmodule.c"
        var $30=HEAP[$base]; //@line 784 "stropmodule.c"
        var $31=((($30))|0)!=0; //@line 784 "stropmodule.c"
        if ($31) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 784 "stropmodule.c"
      case 13: // $bb12
        var $32=HEAP[$s]; //@line 784 "stropmodule.c"
        var $33=(($32)&4294967295); //@line 784 "stropmodule.c"
        var $34=HEAP[$33]; //@line 784 "stropmodule.c"
        var $35=reSign(($34), 8, 0)!=48; //@line 784 "stropmodule.c"
        if ($35) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 784 "stropmodule.c"
      case 14: // $bb13
        var $36=HEAP[$base]; //@line 785 "stropmodule.c"
        var $37=HEAP[$s]; //@line 785 "stropmodule.c"
        var $38=_PyOS_strtoul($37, $end, $36); //@line 785 "stropmodule.c"
        HEAP[$x]=$38; //@line 785 "stropmodule.c"
        __label__ = 16; break; //@line 785 "stropmodule.c"
      case 15: // $bb14
        var $39=HEAP[$base]; //@line 787 "stropmodule.c"
        var $40=HEAP[$s]; //@line 787 "stropmodule.c"
        var $41=_PyOS_strtol($40, $end, $39); //@line 787 "stropmodule.c"
        HEAP[$x]=$41; //@line 787 "stropmodule.c"
        __label__ = 16; break; //@line 787 "stropmodule.c"
      case 16: // $bb15
        var $42=HEAP[$end]; //@line 788 "stropmodule.c"
        var $43=HEAP[$s]; //@line 788 "stropmodule.c"
        var $44=($42)==($43); //@line 788 "stropmodule.c"
        if ($44) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 788 "stropmodule.c"
      case 17: // $bb16
        var $45=___ctype_b_loc(); //@line 788 "stropmodule.c"
        var $46=HEAP[$45]; //@line 788 "stropmodule.c"
        var $47=HEAP[$end]; //@line 788 "stropmodule.c"
        var $48=(($47+-1)&4294967295); //@line 788 "stropmodule.c"
        var $49=HEAP[$48]; //@line 788 "stropmodule.c"
        var $50=unSign(($49), 8, 0); //@line 788 "stropmodule.c"
        var $51=(($46+2*$50)&4294967295); //@line 788 "stropmodule.c"
        var $52=HEAP[$51]; //@line 788 "stropmodule.c"
        var $53=unSign(($52), 16, 0); //@line 788 "stropmodule.c"
        var $54=($53) & 8; //@line 788 "stropmodule.c"
        var $55=((($54))|0)==0; //@line 788 "stropmodule.c"
        if ($55) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 788 "stropmodule.c"
      case 18: // $bb17
        __label__ = 20; break; //@line 788 "stropmodule.c"
      case 19: // $bb18
        var $56=HEAP[$end]; //@line 791 "stropmodule.c"
        var $57=(($56+1)&4294967295); //@line 791 "stropmodule.c"
        HEAP[$end]=$57; //@line 791 "stropmodule.c"
        __label__ = 20; break; //@line 791 "stropmodule.c"
      case 20: // $bb19
        var $58=HEAP[$end]; //@line 790 "stropmodule.c"
        var $59=HEAP[$58]; //@line 790 "stropmodule.c"
        var $60=reSign(($59), 8, 0)==0; //@line 790 "stropmodule.c"
        if ($60) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 790 "stropmodule.c"
      case 21: // $bb20
        var $61=___ctype_b_loc(); //@line 790 "stropmodule.c"
        var $62=HEAP[$61]; //@line 790 "stropmodule.c"
        var $63=HEAP[$end]; //@line 790 "stropmodule.c"
        var $64=HEAP[$63]; //@line 790 "stropmodule.c"
        var $65=unSign(($64), 8, 0); //@line 790 "stropmodule.c"
        var $66=(($62+2*$65)&4294967295); //@line 790 "stropmodule.c"
        var $67=HEAP[$66]; //@line 790 "stropmodule.c"
        var $68=unSign(($67), 16, 0); //@line 790 "stropmodule.c"
        var $69=($68) & 8192; //@line 790 "stropmodule.c"
        var $70=((($69))|0)!=0; //@line 790 "stropmodule.c"
        if ($70) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 790 "stropmodule.c"
      case 22: // $bb21
        var $71=HEAP[$end]; //@line 792 "stropmodule.c"
        var $72=HEAP[$71]; //@line 792 "stropmodule.c"
        var $73=reSign(($72), 8, 0)!=0; //@line 792 "stropmodule.c"
        if ($73) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 792 "stropmodule.c"
      case 23: // $bad
        var $74=HEAP[$s]; //@line 794 "stropmodule.c"
        var $buffer22=$buffer; //@line 794 "stropmodule.c"
        var $75=_PyOS_snprintf($buffer22, 256, ((__str16)&4294967295), $74); //@line 794 "stropmodule.c"
        var $76=HEAP[_PyExc_ValueError]; //@line 796 "stropmodule.c"
        var $buffer23=$buffer; //@line 796 "stropmodule.c"
        _PyErr_SetString($76, $buffer23); //@line 796 "stropmodule.c"
        HEAP[$0]=0; //@line 797 "stropmodule.c"
        __label__ = 27; break; //@line 797 "stropmodule.c"
      case 24: // $bb24
        var $77=___errno_location(); //@line 799 "stropmodule.c"
        var $78=HEAP[$77]; //@line 799 "stropmodule.c"
        var $79=((($78))|0)!=0; //@line 799 "stropmodule.c"
        if ($79) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 799 "stropmodule.c"
      case 25: // $bb25
        var $80=HEAP[$s]; //@line 800 "stropmodule.c"
        var $buffer26=$buffer; //@line 800 "stropmodule.c"
        var $81=_PyOS_snprintf($buffer26, 256, ((__str17)&4294967295), $80); //@line 800 "stropmodule.c"
        var $82=HEAP[_PyExc_ValueError]; //@line 802 "stropmodule.c"
        var $buffer27=$buffer; //@line 802 "stropmodule.c"
        _PyErr_SetString($82, $buffer27); //@line 802 "stropmodule.c"
        HEAP[$0]=0; //@line 803 "stropmodule.c"
        __label__ = 27; break; //@line 803 "stropmodule.c"
      case 26: // $bb28
        var $83=HEAP[$x]; //@line 805 "stropmodule.c"
        var $84=_PyInt_FromLong($83); //@line 805 "stropmodule.c"
        HEAP[$0]=$84; //@line 805 "stropmodule.c"
        __label__ = 27; break; //@line 805 "stropmodule.c"
      case 27: // $bb29
        var $85=HEAP[$0]; //@line 772 "stropmodule.c"
        HEAP[$retval]=$85; //@line 772 "stropmodule.c"
        __label__ = 28; break; //@line 772 "stropmodule.c"
      case 28: // $return
        var $retval30=HEAP[$retval]; //@line 772 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval30; //@line 772 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atol($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 288; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $end=__stackBase__+20;
        var $base=__stackBase__+24;
        var $x=__stackBase__+28;
        var $buffer=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$base]=10; //@line 824 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 828 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 828 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 828 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 828 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 828 "stropmodule.c"
        __label__ = 29; break; //@line 828 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 829 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str18)&4294967295), $s, $base); //@line 829 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 829 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 829 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 830 "stropmodule.c"
        __label__ = 29; break; //@line 830 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$base]; //@line 832 "stropmodule.c"
        var $8=((($7))|0)==0; //@line 832 "stropmodule.c"
        if ($8) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 832 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[$base]; //@line 832 "stropmodule.c"
        var $10=((($9))|0) <= 1; //@line 832 "stropmodule.c"
        if ($10) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 832 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$base]; //@line 832 "stropmodule.c"
        var $12=((($11))|0) > 36; //@line 832 "stropmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 832 "stropmodule.c"
      case 7: // $bb6
        var $13=HEAP[_PyExc_ValueError]; //@line 833 "stropmodule.c"
        _PyErr_SetString($13, ((__str19)&4294967295)); //@line 833 "stropmodule.c"
        HEAP[$0]=0; //@line 834 "stropmodule.c"
        __label__ = 29; break; //@line 834 "stropmodule.c"
      case 8: // $bb7
        __label__ = 10; break; //@line 834 "stropmodule.c"
      case 9: // $bb8
        var $14=HEAP[$s]; //@line 838 "stropmodule.c"
        var $15=(($14+1)&4294967295); //@line 838 "stropmodule.c"
        HEAP[$s]=$15; //@line 838 "stropmodule.c"
        __label__ = 10; break; //@line 838 "stropmodule.c"
      case 10: // $bb9
        var $16=HEAP[$s]; //@line 837 "stropmodule.c"
        var $17=HEAP[$16]; //@line 837 "stropmodule.c"
        var $18=reSign(($17), 8, 0)==0; //@line 837 "stropmodule.c"
        if ($18) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 837 "stropmodule.c"
      case 11: // $bb10
        var $19=___ctype_b_loc(); //@line 837 "stropmodule.c"
        var $20=HEAP[$19]; //@line 837 "stropmodule.c"
        var $21=HEAP[$s]; //@line 837 "stropmodule.c"
        var $22=HEAP[$21]; //@line 837 "stropmodule.c"
        var $23=unSign(($22), 8, 0); //@line 837 "stropmodule.c"
        var $24=(($20+2*$23)&4294967295); //@line 837 "stropmodule.c"
        var $25=HEAP[$24]; //@line 837 "stropmodule.c"
        var $26=unSign(($25), 16, 0); //@line 837 "stropmodule.c"
        var $27=($26) & 8192; //@line 837 "stropmodule.c"
        var $28=((($27))|0)!=0; //@line 837 "stropmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 837 "stropmodule.c"
      case 12: // $bb11
        var $29=HEAP[$s]; //@line 839 "stropmodule.c"
        var $30=(($29)&4294967295); //@line 839 "stropmodule.c"
        var $31=HEAP[$30]; //@line 839 "stropmodule.c"
        var $32=reSign(($31), 8, 0)==0; //@line 839 "stropmodule.c"
        if ($32) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 839 "stropmodule.c"
      case 13: // $bb12
        var $33=HEAP[_PyExc_ValueError]; //@line 840 "stropmodule.c"
        _PyErr_SetString($33, ((__str20)&4294967295)); //@line 840 "stropmodule.c"
        HEAP[$0]=0; //@line 841 "stropmodule.c"
        __label__ = 29; break; //@line 841 "stropmodule.c"
      case 14: // $bb13
        var $34=HEAP[$base]; //@line 843 "stropmodule.c"
        var $35=HEAP[$s]; //@line 843 "stropmodule.c"
        var $36=_PyLong_FromString($35, $end, $34); //@line 843 "stropmodule.c"
        HEAP[$x]=$36; //@line 843 "stropmodule.c"
        var $37=HEAP[$x]; //@line 844 "stropmodule.c"
        var $38=($37)==0; //@line 844 "stropmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 844 "stropmodule.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 845 "stropmodule.c"
        __label__ = 29; break; //@line 845 "stropmodule.c"
      case 16: // $bb15
        var $39=HEAP[$base]; //@line 846 "stropmodule.c"
        var $40=((($39))|0)==0; //@line 846 "stropmodule.c"
        if ($40) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 846 "stropmodule.c"
      case 17: // $bb16
        var $41=HEAP[$end]; //@line 846 "stropmodule.c"
        var $42=HEAP[$41]; //@line 846 "stropmodule.c"
        var $43=reSign(($42), 8, 0)==108; //@line 846 "stropmodule.c"
        if ($43) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 846 "stropmodule.c"
      case 18: // $bb17
        var $44=HEAP[$end]; //@line 846 "stropmodule.c"
        var $45=HEAP[$44]; //@line 846 "stropmodule.c"
        var $46=reSign(($45), 8, 0)==76; //@line 846 "stropmodule.c"
        if ($46) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 846 "stropmodule.c"
      case 19: // $bb18
        var $47=HEAP[$end]; //@line 847 "stropmodule.c"
        var $48=(($47+1)&4294967295); //@line 847 "stropmodule.c"
        HEAP[$end]=$48; //@line 847 "stropmodule.c"
        __label__ = 20; break; //@line 847 "stropmodule.c"
      case 20: // $bb19
        __label__ = 22; break; //@line 847 "stropmodule.c"
      case 21: // $bb20
        var $49=HEAP[$end]; //@line 849 "stropmodule.c"
        var $50=(($49+1)&4294967295); //@line 849 "stropmodule.c"
        HEAP[$end]=$50; //@line 849 "stropmodule.c"
        __label__ = 22; break; //@line 849 "stropmodule.c"
      case 22: // $bb21
        var $51=HEAP[$end]; //@line 848 "stropmodule.c"
        var $52=HEAP[$51]; //@line 848 "stropmodule.c"
        var $53=reSign(($52), 8, 0)==0; //@line 848 "stropmodule.c"
        if ($53) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 848 "stropmodule.c"
      case 23: // $bb22
        var $54=___ctype_b_loc(); //@line 848 "stropmodule.c"
        var $55=HEAP[$54]; //@line 848 "stropmodule.c"
        var $56=HEAP[$end]; //@line 848 "stropmodule.c"
        var $57=HEAP[$56]; //@line 848 "stropmodule.c"
        var $58=unSign(($57), 8, 0); //@line 848 "stropmodule.c"
        var $59=(($55+2*$58)&4294967295); //@line 848 "stropmodule.c"
        var $60=HEAP[$59]; //@line 848 "stropmodule.c"
        var $61=unSign(($60), 16, 0); //@line 848 "stropmodule.c"
        var $62=($61) & 8192; //@line 848 "stropmodule.c"
        var $63=((($62))|0)!=0; //@line 848 "stropmodule.c"
        if ($63) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 848 "stropmodule.c"
      case 24: // $bb23
        var $64=HEAP[$end]; //@line 850 "stropmodule.c"
        var $65=HEAP[$64]; //@line 850 "stropmodule.c"
        var $66=reSign(($65), 8, 0)!=0; //@line 850 "stropmodule.c"
        if ($66) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 850 "stropmodule.c"
      case 25: // $bb24
        var $67=HEAP[$s]; //@line 851 "stropmodule.c"
        var $buffer25=$buffer; //@line 851 "stropmodule.c"
        var $68=_PyOS_snprintf($buffer25, 256, ((__str21)&4294967295), $67); //@line 851 "stropmodule.c"
        var $69=HEAP[_PyExc_ValueError]; //@line 853 "stropmodule.c"
        var $buffer26=$buffer; //@line 853 "stropmodule.c"
        _PyErr_SetString($69, $buffer26); //@line 853 "stropmodule.c"
        var $70=HEAP[$x]; //@line 854 "stropmodule.c"
        var $71=(($70)&4294967295); //@line 854 "stropmodule.c"
        var $72=HEAP[$71]; //@line 854 "stropmodule.c"
        var $73=((($72) - 1)&4294967295); //@line 854 "stropmodule.c"
        var $74=HEAP[$x]; //@line 854 "stropmodule.c"
        var $75=(($74)&4294967295); //@line 854 "stropmodule.c"
        HEAP[$75]=$73; //@line 854 "stropmodule.c"
        var $76=HEAP[$x]; //@line 854 "stropmodule.c"
        var $77=(($76)&4294967295); //@line 854 "stropmodule.c"
        var $78=HEAP[$77]; //@line 854 "stropmodule.c"
        var $79=((($78))|0)==0; //@line 854 "stropmodule.c"
        if ($79) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 854 "stropmodule.c"
      case 26: // $bb27
        var $80=HEAP[$x]; //@line 854 "stropmodule.c"
        var $81=(($80+4)&4294967295); //@line 854 "stropmodule.c"
        var $82=HEAP[$81]; //@line 854 "stropmodule.c"
        var $83=(($82+24)&4294967295); //@line 854 "stropmodule.c"
        var $84=HEAP[$83]; //@line 854 "stropmodule.c"
        var $85=HEAP[$x]; //@line 854 "stropmodule.c"
        FUNCTION_TABLE[$84]($85); //@line 854 "stropmodule.c"
        __label__ = 27; break; //@line 854 "stropmodule.c"
      case 27: // $bb28
        HEAP[$0]=0; //@line 855 "stropmodule.c"
        __label__ = 29; break; //@line 855 "stropmodule.c"
      case 28: // $bb29
        var $86=HEAP[$x]; //@line 857 "stropmodule.c"
        HEAP[$0]=$86; //@line 857 "stropmodule.c"
        __label__ = 29; break; //@line 857 "stropmodule.c"
      case 29: // $bb30
        var $87=HEAP[$0]; //@line 828 "stropmodule.c"
        HEAP[$retval]=$87; //@line 828 "stropmodule.c"
        __label__ = 30; break; //@line 828 "stropmodule.c"
      case 30: // $return
        var $retval31=HEAP[$retval]; //@line 828 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 828 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_atof($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 288; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $end=__stackBase__+20;
        var $x=__stackBase__+24;
        var $buffer=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 873 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 873 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 873 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 873 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 873 "stropmodule.c"
        __label__ = 20; break; //@line 873 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 874 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str22)&4294967295), $s); //@line 874 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 874 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 874 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 875 "stropmodule.c"
        __label__ = 20; break; //@line 875 "stropmodule.c"
      case 4: // $bb3
        __label__ = 6; break; //@line 875 "stropmodule.c"
      case 5: // $bb4
        var $7=HEAP[$s]; //@line 877 "stropmodule.c"
        var $8=(($7+1)&4294967295); //@line 877 "stropmodule.c"
        HEAP[$s]=$8; //@line 877 "stropmodule.c"
        __label__ = 6; break; //@line 877 "stropmodule.c"
      case 6: // $bb5
        var $9=HEAP[$s]; //@line 876 "stropmodule.c"
        var $10=HEAP[$9]; //@line 876 "stropmodule.c"
        var $11=reSign(($10), 8, 0)==0; //@line 876 "stropmodule.c"
        if ($11) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 876 "stropmodule.c"
      case 7: // $bb6
        var $12=___ctype_b_loc(); //@line 876 "stropmodule.c"
        var $13=HEAP[$12]; //@line 876 "stropmodule.c"
        var $14=HEAP[$s]; //@line 876 "stropmodule.c"
        var $15=HEAP[$14]; //@line 876 "stropmodule.c"
        var $16=unSign(($15), 8, 0); //@line 876 "stropmodule.c"
        var $17=(($13+2*$16)&4294967295); //@line 876 "stropmodule.c"
        var $18=HEAP[$17]; //@line 876 "stropmodule.c"
        var $19=unSign(($18), 16, 0); //@line 876 "stropmodule.c"
        var $20=($19) & 8192; //@line 876 "stropmodule.c"
        var $21=((($20))|0)!=0; //@line 876 "stropmodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 876 "stropmodule.c"
      case 8: // $bb7
        var $22=HEAP[$s]; //@line 878 "stropmodule.c"
        var $23=(($22)&4294967295); //@line 878 "stropmodule.c"
        var $24=HEAP[$23]; //@line 878 "stropmodule.c"
        var $25=reSign(($24), 8, 0)==0; //@line 878 "stropmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 878 "stropmodule.c"
      case 9: // $bb8
        var $26=HEAP[_PyExc_ValueError]; //@line 879 "stropmodule.c"
        _PyErr_SetString($26, ((__str23)&4294967295)); //@line 879 "stropmodule.c"
        HEAP[$0]=0; //@line 880 "stropmodule.c"
        __label__ = 20; break; //@line 880 "stropmodule.c"
      case 10: // $bb9
        var $27=HEAP[_PyExc_OverflowError]; //@line 884 "stropmodule.c"
        var $28=HEAP[$s]; //@line 884 "stropmodule.c"
        var $29=_PyOS_string_to_double($28, $end, $27); //@line 884 "stropmodule.c"
        HEAP[$x]=$29; //@line 884 "stropmodule.c"
        var $30=HEAP[$x]; //@line 886 "stropmodule.c"
        var $31=($30) == -1; //@line 886 "stropmodule.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 886 "stropmodule.c"
      case 11: // $bb10
        var $32=_PyErr_Occurred(); //@line 886 "stropmodule.c"
        var $33=($32)!=0; //@line 886 "stropmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 886 "stropmodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 887 "stropmodule.c"
        __label__ = 20; break; //@line 887 "stropmodule.c"
      case 13: // $bb12
        __label__ = 15; break; //@line 887 "stropmodule.c"
      case 14: // $bb13
        var $34=HEAP[$end]; //@line 889 "stropmodule.c"
        var $35=(($34+1)&4294967295); //@line 889 "stropmodule.c"
        HEAP[$end]=$35; //@line 889 "stropmodule.c"
        __label__ = 15; break; //@line 889 "stropmodule.c"
      case 15: // $bb14
        var $36=HEAP[$end]; //@line 888 "stropmodule.c"
        var $37=HEAP[$36]; //@line 888 "stropmodule.c"
        var $38=reSign(($37), 8, 0)==0; //@line 888 "stropmodule.c"
        if ($38) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 888 "stropmodule.c"
      case 16: // $bb15
        var $39=___ctype_b_loc(); //@line 888 "stropmodule.c"
        var $40=HEAP[$39]; //@line 888 "stropmodule.c"
        var $41=HEAP[$end]; //@line 888 "stropmodule.c"
        var $42=HEAP[$41]; //@line 888 "stropmodule.c"
        var $43=unSign(($42), 8, 0); //@line 888 "stropmodule.c"
        var $44=(($40+2*$43)&4294967295); //@line 888 "stropmodule.c"
        var $45=HEAP[$44]; //@line 888 "stropmodule.c"
        var $46=unSign(($45), 16, 0); //@line 888 "stropmodule.c"
        var $47=($46) & 8192; //@line 888 "stropmodule.c"
        var $48=((($47))|0)!=0; //@line 888 "stropmodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 888 "stropmodule.c"
      case 17: // $bb16
        var $49=HEAP[$end]; //@line 890 "stropmodule.c"
        var $50=HEAP[$49]; //@line 890 "stropmodule.c"
        var $51=reSign(($50), 8, 0)!=0; //@line 890 "stropmodule.c"
        if ($51) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 890 "stropmodule.c"
      case 18: // $bb17
        var $52=HEAP[$s]; //@line 891 "stropmodule.c"
        var $buffer18=$buffer; //@line 891 "stropmodule.c"
        var $53=_PyOS_snprintf($buffer18, 256, ((__str24)&4294967295), $52); //@line 891 "stropmodule.c"
        var $54=HEAP[_PyExc_ValueError]; //@line 893 "stropmodule.c"
        var $buffer19=$buffer; //@line 893 "stropmodule.c"
        _PyErr_SetString($54, $buffer19); //@line 893 "stropmodule.c"
        HEAP[$0]=0; //@line 894 "stropmodule.c"
        __label__ = 20; break; //@line 894 "stropmodule.c"
      case 19: // $bb20
        var $55=HEAP[$x]; //@line 896 "stropmodule.c"
        var $56=_PyFloat_FromDouble($55); //@line 896 "stropmodule.c"
        HEAP[$0]=$56; //@line 896 "stropmodule.c"
        __label__ = 20; break; //@line 896 "stropmodule.c"
      case 20: // $bb21
        var $57=HEAP[$0]; //@line 873 "stropmodule.c"
        HEAP[$retval]=$57; //@line 873 "stropmodule.c"
        __label__ = 21; break; //@line 873 "stropmodule.c"
      case 21: // $return
        var $retval22=HEAP[$retval]; //@line 873 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 873 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_maketrans($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $c=__stackBase__+16;
        var $from=__stackBase__+20;
        var $to=__stackBase__+24;
        var $i=__stackBase__+28;
        var $fromlen=__stackBase__+32;
        var $tolen=__stackBase__+36;
        var $result=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$from]=0; //@line 910 "stropmodule.c"
        HEAP[$to]=0; //@line 910 "stropmodule.c"
        HEAP[$fromlen]=0; //@line 911 "stropmodule.c"
        HEAP[$tolen]=0; //@line 911 "stropmodule.c"
        var $1=HEAP[$args_addr]; //@line 914 "stropmodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str25)&4294967295), $from, $fromlen, $to, $tolen); //@line 914 "stropmodule.c"
        var $3=((($2))|0)==0; //@line 914 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 914 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 915 "stropmodule.c"
        __label__ = 13; break; //@line 915 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$fromlen]; //@line 917 "stropmodule.c"
        var $5=HEAP[$tolen]; //@line 917 "stropmodule.c"
        var $6=((($4))|0)!=((($5))|0); //@line 917 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 917 "stropmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_ValueError]; //@line 918 "stropmodule.c"
        _PyErr_SetString($7, ((__str26)&4294967295)); //@line 918 "stropmodule.c"
        HEAP[$0]=0; //@line 920 "stropmodule.c"
        __label__ = 13; break; //@line 920 "stropmodule.c"
      case 4: // $bb3
        var $8=_PyString_FromStringAndSize(0, 256); //@line 923 "stropmodule.c"
        HEAP[$result]=$8; //@line 923 "stropmodule.c"
        var $9=HEAP[$result]; //@line 924 "stropmodule.c"
        var $10=($9)==0; //@line 924 "stropmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 924 "stropmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 925 "stropmodule.c"
        __label__ = 13; break; //@line 925 "stropmodule.c"
      case 6: // $bb5
        var $11=HEAP[$result]; //@line 926 "stropmodule.c"
        var $12=$11; //@line 926 "stropmodule.c"
        var $13=(($12+20)&4294967295); //@line 926 "stropmodule.c"
        var $14=$13; //@line 926 "stropmodule.c"
        HEAP[$c]=$14; //@line 926 "stropmodule.c"
        HEAP[$i]=0; //@line 927 "stropmodule.c"
        __label__ = 8; break; //@line 927 "stropmodule.c"
      case 7: // $bb6
        var $15=HEAP[$i]; //@line 928 "stropmodule.c"
        var $16=((($15)) & 255); //@line 928 "stropmodule.c"
        var $17=HEAP[$c]; //@line 928 "stropmodule.c"
        var $18=HEAP[$i]; //@line 928 "stropmodule.c"
        var $19=(($17+$18)&4294967295); //@line 928 "stropmodule.c"
        HEAP[$19]=$16; //@line 928 "stropmodule.c"
        var $20=HEAP[$i]; //@line 927 "stropmodule.c"
        var $21=((($20) + 1)&4294967295); //@line 927 "stropmodule.c"
        HEAP[$i]=$21; //@line 927 "stropmodule.c"
        __label__ = 8; break; //@line 927 "stropmodule.c"
      case 8: // $bb7
        var $22=HEAP[$i]; //@line 927 "stropmodule.c"
        var $23=((($22))|0) <= 255; //@line 927 "stropmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 927 "stropmodule.c"
      case 9: // $bb8
        HEAP[$i]=0; //@line 929 "stropmodule.c"
        __label__ = 11; break; //@line 929 "stropmodule.c"
      case 10: // $bb9
        var $24=HEAP[$from]; //@line 930 "stropmodule.c"
        var $25=HEAP[$i]; //@line 930 "stropmodule.c"
        var $26=(($24+$25)&4294967295); //@line 930 "stropmodule.c"
        var $27=HEAP[$26]; //@line 930 "stropmodule.c"
        var $28=unSign(($27), 8, 0); //@line 930 "stropmodule.c"
        var $29=HEAP[$to]; //@line 930 "stropmodule.c"
        var $30=HEAP[$i]; //@line 930 "stropmodule.c"
        var $31=(($29+$30)&4294967295); //@line 930 "stropmodule.c"
        var $32=HEAP[$31]; //@line 930 "stropmodule.c"
        var $33=HEAP[$c]; //@line 930 "stropmodule.c"
        var $34=(($33+$28)&4294967295); //@line 930 "stropmodule.c"
        HEAP[$34]=$32; //@line 930 "stropmodule.c"
        var $35=HEAP[$i]; //@line 929 "stropmodule.c"
        var $36=((($35) + 1)&4294967295); //@line 929 "stropmodule.c"
        HEAP[$i]=$36; //@line 929 "stropmodule.c"
        __label__ = 11; break; //@line 929 "stropmodule.c"
      case 11: // $bb10
        var $37=HEAP[$fromlen]; //@line 929 "stropmodule.c"
        var $38=HEAP[$i]; //@line 929 "stropmodule.c"
        var $39=((($38))|0) < ((($37))|0); //@line 929 "stropmodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 929 "stropmodule.c"
      case 12: // $bb11
        var $40=HEAP[$result]; //@line 932 "stropmodule.c"
        HEAP[$0]=$40; //@line 932 "stropmodule.c"
        __label__ = 13; break; //@line 932 "stropmodule.c"
      case 13: // $bb12
        var $41=HEAP[$0]; //@line 915 "stropmodule.c"
        HEAP[$retval]=$41; //@line 915 "stropmodule.c"
        __label__ = 14; break; //@line 915 "stropmodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 915 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 915 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_translate($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1096; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1096);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $input=__stackBase__+16;
        var $table=__stackBase__+20;
        var $output=__stackBase__+24;
        var $i=__stackBase__+28;
        var $c=__stackBase__+32;
        var $changed=__stackBase__+36;
        var $input_obj=__stackBase__+40;
        var $table1=__stackBase__+44;
        var $output_start=__stackBase__+48;
        var $del_table=__stackBase__+52;
        var $inlen=__stackBase__+56;
        var $tablen=__stackBase__+60;
        var $dellen=__stackBase__+64;
        var $result=__stackBase__+68;
        var $trans_table=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$changed]=0; //@line 949 "stropmodule.c"
        HEAP[$del_table]=0; //@line 951 "stropmodule.c"
        HEAP[$dellen]=0; //@line 952 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 956 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 956 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 956 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 956 "stropmodule.c"
        __label__ = 36; break; //@line 956 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 957 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str27)&4294967295), $input_obj, $table1, $tablen, $del_table, $dellen); //@line 957 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 957 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 957 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 959 "stropmodule.c"
        __label__ = 36; break; //@line 959 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$tablen]; //@line 960 "stropmodule.c"
        var $8=((($7))|0)!=256; //@line 960 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 960 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 961 "stropmodule.c"
        _PyErr_SetString($9, ((__str28)&4294967295)); //@line 961 "stropmodule.c"
        HEAP[$0]=0; //@line 963 "stropmodule.c"
        __label__ = 36; break; //@line 963 "stropmodule.c"
      case 6: // $bb5
        var $10=HEAP[$table1]; //@line 966 "stropmodule.c"
        HEAP[$table]=$10; //@line 966 "stropmodule.c"
        var $11=HEAP[$input_obj]; //@line 967 "stropmodule.c"
        var $12=$11; //@line 967 "stropmodule.c"
        var $13=(($12+8)&4294967295); //@line 967 "stropmodule.c"
        var $14=HEAP[$13]; //@line 967 "stropmodule.c"
        HEAP[$inlen]=$14; //@line 967 "stropmodule.c"
        var $15=HEAP[$inlen]; //@line 968 "stropmodule.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 968 "stropmodule.c"
        HEAP[$result]=$16; //@line 968 "stropmodule.c"
        var $17=HEAP[$result]; //@line 969 "stropmodule.c"
        var $18=($17)==0; //@line 969 "stropmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 969 "stropmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 970 "stropmodule.c"
        __label__ = 36; break; //@line 970 "stropmodule.c"
      case 8: // $bb7
        var $19=HEAP[$result]; //@line 971 "stropmodule.c"
        var $20=_PyString_AsString($19); //@line 971 "stropmodule.c"
        HEAP[$output]=$20; //@line 971 "stropmodule.c"
        var $21=HEAP[$output]; //@line 971 "stropmodule.c"
        HEAP[$output_start]=$21; //@line 971 "stropmodule.c"
        var $22=HEAP[$input_obj]; //@line 972 "stropmodule.c"
        var $23=_PyString_AsString($22); //@line 972 "stropmodule.c"
        HEAP[$input]=$23; //@line 972 "stropmodule.c"
        var $24=HEAP[$dellen]; //@line 974 "stropmodule.c"
        var $25=((($24))|0)==0; //@line 974 "stropmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 18; break; } //@line 974 "stropmodule.c"
      case 9: // $bb8
        var $26=HEAP[$inlen]; //@line 976 "stropmodule.c"
        HEAP[$i]=$26; //@line 976 "stropmodule.c"
        __label__ = 12; break; //@line 976 "stropmodule.c"
      case 10: // $bb9
        var $27=HEAP[$input]; //@line 977 "stropmodule.c"
        var $28=HEAP[$27]; //@line 977 "stropmodule.c"
        var $29=unSign(($28), 8, 0); //@line 977 "stropmodule.c"
        HEAP[$c]=$29; //@line 977 "stropmodule.c"
        var $30=HEAP[$input]; //@line 977 "stropmodule.c"
        var $31=(($30+1)&4294967295); //@line 977 "stropmodule.c"
        HEAP[$input]=$31; //@line 977 "stropmodule.c"
        var $32=HEAP[$table]; //@line 978 "stropmodule.c"
        var $33=HEAP[$c]; //@line 978 "stropmodule.c"
        var $34=(($32+$33)&4294967295); //@line 978 "stropmodule.c"
        var $35=HEAP[$34]; //@line 978 "stropmodule.c"
        var $36=HEAP[$output]; //@line 978 "stropmodule.c"
        HEAP[$36]=$35; //@line 978 "stropmodule.c"
        var $37=HEAP[$output]; //@line 978 "stropmodule.c"
        var $38=HEAP[$37]; //@line 978 "stropmodule.c"
        var $39=unSign(($38), 8, 0); //@line 978 "stropmodule.c"
        var $40=HEAP[$c]; //@line 978 "stropmodule.c"
        var $41=((($39))|0)!=((($40))|0); //@line 978 "stropmodule.c"
        var $42=unSign(($41), 1, 0); //@line 978 "stropmodule.c"
        var $43=HEAP[$output]; //@line 978 "stropmodule.c"
        var $44=(($43+1)&4294967295); //@line 978 "stropmodule.c"
        HEAP[$output]=$44; //@line 978 "stropmodule.c"
        var $toBool=reSign(($42), 8, 0)!=0; //@line 978 "stropmodule.c"
        if ($toBool) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 978 "stropmodule.c"
      case 11: // $bb10
        HEAP[$changed]=1; //@line 979 "stropmodule.c"
        __label__ = 12; break; //@line 979 "stropmodule.c"
      case 12: // $bb11
        var $45=HEAP[$i]; //@line 976 "stropmodule.c"
        var $46=((($45) - 1)&4294967295); //@line 976 "stropmodule.c"
        HEAP[$i]=$46; //@line 976 "stropmodule.c"
        var $47=HEAP[$i]; //@line 976 "stropmodule.c"
        var $48=((($47))|0) >= 0; //@line 976 "stropmodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 976 "stropmodule.c"
      case 13: // $bb12
        var $49=HEAP[$changed]; //@line 981 "stropmodule.c"
        var $50=((($49))|0)!=0; //@line 981 "stropmodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 981 "stropmodule.c"
      case 14: // $bb13
        var $51=HEAP[$result]; //@line 982 "stropmodule.c"
        HEAP[$0]=$51; //@line 982 "stropmodule.c"
        __label__ = 36; break; //@line 982 "stropmodule.c"
      case 15: // $bb14
        var $52=HEAP[$result]; //@line 983 "stropmodule.c"
        var $53=(($52)&4294967295); //@line 983 "stropmodule.c"
        var $54=HEAP[$53]; //@line 983 "stropmodule.c"
        var $55=((($54) - 1)&4294967295); //@line 983 "stropmodule.c"
        var $56=(($52)&4294967295); //@line 983 "stropmodule.c"
        HEAP[$56]=$55; //@line 983 "stropmodule.c"
        var $57=(($52)&4294967295); //@line 983 "stropmodule.c"
        var $58=HEAP[$57]; //@line 983 "stropmodule.c"
        var $59=((($58))|0)==0; //@line 983 "stropmodule.c"
        if ($59) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 983 "stropmodule.c"
      case 16: // $bb15
        var $60=HEAP[$result]; //@line 983 "stropmodule.c"
        var $61=(($60+4)&4294967295); //@line 983 "stropmodule.c"
        var $62=HEAP[$61]; //@line 983 "stropmodule.c"
        var $63=(($62+24)&4294967295); //@line 983 "stropmodule.c"
        var $64=HEAP[$63]; //@line 983 "stropmodule.c"
        var $65=HEAP[$result]; //@line 983 "stropmodule.c"
        FUNCTION_TABLE[$64]($65); //@line 983 "stropmodule.c"
        __label__ = 17; break; //@line 983 "stropmodule.c"
      case 17: // $bb16
        var $66=HEAP[$input_obj]; //@line 984 "stropmodule.c"
        var $67=(($66)&4294967295); //@line 984 "stropmodule.c"
        var $68=HEAP[$67]; //@line 984 "stropmodule.c"
        var $69=((($68) + 1)&4294967295); //@line 984 "stropmodule.c"
        var $70=(($66)&4294967295); //@line 984 "stropmodule.c"
        HEAP[$70]=$69; //@line 984 "stropmodule.c"
        var $71=HEAP[$input_obj]; //@line 985 "stropmodule.c"
        HEAP[$0]=$71; //@line 985 "stropmodule.c"
        __label__ = 36; break; //@line 985 "stropmodule.c"
      case 18: // $bb17
        HEAP[$i]=0; //@line 988 "stropmodule.c"
        __label__ = 20; break; //@line 988 "stropmodule.c"
      case 19: // $bb18
        var $72=HEAP[$i]; //@line 989 "stropmodule.c"
        var $73=HEAP[$table]; //@line 989 "stropmodule.c"
        var $74=HEAP[$i]; //@line 989 "stropmodule.c"
        var $75=(($73+$74)&4294967295); //@line 989 "stropmodule.c"
        var $76=HEAP[$75]; //@line 989 "stropmodule.c"
        var $77=unSign(($76), 8, 0); //@line 989 "stropmodule.c"
        var $78=(($trans_table+$72*4)&4294967295); //@line 989 "stropmodule.c"
        HEAP[$78]=$77; //@line 989 "stropmodule.c"
        var $79=HEAP[$i]; //@line 988 "stropmodule.c"
        var $80=((($79) + 1)&4294967295); //@line 988 "stropmodule.c"
        HEAP[$i]=$80; //@line 988 "stropmodule.c"
        __label__ = 20; break; //@line 988 "stropmodule.c"
      case 20: // $bb19
        var $81=HEAP[$i]; //@line 988 "stropmodule.c"
        var $82=((($81))|0) <= 255; //@line 988 "stropmodule.c"
        if ($82) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 988 "stropmodule.c"
      case 21: // $bb20
        HEAP[$i]=0; //@line 991 "stropmodule.c"
        __label__ = 23; break; //@line 991 "stropmodule.c"
      case 22: // $bb21
        var $83=HEAP[$del_table]; //@line 992 "stropmodule.c"
        var $84=HEAP[$i]; //@line 992 "stropmodule.c"
        var $85=(($83+$84)&4294967295); //@line 992 "stropmodule.c"
        var $86=HEAP[$85]; //@line 992 "stropmodule.c"
        var $87=unSign(($86), 8, 0); //@line 992 "stropmodule.c"
        var $88=(($trans_table+$87*4)&4294967295); //@line 992 "stropmodule.c"
        HEAP[$88]=-1; //@line 992 "stropmodule.c"
        var $89=HEAP[$i]; //@line 991 "stropmodule.c"
        var $90=((($89) + 1)&4294967295); //@line 991 "stropmodule.c"
        HEAP[$i]=$90; //@line 991 "stropmodule.c"
        __label__ = 23; break; //@line 991 "stropmodule.c"
      case 23: // $bb22
        var $91=HEAP[$dellen]; //@line 991 "stropmodule.c"
        var $92=HEAP[$i]; //@line 991 "stropmodule.c"
        var $93=((($92))|0) < ((($91))|0); //@line 991 "stropmodule.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 991 "stropmodule.c"
      case 24: // $bb23
        var $94=HEAP[$inlen]; //@line 994 "stropmodule.c"
        HEAP[$i]=$94; //@line 994 "stropmodule.c"
        __label__ = 28; break; //@line 994 "stropmodule.c"
      case 25: // $bb24
        var $95=HEAP[$input]; //@line 995 "stropmodule.c"
        var $96=HEAP[$95]; //@line 995 "stropmodule.c"
        var $97=unSign(($96), 8, 0); //@line 995 "stropmodule.c"
        HEAP[$c]=$97; //@line 995 "stropmodule.c"
        var $98=HEAP[$input]; //@line 995 "stropmodule.c"
        var $99=(($98+1)&4294967295); //@line 995 "stropmodule.c"
        HEAP[$input]=$99; //@line 995 "stropmodule.c"
        var $100=HEAP[$c]; //@line 996 "stropmodule.c"
        var $101=(($trans_table+$100*4)&4294967295); //@line 996 "stropmodule.c"
        var $102=HEAP[$101]; //@line 996 "stropmodule.c"
        var $103=((($102))|0)!=-1; //@line 996 "stropmodule.c"
        if ($103) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 996 "stropmodule.c"
      case 26: // $bb25
        var $104=HEAP[$c]; //@line 997 "stropmodule.c"
        var $105=(($trans_table+$104*4)&4294967295); //@line 997 "stropmodule.c"
        var $106=HEAP[$105]; //@line 997 "stropmodule.c"
        var $107=((($106)) & 255); //@line 997 "stropmodule.c"
        var $108=HEAP[$output]; //@line 997 "stropmodule.c"
        HEAP[$108]=$107; //@line 997 "stropmodule.c"
        var $109=HEAP[$output]; //@line 997 "stropmodule.c"
        var $110=HEAP[$109]; //@line 997 "stropmodule.c"
        var $111=unSign(($110), 8, 0); //@line 997 "stropmodule.c"
        var $112=HEAP[$c]; //@line 997 "stropmodule.c"
        var $113=((($111))|0)==((($112))|0); //@line 997 "stropmodule.c"
        var $114=unSign(($113), 1, 0); //@line 997 "stropmodule.c"
        var $115=HEAP[$output]; //@line 997 "stropmodule.c"
        var $116=(($115+1)&4294967295); //@line 997 "stropmodule.c"
        HEAP[$output]=$116; //@line 997 "stropmodule.c"
        var $toBool26=reSign(($114), 8, 0)!=0; //@line 997 "stropmodule.c"
        if ($toBool26) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 997 "stropmodule.c"
      case 27: // $bb27
        HEAP[$changed]=1; //@line 999 "stropmodule.c"
        __label__ = 28; break; //@line 999 "stropmodule.c"
      case 28: // $bb28
        var $117=HEAP[$i]; //@line 994 "stropmodule.c"
        var $118=((($117) - 1)&4294967295); //@line 994 "stropmodule.c"
        HEAP[$i]=$118; //@line 994 "stropmodule.c"
        var $119=HEAP[$i]; //@line 994 "stropmodule.c"
        var $120=((($119))|0) >= 0; //@line 994 "stropmodule.c"
        if ($120) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 994 "stropmodule.c"
      case 29: // $bb29
        var $121=HEAP[$changed]; //@line 1001 "stropmodule.c"
        var $122=((($121))|0)==0; //@line 1001 "stropmodule.c"
        if ($122) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 1001 "stropmodule.c"
      case 30: // $bb30
        var $123=HEAP[$result]; //@line 1002 "stropmodule.c"
        var $124=(($123)&4294967295); //@line 1002 "stropmodule.c"
        var $125=HEAP[$124]; //@line 1002 "stropmodule.c"
        var $126=((($125) - 1)&4294967295); //@line 1002 "stropmodule.c"
        var $127=(($123)&4294967295); //@line 1002 "stropmodule.c"
        HEAP[$127]=$126; //@line 1002 "stropmodule.c"
        var $128=(($123)&4294967295); //@line 1002 "stropmodule.c"
        var $129=HEAP[$128]; //@line 1002 "stropmodule.c"
        var $130=((($129))|0)==0; //@line 1002 "stropmodule.c"
        if ($130) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1002 "stropmodule.c"
      case 31: // $bb31
        var $131=HEAP[$result]; //@line 1002 "stropmodule.c"
        var $132=(($131+4)&4294967295); //@line 1002 "stropmodule.c"
        var $133=HEAP[$132]; //@line 1002 "stropmodule.c"
        var $134=(($133+24)&4294967295); //@line 1002 "stropmodule.c"
        var $135=HEAP[$134]; //@line 1002 "stropmodule.c"
        var $136=HEAP[$result]; //@line 1002 "stropmodule.c"
        FUNCTION_TABLE[$135]($136); //@line 1002 "stropmodule.c"
        __label__ = 32; break; //@line 1002 "stropmodule.c"
      case 32: // $bb32
        var $137=HEAP[$input_obj]; //@line 1003 "stropmodule.c"
        var $138=(($137)&4294967295); //@line 1003 "stropmodule.c"
        var $139=HEAP[$138]; //@line 1003 "stropmodule.c"
        var $140=((($139) + 1)&4294967295); //@line 1003 "stropmodule.c"
        var $141=(($137)&4294967295); //@line 1003 "stropmodule.c"
        HEAP[$141]=$140; //@line 1003 "stropmodule.c"
        var $142=HEAP[$input_obj]; //@line 1004 "stropmodule.c"
        HEAP[$0]=$142; //@line 1004 "stropmodule.c"
        __label__ = 36; break; //@line 1004 "stropmodule.c"
      case 33: // $bb33
        var $143=HEAP[$inlen]; //@line 1007 "stropmodule.c"
        var $144=((($143))|0) > 0; //@line 1007 "stropmodule.c"
        if ($144) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1007 "stropmodule.c"
      case 34: // $bb34
        var $145=HEAP[$output]; //@line 1008 "stropmodule.c"
        var $146=($145); //@line 1008 "stropmodule.c"
        var $147=HEAP[$output_start]; //@line 1008 "stropmodule.c"
        var $148=($147); //@line 1008 "stropmodule.c"
        var $149=((($146) - ($148))&4294967295); //@line 1008 "stropmodule.c"
        var $150=__PyString_Resize($result, $149); //@line 1008 "stropmodule.c"
        __label__ = 35; break; //@line 1008 "stropmodule.c"
      case 35: // $bb35
        var $151=HEAP[$result]; //@line 1009 "stropmodule.c"
        HEAP[$0]=$151; //@line 1009 "stropmodule.c"
        __label__ = 36; break; //@line 1009 "stropmodule.c"
      case 36: // $bb36
        var $152=HEAP[$0]; //@line 956 "stropmodule.c"
        HEAP[$retval]=$152; //@line 956 "stropmodule.c"
        __label__ = 37; break; //@line 956 "stropmodule.c"
      case 37: // $return
        var $retval37=HEAP[$retval]; //@line 956 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 956 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemfind($mem, $len, $pat, $pat_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mem_addr=__stackBase__;
        var $len_addr=__stackBase__+4;
        var $pat_addr=__stackBase__+8;
        var $pat_len_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $ii=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$mem_addr]=$mem;
        HEAP[$len_addr]=$len;
        HEAP[$pat_addr]=$pat;
        HEAP[$pat_len_addr]=$pat_len;
        var $1=HEAP[$len_addr]; //@line 1031 "stropmodule.c"
        var $2=HEAP[$pat_len_addr]; //@line 1031 "stropmodule.c"
        var $3=((($1) - ($2))&4294967295); //@line 1031 "stropmodule.c"
        HEAP[$len_addr]=$3; //@line 1031 "stropmodule.c"
        HEAP[$ii]=0; //@line 1033 "stropmodule.c"
        __label__ = 6; break; //@line 1033 "stropmodule.c"
      case 1: // $bb
        var $4=HEAP[$mem_addr]; //@line 1034 "stropmodule.c"
        var $5=HEAP[$ii]; //@line 1034 "stropmodule.c"
        var $6=(($4+$5)&4294967295); //@line 1034 "stropmodule.c"
        var $7=HEAP[$6]; //@line 1034 "stropmodule.c"
        var $8=HEAP[$pat_addr]; //@line 1034 "stropmodule.c"
        var $9=(($8)&4294967295); //@line 1034 "stropmodule.c"
        var $10=HEAP[$9]; //@line 1034 "stropmodule.c"
        var $11=reSign(($7), 8, 0)==reSign(($10), 8, 0); //@line 1034 "stropmodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1034 "stropmodule.c"
      case 2: // $bb1
        var $12=HEAP[$pat_len_addr]; //@line 1034 "stropmodule.c"
        var $13=((($12))|0)==1; //@line 1034 "stropmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1034 "stropmodule.c"
      case 3: // $bb2
        var $14=HEAP[$pat_len_addr]; //@line 1034 "stropmodule.c"
        var $15=((($14) - 1)&4294967295); //@line 1034 "stropmodule.c"
        var $16=HEAP[$pat_addr]; //@line 1034 "stropmodule.c"
        var $17=(($16+1)&4294967295); //@line 1034 "stropmodule.c"
        var $18=HEAP[$ii]; //@line 1034 "stropmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 1034 "stropmodule.c"
        var $20=HEAP[$mem_addr]; //@line 1034 "stropmodule.c"
        var $21=(($20+$19)&4294967295); //@line 1034 "stropmodule.c"
        var $22=_memcmp($21, $17, $15); //@line 1034 "stropmodule.c"
        var $23=((($22))|0)==0; //@line 1034 "stropmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1034 "stropmodule.c"
      case 4: // $bb3
        var $24=HEAP[$ii]; //@line 1037 "stropmodule.c"
        HEAP[$0]=$24; //@line 1037 "stropmodule.c"
        __label__ = 8; break; //@line 1037 "stropmodule.c"
      case 5: // $bb4
        var $25=HEAP[$ii]; //@line 1033 "stropmodule.c"
        var $26=((($25) + 1)&4294967295); //@line 1033 "stropmodule.c"
        HEAP[$ii]=$26; //@line 1033 "stropmodule.c"
        __label__ = 6; break; //@line 1033 "stropmodule.c"
      case 6: // $bb5
        var $27=HEAP[$ii]; //@line 1033 "stropmodule.c"
        var $28=HEAP[$len_addr]; //@line 1033 "stropmodule.c"
        var $29=((($27))|0) <= ((($28))|0); //@line 1033 "stropmodule.c"
        if ($29) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 1033 "stropmodule.c"
      case 7: // $bb6
        HEAP[$0]=-1; //@line 1040 "stropmodule.c"
        __label__ = 8; break; //@line 1040 "stropmodule.c"
      case 8: // $bb7
        var $30=HEAP[$0]; //@line 1037 "stropmodule.c"
        HEAP[$retval]=$30; //@line 1037 "stropmodule.c"
        __label__ = 9; break; //@line 1037 "stropmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1037 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1037 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemcnt($mem, $len, $pat, $pat_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mem_addr=__stackBase__;
        var $len_addr=__stackBase__+4;
        var $pat_addr=__stackBase__+8;
        var $pat_len_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $offset=__stackBase__+24;
        var $nfound=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$mem_addr]=$mem;
        HEAP[$len_addr]=$len;
        HEAP[$pat_addr]=$pat;
        HEAP[$pat_len_addr]=$pat_len;
        HEAP[$offset]=0; //@line 1053 "stropmodule.c"
        HEAP[$nfound]=0; //@line 1054 "stropmodule.c"
        __label__ = 3; break; //@line 1054 "stropmodule.c"
      case 1: // $bb
        var $1=HEAP[$mem_addr]; //@line 1057 "stropmodule.c"
        var $2=HEAP[$len_addr]; //@line 1057 "stropmodule.c"
        var $3=HEAP[$pat_addr]; //@line 1057 "stropmodule.c"
        var $4=HEAP[$pat_len_addr]; //@line 1057 "stropmodule.c"
        var $5=_mymemfind($1, $2, $3, $4); //@line 1057 "stropmodule.c"
        HEAP[$offset]=$5; //@line 1057 "stropmodule.c"
        var $6=HEAP[$offset]; //@line 1058 "stropmodule.c"
        var $7=((($6))|0)==-1; //@line 1058 "stropmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1058 "stropmodule.c"
      case 2: // $bb1
        var $8=HEAP[$offset]; //@line 1060 "stropmodule.c"
        var $9=HEAP[$pat_len_addr]; //@line 1060 "stropmodule.c"
        var $10=((($8) + ($9))&4294967295); //@line 1060 "stropmodule.c"
        var $11=HEAP[$mem_addr]; //@line 1060 "stropmodule.c"
        var $12=(($11+$10)&4294967295); //@line 1060 "stropmodule.c"
        HEAP[$mem_addr]=$12; //@line 1060 "stropmodule.c"
        var $13=HEAP[$offset]; //@line 1061 "stropmodule.c"
        var $14=HEAP[$pat_len_addr]; //@line 1061 "stropmodule.c"
        var $15=((($13) + ($14))&4294967295); //@line 1061 "stropmodule.c"
        var $16=HEAP[$len_addr]; //@line 1061 "stropmodule.c"
        var $17=((($16) - ($15))&4294967295); //@line 1061 "stropmodule.c"
        HEAP[$len_addr]=$17; //@line 1061 "stropmodule.c"
        var $18=HEAP[$nfound]; //@line 1062 "stropmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 1062 "stropmodule.c"
        HEAP[$nfound]=$19; //@line 1062 "stropmodule.c"
        __label__ = 3; break; //@line 1062 "stropmodule.c"
      case 3: // $bb2
        var $20=HEAP[$len_addr]; //@line 1056 "stropmodule.c"
        var $21=((($20))|0) >= 0; //@line 1056 "stropmodule.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1056 "stropmodule.c"
      case 4: // $bb3
        var $22=HEAP[$nfound]; //@line 1064 "stropmodule.c"
        HEAP[$0]=$22; //@line 1064 "stropmodule.c"
        var $23=HEAP[$0]; //@line 1064 "stropmodule.c"
        HEAP[$retval]=$23; //@line 1064 "stropmodule.c"
        __label__ = 5; break; //@line 1064 "stropmodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1064 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1064 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _mymemreplace($str, $len, $pat, $pat_len, $sub, $sub_len, $count, $out_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $str_addr=__stackBase__;
        var $len_addr=__stackBase__+4;
        var $pat_addr=__stackBase__+8;
        var $pat_len_addr=__stackBase__+12;
        var $sub_addr=__stackBase__+16;
        var $sub_len_addr=__stackBase__+20;
        var $count_addr=__stackBase__+24;
        var $out_len_addr=__stackBase__+28;
        var $retval=__stackBase__+32;
        var $iftmp_287=__stackBase__+36;
        var $iftmp_286=__stackBase__+40;
        var $0=__stackBase__+44;
        var $out_s=__stackBase__+48;
        var $new_s=__stackBase__+52;
        var $nfound=__stackBase__+56;
        var $offset=__stackBase__+60;
        var $new_len=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$str_addr]=$str;
        HEAP[$len_addr]=$len;
        HEAP[$pat_addr]=$pat;
        HEAP[$pat_len_addr]=$pat_len;
        HEAP[$sub_addr]=$sub;
        HEAP[$sub_len_addr]=$sub_len;
        HEAP[$count_addr]=$count;
        HEAP[$out_len_addr]=$out_len;
        var $1=HEAP[$len_addr]; //@line 1097 "stropmodule.c"
        var $2=((($1))|0)==0; //@line 1097 "stropmodule.c"
        if ($2) { __label__ = 29; break; } else { __label__ = 1; break; } //@line 1097 "stropmodule.c"
      case 1: // $bb
        var $3=HEAP[$pat_len_addr]; //@line 1097 "stropmodule.c"
        var $4=HEAP[$len_addr]; //@line 1097 "stropmodule.c"
        var $5=((($3))|0) > ((($4))|0); //@line 1097 "stropmodule.c"
        if ($5) { __label__ = 29; break; } else { __label__ = 2; break; } //@line 1097 "stropmodule.c"
      case 2: // $bb1
        var $6=HEAP[$str_addr]; //@line 1101 "stropmodule.c"
        var $7=HEAP[$len_addr]; //@line 1101 "stropmodule.c"
        var $8=HEAP[$pat_addr]; //@line 1101 "stropmodule.c"
        var $9=HEAP[$pat_len_addr]; //@line 1101 "stropmodule.c"
        var $10=_mymemcnt($6, $7, $8, $9); //@line 1101 "stropmodule.c"
        HEAP[$nfound]=$10; //@line 1101 "stropmodule.c"
        var $11=HEAP[$count_addr]; //@line 1102 "stropmodule.c"
        var $12=((($11))|0) < 0; //@line 1102 "stropmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1102 "stropmodule.c"
      case 3: // $bb2
        HEAP[$count_addr]=2147483647; //@line 1103 "stropmodule.c"
        __label__ = 6; break; //@line 1103 "stropmodule.c"
      case 4: // $bb3
        var $13=HEAP[$nfound]; //@line 1104 "stropmodule.c"
        var $14=HEAP[$count_addr]; //@line 1104 "stropmodule.c"
        var $15=((($13))|0) > ((($14))|0); //@line 1104 "stropmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1104 "stropmodule.c"
      case 5: // $bb4
        var $16=HEAP[$count_addr]; //@line 1105 "stropmodule.c"
        HEAP[$nfound]=$16; //@line 1105 "stropmodule.c"
        __label__ = 6; break; //@line 1105 "stropmodule.c"
      case 6: // $bb5
        var $17=HEAP[$nfound]; //@line 1106 "stropmodule.c"
        var $18=((($17))|0)==0; //@line 1106 "stropmodule.c"
        if ($18) { __label__ = 29; break; } else { __label__ = 7; break; } //@line 1106 "stropmodule.c"
      case 7: // $bb6
        var $19=HEAP[$sub_len_addr]; //@line 1109 "stropmodule.c"
        var $20=HEAP[$pat_len_addr]; //@line 1109 "stropmodule.c"
        var $21=((($19) - ($20))&4294967295); //@line 1109 "stropmodule.c"
        var $22=HEAP[$nfound]; //@line 1109 "stropmodule.c"
        var $23=((($21) * ($22))&4294967295); //@line 1109 "stropmodule.c"
        var $24=HEAP[$len_addr]; //@line 1109 "stropmodule.c"
        var $25=((($23) + ($24))&4294967295); //@line 1109 "stropmodule.c"
        HEAP[$new_len]=$25; //@line 1109 "stropmodule.c"
        var $26=HEAP[$new_len]; //@line 1110 "stropmodule.c"
        var $27=((($26))|0)==0; //@line 1110 "stropmodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1110 "stropmodule.c"
      case 8: // $bb7
        var $28=_malloc(1); //@line 1112 "stropmodule.c"
        HEAP[$out_s]=$28; //@line 1112 "stropmodule.c"
        var $29=HEAP[$out_s]; //@line 1113 "stropmodule.c"
        var $30=($29)==0; //@line 1113 "stropmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1113 "stropmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1114 "stropmodule.c"
        __label__ = 30; break; //@line 1114 "stropmodule.c"
      case 10: // $bb9
        var $31=HEAP[$out_s]; //@line 1115 "stropmodule.c"
        var $32=(($31)&4294967295); //@line 1115 "stropmodule.c"
        HEAP[$32]=0; //@line 1115 "stropmodule.c"
        __label__ = 28; break; //@line 1115 "stropmodule.c"
      case 11: // $bb10
        var $33=HEAP[$new_len]; //@line 1118 "stropmodule.c"
        var $34=((($33))|0) <= 0; //@line 1118 "stropmodule.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1118 "stropmodule.c"
      case 12: // $bb11
        ___assert_fail(((__str29)&4294967295), ((__str30)&4294967295), 1118, ((___PRETTY_FUNCTION___9892)&4294967295)); //@line 1118 "stropmodule.c"
        throw "Reached an unreachable! Original .ll line: 4651"; //@line 1118 "stropmodule.c"
      case 13: // $bb12
        var $35=HEAP[$new_len]; //@line 1119 "stropmodule.c"
        var $36=((($35))|0) >= 0; //@line 1119 "stropmodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 1119 "stropmodule.c"
      case 14: // $bb13
        var $37=HEAP[$new_len]; //@line 1119 "stropmodule.c"
        var $38=((($37))|0)!=0; //@line 1119 "stropmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1119 "stropmodule.c"
      case 15: // $bb14
        var $39=HEAP[$new_len]; //@line 1119 "stropmodule.c"
        HEAP[$iftmp_287]=$39; //@line 1119 "stropmodule.c"
        __label__ = 17; break; //@line 1119 "stropmodule.c"
      case 16: // $bb15
        HEAP[$iftmp_287]=1; //@line 1119 "stropmodule.c"
        __label__ = 17; break; //@line 1119 "stropmodule.c"
      case 17: // $bb16
        var $40=HEAP[$iftmp_287]; //@line 1119 "stropmodule.c"
        var $41=_malloc($40); //@line 1119 "stropmodule.c"
        HEAP[$iftmp_286]=$41; //@line 1119 "stropmodule.c"
        __label__ = 19; break; //@line 1119 "stropmodule.c"
      case 18: // $bb17
        HEAP[$iftmp_286]=0; //@line 1119 "stropmodule.c"
        __label__ = 19; break; //@line 1119 "stropmodule.c"
      case 19: // $bb18
        var $42=HEAP[$iftmp_286]; //@line 1119 "stropmodule.c"
        HEAP[$new_s]=$42; //@line 1119 "stropmodule.c"
        var $43=HEAP[$new_s]; //@line 1120 "stropmodule.c"
        var $44=($43)==0; //@line 1120 "stropmodule.c"
        if ($44) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1120 "stropmodule.c"
      case 20: // $bb19
        HEAP[$0]=0; //@line 1121 "stropmodule.c"
        __label__ = 30; break; //@line 1121 "stropmodule.c"
      case 21: // $bb20
        var $45=HEAP[$new_s]; //@line 1122 "stropmodule.c"
        HEAP[$out_s]=$45; //@line 1122 "stropmodule.c"
        __label__ = 24; break; //@line 1122 "stropmodule.c"
      case 22: // $bb21
        var $46=HEAP[$str_addr]; //@line 1126 "stropmodule.c"
        var $47=HEAP[$len_addr]; //@line 1126 "stropmodule.c"
        var $48=HEAP[$pat_addr]; //@line 1126 "stropmodule.c"
        var $49=HEAP[$pat_len_addr]; //@line 1126 "stropmodule.c"
        var $50=_mymemfind($46, $47, $48, $49); //@line 1126 "stropmodule.c"
        HEAP[$offset]=$50; //@line 1126 "stropmodule.c"
        var $51=HEAP[$offset]; //@line 1127 "stropmodule.c"
        var $52=((($51))|0)==-1; //@line 1127 "stropmodule.c"
        if ($52) { __label__ = 26; break; } else { __label__ = 23; break; } //@line 1127 "stropmodule.c"
      case 23: // $bb22
        var $53=HEAP[$offset]; //@line 1131 "stropmodule.c"
        var $54=HEAP[$new_s]; //@line 1131 "stropmodule.c"
        var $55=HEAP[$str_addr]; //@line 1131 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($54, $55, $53, 1, 0); //@line 1131 "stropmodule.c"
        var $56=HEAP[$offset]; //@line 1132 "stropmodule.c"
        var $57=HEAP[$pat_len_addr]; //@line 1132 "stropmodule.c"
        var $58=((($56) + ($57))&4294967295); //@line 1132 "stropmodule.c"
        var $59=HEAP[$str_addr]; //@line 1132 "stropmodule.c"
        var $60=(($59+$58)&4294967295); //@line 1132 "stropmodule.c"
        HEAP[$str_addr]=$60; //@line 1132 "stropmodule.c"
        var $61=HEAP[$offset]; //@line 1133 "stropmodule.c"
        var $62=HEAP[$pat_len_addr]; //@line 1133 "stropmodule.c"
        var $63=((($61) + ($62))&4294967295); //@line 1133 "stropmodule.c"
        var $64=HEAP[$len_addr]; //@line 1133 "stropmodule.c"
        var $65=((($64) - ($63))&4294967295); //@line 1133 "stropmodule.c"
        HEAP[$len_addr]=$65; //@line 1133 "stropmodule.c"
        var $66=HEAP[$new_s]; //@line 1136 "stropmodule.c"
        var $67=HEAP[$offset]; //@line 1136 "stropmodule.c"
        var $68=(($66+$67)&4294967295); //@line 1136 "stropmodule.c"
        HEAP[$new_s]=$68; //@line 1136 "stropmodule.c"
        var $69=HEAP[$sub_len_addr]; //@line 1137 "stropmodule.c"
        var $70=HEAP[$new_s]; //@line 1137 "stropmodule.c"
        var $71=HEAP[$sub_addr]; //@line 1137 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($70, $71, $69, 1, 0); //@line 1137 "stropmodule.c"
        var $72=HEAP[$new_s]; //@line 1138 "stropmodule.c"
        var $73=HEAP[$sub_len_addr]; //@line 1138 "stropmodule.c"
        var $74=(($72+$73)&4294967295); //@line 1138 "stropmodule.c"
        HEAP[$new_s]=$74; //@line 1138 "stropmodule.c"
        var $75=HEAP[$count_addr]; //@line 1124 "stropmodule.c"
        var $76=((($75) - 1)&4294967295); //@line 1124 "stropmodule.c"
        HEAP[$count_addr]=$76; //@line 1124 "stropmodule.c"
        __label__ = 24; break; //@line 1124 "stropmodule.c"
      case 24: // $bb23
        var $77=HEAP[$count_addr]; //@line 1124 "stropmodule.c"
        var $78=((($77))|0) <= 0; //@line 1124 "stropmodule.c"
        if ($78) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1124 "stropmodule.c"
      case 25: // $bb24
        var $79=HEAP[$len_addr]; //@line 1124 "stropmodule.c"
        var $80=((($79))|0) > 0; //@line 1124 "stropmodule.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 1124 "stropmodule.c"
      case 26: // $bb25
        var $81=HEAP[$len_addr]; //@line 1141 "stropmodule.c"
        var $82=((($81))|0) > 0; //@line 1141 "stropmodule.c"
        if ($82) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1141 "stropmodule.c"
      case 27: // $bb26
        var $83=HEAP[$len_addr]; //@line 1142 "stropmodule.c"
        var $84=HEAP[$new_s]; //@line 1142 "stropmodule.c"
        var $85=HEAP[$str_addr]; //@line 1142 "stropmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($84, $85, $83, 1, 0); //@line 1142 "stropmodule.c"
        __label__ = 28; break; //@line 1142 "stropmodule.c"
      case 28: // $bb27
        var $86=HEAP[$out_len_addr]; //@line 1144 "stropmodule.c"
        var $87=HEAP[$new_len]; //@line 1144 "stropmodule.c"
        HEAP[$86]=$87; //@line 1144 "stropmodule.c"
        var $88=HEAP[$out_s]; //@line 1145 "stropmodule.c"
        HEAP[$0]=$88; //@line 1145 "stropmodule.c"
        __label__ = 30; break; //@line 1145 "stropmodule.c"
      case 29: // $return_same
        var $89=HEAP[$out_len_addr]; //@line 1148 "stropmodule.c"
        HEAP[$89]=-1; //@line 1148 "stropmodule.c"
        var $90=HEAP[$str_addr]; //@line 1149 "stropmodule.c"
        HEAP[$0]=$90; //@line 1149 "stropmodule.c"
        __label__ = 30; break; //@line 1149 "stropmodule.c"
      case 30: // $bb28
        var $91=HEAP[$0]; //@line 1114 "stropmodule.c"
        HEAP[$retval]=$91; //@line 1114 "stropmodule.c"
        __label__ = 31; break; //@line 1114 "stropmodule.c"
      case 31: // $return
        var $retval29=HEAP[$retval]; //@line 1114 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 1114 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _strop_replace($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $str=__stackBase__+16;
        var $pat=__stackBase__+20;
        var $sub=__stackBase__+24;
        var $new_s=__stackBase__+28;
        var $len=__stackBase__+32;
        var $pat_len=__stackBase__+36;
        var $sub_len=__stackBase__+40;
        var $out_len=__stackBase__+44;
        var $count=__stackBase__+48;
        var $newstr=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$count]=-1; //@line 1165 "stropmodule.c"
        var $1=HEAP[_PyExc_DeprecationWarning]; //@line 1168 "stropmodule.c"
        var $2=_PyErr_WarnEx($1, ((__str)&4294967295), 1); //@line 1168 "stropmodule.c"
        var $3=((($2))|0)!=0; //@line 1168 "stropmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1168 "stropmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1168 "stropmodule.c"
        __label__ = 16; break; //@line 1168 "stropmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1169 "stropmodule.c"
        var $5=__PyArg_ParseTuple_SizeT($4, ((__str31)&4294967295), $str, $len, $pat, $pat_len, $sub, $sub_len, $count); //@line 1169 "stropmodule.c"
        var $6=((($5))|0)==0; //@line 1169 "stropmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1169 "stropmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1172 "stropmodule.c"
        __label__ = 16; break; //@line 1172 "stropmodule.c"
      case 4: // $bb3
        var $7=HEAP[$pat_len]; //@line 1173 "stropmodule.c"
        var $8=((($7))|0) <= 0; //@line 1173 "stropmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1173 "stropmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 1174 "stropmodule.c"
        _PyErr_SetString($9, ((__str32)&4294967295)); //@line 1174 "stropmodule.c"
        HEAP[$0]=0; //@line 1175 "stropmodule.c"
        __label__ = 16; break; //@line 1175 "stropmodule.c"
      case 6: // $bb5
        var $10=HEAP[$count]; //@line 1181 "stropmodule.c"
        var $11=((($10))|0)==0; //@line 1181 "stropmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1181 "stropmodule.c"
      case 7: // $bb6
        HEAP[$count]=-1; //@line 1182 "stropmodule.c"
        __label__ = 8; break; //@line 1182 "stropmodule.c"
      case 8: // $bb7
        var $12=HEAP[$count]; //@line 1183 "stropmodule.c"
        var $13=HEAP[$sub_len]; //@line 1183 "stropmodule.c"
        var $14=HEAP[$sub]; //@line 1183 "stropmodule.c"
        var $15=HEAP[$pat_len]; //@line 1183 "stropmodule.c"
        var $16=HEAP[$pat]; //@line 1183 "stropmodule.c"
        var $17=HEAP[$len]; //@line 1183 "stropmodule.c"
        var $18=HEAP[$str]; //@line 1183 "stropmodule.c"
        var $19=_mymemreplace($18, $17, $16, $15, $14, $13, $12, $out_len); //@line 1183 "stropmodule.c"
        HEAP[$new_s]=$19; //@line 1183 "stropmodule.c"
        var $20=HEAP[$new_s]; //@line 1184 "stropmodule.c"
        var $21=($20)==0; //@line 1184 "stropmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1184 "stropmodule.c"
      case 9: // $bb8
        var $22=_PyErr_NoMemory(); //@line 1185 "stropmodule.c"
        HEAP[$0]=0; //@line 1186 "stropmodule.c"
        __label__ = 16; break; //@line 1186 "stropmodule.c"
      case 10: // $bb9
        var $23=HEAP[$out_len]; //@line 1188 "stropmodule.c"
        var $24=((($23))|0)==-1; //@line 1188 "stropmodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1188 "stropmodule.c"
      case 11: // $bb10
        var $25=HEAP[$args_addr]; //@line 1190 "stropmodule.c"
        var $26=_PyTuple_GetItem($25, 0); //@line 1190 "stropmodule.c"
        HEAP[$newstr]=$26; //@line 1190 "stropmodule.c"
        var $27=HEAP[$newstr]; //@line 1191 "stropmodule.c"
        var $28=($27)!=0; //@line 1191 "stropmodule.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1191 "stropmodule.c"
      case 12: // $bb11
        var $29=HEAP[$newstr]; //@line 1191 "stropmodule.c"
        var $30=(($29)&4294967295); //@line 1191 "stropmodule.c"
        var $31=HEAP[$30]; //@line 1191 "stropmodule.c"
        var $32=((($31) + 1)&4294967295); //@line 1191 "stropmodule.c"
        var $33=HEAP[$newstr]; //@line 1191 "stropmodule.c"
        var $34=(($33)&4294967295); //@line 1191 "stropmodule.c"
        HEAP[$34]=$32; //@line 1191 "stropmodule.c"
        __label__ = 13; break; //@line 1191 "stropmodule.c"
      case 13: // $bb12
        __label__ = 15; break; //@line 1191 "stropmodule.c"
      case 14: // $bb13
        var $35=HEAP[$out_len]; //@line 1194 "stropmodule.c"
        var $36=HEAP[$new_s]; //@line 1194 "stropmodule.c"
        var $37=_PyString_FromStringAndSize($36, $35); //@line 1194 "stropmodule.c"
        HEAP[$newstr]=$37; //@line 1194 "stropmodule.c"
        var $38=HEAP[$new_s]; //@line 1195 "stropmodule.c"
        _free($38); //@line 1195 "stropmodule.c"
        __label__ = 15; break; //@line 1195 "stropmodule.c"
      case 15: // $bb14
        var $39=HEAP[$newstr]; //@line 1197 "stropmodule.c"
        HEAP[$0]=$39; //@line 1197 "stropmodule.c"
        __label__ = 16; break; //@line 1197 "stropmodule.c"
      case 16: // $bb15
        var $40=HEAP[$0]; //@line 1168 "stropmodule.c"
        HEAP[$retval]=$40; //@line 1168 "stropmodule.c"
        __label__ = 17; break; //@line 1168 "stropmodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1168 "stropmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1168 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initstrop() {
    var __stackBase__  = STACKTOP; STACKTOP += 272; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 272);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $s=__stackBase__+4;
        var $buf=__stackBase__+8;
        var $c=__stackBase__+264;
        var $n=__stackBase__+268;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str54)&4294967295), ((_strop_methods)&4294967295), ((_strop_module__doc__)&4294967295), 0, 1013); //@line 1236 "stropmodule.c"
        HEAP[$m]=$0; //@line 1236 "stropmodule.c"
        var $1=HEAP[$m]; //@line 1238 "stropmodule.c"
        var $2=($1)==0; //@line 1238 "stropmodule.c"
        if ($2) { __label__ = 22; break; } else { __label__ = 1; break; } //@line 1238 "stropmodule.c"
      case 1: // $bb
        HEAP[$n]=0; //@line 1242 "stropmodule.c"
        HEAP[$c]=0; //@line 1243 "stropmodule.c"
        __label__ = 5; break; //@line 1243 "stropmodule.c"
      case 2: // $bb1
        var $3=___ctype_b_loc(); //@line 1244 "stropmodule.c"
        var $4=HEAP[$3]; //@line 1244 "stropmodule.c"
        var $5=HEAP[$c]; //@line 1244 "stropmodule.c"
        var $6=(($4+2*$5)&4294967295); //@line 1244 "stropmodule.c"
        var $7=HEAP[$6]; //@line 1244 "stropmodule.c"
        var $8=unSign(($7), 16, 0); //@line 1244 "stropmodule.c"
        var $9=($8) & 8192; //@line 1244 "stropmodule.c"
        var $10=((($9))|0)!=0; //@line 1244 "stropmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1244 "stropmodule.c"
      case 3: // $bb2
        var $11=HEAP[$n]; //@line 1245 "stropmodule.c"
        var $12=HEAP[$c]; //@line 1245 "stropmodule.c"
        var $13=((($12)) & 255); //@line 1245 "stropmodule.c"
        var $14=(($buf+$11)&4294967295); //@line 1245 "stropmodule.c"
        HEAP[$14]=$13; //@line 1245 "stropmodule.c"
        var $15=HEAP[$n]; //@line 1245 "stropmodule.c"
        var $16=((($15) + 1)&4294967295); //@line 1245 "stropmodule.c"
        HEAP[$n]=$16; //@line 1245 "stropmodule.c"
        __label__ = 4; break; //@line 1245 "stropmodule.c"
      case 4: // $bb3
        var $17=HEAP[$c]; //@line 1243 "stropmodule.c"
        var $18=((($17) + 1)&4294967295); //@line 1243 "stropmodule.c"
        HEAP[$c]=$18; //@line 1243 "stropmodule.c"
        __label__ = 5; break; //@line 1243 "stropmodule.c"
      case 5: // $bb4
        var $19=HEAP[$c]; //@line 1243 "stropmodule.c"
        var $20=((($19))|0) <= 255; //@line 1243 "stropmodule.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 1243 "stropmodule.c"
      case 6: // $bb5
        var $buf6=$buf; //@line 1247 "stropmodule.c"
        var $21=HEAP[$n]; //@line 1247 "stropmodule.c"
        var $22=_PyString_FromStringAndSize($buf6, $21); //@line 1247 "stropmodule.c"
        HEAP[$s]=$22; //@line 1247 "stropmodule.c"
        var $23=HEAP[$s]; //@line 1248 "stropmodule.c"
        var $24=($23)!=0; //@line 1248 "stropmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1248 "stropmodule.c"
      case 7: // $bb7
        var $25=HEAP[$m]; //@line 1249 "stropmodule.c"
        var $26=HEAP[$s]; //@line 1249 "stropmodule.c"
        var $27=_PyModule_AddObject($25, ((__str55)&4294967295), $26); //@line 1249 "stropmodule.c"
        __label__ = 8; break; //@line 1249 "stropmodule.c"
      case 8: // $bb8
        HEAP[$n]=0; //@line 1252 "stropmodule.c"
        HEAP[$c]=0; //@line 1253 "stropmodule.c"
        __label__ = 12; break; //@line 1253 "stropmodule.c"
      case 9: // $bb9
        var $28=___ctype_b_loc(); //@line 1254 "stropmodule.c"
        var $29=HEAP[$28]; //@line 1254 "stropmodule.c"
        var $30=HEAP[$c]; //@line 1254 "stropmodule.c"
        var $31=(($29+2*$30)&4294967295); //@line 1254 "stropmodule.c"
        var $32=HEAP[$31]; //@line 1254 "stropmodule.c"
        var $33=unSign(($32), 16, 0); //@line 1254 "stropmodule.c"
        var $34=($33) & 512; //@line 1254 "stropmodule.c"
        var $35=((($34))|0)!=0; //@line 1254 "stropmodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1254 "stropmodule.c"
      case 10: // $bb10
        var $36=HEAP[$n]; //@line 1255 "stropmodule.c"
        var $37=HEAP[$c]; //@line 1255 "stropmodule.c"
        var $38=((($37)) & 255); //@line 1255 "stropmodule.c"
        var $39=(($buf+$36)&4294967295); //@line 1255 "stropmodule.c"
        HEAP[$39]=$38; //@line 1255 "stropmodule.c"
        var $40=HEAP[$n]; //@line 1255 "stropmodule.c"
        var $41=((($40) + 1)&4294967295); //@line 1255 "stropmodule.c"
        HEAP[$n]=$41; //@line 1255 "stropmodule.c"
        __label__ = 11; break; //@line 1255 "stropmodule.c"
      case 11: // $bb11
        var $42=HEAP[$c]; //@line 1253 "stropmodule.c"
        var $43=((($42) + 1)&4294967295); //@line 1253 "stropmodule.c"
        HEAP[$c]=$43; //@line 1253 "stropmodule.c"
        __label__ = 12; break; //@line 1253 "stropmodule.c"
      case 12: // $bb12
        var $44=HEAP[$c]; //@line 1253 "stropmodule.c"
        var $45=((($44))|0) <= 255; //@line 1253 "stropmodule.c"
        if ($45) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1253 "stropmodule.c"
      case 13: // $bb13
        var $buf14=$buf; //@line 1257 "stropmodule.c"
        var $46=HEAP[$n]; //@line 1257 "stropmodule.c"
        var $47=_PyString_FromStringAndSize($buf14, $46); //@line 1257 "stropmodule.c"
        HEAP[$s]=$47; //@line 1257 "stropmodule.c"
        var $48=HEAP[$s]; //@line 1258 "stropmodule.c"
        var $49=($48)!=0; //@line 1258 "stropmodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1258 "stropmodule.c"
      case 14: // $bb15
        var $50=HEAP[$m]; //@line 1259 "stropmodule.c"
        var $51=HEAP[$s]; //@line 1259 "stropmodule.c"
        var $52=_PyModule_AddObject($50, ((__str56)&4294967295), $51); //@line 1259 "stropmodule.c"
        __label__ = 15; break; //@line 1259 "stropmodule.c"
      case 15: // $bb16
        HEAP[$n]=0; //@line 1262 "stropmodule.c"
        HEAP[$c]=0; //@line 1263 "stropmodule.c"
        __label__ = 19; break; //@line 1263 "stropmodule.c"
      case 16: // $bb17
        var $53=___ctype_b_loc(); //@line 1264 "stropmodule.c"
        var $54=HEAP[$53]; //@line 1264 "stropmodule.c"
        var $55=HEAP[$c]; //@line 1264 "stropmodule.c"
        var $56=(($54+2*$55)&4294967295); //@line 1264 "stropmodule.c"
        var $57=HEAP[$56]; //@line 1264 "stropmodule.c"
        var $58=unSign(($57), 16, 0); //@line 1264 "stropmodule.c"
        var $59=($58) & 256; //@line 1264 "stropmodule.c"
        var $60=((($59))|0)!=0; //@line 1264 "stropmodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1264 "stropmodule.c"
      case 17: // $bb18
        var $61=HEAP[$n]; //@line 1265 "stropmodule.c"
        var $62=HEAP[$c]; //@line 1265 "stropmodule.c"
        var $63=((($62)) & 255); //@line 1265 "stropmodule.c"
        var $64=(($buf+$61)&4294967295); //@line 1265 "stropmodule.c"
        HEAP[$64]=$63; //@line 1265 "stropmodule.c"
        var $65=HEAP[$n]; //@line 1265 "stropmodule.c"
        var $66=((($65) + 1)&4294967295); //@line 1265 "stropmodule.c"
        HEAP[$n]=$66; //@line 1265 "stropmodule.c"
        __label__ = 18; break; //@line 1265 "stropmodule.c"
      case 18: // $bb19
        var $67=HEAP[$c]; //@line 1263 "stropmodule.c"
        var $68=((($67) + 1)&4294967295); //@line 1263 "stropmodule.c"
        HEAP[$c]=$68; //@line 1263 "stropmodule.c"
        __label__ = 19; break; //@line 1263 "stropmodule.c"
      case 19: // $bb20
        var $69=HEAP[$c]; //@line 1263 "stropmodule.c"
        var $70=((($69))|0) <= 255; //@line 1263 "stropmodule.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 1263 "stropmodule.c"
      case 20: // $bb21
        var $buf22=$buf; //@line 1267 "stropmodule.c"
        var $71=HEAP[$n]; //@line 1267 "stropmodule.c"
        var $72=_PyString_FromStringAndSize($buf22, $71); //@line 1267 "stropmodule.c"
        HEAP[$s]=$72; //@line 1267 "stropmodule.c"
        var $73=HEAP[$s]; //@line 1268 "stropmodule.c"
        var $74=($73)!=0; //@line 1268 "stropmodule.c"
        if ($74) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1268 "stropmodule.c"
      case 21: // $bb23
        var $75=HEAP[$m]; //@line 1269 "stropmodule.c"
        var $76=HEAP[$s]; //@line 1269 "stropmodule.c"
        var $77=_PyModule_AddObject($75, ((__str57)&4294967295), $76); //@line 1269 "stropmodule.c"
        __label__ = 22; break; //@line 1269 "stropmodule.c"
      case 22: // $bb24
        __label__ = 23; break; //@line 1239 "stropmodule.c"
      case 23: // $return
        STACKTOP = __stackBase__;
        return; //@line 1239 "stropmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initstrop"] = _initstrop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_strop_atof,0,_strop_atoi,0,_strop_atol,0,_strop_capitalize,0,_strop_count,0,_strop_expandtabs,0,_strop_find,0,_strop_joinfields,0,_strop_lstrip,0,_strop_lower,0,_strop_maketrans,0,_strop_replace,0,_strop_rfind,0,_strop_rstrip,0,_strop_splitfields,0,_strop_strip,0,_strop_swapcase,0,_strop_translate,0,_strop_upper,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_strop_module__doc__=allocate([67,111,109,109,111,110,32,115,116,114,105,110,103,32,109,97,110,105,112,117,108,97,116,105,111,110,115,44,32,111,112,116,105,109,105,122,101,100,32,102,111,114,32,115,112,101,101,100,46,10,10,65,108,119,97,121,115,32,117,115,101,32,34,105,109,112,111,114,116,32,115,116,114,105,110,103,34,32,114,97,116,104,101,114,32,116,104,97,110,32,114,101,102,101,114,101,110,99,105,110,103,10,116,104,105,115,32,109,111,100,117,108,101,32,100,105,114,101,99,116,108,121,46,0] /* Common string manipu */, "i8", ALLOC_NORMAL);
_splitfields__doc__=allocate([115,112,108,105,116,40,115,32,91,44,115,101,112,32,91,44,109,97,120,115,112,108,105,116,93,93,41,32,45,62,32,108,105,115,116,32,111,102,32,115,116,114,105,110,103,115,10,115,112,108,105,116,102,105,101,108,100,115,40,115,32,91,44,115,101,112,32,91,44,109,97,120,115,112,108,105,116,93,93,41,32,45,62,32,108,105,115,116,32,111,102,32,115,116,114,105,110,103,115,10,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,116,104,101,32,119,111,114,100,115,32,105,110,32,116,104,101,32,115,116,114,105,110,103,32,115,44,32,117,115,105,110,103,32,115,101,112,32,97,115,32,116,104,101,10,100,101,108,105,109,105,116,101,114,32,115,116,114,105,110,103,46,32,32,73,102,32,109,97,120,115,112,108,105,116,32,105,115,32,110,111,110,122,101,114,111,44,32,115,112,108,105,116,115,32,105,110,116,111,32,97,116,32,109,111,115,116,10,109,97,120,115,112,108,105,116,32,119,111,114,100,115,46,32,32,73,102,32,115,101,112,32,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,97,110,121,32,119,104,105,116,101,115,112,97,99,101,32,115,116,114,105,110,103,10,105,115,32,97,32,115,101,112,97,114,97,116,111,114,46,32,32,77,97,120,115,112,108,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,48,46,10,10,40,115,112,108,105,116,32,97,110,100,32,115,112,108,105,116,102,105,101,108,100,115,32,97,114,101,32,115,121,110,111,110,121,109,111,117,115,41,0] /* split(s [,sep [,maxs */, "i8", ALLOC_NORMAL);
__str=allocate([115,116,114,111,112,32,102,117,110,99,116,105,111,110,115,32,97,114,101,32,111,98,115,111,108,101,116,101,59,32,117,115,101,32,115,116,114,105,110,103,32,109,101,116,104,111,100,115,0] /* strop functions are  */, "i8", ALLOC_NORMAL);
__str1=allocate([116,35,124,122,35,110,58,115,112,108,105,116,0] /* t#|z#n:split\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([101,109,112,116,121,32,115,101,112,97,114,97,116,111,114,0] /* empty separator\00 */, "i8", ALLOC_NORMAL);
_joinfields__doc__=allocate([106,111,105,110,40,108,105,115,116,32,91,44,115,101,112,93,41,32,45,62,32,115,116,114,105,110,103,10,106,111,105,110,102,105,101,108,100,115,40,108,105,115,116,32,91,44,115,101,112,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,109,112,111,115,101,100,32,111,102,32,116,104,101,32,119,111,114,100,115,32,105,110,32,108,105,115,116,44,32,119,105,116,104,10,105,110,116,101,114,118,101,110,105,110,103,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,101,112,46,32,32,83,101,112,32,100,101,102,97,117,108,116,115,32,116,111,32,97,32,115,105,110,103,108,101,10,115,112,97,99,101,46,10,10,40,106,111,105,110,32,97,110,100,32,106,111,105,110,102,105,101,108,100,115,32,97,114,101,32,115,121,110,111,110,121,109,111,117,115,41,0] /* join(list [,sep]) -> */, "i8", ALLOC_NORMAL);
__str3=allocate([79,124,116,35,58,106,111,105,110,0] /* O|t#:join\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([32,0] /*  \00 */, "i8", ALLOC_NORMAL);
__str5=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,0] /* first argument must  */, "i8", ALLOC_NORMAL);
__str6=allocate([105,110,112,117,116,32,116,111,111,32,108,111,110,103,0] /* input too long\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,0] /* first argument must  */, "i8", ALLOC_NORMAL);
_find__doc__=allocate([102,105,110,100,40,115,44,32,115,117,98,32,91,44,115,116,97,114,116,32,91,44,101,110,100,93,93,41,32,45,62,32,105,110,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,119,101,115,116,32,105,110,100,101,120,32,105,110,32,115,32,119,104,101,114,101,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,115,32,102,111,117,110,100,44,10,115,117,99,104,32,116,104,97,116,32,115,117,98,32,105,115,32,99,111,110,116,97,105,110,101,100,32,119,105,116,104,105,110,32,115,91,115,116,97,114,116,44,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,10,10,82,101,116,117,114,110,32,45,49,32,111,110,32,102,97,105,108,117,114,101,46,0] /* find(s, sub [,start  */, "i8", ALLOC_NORMAL);
__str8=allocate([116,35,116,35,124,110,110,58,102,105,110,100,0] /* t#t#|nn:find\00 */, "i8", ALLOC_NORMAL);
_rfind__doc__=allocate([114,102,105,110,100,40,115,44,32,115,117,98,32,91,44,115,116,97,114,116,32,91,44,101,110,100,93,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,104,105,103,104,101,115,116,32,105,110,100,101,120,32,105,110,32,115,32,119,104,101,114,101,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,115,32,102,111,117,110,100,44,10,115,117,99,104,32,116,104,97,116,32,115,117,98,32,105,115,32,99,111,110,116,97,105,110,101,100,32,119,105,116,104,105,110,32,115,91,115,116,97,114,116,44,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,10,10,82,101,116,117,114,110,32,45,49,32,111,110,32,102,97,105,108,117,114,101,46,0] /* rfind(s, sub [,start */, "i8", ALLOC_NORMAL);
__str9=allocate([116,35,116,35,124,110,110,58,114,102,105,110,100,0] /* t#t#|nn:rfind\00 */, "i8", ALLOC_NORMAL);
_strip__doc__=allocate([115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,108,101,97,100,105,110,103,32,97,110,100,32,116,114,97,105,108,105,110,103,10,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* strip(s) -> string\0 */, "i8", ALLOC_NORMAL);
_lstrip__doc__=allocate([108,115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,108,101,97,100,105,110,103,32,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* lstrip(s) -> string\ */, "i8", ALLOC_NORMAL);
_rstrip__doc__=allocate([114,115,116,114,105,112,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,116,114,97,105,108,105,110,103,32,119,104,105,116,101,115,112,97,99,101,32,114,101,109,111,118,101,100,46,0] /* rstrip(s) -> string\ */, "i8", ALLOC_NORMAL);
_lower__doc__=allocate([108,111,119,101,114,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,99,111,110,118,101,114,116,101,100,32,116,111,32,108,111,119,101,114,99,97,115,101,46,0] /* lower(s) -> string\0 */, "i8", ALLOC_NORMAL);
_upper__doc__=allocate([117,112,112,101,114,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,99,111,110,118,101,114,116,101,100,32,116,111,32,117,112,112,101,114,99,97,115,101,46,0] /* upper(s) -> string\0 */, "i8", ALLOC_NORMAL);
_capitalize__doc__=allocate([99,97,112,105,116,97,108,105,122,101,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,111,110,108,121,32,105,116,115,32,102,105,114,115,116,32,99,104,97,114,97,99,116,101,114,10,99,97,112,105,116,97,108,105,122,101,100,46,0] /* capitalize(s) -> str */, "i8", ALLOC_NORMAL);
_expandtabs__doc__=allocate([101,120,112,97,110,100,116,97,98,115,40,115,116,114,105,110,103,44,32,91,116,97,98,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,69,120,112,97,110,100,32,116,97,98,115,32,105,110,32,97,32,115,116,114,105,110,103,44,32,105,46,101,46,32,114,101,112,108,97,99,101,32,116,104,101,109,32,98,121,32,111,110,101,32,111,114,32,109,111,114,101,32,115,112,97,99,101,115,44,10,100,101,112,101,110,100,105,110,103,32,111,110,32,116,104,101,32,99,117,114,114,101,110,116,32,99,111,108,117,109,110,32,97,110,100,32,116,104,101,32,103,105,118,101,110,32,116,97,98,32,115,105,122,101,32,40,100,101,102,97,117,108,116,32,56,41,46,10,84,104,101,32,99,111,108,117,109,110,32,110,117,109,98,101,114,32,105,115,32,114,101,115,101,116,32,116,111,32,122,101,114,111,32,97,102,116,101,114,32,101,97,99,104,32,110,101,119,108,105,110,101,32,111,99,99,117,114,114,105,110,103,32,105,110,32,116,104,101,10,115,116,114,105,110,103,46,32,32,84,104,105,115,32,100,111,101,115,110,39,116,32,117,110,100,101,114,115,116,97,110,100,32,111,116,104,101,114,32,110,111,110,45,112,114,105,110,116,105,110,103,32,99,104,97,114,97,99,116,101,114,115,46,0] /* expandtabs(string, [ */, "i8", ALLOC_NORMAL);
__str10=allocate([115,35,124,105,58,101,120,112,97,110,100,116,97,98,115,0] /* s#|i:expandtabs\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([116,97,98,115,105,122,101,32,109,117,115,116,32,98,101,32,97,116,32,108,101,97,115,116,32,49,0] /* tabsize must be at l */, "i8", ALLOC_NORMAL);
__str12=allocate([110,101,119,32,115,116,114,105,110,103,32,105,115,32,116,111,111,32,108,111,110,103,0] /* new string is too lo */, "i8", ALLOC_NORMAL);
_count__doc__=allocate([99,111,117,110,116,40,115,44,32,115,117,98,91,44,32,115,116,97,114,116,91,44,32,101,110,100,93,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,117,98,115,116,114,105,110,103,32,115,117,98,32,105,110,32,115,116,114,105,110,103,10,115,91,115,116,97,114,116,58,101,110,100,93,46,32,32,79,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,115,32,115,116,97,114,116,32,97,110,100,32,101,110,100,32,97,114,101,10,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,105,110,32,115,108,105,99,101,32,110,111,116,97,116,105,111,110,46,0] /* count(s, sub[, start */, "i8", ALLOC_NORMAL);
__str13=allocate([116,35,116,35,124,110,110,58,99,111,117,110,116,0] /* t#t#|nn:count\00 */, "i8", ALLOC_NORMAL);
_swapcase__doc__=allocate([115,119,97,112,99,97,115,101,40,115,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,32,119,105,116,104,32,117,112,112,101,114,32,99,97,115,101,32,99,104,97,114,97,99,116,101,114,115,10,99,111,110,118,101,114,116,101,100,32,116,111,32,108,111,119,101,114,99,97,115,101,32,97,110,100,32,118,105,99,101,32,118,101,114,115,97,46,0] /* swapcase(s) -> strin */, "i8", ALLOC_NORMAL);
_atoi__doc__=allocate([97,116,111,105,40,115,32,91,44,98,97,115,101,93,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,116,101,103,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,32,105,110,32,116,104,101,32,103,105,118,101,110,10,98,97,115,101,44,32,119,104,105,99,104,32,100,101,102,97,117,108,116,115,32,116,111,32,49,48,46,32,32,84,104,101,32,115,116,114,105,110,103,32,115,32,109,117,115,116,32,99,111,110,115,105,115,116,32,111,102,32,111,110,101,10,111,114,32,109,111,114,101,32,100,105,103,105,116,115,44,32,112,111,115,115,105,98,108,121,32,112,114,101,99,101,100,101,100,32,98,121,32,97,32,115,105,103,110,46,32,32,73,102,32,98,97,115,101,32,105,115,32,48,44,32,105,116,10,105,115,32,99,104,111,115,101,110,32,102,114,111,109,32,116,104,101,32,108,101,97,100,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,111,102,32,115,44,32,48,32,102,111,114,32,111,99,116,97,108,44,32,48,120,32,111,114,10,48,88,32,102,111,114,32,104,101,120,97,100,101,99,105,109,97,108,46,32,32,73,102,32,98,97,115,101,32,105,115,32,49,54,44,32,97,32,112,114,101,99,101,100,105,110,103,32,48,120,32,111,114,32,48,88,32,105,115,10,97,99,99,101,112,116,101,100,46,0] /* atoi(s [,base]) -> i */, "i8", ALLOC_NORMAL);
__str14=allocate([115,124,105,58,97,116,111,105,0] /* s|i:atoi\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([105,110,118,97,108,105,100,32,98,97,115,101,32,102,111,114,32,97,116,111,105,40,41,0] /* invalid base for ato */, "i8", ALLOC_NORMAL);
__str16=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,105,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
__str17=allocate([97,116,111,105,40,41,32,108,105,116,101,114,97,108,32,116,111,111,32,108,97,114,103,101,58,32,37,46,50,48,48,115,0] /* atoi() literal too l */, "i8", ALLOC_NORMAL);
_atol__doc__=allocate([97,116,111,108,40,115,32,91,44,98,97,115,101,93,41,32,45,62,32,108,111,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,110,103,32,105,110,116,101,103,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,32,105,110,32,116,104,101,10,103,105,118,101,110,32,98,97,115,101,44,32,119,104,105,99,104,32,100,101,102,97,117,108,116,115,32,116,111,32,49,48,46,32,32,84,104,101,32,115,116,114,105,110,103,32,115,32,109,117,115,116,32,99,111,110,115,105,115,116,10,111,102,32,111,110,101,32,111,114,32,109,111,114,101,32,100,105,103,105,116,115,44,32,112,111,115,115,105,98,108,121,32,112,114,101,99,101,100,101,100,32,98,121,32,97,32,115,105,103,110,46,32,32,73,102,32,98,97,115,101,10,105,115,32,48,44,32,105,116,32,105,115,32,99,104,111,115,101,110,32,102,114,111,109,32,116,104,101,32,108,101,97,100,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,111,102,32,115,44,32,48,32,102,111,114,10,111,99,116,97,108,44,32,48,120,32,111,114,32,48,88,32,102,111,114,32,104,101,120,97,100,101,99,105,109,97,108,46,32,32,73,102,32,98,97,115,101,32,105,115,32,49,54,44,32,97,32,112,114,101,99,101,100,105,110,103,10,48,120,32,111,114,32,48,88,32,105,115,32,97,99,99,101,112,116,101,100,46,32,32,65,32,116,114,97,105,108,105,110,103,32,76,32,111,114,32,108,32,105,115,32,110,111,116,32,97,99,99,101,112,116,101,100,44,10,117,110,108,101,115,115,32,98,97,115,101,32,105,115,32,48,46,0] /* atol(s [,base]) -> l */, "i8", ALLOC_NORMAL);
__str18=allocate([115,124,105,58,97,116,111,108,0] /* s|i:atol\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([105,110,118,97,108,105,100,32,98,97,115,101,32,102,111,114,32,97,116,111,108,40,41,0] /* invalid base for ato */, "i8", ALLOC_NORMAL);
__str20=allocate([101,109,112,116,121,32,115,116,114,105,110,103,32,102,111,114,32,97,116,111,108,40,41,0] /* empty string for ato */, "i8", ALLOC_NORMAL);
__str21=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,108,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
_atof__doc__=allocate([97,116,111,102,40,115,41,32,45,62,32,102,108,111,97,116,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,114,101,112,114,101,115,101,110,116,101,100,32,98,121,32,116,104,101,32,115,116,114,105,110,103,32,115,46,0] /* atof(s) -> float\0A\ */, "i8", ALLOC_NORMAL);
__str22=allocate([115,58,97,116,111,102,0] /* s:atof\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([101,109,112,116,121,32,115,116,114,105,110,103,32,102,111,114,32,97,116,111,102,40,41,0] /* empty string for ato */, "i8", ALLOC_NORMAL);
__str24=allocate([105,110,118,97,108,105,100,32,108,105,116,101,114,97,108,32,102,111,114,32,97,116,111,102,40,41,58,32,37,46,50,48,48,115,0] /* invalid literal for  */, "i8", ALLOC_NORMAL);
_maketrans__doc__=allocate([109,97,107,101,116,114,97,110,115,40,102,114,109,44,32,116,111,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,32,40,97,32,115,116,114,105,110,103,32,111,102,32,50,53,54,32,98,121,116,101,115,32,108,111,110,103,41,10,115,117,105,116,97,98,108,101,32,102,111,114,32,117,115,101,32,105,110,32,115,116,114,105,110,103,46,116,114,97,110,115,108,97,116,101,46,32,32,84,104,101,32,115,116,114,105,110,103,115,32,102,114,109,32,97,110,100,32,116,111,10,109,117,115,116,32,98,101,32,111,102,32,116,104,101,32,115,97,109,101,32,108,101,110,103,116,104,46,0] /* maketrans(frm, to) - */, "i8", ALLOC_NORMAL);
__str25=allocate([116,35,116,35,58,109,97,107,101,116,114,97,110,115,0] /* t#t#:maketrans\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([109,97,107,101,116,114,97,110,115,32,97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,104,97,118,101,32,115,97,109,101,32,108,101,110,103,116,104,0] /* maketrans arguments  */, "i8", ALLOC_NORMAL);
_translate__doc__=allocate([116,114,97,110,115,108,97,116,101,40,115,44,116,97,98,108,101,32,91,44,100,101,108,101,116,101,99,104,97,114,115,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,115,116,114,105,110,103,32,115,44,32,119,104,101,114,101,32,97,108,108,32,99,104,97,114,97,99,116,101,114,115,32,111,99,99,117,114,114,105,110,103,10,105,110,32,116,104,101,32,111,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,32,100,101,108,101,116,101,99,104,97,114,115,32,97,114,101,32,114,101,109,111,118,101,100,44,32,97,110,100,32,116,104,101,10,114,101,109,97,105,110,105,110,103,32,99,104,97,114,97,99,116,101,114,115,32,104,97,118,101,32,98,101,101,110,32,109,97,112,112,101,100,32,116,104,114,111,117,103,104,32,116,104,101,32,103,105,118,101,110,10,116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,44,32,119,104,105,99,104,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,32,111,102,32,108,101,110,103,116,104,32,50,53,54,46,0] /* translate(s,table [, */, "i8", ALLOC_NORMAL);
__str27=allocate([83,116,35,124,116,35,58,116,114,97,110,115,108,97,116,101,0] /* St#|t#:translate\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([116,114,97,110,115,108,97,116,105,111,110,32,116,97,98,108,101,32,109,117,115,116,32,98,101,32,50,53,54,32,99,104,97,114,97,99,116,101,114,115,32,108,111,110,103,0] /* translation table mu */, "i8", ALLOC_NORMAL);
__str29=allocate([110,101,119,95,108,101,110,32,62,32,48,0] /* new_len > 0\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,115,116,114,111,112,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/s */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9892=allocate([109,121,109,101,109,114,101,112,108,97,99,101,0] /* mymemreplace\00 */, "i8", ALLOC_NORMAL);
_replace__doc__=allocate([114,101,112,108,97,99,101,32,40,115,116,114,44,32,111,108,100,44,32,110,101,119,91,44,32,109,97,120,115,112,108,105,116,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,115,116,114,105,110,103,32,115,116,114,32,119,105,116,104,32,97,108,108,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,115,117,98,115,116,114,105,110,103,10,111,108,100,32,114,101,112,108,97,99,101,100,32,98,121,32,110,101,119,46,32,73,102,32,116,104,101,32,111,112,116,105,111,110,97,108,32,97,114,103,117,109,101,110,116,32,109,97,120,115,112,108,105,116,32,105,115,10,103,105,118,101,110,44,32,111,110,108,121,32,116,104,101,32,102,105,114,115,116,32,109,97,120,115,112,108,105,116,32,111,99,99,117,114,114,101,110,99,101,115,32,97,114,101,32,114,101,112,108,97,99,101,100,46,0] /* replace (str, old, n */, "i8", ALLOC_NORMAL);
__str31=allocate([116,35,116,35,116,35,124,110,58,114,101,112,108,97,99,101,0] /* t#t#t#|n:replace\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([101,109,112,116,121,32,112,97,116,116,101,114,110,32,115,116,114,105,110,103,0] /* empty pattern string */, "i8", ALLOC_NORMAL);
__str33=allocate([97,116,111,102,0] /* atof\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([97,116,111,105,0] /* atoi\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([97,116,111,108,0] /* atol\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([99,97,112,105,116,97,108,105,122,101,0] /* capitalize\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([99,111,117,110,116,0] /* count\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([101,120,112,97,110,100,116,97,98,115,0] /* expandtabs\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([102,105,110,100,0] /* find\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([106,111,105,110,102,105,101,108,100,115,0] /* joinfields\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([108,115,116,114,105,112,0] /* lstrip\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([108,111,119,101,114,0] /* lower\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([109,97,107,101,116,114,97,110,115,0] /* maketrans\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([114,102,105,110,100,0] /* rfind\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([114,115,116,114,105,112,0] /* rstrip\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([115,112,108,105,116,0] /* split\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([115,112,108,105,116,102,105,101,108,100,115,0] /* splitfields\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([115,116,114,105,112,0] /* strip\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([115,119,97,112,99,97,115,101,0] /* swapcase\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([116,114,97,110,115,108,97,116,101,0] /* translate\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([117,112,112,101,114,0] /* upper\00 */, "i8", ALLOC_NORMAL);
_strop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([115,116,114,111,112,0] /* strop\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([119,104,105,116,101,115,112,97,99,101,0] /* whitespace\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([108,111,119,101,114,99,97,115,101,0] /* lowercase\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([117,112,112,101,114,99,97,115,101,0] /* uppercase\00 */, "i8", ALLOC_NORMAL);
HEAP[_strop_methods]=((__str33)&4294967295);
HEAP[_strop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_strop_methods+12]=((_atof__doc__)&4294967295);
HEAP[_strop_methods+16]=((__str34)&4294967295);
HEAP[_strop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_strop_methods+28]=((_atoi__doc__)&4294967295);
HEAP[_strop_methods+32]=((__str35)&4294967295);
HEAP[_strop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_strop_methods+44]=((_atol__doc__)&4294967295);
HEAP[_strop_methods+48]=((__str36)&4294967295);
HEAP[_strop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_strop_methods+60]=((_capitalize__doc__)&4294967295);
HEAP[_strop_methods+64]=((__str37)&4294967295);
HEAP[_strop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_strop_methods+76]=((_count__doc__)&4294967295);
HEAP[_strop_methods+80]=((__str38)&4294967295);
HEAP[_strop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_strop_methods+92]=((_expandtabs__doc__)&4294967295);
HEAP[_strop_methods+96]=((__str39)&4294967295);
HEAP[_strop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_strop_methods+108]=((_find__doc__)&4294967295);
HEAP[_strop_methods+112]=((__str40)&4294967295);
HEAP[_strop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_strop_methods+124]=((_joinfields__doc__)&4294967295);
HEAP[_strop_methods+128]=((__str41)&4294967295);
HEAP[_strop_methods+132]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_strop_methods+140]=((_joinfields__doc__)&4294967295);
HEAP[_strop_methods+144]=((__str42)&4294967295);
HEAP[_strop_methods+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_strop_methods+156]=((_lstrip__doc__)&4294967295);
HEAP[_strop_methods+160]=((__str43)&4294967295);
HEAP[_strop_methods+164]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_strop_methods+172]=((_lower__doc__)&4294967295);
HEAP[_strop_methods+176]=((__str44)&4294967295);
HEAP[_strop_methods+180]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_strop_methods+188]=((_maketrans__doc__)&4294967295);
HEAP[_strop_methods+192]=((__str45)&4294967295);
HEAP[_strop_methods+196]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_strop_methods+204]=((_replace__doc__)&4294967295);
HEAP[_strop_methods+208]=((__str46)&4294967295);
HEAP[_strop_methods+212]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_strop_methods+220]=((_rfind__doc__)&4294967295);
HEAP[_strop_methods+224]=((__str47)&4294967295);
HEAP[_strop_methods+228]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_strop_methods+236]=((_rstrip__doc__)&4294967295);
HEAP[_strop_methods+240]=((__str48)&4294967295);
HEAP[_strop_methods+244]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_strop_methods+252]=((_splitfields__doc__)&4294967295);
HEAP[_strop_methods+256]=((__str49)&4294967295);
HEAP[_strop_methods+260]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_strop_methods+268]=((_splitfields__doc__)&4294967295);
HEAP[_strop_methods+272]=((__str50)&4294967295);
HEAP[_strop_methods+276]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_strop_methods+284]=((_strip__doc__)&4294967295);
HEAP[_strop_methods+288]=((__str51)&4294967295);
HEAP[_strop_methods+292]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_strop_methods+300]=((_swapcase__doc__)&4294967295);
HEAP[_strop_methods+304]=((__str52)&4294967295);
HEAP[_strop_methods+308]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_strop_methods+316]=((_translate__doc__)&4294967295);
HEAP[_strop_methods+320]=((__str53)&4294967295);
HEAP[_strop_methods+324]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_strop_methods+332]=((_upper__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

