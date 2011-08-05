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



var $0___SIZE = 20; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 12; // %2
  
var $3___SIZE = 12; // %3
  
var $4___SIZE = 196; // %4
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyArena___SIZE = 0; // %struct.PyArena
  var $struct_PyArena___FLATTENER = [];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyCompilerFlags___SIZE = 4; // %struct.PyCompilerFlags
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PyST_Object___SIZE = 20; // %struct.PyST_Object
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__arguments___SIZE = 16; // %struct._arguments
  
var $struct__expr___SIZE = 32; // %struct._expr
  var $struct__expr___FLATTENER = [0,4,24,28];
var $struct__mod___SIZE = 8; // %struct._mod
  
var $struct__slice___SIZE = 16; // %struct._slice
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_anon___SIZE = 4; // %struct.anon
  
var $struct_arc___SIZE = 4; // %struct.arc
  
var $struct_asdl_int_seq___SIZE = 8; // %struct.asdl_int_seq
  
var $struct_asdl_seq___SIZE = 8; // %struct.asdl_seq
  
var $struct_dfa___SIZE = 24; // %struct.dfa
  
var $struct_grammar___SIZE = 24; // %struct.grammar
  var $struct_grammar___FLATTENER = [0,4,8,16,20];
var $struct_label___SIZE = 8; // %struct.label
  
var $struct_labellist___SIZE = 8; // %struct.labellist
  
var $struct_node___SIZE = 24; // %struct.node
  
var $struct_perrdetail___SIZE = 28; // %struct.perrdetail
  
var $struct_state___SIZE = 24; // %struct.state
  
var $union_anon___SIZE = 4; // %union.anon
  
var _parser_copyright_string;
var _parser_doc_string;
var _parser_version_string;
var __Py_NoneStruct;
var _PyExc_SystemError;
var __str;
var _parser_error;
var __str1;
var __str2;
var _PyST_Type;
var __str3;
var _keywords_9402;
var __str4;
var __str5;
var __str6;
var __str7;
var _Py_Py3kWarningFlag;
var _PyExc_DeprecationWarning;
var __str8;
var __str9;
var _keywords_9452;
var __str10;
var __str11;
var __str12;
var __str13;
var _keywords_9503;
var __str14;
var __str15;
var __str16;
var __str17;
var _keywords_9551;
var __str18;
var __Py_TrueStruct;
var __Py_ZeroStruct;
var __str19;
var _keywords_9577;
var __str20;
var _parser_methods;
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
var _keywords_9618;
var __str31;
var __PyParser_Grammar;
var __str32;
var __str33;
var __str34;
var _keywords_9672;
var __str35;
var _PyExc_ValueError;
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
var __str85;
var __str86;
var __str87;
var __str88;
var __str89;
var __str90;
var __str91;
var __str92;
var __str93;
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
var __str116;
var __str117;
var __str118;
var __str119;
var __str120;
var __str121;
var __str122;
var __str123;
var __str124;
var __str125;
var __str126;
var __str127;
var __str128;
var __str129;
var __str130;
var __str131;
var __str132;
var __str133;
var __str134;
var __str135;
var __str136;
var __str137;
var __str138;
var __str139;
var __str140;
var __str141;
var __str142;
var __str143;
var __str144;
var __str145;
var __str146;
var __str147;
var __str148;
var __str149;
var __str150;
var __str151;
var __str152;
var __str153;
var __str154;
var __str155;
var __str156;
var __str157;
var __str158;
var __str159;
var __str160;
var __str161;
var __str162;
var __str163;
var __str164;
var __str165;
var __str166;
var __str167;
var __str168;
var __str169;
var __str170;
var __str171;
var __str172;
var __str173;
var ___PRETTY_FUNCTION___13794;
var __str174;
var __str175;
var __str176;
var __str177;
var __str178;
var __str179;
var __str180;
var __str181;
var __str182;
var __str183;
var __str184;
var _pickle_constructor;
var __str185;
var __str186;
var __str187;
var _parser_functions;
var __str188;
var __str189;
var __str190;
var __str191;
var __str192;
var __str193;
var __str194;
var __str195;
var __str196;
var __str197;
var __str198;
var __str199;
var __str200;
var __str201;
var __str202;
var __str203;
var __str204;
var __str205;
var __str206;
var __str207;
var __str208;
var _PyType_Type;
var __str209;
var __str210;
var __str211;
var __str212;
var __str213;
var __str214;
var __str215;
var __str216;
var __str217;
var __str218;




















































  function _node2tuple($n, $mkseq, $addelem, $lineno, $col_offset) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr=__stackBase__;
        var $mkseq_addr=__stackBase__+4;
        var $addelem_addr=__stackBase__+8;
        var $lineno_addr=__stackBase__+12;
        var $col_offset_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $i=__stackBase__+28;
        var $v=__stackBase__+32;
        var $w=__stackBase__+36;
        var $result=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$n_addr]=$n;
        HEAP[$mkseq_addr]=$mkseq;
        HEAP[$addelem_addr]=$addelem;
        HEAP[$lineno_addr]=$lineno;
        HEAP[$col_offset_addr]=$col_offset;
        var $1=HEAP[$n_addr]; //@line 88 "parsermodule.c"
        var $2=($1)==0; //@line 88 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 88 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 89 "parsermodule.c"
        var $4=((($3) + 1)&4294967295); //@line 89 "parsermodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 89 "parsermodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 90 "parsermodule.c"
        __label__ = 27; break; //@line 90 "parsermodule.c"
      case 2: // $bb1
        var $5=HEAP[$n_addr]; //@line 92 "parsermodule.c"
        var $6=(($5)&4294967295); //@line 92 "parsermodule.c"
        var $7=HEAP[$6]; //@line 92 "parsermodule.c"
        var $8=reSign(($7), 16, 0) > 255; //@line 92 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 19; break; } //@line 92 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$n_addr]; //@line 97 "parsermodule.c"
        var $10=(($9+16)&4294967295); //@line 97 "parsermodule.c"
        var $11=HEAP[$10]; //@line 97 "parsermodule.c"
        var $12=((($11) + 1)&4294967295); //@line 97 "parsermodule.c"
        var $13=HEAP[$n_addr]; //@line 97 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 97 "parsermodule.c"
        var $15=HEAP[$14]; //@line 97 "parsermodule.c"
        var $16=reSign(($15), 16, 0)==339; //@line 97 "parsermodule.c"
        var $17=unSign(($16), 1, 0); //@line 97 "parsermodule.c"
        var $18=((($12) + ($17))&4294967295); //@line 97 "parsermodule.c"
        var $19=HEAP[$mkseq_addr]; //@line 97 "parsermodule.c"
        var $20=FUNCTION_TABLE[$19]($18); //@line 97 "parsermodule.c"
        HEAP[$v]=$20; //@line 97 "parsermodule.c"
        var $21=HEAP[$v]; //@line 98 "parsermodule.c"
        var $22=($21)==0; //@line 98 "parsermodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 98 "parsermodule.c"
      case 4: // $bb3
        var $23=HEAP[$v]; //@line 99 "parsermodule.c"
        HEAP[$0]=$23; //@line 99 "parsermodule.c"
        __label__ = 27; break; //@line 99 "parsermodule.c"
      case 5: // $bb4
        var $24=HEAP[$n_addr]; //@line 100 "parsermodule.c"
        var $25=(($24)&4294967295); //@line 100 "parsermodule.c"
        var $26=HEAP[$25]; //@line 100 "parsermodule.c"
        var $27=reSign(($26), 16, 0); //@line 100 "parsermodule.c"
        var $28=_PyInt_FromLong($27); //@line 100 "parsermodule.c"
        HEAP[$w]=$28; //@line 100 "parsermodule.c"
        var $29=HEAP[$w]; //@line 101 "parsermodule.c"
        var $30=($29)==0; //@line 101 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 101 "parsermodule.c"
      case 6: // $bb5
        var $31=HEAP[$v]; //@line 102 "parsermodule.c"
        var $32=(($31)&4294967295); //@line 102 "parsermodule.c"
        var $33=HEAP[$32]; //@line 102 "parsermodule.c"
        var $34=((($33) - 1)&4294967295); //@line 102 "parsermodule.c"
        var $35=HEAP[$v]; //@line 102 "parsermodule.c"
        var $36=(($35)&4294967295); //@line 102 "parsermodule.c"
        HEAP[$36]=$34; //@line 102 "parsermodule.c"
        var $37=HEAP[$v]; //@line 102 "parsermodule.c"
        var $38=(($37)&4294967295); //@line 102 "parsermodule.c"
        var $39=HEAP[$38]; //@line 102 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 102 "parsermodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 102 "parsermodule.c"
      case 7: // $bb6
        var $41=HEAP[$v]; //@line 102 "parsermodule.c"
        var $42=(($41+4)&4294967295); //@line 102 "parsermodule.c"
        var $43=HEAP[$42]; //@line 102 "parsermodule.c"
        var $44=(($43+24)&4294967295); //@line 102 "parsermodule.c"
        var $45=HEAP[$44]; //@line 102 "parsermodule.c"
        var $46=HEAP[$v]; //@line 102 "parsermodule.c"
        FUNCTION_TABLE[$45]($46); //@line 102 "parsermodule.c"
        __label__ = 8; break; //@line 102 "parsermodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 103 "parsermodule.c"
        __label__ = 27; break; //@line 103 "parsermodule.c"
      case 9: // $bb8
        var $47=HEAP[$addelem_addr]; //@line 105 "parsermodule.c"
        var $48=HEAP[$v]; //@line 105 "parsermodule.c"
        var $49=HEAP[$w]; //@line 105 "parsermodule.c"
        var $50=FUNCTION_TABLE[$47]($48, 0, $49); //@line 105 "parsermodule.c"
        HEAP[$i]=0; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 10: // $bb9
        var $51=HEAP[$n_addr]; //@line 107 "parsermodule.c"
        var $52=(($51+20)&4294967295); //@line 107 "parsermodule.c"
        var $53=HEAP[$52]; //@line 107 "parsermodule.c"
        var $54=HEAP[$i]; //@line 107 "parsermodule.c"
        var $55=(($53+24*$54)&4294967295); //@line 107 "parsermodule.c"
        var $56=HEAP[$mkseq_addr]; //@line 107 "parsermodule.c"
        var $57=HEAP[$addelem_addr]; //@line 107 "parsermodule.c"
        var $58=HEAP[$lineno_addr]; //@line 107 "parsermodule.c"
        var $59=HEAP[$col_offset_addr]; //@line 107 "parsermodule.c"
        var $60=_node2tuple($55, $56, $57, $58, $59); //@line 107 "parsermodule.c"
        HEAP[$w]=$60; //@line 107 "parsermodule.c"
        var $61=HEAP[$w]; //@line 108 "parsermodule.c"
        var $62=($61)==0; //@line 108 "parsermodule.c"
        if ($62) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 108 "parsermodule.c"
      case 11: // $bb10
        var $63=HEAP[$v]; //@line 109 "parsermodule.c"
        var $64=(($63)&4294967295); //@line 109 "parsermodule.c"
        var $65=HEAP[$64]; //@line 109 "parsermodule.c"
        var $66=((($65) - 1)&4294967295); //@line 109 "parsermodule.c"
        var $67=HEAP[$v]; //@line 109 "parsermodule.c"
        var $68=(($67)&4294967295); //@line 109 "parsermodule.c"
        HEAP[$68]=$66; //@line 109 "parsermodule.c"
        var $69=HEAP[$v]; //@line 109 "parsermodule.c"
        var $70=(($69)&4294967295); //@line 109 "parsermodule.c"
        var $71=HEAP[$70]; //@line 109 "parsermodule.c"
        var $72=((($71))|0)==0; //@line 109 "parsermodule.c"
        if ($72) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 109 "parsermodule.c"
      case 12: // $bb11
        var $73=HEAP[$v]; //@line 109 "parsermodule.c"
        var $74=(($73+4)&4294967295); //@line 109 "parsermodule.c"
        var $75=HEAP[$74]; //@line 109 "parsermodule.c"
        var $76=(($75+24)&4294967295); //@line 109 "parsermodule.c"
        var $77=HEAP[$76]; //@line 109 "parsermodule.c"
        var $78=HEAP[$v]; //@line 109 "parsermodule.c"
        FUNCTION_TABLE[$77]($78); //@line 109 "parsermodule.c"
        __label__ = 13; break; //@line 109 "parsermodule.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 110 "parsermodule.c"
        __label__ = 27; break; //@line 110 "parsermodule.c"
      case 14: // $bb13
        var $79=HEAP[$i]; //@line 112 "parsermodule.c"
        var $80=((($79) + 1)&4294967295); //@line 112 "parsermodule.c"
        var $81=HEAP[$addelem_addr]; //@line 112 "parsermodule.c"
        var $82=HEAP[$v]; //@line 112 "parsermodule.c"
        var $83=HEAP[$w]; //@line 112 "parsermodule.c"
        var $84=FUNCTION_TABLE[$81]($82, $80, $83); //@line 112 "parsermodule.c"
        var $85=HEAP[$i]; //@line 106 "parsermodule.c"
        var $86=((($85) + 1)&4294967295); //@line 106 "parsermodule.c"
        HEAP[$i]=$86; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 15: // $bb14
        var $87=HEAP[$n_addr]; //@line 106 "parsermodule.c"
        var $88=(($87+16)&4294967295); //@line 106 "parsermodule.c"
        var $89=HEAP[$88]; //@line 106 "parsermodule.c"
        var $90=HEAP[$i]; //@line 106 "parsermodule.c"
        var $91=((($89))|0) > ((($90))|0); //@line 106 "parsermodule.c"
        if ($91) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 106 "parsermodule.c"
      case 16: // $bb15
        var $92=HEAP[$n_addr]; //@line 115 "parsermodule.c"
        var $93=(($92)&4294967295); //@line 115 "parsermodule.c"
        var $94=HEAP[$93]; //@line 115 "parsermodule.c"
        var $95=reSign(($94), 16, 0)==339; //@line 115 "parsermodule.c"
        if ($95) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 115 "parsermodule.c"
      case 17: // $bb16
        var $96=HEAP[$n_addr]; //@line 116 "parsermodule.c"
        var $97=(($96+4)&4294967295); //@line 116 "parsermodule.c"
        var $98=HEAP[$97]; //@line 116 "parsermodule.c"
        var $99=_PyString_FromString($98); //@line 116 "parsermodule.c"
        var $100=HEAP[$i]; //@line 116 "parsermodule.c"
        var $101=((($100) + 1)&4294967295); //@line 116 "parsermodule.c"
        var $102=HEAP[$addelem_addr]; //@line 116 "parsermodule.c"
        var $103=HEAP[$v]; //@line 116 "parsermodule.c"
        var $104=FUNCTION_TABLE[$102]($103, $101, $99); //@line 116 "parsermodule.c"
        __label__ = 18; break; //@line 116 "parsermodule.c"
      case 18: // $bb17
        var $105=HEAP[$v]; //@line 117 "parsermodule.c"
        HEAP[$0]=$105; //@line 117 "parsermodule.c"
        __label__ = 27; break; //@line 117 "parsermodule.c"
      case 19: // $bb18
        var $106=HEAP[$n_addr]; //@line 119 "parsermodule.c"
        var $107=(($106)&4294967295); //@line 119 "parsermodule.c"
        var $108=HEAP[$107]; //@line 119 "parsermodule.c"
        var $109=reSign(($108), 16, 0) <= 255; //@line 119 "parsermodule.c"
        if ($109) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 119 "parsermodule.c"
      case 20: // $bb19
        var $110=HEAP[$lineno_addr]; //@line 120 "parsermodule.c"
        var $111=((($110) + 2)&4294967295); //@line 120 "parsermodule.c"
        var $112=HEAP[$col_offset_addr]; //@line 120 "parsermodule.c"
        var $113=((($111) + ($112))&4294967295); //@line 120 "parsermodule.c"
        var $114=HEAP[$mkseq_addr]; //@line 120 "parsermodule.c"
        var $115=FUNCTION_TABLE[$114]($113); //@line 120 "parsermodule.c"
        HEAP[$result]=$115; //@line 120 "parsermodule.c"
        var $116=HEAP[$result]; //@line 121 "parsermodule.c"
        var $117=($116)!=0; //@line 121 "parsermodule.c"
        if ($117) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 121 "parsermodule.c"
      case 21: // $bb20
        var $118=HEAP[$n_addr]; //@line 122 "parsermodule.c"
        var $119=(($118)&4294967295); //@line 122 "parsermodule.c"
        var $120=HEAP[$119]; //@line 122 "parsermodule.c"
        var $121=reSign(($120), 16, 0); //@line 122 "parsermodule.c"
        var $122=_PyInt_FromLong($121); //@line 122 "parsermodule.c"
        var $123=HEAP[$addelem_addr]; //@line 122 "parsermodule.c"
        var $124=HEAP[$result]; //@line 122 "parsermodule.c"
        var $125=FUNCTION_TABLE[$123]($124, 0, $122); //@line 122 "parsermodule.c"
        var $126=HEAP[$n_addr]; //@line 123 "parsermodule.c"
        var $127=(($126+4)&4294967295); //@line 123 "parsermodule.c"
        var $128=HEAP[$127]; //@line 123 "parsermodule.c"
        var $129=_PyString_FromString($128); //@line 123 "parsermodule.c"
        var $130=HEAP[$addelem_addr]; //@line 123 "parsermodule.c"
        var $131=HEAP[$result]; //@line 123 "parsermodule.c"
        var $132=FUNCTION_TABLE[$130]($131, 1, $129); //@line 123 "parsermodule.c"
        var $133=HEAP[$lineno_addr]; //@line 124 "parsermodule.c"
        var $134=((($133))|0)==1; //@line 124 "parsermodule.c"
        if ($134) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 124 "parsermodule.c"
      case 22: // $bb21
        var $135=HEAP[$n_addr]; //@line 125 "parsermodule.c"
        var $136=(($135+8)&4294967295); //@line 125 "parsermodule.c"
        var $137=HEAP[$136]; //@line 125 "parsermodule.c"
        var $138=_PyInt_FromLong($137); //@line 125 "parsermodule.c"
        var $139=HEAP[$addelem_addr]; //@line 125 "parsermodule.c"
        var $140=HEAP[$result]; //@line 125 "parsermodule.c"
        var $141=FUNCTION_TABLE[$139]($140, 2, $138); //@line 125 "parsermodule.c"
        __label__ = 23; break; //@line 125 "parsermodule.c"
      case 23: // $bb22
        var $142=HEAP[$col_offset_addr]; //@line 126 "parsermodule.c"
        var $143=((($142))|0)==1; //@line 126 "parsermodule.c"
        if ($143) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 126 "parsermodule.c"
      case 24: // $bb23
        var $144=HEAP[$n_addr]; //@line 127 "parsermodule.c"
        var $145=(($144+12)&4294967295); //@line 127 "parsermodule.c"
        var $146=HEAP[$145]; //@line 127 "parsermodule.c"
        var $147=_PyInt_FromLong($146); //@line 127 "parsermodule.c"
        var $148=HEAP[$addelem_addr]; //@line 127 "parsermodule.c"
        var $149=HEAP[$result]; //@line 127 "parsermodule.c"
        var $150=FUNCTION_TABLE[$148]($149, 3, $147); //@line 127 "parsermodule.c"
        __label__ = 25; break; //@line 127 "parsermodule.c"
      case 25: // $bb24
        var $151=HEAP[$result]; //@line 129 "parsermodule.c"
        HEAP[$0]=$151; //@line 129 "parsermodule.c"
        __label__ = 27; break; //@line 129 "parsermodule.c"
      case 26: // $bb25
        var $152=HEAP[_PyExc_SystemError]; //@line 132 "parsermodule.c"
        _PyErr_SetString($152, ((__str)&4294967295)); //@line 132 "parsermodule.c"
        HEAP[$0]=0; //@line 134 "parsermodule.c"
        __label__ = 27; break; //@line 134 "parsermodule.c"
      case 27: // $bb26
        var $153=HEAP[$0]; //@line 90 "parsermodule.c"
        HEAP[$retval]=$153; //@line 90 "parsermodule.c"
        __label__ = 28; break; //@line 90 "parsermodule.c"
      case 28: // $return
        var $retval27=HEAP[$retval]; //@line 90 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 90 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare_nodes($left, $right) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr=__stackBase__;
        var $right_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $j=__stackBase__+16;
        var $v=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$left_addr]=$left;
        HEAP[$right_addr]=$right;
        var $1=HEAP[$left_addr]; //@line 212 "parsermodule.c"
        var $2=(($1)&4294967295); //@line 212 "parsermodule.c"
        var $3=HEAP[$2]; //@line 212 "parsermodule.c"
        var $4=HEAP[$right_addr]; //@line 212 "parsermodule.c"
        var $5=(($4)&4294967295); //@line 212 "parsermodule.c"
        var $6=HEAP[$5]; //@line 212 "parsermodule.c"
        var $7=reSign(($3), 16, 0) < reSign(($6), 16, 0); //@line 212 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 212 "parsermodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 213 "parsermodule.c"
        __label__ = 16; break; //@line 213 "parsermodule.c"
      case 2: // $bb1
        var $8=HEAP[$right_addr]; //@line 215 "parsermodule.c"
        var $9=(($8)&4294967295); //@line 215 "parsermodule.c"
        var $10=HEAP[$9]; //@line 215 "parsermodule.c"
        var $11=HEAP[$left_addr]; //@line 215 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 215 "parsermodule.c"
        var $13=HEAP[$12]; //@line 215 "parsermodule.c"
        var $14=reSign(($10), 16, 0) < reSign(($13), 16, 0); //@line 215 "parsermodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 215 "parsermodule.c"
      case 3: // $bb2
        HEAP[$0]=1; //@line 216 "parsermodule.c"
        __label__ = 16; break; //@line 216 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$left_addr]; //@line 218 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 218 "parsermodule.c"
        var $17=HEAP[$16]; //@line 218 "parsermodule.c"
        var $18=reSign(($17), 16, 0) <= 255; //@line 218 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 218 "parsermodule.c"
      case 5: // $bb4
        var $19=HEAP[$right_addr]; //@line 219 "parsermodule.c"
        var $20=(($19+4)&4294967295); //@line 219 "parsermodule.c"
        var $21=HEAP[$20]; //@line 219 "parsermodule.c"
        var $22=HEAP[$left_addr]; //@line 219 "parsermodule.c"
        var $23=(($22+4)&4294967295); //@line 219 "parsermodule.c"
        var $24=HEAP[$23]; //@line 219 "parsermodule.c"
        var $25=_strcmp($24, $21); //@line 219 "parsermodule.c"
        HEAP[$0]=$25; //@line 219 "parsermodule.c"
        __label__ = 16; break; //@line 219 "parsermodule.c"
      case 6: // $bb5
        var $26=HEAP[$left_addr]; //@line 221 "parsermodule.c"
        var $27=(($26+16)&4294967295); //@line 221 "parsermodule.c"
        var $28=HEAP[$27]; //@line 221 "parsermodule.c"
        var $29=HEAP[$right_addr]; //@line 221 "parsermodule.c"
        var $30=(($29+16)&4294967295); //@line 221 "parsermodule.c"
        var $31=HEAP[$30]; //@line 221 "parsermodule.c"
        var $32=((($28))|0) < ((($31))|0); //@line 221 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 221 "parsermodule.c"
      case 7: // $bb6
        HEAP[$0]=-1; //@line 222 "parsermodule.c"
        __label__ = 16; break; //@line 222 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$right_addr]; //@line 224 "parsermodule.c"
        var $34=(($33+16)&4294967295); //@line 224 "parsermodule.c"
        var $35=HEAP[$34]; //@line 224 "parsermodule.c"
        var $36=HEAP[$left_addr]; //@line 224 "parsermodule.c"
        var $37=(($36+16)&4294967295); //@line 224 "parsermodule.c"
        var $38=HEAP[$37]; //@line 224 "parsermodule.c"
        var $39=((($35))|0) < ((($38))|0); //@line 224 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 224 "parsermodule.c"
      case 9: // $bb8
        HEAP[$0]=1; //@line 225 "parsermodule.c"
        __label__ = 16; break; //@line 225 "parsermodule.c"
      case 10: // $bb9
        HEAP[$j]=0; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 11: // $bb10
        var $40=HEAP[$right_addr]; //@line 228 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 228 "parsermodule.c"
        var $42=HEAP[$41]; //@line 228 "parsermodule.c"
        var $43=HEAP[$j]; //@line 228 "parsermodule.c"
        var $44=(($42+24*$43)&4294967295); //@line 228 "parsermodule.c"
        var $45=HEAP[$left_addr]; //@line 228 "parsermodule.c"
        var $46=(($45+20)&4294967295); //@line 228 "parsermodule.c"
        var $47=HEAP[$46]; //@line 228 "parsermodule.c"
        var $48=HEAP[$j]; //@line 228 "parsermodule.c"
        var $49=(($47+24*$48)&4294967295); //@line 228 "parsermodule.c"
        var $50=_parser_compare_nodes($49, $44); //@line 228 "parsermodule.c"
        HEAP[$v]=$50; //@line 228 "parsermodule.c"
        var $51=HEAP[$v]; //@line 230 "parsermodule.c"
        var $52=((($51))|0)!=0; //@line 230 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 230 "parsermodule.c"
      case 12: // $bb11
        var $53=HEAP[$v]; //@line 231 "parsermodule.c"
        HEAP[$0]=$53; //@line 231 "parsermodule.c"
        __label__ = 16; break; //@line 231 "parsermodule.c"
      case 13: // $bb12
        var $54=HEAP[$j]; //@line 227 "parsermodule.c"
        var $55=((($54) + 1)&4294967295); //@line 227 "parsermodule.c"
        HEAP[$j]=$55; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 14: // $bb13
        var $56=HEAP[$left_addr]; //@line 227 "parsermodule.c"
        var $57=(($56+16)&4294967295); //@line 227 "parsermodule.c"
        var $58=HEAP[$57]; //@line 227 "parsermodule.c"
        var $59=HEAP[$j]; //@line 227 "parsermodule.c"
        var $60=((($58))|0) > ((($59))|0); //@line 227 "parsermodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 227 "parsermodule.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 233 "parsermodule.c"
        __label__ = 16; break; //@line 233 "parsermodule.c"
      case 16: // $bb15
        var $61=HEAP[$0]; //@line 213 "parsermodule.c"
        HEAP[$retval]=$61; //@line 213 "parsermodule.c"
        __label__ = 17; break; //@line 213 "parsermodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 213 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 213 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare($left, $right) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr=__stackBase__;
        var $right_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$left_addr]=$left;
        HEAP[$right_addr]=$right;
        var $1=HEAP[$left_addr]; //@line 247 "parsermodule.c"
        var $2=HEAP[$right_addr]; //@line 247 "parsermodule.c"
        var $3=($1)==($2); //@line 247 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 247 "parsermodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 248 "parsermodule.c"
        __label__ = 6; break; //@line 248 "parsermodule.c"
      case 2: // $bb1
        var $4=HEAP[$left_addr]; //@line 250 "parsermodule.c"
        var $5=($4)==0; //@line 250 "parsermodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 250 "parsermodule.c"
      case 3: // $bb2
        var $6=HEAP[$right_addr]; //@line 250 "parsermodule.c"
        var $7=($6)==0; //@line 250 "parsermodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 250 "parsermodule.c"
      case 4: // $bb3
        HEAP[$0]=-1; //@line 251 "parsermodule.c"
        __label__ = 6; break; //@line 251 "parsermodule.c"
      case 5: // $bb4
        var $8=HEAP[$right_addr]; //@line 253 "parsermodule.c"
        var $9=(($8+8)&4294967295); //@line 253 "parsermodule.c"
        var $10=HEAP[$9]; //@line 253 "parsermodule.c"
        var $11=HEAP[$left_addr]; //@line 253 "parsermodule.c"
        var $12=(($11+8)&4294967295); //@line 253 "parsermodule.c"
        var $13=HEAP[$12]; //@line 253 "parsermodule.c"
        var $14=_parser_compare_nodes($13, $10); //@line 253 "parsermodule.c"
        HEAP[$0]=$14; //@line 253 "parsermodule.c"
        __label__ = 6; break; //@line 253 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$0]; //@line 248 "parsermodule.c"
        HEAP[$retval]=$15; //@line 248 "parsermodule.c"
        __label__ = 7; break; //@line 248 "parsermodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 248 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 248 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_newstobject($st, $type) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $st_addr=__stackBase__;
        var $type_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $o=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$st_addr]=$st;
        HEAP[$type_addr]=$type;
        var $1=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $2=$1; //@line 267 "parsermodule.c"
        HEAP[$o]=$2; //@line 267 "parsermodule.c"
        var $3=HEAP[$o]; //@line 269 "parsermodule.c"
        var $4=($3)!=0; //@line 269 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 269 "parsermodule.c"
      case 1: // $bb
        var $5=HEAP[$o]; //@line 270 "parsermodule.c"
        var $6=(($5+8)&4294967295); //@line 270 "parsermodule.c"
        var $7=HEAP[$st_addr]; //@line 270 "parsermodule.c"
        HEAP[$6]=$7; //@line 270 "parsermodule.c"
        var $8=HEAP[$o]; //@line 271 "parsermodule.c"
        var $9=(($8+12)&4294967295); //@line 271 "parsermodule.c"
        var $10=HEAP[$type_addr]; //@line 271 "parsermodule.c"
        HEAP[$9]=$10; //@line 271 "parsermodule.c"
        var $11=HEAP[$o]; //@line 272 "parsermodule.c"
        var $12=(($11+16)&4294967295); //@line 272 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 272 "parsermodule.c"
        HEAP[$13]=0; //@line 272 "parsermodule.c"
        __label__ = 3; break; //@line 272 "parsermodule.c"
      case 2: // $bb1
        var $14=HEAP[$st_addr]; //@line 275 "parsermodule.c"
        _PyNode_Free($14); //@line 275 "parsermodule.c"
        __label__ = 3; break; //@line 275 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$o]; //@line 277 "parsermodule.c"
        var $16=$15; //@line 277 "parsermodule.c"
        HEAP[$0]=$16; //@line 277 "parsermodule.c"
        var $17=HEAP[$0]; //@line 277 "parsermodule.c"
        HEAP[$retval]=$17; //@line 277 "parsermodule.c"
        __label__ = 4; break; //@line 277 "parsermodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 277 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 277 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_free($st) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $st_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$st_addr]=$st;
        var $0=HEAP[$st_addr]; //@line 289 "parsermodule.c"
        var $1=(($0+8)&4294967295); //@line 289 "parsermodule.c"
        var $2=HEAP[$1]; //@line 289 "parsermodule.c"
        _PyNode_Free($2); //@line 289 "parsermodule.c"
        var $3=HEAP[$st_addr]; //@line 290 "parsermodule.c"
        var $4=$3; //@line 290 "parsermodule.c"
        _PyObject_Free($4); //@line 290 "parsermodule.c"
        __label__ = 1; break; //@line 291 "parsermodule.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 291 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_st2tuple($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $line_option=__stackBase__+20;
        var $col_option=__stackBase__+24;
        var $res=__stackBase__+28;
        var $ok=__stackBase__+32;
        var $lineno=__stackBase__+36;
        var $col_offset=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$line_option]=0; //@line 303 "parsermodule.c"
        HEAP[$col_option]=0; //@line 304 "parsermodule.c"
        HEAP[$res]=0; //@line 305 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 310 "parsermodule.c"
        var $2=($1)==0; //@line 310 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 310 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 311 "parsermodule.c"
        var $4=HEAP[$kw_addr]; //@line 311 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str3)&4294967295), ((_keywords_9402)&4294967295), _PyST_Type, $self_addr, $line_option, $col_option); //@line 311 "parsermodule.c"
        HEAP[$ok]=$5; //@line 311 "parsermodule.c"
        __label__ = 3; break; //@line 311 "parsermodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 316 "parsermodule.c"
        var $7=HEAP[$kw_addr]; //@line 316 "parsermodule.c"
        var $8=_PyArg_ParseTupleAndKeywords($6, $7, ((__str7)&4294967295), ((_keywords_9402+4)&4294967295), $line_option, $col_option); //@line 316 "parsermodule.c"
        HEAP[$ok]=$8; //@line 316 "parsermodule.c"
        __label__ = 3; break; //@line 316 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$ok]; //@line 318 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 318 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 318 "parsermodule.c"
      case 4: // $bb3
        HEAP[$lineno]=0; //@line 319 "parsermodule.c"
        HEAP[$col_offset]=0; //@line 320 "parsermodule.c"
        var $11=HEAP[$line_option]; //@line 321 "parsermodule.c"
        var $12=($11)!=0; //@line 321 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 321 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$line_option]; //@line 322 "parsermodule.c"
        var $14=_PyObject_IsTrue($13); //@line 322 "parsermodule.c"
        var $15=((($14))|0)!=0; //@line 322 "parsermodule.c"
        var $16=unSign(($15), 1, 0); //@line 322 "parsermodule.c"
        HEAP[$lineno]=$16; //@line 322 "parsermodule.c"
        __label__ = 6; break; //@line 322 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$col_option]; //@line 324 "parsermodule.c"
        var $18=($17)!=0; //@line 324 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 324 "parsermodule.c"
      case 7: // $bb6
        var $19=HEAP[$col_option]; //@line 325 "parsermodule.c"
        var $20=_PyObject_IsTrue($19); //@line 325 "parsermodule.c"
        var $21=((($20))|0)!=0; //@line 325 "parsermodule.c"
        var $22=unSign(($21), 1, 0); //@line 325 "parsermodule.c"
        HEAP[$col_offset]=$22; //@line 325 "parsermodule.c"
        __label__ = 8; break; //@line 325 "parsermodule.c"
      case 8: // $bb7
        var $23=HEAP[$self_addr]; //@line 331 "parsermodule.c"
        var $24=(($23+8)&4294967295); //@line 331 "parsermodule.c"
        var $25=HEAP[$24]; //@line 331 "parsermodule.c"
        var $26=HEAP[$lineno]; //@line 331 "parsermodule.c"
        var $27=HEAP[$col_offset]; //@line 331 "parsermodule.c"
        var $28=_node2tuple($25, (FUNCTION_TABLE_OFFSET + 2), (FUNCTION_TABLE_OFFSET + 4), $26, $27); //@line 331 "parsermodule.c"
        HEAP[$res]=$28; //@line 331 "parsermodule.c"
        __label__ = 9; break; //@line 331 "parsermodule.c"
      case 9: // $bb8
        var $29=HEAP[$res]; //@line 334 "parsermodule.c"
        HEAP[$0]=$29; //@line 334 "parsermodule.c"
        var $30=HEAP[$0]; //@line 334 "parsermodule.c"
        HEAP[$retval]=$30; //@line 334 "parsermodule.c"
        __label__ = 10; break; //@line 334 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 334 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 334 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2tuple($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 340 "parsermodule.c"
        var $2=((($1))|0)!=0; //@line 340 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 340 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, ((__str8)&4294967295), 1); //@line 340 "parsermodule.c"
        var $5=((($4))|0) < 0; //@line 340 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 341 "parsermodule.c"
        __label__ = 4; break; //@line 341 "parsermodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 342 "parsermodule.c"
        var $7=HEAP[$args_addr]; //@line 342 "parsermodule.c"
        var $8=HEAP[$kw_addr]; //@line 342 "parsermodule.c"
        var $9=_parser_st2tuple($6, $7, $8); //@line 342 "parsermodule.c"
        HEAP[$0]=$9; //@line 342 "parsermodule.c"
        __label__ = 4; break; //@line 342 "parsermodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 341 "parsermodule.c"
        HEAP[$retval]=$10; //@line 341 "parsermodule.c"
        __label__ = 5; break; //@line 341 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 341 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_st2list($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $line_option=__stackBase__+20;
        var $col_option=__stackBase__+24;
        var $res=__stackBase__+28;
        var $ok=__stackBase__+32;
        var $lineno=__stackBase__+36;
        var $col_offset=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$line_option]=0; //@line 355 "parsermodule.c"
        HEAP[$col_option]=0; //@line 356 "parsermodule.c"
        HEAP[$res]=0; //@line 357 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 362 "parsermodule.c"
        var $2=($1)==0; //@line 362 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 362 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 363 "parsermodule.c"
        var $4=HEAP[$kw_addr]; //@line 363 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str9)&4294967295), ((_keywords_9452)&4294967295), _PyST_Type, $self_addr, $line_option, $col_option); //@line 363 "parsermodule.c"
        HEAP[$ok]=$5; //@line 363 "parsermodule.c"
        __label__ = 3; break; //@line 363 "parsermodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 367 "parsermodule.c"
        var $7=HEAP[$kw_addr]; //@line 367 "parsermodule.c"
        var $8=_PyArg_ParseTupleAndKeywords($6, $7, ((__str10)&4294967295), ((_keywords_9452+4)&4294967295), $line_option, $col_option); //@line 367 "parsermodule.c"
        HEAP[$ok]=$8; //@line 367 "parsermodule.c"
        __label__ = 3; break; //@line 367 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$ok]; //@line 369 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 369 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 369 "parsermodule.c"
      case 4: // $bb3
        HEAP[$lineno]=0; //@line 370 "parsermodule.c"
        HEAP[$col_offset]=0; //@line 371 "parsermodule.c"
        var $11=HEAP[$line_option]; //@line 372 "parsermodule.c"
        var $12=($11)!=0; //@line 372 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 372 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$line_option]; //@line 373 "parsermodule.c"
        var $14=_PyObject_IsTrue($13); //@line 373 "parsermodule.c"
        var $15=((($14))|0)!=0; //@line 373 "parsermodule.c"
        var $16=unSign(($15), 1, 0); //@line 373 "parsermodule.c"
        HEAP[$lineno]=$16; //@line 373 "parsermodule.c"
        __label__ = 6; break; //@line 373 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$col_option]; //@line 375 "parsermodule.c"
        var $18=($17)!=0; //@line 375 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 375 "parsermodule.c"
      case 7: // $bb6
        var $19=HEAP[$col_option]; //@line 376 "parsermodule.c"
        var $20=_PyObject_IsTrue($19); //@line 376 "parsermodule.c"
        var $21=((($20))|0)!=0; //@line 376 "parsermodule.c"
        var $22=unSign(($21), 1, 0); //@line 376 "parsermodule.c"
        HEAP[$col_offset]=$22; //@line 376 "parsermodule.c"
        __label__ = 8; break; //@line 376 "parsermodule.c"
      case 8: // $bb7
        var $23=HEAP[$self_addr]; //@line 382 "parsermodule.c"
        var $24=(($23+8)&4294967295); //@line 382 "parsermodule.c"
        var $25=HEAP[$24]; //@line 382 "parsermodule.c"
        var $26=HEAP[$lineno]; //@line 382 "parsermodule.c"
        var $27=HEAP[$col_offset]; //@line 382 "parsermodule.c"
        var $28=_node2tuple($25, (FUNCTION_TABLE_OFFSET + 6), (FUNCTION_TABLE_OFFSET + 8), $26, $27); //@line 382 "parsermodule.c"
        HEAP[$res]=$28; //@line 382 "parsermodule.c"
        __label__ = 9; break; //@line 382 "parsermodule.c"
      case 9: // $bb8
        var $29=HEAP[$res]; //@line 385 "parsermodule.c"
        HEAP[$0]=$29; //@line 385 "parsermodule.c"
        var $30=HEAP[$0]; //@line 385 "parsermodule.c"
        HEAP[$retval]=$30; //@line 385 "parsermodule.c"
        __label__ = 10; break; //@line 385 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 385 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 385 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2list($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 391 "parsermodule.c"
        var $2=((($1))|0)!=0; //@line 391 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 391 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, ((__str11)&4294967295), 1); //@line 391 "parsermodule.c"
        var $5=((($4))|0) < 0; //@line 391 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 392 "parsermodule.c"
        __label__ = 4; break; //@line 392 "parsermodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 393 "parsermodule.c"
        var $7=HEAP[$args_addr]; //@line 393 "parsermodule.c"
        var $8=HEAP[$kw_addr]; //@line 393 "parsermodule.c"
        var $9=_parser_st2list($6, $7, $8); //@line 393 "parsermodule.c"
        HEAP[$0]=$9; //@line 393 "parsermodule.c"
        __label__ = 4; break; //@line 393 "parsermodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 392 "parsermodule.c"
        HEAP[$retval]=$10; //@line 392 "parsermodule.c"
        __label__ = 5; break; //@line 392 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 392 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 392 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compilest($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $res=__stackBase__+20;
        var $arena=__stackBase__+24;
        var $mod=__stackBase__+28;
        var $str=__stackBase__+32;
        var $ok=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$res]=0; //@line 406 "parsermodule.c"
        HEAP[$str]=((__str12)&4294967295); //@line 409 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 414 "parsermodule.c"
        var $2=($1)==0; //@line 414 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 414 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 415 "parsermodule.c"
        var $4=HEAP[$kw_addr]; //@line 415 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str13)&4294967295), ((_keywords_9503)&4294967295), _PyST_Type, $self_addr, $str); //@line 415 "parsermodule.c"
        HEAP[$ok]=$5; //@line 415 "parsermodule.c"
        __label__ = 3; break; //@line 415 "parsermodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 418 "parsermodule.c"
        var $7=HEAP[$kw_addr]; //@line 418 "parsermodule.c"
        var $8=_PyArg_ParseTupleAndKeywords($6, $7, ((__str15)&4294967295), ((_keywords_9503+4)&4294967295), $str); //@line 418 "parsermodule.c"
        HEAP[$ok]=$8; //@line 418 "parsermodule.c"
        __label__ = 3; break; //@line 418 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$ok]; //@line 421 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 421 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 421 "parsermodule.c"
      case 4: // $bb3
        var $11=_PyArena_New(); //@line 422 "parsermodule.c"
        HEAP[$arena]=$11; //@line 422 "parsermodule.c"
        var $12=HEAP[$arena]; //@line 423 "parsermodule.c"
        var $13=($12)!=0; //@line 423 "parsermodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 423 "parsermodule.c"
      case 5: // $bb4
        var $14=HEAP[$str]; //@line 424 "parsermodule.c"
        var $15=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $16=(($15+16)&4294967295); //@line 424 "parsermodule.c"
        var $17=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $18=(($17+8)&4294967295); //@line 424 "parsermodule.c"
        var $19=HEAP[$18]; //@line 424 "parsermodule.c"
        var $20=HEAP[$arena]; //@line 424 "parsermodule.c"
        var $21=_PyAST_FromNode($19, $16, $14, $20); //@line 424 "parsermodule.c"
        HEAP[$mod]=$21; //@line 424 "parsermodule.c"
        var $22=HEAP[$mod]; //@line 425 "parsermodule.c"
        var $23=($22)!=0; //@line 425 "parsermodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 425 "parsermodule.c"
      case 6: // $bb5
        var $24=HEAP[$self_addr]; //@line 426 "parsermodule.c"
        var $25=(($24+16)&4294967295); //@line 426 "parsermodule.c"
        var $26=HEAP[$str]; //@line 426 "parsermodule.c"
        var $27=HEAP[$mod]; //@line 426 "parsermodule.c"
        var $28=HEAP[$arena]; //@line 426 "parsermodule.c"
        var $29=_PyAST_Compile($27, $26, $25, $28); //@line 426 "parsermodule.c"
        var $30=$29; //@line 426 "parsermodule.c"
        HEAP[$res]=$30; //@line 426 "parsermodule.c"
        __label__ = 7; break; //@line 426 "parsermodule.c"
      case 7: // $bb6
        var $31=HEAP[$arena]; //@line 428 "parsermodule.c"
        _PyArena_Free($31); //@line 428 "parsermodule.c"
        __label__ = 8; break; //@line 428 "parsermodule.c"
      case 8: // $bb7
        var $32=HEAP[$res]; //@line 432 "parsermodule.c"
        HEAP[$0]=$32; //@line 432 "parsermodule.c"
        var $33=HEAP[$0]; //@line 432 "parsermodule.c"
        HEAP[$retval]=$33; //@line 432 "parsermodule.c"
        __label__ = 9; break; //@line 432 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 432 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 432 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compileast($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 438 "parsermodule.c"
        var $2=((($1))|0)!=0; //@line 438 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 438 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, ((__str16)&4294967295), 1); //@line 438 "parsermodule.c"
        var $5=((($4))|0) < 0; //@line 438 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 439 "parsermodule.c"
        __label__ = 4; break; //@line 439 "parsermodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 440 "parsermodule.c"
        var $7=HEAP[$args_addr]; //@line 440 "parsermodule.c"
        var $8=HEAP[$kw_addr]; //@line 440 "parsermodule.c"
        var $9=_parser_compilest($6, $7, $8); //@line 440 "parsermodule.c"
        HEAP[$0]=$9; //@line 440 "parsermodule.c"
        __label__ = 4; break; //@line 440 "parsermodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 439 "parsermodule.c"
        HEAP[$retval]=$10; //@line 439 "parsermodule.c"
        __label__ = 5; break; //@line 439 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 439 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 439 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_isexpr($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $iftmp_26=__stackBase__+20;
        var $res=__stackBase__+24;
        var $ok=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$res]=0; //@line 454 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 459 "parsermodule.c"
        var $2=($1)==0; //@line 459 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 459 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 460 "parsermodule.c"
        var $4=HEAP[$kw_addr]; //@line 460 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str17)&4294967295), ((_keywords_9551)&4294967295), _PyST_Type, $self_addr); //@line 460 "parsermodule.c"
        HEAP[$ok]=$5; //@line 460 "parsermodule.c"
        __label__ = 3; break; //@line 460 "parsermodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 463 "parsermodule.c"
        var $7=HEAP[$kw_addr]; //@line 463 "parsermodule.c"
        var $8=_PyArg_ParseTupleAndKeywords($6, $7, ((__str18)&4294967295), ((_keywords_9551+4)&4294967295)); //@line 463 "parsermodule.c"
        HEAP[$ok]=$8; //@line 463 "parsermodule.c"
        __label__ = 3; break; //@line 463 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$ok]; //@line 465 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 465 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 465 "parsermodule.c"
      case 4: // $bb3
        var $11=HEAP[$self_addr]; //@line 467 "parsermodule.c"
        var $12=(($11+12)&4294967295); //@line 467 "parsermodule.c"
        var $13=HEAP[$12]; //@line 467 "parsermodule.c"
        var $14=((($13))|0)==1; //@line 467 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 467 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_26]=__Py_TrueStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_26]=__Py_ZeroStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 7: // $bb6
        var $15=HEAP[$iftmp_26]; //@line 467 "parsermodule.c"
        HEAP[$res]=$15; //@line 467 "parsermodule.c"
        var $16=HEAP[$res]; //@line 468 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 468 "parsermodule.c"
        var $18=HEAP[$17]; //@line 468 "parsermodule.c"
        var $19=((($18) + 1)&4294967295); //@line 468 "parsermodule.c"
        var $20=HEAP[$res]; //@line 468 "parsermodule.c"
        var $21=(($20)&4294967295); //@line 468 "parsermodule.c"
        HEAP[$21]=$19; //@line 468 "parsermodule.c"
        __label__ = 8; break; //@line 468 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$res]; //@line 470 "parsermodule.c"
        HEAP[$0]=$22; //@line 470 "parsermodule.c"
        var $23=HEAP[$0]; //@line 470 "parsermodule.c"
        HEAP[$retval]=$23; //@line 470 "parsermodule.c"
        __label__ = 9; break; //@line 470 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 470 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 470 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_issuite($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $iftmp_29=__stackBase__+20;
        var $res=__stackBase__+24;
        var $ok=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$res]=0; //@line 477 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 482 "parsermodule.c"
        var $2=($1)==0; //@line 482 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 482 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 483 "parsermodule.c"
        var $4=HEAP[$kw_addr]; //@line 483 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str19)&4294967295), ((_keywords_9577)&4294967295), _PyST_Type, $self_addr); //@line 483 "parsermodule.c"
        HEAP[$ok]=$5; //@line 483 "parsermodule.c"
        __label__ = 3; break; //@line 483 "parsermodule.c"
      case 2: // $bb1
        var $6=HEAP[$args_addr]; //@line 486 "parsermodule.c"
        var $7=HEAP[$kw_addr]; //@line 486 "parsermodule.c"
        var $8=_PyArg_ParseTupleAndKeywords($6, $7, ((__str20)&4294967295), ((_keywords_9577+4)&4294967295)); //@line 486 "parsermodule.c"
        HEAP[$ok]=$8; //@line 486 "parsermodule.c"
        __label__ = 3; break; //@line 486 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$ok]; //@line 488 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 488 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 488 "parsermodule.c"
      case 4: // $bb3
        var $11=HEAP[$self_addr]; //@line 490 "parsermodule.c"
        var $12=(($11+12)&4294967295); //@line 490 "parsermodule.c"
        var $13=HEAP[$12]; //@line 490 "parsermodule.c"
        var $14=((($13))|0)==1; //@line 490 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 490 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_29]=__Py_ZeroStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_29]=__Py_TrueStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 7: // $bb6
        var $15=HEAP[$iftmp_29]; //@line 490 "parsermodule.c"
        HEAP[$res]=$15; //@line 490 "parsermodule.c"
        var $16=HEAP[$res]; //@line 491 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 491 "parsermodule.c"
        var $18=HEAP[$17]; //@line 491 "parsermodule.c"
        var $19=((($18) + 1)&4294967295); //@line 491 "parsermodule.c"
        var $20=HEAP[$res]; //@line 491 "parsermodule.c"
        var $21=(($20)&4294967295); //@line 491 "parsermodule.c"
        HEAP[$21]=$19; //@line 491 "parsermodule.c"
        __label__ = 8; break; //@line 491 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$res]; //@line 493 "parsermodule.c"
        HEAP[$0]=$22; //@line 493 "parsermodule.c"
        var $23=HEAP[$0]; //@line 493 "parsermodule.c"
        HEAP[$retval]=$23; //@line 493 "parsermodule.c"
        __label__ = 9; break; //@line 493 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 493 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 493 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$self_addr]; //@line 519 "parsermodule.c"
        var $2=HEAP[$name_addr]; //@line 519 "parsermodule.c"
        var $3=_Py_FindMethod(((_parser_methods)&4294967295), $1, $2); //@line 519 "parsermodule.c"
        HEAP[$0]=$3; //@line 519 "parsermodule.c"
        var $4=HEAP[$0]; //@line 519 "parsermodule.c"
        HEAP[$retval]=$4; //@line 519 "parsermodule.c"
        __label__ = 1; break; //@line 519 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 519 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 519 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _err_string($message) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$message_addr]=$message;
        var $0=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $1=HEAP[$message_addr]; //@line 531 "parsermodule.c"
        _PyErr_SetString($0, $1); //@line 531 "parsermodule.c"
        __label__ = 1; break; //@line 532 "parsermodule.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 532 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_do_parse($args, $kw, $argspec, $type) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr=__stackBase__;
        var $kw_addr=__stackBase__+4;
        var $argspec_addr=__stackBase__+8;
        var $type_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $iftmp_32=__stackBase__+24;
        var $string=__stackBase__+28;
        var $res=__stackBase__+32;
        var $flags=__stackBase__+36;
        var $err=__stackBase__+40;
        var $n=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$argspec_addr]=$argspec;
        HEAP[$type_addr]=$type;
        HEAP[$string]=0; //@line 544 "parsermodule.c"
        HEAP[$res]=0; //@line 545 "parsermodule.c"
        HEAP[$flags]=0; //@line 546 "parsermodule.c"
        var $1=HEAP[$args_addr]; //@line 551 "parsermodule.c"
        var $2=HEAP[$kw_addr]; //@line 551 "parsermodule.c"
        var $3=HEAP[$argspec_addr]; //@line 551 "parsermodule.c"
        var $4=_PyArg_ParseTupleAndKeywords($1, $2, $3, ((_keywords_9618)&4294967295), $string); //@line 551 "parsermodule.c"
        var $5=((($4))|0)!=0; //@line 551 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 551 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$type_addr]; //@line 556 "parsermodule.c"
        var $7=((($6))|0)==1; //@line 556 "parsermodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 556 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_32]=258; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_32]=257; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 4: // $bb3
        var $8=HEAP[$string]; //@line 556 "parsermodule.c"
        var $9=HEAP[$iftmp_32]; //@line 556 "parsermodule.c"
        var $10=_PyParser_ParseStringFlagsFilenameEx($8, 0, __PyParser_Grammar, $9, $err, $flags); //@line 556 "parsermodule.c"
        HEAP[$n]=$10; //@line 556 "parsermodule.c"
        var $11=HEAP[$n]; //@line 558 "parsermodule.c"
        var $12=($11)!=0; //@line 558 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 558 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$n]; //@line 559 "parsermodule.c"
        var $14=HEAP[$type_addr]; //@line 559 "parsermodule.c"
        var $15=_parser_newstobject($13, $14); //@line 559 "parsermodule.c"
        HEAP[$res]=$15; //@line 559 "parsermodule.c"
        var $16=HEAP[$res]; //@line 560 "parsermodule.c"
        var $17=($16)!=0; //@line 560 "parsermodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 560 "parsermodule.c"
      case 6: // $bb5
        var $18=HEAP[$res]; //@line 561 "parsermodule.c"
        var $19=$18; //@line 561 "parsermodule.c"
        var $20=HEAP[$flags]; //@line 561 "parsermodule.c"
        var $21=($20) & 253952; //@line 561 "parsermodule.c"
        var $22=(($19+16)&4294967295); //@line 561 "parsermodule.c"
        var $23=(($22)&4294967295); //@line 561 "parsermodule.c"
        HEAP[$23]=$21; //@line 561 "parsermodule.c"
        __label__ = 7; break; //@line 561 "parsermodule.c"
      case 7: // $bb6
        __label__ = 9; break; //@line 561 "parsermodule.c"
      case 8: // $bb7
        _PyParser_SetError($err); //@line 564 "parsermodule.c"
        __label__ = 9; break; //@line 564 "parsermodule.c"
      case 9: // $bb8
        var $24=HEAP[$res]; //@line 566 "parsermodule.c"
        HEAP[$0]=$24; //@line 566 "parsermodule.c"
        var $25=HEAP[$0]; //@line 566 "parsermodule.c"
        HEAP[$retval]=$25; //@line 566 "parsermodule.c"
        __label__ = 10; break; //@line 566 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 566 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 566 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_expr($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[$args_addr]; //@line 582 "parsermodule.c"
        var $2=HEAP[$kw_addr]; //@line 582 "parsermodule.c"
        var $3=_parser_do_parse($1, $2, ((__str32)&4294967295), 1); //@line 582 "parsermodule.c"
        HEAP[$0]=$3; //@line 582 "parsermodule.c"
        var $4=HEAP[$0]; //@line 582 "parsermodule.c"
        HEAP[$retval]=$4; //@line 582 "parsermodule.c"
        __label__ = 1; break; //@line 582 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 582 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 582 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_suite($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[$args_addr]; //@line 590 "parsermodule.c"
        var $2=HEAP[$kw_addr]; //@line 590 "parsermodule.c"
        var $3=_parser_do_parse($1, $2, ((__str33)&4294967295), 2); //@line 590 "parsermodule.c"
        HEAP[$0]=$3; //@line 590 "parsermodule.c"
        var $4=HEAP[$0]; //@line 590 "parsermodule.c"
        HEAP[$retval]=$4; //@line 590 "parsermodule.c"
        __label__ = 1; break; //@line 590 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 590 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 590 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_tuple2st($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $st=__stackBase__+20;
        var $tuple=__stackBase__+24;
        var $tree=__stackBase__+28;
        var $start_sym=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$st]=0; //@line 634 "parsermodule.c"
        var $1=HEAP[$args_addr]; //@line 640 "parsermodule.c"
        var $2=HEAP[$kw_addr]; //@line 640 "parsermodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str34)&4294967295), ((_keywords_9672)&4294967295), $tuple); //@line 640 "parsermodule.c"
        var $4=((($3))|0)==0; //@line 640 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 640 "parsermodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 642 "parsermodule.c"
        __label__ = 25; break; //@line 642 "parsermodule.c"
      case 2: // $bb1
        var $5=HEAP[$tuple]; //@line 643 "parsermodule.c"
        var $6=_PySequence_Check($5); //@line 643 "parsermodule.c"
        var $7=((($6))|0)==0; //@line 643 "parsermodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 643 "parsermodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_ValueError]; //@line 644 "parsermodule.c"
        _PyErr_SetString($8, ((__str36)&4294967295)); //@line 644 "parsermodule.c"
        HEAP[$0]=0; //@line 646 "parsermodule.c"
        __label__ = 25; break; //@line 646 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$tuple]; //@line 651 "parsermodule.c"
        var $10=_build_node_tree($9); //@line 651 "parsermodule.c"
        HEAP[$tree]=$10; //@line 651 "parsermodule.c"
        var $11=HEAP[$tree]; //@line 652 "parsermodule.c"
        var $12=($11)!=0; //@line 652 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 21; break; } //@line 652 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$tree]; //@line 653 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 653 "parsermodule.c"
        var $15=HEAP[$14]; //@line 653 "parsermodule.c"
        var $16=reSign(($15), 16, 0); //@line 653 "parsermodule.c"
        HEAP[$start_sym]=$16; //@line 653 "parsermodule.c"
        var $17=HEAP[$start_sym]; //@line 654 "parsermodule.c"
        var $18=((($17))|0)==258; //@line 654 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 654 "parsermodule.c"
      case 6: // $bb5
        var $19=HEAP[$tree]; //@line 656 "parsermodule.c"
        var $20=_validate_expr_tree($19); //@line 656 "parsermodule.c"
        var $21=((($20))|0)!=0; //@line 656 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 656 "parsermodule.c"
      case 7: // $bb6
        var $22=HEAP[$tree]; //@line 657 "parsermodule.c"
        var $23=_parser_newstobject($22, 1); //@line 657 "parsermodule.c"
        HEAP[$st]=$23; //@line 657 "parsermodule.c"
        __label__ = 9; break; //@line 657 "parsermodule.c"
      case 8: // $bb7
        var $24=HEAP[$tree]; //@line 659 "parsermodule.c"
        _PyNode_Free($24); //@line 659 "parsermodule.c"
        __label__ = 9; break; //@line 659 "parsermodule.c"
      case 9: // $bb8
        __label__ = 21; break; //@line 659 "parsermodule.c"
      case 10: // $bb9
        var $25=HEAP[$start_sym]; //@line 661 "parsermodule.c"
        var $26=((($25))|0)==257; //@line 661 "parsermodule.c"
        if ($26) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 661 "parsermodule.c"
      case 11: // $bb10
        var $27=HEAP[$tree]; //@line 663 "parsermodule.c"
        var $28=_validate_file_input($27); //@line 663 "parsermodule.c"
        var $29=((($28))|0)!=0; //@line 663 "parsermodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 663 "parsermodule.c"
      case 12: // $bb11
        var $30=HEAP[$tree]; //@line 664 "parsermodule.c"
        var $31=_parser_newstobject($30, 2); //@line 664 "parsermodule.c"
        HEAP[$st]=$31; //@line 664 "parsermodule.c"
        __label__ = 14; break; //@line 664 "parsermodule.c"
      case 13: // $bb12
        var $32=HEAP[$tree]; //@line 666 "parsermodule.c"
        _PyNode_Free($32); //@line 666 "parsermodule.c"
        __label__ = 14; break; //@line 666 "parsermodule.c"
      case 14: // $bb13
        __label__ = 21; break; //@line 666 "parsermodule.c"
      case 15: // $bb14
        var $33=HEAP[$start_sym]; //@line 668 "parsermodule.c"
        var $34=((($33))|0)==339; //@line 668 "parsermodule.c"
        if ($34) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 668 "parsermodule.c"
      case 16: // $bb15
        var $35=HEAP[$tree]; //@line 670 "parsermodule.c"
        var $36=_validate_encoding_decl($35); //@line 670 "parsermodule.c"
        var $37=((($36))|0)!=0; //@line 670 "parsermodule.c"
        if ($37) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 670 "parsermodule.c"
      case 17: // $bb16
        var $38=HEAP[$tree]; //@line 671 "parsermodule.c"
        var $39=_parser_newstobject($38, 2); //@line 671 "parsermodule.c"
        HEAP[$st]=$39; //@line 671 "parsermodule.c"
        __label__ = 19; break; //@line 671 "parsermodule.c"
      case 18: // $bb17
        var $40=HEAP[$tree]; //@line 673 "parsermodule.c"
        _PyNode_Free($40); //@line 673 "parsermodule.c"
        __label__ = 19; break; //@line 673 "parsermodule.c"
      case 19: // $bb18
        __label__ = 21; break; //@line 673 "parsermodule.c"
      case 20: // $bb19
        var $41=HEAP[$tree]; //@line 677 "parsermodule.c"
        _PyNode_Free($41); //@line 677 "parsermodule.c"
        _err_string(((__str37)&4294967295)); //@line 678 "parsermodule.c"
        __label__ = 21; break; //@line 678 "parsermodule.c"
      case 21: // $bb20
        var $42=HEAP[$st]; //@line 684 "parsermodule.c"
        var $43=($42)==0; //@line 684 "parsermodule.c"
        if ($43) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 684 "parsermodule.c"
      case 22: // $bb21
        var $44=_PyErr_Occurred(); //@line 684 "parsermodule.c"
        var $45=($44)==0; //@line 684 "parsermodule.c"
        if ($45) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 684 "parsermodule.c"
      case 23: // $bb22
        _err_string(((__str38)&4294967295)); //@line 685 "parsermodule.c"
        __label__ = 24; break; //@line 685 "parsermodule.c"
      case 24: // $bb23
        var $46=HEAP[$st]; //@line 687 "parsermodule.c"
        HEAP[$0]=$46; //@line 687 "parsermodule.c"
        __label__ = 25; break; //@line 687 "parsermodule.c"
      case 25: // $bb24
        var $47=HEAP[$0]; //@line 642 "parsermodule.c"
        HEAP[$retval]=$47; //@line 642 "parsermodule.c"
        __label__ = 26; break; //@line 642 "parsermodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 642 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 642 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_tuple2ast($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 693 "parsermodule.c"
        var $2=((($1))|0)!=0; //@line 693 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 693 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, ((__str39)&4294967295), 1); //@line 693 "parsermodule.c"
        var $5=((($4))|0) < 0; //@line 693 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 694 "parsermodule.c"
        __label__ = 4; break; //@line 694 "parsermodule.c"
      case 3: // $bb2
        var $6=HEAP[$self_addr]; //@line 695 "parsermodule.c"
        var $7=HEAP[$args_addr]; //@line 695 "parsermodule.c"
        var $8=HEAP[$kw_addr]; //@line 695 "parsermodule.c"
        var $9=_parser_tuple2st($6, $7, $8); //@line 695 "parsermodule.c"
        HEAP[$0]=$9; //@line 695 "parsermodule.c"
        __label__ = 4; break; //@line 695 "parsermodule.c"
      case 4: // $bb3
        var $10=HEAP[$0]; //@line 694 "parsermodule.c"
        HEAP[$retval]=$10; //@line 694 "parsermodule.c"
        __label__ = 5; break; //@line 694 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 694 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 694 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_node_children($tuple, $root, $line_num) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tuple_addr=__stackBase__;
        var $root_addr=__stackBase__+4;
        var $line_num_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_48=__stackBase__+16;
        var $iftmp_47=__stackBase__+20;
        var $0=__stackBase__+24;
        var $len=__stackBase__+28;
        var $i=__stackBase__+32;
        var $err=__stackBase__+36;
        var $elem=__stackBase__+40;
        var $ok=__stackBase__+44;
        var $type=__stackBase__+48;
        var $strn=__stackBase__+52;
        var $temp=__stackBase__+56;
        var $err11=__stackBase__+60;
        var $len20=__stackBase__+64;
        var $temp21=__stackBase__+68;
        var $o=__stackBase__+72;
        var $err53=__stackBase__+76;
        var $new_child=__stackBase__+80;
        var $_alloca_point_=0;
        HEAP[$tuple_addr]=$tuple;
        HEAP[$root_addr]=$root;
        HEAP[$line_num_addr]=$line_num;
        var $1=HEAP[$tuple_addr]; //@line 710 "parsermodule.c"
        var $2=_PyObject_Size($1); //@line 710 "parsermodule.c"
        HEAP[$len]=$2; //@line 710 "parsermodule.c"
        HEAP[$i]=1; //@line 714 "parsermodule.c"
        __label__ = 74; break; //@line 714 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[$tuple_addr]; //@line 716 "parsermodule.c"
        var $4=HEAP[$i]; //@line 716 "parsermodule.c"
        var $5=_PySequence_GetItem($3, $4); //@line 716 "parsermodule.c"
        HEAP[$elem]=$5; //@line 716 "parsermodule.c"
        var $6=HEAP[$elem]; //@line 717 "parsermodule.c"
        var $7=($6)!=0; //@line 717 "parsermodule.c"
        var $8=unSign(($7), 1, 0); //@line 717 "parsermodule.c"
        HEAP[$ok]=$8; //@line 717 "parsermodule.c"
        HEAP[$type]=0; //@line 718 "parsermodule.c"
        HEAP[$strn]=0; //@line 719 "parsermodule.c"
        var $9=HEAP[$ok]; //@line 721 "parsermodule.c"
        var $10=((($9))|0)!=0; //@line 721 "parsermodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 721 "parsermodule.c"
      case 2: // $bb1
        var $11=HEAP[$elem]; //@line 722 "parsermodule.c"
        var $12=_PySequence_Check($11); //@line 722 "parsermodule.c"
        HEAP[$ok]=$12; //@line 722 "parsermodule.c"
        __label__ = 3; break; //@line 722 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$ok]; //@line 723 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 723 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 723 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$elem]; //@line 724 "parsermodule.c"
        var $16=_PySequence_GetItem($15, 0); //@line 724 "parsermodule.c"
        HEAP[$temp]=$16; //@line 724 "parsermodule.c"
        var $17=HEAP[$temp]; //@line 725 "parsermodule.c"
        var $18=($17)==0; //@line 725 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 725 "parsermodule.c"
      case 5: // $bb4
        HEAP[$ok]=0; //@line 726 "parsermodule.c"
        __label__ = 10; break; //@line 726 "parsermodule.c"
      case 6: // $bb5
        var $19=HEAP[$temp]; //@line 728 "parsermodule.c"
        var $20=(($19+4)&4294967295); //@line 728 "parsermodule.c"
        var $21=HEAP[$20]; //@line 728 "parsermodule.c"
        var $22=(($21+84)&4294967295); //@line 728 "parsermodule.c"
        var $23=HEAP[$22]; //@line 728 "parsermodule.c"
        var $24=($23) & 8388608; //@line 728 "parsermodule.c"
        var $25=((($24))|0)!=0; //@line 728 "parsermodule.c"
        var $26=unSign(($25), 1, 0); //@line 728 "parsermodule.c"
        HEAP[$ok]=$26; //@line 728 "parsermodule.c"
        var $27=HEAP[$ok]; //@line 729 "parsermodule.c"
        var $28=((($27))|0)!=0; //@line 729 "parsermodule.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 729 "parsermodule.c"
      case 7: // $bb6
        var $29=HEAP[$temp]; //@line 730 "parsermodule.c"
        var $30=$29; //@line 730 "parsermodule.c"
        var $31=(($30+8)&4294967295); //@line 730 "parsermodule.c"
        var $32=HEAP[$31]; //@line 730 "parsermodule.c"
        HEAP[$type]=$32; //@line 730 "parsermodule.c"
        __label__ = 8; break; //@line 730 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$temp]; //@line 731 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 731 "parsermodule.c"
        var $35=HEAP[$34]; //@line 731 "parsermodule.c"
        var $36=((($35) - 1)&4294967295); //@line 731 "parsermodule.c"
        var $37=HEAP[$temp]; //@line 731 "parsermodule.c"
        var $38=(($37)&4294967295); //@line 731 "parsermodule.c"
        HEAP[$38]=$36; //@line 731 "parsermodule.c"
        var $39=HEAP[$temp]; //@line 731 "parsermodule.c"
        var $40=(($39)&4294967295); //@line 731 "parsermodule.c"
        var $41=HEAP[$40]; //@line 731 "parsermodule.c"
        var $42=((($41))|0)==0; //@line 731 "parsermodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 731 "parsermodule.c"
      case 9: // $bb8
        var $43=HEAP[$temp]; //@line 731 "parsermodule.c"
        var $44=(($43+4)&4294967295); //@line 731 "parsermodule.c"
        var $45=HEAP[$44]; //@line 731 "parsermodule.c"
        var $46=(($45+24)&4294967295); //@line 731 "parsermodule.c"
        var $47=HEAP[$46]; //@line 731 "parsermodule.c"
        var $48=HEAP[$temp]; //@line 731 "parsermodule.c"
        FUNCTION_TABLE[$47]($48); //@line 731 "parsermodule.c"
        __label__ = 10; break; //@line 731 "parsermodule.c"
      case 10: // $bb9
        var $49=HEAP[$ok]; //@line 734 "parsermodule.c"
        var $50=((($49))|0)==0; //@line 734 "parsermodule.c"
        if ($50) { __label__ = 11; break; } else { __label__ = 18; break; } //@line 734 "parsermodule.c"
      case 11: // $bb10
        var $51=HEAP[$elem]; //@line 736 "parsermodule.c"
        var $52=_Py_BuildValue(((__str40)&4294967295), $51, ((__str41)&4294967295)); //@line 736 "parsermodule.c"
        HEAP[$err11]=$52; //@line 736 "parsermodule.c"
        var $53=HEAP[_parser_error]; //@line 737 "parsermodule.c"
        var $54=HEAP[$err11]; //@line 737 "parsermodule.c"
        _PyErr_SetObject($53, $54); //@line 737 "parsermodule.c"
        var $55=HEAP[$err11]; //@line 738 "parsermodule.c"
        var $56=($55)!=0; //@line 738 "parsermodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 738 "parsermodule.c"
      case 12: // $bb12
        var $57=HEAP[$err11]; //@line 738 "parsermodule.c"
        var $58=(($57)&4294967295); //@line 738 "parsermodule.c"
        var $59=HEAP[$58]; //@line 738 "parsermodule.c"
        var $60=((($59) - 1)&4294967295); //@line 738 "parsermodule.c"
        var $61=HEAP[$err11]; //@line 738 "parsermodule.c"
        var $62=(($61)&4294967295); //@line 738 "parsermodule.c"
        HEAP[$62]=$60; //@line 738 "parsermodule.c"
        var $63=HEAP[$err11]; //@line 738 "parsermodule.c"
        var $64=(($63)&4294967295); //@line 738 "parsermodule.c"
        var $65=HEAP[$64]; //@line 738 "parsermodule.c"
        var $66=((($65))|0)==0; //@line 738 "parsermodule.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 738 "parsermodule.c"
      case 13: // $bb13
        var $67=HEAP[$err11]; //@line 738 "parsermodule.c"
        var $68=(($67+4)&4294967295); //@line 738 "parsermodule.c"
        var $69=HEAP[$68]; //@line 738 "parsermodule.c"
        var $70=(($69+24)&4294967295); //@line 738 "parsermodule.c"
        var $71=HEAP[$70]; //@line 738 "parsermodule.c"
        var $72=HEAP[$err11]; //@line 738 "parsermodule.c"
        FUNCTION_TABLE[$71]($72); //@line 738 "parsermodule.c"
        __label__ = 14; break; //@line 738 "parsermodule.c"
      case 14: // $bb14
        var $73=HEAP[$elem]; //@line 739 "parsermodule.c"
        var $74=($73)!=0; //@line 739 "parsermodule.c"
        if ($74) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 739 "parsermodule.c"
      case 15: // $bb15
        var $75=HEAP[$elem]; //@line 739 "parsermodule.c"
        var $76=(($75)&4294967295); //@line 739 "parsermodule.c"
        var $77=HEAP[$76]; //@line 739 "parsermodule.c"
        var $78=((($77) - 1)&4294967295); //@line 739 "parsermodule.c"
        var $79=HEAP[$elem]; //@line 739 "parsermodule.c"
        var $80=(($79)&4294967295); //@line 739 "parsermodule.c"
        HEAP[$80]=$78; //@line 739 "parsermodule.c"
        var $81=HEAP[$elem]; //@line 739 "parsermodule.c"
        var $82=(($81)&4294967295); //@line 739 "parsermodule.c"
        var $83=HEAP[$82]; //@line 739 "parsermodule.c"
        var $84=((($83))|0)==0; //@line 739 "parsermodule.c"
        if ($84) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 739 "parsermodule.c"
      case 16: // $bb16
        var $85=HEAP[$elem]; //@line 739 "parsermodule.c"
        var $86=(($85+4)&4294967295); //@line 739 "parsermodule.c"
        var $87=HEAP[$86]; //@line 739 "parsermodule.c"
        var $88=(($87+24)&4294967295); //@line 739 "parsermodule.c"
        var $89=HEAP[$88]; //@line 739 "parsermodule.c"
        var $90=HEAP[$elem]; //@line 739 "parsermodule.c"
        FUNCTION_TABLE[$89]($90); //@line 739 "parsermodule.c"
        __label__ = 17; break; //@line 739 "parsermodule.c"
      case 17: // $bb17
        HEAP[$0]=0; //@line 740 "parsermodule.c"
        __label__ = 76; break; //@line 740 "parsermodule.c"
      case 18: // $bb18
        var $91=HEAP[$type]; //@line 742 "parsermodule.c"
        var $92=((($91))|0) <= 255; //@line 742 "parsermodule.c"
        if ($92) { __label__ = 19; break; } else { __label__ = 49; break; } //@line 742 "parsermodule.c"
      case 19: // $bb19
        var $93=HEAP[$elem]; //@line 743 "parsermodule.c"
        var $94=_PyObject_Size($93); //@line 743 "parsermodule.c"
        HEAP[$len20]=$94; //@line 743 "parsermodule.c"
        var $95=HEAP[$len20]; //@line 746 "parsermodule.c"
        var $96=((($95))|0)!=2; //@line 746 "parsermodule.c"
        if ($96) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 746 "parsermodule.c"
      case 20: // $bb22
        var $97=HEAP[$len20]; //@line 746 "parsermodule.c"
        var $98=((($97))|0)!=3; //@line 746 "parsermodule.c"
        if ($98) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 746 "parsermodule.c"
      case 21: // $bb23
        _err_string(((__str42)&4294967295)); //@line 747 "parsermodule.c"
        HEAP[$0]=0; //@line 748 "parsermodule.c"
        __label__ = 76; break; //@line 748 "parsermodule.c"
      case 22: // $bb24
        var $99=HEAP[$elem]; //@line 750 "parsermodule.c"
        var $100=_PySequence_GetItem($99, 1); //@line 750 "parsermodule.c"
        HEAP[$temp21]=$100; //@line 750 "parsermodule.c"
        var $101=HEAP[$temp21]; //@line 751 "parsermodule.c"
        var $102=($101)==0; //@line 751 "parsermodule.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 751 "parsermodule.c"
      case 23: // $bb25
        HEAP[$0]=0; //@line 752 "parsermodule.c"
        __label__ = 76; break; //@line 752 "parsermodule.c"
      case 24: // $bb26
        var $103=HEAP[$temp21]; //@line 753 "parsermodule.c"
        var $104=(($103+4)&4294967295); //@line 753 "parsermodule.c"
        var $105=HEAP[$104]; //@line 753 "parsermodule.c"
        var $106=(($105+84)&4294967295); //@line 753 "parsermodule.c"
        var $107=HEAP[$106]; //@line 753 "parsermodule.c"
        var $108=($107) & 134217728; //@line 753 "parsermodule.c"
        var $109=((($108))|0)==0; //@line 753 "parsermodule.c"
        if ($109) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 753 "parsermodule.c"
      case 25: // $bb27
        var $110=HEAP[$temp21]; //@line 754 "parsermodule.c"
        var $111=(($110+4)&4294967295); //@line 754 "parsermodule.c"
        var $112=HEAP[$111]; //@line 754 "parsermodule.c"
        var $113=(($112+12)&4294967295); //@line 754 "parsermodule.c"
        var $114=HEAP[$113]; //@line 754 "parsermodule.c"
        var $115=HEAP[_parser_error]; //@line 754 "parsermodule.c"
        var $116=_PyErr_Format($115, ((__str43)&4294967295), $114); //@line 754 "parsermodule.c"
        var $117=HEAP[$temp21]; //@line 758 "parsermodule.c"
        var $118=(($117)&4294967295); //@line 758 "parsermodule.c"
        var $119=HEAP[$118]; //@line 758 "parsermodule.c"
        var $120=((($119) - 1)&4294967295); //@line 758 "parsermodule.c"
        var $121=HEAP[$temp21]; //@line 758 "parsermodule.c"
        var $122=(($121)&4294967295); //@line 758 "parsermodule.c"
        HEAP[$122]=$120; //@line 758 "parsermodule.c"
        var $123=HEAP[$temp21]; //@line 758 "parsermodule.c"
        var $124=(($123)&4294967295); //@line 758 "parsermodule.c"
        var $125=HEAP[$124]; //@line 758 "parsermodule.c"
        var $126=((($125))|0)==0; //@line 758 "parsermodule.c"
        if ($126) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 758 "parsermodule.c"
      case 26: // $bb28
        var $127=HEAP[$temp21]; //@line 758 "parsermodule.c"
        var $128=(($127+4)&4294967295); //@line 758 "parsermodule.c"
        var $129=HEAP[$128]; //@line 758 "parsermodule.c"
        var $130=(($129+24)&4294967295); //@line 758 "parsermodule.c"
        var $131=HEAP[$130]; //@line 758 "parsermodule.c"
        var $132=HEAP[$temp21]; //@line 758 "parsermodule.c"
        FUNCTION_TABLE[$131]($132); //@line 758 "parsermodule.c"
        __label__ = 27; break; //@line 758 "parsermodule.c"
      case 27: // $bb29
        HEAP[$0]=0; //@line 759 "parsermodule.c"
        __label__ = 76; break; //@line 759 "parsermodule.c"
      case 28: // $bb30
        var $133=HEAP[$len20]; //@line 761 "parsermodule.c"
        var $134=((($133))|0)==3; //@line 761 "parsermodule.c"
        if ($134) { __label__ = 29; break; } else { __label__ = 38; break; } //@line 761 "parsermodule.c"
      case 29: // $bb31
        var $135=HEAP[$elem]; //@line 762 "parsermodule.c"
        var $136=_PySequence_GetItem($135, 2); //@line 762 "parsermodule.c"
        HEAP[$o]=$136; //@line 762 "parsermodule.c"
        var $137=HEAP[$o]; //@line 763 "parsermodule.c"
        var $138=($137)!=0; //@line 763 "parsermodule.c"
        if ($138) { __label__ = 30; break; } else { __label__ = 38; break; } //@line 763 "parsermodule.c"
      case 30: // $bb32
        var $139=HEAP[$o]; //@line 764 "parsermodule.c"
        var $140=(($139+4)&4294967295); //@line 764 "parsermodule.c"
        var $141=HEAP[$140]; //@line 764 "parsermodule.c"
        var $142=(($141+84)&4294967295); //@line 764 "parsermodule.c"
        var $143=HEAP[$142]; //@line 764 "parsermodule.c"
        var $144=($143) & 8388608; //@line 764 "parsermodule.c"
        var $145=((($144))|0)!=0; //@line 764 "parsermodule.c"
        if ($145) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 764 "parsermodule.c"
      case 31: // $bb33
        var $146=HEAP[$o]; //@line 765 "parsermodule.c"
        var $147=$146; //@line 765 "parsermodule.c"
        var $148=(($147+8)&4294967295); //@line 765 "parsermodule.c"
        var $149=HEAP[$148]; //@line 765 "parsermodule.c"
        var $150=HEAP[$line_num_addr]; //@line 765 "parsermodule.c"
        HEAP[$150]=$149; //@line 765 "parsermodule.c"
        var $151=HEAP[$o]; //@line 775 "parsermodule.c"
        var $152=(($151)&4294967295); //@line 775 "parsermodule.c"
        var $153=HEAP[$152]; //@line 775 "parsermodule.c"
        var $154=((($153) - 1)&4294967295); //@line 775 "parsermodule.c"
        var $155=HEAP[$o]; //@line 775 "parsermodule.c"
        var $156=(($155)&4294967295); //@line 775 "parsermodule.c"
        HEAP[$156]=$154; //@line 775 "parsermodule.c"
        var $157=HEAP[$o]; //@line 775 "parsermodule.c"
        var $158=(($157)&4294967295); //@line 775 "parsermodule.c"
        var $159=HEAP[$158]; //@line 775 "parsermodule.c"
        var $160=((($159))|0)==0; //@line 775 "parsermodule.c"
        if ($160) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 775 "parsermodule.c"
      case 32: // $bb34
        var $161=HEAP[$temp21]; //@line 767 "parsermodule.c"
        var $162=(($161+4)&4294967295); //@line 767 "parsermodule.c"
        var $163=HEAP[$162]; //@line 767 "parsermodule.c"
        var $164=(($163+12)&4294967295); //@line 767 "parsermodule.c"
        var $165=HEAP[$164]; //@line 767 "parsermodule.c"
        var $166=HEAP[_parser_error]; //@line 767 "parsermodule.c"
        var $167=_PyErr_Format($166, ((__str44)&4294967295), $165); //@line 767 "parsermodule.c"
        var $168=HEAP[$o]; //@line 771 "parsermodule.c"
        var $169=(($168)&4294967295); //@line 771 "parsermodule.c"
        var $170=HEAP[$169]; //@line 771 "parsermodule.c"
        var $171=((($170) - 1)&4294967295); //@line 771 "parsermodule.c"
        var $172=HEAP[$o]; //@line 771 "parsermodule.c"
        var $173=(($172)&4294967295); //@line 771 "parsermodule.c"
        HEAP[$173]=$171; //@line 771 "parsermodule.c"
        var $174=HEAP[$o]; //@line 771 "parsermodule.c"
        var $175=(($174)&4294967295); //@line 771 "parsermodule.c"
        var $176=HEAP[$175]; //@line 771 "parsermodule.c"
        var $177=((($176))|0)==0; //@line 771 "parsermodule.c"
        if ($177) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 771 "parsermodule.c"
      case 33: // $bb35
        var $178=HEAP[$o]; //@line 771 "parsermodule.c"
        var $179=(($178+4)&4294967295); //@line 771 "parsermodule.c"
        var $180=HEAP[$179]; //@line 771 "parsermodule.c"
        var $181=(($180+24)&4294967295); //@line 771 "parsermodule.c"
        var $182=HEAP[$181]; //@line 771 "parsermodule.c"
        var $183=HEAP[$o]; //@line 771 "parsermodule.c"
        FUNCTION_TABLE[$182]($183); //@line 771 "parsermodule.c"
        __label__ = 34; break; //@line 771 "parsermodule.c"
      case 34: // $bb36
        var $184=HEAP[$temp21]; //@line 772 "parsermodule.c"
        var $185=(($184)&4294967295); //@line 772 "parsermodule.c"
        var $186=HEAP[$185]; //@line 772 "parsermodule.c"
        var $187=((($186) - 1)&4294967295); //@line 772 "parsermodule.c"
        var $188=HEAP[$temp21]; //@line 772 "parsermodule.c"
        var $189=(($188)&4294967295); //@line 772 "parsermodule.c"
        HEAP[$189]=$187; //@line 772 "parsermodule.c"
        var $190=HEAP[$temp21]; //@line 772 "parsermodule.c"
        var $191=(($190)&4294967295); //@line 772 "parsermodule.c"
        var $192=HEAP[$191]; //@line 772 "parsermodule.c"
        var $193=((($192))|0)==0; //@line 772 "parsermodule.c"
        if ($193) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 772 "parsermodule.c"
      case 35: // $bb37
        var $194=HEAP[$temp21]; //@line 772 "parsermodule.c"
        var $195=(($194+4)&4294967295); //@line 772 "parsermodule.c"
        var $196=HEAP[$195]; //@line 772 "parsermodule.c"
        var $197=(($196+24)&4294967295); //@line 772 "parsermodule.c"
        var $198=HEAP[$197]; //@line 772 "parsermodule.c"
        var $199=HEAP[$temp21]; //@line 772 "parsermodule.c"
        FUNCTION_TABLE[$198]($199); //@line 772 "parsermodule.c"
        __label__ = 36; break; //@line 772 "parsermodule.c"
      case 36: // $bb38
        HEAP[$0]=0; //@line 773 "parsermodule.c"
        __label__ = 76; break; //@line 773 "parsermodule.c"
      case 37: // $bb39
        var $200=HEAP[$o]; //@line 775 "parsermodule.c"
        var $201=(($200+4)&4294967295); //@line 775 "parsermodule.c"
        var $202=HEAP[$201]; //@line 775 "parsermodule.c"
        var $203=(($202+24)&4294967295); //@line 775 "parsermodule.c"
        var $204=HEAP[$203]; //@line 775 "parsermodule.c"
        var $205=HEAP[$o]; //@line 775 "parsermodule.c"
        FUNCTION_TABLE[$204]($205); //@line 775 "parsermodule.c"
        __label__ = 38; break; //@line 775 "parsermodule.c"
      case 38: // $bb40
        var $206=HEAP[$temp21]; //@line 778 "parsermodule.c"
        var $207=$206; //@line 778 "parsermodule.c"
        var $208=(($207+8)&4294967295); //@line 778 "parsermodule.c"
        var $209=HEAP[$208]; //@line 778 "parsermodule.c"
        var $210=((($209) + 1)&4294967295); //@line 778 "parsermodule.c"
        HEAP[$len20]=$210; //@line 778 "parsermodule.c"
        var $211=HEAP[$len20]; //@line 779 "parsermodule.c"
        var $212=((($211))|0) >= 0; //@line 779 "parsermodule.c"
        if ($212) { __label__ = 39; break; } else { __label__ = 43; break; } //@line 779 "parsermodule.c"
      case 39: // $bb41
        var $213=HEAP[$len20]; //@line 779 "parsermodule.c"
        var $214=((($213))|0)!=0; //@line 779 "parsermodule.c"
        if ($214) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 779 "parsermodule.c"
      case 40: // $bb42
        var $215=HEAP[$len20]; //@line 779 "parsermodule.c"
        HEAP[$iftmp_48]=$215; //@line 779 "parsermodule.c"
        __label__ = 42; break; //@line 779 "parsermodule.c"
      case 41: // $bb43
        HEAP[$iftmp_48]=1; //@line 779 "parsermodule.c"
        __label__ = 42; break; //@line 779 "parsermodule.c"
      case 42: // $bb44
        var $216=HEAP[$iftmp_48]; //@line 779 "parsermodule.c"
        var $217=_malloc($216); //@line 779 "parsermodule.c"
        HEAP[$iftmp_47]=$217; //@line 779 "parsermodule.c"
        __label__ = 44; break; //@line 779 "parsermodule.c"
      case 43: // $bb45
        HEAP[$iftmp_47]=0; //@line 779 "parsermodule.c"
        __label__ = 44; break; //@line 779 "parsermodule.c"
      case 44: // $bb46
        var $218=HEAP[$iftmp_47]; //@line 779 "parsermodule.c"
        HEAP[$strn]=$218; //@line 779 "parsermodule.c"
        var $219=HEAP[$strn]; //@line 780 "parsermodule.c"
        var $220=($219)!=0; //@line 780 "parsermodule.c"
        if ($220) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 780 "parsermodule.c"
      case 45: // $bb47
        var $221=HEAP[$len20]; //@line 781 "parsermodule.c"
        var $222=HEAP[$temp21]; //@line 781 "parsermodule.c"
        var $223=$222; //@line 781 "parsermodule.c"
        var $224=(($223+20)&4294967295); //@line 781 "parsermodule.c"
        var $225=(($224)&4294967295); //@line 781 "parsermodule.c"
        var $226=HEAP[$strn]; //@line 781 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($226, $225, $221, 1, 0); //@line 781 "parsermodule.c"
        __label__ = 46; break; //@line 781 "parsermodule.c"
      case 46: // $bb48
        var $227=HEAP[$temp21]; //@line 782 "parsermodule.c"
        var $228=(($227)&4294967295); //@line 782 "parsermodule.c"
        var $229=HEAP[$228]; //@line 782 "parsermodule.c"
        var $230=((($229) - 1)&4294967295); //@line 782 "parsermodule.c"
        var $231=HEAP[$temp21]; //@line 782 "parsermodule.c"
        var $232=(($231)&4294967295); //@line 782 "parsermodule.c"
        HEAP[$232]=$230; //@line 782 "parsermodule.c"
        var $233=HEAP[$temp21]; //@line 782 "parsermodule.c"
        var $234=(($233)&4294967295); //@line 782 "parsermodule.c"
        var $235=HEAP[$234]; //@line 782 "parsermodule.c"
        var $236=((($235))|0)==0; //@line 782 "parsermodule.c"
        if ($236) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 782 "parsermodule.c"
      case 47: // $bb49
        var $237=HEAP[$temp21]; //@line 782 "parsermodule.c"
        var $238=(($237+4)&4294967295); //@line 782 "parsermodule.c"
        var $239=HEAP[$238]; //@line 782 "parsermodule.c"
        var $240=(($239+24)&4294967295); //@line 782 "parsermodule.c"
        var $241=HEAP[$240]; //@line 782 "parsermodule.c"
        var $242=HEAP[$temp21]; //@line 782 "parsermodule.c"
        FUNCTION_TABLE[$241]($242); //@line 782 "parsermodule.c"
        __label__ = 48; break; //@line 782 "parsermodule.c"
      case 48: // $bb50
        __label__ = 57; break; //@line 782 "parsermodule.c"
      case 49: // $bb51
        var $243=HEAP[$type]; //@line 784 "parsermodule.c"
        var $244=((($243))|0) <= 255; //@line 784 "parsermodule.c"
        if ($244) { __label__ = 50; break; } else { __label__ = 57; break; } //@line 784 "parsermodule.c"
      case 50: // $bb52
        var $245=HEAP[$elem]; //@line 789 "parsermodule.c"
        var $246=_Py_BuildValue(((__str40)&4294967295), $245, ((__str45)&4294967295)); //@line 789 "parsermodule.c"
        HEAP[$err53]=$246; //@line 789 "parsermodule.c"
        var $247=HEAP[_parser_error]; //@line 790 "parsermodule.c"
        var $248=HEAP[$err53]; //@line 790 "parsermodule.c"
        _PyErr_SetObject($247, $248); //@line 790 "parsermodule.c"
        var $249=HEAP[$err53]; //@line 791 "parsermodule.c"
        var $250=($249)!=0; //@line 791 "parsermodule.c"
        if ($250) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 791 "parsermodule.c"
      case 51: // $bb54
        var $251=HEAP[$err53]; //@line 791 "parsermodule.c"
        var $252=(($251)&4294967295); //@line 791 "parsermodule.c"
        var $253=HEAP[$252]; //@line 791 "parsermodule.c"
        var $254=((($253) - 1)&4294967295); //@line 791 "parsermodule.c"
        var $255=HEAP[$err53]; //@line 791 "parsermodule.c"
        var $256=(($255)&4294967295); //@line 791 "parsermodule.c"
        HEAP[$256]=$254; //@line 791 "parsermodule.c"
        var $257=HEAP[$err53]; //@line 791 "parsermodule.c"
        var $258=(($257)&4294967295); //@line 791 "parsermodule.c"
        var $259=HEAP[$258]; //@line 791 "parsermodule.c"
        var $260=((($259))|0)==0; //@line 791 "parsermodule.c"
        if ($260) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 791 "parsermodule.c"
      case 52: // $bb55
        var $261=HEAP[$err53]; //@line 791 "parsermodule.c"
        var $262=(($261+4)&4294967295); //@line 791 "parsermodule.c"
        var $263=HEAP[$262]; //@line 791 "parsermodule.c"
        var $264=(($263+24)&4294967295); //@line 791 "parsermodule.c"
        var $265=HEAP[$264]; //@line 791 "parsermodule.c"
        var $266=HEAP[$err53]; //@line 791 "parsermodule.c"
        FUNCTION_TABLE[$265]($266); //@line 791 "parsermodule.c"
        __label__ = 53; break; //@line 791 "parsermodule.c"
      case 53: // $bb56
        var $267=HEAP[$elem]; //@line 792 "parsermodule.c"
        var $268=($267)!=0; //@line 792 "parsermodule.c"
        if ($268) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 792 "parsermodule.c"
      case 54: // $bb57
        var $269=HEAP[$elem]; //@line 792 "parsermodule.c"
        var $270=(($269)&4294967295); //@line 792 "parsermodule.c"
        var $271=HEAP[$270]; //@line 792 "parsermodule.c"
        var $272=((($271) - 1)&4294967295); //@line 792 "parsermodule.c"
        var $273=HEAP[$elem]; //@line 792 "parsermodule.c"
        var $274=(($273)&4294967295); //@line 792 "parsermodule.c"
        HEAP[$274]=$272; //@line 792 "parsermodule.c"
        var $275=HEAP[$elem]; //@line 792 "parsermodule.c"
        var $276=(($275)&4294967295); //@line 792 "parsermodule.c"
        var $277=HEAP[$276]; //@line 792 "parsermodule.c"
        var $278=((($277))|0)==0; //@line 792 "parsermodule.c"
        if ($278) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 792 "parsermodule.c"
      case 55: // $bb58
        var $279=HEAP[$elem]; //@line 792 "parsermodule.c"
        var $280=(($279+4)&4294967295); //@line 792 "parsermodule.c"
        var $281=HEAP[$280]; //@line 792 "parsermodule.c"
        var $282=(($281+24)&4294967295); //@line 792 "parsermodule.c"
        var $283=HEAP[$282]; //@line 792 "parsermodule.c"
        var $284=HEAP[$elem]; //@line 792 "parsermodule.c"
        FUNCTION_TABLE[$283]($284); //@line 792 "parsermodule.c"
        __label__ = 56; break; //@line 792 "parsermodule.c"
      case 56: // $bb59
        HEAP[$0]=0; //@line 793 "parsermodule.c"
        __label__ = 76; break; //@line 793 "parsermodule.c"
      case 57: // $bb60
        var $285=HEAP[$line_num_addr]; //@line 795 "parsermodule.c"
        var $286=HEAP[$285]; //@line 795 "parsermodule.c"
        var $287=HEAP[$root_addr]; //@line 795 "parsermodule.c"
        var $288=HEAP[$type]; //@line 795 "parsermodule.c"
        var $289=HEAP[$strn]; //@line 795 "parsermodule.c"
        var $290=_PyNode_AddChild($287, $288, $289, $286, 0); //@line 795 "parsermodule.c"
        HEAP[$err]=$290; //@line 795 "parsermodule.c"
        var $291=HEAP[$err]; //@line 796 "parsermodule.c"
        var $292=((($291))|0)==15; //@line 796 "parsermodule.c"
        if ($292) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 796 "parsermodule.c"
      case 58: // $bb61
        var $293=HEAP[$strn]; //@line 797 "parsermodule.c"
        _free($293); //@line 797 "parsermodule.c"
        var $294=_PyErr_NoMemory(); //@line 798 "parsermodule.c"
        var $295=$294; //@line 798 "parsermodule.c"
        HEAP[$0]=$295; //@line 798 "parsermodule.c"
        __label__ = 76; break; //@line 798 "parsermodule.c"
      case 59: // $bb62
        var $296=HEAP[$err]; //@line 800 "parsermodule.c"
        var $297=((($296))|0)==19; //@line 800 "parsermodule.c"
        if ($297) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 800 "parsermodule.c"
      case 60: // $bb63
        var $298=HEAP[$strn]; //@line 801 "parsermodule.c"
        _free($298); //@line 801 "parsermodule.c"
        var $299=HEAP[_PyExc_ValueError]; //@line 802 "parsermodule.c"
        _PyErr_SetString($299, ((__str46)&4294967295)); //@line 802 "parsermodule.c"
        HEAP[$0]=0; //@line 804 "parsermodule.c"
        __label__ = 76; break; //@line 804 "parsermodule.c"
      case 61: // $bb64
        var $300=HEAP[$type]; //@line 807 "parsermodule.c"
        var $301=((($300))|0) > 255; //@line 807 "parsermodule.c"
        if ($301) { __label__ = 62; break; } else { __label__ = 68; break; } //@line 807 "parsermodule.c"
      case 62: // $bb65
        var $302=HEAP[$root_addr]; //@line 808 "parsermodule.c"
        var $303=(($302+20)&4294967295); //@line 808 "parsermodule.c"
        var $304=HEAP[$303]; //@line 808 "parsermodule.c"
        var $305=HEAP[$i]; //@line 808 "parsermodule.c"
        var $306=((($305) - 1)&4294967295); //@line 808 "parsermodule.c"
        var $307=(($304+24*$306)&4294967295); //@line 808 "parsermodule.c"
        HEAP[$new_child]=$307; //@line 808 "parsermodule.c"
        var $308=HEAP[$elem]; //@line 810 "parsermodule.c"
        var $309=HEAP[$new_child]; //@line 810 "parsermodule.c"
        var $310=HEAP[$line_num_addr]; //@line 810 "parsermodule.c"
        var $311=_build_node_children($308, $309, $310); //@line 810 "parsermodule.c"
        var $312=HEAP[$new_child]; //@line 810 "parsermodule.c"
        var $313=($311)!=($312); //@line 810 "parsermodule.c"
        if ($313) { __label__ = 63; break; } else { __label__ = 67; break; } //@line 810 "parsermodule.c"
      case 63: // $bb66
        var $314=HEAP[$elem]; //@line 811 "parsermodule.c"
        var $315=($314)!=0; //@line 811 "parsermodule.c"
        if ($315) { __label__ = 64; break; } else { __label__ = 66; break; } //@line 811 "parsermodule.c"
      case 64: // $bb67
        var $316=HEAP[$elem]; //@line 811 "parsermodule.c"
        var $317=(($316)&4294967295); //@line 811 "parsermodule.c"
        var $318=HEAP[$317]; //@line 811 "parsermodule.c"
        var $319=((($318) - 1)&4294967295); //@line 811 "parsermodule.c"
        var $320=HEAP[$elem]; //@line 811 "parsermodule.c"
        var $321=(($320)&4294967295); //@line 811 "parsermodule.c"
        HEAP[$321]=$319; //@line 811 "parsermodule.c"
        var $322=HEAP[$elem]; //@line 811 "parsermodule.c"
        var $323=(($322)&4294967295); //@line 811 "parsermodule.c"
        var $324=HEAP[$323]; //@line 811 "parsermodule.c"
        var $325=((($324))|0)==0; //@line 811 "parsermodule.c"
        if ($325) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 811 "parsermodule.c"
      case 65: // $bb68
        var $326=HEAP[$elem]; //@line 811 "parsermodule.c"
        var $327=(($326+4)&4294967295); //@line 811 "parsermodule.c"
        var $328=HEAP[$327]; //@line 811 "parsermodule.c"
        var $329=(($328+24)&4294967295); //@line 811 "parsermodule.c"
        var $330=HEAP[$329]; //@line 811 "parsermodule.c"
        var $331=HEAP[$elem]; //@line 811 "parsermodule.c"
        FUNCTION_TABLE[$330]($331); //@line 811 "parsermodule.c"
        __label__ = 66; break; //@line 811 "parsermodule.c"
      case 66: // $bb69
        HEAP[$0]=0; //@line 812 "parsermodule.c"
        __label__ = 76; break; //@line 812 "parsermodule.c"
      case 67: // $bb70
        __label__ = 70; break; //@line 812 "parsermodule.c"
      case 68: // $bb71
        var $332=HEAP[$type]; //@line 815 "parsermodule.c"
        var $333=((($332))|0)==4; //@line 815 "parsermodule.c"
        if ($333) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 815 "parsermodule.c"
      case 69: // $bb72
        var $334=HEAP[$line_num_addr]; //@line 816 "parsermodule.c"
        var $335=HEAP[$334]; //@line 816 "parsermodule.c"
        var $336=((($335) + 1)&4294967295); //@line 816 "parsermodule.c"
        var $337=HEAP[$line_num_addr]; //@line 816 "parsermodule.c"
        HEAP[$337]=$336; //@line 816 "parsermodule.c"
        __label__ = 70; break; //@line 816 "parsermodule.c"
      case 70: // $bb73
        var $338=HEAP[$elem]; //@line 818 "parsermodule.c"
        var $339=($338)!=0; //@line 818 "parsermodule.c"
        if ($339) { __label__ = 71; break; } else { __label__ = 73; break; } //@line 818 "parsermodule.c"
      case 71: // $bb74
        var $340=HEAP[$elem]; //@line 818 "parsermodule.c"
        var $341=(($340)&4294967295); //@line 818 "parsermodule.c"
        var $342=HEAP[$341]; //@line 818 "parsermodule.c"
        var $343=((($342) - 1)&4294967295); //@line 818 "parsermodule.c"
        var $344=HEAP[$elem]; //@line 818 "parsermodule.c"
        var $345=(($344)&4294967295); //@line 818 "parsermodule.c"
        HEAP[$345]=$343; //@line 818 "parsermodule.c"
        var $346=HEAP[$elem]; //@line 818 "parsermodule.c"
        var $347=(($346)&4294967295); //@line 818 "parsermodule.c"
        var $348=HEAP[$347]; //@line 818 "parsermodule.c"
        var $349=((($348))|0)==0; //@line 818 "parsermodule.c"
        if ($349) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 818 "parsermodule.c"
      case 72: // $bb75
        var $350=HEAP[$elem]; //@line 818 "parsermodule.c"
        var $351=(($350+4)&4294967295); //@line 818 "parsermodule.c"
        var $352=HEAP[$351]; //@line 818 "parsermodule.c"
        var $353=(($352+24)&4294967295); //@line 818 "parsermodule.c"
        var $354=HEAP[$353]; //@line 818 "parsermodule.c"
        var $355=HEAP[$elem]; //@line 818 "parsermodule.c"
        FUNCTION_TABLE[$354]($355); //@line 818 "parsermodule.c"
        __label__ = 73; break; //@line 818 "parsermodule.c"
      case 73: // $bb76
        var $356=HEAP[$i]; //@line 714 "parsermodule.c"
        var $357=((($356) + 1)&4294967295); //@line 714 "parsermodule.c"
        HEAP[$i]=$357; //@line 714 "parsermodule.c"
        __label__ = 74; break; //@line 714 "parsermodule.c"
      case 74: // $bb77
        var $358=HEAP[$i]; //@line 714 "parsermodule.c"
        var $359=HEAP[$len]; //@line 714 "parsermodule.c"
        var $360=((($358))|0) < ((($359))|0); //@line 714 "parsermodule.c"
        if ($360) { __label__ = 1; break; } else { __label__ = 75; break; } //@line 714 "parsermodule.c"
      case 75: // $bb78
        var $361=HEAP[$root_addr]; //@line 820 "parsermodule.c"
        HEAP[$0]=$361; //@line 820 "parsermodule.c"
        __label__ = 76; break; //@line 820 "parsermodule.c"
      case 76: // $bb79
        var $362=HEAP[$0]; //@line 740 "parsermodule.c"
        HEAP[$retval]=$362; //@line 740 "parsermodule.c"
        __label__ = 77; break; //@line 740 "parsermodule.c"
      case 77: // $return
        var $retval80=HEAP[$retval]; //@line 740 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval80; //@line 740 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_node_tree($tuple) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tuple_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_56=__stackBase__+12;
        var $iftmp_55=__stackBase__+16;
        var $res=__stackBase__+20;
        var $temp=__stackBase__+24;
        var $num=__stackBase__+28;
        var $line_num=__stackBase__+32;
        var $encoding=__stackBase__+36;
        var $len=__stackBase__+40;
        var $err=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$tuple_addr]=$tuple;
        HEAP[$res]=0; //@line 827 "parsermodule.c"
        var $1=HEAP[$tuple_addr]; //@line 828 "parsermodule.c"
        var $2=_PySequence_GetItem($1, 0); //@line 828 "parsermodule.c"
        HEAP[$temp]=$2; //@line 828 "parsermodule.c"
        HEAP[$num]=-1; //@line 829 "parsermodule.c"
        var $3=HEAP[$temp]; //@line 831 "parsermodule.c"
        var $4=($3)!=0; //@line 831 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 831 "parsermodule.c"
      case 1: // $bb
        var $5=HEAP[$temp]; //@line 832 "parsermodule.c"
        var $6=_PyInt_AsLong($5); //@line 832 "parsermodule.c"
        HEAP[$num]=$6; //@line 832 "parsermodule.c"
        __label__ = 2; break; //@line 832 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$temp]; //@line 833 "parsermodule.c"
        var $8=($7)!=0; //@line 833 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 833 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$temp]; //@line 833 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 833 "parsermodule.c"
        var $11=HEAP[$10]; //@line 833 "parsermodule.c"
        var $12=((($11) - 1)&4294967295); //@line 833 "parsermodule.c"
        var $13=HEAP[$temp]; //@line 833 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 833 "parsermodule.c"
        HEAP[$14]=$12; //@line 833 "parsermodule.c"
        var $15=HEAP[$temp]; //@line 833 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 833 "parsermodule.c"
        var $17=HEAP[$16]; //@line 833 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 833 "parsermodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 833 "parsermodule.c"
      case 4: // $bb3
        var $19=HEAP[$temp]; //@line 833 "parsermodule.c"
        var $20=(($19+4)&4294967295); //@line 833 "parsermodule.c"
        var $21=HEAP[$20]; //@line 833 "parsermodule.c"
        var $22=(($21+24)&4294967295); //@line 833 "parsermodule.c"
        var $23=HEAP[$22]; //@line 833 "parsermodule.c"
        var $24=HEAP[$temp]; //@line 833 "parsermodule.c"
        FUNCTION_TABLE[$23]($24); //@line 833 "parsermodule.c"
        __label__ = 5; break; //@line 833 "parsermodule.c"
      case 5: // $bb4
        var $25=HEAP[$num]; //@line 834 "parsermodule.c"
        var $26=((($25))|0) <= 255; //@line 834 "parsermodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 834 "parsermodule.c"
      case 6: // $bb5
        var $27=HEAP[$tuple_addr]; //@line 839 "parsermodule.c"
        var $28=_Py_BuildValue(((__str40)&4294967295), $27, ((__str47)&4294967295)); //@line 839 "parsermodule.c"
        HEAP[$tuple_addr]=$28; //@line 839 "parsermodule.c"
        var $29=HEAP[_parser_error]; //@line 841 "parsermodule.c"
        var $30=HEAP[$tuple_addr]; //@line 841 "parsermodule.c"
        _PyErr_SetObject($29, $30); //@line 841 "parsermodule.c"
        var $31=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        var $32=($31)!=0; //@line 842 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 842 "parsermodule.c"
      case 7: // $bb6
        var $33=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 842 "parsermodule.c"
        var $35=HEAP[$34]; //@line 842 "parsermodule.c"
        var $36=((($35) - 1)&4294967295); //@line 842 "parsermodule.c"
        var $37=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        var $38=(($37)&4294967295); //@line 842 "parsermodule.c"
        HEAP[$38]=$36; //@line 842 "parsermodule.c"
        var $39=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        var $40=(($39)&4294967295); //@line 842 "parsermodule.c"
        var $41=HEAP[$40]; //@line 842 "parsermodule.c"
        var $42=((($41))|0)==0; //@line 842 "parsermodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 842 "parsermodule.c"
      case 8: // $bb7
        var $43=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        var $44=(($43+4)&4294967295); //@line 842 "parsermodule.c"
        var $45=HEAP[$44]; //@line 842 "parsermodule.c"
        var $46=(($45+24)&4294967295); //@line 842 "parsermodule.c"
        var $47=HEAP[$46]; //@line 842 "parsermodule.c"
        var $48=HEAP[$tuple_addr]; //@line 842 "parsermodule.c"
        FUNCTION_TABLE[$47]($48); //@line 842 "parsermodule.c"
        __label__ = 9; break; //@line 842 "parsermodule.c"
      case 9: // $bb8
        __label__ = 34; break; //@line 842 "parsermodule.c"
      case 10: // $bb9
        var $49=HEAP[$num]; //@line 844 "parsermodule.c"
        var $50=((($49))|0) > 255; //@line 844 "parsermodule.c"
        if ($50) { __label__ = 11; break; } else { __label__ = 31; break; } //@line 844 "parsermodule.c"
      case 11: // $bb10
        HEAP[$line_num]=0; //@line 848 "parsermodule.c"
        HEAP[$encoding]=0; //@line 849 "parsermodule.c"
        var $51=HEAP[$num]; //@line 851 "parsermodule.c"
        var $52=((($51))|0)==339; //@line 851 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 851 "parsermodule.c"
      case 12: // $bb11
        var $53=HEAP[$tuple_addr]; //@line 852 "parsermodule.c"
        var $54=_PySequence_GetItem($53, 2); //@line 852 "parsermodule.c"
        HEAP[$encoding]=$54; //@line 852 "parsermodule.c"
        var $55=HEAP[$tuple_addr]; //@line 854 "parsermodule.c"
        var $56=_PySequence_GetSlice($55, 0, 2); //@line 854 "parsermodule.c"
        HEAP[$tuple_addr]=$56; //@line 854 "parsermodule.c"
        __label__ = 13; break; //@line 854 "parsermodule.c"
      case 13: // $bb12
        var $57=HEAP[$num]; //@line 856 "parsermodule.c"
        var $58=_PyNode_New($57); //@line 856 "parsermodule.c"
        HEAP[$res]=$58; //@line 856 "parsermodule.c"
        var $59=HEAP[$res]; //@line 857 "parsermodule.c"
        var $60=($59)!=0; //@line 857 "parsermodule.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 30; break; } //@line 857 "parsermodule.c"
      case 14: // $bb13
        var $61=HEAP[$tuple_addr]; //@line 858 "parsermodule.c"
        var $62=HEAP[$res]; //@line 858 "parsermodule.c"
        var $63=_build_node_children($61, $62, $line_num); //@line 858 "parsermodule.c"
        var $64=HEAP[$res]; //@line 858 "parsermodule.c"
        var $65=($63)!=($64); //@line 858 "parsermodule.c"
        if ($65) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 858 "parsermodule.c"
      case 15: // $bb14
        var $66=HEAP[$res]; //@line 859 "parsermodule.c"
        _PyNode_Free($66); //@line 859 "parsermodule.c"
        HEAP[$res]=0; //@line 860 "parsermodule.c"
        __label__ = 16; break; //@line 860 "parsermodule.c"
      case 16: // $bb15
        var $67=HEAP[$res]; //@line 862 "parsermodule.c"
        var $68=($67)!=0; //@line 862 "parsermodule.c"
        if ($68) { __label__ = 17; break; } else { __label__ = 30; break; } //@line 862 "parsermodule.c"
      case 17: // $bb16
        var $69=HEAP[$encoding]; //@line 862 "parsermodule.c"
        var $70=($69)!=0; //@line 862 "parsermodule.c"
        if ($70) { __label__ = 18; break; } else { __label__ = 30; break; } //@line 862 "parsermodule.c"
      case 18: // $bb17
        var $71=HEAP[$encoding]; //@line 864 "parsermodule.c"
        var $72=$71; //@line 864 "parsermodule.c"
        var $73=(($72+8)&4294967295); //@line 864 "parsermodule.c"
        var $74=HEAP[$73]; //@line 864 "parsermodule.c"
        var $75=((($74) + 1)&4294967295); //@line 864 "parsermodule.c"
        HEAP[$len]=$75; //@line 864 "parsermodule.c"
        var $76=HEAP[$len]; //@line 865 "parsermodule.c"
        var $77=((($76))|0) >= 0; //@line 865 "parsermodule.c"
        if ($77) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 865 "parsermodule.c"
      case 19: // $bb18
        var $78=HEAP[$len]; //@line 865 "parsermodule.c"
        var $79=((($78))|0)!=0; //@line 865 "parsermodule.c"
        if ($79) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 865 "parsermodule.c"
      case 20: // $bb19
        var $80=HEAP[$len]; //@line 865 "parsermodule.c"
        HEAP[$iftmp_56]=$80; //@line 865 "parsermodule.c"
        __label__ = 22; break; //@line 865 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_56]=1; //@line 865 "parsermodule.c"
        __label__ = 22; break; //@line 865 "parsermodule.c"
      case 22: // $bb21
        var $81=HEAP[$iftmp_56]; //@line 865 "parsermodule.c"
        var $82=_malloc($81); //@line 865 "parsermodule.c"
        HEAP[$iftmp_55]=$82; //@line 865 "parsermodule.c"
        __label__ = 24; break; //@line 865 "parsermodule.c"
      case 23: // $bb22
        HEAP[$iftmp_55]=0; //@line 865 "parsermodule.c"
        __label__ = 24; break; //@line 865 "parsermodule.c"
      case 24: // $bb23
        var $83=HEAP[$res]; //@line 865 "parsermodule.c"
        var $84=(($83+4)&4294967295); //@line 865 "parsermodule.c"
        var $85=HEAP[$iftmp_55]; //@line 865 "parsermodule.c"
        HEAP[$84]=$85; //@line 865 "parsermodule.c"
        var $86=HEAP[$res]; //@line 866 "parsermodule.c"
        var $87=(($86+4)&4294967295); //@line 866 "parsermodule.c"
        var $88=HEAP[$87]; //@line 866 "parsermodule.c"
        var $89=($88)!=0; //@line 866 "parsermodule.c"
        if ($89) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 866 "parsermodule.c"
      case 25: // $bb24
        var $90=HEAP[$len]; //@line 867 "parsermodule.c"
        var $91=HEAP[$encoding]; //@line 867 "parsermodule.c"
        var $92=$91; //@line 867 "parsermodule.c"
        var $93=(($92+20)&4294967295); //@line 867 "parsermodule.c"
        var $94=(($93)&4294967295); //@line 867 "parsermodule.c"
        var $95=HEAP[$res]; //@line 867 "parsermodule.c"
        var $96=(($95+4)&4294967295); //@line 867 "parsermodule.c"
        var $97=HEAP[$96]; //@line 867 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($97, $94, $90, 1, 0); //@line 867 "parsermodule.c"
        __label__ = 26; break; //@line 867 "parsermodule.c"
      case 26: // $bb25
        var $98=HEAP[$encoding]; //@line 868 "parsermodule.c"
        var $99=(($98)&4294967295); //@line 868 "parsermodule.c"
        var $100=HEAP[$99]; //@line 868 "parsermodule.c"
        var $101=((($100) - 1)&4294967295); //@line 868 "parsermodule.c"
        var $102=HEAP[$encoding]; //@line 868 "parsermodule.c"
        var $103=(($102)&4294967295); //@line 868 "parsermodule.c"
        HEAP[$103]=$101; //@line 868 "parsermodule.c"
        var $104=HEAP[$encoding]; //@line 868 "parsermodule.c"
        var $105=(($104)&4294967295); //@line 868 "parsermodule.c"
        var $106=HEAP[$105]; //@line 868 "parsermodule.c"
        var $107=((($106))|0)==0; //@line 868 "parsermodule.c"
        if ($107) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 868 "parsermodule.c"
      case 27: // $bb26
        var $108=HEAP[$encoding]; //@line 868 "parsermodule.c"
        var $109=(($108+4)&4294967295); //@line 868 "parsermodule.c"
        var $110=HEAP[$109]; //@line 868 "parsermodule.c"
        var $111=(($110+24)&4294967295); //@line 868 "parsermodule.c"
        var $112=HEAP[$111]; //@line 868 "parsermodule.c"
        var $113=HEAP[$encoding]; //@line 868 "parsermodule.c"
        FUNCTION_TABLE[$112]($113); //@line 868 "parsermodule.c"
        __label__ = 28; break; //@line 868 "parsermodule.c"
      case 28: // $bb27
        var $114=HEAP[$tuple_addr]; //@line 869 "parsermodule.c"
        var $115=(($114)&4294967295); //@line 869 "parsermodule.c"
        var $116=HEAP[$115]; //@line 869 "parsermodule.c"
        var $117=((($116) - 1)&4294967295); //@line 869 "parsermodule.c"
        var $118=HEAP[$tuple_addr]; //@line 869 "parsermodule.c"
        var $119=(($118)&4294967295); //@line 869 "parsermodule.c"
        HEAP[$119]=$117; //@line 869 "parsermodule.c"
        var $120=HEAP[$tuple_addr]; //@line 869 "parsermodule.c"
        var $121=(($120)&4294967295); //@line 869 "parsermodule.c"
        var $122=HEAP[$121]; //@line 869 "parsermodule.c"
        var $123=((($122))|0)==0; //@line 869 "parsermodule.c"
        if ($123) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 869 "parsermodule.c"
      case 29: // $bb28
        var $124=HEAP[$tuple_addr]; //@line 869 "parsermodule.c"
        var $125=(($124+4)&4294967295); //@line 869 "parsermodule.c"
        var $126=HEAP[$125]; //@line 869 "parsermodule.c"
        var $127=(($126+24)&4294967295); //@line 869 "parsermodule.c"
        var $128=HEAP[$127]; //@line 869 "parsermodule.c"
        var $129=HEAP[$tuple_addr]; //@line 869 "parsermodule.c"
        FUNCTION_TABLE[$128]($129); //@line 869 "parsermodule.c"
        __label__ = 30; break; //@line 869 "parsermodule.c"
      case 30: // $bb29
        __label__ = 34; break; //@line 869 "parsermodule.c"
      case 31: // $bb30
        var $130=HEAP[$tuple_addr]; //@line 879 "parsermodule.c"
        var $131=_Py_BuildValue(((__str40)&4294967295), $130, ((__str48)&4294967295)); //@line 879 "parsermodule.c"
        HEAP[$err]=$131; //@line 879 "parsermodule.c"
        var $132=HEAP[_parser_error]; //@line 880 "parsermodule.c"
        var $133=HEAP[$err]; //@line 880 "parsermodule.c"
        _PyErr_SetObject($132, $133); //@line 880 "parsermodule.c"
        var $134=HEAP[$err]; //@line 881 "parsermodule.c"
        var $135=($134)!=0; //@line 881 "parsermodule.c"
        if ($135) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 881 "parsermodule.c"
      case 32: // $bb31
        var $136=HEAP[$err]; //@line 881 "parsermodule.c"
        var $137=(($136)&4294967295); //@line 881 "parsermodule.c"
        var $138=HEAP[$137]; //@line 881 "parsermodule.c"
        var $139=((($138) - 1)&4294967295); //@line 881 "parsermodule.c"
        var $140=HEAP[$err]; //@line 881 "parsermodule.c"
        var $141=(($140)&4294967295); //@line 881 "parsermodule.c"
        HEAP[$141]=$139; //@line 881 "parsermodule.c"
        var $142=HEAP[$err]; //@line 881 "parsermodule.c"
        var $143=(($142)&4294967295); //@line 881 "parsermodule.c"
        var $144=HEAP[$143]; //@line 881 "parsermodule.c"
        var $145=((($144))|0)==0; //@line 881 "parsermodule.c"
        if ($145) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 881 "parsermodule.c"
      case 33: // $bb32
        var $146=HEAP[$err]; //@line 881 "parsermodule.c"
        var $147=(($146+4)&4294967295); //@line 881 "parsermodule.c"
        var $148=HEAP[$147]; //@line 881 "parsermodule.c"
        var $149=(($148+24)&4294967295); //@line 881 "parsermodule.c"
        var $150=HEAP[$149]; //@line 881 "parsermodule.c"
        var $151=HEAP[$err]; //@line 881 "parsermodule.c"
        FUNCTION_TABLE[$150]($151); //@line 881 "parsermodule.c"
        __label__ = 34; break; //@line 881 "parsermodule.c"
      case 34: // $bb33
        var $152=HEAP[$res]; //@line 884 "parsermodule.c"
        HEAP[$0]=$152; //@line 884 "parsermodule.c"
        var $153=HEAP[$0]; //@line 884 "parsermodule.c"
        HEAP[$retval]=$153; //@line 884 "parsermodule.c"
        __label__ = 35; break; //@line 884 "parsermodule.c"
      case 35: // $return
        var $retval34=HEAP[$retval]; //@line 884 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 884 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_ntype($n, $t) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr=__stackBase__;
        var $t_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$n_addr]=$n;
        HEAP[$t_addr]=$t;
        var $1=HEAP[$n_addr]; //@line 956 "parsermodule.c"
        var $2=(($1)&4294967295); //@line 956 "parsermodule.c"
        var $3=HEAP[$2]; //@line 956 "parsermodule.c"
        var $4=reSign(($3), 16, 0); //@line 956 "parsermodule.c"
        var $5=HEAP[$t_addr]; //@line 956 "parsermodule.c"
        var $6=((($4))|0)!=((($5))|0); //@line 956 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$n_addr]; //@line 957 "parsermodule.c"
        var $8=(($7)&4294967295); //@line 957 "parsermodule.c"
        var $9=HEAP[$8]; //@line 957 "parsermodule.c"
        var $10=reSign(($9), 16, 0); //@line 957 "parsermodule.c"
        var $11=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $12=HEAP[$t_addr]; //@line 957 "parsermodule.c"
        var $13=_PyErr_Format($11, ((__str49)&4294967295), $12, $10); //@line 957 "parsermodule.c"
        HEAP[$0]=0; //@line 959 "parsermodule.c"
        __label__ = 3; break; //@line 959 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 961 "parsermodule.c"
        __label__ = 3; break; //@line 961 "parsermodule.c"
      case 3: // $bb2
        var $14=HEAP[$0]; //@line 959 "parsermodule.c"
        HEAP[$retval]=$14; //@line 959 "parsermodule.c"
        __label__ = 4; break; //@line 959 "parsermodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 959 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 959 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_numnodes($n, $num, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr=__stackBase__;
        var $num_addr=__stackBase__+4;
        var $name_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$n_addr]=$n;
        HEAP[$num_addr]=$num;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$n_addr]; //@line 975 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 975 "parsermodule.c"
        var $3=HEAP[$2]; //@line 975 "parsermodule.c"
        var $4=HEAP[$num_addr]; //@line 975 "parsermodule.c"
        var $5=((($3))|0)!=((($4))|0); //@line 975 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 975 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $7=HEAP[$name_addr]; //@line 976 "parsermodule.c"
        var $8=_PyErr_Format($6, ((__str50)&4294967295), $7); //@line 976 "parsermodule.c"
        HEAP[$0]=0; //@line 978 "parsermodule.c"
        __label__ = 3; break; //@line 978 "parsermodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 980 "parsermodule.c"
        __label__ = 3; break; //@line 980 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 978 "parsermodule.c"
        HEAP[$retval]=$9; //@line 978 "parsermodule.c"
        __label__ = 4; break; //@line 978 "parsermodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 978 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 978 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_terminal($terminal, $type, $string) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $terminal_addr=__stackBase__;
        var $type_addr=__stackBase__+4;
        var $string_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $iftmp_62=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$terminal_addr]=$terminal;
        HEAP[$type_addr]=$type;
        HEAP[$string_addr]=$string;
        var $1=HEAP[$terminal_addr]; //@line 988 "parsermodule.c"
        var $2=HEAP[$type_addr]; //@line 988 "parsermodule.c"
        var $3=_validate_ntype($1, $2); //@line 988 "parsermodule.c"
        var $4=((($3))|0)==0; //@line 988 "parsermodule.c"
        if ($4) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 988 "parsermodule.c"
      case 1: // $bb
        var $5=HEAP[$string_addr]; //@line 988 "parsermodule.c"
        var $6=($5)==0; //@line 988 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 988 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$terminal_addr]; //@line 988 "parsermodule.c"
        var $8=(($7+4)&4294967295); //@line 988 "parsermodule.c"
        var $9=HEAP[$8]; //@line 988 "parsermodule.c"
        var $10=HEAP[$string_addr]; //@line 988 "parsermodule.c"
        var $11=_strcmp($10, $9); //@line 988 "parsermodule.c"
        var $12=((($11))|0)==0; //@line 988 "parsermodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 988 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_62]=1; //@line 988 "parsermodule.c"
        __label__ = 5; break; //@line 988 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_62]=0; //@line 988 "parsermodule.c"
        __label__ = 5; break; //@line 988 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$iftmp_62]; //@line 988 "parsermodule.c"
        HEAP[$res]=$13; //@line 988 "parsermodule.c"
        var $14=HEAP[$res]; //@line 990 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 990 "parsermodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 990 "parsermodule.c"
      case 6: // $bb5
        var $16=_PyErr_Occurred(); //@line 990 "parsermodule.c"
        var $17=($16)==0; //@line 990 "parsermodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 990 "parsermodule.c"
      case 7: // $bb6
        var $18=HEAP[_parser_error]; //@line 991 "parsermodule.c"
        var $19=HEAP[$string_addr]; //@line 991 "parsermodule.c"
        var $20=_PyErr_Format($18, ((__str51)&4294967295), $19); //@line 991 "parsermodule.c"
        __label__ = 8; break; //@line 991 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$res]; //@line 994 "parsermodule.c"
        HEAP[$0]=$21; //@line 994 "parsermodule.c"
        var $22=HEAP[$0]; //@line 994 "parsermodule.c"
        HEAP[$retval]=$22; //@line 994 "parsermodule.c"
        __label__ = 9; break; //@line 994 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 994 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 994 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_repeating_list($tree, $ntype, $vfunc, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $ntype_addr=__stackBase__+4;
        var $vfunc_addr=__stackBase__+8;
        var $name_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $iftmp_65=__stackBase__+24;
        var $iftmp_64=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $res=__stackBase__+36;
        var $pos=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$ntype_addr]=$ntype;
        HEAP[$vfunc_addr]=$vfunc;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$tree_addr]; //@line 1004 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1004 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1004 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1004 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1006 "parsermodule.c"
        var $5=((($4))|0)==0; //@line 1006 "parsermodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1006 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 1006 "parsermodule.c"
        var $7=HEAP[$ntype_addr]; //@line 1006 "parsermodule.c"
        var $8=_validate_ntype($6, $7); //@line 1006 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 1006 "parsermodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1006 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 1006 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1006 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1006 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1006 "parsermodule.c"
        var $14=HEAP[$vfunc_addr]; //@line 1006 "parsermodule.c"
        var $15=FUNCTION_TABLE[$14]($13); //@line 1006 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 1006 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1006 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_64]=1; //@line 1006 "parsermodule.c"
        __label__ = 5; break; //@line 1006 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_64]=0; //@line 1006 "parsermodule.c"
        __label__ = 5; break; //@line 1006 "parsermodule.c"
      case 5: // $bb4
        var $17=HEAP[$iftmp_64]; //@line 1006 "parsermodule.c"
        HEAP[$res]=$17; //@line 1006 "parsermodule.c"
        var $18=HEAP[$res]; //@line 1008 "parsermodule.c"
        var $19=((($18))|0)!=0; //@line 1008 "parsermodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1008 "parsermodule.c"
      case 6: // $bb5
        var $20=_PyErr_Occurred(); //@line 1008 "parsermodule.c"
        var $21=($20)!=0; //@line 1008 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1008 "parsermodule.c"
      case 7: // $bb6
        var $22=HEAP[$tree_addr]; //@line 1009 "parsermodule.c"
        var $23=HEAP[$name_addr]; //@line 1009 "parsermodule.c"
        var $24=_validate_numnodes($22, 1, $23); //@line 1009 "parsermodule.c"
        __label__ = 20; break; //@line 1009 "parsermodule.c"
      case 8: // $bb7
        var $25=HEAP[$nch]; //@line 1011 "parsermodule.c"
        var $26=($25) & 1; //@line 1011 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 1011 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1011 "parsermodule.c"
      case 9: // $bb8
        var $28=HEAP[$tree_addr]; //@line 1012 "parsermodule.c"
        var $29=(($28+20)&4294967295); //@line 1012 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1012 "parsermodule.c"
        var $31=HEAP[$nch]; //@line 1012 "parsermodule.c"
        var $32=((($31) - 1)&4294967295); //@line 1012 "parsermodule.c"
        HEAP[$nch]=$32; //@line 1012 "parsermodule.c"
        var $33=HEAP[$nch]; //@line 1012 "parsermodule.c"
        var $34=(($30+24*$33)&4294967295); //@line 1012 "parsermodule.c"
        var $35=_validate_terminal($34, 12, ((__str52)&4294967295)); //@line 1012 "parsermodule.c"
        HEAP[$res]=$35; //@line 1012 "parsermodule.c"
        __label__ = 10; break; //@line 1012 "parsermodule.c"
      case 10: // $bb9
        var $36=HEAP[$res]; //@line 1013 "parsermodule.c"
        var $37=((($36))|0)!=0; //@line 1013 "parsermodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 1013 "parsermodule.c"
      case 11: // $bb10
        var $38=HEAP[$nch]; //@line 1013 "parsermodule.c"
        var $39=((($38))|0) > 1; //@line 1013 "parsermodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 20; break; } //@line 1013 "parsermodule.c"
      case 12: // $bb11
        HEAP[$pos]=1; //@line 1014 "parsermodule.c"
        __label__ = 18; break; //@line 1014 "parsermodule.c"
      case 13: // $bb12
        var $40=HEAP[$tree_addr]; //@line 1016 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 1016 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1016 "parsermodule.c"
        var $43=HEAP[$pos]; //@line 1016 "parsermodule.c"
        var $44=(($42+24*$43)&4294967295); //@line 1016 "parsermodule.c"
        var $45=_validate_terminal($44, 12, ((__str52)&4294967295)); //@line 1016 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 1016 "parsermodule.c"
        if ($46) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1016 "parsermodule.c"
      case 14: // $bb13
        var $47=HEAP[$tree_addr]; //@line 1016 "parsermodule.c"
        var $48=(($47+20)&4294967295); //@line 1016 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1016 "parsermodule.c"
        var $50=HEAP[$pos]; //@line 1016 "parsermodule.c"
        var $51=((($50) + 1)&4294967295); //@line 1016 "parsermodule.c"
        var $52=(($49+24*$51)&4294967295); //@line 1016 "parsermodule.c"
        var $53=HEAP[$vfunc_addr]; //@line 1016 "parsermodule.c"
        var $54=FUNCTION_TABLE[$53]($52); //@line 1016 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 1016 "parsermodule.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1016 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_65]=1; //@line 1016 "parsermodule.c"
        __label__ = 17; break; //@line 1016 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_65]=0; //@line 1016 "parsermodule.c"
        __label__ = 17; break; //@line 1016 "parsermodule.c"
      case 17: // $bb16
        var $56=HEAP[$iftmp_65]; //@line 1016 "parsermodule.c"
        HEAP[$res]=$56; //@line 1016 "parsermodule.c"
        var $57=HEAP[$pos]; //@line 1015 "parsermodule.c"
        var $58=((($57) + 2)&4294967295); //@line 1015 "parsermodule.c"
        HEAP[$pos]=$58; //@line 1015 "parsermodule.c"
        __label__ = 18; break; //@line 1015 "parsermodule.c"
      case 18: // $bb17
        var $59=HEAP[$res]; //@line 1015 "parsermodule.c"
        var $60=((($59))|0)==0; //@line 1015 "parsermodule.c"
        if ($60) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1015 "parsermodule.c"
      case 19: // $bb18
        var $61=HEAP[$pos]; //@line 1015 "parsermodule.c"
        var $62=HEAP[$nch]; //@line 1015 "parsermodule.c"
        var $63=((($61))|0) < ((($62))|0); //@line 1015 "parsermodule.c"
        if ($63) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 1015 "parsermodule.c"
      case 20: // $bb19
        var $64=HEAP[$res]; //@line 1020 "parsermodule.c"
        HEAP[$0]=$64; //@line 1020 "parsermodule.c"
        var $65=HEAP[$0]; //@line 1020 "parsermodule.c"
        HEAP[$retval]=$65; //@line 1020 "parsermodule.c"
        __label__ = 21; break; //@line 1020 "parsermodule.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 1020 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1020 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_class($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_69=__stackBase__+12;
        var $iftmp_68=__stackBase__+16;
        var $iftmp_67=__stackBase__+20;
        var $iftmp_66=__stackBase__+24;
        var $nch=__stackBase__+28;
        var $res=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1032 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1032 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1032 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1032 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1034 "parsermodule.c"
        var $5=_validate_ntype($4, 329); //@line 1034 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1034 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1034 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1034 "parsermodule.c"
        var $8=((($7))|0)==4; //@line 1034 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1034 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1034 "parsermodule.c"
        var $10=((($9))|0)==6; //@line 1034 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1034 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 1034 "parsermodule.c"
        var $12=((($11))|0)==7; //@line 1034 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1034 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_66]=1; //@line 1034 "parsermodule.c"
        __label__ = 6; break; //@line 1034 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_66]=0; //@line 1034 "parsermodule.c"
        __label__ = 6; break; //@line 1034 "parsermodule.c"
      case 6: // $bb5
        var $13=HEAP[$iftmp_66]; //@line 1034 "parsermodule.c"
        HEAP[$res]=$13; //@line 1034 "parsermodule.c"
        var $14=HEAP[$res]; //@line 1036 "parsermodule.c"
        var $15=((($14))|0)!=0; //@line 1036 "parsermodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1036 "parsermodule.c"
      case 7: // $bb6
        var $16=HEAP[$tree_addr]; //@line 1037 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 1037 "parsermodule.c"
        var $18=HEAP[$17]; //@line 1037 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 1037 "parsermodule.c"
        var $20=_validate_terminal($19, 1, ((__str53)&4294967295)); //@line 1037 "parsermodule.c"
        var $21=((($20))|0)==0; //@line 1037 "parsermodule.c"
        if ($21) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 1037 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$tree_addr]; //@line 1037 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 1037 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1037 "parsermodule.c"
        var $25=(($24+24)&4294967295); //@line 1037 "parsermodule.c"
        var $26=_validate_ntype($25, 1); //@line 1037 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 1037 "parsermodule.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 1037 "parsermodule.c"
      case 9: // $bb8
        var $28=HEAP[$tree_addr]; //@line 1037 "parsermodule.c"
        var $29=(($28+20)&4294967295); //@line 1037 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1037 "parsermodule.c"
        var $31=HEAP[$nch]; //@line 1037 "parsermodule.c"
        var $32=((($31) - 2)&4294967295); //@line 1037 "parsermodule.c"
        var $33=(($30+24*$32)&4294967295); //@line 1037 "parsermodule.c"
        var $34=_validate_terminal($33, 11, ((__str54)&4294967295)); //@line 1037 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 1037 "parsermodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1037 "parsermodule.c"
      case 10: // $bb9
        var $36=HEAP[$tree_addr]; //@line 1037 "parsermodule.c"
        var $37=(($36+20)&4294967295); //@line 1037 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1037 "parsermodule.c"
        var $39=HEAP[$nch]; //@line 1037 "parsermodule.c"
        var $40=((($39) - 1)&4294967295); //@line 1037 "parsermodule.c"
        var $41=(($38+24*$40)&4294967295); //@line 1037 "parsermodule.c"
        var $42=_validate_suite($41); //@line 1037 "parsermodule.c"
        var $43=((($42))|0)==0; //@line 1037 "parsermodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1037 "parsermodule.c"
      case 11: // $bb10
        HEAP[$iftmp_67]=1; //@line 1037 "parsermodule.c"
        __label__ = 13; break; //@line 1037 "parsermodule.c"
      case 12: // $bb11
        HEAP[$iftmp_67]=0; //@line 1037 "parsermodule.c"
        __label__ = 13; break; //@line 1037 "parsermodule.c"
      case 13: // $bb12
        var $44=HEAP[$iftmp_67]; //@line 1037 "parsermodule.c"
        HEAP[$res]=$44; //@line 1037 "parsermodule.c"
        __label__ = 15; break; //@line 1037 "parsermodule.c"
      case 14: // $bb13
        var $45=HEAP[$tree_addr]; //@line 1043 "parsermodule.c"
        var $46=_validate_numnodes($45, 4, ((__str53)&4294967295)); //@line 1043 "parsermodule.c"
        __label__ = 15; break; //@line 1043 "parsermodule.c"
      case 15: // $bb14
        var $47=HEAP[$res]; //@line 1046 "parsermodule.c"
        var $48=((($47))|0)!=0; //@line 1046 "parsermodule.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 29; break; } //@line 1046 "parsermodule.c"
      case 16: // $bb15
        var $49=HEAP[$nch]; //@line 1047 "parsermodule.c"
        var $50=((($49))|0)==7; //@line 1047 "parsermodule.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 1047 "parsermodule.c"
      case 17: // $bb16
        var $51=HEAP[$tree_addr]; //@line 1048 "parsermodule.c"
        var $52=(($51+20)&4294967295); //@line 1048 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1048 "parsermodule.c"
        var $54=(($53+48)&4294967295); //@line 1048 "parsermodule.c"
        var $55=_validate_terminal($54, 7, ((__str55)&4294967295)); //@line 1048 "parsermodule.c"
        var $56=((($55))|0)==0; //@line 1048 "parsermodule.c"
        if ($56) { __label__ = 21; break; } else { __label__ = 18; break; } //@line 1048 "parsermodule.c"
      case 18: // $bb17
        var $57=HEAP[$tree_addr]; //@line 1048 "parsermodule.c"
        var $58=(($57+20)&4294967295); //@line 1048 "parsermodule.c"
        var $59=HEAP[$58]; //@line 1048 "parsermodule.c"
        var $60=(($59+72)&4294967295); //@line 1048 "parsermodule.c"
        var $61=_validate_testlist($60); //@line 1048 "parsermodule.c"
        var $62=((($61))|0)==0; //@line 1048 "parsermodule.c"
        if ($62) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 1048 "parsermodule.c"
      case 19: // $bb18
        var $63=HEAP[$tree_addr]; //@line 1048 "parsermodule.c"
        var $64=(($63+20)&4294967295); //@line 1048 "parsermodule.c"
        var $65=HEAP[$64]; //@line 1048 "parsermodule.c"
        var $66=(($65+96)&4294967295); //@line 1048 "parsermodule.c"
        var $67=_validate_terminal($66, 8, ((__str56)&4294967295)); //@line 1048 "parsermodule.c"
        var $68=((($67))|0)==0; //@line 1048 "parsermodule.c"
        if ($68) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1048 "parsermodule.c"
      case 20: // $bb19
        HEAP[$iftmp_68]=1; //@line 1048 "parsermodule.c"
        __label__ = 22; break; //@line 1048 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_68]=0; //@line 1048 "parsermodule.c"
        __label__ = 22; break; //@line 1048 "parsermodule.c"
      case 22: // $bb21
        var $69=HEAP[$iftmp_68]; //@line 1048 "parsermodule.c"
        HEAP[$res]=$69; //@line 1048 "parsermodule.c"
        __label__ = 29; break; //@line 1048 "parsermodule.c"
      case 23: // $bb22
        var $70=HEAP[$nch]; //@line 1052 "parsermodule.c"
        var $71=((($70))|0)==6; //@line 1052 "parsermodule.c"
        if ($71) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1052 "parsermodule.c"
      case 24: // $bb23
        var $72=HEAP[$tree_addr]; //@line 1053 "parsermodule.c"
        var $73=(($72+20)&4294967295); //@line 1053 "parsermodule.c"
        var $74=HEAP[$73]; //@line 1053 "parsermodule.c"
        var $75=(($74+48)&4294967295); //@line 1053 "parsermodule.c"
        var $76=_validate_terminal($75, 7, ((__str55)&4294967295)); //@line 1053 "parsermodule.c"
        var $77=((($76))|0)==0; //@line 1053 "parsermodule.c"
        if ($77) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 1053 "parsermodule.c"
      case 25: // $bb24
        var $78=HEAP[$tree_addr]; //@line 1053 "parsermodule.c"
        var $79=(($78+20)&4294967295); //@line 1053 "parsermodule.c"
        var $80=HEAP[$79]; //@line 1053 "parsermodule.c"
        var $81=(($80+72)&4294967295); //@line 1053 "parsermodule.c"
        var $82=_validate_terminal($81, 8, ((__str56)&4294967295)); //@line 1053 "parsermodule.c"
        var $83=((($82))|0)==0; //@line 1053 "parsermodule.c"
        if ($83) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1053 "parsermodule.c"
      case 26: // $bb25
        HEAP[$iftmp_69]=1; //@line 1053 "parsermodule.c"
        __label__ = 28; break; //@line 1053 "parsermodule.c"
      case 27: // $bb26
        HEAP[$iftmp_69]=0; //@line 1053 "parsermodule.c"
        __label__ = 28; break; //@line 1053 "parsermodule.c"
      case 28: // $bb27
        var $84=HEAP[$iftmp_69]; //@line 1053 "parsermodule.c"
        HEAP[$res]=$84; //@line 1053 "parsermodule.c"
        __label__ = 29; break; //@line 1053 "parsermodule.c"
      case 29: // $bb28
        var $85=HEAP[$res]; //@line 1057 "parsermodule.c"
        HEAP[$0]=$85; //@line 1057 "parsermodule.c"
        var $86=HEAP[$0]; //@line 1057 "parsermodule.c"
        HEAP[$retval]=$86; //@line 1057 "parsermodule.c"
        __label__ = 30; break; //@line 1057 "parsermodule.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 1057 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 1057 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_if($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_73=__stackBase__+12;
        var $iftmp_71=__stackBase__+16;
        var $iftmp_70=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $j=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1067 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1067 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1067 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1067 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1073 "parsermodule.c"
        var $5=_validate_ntype($4, 293); //@line 1073 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1073 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 1073 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1073 "parsermodule.c"
        var $8=((($7))|0) <= 3; //@line 1073 "parsermodule.c"
        if ($8) { __label__ = 7; break; } else { __label__ = 2; break; } //@line 1073 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 1073 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 1073 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1073 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1073 "parsermodule.c"
        var $13=_validate_terminal($12, 1, ((__str57)&4294967295)); //@line 1073 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 1073 "parsermodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 1073 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$tree_addr]; //@line 1073 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1073 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1073 "parsermodule.c"
        var $18=(($17+24)&4294967295); //@line 1073 "parsermodule.c"
        var $19=_validate_test($18); //@line 1073 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1073 "parsermodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 1073 "parsermodule.c"
      case 4: // $bb3
        var $21=HEAP[$tree_addr]; //@line 1073 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1073 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1073 "parsermodule.c"
        var $24=(($23+48)&4294967295); //@line 1073 "parsermodule.c"
        var $25=_validate_terminal($24, 11, ((__str54)&4294967295)); //@line 1073 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 1073 "parsermodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1073 "parsermodule.c"
      case 5: // $bb4
        var $27=HEAP[$tree_addr]; //@line 1073 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 1073 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1073 "parsermodule.c"
        var $30=(($29+72)&4294967295); //@line 1073 "parsermodule.c"
        var $31=_validate_suite($30); //@line 1073 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 1073 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1073 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_70]=1; //@line 1073 "parsermodule.c"
        __label__ = 8; break; //@line 1073 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_70]=0; //@line 1073 "parsermodule.c"
        __label__ = 8; break; //@line 1073 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$iftmp_70]; //@line 1073 "parsermodule.c"
        HEAP[$res]=$33; //@line 1073 "parsermodule.c"
        var $34=HEAP[$res]; //@line 1075 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 1075 "parsermodule.c"
        if ($35) { __label__ = 16; break; } else { __label__ = 9; break; } //@line 1075 "parsermodule.c"
      case 9: // $bb8
        var $36=HEAP[$nch]; //@line 1075 "parsermodule.c"
        var $37=((($36))|0) % 4; //@line 1075 "parsermodule.c"
        var $38=((($37))|0)!=3; //@line 1075 "parsermodule.c"
        if ($38) { __label__ = 16; break; } else { __label__ = 10; break; } //@line 1075 "parsermodule.c"
      case 10: // $bb9
        var $39=HEAP[$tree_addr]; //@line 1077 "parsermodule.c"
        var $40=(($39+20)&4294967295); //@line 1077 "parsermodule.c"
        var $41=HEAP[$40]; //@line 1077 "parsermodule.c"
        var $42=HEAP[$nch]; //@line 1077 "parsermodule.c"
        var $43=((($42) - 3)&4294967295); //@line 1077 "parsermodule.c"
        var $44=(($41+24*$43)&4294967295); //@line 1077 "parsermodule.c"
        var $45=_validate_terminal($44, 1, ((__str58)&4294967295)); //@line 1077 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 1077 "parsermodule.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 1077 "parsermodule.c"
      case 11: // $bb10
        var $47=HEAP[$tree_addr]; //@line 1077 "parsermodule.c"
        var $48=(($47+20)&4294967295); //@line 1077 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1077 "parsermodule.c"
        var $50=HEAP[$nch]; //@line 1077 "parsermodule.c"
        var $51=((($50) - 2)&4294967295); //@line 1077 "parsermodule.c"
        var $52=(($49+24*$51)&4294967295); //@line 1077 "parsermodule.c"
        var $53=_validate_terminal($52, 11, ((__str54)&4294967295)); //@line 1077 "parsermodule.c"
        var $54=((($53))|0)==0; //@line 1077 "parsermodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1077 "parsermodule.c"
      case 12: // $bb11
        var $55=HEAP[$tree_addr]; //@line 1077 "parsermodule.c"
        var $56=(($55+20)&4294967295); //@line 1077 "parsermodule.c"
        var $57=HEAP[$56]; //@line 1077 "parsermodule.c"
        var $58=HEAP[$nch]; //@line 1077 "parsermodule.c"
        var $59=((($58) - 1)&4294967295); //@line 1077 "parsermodule.c"
        var $60=(($57+24*$59)&4294967295); //@line 1077 "parsermodule.c"
        var $61=_validate_suite($60); //@line 1077 "parsermodule.c"
        var $62=((($61))|0)==0; //@line 1077 "parsermodule.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1077 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_71]=1; //@line 1077 "parsermodule.c"
        __label__ = 15; break; //@line 1077 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_71]=0; //@line 1077 "parsermodule.c"
        __label__ = 15; break; //@line 1077 "parsermodule.c"
      case 15: // $bb14
        var $63=HEAP[$iftmp_71]; //@line 1077 "parsermodule.c"
        HEAP[$res]=$63; //@line 1077 "parsermodule.c"
        var $64=HEAP[$nch]; //@line 1080 "parsermodule.c"
        var $65=((($64) - 3)&4294967295); //@line 1080 "parsermodule.c"
        HEAP[$nch]=$65; //@line 1080 "parsermodule.c"
        __label__ = 19; break; //@line 1080 "parsermodule.c"
      case 16: // $bb15
        var $66=HEAP[$res]; //@line 1082 "parsermodule.c"
        var $67=((($66))|0)==0; //@line 1082 "parsermodule.c"
        if ($67) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1082 "parsermodule.c"
      case 17: // $bb16
        var $68=_PyErr_Occurred(); //@line 1082 "parsermodule.c"
        var $69=($68)==0; //@line 1082 "parsermodule.c"
        if ($69) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1082 "parsermodule.c"
      case 18: // $bb17
        var $70=HEAP[$tree_addr]; //@line 1083 "parsermodule.c"
        var $71=_validate_numnodes($70, 4, ((__str57)&4294967295)); //@line 1083 "parsermodule.c"
        __label__ = 19; break; //@line 1083 "parsermodule.c"
      case 19: // $bb18
        var $72=HEAP[$nch]; //@line 1084 "parsermodule.c"
        var $73=($72) & 3; //@line 1084 "parsermodule.c"
        var $74=((($73))|0)!=0; //@line 1084 "parsermodule.c"
        if ($74) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1084 "parsermodule.c"
      case 20: // $bb19
        var $75=HEAP[$tree_addr]; //@line 1086 "parsermodule.c"
        var $76=_validate_numnodes($75, 0, ((__str57)&4294967295)); //@line 1086 "parsermodule.c"
        HEAP[$res]=$76; //@line 1086 "parsermodule.c"
        __label__ = 33; break; //@line 1086 "parsermodule.c"
      case 21: // $bb20
        var $77=HEAP[$res]; //@line 1087 "parsermodule.c"
        var $78=((($77))|0)!=0; //@line 1087 "parsermodule.c"
        if ($78) { __label__ = 22; break; } else { __label__ = 33; break; } //@line 1087 "parsermodule.c"
      case 22: // $bb21
        var $79=HEAP[$nch]; //@line 1087 "parsermodule.c"
        var $80=((($79))|0) > 4; //@line 1087 "parsermodule.c"
        if ($80) { __label__ = 23; break; } else { __label__ = 33; break; } //@line 1087 "parsermodule.c"
      case 23: // $bb22
        HEAP[$j]=4; //@line 1089 "parsermodule.c"
        __label__ = 31; break; //@line 1089 "parsermodule.c"
      case 24: // $bb23
        var $81=HEAP[$tree_addr]; //@line 1091 "parsermodule.c"
        var $82=(($81+20)&4294967295); //@line 1091 "parsermodule.c"
        var $83=HEAP[$82]; //@line 1091 "parsermodule.c"
        var $84=HEAP[$j]; //@line 1091 "parsermodule.c"
        var $85=(($83+24*$84)&4294967295); //@line 1091 "parsermodule.c"
        var $86=_validate_terminal($85, 1, ((__str59)&4294967295)); //@line 1091 "parsermodule.c"
        var $87=((($86))|0)==0; //@line 1091 "parsermodule.c"
        if ($87) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 1091 "parsermodule.c"
      case 25: // $bb24
        var $88=HEAP[$tree_addr]; //@line 1091 "parsermodule.c"
        var $89=(($88+20)&4294967295); //@line 1091 "parsermodule.c"
        var $90=HEAP[$89]; //@line 1091 "parsermodule.c"
        var $91=HEAP[$j]; //@line 1091 "parsermodule.c"
        var $92=((($91) + 2)&4294967295); //@line 1091 "parsermodule.c"
        var $93=(($90+24*$92)&4294967295); //@line 1091 "parsermodule.c"
        var $94=_validate_terminal($93, 11, ((__str54)&4294967295)); //@line 1091 "parsermodule.c"
        var $95=((($94))|0)==0; //@line 1091 "parsermodule.c"
        if ($95) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 1091 "parsermodule.c"
      case 26: // $bb25
        var $96=HEAP[$tree_addr]; //@line 1091 "parsermodule.c"
        var $97=(($96+20)&4294967295); //@line 1091 "parsermodule.c"
        var $98=HEAP[$97]; //@line 1091 "parsermodule.c"
        var $99=HEAP[$j]; //@line 1091 "parsermodule.c"
        var $100=((($99) + 1)&4294967295); //@line 1091 "parsermodule.c"
        var $101=(($98+24*$100)&4294967295); //@line 1091 "parsermodule.c"
        var $102=_validate_test($101); //@line 1091 "parsermodule.c"
        var $103=((($102))|0)==0; //@line 1091 "parsermodule.c"
        if ($103) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 1091 "parsermodule.c"
      case 27: // $bb26
        var $104=HEAP[$tree_addr]; //@line 1091 "parsermodule.c"
        var $105=(($104+20)&4294967295); //@line 1091 "parsermodule.c"
        var $106=HEAP[$105]; //@line 1091 "parsermodule.c"
        var $107=HEAP[$j]; //@line 1091 "parsermodule.c"
        var $108=((($107) + 3)&4294967295); //@line 1091 "parsermodule.c"
        var $109=(($106+24*$108)&4294967295); //@line 1091 "parsermodule.c"
        var $110=_validate_suite($109); //@line 1091 "parsermodule.c"
        var $111=((($110))|0)==0; //@line 1091 "parsermodule.c"
        if ($111) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1091 "parsermodule.c"
      case 28: // $bb27
        HEAP[$iftmp_73]=1; //@line 1091 "parsermodule.c"
        __label__ = 30; break; //@line 1091 "parsermodule.c"
      case 29: // $bb28
        HEAP[$iftmp_73]=0; //@line 1091 "parsermodule.c"
        __label__ = 30; break; //@line 1091 "parsermodule.c"
      case 30: // $bb29
        var $112=HEAP[$iftmp_73]; //@line 1091 "parsermodule.c"
        HEAP[$res]=$112; //@line 1091 "parsermodule.c"
        var $113=HEAP[$j]; //@line 1095 "parsermodule.c"
        var $114=((($113) + 4)&4294967295); //@line 1095 "parsermodule.c"
        HEAP[$j]=$114; //@line 1095 "parsermodule.c"
        __label__ = 31; break; //@line 1095 "parsermodule.c"
      case 31: // $bb30
        var $115=HEAP[$j]; //@line 1090 "parsermodule.c"
        var $116=HEAP[$nch]; //@line 1090 "parsermodule.c"
        var $117=((($115))|0) >= ((($116))|0); //@line 1090 "parsermodule.c"
        if ($117) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 1090 "parsermodule.c"
      case 32: // $bb31
        var $118=HEAP[$res]; //@line 1090 "parsermodule.c"
        var $119=((($118))|0)!=0; //@line 1090 "parsermodule.c"
        if ($119) { __label__ = 24; break; } else { __label__ = 33; break; } //@line 1090 "parsermodule.c"
      case 33: // $bb32
        var $120=HEAP[$res]; //@line 1098 "parsermodule.c"
        HEAP[$0]=$120; //@line 1098 "parsermodule.c"
        var $121=HEAP[$0]; //@line 1098 "parsermodule.c"
        HEAP[$retval]=$121; //@line 1098 "parsermodule.c"
        __label__ = 34; break; //@line 1098 "parsermodule.c"
      case 34: // $return
        var $retval33=HEAP[$retval]; //@line 1098 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 1098 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_parameters($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_75=__stackBase__+12;
        var $iftmp_74=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1109 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1109 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1109 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1109 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1110 "parsermodule.c"
        var $5=_validate_ntype($4, 263); //@line 1110 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1110 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1110 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1110 "parsermodule.c"
        var $8=((($7))|0)==2; //@line 1110 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1110 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1110 "parsermodule.c"
        var $10=((($9))|0)==3; //@line 1110 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1110 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_74]=1; //@line 1110 "parsermodule.c"
        __label__ = 5; break; //@line 1110 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_74]=0; //@line 1110 "parsermodule.c"
        __label__ = 5; break; //@line 1110 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$iftmp_74]; //@line 1110 "parsermodule.c"
        HEAP[$res]=$11; //@line 1110 "parsermodule.c"
        var $12=HEAP[$res]; //@line 1112 "parsermodule.c"
        var $13=((($12))|0)!=0; //@line 1112 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 1112 "parsermodule.c"
      case 6: // $bb5
        var $14=HEAP[$tree_addr]; //@line 1113 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 1113 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1113 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 1113 "parsermodule.c"
        var $18=_validate_terminal($17, 7, ((__str55)&4294967295)); //@line 1113 "parsermodule.c"
        var $19=((($18))|0)==0; //@line 1113 "parsermodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1113 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$tree_addr]; //@line 1113 "parsermodule.c"
        var $21=(($20+20)&4294967295); //@line 1113 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1113 "parsermodule.c"
        var $23=HEAP[$nch]; //@line 1113 "parsermodule.c"
        var $24=((($23) - 1)&4294967295); //@line 1113 "parsermodule.c"
        var $25=(($22+24*$24)&4294967295); //@line 1113 "parsermodule.c"
        var $26=_validate_terminal($25, 8, ((__str56)&4294967295)); //@line 1113 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 1113 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1113 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_75]=1; //@line 1113 "parsermodule.c"
        __label__ = 10; break; //@line 1113 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_75]=0; //@line 1113 "parsermodule.c"
        __label__ = 10; break; //@line 1113 "parsermodule.c"
      case 10: // $bb9
        var $28=HEAP[$iftmp_75]; //@line 1113 "parsermodule.c"
        HEAP[$res]=$28; //@line 1113 "parsermodule.c"
        var $29=HEAP[$res]; //@line 1115 "parsermodule.c"
        var $30=((($29))|0)!=0; //@line 1115 "parsermodule.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 1115 "parsermodule.c"
      case 11: // $bb10
        var $31=HEAP[$nch]; //@line 1115 "parsermodule.c"
        var $32=((($31))|0)==3; //@line 1115 "parsermodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1115 "parsermodule.c"
      case 12: // $bb11
        var $33=HEAP[$tree_addr]; //@line 1116 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 1116 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1116 "parsermodule.c"
        var $36=(($35+24)&4294967295); //@line 1116 "parsermodule.c"
        var $37=_validate_varargslist($36); //@line 1116 "parsermodule.c"
        HEAP[$res]=$37; //@line 1116 "parsermodule.c"
        __label__ = 13; break; //@line 1116 "parsermodule.c"
      case 13: // $bb12
        __label__ = 15; break; //@line 1116 "parsermodule.c"
      case 14: // $bb13
        var $38=HEAP[$tree_addr]; //@line 1119 "parsermodule.c"
        var $39=_validate_numnodes($38, 2, ((__str60)&4294967295)); //@line 1119 "parsermodule.c"
        __label__ = 15; break; //@line 1119 "parsermodule.c"
      case 15: // $bb14
        var $40=HEAP[$res]; //@line 1121 "parsermodule.c"
        HEAP[$0]=$40; //@line 1121 "parsermodule.c"
        var $41=HEAP[$0]; //@line 1121 "parsermodule.c"
        HEAP[$retval]=$41; //@line 1121 "parsermodule.c"
        __label__ = 16; break; //@line 1121 "parsermodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 1121 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1121 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_suite($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_77=__stackBase__+12;
        var $iftmp_76=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $i=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1134 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1134 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1134 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1134 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1135 "parsermodule.c"
        var $5=_validate_ntype($4, 300); //@line 1135 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1135 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1135 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1135 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 1135 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1135 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1135 "parsermodule.c"
        var $10=((($9))|0) > 3; //@line 1135 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1135 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_76]=1; //@line 1135 "parsermodule.c"
        __label__ = 5; break; //@line 1135 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_76]=0; //@line 1135 "parsermodule.c"
        __label__ = 5; break; //@line 1135 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$iftmp_76]; //@line 1135 "parsermodule.c"
        HEAP[$res]=$11; //@line 1135 "parsermodule.c"
        var $12=HEAP[$res]; //@line 1137 "parsermodule.c"
        var $13=((($12))|0)==0; //@line 1137 "parsermodule.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1137 "parsermodule.c"
      case 6: // $bb5
        var $14=HEAP[$nch]; //@line 1137 "parsermodule.c"
        var $15=((($14))|0)!=1; //@line 1137 "parsermodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1137 "parsermodule.c"
      case 7: // $bb6
        var $16=HEAP[$tree_addr]; //@line 1138 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 1138 "parsermodule.c"
        var $18=HEAP[$17]; //@line 1138 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 1138 "parsermodule.c"
        var $20=_validate_simple_stmt($19); //@line 1138 "parsermodule.c"
        HEAP[$res]=$20; //@line 1138 "parsermodule.c"
        __label__ = 24; break; //@line 1138 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$res]; //@line 1139 "parsermodule.c"
        var $22=((($21))|0)!=0; //@line 1139 "parsermodule.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 24; break; } //@line 1139 "parsermodule.c"
      case 9: // $bb8
        var $23=HEAP[$tree_addr]; //@line 1141 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 1141 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1141 "parsermodule.c"
        var $26=(($25)&4294967295); //@line 1141 "parsermodule.c"
        var $27=_validate_terminal($26, 4, 0); //@line 1141 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1141 "parsermodule.c"
        if ($28) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 1141 "parsermodule.c"
      case 10: // $bb9
        var $29=HEAP[$tree_addr]; //@line 1141 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1141 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1141 "parsermodule.c"
        var $32=(($31+24)&4294967295); //@line 1141 "parsermodule.c"
        var $33=_validate_terminal($32, 5, 0); //@line 1141 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 1141 "parsermodule.c"
        if ($34) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 1141 "parsermodule.c"
      case 11: // $bb10
        var $35=HEAP[$tree_addr]; //@line 1141 "parsermodule.c"
        var $36=(($35+20)&4294967295); //@line 1141 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1141 "parsermodule.c"
        var $38=(($37+48)&4294967295); //@line 1141 "parsermodule.c"
        var $39=_validate_stmt($38); //@line 1141 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 1141 "parsermodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1141 "parsermodule.c"
      case 12: // $bb11
        var $41=HEAP[$tree_addr]; //@line 1141 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 1141 "parsermodule.c"
        var $43=HEAP[$42]; //@line 1141 "parsermodule.c"
        var $44=HEAP[$nch]; //@line 1141 "parsermodule.c"
        var $45=((($44) - 1)&4294967295); //@line 1141 "parsermodule.c"
        var $46=(($43+24*$45)&4294967295); //@line 1141 "parsermodule.c"
        var $47=_validate_terminal($46, 6, ((__str61)&4294967295)); //@line 1141 "parsermodule.c"
        var $48=((($47))|0)==0; //@line 1141 "parsermodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1141 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_77]=1; //@line 1141 "parsermodule.c"
        __label__ = 15; break; //@line 1141 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_77]=0; //@line 1141 "parsermodule.c"
        __label__ = 15; break; //@line 1141 "parsermodule.c"
      case 15: // $bb14
        var $49=HEAP[$iftmp_77]; //@line 1141 "parsermodule.c"
        HEAP[$res]=$49; //@line 1141 "parsermodule.c"
        var $50=HEAP[$res]; //@line 1146 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 1146 "parsermodule.c"
        if ($51) { __label__ = 22; break; } else { __label__ = 16; break; } //@line 1146 "parsermodule.c"
      case 16: // $bb15
        var $52=HEAP[$nch]; //@line 1146 "parsermodule.c"
        var $53=((($52))|0) <= 4; //@line 1146 "parsermodule.c"
        if ($53) { __label__ = 22; break; } else { __label__ = 17; break; } //@line 1146 "parsermodule.c"
      case 17: // $bb16
        HEAP[$i]=3; //@line 1147 "parsermodule.c"
        var $54=HEAP[$nch]; //@line 1148 "parsermodule.c"
        var $55=((($54) - 1)&4294967295); //@line 1148 "parsermodule.c"
        HEAP[$nch]=$55; //@line 1148 "parsermodule.c"
        __label__ = 19; break; //@line 1148 "parsermodule.c"
      case 18: // $bb17
        var $56=HEAP[$tree_addr]; //@line 1150 "parsermodule.c"
        var $57=(($56+20)&4294967295); //@line 1150 "parsermodule.c"
        var $58=HEAP[$57]; //@line 1150 "parsermodule.c"
        var $59=HEAP[$i]; //@line 1150 "parsermodule.c"
        var $60=(($58+24*$59)&4294967295); //@line 1150 "parsermodule.c"
        var $61=_validate_stmt($60); //@line 1150 "parsermodule.c"
        HEAP[$res]=$61; //@line 1150 "parsermodule.c"
        var $62=HEAP[$i]; //@line 1149 "parsermodule.c"
        var $63=((($62) + 1)&4294967295); //@line 1149 "parsermodule.c"
        HEAP[$i]=$63; //@line 1149 "parsermodule.c"
        __label__ = 19; break; //@line 1149 "parsermodule.c"
      case 19: // $bb18
        var $64=HEAP[$res]; //@line 1149 "parsermodule.c"
        var $65=((($64))|0)==0; //@line 1149 "parsermodule.c"
        if ($65) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1149 "parsermodule.c"
      case 20: // $bb19
        var $66=HEAP[$i]; //@line 1149 "parsermodule.c"
        var $67=HEAP[$nch]; //@line 1149 "parsermodule.c"
        var $68=((($66))|0) < ((($67))|0); //@line 1149 "parsermodule.c"
        if ($68) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 1149 "parsermodule.c"
      case 21: // $bb20
        __label__ = 24; break; //@line 1149 "parsermodule.c"
      case 22: // $bb21
        var $69=HEAP[$nch]; //@line 1152 "parsermodule.c"
        var $70=((($69))|0) <= 3; //@line 1152 "parsermodule.c"
        if ($70) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1152 "parsermodule.c"
      case 23: // $bb22
        var $71=HEAP[$tree_addr]; //@line 1153 "parsermodule.c"
        var $72=_validate_numnodes($71, 4, ((__str62)&4294967295)); //@line 1153 "parsermodule.c"
        HEAP[$res]=$72; //@line 1153 "parsermodule.c"
        __label__ = 24; break; //@line 1153 "parsermodule.c"
      case 24: // $bb23
        var $73=HEAP[$res]; //@line 1155 "parsermodule.c"
        HEAP[$0]=$73; //@line 1155 "parsermodule.c"
        var $74=HEAP[$0]; //@line 1155 "parsermodule.c"
        HEAP[$retval]=$74; //@line 1155 "parsermodule.c"
        __label__ = 25; break; //@line 1155 "parsermodule.c"
      case 25: // $return
        var $retval24=HEAP[$retval]; //@line 1155 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 1155 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1162 "parsermodule.c"
        var $2=_validate_repeating_list($1, 327, (FUNCTION_TABLE_OFFSET + 10), ((__str63)&4294967295)); //@line 1162 "parsermodule.c"
        HEAP[$0]=$2; //@line 1162 "parsermodule.c"
        var $3=HEAP[$0]; //@line 1162 "parsermodule.c"
        HEAP[$retval]=$3; //@line 1162 "parsermodule.c"
        __label__ = 1; break; //@line 1162 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1162 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1162 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist1($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1170 "parsermodule.c"
        var $2=_validate_repeating_list($1, 338, (FUNCTION_TABLE_OFFSET + 10), ((__str64)&4294967295)); //@line 1170 "parsermodule.c"
        HEAP[$0]=$2; //@line 1170 "parsermodule.c"
        var $3=HEAP[$0]; //@line 1170 "parsermodule.c"
        HEAP[$retval]=$3; //@line 1170 "parsermodule.c"
        __label__ = 1; break; //@line 1170 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1170 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1170 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist_safe($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1178 "parsermodule.c"
        var $2=_validate_repeating_list($1, 301, (FUNCTION_TABLE_OFFSET + 12), ((__str65)&4294967295)); //@line 1178 "parsermodule.c"
        HEAP[$0]=$2; //@line 1178 "parsermodule.c"
        var $3=HEAP[$0]; //@line 1178 "parsermodule.c"
        HEAP[$retval]=$3; //@line 1178 "parsermodule.c"
        __label__ = 1; break; //@line 1178 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1178 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1178 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_varargslist_trailer($tree, $start) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $start_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_78=__stackBase__+12;
        var $0=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $sym=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$start_addr]=$start;
        var $1=HEAP[$tree_addr]; //@line 1188 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1188 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1188 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1188 "parsermodule.c"
        HEAP[$res]=0; //@line 1189 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1192 "parsermodule.c"
        var $5=HEAP[$start_addr]; //@line 1192 "parsermodule.c"
        var $6=((($4))|0) <= ((($5))|0); //@line 1192 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1192 "parsermodule.c"
      case 1: // $bb
        _err_string(((__str66)&4294967295)); //@line 1193 "parsermodule.c"
        HEAP[$0]=0; //@line 1194 "parsermodule.c"
        __label__ = 20; break; //@line 1194 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 1196 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 1196 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1196 "parsermodule.c"
        var $10=HEAP[$start_addr]; //@line 1196 "parsermodule.c"
        var $11=(($9+24*$10)&4294967295); //@line 1196 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1196 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1196 "parsermodule.c"
        var $14=reSign(($13), 16, 0); //@line 1196 "parsermodule.c"
        HEAP[$sym]=$14; //@line 1196 "parsermodule.c"
        var $15=HEAP[$sym]; //@line 1197 "parsermodule.c"
        var $16=((($15))|0)==16; //@line 1197 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 1197 "parsermodule.c"
      case 3: // $bb2
        var $17=HEAP[$nch]; //@line 1201 "parsermodule.c"
        var $18=HEAP[$start_addr]; //@line 1201 "parsermodule.c"
        var $19=((($17) - ($18))&4294967295); //@line 1201 "parsermodule.c"
        var $20=((($19))|0)==2; //@line 1201 "parsermodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1201 "parsermodule.c"
      case 4: // $bb3
        var $21=HEAP[$tree_addr]; //@line 1202 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1202 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1202 "parsermodule.c"
        var $24=HEAP[$start_addr]; //@line 1202 "parsermodule.c"
        var $25=((($24) + 1)&4294967295); //@line 1202 "parsermodule.c"
        var $26=(($23+24*$25)&4294967295); //@line 1202 "parsermodule.c"
        var $27=_validate_terminal($26, 1, 0); //@line 1202 "parsermodule.c"
        HEAP[$res]=$27; //@line 1202 "parsermodule.c"
        __label__ = 13; break; //@line 1202 "parsermodule.c"
      case 5: // $bb4
        var $28=HEAP[$nch]; //@line 1203 "parsermodule.c"
        var $29=HEAP[$start_addr]; //@line 1203 "parsermodule.c"
        var $30=((($28) - ($29))&4294967295); //@line 1203 "parsermodule.c"
        var $31=((($30))|0)==5; //@line 1203 "parsermodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1203 "parsermodule.c"
      case 6: // $bb5
        var $32=HEAP[$tree_addr]; //@line 1204 "parsermodule.c"
        var $33=(($32+20)&4294967295); //@line 1204 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1204 "parsermodule.c"
        var $35=HEAP[$start_addr]; //@line 1204 "parsermodule.c"
        var $36=((($35) + 1)&4294967295); //@line 1204 "parsermodule.c"
        var $37=(($34+24*$36)&4294967295); //@line 1204 "parsermodule.c"
        var $38=_validate_terminal($37, 1, 0); //@line 1204 "parsermodule.c"
        var $39=((($38))|0)==0; //@line 1204 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 1204 "parsermodule.c"
      case 7: // $bb6
        var $40=HEAP[$tree_addr]; //@line 1204 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 1204 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1204 "parsermodule.c"
        var $43=HEAP[$start_addr]; //@line 1204 "parsermodule.c"
        var $44=((($43) + 2)&4294967295); //@line 1204 "parsermodule.c"
        var $45=(($42+24*$44)&4294967295); //@line 1204 "parsermodule.c"
        var $46=_validate_terminal($45, 12, ((__str52)&4294967295)); //@line 1204 "parsermodule.c"
        var $47=((($46))|0)==0; //@line 1204 "parsermodule.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1204 "parsermodule.c"
      case 8: // $bb7
        var $48=HEAP[$tree_addr]; //@line 1204 "parsermodule.c"
        var $49=(($48+20)&4294967295); //@line 1204 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1204 "parsermodule.c"
        var $51=HEAP[$start_addr]; //@line 1204 "parsermodule.c"
        var $52=((($51) + 3)&4294967295); //@line 1204 "parsermodule.c"
        var $53=(($50+24*$52)&4294967295); //@line 1204 "parsermodule.c"
        var $54=_validate_terminal($53, 36, ((__str67)&4294967295)); //@line 1204 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 1204 "parsermodule.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 1204 "parsermodule.c"
      case 9: // $bb8
        var $56=HEAP[$tree_addr]; //@line 1204 "parsermodule.c"
        var $57=(($56+20)&4294967295); //@line 1204 "parsermodule.c"
        var $58=HEAP[$57]; //@line 1204 "parsermodule.c"
        var $59=HEAP[$start_addr]; //@line 1204 "parsermodule.c"
        var $60=((($59) + 4)&4294967295); //@line 1204 "parsermodule.c"
        var $61=(($58+24*$60)&4294967295); //@line 1204 "parsermodule.c"
        var $62=_validate_terminal($61, 1, 0); //@line 1204 "parsermodule.c"
        var $63=((($62))|0)==0; //@line 1204 "parsermodule.c"
        if ($63) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1204 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_78]=1; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 11: // $bb10
        HEAP[$iftmp_78]=0; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 12: // $bb11
        var $64=HEAP[$iftmp_78]; //@line 1204 "parsermodule.c"
        HEAP[$res]=$64; //@line 1204 "parsermodule.c"
        __label__ = 13; break; //@line 1204 "parsermodule.c"
      case 13: // $bb12
        __label__ = 17; break; //@line 1204 "parsermodule.c"
      case 14: // $bb13
        var $65=HEAP[$sym]; //@line 1209 "parsermodule.c"
        var $66=((($65))|0)==36; //@line 1209 "parsermodule.c"
        if ($66) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1209 "parsermodule.c"
      case 15: // $bb14
        var $67=HEAP[$nch]; //@line 1213 "parsermodule.c"
        var $68=HEAP[$start_addr]; //@line 1213 "parsermodule.c"
        var $69=((($67) - ($68))&4294967295); //@line 1213 "parsermodule.c"
        var $70=((($69))|0)==2; //@line 1213 "parsermodule.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1213 "parsermodule.c"
      case 16: // $bb15
        var $71=HEAP[$tree_addr]; //@line 1214 "parsermodule.c"
        var $72=(($71+20)&4294967295); //@line 1214 "parsermodule.c"
        var $73=HEAP[$72]; //@line 1214 "parsermodule.c"
        var $74=HEAP[$start_addr]; //@line 1214 "parsermodule.c"
        var $75=((($74) + 1)&4294967295); //@line 1214 "parsermodule.c"
        var $76=(($73+24*$75)&4294967295); //@line 1214 "parsermodule.c"
        var $77=_validate_terminal($76, 1, 0); //@line 1214 "parsermodule.c"
        HEAP[$res]=$77; //@line 1214 "parsermodule.c"
        __label__ = 17; break; //@line 1214 "parsermodule.c"
      case 17: // $bb16
        var $78=HEAP[$res]; //@line 1216 "parsermodule.c"
        var $79=((($78))|0)==0; //@line 1216 "parsermodule.c"
        if ($79) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1216 "parsermodule.c"
      case 18: // $bb17
        _err_string(((__str68)&4294967295)); //@line 1217 "parsermodule.c"
        __label__ = 19; break; //@line 1217 "parsermodule.c"
      case 19: // $bb18
        var $80=HEAP[$res]; //@line 1218 "parsermodule.c"
        HEAP[$0]=$80; //@line 1218 "parsermodule.c"
        __label__ = 20; break; //@line 1218 "parsermodule.c"
      case 20: // $bb19
        var $81=HEAP[$0]; //@line 1194 "parsermodule.c"
        HEAP[$retval]=$81; //@line 1194 "parsermodule.c"
        __label__ = 21; break; //@line 1194 "parsermodule.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 1194 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1194 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_varargslist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_83=__stackBase__+8;
        var $iftmp_82=__stackBase__+12;
        var $iftmp_81=__stackBase__+16;
        var $iftmp_80=__stackBase__+20;
        var $0=__stackBase__+24;
        var $iftmp_79=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $res=__stackBase__+36;
        var $sym=__stackBase__+40;
        var $i=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1234 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1234 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1234 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1234 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1235 "parsermodule.c"
        var $5=_validate_ntype($4, 264); //@line 1235 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1235 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1235 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1235 "parsermodule.c"
        var $8=((($7))|0)==0; //@line 1235 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1235 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_79]=1; //@line 1235 "parsermodule.c"
        __label__ = 4; break; //@line 1235 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_79]=0; //@line 1235 "parsermodule.c"
        __label__ = 4; break; //@line 1235 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$iftmp_79]; //@line 1235 "parsermodule.c"
        HEAP[$res]=$9; //@line 1235 "parsermodule.c"
        var $10=HEAP[$res]; //@line 1238 "parsermodule.c"
        var $11=((($10))|0)==0; //@line 1238 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1238 "parsermodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1239 "parsermodule.c"
        __label__ = 65; break; //@line 1239 "parsermodule.c"
      case 6: // $bb5
        var $12=HEAP[$nch]; //@line 1240 "parsermodule.c"
        var $13=((($12))|0) <= 0; //@line 1240 "parsermodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1240 "parsermodule.c"
      case 7: // $bb6
        _err_string(((__str69)&4294967295)); //@line 1241 "parsermodule.c"
        HEAP[$0]=0; //@line 1242 "parsermodule.c"
        __label__ = 65; break; //@line 1242 "parsermodule.c"
      case 8: // $bb7
        var $14=HEAP[$tree_addr]; //@line 1244 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 1244 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1244 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 1244 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 1244 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1244 "parsermodule.c"
        var $20=reSign(($19), 16, 0); //@line 1244 "parsermodule.c"
        HEAP[$sym]=$20; //@line 1244 "parsermodule.c"
        var $21=HEAP[$sym]; //@line 1245 "parsermodule.c"
        var $22=((($21))|0)==16; //@line 1245 "parsermodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1245 "parsermodule.c"
      case 9: // $bb8
        var $23=HEAP[$sym]; //@line 1245 "parsermodule.c"
        var $24=((($23))|0)==36; //@line 1245 "parsermodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1245 "parsermodule.c"
      case 10: // $bb9
        var $25=HEAP[$tree_addr]; //@line 1249 "parsermodule.c"
        var $26=_validate_varargslist_trailer($25, 0); //@line 1249 "parsermodule.c"
        HEAP[$res]=$26; //@line 1249 "parsermodule.c"
        __label__ = 64; break; //@line 1249 "parsermodule.c"
      case 11: // $bb10
        var $27=HEAP[$sym]; //@line 1250 "parsermodule.c"
        var $28=((($27))|0)==265; //@line 1250 "parsermodule.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 64; break; } //@line 1250 "parsermodule.c"
      case 12: // $bb11
        HEAP[$i]=0; //@line 1251 "parsermodule.c"
        var $29=HEAP[$tree_addr]; //@line 1253 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1253 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1253 "parsermodule.c"
        var $32=HEAP[$nch]; //@line 1253 "parsermodule.c"
        var $33=((($32) - 1)&4294967295); //@line 1253 "parsermodule.c"
        var $34=(($31+24*$33)&4294967295); //@line 1253 "parsermodule.c"
        var $35=(($34)&4294967295); //@line 1253 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1253 "parsermodule.c"
        var $37=reSign(($36), 16, 0); //@line 1253 "parsermodule.c"
        HEAP[$sym]=$37; //@line 1253 "parsermodule.c"
        var $38=HEAP[$sym]; //@line 1254 "parsermodule.c"
        var $39=((($38))|0)==1; //@line 1254 "parsermodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 34; break; } //@line 1254 "parsermodule.c"
      case 13: // $bb12
        __label__ = 29; break; //@line 1254 "parsermodule.c"
      case 14: // $bb13
        var $40=HEAP[$tree_addr]; //@line 1262 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 1262 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1262 "parsermodule.c"
        var $43=HEAP[$i]; //@line 1262 "parsermodule.c"
        var $44=(($42+24*$43)&4294967295); //@line 1262 "parsermodule.c"
        var $45=_validate_fpdef($44); //@line 1262 "parsermodule.c"
        HEAP[$res]=$45; //@line 1262 "parsermodule.c"
        var $46=HEAP[$i]; //@line 1263 "parsermodule.c"
        var $47=((($46) + 1)&4294967295); //@line 1263 "parsermodule.c"
        HEAP[$i]=$47; //@line 1263 "parsermodule.c"
        var $48=HEAP[$res]; //@line 1264 "parsermodule.c"
        var $49=((($48))|0)!=0; //@line 1264 "parsermodule.c"
        if ($49) { __label__ = 15; break; } else { __label__ = 23; break; } //@line 1264 "parsermodule.c"
      case 15: // $bb14
        var $50=HEAP[$tree_addr]; //@line 1264 "parsermodule.c"
        var $51=(($50+20)&4294967295); //@line 1264 "parsermodule.c"
        var $52=HEAP[$51]; //@line 1264 "parsermodule.c"
        var $53=HEAP[$i]; //@line 1264 "parsermodule.c"
        var $54=(($52+24*$53)&4294967295); //@line 1264 "parsermodule.c"
        var $55=(($54)&4294967295); //@line 1264 "parsermodule.c"
        var $56=HEAP[$55]; //@line 1264 "parsermodule.c"
        var $57=reSign(($56), 16, 0)==22; //@line 1264 "parsermodule.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 1264 "parsermodule.c"
      case 16: // $bb15
        var $58=HEAP[$i]; //@line 1264 "parsermodule.c"
        var $59=((($58) + 2)&4294967295); //@line 1264 "parsermodule.c"
        var $60=HEAP[$nch]; //@line 1264 "parsermodule.c"
        var $61=((($59))|0) <= ((($60))|0); //@line 1264 "parsermodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 1264 "parsermodule.c"
      case 17: // $bb16
        var $62=HEAP[$tree_addr]; //@line 1265 "parsermodule.c"
        var $63=(($62+20)&4294967295); //@line 1265 "parsermodule.c"
        var $64=HEAP[$63]; //@line 1265 "parsermodule.c"
        var $65=HEAP[$i]; //@line 1265 "parsermodule.c"
        var $66=(($64+24*$65)&4294967295); //@line 1265 "parsermodule.c"
        var $67=_validate_terminal($66, 22, ((__str70)&4294967295)); //@line 1265 "parsermodule.c"
        var $68=((($67))|0)==0; //@line 1265 "parsermodule.c"
        if ($68) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 1265 "parsermodule.c"
      case 18: // $bb17
        var $69=HEAP[$tree_addr]; //@line 1265 "parsermodule.c"
        var $70=(($69+20)&4294967295); //@line 1265 "parsermodule.c"
        var $71=HEAP[$70]; //@line 1265 "parsermodule.c"
        var $72=HEAP[$i]; //@line 1265 "parsermodule.c"
        var $73=((($72) + 1)&4294967295); //@line 1265 "parsermodule.c"
        var $74=(($71+24*$73)&4294967295); //@line 1265 "parsermodule.c"
        var $75=_validate_test($74); //@line 1265 "parsermodule.c"
        var $76=((($75))|0)==0; //@line 1265 "parsermodule.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1265 "parsermodule.c"
      case 19: // $bb18
        HEAP[$iftmp_80]=1; //@line 1265 "parsermodule.c"
        __label__ = 21; break; //@line 1265 "parsermodule.c"
      case 20: // $bb19
        HEAP[$iftmp_80]=0; //@line 1265 "parsermodule.c"
        __label__ = 21; break; //@line 1265 "parsermodule.c"
      case 21: // $bb20
        var $77=HEAP[$iftmp_80]; //@line 1265 "parsermodule.c"
        HEAP[$res]=$77; //@line 1265 "parsermodule.c"
        var $78=HEAP[$res]; //@line 1267 "parsermodule.c"
        var $79=((($78))|0)!=0; //@line 1267 "parsermodule.c"
        if ($79) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1267 "parsermodule.c"
      case 22: // $bb21
        var $80=HEAP[$i]; //@line 1268 "parsermodule.c"
        var $81=((($80) + 2)&4294967295); //@line 1268 "parsermodule.c"
        HEAP[$i]=$81; //@line 1268 "parsermodule.c"
        __label__ = 23; break; //@line 1268 "parsermodule.c"
      case 23: // $bb22
        var $82=HEAP[$res]; //@line 1270 "parsermodule.c"
        var $83=((($82))|0)!=0; //@line 1270 "parsermodule.c"
        if ($83) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1270 "parsermodule.c"
      case 24: // $bb23
        var $84=HEAP[$i]; //@line 1270 "parsermodule.c"
        var $85=HEAP[$nch]; //@line 1270 "parsermodule.c"
        var $86=((($84))|0) < ((($85))|0); //@line 1270 "parsermodule.c"
        if ($86) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 1270 "parsermodule.c"
      case 25: // $bb24
        var $87=HEAP[$tree_addr]; //@line 1271 "parsermodule.c"
        var $88=(($87+20)&4294967295); //@line 1271 "parsermodule.c"
        var $89=HEAP[$88]; //@line 1271 "parsermodule.c"
        var $90=HEAP[$i]; //@line 1271 "parsermodule.c"
        var $91=(($89+24*$90)&4294967295); //@line 1271 "parsermodule.c"
        var $92=_validate_terminal($91, 12, ((__str52)&4294967295)); //@line 1271 "parsermodule.c"
        HEAP[$res]=$92; //@line 1271 "parsermodule.c"
        var $93=HEAP[$i]; //@line 1272 "parsermodule.c"
        var $94=((($93) + 1)&4294967295); //@line 1272 "parsermodule.c"
        HEAP[$i]=$94; //@line 1272 "parsermodule.c"
        var $95=HEAP[$res]; //@line 1273 "parsermodule.c"
        var $96=((($95))|0)!=0; //@line 1273 "parsermodule.c"
        if ($96) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 1273 "parsermodule.c"
      case 26: // $bb25
        var $97=HEAP[$i]; //@line 1273 "parsermodule.c"
        var $98=HEAP[$nch]; //@line 1273 "parsermodule.c"
        var $99=((($97))|0) < ((($98))|0); //@line 1273 "parsermodule.c"
        if ($99) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1273 "parsermodule.c"
      case 27: // $bb26
        var $100=HEAP[$tree_addr]; //@line 1273 "parsermodule.c"
        var $101=(($100+20)&4294967295); //@line 1273 "parsermodule.c"
        var $102=HEAP[$101]; //@line 1273 "parsermodule.c"
        var $103=HEAP[$i]; //@line 1273 "parsermodule.c"
        var $104=(($102+24*$103)&4294967295); //@line 1273 "parsermodule.c"
        var $105=(($104)&4294967295); //@line 1273 "parsermodule.c"
        var $106=HEAP[$105]; //@line 1273 "parsermodule.c"
        var $107=reSign(($106), 16, 0)==36; //@line 1273 "parsermodule.c"
        if ($107) { __label__ = 31; break; } else { __label__ = 28; break; } //@line 1273 "parsermodule.c"
      case 28: // $bb27
        var $108=HEAP[$tree_addr]; //@line 1273 "parsermodule.c"
        var $109=(($108+20)&4294967295); //@line 1273 "parsermodule.c"
        var $110=HEAP[$109]; //@line 1273 "parsermodule.c"
        var $111=HEAP[$i]; //@line 1273 "parsermodule.c"
        var $112=(($110+24*$111)&4294967295); //@line 1273 "parsermodule.c"
        var $113=(($112)&4294967295); //@line 1273 "parsermodule.c"
        var $114=HEAP[$113]; //@line 1273 "parsermodule.c"
        var $115=reSign(($114), 16, 0)==16; //@line 1273 "parsermodule.c"
        if ($115) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 1273 "parsermodule.c"
      case 29: // $bb28
        var $116=HEAP[$res]; //@line 1261 "parsermodule.c"
        var $117=((($116))|0)==0; //@line 1261 "parsermodule.c"
        if ($117) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 1261 "parsermodule.c"
      case 30: // $bb29
        var $118=HEAP[$i]; //@line 1261 "parsermodule.c"
        var $119=((($118) + 2)&4294967295); //@line 1261 "parsermodule.c"
        var $120=HEAP[$nch]; //@line 1261 "parsermodule.c"
        var $121=((($119))|0) <= ((($120))|0); //@line 1261 "parsermodule.c"
        if ($121) { __label__ = 14; break; } else { __label__ = 31; break; } //@line 1261 "parsermodule.c"
      case 31: // $bb30
        var $122=HEAP[$res]; //@line 1282 "parsermodule.c"
        var $123=((($122))|0)!=0; //@line 1282 "parsermodule.c"
        if ($123) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1282 "parsermodule.c"
      case 32: // $bb31
        var $124=HEAP[$tree_addr]; //@line 1283 "parsermodule.c"
        var $125=HEAP[$i]; //@line 1283 "parsermodule.c"
        var $126=_validate_varargslist_trailer($124, $125); //@line 1283 "parsermodule.c"
        HEAP[$res]=$126; //@line 1283 "parsermodule.c"
        __label__ = 33; break; //@line 1283 "parsermodule.c"
      case 33: // $bb32
        __label__ = 64; break; //@line 1283 "parsermodule.c"
      case 34: // $bb33
        var $127=HEAP[$sym]; //@line 1290 "parsermodule.c"
        var $128=((($127))|0)==12; //@line 1290 "parsermodule.c"
        if ($128) { __label__ = 35; break; } else { __label__ = 38; break; } //@line 1290 "parsermodule.c"
      case 35: // $bb34
        var $129=HEAP[$tree_addr]; //@line 1291 "parsermodule.c"
        var $130=(($129+20)&4294967295); //@line 1291 "parsermodule.c"
        var $131=HEAP[$130]; //@line 1291 "parsermodule.c"
        var $132=HEAP[$nch]; //@line 1291 "parsermodule.c"
        var $133=((($132) - 1)&4294967295); //@line 1291 "parsermodule.c"
        var $134=(($131+24*$133)&4294967295); //@line 1291 "parsermodule.c"
        var $135=_validate_terminal($134, 12, ((__str52)&4294967295)); //@line 1291 "parsermodule.c"
        HEAP[$res]=$135; //@line 1291 "parsermodule.c"
        var $136=HEAP[$res]; //@line 1292 "parsermodule.c"
        var $137=((($136))|0)==0; //@line 1292 "parsermodule.c"
        if ($137) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1292 "parsermodule.c"
      case 36: // $bb35
        HEAP[$0]=0; //@line 1293 "parsermodule.c"
        __label__ = 65; break; //@line 1293 "parsermodule.c"
      case 37: // $bb36
        var $138=HEAP[$nch]; //@line 1294 "parsermodule.c"
        var $139=((($138) - 1)&4294967295); //@line 1294 "parsermodule.c"
        HEAP[$nch]=$139; //@line 1294 "parsermodule.c"
        __label__ = 38; break; //@line 1294 "parsermodule.c"
      case 38: // $bb37
        var $140=HEAP[$tree_addr]; //@line 1299 "parsermodule.c"
        var $141=(($140+20)&4294967295); //@line 1299 "parsermodule.c"
        var $142=HEAP[$141]; //@line 1299 "parsermodule.c"
        var $143=(($142)&4294967295); //@line 1299 "parsermodule.c"
        var $144=_validate_fpdef($143); //@line 1299 "parsermodule.c"
        HEAP[$res]=$144; //@line 1299 "parsermodule.c"
        var $145=HEAP[$i]; //@line 1300 "parsermodule.c"
        var $146=((($145) + 1)&4294967295); //@line 1300 "parsermodule.c"
        HEAP[$i]=$146; //@line 1300 "parsermodule.c"
        var $147=HEAP[$res]; //@line 1301 "parsermodule.c"
        var $148=((($147))|0)!=0; //@line 1301 "parsermodule.c"
        if ($148) { __label__ = 39; break; } else { __label__ = 46; break; } //@line 1301 "parsermodule.c"
      case 39: // $bb38
        var $149=HEAP[$i]; //@line 1301 "parsermodule.c"
        var $150=((($149) + 2)&4294967295); //@line 1301 "parsermodule.c"
        var $151=HEAP[$nch]; //@line 1301 "parsermodule.c"
        var $152=((($150))|0) <= ((($151))|0); //@line 1301 "parsermodule.c"
        if ($152) { __label__ = 40; break; } else { __label__ = 46; break; } //@line 1301 "parsermodule.c"
      case 40: // $bb39
        var $153=HEAP[$tree_addr]; //@line 1301 "parsermodule.c"
        var $154=(($153+20)&4294967295); //@line 1301 "parsermodule.c"
        var $155=HEAP[$154]; //@line 1301 "parsermodule.c"
        var $156=HEAP[$i]; //@line 1301 "parsermodule.c"
        var $157=(($155+24*$156)&4294967295); //@line 1301 "parsermodule.c"
        var $158=(($157)&4294967295); //@line 1301 "parsermodule.c"
        var $159=HEAP[$158]; //@line 1301 "parsermodule.c"
        var $160=reSign(($159), 16, 0)==22; //@line 1301 "parsermodule.c"
        if ($160) { __label__ = 41; break; } else { __label__ = 46; break; } //@line 1301 "parsermodule.c"
      case 41: // $bb40
        var $161=HEAP[$tree_addr]; //@line 1302 "parsermodule.c"
        var $162=(($161+20)&4294967295); //@line 1302 "parsermodule.c"
        var $163=HEAP[$162]; //@line 1302 "parsermodule.c"
        var $164=HEAP[$i]; //@line 1302 "parsermodule.c"
        var $165=(($163+24*$164)&4294967295); //@line 1302 "parsermodule.c"
        var $166=_validate_terminal($165, 22, ((__str70)&4294967295)); //@line 1302 "parsermodule.c"
        var $167=((($166))|0)==0; //@line 1302 "parsermodule.c"
        if ($167) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 1302 "parsermodule.c"
      case 42: // $bb41
        var $168=HEAP[$tree_addr]; //@line 1302 "parsermodule.c"
        var $169=(($168+20)&4294967295); //@line 1302 "parsermodule.c"
        var $170=HEAP[$169]; //@line 1302 "parsermodule.c"
        var $171=HEAP[$i]; //@line 1302 "parsermodule.c"
        var $172=((($171) + 1)&4294967295); //@line 1302 "parsermodule.c"
        var $173=(($170+24*$172)&4294967295); //@line 1302 "parsermodule.c"
        var $174=_validate_test($173); //@line 1302 "parsermodule.c"
        var $175=((($174))|0)==0; //@line 1302 "parsermodule.c"
        if ($175) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 1302 "parsermodule.c"
      case 43: // $bb42
        HEAP[$iftmp_81]=1; //@line 1302 "parsermodule.c"
        __label__ = 45; break; //@line 1302 "parsermodule.c"
      case 44: // $bb43
        HEAP[$iftmp_81]=0; //@line 1302 "parsermodule.c"
        __label__ = 45; break; //@line 1302 "parsermodule.c"
      case 45: // $bb44
        var $176=HEAP[$iftmp_81]; //@line 1302 "parsermodule.c"
        HEAP[$res]=$176; //@line 1302 "parsermodule.c"
        var $177=HEAP[$i]; //@line 1304 "parsermodule.c"
        var $178=((($177) + 2)&4294967295); //@line 1304 "parsermodule.c"
        HEAP[$i]=$178; //@line 1304 "parsermodule.c"
        __label__ = 46; break; //@line 1304 "parsermodule.c"
      case 46: // $bb45
        __label__ = 59; break; //@line 1304 "parsermodule.c"
      case 47: // $bb46
        var $179=HEAP[$tree_addr]; //@line 1311 "parsermodule.c"
        var $180=(($179+20)&4294967295); //@line 1311 "parsermodule.c"
        var $181=HEAP[$180]; //@line 1311 "parsermodule.c"
        var $182=HEAP[$i]; //@line 1311 "parsermodule.c"
        var $183=(($181+24*$182)&4294967295); //@line 1311 "parsermodule.c"
        var $184=_validate_terminal($183, 12, ((__str52)&4294967295)); //@line 1311 "parsermodule.c"
        var $185=((($184))|0)==0; //@line 1311 "parsermodule.c"
        if ($185) { __label__ = 50; break; } else { __label__ = 48; break; } //@line 1311 "parsermodule.c"
      case 48: // $bb47
        var $186=HEAP[$tree_addr]; //@line 1311 "parsermodule.c"
        var $187=(($186+20)&4294967295); //@line 1311 "parsermodule.c"
        var $188=HEAP[$187]; //@line 1311 "parsermodule.c"
        var $189=HEAP[$i]; //@line 1311 "parsermodule.c"
        var $190=((($189) + 1)&4294967295); //@line 1311 "parsermodule.c"
        var $191=(($188+24*$190)&4294967295); //@line 1311 "parsermodule.c"
        var $192=_validate_fpdef($191); //@line 1311 "parsermodule.c"
        var $193=((($192))|0)==0; //@line 1311 "parsermodule.c"
        if ($193) { __label__ = 50; break; } else { __label__ = 49; break; } //@line 1311 "parsermodule.c"
      case 49: // $bb48
        HEAP[$iftmp_82]=1; //@line 1311 "parsermodule.c"
        __label__ = 51; break; //@line 1311 "parsermodule.c"
      case 50: // $bb49
        HEAP[$iftmp_82]=0; //@line 1311 "parsermodule.c"
        __label__ = 51; break; //@line 1311 "parsermodule.c"
      case 51: // $bb50
        var $194=HEAP[$iftmp_82]; //@line 1311 "parsermodule.c"
        HEAP[$res]=$194; //@line 1311 "parsermodule.c"
        var $195=HEAP[$i]; //@line 1313 "parsermodule.c"
        var $196=((($195) + 2)&4294967295); //@line 1313 "parsermodule.c"
        HEAP[$i]=$196; //@line 1313 "parsermodule.c"
        var $197=HEAP[$res]; //@line 1314 "parsermodule.c"
        var $198=((($197))|0)!=0; //@line 1314 "parsermodule.c"
        if ($198) { __label__ = 52; break; } else { __label__ = 59; break; } //@line 1314 "parsermodule.c"
      case 52: // $bb51
        var $199=HEAP[$nch]; //@line 1314 "parsermodule.c"
        var $200=HEAP[$i]; //@line 1314 "parsermodule.c"
        var $201=((($199) - ($200))&4294967295); //@line 1314 "parsermodule.c"
        var $202=((($201))|0) > 1; //@line 1314 "parsermodule.c"
        if ($202) { __label__ = 53; break; } else { __label__ = 59; break; } //@line 1314 "parsermodule.c"
      case 53: // $bb52
        var $203=HEAP[$tree_addr]; //@line 1314 "parsermodule.c"
        var $204=(($203+20)&4294967295); //@line 1314 "parsermodule.c"
        var $205=HEAP[$204]; //@line 1314 "parsermodule.c"
        var $206=HEAP[$i]; //@line 1314 "parsermodule.c"
        var $207=(($205+24*$206)&4294967295); //@line 1314 "parsermodule.c"
        var $208=(($207)&4294967295); //@line 1314 "parsermodule.c"
        var $209=HEAP[$208]; //@line 1314 "parsermodule.c"
        var $210=reSign(($209), 16, 0)==22; //@line 1314 "parsermodule.c"
        if ($210) { __label__ = 54; break; } else { __label__ = 59; break; } //@line 1314 "parsermodule.c"
      case 54: // $bb53
        var $211=HEAP[$tree_addr]; //@line 1315 "parsermodule.c"
        var $212=(($211+20)&4294967295); //@line 1315 "parsermodule.c"
        var $213=HEAP[$212]; //@line 1315 "parsermodule.c"
        var $214=HEAP[$i]; //@line 1315 "parsermodule.c"
        var $215=(($213+24*$214)&4294967295); //@line 1315 "parsermodule.c"
        var $216=_validate_terminal($215, 22, ((__str70)&4294967295)); //@line 1315 "parsermodule.c"
        var $217=((($216))|0)==0; //@line 1315 "parsermodule.c"
        if ($217) { __label__ = 57; break; } else { __label__ = 55; break; } //@line 1315 "parsermodule.c"
      case 55: // $bb54
        var $218=HEAP[$tree_addr]; //@line 1315 "parsermodule.c"
        var $219=(($218+20)&4294967295); //@line 1315 "parsermodule.c"
        var $220=HEAP[$219]; //@line 1315 "parsermodule.c"
        var $221=HEAP[$i]; //@line 1315 "parsermodule.c"
        var $222=((($221) + 1)&4294967295); //@line 1315 "parsermodule.c"
        var $223=(($220+24*$222)&4294967295); //@line 1315 "parsermodule.c"
        var $224=_validate_test($223); //@line 1315 "parsermodule.c"
        var $225=((($224))|0)==0; //@line 1315 "parsermodule.c"
        if ($225) { __label__ = 57; break; } else { __label__ = 56; break; } //@line 1315 "parsermodule.c"
      case 56: // $bb55
        HEAP[$iftmp_83]=1; //@line 1315 "parsermodule.c"
        __label__ = 58; break; //@line 1315 "parsermodule.c"
      case 57: // $bb56
        HEAP[$iftmp_83]=0; //@line 1315 "parsermodule.c"
        __label__ = 58; break; //@line 1315 "parsermodule.c"
      case 58: // $bb57
        var $226=HEAP[$iftmp_83]; //@line 1315 "parsermodule.c"
        HEAP[$res]=$226; //@line 1315 "parsermodule.c"
        var $227=HEAP[$i]; //@line 1317 "parsermodule.c"
        var $228=((($227) + 2)&4294967295); //@line 1317 "parsermodule.c"
        HEAP[$i]=$228; //@line 1317 "parsermodule.c"
        __label__ = 59; break; //@line 1317 "parsermodule.c"
      case 59: // $bb58
        var $229=HEAP[$res]; //@line 1310 "parsermodule.c"
        var $230=((($229))|0)==0; //@line 1310 "parsermodule.c"
        if ($230) { __label__ = 61; break; } else { __label__ = 60; break; } //@line 1310 "parsermodule.c"
      case 60: // $bb59
        var $231=HEAP[$nch]; //@line 1310 "parsermodule.c"
        var $232=HEAP[$i]; //@line 1310 "parsermodule.c"
        var $233=((($231) - ($232))&4294967295); //@line 1310 "parsermodule.c"
        var $234=((($233))|0) > 1; //@line 1310 "parsermodule.c"
        if ($234) { __label__ = 47; break; } else { __label__ = 61; break; } //@line 1310 "parsermodule.c"
      case 61: // $bb60
        var $235=HEAP[$res]; //@line 1320 "parsermodule.c"
        var $236=((($235))|0)!=0; //@line 1320 "parsermodule.c"
        if ($236) { __label__ = 62; break; } else { __label__ = 64; break; } //@line 1320 "parsermodule.c"
      case 62: // $bb61
        var $237=HEAP[$nch]; //@line 1320 "parsermodule.c"
        var $238=HEAP[$i]; //@line 1320 "parsermodule.c"
        var $239=((($237))|0)!=((($238))|0); //@line 1320 "parsermodule.c"
        if ($239) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 1320 "parsermodule.c"
      case 63: // $bb62
        HEAP[$res]=0; //@line 1321 "parsermodule.c"
        _err_string(((__str71)&4294967295)); //@line 1322 "parsermodule.c"
        __label__ = 64; break; //@line 1322 "parsermodule.c"
      case 64: // $bb63
        var $240=HEAP[$res]; //@line 1326 "parsermodule.c"
        HEAP[$0]=$240; //@line 1326 "parsermodule.c"
        __label__ = 65; break; //@line 1326 "parsermodule.c"
      case 65: // $bb64
        var $241=HEAP[$0]; //@line 1239 "parsermodule.c"
        HEAP[$retval]=$241; //@line 1239 "parsermodule.c"
        __label__ = 66; break; //@line 1239 "parsermodule.c"
      case 66: // $return
        var $retval65=HEAP[$retval]; //@line 1239 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval65; //@line 1239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_iter($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_84=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1336 "parsermodule.c"
        var $2=_validate_ntype($1, 332); //@line 1336 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1336 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1336 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1336 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str72)&4294967295)); //@line 1336 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1336 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1336 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_84]=1; //@line 1336 "parsermodule.c"
        __label__ = 4; break; //@line 1336 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_84]=0; //@line 1336 "parsermodule.c"
        __label__ = 4; break; //@line 1336 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_84]; //@line 1336 "parsermodule.c"
        HEAP[$res]=$7; //@line 1336 "parsermodule.c"
        var $8=HEAP[$res]; //@line 1337 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 1337 "parsermodule.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1337 "parsermodule.c"
      case 5: // $bb4
        var $10=HEAP[$tree_addr]; //@line 1337 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1337 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1337 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1337 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 1337 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1337 "parsermodule.c"
        var $16=reSign(($15), 16, 0)!=333; //@line 1337 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1337 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$tree_addr]; //@line 1338 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1338 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1338 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 1338 "parsermodule.c"
        var $21=_validate_list_for($20); //@line 1338 "parsermodule.c"
        HEAP[$res]=$21; //@line 1338 "parsermodule.c"
        __label__ = 8; break; //@line 1338 "parsermodule.c"
      case 7: // $bb6
        var $22=HEAP[$tree_addr]; //@line 1340 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 1340 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1340 "parsermodule.c"
        var $25=(($24)&4294967295); //@line 1340 "parsermodule.c"
        var $26=_validate_list_if($25); //@line 1340 "parsermodule.c"
        HEAP[$res]=$26; //@line 1340 "parsermodule.c"
        __label__ = 8; break; //@line 1340 "parsermodule.c"
      case 8: // $bb7
        var $27=HEAP[$res]; //@line 1342 "parsermodule.c"
        HEAP[$0]=$27; //@line 1342 "parsermodule.c"
        var $28=HEAP[$0]; //@line 1342 "parsermodule.c"
        HEAP[$retval]=$28; //@line 1342 "parsermodule.c"
        __label__ = 9; break; //@line 1342 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1342 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1342 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_iter($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_85=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1351 "parsermodule.c"
        var $2=_validate_ntype($1, 335); //@line 1351 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1351 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1351 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1351 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str73)&4294967295)); //@line 1351 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1351 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1351 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_85]=1; //@line 1351 "parsermodule.c"
        __label__ = 4; break; //@line 1351 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_85]=0; //@line 1351 "parsermodule.c"
        __label__ = 4; break; //@line 1351 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_85]; //@line 1351 "parsermodule.c"
        HEAP[$res]=$7; //@line 1351 "parsermodule.c"
        var $8=HEAP[$res]; //@line 1352 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 1352 "parsermodule.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1352 "parsermodule.c"
      case 5: // $bb4
        var $10=HEAP[$tree_addr]; //@line 1352 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1352 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1352 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1352 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 1352 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1352 "parsermodule.c"
        var $16=reSign(($15), 16, 0)!=336; //@line 1352 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1352 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$tree_addr]; //@line 1353 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1353 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1353 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 1353 "parsermodule.c"
        var $21=_validate_comp_for($20); //@line 1353 "parsermodule.c"
        HEAP[$res]=$21; //@line 1353 "parsermodule.c"
        __label__ = 8; break; //@line 1353 "parsermodule.c"
      case 7: // $bb6
        var $22=HEAP[$tree_addr]; //@line 1355 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 1355 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1355 "parsermodule.c"
        var $25=(($24)&4294967295); //@line 1355 "parsermodule.c"
        var $26=_validate_comp_if($25); //@line 1355 "parsermodule.c"
        HEAP[$res]=$26; //@line 1355 "parsermodule.c"
        __label__ = 8; break; //@line 1355 "parsermodule.c"
      case 8: // $bb7
        var $27=HEAP[$res]; //@line 1357 "parsermodule.c"
        HEAP[$0]=$27; //@line 1357 "parsermodule.c"
        var $28=HEAP[$0]; //@line 1357 "parsermodule.c"
        HEAP[$retval]=$28; //@line 1357 "parsermodule.c"
        __label__ = 9; break; //@line 1357 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1357 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1357 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_for($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_86=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1365 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1365 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1365 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1365 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1368 "parsermodule.c"
        var $5=((($4))|0)==5; //@line 1368 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1368 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 1369 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 1369 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1369 "parsermodule.c"
        var $9=(($8+96)&4294967295); //@line 1369 "parsermodule.c"
        var $10=_validate_list_iter($9); //@line 1369 "parsermodule.c"
        HEAP[$res]=$10; //@line 1369 "parsermodule.c"
        __label__ = 3; break; //@line 1369 "parsermodule.c"
      case 2: // $bb1
        var $11=HEAP[$tree_addr]; //@line 1371 "parsermodule.c"
        var $12=_validate_numnodes($11, 4, ((__str74)&4294967295)); //@line 1371 "parsermodule.c"
        HEAP[$res]=$12; //@line 1371 "parsermodule.c"
        __label__ = 3; break; //@line 1371 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$res]; //@line 1373 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 1373 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 1373 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$tree_addr]; //@line 1374 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1374 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1374 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 1374 "parsermodule.c"
        var $19=_validate_terminal($18, 1, ((__str75)&4294967295)); //@line 1374 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1374 "parsermodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1374 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 1374 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1374 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1374 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 1374 "parsermodule.c"
        var $25=_validate_exprlist($24); //@line 1374 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 1374 "parsermodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1374 "parsermodule.c"
      case 6: // $bb5
        var $27=HEAP[$tree_addr]; //@line 1374 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 1374 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1374 "parsermodule.c"
        var $30=(($29+48)&4294967295); //@line 1374 "parsermodule.c"
        var $31=_validate_terminal($30, 1, ((__str76)&4294967295)); //@line 1374 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 1374 "parsermodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1374 "parsermodule.c"
      case 7: // $bb6
        var $33=HEAP[$tree_addr]; //@line 1374 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 1374 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1374 "parsermodule.c"
        var $36=(($35+72)&4294967295); //@line 1374 "parsermodule.c"
        var $37=_validate_testlist_safe($36); //@line 1374 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 1374 "parsermodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1374 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_86]=1; //@line 1374 "parsermodule.c"
        __label__ = 10; break; //@line 1374 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_86]=0; //@line 1374 "parsermodule.c"
        __label__ = 10; break; //@line 1374 "parsermodule.c"
      case 10: // $bb9
        var $39=HEAP[$iftmp_86]; //@line 1374 "parsermodule.c"
        HEAP[$res]=$39; //@line 1374 "parsermodule.c"
        __label__ = 11; break; //@line 1374 "parsermodule.c"
      case 11: // $bb10
        var $40=HEAP[$res]; //@line 1379 "parsermodule.c"
        HEAP[$0]=$40; //@line 1379 "parsermodule.c"
        var $41=HEAP[$0]; //@line 1379 "parsermodule.c"
        HEAP[$retval]=$41; //@line 1379 "parsermodule.c"
        __label__ = 12; break; //@line 1379 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1379 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1379 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_for($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_87=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1387 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1387 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1387 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1387 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1390 "parsermodule.c"
        var $5=((($4))|0)==5; //@line 1390 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1390 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 1391 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 1391 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1391 "parsermodule.c"
        var $9=(($8+96)&4294967295); //@line 1391 "parsermodule.c"
        var $10=_validate_comp_iter($9); //@line 1391 "parsermodule.c"
        HEAP[$res]=$10; //@line 1391 "parsermodule.c"
        __label__ = 3; break; //@line 1391 "parsermodule.c"
      case 2: // $bb1
        var $11=HEAP[$tree_addr]; //@line 1393 "parsermodule.c"
        var $12=_validate_numnodes($11, 4, ((__str77)&4294967295)); //@line 1393 "parsermodule.c"
        HEAP[$res]=$12; //@line 1393 "parsermodule.c"
        __label__ = 3; break; //@line 1393 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$res]; //@line 1395 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 1395 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 1395 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$tree_addr]; //@line 1396 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1396 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1396 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 1396 "parsermodule.c"
        var $19=_validate_terminal($18, 1, ((__str75)&4294967295)); //@line 1396 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1396 "parsermodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 1396 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 1396 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1396 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1396 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 1396 "parsermodule.c"
        var $25=_validate_exprlist($24); //@line 1396 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 1396 "parsermodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1396 "parsermodule.c"
      case 6: // $bb5
        var $27=HEAP[$tree_addr]; //@line 1396 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 1396 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1396 "parsermodule.c"
        var $30=(($29+48)&4294967295); //@line 1396 "parsermodule.c"
        var $31=_validate_terminal($30, 1, ((__str76)&4294967295)); //@line 1396 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 1396 "parsermodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1396 "parsermodule.c"
      case 7: // $bb6
        var $33=HEAP[$tree_addr]; //@line 1396 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 1396 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1396 "parsermodule.c"
        var $36=(($35+72)&4294967295); //@line 1396 "parsermodule.c"
        var $37=_validate_or_test($36); //@line 1396 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 1396 "parsermodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1396 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_87]=1; //@line 1396 "parsermodule.c"
        __label__ = 10; break; //@line 1396 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_87]=0; //@line 1396 "parsermodule.c"
        __label__ = 10; break; //@line 1396 "parsermodule.c"
      case 10: // $bb9
        var $39=HEAP[$iftmp_87]; //@line 1396 "parsermodule.c"
        HEAP[$res]=$39; //@line 1396 "parsermodule.c"
        __label__ = 11; break; //@line 1396 "parsermodule.c"
      case 11: // $bb10
        var $40=HEAP[$res]; //@line 1401 "parsermodule.c"
        HEAP[$0]=$40; //@line 1401 "parsermodule.c"
        var $41=HEAP[$0]; //@line 1401 "parsermodule.c"
        HEAP[$retval]=$41; //@line 1401 "parsermodule.c"
        __label__ = 12; break; //@line 1401 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1401 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1401 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_if($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_88=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1409 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1409 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1409 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1409 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1412 "parsermodule.c"
        var $5=((($4))|0)==3; //@line 1412 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1412 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 1413 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 1413 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1413 "parsermodule.c"
        var $9=(($8+48)&4294967295); //@line 1413 "parsermodule.c"
        var $10=_validate_list_iter($9); //@line 1413 "parsermodule.c"
        HEAP[$res]=$10; //@line 1413 "parsermodule.c"
        __label__ = 3; break; //@line 1413 "parsermodule.c"
      case 2: // $bb1
        var $11=HEAP[$tree_addr]; //@line 1415 "parsermodule.c"
        var $12=_validate_numnodes($11, 2, ((__str78)&4294967295)); //@line 1415 "parsermodule.c"
        HEAP[$res]=$12; //@line 1415 "parsermodule.c"
        __label__ = 3; break; //@line 1415 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$res]; //@line 1417 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 1417 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1417 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$tree_addr]; //@line 1418 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1418 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1418 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 1418 "parsermodule.c"
        var $19=_validate_terminal($18, 1, ((__str57)&4294967295)); //@line 1418 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1418 "parsermodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1418 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 1418 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1418 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1418 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 1418 "parsermodule.c"
        var $25=_validate_old_test($24); //@line 1418 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 1418 "parsermodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1418 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_88]=1; //@line 1418 "parsermodule.c"
        __label__ = 8; break; //@line 1418 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_88]=0; //@line 1418 "parsermodule.c"
        __label__ = 8; break; //@line 1418 "parsermodule.c"
      case 8: // $bb7
        var $27=HEAP[$iftmp_88]; //@line 1418 "parsermodule.c"
        HEAP[$res]=$27; //@line 1418 "parsermodule.c"
        __label__ = 9; break; //@line 1418 "parsermodule.c"
      case 9: // $bb8
        var $28=HEAP[$res]; //@line 1421 "parsermodule.c"
        HEAP[$0]=$28; //@line 1421 "parsermodule.c"
        var $29=HEAP[$0]; //@line 1421 "parsermodule.c"
        HEAP[$retval]=$29; //@line 1421 "parsermodule.c"
        __label__ = 10; break; //@line 1421 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1421 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1421 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_if($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_89=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1429 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1429 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1429 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1429 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1432 "parsermodule.c"
        var $5=((($4))|0)==3; //@line 1432 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1432 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 1433 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 1433 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1433 "parsermodule.c"
        var $9=(($8+48)&4294967295); //@line 1433 "parsermodule.c"
        var $10=_validate_comp_iter($9); //@line 1433 "parsermodule.c"
        HEAP[$res]=$10; //@line 1433 "parsermodule.c"
        __label__ = 3; break; //@line 1433 "parsermodule.c"
      case 2: // $bb1
        var $11=HEAP[$tree_addr]; //@line 1435 "parsermodule.c"
        var $12=_validate_numnodes($11, 2, ((__str79)&4294967295)); //@line 1435 "parsermodule.c"
        HEAP[$res]=$12; //@line 1435 "parsermodule.c"
        __label__ = 3; break; //@line 1435 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$res]; //@line 1437 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 1437 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1437 "parsermodule.c"
      case 4: // $bb3
        var $15=HEAP[$tree_addr]; //@line 1438 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1438 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1438 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 1438 "parsermodule.c"
        var $19=_validate_terminal($18, 1, ((__str57)&4294967295)); //@line 1438 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1438 "parsermodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1438 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 1438 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1438 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1438 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 1438 "parsermodule.c"
        var $25=_validate_old_test($24); //@line 1438 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 1438 "parsermodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1438 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_89]=1; //@line 1438 "parsermodule.c"
        __label__ = 8; break; //@line 1438 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_89]=0; //@line 1438 "parsermodule.c"
        __label__ = 8; break; //@line 1438 "parsermodule.c"
      case 8: // $bb7
        var $27=HEAP[$iftmp_89]; //@line 1438 "parsermodule.c"
        HEAP[$res]=$27; //@line 1438 "parsermodule.c"
        __label__ = 9; break; //@line 1438 "parsermodule.c"
      case 9: // $bb8
        var $28=HEAP[$res]; //@line 1441 "parsermodule.c"
        HEAP[$0]=$28; //@line 1441 "parsermodule.c"
        var $29=HEAP[$0]; //@line 1441 "parsermodule.c"
        HEAP[$retval]=$29; //@line 1441 "parsermodule.c"
        __label__ = 10; break; //@line 1441 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1441 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1441 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_fpdef($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_90=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1453 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1453 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1453 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1453 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1454 "parsermodule.c"
        var $5=_validate_ntype($4, 265); //@line 1454 "parsermodule.c"
        HEAP[$res]=$5; //@line 1454 "parsermodule.c"
        var $6=HEAP[$res]; //@line 1456 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 1456 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1456 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$nch]; //@line 1457 "parsermodule.c"
        var $9=((($8))|0)==1; //@line 1457 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1457 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 1458 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1458 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1458 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1458 "parsermodule.c"
        var $14=_validate_ntype($13, 1); //@line 1458 "parsermodule.c"
        HEAP[$res]=$14; //@line 1458 "parsermodule.c"
        __label__ = 11; break; //@line 1458 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$nch]; //@line 1459 "parsermodule.c"
        var $16=((($15))|0)==3; //@line 1459 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1459 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 1460 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1460 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1460 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 1460 "parsermodule.c"
        var $21=_validate_terminal($20, 7, ((__str55)&4294967295)); //@line 1460 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 1460 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1460 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$tree_addr]; //@line 1460 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 1460 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1460 "parsermodule.c"
        var $26=(($25+24)&4294967295); //@line 1460 "parsermodule.c"
        var $27=_validate_fplist($26); //@line 1460 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1460 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1460 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$tree_addr]; //@line 1460 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1460 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1460 "parsermodule.c"
        var $32=(($31+48)&4294967295); //@line 1460 "parsermodule.c"
        var $33=_validate_terminal($32, 8, ((__str56)&4294967295)); //@line 1460 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 1460 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1460 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_90]=1; //@line 1460 "parsermodule.c"
        __label__ = 9; break; //@line 1460 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_90]=0; //@line 1460 "parsermodule.c"
        __label__ = 9; break; //@line 1460 "parsermodule.c"
      case 9: // $bb8
        var $35=HEAP[$iftmp_90]; //@line 1460 "parsermodule.c"
        HEAP[$res]=$35; //@line 1460 "parsermodule.c"
        __label__ = 11; break; //@line 1460 "parsermodule.c"
      case 10: // $bb9
        var $36=HEAP[$tree_addr]; //@line 1464 "parsermodule.c"
        var $37=_validate_numnodes($36, 1, ((__str80)&4294967295)); //@line 1464 "parsermodule.c"
        HEAP[$res]=$37; //@line 1464 "parsermodule.c"
        __label__ = 11; break; //@line 1464 "parsermodule.c"
      case 11: // $bb10
        var $38=HEAP[$res]; //@line 1466 "parsermodule.c"
        HEAP[$0]=$38; //@line 1466 "parsermodule.c"
        var $39=HEAP[$0]; //@line 1466 "parsermodule.c"
        HEAP[$retval]=$39; //@line 1466 "parsermodule.c"
        __label__ = 12; break; //@line 1466 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1466 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1466 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_fplist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1473 "parsermodule.c"
        var $2=_validate_repeating_list($1, 266, (FUNCTION_TABLE_OFFSET + 14), ((__str81)&4294967295)); //@line 1473 "parsermodule.c"
        HEAP[$0]=$2; //@line 1473 "parsermodule.c"
        var $3=HEAP[$0]; //@line 1473 "parsermodule.c"
        HEAP[$retval]=$3; //@line 1473 "parsermodule.c"
        __label__ = 1; break; //@line 1473 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1473 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1473 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_91=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1485 "parsermodule.c"
        var $2=_validate_ntype($1, 267); //@line 1485 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1485 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1485 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1485 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str82)&4294967295)); //@line 1485 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1485 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1485 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_91]=1; //@line 1485 "parsermodule.c"
        __label__ = 4; break; //@line 1485 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_91]=0; //@line 1485 "parsermodule.c"
        __label__ = 4; break; //@line 1485 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_91]; //@line 1485 "parsermodule.c"
        HEAP[$res]=$7; //@line 1485 "parsermodule.c"
        var $8=HEAP[$res]; //@line 1487 "parsermodule.c"
        var $9=((($8))|0)!=0; //@line 1487 "parsermodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1487 "parsermodule.c"
      case 5: // $bb4
        var $10=HEAP[$tree_addr]; //@line 1488 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1488 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1488 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1488 "parsermodule.c"
        HEAP[$tree_addr]=$13; //@line 1488 "parsermodule.c"
        var $14=HEAP[$tree_addr]; //@line 1490 "parsermodule.c"
        var $15=(($14)&4294967295); //@line 1490 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1490 "parsermodule.c"
        var $17=reSign(($16), 16, 0)==268; //@line 1490 "parsermodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1490 "parsermodule.c"
      case 6: // $bb5
        var $18=HEAP[$tree_addr]; //@line 1491 "parsermodule.c"
        var $19=_validate_simple_stmt($18); //@line 1491 "parsermodule.c"
        HEAP[$res]=$19; //@line 1491 "parsermodule.c"
        __label__ = 8; break; //@line 1491 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$tree_addr]; //@line 1493 "parsermodule.c"
        var $21=_validate_compound_stmt($20); //@line 1493 "parsermodule.c"
        HEAP[$res]=$21; //@line 1493 "parsermodule.c"
        __label__ = 8; break; //@line 1493 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$res]; //@line 1495 "parsermodule.c"
        HEAP[$0]=$22; //@line 1495 "parsermodule.c"
        var $23=HEAP[$0]; //@line 1495 "parsermodule.c"
        HEAP[$retval]=$23; //@line 1495 "parsermodule.c"
        __label__ = 9; break; //@line 1495 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1495 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1495 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_simple_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_93=__stackBase__+12;
        var $iftmp_92=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $i=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1505 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1505 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1505 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1505 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1509 "parsermodule.c"
        var $5=_validate_ntype($4, 268); //@line 1509 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1509 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1509 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1509 "parsermodule.c"
        var $8=((($7))|0) <= 1; //@line 1509 "parsermodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1509 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 1509 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 1509 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1509 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1509 "parsermodule.c"
        var $13=_validate_small_stmt($12); //@line 1509 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 1509 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1509 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$tree_addr]; //@line 1509 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 1509 "parsermodule.c"
        var $17=HEAP[$16]; //@line 1509 "parsermodule.c"
        var $18=HEAP[$nch]; //@line 1509 "parsermodule.c"
        var $19=((($18) - 1)&4294967295); //@line 1509 "parsermodule.c"
        var $20=(($17+24*$19)&4294967295); //@line 1509 "parsermodule.c"
        var $21=_validate_terminal($20, 4, 0); //@line 1509 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 1509 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1509 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_92]=1; //@line 1509 "parsermodule.c"
        __label__ = 6; break; //@line 1509 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_92]=0; //@line 1509 "parsermodule.c"
        __label__ = 6; break; //@line 1509 "parsermodule.c"
      case 6: // $bb5
        var $23=HEAP[$iftmp_92]; //@line 1509 "parsermodule.c"
        HEAP[$res]=$23; //@line 1509 "parsermodule.c"
        var $24=HEAP[$nch]; //@line 1511 "parsermodule.c"
        var $25=((($24))|0) <= 1; //@line 1511 "parsermodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1511 "parsermodule.c"
      case 7: // $bb6
        var $26=HEAP[$tree_addr]; //@line 1512 "parsermodule.c"
        var $27=_validate_numnodes($26, 2, ((__str83)&4294967295)); //@line 1512 "parsermodule.c"
        HEAP[$res]=$27; //@line 1512 "parsermodule.c"
        __label__ = 8; break; //@line 1512 "parsermodule.c"
      case 8: // $bb7
        var $28=HEAP[$nch]; //@line 1513 "parsermodule.c"
        var $29=((($28) - 1)&4294967295); //@line 1513 "parsermodule.c"
        HEAP[$nch]=$29; //@line 1513 "parsermodule.c"
        var $30=HEAP[$res]; //@line 1514 "parsermodule.c"
        var $31=((($30))|0)!=0; //@line 1514 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1514 "parsermodule.c"
      case 9: // $bb8
        var $32=HEAP[$nch]; //@line 1514 "parsermodule.c"
        var $33=($32) & 1; //@line 1514 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 1514 "parsermodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1514 "parsermodule.c"
      case 10: // $bb9
        var $35=HEAP[$tree_addr]; //@line 1515 "parsermodule.c"
        var $36=(($35+20)&4294967295); //@line 1515 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1515 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 1515 "parsermodule.c"
        var $39=((($38) - 1)&4294967295); //@line 1515 "parsermodule.c"
        HEAP[$nch]=$39; //@line 1515 "parsermodule.c"
        var $40=HEAP[$nch]; //@line 1515 "parsermodule.c"
        var $41=(($37+24*$40)&4294967295); //@line 1515 "parsermodule.c"
        var $42=_validate_terminal($41, 13, ((__str84)&4294967295)); //@line 1515 "parsermodule.c"
        HEAP[$res]=$42; //@line 1515 "parsermodule.c"
        __label__ = 11; break; //@line 1515 "parsermodule.c"
      case 11: // $bb10
        var $43=HEAP[$res]; //@line 1516 "parsermodule.c"
        var $44=((($43))|0)!=0; //@line 1516 "parsermodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 21; break; } //@line 1516 "parsermodule.c"
      case 12: // $bb11
        var $45=HEAP[$nch]; //@line 1516 "parsermodule.c"
        var $46=((($45))|0) > 2; //@line 1516 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 21; break; } //@line 1516 "parsermodule.c"
      case 13: // $bb12
        HEAP[$i]=1; //@line 1519 "parsermodule.c"
        __label__ = 19; break; //@line 1519 "parsermodule.c"
      case 14: // $bb13
        var $47=HEAP[$tree_addr]; //@line 1520 "parsermodule.c"
        var $48=(($47+20)&4294967295); //@line 1520 "parsermodule.c"
        var $49=HEAP[$48]; //@line 1520 "parsermodule.c"
        var $50=HEAP[$i]; //@line 1520 "parsermodule.c"
        var $51=(($49+24*$50)&4294967295); //@line 1520 "parsermodule.c"
        var $52=_validate_terminal($51, 13, ((__str84)&4294967295)); //@line 1520 "parsermodule.c"
        var $53=((($52))|0)==0; //@line 1520 "parsermodule.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1520 "parsermodule.c"
      case 15: // $bb14
        var $54=HEAP[$tree_addr]; //@line 1520 "parsermodule.c"
        var $55=(($54+20)&4294967295); //@line 1520 "parsermodule.c"
        var $56=HEAP[$55]; //@line 1520 "parsermodule.c"
        var $57=HEAP[$i]; //@line 1520 "parsermodule.c"
        var $58=((($57) + 1)&4294967295); //@line 1520 "parsermodule.c"
        var $59=(($56+24*$58)&4294967295); //@line 1520 "parsermodule.c"
        var $60=_validate_small_stmt($59); //@line 1520 "parsermodule.c"
        var $61=((($60))|0)==0; //@line 1520 "parsermodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1520 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_93]=1; //@line 1520 "parsermodule.c"
        __label__ = 18; break; //@line 1520 "parsermodule.c"
      case 17: // $bb16
        HEAP[$iftmp_93]=0; //@line 1520 "parsermodule.c"
        __label__ = 18; break; //@line 1520 "parsermodule.c"
      case 18: // $bb17
        var $62=HEAP[$iftmp_93]; //@line 1520 "parsermodule.c"
        HEAP[$res]=$62; //@line 1520 "parsermodule.c"
        var $63=HEAP[$i]; //@line 1519 "parsermodule.c"
        var $64=((($63) + 2)&4294967295); //@line 1519 "parsermodule.c"
        HEAP[$i]=$64; //@line 1519 "parsermodule.c"
        __label__ = 19; break; //@line 1519 "parsermodule.c"
      case 19: // $bb18
        var $65=HEAP[$res]; //@line 1519 "parsermodule.c"
        var $66=((($65))|0)==0; //@line 1519 "parsermodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1519 "parsermodule.c"
      case 20: // $bb19
        var $67=HEAP[$i]; //@line 1519 "parsermodule.c"
        var $68=HEAP[$nch]; //@line 1519 "parsermodule.c"
        var $69=((($67))|0) < ((($68))|0); //@line 1519 "parsermodule.c"
        if ($69) { __label__ = 14; break; } else { __label__ = 21; break; } //@line 1519 "parsermodule.c"
      case 21: // $bb20
        var $70=HEAP[$res]; //@line 1523 "parsermodule.c"
        HEAP[$0]=$70; //@line 1523 "parsermodule.c"
        var $71=HEAP[$0]; //@line 1523 "parsermodule.c"
        HEAP[$retval]=$71; //@line 1523 "parsermodule.c"
        __label__ = 22; break; //@line 1523 "parsermodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 1523 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 1523 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_small_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $nch=__stackBase__+12;
        var $res=__stackBase__+16;
        var $ntype=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1530 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1530 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1530 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1530 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1531 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str85)&4294967295)); //@line 1531 "parsermodule.c"
        HEAP[$res]=$5; //@line 1531 "parsermodule.c"
        var $6=HEAP[$res]; //@line 1533 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 1533 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 13; break; } //@line 1533 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$tree_addr]; //@line 1534 "parsermodule.c"
        var $9=(($8+20)&4294967295); //@line 1534 "parsermodule.c"
        var $10=HEAP[$9]; //@line 1534 "parsermodule.c"
        var $11=(($10)&4294967295); //@line 1534 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1534 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1534 "parsermodule.c"
        var $14=reSign(($13), 16, 0); //@line 1534 "parsermodule.c"
        HEAP[$ntype]=$14; //@line 1534 "parsermodule.c"
        var $15=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $16=((($15))|0)==270; //@line 1536 "parsermodule.c"
        if ($16) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 1536 "parsermodule.c"
      case 2: // $bb1
        var $17=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $18=((($17))|0)==272; //@line 1536 "parsermodule.c"
        if ($18) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 1536 "parsermodule.c"
      case 3: // $bb2
        var $19=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $20=((($19))|0)==273; //@line 1536 "parsermodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 1536 "parsermodule.c"
      case 4: // $bb3
        var $21=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $22=((($21))|0)==274; //@line 1536 "parsermodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1536 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $24=((($23))|0)==275; //@line 1536 "parsermodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 1536 "parsermodule.c"
      case 6: // $bb5
        var $25=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $26=((($25))|0)==281; //@line 1536 "parsermodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 1536 "parsermodule.c"
      case 7: // $bb6
        var $27=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $28=((($27))|0)==289; //@line 1536 "parsermodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 1536 "parsermodule.c"
      case 8: // $bb7
        var $29=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $30=((($29))|0)==291; //@line 1536 "parsermodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1536 "parsermodule.c"
      case 9: // $bb8
        var $31=HEAP[$ntype]; //@line 1536 "parsermodule.c"
        var $32=((($31))|0)==290; //@line 1536 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1536 "parsermodule.c"
      case 10: // $bb9
        var $33=HEAP[$tree_addr]; //@line 1545 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 1545 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1545 "parsermodule.c"
        var $36=(($35)&4294967295); //@line 1545 "parsermodule.c"
        var $37=_validate_node($36); //@line 1545 "parsermodule.c"
        HEAP[$res]=$37; //@line 1545 "parsermodule.c"
        __label__ = 12; break; //@line 1545 "parsermodule.c"
      case 11: // $bb10
        HEAP[$res]=0; //@line 1547 "parsermodule.c"
        _err_string(((__str86)&4294967295)); //@line 1548 "parsermodule.c"
        __label__ = 12; break; //@line 1548 "parsermodule.c"
      case 12: // $bb11
        __label__ = 15; break; //@line 1548 "parsermodule.c"
      case 13: // $bb12
        var $38=HEAP[$nch]; //@line 1551 "parsermodule.c"
        var $39=((($38))|0)==1; //@line 1551 "parsermodule.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1551 "parsermodule.c"
      case 14: // $bb13
        HEAP[$res]=0; //@line 1552 "parsermodule.c"
        var $40=HEAP[$tree_addr]; //@line 1553 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 1553 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1553 "parsermodule.c"
        var $43=(($42)&4294967295); //@line 1553 "parsermodule.c"
        var $44=(($43)&4294967295); //@line 1553 "parsermodule.c"
        var $45=HEAP[$44]; //@line 1553 "parsermodule.c"
        var $46=reSign(($45), 16, 0); //@line 1553 "parsermodule.c"
        var $47=HEAP[_parser_error]; //@line 1553 "parsermodule.c"
        var $48=_PyErr_Format($47, ((__str87)&4294967295), $46); //@line 1553 "parsermodule.c"
        __label__ = 15; break; //@line 1553 "parsermodule.c"
      case 15: // $bb14
        var $49=HEAP[$res]; //@line 1557 "parsermodule.c"
        HEAP[$0]=$49; //@line 1557 "parsermodule.c"
        var $50=HEAP[$0]; //@line 1557 "parsermodule.c"
        HEAP[$retval]=$50; //@line 1557 "parsermodule.c"
        __label__ = 16; break; //@line 1557 "parsermodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 1557 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1557 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_compound_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_95=__stackBase__+12;
        var $res=__stackBase__+16;
        var $ntype=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1568 "parsermodule.c"
        var $2=_validate_ntype($1, 292); //@line 1568 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1568 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1568 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1568 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str88)&4294967295)); //@line 1568 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1568 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1568 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_95]=1; //@line 1568 "parsermodule.c"
        __label__ = 4; break; //@line 1568 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_95]=0; //@line 1568 "parsermodule.c"
        __label__ = 4; break; //@line 1568 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_95]; //@line 1568 "parsermodule.c"
        HEAP[$res]=$7; //@line 1568 "parsermodule.c"
        var $8=HEAP[$res]; //@line 1571 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 1571 "parsermodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1571 "parsermodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1572 "parsermodule.c"
        __label__ = 17; break; //@line 1572 "parsermodule.c"
      case 6: // $bb5
        var $10=HEAP[$tree_addr]; //@line 1574 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1574 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1574 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1574 "parsermodule.c"
        HEAP[$tree_addr]=$13; //@line 1574 "parsermodule.c"
        var $14=HEAP[$tree_addr]; //@line 1575 "parsermodule.c"
        var $15=(($14)&4294967295); //@line 1575 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1575 "parsermodule.c"
        var $17=reSign(($16), 16, 0); //@line 1575 "parsermodule.c"
        HEAP[$ntype]=$17; //@line 1575 "parsermodule.c"
        var $18=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $19=((($18))|0)==293; //@line 1576 "parsermodule.c"
        if ($19) { __label__ = 14; break; } else { __label__ = 7; break; } //@line 1576 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $21=((($20))|0)==294; //@line 1576 "parsermodule.c"
        if ($21) { __label__ = 14; break; } else { __label__ = 8; break; } //@line 1576 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $23=((($22))|0)==295; //@line 1576 "parsermodule.c"
        if ($23) { __label__ = 14; break; } else { __label__ = 9; break; } //@line 1576 "parsermodule.c"
      case 9: // $bb8
        var $24=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $25=((($24))|0)==296; //@line 1576 "parsermodule.c"
        if ($25) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 1576 "parsermodule.c"
      case 10: // $bb9
        var $26=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $27=((($26))|0)==297; //@line 1576 "parsermodule.c"
        if ($27) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 1576 "parsermodule.c"
      case 11: // $bb10
        var $28=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $29=((($28))|0)==262; //@line 1576 "parsermodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1576 "parsermodule.c"
      case 12: // $bb11
        var $30=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $31=((($30))|0)==329; //@line 1576 "parsermodule.c"
        if ($31) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1576 "parsermodule.c"
      case 13: // $bb12
        var $32=HEAP[$ntype]; //@line 1576 "parsermodule.c"
        var $33=((($32))|0)==261; //@line 1576 "parsermodule.c"
        if ($33) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1576 "parsermodule.c"
      case 14: // $bb13
        var $34=HEAP[$tree_addr]; //@line 1584 "parsermodule.c"
        var $35=_validate_node($34); //@line 1584 "parsermodule.c"
        HEAP[$res]=$35; //@line 1584 "parsermodule.c"
        __label__ = 16; break; //@line 1584 "parsermodule.c"
      case 15: // $bb14
        HEAP[$res]=0; //@line 1586 "parsermodule.c"
        var $36=HEAP[$tree_addr]; //@line 1587 "parsermodule.c"
        var $37=(($36)&4294967295); //@line 1587 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1587 "parsermodule.c"
        var $39=reSign(($38), 16, 0); //@line 1587 "parsermodule.c"
        var $40=HEAP[_parser_error]; //@line 1587 "parsermodule.c"
        var $41=_PyErr_Format($40, ((__str89)&4294967295), $39); //@line 1587 "parsermodule.c"
        __label__ = 16; break; //@line 1587 "parsermodule.c"
      case 16: // $bb15
        var $42=HEAP[$res]; //@line 1590 "parsermodule.c"
        HEAP[$0]=$42; //@line 1590 "parsermodule.c"
        __label__ = 17; break; //@line 1590 "parsermodule.c"
      case 17: // $bb16
        var $43=HEAP[$0]; //@line 1572 "parsermodule.c"
        HEAP[$retval]=$43; //@line 1572 "parsermodule.c"
        __label__ = 18; break; //@line 1572 "parsermodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 1572 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1572 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_or_testlist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1596 "parsermodule.c"
        var $2=(($1)&4294967295); //@line 1596 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1596 "parsermodule.c"
        var $4=reSign(($3), 16, 0)==340; //@line 1596 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1596 "parsermodule.c"
      case 1: // $bb
        var $5=HEAP[$tree_addr]; //@line 1597 "parsermodule.c"
        var $6=_validate_yield_expr($5); //@line 1597 "parsermodule.c"
        HEAP[$0]=$6; //@line 1597 "parsermodule.c"
        __label__ = 3; break; //@line 1597 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 1599 "parsermodule.c"
        var $8=_validate_testlist($7); //@line 1599 "parsermodule.c"
        HEAP[$0]=$8; //@line 1599 "parsermodule.c"
        __label__ = 3; break; //@line 1599 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 1597 "parsermodule.c"
        HEAP[$retval]=$9; //@line 1597 "parsermodule.c"
        __label__ = 4; break; //@line 1597 "parsermodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1597 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1597 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_100=__stackBase__+12;
        var $iftmp_99=__stackBase__+16;
        var $iftmp_98=__stackBase__+20;
        var $iftmp_97=__stackBase__+24;
        var $j=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $res=__stackBase__+36;
        var $s=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1606 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1606 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1606 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1606 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1609 "parsermodule.c"
        var $5=_validate_ntype($4, 270); //@line 1609 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1609 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1609 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1609 "parsermodule.c"
        var $8=($7) & 1; //@line 1609 "parsermodule.c"
        var $9=((($8)) & 255); //@line 1609 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 1609 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1609 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 1609 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 1609 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1609 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 1609 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1609 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1609 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1609 "parsermodule.c"
        var $14=_validate_testlist($13); //@line 1609 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 1609 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1609 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_97]=1; //@line 1609 "parsermodule.c"
        __label__ = 5; break; //@line 1609 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_97]=0; //@line 1609 "parsermodule.c"
        __label__ = 5; break; //@line 1609 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_97]; //@line 1609 "parsermodule.c"
        HEAP[$res]=$16; //@line 1609 "parsermodule.c"
        var $17=HEAP[$res]; //@line 1611 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 1611 "parsermodule.c"
        if ($18) { __label__ = 30; break; } else { __label__ = 6; break; } //@line 1611 "parsermodule.c"
      case 6: // $bb8
        var $19=HEAP[$nch]; //@line 1611 "parsermodule.c"
        var $20=((($19))|0)!=3; //@line 1611 "parsermodule.c"
        if ($20) { __label__ = 30; break; } else { __label__ = 7; break; } //@line 1611 "parsermodule.c"
      case 7: // $bb9
        var $21=HEAP[$tree_addr]; //@line 1611 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1611 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1611 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 1611 "parsermodule.c"
        var $25=(($24)&4294967295); //@line 1611 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1611 "parsermodule.c"
        var $27=reSign(($26), 16, 0)!=271; //@line 1611 "parsermodule.c"
        if ($27) { __label__ = 30; break; } else { __label__ = 8; break; } //@line 1611 "parsermodule.c"
      case 8: // $bb10
        var $28=HEAP[$tree_addr]; //@line 1613 "parsermodule.c"
        var $29=(($28+20)&4294967295); //@line 1613 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1613 "parsermodule.c"
        var $31=(($30+24)&4294967295); //@line 1613 "parsermodule.c"
        var $32=_validate_numnodes($31, 1, ((__str90)&4294967295)); //@line 1613 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 1613 "parsermodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 1613 "parsermodule.c"
      case 9: // $bb11
        var $34=HEAP[$tree_addr]; //@line 1613 "parsermodule.c"
        var $35=(($34+20)&4294967295); //@line 1613 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1613 "parsermodule.c"
        var $37=(($36+48)&4294967295); //@line 1613 "parsermodule.c"
        var $38=_validate_yield_or_testlist($37); //@line 1613 "parsermodule.c"
        var $39=((($38))|0)==0; //@line 1613 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1613 "parsermodule.c"
      case 10: // $bb12
        HEAP[$iftmp_98]=1; //@line 1613 "parsermodule.c"
        __label__ = 12; break; //@line 1613 "parsermodule.c"
      case 11: // $bb13
        HEAP[$iftmp_98]=0; //@line 1613 "parsermodule.c"
        __label__ = 12; break; //@line 1613 "parsermodule.c"
      case 12: // $bb14
        var $40=HEAP[$iftmp_98]; //@line 1613 "parsermodule.c"
        HEAP[$res]=$40; //@line 1613 "parsermodule.c"
        var $41=HEAP[$res]; //@line 1616 "parsermodule.c"
        var $42=((($41))|0)!=0; //@line 1616 "parsermodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 29; break; } //@line 1616 "parsermodule.c"
      case 13: // $bb15
        var $43=HEAP[$tree_addr]; //@line 1617 "parsermodule.c"
        var $44=(($43+20)&4294967295); //@line 1617 "parsermodule.c"
        var $45=HEAP[$44]; //@line 1617 "parsermodule.c"
        var $46=(($45+24)&4294967295); //@line 1617 "parsermodule.c"
        var $47=(($46+20)&4294967295); //@line 1617 "parsermodule.c"
        var $48=HEAP[$47]; //@line 1617 "parsermodule.c"
        var $49=(($48)&4294967295); //@line 1617 "parsermodule.c"
        var $50=(($49+4)&4294967295); //@line 1617 "parsermodule.c"
        var $51=HEAP[$50]; //@line 1617 "parsermodule.c"
        HEAP[$s]=$51; //@line 1617 "parsermodule.c"
        var $52=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $53=_strcmp($52, ((__str91)&4294967295)); //@line 1619 "parsermodule.c"
        var $54=((($53))|0)==0; //@line 1619 "parsermodule.c"
        if ($54) { __label__ = 25; break; } else { __label__ = 14; break; } //@line 1619 "parsermodule.c"
      case 14: // $bb16
        var $55=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $56=_strcmp($55, ((__str92)&4294967295)); //@line 1619 "parsermodule.c"
        var $57=((($56))|0)==0; //@line 1619 "parsermodule.c"
        if ($57) { __label__ = 25; break; } else { __label__ = 15; break; } //@line 1619 "parsermodule.c"
      case 15: // $bb17
        var $58=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $59=_strcmp($58, ((__str93)&4294967295)); //@line 1619 "parsermodule.c"
        var $60=((($59))|0)==0; //@line 1619 "parsermodule.c"
        if ($60) { __label__ = 25; break; } else { __label__ = 16; break; } //@line 1619 "parsermodule.c"
      case 16: // $bb18
        var $61=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $62=_strcmp($61, ((__str94)&4294967295)); //@line 1619 "parsermodule.c"
        var $63=((($62))|0)==0; //@line 1619 "parsermodule.c"
        if ($63) { __label__ = 25; break; } else { __label__ = 17; break; } //@line 1619 "parsermodule.c"
      case 17: // $bb19
        var $64=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $65=_strcmp($64, ((__str95)&4294967295)); //@line 1619 "parsermodule.c"
        var $66=((($65))|0)==0; //@line 1619 "parsermodule.c"
        if ($66) { __label__ = 25; break; } else { __label__ = 18; break; } //@line 1619 "parsermodule.c"
      case 18: // $bb20
        var $67=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $68=_strcmp($67, ((__str96)&4294967295)); //@line 1619 "parsermodule.c"
        var $69=((($68))|0)==0; //@line 1619 "parsermodule.c"
        if ($69) { __label__ = 25; break; } else { __label__ = 19; break; } //@line 1619 "parsermodule.c"
      case 19: // $bb21
        var $70=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $71=_strcmp($70, ((__str97)&4294967295)); //@line 1619 "parsermodule.c"
        var $72=((($71))|0)==0; //@line 1619 "parsermodule.c"
        if ($72) { __label__ = 25; break; } else { __label__ = 20; break; } //@line 1619 "parsermodule.c"
      case 20: // $bb22
        var $73=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $74=_strcmp($73, ((__str98)&4294967295)); //@line 1619 "parsermodule.c"
        var $75=((($74))|0)==0; //@line 1619 "parsermodule.c"
        if ($75) { __label__ = 25; break; } else { __label__ = 21; break; } //@line 1619 "parsermodule.c"
      case 21: // $bb23
        var $76=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $77=_strcmp($76, ((__str99)&4294967295)); //@line 1619 "parsermodule.c"
        var $78=((($77))|0)==0; //@line 1619 "parsermodule.c"
        if ($78) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 1619 "parsermodule.c"
      case 22: // $bb24
        var $79=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $80=_strcmp($79, ((__str100)&4294967295)); //@line 1619 "parsermodule.c"
        var $81=((($80))|0)==0; //@line 1619 "parsermodule.c"
        if ($81) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 1619 "parsermodule.c"
      case 23: // $bb25
        var $82=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $83=_strcmp($82, ((__str101)&4294967295)); //@line 1619 "parsermodule.c"
        var $84=((($83))|0)==0; //@line 1619 "parsermodule.c"
        if ($84) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1619 "parsermodule.c"
      case 24: // $bb26
        var $85=HEAP[$s]; //@line 1619 "parsermodule.c"
        var $86=_strcmp($85, ((__str102)&4294967295)); //@line 1619 "parsermodule.c"
        var $87=((($86))|0)==0; //@line 1619 "parsermodule.c"
        if ($87) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1619 "parsermodule.c"
      case 25: // $bb27
        HEAP[$iftmp_99]=1; //@line 1619 "parsermodule.c"
        __label__ = 27; break; //@line 1619 "parsermodule.c"
      case 26: // $bb28
        HEAP[$iftmp_99]=0; //@line 1619 "parsermodule.c"
        __label__ = 27; break; //@line 1619 "parsermodule.c"
      case 27: // $bb29
        var $88=HEAP[$iftmp_99]; //@line 1619 "parsermodule.c"
        HEAP[$res]=$88; //@line 1619 "parsermodule.c"
        var $89=HEAP[$res]; //@line 1631 "parsermodule.c"
        var $90=((($89))|0)==0; //@line 1631 "parsermodule.c"
        if ($90) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1631 "parsermodule.c"
      case 28: // $bb30
        _err_string(((__str103)&4294967295)); //@line 1632 "parsermodule.c"
        __label__ = 29; break; //@line 1632 "parsermodule.c"
      case 29: // $bb31
        __label__ = 38; break; //@line 1632 "parsermodule.c"
      case 30: // $bb32
        HEAP[$j]=1; //@line 1636 "parsermodule.c"
        __label__ = 36; break; //@line 1636 "parsermodule.c"
      case 31: // $bb33
        var $91=HEAP[$tree_addr]; //@line 1637 "parsermodule.c"
        var $92=(($91+20)&4294967295); //@line 1637 "parsermodule.c"
        var $93=HEAP[$92]; //@line 1637 "parsermodule.c"
        var $94=HEAP[$j]; //@line 1637 "parsermodule.c"
        var $95=(($93+24*$94)&4294967295); //@line 1637 "parsermodule.c"
        var $96=_validate_terminal($95, 22, ((__str70)&4294967295)); //@line 1637 "parsermodule.c"
        var $97=((($96))|0)==0; //@line 1637 "parsermodule.c"
        if ($97) { __label__ = 34; break; } else { __label__ = 32; break; } //@line 1637 "parsermodule.c"
      case 32: // $bb34
        var $98=HEAP[$tree_addr]; //@line 1637 "parsermodule.c"
        var $99=(($98+20)&4294967295); //@line 1637 "parsermodule.c"
        var $100=HEAP[$99]; //@line 1637 "parsermodule.c"
        var $101=HEAP[$j]; //@line 1637 "parsermodule.c"
        var $102=((($101) + 1)&4294967295); //@line 1637 "parsermodule.c"
        var $103=(($100+24*$102)&4294967295); //@line 1637 "parsermodule.c"
        var $104=_validate_yield_or_testlist($103); //@line 1637 "parsermodule.c"
        var $105=((($104))|0)==0; //@line 1637 "parsermodule.c"
        if ($105) { __label__ = 34; break; } else { __label__ = 33; break; } //@line 1637 "parsermodule.c"
      case 33: // $bb35
        HEAP[$iftmp_100]=1; //@line 1637 "parsermodule.c"
        __label__ = 35; break; //@line 1637 "parsermodule.c"
      case 34: // $bb36
        HEAP[$iftmp_100]=0; //@line 1637 "parsermodule.c"
        __label__ = 35; break; //@line 1637 "parsermodule.c"
      case 35: // $bb37
        var $106=HEAP[$iftmp_100]; //@line 1637 "parsermodule.c"
        HEAP[$res]=$106; //@line 1637 "parsermodule.c"
        var $107=HEAP[$j]; //@line 1636 "parsermodule.c"
        var $108=((($107) + 2)&4294967295); //@line 1636 "parsermodule.c"
        HEAP[$j]=$108; //@line 1636 "parsermodule.c"
        __label__ = 36; break; //@line 1636 "parsermodule.c"
      case 36: // $bb38
        var $109=HEAP[$res]; //@line 1636 "parsermodule.c"
        var $110=((($109))|0)==0; //@line 1636 "parsermodule.c"
        if ($110) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1636 "parsermodule.c"
      case 37: // $bb39
        var $111=HEAP[$j]; //@line 1636 "parsermodule.c"
        var $112=HEAP[$nch]; //@line 1636 "parsermodule.c"
        var $113=((($111))|0) < ((($112))|0); //@line 1636 "parsermodule.c"
        if ($113) { __label__ = 31; break; } else { __label__ = 38; break; } //@line 1636 "parsermodule.c"
      case 38: // $bb40
        var $114=HEAP[$res]; //@line 1640 "parsermodule.c"
        HEAP[$0]=$114; //@line 1640 "parsermodule.c"
        var $115=HEAP[$0]; //@line 1640 "parsermodule.c"
        HEAP[$retval]=$115; //@line 1640 "parsermodule.c"
        __label__ = 39; break; //@line 1640 "parsermodule.c"
      case 39: // $return
        var $retval41=HEAP[$retval]; //@line 1640 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 1640 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_print_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_103=__stackBase__+12;
        var $iftmp_102=__stackBase__+16;
        var $iftmp_101=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $sym=__stackBase__+32;
        var $i=__stackBase__+36;
        var $allow_trailing_comma=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1652 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1652 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1652 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1652 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1655 "parsermodule.c"
        var $5=_validate_ntype($4, 272); //@line 1655 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1655 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1655 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1655 "parsermodule.c"
        var $8=((($7))|0) <= 0; //@line 1655 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1655 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 1655 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 1655 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1655 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1655 "parsermodule.c"
        var $13=_validate_terminal($12, 1, ((__str104)&4294967295)); //@line 1655 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 1655 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1655 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_101]=1; //@line 1655 "parsermodule.c"
        __label__ = 5; break; //@line 1655 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_101]=0; //@line 1655 "parsermodule.c"
        __label__ = 5; break; //@line 1655 "parsermodule.c"
      case 5: // $bb4
        var $15=HEAP[$iftmp_101]; //@line 1655 "parsermodule.c"
        HEAP[$res]=$15; //@line 1655 "parsermodule.c"
        var $16=HEAP[$res]; //@line 1657 "parsermodule.c"
        var $17=((($16))|0)!=0; //@line 1657 "parsermodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 31; break; } //@line 1657 "parsermodule.c"
      case 6: // $bb5
        var $18=HEAP[$nch]; //@line 1657 "parsermodule.c"
        var $19=((($18))|0) > 1; //@line 1657 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 31; break; } //@line 1657 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$tree_addr]; //@line 1658 "parsermodule.c"
        var $21=(($20+20)&4294967295); //@line 1658 "parsermodule.c"
        var $22=HEAP[$21]; //@line 1658 "parsermodule.c"
        var $23=(($22+24)&4294967295); //@line 1658 "parsermodule.c"
        var $24=(($23)&4294967295); //@line 1658 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1658 "parsermodule.c"
        var $26=reSign(($25), 16, 0); //@line 1658 "parsermodule.c"
        HEAP[$sym]=$26; //@line 1658 "parsermodule.c"
        HEAP[$i]=1; //@line 1659 "parsermodule.c"
        HEAP[$allow_trailing_comma]=1; //@line 1660 "parsermodule.c"
        var $27=HEAP[$sym]; //@line 1662 "parsermodule.c"
        var $28=((($27))|0)==304; //@line 1662 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1662 "parsermodule.c"
      case 8: // $bb7
        var $29=HEAP[$tree_addr]; //@line 1663 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1663 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1663 "parsermodule.c"
        var $32=HEAP[$i]; //@line 1663 "parsermodule.c"
        var $33=(($31+24*$32)&4294967295); //@line 1663 "parsermodule.c"
        var $34=HEAP[$i]; //@line 1663 "parsermodule.c"
        var $35=((($34) + 1)&4294967295); //@line 1663 "parsermodule.c"
        HEAP[$i]=$35; //@line 1663 "parsermodule.c"
        var $36=_validate_test($33); //@line 1663 "parsermodule.c"
        HEAP[$res]=$36; //@line 1663 "parsermodule.c"
        __label__ = 16; break; //@line 1663 "parsermodule.c"
      case 9: // $bb8
        var $37=HEAP[$nch]; //@line 1665 "parsermodule.c"
        var $38=((($37))|0) <= 2; //@line 1665 "parsermodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1665 "parsermodule.c"
      case 10: // $bb9
        var $39=HEAP[$tree_addr]; //@line 1666 "parsermodule.c"
        var $40=_validate_numnodes($39, 3, ((__str105)&4294967295)); //@line 1666 "parsermodule.c"
        HEAP[$res]=$40; //@line 1666 "parsermodule.c"
        __label__ = 16; break; //@line 1666 "parsermodule.c"
      case 11: // $bb10
        var $41=HEAP[$tree_addr]; //@line 1668 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 1668 "parsermodule.c"
        var $43=HEAP[$42]; //@line 1668 "parsermodule.c"
        var $44=HEAP[$i]; //@line 1668 "parsermodule.c"
        var $45=(($43+24*$44)&4294967295); //@line 1668 "parsermodule.c"
        var $46=_validate_ntype($45, 35); //@line 1668 "parsermodule.c"
        var $47=((($46))|0)==0; //@line 1668 "parsermodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1668 "parsermodule.c"
      case 12: // $bb11
        var $48=HEAP[$tree_addr]; //@line 1668 "parsermodule.c"
        var $49=(($48+20)&4294967295); //@line 1668 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1668 "parsermodule.c"
        var $51=HEAP[$i]; //@line 1668 "parsermodule.c"
        var $52=((($51) + 1)&4294967295); //@line 1668 "parsermodule.c"
        var $53=(($50+24*$52)&4294967295); //@line 1668 "parsermodule.c"
        var $54=_validate_test($53); //@line 1668 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 1668 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1668 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_102]=1; //@line 1668 "parsermodule.c"
        __label__ = 15; break; //@line 1668 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_102]=0; //@line 1668 "parsermodule.c"
        __label__ = 15; break; //@line 1668 "parsermodule.c"
      case 15: // $bb14
        var $56=HEAP[$iftmp_102]; //@line 1668 "parsermodule.c"
        HEAP[$res]=$56; //@line 1668 "parsermodule.c"
        var $57=HEAP[$i]; //@line 1670 "parsermodule.c"
        var $58=((($57) + 2)&4294967295); //@line 1670 "parsermodule.c"
        HEAP[$i]=$58; //@line 1670 "parsermodule.c"
        HEAP[$allow_trailing_comma]=0; //@line 1671 "parsermodule.c"
        __label__ = 16; break; //@line 1671 "parsermodule.c"
      case 16: // $bb15
        var $59=HEAP[$res]; //@line 1674 "parsermodule.c"
        var $60=((($59))|0)!=0; //@line 1674 "parsermodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 31; break; } //@line 1674 "parsermodule.c"
      case 17: // $bb16
        __label__ = 23; break; //@line 1674 "parsermodule.c"
      case 18: // $bb17
        var $61=HEAP[$tree_addr]; //@line 1677 "parsermodule.c"
        var $62=(($61+20)&4294967295); //@line 1677 "parsermodule.c"
        var $63=HEAP[$62]; //@line 1677 "parsermodule.c"
        var $64=HEAP[$i]; //@line 1677 "parsermodule.c"
        var $65=(($63+24*$64)&4294967295); //@line 1677 "parsermodule.c"
        var $66=_validate_terminal($65, 12, ((__str52)&4294967295)); //@line 1677 "parsermodule.c"
        var $67=((($66))|0)==0; //@line 1677 "parsermodule.c"
        if ($67) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 1677 "parsermodule.c"
      case 19: // $bb18
        var $68=HEAP[$tree_addr]; //@line 1677 "parsermodule.c"
        var $69=(($68+20)&4294967295); //@line 1677 "parsermodule.c"
        var $70=HEAP[$69]; //@line 1677 "parsermodule.c"
        var $71=HEAP[$i]; //@line 1677 "parsermodule.c"
        var $72=((($71) + 1)&4294967295); //@line 1677 "parsermodule.c"
        var $73=(($70+24*$72)&4294967295); //@line 1677 "parsermodule.c"
        var $74=_validate_test($73); //@line 1677 "parsermodule.c"
        var $75=((($74))|0)==0; //@line 1677 "parsermodule.c"
        if ($75) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1677 "parsermodule.c"
      case 20: // $bb19
        HEAP[$iftmp_103]=1; //@line 1677 "parsermodule.c"
        __label__ = 22; break; //@line 1677 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_103]=0; //@line 1677 "parsermodule.c"
        __label__ = 22; break; //@line 1677 "parsermodule.c"
      case 22: // $bb21
        var $76=HEAP[$iftmp_103]; //@line 1677 "parsermodule.c"
        HEAP[$res]=$76; //@line 1677 "parsermodule.c"
        HEAP[$allow_trailing_comma]=1; //@line 1679 "parsermodule.c"
        var $77=HEAP[$i]; //@line 1680 "parsermodule.c"
        var $78=((($77) + 2)&4294967295); //@line 1680 "parsermodule.c"
        HEAP[$i]=$78; //@line 1680 "parsermodule.c"
        __label__ = 23; break; //@line 1680 "parsermodule.c"
      case 23: // $bb22
        var $79=HEAP[$res]; //@line 1676 "parsermodule.c"
        var $80=((($79))|0)==0; //@line 1676 "parsermodule.c"
        if ($80) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1676 "parsermodule.c"
      case 24: // $bb23
        var $81=HEAP[$i]; //@line 1676 "parsermodule.c"
        var $82=((($81) + 2)&4294967295); //@line 1676 "parsermodule.c"
        var $83=HEAP[$nch]; //@line 1676 "parsermodule.c"
        var $84=((($82))|0) <= ((($83))|0); //@line 1676 "parsermodule.c"
        if ($84) { __label__ = 18; break; } else { __label__ = 25; break; } //@line 1676 "parsermodule.c"
      case 25: // $bb24
        var $85=HEAP[$res]; //@line 1682 "parsermodule.c"
        var $86=((($85))|0)==0; //@line 1682 "parsermodule.c"
        if ($86) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 1682 "parsermodule.c"
      case 26: // $bb25
        var $87=HEAP[$allow_trailing_comma]; //@line 1682 "parsermodule.c"
        var $88=((($87))|0)!=0; //@line 1682 "parsermodule.c"
        if ($88) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 1682 "parsermodule.c"
      case 27: // $bb26
        var $89=HEAP[$tree_addr]; //@line 1683 "parsermodule.c"
        var $90=HEAP[$i]; //@line 1683 "parsermodule.c"
        var $91=_validate_numnodes($89, $90, ((__str105)&4294967295)); //@line 1683 "parsermodule.c"
        HEAP[$res]=$91; //@line 1683 "parsermodule.c"
        __label__ = 31; break; //@line 1683 "parsermodule.c"
      case 28: // $bb27
        var $92=HEAP[$res]; //@line 1684 "parsermodule.c"
        var $93=((($92))|0)!=0; //@line 1684 "parsermodule.c"
        if ($93) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 1684 "parsermodule.c"
      case 29: // $bb28
        var $94=HEAP[$i]; //@line 1684 "parsermodule.c"
        var $95=HEAP[$nch]; //@line 1684 "parsermodule.c"
        var $96=((($94))|0) < ((($95))|0); //@line 1684 "parsermodule.c"
        if ($96) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1684 "parsermodule.c"
      case 30: // $bb29
        var $97=HEAP[$tree_addr]; //@line 1685 "parsermodule.c"
        var $98=(($97+20)&4294967295); //@line 1685 "parsermodule.c"
        var $99=HEAP[$98]; //@line 1685 "parsermodule.c"
        var $100=HEAP[$i]; //@line 1685 "parsermodule.c"
        var $101=(($99+24*$100)&4294967295); //@line 1685 "parsermodule.c"
        var $102=_validate_terminal($101, 12, ((__str52)&4294967295)); //@line 1685 "parsermodule.c"
        HEAP[$res]=$102; //@line 1685 "parsermodule.c"
        __label__ = 31; break; //@line 1685 "parsermodule.c"
      case 31: // $bb30
        var $103=HEAP[$res]; //@line 1688 "parsermodule.c"
        HEAP[$0]=$103; //@line 1688 "parsermodule.c"
        var $104=HEAP[$0]; //@line 1688 "parsermodule.c"
        HEAP[$retval]=$104; //@line 1688 "parsermodule.c"
        __label__ = 32; break; //@line 1688 "parsermodule.c"
      case 32: // $return
        var $retval31=HEAP[$retval]; //@line 1688 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval31; //@line 1688 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_del_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_104=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1695 "parsermodule.c"
        var $2=_validate_numnodes($1, 2, ((__str106)&4294967295)); //@line 1695 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1695 "parsermodule.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1695 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1695 "parsermodule.c"
        var $5=(($4+20)&4294967295); //@line 1695 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1695 "parsermodule.c"
        var $7=(($6)&4294967295); //@line 1695 "parsermodule.c"
        var $8=_validate_terminal($7, 1, ((__str107)&4294967295)); //@line 1695 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 1695 "parsermodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1695 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 1695 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1695 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1695 "parsermodule.c"
        var $13=(($12+24)&4294967295); //@line 1695 "parsermodule.c"
        var $14=_validate_exprlist($13); //@line 1695 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 1695 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1695 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_104]=1; //@line 1695 "parsermodule.c"
        __label__ = 5; break; //@line 1695 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_104]=0; //@line 1695 "parsermodule.c"
        __label__ = 5; break; //@line 1695 "parsermodule.c"
      case 5: // $bb4
        var $16=HEAP[$iftmp_104]; //@line 1695 "parsermodule.c"
        HEAP[$0]=$16; //@line 1695 "parsermodule.c"
        var $17=HEAP[$0]; //@line 1695 "parsermodule.c"
        HEAP[$retval]=$17; //@line 1695 "parsermodule.c"
        __label__ = 6; break; //@line 1695 "parsermodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1695 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1695 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_return_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_105=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1704 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1704 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1704 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1704 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1707 "parsermodule.c"
        var $5=_validate_ntype($4, 278); //@line 1707 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1707 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1707 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1707 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 1707 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1707 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1707 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 1707 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1707 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 1707 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 1707 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1707 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 1707 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str108)&4294967295)); //@line 1707 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 1707 "parsermodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1707 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_105]=1; //@line 1707 "parsermodule.c"
        __label__ = 6; break; //@line 1707 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_105]=0; //@line 1707 "parsermodule.c"
        __label__ = 6; break; //@line 1707 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$iftmp_105]; //@line 1707 "parsermodule.c"
        HEAP[$res]=$17; //@line 1707 "parsermodule.c"
        var $18=HEAP[$res]; //@line 1709 "parsermodule.c"
        var $19=((($18))|0)!=0; //@line 1709 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1709 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$nch]; //@line 1709 "parsermodule.c"
        var $21=((($20))|0)==2; //@line 1709 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1709 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$tree_addr]; //@line 1710 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 1710 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1710 "parsermodule.c"
        var $25=(($24+24)&4294967295); //@line 1710 "parsermodule.c"
        var $26=_validate_testlist($25); //@line 1710 "parsermodule.c"
        HEAP[$res]=$26; //@line 1710 "parsermodule.c"
        __label__ = 9; break; //@line 1710 "parsermodule.c"
      case 9: // $bb8
        var $27=HEAP[$res]; //@line 1712 "parsermodule.c"
        HEAP[$0]=$27; //@line 1712 "parsermodule.c"
        var $28=HEAP[$0]; //@line 1712 "parsermodule.c"
        HEAP[$retval]=$28; //@line 1712 "parsermodule.c"
        __label__ = 10; break; //@line 1712 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1712 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1712 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_raise_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_109=__stackBase__+12;
        var $iftmp_108=__stackBase__+16;
        var $iftmp_107=__stackBase__+20;
        var $iftmp_106=__stackBase__+24;
        var $nch=__stackBase__+28;
        var $res=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1719 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1719 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1719 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1719 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1721 "parsermodule.c"
        var $5=_validate_ntype($4, 280); //@line 1721 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1721 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 1721 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1721 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 1721 "parsermodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1721 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1721 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 1721 "parsermodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1721 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 1721 "parsermodule.c"
        var $12=((($11))|0)==4; //@line 1721 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1721 "parsermodule.c"
      case 4: // $bb3
        var $13=HEAP[$nch]; //@line 1721 "parsermodule.c"
        var $14=((($13))|0)==6; //@line 1721 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1721 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_106]=1; //@line 1721 "parsermodule.c"
        __label__ = 7; break; //@line 1721 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_106]=0; //@line 1721 "parsermodule.c"
        __label__ = 7; break; //@line 1721 "parsermodule.c"
      case 7: // $bb6
        var $15=HEAP[$iftmp_106]; //@line 1721 "parsermodule.c"
        HEAP[$res]=$15; //@line 1721 "parsermodule.c"
        var $16=HEAP[$res]; //@line 1723 "parsermodule.c"
        var $17=((($16))|0)!=0; //@line 1723 "parsermodule.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 25; break; } //@line 1723 "parsermodule.c"
      case 8: // $bb7
        var $18=HEAP[$tree_addr]; //@line 1724 "parsermodule.c"
        var $19=(($18+20)&4294967295); //@line 1724 "parsermodule.c"
        var $20=HEAP[$19]; //@line 1724 "parsermodule.c"
        var $21=(($20)&4294967295); //@line 1724 "parsermodule.c"
        var $22=_validate_terminal($21, 1, ((__str109)&4294967295)); //@line 1724 "parsermodule.c"
        HEAP[$res]=$22; //@line 1724 "parsermodule.c"
        var $23=HEAP[$res]; //@line 1725 "parsermodule.c"
        var $24=((($23))|0)!=0; //@line 1725 "parsermodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1725 "parsermodule.c"
      case 9: // $bb8
        var $25=HEAP[$nch]; //@line 1725 "parsermodule.c"
        var $26=((($25))|0) > 1; //@line 1725 "parsermodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1725 "parsermodule.c"
      case 10: // $bb9
        var $27=HEAP[$tree_addr]; //@line 1726 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 1726 "parsermodule.c"
        var $29=HEAP[$28]; //@line 1726 "parsermodule.c"
        var $30=(($29+24)&4294967295); //@line 1726 "parsermodule.c"
        var $31=_validate_test($30); //@line 1726 "parsermodule.c"
        HEAP[$res]=$31; //@line 1726 "parsermodule.c"
        __label__ = 11; break; //@line 1726 "parsermodule.c"
      case 11: // $bb10
        var $32=HEAP[$res]; //@line 1727 "parsermodule.c"
        var $33=((($32))|0)!=0; //@line 1727 "parsermodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 24; break; } //@line 1727 "parsermodule.c"
      case 12: // $bb11
        var $34=HEAP[$nch]; //@line 1727 "parsermodule.c"
        var $35=((($34))|0) > 2; //@line 1727 "parsermodule.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 24; break; } //@line 1727 "parsermodule.c"
      case 13: // $bb12
        var $36=HEAP[$tree_addr]; //@line 1728 "parsermodule.c"
        var $37=(($36+20)&4294967295); //@line 1728 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1728 "parsermodule.c"
        var $39=(($38+48)&4294967295); //@line 1728 "parsermodule.c"
        var $40=_validate_terminal($39, 12, ((__str52)&4294967295)); //@line 1728 "parsermodule.c"
        var $41=((($40))|0)==0; //@line 1728 "parsermodule.c"
        if ($41) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1728 "parsermodule.c"
      case 14: // $bb13
        var $42=HEAP[$tree_addr]; //@line 1728 "parsermodule.c"
        var $43=(($42+20)&4294967295); //@line 1728 "parsermodule.c"
        var $44=HEAP[$43]; //@line 1728 "parsermodule.c"
        var $45=(($44+72)&4294967295); //@line 1728 "parsermodule.c"
        var $46=_validate_test($45); //@line 1728 "parsermodule.c"
        var $47=((($46))|0)==0; //@line 1728 "parsermodule.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1728 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_107]=1; //@line 1728 "parsermodule.c"
        __label__ = 17; break; //@line 1728 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_107]=0; //@line 1728 "parsermodule.c"
        __label__ = 17; break; //@line 1728 "parsermodule.c"
      case 17: // $bb16
        var $48=HEAP[$iftmp_107]; //@line 1728 "parsermodule.c"
        HEAP[$res]=$48; //@line 1728 "parsermodule.c"
        var $49=HEAP[$res]; //@line 1730 "parsermodule.c"
        var $50=((($49))|0)!=0; //@line 1730 "parsermodule.c"
        if ($50) { __label__ = 18; break; } else { __label__ = 24; break; } //@line 1730 "parsermodule.c"
      case 18: // $bb17
        var $51=HEAP[$nch]; //@line 1730 "parsermodule.c"
        var $52=((($51))|0) > 4; //@line 1730 "parsermodule.c"
        if ($52) { __label__ = 19; break; } else { __label__ = 24; break; } //@line 1730 "parsermodule.c"
      case 19: // $bb18
        var $53=HEAP[$tree_addr]; //@line 1731 "parsermodule.c"
        var $54=(($53+20)&4294967295); //@line 1731 "parsermodule.c"
        var $55=HEAP[$54]; //@line 1731 "parsermodule.c"
        var $56=(($55+96)&4294967295); //@line 1731 "parsermodule.c"
        var $57=_validate_terminal($56, 12, ((__str52)&4294967295)); //@line 1731 "parsermodule.c"
        var $58=((($57))|0)==0; //@line 1731 "parsermodule.c"
        if ($58) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1731 "parsermodule.c"
      case 20: // $bb19
        var $59=HEAP[$tree_addr]; //@line 1731 "parsermodule.c"
        var $60=(($59+20)&4294967295); //@line 1731 "parsermodule.c"
        var $61=HEAP[$60]; //@line 1731 "parsermodule.c"
        var $62=(($61+120)&4294967295); //@line 1731 "parsermodule.c"
        var $63=_validate_test($62); //@line 1731 "parsermodule.c"
        var $64=((($63))|0)==0; //@line 1731 "parsermodule.c"
        if ($64) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1731 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_108]=1; //@line 1731 "parsermodule.c"
        __label__ = 23; break; //@line 1731 "parsermodule.c"
      case 22: // $bb21
        HEAP[$iftmp_108]=0; //@line 1731 "parsermodule.c"
        __label__ = 23; break; //@line 1731 "parsermodule.c"
      case 23: // $bb22
        var $65=HEAP[$iftmp_108]; //@line 1731 "parsermodule.c"
        HEAP[$res]=$65; //@line 1731 "parsermodule.c"
        __label__ = 24; break; //@line 1731 "parsermodule.c"
      case 24: // $bb23
        __label__ = 26; break; //@line 1731 "parsermodule.c"
      case 25: // $bb24
        var $66=HEAP[$tree_addr]; //@line 1736 "parsermodule.c"
        var $67=_validate_numnodes($66, 2, ((__str109)&4294967295)); //@line 1736 "parsermodule.c"
        __label__ = 26; break; //@line 1736 "parsermodule.c"
      case 26: // $bb25
        var $68=HEAP[$res]; //@line 1737 "parsermodule.c"
        var $69=((($68))|0)!=0; //@line 1737 "parsermodule.c"
        if ($69) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 1737 "parsermodule.c"
      case 27: // $bb26
        var $70=HEAP[$nch]; //@line 1737 "parsermodule.c"
        var $71=((($70))|0)==4; //@line 1737 "parsermodule.c"
        if ($71) { __label__ = 28; break; } else { __label__ = 33; break; } //@line 1737 "parsermodule.c"
      case 28: // $bb27
        var $72=HEAP[$tree_addr]; //@line 1738 "parsermodule.c"
        var $73=(($72+20)&4294967295); //@line 1738 "parsermodule.c"
        var $74=HEAP[$73]; //@line 1738 "parsermodule.c"
        var $75=(($74+48)&4294967295); //@line 1738 "parsermodule.c"
        var $76=_validate_terminal($75, 12, ((__str52)&4294967295)); //@line 1738 "parsermodule.c"
        var $77=((($76))|0)==0; //@line 1738 "parsermodule.c"
        if ($77) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 1738 "parsermodule.c"
      case 29: // $bb28
        var $78=HEAP[$tree_addr]; //@line 1738 "parsermodule.c"
        var $79=(($78+20)&4294967295); //@line 1738 "parsermodule.c"
        var $80=HEAP[$79]; //@line 1738 "parsermodule.c"
        var $81=(($80+72)&4294967295); //@line 1738 "parsermodule.c"
        var $82=_validate_test($81); //@line 1738 "parsermodule.c"
        var $83=((($82))|0)==0; //@line 1738 "parsermodule.c"
        if ($83) { __label__ = 31; break; } else { __label__ = 30; break; } //@line 1738 "parsermodule.c"
      case 30: // $bb29
        HEAP[$iftmp_109]=1; //@line 1738 "parsermodule.c"
        __label__ = 32; break; //@line 1738 "parsermodule.c"
      case 31: // $bb30
        HEAP[$iftmp_109]=0; //@line 1738 "parsermodule.c"
        __label__ = 32; break; //@line 1738 "parsermodule.c"
      case 32: // $bb31
        var $84=HEAP[$iftmp_109]; //@line 1738 "parsermodule.c"
        HEAP[$res]=$84; //@line 1738 "parsermodule.c"
        __label__ = 33; break; //@line 1738 "parsermodule.c"
      case 33: // $bb32
        var $85=HEAP[$res]; //@line 1741 "parsermodule.c"
        HEAP[$0]=$85; //@line 1741 "parsermodule.c"
        var $86=HEAP[$0]; //@line 1741 "parsermodule.c"
        HEAP[$retval]=$86; //@line 1741 "parsermodule.c"
        __label__ = 34; break; //@line 1741 "parsermodule.c"
      case 34: // $return
        var $retval33=HEAP[$retval]; //@line 1741 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 1741 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_110=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1750 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1750 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1750 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1750 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1753 "parsermodule.c"
        var $5=_validate_ntype($4, 340); //@line 1753 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1753 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1753 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1753 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 1753 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1753 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1753 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 1753 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1753 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 1753 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 1753 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1753 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 1753 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str110)&4294967295)); //@line 1753 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 1753 "parsermodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1753 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_110]=1; //@line 1753 "parsermodule.c"
        __label__ = 6; break; //@line 1753 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_110]=0; //@line 1753 "parsermodule.c"
        __label__ = 6; break; //@line 1753 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$iftmp_110]; //@line 1753 "parsermodule.c"
        HEAP[$res]=$17; //@line 1753 "parsermodule.c"
        var $18=HEAP[$res]; //@line 1755 "parsermodule.c"
        var $19=((($18))|0)!=0; //@line 1755 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1755 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$nch]; //@line 1755 "parsermodule.c"
        var $21=((($20))|0)==2; //@line 1755 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1755 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$tree_addr]; //@line 1756 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 1756 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1756 "parsermodule.c"
        var $25=(($24+24)&4294967295); //@line 1756 "parsermodule.c"
        var $26=_validate_testlist($25); //@line 1756 "parsermodule.c"
        HEAP[$res]=$26; //@line 1756 "parsermodule.c"
        __label__ = 9; break; //@line 1756 "parsermodule.c"
      case 9: // $bb8
        var $27=HEAP[$res]; //@line 1758 "parsermodule.c"
        HEAP[$0]=$27; //@line 1758 "parsermodule.c"
        var $28=HEAP[$0]; //@line 1758 "parsermodule.c"
        HEAP[$retval]=$28; //@line 1758 "parsermodule.c"
        __label__ = 10; break; //@line 1758 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1758 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1758 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_111=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1767 "parsermodule.c"
        var $2=_validate_ntype($1, 279); //@line 1767 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1767 "parsermodule.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1767 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1767 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str111)&4294967295)); //@line 1767 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1767 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1767 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 1767 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 1767 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1767 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 1767 "parsermodule.c"
        var $11=_validate_yield_expr($10); //@line 1767 "parsermodule.c"
        var $12=((($11))|0)==0; //@line 1767 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1767 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_111]=1; //@line 1767 "parsermodule.c"
        __label__ = 5; break; //@line 1767 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_111]=0; //@line 1767 "parsermodule.c"
        __label__ = 5; break; //@line 1767 "parsermodule.c"
      case 5: // $bb4
        var $13=HEAP[$iftmp_111]; //@line 1767 "parsermodule.c"
        HEAP[$0]=$13; //@line 1767 "parsermodule.c"
        var $14=HEAP[$0]; //@line 1767 "parsermodule.c"
        HEAP[$retval]=$14; //@line 1767 "parsermodule.c"
        __label__ = 6; break; //@line 1767 "parsermodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1767 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1767 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_name($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_112=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $ok=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1776 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1776 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1776 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1776 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1777 "parsermodule.c"
        var $5=_validate_ntype($4, 284); //@line 1777 "parsermodule.c"
        HEAP[$ok]=$5; //@line 1777 "parsermodule.c"
        var $6=HEAP[$ok]; //@line 1779 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 1779 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1779 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$nch]; //@line 1780 "parsermodule.c"
        var $9=((($8))|0)==1; //@line 1780 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1780 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 1781 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1781 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1781 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1781 "parsermodule.c"
        var $14=_validate_terminal($13, 1, 0); //@line 1781 "parsermodule.c"
        HEAP[$ok]=$14; //@line 1781 "parsermodule.c"
        __label__ = 11; break; //@line 1781 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$nch]; //@line 1782 "parsermodule.c"
        var $16=((($15))|0)==3; //@line 1782 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1782 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 1783 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1783 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1783 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 1783 "parsermodule.c"
        var $21=_validate_terminal($20, 1, 0); //@line 1783 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 1783 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1783 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$tree_addr]; //@line 1783 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 1783 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1783 "parsermodule.c"
        var $26=(($25+24)&4294967295); //@line 1783 "parsermodule.c"
        var $27=_validate_terminal($26, 1, ((__str112)&4294967295)); //@line 1783 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1783 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1783 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$tree_addr]; //@line 1783 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1783 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1783 "parsermodule.c"
        var $32=(($31+48)&4294967295); //@line 1783 "parsermodule.c"
        var $33=_validate_terminal($32, 1, 0); //@line 1783 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 1783 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1783 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_112]=1; //@line 1783 "parsermodule.c"
        __label__ = 9; break; //@line 1783 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_112]=0; //@line 1783 "parsermodule.c"
        __label__ = 9; break; //@line 1783 "parsermodule.c"
      case 9: // $bb8
        var $35=HEAP[$iftmp_112]; //@line 1783 "parsermodule.c"
        HEAP[$ok]=$35; //@line 1783 "parsermodule.c"
        __label__ = 11; break; //@line 1783 "parsermodule.c"
      case 10: // $bb9
        var $36=HEAP[$tree_addr]; //@line 1787 "parsermodule.c"
        var $37=_validate_numnodes($36, 3, ((__str113)&4294967295)); //@line 1787 "parsermodule.c"
        HEAP[$ok]=$37; //@line 1787 "parsermodule.c"
        __label__ = 11; break; //@line 1787 "parsermodule.c"
      case 11: // $bb10
        var $38=HEAP[$ok]; //@line 1789 "parsermodule.c"
        HEAP[$0]=$38; //@line 1789 "parsermodule.c"
        var $39=HEAP[$0]; //@line 1789 "parsermodule.c"
        HEAP[$retval]=$39; //@line 1789 "parsermodule.c"
        __label__ = 12; break; //@line 1789 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1789 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1789 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_name($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_114=__stackBase__+12;
        var $iftmp_113=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $i=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1798 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1798 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1798 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1798 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1801 "parsermodule.c"
        var $5=_validate_ntype($4, 288); //@line 1801 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1801 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1801 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1801 "parsermodule.c"
        var $8=($7) & 1; //@line 1801 "parsermodule.c"
        var $9=((($8)) & 255); //@line 1801 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 1801 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1801 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 1801 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 1801 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1801 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 1801 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1801 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1801 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1801 "parsermodule.c"
        var $14=_validate_terminal($13, 1, 0); //@line 1801 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 1801 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1801 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_113]=1; //@line 1801 "parsermodule.c"
        __label__ = 5; break; //@line 1801 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_113]=0; //@line 1801 "parsermodule.c"
        __label__ = 5; break; //@line 1801 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_113]; //@line 1801 "parsermodule.c"
        HEAP[$res]=$16; //@line 1801 "parsermodule.c"
        HEAP[$i]=1; //@line 1804 "parsermodule.c"
        __label__ = 11; break; //@line 1804 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 1805 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1805 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1805 "parsermodule.c"
        var $20=HEAP[$i]; //@line 1805 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 1805 "parsermodule.c"
        var $22=_validate_terminal($21, 23, ((__str114)&4294967295)); //@line 1805 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 1805 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1805 "parsermodule.c"
      case 7: // $bb9
        var $24=HEAP[$tree_addr]; //@line 1805 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 1805 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1805 "parsermodule.c"
        var $27=HEAP[$i]; //@line 1805 "parsermodule.c"
        var $28=((($27) + 1)&4294967295); //@line 1805 "parsermodule.c"
        var $29=(($26+24*$28)&4294967295); //@line 1805 "parsermodule.c"
        var $30=_validate_terminal($29, 1, 0); //@line 1805 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 1805 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1805 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_114]=1; //@line 1805 "parsermodule.c"
        __label__ = 10; break; //@line 1805 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_114]=0; //@line 1805 "parsermodule.c"
        __label__ = 10; break; //@line 1805 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$iftmp_114]; //@line 1805 "parsermodule.c"
        HEAP[$res]=$32; //@line 1805 "parsermodule.c"
        var $33=HEAP[$i]; //@line 1804 "parsermodule.c"
        var $34=((($33) + 2)&4294967295); //@line 1804 "parsermodule.c"
        HEAP[$i]=$34; //@line 1804 "parsermodule.c"
        __label__ = 11; break; //@line 1804 "parsermodule.c"
      case 11: // $bb13
        var $35=HEAP[$res]; //@line 1804 "parsermodule.c"
        var $36=((($35))|0)==0; //@line 1804 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1804 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$i]; //@line 1804 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 1804 "parsermodule.c"
        var $39=((($37))|0) < ((($38))|0); //@line 1804 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1804 "parsermodule.c"
      case 13: // $bb15
        var $40=HEAP[$res]; //@line 1808 "parsermodule.c"
        HEAP[$0]=$40; //@line 1808 "parsermodule.c"
        var $41=HEAP[$0]; //@line 1808 "parsermodule.c"
        HEAP[$retval]=$41; //@line 1808 "parsermodule.c"
        __label__ = 14; break; //@line 1808 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 1808 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1808 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_as_name($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_115=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1817 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1817 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1817 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1817 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1818 "parsermodule.c"
        var $5=_validate_ntype($4, 285); //@line 1818 "parsermodule.c"
        HEAP[$res]=$5; //@line 1818 "parsermodule.c"
        var $6=HEAP[$res]; //@line 1820 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 1820 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1820 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$nch]; //@line 1821 "parsermodule.c"
        var $9=((($8))|0)==1; //@line 1821 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1821 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 1822 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 1822 "parsermodule.c"
        var $12=HEAP[$11]; //@line 1822 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 1822 "parsermodule.c"
        var $14=_validate_dotted_name($13); //@line 1822 "parsermodule.c"
        HEAP[$res]=$14; //@line 1822 "parsermodule.c"
        __label__ = 11; break; //@line 1822 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$nch]; //@line 1823 "parsermodule.c"
        var $16=((($15))|0)==3; //@line 1823 "parsermodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 1823 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 1824 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 1824 "parsermodule.c"
        var $19=HEAP[$18]; //@line 1824 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 1824 "parsermodule.c"
        var $21=_validate_dotted_name($20); //@line 1824 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 1824 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1824 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$tree_addr]; //@line 1824 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 1824 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1824 "parsermodule.c"
        var $26=(($25+24)&4294967295); //@line 1824 "parsermodule.c"
        var $27=_validate_terminal($26, 1, ((__str112)&4294967295)); //@line 1824 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1824 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1824 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$tree_addr]; //@line 1824 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 1824 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1824 "parsermodule.c"
        var $32=(($31+48)&4294967295); //@line 1824 "parsermodule.c"
        var $33=_validate_terminal($32, 1, 0); //@line 1824 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 1824 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1824 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_115]=1; //@line 1824 "parsermodule.c"
        __label__ = 9; break; //@line 1824 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_115]=0; //@line 1824 "parsermodule.c"
        __label__ = 9; break; //@line 1824 "parsermodule.c"
      case 9: // $bb8
        var $35=HEAP[$iftmp_115]; //@line 1824 "parsermodule.c"
        HEAP[$res]=$35; //@line 1824 "parsermodule.c"
        __label__ = 11; break; //@line 1824 "parsermodule.c"
      case 10: // $bb9
        HEAP[$res]=0; //@line 1828 "parsermodule.c"
        _err_string(((__str115)&4294967295)); //@line 1829 "parsermodule.c"
        __label__ = 11; break; //@line 1829 "parsermodule.c"
      case 11: // $bb10
        var $36=HEAP[$res]; //@line 1832 "parsermodule.c"
        HEAP[$0]=$36; //@line 1832 "parsermodule.c"
        var $37=HEAP[$0]; //@line 1832 "parsermodule.c"
        HEAP[$retval]=$37; //@line 1832 "parsermodule.c"
        __label__ = 12; break; //@line 1832 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1832 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1832 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_as_names($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_117=__stackBase__+12;
        var $iftmp_116=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $i=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1840 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1840 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1840 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1840 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 1841 "parsermodule.c"
        var $5=($4) & 1; //@line 1841 "parsermodule.c"
        var $6=((($5)) & 255); //@line 1841 "parsermodule.c"
        var $toBool=reSign(($6), 8, 0)!=0; //@line 1841 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1841 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 1841 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 1841 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1841 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$tree_addr]; //@line 1841 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 1841 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1841 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 1841 "parsermodule.c"
        var $11=_validate_dotted_as_name($10); //@line 1841 "parsermodule.c"
        var $12=((($11))|0)==0; //@line 1841 "parsermodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1841 "parsermodule.c"
      case 2: // $bb4
        HEAP[$iftmp_116]=1; //@line 1841 "parsermodule.c"
        __label__ = 4; break; //@line 1841 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_116]=0; //@line 1841 "parsermodule.c"
        __label__ = 4; break; //@line 1841 "parsermodule.c"
      case 4: // $bb6
        var $13=HEAP[$iftmp_116]; //@line 1841 "parsermodule.c"
        HEAP[$res]=$13; //@line 1841 "parsermodule.c"
        HEAP[$i]=1; //@line 1844 "parsermodule.c"
        __label__ = 10; break; //@line 1844 "parsermodule.c"
      case 5: // $bb7
        var $14=HEAP[$tree_addr]; //@line 1845 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 1845 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1845 "parsermodule.c"
        var $17=HEAP[$i]; //@line 1845 "parsermodule.c"
        var $18=(($16+24*$17)&4294967295); //@line 1845 "parsermodule.c"
        var $19=_validate_terminal($18, 12, ((__str52)&4294967295)); //@line 1845 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 1845 "parsermodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1845 "parsermodule.c"
      case 6: // $bb8
        var $21=HEAP[$tree_addr]; //@line 1845 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 1845 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1845 "parsermodule.c"
        var $24=HEAP[$i]; //@line 1845 "parsermodule.c"
        var $25=((($24) + 1)&4294967295); //@line 1845 "parsermodule.c"
        var $26=(($23+24*$25)&4294967295); //@line 1845 "parsermodule.c"
        var $27=_validate_dotted_as_name($26); //@line 1845 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1845 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1845 "parsermodule.c"
      case 7: // $bb9
        HEAP[$iftmp_117]=1; //@line 1845 "parsermodule.c"
        __label__ = 9; break; //@line 1845 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_117]=0; //@line 1845 "parsermodule.c"
        __label__ = 9; break; //@line 1845 "parsermodule.c"
      case 9: // $bb11
        var $29=HEAP[$iftmp_117]; //@line 1845 "parsermodule.c"
        HEAP[$res]=$29; //@line 1845 "parsermodule.c"
        var $30=HEAP[$i]; //@line 1844 "parsermodule.c"
        var $31=((($30) + 2)&4294967295); //@line 1844 "parsermodule.c"
        HEAP[$i]=$31; //@line 1844 "parsermodule.c"
        __label__ = 10; break; //@line 1844 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$res]; //@line 1844 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 1844 "parsermodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1844 "parsermodule.c"
      case 11: // $bb13
        var $34=HEAP[$i]; //@line 1844 "parsermodule.c"
        var $35=HEAP[$nch]; //@line 1844 "parsermodule.c"
        var $36=((($34))|0) < ((($35))|0); //@line 1844 "parsermodule.c"
        if ($36) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 1844 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$res]; //@line 1847 "parsermodule.c"
        HEAP[$0]=$37; //@line 1847 "parsermodule.c"
        var $38=HEAP[$0]; //@line 1847 "parsermodule.c"
        HEAP[$retval]=$38; //@line 1847 "parsermodule.c"
        __label__ = 13; break; //@line 1847 "parsermodule.c"
      case 13: // $return
        var $retval15=HEAP[$retval]; //@line 1847 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1847 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_names($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_118=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $i=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1855 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1855 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1855 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1855 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1856 "parsermodule.c"
        var $5=(($4+20)&4294967295); //@line 1856 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1856 "parsermodule.c"
        var $7=(($6)&4294967295); //@line 1856 "parsermodule.c"
        var $8=_validate_import_as_name($7); //@line 1856 "parsermodule.c"
        HEAP[$res]=$8; //@line 1856 "parsermodule.c"
        HEAP[$i]=1; //@line 1859 "parsermodule.c"
        __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 1: // $bb
        var $9=HEAP[$tree_addr]; //@line 1860 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 1860 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1860 "parsermodule.c"
        var $12=HEAP[$i]; //@line 1860 "parsermodule.c"
        var $13=(($11+24*$12)&4294967295); //@line 1860 "parsermodule.c"
        var $14=_validate_terminal($13, 12, ((__str52)&4294967295)); //@line 1860 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 1860 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1860 "parsermodule.c"
      case 2: // $bb1
        var $16=HEAP[$tree_addr]; //@line 1860 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 1860 "parsermodule.c"
        var $18=HEAP[$17]; //@line 1860 "parsermodule.c"
        var $19=HEAP[$i]; //@line 1860 "parsermodule.c"
        var $20=((($19) + 1)&4294967295); //@line 1860 "parsermodule.c"
        var $21=(($18+24*$20)&4294967295); //@line 1860 "parsermodule.c"
        var $22=_validate_import_as_name($21); //@line 1860 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 1860 "parsermodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1860 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_118]=1; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_118]=0; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 5: // $bb4
        var $24=HEAP[$iftmp_118]; //@line 1860 "parsermodule.c"
        HEAP[$res]=$24; //@line 1860 "parsermodule.c"
        var $25=HEAP[$i]; //@line 1859 "parsermodule.c"
        var $26=((($25) + 2)&4294967295); //@line 1859 "parsermodule.c"
        HEAP[$i]=$26; //@line 1859 "parsermodule.c"
        __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 6: // $bb5
        var $27=HEAP[$res]; //@line 1859 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 1859 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1859 "parsermodule.c"
      case 7: // $bb6
        var $29=HEAP[$i]; //@line 1859 "parsermodule.c"
        var $30=((($29) + 1)&4294967295); //@line 1859 "parsermodule.c"
        var $31=HEAP[$nch]; //@line 1859 "parsermodule.c"
        var $32=((($30))|0) < ((($31))|0); //@line 1859 "parsermodule.c"
        if ($32) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1859 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$res]; //@line 1862 "parsermodule.c"
        HEAP[$0]=$33; //@line 1862 "parsermodule.c"
        var $34=HEAP[$0]; //@line 1862 "parsermodule.c"
        HEAP[$retval]=$34; //@line 1862 "parsermodule.c"
        __label__ = 9; break; //@line 1862 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1862 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1862 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_name($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_119=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1870 "parsermodule.c"
        var $2=_validate_ntype($1, 282); //@line 1870 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 1870 "parsermodule.c"
        if ($3) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1870 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 1870 "parsermodule.c"
        var $5=_validate_numnodes($4, 2, ((__str116)&4294967295)); //@line 1870 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1870 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1870 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 1870 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 1870 "parsermodule.c"
        var $9=HEAP[$8]; //@line 1870 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 1870 "parsermodule.c"
        var $11=_validate_terminal($10, 1, ((__str117)&4294967295)); //@line 1870 "parsermodule.c"
        var $12=((($11))|0)==0; //@line 1870 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1870 "parsermodule.c"
      case 3: // $bb2
        var $13=HEAP[$tree_addr]; //@line 1870 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 1870 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1870 "parsermodule.c"
        var $16=(($15+24)&4294967295); //@line 1870 "parsermodule.c"
        var $17=_validate_dotted_as_names($16); //@line 1870 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 1870 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1870 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_119]=1; //@line 1870 "parsermodule.c"
        __label__ = 6; break; //@line 1870 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_119]=0; //@line 1870 "parsermodule.c"
        __label__ = 6; break; //@line 1870 "parsermodule.c"
      case 6: // $bb5
        var $19=HEAP[$iftmp_119]; //@line 1870 "parsermodule.c"
        HEAP[$0]=$19; //@line 1870 "parsermodule.c"
        var $20=HEAP[$0]; //@line 1870 "parsermodule.c"
        HEAP[$retval]=$20; //@line 1870 "parsermodule.c"
        __label__ = 7; break; //@line 1870 "parsermodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1870 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1870 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _count_from_dots($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$i]=1; //@line 1883 "parsermodule.c"
        __label__ = 3; break; //@line 1883 "parsermodule.c"
      case 1: // $bb
        var $1=HEAP[$tree_addr]; //@line 1884 "parsermodule.c"
        var $2=(($1+20)&4294967295); //@line 1884 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1884 "parsermodule.c"
        var $4=HEAP[$i]; //@line 1884 "parsermodule.c"
        var $5=(($3+24*$4)&4294967295); //@line 1884 "parsermodule.c"
        var $6=(($5)&4294967295); //@line 1884 "parsermodule.c"
        var $7=HEAP[$6]; //@line 1884 "parsermodule.c"
        var $8=reSign(($7), 16, 0)!=23; //@line 1884 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1884 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$i]; //@line 1883 "parsermodule.c"
        var $10=((($9) + 1)&4294967295); //@line 1883 "parsermodule.c"
        HEAP[$i]=$10; //@line 1883 "parsermodule.c"
        __label__ = 3; break; //@line 1883 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 1883 "parsermodule.c"
        var $12=(($11+16)&4294967295); //@line 1883 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1883 "parsermodule.c"
        var $14=HEAP[$i]; //@line 1883 "parsermodule.c"
        var $15=((($13))|0) > ((($14))|0); //@line 1883 "parsermodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1883 "parsermodule.c"
      case 4: // $bb3
        var $16=HEAP[$i]; //@line 1886 "parsermodule.c"
        var $17=((($16) - 1)&4294967295); //@line 1886 "parsermodule.c"
        HEAP[$0]=$17; //@line 1886 "parsermodule.c"
        var $18=HEAP[$0]; //@line 1886 "parsermodule.c"
        HEAP[$retval]=$18; //@line 1886 "parsermodule.c"
        __label__ = 5; break; //@line 1886 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 1886 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 1886 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_from($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_121=__stackBase__+12;
        var $iftmp_120=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $ndots=__stackBase__+24;
        var $havename=__stackBase__+28;
        var $offset=__stackBase__+32;
        var $res=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1895 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1895 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1895 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1895 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1896 "parsermodule.c"
        var $5=_count_from_dots($4); //@line 1896 "parsermodule.c"
        HEAP[$ndots]=$5; //@line 1896 "parsermodule.c"
        var $6=HEAP[$tree_addr]; //@line 1897 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 1897 "parsermodule.c"
        var $8=HEAP[$7]; //@line 1897 "parsermodule.c"
        var $9=HEAP[$ndots]; //@line 1897 "parsermodule.c"
        var $10=((($9) + 1)&4294967295); //@line 1897 "parsermodule.c"
        var $11=(($8+24*$10)&4294967295); //@line 1897 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1897 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1897 "parsermodule.c"
        var $14=reSign(($13), 16, 0)==288; //@line 1897 "parsermodule.c"
        var $15=unSign(($14), 1, 0); //@line 1897 "parsermodule.c"
        HEAP[$havename]=$15; //@line 1897 "parsermodule.c"
        var $16=HEAP[$ndots]; //@line 1898 "parsermodule.c"
        var $17=HEAP[$havename]; //@line 1898 "parsermodule.c"
        var $18=((($16) + ($17))&4294967295); //@line 1898 "parsermodule.c"
        HEAP[$offset]=$18; //@line 1898 "parsermodule.c"
        var $19=HEAP[$tree_addr]; //@line 1904 "parsermodule.c"
        var $20=_validate_ntype($19, 283); //@line 1904 "parsermodule.c"
        var $21=((($20))|0)==0; //@line 1904 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 1904 "parsermodule.c"
      case 1: // $bb
        var $22=HEAP[$offset]; //@line 1904 "parsermodule.c"
        var $23=((($22))|0) <= 0; //@line 1904 "parsermodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 1904 "parsermodule.c"
      case 2: // $bb1
        var $24=HEAP[$offset]; //@line 1904 "parsermodule.c"
        var $25=((($24) + 3)&4294967295); //@line 1904 "parsermodule.c"
        var $26=HEAP[$nch]; //@line 1904 "parsermodule.c"
        var $27=((($25))|0) > ((($26))|0); //@line 1904 "parsermodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 3; break; } //@line 1904 "parsermodule.c"
      case 3: // $bb2
        var $28=HEAP[$tree_addr]; //@line 1904 "parsermodule.c"
        var $29=(($28+20)&4294967295); //@line 1904 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1904 "parsermodule.c"
        var $31=(($30)&4294967295); //@line 1904 "parsermodule.c"
        var $32=_validate_terminal($31, 1, ((__str118)&4294967295)); //@line 1904 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 1904 "parsermodule.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1904 "parsermodule.c"
      case 4: // $bb3
        var $34=HEAP[$havename]; //@line 1904 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 1904 "parsermodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1904 "parsermodule.c"
      case 5: // $bb4
        var $36=HEAP[$tree_addr]; //@line 1904 "parsermodule.c"
        var $37=(($36+20)&4294967295); //@line 1904 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1904 "parsermodule.c"
        var $39=HEAP[$ndots]; //@line 1904 "parsermodule.c"
        var $40=((($39) + 1)&4294967295); //@line 1904 "parsermodule.c"
        var $41=(($38+24*$40)&4294967295); //@line 1904 "parsermodule.c"
        var $42=_validate_dotted_name($41); //@line 1904 "parsermodule.c"
        var $43=((($42))|0)!=0; //@line 1904 "parsermodule.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1904 "parsermodule.c"
      case 6: // $bb5
        var $44=HEAP[$tree_addr]; //@line 1904 "parsermodule.c"
        var $45=(($44+20)&4294967295); //@line 1904 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1904 "parsermodule.c"
        var $47=HEAP[$offset]; //@line 1904 "parsermodule.c"
        var $48=((($47) + 1)&4294967295); //@line 1904 "parsermodule.c"
        var $49=(($46+24*$48)&4294967295); //@line 1904 "parsermodule.c"
        var $50=_validate_terminal($49, 1, ((__str117)&4294967295)); //@line 1904 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 1904 "parsermodule.c"
        if ($51) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1904 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_120]=1; //@line 1904 "parsermodule.c"
        __label__ = 9; break; //@line 1904 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_120]=0; //@line 1904 "parsermodule.c"
        __label__ = 9; break; //@line 1904 "parsermodule.c"
      case 9: // $bb8
        var $52=HEAP[$iftmp_120]; //@line 1904 "parsermodule.c"
        HEAP[$res]=$52; //@line 1904 "parsermodule.c"
        var $53=HEAP[$res]; //@line 1906 "parsermodule.c"
        var $54=((($53))|0)==0; //@line 1906 "parsermodule.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 10; break; } //@line 1906 "parsermodule.c"
      case 10: // $bb9
        var $55=HEAP[$tree_addr]; //@line 1906 "parsermodule.c"
        var $56=(($55+20)&4294967295); //@line 1906 "parsermodule.c"
        var $57=HEAP[$56]; //@line 1906 "parsermodule.c"
        var $58=HEAP[$offset]; //@line 1906 "parsermodule.c"
        var $59=((($58) + 2)&4294967295); //@line 1906 "parsermodule.c"
        var $60=(($57+24*$59)&4294967295); //@line 1906 "parsermodule.c"
        var $61=(($60)&4294967295); //@line 1906 "parsermodule.c"
        var $62=HEAP[$61]; //@line 1906 "parsermodule.c"
        var $63=reSign(($62), 16, 0)!=7; //@line 1906 "parsermodule.c"
        if ($63) { __label__ = 18; break; } else { __label__ = 11; break; } //@line 1906 "parsermodule.c"
      case 11: // $bb10
        var $64=HEAP[$offset]; //@line 1907 "parsermodule.c"
        var $65=((($64) + 5)&4294967295); //@line 1907 "parsermodule.c"
        var $66=HEAP[$nch]; //@line 1907 "parsermodule.c"
        var $67=((($65))|0)!=((($66))|0); //@line 1907 "parsermodule.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 1907 "parsermodule.c"
      case 12: // $bb11
        var $68=HEAP[$tree_addr]; //@line 1907 "parsermodule.c"
        var $69=(($68+20)&4294967295); //@line 1907 "parsermodule.c"
        var $70=HEAP[$69]; //@line 1907 "parsermodule.c"
        var $71=HEAP[$offset]; //@line 1907 "parsermodule.c"
        var $72=((($71) + 2)&4294967295); //@line 1907 "parsermodule.c"
        var $73=(($70+24*$72)&4294967295); //@line 1907 "parsermodule.c"
        var $74=_validate_terminal($73, 7, ((__str55)&4294967295)); //@line 1907 "parsermodule.c"
        var $75=((($74))|0)==0; //@line 1907 "parsermodule.c"
        if ($75) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 1907 "parsermodule.c"
      case 13: // $bb12
        var $76=HEAP[$tree_addr]; //@line 1907 "parsermodule.c"
        var $77=(($76+20)&4294967295); //@line 1907 "parsermodule.c"
        var $78=HEAP[$77]; //@line 1907 "parsermodule.c"
        var $79=HEAP[$offset]; //@line 1907 "parsermodule.c"
        var $80=((($79) + 3)&4294967295); //@line 1907 "parsermodule.c"
        var $81=(($78+24*$80)&4294967295); //@line 1907 "parsermodule.c"
        var $82=_validate_import_as_names($81); //@line 1907 "parsermodule.c"
        var $83=((($82))|0)==0; //@line 1907 "parsermodule.c"
        if ($83) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1907 "parsermodule.c"
      case 14: // $bb13
        var $84=HEAP[$tree_addr]; //@line 1907 "parsermodule.c"
        var $85=(($84+20)&4294967295); //@line 1907 "parsermodule.c"
        var $86=HEAP[$85]; //@line 1907 "parsermodule.c"
        var $87=HEAP[$offset]; //@line 1907 "parsermodule.c"
        var $88=((($87) + 4)&4294967295); //@line 1907 "parsermodule.c"
        var $89=(($86+24*$88)&4294967295); //@line 1907 "parsermodule.c"
        var $90=_validate_terminal($89, 8, ((__str56)&4294967295)); //@line 1907 "parsermodule.c"
        var $91=((($90))|0)==0; //@line 1907 "parsermodule.c"
        if ($91) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1907 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_121]=1; //@line 1907 "parsermodule.c"
        __label__ = 17; break; //@line 1907 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_121]=0; //@line 1907 "parsermodule.c"
        __label__ = 17; break; //@line 1907 "parsermodule.c"
      case 17: // $bb16
        var $92=HEAP[$iftmp_121]; //@line 1907 "parsermodule.c"
        HEAP[$res]=$92; //@line 1907 "parsermodule.c"
        __label__ = 21; break; //@line 1907 "parsermodule.c"
      case 18: // $bb17
        var $93=HEAP[$res]; //@line 1911 "parsermodule.c"
        var $94=((($93))|0)!=0; //@line 1911 "parsermodule.c"
        if ($94) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 1911 "parsermodule.c"
      case 19: // $bb18
        var $95=HEAP[$tree_addr]; //@line 1911 "parsermodule.c"
        var $96=(($95+20)&4294967295); //@line 1911 "parsermodule.c"
        var $97=HEAP[$96]; //@line 1911 "parsermodule.c"
        var $98=HEAP[$offset]; //@line 1911 "parsermodule.c"
        var $99=((($98) + 2)&4294967295); //@line 1911 "parsermodule.c"
        var $100=(($97+24*$99)&4294967295); //@line 1911 "parsermodule.c"
        var $101=(($100)&4294967295); //@line 1911 "parsermodule.c"
        var $102=HEAP[$101]; //@line 1911 "parsermodule.c"
        var $103=reSign(($102), 16, 0)!=16; //@line 1911 "parsermodule.c"
        if ($103) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1911 "parsermodule.c"
      case 20: // $bb19
        var $104=HEAP[$tree_addr]; //@line 1912 "parsermodule.c"
        var $105=(($104+20)&4294967295); //@line 1912 "parsermodule.c"
        var $106=HEAP[$105]; //@line 1912 "parsermodule.c"
        var $107=HEAP[$offset]; //@line 1912 "parsermodule.c"
        var $108=((($107) + 2)&4294967295); //@line 1912 "parsermodule.c"
        var $109=(($106+24*$108)&4294967295); //@line 1912 "parsermodule.c"
        var $110=_validate_import_as_names($109); //@line 1912 "parsermodule.c"
        HEAP[$res]=$110; //@line 1912 "parsermodule.c"
        __label__ = 21; break; //@line 1912 "parsermodule.c"
      case 21: // $bb20
        var $111=HEAP[$res]; //@line 1913 "parsermodule.c"
        HEAP[$0]=$111; //@line 1913 "parsermodule.c"
        var $112=HEAP[$0]; //@line 1913 "parsermodule.c"
        HEAP[$retval]=$112; //@line 1913 "parsermodule.c"
        __label__ = 22; break; //@line 1913 "parsermodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 1913 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 1913 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $nch=__stackBase__+12;
        var $res=__stackBase__+16;
        var $ntype=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1921 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1921 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1921 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1921 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1922 "parsermodule.c"
        var $5=_validate_numnodes($4, 1, ((__str119)&4294967295)); //@line 1922 "parsermodule.c"
        HEAP[$res]=$5; //@line 1922 "parsermodule.c"
        var $6=HEAP[$res]; //@line 1924 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 1924 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1924 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$tree_addr]; //@line 1925 "parsermodule.c"
        var $9=(($8+20)&4294967295); //@line 1925 "parsermodule.c"
        var $10=HEAP[$9]; //@line 1925 "parsermodule.c"
        var $11=(($10)&4294967295); //@line 1925 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 1925 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1925 "parsermodule.c"
        var $14=reSign(($13), 16, 0); //@line 1925 "parsermodule.c"
        HEAP[$ntype]=$14; //@line 1925 "parsermodule.c"
        var $15=HEAP[$ntype]; //@line 1927 "parsermodule.c"
        var $16=((($15))|0)==282; //@line 1927 "parsermodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1927 "parsermodule.c"
      case 2: // $bb1
        var $17=HEAP[$ntype]; //@line 1927 "parsermodule.c"
        var $18=((($17))|0)==283; //@line 1927 "parsermodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1927 "parsermodule.c"
      case 3: // $bb2
        var $19=HEAP[$tree_addr]; //@line 1928 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 1928 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1928 "parsermodule.c"
        var $22=(($21)&4294967295); //@line 1928 "parsermodule.c"
        var $23=_validate_node($22); //@line 1928 "parsermodule.c"
        HEAP[$res]=$23; //@line 1928 "parsermodule.c"
        __label__ = 5; break; //@line 1928 "parsermodule.c"
      case 4: // $bb3
        HEAP[$res]=0; //@line 1930 "parsermodule.c"
        _err_string(((__str120)&4294967295)); //@line 1931 "parsermodule.c"
        __label__ = 5; break; //@line 1931 "parsermodule.c"
      case 5: // $bb4
        __label__ = 8; break; //@line 1931 "parsermodule.c"
      case 6: // $bb5
        var $24=HEAP[$nch]; //@line 1934 "parsermodule.c"
        var $25=((($24))|0)==1; //@line 1934 "parsermodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1934 "parsermodule.c"
      case 7: // $bb6
        HEAP[$res]=0; //@line 1935 "parsermodule.c"
        var $26=HEAP[$tree_addr]; //@line 1936 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 1936 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1936 "parsermodule.c"
        var $29=(($28)&4294967295); //@line 1936 "parsermodule.c"
        var $30=(($29)&4294967295); //@line 1936 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1936 "parsermodule.c"
        var $32=reSign(($31), 16, 0); //@line 1936 "parsermodule.c"
        var $33=HEAP[_parser_error]; //@line 1936 "parsermodule.c"
        var $34=_PyErr_Format($33, ((__str121)&4294967295), $32); //@line 1936 "parsermodule.c"
        __label__ = 8; break; //@line 1936 "parsermodule.c"
      case 8: // $bb7
        var $35=HEAP[$res]; //@line 1940 "parsermodule.c"
        HEAP[$0]=$35; //@line 1940 "parsermodule.c"
        var $36=HEAP[$0]; //@line 1940 "parsermodule.c"
        HEAP[$retval]=$36; //@line 1940 "parsermodule.c"
        __label__ = 9; break; //@line 1940 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1940 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1940 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_global_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_125=__stackBase__+12;
        var $iftmp_124=__stackBase__+16;
        var $iftmp_123=__stackBase__+20;
        var $j=__stackBase__+24;
        var $nch=__stackBase__+28;
        var $res=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1950 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1950 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1950 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1950 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1952 "parsermodule.c"
        var $5=_validate_ntype($4, 289); //@line 1952 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1952 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1952 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1952 "parsermodule.c"
        var $8=($7) & 1; //@line 1952 "parsermodule.c"
        var $9=((($8))|0)!=0; //@line 1952 "parsermodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1952 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$nch]; //@line 1952 "parsermodule.c"
        var $11=((($10))|0) <= 1; //@line 1952 "parsermodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1952 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_123]=1; //@line 1952 "parsermodule.c"
        __label__ = 5; break; //@line 1952 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_123]=0; //@line 1952 "parsermodule.c"
        __label__ = 5; break; //@line 1952 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$iftmp_123]; //@line 1952 "parsermodule.c"
        HEAP[$res]=$12; //@line 1952 "parsermodule.c"
        var $13=HEAP[$res]; //@line 1954 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 1954 "parsermodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1954 "parsermodule.c"
      case 6: // $bb5
        var $15=_PyErr_Occurred(); //@line 1954 "parsermodule.c"
        var $16=($15)==0; //@line 1954 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1954 "parsermodule.c"
      case 7: // $bb6
        _err_string(((__str122)&4294967295)); //@line 1955 "parsermodule.c"
        __label__ = 8; break; //@line 1955 "parsermodule.c"
      case 8: // $bb7
        var $17=HEAP[$res]; //@line 1957 "parsermodule.c"
        var $18=((($17))|0)!=0; //@line 1957 "parsermodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1957 "parsermodule.c"
      case 9: // $bb8
        var $19=HEAP[$tree_addr]; //@line 1958 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 1958 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1958 "parsermodule.c"
        var $22=(($21)&4294967295); //@line 1958 "parsermodule.c"
        var $23=_validate_terminal($22, 1, ((__str123)&4294967295)); //@line 1958 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 1958 "parsermodule.c"
        if ($24) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1958 "parsermodule.c"
      case 10: // $bb9
        var $25=HEAP[$tree_addr]; //@line 1958 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 1958 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1958 "parsermodule.c"
        var $28=(($27+24)&4294967295); //@line 1958 "parsermodule.c"
        var $29=_validate_ntype($28, 1); //@line 1958 "parsermodule.c"
        var $30=((($29))|0)==0; //@line 1958 "parsermodule.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1958 "parsermodule.c"
      case 11: // $bb10
        HEAP[$iftmp_124]=1; //@line 1958 "parsermodule.c"
        __label__ = 13; break; //@line 1958 "parsermodule.c"
      case 12: // $bb11
        HEAP[$iftmp_124]=0; //@line 1958 "parsermodule.c"
        __label__ = 13; break; //@line 1958 "parsermodule.c"
      case 13: // $bb12
        var $31=HEAP[$iftmp_124]; //@line 1958 "parsermodule.c"
        HEAP[$res]=$31; //@line 1958 "parsermodule.c"
        __label__ = 14; break; //@line 1958 "parsermodule.c"
      case 14: // $bb13
        HEAP[$j]=2; //@line 1960 "parsermodule.c"
        __label__ = 20; break; //@line 1960 "parsermodule.c"
      case 15: // $bb14
        var $32=HEAP[$tree_addr]; //@line 1961 "parsermodule.c"
        var $33=(($32+20)&4294967295); //@line 1961 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1961 "parsermodule.c"
        var $35=HEAP[$j]; //@line 1961 "parsermodule.c"
        var $36=(($34+24*$35)&4294967295); //@line 1961 "parsermodule.c"
        var $37=_validate_terminal($36, 12, ((__str52)&4294967295)); //@line 1961 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 1961 "parsermodule.c"
        if ($38) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 1961 "parsermodule.c"
      case 16: // $bb15
        var $39=HEAP[$tree_addr]; //@line 1961 "parsermodule.c"
        var $40=(($39+20)&4294967295); //@line 1961 "parsermodule.c"
        var $41=HEAP[$40]; //@line 1961 "parsermodule.c"
        var $42=HEAP[$j]; //@line 1961 "parsermodule.c"
        var $43=((($42) + 1)&4294967295); //@line 1961 "parsermodule.c"
        var $44=(($41+24*$43)&4294967295); //@line 1961 "parsermodule.c"
        var $45=_validate_ntype($44, 1); //@line 1961 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 1961 "parsermodule.c"
        if ($46) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 1961 "parsermodule.c"
      case 17: // $bb16
        HEAP[$iftmp_125]=1; //@line 1961 "parsermodule.c"
        __label__ = 19; break; //@line 1961 "parsermodule.c"
      case 18: // $bb17
        HEAP[$iftmp_125]=0; //@line 1961 "parsermodule.c"
        __label__ = 19; break; //@line 1961 "parsermodule.c"
      case 19: // $bb18
        var $47=HEAP[$iftmp_125]; //@line 1961 "parsermodule.c"
        HEAP[$res]=$47; //@line 1961 "parsermodule.c"
        var $48=HEAP[$j]; //@line 1960 "parsermodule.c"
        var $49=((($48) + 2)&4294967295); //@line 1960 "parsermodule.c"
        HEAP[$j]=$49; //@line 1960 "parsermodule.c"
        __label__ = 20; break; //@line 1960 "parsermodule.c"
      case 20: // $bb19
        var $50=HEAP[$res]; //@line 1960 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 1960 "parsermodule.c"
        if ($51) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1960 "parsermodule.c"
      case 21: // $bb20
        var $52=HEAP[$j]; //@line 1960 "parsermodule.c"
        var $53=HEAP[$nch]; //@line 1960 "parsermodule.c"
        var $54=((($52))|0) < ((($53))|0); //@line 1960 "parsermodule.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 1960 "parsermodule.c"
      case 22: // $bb21
        var $55=HEAP[$res]; //@line 1964 "parsermodule.c"
        HEAP[$0]=$55; //@line 1964 "parsermodule.c"
        var $56=HEAP[$0]; //@line 1964 "parsermodule.c"
        HEAP[$retval]=$56; //@line 1964 "parsermodule.c"
        __label__ = 23; break; //@line 1964 "parsermodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 1964 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1964 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_exec_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_128=__stackBase__+12;
        var $iftmp_127=__stackBase__+16;
        var $iftmp_126=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 1975 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 1975 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1975 "parsermodule.c"
        HEAP[$nch]=$3; //@line 1975 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 1979 "parsermodule.c"
        var $5=_validate_ntype($4, 290); //@line 1979 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 1979 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 1979 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 1979 "parsermodule.c"
        var $8=((($7))|0)==2; //@line 1979 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1979 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 1979 "parsermodule.c"
        var $10=((($9))|0)==4; //@line 1979 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1979 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 1979 "parsermodule.c"
        var $12=((($11))|0)==6; //@line 1979 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1979 "parsermodule.c"
      case 4: // $bb3
        var $13=HEAP[$tree_addr]; //@line 1979 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 1979 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1979 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 1979 "parsermodule.c"
        var $17=_validate_terminal($16, 1, ((__str124)&4294967295)); //@line 1979 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 1979 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 1979 "parsermodule.c"
      case 5: // $bb4
        var $19=HEAP[$tree_addr]; //@line 1979 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 1979 "parsermodule.c"
        var $21=HEAP[$20]; //@line 1979 "parsermodule.c"
        var $22=(($21+24)&4294967295); //@line 1979 "parsermodule.c"
        var $23=_validate_expr($22); //@line 1979 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 1979 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1979 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_126]=1; //@line 1979 "parsermodule.c"
        __label__ = 8; break; //@line 1979 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_126]=0; //@line 1979 "parsermodule.c"
        __label__ = 8; break; //@line 1979 "parsermodule.c"
      case 8: // $bb7
        var $25=HEAP[$iftmp_126]; //@line 1979 "parsermodule.c"
        HEAP[$res]=$25; //@line 1979 "parsermodule.c"
        var $26=HEAP[$res]; //@line 1981 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 1981 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1981 "parsermodule.c"
      case 9: // $bb8
        var $28=_PyErr_Occurred(); //@line 1981 "parsermodule.c"
        var $29=($28)==0; //@line 1981 "parsermodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1981 "parsermodule.c"
      case 10: // $bb9
        _err_string(((__str125)&4294967295)); //@line 1982 "parsermodule.c"
        __label__ = 11; break; //@line 1982 "parsermodule.c"
      case 11: // $bb10
        var $30=HEAP[$res]; //@line 1983 "parsermodule.c"
        var $31=((($30))|0)!=0; //@line 1983 "parsermodule.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 1983 "parsermodule.c"
      case 12: // $bb11
        var $32=HEAP[$nch]; //@line 1983 "parsermodule.c"
        var $33=((($32))|0) > 2; //@line 1983 "parsermodule.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 18; break; } //@line 1983 "parsermodule.c"
      case 13: // $bb12
        var $34=HEAP[$tree_addr]; //@line 1984 "parsermodule.c"
        var $35=(($34+20)&4294967295); //@line 1984 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1984 "parsermodule.c"
        var $37=(($36+48)&4294967295); //@line 1984 "parsermodule.c"
        var $38=_validate_terminal($37, 1, ((__str76)&4294967295)); //@line 1984 "parsermodule.c"
        var $39=((($38))|0)==0; //@line 1984 "parsermodule.c"
        if ($39) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1984 "parsermodule.c"
      case 14: // $bb13
        var $40=HEAP[$tree_addr]; //@line 1984 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 1984 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1984 "parsermodule.c"
        var $43=(($42+72)&4294967295); //@line 1984 "parsermodule.c"
        var $44=_validate_test($43); //@line 1984 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 1984 "parsermodule.c"
        if ($45) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1984 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_127]=1; //@line 1984 "parsermodule.c"
        __label__ = 17; break; //@line 1984 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_127]=0; //@line 1984 "parsermodule.c"
        __label__ = 17; break; //@line 1984 "parsermodule.c"
      case 17: // $bb16
        var $46=HEAP[$iftmp_127]; //@line 1984 "parsermodule.c"
        HEAP[$res]=$46; //@line 1984 "parsermodule.c"
        __label__ = 18; break; //@line 1984 "parsermodule.c"
      case 18: // $bb17
        var $47=HEAP[$res]; //@line 1986 "parsermodule.c"
        var $48=((($47))|0)!=0; //@line 1986 "parsermodule.c"
        if ($48) { __label__ = 19; break; } else { __label__ = 25; break; } //@line 1986 "parsermodule.c"
      case 19: // $bb18
        var $49=HEAP[$nch]; //@line 1986 "parsermodule.c"
        var $50=((($49))|0)==6; //@line 1986 "parsermodule.c"
        if ($50) { __label__ = 20; break; } else { __label__ = 25; break; } //@line 1986 "parsermodule.c"
      case 20: // $bb19
        var $51=HEAP[$tree_addr]; //@line 1987 "parsermodule.c"
        var $52=(($51+20)&4294967295); //@line 1987 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1987 "parsermodule.c"
        var $54=(($53+96)&4294967295); //@line 1987 "parsermodule.c"
        var $55=_validate_terminal($54, 12, ((__str52)&4294967295)); //@line 1987 "parsermodule.c"
        var $56=((($55))|0)==0; //@line 1987 "parsermodule.c"
        if ($56) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1987 "parsermodule.c"
      case 21: // $bb20
        var $57=HEAP[$tree_addr]; //@line 1987 "parsermodule.c"
        var $58=(($57+20)&4294967295); //@line 1987 "parsermodule.c"
        var $59=HEAP[$58]; //@line 1987 "parsermodule.c"
        var $60=(($59+120)&4294967295); //@line 1987 "parsermodule.c"
        var $61=_validate_test($60); //@line 1987 "parsermodule.c"
        var $62=((($61))|0)==0; //@line 1987 "parsermodule.c"
        if ($62) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1987 "parsermodule.c"
      case 22: // $bb21
        HEAP[$iftmp_128]=1; //@line 1987 "parsermodule.c"
        __label__ = 24; break; //@line 1987 "parsermodule.c"
      case 23: // $bb22
        HEAP[$iftmp_128]=0; //@line 1987 "parsermodule.c"
        __label__ = 24; break; //@line 1987 "parsermodule.c"
      case 24: // $bb23
        var $63=HEAP[$iftmp_128]; //@line 1987 "parsermodule.c"
        HEAP[$res]=$63; //@line 1987 "parsermodule.c"
        __label__ = 25; break; //@line 1987 "parsermodule.c"
      case 25: // $bb24
        var $64=HEAP[$res]; //@line 1990 "parsermodule.c"
        HEAP[$0]=$64; //@line 1990 "parsermodule.c"
        var $65=HEAP[$0]; //@line 1990 "parsermodule.c"
        HEAP[$retval]=$65; //@line 1990 "parsermodule.c"
        __label__ = 26; break; //@line 1990 "parsermodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 1990 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 1990 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_assert_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_130=__stackBase__+12;
        var $iftmp_129=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2001 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2001 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2001 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2001 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2005 "parsermodule.c"
        var $5=_validate_ntype($4, 291); //@line 2005 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2005 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2005 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2005 "parsermodule.c"
        var $8=((($7))|0)==2; //@line 2005 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2005 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2005 "parsermodule.c"
        var $10=((($9))|0)==4; //@line 2005 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2005 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2005 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2005 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2005 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2005 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str126)&4294967295)); //@line 2005 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2005 "parsermodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2005 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 2005 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2005 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2005 "parsermodule.c"
        var $20=(($19+24)&4294967295); //@line 2005 "parsermodule.c"
        var $21=_validate_test($20); //@line 2005 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 2005 "parsermodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2005 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_129]=1; //@line 2005 "parsermodule.c"
        __label__ = 7; break; //@line 2005 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_129]=0; //@line 2005 "parsermodule.c"
        __label__ = 7; break; //@line 2005 "parsermodule.c"
      case 7: // $bb6
        var $23=HEAP[$iftmp_129]; //@line 2005 "parsermodule.c"
        HEAP[$res]=$23; //@line 2005 "parsermodule.c"
        var $24=HEAP[$res]; //@line 2007 "parsermodule.c"
        var $25=((($24))|0)==0; //@line 2007 "parsermodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2007 "parsermodule.c"
      case 8: // $bb7
        var $26=_PyErr_Occurred(); //@line 2007 "parsermodule.c"
        var $27=($26)==0; //@line 2007 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2007 "parsermodule.c"
      case 9: // $bb8
        _err_string(((__str127)&4294967295)); //@line 2008 "parsermodule.c"
        __label__ = 10; break; //@line 2008 "parsermodule.c"
      case 10: // $bb9
        var $28=HEAP[$res]; //@line 2009 "parsermodule.c"
        var $29=((($28))|0)!=0; //@line 2009 "parsermodule.c"
        if ($29) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 2009 "parsermodule.c"
      case 11: // $bb10
        var $30=HEAP[$nch]; //@line 2009 "parsermodule.c"
        var $31=((($30))|0) > 2; //@line 2009 "parsermodule.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 2009 "parsermodule.c"
      case 12: // $bb11
        var $32=HEAP[$tree_addr]; //@line 2010 "parsermodule.c"
        var $33=(($32+20)&4294967295); //@line 2010 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2010 "parsermodule.c"
        var $35=(($34+48)&4294967295); //@line 2010 "parsermodule.c"
        var $36=_validate_terminal($35, 12, ((__str52)&4294967295)); //@line 2010 "parsermodule.c"
        var $37=((($36))|0)==0; //@line 2010 "parsermodule.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2010 "parsermodule.c"
      case 13: // $bb12
        var $38=HEAP[$tree_addr]; //@line 2010 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2010 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2010 "parsermodule.c"
        var $41=(($40+72)&4294967295); //@line 2010 "parsermodule.c"
        var $42=_validate_test($41); //@line 2010 "parsermodule.c"
        var $43=((($42))|0)==0; //@line 2010 "parsermodule.c"
        if ($43) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2010 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_130]=1; //@line 2010 "parsermodule.c"
        __label__ = 16; break; //@line 2010 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_130]=0; //@line 2010 "parsermodule.c"
        __label__ = 16; break; //@line 2010 "parsermodule.c"
      case 16: // $bb15
        var $44=HEAP[$iftmp_130]; //@line 2010 "parsermodule.c"
        HEAP[$res]=$44; //@line 2010 "parsermodule.c"
        __label__ = 17; break; //@line 2010 "parsermodule.c"
      case 17: // $bb16
        var $45=HEAP[$res]; //@line 2013 "parsermodule.c"
        HEAP[$0]=$45; //@line 2013 "parsermodule.c"
        var $46=HEAP[$0]; //@line 2013 "parsermodule.c"
        HEAP[$retval]=$46; //@line 2013 "parsermodule.c"
        __label__ = 18; break; //@line 2013 "parsermodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 2013 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 2013 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_while($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_132=__stackBase__+12;
        var $iftmp_131=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2020 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2020 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2020 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2020 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2026 "parsermodule.c"
        var $5=_validate_ntype($4, 294); //@line 2026 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2026 "parsermodule.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 2026 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2026 "parsermodule.c"
        var $8=((($7))|0)==4; //@line 2026 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2026 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2026 "parsermodule.c"
        var $10=((($9))|0)==7; //@line 2026 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 2026 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2026 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2026 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2026 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2026 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str128)&4294967295)); //@line 2026 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2026 "parsermodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 2026 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 2026 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2026 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2026 "parsermodule.c"
        var $20=(($19+24)&4294967295); //@line 2026 "parsermodule.c"
        var $21=_validate_test($20); //@line 2026 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 2026 "parsermodule.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 2026 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$tree_addr]; //@line 2026 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 2026 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2026 "parsermodule.c"
        var $26=(($25+48)&4294967295); //@line 2026 "parsermodule.c"
        var $27=_validate_terminal($26, 11, ((__str54)&4294967295)); //@line 2026 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 2026 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2026 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$tree_addr]; //@line 2026 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 2026 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2026 "parsermodule.c"
        var $32=(($31+72)&4294967295); //@line 2026 "parsermodule.c"
        var $33=_validate_suite($32); //@line 2026 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 2026 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2026 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_131]=1; //@line 2026 "parsermodule.c"
        __label__ = 9; break; //@line 2026 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_131]=0; //@line 2026 "parsermodule.c"
        __label__ = 9; break; //@line 2026 "parsermodule.c"
      case 9: // $bb8
        var $35=HEAP[$iftmp_131]; //@line 2026 "parsermodule.c"
        HEAP[$res]=$35; //@line 2026 "parsermodule.c"
        var $36=HEAP[$res]; //@line 2028 "parsermodule.c"
        var $37=((($36))|0)!=0; //@line 2028 "parsermodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 2028 "parsermodule.c"
      case 10: // $bb9
        var $38=HEAP[$nch]; //@line 2028 "parsermodule.c"
        var $39=((($38))|0)==7; //@line 2028 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 2028 "parsermodule.c"
      case 11: // $bb10
        var $40=HEAP[$tree_addr]; //@line 2029 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 2029 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2029 "parsermodule.c"
        var $43=(($42+96)&4294967295); //@line 2029 "parsermodule.c"
        var $44=_validate_terminal($43, 1, ((__str58)&4294967295)); //@line 2029 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2029 "parsermodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 2029 "parsermodule.c"
      case 12: // $bb11
        var $46=HEAP[$tree_addr]; //@line 2029 "parsermodule.c"
        var $47=(($46+20)&4294967295); //@line 2029 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2029 "parsermodule.c"
        var $49=(($48+120)&4294967295); //@line 2029 "parsermodule.c"
        var $50=_validate_terminal($49, 11, ((__str54)&4294967295)); //@line 2029 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 2029 "parsermodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2029 "parsermodule.c"
      case 13: // $bb12
        var $52=HEAP[$tree_addr]; //@line 2029 "parsermodule.c"
        var $53=(($52+20)&4294967295); //@line 2029 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2029 "parsermodule.c"
        var $55=(($54+144)&4294967295); //@line 2029 "parsermodule.c"
        var $56=_validate_suite($55); //@line 2029 "parsermodule.c"
        var $57=((($56))|0)==0; //@line 2029 "parsermodule.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2029 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_132]=1; //@line 2029 "parsermodule.c"
        __label__ = 16; break; //@line 2029 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_132]=0; //@line 2029 "parsermodule.c"
        __label__ = 16; break; //@line 2029 "parsermodule.c"
      case 16: // $bb15
        var $58=HEAP[$iftmp_132]; //@line 2029 "parsermodule.c"
        HEAP[$res]=$58; //@line 2029 "parsermodule.c"
        __label__ = 17; break; //@line 2029 "parsermodule.c"
      case 17: // $bb16
        var $59=HEAP[$res]; //@line 2033 "parsermodule.c"
        HEAP[$0]=$59; //@line 2033 "parsermodule.c"
        var $60=HEAP[$0]; //@line 2033 "parsermodule.c"
        HEAP[$retval]=$60; //@line 2033 "parsermodule.c"
        __label__ = 18; break; //@line 2033 "parsermodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 2033 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 2033 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_for($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_134=__stackBase__+12;
        var $iftmp_133=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2040 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2040 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2040 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2040 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $5=_validate_ntype($4, 295); //@line 2048 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2048 "parsermodule.c"
        if ($6) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 2048 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2048 "parsermodule.c"
        var $8=((($7))|0)==6; //@line 2048 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2048 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2048 "parsermodule.c"
        var $10=((($9))|0)==9; //@line 2048 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2048 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2048 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2048 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2048 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str75)&4294967295)); //@line 2048 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2048 "parsermodule.c"
        if ($16) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 2048 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2048 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2048 "parsermodule.c"
        var $20=(($19+24)&4294967295); //@line 2048 "parsermodule.c"
        var $21=_validate_exprlist($20); //@line 2048 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 2048 "parsermodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 2048 "parsermodule.c"
      case 5: // $bb4
        var $23=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 2048 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2048 "parsermodule.c"
        var $26=(($25+48)&4294967295); //@line 2048 "parsermodule.c"
        var $27=_validate_terminal($26, 1, ((__str76)&4294967295)); //@line 2048 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 2048 "parsermodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 2048 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 2048 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2048 "parsermodule.c"
        var $32=(($31+72)&4294967295); //@line 2048 "parsermodule.c"
        var $33=_validate_testlist($32); //@line 2048 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 2048 "parsermodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2048 "parsermodule.c"
      case 7: // $bb6
        var $35=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $36=(($35+20)&4294967295); //@line 2048 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2048 "parsermodule.c"
        var $38=(($37+96)&4294967295); //@line 2048 "parsermodule.c"
        var $39=_validate_terminal($38, 11, ((__str54)&4294967295)); //@line 2048 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 2048 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2048 "parsermodule.c"
      case 8: // $bb7
        var $41=HEAP[$tree_addr]; //@line 2048 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 2048 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2048 "parsermodule.c"
        var $44=(($43+120)&4294967295); //@line 2048 "parsermodule.c"
        var $45=_validate_suite($44); //@line 2048 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 2048 "parsermodule.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2048 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_133]=1; //@line 2048 "parsermodule.c"
        __label__ = 11; break; //@line 2048 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_133]=0; //@line 2048 "parsermodule.c"
        __label__ = 11; break; //@line 2048 "parsermodule.c"
      case 11: // $bb10
        var $47=HEAP[$iftmp_133]; //@line 2048 "parsermodule.c"
        HEAP[$res]=$47; //@line 2048 "parsermodule.c"
        var $48=HEAP[$res]; //@line 2050 "parsermodule.c"
        var $49=((($48))|0)!=0; //@line 2050 "parsermodule.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 2050 "parsermodule.c"
      case 12: // $bb11
        var $50=HEAP[$nch]; //@line 2050 "parsermodule.c"
        var $51=((($50))|0)==9; //@line 2050 "parsermodule.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 2050 "parsermodule.c"
      case 13: // $bb12
        var $52=HEAP[$tree_addr]; //@line 2051 "parsermodule.c"
        var $53=(($52+20)&4294967295); //@line 2051 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2051 "parsermodule.c"
        var $55=(($54+144)&4294967295); //@line 2051 "parsermodule.c"
        var $56=_validate_terminal($55, 1, ((__str58)&4294967295)); //@line 2051 "parsermodule.c"
        var $57=((($56))|0)==0; //@line 2051 "parsermodule.c"
        if ($57) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 2051 "parsermodule.c"
      case 14: // $bb13
        var $58=HEAP[$tree_addr]; //@line 2051 "parsermodule.c"
        var $59=(($58+20)&4294967295); //@line 2051 "parsermodule.c"
        var $60=HEAP[$59]; //@line 2051 "parsermodule.c"
        var $61=(($60+168)&4294967295); //@line 2051 "parsermodule.c"
        var $62=_validate_terminal($61, 11, ((__str54)&4294967295)); //@line 2051 "parsermodule.c"
        var $63=((($62))|0)==0; //@line 2051 "parsermodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2051 "parsermodule.c"
      case 15: // $bb14
        var $64=HEAP[$tree_addr]; //@line 2051 "parsermodule.c"
        var $65=(($64+20)&4294967295); //@line 2051 "parsermodule.c"
        var $66=HEAP[$65]; //@line 2051 "parsermodule.c"
        var $67=(($66+192)&4294967295); //@line 2051 "parsermodule.c"
        var $68=_validate_suite($67); //@line 2051 "parsermodule.c"
        var $69=((($68))|0)==0; //@line 2051 "parsermodule.c"
        if ($69) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2051 "parsermodule.c"
      case 16: // $bb15
        HEAP[$iftmp_134]=1; //@line 2051 "parsermodule.c"
        __label__ = 18; break; //@line 2051 "parsermodule.c"
      case 17: // $bb16
        HEAP[$iftmp_134]=0; //@line 2051 "parsermodule.c"
        __label__ = 18; break; //@line 2051 "parsermodule.c"
      case 18: // $bb17
        var $70=HEAP[$iftmp_134]; //@line 2051 "parsermodule.c"
        HEAP[$res]=$70; //@line 2051 "parsermodule.c"
        __label__ = 19; break; //@line 2051 "parsermodule.c"
      case 19: // $bb18
        var $71=HEAP[$res]; //@line 2055 "parsermodule.c"
        HEAP[$0]=$71; //@line 2055 "parsermodule.c"
        var $72=HEAP[$0]; //@line 2055 "parsermodule.c"
        HEAP[$retval]=$72; //@line 2055 "parsermodule.c"
        __label__ = 20; break; //@line 2055 "parsermodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 2055 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2055 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_try($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_141=__stackBase__+8;
        var $iftmp_140=__stackBase__+12;
        var $iftmp_139=__stackBase__+16;
        var $0=__stackBase__+20;
        var $iftmp_138=__stackBase__+24;
        var $iftmp_136=__stackBase__+28;
        var $iftmp_135=__stackBase__+32;
        var $nch=__stackBase__+36;
        var $pos=__stackBase__+40;
        var $res=__stackBase__+44;
        var $name=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2068 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2068 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2068 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2068 "parsermodule.c"
        HEAP[$pos]=3; //@line 2069 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2071 "parsermodule.c"
        var $5=_validate_ntype($4, 296); //@line 2071 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2071 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2071 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2071 "parsermodule.c"
        var $8=((($7))|0) <= 5; //@line 2071 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2071 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2071 "parsermodule.c"
        var $10=((($9))|0) % 3; //@line 2071 "parsermodule.c"
        var $11=((($10))|0)!=0; //@line 2071 "parsermodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2071 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_135]=1; //@line 2071 "parsermodule.c"
        __label__ = 5; break; //@line 2071 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_135]=0; //@line 2071 "parsermodule.c"
        __label__ = 5; break; //@line 2071 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$iftmp_135]; //@line 2071 "parsermodule.c"
        HEAP[$res]=$12; //@line 2071 "parsermodule.c"
        var $13=HEAP[$res]; //@line 2073 "parsermodule.c"
        var $14=((($13))|0)!=0; //@line 2073 "parsermodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 2073 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$tree_addr]; //@line 2074 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 2074 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2074 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 2074 "parsermodule.c"
        var $19=_validate_terminal($18, 1, ((__str129)&4294967295)); //@line 2074 "parsermodule.c"
        var $20=((($19))|0)==0; //@line 2074 "parsermodule.c"
        if ($20) { __label__ = 12; break; } else { __label__ = 7; break; } //@line 2074 "parsermodule.c"
      case 7: // $bb6
        var $21=HEAP[$tree_addr]; //@line 2074 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 2074 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2074 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 2074 "parsermodule.c"
        var $25=_validate_terminal($24, 11, ((__str54)&4294967295)); //@line 2074 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 2074 "parsermodule.c"
        if ($26) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 2074 "parsermodule.c"
      case 8: // $bb7
        var $27=HEAP[$tree_addr]; //@line 2074 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 2074 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2074 "parsermodule.c"
        var $30=(($29+48)&4294967295); //@line 2074 "parsermodule.c"
        var $31=_validate_suite($30); //@line 2074 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2074 "parsermodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 2074 "parsermodule.c"
      case 9: // $bb8
        var $33=HEAP[$tree_addr]; //@line 2074 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2074 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2074 "parsermodule.c"
        var $36=HEAP[$nch]; //@line 2074 "parsermodule.c"
        var $37=((($36) - 2)&4294967295); //@line 2074 "parsermodule.c"
        var $38=(($35+24*$37)&4294967295); //@line 2074 "parsermodule.c"
        var $39=_validate_terminal($38, 11, ((__str54)&4294967295)); //@line 2074 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 2074 "parsermodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 2074 "parsermodule.c"
      case 10: // $bb9
        var $41=HEAP[$tree_addr]; //@line 2074 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 2074 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2074 "parsermodule.c"
        var $44=HEAP[$nch]; //@line 2074 "parsermodule.c"
        var $45=((($44) - 1)&4294967295); //@line 2074 "parsermodule.c"
        var $46=(($43+24*$45)&4294967295); //@line 2074 "parsermodule.c"
        var $47=_validate_suite($46); //@line 2074 "parsermodule.c"
        var $48=((($47))|0)==0; //@line 2074 "parsermodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2074 "parsermodule.c"
      case 11: // $bb10
        HEAP[$iftmp_136]=1; //@line 2074 "parsermodule.c"
        __label__ = 13; break; //@line 2074 "parsermodule.c"
      case 12: // $bb11
        HEAP[$iftmp_136]=0; //@line 2074 "parsermodule.c"
        __label__ = 13; break; //@line 2074 "parsermodule.c"
      case 13: // $bb12
        var $49=HEAP[$iftmp_136]; //@line 2074 "parsermodule.c"
        HEAP[$res]=$49; //@line 2074 "parsermodule.c"
        __label__ = 18; break; //@line 2074 "parsermodule.c"
      case 14: // $bb13
        var $50=_PyErr_Occurred(); //@line 2079 "parsermodule.c"
        var $51=($50)==0; //@line 2079 "parsermodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 2079 "parsermodule.c"
      case 15: // $bb14
        HEAP[$name]=((__str130)&4294967295); //@line 2080 "parsermodule.c"
        var $52=HEAP[$tree_addr]; //@line 2081 "parsermodule.c"
        var $53=(($52+20)&4294967295); //@line 2081 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2081 "parsermodule.c"
        var $55=HEAP[$nch]; //@line 2081 "parsermodule.c"
        var $56=((($55) - 3)&4294967295); //@line 2081 "parsermodule.c"
        var $57=(($54+24*$56)&4294967295); //@line 2081 "parsermodule.c"
        var $58=(($57)&4294967295); //@line 2081 "parsermodule.c"
        var $59=HEAP[$58]; //@line 2081 "parsermodule.c"
        var $60=reSign(($59), 16, 0)!=299; //@line 2081 "parsermodule.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2081 "parsermodule.c"
      case 16: // $bb15
        var $61=HEAP[$tree_addr]; //@line 2082 "parsermodule.c"
        var $62=(($61+20)&4294967295); //@line 2082 "parsermodule.c"
        var $63=HEAP[$62]; //@line 2082 "parsermodule.c"
        var $64=HEAP[$nch]; //@line 2082 "parsermodule.c"
        var $65=((($64) - 3)&4294967295); //@line 2082 "parsermodule.c"
        var $66=(($63+24*$65)&4294967295); //@line 2082 "parsermodule.c"
        var $67=(($66+4)&4294967295); //@line 2082 "parsermodule.c"
        var $68=HEAP[$67]; //@line 2082 "parsermodule.c"
        HEAP[$name]=$68; //@line 2082 "parsermodule.c"
        __label__ = 17; break; //@line 2082 "parsermodule.c"
      case 17: // $bb16
        var $69=HEAP[_parser_error]; //@line 2084 "parsermodule.c"
        var $70=HEAP[$name]; //@line 2084 "parsermodule.c"
        var $71=_PyErr_Format($69, ((__str131)&4294967295), $70); //@line 2084 "parsermodule.c"
        __label__ = 18; break; //@line 2084 "parsermodule.c"
      case 18: // $bb17
        var $72=HEAP[$res]; //@line 2088 "parsermodule.c"
        var $73=((($72))|0)!=0; //@line 2088 "parsermodule.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 27; break; } //@line 2088 "parsermodule.c"
      case 19: // $bb18
        var $74=HEAP[$tree_addr]; //@line 2088 "parsermodule.c"
        var $75=(($74+20)&4294967295); //@line 2088 "parsermodule.c"
        var $76=HEAP[$75]; //@line 2088 "parsermodule.c"
        var $77=HEAP[$pos]; //@line 2088 "parsermodule.c"
        var $78=(($76+24*$77)&4294967295); //@line 2088 "parsermodule.c"
        var $79=(($78)&4294967295); //@line 2088 "parsermodule.c"
        var $80=HEAP[$79]; //@line 2088 "parsermodule.c"
        var $81=reSign(($80), 16, 0)==1; //@line 2088 "parsermodule.c"
        if ($81) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 2088 "parsermodule.c"
      case 20: // $bb19
        var $82=HEAP[$tree_addr]; //@line 2088 "parsermodule.c"
        var $83=(($82+20)&4294967295); //@line 2088 "parsermodule.c"
        var $84=HEAP[$83]; //@line 2088 "parsermodule.c"
        var $85=HEAP[$pos]; //@line 2088 "parsermodule.c"
        var $86=(($84+24*$85)&4294967295); //@line 2088 "parsermodule.c"
        var $87=(($86+4)&4294967295); //@line 2088 "parsermodule.c"
        var $88=HEAP[$87]; //@line 2088 "parsermodule.c"
        var $89=_strcmp($88, ((__str132)&4294967295)); //@line 2088 "parsermodule.c"
        var $90=((($89))|0)==0; //@line 2088 "parsermodule.c"
        if ($90) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 2088 "parsermodule.c"
      case 21: // $bb20
        var $91=HEAP[$tree_addr]; //@line 2090 "parsermodule.c"
        var $92=_validate_numnodes($91, 6, ((__str133)&4294967295)); //@line 2090 "parsermodule.c"
        var $93=((($92))|0)==0; //@line 2090 "parsermodule.c"
        if ($93) { __label__ = 25; break; } else { __label__ = 22; break; } //@line 2090 "parsermodule.c"
      case 22: // $bb21
        var $94=HEAP[$tree_addr]; //@line 2090 "parsermodule.c"
        var $95=(($94+20)&4294967295); //@line 2090 "parsermodule.c"
        var $96=HEAP[$95]; //@line 2090 "parsermodule.c"
        var $97=(($96+96)&4294967295); //@line 2090 "parsermodule.c"
        var $98=_validate_terminal($97, 11, ((__str54)&4294967295)); //@line 2090 "parsermodule.c"
        var $99=((($98))|0)==0; //@line 2090 "parsermodule.c"
        if ($99) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 2090 "parsermodule.c"
      case 23: // $bb22
        var $100=HEAP[$tree_addr]; //@line 2090 "parsermodule.c"
        var $101=(($100+20)&4294967295); //@line 2090 "parsermodule.c"
        var $102=HEAP[$101]; //@line 2090 "parsermodule.c"
        var $103=(($102+120)&4294967295); //@line 2090 "parsermodule.c"
        var $104=_validate_suite($103); //@line 2090 "parsermodule.c"
        var $105=((($104))|0)==0; //@line 2090 "parsermodule.c"
        if ($105) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 2090 "parsermodule.c"
      case 24: // $bb23
        HEAP[$iftmp_138]=1; //@line 2090 "parsermodule.c"
        __label__ = 26; break; //@line 2090 "parsermodule.c"
      case 25: // $bb24
        HEAP[$iftmp_138]=0; //@line 2090 "parsermodule.c"
        __label__ = 26; break; //@line 2090 "parsermodule.c"
      case 26: // $bb25
        var $106=HEAP[$iftmp_138]; //@line 2090 "parsermodule.c"
        HEAP[$res]=$106; //@line 2090 "parsermodule.c"
        var $107=HEAP[$res]; //@line 2093 "parsermodule.c"
        HEAP[$0]=$107; //@line 2093 "parsermodule.c"
        __label__ = 56; break; //@line 2093 "parsermodule.c"
      case 27: // $bb26
        __label__ = 34; break; //@line 2093 "parsermodule.c"
      case 28: // $bb27
        var $108=HEAP[$tree_addr]; //@line 2097 "parsermodule.c"
        var $109=(($108+20)&4294967295); //@line 2097 "parsermodule.c"
        var $110=HEAP[$109]; //@line 2097 "parsermodule.c"
        var $111=HEAP[$pos]; //@line 2097 "parsermodule.c"
        var $112=(($110+24*$111)&4294967295); //@line 2097 "parsermodule.c"
        var $113=_validate_except_clause($112); //@line 2097 "parsermodule.c"
        var $114=((($113))|0)==0; //@line 2097 "parsermodule.c"
        if ($114) { __label__ = 32; break; } else { __label__ = 29; break; } //@line 2097 "parsermodule.c"
      case 29: // $bb28
        var $115=HEAP[$tree_addr]; //@line 2097 "parsermodule.c"
        var $116=(($115+20)&4294967295); //@line 2097 "parsermodule.c"
        var $117=HEAP[$116]; //@line 2097 "parsermodule.c"
        var $118=HEAP[$pos]; //@line 2097 "parsermodule.c"
        var $119=((($118) + 1)&4294967295); //@line 2097 "parsermodule.c"
        var $120=(($117+24*$119)&4294967295); //@line 2097 "parsermodule.c"
        var $121=_validate_terminal($120, 11, ((__str54)&4294967295)); //@line 2097 "parsermodule.c"
        var $122=((($121))|0)==0; //@line 2097 "parsermodule.c"
        if ($122) { __label__ = 32; break; } else { __label__ = 30; break; } //@line 2097 "parsermodule.c"
      case 30: // $bb29
        var $123=HEAP[$tree_addr]; //@line 2097 "parsermodule.c"
        var $124=(($123+20)&4294967295); //@line 2097 "parsermodule.c"
        var $125=HEAP[$124]; //@line 2097 "parsermodule.c"
        var $126=HEAP[$pos]; //@line 2097 "parsermodule.c"
        var $127=((($126) + 2)&4294967295); //@line 2097 "parsermodule.c"
        var $128=(($125+24*$127)&4294967295); //@line 2097 "parsermodule.c"
        var $129=_validate_suite($128); //@line 2097 "parsermodule.c"
        var $130=((($129))|0)==0; //@line 2097 "parsermodule.c"
        if ($130) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 2097 "parsermodule.c"
      case 31: // $bb30
        HEAP[$iftmp_139]=1; //@line 2097 "parsermodule.c"
        __label__ = 33; break; //@line 2097 "parsermodule.c"
      case 32: // $bb31
        HEAP[$iftmp_139]=0; //@line 2097 "parsermodule.c"
        __label__ = 33; break; //@line 2097 "parsermodule.c"
      case 33: // $bb32
        var $131=HEAP[$iftmp_139]; //@line 2097 "parsermodule.c"
        HEAP[$res]=$131; //@line 2097 "parsermodule.c"
        var $132=HEAP[$pos]; //@line 2100 "parsermodule.c"
        var $133=((($132) + 3)&4294967295); //@line 2100 "parsermodule.c"
        HEAP[$pos]=$133; //@line 2100 "parsermodule.c"
        __label__ = 34; break; //@line 2100 "parsermodule.c"
      case 34: // $bb33
        var $134=HEAP[$res]; //@line 2096 "parsermodule.c"
        var $135=((($134))|0)==0; //@line 2096 "parsermodule.c"
        if ($135) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 2096 "parsermodule.c"
      case 35: // $bb34
        var $136=HEAP[$pos]; //@line 2096 "parsermodule.c"
        var $137=HEAP[$nch]; //@line 2096 "parsermodule.c"
        var $138=((($136))|0) >= ((($137))|0); //@line 2096 "parsermodule.c"
        if ($138) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 2096 "parsermodule.c"
      case 36: // $bb35
        var $139=HEAP[$tree_addr]; //@line 2096 "parsermodule.c"
        var $140=(($139+20)&4294967295); //@line 2096 "parsermodule.c"
        var $141=HEAP[$140]; //@line 2096 "parsermodule.c"
        var $142=HEAP[$pos]; //@line 2096 "parsermodule.c"
        var $143=(($141+24*$142)&4294967295); //@line 2096 "parsermodule.c"
        var $144=(($143)&4294967295); //@line 2096 "parsermodule.c"
        var $145=HEAP[$144]; //@line 2096 "parsermodule.c"
        var $146=reSign(($145), 16, 0)==299; //@line 2096 "parsermodule.c"
        if ($146) { __label__ = 28; break; } else { __label__ = 37; break; } //@line 2096 "parsermodule.c"
      case 37: // $bb36
        var $147=HEAP[$res]; //@line 2103 "parsermodule.c"
        var $148=((($147))|0)!=0; //@line 2103 "parsermodule.c"
        if ($148) { __label__ = 38; break; } else { __label__ = 46; break; } //@line 2103 "parsermodule.c"
      case 38: // $bb37
        var $149=HEAP[$pos]; //@line 2103 "parsermodule.c"
        var $150=HEAP[$nch]; //@line 2103 "parsermodule.c"
        var $151=((($149))|0) < ((($150))|0); //@line 2103 "parsermodule.c"
        if ($151) { __label__ = 39; break; } else { __label__ = 46; break; } //@line 2103 "parsermodule.c"
      case 39: // $bb38
        var $152=HEAP[$tree_addr]; //@line 2103 "parsermodule.c"
        var $153=(($152+20)&4294967295); //@line 2103 "parsermodule.c"
        var $154=HEAP[$153]; //@line 2103 "parsermodule.c"
        var $155=HEAP[$pos]; //@line 2103 "parsermodule.c"
        var $156=(($154+24*$155)&4294967295); //@line 2103 "parsermodule.c"
        var $157=(($156)&4294967295); //@line 2103 "parsermodule.c"
        var $158=HEAP[$157]; //@line 2103 "parsermodule.c"
        var $159=reSign(($158), 16, 0)==1; //@line 2103 "parsermodule.c"
        if ($159) { __label__ = 40; break; } else { __label__ = 46; break; } //@line 2103 "parsermodule.c"
      case 40: // $bb39
        var $160=HEAP[$tree_addr]; //@line 2103 "parsermodule.c"
        var $161=(($160+20)&4294967295); //@line 2103 "parsermodule.c"
        var $162=HEAP[$161]; //@line 2103 "parsermodule.c"
        var $163=HEAP[$pos]; //@line 2103 "parsermodule.c"
        var $164=(($162+24*$163)&4294967295); //@line 2103 "parsermodule.c"
        var $165=(($164+4)&4294967295); //@line 2103 "parsermodule.c"
        var $166=HEAP[$165]; //@line 2103 "parsermodule.c"
        var $167=_strcmp($166, ((__str58)&4294967295)); //@line 2103 "parsermodule.c"
        var $168=((($167))|0)==0; //@line 2103 "parsermodule.c"
        if ($168) { __label__ = 41; break; } else { __label__ = 46; break; } //@line 2103 "parsermodule.c"
      case 41: // $bb40
        var $169=HEAP[$tree_addr]; //@line 2105 "parsermodule.c"
        var $170=(($169+20)&4294967295); //@line 2105 "parsermodule.c"
        var $171=HEAP[$170]; //@line 2105 "parsermodule.c"
        var $172=HEAP[$pos]; //@line 2105 "parsermodule.c"
        var $173=((($172) + 1)&4294967295); //@line 2105 "parsermodule.c"
        var $174=(($171+24*$173)&4294967295); //@line 2105 "parsermodule.c"
        var $175=_validate_terminal($174, 11, ((__str54)&4294967295)); //@line 2105 "parsermodule.c"
        var $176=((($175))|0)==0; //@line 2105 "parsermodule.c"
        if ($176) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 2105 "parsermodule.c"
      case 42: // $bb41
        var $177=HEAP[$tree_addr]; //@line 2105 "parsermodule.c"
        var $178=(($177+20)&4294967295); //@line 2105 "parsermodule.c"
        var $179=HEAP[$178]; //@line 2105 "parsermodule.c"
        var $180=HEAP[$pos]; //@line 2105 "parsermodule.c"
        var $181=((($180) + 2)&4294967295); //@line 2105 "parsermodule.c"
        var $182=(($179+24*$181)&4294967295); //@line 2105 "parsermodule.c"
        var $183=_validate_suite($182); //@line 2105 "parsermodule.c"
        var $184=((($183))|0)==0; //@line 2105 "parsermodule.c"
        if ($184) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 2105 "parsermodule.c"
      case 43: // $bb42
        HEAP[$iftmp_140]=1; //@line 2105 "parsermodule.c"
        __label__ = 45; break; //@line 2105 "parsermodule.c"
      case 44: // $bb43
        HEAP[$iftmp_140]=0; //@line 2105 "parsermodule.c"
        __label__ = 45; break; //@line 2105 "parsermodule.c"
      case 45: // $bb44
        var $185=HEAP[$iftmp_140]; //@line 2105 "parsermodule.c"
        HEAP[$res]=$185; //@line 2105 "parsermodule.c"
        var $186=HEAP[$pos]; //@line 2107 "parsermodule.c"
        var $187=((($186) + 3)&4294967295); //@line 2107 "parsermodule.c"
        HEAP[$pos]=$187; //@line 2107 "parsermodule.c"
        __label__ = 46; break; //@line 2107 "parsermodule.c"
      case 46: // $bb45
        var $188=HEAP[$res]; //@line 2109 "parsermodule.c"
        var $189=((($188))|0)!=0; //@line 2109 "parsermodule.c"
        if ($189) { __label__ = 47; break; } else { __label__ = 55; break; } //@line 2109 "parsermodule.c"
      case 47: // $bb46
        var $190=HEAP[$pos]; //@line 2109 "parsermodule.c"
        var $191=HEAP[$nch]; //@line 2109 "parsermodule.c"
        var $192=((($190))|0) < ((($191))|0); //@line 2109 "parsermodule.c"
        if ($192) { __label__ = 48; break; } else { __label__ = 55; break; } //@line 2109 "parsermodule.c"
      case 48: // $bb47
        var $193=HEAP[$tree_addr]; //@line 2111 "parsermodule.c"
        var $194=(($193+20)&4294967295); //@line 2111 "parsermodule.c"
        var $195=HEAP[$194]; //@line 2111 "parsermodule.c"
        var $196=HEAP[$pos]; //@line 2111 "parsermodule.c"
        var $197=(($195+24*$196)&4294967295); //@line 2111 "parsermodule.c"
        var $198=_validate_terminal($197, 1, ((__str132)&4294967295)); //@line 2111 "parsermodule.c"
        var $199=((($198))|0)==0; //@line 2111 "parsermodule.c"
        if ($199) { __label__ = 53; break; } else { __label__ = 49; break; } //@line 2111 "parsermodule.c"
      case 49: // $bb48
        var $200=HEAP[$pos]; //@line 2111 "parsermodule.c"
        var $201=((($200) + 3)&4294967295); //@line 2111 "parsermodule.c"
        var $202=HEAP[$tree_addr]; //@line 2111 "parsermodule.c"
        var $203=_validate_numnodes($202, $201, ((__str134)&4294967295)); //@line 2111 "parsermodule.c"
        var $204=((($203))|0)==0; //@line 2111 "parsermodule.c"
        if ($204) { __label__ = 53; break; } else { __label__ = 50; break; } //@line 2111 "parsermodule.c"
      case 50: // $bb49
        var $205=HEAP[$tree_addr]; //@line 2111 "parsermodule.c"
        var $206=(($205+20)&4294967295); //@line 2111 "parsermodule.c"
        var $207=HEAP[$206]; //@line 2111 "parsermodule.c"
        var $208=HEAP[$pos]; //@line 2111 "parsermodule.c"
        var $209=((($208) + 1)&4294967295); //@line 2111 "parsermodule.c"
        var $210=(($207+24*$209)&4294967295); //@line 2111 "parsermodule.c"
        var $211=_validate_terminal($210, 11, ((__str54)&4294967295)); //@line 2111 "parsermodule.c"
        var $212=((($211))|0)==0; //@line 2111 "parsermodule.c"
        if ($212) { __label__ = 53; break; } else { __label__ = 51; break; } //@line 2111 "parsermodule.c"
      case 51: // $bb50
        var $213=HEAP[$tree_addr]; //@line 2111 "parsermodule.c"
        var $214=(($213+20)&4294967295); //@line 2111 "parsermodule.c"
        var $215=HEAP[$214]; //@line 2111 "parsermodule.c"
        var $216=HEAP[$pos]; //@line 2111 "parsermodule.c"
        var $217=((($216) + 2)&4294967295); //@line 2111 "parsermodule.c"
        var $218=(($215+24*$217)&4294967295); //@line 2111 "parsermodule.c"
        var $219=_validate_suite($218); //@line 2111 "parsermodule.c"
        var $220=((($219))|0)==0; //@line 2111 "parsermodule.c"
        if ($220) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 2111 "parsermodule.c"
      case 52: // $bb51
        HEAP[$iftmp_141]=1; //@line 2111 "parsermodule.c"
        __label__ = 54; break; //@line 2111 "parsermodule.c"
      case 53: // $bb52
        HEAP[$iftmp_141]=0; //@line 2111 "parsermodule.c"
        __label__ = 54; break; //@line 2111 "parsermodule.c"
      case 54: // $bb53
        var $221=HEAP[$iftmp_141]; //@line 2111 "parsermodule.c"
        HEAP[$res]=$221; //@line 2111 "parsermodule.c"
        __label__ = 55; break; //@line 2111 "parsermodule.c"
      case 55: // $bb54
        var $222=HEAP[$res]; //@line 2116 "parsermodule.c"
        HEAP[$0]=$222; //@line 2116 "parsermodule.c"
        __label__ = 56; break; //@line 2116 "parsermodule.c"
      case 56: // $bb55
        var $223=HEAP[$0]; //@line 2093 "parsermodule.c"
        HEAP[$retval]=$223; //@line 2093 "parsermodule.c"
        __label__ = 57; break; //@line 2093 "parsermodule.c"
      case 57: // $return
        var $retval56=HEAP[$retval]; //@line 2093 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval56; //@line 2093 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_except_clause($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_143=__stackBase__+12;
        var $iftmp_142=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2123 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2123 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2123 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2123 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2126 "parsermodule.c"
        var $5=_validate_ntype($4, 299); //@line 2126 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2126 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2126 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2126 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 2126 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2126 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2126 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 2126 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2126 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 2126 "parsermodule.c"
        var $12=((($11))|0)==4; //@line 2126 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2126 "parsermodule.c"
      case 4: // $bb3
        var $13=HEAP[$tree_addr]; //@line 2126 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 2126 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2126 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2126 "parsermodule.c"
        var $17=_validate_terminal($16, 1, ((__str130)&4294967295)); //@line 2126 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 2126 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2126 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_142]=1; //@line 2126 "parsermodule.c"
        __label__ = 7; break; //@line 2126 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_142]=0; //@line 2126 "parsermodule.c"
        __label__ = 7; break; //@line 2126 "parsermodule.c"
      case 7: // $bb6
        var $19=HEAP[$iftmp_142]; //@line 2126 "parsermodule.c"
        HEAP[$res]=$19; //@line 2126 "parsermodule.c"
        var $20=HEAP[$res]; //@line 2128 "parsermodule.c"
        var $21=((($20))|0)!=0; //@line 2128 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2128 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$nch]; //@line 2128 "parsermodule.c"
        var $23=((($22))|0) > 1; //@line 2128 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2128 "parsermodule.c"
      case 9: // $bb8
        var $24=HEAP[$tree_addr]; //@line 2129 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2129 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2129 "parsermodule.c"
        var $27=(($26+24)&4294967295); //@line 2129 "parsermodule.c"
        var $28=_validate_test($27); //@line 2129 "parsermodule.c"
        HEAP[$res]=$28; //@line 2129 "parsermodule.c"
        __label__ = 10; break; //@line 2129 "parsermodule.c"
      case 10: // $bb9
        var $29=HEAP[$res]; //@line 2130 "parsermodule.c"
        var $30=((($29))|0)!=0; //@line 2130 "parsermodule.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 2130 "parsermodule.c"
      case 11: // $bb10
        var $31=HEAP[$nch]; //@line 2130 "parsermodule.c"
        var $32=((($31))|0)==4; //@line 2130 "parsermodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 20; break; } //@line 2130 "parsermodule.c"
      case 12: // $bb11
        var $33=HEAP[$tree_addr]; //@line 2131 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2131 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2131 "parsermodule.c"
        var $36=(($35+48)&4294967295); //@line 2131 "parsermodule.c"
        var $37=(($36)&4294967295); //@line 2131 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2131 "parsermodule.c"
        var $39=reSign(($38), 16, 0)==1; //@line 2131 "parsermodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2131 "parsermodule.c"
      case 13: // $bb12
        var $40=HEAP[$tree_addr]; //@line 2132 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 2132 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2132 "parsermodule.c"
        var $43=(($42+48)&4294967295); //@line 2132 "parsermodule.c"
        var $44=_validate_terminal($43, 1, ((__str112)&4294967295)); //@line 2132 "parsermodule.c"
        HEAP[$res]=$44; //@line 2132 "parsermodule.c"
        __label__ = 15; break; //@line 2132 "parsermodule.c"
      case 14: // $bb13
        var $45=HEAP[$tree_addr]; //@line 2134 "parsermodule.c"
        var $46=(($45+20)&4294967295); //@line 2134 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2134 "parsermodule.c"
        var $48=(($47+48)&4294967295); //@line 2134 "parsermodule.c"
        var $49=_validate_terminal($48, 12, ((__str52)&4294967295)); //@line 2134 "parsermodule.c"
        HEAP[$res]=$49; //@line 2134 "parsermodule.c"
        __label__ = 15; break; //@line 2134 "parsermodule.c"
      case 15: // $bb14
        var $50=HEAP[$res]; //@line 2135 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 2135 "parsermodule.c"
        if ($51) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 2135 "parsermodule.c"
      case 16: // $bb15
        var $52=HEAP[$tree_addr]; //@line 2135 "parsermodule.c"
        var $53=(($52+20)&4294967295); //@line 2135 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2135 "parsermodule.c"
        var $55=(($54+72)&4294967295); //@line 2135 "parsermodule.c"
        var $56=_validate_test($55); //@line 2135 "parsermodule.c"
        var $57=((($56))|0)==0; //@line 2135 "parsermodule.c"
        if ($57) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 2135 "parsermodule.c"
      case 17: // $bb16
        HEAP[$iftmp_143]=1; //@line 2135 "parsermodule.c"
        __label__ = 19; break; //@line 2135 "parsermodule.c"
      case 18: // $bb17
        HEAP[$iftmp_143]=0; //@line 2135 "parsermodule.c"
        __label__ = 19; break; //@line 2135 "parsermodule.c"
      case 19: // $bb18
        var $58=HEAP[$iftmp_143]; //@line 2135 "parsermodule.c"
        HEAP[$res]=$58; //@line 2135 "parsermodule.c"
        __label__ = 20; break; //@line 2135 "parsermodule.c"
      case 20: // $bb19
        var $59=HEAP[$res]; //@line 2137 "parsermodule.c"
        HEAP[$0]=$59; //@line 2137 "parsermodule.c"
        var $60=HEAP[$0]; //@line 2137 "parsermodule.c"
        HEAP[$retval]=$60; //@line 2137 "parsermodule.c"
        __label__ = 21; break; //@line 2137 "parsermodule.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 2137 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 2137 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_test($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_146=__stackBase__+12;
        var $iftmp_145=__stackBase__+16;
        var $iftmp_144=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2144 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2144 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2144 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2144 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2145 "parsermodule.c"
        var $5=_validate_ntype($4, 304); //@line 2145 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2145 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2145 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2145 "parsermodule.c"
        var $8=($7) & 1; //@line 2145 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2145 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2145 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2145 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2145 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2145 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2145 "parsermodule.c"
      case 2: // $bb4
        HEAP[$iftmp_144]=1; //@line 2145 "parsermodule.c"
        __label__ = 4; break; //@line 2145 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_144]=0; //@line 2145 "parsermodule.c"
        __label__ = 4; break; //@line 2145 "parsermodule.c"
      case 4: // $bb6
        var $10=HEAP[$iftmp_144]; //@line 2145 "parsermodule.c"
        HEAP[$res]=$10; //@line 2145 "parsermodule.c"
        var $11=HEAP[$res]; //@line 2147 "parsermodule.c"
        var $12=((($11))|0)==0; //@line 2147 "parsermodule.c"
        if ($12) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 2147 "parsermodule.c"
      case 5: // $bb7
        var $13=HEAP[$tree_addr]; //@line 2147 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 2147 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2147 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2147 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 2147 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2147 "parsermodule.c"
        var $19=reSign(($18), 16, 0)!=321; //@line 2147 "parsermodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 2147 "parsermodule.c"
      case 6: // $bb8
        var $20=HEAP[$nch]; //@line 2148 "parsermodule.c"
        var $21=((($20))|0)!=1; //@line 2148 "parsermodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2148 "parsermodule.c"
      case 7: // $bb9
        var $22=HEAP[$tree_addr]; //@line 2148 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 2148 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2148 "parsermodule.c"
        var $25=(($24)&4294967295); //@line 2148 "parsermodule.c"
        var $26=_validate_lambdef($25); //@line 2148 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 2148 "parsermodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2148 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_145]=1; //@line 2148 "parsermodule.c"
        __label__ = 10; break; //@line 2148 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_145]=0; //@line 2148 "parsermodule.c"
        __label__ = 10; break; //@line 2148 "parsermodule.c"
      case 10: // $bb12
        var $28=HEAP[$iftmp_145]; //@line 2148 "parsermodule.c"
        HEAP[$res]=$28; //@line 2148 "parsermodule.c"
        __label__ = 22; break; //@line 2148 "parsermodule.c"
      case 11: // $bb13
        var $29=HEAP[$res]; //@line 2150 "parsermodule.c"
        var $30=((($29))|0)!=0; //@line 2150 "parsermodule.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 22; break; } //@line 2150 "parsermodule.c"
      case 12: // $bb14
        var $31=HEAP[$tree_addr]; //@line 2151 "parsermodule.c"
        var $32=(($31+20)&4294967295); //@line 2151 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2151 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 2151 "parsermodule.c"
        var $35=_validate_or_test($34); //@line 2151 "parsermodule.c"
        HEAP[$res]=$35; //@line 2151 "parsermodule.c"
        var $36=HEAP[$res]; //@line 2152 "parsermodule.c"
        var $37=((($36))|0)==0; //@line 2152 "parsermodule.c"
        if ($37) { __label__ = 20; break; } else { __label__ = 13; break; } //@line 2152 "parsermodule.c"
      case 13: // $bb15
        var $38=HEAP[$nch]; //@line 2152 "parsermodule.c"
        var $39=((($38))|0)==1; //@line 2152 "parsermodule.c"
        if ($39) { __label__ = 19; break; } else { __label__ = 14; break; } //@line 2152 "parsermodule.c"
      case 14: // $bb16
        var $40=HEAP[$nch]; //@line 2152 "parsermodule.c"
        var $41=((($40))|0)!=5; //@line 2152 "parsermodule.c"
        if ($41) { __label__ = 20; break; } else { __label__ = 15; break; } //@line 2152 "parsermodule.c"
      case 15: // $bb17
        var $42=HEAP[$tree_addr]; //@line 2152 "parsermodule.c"
        var $43=(($42+20)&4294967295); //@line 2152 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2152 "parsermodule.c"
        var $45=(($44+24)&4294967295); //@line 2152 "parsermodule.c"
        var $46=_validate_terminal($45, 1, ((__str57)&4294967295)); //@line 2152 "parsermodule.c"
        var $47=((($46))|0)==0; //@line 2152 "parsermodule.c"
        if ($47) { __label__ = 20; break; } else { __label__ = 16; break; } //@line 2152 "parsermodule.c"
      case 16: // $bb18
        var $48=HEAP[$tree_addr]; //@line 2152 "parsermodule.c"
        var $49=(($48+20)&4294967295); //@line 2152 "parsermodule.c"
        var $50=HEAP[$49]; //@line 2152 "parsermodule.c"
        var $51=(($50+48)&4294967295); //@line 2152 "parsermodule.c"
        var $52=_validate_or_test($51); //@line 2152 "parsermodule.c"
        var $53=((($52))|0)==0; //@line 2152 "parsermodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 17; break; } //@line 2152 "parsermodule.c"
      case 17: // $bb19
        var $54=HEAP[$tree_addr]; //@line 2152 "parsermodule.c"
        var $55=(($54+20)&4294967295); //@line 2152 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2152 "parsermodule.c"
        var $57=(($56+72)&4294967295); //@line 2152 "parsermodule.c"
        var $58=_validate_terminal($57, 1, ((__str58)&4294967295)); //@line 2152 "parsermodule.c"
        var $59=((($58))|0)==0; //@line 2152 "parsermodule.c"
        if ($59) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 2152 "parsermodule.c"
      case 18: // $bb20
        var $60=HEAP[$tree_addr]; //@line 2152 "parsermodule.c"
        var $61=(($60+20)&4294967295); //@line 2152 "parsermodule.c"
        var $62=HEAP[$61]; //@line 2152 "parsermodule.c"
        var $63=(($62+96)&4294967295); //@line 2152 "parsermodule.c"
        var $64=_validate_test($63); //@line 2152 "parsermodule.c"
        var $65=((($64))|0)!=0; //@line 2152 "parsermodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2152 "parsermodule.c"
      case 19: // $bb21
        HEAP[$iftmp_146]=1; //@line 2152 "parsermodule.c"
        __label__ = 21; break; //@line 2152 "parsermodule.c"
      case 20: // $bb22
        HEAP[$iftmp_146]=0; //@line 2152 "parsermodule.c"
        __label__ = 21; break; //@line 2152 "parsermodule.c"
      case 21: // $bb23
        var $66=HEAP[$iftmp_146]; //@line 2152 "parsermodule.c"
        HEAP[$res]=$66; //@line 2152 "parsermodule.c"
        __label__ = 22; break; //@line 2152 "parsermodule.c"
      case 22: // $bb24
        var $67=HEAP[$res]; //@line 2158 "parsermodule.c"
        HEAP[$0]=$67; //@line 2158 "parsermodule.c"
        var $68=HEAP[$0]; //@line 2158 "parsermodule.c"
        HEAP[$retval]=$68; //@line 2158 "parsermodule.c"
        __label__ = 23; break; //@line 2158 "parsermodule.c"
      case 23: // $return
        var $retval25=HEAP[$retval]; //@line 2158 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 2158 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_old_test($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_147=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2164 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2164 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2164 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2164 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2165 "parsermodule.c"
        var $5=_validate_ntype($4, 302); //@line 2165 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2165 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2165 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2165 "parsermodule.c"
        var $8=((($7))|0)!=1; //@line 2165 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2165 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_147]=1; //@line 2165 "parsermodule.c"
        __label__ = 4; break; //@line 2165 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_147]=0; //@line 2165 "parsermodule.c"
        __label__ = 4; break; //@line 2165 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$iftmp_147]; //@line 2165 "parsermodule.c"
        HEAP[$res]=$9; //@line 2165 "parsermodule.c"
        var $10=HEAP[$res]; //@line 2167 "parsermodule.c"
        var $11=((($10))|0)==0; //@line 2167 "parsermodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2167 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$tree_addr]; //@line 2167 "parsermodule.c"
        var $13=(($12+20)&4294967295); //@line 2167 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2167 "parsermodule.c"
        var $15=(($14)&4294967295); //@line 2167 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2167 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2167 "parsermodule.c"
        var $18=reSign(($17), 16, 0)!=303; //@line 2167 "parsermodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2167 "parsermodule.c"
      case 6: // $bb5
        var $19=HEAP[$tree_addr]; //@line 2168 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 2168 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2168 "parsermodule.c"
        var $22=(($21)&4294967295); //@line 2168 "parsermodule.c"
        var $23=_validate_old_lambdef($22); //@line 2168 "parsermodule.c"
        HEAP[$res]=$23; //@line 2168 "parsermodule.c"
        __label__ = 9; break; //@line 2168 "parsermodule.c"
      case 7: // $bb6
        var $24=HEAP[$res]; //@line 2169 "parsermodule.c"
        var $25=((($24))|0)!=0; //@line 2169 "parsermodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2169 "parsermodule.c"
      case 8: // $bb7
        var $26=HEAP[$tree_addr]; //@line 2170 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 2170 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2170 "parsermodule.c"
        var $29=(($28)&4294967295); //@line 2170 "parsermodule.c"
        var $30=_validate_or_test($29); //@line 2170 "parsermodule.c"
        HEAP[$res]=$30; //@line 2170 "parsermodule.c"
        __label__ = 9; break; //@line 2170 "parsermodule.c"
      case 9: // $bb8
        var $31=HEAP[$res]; //@line 2172 "parsermodule.c"
        HEAP[$0]=$31; //@line 2172 "parsermodule.c"
        var $32=HEAP[$0]; //@line 2172 "parsermodule.c"
        HEAP[$retval]=$32; //@line 2172 "parsermodule.c"
        __label__ = 10; break; //@line 2172 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2172 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2172 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_or_test($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_149=__stackBase__+12;
        var $iftmp_148=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $pos=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2178 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2178 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2178 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2178 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2179 "parsermodule.c"
        var $5=_validate_ntype($4, 305); //@line 2179 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2179 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2179 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2179 "parsermodule.c"
        var $8=($7) & 1; //@line 2179 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2179 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2179 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2179 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2179 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2179 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2179 "parsermodule.c"
      case 2: // $bb4
        HEAP[$iftmp_148]=1; //@line 2179 "parsermodule.c"
        __label__ = 4; break; //@line 2179 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_148]=0; //@line 2179 "parsermodule.c"
        __label__ = 4; break; //@line 2179 "parsermodule.c"
      case 4: // $bb6
        var $10=HEAP[$iftmp_148]; //@line 2179 "parsermodule.c"
        HEAP[$res]=$10; //@line 2179 "parsermodule.c"
        var $11=HEAP[$res]; //@line 2181 "parsermodule.c"
        var $12=((($11))|0)!=0; //@line 2181 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 13; break; } //@line 2181 "parsermodule.c"
      case 5: // $bb7
        var $13=HEAP[$tree_addr]; //@line 2183 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 2183 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2183 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2183 "parsermodule.c"
        var $17=_validate_and_test($16); //@line 2183 "parsermodule.c"
        HEAP[$res]=$17; //@line 2183 "parsermodule.c"
        HEAP[$pos]=1; //@line 2184 "parsermodule.c"
        __label__ = 11; break; //@line 2184 "parsermodule.c"
      case 6: // $bb8
        var $18=HEAP[$tree_addr]; //@line 2185 "parsermodule.c"
        var $19=(($18+20)&4294967295); //@line 2185 "parsermodule.c"
        var $20=HEAP[$19]; //@line 2185 "parsermodule.c"
        var $21=HEAP[$pos]; //@line 2185 "parsermodule.c"
        var $22=(($20+24*$21)&4294967295); //@line 2185 "parsermodule.c"
        var $23=_validate_terminal($22, 1, ((__str135)&4294967295)); //@line 2185 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 2185 "parsermodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2185 "parsermodule.c"
      case 7: // $bb9
        var $25=HEAP[$tree_addr]; //@line 2185 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2185 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2185 "parsermodule.c"
        var $28=HEAP[$pos]; //@line 2185 "parsermodule.c"
        var $29=((($28) + 1)&4294967295); //@line 2185 "parsermodule.c"
        var $30=(($27+24*$29)&4294967295); //@line 2185 "parsermodule.c"
        var $31=_validate_and_test($30); //@line 2185 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2185 "parsermodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2185 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_149]=1; //@line 2185 "parsermodule.c"
        __label__ = 10; break; //@line 2185 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_149]=0; //@line 2185 "parsermodule.c"
        __label__ = 10; break; //@line 2185 "parsermodule.c"
      case 10: // $bb12
        var $33=HEAP[$iftmp_149]; //@line 2185 "parsermodule.c"
        HEAP[$res]=$33; //@line 2185 "parsermodule.c"
        var $34=HEAP[$pos]; //@line 2184 "parsermodule.c"
        var $35=((($34) + 2)&4294967295); //@line 2184 "parsermodule.c"
        HEAP[$pos]=$35; //@line 2184 "parsermodule.c"
        __label__ = 11; break; //@line 2184 "parsermodule.c"
      case 11: // $bb13
        var $36=HEAP[$res]; //@line 2184 "parsermodule.c"
        var $37=((($36))|0)==0; //@line 2184 "parsermodule.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2184 "parsermodule.c"
      case 12: // $bb14
        var $38=HEAP[$pos]; //@line 2184 "parsermodule.c"
        var $39=HEAP[$nch]; //@line 2184 "parsermodule.c"
        var $40=((($38))|0) < ((($39))|0); //@line 2184 "parsermodule.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2184 "parsermodule.c"
      case 13: // $bb15
        var $41=HEAP[$res]; //@line 2188 "parsermodule.c"
        HEAP[$0]=$41; //@line 2188 "parsermodule.c"
        var $42=HEAP[$0]; //@line 2188 "parsermodule.c"
        HEAP[$retval]=$42; //@line 2188 "parsermodule.c"
        __label__ = 14; break; //@line 2188 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2188 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2188 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_test($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_151=__stackBase__+12;
        var $iftmp_150=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2196 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2196 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2196 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2196 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2199 "parsermodule.c"
        var $5=_validate_ntype($4, 306); //@line 2199 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2199 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2199 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2199 "parsermodule.c"
        var $8=($7) & 1; //@line 2199 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2199 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2199 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2199 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2199 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2199 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2199 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2199 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2199 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2199 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2199 "parsermodule.c"
        var $14=_validate_not_test($13); //@line 2199 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2199 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2199 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_150]=1; //@line 2199 "parsermodule.c"
        __label__ = 5; break; //@line 2199 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_150]=0; //@line 2199 "parsermodule.c"
        __label__ = 5; break; //@line 2199 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_150]; //@line 2199 "parsermodule.c"
        HEAP[$res]=$16; //@line 2199 "parsermodule.c"
        HEAP[$pos]=1; //@line 2201 "parsermodule.c"
        __label__ = 11; break; //@line 2201 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2202 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2202 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2202 "parsermodule.c"
        var $20=HEAP[$pos]; //@line 2202 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 2202 "parsermodule.c"
        var $22=_validate_terminal($21, 1, ((__str136)&4294967295)); //@line 2202 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 2202 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2202 "parsermodule.c"
      case 7: // $bb9
        var $24=HEAP[$tree_addr]; //@line 2202 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2202 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2202 "parsermodule.c"
        var $27=(($26)&4294967295); //@line 2202 "parsermodule.c"
        var $28=_validate_not_test($27); //@line 2202 "parsermodule.c"
        var $29=((($28))|0)==0; //@line 2202 "parsermodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2202 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_151]=1; //@line 2202 "parsermodule.c"
        __label__ = 10; break; //@line 2202 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_151]=0; //@line 2202 "parsermodule.c"
        __label__ = 10; break; //@line 2202 "parsermodule.c"
      case 10: // $bb12
        var $30=HEAP[$iftmp_151]; //@line 2202 "parsermodule.c"
        HEAP[$res]=$30; //@line 2202 "parsermodule.c"
        var $31=HEAP[$pos]; //@line 2201 "parsermodule.c"
        var $32=((($31) + 2)&4294967295); //@line 2201 "parsermodule.c"
        HEAP[$pos]=$32; //@line 2201 "parsermodule.c"
        __label__ = 11; break; //@line 2201 "parsermodule.c"
      case 11: // $bb13
        var $33=HEAP[$res]; //@line 2201 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 2201 "parsermodule.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2201 "parsermodule.c"
      case 12: // $bb14
        var $35=HEAP[$pos]; //@line 2201 "parsermodule.c"
        var $36=HEAP[$nch]; //@line 2201 "parsermodule.c"
        var $37=((($35))|0) < ((($36))|0); //@line 2201 "parsermodule.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2201 "parsermodule.c"
      case 13: // $bb15
        var $38=HEAP[$res]; //@line 2205 "parsermodule.c"
        HEAP[$0]=$38; //@line 2205 "parsermodule.c"
        var $39=HEAP[$0]; //@line 2205 "parsermodule.c"
        HEAP[$retval]=$39; //@line 2205 "parsermodule.c"
        __label__ = 14; break; //@line 2205 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2205 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2205 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_not_test($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_153=__stackBase__+12;
        var $iftmp_152=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2212 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2212 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2212 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2212 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2213 "parsermodule.c"
        var $5=_validate_ntype($4, 307); //@line 2213 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2213 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2213 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2213 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 2213 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2213 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2213 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 2213 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2213 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_152]=1; //@line 2213 "parsermodule.c"
        __label__ = 5; break; //@line 2213 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_152]=0; //@line 2213 "parsermodule.c"
        __label__ = 5; break; //@line 2213 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$iftmp_152]; //@line 2213 "parsermodule.c"
        HEAP[$res]=$11; //@line 2213 "parsermodule.c"
        var $12=HEAP[$res]; //@line 2215 "parsermodule.c"
        var $13=((($12))|0)!=0; //@line 2215 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 2215 "parsermodule.c"
      case 6: // $bb5
        var $14=HEAP[$nch]; //@line 2216 "parsermodule.c"
        var $15=((($14))|0)==2; //@line 2216 "parsermodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2216 "parsermodule.c"
      case 7: // $bb6
        var $16=HEAP[$tree_addr]; //@line 2217 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2217 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2217 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 2217 "parsermodule.c"
        var $20=_validate_terminal($19, 1, ((__str137)&4294967295)); //@line 2217 "parsermodule.c"
        var $21=((($20))|0)==0; //@line 2217 "parsermodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2217 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$tree_addr]; //@line 2217 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 2217 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2217 "parsermodule.c"
        var $25=(($24+24)&4294967295); //@line 2217 "parsermodule.c"
        var $26=_validate_not_test($25); //@line 2217 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 2217 "parsermodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2217 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_153]=1; //@line 2217 "parsermodule.c"
        __label__ = 11; break; //@line 2217 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_153]=0; //@line 2217 "parsermodule.c"
        __label__ = 11; break; //@line 2217 "parsermodule.c"
      case 11: // $bb10
        var $28=HEAP[$iftmp_153]; //@line 2217 "parsermodule.c"
        HEAP[$res]=$28; //@line 2217 "parsermodule.c"
        __label__ = 14; break; //@line 2217 "parsermodule.c"
      case 12: // $bb11
        var $29=HEAP[$nch]; //@line 2219 "parsermodule.c"
        var $30=((($29))|0)==1; //@line 2219 "parsermodule.c"
        if ($30) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2219 "parsermodule.c"
      case 13: // $bb12
        var $31=HEAP[$tree_addr]; //@line 2220 "parsermodule.c"
        var $32=(($31+20)&4294967295); //@line 2220 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2220 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 2220 "parsermodule.c"
        var $35=_validate_comparison($34); //@line 2220 "parsermodule.c"
        HEAP[$res]=$35; //@line 2220 "parsermodule.c"
        __label__ = 14; break; //@line 2220 "parsermodule.c"
      case 14: // $bb13
        var $36=HEAP[$res]; //@line 2222 "parsermodule.c"
        HEAP[$0]=$36; //@line 2222 "parsermodule.c"
        var $37=HEAP[$0]; //@line 2222 "parsermodule.c"
        HEAP[$retval]=$37; //@line 2222 "parsermodule.c"
        __label__ = 15; break; //@line 2222 "parsermodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 2222 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2222 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comparison($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_155=__stackBase__+12;
        var $iftmp_154=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2230 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2230 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2230 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2230 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2233 "parsermodule.c"
        var $5=_validate_ntype($4, 308); //@line 2233 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2233 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2233 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2233 "parsermodule.c"
        var $8=($7) & 1; //@line 2233 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2233 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2233 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2233 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2233 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2233 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2233 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2233 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2233 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2233 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2233 "parsermodule.c"
        var $14=_validate_expr($13); //@line 2233 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2233 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2233 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_154]=1; //@line 2233 "parsermodule.c"
        __label__ = 5; break; //@line 2233 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_154]=0; //@line 2233 "parsermodule.c"
        __label__ = 5; break; //@line 2233 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_154]; //@line 2233 "parsermodule.c"
        HEAP[$res]=$16; //@line 2233 "parsermodule.c"
        HEAP[$pos]=1; //@line 2235 "parsermodule.c"
        __label__ = 11; break; //@line 2235 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2236 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2236 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2236 "parsermodule.c"
        var $20=HEAP[$pos]; //@line 2236 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 2236 "parsermodule.c"
        var $22=_validate_comp_op($21); //@line 2236 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 2236 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2236 "parsermodule.c"
      case 7: // $bb9
        var $24=HEAP[$tree_addr]; //@line 2236 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2236 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2236 "parsermodule.c"
        var $27=HEAP[$pos]; //@line 2236 "parsermodule.c"
        var $28=((($27) + 1)&4294967295); //@line 2236 "parsermodule.c"
        var $29=(($26+24*$28)&4294967295); //@line 2236 "parsermodule.c"
        var $30=_validate_expr($29); //@line 2236 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 2236 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2236 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_155]=1; //@line 2236 "parsermodule.c"
        __label__ = 10; break; //@line 2236 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_155]=0; //@line 2236 "parsermodule.c"
        __label__ = 10; break; //@line 2236 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$iftmp_155]; //@line 2236 "parsermodule.c"
        HEAP[$res]=$32; //@line 2236 "parsermodule.c"
        var $33=HEAP[$pos]; //@line 2235 "parsermodule.c"
        var $34=((($33) + 2)&4294967295); //@line 2235 "parsermodule.c"
        HEAP[$pos]=$34; //@line 2235 "parsermodule.c"
        __label__ = 11; break; //@line 2235 "parsermodule.c"
      case 11: // $bb13
        var $35=HEAP[$res]; //@line 2235 "parsermodule.c"
        var $36=((($35))|0)==0; //@line 2235 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2235 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$pos]; //@line 2235 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 2235 "parsermodule.c"
        var $39=((($37))|0) < ((($38))|0); //@line 2235 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2235 "parsermodule.c"
      case 13: // $bb15
        var $40=HEAP[$res]; //@line 2239 "parsermodule.c"
        HEAP[$0]=$40; //@line 2239 "parsermodule.c"
        var $41=HEAP[$0]; //@line 2239 "parsermodule.c"
        HEAP[$retval]=$41; //@line 2239 "parsermodule.c"
        __label__ = 14; break; //@line 2239 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2239 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_op($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_158=__stackBase__+8;
        var $iftmp_156=__stackBase__+12;
        var $0=__stackBase__+16;
        var $res=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$res]=0; //@line 2246 "parsermodule.c"
        var $1=HEAP[$tree_addr]; //@line 2247 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2247 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2247 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2247 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2249 "parsermodule.c"
        var $5=_validate_ntype($4, 309); //@line 2249 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2249 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2249 "parsermodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2250 "parsermodule.c"
        __label__ = 27; break; //@line 2250 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$nch]; //@line 2251 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 2251 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 2251 "parsermodule.c"
      case 3: // $bb2
        var $9=HEAP[$tree_addr]; //@line 2256 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 2256 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2256 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 2256 "parsermodule.c"
        HEAP[$tree_addr]=$12; //@line 2256 "parsermodule.c"
        var $13=HEAP[$tree_addr]; //@line 2257 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2257 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2257 "parsermodule.c"
        var $16=reSign(($15), 16, 0); //@line 2257 "parsermodule.c"
        if ($16 == 1) {
          __label__ = 5; break;
        }
        else if ($16 == 20) {
          __label__ = 4; break;
        }
        else if ($16 == 21) {
          __label__ = 4; break;
        }
        else if ($16 == 22) {
          __label__ = 4; break;
        }
        else if ($16 == 28) {
          __label__ = 4; break;
        }
        else if ($16 == 29) {
          __label__ = 4; break;
        }
        else if ($16 == 30) {
          __label__ = 4; break;
        }
        else if ($16 == 31) {
          __label__ = 4; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 4: // $bb3
        HEAP[$res]=1; //@line 2265 "parsermodule.c"
        __label__ = 13; break; //@line 2265 "parsermodule.c"
      case 5: // $bb4
        var $17=HEAP[$tree_addr]; //@line 2268 "parsermodule.c"
        var $18=(($17+4)&4294967295); //@line 2268 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2268 "parsermodule.c"
        var $20=_strcmp($19, ((__str76)&4294967295)); //@line 2268 "parsermodule.c"
        var $21=((($20))|0)==0; //@line 2268 "parsermodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2268 "parsermodule.c"
      case 6: // $bb5
        var $22=HEAP[$tree_addr]; //@line 2268 "parsermodule.c"
        var $23=(($22+4)&4294967295); //@line 2268 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2268 "parsermodule.c"
        var $25=_strcmp($24, ((__str138)&4294967295)); //@line 2268 "parsermodule.c"
        var $26=((($25))|0)==0; //@line 2268 "parsermodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2268 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_156]=1; //@line 2268 "parsermodule.c"
        __label__ = 9; break; //@line 2268 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_156]=0; //@line 2268 "parsermodule.c"
        __label__ = 9; break; //@line 2268 "parsermodule.c"
      case 9: // $bb8
        var $27=HEAP[$iftmp_156]; //@line 2268 "parsermodule.c"
        HEAP[$res]=$27; //@line 2268 "parsermodule.c"
        var $28=HEAP[$res]; //@line 2270 "parsermodule.c"
        var $29=((($28))|0)==0; //@line 2270 "parsermodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2270 "parsermodule.c"
      case 10: // $bb9
        var $30=HEAP[$tree_addr]; //@line 2271 "parsermodule.c"
        var $31=(($30+4)&4294967295); //@line 2271 "parsermodule.c"
        var $32=HEAP[$31]; //@line 2271 "parsermodule.c"
        var $33=HEAP[_parser_error]; //@line 2271 "parsermodule.c"
        var $34=_PyErr_Format($33, ((__str139)&4294967295), $32); //@line 2271 "parsermodule.c"
        __label__ = 11; break; //@line 2271 "parsermodule.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 2271 "parsermodule.c"
      case 12: // $bb11
        _err_string(((__str140)&4294967295)); //@line 2276 "parsermodule.c"
        __label__ = 13; break; //@line 2276 "parsermodule.c"
      case 13: // $bb12
        __label__ = 26; break; //@line 2276 "parsermodule.c"
      case 14: // $bb13
        var $35=HEAP[$tree_addr]; //@line 2280 "parsermodule.c"
        var $36=_validate_numnodes($35, 2, ((__str141)&4294967295)); //@line 2280 "parsermodule.c"
        HEAP[$res]=$36; //@line 2280 "parsermodule.c"
        var $37=HEAP[$res]; //@line 2280 "parsermodule.c"
        var $38=((($37))|0)!=0; //@line 2280 "parsermodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 26; break; } //@line 2280 "parsermodule.c"
      case 15: // $bb14
        var $39=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $40=(($39+20)&4294967295); //@line 2281 "parsermodule.c"
        var $41=HEAP[$40]; //@line 2281 "parsermodule.c"
        var $42=(($41)&4294967295); //@line 2281 "parsermodule.c"
        var $43=_validate_ntype($42, 1); //@line 2281 "parsermodule.c"
        var $44=((($43))|0)==0; //@line 2281 "parsermodule.c"
        if ($44) { __label__ = 22; break; } else { __label__ = 16; break; } //@line 2281 "parsermodule.c"
      case 16: // $bb15
        var $45=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $46=(($45+20)&4294967295); //@line 2281 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2281 "parsermodule.c"
        var $48=(($47+24)&4294967295); //@line 2281 "parsermodule.c"
        var $49=_validate_ntype($48, 1); //@line 2281 "parsermodule.c"
        var $50=((($49))|0)==0; //@line 2281 "parsermodule.c"
        if ($50) { __label__ = 22; break; } else { __label__ = 17; break; } //@line 2281 "parsermodule.c"
      case 17: // $bb16
        var $51=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $52=(($51+20)&4294967295); //@line 2281 "parsermodule.c"
        var $53=HEAP[$52]; //@line 2281 "parsermodule.c"
        var $54=(($53)&4294967295); //@line 2281 "parsermodule.c"
        var $55=(($54+4)&4294967295); //@line 2281 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2281 "parsermodule.c"
        var $57=_strcmp($56, ((__str138)&4294967295)); //@line 2281 "parsermodule.c"
        var $58=((($57))|0)!=0; //@line 2281 "parsermodule.c"
        if ($58) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2281 "parsermodule.c"
      case 18: // $bb17
        var $59=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $60=(($59+20)&4294967295); //@line 2281 "parsermodule.c"
        var $61=HEAP[$60]; //@line 2281 "parsermodule.c"
        var $62=(($61+24)&4294967295); //@line 2281 "parsermodule.c"
        var $63=(($62+4)&4294967295); //@line 2281 "parsermodule.c"
        var $64=HEAP[$63]; //@line 2281 "parsermodule.c"
        var $65=_strcmp($64, ((__str137)&4294967295)); //@line 2281 "parsermodule.c"
        var $66=((($65))|0)==0; //@line 2281 "parsermodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 2281 "parsermodule.c"
      case 19: // $bb18
        var $67=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $68=(($67+20)&4294967295); //@line 2281 "parsermodule.c"
        var $69=HEAP[$68]; //@line 2281 "parsermodule.c"
        var $70=(($69)&4294967295); //@line 2281 "parsermodule.c"
        var $71=(($70+4)&4294967295); //@line 2281 "parsermodule.c"
        var $72=HEAP[$71]; //@line 2281 "parsermodule.c"
        var $73=_strcmp($72, ((__str137)&4294967295)); //@line 2281 "parsermodule.c"
        var $74=((($73))|0)!=0; //@line 2281 "parsermodule.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 2281 "parsermodule.c"
      case 20: // $bb19
        var $75=HEAP[$tree_addr]; //@line 2281 "parsermodule.c"
        var $76=(($75+20)&4294967295); //@line 2281 "parsermodule.c"
        var $77=HEAP[$76]; //@line 2281 "parsermodule.c"
        var $78=(($77+24)&4294967295); //@line 2281 "parsermodule.c"
        var $79=(($78+4)&4294967295); //@line 2281 "parsermodule.c"
        var $80=HEAP[$79]; //@line 2281 "parsermodule.c"
        var $81=_strcmp($80, ((__str76)&4294967295)); //@line 2281 "parsermodule.c"
        var $82=((($81))|0)==0; //@line 2281 "parsermodule.c"
        if ($82) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2281 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_158]=1; //@line 2281 "parsermodule.c"
        __label__ = 23; break; //@line 2281 "parsermodule.c"
      case 22: // $bb21
        HEAP[$iftmp_158]=0; //@line 2281 "parsermodule.c"
        __label__ = 23; break; //@line 2281 "parsermodule.c"
      case 23: // $bb22
        var $83=HEAP[$iftmp_158]; //@line 2281 "parsermodule.c"
        HEAP[$res]=$83; //@line 2281 "parsermodule.c"
        var $84=HEAP[$res]; //@line 2287 "parsermodule.c"
        var $85=((($84))|0)==0; //@line 2287 "parsermodule.c"
        if ($85) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 2287 "parsermodule.c"
      case 24: // $bb23
        var $86=_PyErr_Occurred(); //@line 2287 "parsermodule.c"
        var $87=($86)==0; //@line 2287 "parsermodule.c"
        if ($87) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2287 "parsermodule.c"
      case 25: // $bb24
        _err_string(((__str142)&4294967295)); //@line 2288 "parsermodule.c"
        __label__ = 26; break; //@line 2288 "parsermodule.c"
      case 26: // $bb25
        var $88=HEAP[$res]; //@line 2290 "parsermodule.c"
        HEAP[$0]=$88; //@line 2290 "parsermodule.c"
        __label__ = 27; break; //@line 2290 "parsermodule.c"
      case 27: // $bb26
        var $89=HEAP[$0]; //@line 2250 "parsermodule.c"
        HEAP[$retval]=$89; //@line 2250 "parsermodule.c"
        __label__ = 28; break; //@line 2250 "parsermodule.c"
      case 28: // $return
        var $retval27=HEAP[$retval]; //@line 2250 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 2250 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_160=__stackBase__+12;
        var $iftmp_159=__stackBase__+16;
        var $j=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2298 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2298 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2298 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2298 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2301 "parsermodule.c"
        var $5=_validate_ntype($4, 310); //@line 2301 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2301 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2301 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2301 "parsermodule.c"
        var $8=($7) & 1; //@line 2301 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2301 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2301 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2301 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2301 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2301 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2301 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2301 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2301 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2301 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2301 "parsermodule.c"
        var $14=_validate_xor_expr($13); //@line 2301 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2301 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2301 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_159]=1; //@line 2301 "parsermodule.c"
        __label__ = 5; break; //@line 2301 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_159]=0; //@line 2301 "parsermodule.c"
        __label__ = 5; break; //@line 2301 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_159]; //@line 2301 "parsermodule.c"
        HEAP[$res]=$16; //@line 2301 "parsermodule.c"
        HEAP[$j]=2; //@line 2303 "parsermodule.c"
        __label__ = 11; break; //@line 2303 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2304 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2304 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2304 "parsermodule.c"
        var $20=HEAP[$j]; //@line 2304 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 2304 "parsermodule.c"
        var $22=_validate_xor_expr($21); //@line 2304 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 2304 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2304 "parsermodule.c"
      case 7: // $bb9
        var $24=HEAP[$tree_addr]; //@line 2304 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2304 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2304 "parsermodule.c"
        var $27=HEAP[$j]; //@line 2304 "parsermodule.c"
        var $28=((($27) - 1)&4294967295); //@line 2304 "parsermodule.c"
        var $29=(($26+24*$28)&4294967295); //@line 2304 "parsermodule.c"
        var $30=_validate_terminal($29, 18, ((__str143)&4294967295)); //@line 2304 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 2304 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2304 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_160]=1; //@line 2304 "parsermodule.c"
        __label__ = 10; break; //@line 2304 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_160]=0; //@line 2304 "parsermodule.c"
        __label__ = 10; break; //@line 2304 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$iftmp_160]; //@line 2304 "parsermodule.c"
        HEAP[$res]=$32; //@line 2304 "parsermodule.c"
        var $33=HEAP[$j]; //@line 2303 "parsermodule.c"
        var $34=((($33) + 2)&4294967295); //@line 2303 "parsermodule.c"
        HEAP[$j]=$34; //@line 2303 "parsermodule.c"
        __label__ = 11; break; //@line 2303 "parsermodule.c"
      case 11: // $bb13
        var $35=HEAP[$res]; //@line 2303 "parsermodule.c"
        var $36=((($35))|0)==0; //@line 2303 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2303 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$j]; //@line 2303 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 2303 "parsermodule.c"
        var $39=((($37))|0) < ((($38))|0); //@line 2303 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2303 "parsermodule.c"
      case 13: // $bb15
        var $40=HEAP[$res]; //@line 2307 "parsermodule.c"
        HEAP[$0]=$40; //@line 2307 "parsermodule.c"
        var $41=HEAP[$0]; //@line 2307 "parsermodule.c"
        HEAP[$retval]=$41; //@line 2307 "parsermodule.c"
        __label__ = 14; break; //@line 2307 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2307 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2307 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_xor_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_162=__stackBase__+12;
        var $iftmp_161=__stackBase__+16;
        var $j=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2315 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2315 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2315 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2315 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2318 "parsermodule.c"
        var $5=_validate_ntype($4, 311); //@line 2318 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2318 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2318 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2318 "parsermodule.c"
        var $8=($7) & 1; //@line 2318 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2318 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2318 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2318 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2318 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2318 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2318 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2318 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2318 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2318 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2318 "parsermodule.c"
        var $14=_validate_and_expr($13); //@line 2318 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2318 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2318 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_161]=1; //@line 2318 "parsermodule.c"
        __label__ = 5; break; //@line 2318 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_161]=0; //@line 2318 "parsermodule.c"
        __label__ = 5; break; //@line 2318 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_161]; //@line 2318 "parsermodule.c"
        HEAP[$res]=$16; //@line 2318 "parsermodule.c"
        HEAP[$j]=2; //@line 2320 "parsermodule.c"
        __label__ = 11; break; //@line 2320 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2321 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2321 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2321 "parsermodule.c"
        var $20=HEAP[$j]; //@line 2321 "parsermodule.c"
        var $21=((($20) - 1)&4294967295); //@line 2321 "parsermodule.c"
        var $22=(($19+24*$21)&4294967295); //@line 2321 "parsermodule.c"
        var $23=_validate_terminal($22, 33, ((__str144)&4294967295)); //@line 2321 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 2321 "parsermodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2321 "parsermodule.c"
      case 7: // $bb9
        var $25=HEAP[$tree_addr]; //@line 2321 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2321 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2321 "parsermodule.c"
        var $28=HEAP[$j]; //@line 2321 "parsermodule.c"
        var $29=(($27+24*$28)&4294967295); //@line 2321 "parsermodule.c"
        var $30=_validate_and_expr($29); //@line 2321 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 2321 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2321 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_162]=1; //@line 2321 "parsermodule.c"
        __label__ = 10; break; //@line 2321 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_162]=0; //@line 2321 "parsermodule.c"
        __label__ = 10; break; //@line 2321 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$iftmp_162]; //@line 2321 "parsermodule.c"
        HEAP[$res]=$32; //@line 2321 "parsermodule.c"
        var $33=HEAP[$j]; //@line 2320 "parsermodule.c"
        var $34=((($33) + 2)&4294967295); //@line 2320 "parsermodule.c"
        HEAP[$j]=$34; //@line 2320 "parsermodule.c"
        __label__ = 11; break; //@line 2320 "parsermodule.c"
      case 11: // $bb13
        var $35=HEAP[$res]; //@line 2320 "parsermodule.c"
        var $36=((($35))|0)==0; //@line 2320 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2320 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$j]; //@line 2320 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 2320 "parsermodule.c"
        var $39=((($37))|0) < ((($38))|0); //@line 2320 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2320 "parsermodule.c"
      case 13: // $bb15
        var $40=HEAP[$res]; //@line 2324 "parsermodule.c"
        HEAP[$0]=$40; //@line 2324 "parsermodule.c"
        var $41=HEAP[$0]; //@line 2324 "parsermodule.c"
        HEAP[$retval]=$41; //@line 2324 "parsermodule.c"
        __label__ = 14; break; //@line 2324 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2324 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2324 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_164=__stackBase__+12;
        var $iftmp_163=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2332 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2332 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2332 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2332 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2335 "parsermodule.c"
        var $5=_validate_ntype($4, 312); //@line 2335 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2335 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2335 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2335 "parsermodule.c"
        var $8=($7) & 1; //@line 2335 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2335 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2335 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2335 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2335 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2335 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2335 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2335 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2335 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2335 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2335 "parsermodule.c"
        var $14=_validate_shift_expr($13); //@line 2335 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2335 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2335 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_163]=1; //@line 2335 "parsermodule.c"
        __label__ = 5; break; //@line 2335 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_163]=0; //@line 2335 "parsermodule.c"
        __label__ = 5; break; //@line 2335 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_163]; //@line 2335 "parsermodule.c"
        HEAP[$res]=$16; //@line 2335 "parsermodule.c"
        HEAP[$pos]=1; //@line 2337 "parsermodule.c"
        __label__ = 11; break; //@line 2337 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2338 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2338 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2338 "parsermodule.c"
        var $20=HEAP[$pos]; //@line 2338 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 2338 "parsermodule.c"
        var $22=_validate_terminal($21, 19, ((__str145)&4294967295)); //@line 2338 "parsermodule.c"
        var $23=((($22))|0)==0; //@line 2338 "parsermodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2338 "parsermodule.c"
      case 7: // $bb9
        var $24=HEAP[$tree_addr]; //@line 2338 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2338 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2338 "parsermodule.c"
        var $27=HEAP[$pos]; //@line 2338 "parsermodule.c"
        var $28=((($27) + 1)&4294967295); //@line 2338 "parsermodule.c"
        var $29=(($26+24*$28)&4294967295); //@line 2338 "parsermodule.c"
        var $30=_validate_shift_expr($29); //@line 2338 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 2338 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2338 "parsermodule.c"
      case 8: // $bb10
        HEAP[$iftmp_164]=1; //@line 2338 "parsermodule.c"
        __label__ = 10; break; //@line 2338 "parsermodule.c"
      case 9: // $bb11
        HEAP[$iftmp_164]=0; //@line 2338 "parsermodule.c"
        __label__ = 10; break; //@line 2338 "parsermodule.c"
      case 10: // $bb12
        var $32=HEAP[$iftmp_164]; //@line 2338 "parsermodule.c"
        HEAP[$res]=$32; //@line 2338 "parsermodule.c"
        var $33=HEAP[$pos]; //@line 2337 "parsermodule.c"
        var $34=((($33) + 2)&4294967295); //@line 2337 "parsermodule.c"
        HEAP[$pos]=$34; //@line 2337 "parsermodule.c"
        __label__ = 11; break; //@line 2337 "parsermodule.c"
      case 11: // $bb13
        var $35=HEAP[$res]; //@line 2337 "parsermodule.c"
        var $36=((($35))|0)==0; //@line 2337 "parsermodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2337 "parsermodule.c"
      case 12: // $bb14
        var $37=HEAP[$pos]; //@line 2337 "parsermodule.c"
        var $38=HEAP[$nch]; //@line 2337 "parsermodule.c"
        var $39=((($37))|0) < ((($38))|0); //@line 2337 "parsermodule.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2337 "parsermodule.c"
      case 13: // $bb15
        var $40=HEAP[$res]; //@line 2341 "parsermodule.c"
        HEAP[$0]=$40; //@line 2341 "parsermodule.c"
        var $41=HEAP[$0]; //@line 2341 "parsermodule.c"
        HEAP[$retval]=$41; //@line 2341 "parsermodule.c"
        __label__ = 14; break; //@line 2341 "parsermodule.c"
      case 14: // $return
        var $retval16=HEAP[$retval]; //@line 2341 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_chain_two_ops($tree, $termvalid, $op1, $op2) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $termvalid_addr=__stackBase__+4;
        var $op1_addr=__stackBase__+8;
        var $op2_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $iftmp_165=__stackBase__+24;
        var $pos=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $res=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$termvalid_addr]=$termvalid;
        HEAP[$op1_addr]=$op1;
        HEAP[$op2_addr]=$op2;
        HEAP[$pos]=1; //@line 2348 "parsermodule.c"
        var $1=HEAP[$tree_addr]; //@line 2349 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2349 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2349 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2349 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 2351 "parsermodule.c"
        var $5=($4) & 1; //@line 2351 "parsermodule.c"
        var $6=((($5)) & 255); //@line 2351 "parsermodule.c"
        var $toBool=reSign(($6), 8, 0)!=0; //@line 2351 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2351 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2351 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2351 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2351 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$tree_addr]; //@line 2351 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 2351 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2351 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 2351 "parsermodule.c"
        var $11=HEAP[$termvalid_addr]; //@line 2351 "parsermodule.c"
        var $12=FUNCTION_TABLE[$11]($10); //@line 2351 "parsermodule.c"
        var $13=((($12))|0)==0; //@line 2351 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2351 "parsermodule.c"
      case 2: // $bb4
        HEAP[$iftmp_165]=1; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_165]=0; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 4: // $bb6
        var $14=HEAP[$iftmp_165]; //@line 2351 "parsermodule.c"
        HEAP[$res]=$14; //@line 2351 "parsermodule.c"
        __label__ = 10; break; //@line 2351 "parsermodule.c"
      case 5: // $bb7
        var $15=HEAP[$tree_addr]; //@line 2354 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 2354 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2354 "parsermodule.c"
        var $18=HEAP[$pos]; //@line 2354 "parsermodule.c"
        var $19=(($17+24*$18)&4294967295); //@line 2354 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 2354 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2354 "parsermodule.c"
        var $22=reSign(($21), 16, 0); //@line 2354 "parsermodule.c"
        var $23=HEAP[$op1_addr]; //@line 2354 "parsermodule.c"
        var $24=((($22))|0)!=((($23))|0); //@line 2354 "parsermodule.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2354 "parsermodule.c"
      case 6: // $bb8
        var $25=HEAP[$tree_addr]; //@line 2355 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2355 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2355 "parsermodule.c"
        var $28=HEAP[$pos]; //@line 2355 "parsermodule.c"
        var $29=(($27+24*$28)&4294967295); //@line 2355 "parsermodule.c"
        var $30=HEAP[$op2_addr]; //@line 2355 "parsermodule.c"
        var $31=_validate_ntype($29, $30); //@line 2355 "parsermodule.c"
        HEAP[$res]=$31; //@line 2355 "parsermodule.c"
        __label__ = 7; break; //@line 2355 "parsermodule.c"
      case 7: // $bb9
        var $32=HEAP[$res]; //@line 2356 "parsermodule.c"
        var $33=((($32))|0)!=0; //@line 2356 "parsermodule.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2356 "parsermodule.c"
      case 8: // $bb10
        var $34=HEAP[$tree_addr]; //@line 2357 "parsermodule.c"
        var $35=(($34+20)&4294967295); //@line 2357 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2357 "parsermodule.c"
        var $37=HEAP[$pos]; //@line 2357 "parsermodule.c"
        var $38=((($37) + 1)&4294967295); //@line 2357 "parsermodule.c"
        var $39=(($36+24*$38)&4294967295); //@line 2357 "parsermodule.c"
        var $40=HEAP[$termvalid_addr]; //@line 2357 "parsermodule.c"
        var $41=FUNCTION_TABLE[$40]($39); //@line 2357 "parsermodule.c"
        HEAP[$res]=$41; //@line 2357 "parsermodule.c"
        __label__ = 9; break; //@line 2357 "parsermodule.c"
      case 9: // $bb11
        var $42=HEAP[$pos]; //@line 2353 "parsermodule.c"
        var $43=((($42) + 2)&4294967295); //@line 2353 "parsermodule.c"
        HEAP[$pos]=$43; //@line 2353 "parsermodule.c"
        __label__ = 10; break; //@line 2353 "parsermodule.c"
      case 10: // $bb12
        var $44=HEAP[$res]; //@line 2353 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2353 "parsermodule.c"
        if ($45) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2353 "parsermodule.c"
      case 11: // $bb13
        var $46=HEAP[$pos]; //@line 2353 "parsermodule.c"
        var $47=HEAP[$nch]; //@line 2353 "parsermodule.c"
        var $48=((($46))|0) < ((($47))|0); //@line 2353 "parsermodule.c"
        if ($48) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 2353 "parsermodule.c"
      case 12: // $bb14
        var $49=HEAP[$res]; //@line 2359 "parsermodule.c"
        HEAP[$0]=$49; //@line 2359 "parsermodule.c"
        var $50=HEAP[$0]; //@line 2359 "parsermodule.c"
        HEAP[$retval]=$50; //@line 2359 "parsermodule.c"
        __label__ = 13; break; //@line 2359 "parsermodule.c"
      case 13: // $return
        var $retval15=HEAP[$retval]; //@line 2359 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 2359 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_shift_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_166=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2366 "parsermodule.c"
        var $2=_validate_ntype($1, 313); //@line 2366 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 2366 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2366 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 2366 "parsermodule.c"
        var $5=_validate_chain_two_ops($4, (FUNCTION_TABLE_OFFSET + 16), 34, 35); //@line 2366 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2366 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2366 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_166]=1; //@line 2366 "parsermodule.c"
        __label__ = 4; break; //@line 2366 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_166]=0; //@line 2366 "parsermodule.c"
        __label__ = 4; break; //@line 2366 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_166]; //@line 2366 "parsermodule.c"
        HEAP[$0]=$7; //@line 2366 "parsermodule.c"
        var $8=HEAP[$0]; //@line 2366 "parsermodule.c"
        HEAP[$retval]=$8; //@line 2366 "parsermodule.c"
        __label__ = 5; break; //@line 2366 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 2366 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 2366 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arith_expr($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_167=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2375 "parsermodule.c"
        var $2=_validate_ntype($1, 314); //@line 2375 "parsermodule.c"
        var $3=((($2))|0)==0; //@line 2375 "parsermodule.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2375 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[$tree_addr]; //@line 2375 "parsermodule.c"
        var $5=_validate_chain_two_ops($4, (FUNCTION_TABLE_OFFSET + 18), 14, 15); //@line 2375 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2375 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2375 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_167]=1; //@line 2375 "parsermodule.c"
        __label__ = 4; break; //@line 2375 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_167]=0; //@line 2375 "parsermodule.c"
        __label__ = 4; break; //@line 2375 "parsermodule.c"
      case 4: // $bb3
        var $7=HEAP[$iftmp_167]; //@line 2375 "parsermodule.c"
        HEAP[$0]=$7; //@line 2375 "parsermodule.c"
        var $8=HEAP[$0]; //@line 2375 "parsermodule.c"
        HEAP[$retval]=$8; //@line 2375 "parsermodule.c"
        __label__ = 5; break; //@line 2375 "parsermodule.c"
      case 5: // $return
        var $retval4=HEAP[$retval]; //@line 2375 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 2375 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_term($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_169=__stackBase__+12;
        var $iftmp_168=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$pos]=1; //@line 2383 "parsermodule.c"
        var $1=HEAP[$tree_addr]; //@line 2384 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2384 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2384 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2384 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2387 "parsermodule.c"
        var $5=_validate_ntype($4, 315); //@line 2387 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2387 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2387 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2387 "parsermodule.c"
        var $8=($7) & 1; //@line 2387 "parsermodule.c"
        var $9=((($8)) & 255); //@line 2387 "parsermodule.c"
        var $toBool=reSign(($9), 8, 0)!=0; //@line 2387 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2387 "parsermodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 2387 "parsermodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 2387 "parsermodule.c"
        if ($toBool3) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2387 "parsermodule.c"
      case 2: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2387 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2387 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2387 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2387 "parsermodule.c"
        var $14=_validate_factor($13); //@line 2387 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2387 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2387 "parsermodule.c"
      case 3: // $bb5
        HEAP[$iftmp_168]=1; //@line 2387 "parsermodule.c"
        __label__ = 5; break; //@line 2387 "parsermodule.c"
      case 4: // $bb6
        HEAP[$iftmp_168]=0; //@line 2387 "parsermodule.c"
        __label__ = 5; break; //@line 2387 "parsermodule.c"
      case 5: // $bb7
        var $16=HEAP[$iftmp_168]; //@line 2387 "parsermodule.c"
        HEAP[$res]=$16; //@line 2387 "parsermodule.c"
        __label__ = 14; break; //@line 2387 "parsermodule.c"
      case 6: // $bb8
        var $17=HEAP[$tree_addr]; //@line 2390 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2390 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2390 "parsermodule.c"
        var $20=HEAP[$pos]; //@line 2390 "parsermodule.c"
        var $21=(($19+24*$20)&4294967295); //@line 2390 "parsermodule.c"
        var $22=(($21)&4294967295); //@line 2390 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2390 "parsermodule.c"
        var $24=reSign(($23), 16, 0)==16; //@line 2390 "parsermodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2390 "parsermodule.c"
      case 7: // $bb9
        var $25=HEAP[$tree_addr]; //@line 2390 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2390 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2390 "parsermodule.c"
        var $28=HEAP[$pos]; //@line 2390 "parsermodule.c"
        var $29=(($27+24*$28)&4294967295); //@line 2390 "parsermodule.c"
        var $30=(($29)&4294967295); //@line 2390 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2390 "parsermodule.c"
        var $32=reSign(($31), 16, 0)==17; //@line 2390 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2390 "parsermodule.c"
      case 8: // $bb10
        var $33=HEAP[$tree_addr]; //@line 2390 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2390 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2390 "parsermodule.c"
        var $36=HEAP[$pos]; //@line 2390 "parsermodule.c"
        var $37=(($35+24*$36)&4294967295); //@line 2390 "parsermodule.c"
        var $38=(($37)&4294967295); //@line 2390 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2390 "parsermodule.c"
        var $40=reSign(($39), 16, 0)==48; //@line 2390 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2390 "parsermodule.c"
      case 9: // $bb11
        var $41=HEAP[$tree_addr]; //@line 2390 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 2390 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2390 "parsermodule.c"
        var $44=HEAP[$pos]; //@line 2390 "parsermodule.c"
        var $45=(($43+24*$44)&4294967295); //@line 2390 "parsermodule.c"
        var $46=(($45)&4294967295); //@line 2390 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2390 "parsermodule.c"
        var $48=reSign(($47), 16, 0)==24; //@line 2390 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2390 "parsermodule.c"
      case 10: // $bb12
        var $49=HEAP[$tree_addr]; //@line 2390 "parsermodule.c"
        var $50=(($49+20)&4294967295); //@line 2390 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2390 "parsermodule.c"
        var $52=HEAP[$pos]; //@line 2390 "parsermodule.c"
        var $53=((($52) + 1)&4294967295); //@line 2390 "parsermodule.c"
        var $54=(($51+24*$53)&4294967295); //@line 2390 "parsermodule.c"
        var $55=_validate_factor($54); //@line 2390 "parsermodule.c"
        var $56=((($55))|0)==0; //@line 2390 "parsermodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2390 "parsermodule.c"
      case 11: // $bb13
        HEAP[$iftmp_169]=1; //@line 2390 "parsermodule.c"
        __label__ = 13; break; //@line 2390 "parsermodule.c"
      case 12: // $bb14
        HEAP[$iftmp_169]=0; //@line 2390 "parsermodule.c"
        __label__ = 13; break; //@line 2390 "parsermodule.c"
      case 13: // $bb15
        var $57=HEAP[$iftmp_169]; //@line 2390 "parsermodule.c"
        HEAP[$res]=$57; //@line 2390 "parsermodule.c"
        var $58=HEAP[$pos]; //@line 2389 "parsermodule.c"
        var $59=((($58) + 2)&4294967295); //@line 2389 "parsermodule.c"
        HEAP[$pos]=$59; //@line 2389 "parsermodule.c"
        __label__ = 14; break; //@line 2389 "parsermodule.c"
      case 14: // $bb16
        var $60=HEAP[$res]; //@line 2389 "parsermodule.c"
        var $61=((($60))|0)==0; //@line 2389 "parsermodule.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 2389 "parsermodule.c"
      case 15: // $bb17
        var $62=HEAP[$pos]; //@line 2389 "parsermodule.c"
        var $63=HEAP[$nch]; //@line 2389 "parsermodule.c"
        var $64=((($62))|0) < ((($63))|0); //@line 2389 "parsermodule.c"
        if ($64) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 2389 "parsermodule.c"
      case 16: // $bb18
        var $65=HEAP[$res]; //@line 2396 "parsermodule.c"
        HEAP[$0]=$65; //@line 2396 "parsermodule.c"
        var $66=HEAP[$0]; //@line 2396 "parsermodule.c"
        HEAP[$retval]=$66; //@line 2396 "parsermodule.c"
        __label__ = 17; break; //@line 2396 "parsermodule.c"
      case 17: // $return
        var $retval19=HEAP[$retval]; //@line 2396 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2396 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_factor($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_170=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2407 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2407 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2407 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2407 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $5=_validate_ntype($4, 316); //@line 2415 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2415 "parsermodule.c"
        if ($6) { __label__ = 9; break; } else { __label__ = 1; break; } //@line 2415 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2415 "parsermodule.c"
        var $8=((($7))|0)!=2; //@line 2415 "parsermodule.c"
        if ($8) { __label__ = 6; break; } else { __label__ = 2; break; } //@line 2415 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 2415 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2415 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 2415 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2415 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2415 "parsermodule.c"
        var $15=reSign(($14), 16, 0)==14; //@line 2415 "parsermodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2415 "parsermodule.c"
      case 3: // $bb2
        var $16=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2415 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2415 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 2415 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 2415 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2415 "parsermodule.c"
        var $22=reSign(($21), 16, 0)==15; //@line 2415 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2415 "parsermodule.c"
      case 4: // $bb3
        var $23=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 2415 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2415 "parsermodule.c"
        var $26=(($25)&4294967295); //@line 2415 "parsermodule.c"
        var $27=(($26)&4294967295); //@line 2415 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2415 "parsermodule.c"
        var $29=reSign(($28), 16, 0)==32; //@line 2415 "parsermodule.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2415 "parsermodule.c"
      case 5: // $bb4
        var $30=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $31=(($30+20)&4294967295); //@line 2415 "parsermodule.c"
        var $32=HEAP[$31]; //@line 2415 "parsermodule.c"
        var $33=(($32+24)&4294967295); //@line 2415 "parsermodule.c"
        var $34=_validate_factor($33); //@line 2415 "parsermodule.c"
        var $35=((($34))|0)!=0; //@line 2415 "parsermodule.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2415 "parsermodule.c"
      case 6: // $bb5
        var $36=HEAP[$nch]; //@line 2415 "parsermodule.c"
        var $37=((($36))|0)!=1; //@line 2415 "parsermodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2415 "parsermodule.c"
      case 7: // $bb6
        var $38=HEAP[$tree_addr]; //@line 2415 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2415 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2415 "parsermodule.c"
        var $41=(($40)&4294967295); //@line 2415 "parsermodule.c"
        var $42=_validate_power($41); //@line 2415 "parsermodule.c"
        var $43=((($42))|0)!=0; //@line 2415 "parsermodule.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2415 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_170]=1; //@line 2415 "parsermodule.c"
        __label__ = 10; break; //@line 2415 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_170]=0; //@line 2415 "parsermodule.c"
        __label__ = 10; break; //@line 2415 "parsermodule.c"
      case 10: // $bb9
        var $44=HEAP[$iftmp_170]; //@line 2415 "parsermodule.c"
        HEAP[$res]=$44; //@line 2415 "parsermodule.c"
        var $45=HEAP[$res]; //@line 2416 "parsermodule.c"
        HEAP[$0]=$45; //@line 2416 "parsermodule.c"
        var $46=HEAP[$0]; //@line 2416 "parsermodule.c"
        HEAP[$retval]=$46; //@line 2416 "parsermodule.c"
        __label__ = 11; break; //@line 2416 "parsermodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 2416 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2416 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_power($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_172=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_171=__stackBase__+16;
        var $pos=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$pos]=1; //@line 2427 "parsermodule.c"
        var $1=HEAP[$tree_addr]; //@line 2428 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2428 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2428 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2428 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2430 "parsermodule.c"
        var $5=_validate_ntype($4, 317); //@line 2430 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2430 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2430 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2430 "parsermodule.c"
        var $8=((($7))|0) <= 0; //@line 2430 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2430 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 2430 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 2430 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2430 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 2430 "parsermodule.c"
        var $13=_validate_atom($12); //@line 2430 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 2430 "parsermodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2430 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_171]=1; //@line 2430 "parsermodule.c"
        __label__ = 5; break; //@line 2430 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_171]=0; //@line 2430 "parsermodule.c"
        __label__ = 5; break; //@line 2430 "parsermodule.c"
      case 5: // $bb4
        var $15=HEAP[$iftmp_171]; //@line 2430 "parsermodule.c"
        HEAP[$res]=$15; //@line 2430 "parsermodule.c"
        __label__ = 7; break; //@line 2430 "parsermodule.c"
      case 6: // $bb5
        var $16=HEAP[$tree_addr]; //@line 2433 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2433 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2433 "parsermodule.c"
        var $19=HEAP[$pos]; //@line 2433 "parsermodule.c"
        var $20=(($18+24*$19)&4294967295); //@line 2433 "parsermodule.c"
        var $21=HEAP[$pos]; //@line 2433 "parsermodule.c"
        var $22=((($21) + 1)&4294967295); //@line 2433 "parsermodule.c"
        HEAP[$pos]=$22; //@line 2433 "parsermodule.c"
        var $23=_validate_trailer($20); //@line 2433 "parsermodule.c"
        HEAP[$res]=$23; //@line 2433 "parsermodule.c"
        __label__ = 7; break; //@line 2433 "parsermodule.c"
      case 7: // $bb6
        var $24=HEAP[$res]; //@line 2432 "parsermodule.c"
        var $25=((($24))|0)==0; //@line 2432 "parsermodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2432 "parsermodule.c"
      case 8: // $bb7
        var $26=HEAP[$pos]; //@line 2432 "parsermodule.c"
        var $27=HEAP[$nch]; //@line 2432 "parsermodule.c"
        var $28=((($26))|0) >= ((($27))|0); //@line 2432 "parsermodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2432 "parsermodule.c"
      case 9: // $bb8
        var $29=HEAP[$tree_addr]; //@line 2432 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 2432 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2432 "parsermodule.c"
        var $32=HEAP[$pos]; //@line 2432 "parsermodule.c"
        var $33=(($31+24*$32)&4294967295); //@line 2432 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 2432 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2432 "parsermodule.c"
        var $36=reSign(($35), 16, 0)==322; //@line 2432 "parsermodule.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 2432 "parsermodule.c"
      case 10: // $bb9
        var $37=HEAP[$res]; //@line 2434 "parsermodule.c"
        var $38=((($37))|0)!=0; //@line 2434 "parsermodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 22; break; } //@line 2434 "parsermodule.c"
      case 11: // $bb10
        var $39=HEAP[$pos]; //@line 2434 "parsermodule.c"
        var $40=HEAP[$nch]; //@line 2434 "parsermodule.c"
        var $41=((($39))|0) < ((($40))|0); //@line 2434 "parsermodule.c"
        if ($41) { __label__ = 12; break; } else { __label__ = 22; break; } //@line 2434 "parsermodule.c"
      case 12: // $bb11
        var $42=HEAP[$nch]; //@line 2435 "parsermodule.c"
        var $43=HEAP[$pos]; //@line 2435 "parsermodule.c"
        var $44=((($42) - ($43))&4294967295); //@line 2435 "parsermodule.c"
        var $45=($44) & 1; //@line 2435 "parsermodule.c"
        var $46=((($45))|0)!=0; //@line 2435 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2435 "parsermodule.c"
      case 13: // $bb12
        _err_string(((__str146)&4294967295)); //@line 2436 "parsermodule.c"
        HEAP[$0]=0; //@line 2437 "parsermodule.c"
        __label__ = 23; break; //@line 2437 "parsermodule.c"
      case 14: // $bb13
        __label__ = 20; break; //@line 2437 "parsermodule.c"
      case 15: // $bb14
        var $47=HEAP[$tree_addr]; //@line 2440 "parsermodule.c"
        var $48=(($47+20)&4294967295); //@line 2440 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2440 "parsermodule.c"
        var $50=HEAP[$pos]; //@line 2440 "parsermodule.c"
        var $51=(($49+24*$50)&4294967295); //@line 2440 "parsermodule.c"
        var $52=_validate_terminal($51, 36, ((__str67)&4294967295)); //@line 2440 "parsermodule.c"
        var $53=((($52))|0)==0; //@line 2440 "parsermodule.c"
        if ($53) { __label__ = 18; break; } else { __label__ = 16; break; } //@line 2440 "parsermodule.c"
      case 16: // $bb15
        var $54=HEAP[$tree_addr]; //@line 2440 "parsermodule.c"
        var $55=(($54+20)&4294967295); //@line 2440 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2440 "parsermodule.c"
        var $57=HEAP[$pos]; //@line 2440 "parsermodule.c"
        var $58=((($57) + 1)&4294967295); //@line 2440 "parsermodule.c"
        var $59=(($56+24*$58)&4294967295); //@line 2440 "parsermodule.c"
        var $60=_validate_factor($59); //@line 2440 "parsermodule.c"
        var $61=((($60))|0)==0; //@line 2440 "parsermodule.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 2440 "parsermodule.c"
      case 17: // $bb16
        HEAP[$iftmp_172]=1; //@line 2440 "parsermodule.c"
        __label__ = 19; break; //@line 2440 "parsermodule.c"
      case 18: // $bb17
        HEAP[$iftmp_172]=0; //@line 2440 "parsermodule.c"
        __label__ = 19; break; //@line 2440 "parsermodule.c"
      case 19: // $bb18
        var $62=HEAP[$iftmp_172]; //@line 2440 "parsermodule.c"
        HEAP[$res]=$62; //@line 2440 "parsermodule.c"
        var $63=HEAP[$pos]; //@line 2439 "parsermodule.c"
        var $64=((($63) + 2)&4294967295); //@line 2439 "parsermodule.c"
        HEAP[$pos]=$64; //@line 2439 "parsermodule.c"
        __label__ = 20; break; //@line 2439 "parsermodule.c"
      case 20: // $bb19
        var $65=HEAP[$res]; //@line 2439 "parsermodule.c"
        var $66=((($65))|0)==0; //@line 2439 "parsermodule.c"
        if ($66) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 2439 "parsermodule.c"
      case 21: // $bb20
        var $67=HEAP[$nch]; //@line 2439 "parsermodule.c"
        var $68=((($67) - 1)&4294967295); //@line 2439 "parsermodule.c"
        var $69=HEAP[$pos]; //@line 2439 "parsermodule.c"
        var $70=((($68))|0) > ((($69))|0); //@line 2439 "parsermodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 2439 "parsermodule.c"
      case 22: // $bb21
        var $71=HEAP[$res]; //@line 2443 "parsermodule.c"
        HEAP[$0]=$71; //@line 2443 "parsermodule.c"
        __label__ = 23; break; //@line 2443 "parsermodule.c"
      case 23: // $bb22
        var $72=HEAP[$0]; //@line 2437 "parsermodule.c"
        HEAP[$retval]=$72; //@line 2437 "parsermodule.c"
        __label__ = 24; break; //@line 2437 "parsermodule.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 2437 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 2437 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_atom($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_176=__stackBase__+12;
        var $iftmp_175=__stackBase__+16;
        var $iftmp_174=__stackBase__+20;
        var $iftmp_173=__stackBase__+24;
        var $pos=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $res=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2451 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2451 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2451 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2451 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2452 "parsermodule.c"
        var $5=_validate_ntype($4, 318); //@line 2452 "parsermodule.c"
        HEAP[$res]=$5; //@line 2452 "parsermodule.c"
        var $6=HEAP[$res]; //@line 2454 "parsermodule.c"
        var $7=((($6))|0)!=0; //@line 2454 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2454 "parsermodule.c"
      case 1: // $bb
        var $8=HEAP[$nch]; //@line 2454 "parsermodule.c"
        var $9=((($8))|0) <= 0; //@line 2454 "parsermodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2454 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$nch]; //@line 2455 "parsermodule.c"
        var $11=((($10) + 1)&4294967295); //@line 2455 "parsermodule.c"
        var $12=HEAP[$tree_addr]; //@line 2455 "parsermodule.c"
        var $13=_validate_numnodes($12, $11, ((__str147)&4294967295)); //@line 2455 "parsermodule.c"
        HEAP[$res]=$13; //@line 2455 "parsermodule.c"
        __label__ = 3; break; //@line 2455 "parsermodule.c"
      case 3: // $bb2
        var $14=HEAP[$res]; //@line 2456 "parsermodule.c"
        var $15=((($14))|0)!=0; //@line 2456 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 46; break; } //@line 2456 "parsermodule.c"
      case 4: // $bb3
        var $16=HEAP[$tree_addr]; //@line 2457 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2457 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2457 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 2457 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 2457 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2457 "parsermodule.c"
        var $22=reSign(($21), 16, 0); //@line 2457 "parsermodule.c"
        if ($22 == 1) {
          __label__ = 39; break;
        }
        else if ($22 == 2) {
          __label__ = 39; break;
        }
        else if ($22 == 3) {
          __label__ = 40; break;
        }
        else if ($22 == 7) {
          __label__ = 5; break;
        }
        else if ($22 == 9) {
          __label__ = 15; break;
        }
        else if ($22 == 25) {
          __label__ = 33; break;
        }
        else if ($22 == 26) {
          __label__ = 25; break;
        }
        else {
        __label__ = 45; break;
        }
        
      case 5: // $bb4
        var $23=HEAP[$nch]; //@line 2459 "parsermodule.c"
        var $24=((($23))|0) > 3; //@line 2459 "parsermodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2459 "parsermodule.c"
      case 6: // $bb5
        var $25=HEAP[$tree_addr]; //@line 2459 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2459 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2459 "parsermodule.c"
        var $28=HEAP[$nch]; //@line 2459 "parsermodule.c"
        var $29=((($28) - 1)&4294967295); //@line 2459 "parsermodule.c"
        var $30=(($27+24*$29)&4294967295); //@line 2459 "parsermodule.c"
        var $31=_validate_terminal($30, 8, ((__str56)&4294967295)); //@line 2459 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2459 "parsermodule.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2459 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_173]=1; //@line 2459 "parsermodule.c"
        __label__ = 9; break; //@line 2459 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_173]=0; //@line 2459 "parsermodule.c"
        __label__ = 9; break; //@line 2459 "parsermodule.c"
      case 9: // $bb8
        var $33=HEAP[$iftmp_173]; //@line 2459 "parsermodule.c"
        HEAP[$res]=$33; //@line 2459 "parsermodule.c"
        var $34=HEAP[$res]; //@line 2462 "parsermodule.c"
        var $35=((($34))|0)!=0; //@line 2462 "parsermodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 2462 "parsermodule.c"
      case 10: // $bb9
        var $36=HEAP[$nch]; //@line 2462 "parsermodule.c"
        var $37=((($36))|0)==3; //@line 2462 "parsermodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 2462 "parsermodule.c"
      case 11: // $bb10
        var $38=HEAP[$tree_addr]; //@line 2463 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2463 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2463 "parsermodule.c"
        var $41=(($40+24)&4294967295); //@line 2463 "parsermodule.c"
        var $42=(($41)&4294967295); //@line 2463 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2463 "parsermodule.c"
        var $44=reSign(($43), 16, 0)==340; //@line 2463 "parsermodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2463 "parsermodule.c"
      case 12: // $bb11
        var $45=HEAP[$tree_addr]; //@line 2464 "parsermodule.c"
        var $46=(($45+20)&4294967295); //@line 2464 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2464 "parsermodule.c"
        var $48=(($47+24)&4294967295); //@line 2464 "parsermodule.c"
        var $49=_validate_yield_expr($48); //@line 2464 "parsermodule.c"
        HEAP[$res]=$49; //@line 2464 "parsermodule.c"
        __label__ = 14; break; //@line 2464 "parsermodule.c"
      case 13: // $bb12
        var $50=HEAP[$tree_addr]; //@line 2466 "parsermodule.c"
        var $51=(($50+20)&4294967295); //@line 2466 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2466 "parsermodule.c"
        var $53=(($52+24)&4294967295); //@line 2466 "parsermodule.c"
        var $54=_validate_testlist_comp($53); //@line 2466 "parsermodule.c"
        HEAP[$res]=$54; //@line 2466 "parsermodule.c"
        __label__ = 14; break; //@line 2466 "parsermodule.c"
      case 14: // $bb13
        __label__ = 46; break; //@line 2466 "parsermodule.c"
      case 15: // $bb14
        var $55=HEAP[$nch]; //@line 2470 "parsermodule.c"
        var $56=((($55))|0)==2; //@line 2470 "parsermodule.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2470 "parsermodule.c"
      case 16: // $bb15
        var $57=HEAP[$tree_addr]; //@line 2471 "parsermodule.c"
        var $58=(($57+20)&4294967295); //@line 2471 "parsermodule.c"
        var $59=HEAP[$58]; //@line 2471 "parsermodule.c"
        var $60=(($59+24)&4294967295); //@line 2471 "parsermodule.c"
        var $61=_validate_ntype($60, 10); //@line 2471 "parsermodule.c"
        HEAP[$res]=$61; //@line 2471 "parsermodule.c"
        __label__ = 24; break; //@line 2471 "parsermodule.c"
      case 17: // $bb16
        var $62=HEAP[$nch]; //@line 2472 "parsermodule.c"
        var $63=((($62))|0)==3; //@line 2472 "parsermodule.c"
        if ($63) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 2472 "parsermodule.c"
      case 18: // $bb17
        var $64=HEAP[$tree_addr]; //@line 2473 "parsermodule.c"
        var $65=(($64+20)&4294967295); //@line 2473 "parsermodule.c"
        var $66=HEAP[$65]; //@line 2473 "parsermodule.c"
        var $67=(($66+24)&4294967295); //@line 2473 "parsermodule.c"
        var $68=_validate_listmaker($67); //@line 2473 "parsermodule.c"
        var $69=((($68))|0)==0; //@line 2473 "parsermodule.c"
        if ($69) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 2473 "parsermodule.c"
      case 19: // $bb18
        var $70=HEAP[$tree_addr]; //@line 2473 "parsermodule.c"
        var $71=(($70+20)&4294967295); //@line 2473 "parsermodule.c"
        var $72=HEAP[$71]; //@line 2473 "parsermodule.c"
        var $73=(($72+48)&4294967295); //@line 2473 "parsermodule.c"
        var $74=_validate_ntype($73, 10); //@line 2473 "parsermodule.c"
        var $75=((($74))|0)==0; //@line 2473 "parsermodule.c"
        if ($75) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 2473 "parsermodule.c"
      case 20: // $bb19
        HEAP[$iftmp_174]=1; //@line 2473 "parsermodule.c"
        __label__ = 22; break; //@line 2473 "parsermodule.c"
      case 21: // $bb20
        HEAP[$iftmp_174]=0; //@line 2473 "parsermodule.c"
        __label__ = 22; break; //@line 2473 "parsermodule.c"
      case 22: // $bb21
        var $76=HEAP[$iftmp_174]; //@line 2473 "parsermodule.c"
        HEAP[$res]=$76; //@line 2473 "parsermodule.c"
        __label__ = 24; break; //@line 2473 "parsermodule.c"
      case 23: // $bb22
        HEAP[$res]=0; //@line 2476 "parsermodule.c"
        _err_string(((__str148)&4294967295)); //@line 2477 "parsermodule.c"
        __label__ = 24; break; //@line 2477 "parsermodule.c"
      case 24: // $bb23
        __label__ = 46; break; //@line 2477 "parsermodule.c"
      case 25: // $bb24
        var $77=HEAP[$nch]; //@line 2481 "parsermodule.c"
        var $78=((($77))|0) > 3; //@line 2481 "parsermodule.c"
        if ($78) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 2481 "parsermodule.c"
      case 26: // $bb25
        var $79=HEAP[$tree_addr]; //@line 2481 "parsermodule.c"
        var $80=(($79+20)&4294967295); //@line 2481 "parsermodule.c"
        var $81=HEAP[$80]; //@line 2481 "parsermodule.c"
        var $82=HEAP[$nch]; //@line 2481 "parsermodule.c"
        var $83=((($82) - 1)&4294967295); //@line 2481 "parsermodule.c"
        var $84=(($81+24*$83)&4294967295); //@line 2481 "parsermodule.c"
        var $85=_validate_ntype($84, 27); //@line 2481 "parsermodule.c"
        var $86=((($85))|0)==0; //@line 2481 "parsermodule.c"
        if ($86) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 2481 "parsermodule.c"
      case 27: // $bb26
        HEAP[$iftmp_175]=1; //@line 2481 "parsermodule.c"
        __label__ = 29; break; //@line 2481 "parsermodule.c"
      case 28: // $bb27
        HEAP[$iftmp_175]=0; //@line 2481 "parsermodule.c"
        __label__ = 29; break; //@line 2481 "parsermodule.c"
      case 29: // $bb28
        var $87=HEAP[$iftmp_175]; //@line 2481 "parsermodule.c"
        HEAP[$res]=$87; //@line 2481 "parsermodule.c"
        var $88=HEAP[$res]; //@line 2484 "parsermodule.c"
        var $89=((($88))|0)!=0; //@line 2484 "parsermodule.c"
        if ($89) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 2484 "parsermodule.c"
      case 30: // $bb29
        var $90=HEAP[$nch]; //@line 2484 "parsermodule.c"
        var $91=((($90))|0)==3; //@line 2484 "parsermodule.c"
        if ($91) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 2484 "parsermodule.c"
      case 31: // $bb30
        var $92=HEAP[$tree_addr]; //@line 2485 "parsermodule.c"
        var $93=(($92+20)&4294967295); //@line 2485 "parsermodule.c"
        var $94=HEAP[$93]; //@line 2485 "parsermodule.c"
        var $95=(($94+24)&4294967295); //@line 2485 "parsermodule.c"
        var $96=_validate_dictorsetmaker($95); //@line 2485 "parsermodule.c"
        HEAP[$res]=$96; //@line 2485 "parsermodule.c"
        __label__ = 32; break; //@line 2485 "parsermodule.c"
      case 32: // $bb31
        __label__ = 46; break; //@line 2485 "parsermodule.c"
      case 33: // $bb32
        var $97=HEAP[$nch]; //@line 2488 "parsermodule.c"
        var $98=((($97))|0)!=3; //@line 2488 "parsermodule.c"
        if ($98) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 2488 "parsermodule.c"
      case 34: // $bb33
        var $99=HEAP[$tree_addr]; //@line 2488 "parsermodule.c"
        var $100=(($99+20)&4294967295); //@line 2488 "parsermodule.c"
        var $101=HEAP[$100]; //@line 2488 "parsermodule.c"
        var $102=(($101+24)&4294967295); //@line 2488 "parsermodule.c"
        var $103=_validate_testlist1($102); //@line 2488 "parsermodule.c"
        var $104=((($103))|0)==0; //@line 2488 "parsermodule.c"
        if ($104) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 2488 "parsermodule.c"
      case 35: // $bb34
        var $105=HEAP[$tree_addr]; //@line 2488 "parsermodule.c"
        var $106=(($105+20)&4294967295); //@line 2488 "parsermodule.c"
        var $107=HEAP[$106]; //@line 2488 "parsermodule.c"
        var $108=(($107+48)&4294967295); //@line 2488 "parsermodule.c"
        var $109=_validate_ntype($108, 25); //@line 2488 "parsermodule.c"
        var $110=((($109))|0)==0; //@line 2488 "parsermodule.c"
        if ($110) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 2488 "parsermodule.c"
      case 36: // $bb35
        HEAP[$iftmp_176]=1; //@line 2488 "parsermodule.c"
        __label__ = 38; break; //@line 2488 "parsermodule.c"
      case 37: // $bb36
        HEAP[$iftmp_176]=0; //@line 2488 "parsermodule.c"
        __label__ = 38; break; //@line 2488 "parsermodule.c"
      case 38: // $bb37
        var $111=HEAP[$iftmp_176]; //@line 2488 "parsermodule.c"
        HEAP[$res]=$111; //@line 2488 "parsermodule.c"
        __label__ = 46; break; //@line 2488 "parsermodule.c"
      case 39: // $bb38
        var $112=HEAP[$nch]; //@line 2494 "parsermodule.c"
        var $113=((($112))|0)==1; //@line 2494 "parsermodule.c"
        var $114=unSign(($113), 1, 0); //@line 2494 "parsermodule.c"
        HEAP[$res]=$114; //@line 2494 "parsermodule.c"
        __label__ = 46; break; //@line 2494 "parsermodule.c"
      case 40: // $bb39
        HEAP[$pos]=1; //@line 2497 "parsermodule.c"
        __label__ = 42; break; //@line 2497 "parsermodule.c"
      case 41: // $bb40
        var $115=HEAP[$tree_addr]; //@line 2498 "parsermodule.c"
        var $116=(($115+20)&4294967295); //@line 2498 "parsermodule.c"
        var $117=HEAP[$116]; //@line 2498 "parsermodule.c"
        var $118=HEAP[$pos]; //@line 2498 "parsermodule.c"
        var $119=(($117+24*$118)&4294967295); //@line 2498 "parsermodule.c"
        var $120=_validate_ntype($119, 3); //@line 2498 "parsermodule.c"
        HEAP[$res]=$120; //@line 2498 "parsermodule.c"
        var $121=HEAP[$pos]; //@line 2497 "parsermodule.c"
        var $122=((($121) + 1)&4294967295); //@line 2497 "parsermodule.c"
        HEAP[$pos]=$122; //@line 2497 "parsermodule.c"
        __label__ = 42; break; //@line 2497 "parsermodule.c"
      case 42: // $bb41
        var $123=HEAP[$res]; //@line 2497 "parsermodule.c"
        var $124=((($123))|0)==0; //@line 2497 "parsermodule.c"
        if ($124) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 2497 "parsermodule.c"
      case 43: // $bb42
        var $125=HEAP[$pos]; //@line 2497 "parsermodule.c"
        var $126=HEAP[$nch]; //@line 2497 "parsermodule.c"
        var $127=((($125))|0) < ((($126))|0); //@line 2497 "parsermodule.c"
        if ($127) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 2497 "parsermodule.c"
      case 44: // $bb43
        __label__ = 46; break; //@line 2497 "parsermodule.c"
      case 45: // $bb44
        HEAP[$res]=0; //@line 2501 "parsermodule.c"
        __label__ = 46; break; //@line 2501 "parsermodule.c"
      case 46: // $bb45
        var $128=HEAP[$res]; //@line 2505 "parsermodule.c"
        HEAP[$0]=$128; //@line 2505 "parsermodule.c"
        var $129=HEAP[$0]; //@line 2505 "parsermodule.c"
        HEAP[$retval]=$129; //@line 2505 "parsermodule.c"
        __label__ = 47; break; //@line 2505 "parsermodule.c"
      case 47: // $return
        var $retval46=HEAP[$retval]; //@line 2505 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 2505 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_listmaker($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_177=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $ok=__stackBase__+20;
        var $i=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2515 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2515 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2515 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2515 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 2516 "parsermodule.c"
        HEAP[$ok]=$4; //@line 2516 "parsermodule.c"
        var $5=HEAP[$nch]; //@line 2518 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2518 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2518 "parsermodule.c"
      case 1: // $bb
        _err_string(((__str149)&4294967295)); //@line 2519 "parsermodule.c"
        __label__ = 3; break; //@line 2519 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 2521 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 2521 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2521 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 2521 "parsermodule.c"
        var $11=_validate_test($10); //@line 2521 "parsermodule.c"
        HEAP[$ok]=$11; //@line 2521 "parsermodule.c"
        __label__ = 3; break; //@line 2521 "parsermodule.c"
      case 3: // $bb2
        var $12=HEAP[$nch]; //@line 2526 "parsermodule.c"
        var $13=((($12))|0)!=2; //@line 2526 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2526 "parsermodule.c"
      case 4: // $bb3
        var $14=HEAP[$tree_addr]; //@line 2526 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 2526 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2526 "parsermodule.c"
        var $17=(($16+24)&4294967295); //@line 2526 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 2526 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2526 "parsermodule.c"
        var $20=reSign(($19), 16, 0)!=333; //@line 2526 "parsermodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2526 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 2527 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 2527 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2527 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 2527 "parsermodule.c"
        var $25=_validate_list_for($24); //@line 2527 "parsermodule.c"
        HEAP[$ok]=$25; //@line 2527 "parsermodule.c"
        __label__ = 19; break; //@line 2527 "parsermodule.c"
      case 6: // $bb5
        HEAP[$i]=1; //@line 2530 "parsermodule.c"
        __label__ = 12; break; //@line 2530 "parsermodule.c"
      case 7: // $bb6
        var $26=HEAP[$tree_addr]; //@line 2532 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 2532 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2532 "parsermodule.c"
        var $29=HEAP[$i]; //@line 2532 "parsermodule.c"
        var $30=(($28+24*$29)&4294967295); //@line 2532 "parsermodule.c"
        var $31=_validate_terminal($30, 12, ((__str52)&4294967295)); //@line 2532 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2532 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2532 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$tree_addr]; //@line 2532 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2532 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2532 "parsermodule.c"
        var $36=HEAP[$i]; //@line 2532 "parsermodule.c"
        var $37=((($36) + 1)&4294967295); //@line 2532 "parsermodule.c"
        var $38=(($35+24*$37)&4294967295); //@line 2532 "parsermodule.c"
        var $39=_validate_test($38); //@line 2532 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 2532 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2532 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_177]=1; //@line 2532 "parsermodule.c"
        __label__ = 11; break; //@line 2532 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_177]=0; //@line 2532 "parsermodule.c"
        __label__ = 11; break; //@line 2532 "parsermodule.c"
      case 11: // $bb10
        var $41=HEAP[$iftmp_177]; //@line 2532 "parsermodule.c"
        HEAP[$ok]=$41; //@line 2532 "parsermodule.c"
        var $42=HEAP[$i]; //@line 2534 "parsermodule.c"
        var $43=((($42) + 2)&4294967295); //@line 2534 "parsermodule.c"
        HEAP[$i]=$43; //@line 2534 "parsermodule.c"
        __label__ = 12; break; //@line 2534 "parsermodule.c"
      case 12: // $bb11
        var $44=HEAP[$ok]; //@line 2531 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2531 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2531 "parsermodule.c"
      case 13: // $bb12
        var $46=HEAP[$nch]; //@line 2531 "parsermodule.c"
        var $47=HEAP[$i]; //@line 2531 "parsermodule.c"
        var $48=((($46) - ($47))&4294967295); //@line 2531 "parsermodule.c"
        var $49=((($48))|0) > 1; //@line 2531 "parsermodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2531 "parsermodule.c"
      case 14: // $bb13
        var $50=HEAP[$ok]; //@line 2536 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 2536 "parsermodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2536 "parsermodule.c"
      case 15: // $bb14
        var $52=HEAP[$nch]; //@line 2536 "parsermodule.c"
        var $53=((($52) - 1)&4294967295); //@line 2536 "parsermodule.c"
        var $54=HEAP[$i]; //@line 2536 "parsermodule.c"
        var $55=((($53))|0)!=((($54))|0); //@line 2536 "parsermodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2536 "parsermodule.c"
      case 16: // $bb15
        var $56=HEAP[$tree_addr]; //@line 2537 "parsermodule.c"
        var $57=(($56+20)&4294967295); //@line 2537 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2537 "parsermodule.c"
        var $59=HEAP[$i]; //@line 2537 "parsermodule.c"
        var $60=(($58+24*$59)&4294967295); //@line 2537 "parsermodule.c"
        var $61=_validate_terminal($60, 12, ((__str52)&4294967295)); //@line 2537 "parsermodule.c"
        HEAP[$ok]=$61; //@line 2537 "parsermodule.c"
        __label__ = 19; break; //@line 2537 "parsermodule.c"
      case 17: // $bb16
        var $62=HEAP[$i]; //@line 2538 "parsermodule.c"
        var $63=HEAP[$nch]; //@line 2538 "parsermodule.c"
        var $64=((($62))|0)!=((($63))|0); //@line 2538 "parsermodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2538 "parsermodule.c"
      case 18: // $bb17
        HEAP[$ok]=0; //@line 2539 "parsermodule.c"
        _err_string(((__str150)&4294967295)); //@line 2540 "parsermodule.c"
        __label__ = 19; break; //@line 2540 "parsermodule.c"
      case 19: // $bb18
        var $65=HEAP[$ok]; //@line 2543 "parsermodule.c"
        HEAP[$0]=$65; //@line 2543 "parsermodule.c"
        var $66=HEAP[$0]; //@line 2543 "parsermodule.c"
        HEAP[$retval]=$66; //@line 2543 "parsermodule.c"
        __label__ = 20; break; //@line 2543 "parsermodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 2543 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2543 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_testlist_comp($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_178=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $ok=__stackBase__+20;
        var $i=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2552 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2552 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2552 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2552 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 2553 "parsermodule.c"
        HEAP[$ok]=$4; //@line 2553 "parsermodule.c"
        var $5=HEAP[$nch]; //@line 2555 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2555 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2555 "parsermodule.c"
      case 1: // $bb
        _err_string(((__str151)&4294967295)); //@line 2556 "parsermodule.c"
        __label__ = 3; break; //@line 2556 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$tree_addr]; //@line 2558 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 2558 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2558 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 2558 "parsermodule.c"
        var $11=_validate_test($10); //@line 2558 "parsermodule.c"
        HEAP[$ok]=$11; //@line 2558 "parsermodule.c"
        __label__ = 3; break; //@line 2558 "parsermodule.c"
      case 3: // $bb2
        var $12=HEAP[$nch]; //@line 2564 "parsermodule.c"
        var $13=((($12))|0)!=2; //@line 2564 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2564 "parsermodule.c"
      case 4: // $bb3
        var $14=HEAP[$tree_addr]; //@line 2564 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 2564 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2564 "parsermodule.c"
        var $17=(($16+24)&4294967295); //@line 2564 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 2564 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2564 "parsermodule.c"
        var $20=reSign(($19), 16, 0)!=336; //@line 2564 "parsermodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2564 "parsermodule.c"
      case 5: // $bb4
        var $21=HEAP[$tree_addr]; //@line 2565 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 2565 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2565 "parsermodule.c"
        var $24=(($23+24)&4294967295); //@line 2565 "parsermodule.c"
        var $25=_validate_comp_for($24); //@line 2565 "parsermodule.c"
        HEAP[$ok]=$25; //@line 2565 "parsermodule.c"
        __label__ = 19; break; //@line 2565 "parsermodule.c"
      case 6: // $bb5
        HEAP[$i]=1; //@line 2568 "parsermodule.c"
        __label__ = 12; break; //@line 2568 "parsermodule.c"
      case 7: // $bb6
        var $26=HEAP[$tree_addr]; //@line 2570 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 2570 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2570 "parsermodule.c"
        var $29=HEAP[$i]; //@line 2570 "parsermodule.c"
        var $30=(($28+24*$29)&4294967295); //@line 2570 "parsermodule.c"
        var $31=_validate_terminal($30, 12, ((__str52)&4294967295)); //@line 2570 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2570 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2570 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$tree_addr]; //@line 2570 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2570 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2570 "parsermodule.c"
        var $36=HEAP[$i]; //@line 2570 "parsermodule.c"
        var $37=((($36) + 1)&4294967295); //@line 2570 "parsermodule.c"
        var $38=(($35+24*$37)&4294967295); //@line 2570 "parsermodule.c"
        var $39=_validate_test($38); //@line 2570 "parsermodule.c"
        var $40=((($39))|0)==0; //@line 2570 "parsermodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2570 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_178]=1; //@line 2570 "parsermodule.c"
        __label__ = 11; break; //@line 2570 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_178]=0; //@line 2570 "parsermodule.c"
        __label__ = 11; break; //@line 2570 "parsermodule.c"
      case 11: // $bb10
        var $41=HEAP[$iftmp_178]; //@line 2570 "parsermodule.c"
        HEAP[$ok]=$41; //@line 2570 "parsermodule.c"
        var $42=HEAP[$i]; //@line 2572 "parsermodule.c"
        var $43=((($42) + 2)&4294967295); //@line 2572 "parsermodule.c"
        HEAP[$i]=$43; //@line 2572 "parsermodule.c"
        __label__ = 12; break; //@line 2572 "parsermodule.c"
      case 12: // $bb11
        var $44=HEAP[$ok]; //@line 2569 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2569 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2569 "parsermodule.c"
      case 13: // $bb12
        var $46=HEAP[$nch]; //@line 2569 "parsermodule.c"
        var $47=HEAP[$i]; //@line 2569 "parsermodule.c"
        var $48=((($46) - ($47))&4294967295); //@line 2569 "parsermodule.c"
        var $49=((($48))|0) > 1; //@line 2569 "parsermodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2569 "parsermodule.c"
      case 14: // $bb13
        var $50=HEAP[$ok]; //@line 2574 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 2574 "parsermodule.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 2574 "parsermodule.c"
      case 15: // $bb14
        var $52=HEAP[$nch]; //@line 2574 "parsermodule.c"
        var $53=((($52) - 1)&4294967295); //@line 2574 "parsermodule.c"
        var $54=HEAP[$i]; //@line 2574 "parsermodule.c"
        var $55=((($53))|0)!=((($54))|0); //@line 2574 "parsermodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2574 "parsermodule.c"
      case 16: // $bb15
        var $56=HEAP[$tree_addr]; //@line 2575 "parsermodule.c"
        var $57=(($56+20)&4294967295); //@line 2575 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2575 "parsermodule.c"
        var $59=HEAP[$i]; //@line 2575 "parsermodule.c"
        var $60=(($58+24*$59)&4294967295); //@line 2575 "parsermodule.c"
        var $61=_validate_terminal($60, 12, ((__str52)&4294967295)); //@line 2575 "parsermodule.c"
        HEAP[$ok]=$61; //@line 2575 "parsermodule.c"
        __label__ = 19; break; //@line 2575 "parsermodule.c"
      case 17: // $bb16
        var $62=HEAP[$i]; //@line 2576 "parsermodule.c"
        var $63=HEAP[$nch]; //@line 2576 "parsermodule.c"
        var $64=((($62))|0)!=((($63))|0); //@line 2576 "parsermodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2576 "parsermodule.c"
      case 18: // $bb17
        HEAP[$ok]=0; //@line 2577 "parsermodule.c"
        _err_string(((__str152)&4294967295)); //@line 2578 "parsermodule.c"
        __label__ = 19; break; //@line 2578 "parsermodule.c"
      case 19: // $bb18
        var $65=HEAP[$ok]; //@line 2581 "parsermodule.c"
        HEAP[$0]=$65; //@line 2581 "parsermodule.c"
        var $66=HEAP[$0]; //@line 2581 "parsermodule.c"
        HEAP[$retval]=$66; //@line 2581 "parsermodule.c"
        __label__ = 20; break; //@line 2581 "parsermodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 2581 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2581 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorator($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_180=__stackBase__+12;
        var $iftmp_179=__stackBase__+16;
        var $ok=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2591 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2591 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2591 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2591 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2592 "parsermodule.c"
        var $5=_validate_ntype($4, 259); //@line 2592 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2592 "parsermodule.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 2592 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2592 "parsermodule.c"
        var $8=((($7))|0)==3; //@line 2592 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2592 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2592 "parsermodule.c"
        var $10=((($9))|0)==5; //@line 2592 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2592 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 2592 "parsermodule.c"
        var $12=((($11))|0)==6; //@line 2592 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 2592 "parsermodule.c"
      case 4: // $bb3
        var $13=HEAP[$tree_addr]; //@line 2592 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 2592 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2592 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2592 "parsermodule.c"
        var $17=_validate_terminal($16, 50, ((__str153)&4294967295)); //@line 2592 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 2592 "parsermodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 2592 "parsermodule.c"
      case 5: // $bb4
        var $19=HEAP[$tree_addr]; //@line 2592 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 2592 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2592 "parsermodule.c"
        var $22=(($21+24)&4294967295); //@line 2592 "parsermodule.c"
        var $23=_validate_dotted_name($22); //@line 2592 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 2592 "parsermodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2592 "parsermodule.c"
      case 6: // $bb5
        var $25=HEAP[$tree_addr]; //@line 2592 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2592 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2592 "parsermodule.c"
        var $28=HEAP[$tree_addr]; //@line 2592 "parsermodule.c"
        var $29=(($28+16)&4294967295); //@line 2592 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2592 "parsermodule.c"
        var $31=((($30) + -1)&4294967295); //@line 2592 "parsermodule.c"
        var $32=(($27+24*$31)&4294967295); //@line 2592 "parsermodule.c"
        var $33=_validate_terminal($32, 4, 0); //@line 2592 "parsermodule.c"
        var $34=((($33))|0)==0; //@line 2592 "parsermodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2592 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_179]=1; //@line 2592 "parsermodule.c"
        __label__ = 9; break; //@line 2592 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_179]=0; //@line 2592 "parsermodule.c"
        __label__ = 9; break; //@line 2592 "parsermodule.c"
      case 9: // $bb8
        var $35=HEAP[$iftmp_179]; //@line 2592 "parsermodule.c"
        HEAP[$ok]=$35; //@line 2592 "parsermodule.c"
        var $36=HEAP[$ok]; //@line 2598 "parsermodule.c"
        var $37=((($36))|0)!=0; //@line 2598 "parsermodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 18; break; } //@line 2598 "parsermodule.c"
      case 10: // $bb9
        var $38=HEAP[$nch]; //@line 2598 "parsermodule.c"
        var $39=((($38))|0)!=3; //@line 2598 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 18; break; } //@line 2598 "parsermodule.c"
      case 11: // $bb10
        var $40=HEAP[$tree_addr]; //@line 2599 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 2599 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2599 "parsermodule.c"
        var $43=(($42+48)&4294967295); //@line 2599 "parsermodule.c"
        var $44=_validate_terminal($43, 7, ((__str55)&4294967295)); //@line 2599 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2599 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2599 "parsermodule.c"
      case 12: // $bb11
        var $46=HEAP[$tree_addr]; //@line 2599 "parsermodule.c"
        var $47=(($46+20)&4294967295); //@line 2599 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2599 "parsermodule.c"
        var $49=HEAP[$tree_addr]; //@line 2599 "parsermodule.c"
        var $50=(($49+16)&4294967295); //@line 2599 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2599 "parsermodule.c"
        var $52=((($51) + -2)&4294967295); //@line 2599 "parsermodule.c"
        var $53=(($48+24*$52)&4294967295); //@line 2599 "parsermodule.c"
        var $54=_validate_terminal($53, 8, ((__str56)&4294967295)); //@line 2599 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 2599 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2599 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_180]=1; //@line 2599 "parsermodule.c"
        __label__ = 15; break; //@line 2599 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_180]=0; //@line 2599 "parsermodule.c"
        __label__ = 15; break; //@line 2599 "parsermodule.c"
      case 15: // $bb14
        var $56=HEAP[$iftmp_180]; //@line 2599 "parsermodule.c"
        HEAP[$ok]=$56; //@line 2599 "parsermodule.c"
        var $57=HEAP[$ok]; //@line 2602 "parsermodule.c"
        var $58=((($57))|0)!=0; //@line 2602 "parsermodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2602 "parsermodule.c"
      case 16: // $bb15
        var $59=HEAP[$nch]; //@line 2602 "parsermodule.c"
        var $60=((($59))|0)==6; //@line 2602 "parsermodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2602 "parsermodule.c"
      case 17: // $bb16
        var $61=HEAP[$tree_addr]; //@line 2603 "parsermodule.c"
        var $62=(($61+20)&4294967295); //@line 2603 "parsermodule.c"
        var $63=HEAP[$62]; //@line 2603 "parsermodule.c"
        var $64=(($63+72)&4294967295); //@line 2603 "parsermodule.c"
        var $65=_validate_arglist($64); //@line 2603 "parsermodule.c"
        HEAP[$ok]=$65; //@line 2603 "parsermodule.c"
        __label__ = 18; break; //@line 2603 "parsermodule.c"
      case 18: // $bb17
        var $66=HEAP[$ok]; //@line 2606 "parsermodule.c"
        HEAP[$0]=$66; //@line 2606 "parsermodule.c"
        var $67=HEAP[$0]; //@line 2606 "parsermodule.c"
        HEAP[$retval]=$67; //@line 2606 "parsermodule.c"
        __label__ = 19; break; //@line 2606 "parsermodule.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 2606 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 2606 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorators($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_181=__stackBase__+12;
        var $i=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $ok=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2616 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2616 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2616 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2616 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2617 "parsermodule.c"
        var $5=_validate_ntype($4, 260); //@line 2617 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2617 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2617 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2617 "parsermodule.c"
        var $8=((($7))|0) <= 0; //@line 2617 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2617 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_181]=1; //@line 2617 "parsermodule.c"
        __label__ = 4; break; //@line 2617 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_181]=0; //@line 2617 "parsermodule.c"
        __label__ = 4; break; //@line 2617 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$iftmp_181]; //@line 2617 "parsermodule.c"
        HEAP[$ok]=$9; //@line 2617 "parsermodule.c"
        HEAP[$i]=0; //@line 2619 "parsermodule.c"
        __label__ = 6; break; //@line 2619 "parsermodule.c"
      case 5: // $bb4
        var $10=HEAP[$tree_addr]; //@line 2620 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2620 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2620 "parsermodule.c"
        var $13=HEAP[$i]; //@line 2620 "parsermodule.c"
        var $14=(($12+24*$13)&4294967295); //@line 2620 "parsermodule.c"
        var $15=_validate_decorator($14); //@line 2620 "parsermodule.c"
        HEAP[$ok]=$15; //@line 2620 "parsermodule.c"
        var $16=HEAP[$i]; //@line 2619 "parsermodule.c"
        var $17=((($16) + 1)&4294967295); //@line 2619 "parsermodule.c"
        HEAP[$i]=$17; //@line 2619 "parsermodule.c"
        __label__ = 6; break; //@line 2619 "parsermodule.c"
      case 6: // $bb5
        var $18=HEAP[$ok]; //@line 2619 "parsermodule.c"
        var $19=((($18))|0)==0; //@line 2619 "parsermodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2619 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$i]; //@line 2619 "parsermodule.c"
        var $21=HEAP[$nch]; //@line 2619 "parsermodule.c"
        var $22=((($20))|0) < ((($21))|0); //@line 2619 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2619 "parsermodule.c"
      case 8: // $bb7
        var $23=HEAP[$ok]; //@line 2622 "parsermodule.c"
        HEAP[$0]=$23; //@line 2622 "parsermodule.c"
        var $24=HEAP[$0]; //@line 2622 "parsermodule.c"
        HEAP[$retval]=$24; //@line 2622 "parsermodule.c"
        __label__ = 9; break; //@line 2622 "parsermodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 2622 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 2622 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_with_item($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_183=__stackBase__+12;
        var $iftmp_182=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $ok=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2631 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2631 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2631 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2631 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2634 "parsermodule.c"
        var $5=_validate_ntype($4, 298); //@line 2634 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2634 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2634 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2634 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 2634 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2634 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2634 "parsermodule.c"
        var $10=((($9))|0)==3; //@line 2634 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2634 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2634 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2634 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2634 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2634 "parsermodule.c"
        var $15=_validate_test($14); //@line 2634 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2634 "parsermodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2634 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_182]=1; //@line 2634 "parsermodule.c"
        __label__ = 6; break; //@line 2634 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_182]=0; //@line 2634 "parsermodule.c"
        __label__ = 6; break; //@line 2634 "parsermodule.c"
      case 6: // $bb5
        var $17=HEAP[$iftmp_182]; //@line 2634 "parsermodule.c"
        HEAP[$ok]=$17; //@line 2634 "parsermodule.c"
        var $18=HEAP[$ok]; //@line 2635 "parsermodule.c"
        var $19=((($18))|0)!=0; //@line 2635 "parsermodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 2635 "parsermodule.c"
      case 7: // $bb6
        var $20=HEAP[$nch]; //@line 2635 "parsermodule.c"
        var $21=((($20))|0)==3; //@line 2635 "parsermodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2635 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$tree_addr]; //@line 2636 "parsermodule.c"
        var $23=(($22+20)&4294967295); //@line 2636 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2636 "parsermodule.c"
        var $25=(($24+24)&4294967295); //@line 2636 "parsermodule.c"
        var $26=_validate_terminal($25, 1, ((__str112)&4294967295)); //@line 2636 "parsermodule.c"
        var $27=((($26))|0)==0; //@line 2636 "parsermodule.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2636 "parsermodule.c"
      case 9: // $bb8
        var $28=HEAP[$tree_addr]; //@line 2636 "parsermodule.c"
        var $29=(($28+20)&4294967295); //@line 2636 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2636 "parsermodule.c"
        var $31=(($30+48)&4294967295); //@line 2636 "parsermodule.c"
        var $32=_validate_expr($31); //@line 2636 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 2636 "parsermodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2636 "parsermodule.c"
      case 10: // $bb9
        HEAP[$iftmp_183]=1; //@line 2636 "parsermodule.c"
        __label__ = 12; break; //@line 2636 "parsermodule.c"
      case 11: // $bb10
        HEAP[$iftmp_183]=0; //@line 2636 "parsermodule.c"
        __label__ = 12; break; //@line 2636 "parsermodule.c"
      case 12: // $bb11
        var $34=HEAP[$iftmp_183]; //@line 2636 "parsermodule.c"
        HEAP[$ok]=$34; //@line 2636 "parsermodule.c"
        __label__ = 13; break; //@line 2636 "parsermodule.c"
      case 13: // $bb12
        var $35=HEAP[$ok]; //@line 2638 "parsermodule.c"
        HEAP[$0]=$35; //@line 2638 "parsermodule.c"
        var $36=HEAP[$0]; //@line 2638 "parsermodule.c"
        HEAP[$retval]=$36; //@line 2638 "parsermodule.c"
        __label__ = 14; break; //@line 2638 "parsermodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 2638 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2638 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_with_stmt($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_184=__stackBase__+12;
        var $i=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $ok=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2649 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2649 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2649 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2649 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $5=_validate_ntype($4, 297); //@line 2654 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2654 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2654 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2654 "parsermodule.c"
        var $8=($7) & 1; //@line 2654 "parsermodule.c"
        var $9=((($8))|0)!=0; //@line 2654 "parsermodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 2; break; } //@line 2654 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $11=(($10+20)&4294967295); //@line 2654 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2654 "parsermodule.c"
        var $13=(($12)&4294967295); //@line 2654 "parsermodule.c"
        var $14=_validate_terminal($13, 1, ((__str154)&4294967295)); //@line 2654 "parsermodule.c"
        var $15=((($14))|0)==0; //@line 2654 "parsermodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2654 "parsermodule.c"
      case 3: // $bb2
        var $16=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2654 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2654 "parsermodule.c"
        var $19=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $20=(($19+16)&4294967295); //@line 2654 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2654 "parsermodule.c"
        var $22=((($21) + -2)&4294967295); //@line 2654 "parsermodule.c"
        var $23=(($18+24*$22)&4294967295); //@line 2654 "parsermodule.c"
        var $24=_validate_terminal($23, 11, ((__str54)&4294967295)); //@line 2654 "parsermodule.c"
        var $25=((($24))|0)==0; //@line 2654 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2654 "parsermodule.c"
      case 4: // $bb3
        var $26=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 2654 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2654 "parsermodule.c"
        var $29=HEAP[$tree_addr]; //@line 2654 "parsermodule.c"
        var $30=(($29+16)&4294967295); //@line 2654 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2654 "parsermodule.c"
        var $32=((($31) + -1)&4294967295); //@line 2654 "parsermodule.c"
        var $33=(($28+24*$32)&4294967295); //@line 2654 "parsermodule.c"
        var $34=_validate_suite($33); //@line 2654 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 2654 "parsermodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2654 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_184]=1; //@line 2654 "parsermodule.c"
        __label__ = 7; break; //@line 2654 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_184]=0; //@line 2654 "parsermodule.c"
        __label__ = 7; break; //@line 2654 "parsermodule.c"
      case 7: // $bb6
        var $36=HEAP[$iftmp_184]; //@line 2654 "parsermodule.c"
        HEAP[$ok]=$36; //@line 2654 "parsermodule.c"
        HEAP[$i]=1; //@line 2655 "parsermodule.c"
        __label__ = 9; break; //@line 2655 "parsermodule.c"
      case 8: // $bb7
        var $37=HEAP[$tree_addr]; //@line 2656 "parsermodule.c"
        var $38=(($37+20)&4294967295); //@line 2656 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2656 "parsermodule.c"
        var $40=HEAP[$i]; //@line 2656 "parsermodule.c"
        var $41=(($39+24*$40)&4294967295); //@line 2656 "parsermodule.c"
        var $42=_validate_with_item($41); //@line 2656 "parsermodule.c"
        HEAP[$ok]=$42; //@line 2656 "parsermodule.c"
        var $43=HEAP[$i]; //@line 2655 "parsermodule.c"
        var $44=((($43) + 2)&4294967295); //@line 2655 "parsermodule.c"
        HEAP[$i]=$44; //@line 2655 "parsermodule.c"
        __label__ = 9; break; //@line 2655 "parsermodule.c"
      case 9: // $bb8
        var $45=HEAP[$ok]; //@line 2655 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 2655 "parsermodule.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2655 "parsermodule.c"
      case 10: // $bb9
        var $47=HEAP[$nch]; //@line 2655 "parsermodule.c"
        var $48=((($47) - 2)&4294967295); //@line 2655 "parsermodule.c"
        var $49=HEAP[$i]; //@line 2655 "parsermodule.c"
        var $50=((($48))|0) > ((($49))|0); //@line 2655 "parsermodule.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2655 "parsermodule.c"
      case 11: // $bb10
        var $51=HEAP[$ok]; //@line 2657 "parsermodule.c"
        HEAP[$0]=$51; //@line 2657 "parsermodule.c"
        var $52=HEAP[$0]; //@line 2657 "parsermodule.c"
        HEAP[$retval]=$52; //@line 2657 "parsermodule.c"
        __label__ = 12; break; //@line 2657 "parsermodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 2657 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2657 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_funcdef($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_186=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $ok=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2668 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2668 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2668 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2668 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $5=_validate_ntype($4, 262); //@line 2675 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2675 "parsermodule.c"
        if ($6) { __label__ = 8; break; } else { __label__ = 1; break; } //@line 2675 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2675 "parsermodule.c"
        var $8=((($7))|0)!=5; //@line 2675 "parsermodule.c"
        if ($8) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 2675 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 2675 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2675 "parsermodule.c"
        var $12=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $13=(($12+16)&4294967295); //@line 2675 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2675 "parsermodule.c"
        var $15=((($14) + -5)&4294967295); //@line 2675 "parsermodule.c"
        var $16=(($11+24*$15)&4294967295); //@line 2675 "parsermodule.c"
        var $17=_validate_terminal($16, 1, ((__str155)&4294967295)); //@line 2675 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 2675 "parsermodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 3; break; } //@line 2675 "parsermodule.c"
      case 3: // $bb2
        var $19=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 2675 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2675 "parsermodule.c"
        var $22=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $23=(($22+16)&4294967295); //@line 2675 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2675 "parsermodule.c"
        var $25=((($24) + -4)&4294967295); //@line 2675 "parsermodule.c"
        var $26=(($21+24*$25)&4294967295); //@line 2675 "parsermodule.c"
        var $27=_validate_ntype($26, 1); //@line 2675 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 2675 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 2675 "parsermodule.c"
      case 4: // $bb3
        var $29=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 2675 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2675 "parsermodule.c"
        var $32=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $33=(($32+16)&4294967295); //@line 2675 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2675 "parsermodule.c"
        var $35=((($34) + -2)&4294967295); //@line 2675 "parsermodule.c"
        var $36=(($31+24*$35)&4294967295); //@line 2675 "parsermodule.c"
        var $37=_validate_terminal($36, 11, ((__str54)&4294967295)); //@line 2675 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 2675 "parsermodule.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 2675 "parsermodule.c"
      case 5: // $bb4
        var $39=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $40=(($39+20)&4294967295); //@line 2675 "parsermodule.c"
        var $41=HEAP[$40]; //@line 2675 "parsermodule.c"
        var $42=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $43=(($42+16)&4294967295); //@line 2675 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2675 "parsermodule.c"
        var $45=((($44) + -3)&4294967295); //@line 2675 "parsermodule.c"
        var $46=(($41+24*$45)&4294967295); //@line 2675 "parsermodule.c"
        var $47=_validate_parameters($46); //@line 2675 "parsermodule.c"
        var $48=((($47))|0)==0; //@line 2675 "parsermodule.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2675 "parsermodule.c"
      case 6: // $bb5
        var $49=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $50=(($49+20)&4294967295); //@line 2675 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2675 "parsermodule.c"
        var $52=HEAP[$tree_addr]; //@line 2675 "parsermodule.c"
        var $53=(($52+16)&4294967295); //@line 2675 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2675 "parsermodule.c"
        var $55=((($54) + -1)&4294967295); //@line 2675 "parsermodule.c"
        var $56=(($51+24*$55)&4294967295); //@line 2675 "parsermodule.c"
        var $57=_validate_suite($56); //@line 2675 "parsermodule.c"
        var $58=((($57))|0)==0; //@line 2675 "parsermodule.c"
        if ($58) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2675 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_186]=1; //@line 2675 "parsermodule.c"
        __label__ = 9; break; //@line 2675 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_186]=0; //@line 2675 "parsermodule.c"
        __label__ = 9; break; //@line 2675 "parsermodule.c"
      case 9: // $bb8
        var $59=HEAP[$iftmp_186]; //@line 2675 "parsermodule.c"
        HEAP[$ok]=$59; //@line 2675 "parsermodule.c"
        var $60=HEAP[$ok]; //@line 2676 "parsermodule.c"
        HEAP[$0]=$60; //@line 2676 "parsermodule.c"
        var $61=HEAP[$0]; //@line 2676 "parsermodule.c"
        HEAP[$retval]=$61; //@line 2676 "parsermodule.c"
        __label__ = 10; break; //@line 2676 "parsermodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2676 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2676 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_decorated($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_189=__stackBase__+12;
        var $iftmp_188=__stackBase__+16;
        var $iftmp_187=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $ok=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2686 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2686 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2686 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2686 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2689 "parsermodule.c"
        var $5=_validate_ntype($4, 261); //@line 2689 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2689 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2689 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2689 "parsermodule.c"
        var $8=((($7))|0)!=2; //@line 2689 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2689 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 2689 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 2689 "parsermodule.c"
        var $11=HEAP[$10]; //@line 2689 "parsermodule.c"
        var $12=HEAP[$tree_addr]; //@line 2689 "parsermodule.c"
        var $13=(($12+16)&4294967295); //@line 2689 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2689 "parsermodule.c"
        var $15=((($14) + -2)&4294967295); //@line 2689 "parsermodule.c"
        var $16=(($11+24*$15)&4294967295); //@line 2689 "parsermodule.c"
        var $17=_validate_decorators($16); //@line 2689 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 2689 "parsermodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2689 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_187]=1; //@line 2689 "parsermodule.c"
        __label__ = 5; break; //@line 2689 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_187]=0; //@line 2689 "parsermodule.c"
        __label__ = 5; break; //@line 2689 "parsermodule.c"
      case 5: // $bb4
        var $19=HEAP[$iftmp_187]; //@line 2689 "parsermodule.c"
        HEAP[$ok]=$19; //@line 2689 "parsermodule.c"
        var $20=HEAP[$tree_addr]; //@line 2690 "parsermodule.c"
        var $21=(($20+20)&4294967295); //@line 2690 "parsermodule.c"
        var $22=HEAP[$21]; //@line 2690 "parsermodule.c"
        var $23=HEAP[$tree_addr]; //@line 2690 "parsermodule.c"
        var $24=(($23+16)&4294967295); //@line 2690 "parsermodule.c"
        var $25=HEAP[$24]; //@line 2690 "parsermodule.c"
        var $26=((($25) + -1)&4294967295); //@line 2690 "parsermodule.c"
        var $27=(($22+24*$26)&4294967295); //@line 2690 "parsermodule.c"
        var $28=(($27)&4294967295); //@line 2690 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2690 "parsermodule.c"
        var $30=reSign(($29), 16, 0)==262; //@line 2690 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 2690 "parsermodule.c"
      case 6: // $bb5
        var $31=HEAP[$ok]; //@line 2691 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2691 "parsermodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2691 "parsermodule.c"
      case 7: // $bb6
        var $33=HEAP[$tree_addr]; //@line 2691 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2691 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2691 "parsermodule.c"
        var $36=HEAP[$tree_addr]; //@line 2691 "parsermodule.c"
        var $37=(($36+16)&4294967295); //@line 2691 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2691 "parsermodule.c"
        var $39=((($38) + -1)&4294967295); //@line 2691 "parsermodule.c"
        var $40=(($35+24*$39)&4294967295); //@line 2691 "parsermodule.c"
        var $41=_validate_funcdef($40); //@line 2691 "parsermodule.c"
        var $42=((($41))|0)==0; //@line 2691 "parsermodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2691 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_188]=1; //@line 2691 "parsermodule.c"
        __label__ = 10; break; //@line 2691 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_188]=0; //@line 2691 "parsermodule.c"
        __label__ = 10; break; //@line 2691 "parsermodule.c"
      case 10: // $bb9
        var $43=HEAP[$iftmp_188]; //@line 2691 "parsermodule.c"
        HEAP[$ok]=$43; //@line 2691 "parsermodule.c"
        __label__ = 16; break; //@line 2691 "parsermodule.c"
      case 11: // $bb10
        var $44=HEAP[$ok]; //@line 2693 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2693 "parsermodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2693 "parsermodule.c"
      case 12: // $bb11
        var $46=HEAP[$tree_addr]; //@line 2693 "parsermodule.c"
        var $47=(($46+20)&4294967295); //@line 2693 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2693 "parsermodule.c"
        var $49=HEAP[$tree_addr]; //@line 2693 "parsermodule.c"
        var $50=(($49+16)&4294967295); //@line 2693 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2693 "parsermodule.c"
        var $52=((($51) + -1)&4294967295); //@line 2693 "parsermodule.c"
        var $53=(($48+24*$52)&4294967295); //@line 2693 "parsermodule.c"
        var $54=_validate_class($53); //@line 2693 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 2693 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2693 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_189]=1; //@line 2693 "parsermodule.c"
        __label__ = 15; break; //@line 2693 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_189]=0; //@line 2693 "parsermodule.c"
        __label__ = 15; break; //@line 2693 "parsermodule.c"
      case 15: // $bb14
        var $56=HEAP[$iftmp_189]; //@line 2693 "parsermodule.c"
        HEAP[$ok]=$56; //@line 2693 "parsermodule.c"
        __label__ = 16; break; //@line 2693 "parsermodule.c"
      case 16: // $bb15
        var $57=HEAP[$ok]; //@line 2694 "parsermodule.c"
        HEAP[$0]=$57; //@line 2694 "parsermodule.c"
        var $58=HEAP[$0]; //@line 2694 "parsermodule.c"
        HEAP[$retval]=$58; //@line 2694 "parsermodule.c"
        __label__ = 17; break; //@line 2694 "parsermodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 2694 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2694 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_lambdef($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_190=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2700 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2700 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2700 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2700 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2705 "parsermodule.c"
        var $5=_validate_ntype($4, 321); //@line 2705 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2705 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 2705 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2705 "parsermodule.c"
        var $8=((($7))|0)==3; //@line 2705 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2705 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2705 "parsermodule.c"
        var $10=((($9))|0)==4; //@line 2705 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2705 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2705 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2705 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2705 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2705 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str156)&4294967295)); //@line 2705 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2705 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 2705 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 2705 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2705 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2705 "parsermodule.c"
        var $20=HEAP[$nch]; //@line 2705 "parsermodule.c"
        var $21=((($20) - 2)&4294967295); //@line 2705 "parsermodule.c"
        var $22=(($19+24*$21)&4294967295); //@line 2705 "parsermodule.c"
        var $23=_validate_terminal($22, 11, ((__str54)&4294967295)); //@line 2705 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 2705 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2705 "parsermodule.c"
      case 5: // $bb4
        var $25=HEAP[$tree_addr]; //@line 2705 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2705 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2705 "parsermodule.c"
        var $28=HEAP[$nch]; //@line 2705 "parsermodule.c"
        var $29=((($28) - 1)&4294967295); //@line 2705 "parsermodule.c"
        var $30=(($27+24*$29)&4294967295); //@line 2705 "parsermodule.c"
        var $31=_validate_test($30); //@line 2705 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2705 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2705 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_190]=1; //@line 2705 "parsermodule.c"
        __label__ = 8; break; //@line 2705 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_190]=0; //@line 2705 "parsermodule.c"
        __label__ = 8; break; //@line 2705 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$iftmp_190]; //@line 2705 "parsermodule.c"
        HEAP[$res]=$33; //@line 2705 "parsermodule.c"
        var $34=HEAP[$res]; //@line 2707 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 2707 "parsermodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2707 "parsermodule.c"
      case 9: // $bb8
        var $36=HEAP[$nch]; //@line 2707 "parsermodule.c"
        var $37=((($36))|0)!=4; //@line 2707 "parsermodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2707 "parsermodule.c"
      case 10: // $bb9
        var $38=HEAP[$tree_addr]; //@line 2708 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2708 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2708 "parsermodule.c"
        var $41=(($40+24)&4294967295); //@line 2708 "parsermodule.c"
        var $42=_validate_varargslist($41); //@line 2708 "parsermodule.c"
        HEAP[$res]=$42; //@line 2708 "parsermodule.c"
        __label__ = 14; break; //@line 2708 "parsermodule.c"
      case 11: // $bb10
        var $43=HEAP[$res]; //@line 2709 "parsermodule.c"
        var $44=((($43))|0)==0; //@line 2709 "parsermodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2709 "parsermodule.c"
      case 12: // $bb11
        var $45=_PyErr_Occurred(); //@line 2709 "parsermodule.c"
        var $46=($45)==0; //@line 2709 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2709 "parsermodule.c"
      case 13: // $bb12
        var $47=HEAP[$tree_addr]; //@line 2710 "parsermodule.c"
        var $48=_validate_numnodes($47, 3, ((__str157)&4294967295)); //@line 2710 "parsermodule.c"
        __label__ = 14; break; //@line 2710 "parsermodule.c"
      case 14: // $bb13
        var $49=HEAP[$res]; //@line 2712 "parsermodule.c"
        HEAP[$0]=$49; //@line 2712 "parsermodule.c"
        var $50=HEAP[$0]; //@line 2712 "parsermodule.c"
        HEAP[$retval]=$50; //@line 2712 "parsermodule.c"
        __label__ = 15; break; //@line 2712 "parsermodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 2712 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2712 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_old_lambdef($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_191=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2719 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2719 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2719 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2719 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2724 "parsermodule.c"
        var $5=_validate_ntype($4, 303); //@line 2724 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2724 "parsermodule.c"
        if ($6) { __label__ = 7; break; } else { __label__ = 1; break; } //@line 2724 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2724 "parsermodule.c"
        var $8=((($7))|0)==3; //@line 2724 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2724 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2724 "parsermodule.c"
        var $10=((($9))|0)==4; //@line 2724 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2724 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$tree_addr]; //@line 2724 "parsermodule.c"
        var $12=(($11+20)&4294967295); //@line 2724 "parsermodule.c"
        var $13=HEAP[$12]; //@line 2724 "parsermodule.c"
        var $14=(($13)&4294967295); //@line 2724 "parsermodule.c"
        var $15=_validate_terminal($14, 1, ((__str156)&4294967295)); //@line 2724 "parsermodule.c"
        var $16=((($15))|0)==0; //@line 2724 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 2724 "parsermodule.c"
      case 4: // $bb3
        var $17=HEAP[$tree_addr]; //@line 2724 "parsermodule.c"
        var $18=(($17+20)&4294967295); //@line 2724 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2724 "parsermodule.c"
        var $20=HEAP[$nch]; //@line 2724 "parsermodule.c"
        var $21=((($20) - 2)&4294967295); //@line 2724 "parsermodule.c"
        var $22=(($19+24*$21)&4294967295); //@line 2724 "parsermodule.c"
        var $23=_validate_terminal($22, 11, ((__str54)&4294967295)); //@line 2724 "parsermodule.c"
        var $24=((($23))|0)==0; //@line 2724 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2724 "parsermodule.c"
      case 5: // $bb4
        var $25=HEAP[$tree_addr]; //@line 2724 "parsermodule.c"
        var $26=(($25+20)&4294967295); //@line 2724 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2724 "parsermodule.c"
        var $28=HEAP[$nch]; //@line 2724 "parsermodule.c"
        var $29=((($28) - 1)&4294967295); //@line 2724 "parsermodule.c"
        var $30=(($27+24*$29)&4294967295); //@line 2724 "parsermodule.c"
        var $31=_validate_test($30); //@line 2724 "parsermodule.c"
        var $32=((($31))|0)==0; //@line 2724 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2724 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_191]=1; //@line 2724 "parsermodule.c"
        __label__ = 8; break; //@line 2724 "parsermodule.c"
      case 7: // $bb6
        HEAP[$iftmp_191]=0; //@line 2724 "parsermodule.c"
        __label__ = 8; break; //@line 2724 "parsermodule.c"
      case 8: // $bb7
        var $33=HEAP[$iftmp_191]; //@line 2724 "parsermodule.c"
        HEAP[$res]=$33; //@line 2724 "parsermodule.c"
        var $34=HEAP[$res]; //@line 2726 "parsermodule.c"
        var $35=((($34))|0)==0; //@line 2726 "parsermodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2726 "parsermodule.c"
      case 9: // $bb8
        var $36=HEAP[$nch]; //@line 2726 "parsermodule.c"
        var $37=((($36))|0)!=4; //@line 2726 "parsermodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2726 "parsermodule.c"
      case 10: // $bb9
        var $38=HEAP[$tree_addr]; //@line 2727 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2727 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2727 "parsermodule.c"
        var $41=(($40+24)&4294967295); //@line 2727 "parsermodule.c"
        var $42=_validate_varargslist($41); //@line 2727 "parsermodule.c"
        HEAP[$res]=$42; //@line 2727 "parsermodule.c"
        __label__ = 14; break; //@line 2727 "parsermodule.c"
      case 11: // $bb10
        var $43=HEAP[$res]; //@line 2728 "parsermodule.c"
        var $44=((($43))|0)==0; //@line 2728 "parsermodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2728 "parsermodule.c"
      case 12: // $bb11
        var $45=_PyErr_Occurred(); //@line 2728 "parsermodule.c"
        var $46=($45)==0; //@line 2728 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2728 "parsermodule.c"
      case 13: // $bb12
        var $47=HEAP[$tree_addr]; //@line 2729 "parsermodule.c"
        var $48=_validate_numnodes($47, 3, ((__str158)&4294967295)); //@line 2729 "parsermodule.c"
        __label__ = 14; break; //@line 2729 "parsermodule.c"
      case 14: // $bb13
        var $49=HEAP[$res]; //@line 2731 "parsermodule.c"
        HEAP[$0]=$49; //@line 2731 "parsermodule.c"
        var $50=HEAP[$0]; //@line 2731 "parsermodule.c"
        HEAP[$retval]=$50; //@line 2731 "parsermodule.c"
        __label__ = 15; break; //@line 2731 "parsermodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 2731 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2731 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arglist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_194=__stackBase__+8;
        var $iftmp_193=__stackBase__+12;
        var $iftmp_192=__stackBase__+16;
        var $0=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $i=__stackBase__+28;
        var $ok=__stackBase__+32;
        var $ch=__stackBase__+36;
        var $sym=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2742 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2742 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2742 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2742 "parsermodule.c"
        HEAP[$i]=0; //@line 2743 "parsermodule.c"
        HEAP[$ok]=1; //@line 2744 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 2746 "parsermodule.c"
        var $5=((($4))|0) <= 0; //@line 2746 "parsermodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2746 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$nch]; //@line 2748 "parsermodule.c"
        var $7=((($6) + 1)&4294967295); //@line 2748 "parsermodule.c"
        var $8=HEAP[$tree_addr]; //@line 2748 "parsermodule.c"
        var $9=_validate_numnodes($8, $7, ((__str159)&4294967295)); //@line 2748 "parsermodule.c"
        HEAP[$0]=$9; //@line 2748 "parsermodule.c"
        __label__ = 52; break; //@line 2748 "parsermodule.c"
      case 2: // $bb1
        var $10=HEAP[$nch]; //@line 2750 "parsermodule.c"
        var $11=((($10))|0) > 1; //@line 2750 "parsermodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2750 "parsermodule.c"
      case 3: // $bb2
        HEAP[$i]=0; //@line 2751 "parsermodule.c"
        __label__ = 9; break; //@line 2751 "parsermodule.c"
      case 4: // $bb3
        var $12=HEAP[$tree_addr]; //@line 2752 "parsermodule.c"
        var $13=(($12+20)&4294967295); //@line 2752 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2752 "parsermodule.c"
        var $15=HEAP[$i]; //@line 2752 "parsermodule.c"
        var $16=(($14+24*$15)&4294967295); //@line 2752 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 2752 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2752 "parsermodule.c"
        var $19=reSign(($18), 16, 0)==331; //@line 2752 "parsermodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2752 "parsermodule.c"
      case 5: // $bb4
        var $20=HEAP[$tree_addr]; //@line 2753 "parsermodule.c"
        var $21=(($20+20)&4294967295); //@line 2753 "parsermodule.c"
        var $22=HEAP[$21]; //@line 2753 "parsermodule.c"
        var $23=HEAP[$i]; //@line 2753 "parsermodule.c"
        var $24=(($22+24*$23)&4294967295); //@line 2753 "parsermodule.c"
        HEAP[$ch]=$24; //@line 2753 "parsermodule.c"
        var $25=HEAP[$ch]; //@line 2754 "parsermodule.c"
        var $26=(($25+16)&4294967295); //@line 2754 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2754 "parsermodule.c"
        var $28=((($27))|0)==2; //@line 2754 "parsermodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 2754 "parsermodule.c"
      case 6: // $bb5
        var $29=HEAP[$ch]; //@line 2754 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 2754 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2754 "parsermodule.c"
        var $32=(($31+24)&4294967295); //@line 2754 "parsermodule.c"
        var $33=(($32)&4294967295); //@line 2754 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2754 "parsermodule.c"
        var $35=reSign(($34), 16, 0)==336; //@line 2754 "parsermodule.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2754 "parsermodule.c"
      case 7: // $bb6
        _err_string(((__str160)&4294967295)); //@line 2755 "parsermodule.c"
        HEAP[$0]=0; //@line 2756 "parsermodule.c"
        __label__ = 52; break; //@line 2756 "parsermodule.c"
      case 8: // $bb7
        var $36=HEAP[$i]; //@line 2751 "parsermodule.c"
        var $37=((($36) + 1)&4294967295); //@line 2751 "parsermodule.c"
        HEAP[$i]=$37; //@line 2751 "parsermodule.c"
        __label__ = 9; break; //@line 2751 "parsermodule.c"
      case 9: // $bb8
        var $38=HEAP[$i]; //@line 2751 "parsermodule.c"
        var $39=HEAP[$nch]; //@line 2751 "parsermodule.c"
        var $40=((($38))|0) < ((($39))|0); //@line 2751 "parsermodule.c"
        if ($40) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 2751 "parsermodule.c"
      case 10: // $bb9
        __label__ = 18; break; //@line 2751 "parsermodule.c"
      case 11: // $bb10
        var $41=HEAP[$tree_addr]; //@line 2764 "parsermodule.c"
        var $42=(($41+20)&4294967295); //@line 2764 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2764 "parsermodule.c"
        var $44=HEAP[$i]; //@line 2764 "parsermodule.c"
        var $45=(($43+24*$44)&4294967295); //@line 2764 "parsermodule.c"
        var $46=_validate_argument($45); //@line 2764 "parsermodule.c"
        var $47=((($46))|0)==0; //@line 2764 "parsermodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2764 "parsermodule.c"
      case 12: // $bb11
        var $48=HEAP[$tree_addr]; //@line 2764 "parsermodule.c"
        var $49=(($48+20)&4294967295); //@line 2764 "parsermodule.c"
        var $50=HEAP[$49]; //@line 2764 "parsermodule.c"
        var $51=HEAP[$i]; //@line 2764 "parsermodule.c"
        var $52=((($51) + 1)&4294967295); //@line 2764 "parsermodule.c"
        var $53=(($50+24*$52)&4294967295); //@line 2764 "parsermodule.c"
        var $54=_validate_terminal($53, 12, ((__str52)&4294967295)); //@line 2764 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 2764 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2764 "parsermodule.c"
      case 13: // $bb12
        HEAP[$iftmp_192]=1; //@line 2764 "parsermodule.c"
        __label__ = 15; break; //@line 2764 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_192]=0; //@line 2764 "parsermodule.c"
        __label__ = 15; break; //@line 2764 "parsermodule.c"
      case 15: // $bb14
        var $56=HEAP[$iftmp_192]; //@line 2764 "parsermodule.c"
        HEAP[$ok]=$56; //@line 2764 "parsermodule.c"
        var $57=HEAP[$ok]; //@line 2766 "parsermodule.c"
        var $58=((($57))|0)!=0; //@line 2766 "parsermodule.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2766 "parsermodule.c"
      case 16: // $bb15
        var $59=HEAP[$i]; //@line 2767 "parsermodule.c"
        var $60=((($59) + 2)&4294967295); //@line 2767 "parsermodule.c"
        HEAP[$i]=$60; //@line 2767 "parsermodule.c"
        __label__ = 18; break; //@line 2767 "parsermodule.c"
      case 17: // $bb16
        _PyErr_Clear(); //@line 2769 "parsermodule.c"
        __label__ = 18; break; //@line 2769 "parsermodule.c"
      case 18: // $bb17
        var $61=HEAP[$ok]; //@line 2762 "parsermodule.c"
        var $62=((($61))|0)==0; //@line 2762 "parsermodule.c"
        if ($62) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 2762 "parsermodule.c"
      case 19: // $bb18
        var $63=HEAP[$nch]; //@line 2762 "parsermodule.c"
        var $64=HEAP[$i]; //@line 2762 "parsermodule.c"
        var $65=((($63) - ($64))&4294967295); //@line 2762 "parsermodule.c"
        var $66=((($65))|0) > 1; //@line 2762 "parsermodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 2762 "parsermodule.c"
      case 20: // $bb19
        HEAP[$ok]=1; //@line 2771 "parsermodule.c"
        var $67=HEAP[$nch]; //@line 2772 "parsermodule.c"
        var $68=HEAP[$i]; //@line 2772 "parsermodule.c"
        var $69=((($67) - ($68))&4294967295); //@line 2772 "parsermodule.c"
        var $70=((($69))|0) > 0; //@line 2772 "parsermodule.c"
        if ($70) { __label__ = 21; break; } else { __label__ = 51; break; } //@line 2772 "parsermodule.c"
      case 21: // $bb20
        var $71=HEAP[$tree_addr]; //@line 2776 "parsermodule.c"
        var $72=(($71+20)&4294967295); //@line 2776 "parsermodule.c"
        var $73=HEAP[$72]; //@line 2776 "parsermodule.c"
        var $74=HEAP[$i]; //@line 2776 "parsermodule.c"
        var $75=(($73+24*$74)&4294967295); //@line 2776 "parsermodule.c"
        var $76=(($75)&4294967295); //@line 2776 "parsermodule.c"
        var $77=HEAP[$76]; //@line 2776 "parsermodule.c"
        var $78=reSign(($77), 16, 0); //@line 2776 "parsermodule.c"
        HEAP[$sym]=$78; //@line 2776 "parsermodule.c"
        var $79=HEAP[$sym]; //@line 2778 "parsermodule.c"
        var $80=((($79))|0)==331; //@line 2778 "parsermodule.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 2778 "parsermodule.c"
      case 22: // $bb21
        var $81=HEAP[$tree_addr]; //@line 2779 "parsermodule.c"
        var $82=(($81+20)&4294967295); //@line 2779 "parsermodule.c"
        var $83=HEAP[$82]; //@line 2779 "parsermodule.c"
        var $84=HEAP[$i]; //@line 2779 "parsermodule.c"
        var $85=(($83+24*$84)&4294967295); //@line 2779 "parsermodule.c"
        var $86=_validate_argument($85); //@line 2779 "parsermodule.c"
        HEAP[$ok]=$86; //@line 2779 "parsermodule.c"
        var $87=HEAP[$ok]; //@line 2780 "parsermodule.c"
        var $88=((($87))|0)!=0; //@line 2780 "parsermodule.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 2780 "parsermodule.c"
      case 23: // $bb22
        var $89=HEAP[$i]; //@line 2780 "parsermodule.c"
        var $90=((($89) + 1)&4294967295); //@line 2780 "parsermodule.c"
        var $91=HEAP[$nch]; //@line 2780 "parsermodule.c"
        var $92=((($90))|0)!=((($91))|0); //@line 2780 "parsermodule.c"
        if ($92) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2780 "parsermodule.c"
      case 24: // $bb23
        _err_string(((__str161)&4294967295)); //@line 2781 "parsermodule.c"
        HEAP[$ok]=0; //@line 2783 "parsermodule.c"
        __label__ = 25; break; //@line 2783 "parsermodule.c"
      case 25: // $bb24
        __label__ = 51; break; //@line 2783 "parsermodule.c"
      case 26: // $bb25
        var $93=HEAP[$sym]; //@line 2786 "parsermodule.c"
        var $94=((($93))|0)==16; //@line 2786 "parsermodule.c"
        if ($94) { __label__ = 27; break; } else { __label__ = 41; break; } //@line 2786 "parsermodule.c"
      case 27: // $bb26
        var $95=HEAP[$tree_addr]; //@line 2787 "parsermodule.c"
        var $96=(($95+20)&4294967295); //@line 2787 "parsermodule.c"
        var $97=HEAP[$96]; //@line 2787 "parsermodule.c"
        var $98=HEAP[$i]; //@line 2787 "parsermodule.c"
        var $99=(($97+24*$98)&4294967295); //@line 2787 "parsermodule.c"
        var $100=_validate_terminal($99, 16, ((__str162)&4294967295)); //@line 2787 "parsermodule.c"
        HEAP[$ok]=$100; //@line 2787 "parsermodule.c"
        var $101=HEAP[$ok]; //@line 2788 "parsermodule.c"
        var $102=((($101))|0)==0; //@line 2788 "parsermodule.c"
        if ($102) { __label__ = 30; break; } else { __label__ = 28; break; } //@line 2788 "parsermodule.c"
      case 28: // $bb27
        var $103=HEAP[$nch]; //@line 2788 "parsermodule.c"
        var $104=HEAP[$i]; //@line 2788 "parsermodule.c"
        var $105=((($103) - ($104))&4294967295); //@line 2788 "parsermodule.c"
        var $106=((($105))|0)!=2; //@line 2788 "parsermodule.c"
        if ($106) { __label__ = 30; break; } else { __label__ = 29; break; } //@line 2788 "parsermodule.c"
      case 29: // $bb28
        var $107=HEAP[$tree_addr]; //@line 2789 "parsermodule.c"
        var $108=(($107+20)&4294967295); //@line 2789 "parsermodule.c"
        var $109=HEAP[$108]; //@line 2789 "parsermodule.c"
        var $110=HEAP[$i]; //@line 2789 "parsermodule.c"
        var $111=((($110) + 1)&4294967295); //@line 2789 "parsermodule.c"
        var $112=(($109+24*$111)&4294967295); //@line 2789 "parsermodule.c"
        var $113=_validate_test($112); //@line 2789 "parsermodule.c"
        HEAP[$ok]=$113; //@line 2789 "parsermodule.c"
        __label__ = 40; break; //@line 2789 "parsermodule.c"
      case 30: // $bb29
        var $114=HEAP[$ok]; //@line 2790 "parsermodule.c"
        var $115=((($114))|0)==0; //@line 2790 "parsermodule.c"
        if ($115) { __label__ = 39; break; } else { __label__ = 31; break; } //@line 2790 "parsermodule.c"
      case 31: // $bb30
        var $116=HEAP[$nch]; //@line 2790 "parsermodule.c"
        var $117=HEAP[$i]; //@line 2790 "parsermodule.c"
        var $118=((($116) - ($117))&4294967295); //@line 2790 "parsermodule.c"
        var $119=((($118))|0)!=5; //@line 2790 "parsermodule.c"
        if ($119) { __label__ = 39; break; } else { __label__ = 32; break; } //@line 2790 "parsermodule.c"
      case 32: // $bb31
        var $120=HEAP[$tree_addr]; //@line 2791 "parsermodule.c"
        var $121=(($120+20)&4294967295); //@line 2791 "parsermodule.c"
        var $122=HEAP[$121]; //@line 2791 "parsermodule.c"
        var $123=HEAP[$i]; //@line 2791 "parsermodule.c"
        var $124=((($123) + 1)&4294967295); //@line 2791 "parsermodule.c"
        var $125=(($122+24*$124)&4294967295); //@line 2791 "parsermodule.c"
        var $126=_validate_test($125); //@line 2791 "parsermodule.c"
        var $127=((($126))|0)==0; //@line 2791 "parsermodule.c"
        if ($127) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 2791 "parsermodule.c"
      case 33: // $bb32
        var $128=HEAP[$tree_addr]; //@line 2791 "parsermodule.c"
        var $129=(($128+20)&4294967295); //@line 2791 "parsermodule.c"
        var $130=HEAP[$129]; //@line 2791 "parsermodule.c"
        var $131=HEAP[$i]; //@line 2791 "parsermodule.c"
        var $132=((($131) + 2)&4294967295); //@line 2791 "parsermodule.c"
        var $133=(($130+24*$132)&4294967295); //@line 2791 "parsermodule.c"
        var $134=_validate_terminal($133, 12, ((__str52)&4294967295)); //@line 2791 "parsermodule.c"
        var $135=((($134))|0)==0; //@line 2791 "parsermodule.c"
        if ($135) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 2791 "parsermodule.c"
      case 34: // $bb33
        var $136=HEAP[$tree_addr]; //@line 2791 "parsermodule.c"
        var $137=(($136+20)&4294967295); //@line 2791 "parsermodule.c"
        var $138=HEAP[$137]; //@line 2791 "parsermodule.c"
        var $139=HEAP[$i]; //@line 2791 "parsermodule.c"
        var $140=((($139) + 3)&4294967295); //@line 2791 "parsermodule.c"
        var $141=(($138+24*$140)&4294967295); //@line 2791 "parsermodule.c"
        var $142=_validate_terminal($141, 36, ((__str67)&4294967295)); //@line 2791 "parsermodule.c"
        var $143=((($142))|0)==0; //@line 2791 "parsermodule.c"
        if ($143) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 2791 "parsermodule.c"
      case 35: // $bb34
        var $144=HEAP[$tree_addr]; //@line 2791 "parsermodule.c"
        var $145=(($144+20)&4294967295); //@line 2791 "parsermodule.c"
        var $146=HEAP[$145]; //@line 2791 "parsermodule.c"
        var $147=HEAP[$i]; //@line 2791 "parsermodule.c"
        var $148=((($147) + 4)&4294967295); //@line 2791 "parsermodule.c"
        var $149=(($146+24*$148)&4294967295); //@line 2791 "parsermodule.c"
        var $150=_validate_test($149); //@line 2791 "parsermodule.c"
        var $151=((($150))|0)==0; //@line 2791 "parsermodule.c"
        if ($151) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 2791 "parsermodule.c"
      case 36: // $bb35
        HEAP[$iftmp_193]=1; //@line 2791 "parsermodule.c"
        __label__ = 38; break; //@line 2791 "parsermodule.c"
      case 37: // $bb36
        HEAP[$iftmp_193]=0; //@line 2791 "parsermodule.c"
        __label__ = 38; break; //@line 2791 "parsermodule.c"
      case 38: // $bb37
        var $152=HEAP[$iftmp_193]; //@line 2791 "parsermodule.c"
        HEAP[$ok]=$152; //@line 2791 "parsermodule.c"
        __label__ = 40; break; //@line 2791 "parsermodule.c"
      case 39: // $bb38
        _err_string(((__str163)&4294967295)); //@line 2796 "parsermodule.c"
        HEAP[$ok]=0; //@line 2797 "parsermodule.c"
        __label__ = 40; break; //@line 2797 "parsermodule.c"
      case 40: // $bb39
        __label__ = 51; break; //@line 2797 "parsermodule.c"
      case 41: // $bb40
        var $153=HEAP[$sym]; //@line 2800 "parsermodule.c"
        var $154=((($153))|0)==36; //@line 2800 "parsermodule.c"
        if ($154) { __label__ = 42; break; } else { __label__ = 50; break; } //@line 2800 "parsermodule.c"
      case 42: // $bb41
        var $155=HEAP[$nch]; //@line 2801 "parsermodule.c"
        var $156=HEAP[$i]; //@line 2801 "parsermodule.c"
        var $157=((($155) - ($156))&4294967295); //@line 2801 "parsermodule.c"
        var $158=((($157))|0)==2; //@line 2801 "parsermodule.c"
        if ($158) { __label__ = 43; break; } else { __label__ = 48; break; } //@line 2801 "parsermodule.c"
      case 43: // $bb42
        var $159=HEAP[$tree_addr]; //@line 2802 "parsermodule.c"
        var $160=(($159+20)&4294967295); //@line 2802 "parsermodule.c"
        var $161=HEAP[$160]; //@line 2802 "parsermodule.c"
        var $162=HEAP[$i]; //@line 2802 "parsermodule.c"
        var $163=(($161+24*$162)&4294967295); //@line 2802 "parsermodule.c"
        var $164=_validate_terminal($163, 36, ((__str67)&4294967295)); //@line 2802 "parsermodule.c"
        var $165=((($164))|0)==0; //@line 2802 "parsermodule.c"
        if ($165) { __label__ = 46; break; } else { __label__ = 44; break; } //@line 2802 "parsermodule.c"
      case 44: // $bb43
        var $166=HEAP[$tree_addr]; //@line 2802 "parsermodule.c"
        var $167=(($166+20)&4294967295); //@line 2802 "parsermodule.c"
        var $168=HEAP[$167]; //@line 2802 "parsermodule.c"
        var $169=HEAP[$i]; //@line 2802 "parsermodule.c"
        var $170=((($169) + 1)&4294967295); //@line 2802 "parsermodule.c"
        var $171=(($168+24*$170)&4294967295); //@line 2802 "parsermodule.c"
        var $172=_validate_test($171); //@line 2802 "parsermodule.c"
        var $173=((($172))|0)==0; //@line 2802 "parsermodule.c"
        if ($173) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 2802 "parsermodule.c"
      case 45: // $bb44
        HEAP[$iftmp_194]=1; //@line 2802 "parsermodule.c"
        __label__ = 47; break; //@line 2802 "parsermodule.c"
      case 46: // $bb45
        HEAP[$iftmp_194]=0; //@line 2802 "parsermodule.c"
        __label__ = 47; break; //@line 2802 "parsermodule.c"
      case 47: // $bb46
        var $174=HEAP[$iftmp_194]; //@line 2802 "parsermodule.c"
        HEAP[$ok]=$174; //@line 2802 "parsermodule.c"
        __label__ = 49; break; //@line 2802 "parsermodule.c"
      case 48: // $bb47
        _err_string(((__str164)&4294967295)); //@line 2805 "parsermodule.c"
        HEAP[$ok]=0; //@line 2806 "parsermodule.c"
        __label__ = 49; break; //@line 2806 "parsermodule.c"
      case 49: // $bb48
        __label__ = 51; break; //@line 2806 "parsermodule.c"
      case 50: // $bb49
        _err_string(((__str165)&4294967295)); //@line 2810 "parsermodule.c"
        HEAP[$ok]=0; //@line 2811 "parsermodule.c"
        __label__ = 51; break; //@line 2811 "parsermodule.c"
      case 51: // $bb50
        var $175=HEAP[$ok]; //@line 2814 "parsermodule.c"
        HEAP[$0]=$175; //@line 2814 "parsermodule.c"
        __label__ = 52; break; //@line 2814 "parsermodule.c"
      case 52: // $bb51
        var $176=HEAP[$0]; //@line 2748 "parsermodule.c"
        HEAP[$retval]=$176; //@line 2748 "parsermodule.c"
        __label__ = 53; break; //@line 2748 "parsermodule.c"
      case 53: // $return
        var $retval52=HEAP[$retval]; //@line 2748 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval52; //@line 2748 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_argument($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_196=__stackBase__+12;
        var $iftmp_195=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2826 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2826 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2826 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2826 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2829 "parsermodule.c"
        var $5=_validate_ntype($4, 331); //@line 2829 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2829 "parsermodule.c"
        if ($6) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 2829 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2829 "parsermodule.c"
        var $8=((($7))|0)==1; //@line 2829 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2829 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2829 "parsermodule.c"
        var $10=((($9))|0)==2; //@line 2829 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2829 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$nch]; //@line 2829 "parsermodule.c"
        var $12=((($11))|0)==3; //@line 2829 "parsermodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2829 "parsermodule.c"
      case 4: // $bb3
        var $13=HEAP[$tree_addr]; //@line 2829 "parsermodule.c"
        var $14=(($13+20)&4294967295); //@line 2829 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2829 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2829 "parsermodule.c"
        var $17=_validate_test($16); //@line 2829 "parsermodule.c"
        var $18=((($17))|0)==0; //@line 2829 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2829 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_195]=1; //@line 2829 "parsermodule.c"
        __label__ = 7; break; //@line 2829 "parsermodule.c"
      case 6: // $bb5
        HEAP[$iftmp_195]=0; //@line 2829 "parsermodule.c"
        __label__ = 7; break; //@line 2829 "parsermodule.c"
      case 7: // $bb6
        var $19=HEAP[$iftmp_195]; //@line 2829 "parsermodule.c"
        HEAP[$res]=$19; //@line 2829 "parsermodule.c"
        var $20=HEAP[$res]; //@line 2831 "parsermodule.c"
        var $21=((($20))|0)==0; //@line 2831 "parsermodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2831 "parsermodule.c"
      case 8: // $bb7
        var $22=HEAP[$nch]; //@line 2831 "parsermodule.c"
        var $23=((($22))|0)!=2; //@line 2831 "parsermodule.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2831 "parsermodule.c"
      case 9: // $bb8
        var $24=HEAP[$tree_addr]; //@line 2832 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 2832 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2832 "parsermodule.c"
        var $27=(($26+24)&4294967295); //@line 2832 "parsermodule.c"
        var $28=_validate_comp_for($27); //@line 2832 "parsermodule.c"
        HEAP[$res]=$28; //@line 2832 "parsermodule.c"
        __label__ = 17; break; //@line 2832 "parsermodule.c"
      case 10: // $bb9
        var $29=HEAP[$res]; //@line 2833 "parsermodule.c"
        var $30=((($29))|0)!=0; //@line 2833 "parsermodule.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 17; break; } //@line 2833 "parsermodule.c"
      case 11: // $bb10
        var $31=HEAP[$nch]; //@line 2833 "parsermodule.c"
        var $32=((($31))|0)==3; //@line 2833 "parsermodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 2833 "parsermodule.c"
      case 12: // $bb11
        var $33=HEAP[$tree_addr]; //@line 2834 "parsermodule.c"
        var $34=(($33+20)&4294967295); //@line 2834 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2834 "parsermodule.c"
        var $36=(($35+24)&4294967295); //@line 2834 "parsermodule.c"
        var $37=_validate_terminal($36, 22, ((__str70)&4294967295)); //@line 2834 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 2834 "parsermodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2834 "parsermodule.c"
      case 13: // $bb12
        var $39=HEAP[$tree_addr]; //@line 2834 "parsermodule.c"
        var $40=(($39+20)&4294967295); //@line 2834 "parsermodule.c"
        var $41=HEAP[$40]; //@line 2834 "parsermodule.c"
        var $42=(($41+48)&4294967295); //@line 2834 "parsermodule.c"
        var $43=_validate_test($42); //@line 2834 "parsermodule.c"
        var $44=((($43))|0)==0; //@line 2834 "parsermodule.c"
        if ($44) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2834 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_196]=1; //@line 2834 "parsermodule.c"
        __label__ = 16; break; //@line 2834 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_196]=0; //@line 2834 "parsermodule.c"
        __label__ = 16; break; //@line 2834 "parsermodule.c"
      case 16: // $bb15
        var $45=HEAP[$iftmp_196]; //@line 2834 "parsermodule.c"
        HEAP[$res]=$45; //@line 2834 "parsermodule.c"
        __label__ = 17; break; //@line 2834 "parsermodule.c"
      case 17: // $bb16
        var $46=HEAP[$res]; //@line 2837 "parsermodule.c"
        HEAP[$0]=$46; //@line 2837 "parsermodule.c"
        var $47=HEAP[$0]; //@line 2837 "parsermodule.c"
        HEAP[$retval]=$47; //@line 2837 "parsermodule.c"
        __label__ = 18; break; //@line 2837 "parsermodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 2837 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 2837 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_trailer($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_199=__stackBase__+12;
        var $iftmp_198=__stackBase__+16;
        var $iftmp_197=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2849 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2849 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2849 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2849 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2850 "parsermodule.c"
        var $5=_validate_ntype($4, 322); //@line 2850 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2850 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2850 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2850 "parsermodule.c"
        var $8=((($7))|0)==2; //@line 2850 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2850 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2850 "parsermodule.c"
        var $10=((($9))|0)==3; //@line 2850 "parsermodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2850 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_197]=1; //@line 2850 "parsermodule.c"
        __label__ = 5; break; //@line 2850 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_197]=0; //@line 2850 "parsermodule.c"
        __label__ = 5; break; //@line 2850 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$iftmp_197]; //@line 2850 "parsermodule.c"
        HEAP[$res]=$11; //@line 2850 "parsermodule.c"
        var $12=HEAP[$res]; //@line 2852 "parsermodule.c"
        var $13=((($12))|0)!=0; //@line 2852 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 24; break; } //@line 2852 "parsermodule.c"
      case 6: // $bb5
        var $14=HEAP[$tree_addr]; //@line 2853 "parsermodule.c"
        var $15=(($14+20)&4294967295); //@line 2853 "parsermodule.c"
        var $16=HEAP[$15]; //@line 2853 "parsermodule.c"
        var $17=(($16)&4294967295); //@line 2853 "parsermodule.c"
        var $18=(($17)&4294967295); //@line 2853 "parsermodule.c"
        var $19=HEAP[$18]; //@line 2853 "parsermodule.c"
        var $20=reSign(($19), 16, 0); //@line 2853 "parsermodule.c"
        if ($20 == 7) {
          __label__ = 7; break;
        }
        else if ($20 == 9) {
          __label__ = 11; break;
        }
        else if ($20 == 23) {
          __label__ = 17; break;
        }
        else {
        __label__ = 22; break;
        }
        
      case 7: // $bb6
        var $21=HEAP[$tree_addr]; //@line 2855 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 2855 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2855 "parsermodule.c"
        var $24=HEAP[$nch]; //@line 2855 "parsermodule.c"
        var $25=((($24) - 1)&4294967295); //@line 2855 "parsermodule.c"
        var $26=(($23+24*$25)&4294967295); //@line 2855 "parsermodule.c"
        var $27=_validate_terminal($26, 8, ((__str56)&4294967295)); //@line 2855 "parsermodule.c"
        HEAP[$res]=$27; //@line 2855 "parsermodule.c"
        var $28=HEAP[$res]; //@line 2856 "parsermodule.c"
        var $29=((($28))|0)!=0; //@line 2856 "parsermodule.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2856 "parsermodule.c"
      case 8: // $bb7
        var $30=HEAP[$nch]; //@line 2856 "parsermodule.c"
        var $31=((($30))|0)==3; //@line 2856 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2856 "parsermodule.c"
      case 9: // $bb8
        var $32=HEAP[$tree_addr]; //@line 2857 "parsermodule.c"
        var $33=(($32+20)&4294967295); //@line 2857 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2857 "parsermodule.c"
        var $35=(($34+24)&4294967295); //@line 2857 "parsermodule.c"
        var $36=_validate_arglist($35); //@line 2857 "parsermodule.c"
        HEAP[$res]=$36; //@line 2857 "parsermodule.c"
        __label__ = 10; break; //@line 2857 "parsermodule.c"
      case 10: // $bb9
        __label__ = 23; break; //@line 2857 "parsermodule.c"
      case 11: // $bb10
        var $37=HEAP[$tree_addr]; //@line 2860 "parsermodule.c"
        var $38=_validate_numnodes($37, 3, ((__str166)&4294967295)); //@line 2860 "parsermodule.c"
        var $39=((($38))|0)==0; //@line 2860 "parsermodule.c"
        if ($39) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 2860 "parsermodule.c"
      case 12: // $bb11
        var $40=HEAP[$tree_addr]; //@line 2860 "parsermodule.c"
        var $41=(($40+20)&4294967295); //@line 2860 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2860 "parsermodule.c"
        var $43=(($42+24)&4294967295); //@line 2860 "parsermodule.c"
        var $44=_validate_subscriptlist($43); //@line 2860 "parsermodule.c"
        var $45=((($44))|0)==0; //@line 2860 "parsermodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2860 "parsermodule.c"
      case 13: // $bb12
        var $46=HEAP[$tree_addr]; //@line 2860 "parsermodule.c"
        var $47=(($46+20)&4294967295); //@line 2860 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2860 "parsermodule.c"
        var $49=(($48+48)&4294967295); //@line 2860 "parsermodule.c"
        var $50=_validate_ntype($49, 10); //@line 2860 "parsermodule.c"
        var $51=((($50))|0)==0; //@line 2860 "parsermodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2860 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_198]=1; //@line 2860 "parsermodule.c"
        __label__ = 16; break; //@line 2860 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_198]=0; //@line 2860 "parsermodule.c"
        __label__ = 16; break; //@line 2860 "parsermodule.c"
      case 16: // $bb15
        var $52=HEAP[$iftmp_198]; //@line 2860 "parsermodule.c"
        HEAP[$res]=$52; //@line 2860 "parsermodule.c"
        __label__ = 23; break; //@line 2860 "parsermodule.c"
      case 17: // $bb16
        var $53=HEAP[$tree_addr]; //@line 2865 "parsermodule.c"
        var $54=_validate_numnodes($53, 2, ((__str166)&4294967295)); //@line 2865 "parsermodule.c"
        var $55=((($54))|0)==0; //@line 2865 "parsermodule.c"
        if ($55) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 2865 "parsermodule.c"
      case 18: // $bb17
        var $56=HEAP[$tree_addr]; //@line 2865 "parsermodule.c"
        var $57=(($56+20)&4294967295); //@line 2865 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2865 "parsermodule.c"
        var $59=(($58+24)&4294967295); //@line 2865 "parsermodule.c"
        var $60=_validate_ntype($59, 1); //@line 2865 "parsermodule.c"
        var $61=((($60))|0)==0; //@line 2865 "parsermodule.c"
        if ($61) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 2865 "parsermodule.c"
      case 19: // $bb18
        HEAP[$iftmp_199]=1; //@line 2865 "parsermodule.c"
        __label__ = 21; break; //@line 2865 "parsermodule.c"
      case 20: // $bb19
        HEAP[$iftmp_199]=0; //@line 2865 "parsermodule.c"
        __label__ = 21; break; //@line 2865 "parsermodule.c"
      case 21: // $bb20
        var $62=HEAP[$iftmp_199]; //@line 2865 "parsermodule.c"
        HEAP[$res]=$62; //@line 2865 "parsermodule.c"
        __label__ = 23; break; //@line 2865 "parsermodule.c"
      case 22: // $bb21
        HEAP[$res]=0; //@line 2869 "parsermodule.c"
        __label__ = 23; break; //@line 2869 "parsermodule.c"
      case 23: // $bb22
        __label__ = 25; break; //@line 2869 "parsermodule.c"
      case 24: // $bb23
        var $63=HEAP[$tree_addr]; //@line 2874 "parsermodule.c"
        var $64=_validate_numnodes($63, 2, ((__str166)&4294967295)); //@line 2874 "parsermodule.c"
        __label__ = 25; break; //@line 2874 "parsermodule.c"
      case 25: // $bb24
        var $65=HEAP[$res]; //@line 2876 "parsermodule.c"
        HEAP[$0]=$65; //@line 2876 "parsermodule.c"
        var $66=HEAP[$0]; //@line 2876 "parsermodule.c"
        HEAP[$retval]=$66; //@line 2876 "parsermodule.c"
        __label__ = 26; break; //@line 2876 "parsermodule.c"
      case 26: // $return
        var $retval25=HEAP[$retval]; //@line 2876 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 2876 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_subscriptlist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2887 "parsermodule.c"
        var $2=_validate_repeating_list($1, 323, (FUNCTION_TABLE_OFFSET + 20), ((__str167)&4294967295)); //@line 2887 "parsermodule.c"
        HEAP[$0]=$2; //@line 2887 "parsermodule.c"
        var $3=HEAP[$0]; //@line 2887 "parsermodule.c"
        HEAP[$retval]=$3; //@line 2887 "parsermodule.c"
        __label__ = 1; break; //@line 2887 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 2887 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 2887 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_subscript($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_201=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_200=__stackBase__+16;
        var $offset=__stackBase__+20;
        var $nch=__stackBase__+24;
        var $res=__stackBase__+28;
        var $rem=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$offset]=0; //@line 2899 "parsermodule.c"
        var $1=HEAP[$tree_addr]; //@line 2900 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2900 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2900 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2900 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2901 "parsermodule.c"
        var $5=_validate_ntype($4, 324); //@line 2901 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 2901 "parsermodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 2901 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 2901 "parsermodule.c"
        var $8=((($7))|0) <= 0; //@line 2901 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 2901 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$nch]; //@line 2901 "parsermodule.c"
        var $10=((($9))|0) > 4; //@line 2901 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2901 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_200]=1; //@line 2901 "parsermodule.c"
        __label__ = 5; break; //@line 2901 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_200]=0; //@line 2901 "parsermodule.c"
        __label__ = 5; break; //@line 2901 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$iftmp_200]; //@line 2901 "parsermodule.c"
        HEAP[$res]=$11; //@line 2901 "parsermodule.c"
        var $12=HEAP[$res]; //@line 2903 "parsermodule.c"
        var $13=((($12))|0)==0; //@line 2903 "parsermodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 2903 "parsermodule.c"
      case 6: // $bb5
        var $14=_PyErr_Occurred(); //@line 2904 "parsermodule.c"
        var $15=($14)==0; //@line 2904 "parsermodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2904 "parsermodule.c"
      case 7: // $bb6
        _err_string(((__str168)&4294967295)); //@line 2905 "parsermodule.c"
        __label__ = 8; break; //@line 2905 "parsermodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 2906 "parsermodule.c"
        __label__ = 35; break; //@line 2906 "parsermodule.c"
      case 9: // $bb8
        var $16=HEAP[$tree_addr]; //@line 2908 "parsermodule.c"
        var $17=(($16+20)&4294967295); //@line 2908 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2908 "parsermodule.c"
        var $19=(($18)&4294967295); //@line 2908 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 2908 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2908 "parsermodule.c"
        var $22=reSign(($21), 16, 0)==23; //@line 2908 "parsermodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 2908 "parsermodule.c"
      case 10: // $bb9
        var $23=HEAP[$tree_addr]; //@line 2910 "parsermodule.c"
        var $24=_validate_numnodes($23, 3, ((__str169)&4294967295)); //@line 2910 "parsermodule.c"
        var $25=((($24))|0)==0; //@line 2910 "parsermodule.c"
        if ($25) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 2910 "parsermodule.c"
      case 11: // $bb10
        var $26=HEAP[$tree_addr]; //@line 2910 "parsermodule.c"
        var $27=(($26+20)&4294967295); //@line 2910 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2910 "parsermodule.c"
        var $29=(($28)&4294967295); //@line 2910 "parsermodule.c"
        var $30=_validate_terminal($29, 23, ((__str114)&4294967295)); //@line 2910 "parsermodule.c"
        var $31=((($30))|0)==0; //@line 2910 "parsermodule.c"
        if ($31) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 2910 "parsermodule.c"
      case 12: // $bb11
        var $32=HEAP[$tree_addr]; //@line 2910 "parsermodule.c"
        var $33=(($32+20)&4294967295); //@line 2910 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2910 "parsermodule.c"
        var $35=(($34+24)&4294967295); //@line 2910 "parsermodule.c"
        var $36=_validate_terminal($35, 23, ((__str114)&4294967295)); //@line 2910 "parsermodule.c"
        var $37=((($36))|0)==0; //@line 2910 "parsermodule.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 2910 "parsermodule.c"
      case 13: // $bb12
        var $38=HEAP[$tree_addr]; //@line 2910 "parsermodule.c"
        var $39=(($38+20)&4294967295); //@line 2910 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2910 "parsermodule.c"
        var $41=(($40+48)&4294967295); //@line 2910 "parsermodule.c"
        var $42=_validate_terminal($41, 23, ((__str114)&4294967295)); //@line 2910 "parsermodule.c"
        var $43=((($42))|0)==0; //@line 2910 "parsermodule.c"
        if ($43) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 2910 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_201]=1; //@line 2910 "parsermodule.c"
        __label__ = 16; break; //@line 2910 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_201]=0; //@line 2910 "parsermodule.c"
        __label__ = 16; break; //@line 2910 "parsermodule.c"
      case 16: // $bb15
        var $44=HEAP[$iftmp_201]; //@line 2910 "parsermodule.c"
        HEAP[$0]=$44; //@line 2910 "parsermodule.c"
        __label__ = 35; break; //@line 2910 "parsermodule.c"
      case 17: // $bb16
        var $45=HEAP[$nch]; //@line 2914 "parsermodule.c"
        var $46=((($45))|0)==1; //@line 2914 "parsermodule.c"
        if ($46) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 2914 "parsermodule.c"
      case 18: // $bb17
        var $47=HEAP[$tree_addr]; //@line 2915 "parsermodule.c"
        var $48=(($47+20)&4294967295); //@line 2915 "parsermodule.c"
        var $49=HEAP[$48]; //@line 2915 "parsermodule.c"
        var $50=(($49)&4294967295); //@line 2915 "parsermodule.c"
        var $51=(($50)&4294967295); //@line 2915 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2915 "parsermodule.c"
        var $53=reSign(($52), 16, 0)==304; //@line 2915 "parsermodule.c"
        if ($53) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2915 "parsermodule.c"
      case 19: // $bb18
        var $54=HEAP[$tree_addr]; //@line 2916 "parsermodule.c"
        var $55=(($54+20)&4294967295); //@line 2916 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2916 "parsermodule.c"
        var $57=(($56)&4294967295); //@line 2916 "parsermodule.c"
        var $58=_validate_test($57); //@line 2916 "parsermodule.c"
        HEAP[$res]=$58; //@line 2916 "parsermodule.c"
        __label__ = 21; break; //@line 2916 "parsermodule.c"
      case 20: // $bb19
        var $59=HEAP[$tree_addr]; //@line 2918 "parsermodule.c"
        var $60=(($59+20)&4294967295); //@line 2918 "parsermodule.c"
        var $61=HEAP[$60]; //@line 2918 "parsermodule.c"
        var $62=(($61)&4294967295); //@line 2918 "parsermodule.c"
        var $63=_validate_terminal($62, 11, ((__str54)&4294967295)); //@line 2918 "parsermodule.c"
        HEAP[$res]=$63; //@line 2918 "parsermodule.c"
        __label__ = 21; break; //@line 2918 "parsermodule.c"
      case 21: // $bb20
        var $64=HEAP[$res]; //@line 2919 "parsermodule.c"
        HEAP[$0]=$64; //@line 2919 "parsermodule.c"
        __label__ = 35; break; //@line 2919 "parsermodule.c"
      case 22: // $bb21
        var $65=HEAP[$tree_addr]; //@line 2925 "parsermodule.c"
        var $66=(($65+20)&4294967295); //@line 2925 "parsermodule.c"
        var $67=HEAP[$66]; //@line 2925 "parsermodule.c"
        var $68=(($67)&4294967295); //@line 2925 "parsermodule.c"
        var $69=(($68)&4294967295); //@line 2925 "parsermodule.c"
        var $70=HEAP[$69]; //@line 2925 "parsermodule.c"
        var $71=reSign(($70), 16, 0)!=11; //@line 2925 "parsermodule.c"
        if ($71) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 2925 "parsermodule.c"
      case 23: // $bb22
        var $72=HEAP[$nch]; //@line 2925 "parsermodule.c"
        var $73=((($72))|0)==4; //@line 2925 "parsermodule.c"
        if ($73) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2925 "parsermodule.c"
      case 24: // $bb23
        var $74=HEAP[$tree_addr]; //@line 2926 "parsermodule.c"
        var $75=(($74+20)&4294967295); //@line 2926 "parsermodule.c"
        var $76=HEAP[$75]; //@line 2926 "parsermodule.c"
        var $77=(($76)&4294967295); //@line 2926 "parsermodule.c"
        var $78=_validate_test($77); //@line 2926 "parsermodule.c"
        HEAP[$res]=$78; //@line 2926 "parsermodule.c"
        HEAP[$offset]=1; //@line 2927 "parsermodule.c"
        __label__ = 25; break; //@line 2927 "parsermodule.c"
      case 25: // $bb24
        var $79=HEAP[$res]; //@line 2929 "parsermodule.c"
        var $80=((($79))|0)!=0; //@line 2929 "parsermodule.c"
        if ($80) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2929 "parsermodule.c"
      case 26: // $bb25
        var $81=HEAP[$tree_addr]; //@line 2930 "parsermodule.c"
        var $82=(($81+20)&4294967295); //@line 2930 "parsermodule.c"
        var $83=HEAP[$82]; //@line 2930 "parsermodule.c"
        var $84=HEAP[$offset]; //@line 2930 "parsermodule.c"
        var $85=(($83+24*$84)&4294967295); //@line 2930 "parsermodule.c"
        var $86=_validate_terminal($85, 11, ((__str54)&4294967295)); //@line 2930 "parsermodule.c"
        HEAP[$res]=$86; //@line 2930 "parsermodule.c"
        __label__ = 27; break; //@line 2930 "parsermodule.c"
      case 27: // $bb26
        var $87=HEAP[$res]; //@line 2931 "parsermodule.c"
        var $88=((($87))|0)!=0; //@line 2931 "parsermodule.c"
        if ($88) { __label__ = 28; break; } else { __label__ = 34; break; } //@line 2931 "parsermodule.c"
      case 28: // $bb27
        var $89=HEAP[$offset]; //@line 2932 "parsermodule.c"
        var $90=((($89) + 1)&4294967295); //@line 2932 "parsermodule.c"
        HEAP[$offset]=$90; //@line 2932 "parsermodule.c"
        var $91=HEAP[$nch]; //@line 2932 "parsermodule.c"
        var $92=HEAP[$offset]; //@line 2932 "parsermodule.c"
        var $93=((($91) - ($92))&4294967295); //@line 2932 "parsermodule.c"
        HEAP[$rem]=$93; //@line 2932 "parsermodule.c"
        var $94=HEAP[$rem]; //@line 2933 "parsermodule.c"
        var $95=((($94))|0)!=0; //@line 2933 "parsermodule.c"
        if ($95) { __label__ = 29; break; } else { __label__ = 34; break; } //@line 2933 "parsermodule.c"
      case 29: // $bb28
        var $96=HEAP[$tree_addr]; //@line 2934 "parsermodule.c"
        var $97=(($96+20)&4294967295); //@line 2934 "parsermodule.c"
        var $98=HEAP[$97]; //@line 2934 "parsermodule.c"
        var $99=HEAP[$offset]; //@line 2934 "parsermodule.c"
        var $100=(($98+24*$99)&4294967295); //@line 2934 "parsermodule.c"
        var $101=(($100)&4294967295); //@line 2934 "parsermodule.c"
        var $102=HEAP[$101]; //@line 2934 "parsermodule.c"
        var $103=reSign(($102), 16, 0)==304; //@line 2934 "parsermodule.c"
        if ($103) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 2934 "parsermodule.c"
      case 30: // $bb29
        var $104=HEAP[$tree_addr]; //@line 2935 "parsermodule.c"
        var $105=(($104+20)&4294967295); //@line 2935 "parsermodule.c"
        var $106=HEAP[$105]; //@line 2935 "parsermodule.c"
        var $107=HEAP[$offset]; //@line 2935 "parsermodule.c"
        var $108=(($106+24*$107)&4294967295); //@line 2935 "parsermodule.c"
        var $109=_validate_test($108); //@line 2935 "parsermodule.c"
        HEAP[$res]=$109; //@line 2935 "parsermodule.c"
        var $110=HEAP[$offset]; //@line 2936 "parsermodule.c"
        var $111=((($110) + 1)&4294967295); //@line 2936 "parsermodule.c"
        HEAP[$offset]=$111; //@line 2936 "parsermodule.c"
        var $112=HEAP[$rem]; //@line 2937 "parsermodule.c"
        var $113=((($112) - 1)&4294967295); //@line 2937 "parsermodule.c"
        HEAP[$rem]=$113; //@line 2937 "parsermodule.c"
        __label__ = 31; break; //@line 2937 "parsermodule.c"
      case 31: // $bb30
        var $114=HEAP[$res]; //@line 2939 "parsermodule.c"
        var $115=((($114))|0)!=0; //@line 2939 "parsermodule.c"
        if ($115) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 2939 "parsermodule.c"
      case 32: // $bb31
        var $116=HEAP[$rem]; //@line 2939 "parsermodule.c"
        var $117=((($116))|0)!=0; //@line 2939 "parsermodule.c"
        if ($117) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 2939 "parsermodule.c"
      case 33: // $bb32
        var $118=HEAP[$tree_addr]; //@line 2940 "parsermodule.c"
        var $119=(($118+20)&4294967295); //@line 2940 "parsermodule.c"
        var $120=HEAP[$119]; //@line 2940 "parsermodule.c"
        var $121=HEAP[$offset]; //@line 2940 "parsermodule.c"
        var $122=(($120+24*$121)&4294967295); //@line 2940 "parsermodule.c"
        var $123=_validate_sliceop($122); //@line 2940 "parsermodule.c"
        HEAP[$res]=$123; //@line 2940 "parsermodule.c"
        __label__ = 34; break; //@line 2940 "parsermodule.c"
      case 34: // $bb33
        var $124=HEAP[$res]; //@line 2943 "parsermodule.c"
        HEAP[$0]=$124; //@line 2943 "parsermodule.c"
        __label__ = 35; break; //@line 2943 "parsermodule.c"
      case 35: // $bb34
        var $125=HEAP[$0]; //@line 2906 "parsermodule.c"
        HEAP[$retval]=$125; //@line 2906 "parsermodule.c"
        __label__ = 36; break; //@line 2906 "parsermodule.c"
      case 36: // $return
        var $retval35=HEAP[$retval]; //@line 2906 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 2906 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_sliceop($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_202=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2950 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2950 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2950 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2950 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 2952 "parsermodule.c"
        var $5=((($4))|0)==1; //@line 2952 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2952 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 2952 "parsermodule.c"
        var $7=_validate_numnodes($6, 2, ((__str170)&4294967295)); //@line 2952 "parsermodule.c"
        var $8=((($7))|0)!=0; //@line 2952 "parsermodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 2952 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 2952 "parsermodule.c"
        var $10=_validate_ntype($9, 325); //@line 2952 "parsermodule.c"
        var $11=((($10))|0)==0; //@line 2952 "parsermodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2952 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_202]=1; //@line 2952 "parsermodule.c"
        __label__ = 5; break; //@line 2952 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_202]=0; //@line 2952 "parsermodule.c"
        __label__ = 5; break; //@line 2952 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$iftmp_202]; //@line 2952 "parsermodule.c"
        HEAP[$res]=$12; //@line 2952 "parsermodule.c"
        var $13=HEAP[$res]; //@line 2953 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 2953 "parsermodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 2953 "parsermodule.c"
      case 6: // $bb5
        var $15=_PyErr_Occurred(); //@line 2953 "parsermodule.c"
        var $16=($15)==0; //@line 2953 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2953 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$tree_addr]; //@line 2954 "parsermodule.c"
        var $18=_validate_numnodes($17, 1, ((__str170)&4294967295)); //@line 2954 "parsermodule.c"
        HEAP[$res]=$18; //@line 2954 "parsermodule.c"
        __label__ = 8; break; //@line 2954 "parsermodule.c"
      case 8: // $bb7
        var $19=HEAP[$res]; //@line 2956 "parsermodule.c"
        var $20=((($19))|0)!=0; //@line 2956 "parsermodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2956 "parsermodule.c"
      case 9: // $bb8
        var $21=HEAP[$tree_addr]; //@line 2957 "parsermodule.c"
        var $22=(($21+20)&4294967295); //@line 2957 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2957 "parsermodule.c"
        var $24=(($23)&4294967295); //@line 2957 "parsermodule.c"
        var $25=_validate_terminal($24, 11, ((__str54)&4294967295)); //@line 2957 "parsermodule.c"
        HEAP[$res]=$25; //@line 2957 "parsermodule.c"
        __label__ = 10; break; //@line 2957 "parsermodule.c"
      case 10: // $bb9
        var $26=HEAP[$res]; //@line 2958 "parsermodule.c"
        var $27=((($26))|0)!=0; //@line 2958 "parsermodule.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2958 "parsermodule.c"
      case 11: // $bb10
        var $28=HEAP[$nch]; //@line 2958 "parsermodule.c"
        var $29=((($28))|0)==2; //@line 2958 "parsermodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2958 "parsermodule.c"
      case 12: // $bb11
        var $30=HEAP[$tree_addr]; //@line 2959 "parsermodule.c"
        var $31=(($30+20)&4294967295); //@line 2959 "parsermodule.c"
        var $32=HEAP[$31]; //@line 2959 "parsermodule.c"
        var $33=(($32+24)&4294967295); //@line 2959 "parsermodule.c"
        var $34=_validate_test($33); //@line 2959 "parsermodule.c"
        HEAP[$res]=$34; //@line 2959 "parsermodule.c"
        __label__ = 13; break; //@line 2959 "parsermodule.c"
      case 13: // $bb12
        var $35=HEAP[$res]; //@line 2961 "parsermodule.c"
        HEAP[$0]=$35; //@line 2961 "parsermodule.c"
        var $36=HEAP[$0]; //@line 2961 "parsermodule.c"
        HEAP[$retval]=$36; //@line 2961 "parsermodule.c"
        __label__ = 14; break; //@line 2961 "parsermodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 2961 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2961 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_exprlist($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2968 "parsermodule.c"
        var $2=_validate_repeating_list($1, 326, (FUNCTION_TABLE_OFFSET + 22), ((__str171)&4294967295)); //@line 2968 "parsermodule.c"
        HEAP[$0]=$2; //@line 2968 "parsermodule.c"
        var $3=HEAP[$0]; //@line 2968 "parsermodule.c"
        HEAP[$retval]=$3; //@line 2968 "parsermodule.c"
        __label__ = 1; break; //@line 2968 "parsermodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 2968 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 2968 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dictorsetmaker($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_207=__stackBase__+12;
        var $iftmp_206=__stackBase__+16;
        var $iftmp_205=__stackBase__+20;
        var $iftmp_204=__stackBase__+24;
        var $iftmp_203=__stackBase__+28;
        var $nch=__stackBase__+32;
        var $ok=__stackBase__+36;
        var $i=__stackBase__+40;
        var $check_trailing_comma=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 2982 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 2982 "parsermodule.c"
        var $3=HEAP[$2]; //@line 2982 "parsermodule.c"
        HEAP[$nch]=$3; //@line 2982 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 2983 "parsermodule.c"
        var $5=_validate_ntype($4, 328); //@line 2983 "parsermodule.c"
        HEAP[$ok]=$5; //@line 2983 "parsermodule.c"
        HEAP[$i]=0; //@line 2984 "parsermodule.c"
        HEAP[$check_trailing_comma]=0; //@line 2985 "parsermodule.c"
        var $6=HEAP[$nch]; //@line 2987 "parsermodule.c"
        var $7=((($6))|0) <= 0; //@line 2987 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2987 "parsermodule.c"
      case 1: // $bb
        ___assert_fail(((__str172)&4294967295), ((__str173)&4294967295), 2987, ((___PRETTY_FUNCTION___13794)&4294967295)); //@line 2987 "parsermodule.c"
        throw "Reached an unreachable! Original .ll line: 14143"; //@line 2987 "parsermodule.c"
      case 2: // $bb1
        var $8=HEAP[$ok]; //@line 2989 "parsermodule.c"
        var $9=((($8))|0)==0; //@line 2989 "parsermodule.c"
        if ($9) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 2989 "parsermodule.c"
      case 3: // $bb2
        var $10=HEAP[$nch]; //@line 2989 "parsermodule.c"
        var $11=((($10))|0)==1; //@line 2989 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2989 "parsermodule.c"
      case 4: // $bb3
        var $12=HEAP[$tree_addr]; //@line 2989 "parsermodule.c"
        var $13=(($12+20)&4294967295); //@line 2989 "parsermodule.c"
        var $14=HEAP[$13]; //@line 2989 "parsermodule.c"
        var $15=(($14+24)&4294967295); //@line 2989 "parsermodule.c"
        var $16=(($15)&4294967295); //@line 2989 "parsermodule.c"
        var $17=HEAP[$16]; //@line 2989 "parsermodule.c"
        var $18=reSign(($17), 16, 0)==12; //@line 2989 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 2989 "parsermodule.c"
      case 5: // $bb4
        var $19=HEAP[$tree_addr]; //@line 2993 "parsermodule.c"
        var $20=(($19+20)&4294967295); //@line 2993 "parsermodule.c"
        var $21=HEAP[$20]; //@line 2993 "parsermodule.c"
        var $22=HEAP[$i]; //@line 2993 "parsermodule.c"
        var $23=(($21+24*$22)&4294967295); //@line 2993 "parsermodule.c"
        var $24=HEAP[$i]; //@line 2993 "parsermodule.c"
        var $25=((($24) + 1)&4294967295); //@line 2993 "parsermodule.c"
        HEAP[$i]=$25; //@line 2993 "parsermodule.c"
        var $26=_validate_test($23); //@line 2993 "parsermodule.c"
        HEAP[$ok]=$26; //@line 2993 "parsermodule.c"
        __label__ = 11; break; //@line 2993 "parsermodule.c"
      case 6: // $bb5
        var $27=HEAP[$tree_addr]; //@line 2995 "parsermodule.c"
        var $28=(($27+20)&4294967295); //@line 2995 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2995 "parsermodule.c"
        var $30=HEAP[$i]; //@line 2995 "parsermodule.c"
        var $31=(($29+24*$30)&4294967295); //@line 2995 "parsermodule.c"
        var $32=_validate_terminal($31, 12, ((__str52)&4294967295)); //@line 2995 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 2995 "parsermodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 2995 "parsermodule.c"
      case 7: // $bb6
        var $34=HEAP[$tree_addr]; //@line 2995 "parsermodule.c"
        var $35=(($34+20)&4294967295); //@line 2995 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2995 "parsermodule.c"
        var $37=HEAP[$i]; //@line 2995 "parsermodule.c"
        var $38=((($37) + 1)&4294967295); //@line 2995 "parsermodule.c"
        var $39=(($36+24*$38)&4294967295); //@line 2995 "parsermodule.c"
        var $40=_validate_test($39); //@line 2995 "parsermodule.c"
        var $41=((($40))|0)==0; //@line 2995 "parsermodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2995 "parsermodule.c"
      case 8: // $bb7
        HEAP[$iftmp_203]=1; //@line 2995 "parsermodule.c"
        __label__ = 10; break; //@line 2995 "parsermodule.c"
      case 9: // $bb8
        HEAP[$iftmp_203]=0; //@line 2995 "parsermodule.c"
        __label__ = 10; break; //@line 2995 "parsermodule.c"
      case 10: // $bb9
        var $42=HEAP[$iftmp_203]; //@line 2995 "parsermodule.c"
        HEAP[$ok]=$42; //@line 2995 "parsermodule.c"
        var $43=HEAP[$i]; //@line 2997 "parsermodule.c"
        var $44=((($43) + 2)&4294967295); //@line 2997 "parsermodule.c"
        HEAP[$i]=$44; //@line 2997 "parsermodule.c"
        __label__ = 11; break; //@line 2997 "parsermodule.c"
      case 11: // $bb10
        var $45=HEAP[$ok]; //@line 2994 "parsermodule.c"
        var $46=((($45))|0)==0; //@line 2994 "parsermodule.c"
        if ($46) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2994 "parsermodule.c"
      case 12: // $bb11
        var $47=HEAP[$nch]; //@line 2994 "parsermodule.c"
        var $48=HEAP[$i]; //@line 2994 "parsermodule.c"
        var $49=((($47) - ($48))&4294967295); //@line 2994 "parsermodule.c"
        var $50=((($49))|0) > 1; //@line 2994 "parsermodule.c"
        if ($50) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 2994 "parsermodule.c"
      case 13: // $bb12
        HEAP[$check_trailing_comma]=1; //@line 2999 "parsermodule.c"
        __label__ = 51; break; //@line 2999 "parsermodule.c"
      case 14: // $bb13
        var $51=HEAP[$ok]; //@line 3001 "parsermodule.c"
        var $52=((($51))|0)==0; //@line 3001 "parsermodule.c"
        if ($52) { __label__ = 21; break; } else { __label__ = 15; break; } //@line 3001 "parsermodule.c"
      case 15: // $bb14
        var $53=HEAP[$tree_addr]; //@line 3001 "parsermodule.c"
        var $54=(($53+20)&4294967295); //@line 3001 "parsermodule.c"
        var $55=HEAP[$54]; //@line 3001 "parsermodule.c"
        var $56=(($55+24)&4294967295); //@line 3001 "parsermodule.c"
        var $57=(($56)&4294967295); //@line 3001 "parsermodule.c"
        var $58=HEAP[$57]; //@line 3001 "parsermodule.c"
        var $59=reSign(($58), 16, 0)!=336; //@line 3001 "parsermodule.c"
        if ($59) { __label__ = 21; break; } else { __label__ = 16; break; } //@line 3001 "parsermodule.c"
      case 16: // $bb15
        var $60=HEAP[$tree_addr]; //@line 3005 "parsermodule.c"
        var $61=(($60+20)&4294967295); //@line 3005 "parsermodule.c"
        var $62=HEAP[$61]; //@line 3005 "parsermodule.c"
        var $63=(($62)&4294967295); //@line 3005 "parsermodule.c"
        var $64=_validate_test($63); //@line 3005 "parsermodule.c"
        var $65=((($64))|0)==0; //@line 3005 "parsermodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 3005 "parsermodule.c"
      case 17: // $bb16
        var $66=HEAP[$tree_addr]; //@line 3005 "parsermodule.c"
        var $67=(($66+20)&4294967295); //@line 3005 "parsermodule.c"
        var $68=HEAP[$67]; //@line 3005 "parsermodule.c"
        var $69=(($68+24)&4294967295); //@line 3005 "parsermodule.c"
        var $70=_validate_comp_for($69); //@line 3005 "parsermodule.c"
        var $71=((($70))|0)==0; //@line 3005 "parsermodule.c"
        if ($71) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 3005 "parsermodule.c"
      case 18: // $bb17
        HEAP[$iftmp_204]=1; //@line 3005 "parsermodule.c"
        __label__ = 20; break; //@line 3005 "parsermodule.c"
      case 19: // $bb18
        HEAP[$iftmp_204]=0; //@line 3005 "parsermodule.c"
        __label__ = 20; break; //@line 3005 "parsermodule.c"
      case 20: // $bb19
        var $72=HEAP[$iftmp_204]; //@line 3005 "parsermodule.c"
        HEAP[$ok]=$72; //@line 3005 "parsermodule.c"
        __label__ = 51; break; //@line 3005 "parsermodule.c"
      case 21: // $bb20
        var $73=HEAP[$ok]; //@line 3008 "parsermodule.c"
        var $74=((($73))|0)==0; //@line 3008 "parsermodule.c"
        if ($74) { __label__ = 31; break; } else { __label__ = 22; break; } //@line 3008 "parsermodule.c"
      case 22: // $bb21
        var $75=HEAP[$tree_addr]; //@line 3008 "parsermodule.c"
        var $76=(($75+16)&4294967295); //@line 3008 "parsermodule.c"
        var $77=HEAP[$76]; //@line 3008 "parsermodule.c"
        var $78=((($77))|0) <= 3; //@line 3008 "parsermodule.c"
        if ($78) { __label__ = 31; break; } else { __label__ = 23; break; } //@line 3008 "parsermodule.c"
      case 23: // $bb22
        var $79=HEAP[$tree_addr]; //@line 3008 "parsermodule.c"
        var $80=(($79+20)&4294967295); //@line 3008 "parsermodule.c"
        var $81=HEAP[$80]; //@line 3008 "parsermodule.c"
        var $82=(($81+72)&4294967295); //@line 3008 "parsermodule.c"
        var $83=(($82)&4294967295); //@line 3008 "parsermodule.c"
        var $84=HEAP[$83]; //@line 3008 "parsermodule.c"
        var $85=reSign(($84), 16, 0)!=336; //@line 3008 "parsermodule.c"
        if ($85) { __label__ = 31; break; } else { __label__ = 24; break; } //@line 3008 "parsermodule.c"
      case 24: // $bb23
        var $86=HEAP[$tree_addr]; //@line 3012 "parsermodule.c"
        var $87=(($86+20)&4294967295); //@line 3012 "parsermodule.c"
        var $88=HEAP[$87]; //@line 3012 "parsermodule.c"
        var $89=(($88)&4294967295); //@line 3012 "parsermodule.c"
        var $90=_validate_test($89); //@line 3012 "parsermodule.c"
        var $91=((($90))|0)==0; //@line 3012 "parsermodule.c"
        if ($91) { __label__ = 29; break; } else { __label__ = 25; break; } //@line 3012 "parsermodule.c"
      case 25: // $bb24
        var $92=HEAP[$tree_addr]; //@line 3012 "parsermodule.c"
        var $93=(($92+20)&4294967295); //@line 3012 "parsermodule.c"
        var $94=HEAP[$93]; //@line 3012 "parsermodule.c"
        var $95=(($94+24)&4294967295); //@line 3012 "parsermodule.c"
        var $96=_validate_terminal($95, 11, ((__str54)&4294967295)); //@line 3012 "parsermodule.c"
        var $97=((($96))|0)==0; //@line 3012 "parsermodule.c"
        if ($97) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 3012 "parsermodule.c"
      case 26: // $bb25
        var $98=HEAP[$tree_addr]; //@line 3012 "parsermodule.c"
        var $99=(($98+20)&4294967295); //@line 3012 "parsermodule.c"
        var $100=HEAP[$99]; //@line 3012 "parsermodule.c"
        var $101=(($100+48)&4294967295); //@line 3012 "parsermodule.c"
        var $102=_validate_test($101); //@line 3012 "parsermodule.c"
        var $103=((($102))|0)==0; //@line 3012 "parsermodule.c"
        if ($103) { __label__ = 29; break; } else { __label__ = 27; break; } //@line 3012 "parsermodule.c"
      case 27: // $bb26
        var $104=HEAP[$tree_addr]; //@line 3012 "parsermodule.c"
        var $105=(($104+20)&4294967295); //@line 3012 "parsermodule.c"
        var $106=HEAP[$105]; //@line 3012 "parsermodule.c"
        var $107=(($106+72)&4294967295); //@line 3012 "parsermodule.c"
        var $108=_validate_comp_for($107); //@line 3012 "parsermodule.c"
        var $109=((($108))|0)==0; //@line 3012 "parsermodule.c"
        if ($109) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 3012 "parsermodule.c"
      case 28: // $bb27
        HEAP[$iftmp_205]=1; //@line 3012 "parsermodule.c"
        __label__ = 30; break; //@line 3012 "parsermodule.c"
      case 29: // $bb28
        HEAP[$iftmp_205]=0; //@line 3012 "parsermodule.c"
        __label__ = 30; break; //@line 3012 "parsermodule.c"
      case 30: // $bb29
        var $110=HEAP[$iftmp_205]; //@line 3012 "parsermodule.c"
        HEAP[$ok]=$110; //@line 3012 "parsermodule.c"
        __label__ = 51; break; //@line 3012 "parsermodule.c"
      case 31: // $bb30
        var $111=HEAP[$ok]; //@line 3017 "parsermodule.c"
        var $112=((($111))|0)!=0; //@line 3017 "parsermodule.c"
        if ($112) { __label__ = 32; break; } else { __label__ = 51; break; } //@line 3017 "parsermodule.c"
      case 32: // $bb31
        var $113=HEAP[$nch]; //@line 3021 "parsermodule.c"
        var $114=((($113))|0) > 2; //@line 3021 "parsermodule.c"
        if ($114) { __label__ = 33; break; } else { __label__ = 39; break; } //@line 3021 "parsermodule.c"
      case 33: // $bb32
        var $115=HEAP[$tree_addr]; //@line 3022 "parsermodule.c"
        var $116=(($115+20)&4294967295); //@line 3022 "parsermodule.c"
        var $117=HEAP[$116]; //@line 3022 "parsermodule.c"
        var $118=HEAP[$i]; //@line 3022 "parsermodule.c"
        var $119=(($117+24*$118)&4294967295); //@line 3022 "parsermodule.c"
        var $120=_validate_test($119); //@line 3022 "parsermodule.c"
        var $121=((($120))|0)==0; //@line 3022 "parsermodule.c"
        if ($121) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 3022 "parsermodule.c"
      case 34: // $bb33
        var $122=HEAP[$tree_addr]; //@line 3022 "parsermodule.c"
        var $123=(($122+20)&4294967295); //@line 3022 "parsermodule.c"
        var $124=HEAP[$123]; //@line 3022 "parsermodule.c"
        var $125=HEAP[$i]; //@line 3022 "parsermodule.c"
        var $126=((($125) + 1)&4294967295); //@line 3022 "parsermodule.c"
        var $127=(($124+24*$126)&4294967295); //@line 3022 "parsermodule.c"
        var $128=_validate_terminal($127, 11, ((__str54)&4294967295)); //@line 3022 "parsermodule.c"
        var $129=((($128))|0)==0; //@line 3022 "parsermodule.c"
        if ($129) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 3022 "parsermodule.c"
      case 35: // $bb34
        var $130=HEAP[$tree_addr]; //@line 3022 "parsermodule.c"
        var $131=(($130+20)&4294967295); //@line 3022 "parsermodule.c"
        var $132=HEAP[$131]; //@line 3022 "parsermodule.c"
        var $133=HEAP[$i]; //@line 3022 "parsermodule.c"
        var $134=((($133) + 2)&4294967295); //@line 3022 "parsermodule.c"
        var $135=(($132+24*$134)&4294967295); //@line 3022 "parsermodule.c"
        var $136=_validate_test($135); //@line 3022 "parsermodule.c"
        var $137=((($136))|0)==0; //@line 3022 "parsermodule.c"
        if ($137) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 3022 "parsermodule.c"
      case 36: // $bb35
        HEAP[$iftmp_206]=1; //@line 3022 "parsermodule.c"
        __label__ = 38; break; //@line 3022 "parsermodule.c"
      case 37: // $bb36
        HEAP[$iftmp_206]=0; //@line 3022 "parsermodule.c"
        __label__ = 38; break; //@line 3022 "parsermodule.c"
      case 38: // $bb37
        var $138=HEAP[$iftmp_206]; //@line 3022 "parsermodule.c"
        HEAP[$ok]=$138; //@line 3022 "parsermodule.c"
        var $139=HEAP[$i]; //@line 3025 "parsermodule.c"
        var $140=((($139) + 3)&4294967295); //@line 3025 "parsermodule.c"
        HEAP[$i]=$140; //@line 3025 "parsermodule.c"
        __label__ = 40; break; //@line 3025 "parsermodule.c"
      case 39: // $bb38
        HEAP[$ok]=0; //@line 3028 "parsermodule.c"
        _err_string(((__str174)&4294967295)); //@line 3029 "parsermodule.c"
        __label__ = 40; break; //@line 3029 "parsermodule.c"
      case 40: // $bb39
        __label__ = 48; break; //@line 3029 "parsermodule.c"
      case 41: // $bb40
        var $141=HEAP[$tree_addr]; //@line 3033 "parsermodule.c"
        var $142=(($141+20)&4294967295); //@line 3033 "parsermodule.c"
        var $143=HEAP[$142]; //@line 3033 "parsermodule.c"
        var $144=HEAP[$i]; //@line 3033 "parsermodule.c"
        var $145=(($143+24*$144)&4294967295); //@line 3033 "parsermodule.c"
        var $146=_validate_terminal($145, 12, ((__str52)&4294967295)); //@line 3033 "parsermodule.c"
        var $147=((($146))|0)==0; //@line 3033 "parsermodule.c"
        if ($147) { __label__ = 46; break; } else { __label__ = 42; break; } //@line 3033 "parsermodule.c"
      case 42: // $bb41
        var $148=HEAP[$tree_addr]; //@line 3033 "parsermodule.c"
        var $149=(($148+20)&4294967295); //@line 3033 "parsermodule.c"
        var $150=HEAP[$149]; //@line 3033 "parsermodule.c"
        var $151=HEAP[$i]; //@line 3033 "parsermodule.c"
        var $152=((($151) + 1)&4294967295); //@line 3033 "parsermodule.c"
        var $153=(($150+24*$152)&4294967295); //@line 3033 "parsermodule.c"
        var $154=_validate_test($153); //@line 3033 "parsermodule.c"
        var $155=((($154))|0)==0; //@line 3033 "parsermodule.c"
        if ($155) { __label__ = 46; break; } else { __label__ = 43; break; } //@line 3033 "parsermodule.c"
      case 43: // $bb42
        var $156=HEAP[$tree_addr]; //@line 3033 "parsermodule.c"
        var $157=(($156+20)&4294967295); //@line 3033 "parsermodule.c"
        var $158=HEAP[$157]; //@line 3033 "parsermodule.c"
        var $159=HEAP[$i]; //@line 3033 "parsermodule.c"
        var $160=((($159) + 2)&4294967295); //@line 3033 "parsermodule.c"
        var $161=(($158+24*$160)&4294967295); //@line 3033 "parsermodule.c"
        var $162=_validate_terminal($161, 11, ((__str54)&4294967295)); //@line 3033 "parsermodule.c"
        var $163=((($162))|0)==0; //@line 3033 "parsermodule.c"
        if ($163) { __label__ = 46; break; } else { __label__ = 44; break; } //@line 3033 "parsermodule.c"
      case 44: // $bb43
        var $164=HEAP[$tree_addr]; //@line 3033 "parsermodule.c"
        var $165=(($164+20)&4294967295); //@line 3033 "parsermodule.c"
        var $166=HEAP[$165]; //@line 3033 "parsermodule.c"
        var $167=HEAP[$i]; //@line 3033 "parsermodule.c"
        var $168=((($167) + 3)&4294967295); //@line 3033 "parsermodule.c"
        var $169=(($166+24*$168)&4294967295); //@line 3033 "parsermodule.c"
        var $170=_validate_test($169); //@line 3033 "parsermodule.c"
        var $171=((($170))|0)==0; //@line 3033 "parsermodule.c"
        if ($171) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 3033 "parsermodule.c"
      case 45: // $bb44
        HEAP[$iftmp_207]=1; //@line 3033 "parsermodule.c"
        __label__ = 47; break; //@line 3033 "parsermodule.c"
      case 46: // $bb45
        HEAP[$iftmp_207]=0; //@line 3033 "parsermodule.c"
        __label__ = 47; break; //@line 3033 "parsermodule.c"
      case 47: // $bb46
        var $172=HEAP[$iftmp_207]; //@line 3033 "parsermodule.c"
        HEAP[$ok]=$172; //@line 3033 "parsermodule.c"
        var $173=HEAP[$i]; //@line 3037 "parsermodule.c"
        var $174=((($173) + 4)&4294967295); //@line 3037 "parsermodule.c"
        HEAP[$i]=$174; //@line 3037 "parsermodule.c"
        __label__ = 48; break; //@line 3037 "parsermodule.c"
      case 48: // $bb47
        var $175=HEAP[$ok]; //@line 3032 "parsermodule.c"
        var $176=((($175))|0)==0; //@line 3032 "parsermodule.c"
        if ($176) { __label__ = 50; break; } else { __label__ = 49; break; } //@line 3032 "parsermodule.c"
      case 49: // $bb48
        var $177=HEAP[$nch]; //@line 3032 "parsermodule.c"
        var $178=HEAP[$i]; //@line 3032 "parsermodule.c"
        var $179=((($177) - ($178))&4294967295); //@line 3032 "parsermodule.c"
        var $180=((($179))|0) > 3; //@line 3032 "parsermodule.c"
        if ($180) { __label__ = 41; break; } else { __label__ = 50; break; } //@line 3032 "parsermodule.c"
      case 50: // $bb49
        HEAP[$check_trailing_comma]=1; //@line 3039 "parsermodule.c"
        __label__ = 51; break; //@line 3039 "parsermodule.c"
      case 51: // $bb50
        var $181=HEAP[$ok]; //@line 3041 "parsermodule.c"
        var $182=((($181))|0)!=0; //@line 3041 "parsermodule.c"
        if ($182) { __label__ = 52; break; } else { __label__ = 57; break; } //@line 3041 "parsermodule.c"
      case 52: // $bb51
        var $183=HEAP[$check_trailing_comma]; //@line 3041 "parsermodule.c"
        var $184=((($183))|0)!=0; //@line 3041 "parsermodule.c"
        if ($184) { __label__ = 53; break; } else { __label__ = 57; break; } //@line 3041 "parsermodule.c"
      case 53: // $bb52
        var $185=HEAP[$nch]; //@line 3042 "parsermodule.c"
        var $186=((($185) - 1)&4294967295); //@line 3042 "parsermodule.c"
        var $187=HEAP[$i]; //@line 3042 "parsermodule.c"
        var $188=((($186))|0)==((($187))|0); //@line 3042 "parsermodule.c"
        if ($188) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 3042 "parsermodule.c"
      case 54: // $bb53
        var $189=HEAP[$tree_addr]; //@line 3043 "parsermodule.c"
        var $190=(($189+20)&4294967295); //@line 3043 "parsermodule.c"
        var $191=HEAP[$190]; //@line 3043 "parsermodule.c"
        var $192=HEAP[$i]; //@line 3043 "parsermodule.c"
        var $193=(($191+24*$192)&4294967295); //@line 3043 "parsermodule.c"
        var $194=_validate_terminal($193, 12, ((__str52)&4294967295)); //@line 3043 "parsermodule.c"
        HEAP[$ok]=$194; //@line 3043 "parsermodule.c"
        __label__ = 57; break; //@line 3043 "parsermodule.c"
      case 55: // $bb54
        var $195=HEAP[$i]; //@line 3044 "parsermodule.c"
        var $196=HEAP[$nch]; //@line 3044 "parsermodule.c"
        var $197=((($195))|0)!=((($196))|0); //@line 3044 "parsermodule.c"
        if ($197) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 3044 "parsermodule.c"
      case 56: // $bb55
        HEAP[$ok]=0; //@line 3045 "parsermodule.c"
        _err_string(((__str175)&4294967295)); //@line 3046 "parsermodule.c"
        __label__ = 57; break; //@line 3046 "parsermodule.c"
      case 57: // $bb56
        var $198=HEAP[$ok]; //@line 3050 "parsermodule.c"
        HEAP[$0]=$198; //@line 3050 "parsermodule.c"
        var $199=HEAP[$0]; //@line 3050 "parsermodule.c"
        HEAP[$retval]=$199; //@line 3050 "parsermodule.c"
        __label__ = 58; break; //@line 3050 "parsermodule.c"
      case 58: // $return
        var $retval57=HEAP[$retval]; //@line 3050 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval57; //@line 3050 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_eval_input($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_208=__stackBase__+12;
        var $pos=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 3058 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 3058 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3058 "parsermodule.c"
        HEAP[$nch]=$3; //@line 3058 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 3062 "parsermodule.c"
        var $5=_validate_ntype($4, 258); //@line 3062 "parsermodule.c"
        var $6=((($5))|0)==0; //@line 3062 "parsermodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 3062 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$nch]; //@line 3062 "parsermodule.c"
        var $8=((($7))|0) <= 1; //@line 3062 "parsermodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 3062 "parsermodule.c"
      case 2: // $bb1
        var $9=HEAP[$tree_addr]; //@line 3062 "parsermodule.c"
        var $10=(($9+20)&4294967295); //@line 3062 "parsermodule.c"
        var $11=HEAP[$10]; //@line 3062 "parsermodule.c"
        var $12=(($11)&4294967295); //@line 3062 "parsermodule.c"
        var $13=_validate_testlist($12); //@line 3062 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 3062 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 3062 "parsermodule.c"
      case 3: // $bb2
        var $15=HEAP[$tree_addr]; //@line 3062 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 3062 "parsermodule.c"
        var $17=HEAP[$16]; //@line 3062 "parsermodule.c"
        var $18=HEAP[$nch]; //@line 3062 "parsermodule.c"
        var $19=((($18) - 1)&4294967295); //@line 3062 "parsermodule.c"
        var $20=(($17+24*$19)&4294967295); //@line 3062 "parsermodule.c"
        var $21=_validate_ntype($20, 0); //@line 3062 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 3062 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 3062 "parsermodule.c"
      case 4: // $bb3
        HEAP[$iftmp_208]=1; //@line 3062 "parsermodule.c"
        __label__ = 6; break; //@line 3062 "parsermodule.c"
      case 5: // $bb4
        HEAP[$iftmp_208]=0; //@line 3062 "parsermodule.c"
        __label__ = 6; break; //@line 3062 "parsermodule.c"
      case 6: // $bb5
        var $23=HEAP[$iftmp_208]; //@line 3062 "parsermodule.c"
        HEAP[$res]=$23; //@line 3062 "parsermodule.c"
        HEAP[$pos]=1; //@line 3064 "parsermodule.c"
        __label__ = 8; break; //@line 3064 "parsermodule.c"
      case 7: // $bb6
        var $24=HEAP[$tree_addr]; //@line 3065 "parsermodule.c"
        var $25=(($24+20)&4294967295); //@line 3065 "parsermodule.c"
        var $26=HEAP[$25]; //@line 3065 "parsermodule.c"
        var $27=HEAP[$pos]; //@line 3065 "parsermodule.c"
        var $28=(($26+24*$27)&4294967295); //@line 3065 "parsermodule.c"
        var $29=_validate_ntype($28, 4); //@line 3065 "parsermodule.c"
        HEAP[$res]=$29; //@line 3065 "parsermodule.c"
        var $30=HEAP[$pos]; //@line 3064 "parsermodule.c"
        var $31=((($30) + 1)&4294967295); //@line 3064 "parsermodule.c"
        HEAP[$pos]=$31; //@line 3064 "parsermodule.c"
        __label__ = 8; break; //@line 3064 "parsermodule.c"
      case 8: // $bb7
        var $32=HEAP[$res]; //@line 3064 "parsermodule.c"
        var $33=((($32))|0)==0; //@line 3064 "parsermodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 3064 "parsermodule.c"
      case 9: // $bb8
        var $34=HEAP[$nch]; //@line 3064 "parsermodule.c"
        var $35=((($34) - 1)&4294967295); //@line 3064 "parsermodule.c"
        var $36=HEAP[$pos]; //@line 3064 "parsermodule.c"
        var $37=((($35))|0) > ((($36))|0); //@line 3064 "parsermodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 3064 "parsermodule.c"
      case 10: // $bb9
        var $38=HEAP[$res]; //@line 3067 "parsermodule.c"
        HEAP[$0]=$38; //@line 3067 "parsermodule.c"
        var $39=HEAP[$0]; //@line 3067 "parsermodule.c"
        HEAP[$retval]=$39; //@line 3067 "parsermodule.c"
        __label__ = 11; break; //@line 3067 "parsermodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 3067 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 3067 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_node($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_212=__stackBase__+12;
        var $iftmp_211=__stackBase__+16;
        var $iftmp_210=__stackBase__+20;
        var $iftmp_209=__stackBase__+24;
        var $nch=__stackBase__+28;
        var $res=__stackBase__+32;
        var $next=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        HEAP[$nch]=0; //@line 3074 "parsermodule.c"
        HEAP[$res]=1; //@line 3075 "parsermodule.c"
        HEAP[$next]=0; //@line 3076 "parsermodule.c"
        __label__ = 75; break; //@line 3076 "parsermodule.c"
      case 1: // $bb
        var $1=HEAP[$tree_addr]; //@line 3079 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 3079 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3079 "parsermodule.c"
        HEAP[$nch]=$3; //@line 3079 "parsermodule.c"
        HEAP[$next]=0; //@line 3080 "parsermodule.c"
        var $4=HEAP[$tree_addr]; //@line 3081 "parsermodule.c"
        var $5=(($4)&4294967295); //@line 3081 "parsermodule.c"
        var $6=HEAP[$5]; //@line 3081 "parsermodule.c"
        var $7=reSign(($6), 16, 0); //@line 3081 "parsermodule.c"
        if ($7 == 261) {
          __label__ = 5; break;
        }
        else if ($7 == 262) {
          __label__ = 2; break;
        }
        else if ($7 == 267) {
          __label__ = 6; break;
        }
        else if ($7 == 268) {
          __label__ = 22; break;
        }
        else if ($7 == 269) {
          __label__ = 7; break;
        }
        else if ($7 == 270) {
          __label__ = 24; break;
        }
        else if ($7 == 272) {
          __label__ = 25; break;
        }
        else if ($7 == 273) {
          __label__ = 26; break;
        }
        else if ($7 == 274) {
          __label__ = 27; break;
        }
        else if ($7 == 275) {
          __label__ = 8; break;
        }
        else if ($7 == 276) {
          __label__ = 32; break;
        }
        else if ($7 == 277) {
          __label__ = 37; break;
        }
        else if ($7 == 278) {
          __label__ = 42; break;
        }
        else if ($7 == 279) {
          __label__ = 21; break;
        }
        else if ($7 == 280) {
          __label__ = 43; break;
        }
        else if ($7 == 281) {
          __label__ = 44; break;
        }
        else if ($7 == 282) {
          __label__ = 45; break;
        }
        else if ($7 == 283) {
          __label__ = 46; break;
        }
        else if ($7 == 289) {
          __label__ = 47; break;
        }
        else if ($7 == 290) {
          __label__ = 48; break;
        }
        else if ($7 == 291) {
          __label__ = 49; break;
        }
        else if ($7 == 292) {
          __label__ = 23; break;
        }
        else if ($7 == 293) {
          __label__ = 50; break;
        }
        else if ($7 == 294) {
          __label__ = 51; break;
        }
        else if ($7 == 295) {
          __label__ = 52; break;
        }
        else if ($7 == 296) {
          __label__ = 53; break;
        }
        else if ($7 == 297) {
          __label__ = 3; break;
        }
        else if ($7 == 300) {
          __label__ = 54; break;
        }
        else if ($7 == 304) {
          __label__ = 58; break;
        }
        else if ($7 == 306) {
          __label__ = 59; break;
        }
        else if ($7 == 307) {
          __label__ = 60; break;
        }
        else if ($7 == 308) {
          __label__ = 61; break;
        }
        else if ($7 == 309) {
          __label__ = 63; break;
        }
        else if ($7 == 310) {
          __label__ = 64; break;
        }
        else if ($7 == 311) {
          __label__ = 65; break;
        }
        else if ($7 == 312) {
          __label__ = 66; break;
        }
        else if ($7 == 313) {
          __label__ = 67; break;
        }
        else if ($7 == 314) {
          __label__ = 68; break;
        }
        else if ($7 == 315) {
          __label__ = 69; break;
        }
        else if ($7 == 316) {
          __label__ = 70; break;
        }
        else if ($7 == 317) {
          __label__ = 71; break;
        }
        else if ($7 == 318) {
          __label__ = 72; break;
        }
        else if ($7 == 326) {
          __label__ = 62; break;
        }
        else if ($7 == 327) {
          __label__ = 55; break;
        }
        else if ($7 == 329) {
          __label__ = 4; break;
        }
        else if ($7 == 338) {
          __label__ = 57; break;
        }
        else if ($7 == 340) {
          __label__ = 56; break;
        }
        else {
        __label__ = 73; break;
        }
        
      case 2: // $bb1
        var $8=HEAP[$tree_addr]; //@line 3086 "parsermodule.c"
        var $9=_validate_funcdef($8); //@line 3086 "parsermodule.c"
        HEAP[$res]=$9; //@line 3086 "parsermodule.c"
        __label__ = 74; break; //@line 3086 "parsermodule.c"
      case 3: // $bb2
        var $10=HEAP[$tree_addr]; //@line 3089 "parsermodule.c"
        var $11=_validate_with_stmt($10); //@line 3089 "parsermodule.c"
        HEAP[$res]=$11; //@line 3089 "parsermodule.c"
        __label__ = 74; break; //@line 3089 "parsermodule.c"
      case 4: // $bb3
        var $12=HEAP[$tree_addr]; //@line 3092 "parsermodule.c"
        var $13=_validate_class($12); //@line 3092 "parsermodule.c"
        HEAP[$res]=$13; //@line 3092 "parsermodule.c"
        __label__ = 74; break; //@line 3092 "parsermodule.c"
      case 5: // $bb4
        var $14=HEAP[$tree_addr]; //@line 3095 "parsermodule.c"
        var $15=_validate_decorated($14); //@line 3095 "parsermodule.c"
        HEAP[$res]=$15; //@line 3095 "parsermodule.c"
        __label__ = 74; break; //@line 3095 "parsermodule.c"
      case 6: // $bb5
        var $16=HEAP[$tree_addr]; //@line 3102 "parsermodule.c"
        var $17=_validate_stmt($16); //@line 3102 "parsermodule.c"
        HEAP[$res]=$17; //@line 3102 "parsermodule.c"
        __label__ = 74; break; //@line 3102 "parsermodule.c"
      case 7: // $bb6
        var $18=HEAP[$tree_addr]; //@line 3109 "parsermodule.c"
        var $19=_validate_small_stmt($18); //@line 3109 "parsermodule.c"
        HEAP[$res]=$19; //@line 3109 "parsermodule.c"
        __label__ = 74; break; //@line 3109 "parsermodule.c"
      case 8: // $bb7
        var $20=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $21=_validate_numnodes($20, 1, ((__str176)&4294967295)); //@line 3112 "parsermodule.c"
        var $22=((($21))|0)==0; //@line 3112 "parsermodule.c"
        if ($22) { __label__ = 15; break; } else { __label__ = 9; break; } //@line 3112 "parsermodule.c"
      case 9: // $bb8
        var $23=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 3112 "parsermodule.c"
        var $25=HEAP[$24]; //@line 3112 "parsermodule.c"
        var $26=(($25)&4294967295); //@line 3112 "parsermodule.c"
        var $27=(($26)&4294967295); //@line 3112 "parsermodule.c"
        var $28=HEAP[$27]; //@line 3112 "parsermodule.c"
        var $29=reSign(($28), 16, 0)==276; //@line 3112 "parsermodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 3112 "parsermodule.c"
      case 10: // $bb9
        var $30=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $31=(($30+20)&4294967295); //@line 3112 "parsermodule.c"
        var $32=HEAP[$31]; //@line 3112 "parsermodule.c"
        var $33=(($32)&4294967295); //@line 3112 "parsermodule.c"
        var $34=(($33)&4294967295); //@line 3112 "parsermodule.c"
        var $35=HEAP[$34]; //@line 3112 "parsermodule.c"
        var $36=reSign(($35), 16, 0)==277; //@line 3112 "parsermodule.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 3112 "parsermodule.c"
      case 11: // $bb10
        var $37=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $38=(($37+20)&4294967295); //@line 3112 "parsermodule.c"
        var $39=HEAP[$38]; //@line 3112 "parsermodule.c"
        var $40=(($39)&4294967295); //@line 3112 "parsermodule.c"
        var $41=(($40)&4294967295); //@line 3112 "parsermodule.c"
        var $42=HEAP[$41]; //@line 3112 "parsermodule.c"
        var $43=reSign(($42), 16, 0)==279; //@line 3112 "parsermodule.c"
        if ($43) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 3112 "parsermodule.c"
      case 12: // $bb11
        var $44=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $45=(($44+20)&4294967295); //@line 3112 "parsermodule.c"
        var $46=HEAP[$45]; //@line 3112 "parsermodule.c"
        var $47=(($46)&4294967295); //@line 3112 "parsermodule.c"
        var $48=(($47)&4294967295); //@line 3112 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3112 "parsermodule.c"
        var $50=reSign(($49), 16, 0)==278; //@line 3112 "parsermodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 3112 "parsermodule.c"
      case 13: // $bb12
        var $51=HEAP[$tree_addr]; //@line 3112 "parsermodule.c"
        var $52=(($51+20)&4294967295); //@line 3112 "parsermodule.c"
        var $53=HEAP[$52]; //@line 3112 "parsermodule.c"
        var $54=(($53)&4294967295); //@line 3112 "parsermodule.c"
        var $55=(($54)&4294967295); //@line 3112 "parsermodule.c"
        var $56=HEAP[$55]; //@line 3112 "parsermodule.c"
        var $57=reSign(($56), 16, 0)==280; //@line 3112 "parsermodule.c"
        if ($57) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3112 "parsermodule.c"
      case 14: // $bb13
        HEAP[$iftmp_209]=1; //@line 3112 "parsermodule.c"
        __label__ = 16; break; //@line 3112 "parsermodule.c"
      case 15: // $bb14
        HEAP[$iftmp_209]=0; //@line 3112 "parsermodule.c"
        __label__ = 16; break; //@line 3112 "parsermodule.c"
      case 16: // $bb15
        var $58=HEAP[$iftmp_209]; //@line 3112 "parsermodule.c"
        HEAP[$res]=$58; //@line 3112 "parsermodule.c"
        var $59=HEAP[$res]; //@line 3118 "parsermodule.c"
        var $60=((($59))|0)!=0; //@line 3118 "parsermodule.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3118 "parsermodule.c"
      case 17: // $bb16
        var $61=HEAP[$tree_addr]; //@line 3119 "parsermodule.c"
        var $62=(($61+20)&4294967295); //@line 3119 "parsermodule.c"
        var $63=HEAP[$62]; //@line 3119 "parsermodule.c"
        var $64=(($63)&4294967295); //@line 3119 "parsermodule.c"
        HEAP[$next]=$64; //@line 3119 "parsermodule.c"
        __label__ = 20; break; //@line 3119 "parsermodule.c"
      case 18: // $bb17
        var $65=HEAP[$nch]; //@line 3120 "parsermodule.c"
        var $66=((($65))|0)==1; //@line 3120 "parsermodule.c"
        if ($66) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 3120 "parsermodule.c"
      case 19: // $bb18
        _err_string(((__str177)&4294967295)); //@line 3121 "parsermodule.c"
        __label__ = 20; break; //@line 3121 "parsermodule.c"
      case 20: // $bb19
        __label__ = 74; break; //@line 3121 "parsermodule.c"
      case 21: // $bb20
        var $67=HEAP[$tree_addr]; //@line 3124 "parsermodule.c"
        var $68=_validate_yield_stmt($67); //@line 3124 "parsermodule.c"
        HEAP[$res]=$68; //@line 3124 "parsermodule.c"
        __label__ = 74; break; //@line 3124 "parsermodule.c"
      case 22: // $bb21
        var $69=HEAP[$tree_addr]; //@line 3130 "parsermodule.c"
        var $70=_validate_simple_stmt($69); //@line 3130 "parsermodule.c"
        HEAP[$res]=$70; //@line 3130 "parsermodule.c"
        __label__ = 74; break; //@line 3130 "parsermodule.c"
      case 23: // $bb22
        var $71=HEAP[$tree_addr]; //@line 3133 "parsermodule.c"
        var $72=_validate_compound_stmt($71); //@line 3133 "parsermodule.c"
        HEAP[$res]=$72; //@line 3133 "parsermodule.c"
        __label__ = 74; break; //@line 3133 "parsermodule.c"
      case 24: // $bb23
        var $73=HEAP[$tree_addr]; //@line 3139 "parsermodule.c"
        var $74=_validate_expr_stmt($73); //@line 3139 "parsermodule.c"
        HEAP[$res]=$74; //@line 3139 "parsermodule.c"
        __label__ = 74; break; //@line 3139 "parsermodule.c"
      case 25: // $bb24
        var $75=HEAP[$tree_addr]; //@line 3142 "parsermodule.c"
        var $76=_validate_print_stmt($75); //@line 3142 "parsermodule.c"
        HEAP[$res]=$76; //@line 3142 "parsermodule.c"
        __label__ = 74; break; //@line 3142 "parsermodule.c"
      case 26: // $bb25
        var $77=HEAP[$tree_addr]; //@line 3145 "parsermodule.c"
        var $78=_validate_del_stmt($77); //@line 3145 "parsermodule.c"
        HEAP[$res]=$78; //@line 3145 "parsermodule.c"
        __label__ = 74; break; //@line 3145 "parsermodule.c"
      case 27: // $bb26
        var $79=HEAP[$tree_addr]; //@line 3148 "parsermodule.c"
        var $80=_validate_numnodes($79, 1, ((__str178)&4294967295)); //@line 3148 "parsermodule.c"
        var $81=((($80))|0)==0; //@line 3148 "parsermodule.c"
        if ($81) { __label__ = 30; break; } else { __label__ = 28; break; } //@line 3148 "parsermodule.c"
      case 28: // $bb27
        var $82=HEAP[$tree_addr]; //@line 3148 "parsermodule.c"
        var $83=(($82+20)&4294967295); //@line 3148 "parsermodule.c"
        var $84=HEAP[$83]; //@line 3148 "parsermodule.c"
        var $85=(($84)&4294967295); //@line 3148 "parsermodule.c"
        var $86=_validate_terminal($85, 1, ((__str178)&4294967295)); //@line 3148 "parsermodule.c"
        var $87=((($86))|0)==0; //@line 3148 "parsermodule.c"
        if ($87) { __label__ = 30; break; } else { __label__ = 29; break; } //@line 3148 "parsermodule.c"
      case 29: // $bb28
        HEAP[$iftmp_210]=1; //@line 3148 "parsermodule.c"
        __label__ = 31; break; //@line 3148 "parsermodule.c"
      case 30: // $bb29
        HEAP[$iftmp_210]=0; //@line 3148 "parsermodule.c"
        __label__ = 31; break; //@line 3148 "parsermodule.c"
      case 31: // $bb30
        var $88=HEAP[$iftmp_210]; //@line 3148 "parsermodule.c"
        HEAP[$res]=$88; //@line 3148 "parsermodule.c"
        __label__ = 74; break; //@line 3148 "parsermodule.c"
      case 32: // $bb31
        var $89=HEAP[$tree_addr]; //@line 3152 "parsermodule.c"
        var $90=_validate_numnodes($89, 1, ((__str179)&4294967295)); //@line 3152 "parsermodule.c"
        var $91=((($90))|0)==0; //@line 3152 "parsermodule.c"
        if ($91) { __label__ = 35; break; } else { __label__ = 33; break; } //@line 3152 "parsermodule.c"
      case 33: // $bb32
        var $92=HEAP[$tree_addr]; //@line 3152 "parsermodule.c"
        var $93=(($92+20)&4294967295); //@line 3152 "parsermodule.c"
        var $94=HEAP[$93]; //@line 3152 "parsermodule.c"
        var $95=(($94)&4294967295); //@line 3152 "parsermodule.c"
        var $96=_validate_terminal($95, 1, ((__str179)&4294967295)); //@line 3152 "parsermodule.c"
        var $97=((($96))|0)==0; //@line 3152 "parsermodule.c"
        if ($97) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 3152 "parsermodule.c"
      case 34: // $bb33
        HEAP[$iftmp_211]=1; //@line 3152 "parsermodule.c"
        __label__ = 36; break; //@line 3152 "parsermodule.c"
      case 35: // $bb34
        HEAP[$iftmp_211]=0; //@line 3152 "parsermodule.c"
        __label__ = 36; break; //@line 3152 "parsermodule.c"
      case 36: // $bb35
        var $98=HEAP[$iftmp_211]; //@line 3152 "parsermodule.c"
        HEAP[$res]=$98; //@line 3152 "parsermodule.c"
        __label__ = 74; break; //@line 3152 "parsermodule.c"
      case 37: // $bb36
        var $99=HEAP[$tree_addr]; //@line 3156 "parsermodule.c"
        var $100=_validate_numnodes($99, 1, ((__str180)&4294967295)); //@line 3156 "parsermodule.c"
        var $101=((($100))|0)==0; //@line 3156 "parsermodule.c"
        if ($101) { __label__ = 40; break; } else { __label__ = 38; break; } //@line 3156 "parsermodule.c"
      case 38: // $bb37
        var $102=HEAP[$tree_addr]; //@line 3156 "parsermodule.c"
        var $103=(($102+20)&4294967295); //@line 3156 "parsermodule.c"
        var $104=HEAP[$103]; //@line 3156 "parsermodule.c"
        var $105=(($104)&4294967295); //@line 3156 "parsermodule.c"
        var $106=_validate_terminal($105, 1, ((__str180)&4294967295)); //@line 3156 "parsermodule.c"
        var $107=((($106))|0)==0; //@line 3156 "parsermodule.c"
        if ($107) { __label__ = 40; break; } else { __label__ = 39; break; } //@line 3156 "parsermodule.c"
      case 39: // $bb38
        HEAP[$iftmp_212]=1; //@line 3156 "parsermodule.c"
        __label__ = 41; break; //@line 3156 "parsermodule.c"
      case 40: // $bb39
        HEAP[$iftmp_212]=0; //@line 3156 "parsermodule.c"
        __label__ = 41; break; //@line 3156 "parsermodule.c"
      case 41: // $bb40
        var $108=HEAP[$iftmp_212]; //@line 3156 "parsermodule.c"
        HEAP[$res]=$108; //@line 3156 "parsermodule.c"
        __label__ = 74; break; //@line 3156 "parsermodule.c"
      case 42: // $bb41
        var $109=HEAP[$tree_addr]; //@line 3160 "parsermodule.c"
        var $110=_validate_return_stmt($109); //@line 3160 "parsermodule.c"
        HEAP[$res]=$110; //@line 3160 "parsermodule.c"
        __label__ = 74; break; //@line 3160 "parsermodule.c"
      case 43: // $bb42
        var $111=HEAP[$tree_addr]; //@line 3163 "parsermodule.c"
        var $112=_validate_raise_stmt($111); //@line 3163 "parsermodule.c"
        HEAP[$res]=$112; //@line 3163 "parsermodule.c"
        __label__ = 74; break; //@line 3163 "parsermodule.c"
      case 44: // $bb43
        var $113=HEAP[$tree_addr]; //@line 3166 "parsermodule.c"
        var $114=_validate_import_stmt($113); //@line 3166 "parsermodule.c"
        HEAP[$res]=$114; //@line 3166 "parsermodule.c"
        __label__ = 74; break; //@line 3166 "parsermodule.c"
      case 45: // $bb44
        var $115=HEAP[$tree_addr]; //@line 3169 "parsermodule.c"
        var $116=_validate_import_name($115); //@line 3169 "parsermodule.c"
        HEAP[$res]=$116; //@line 3169 "parsermodule.c"
        __label__ = 74; break; //@line 3169 "parsermodule.c"
      case 46: // $bb45
        var $117=HEAP[$tree_addr]; //@line 3172 "parsermodule.c"
        var $118=_validate_import_from($117); //@line 3172 "parsermodule.c"
        HEAP[$res]=$118; //@line 3172 "parsermodule.c"
        __label__ = 74; break; //@line 3172 "parsermodule.c"
      case 47: // $bb46
        var $119=HEAP[$tree_addr]; //@line 3175 "parsermodule.c"
        var $120=_validate_global_stmt($119); //@line 3175 "parsermodule.c"
        HEAP[$res]=$120; //@line 3175 "parsermodule.c"
        __label__ = 74; break; //@line 3175 "parsermodule.c"
      case 48: // $bb47
        var $121=HEAP[$tree_addr]; //@line 3178 "parsermodule.c"
        var $122=_validate_exec_stmt($121); //@line 3178 "parsermodule.c"
        HEAP[$res]=$122; //@line 3178 "parsermodule.c"
        __label__ = 74; break; //@line 3178 "parsermodule.c"
      case 49: // $bb48
        var $123=HEAP[$tree_addr]; //@line 3181 "parsermodule.c"
        var $124=_validate_assert_stmt($123); //@line 3181 "parsermodule.c"
        HEAP[$res]=$124; //@line 3181 "parsermodule.c"
        __label__ = 74; break; //@line 3181 "parsermodule.c"
      case 50: // $bb49
        var $125=HEAP[$tree_addr]; //@line 3184 "parsermodule.c"
        var $126=_validate_if($125); //@line 3184 "parsermodule.c"
        HEAP[$res]=$126; //@line 3184 "parsermodule.c"
        __label__ = 74; break; //@line 3184 "parsermodule.c"
      case 51: // $bb50
        var $127=HEAP[$tree_addr]; //@line 3187 "parsermodule.c"
        var $128=_validate_while($127); //@line 3187 "parsermodule.c"
        HEAP[$res]=$128; //@line 3187 "parsermodule.c"
        __label__ = 74; break; //@line 3187 "parsermodule.c"
      case 52: // $bb51
        var $129=HEAP[$tree_addr]; //@line 3190 "parsermodule.c"
        var $130=_validate_for($129); //@line 3190 "parsermodule.c"
        HEAP[$res]=$130; //@line 3190 "parsermodule.c"
        __label__ = 74; break; //@line 3190 "parsermodule.c"
      case 53: // $bb52
        var $131=HEAP[$tree_addr]; //@line 3193 "parsermodule.c"
        var $132=_validate_try($131); //@line 3193 "parsermodule.c"
        HEAP[$res]=$132; //@line 3193 "parsermodule.c"
        __label__ = 74; break; //@line 3193 "parsermodule.c"
      case 54: // $bb53
        var $133=HEAP[$tree_addr]; //@line 3196 "parsermodule.c"
        var $134=_validate_suite($133); //@line 3196 "parsermodule.c"
        HEAP[$res]=$134; //@line 3196 "parsermodule.c"
        __label__ = 74; break; //@line 3196 "parsermodule.c"
      case 55: // $bb54
        var $135=HEAP[$tree_addr]; //@line 3202 "parsermodule.c"
        var $136=_validate_testlist($135); //@line 3202 "parsermodule.c"
        HEAP[$res]=$136; //@line 3202 "parsermodule.c"
        __label__ = 74; break; //@line 3202 "parsermodule.c"
      case 56: // $bb55
        var $137=HEAP[$tree_addr]; //@line 3205 "parsermodule.c"
        var $138=_validate_yield_expr($137); //@line 3205 "parsermodule.c"
        HEAP[$res]=$138; //@line 3205 "parsermodule.c"
        __label__ = 74; break; //@line 3205 "parsermodule.c"
      case 57: // $bb56
        var $139=HEAP[$tree_addr]; //@line 3208 "parsermodule.c"
        var $140=_validate_testlist1($139); //@line 3208 "parsermodule.c"
        HEAP[$res]=$140; //@line 3208 "parsermodule.c"
        __label__ = 74; break; //@line 3208 "parsermodule.c"
      case 58: // $bb57
        var $141=HEAP[$tree_addr]; //@line 3211 "parsermodule.c"
        var $142=_validate_test($141); //@line 3211 "parsermodule.c"
        HEAP[$res]=$142; //@line 3211 "parsermodule.c"
        __label__ = 74; break; //@line 3211 "parsermodule.c"
      case 59: // $bb58
        var $143=HEAP[$tree_addr]; //@line 3214 "parsermodule.c"
        var $144=_validate_and_test($143); //@line 3214 "parsermodule.c"
        HEAP[$res]=$144; //@line 3214 "parsermodule.c"
        __label__ = 74; break; //@line 3214 "parsermodule.c"
      case 60: // $bb59
        var $145=HEAP[$tree_addr]; //@line 3217 "parsermodule.c"
        var $146=_validate_not_test($145); //@line 3217 "parsermodule.c"
        HEAP[$res]=$146; //@line 3217 "parsermodule.c"
        __label__ = 74; break; //@line 3217 "parsermodule.c"
      case 61: // $bb60
        var $147=HEAP[$tree_addr]; //@line 3220 "parsermodule.c"
        var $148=_validate_comparison($147); //@line 3220 "parsermodule.c"
        HEAP[$res]=$148; //@line 3220 "parsermodule.c"
        __label__ = 74; break; //@line 3220 "parsermodule.c"
      case 62: // $bb61
        var $149=HEAP[$tree_addr]; //@line 3223 "parsermodule.c"
        var $150=_validate_exprlist($149); //@line 3223 "parsermodule.c"
        HEAP[$res]=$150; //@line 3223 "parsermodule.c"
        __label__ = 74; break; //@line 3223 "parsermodule.c"
      case 63: // $bb62
        var $151=HEAP[$tree_addr]; //@line 3226 "parsermodule.c"
        var $152=_validate_comp_op($151); //@line 3226 "parsermodule.c"
        HEAP[$res]=$152; //@line 3226 "parsermodule.c"
        __label__ = 74; break; //@line 3226 "parsermodule.c"
      case 64: // $bb63
        var $153=HEAP[$tree_addr]; //@line 3229 "parsermodule.c"
        var $154=_validate_expr($153); //@line 3229 "parsermodule.c"
        HEAP[$res]=$154; //@line 3229 "parsermodule.c"
        __label__ = 74; break; //@line 3229 "parsermodule.c"
      case 65: // $bb64
        var $155=HEAP[$tree_addr]; //@line 3232 "parsermodule.c"
        var $156=_validate_xor_expr($155); //@line 3232 "parsermodule.c"
        HEAP[$res]=$156; //@line 3232 "parsermodule.c"
        __label__ = 74; break; //@line 3232 "parsermodule.c"
      case 66: // $bb65
        var $157=HEAP[$tree_addr]; //@line 3235 "parsermodule.c"
        var $158=_validate_and_expr($157); //@line 3235 "parsermodule.c"
        HEAP[$res]=$158; //@line 3235 "parsermodule.c"
        __label__ = 74; break; //@line 3235 "parsermodule.c"
      case 67: // $bb66
        var $159=HEAP[$tree_addr]; //@line 3238 "parsermodule.c"
        var $160=_validate_shift_expr($159); //@line 3238 "parsermodule.c"
        HEAP[$res]=$160; //@line 3238 "parsermodule.c"
        __label__ = 74; break; //@line 3238 "parsermodule.c"
      case 68: // $bb67
        var $161=HEAP[$tree_addr]; //@line 3241 "parsermodule.c"
        var $162=_validate_arith_expr($161); //@line 3241 "parsermodule.c"
        HEAP[$res]=$162; //@line 3241 "parsermodule.c"
        __label__ = 74; break; //@line 3241 "parsermodule.c"
      case 69: // $bb68
        var $163=HEAP[$tree_addr]; //@line 3244 "parsermodule.c"
        var $164=_validate_term($163); //@line 3244 "parsermodule.c"
        HEAP[$res]=$164; //@line 3244 "parsermodule.c"
        __label__ = 74; break; //@line 3244 "parsermodule.c"
      case 70: // $bb69
        var $165=HEAP[$tree_addr]; //@line 3247 "parsermodule.c"
        var $166=_validate_factor($165); //@line 3247 "parsermodule.c"
        HEAP[$res]=$166; //@line 3247 "parsermodule.c"
        __label__ = 74; break; //@line 3247 "parsermodule.c"
      case 71: // $bb70
        var $167=HEAP[$tree_addr]; //@line 3250 "parsermodule.c"
        var $168=_validate_power($167); //@line 3250 "parsermodule.c"
        HEAP[$res]=$168; //@line 3250 "parsermodule.c"
        __label__ = 74; break; //@line 3250 "parsermodule.c"
      case 72: // $bb71
        var $169=HEAP[$tree_addr]; //@line 3253 "parsermodule.c"
        var $170=_validate_atom($169); //@line 3253 "parsermodule.c"
        HEAP[$res]=$170; //@line 3253 "parsermodule.c"
        __label__ = 74; break; //@line 3253 "parsermodule.c"
      case 73: // $bb72
        _err_string(((__str181)&4294967295)); //@line 3258 "parsermodule.c"
        HEAP[$res]=0; //@line 3259 "parsermodule.c"
        __label__ = 74; break; //@line 3259 "parsermodule.c"
      case 74: // $bb73
        var $171=HEAP[$next]; //@line 3262 "parsermodule.c"
        HEAP[$tree_addr]=$171; //@line 3262 "parsermodule.c"
        __label__ = 75; break; //@line 3262 "parsermodule.c"
      case 75: // $bb74
        var $172=HEAP[$res]; //@line 3078 "parsermodule.c"
        var $173=((($172))|0)==0; //@line 3078 "parsermodule.c"
        if ($173) { __label__ = 77; break; } else { __label__ = 76; break; } //@line 3078 "parsermodule.c"
      case 76: // $bb75
        var $174=HEAP[$tree_addr]; //@line 3078 "parsermodule.c"
        var $175=($174)!=0; //@line 3078 "parsermodule.c"
        if ($175) { __label__ = 1; break; } else { __label__ = 77; break; } //@line 3078 "parsermodule.c"
      case 77: // $bb76
        var $176=HEAP[$res]; //@line 3264 "parsermodule.c"
        HEAP[$0]=$176; //@line 3264 "parsermodule.c"
        var $177=HEAP[$0]; //@line 3264 "parsermodule.c"
        HEAP[$retval]=$177; //@line 3264 "parsermodule.c"
        __label__ = 78; break; //@line 3264 "parsermodule.c"
      case 78: // $return
        var $retval77=HEAP[$retval]; //@line 3264 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval77; //@line 3264 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr_tree($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 3271 "parsermodule.c"
        var $2=_validate_eval_input($1); //@line 3271 "parsermodule.c"
        HEAP[$res]=$2; //@line 3271 "parsermodule.c"
        var $3=HEAP[$res]; //@line 3273 "parsermodule.c"
        var $4=((($3))|0)==0; //@line 3273 "parsermodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 3273 "parsermodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 3273 "parsermodule.c"
        var $6=($5)==0; //@line 3273 "parsermodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3273 "parsermodule.c"
      case 2: // $bb1
        _err_string(((__str182)&4294967295)); //@line 3274 "parsermodule.c"
        __label__ = 3; break; //@line 3274 "parsermodule.c"
      case 3: // $bb2
        var $7=HEAP[$res]; //@line 3276 "parsermodule.c"
        HEAP[$0]=$7; //@line 3276 "parsermodule.c"
        var $8=HEAP[$0]; //@line 3276 "parsermodule.c"
        HEAP[$retval]=$8; //@line 3276 "parsermodule.c"
        __label__ = 4; break; //@line 3276 "parsermodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 3276 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 3276 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_file_input($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_213=__stackBase__+12;
        var $j=__stackBase__+16;
        var $nch=__stackBase__+20;
        var $res=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 3287 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 3287 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3287 "parsermodule.c"
        var $4=((($3) - 1)&4294967295); //@line 3287 "parsermodule.c"
        HEAP[$nch]=$4; //@line 3287 "parsermodule.c"
        var $5=HEAP[$nch]; //@line 3289 "parsermodule.c"
        var $6=((($5))|0) < 0; //@line 3289 "parsermodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 3289 "parsermodule.c"
      case 1: // $bb
        var $7=HEAP[$tree_addr]; //@line 3289 "parsermodule.c"
        var $8=(($7+20)&4294967295); //@line 3289 "parsermodule.c"
        var $9=HEAP[$8]; //@line 3289 "parsermodule.c"
        var $10=HEAP[$nch]; //@line 3289 "parsermodule.c"
        var $11=(($9+24*$10)&4294967295); //@line 3289 "parsermodule.c"
        var $12=_validate_ntype($11, 0); //@line 3289 "parsermodule.c"
        var $13=((($12))|0)==0; //@line 3289 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3289 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_213]=1; //@line 3289 "parsermodule.c"
        __label__ = 4; break; //@line 3289 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_213]=0; //@line 3289 "parsermodule.c"
        __label__ = 4; break; //@line 3289 "parsermodule.c"
      case 4: // $bb3
        var $14=HEAP[$iftmp_213]; //@line 3289 "parsermodule.c"
        HEAP[$res]=$14; //@line 3289 "parsermodule.c"
        HEAP[$j]=0; //@line 3291 "parsermodule.c"
        __label__ = 9; break; //@line 3291 "parsermodule.c"
      case 5: // $bb4
        var $15=HEAP[$tree_addr]; //@line 3292 "parsermodule.c"
        var $16=(($15+20)&4294967295); //@line 3292 "parsermodule.c"
        var $17=HEAP[$16]; //@line 3292 "parsermodule.c"
        var $18=HEAP[$j]; //@line 3292 "parsermodule.c"
        var $19=(($17+24*$18)&4294967295); //@line 3292 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 3292 "parsermodule.c"
        var $21=HEAP[$20]; //@line 3292 "parsermodule.c"
        var $22=reSign(($21), 16, 0)==267; //@line 3292 "parsermodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3292 "parsermodule.c"
      case 6: // $bb5
        var $23=HEAP[$tree_addr]; //@line 3293 "parsermodule.c"
        var $24=(($23+20)&4294967295); //@line 3293 "parsermodule.c"
        var $25=HEAP[$24]; //@line 3293 "parsermodule.c"
        var $26=HEAP[$j]; //@line 3293 "parsermodule.c"
        var $27=(($25+24*$26)&4294967295); //@line 3293 "parsermodule.c"
        var $28=_validate_stmt($27); //@line 3293 "parsermodule.c"
        HEAP[$res]=$28; //@line 3293 "parsermodule.c"
        __label__ = 8; break; //@line 3293 "parsermodule.c"
      case 7: // $bb6
        var $29=HEAP[$tree_addr]; //@line 3295 "parsermodule.c"
        var $30=(($29+20)&4294967295); //@line 3295 "parsermodule.c"
        var $31=HEAP[$30]; //@line 3295 "parsermodule.c"
        var $32=HEAP[$j]; //@line 3295 "parsermodule.c"
        var $33=(($31+24*$32)&4294967295); //@line 3295 "parsermodule.c"
        var $34=_validate_terminal($33, 4, 0); //@line 3295 "parsermodule.c"
        HEAP[$res]=$34; //@line 3295 "parsermodule.c"
        __label__ = 8; break; //@line 3295 "parsermodule.c"
      case 8: // $bb7
        var $35=HEAP[$j]; //@line 3291 "parsermodule.c"
        var $36=((($35) + 1)&4294967295); //@line 3291 "parsermodule.c"
        HEAP[$j]=$36; //@line 3291 "parsermodule.c"
        __label__ = 9; break; //@line 3291 "parsermodule.c"
      case 9: // $bb8
        var $37=HEAP[$res]; //@line 3291 "parsermodule.c"
        var $38=((($37))|0)==0; //@line 3291 "parsermodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 3291 "parsermodule.c"
      case 10: // $bb9
        var $39=HEAP[$j]; //@line 3291 "parsermodule.c"
        var $40=HEAP[$nch]; //@line 3291 "parsermodule.c"
        var $41=((($39))|0) < ((($40))|0); //@line 3291 "parsermodule.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 3291 "parsermodule.c"
      case 11: // $bb10
        var $42=HEAP[$res]; //@line 3301 "parsermodule.c"
        var $43=((($42))|0)==0; //@line 3301 "parsermodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 3301 "parsermodule.c"
      case 12: // $bb11
        var $44=_PyErr_Occurred(); //@line 3301 "parsermodule.c"
        var $45=($44)==0; //@line 3301 "parsermodule.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3301 "parsermodule.c"
      case 13: // $bb12
        _err_string(((__str183)&4294967295)); //@line 3302 "parsermodule.c"
        __label__ = 14; break; //@line 3302 "parsermodule.c"
      case 14: // $bb13
        var $46=HEAP[$res]; //@line 3304 "parsermodule.c"
        HEAP[$0]=$46; //@line 3304 "parsermodule.c"
        var $47=HEAP[$0]; //@line 3304 "parsermodule.c"
        HEAP[$retval]=$47; //@line 3304 "parsermodule.c"
        __label__ = 15; break; //@line 3304 "parsermodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 3304 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 3304 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_encoding_decl($tree) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_214=__stackBase__+12;
        var $nch=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$tree_addr]=$tree;
        var $1=HEAP[$tree_addr]; //@line 3310 "parsermodule.c"
        var $2=(($1+16)&4294967295); //@line 3310 "parsermodule.c"
        var $3=HEAP[$2]; //@line 3310 "parsermodule.c"
        HEAP[$nch]=$3; //@line 3310 "parsermodule.c"
        var $4=HEAP[$nch]; //@line 3312 "parsermodule.c"
        var $5=((($4))|0)!=1; //@line 3312 "parsermodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 3312 "parsermodule.c"
      case 1: // $bb
        var $6=HEAP[$tree_addr]; //@line 3312 "parsermodule.c"
        var $7=(($6+20)&4294967295); //@line 3312 "parsermodule.c"
        var $8=HEAP[$7]; //@line 3312 "parsermodule.c"
        var $9=(($8)&4294967295); //@line 3312 "parsermodule.c"
        var $10=_validate_file_input($9); //@line 3312 "parsermodule.c"
        var $11=((($10))|0)==0; //@line 3312 "parsermodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 3312 "parsermodule.c"
      case 2: // $bb1
        HEAP[$iftmp_214]=1; //@line 3312 "parsermodule.c"
        __label__ = 4; break; //@line 3312 "parsermodule.c"
      case 3: // $bb2
        HEAP[$iftmp_214]=0; //@line 3312 "parsermodule.c"
        __label__ = 4; break; //@line 3312 "parsermodule.c"
      case 4: // $bb3
        var $12=HEAP[$iftmp_214]; //@line 3312 "parsermodule.c"
        HEAP[$res]=$12; //@line 3312 "parsermodule.c"
        var $13=HEAP[$res]; //@line 3314 "parsermodule.c"
        var $14=((($13))|0)==0; //@line 3314 "parsermodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 3314 "parsermodule.c"
      case 5: // $bb4
        var $15=_PyErr_Occurred(); //@line 3314 "parsermodule.c"
        var $16=($15)==0; //@line 3314 "parsermodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3314 "parsermodule.c"
      case 6: // $bb5
        _err_string(((__str184)&4294967295)); //@line 3315 "parsermodule.c"
        __label__ = 7; break; //@line 3315 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$res]; //@line 3317 "parsermodule.c"
        HEAP[$0]=$17; //@line 3317 "parsermodule.c"
        var $18=HEAP[$0]; //@line 3317 "parsermodule.c"
        HEAP[$retval]=$18; //@line 3317 "parsermodule.c"
        __label__ = 8; break; //@line 3317 "parsermodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 3317 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 3317 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser__pickler($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $st=__stackBase__+20;
        var $empty_dict=__stackBase__+24;
        var $newargs=__stackBase__+28;
        var $tuple=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 3328 "parsermodule.c"
        HEAP[$st]=0; //@line 3329 "parsermodule.c"
        HEAP[$empty_dict]=0; //@line 3330 "parsermodule.c"
        var $1=HEAP[$args_addr]; //@line 3332 "parsermodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str185)&4294967295), _PyST_Type, $st); //@line 3332 "parsermodule.c"
        var $3=((($2))|0)!=0; //@line 3332 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 3332 "parsermodule.c"
      case 1: // $bb
        var $4=_PyDict_New(); //@line 3336 "parsermodule.c"
        HEAP[$empty_dict]=$4; //@line 3336 "parsermodule.c"
        var $5=HEAP[$empty_dict]; //@line 3336 "parsermodule.c"
        var $6=($5)==0; //@line 3336 "parsermodule.c"
        if ($6) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 3336 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$st]; //@line 3338 "parsermodule.c"
        var $8=_Py_BuildValue(((__str186)&4294967295), $7, 1); //@line 3338 "parsermodule.c"
        HEAP[$newargs]=$8; //@line 3338 "parsermodule.c"
        var $9=HEAP[$newargs]; //@line 3338 "parsermodule.c"
        var $10=($9)==0; //@line 3338 "parsermodule.c"
        if ($10) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 3338 "parsermodule.c"
      case 3: // $bb2
        var $11=HEAP[$newargs]; //@line 3340 "parsermodule.c"
        var $12=HEAP[$empty_dict]; //@line 3340 "parsermodule.c"
        var $13=_parser_st2tuple(0, $11, $12); //@line 3340 "parsermodule.c"
        HEAP[$tuple]=$13; //@line 3340 "parsermodule.c"
        var $14=HEAP[$tuple]; //@line 3341 "parsermodule.c"
        var $15=($14)!=0; //@line 3341 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3341 "parsermodule.c"
      case 4: // $bb3
        var $16=HEAP[_pickle_constructor]; //@line 3342 "parsermodule.c"
        var $17=HEAP[$tuple]; //@line 3342 "parsermodule.c"
        var $18=_Py_BuildValue(((__str187)&4294967295), $16, $17); //@line 3342 "parsermodule.c"
        HEAP[$result]=$18; //@line 3342 "parsermodule.c"
        var $19=HEAP[$tuple]; //@line 3343 "parsermodule.c"
        var $20=(($19)&4294967295); //@line 3343 "parsermodule.c"
        var $21=HEAP[$20]; //@line 3343 "parsermodule.c"
        var $22=((($21) - 1)&4294967295); //@line 3343 "parsermodule.c"
        var $23=HEAP[$tuple]; //@line 3343 "parsermodule.c"
        var $24=(($23)&4294967295); //@line 3343 "parsermodule.c"
        HEAP[$24]=$22; //@line 3343 "parsermodule.c"
        var $25=HEAP[$tuple]; //@line 3343 "parsermodule.c"
        var $26=(($25)&4294967295); //@line 3343 "parsermodule.c"
        var $27=HEAP[$26]; //@line 3343 "parsermodule.c"
        var $28=((($27))|0)==0; //@line 3343 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3343 "parsermodule.c"
      case 5: // $bb4
        var $29=HEAP[$tuple]; //@line 3343 "parsermodule.c"
        var $30=(($29+4)&4294967295); //@line 3343 "parsermodule.c"
        var $31=HEAP[$30]; //@line 3343 "parsermodule.c"
        var $32=(($31+24)&4294967295); //@line 3343 "parsermodule.c"
        var $33=HEAP[$32]; //@line 3343 "parsermodule.c"
        var $34=HEAP[$tuple]; //@line 3343 "parsermodule.c"
        FUNCTION_TABLE[$33]($34); //@line 3343 "parsermodule.c"
        __label__ = 6; break; //@line 3343 "parsermodule.c"
      case 6: // $bb5
        var $35=HEAP[$empty_dict]; //@line 3345 "parsermodule.c"
        var $36=(($35)&4294967295); //@line 3345 "parsermodule.c"
        var $37=HEAP[$36]; //@line 3345 "parsermodule.c"
        var $38=((($37) - 1)&4294967295); //@line 3345 "parsermodule.c"
        var $39=HEAP[$empty_dict]; //@line 3345 "parsermodule.c"
        var $40=(($39)&4294967295); //@line 3345 "parsermodule.c"
        HEAP[$40]=$38; //@line 3345 "parsermodule.c"
        var $41=HEAP[$empty_dict]; //@line 3345 "parsermodule.c"
        var $42=(($41)&4294967295); //@line 3345 "parsermodule.c"
        var $43=HEAP[$42]; //@line 3345 "parsermodule.c"
        var $44=((($43))|0)==0; //@line 3345 "parsermodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3345 "parsermodule.c"
      case 7: // $bb6
        var $45=HEAP[$empty_dict]; //@line 3345 "parsermodule.c"
        var $46=(($45+4)&4294967295); //@line 3345 "parsermodule.c"
        var $47=HEAP[$46]; //@line 3345 "parsermodule.c"
        var $48=(($47+24)&4294967295); //@line 3345 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3345 "parsermodule.c"
        var $50=HEAP[$empty_dict]; //@line 3345 "parsermodule.c"
        FUNCTION_TABLE[$49]($50); //@line 3345 "parsermodule.c"
        __label__ = 8; break; //@line 3345 "parsermodule.c"
      case 8: // $bb7
        var $51=HEAP[$newargs]; //@line 3346 "parsermodule.c"
        var $52=(($51)&4294967295); //@line 3346 "parsermodule.c"
        var $53=HEAP[$52]; //@line 3346 "parsermodule.c"
        var $54=((($53) - 1)&4294967295); //@line 3346 "parsermodule.c"
        var $55=HEAP[$newargs]; //@line 3346 "parsermodule.c"
        var $56=(($55)&4294967295); //@line 3346 "parsermodule.c"
        HEAP[$56]=$54; //@line 3346 "parsermodule.c"
        var $57=HEAP[$newargs]; //@line 3346 "parsermodule.c"
        var $58=(($57)&4294967295); //@line 3346 "parsermodule.c"
        var $59=HEAP[$58]; //@line 3346 "parsermodule.c"
        var $60=((($59))|0)==0; //@line 3346 "parsermodule.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3346 "parsermodule.c"
      case 9: // $bb8
        var $61=HEAP[$newargs]; //@line 3346 "parsermodule.c"
        var $62=(($61+4)&4294967295); //@line 3346 "parsermodule.c"
        var $63=HEAP[$62]; //@line 3346 "parsermodule.c"
        var $64=(($63+24)&4294967295); //@line 3346 "parsermodule.c"
        var $65=HEAP[$64]; //@line 3346 "parsermodule.c"
        var $66=HEAP[$newargs]; //@line 3346 "parsermodule.c"
        FUNCTION_TABLE[$65]($66); //@line 3346 "parsermodule.c"
        __label__ = 10; break; //@line 3348 "parsermodule.c"
      case 10: // $finally
        var $67=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        var $68=($67)!=0; //@line 3349 "parsermodule.c"
        if ($68) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 11: // $bb9
        var $69=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        var $70=(($69)&4294967295); //@line 3349 "parsermodule.c"
        var $71=HEAP[$70]; //@line 3349 "parsermodule.c"
        var $72=((($71) - 1)&4294967295); //@line 3349 "parsermodule.c"
        var $73=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        var $74=(($73)&4294967295); //@line 3349 "parsermodule.c"
        HEAP[$74]=$72; //@line 3349 "parsermodule.c"
        var $75=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        var $76=(($75)&4294967295); //@line 3349 "parsermodule.c"
        var $77=HEAP[$76]; //@line 3349 "parsermodule.c"
        var $78=((($77))|0)==0; //@line 3349 "parsermodule.c"
        if ($78) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 12: // $bb10
        var $79=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        var $80=(($79+4)&4294967295); //@line 3349 "parsermodule.c"
        var $81=HEAP[$80]; //@line 3349 "parsermodule.c"
        var $82=(($81+24)&4294967295); //@line 3349 "parsermodule.c"
        var $83=HEAP[$82]; //@line 3349 "parsermodule.c"
        var $84=HEAP[$empty_dict]; //@line 3349 "parsermodule.c"
        FUNCTION_TABLE[$83]($84); //@line 3349 "parsermodule.c"
        __label__ = 13; break; //@line 3349 "parsermodule.c"
      case 13: // $bb11
        var $85=HEAP[$result]; //@line 3351 "parsermodule.c"
        HEAP[$0]=$85; //@line 3351 "parsermodule.c"
        var $86=HEAP[$0]; //@line 3351 "parsermodule.c"
        HEAP[$retval]=$86; //@line 3351 "parsermodule.c"
        __label__ = 14; break; //@line 3351 "parsermodule.c"
      case 14: // $return
        var $retval12=HEAP[$retval]; //@line 3351 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3351 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initparser() {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module=__stackBase__;
        var $copyreg=__stackBase__+4;
        var $func=__stackBase__+8;
        var $pickler=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        var $0=((_PyST_Type+4)&4294967295); //@line 3406 "parsermodule.c"
        HEAP[$0]=_PyType_Type; //@line 3406 "parsermodule.c"
        var $1=_Py_InitModule4(((__str209)&4294967295), ((_parser_functions)&4294967295), 0, 0, 1013); //@line 3407 "parsermodule.c"
        HEAP[$module]=$1; //@line 3407 "parsermodule.c"
        var $2=HEAP[$module]; //@line 3408 "parsermodule.c"
        var $3=($2)==0; //@line 3408 "parsermodule.c"
        if ($3) { __label__ = 25; break; } else { __label__ = 1; break; } //@line 3408 "parsermodule.c"
      case 1: // $bb
        var $4=HEAP[_parser_error]; //@line 3411 "parsermodule.c"
        var $5=($4)==0; //@line 3411 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3411 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyErr_NewException(((__str210)&4294967295), 0, 0); //@line 3412 "parsermodule.c"
        HEAP[_parser_error]=$6; //@line 3412 "parsermodule.c"
        __label__ = 3; break; //@line 3412 "parsermodule.c"
      case 3: // $bb2
        var $7=HEAP[_parser_error]; //@line 3414 "parsermodule.c"
        var $8=($7)==0; //@line 3414 "parsermodule.c"
        if ($8) { __label__ = 25; break; } else { __label__ = 4; break; } //@line 3414 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[_parser_error]; //@line 3423 "parsermodule.c"
        var $10=(($9)&4294967295); //@line 3423 "parsermodule.c"
        var $11=HEAP[$10]; //@line 3423 "parsermodule.c"
        var $12=((($11) + 1)&4294967295); //@line 3423 "parsermodule.c"
        var $13=(($9)&4294967295); //@line 3423 "parsermodule.c"
        HEAP[$13]=$12; //@line 3423 "parsermodule.c"
        var $14=HEAP[_parser_error]; //@line 3424 "parsermodule.c"
        var $15=HEAP[$module]; //@line 3424 "parsermodule.c"
        var $16=_PyModule_AddObject($15, ((__str211)&4294967295), $14); //@line 3424 "parsermodule.c"
        var $17=((($16))|0)!=0; //@line 3424 "parsermodule.c"
        if ($17) { __label__ = 25; break; } else { __label__ = 5; break; } //@line 3424 "parsermodule.c"
      case 5: // $bb4
        var $18=((_PyST_Type)&4294967295); //@line 3427 "parsermodule.c"
        var $19=HEAP[$18]; //@line 3427 "parsermodule.c"
        var $20=((($19) + 1)&4294967295); //@line 3427 "parsermodule.c"
        var $21=((_PyST_Type)&4294967295); //@line 3427 "parsermodule.c"
        HEAP[$21]=$20; //@line 3427 "parsermodule.c"
        var $22=HEAP[$module]; //@line 3428 "parsermodule.c"
        var $23=_PyModule_AddObject($22, ((__str212)&4294967295), _PyST_Type); //@line 3428 "parsermodule.c"
        var $24=((_PyST_Type)&4294967295); //@line 3429 "parsermodule.c"
        var $25=HEAP[$24]; //@line 3429 "parsermodule.c"
        var $26=((($25) + 1)&4294967295); //@line 3429 "parsermodule.c"
        var $27=((_PyST_Type)&4294967295); //@line 3429 "parsermodule.c"
        HEAP[$27]=$26; //@line 3429 "parsermodule.c"
        var $28=HEAP[$module]; //@line 3430 "parsermodule.c"
        var $29=_PyModule_AddObject($28, ((__str213)&4294967295), _PyST_Type); //@line 3430 "parsermodule.c"
        var $30=HEAP[$module]; //@line 3432 "parsermodule.c"
        var $31=_PyModule_AddStringConstant($30, ((__str214)&4294967295), ((_parser_copyright_string)&4294967295)); //@line 3432 "parsermodule.c"
        var $32=HEAP[$module]; //@line 3434 "parsermodule.c"
        var $33=_PyModule_AddStringConstant($32, ((__str215)&4294967295), ((_parser_doc_string)&4294967295)); //@line 3434 "parsermodule.c"
        var $34=HEAP[$module]; //@line 3436 "parsermodule.c"
        var $35=_PyModule_AddStringConstant($34, ((__str216)&4294967295), ((_parser_version_string)&4294967295)); //@line 3436 "parsermodule.c"
        var $36=_PyImport_ImportModuleNoBlock(((__str217)&4294967295)); //@line 3443 "parsermodule.c"
        HEAP[$copyreg]=$36; //@line 3443 "parsermodule.c"
        var $37=HEAP[$copyreg]; //@line 3444 "parsermodule.c"
        var $38=($37)!=0; //@line 3444 "parsermodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 25; break; } //@line 3444 "parsermodule.c"
      case 6: // $bb5
        var $39=HEAP[$copyreg]; //@line 3447 "parsermodule.c"
        var $40=_PyObject_GetAttrString($39, ((__str218)&4294967295)); //@line 3447 "parsermodule.c"
        HEAP[$func]=$40; //@line 3447 "parsermodule.c"
        var $41=HEAP[$module]; //@line 3448 "parsermodule.c"
        var $42=_PyObject_GetAttrString($41, ((__str202)&4294967295)); //@line 3448 "parsermodule.c"
        HEAP[_pickle_constructor]=$42; //@line 3448 "parsermodule.c"
        var $43=HEAP[$module]; //@line 3449 "parsermodule.c"
        var $44=_PyObject_GetAttrString($43, ((__str207)&4294967295)); //@line 3449 "parsermodule.c"
        HEAP[$pickler]=$44; //@line 3449 "parsermodule.c"
        var $45=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $46=($45)!=0; //@line 3450 "parsermodule.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3450 "parsermodule.c"
      case 7: // $bb6
        var $47=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $48=(($47)&4294967295); //@line 3450 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3450 "parsermodule.c"
        var $50=((($49) + 1)&4294967295); //@line 3450 "parsermodule.c"
        var $51=(($47)&4294967295); //@line 3450 "parsermodule.c"
        HEAP[$51]=$50; //@line 3450 "parsermodule.c"
        __label__ = 8; break; //@line 3450 "parsermodule.c"
      case 8: // $bb7
        var $52=HEAP[$func]; //@line 3451 "parsermodule.c"
        var $53=($52)!=0; //@line 3451 "parsermodule.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 3451 "parsermodule.c"
      case 9: // $bb8
        var $54=HEAP[_pickle_constructor]; //@line 3451 "parsermodule.c"
        var $55=($54)!=0; //@line 3451 "parsermodule.c"
        if ($55) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 3451 "parsermodule.c"
      case 10: // $bb9
        var $56=HEAP[$pickler]; //@line 3451 "parsermodule.c"
        var $57=($56)!=0; //@line 3451 "parsermodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 3451 "parsermodule.c"
      case 11: // $bb10
        var $58=HEAP[_pickle_constructor]; //@line 3455 "parsermodule.c"
        var $59=HEAP[$func]; //@line 3455 "parsermodule.c"
        var $60=HEAP[$pickler]; //@line 3455 "parsermodule.c"
        var $61=_PyObject_CallFunctionObjArgs($59, _PyST_Type, $60, $58, 0); //@line 3455 "parsermodule.c"
        HEAP[$res]=$61; //@line 3455 "parsermodule.c"
        var $62=HEAP[$res]; //@line 3457 "parsermodule.c"
        var $63=($62)!=0; //@line 3457 "parsermodule.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 3457 "parsermodule.c"
      case 12: // $bb11
        var $64=HEAP[$res]; //@line 3457 "parsermodule.c"
        var $65=(($64)&4294967295); //@line 3457 "parsermodule.c"
        var $66=HEAP[$65]; //@line 3457 "parsermodule.c"
        var $67=((($66) - 1)&4294967295); //@line 3457 "parsermodule.c"
        var $68=HEAP[$res]; //@line 3457 "parsermodule.c"
        var $69=(($68)&4294967295); //@line 3457 "parsermodule.c"
        HEAP[$69]=$67; //@line 3457 "parsermodule.c"
        var $70=HEAP[$res]; //@line 3457 "parsermodule.c"
        var $71=(($70)&4294967295); //@line 3457 "parsermodule.c"
        var $72=HEAP[$71]; //@line 3457 "parsermodule.c"
        var $73=((($72))|0)==0; //@line 3457 "parsermodule.c"
        if ($73) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 3457 "parsermodule.c"
      case 13: // $bb12
        var $74=HEAP[$res]; //@line 3457 "parsermodule.c"
        var $75=(($74+4)&4294967295); //@line 3457 "parsermodule.c"
        var $76=HEAP[$75]; //@line 3457 "parsermodule.c"
        var $77=(($76+24)&4294967295); //@line 3457 "parsermodule.c"
        var $78=HEAP[$77]; //@line 3457 "parsermodule.c"
        var $79=HEAP[$res]; //@line 3457 "parsermodule.c"
        FUNCTION_TABLE[$78]($79); //@line 3457 "parsermodule.c"
        __label__ = 14; break; //@line 3457 "parsermodule.c"
      case 14: // $bb13
        var $80=HEAP[$func]; //@line 3459 "parsermodule.c"
        var $81=($80)!=0; //@line 3459 "parsermodule.c"
        if ($81) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 3459 "parsermodule.c"
      case 15: // $bb14
        var $82=HEAP[$func]; //@line 3459 "parsermodule.c"
        var $83=(($82)&4294967295); //@line 3459 "parsermodule.c"
        var $84=HEAP[$83]; //@line 3459 "parsermodule.c"
        var $85=((($84) - 1)&4294967295); //@line 3459 "parsermodule.c"
        var $86=HEAP[$func]; //@line 3459 "parsermodule.c"
        var $87=(($86)&4294967295); //@line 3459 "parsermodule.c"
        HEAP[$87]=$85; //@line 3459 "parsermodule.c"
        var $88=HEAP[$func]; //@line 3459 "parsermodule.c"
        var $89=(($88)&4294967295); //@line 3459 "parsermodule.c"
        var $90=HEAP[$89]; //@line 3459 "parsermodule.c"
        var $91=((($90))|0)==0; //@line 3459 "parsermodule.c"
        if ($91) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3459 "parsermodule.c"
      case 16: // $bb15
        var $92=HEAP[$func]; //@line 3459 "parsermodule.c"
        var $93=(($92+4)&4294967295); //@line 3459 "parsermodule.c"
        var $94=HEAP[$93]; //@line 3459 "parsermodule.c"
        var $95=(($94+24)&4294967295); //@line 3459 "parsermodule.c"
        var $96=HEAP[$95]; //@line 3459 "parsermodule.c"
        var $97=HEAP[$func]; //@line 3459 "parsermodule.c"
        FUNCTION_TABLE[$96]($97); //@line 3459 "parsermodule.c"
        __label__ = 17; break; //@line 3459 "parsermodule.c"
      case 17: // $bb16
        var $98=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $99=($98)!=0; //@line 3460 "parsermodule.c"
        if ($99) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 3460 "parsermodule.c"
      case 18: // $bb17
        var $100=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $101=(($100)&4294967295); //@line 3460 "parsermodule.c"
        var $102=HEAP[$101]; //@line 3460 "parsermodule.c"
        var $103=((($102) - 1)&4294967295); //@line 3460 "parsermodule.c"
        var $104=(($100)&4294967295); //@line 3460 "parsermodule.c"
        HEAP[$104]=$103; //@line 3460 "parsermodule.c"
        var $105=(($100)&4294967295); //@line 3460 "parsermodule.c"
        var $106=HEAP[$105]; //@line 3460 "parsermodule.c"
        var $107=((($106))|0)==0; //@line 3460 "parsermodule.c"
        if ($107) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 3460 "parsermodule.c"
      case 19: // $bb18
        var $108=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $109=(($108+4)&4294967295); //@line 3460 "parsermodule.c"
        var $110=HEAP[$109]; //@line 3460 "parsermodule.c"
        var $111=(($110+24)&4294967295); //@line 3460 "parsermodule.c"
        var $112=HEAP[$111]; //@line 3460 "parsermodule.c"
        var $113=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        FUNCTION_TABLE[$112]($113); //@line 3460 "parsermodule.c"
        __label__ = 20; break; //@line 3460 "parsermodule.c"
      case 20: // $bb19
        var $114=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        var $115=($114)!=0; //@line 3461 "parsermodule.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 3461 "parsermodule.c"
      case 21: // $bb20
        var $116=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        var $117=(($116)&4294967295); //@line 3461 "parsermodule.c"
        var $118=HEAP[$117]; //@line 3461 "parsermodule.c"
        var $119=((($118) - 1)&4294967295); //@line 3461 "parsermodule.c"
        var $120=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        var $121=(($120)&4294967295); //@line 3461 "parsermodule.c"
        HEAP[$121]=$119; //@line 3461 "parsermodule.c"
        var $122=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        var $123=(($122)&4294967295); //@line 3461 "parsermodule.c"
        var $124=HEAP[$123]; //@line 3461 "parsermodule.c"
        var $125=((($124))|0)==0; //@line 3461 "parsermodule.c"
        if ($125) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 3461 "parsermodule.c"
      case 22: // $bb21
        var $126=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        var $127=(($126+4)&4294967295); //@line 3461 "parsermodule.c"
        var $128=HEAP[$127]; //@line 3461 "parsermodule.c"
        var $129=(($128+24)&4294967295); //@line 3461 "parsermodule.c"
        var $130=HEAP[$129]; //@line 3461 "parsermodule.c"
        var $131=HEAP[$pickler]; //@line 3461 "parsermodule.c"
        FUNCTION_TABLE[$130]($131); //@line 3461 "parsermodule.c"
        __label__ = 23; break; //@line 3461 "parsermodule.c"
      case 23: // $bb22
        var $132=HEAP[$copyreg]; //@line 3462 "parsermodule.c"
        var $133=(($132)&4294967295); //@line 3462 "parsermodule.c"
        var $134=HEAP[$133]; //@line 3462 "parsermodule.c"
        var $135=((($134) - 1)&4294967295); //@line 3462 "parsermodule.c"
        var $136=HEAP[$copyreg]; //@line 3462 "parsermodule.c"
        var $137=(($136)&4294967295); //@line 3462 "parsermodule.c"
        HEAP[$137]=$135; //@line 3462 "parsermodule.c"
        var $138=HEAP[$copyreg]; //@line 3462 "parsermodule.c"
        var $139=(($138)&4294967295); //@line 3462 "parsermodule.c"
        var $140=HEAP[$139]; //@line 3462 "parsermodule.c"
        var $141=((($140))|0)==0; //@line 3462 "parsermodule.c"
        if ($141) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3462 "parsermodule.c"
      case 24: // $bb23
        var $142=HEAP[$copyreg]; //@line 3462 "parsermodule.c"
        var $143=(($142+4)&4294967295); //@line 3462 "parsermodule.c"
        var $144=HEAP[$143]; //@line 3462 "parsermodule.c"
        var $145=(($144+24)&4294967295); //@line 3462 "parsermodule.c"
        var $146=HEAP[$145]; //@line 3462 "parsermodule.c"
        var $147=HEAP[$copyreg]; //@line 3462 "parsermodule.c"
        FUNCTION_TABLE[$146]($147); //@line 3462 "parsermodule.c"
        __label__ = 25; break; //@line 3462 "parsermodule.c"
      case 25: // $bb24
        __label__ = 26; break; //@line 3409 "parsermodule.c"
      case 26: // $return
        STACKTOP = __stackBase__;
        return; //@line 3409 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initparser"] = _initparser;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyTuple_New,0,_PyTuple_SetItem,0,_PyList_New,0,_PyList_SetItem,0,_validate_test,0,_validate_old_test,0,_validate_fpdef,0,_validate_arith_expr,0,_validate_term,0,_validate_subscript,0,_validate_expr,0,_parser_free,0,_parser_getattr,0,_parser_compare,0,_parser_compilest,0,_parser_isexpr,0,_parser_issuite,0,_parser_st2list,0,_parser_st2tuple,0,_parser_ast2tuple,0,_parser_ast2list,0,_parser_compileast,0,_parser_expr,0,_parser_suite,0,_parser_tuple2ast,0,_parser_tuple2st,0,_parser__pickler,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_parser_copyright_string=allocate([67,111,112,121,114,105,103,104,116,32,49,57,57,53,45,49,57,57,54,32,98,121,32,86,105,114,103,105,110,105,97,32,80,111,108,121,116,101,99,104,110,105,99,32,73,110,115,116,105,116,117,116,101,32,38,32,83,116,97,116,101,10,85,110,105,118,101,114,115,105,116,121,44,32,66,108,97,99,107,115,98,117,114,103,44,32,86,105,114,103,105,110,105,97,44,32,85,83,65,44,32,97,110,100,32,70,114,101,100,32,76,46,32,68,114,97,107,101,44,32,74,114,46,44,32,82,101,115,116,111,110,44,10,86,105,114,103,105,110,105,97,44,32,85,83,65,46,32,32,80,111,114,116,105,111,110,115,32,99,111,112,121,114,105,103,104,116,32,49,57,57,49,45,49,57,57,53,32,98,121,32,83,116,105,99,104,116,105,110,103,32,77,97,116,104,101,109,97,116,105,115,99,104,10,67,101,110,116,114,117,109,44,32,65,109,115,116,101,114,100,97,109,44,32,84,104,101,32,78,101,116,104,101,114,108,97,110,100,115,46,0] /* Copyright 1995-1996  */, "i8", ALLOC_NORMAL);
_parser_doc_string=allocate([84,104,105,115,32,105,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,80,121,116,104,111,110,39,115,32,105,110,116,101,114,110,97,108,32,112,97,114,115,101,114,46,0] /* This is an interface */, "i8", ALLOC_NORMAL);
_parser_version_string=allocate([48,46,53,0] /* 0.5\00 */, "i8", ALLOC_NORMAL);
__str=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,112,97,114,115,101,32,116,114,101,101,32,110,111,100,101,32,116,121,112,101,0] /* unrecognized parse t */, "i8", ALLOC_NORMAL);
_parser_error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str1=allocate([112,97,114,115,101,114,46,115,116,0] /* parser.st\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([73,110,116,101,114,109,101,100,105,97,116,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,112,97,114,115,101,32,116,114,101,101,46,0] /* Intermediate represe */, "i8", ALLOC_NORMAL);
_PyST_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str3=allocate([79,33,124,79,79,58,115,116,50,116,117,112,108,101,0] /* O!|OO:st2tuple\00 */, "i8", ALLOC_NORMAL);
_keywords_9402=allocate(16, "i8*", ALLOC_NORMAL);
__str4=allocate([97,115,116,0] /* ast\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([108,105,110,101,95,105,110,102,111,0] /* line_info\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([99,111,108,95,105,110,102,111,0] /* col_info\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([124,79,79,58,116,111,116,117,112,108,101,0] /* |OO:totuple\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([97,115,116,50,116,117,112,108,101,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,116,117,112,108,101,0] /* ast2tuple is removed */, "i8", ALLOC_NORMAL);
__str9=allocate([79,33,124,79,79,58,115,116,50,108,105,115,116,0] /* O!|OO:st2list\00 */, "i8", ALLOC_NORMAL);
_keywords_9452=allocate(16, "i8*", ALLOC_NORMAL);
__str10=allocate([124,79,79,58,116,111,108,105,115,116,0] /* |OO:tolist\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([97,115,116,50,108,105,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,115,116,50,108,105,115,116,0] /* ast2list is removed  */, "i8", ALLOC_NORMAL);
__str12=allocate([60,115,121,110,116,97,120,45,116,114,101,101,62,0] /* <syntax-tree>\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([79,33,124,115,58,99,111,109,112,105,108,101,115,116,0] /* O!|s:compilest\00 */, "i8", ALLOC_NORMAL);
_keywords_9503=allocate(12, "i8*", ALLOC_NORMAL);
__str14=allocate([102,105,108,101,110,97,109,101,0] /* filename\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([124,115,58,99,111,109,112,105,108,101,0] /* |s:compile\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([99,111,109,112,105,108,101,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,99,111,109,112,105,108,101,115,116,0] /* compileast is remove */, "i8", ALLOC_NORMAL);
__str17=allocate([79,33,58,105,115,101,120,112,114,0] /* O!:isexpr\00 */, "i8", ALLOC_NORMAL);
_keywords_9551=allocate(8, "i8*", ALLOC_NORMAL);
__str18=allocate([58,105,115,101,120,112,114,0] /* :isexpr\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([79,33,58,105,115,115,117,105,116,101,0] /* O!:issuite\00 */, "i8", ALLOC_NORMAL);
_keywords_9577=allocate(8, "i8*", ALLOC_NORMAL);
__str20=allocate([58,105,115,115,117,105,116,101,0] /* :issuite\00 */, "i8", ALLOC_NORMAL);
_parser_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str21=allocate([99,111,109,112,105,108,101,0] /* compile\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([67,111,109,112,105,108,101,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0] /* Compile this ST obje */, "i8", ALLOC_NORMAL);
__str23=allocate([105,115,101,120,112,114,0] /* isexpr\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Determines if this S */, "i8", ALLOC_NORMAL);
__str25=allocate([105,115,115,117,105,116,101,0] /* issuite\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,116,104,105,115,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Determines if this S */, "i8", ALLOC_NORMAL);
__str27=allocate([116,111,108,105,115,116,0] /* tolist\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0] /* Creates a list-tree  */, "i8", ALLOC_NORMAL);
__str29=allocate([116,111,116,117,112,108,101,0] /* totuple\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,116,104,105,115,32,83,84,46,0] /* Creates a tuple-tree */, "i8", ALLOC_NORMAL);
_keywords_9618=allocate(8, "i8*", ALLOC_NORMAL);
__str31=allocate([115,111,117,114,99,101,0] /* source\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([115,58,101,120,112,114,0] /* s:expr\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([115,58,115,117,105,116,101,0] /* s:suite\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([79,58,115,101,113,117,101,110,99,101,50,115,116,0] /* O:sequence2st\00 */, "i8", ALLOC_NORMAL);
_keywords_9672=allocate(8, "i8*", ALLOC_NORMAL);
__str35=allocate([115,101,113,117,101,110,99,101,0] /* sequence\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([115,101,113,117,101,110,99,101,50,115,116,40,41,32,114,101,113,117,105,114,101,115,32,97,32,115,105,110,103,108,101,32,115,101,113,117,101,110,99,101,32,97,114,103,117,109,101,110,116,0] /* sequence2st() requir */, "i8", ALLOC_NORMAL);
__str37=allocate([112,97,114,115,101,32,116,114,101,101,32,100,111,101,115,32,110,111,116,32,117,115,101,32,97,32,118,97,108,105,100,32,115,116,97,114,116,32,115,121,109,98,111,108,0] /* parse tree does not  */, "i8", ALLOC_NORMAL);
__str38=allocate([117,110,115,112,101,99,105,102,105,101,100,32,83,84,32,101,114,114,111,114,32,111,99,99,117,114,114,101,100,0] /* unspecified ST error */, "i8", ALLOC_NORMAL);
__str39=allocate([116,117,112,108,101,50,97,115,116,32,105,115,32,114,101,109,111,118,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,116,117,112,108,101,50,115,116,0] /* tuple2ast is removed */, "i8", ALLOC_NORMAL);
__str40=allocate([111,115,0] /* os\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([73,108,108,101,103,97,108,32,110,111,100,101,32,99,111,110,115,116,114,117,99,116,46,0] /* Illegal node constru */, "i8", ALLOC_NORMAL);
__str42=allocate([116,101,114,109,105,110,97,108,32,110,111,100,101,115,32,109,117,115,116,32,104,97,118,101,32,50,32,111,114,32,51,32,101,110,116,114,105,101,115,0] /* terminal nodes must  */, "i8", ALLOC_NORMAL);
__str43=allocate([115,101,99,111,110,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,102,111,117,110,100,32,37,115,0] /* second item in termi */, "i8", ALLOC_NORMAL);
__str44=allocate([116,104,105,114,100,32,105,116,101,109,32,105,110,32,116,101,114,109,105,110,97,108,32,110,111,100,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,44,32,102,111,117,110,100,32,37,115,0] /* third item in termin */, "i8", ALLOC_NORMAL);
__str45=allocate([117,110,107,110,111,119,110,32,110,111,100,101,32,116,121,112,101,46,0] /* unknown node type.\0 */, "i8", ALLOC_NORMAL);
__str46=allocate([117,110,115,117,112,112,111,114,116,101,100,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,32,110,111,100,101,115,0] /* unsupported number o */, "i8", ALLOC_NORMAL);
__str47=allocate([73,108,108,101,103,97,108,32,115,121,110,116,97,120,45,116,114,101,101,59,32,99,97,110,110,111,116,32,115,116,97,114,116,32,119,105,116,104,32,116,101,114,109,105,110,97,108,32,115,121,109,98,111,108,46,0] /* Illegal syntax-tree; */, "i8", ALLOC_NORMAL);
__str48=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,110,101,110,116,32,116,117,112,108,101,46,0] /* Illegal component tu */, "i8", ALLOC_NORMAL);
__str49=allocate([69,120,112,101,99,116,101,100,32,110,111,100,101,32,116,121,112,101,32,37,100,44,32,103,111,116,32,37,100,46,0] /* Expected node type % */, "i8", ALLOC_NORMAL);
__str50=allocate([73,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,37,115,32,110,111,100,101,46,0] /* Illegal number of ch */, "i8", ALLOC_NORMAL);
__str51=allocate([73,108,108,101,103,97,108,32,116,101,114,109,105,110,97,108,58,32,101,120,112,101,99,116,101,100,32,34,37,115,34,0] /* Illegal terminal: ex */, "i8", ALLOC_NORMAL);
__str52=allocate([44,0] /* ,\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([99,108,97,115,115,0] /* class\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([58,0] /* :\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([40,0] /* (\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([41,0] /* )\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([105,102,0] /* if\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([101,108,115,101,0] /* else\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([101,108,105,102,0] /* elif\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([112,97,114,97,109,101,116,101,114,115,0] /* parameters\00 */, "i8", ALLOC_NORMAL);
__str61=allocate(1, "i8", ALLOC_NORMAL);
__str62=allocate([115,117,105,116,101,0] /* suite\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([116,101,115,116,108,105,115,116,0] /* testlist\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([116,101,115,116,108,105,115,116,49,0] /* testlist1\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([116,101,115,116,108,105,115,116,95,115,97,102,101,0] /* testlist_safe\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([101,120,112,101,99,116,101,100,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* expected variable ar */, "i8", ALLOC_NORMAL);
__str67=allocate([42,42,0] /* __\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([105,108,108,101,103,97,108,32,118,97,114,105,97,98,108,101,32,97,114,103,117,109,101,110,116,32,116,114,97,105,108,101,114,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* illegal variable arg */, "i8", ALLOC_NORMAL);
__str69=allocate([118,97,114,97,114,103,115,108,105,115,116,32,109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,0] /* varargslist missing  */, "i8", ALLOC_NORMAL);
__str70=allocate([61,0] /* =\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([105,108,108,101,103,97,108,32,102,111,114,109,97,116,105,111,110,32,102,111,114,32,118,97,114,97,114,103,115,108,105,115,116,0] /* illegal formation fo */, "i8", ALLOC_NORMAL);
__str72=allocate([108,105,115,116,95,105,116,101,114,0] /* list_iter\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([99,111,109,112,95,105,116,101,114,0] /* comp_iter\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([108,105,115,116,95,102,111,114,0] /* list_for\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([102,111,114,0] /* for\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([105,110,0] /* in\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([99,111,109,112,95,102,111,114,0] /* comp_for\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([108,105,115,116,95,105,102,0] /* list_if\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([99,111,109,112,95,105,102,0] /* comp_if\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([102,112,100,101,102,0] /* fpdef\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([102,112,108,105,115,116,0] /* fplist\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([115,116,109,116,0] /* stmt\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([115,105,109,112,108,101,95,115,116,109,116,0] /* simple_stmt\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([59,0] /* ;\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([115,109,97,108,108,95,115,116,109,116,0] /* small_stmt\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([105,108,108,101,103,97,108,32,115,109,97,108,108,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0] /* illegal small_stmt c */, "i8", ALLOC_NORMAL);
__str87=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,115,109,97,108,108,95,115,116,109,116,58,32,37,100,46,0] /* Unrecognized child n */, "i8", ALLOC_NORMAL);
__str88=allocate([99,111,109,112,111,117,110,100,95,115,116,109,116,0] /* compound_stmt\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([73,108,108,101,103,97,108,32,99,111,109,112,111,117,110,100,32,115,116,97,116,101,109,101,110,116,32,116,121,112,101,58,32,37,100,46,0] /* Illegal compound sta */, "i8", ALLOC_NORMAL);
__str90=allocate([97,117,103,97,115,115,105,103,110,0] /* augassign\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([43,61,0] /* +=\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([45,61,0] /* -=\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([42,61,0] /* _=\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([47,61,0] /* /=\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([47,47,61,0] /* //=\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([37,61,0] /* %=\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([38,61,0] /* &=\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([124,61,0] /* |=\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([94,61,0] /* ^=\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([60,60,61,0] /* <<=\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([62,62,61,0] /* >>=\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([42,42,61,0] /* __=\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([105,108,108,101,103,97,108,32,97,117,103,109,101,110,116,101,100,32,97,115,115,105,103,110,109,101,110,116,32,111,112,101,114,97,116,111,114,0] /* illegal augmented as */, "i8", ALLOC_NORMAL);
__str104=allocate([112,114,105,110,116,0] /* print\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([112,114,105,110,116,95,115,116,109,116,0] /* print_stmt\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([100,101,108,95,115,116,109,116,0] /* del_stmt\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([100,101,108,0] /* del\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([114,101,116,117,114,110,0] /* return\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([114,97,105,115,101,0] /* raise\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([121,105,101,108,100,0] /* yield\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([121,105,101,108,100,95,115,116,109,116,0] /* yield_stmt\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([97,115,0] /* as\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([105,109,112,111,114,116,95,97,115,95,110,97,109,101,0] /* import_as_name\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([46,0] /* .\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,100,111,116,116,101,100,95,97,115,95,110,97,109,101,0] /* illegal number of ch */, "i8", ALLOC_NORMAL);
__str116=allocate([105,109,112,111,114,116,95,110,97,109,101,0] /* import_name\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([105,109,112,111,114,116,0] /* import\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([102,114,111,109,0] /* from\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([105,109,112,111,114,116,95,115,116,109,116,0] /* import_stmt\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([105,108,108,101,103,97,108,32,105,109,112,111,114,116,95,115,116,109,116,32,99,104,105,108,100,32,116,121,112,101,0] /* illegal import_stmt  */, "i8", ALLOC_NORMAL);
__str121=allocate([85,110,114,101,99,111,103,110,105,122,101,100,32,99,104,105,108,100,32,110,111,100,101,32,111,102,32,105,109,112,111,114,116,95,115,116,109,116,58,32,37,100,46,0] /* Unrecognized child n */, "i8", ALLOC_NORMAL);
__str122=allocate([105,108,108,101,103,97,108,32,103,108,111,98,97,108,32,115,116,97,116,101,109,101,110,116,0] /* illegal global state */, "i8", ALLOC_NORMAL);
__str123=allocate([103,108,111,98,97,108,0] /* global\00 */, "i8", ALLOC_NORMAL);
__str124=allocate([101,120,101,99,0] /* exec\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([105,108,108,101,103,97,108,32,101,120,101,99,32,115,116,97,116,101,109,101,110,116,0] /* illegal exec stateme */, "i8", ALLOC_NORMAL);
__str126=allocate([97,115,115,101,114,116,0] /* assert\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([105,108,108,101,103,97,108,32,97,115,115,101,114,116,32,115,116,97,116,101,109,101,110,116,0] /* illegal assert state */, "i8", ALLOC_NORMAL);
__str128=allocate([119,104,105,108,101,0] /* while\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([116,114,121,0] /* try\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([101,120,99,101,112,116,0] /* except\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([73,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,99,104,105,108,100,114,101,110,32,102,111,114,32,116,114,121,47,37,115,32,110,111,100,101,46,0] /* Illegal number of ch */, "i8", ALLOC_NORMAL);
__str132=allocate([102,105,110,97,108,108,121,0] /* finally\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([116,114,121,47,102,105,110,97,108,108,121,0] /* try/finally\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([116,114,121,47,101,120,99,101,112,116,47,102,105,110,97,108,108,121,0] /* try/except/finally\0 */, "i8", ALLOC_NORMAL);
__str135=allocate([111,114,0] /* or\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([97,110,100,0] /* and\00 */, "i8", ALLOC_NORMAL);
__str137=allocate([110,111,116,0] /* not\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([105,115,0] /* is\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([105,108,108,101,103,97,108,32,111,112,101,114,97,116,111,114,32,39,37,115,39,0] /* illegal operator '%s */, "i8", ALLOC_NORMAL);
__str140=allocate([105,108,108,101,103,97,108,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,111,114,32,116,121,112,101,0] /* illegal comparison o */, "i8", ALLOC_NORMAL);
__str141=allocate([99,111,109,112,95,111,112,0] /* comp_op\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([117,110,107,110,111,119,110,32,99,111,109,112,97,114,105,115,111,110,32,111,112,101,114,97,116,111,114,0] /* unknown comparison o */, "i8", ALLOC_NORMAL);
__str143=allocate([124,0] /* |\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([94,0] /* ^\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([38,0] /* &\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,39,112,111,119,101,114,39,0] /* illegal number of no */, "i8", ALLOC_NORMAL);
__str147=allocate([97,116,111,109,0] /* atom\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([105,108,108,101,103,97,108,32,108,105,115,116,32,100,105,115,112,108,97,121,32,97,116,111,109,0] /* illegal list display */, "i8", ALLOC_NORMAL);
__str149=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,108,105,115,116,109,97,107,101,114,0] /* missing child nodes  */, "i8", ALLOC_NORMAL);
__str150=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,108,105,115,116,109,97,107,101,114,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str151=allocate([109,105,115,115,105,110,103,32,99,104,105,108,100,32,110,111,100,101,115,32,111,102,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0] /* missing child nodes  */, "i8", ALLOC_NORMAL);
__str152=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,116,101,115,116,108,105,115,116,95,99,111,109,112,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str153=allocate([64,0] /* @\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([119,105,116,104,0] /* with\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([100,101,102,0] /* def\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([108,97,109,98,100,97,0] /* lambda\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([108,97,109,98,100,101,102,0] /* lambdef\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([111,108,100,95,108,97,109,98,100,101,102,0] /* old_lambdef\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([97,114,103,108,105,115,116,0] /* arglist\00 */, "i8", ALLOC_NORMAL);
__str160=allocate([110,101,101,100,32,39,40,39,44,32,39,41,39,32,102,111,114,32,103,101,110,101,114,97,116,111,114,32,101,120,112,114,101,115,115,105,111,110,0] /* need '(', ')' for ge */, "i8", ALLOC_NORMAL);
__str161=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,32,40,101,120,116,114,97,32,115,116,117,102,102,32,111,110,32,101,110,100,41,0] /* illegal arglist spec */, "i8", ALLOC_NORMAL);
__str162=allocate([42,0] /* _\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,39,32,105,110,32,97,114,103,108,105,115,116,0] /* illegal use of '_' i */, "i8", ALLOC_NORMAL);
__str164=allocate([105,108,108,101,103,97,108,32,117,115,101,32,111,102,32,39,42,42,39,32,105,110,32,97,114,103,108,105,115,116,0] /* illegal use of '__'  */, "i8", ALLOC_NORMAL);
__str165=allocate([105,108,108,101,103,97,108,32,97,114,103,108,105,115,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,0] /* illegal arglist spec */, "i8", ALLOC_NORMAL);
__str166=allocate([116,114,97,105,108,101,114,0] /* trailer\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([115,117,98,115,99,114,105,112,116,108,105,115,116,0] /* subscriptlist\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([105,110,118,97,108,105,100,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,115,117,98,115,99,114,105,112,116,32,110,111,100,101,0] /* invalid number of ar */, "i8", ALLOC_NORMAL);
__str169=allocate([115,117,98,115,99,114,105,112,116,0] /* subscript\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([115,108,105,99,101,111,112,0] /* sliceop\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([101,120,112,114,108,105,115,116,0] /* exprlist\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([110,99,104,32,62,32,48,0] /* nch > 0\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,112,97,114,115,101,114,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/p */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___13794=allocate([118,97,108,105,100,97,116,101,95,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* validate_dictorsetma */, "i8", ALLOC_NORMAL);
__str174=allocate([105,108,108,101,103,97,108,32,110,117,109,98,101,114,32,111,102,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* illegal number of no */, "i8", ALLOC_NORMAL);
__str175=allocate([105,108,108,101,103,97,108,32,116,114,97,105,108,105,110,103,32,110,111,100,101,115,32,102,111,114,32,100,105,99,116,111,114,115,101,116,109,97,107,101,114,0] /* illegal trailing nod */, "i8", ALLOC_NORMAL);
__str176=allocate([102,108,111,119,95,115,116,109,116,0] /* flow_stmt\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([105,108,108,101,103,97,108,32,102,108,111,119,95,115,116,109,116,32,116,121,112,101,0] /* illegal flow_stmt ty */, "i8", ALLOC_NORMAL);
__str178=allocate([112,97,115,115,0] /* pass\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([98,114,101,97,107,0] /* break\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([99,111,110,116,105,110,117,101,0] /* continue\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([117,110,114,101,99,111,103,110,105,122,101,100,32,110,111,100,101,32,116,121,112,101,0] /* unrecognized node ty */, "i8", ALLOC_NORMAL);
__str182=allocate([99,111,117,108,100,32,110,111,116,32,118,97,108,105,100,97,116,101,32,101,120,112,114,101,115,115,105,111,110,32,116,117,112,108,101,0] /* could not validate e */, "i8", ALLOC_NORMAL);
__str183=allocate([86,65,76,73,68,65,84,73,79,78,32,70,65,73,76,85,82,69,58,32,114,101,112,111,114,116,32,116,104,105,115,32,116,111,32,116,104,101,32,109,97,105,110,116,97,105,110,101,114,33,0] /* VALIDATION FAILURE:  */, "i8", ALLOC_NORMAL);
__str184=allocate([69,114,114,111,114,32,80,97,114,115,105,110,103,32,101,110,99,111,100,105,110,103,95,100,101,99,108,0] /* Error Parsing encodi */, "i8", ALLOC_NORMAL);
_pickle_constructor=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str185=allocate([79,33,58,95,112,105,99,107,108,101,114,0] /* O!:_pickler\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([79,40,79,41,0] /* O(O)\00 */, "i8", ALLOC_NORMAL);
_parser_functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str188=allocate([97,115,116,50,116,117,112,108,101,0] /* ast2tuple\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([67,114,101,97,116,101,115,32,97,32,116,117,112,108,101,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0] /* Creates a tuple-tree */, "i8", ALLOC_NORMAL);
__str190=allocate([97,115,116,50,108,105,115,116,0] /* ast2list\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([67,114,101,97,116,101,115,32,97,32,108,105,115,116,45,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,110,32,83,84,46,0] /* Creates a list-tree  */, "i8", ALLOC_NORMAL);
__str192=allocate([99,111,109,112,105,108,101,97,115,116,0] /* compileast\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([67,111,109,112,105,108,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,105,110,116,111,32,97,32,99,111,100,101,32,111,98,106,101,99,116,46,0] /* Compiles an ST objec */, "i8", ALLOC_NORMAL);
__str194=allocate([99,111,109,112,105,108,101,115,116,0] /* compilest\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([101,120,112,114,0] /* expr\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str197=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,110,32,101,120,112,114,101,115,115,105,111,110,46,0] /* Determines if an ST  */, "i8", ALLOC_NORMAL);
__str198=allocate([68,101,116,101,114,109,105,110,101,115,32,105,102,32,97,110,32,83,84,32,111,98,106,101,99,116,32,119,97,115,32,99,114,101,97,116,101,100,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Determines if an ST  */, "i8", ALLOC_NORMAL);
__str199=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,115,117,105,116,101,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str200=allocate([115,101,113,117,101,110,99,101,50,97,115,116,0] /* sequence2ast\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([67,114,101,97,116,101,115,32,97,110,32,83,84,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,116,114,101,101,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,0] /* Creates an ST object */, "i8", ALLOC_NORMAL);
__str202=allocate([115,101,113,117,101,110,99,101,50,115,116,0] /* sequence2st\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([115,116,50,116,117,112,108,101,0] /* st2tuple\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([115,116,50,108,105,115,116,0] /* st2list\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([116,117,112,108,101,50,97,115,116,0] /* tuple2ast\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([116,117,112,108,101,50,115,116,0] /* tuple2st\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([95,112,105,99,107,108,101,114,0] /* _pickler\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([82,101,116,117,114,110,115,32,116,104,101,32,112,105,99,107,108,101,32,109,97,103,105,99,32,116,111,32,97,108,108,111,119,32,83,84,32,111,98,106,101,99,116,115,32,116,111,32,98,101,32,112,105,99,107,108,101,100,46,0] /* Returns the pickle m */, "i8", ALLOC_NORMAL);
__str209=allocate([112,97,114,115,101,114,0] /* parser\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([112,97,114,115,101,114,46,80,97,114,115,101,114,69,114,114,111,114,0] /* parser.ParserError\0 */, "i8", ALLOC_NORMAL);
__str211=allocate([80,97,114,115,101,114,69,114,114,111,114,0] /* ParserError\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([65,83,84,84,121,112,101,0] /* ASTType\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([83,84,84,121,112,101,0] /* STType\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([95,95,99,111,112,121,114,105,103,104,116,95,95,0] /* __copyright__\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([99,111,112,121,95,114,101,103,0] /* copy_reg\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([112,105,99,107,108,101,0] /* pickle\00 */, "i8", ALLOC_NORMAL);
HEAP[_PyST_Type+12]=((__str1)&4294967295);
HEAP[_PyST_Type+24]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyST_Type+32]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyST_Type+40]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyST_Type+88]=((__str2)&4294967295);
HEAP[_keywords_9402]=((__str4)&4294967295);
HEAP[_keywords_9402+4]=((__str5)&4294967295);
HEAP[_keywords_9402+8]=((__str6)&4294967295);
HEAP[_keywords_9452]=((__str4)&4294967295);
HEAP[_keywords_9452+4]=((__str5)&4294967295);
HEAP[_keywords_9452+8]=((__str6)&4294967295);
HEAP[_keywords_9503]=((__str4)&4294967295);
HEAP[_keywords_9503+4]=((__str14)&4294967295);
HEAP[_keywords_9551]=((__str4)&4294967295);
HEAP[_keywords_9577]=((__str4)&4294967295);
HEAP[_parser_methods]=((__str21)&4294967295);
HEAP[_parser_methods+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_methods+12]=((__str22)&4294967295);
HEAP[_parser_methods+16]=((__str23)&4294967295);
HEAP[_parser_methods+20]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_methods+28]=((__str24)&4294967295);
HEAP[_parser_methods+32]=((__str25)&4294967295);
HEAP[_parser_methods+36]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_methods+44]=((__str26)&4294967295);
HEAP[_parser_methods+48]=((__str27)&4294967295);
HEAP[_parser_methods+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_methods+60]=((__str28)&4294967295);
HEAP[_parser_methods+64]=((__str29)&4294967295);
HEAP[_parser_methods+68]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_methods+76]=((__str30)&4294967295);
HEAP[_keywords_9618]=((__str31)&4294967295);
HEAP[_keywords_9672]=((__str35)&4294967295);
HEAP[_parser_functions]=((__str188)&4294967295);
HEAP[_parser_functions+4]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_parser_functions+12]=((__str189)&4294967295);
HEAP[_parser_functions+16]=((__str190)&4294967295);
HEAP[_parser_functions+20]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_parser_functions+28]=((__str191)&4294967295);
HEAP[_parser_functions+32]=((__str192)&4294967295);
HEAP[_parser_functions+36]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_parser_functions+44]=((__str193)&4294967295);
HEAP[_parser_functions+48]=((__str194)&4294967295);
HEAP[_parser_functions+52]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_functions+60]=((__str193)&4294967295);
HEAP[_parser_functions+64]=((__str195)&4294967295);
HEAP[_parser_functions+68]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_parser_functions+76]=((__str196)&4294967295);
HEAP[_parser_functions+80]=((__str23)&4294967295);
HEAP[_parser_functions+84]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_functions+92]=((__str197)&4294967295);
HEAP[_parser_functions+96]=((__str25)&4294967295);
HEAP[_parser_functions+100]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_functions+108]=((__str198)&4294967295);
HEAP[_parser_functions+112]=((__str62)&4294967295);
HEAP[_parser_functions+116]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_parser_functions+124]=((__str199)&4294967295);
HEAP[_parser_functions+128]=((__str200)&4294967295);
HEAP[_parser_functions+132]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+140]=((__str201)&4294967295);
HEAP[_parser_functions+144]=((__str202)&4294967295);
HEAP[_parser_functions+148]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+156]=((__str201)&4294967295);
HEAP[_parser_functions+160]=((__str203)&4294967295);
HEAP[_parser_functions+164]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_functions+172]=((__str189)&4294967295);
HEAP[_parser_functions+176]=((__str204)&4294967295);
HEAP[_parser_functions+180]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_functions+188]=((__str191)&4294967295);
HEAP[_parser_functions+192]=((__str205)&4294967295);
HEAP[_parser_functions+196]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+204]=((__str201)&4294967295);
HEAP[_parser_functions+208]=((__str206)&4294967295);
HEAP[_parser_functions+212]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+220]=((__str201)&4294967295);
HEAP[_parser_functions+224]=((__str207)&4294967295);
HEAP[_parser_functions+228]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_parser_functions+236]=((__str208)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

