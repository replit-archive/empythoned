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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_langinfo_constant___SIZE = 8; // %struct.langinfo_constant
  
var $struct_lconv___SIZE = 56; // %struct.lconv
  var $struct_lconv___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
var _locale__doc__;
var _setlocale__doc__;
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var _Error;
var __str6;
var __str7;
var _localeconv__doc__;
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
var __str23;
var __str24;
var __str25;
var _strcoll__doc__;
var __str26;
var _PyExc_ValueError;
var __str27;
var _strxfrm__doc__;
var __str28;
var _langinfo_constants;
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
var __str72;
var __str73;
var __str74;
var __str75;
var __str76;
var __str77;
var __str78;
var __str79;
var __str80;
var __str81;
var __str82;
var __str83;
var __str84;
var _nl_langinfo__doc__;
var __str85;
var __str86;
var __str87;
var _gettext__doc__;
var __str88;
var _dgettext__doc__;
var __str89;
var _dcgettext__doc__;
var __str90;
var _textdomain__doc__;
var __str91;
var _PyExc_OSError;
var _bindtextdomain__doc__;
var __str92;
var __str93;
var _bind_textdomain_codeset__doc__;
var __Py_NoneStruct;
var __str94;
var __str95;
var __str96;
var __str97;
var __str98;
var __str99;
var __str100;
var __str101;
var __str102;
var __str103;
var _PyLocale_Methods;
var __str104;
var __str105;
var __str106;
var __str107;
var __str108;
var __str109;
var __str110;
var __str111;
var __str112;
var __str113;
var __str114;
var __str115;













































  function _copy_grouping($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $result=__stackBase__+16;
        var $val=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$val]=0; //@line 58 "_localemodule.c"
        var $1=HEAP[$s_addr]; //@line 60 "_localemodule.c"
        var $2=(($1)&4294967295); //@line 60 "_localemodule.c"
        var $3=HEAP[$2]; //@line 60 "_localemodule.c"
        var $4=reSign(($3), 8, 0)==0; //@line 60 "_localemodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 60 "_localemodule.c"
      case 1: // $bb
        var $5=_PyList_New(0); //@line 62 "_localemodule.c"
        HEAP[$0]=$5; //@line 62 "_localemodule.c"
        __label__ = 21; break; //@line 62 "_localemodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 64 "_localemodule.c"
        __label__ = 4; break; //@line 64 "_localemodule.c"
      case 3: // $bb2
        var $6=HEAP[$i]; //@line 64 "_localemodule.c"
        var $7=((($6) + 1)&4294967295); //@line 64 "_localemodule.c"
        HEAP[$i]=$7; //@line 64 "_localemodule.c"
        __label__ = 4; break; //@line 64 "_localemodule.c"
      case 4: // $bb3
        var $8=HEAP[$s_addr]; //@line 64 "_localemodule.c"
        var $9=HEAP[$i]; //@line 64 "_localemodule.c"
        var $10=(($8+$9)&4294967295); //@line 64 "_localemodule.c"
        var $11=HEAP[$10]; //@line 64 "_localemodule.c"
        var $12=reSign(($11), 8, 0)==0; //@line 64 "_localemodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 64 "_localemodule.c"
      case 5: // $bb4
        var $13=HEAP[$s_addr]; //@line 64 "_localemodule.c"
        var $14=HEAP[$i]; //@line 64 "_localemodule.c"
        var $15=(($13+$14)&4294967295); //@line 64 "_localemodule.c"
        var $16=HEAP[$15]; //@line 64 "_localemodule.c"
        var $17=reSign(($16), 8, 0)!=127; //@line 64 "_localemodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 64 "_localemodule.c"
      case 6: // $bb5
        var $18=HEAP[$i]; //@line 67 "_localemodule.c"
        var $19=((($18) + 1)&4294967295); //@line 67 "_localemodule.c"
        var $20=_PyList_New($19); //@line 67 "_localemodule.c"
        HEAP[$result]=$20; //@line 67 "_localemodule.c"
        var $21=HEAP[$result]; //@line 68 "_localemodule.c"
        var $22=($21)==0; //@line 68 "_localemodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 68 "_localemodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 69 "_localemodule.c"
        __label__ = 21; break; //@line 69 "_localemodule.c"
      case 8: // $bb7
        HEAP[$i]=-1; //@line 71 "_localemodule.c"
        __label__ = 9; break; //@line 71 "_localemodule.c"
      case 9: // $bb8
        var $23=HEAP[$i]; //@line 73 "_localemodule.c"
        var $24=((($23) + 1)&4294967295); //@line 73 "_localemodule.c"
        HEAP[$i]=$24; //@line 73 "_localemodule.c"
        var $25=HEAP[$s_addr]; //@line 74 "_localemodule.c"
        var $26=HEAP[$i]; //@line 74 "_localemodule.c"
        var $27=(($25+$26)&4294967295); //@line 74 "_localemodule.c"
        var $28=HEAP[$27]; //@line 74 "_localemodule.c"
        var $29=reSign(($28), 8, 0); //@line 74 "_localemodule.c"
        var $30=_PyInt_FromLong($29); //@line 74 "_localemodule.c"
        HEAP[$val]=$30; //@line 74 "_localemodule.c"
        var $31=HEAP[$val]; //@line 75 "_localemodule.c"
        var $32=($31)==0; //@line 75 "_localemodule.c"
        if ($32) { __label__ = 16; break; } else { __label__ = 10; break; } //@line 75 "_localemodule.c"
      case 10: // $bb9
        var $33=HEAP[$result]; //@line 77 "_localemodule.c"
        var $34=HEAP[$i]; //@line 77 "_localemodule.c"
        var $35=HEAP[$val]; //@line 77 "_localemodule.c"
        var $36=_PyList_SetItem($33, $34, $35); //@line 77 "_localemodule.c"
        var $37=((($36))|0)!=0; //@line 77 "_localemodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 77 "_localemodule.c"
      case 11: // $bb10
        var $38=HEAP[$val]; //@line 78 "_localemodule.c"
        var $39=(($38)&4294967295); //@line 78 "_localemodule.c"
        var $40=HEAP[$39]; //@line 78 "_localemodule.c"
        var $41=((($40) - 1)&4294967295); //@line 78 "_localemodule.c"
        var $42=HEAP[$val]; //@line 78 "_localemodule.c"
        var $43=(($42)&4294967295); //@line 78 "_localemodule.c"
        HEAP[$43]=$41; //@line 78 "_localemodule.c"
        var $44=HEAP[$val]; //@line 78 "_localemodule.c"
        var $45=(($44)&4294967295); //@line 78 "_localemodule.c"
        var $46=HEAP[$45]; //@line 78 "_localemodule.c"
        var $47=((($46))|0)==0; //@line 78 "_localemodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 78 "_localemodule.c"
      case 12: // $bb11
        var $48=HEAP[$val]; //@line 78 "_localemodule.c"
        var $49=(($48+4)&4294967295); //@line 78 "_localemodule.c"
        var $50=HEAP[$49]; //@line 78 "_localemodule.c"
        var $51=(($50+24)&4294967295); //@line 78 "_localemodule.c"
        var $52=HEAP[$51]; //@line 78 "_localemodule.c"
        var $53=HEAP[$val]; //@line 78 "_localemodule.c"
        FUNCTION_TABLE[$52]($53); //@line 78 "_localemodule.c"
        __label__ = 13; break; //@line 78 "_localemodule.c"
      case 13: // $bb12
        HEAP[$val]=0; //@line 79 "_localemodule.c"
        __label__ = 16; break; //@line 79 "_localemodule.c"
      case 14: // $bb13
        var $54=HEAP[$s_addr]; //@line 82 "_localemodule.c"
        var $55=HEAP[$i]; //@line 82 "_localemodule.c"
        var $56=(($54+$55)&4294967295); //@line 82 "_localemodule.c"
        var $57=HEAP[$56]; //@line 82 "_localemodule.c"
        var $58=reSign(($57), 8, 0)==0; //@line 82 "_localemodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 82 "_localemodule.c"
      case 15: // $bb14
        var $59=HEAP[$s_addr]; //@line 82 "_localemodule.c"
        var $60=HEAP[$i]; //@line 82 "_localemodule.c"
        var $61=(($59+$60)&4294967295); //@line 82 "_localemodule.c"
        var $62=HEAP[$61]; //@line 82 "_localemodule.c"
        var $63=reSign(($62), 8, 0)!=127; //@line 82 "_localemodule.c"
        if ($63) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 82 "_localemodule.c"
      case 16: // $bb15
        var $64=HEAP[$val]; //@line 84 "_localemodule.c"
        var $65=($64)==0; //@line 84 "_localemodule.c"
        if ($65) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 84 "_localemodule.c"
      case 17: // $bb16
        var $66=HEAP[$result]; //@line 85 "_localemodule.c"
        var $67=(($66)&4294967295); //@line 85 "_localemodule.c"
        var $68=HEAP[$67]; //@line 85 "_localemodule.c"
        var $69=((($68) - 1)&4294967295); //@line 85 "_localemodule.c"
        var $70=HEAP[$result]; //@line 85 "_localemodule.c"
        var $71=(($70)&4294967295); //@line 85 "_localemodule.c"
        HEAP[$71]=$69; //@line 85 "_localemodule.c"
        var $72=HEAP[$result]; //@line 85 "_localemodule.c"
        var $73=(($72)&4294967295); //@line 85 "_localemodule.c"
        var $74=HEAP[$73]; //@line 85 "_localemodule.c"
        var $75=((($74))|0)==0; //@line 85 "_localemodule.c"
        if ($75) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 85 "_localemodule.c"
      case 18: // $bb17
        var $76=HEAP[$result]; //@line 85 "_localemodule.c"
        var $77=(($76+4)&4294967295); //@line 85 "_localemodule.c"
        var $78=HEAP[$77]; //@line 85 "_localemodule.c"
        var $79=(($78+24)&4294967295); //@line 85 "_localemodule.c"
        var $80=HEAP[$79]; //@line 85 "_localemodule.c"
        var $81=HEAP[$result]; //@line 85 "_localemodule.c"
        FUNCTION_TABLE[$80]($81); //@line 85 "_localemodule.c"
        __label__ = 19; break; //@line 85 "_localemodule.c"
      case 19: // $bb18
        HEAP[$0]=0; //@line 86 "_localemodule.c"
        __label__ = 21; break; //@line 86 "_localemodule.c"
      case 20: // $bb19
        var $82=HEAP[$result]; //@line 89 "_localemodule.c"
        HEAP[$0]=$82; //@line 89 "_localemodule.c"
        __label__ = 21; break; //@line 89 "_localemodule.c"
      case 21: // $bb20
        var $83=HEAP[$0]; //@line 62 "_localemodule.c"
        HEAP[$retval]=$83; //@line 62 "_localemodule.c"
        __label__ = 22; break; //@line 62 "_localemodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 62 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 62 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _fixup_ulcase() {
    var __stackBase__  = STACKTOP; STACKTOP += 280; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 280);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $mods=__stackBase__;
        var $strop=__stackBase__+4;
        var $string=__stackBase__+8;
        var $ulo=__stackBase__+12;
        var $ul=__stackBase__+16;
        var $n=__stackBase__+272;
        var $c=__stackBase__+276;
        var $_alloca_point_=0;
        var $0=_PyImport_GetModuleDict(); //@line 100 "_localemodule.c"
        HEAP[$mods]=$0; //@line 100 "_localemodule.c"
        var $1=HEAP[$mods]; //@line 101 "_localemodule.c"
        var $2=($1)==0; //@line 101 "_localemodule.c"
        if ($2) { __label__ = 41; break; } else { __label__ = 1; break; } //@line 101 "_localemodule.c"
      case 1: // $bb
        var $3=HEAP[$mods]; //@line 103 "_localemodule.c"
        var $4=_PyDict_GetItemString($3, ((__str)&4294967295)); //@line 103 "_localemodule.c"
        HEAP[$string]=$4; //@line 103 "_localemodule.c"
        var $5=HEAP[$string]; //@line 104 "_localemodule.c"
        var $6=($5)!=0; //@line 104 "_localemodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 104 "_localemodule.c"
      case 2: // $bb1
        var $7=HEAP[$string]; //@line 105 "_localemodule.c"
        var $8=_PyModule_GetDict($7); //@line 105 "_localemodule.c"
        HEAP[$string]=$8; //@line 105 "_localemodule.c"
        __label__ = 3; break; //@line 105 "_localemodule.c"
      case 3: // $bb2
        var $9=HEAP[$mods]; //@line 106 "_localemodule.c"
        var $10=_PyDict_GetItemString($9, ((__str1)&4294967295)); //@line 106 "_localemodule.c"
        HEAP[$strop]=$10; //@line 106 "_localemodule.c"
        var $11=HEAP[$strop]; //@line 107 "_localemodule.c"
        var $12=($11)!=0; //@line 107 "_localemodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 107 "_localemodule.c"
      case 4: // $bb3
        var $13=HEAP[$strop]; //@line 108 "_localemodule.c"
        var $14=_PyModule_GetDict($13); //@line 108 "_localemodule.c"
        HEAP[$strop]=$14; //@line 108 "_localemodule.c"
        __label__ = 5; break; //@line 108 "_localemodule.c"
      case 5: // $bb4
        var $15=HEAP[$string]; //@line 109 "_localemodule.c"
        var $16=($15)==0; //@line 109 "_localemodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 109 "_localemodule.c"
      case 6: // $bb5
        var $17=HEAP[$strop]; //@line 109 "_localemodule.c"
        var $18=($17)==0; //@line 109 "_localemodule.c"
        if ($18) { __label__ = 41; break; } else { __label__ = 7; break; } //@line 109 "_localemodule.c"
      case 7: // $bb6
        HEAP[$n]=0; //@line 113 "_localemodule.c"
        HEAP[$c]=0; //@line 114 "_localemodule.c"
        __label__ = 11; break; //@line 114 "_localemodule.c"
      case 8: // $bb7
        var $19=___ctype_b_loc(); //@line 115 "_localemodule.c"
        var $20=HEAP[$19]; //@line 115 "_localemodule.c"
        var $21=HEAP[$c]; //@line 115 "_localemodule.c"
        var $22=(($20+2*$21)&4294967295); //@line 115 "_localemodule.c"
        var $23=HEAP[$22]; //@line 115 "_localemodule.c"
        var $24=unSign(($23), 16, 0); //@line 115 "_localemodule.c"
        var $25=($24) & 256; //@line 115 "_localemodule.c"
        var $26=((($25))|0)!=0; //@line 115 "_localemodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 115 "_localemodule.c"
      case 9: // $bb8
        var $27=HEAP[$n]; //@line 116 "_localemodule.c"
        var $28=HEAP[$c]; //@line 116 "_localemodule.c"
        var $29=((($28)) & 255); //@line 116 "_localemodule.c"
        var $30=(($ul+$27)&4294967295); //@line 116 "_localemodule.c"
        HEAP[$30]=$29; //@line 116 "_localemodule.c"
        var $31=HEAP[$n]; //@line 116 "_localemodule.c"
        var $32=((($31) + 1)&4294967295); //@line 116 "_localemodule.c"
        HEAP[$n]=$32; //@line 116 "_localemodule.c"
        __label__ = 10; break; //@line 116 "_localemodule.c"
      case 10: // $bb9
        var $33=HEAP[$c]; //@line 114 "_localemodule.c"
        var $34=((($33) + 1)&4294967295); //@line 114 "_localemodule.c"
        HEAP[$c]=$34; //@line 114 "_localemodule.c"
        __label__ = 11; break; //@line 114 "_localemodule.c"
      case 11: // $bb10
        var $35=HEAP[$c]; //@line 114 "_localemodule.c"
        var $36=((($35))|0) <= 255; //@line 114 "_localemodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 114 "_localemodule.c"
      case 12: // $bb11
        var $ul12=$ul; //@line 118 "_localemodule.c"
        var $37=HEAP[$n]; //@line 118 "_localemodule.c"
        var $38=_PyString_FromStringAndSize($ul12, $37); //@line 118 "_localemodule.c"
        HEAP[$ulo]=$38; //@line 118 "_localemodule.c"
        var $39=HEAP[$ulo]; //@line 119 "_localemodule.c"
        var $40=($39)==0; //@line 119 "_localemodule.c"
        if ($40) { __label__ = 41; break; } else { __label__ = 13; break; } //@line 119 "_localemodule.c"
      case 13: // $bb14
        var $41=HEAP[$string]; //@line 121 "_localemodule.c"
        var $42=($41)!=0; //@line 121 "_localemodule.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 121 "_localemodule.c"
      case 14: // $bb15
        var $43=HEAP[$string]; //@line 122 "_localemodule.c"
        var $44=HEAP[$ulo]; //@line 122 "_localemodule.c"
        var $45=_PyDict_SetItemString($43, ((__str2)&4294967295), $44); //@line 122 "_localemodule.c"
        __label__ = 15; break; //@line 122 "_localemodule.c"
      case 15: // $bb16
        var $46=HEAP[$strop]; //@line 123 "_localemodule.c"
        var $47=($46)!=0; //@line 123 "_localemodule.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 123 "_localemodule.c"
      case 16: // $bb17
        var $48=HEAP[$strop]; //@line 124 "_localemodule.c"
        var $49=HEAP[$ulo]; //@line 124 "_localemodule.c"
        var $50=_PyDict_SetItemString($48, ((__str2)&4294967295), $49); //@line 124 "_localemodule.c"
        __label__ = 17; break; //@line 124 "_localemodule.c"
      case 17: // $bb18
        var $51=HEAP[$ulo]; //@line 125 "_localemodule.c"
        var $52=(($51)&4294967295); //@line 125 "_localemodule.c"
        var $53=HEAP[$52]; //@line 125 "_localemodule.c"
        var $54=((($53) - 1)&4294967295); //@line 125 "_localemodule.c"
        var $55=HEAP[$ulo]; //@line 125 "_localemodule.c"
        var $56=(($55)&4294967295); //@line 125 "_localemodule.c"
        HEAP[$56]=$54; //@line 125 "_localemodule.c"
        var $57=HEAP[$ulo]; //@line 125 "_localemodule.c"
        var $58=(($57)&4294967295); //@line 125 "_localemodule.c"
        var $59=HEAP[$58]; //@line 125 "_localemodule.c"
        var $60=((($59))|0)==0; //@line 125 "_localemodule.c"
        if ($60) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 125 "_localemodule.c"
      case 18: // $bb19
        var $61=HEAP[$ulo]; //@line 125 "_localemodule.c"
        var $62=(($61+4)&4294967295); //@line 125 "_localemodule.c"
        var $63=HEAP[$62]; //@line 125 "_localemodule.c"
        var $64=(($63+24)&4294967295); //@line 125 "_localemodule.c"
        var $65=HEAP[$64]; //@line 125 "_localemodule.c"
        var $66=HEAP[$ulo]; //@line 125 "_localemodule.c"
        FUNCTION_TABLE[$65]($66); //@line 125 "_localemodule.c"
        __label__ = 19; break; //@line 125 "_localemodule.c"
      case 19: // $bb20
        HEAP[$n]=0; //@line 128 "_localemodule.c"
        HEAP[$c]=0; //@line 129 "_localemodule.c"
        __label__ = 23; break; //@line 129 "_localemodule.c"
      case 20: // $bb21
        var $67=___ctype_b_loc(); //@line 130 "_localemodule.c"
        var $68=HEAP[$67]; //@line 130 "_localemodule.c"
        var $69=HEAP[$c]; //@line 130 "_localemodule.c"
        var $70=(($68+2*$69)&4294967295); //@line 130 "_localemodule.c"
        var $71=HEAP[$70]; //@line 130 "_localemodule.c"
        var $72=unSign(($71), 16, 0); //@line 130 "_localemodule.c"
        var $73=($72) & 512; //@line 130 "_localemodule.c"
        var $74=((($73))|0)!=0; //@line 130 "_localemodule.c"
        if ($74) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 130 "_localemodule.c"
      case 21: // $bb22
        var $75=HEAP[$n]; //@line 131 "_localemodule.c"
        var $76=HEAP[$c]; //@line 131 "_localemodule.c"
        var $77=((($76)) & 255); //@line 131 "_localemodule.c"
        var $78=(($ul+$75)&4294967295); //@line 131 "_localemodule.c"
        HEAP[$78]=$77; //@line 131 "_localemodule.c"
        var $79=HEAP[$n]; //@line 131 "_localemodule.c"
        var $80=((($79) + 1)&4294967295); //@line 131 "_localemodule.c"
        HEAP[$n]=$80; //@line 131 "_localemodule.c"
        __label__ = 22; break; //@line 131 "_localemodule.c"
      case 22: // $bb23
        var $81=HEAP[$c]; //@line 129 "_localemodule.c"
        var $82=((($81) + 1)&4294967295); //@line 129 "_localemodule.c"
        HEAP[$c]=$82; //@line 129 "_localemodule.c"
        __label__ = 23; break; //@line 129 "_localemodule.c"
      case 23: // $bb24
        var $83=HEAP[$c]; //@line 129 "_localemodule.c"
        var $84=((($83))|0) <= 255; //@line 129 "_localemodule.c"
        if ($84) { __label__ = 20; break; } else { __label__ = 24; break; } //@line 129 "_localemodule.c"
      case 24: // $bb25
        var $ul26=$ul; //@line 133 "_localemodule.c"
        var $85=HEAP[$n]; //@line 133 "_localemodule.c"
        var $86=_PyString_FromStringAndSize($ul26, $85); //@line 133 "_localemodule.c"
        HEAP[$ulo]=$86; //@line 133 "_localemodule.c"
        var $87=HEAP[$ulo]; //@line 134 "_localemodule.c"
        var $88=($87)==0; //@line 134 "_localemodule.c"
        if ($88) { __label__ = 41; break; } else { __label__ = 25; break; } //@line 134 "_localemodule.c"
      case 25: // $bb28
        var $89=HEAP[$string]; //@line 136 "_localemodule.c"
        var $90=($89)!=0; //@line 136 "_localemodule.c"
        if ($90) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 136 "_localemodule.c"
      case 26: // $bb29
        var $91=HEAP[$string]; //@line 137 "_localemodule.c"
        var $92=HEAP[$ulo]; //@line 137 "_localemodule.c"
        var $93=_PyDict_SetItemString($91, ((__str3)&4294967295), $92); //@line 137 "_localemodule.c"
        __label__ = 27; break; //@line 137 "_localemodule.c"
      case 27: // $bb30
        var $94=HEAP[$strop]; //@line 138 "_localemodule.c"
        var $95=($94)!=0; //@line 138 "_localemodule.c"
        if ($95) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 138 "_localemodule.c"
      case 28: // $bb31
        var $96=HEAP[$strop]; //@line 139 "_localemodule.c"
        var $97=HEAP[$ulo]; //@line 139 "_localemodule.c"
        var $98=_PyDict_SetItemString($96, ((__str3)&4294967295), $97); //@line 139 "_localemodule.c"
        __label__ = 29; break; //@line 139 "_localemodule.c"
      case 29: // $bb32
        var $99=HEAP[$ulo]; //@line 140 "_localemodule.c"
        var $100=(($99)&4294967295); //@line 140 "_localemodule.c"
        var $101=HEAP[$100]; //@line 140 "_localemodule.c"
        var $102=((($101) - 1)&4294967295); //@line 140 "_localemodule.c"
        var $103=HEAP[$ulo]; //@line 140 "_localemodule.c"
        var $104=(($103)&4294967295); //@line 140 "_localemodule.c"
        HEAP[$104]=$102; //@line 140 "_localemodule.c"
        var $105=HEAP[$ulo]; //@line 140 "_localemodule.c"
        var $106=(($105)&4294967295); //@line 140 "_localemodule.c"
        var $107=HEAP[$106]; //@line 140 "_localemodule.c"
        var $108=((($107))|0)==0; //@line 140 "_localemodule.c"
        if ($108) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 140 "_localemodule.c"
      case 30: // $bb33
        var $109=HEAP[$ulo]; //@line 140 "_localemodule.c"
        var $110=(($109+4)&4294967295); //@line 140 "_localemodule.c"
        var $111=HEAP[$110]; //@line 140 "_localemodule.c"
        var $112=(($111+24)&4294967295); //@line 140 "_localemodule.c"
        var $113=HEAP[$112]; //@line 140 "_localemodule.c"
        var $114=HEAP[$ulo]; //@line 140 "_localemodule.c"
        FUNCTION_TABLE[$113]($114); //@line 140 "_localemodule.c"
        __label__ = 31; break; //@line 140 "_localemodule.c"
      case 31: // $bb34
        HEAP[$n]=0; //@line 143 "_localemodule.c"
        HEAP[$c]=0; //@line 144 "_localemodule.c"
        __label__ = 35; break; //@line 144 "_localemodule.c"
      case 32: // $bb35
        var $115=___ctype_b_loc(); //@line 145 "_localemodule.c"
        var $116=HEAP[$115]; //@line 145 "_localemodule.c"
        var $117=HEAP[$c]; //@line 145 "_localemodule.c"
        var $118=(($116+2*$117)&4294967295); //@line 145 "_localemodule.c"
        var $119=HEAP[$118]; //@line 145 "_localemodule.c"
        var $120=unSign(($119), 16, 0); //@line 145 "_localemodule.c"
        var $121=($120) & 1024; //@line 145 "_localemodule.c"
        var $122=((($121))|0)!=0; //@line 145 "_localemodule.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 145 "_localemodule.c"
      case 33: // $bb36
        var $123=HEAP[$n]; //@line 146 "_localemodule.c"
        var $124=HEAP[$c]; //@line 146 "_localemodule.c"
        var $125=((($124)) & 255); //@line 146 "_localemodule.c"
        var $126=(($ul+$123)&4294967295); //@line 146 "_localemodule.c"
        HEAP[$126]=$125; //@line 146 "_localemodule.c"
        var $127=HEAP[$n]; //@line 146 "_localemodule.c"
        var $128=((($127) + 1)&4294967295); //@line 146 "_localemodule.c"
        HEAP[$n]=$128; //@line 146 "_localemodule.c"
        __label__ = 34; break; //@line 146 "_localemodule.c"
      case 34: // $bb37
        var $129=HEAP[$c]; //@line 144 "_localemodule.c"
        var $130=((($129) + 1)&4294967295); //@line 144 "_localemodule.c"
        HEAP[$c]=$130; //@line 144 "_localemodule.c"
        __label__ = 35; break; //@line 144 "_localemodule.c"
      case 35: // $bb38
        var $131=HEAP[$c]; //@line 144 "_localemodule.c"
        var $132=((($131))|0) <= 255; //@line 144 "_localemodule.c"
        if ($132) { __label__ = 32; break; } else { __label__ = 36; break; } //@line 144 "_localemodule.c"
      case 36: // $bb39
        var $ul40=$ul; //@line 148 "_localemodule.c"
        var $133=HEAP[$n]; //@line 148 "_localemodule.c"
        var $134=_PyString_FromStringAndSize($ul40, $133); //@line 148 "_localemodule.c"
        HEAP[$ulo]=$134; //@line 148 "_localemodule.c"
        var $135=HEAP[$ulo]; //@line 149 "_localemodule.c"
        var $136=($135)==0; //@line 149 "_localemodule.c"
        if ($136) { __label__ = 41; break; } else { __label__ = 37; break; } //@line 149 "_localemodule.c"
      case 37: // $bb42
        var $137=HEAP[$string]; //@line 151 "_localemodule.c"
        var $138=($137)!=0; //@line 151 "_localemodule.c"
        if ($138) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 151 "_localemodule.c"
      case 38: // $bb43
        var $139=HEAP[$string]; //@line 152 "_localemodule.c"
        var $140=HEAP[$ulo]; //@line 152 "_localemodule.c"
        var $141=_PyDict_SetItemString($139, ((__str4)&4294967295), $140); //@line 152 "_localemodule.c"
        __label__ = 39; break; //@line 152 "_localemodule.c"
      case 39: // $bb44
        var $142=HEAP[$ulo]; //@line 153 "_localemodule.c"
        var $143=(($142)&4294967295); //@line 153 "_localemodule.c"
        var $144=HEAP[$143]; //@line 153 "_localemodule.c"
        var $145=((($144) - 1)&4294967295); //@line 153 "_localemodule.c"
        var $146=HEAP[$ulo]; //@line 153 "_localemodule.c"
        var $147=(($146)&4294967295); //@line 153 "_localemodule.c"
        HEAP[$147]=$145; //@line 153 "_localemodule.c"
        var $148=HEAP[$ulo]; //@line 153 "_localemodule.c"
        var $149=(($148)&4294967295); //@line 153 "_localemodule.c"
        var $150=HEAP[$149]; //@line 153 "_localemodule.c"
        var $151=((($150))|0)==0; //@line 153 "_localemodule.c"
        if ($151) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 153 "_localemodule.c"
      case 40: // $bb45
        var $152=HEAP[$ulo]; //@line 153 "_localemodule.c"
        var $153=(($152+4)&4294967295); //@line 153 "_localemodule.c"
        var $154=HEAP[$153]; //@line 153 "_localemodule.c"
        var $155=(($154+24)&4294967295); //@line 153 "_localemodule.c"
        var $156=HEAP[$155]; //@line 153 "_localemodule.c"
        var $157=HEAP[$ulo]; //@line 153 "_localemodule.c"
        FUNCTION_TABLE[$156]($157); //@line 153 "_localemodule.c"
        __label__ = 41; break; //@line 153 "_localemodule.c"
      case 41: // $bb46
        __label__ = 42; break; //@line 102 "_localemodule.c"
      case 42: // $return
        STACKTOP = __stackBase__;
        return; //@line 102 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_setlocale($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $category=__stackBase__+16;
        var $locale=__stackBase__+20;
        var $result=__stackBase__+24;
        var $result_object=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$locale]=0; //@line 160 "_localemodule.c"
        var $1=HEAP[$args_addr]; //@line 163 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str5)&4294967295), $category, $locale); //@line 163 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 163 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 163 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 164 "_localemodule.c"
        __label__ = 15; break; //@line 164 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$locale]; //@line 174 "_localemodule.c"
        var $5=($4)!=0; //@line 174 "_localemodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 174 "_localemodule.c"
      case 3: // $bb2
        var $6=HEAP[$locale]; //@line 176 "_localemodule.c"
        var $7=HEAP[$category]; //@line 176 "_localemodule.c"
        var $8=_setlocale($7, $6); //@line 176 "_localemodule.c"
        HEAP[$result]=$8; //@line 176 "_localemodule.c"
        var $9=HEAP[$result]; //@line 177 "_localemodule.c"
        var $10=($9)==0; //@line 177 "_localemodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 177 "_localemodule.c"
      case 4: // $bb3
        var $11=HEAP[_Error]; //@line 179 "_localemodule.c"
        _PyErr_SetString($11, ((__str6)&4294967295)); //@line 179 "_localemodule.c"
        HEAP[$0]=0; //@line 180 "_localemodule.c"
        __label__ = 15; break; //@line 180 "_localemodule.c"
      case 5: // $bb4
        var $12=HEAP[$result]; //@line 182 "_localemodule.c"
        var $13=_PyString_FromString($12); //@line 182 "_localemodule.c"
        HEAP[$result_object]=$13; //@line 182 "_localemodule.c"
        var $14=HEAP[$result_object]; //@line 183 "_localemodule.c"
        var $15=($14)==0; //@line 183 "_localemodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 183 "_localemodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 184 "_localemodule.c"
        __label__ = 15; break; //@line 184 "_localemodule.c"
      case 7: // $bb6
        var $16=HEAP[$category]; //@line 186 "_localemodule.c"
        var $17=((($16))|0)==0; //@line 186 "_localemodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 186 "_localemodule.c"
      case 8: // $bb7
        var $18=HEAP[$category]; //@line 186 "_localemodule.c"
        var $19=((($18))|0)==6; //@line 186 "_localemodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 186 "_localemodule.c"
      case 9: // $bb8
        _fixup_ulcase(); //@line 187 "_localemodule.c"
        __label__ = 10; break; //@line 187 "_localemodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 189 "_localemodule.c"
        __label__ = 14; break; //@line 189 "_localemodule.c"
      case 11: // $bb10
        var $20=HEAP[$category]; //@line 192 "_localemodule.c"
        var $21=_setlocale($20, 0); //@line 192 "_localemodule.c"
        HEAP[$result]=$21; //@line 192 "_localemodule.c"
        var $22=HEAP[$result]; //@line 193 "_localemodule.c"
        var $23=($22)==0; //@line 193 "_localemodule.c"
        if ($23) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 193 "_localemodule.c"
      case 12: // $bb11
        var $24=HEAP[_Error]; //@line 194 "_localemodule.c"
        _PyErr_SetString($24, ((__str7)&4294967295)); //@line 194 "_localemodule.c"
        HEAP[$0]=0; //@line 195 "_localemodule.c"
        __label__ = 15; break; //@line 195 "_localemodule.c"
      case 13: // $bb12
        var $25=HEAP[$result]; //@line 197 "_localemodule.c"
        var $26=_PyString_FromString($25); //@line 197 "_localemodule.c"
        HEAP[$result_object]=$26; //@line 197 "_localemodule.c"
        __label__ = 14; break; //@line 197 "_localemodule.c"
      case 14: // $bb13
        var $27=HEAP[$result_object]; //@line 199 "_localemodule.c"
        HEAP[$0]=$27; //@line 199 "_localemodule.c"
        __label__ = 15; break; //@line 199 "_localemodule.c"
      case 15: // $bb14
        var $28=HEAP[$0]; //@line 164 "_localemodule.c"
        HEAP[$retval]=$28; //@line 164 "_localemodule.c"
        __label__ = 16; break; //@line 164 "_localemodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 164 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 164 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_localeconv($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $result=__stackBase__+12;
        var $l=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyDict_New(); //@line 212 "_localemodule.c"
        HEAP[$result]=$1; //@line 212 "_localemodule.c"
        var $2=HEAP[$result]; //@line 213 "_localemodule.c"
        var $3=($2)==0; //@line 213 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 213 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 214 "_localemodule.c"
        __label__ = 82; break; //@line 214 "_localemodule.c"
      case 2: // $bb1
        var $4=_localeconv(); //@line 217 "_localemodule.c"
        HEAP[$l]=$4; //@line 217 "_localemodule.c"
        var $5=HEAP[$l]; //@line 235 "_localemodule.c"
        var $6=(($5)&4294967295); //@line 235 "_localemodule.c"
        var $7=HEAP[$6]; //@line 235 "_localemodule.c"
        var $8=_PyString_FromString($7); //@line 235 "_localemodule.c"
        HEAP[$x]=$8; //@line 235 "_localemodule.c"
        var $9=HEAP[$x]; //@line 235 "_localemodule.c"
        var $10=($9)==0; //@line 235 "_localemodule.c"
        if ($10) { __label__ = 75; break; } else { __label__ = 3; break; } //@line 235 "_localemodule.c"
      case 3: // $bb2
        var $11=HEAP[$result]; //@line 235 "_localemodule.c"
        var $12=HEAP[$x]; //@line 235 "_localemodule.c"
        var $13=_PyDict_SetItemString($11, ((__str8)&4294967295), $12); //@line 235 "_localemodule.c"
        var $14=HEAP[$x]; //@line 235 "_localemodule.c"
        var $15=($14)!=0; //@line 235 "_localemodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 235 "_localemodule.c"
      case 4: // $bb3
        var $16=HEAP[$x]; //@line 235 "_localemodule.c"
        var $17=(($16)&4294967295); //@line 235 "_localemodule.c"
        var $18=HEAP[$17]; //@line 235 "_localemodule.c"
        var $19=((($18) - 1)&4294967295); //@line 235 "_localemodule.c"
        var $20=HEAP[$x]; //@line 235 "_localemodule.c"
        var $21=(($20)&4294967295); //@line 235 "_localemodule.c"
        HEAP[$21]=$19; //@line 235 "_localemodule.c"
        var $22=HEAP[$x]; //@line 235 "_localemodule.c"
        var $23=(($22)&4294967295); //@line 235 "_localemodule.c"
        var $24=HEAP[$23]; //@line 235 "_localemodule.c"
        var $25=((($24))|0)==0; //@line 235 "_localemodule.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 235 "_localemodule.c"
      case 5: // $bb4
        var $26=HEAP[$x]; //@line 235 "_localemodule.c"
        var $27=(($26+4)&4294967295); //@line 235 "_localemodule.c"
        var $28=HEAP[$27]; //@line 235 "_localemodule.c"
        var $29=(($28+24)&4294967295); //@line 235 "_localemodule.c"
        var $30=HEAP[$29]; //@line 235 "_localemodule.c"
        var $31=HEAP[$x]; //@line 235 "_localemodule.c"
        FUNCTION_TABLE[$30]($31); //@line 235 "_localemodule.c"
        __label__ = 6; break; //@line 235 "_localemodule.c"
      case 6: // $bb5
        var $32=HEAP[$l]; //@line 236 "_localemodule.c"
        var $33=(($32+4)&4294967295); //@line 236 "_localemodule.c"
        var $34=HEAP[$33]; //@line 236 "_localemodule.c"
        var $35=_PyString_FromString($34); //@line 236 "_localemodule.c"
        HEAP[$x]=$35; //@line 236 "_localemodule.c"
        var $36=HEAP[$x]; //@line 236 "_localemodule.c"
        var $37=($36)==0; //@line 236 "_localemodule.c"
        if ($37) { __label__ = 75; break; } else { __label__ = 7; break; } //@line 236 "_localemodule.c"
      case 7: // $bb6
        var $38=HEAP[$result]; //@line 236 "_localemodule.c"
        var $39=HEAP[$x]; //@line 236 "_localemodule.c"
        var $40=_PyDict_SetItemString($38, ((__str9)&4294967295), $39); //@line 236 "_localemodule.c"
        var $41=HEAP[$x]; //@line 236 "_localemodule.c"
        var $42=($41)!=0; //@line 236 "_localemodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 236 "_localemodule.c"
      case 8: // $bb7
        var $43=HEAP[$x]; //@line 236 "_localemodule.c"
        var $44=(($43)&4294967295); //@line 236 "_localemodule.c"
        var $45=HEAP[$44]; //@line 236 "_localemodule.c"
        var $46=((($45) - 1)&4294967295); //@line 236 "_localemodule.c"
        var $47=HEAP[$x]; //@line 236 "_localemodule.c"
        var $48=(($47)&4294967295); //@line 236 "_localemodule.c"
        HEAP[$48]=$46; //@line 236 "_localemodule.c"
        var $49=HEAP[$x]; //@line 236 "_localemodule.c"
        var $50=(($49)&4294967295); //@line 236 "_localemodule.c"
        var $51=HEAP[$50]; //@line 236 "_localemodule.c"
        var $52=((($51))|0)==0; //@line 236 "_localemodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 236 "_localemodule.c"
      case 9: // $bb8
        var $53=HEAP[$x]; //@line 236 "_localemodule.c"
        var $54=(($53+4)&4294967295); //@line 236 "_localemodule.c"
        var $55=HEAP[$54]; //@line 236 "_localemodule.c"
        var $56=(($55+24)&4294967295); //@line 236 "_localemodule.c"
        var $57=HEAP[$56]; //@line 236 "_localemodule.c"
        var $58=HEAP[$x]; //@line 236 "_localemodule.c"
        FUNCTION_TABLE[$57]($58); //@line 236 "_localemodule.c"
        __label__ = 10; break; //@line 236 "_localemodule.c"
      case 10: // $bb9
        var $59=HEAP[$l]; //@line 237 "_localemodule.c"
        var $60=(($59+8)&4294967295); //@line 237 "_localemodule.c"
        var $61=HEAP[$60]; //@line 237 "_localemodule.c"
        var $62=_copy_grouping($61); //@line 237 "_localemodule.c"
        HEAP[$x]=$62; //@line 237 "_localemodule.c"
        var $63=HEAP[$x]; //@line 238 "_localemodule.c"
        var $64=($63)==0; //@line 238 "_localemodule.c"
        if ($64) { __label__ = 75; break; } else { __label__ = 11; break; } //@line 238 "_localemodule.c"
      case 11: // $bb10
        var $65=HEAP[$result]; //@line 240 "_localemodule.c"
        var $66=HEAP[$x]; //@line 240 "_localemodule.c"
        var $67=_PyDict_SetItemString($65, ((__str10)&4294967295), $66); //@line 240 "_localemodule.c"
        var $68=HEAP[$x]; //@line 241 "_localemodule.c"
        var $69=($68)!=0; //@line 241 "_localemodule.c"
        if ($69) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 241 "_localemodule.c"
      case 12: // $bb11
        var $70=HEAP[$x]; //@line 241 "_localemodule.c"
        var $71=(($70)&4294967295); //@line 241 "_localemodule.c"
        var $72=HEAP[$71]; //@line 241 "_localemodule.c"
        var $73=((($72) - 1)&4294967295); //@line 241 "_localemodule.c"
        var $74=HEAP[$x]; //@line 241 "_localemodule.c"
        var $75=(($74)&4294967295); //@line 241 "_localemodule.c"
        HEAP[$75]=$73; //@line 241 "_localemodule.c"
        var $76=HEAP[$x]; //@line 241 "_localemodule.c"
        var $77=(($76)&4294967295); //@line 241 "_localemodule.c"
        var $78=HEAP[$77]; //@line 241 "_localemodule.c"
        var $79=((($78))|0)==0; //@line 241 "_localemodule.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 241 "_localemodule.c"
      case 13: // $bb12
        var $80=HEAP[$x]; //@line 241 "_localemodule.c"
        var $81=(($80+4)&4294967295); //@line 241 "_localemodule.c"
        var $82=HEAP[$81]; //@line 241 "_localemodule.c"
        var $83=(($82+24)&4294967295); //@line 241 "_localemodule.c"
        var $84=HEAP[$83]; //@line 241 "_localemodule.c"
        var $85=HEAP[$x]; //@line 241 "_localemodule.c"
        FUNCTION_TABLE[$84]($85); //@line 241 "_localemodule.c"
        __label__ = 14; break; //@line 241 "_localemodule.c"
      case 14: // $bb13
        var $86=HEAP[$l]; //@line 244 "_localemodule.c"
        var $87=(($86+12)&4294967295); //@line 244 "_localemodule.c"
        var $88=HEAP[$87]; //@line 244 "_localemodule.c"
        var $89=_PyString_FromString($88); //@line 244 "_localemodule.c"
        HEAP[$x]=$89; //@line 244 "_localemodule.c"
        var $90=HEAP[$x]; //@line 244 "_localemodule.c"
        var $91=($90)==0; //@line 244 "_localemodule.c"
        if ($91) { __label__ = 75; break; } else { __label__ = 15; break; } //@line 244 "_localemodule.c"
      case 15: // $bb14
        var $92=HEAP[$result]; //@line 244 "_localemodule.c"
        var $93=HEAP[$x]; //@line 244 "_localemodule.c"
        var $94=_PyDict_SetItemString($92, ((__str11)&4294967295), $93); //@line 244 "_localemodule.c"
        var $95=HEAP[$x]; //@line 244 "_localemodule.c"
        var $96=($95)!=0; //@line 244 "_localemodule.c"
        if ($96) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 244 "_localemodule.c"
      case 16: // $bb15
        var $97=HEAP[$x]; //@line 244 "_localemodule.c"
        var $98=(($97)&4294967295); //@line 244 "_localemodule.c"
        var $99=HEAP[$98]; //@line 244 "_localemodule.c"
        var $100=((($99) - 1)&4294967295); //@line 244 "_localemodule.c"
        var $101=HEAP[$x]; //@line 244 "_localemodule.c"
        var $102=(($101)&4294967295); //@line 244 "_localemodule.c"
        HEAP[$102]=$100; //@line 244 "_localemodule.c"
        var $103=HEAP[$x]; //@line 244 "_localemodule.c"
        var $104=(($103)&4294967295); //@line 244 "_localemodule.c"
        var $105=HEAP[$104]; //@line 244 "_localemodule.c"
        var $106=((($105))|0)==0; //@line 244 "_localemodule.c"
        if ($106) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 244 "_localemodule.c"
      case 17: // $bb16
        var $107=HEAP[$x]; //@line 244 "_localemodule.c"
        var $108=(($107+4)&4294967295); //@line 244 "_localemodule.c"
        var $109=HEAP[$108]; //@line 244 "_localemodule.c"
        var $110=(($109+24)&4294967295); //@line 244 "_localemodule.c"
        var $111=HEAP[$110]; //@line 244 "_localemodule.c"
        var $112=HEAP[$x]; //@line 244 "_localemodule.c"
        FUNCTION_TABLE[$111]($112); //@line 244 "_localemodule.c"
        __label__ = 18; break; //@line 244 "_localemodule.c"
      case 18: // $bb17
        var $113=HEAP[$l]; //@line 245 "_localemodule.c"
        var $114=(($113+16)&4294967295); //@line 245 "_localemodule.c"
        var $115=HEAP[$114]; //@line 245 "_localemodule.c"
        var $116=_PyString_FromString($115); //@line 245 "_localemodule.c"
        HEAP[$x]=$116; //@line 245 "_localemodule.c"
        var $117=HEAP[$x]; //@line 245 "_localemodule.c"
        var $118=($117)==0; //@line 245 "_localemodule.c"
        if ($118) { __label__ = 75; break; } else { __label__ = 19; break; } //@line 245 "_localemodule.c"
      case 19: // $bb18
        var $119=HEAP[$result]; //@line 245 "_localemodule.c"
        var $120=HEAP[$x]; //@line 245 "_localemodule.c"
        var $121=_PyDict_SetItemString($119, ((__str12)&4294967295), $120); //@line 245 "_localemodule.c"
        var $122=HEAP[$x]; //@line 245 "_localemodule.c"
        var $123=($122)!=0; //@line 245 "_localemodule.c"
        if ($123) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 245 "_localemodule.c"
      case 20: // $bb19
        var $124=HEAP[$x]; //@line 245 "_localemodule.c"
        var $125=(($124)&4294967295); //@line 245 "_localemodule.c"
        var $126=HEAP[$125]; //@line 245 "_localemodule.c"
        var $127=((($126) - 1)&4294967295); //@line 245 "_localemodule.c"
        var $128=HEAP[$x]; //@line 245 "_localemodule.c"
        var $129=(($128)&4294967295); //@line 245 "_localemodule.c"
        HEAP[$129]=$127; //@line 245 "_localemodule.c"
        var $130=HEAP[$x]; //@line 245 "_localemodule.c"
        var $131=(($130)&4294967295); //@line 245 "_localemodule.c"
        var $132=HEAP[$131]; //@line 245 "_localemodule.c"
        var $133=((($132))|0)==0; //@line 245 "_localemodule.c"
        if ($133) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 245 "_localemodule.c"
      case 21: // $bb20
        var $134=HEAP[$x]; //@line 245 "_localemodule.c"
        var $135=(($134+4)&4294967295); //@line 245 "_localemodule.c"
        var $136=HEAP[$135]; //@line 245 "_localemodule.c"
        var $137=(($136+24)&4294967295); //@line 245 "_localemodule.c"
        var $138=HEAP[$137]; //@line 245 "_localemodule.c"
        var $139=HEAP[$x]; //@line 245 "_localemodule.c"
        FUNCTION_TABLE[$138]($139); //@line 245 "_localemodule.c"
        __label__ = 22; break; //@line 245 "_localemodule.c"
      case 22: // $bb21
        var $140=HEAP[$l]; //@line 246 "_localemodule.c"
        var $141=(($140+20)&4294967295); //@line 246 "_localemodule.c"
        var $142=HEAP[$141]; //@line 246 "_localemodule.c"
        var $143=_PyString_FromString($142); //@line 246 "_localemodule.c"
        HEAP[$x]=$143; //@line 246 "_localemodule.c"
        var $144=HEAP[$x]; //@line 246 "_localemodule.c"
        var $145=($144)==0; //@line 246 "_localemodule.c"
        if ($145) { __label__ = 75; break; } else { __label__ = 23; break; } //@line 246 "_localemodule.c"
      case 23: // $bb22
        var $146=HEAP[$result]; //@line 246 "_localemodule.c"
        var $147=HEAP[$x]; //@line 246 "_localemodule.c"
        var $148=_PyDict_SetItemString($146, ((__str13)&4294967295), $147); //@line 246 "_localemodule.c"
        var $149=HEAP[$x]; //@line 246 "_localemodule.c"
        var $150=($149)!=0; //@line 246 "_localemodule.c"
        if ($150) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 246 "_localemodule.c"
      case 24: // $bb23
        var $151=HEAP[$x]; //@line 246 "_localemodule.c"
        var $152=(($151)&4294967295); //@line 246 "_localemodule.c"
        var $153=HEAP[$152]; //@line 246 "_localemodule.c"
        var $154=((($153) - 1)&4294967295); //@line 246 "_localemodule.c"
        var $155=HEAP[$x]; //@line 246 "_localemodule.c"
        var $156=(($155)&4294967295); //@line 246 "_localemodule.c"
        HEAP[$156]=$154; //@line 246 "_localemodule.c"
        var $157=HEAP[$x]; //@line 246 "_localemodule.c"
        var $158=(($157)&4294967295); //@line 246 "_localemodule.c"
        var $159=HEAP[$158]; //@line 246 "_localemodule.c"
        var $160=((($159))|0)==0; //@line 246 "_localemodule.c"
        if ($160) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 246 "_localemodule.c"
      case 25: // $bb24
        var $161=HEAP[$x]; //@line 246 "_localemodule.c"
        var $162=(($161+4)&4294967295); //@line 246 "_localemodule.c"
        var $163=HEAP[$162]; //@line 246 "_localemodule.c"
        var $164=(($163+24)&4294967295); //@line 246 "_localemodule.c"
        var $165=HEAP[$164]; //@line 246 "_localemodule.c"
        var $166=HEAP[$x]; //@line 246 "_localemodule.c"
        FUNCTION_TABLE[$165]($166); //@line 246 "_localemodule.c"
        __label__ = 26; break; //@line 246 "_localemodule.c"
      case 26: // $bb25
        var $167=HEAP[$l]; //@line 247 "_localemodule.c"
        var $168=(($167+24)&4294967295); //@line 247 "_localemodule.c"
        var $169=HEAP[$168]; //@line 247 "_localemodule.c"
        var $170=_PyString_FromString($169); //@line 247 "_localemodule.c"
        HEAP[$x]=$170; //@line 247 "_localemodule.c"
        var $171=HEAP[$x]; //@line 247 "_localemodule.c"
        var $172=($171)==0; //@line 247 "_localemodule.c"
        if ($172) { __label__ = 75; break; } else { __label__ = 27; break; } //@line 247 "_localemodule.c"
      case 27: // $bb26
        var $173=HEAP[$result]; //@line 247 "_localemodule.c"
        var $174=HEAP[$x]; //@line 247 "_localemodule.c"
        var $175=_PyDict_SetItemString($173, ((__str14)&4294967295), $174); //@line 247 "_localemodule.c"
        var $176=HEAP[$x]; //@line 247 "_localemodule.c"
        var $177=($176)!=0; //@line 247 "_localemodule.c"
        if ($177) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 247 "_localemodule.c"
      case 28: // $bb27
        var $178=HEAP[$x]; //@line 247 "_localemodule.c"
        var $179=(($178)&4294967295); //@line 247 "_localemodule.c"
        var $180=HEAP[$179]; //@line 247 "_localemodule.c"
        var $181=((($180) - 1)&4294967295); //@line 247 "_localemodule.c"
        var $182=HEAP[$x]; //@line 247 "_localemodule.c"
        var $183=(($182)&4294967295); //@line 247 "_localemodule.c"
        HEAP[$183]=$181; //@line 247 "_localemodule.c"
        var $184=HEAP[$x]; //@line 247 "_localemodule.c"
        var $185=(($184)&4294967295); //@line 247 "_localemodule.c"
        var $186=HEAP[$185]; //@line 247 "_localemodule.c"
        var $187=((($186))|0)==0; //@line 247 "_localemodule.c"
        if ($187) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 247 "_localemodule.c"
      case 29: // $bb28
        var $188=HEAP[$x]; //@line 247 "_localemodule.c"
        var $189=(($188+4)&4294967295); //@line 247 "_localemodule.c"
        var $190=HEAP[$189]; //@line 247 "_localemodule.c"
        var $191=(($190+24)&4294967295); //@line 247 "_localemodule.c"
        var $192=HEAP[$191]; //@line 247 "_localemodule.c"
        var $193=HEAP[$x]; //@line 247 "_localemodule.c"
        FUNCTION_TABLE[$192]($193); //@line 247 "_localemodule.c"
        __label__ = 30; break; //@line 247 "_localemodule.c"
      case 30: // $bb29
        var $194=HEAP[$l]; //@line 248 "_localemodule.c"
        var $195=(($194+28)&4294967295); //@line 248 "_localemodule.c"
        var $196=HEAP[$195]; //@line 248 "_localemodule.c"
        var $197=_copy_grouping($196); //@line 248 "_localemodule.c"
        HEAP[$x]=$197; //@line 248 "_localemodule.c"
        var $198=HEAP[$x]; //@line 249 "_localemodule.c"
        var $199=($198)==0; //@line 249 "_localemodule.c"
        if ($199) { __label__ = 75; break; } else { __label__ = 31; break; } //@line 249 "_localemodule.c"
      case 31: // $bb30
        var $200=HEAP[$result]; //@line 251 "_localemodule.c"
        var $201=HEAP[$x]; //@line 251 "_localemodule.c"
        var $202=_PyDict_SetItemString($200, ((__str15)&4294967295), $201); //@line 251 "_localemodule.c"
        var $203=HEAP[$x]; //@line 252 "_localemodule.c"
        var $204=($203)!=0; //@line 252 "_localemodule.c"
        if ($204) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 252 "_localemodule.c"
      case 32: // $bb31
        var $205=HEAP[$x]; //@line 252 "_localemodule.c"
        var $206=(($205)&4294967295); //@line 252 "_localemodule.c"
        var $207=HEAP[$206]; //@line 252 "_localemodule.c"
        var $208=((($207) - 1)&4294967295); //@line 252 "_localemodule.c"
        var $209=HEAP[$x]; //@line 252 "_localemodule.c"
        var $210=(($209)&4294967295); //@line 252 "_localemodule.c"
        HEAP[$210]=$208; //@line 252 "_localemodule.c"
        var $211=HEAP[$x]; //@line 252 "_localemodule.c"
        var $212=(($211)&4294967295); //@line 252 "_localemodule.c"
        var $213=HEAP[$212]; //@line 252 "_localemodule.c"
        var $214=((($213))|0)==0; //@line 252 "_localemodule.c"
        if ($214) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 252 "_localemodule.c"
      case 33: // $bb32
        var $215=HEAP[$x]; //@line 252 "_localemodule.c"
        var $216=(($215+4)&4294967295); //@line 252 "_localemodule.c"
        var $217=HEAP[$216]; //@line 252 "_localemodule.c"
        var $218=(($217+24)&4294967295); //@line 252 "_localemodule.c"
        var $219=HEAP[$218]; //@line 252 "_localemodule.c"
        var $220=HEAP[$x]; //@line 252 "_localemodule.c"
        FUNCTION_TABLE[$219]($220); //@line 252 "_localemodule.c"
        __label__ = 34; break; //@line 252 "_localemodule.c"
      case 34: // $bb33
        var $221=HEAP[$l]; //@line 253 "_localemodule.c"
        var $222=(($221+32)&4294967295); //@line 253 "_localemodule.c"
        var $223=HEAP[$222]; //@line 253 "_localemodule.c"
        var $224=_PyString_FromString($223); //@line 253 "_localemodule.c"
        HEAP[$x]=$224; //@line 253 "_localemodule.c"
        var $225=HEAP[$x]; //@line 253 "_localemodule.c"
        var $226=($225)==0; //@line 253 "_localemodule.c"
        if ($226) { __label__ = 75; break; } else { __label__ = 35; break; } //@line 253 "_localemodule.c"
      case 35: // $bb34
        var $227=HEAP[$result]; //@line 253 "_localemodule.c"
        var $228=HEAP[$x]; //@line 253 "_localemodule.c"
        var $229=_PyDict_SetItemString($227, ((__str16)&4294967295), $228); //@line 253 "_localemodule.c"
        var $230=HEAP[$x]; //@line 253 "_localemodule.c"
        var $231=($230)!=0; //@line 253 "_localemodule.c"
        if ($231) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 253 "_localemodule.c"
      case 36: // $bb35
        var $232=HEAP[$x]; //@line 253 "_localemodule.c"
        var $233=(($232)&4294967295); //@line 253 "_localemodule.c"
        var $234=HEAP[$233]; //@line 253 "_localemodule.c"
        var $235=((($234) - 1)&4294967295); //@line 253 "_localemodule.c"
        var $236=HEAP[$x]; //@line 253 "_localemodule.c"
        var $237=(($236)&4294967295); //@line 253 "_localemodule.c"
        HEAP[$237]=$235; //@line 253 "_localemodule.c"
        var $238=HEAP[$x]; //@line 253 "_localemodule.c"
        var $239=(($238)&4294967295); //@line 253 "_localemodule.c"
        var $240=HEAP[$239]; //@line 253 "_localemodule.c"
        var $241=((($240))|0)==0; //@line 253 "_localemodule.c"
        if ($241) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 253 "_localemodule.c"
      case 37: // $bb36
        var $242=HEAP[$x]; //@line 253 "_localemodule.c"
        var $243=(($242+4)&4294967295); //@line 253 "_localemodule.c"
        var $244=HEAP[$243]; //@line 253 "_localemodule.c"
        var $245=(($244+24)&4294967295); //@line 253 "_localemodule.c"
        var $246=HEAP[$245]; //@line 253 "_localemodule.c"
        var $247=HEAP[$x]; //@line 253 "_localemodule.c"
        FUNCTION_TABLE[$246]($247); //@line 253 "_localemodule.c"
        __label__ = 38; break; //@line 253 "_localemodule.c"
      case 38: // $bb37
        var $248=HEAP[$l]; //@line 254 "_localemodule.c"
        var $249=(($248+36)&4294967295); //@line 254 "_localemodule.c"
        var $250=HEAP[$249]; //@line 254 "_localemodule.c"
        var $251=_PyString_FromString($250); //@line 254 "_localemodule.c"
        HEAP[$x]=$251; //@line 254 "_localemodule.c"
        var $252=HEAP[$x]; //@line 254 "_localemodule.c"
        var $253=($252)==0; //@line 254 "_localemodule.c"
        if ($253) { __label__ = 75; break; } else { __label__ = 39; break; } //@line 254 "_localemodule.c"
      case 39: // $bb38
        var $254=HEAP[$result]; //@line 254 "_localemodule.c"
        var $255=HEAP[$x]; //@line 254 "_localemodule.c"
        var $256=_PyDict_SetItemString($254, ((__str17)&4294967295), $255); //@line 254 "_localemodule.c"
        var $257=HEAP[$x]; //@line 254 "_localemodule.c"
        var $258=($257)!=0; //@line 254 "_localemodule.c"
        if ($258) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 254 "_localemodule.c"
      case 40: // $bb39
        var $259=HEAP[$x]; //@line 254 "_localemodule.c"
        var $260=(($259)&4294967295); //@line 254 "_localemodule.c"
        var $261=HEAP[$260]; //@line 254 "_localemodule.c"
        var $262=((($261) - 1)&4294967295); //@line 254 "_localemodule.c"
        var $263=HEAP[$x]; //@line 254 "_localemodule.c"
        var $264=(($263)&4294967295); //@line 254 "_localemodule.c"
        HEAP[$264]=$262; //@line 254 "_localemodule.c"
        var $265=HEAP[$x]; //@line 254 "_localemodule.c"
        var $266=(($265)&4294967295); //@line 254 "_localemodule.c"
        var $267=HEAP[$266]; //@line 254 "_localemodule.c"
        var $268=((($267))|0)==0; //@line 254 "_localemodule.c"
        if ($268) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 254 "_localemodule.c"
      case 41: // $bb40
        var $269=HEAP[$x]; //@line 254 "_localemodule.c"
        var $270=(($269+4)&4294967295); //@line 254 "_localemodule.c"
        var $271=HEAP[$270]; //@line 254 "_localemodule.c"
        var $272=(($271+24)&4294967295); //@line 254 "_localemodule.c"
        var $273=HEAP[$272]; //@line 254 "_localemodule.c"
        var $274=HEAP[$x]; //@line 254 "_localemodule.c"
        FUNCTION_TABLE[$273]($274); //@line 254 "_localemodule.c"
        __label__ = 42; break; //@line 254 "_localemodule.c"
      case 42: // $bb41
        var $275=HEAP[$l]; //@line 255 "_localemodule.c"
        var $276=(($275+40)&4294967295); //@line 255 "_localemodule.c"
        var $277=HEAP[$276]; //@line 255 "_localemodule.c"
        var $278=reSign(($277), 8, 0); //@line 255 "_localemodule.c"
        var $279=_PyInt_FromLong($278); //@line 255 "_localemodule.c"
        HEAP[$x]=$279; //@line 255 "_localemodule.c"
        var $280=HEAP[$x]; //@line 255 "_localemodule.c"
        var $281=($280)==0; //@line 255 "_localemodule.c"
        if ($281) { __label__ = 75; break; } else { __label__ = 43; break; } //@line 255 "_localemodule.c"
      case 43: // $bb42
        var $282=HEAP[$result]; //@line 255 "_localemodule.c"
        var $283=HEAP[$x]; //@line 255 "_localemodule.c"
        var $284=_PyDict_SetItemString($282, ((__str18)&4294967295), $283); //@line 255 "_localemodule.c"
        var $285=HEAP[$x]; //@line 255 "_localemodule.c"
        var $286=($285)!=0; //@line 255 "_localemodule.c"
        if ($286) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 255 "_localemodule.c"
      case 44: // $bb43
        var $287=HEAP[$x]; //@line 255 "_localemodule.c"
        var $288=(($287)&4294967295); //@line 255 "_localemodule.c"
        var $289=HEAP[$288]; //@line 255 "_localemodule.c"
        var $290=((($289) - 1)&4294967295); //@line 255 "_localemodule.c"
        var $291=HEAP[$x]; //@line 255 "_localemodule.c"
        var $292=(($291)&4294967295); //@line 255 "_localemodule.c"
        HEAP[$292]=$290; //@line 255 "_localemodule.c"
        var $293=HEAP[$x]; //@line 255 "_localemodule.c"
        var $294=(($293)&4294967295); //@line 255 "_localemodule.c"
        var $295=HEAP[$294]; //@line 255 "_localemodule.c"
        var $296=((($295))|0)==0; //@line 255 "_localemodule.c"
        if ($296) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 255 "_localemodule.c"
      case 45: // $bb44
        var $297=HEAP[$x]; //@line 255 "_localemodule.c"
        var $298=(($297+4)&4294967295); //@line 255 "_localemodule.c"
        var $299=HEAP[$298]; //@line 255 "_localemodule.c"
        var $300=(($299+24)&4294967295); //@line 255 "_localemodule.c"
        var $301=HEAP[$300]; //@line 255 "_localemodule.c"
        var $302=HEAP[$x]; //@line 255 "_localemodule.c"
        FUNCTION_TABLE[$301]($302); //@line 255 "_localemodule.c"
        __label__ = 46; break; //@line 255 "_localemodule.c"
      case 46: // $bb45
        var $303=HEAP[$l]; //@line 256 "_localemodule.c"
        var $304=(($303+41)&4294967295); //@line 256 "_localemodule.c"
        var $305=HEAP[$304]; //@line 256 "_localemodule.c"
        var $306=reSign(($305), 8, 0); //@line 256 "_localemodule.c"
        var $307=_PyInt_FromLong($306); //@line 256 "_localemodule.c"
        HEAP[$x]=$307; //@line 256 "_localemodule.c"
        var $308=HEAP[$x]; //@line 256 "_localemodule.c"
        var $309=($308)==0; //@line 256 "_localemodule.c"
        if ($309) { __label__ = 75; break; } else { __label__ = 47; break; } //@line 256 "_localemodule.c"
      case 47: // $bb46
        var $310=HEAP[$result]; //@line 256 "_localemodule.c"
        var $311=HEAP[$x]; //@line 256 "_localemodule.c"
        var $312=_PyDict_SetItemString($310, ((__str19)&4294967295), $311); //@line 256 "_localemodule.c"
        var $313=HEAP[$x]; //@line 256 "_localemodule.c"
        var $314=($313)!=0; //@line 256 "_localemodule.c"
        if ($314) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 256 "_localemodule.c"
      case 48: // $bb47
        var $315=HEAP[$x]; //@line 256 "_localemodule.c"
        var $316=(($315)&4294967295); //@line 256 "_localemodule.c"
        var $317=HEAP[$316]; //@line 256 "_localemodule.c"
        var $318=((($317) - 1)&4294967295); //@line 256 "_localemodule.c"
        var $319=HEAP[$x]; //@line 256 "_localemodule.c"
        var $320=(($319)&4294967295); //@line 256 "_localemodule.c"
        HEAP[$320]=$318; //@line 256 "_localemodule.c"
        var $321=HEAP[$x]; //@line 256 "_localemodule.c"
        var $322=(($321)&4294967295); //@line 256 "_localemodule.c"
        var $323=HEAP[$322]; //@line 256 "_localemodule.c"
        var $324=((($323))|0)==0; //@line 256 "_localemodule.c"
        if ($324) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 256 "_localemodule.c"
      case 49: // $bb48
        var $325=HEAP[$x]; //@line 256 "_localemodule.c"
        var $326=(($325+4)&4294967295); //@line 256 "_localemodule.c"
        var $327=HEAP[$326]; //@line 256 "_localemodule.c"
        var $328=(($327+24)&4294967295); //@line 256 "_localemodule.c"
        var $329=HEAP[$328]; //@line 256 "_localemodule.c"
        var $330=HEAP[$x]; //@line 256 "_localemodule.c"
        FUNCTION_TABLE[$329]($330); //@line 256 "_localemodule.c"
        __label__ = 50; break; //@line 256 "_localemodule.c"
      case 50: // $bb49
        var $331=HEAP[$l]; //@line 257 "_localemodule.c"
        var $332=(($331+42)&4294967295); //@line 257 "_localemodule.c"
        var $333=HEAP[$332]; //@line 257 "_localemodule.c"
        var $334=reSign(($333), 8, 0); //@line 257 "_localemodule.c"
        var $335=_PyInt_FromLong($334); //@line 257 "_localemodule.c"
        HEAP[$x]=$335; //@line 257 "_localemodule.c"
        var $336=HEAP[$x]; //@line 257 "_localemodule.c"
        var $337=($336)==0; //@line 257 "_localemodule.c"
        if ($337) { __label__ = 75; break; } else { __label__ = 51; break; } //@line 257 "_localemodule.c"
      case 51: // $bb50
        var $338=HEAP[$result]; //@line 257 "_localemodule.c"
        var $339=HEAP[$x]; //@line 257 "_localemodule.c"
        var $340=_PyDict_SetItemString($338, ((__str20)&4294967295), $339); //@line 257 "_localemodule.c"
        var $341=HEAP[$x]; //@line 257 "_localemodule.c"
        var $342=($341)!=0; //@line 257 "_localemodule.c"
        if ($342) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 257 "_localemodule.c"
      case 52: // $bb51
        var $343=HEAP[$x]; //@line 257 "_localemodule.c"
        var $344=(($343)&4294967295); //@line 257 "_localemodule.c"
        var $345=HEAP[$344]; //@line 257 "_localemodule.c"
        var $346=((($345) - 1)&4294967295); //@line 257 "_localemodule.c"
        var $347=HEAP[$x]; //@line 257 "_localemodule.c"
        var $348=(($347)&4294967295); //@line 257 "_localemodule.c"
        HEAP[$348]=$346; //@line 257 "_localemodule.c"
        var $349=HEAP[$x]; //@line 257 "_localemodule.c"
        var $350=(($349)&4294967295); //@line 257 "_localemodule.c"
        var $351=HEAP[$350]; //@line 257 "_localemodule.c"
        var $352=((($351))|0)==0; //@line 257 "_localemodule.c"
        if ($352) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 257 "_localemodule.c"
      case 53: // $bb52
        var $353=HEAP[$x]; //@line 257 "_localemodule.c"
        var $354=(($353+4)&4294967295); //@line 257 "_localemodule.c"
        var $355=HEAP[$354]; //@line 257 "_localemodule.c"
        var $356=(($355+24)&4294967295); //@line 257 "_localemodule.c"
        var $357=HEAP[$356]; //@line 257 "_localemodule.c"
        var $358=HEAP[$x]; //@line 257 "_localemodule.c"
        FUNCTION_TABLE[$357]($358); //@line 257 "_localemodule.c"
        __label__ = 54; break; //@line 257 "_localemodule.c"
      case 54: // $bb53
        var $359=HEAP[$l]; //@line 258 "_localemodule.c"
        var $360=(($359+43)&4294967295); //@line 258 "_localemodule.c"
        var $361=HEAP[$360]; //@line 258 "_localemodule.c"
        var $362=reSign(($361), 8, 0); //@line 258 "_localemodule.c"
        var $363=_PyInt_FromLong($362); //@line 258 "_localemodule.c"
        HEAP[$x]=$363; //@line 258 "_localemodule.c"
        var $364=HEAP[$x]; //@line 258 "_localemodule.c"
        var $365=($364)==0; //@line 258 "_localemodule.c"
        if ($365) { __label__ = 75; break; } else { __label__ = 55; break; } //@line 258 "_localemodule.c"
      case 55: // $bb54
        var $366=HEAP[$result]; //@line 258 "_localemodule.c"
        var $367=HEAP[$x]; //@line 258 "_localemodule.c"
        var $368=_PyDict_SetItemString($366, ((__str21)&4294967295), $367); //@line 258 "_localemodule.c"
        var $369=HEAP[$x]; //@line 258 "_localemodule.c"
        var $370=($369)!=0; //@line 258 "_localemodule.c"
        if ($370) { __label__ = 56; break; } else { __label__ = 58; break; } //@line 258 "_localemodule.c"
      case 56: // $bb55
        var $371=HEAP[$x]; //@line 258 "_localemodule.c"
        var $372=(($371)&4294967295); //@line 258 "_localemodule.c"
        var $373=HEAP[$372]; //@line 258 "_localemodule.c"
        var $374=((($373) - 1)&4294967295); //@line 258 "_localemodule.c"
        var $375=HEAP[$x]; //@line 258 "_localemodule.c"
        var $376=(($375)&4294967295); //@line 258 "_localemodule.c"
        HEAP[$376]=$374; //@line 258 "_localemodule.c"
        var $377=HEAP[$x]; //@line 258 "_localemodule.c"
        var $378=(($377)&4294967295); //@line 258 "_localemodule.c"
        var $379=HEAP[$378]; //@line 258 "_localemodule.c"
        var $380=((($379))|0)==0; //@line 258 "_localemodule.c"
        if ($380) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 258 "_localemodule.c"
      case 57: // $bb56
        var $381=HEAP[$x]; //@line 258 "_localemodule.c"
        var $382=(($381+4)&4294967295); //@line 258 "_localemodule.c"
        var $383=HEAP[$382]; //@line 258 "_localemodule.c"
        var $384=(($383+24)&4294967295); //@line 258 "_localemodule.c"
        var $385=HEAP[$384]; //@line 258 "_localemodule.c"
        var $386=HEAP[$x]; //@line 258 "_localemodule.c"
        FUNCTION_TABLE[$385]($386); //@line 258 "_localemodule.c"
        __label__ = 58; break; //@line 258 "_localemodule.c"
      case 58: // $bb57
        var $387=HEAP[$l]; //@line 259 "_localemodule.c"
        var $388=(($387+44)&4294967295); //@line 259 "_localemodule.c"
        var $389=HEAP[$388]; //@line 259 "_localemodule.c"
        var $390=reSign(($389), 8, 0); //@line 259 "_localemodule.c"
        var $391=_PyInt_FromLong($390); //@line 259 "_localemodule.c"
        HEAP[$x]=$391; //@line 259 "_localemodule.c"
        var $392=HEAP[$x]; //@line 259 "_localemodule.c"
        var $393=($392)==0; //@line 259 "_localemodule.c"
        if ($393) { __label__ = 75; break; } else { __label__ = 59; break; } //@line 259 "_localemodule.c"
      case 59: // $bb58
        var $394=HEAP[$result]; //@line 259 "_localemodule.c"
        var $395=HEAP[$x]; //@line 259 "_localemodule.c"
        var $396=_PyDict_SetItemString($394, ((__str22)&4294967295), $395); //@line 259 "_localemodule.c"
        var $397=HEAP[$x]; //@line 259 "_localemodule.c"
        var $398=($397)!=0; //@line 259 "_localemodule.c"
        if ($398) { __label__ = 60; break; } else { __label__ = 62; break; } //@line 259 "_localemodule.c"
      case 60: // $bb59
        var $399=HEAP[$x]; //@line 259 "_localemodule.c"
        var $400=(($399)&4294967295); //@line 259 "_localemodule.c"
        var $401=HEAP[$400]; //@line 259 "_localemodule.c"
        var $402=((($401) - 1)&4294967295); //@line 259 "_localemodule.c"
        var $403=HEAP[$x]; //@line 259 "_localemodule.c"
        var $404=(($403)&4294967295); //@line 259 "_localemodule.c"
        HEAP[$404]=$402; //@line 259 "_localemodule.c"
        var $405=HEAP[$x]; //@line 259 "_localemodule.c"
        var $406=(($405)&4294967295); //@line 259 "_localemodule.c"
        var $407=HEAP[$406]; //@line 259 "_localemodule.c"
        var $408=((($407))|0)==0; //@line 259 "_localemodule.c"
        if ($408) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 259 "_localemodule.c"
      case 61: // $bb60
        var $409=HEAP[$x]; //@line 259 "_localemodule.c"
        var $410=(($409+4)&4294967295); //@line 259 "_localemodule.c"
        var $411=HEAP[$410]; //@line 259 "_localemodule.c"
        var $412=(($411+24)&4294967295); //@line 259 "_localemodule.c"
        var $413=HEAP[$412]; //@line 259 "_localemodule.c"
        var $414=HEAP[$x]; //@line 259 "_localemodule.c"
        FUNCTION_TABLE[$413]($414); //@line 259 "_localemodule.c"
        __label__ = 62; break; //@line 259 "_localemodule.c"
      case 62: // $bb61
        var $415=HEAP[$l]; //@line 260 "_localemodule.c"
        var $416=(($415+45)&4294967295); //@line 260 "_localemodule.c"
        var $417=HEAP[$416]; //@line 260 "_localemodule.c"
        var $418=reSign(($417), 8, 0); //@line 260 "_localemodule.c"
        var $419=_PyInt_FromLong($418); //@line 260 "_localemodule.c"
        HEAP[$x]=$419; //@line 260 "_localemodule.c"
        var $420=HEAP[$x]; //@line 260 "_localemodule.c"
        var $421=($420)==0; //@line 260 "_localemodule.c"
        if ($421) { __label__ = 75; break; } else { __label__ = 63; break; } //@line 260 "_localemodule.c"
      case 63: // $bb62
        var $422=HEAP[$result]; //@line 260 "_localemodule.c"
        var $423=HEAP[$x]; //@line 260 "_localemodule.c"
        var $424=_PyDict_SetItemString($422, ((__str23)&4294967295), $423); //@line 260 "_localemodule.c"
        var $425=HEAP[$x]; //@line 260 "_localemodule.c"
        var $426=($425)!=0; //@line 260 "_localemodule.c"
        if ($426) { __label__ = 64; break; } else { __label__ = 66; break; } //@line 260 "_localemodule.c"
      case 64: // $bb63
        var $427=HEAP[$x]; //@line 260 "_localemodule.c"
        var $428=(($427)&4294967295); //@line 260 "_localemodule.c"
        var $429=HEAP[$428]; //@line 260 "_localemodule.c"
        var $430=((($429) - 1)&4294967295); //@line 260 "_localemodule.c"
        var $431=HEAP[$x]; //@line 260 "_localemodule.c"
        var $432=(($431)&4294967295); //@line 260 "_localemodule.c"
        HEAP[$432]=$430; //@line 260 "_localemodule.c"
        var $433=HEAP[$x]; //@line 260 "_localemodule.c"
        var $434=(($433)&4294967295); //@line 260 "_localemodule.c"
        var $435=HEAP[$434]; //@line 260 "_localemodule.c"
        var $436=((($435))|0)==0; //@line 260 "_localemodule.c"
        if ($436) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 260 "_localemodule.c"
      case 65: // $bb64
        var $437=HEAP[$x]; //@line 260 "_localemodule.c"
        var $438=(($437+4)&4294967295); //@line 260 "_localemodule.c"
        var $439=HEAP[$438]; //@line 260 "_localemodule.c"
        var $440=(($439+24)&4294967295); //@line 260 "_localemodule.c"
        var $441=HEAP[$440]; //@line 260 "_localemodule.c"
        var $442=HEAP[$x]; //@line 260 "_localemodule.c"
        FUNCTION_TABLE[$441]($442); //@line 260 "_localemodule.c"
        __label__ = 66; break; //@line 260 "_localemodule.c"
      case 66: // $bb65
        var $443=HEAP[$l]; //@line 261 "_localemodule.c"
        var $444=(($443+46)&4294967295); //@line 261 "_localemodule.c"
        var $445=HEAP[$444]; //@line 261 "_localemodule.c"
        var $446=reSign(($445), 8, 0); //@line 261 "_localemodule.c"
        var $447=_PyInt_FromLong($446); //@line 261 "_localemodule.c"
        HEAP[$x]=$447; //@line 261 "_localemodule.c"
        var $448=HEAP[$x]; //@line 261 "_localemodule.c"
        var $449=($448)==0; //@line 261 "_localemodule.c"
        if ($449) { __label__ = 75; break; } else { __label__ = 67; break; } //@line 261 "_localemodule.c"
      case 67: // $bb66
        var $450=HEAP[$result]; //@line 261 "_localemodule.c"
        var $451=HEAP[$x]; //@line 261 "_localemodule.c"
        var $452=_PyDict_SetItemString($450, ((__str24)&4294967295), $451); //@line 261 "_localemodule.c"
        var $453=HEAP[$x]; //@line 261 "_localemodule.c"
        var $454=($453)!=0; //@line 261 "_localemodule.c"
        if ($454) { __label__ = 68; break; } else { __label__ = 70; break; } //@line 261 "_localemodule.c"
      case 68: // $bb67
        var $455=HEAP[$x]; //@line 261 "_localemodule.c"
        var $456=(($455)&4294967295); //@line 261 "_localemodule.c"
        var $457=HEAP[$456]; //@line 261 "_localemodule.c"
        var $458=((($457) - 1)&4294967295); //@line 261 "_localemodule.c"
        var $459=HEAP[$x]; //@line 261 "_localemodule.c"
        var $460=(($459)&4294967295); //@line 261 "_localemodule.c"
        HEAP[$460]=$458; //@line 261 "_localemodule.c"
        var $461=HEAP[$x]; //@line 261 "_localemodule.c"
        var $462=(($461)&4294967295); //@line 261 "_localemodule.c"
        var $463=HEAP[$462]; //@line 261 "_localemodule.c"
        var $464=((($463))|0)==0; //@line 261 "_localemodule.c"
        if ($464) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 261 "_localemodule.c"
      case 69: // $bb68
        var $465=HEAP[$x]; //@line 261 "_localemodule.c"
        var $466=(($465+4)&4294967295); //@line 261 "_localemodule.c"
        var $467=HEAP[$466]; //@line 261 "_localemodule.c"
        var $468=(($467+24)&4294967295); //@line 261 "_localemodule.c"
        var $469=HEAP[$468]; //@line 261 "_localemodule.c"
        var $470=HEAP[$x]; //@line 261 "_localemodule.c"
        FUNCTION_TABLE[$469]($470); //@line 261 "_localemodule.c"
        __label__ = 70; break; //@line 261 "_localemodule.c"
      case 70: // $bb69
        var $471=HEAP[$l]; //@line 262 "_localemodule.c"
        var $472=(($471+47)&4294967295); //@line 262 "_localemodule.c"
        var $473=HEAP[$472]; //@line 262 "_localemodule.c"
        var $474=reSign(($473), 8, 0); //@line 262 "_localemodule.c"
        var $475=_PyInt_FromLong($474); //@line 262 "_localemodule.c"
        HEAP[$x]=$475; //@line 262 "_localemodule.c"
        var $476=HEAP[$x]; //@line 262 "_localemodule.c"
        var $477=($476)==0; //@line 262 "_localemodule.c"
        if ($477) { __label__ = 75; break; } else { __label__ = 71; break; } //@line 262 "_localemodule.c"
      case 71: // $bb70
        var $478=HEAP[$result]; //@line 262 "_localemodule.c"
        var $479=HEAP[$x]; //@line 262 "_localemodule.c"
        var $480=_PyDict_SetItemString($478, ((__str25)&4294967295), $479); //@line 262 "_localemodule.c"
        var $481=HEAP[$x]; //@line 262 "_localemodule.c"
        var $482=($481)!=0; //@line 262 "_localemodule.c"
        if ($482) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 262 "_localemodule.c"
      case 72: // $bb71
        var $483=HEAP[$x]; //@line 262 "_localemodule.c"
        var $484=(($483)&4294967295); //@line 262 "_localemodule.c"
        var $485=HEAP[$484]; //@line 262 "_localemodule.c"
        var $486=((($485) - 1)&4294967295); //@line 262 "_localemodule.c"
        var $487=HEAP[$x]; //@line 262 "_localemodule.c"
        var $488=(($487)&4294967295); //@line 262 "_localemodule.c"
        HEAP[$488]=$486; //@line 262 "_localemodule.c"
        var $489=HEAP[$x]; //@line 262 "_localemodule.c"
        var $490=(($489)&4294967295); //@line 262 "_localemodule.c"
        var $491=HEAP[$490]; //@line 262 "_localemodule.c"
        var $492=((($491))|0)==0; //@line 262 "_localemodule.c"
        if ($492) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 262 "_localemodule.c"
      case 73: // $bb72
        var $493=HEAP[$x]; //@line 262 "_localemodule.c"
        var $494=(($493+4)&4294967295); //@line 262 "_localemodule.c"
        var $495=HEAP[$494]; //@line 262 "_localemodule.c"
        var $496=(($495+24)&4294967295); //@line 262 "_localemodule.c"
        var $497=HEAP[$496]; //@line 262 "_localemodule.c"
        var $498=HEAP[$x]; //@line 262 "_localemodule.c"
        FUNCTION_TABLE[$497]($498); //@line 262 "_localemodule.c"
        __label__ = 74; break; //@line 262 "_localemodule.c"
      case 74: // $bb73
        var $499=HEAP[$result]; //@line 263 "_localemodule.c"
        HEAP[$0]=$499; //@line 263 "_localemodule.c"
        __label__ = 82; break; //@line 263 "_localemodule.c"
      case 75: // $failed
        var $500=HEAP[$result]; //@line 266 "_localemodule.c"
        var $501=($500)!=0; //@line 266 "_localemodule.c"
        if ($501) { __label__ = 76; break; } else { __label__ = 78; break; } //@line 266 "_localemodule.c"
      case 76: // $bb74
        var $502=HEAP[$result]; //@line 266 "_localemodule.c"
        var $503=(($502)&4294967295); //@line 266 "_localemodule.c"
        var $504=HEAP[$503]; //@line 266 "_localemodule.c"
        var $505=((($504) - 1)&4294967295); //@line 266 "_localemodule.c"
        var $506=HEAP[$result]; //@line 266 "_localemodule.c"
        var $507=(($506)&4294967295); //@line 266 "_localemodule.c"
        HEAP[$507]=$505; //@line 266 "_localemodule.c"
        var $508=HEAP[$result]; //@line 266 "_localemodule.c"
        var $509=(($508)&4294967295); //@line 266 "_localemodule.c"
        var $510=HEAP[$509]; //@line 266 "_localemodule.c"
        var $511=((($510))|0)==0; //@line 266 "_localemodule.c"
        if ($511) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 266 "_localemodule.c"
      case 77: // $bb75
        var $512=HEAP[$result]; //@line 266 "_localemodule.c"
        var $513=(($512+4)&4294967295); //@line 266 "_localemodule.c"
        var $514=HEAP[$513]; //@line 266 "_localemodule.c"
        var $515=(($514+24)&4294967295); //@line 266 "_localemodule.c"
        var $516=HEAP[$515]; //@line 266 "_localemodule.c"
        var $517=HEAP[$result]; //@line 266 "_localemodule.c"
        FUNCTION_TABLE[$516]($517); //@line 266 "_localemodule.c"
        __label__ = 78; break; //@line 266 "_localemodule.c"
      case 78: // $bb76
        var $518=HEAP[$x]; //@line 267 "_localemodule.c"
        var $519=($518)!=0; //@line 267 "_localemodule.c"
        if ($519) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 267 "_localemodule.c"
      case 79: // $bb77
        var $520=HEAP[$x]; //@line 267 "_localemodule.c"
        var $521=(($520)&4294967295); //@line 267 "_localemodule.c"
        var $522=HEAP[$521]; //@line 267 "_localemodule.c"
        var $523=((($522) - 1)&4294967295); //@line 267 "_localemodule.c"
        var $524=HEAP[$x]; //@line 267 "_localemodule.c"
        var $525=(($524)&4294967295); //@line 267 "_localemodule.c"
        HEAP[$525]=$523; //@line 267 "_localemodule.c"
        var $526=HEAP[$x]; //@line 267 "_localemodule.c"
        var $527=(($526)&4294967295); //@line 267 "_localemodule.c"
        var $528=HEAP[$527]; //@line 267 "_localemodule.c"
        var $529=((($528))|0)==0; //@line 267 "_localemodule.c"
        if ($529) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 267 "_localemodule.c"
      case 80: // $bb78
        var $530=HEAP[$x]; //@line 267 "_localemodule.c"
        var $531=(($530+4)&4294967295); //@line 267 "_localemodule.c"
        var $532=HEAP[$531]; //@line 267 "_localemodule.c"
        var $533=(($532+24)&4294967295); //@line 267 "_localemodule.c"
        var $534=HEAP[$533]; //@line 267 "_localemodule.c"
        var $535=HEAP[$x]; //@line 267 "_localemodule.c"
        FUNCTION_TABLE[$534]($535); //@line 267 "_localemodule.c"
        __label__ = 81; break; //@line 267 "_localemodule.c"
      case 81: // $bb79
        HEAP[$0]=0; //@line 268 "_localemodule.c"
        __label__ = 82; break; //@line 268 "_localemodule.c"
      case 82: // $bb80
        var $536=HEAP[$0]; //@line 214 "_localemodule.c"
        HEAP[$retval]=$536; //@line 214 "_localemodule.c"
        __label__ = 83; break; //@line 214 "_localemodule.c"
      case 83: // $return
        var $retval81=HEAP[$retval]; //@line 214 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval81; //@line 214 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_strcoll($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_45=__stackBase__+12;
        var $iftmp_43=__stackBase__+16;
        var $iftmp_36=__stackBase__+20;
        var $iftmp_34=__stackBase__+24;
        var $0=__stackBase__+28;
        var $os1=__stackBase__+32;
        var $os2=__stackBase__+36;
        var $result=__stackBase__+40;
        var $ws1=__stackBase__+44;
        var $ws2=__stackBase__+48;
        var $rel1=__stackBase__+52;
        var $rel2=__stackBase__+56;
        var $len1=__stackBase__+60;
        var $len2=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 284 "_localemodule.c"
        HEAP[$ws1]=0; //@line 285 "_localemodule.c"
        HEAP[$ws2]=0; //@line 285 "_localemodule.c"
        HEAP[$rel1]=0; //@line 286 "_localemodule.c"
        HEAP[$rel2]=0; //@line 286 "_localemodule.c"
        var $1=HEAP[$args_addr]; //@line 288 "_localemodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str26)&4294967295), 2, 2, $os1, $os2); //@line 288 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 288 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 288 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 289 "_localemodule.c"
        __label__ = 49; break; //@line 289 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$os1]; //@line 291 "_localemodule.c"
        var $5=(($4+4)&4294967295); //@line 291 "_localemodule.c"
        var $6=HEAP[$5]; //@line 291 "_localemodule.c"
        var $7=(($6+84)&4294967295); //@line 291 "_localemodule.c"
        var $8=HEAP[$7]; //@line 291 "_localemodule.c"
        var $9=($8) & 134217728; //@line 291 "_localemodule.c"
        var $10=((($9))|0)!=0; //@line 291 "_localemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 291 "_localemodule.c"
      case 3: // $bb2
        var $11=HEAP[$os2]; //@line 291 "_localemodule.c"
        var $12=(($11+4)&4294967295); //@line 291 "_localemodule.c"
        var $13=HEAP[$12]; //@line 291 "_localemodule.c"
        var $14=(($13+84)&4294967295); //@line 291 "_localemodule.c"
        var $15=HEAP[$14]; //@line 291 "_localemodule.c"
        var $16=($15) & 134217728; //@line 291 "_localemodule.c"
        var $17=((($16))|0)!=0; //@line 291 "_localemodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 291 "_localemodule.c"
      case 4: // $bb3
        var $18=HEAP[$os2]; //@line 292 "_localemodule.c"
        var $19=$18; //@line 292 "_localemodule.c"
        var $20=(($19+20)&4294967295); //@line 292 "_localemodule.c"
        var $21=(($20)&4294967295); //@line 292 "_localemodule.c"
        var $22=HEAP[$os1]; //@line 292 "_localemodule.c"
        var $23=$22; //@line 292 "_localemodule.c"
        var $24=(($23+20)&4294967295); //@line 292 "_localemodule.c"
        var $25=(($24)&4294967295); //@line 292 "_localemodule.c"
        var $26=_strcoll($25, $21); //@line 292 "_localemodule.c"
        var $27=_PyInt_FromLong($26); //@line 292 "_localemodule.c"
        HEAP[$0]=$27; //@line 292 "_localemodule.c"
        __label__ = 49; break; //@line 292 "_localemodule.c"
      case 5: // $bb4
        var $28=HEAP[$os1]; //@line 295 "_localemodule.c"
        var $29=(($28+4)&4294967295); //@line 295 "_localemodule.c"
        var $30=HEAP[$29]; //@line 295 "_localemodule.c"
        var $31=(($30+84)&4294967295); //@line 295 "_localemodule.c"
        var $32=HEAP[$31]; //@line 295 "_localemodule.c"
        var $33=($32) & 268435456; //@line 295 "_localemodule.c"
        var $34=((($33))|0)==0; //@line 295 "_localemodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 295 "_localemodule.c"
      case 6: // $bb5
        var $35=HEAP[$os2]; //@line 295 "_localemodule.c"
        var $36=(($35+4)&4294967295); //@line 295 "_localemodule.c"
        var $37=HEAP[$36]; //@line 295 "_localemodule.c"
        var $38=(($37+84)&4294967295); //@line 295 "_localemodule.c"
        var $39=HEAP[$38]; //@line 295 "_localemodule.c"
        var $40=($39) & 268435456; //@line 295 "_localemodule.c"
        var $41=((($40))|0)==0; //@line 295 "_localemodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 295 "_localemodule.c"
      case 7: // $bb6
        var $42=HEAP[_PyExc_ValueError]; //@line 296 "_localemodule.c"
        _PyErr_SetString($42, ((__str27)&4294967295)); //@line 296 "_localemodule.c"
        __label__ = 8; break; //@line 296 "_localemodule.c"
      case 8: // $bb7
        var $43=HEAP[$os1]; //@line 299 "_localemodule.c"
        var $44=(($43+4)&4294967295); //@line 299 "_localemodule.c"
        var $45=HEAP[$44]; //@line 299 "_localemodule.c"
        var $46=(($45+84)&4294967295); //@line 299 "_localemodule.c"
        var $47=HEAP[$46]; //@line 299 "_localemodule.c"
        var $48=($47) & 268435456; //@line 299 "_localemodule.c"
        var $49=((($48))|0)==0; //@line 299 "_localemodule.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 299 "_localemodule.c"
      case 9: // $bb8
        var $50=HEAP[$os1]; //@line 300 "_localemodule.c"
        var $51=_PyUnicodeUCS2_FromObject($50); //@line 300 "_localemodule.c"
        HEAP[$os1]=$51; //@line 300 "_localemodule.c"
        var $52=HEAP[$os1]; //@line 301 "_localemodule.c"
        var $53=($52)==0; //@line 301 "_localemodule.c"
        if ($53) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 301 "_localemodule.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 302 "_localemodule.c"
        __label__ = 49; break; //@line 302 "_localemodule.c"
      case 11: // $bb10
        HEAP[$rel1]=1; //@line 303 "_localemodule.c"
        __label__ = 12; break; //@line 303 "_localemodule.c"
      case 12: // $bb11
        var $54=HEAP[$os2]; //@line 305 "_localemodule.c"
        var $55=(($54+4)&4294967295); //@line 305 "_localemodule.c"
        var $56=HEAP[$55]; //@line 305 "_localemodule.c"
        var $57=(($56+84)&4294967295); //@line 305 "_localemodule.c"
        var $58=HEAP[$57]; //@line 305 "_localemodule.c"
        var $59=($58) & 268435456; //@line 305 "_localemodule.c"
        var $60=((($59))|0)==0; //@line 305 "_localemodule.c"
        if ($60) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 305 "_localemodule.c"
      case 13: // $bb12
        var $61=HEAP[$os2]; //@line 306 "_localemodule.c"
        var $62=_PyUnicodeUCS2_FromObject($61); //@line 306 "_localemodule.c"
        HEAP[$os2]=$62; //@line 306 "_localemodule.c"
        var $63=HEAP[$os2]; //@line 307 "_localemodule.c"
        var $64=($63)==0; //@line 307 "_localemodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 307 "_localemodule.c"
      case 14: // $bb13
        var $65=HEAP[$rel1]; //@line 308 "_localemodule.c"
        var $66=((($65))|0)!=0; //@line 308 "_localemodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 308 "_localemodule.c"
      case 15: // $bb14
        var $67=HEAP[$os1]; //@line 309 "_localemodule.c"
        var $68=(($67)&4294967295); //@line 309 "_localemodule.c"
        var $69=HEAP[$68]; //@line 309 "_localemodule.c"
        var $70=((($69) - 1)&4294967295); //@line 309 "_localemodule.c"
        var $71=(($67)&4294967295); //@line 309 "_localemodule.c"
        HEAP[$71]=$70; //@line 309 "_localemodule.c"
        var $72=(($67)&4294967295); //@line 309 "_localemodule.c"
        var $73=HEAP[$72]; //@line 309 "_localemodule.c"
        var $74=((($73))|0)==0; //@line 309 "_localemodule.c"
        if ($74) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 309 "_localemodule.c"
      case 16: // $bb15
        var $75=HEAP[$os1]; //@line 309 "_localemodule.c"
        var $76=(($75+4)&4294967295); //@line 309 "_localemodule.c"
        var $77=HEAP[$76]; //@line 309 "_localemodule.c"
        var $78=(($77+24)&4294967295); //@line 309 "_localemodule.c"
        var $79=HEAP[$78]; //@line 309 "_localemodule.c"
        var $80=HEAP[$os1]; //@line 309 "_localemodule.c"
        FUNCTION_TABLE[$79]($80); //@line 309 "_localemodule.c"
        __label__ = 17; break; //@line 309 "_localemodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 311 "_localemodule.c"
        __label__ = 49; break; //@line 311 "_localemodule.c"
      case 18: // $bb17
        HEAP[$rel2]=1; //@line 313 "_localemodule.c"
        __label__ = 19; break; //@line 313 "_localemodule.c"
      case 19: // $bb18
        var $81=HEAP[$os1]; //@line 316 "_localemodule.c"
        var $82=$81; //@line 316 "_localemodule.c"
        var $83=(($82+8)&4294967295); //@line 316 "_localemodule.c"
        var $84=HEAP[$83]; //@line 316 "_localemodule.c"
        var $85=((($84) + 1)&4294967295); //@line 316 "_localemodule.c"
        HEAP[$len1]=$85; //@line 316 "_localemodule.c"
        var $86=HEAP[$len1]; //@line 317 "_localemodule.c"
        var $87=((($86) * 4)&4294967295); //@line 317 "_localemodule.c"
        var $88=((($87))|0) >= 0; //@line 317 "_localemodule.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 24; break; } //@line 317 "_localemodule.c"
      case 20: // $bb19
        var $89=HEAP[$len1]; //@line 317 "_localemodule.c"
        var $90=((($89) * 4)&4294967295); //@line 317 "_localemodule.c"
        var $91=((($90))|0)!=0; //@line 317 "_localemodule.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 317 "_localemodule.c"
      case 21: // $bb20
        var $92=HEAP[$len1]; //@line 317 "_localemodule.c"
        var $93=((($92) * 4)&4294967295); //@line 317 "_localemodule.c"
        HEAP[$iftmp_36]=$93; //@line 317 "_localemodule.c"
        __label__ = 23; break; //@line 317 "_localemodule.c"
      case 22: // $bb21
        HEAP[$iftmp_36]=1; //@line 317 "_localemodule.c"
        __label__ = 23; break; //@line 317 "_localemodule.c"
      case 23: // $bb22
        var $94=HEAP[$iftmp_36]; //@line 317 "_localemodule.c"
        var $95=_malloc($94); //@line 317 "_localemodule.c"
        var $96=$95; //@line 317 "_localemodule.c"
        HEAP[$iftmp_34]=$96; //@line 317 "_localemodule.c"
        __label__ = 25; break; //@line 317 "_localemodule.c"
      case 24: // $bb23
        HEAP[$iftmp_34]=0; //@line 317 "_localemodule.c"
        __label__ = 25; break; //@line 317 "_localemodule.c"
      case 25: // $bb24
        var $97=HEAP[$iftmp_34]; //@line 317 "_localemodule.c"
        HEAP[$ws1]=$97; //@line 317 "_localemodule.c"
        var $98=HEAP[$ws1]; //@line 318 "_localemodule.c"
        var $99=($98)==0; //@line 318 "_localemodule.c"
        if ($99) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 318 "_localemodule.c"
      case 26: // $bb25
        var $100=_PyErr_NoMemory(); //@line 319 "_localemodule.c"
        __label__ = 38; break; //@line 319 "_localemodule.c"
      case 27: // $bb26
        var $101=HEAP[$os1]; //@line 322 "_localemodule.c"
        var $102=$101; //@line 322 "_localemodule.c"
        var $103=HEAP[$ws1]; //@line 322 "_localemodule.c"
        var $104=HEAP[$len1]; //@line 322 "_localemodule.c"
        var $105=_PyUnicodeUCS2_AsWideChar($102, $103, $104); //@line 322 "_localemodule.c"
        var $106=((($105))|0)==-1; //@line 322 "_localemodule.c"
        if ($106) { __label__ = 38; break; } else { __label__ = 28; break; } //@line 322 "_localemodule.c"
      case 28: // $bb27
        var $107=HEAP[$len1]; //@line 324 "_localemodule.c"
        var $108=((($107) - 1)&4294967295); //@line 324 "_localemodule.c"
        var $109=HEAP[$ws1]; //@line 324 "_localemodule.c"
        var $110=(($109+4*$108)&4294967295); //@line 324 "_localemodule.c"
        HEAP[$110]=0; //@line 324 "_localemodule.c"
        var $111=HEAP[$os2]; //@line 325 "_localemodule.c"
        var $112=$111; //@line 325 "_localemodule.c"
        var $113=(($112+8)&4294967295); //@line 325 "_localemodule.c"
        var $114=HEAP[$113]; //@line 325 "_localemodule.c"
        var $115=((($114) + 1)&4294967295); //@line 325 "_localemodule.c"
        HEAP[$len2]=$115; //@line 325 "_localemodule.c"
        var $116=HEAP[$len2]; //@line 326 "_localemodule.c"
        var $117=((($116) * 4)&4294967295); //@line 326 "_localemodule.c"
        var $118=((($117))|0) >= 0; //@line 326 "_localemodule.c"
        if ($118) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 326 "_localemodule.c"
      case 29: // $bb28
        var $119=HEAP[$len2]; //@line 326 "_localemodule.c"
        var $120=((($119) * 4)&4294967295); //@line 326 "_localemodule.c"
        var $121=((($120))|0)!=0; //@line 326 "_localemodule.c"
        if ($121) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 326 "_localemodule.c"
      case 30: // $bb29
        var $122=HEAP[$len2]; //@line 326 "_localemodule.c"
        var $123=((($122) * 4)&4294967295); //@line 326 "_localemodule.c"
        HEAP[$iftmp_45]=$123; //@line 326 "_localemodule.c"
        __label__ = 32; break; //@line 326 "_localemodule.c"
      case 31: // $bb30
        HEAP[$iftmp_45]=1; //@line 326 "_localemodule.c"
        __label__ = 32; break; //@line 326 "_localemodule.c"
      case 32: // $bb31
        var $124=HEAP[$iftmp_45]; //@line 326 "_localemodule.c"
        var $125=_malloc($124); //@line 326 "_localemodule.c"
        var $126=$125; //@line 326 "_localemodule.c"
        HEAP[$iftmp_43]=$126; //@line 326 "_localemodule.c"
        __label__ = 34; break; //@line 326 "_localemodule.c"
      case 33: // $bb32
        HEAP[$iftmp_43]=0; //@line 326 "_localemodule.c"
        __label__ = 34; break; //@line 326 "_localemodule.c"
      case 34: // $bb33
        var $127=HEAP[$iftmp_43]; //@line 326 "_localemodule.c"
        HEAP[$ws2]=$127; //@line 326 "_localemodule.c"
        var $128=HEAP[$ws2]; //@line 327 "_localemodule.c"
        var $129=($128)==0; //@line 327 "_localemodule.c"
        if ($129) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 327 "_localemodule.c"
      case 35: // $bb34
        var $130=_PyErr_NoMemory(); //@line 328 "_localemodule.c"
        __label__ = 38; break; //@line 328 "_localemodule.c"
      case 36: // $bb35
        var $131=HEAP[$os2]; //@line 331 "_localemodule.c"
        var $132=$131; //@line 331 "_localemodule.c"
        var $133=HEAP[$ws2]; //@line 331 "_localemodule.c"
        var $134=HEAP[$len2]; //@line 331 "_localemodule.c"
        var $135=_PyUnicodeUCS2_AsWideChar($132, $133, $134); //@line 331 "_localemodule.c"
        var $136=((($135))|0)==-1; //@line 331 "_localemodule.c"
        if ($136) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 331 "_localemodule.c"
      case 37: // $bb36
        var $137=HEAP[$len2]; //@line 333 "_localemodule.c"
        var $138=((($137) - 1)&4294967295); //@line 333 "_localemodule.c"
        var $139=HEAP[$ws2]; //@line 333 "_localemodule.c"
        var $140=(($139+4*$138)&4294967295); //@line 333 "_localemodule.c"
        HEAP[$140]=0; //@line 333 "_localemodule.c"
        var $141=HEAP[$ws1]; //@line 335 "_localemodule.c"
        var $142=HEAP[$ws2]; //@line 335 "_localemodule.c"
        var $143=_wcscoll($141, $142); //@line 335 "_localemodule.c"
        var $144=_PyInt_FromLong($143); //@line 335 "_localemodule.c"
        HEAP[$result]=$144; //@line 335 "_localemodule.c"
        __label__ = 38; break; //@line 336 "_localemodule.c"
      case 38: // $done
        var $145=HEAP[$ws1]; //@line 338 "_localemodule.c"
        var $146=($145)!=0; //@line 338 "_localemodule.c"
        if ($146) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 338 "_localemodule.c"
      case 39: // $bb37
        var $147=HEAP[$ws1]; //@line 338 "_localemodule.c"
        var $148=$147; //@line 338 "_localemodule.c"
        _free($148); //@line 338 "_localemodule.c"
        __label__ = 40; break; //@line 338 "_localemodule.c"
      case 40: // $bb38
        var $149=HEAP[$ws2]; //@line 339 "_localemodule.c"
        var $150=($149)!=0; //@line 339 "_localemodule.c"
        if ($150) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 339 "_localemodule.c"
      case 41: // $bb39
        var $151=HEAP[$ws2]; //@line 339 "_localemodule.c"
        var $152=$151; //@line 339 "_localemodule.c"
        _free($152); //@line 339 "_localemodule.c"
        __label__ = 42; break; //@line 339 "_localemodule.c"
      case 42: // $bb40
        var $153=HEAP[$rel1]; //@line 340 "_localemodule.c"
        var $154=((($153))|0)!=0; //@line 340 "_localemodule.c"
        if ($154) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 340 "_localemodule.c"
      case 43: // $bb41
        var $155=HEAP[$os1]; //@line 341 "_localemodule.c"
        var $156=(($155)&4294967295); //@line 341 "_localemodule.c"
        var $157=HEAP[$156]; //@line 341 "_localemodule.c"
        var $158=((($157) - 1)&4294967295); //@line 341 "_localemodule.c"
        var $159=(($155)&4294967295); //@line 341 "_localemodule.c"
        HEAP[$159]=$158; //@line 341 "_localemodule.c"
        var $160=(($155)&4294967295); //@line 341 "_localemodule.c"
        var $161=HEAP[$160]; //@line 341 "_localemodule.c"
        var $162=((($161))|0)==0; //@line 341 "_localemodule.c"
        if ($162) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 341 "_localemodule.c"
      case 44: // $bb42
        var $163=HEAP[$os1]; //@line 341 "_localemodule.c"
        var $164=(($163+4)&4294967295); //@line 341 "_localemodule.c"
        var $165=HEAP[$164]; //@line 341 "_localemodule.c"
        var $166=(($165+24)&4294967295); //@line 341 "_localemodule.c"
        var $167=HEAP[$166]; //@line 341 "_localemodule.c"
        var $168=HEAP[$os1]; //@line 341 "_localemodule.c"
        FUNCTION_TABLE[$167]($168); //@line 341 "_localemodule.c"
        __label__ = 45; break; //@line 341 "_localemodule.c"
      case 45: // $bb43
        var $169=HEAP[$rel2]; //@line 343 "_localemodule.c"
        var $170=((($169))|0)!=0; //@line 343 "_localemodule.c"
        if ($170) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 343 "_localemodule.c"
      case 46: // $bb44
        var $171=HEAP[$os2]; //@line 344 "_localemodule.c"
        var $172=(($171)&4294967295); //@line 344 "_localemodule.c"
        var $173=HEAP[$172]; //@line 344 "_localemodule.c"
        var $174=((($173) - 1)&4294967295); //@line 344 "_localemodule.c"
        var $175=(($171)&4294967295); //@line 344 "_localemodule.c"
        HEAP[$175]=$174; //@line 344 "_localemodule.c"
        var $176=(($171)&4294967295); //@line 344 "_localemodule.c"
        var $177=HEAP[$176]; //@line 344 "_localemodule.c"
        var $178=((($177))|0)==0; //@line 344 "_localemodule.c"
        if ($178) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 344 "_localemodule.c"
      case 47: // $bb45
        var $179=HEAP[$os2]; //@line 344 "_localemodule.c"
        var $180=(($179+4)&4294967295); //@line 344 "_localemodule.c"
        var $181=HEAP[$180]; //@line 344 "_localemodule.c"
        var $182=(($181+24)&4294967295); //@line 344 "_localemodule.c"
        var $183=HEAP[$182]; //@line 344 "_localemodule.c"
        var $184=HEAP[$os2]; //@line 344 "_localemodule.c"
        FUNCTION_TABLE[$183]($184); //@line 344 "_localemodule.c"
        __label__ = 48; break; //@line 344 "_localemodule.c"
      case 48: // $bb46
        var $185=HEAP[$result]; //@line 346 "_localemodule.c"
        HEAP[$0]=$185; //@line 346 "_localemodule.c"
        __label__ = 49; break; //@line 346 "_localemodule.c"
      case 49: // $bb47
        var $186=HEAP[$0]; //@line 289 "_localemodule.c"
        HEAP[$retval]=$186; //@line 289 "_localemodule.c"
        __label__ = 50; break; //@line 289 "_localemodule.c"
      case 50: // $return
        var $retval48=HEAP[$retval]; //@line 289 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 289 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_strxfrm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s=__stackBase__+16;
        var $buf=__stackBase__+20;
        var $n1=__stackBase__+24;
        var $n2=__stackBase__+28;
        var $result=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 361 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str28)&4294967295), $s); //@line 361 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 361 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 361 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 362 "_localemodule.c"
        __label__ = 9; break; //@line 362 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$s]; //@line 365 "_localemodule.c"
        var $5=_strlen($4); //@line 365 "_localemodule.c"
        var $6=((($5) + 1)&4294967295); //@line 365 "_localemodule.c"
        HEAP[$n1]=$6; //@line 365 "_localemodule.c"
        var $7=HEAP[$n1]; //@line 366 "_localemodule.c"
        var $8=_PyMem_Malloc($7); //@line 366 "_localemodule.c"
        HEAP[$buf]=$8; //@line 366 "_localemodule.c"
        var $9=HEAP[$buf]; //@line 367 "_localemodule.c"
        var $10=($9)==0; //@line 367 "_localemodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 367 "_localemodule.c"
      case 3: // $bb2
        var $11=_PyErr_NoMemory(); //@line 368 "_localemodule.c"
        HEAP[$0]=$11; //@line 368 "_localemodule.c"
        __label__ = 9; break; //@line 368 "_localemodule.c"
      case 4: // $bb3
        var $12=HEAP[$s]; //@line 369 "_localemodule.c"
        var $13=HEAP[$buf]; //@line 369 "_localemodule.c"
        var $14=HEAP[$n1]; //@line 369 "_localemodule.c"
        var $15=_strxfrm($13, $12, $14); //@line 369 "_localemodule.c"
        var $16=((($15) + 1)&4294967295); //@line 369 "_localemodule.c"
        HEAP[$n2]=$16; //@line 369 "_localemodule.c"
        var $17=HEAP[$n2]; //@line 370 "_localemodule.c"
        var $18=HEAP[$n1]; //@line 370 "_localemodule.c"
        var $19=((($17))>>>0) > ((($18))>>>0); //@line 370 "_localemodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 370 "_localemodule.c"
      case 5: // $bb4
        var $20=HEAP[$buf]; //@line 372 "_localemodule.c"
        var $21=HEAP[$n2]; //@line 372 "_localemodule.c"
        var $22=_PyMem_Realloc($20, $21); //@line 372 "_localemodule.c"
        HEAP[$buf]=$22; //@line 372 "_localemodule.c"
        var $23=HEAP[$buf]; //@line 373 "_localemodule.c"
        var $24=($23)==0; //@line 373 "_localemodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 373 "_localemodule.c"
      case 6: // $bb5
        var $25=_PyErr_NoMemory(); //@line 374 "_localemodule.c"
        HEAP[$0]=$25; //@line 374 "_localemodule.c"
        __label__ = 9; break; //@line 374 "_localemodule.c"
      case 7: // $bb6
        var $26=HEAP[$s]; //@line 375 "_localemodule.c"
        var $27=HEAP[$buf]; //@line 375 "_localemodule.c"
        var $28=HEAP[$n2]; //@line 375 "_localemodule.c"
        var $29=_strxfrm($27, $26, $28); //@line 375 "_localemodule.c"
        __label__ = 8; break; //@line 375 "_localemodule.c"
      case 8: // $bb7
        var $30=HEAP[$buf]; //@line 377 "_localemodule.c"
        var $31=_PyString_FromString($30); //@line 377 "_localemodule.c"
        HEAP[$result]=$31; //@line 377 "_localemodule.c"
        var $32=HEAP[$buf]; //@line 378 "_localemodule.c"
        _PyMem_Free($32); //@line 378 "_localemodule.c"
        var $33=HEAP[$result]; //@line 379 "_localemodule.c"
        HEAP[$0]=$33; //@line 379 "_localemodule.c"
        __label__ = 9; break; //@line 379 "_localemodule.c"
      case 9: // $bb8
        var $34=HEAP[$0]; //@line 362 "_localemodule.c"
        HEAP[$retval]=$34; //@line 362 "_localemodule.c"
        __label__ = 10; break; //@line 362 "_localemodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 362 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 362 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyLocale_nl_langinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_62=__stackBase__+12;
        var $0=__stackBase__+16;
        var $item=__stackBase__+20;
        var $i=__stackBase__+24;
        var $result=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 536 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str85)&4294967295), $item); //@line 536 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 536 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 536 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 537 "_localemodule.c"
        __label__ = 11; break; //@line 537 "_localemodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 541 "_localemodule.c"
        __label__ = 9; break; //@line 541 "_localemodule.c"
      case 3: // $bb2
        var $4=HEAP[$i]; //@line 542 "_localemodule.c"
        var $5=((_langinfo_constants+$4*8)&4294967295); //@line 542 "_localemodule.c"
        var $6=(($5+4)&4294967295); //@line 542 "_localemodule.c"
        var $7=HEAP[$6]; //@line 542 "_localemodule.c"
        var $8=HEAP[$item]; //@line 542 "_localemodule.c"
        var $9=((($7))|0)==((($8))|0); //@line 542 "_localemodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 542 "_localemodule.c"
      case 4: // $bb3
        var $10=HEAP[$item]; //@line 545 "_localemodule.c"
        var $11=_nl_langinfo($10); //@line 545 "_localemodule.c"
        HEAP[$result]=$11; //@line 545 "_localemodule.c"
        var $12=HEAP[$result]; //@line 546 "_localemodule.c"
        var $13=($12)!=0; //@line 546 "_localemodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 546 "_localemodule.c"
      case 5: // $bb4
        var $14=HEAP[$result]; //@line 546 "_localemodule.c"
        HEAP[$iftmp_62]=$14; //@line 546 "_localemodule.c"
        __label__ = 7; break; //@line 546 "_localemodule.c"
      case 6: // $bb5
        HEAP[$iftmp_62]=((__str86)&4294967295); //@line 546 "_localemodule.c"
        __label__ = 7; break; //@line 546 "_localemodule.c"
      case 7: // $bb6
        var $15=HEAP[$iftmp_62]; //@line 546 "_localemodule.c"
        var $16=_PyString_FromString($15); //@line 546 "_localemodule.c"
        HEAP[$0]=$16; //@line 546 "_localemodule.c"
        __label__ = 11; break; //@line 546 "_localemodule.c"
      case 8: // $bb7
        var $17=HEAP[$i]; //@line 541 "_localemodule.c"
        var $18=((($17) + 1)&4294967295); //@line 541 "_localemodule.c"
        HEAP[$i]=$18; //@line 541 "_localemodule.c"
        __label__ = 9; break; //@line 541 "_localemodule.c"
      case 9: // $bb8
        var $19=HEAP[$i]; //@line 541 "_localemodule.c"
        var $20=((_langinfo_constants+$19*8)&4294967295); //@line 541 "_localemodule.c"
        var $21=(($20)&4294967295); //@line 541 "_localemodule.c"
        var $22=HEAP[$21]; //@line 541 "_localemodule.c"
        var $23=($22)!=0; //@line 541 "_localemodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 541 "_localemodule.c"
      case 10: // $bb9
        var $24=HEAP[_PyExc_ValueError]; //@line 548 "_localemodule.c"
        _PyErr_SetString($24, ((__str87)&4294967295)); //@line 548 "_localemodule.c"
        HEAP[$0]=0; //@line 549 "_localemodule.c"
        __label__ = 11; break; //@line 549 "_localemodule.c"
      case 11: // $bb10
        var $25=HEAP[$0]; //@line 537 "_localemodule.c"
        HEAP[$retval]=$25; //@line 537 "_localemodule.c"
        __label__ = 12; break; //@line 537 "_localemodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 537 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 537 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_gettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $in=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 563 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str88)&4294967295), $in); //@line 563 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 563 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 563 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 564 "_localemodule.c"
        __label__ = 3; break; //@line 564 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$in]; //@line 565 "_localemodule.c"
        var $5=_gettext($4); //@line 565 "_localemodule.c"
        var $6=_PyString_FromString($5); //@line 565 "_localemodule.c"
        HEAP[$0]=$6; //@line 565 "_localemodule.c"
        __label__ = 3; break; //@line 565 "_localemodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 564 "_localemodule.c"
        HEAP[$retval]=$7; //@line 564 "_localemodule.c"
        __label__ = 4; break; //@line 564 "_localemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 564 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 564 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_dgettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $domain=__stackBase__+16;
        var $in=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 576 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str89)&4294967295), $domain, $in); //@line 576 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 576 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 576 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 577 "_localemodule.c"
        __label__ = 3; break; //@line 577 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$in]; //@line 578 "_localemodule.c"
        var $5=HEAP[$domain]; //@line 578 "_localemodule.c"
        var $6=_dgettext($5, $4); //@line 578 "_localemodule.c"
        var $7=_PyString_FromString($6); //@line 578 "_localemodule.c"
        HEAP[$0]=$7; //@line 578 "_localemodule.c"
        __label__ = 3; break; //@line 578 "_localemodule.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 577 "_localemodule.c"
        HEAP[$retval]=$8; //@line 577 "_localemodule.c"
        __label__ = 4; break; //@line 577 "_localemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 577 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 577 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_dcgettext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $domain=__stackBase__+16;
        var $msgid=__stackBase__+20;
        var $category=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 590 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str90)&4294967295), $domain, $msgid, $category); //@line 590 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 590 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 590 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 591 "_localemodule.c"
        __label__ = 3; break; //@line 591 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$category]; //@line 592 "_localemodule.c"
        var $5=HEAP[$msgid]; //@line 592 "_localemodule.c"
        var $6=HEAP[$domain]; //@line 592 "_localemodule.c"
        var $7=_dcgettext($6, $5, $4); //@line 592 "_localemodule.c"
        var $8=_PyString_FromString($7); //@line 592 "_localemodule.c"
        HEAP[$0]=$8; //@line 592 "_localemodule.c"
        __label__ = 3; break; //@line 592 "_localemodule.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 591 "_localemodule.c"
        HEAP[$retval]=$9; //@line 591 "_localemodule.c"
        __label__ = 4; break; //@line 591 "_localemodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 591 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 591 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_textdomain($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $domain=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 603 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str91)&4294967295), $domain); //@line 603 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 603 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 603 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 604 "_localemodule.c"
        __label__ = 5; break; //@line 604 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$domain]; //@line 605 "_localemodule.c"
        var $5=_textdomain($4); //@line 605 "_localemodule.c"
        HEAP[$domain]=$5; //@line 605 "_localemodule.c"
        var $6=HEAP[$domain]; //@line 606 "_localemodule.c"
        var $7=($6)==0; //@line 606 "_localemodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 606 "_localemodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_OSError]; //@line 607 "_localemodule.c"
        var $9=_PyErr_SetFromErrno($8); //@line 607 "_localemodule.c"
        HEAP[$0]=0; //@line 608 "_localemodule.c"
        __label__ = 5; break; //@line 608 "_localemodule.c"
      case 4: // $bb3
        var $10=HEAP[$domain]; //@line 610 "_localemodule.c"
        var $11=_PyString_FromString($10); //@line 610 "_localemodule.c"
        HEAP[$0]=$11; //@line 610 "_localemodule.c"
        __label__ = 5; break; //@line 610 "_localemodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 604 "_localemodule.c"
        HEAP[$retval]=$12; //@line 604 "_localemodule.c"
        __label__ = 6; break; //@line 604 "_localemodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 604 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 604 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_bindtextdomain($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $domain=__stackBase__+16;
        var $dirname=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 621 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str92)&4294967295), $domain, $dirname); //@line 621 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 621 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 621 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 622 "_localemodule.c"
        __label__ = 7; break; //@line 622 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$domain]; //@line 623 "_localemodule.c"
        var $5=HEAP[$4]; //@line 623 "_localemodule.c"
        var $6=reSign(($5), 8, 0)==0; //@line 623 "_localemodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 623 "_localemodule.c"
      case 3: // $bb2
        var $7=HEAP[_Error]; //@line 624 "_localemodule.c"
        _PyErr_SetString($7, ((__str93)&4294967295)); //@line 624 "_localemodule.c"
        HEAP[$0]=0; //@line 625 "_localemodule.c"
        __label__ = 7; break; //@line 625 "_localemodule.c"
      case 4: // $bb3
        var $8=HEAP[$dirname]; //@line 627 "_localemodule.c"
        var $9=HEAP[$domain]; //@line 627 "_localemodule.c"
        var $10=_bindtextdomain($9, $8); //@line 627 "_localemodule.c"
        HEAP[$dirname]=$10; //@line 627 "_localemodule.c"
        var $11=HEAP[$dirname]; //@line 628 "_localemodule.c"
        var $12=($11)==0; //@line 628 "_localemodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 628 "_localemodule.c"
      case 5: // $bb4
        var $13=HEAP[_PyExc_OSError]; //@line 629 "_localemodule.c"
        var $14=_PyErr_SetFromErrno($13); //@line 629 "_localemodule.c"
        HEAP[$0]=0; //@line 630 "_localemodule.c"
        __label__ = 7; break; //@line 630 "_localemodule.c"
      case 6: // $bb5
        var $15=HEAP[$dirname]; //@line 632 "_localemodule.c"
        var $16=_PyString_FromString($15); //@line 632 "_localemodule.c"
        HEAP[$0]=$16; //@line 632 "_localemodule.c"
        __label__ = 7; break; //@line 632 "_localemodule.c"
      case 7: // $bb6
        var $17=HEAP[$0]; //@line 622 "_localemodule.c"
        HEAP[$retval]=$17; //@line 622 "_localemodule.c"
        __label__ = 8; break; //@line 622 "_localemodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 622 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 622 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyIntl_bind_textdomain_codeset($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $domain=__stackBase__+16;
        var $codeset=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 644 "_localemodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str92)&4294967295), $domain, $codeset); //@line 644 "_localemodule.c"
        var $3=((($2))|0)==0; //@line 644 "_localemodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 644 "_localemodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 645 "_localemodule.c"
        __label__ = 5; break; //@line 645 "_localemodule.c"
      case 2: // $bb1
        var $4=HEAP[$codeset]; //@line 646 "_localemodule.c"
        var $5=HEAP[$domain]; //@line 646 "_localemodule.c"
        var $6=_bind_textdomain_codeset($5, $4); //@line 646 "_localemodule.c"
        HEAP[$codeset]=$6; //@line 646 "_localemodule.c"
        var $7=HEAP[$codeset]; //@line 647 "_localemodule.c"
        var $8=($7)!=0; //@line 647 "_localemodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 647 "_localemodule.c"
      case 3: // $bb2
        var $9=HEAP[$codeset]; //@line 648 "_localemodule.c"
        var $10=_PyString_FromString($9); //@line 648 "_localemodule.c"
        HEAP[$0]=$10; //@line 648 "_localemodule.c"
        __label__ = 5; break; //@line 648 "_localemodule.c"
      case 4: // $bb3
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 649 "_localemodule.c"
        var $12=((($11) + 1)&4294967295); //@line 649 "_localemodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 649 "_localemodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 649 "_localemodule.c"
        __label__ = 5; break; //@line 649 "_localemodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 645 "_localemodule.c"
        HEAP[$retval]=$13; //@line 645 "_localemodule.c"
        __label__ = 6; break; //@line 645 "_localemodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 645 "_localemodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 645 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_locale() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $x=__stackBase__+8;
        var $i=__stackBase__+12;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str104)&4294967295), ((_PyLocale_Methods)&4294967295), 0, 0, 1013); //@line 698 "_localemodule.c"
        HEAP[$m]=$0; //@line 698 "_localemodule.c"
        var $1=HEAP[$m]; //@line 699 "_localemodule.c"
        var $2=($1)==0; //@line 699 "_localemodule.c"
        if ($2) { __label__ = 31; break; } else { __label__ = 1; break; } //@line 699 "_localemodule.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 702 "_localemodule.c"
        var $4=_PyModule_GetDict($3); //@line 702 "_localemodule.c"
        HEAP[$d]=$4; //@line 702 "_localemodule.c"
        var $5=_PyInt_FromLong(0); //@line 704 "_localemodule.c"
        HEAP[$x]=$5; //@line 704 "_localemodule.c"
        var $6=HEAP[$d]; //@line 705 "_localemodule.c"
        var $7=HEAP[$x]; //@line 705 "_localemodule.c"
        var $8=_PyDict_SetItemString($6, ((__str105)&4294967295), $7); //@line 705 "_localemodule.c"
        var $9=HEAP[$x]; //@line 706 "_localemodule.c"
        var $10=($9)!=0; //@line 706 "_localemodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 706 "_localemodule.c"
      case 2: // $bb1
        var $11=HEAP[$x]; //@line 706 "_localemodule.c"
        var $12=(($11)&4294967295); //@line 706 "_localemodule.c"
        var $13=HEAP[$12]; //@line 706 "_localemodule.c"
        var $14=((($13) - 1)&4294967295); //@line 706 "_localemodule.c"
        var $15=HEAP[$x]; //@line 706 "_localemodule.c"
        var $16=(($15)&4294967295); //@line 706 "_localemodule.c"
        HEAP[$16]=$14; //@line 706 "_localemodule.c"
        var $17=HEAP[$x]; //@line 706 "_localemodule.c"
        var $18=(($17)&4294967295); //@line 706 "_localemodule.c"
        var $19=HEAP[$18]; //@line 706 "_localemodule.c"
        var $20=((($19))|0)==0; //@line 706 "_localemodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 706 "_localemodule.c"
      case 3: // $bb2
        var $21=HEAP[$x]; //@line 706 "_localemodule.c"
        var $22=(($21+4)&4294967295); //@line 706 "_localemodule.c"
        var $23=HEAP[$22]; //@line 706 "_localemodule.c"
        var $24=(($23+24)&4294967295); //@line 706 "_localemodule.c"
        var $25=HEAP[$24]; //@line 706 "_localemodule.c"
        var $26=HEAP[$x]; //@line 706 "_localemodule.c"
        FUNCTION_TABLE[$25]($26); //@line 706 "_localemodule.c"
        __label__ = 4; break; //@line 706 "_localemodule.c"
      case 4: // $bb3
        var $27=_PyInt_FromLong(2); //@line 708 "_localemodule.c"
        HEAP[$x]=$27; //@line 708 "_localemodule.c"
        var $28=HEAP[$d]; //@line 709 "_localemodule.c"
        var $29=HEAP[$x]; //@line 709 "_localemodule.c"
        var $30=_PyDict_SetItemString($28, ((__str106)&4294967295), $29); //@line 709 "_localemodule.c"
        var $31=HEAP[$x]; //@line 710 "_localemodule.c"
        var $32=($31)!=0; //@line 710 "_localemodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 710 "_localemodule.c"
      case 5: // $bb4
        var $33=HEAP[$x]; //@line 710 "_localemodule.c"
        var $34=(($33)&4294967295); //@line 710 "_localemodule.c"
        var $35=HEAP[$34]; //@line 710 "_localemodule.c"
        var $36=((($35) - 1)&4294967295); //@line 710 "_localemodule.c"
        var $37=HEAP[$x]; //@line 710 "_localemodule.c"
        var $38=(($37)&4294967295); //@line 710 "_localemodule.c"
        HEAP[$38]=$36; //@line 710 "_localemodule.c"
        var $39=HEAP[$x]; //@line 710 "_localemodule.c"
        var $40=(($39)&4294967295); //@line 710 "_localemodule.c"
        var $41=HEAP[$40]; //@line 710 "_localemodule.c"
        var $42=((($41))|0)==0; //@line 710 "_localemodule.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 710 "_localemodule.c"
      case 6: // $bb5
        var $43=HEAP[$x]; //@line 710 "_localemodule.c"
        var $44=(($43+4)&4294967295); //@line 710 "_localemodule.c"
        var $45=HEAP[$44]; //@line 710 "_localemodule.c"
        var $46=(($45+24)&4294967295); //@line 710 "_localemodule.c"
        var $47=HEAP[$46]; //@line 710 "_localemodule.c"
        var $48=HEAP[$x]; //@line 710 "_localemodule.c"
        FUNCTION_TABLE[$47]($48); //@line 710 "_localemodule.c"
        __label__ = 7; break; //@line 710 "_localemodule.c"
      case 7: // $bb6
        var $49=_PyInt_FromLong(3); //@line 712 "_localemodule.c"
        HEAP[$x]=$49; //@line 712 "_localemodule.c"
        var $50=HEAP[$d]; //@line 713 "_localemodule.c"
        var $51=HEAP[$x]; //@line 713 "_localemodule.c"
        var $52=_PyDict_SetItemString($50, ((__str107)&4294967295), $51); //@line 713 "_localemodule.c"
        var $53=HEAP[$x]; //@line 714 "_localemodule.c"
        var $54=($53)!=0; //@line 714 "_localemodule.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 714 "_localemodule.c"
      case 8: // $bb7
        var $55=HEAP[$x]; //@line 714 "_localemodule.c"
        var $56=(($55)&4294967295); //@line 714 "_localemodule.c"
        var $57=HEAP[$56]; //@line 714 "_localemodule.c"
        var $58=((($57) - 1)&4294967295); //@line 714 "_localemodule.c"
        var $59=HEAP[$x]; //@line 714 "_localemodule.c"
        var $60=(($59)&4294967295); //@line 714 "_localemodule.c"
        HEAP[$60]=$58; //@line 714 "_localemodule.c"
        var $61=HEAP[$x]; //@line 714 "_localemodule.c"
        var $62=(($61)&4294967295); //@line 714 "_localemodule.c"
        var $63=HEAP[$62]; //@line 714 "_localemodule.c"
        var $64=((($63))|0)==0; //@line 714 "_localemodule.c"
        if ($64) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 714 "_localemodule.c"
      case 9: // $bb8
        var $65=HEAP[$x]; //@line 714 "_localemodule.c"
        var $66=(($65+4)&4294967295); //@line 714 "_localemodule.c"
        var $67=HEAP[$66]; //@line 714 "_localemodule.c"
        var $68=(($67+24)&4294967295); //@line 714 "_localemodule.c"
        var $69=HEAP[$68]; //@line 714 "_localemodule.c"
        var $70=HEAP[$x]; //@line 714 "_localemodule.c"
        FUNCTION_TABLE[$69]($70); //@line 714 "_localemodule.c"
        __label__ = 10; break; //@line 714 "_localemodule.c"
      case 10: // $bb9
        var $71=_PyInt_FromLong(4); //@line 716 "_localemodule.c"
        HEAP[$x]=$71; //@line 716 "_localemodule.c"
        var $72=HEAP[$d]; //@line 717 "_localemodule.c"
        var $73=HEAP[$x]; //@line 717 "_localemodule.c"
        var $74=_PyDict_SetItemString($72, ((__str108)&4294967295), $73); //@line 717 "_localemodule.c"
        var $75=HEAP[$x]; //@line 718 "_localemodule.c"
        var $76=($75)!=0; //@line 718 "_localemodule.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 718 "_localemodule.c"
      case 11: // $bb10
        var $77=HEAP[$x]; //@line 718 "_localemodule.c"
        var $78=(($77)&4294967295); //@line 718 "_localemodule.c"
        var $79=HEAP[$78]; //@line 718 "_localemodule.c"
        var $80=((($79) - 1)&4294967295); //@line 718 "_localemodule.c"
        var $81=HEAP[$x]; //@line 718 "_localemodule.c"
        var $82=(($81)&4294967295); //@line 718 "_localemodule.c"
        HEAP[$82]=$80; //@line 718 "_localemodule.c"
        var $83=HEAP[$x]; //@line 718 "_localemodule.c"
        var $84=(($83)&4294967295); //@line 718 "_localemodule.c"
        var $85=HEAP[$84]; //@line 718 "_localemodule.c"
        var $86=((($85))|0)==0; //@line 718 "_localemodule.c"
        if ($86) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 718 "_localemodule.c"
      case 12: // $bb11
        var $87=HEAP[$x]; //@line 718 "_localemodule.c"
        var $88=(($87+4)&4294967295); //@line 718 "_localemodule.c"
        var $89=HEAP[$88]; //@line 718 "_localemodule.c"
        var $90=(($89+24)&4294967295); //@line 718 "_localemodule.c"
        var $91=HEAP[$90]; //@line 718 "_localemodule.c"
        var $92=HEAP[$x]; //@line 718 "_localemodule.c"
        FUNCTION_TABLE[$91]($92); //@line 718 "_localemodule.c"
        __label__ = 13; break; //@line 718 "_localemodule.c"
      case 13: // $bb12
        var $93=_PyInt_FromLong(5); //@line 721 "_localemodule.c"
        HEAP[$x]=$93; //@line 721 "_localemodule.c"
        var $94=HEAP[$d]; //@line 722 "_localemodule.c"
        var $95=HEAP[$x]; //@line 722 "_localemodule.c"
        var $96=_PyDict_SetItemString($94, ((__str109)&4294967295), $95); //@line 722 "_localemodule.c"
        var $97=HEAP[$x]; //@line 723 "_localemodule.c"
        var $98=($97)!=0; //@line 723 "_localemodule.c"
        if ($98) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 723 "_localemodule.c"
      case 14: // $bb13
        var $99=HEAP[$x]; //@line 723 "_localemodule.c"
        var $100=(($99)&4294967295); //@line 723 "_localemodule.c"
        var $101=HEAP[$100]; //@line 723 "_localemodule.c"
        var $102=((($101) - 1)&4294967295); //@line 723 "_localemodule.c"
        var $103=HEAP[$x]; //@line 723 "_localemodule.c"
        var $104=(($103)&4294967295); //@line 723 "_localemodule.c"
        HEAP[$104]=$102; //@line 723 "_localemodule.c"
        var $105=HEAP[$x]; //@line 723 "_localemodule.c"
        var $106=(($105)&4294967295); //@line 723 "_localemodule.c"
        var $107=HEAP[$106]; //@line 723 "_localemodule.c"
        var $108=((($107))|0)==0; //@line 723 "_localemodule.c"
        if ($108) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 723 "_localemodule.c"
      case 15: // $bb14
        var $109=HEAP[$x]; //@line 723 "_localemodule.c"
        var $110=(($109+4)&4294967295); //@line 723 "_localemodule.c"
        var $111=HEAP[$110]; //@line 723 "_localemodule.c"
        var $112=(($111+24)&4294967295); //@line 723 "_localemodule.c"
        var $113=HEAP[$112]; //@line 723 "_localemodule.c"
        var $114=HEAP[$x]; //@line 723 "_localemodule.c"
        FUNCTION_TABLE[$113]($114); //@line 723 "_localemodule.c"
        __label__ = 16; break; //@line 723 "_localemodule.c"
      case 16: // $bb15
        var $115=_PyInt_FromLong(1); //@line 726 "_localemodule.c"
        HEAP[$x]=$115; //@line 726 "_localemodule.c"
        var $116=HEAP[$d]; //@line 727 "_localemodule.c"
        var $117=HEAP[$x]; //@line 727 "_localemodule.c"
        var $118=_PyDict_SetItemString($116, ((__str110)&4294967295), $117); //@line 727 "_localemodule.c"
        var $119=HEAP[$x]; //@line 728 "_localemodule.c"
        var $120=($119)!=0; //@line 728 "_localemodule.c"
        if ($120) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 728 "_localemodule.c"
      case 17: // $bb16
        var $121=HEAP[$x]; //@line 728 "_localemodule.c"
        var $122=(($121)&4294967295); //@line 728 "_localemodule.c"
        var $123=HEAP[$122]; //@line 728 "_localemodule.c"
        var $124=((($123) - 1)&4294967295); //@line 728 "_localemodule.c"
        var $125=HEAP[$x]; //@line 728 "_localemodule.c"
        var $126=(($125)&4294967295); //@line 728 "_localemodule.c"
        HEAP[$126]=$124; //@line 728 "_localemodule.c"
        var $127=HEAP[$x]; //@line 728 "_localemodule.c"
        var $128=(($127)&4294967295); //@line 728 "_localemodule.c"
        var $129=HEAP[$128]; //@line 728 "_localemodule.c"
        var $130=((($129))|0)==0; //@line 728 "_localemodule.c"
        if ($130) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 728 "_localemodule.c"
      case 18: // $bb17
        var $131=HEAP[$x]; //@line 728 "_localemodule.c"
        var $132=(($131+4)&4294967295); //@line 728 "_localemodule.c"
        var $133=HEAP[$132]; //@line 728 "_localemodule.c"
        var $134=(($133+24)&4294967295); //@line 728 "_localemodule.c"
        var $135=HEAP[$134]; //@line 728 "_localemodule.c"
        var $136=HEAP[$x]; //@line 728 "_localemodule.c"
        FUNCTION_TABLE[$135]($136); //@line 728 "_localemodule.c"
        __label__ = 19; break; //@line 728 "_localemodule.c"
      case 19: // $bb18
        var $137=_PyInt_FromLong(6); //@line 730 "_localemodule.c"
        HEAP[$x]=$137; //@line 730 "_localemodule.c"
        var $138=HEAP[$d]; //@line 731 "_localemodule.c"
        var $139=HEAP[$x]; //@line 731 "_localemodule.c"
        var $140=_PyDict_SetItemString($138, ((__str111)&4294967295), $139); //@line 731 "_localemodule.c"
        var $141=HEAP[$x]; //@line 732 "_localemodule.c"
        var $142=($141)!=0; //@line 732 "_localemodule.c"
        if ($142) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 732 "_localemodule.c"
      case 20: // $bb19
        var $143=HEAP[$x]; //@line 732 "_localemodule.c"
        var $144=(($143)&4294967295); //@line 732 "_localemodule.c"
        var $145=HEAP[$144]; //@line 732 "_localemodule.c"
        var $146=((($145) - 1)&4294967295); //@line 732 "_localemodule.c"
        var $147=HEAP[$x]; //@line 732 "_localemodule.c"
        var $148=(($147)&4294967295); //@line 732 "_localemodule.c"
        HEAP[$148]=$146; //@line 732 "_localemodule.c"
        var $149=HEAP[$x]; //@line 732 "_localemodule.c"
        var $150=(($149)&4294967295); //@line 732 "_localemodule.c"
        var $151=HEAP[$150]; //@line 732 "_localemodule.c"
        var $152=((($151))|0)==0; //@line 732 "_localemodule.c"
        if ($152) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 732 "_localemodule.c"
      case 21: // $bb20
        var $153=HEAP[$x]; //@line 732 "_localemodule.c"
        var $154=(($153+4)&4294967295); //@line 732 "_localemodule.c"
        var $155=HEAP[$154]; //@line 732 "_localemodule.c"
        var $156=(($155+24)&4294967295); //@line 732 "_localemodule.c"
        var $157=HEAP[$156]; //@line 732 "_localemodule.c"
        var $158=HEAP[$x]; //@line 732 "_localemodule.c"
        FUNCTION_TABLE[$157]($158); //@line 732 "_localemodule.c"
        __label__ = 22; break; //@line 732 "_localemodule.c"
      case 22: // $bb21
        var $159=_PyInt_FromLong(127); //@line 734 "_localemodule.c"
        HEAP[$x]=$159; //@line 734 "_localemodule.c"
        var $160=HEAP[$d]; //@line 735 "_localemodule.c"
        var $161=HEAP[$x]; //@line 735 "_localemodule.c"
        var $162=_PyDict_SetItemString($160, ((__str112)&4294967295), $161); //@line 735 "_localemodule.c"
        var $163=HEAP[$x]; //@line 736 "_localemodule.c"
        var $164=($163)!=0; //@line 736 "_localemodule.c"
        if ($164) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 736 "_localemodule.c"
      case 23: // $bb22
        var $165=HEAP[$x]; //@line 736 "_localemodule.c"
        var $166=(($165)&4294967295); //@line 736 "_localemodule.c"
        var $167=HEAP[$166]; //@line 736 "_localemodule.c"
        var $168=((($167) - 1)&4294967295); //@line 736 "_localemodule.c"
        var $169=HEAP[$x]; //@line 736 "_localemodule.c"
        var $170=(($169)&4294967295); //@line 736 "_localemodule.c"
        HEAP[$170]=$168; //@line 736 "_localemodule.c"
        var $171=HEAP[$x]; //@line 736 "_localemodule.c"
        var $172=(($171)&4294967295); //@line 736 "_localemodule.c"
        var $173=HEAP[$172]; //@line 736 "_localemodule.c"
        var $174=((($173))|0)==0; //@line 736 "_localemodule.c"
        if ($174) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 736 "_localemodule.c"
      case 24: // $bb23
        var $175=HEAP[$x]; //@line 736 "_localemodule.c"
        var $176=(($175+4)&4294967295); //@line 736 "_localemodule.c"
        var $177=HEAP[$176]; //@line 736 "_localemodule.c"
        var $178=(($177+24)&4294967295); //@line 736 "_localemodule.c"
        var $179=HEAP[$178]; //@line 736 "_localemodule.c"
        var $180=HEAP[$x]; //@line 736 "_localemodule.c"
        FUNCTION_TABLE[$179]($180); //@line 736 "_localemodule.c"
        __label__ = 25; break; //@line 736 "_localemodule.c"
      case 25: // $bb24
        var $181=_PyErr_NewException(((__str113)&4294967295), 0, 0); //@line 738 "_localemodule.c"
        HEAP[_Error]=$181; //@line 738 "_localemodule.c"
        var $182=HEAP[_Error]; //@line 739 "_localemodule.c"
        var $183=HEAP[$d]; //@line 739 "_localemodule.c"
        var $184=_PyDict_SetItemString($183, ((__str114)&4294967295), $182); //@line 739 "_localemodule.c"
        var $185=_PyString_FromString(((_locale__doc__)&4294967295)); //@line 741 "_localemodule.c"
        HEAP[$x]=$185; //@line 741 "_localemodule.c"
        var $186=HEAP[$d]; //@line 742 "_localemodule.c"
        var $187=HEAP[$x]; //@line 742 "_localemodule.c"
        var $188=_PyDict_SetItemString($186, ((__str115)&4294967295), $187); //@line 742 "_localemodule.c"
        var $189=HEAP[$x]; //@line 743 "_localemodule.c"
        var $190=($189)!=0; //@line 743 "_localemodule.c"
        if ($190) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 743 "_localemodule.c"
      case 26: // $bb25
        var $191=HEAP[$x]; //@line 743 "_localemodule.c"
        var $192=(($191)&4294967295); //@line 743 "_localemodule.c"
        var $193=HEAP[$192]; //@line 743 "_localemodule.c"
        var $194=((($193) - 1)&4294967295); //@line 743 "_localemodule.c"
        var $195=HEAP[$x]; //@line 743 "_localemodule.c"
        var $196=(($195)&4294967295); //@line 743 "_localemodule.c"
        HEAP[$196]=$194; //@line 743 "_localemodule.c"
        var $197=HEAP[$x]; //@line 743 "_localemodule.c"
        var $198=(($197)&4294967295); //@line 743 "_localemodule.c"
        var $199=HEAP[$198]; //@line 743 "_localemodule.c"
        var $200=((($199))|0)==0; //@line 743 "_localemodule.c"
        if ($200) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 743 "_localemodule.c"
      case 27: // $bb26
        var $201=HEAP[$x]; //@line 743 "_localemodule.c"
        var $202=(($201+4)&4294967295); //@line 743 "_localemodule.c"
        var $203=HEAP[$202]; //@line 743 "_localemodule.c"
        var $204=(($203+24)&4294967295); //@line 743 "_localemodule.c"
        var $205=HEAP[$204]; //@line 743 "_localemodule.c"
        var $206=HEAP[$x]; //@line 743 "_localemodule.c"
        FUNCTION_TABLE[$205]($206); //@line 743 "_localemodule.c"
        __label__ = 28; break; //@line 743 "_localemodule.c"
      case 28: // $bb27
        HEAP[$i]=0; //@line 746 "_localemodule.c"
        __label__ = 30; break; //@line 746 "_localemodule.c"
      case 29: // $bb28
        var $207=HEAP[$i]; //@line 747 "_localemodule.c"
        var $208=((_langinfo_constants+$207*8)&4294967295); //@line 747 "_localemodule.c"
        var $209=(($208+4)&4294967295); //@line 747 "_localemodule.c"
        var $210=HEAP[$209]; //@line 747 "_localemodule.c"
        var $211=HEAP[$i]; //@line 747 "_localemodule.c"
        var $212=((_langinfo_constants+$211*8)&4294967295); //@line 747 "_localemodule.c"
        var $213=(($212)&4294967295); //@line 747 "_localemodule.c"
        var $214=HEAP[$213]; //@line 747 "_localemodule.c"
        var $215=HEAP[$m]; //@line 747 "_localemodule.c"
        var $216=_PyModule_AddIntConstant($215, $214, $210); //@line 747 "_localemodule.c"
        var $217=HEAP[$i]; //@line 746 "_localemodule.c"
        var $218=((($217) + 1)&4294967295); //@line 746 "_localemodule.c"
        HEAP[$i]=$218; //@line 746 "_localemodule.c"
        __label__ = 30; break; //@line 746 "_localemodule.c"
      case 30: // $bb29
        var $219=HEAP[$i]; //@line 746 "_localemodule.c"
        var $220=((_langinfo_constants+$219*8)&4294967295); //@line 746 "_localemodule.c"
        var $221=(($220)&4294967295); //@line 746 "_localemodule.c"
        var $222=HEAP[$221]; //@line 746 "_localemodule.c"
        var $223=($222)!=0; //@line 746 "_localemodule.c"
        if ($223) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 746 "_localemodule.c"
      case 31: // $bb30
        __label__ = 32; break; //@line 700 "_localemodule.c"
      case 32: // $return
        STACKTOP = __stackBase__;
        return; //@line 700 "_localemodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_locale"] = _init_locale;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyLocale_setlocale,0,_PyLocale_localeconv,0,_PyLocale_strcoll,0,_PyLocale_strxfrm,0,_PyLocale_nl_langinfo,0,_PyIntl_gettext,0,_PyIntl_dgettext,0,_PyIntl_dcgettext,0,_PyIntl_textdomain,0,_PyIntl_bindtextdomain,0,_PyIntl_bind_textdomain_codeset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_locale__doc__=allocate([83,117,112,112,111,114,116,32,102,111,114,32,80,79,83,73,88,32,108,111,99,97,108,101,115,46,0] /* Support for POSIX lo */, "i8", ALLOC_NORMAL);
_setlocale__doc__=allocate([40,105,110,116,101,103,101,114,44,115,116,114,105,110,103,61,78,111,110,101,41,32,45,62,32,115,116,114,105,110,103,46,32,65,99,116,105,118,97,116,101,115,47,113,117,101,114,105,101,115,32,108,111,99,97,108,101,32,112,114,111,99,101,115,115,105,110,103,46,0] /* (integer,string=None */, "i8", ALLOC_NORMAL);
__str=allocate([115,116,114,105,110,103,0] /* string\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,111,112,0] /* strop\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([117,112,112,101,114,99,97,115,101,0] /* uppercase\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([108,111,119,101,114,99,97,115,101,0] /* lowercase\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([108,101,116,116,101,114,115,0] /* letters\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([105,124,122,58,115,101,116,108,111,99,97,108,101,0] /* i|z:setlocale\00 */, "i8", ALLOC_NORMAL);
_Error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str6=allocate([117,110,115,117,112,112,111,114,116,101,100,32,108,111,99,97,108,101,32,115,101,116,116,105,110,103,0] /* unsupported locale s */, "i8", ALLOC_NORMAL);
__str7=allocate([108,111,99,97,108,101,32,113,117,101,114,121,32,102,97,105,108,101,100,0] /* locale query failed\ */, "i8", ALLOC_NORMAL);
_localeconv__doc__=allocate([40,41,32,45,62,32,100,105,99,116,46,32,82,101,116,117,114,110,115,32,110,117,109,101,114,105,99,32,97,110,100,32,109,111,110,101,116,97,114,121,32,108,111,99,97,108,101,45,115,112,101,99,105,102,105,99,32,112,97,114,97,109,101,116,101,114,115,46,0] /* () -> dict. Returns  */, "i8", ALLOC_NORMAL);
__str8=allocate([100,101,99,105,109,97,108,95,112,111,105,110,116,0] /* decimal_point\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([116,104,111,117,115,97,110,100,115,95,115,101,112,0] /* thousands_sep\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([103,114,111,117,112,105,110,103,0] /* grouping\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([105,110,116,95,99,117,114,114,95,115,121,109,98,111,108,0] /* int_curr_symbol\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([99,117,114,114,101,110,99,121,95,115,121,109,98,111,108,0] /* currency_symbol\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([109,111,110,95,100,101,99,105,109,97,108,95,112,111,105,110,116,0] /* mon_decimal_point\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([109,111,110,95,116,104,111,117,115,97,110,100,115,95,115,101,112,0] /* mon_thousands_sep\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([109,111,110,95,103,114,111,117,112,105,110,103,0] /* mon_grouping\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([112,111,115,105,116,105,118,101,95,115,105,103,110,0] /* positive_sign\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([110,101,103,97,116,105,118,101,95,115,105,103,110,0] /* negative_sign\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([105,110,116,95,102,114,97,99,95,100,105,103,105,116,115,0] /* int_frac_digits\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([102,114,97,99,95,100,105,103,105,116,115,0] /* frac_digits\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([112,95,99,115,95,112,114,101,99,101,100,101,115,0] /* p_cs_precedes\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([112,95,115,101,112,95,98,121,95,115,112,97,99,101,0] /* p_sep_by_space\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([110,95,99,115,95,112,114,101,99,101,100,101,115,0] /* n_cs_precedes\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([110,95,115,101,112,95,98,121,95,115,112,97,99,101,0] /* n_sep_by_space\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([112,95,115,105,103,110,95,112,111,115,110,0] /* p_sign_posn\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([110,95,115,105,103,110,95,112,111,115,110,0] /* n_sign_posn\00 */, "i8", ALLOC_NORMAL);
_strcoll__doc__=allocate([115,116,114,105,110,103,44,115,116,114,105,110,103,32,45,62,32,105,110,116,46,32,67,111,109,112,97,114,101,115,32,116,119,111,32,115,116,114,105,110,103,115,32,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,108,111,99,97,108,101,46,0] /* string,string -> int */, "i8", ALLOC_NORMAL);
__str26=allocate([115,116,114,99,111,108,108,0] /* strcoll\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,116,114,99,111,108,108,32,97,114,103,117,109,101,110,116,115,32,109,117,115,116,32,98,101,32,115,116,114,105,110,103,115,0] /* strcoll arguments mu */, "i8", ALLOC_NORMAL);
_strxfrm__doc__=allocate([115,116,114,105,110,103,32,45,62,32,115,116,114,105,110,103,46,32,82,101,116,117,114,110,115,32,97,32,115,116,114,105,110,103,32,116,104,97,116,32,98,101,104,97,118,101,115,32,102,111,114,32,99,109,112,32,108,111,99,97,108,101,45,97,119,97,114,101,46,0] /* string -> string. Re */, "i8", ALLOC_NORMAL);
__str28=allocate([115,58,115,116,114,120,102,114,109,0] /* s:strxfrm\00 */, "i8", ALLOC_NORMAL);
_langinfo_constants=allocate([0, 0, 0, 0, 131079, 0, 0, 0, 0, 0, 0, 0, 131080, 0, 0, 0, 0, 0, 0, 0, 131081, 0, 0, 0, 0, 0, 0, 0, 131082, 0, 0, 0, 0, 0, 0, 0, 131083, 0, 0, 0, 0, 0, 0, 0, 131084, 0, 0, 0, 0, 0, 0, 0, 131085, 0, 0, 0, 0, 0, 0, 0, 131072, 0, 0, 0, 0, 0, 0, 0, 131073, 0, 0, 0, 0, 0, 0, 0, 131074, 0, 0, 0, 0, 0, 0, 0, 131075, 0, 0, 0, 0, 0, 0, 0, 131076, 0, 0, 0, 0, 0, 0, 0, 131077, 0, 0, 0, 0, 0, 0, 0, 131078, 0, 0, 0, 0, 0, 0, 0, 131098, 0, 0, 0, 0, 0, 0, 0, 131099, 0, 0, 0, 0, 0, 0, 0, 131100, 0, 0, 0, 0, 0, 0, 0, 131101, 0, 0, 0, 0, 0, 0, 0, 131102, 0, 0, 0, 0, 0, 0, 0, 131103, 0, 0, 0, 0, 0, 0, 0, 131104, 0, 0, 0, 0, 0, 0, 0, 131105, 0, 0, 0, 0, 0, 0, 0, 131106, 0, 0, 0, 0, 0, 0, 0, 131107, 0, 0, 0, 0, 0, 0, 0, 131108, 0, 0, 0, 0, 0, 0, 0, 131109, 0, 0, 0, 0, 0, 0, 0, 131086, 0, 0, 0, 0, 0, 0, 0, 131087, 0, 0, 0, 0, 0, 0, 0, 131088, 0, 0, 0, 0, 0, 0, 0, 131089, 0, 0, 0, 0, 0, 0, 0, 131090, 0, 0, 0, 0, 0, 0, 0, 131091, 0, 0, 0, 0, 0, 0, 0, 131092, 0, 0, 0, 0, 0, 0, 0, 131093, 0, 0, 0, 0, 0, 0, 0, 131094, 0, 0, 0, 0, 0, 0, 0, 131095, 0, 0, 0, 0, 0, 0, 0, 131096, 0, 0, 0, 0, 0, 0, 0, 131097, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 65537, 0, 0, 0, 0, 0, 0, 0, 262159, 0, 0, 0, 0, 0, 0, 0, 131112, 0, 0, 0, 0, 0, 0, 0, 131113, 0, 0, 0, 0, 0, 0, 0, 131114, 0, 0, 0, 0, 0, 0, 0, 131110, 0, 0, 0, 0, 0, 0, 0, 131111, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 131115, 0, 0, 0, 0, 0, 0, 0, 131116, 0, 0, 0, 0, 0, 0, 0, 131118, 0, 0, 0, 0, 0, 0, 0, 131120, 0, 0, 0, 0, 0, 0, 0, 131121, 0, 0, 0, 0, 0, 0, 0, 131119, 0, 0, 0, 0, 0, 0, 0, 327680, 0, 0, 0, 0, 0, 0, 0, 327681, 0, 0, 0, 0, 0, 0, 0, 131180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str29=allocate([68,65,89,95,49,0] /* DAY_1\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([68,65,89,95,50,0] /* DAY_2\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([68,65,89,95,51,0] /* DAY_3\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([68,65,89,95,52,0] /* DAY_4\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([68,65,89,95,53,0] /* DAY_5\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([68,65,89,95,54,0] /* DAY_6\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([68,65,89,95,55,0] /* DAY_7\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([65,66,68,65,89,95,49,0] /* ABDAY_1\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([65,66,68,65,89,95,50,0] /* ABDAY_2\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([65,66,68,65,89,95,51,0] /* ABDAY_3\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([65,66,68,65,89,95,52,0] /* ABDAY_4\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([65,66,68,65,89,95,53,0] /* ABDAY_5\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([65,66,68,65,89,95,54,0] /* ABDAY_6\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([65,66,68,65,89,95,55,0] /* ABDAY_7\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([77,79,78,95,49,0] /* MON_1\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([77,79,78,95,50,0] /* MON_2\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([77,79,78,95,51,0] /* MON_3\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([77,79,78,95,52,0] /* MON_4\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([77,79,78,95,53,0] /* MON_5\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([77,79,78,95,54,0] /* MON_6\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([77,79,78,95,55,0] /* MON_7\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([77,79,78,95,56,0] /* MON_8\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([77,79,78,95,57,0] /* MON_9\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([77,79,78,95,49,48,0] /* MON_10\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([77,79,78,95,49,49,0] /* MON_11\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([77,79,78,95,49,50,0] /* MON_12\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([65,66,77,79,78,95,49,0] /* ABMON_1\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([65,66,77,79,78,95,50,0] /* ABMON_2\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([65,66,77,79,78,95,51,0] /* ABMON_3\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([65,66,77,79,78,95,52,0] /* ABMON_4\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([65,66,77,79,78,95,53,0] /* ABMON_5\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([65,66,77,79,78,95,54,0] /* ABMON_6\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([65,66,77,79,78,95,55,0] /* ABMON_7\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([65,66,77,79,78,95,56,0] /* ABMON_8\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([65,66,77,79,78,95,57,0] /* ABMON_9\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([65,66,77,79,78,95,49,48,0] /* ABMON_10\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([65,66,77,79,78,95,49,49,0] /* ABMON_11\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([65,66,77,79,78,95,49,50,0] /* ABMON_12\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([82,65,68,73,88,67,72,65,82,0] /* RADIXCHAR\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([84,72,79,85,83,69,80,0] /* THOUSEP\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([67,82,78,67,89,83,84,82,0] /* CRNCYSTR\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([68,95,84,95,70,77,84,0] /* D_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([68,95,70,77,84,0] /* D_FMT\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([84,95,70,77,84,0] /* T_FMT\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([65,77,95,83,84,82,0] /* AM_STR\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([80,77,95,83,84,82,0] /* PM_STR\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([67,79,68,69,83,69,84,0] /* CODESET\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([84,95,70,77,84,95,65,77,80,77,0] /* T_FMT_AMPM\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([69,82,65,0] /* ERA\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([69,82,65,95,68,95,70,77,84,0] /* ERA_D_FMT\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([69,82,65,95,68,95,84,95,70,77,84,0] /* ERA_D_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([69,82,65,95,84,95,70,77,84,0] /* ERA_T_FMT\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([65,76,84,95,68,73,71,73,84,83,0] /* ALT_DIGITS\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([89,69,83,69,88,80,82,0] /* YESEXPR\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([78,79,69,88,80,82,0] /* NOEXPR\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([95,68,65,84,69,95,70,77,84,0] /* _DATE_FMT\00 */, "i8", ALLOC_NORMAL);
_nl_langinfo__doc__=allocate([110,108,95,108,97,110,103,105,110,102,111,40,107,101,121,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,104,101,32,118,97,108,117,101,32,102,111,114,32,116,104,101,32,108,111,99,97,108,101,32,105,110,102,111,114,109,97,116,105,111,110,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,107,101,121,46,0] /* nl_langinfo(key) ->  */, "i8", ALLOC_NORMAL);
__str85=allocate([105,58,110,108,95,108,97,110,103,105,110,102,111,0] /* i:nl_langinfo\00 */, "i8", ALLOC_NORMAL);
__str86=allocate(1, "i8", ALLOC_NORMAL);
__str87=allocate([117,110,115,117,112,112,111,114,116,101,100,32,108,97,110,103,105,110,102,111,32,99,111,110,115,116,97,110,116,0] /* unsupported langinfo */, "i8", ALLOC_NORMAL);
_gettext__doc__=allocate([103,101,116,116,101,120,116,40,109,115,103,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,46,0] /* gettext(msg) -> stri */, "i8", ALLOC_NORMAL);
__str88=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
_dgettext__doc__=allocate([100,103,101,116,116,101,120,116,40,100,111,109,97,105,110,44,32,109,115,103,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,32,105,110,32,100,111,109,97,105,110,46,0] /* dgettext(domain, msg */, "i8", ALLOC_NORMAL);
__str89=allocate([122,115,0] /* zs\00 */, "i8", ALLOC_NORMAL);
_dcgettext__doc__=allocate([100,99,103,101,116,116,101,120,116,40,100,111,109,97,105,110,44,32,109,115,103,44,32,99,97,116,101,103,111,114,121,41,32,45,62,32,115,116,114,105,110,103,10,82,101,116,117,114,110,32,116,114,97,110,115,108,97,116,105,111,110,32,111,102,32,109,115,103,32,105,110,32,100,111,109,97,105,110,32,97,110,100,32,99,97,116,101,103,111,114,121,46,0] /* dcgettext(domain, ms */, "i8", ALLOC_NORMAL);
__str90=allocate([122,115,105,0] /* zsi\00 */, "i8", ALLOC_NORMAL);
_textdomain__doc__=allocate([116,101,120,116,100,111,109,97,105,110,40,100,111,109,97,105,110,41,32,45,62,32,115,116,114,105,110,103,10,83,101,116,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,116,101,120,116,100,109,97,105,110,32,116,111,32,100,111,109,97,105,110,44,32,114,101,116,117,114,110,105,110,103,32,116,104,101,32,110,101,119,32,100,111,109,97,105,110,46,0] /* textdomain(domain) - */, "i8", ALLOC_NORMAL);
__str91=allocate([122,0] /* z\00 */, "i8", ALLOC_NORMAL);
_bindtextdomain__doc__=allocate([98,105,110,100,116,101,120,116,100,111,109,97,105,110,40,100,111,109,97,105,110,44,32,100,105,114,41,32,45,62,32,115,116,114,105,110,103,10,66,105,110,100,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,100,111,109,97,105,110,32,116,111,32,100,105,114,46,0] /* bindtextdomain(domai */, "i8", ALLOC_NORMAL);
__str92=allocate([115,122,0] /* sz\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([100,111,109,97,105,110,32,109,117,115,116,32,98,101,32,97,32,110,111,110,45,101,109,112,116,121,32,115,116,114,105,110,103,0] /* domain must be a non */, "i8", ALLOC_NORMAL);
_bind_textdomain_codeset__doc__=allocate([98,105,110,100,95,116,101,120,116,100,111,109,97,105,110,95,99,111,100,101,115,101,116,40,100,111,109,97,105,110,44,32,99,111,100,101,115,101,116,41,32,45,62,32,115,116,114,105,110,103,10,66,105,110,100,32,116,104,101,32,67,32,108,105,98,114,97,114,121,39,115,32,100,111,109,97,105,110,32,116,111,32,99,111,100,101,115,101,116,46,0] /* bind_textdomain_code */, "i8", ALLOC_NORMAL);
__str94=allocate([115,101,116,108,111,99,97,108,101,0] /* setlocale\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([108,111,99,97,108,101,99,111,110,118,0] /* localeconv\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([115,116,114,120,102,114,109,0] /* strxfrm\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([110,108,95,108,97,110,103,105,110,102,111,0] /* nl_langinfo\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([103,101,116,116,101,120,116,0] /* gettext\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([100,103,101,116,116,101,120,116,0] /* dgettext\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([100,99,103,101,116,116,101,120,116,0] /* dcgettext\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([116,101,120,116,100,111,109,97,105,110,0] /* textdomain\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([98,105,110,100,116,101,120,116,100,111,109,97,105,110,0] /* bindtextdomain\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([98,105,110,100,95,116,101,120,116,100,111,109,97,105,110,95,99,111,100,101,115,101,116,0] /* bind_textdomain_code */, "i8", ALLOC_NORMAL);
_PyLocale_Methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str104=allocate([95,108,111,99,97,108,101,0] /* _locale\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([76,67,95,67,84,89,80,69,0] /* LC_CTYPE\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([76,67,95,84,73,77,69,0] /* LC_TIME\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([76,67,95,67,79,76,76,65,84,69,0] /* LC_COLLATE\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([76,67,95,77,79,78,69,84,65,82,89,0] /* LC_MONETARY\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([76,67,95,77,69,83,83,65,71,69,83,0] /* LC_MESSAGES\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([76,67,95,78,85,77,69,82,73,67,0] /* LC_NUMERIC\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([76,67,95,65,76,76,0] /* LC_ALL\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([67,72,65,82,95,77,65,88,0] /* CHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([108,111,99,97,108,101,46,69,114,114,111,114,0] /* locale.Error\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
HEAP[_langinfo_constants]=((__str29)&4294967295);
HEAP[_langinfo_constants+8]=((__str30)&4294967295);
HEAP[_langinfo_constants+16]=((__str31)&4294967295);
HEAP[_langinfo_constants+24]=((__str32)&4294967295);
HEAP[_langinfo_constants+32]=((__str33)&4294967295);
HEAP[_langinfo_constants+40]=((__str34)&4294967295);
HEAP[_langinfo_constants+48]=((__str35)&4294967295);
HEAP[_langinfo_constants+56]=((__str36)&4294967295);
HEAP[_langinfo_constants+64]=((__str37)&4294967295);
HEAP[_langinfo_constants+72]=((__str38)&4294967295);
HEAP[_langinfo_constants+80]=((__str39)&4294967295);
HEAP[_langinfo_constants+88]=((__str40)&4294967295);
HEAP[_langinfo_constants+96]=((__str41)&4294967295);
HEAP[_langinfo_constants+104]=((__str42)&4294967295);
HEAP[_langinfo_constants+112]=((__str43)&4294967295);
HEAP[_langinfo_constants+120]=((__str44)&4294967295);
HEAP[_langinfo_constants+128]=((__str45)&4294967295);
HEAP[_langinfo_constants+136]=((__str46)&4294967295);
HEAP[_langinfo_constants+144]=((__str47)&4294967295);
HEAP[_langinfo_constants+152]=((__str48)&4294967295);
HEAP[_langinfo_constants+160]=((__str49)&4294967295);
HEAP[_langinfo_constants+168]=((__str50)&4294967295);
HEAP[_langinfo_constants+176]=((__str51)&4294967295);
HEAP[_langinfo_constants+184]=((__str52)&4294967295);
HEAP[_langinfo_constants+192]=((__str53)&4294967295);
HEAP[_langinfo_constants+200]=((__str54)&4294967295);
HEAP[_langinfo_constants+208]=((__str55)&4294967295);
HEAP[_langinfo_constants+216]=((__str56)&4294967295);
HEAP[_langinfo_constants+224]=((__str57)&4294967295);
HEAP[_langinfo_constants+232]=((__str58)&4294967295);
HEAP[_langinfo_constants+240]=((__str59)&4294967295);
HEAP[_langinfo_constants+248]=((__str60)&4294967295);
HEAP[_langinfo_constants+256]=((__str61)&4294967295);
HEAP[_langinfo_constants+264]=((__str62)&4294967295);
HEAP[_langinfo_constants+272]=((__str63)&4294967295);
HEAP[_langinfo_constants+280]=((__str64)&4294967295);
HEAP[_langinfo_constants+288]=((__str65)&4294967295);
HEAP[_langinfo_constants+296]=((__str66)&4294967295);
HEAP[_langinfo_constants+304]=((__str67)&4294967295);
HEAP[_langinfo_constants+312]=((__str68)&4294967295);
HEAP[_langinfo_constants+320]=((__str69)&4294967295);
HEAP[_langinfo_constants+328]=((__str70)&4294967295);
HEAP[_langinfo_constants+336]=((__str71)&4294967295);
HEAP[_langinfo_constants+344]=((__str72)&4294967295);
HEAP[_langinfo_constants+352]=((__str73)&4294967295);
HEAP[_langinfo_constants+360]=((__str74)&4294967295);
HEAP[_langinfo_constants+368]=((__str75)&4294967295);
HEAP[_langinfo_constants+376]=((__str76)&4294967295);
HEAP[_langinfo_constants+384]=((__str77)&4294967295);
HEAP[_langinfo_constants+392]=((__str78)&4294967295);
HEAP[_langinfo_constants+400]=((__str79)&4294967295);
HEAP[_langinfo_constants+408]=((__str80)&4294967295);
HEAP[_langinfo_constants+416]=((__str81)&4294967295);
HEAP[_langinfo_constants+424]=((__str82)&4294967295);
HEAP[_langinfo_constants+432]=((__str83)&4294967295);
HEAP[_langinfo_constants+440]=((__str84)&4294967295);
HEAP[_PyLocale_Methods]=((__str94)&4294967295);
HEAP[_PyLocale_Methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_PyLocale_Methods+12]=((_setlocale__doc__)&4294967295);
HEAP[_PyLocale_Methods+16]=((__str95)&4294967295);
HEAP[_PyLocale_Methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_PyLocale_Methods+28]=((_localeconv__doc__)&4294967295);
HEAP[_PyLocale_Methods+32]=((__str26)&4294967295);
HEAP[_PyLocale_Methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_PyLocale_Methods+44]=((_strcoll__doc__)&4294967295);
HEAP[_PyLocale_Methods+48]=((__str96)&4294967295);
HEAP[_PyLocale_Methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_PyLocale_Methods+60]=((_strxfrm__doc__)&4294967295);
HEAP[_PyLocale_Methods+64]=((__str97)&4294967295);
HEAP[_PyLocale_Methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyLocale_Methods+76]=((_nl_langinfo__doc__)&4294967295);
HEAP[_PyLocale_Methods+80]=((__str98)&4294967295);
HEAP[_PyLocale_Methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyLocale_Methods+92]=((_gettext__doc__)&4294967295);
HEAP[_PyLocale_Methods+96]=((__str99)&4294967295);
HEAP[_PyLocale_Methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyLocale_Methods+108]=((_dgettext__doc__)&4294967295);
HEAP[_PyLocale_Methods+112]=((__str100)&4294967295);
HEAP[_PyLocale_Methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyLocale_Methods+124]=((_dcgettext__doc__)&4294967295);
HEAP[_PyLocale_Methods+128]=((__str101)&4294967295);
HEAP[_PyLocale_Methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyLocale_Methods+140]=((_textdomain__doc__)&4294967295);
HEAP[_PyLocale_Methods+144]=((__str102)&4294967295);
HEAP[_PyLocale_Methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyLocale_Methods+156]=((_bindtextdomain__doc__)&4294967295);
HEAP[_PyLocale_Methods+160]=((__str103)&4294967295);
HEAP[_PyLocale_Methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyLocale_Methods+172]=((_bind_textdomain_codeset__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

