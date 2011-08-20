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



var $0___SIZE = 196; // %0
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__mod___SIZE = 8; // %struct._mod
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_anon___SIZE = 4; // %struct.anon
  
var $struct_arc___SIZE = 4; // %struct.arc
  
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
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr;
        var $mkseq_addr;
        var $addelem_addr;
        var $lineno_addr;
        var $col_offset_addr;
        var $retval;
        var $0;
        var $i;
        var $v;
        var $w;
        var $result;
        $n_addr=$n;
        $mkseq_addr=$mkseq;
        $addelem_addr=$addelem;
        $lineno_addr=$lineno;
        $col_offset_addr=$col_offset;
        var $1=$n_addr; //@line 88 "parsermodule.c"
        var $2=($1)==0; //@line 88 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 88 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 89 "parsermodule.c"
        var $4=($3) + 1; //@line 89 "parsermodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 89 "parsermodule.c"
        $0=__Py_NoneStruct; //@line 90 "parsermodule.c"
        __label__ = 27; break; //@line 90 "parsermodule.c"
      case 2: // $bb1
        var $5=$n_addr; //@line 92 "parsermodule.c"
        var $6=$5; //@line 92 "parsermodule.c"
        var $7=HEAP[$6]; //@line 92 "parsermodule.c"
        var $8=($7) > 255; //@line 92 "parsermodule.c"
        var $9=$n_addr; //@line 97 "parsermodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 19; break; } //@line 92 "parsermodule.c"
      case 3: // $bb2
        var $10=$9+16; //@line 97 "parsermodule.c"
        var $11=HEAP[$10]; //@line 97 "parsermodule.c"
        var $12=$n_addr; //@line 97 "parsermodule.c"
        var $13=$12; //@line 97 "parsermodule.c"
        var $14=HEAP[$13]; //@line 97 "parsermodule.c"
        var $15=($14)==339; //@line 97 "parsermodule.c"
        var $16=($15); //@line 97 "parsermodule.c"
        var $17=($11) + 1; //@line 97 "parsermodule.c"
        var $18=($17) + ($16); //@line 97 "parsermodule.c"
        var $19=$mkseq_addr; //@line 97 "parsermodule.c"
        var $20=FUNCTION_TABLE[$19]($18); //@line 97 "parsermodule.c"
        $v=$20; //@line 97 "parsermodule.c"
        var $21=$v; //@line 98 "parsermodule.c"
        var $22=($21)==0; //@line 98 "parsermodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 98 "parsermodule.c"
      case 4: // $bb3
        var $23=$v; //@line 99 "parsermodule.c"
        $0=$23; //@line 99 "parsermodule.c"
        __label__ = 27; break; //@line 99 "parsermodule.c"
      case 5: // $bb4
        var $24=$n_addr; //@line 100 "parsermodule.c"
        var $25=$24; //@line 100 "parsermodule.c"
        var $26=HEAP[$25]; //@line 100 "parsermodule.c"
        var $27=($26); //@line 100 "parsermodule.c"
        var $28=_PyInt_FromLong($27); //@line 100 "parsermodule.c"
        $w=$28; //@line 100 "parsermodule.c"
        var $29=$w; //@line 101 "parsermodule.c"
        var $30=($29)==0; //@line 101 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 101 "parsermodule.c"
      case 6: // $bb5
        var $31=$v; //@line 102 "parsermodule.c"
        var $32=$31; //@line 102 "parsermodule.c"
        var $33=HEAP[$32]; //@line 102 "parsermodule.c"
        var $34=($33) - 1; //@line 102 "parsermodule.c"
        var $35=$v; //@line 102 "parsermodule.c"
        var $36=$35; //@line 102 "parsermodule.c"
        HEAP[$36]=$34; //@line 102 "parsermodule.c"
        var $37=$v; //@line 102 "parsermodule.c"
        var $38=$37; //@line 102 "parsermodule.c"
        var $39=HEAP[$38]; //@line 102 "parsermodule.c"
        var $40=($39)==0; //@line 102 "parsermodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 102 "parsermodule.c"
      case 7: // $bb6
        var $41=$v; //@line 102 "parsermodule.c"
        var $42=$41+4; //@line 102 "parsermodule.c"
        var $43=HEAP[$42]; //@line 102 "parsermodule.c"
        var $44=$43+24; //@line 102 "parsermodule.c"
        var $45=HEAP[$44]; //@line 102 "parsermodule.c"
        var $46=$v; //@line 102 "parsermodule.c"
        FUNCTION_TABLE[$45]($46); //@line 102 "parsermodule.c"
        __label__ = 8; break; //@line 102 "parsermodule.c"
      case 8: // $bb7
        $0=0; //@line 103 "parsermodule.c"
        __label__ = 27; break; //@line 103 "parsermodule.c"
      case 9: // $bb8
        var $47=$addelem_addr; //@line 105 "parsermodule.c"
        var $48=$v; //@line 105 "parsermodule.c"
        var $49=$w; //@line 105 "parsermodule.c"
        var $50=FUNCTION_TABLE[$47]($48, 0, $49); //@line 105 "parsermodule.c"
        $i=0; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 10: // $bb9
        var $51=$91+20; //@line 107 "parsermodule.c"
        var $52=HEAP[$51]; //@line 107 "parsermodule.c"
        var $53=$i; //@line 107 "parsermodule.c"
        var $54=$52+24*$53; //@line 107 "parsermodule.c"
        var $55=$mkseq_addr; //@line 107 "parsermodule.c"
        var $56=$addelem_addr; //@line 107 "parsermodule.c"
        var $57=$lineno_addr; //@line 107 "parsermodule.c"
        var $58=$col_offset_addr; //@line 107 "parsermodule.c"
        var $59=_node2tuple($54, $55, $56, $57, $58); //@line 107 "parsermodule.c"
        $w=$59; //@line 107 "parsermodule.c"
        var $60=$w; //@line 108 "parsermodule.c"
        var $61=($60)==0; //@line 108 "parsermodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 108 "parsermodule.c"
      case 11: // $bb10
        var $62=$v; //@line 109 "parsermodule.c"
        var $63=$62; //@line 109 "parsermodule.c"
        var $64=HEAP[$63]; //@line 109 "parsermodule.c"
        var $65=($64) - 1; //@line 109 "parsermodule.c"
        var $66=$v; //@line 109 "parsermodule.c"
        var $67=$66; //@line 109 "parsermodule.c"
        HEAP[$67]=$65; //@line 109 "parsermodule.c"
        var $68=$v; //@line 109 "parsermodule.c"
        var $69=$68; //@line 109 "parsermodule.c"
        var $70=HEAP[$69]; //@line 109 "parsermodule.c"
        var $71=($70)==0; //@line 109 "parsermodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 109 "parsermodule.c"
      case 12: // $bb11
        var $72=$v; //@line 109 "parsermodule.c"
        var $73=$72+4; //@line 109 "parsermodule.c"
        var $74=HEAP[$73]; //@line 109 "parsermodule.c"
        var $75=$74+24; //@line 109 "parsermodule.c"
        var $76=HEAP[$75]; //@line 109 "parsermodule.c"
        var $77=$v; //@line 109 "parsermodule.c"
        FUNCTION_TABLE[$76]($77); //@line 109 "parsermodule.c"
        __label__ = 13; break; //@line 109 "parsermodule.c"
      case 13: // $bb12
        $0=0; //@line 110 "parsermodule.c"
        __label__ = 27; break; //@line 110 "parsermodule.c"
      case 14: // $bb13
        var $78=$i; //@line 112 "parsermodule.c"
        var $79=($78) + 1; //@line 112 "parsermodule.c"
        var $80=$addelem_addr; //@line 112 "parsermodule.c"
        var $81=$v; //@line 112 "parsermodule.c"
        var $82=$w; //@line 112 "parsermodule.c"
        var $83=FUNCTION_TABLE[$80]($81, $79, $82); //@line 112 "parsermodule.c"
        var $84=$i; //@line 106 "parsermodule.c"
        var $85=($84) + 1; //@line 106 "parsermodule.c"
        $i=$85; //@line 106 "parsermodule.c"
        __label__ = 15; break; //@line 106 "parsermodule.c"
      case 15: // $bb14
        var $86=$n_addr; //@line 106 "parsermodule.c"
        var $87=$86+16; //@line 106 "parsermodule.c"
        var $88=HEAP[$87]; //@line 106 "parsermodule.c"
        var $89=$i; //@line 106 "parsermodule.c"
        var $90=($88) > ($89); //@line 106 "parsermodule.c"
        var $91=$n_addr; //@line 107 "parsermodule.c"
        if ($90) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 106 "parsermodule.c"
      case 16: // $bb15
        var $92=$91; //@line 115 "parsermodule.c"
        var $93=HEAP[$92]; //@line 115 "parsermodule.c"
        var $94=($93)==339; //@line 115 "parsermodule.c"
        if ($94) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 115 "parsermodule.c"
      case 17: // $bb16
        var $95=$n_addr; //@line 116 "parsermodule.c"
        var $96=$95+4; //@line 116 "parsermodule.c"
        var $97=HEAP[$96]; //@line 116 "parsermodule.c"
        var $98=_PyString_FromString($97); //@line 116 "parsermodule.c"
        var $99=$i; //@line 116 "parsermodule.c"
        var $100=($99) + 1; //@line 116 "parsermodule.c"
        var $101=$addelem_addr; //@line 116 "parsermodule.c"
        var $102=$v; //@line 116 "parsermodule.c"
        var $103=FUNCTION_TABLE[$101]($102, $100, $98); //@line 116 "parsermodule.c"
        __label__ = 18; break; //@line 116 "parsermodule.c"
      case 18: // $bb17
        var $104=$v; //@line 117 "parsermodule.c"
        $0=$104; //@line 117 "parsermodule.c"
        __label__ = 27; break; //@line 117 "parsermodule.c"
      case 19: // $bb18
        var $105=$9; //@line 119 "parsermodule.c"
        var $106=HEAP[$105]; //@line 119 "parsermodule.c"
        var $107=($106) <= 255; //@line 119 "parsermodule.c"
        if ($107) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 119 "parsermodule.c"
      case 20: // $bb19
        var $108=$lineno_addr; //@line 120 "parsermodule.c"
        var $109=$col_offset_addr; //@line 120 "parsermodule.c"
        var $110=($108) + 2; //@line 120 "parsermodule.c"
        var $111=($110) + ($109); //@line 120 "parsermodule.c"
        var $112=$mkseq_addr; //@line 120 "parsermodule.c"
        var $113=FUNCTION_TABLE[$112]($111); //@line 120 "parsermodule.c"
        $result=$113; //@line 120 "parsermodule.c"
        var $114=$result; //@line 121 "parsermodule.c"
        var $115=($114)!=0; //@line 121 "parsermodule.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 121 "parsermodule.c"
      case 21: // $bb20
        var $116=$n_addr; //@line 122 "parsermodule.c"
        var $117=$116; //@line 122 "parsermodule.c"
        var $118=HEAP[$117]; //@line 122 "parsermodule.c"
        var $119=($118); //@line 122 "parsermodule.c"
        var $120=_PyInt_FromLong($119); //@line 122 "parsermodule.c"
        var $121=$addelem_addr; //@line 122 "parsermodule.c"
        var $122=$result; //@line 122 "parsermodule.c"
        var $123=FUNCTION_TABLE[$121]($122, 0, $120); //@line 122 "parsermodule.c"
        var $124=$n_addr; //@line 123 "parsermodule.c"
        var $125=$124+4; //@line 123 "parsermodule.c"
        var $126=HEAP[$125]; //@line 123 "parsermodule.c"
        var $127=_PyString_FromString($126); //@line 123 "parsermodule.c"
        var $128=$addelem_addr; //@line 123 "parsermodule.c"
        var $129=$result; //@line 123 "parsermodule.c"
        var $130=FUNCTION_TABLE[$128]($129, 1, $127); //@line 123 "parsermodule.c"
        var $131=$lineno_addr; //@line 124 "parsermodule.c"
        var $132=($131)==1; //@line 124 "parsermodule.c"
        if ($132) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 124 "parsermodule.c"
      case 22: // $bb21
        var $133=$n_addr; //@line 125 "parsermodule.c"
        var $134=$133+8; //@line 125 "parsermodule.c"
        var $135=HEAP[$134]; //@line 125 "parsermodule.c"
        var $136=_PyInt_FromLong($135); //@line 125 "parsermodule.c"
        var $137=$addelem_addr; //@line 125 "parsermodule.c"
        var $138=$result; //@line 125 "parsermodule.c"
        var $139=FUNCTION_TABLE[$137]($138, 2, $136); //@line 125 "parsermodule.c"
        __label__ = 23; break; //@line 125 "parsermodule.c"
      case 23: // $bb22
        var $140=$col_offset_addr; //@line 126 "parsermodule.c"
        var $141=($140)==1; //@line 126 "parsermodule.c"
        if ($141) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 126 "parsermodule.c"
      case 24: // $bb23
        var $142=$n_addr; //@line 127 "parsermodule.c"
        var $143=$142+12; //@line 127 "parsermodule.c"
        var $144=HEAP[$143]; //@line 127 "parsermodule.c"
        var $145=_PyInt_FromLong($144); //@line 127 "parsermodule.c"
        var $146=$addelem_addr; //@line 127 "parsermodule.c"
        var $147=$result; //@line 127 "parsermodule.c"
        var $148=FUNCTION_TABLE[$146]($147, 3, $145); //@line 127 "parsermodule.c"
        __label__ = 25; break; //@line 127 "parsermodule.c"
      case 25: // $bb24
        var $149=$result; //@line 129 "parsermodule.c"
        $0=$149; //@line 129 "parsermodule.c"
        __label__ = 27; break; //@line 129 "parsermodule.c"
      case 26: // $bb25
        var $150=HEAP[_PyExc_SystemError]; //@line 132 "parsermodule.c"
        _PyErr_SetString($150, __str); //@line 132 "parsermodule.c"
        $0=0; //@line 134 "parsermodule.c"
        __label__ = 27; break; //@line 134 "parsermodule.c"
      case 27: // $bb26
        var $151=$0; //@line 90 "parsermodule.c"
        $retval=$151; //@line 90 "parsermodule.c"
        var $retval27=$retval; //@line 90 "parsermodule.c"
        ;
        return $retval27; //@line 90 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare_nodes($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        var $j;
        var $v;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 212 "parsermodule.c"
        var $2=$1; //@line 212 "parsermodule.c"
        var $3=HEAP[$2]; //@line 212 "parsermodule.c"
        var $4=$right_addr; //@line 212 "parsermodule.c"
        var $5=$4; //@line 212 "parsermodule.c"
        var $6=HEAP[$5]; //@line 212 "parsermodule.c"
        var $7=($3) < ($6); //@line 212 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 212 "parsermodule.c"
      case 1: // $bb
        $0=-1; //@line 213 "parsermodule.c"
        __label__ = 16; break; //@line 213 "parsermodule.c"
      case 2: // $bb1
        var $8=$right_addr; //@line 215 "parsermodule.c"
        var $9=$8; //@line 215 "parsermodule.c"
        var $10=HEAP[$9]; //@line 215 "parsermodule.c"
        var $11=$left_addr; //@line 215 "parsermodule.c"
        var $12=$11; //@line 215 "parsermodule.c"
        var $13=HEAP[$12]; //@line 215 "parsermodule.c"
        var $14=($10) < ($13); //@line 215 "parsermodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 215 "parsermodule.c"
      case 3: // $bb2
        $0=1; //@line 216 "parsermodule.c"
        __label__ = 16; break; //@line 216 "parsermodule.c"
      case 4: // $bb3
        var $15=$left_addr; //@line 218 "parsermodule.c"
        var $16=$15; //@line 218 "parsermodule.c"
        var $17=HEAP[$16]; //@line 218 "parsermodule.c"
        var $18=($17) <= 255; //@line 218 "parsermodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 218 "parsermodule.c"
      case 5: // $bb4
        var $19=$right_addr; //@line 219 "parsermodule.c"
        var $20=$19+4; //@line 219 "parsermodule.c"
        var $21=HEAP[$20]; //@line 219 "parsermodule.c"
        var $22=$left_addr; //@line 219 "parsermodule.c"
        var $23=$22+4; //@line 219 "parsermodule.c"
        var $24=HEAP[$23]; //@line 219 "parsermodule.c"
        var $25=_strcmp($24, $21); //@line 219 "parsermodule.c"
        $0=$25; //@line 219 "parsermodule.c"
        __label__ = 16; break; //@line 219 "parsermodule.c"
      case 6: // $bb5
        var $26=$left_addr; //@line 221 "parsermodule.c"
        var $27=$26+16; //@line 221 "parsermodule.c"
        var $28=HEAP[$27]; //@line 221 "parsermodule.c"
        var $29=$right_addr; //@line 221 "parsermodule.c"
        var $30=$29+16; //@line 221 "parsermodule.c"
        var $31=HEAP[$30]; //@line 221 "parsermodule.c"
        var $32=($28) < ($31); //@line 221 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 221 "parsermodule.c"
      case 7: // $bb6
        $0=-1; //@line 222 "parsermodule.c"
        __label__ = 16; break; //@line 222 "parsermodule.c"
      case 8: // $bb7
        var $33=$right_addr; //@line 224 "parsermodule.c"
        var $34=$33+16; //@line 224 "parsermodule.c"
        var $35=HEAP[$34]; //@line 224 "parsermodule.c"
        var $36=$left_addr; //@line 224 "parsermodule.c"
        var $37=$36+16; //@line 224 "parsermodule.c"
        var $38=HEAP[$37]; //@line 224 "parsermodule.c"
        var $39=($35) < ($38); //@line 224 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 224 "parsermodule.c"
      case 9: // $bb8
        $0=1; //@line 225 "parsermodule.c"
        __label__ = 16; break; //@line 225 "parsermodule.c"
      case 10: // $bb9
        $j=0; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 11: // $bb10
        var $40=$right_addr; //@line 228 "parsermodule.c"
        var $41=$40+20; //@line 228 "parsermodule.c"
        var $42=HEAP[$41]; //@line 228 "parsermodule.c"
        var $43=$j; //@line 228 "parsermodule.c"
        var $44=$42+24*$43; //@line 228 "parsermodule.c"
        var $45=$left_addr; //@line 228 "parsermodule.c"
        var $46=$45+20; //@line 228 "parsermodule.c"
        var $47=HEAP[$46]; //@line 228 "parsermodule.c"
        var $48=$j; //@line 228 "parsermodule.c"
        var $49=$47+24*$48; //@line 228 "parsermodule.c"
        var $50=_parser_compare_nodes($49, $44); //@line 228 "parsermodule.c"
        $v=$50; //@line 228 "parsermodule.c"
        var $51=$v; //@line 230 "parsermodule.c"
        var $52=($51)!=0; //@line 230 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 230 "parsermodule.c"
      case 12: // $bb11
        var $53=$v; //@line 231 "parsermodule.c"
        $0=$53; //@line 231 "parsermodule.c"
        __label__ = 16; break; //@line 231 "parsermodule.c"
      case 13: // $bb12
        var $54=$j; //@line 227 "parsermodule.c"
        var $55=($54) + 1; //@line 227 "parsermodule.c"
        $j=$55; //@line 227 "parsermodule.c"
        __label__ = 14; break; //@line 227 "parsermodule.c"
      case 14: // $bb13
        var $56=$left_addr; //@line 227 "parsermodule.c"
        var $57=$56+16; //@line 227 "parsermodule.c"
        var $58=HEAP[$57]; //@line 227 "parsermodule.c"
        var $59=$j; //@line 227 "parsermodule.c"
        var $60=($58) > ($59); //@line 227 "parsermodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 227 "parsermodule.c"
      case 15: // $bb14
        $0=0; //@line 233 "parsermodule.c"
        __label__ = 16; break; //@line 233 "parsermodule.c"
      case 16: // $bb15
        var $61=$0; //@line 213 "parsermodule.c"
        $retval=$61; //@line 213 "parsermodule.c"
        var $retval16=$retval; //@line 213 "parsermodule.c"
        ;
        return $retval16; //@line 213 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compare($left, $right) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $left_addr;
        var $right_addr;
        var $retval;
        var $0;
        $left_addr=$left;
        $right_addr=$right;
        var $1=$left_addr; //@line 247 "parsermodule.c"
        var $2=$right_addr; //@line 247 "parsermodule.c"
        var $3=($1)==($2); //@line 247 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 247 "parsermodule.c"
      case 1: // $bb
        $0=0; //@line 248 "parsermodule.c"
        __label__ = 6; break; //@line 248 "parsermodule.c"
      case 2: // $bb1
        var $4=$left_addr; //@line 250 "parsermodule.c"
        var $5=($4)==0; //@line 250 "parsermodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 250 "parsermodule.c"
      case 3: // $bb2
        var $6=$right_addr; //@line 250 "parsermodule.c"
        var $7=($6)==0; //@line 250 "parsermodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 250 "parsermodule.c"
      case 4: // $bb3
        $0=-1; //@line 251 "parsermodule.c"
        __label__ = 6; break; //@line 251 "parsermodule.c"
      case 5: // $bb4
        var $8=$right_addr; //@line 253 "parsermodule.c"
        var $9=$8+8; //@line 253 "parsermodule.c"
        var $10=HEAP[$9]; //@line 253 "parsermodule.c"
        var $11=$left_addr; //@line 253 "parsermodule.c"
        var $12=$11+8; //@line 253 "parsermodule.c"
        var $13=HEAP[$12]; //@line 253 "parsermodule.c"
        var $14=_parser_compare_nodes($13, $10); //@line 253 "parsermodule.c"
        $0=$14; //@line 253 "parsermodule.c"
        __label__ = 6; break; //@line 253 "parsermodule.c"
      case 6: // $bb5
        var $15=$0; //@line 248 "parsermodule.c"
        $retval=$15; //@line 248 "parsermodule.c"
        var $retval6=$retval; //@line 248 "parsermodule.c"
        ;
        return $retval6; //@line 248 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_free($st) {
    ;
    var __label__;
  
    var $st_addr;
    $st_addr=$st;
    var $0=$st_addr; //@line 289 "parsermodule.c"
    var $1=$0+8; //@line 289 "parsermodule.c"
    var $2=HEAP[$1]; //@line 289 "parsermodule.c"
    _PyNode_Free($2); //@line 289 "parsermodule.c"
    var $3=$st_addr; //@line 290 "parsermodule.c"
    var $4=$3; //@line 290 "parsermodule.c"
    _PyObject_Free($4); //@line 290 "parsermodule.c"
    ;
    return; //@line 291 "parsermodule.c"
  }
  

  function _parser_st2tuple($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $line_option=__stackBase__+4;
        var $col_option=__stackBase__+8;
        var $res;
        var $ok;
        var $lineno;
        var $col_offset;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$line_option]=0; //@line 303 "parsermodule.c"
        HEAP[$col_option]=0; //@line 304 "parsermodule.c"
        $res=0; //@line 305 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 310 "parsermodule.c"
        var $2=($1)==0; //@line 310 "parsermodule.c"
        var $3=$args_addr; //@line 311 "parsermodule.c"
        var $4=$kw_addr; //@line 311 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 310 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str3, _keywords_9402, _PyST_Type, $self_addr, $line_option, $col_option); //@line 311 "parsermodule.c"
        $ok=$5; //@line 311 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 311 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str7, _keywords_9402+4, $line_option, $col_option); //@line 316 "parsermodule.c"
        $ok=$6; //@line 316 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 316 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 318 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 318 "parsermodule.c"
      case 4: // $bb3
        $lineno=0; //@line 319 "parsermodule.c"
        $col_offset=0; //@line 320 "parsermodule.c"
        var $9=HEAP[$line_option]; //@line 321 "parsermodule.c"
        var $10=($9)!=0; //@line 321 "parsermodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 321 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$line_option]; //@line 322 "parsermodule.c"
        var $12=_PyObject_IsTrue($11); //@line 322 "parsermodule.c"
        var $13=($12)!=0; //@line 322 "parsermodule.c"
        var $14=($13); //@line 322 "parsermodule.c"
        $lineno=$14; //@line 322 "parsermodule.c"
        __label__ = 6; break; //@line 322 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$col_option]; //@line 324 "parsermodule.c"
        var $16=($15)!=0; //@line 324 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 324 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$col_option]; //@line 325 "parsermodule.c"
        var $18=_PyObject_IsTrue($17); //@line 325 "parsermodule.c"
        var $19=($18)!=0; //@line 325 "parsermodule.c"
        var $20=($19); //@line 325 "parsermodule.c"
        $col_offset=$20; //@line 325 "parsermodule.c"
        __label__ = 8; break; //@line 325 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$self_addr]; //@line 331 "parsermodule.c"
        var $22=$21+8; //@line 331 "parsermodule.c"
        var $23=HEAP[$22]; //@line 331 "parsermodule.c"
        var $24=$lineno; //@line 331 "parsermodule.c"
        var $25=$col_offset; //@line 331 "parsermodule.c"
        var $26=_node2tuple($23, (FUNCTION_TABLE_OFFSET + 2), (FUNCTION_TABLE_OFFSET + 4), $24, $25); //@line 331 "parsermodule.c"
        $res=$26; //@line 331 "parsermodule.c"
        __label__ = 9; break; //@line 331 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 334 "parsermodule.c"
        $0=$27; //@line 334 "parsermodule.c"
        var $28=$0; //@line 334 "parsermodule.c"
        $retval=$28; //@line 334 "parsermodule.c"
        var $retval9=$retval; //@line 334 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 334 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2tuple($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 340 "parsermodule.c"
        var $2=($1)!=0; //@line 340 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 340 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str8, 1); //@line 340 "parsermodule.c"
        var $5=($4) < 0; //@line 340 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 340 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 341 "parsermodule.c"
        __label__ = 4; break; //@line 341 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 342 "parsermodule.c"
        var $7=$args_addr; //@line 342 "parsermodule.c"
        var $8=$kw_addr; //@line 342 "parsermodule.c"
        var $9=_parser_st2tuple($6, $7, $8); //@line 342 "parsermodule.c"
        $0=$9; //@line 342 "parsermodule.c"
        __label__ = 4; break; //@line 342 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 341 "parsermodule.c"
        $retval=$10; //@line 341 "parsermodule.c"
        var $retval4=$retval; //@line 341 "parsermodule.c"
        ;
        return $retval4; //@line 341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_st2list($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $line_option=__stackBase__+4;
        var $col_option=__stackBase__+8;
        var $res;
        var $ok;
        var $lineno;
        var $col_offset;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        HEAP[$line_option]=0; //@line 355 "parsermodule.c"
        HEAP[$col_option]=0; //@line 356 "parsermodule.c"
        $res=0; //@line 357 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 362 "parsermodule.c"
        var $2=($1)==0; //@line 362 "parsermodule.c"
        var $3=$args_addr; //@line 363 "parsermodule.c"
        var $4=$kw_addr; //@line 363 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 362 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str9, _keywords_9452, _PyST_Type, $self_addr, $line_option, $col_option); //@line 363 "parsermodule.c"
        $ok=$5; //@line 363 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 363 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str10, _keywords_9452+4, $line_option, $col_option); //@line 367 "parsermodule.c"
        $ok=$6; //@line 367 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 367 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 369 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 369 "parsermodule.c"
      case 4: // $bb3
        $lineno=0; //@line 370 "parsermodule.c"
        $col_offset=0; //@line 371 "parsermodule.c"
        var $9=HEAP[$line_option]; //@line 372 "parsermodule.c"
        var $10=($9)!=0; //@line 372 "parsermodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 372 "parsermodule.c"
      case 5: // $bb4
        var $11=HEAP[$line_option]; //@line 373 "parsermodule.c"
        var $12=_PyObject_IsTrue($11); //@line 373 "parsermodule.c"
        var $13=($12)!=0; //@line 373 "parsermodule.c"
        var $14=($13); //@line 373 "parsermodule.c"
        $lineno=$14; //@line 373 "parsermodule.c"
        __label__ = 6; break; //@line 373 "parsermodule.c"
      case 6: // $bb5
        var $15=HEAP[$col_option]; //@line 375 "parsermodule.c"
        var $16=($15)!=0; //@line 375 "parsermodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 375 "parsermodule.c"
      case 7: // $bb6
        var $17=HEAP[$col_option]; //@line 376 "parsermodule.c"
        var $18=_PyObject_IsTrue($17); //@line 376 "parsermodule.c"
        var $19=($18)!=0; //@line 376 "parsermodule.c"
        var $20=($19); //@line 376 "parsermodule.c"
        $col_offset=$20; //@line 376 "parsermodule.c"
        __label__ = 8; break; //@line 376 "parsermodule.c"
      case 8: // $bb7
        var $21=HEAP[$self_addr]; //@line 382 "parsermodule.c"
        var $22=$21+8; //@line 382 "parsermodule.c"
        var $23=HEAP[$22]; //@line 382 "parsermodule.c"
        var $24=$lineno; //@line 382 "parsermodule.c"
        var $25=$col_offset; //@line 382 "parsermodule.c"
        var $26=_node2tuple($23, (FUNCTION_TABLE_OFFSET + 6), (FUNCTION_TABLE_OFFSET + 8), $24, $25); //@line 382 "parsermodule.c"
        $res=$26; //@line 382 "parsermodule.c"
        __label__ = 9; break; //@line 382 "parsermodule.c"
      case 9: // $bb8
        var $27=$res; //@line 385 "parsermodule.c"
        $0=$27; //@line 385 "parsermodule.c"
        var $28=$0; //@line 385 "parsermodule.c"
        $retval=$28; //@line 385 "parsermodule.c"
        var $retval9=$retval; //@line 385 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 385 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_ast2list($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 391 "parsermodule.c"
        var $2=($1)!=0; //@line 391 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 391 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str11, 1); //@line 391 "parsermodule.c"
        var $5=($4) < 0; //@line 391 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 391 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 392 "parsermodule.c"
        __label__ = 4; break; //@line 392 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 393 "parsermodule.c"
        var $7=$args_addr; //@line 393 "parsermodule.c"
        var $8=$kw_addr; //@line 393 "parsermodule.c"
        var $9=_parser_st2list($6, $7, $8); //@line 393 "parsermodule.c"
        $0=$9; //@line 393 "parsermodule.c"
        __label__ = 4; break; //@line 393 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 392 "parsermodule.c"
        $retval=$10; //@line 392 "parsermodule.c"
        var $retval4=$retval; //@line 392 "parsermodule.c"
        ;
        return $retval4; //@line 392 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compilest($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $res;
        var $arena;
        var $mod;
        var $str=__stackBase__+4;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 406 "parsermodule.c"
        HEAP[$str]=__str12; //@line 409 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 414 "parsermodule.c"
        var $2=($1)==0; //@line 414 "parsermodule.c"
        var $3=$args_addr; //@line 415 "parsermodule.c"
        var $4=$kw_addr; //@line 415 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 414 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str13, _keywords_9503, _PyST_Type, $self_addr, $str); //@line 415 "parsermodule.c"
        $ok=$5; //@line 415 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 415 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str15, _keywords_9503+4, $str); //@line 418 "parsermodule.c"
        $ok=$6; //@line 418 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 418 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 421 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 421 "parsermodule.c"
      case 4: // $bb3
        var $9=_PyArena_New(); //@line 422 "parsermodule.c"
        $arena=$9; //@line 422 "parsermodule.c"
        var $10=$arena; //@line 423 "parsermodule.c"
        var $11=($10)!=0; //@line 423 "parsermodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 423 "parsermodule.c"
      case 5: // $bb4
        var $12=HEAP[$str]; //@line 424 "parsermodule.c"
        var $13=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $14=$13+16; //@line 424 "parsermodule.c"
        var $15=HEAP[$self_addr]; //@line 424 "parsermodule.c"
        var $16=$15+8; //@line 424 "parsermodule.c"
        var $17=HEAP[$16]; //@line 424 "parsermodule.c"
        var $18=$arena; //@line 424 "parsermodule.c"
        var $19=_PyAST_FromNode($17, $14, $12, $18); //@line 424 "parsermodule.c"
        $mod=$19; //@line 424 "parsermodule.c"
        var $20=$mod; //@line 425 "parsermodule.c"
        var $21=($20)!=0; //@line 425 "parsermodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 425 "parsermodule.c"
      case 6: // $bb5
        var $22=HEAP[$self_addr]; //@line 426 "parsermodule.c"
        var $23=$22+16; //@line 426 "parsermodule.c"
        var $24=HEAP[$str]; //@line 426 "parsermodule.c"
        var $25=$mod; //@line 426 "parsermodule.c"
        var $26=$arena; //@line 426 "parsermodule.c"
        var $27=_PyAST_Compile($25, $24, $23, $26); //@line 426 "parsermodule.c"
        var $28=$27; //@line 426 "parsermodule.c"
        $res=$28; //@line 426 "parsermodule.c"
        __label__ = 7; break; //@line 426 "parsermodule.c"
      case 7: // $bb6
        var $29=$arena; //@line 428 "parsermodule.c"
        _PyArena_Free($29); //@line 428 "parsermodule.c"
        __label__ = 8; break; //@line 428 "parsermodule.c"
      case 8: // $bb7
        var $30=$res; //@line 432 "parsermodule.c"
        $0=$30; //@line 432 "parsermodule.c"
        var $31=$0; //@line 432 "parsermodule.c"
        $retval=$31; //@line 432 "parsermodule.c"
        var $retval8=$retval; //@line 432 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 432 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_compileast($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 438 "parsermodule.c"
        var $2=($1)!=0; //@line 438 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 438 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str16, 1); //@line 438 "parsermodule.c"
        var $5=($4) < 0; //@line 438 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 438 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 439 "parsermodule.c"
        __label__ = 4; break; //@line 439 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 440 "parsermodule.c"
        var $7=$args_addr; //@line 440 "parsermodule.c"
        var $8=$kw_addr; //@line 440 "parsermodule.c"
        var $9=_parser_compilest($6, $7, $8); //@line 440 "parsermodule.c"
        $0=$9; //@line 440 "parsermodule.c"
        __label__ = 4; break; //@line 440 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 439 "parsermodule.c"
        $retval=$10; //@line 439 "parsermodule.c"
        var $retval4=$retval; //@line 439 "parsermodule.c"
        ;
        return $retval4; //@line 439 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_isexpr($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_26;
        var $res;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 454 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 459 "parsermodule.c"
        var $2=($1)==0; //@line 459 "parsermodule.c"
        var $3=$args_addr; //@line 460 "parsermodule.c"
        var $4=$kw_addr; //@line 460 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 459 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str17, _keywords_9551, _PyST_Type, $self_addr); //@line 460 "parsermodule.c"
        $ok=$5; //@line 460 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 460 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str18, _keywords_9551+4); //@line 463 "parsermodule.c"
        $ok=$6; //@line 463 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 463 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 465 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 465 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 467 "parsermodule.c"
        var $10=$9+12; //@line 467 "parsermodule.c"
        var $11=HEAP[$10]; //@line 467 "parsermodule.c"
        var $12=($11)==1; //@line 467 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 467 "parsermodule.c"
      case 5: // $bb4
        $iftmp_26=__Py_TrueStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 6: // $bb5
        $iftmp_26=__Py_ZeroStruct; //@line 467 "parsermodule.c"
        __label__ = 7; break; //@line 467 "parsermodule.c"
      case 7: // $bb6
        var $13=$iftmp_26; //@line 467 "parsermodule.c"
        $res=$13; //@line 467 "parsermodule.c"
        var $14=$res; //@line 468 "parsermodule.c"
        var $15=$14; //@line 468 "parsermodule.c"
        var $16=HEAP[$15]; //@line 468 "parsermodule.c"
        var $17=($16) + 1; //@line 468 "parsermodule.c"
        var $18=$res; //@line 468 "parsermodule.c"
        var $19=$18; //@line 468 "parsermodule.c"
        HEAP[$19]=$17; //@line 468 "parsermodule.c"
        __label__ = 8; break; //@line 468 "parsermodule.c"
      case 8: // $bb7
        var $20=$res; //@line 470 "parsermodule.c"
        $0=$20; //@line 470 "parsermodule.c"
        var $21=$0; //@line 470 "parsermodule.c"
        $retval=$21; //@line 470 "parsermodule.c"
        var $retval8=$retval; //@line 470 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 470 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_issuite($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        var $iftmp_29;
        var $res;
        var $ok;
        HEAP[$self_addr]=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $res=0; //@line 477 "parsermodule.c"
        var $1=HEAP[$self_addr]; //@line 482 "parsermodule.c"
        var $2=($1)==0; //@line 482 "parsermodule.c"
        var $3=$args_addr; //@line 483 "parsermodule.c"
        var $4=$kw_addr; //@line 483 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 482 "parsermodule.c"
      case 1: // $bb
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str19, _keywords_9577, _PyST_Type, $self_addr); //@line 483 "parsermodule.c"
        $ok=$5; //@line 483 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 483 "parsermodule.c"
      case 2: // $bb1
        var $6=_PyArg_ParseTupleAndKeywords($3, $4, __str20, _keywords_9577+4); //@line 486 "parsermodule.c"
        $ok=$6; //@line 486 "parsermodule.c"
        __lastLabel__ = 2; __label__ = 3; break; //@line 486 "parsermodule.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $6 : ($5);
        var $8=($7)!=0; //@line 488 "parsermodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 488 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 490 "parsermodule.c"
        var $10=$9+12; //@line 490 "parsermodule.c"
        var $11=HEAP[$10]; //@line 490 "parsermodule.c"
        var $12=($11)==1; //@line 490 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 490 "parsermodule.c"
      case 5: // $bb4
        $iftmp_29=__Py_ZeroStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 6: // $bb5
        $iftmp_29=__Py_TrueStruct; //@line 490 "parsermodule.c"
        __label__ = 7; break; //@line 490 "parsermodule.c"
      case 7: // $bb6
        var $13=$iftmp_29; //@line 490 "parsermodule.c"
        $res=$13; //@line 490 "parsermodule.c"
        var $14=$res; //@line 491 "parsermodule.c"
        var $15=$14; //@line 491 "parsermodule.c"
        var $16=HEAP[$15]; //@line 491 "parsermodule.c"
        var $17=($16) + 1; //@line 491 "parsermodule.c"
        var $18=$res; //@line 491 "parsermodule.c"
        var $19=$18; //@line 491 "parsermodule.c"
        HEAP[$19]=$17; //@line 491 "parsermodule.c"
        __label__ = 8; break; //@line 491 "parsermodule.c"
      case 8: // $bb7
        var $20=$res; //@line 493 "parsermodule.c"
        $0=$20; //@line 493 "parsermodule.c"
        var $21=$0; //@line 493 "parsermodule.c"
        $retval=$21; //@line 493 "parsermodule.c"
        var $retval8=$retval; //@line 493 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 493 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_getattr($self, $name) {
    ;
    var __label__;
  
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $name_addr=$name;
    var $1=$self_addr; //@line 519 "parsermodule.c"
    var $2=$name_addr; //@line 519 "parsermodule.c"
    var $3=_Py_FindMethod(_parser_methods, $1, $2); //@line 519 "parsermodule.c"
    $0=$3; //@line 519 "parsermodule.c"
    var $4=$0; //@line 519 "parsermodule.c"
    $retval=$4; //@line 519 "parsermodule.c"
    var $retval1=$retval; //@line 519 "parsermodule.c"
    ;
    return $retval1; //@line 519 "parsermodule.c"
  }
  

  function _parser_do_parse($args, $kw, $argspec, $type) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $st_addr_i;
        var $type_addr_i;
        var $retval_i;
        var $0;
        var $o_i;
        var $args_addr;
        var $kw_addr;
        var $argspec_addr;
        var $type_addr;
        var $retval;
        var $1;
        var $iftmp_32;
        var $string=__stackBase__;
        var $res;
        var $flags=__stackBase__+4;
        var $err=__stackBase__+8;
        var $n;
        $args_addr=$args;
        $kw_addr=$kw;
        $argspec_addr=$argspec;
        $type_addr=$type;
        HEAP[$string]=0; //@line 544 "parsermodule.c"
        $res=0; //@line 545 "parsermodule.c"
        HEAP[$flags]=0; //@line 546 "parsermodule.c"
        var $2=$args_addr; //@line 551 "parsermodule.c"
        var $3=$kw_addr; //@line 551 "parsermodule.c"
        var $4=$argspec_addr; //@line 551 "parsermodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($2, $3, $4, _keywords_9618, $string); //@line 551 "parsermodule.c"
        var $6=($5)!=0; //@line 551 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 551 "parsermodule.c"
      case 1: // $bb
        var $7=$type_addr; //@line 556 "parsermodule.c"
        var $8=($7)==1; //@line 556 "parsermodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 556 "parsermodule.c"
      case 2: // $bb1
        $iftmp_32=258; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 3: // $bb2
        $iftmp_32=257; //@line 556 "parsermodule.c"
        __label__ = 4; break; //@line 556 "parsermodule.c"
      case 4: // $bb3
        var $9=HEAP[$string]; //@line 556 "parsermodule.c"
        var $10=$iftmp_32; //@line 556 "parsermodule.c"
        var $11=_PyParser_ParseStringFlagsFilenameEx($9, 0, __PyParser_Grammar, $10, $err, $flags); //@line 556 "parsermodule.c"
        $n=$11; //@line 556 "parsermodule.c"
        var $12=($11)!=0; //@line 558 "parsermodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 558 "parsermodule.c"
      case 5: // $bb4
        var $13=$n; //@line 559 "parsermodule.c"
        var $14=$type_addr; //@line 559 "parsermodule.c"
        $st_addr_i=$13;
        $type_addr_i=$14;
        var $15=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $16=$15; //@line 267 "parsermodule.c"
        $o_i=$16; //@line 267 "parsermodule.c"
        var $17=$o_i; //@line 269 "parsermodule.c"
        var $18=($17)!=0; //@line 269 "parsermodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 269 "parsermodule.c"
      case 6: // $bb_i
        var $19=$o_i; //@line 270 "parsermodule.c"
        var $20=$19+8; //@line 270 "parsermodule.c"
        var $21=$st_addr_i; //@line 270 "parsermodule.c"
        HEAP[$20]=$21; //@line 270 "parsermodule.c"
        var $22=$o_i; //@line 271 "parsermodule.c"
        var $23=$22+12; //@line 271 "parsermodule.c"
        var $24=$type_addr_i; //@line 271 "parsermodule.c"
        HEAP[$23]=$24; //@line 271 "parsermodule.c"
        var $25=$o_i; //@line 272 "parsermodule.c"
        var $26=$25+16; //@line 272 "parsermodule.c"
        var $27=$26; //@line 272 "parsermodule.c"
        HEAP[$27]=0; //@line 272 "parsermodule.c"
        __label__ = 8; break; //@line 272 "parsermodule.c"
      case 7: // $bb1_i
        var $28=$st_addr_i; //@line 275 "parsermodule.c"
        _PyNode_Free($28); //@line 275 "parsermodule.c"
        __label__ = 8; break; //@line 275 "parsermodule.c"
      case 8: // $parser_newstobject_exit
        var $29=$o_i; //@line 277 "parsermodule.c"
        var $30=$29; //@line 277 "parsermodule.c"
        $0=$30; //@line 277 "parsermodule.c"
        $retval_i=$30; //@line 277 "parsermodule.c"
        $res=$30; //@line 559 "parsermodule.c"
        var $31=($30)!=0; //@line 560 "parsermodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 560 "parsermodule.c"
      case 9: // $bb5
        var $32=$res; //@line 561 "parsermodule.c"
        var $33=$32; //@line 561 "parsermodule.c"
        var $34=HEAP[$flags]; //@line 561 "parsermodule.c"
        var $35=($34) & 253952; //@line 561 "parsermodule.c"
        var $36=$33+16; //@line 561 "parsermodule.c"
        var $37=$36; //@line 561 "parsermodule.c"
        HEAP[$37]=$35; //@line 561 "parsermodule.c"
        __label__ = 11; break; //@line 561 "parsermodule.c"
      case 10: // $bb7
        _PyParser_SetError($err); //@line 564 "parsermodule.c"
        __label__ = 11; break; //@line 564 "parsermodule.c"
      case 11: // $bb8
        var $38=$res; //@line 566 "parsermodule.c"
        $1=$38; //@line 566 "parsermodule.c"
        var $39=$1; //@line 566 "parsermodule.c"
        $retval=$39; //@line 566 "parsermodule.c"
        var $retval9=$retval; //@line 566 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 566 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_expr($self, $args, $kw) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $kw_addr=$kw;
    var $1=$args_addr; //@line 582 "parsermodule.c"
    var $2=$kw_addr; //@line 582 "parsermodule.c"
    var $3=_parser_do_parse($1, $2, __str32, 1); //@line 582 "parsermodule.c"
    $0=$3; //@line 582 "parsermodule.c"
    var $4=$0; //@line 582 "parsermodule.c"
    $retval=$4; //@line 582 "parsermodule.c"
    var $retval1=$retval; //@line 582 "parsermodule.c"
    ;
    return $retval1; //@line 582 "parsermodule.c"
  }
  

  function _parser_suite($self, $args, $kw) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $kw_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    $kw_addr=$kw;
    var $1=$args_addr; //@line 590 "parsermodule.c"
    var $2=$kw_addr; //@line 590 "parsermodule.c"
    var $3=_parser_do_parse($1, $2, __str33, 2); //@line 590 "parsermodule.c"
    $0=$3; //@line 590 "parsermodule.c"
    var $4=$0; //@line 590 "parsermodule.c"
    $retval=$4; //@line 590 "parsermodule.c"
    var $retval1=$retval; //@line 590 "parsermodule.c"
    ;
    return $retval1; //@line 590 "parsermodule.c"
  }
  

  function _parser_tuple2st($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i37;
        var $message_addr_i;
        var $st_addr_i28;
        var $type_addr_i29;
        var $retval_i30;
        var $0;
        var $o_i31;
        var $message_addr_i_i19;
        var $tree_addr_i20;
        var $retval_i21;
        var $1;
        var $iftmp_214_i;
        var $nch_i;
        var $res_i22;
        var $st_addr_i10;
        var $type_addr_i11;
        var $retval_i12;
        var $2;
        var $o_i13;
        var $st_addr_i;
        var $type_addr_i;
        var $retval_i5;
        var $3;
        var $o_i;
        var $message_addr_i_i;
        var $n_addr_i9_i_i;
        var $t_addr_i10_i_i;
        var $retval_i11_i_i;
        var $4;
        var $n_addr_i2_i_i;
        var $t_addr_i3_i_i;
        var $retval_i4_i_i;
        var $5;
        var $tree_addr_i_i_i;
        var $retval_i1_i_i;
        var $6;
        var $n_addr_i_i_i;
        var $t_addr_i_i_i;
        var $retval_i_i_i;
        var $7;
        var $tree_addr_i_i;
        var $retval_i_i;
        var $8;
        var $iftmp_208_i_i;
        var $pos_i_i;
        var $nch_i_i;
        var $res_i_i;
        var $tree_addr_i;
        var $retval_i1;
        var $9;
        var $res_i2;
        var $tuple_addr_i;
        var $retval_i;
        var $10;
        var $iftmp_56_i;
        var $iftmp_55_i;
        var $res_i;
        var $temp_i;
        var $num_i;
        var $line_num_i=__stackBase__;
        var $encoding_i;
        var $len_i;
        var $err_i;
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $11;
        var $st;
        var $tuple=__stackBase__+4;
        var $tree;
        var $start_sym;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        $st=0; //@line 634 "parsermodule.c"
        var $12=$args_addr; //@line 640 "parsermodule.c"
        var $13=$kw_addr; //@line 640 "parsermodule.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str34, _keywords_9672, $tuple); //@line 640 "parsermodule.c"
        var $15=($14)==0; //@line 640 "parsermodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 640 "parsermodule.c"
      case 1: // $bb
        $11=0; //@line 642 "parsermodule.c"
        __label__ = 89; break; //@line 642 "parsermodule.c"
      case 2: // $bb1
        var $16=HEAP[$tuple]; //@line 643 "parsermodule.c"
        var $17=_PySequence_Check($16); //@line 643 "parsermodule.c"
        var $18=($17)==0; //@line 643 "parsermodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 643 "parsermodule.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 644 "parsermodule.c"
        _PyErr_SetString($19, __str36); //@line 644 "parsermodule.c"
        $11=0; //@line 646 "parsermodule.c"
        __label__ = 89; break; //@line 646 "parsermodule.c"
      case 4: // $bb3
        var $20=HEAP[$tuple]; //@line 651 "parsermodule.c"
        $tuple_addr_i=$20;
        $res_i=0; //@line 827 "parsermodule.c"
        var $21=$tuple_addr_i; //@line 828 "parsermodule.c"
        var $22=_PySequence_GetItem($21, 0); //@line 828 "parsermodule.c"
        $temp_i=$22; //@line 828 "parsermodule.c"
        $num_i=-1; //@line 829 "parsermodule.c"
        var $23=$temp_i; //@line 831 "parsermodule.c"
        var $24=($23)!=0; //@line 831 "parsermodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 831 "parsermodule.c"
      case 5: // $bb1_i
        var $25=$temp_i; //@line 832 "parsermodule.c"
        var $26=_PyInt_AsLong($25); //@line 832 "parsermodule.c"
        $num_i=$26; //@line 832 "parsermodule.c"
        var $_pr_i=$temp_i;
        var $27=($_pr_i)!=0; //@line 833 "parsermodule.c"
        if ($27) { __lastLabel__ = 5; __label__ = 6; break; } else { __lastLabel__ = 5; __label__ = 9; break; } //@line 833 "parsermodule.c"
      case 6: // $bb2_i
        var $28=$temp_i; //@line 833 "parsermodule.c"
        var $29=$28; //@line 833 "parsermodule.c"
        var $30=HEAP[$29]; //@line 833 "parsermodule.c"
        var $31=($30) - 1; //@line 833 "parsermodule.c"
        var $32=$temp_i; //@line 833 "parsermodule.c"
        var $33=$32; //@line 833 "parsermodule.c"
        HEAP[$33]=$31; //@line 833 "parsermodule.c"
        var $34=$temp_i; //@line 833 "parsermodule.c"
        var $35=$34; //@line 833 "parsermodule.c"
        var $36=HEAP[$35]; //@line 833 "parsermodule.c"
        var $37=($36)==0; //@line 833 "parsermodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 833 "parsermodule.c"
      case 7: // $bb3_i
        var $38=$temp_i; //@line 833 "parsermodule.c"
        var $39=$38+4; //@line 833 "parsermodule.c"
        var $40=HEAP[$39]; //@line 833 "parsermodule.c"
        var $41=$40+24; //@line 833 "parsermodule.c"
        var $42=HEAP[$41]; //@line 833 "parsermodule.c"
        var $43=$temp_i; //@line 833 "parsermodule.c"
        FUNCTION_TABLE[$42]($43); //@line 833 "parsermodule.c"
        __label__ = 8; break; //@line 833 "parsermodule.c"
      case 8: // $bb4thread_pre_split_i
        var $_pr1_i=$num_i;
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb4_i
        var $44=__lastLabel__ == 8 ? $_pr1_i : ($26);
        var $45=($44) <= 255; //@line 834 "parsermodule.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 834 "parsermodule.c"
      case 10: // $bb5_i
        var $46=$tuple_addr_i; //@line 839 "parsermodule.c"
        var $47=_Py_BuildValue(__str40, $46, __str47); //@line 839 "parsermodule.c"
        $tuple_addr_i=$47; //@line 839 "parsermodule.c"
        var $48=HEAP[_parser_error]; //@line 841 "parsermodule.c"
        var $49=$tuple_addr_i; //@line 841 "parsermodule.c"
        _PyErr_SetObject($48, $49); //@line 841 "parsermodule.c"
        var $50=$tuple_addr_i; //@line 842 "parsermodule.c"
        var $51=($50)!=0; //@line 842 "parsermodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 37; break; } //@line 842 "parsermodule.c"
      case 11: // $bb6_i
        var $52=$tuple_addr_i; //@line 842 "parsermodule.c"
        var $53=$52; //@line 842 "parsermodule.c"
        var $54=HEAP[$53]; //@line 842 "parsermodule.c"
        var $55=($54) - 1; //@line 842 "parsermodule.c"
        var $56=$tuple_addr_i; //@line 842 "parsermodule.c"
        var $57=$56; //@line 842 "parsermodule.c"
        HEAP[$57]=$55; //@line 842 "parsermodule.c"
        var $58=$tuple_addr_i; //@line 842 "parsermodule.c"
        var $59=$58; //@line 842 "parsermodule.c"
        var $60=HEAP[$59]; //@line 842 "parsermodule.c"
        var $61=($60)==0; //@line 842 "parsermodule.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 37; break; } //@line 842 "parsermodule.c"
      case 12: // $bb7_i
        var $62=$tuple_addr_i; //@line 842 "parsermodule.c"
        var $63=$62+4; //@line 842 "parsermodule.c"
        var $64=HEAP[$63]; //@line 842 "parsermodule.c"
        var $65=$64+24; //@line 842 "parsermodule.c"
        var $66=HEAP[$65]; //@line 842 "parsermodule.c"
        var $67=$tuple_addr_i; //@line 842 "parsermodule.c"
        FUNCTION_TABLE[$66]($67); //@line 842 "parsermodule.c"
        __label__ = 37; break; //@line 842 "parsermodule.c"
      case 13: // $bb9_i
        var $68=$num_i; //@line 844 "parsermodule.c"
        var $69=($68) > 255; //@line 844 "parsermodule.c"
        if ($69) { __label__ = 14; break; } else { __label__ = 33; break; } //@line 844 "parsermodule.c"
      case 14: // $bb10_i
        HEAP[$line_num_i]=0; //@line 848 "parsermodule.c"
        $encoding_i=0; //@line 849 "parsermodule.c"
        var $70=$num_i; //@line 851 "parsermodule.c"
        var $71=($70)==339; //@line 851 "parsermodule.c"
        if ($71) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 851 "parsermodule.c"
      case 15: // $bb11_i
        var $72=$tuple_addr_i; //@line 852 "parsermodule.c"
        var $73=_PySequence_GetItem($72, 2); //@line 852 "parsermodule.c"
        $encoding_i=$73; //@line 852 "parsermodule.c"
        var $74=$tuple_addr_i; //@line 854 "parsermodule.c"
        var $75=_PySequence_GetSlice($74, 0, 2); //@line 854 "parsermodule.c"
        $tuple_addr_i=$75; //@line 854 "parsermodule.c"
        __label__ = 16; break; //@line 854 "parsermodule.c"
      case 16: // $bb12_i
        var $76=$num_i; //@line 856 "parsermodule.c"
        var $77=_PyNode_New($76); //@line 856 "parsermodule.c"
        $res_i=$77; //@line 856 "parsermodule.c"
        var $78=($77)!=0; //@line 857 "parsermodule.c"
        if ($78) { __label__ = 17; break; } else { __label__ = 36; break; } //@line 857 "parsermodule.c"
      case 17: // $bb13_i
        var $79=$tuple_addr_i; //@line 858 "parsermodule.c"
        var $80=$res_i; //@line 858 "parsermodule.c"
        var $81=_build_node_children($79, $80, $line_num_i); //@line 858 "parsermodule.c"
        var $82=$res_i; //@line 858 "parsermodule.c"
        var $83=($81)!=($82); //@line 858 "parsermodule.c"
        if ($83) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 858 "parsermodule.c"
      case 18: // $bb15_thread_i
        var $84=$res_i; //@line 859 "parsermodule.c"
        _PyNode_Free($84); //@line 859 "parsermodule.c"
        $res_i=0; //@line 860 "parsermodule.c"
        __label__ = 36; break;
      case 19: // $bb15_i
        var $85=($82)!=0; //@line 862 "parsermodule.c"
        if ($85) { __label__ = 20; break; } else { __label__ = 37; break; } //@line 862 "parsermodule.c"
      case 20: // $bb16_i
        var $86=$encoding_i; //@line 862 "parsermodule.c"
        var $87=($86)!=0; //@line 862 "parsermodule.c"
        if ($87) { __label__ = 21; break; } else { __label__ = 37; break; } //@line 862 "parsermodule.c"
      case 21: // $bb17_i
        var $88=$encoding_i; //@line 864 "parsermodule.c"
        var $89=$88; //@line 864 "parsermodule.c"
        var $90=$89+8; //@line 864 "parsermodule.c"
        var $91=HEAP[$90]; //@line 864 "parsermodule.c"
        var $92=($91) + 1; //@line 864 "parsermodule.c"
        $len_i=$92; //@line 864 "parsermodule.c"
        var $93=$len_i; //@line 865 "parsermodule.c"
        var $94=($93) >= 0; //@line 865 "parsermodule.c"
        if ($94) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 865 "parsermodule.c"
      case 22: // $bb18_i
        var $95=$len_i; //@line 865 "parsermodule.c"
        var $96=($95)!=0; //@line 865 "parsermodule.c"
        if ($96) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 865 "parsermodule.c"
      case 23: // $bb19_i
        var $97=$len_i; //@line 865 "parsermodule.c"
        $iftmp_56_i=$97; //@line 865 "parsermodule.c"
        __label__ = 25; break; //@line 865 "parsermodule.c"
      case 24: // $bb20_i
        $iftmp_56_i=1; //@line 865 "parsermodule.c"
        __label__ = 25; break; //@line 865 "parsermodule.c"
      case 25: // $bb21_i
        var $98=$iftmp_56_i; //@line 865 "parsermodule.c"
        var $99=_malloc($98); //@line 865 "parsermodule.c"
        $iftmp_55_i=$99; //@line 865 "parsermodule.c"
        __label__ = 27; break; //@line 865 "parsermodule.c"
      case 26: // $bb22_i
        $iftmp_55_i=0; //@line 865 "parsermodule.c"
        __label__ = 27; break; //@line 865 "parsermodule.c"
      case 27: // $bb23_i
        var $100=$res_i; //@line 865 "parsermodule.c"
        var $101=$100+4; //@line 865 "parsermodule.c"
        var $102=$iftmp_55_i; //@line 865 "parsermodule.c"
        HEAP[$101]=$102; //@line 865 "parsermodule.c"
        var $103=$res_i; //@line 866 "parsermodule.c"
        var $104=$103+4; //@line 866 "parsermodule.c"
        var $105=HEAP[$104]; //@line 866 "parsermodule.c"
        var $106=($105)!=0; //@line 866 "parsermodule.c"
        if ($106) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 866 "parsermodule.c"
      case 28: // $bb24_i
        var $107=$len_i; //@line 867 "parsermodule.c"
        var $108=$encoding_i; //@line 867 "parsermodule.c"
        var $109=$108; //@line 867 "parsermodule.c"
        var $110=$109+20; //@line 867 "parsermodule.c"
        var $111=$110; //@line 867 "parsermodule.c"
        var $112=$res_i; //@line 867 "parsermodule.c"
        var $113=$112+4; //@line 867 "parsermodule.c"
        var $114=HEAP[$113]; //@line 867 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($114, $111, $107, 1, 0); //@line 867 "parsermodule.c"
        __label__ = 29; break; //@line 867 "parsermodule.c"
      case 29: // $bb25_i
        var $115=$encoding_i; //@line 868 "parsermodule.c"
        var $116=$115; //@line 868 "parsermodule.c"
        var $117=HEAP[$116]; //@line 868 "parsermodule.c"
        var $118=($117) - 1; //@line 868 "parsermodule.c"
        var $119=$encoding_i; //@line 868 "parsermodule.c"
        var $120=$119; //@line 868 "parsermodule.c"
        HEAP[$120]=$118; //@line 868 "parsermodule.c"
        var $121=$encoding_i; //@line 868 "parsermodule.c"
        var $122=$121; //@line 868 "parsermodule.c"
        var $123=HEAP[$122]; //@line 868 "parsermodule.c"
        var $124=($123)==0; //@line 868 "parsermodule.c"
        if ($124) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 868 "parsermodule.c"
      case 30: // $bb26_i
        var $125=$encoding_i; //@line 868 "parsermodule.c"
        var $126=$125+4; //@line 868 "parsermodule.c"
        var $127=HEAP[$126]; //@line 868 "parsermodule.c"
        var $128=$127+24; //@line 868 "parsermodule.c"
        var $129=HEAP[$128]; //@line 868 "parsermodule.c"
        var $130=$encoding_i; //@line 868 "parsermodule.c"
        FUNCTION_TABLE[$129]($130); //@line 868 "parsermodule.c"
        __label__ = 31; break; //@line 868 "parsermodule.c"
      case 31: // $bb27_i
        var $131=$tuple_addr_i; //@line 869 "parsermodule.c"
        var $132=$131; //@line 869 "parsermodule.c"
        var $133=HEAP[$132]; //@line 869 "parsermodule.c"
        var $134=($133) - 1; //@line 869 "parsermodule.c"
        var $135=$tuple_addr_i; //@line 869 "parsermodule.c"
        var $136=$135; //@line 869 "parsermodule.c"
        HEAP[$136]=$134; //@line 869 "parsermodule.c"
        var $137=$tuple_addr_i; //@line 869 "parsermodule.c"
        var $138=$137; //@line 869 "parsermodule.c"
        var $139=HEAP[$138]; //@line 869 "parsermodule.c"
        var $140=($139)==0; //@line 869 "parsermodule.c"
        if ($140) { __label__ = 32; break; } else { __label__ = 37; break; } //@line 869 "parsermodule.c"
      case 32: // $bb28_i
        var $141=$tuple_addr_i; //@line 869 "parsermodule.c"
        var $142=$141+4; //@line 869 "parsermodule.c"
        var $143=HEAP[$142]; //@line 869 "parsermodule.c"
        var $144=$143+24; //@line 869 "parsermodule.c"
        var $145=HEAP[$144]; //@line 869 "parsermodule.c"
        var $146=$tuple_addr_i; //@line 869 "parsermodule.c"
        FUNCTION_TABLE[$145]($146); //@line 869 "parsermodule.c"
        __label__ = 37; break; //@line 869 "parsermodule.c"
      case 33: // $bb30_i
        var $147=$tuple_addr_i; //@line 879 "parsermodule.c"
        var $148=_Py_BuildValue(__str40, $147, __str48); //@line 879 "parsermodule.c"
        $err_i=$148; //@line 879 "parsermodule.c"
        var $149=HEAP[_parser_error]; //@line 880 "parsermodule.c"
        var $150=$err_i; //@line 880 "parsermodule.c"
        _PyErr_SetObject($149, $150); //@line 880 "parsermodule.c"
        var $151=$err_i; //@line 881 "parsermodule.c"
        var $152=($151)!=0; //@line 881 "parsermodule.c"
        if ($152) { __label__ = 34; break; } else { __label__ = 37; break; } //@line 881 "parsermodule.c"
      case 34: // $bb31_i
        var $153=$err_i; //@line 881 "parsermodule.c"
        var $154=$153; //@line 881 "parsermodule.c"
        var $155=HEAP[$154]; //@line 881 "parsermodule.c"
        var $156=($155) - 1; //@line 881 "parsermodule.c"
        var $157=$err_i; //@line 881 "parsermodule.c"
        var $158=$157; //@line 881 "parsermodule.c"
        HEAP[$158]=$156; //@line 881 "parsermodule.c"
        var $159=$err_i; //@line 881 "parsermodule.c"
        var $160=$159; //@line 881 "parsermodule.c"
        var $161=HEAP[$160]; //@line 881 "parsermodule.c"
        var $162=($161)==0; //@line 881 "parsermodule.c"
        if ($162) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 881 "parsermodule.c"
      case 35: // $bb32_i
        var $163=$err_i; //@line 881 "parsermodule.c"
        var $164=$163+4; //@line 881 "parsermodule.c"
        var $165=HEAP[$164]; //@line 881 "parsermodule.c"
        var $166=$165+24; //@line 881 "parsermodule.c"
        var $167=HEAP[$166]; //@line 881 "parsermodule.c"
        var $168=$err_i; //@line 881 "parsermodule.c"
        FUNCTION_TABLE[$167]($168); //@line 881 "parsermodule.c"
        __label__ = 37; break; //@line 881 "parsermodule.c"
      case 36: // $build_node_tree_exit_thread
        $10=0; //@line 884 "parsermodule.c"
        $retval_i=0; //@line 884 "parsermodule.c"
        $tree=0; //@line 651 "parsermodule.c"
        __label__ = 84; break;
      case 37: // $build_node_tree_exit
        var $_pr=$res_i;
        $10=$_pr; //@line 884 "parsermodule.c"
        $retval_i=$_pr; //@line 884 "parsermodule.c"
        $tree=$_pr; //@line 651 "parsermodule.c"
        var $169=($_pr)!=0; //@line 652 "parsermodule.c"
        if ($169) { __label__ = 38; break; } else { __label__ = 84; break; } //@line 652 "parsermodule.c"
      case 38: // $bb4
        var $170=$tree; //@line 653 "parsermodule.c"
        var $171=$170; //@line 653 "parsermodule.c"
        var $172=HEAP[$171]; //@line 653 "parsermodule.c"
        var $173=($172); //@line 653 "parsermodule.c"
        $start_sym=$173; //@line 653 "parsermodule.c"
        var $174=$start_sym; //@line 654 "parsermodule.c"
        var $175=($174)==258; //@line 654 "parsermodule.c"
        if ($175) { __label__ = 39; break; } else { __label__ = 64; break; } //@line 654 "parsermodule.c"
      case 39: // $bb5
        var $176=$tree; //@line 656 "parsermodule.c"
        $tree_addr_i=$176;
        var $177=$tree_addr_i; //@line 3271 "parsermodule.c"
        $tree_addr_i_i=$177;
        var $178=$tree_addr_i_i; //@line 3058 "parsermodule.c"
        var $179=$178+16; //@line 3058 "parsermodule.c"
        var $180=HEAP[$179]; //@line 3058 "parsermodule.c"
        $nch_i_i=$180; //@line 3058 "parsermodule.c"
        var $181=$tree_addr_i_i; //@line 3062 "parsermodule.c"
        $n_addr_i_i_i=$181;
        $t_addr_i_i_i=258;
        var $182=$n_addr_i_i_i; //@line 956 "parsermodule.c"
        var $183=$182; //@line 956 "parsermodule.c"
        var $184=HEAP[$183]; //@line 956 "parsermodule.c"
        var $185=($184); //@line 956 "parsermodule.c"
        var $186=$t_addr_i_i_i; //@line 956 "parsermodule.c"
        var $187=($185)!=($186); //@line 956 "parsermodule.c"
        if ($187) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 956 "parsermodule.c"
      case 40: // $validate_ntype_exit_thread_i_i
        var $188=$n_addr_i_i_i; //@line 957 "parsermodule.c"
        var $189=$188; //@line 957 "parsermodule.c"
        var $190=HEAP[$189]; //@line 957 "parsermodule.c"
        var $191=($190); //@line 957 "parsermodule.c"
        var $192=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $193=$t_addr_i_i_i; //@line 957 "parsermodule.c"
        var $194=_PyErr_Format($192, __str49, $193, $191); //@line 957 "parsermodule.c"
        $7=0; //@line 959 "parsermodule.c"
        $retval_i_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 46; break;
      case 41: // $bb_i_i
        $7=1; //@line 961 "parsermodule.c"
        $retval_i_i_i=1; //@line 959 "parsermodule.c"
        var $195=$nch_i_i; //@line 3062 "parsermodule.c"
        var $196=($195) <= 1; //@line 3062 "parsermodule.c"
        if ($196) { __label__ = 46; break; } else { __label__ = 42; break; } //@line 3062 "parsermodule.c"
      case 42: // $bb1_i_i
        var $197=$tree_addr_i_i; //@line 3062 "parsermodule.c"
        var $198=$197+20; //@line 3062 "parsermodule.c"
        var $199=HEAP[$198]; //@line 3062 "parsermodule.c"
        var $200=$199; //@line 3062 "parsermodule.c"
        $tree_addr_i_i_i=$200;
        var $201=$tree_addr_i_i_i; //@line 1162 "parsermodule.c"
        var $202=_validate_repeating_list($201, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $6=$202; //@line 1162 "parsermodule.c"
        var $203=$6; //@line 1162 "parsermodule.c"
        $retval_i1_i_i=$203; //@line 1162 "parsermodule.c"
        var $retval1_i_i_i=$retval_i1_i_i; //@line 1162 "parsermodule.c"
        var $204=($retval1_i_i_i)==0; //@line 3062 "parsermodule.c"
        if ($204) { __label__ = 46; break; } else { __label__ = 43; break; } //@line 3062 "parsermodule.c"
      case 43: // $bb2_i_i
        var $205=$tree_addr_i_i; //@line 3062 "parsermodule.c"
        var $206=$205+20; //@line 3062 "parsermodule.c"
        var $207=HEAP[$206]; //@line 3062 "parsermodule.c"
        var $208=$nch_i_i; //@line 3062 "parsermodule.c"
        var $209=($208) - 1; //@line 3062 "parsermodule.c"
        var $210=$207+24*$209; //@line 3062 "parsermodule.c"
        $n_addr_i2_i_i=$210;
        $t_addr_i3_i_i=0;
        var $211=$n_addr_i2_i_i; //@line 956 "parsermodule.c"
        var $212=$211; //@line 956 "parsermodule.c"
        var $213=HEAP[$212]; //@line 956 "parsermodule.c"
        var $214=($213); //@line 956 "parsermodule.c"
        var $215=$t_addr_i3_i_i; //@line 956 "parsermodule.c"
        var $216=($214)!=($215); //@line 956 "parsermodule.c"
        if ($216) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 956 "parsermodule.c"
      case 44: // $validate_ntype_exit8_thread_i_i
        var $217=$n_addr_i2_i_i; //@line 957 "parsermodule.c"
        var $218=$217; //@line 957 "parsermodule.c"
        var $219=HEAP[$218]; //@line 957 "parsermodule.c"
        var $220=($219); //@line 957 "parsermodule.c"
        var $221=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $222=$t_addr_i3_i_i; //@line 957 "parsermodule.c"
        var $223=_PyErr_Format($221, __str49, $222, $220); //@line 957 "parsermodule.c"
        $5=0; //@line 959 "parsermodule.c"
        $retval_i4_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 46; break;
      case 45: // $bb3_i_i
        $5=1; //@line 961 "parsermodule.c"
        $retval_i4_i_i=1; //@line 959 "parsermodule.c"
        $iftmp_208_i_i=1; //@line 3062 "parsermodule.c"
        __label__ = 47; break; //@line 3062 "parsermodule.c"
      case 46: // $bb4_i_i
        $iftmp_208_i_i=0; //@line 3062 "parsermodule.c"
        __label__ = 47; break; //@line 3062 "parsermodule.c"
      case 47: // $bb5_i_i
        var $224=$iftmp_208_i_i; //@line 3062 "parsermodule.c"
        $res_i_i=$224; //@line 3062 "parsermodule.c"
        $pos_i_i=1; //@line 3064 "parsermodule.c"
        __lastLabel__ = 47; __label__ = 52; break; //@line 3064 "parsermodule.c"
      case 48: // $bb6_i_i
        var $225=$tree_addr_i_i; //@line 3065 "parsermodule.c"
        var $226=$225+20; //@line 3065 "parsermodule.c"
        var $227=HEAP[$226]; //@line 3065 "parsermodule.c"
        var $228=$pos_i_i; //@line 3065 "parsermodule.c"
        var $229=$227+24*$228; //@line 3065 "parsermodule.c"
        $n_addr_i9_i_i=$229;
        $t_addr_i10_i_i=4;
        var $230=$n_addr_i9_i_i; //@line 956 "parsermodule.c"
        var $231=$230; //@line 956 "parsermodule.c"
        var $232=HEAP[$231]; //@line 956 "parsermodule.c"
        var $233=($232); //@line 956 "parsermodule.c"
        var $234=$t_addr_i10_i_i; //@line 956 "parsermodule.c"
        var $235=($233)!=($234); //@line 956 "parsermodule.c"
        if ($235) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 956 "parsermodule.c"
      case 49: // $bb_i12_i_i
        var $236=$n_addr_i9_i_i; //@line 957 "parsermodule.c"
        var $237=$236; //@line 957 "parsermodule.c"
        var $238=HEAP[$237]; //@line 957 "parsermodule.c"
        var $239=($238); //@line 957 "parsermodule.c"
        var $240=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $241=$t_addr_i10_i_i; //@line 957 "parsermodule.c"
        var $242=_PyErr_Format($240, __str49, $241, $239); //@line 957 "parsermodule.c"
        $4=0; //@line 959 "parsermodule.c"
        __label__ = 51; break; //@line 959 "parsermodule.c"
      case 50: // $bb1_i13_i_i
        $4=1; //@line 961 "parsermodule.c"
        __label__ = 51; break; //@line 961 "parsermodule.c"
      case 51: // $validate_ntype_exit15_i_i
        var $243=$4; //@line 959 "parsermodule.c"
        $retval_i11_i_i=$243; //@line 959 "parsermodule.c"
        var $retval3_i14_i_i=$retval_i11_i_i; //@line 959 "parsermodule.c"
        $res_i_i=$retval3_i14_i_i; //@line 3065 "parsermodule.c"
        var $244=$pos_i_i; //@line 3064 "parsermodule.c"
        var $245=($244) + 1; //@line 3064 "parsermodule.c"
        $pos_i_i=$245; //@line 3064 "parsermodule.c"
        __lastLabel__ = 51; __label__ = 52; break; //@line 3064 "parsermodule.c"
      case 52: // $bb7_i_i
        var $246=__lastLabel__ == 51 ? $retval3_i14_i_i : ($224);
        var $247=($246)==0; //@line 3064 "parsermodule.c"
        if ($247) { __label__ = 54; break; } else { __label__ = 53; break; } //@line 3064 "parsermodule.c"
      case 53: // $bb8_i_i
        var $248=$nch_i_i; //@line 3064 "parsermodule.c"
        var $249=($248) - 1; //@line 3064 "parsermodule.c"
        var $250=$pos_i_i; //@line 3064 "parsermodule.c"
        var $251=($249) > ($250); //@line 3064 "parsermodule.c"
        if ($251) { __label__ = 48; break; } else { __label__ = 54; break; } //@line 3064 "parsermodule.c"
      case 54: // $validate_eval_input_exit_i
        var $252=$res_i_i; //@line 3067 "parsermodule.c"
        $8=$252; //@line 3067 "parsermodule.c"
        $retval_i_i=$252; //@line 3067 "parsermodule.c"
        $res_i2=$252; //@line 3271 "parsermodule.c"
        var $253=($252)==0; //@line 3273 "parsermodule.c"
        if ($253) { __label__ = 56; break; } else { __label__ = 55; break; } //@line 3273 "parsermodule.c"
      case 55: // $validate_expr_tree_exit_thread
        $9=$252; //@line 3276 "parsermodule.c"
        $retval_i1=$252; //@line 3276 "parsermodule.c"
        var $254=$tree; //@line 657 "parsermodule.c"
        __lastLabel__ = 55; __label__ = 59; break;
      case 56: // $bb_i
        var $255=_PyErr_Occurred(); //@line 3273 "parsermodule.c"
        var $256=($255)==0; //@line 3273 "parsermodule.c"
        if ($256) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 3273 "parsermodule.c"
      case 57: // $bb1_i3
        $message_addr_i_i=__str182;
        var $257=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $258=$message_addr_i_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($257, $258); //@line 531 "parsermodule.c"
        __label__ = 58; break; //@line 3274 "parsermodule.c"
      case 58: // $validate_expr_tree_exit
        var $_pr38=$res_i2;
        $9=$_pr38; //@line 3276 "parsermodule.c"
        $retval_i1=$_pr38; //@line 3276 "parsermodule.c"
        var $259=($_pr38)!=0; //@line 656 "parsermodule.c"
        var $260=$tree; //@line 657 "parsermodule.c"
        if ($259) { __lastLabel__ = 58; __label__ = 59; break; } else { __lastLabel__ = 58; __label__ = 63; break; } //@line 656 "parsermodule.c"
      case 59: // $bb6
        var $261=__lastLabel__ == 55 ? $254 : ($260);
        $st_addr_i=$261;
        $type_addr_i=1;
        var $262=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $263=$262; //@line 267 "parsermodule.c"
        $o_i=$263; //@line 267 "parsermodule.c"
        var $264=($263)!=0; //@line 269 "parsermodule.c"
        if ($264) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 269 "parsermodule.c"
      case 60: // $bb_i6
        var $265=$o_i; //@line 270 "parsermodule.c"
        var $266=$265+8; //@line 270 "parsermodule.c"
        var $267=$st_addr_i; //@line 270 "parsermodule.c"
        HEAP[$266]=$267; //@line 270 "parsermodule.c"
        var $268=$o_i; //@line 271 "parsermodule.c"
        var $269=$268+12; //@line 271 "parsermodule.c"
        var $270=$type_addr_i; //@line 271 "parsermodule.c"
        HEAP[$269]=$270; //@line 271 "parsermodule.c"
        var $271=$o_i; //@line 272 "parsermodule.c"
        var $272=$271+16; //@line 272 "parsermodule.c"
        var $273=$272; //@line 272 "parsermodule.c"
        HEAP[$273]=0; //@line 272 "parsermodule.c"
        __label__ = 62; break; //@line 272 "parsermodule.c"
      case 61: // $bb1_i7
        var $274=$st_addr_i; //@line 275 "parsermodule.c"
        _PyNode_Free($274); //@line 275 "parsermodule.c"
        __label__ = 62; break; //@line 275 "parsermodule.c"
      case 62: // $parser_newstobject_exit
        var $275=$o_i; //@line 277 "parsermodule.c"
        var $276=$275; //@line 277 "parsermodule.c"
        $3=$276; //@line 277 "parsermodule.c"
        var $277=$3; //@line 277 "parsermodule.c"
        $retval_i5=$277; //@line 277 "parsermodule.c"
        var $retval3_i8=$retval_i5; //@line 277 "parsermodule.c"
        $st=$retval3_i8; //@line 657 "parsermodule.c"
        __lastLabel__ = 62; __label__ = 85; break; //@line 657 "parsermodule.c"
      case 63: // $bb7
        _PyNode_Free($260); //@line 659 "parsermodule.c"
        __label__ = 84; break; //@line 659 "parsermodule.c"
      case 64: // $bb9
        var $278=$start_sym; //@line 661 "parsermodule.c"
        var $279=($278)==257; //@line 661 "parsermodule.c"
        if ($279) { __label__ = 65; break; } else { __label__ = 71; break; } //@line 661 "parsermodule.c"
      case 65: // $bb10
        var $280=$tree; //@line 663 "parsermodule.c"
        var $281=_validate_file_input($280); //@line 663 "parsermodule.c"
        var $282=($281)!=0; //@line 663 "parsermodule.c"
        var $283=$tree; //@line 664 "parsermodule.c"
        if ($282) { __label__ = 66; break; } else { __label__ = 70; break; } //@line 663 "parsermodule.c"
      case 66: // $bb11
        $st_addr_i10=$283;
        $type_addr_i11=2;
        var $284=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $285=$284; //@line 267 "parsermodule.c"
        $o_i13=$285; //@line 267 "parsermodule.c"
        var $286=$o_i13; //@line 269 "parsermodule.c"
        var $287=($286)!=0; //@line 269 "parsermodule.c"
        if ($287) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 269 "parsermodule.c"
      case 67: // $bb_i14
        var $288=$o_i13; //@line 270 "parsermodule.c"
        var $289=$288+8; //@line 270 "parsermodule.c"
        var $290=$st_addr_i10; //@line 270 "parsermodule.c"
        HEAP[$289]=$290; //@line 270 "parsermodule.c"
        var $291=$o_i13; //@line 271 "parsermodule.c"
        var $292=$291+12; //@line 271 "parsermodule.c"
        var $293=$type_addr_i11; //@line 271 "parsermodule.c"
        HEAP[$292]=$293; //@line 271 "parsermodule.c"
        var $294=$o_i13; //@line 272 "parsermodule.c"
        var $295=$294+16; //@line 272 "parsermodule.c"
        var $296=$295; //@line 272 "parsermodule.c"
        HEAP[$296]=0; //@line 272 "parsermodule.c"
        __label__ = 69; break; //@line 272 "parsermodule.c"
      case 68: // $bb1_i15
        var $297=$st_addr_i10; //@line 275 "parsermodule.c"
        _PyNode_Free($297); //@line 275 "parsermodule.c"
        __label__ = 69; break; //@line 275 "parsermodule.c"
      case 69: // $parser_newstobject_exit18
        var $298=$o_i13; //@line 277 "parsermodule.c"
        var $299=$298; //@line 277 "parsermodule.c"
        $2=$299; //@line 277 "parsermodule.c"
        var $300=$2; //@line 277 "parsermodule.c"
        $retval_i12=$300; //@line 277 "parsermodule.c"
        var $retval3_i16=$retval_i12; //@line 277 "parsermodule.c"
        $st=$retval3_i16; //@line 664 "parsermodule.c"
        __lastLabel__ = 69; __label__ = 85; break; //@line 664 "parsermodule.c"
      case 70: // $bb12
        _PyNode_Free($283); //@line 666 "parsermodule.c"
        __label__ = 84; break; //@line 666 "parsermodule.c"
      case 71: // $bb14
        var $301=$start_sym; //@line 668 "parsermodule.c"
        var $302=($301)==339; //@line 668 "parsermodule.c"
        var $303=$tree; //@line 670 "parsermodule.c"
        if ($302) { __label__ = 72; break; } else { __label__ = 83; break; } //@line 668 "parsermodule.c"
      case 72: // $bb15
        $tree_addr_i20=$303;
        var $304=$tree_addr_i20; //@line 3310 "parsermodule.c"
        var $305=$304+16; //@line 3310 "parsermodule.c"
        var $306=HEAP[$305]; //@line 3310 "parsermodule.c"
        $nch_i=$306; //@line 3310 "parsermodule.c"
        var $307=$nch_i; //@line 3312 "parsermodule.c"
        var $308=($307)!=1; //@line 3312 "parsermodule.c"
        if ($308) { __label__ = 75; break; } else { __label__ = 73; break; } //@line 3312 "parsermodule.c"
      case 73: // $bb_i23
        var $309=$tree_addr_i20; //@line 3312 "parsermodule.c"
        var $310=$309+20; //@line 3312 "parsermodule.c"
        var $311=HEAP[$310]; //@line 3312 "parsermodule.c"
        var $312=$311; //@line 3312 "parsermodule.c"
        var $313=_validate_file_input($312); //@line 3312 "parsermodule.c"
        var $314=($313)==0; //@line 3312 "parsermodule.c"
        if ($314) { __label__ = 75; break; } else { __label__ = 74; break; } //@line 3312 "parsermodule.c"
      case 74: // $validate_encoding_decl_exit_thread
        $iftmp_214_i=1; //@line 3312 "parsermodule.c"
        $res_i22=1; //@line 3312 "parsermodule.c"
        $1=1; //@line 3317 "parsermodule.c"
        $retval_i21=1; //@line 3317 "parsermodule.c"
        var $315=$tree; //@line 671 "parsermodule.c"
        __lastLabel__ = 74; __label__ = 78; break;
      case 75: // $bb4_i25
        $iftmp_214_i=0; //@line 3312 "parsermodule.c"
        $res_i22=0; //@line 3312 "parsermodule.c"
        var $316=_PyErr_Occurred(); //@line 3314 "parsermodule.c"
        var $317=($316)==0; //@line 3314 "parsermodule.c"
        if ($317) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 3314 "parsermodule.c"
      case 76: // $bb5_i26
        $message_addr_i_i19=__str184;
        var $318=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $319=$message_addr_i_i19; //@line 531 "parsermodule.c"
        _PyErr_SetString($318, $319); //@line 531 "parsermodule.c"
        __label__ = 77; break; //@line 3315 "parsermodule.c"
      case 77: // $validate_encoding_decl_exit
        var $_pr39=$res_i22;
        $1=$_pr39; //@line 3317 "parsermodule.c"
        $retval_i21=$_pr39; //@line 3317 "parsermodule.c"
        var $320=($_pr39)!=0; //@line 670 "parsermodule.c"
        var $321=$tree; //@line 671 "parsermodule.c"
        if ($320) { __lastLabel__ = 77; __label__ = 78; break; } else { __lastLabel__ = 77; __label__ = 82; break; } //@line 670 "parsermodule.c"
      case 78: // $bb16
        var $322=__lastLabel__ == 74 ? $315 : ($321);
        $st_addr_i28=$322;
        $type_addr_i29=2;
        var $323=__PyObject_New(_PyST_Type); //@line 267 "parsermodule.c"
        var $324=$323; //@line 267 "parsermodule.c"
        $o_i31=$324; //@line 267 "parsermodule.c"
        var $325=($324)!=0; //@line 269 "parsermodule.c"
        if ($325) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 269 "parsermodule.c"
      case 79: // $bb_i32
        var $326=$o_i31; //@line 270 "parsermodule.c"
        var $327=$326+8; //@line 270 "parsermodule.c"
        var $328=$st_addr_i28; //@line 270 "parsermodule.c"
        HEAP[$327]=$328; //@line 270 "parsermodule.c"
        var $329=$o_i31; //@line 271 "parsermodule.c"
        var $330=$329+12; //@line 271 "parsermodule.c"
        var $331=$type_addr_i29; //@line 271 "parsermodule.c"
        HEAP[$330]=$331; //@line 271 "parsermodule.c"
        var $332=$o_i31; //@line 272 "parsermodule.c"
        var $333=$332+16; //@line 272 "parsermodule.c"
        var $334=$333; //@line 272 "parsermodule.c"
        HEAP[$334]=0; //@line 272 "parsermodule.c"
        __label__ = 81; break; //@line 272 "parsermodule.c"
      case 80: // $bb1_i33
        var $335=$st_addr_i28; //@line 275 "parsermodule.c"
        _PyNode_Free($335); //@line 275 "parsermodule.c"
        __label__ = 81; break; //@line 275 "parsermodule.c"
      case 81: // $parser_newstobject_exit36
        var $336=$o_i31; //@line 277 "parsermodule.c"
        var $337=$336; //@line 277 "parsermodule.c"
        $0=$337; //@line 277 "parsermodule.c"
        var $338=$0; //@line 277 "parsermodule.c"
        $retval_i30=$338; //@line 277 "parsermodule.c"
        var $retval3_i34=$retval_i30; //@line 277 "parsermodule.c"
        $st=$retval3_i34; //@line 671 "parsermodule.c"
        __lastLabel__ = 81; __label__ = 85; break; //@line 671 "parsermodule.c"
      case 82: // $bb17
        _PyNode_Free($321); //@line 673 "parsermodule.c"
        __label__ = 84; break; //@line 673 "parsermodule.c"
      case 83: // $bb19
        _PyNode_Free($303); //@line 677 "parsermodule.c"
        $message_addr_i=__str37;
        var $339=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $340=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($339, $340); //@line 531 "parsermodule.c"
        __label__ = 84; break; //@line 678 "parsermodule.c"
      case 84: // $bb20thread_pre_split
        var $_pr40=$st;
        __lastLabel__ = 84; __label__ = 85; break;
      case 85: // $bb20
        var $341=__lastLabel__ == 84 ? $_pr40 : (__lastLabel__ == 81 ? $retval3_i34 : (__lastLabel__ == 69 ? $retval3_i16 : ($retval3_i8)));
        var $342=($341)==0; //@line 684 "parsermodule.c"
        if ($342) { __label__ = 86; break; } else { __label__ = 88; break; } //@line 684 "parsermodule.c"
      case 86: // $bb21
        var $343=_PyErr_Occurred(); //@line 684 "parsermodule.c"
        var $344=($343)==0; //@line 684 "parsermodule.c"
        if ($344) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 684 "parsermodule.c"
      case 87: // $bb22
        $message_addr_i37=__str38;
        var $345=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $346=$message_addr_i37; //@line 531 "parsermodule.c"
        _PyErr_SetString($345, $346); //@line 531 "parsermodule.c"
        __label__ = 88; break; //@line 685 "parsermodule.c"
      case 88: // $bb23
        var $347=$st; //@line 687 "parsermodule.c"
        $11=$347; //@line 687 "parsermodule.c"
        __label__ = 89; break; //@line 687 "parsermodule.c"
      case 89: // $bb24
        var $348=$11; //@line 642 "parsermodule.c"
        $retval=$348; //@line 642 "parsermodule.c"
        var $retval25=$retval; //@line 642 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 642 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser_tuple2ast($self, $args, $kw) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kw_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        $kw_addr=$kw;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 693 "parsermodule.c"
        var $2=($1)!=0; //@line 693 "parsermodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 693 "parsermodule.c"
        var $4=_PyErr_WarnEx($3, __str39, 1); //@line 693 "parsermodule.c"
        var $5=($4) < 0; //@line 693 "parsermodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 693 "parsermodule.c"
      case 2: // $bb1
        $0=0; //@line 694 "parsermodule.c"
        __label__ = 4; break; //@line 694 "parsermodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 695 "parsermodule.c"
        var $7=$args_addr; //@line 695 "parsermodule.c"
        var $8=$kw_addr; //@line 695 "parsermodule.c"
        var $9=_parser_tuple2st($6, $7, $8); //@line 695 "parsermodule.c"
        $0=$9; //@line 695 "parsermodule.c"
        __label__ = 4; break; //@line 695 "parsermodule.c"
      case 4: // $bb3
        var $10=$0; //@line 694 "parsermodule.c"
        $retval=$10; //@line 694 "parsermodule.c"
        var $retval4=$retval; //@line 694 "parsermodule.c"
        ;
        return $retval4; //@line 694 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _build_node_children($tuple, $root, $line_num) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i;
        var $tuple_addr;
        var $root_addr;
        var $line_num_addr;
        var $retval;
        var $iftmp_48;
        var $iftmp_47;
        var $0;
        var $len;
        var $i;
        var $err;
        var $elem;
        var $ok;
        var $type;
        var $strn;
        var $temp;
        var $err11;
        var $len20;
        var $temp21;
        var $o;
        var $err53;
        var $new_child;
        $tuple_addr=$tuple;
        $root_addr=$root;
        $line_num_addr=$line_num;
        var $1=$tuple_addr; //@line 710 "parsermodule.c"
        var $2=_PyObject_Size($1); //@line 710 "parsermodule.c"
        $len=$2; //@line 710 "parsermodule.c"
        $i=1; //@line 714 "parsermodule.c"
        __label__ = 69; break; //@line 714 "parsermodule.c"
      case 1: // $bb
        var $3=$tuple_addr; //@line 716 "parsermodule.c"
        var $4=$i; //@line 716 "parsermodule.c"
        var $5=_PySequence_GetItem($3, $4); //@line 716 "parsermodule.c"
        $elem=$5; //@line 716 "parsermodule.c"
        var $6=$elem; //@line 717 "parsermodule.c"
        var $7=($6)!=0; //@line 717 "parsermodule.c"
        var $8=($7); //@line 717 "parsermodule.c"
        $ok=$8; //@line 717 "parsermodule.c"
        $type=0; //@line 718 "parsermodule.c"
        $strn=0; //@line 719 "parsermodule.c"
        var $9=$ok; //@line 721 "parsermodule.c"
        var $10=($9)!=0; //@line 721 "parsermodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 10; break; } //@line 721 "parsermodule.c"
      case 2: // $bb2
        var $11=$elem; //@line 722 "parsermodule.c"
        var $12=_PySequence_Check($11); //@line 722 "parsermodule.c"
        $ok=$12; //@line 722 "parsermodule.c"
        var $13=($12)!=0; //@line 723 "parsermodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 723 "parsermodule.c"
      case 3: // $bb3
        var $14=$elem; //@line 724 "parsermodule.c"
        var $15=_PySequence_GetItem($14, 0); //@line 724 "parsermodule.c"
        $temp=$15; //@line 724 "parsermodule.c"
        var $16=$temp; //@line 725 "parsermodule.c"
        var $17=($16)==0; //@line 725 "parsermodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 725 "parsermodule.c"
      case 4: // $bb4
        $ok=0; //@line 726 "parsermodule.c"
        __label__ = 10; break; //@line 726 "parsermodule.c"
      case 5: // $bb5
        var $18=$temp; //@line 728 "parsermodule.c"
        var $19=$18+4; //@line 728 "parsermodule.c"
        var $20=HEAP[$19]; //@line 728 "parsermodule.c"
        var $21=$20+84; //@line 728 "parsermodule.c"
        var $22=HEAP[$21]; //@line 728 "parsermodule.c"
        var $23=($22) & 8388608; //@line 728 "parsermodule.c"
        var $24=($23)!=0; //@line 728 "parsermodule.c"
        var $25=($24); //@line 728 "parsermodule.c"
        $ok=$25; //@line 728 "parsermodule.c"
        var $26=$ok; //@line 729 "parsermodule.c"
        var $27=($26)!=0; //@line 729 "parsermodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 729 "parsermodule.c"
      case 6: // $bb6
        var $28=$temp; //@line 730 "parsermodule.c"
        var $29=$28; //@line 730 "parsermodule.c"
        var $30=$29+8; //@line 730 "parsermodule.c"
        var $31=HEAP[$30]; //@line 730 "parsermodule.c"
        $type=$31; //@line 730 "parsermodule.c"
        __label__ = 7; break; //@line 730 "parsermodule.c"
      case 7: // $bb7
        var $32=$temp; //@line 731 "parsermodule.c"
        var $33=$32; //@line 731 "parsermodule.c"
        var $34=HEAP[$33]; //@line 731 "parsermodule.c"
        var $35=($34) - 1; //@line 731 "parsermodule.c"
        var $36=$temp; //@line 731 "parsermodule.c"
        var $37=$36; //@line 731 "parsermodule.c"
        HEAP[$37]=$35; //@line 731 "parsermodule.c"
        var $38=$temp; //@line 731 "parsermodule.c"
        var $39=$38; //@line 731 "parsermodule.c"
        var $40=HEAP[$39]; //@line 731 "parsermodule.c"
        var $41=($40)==0; //@line 731 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 731 "parsermodule.c"
      case 8: // $bb8
        var $42=$temp; //@line 731 "parsermodule.c"
        var $43=$42+4; //@line 731 "parsermodule.c"
        var $44=HEAP[$43]; //@line 731 "parsermodule.c"
        var $45=$44+24; //@line 731 "parsermodule.c"
        var $46=HEAP[$45]; //@line 731 "parsermodule.c"
        var $47=$temp; //@line 731 "parsermodule.c"
        FUNCTION_TABLE[$46]($47); //@line 731 "parsermodule.c"
        __label__ = 9; break; //@line 731 "parsermodule.c"
      case 9: // $bb9
        var $_pr_pr=$ok;
        var $48=($_pr_pr)==0; //@line 734 "parsermodule.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 734 "parsermodule.c"
      case 10: // $bb10
        var $49=$elem; //@line 736 "parsermodule.c"
        var $50=_Py_BuildValue(__str40, $49, __str41); //@line 736 "parsermodule.c"
        $err11=$50; //@line 736 "parsermodule.c"
        var $51=HEAP[_parser_error]; //@line 737 "parsermodule.c"
        var $52=$err11; //@line 737 "parsermodule.c"
        _PyErr_SetObject($51, $52); //@line 737 "parsermodule.c"
        var $53=$err11; //@line 738 "parsermodule.c"
        var $54=($53)!=0; //@line 738 "parsermodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 738 "parsermodule.c"
      case 11: // $bb12
        var $55=$err11; //@line 738 "parsermodule.c"
        var $56=$55; //@line 738 "parsermodule.c"
        var $57=HEAP[$56]; //@line 738 "parsermodule.c"
        var $58=($57) - 1; //@line 738 "parsermodule.c"
        var $59=$err11; //@line 738 "parsermodule.c"
        var $60=$59; //@line 738 "parsermodule.c"
        HEAP[$60]=$58; //@line 738 "parsermodule.c"
        var $61=$err11; //@line 738 "parsermodule.c"
        var $62=$61; //@line 738 "parsermodule.c"
        var $63=HEAP[$62]; //@line 738 "parsermodule.c"
        var $64=($63)==0; //@line 738 "parsermodule.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 738 "parsermodule.c"
      case 12: // $bb13
        var $65=$err11; //@line 738 "parsermodule.c"
        var $66=$65+4; //@line 738 "parsermodule.c"
        var $67=HEAP[$66]; //@line 738 "parsermodule.c"
        var $68=$67+24; //@line 738 "parsermodule.c"
        var $69=HEAP[$68]; //@line 738 "parsermodule.c"
        var $70=$err11; //@line 738 "parsermodule.c"
        FUNCTION_TABLE[$69]($70); //@line 738 "parsermodule.c"
        __label__ = 13; break; //@line 738 "parsermodule.c"
      case 13: // $bb14
        var $71=$elem; //@line 739 "parsermodule.c"
        var $72=($71)!=0; //@line 739 "parsermodule.c"
        if ($72) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 739 "parsermodule.c"
      case 14: // $bb15
        var $73=$elem; //@line 739 "parsermodule.c"
        var $74=$73; //@line 739 "parsermodule.c"
        var $75=HEAP[$74]; //@line 739 "parsermodule.c"
        var $76=($75) - 1; //@line 739 "parsermodule.c"
        var $77=$elem; //@line 739 "parsermodule.c"
        var $78=$77; //@line 739 "parsermodule.c"
        HEAP[$78]=$76; //@line 739 "parsermodule.c"
        var $79=$elem; //@line 739 "parsermodule.c"
        var $80=$79; //@line 739 "parsermodule.c"
        var $81=HEAP[$80]; //@line 739 "parsermodule.c"
        var $82=($81)==0; //@line 739 "parsermodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 739 "parsermodule.c"
      case 15: // $bb16
        var $83=$elem; //@line 739 "parsermodule.c"
        var $84=$83+4; //@line 739 "parsermodule.c"
        var $85=HEAP[$84]; //@line 739 "parsermodule.c"
        var $86=$85+24; //@line 739 "parsermodule.c"
        var $87=HEAP[$86]; //@line 739 "parsermodule.c"
        var $88=$elem; //@line 739 "parsermodule.c"
        FUNCTION_TABLE[$87]($88); //@line 739 "parsermodule.c"
        __label__ = 16; break; //@line 739 "parsermodule.c"
      case 16: // $bb17
        $0=0; //@line 740 "parsermodule.c"
        __label__ = 71; break; //@line 740 "parsermodule.c"
      case 17: // $bb18
        var $89=$type; //@line 742 "parsermodule.c"
        var $90=($89) <= 255; //@line 742 "parsermodule.c"
        if ($90) { __label__ = 18; break; } else { __label__ = 45; break; } //@line 742 "parsermodule.c"
      case 18: // $bb19
        var $91=$elem; //@line 743 "parsermodule.c"
        var $92=_PyObject_Size($91); //@line 743 "parsermodule.c"
        $len20=$92; //@line 743 "parsermodule.c"
        var $93=$len20; //@line 746 "parsermodule.c"
        var $94=($93)!=2; //@line 746 "parsermodule.c"
        var $95=$len20; //@line 746 "parsermodule.c"
        var $96=($95)!=3; //@line 746 "parsermodule.c"
        var $or_cond=($94) & ($96);
        if ($or_cond) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 746 "parsermodule.c"
      case 19: // $bb23
        $message_addr_i=__str42;
        var $97=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $98=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($97, $98); //@line 531 "parsermodule.c"
        $0=0; //@line 748 "parsermodule.c"
        __label__ = 71; break; //@line 748 "parsermodule.c"
      case 20: // $bb24
        var $99=$elem; //@line 750 "parsermodule.c"
        var $100=_PySequence_GetItem($99, 1); //@line 750 "parsermodule.c"
        $temp21=$100; //@line 750 "parsermodule.c"
        var $101=$temp21; //@line 751 "parsermodule.c"
        var $102=($101)==0; //@line 751 "parsermodule.c"
        if ($102) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 751 "parsermodule.c"
      case 21: // $bb25
        $0=0; //@line 752 "parsermodule.c"
        __label__ = 71; break; //@line 752 "parsermodule.c"
      case 22: // $bb26
        var $103=$temp21; //@line 753 "parsermodule.c"
        var $104=$103+4; //@line 753 "parsermodule.c"
        var $105=HEAP[$104]; //@line 753 "parsermodule.c"
        var $106=$105+84; //@line 753 "parsermodule.c"
        var $107=HEAP[$106]; //@line 753 "parsermodule.c"
        var $108=($107) & 134217728; //@line 753 "parsermodule.c"
        var $109=($108)==0; //@line 753 "parsermodule.c"
        if ($109) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 753 "parsermodule.c"
      case 23: // $bb27
        var $110=$temp21; //@line 754 "parsermodule.c"
        var $111=$110+4; //@line 754 "parsermodule.c"
        var $112=HEAP[$111]; //@line 754 "parsermodule.c"
        var $113=$112+12; //@line 754 "parsermodule.c"
        var $114=HEAP[$113]; //@line 754 "parsermodule.c"
        var $115=HEAP[_parser_error]; //@line 754 "parsermodule.c"
        var $116=_PyErr_Format($115, __str43, $114); //@line 754 "parsermodule.c"
        var $117=$temp21; //@line 758 "parsermodule.c"
        var $118=$117; //@line 758 "parsermodule.c"
        var $119=HEAP[$118]; //@line 758 "parsermodule.c"
        var $120=($119) - 1; //@line 758 "parsermodule.c"
        var $121=$temp21; //@line 758 "parsermodule.c"
        var $122=$121; //@line 758 "parsermodule.c"
        HEAP[$122]=$120; //@line 758 "parsermodule.c"
        var $123=$temp21; //@line 758 "parsermodule.c"
        var $124=$123; //@line 758 "parsermodule.c"
        var $125=HEAP[$124]; //@line 758 "parsermodule.c"
        var $126=($125)==0; //@line 758 "parsermodule.c"
        if ($126) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 758 "parsermodule.c"
      case 24: // $bb28
        var $127=$temp21; //@line 758 "parsermodule.c"
        var $128=$127+4; //@line 758 "parsermodule.c"
        var $129=HEAP[$128]; //@line 758 "parsermodule.c"
        var $130=$129+24; //@line 758 "parsermodule.c"
        var $131=HEAP[$130]; //@line 758 "parsermodule.c"
        var $132=$temp21; //@line 758 "parsermodule.c"
        FUNCTION_TABLE[$131]($132); //@line 758 "parsermodule.c"
        __label__ = 25; break; //@line 758 "parsermodule.c"
      case 25: // $bb29
        $0=0; //@line 759 "parsermodule.c"
        __label__ = 71; break; //@line 759 "parsermodule.c"
      case 26: // $bb30
        var $133=$len20; //@line 761 "parsermodule.c"
        var $134=($133)==3; //@line 761 "parsermodule.c"
        if ($134) { __label__ = 27; break; } else { __label__ = 36; break; } //@line 761 "parsermodule.c"
      case 27: // $bb31
        var $135=$elem; //@line 762 "parsermodule.c"
        var $136=_PySequence_GetItem($135, 2); //@line 762 "parsermodule.c"
        $o=$136; //@line 762 "parsermodule.c"
        var $137=$o; //@line 763 "parsermodule.c"
        var $138=($137)!=0; //@line 763 "parsermodule.c"
        if ($138) { __label__ = 28; break; } else { __label__ = 36; break; } //@line 763 "parsermodule.c"
      case 28: // $bb32
        var $139=$o; //@line 764 "parsermodule.c"
        var $140=$139+4; //@line 764 "parsermodule.c"
        var $141=HEAP[$140]; //@line 764 "parsermodule.c"
        var $142=$141+84; //@line 764 "parsermodule.c"
        var $143=HEAP[$142]; //@line 764 "parsermodule.c"
        var $144=($143) & 8388608; //@line 764 "parsermodule.c"
        var $145=($144)!=0; //@line 764 "parsermodule.c"
        if ($145) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 764 "parsermodule.c"
      case 29: // $bb33
        var $146=$o; //@line 765 "parsermodule.c"
        var $147=$146; //@line 765 "parsermodule.c"
        var $148=$147+8; //@line 765 "parsermodule.c"
        var $149=HEAP[$148]; //@line 765 "parsermodule.c"
        var $150=$line_num_addr; //@line 765 "parsermodule.c"
        HEAP[$150]=$149; //@line 765 "parsermodule.c"
        var $151=$o; //@line 775 "parsermodule.c"
        var $152=$151; //@line 775 "parsermodule.c"
        var $153=HEAP[$152]; //@line 775 "parsermodule.c"
        var $154=($153) - 1; //@line 775 "parsermodule.c"
        var $155=$o; //@line 775 "parsermodule.c"
        var $156=$155; //@line 775 "parsermodule.c"
        HEAP[$156]=$154; //@line 775 "parsermodule.c"
        var $157=$o; //@line 775 "parsermodule.c"
        var $158=$157; //@line 775 "parsermodule.c"
        var $159=HEAP[$158]; //@line 775 "parsermodule.c"
        var $160=($159)==0; //@line 775 "parsermodule.c"
        if ($160) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 775 "parsermodule.c"
      case 30: // $bb34
        var $161=$temp21; //@line 767 "parsermodule.c"
        var $162=$161+4; //@line 767 "parsermodule.c"
        var $163=HEAP[$162]; //@line 767 "parsermodule.c"
        var $164=$163+12; //@line 767 "parsermodule.c"
        var $165=HEAP[$164]; //@line 767 "parsermodule.c"
        var $166=HEAP[_parser_error]; //@line 767 "parsermodule.c"
        var $167=_PyErr_Format($166, __str44, $165); //@line 767 "parsermodule.c"
        var $168=$o; //@line 771 "parsermodule.c"
        var $169=$168; //@line 771 "parsermodule.c"
        var $170=HEAP[$169]; //@line 771 "parsermodule.c"
        var $171=($170) - 1; //@line 771 "parsermodule.c"
        var $172=$o; //@line 771 "parsermodule.c"
        var $173=$172; //@line 771 "parsermodule.c"
        HEAP[$173]=$171; //@line 771 "parsermodule.c"
        var $174=$o; //@line 771 "parsermodule.c"
        var $175=$174; //@line 771 "parsermodule.c"
        var $176=HEAP[$175]; //@line 771 "parsermodule.c"
        var $177=($176)==0; //@line 771 "parsermodule.c"
        if ($177) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 771 "parsermodule.c"
      case 31: // $bb35
        var $178=$o; //@line 771 "parsermodule.c"
        var $179=$178+4; //@line 771 "parsermodule.c"
        var $180=HEAP[$179]; //@line 771 "parsermodule.c"
        var $181=$180+24; //@line 771 "parsermodule.c"
        var $182=HEAP[$181]; //@line 771 "parsermodule.c"
        var $183=$o; //@line 771 "parsermodule.c"
        FUNCTION_TABLE[$182]($183); //@line 771 "parsermodule.c"
        __label__ = 32; break; //@line 771 "parsermodule.c"
      case 32: // $bb36
        var $184=$temp21; //@line 772 "parsermodule.c"
        var $185=$184; //@line 772 "parsermodule.c"
        var $186=HEAP[$185]; //@line 772 "parsermodule.c"
        var $187=($186) - 1; //@line 772 "parsermodule.c"
        var $188=$temp21; //@line 772 "parsermodule.c"
        var $189=$188; //@line 772 "parsermodule.c"
        HEAP[$189]=$187; //@line 772 "parsermodule.c"
        var $190=$temp21; //@line 772 "parsermodule.c"
        var $191=$190; //@line 772 "parsermodule.c"
        var $192=HEAP[$191]; //@line 772 "parsermodule.c"
        var $193=($192)==0; //@line 772 "parsermodule.c"
        if ($193) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 772 "parsermodule.c"
      case 33: // $bb37
        var $194=$temp21; //@line 772 "parsermodule.c"
        var $195=$194+4; //@line 772 "parsermodule.c"
        var $196=HEAP[$195]; //@line 772 "parsermodule.c"
        var $197=$196+24; //@line 772 "parsermodule.c"
        var $198=HEAP[$197]; //@line 772 "parsermodule.c"
        var $199=$temp21; //@line 772 "parsermodule.c"
        FUNCTION_TABLE[$198]($199); //@line 772 "parsermodule.c"
        __label__ = 34; break; //@line 772 "parsermodule.c"
      case 34: // $bb38
        $0=0; //@line 773 "parsermodule.c"
        __label__ = 71; break; //@line 773 "parsermodule.c"
      case 35: // $bb39
        var $200=$o; //@line 775 "parsermodule.c"
        var $201=$200+4; //@line 775 "parsermodule.c"
        var $202=HEAP[$201]; //@line 775 "parsermodule.c"
        var $203=$202+24; //@line 775 "parsermodule.c"
        var $204=HEAP[$203]; //@line 775 "parsermodule.c"
        var $205=$o; //@line 775 "parsermodule.c"
        FUNCTION_TABLE[$204]($205); //@line 775 "parsermodule.c"
        __label__ = 36; break; //@line 775 "parsermodule.c"
      case 36: // $bb40
        var $206=$temp21; //@line 778 "parsermodule.c"
        var $207=$206; //@line 778 "parsermodule.c"
        var $208=$207+8; //@line 778 "parsermodule.c"
        var $209=HEAP[$208]; //@line 778 "parsermodule.c"
        var $210=($209) + 1; //@line 778 "parsermodule.c"
        $len20=$210; //@line 778 "parsermodule.c"
        var $211=($210) >= 0; //@line 779 "parsermodule.c"
        if ($211) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 779 "parsermodule.c"
      case 37: // $bb41
        var $212=$len20; //@line 779 "parsermodule.c"
        var $213=($212)!=0; //@line 779 "parsermodule.c"
        if ($213) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 779 "parsermodule.c"
      case 38: // $bb42
        var $214=$len20; //@line 779 "parsermodule.c"
        $iftmp_48=$214; //@line 779 "parsermodule.c"
        __label__ = 41; break; //@line 779 "parsermodule.c"
      case 39: // $bb43
        $iftmp_48=1; //@line 779 "parsermodule.c"
        __label__ = 41; break; //@line 779 "parsermodule.c"
      case 40: // $bb46_thread
        $iftmp_47=0; //@line 779 "parsermodule.c"
        $strn=0; //@line 779 "parsermodule.c"
        __label__ = 43; break;
      case 41: // $bb46
        var $215=$iftmp_48; //@line 779 "parsermodule.c"
        var $216=_malloc($215); //@line 779 "parsermodule.c"
        $iftmp_47=$216; //@line 779 "parsermodule.c"
        $strn=$216; //@line 779 "parsermodule.c"
        var $217=($216)!=0; //@line 780 "parsermodule.c"
        if ($217) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 780 "parsermodule.c"
      case 42: // $bb47
        var $218=$len20; //@line 781 "parsermodule.c"
        var $219=$temp21; //@line 781 "parsermodule.c"
        var $220=$219; //@line 781 "parsermodule.c"
        var $221=$220+20; //@line 781 "parsermodule.c"
        var $222=$221; //@line 781 "parsermodule.c"
        var $223=$strn; //@line 781 "parsermodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($223, $222, $218, 1, 0); //@line 781 "parsermodule.c"
        __label__ = 43; break; //@line 781 "parsermodule.c"
      case 43: // $bb48
        var $224=$temp21; //@line 782 "parsermodule.c"
        var $225=$224; //@line 782 "parsermodule.c"
        var $226=HEAP[$225]; //@line 782 "parsermodule.c"
        var $227=($226) - 1; //@line 782 "parsermodule.c"
        var $228=$temp21; //@line 782 "parsermodule.c"
        var $229=$228; //@line 782 "parsermodule.c"
        HEAP[$229]=$227; //@line 782 "parsermodule.c"
        var $230=$temp21; //@line 782 "parsermodule.c"
        var $231=$230; //@line 782 "parsermodule.c"
        var $232=HEAP[$231]; //@line 782 "parsermodule.c"
        var $233=($232)==0; //@line 782 "parsermodule.c"
        if ($233) { __label__ = 44; break; } else { __label__ = 53; break; } //@line 782 "parsermodule.c"
      case 44: // $bb49
        var $234=$temp21; //@line 782 "parsermodule.c"
        var $235=$234+4; //@line 782 "parsermodule.c"
        var $236=HEAP[$235]; //@line 782 "parsermodule.c"
        var $237=$236+24; //@line 782 "parsermodule.c"
        var $238=HEAP[$237]; //@line 782 "parsermodule.c"
        var $239=$temp21; //@line 782 "parsermodule.c"
        FUNCTION_TABLE[$238]($239); //@line 782 "parsermodule.c"
        __label__ = 53; break; //@line 782 "parsermodule.c"
      case 45: // $bb51
        var $240=$type; //@line 784 "parsermodule.c"
        var $241=($240) <= 255; //@line 784 "parsermodule.c"
        if ($241) { __label__ = 46; break; } else { __label__ = 53; break; } //@line 784 "parsermodule.c"
      case 46: // $bb52
        var $242=$elem; //@line 789 "parsermodule.c"
        var $243=_Py_BuildValue(__str40, $242, __str45); //@line 789 "parsermodule.c"
        $err53=$243; //@line 789 "parsermodule.c"
        var $244=HEAP[_parser_error]; //@line 790 "parsermodule.c"
        var $245=$err53; //@line 790 "parsermodule.c"
        _PyErr_SetObject($244, $245); //@line 790 "parsermodule.c"
        var $246=$err53; //@line 791 "parsermodule.c"
        var $247=($246)!=0; //@line 791 "parsermodule.c"
        if ($247) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 791 "parsermodule.c"
      case 47: // $bb54
        var $248=$err53; //@line 791 "parsermodule.c"
        var $249=$248; //@line 791 "parsermodule.c"
        var $250=HEAP[$249]; //@line 791 "parsermodule.c"
        var $251=($250) - 1; //@line 791 "parsermodule.c"
        var $252=$err53; //@line 791 "parsermodule.c"
        var $253=$252; //@line 791 "parsermodule.c"
        HEAP[$253]=$251; //@line 791 "parsermodule.c"
        var $254=$err53; //@line 791 "parsermodule.c"
        var $255=$254; //@line 791 "parsermodule.c"
        var $256=HEAP[$255]; //@line 791 "parsermodule.c"
        var $257=($256)==0; //@line 791 "parsermodule.c"
        if ($257) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 791 "parsermodule.c"
      case 48: // $bb55
        var $258=$err53; //@line 791 "parsermodule.c"
        var $259=$258+4; //@line 791 "parsermodule.c"
        var $260=HEAP[$259]; //@line 791 "parsermodule.c"
        var $261=$260+24; //@line 791 "parsermodule.c"
        var $262=HEAP[$261]; //@line 791 "parsermodule.c"
        var $263=$err53; //@line 791 "parsermodule.c"
        FUNCTION_TABLE[$262]($263); //@line 791 "parsermodule.c"
        __label__ = 49; break; //@line 791 "parsermodule.c"
      case 49: // $bb56
        var $264=$elem; //@line 792 "parsermodule.c"
        var $265=($264)!=0; //@line 792 "parsermodule.c"
        if ($265) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 792 "parsermodule.c"
      case 50: // $bb57
        var $266=$elem; //@line 792 "parsermodule.c"
        var $267=$266; //@line 792 "parsermodule.c"
        var $268=HEAP[$267]; //@line 792 "parsermodule.c"
        var $269=($268) - 1; //@line 792 "parsermodule.c"
        var $270=$elem; //@line 792 "parsermodule.c"
        var $271=$270; //@line 792 "parsermodule.c"
        HEAP[$271]=$269; //@line 792 "parsermodule.c"
        var $272=$elem; //@line 792 "parsermodule.c"
        var $273=$272; //@line 792 "parsermodule.c"
        var $274=HEAP[$273]; //@line 792 "parsermodule.c"
        var $275=($274)==0; //@line 792 "parsermodule.c"
        if ($275) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 792 "parsermodule.c"
      case 51: // $bb58
        var $276=$elem; //@line 792 "parsermodule.c"
        var $277=$276+4; //@line 792 "parsermodule.c"
        var $278=HEAP[$277]; //@line 792 "parsermodule.c"
        var $279=$278+24; //@line 792 "parsermodule.c"
        var $280=HEAP[$279]; //@line 792 "parsermodule.c"
        var $281=$elem; //@line 792 "parsermodule.c"
        FUNCTION_TABLE[$280]($281); //@line 792 "parsermodule.c"
        __label__ = 52; break; //@line 792 "parsermodule.c"
      case 52: // $bb59
        $0=0; //@line 793 "parsermodule.c"
        __label__ = 71; break; //@line 793 "parsermodule.c"
      case 53: // $bb60
        var $282=$line_num_addr; //@line 795 "parsermodule.c"
        var $283=HEAP[$282]; //@line 795 "parsermodule.c"
        var $284=$root_addr; //@line 795 "parsermodule.c"
        var $285=$type; //@line 795 "parsermodule.c"
        var $286=$strn; //@line 795 "parsermodule.c"
        var $287=_PyNode_AddChild($284, $285, $286, $283, 0); //@line 795 "parsermodule.c"
        $err=$287; //@line 795 "parsermodule.c"
        var $288=($287)==15; //@line 796 "parsermodule.c"
        if ($288) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 796 "parsermodule.c"
      case 54: // $bb61
        var $289=$strn; //@line 797 "parsermodule.c"
        _free($289); //@line 797 "parsermodule.c"
        var $290=_PyErr_NoMemory(); //@line 798 "parsermodule.c"
        var $291=$290; //@line 798 "parsermodule.c"
        $0=$291; //@line 798 "parsermodule.c"
        __label__ = 71; break; //@line 798 "parsermodule.c"
      case 55: // $bb62
        var $292=$err; //@line 800 "parsermodule.c"
        var $293=($292)==19; //@line 800 "parsermodule.c"
        if ($293) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 800 "parsermodule.c"
      case 56: // $bb63
        var $294=$strn; //@line 801 "parsermodule.c"
        _free($294); //@line 801 "parsermodule.c"
        var $295=HEAP[_PyExc_ValueError]; //@line 802 "parsermodule.c"
        _PyErr_SetString($295, __str46); //@line 802 "parsermodule.c"
        $0=0; //@line 804 "parsermodule.c"
        __label__ = 71; break; //@line 804 "parsermodule.c"
      case 57: // $bb64
        var $296=$type; //@line 807 "parsermodule.c"
        var $297=($296) > 255; //@line 807 "parsermodule.c"
        if ($297) { __label__ = 58; break; } else { __label__ = 63; break; } //@line 807 "parsermodule.c"
      case 58: // $bb65
        var $298=$root_addr; //@line 808 "parsermodule.c"
        var $299=$298+20; //@line 808 "parsermodule.c"
        var $300=HEAP[$299]; //@line 808 "parsermodule.c"
        var $301=$i; //@line 808 "parsermodule.c"
        var $302=($301) - 1; //@line 808 "parsermodule.c"
        var $303=$300+24*$302; //@line 808 "parsermodule.c"
        $new_child=$303; //@line 808 "parsermodule.c"
        var $304=$elem; //@line 810 "parsermodule.c"
        var $305=$new_child; //@line 810 "parsermodule.c"
        var $306=$line_num_addr; //@line 810 "parsermodule.c"
        var $307=_build_node_children($304, $305, $306); //@line 810 "parsermodule.c"
        var $308=$new_child; //@line 810 "parsermodule.c"
        var $309=($307)!=($308); //@line 810 "parsermodule.c"
        if ($309) { __label__ = 59; break; } else { __label__ = 65; break; } //@line 810 "parsermodule.c"
      case 59: // $bb66
        var $310=$elem; //@line 811 "parsermodule.c"
        var $311=($310)!=0; //@line 811 "parsermodule.c"
        if ($311) { __label__ = 60; break; } else { __label__ = 62; break; } //@line 811 "parsermodule.c"
      case 60: // $bb67
        var $312=$elem; //@line 811 "parsermodule.c"
        var $313=$312; //@line 811 "parsermodule.c"
        var $314=HEAP[$313]; //@line 811 "parsermodule.c"
        var $315=($314) - 1; //@line 811 "parsermodule.c"
        var $316=$elem; //@line 811 "parsermodule.c"
        var $317=$316; //@line 811 "parsermodule.c"
        HEAP[$317]=$315; //@line 811 "parsermodule.c"
        var $318=$elem; //@line 811 "parsermodule.c"
        var $319=$318; //@line 811 "parsermodule.c"
        var $320=HEAP[$319]; //@line 811 "parsermodule.c"
        var $321=($320)==0; //@line 811 "parsermodule.c"
        if ($321) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 811 "parsermodule.c"
      case 61: // $bb68
        var $322=$elem; //@line 811 "parsermodule.c"
        var $323=$322+4; //@line 811 "parsermodule.c"
        var $324=HEAP[$323]; //@line 811 "parsermodule.c"
        var $325=$324+24; //@line 811 "parsermodule.c"
        var $326=HEAP[$325]; //@line 811 "parsermodule.c"
        var $327=$elem; //@line 811 "parsermodule.c"
        FUNCTION_TABLE[$326]($327); //@line 811 "parsermodule.c"
        __label__ = 62; break; //@line 811 "parsermodule.c"
      case 62: // $bb69
        $0=0; //@line 812 "parsermodule.c"
        __label__ = 71; break; //@line 812 "parsermodule.c"
      case 63: // $bb71
        var $328=$type; //@line 815 "parsermodule.c"
        var $329=($328)==4; //@line 815 "parsermodule.c"
        if ($329) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 815 "parsermodule.c"
      case 64: // $bb72
        var $330=$line_num_addr; //@line 816 "parsermodule.c"
        var $331=HEAP[$330]; //@line 816 "parsermodule.c"
        var $332=($331) + 1; //@line 816 "parsermodule.c"
        var $333=$line_num_addr; //@line 816 "parsermodule.c"
        HEAP[$333]=$332; //@line 816 "parsermodule.c"
        __label__ = 65; break; //@line 816 "parsermodule.c"
      case 65: // $bb73
        var $334=$elem; //@line 818 "parsermodule.c"
        var $335=($334)!=0; //@line 818 "parsermodule.c"
        if ($335) { __label__ = 66; break; } else { __label__ = 68; break; } //@line 818 "parsermodule.c"
      case 66: // $bb74
        var $336=$elem; //@line 818 "parsermodule.c"
        var $337=$336; //@line 818 "parsermodule.c"
        var $338=HEAP[$337]; //@line 818 "parsermodule.c"
        var $339=($338) - 1; //@line 818 "parsermodule.c"
        var $340=$elem; //@line 818 "parsermodule.c"
        var $341=$340; //@line 818 "parsermodule.c"
        HEAP[$341]=$339; //@line 818 "parsermodule.c"
        var $342=$elem; //@line 818 "parsermodule.c"
        var $343=$342; //@line 818 "parsermodule.c"
        var $344=HEAP[$343]; //@line 818 "parsermodule.c"
        var $345=($344)==0; //@line 818 "parsermodule.c"
        if ($345) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 818 "parsermodule.c"
      case 67: // $bb75
        var $346=$elem; //@line 818 "parsermodule.c"
        var $347=$346+4; //@line 818 "parsermodule.c"
        var $348=HEAP[$347]; //@line 818 "parsermodule.c"
        var $349=$348+24; //@line 818 "parsermodule.c"
        var $350=HEAP[$349]; //@line 818 "parsermodule.c"
        var $351=$elem; //@line 818 "parsermodule.c"
        FUNCTION_TABLE[$350]($351); //@line 818 "parsermodule.c"
        __label__ = 68; break; //@line 818 "parsermodule.c"
      case 68: // $bb76
        var $352=$i; //@line 714 "parsermodule.c"
        var $353=($352) + 1; //@line 714 "parsermodule.c"
        $i=$353; //@line 714 "parsermodule.c"
        __label__ = 69; break; //@line 714 "parsermodule.c"
      case 69: // $bb77
        var $354=$i; //@line 714 "parsermodule.c"
        var $355=$len; //@line 714 "parsermodule.c"
        var $356=($354) < ($355); //@line 714 "parsermodule.c"
        if ($356) { __label__ = 1; break; } else { __label__ = 70; break; } //@line 714 "parsermodule.c"
      case 70: // $bb78
        var $357=$root_addr; //@line 820 "parsermodule.c"
        $0=$357; //@line 820 "parsermodule.c"
        __label__ = 71; break; //@line 820 "parsermodule.c"
      case 71: // $bb79
        var $358=$0; //@line 740 "parsermodule.c"
        $retval=$358; //@line 740 "parsermodule.c"
        var $retval80=$retval; //@line 740 "parsermodule.c"
        ;
        return $retval80; //@line 740 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_terminal($terminal, $type, $string) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $terminal_addr;
        var $type_addr;
        var $string_addr;
        var $retval;
        var $1;
        var $iftmp_62;
        var $res;
        $terminal_addr=$terminal;
        $type_addr=$type;
        $string_addr=$string;
        var $2=$terminal_addr; //@line 988 "parsermodule.c"
        var $3=$type_addr; //@line 988 "parsermodule.c"
        $n_addr_i=$2;
        $t_addr_i=$3;
        var $4=$n_addr_i; //@line 956 "parsermodule.c"
        var $5=$4; //@line 956 "parsermodule.c"
        var $6=HEAP[$5]; //@line 956 "parsermodule.c"
        var $7=($6); //@line 956 "parsermodule.c"
        var $8=$t_addr_i; //@line 956 "parsermodule.c"
        var $9=($7)!=($8); //@line 956 "parsermodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $10=$n_addr_i; //@line 957 "parsermodule.c"
        var $11=$10; //@line 957 "parsermodule.c"
        var $12=HEAP[$11]; //@line 957 "parsermodule.c"
        var $13=($12); //@line 957 "parsermodule.c"
        var $14=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $15=$t_addr_i; //@line 957 "parsermodule.c"
        var $16=_PyErr_Format($14, __str49, $15, $13); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $17=$string_addr; //@line 988 "parsermodule.c"
        var $18=($17)==0; //@line 988 "parsermodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 988 "parsermodule.c"
      case 3: // $bb1
        var $19=$terminal_addr; //@line 988 "parsermodule.c"
        var $20=$19+4; //@line 988 "parsermodule.c"
        var $21=HEAP[$20]; //@line 988 "parsermodule.c"
        var $22=$string_addr; //@line 988 "parsermodule.c"
        var $23=_strcmp($22, $21); //@line 988 "parsermodule.c"
        var $24=($23)==0; //@line 988 "parsermodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 988 "parsermodule.c"
      case 4: // $bb4
        $iftmp_62=1; //@line 988 "parsermodule.c"
        $res=1; //@line 988 "parsermodule.c"
        __label__ = 7; break;
      case 5: // $bb5
        $iftmp_62=0; //@line 988 "parsermodule.c"
        $res=0; //@line 988 "parsermodule.c"
        var $25=_PyErr_Occurred(); //@line 990 "parsermodule.c"
        var $26=($25)==0; //@line 990 "parsermodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 990 "parsermodule.c"
      case 6: // $bb6
        var $27=HEAP[_parser_error]; //@line 991 "parsermodule.c"
        var $28=$string_addr; //@line 991 "parsermodule.c"
        var $29=_PyErr_Format($27, __str51, $28); //@line 991 "parsermodule.c"
        __label__ = 7; break; //@line 991 "parsermodule.c"
      case 7: // $bb7
        var $30=$res; //@line 994 "parsermodule.c"
        $1=$30; //@line 994 "parsermodule.c"
        var $31=$1; //@line 994 "parsermodule.c"
        $retval=$31; //@line 994 "parsermodule.c"
        var $retval8=$retval; //@line 994 "parsermodule.c"
        ;
        return $retval8; //@line 994 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_repeating_list($tree, $ntype, $vfunc, $name) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $0;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $ntype_addr;
        var $vfunc_addr;
        var $name_addr;
        var $retval;
        var $2;
        var $iftmp_65;
        var $iftmp_64;
        var $nch;
        var $res;
        var $pos;
        $tree_addr=$tree;
        $ntype_addr=$ntype;
        $vfunc_addr=$vfunc;
        $name_addr=$name;
        var $3=$tree_addr; //@line 1004 "parsermodule.c"
        var $4=$3+16; //@line 1004 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1004 "parsermodule.c"
        $nch=$5; //@line 1004 "parsermodule.c"
        var $6=$nch; //@line 1006 "parsermodule.c"
        var $7=($6)==0; //@line 1006 "parsermodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1006 "parsermodule.c"
      case 1: // $bb
        var $8=$tree_addr; //@line 1006 "parsermodule.c"
        var $9=$ntype_addr; //@line 1006 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=$9;
        var $10=$n_addr_i; //@line 956 "parsermodule.c"
        var $11=$10; //@line 956 "parsermodule.c"
        var $12=HEAP[$11]; //@line 956 "parsermodule.c"
        var $13=($12); //@line 956 "parsermodule.c"
        var $14=$t_addr_i; //@line 956 "parsermodule.c"
        var $15=($13)!=($14); //@line 956 "parsermodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 956 "parsermodule.c"
      case 2: // $validate_ntype_exit_thread
        var $16=$n_addr_i; //@line 957 "parsermodule.c"
        var $17=$16; //@line 957 "parsermodule.c"
        var $18=HEAP[$17]; //@line 957 "parsermodule.c"
        var $19=($18); //@line 957 "parsermodule.c"
        var $20=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $21=$t_addr_i; //@line 957 "parsermodule.c"
        var $22=_PyErr_Format($20, __str49, $21, $19); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 3: // $bb1
        $1=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $23=$tree_addr; //@line 1006 "parsermodule.c"
        var $24=$23+20; //@line 1006 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1006 "parsermodule.c"
        var $26=$25; //@line 1006 "parsermodule.c"
        var $27=$vfunc_addr; //@line 1006 "parsermodule.c"
        var $28=FUNCTION_TABLE[$27]($26); //@line 1006 "parsermodule.c"
        var $29=($28)==0; //@line 1006 "parsermodule.c"
        if ($29) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1006 "parsermodule.c"
      case 4: // $bb4_thread
        $iftmp_64=1; //@line 1006 "parsermodule.c"
        $res=1; //@line 1006 "parsermodule.c"
        __label__ = 10; break;
      case 5: // $bb5
        $iftmp_64=0; //@line 1006 "parsermodule.c"
        $res=0; //@line 1006 "parsermodule.c"
        var $30=_PyErr_Occurred(); //@line 1008 "parsermodule.c"
        var $31=($30)!=0; //@line 1008 "parsermodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 1008 "parsermodule.c"
      case 6: // $bb6
        var $32=$tree_addr; //@line 1009 "parsermodule.c"
        var $33=$name_addr; //@line 1009 "parsermodule.c"
        $n_addr_i1=$32;
        $num_addr_i=1;
        $name_addr_i=$33;
        var $34=$n_addr_i1; //@line 975 "parsermodule.c"
        var $35=$34+16; //@line 975 "parsermodule.c"
        var $36=HEAP[$35]; //@line 975 "parsermodule.c"
        var $37=$num_addr_i; //@line 975 "parsermodule.c"
        var $38=($36)!=($37); //@line 975 "parsermodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 975 "parsermodule.c"
      case 7: // $bb_i3
        var $39=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $40=$name_addr_i; //@line 976 "parsermodule.c"
        var $41=_PyErr_Format($39, __str50, $40); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 9; break; //@line 978 "parsermodule.c"
      case 8: // $bb1_i4
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 9; break; //@line 980 "parsermodule.c"
      case 9: // $validate_numnodes_exit
        var $42=$0; //@line 978 "parsermodule.c"
        $retval_i2=$42; //@line 978 "parsermodule.c"
        __label__ = 23; break; //@line 1009 "parsermodule.c"
      case 10: // $bb7
        var $43=$nch; //@line 1011 "parsermodule.c"
        var $44=($43) & 1; //@line 1011 "parsermodule.c"
        var $45=($44)==0; //@line 1011 "parsermodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1011 "parsermodule.c"
      case 11: // $bb8
        var $46=$tree_addr; //@line 1012 "parsermodule.c"
        var $47=$46+20; //@line 1012 "parsermodule.c"
        var $48=HEAP[$47]; //@line 1012 "parsermodule.c"
        var $49=$nch; //@line 1012 "parsermodule.c"
        var $50=($49) - 1; //@line 1012 "parsermodule.c"
        $nch=$50; //@line 1012 "parsermodule.c"
        var $51=$nch; //@line 1012 "parsermodule.c"
        var $52=$48+24*$51; //@line 1012 "parsermodule.c"
        var $53=_validate_terminal($52, 12, __str52); //@line 1012 "parsermodule.c"
        $res=$53; //@line 1012 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 13; break; //@line 1012 "parsermodule.c"
      case 12: // $bb9thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb9
        var $54=__lastLabel__ == 12 ? $_pr : ($53);
        var $55=($54)!=0; //@line 1013 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 23; break; } //@line 1013 "parsermodule.c"
      case 14: // $bb10
        var $56=$nch; //@line 1013 "parsermodule.c"
        var $57=($56) > 1; //@line 1013 "parsermodule.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 23; break; } //@line 1013 "parsermodule.c"
      case 15: // $bb11
        $pos=1; //@line 1014 "parsermodule.c"
        var $_pr6=$res;
        __lastLabel__ = 15; __label__ = 21; break; //@line 1014 "parsermodule.c"
      case 16: // $bb12
        var $58=$tree_addr; //@line 1016 "parsermodule.c"
        var $59=$58+20; //@line 1016 "parsermodule.c"
        var $60=HEAP[$59]; //@line 1016 "parsermodule.c"
        var $61=$pos; //@line 1016 "parsermodule.c"
        var $62=$60+24*$61; //@line 1016 "parsermodule.c"
        var $63=_validate_terminal($62, 12, __str52); //@line 1016 "parsermodule.c"
        var $64=($63)==0; //@line 1016 "parsermodule.c"
        if ($64) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1016 "parsermodule.c"
      case 17: // $bb13
        var $65=$tree_addr; //@line 1016 "parsermodule.c"
        var $66=$65+20; //@line 1016 "parsermodule.c"
        var $67=HEAP[$66]; //@line 1016 "parsermodule.c"
        var $68=$pos; //@line 1016 "parsermodule.c"
        var $69=($68) + 1; //@line 1016 "parsermodule.c"
        var $70=$67+24*$69; //@line 1016 "parsermodule.c"
        var $71=$vfunc_addr; //@line 1016 "parsermodule.c"
        var $72=FUNCTION_TABLE[$71]($70); //@line 1016 "parsermodule.c"
        var $73=($72)==0; //@line 1016 "parsermodule.c"
        if ($73) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1016 "parsermodule.c"
      case 18: // $bb14
        $iftmp_65=1; //@line 1016 "parsermodule.c"
        __label__ = 20; break; //@line 1016 "parsermodule.c"
      case 19: // $bb15
        $iftmp_65=0; //@line 1016 "parsermodule.c"
        __label__ = 20; break; //@line 1016 "parsermodule.c"
      case 20: // $bb16
        var $74=$iftmp_65; //@line 1016 "parsermodule.c"
        $res=$74; //@line 1016 "parsermodule.c"
        var $75=$pos; //@line 1015 "parsermodule.c"
        var $76=($75) + 2; //@line 1015 "parsermodule.c"
        $pos=$76; //@line 1015 "parsermodule.c"
        __lastLabel__ = 20; __label__ = 21; break; //@line 1015 "parsermodule.c"
      case 21: // $bb17
        var $77=__lastLabel__ == 20 ? $74 : ($_pr6);
        var $78=($77)==0; //@line 1015 "parsermodule.c"
        if ($78) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1015 "parsermodule.c"
      case 22: // $bb18
        var $79=$pos; //@line 1015 "parsermodule.c"
        var $80=$nch; //@line 1015 "parsermodule.c"
        var $81=($79) < ($80); //@line 1015 "parsermodule.c"
        if ($81) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 1015 "parsermodule.c"
      case 23: // $bb19
        var $82=$res; //@line 1020 "parsermodule.c"
        $2=$82; //@line 1020 "parsermodule.c"
        var $83=$2; //@line 1020 "parsermodule.c"
        $retval=$83; //@line 1020 "parsermodule.c"
        var $retval20=$retval; //@line 1020 "parsermodule.c"
        ;
        return $retval20; //@line 1020 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_class($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr_i;
        var $retval_i16;
        var $0;
        var $n_addr_i11;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i12;
        var $1;
        var $n_addr_i4;
        var $t_addr_i5;
        var $retval_i6;
        var $2;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_69;
        var $iftmp_68;
        var $iftmp_67;
        var $iftmp_66;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 1032 "parsermodule.c"
        var $6=$5+16; //@line 1032 "parsermodule.c"
        var $7=HEAP[$6]; //@line 1032 "parsermodule.c"
        $nch=$7; //@line 1032 "parsermodule.c"
        var $8=$tree_addr; //@line 1034 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=329;
        var $9=$n_addr_i; //@line 956 "parsermodule.c"
        var $10=$9; //@line 956 "parsermodule.c"
        var $11=HEAP[$10]; //@line 956 "parsermodule.c"
        var $12=($11); //@line 956 "parsermodule.c"
        var $13=$t_addr_i; //@line 956 "parsermodule.c"
        var $14=($12)!=($13); //@line 956 "parsermodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $15=$n_addr_i; //@line 957 "parsermodule.c"
        var $16=$15; //@line 957 "parsermodule.c"
        var $17=HEAP[$16]; //@line 957 "parsermodule.c"
        var $18=($17); //@line 957 "parsermodule.c"
        var $19=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $20=$t_addr_i; //@line 957 "parsermodule.c"
        var $21=_PyErr_Format($19, __str49, $20, $18); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 11; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $22=$nch; //@line 1034 "parsermodule.c"
        var $23=($22)==4; //@line 1034 "parsermodule.c"
        var $24=$nch; //@line 1034 "parsermodule.c"
        var $25=($24)==6; //@line 1034 "parsermodule.c"
        var $or_cond=($23) | ($25);
        var $26=$nch; //@line 1034 "parsermodule.c"
        var $27=($26)==7; //@line 1034 "parsermodule.c"
        var $or_cond3=($or_cond) | ($27);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 1034 "parsermodule.c"
      case 3: // $bb6
        $iftmp_66=1; //@line 1034 "parsermodule.c"
        $res=1; //@line 1034 "parsermodule.c"
        var $28=$tree_addr; //@line 1037 "parsermodule.c"
        var $29=$28+20; //@line 1037 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1037 "parsermodule.c"
        var $31=$30; //@line 1037 "parsermodule.c"
        var $32=_validate_terminal($31, 1, __str53); //@line 1037 "parsermodule.c"
        var $33=($32)==0; //@line 1037 "parsermodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 4; break; } //@line 1037 "parsermodule.c"
      case 4: // $bb7
        var $34=$tree_addr; //@line 1037 "parsermodule.c"
        var $35=$34+20; //@line 1037 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1037 "parsermodule.c"
        var $37=$36+24; //@line 1037 "parsermodule.c"
        $n_addr_i4=$37;
        $t_addr_i5=1;
        var $38=$n_addr_i4; //@line 956 "parsermodule.c"
        var $39=$38; //@line 956 "parsermodule.c"
        var $40=HEAP[$39]; //@line 956 "parsermodule.c"
        var $41=($40); //@line 956 "parsermodule.c"
        var $42=$t_addr_i5; //@line 956 "parsermodule.c"
        var $43=($41)!=($42); //@line 956 "parsermodule.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 956 "parsermodule.c"
      case 5: // $validate_ntype_exit10_thread
        var $44=$n_addr_i4; //@line 957 "parsermodule.c"
        var $45=$44; //@line 957 "parsermodule.c"
        var $46=HEAP[$45]; //@line 957 "parsermodule.c"
        var $47=($46); //@line 957 "parsermodule.c"
        var $48=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $49=$t_addr_i5; //@line 957 "parsermodule.c"
        var $50=_PyErr_Format($48, __str49, $49, $47); //@line 957 "parsermodule.c"
        $2=0; //@line 959 "parsermodule.c"
        $retval_i6=0; //@line 959 "parsermodule.c"
        __label__ = 9; break;
      case 6: // $bb8
        $2=1; //@line 961 "parsermodule.c"
        $retval_i6=1; //@line 959 "parsermodule.c"
        var $51=$tree_addr; //@line 1037 "parsermodule.c"
        var $52=$51+20; //@line 1037 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1037 "parsermodule.c"
        var $54=$nch; //@line 1037 "parsermodule.c"
        var $55=($54) - 2; //@line 1037 "parsermodule.c"
        var $56=$53+24*$55; //@line 1037 "parsermodule.c"
        var $57=_validate_terminal($56, 11, __str54); //@line 1037 "parsermodule.c"
        var $58=($57)==0; //@line 1037 "parsermodule.c"
        if ($58) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1037 "parsermodule.c"
      case 7: // $bb9
        var $59=$tree_addr; //@line 1037 "parsermodule.c"
        var $60=$59+20; //@line 1037 "parsermodule.c"
        var $61=HEAP[$60]; //@line 1037 "parsermodule.c"
        var $62=$nch; //@line 1037 "parsermodule.c"
        var $63=($62) - 1; //@line 1037 "parsermodule.c"
        var $64=$61+24*$63; //@line 1037 "parsermodule.c"
        var $65=_validate_suite($64); //@line 1037 "parsermodule.c"
        var $66=($65)==0; //@line 1037 "parsermodule.c"
        if ($66) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1037 "parsermodule.c"
      case 8: // $bb10
        $iftmp_67=1; //@line 1037 "parsermodule.c"
        __label__ = 10; break; //@line 1037 "parsermodule.c"
      case 9: // $bb11
        $iftmp_67=0; //@line 1037 "parsermodule.c"
        __label__ = 10; break; //@line 1037 "parsermodule.c"
      case 10: // $bb12
        var $67=$iftmp_67; //@line 1037 "parsermodule.c"
        $res=$67; //@line 1037 "parsermodule.c"
        __lastLabel__ = 10; __label__ = 15; break; //@line 1037 "parsermodule.c"
      case 11: // $bb13
        $iftmp_66=0; //@line 1034 "parsermodule.c"
        $res=0; //@line 1034 "parsermodule.c"
        var $68=$tree_addr; //@line 1037 "parsermodule.c"
        $n_addr_i11=$68;
        $num_addr_i=4;
        $name_addr_i=__str53;
        var $69=$n_addr_i11; //@line 975 "parsermodule.c"
        var $70=$69+16; //@line 975 "parsermodule.c"
        var $71=HEAP[$70]; //@line 975 "parsermodule.c"
        var $72=$num_addr_i; //@line 975 "parsermodule.c"
        var $73=($71)!=($72); //@line 975 "parsermodule.c"
        if ($73) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 975 "parsermodule.c"
      case 12: // $bb_i13
        var $74=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $75=$name_addr_i; //@line 976 "parsermodule.c"
        var $76=_PyErr_Format($74, __str50, $75); //@line 976 "parsermodule.c"
        $1=0; //@line 978 "parsermodule.c"
        __label__ = 14; break; //@line 978 "parsermodule.c"
      case 13: // $bb1_i14
        $1=1; //@line 980 "parsermodule.c"
        __label__ = 14; break; //@line 980 "parsermodule.c"
      case 14: // $validate_numnodes_exit
        var $77=$1; //@line 978 "parsermodule.c"
        $retval_i12=$77; //@line 978 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 14; __label__ = 15; break; //@line 1043 "parsermodule.c"
      case 15: // $bb14
        var $78=__lastLabel__ == 14 ? $_pr : ($67);
        var $79=($78)!=0; //@line 1046 "parsermodule.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 29; break; } //@line 1046 "parsermodule.c"
      case 16: // $bb15
        var $80=$nch; //@line 1047 "parsermodule.c"
        var $81=($80)==7; //@line 1047 "parsermodule.c"
        if ($81) { __label__ = 17; break; } else { __label__ = 23; break; } //@line 1047 "parsermodule.c"
      case 17: // $bb16
        var $82=$tree_addr; //@line 1048 "parsermodule.c"
        var $83=$82+20; //@line 1048 "parsermodule.c"
        var $84=HEAP[$83]; //@line 1048 "parsermodule.c"
        var $85=$84+48; //@line 1048 "parsermodule.c"
        var $86=_validate_terminal($85, 7, __str55); //@line 1048 "parsermodule.c"
        var $87=($86)==0; //@line 1048 "parsermodule.c"
        if ($87) { __label__ = 21; break; } else { __label__ = 18; break; } //@line 1048 "parsermodule.c"
      case 18: // $bb17
        var $88=$tree_addr; //@line 1048 "parsermodule.c"
        var $89=$88+20; //@line 1048 "parsermodule.c"
        var $90=HEAP[$89]; //@line 1048 "parsermodule.c"
        var $91=$90+72; //@line 1048 "parsermodule.c"
        $tree_addr_i=$91;
        var $92=$tree_addr_i; //@line 1162 "parsermodule.c"
        var $93=_validate_repeating_list($92, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $0=$93; //@line 1162 "parsermodule.c"
        var $94=$0; //@line 1162 "parsermodule.c"
        $retval_i16=$94; //@line 1162 "parsermodule.c"
        var $retval1_i=$retval_i16; //@line 1162 "parsermodule.c"
        var $95=($retval1_i)==0; //@line 1048 "parsermodule.c"
        if ($95) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 1048 "parsermodule.c"
      case 19: // $bb18
        var $96=$tree_addr; //@line 1048 "parsermodule.c"
        var $97=$96+20; //@line 1048 "parsermodule.c"
        var $98=HEAP[$97]; //@line 1048 "parsermodule.c"
        var $99=$98+96; //@line 1048 "parsermodule.c"
        var $100=_validate_terminal($99, 8, __str56); //@line 1048 "parsermodule.c"
        var $101=($100)==0; //@line 1048 "parsermodule.c"
        if ($101) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1048 "parsermodule.c"
      case 20: // $bb19
        $iftmp_68=1; //@line 1048 "parsermodule.c"
        __label__ = 22; break; //@line 1048 "parsermodule.c"
      case 21: // $bb20
        $iftmp_68=0; //@line 1048 "parsermodule.c"
        __label__ = 22; break; //@line 1048 "parsermodule.c"
      case 22: // $bb21
        var $102=$iftmp_68; //@line 1048 "parsermodule.c"
        $res=$102; //@line 1048 "parsermodule.c"
        __label__ = 29; break; //@line 1048 "parsermodule.c"
      case 23: // $bb22
        var $103=$nch; //@line 1052 "parsermodule.c"
        var $104=($103)==6; //@line 1052 "parsermodule.c"
        if ($104) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1052 "parsermodule.c"
      case 24: // $bb23
        var $105=$tree_addr; //@line 1053 "parsermodule.c"
        var $106=$105+20; //@line 1053 "parsermodule.c"
        var $107=HEAP[$106]; //@line 1053 "parsermodule.c"
        var $108=$107+48; //@line 1053 "parsermodule.c"
        var $109=_validate_terminal($108, 7, __str55); //@line 1053 "parsermodule.c"
        var $110=($109)==0; //@line 1053 "parsermodule.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 1053 "parsermodule.c"
      case 25: // $bb24
        var $111=$tree_addr; //@line 1053 "parsermodule.c"
        var $112=$111+20; //@line 1053 "parsermodule.c"
        var $113=HEAP[$112]; //@line 1053 "parsermodule.c"
        var $114=$113+72; //@line 1053 "parsermodule.c"
        var $115=_validate_terminal($114, 8, __str56); //@line 1053 "parsermodule.c"
        var $116=($115)==0; //@line 1053 "parsermodule.c"
        if ($116) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1053 "parsermodule.c"
      case 26: // $bb25
        $iftmp_69=1; //@line 1053 "parsermodule.c"
        __label__ = 28; break; //@line 1053 "parsermodule.c"
      case 27: // $bb26
        $iftmp_69=0; //@line 1053 "parsermodule.c"
        __label__ = 28; break; //@line 1053 "parsermodule.c"
      case 28: // $bb27
        var $117=$iftmp_69; //@line 1053 "parsermodule.c"
        $res=$117; //@line 1053 "parsermodule.c"
        __label__ = 29; break; //@line 1053 "parsermodule.c"
      case 29: // $bb28
        var $118=$res; //@line 1057 "parsermodule.c"
        $4=$118; //@line 1057 "parsermodule.c"
        var $119=$4; //@line 1057 "parsermodule.c"
        $retval=$119; //@line 1057 "parsermodule.c"
        var $retval29=$retval; //@line 1057 "parsermodule.c"
        ;
        return $retval29; //@line 1057 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_suite($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i2;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i3;
        var $0;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_77;
        var $iftmp_76;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1134 "parsermodule.c"
        var $4=$3+16; //@line 1134 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1134 "parsermodule.c"
        $nch=$5; //@line 1134 "parsermodule.c"
        var $6=$tree_addr; //@line 1135 "parsermodule.c"
        $n_addr_i=$6;
        $t_addr_i=300;
        var $7=$n_addr_i; //@line 956 "parsermodule.c"
        var $8=$7; //@line 956 "parsermodule.c"
        var $9=HEAP[$8]; //@line 956 "parsermodule.c"
        var $10=($9); //@line 956 "parsermodule.c"
        var $11=$t_addr_i; //@line 956 "parsermodule.c"
        var $12=($10)!=($11); //@line 956 "parsermodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $13=$n_addr_i; //@line 957 "parsermodule.c"
        var $14=$13; //@line 957 "parsermodule.c"
        var $15=HEAP[$14]; //@line 957 "parsermodule.c"
        var $16=($15); //@line 957 "parsermodule.c"
        var $17=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $18=$t_addr_i; //@line 957 "parsermodule.c"
        var $19=_PyErr_Format($17, __str49, $18, $16); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $1=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $20=$nch; //@line 1135 "parsermodule.c"
        var $21=($20)==1; //@line 1135 "parsermodule.c"
        var $22=$nch; //@line 1135 "parsermodule.c"
        var $23=($22) > 3; //@line 1135 "parsermodule.c"
        var $or_cond=($21) | ($23);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1135 "parsermodule.c"
      case 3: // $bb5
        $iftmp_76=1; //@line 1135 "parsermodule.c"
        $res=1; //@line 1135 "parsermodule.c"
        var $24=$nch; //@line 1137 "parsermodule.c"
        var $25=($24)!=1; //@line 1137 "parsermodule.c"
        var $26=$tree_addr; //@line 1141 "parsermodule.c"
        var $27=$26+20; //@line 1141 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1141 "parsermodule.c"
        var $29=$28; //@line 1141 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1137 "parsermodule.c"
      case 4: // $bb6
        var $30=_validate_simple_stmt($29); //@line 1138 "parsermodule.c"
        $res=$30; //@line 1138 "parsermodule.c"
        __label__ = 21; break; //@line 1138 "parsermodule.c"
      case 5: // $bb7
        $iftmp_76=0; //@line 1135 "parsermodule.c"
        $res=0; //@line 1135 "parsermodule.c"
        __label__ = 21; break;
      case 6: // $bb8
        var $31=_validate_terminal($29, 4, 0); //@line 1141 "parsermodule.c"
        var $32=($31)==0; //@line 1141 "parsermodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 1141 "parsermodule.c"
      case 7: // $bb9
        var $33=$tree_addr; //@line 1141 "parsermodule.c"
        var $34=$33+20; //@line 1141 "parsermodule.c"
        var $35=HEAP[$34]; //@line 1141 "parsermodule.c"
        var $36=$35+24; //@line 1141 "parsermodule.c"
        var $37=_validate_terminal($36, 5, 0); //@line 1141 "parsermodule.c"
        var $38=($37)==0; //@line 1141 "parsermodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 1141 "parsermodule.c"
      case 8: // $bb10
        var $39=$tree_addr; //@line 1141 "parsermodule.c"
        var $40=$39+20; //@line 1141 "parsermodule.c"
        var $41=HEAP[$40]; //@line 1141 "parsermodule.c"
        var $42=$41+48; //@line 1141 "parsermodule.c"
        var $43=_validate_stmt($42); //@line 1141 "parsermodule.c"
        var $44=($43)==0; //@line 1141 "parsermodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1141 "parsermodule.c"
      case 9: // $bb11
        var $45=$tree_addr; //@line 1141 "parsermodule.c"
        var $46=$45+20; //@line 1141 "parsermodule.c"
        var $47=HEAP[$46]; //@line 1141 "parsermodule.c"
        var $48=$nch; //@line 1141 "parsermodule.c"
        var $49=($48) - 1; //@line 1141 "parsermodule.c"
        var $50=$47+24*$49; //@line 1141 "parsermodule.c"
        var $51=_validate_terminal($50, 6, __str61); //@line 1141 "parsermodule.c"
        var $52=($51)==0; //@line 1141 "parsermodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1141 "parsermodule.c"
      case 10: // $bb14_thread
        $iftmp_77=0; //@line 1141 "parsermodule.c"
        $res=0; //@line 1141 "parsermodule.c"
        var $_pr7=$nch;
        __lastLabel__ = 10; __label__ = 16; break;
      case 11: // $bb15
        $iftmp_77=1; //@line 1141 "parsermodule.c"
        $res=1; //@line 1141 "parsermodule.c"
        var $53=$nch; //@line 1146 "parsermodule.c"
        var $54=($53) <= 4; //@line 1146 "parsermodule.c"
        if ($54) { __lastLabel__ = 11; __label__ = 16; break; } else { __lastLabel__ = 11; __label__ = 12; break; } //@line 1146 "parsermodule.c"
      case 12: // $bb16
        $i=3; //@line 1147 "parsermodule.c"
        var $55=$nch; //@line 1148 "parsermodule.c"
        var $56=($55) - 1; //@line 1148 "parsermodule.c"
        $nch=$56; //@line 1148 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 12; __label__ = 14; break; //@line 1148 "parsermodule.c"
      case 13: // $bb17
        var $57=$tree_addr; //@line 1150 "parsermodule.c"
        var $58=$57+20; //@line 1150 "parsermodule.c"
        var $59=HEAP[$58]; //@line 1150 "parsermodule.c"
        var $60=$i; //@line 1150 "parsermodule.c"
        var $61=$59+24*$60; //@line 1150 "parsermodule.c"
        var $62=_validate_stmt($61); //@line 1150 "parsermodule.c"
        $res=$62; //@line 1150 "parsermodule.c"
        var $63=$i; //@line 1149 "parsermodule.c"
        var $64=($63) + 1; //@line 1149 "parsermodule.c"
        $i=$64; //@line 1149 "parsermodule.c"
        __lastLabel__ = 13; __label__ = 14; break; //@line 1149 "parsermodule.c"
      case 14: // $bb18
        var $65=__lastLabel__ == 13 ? $62 : ($_pr);
        var $66=($65)==0; //@line 1149 "parsermodule.c"
        if ($66) { __label__ = 21; break; } else { __label__ = 15; break; } //@line 1149 "parsermodule.c"
      case 15: // $bb19
        var $67=$i; //@line 1149 "parsermodule.c"
        var $68=$nch; //@line 1149 "parsermodule.c"
        var $69=($67) < ($68); //@line 1149 "parsermodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 21; break; } //@line 1149 "parsermodule.c"
      case 16: // $bb21
        var $70=__lastLabel__ == 10 ? $_pr7 : ($53);
        var $71=($70) <= 3; //@line 1152 "parsermodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 21; break; } //@line 1152 "parsermodule.c"
      case 17: // $bb22
        var $72=$tree_addr; //@line 1153 "parsermodule.c"
        $n_addr_i2=$72;
        $num_addr_i=4;
        $name_addr_i=__str62;
        var $73=$n_addr_i2; //@line 975 "parsermodule.c"
        var $74=$73+16; //@line 975 "parsermodule.c"
        var $75=HEAP[$74]; //@line 975 "parsermodule.c"
        var $76=$num_addr_i; //@line 975 "parsermodule.c"
        var $77=($75)!=($76); //@line 975 "parsermodule.c"
        if ($77) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 975 "parsermodule.c"
      case 18: // $bb_i4
        var $78=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $79=$name_addr_i; //@line 976 "parsermodule.c"
        var $80=_PyErr_Format($78, __str50, $79); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 20; break; //@line 978 "parsermodule.c"
      case 19: // $bb1_i5
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 20; break; //@line 980 "parsermodule.c"
      case 20: // $validate_numnodes_exit
        var $81=$0; //@line 978 "parsermodule.c"
        $retval_i3=$81; //@line 978 "parsermodule.c"
        var $retval3_i6=$retval_i3; //@line 978 "parsermodule.c"
        $res=$retval3_i6; //@line 1153 "parsermodule.c"
        __label__ = 21; break; //@line 1153 "parsermodule.c"
      case 21: // $bb23
        var $82=$res; //@line 1155 "parsermodule.c"
        $2=$82; //@line 1155 "parsermodule.c"
        var $83=$2; //@line 1155 "parsermodule.c"
        $retval=$83; //@line 1155 "parsermodule.c"
        var $retval24=$retval; //@line 1155 "parsermodule.c"
        ;
        return $retval24; //@line 1155 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_varargslist_trailer($tree, $start) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i1;
        var $message_addr_i;
        var $tree_addr;
        var $start_addr;
        var $retval;
        var $iftmp_78;
        var $0;
        var $nch;
        var $res;
        var $sym;
        $tree_addr=$tree;
        $start_addr=$start;
        var $1=$tree_addr; //@line 1188 "parsermodule.c"
        var $2=$1+16; //@line 1188 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1188 "parsermodule.c"
        $nch=$3; //@line 1188 "parsermodule.c"
        $res=0; //@line 1189 "parsermodule.c"
        var $4=$nch; //@line 1192 "parsermodule.c"
        var $5=$start_addr; //@line 1192 "parsermodule.c"
        var $6=($4) <= ($5); //@line 1192 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1192 "parsermodule.c"
      case 1: // $bb
        $message_addr_i=__str66;
        var $7=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $8=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($7, $8); //@line 531 "parsermodule.c"
        $0=0; //@line 1194 "parsermodule.c"
        __label__ = 20; break; //@line 1194 "parsermodule.c"
      case 2: // $bb1
        var $9=$tree_addr; //@line 1196 "parsermodule.c"
        var $10=$9+20; //@line 1196 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1196 "parsermodule.c"
        var $12=$start_addr; //@line 1196 "parsermodule.c"
        var $13=$11+24*$12; //@line 1196 "parsermodule.c"
        var $14=$13; //@line 1196 "parsermodule.c"
        var $15=HEAP[$14]; //@line 1196 "parsermodule.c"
        var $16=($15); //@line 1196 "parsermodule.c"
        $sym=$16; //@line 1196 "parsermodule.c"
        var $17=$sym; //@line 1197 "parsermodule.c"
        var $18=($17)==16; //@line 1197 "parsermodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 1197 "parsermodule.c"
      case 3: // $bb2
        var $19=$nch; //@line 1201 "parsermodule.c"
        var $20=$start_addr; //@line 1201 "parsermodule.c"
        var $21=($19) - ($20); //@line 1201 "parsermodule.c"
        var $22=($21)==2; //@line 1201 "parsermodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1201 "parsermodule.c"
      case 4: // $bb3
        var $23=$tree_addr; //@line 1202 "parsermodule.c"
        var $24=$23+20; //@line 1202 "parsermodule.c"
        var $25=HEAP[$24]; //@line 1202 "parsermodule.c"
        var $26=$start_addr; //@line 1202 "parsermodule.c"
        var $27=($26) + 1; //@line 1202 "parsermodule.c"
        var $28=$25+24*$27; //@line 1202 "parsermodule.c"
        var $29=_validate_terminal($28, 1, 0); //@line 1202 "parsermodule.c"
        $res=$29; //@line 1202 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 17; break; //@line 1202 "parsermodule.c"
      case 5: // $bb4
        var $30=$nch; //@line 1203 "parsermodule.c"
        var $31=$start_addr; //@line 1203 "parsermodule.c"
        var $32=($30) - ($31); //@line 1203 "parsermodule.c"
        var $33=($32)==5; //@line 1203 "parsermodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 16; break; } //@line 1203 "parsermodule.c"
      case 6: // $bb5
        var $34=$tree_addr; //@line 1204 "parsermodule.c"
        var $35=$34+20; //@line 1204 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1204 "parsermodule.c"
        var $37=$start_addr; //@line 1204 "parsermodule.c"
        var $38=($37) + 1; //@line 1204 "parsermodule.c"
        var $39=$36+24*$38; //@line 1204 "parsermodule.c"
        var $40=_validate_terminal($39, 1, 0); //@line 1204 "parsermodule.c"
        var $41=($40)==0; //@line 1204 "parsermodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 1204 "parsermodule.c"
      case 7: // $bb6
        var $42=$tree_addr; //@line 1204 "parsermodule.c"
        var $43=$42+20; //@line 1204 "parsermodule.c"
        var $44=HEAP[$43]; //@line 1204 "parsermodule.c"
        var $45=$start_addr; //@line 1204 "parsermodule.c"
        var $46=($45) + 2; //@line 1204 "parsermodule.c"
        var $47=$44+24*$46; //@line 1204 "parsermodule.c"
        var $48=_validate_terminal($47, 12, __str52); //@line 1204 "parsermodule.c"
        var $49=($48)==0; //@line 1204 "parsermodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1204 "parsermodule.c"
      case 8: // $bb7
        var $50=$tree_addr; //@line 1204 "parsermodule.c"
        var $51=$50+20; //@line 1204 "parsermodule.c"
        var $52=HEAP[$51]; //@line 1204 "parsermodule.c"
        var $53=$start_addr; //@line 1204 "parsermodule.c"
        var $54=($53) + 3; //@line 1204 "parsermodule.c"
        var $55=$52+24*$54; //@line 1204 "parsermodule.c"
        var $56=_validate_terminal($55, 36, __str67); //@line 1204 "parsermodule.c"
        var $57=($56)==0; //@line 1204 "parsermodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 1204 "parsermodule.c"
      case 9: // $bb8
        var $58=$tree_addr; //@line 1204 "parsermodule.c"
        var $59=$58+20; //@line 1204 "parsermodule.c"
        var $60=HEAP[$59]; //@line 1204 "parsermodule.c"
        var $61=$start_addr; //@line 1204 "parsermodule.c"
        var $62=($61) + 4; //@line 1204 "parsermodule.c"
        var $63=$60+24*$62; //@line 1204 "parsermodule.c"
        var $64=_validate_terminal($63, 1, 0); //@line 1204 "parsermodule.c"
        var $65=($64)==0; //@line 1204 "parsermodule.c"
        if ($65) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1204 "parsermodule.c"
      case 10: // $bb9
        $iftmp_78=1; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 11: // $bb10
        $iftmp_78=0; //@line 1204 "parsermodule.c"
        __label__ = 12; break; //@line 1204 "parsermodule.c"
      case 12: // $bb11
        var $66=$iftmp_78; //@line 1204 "parsermodule.c"
        $res=$66; //@line 1204 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 17; break; //@line 1204 "parsermodule.c"
      case 13: // $bb13
        var $67=$sym; //@line 1209 "parsermodule.c"
        var $68=($67)==36; //@line 1209 "parsermodule.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1209 "parsermodule.c"
      case 14: // $bb14
        var $69=$nch; //@line 1213 "parsermodule.c"
        var $70=$start_addr; //@line 1213 "parsermodule.c"
        var $71=($69) - ($70); //@line 1213 "parsermodule.c"
        var $72=($71)==2; //@line 1213 "parsermodule.c"
        if ($72) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1213 "parsermodule.c"
      case 15: // $bb15
        var $73=$tree_addr; //@line 1214 "parsermodule.c"
        var $74=$73+20; //@line 1214 "parsermodule.c"
        var $75=HEAP[$74]; //@line 1214 "parsermodule.c"
        var $76=$start_addr; //@line 1214 "parsermodule.c"
        var $77=($76) + 1; //@line 1214 "parsermodule.c"
        var $78=$75+24*$77; //@line 1214 "parsermodule.c"
        var $79=_validate_terminal($78, 1, 0); //@line 1214 "parsermodule.c"
        $res=$79; //@line 1214 "parsermodule.c"
        __lastLabel__ = 15; __label__ = 17; break; //@line 1214 "parsermodule.c"
      case 16: // $bb16thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 16; __label__ = 17; break;
      case 17: // $bb16
        var $80=__lastLabel__ == 16 ? $_pr : (__lastLabel__ == 4 ? $29 : (__lastLabel__ == 12 ? $66 : ($79)));
        var $81=($80)==0; //@line 1216 "parsermodule.c"
        if ($81) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1216 "parsermodule.c"
      case 18: // $bb17
        $message_addr_i1=__str68;
        var $82=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $83=$message_addr_i1; //@line 531 "parsermodule.c"
        _PyErr_SetString($82, $83); //@line 531 "parsermodule.c"
        __label__ = 19; break; //@line 1217 "parsermodule.c"
      case 19: // $bb18
        var $84=$res; //@line 1218 "parsermodule.c"
        $0=$84; //@line 1218 "parsermodule.c"
        __label__ = 20; break; //@line 1218 "parsermodule.c"
      case 20: // $bb19
        var $85=$0; //@line 1194 "parsermodule.c"
        $retval=$85; //@line 1194 "parsermodule.c"
        var $retval20=$retval; //@line 1194 "parsermodule.c"
        ;
        return $retval20; //@line 1194 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_varargslist($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i2;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $message_addr_i;
        var $tree_addr;
        var $retval;
        var $iftmp_83;
        var $iftmp_82;
        var $iftmp_81;
        var $iftmp_80;
        var $1;
        var $iftmp_79;
        var $nch;
        var $res;
        var $sym;
        var $i;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 1234 "parsermodule.c"
        var $3=$2+16; //@line 1234 "parsermodule.c"
        var $4=HEAP[$3]; //@line 1234 "parsermodule.c"
        $nch=$4; //@line 1234 "parsermodule.c"
        var $5=$tree_addr; //@line 1235 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=264;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 1235 "parsermodule.c"
        var $20=($19)==0; //@line 1235 "parsermodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1235 "parsermodule.c"
      case 3: // $bb4
        $iftmp_79=0; //@line 1235 "parsermodule.c"
        $res=0; //@line 1235 "parsermodule.c"
        $1=0; //@line 1239 "parsermodule.c"
        __label__ = 57; break; //@line 1239 "parsermodule.c"
      case 4: // $bb5
        $iftmp_79=1; //@line 1235 "parsermodule.c"
        $res=1; //@line 1235 "parsermodule.c"
        var $21=$nch; //@line 1240 "parsermodule.c"
        var $22=($21) <= 0; //@line 1240 "parsermodule.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1240 "parsermodule.c"
      case 5: // $bb6
        $message_addr_i2=__str69;
        var $23=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $24=$message_addr_i2; //@line 531 "parsermodule.c"
        _PyErr_SetString($23, $24); //@line 531 "parsermodule.c"
        $1=0; //@line 1242 "parsermodule.c"
        __label__ = 57; break; //@line 1242 "parsermodule.c"
      case 6: // $bb7
        var $25=$tree_addr; //@line 1244 "parsermodule.c"
        var $26=$25+20; //@line 1244 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1244 "parsermodule.c"
        var $28=$27; //@line 1244 "parsermodule.c"
        var $29=$28; //@line 1244 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1244 "parsermodule.c"
        var $31=($30); //@line 1244 "parsermodule.c"
        $sym=$31; //@line 1244 "parsermodule.c"
        var $32=$sym; //@line 1245 "parsermodule.c"
        var $33=($32)==16; //@line 1245 "parsermodule.c"
        var $34=$sym; //@line 1245 "parsermodule.c"
        var $35=($34)==36; //@line 1245 "parsermodule.c"
        var $or_cond=($33) | ($35);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1245 "parsermodule.c"
      case 7: // $bb9
        var $36=$tree_addr; //@line 1249 "parsermodule.c"
        var $37=_validate_varargslist_trailer($36, 0); //@line 1249 "parsermodule.c"
        $res=$37; //@line 1249 "parsermodule.c"
        __label__ = 56; break; //@line 1249 "parsermodule.c"
      case 8: // $bb10
        var $38=$sym; //@line 1250 "parsermodule.c"
        var $39=($38)==265; //@line 1250 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 56; break; } //@line 1250 "parsermodule.c"
      case 9: // $bb11
        $i=0; //@line 1251 "parsermodule.c"
        var $40=$tree_addr; //@line 1253 "parsermodule.c"
        var $41=$40+20; //@line 1253 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1253 "parsermodule.c"
        var $43=$nch; //@line 1253 "parsermodule.c"
        var $44=($43) - 1; //@line 1253 "parsermodule.c"
        var $45=$42+24*$44; //@line 1253 "parsermodule.c"
        var $46=$45; //@line 1253 "parsermodule.c"
        var $47=HEAP[$46]; //@line 1253 "parsermodule.c"
        var $48=($47); //@line 1253 "parsermodule.c"
        $sym=$48; //@line 1253 "parsermodule.c"
        var $49=$sym; //@line 1254 "parsermodule.c"
        var $50=($49)==1; //@line 1254 "parsermodule.c"
        if ($50) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 1254 "parsermodule.c"
      case 10: // $bb13
        var $51=$tree_addr; //@line 1262 "parsermodule.c"
        var $52=$51+20; //@line 1262 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1262 "parsermodule.c"
        var $54=$i; //@line 1262 "parsermodule.c"
        var $55=$53+24*$54; //@line 1262 "parsermodule.c"
        var $56=_validate_fpdef($55); //@line 1262 "parsermodule.c"
        $res=$56; //@line 1262 "parsermodule.c"
        var $57=$i; //@line 1263 "parsermodule.c"
        var $58=($57) + 1; //@line 1263 "parsermodule.c"
        $i=$58; //@line 1263 "parsermodule.c"
        var $59=$res; //@line 1264 "parsermodule.c"
        var $60=($59)!=0; //@line 1264 "parsermodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 23; break; } //@line 1264 "parsermodule.c"
      case 11: // $bb14
        var $61=$tree_addr; //@line 1264 "parsermodule.c"
        var $62=$61+20; //@line 1264 "parsermodule.c"
        var $63=HEAP[$62]; //@line 1264 "parsermodule.c"
        var $64=$i; //@line 1264 "parsermodule.c"
        var $65=$63+24*$64; //@line 1264 "parsermodule.c"
        var $66=$65; //@line 1264 "parsermodule.c"
        var $67=HEAP[$66]; //@line 1264 "parsermodule.c"
        var $68=($67)==22; //@line 1264 "parsermodule.c"
        if ($68) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 1264 "parsermodule.c"
      case 12: // $bb15
        var $69=$i; //@line 1264 "parsermodule.c"
        var $70=($69) + 2; //@line 1264 "parsermodule.c"
        var $71=$nch; //@line 1264 "parsermodule.c"
        var $72=($70) <= ($71); //@line 1264 "parsermodule.c"
        if ($72) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 1264 "parsermodule.c"
      case 13: // $bb16
        var $73=$tree_addr; //@line 1265 "parsermodule.c"
        var $74=$73+20; //@line 1265 "parsermodule.c"
        var $75=HEAP[$74]; //@line 1265 "parsermodule.c"
        var $76=$i; //@line 1265 "parsermodule.c"
        var $77=$75+24*$76; //@line 1265 "parsermodule.c"
        var $78=_validate_terminal($77, 22, __str70); //@line 1265 "parsermodule.c"
        var $79=($78)==0; //@line 1265 "parsermodule.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1265 "parsermodule.c"
      case 14: // $bb17
        var $80=$tree_addr; //@line 1265 "parsermodule.c"
        var $81=$80+20; //@line 1265 "parsermodule.c"
        var $82=HEAP[$81]; //@line 1265 "parsermodule.c"
        var $83=$i; //@line 1265 "parsermodule.c"
        var $84=($83) + 1; //@line 1265 "parsermodule.c"
        var $85=$82+24*$84; //@line 1265 "parsermodule.c"
        var $86=_validate_test($85); //@line 1265 "parsermodule.c"
        var $87=($86)==0; //@line 1265 "parsermodule.c"
        if ($87) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1265 "parsermodule.c"
      case 15: // $bb20
        $iftmp_80=0; //@line 1265 "parsermodule.c"
        $res=0; //@line 1265 "parsermodule.c"
        __label__ = 23; break;
      case 16: // $bb22_thread3
        $iftmp_80=1; //@line 1265 "parsermodule.c"
        $res=1; //@line 1265 "parsermodule.c"
        var $88=$i; //@line 1268 "parsermodule.c"
        var $89=($88) + 2; //@line 1268 "parsermodule.c"
        $i=$89; //@line 1268 "parsermodule.c"
        __label__ = 18; break;
      case 17: // $bb22
        var $_pr=$res;
        var $90=($_pr)!=0; //@line 1270 "parsermodule.c"
        if ($90) { __lastLabel__ = 17; __label__ = 18; break; } else { __lastLabel__ = 17; __label__ = 24; break; } //@line 1270 "parsermodule.c"
      case 18: // $bb23
        var $91=$i; //@line 1270 "parsermodule.c"
        var $92=$nch; //@line 1270 "parsermodule.c"
        var $93=($91) < ($92); //@line 1270 "parsermodule.c"
        if ($93) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1270 "parsermodule.c"
      case 19: // $bb24
        var $94=$tree_addr; //@line 1271 "parsermodule.c"
        var $95=$94+20; //@line 1271 "parsermodule.c"
        var $96=HEAP[$95]; //@line 1271 "parsermodule.c"
        var $97=$i; //@line 1271 "parsermodule.c"
        var $98=$96+24*$97; //@line 1271 "parsermodule.c"
        var $99=_validate_terminal($98, 12, __str52); //@line 1271 "parsermodule.c"
        $res=$99; //@line 1271 "parsermodule.c"
        var $100=$i; //@line 1272 "parsermodule.c"
        var $101=($100) + 1; //@line 1272 "parsermodule.c"
        $i=$101; //@line 1272 "parsermodule.c"
        var $102=$res; //@line 1273 "parsermodule.c"
        var $103=($102)!=0; //@line 1273 "parsermodule.c"
        if ($103) { __lastLabel__ = 19; __label__ = 20; break; } else { __lastLabel__ = 19; __label__ = 24; break; } //@line 1273 "parsermodule.c"
      case 20: // $bb25
        var $104=$i; //@line 1273 "parsermodule.c"
        var $105=$nch; //@line 1273 "parsermodule.c"
        var $106=($104) < ($105); //@line 1273 "parsermodule.c"
        if ($106) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1273 "parsermodule.c"
      case 21: // $bb26
        var $107=$tree_addr; //@line 1273 "parsermodule.c"
        var $108=$107+20; //@line 1273 "parsermodule.c"
        var $109=HEAP[$108]; //@line 1273 "parsermodule.c"
        var $110=$i; //@line 1273 "parsermodule.c"
        var $111=$109+24*$110; //@line 1273 "parsermodule.c"
        var $112=$111; //@line 1273 "parsermodule.c"
        var $113=HEAP[$112]; //@line 1273 "parsermodule.c"
        var $114=($113)==36; //@line 1273 "parsermodule.c"
        if ($114) { __label__ = 26; break; } else { __label__ = 22; break; } //@line 1273 "parsermodule.c"
      case 22: // $bb27
        var $115=$tree_addr; //@line 1273 "parsermodule.c"
        var $116=$115+20; //@line 1273 "parsermodule.c"
        var $117=HEAP[$116]; //@line 1273 "parsermodule.c"
        var $118=$i; //@line 1273 "parsermodule.c"
        var $119=$117+24*$118; //@line 1273 "parsermodule.c"
        var $120=$119; //@line 1273 "parsermodule.c"
        var $121=HEAP[$120]; //@line 1273 "parsermodule.c"
        var $122=($121)==16; //@line 1273 "parsermodule.c"
        if ($122) { __label__ = 26; break; } else { __label__ = 23; break; } //@line 1273 "parsermodule.c"
      case 23: // $bb28thread_pre_split
        var $_pr4=$res;
        __lastLabel__ = 23; __label__ = 24; break;
      case 24: // $bb28
        var $123=__lastLabel__ == 23 ? $_pr4 : (__lastLabel__ == 19 ? 0 : (0));
        var $124=($123)==0; //@line 1261 "parsermodule.c"
        if ($124) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1261 "parsermodule.c"
      case 25: // $bb29
        var $125=$i; //@line 1261 "parsermodule.c"
        var $126=($125) + 2; //@line 1261 "parsermodule.c"
        var $127=$nch; //@line 1261 "parsermodule.c"
        var $128=($126) <= ($127); //@line 1261 "parsermodule.c"
        if ($128) { __label__ = 10; break; } else { __label__ = 26; break; } //@line 1261 "parsermodule.c"
      case 26: // $bb30
        var $129=$res; //@line 1282 "parsermodule.c"
        var $130=($129)!=0; //@line 1282 "parsermodule.c"
        if ($130) { __label__ = 27; break; } else { __label__ = 56; break; } //@line 1282 "parsermodule.c"
      case 27: // $bb31
        var $131=$tree_addr; //@line 1283 "parsermodule.c"
        var $132=$i; //@line 1283 "parsermodule.c"
        var $133=_validate_varargslist_trailer($131, $132); //@line 1283 "parsermodule.c"
        $res=$133; //@line 1283 "parsermodule.c"
        __label__ = 56; break; //@line 1283 "parsermodule.c"
      case 28: // $bb33
        var $134=$sym; //@line 1290 "parsermodule.c"
        var $135=($134)==12; //@line 1290 "parsermodule.c"
        if ($135) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 1290 "parsermodule.c"
      case 29: // $bb34
        var $136=$tree_addr; //@line 1291 "parsermodule.c"
        var $137=$136+20; //@line 1291 "parsermodule.c"
        var $138=HEAP[$137]; //@line 1291 "parsermodule.c"
        var $139=$nch; //@line 1291 "parsermodule.c"
        var $140=($139) - 1; //@line 1291 "parsermodule.c"
        var $141=$138+24*$140; //@line 1291 "parsermodule.c"
        var $142=_validate_terminal($141, 12, __str52); //@line 1291 "parsermodule.c"
        $res=$142; //@line 1291 "parsermodule.c"
        var $143=$res; //@line 1292 "parsermodule.c"
        var $144=($143)==0; //@line 1292 "parsermodule.c"
        if ($144) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1292 "parsermodule.c"
      case 30: // $bb35
        $1=0; //@line 1293 "parsermodule.c"
        __label__ = 57; break; //@line 1293 "parsermodule.c"
      case 31: // $bb36
        var $145=$nch; //@line 1294 "parsermodule.c"
        var $146=($145) - 1; //@line 1294 "parsermodule.c"
        $nch=$146; //@line 1294 "parsermodule.c"
        __label__ = 32; break; //@line 1294 "parsermodule.c"
      case 32: // $bb37
        var $147=$tree_addr; //@line 1299 "parsermodule.c"
        var $148=$147+20; //@line 1299 "parsermodule.c"
        var $149=HEAP[$148]; //@line 1299 "parsermodule.c"
        var $150=$149; //@line 1299 "parsermodule.c"
        var $151=_validate_fpdef($150); //@line 1299 "parsermodule.c"
        $res=$151; //@line 1299 "parsermodule.c"
        var $152=$i; //@line 1300 "parsermodule.c"
        var $153=($152) + 1; //@line 1300 "parsermodule.c"
        $i=$153; //@line 1300 "parsermodule.c"
        var $154=($151)!=0; //@line 1301 "parsermodule.c"
        if ($154) { __lastLabel__ = 32; __label__ = 33; break; } else { __lastLabel__ = 32; __label__ = 51; break; } //@line 1301 "parsermodule.c"
      case 33: // $bb38
        var $155=$i; //@line 1301 "parsermodule.c"
        var $156=($155) + 2; //@line 1301 "parsermodule.c"
        var $157=$nch; //@line 1301 "parsermodule.c"
        var $158=($156) <= ($157); //@line 1301 "parsermodule.c"
        if ($158) { __label__ = 34; break; } else { __label__ = 50; break; } //@line 1301 "parsermodule.c"
      case 34: // $bb39
        var $159=$tree_addr; //@line 1301 "parsermodule.c"
        var $160=$159+20; //@line 1301 "parsermodule.c"
        var $161=HEAP[$160]; //@line 1301 "parsermodule.c"
        var $162=$i; //@line 1301 "parsermodule.c"
        var $163=$161+24*$162; //@line 1301 "parsermodule.c"
        var $164=$163; //@line 1301 "parsermodule.c"
        var $165=HEAP[$164]; //@line 1301 "parsermodule.c"
        var $166=($165)==22; //@line 1301 "parsermodule.c"
        if ($166) { __label__ = 35; break; } else { __label__ = 50; break; } //@line 1301 "parsermodule.c"
      case 35: // $bb40
        var $167=$tree_addr; //@line 1302 "parsermodule.c"
        var $168=$167+20; //@line 1302 "parsermodule.c"
        var $169=HEAP[$168]; //@line 1302 "parsermodule.c"
        var $170=$i; //@line 1302 "parsermodule.c"
        var $171=$169+24*$170; //@line 1302 "parsermodule.c"
        var $172=_validate_terminal($171, 22, __str70); //@line 1302 "parsermodule.c"
        var $173=($172)==0; //@line 1302 "parsermodule.c"
        if ($173) { __label__ = 38; break; } else { __label__ = 36; break; } //@line 1302 "parsermodule.c"
      case 36: // $bb41
        var $174=$tree_addr; //@line 1302 "parsermodule.c"
        var $175=$174+20; //@line 1302 "parsermodule.c"
        var $176=HEAP[$175]; //@line 1302 "parsermodule.c"
        var $177=$i; //@line 1302 "parsermodule.c"
        var $178=($177) + 1; //@line 1302 "parsermodule.c"
        var $179=$176+24*$178; //@line 1302 "parsermodule.c"
        var $180=_validate_test($179); //@line 1302 "parsermodule.c"
        var $181=($180)==0; //@line 1302 "parsermodule.c"
        if ($181) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 1302 "parsermodule.c"
      case 37: // $bb42
        $iftmp_81=1; //@line 1302 "parsermodule.c"
        __label__ = 39; break; //@line 1302 "parsermodule.c"
      case 38: // $bb43
        $iftmp_81=0; //@line 1302 "parsermodule.c"
        __label__ = 39; break; //@line 1302 "parsermodule.c"
      case 39: // $bb44
        var $182=$iftmp_81; //@line 1302 "parsermodule.c"
        $res=$182; //@line 1302 "parsermodule.c"
        var $183=$i; //@line 1304 "parsermodule.c"
        var $184=($183) + 2; //@line 1304 "parsermodule.c"
        $i=$184; //@line 1304 "parsermodule.c"
        __lastLabel__ = 39; __label__ = 51; break; //@line 1304 "parsermodule.c"
      case 40: // $bb46
        var $185=$tree_addr; //@line 1311 "parsermodule.c"
        var $186=$185+20; //@line 1311 "parsermodule.c"
        var $187=HEAP[$186]; //@line 1311 "parsermodule.c"
        var $188=$i; //@line 1311 "parsermodule.c"
        var $189=$187+24*$188; //@line 1311 "parsermodule.c"
        var $190=_validate_terminal($189, 12, __str52); //@line 1311 "parsermodule.c"
        var $191=($190)==0; //@line 1311 "parsermodule.c"
        if ($191) { __label__ = 42; break; } else { __label__ = 41; break; } //@line 1311 "parsermodule.c"
      case 41: // $bb47
        var $192=$tree_addr; //@line 1311 "parsermodule.c"
        var $193=$192+20; //@line 1311 "parsermodule.c"
        var $194=HEAP[$193]; //@line 1311 "parsermodule.c"
        var $195=$i; //@line 1311 "parsermodule.c"
        var $196=($195) + 1; //@line 1311 "parsermodule.c"
        var $197=$194+24*$196; //@line 1311 "parsermodule.c"
        var $198=_validate_fpdef($197); //@line 1311 "parsermodule.c"
        var $199=($198)==0; //@line 1311 "parsermodule.c"
        if ($199) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1311 "parsermodule.c"
      case 42: // $bb50
        $iftmp_82=0; //@line 1311 "parsermodule.c"
        $res=0; //@line 1311 "parsermodule.c"
        var $200=$i; //@line 1313 "parsermodule.c"
        var $201=($200) + 2; //@line 1313 "parsermodule.c"
        $i=$201; //@line 1313 "parsermodule.c"
        __lastLabel__ = 42; __label__ = 51; break;
      case 43: // $bb51
        $iftmp_82=1; //@line 1311 "parsermodule.c"
        $res=1; //@line 1311 "parsermodule.c"
        var $202=$i; //@line 1313 "parsermodule.c"
        var $203=($202) + 2; //@line 1313 "parsermodule.c"
        $i=$203; //@line 1313 "parsermodule.c"
        var $204=$nch; //@line 1314 "parsermodule.c"
        var $205=$i; //@line 1314 "parsermodule.c"
        var $206=($204) - ($205); //@line 1314 "parsermodule.c"
        var $207=($206) > 1; //@line 1314 "parsermodule.c"
        if ($207) { __label__ = 44; break; } else { __label__ = 50; break; } //@line 1314 "parsermodule.c"
      case 44: // $bb52
        var $208=$tree_addr; //@line 1314 "parsermodule.c"
        var $209=$208+20; //@line 1314 "parsermodule.c"
        var $210=HEAP[$209]; //@line 1314 "parsermodule.c"
        var $211=$i; //@line 1314 "parsermodule.c"
        var $212=$210+24*$211; //@line 1314 "parsermodule.c"
        var $213=$212; //@line 1314 "parsermodule.c"
        var $214=HEAP[$213]; //@line 1314 "parsermodule.c"
        var $215=($214)==22; //@line 1314 "parsermodule.c"
        if ($215) { __label__ = 45; break; } else { __label__ = 50; break; } //@line 1314 "parsermodule.c"
      case 45: // $bb53
        var $216=$tree_addr; //@line 1315 "parsermodule.c"
        var $217=$216+20; //@line 1315 "parsermodule.c"
        var $218=HEAP[$217]; //@line 1315 "parsermodule.c"
        var $219=$i; //@line 1315 "parsermodule.c"
        var $220=$218+24*$219; //@line 1315 "parsermodule.c"
        var $221=_validate_terminal($220, 22, __str70); //@line 1315 "parsermodule.c"
        var $222=($221)==0; //@line 1315 "parsermodule.c"
        if ($222) { __label__ = 48; break; } else { __label__ = 46; break; } //@line 1315 "parsermodule.c"
      case 46: // $bb54
        var $223=$tree_addr; //@line 1315 "parsermodule.c"
        var $224=$223+20; //@line 1315 "parsermodule.c"
        var $225=HEAP[$224]; //@line 1315 "parsermodule.c"
        var $226=$i; //@line 1315 "parsermodule.c"
        var $227=($226) + 1; //@line 1315 "parsermodule.c"
        var $228=$225+24*$227; //@line 1315 "parsermodule.c"
        var $229=_validate_test($228); //@line 1315 "parsermodule.c"
        var $230=($229)==0; //@line 1315 "parsermodule.c"
        if ($230) { __label__ = 48; break; } else { __label__ = 47; break; } //@line 1315 "parsermodule.c"
      case 47: // $bb55
        $iftmp_83=1; //@line 1315 "parsermodule.c"
        __label__ = 49; break; //@line 1315 "parsermodule.c"
      case 48: // $bb56
        $iftmp_83=0; //@line 1315 "parsermodule.c"
        __label__ = 49; break; //@line 1315 "parsermodule.c"
      case 49: // $bb57
        var $231=$iftmp_83; //@line 1315 "parsermodule.c"
        $res=$231; //@line 1315 "parsermodule.c"
        var $232=$i; //@line 1317 "parsermodule.c"
        var $233=($232) + 2; //@line 1317 "parsermodule.c"
        $i=$233; //@line 1317 "parsermodule.c"
        __lastLabel__ = 49; __label__ = 51; break; //@line 1317 "parsermodule.c"
      case 50: // $bb58thread_pre_split
        var $_pr5=$res;
        __lastLabel__ = 50; __label__ = 51; break;
      case 51: // $bb58
        var $234=__lastLabel__ == 42 ? 0 : (__lastLabel__ == 49 ? $231 : (__lastLabel__ == 50 ? $_pr5 : (__lastLabel__ == 32 ? 0 : ($182))));
        var $235=($234)==0; //@line 1310 "parsermodule.c"
        if ($235) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 1310 "parsermodule.c"
      case 52: // $bb59
        var $236=$nch; //@line 1310 "parsermodule.c"
        var $237=$i; //@line 1310 "parsermodule.c"
        var $238=($236) - ($237); //@line 1310 "parsermodule.c"
        var $239=($238) > 1; //@line 1310 "parsermodule.c"
        if ($239) { __label__ = 40; break; } else { __label__ = 53; break; } //@line 1310 "parsermodule.c"
      case 53: // $bb60
        var $240=$res; //@line 1320 "parsermodule.c"
        var $241=($240)!=0; //@line 1320 "parsermodule.c"
        if ($241) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1320 "parsermodule.c"
      case 54: // $bb61
        var $242=$nch; //@line 1320 "parsermodule.c"
        var $243=$i; //@line 1320 "parsermodule.c"
        var $244=($242)!=($243); //@line 1320 "parsermodule.c"
        if ($244) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1320 "parsermodule.c"
      case 55: // $bb62
        $res=0; //@line 1321 "parsermodule.c"
        $message_addr_i=__str71;
        var $245=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $246=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($245, $246); //@line 531 "parsermodule.c"
        __label__ = 56; break; //@line 1322 "parsermodule.c"
      case 56: // $bb63
        var $247=$res; //@line 1326 "parsermodule.c"
        $1=$247; //@line 1326 "parsermodule.c"
        __label__ = 57; break; //@line 1326 "parsermodule.c"
      case 57: // $bb64
        var $248=$1; //@line 1239 "parsermodule.c"
        $retval=$248; //@line 1239 "parsermodule.c"
        var $retval65=$retval; //@line 1239 "parsermodule.c"
        ;
        return $retval65; //@line 1239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_iter($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i_i;
        var $0;
        var $tree_addr_i;
        var $retval_i6;
        var $1;
        var $iftmp_88_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $2;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_84;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 1336 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=332;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$tree_addr; //@line 1336 "parsermodule.c"
        $n_addr_i1=$19;
        $num_addr_i=1;
        $name_addr_i=__str72;
        var $20=$n_addr_i1; //@line 975 "parsermodule.c"
        var $21=$20+16; //@line 975 "parsermodule.c"
        var $22=HEAP[$21]; //@line 975 "parsermodule.c"
        var $23=$num_addr_i; //@line 975 "parsermodule.c"
        var $24=($22)!=($23); //@line 975 "parsermodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 975 "parsermodule.c"
      case 3: // $validate_numnodes_exit_thread
        var $25=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $26=$name_addr_i; //@line 976 "parsermodule.c"
        var $27=_PyErr_Format($25, __str50, $26); //@line 976 "parsermodule.c"
        $2=0; //@line 978 "parsermodule.c"
        $retval_i2=0; //@line 978 "parsermodule.c"
        __label__ = 4; break;
      case 4: // $bb3_thread
        $iftmp_84=0; //@line 1336 "parsermodule.c"
        $res=0; //@line 1336 "parsermodule.c"
        __label__ = 7; break;
      case 5: // $bb4
        $2=1; //@line 980 "parsermodule.c"
        $retval_i2=1; //@line 978 "parsermodule.c"
        $iftmp_84=1; //@line 1336 "parsermodule.c"
        $res=1; //@line 1336 "parsermodule.c"
        var $28=$tree_addr; //@line 1337 "parsermodule.c"
        var $29=$28+20; //@line 1337 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1337 "parsermodule.c"
        var $31=$30; //@line 1337 "parsermodule.c"
        var $32=$31; //@line 1337 "parsermodule.c"
        var $33=HEAP[$32]; //@line 1337 "parsermodule.c"
        var $34=($33)!=333; //@line 1337 "parsermodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1337 "parsermodule.c"
      case 6: // $bb5
        var $35=$tree_addr; //@line 1338 "parsermodule.c"
        var $36=$35+20; //@line 1338 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1338 "parsermodule.c"
        var $38=$37; //@line 1338 "parsermodule.c"
        var $39=_validate_list_for($38); //@line 1338 "parsermodule.c"
        $res=$39; //@line 1338 "parsermodule.c"
        __label__ = 20; break; //@line 1338 "parsermodule.c"
      case 7: // $bb6
        var $40=$tree_addr; //@line 1340 "parsermodule.c"
        var $41=$40+20; //@line 1340 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1340 "parsermodule.c"
        var $43=$42; //@line 1340 "parsermodule.c"
        $tree_addr_i=$43;
        var $44=$tree_addr_i; //@line 1409 "parsermodule.c"
        var $45=$44+16; //@line 1409 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1409 "parsermodule.c"
        $nch_i=$46; //@line 1409 "parsermodule.c"
        var $47=($46)==3; //@line 1412 "parsermodule.c"
        var $48=$tree_addr_i; //@line 1413 "parsermodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1412 "parsermodule.c"
      case 8: // $bb_i7
        var $49=$48+20; //@line 1413 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1413 "parsermodule.c"
        var $51=$50+48; //@line 1413 "parsermodule.c"
        var $52=_validate_list_iter($51); //@line 1413 "parsermodule.c"
        $res_i=$52; //@line 1413 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 13; break; //@line 1413 "parsermodule.c"
      case 9: // $bb1_i8
        $n_addr_i_i=$48;
        $num_addr_i_i=2;
        $name_addr_i_i=__str78;
        var $53=$n_addr_i_i; //@line 975 "parsermodule.c"
        var $54=$53+16; //@line 975 "parsermodule.c"
        var $55=HEAP[$54]; //@line 975 "parsermodule.c"
        var $56=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $57=($55)!=($56); //@line 975 "parsermodule.c"
        if ($57) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 975 "parsermodule.c"
      case 10: // $bb_i_i
        var $58=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $59=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $60=_PyErr_Format($58, __str50, $59); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 12; break; //@line 978 "parsermodule.c"
      case 11: // $bb1_i_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 12; break; //@line 980 "parsermodule.c"
      case 12: // $validate_numnodes_exit_i
        var $61=$0; //@line 978 "parsermodule.c"
        $retval_i_i=$61; //@line 978 "parsermodule.c"
        var $retval3_i_i=$retval_i_i; //@line 978 "parsermodule.c"
        $res_i=$retval3_i_i; //@line 1415 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 1415 "parsermodule.c"
      case 13: // $bb2_i
        var $62=__lastLabel__ == 12 ? $retval3_i_i : ($52);
        var $63=($62)!=0; //@line 1417 "parsermodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 1417 "parsermodule.c"
      case 14: // $bb3_i
        var $64=$tree_addr_i; //@line 1418 "parsermodule.c"
        var $65=$64+20; //@line 1418 "parsermodule.c"
        var $66=HEAP[$65]; //@line 1418 "parsermodule.c"
        var $67=$66; //@line 1418 "parsermodule.c"
        var $68=_validate_terminal($67, 1, __str57); //@line 1418 "parsermodule.c"
        var $69=($68)==0; //@line 1418 "parsermodule.c"
        if ($69) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1418 "parsermodule.c"
      case 15: // $bb4_i
        var $70=$tree_addr_i; //@line 1418 "parsermodule.c"
        var $71=$70+20; //@line 1418 "parsermodule.c"
        var $72=HEAP[$71]; //@line 1418 "parsermodule.c"
        var $73=$72+24; //@line 1418 "parsermodule.c"
        var $74=_validate_old_test($73); //@line 1418 "parsermodule.c"
        var $75=($74)==0; //@line 1418 "parsermodule.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1418 "parsermodule.c"
      case 16: // $bb5_i
        $iftmp_88_i=1; //@line 1418 "parsermodule.c"
        __label__ = 18; break; //@line 1418 "parsermodule.c"
      case 17: // $bb6_i
        $iftmp_88_i=0; //@line 1418 "parsermodule.c"
        __label__ = 18; break; //@line 1418 "parsermodule.c"
      case 18: // $bb7_i
        var $76=$iftmp_88_i; //@line 1418 "parsermodule.c"
        $res_i=$76; //@line 1418 "parsermodule.c"
        __label__ = 19; break; //@line 1418 "parsermodule.c"
      case 19: // $validate_list_if_exit
        var $77=$res_i; //@line 1421 "parsermodule.c"
        $1=$77; //@line 1421 "parsermodule.c"
        var $78=$1; //@line 1421 "parsermodule.c"
        $retval_i6=$78; //@line 1421 "parsermodule.c"
        var $retval9_i=$retval_i6; //@line 1421 "parsermodule.c"
        $res=$retval9_i; //@line 1340 "parsermodule.c"
        __label__ = 20; break; //@line 1340 "parsermodule.c"
      case 20: // $bb7
        var $79=$res; //@line 1342 "parsermodule.c"
        $4=$79; //@line 1342 "parsermodule.c"
        var $80=$4; //@line 1342 "parsermodule.c"
        $retval=$80; //@line 1342 "parsermodule.c"
        var $retval8=$retval; //@line 1342 "parsermodule.c"
        ;
        return $retval8; //@line 1342 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_iter($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i_i;
        var $0;
        var $tree_addr_i;
        var $retval_i6;
        var $1;
        var $iftmp_89_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $2;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_85;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 1351 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=335;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$tree_addr; //@line 1351 "parsermodule.c"
        $n_addr_i1=$19;
        $num_addr_i=1;
        $name_addr_i=__str73;
        var $20=$n_addr_i1; //@line 975 "parsermodule.c"
        var $21=$20+16; //@line 975 "parsermodule.c"
        var $22=HEAP[$21]; //@line 975 "parsermodule.c"
        var $23=$num_addr_i; //@line 975 "parsermodule.c"
        var $24=($22)!=($23); //@line 975 "parsermodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 975 "parsermodule.c"
      case 3: // $validate_numnodes_exit_thread
        var $25=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $26=$name_addr_i; //@line 976 "parsermodule.c"
        var $27=_PyErr_Format($25, __str50, $26); //@line 976 "parsermodule.c"
        $2=0; //@line 978 "parsermodule.c"
        $retval_i2=0; //@line 978 "parsermodule.c"
        __label__ = 4; break;
      case 4: // $bb3_thread
        $iftmp_85=0; //@line 1351 "parsermodule.c"
        $res=0; //@line 1351 "parsermodule.c"
        __label__ = 7; break;
      case 5: // $bb4
        $2=1; //@line 980 "parsermodule.c"
        $retval_i2=1; //@line 978 "parsermodule.c"
        $iftmp_85=1; //@line 1351 "parsermodule.c"
        $res=1; //@line 1351 "parsermodule.c"
        var $28=$tree_addr; //@line 1352 "parsermodule.c"
        var $29=$28+20; //@line 1352 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1352 "parsermodule.c"
        var $31=$30; //@line 1352 "parsermodule.c"
        var $32=$31; //@line 1352 "parsermodule.c"
        var $33=HEAP[$32]; //@line 1352 "parsermodule.c"
        var $34=($33)!=336; //@line 1352 "parsermodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1352 "parsermodule.c"
      case 6: // $bb5
        var $35=$tree_addr; //@line 1353 "parsermodule.c"
        var $36=$35+20; //@line 1353 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1353 "parsermodule.c"
        var $38=$37; //@line 1353 "parsermodule.c"
        var $39=_validate_comp_for($38); //@line 1353 "parsermodule.c"
        $res=$39; //@line 1353 "parsermodule.c"
        __label__ = 20; break; //@line 1353 "parsermodule.c"
      case 7: // $bb6
        var $40=$tree_addr; //@line 1355 "parsermodule.c"
        var $41=$40+20; //@line 1355 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1355 "parsermodule.c"
        var $43=$42; //@line 1355 "parsermodule.c"
        $tree_addr_i=$43;
        var $44=$tree_addr_i; //@line 1429 "parsermodule.c"
        var $45=$44+16; //@line 1429 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1429 "parsermodule.c"
        $nch_i=$46; //@line 1429 "parsermodule.c"
        var $47=($46)==3; //@line 1432 "parsermodule.c"
        var $48=$tree_addr_i; //@line 1433 "parsermodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1432 "parsermodule.c"
      case 8: // $bb_i7
        var $49=$48+20; //@line 1433 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1433 "parsermodule.c"
        var $51=$50+48; //@line 1433 "parsermodule.c"
        var $52=_validate_comp_iter($51); //@line 1433 "parsermodule.c"
        $res_i=$52; //@line 1433 "parsermodule.c"
        __lastLabel__ = 8; __label__ = 13; break; //@line 1433 "parsermodule.c"
      case 9: // $bb1_i8
        $n_addr_i_i=$48;
        $num_addr_i_i=2;
        $name_addr_i_i=__str79;
        var $53=$n_addr_i_i; //@line 975 "parsermodule.c"
        var $54=$53+16; //@line 975 "parsermodule.c"
        var $55=HEAP[$54]; //@line 975 "parsermodule.c"
        var $56=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $57=($55)!=($56); //@line 975 "parsermodule.c"
        if ($57) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 975 "parsermodule.c"
      case 10: // $bb_i_i
        var $58=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $59=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $60=_PyErr_Format($58, __str50, $59); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 12; break; //@line 978 "parsermodule.c"
      case 11: // $bb1_i_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 12; break; //@line 980 "parsermodule.c"
      case 12: // $validate_numnodes_exit_i
        var $61=$0; //@line 978 "parsermodule.c"
        $retval_i_i=$61; //@line 978 "parsermodule.c"
        var $retval3_i_i=$retval_i_i; //@line 978 "parsermodule.c"
        $res_i=$retval3_i_i; //@line 1435 "parsermodule.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 1435 "parsermodule.c"
      case 13: // $bb2_i
        var $62=__lastLabel__ == 12 ? $retval3_i_i : ($52);
        var $63=($62)!=0; //@line 1437 "parsermodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 1437 "parsermodule.c"
      case 14: // $bb3_i
        var $64=$tree_addr_i; //@line 1438 "parsermodule.c"
        var $65=$64+20; //@line 1438 "parsermodule.c"
        var $66=HEAP[$65]; //@line 1438 "parsermodule.c"
        var $67=$66; //@line 1438 "parsermodule.c"
        var $68=_validate_terminal($67, 1, __str57); //@line 1438 "parsermodule.c"
        var $69=($68)==0; //@line 1438 "parsermodule.c"
        if ($69) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1438 "parsermodule.c"
      case 15: // $bb4_i
        var $70=$tree_addr_i; //@line 1438 "parsermodule.c"
        var $71=$70+20; //@line 1438 "parsermodule.c"
        var $72=HEAP[$71]; //@line 1438 "parsermodule.c"
        var $73=$72+24; //@line 1438 "parsermodule.c"
        var $74=_validate_old_test($73); //@line 1438 "parsermodule.c"
        var $75=($74)==0; //@line 1438 "parsermodule.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1438 "parsermodule.c"
      case 16: // $bb5_i
        $iftmp_89_i=1; //@line 1438 "parsermodule.c"
        __label__ = 18; break; //@line 1438 "parsermodule.c"
      case 17: // $bb6_i
        $iftmp_89_i=0; //@line 1438 "parsermodule.c"
        __label__ = 18; break; //@line 1438 "parsermodule.c"
      case 18: // $bb7_i
        var $76=$iftmp_89_i; //@line 1438 "parsermodule.c"
        $res_i=$76; //@line 1438 "parsermodule.c"
        __label__ = 19; break; //@line 1438 "parsermodule.c"
      case 19: // $validate_comp_if_exit
        var $77=$res_i; //@line 1441 "parsermodule.c"
        $1=$77; //@line 1441 "parsermodule.c"
        var $78=$1; //@line 1441 "parsermodule.c"
        $retval_i6=$78; //@line 1441 "parsermodule.c"
        var $retval9_i=$retval_i6; //@line 1441 "parsermodule.c"
        $res=$retval9_i; //@line 1355 "parsermodule.c"
        __label__ = 20; break; //@line 1355 "parsermodule.c"
      case 20: // $bb7
        var $79=$res; //@line 1357 "parsermodule.c"
        $4=$79; //@line 1357 "parsermodule.c"
        var $80=$4; //@line 1357 "parsermodule.c"
        $retval=$80; //@line 1357 "parsermodule.c"
        var $retval8=$retval; //@line 1357 "parsermodule.c"
        ;
        return $retval8; //@line 1357 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_list_for($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i4;
        var $0;
        var $tree_addr_i1;
        var $retval_i2;
        var $1;
        var $tree_addr_i;
        var $retval_i;
        var $2;
        var $tree_addr;
        var $retval;
        var $3;
        var $iftmp_86;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $4=$tree_addr; //@line 1365 "parsermodule.c"
        var $5=$4+16; //@line 1365 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1365 "parsermodule.c"
        $nch=$6; //@line 1365 "parsermodule.c"
        var $7=$nch; //@line 1368 "parsermodule.c"
        var $8=($7)==5; //@line 1368 "parsermodule.c"
        var $9=$tree_addr; //@line 1369 "parsermodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1368 "parsermodule.c"
      case 1: // $bb
        var $10=$9+20; //@line 1369 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1369 "parsermodule.c"
        var $12=$11+96; //@line 1369 "parsermodule.c"
        var $13=_validate_list_iter($12); //@line 1369 "parsermodule.c"
        $res=$13; //@line 1369 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 6; break; //@line 1369 "parsermodule.c"
      case 2: // $bb1
        $n_addr_i=$9;
        $num_addr_i=4;
        $name_addr_i=__str74;
        var $14=$n_addr_i; //@line 975 "parsermodule.c"
        var $15=$14+16; //@line 975 "parsermodule.c"
        var $16=HEAP[$15]; //@line 975 "parsermodule.c"
        var $17=$num_addr_i; //@line 975 "parsermodule.c"
        var $18=($16)!=($17); //@line 975 "parsermodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 975 "parsermodule.c"
      case 3: // $bb_i
        var $19=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $20=$name_addr_i; //@line 976 "parsermodule.c"
        var $21=_PyErr_Format($19, __str50, $20); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 5; break; //@line 978 "parsermodule.c"
      case 4: // $bb1_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 5; break; //@line 980 "parsermodule.c"
      case 5: // $validate_numnodes_exit
        var $22=$0; //@line 978 "parsermodule.c"
        $retval_i4=$22; //@line 978 "parsermodule.c"
        var $retval3_i=$retval_i4; //@line 978 "parsermodule.c"
        $res=$retval3_i; //@line 1371 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1371 "parsermodule.c"
      case 6: // $bb2
        var $23=__lastLabel__ == 5 ? $retval3_i : ($13);
        var $24=($23)!=0; //@line 1373 "parsermodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1373 "parsermodule.c"
      case 7: // $bb3
        var $25=$tree_addr; //@line 1374 "parsermodule.c"
        var $26=$25+20; //@line 1374 "parsermodule.c"
        var $27=HEAP[$26]; //@line 1374 "parsermodule.c"
        var $28=$27; //@line 1374 "parsermodule.c"
        var $29=_validate_terminal($28, 1, __str75); //@line 1374 "parsermodule.c"
        var $30=($29)==0; //@line 1374 "parsermodule.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 1374 "parsermodule.c"
      case 8: // $bb4
        var $31=$tree_addr; //@line 1374 "parsermodule.c"
        var $32=$31+20; //@line 1374 "parsermodule.c"
        var $33=HEAP[$32]; //@line 1374 "parsermodule.c"
        var $34=$33+24; //@line 1374 "parsermodule.c"
        $tree_addr_i1=$34;
        var $35=$tree_addr_i1; //@line 2968 "parsermodule.c"
        var $36=_validate_repeating_list($35, 326, (FUNCTION_TABLE_OFFSET + 12), __str171); //@line 2968 "parsermodule.c"
        $1=$36; //@line 2968 "parsermodule.c"
        var $37=$1; //@line 2968 "parsermodule.c"
        $retval_i2=$37; //@line 2968 "parsermodule.c"
        var $retval1_i3=$retval_i2; //@line 2968 "parsermodule.c"
        var $38=($retval1_i3)==0; //@line 1374 "parsermodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 1374 "parsermodule.c"
      case 9: // $bb5
        var $39=$tree_addr; //@line 1374 "parsermodule.c"
        var $40=$39+20; //@line 1374 "parsermodule.c"
        var $41=HEAP[$40]; //@line 1374 "parsermodule.c"
        var $42=$41+48; //@line 1374 "parsermodule.c"
        var $43=_validate_terminal($42, 1, __str76); //@line 1374 "parsermodule.c"
        var $44=($43)==0; //@line 1374 "parsermodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1374 "parsermodule.c"
      case 10: // $bb6
        var $45=$tree_addr; //@line 1374 "parsermodule.c"
        var $46=$45+20; //@line 1374 "parsermodule.c"
        var $47=HEAP[$46]; //@line 1374 "parsermodule.c"
        var $48=$47+72; //@line 1374 "parsermodule.c"
        $tree_addr_i=$48;
        var $49=$tree_addr_i; //@line 1178 "parsermodule.c"
        var $50=_validate_repeating_list($49, 301, (FUNCTION_TABLE_OFFSET + 14), __str65); //@line 1178 "parsermodule.c"
        $2=$50; //@line 1178 "parsermodule.c"
        var $51=$2; //@line 1178 "parsermodule.c"
        $retval_i=$51; //@line 1178 "parsermodule.c"
        var $retval1_i=$retval_i; //@line 1178 "parsermodule.c"
        var $52=($retval1_i)==0; //@line 1374 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1374 "parsermodule.c"
      case 11: // $bb7
        $iftmp_86=1; //@line 1374 "parsermodule.c"
        __label__ = 13; break; //@line 1374 "parsermodule.c"
      case 12: // $bb8
        $iftmp_86=0; //@line 1374 "parsermodule.c"
        __label__ = 13; break; //@line 1374 "parsermodule.c"
      case 13: // $bb9
        var $53=$iftmp_86; //@line 1374 "parsermodule.c"
        $res=$53; //@line 1374 "parsermodule.c"
        __label__ = 14; break; //@line 1374 "parsermodule.c"
      case 14: // $bb10
        var $54=$res; //@line 1379 "parsermodule.c"
        $3=$54; //@line 1379 "parsermodule.c"
        var $55=$3; //@line 1379 "parsermodule.c"
        $retval=$55; //@line 1379 "parsermodule.c"
        var $retval11=$retval; //@line 1379 "parsermodule.c"
        ;
        return $retval11; //@line 1379 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_for($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i1;
        var $0;
        var $tree_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_87;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1387 "parsermodule.c"
        var $4=$3+16; //@line 1387 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1387 "parsermodule.c"
        $nch=$5; //@line 1387 "parsermodule.c"
        var $6=$nch; //@line 1390 "parsermodule.c"
        var $7=($6)==5; //@line 1390 "parsermodule.c"
        var $8=$tree_addr; //@line 1391 "parsermodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1390 "parsermodule.c"
      case 1: // $bb
        var $9=$8+20; //@line 1391 "parsermodule.c"
        var $10=HEAP[$9]; //@line 1391 "parsermodule.c"
        var $11=$10+96; //@line 1391 "parsermodule.c"
        var $12=_validate_comp_iter($11); //@line 1391 "parsermodule.c"
        $res=$12; //@line 1391 "parsermodule.c"
        __lastLabel__ = 1; __label__ = 6; break; //@line 1391 "parsermodule.c"
      case 2: // $bb1
        $n_addr_i=$8;
        $num_addr_i=4;
        $name_addr_i=__str77;
        var $13=$n_addr_i; //@line 975 "parsermodule.c"
        var $14=$13+16; //@line 975 "parsermodule.c"
        var $15=HEAP[$14]; //@line 975 "parsermodule.c"
        var $16=$num_addr_i; //@line 975 "parsermodule.c"
        var $17=($15)!=($16); //@line 975 "parsermodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 975 "parsermodule.c"
      case 3: // $bb_i
        var $18=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $19=$name_addr_i; //@line 976 "parsermodule.c"
        var $20=_PyErr_Format($18, __str50, $19); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 5; break; //@line 978 "parsermodule.c"
      case 4: // $bb1_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 5; break; //@line 980 "parsermodule.c"
      case 5: // $validate_numnodes_exit
        var $21=$0; //@line 978 "parsermodule.c"
        $retval_i1=$21; //@line 978 "parsermodule.c"
        var $retval3_i=$retval_i1; //@line 978 "parsermodule.c"
        $res=$retval3_i; //@line 1393 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1393 "parsermodule.c"
      case 6: // $bb2
        var $22=__lastLabel__ == 5 ? $retval3_i : ($12);
        var $23=($22)!=0; //@line 1395 "parsermodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1395 "parsermodule.c"
      case 7: // $bb3
        var $24=$tree_addr; //@line 1396 "parsermodule.c"
        var $25=$24+20; //@line 1396 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1396 "parsermodule.c"
        var $27=$26; //@line 1396 "parsermodule.c"
        var $28=_validate_terminal($27, 1, __str75); //@line 1396 "parsermodule.c"
        var $29=($28)==0; //@line 1396 "parsermodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 1396 "parsermodule.c"
      case 8: // $bb4
        var $30=$tree_addr; //@line 1396 "parsermodule.c"
        var $31=$30+20; //@line 1396 "parsermodule.c"
        var $32=HEAP[$31]; //@line 1396 "parsermodule.c"
        var $33=$32+24; //@line 1396 "parsermodule.c"
        $tree_addr_i=$33;
        var $34=$tree_addr_i; //@line 2968 "parsermodule.c"
        var $35=_validate_repeating_list($34, 326, (FUNCTION_TABLE_OFFSET + 12), __str171); //@line 2968 "parsermodule.c"
        $1=$35; //@line 2968 "parsermodule.c"
        var $36=$1; //@line 2968 "parsermodule.c"
        $retval_i=$36; //@line 2968 "parsermodule.c"
        var $retval1_i=$retval_i; //@line 2968 "parsermodule.c"
        var $37=($retval1_i)==0; //@line 1396 "parsermodule.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 1396 "parsermodule.c"
      case 9: // $bb5
        var $38=$tree_addr; //@line 1396 "parsermodule.c"
        var $39=$38+20; //@line 1396 "parsermodule.c"
        var $40=HEAP[$39]; //@line 1396 "parsermodule.c"
        var $41=$40+48; //@line 1396 "parsermodule.c"
        var $42=_validate_terminal($41, 1, __str76); //@line 1396 "parsermodule.c"
        var $43=($42)==0; //@line 1396 "parsermodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1396 "parsermodule.c"
      case 10: // $bb6
        var $44=$tree_addr; //@line 1396 "parsermodule.c"
        var $45=$44+20; //@line 1396 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1396 "parsermodule.c"
        var $47=$46+72; //@line 1396 "parsermodule.c"
        var $48=_validate_or_test($47); //@line 1396 "parsermodule.c"
        var $49=($48)==0; //@line 1396 "parsermodule.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1396 "parsermodule.c"
      case 11: // $bb7
        $iftmp_87=1; //@line 1396 "parsermodule.c"
        __label__ = 13; break; //@line 1396 "parsermodule.c"
      case 12: // $bb8
        $iftmp_87=0; //@line 1396 "parsermodule.c"
        __label__ = 13; break; //@line 1396 "parsermodule.c"
      case 13: // $bb9
        var $50=$iftmp_87; //@line 1396 "parsermodule.c"
        $res=$50; //@line 1396 "parsermodule.c"
        __label__ = 14; break; //@line 1396 "parsermodule.c"
      case 14: // $bb10
        var $51=$res; //@line 1401 "parsermodule.c"
        $2=$51; //@line 1401 "parsermodule.c"
        var $52=$2; //@line 1401 "parsermodule.c"
        $retval=$52; //@line 1401 "parsermodule.c"
        var $retval11=$retval; //@line 1401 "parsermodule.c"
        ;
        return $retval11; //@line 1401 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_fpdef($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i9;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i10;
        var $0;
        var $tree_addr_i;
        var $retval_i8;
        var $1;
        var $n_addr_i1;
        var $t_addr_i2;
        var $retval_i3;
        var $2;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_90;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 1453 "parsermodule.c"
        var $6=$5+16; //@line 1453 "parsermodule.c"
        var $7=HEAP[$6]; //@line 1453 "parsermodule.c"
        $nch=$7; //@line 1453 "parsermodule.c"
        var $8=$tree_addr; //@line 1454 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=265;
        var $9=$n_addr_i; //@line 956 "parsermodule.c"
        var $10=$9; //@line 956 "parsermodule.c"
        var $11=HEAP[$10]; //@line 956 "parsermodule.c"
        var $12=($11); //@line 956 "parsermodule.c"
        var $13=$t_addr_i; //@line 956 "parsermodule.c"
        var $14=($12)!=($13); //@line 956 "parsermodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit
        var $15=$n_addr_i; //@line 957 "parsermodule.c"
        var $16=$15; //@line 957 "parsermodule.c"
        var $17=HEAP[$16]; //@line 957 "parsermodule.c"
        var $18=($17); //@line 957 "parsermodule.c"
        var $19=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $20=$t_addr_i; //@line 957 "parsermodule.c"
        var $21=_PyErr_Format($19, __str49, $20, $18); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        $res=0; //@line 1454 "parsermodule.c"
        __label__ = 18; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        $res=1; //@line 1454 "parsermodule.c"
        var $22=$nch; //@line 1457 "parsermodule.c"
        var $23=($22)==1; //@line 1457 "parsermodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 1457 "parsermodule.c"
      case 3: // $bb1
        var $24=$tree_addr; //@line 1458 "parsermodule.c"
        var $25=$24+20; //@line 1458 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1458 "parsermodule.c"
        var $27=$26; //@line 1458 "parsermodule.c"
        $n_addr_i1=$27;
        $t_addr_i2=1;
        var $28=$n_addr_i1; //@line 956 "parsermodule.c"
        var $29=$28; //@line 956 "parsermodule.c"
        var $30=HEAP[$29]; //@line 956 "parsermodule.c"
        var $31=($30); //@line 956 "parsermodule.c"
        var $32=$t_addr_i2; //@line 956 "parsermodule.c"
        var $33=($31)!=($32); //@line 956 "parsermodule.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 956 "parsermodule.c"
      case 4: // $bb_i4
        var $34=$n_addr_i1; //@line 957 "parsermodule.c"
        var $35=$34; //@line 957 "parsermodule.c"
        var $36=HEAP[$35]; //@line 957 "parsermodule.c"
        var $37=($36); //@line 957 "parsermodule.c"
        var $38=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $39=$t_addr_i2; //@line 957 "parsermodule.c"
        var $40=_PyErr_Format($38, __str49, $39, $37); //@line 957 "parsermodule.c"
        $2=0; //@line 959 "parsermodule.c"
        __label__ = 6; break; //@line 959 "parsermodule.c"
      case 5: // $bb1_i5
        $2=1; //@line 961 "parsermodule.c"
        __label__ = 6; break; //@line 961 "parsermodule.c"
      case 6: // $validate_ntype_exit7
        var $41=$2; //@line 959 "parsermodule.c"
        $retval_i3=$41; //@line 959 "parsermodule.c"
        var $retval3_i6=$retval_i3; //@line 959 "parsermodule.c"
        $res=$retval3_i6; //@line 1458 "parsermodule.c"
        __label__ = 18; break; //@line 1458 "parsermodule.c"
      case 7: // $bb2
        var $42=$nch; //@line 1459 "parsermodule.c"
        var $43=($42)==3; //@line 1459 "parsermodule.c"
        var $44=$tree_addr; //@line 1460 "parsermodule.c"
        if ($43) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 1459 "parsermodule.c"
      case 8: // $bb3
        var $45=$44+20; //@line 1460 "parsermodule.c"
        var $46=HEAP[$45]; //@line 1460 "parsermodule.c"
        var $47=$46; //@line 1460 "parsermodule.c"
        var $48=_validate_terminal($47, 7, __str55); //@line 1460 "parsermodule.c"
        var $49=($48)==0; //@line 1460 "parsermodule.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 1460 "parsermodule.c"
      case 9: // $bb4
        var $50=$tree_addr; //@line 1460 "parsermodule.c"
        var $51=$50+20; //@line 1460 "parsermodule.c"
        var $52=HEAP[$51]; //@line 1460 "parsermodule.c"
        var $53=$52+24; //@line 1460 "parsermodule.c"
        $tree_addr_i=$53;
        var $54=$tree_addr_i; //@line 1473 "parsermodule.c"
        var $55=_validate_repeating_list($54, 266, (FUNCTION_TABLE_OFFSET + 16), __str81); //@line 1473 "parsermodule.c"
        $1=$55; //@line 1473 "parsermodule.c"
        var $56=$1; //@line 1473 "parsermodule.c"
        $retval_i8=$56; //@line 1473 "parsermodule.c"
        var $retval1_i=$retval_i8; //@line 1473 "parsermodule.c"
        var $57=($retval1_i)==0; //@line 1460 "parsermodule.c"
        if ($57) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 1460 "parsermodule.c"
      case 10: // $bb5
        var $58=$tree_addr; //@line 1460 "parsermodule.c"
        var $59=$58+20; //@line 1460 "parsermodule.c"
        var $60=HEAP[$59]; //@line 1460 "parsermodule.c"
        var $61=$60+48; //@line 1460 "parsermodule.c"
        var $62=_validate_terminal($61, 8, __str56); //@line 1460 "parsermodule.c"
        var $63=($62)==0; //@line 1460 "parsermodule.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1460 "parsermodule.c"
      case 11: // $bb6
        $iftmp_90=1; //@line 1460 "parsermodule.c"
        __label__ = 13; break; //@line 1460 "parsermodule.c"
      case 12: // $bb7
        $iftmp_90=0; //@line 1460 "parsermodule.c"
        __label__ = 13; break; //@line 1460 "parsermodule.c"
      case 13: // $bb8
        var $64=$iftmp_90; //@line 1460 "parsermodule.c"
        $res=$64; //@line 1460 "parsermodule.c"
        __label__ = 18; break; //@line 1460 "parsermodule.c"
      case 14: // $bb9
        $n_addr_i9=$44;
        $num_addr_i=1;
        $name_addr_i=__str80;
        var $65=$n_addr_i9; //@line 975 "parsermodule.c"
        var $66=$65+16; //@line 975 "parsermodule.c"
        var $67=HEAP[$66]; //@line 975 "parsermodule.c"
        var $68=$num_addr_i; //@line 975 "parsermodule.c"
        var $69=($67)!=($68); //@line 975 "parsermodule.c"
        if ($69) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 975 "parsermodule.c"
      case 15: // $bb_i11
        var $70=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $71=$name_addr_i; //@line 976 "parsermodule.c"
        var $72=_PyErr_Format($70, __str50, $71); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 17; break; //@line 978 "parsermodule.c"
      case 16: // $bb1_i12
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 17; break; //@line 980 "parsermodule.c"
      case 17: // $validate_numnodes_exit
        var $73=$0; //@line 978 "parsermodule.c"
        $retval_i10=$73; //@line 978 "parsermodule.c"
        var $retval3_i13=$retval_i10; //@line 978 "parsermodule.c"
        $res=$retval3_i13; //@line 1464 "parsermodule.c"
        __label__ = 18; break; //@line 1464 "parsermodule.c"
      case 18: // $bb10
        var $74=$res; //@line 1466 "parsermodule.c"
        $4=$74; //@line 1466 "parsermodule.c"
        var $75=$4; //@line 1466 "parsermodule.c"
        $retval=$75; //@line 1466 "parsermodule.c"
        var $retval11=$retval; //@line 1466 "parsermodule.c"
        ;
        return $retval11; //@line 1466 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i1;
        var $t_addr_i;
        var $retval_i2;
        var $0;
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_91;
        var $res;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1485 "parsermodule.c"
        $n_addr_i1=$3;
        $t_addr_i=267;
        var $4=$n_addr_i1; //@line 956 "parsermodule.c"
        var $5=$4; //@line 956 "parsermodule.c"
        var $6=HEAP[$5]; //@line 956 "parsermodule.c"
        var $7=($6); //@line 956 "parsermodule.c"
        var $8=$t_addr_i; //@line 956 "parsermodule.c"
        var $9=($7)!=($8); //@line 956 "parsermodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $10=$n_addr_i1; //@line 957 "parsermodule.c"
        var $11=$10; //@line 957 "parsermodule.c"
        var $12=HEAP[$11]; //@line 957 "parsermodule.c"
        var $13=($12); //@line 957 "parsermodule.c"
        var $14=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $15=$t_addr_i; //@line 957 "parsermodule.c"
        var $16=_PyErr_Format($14, __str49, $15, $13); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i2=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i2=1; //@line 959 "parsermodule.c"
        var $17=$tree_addr; //@line 1485 "parsermodule.c"
        $n_addr_i=$17;
        $num_addr_i=1;
        $name_addr_i=__str82;
        var $18=$n_addr_i; //@line 975 "parsermodule.c"
        var $19=$18+16; //@line 975 "parsermodule.c"
        var $20=HEAP[$19]; //@line 975 "parsermodule.c"
        var $21=$num_addr_i; //@line 975 "parsermodule.c"
        var $22=($20)!=($21); //@line 975 "parsermodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 975 "parsermodule.c"
      case 3: // $validate_numnodes_exit_thread
        var $23=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $24=$name_addr_i; //@line 976 "parsermodule.c"
        var $25=_PyErr_Format($23, __str50, $24); //@line 976 "parsermodule.c"
        $1=0; //@line 978 "parsermodule.c"
        $retval_i=0; //@line 978 "parsermodule.c"
        __label__ = 4; break;
      case 4: // $bb3
        $iftmp_91=0; //@line 1485 "parsermodule.c"
        $res=0; //@line 1485 "parsermodule.c"
        __label__ = 8; break;
      case 5: // $bb4
        $1=1; //@line 980 "parsermodule.c"
        $retval_i=1; //@line 978 "parsermodule.c"
        $iftmp_91=1; //@line 1485 "parsermodule.c"
        $res=1; //@line 1485 "parsermodule.c"
        var $26=$tree_addr; //@line 1488 "parsermodule.c"
        var $27=$26+20; //@line 1488 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1488 "parsermodule.c"
        var $29=$28; //@line 1488 "parsermodule.c"
        $tree_addr=$29; //@line 1488 "parsermodule.c"
        var $30=$tree_addr; //@line 1490 "parsermodule.c"
        var $31=$30; //@line 1490 "parsermodule.c"
        var $32=HEAP[$31]; //@line 1490 "parsermodule.c"
        var $33=($32)==268; //@line 1490 "parsermodule.c"
        var $34=$tree_addr; //@line 1491 "parsermodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1490 "parsermodule.c"
      case 6: // $bb5
        var $35=_validate_simple_stmt($34); //@line 1491 "parsermodule.c"
        $res=$35; //@line 1491 "parsermodule.c"
        __label__ = 8; break; //@line 1491 "parsermodule.c"
      case 7: // $bb6
        var $36=_validate_compound_stmt($34); //@line 1493 "parsermodule.c"
        $res=$36; //@line 1493 "parsermodule.c"
        __label__ = 8; break; //@line 1493 "parsermodule.c"
      case 8: // $bb7
        var $37=$res; //@line 1495 "parsermodule.c"
        $2=$37; //@line 1495 "parsermodule.c"
        var $38=$2; //@line 1495 "parsermodule.c"
        $retval=$38; //@line 1495 "parsermodule.c"
        var $retval8=$retval; //@line 1495 "parsermodule.c"
        ;
        return $retval8; //@line 1495 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_simple_stmt($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i1;
        var $t_addr_i;
        var $retval_i2;
        var $0;
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_93;
        var $iftmp_92;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1505 "parsermodule.c"
        var $4=$3+16; //@line 1505 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1505 "parsermodule.c"
        $nch=$5; //@line 1505 "parsermodule.c"
        var $6=$tree_addr; //@line 1509 "parsermodule.c"
        $n_addr_i1=$6;
        $t_addr_i=268;
        var $7=$n_addr_i1; //@line 956 "parsermodule.c"
        var $8=$7; //@line 956 "parsermodule.c"
        var $9=HEAP[$8]; //@line 956 "parsermodule.c"
        var $10=($9); //@line 956 "parsermodule.c"
        var $11=$t_addr_i; //@line 956 "parsermodule.c"
        var $12=($10)!=($11); //@line 956 "parsermodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $13=$n_addr_i1; //@line 957 "parsermodule.c"
        var $14=$13; //@line 957 "parsermodule.c"
        var $15=HEAP[$14]; //@line 957 "parsermodule.c"
        var $16=($15); //@line 957 "parsermodule.c"
        var $17=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $18=$t_addr_i; //@line 957 "parsermodule.c"
        var $19=_PyErr_Format($17, __str49, $18, $16); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i2=0; //@line 959 "parsermodule.c"
        __label__ = 6; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i2=1; //@line 959 "parsermodule.c"
        var $20=$nch; //@line 1509 "parsermodule.c"
        var $21=($20) <= 1; //@line 1509 "parsermodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 1509 "parsermodule.c"
      case 3: // $bb1
        var $22=$tree_addr; //@line 1509 "parsermodule.c"
        var $23=$22+20; //@line 1509 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1509 "parsermodule.c"
        var $25=$24; //@line 1509 "parsermodule.c"
        var $26=_validate_small_stmt($25); //@line 1509 "parsermodule.c"
        var $27=($26)==0; //@line 1509 "parsermodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 1509 "parsermodule.c"
      case 4: // $bb2
        var $28=$tree_addr; //@line 1509 "parsermodule.c"
        var $29=$28+20; //@line 1509 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1509 "parsermodule.c"
        var $31=$nch; //@line 1509 "parsermodule.c"
        var $32=($31) - 1; //@line 1509 "parsermodule.c"
        var $33=$30+24*$32; //@line 1509 "parsermodule.c"
        var $34=_validate_terminal($33, 4, 0); //@line 1509 "parsermodule.c"
        var $35=($34)==0; //@line 1509 "parsermodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1509 "parsermodule.c"
      case 5: // $bb3
        $iftmp_92=1; //@line 1509 "parsermodule.c"
        __label__ = 7; break; //@line 1509 "parsermodule.c"
      case 6: // $bb4
        $iftmp_92=0; //@line 1509 "parsermodule.c"
        __label__ = 7; break; //@line 1509 "parsermodule.c"
      case 7: // $bb5
        var $36=$iftmp_92; //@line 1509 "parsermodule.c"
        $res=$36; //@line 1509 "parsermodule.c"
        var $37=$nch; //@line 1511 "parsermodule.c"
        var $38=($37) <= 1; //@line 1511 "parsermodule.c"
        if ($38) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 12; break; } //@line 1511 "parsermodule.c"
      case 8: // $bb6
        var $39=$tree_addr; //@line 1512 "parsermodule.c"
        $n_addr_i=$39;
        $num_addr_i=2;
        $name_addr_i=__str83;
        var $40=$n_addr_i; //@line 975 "parsermodule.c"
        var $41=$40+16; //@line 975 "parsermodule.c"
        var $42=HEAP[$41]; //@line 975 "parsermodule.c"
        var $43=$num_addr_i; //@line 975 "parsermodule.c"
        var $44=($42)!=($43); //@line 975 "parsermodule.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 975 "parsermodule.c"
      case 9: // $bb_i
        var $45=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $46=$name_addr_i; //@line 976 "parsermodule.c"
        var $47=_PyErr_Format($45, __str50, $46); //@line 976 "parsermodule.c"
        $1=0; //@line 978 "parsermodule.c"
        __label__ = 11; break; //@line 978 "parsermodule.c"
      case 10: // $bb1_i
        $1=1; //@line 980 "parsermodule.c"
        __label__ = 11; break; //@line 980 "parsermodule.c"
      case 11: // $validate_numnodes_exit
        var $48=$1; //@line 978 "parsermodule.c"
        $retval_i=$48; //@line 978 "parsermodule.c"
        var $retval3_i=$retval_i; //@line 978 "parsermodule.c"
        $res=$retval3_i; //@line 1512 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 1512 "parsermodule.c"
      case 12: // $bb7
        var $49=__lastLabel__ == 11 ? $retval3_i : ($36);
        var $50=$nch; //@line 1513 "parsermodule.c"
        var $51=($50) - 1; //@line 1513 "parsermodule.c"
        $nch=$51; //@line 1513 "parsermodule.c"
        var $52=($49)!=0; //@line 1514 "parsermodule.c"
        if ($52) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1514 "parsermodule.c"
      case 13: // $bb8
        var $53=$nch; //@line 1514 "parsermodule.c"
        var $54=($53) & 1; //@line 1514 "parsermodule.c"
        var $55=($54)==0; //@line 1514 "parsermodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1514 "parsermodule.c"
      case 14: // $bb9
        var $56=$tree_addr; //@line 1515 "parsermodule.c"
        var $57=$56+20; //@line 1515 "parsermodule.c"
        var $58=HEAP[$57]; //@line 1515 "parsermodule.c"
        var $59=$nch; //@line 1515 "parsermodule.c"
        var $60=($59) - 1; //@line 1515 "parsermodule.c"
        $nch=$60; //@line 1515 "parsermodule.c"
        var $61=$nch; //@line 1515 "parsermodule.c"
        var $62=$58+24*$61; //@line 1515 "parsermodule.c"
        var $63=_validate_terminal($62, 13, __str84); //@line 1515 "parsermodule.c"
        $res=$63; //@line 1515 "parsermodule.c"
        __lastLabel__ = 14; __label__ = 16; break; //@line 1515 "parsermodule.c"
      case 15: // $bb10thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 15; __label__ = 16; break;
      case 16: // $bb10
        var $64=__lastLabel__ == 15 ? $_pr : ($63);
        var $65=($64)!=0; //@line 1516 "parsermodule.c"
        if ($65) { __label__ = 17; break; } else { __label__ = 26; break; } //@line 1516 "parsermodule.c"
      case 17: // $bb11
        var $66=$nch; //@line 1516 "parsermodule.c"
        var $67=($66) > 2; //@line 1516 "parsermodule.c"
        if ($67) { __label__ = 18; break; } else { __label__ = 26; break; } //@line 1516 "parsermodule.c"
      case 18: // $bb12
        $i=1; //@line 1519 "parsermodule.c"
        var $_pr6=$res;
        __lastLabel__ = 18; __label__ = 24; break; //@line 1519 "parsermodule.c"
      case 19: // $bb13
        var $68=$tree_addr; //@line 1520 "parsermodule.c"
        var $69=$68+20; //@line 1520 "parsermodule.c"
        var $70=HEAP[$69]; //@line 1520 "parsermodule.c"
        var $71=$i; //@line 1520 "parsermodule.c"
        var $72=$70+24*$71; //@line 1520 "parsermodule.c"
        var $73=_validate_terminal($72, 13, __str84); //@line 1520 "parsermodule.c"
        var $74=($73)==0; //@line 1520 "parsermodule.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1520 "parsermodule.c"
      case 20: // $bb14
        var $75=$tree_addr; //@line 1520 "parsermodule.c"
        var $76=$75+20; //@line 1520 "parsermodule.c"
        var $77=HEAP[$76]; //@line 1520 "parsermodule.c"
        var $78=$i; //@line 1520 "parsermodule.c"
        var $79=($78) + 1; //@line 1520 "parsermodule.c"
        var $80=$77+24*$79; //@line 1520 "parsermodule.c"
        var $81=_validate_small_stmt($80); //@line 1520 "parsermodule.c"
        var $82=($81)==0; //@line 1520 "parsermodule.c"
        if ($82) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1520 "parsermodule.c"
      case 21: // $bb15
        $iftmp_93=1; //@line 1520 "parsermodule.c"
        __label__ = 23; break; //@line 1520 "parsermodule.c"
      case 22: // $bb16
        $iftmp_93=0; //@line 1520 "parsermodule.c"
        __label__ = 23; break; //@line 1520 "parsermodule.c"
      case 23: // $bb17
        var $83=$iftmp_93; //@line 1520 "parsermodule.c"
        $res=$83; //@line 1520 "parsermodule.c"
        var $84=$i; //@line 1519 "parsermodule.c"
        var $85=($84) + 2; //@line 1519 "parsermodule.c"
        $i=$85; //@line 1519 "parsermodule.c"
        __lastLabel__ = 23; __label__ = 24; break; //@line 1519 "parsermodule.c"
      case 24: // $bb18
        var $86=__lastLabel__ == 23 ? $83 : ($_pr6);
        var $87=($86)==0; //@line 1519 "parsermodule.c"
        if ($87) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 1519 "parsermodule.c"
      case 25: // $bb19
        var $88=$i; //@line 1519 "parsermodule.c"
        var $89=$nch; //@line 1519 "parsermodule.c"
        var $90=($88) < ($89); //@line 1519 "parsermodule.c"
        if ($90) { __label__ = 19; break; } else { __label__ = 26; break; } //@line 1519 "parsermodule.c"
      case 26: // $bb20
        var $91=$res; //@line 1523 "parsermodule.c"
        $2=$91; //@line 1523 "parsermodule.c"
        var $92=$2; //@line 1523 "parsermodule.c"
        $retval=$92; //@line 1523 "parsermodule.c"
        var $retval21=$retval; //@line 1523 "parsermodule.c"
        ;
        return $retval21; //@line 1523 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_small_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i;
        var $0;
        var $message_addr_i;
        var $tree_addr;
        var $retval;
        var $1;
        var $nch;
        var $res;
        var $ntype;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 1530 "parsermodule.c"
        var $3=$2+16; //@line 1530 "parsermodule.c"
        var $4=HEAP[$3]; //@line 1530 "parsermodule.c"
        $nch=$4; //@line 1530 "parsermodule.c"
        var $5=$tree_addr; //@line 1531 "parsermodule.c"
        $n_addr_i=$5;
        $num_addr_i=1;
        $name_addr_i=__str85;
        var $6=$n_addr_i; //@line 975 "parsermodule.c"
        var $7=$6+16; //@line 975 "parsermodule.c"
        var $8=HEAP[$7]; //@line 975 "parsermodule.c"
        var $9=$num_addr_i; //@line 975 "parsermodule.c"
        var $10=($8)!=($9); //@line 975 "parsermodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 975 "parsermodule.c"
      case 1: // $bb
        $0=1; //@line 980 "parsermodule.c"
        $retval_i=1; //@line 978 "parsermodule.c"
        $res=1; //@line 1531 "parsermodule.c"
        var $11=$tree_addr; //@line 1534 "parsermodule.c"
        var $12=$11+20; //@line 1534 "parsermodule.c"
        var $13=HEAP[$12]; //@line 1534 "parsermodule.c"
        var $14=$13; //@line 1534 "parsermodule.c"
        var $15=$14; //@line 1534 "parsermodule.c"
        var $16=HEAP[$15]; //@line 1534 "parsermodule.c"
        var $17=($16); //@line 1534 "parsermodule.c"
        $ntype=$17; //@line 1534 "parsermodule.c"
        var $18=$ntype; //@line 1536 "parsermodule.c"
        var $19=($18)==270; //@line 1536 "parsermodule.c"
        var $20=$ntype; //@line 1536 "parsermodule.c"
        var $21=($20)==272; //@line 1536 "parsermodule.c"
        var $or_cond=($19) | ($21);
        var $22=$ntype; //@line 1536 "parsermodule.c"
        var $23=($22)==273; //@line 1536 "parsermodule.c"
        var $or_cond3=($or_cond) | ($23);
        var $24=$ntype; //@line 1536 "parsermodule.c"
        var $25=($24)==274; //@line 1536 "parsermodule.c"
        var $or_cond5=($or_cond3) | ($25);
        var $26=$ntype; //@line 1536 "parsermodule.c"
        var $27=($26)==275; //@line 1536 "parsermodule.c"
        var $or_cond7=($or_cond5) | ($27);
        var $28=$ntype; //@line 1536 "parsermodule.c"
        var $29=($28)==281; //@line 1536 "parsermodule.c"
        var $or_cond9=($or_cond7) | ($29);
        var $30=$ntype; //@line 1536 "parsermodule.c"
        var $31=($30)==289; //@line 1536 "parsermodule.c"
        var $or_cond11=($or_cond9) | ($31);
        var $32=$ntype; //@line 1536 "parsermodule.c"
        var $33=($32)==291; //@line 1536 "parsermodule.c"
        var $or_cond13=($or_cond11) | ($33);
        var $34=$ntype; //@line 1536 "parsermodule.c"
        var $35=($34)==290; //@line 1536 "parsermodule.c"
        var $or_cond15=($or_cond13) | ($35);
        if ($or_cond15) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1536 "parsermodule.c"
      case 2: // $bb9
        var $36=$tree_addr; //@line 1545 "parsermodule.c"
        var $37=$36+20; //@line 1545 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1545 "parsermodule.c"
        var $39=$38; //@line 1545 "parsermodule.c"
        var $40=_validate_node($39); //@line 1545 "parsermodule.c"
        $res=$40; //@line 1545 "parsermodule.c"
        __label__ = 6; break; //@line 1545 "parsermodule.c"
      case 3: // $bb10
        $res=0; //@line 1547 "parsermodule.c"
        $message_addr_i=__str86;
        var $41=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $42=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($41, $42); //@line 531 "parsermodule.c"
        __label__ = 6; break; //@line 1548 "parsermodule.c"
      case 4: // $bb12
        var $43=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $44=$name_addr_i; //@line 976 "parsermodule.c"
        var $45=_PyErr_Format($43, __str50, $44); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        $retval_i=0; //@line 978 "parsermodule.c"
        $res=0; //@line 1531 "parsermodule.c"
        var $46=$nch; //@line 1551 "parsermodule.c"
        var $47=($46)==1; //@line 1551 "parsermodule.c"
        if ($47) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1551 "parsermodule.c"
      case 5: // $bb13
        $res=0; //@line 1552 "parsermodule.c"
        var $48=$tree_addr; //@line 1553 "parsermodule.c"
        var $49=$48+20; //@line 1553 "parsermodule.c"
        var $50=HEAP[$49]; //@line 1553 "parsermodule.c"
        var $51=$50; //@line 1553 "parsermodule.c"
        var $52=$51; //@line 1553 "parsermodule.c"
        var $53=HEAP[$52]; //@line 1553 "parsermodule.c"
        var $54=($53); //@line 1553 "parsermodule.c"
        var $55=HEAP[_parser_error]; //@line 1553 "parsermodule.c"
        var $56=_PyErr_Format($55, __str87, $54); //@line 1553 "parsermodule.c"
        __label__ = 6; break; //@line 1553 "parsermodule.c"
      case 6: // $bb14
        var $57=$res; //@line 1557 "parsermodule.c"
        $1=$57; //@line 1557 "parsermodule.c"
        var $58=$1; //@line 1557 "parsermodule.c"
        $retval=$58; //@line 1557 "parsermodule.c"
        var $retval15=$retval; //@line 1557 "parsermodule.c"
        ;
        return $retval15; //@line 1557 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_compound_stmt($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i14;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i15;
        var $0;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_95;
        var $res;
        var $ntype;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1568 "parsermodule.c"
        $n_addr_i=$3;
        $t_addr_i=292;
        var $4=$n_addr_i; //@line 956 "parsermodule.c"
        var $5=$4; //@line 956 "parsermodule.c"
        var $6=HEAP[$5]; //@line 956 "parsermodule.c"
        var $7=($6); //@line 956 "parsermodule.c"
        var $8=$t_addr_i; //@line 956 "parsermodule.c"
        var $9=($7)!=($8); //@line 956 "parsermodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $10=$n_addr_i; //@line 957 "parsermodule.c"
        var $11=$10; //@line 957 "parsermodule.c"
        var $12=HEAP[$11]; //@line 957 "parsermodule.c"
        var $13=($12); //@line 957 "parsermodule.c"
        var $14=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $15=$t_addr_i; //@line 957 "parsermodule.c"
        var $16=_PyErr_Format($14, __str49, $15, $13); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $1=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $17=$tree_addr; //@line 1568 "parsermodule.c"
        $n_addr_i14=$17;
        $num_addr_i=1;
        $name_addr_i=__str88;
        var $18=$n_addr_i14; //@line 975 "parsermodule.c"
        var $19=$18+16; //@line 975 "parsermodule.c"
        var $20=HEAP[$19]; //@line 975 "parsermodule.c"
        var $21=$num_addr_i; //@line 975 "parsermodule.c"
        var $22=($20)!=($21); //@line 975 "parsermodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 975 "parsermodule.c"
      case 3: // $validate_numnodes_exit_thread
        var $23=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $24=$name_addr_i; //@line 976 "parsermodule.c"
        var $25=_PyErr_Format($23, __str50, $24); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        $retval_i15=0; //@line 978 "parsermodule.c"
        __label__ = 4; break;
      case 4: // $bb4
        $iftmp_95=0; //@line 1568 "parsermodule.c"
        $res=0; //@line 1568 "parsermodule.c"
        $2=0; //@line 1572 "parsermodule.c"
        __label__ = 9; break; //@line 1572 "parsermodule.c"
      case 5: // $bb5
        $0=1; //@line 980 "parsermodule.c"
        $retval_i15=1; //@line 978 "parsermodule.c"
        $iftmp_95=1; //@line 1568 "parsermodule.c"
        $res=1; //@line 1568 "parsermodule.c"
        var $26=$tree_addr; //@line 1574 "parsermodule.c"
        var $27=$26+20; //@line 1574 "parsermodule.c"
        var $28=HEAP[$27]; //@line 1574 "parsermodule.c"
        var $29=$28; //@line 1574 "parsermodule.c"
        $tree_addr=$29; //@line 1574 "parsermodule.c"
        var $30=$tree_addr; //@line 1575 "parsermodule.c"
        var $31=$30; //@line 1575 "parsermodule.c"
        var $32=HEAP[$31]; //@line 1575 "parsermodule.c"
        var $33=($32); //@line 1575 "parsermodule.c"
        $ntype=$33; //@line 1575 "parsermodule.c"
        var $34=$ntype; //@line 1576 "parsermodule.c"
        var $35=($34)==293; //@line 1576 "parsermodule.c"
        var $36=$ntype; //@line 1576 "parsermodule.c"
        var $37=($36)==294; //@line 1576 "parsermodule.c"
        var $or_cond=($35) | ($37);
        var $38=$ntype; //@line 1576 "parsermodule.c"
        var $39=($38)==295; //@line 1576 "parsermodule.c"
        var $or_cond3=($or_cond) | ($39);
        var $40=$ntype; //@line 1576 "parsermodule.c"
        var $41=($40)==296; //@line 1576 "parsermodule.c"
        var $or_cond5=($or_cond3) | ($41);
        var $42=$ntype; //@line 1576 "parsermodule.c"
        var $43=($42)==297; //@line 1576 "parsermodule.c"
        var $or_cond7=($or_cond5) | ($43);
        var $44=$ntype; //@line 1576 "parsermodule.c"
        var $45=($44)==262; //@line 1576 "parsermodule.c"
        var $or_cond9=($or_cond7) | ($45);
        var $46=$ntype; //@line 1576 "parsermodule.c"
        var $47=($46)==329; //@line 1576 "parsermodule.c"
        var $or_cond11=($or_cond9) | ($47);
        var $48=$ntype; //@line 1576 "parsermodule.c"
        var $49=($48)==261; //@line 1576 "parsermodule.c"
        var $or_cond13=($or_cond11) | ($49);
        if ($or_cond13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1576 "parsermodule.c"
      case 6: // $bb13
        var $50=$tree_addr; //@line 1584 "parsermodule.c"
        var $51=_validate_node($50); //@line 1584 "parsermodule.c"
        $res=$51; //@line 1584 "parsermodule.c"
        __label__ = 8; break; //@line 1584 "parsermodule.c"
      case 7: // $bb14
        $res=0; //@line 1586 "parsermodule.c"
        var $52=$tree_addr; //@line 1587 "parsermodule.c"
        var $53=$52; //@line 1587 "parsermodule.c"
        var $54=HEAP[$53]; //@line 1587 "parsermodule.c"
        var $55=($54); //@line 1587 "parsermodule.c"
        var $56=HEAP[_parser_error]; //@line 1587 "parsermodule.c"
        var $57=_PyErr_Format($56, __str89, $55); //@line 1587 "parsermodule.c"
        __label__ = 8; break; //@line 1587 "parsermodule.c"
      case 8: // $bb15
        var $58=$res; //@line 1590 "parsermodule.c"
        $2=$58; //@line 1590 "parsermodule.c"
        __label__ = 9; break; //@line 1590 "parsermodule.c"
      case 9: // $bb16
        var $59=$2; //@line 1572 "parsermodule.c"
        $retval=$59; //@line 1572 "parsermodule.c"
        var $retval17=$retval; //@line 1572 "parsermodule.c"
        ;
        return $retval17; //@line 1572 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_yield_expr($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr_i;
        var $retval_i2;
        var $0;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_110;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1750 "parsermodule.c"
        var $4=$3+16; //@line 1750 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1750 "parsermodule.c"
        $nch=$5; //@line 1750 "parsermodule.c"
        var $6=$tree_addr; //@line 1753 "parsermodule.c"
        $n_addr_i=$6;
        $t_addr_i=340;
        var $7=$n_addr_i; //@line 956 "parsermodule.c"
        var $8=$7; //@line 956 "parsermodule.c"
        var $9=HEAP[$8]; //@line 956 "parsermodule.c"
        var $10=($9); //@line 956 "parsermodule.c"
        var $11=$t_addr_i; //@line 956 "parsermodule.c"
        var $12=($10)!=($11); //@line 956 "parsermodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $13=$n_addr_i; //@line 957 "parsermodule.c"
        var $14=$13; //@line 957 "parsermodule.c"
        var $15=HEAP[$14]; //@line 957 "parsermodule.c"
        var $16=($15); //@line 957 "parsermodule.c"
        var $17=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $18=$t_addr_i; //@line 957 "parsermodule.c"
        var $19=_PyErr_Format($17, __str49, $18, $16); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $1=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $20=$nch; //@line 1753 "parsermodule.c"
        var $21=($20)==1; //@line 1753 "parsermodule.c"
        var $22=$nch; //@line 1753 "parsermodule.c"
        var $23=($22)==2; //@line 1753 "parsermodule.c"
        var $or_cond=($21) | ($23);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1753 "parsermodule.c"
      case 3: // $bb2
        var $24=$tree_addr; //@line 1753 "parsermodule.c"
        var $25=$24+20; //@line 1753 "parsermodule.c"
        var $26=HEAP[$25]; //@line 1753 "parsermodule.c"
        var $27=$26; //@line 1753 "parsermodule.c"
        var $28=_validate_terminal($27, 1, __str110); //@line 1753 "parsermodule.c"
        var $29=($28)==0; //@line 1753 "parsermodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1753 "parsermodule.c"
      case 4: // $bb5
        $iftmp_110=0; //@line 1753 "parsermodule.c"
        $res=0; //@line 1753 "parsermodule.c"
        __label__ = 7; break;
      case 5: // $bb6
        $iftmp_110=1; //@line 1753 "parsermodule.c"
        $res=1; //@line 1753 "parsermodule.c"
        var $30=$nch; //@line 1755 "parsermodule.c"
        var $31=($30)==2; //@line 1755 "parsermodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1755 "parsermodule.c"
      case 6: // $bb7
        var $32=$tree_addr; //@line 1756 "parsermodule.c"
        var $33=$32+20; //@line 1756 "parsermodule.c"
        var $34=HEAP[$33]; //@line 1756 "parsermodule.c"
        var $35=$34+24; //@line 1756 "parsermodule.c"
        $tree_addr_i=$35;
        var $36=$tree_addr_i; //@line 1162 "parsermodule.c"
        var $37=_validate_repeating_list($36, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $0=$37; //@line 1162 "parsermodule.c"
        var $38=$0; //@line 1162 "parsermodule.c"
        $retval_i2=$38; //@line 1162 "parsermodule.c"
        var $retval1_i=$retval_i2; //@line 1162 "parsermodule.c"
        $res=$retval1_i; //@line 1756 "parsermodule.c"
        __label__ = 7; break; //@line 1756 "parsermodule.c"
      case 7: // $bb8
        var $39=$res; //@line 1758 "parsermodule.c"
        $2=$39; //@line 1758 "parsermodule.c"
        var $40=$2; //@line 1758 "parsermodule.c"
        $retval=$40; //@line 1758 "parsermodule.c"
        var $retval9=$retval; //@line 1758 "parsermodule.c"
        ;
        return $retval9; //@line 1758 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_name($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $0;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $1;
        var $tree_addr;
        var $retval;
        var $2;
        var $iftmp_112;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $3=$tree_addr; //@line 1776 "parsermodule.c"
        var $4=$3+16; //@line 1776 "parsermodule.c"
        var $5=HEAP[$4]; //@line 1776 "parsermodule.c"
        $nch=$5; //@line 1776 "parsermodule.c"
        var $6=$tree_addr; //@line 1777 "parsermodule.c"
        $n_addr_i=$6;
        $t_addr_i=284;
        var $7=$n_addr_i; //@line 956 "parsermodule.c"
        var $8=$7; //@line 956 "parsermodule.c"
        var $9=HEAP[$8]; //@line 956 "parsermodule.c"
        var $10=($9); //@line 956 "parsermodule.c"
        var $11=$t_addr_i; //@line 956 "parsermodule.c"
        var $12=($10)!=($11); //@line 956 "parsermodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit
        var $13=$n_addr_i; //@line 957 "parsermodule.c"
        var $14=$13; //@line 957 "parsermodule.c"
        var $15=HEAP[$14]; //@line 957 "parsermodule.c"
        var $16=($15); //@line 957 "parsermodule.c"
        var $17=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $18=$t_addr_i; //@line 957 "parsermodule.c"
        var $19=_PyErr_Format($17, __str49, $18, $16); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        $ok=0; //@line 1777 "parsermodule.c"
        __label__ = 15; break;
      case 2: // $bb
        $1=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        $ok=1; //@line 1777 "parsermodule.c"
        var $20=$nch; //@line 1780 "parsermodule.c"
        var $21=($20)==1; //@line 1780 "parsermodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1780 "parsermodule.c"
      case 3: // $bb1
        var $22=$tree_addr; //@line 1781 "parsermodule.c"
        var $23=$22+20; //@line 1781 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1781 "parsermodule.c"
        var $25=$24; //@line 1781 "parsermodule.c"
        var $26=_validate_terminal($25, 1, 0); //@line 1781 "parsermodule.c"
        $ok=$26; //@line 1781 "parsermodule.c"
        __label__ = 15; break; //@line 1781 "parsermodule.c"
      case 4: // $bb2
        var $27=$nch; //@line 1782 "parsermodule.c"
        var $28=($27)==3; //@line 1782 "parsermodule.c"
        var $29=$tree_addr; //@line 1783 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 1782 "parsermodule.c"
      case 5: // $bb3
        var $30=$29+20; //@line 1783 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1783 "parsermodule.c"
        var $32=$31; //@line 1783 "parsermodule.c"
        var $33=_validate_terminal($32, 1, 0); //@line 1783 "parsermodule.c"
        var $34=($33)==0; //@line 1783 "parsermodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1783 "parsermodule.c"
      case 6: // $bb4
        var $35=$tree_addr; //@line 1783 "parsermodule.c"
        var $36=$35+20; //@line 1783 "parsermodule.c"
        var $37=HEAP[$36]; //@line 1783 "parsermodule.c"
        var $38=$37+24; //@line 1783 "parsermodule.c"
        var $39=_validate_terminal($38, 1, __str112); //@line 1783 "parsermodule.c"
        var $40=($39)==0; //@line 1783 "parsermodule.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1783 "parsermodule.c"
      case 7: // $bb5
        var $41=$tree_addr; //@line 1783 "parsermodule.c"
        var $42=$41+20; //@line 1783 "parsermodule.c"
        var $43=HEAP[$42]; //@line 1783 "parsermodule.c"
        var $44=$43+48; //@line 1783 "parsermodule.c"
        var $45=_validate_terminal($44, 1, 0); //@line 1783 "parsermodule.c"
        var $46=($45)==0; //@line 1783 "parsermodule.c"
        if ($46) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1783 "parsermodule.c"
      case 8: // $bb6
        $iftmp_112=1; //@line 1783 "parsermodule.c"
        __label__ = 10; break; //@line 1783 "parsermodule.c"
      case 9: // $bb7
        $iftmp_112=0; //@line 1783 "parsermodule.c"
        __label__ = 10; break; //@line 1783 "parsermodule.c"
      case 10: // $bb8
        var $47=$iftmp_112; //@line 1783 "parsermodule.c"
        $ok=$47; //@line 1783 "parsermodule.c"
        __label__ = 15; break; //@line 1783 "parsermodule.c"
      case 11: // $bb9
        $n_addr_i1=$29;
        $num_addr_i=3;
        $name_addr_i=__str113;
        var $48=$n_addr_i1; //@line 975 "parsermodule.c"
        var $49=$48+16; //@line 975 "parsermodule.c"
        var $50=HEAP[$49]; //@line 975 "parsermodule.c"
        var $51=$num_addr_i; //@line 975 "parsermodule.c"
        var $52=($50)!=($51); //@line 975 "parsermodule.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 975 "parsermodule.c"
      case 12: // $bb_i3
        var $53=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $54=$name_addr_i; //@line 976 "parsermodule.c"
        var $55=_PyErr_Format($53, __str50, $54); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 14; break; //@line 978 "parsermodule.c"
      case 13: // $bb1_i4
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 14; break; //@line 980 "parsermodule.c"
      case 14: // $validate_numnodes_exit
        var $56=$0; //@line 978 "parsermodule.c"
        $retval_i2=$56; //@line 978 "parsermodule.c"
        var $retval3_i5=$retval_i2; //@line 978 "parsermodule.c"
        $ok=$retval3_i5; //@line 1787 "parsermodule.c"
        __label__ = 15; break; //@line 1787 "parsermodule.c"
      case 15: // $bb10
        var $57=$ok; //@line 1789 "parsermodule.c"
        $2=$57; //@line 1789 "parsermodule.c"
        var $58=$2; //@line 1789 "parsermodule.c"
        $retval=$58; //@line 1789 "parsermodule.c"
        var $retval11=$retval; //@line 1789 "parsermodule.c"
        ;
        return $retval11; //@line 1789 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_name($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_114;
        var $iftmp_113;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 1798 "parsermodule.c"
        var $3=$2+16; //@line 1798 "parsermodule.c"
        var $4=HEAP[$3]; //@line 1798 "parsermodule.c"
        $nch=$4; //@line 1798 "parsermodule.c"
        var $5=$tree_addr; //@line 1801 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=288;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 1801 "parsermodule.c"
        var $20=($19) & 1; //@line 1801 "parsermodule.c"
        var $21=((($20)) & 255); //@line 1801 "parsermodule.c"
        var $toBool=($21)!=0; //@line 1801 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1801 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 1801 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 1801 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1801 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 1801 "parsermodule.c"
        var $23=$22+20; //@line 1801 "parsermodule.c"
        var $24=HEAP[$23]; //@line 1801 "parsermodule.c"
        var $25=$24; //@line 1801 "parsermodule.c"
        var $26=_validate_terminal($25, 1, 0); //@line 1801 "parsermodule.c"
        var $27=($26)==0; //@line 1801 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1801 "parsermodule.c"
      case 4: // $bb5
        $iftmp_113=1; //@line 1801 "parsermodule.c"
        __label__ = 6; break; //@line 1801 "parsermodule.c"
      case 5: // $bb6
        $iftmp_113=0; //@line 1801 "parsermodule.c"
        __label__ = 6; break; //@line 1801 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_113; //@line 1801 "parsermodule.c"
        $res=$28; //@line 1801 "parsermodule.c"
        $i=1; //@line 1804 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 1804 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 1805 "parsermodule.c"
        var $30=$29+20; //@line 1805 "parsermodule.c"
        var $31=HEAP[$30]; //@line 1805 "parsermodule.c"
        var $32=$i; //@line 1805 "parsermodule.c"
        var $33=$31+24*$32; //@line 1805 "parsermodule.c"
        var $34=_validate_terminal($33, 23, __str114); //@line 1805 "parsermodule.c"
        var $35=($34)==0; //@line 1805 "parsermodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 1805 "parsermodule.c"
      case 8: // $bb9
        var $36=$tree_addr; //@line 1805 "parsermodule.c"
        var $37=$36+20; //@line 1805 "parsermodule.c"
        var $38=HEAP[$37]; //@line 1805 "parsermodule.c"
        var $39=$i; //@line 1805 "parsermodule.c"
        var $40=($39) + 1; //@line 1805 "parsermodule.c"
        var $41=$38+24*$40; //@line 1805 "parsermodule.c"
        var $42=_validate_terminal($41, 1, 0); //@line 1805 "parsermodule.c"
        var $43=($42)==0; //@line 1805 "parsermodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1805 "parsermodule.c"
      case 9: // $bb10
        $iftmp_114=1; //@line 1805 "parsermodule.c"
        __label__ = 11; break; //@line 1805 "parsermodule.c"
      case 10: // $bb11
        $iftmp_114=0; //@line 1805 "parsermodule.c"
        __label__ = 11; break; //@line 1805 "parsermodule.c"
      case 11: // $bb12
        var $44=$iftmp_114; //@line 1805 "parsermodule.c"
        $res=$44; //@line 1805 "parsermodule.c"
        var $45=$i; //@line 1804 "parsermodule.c"
        var $46=($45) + 2; //@line 1804 "parsermodule.c"
        $i=$46; //@line 1804 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 1804 "parsermodule.c"
      case 12: // $bb13
        var $47=__lastLabel__ == 11 ? $44 : ($28);
        var $48=($47)==0; //@line 1804 "parsermodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1804 "parsermodule.c"
      case 13: // $bb14
        var $49=$i; //@line 1804 "parsermodule.c"
        var $50=$nch; //@line 1804 "parsermodule.c"
        var $51=($49) < ($50); //@line 1804 "parsermodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1804 "parsermodule.c"
      case 14: // $bb15
        var $52=$res; //@line 1808 "parsermodule.c"
        $1=$52; //@line 1808 "parsermodule.c"
        var $53=$1; //@line 1808 "parsermodule.c"
        $retval=$53; //@line 1808 "parsermodule.c"
        var $retval16=$retval; //@line 1808 "parsermodule.c"
        ;
        return $retval16; //@line 1808 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_dotted_as_name($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_115;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 1817 "parsermodule.c"
        var $3=$2+16; //@line 1817 "parsermodule.c"
        var $4=HEAP[$3]; //@line 1817 "parsermodule.c"
        $nch=$4; //@line 1817 "parsermodule.c"
        var $5=$tree_addr; //@line 1818 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=285;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        $res=0; //@line 1818 "parsermodule.c"
        __label__ = 12; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        $res=1; //@line 1818 "parsermodule.c"
        var $19=$nch; //@line 1821 "parsermodule.c"
        var $20=($19)==1; //@line 1821 "parsermodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1821 "parsermodule.c"
      case 3: // $bb1
        var $21=$tree_addr; //@line 1822 "parsermodule.c"
        var $22=$21+20; //@line 1822 "parsermodule.c"
        var $23=HEAP[$22]; //@line 1822 "parsermodule.c"
        var $24=$23; //@line 1822 "parsermodule.c"
        var $25=_validate_dotted_name($24); //@line 1822 "parsermodule.c"
        $res=$25; //@line 1822 "parsermodule.c"
        __label__ = 12; break; //@line 1822 "parsermodule.c"
      case 4: // $bb2
        var $26=$nch; //@line 1823 "parsermodule.c"
        var $27=($26)==3; //@line 1823 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 1823 "parsermodule.c"
      case 5: // $bb3
        var $28=$tree_addr; //@line 1824 "parsermodule.c"
        var $29=$28+20; //@line 1824 "parsermodule.c"
        var $30=HEAP[$29]; //@line 1824 "parsermodule.c"
        var $31=$30; //@line 1824 "parsermodule.c"
        var $32=_validate_dotted_name($31); //@line 1824 "parsermodule.c"
        var $33=($32)==0; //@line 1824 "parsermodule.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1824 "parsermodule.c"
      case 6: // $bb4
        var $34=$tree_addr; //@line 1824 "parsermodule.c"
        var $35=$34+20; //@line 1824 "parsermodule.c"
        var $36=HEAP[$35]; //@line 1824 "parsermodule.c"
        var $37=$36+24; //@line 1824 "parsermodule.c"
        var $38=_validate_terminal($37, 1, __str112); //@line 1824 "parsermodule.c"
        var $39=($38)==0; //@line 1824 "parsermodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1824 "parsermodule.c"
      case 7: // $bb5
        var $40=$tree_addr; //@line 1824 "parsermodule.c"
        var $41=$40+20; //@line 1824 "parsermodule.c"
        var $42=HEAP[$41]; //@line 1824 "parsermodule.c"
        var $43=$42+48; //@line 1824 "parsermodule.c"
        var $44=_validate_terminal($43, 1, 0); //@line 1824 "parsermodule.c"
        var $45=($44)==0; //@line 1824 "parsermodule.c"
        if ($45) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1824 "parsermodule.c"
      case 8: // $bb6
        $iftmp_115=1; //@line 1824 "parsermodule.c"
        __label__ = 10; break; //@line 1824 "parsermodule.c"
      case 9: // $bb7
        $iftmp_115=0; //@line 1824 "parsermodule.c"
        __label__ = 10; break; //@line 1824 "parsermodule.c"
      case 10: // $bb8
        var $46=$iftmp_115; //@line 1824 "parsermodule.c"
        $res=$46; //@line 1824 "parsermodule.c"
        __label__ = 12; break; //@line 1824 "parsermodule.c"
      case 11: // $bb9
        $res=0; //@line 1828 "parsermodule.c"
        $message_addr_i=__str115;
        var $47=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $48=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($47, $48); //@line 531 "parsermodule.c"
        __label__ = 12; break; //@line 1829 "parsermodule.c"
      case 12: // $bb10
        var $49=$res; //@line 1832 "parsermodule.c"
        $1=$49; //@line 1832 "parsermodule.c"
        var $50=$1; //@line 1832 "parsermodule.c"
        $retval=$50; //@line 1832 "parsermodule.c"
        var $retval11=$retval; //@line 1832 "parsermodule.c"
        ;
        return $retval11; //@line 1832 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_import_as_names($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tree_addr;
        var $retval;
        var $0;
        var $iftmp_118;
        var $nch;
        var $res;
        var $i;
        $tree_addr=$tree;
        var $1=$tree_addr; //@line 1855 "parsermodule.c"
        var $2=$1+16; //@line 1855 "parsermodule.c"
        var $3=HEAP[$2]; //@line 1855 "parsermodule.c"
        $nch=$3; //@line 1855 "parsermodule.c"
        var $4=$tree_addr; //@line 1856 "parsermodule.c"
        var $5=$4+20; //@line 1856 "parsermodule.c"
        var $6=HEAP[$5]; //@line 1856 "parsermodule.c"
        var $7=$6; //@line 1856 "parsermodule.c"
        var $8=_validate_import_as_name($7); //@line 1856 "parsermodule.c"
        $res=$8; //@line 1856 "parsermodule.c"
        $i=1; //@line 1859 "parsermodule.c"
        __lastLabel__ = -1; __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 1: // $bb
        var $9=$tree_addr; //@line 1860 "parsermodule.c"
        var $10=$9+20; //@line 1860 "parsermodule.c"
        var $11=HEAP[$10]; //@line 1860 "parsermodule.c"
        var $12=$i; //@line 1860 "parsermodule.c"
        var $13=$11+24*$12; //@line 1860 "parsermodule.c"
        var $14=_validate_terminal($13, 12, __str52); //@line 1860 "parsermodule.c"
        var $15=($14)==0; //@line 1860 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1860 "parsermodule.c"
      case 2: // $bb1
        var $16=$tree_addr; //@line 1860 "parsermodule.c"
        var $17=$16+20; //@line 1860 "parsermodule.c"
        var $18=HEAP[$17]; //@line 1860 "parsermodule.c"
        var $19=$i; //@line 1860 "parsermodule.c"
        var $20=($19) + 1; //@line 1860 "parsermodule.c"
        var $21=$18+24*$20; //@line 1860 "parsermodule.c"
        var $22=_validate_import_as_name($21); //@line 1860 "parsermodule.c"
        var $23=($22)==0; //@line 1860 "parsermodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1860 "parsermodule.c"
      case 3: // $bb2
        $iftmp_118=1; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 4: // $bb3
        $iftmp_118=0; //@line 1860 "parsermodule.c"
        __label__ = 5; break; //@line 1860 "parsermodule.c"
      case 5: // $bb4
        var $24=$iftmp_118; //@line 1860 "parsermodule.c"
        $res=$24; //@line 1860 "parsermodule.c"
        var $25=$i; //@line 1859 "parsermodule.c"
        var $26=($25) + 2; //@line 1859 "parsermodule.c"
        $i=$26; //@line 1859 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 6; break; //@line 1859 "parsermodule.c"
      case 6: // $bb5
        var $27=__lastLabel__ == 5 ? $24 : ($8);
        var $28=($27)==0; //@line 1859 "parsermodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1859 "parsermodule.c"
      case 7: // $bb6
        var $29=$i; //@line 1859 "parsermodule.c"
        var $30=($29) + 1; //@line 1859 "parsermodule.c"
        var $31=$nch; //@line 1859 "parsermodule.c"
        var $32=($30) < ($31); //@line 1859 "parsermodule.c"
        if ($32) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1859 "parsermodule.c"
      case 8: // $bb7
        var $33=$res; //@line 1862 "parsermodule.c"
        $0=$33; //@line 1862 "parsermodule.c"
        var $34=$0; //@line 1862 "parsermodule.c"
        $retval=$34; //@line 1862 "parsermodule.c"
        var $retval8=$retval; //@line 1862 "parsermodule.c"
        ;
        return $retval8; //@line 1862 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_test($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i2_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i3_i;
        var $0;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $1;
        var $tree_addr_i;
        var $retval_i1;
        var $2;
        var $iftmp_190_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_146;
        var $iftmp_145;
        var $iftmp_144;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 2144 "parsermodule.c"
        var $6=$5+16; //@line 2144 "parsermodule.c"
        var $7=HEAP[$6]; //@line 2144 "parsermodule.c"
        $nch=$7; //@line 2144 "parsermodule.c"
        var $8=$tree_addr; //@line 2145 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=304;
        var $9=$n_addr_i; //@line 956 "parsermodule.c"
        var $10=$9; //@line 956 "parsermodule.c"
        var $11=HEAP[$10]; //@line 956 "parsermodule.c"
        var $12=($11); //@line 956 "parsermodule.c"
        var $13=$t_addr_i; //@line 956 "parsermodule.c"
        var $14=($12)!=($13); //@line 956 "parsermodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $15=$n_addr_i; //@line 957 "parsermodule.c"
        var $16=$15; //@line 957 "parsermodule.c"
        var $17=HEAP[$16]; //@line 957 "parsermodule.c"
        var $18=($17); //@line 957 "parsermodule.c"
        var $19=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $20=$t_addr_i; //@line 957 "parsermodule.c"
        var $21=_PyErr_Format($19, __str49, $20, $18); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $22=$nch; //@line 2145 "parsermodule.c"
        var $23=($22) & 1; //@line 2145 "parsermodule.c"
        var $24=((($23)) & 255); //@line 2145 "parsermodule.c"
        var $toBool=($24)!=0; //@line 2145 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2145 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2145 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2145 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2145 "parsermodule.c"
      case 3: // $bb13_thread
        $iftmp_144=0; //@line 2145 "parsermodule.c"
        $res=0; //@line 2145 "parsermodule.c"
        __label__ = 35; break;
      case 4: // $bb7
        $iftmp_144=1; //@line 2145 "parsermodule.c"
        $res=1; //@line 2145 "parsermodule.c"
        var $25=$tree_addr; //@line 2147 "parsermodule.c"
        var $26=$25+20; //@line 2147 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2147 "parsermodule.c"
        var $28=$27; //@line 2147 "parsermodule.c"
        var $29=$28; //@line 2147 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2147 "parsermodule.c"
        var $31=($30)!=321; //@line 2147 "parsermodule.c"
        if ($31) { __label__ = 24; break; } else { __label__ = 5; break; } //@line 2147 "parsermodule.c"
      case 5: // $bb8
        var $32=$nch; //@line 2148 "parsermodule.c"
        var $33=($32)!=1; //@line 2148 "parsermodule.c"
        if ($33) { __label__ = 22; break; } else { __label__ = 6; break; } //@line 2148 "parsermodule.c"
      case 6: // $bb9
        var $34=$tree_addr; //@line 2148 "parsermodule.c"
        var $35=$34+20; //@line 2148 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2148 "parsermodule.c"
        var $37=$36; //@line 2148 "parsermodule.c"
        $tree_addr_i=$37;
        var $38=$tree_addr_i; //@line 2700 "parsermodule.c"
        var $39=$38+16; //@line 2700 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2700 "parsermodule.c"
        $nch_i=$40; //@line 2700 "parsermodule.c"
        var $41=$tree_addr_i; //@line 2705 "parsermodule.c"
        $n_addr_i_i=$41;
        $t_addr_i_i=321;
        var $42=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $43=$42; //@line 956 "parsermodule.c"
        var $44=HEAP[$43]; //@line 956 "parsermodule.c"
        var $45=($44); //@line 956 "parsermodule.c"
        var $46=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $47=($45)!=($46); //@line 956 "parsermodule.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 956 "parsermodule.c"
      case 7: // $validate_ntype_exit_i_thread
        var $48=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $49=$48; //@line 957 "parsermodule.c"
        var $50=HEAP[$49]; //@line 957 "parsermodule.c"
        var $51=($50); //@line 957 "parsermodule.c"
        var $52=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $53=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $54=_PyErr_Format($52, __str49, $53, $51); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 14; break;
      case 8: // $bb_i2
        $1=1; //@line 961 "parsermodule.c"
        $retval_i_i=1; //@line 959 "parsermodule.c"
        var $55=$nch_i; //@line 2705 "parsermodule.c"
        var $56=($55)==3; //@line 2705 "parsermodule.c"
        var $57=$nch_i; //@line 2705 "parsermodule.c"
        var $58=($57)==4; //@line 2705 "parsermodule.c"
        var $or_cond_i=($56) | ($58);
        if ($or_cond_i) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 2705 "parsermodule.c"
      case 9: // $bb2_i
        var $59=$tree_addr_i; //@line 2705 "parsermodule.c"
        var $60=$59+20; //@line 2705 "parsermodule.c"
        var $61=HEAP[$60]; //@line 2705 "parsermodule.c"
        var $62=$61; //@line 2705 "parsermodule.c"
        var $63=_validate_terminal($62, 1, __str156); //@line 2705 "parsermodule.c"
        var $64=($63)==0; //@line 2705 "parsermodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 2705 "parsermodule.c"
      case 10: // $bb3_i
        var $65=$tree_addr_i; //@line 2705 "parsermodule.c"
        var $66=$65+20; //@line 2705 "parsermodule.c"
        var $67=HEAP[$66]; //@line 2705 "parsermodule.c"
        var $68=$nch_i; //@line 2705 "parsermodule.c"
        var $69=($68) - 2; //@line 2705 "parsermodule.c"
        var $70=$67+24*$69; //@line 2705 "parsermodule.c"
        var $71=_validate_terminal($70, 11, __str54); //@line 2705 "parsermodule.c"
        var $72=($71)==0; //@line 2705 "parsermodule.c"
        if ($72) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 2705 "parsermodule.c"
      case 11: // $bb4_i
        var $73=$tree_addr_i; //@line 2705 "parsermodule.c"
        var $74=$73+20; //@line 2705 "parsermodule.c"
        var $75=HEAP[$74]; //@line 2705 "parsermodule.c"
        var $76=$nch_i; //@line 2705 "parsermodule.c"
        var $77=($76) - 1; //@line 2705 "parsermodule.c"
        var $78=$75+24*$77; //@line 2705 "parsermodule.c"
        var $79=_validate_test($78); //@line 2705 "parsermodule.c"
        var $80=($79)==0; //@line 2705 "parsermodule.c"
        if ($80) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 2705 "parsermodule.c"
      case 12: // $bb8_i
        $iftmp_190_i=1; //@line 2705 "parsermodule.c"
        $res_i=1; //@line 2705 "parsermodule.c"
        var $81=$nch_i; //@line 2707 "parsermodule.c"
        var $82=($81)!=4; //@line 2707 "parsermodule.c"
        if ($82) { __label__ = 19; break; } else { __label__ = 13; break; } //@line 2707 "parsermodule.c"
      case 13: // $bb9_i
        var $83=$tree_addr_i; //@line 2708 "parsermodule.c"
        var $84=$83+20; //@line 2708 "parsermodule.c"
        var $85=HEAP[$84]; //@line 2708 "parsermodule.c"
        var $86=$85+24; //@line 2708 "parsermodule.c"
        var $87=_validate_varargslist($86); //@line 2708 "parsermodule.c"
        $res_i=$87; //@line 2708 "parsermodule.c"
        __lastLabel__ = 13; __label__ = 20; break; //@line 2708 "parsermodule.c"
      case 14: // $bb11_i
        $iftmp_190_i=0; //@line 2705 "parsermodule.c"
        $res_i=0; //@line 2705 "parsermodule.c"
        var $88=_PyErr_Occurred(); //@line 2709 "parsermodule.c"
        var $89=($88)==0; //@line 2709 "parsermodule.c"
        if ($89) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 2709 "parsermodule.c"
      case 15: // $bb12_i
        var $90=$tree_addr_i; //@line 2710 "parsermodule.c"
        $n_addr_i2_i=$90;
        $num_addr_i_i=3;
        $name_addr_i_i=__str157;
        var $91=$n_addr_i2_i; //@line 975 "parsermodule.c"
        var $92=$91+16; //@line 975 "parsermodule.c"
        var $93=HEAP[$92]; //@line 975 "parsermodule.c"
        var $94=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $95=($93)!=($94); //@line 975 "parsermodule.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 975 "parsermodule.c"
      case 16: // $bb_i4_i
        var $96=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $97=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $98=_PyErr_Format($96, __str50, $97); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 18; break; //@line 978 "parsermodule.c"
      case 17: // $bb1_i5_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 18; break; //@line 980 "parsermodule.c"
      case 18: // $validate_numnodes_exit_i
        var $99=$0; //@line 978 "parsermodule.c"
        $retval_i3_i=$99; //@line 978 "parsermodule.c"
        __label__ = 19; break; //@line 2710 "parsermodule.c"
      case 19: // $validate_lambdef_exitthread_pre_split
        var $_pr=$res_i;
        __lastLabel__ = 19; __label__ = 20; break;
      case 20: // $validate_lambdef_exit
        var $100=__lastLabel__ == 19 ? $_pr : ($87);
        $2=$100; //@line 2712 "parsermodule.c"
        $retval_i1=$100; //@line 2712 "parsermodule.c"
        var $101=($100)==0; //@line 2148 "parsermodule.c"
        if ($101) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 2148 "parsermodule.c"
      case 21: // $bb10
        $iftmp_145=1; //@line 2148 "parsermodule.c"
        __label__ = 23; break; //@line 2148 "parsermodule.c"
      case 22: // $bb11
        $iftmp_145=0; //@line 2148 "parsermodule.c"
        __label__ = 23; break; //@line 2148 "parsermodule.c"
      case 23: // $bb12
        var $102=$iftmp_145; //@line 2148 "parsermodule.c"
        $res=$102; //@line 2148 "parsermodule.c"
        __label__ = 35; break; //@line 2148 "parsermodule.c"
      case 24: // $bb13
        var $_pr4=$res;
        var $103=($_pr4)!=0; //@line 2150 "parsermodule.c"
        if ($103) { __label__ = 25; break; } else { __label__ = 35; break; } //@line 2150 "parsermodule.c"
      case 25: // $bb14
        var $104=$tree_addr; //@line 2151 "parsermodule.c"
        var $105=$104+20; //@line 2151 "parsermodule.c"
        var $106=HEAP[$105]; //@line 2151 "parsermodule.c"
        var $107=$106; //@line 2151 "parsermodule.c"
        var $108=_validate_or_test($107); //@line 2151 "parsermodule.c"
        $res=$108; //@line 2151 "parsermodule.c"
        var $109=$res; //@line 2152 "parsermodule.c"
        var $110=($109)==0; //@line 2152 "parsermodule.c"
        if ($110) { __label__ = 33; break; } else { __label__ = 26; break; } //@line 2152 "parsermodule.c"
      case 26: // $bb15
        var $111=$nch; //@line 2152 "parsermodule.c"
        var $112=($111)==1; //@line 2152 "parsermodule.c"
        if ($112) { __label__ = 32; break; } else { __label__ = 27; break; } //@line 2152 "parsermodule.c"
      case 27: // $bb16
        var $113=$nch; //@line 2152 "parsermodule.c"
        var $114=($113)!=5; //@line 2152 "parsermodule.c"
        if ($114) { __label__ = 33; break; } else { __label__ = 28; break; } //@line 2152 "parsermodule.c"
      case 28: // $bb17
        var $115=$tree_addr; //@line 2152 "parsermodule.c"
        var $116=$115+20; //@line 2152 "parsermodule.c"
        var $117=HEAP[$116]; //@line 2152 "parsermodule.c"
        var $118=$117+24; //@line 2152 "parsermodule.c"
        var $119=_validate_terminal($118, 1, __str57); //@line 2152 "parsermodule.c"
        var $120=($119)==0; //@line 2152 "parsermodule.c"
        if ($120) { __label__ = 33; break; } else { __label__ = 29; break; } //@line 2152 "parsermodule.c"
      case 29: // $bb18
        var $121=$tree_addr; //@line 2152 "parsermodule.c"
        var $122=$121+20; //@line 2152 "parsermodule.c"
        var $123=HEAP[$122]; //@line 2152 "parsermodule.c"
        var $124=$123+48; //@line 2152 "parsermodule.c"
        var $125=_validate_or_test($124); //@line 2152 "parsermodule.c"
        var $126=($125)==0; //@line 2152 "parsermodule.c"
        if ($126) { __label__ = 33; break; } else { __label__ = 30; break; } //@line 2152 "parsermodule.c"
      case 30: // $bb19
        var $127=$tree_addr; //@line 2152 "parsermodule.c"
        var $128=$127+20; //@line 2152 "parsermodule.c"
        var $129=HEAP[$128]; //@line 2152 "parsermodule.c"
        var $130=$129+72; //@line 2152 "parsermodule.c"
        var $131=_validate_terminal($130, 1, __str58); //@line 2152 "parsermodule.c"
        var $132=($131)==0; //@line 2152 "parsermodule.c"
        if ($132) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 2152 "parsermodule.c"
      case 31: // $bb20
        var $133=$tree_addr; //@line 2152 "parsermodule.c"
        var $134=$133+20; //@line 2152 "parsermodule.c"
        var $135=HEAP[$134]; //@line 2152 "parsermodule.c"
        var $136=$135+96; //@line 2152 "parsermodule.c"
        var $137=_validate_test($136); //@line 2152 "parsermodule.c"
        var $138=($137)!=0; //@line 2152 "parsermodule.c"
        if ($138) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 2152 "parsermodule.c"
      case 32: // $bb21
        $iftmp_146=1; //@line 2152 "parsermodule.c"
        __label__ = 34; break; //@line 2152 "parsermodule.c"
      case 33: // $bb22
        $iftmp_146=0; //@line 2152 "parsermodule.c"
        __label__ = 34; break; //@line 2152 "parsermodule.c"
      case 34: // $bb23
        var $139=$iftmp_146; //@line 2152 "parsermodule.c"
        $res=$139; //@line 2152 "parsermodule.c"
        __label__ = 35; break; //@line 2152 "parsermodule.c"
      case 35: // $bb24
        var $140=$res; //@line 2158 "parsermodule.c"
        $4=$140; //@line 2158 "parsermodule.c"
        var $141=$4; //@line 2158 "parsermodule.c"
        $retval=$141; //@line 2158 "parsermodule.c"
        var $retval25=$retval; //@line 2158 "parsermodule.c"
        ;
        return $retval25; //@line 2158 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_old_test($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i2_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i3_i;
        var $0;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $1;
        var $tree_addr_i;
        var $retval_i1;
        var $2;
        var $iftmp_191_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $4;
        var $iftmp_147;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $5=$tree_addr; //@line 2164 "parsermodule.c"
        var $6=$5+16; //@line 2164 "parsermodule.c"
        var $7=HEAP[$6]; //@line 2164 "parsermodule.c"
        $nch=$7; //@line 2164 "parsermodule.c"
        var $8=$tree_addr; //@line 2165 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=302;
        var $9=$n_addr_i; //@line 956 "parsermodule.c"
        var $10=$9; //@line 956 "parsermodule.c"
        var $11=HEAP[$10]; //@line 956 "parsermodule.c"
        var $12=($11); //@line 956 "parsermodule.c"
        var $13=$t_addr_i; //@line 956 "parsermodule.c"
        var $14=($12)!=($13); //@line 956 "parsermodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $15=$n_addr_i; //@line 957 "parsermodule.c"
        var $16=$15; //@line 957 "parsermodule.c"
        var $17=HEAP[$16]; //@line 957 "parsermodule.c"
        var $18=($17); //@line 957 "parsermodule.c"
        var $19=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $20=$t_addr_i; //@line 957 "parsermodule.c"
        var $21=_PyErr_Format($19, __str49, $20, $18); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $22=$nch; //@line 2165 "parsermodule.c"
        var $23=($22)!=1; //@line 2165 "parsermodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2165 "parsermodule.c"
      case 3: // $bb6_thread
        $iftmp_147=0; //@line 2165 "parsermodule.c"
        $res=0; //@line 2165 "parsermodule.c"
        __label__ = 21; break;
      case 4: // $bb4
        $iftmp_147=1; //@line 2165 "parsermodule.c"
        $res=1; //@line 2165 "parsermodule.c"
        var $24=$tree_addr; //@line 2167 "parsermodule.c"
        var $25=$24+20; //@line 2167 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2167 "parsermodule.c"
        var $27=$26; //@line 2167 "parsermodule.c"
        var $28=$27; //@line 2167 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2167 "parsermodule.c"
        var $30=($29)!=303; //@line 2167 "parsermodule.c"
        if ($30) { __label__ = 19; break; } else { __label__ = 5; break; } //@line 2167 "parsermodule.c"
      case 5: // $bb5
        var $31=$tree_addr; //@line 2168 "parsermodule.c"
        var $32=$31+20; //@line 2168 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2168 "parsermodule.c"
        var $34=$33; //@line 2168 "parsermodule.c"
        $tree_addr_i=$34;
        var $35=$tree_addr_i; //@line 2719 "parsermodule.c"
        var $36=$35+16; //@line 2719 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2719 "parsermodule.c"
        $nch_i=$37; //@line 2719 "parsermodule.c"
        var $38=$tree_addr_i; //@line 2724 "parsermodule.c"
        $n_addr_i_i=$38;
        $t_addr_i_i=303;
        var $39=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $40=$39; //@line 956 "parsermodule.c"
        var $41=HEAP[$40]; //@line 956 "parsermodule.c"
        var $42=($41); //@line 956 "parsermodule.c"
        var $43=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $44=($42)!=($43); //@line 956 "parsermodule.c"
        if ($44) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 956 "parsermodule.c"
      case 6: // $validate_ntype_exit_thread_i
        var $45=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $46=$45; //@line 957 "parsermodule.c"
        var $47=HEAP[$46]; //@line 957 "parsermodule.c"
        var $48=($47); //@line 957 "parsermodule.c"
        var $49=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $50=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $51=_PyErr_Format($49, __str49, $50, $48); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 13; break;
      case 7: // $bb_i2
        $1=1; //@line 961 "parsermodule.c"
        $retval_i_i=1; //@line 959 "parsermodule.c"
        var $52=$nch_i; //@line 2724 "parsermodule.c"
        var $53=($52)==3; //@line 2724 "parsermodule.c"
        var $54=$nch_i; //@line 2724 "parsermodule.c"
        var $55=($54)==4; //@line 2724 "parsermodule.c"
        var $or_cond_i=($53) | ($55);
        if ($or_cond_i) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2724 "parsermodule.c"
      case 8: // $bb2_i
        var $56=$tree_addr_i; //@line 2724 "parsermodule.c"
        var $57=$56+20; //@line 2724 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2724 "parsermodule.c"
        var $59=$58; //@line 2724 "parsermodule.c"
        var $60=_validate_terminal($59, 1, __str156); //@line 2724 "parsermodule.c"
        var $61=($60)==0; //@line 2724 "parsermodule.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 2724 "parsermodule.c"
      case 9: // $bb3_i
        var $62=$tree_addr_i; //@line 2724 "parsermodule.c"
        var $63=$62+20; //@line 2724 "parsermodule.c"
        var $64=HEAP[$63]; //@line 2724 "parsermodule.c"
        var $65=$nch_i; //@line 2724 "parsermodule.c"
        var $66=($65) - 2; //@line 2724 "parsermodule.c"
        var $67=$64+24*$66; //@line 2724 "parsermodule.c"
        var $68=_validate_terminal($67, 11, __str54); //@line 2724 "parsermodule.c"
        var $69=($68)==0; //@line 2724 "parsermodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 2724 "parsermodule.c"
      case 10: // $bb4_i
        var $70=$tree_addr_i; //@line 2724 "parsermodule.c"
        var $71=$70+20; //@line 2724 "parsermodule.c"
        var $72=HEAP[$71]; //@line 2724 "parsermodule.c"
        var $73=$nch_i; //@line 2724 "parsermodule.c"
        var $74=($73) - 1; //@line 2724 "parsermodule.c"
        var $75=$72+24*$74; //@line 2724 "parsermodule.c"
        var $76=_validate_test($75); //@line 2724 "parsermodule.c"
        var $77=($76)==0; //@line 2724 "parsermodule.c"
        if ($77) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 2724 "parsermodule.c"
      case 11: // $bb8_i
        $iftmp_191_i=1; //@line 2724 "parsermodule.c"
        $res_i=1; //@line 2724 "parsermodule.c"
        var $78=$nch_i; //@line 2726 "parsermodule.c"
        var $79=($78)!=4; //@line 2726 "parsermodule.c"
        if ($79) { __label__ = 18; break; } else { __label__ = 12; break; } //@line 2726 "parsermodule.c"
      case 12: // $bb9_i
        var $80=$tree_addr_i; //@line 2727 "parsermodule.c"
        var $81=$80+20; //@line 2727 "parsermodule.c"
        var $82=HEAP[$81]; //@line 2727 "parsermodule.c"
        var $83=$82+24; //@line 2727 "parsermodule.c"
        var $84=_validate_varargslist($83); //@line 2727 "parsermodule.c"
        $res_i=$84; //@line 2727 "parsermodule.c"
        __label__ = 18; break; //@line 2727 "parsermodule.c"
      case 13: // $bb11_i
        $iftmp_191_i=0; //@line 2724 "parsermodule.c"
        $res_i=0; //@line 2724 "parsermodule.c"
        var $85=_PyErr_Occurred(); //@line 2728 "parsermodule.c"
        var $86=($85)==0; //@line 2728 "parsermodule.c"
        if ($86) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 2728 "parsermodule.c"
      case 14: // $bb12_i
        var $87=$tree_addr_i; //@line 2729 "parsermodule.c"
        $n_addr_i2_i=$87;
        $num_addr_i_i=3;
        $name_addr_i_i=__str158;
        var $88=$n_addr_i2_i; //@line 975 "parsermodule.c"
        var $89=$88+16; //@line 975 "parsermodule.c"
        var $90=HEAP[$89]; //@line 975 "parsermodule.c"
        var $91=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $92=($90)!=($91); //@line 975 "parsermodule.c"
        if ($92) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 975 "parsermodule.c"
      case 15: // $bb_i4_i
        var $93=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $94=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $95=_PyErr_Format($93, __str50, $94); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 17; break; //@line 978 "parsermodule.c"
      case 16: // $bb1_i5_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 17; break; //@line 980 "parsermodule.c"
      case 17: // $validate_numnodes_exit_i
        var $96=$0; //@line 978 "parsermodule.c"
        $retval_i3_i=$96; //@line 978 "parsermodule.c"
        __label__ = 18; break; //@line 2729 "parsermodule.c"
      case 18: // $validate_old_lambdef_exit
        var $97=$res_i; //@line 2731 "parsermodule.c"
        $2=$97; //@line 2731 "parsermodule.c"
        var $98=$2; //@line 2731 "parsermodule.c"
        $retval_i1=$98; //@line 2731 "parsermodule.c"
        var $retval14_i=$retval_i1; //@line 2731 "parsermodule.c"
        $res=$retval14_i; //@line 2168 "parsermodule.c"
        __label__ = 21; break; //@line 2168 "parsermodule.c"
      case 19: // $bb6
        var $_pr=$res;
        var $99=($_pr)!=0; //@line 2169 "parsermodule.c"
        if ($99) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2169 "parsermodule.c"
      case 20: // $bb7
        var $100=$tree_addr; //@line 2170 "parsermodule.c"
        var $101=$100+20; //@line 2170 "parsermodule.c"
        var $102=HEAP[$101]; //@line 2170 "parsermodule.c"
        var $103=$102; //@line 2170 "parsermodule.c"
        var $104=_validate_or_test($103); //@line 2170 "parsermodule.c"
        $res=$104; //@line 2170 "parsermodule.c"
        __label__ = 21; break; //@line 2170 "parsermodule.c"
      case 21: // $bb8
        var $105=$res; //@line 2172 "parsermodule.c"
        $4=$105; //@line 2172 "parsermodule.c"
        var $106=$4; //@line 2172 "parsermodule.c"
        $retval=$106; //@line 2172 "parsermodule.c"
        var $retval9=$retval; //@line 2172 "parsermodule.c"
        ;
        return $retval9; //@line 2172 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_or_test($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_149;
        var $iftmp_148;
        var $nch;
        var $res;
        var $pos;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2178 "parsermodule.c"
        var $3=$2+16; //@line 2178 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2178 "parsermodule.c"
        $nch=$4; //@line 2178 "parsermodule.c"
        var $5=$tree_addr; //@line 2179 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=305;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2179 "parsermodule.c"
        var $20=($19) & 1; //@line 2179 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2179 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2179 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2179 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2179 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2179 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2179 "parsermodule.c"
      case 3: // $bb6
        $iftmp_148=0; //@line 2179 "parsermodule.c"
        $res=0; //@line 2179 "parsermodule.c"
        __label__ = 12; break;
      case 4: // $bb7
        $iftmp_148=1; //@line 2179 "parsermodule.c"
        $res=1; //@line 2179 "parsermodule.c"
        var $22=$tree_addr; //@line 2183 "parsermodule.c"
        var $23=$22+20; //@line 2183 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2183 "parsermodule.c"
        var $25=$24; //@line 2183 "parsermodule.c"
        var $26=_validate_and_test($25); //@line 2183 "parsermodule.c"
        $res=$26; //@line 2183 "parsermodule.c"
        $pos=1; //@line 2184 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 10; break; //@line 2184 "parsermodule.c"
      case 5: // $bb8
        var $27=$tree_addr; //@line 2185 "parsermodule.c"
        var $28=$27+20; //@line 2185 "parsermodule.c"
        var $29=HEAP[$28]; //@line 2185 "parsermodule.c"
        var $30=$pos; //@line 2185 "parsermodule.c"
        var $31=$29+24*$30; //@line 2185 "parsermodule.c"
        var $32=_validate_terminal($31, 1, __str135); //@line 2185 "parsermodule.c"
        var $33=($32)==0; //@line 2185 "parsermodule.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2185 "parsermodule.c"
      case 6: // $bb9
        var $34=$tree_addr; //@line 2185 "parsermodule.c"
        var $35=$34+20; //@line 2185 "parsermodule.c"
        var $36=HEAP[$35]; //@line 2185 "parsermodule.c"
        var $37=$pos; //@line 2185 "parsermodule.c"
        var $38=($37) + 1; //@line 2185 "parsermodule.c"
        var $39=$36+24*$38; //@line 2185 "parsermodule.c"
        var $40=_validate_and_test($39); //@line 2185 "parsermodule.c"
        var $41=($40)==0; //@line 2185 "parsermodule.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2185 "parsermodule.c"
      case 7: // $bb10
        $iftmp_149=1; //@line 2185 "parsermodule.c"
        __label__ = 9; break; //@line 2185 "parsermodule.c"
      case 8: // $bb11
        $iftmp_149=0; //@line 2185 "parsermodule.c"
        __label__ = 9; break; //@line 2185 "parsermodule.c"
      case 9: // $bb12
        var $42=$iftmp_149; //@line 2185 "parsermodule.c"
        $res=$42; //@line 2185 "parsermodule.c"
        var $43=$pos; //@line 2184 "parsermodule.c"
        var $44=($43) + 2; //@line 2184 "parsermodule.c"
        $pos=$44; //@line 2184 "parsermodule.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 2184 "parsermodule.c"
      case 10: // $bb13
        var $45=__lastLabel__ == 9 ? $42 : ($26);
        var $46=($45)==0; //@line 2184 "parsermodule.c"
        if ($46) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 2184 "parsermodule.c"
      case 11: // $bb14
        var $47=$pos; //@line 2184 "parsermodule.c"
        var $48=$nch; //@line 2184 "parsermodule.c"
        var $49=($47) < ($48); //@line 2184 "parsermodule.c"
        if ($49) { __label__ = 5; break; } else { __label__ = 12; break; } //@line 2184 "parsermodule.c"
      case 12: // $bb15
        var $50=$res; //@line 2188 "parsermodule.c"
        $1=$50; //@line 2188 "parsermodule.c"
        var $51=$1; //@line 2188 "parsermodule.c"
        $retval=$51; //@line 2188 "parsermodule.c"
        var $retval16=$retval; //@line 2188 "parsermodule.c"
        ;
        return $retval16; //@line 2188 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_test($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_151;
        var $iftmp_150;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2196 "parsermodule.c"
        var $3=$2+16; //@line 2196 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2196 "parsermodule.c"
        $nch=$4; //@line 2196 "parsermodule.c"
        var $5=$tree_addr; //@line 2199 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=306;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2199 "parsermodule.c"
        var $20=($19) & 1; //@line 2199 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2199 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2199 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2199 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2199 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2199 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2199 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 2199 "parsermodule.c"
        var $23=$22+20; //@line 2199 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2199 "parsermodule.c"
        var $25=$24; //@line 2199 "parsermodule.c"
        var $26=_validate_not_test($25); //@line 2199 "parsermodule.c"
        var $27=($26)==0; //@line 2199 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2199 "parsermodule.c"
      case 4: // $bb5
        $iftmp_150=1; //@line 2199 "parsermodule.c"
        __label__ = 6; break; //@line 2199 "parsermodule.c"
      case 5: // $bb6
        $iftmp_150=0; //@line 2199 "parsermodule.c"
        __label__ = 6; break; //@line 2199 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_150; //@line 2199 "parsermodule.c"
        $res=$28; //@line 2199 "parsermodule.c"
        $pos=1; //@line 2201 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 2201 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 2202 "parsermodule.c"
        var $30=$29+20; //@line 2202 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2202 "parsermodule.c"
        var $32=$pos; //@line 2202 "parsermodule.c"
        var $33=$31+24*$32; //@line 2202 "parsermodule.c"
        var $34=_validate_terminal($33, 1, __str136); //@line 2202 "parsermodule.c"
        var $35=($34)==0; //@line 2202 "parsermodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2202 "parsermodule.c"
      case 8: // $bb9
        var $36=$tree_addr; //@line 2202 "parsermodule.c"
        var $37=$36+20; //@line 2202 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2202 "parsermodule.c"
        var $39=$38; //@line 2202 "parsermodule.c"
        var $40=_validate_not_test($39); //@line 2202 "parsermodule.c"
        var $41=($40)==0; //@line 2202 "parsermodule.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2202 "parsermodule.c"
      case 9: // $bb10
        $iftmp_151=1; //@line 2202 "parsermodule.c"
        __label__ = 11; break; //@line 2202 "parsermodule.c"
      case 10: // $bb11
        $iftmp_151=0; //@line 2202 "parsermodule.c"
        __label__ = 11; break; //@line 2202 "parsermodule.c"
      case 11: // $bb12
        var $42=$iftmp_151; //@line 2202 "parsermodule.c"
        $res=$42; //@line 2202 "parsermodule.c"
        var $43=$pos; //@line 2201 "parsermodule.c"
        var $44=($43) + 2; //@line 2201 "parsermodule.c"
        $pos=$44; //@line 2201 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2201 "parsermodule.c"
      case 12: // $bb13
        var $45=__lastLabel__ == 11 ? $42 : ($28);
        var $46=($45)==0; //@line 2201 "parsermodule.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2201 "parsermodule.c"
      case 13: // $bb14
        var $47=$pos; //@line 2201 "parsermodule.c"
        var $48=$nch; //@line 2201 "parsermodule.c"
        var $49=($47) < ($48); //@line 2201 "parsermodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2201 "parsermodule.c"
      case 14: // $bb15
        var $50=$res; //@line 2205 "parsermodule.c"
        $1=$50; //@line 2205 "parsermodule.c"
        var $51=$1; //@line 2205 "parsermodule.c"
        $retval=$51; //@line 2205 "parsermodule.c"
        var $retval16=$retval; //@line 2205 "parsermodule.c"
        ;
        return $retval16; //@line 2205 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_not_test($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_153;
        var $iftmp_152;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2212 "parsermodule.c"
        var $3=$2+16; //@line 2212 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2212 "parsermodule.c"
        $nch=$4; //@line 2212 "parsermodule.c"
        var $5=$tree_addr; //@line 2213 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=307;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2213 "parsermodule.c"
        var $20=($19)==1; //@line 2213 "parsermodule.c"
        var $21=$nch; //@line 2213 "parsermodule.c"
        var $22=($21)==2; //@line 2213 "parsermodule.c"
        var $or_cond=($20) | ($22);
        if ($or_cond) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2213 "parsermodule.c"
      case 3: // $bb4
        $iftmp_152=0; //@line 2213 "parsermodule.c"
        $res=0; //@line 2213 "parsermodule.c"
        __label__ = 12; break;
      case 4: // $bb5
        $iftmp_152=1; //@line 2213 "parsermodule.c"
        $res=1; //@line 2213 "parsermodule.c"
        var $23=$nch; //@line 2216 "parsermodule.c"
        var $24=($23)==2; //@line 2216 "parsermodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 2216 "parsermodule.c"
      case 5: // $bb6
        var $25=$tree_addr; //@line 2217 "parsermodule.c"
        var $26=$25+20; //@line 2217 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2217 "parsermodule.c"
        var $28=$27; //@line 2217 "parsermodule.c"
        var $29=_validate_terminal($28, 1, __str137); //@line 2217 "parsermodule.c"
        var $30=($29)==0; //@line 2217 "parsermodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2217 "parsermodule.c"
      case 6: // $bb7
        var $31=$tree_addr; //@line 2217 "parsermodule.c"
        var $32=$31+20; //@line 2217 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2217 "parsermodule.c"
        var $34=$33+24; //@line 2217 "parsermodule.c"
        var $35=_validate_not_test($34); //@line 2217 "parsermodule.c"
        var $36=($35)==0; //@line 2217 "parsermodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 2217 "parsermodule.c"
      case 7: // $bb8
        $iftmp_153=1; //@line 2217 "parsermodule.c"
        __label__ = 9; break; //@line 2217 "parsermodule.c"
      case 8: // $bb9
        $iftmp_153=0; //@line 2217 "parsermodule.c"
        __label__ = 9; break; //@line 2217 "parsermodule.c"
      case 9: // $bb10
        var $37=$iftmp_153; //@line 2217 "parsermodule.c"
        $res=$37; //@line 2217 "parsermodule.c"
        __label__ = 12; break; //@line 2217 "parsermodule.c"
      case 10: // $bb11
        var $38=$nch; //@line 2219 "parsermodule.c"
        var $39=($38)==1; //@line 2219 "parsermodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2219 "parsermodule.c"
      case 11: // $bb12
        var $40=$tree_addr; //@line 2220 "parsermodule.c"
        var $41=$40+20; //@line 2220 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2220 "parsermodule.c"
        var $43=$42; //@line 2220 "parsermodule.c"
        var $44=_validate_comparison($43); //@line 2220 "parsermodule.c"
        $res=$44; //@line 2220 "parsermodule.c"
        __label__ = 12; break; //@line 2220 "parsermodule.c"
      case 12: // $bb13
        var $45=$res; //@line 2222 "parsermodule.c"
        $1=$45; //@line 2222 "parsermodule.c"
        var $46=$1; //@line 2222 "parsermodule.c"
        $retval=$46; //@line 2222 "parsermodule.c"
        var $retval14=$retval; //@line 2222 "parsermodule.c"
        ;
        return $retval14; //@line 2222 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comparison($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_155;
        var $iftmp_154;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2230 "parsermodule.c"
        var $3=$2+16; //@line 2230 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2230 "parsermodule.c"
        $nch=$4; //@line 2230 "parsermodule.c"
        var $5=$tree_addr; //@line 2233 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=308;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2233 "parsermodule.c"
        var $20=($19) & 1; //@line 2233 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2233 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2233 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2233 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2233 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2233 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2233 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 2233 "parsermodule.c"
        var $23=$22+20; //@line 2233 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2233 "parsermodule.c"
        var $25=$24; //@line 2233 "parsermodule.c"
        var $26=_validate_expr($25); //@line 2233 "parsermodule.c"
        var $27=($26)==0; //@line 2233 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2233 "parsermodule.c"
      case 4: // $bb5
        $iftmp_154=1; //@line 2233 "parsermodule.c"
        __label__ = 6; break; //@line 2233 "parsermodule.c"
      case 5: // $bb6
        $iftmp_154=0; //@line 2233 "parsermodule.c"
        __label__ = 6; break; //@line 2233 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_154; //@line 2233 "parsermodule.c"
        $res=$28; //@line 2233 "parsermodule.c"
        $pos=1; //@line 2235 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 2235 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 2236 "parsermodule.c"
        var $30=$29+20; //@line 2236 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2236 "parsermodule.c"
        var $32=$pos; //@line 2236 "parsermodule.c"
        var $33=$31+24*$32; //@line 2236 "parsermodule.c"
        var $34=_validate_comp_op($33); //@line 2236 "parsermodule.c"
        var $35=($34)==0; //@line 2236 "parsermodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2236 "parsermodule.c"
      case 8: // $bb9
        var $36=$tree_addr; //@line 2236 "parsermodule.c"
        var $37=$36+20; //@line 2236 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2236 "parsermodule.c"
        var $39=$pos; //@line 2236 "parsermodule.c"
        var $40=($39) + 1; //@line 2236 "parsermodule.c"
        var $41=$38+24*$40; //@line 2236 "parsermodule.c"
        var $42=_validate_expr($41); //@line 2236 "parsermodule.c"
        var $43=($42)==0; //@line 2236 "parsermodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2236 "parsermodule.c"
      case 9: // $bb10
        $iftmp_155=1; //@line 2236 "parsermodule.c"
        __label__ = 11; break; //@line 2236 "parsermodule.c"
      case 10: // $bb11
        $iftmp_155=0; //@line 2236 "parsermodule.c"
        __label__ = 11; break; //@line 2236 "parsermodule.c"
      case 11: // $bb12
        var $44=$iftmp_155; //@line 2236 "parsermodule.c"
        $res=$44; //@line 2236 "parsermodule.c"
        var $45=$pos; //@line 2235 "parsermodule.c"
        var $46=($45) + 2; //@line 2235 "parsermodule.c"
        $pos=$46; //@line 2235 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2235 "parsermodule.c"
      case 12: // $bb13
        var $47=__lastLabel__ == 11 ? $44 : ($28);
        var $48=($47)==0; //@line 2235 "parsermodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2235 "parsermodule.c"
      case 13: // $bb14
        var $49=$pos; //@line 2235 "parsermodule.c"
        var $50=$nch; //@line 2235 "parsermodule.c"
        var $51=($49) < ($50); //@line 2235 "parsermodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2235 "parsermodule.c"
      case 14: // $bb15
        var $52=$res; //@line 2239 "parsermodule.c"
        $1=$52; //@line 2239 "parsermodule.c"
        var $53=$1; //@line 2239 "parsermodule.c"
        $retval=$53; //@line 2239 "parsermodule.c"
        var $retval16=$retval; //@line 2239 "parsermodule.c"
        ;
        return $retval16; //@line 2239 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_comp_op($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i20;
        var $n_addr_i13;
        var $t_addr_i14;
        var $retval_i15;
        var $0;
        var $n_addr_i6;
        var $t_addr_i7;
        var $retval_i8;
        var $1;
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $2;
        var $message_addr_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $3;
        var $tree_addr;
        var $retval;
        var $iftmp_158;
        var $iftmp_156;
        var $4;
        var $res;
        var $nch;
        $tree_addr=$tree;
        $res=0; //@line 2246 "parsermodule.c"
        var $5=$tree_addr; //@line 2247 "parsermodule.c"
        var $6=$5+16; //@line 2247 "parsermodule.c"
        var $7=HEAP[$6]; //@line 2247 "parsermodule.c"
        $nch=$7; //@line 2247 "parsermodule.c"
        var $8=$tree_addr; //@line 2249 "parsermodule.c"
        $n_addr_i=$8;
        $t_addr_i=309;
        var $9=$n_addr_i; //@line 956 "parsermodule.c"
        var $10=$9; //@line 956 "parsermodule.c"
        var $11=HEAP[$10]; //@line 956 "parsermodule.c"
        var $12=($11); //@line 956 "parsermodule.c"
        var $13=$t_addr_i; //@line 956 "parsermodule.c"
        var $14=($12)!=($13); //@line 956 "parsermodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $bb
        var $15=$n_addr_i; //@line 957 "parsermodule.c"
        var $16=$15; //@line 957 "parsermodule.c"
        var $17=HEAP[$16]; //@line 957 "parsermodule.c"
        var $18=($17); //@line 957 "parsermodule.c"
        var $19=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $20=$t_addr_i; //@line 957 "parsermodule.c"
        var $21=_PyErr_Format($19, __str49, $20, $18); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        $4=0; //@line 2250 "parsermodule.c"
        __label__ = 24; break; //@line 2250 "parsermodule.c"
      case 2: // $bb1
        $3=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $22=$nch; //@line 2251 "parsermodule.c"
        var $23=($22)==1; //@line 2251 "parsermodule.c"
        var $24=$tree_addr; //@line 2256 "parsermodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2251 "parsermodule.c"
      case 3: // $bb2
        var $25=$24+20; //@line 2256 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2256 "parsermodule.c"
        var $27=$26; //@line 2256 "parsermodule.c"
        $tree_addr=$27; //@line 2256 "parsermodule.c"
        var $28=$tree_addr; //@line 2257 "parsermodule.c"
        var $29=$28; //@line 2257 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2257 "parsermodule.c"
        var $31=($30); //@line 2257 "parsermodule.c"
        if ($31 == 1) {
          __label__ = 5; break;
        }
        else if ($31 == 20) {
          __label__ = 4; break;
        }
        else if ($31 == 21) {
          __label__ = 4; break;
        }
        else if ($31 == 22) {
          __label__ = 4; break;
        }
        else if ($31 == 28) {
          __label__ = 4; break;
        }
        else if ($31 == 29) {
          __label__ = 4; break;
        }
        else if ($31 == 30) {
          __label__ = 4; break;
        }
        else if ($31 == 31) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 4: // $bb3
        $res=1; //@line 2265 "parsermodule.c"
        __label__ = 23; break; //@line 2265 "parsermodule.c"
      case 5: // $bb4
        var $32=$tree_addr; //@line 2268 "parsermodule.c"
        var $33=$32+4; //@line 2268 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2268 "parsermodule.c"
        var $35=_strcmp($34, __str76); //@line 2268 "parsermodule.c"
        var $36=($35)==0; //@line 2268 "parsermodule.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 2268 "parsermodule.c"
      case 6: // $bb5
        var $37=$tree_addr; //@line 2268 "parsermodule.c"
        var $38=$37+4; //@line 2268 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2268 "parsermodule.c"
        var $40=_strcmp($39, __str138); //@line 2268 "parsermodule.c"
        var $41=($40)==0; //@line 2268 "parsermodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2268 "parsermodule.c"
      case 7: // $bb8
        $iftmp_156=1; //@line 2268 "parsermodule.c"
        $res=1; //@line 2268 "parsermodule.c"
        __label__ = 23; break;
      case 8: // $bb9
        $iftmp_156=0; //@line 2268 "parsermodule.c"
        $res=0; //@line 2268 "parsermodule.c"
        var $42=$tree_addr; //@line 2271 "parsermodule.c"
        var $43=$42+4; //@line 2271 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2271 "parsermodule.c"
        var $45=HEAP[_parser_error]; //@line 2271 "parsermodule.c"
        var $46=_PyErr_Format($45, __str139, $44); //@line 2271 "parsermodule.c"
        __label__ = 23; break; //@line 2271 "parsermodule.c"
      case 9: // $bb11
        $message_addr_i=__str140;
        var $47=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $48=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($47, $48); //@line 531 "parsermodule.c"
        __label__ = 23; break; //@line 2276 "parsermodule.c"
      case 10: // $bb13
        $n_addr_i1=$24;
        $num_addr_i=2;
        $name_addr_i=__str141;
        var $49=$n_addr_i1; //@line 975 "parsermodule.c"
        var $50=$49+16; //@line 975 "parsermodule.c"
        var $51=HEAP[$50]; //@line 975 "parsermodule.c"
        var $52=$num_addr_i; //@line 975 "parsermodule.c"
        var $53=($51)!=($52); //@line 975 "parsermodule.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 975 "parsermodule.c"
      case 11: // $validate_numnodes_exit
        var $54=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $55=$name_addr_i; //@line 976 "parsermodule.c"
        var $56=_PyErr_Format($54, __str50, $55); //@line 976 "parsermodule.c"
        $2=0; //@line 978 "parsermodule.c"
        $retval_i2=0; //@line 978 "parsermodule.c"
        $res=0; //@line 2280 "parsermodule.c"
        __label__ = 23; break;
      case 12: // $bb14
        $2=1; //@line 980 "parsermodule.c"
        $retval_i2=1; //@line 978 "parsermodule.c"
        $res=1; //@line 2280 "parsermodule.c"
        var $57=$tree_addr; //@line 2281 "parsermodule.c"
        var $58=$57+20; //@line 2281 "parsermodule.c"
        var $59=HEAP[$58]; //@line 2281 "parsermodule.c"
        var $60=$59; //@line 2281 "parsermodule.c"
        $n_addr_i6=$60;
        $t_addr_i7=1;
        var $61=$n_addr_i6; //@line 956 "parsermodule.c"
        var $62=$61; //@line 956 "parsermodule.c"
        var $63=HEAP[$62]; //@line 956 "parsermodule.c"
        var $64=($63); //@line 956 "parsermodule.c"
        var $65=$t_addr_i7; //@line 956 "parsermodule.c"
        var $66=($64)!=($65); //@line 956 "parsermodule.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 956 "parsermodule.c"
      case 13: // $validate_ntype_exit12_thread
        var $67=$n_addr_i6; //@line 957 "parsermodule.c"
        var $68=$67; //@line 957 "parsermodule.c"
        var $69=HEAP[$68]; //@line 957 "parsermodule.c"
        var $70=($69); //@line 957 "parsermodule.c"
        var $71=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $72=$t_addr_i7; //@line 957 "parsermodule.c"
        var $73=_PyErr_Format($71, __str49, $72, $70); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i8=0; //@line 959 "parsermodule.c"
        __label__ = 21; break;
      case 14: // $bb15
        $1=1; //@line 961 "parsermodule.c"
        $retval_i8=1; //@line 959 "parsermodule.c"
        var $74=$tree_addr; //@line 2281 "parsermodule.c"
        var $75=$74+20; //@line 2281 "parsermodule.c"
        var $76=HEAP[$75]; //@line 2281 "parsermodule.c"
        var $77=$76+24; //@line 2281 "parsermodule.c"
        $n_addr_i13=$77;
        $t_addr_i14=1;
        var $78=$n_addr_i13; //@line 956 "parsermodule.c"
        var $79=$78; //@line 956 "parsermodule.c"
        var $80=HEAP[$79]; //@line 956 "parsermodule.c"
        var $81=($80); //@line 956 "parsermodule.c"
        var $82=$t_addr_i14; //@line 956 "parsermodule.c"
        var $83=($81)!=($82); //@line 956 "parsermodule.c"
        if ($83) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 956 "parsermodule.c"
      case 15: // $validate_ntype_exit19_thread
        var $84=$n_addr_i13; //@line 957 "parsermodule.c"
        var $85=$84; //@line 957 "parsermodule.c"
        var $86=HEAP[$85]; //@line 957 "parsermodule.c"
        var $87=($86); //@line 957 "parsermodule.c"
        var $88=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $89=$t_addr_i14; //@line 957 "parsermodule.c"
        var $90=_PyErr_Format($88, __str49, $89, $87); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i15=0; //@line 959 "parsermodule.c"
        __label__ = 21; break;
      case 16: // $bb16
        $0=1; //@line 961 "parsermodule.c"
        $retval_i15=1; //@line 959 "parsermodule.c"
        var $91=$tree_addr; //@line 2281 "parsermodule.c"
        var $92=$91+20; //@line 2281 "parsermodule.c"
        var $93=HEAP[$92]; //@line 2281 "parsermodule.c"
        var $94=$93; //@line 2281 "parsermodule.c"
        var $95=$94+4; //@line 2281 "parsermodule.c"
        var $96=HEAP[$95]; //@line 2281 "parsermodule.c"
        var $97=_strcmp($96, __str138); //@line 2281 "parsermodule.c"
        var $98=($97)!=0; //@line 2281 "parsermodule.c"
        if ($98) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 2281 "parsermodule.c"
      case 17: // $bb17
        var $99=$tree_addr; //@line 2281 "parsermodule.c"
        var $100=$99+20; //@line 2281 "parsermodule.c"
        var $101=HEAP[$100]; //@line 2281 "parsermodule.c"
        var $102=$101+24; //@line 2281 "parsermodule.c"
        var $103=$102+4; //@line 2281 "parsermodule.c"
        var $104=HEAP[$103]; //@line 2281 "parsermodule.c"
        var $105=_strcmp($104, __str137); //@line 2281 "parsermodule.c"
        var $106=($105)==0; //@line 2281 "parsermodule.c"
        if ($106) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 2281 "parsermodule.c"
      case 18: // $bb18
        var $107=$tree_addr; //@line 2281 "parsermodule.c"
        var $108=$107+20; //@line 2281 "parsermodule.c"
        var $109=HEAP[$108]; //@line 2281 "parsermodule.c"
        var $110=$109; //@line 2281 "parsermodule.c"
        var $111=$110+4; //@line 2281 "parsermodule.c"
        var $112=HEAP[$111]; //@line 2281 "parsermodule.c"
        var $113=_strcmp($112, __str137); //@line 2281 "parsermodule.c"
        var $114=($113)!=0; //@line 2281 "parsermodule.c"
        if ($114) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 2281 "parsermodule.c"
      case 19: // $bb19
        var $115=$tree_addr; //@line 2281 "parsermodule.c"
        var $116=$115+20; //@line 2281 "parsermodule.c"
        var $117=HEAP[$116]; //@line 2281 "parsermodule.c"
        var $118=$117+24; //@line 2281 "parsermodule.c"
        var $119=$118+4; //@line 2281 "parsermodule.c"
        var $120=HEAP[$119]; //@line 2281 "parsermodule.c"
        var $121=_strcmp($120, __str76); //@line 2281 "parsermodule.c"
        var $122=($121)==0; //@line 2281 "parsermodule.c"
        if ($122) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2281 "parsermodule.c"
      case 20: // $bb22
        $iftmp_158=1; //@line 2281 "parsermodule.c"
        $res=1; //@line 2281 "parsermodule.c"
        __label__ = 23; break;
      case 21: // $bb23
        $iftmp_158=0; //@line 2281 "parsermodule.c"
        $res=0; //@line 2281 "parsermodule.c"
        var $123=_PyErr_Occurred(); //@line 2287 "parsermodule.c"
        var $124=($123)==0; //@line 2287 "parsermodule.c"
        if ($124) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2287 "parsermodule.c"
      case 22: // $bb24
        $message_addr_i20=__str142;
        var $125=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $126=$message_addr_i20; //@line 531 "parsermodule.c"
        _PyErr_SetString($125, $126); //@line 531 "parsermodule.c"
        __label__ = 23; break; //@line 2288 "parsermodule.c"
      case 23: // $bb25
        var $127=$res; //@line 2290 "parsermodule.c"
        $4=$127; //@line 2290 "parsermodule.c"
        __label__ = 24; break; //@line 2290 "parsermodule.c"
      case 24: // $bb26
        var $128=$4; //@line 2250 "parsermodule.c"
        $retval=$128; //@line 2250 "parsermodule.c"
        var $retval27=$retval; //@line 2250 "parsermodule.c"
        ;
        return $retval27; //@line 2250 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_160;
        var $iftmp_159;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2298 "parsermodule.c"
        var $3=$2+16; //@line 2298 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2298 "parsermodule.c"
        $nch=$4; //@line 2298 "parsermodule.c"
        var $5=$tree_addr; //@line 2301 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=310;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2301 "parsermodule.c"
        var $20=($19) & 1; //@line 2301 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2301 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2301 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2301 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2301 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2301 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2301 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 2301 "parsermodule.c"
        var $23=$22+20; //@line 2301 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2301 "parsermodule.c"
        var $25=$24; //@line 2301 "parsermodule.c"
        var $26=_validate_xor_expr($25); //@line 2301 "parsermodule.c"
        var $27=($26)==0; //@line 2301 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2301 "parsermodule.c"
      case 4: // $bb5
        $iftmp_159=1; //@line 2301 "parsermodule.c"
        __label__ = 6; break; //@line 2301 "parsermodule.c"
      case 5: // $bb6
        $iftmp_159=0; //@line 2301 "parsermodule.c"
        __label__ = 6; break; //@line 2301 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_159; //@line 2301 "parsermodule.c"
        $res=$28; //@line 2301 "parsermodule.c"
        $j=2; //@line 2303 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 2303 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 2304 "parsermodule.c"
        var $30=$29+20; //@line 2304 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2304 "parsermodule.c"
        var $32=$j; //@line 2304 "parsermodule.c"
        var $33=$31+24*$32; //@line 2304 "parsermodule.c"
        var $34=_validate_xor_expr($33); //@line 2304 "parsermodule.c"
        var $35=($34)==0; //@line 2304 "parsermodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2304 "parsermodule.c"
      case 8: // $bb9
        var $36=$tree_addr; //@line 2304 "parsermodule.c"
        var $37=$36+20; //@line 2304 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2304 "parsermodule.c"
        var $39=$j; //@line 2304 "parsermodule.c"
        var $40=($39) - 1; //@line 2304 "parsermodule.c"
        var $41=$38+24*$40; //@line 2304 "parsermodule.c"
        var $42=_validate_terminal($41, 18, __str143); //@line 2304 "parsermodule.c"
        var $43=($42)==0; //@line 2304 "parsermodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2304 "parsermodule.c"
      case 9: // $bb10
        $iftmp_160=1; //@line 2304 "parsermodule.c"
        __label__ = 11; break; //@line 2304 "parsermodule.c"
      case 10: // $bb11
        $iftmp_160=0; //@line 2304 "parsermodule.c"
        __label__ = 11; break; //@line 2304 "parsermodule.c"
      case 11: // $bb12
        var $44=$iftmp_160; //@line 2304 "parsermodule.c"
        $res=$44; //@line 2304 "parsermodule.c"
        var $45=$j; //@line 2303 "parsermodule.c"
        var $46=($45) + 2; //@line 2303 "parsermodule.c"
        $j=$46; //@line 2303 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2303 "parsermodule.c"
      case 12: // $bb13
        var $47=__lastLabel__ == 11 ? $44 : ($28);
        var $48=($47)==0; //@line 2303 "parsermodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2303 "parsermodule.c"
      case 13: // $bb14
        var $49=$j; //@line 2303 "parsermodule.c"
        var $50=$nch; //@line 2303 "parsermodule.c"
        var $51=($49) < ($50); //@line 2303 "parsermodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2303 "parsermodule.c"
      case 14: // $bb15
        var $52=$res; //@line 2307 "parsermodule.c"
        $1=$52; //@line 2307 "parsermodule.c"
        var $53=$1; //@line 2307 "parsermodule.c"
        $retval=$53; //@line 2307 "parsermodule.c"
        var $retval16=$retval; //@line 2307 "parsermodule.c"
        ;
        return $retval16; //@line 2307 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_xor_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_162;
        var $iftmp_161;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2315 "parsermodule.c"
        var $3=$2+16; //@line 2315 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2315 "parsermodule.c"
        $nch=$4; //@line 2315 "parsermodule.c"
        var $5=$tree_addr; //@line 2318 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=311;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2318 "parsermodule.c"
        var $20=($19) & 1; //@line 2318 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2318 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2318 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2318 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2318 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2318 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2318 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 2318 "parsermodule.c"
        var $23=$22+20; //@line 2318 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2318 "parsermodule.c"
        var $25=$24; //@line 2318 "parsermodule.c"
        var $26=_validate_and_expr($25); //@line 2318 "parsermodule.c"
        var $27=($26)==0; //@line 2318 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2318 "parsermodule.c"
      case 4: // $bb5
        $iftmp_161=1; //@line 2318 "parsermodule.c"
        __label__ = 6; break; //@line 2318 "parsermodule.c"
      case 5: // $bb6
        $iftmp_161=0; //@line 2318 "parsermodule.c"
        __label__ = 6; break; //@line 2318 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_161; //@line 2318 "parsermodule.c"
        $res=$28; //@line 2318 "parsermodule.c"
        $j=2; //@line 2320 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 2320 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 2321 "parsermodule.c"
        var $30=$29+20; //@line 2321 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2321 "parsermodule.c"
        var $32=$j; //@line 2321 "parsermodule.c"
        var $33=($32) - 1; //@line 2321 "parsermodule.c"
        var $34=$31+24*$33; //@line 2321 "parsermodule.c"
        var $35=_validate_terminal($34, 33, __str144); //@line 2321 "parsermodule.c"
        var $36=($35)==0; //@line 2321 "parsermodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2321 "parsermodule.c"
      case 8: // $bb9
        var $37=$tree_addr; //@line 2321 "parsermodule.c"
        var $38=$37+20; //@line 2321 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2321 "parsermodule.c"
        var $40=$j; //@line 2321 "parsermodule.c"
        var $41=$39+24*$40; //@line 2321 "parsermodule.c"
        var $42=_validate_and_expr($41); //@line 2321 "parsermodule.c"
        var $43=($42)==0; //@line 2321 "parsermodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2321 "parsermodule.c"
      case 9: // $bb10
        $iftmp_162=1; //@line 2321 "parsermodule.c"
        __label__ = 11; break; //@line 2321 "parsermodule.c"
      case 10: // $bb11
        $iftmp_162=0; //@line 2321 "parsermodule.c"
        __label__ = 11; break; //@line 2321 "parsermodule.c"
      case 11: // $bb12
        var $44=$iftmp_162; //@line 2321 "parsermodule.c"
        $res=$44; //@line 2321 "parsermodule.c"
        var $45=$j; //@line 2320 "parsermodule.c"
        var $46=($45) + 2; //@line 2320 "parsermodule.c"
        $j=$46; //@line 2320 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 12; break; //@line 2320 "parsermodule.c"
      case 12: // $bb13
        var $47=__lastLabel__ == 11 ? $44 : ($28);
        var $48=($47)==0; //@line 2320 "parsermodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 2320 "parsermodule.c"
      case 13: // $bb14
        var $49=$j; //@line 2320 "parsermodule.c"
        var $50=$nch; //@line 2320 "parsermodule.c"
        var $51=($49) < ($50); //@line 2320 "parsermodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 2320 "parsermodule.c"
      case 14: // $bb15
        var $52=$res; //@line 2324 "parsermodule.c"
        $1=$52; //@line 2324 "parsermodule.c"
        var $53=$1; //@line 2324 "parsermodule.c"
        $retval=$53; //@line 2324 "parsermodule.c"
        var $retval16=$retval; //@line 2324 "parsermodule.c"
        ;
        return $retval16; //@line 2324 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_and_expr($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i20;
        var $t_addr_i21;
        var $retval_i22;
        var $0;
        var $n_addr_i12;
        var $t_addr_i13;
        var $retval_i14;
        var $1;
        var $tree_addr_i4;
        var $retval_i5;
        var $iftmp_166_i6;
        var $2;
        var $tree_addr_i;
        var $retval_i1;
        var $iftmp_166_i;
        var $3;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $4;
        var $tree_addr;
        var $retval;
        var $5;
        var $iftmp_164;
        var $iftmp_163;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $6=$tree_addr; //@line 2332 "parsermodule.c"
        var $7=$6+16; //@line 2332 "parsermodule.c"
        var $8=HEAP[$7]; //@line 2332 "parsermodule.c"
        $nch=$8; //@line 2332 "parsermodule.c"
        var $9=$tree_addr; //@line 2335 "parsermodule.c"
        $n_addr_i=$9;
        $t_addr_i=312;
        var $10=$n_addr_i; //@line 956 "parsermodule.c"
        var $11=$10; //@line 956 "parsermodule.c"
        var $12=HEAP[$11]; //@line 956 "parsermodule.c"
        var $13=($12); //@line 956 "parsermodule.c"
        var $14=$t_addr_i; //@line 956 "parsermodule.c"
        var $15=($13)!=($14); //@line 956 "parsermodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $16=$n_addr_i; //@line 957 "parsermodule.c"
        var $17=$16; //@line 957 "parsermodule.c"
        var $18=HEAP[$17]; //@line 957 "parsermodule.c"
        var $19=($18); //@line 957 "parsermodule.c"
        var $20=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $21=$t_addr_i; //@line 957 "parsermodule.c"
        var $22=_PyErr_Format($20, __str49, $21, $19); //@line 957 "parsermodule.c"
        $4=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 8; break;
      case 2: // $bb
        $4=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $23=$nch; //@line 2335 "parsermodule.c"
        var $24=($23) & 1; //@line 2335 "parsermodule.c"
        var $25=((($24)) & 255); //@line 2335 "parsermodule.c"
        var $toBool=($25)!=0; //@line 2335 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2335 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2335 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2335 "parsermodule.c"
        if ($toBool3) { __label__ = 8; break; } else { __label__ = 3; break; } //@line 2335 "parsermodule.c"
      case 3: // $bb4
        var $26=$tree_addr; //@line 2335 "parsermodule.c"
        var $27=$26+20; //@line 2335 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2335 "parsermodule.c"
        var $29=$28; //@line 2335 "parsermodule.c"
        $tree_addr_i=$29;
        var $30=$tree_addr_i; //@line 2366 "parsermodule.c"
        $n_addr_i12=$30;
        $t_addr_i13=313;
        var $31=$n_addr_i12; //@line 956 "parsermodule.c"
        var $32=$31; //@line 956 "parsermodule.c"
        var $33=HEAP[$32]; //@line 956 "parsermodule.c"
        var $34=($33); //@line 956 "parsermodule.c"
        var $35=$t_addr_i13; //@line 956 "parsermodule.c"
        var $36=($34)!=($35); //@line 956 "parsermodule.c"
        if ($36) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 956 "parsermodule.c"
      case 4: // $validate_ntype_exit19_thread
        var $37=$n_addr_i12; //@line 957 "parsermodule.c"
        var $38=$37; //@line 957 "parsermodule.c"
        var $39=HEAP[$38]; //@line 957 "parsermodule.c"
        var $40=($39); //@line 957 "parsermodule.c"
        var $41=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $42=$t_addr_i13; //@line 957 "parsermodule.c"
        var $43=_PyErr_Format($41, __str49, $42, $40); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i14=0; //@line 959 "parsermodule.c"
        __label__ = 6; break;
      case 5: // $bb_i2
        $1=1; //@line 961 "parsermodule.c"
        $retval_i14=1; //@line 959 "parsermodule.c"
        var $44=$tree_addr_i; //@line 2366 "parsermodule.c"
        var $45=_validate_chain_two_ops($44, (FUNCTION_TABLE_OFFSET + 18), 34, 35); //@line 2366 "parsermodule.c"
        var $46=($45)==0; //@line 2366 "parsermodule.c"
        if ($46) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2366 "parsermodule.c"
      case 6: // $validate_shift_expr_exit_thread
        $iftmp_166_i=0; //@line 2366 "parsermodule.c"
        $3=0; //@line 2366 "parsermodule.c"
        $retval_i1=0; //@line 2366 "parsermodule.c"
        __label__ = 8; break;
      case 7: // $bb5
        $iftmp_166_i=1; //@line 2366 "parsermodule.c"
        $3=1; //@line 2366 "parsermodule.c"
        $retval_i1=1; //@line 2366 "parsermodule.c"
        $iftmp_163=1; //@line 2335 "parsermodule.c"
        __label__ = 9; break; //@line 2335 "parsermodule.c"
      case 8: // $bb6
        $iftmp_163=0; //@line 2335 "parsermodule.c"
        __label__ = 9; break; //@line 2335 "parsermodule.c"
      case 9: // $bb7
        var $47=$iftmp_163; //@line 2335 "parsermodule.c"
        $res=$47; //@line 2335 "parsermodule.c"
        $pos=1; //@line 2337 "parsermodule.c"
        __lastLabel__ = 9; __label__ = 18; break; //@line 2337 "parsermodule.c"
      case 10: // $bb8
        var $48=$tree_addr; //@line 2338 "parsermodule.c"
        var $49=$48+20; //@line 2338 "parsermodule.c"
        var $50=HEAP[$49]; //@line 2338 "parsermodule.c"
        var $51=$pos; //@line 2338 "parsermodule.c"
        var $52=$50+24*$51; //@line 2338 "parsermodule.c"
        var $53=_validate_terminal($52, 19, __str145); //@line 2338 "parsermodule.c"
        var $54=($53)==0; //@line 2338 "parsermodule.c"
        if ($54) { __label__ = 16; break; } else { __label__ = 11; break; } //@line 2338 "parsermodule.c"
      case 11: // $bb9
        var $55=$tree_addr; //@line 2338 "parsermodule.c"
        var $56=$55+20; //@line 2338 "parsermodule.c"
        var $57=HEAP[$56]; //@line 2338 "parsermodule.c"
        var $58=$pos; //@line 2338 "parsermodule.c"
        var $59=($58) + 1; //@line 2338 "parsermodule.c"
        var $60=$57+24*$59; //@line 2338 "parsermodule.c"
        $tree_addr_i4=$60;
        var $61=$tree_addr_i4; //@line 2366 "parsermodule.c"
        $n_addr_i20=$61;
        $t_addr_i21=313;
        var $62=$n_addr_i20; //@line 956 "parsermodule.c"
        var $63=$62; //@line 956 "parsermodule.c"
        var $64=HEAP[$63]; //@line 956 "parsermodule.c"
        var $65=($64); //@line 956 "parsermodule.c"
        var $66=$t_addr_i21; //@line 956 "parsermodule.c"
        var $67=($65)!=($66); //@line 956 "parsermodule.c"
        if ($67) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 956 "parsermodule.c"
      case 12: // $validate_ntype_exit27_thread
        var $68=$n_addr_i20; //@line 957 "parsermodule.c"
        var $69=$68; //@line 957 "parsermodule.c"
        var $70=HEAP[$69]; //@line 957 "parsermodule.c"
        var $71=($70); //@line 957 "parsermodule.c"
        var $72=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $73=$t_addr_i21; //@line 957 "parsermodule.c"
        var $74=_PyErr_Format($72, __str49, $73, $71); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i22=0; //@line 959 "parsermodule.c"
        __label__ = 14; break;
      case 13: // $bb_i7
        $0=1; //@line 961 "parsermodule.c"
        $retval_i22=1; //@line 959 "parsermodule.c"
        var $75=$tree_addr_i4; //@line 2366 "parsermodule.c"
        var $76=_validate_chain_two_ops($75, (FUNCTION_TABLE_OFFSET + 18), 34, 35); //@line 2366 "parsermodule.c"
        var $77=($76)==0; //@line 2366 "parsermodule.c"
        if ($77) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2366 "parsermodule.c"
      case 14: // $validate_shift_expr_exit11_thread
        $iftmp_166_i6=0; //@line 2366 "parsermodule.c"
        $2=0; //@line 2366 "parsermodule.c"
        $retval_i5=0; //@line 2366 "parsermodule.c"
        __label__ = 16; break;
      case 15: // $bb10
        $iftmp_166_i6=1; //@line 2366 "parsermodule.c"
        $2=1; //@line 2366 "parsermodule.c"
        $retval_i5=1; //@line 2366 "parsermodule.c"
        $iftmp_164=1; //@line 2338 "parsermodule.c"
        __label__ = 17; break; //@line 2338 "parsermodule.c"
      case 16: // $bb11
        $iftmp_164=0; //@line 2338 "parsermodule.c"
        __label__ = 17; break; //@line 2338 "parsermodule.c"
      case 17: // $bb12
        var $78=$iftmp_164; //@line 2338 "parsermodule.c"
        $res=$78; //@line 2338 "parsermodule.c"
        var $79=$pos; //@line 2337 "parsermodule.c"
        var $80=($79) + 2; //@line 2337 "parsermodule.c"
        $pos=$80; //@line 2337 "parsermodule.c"
        __lastLabel__ = 17; __label__ = 18; break; //@line 2337 "parsermodule.c"
      case 18: // $bb13
        var $81=__lastLabel__ == 17 ? $78 : ($47);
        var $82=($81)==0; //@line 2337 "parsermodule.c"
        if ($82) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 2337 "parsermodule.c"
      case 19: // $bb14
        var $83=$pos; //@line 2337 "parsermodule.c"
        var $84=$nch; //@line 2337 "parsermodule.c"
        var $85=($83) < ($84); //@line 2337 "parsermodule.c"
        if ($85) { __label__ = 10; break; } else { __label__ = 20; break; } //@line 2337 "parsermodule.c"
      case 20: // $bb15
        var $86=$res; //@line 2341 "parsermodule.c"
        $5=$86; //@line 2341 "parsermodule.c"
        var $87=$5; //@line 2341 "parsermodule.c"
        $retval=$87; //@line 2341 "parsermodule.c"
        var $retval16=$retval; //@line 2341 "parsermodule.c"
        ;
        return $retval16; //@line 2341 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_chain_two_ops($tree, $termvalid, $op1, $op2) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $termvalid_addr;
        var $op1_addr;
        var $op2_addr;
        var $retval;
        var $1;
        var $iftmp_165;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $termvalid_addr=$termvalid;
        $op1_addr=$op1;
        $op2_addr=$op2;
        $pos=1; //@line 2348 "parsermodule.c"
        var $2=$tree_addr; //@line 2349 "parsermodule.c"
        var $3=$2+16; //@line 2349 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2349 "parsermodule.c"
        $nch=$4; //@line 2349 "parsermodule.c"
        var $5=$nch; //@line 2351 "parsermodule.c"
        var $6=($5) & 1; //@line 2351 "parsermodule.c"
        var $7=((($6)) & 255); //@line 2351 "parsermodule.c"
        var $toBool=($7)!=0; //@line 2351 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2351 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2351 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2351 "parsermodule.c"
        if ($toBool3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2351 "parsermodule.c"
      case 1: // $bb
        var $8=$tree_addr; //@line 2351 "parsermodule.c"
        var $9=$8+20; //@line 2351 "parsermodule.c"
        var $10=HEAP[$9]; //@line 2351 "parsermodule.c"
        var $11=$10; //@line 2351 "parsermodule.c"
        var $12=$termvalid_addr; //@line 2351 "parsermodule.c"
        var $13=FUNCTION_TABLE[$12]($11); //@line 2351 "parsermodule.c"
        var $14=($13)==0; //@line 2351 "parsermodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2351 "parsermodule.c"
      case 2: // $bb4
        $iftmp_165=1; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 3: // $bb5
        $iftmp_165=0; //@line 2351 "parsermodule.c"
        __label__ = 4; break; //@line 2351 "parsermodule.c"
      case 4: // $bb6
        var $15=$iftmp_165; //@line 2351 "parsermodule.c"
        $res=$15; //@line 2351 "parsermodule.c"
        __lastLabel__ = 4; __label__ = 14; break; //@line 2351 "parsermodule.c"
      case 5: // $bb7
        var $16=$tree_addr; //@line 2354 "parsermodule.c"
        var $17=$16+20; //@line 2354 "parsermodule.c"
        var $18=HEAP[$17]; //@line 2354 "parsermodule.c"
        var $19=$pos; //@line 2354 "parsermodule.c"
        var $20=$18+24*$19; //@line 2354 "parsermodule.c"
        var $21=$20; //@line 2354 "parsermodule.c"
        var $22=HEAP[$21]; //@line 2354 "parsermodule.c"
        var $23=($22); //@line 2354 "parsermodule.c"
        var $24=$op1_addr; //@line 2354 "parsermodule.c"
        var $25=($23)!=($24); //@line 2354 "parsermodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 2354 "parsermodule.c"
      case 6: // $bb8
        var $26=$tree_addr; //@line 2355 "parsermodule.c"
        var $27=$26+20; //@line 2355 "parsermodule.c"
        var $28=HEAP[$27]; //@line 2355 "parsermodule.c"
        var $29=$pos; //@line 2355 "parsermodule.c"
        var $30=$28+24*$29; //@line 2355 "parsermodule.c"
        var $31=$op2_addr; //@line 2355 "parsermodule.c"
        $n_addr_i=$30;
        $t_addr_i=$31;
        var $32=$n_addr_i; //@line 956 "parsermodule.c"
        var $33=$32; //@line 956 "parsermodule.c"
        var $34=HEAP[$33]; //@line 956 "parsermodule.c"
        var $35=($34); //@line 956 "parsermodule.c"
        var $36=$t_addr_i; //@line 956 "parsermodule.c"
        var $37=($35)!=($36); //@line 956 "parsermodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 956 "parsermodule.c"
      case 7: // $bb_i
        var $38=$n_addr_i; //@line 957 "parsermodule.c"
        var $39=$38; //@line 957 "parsermodule.c"
        var $40=HEAP[$39]; //@line 957 "parsermodule.c"
        var $41=($40); //@line 957 "parsermodule.c"
        var $42=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $43=$t_addr_i; //@line 957 "parsermodule.c"
        var $44=_PyErr_Format($42, __str49, $43, $41); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        __label__ = 9; break; //@line 959 "parsermodule.c"
      case 8: // $bb1_i
        $0=1; //@line 961 "parsermodule.c"
        __label__ = 9; break; //@line 961 "parsermodule.c"
      case 9: // $validate_ntype_exit
        var $45=$0; //@line 959 "parsermodule.c"
        $retval_i=$45; //@line 959 "parsermodule.c"
        var $retval3_i=$retval_i; //@line 959 "parsermodule.c"
        $res=$retval3_i; //@line 2355 "parsermodule.c"
        __lastLabel__ = 9; __label__ = 11; break; //@line 2355 "parsermodule.c"
      case 10: // $bb9thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb9
        var $46=__lastLabel__ == 10 ? $_pr : ($retval3_i);
        var $47=($46)!=0; //@line 2356 "parsermodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2356 "parsermodule.c"
      case 12: // $bb10
        var $48=$tree_addr; //@line 2357 "parsermodule.c"
        var $49=$48+20; //@line 2357 "parsermodule.c"
        var $50=HEAP[$49]; //@line 2357 "parsermodule.c"
        var $51=$pos; //@line 2357 "parsermodule.c"
        var $52=($51) + 1; //@line 2357 "parsermodule.c"
        var $53=$50+24*$52; //@line 2357 "parsermodule.c"
        var $54=$termvalid_addr; //@line 2357 "parsermodule.c"
        var $55=FUNCTION_TABLE[$54]($53); //@line 2357 "parsermodule.c"
        $res=$55; //@line 2357 "parsermodule.c"
        __label__ = 13; break; //@line 2357 "parsermodule.c"
      case 13: // $bb11
        var $56=$pos; //@line 2353 "parsermodule.c"
        var $57=($56) + 2; //@line 2353 "parsermodule.c"
        $pos=$57; //@line 2353 "parsermodule.c"
        var $_pr1=$res;
        __lastLabel__ = 13; __label__ = 14; break; //@line 2353 "parsermodule.c"
      case 14: // $bb12
        var $58=__lastLabel__ == 13 ? $_pr1 : ($15);
        var $59=($58)==0; //@line 2353 "parsermodule.c"
        if ($59) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 2353 "parsermodule.c"
      case 15: // $bb13
        var $60=$pos; //@line 2353 "parsermodule.c"
        var $61=$nch; //@line 2353 "parsermodule.c"
        var $62=($60) < ($61); //@line 2353 "parsermodule.c"
        if ($62) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 2353 "parsermodule.c"
      case 16: // $bb14
        var $63=$res; //@line 2359 "parsermodule.c"
        $1=$63; //@line 2359 "parsermodule.c"
        var $64=$1; //@line 2359 "parsermodule.c"
        $retval=$64; //@line 2359 "parsermodule.c"
        var $retval15=$retval; //@line 2359 "parsermodule.c"
        ;
        return $retval15; //@line 2359 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arith_expr($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $iftmp_167;
        var $1;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2375 "parsermodule.c"
        $n_addr_i=$2;
        $t_addr_i=314;
        var $3=$n_addr_i; //@line 956 "parsermodule.c"
        var $4=$3; //@line 956 "parsermodule.c"
        var $5=HEAP[$4]; //@line 956 "parsermodule.c"
        var $6=($5); //@line 956 "parsermodule.c"
        var $7=$t_addr_i; //@line 956 "parsermodule.c"
        var $8=($6)!=($7); //@line 956 "parsermodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $9=$n_addr_i; //@line 957 "parsermodule.c"
        var $10=$9; //@line 957 "parsermodule.c"
        var $11=HEAP[$10]; //@line 957 "parsermodule.c"
        var $12=($11); //@line 957 "parsermodule.c"
        var $13=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $14=$t_addr_i; //@line 957 "parsermodule.c"
        var $15=_PyErr_Format($13, __str49, $14, $12); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $16=$tree_addr; //@line 2375 "parsermodule.c"
        var $17=_validate_chain_two_ops($16, (FUNCTION_TABLE_OFFSET + 20), 14, 15); //@line 2375 "parsermodule.c"
        var $18=($17)==0; //@line 2375 "parsermodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2375 "parsermodule.c"
      case 3: // $bb1
        $iftmp_167=1; //@line 2375 "parsermodule.c"
        __label__ = 5; break; //@line 2375 "parsermodule.c"
      case 4: // $bb2
        $iftmp_167=0; //@line 2375 "parsermodule.c"
        __label__ = 5; break; //@line 2375 "parsermodule.c"
      case 5: // $bb3
        var $19=$iftmp_167; //@line 2375 "parsermodule.c"
        $1=$19; //@line 2375 "parsermodule.c"
        var $20=$1; //@line 2375 "parsermodule.c"
        $retval=$20; //@line 2375 "parsermodule.c"
        var $retval4=$retval; //@line 2375 "parsermodule.c"
        ;
        return $retval4; //@line 2375 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_term($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_169;
        var $iftmp_168;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $pos=1; //@line 2383 "parsermodule.c"
        var $2=$tree_addr; //@line 2384 "parsermodule.c"
        var $3=$2+16; //@line 2384 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2384 "parsermodule.c"
        $nch=$4; //@line 2384 "parsermodule.c"
        var $5=$tree_addr; //@line 2387 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=315;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2387 "parsermodule.c"
        var $20=($19) & 1; //@line 2387 "parsermodule.c"
        var $21=((($20)) & 255); //@line 2387 "parsermodule.c"
        var $toBool=($21)!=0; //@line 2387 "parsermodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 2387 "parsermodule.c"
        var $toBoolnot1=($toBoolnot); //@line 2387 "parsermodule.c"
        var $toBool3=($toBoolnot1)!=0; //@line 2387 "parsermodule.c"
        if ($toBool3) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2387 "parsermodule.c"
      case 3: // $bb4
        var $22=$tree_addr; //@line 2387 "parsermodule.c"
        var $23=$22+20; //@line 2387 "parsermodule.c"
        var $24=HEAP[$23]; //@line 2387 "parsermodule.c"
        var $25=$24; //@line 2387 "parsermodule.c"
        var $26=_validate_factor($25); //@line 2387 "parsermodule.c"
        var $27=($26)==0; //@line 2387 "parsermodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2387 "parsermodule.c"
      case 4: // $bb5
        $iftmp_168=1; //@line 2387 "parsermodule.c"
        __label__ = 6; break; //@line 2387 "parsermodule.c"
      case 5: // $bb6
        $iftmp_168=0; //@line 2387 "parsermodule.c"
        __label__ = 6; break; //@line 2387 "parsermodule.c"
      case 6: // $bb7
        var $28=$iftmp_168; //@line 2387 "parsermodule.c"
        $res=$28; //@line 2387 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 15; break; //@line 2387 "parsermodule.c"
      case 7: // $bb8
        var $29=$tree_addr; //@line 2390 "parsermodule.c"
        var $30=$29+20; //@line 2390 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2390 "parsermodule.c"
        var $32=$pos; //@line 2390 "parsermodule.c"
        var $33=$31+24*$32; //@line 2390 "parsermodule.c"
        var $34=$33; //@line 2390 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2390 "parsermodule.c"
        var $36=($35)==16; //@line 2390 "parsermodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 2390 "parsermodule.c"
      case 8: // $bb9
        var $37=$tree_addr; //@line 2390 "parsermodule.c"
        var $38=$37+20; //@line 2390 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2390 "parsermodule.c"
        var $40=$pos; //@line 2390 "parsermodule.c"
        var $41=$39+24*$40; //@line 2390 "parsermodule.c"
        var $42=$41; //@line 2390 "parsermodule.c"
        var $43=HEAP[$42]; //@line 2390 "parsermodule.c"
        var $44=($43)==17; //@line 2390 "parsermodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2390 "parsermodule.c"
      case 9: // $bb10
        var $45=$tree_addr; //@line 2390 "parsermodule.c"
        var $46=$45+20; //@line 2390 "parsermodule.c"
        var $47=HEAP[$46]; //@line 2390 "parsermodule.c"
        var $48=$pos; //@line 2390 "parsermodule.c"
        var $49=$47+24*$48; //@line 2390 "parsermodule.c"
        var $50=$49; //@line 2390 "parsermodule.c"
        var $51=HEAP[$50]; //@line 2390 "parsermodule.c"
        var $52=($51)==48; //@line 2390 "parsermodule.c"
        if ($52) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2390 "parsermodule.c"
      case 10: // $bb11
        var $53=$tree_addr; //@line 2390 "parsermodule.c"
        var $54=$53+20; //@line 2390 "parsermodule.c"
        var $55=HEAP[$54]; //@line 2390 "parsermodule.c"
        var $56=$pos; //@line 2390 "parsermodule.c"
        var $57=$55+24*$56; //@line 2390 "parsermodule.c"
        var $58=$57; //@line 2390 "parsermodule.c"
        var $59=HEAP[$58]; //@line 2390 "parsermodule.c"
        var $60=($59)==24; //@line 2390 "parsermodule.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2390 "parsermodule.c"
      case 11: // $bb12
        var $61=$tree_addr; //@line 2390 "parsermodule.c"
        var $62=$61+20; //@line 2390 "parsermodule.c"
        var $63=HEAP[$62]; //@line 2390 "parsermodule.c"
        var $64=$pos; //@line 2390 "parsermodule.c"
        var $65=($64) + 1; //@line 2390 "parsermodule.c"
        var $66=$63+24*$65; //@line 2390 "parsermodule.c"
        var $67=_validate_factor($66); //@line 2390 "parsermodule.c"
        var $68=($67)==0; //@line 2390 "parsermodule.c"
        if ($68) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2390 "parsermodule.c"
      case 12: // $bb13
        $iftmp_169=1; //@line 2390 "parsermodule.c"
        __label__ = 14; break; //@line 2390 "parsermodule.c"
      case 13: // $bb14
        $iftmp_169=0; //@line 2390 "parsermodule.c"
        __label__ = 14; break; //@line 2390 "parsermodule.c"
      case 14: // $bb15
        var $69=$iftmp_169; //@line 2390 "parsermodule.c"
        $res=$69; //@line 2390 "parsermodule.c"
        var $70=$pos; //@line 2389 "parsermodule.c"
        var $71=($70) + 2; //@line 2389 "parsermodule.c"
        $pos=$71; //@line 2389 "parsermodule.c"
        __lastLabel__ = 14; __label__ = 15; break; //@line 2389 "parsermodule.c"
      case 15: // $bb16
        var $72=__lastLabel__ == 14 ? $69 : ($28);
        var $73=($72)==0; //@line 2389 "parsermodule.c"
        if ($73) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 2389 "parsermodule.c"
      case 16: // $bb17
        var $74=$pos; //@line 2389 "parsermodule.c"
        var $75=$nch; //@line 2389 "parsermodule.c"
        var $76=($74) < ($75); //@line 2389 "parsermodule.c"
        if ($76) { __label__ = 7; break; } else { __label__ = 17; break; } //@line 2389 "parsermodule.c"
      case 17: // $bb18
        var $77=$res; //@line 2396 "parsermodule.c"
        $1=$77; //@line 2396 "parsermodule.c"
        var $78=$1; //@line 2396 "parsermodule.c"
        $retval=$78; //@line 2396 "parsermodule.c"
        var $retval19=$retval; //@line 2396 "parsermodule.c"
        ;
        return $retval19; //@line 2396 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_factor($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_170;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2407 "parsermodule.c"
        var $3=$2+16; //@line 2407 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2407 "parsermodule.c"
        $nch=$4; //@line 2407 "parsermodule.c"
        var $5=$tree_addr; //@line 2415 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=316;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 11; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2415 "parsermodule.c"
        var $20=($19)!=2; //@line 2415 "parsermodule.c"
        if ($20) { __lastLabel__ = 2; __label__ = 8; break; } else { __lastLabel__ = 2; __label__ = 3; break; } //@line 2415 "parsermodule.c"
      case 3: // $bb1
        var $21=$tree_addr; //@line 2415 "parsermodule.c"
        var $22=$21+20; //@line 2415 "parsermodule.c"
        var $23=HEAP[$22]; //@line 2415 "parsermodule.c"
        var $24=$23; //@line 2415 "parsermodule.c"
        var $25=$24; //@line 2415 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2415 "parsermodule.c"
        var $27=($26)==14; //@line 2415 "parsermodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2415 "parsermodule.c"
      case 4: // $bb2
        var $28=$tree_addr; //@line 2415 "parsermodule.c"
        var $29=$28+20; //@line 2415 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2415 "parsermodule.c"
        var $31=$30; //@line 2415 "parsermodule.c"
        var $32=$31; //@line 2415 "parsermodule.c"
        var $33=HEAP[$32]; //@line 2415 "parsermodule.c"
        var $34=($33)==15; //@line 2415 "parsermodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2415 "parsermodule.c"
      case 5: // $bb3
        var $35=$tree_addr; //@line 2415 "parsermodule.c"
        var $36=$35+20; //@line 2415 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2415 "parsermodule.c"
        var $38=$37; //@line 2415 "parsermodule.c"
        var $39=$38; //@line 2415 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2415 "parsermodule.c"
        var $41=($40)==32; //@line 2415 "parsermodule.c"
        if ($41) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2415 "parsermodule.c"
      case 6: // $bb4
        var $42=$tree_addr; //@line 2415 "parsermodule.c"
        var $43=$42+20; //@line 2415 "parsermodule.c"
        var $44=HEAP[$43]; //@line 2415 "parsermodule.c"
        var $45=$44+24; //@line 2415 "parsermodule.c"
        var $46=_validate_factor($45); //@line 2415 "parsermodule.c"
        var $47=($46)!=0; //@line 2415 "parsermodule.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2415 "parsermodule.c"
      case 7: // $bb5thread_pre_split
        var $_pr=$nch;
        __lastLabel__ = 7; __label__ = 8; break;
      case 8: // $bb5
        var $48=__lastLabel__ == 7 ? $_pr : ($19);
        var $49=($48)!=1; //@line 2415 "parsermodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2415 "parsermodule.c"
      case 9: // $bb6
        var $50=$tree_addr; //@line 2415 "parsermodule.c"
        var $51=$50+20; //@line 2415 "parsermodule.c"
        var $52=HEAP[$51]; //@line 2415 "parsermodule.c"
        var $53=$52; //@line 2415 "parsermodule.c"
        var $54=_validate_power($53); //@line 2415 "parsermodule.c"
        var $55=($54)!=0; //@line 2415 "parsermodule.c"
        if ($55) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2415 "parsermodule.c"
      case 10: // $bb7
        $iftmp_170=1; //@line 2415 "parsermodule.c"
        __label__ = 12; break; //@line 2415 "parsermodule.c"
      case 11: // $bb8
        $iftmp_170=0; //@line 2415 "parsermodule.c"
        __label__ = 12; break; //@line 2415 "parsermodule.c"
      case 12: // $bb9
        var $56=$iftmp_170; //@line 2415 "parsermodule.c"
        $res=$56; //@line 2415 "parsermodule.c"
        var $57=$res; //@line 2416 "parsermodule.c"
        $1=$57; //@line 2416 "parsermodule.c"
        var $58=$1; //@line 2416 "parsermodule.c"
        $retval=$58; //@line 2416 "parsermodule.c"
        var $retval10=$retval; //@line 2416 "parsermodule.c"
        ;
        return $retval10; //@line 2416 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_power($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i;
        var $n_addr_i30_i;
        var $num_addr_i31_i;
        var $name_addr_i32_i;
        var $retval_i33_i;
        var $0;
        var $n_addr_i23_i;
        var $t_addr_i24_i;
        var $retval_i25_i;
        var $1;
        var $n_addr_i15_i;
        var $num_addr_i16_i;
        var $name_addr_i17_i;
        var $retval_i18_i;
        var $2;
        var $n_addr_i8_i;
        var $t_addr_i9_i;
        var $retval_i10_i;
        var $3;
        var $tree_addr_i_i;
        var $retval_i7_i;
        var $4;
        var $n_addr_i2_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i3_i;
        var $5;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $6;
        var $tree_addr_i;
        var $retval_i1;
        var $7;
        var $iftmp_199_i;
        var $iftmp_198_i;
        var $iftmp_197_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $8;
        var $tree_addr;
        var $retval;
        var $iftmp_172;
        var $9;
        var $iftmp_171;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        $pos=1; //@line 2427 "parsermodule.c"
        var $10=$tree_addr; //@line 2428 "parsermodule.c"
        var $11=$10+16; //@line 2428 "parsermodule.c"
        var $12=HEAP[$11]; //@line 2428 "parsermodule.c"
        $nch=$12; //@line 2428 "parsermodule.c"
        var $13=$tree_addr; //@line 2430 "parsermodule.c"
        $n_addr_i=$13;
        $t_addr_i=317;
        var $14=$n_addr_i; //@line 956 "parsermodule.c"
        var $15=$14; //@line 956 "parsermodule.c"
        var $16=HEAP[$15]; //@line 956 "parsermodule.c"
        var $17=($16); //@line 956 "parsermodule.c"
        var $18=$t_addr_i; //@line 956 "parsermodule.c"
        var $19=($17)!=($18); //@line 956 "parsermodule.c"
        if ($19) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $20=$n_addr_i; //@line 957 "parsermodule.c"
        var $21=$20; //@line 957 "parsermodule.c"
        var $22=HEAP[$21]; //@line 957 "parsermodule.c"
        var $23=($22); //@line 957 "parsermodule.c"
        var $24=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $25=$t_addr_i; //@line 957 "parsermodule.c"
        var $26=_PyErr_Format($24, __str49, $25, $23); //@line 957 "parsermodule.c"
        $8=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 5; break;
      case 2: // $bb
        $8=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $27=$nch; //@line 2430 "parsermodule.c"
        var $28=($27) <= 0; //@line 2430 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2430 "parsermodule.c"
      case 3: // $bb1
        var $29=$tree_addr; //@line 2430 "parsermodule.c"
        var $30=$29+20; //@line 2430 "parsermodule.c"
        var $31=HEAP[$30]; //@line 2430 "parsermodule.c"
        var $32=$31; //@line 2430 "parsermodule.c"
        var $33=_validate_atom($32); //@line 2430 "parsermodule.c"
        var $34=($33)==0; //@line 2430 "parsermodule.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2430 "parsermodule.c"
      case 4: // $bb2
        $iftmp_171=1; //@line 2430 "parsermodule.c"
        __label__ = 6; break; //@line 2430 "parsermodule.c"
      case 5: // $bb3
        $iftmp_171=0; //@line 2430 "parsermodule.c"
        __label__ = 6; break; //@line 2430 "parsermodule.c"
      case 6: // $bb4
        var $35=$iftmp_171; //@line 2430 "parsermodule.c"
        $res=$35; //@line 2430 "parsermodule.c"
        __lastLabel__ = 6; __label__ = 35; break; //@line 2430 "parsermodule.c"
      case 7: // $bb5
        var $36=$tree_addr; //@line 2433 "parsermodule.c"
        var $37=$36+20; //@line 2433 "parsermodule.c"
        var $38=HEAP[$37]; //@line 2433 "parsermodule.c"
        var $39=$pos; //@line 2433 "parsermodule.c"
        var $40=$38+24*$39; //@line 2433 "parsermodule.c"
        var $41=$pos; //@line 2433 "parsermodule.c"
        var $42=($41) + 1; //@line 2433 "parsermodule.c"
        $pos=$42; //@line 2433 "parsermodule.c"
        $tree_addr_i=$40;
        var $43=$tree_addr_i; //@line 2849 "parsermodule.c"
        var $44=$43+16; //@line 2849 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2849 "parsermodule.c"
        $nch_i=$45; //@line 2849 "parsermodule.c"
        var $46=$tree_addr_i; //@line 2850 "parsermodule.c"
        $n_addr_i_i=$46;
        $t_addr_i_i=322;
        var $47=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $48=$47; //@line 956 "parsermodule.c"
        var $49=HEAP[$48]; //@line 956 "parsermodule.c"
        var $50=($49); //@line 956 "parsermodule.c"
        var $51=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $52=($50)!=($51); //@line 956 "parsermodule.c"
        if ($52) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 956 "parsermodule.c"
      case 8: // $validate_ntype_exit_thread_i
        var $53=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $54=$53; //@line 957 "parsermodule.c"
        var $55=HEAP[$54]; //@line 957 "parsermodule.c"
        var $56=($55); //@line 957 "parsermodule.c"
        var $57=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $58=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $59=_PyErr_Format($57, __str49, $58, $56); //@line 957 "parsermodule.c"
        $6=0; //@line 959 "parsermodule.c"
        $retval_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 30; break;
      case 9: // $bb_i2
        $6=1; //@line 961 "parsermodule.c"
        $retval_i_i=1; //@line 959 "parsermodule.c"
        var $60=$nch_i; //@line 2850 "parsermodule.c"
        var $61=($60)==2; //@line 2850 "parsermodule.c"
        var $62=$nch_i; //@line 2850 "parsermodule.c"
        var $63=($62)==3; //@line 2850 "parsermodule.c"
        var $or_cond_i=($61) | ($63);
        if ($or_cond_i) { __label__ = 10; break; } else { __label__ = 30; break; } //@line 2850 "parsermodule.c"
      case 10: // $bb5_i
        $iftmp_197_i=1; //@line 2850 "parsermodule.c"
        $res_i=1; //@line 2850 "parsermodule.c"
        var $64=$tree_addr_i; //@line 2853 "parsermodule.c"
        var $65=$64+20; //@line 2853 "parsermodule.c"
        var $66=HEAP[$65]; //@line 2853 "parsermodule.c"
        var $67=$66; //@line 2853 "parsermodule.c"
        var $68=$67; //@line 2853 "parsermodule.c"
        var $69=HEAP[$68]; //@line 2853 "parsermodule.c"
        var $70=($69); //@line 2853 "parsermodule.c"
        if ($70 == 7) {
          __label__ = 11; break;
        }
        else if ($70 == 9) {
          __label__ = 14; break;
        }
        else if ($70 == 23) {
          __label__ = 22; break;
        }
        else {
        __label__ = 29; break;
        }
        
      case 11: // $bb6_i
        var $71=$tree_addr_i; //@line 2855 "parsermodule.c"
        var $72=$71+20; //@line 2855 "parsermodule.c"
        var $73=HEAP[$72]; //@line 2855 "parsermodule.c"
        var $74=$nch_i; //@line 2855 "parsermodule.c"
        var $75=($74) - 1; //@line 2855 "parsermodule.c"
        var $76=$73+24*$75; //@line 2855 "parsermodule.c"
        var $77=_validate_terminal($76, 8, __str56); //@line 2855 "parsermodule.c"
        $res_i=$77; //@line 2855 "parsermodule.c"
        var $78=$res_i; //@line 2856 "parsermodule.c"
        var $79=($78)!=0; //@line 2856 "parsermodule.c"
        if ($79) { __label__ = 12; break; } else { __label__ = 34; break; } //@line 2856 "parsermodule.c"
      case 12: // $bb7_i
        var $80=$nch_i; //@line 2856 "parsermodule.c"
        var $81=($80)==3; //@line 2856 "parsermodule.c"
        if ($81) { __label__ = 13; break; } else { __label__ = 34; break; } //@line 2856 "parsermodule.c"
      case 13: // $bb8_i
        var $82=$tree_addr_i; //@line 2857 "parsermodule.c"
        var $83=$82+20; //@line 2857 "parsermodule.c"
        var $84=HEAP[$83]; //@line 2857 "parsermodule.c"
        var $85=$84+24; //@line 2857 "parsermodule.c"
        var $86=_validate_arglist($85); //@line 2857 "parsermodule.c"
        $res_i=$86; //@line 2857 "parsermodule.c"
        __label__ = 34; break; //@line 2857 "parsermodule.c"
      case 14: // $bb10_i
        var $87=$tree_addr_i; //@line 2860 "parsermodule.c"
        $n_addr_i2_i=$87;
        $num_addr_i_i=3;
        $name_addr_i_i=__str166;
        var $88=$n_addr_i2_i; //@line 975 "parsermodule.c"
        var $89=$88+16; //@line 975 "parsermodule.c"
        var $90=HEAP[$89]; //@line 975 "parsermodule.c"
        var $91=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $92=($90)!=($91); //@line 975 "parsermodule.c"
        if ($92) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 975 "parsermodule.c"
      case 15: // $validate_numnodes_exit_thread_i
        var $93=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $94=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $95=_PyErr_Format($93, __str50, $94); //@line 976 "parsermodule.c"
        $5=0; //@line 978 "parsermodule.c"
        $retval_i3_i=0; //@line 978 "parsermodule.c"
        __label__ = 20; break;
      case 16: // $bb11_i
        $5=1; //@line 980 "parsermodule.c"
        $retval_i3_i=1; //@line 978 "parsermodule.c"
        var $96=$tree_addr_i; //@line 2860 "parsermodule.c"
        var $97=$96+20; //@line 2860 "parsermodule.c"
        var $98=HEAP[$97]; //@line 2860 "parsermodule.c"
        var $99=$98+24; //@line 2860 "parsermodule.c"
        $tree_addr_i_i=$99;
        var $100=$tree_addr_i_i; //@line 2887 "parsermodule.c"
        var $101=_validate_repeating_list($100, 323, (FUNCTION_TABLE_OFFSET + 22), __str167); //@line 2887 "parsermodule.c"
        $4=$101; //@line 2887 "parsermodule.c"
        var $102=$4; //@line 2887 "parsermodule.c"
        $retval_i7_i=$102; //@line 2887 "parsermodule.c"
        var $retval1_i_i=$retval_i7_i; //@line 2887 "parsermodule.c"
        var $103=($retval1_i_i)==0; //@line 2860 "parsermodule.c"
        if ($103) { __label__ = 20; break; } else { __label__ = 17; break; } //@line 2860 "parsermodule.c"
      case 17: // $bb12_i
        var $104=$tree_addr_i; //@line 2860 "parsermodule.c"
        var $105=$104+20; //@line 2860 "parsermodule.c"
        var $106=HEAP[$105]; //@line 2860 "parsermodule.c"
        var $107=$106+48; //@line 2860 "parsermodule.c"
        $n_addr_i8_i=$107;
        $t_addr_i9_i=10;
        var $108=$n_addr_i8_i; //@line 956 "parsermodule.c"
        var $109=$108; //@line 956 "parsermodule.c"
        var $110=HEAP[$109]; //@line 956 "parsermodule.c"
        var $111=($110); //@line 956 "parsermodule.c"
        var $112=$t_addr_i9_i; //@line 956 "parsermodule.c"
        var $113=($111)!=($112); //@line 956 "parsermodule.c"
        if ($113) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 956 "parsermodule.c"
      case 18: // $validate_ntype_exit14_thread_i
        var $114=$n_addr_i8_i; //@line 957 "parsermodule.c"
        var $115=$114; //@line 957 "parsermodule.c"
        var $116=HEAP[$115]; //@line 957 "parsermodule.c"
        var $117=($116); //@line 957 "parsermodule.c"
        var $118=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $119=$t_addr_i9_i; //@line 957 "parsermodule.c"
        var $120=_PyErr_Format($118, __str49, $119, $117); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i10_i=0; //@line 959 "parsermodule.c"
        __label__ = 20; break;
      case 19: // $bb13_i
        $3=1; //@line 961 "parsermodule.c"
        $retval_i10_i=1; //@line 959 "parsermodule.c"
        $iftmp_198_i=1; //@line 2860 "parsermodule.c"
        __label__ = 21; break; //@line 2860 "parsermodule.c"
      case 20: // $bb14_i
        $iftmp_198_i=0; //@line 2860 "parsermodule.c"
        __label__ = 21; break; //@line 2860 "parsermodule.c"
      case 21: // $bb15_i
        var $121=$iftmp_198_i; //@line 2860 "parsermodule.c"
        $res_i=$121; //@line 2860 "parsermodule.c"
        __label__ = 34; break; //@line 2860 "parsermodule.c"
      case 22: // $bb16_i
        var $122=$tree_addr_i; //@line 2865 "parsermodule.c"
        $n_addr_i15_i=$122;
        $num_addr_i16_i=2;
        $name_addr_i17_i=__str166;
        var $123=$n_addr_i15_i; //@line 975 "parsermodule.c"
        var $124=$123+16; //@line 975 "parsermodule.c"
        var $125=HEAP[$124]; //@line 975 "parsermodule.c"
        var $126=$num_addr_i16_i; //@line 975 "parsermodule.c"
        var $127=($125)!=($126); //@line 975 "parsermodule.c"
        if ($127) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 975 "parsermodule.c"
      case 23: // $validate_numnodes_exit22_thread_i
        var $128=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $129=$name_addr_i17_i; //@line 976 "parsermodule.c"
        var $130=_PyErr_Format($128, __str50, $129); //@line 976 "parsermodule.c"
        $2=0; //@line 978 "parsermodule.c"
        $retval_i18_i=0; //@line 978 "parsermodule.c"
        __label__ = 27; break;
      case 24: // $bb17_i
        $2=1; //@line 980 "parsermodule.c"
        $retval_i18_i=1; //@line 978 "parsermodule.c"
        var $131=$tree_addr_i; //@line 2865 "parsermodule.c"
        var $132=$131+20; //@line 2865 "parsermodule.c"
        var $133=HEAP[$132]; //@line 2865 "parsermodule.c"
        var $134=$133+24; //@line 2865 "parsermodule.c"
        $n_addr_i23_i=$134;
        $t_addr_i24_i=1;
        var $135=$n_addr_i23_i; //@line 956 "parsermodule.c"
        var $136=$135; //@line 956 "parsermodule.c"
        var $137=HEAP[$136]; //@line 956 "parsermodule.c"
        var $138=($137); //@line 956 "parsermodule.c"
        var $139=$t_addr_i24_i; //@line 956 "parsermodule.c"
        var $140=($138)!=($139); //@line 956 "parsermodule.c"
        if ($140) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 956 "parsermodule.c"
      case 25: // $validate_ntype_exit29_thread_i
        var $141=$n_addr_i23_i; //@line 957 "parsermodule.c"
        var $142=$141; //@line 957 "parsermodule.c"
        var $143=HEAP[$142]; //@line 957 "parsermodule.c"
        var $144=($143); //@line 957 "parsermodule.c"
        var $145=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $146=$t_addr_i24_i; //@line 957 "parsermodule.c"
        var $147=_PyErr_Format($145, __str49, $146, $144); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i25_i=0; //@line 959 "parsermodule.c"
        __label__ = 27; break;
      case 26: // $bb18_i
        $1=1; //@line 961 "parsermodule.c"
        $retval_i25_i=1; //@line 959 "parsermodule.c"
        $iftmp_199_i=1; //@line 2865 "parsermodule.c"
        __label__ = 28; break; //@line 2865 "parsermodule.c"
      case 27: // $bb19_i
        $iftmp_199_i=0; //@line 2865 "parsermodule.c"
        __label__ = 28; break; //@line 2865 "parsermodule.c"
      case 28: // $bb20_i
        var $148=$iftmp_199_i; //@line 2865 "parsermodule.c"
        $res_i=$148; //@line 2865 "parsermodule.c"
        __label__ = 34; break; //@line 2865 "parsermodule.c"
      case 29: // $bb21_i
        $res_i=0; //@line 2869 "parsermodule.c"
        __label__ = 34; break; //@line 2869 "parsermodule.c"
      case 30: // $bb23_i
        $iftmp_197_i=0; //@line 2850 "parsermodule.c"
        $res_i=0; //@line 2850 "parsermodule.c"
        var $149=$tree_addr_i; //@line 2853 "parsermodule.c"
        $n_addr_i30_i=$149;
        $num_addr_i31_i=2;
        $name_addr_i32_i=__str166;
        var $150=$n_addr_i30_i; //@line 975 "parsermodule.c"
        var $151=$150+16; //@line 975 "parsermodule.c"
        var $152=HEAP[$151]; //@line 975 "parsermodule.c"
        var $153=$num_addr_i31_i; //@line 975 "parsermodule.c"
        var $154=($152)!=($153); //@line 975 "parsermodule.c"
        if ($154) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 975 "parsermodule.c"
      case 31: // $bb_i34_i
        var $155=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $156=$name_addr_i32_i; //@line 976 "parsermodule.c"
        var $157=_PyErr_Format($155, __str50, $156); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 33; break; //@line 978 "parsermodule.c"
      case 32: // $bb1_i35_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 33; break; //@line 980 "parsermodule.c"
      case 33: // $validate_numnodes_exit37_i
        var $158=$0; //@line 978 "parsermodule.c"
        $retval_i33_i=$158; //@line 978 "parsermodule.c"
        __label__ = 34; break; //@line 2874 "parsermodule.c"
      case 34: // $validate_trailer_exit
        var $159=$res_i; //@line 2876 "parsermodule.c"
        $7=$159; //@line 2876 "parsermodule.c"
        var $160=$7; //@line 2876 "parsermodule.c"
        $retval_i1=$160; //@line 2876 "parsermodule.c"
        var $retval25_i=$retval_i1; //@line 2876 "parsermodule.c"
        $res=$retval25_i; //@line 2433 "parsermodule.c"
        __lastLabel__ = 34; __label__ = 35; break; //@line 2433 "parsermodule.c"
      case 35: // $bb6
        var $161=__lastLabel__ == 34 ? $retval25_i : ($35);
        var $162=($161)==0; //@line 2432 "parsermodule.c"
        if ($162) { __label__ = 38; break; } else { __label__ = 36; break; } //@line 2432 "parsermodule.c"
      case 36: // $bb7
        var $163=$pos; //@line 2432 "parsermodule.c"
        var $164=$nch; //@line 2432 "parsermodule.c"
        var $165=($163) >= ($164); //@line 2432 "parsermodule.c"
        if ($165) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 2432 "parsermodule.c"
      case 37: // $bb8
        var $166=$tree_addr; //@line 2432 "parsermodule.c"
        var $167=$166+20; //@line 2432 "parsermodule.c"
        var $168=HEAP[$167]; //@line 2432 "parsermodule.c"
        var $169=$pos; //@line 2432 "parsermodule.c"
        var $170=$168+24*$169; //@line 2432 "parsermodule.c"
        var $171=$170; //@line 2432 "parsermodule.c"
        var $172=HEAP[$171]; //@line 2432 "parsermodule.c"
        var $173=($172)==322; //@line 2432 "parsermodule.c"
        if ($173) { __label__ = 7; break; } else { __label__ = 38; break; } //@line 2432 "parsermodule.c"
      case 38: // $bb9
        var $174=$res; //@line 2434 "parsermodule.c"
        var $175=($174)!=0; //@line 2434 "parsermodule.c"
        if ($175) { __label__ = 39; break; } else { __label__ = 50; break; } //@line 2434 "parsermodule.c"
      case 39: // $bb10
        var $176=$pos; //@line 2434 "parsermodule.c"
        var $177=$nch; //@line 2434 "parsermodule.c"
        var $178=($176) < ($177); //@line 2434 "parsermodule.c"
        if ($178) { __label__ = 40; break; } else { __label__ = 50; break; } //@line 2434 "parsermodule.c"
      case 40: // $bb11
        var $179=$nch; //@line 2435 "parsermodule.c"
        var $180=$pos; //@line 2435 "parsermodule.c"
        var $181=($179) - ($180); //@line 2435 "parsermodule.c"
        var $182=($181) & 1; //@line 2435 "parsermodule.c"
        var $183=($182)!=0; //@line 2435 "parsermodule.c"
        if ($183) { __label__ = 41; break; } else { __label__ = 47; break; } //@line 2435 "parsermodule.c"
      case 41: // $bb12
        $message_addr_i=__str146;
        var $184=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $185=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($184, $185); //@line 531 "parsermodule.c"
        $9=0; //@line 2437 "parsermodule.c"
        __label__ = 51; break; //@line 2437 "parsermodule.c"
      case 42: // $bb14
        var $186=$tree_addr; //@line 2440 "parsermodule.c"
        var $187=$186+20; //@line 2440 "parsermodule.c"
        var $188=HEAP[$187]; //@line 2440 "parsermodule.c"
        var $189=$pos; //@line 2440 "parsermodule.c"
        var $190=$188+24*$189; //@line 2440 "parsermodule.c"
        var $191=_validate_terminal($190, 36, __str67); //@line 2440 "parsermodule.c"
        var $192=($191)==0; //@line 2440 "parsermodule.c"
        if ($192) { __label__ = 45; break; } else { __label__ = 43; break; } //@line 2440 "parsermodule.c"
      case 43: // $bb15
        var $193=$tree_addr; //@line 2440 "parsermodule.c"
        var $194=$193+20; //@line 2440 "parsermodule.c"
        var $195=HEAP[$194]; //@line 2440 "parsermodule.c"
        var $196=$pos; //@line 2440 "parsermodule.c"
        var $197=($196) + 1; //@line 2440 "parsermodule.c"
        var $198=$195+24*$197; //@line 2440 "parsermodule.c"
        var $199=_validate_factor($198); //@line 2440 "parsermodule.c"
        var $200=($199)==0; //@line 2440 "parsermodule.c"
        if ($200) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 2440 "parsermodule.c"
      case 44: // $bb16
        $iftmp_172=1; //@line 2440 "parsermodule.c"
        __label__ = 46; break; //@line 2440 "parsermodule.c"
      case 45: // $bb17
        $iftmp_172=0; //@line 2440 "parsermodule.c"
        __label__ = 46; break; //@line 2440 "parsermodule.c"
      case 46: // $bb18
        var $201=$iftmp_172; //@line 2440 "parsermodule.c"
        $res=$201; //@line 2440 "parsermodule.c"
        var $202=$pos; //@line 2439 "parsermodule.c"
        var $203=($202) + 2; //@line 2439 "parsermodule.c"
        $pos=$203; //@line 2439 "parsermodule.c"
        __lastLabel__ = 46; __label__ = 48; break; //@line 2439 "parsermodule.c"
      case 47: // $bb19thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 47; __label__ = 48; break;
      case 48: // $bb19
        var $204=__lastLabel__ == 47 ? $_pr : ($201);
        var $205=($204)==0; //@line 2439 "parsermodule.c"
        if ($205) { __label__ = 50; break; } else { __label__ = 49; break; } //@line 2439 "parsermodule.c"
      case 49: // $bb20
        var $206=$nch; //@line 2439 "parsermodule.c"
        var $207=($206) - 1; //@line 2439 "parsermodule.c"
        var $208=$pos; //@line 2439 "parsermodule.c"
        var $209=($207) > ($208); //@line 2439 "parsermodule.c"
        if ($209) { __label__ = 42; break; } else { __label__ = 50; break; } //@line 2439 "parsermodule.c"
      case 50: // $bb21
        var $210=$res; //@line 2443 "parsermodule.c"
        $9=$210; //@line 2443 "parsermodule.c"
        __label__ = 51; break; //@line 2443 "parsermodule.c"
      case 51: // $bb22
        var $211=$9; //@line 2437 "parsermodule.c"
        $retval=$211; //@line 2437 "parsermodule.c"
        var $retval23=$retval; //@line 2437 "parsermodule.c"
        ;
        return $retval23; //@line 2437 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_atom($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i96;
        var $t_addr_i97;
        var $retval_i98;
        var $0;
        var $n_addr_i88;
        var $t_addr_i89;
        var $retval_i90;
        var $1;
        var $tree_addr_i86;
        var $retval_i87;
        var $2;
        var $message_addr_i1_i60;
        var $message_addr_i_i61;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $3;
        var $tree_addr_i62;
        var $retval_i63;
        var $4;
        var $iftmp_207_i;
        var $iftmp_206_i;
        var $iftmp_205_i;
        var $iftmp_204_i;
        var $iftmp_203_i;
        var $nch_i64;
        var $ok_i65;
        var $i_i66;
        var $check_trailing_comma_i;
        var $n_addr_i52;
        var $t_addr_i53;
        var $retval_i54;
        var $5;
        var $message_addr_i;
        var $n_addr_i44;
        var $t_addr_i45;
        var $retval_i46;
        var $6;
        var $message_addr_i1_i17;
        var $message_addr_i_i18;
        var $tree_addr_i19;
        var $retval_i20;
        var $7;
        var $iftmp_177_i;
        var $nch_i21;
        var $ok_i22;
        var $i_i23;
        var $n_addr_i9;
        var $t_addr_i10;
        var $retval_i11;
        var $8;
        var $message_addr_i1_i;
        var $message_addr_i_i;
        var $tree_addr_i;
        var $retval_i6;
        var $9;
        var $iftmp_178_i;
        var $nch_i;
        var $ok_i;
        var $i_i;
        var $n_addr_i1;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i2;
        var $10;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $11;
        var $tree_addr;
        var $retval;
        var $12;
        var $iftmp_176;
        var $iftmp_175;
        var $iftmp_174;
        var $iftmp_173;
        var $pos;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $13=$tree_addr; //@line 2451 "parsermodule.c"
        var $14=$13+16; //@line 2451 "parsermodule.c"
        var $15=HEAP[$14]; //@line 2451 "parsermodule.c"
        $nch=$15; //@line 2451 "parsermodule.c"
        var $16=$tree_addr; //@line 2452 "parsermodule.c"
        $n_addr_i=$16;
        $t_addr_i=318;
        var $17=$n_addr_i; //@line 956 "parsermodule.c"
        var $18=$17; //@line 956 "parsermodule.c"
        var $19=HEAP[$18]; //@line 956 "parsermodule.c"
        var $20=($19); //@line 956 "parsermodule.c"
        var $21=$t_addr_i; //@line 956 "parsermodule.c"
        var $22=($20)!=($21); //@line 956 "parsermodule.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $bb2_thread104
        var $23=$n_addr_i; //@line 957 "parsermodule.c"
        var $24=$23; //@line 957 "parsermodule.c"
        var $25=HEAP[$24]; //@line 957 "parsermodule.c"
        var $26=($25); //@line 957 "parsermodule.c"
        var $27=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $28=$t_addr_i; //@line 957 "parsermodule.c"
        var $29=_PyErr_Format($27, __str49, $28, $26); //@line 957 "parsermodule.c"
        $11=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        $res=0; //@line 2452 "parsermodule.c"
        __label__ = 148; break;
      case 2: // $bb
        $11=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        $res=1; //@line 2452 "parsermodule.c"
        var $30=$nch; //@line 2454 "parsermodule.c"
        var $31=($30) <= 0; //@line 2454 "parsermodule.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2454 "parsermodule.c"
      case 3: // $bb1
        var $32=$nch; //@line 2455 "parsermodule.c"
        var $33=($32) + 1; //@line 2455 "parsermodule.c"
        var $34=$tree_addr; //@line 2455 "parsermodule.c"
        $n_addr_i1=$34;
        $num_addr_i=$33;
        $name_addr_i=__str147;
        var $35=$n_addr_i1; //@line 975 "parsermodule.c"
        var $36=$35+16; //@line 975 "parsermodule.c"
        var $37=HEAP[$36]; //@line 975 "parsermodule.c"
        var $38=$num_addr_i; //@line 975 "parsermodule.c"
        var $39=($37)!=($38); //@line 975 "parsermodule.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 975 "parsermodule.c"
      case 4: // $bb2_thread105
        $10=1; //@line 980 "parsermodule.c"
        $retval_i2=1; //@line 978 "parsermodule.c"
        $res=1; //@line 2455 "parsermodule.c"
        __label__ = 6; break;
      case 5: // $bb2
        var $40=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $41=$name_addr_i; //@line 976 "parsermodule.c"
        var $42=_PyErr_Format($40, __str50, $41); //@line 976 "parsermodule.c"
        $10=0; //@line 978 "parsermodule.c"
        $retval_i2=0; //@line 978 "parsermodule.c"
        $res=0; //@line 2455 "parsermodule.c"
        __label__ = 148; break;
      case 6: // $bb3
        var $43=$tree_addr; //@line 2457 "parsermodule.c"
        var $44=$43+20; //@line 2457 "parsermodule.c"
        var $45=HEAP[$44]; //@line 2457 "parsermodule.c"
        var $46=$45; //@line 2457 "parsermodule.c"
        var $47=$46; //@line 2457 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2457 "parsermodule.c"
        var $49=($48); //@line 2457 "parsermodule.c"
        if ($49 == 1) {
          __label__ = 139; break;
        }
        else if ($49 == 2) {
          __label__ = 139; break;
        }
        else if ($49 == 3) {
          __label__ = 140; break;
        }
        else if ($49 == 7) {
          __label__ = 7; break;
        }
        else if ($49 == 9) {
          __label__ = 33; break;
        }
        else if ($49 == 25) {
          __label__ = 132; break;
        }
        else if ($49 == 26) {
          __label__ = 66; break;
        }
        else {
        __label__ = 147; break;
        }
        
      case 7: // $bb4
        var $50=$nch; //@line 2459 "parsermodule.c"
        var $51=($50) > 3; //@line 2459 "parsermodule.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 2459 "parsermodule.c"
      case 8: // $bb5
        var $52=$tree_addr; //@line 2459 "parsermodule.c"
        var $53=$52+20; //@line 2459 "parsermodule.c"
        var $54=HEAP[$53]; //@line 2459 "parsermodule.c"
        var $55=$nch; //@line 2459 "parsermodule.c"
        var $56=($55) - 1; //@line 2459 "parsermodule.c"
        var $57=$54+24*$56; //@line 2459 "parsermodule.c"
        var $58=_validate_terminal($57, 8, __str56); //@line 2459 "parsermodule.c"
        var $59=($58)==0; //@line 2459 "parsermodule.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2459 "parsermodule.c"
      case 9: // $bb8
        $iftmp_173=0; //@line 2459 "parsermodule.c"
        $res=0; //@line 2459 "parsermodule.c"
        __label__ = 148; break;
      case 10: // $bb9
        $iftmp_173=1; //@line 2459 "parsermodule.c"
        $res=1; //@line 2459 "parsermodule.c"
        var $60=$nch; //@line 2462 "parsermodule.c"
        var $61=($60)==3; //@line 2462 "parsermodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 148; break; } //@line 2462 "parsermodule.c"
      case 11: // $bb10
        var $62=$tree_addr; //@line 2463 "parsermodule.c"
        var $63=$62+20; //@line 2463 "parsermodule.c"
        var $64=HEAP[$63]; //@line 2463 "parsermodule.c"
        var $65=$64+24; //@line 2463 "parsermodule.c"
        var $66=$65; //@line 2463 "parsermodule.c"
        var $67=HEAP[$66]; //@line 2463 "parsermodule.c"
        var $68=($67)==340; //@line 2463 "parsermodule.c"
        var $69=$tree_addr; //@line 2464 "parsermodule.c"
        var $70=$69+20; //@line 2464 "parsermodule.c"
        var $71=HEAP[$70]; //@line 2464 "parsermodule.c"
        var $72=$71+24; //@line 2464 "parsermodule.c"
        if ($68) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2463 "parsermodule.c"
      case 12: // $bb11
        var $73=_validate_yield_expr($72); //@line 2464 "parsermodule.c"
        $res=$73; //@line 2464 "parsermodule.c"
        __label__ = 148; break; //@line 2464 "parsermodule.c"
      case 13: // $bb12
        $tree_addr_i=$72;
        var $74=$tree_addr_i; //@line 2552 "parsermodule.c"
        var $75=$74+16; //@line 2552 "parsermodule.c"
        var $76=HEAP[$75]; //@line 2552 "parsermodule.c"
        $nch_i=$76; //@line 2552 "parsermodule.c"
        var $77=$nch_i; //@line 2553 "parsermodule.c"
        $ok_i=$77; //@line 2553 "parsermodule.c"
        var $78=$nch_i; //@line 2555 "parsermodule.c"
        var $79=($78)==0; //@line 2555 "parsermodule.c"
        if ($79) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2555 "parsermodule.c"
      case 14: // $bb_i7
        $message_addr_i_i=__str151;
        var $80=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $81=$message_addr_i_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($80, $81); //@line 531 "parsermodule.c"
        __label__ = 16; break; //@line 2556 "parsermodule.c"
      case 15: // $bb1_i8
        var $82=$tree_addr_i; //@line 2558 "parsermodule.c"
        var $83=$82+20; //@line 2558 "parsermodule.c"
        var $84=HEAP[$83]; //@line 2558 "parsermodule.c"
        var $85=$84; //@line 2558 "parsermodule.c"
        var $86=_validate_test($85); //@line 2558 "parsermodule.c"
        $ok_i=$86; //@line 2558 "parsermodule.c"
        __label__ = 16; break; //@line 2558 "parsermodule.c"
      case 16: // $bb2_i
        var $87=$nch_i; //@line 2564 "parsermodule.c"
        var $88=($87)!=2; //@line 2564 "parsermodule.c"
        if ($88) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 2564 "parsermodule.c"
      case 17: // $bb3_i
        var $89=$tree_addr_i; //@line 2564 "parsermodule.c"
        var $90=$89+20; //@line 2564 "parsermodule.c"
        var $91=HEAP[$90]; //@line 2564 "parsermodule.c"
        var $92=$91+24; //@line 2564 "parsermodule.c"
        var $93=$92; //@line 2564 "parsermodule.c"
        var $94=HEAP[$93]; //@line 2564 "parsermodule.c"
        var $95=($94)!=336; //@line 2564 "parsermodule.c"
        if ($95) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 2564 "parsermodule.c"
      case 18: // $bb4_i
        var $96=$tree_addr_i; //@line 2565 "parsermodule.c"
        var $97=$96+20; //@line 2565 "parsermodule.c"
        var $98=HEAP[$97]; //@line 2565 "parsermodule.c"
        var $99=$98+24; //@line 2565 "parsermodule.c"
        var $100=_validate_comp_for($99); //@line 2565 "parsermodule.c"
        $ok_i=$100; //@line 2565 "parsermodule.c"
        __label__ = 32; break; //@line 2565 "parsermodule.c"
      case 19: // $bb5_i
        $i_i=1; //@line 2568 "parsermodule.c"
        var $_pr_i=$ok_i;
        __lastLabel__ = 19; __label__ = 25; break; //@line 2568 "parsermodule.c"
      case 20: // $bb6_i
        var $101=$tree_addr_i; //@line 2570 "parsermodule.c"
        var $102=$101+20; //@line 2570 "parsermodule.c"
        var $103=HEAP[$102]; //@line 2570 "parsermodule.c"
        var $104=$i_i; //@line 2570 "parsermodule.c"
        var $105=$103+24*$104; //@line 2570 "parsermodule.c"
        var $106=_validate_terminal($105, 12, __str52); //@line 2570 "parsermodule.c"
        var $107=($106)==0; //@line 2570 "parsermodule.c"
        if ($107) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 2570 "parsermodule.c"
      case 21: // $bb7_i
        var $108=$tree_addr_i; //@line 2570 "parsermodule.c"
        var $109=$108+20; //@line 2570 "parsermodule.c"
        var $110=HEAP[$109]; //@line 2570 "parsermodule.c"
        var $111=$i_i; //@line 2570 "parsermodule.c"
        var $112=($111) + 1; //@line 2570 "parsermodule.c"
        var $113=$110+24*$112; //@line 2570 "parsermodule.c"
        var $114=_validate_test($113); //@line 2570 "parsermodule.c"
        var $115=($114)==0; //@line 2570 "parsermodule.c"
        if ($115) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 2570 "parsermodule.c"
      case 22: // $bb8_i
        $iftmp_178_i=1; //@line 2570 "parsermodule.c"
        __label__ = 24; break; //@line 2570 "parsermodule.c"
      case 23: // $bb9_i
        $iftmp_178_i=0; //@line 2570 "parsermodule.c"
        __label__ = 24; break; //@line 2570 "parsermodule.c"
      case 24: // $bb10_i
        var $116=$iftmp_178_i; //@line 2570 "parsermodule.c"
        $ok_i=$116; //@line 2570 "parsermodule.c"
        var $117=$i_i; //@line 2572 "parsermodule.c"
        var $118=($117) + 2; //@line 2572 "parsermodule.c"
        $i_i=$118; //@line 2572 "parsermodule.c"
        __lastLabel__ = 24; __label__ = 25; break; //@line 2572 "parsermodule.c"
      case 25: // $bb11_i
        var $119=__lastLabel__ == 24 ? $116 : ($_pr_i);
        var $120=($119)==0; //@line 2569 "parsermodule.c"
        if ($120) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 2569 "parsermodule.c"
      case 26: // $bb12_i
        var $121=$nch_i; //@line 2569 "parsermodule.c"
        var $122=$i_i; //@line 2569 "parsermodule.c"
        var $123=($121) - ($122); //@line 2569 "parsermodule.c"
        var $124=($123) > 1; //@line 2569 "parsermodule.c"
        if ($124) { __label__ = 20; break; } else { __label__ = 27; break; } //@line 2569 "parsermodule.c"
      case 27: // $bb13_i
        var $125=$ok_i; //@line 2574 "parsermodule.c"
        var $126=($125)==0; //@line 2574 "parsermodule.c"
        if ($126) { __label__ = 30; break; } else { __label__ = 28; break; } //@line 2574 "parsermodule.c"
      case 28: // $bb14_i
        var $127=$nch_i; //@line 2574 "parsermodule.c"
        var $128=($127) - 1; //@line 2574 "parsermodule.c"
        var $129=$i_i; //@line 2574 "parsermodule.c"
        var $130=($128)!=($129); //@line 2574 "parsermodule.c"
        if ($130) { __label__ = 30; break; } else { __label__ = 29; break; } //@line 2574 "parsermodule.c"
      case 29: // $bb15_i
        var $131=$tree_addr_i; //@line 2575 "parsermodule.c"
        var $132=$131+20; //@line 2575 "parsermodule.c"
        var $133=HEAP[$132]; //@line 2575 "parsermodule.c"
        var $134=$i_i; //@line 2575 "parsermodule.c"
        var $135=$133+24*$134; //@line 2575 "parsermodule.c"
        var $136=_validate_terminal($135, 12, __str52); //@line 2575 "parsermodule.c"
        $ok_i=$136; //@line 2575 "parsermodule.c"
        __label__ = 32; break; //@line 2575 "parsermodule.c"
      case 30: // $bb16_i
        var $137=$i_i; //@line 2576 "parsermodule.c"
        var $138=$nch_i; //@line 2576 "parsermodule.c"
        var $139=($137)!=($138); //@line 2576 "parsermodule.c"
        if ($139) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 2576 "parsermodule.c"
      case 31: // $bb17_i
        $ok_i=0; //@line 2577 "parsermodule.c"
        $message_addr_i1_i=__str152;
        var $140=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $141=$message_addr_i1_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($140, $141); //@line 531 "parsermodule.c"
        __label__ = 32; break; //@line 2578 "parsermodule.c"
      case 32: // $validate_testlist_comp_exit
        var $142=$ok_i; //@line 2581 "parsermodule.c"
        $9=$142; //@line 2581 "parsermodule.c"
        var $143=$9; //@line 2581 "parsermodule.c"
        $retval_i6=$143; //@line 2581 "parsermodule.c"
        var $retval19_i=$retval_i6; //@line 2581 "parsermodule.c"
        $res=$retval19_i; //@line 2466 "parsermodule.c"
        __label__ = 148; break; //@line 2466 "parsermodule.c"
      case 33: // $bb14
        var $144=$nch; //@line 2470 "parsermodule.c"
        var $145=($144)==2; //@line 2470 "parsermodule.c"
        if ($145) { __label__ = 34; break; } else { __label__ = 38; break; } //@line 2470 "parsermodule.c"
      case 34: // $bb15
        var $146=$tree_addr; //@line 2471 "parsermodule.c"
        var $147=$146+20; //@line 2471 "parsermodule.c"
        var $148=HEAP[$147]; //@line 2471 "parsermodule.c"
        var $149=$148+24; //@line 2471 "parsermodule.c"
        $n_addr_i9=$149;
        $t_addr_i10=10;
        var $150=$n_addr_i9; //@line 956 "parsermodule.c"
        var $151=$150; //@line 956 "parsermodule.c"
        var $152=HEAP[$151]; //@line 956 "parsermodule.c"
        var $153=($152); //@line 956 "parsermodule.c"
        var $154=$t_addr_i10; //@line 956 "parsermodule.c"
        var $155=($153)!=($154); //@line 956 "parsermodule.c"
        if ($155) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 956 "parsermodule.c"
      case 35: // $bb_i12
        var $156=$n_addr_i9; //@line 957 "parsermodule.c"
        var $157=$156; //@line 957 "parsermodule.c"
        var $158=HEAP[$157]; //@line 957 "parsermodule.c"
        var $159=($158); //@line 957 "parsermodule.c"
        var $160=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $161=$t_addr_i10; //@line 957 "parsermodule.c"
        var $162=_PyErr_Format($160, __str49, $161, $159); //@line 957 "parsermodule.c"
        $8=0; //@line 959 "parsermodule.c"
        __label__ = 37; break; //@line 959 "parsermodule.c"
      case 36: // $bb1_i13
        $8=1; //@line 961 "parsermodule.c"
        __label__ = 37; break; //@line 961 "parsermodule.c"
      case 37: // $validate_ntype_exit16
        var $163=$8; //@line 959 "parsermodule.c"
        $retval_i11=$163; //@line 959 "parsermodule.c"
        var $retval3_i14=$retval_i11; //@line 959 "parsermodule.c"
        $res=$retval3_i14; //@line 2471 "parsermodule.c"
        __label__ = 148; break; //@line 2471 "parsermodule.c"
      case 38: // $bb16
        var $164=$nch; //@line 2472 "parsermodule.c"
        var $165=($164)==3; //@line 2472 "parsermodule.c"
        if ($165) { __label__ = 39; break; } else { __label__ = 65; break; } //@line 2472 "parsermodule.c"
      case 39: // $bb17
        var $166=$tree_addr; //@line 2473 "parsermodule.c"
        var $167=$166+20; //@line 2473 "parsermodule.c"
        var $168=HEAP[$167]; //@line 2473 "parsermodule.c"
        var $169=$168+24; //@line 2473 "parsermodule.c"
        $tree_addr_i19=$169;
        var $170=$tree_addr_i19; //@line 2515 "parsermodule.c"
        var $171=$170+16; //@line 2515 "parsermodule.c"
        var $172=HEAP[$171]; //@line 2515 "parsermodule.c"
        $nch_i21=$172; //@line 2515 "parsermodule.c"
        var $173=$nch_i21; //@line 2516 "parsermodule.c"
        $ok_i22=$173; //@line 2516 "parsermodule.c"
        var $174=$nch_i21; //@line 2518 "parsermodule.c"
        var $175=($174)==0; //@line 2518 "parsermodule.c"
        if ($175) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 2518 "parsermodule.c"
      case 40: // $bb_i24
        $message_addr_i_i18=__str149;
        var $176=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $177=$message_addr_i_i18; //@line 531 "parsermodule.c"
        _PyErr_SetString($176, $177); //@line 531 "parsermodule.c"
        __label__ = 42; break; //@line 2519 "parsermodule.c"
      case 41: // $bb1_i25
        var $178=$tree_addr_i19; //@line 2521 "parsermodule.c"
        var $179=$178+20; //@line 2521 "parsermodule.c"
        var $180=HEAP[$179]; //@line 2521 "parsermodule.c"
        var $181=$180; //@line 2521 "parsermodule.c"
        var $182=_validate_test($181); //@line 2521 "parsermodule.c"
        $ok_i22=$182; //@line 2521 "parsermodule.c"
        __label__ = 42; break; //@line 2521 "parsermodule.c"
      case 42: // $bb2_i26
        var $183=$nch_i21; //@line 2526 "parsermodule.c"
        var $184=($183)!=2; //@line 2526 "parsermodule.c"
        if ($184) { __label__ = 45; break; } else { __label__ = 43; break; } //@line 2526 "parsermodule.c"
      case 43: // $bb3_i27
        var $185=$tree_addr_i19; //@line 2526 "parsermodule.c"
        var $186=$185+20; //@line 2526 "parsermodule.c"
        var $187=HEAP[$186]; //@line 2526 "parsermodule.c"
        var $188=$187+24; //@line 2526 "parsermodule.c"
        var $189=$188; //@line 2526 "parsermodule.c"
        var $190=HEAP[$189]; //@line 2526 "parsermodule.c"
        var $191=($190)!=333; //@line 2526 "parsermodule.c"
        if ($191) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 2526 "parsermodule.c"
      case 44: // $bb4_i28
        var $192=$tree_addr_i19; //@line 2527 "parsermodule.c"
        var $193=$192+20; //@line 2527 "parsermodule.c"
        var $194=HEAP[$193]; //@line 2527 "parsermodule.c"
        var $195=$194+24; //@line 2527 "parsermodule.c"
        var $196=_validate_list_for($195); //@line 2527 "parsermodule.c"
        $ok_i22=$196; //@line 2527 "parsermodule.c"
        __lastLabel__ = 44; __label__ = 59; break; //@line 2527 "parsermodule.c"
      case 45: // $bb5_i30
        $i_i23=1; //@line 2530 "parsermodule.c"
        var $_pr_i29=$ok_i22;
        __lastLabel__ = 45; __label__ = 51; break; //@line 2530 "parsermodule.c"
      case 46: // $bb6_i31
        var $197=$tree_addr_i19; //@line 2532 "parsermodule.c"
        var $198=$197+20; //@line 2532 "parsermodule.c"
        var $199=HEAP[$198]; //@line 2532 "parsermodule.c"
        var $200=$i_i23; //@line 2532 "parsermodule.c"
        var $201=$199+24*$200; //@line 2532 "parsermodule.c"
        var $202=_validate_terminal($201, 12, __str52); //@line 2532 "parsermodule.c"
        var $203=($202)==0; //@line 2532 "parsermodule.c"
        if ($203) { __label__ = 49; break; } else { __label__ = 47; break; } //@line 2532 "parsermodule.c"
      case 47: // $bb7_i32
        var $204=$tree_addr_i19; //@line 2532 "parsermodule.c"
        var $205=$204+20; //@line 2532 "parsermodule.c"
        var $206=HEAP[$205]; //@line 2532 "parsermodule.c"
        var $207=$i_i23; //@line 2532 "parsermodule.c"
        var $208=($207) + 1; //@line 2532 "parsermodule.c"
        var $209=$206+24*$208; //@line 2532 "parsermodule.c"
        var $210=_validate_test($209); //@line 2532 "parsermodule.c"
        var $211=($210)==0; //@line 2532 "parsermodule.c"
        if ($211) { __label__ = 49; break; } else { __label__ = 48; break; } //@line 2532 "parsermodule.c"
      case 48: // $bb8_i33
        $iftmp_177_i=1; //@line 2532 "parsermodule.c"
        __label__ = 50; break; //@line 2532 "parsermodule.c"
      case 49: // $bb9_i34
        $iftmp_177_i=0; //@line 2532 "parsermodule.c"
        __label__ = 50; break; //@line 2532 "parsermodule.c"
      case 50: // $bb10_i35
        var $212=$iftmp_177_i; //@line 2532 "parsermodule.c"
        $ok_i22=$212; //@line 2532 "parsermodule.c"
        var $213=$i_i23; //@line 2534 "parsermodule.c"
        var $214=($213) + 2; //@line 2534 "parsermodule.c"
        $i_i23=$214; //@line 2534 "parsermodule.c"
        __lastLabel__ = 50; __label__ = 51; break; //@line 2534 "parsermodule.c"
      case 51: // $bb11_i36
        var $215=__lastLabel__ == 50 ? $212 : ($_pr_i29);
        var $216=($215)==0; //@line 2531 "parsermodule.c"
        if ($216) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 2531 "parsermodule.c"
      case 52: // $bb12_i37
        var $217=$nch_i21; //@line 2531 "parsermodule.c"
        var $218=$i_i23; //@line 2531 "parsermodule.c"
        var $219=($217) - ($218); //@line 2531 "parsermodule.c"
        var $220=($219) > 1; //@line 2531 "parsermodule.c"
        if ($220) { __label__ = 46; break; } else { __label__ = 53; break; } //@line 2531 "parsermodule.c"
      case 53: // $bb13_i38
        var $221=$ok_i22; //@line 2536 "parsermodule.c"
        var $222=($221)==0; //@line 2536 "parsermodule.c"
        if ($222) { __label__ = 56; break; } else { __label__ = 54; break; } //@line 2536 "parsermodule.c"
      case 54: // $bb14_i39
        var $223=$nch_i21; //@line 2536 "parsermodule.c"
        var $224=($223) - 1; //@line 2536 "parsermodule.c"
        var $225=$i_i23; //@line 2536 "parsermodule.c"
        var $226=($224)!=($225); //@line 2536 "parsermodule.c"
        if ($226) { __label__ = 56; break; } else { __label__ = 55; break; } //@line 2536 "parsermodule.c"
      case 55: // $bb15_i40
        var $227=$tree_addr_i19; //@line 2537 "parsermodule.c"
        var $228=$227+20; //@line 2537 "parsermodule.c"
        var $229=HEAP[$228]; //@line 2537 "parsermodule.c"
        var $230=$i_i23; //@line 2537 "parsermodule.c"
        var $231=$229+24*$230; //@line 2537 "parsermodule.c"
        var $232=_validate_terminal($231, 12, __str52); //@line 2537 "parsermodule.c"
        $ok_i22=$232; //@line 2537 "parsermodule.c"
        __lastLabel__ = 55; __label__ = 59; break; //@line 2537 "parsermodule.c"
      case 56: // $bb16_i41
        var $233=$i_i23; //@line 2538 "parsermodule.c"
        var $234=$nch_i21; //@line 2538 "parsermodule.c"
        var $235=($233)!=($234); //@line 2538 "parsermodule.c"
        if ($235) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 2538 "parsermodule.c"
      case 57: // $bb17_i42
        $ok_i22=0; //@line 2539 "parsermodule.c"
        $message_addr_i1_i17=__str150;
        var $236=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $237=$message_addr_i1_i17; //@line 531 "parsermodule.c"
        _PyErr_SetString($236, $237); //@line 531 "parsermodule.c"
        __label__ = 58; break; //@line 2540 "parsermodule.c"
      case 58: // $validate_listmaker_exitthread_pre_split
        var $_pr=$ok_i22;
        __lastLabel__ = 58; __label__ = 59; break;
      case 59: // $validate_listmaker_exit
        var $238=__lastLabel__ == 58 ? $_pr : (__lastLabel__ == 44 ? $196 : ($232));
        $7=$238; //@line 2543 "parsermodule.c"
        $retval_i20=$238; //@line 2543 "parsermodule.c"
        var $239=($238)==0; //@line 2473 "parsermodule.c"
        if ($239) { __label__ = 63; break; } else { __label__ = 60; break; } //@line 2473 "parsermodule.c"
      case 60: // $bb18
        var $240=$tree_addr; //@line 2473 "parsermodule.c"
        var $241=$240+20; //@line 2473 "parsermodule.c"
        var $242=HEAP[$241]; //@line 2473 "parsermodule.c"
        var $243=$242+48; //@line 2473 "parsermodule.c"
        $n_addr_i44=$243;
        $t_addr_i45=10;
        var $244=$n_addr_i44; //@line 956 "parsermodule.c"
        var $245=$244; //@line 956 "parsermodule.c"
        var $246=HEAP[$245]; //@line 956 "parsermodule.c"
        var $247=($246); //@line 956 "parsermodule.c"
        var $248=$t_addr_i45; //@line 956 "parsermodule.c"
        var $249=($247)!=($248); //@line 956 "parsermodule.c"
        if ($249) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 956 "parsermodule.c"
      case 61: // $validate_ntype_exit51_thread
        var $250=$n_addr_i44; //@line 957 "parsermodule.c"
        var $251=$250; //@line 957 "parsermodule.c"
        var $252=HEAP[$251]; //@line 957 "parsermodule.c"
        var $253=($252); //@line 957 "parsermodule.c"
        var $254=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $255=$t_addr_i45; //@line 957 "parsermodule.c"
        var $256=_PyErr_Format($254, __str49, $255, $253); //@line 957 "parsermodule.c"
        $6=0; //@line 959 "parsermodule.c"
        $retval_i46=0; //@line 959 "parsermodule.c"
        __label__ = 63; break;
      case 62: // $bb19
        $6=1; //@line 961 "parsermodule.c"
        $retval_i46=1; //@line 959 "parsermodule.c"
        $iftmp_174=1; //@line 2473 "parsermodule.c"
        __label__ = 64; break; //@line 2473 "parsermodule.c"
      case 63: // $bb20
        $iftmp_174=0; //@line 2473 "parsermodule.c"
        __label__ = 64; break; //@line 2473 "parsermodule.c"
      case 64: // $bb21
        var $257=$iftmp_174; //@line 2473 "parsermodule.c"
        $res=$257; //@line 2473 "parsermodule.c"
        __label__ = 148; break; //@line 2473 "parsermodule.c"
      case 65: // $bb22
        $res=0; //@line 2476 "parsermodule.c"
        $message_addr_i=__str148;
        var $258=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $259=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($258, $259); //@line 531 "parsermodule.c"
        __label__ = 148; break; //@line 2477 "parsermodule.c"
      case 66: // $bb24
        var $260=$nch; //@line 2481 "parsermodule.c"
        var $261=($260) > 3; //@line 2481 "parsermodule.c"
        if ($261) { __label__ = 69; break; } else { __label__ = 67; break; } //@line 2481 "parsermodule.c"
      case 67: // $bb25
        var $262=$tree_addr; //@line 2481 "parsermodule.c"
        var $263=$262+20; //@line 2481 "parsermodule.c"
        var $264=HEAP[$263]; //@line 2481 "parsermodule.c"
        var $265=$nch; //@line 2481 "parsermodule.c"
        var $266=($265) - 1; //@line 2481 "parsermodule.c"
        var $267=$264+24*$266; //@line 2481 "parsermodule.c"
        $n_addr_i52=$267;
        $t_addr_i53=27;
        var $268=$n_addr_i52; //@line 956 "parsermodule.c"
        var $269=$268; //@line 956 "parsermodule.c"
        var $270=HEAP[$269]; //@line 956 "parsermodule.c"
        var $271=($270); //@line 956 "parsermodule.c"
        var $272=$t_addr_i53; //@line 956 "parsermodule.c"
        var $273=($271)!=($272); //@line 956 "parsermodule.c"
        if ($273) { __label__ = 68; break; } else { __label__ = 70; break; } //@line 956 "parsermodule.c"
      case 68: // $validate_ntype_exit59_thread
        var $274=$n_addr_i52; //@line 957 "parsermodule.c"
        var $275=$274; //@line 957 "parsermodule.c"
        var $276=HEAP[$275]; //@line 957 "parsermodule.c"
        var $277=($276); //@line 957 "parsermodule.c"
        var $278=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $279=$t_addr_i53; //@line 957 "parsermodule.c"
        var $280=_PyErr_Format($278, __str49, $279, $277); //@line 957 "parsermodule.c"
        $5=0; //@line 959 "parsermodule.c"
        $retval_i54=0; //@line 959 "parsermodule.c"
        __label__ = 69; break;
      case 69: // $bb28
        $iftmp_175=0; //@line 2481 "parsermodule.c"
        $res=0; //@line 2481 "parsermodule.c"
        __label__ = 148; break;
      case 70: // $bb29
        $5=1; //@line 961 "parsermodule.c"
        $retval_i54=1; //@line 959 "parsermodule.c"
        $iftmp_175=1; //@line 2481 "parsermodule.c"
        $res=1; //@line 2481 "parsermodule.c"
        var $281=$nch; //@line 2484 "parsermodule.c"
        var $282=($281)==3; //@line 2484 "parsermodule.c"
        if ($282) { __label__ = 71; break; } else { __label__ = 148; break; } //@line 2484 "parsermodule.c"
      case 71: // $bb30
        var $283=$tree_addr; //@line 2485 "parsermodule.c"
        var $284=$283+20; //@line 2485 "parsermodule.c"
        var $285=HEAP[$284]; //@line 2485 "parsermodule.c"
        var $286=$285+24; //@line 2485 "parsermodule.c"
        $tree_addr_i62=$286;
        var $287=$tree_addr_i62; //@line 2982 "parsermodule.c"
        var $288=$287+16; //@line 2982 "parsermodule.c"
        var $289=HEAP[$288]; //@line 2982 "parsermodule.c"
        $nch_i64=$289; //@line 2982 "parsermodule.c"
        var $290=$tree_addr_i62; //@line 2983 "parsermodule.c"
        $n_addr_i_i=$290;
        $t_addr_i_i=328;
        var $291=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $292=$291; //@line 956 "parsermodule.c"
        var $293=HEAP[$292]; //@line 956 "parsermodule.c"
        var $294=($293); //@line 956 "parsermodule.c"
        var $295=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $296=($294)!=($295); //@line 956 "parsermodule.c"
        if ($296) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 956 "parsermodule.c"
      case 72: // $bb_i_i
        var $297=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $298=$297; //@line 957 "parsermodule.c"
        var $299=HEAP[$298]; //@line 957 "parsermodule.c"
        var $300=($299); //@line 957 "parsermodule.c"
        var $301=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $302=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $303=_PyErr_Format($301, __str49, $302, $300); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        __label__ = 74; break; //@line 959 "parsermodule.c"
      case 73: // $bb1_i_i
        $3=1; //@line 961 "parsermodule.c"
        __label__ = 74; break; //@line 961 "parsermodule.c"
      case 74: // $validate_ntype_exit_i
        var $304=$3; //@line 959 "parsermodule.c"
        $retval_i_i=$304; //@line 959 "parsermodule.c"
        var $retval3_i_i=$retval_i_i; //@line 959 "parsermodule.c"
        $ok_i65=$retval3_i_i; //@line 2983 "parsermodule.c"
        $i_i66=0; //@line 2984 "parsermodule.c"
        $check_trailing_comma_i=0; //@line 2985 "parsermodule.c"
        var $305=$nch_i64; //@line 2987 "parsermodule.c"
        var $306=($305) <= 0; //@line 2987 "parsermodule.c"
        if ($306) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 2987 "parsermodule.c"
      case 75: // $bb_i67
        ___assert_fail(__str172, __str173, 2987, ___PRETTY_FUNCTION___13794); //@line 2987 "parsermodule.c"
        throw "Reached an unreachable!" //@line 2987 "parsermodule.c"
      case 76: // $bb1_i68
        var $307=$ok_i65; //@line 2989 "parsermodule.c"
        var $308=($307)==0; //@line 2989 "parsermodule.c"
        if ($308) { __label__ = 124; break; } else { __label__ = 77; break; } //@line 2989 "parsermodule.c"
      case 77: // $bb2_i69
        var $309=$nch_i64; //@line 2989 "parsermodule.c"
        var $310=($309)==1; //@line 2989 "parsermodule.c"
        if ($310) { __label__ = 79; break; } else { __label__ = 78; break; } //@line 2989 "parsermodule.c"
      case 78: // $bb3_i70
        var $311=$tree_addr_i62; //@line 2989 "parsermodule.c"
        var $312=$311+20; //@line 2989 "parsermodule.c"
        var $313=HEAP[$312]; //@line 2989 "parsermodule.c"
        var $314=$313+24; //@line 2989 "parsermodule.c"
        var $315=$314; //@line 2989 "parsermodule.c"
        var $316=HEAP[$315]; //@line 2989 "parsermodule.c"
        var $317=($316)==12; //@line 2989 "parsermodule.c"
        if ($317) { __label__ = 79; break; } else { __label__ = 88; break; } //@line 2989 "parsermodule.c"
      case 79: // $bb4_i71
        var $318=$tree_addr_i62; //@line 2993 "parsermodule.c"
        var $319=$318+20; //@line 2993 "parsermodule.c"
        var $320=HEAP[$319]; //@line 2993 "parsermodule.c"
        var $321=$i_i66; //@line 2993 "parsermodule.c"
        var $322=$320+24*$321; //@line 2993 "parsermodule.c"
        var $323=$i_i66; //@line 2993 "parsermodule.c"
        var $324=($323) + 1; //@line 2993 "parsermodule.c"
        $i_i66=$324; //@line 2993 "parsermodule.c"
        var $325=_validate_test($322); //@line 2993 "parsermodule.c"
        $ok_i65=$325; //@line 2993 "parsermodule.c"
        __lastLabel__ = 79; __label__ = 85; break; //@line 2993 "parsermodule.c"
      case 80: // $bb5_i72
        var $326=$tree_addr_i62; //@line 2995 "parsermodule.c"
        var $327=$326+20; //@line 2995 "parsermodule.c"
        var $328=HEAP[$327]; //@line 2995 "parsermodule.c"
        var $329=$i_i66; //@line 2995 "parsermodule.c"
        var $330=$328+24*$329; //@line 2995 "parsermodule.c"
        var $331=_validate_terminal($330, 12, __str52); //@line 2995 "parsermodule.c"
        var $332=($331)==0; //@line 2995 "parsermodule.c"
        if ($332) { __label__ = 83; break; } else { __label__ = 81; break; } //@line 2995 "parsermodule.c"
      case 81: // $bb6_i73
        var $333=$tree_addr_i62; //@line 2995 "parsermodule.c"
        var $334=$333+20; //@line 2995 "parsermodule.c"
        var $335=HEAP[$334]; //@line 2995 "parsermodule.c"
        var $336=$i_i66; //@line 2995 "parsermodule.c"
        var $337=($336) + 1; //@line 2995 "parsermodule.c"
        var $338=$335+24*$337; //@line 2995 "parsermodule.c"
        var $339=_validate_test($338); //@line 2995 "parsermodule.c"
        var $340=($339)==0; //@line 2995 "parsermodule.c"
        if ($340) { __label__ = 83; break; } else { __label__ = 82; break; } //@line 2995 "parsermodule.c"
      case 82: // $bb7_i74
        $iftmp_203_i=1; //@line 2995 "parsermodule.c"
        __label__ = 84; break; //@line 2995 "parsermodule.c"
      case 83: // $bb8_i75
        $iftmp_203_i=0; //@line 2995 "parsermodule.c"
        __label__ = 84; break; //@line 2995 "parsermodule.c"
      case 84: // $bb9_i76
        var $341=$iftmp_203_i; //@line 2995 "parsermodule.c"
        $ok_i65=$341; //@line 2995 "parsermodule.c"
        var $342=$i_i66; //@line 2997 "parsermodule.c"
        var $343=($342) + 2; //@line 2997 "parsermodule.c"
        $i_i66=$343; //@line 2997 "parsermodule.c"
        __lastLabel__ = 84; __label__ = 85; break; //@line 2997 "parsermodule.c"
      case 85: // $bb10_i77
        var $344=__lastLabel__ == 84 ? $341 : ($325);
        var $345=($344)==0; //@line 2994 "parsermodule.c"
        if ($345) { __label__ = 87; break; } else { __label__ = 86; break; } //@line 2994 "parsermodule.c"
      case 86: // $bb11_i78
        var $346=$nch_i64; //@line 2994 "parsermodule.c"
        var $347=$i_i66; //@line 2994 "parsermodule.c"
        var $348=($346) - ($347); //@line 2994 "parsermodule.c"
        var $349=($348) > 1; //@line 2994 "parsermodule.c"
        if ($349) { __label__ = 80; break; } else { __label__ = 87; break; } //@line 2994 "parsermodule.c"
      case 87: // $bb12_i79
        $check_trailing_comma_i=1; //@line 2999 "parsermodule.c"
        __label__ = 124; break; //@line 2999 "parsermodule.c"
      case 88: // $bb13_i81
        var $_pr_i80=$ok_i65;
        var $350=($_pr_i80)==0; //@line 3001 "parsermodule.c"
        if ($350) { __label__ = 131; break; } else { __label__ = 89; break; } //@line 3001 "parsermodule.c"
      case 89: // $bb14_i82
        var $351=$tree_addr_i62; //@line 3001 "parsermodule.c"
        var $352=$351+20; //@line 3001 "parsermodule.c"
        var $353=HEAP[$352]; //@line 3001 "parsermodule.c"
        var $354=$353+24; //@line 3001 "parsermodule.c"
        var $355=$354; //@line 3001 "parsermodule.c"
        var $356=HEAP[$355]; //@line 3001 "parsermodule.c"
        var $357=($356)!=336; //@line 3001 "parsermodule.c"
        if ($357) { __label__ = 95; break; } else { __label__ = 90; break; } //@line 3001 "parsermodule.c"
      case 90: // $bb15_i83
        var $358=$tree_addr_i62; //@line 3005 "parsermodule.c"
        var $359=$358+20; //@line 3005 "parsermodule.c"
        var $360=HEAP[$359]; //@line 3005 "parsermodule.c"
        var $361=$360; //@line 3005 "parsermodule.c"
        var $362=_validate_test($361); //@line 3005 "parsermodule.c"
        var $363=($362)==0; //@line 3005 "parsermodule.c"
        if ($363) { __label__ = 93; break; } else { __label__ = 91; break; } //@line 3005 "parsermodule.c"
      case 91: // $bb16_i84
        var $364=$tree_addr_i62; //@line 3005 "parsermodule.c"
        var $365=$364+20; //@line 3005 "parsermodule.c"
        var $366=HEAP[$365]; //@line 3005 "parsermodule.c"
        var $367=$366+24; //@line 3005 "parsermodule.c"
        var $368=_validate_comp_for($367); //@line 3005 "parsermodule.c"
        var $369=($368)==0; //@line 3005 "parsermodule.c"
        if ($369) { __label__ = 93; break; } else { __label__ = 92; break; } //@line 3005 "parsermodule.c"
      case 92: // $bb17_i85
        $iftmp_204_i=1; //@line 3005 "parsermodule.c"
        __label__ = 94; break; //@line 3005 "parsermodule.c"
      case 93: // $bb18_i
        $iftmp_204_i=0; //@line 3005 "parsermodule.c"
        __label__ = 94; break; //@line 3005 "parsermodule.c"
      case 94: // $bb19_i
        var $370=$iftmp_204_i; //@line 3005 "parsermodule.c"
        $ok_i65=$370; //@line 3005 "parsermodule.c"
        __lastLabel__ = 94; __label__ = 125; break; //@line 3005 "parsermodule.c"
      case 95: // $bb20_i
        var $_pr2_pr_i=$ok_i65;
        var $371=($_pr2_pr_i)==0; //@line 3008 "parsermodule.c"
        if ($371) { __label__ = 124; break; } else { __label__ = 96; break; } //@line 3008 "parsermodule.c"
      case 96: // $bb21_i
        var $372=$tree_addr_i62; //@line 3008 "parsermodule.c"
        var $373=$372+16; //@line 3008 "parsermodule.c"
        var $374=HEAP[$373]; //@line 3008 "parsermodule.c"
        var $375=($374) <= 3; //@line 3008 "parsermodule.c"
        if ($375) { __label__ = 105; break; } else { __label__ = 97; break; } //@line 3008 "parsermodule.c"
      case 97: // $bb22_i
        var $376=$tree_addr_i62; //@line 3008 "parsermodule.c"
        var $377=$376+20; //@line 3008 "parsermodule.c"
        var $378=HEAP[$377]; //@line 3008 "parsermodule.c"
        var $379=$378+72; //@line 3008 "parsermodule.c"
        var $380=$379; //@line 3008 "parsermodule.c"
        var $381=HEAP[$380]; //@line 3008 "parsermodule.c"
        var $382=($381)!=336; //@line 3008 "parsermodule.c"
        if ($382) { __label__ = 105; break; } else { __label__ = 98; break; } //@line 3008 "parsermodule.c"
      case 98: // $bb23_i
        var $383=$tree_addr_i62; //@line 3012 "parsermodule.c"
        var $384=$383+20; //@line 3012 "parsermodule.c"
        var $385=HEAP[$384]; //@line 3012 "parsermodule.c"
        var $386=$385; //@line 3012 "parsermodule.c"
        var $387=_validate_test($386); //@line 3012 "parsermodule.c"
        var $388=($387)==0; //@line 3012 "parsermodule.c"
        if ($388) { __label__ = 103; break; } else { __label__ = 99; break; } //@line 3012 "parsermodule.c"
      case 99: // $bb24_i
        var $389=$tree_addr_i62; //@line 3012 "parsermodule.c"
        var $390=$389+20; //@line 3012 "parsermodule.c"
        var $391=HEAP[$390]; //@line 3012 "parsermodule.c"
        var $392=$391+24; //@line 3012 "parsermodule.c"
        var $393=_validate_terminal($392, 11, __str54); //@line 3012 "parsermodule.c"
        var $394=($393)==0; //@line 3012 "parsermodule.c"
        if ($394) { __label__ = 103; break; } else { __label__ = 100; break; } //@line 3012 "parsermodule.c"
      case 100: // $bb25_i
        var $395=$tree_addr_i62; //@line 3012 "parsermodule.c"
        var $396=$395+20; //@line 3012 "parsermodule.c"
        var $397=HEAP[$396]; //@line 3012 "parsermodule.c"
        var $398=$397+48; //@line 3012 "parsermodule.c"
        var $399=_validate_test($398); //@line 3012 "parsermodule.c"
        var $400=($399)==0; //@line 3012 "parsermodule.c"
        if ($400) { __label__ = 103; break; } else { __label__ = 101; break; } //@line 3012 "parsermodule.c"
      case 101: // $bb26_i
        var $401=$tree_addr_i62; //@line 3012 "parsermodule.c"
        var $402=$401+20; //@line 3012 "parsermodule.c"
        var $403=HEAP[$402]; //@line 3012 "parsermodule.c"
        var $404=$403+72; //@line 3012 "parsermodule.c"
        var $405=_validate_comp_for($404); //@line 3012 "parsermodule.c"
        var $406=($405)==0; //@line 3012 "parsermodule.c"
        if ($406) { __label__ = 103; break; } else { __label__ = 102; break; } //@line 3012 "parsermodule.c"
      case 102: // $bb27_i
        $iftmp_205_i=1; //@line 3012 "parsermodule.c"
        __label__ = 104; break; //@line 3012 "parsermodule.c"
      case 103: // $bb28_i
        $iftmp_205_i=0; //@line 3012 "parsermodule.c"
        __label__ = 104; break; //@line 3012 "parsermodule.c"
      case 104: // $bb29_i
        var $407=$iftmp_205_i; //@line 3012 "parsermodule.c"
        $ok_i65=$407; //@line 3012 "parsermodule.c"
        __lastLabel__ = 104; __label__ = 125; break; //@line 3012 "parsermodule.c"
      case 105: // $bb30_i
        var $_pr3_pr_i=$ok_i65;
        var $408=($_pr3_pr_i)!=0; //@line 3017 "parsermodule.c"
        if ($408) { __label__ = 106; break; } else { __label__ = 131; break; } //@line 3017 "parsermodule.c"
      case 106: // $bb31_i
        var $409=$nch_i64; //@line 3021 "parsermodule.c"
        var $410=($409) > 2; //@line 3021 "parsermodule.c"
        if ($410) { __label__ = 107; break; } else { __label__ = 113; break; } //@line 3021 "parsermodule.c"
      case 107: // $bb32_i
        var $411=$tree_addr_i62; //@line 3022 "parsermodule.c"
        var $412=$411+20; //@line 3022 "parsermodule.c"
        var $413=HEAP[$412]; //@line 3022 "parsermodule.c"
        var $414=$i_i66; //@line 3022 "parsermodule.c"
        var $415=$413+24*$414; //@line 3022 "parsermodule.c"
        var $416=_validate_test($415); //@line 3022 "parsermodule.c"
        var $417=($416)==0; //@line 3022 "parsermodule.c"
        if ($417) { __label__ = 111; break; } else { __label__ = 108; break; } //@line 3022 "parsermodule.c"
      case 108: // $bb33_i
        var $418=$tree_addr_i62; //@line 3022 "parsermodule.c"
        var $419=$418+20; //@line 3022 "parsermodule.c"
        var $420=HEAP[$419]; //@line 3022 "parsermodule.c"
        var $421=$i_i66; //@line 3022 "parsermodule.c"
        var $422=($421) + 1; //@line 3022 "parsermodule.c"
        var $423=$420+24*$422; //@line 3022 "parsermodule.c"
        var $424=_validate_terminal($423, 11, __str54); //@line 3022 "parsermodule.c"
        var $425=($424)==0; //@line 3022 "parsermodule.c"
        if ($425) { __label__ = 111; break; } else { __label__ = 109; break; } //@line 3022 "parsermodule.c"
      case 109: // $bb34_i
        var $426=$tree_addr_i62; //@line 3022 "parsermodule.c"
        var $427=$426+20; //@line 3022 "parsermodule.c"
        var $428=HEAP[$427]; //@line 3022 "parsermodule.c"
        var $429=$i_i66; //@line 3022 "parsermodule.c"
        var $430=($429) + 2; //@line 3022 "parsermodule.c"
        var $431=$428+24*$430; //@line 3022 "parsermodule.c"
        var $432=_validate_test($431); //@line 3022 "parsermodule.c"
        var $433=($432)==0; //@line 3022 "parsermodule.c"
        if ($433) { __label__ = 111; break; } else { __label__ = 110; break; } //@line 3022 "parsermodule.c"
      case 110: // $bb35_i
        $iftmp_206_i=1; //@line 3022 "parsermodule.c"
        __label__ = 112; break; //@line 3022 "parsermodule.c"
      case 111: // $bb36_i
        $iftmp_206_i=0; //@line 3022 "parsermodule.c"
        __label__ = 112; break; //@line 3022 "parsermodule.c"
      case 112: // $bb37_i
        var $434=$iftmp_206_i; //@line 3022 "parsermodule.c"
        $ok_i65=$434; //@line 3022 "parsermodule.c"
        var $435=$i_i66; //@line 3025 "parsermodule.c"
        var $436=($435) + 3; //@line 3025 "parsermodule.c"
        $i_i66=$436; //@line 3025 "parsermodule.c"
        __lastLabel__ = 112; __label__ = 121; break; //@line 3025 "parsermodule.c"
      case 113: // $bb38_i
        $ok_i65=0; //@line 3028 "parsermodule.c"
        $message_addr_i_i61=__str174;
        var $437=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $438=$message_addr_i_i61; //@line 531 "parsermodule.c"
        _PyErr_SetString($437, $438); //@line 531 "parsermodule.c"
        var $_pr4_i=$ok_i65;
        __lastLabel__ = 113; __label__ = 121; break; //@line 3029 "parsermodule.c"
      case 114: // $bb40_i
        var $439=$tree_addr_i62; //@line 3033 "parsermodule.c"
        var $440=$439+20; //@line 3033 "parsermodule.c"
        var $441=HEAP[$440]; //@line 3033 "parsermodule.c"
        var $442=$i_i66; //@line 3033 "parsermodule.c"
        var $443=$441+24*$442; //@line 3033 "parsermodule.c"
        var $444=_validate_terminal($443, 12, __str52); //@line 3033 "parsermodule.c"
        var $445=($444)==0; //@line 3033 "parsermodule.c"
        if ($445) { __label__ = 119; break; } else { __label__ = 115; break; } //@line 3033 "parsermodule.c"
      case 115: // $bb41_i
        var $446=$tree_addr_i62; //@line 3033 "parsermodule.c"
        var $447=$446+20; //@line 3033 "parsermodule.c"
        var $448=HEAP[$447]; //@line 3033 "parsermodule.c"
        var $449=$i_i66; //@line 3033 "parsermodule.c"
        var $450=($449) + 1; //@line 3033 "parsermodule.c"
        var $451=$448+24*$450; //@line 3033 "parsermodule.c"
        var $452=_validate_test($451); //@line 3033 "parsermodule.c"
        var $453=($452)==0; //@line 3033 "parsermodule.c"
        if ($453) { __label__ = 119; break; } else { __label__ = 116; break; } //@line 3033 "parsermodule.c"
      case 116: // $bb42_i
        var $454=$tree_addr_i62; //@line 3033 "parsermodule.c"
        var $455=$454+20; //@line 3033 "parsermodule.c"
        var $456=HEAP[$455]; //@line 3033 "parsermodule.c"
        var $457=$i_i66; //@line 3033 "parsermodule.c"
        var $458=($457) + 2; //@line 3033 "parsermodule.c"
        var $459=$456+24*$458; //@line 3033 "parsermodule.c"
        var $460=_validate_terminal($459, 11, __str54); //@line 3033 "parsermodule.c"
        var $461=($460)==0; //@line 3033 "parsermodule.c"
        if ($461) { __label__ = 119; break; } else { __label__ = 117; break; } //@line 3033 "parsermodule.c"
      case 117: // $bb43_i
        var $462=$tree_addr_i62; //@line 3033 "parsermodule.c"
        var $463=$462+20; //@line 3033 "parsermodule.c"
        var $464=HEAP[$463]; //@line 3033 "parsermodule.c"
        var $465=$i_i66; //@line 3033 "parsermodule.c"
        var $466=($465) + 3; //@line 3033 "parsermodule.c"
        var $467=$464+24*$466; //@line 3033 "parsermodule.c"
        var $468=_validate_test($467); //@line 3033 "parsermodule.c"
        var $469=($468)==0; //@line 3033 "parsermodule.c"
        if ($469) { __label__ = 119; break; } else { __label__ = 118; break; } //@line 3033 "parsermodule.c"
      case 118: // $bb44_i
        $iftmp_207_i=1; //@line 3033 "parsermodule.c"
        __label__ = 120; break; //@line 3033 "parsermodule.c"
      case 119: // $bb45_i
        $iftmp_207_i=0; //@line 3033 "parsermodule.c"
        __label__ = 120; break; //@line 3033 "parsermodule.c"
      case 120: // $bb46_i
        var $470=$iftmp_207_i; //@line 3033 "parsermodule.c"
        $ok_i65=$470; //@line 3033 "parsermodule.c"
        var $471=$i_i66; //@line 3037 "parsermodule.c"
        var $472=($471) + 4; //@line 3037 "parsermodule.c"
        $i_i66=$472; //@line 3037 "parsermodule.c"
        __lastLabel__ = 120; __label__ = 121; break; //@line 3037 "parsermodule.c"
      case 121: // $bb47_i
        var $473=__lastLabel__ == 120 ? $470 : (__lastLabel__ == 113 ? $_pr4_i : ($434));
        var $474=($473)==0; //@line 3032 "parsermodule.c"
        if ($474) { __label__ = 123; break; } else { __label__ = 122; break; } //@line 3032 "parsermodule.c"
      case 122: // $bb48_i
        var $475=$nch_i64; //@line 3032 "parsermodule.c"
        var $476=$i_i66; //@line 3032 "parsermodule.c"
        var $477=($475) - ($476); //@line 3032 "parsermodule.c"
        var $478=($477) > 3; //@line 3032 "parsermodule.c"
        if ($478) { __label__ = 114; break; } else { __label__ = 123; break; } //@line 3032 "parsermodule.c"
      case 123: // $bb49_i
        $check_trailing_comma_i=1; //@line 3039 "parsermodule.c"
        __label__ = 124; break; //@line 3039 "parsermodule.c"
      case 124: // $bb50thread_pre_split_i
        var $_pr5_i=$ok_i65;
        __lastLabel__ = 124; __label__ = 125; break;
      case 125: // $bb50_i
        var $479=__lastLabel__ == 124 ? $_pr5_i : (__lastLabel__ == 104 ? $407 : ($370));
        var $480=($479)!=0; //@line 3041 "parsermodule.c"
        if ($480) { __label__ = 126; break; } else { __label__ = 131; break; } //@line 3041 "parsermodule.c"
      case 126: // $bb51_i
        var $481=$check_trailing_comma_i; //@line 3041 "parsermodule.c"
        var $482=($481)!=0; //@line 3041 "parsermodule.c"
        if ($482) { __label__ = 127; break; } else { __label__ = 131; break; } //@line 3041 "parsermodule.c"
      case 127: // $bb52_i
        var $483=$nch_i64; //@line 3042 "parsermodule.c"
        var $484=($483) - 1; //@line 3042 "parsermodule.c"
        var $485=$i_i66; //@line 3042 "parsermodule.c"
        var $486=($484)==($485); //@line 3042 "parsermodule.c"
        if ($486) { __label__ = 128; break; } else { __label__ = 129; break; } //@line 3042 "parsermodule.c"
      case 128: // $bb53_i
        var $487=$tree_addr_i62; //@line 3043 "parsermodule.c"
        var $488=$487+20; //@line 3043 "parsermodule.c"
        var $489=HEAP[$488]; //@line 3043 "parsermodule.c"
        var $490=$i_i66; //@line 3043 "parsermodule.c"
        var $491=$489+24*$490; //@line 3043 "parsermodule.c"
        var $492=_validate_terminal($491, 12, __str52); //@line 3043 "parsermodule.c"
        $ok_i65=$492; //@line 3043 "parsermodule.c"
        __label__ = 131; break; //@line 3043 "parsermodule.c"
      case 129: // $bb54_i
        var $493=$i_i66; //@line 3044 "parsermodule.c"
        var $494=$nch_i64; //@line 3044 "parsermodule.c"
        var $495=($493)!=($494); //@line 3044 "parsermodule.c"
        if ($495) { __label__ = 130; break; } else { __label__ = 131; break; } //@line 3044 "parsermodule.c"
      case 130: // $bb55_i
        $ok_i65=0; //@line 3045 "parsermodule.c"
        $message_addr_i1_i60=__str175;
        var $496=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $497=$message_addr_i1_i60; //@line 531 "parsermodule.c"
        _PyErr_SetString($496, $497); //@line 531 "parsermodule.c"
        __label__ = 131; break; //@line 3046 "parsermodule.c"
      case 131: // $validate_dictorsetmaker_exit
        var $498=$ok_i65; //@line 3050 "parsermodule.c"
        $4=$498; //@line 3050 "parsermodule.c"
        var $499=$4; //@line 3050 "parsermodule.c"
        $retval_i63=$499; //@line 3050 "parsermodule.c"
        var $retval57_i=$retval_i63; //@line 3050 "parsermodule.c"
        $res=$retval57_i; //@line 2485 "parsermodule.c"
        __label__ = 148; break; //@line 2485 "parsermodule.c"
      case 132: // $bb32
        var $500=$nch; //@line 2488 "parsermodule.c"
        var $501=($500)!=3; //@line 2488 "parsermodule.c"
        if ($501) { __label__ = 137; break; } else { __label__ = 133; break; } //@line 2488 "parsermodule.c"
      case 133: // $bb33
        var $502=$tree_addr; //@line 2488 "parsermodule.c"
        var $503=$502+20; //@line 2488 "parsermodule.c"
        var $504=HEAP[$503]; //@line 2488 "parsermodule.c"
        var $505=$504+24; //@line 2488 "parsermodule.c"
        $tree_addr_i86=$505;
        var $506=$tree_addr_i86; //@line 1170 "parsermodule.c"
        var $507=_validate_repeating_list($506, 338, (FUNCTION_TABLE_OFFSET + 10), __str64); //@line 1170 "parsermodule.c"
        $2=$507; //@line 1170 "parsermodule.c"
        var $508=$2; //@line 1170 "parsermodule.c"
        $retval_i87=$508; //@line 1170 "parsermodule.c"
        var $retval1_i=$retval_i87; //@line 1170 "parsermodule.c"
        var $509=($retval1_i)==0; //@line 2488 "parsermodule.c"
        if ($509) { __label__ = 137; break; } else { __label__ = 134; break; } //@line 2488 "parsermodule.c"
      case 134: // $bb34
        var $510=$tree_addr; //@line 2488 "parsermodule.c"
        var $511=$510+20; //@line 2488 "parsermodule.c"
        var $512=HEAP[$511]; //@line 2488 "parsermodule.c"
        var $513=$512+48; //@line 2488 "parsermodule.c"
        $n_addr_i88=$513;
        $t_addr_i89=25;
        var $514=$n_addr_i88; //@line 956 "parsermodule.c"
        var $515=$514; //@line 956 "parsermodule.c"
        var $516=HEAP[$515]; //@line 956 "parsermodule.c"
        var $517=($516); //@line 956 "parsermodule.c"
        var $518=$t_addr_i89; //@line 956 "parsermodule.c"
        var $519=($517)!=($518); //@line 956 "parsermodule.c"
        if ($519) { __label__ = 135; break; } else { __label__ = 136; break; } //@line 956 "parsermodule.c"
      case 135: // $validate_ntype_exit95_thread
        var $520=$n_addr_i88; //@line 957 "parsermodule.c"
        var $521=$520; //@line 957 "parsermodule.c"
        var $522=HEAP[$521]; //@line 957 "parsermodule.c"
        var $523=($522); //@line 957 "parsermodule.c"
        var $524=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $525=$t_addr_i89; //@line 957 "parsermodule.c"
        var $526=_PyErr_Format($524, __str49, $525, $523); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i90=0; //@line 959 "parsermodule.c"
        __label__ = 137; break;
      case 136: // $bb35
        $1=1; //@line 961 "parsermodule.c"
        $retval_i90=1; //@line 959 "parsermodule.c"
        $iftmp_176=1; //@line 2488 "parsermodule.c"
        __label__ = 138; break; //@line 2488 "parsermodule.c"
      case 137: // $bb36
        $iftmp_176=0; //@line 2488 "parsermodule.c"
        __label__ = 138; break; //@line 2488 "parsermodule.c"
      case 138: // $bb37
        var $527=$iftmp_176; //@line 2488 "parsermodule.c"
        $res=$527; //@line 2488 "parsermodule.c"
        __label__ = 148; break; //@line 2488 "parsermodule.c"
      case 139: // $bb38
        var $528=$nch; //@line 2494 "parsermodule.c"
        var $529=($528)==1; //@line 2494 "parsermodule.c"
        var $530=($529); //@line 2494 "parsermodule.c"
        $res=$530; //@line 2494 "parsermodule.c"
        __label__ = 148; break; //@line 2494 "parsermodule.c"
      case 140: // $bb39
        $pos=1; //@line 2497 "parsermodule.c"
        var $_pr106=$res;
        __lastLabel__ = 140; __label__ = 145; break; //@line 2497 "parsermodule.c"
      case 141: // $bb40
        var $531=$tree_addr; //@line 2498 "parsermodule.c"
        var $532=$531+20; //@line 2498 "parsermodule.c"
        var $533=HEAP[$532]; //@line 2498 "parsermodule.c"
        var $534=$pos; //@line 2498 "parsermodule.c"
        var $535=$533+24*$534; //@line 2498 "parsermodule.c"
        $n_addr_i96=$535;
        $t_addr_i97=3;
        var $536=$n_addr_i96; //@line 956 "parsermodule.c"
        var $537=$536; //@line 956 "parsermodule.c"
        var $538=HEAP[$537]; //@line 956 "parsermodule.c"
        var $539=($538); //@line 956 "parsermodule.c"
        var $540=$t_addr_i97; //@line 956 "parsermodule.c"
        var $541=($539)!=($540); //@line 956 "parsermodule.c"
        if ($541) { __label__ = 142; break; } else { __label__ = 143; break; } //@line 956 "parsermodule.c"
      case 142: // $bb_i99
        var $542=$n_addr_i96; //@line 957 "parsermodule.c"
        var $543=$542; //@line 957 "parsermodule.c"
        var $544=HEAP[$543]; //@line 957 "parsermodule.c"
        var $545=($544); //@line 957 "parsermodule.c"
        var $546=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $547=$t_addr_i97; //@line 957 "parsermodule.c"
        var $548=_PyErr_Format($546, __str49, $547, $545); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        __label__ = 144; break; //@line 959 "parsermodule.c"
      case 143: // $bb1_i100
        $0=1; //@line 961 "parsermodule.c"
        __label__ = 144; break; //@line 961 "parsermodule.c"
      case 144: // $validate_ntype_exit103
        var $549=$0; //@line 959 "parsermodule.c"
        $retval_i98=$549; //@line 959 "parsermodule.c"
        var $retval3_i101=$retval_i98; //@line 959 "parsermodule.c"
        $res=$retval3_i101; //@line 2498 "parsermodule.c"
        var $550=$pos; //@line 2497 "parsermodule.c"
        var $551=($550) + 1; //@line 2497 "parsermodule.c"
        $pos=$551; //@line 2497 "parsermodule.c"
        __lastLabel__ = 144; __label__ = 145; break; //@line 2497 "parsermodule.c"
      case 145: // $bb41
        var $552=__lastLabel__ == 144 ? $retval3_i101 : ($_pr106);
        var $553=($552)==0; //@line 2497 "parsermodule.c"
        if ($553) { __label__ = 148; break; } else { __label__ = 146; break; } //@line 2497 "parsermodule.c"
      case 146: // $bb42
        var $554=$pos; //@line 2497 "parsermodule.c"
        var $555=$nch; //@line 2497 "parsermodule.c"
        var $556=($554) < ($555); //@line 2497 "parsermodule.c"
        if ($556) { __label__ = 141; break; } else { __label__ = 148; break; } //@line 2497 "parsermodule.c"
      case 147: // $bb44
        $res=0; //@line 2501 "parsermodule.c"
        __label__ = 148; break; //@line 2501 "parsermodule.c"
      case 148: // $bb45
        var $557=$res; //@line 2505 "parsermodule.c"
        $12=$557; //@line 2505 "parsermodule.c"
        var $558=$12; //@line 2505 "parsermodule.c"
        $retval=$558; //@line 2505 "parsermodule.c"
        var $retval46=$retval; //@line 2505 "parsermodule.c"
        ;
        return $retval46; //@line 2505 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_funcdef($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i2_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i3_i;
        var $0;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $1;
        var $tree_addr_i;
        var $retval_i8;
        var $2;
        var $iftmp_75_i;
        var $iftmp_74_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i1;
        var $t_addr_i2;
        var $retval_i3;
        var $3;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $4;
        var $tree_addr;
        var $retval;
        var $5;
        var $iftmp_186;
        var $nch;
        var $ok;
        $tree_addr=$tree;
        var $6=$tree_addr; //@line 2668 "parsermodule.c"
        var $7=$6+16; //@line 2668 "parsermodule.c"
        var $8=HEAP[$7]; //@line 2668 "parsermodule.c"
        $nch=$8; //@line 2668 "parsermodule.c"
        var $9=$tree_addr; //@line 2675 "parsermodule.c"
        $n_addr_i=$9;
        $t_addr_i=262;
        var $10=$n_addr_i; //@line 956 "parsermodule.c"
        var $11=$10; //@line 956 "parsermodule.c"
        var $12=HEAP[$11]; //@line 956 "parsermodule.c"
        var $13=($12); //@line 956 "parsermodule.c"
        var $14=$t_addr_i; //@line 956 "parsermodule.c"
        var $15=($13)!=($14); //@line 956 "parsermodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $16=$n_addr_i; //@line 957 "parsermodule.c"
        var $17=$16; //@line 957 "parsermodule.c"
        var $18=HEAP[$17]; //@line 957 "parsermodule.c"
        var $19=($18); //@line 957 "parsermodule.c"
        var $20=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $21=$t_addr_i; //@line 957 "parsermodule.c"
        var $22=_PyErr_Format($20, __str49, $21, $19); //@line 957 "parsermodule.c"
        $4=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 23; break;
      case 2: // $bb
        $4=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $23=$nch; //@line 2675 "parsermodule.c"
        var $24=($23)!=5; //@line 2675 "parsermodule.c"
        if ($24) { __label__ = 23; break; } else { __label__ = 3; break; } //@line 2675 "parsermodule.c"
      case 3: // $bb1
        var $25=$tree_addr; //@line 2675 "parsermodule.c"
        var $26=$25+20; //@line 2675 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2675 "parsermodule.c"
        var $28=$tree_addr; //@line 2675 "parsermodule.c"
        var $29=$28+16; //@line 2675 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2675 "parsermodule.c"
        var $31=($30) + -5; //@line 2675 "parsermodule.c"
        var $32=$27+24*$31; //@line 2675 "parsermodule.c"
        var $33=_validate_terminal($32, 1, __str155); //@line 2675 "parsermodule.c"
        var $34=($33)==0; //@line 2675 "parsermodule.c"
        if ($34) { __label__ = 23; break; } else { __label__ = 4; break; } //@line 2675 "parsermodule.c"
      case 4: // $bb2
        var $35=$tree_addr; //@line 2675 "parsermodule.c"
        var $36=$35+20; //@line 2675 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2675 "parsermodule.c"
        var $38=$tree_addr; //@line 2675 "parsermodule.c"
        var $39=$38+16; //@line 2675 "parsermodule.c"
        var $40=HEAP[$39]; //@line 2675 "parsermodule.c"
        var $41=($40) + -4; //@line 2675 "parsermodule.c"
        var $42=$37+24*$41; //@line 2675 "parsermodule.c"
        $n_addr_i1=$42;
        $t_addr_i2=1;
        var $43=$n_addr_i1; //@line 956 "parsermodule.c"
        var $44=$43; //@line 956 "parsermodule.c"
        var $45=HEAP[$44]; //@line 956 "parsermodule.c"
        var $46=($45); //@line 956 "parsermodule.c"
        var $47=$t_addr_i2; //@line 956 "parsermodule.c"
        var $48=($46)!=($47); //@line 956 "parsermodule.c"
        if ($48) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 956 "parsermodule.c"
      case 5: // $validate_ntype_exit7_thread
        var $49=$n_addr_i1; //@line 957 "parsermodule.c"
        var $50=$49; //@line 957 "parsermodule.c"
        var $51=HEAP[$50]; //@line 957 "parsermodule.c"
        var $52=($51); //@line 957 "parsermodule.c"
        var $53=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $54=$t_addr_i2; //@line 957 "parsermodule.c"
        var $55=_PyErr_Format($53, __str49, $54, $52); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i3=0; //@line 959 "parsermodule.c"
        __label__ = 23; break;
      case 6: // $bb3
        $3=1; //@line 961 "parsermodule.c"
        $retval_i3=1; //@line 959 "parsermodule.c"
        var $56=$tree_addr; //@line 2675 "parsermodule.c"
        var $57=$56+20; //@line 2675 "parsermodule.c"
        var $58=HEAP[$57]; //@line 2675 "parsermodule.c"
        var $59=$tree_addr; //@line 2675 "parsermodule.c"
        var $60=$59+16; //@line 2675 "parsermodule.c"
        var $61=HEAP[$60]; //@line 2675 "parsermodule.c"
        var $62=($61) + -2; //@line 2675 "parsermodule.c"
        var $63=$58+24*$62; //@line 2675 "parsermodule.c"
        var $64=_validate_terminal($63, 11, __str54); //@line 2675 "parsermodule.c"
        var $65=($64)==0; //@line 2675 "parsermodule.c"
        if ($65) { __label__ = 23; break; } else { __label__ = 7; break; } //@line 2675 "parsermodule.c"
      case 7: // $bb4
        var $66=$tree_addr; //@line 2675 "parsermodule.c"
        var $67=$66+20; //@line 2675 "parsermodule.c"
        var $68=HEAP[$67]; //@line 2675 "parsermodule.c"
        var $69=$tree_addr; //@line 2675 "parsermodule.c"
        var $70=$69+16; //@line 2675 "parsermodule.c"
        var $71=HEAP[$70]; //@line 2675 "parsermodule.c"
        var $72=($71) + -3; //@line 2675 "parsermodule.c"
        var $73=$68+24*$72; //@line 2675 "parsermodule.c"
        $tree_addr_i=$73;
        var $74=$tree_addr_i; //@line 1109 "parsermodule.c"
        var $75=$74+16; //@line 1109 "parsermodule.c"
        var $76=HEAP[$75]; //@line 1109 "parsermodule.c"
        $nch_i=$76; //@line 1109 "parsermodule.c"
        var $77=$tree_addr_i; //@line 1110 "parsermodule.c"
        $n_addr_i_i=$77;
        $t_addr_i_i=263;
        var $78=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $79=$78; //@line 956 "parsermodule.c"
        var $80=HEAP[$79]; //@line 956 "parsermodule.c"
        var $81=($80); //@line 956 "parsermodule.c"
        var $82=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $83=($81)!=($82); //@line 956 "parsermodule.c"
        if ($83) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 956 "parsermodule.c"
      case 8: // $validate_ntype_exit_thread_i
        var $84=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $85=$84; //@line 957 "parsermodule.c"
        var $86=HEAP[$85]; //@line 957 "parsermodule.c"
        var $87=($86); //@line 957 "parsermodule.c"
        var $88=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $89=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $90=_PyErr_Format($88, __str49, $89, $87); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 16; break;
      case 9: // $bb_i9
        $1=1; //@line 961 "parsermodule.c"
        $retval_i_i=1; //@line 959 "parsermodule.c"
        var $91=$nch_i; //@line 1110 "parsermodule.c"
        var $92=($91)==2; //@line 1110 "parsermodule.c"
        var $93=$nch_i; //@line 1110 "parsermodule.c"
        var $94=($93)==3; //@line 1110 "parsermodule.c"
        var $or_cond_i=($92) | ($94);
        if ($or_cond_i) { __label__ = 10; break; } else { __label__ = 16; break; } //@line 1110 "parsermodule.c"
      case 10: // $bb5_i
        $iftmp_74_i=1; //@line 1110 "parsermodule.c"
        $res_i=1; //@line 1110 "parsermodule.c"
        var $95=$tree_addr_i; //@line 1113 "parsermodule.c"
        var $96=$95+20; //@line 1113 "parsermodule.c"
        var $97=HEAP[$96]; //@line 1113 "parsermodule.c"
        var $98=$97; //@line 1113 "parsermodule.c"
        var $99=_validate_terminal($98, 7, __str55); //@line 1113 "parsermodule.c"
        var $100=($99)==0; //@line 1113 "parsermodule.c"
        if ($100) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1113 "parsermodule.c"
      case 11: // $bb6_i
        var $101=$tree_addr_i; //@line 1113 "parsermodule.c"
        var $102=$101+20; //@line 1113 "parsermodule.c"
        var $103=HEAP[$102]; //@line 1113 "parsermodule.c"
        var $104=$nch_i; //@line 1113 "parsermodule.c"
        var $105=($104) - 1; //@line 1113 "parsermodule.c"
        var $106=$103+24*$105; //@line 1113 "parsermodule.c"
        var $107=_validate_terminal($106, 8, __str56); //@line 1113 "parsermodule.c"
        var $108=($107)==0; //@line 1113 "parsermodule.c"
        if ($108) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1113 "parsermodule.c"
      case 12: // $validate_parameters_exit_thread
        $iftmp_75_i=0; //@line 1113 "parsermodule.c"
        $res_i=0; //@line 1113 "parsermodule.c"
        $2=0; //@line 1121 "parsermodule.c"
        $retval_i8=0; //@line 1121 "parsermodule.c"
        __label__ = 23; break;
      case 13: // $bb10_i
        $iftmp_75_i=1; //@line 1113 "parsermodule.c"
        $res_i=1; //@line 1113 "parsermodule.c"
        var $109=$nch_i; //@line 1115 "parsermodule.c"
        var $110=($109)==3; //@line 1115 "parsermodule.c"
        if ($110) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1115 "parsermodule.c"
      case 14: // $validate_parameters_exit_thread10
        $2=1; //@line 1121 "parsermodule.c"
        $retval_i8=1; //@line 1121 "parsermodule.c"
        __label__ = 21; break;
      case 15: // $bb11_i
        var $111=$tree_addr_i; //@line 1116 "parsermodule.c"
        var $112=$111+20; //@line 1116 "parsermodule.c"
        var $113=HEAP[$112]; //@line 1116 "parsermodule.c"
        var $114=$113+24; //@line 1116 "parsermodule.c"
        var $115=_validate_varargslist($114); //@line 1116 "parsermodule.c"
        $res_i=$115; //@line 1116 "parsermodule.c"
        __lastLabel__ = 15; __label__ = 20; break; //@line 1116 "parsermodule.c"
      case 16: // $bb13_i
        $iftmp_74_i=0; //@line 1110 "parsermodule.c"
        $res_i=0; //@line 1110 "parsermodule.c"
        var $116=$tree_addr_i; //@line 1113 "parsermodule.c"
        $n_addr_i2_i=$116;
        $num_addr_i_i=2;
        $name_addr_i_i=__str60;
        var $117=$n_addr_i2_i; //@line 975 "parsermodule.c"
        var $118=$117+16; //@line 975 "parsermodule.c"
        var $119=HEAP[$118]; //@line 975 "parsermodule.c"
        var $120=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $121=($119)!=($120); //@line 975 "parsermodule.c"
        if ($121) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 975 "parsermodule.c"
      case 17: // $bb_i4_i
        var $122=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $123=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $124=_PyErr_Format($122, __str50, $123); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 19; break; //@line 978 "parsermodule.c"
      case 18: // $bb1_i5_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 19; break; //@line 980 "parsermodule.c"
      case 19: // $validate_numnodes_exit_i
        var $125=$0; //@line 978 "parsermodule.c"
        $retval_i3_i=$125; //@line 978 "parsermodule.c"
        var $_pr=$res_i;
        __lastLabel__ = 19; __label__ = 20; break; //@line 1119 "parsermodule.c"
      case 20: // $validate_parameters_exit
        var $126=__lastLabel__ == 15 ? $115 : ($_pr);
        $2=$126; //@line 1121 "parsermodule.c"
        $retval_i8=$126; //@line 1121 "parsermodule.c"
        var $127=($126)==0; //@line 2675 "parsermodule.c"
        if ($127) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 2675 "parsermodule.c"
      case 21: // $bb5
        var $128=$tree_addr; //@line 2675 "parsermodule.c"
        var $129=$128+20; //@line 2675 "parsermodule.c"
        var $130=HEAP[$129]; //@line 2675 "parsermodule.c"
        var $131=$tree_addr; //@line 2675 "parsermodule.c"
        var $132=$131+16; //@line 2675 "parsermodule.c"
        var $133=HEAP[$132]; //@line 2675 "parsermodule.c"
        var $134=($133) + -1; //@line 2675 "parsermodule.c"
        var $135=$130+24*$134; //@line 2675 "parsermodule.c"
        var $136=_validate_suite($135); //@line 2675 "parsermodule.c"
        var $137=($136)==0; //@line 2675 "parsermodule.c"
        if ($137) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 2675 "parsermodule.c"
      case 22: // $bb6
        $iftmp_186=1; //@line 2675 "parsermodule.c"
        __label__ = 24; break; //@line 2675 "parsermodule.c"
      case 23: // $bb7
        $iftmp_186=0; //@line 2675 "parsermodule.c"
        __label__ = 24; break; //@line 2675 "parsermodule.c"
      case 24: // $bb8
        var $138=$iftmp_186; //@line 2675 "parsermodule.c"
        $ok=$138; //@line 2675 "parsermodule.c"
        var $139=$ok; //@line 2676 "parsermodule.c"
        $5=$139; //@line 2676 "parsermodule.c"
        var $140=$5; //@line 2676 "parsermodule.c"
        $retval=$140; //@line 2676 "parsermodule.c"
        var $retval9=$retval; //@line 2676 "parsermodule.c"
        ;
        return $retval9; //@line 2676 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_arglist($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i4;
        var $message_addr_i3;
        var $message_addr_i2;
        var $message_addr_i1;
        var $message_addr_i;
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $iftmp_194;
        var $iftmp_193;
        var $iftmp_192;
        var $1;
        var $nch;
        var $i;
        var $ok;
        var $ch;
        var $sym;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2742 "parsermodule.c"
        var $3=$2+16; //@line 2742 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2742 "parsermodule.c"
        $nch=$4; //@line 2742 "parsermodule.c"
        $i=0; //@line 2743 "parsermodule.c"
        $ok=1; //@line 2744 "parsermodule.c"
        var $5=$nch; //@line 2746 "parsermodule.c"
        var $6=($5) <= 0; //@line 2746 "parsermodule.c"
        var $7=$nch; //@line 2748 "parsermodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 2746 "parsermodule.c"
      case 1: // $bb
        var $8=($7) + 1; //@line 2748 "parsermodule.c"
        var $9=$tree_addr; //@line 2748 "parsermodule.c"
        $n_addr_i=$9;
        $num_addr_i=$8;
        $name_addr_i=__str159;
        var $10=$n_addr_i; //@line 975 "parsermodule.c"
        var $11=$10+16; //@line 975 "parsermodule.c"
        var $12=HEAP[$11]; //@line 975 "parsermodule.c"
        var $13=$num_addr_i; //@line 975 "parsermodule.c"
        var $14=($12)!=($13); //@line 975 "parsermodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 975 "parsermodule.c"
      case 2: // $bb_i
        var $15=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $16=$name_addr_i; //@line 976 "parsermodule.c"
        var $17=_PyErr_Format($15, __str50, $16); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 4; break; //@line 978 "parsermodule.c"
      case 3: // $bb1_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 4; break; //@line 980 "parsermodule.c"
      case 4: // $validate_numnodes_exit
        var $18=$0; //@line 978 "parsermodule.c"
        $retval_i=$18; //@line 978 "parsermodule.c"
        var $retval3_i=$retval_i; //@line 978 "parsermodule.c"
        $1=$retval3_i; //@line 2748 "parsermodule.c"
        __label__ = 49; break; //@line 2748 "parsermodule.c"
      case 5: // $bb1
        var $19=($7) > 1; //@line 2750 "parsermodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 17; break; } //@line 2750 "parsermodule.c"
      case 6: // $bb2
        $i=0; //@line 2751 "parsermodule.c"
        __label__ = 12; break; //@line 2751 "parsermodule.c"
      case 7: // $bb3
        var $20=$tree_addr; //@line 2752 "parsermodule.c"
        var $21=$20+20; //@line 2752 "parsermodule.c"
        var $22=HEAP[$21]; //@line 2752 "parsermodule.c"
        var $23=$i; //@line 2752 "parsermodule.c"
        var $24=$22+24*$23; //@line 2752 "parsermodule.c"
        var $25=$24; //@line 2752 "parsermodule.c"
        var $26=HEAP[$25]; //@line 2752 "parsermodule.c"
        var $27=($26)==331; //@line 2752 "parsermodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 2752 "parsermodule.c"
      case 8: // $bb4
        var $28=$tree_addr; //@line 2753 "parsermodule.c"
        var $29=$28+20; //@line 2753 "parsermodule.c"
        var $30=HEAP[$29]; //@line 2753 "parsermodule.c"
        var $31=$i; //@line 2753 "parsermodule.c"
        var $32=$30+24*$31; //@line 2753 "parsermodule.c"
        $ch=$32; //@line 2753 "parsermodule.c"
        var $33=$ch; //@line 2754 "parsermodule.c"
        var $34=$33+16; //@line 2754 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2754 "parsermodule.c"
        var $36=($35)==2; //@line 2754 "parsermodule.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 2754 "parsermodule.c"
      case 9: // $bb5
        var $37=$ch; //@line 2754 "parsermodule.c"
        var $38=$37+20; //@line 2754 "parsermodule.c"
        var $39=HEAP[$38]; //@line 2754 "parsermodule.c"
        var $40=$39+24; //@line 2754 "parsermodule.c"
        var $41=$40; //@line 2754 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2754 "parsermodule.c"
        var $43=($42)==336; //@line 2754 "parsermodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2754 "parsermodule.c"
      case 10: // $bb6
        $message_addr_i=__str160;
        var $44=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $45=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($44, $45); //@line 531 "parsermodule.c"
        $1=0; //@line 2756 "parsermodule.c"
        __label__ = 49; break; //@line 2756 "parsermodule.c"
      case 11: // $bb7
        var $46=$i; //@line 2751 "parsermodule.c"
        var $47=($46) + 1; //@line 2751 "parsermodule.c"
        $i=$47; //@line 2751 "parsermodule.c"
        __label__ = 12; break; //@line 2751 "parsermodule.c"
      case 12: // $bb8
        var $48=$i; //@line 2751 "parsermodule.c"
        var $49=$nch; //@line 2751 "parsermodule.c"
        var $50=($48) < ($49); //@line 2751 "parsermodule.c"
        if ($50) { __label__ = 7; break; } else { __label__ = 17; break; } //@line 2751 "parsermodule.c"
      case 13: // $bb10
        var $51=$tree_addr; //@line 2764 "parsermodule.c"
        var $52=$51+20; //@line 2764 "parsermodule.c"
        var $53=HEAP[$52]; //@line 2764 "parsermodule.c"
        var $54=$i; //@line 2764 "parsermodule.c"
        var $55=$53+24*$54; //@line 2764 "parsermodule.c"
        var $56=_validate_argument($55); //@line 2764 "parsermodule.c"
        var $57=($56)==0; //@line 2764 "parsermodule.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 2764 "parsermodule.c"
      case 14: // $bb11
        var $58=$tree_addr; //@line 2764 "parsermodule.c"
        var $59=$58+20; //@line 2764 "parsermodule.c"
        var $60=HEAP[$59]; //@line 2764 "parsermodule.c"
        var $61=$i; //@line 2764 "parsermodule.c"
        var $62=($61) + 1; //@line 2764 "parsermodule.c"
        var $63=$60+24*$62; //@line 2764 "parsermodule.c"
        var $64=_validate_terminal($63, 12, __str52); //@line 2764 "parsermodule.c"
        var $65=($64)==0; //@line 2764 "parsermodule.c"
        if ($65) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 2764 "parsermodule.c"
      case 15: // $bb15
        $iftmp_192=1; //@line 2764 "parsermodule.c"
        $ok=1; //@line 2764 "parsermodule.c"
        var $66=$i; //@line 2767 "parsermodule.c"
        var $67=($66) + 2; //@line 2767 "parsermodule.c"
        $i=$67; //@line 2767 "parsermodule.c"
        __lastLabel__ = 15; __label__ = 18; break; //@line 2767 "parsermodule.c"
      case 16: // $bb16
        $iftmp_192=0; //@line 2764 "parsermodule.c"
        $ok=0; //@line 2764 "parsermodule.c"
        _PyErr_Clear(); //@line 2769 "parsermodule.c"
        __label__ = 17; break; //@line 2769 "parsermodule.c"
      case 17: // $bb17thread_pre_split
        var $_pr=$ok;
        __lastLabel__ = 17; __label__ = 18; break;
      case 18: // $bb17
        var $68=__lastLabel__ == 17 ? $_pr : (1);
        var $69=($68)==0; //@line 2762 "parsermodule.c"
        if ($69) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 2762 "parsermodule.c"
      case 19: // $bb18
        var $70=$nch; //@line 2762 "parsermodule.c"
        var $71=$i; //@line 2762 "parsermodule.c"
        var $72=($70) - ($71); //@line 2762 "parsermodule.c"
        var $73=($72) > 1; //@line 2762 "parsermodule.c"
        if ($73) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 2762 "parsermodule.c"
      case 20: // $bb19
        $ok=1; //@line 2771 "parsermodule.c"
        var $74=$nch; //@line 2772 "parsermodule.c"
        var $75=$i; //@line 2772 "parsermodule.c"
        var $76=($74) - ($75); //@line 2772 "parsermodule.c"
        var $77=($76) > 0; //@line 2772 "parsermodule.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 48; break; } //@line 2772 "parsermodule.c"
      case 21: // $bb20
        var $78=$tree_addr; //@line 2776 "parsermodule.c"
        var $79=$78+20; //@line 2776 "parsermodule.c"
        var $80=HEAP[$79]; //@line 2776 "parsermodule.c"
        var $81=$i; //@line 2776 "parsermodule.c"
        var $82=$80+24*$81; //@line 2776 "parsermodule.c"
        var $83=$82; //@line 2776 "parsermodule.c"
        var $84=HEAP[$83]; //@line 2776 "parsermodule.c"
        var $85=($84); //@line 2776 "parsermodule.c"
        $sym=$85; //@line 2776 "parsermodule.c"
        var $86=$sym; //@line 2778 "parsermodule.c"
        var $87=($86)==331; //@line 2778 "parsermodule.c"
        if ($87) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 2778 "parsermodule.c"
      case 22: // $bb21
        var $88=$tree_addr; //@line 2779 "parsermodule.c"
        var $89=$88+20; //@line 2779 "parsermodule.c"
        var $90=HEAP[$89]; //@line 2779 "parsermodule.c"
        var $91=$i; //@line 2779 "parsermodule.c"
        var $92=$90+24*$91; //@line 2779 "parsermodule.c"
        var $93=_validate_argument($92); //@line 2779 "parsermodule.c"
        $ok=$93; //@line 2779 "parsermodule.c"
        var $94=$ok; //@line 2780 "parsermodule.c"
        var $95=($94)!=0; //@line 2780 "parsermodule.c"
        if ($95) { __label__ = 23; break; } else { __label__ = 48; break; } //@line 2780 "parsermodule.c"
      case 23: // $bb22
        var $96=$i; //@line 2780 "parsermodule.c"
        var $97=($96) + 1; //@line 2780 "parsermodule.c"
        var $98=$nch; //@line 2780 "parsermodule.c"
        var $99=($97)!=($98); //@line 2780 "parsermodule.c"
        if ($99) { __label__ = 24; break; } else { __label__ = 48; break; } //@line 2780 "parsermodule.c"
      case 24: // $bb23
        $message_addr_i1=__str161;
        var $100=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $101=$message_addr_i1; //@line 531 "parsermodule.c"
        _PyErr_SetString($100, $101); //@line 531 "parsermodule.c"
        $ok=0; //@line 2783 "parsermodule.c"
        __label__ = 48; break; //@line 2783 "parsermodule.c"
      case 25: // $bb25
        var $102=$sym; //@line 2786 "parsermodule.c"
        var $103=($102)==16; //@line 2786 "parsermodule.c"
        if ($103) { __label__ = 26; break; } else { __label__ = 39; break; } //@line 2786 "parsermodule.c"
      case 26: // $bb26
        var $104=$tree_addr; //@line 2787 "parsermodule.c"
        var $105=$104+20; //@line 2787 "parsermodule.c"
        var $106=HEAP[$105]; //@line 2787 "parsermodule.c"
        var $107=$i; //@line 2787 "parsermodule.c"
        var $108=$106+24*$107; //@line 2787 "parsermodule.c"
        var $109=_validate_terminal($108, 16, __str162); //@line 2787 "parsermodule.c"
        $ok=$109; //@line 2787 "parsermodule.c"
        var $110=$ok; //@line 2788 "parsermodule.c"
        var $111=($110)==0; //@line 2788 "parsermodule.c"
        if ($111) { __label__ = 38; break; } else { __label__ = 27; break; } //@line 2788 "parsermodule.c"
      case 27: // $bb27
        var $112=$nch; //@line 2788 "parsermodule.c"
        var $113=$i; //@line 2788 "parsermodule.c"
        var $114=($112) - ($113); //@line 2788 "parsermodule.c"
        var $115=($114)!=2; //@line 2788 "parsermodule.c"
        if ($115) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 2788 "parsermodule.c"
      case 28: // $bb28
        var $116=$tree_addr; //@line 2789 "parsermodule.c"
        var $117=$116+20; //@line 2789 "parsermodule.c"
        var $118=HEAP[$117]; //@line 2789 "parsermodule.c"
        var $119=$i; //@line 2789 "parsermodule.c"
        var $120=($119) + 1; //@line 2789 "parsermodule.c"
        var $121=$118+24*$120; //@line 2789 "parsermodule.c"
        var $122=_validate_test($121); //@line 2789 "parsermodule.c"
        $ok=$122; //@line 2789 "parsermodule.c"
        __label__ = 48; break; //@line 2789 "parsermodule.c"
      case 29: // $bb29
        var $_pr5=$ok;
        var $123=($_pr5)==0; //@line 2790 "parsermodule.c"
        if ($123) { __label__ = 38; break; } else { __label__ = 30; break; } //@line 2790 "parsermodule.c"
      case 30: // $bb30
        var $124=$nch; //@line 2790 "parsermodule.c"
        var $125=$i; //@line 2790 "parsermodule.c"
        var $126=($124) - ($125); //@line 2790 "parsermodule.c"
        var $127=($126)!=5; //@line 2790 "parsermodule.c"
        if ($127) { __label__ = 38; break; } else { __label__ = 31; break; } //@line 2790 "parsermodule.c"
      case 31: // $bb31
        var $128=$tree_addr; //@line 2791 "parsermodule.c"
        var $129=$128+20; //@line 2791 "parsermodule.c"
        var $130=HEAP[$129]; //@line 2791 "parsermodule.c"
        var $131=$i; //@line 2791 "parsermodule.c"
        var $132=($131) + 1; //@line 2791 "parsermodule.c"
        var $133=$130+24*$132; //@line 2791 "parsermodule.c"
        var $134=_validate_test($133); //@line 2791 "parsermodule.c"
        var $135=($134)==0; //@line 2791 "parsermodule.c"
        if ($135) { __label__ = 36; break; } else { __label__ = 32; break; } //@line 2791 "parsermodule.c"
      case 32: // $bb32
        var $136=$tree_addr; //@line 2791 "parsermodule.c"
        var $137=$136+20; //@line 2791 "parsermodule.c"
        var $138=HEAP[$137]; //@line 2791 "parsermodule.c"
        var $139=$i; //@line 2791 "parsermodule.c"
        var $140=($139) + 2; //@line 2791 "parsermodule.c"
        var $141=$138+24*$140; //@line 2791 "parsermodule.c"
        var $142=_validate_terminal($141, 12, __str52); //@line 2791 "parsermodule.c"
        var $143=($142)==0; //@line 2791 "parsermodule.c"
        if ($143) { __label__ = 36; break; } else { __label__ = 33; break; } //@line 2791 "parsermodule.c"
      case 33: // $bb33
        var $144=$tree_addr; //@line 2791 "parsermodule.c"
        var $145=$144+20; //@line 2791 "parsermodule.c"
        var $146=HEAP[$145]; //@line 2791 "parsermodule.c"
        var $147=$i; //@line 2791 "parsermodule.c"
        var $148=($147) + 3; //@line 2791 "parsermodule.c"
        var $149=$146+24*$148; //@line 2791 "parsermodule.c"
        var $150=_validate_terminal($149, 36, __str67); //@line 2791 "parsermodule.c"
        var $151=($150)==0; //@line 2791 "parsermodule.c"
        if ($151) { __label__ = 36; break; } else { __label__ = 34; break; } //@line 2791 "parsermodule.c"
      case 34: // $bb34
        var $152=$tree_addr; //@line 2791 "parsermodule.c"
        var $153=$152+20; //@line 2791 "parsermodule.c"
        var $154=HEAP[$153]; //@line 2791 "parsermodule.c"
        var $155=$i; //@line 2791 "parsermodule.c"
        var $156=($155) + 4; //@line 2791 "parsermodule.c"
        var $157=$154+24*$156; //@line 2791 "parsermodule.c"
        var $158=_validate_test($157); //@line 2791 "parsermodule.c"
        var $159=($158)==0; //@line 2791 "parsermodule.c"
        if ($159) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 2791 "parsermodule.c"
      case 35: // $bb35
        $iftmp_193=1; //@line 2791 "parsermodule.c"
        __label__ = 37; break; //@line 2791 "parsermodule.c"
      case 36: // $bb36
        $iftmp_193=0; //@line 2791 "parsermodule.c"
        __label__ = 37; break; //@line 2791 "parsermodule.c"
      case 37: // $bb37
        var $160=$iftmp_193; //@line 2791 "parsermodule.c"
        $ok=$160; //@line 2791 "parsermodule.c"
        __label__ = 48; break; //@line 2791 "parsermodule.c"
      case 38: // $bb38
        $message_addr_i2=__str163;
        var $161=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $162=$message_addr_i2; //@line 531 "parsermodule.c"
        _PyErr_SetString($161, $162); //@line 531 "parsermodule.c"
        $ok=0; //@line 2797 "parsermodule.c"
        __label__ = 48; break; //@line 2797 "parsermodule.c"
      case 39: // $bb40
        var $163=$sym; //@line 2800 "parsermodule.c"
        var $164=($163)==36; //@line 2800 "parsermodule.c"
        if ($164) { __label__ = 40; break; } else { __label__ = 47; break; } //@line 2800 "parsermodule.c"
      case 40: // $bb41
        var $165=$nch; //@line 2801 "parsermodule.c"
        var $166=$i; //@line 2801 "parsermodule.c"
        var $167=($165) - ($166); //@line 2801 "parsermodule.c"
        var $168=($167)==2; //@line 2801 "parsermodule.c"
        if ($168) { __label__ = 41; break; } else { __label__ = 46; break; } //@line 2801 "parsermodule.c"
      case 41: // $bb42
        var $169=$tree_addr; //@line 2802 "parsermodule.c"
        var $170=$169+20; //@line 2802 "parsermodule.c"
        var $171=HEAP[$170]; //@line 2802 "parsermodule.c"
        var $172=$i; //@line 2802 "parsermodule.c"
        var $173=$171+24*$172; //@line 2802 "parsermodule.c"
        var $174=_validate_terminal($173, 36, __str67); //@line 2802 "parsermodule.c"
        var $175=($174)==0; //@line 2802 "parsermodule.c"
        if ($175) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 2802 "parsermodule.c"
      case 42: // $bb43
        var $176=$tree_addr; //@line 2802 "parsermodule.c"
        var $177=$176+20; //@line 2802 "parsermodule.c"
        var $178=HEAP[$177]; //@line 2802 "parsermodule.c"
        var $179=$i; //@line 2802 "parsermodule.c"
        var $180=($179) + 1; //@line 2802 "parsermodule.c"
        var $181=$178+24*$180; //@line 2802 "parsermodule.c"
        var $182=_validate_test($181); //@line 2802 "parsermodule.c"
        var $183=($182)==0; //@line 2802 "parsermodule.c"
        if ($183) { __label__ = 44; break; } else { __label__ = 43; break; } //@line 2802 "parsermodule.c"
      case 43: // $bb44
        $iftmp_194=1; //@line 2802 "parsermodule.c"
        __label__ = 45; break; //@line 2802 "parsermodule.c"
      case 44: // $bb45
        $iftmp_194=0; //@line 2802 "parsermodule.c"
        __label__ = 45; break; //@line 2802 "parsermodule.c"
      case 45: // $bb46
        var $184=$iftmp_194; //@line 2802 "parsermodule.c"
        $ok=$184; //@line 2802 "parsermodule.c"
        __label__ = 48; break; //@line 2802 "parsermodule.c"
      case 46: // $bb47
        $message_addr_i3=__str164;
        var $185=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $186=$message_addr_i3; //@line 531 "parsermodule.c"
        _PyErr_SetString($185, $186); //@line 531 "parsermodule.c"
        $ok=0; //@line 2806 "parsermodule.c"
        __label__ = 48; break; //@line 2806 "parsermodule.c"
      case 47: // $bb49
        $message_addr_i4=__str165;
        var $187=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $188=$message_addr_i4; //@line 531 "parsermodule.c"
        _PyErr_SetString($187, $188); //@line 531 "parsermodule.c"
        $ok=0; //@line 2811 "parsermodule.c"
        __label__ = 48; break; //@line 2811 "parsermodule.c"
      case 48: // $bb50
        var $189=$ok; //@line 2814 "parsermodule.c"
        $1=$189; //@line 2814 "parsermodule.c"
        __label__ = 49; break; //@line 2814 "parsermodule.c"
      case 49: // $bb51
        var $190=$1; //@line 2748 "parsermodule.c"
        $retval=$190; //@line 2748 "parsermodule.c"
        var $retval52=$retval; //@line 2748 "parsermodule.c"
        ;
        return $retval52; //@line 2748 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_argument($tree) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_196;
        var $iftmp_195;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 2826 "parsermodule.c"
        var $3=$2+16; //@line 2826 "parsermodule.c"
        var $4=HEAP[$3]; //@line 2826 "parsermodule.c"
        $nch=$4; //@line 2826 "parsermodule.c"
        var $5=$tree_addr; //@line 2829 "parsermodule.c"
        $n_addr_i=$5;
        $t_addr_i=331;
        var $6=$n_addr_i; //@line 956 "parsermodule.c"
        var $7=$6; //@line 956 "parsermodule.c"
        var $8=HEAP[$7]; //@line 956 "parsermodule.c"
        var $9=($8); //@line 956 "parsermodule.c"
        var $10=$t_addr_i; //@line 956 "parsermodule.c"
        var $11=($9)!=($10); //@line 956 "parsermodule.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $12=$n_addr_i; //@line 957 "parsermodule.c"
        var $13=$12; //@line 957 "parsermodule.c"
        var $14=HEAP[$13]; //@line 957 "parsermodule.c"
        var $15=($14); //@line 957 "parsermodule.c"
        var $16=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $17=$t_addr_i; //@line 957 "parsermodule.c"
        var $18=_PyErr_Format($16, __str49, $17, $15); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 6; break;
      case 2: // $bb
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $19=$nch; //@line 2829 "parsermodule.c"
        var $20=($19)==1; //@line 2829 "parsermodule.c"
        var $21=$nch; //@line 2829 "parsermodule.c"
        var $22=($21)==2; //@line 2829 "parsermodule.c"
        var $or_cond=($20) | ($22);
        var $23=$nch; //@line 2829 "parsermodule.c"
        var $24=($23)==3; //@line 2829 "parsermodule.c"
        var $or_cond3=($or_cond) | ($24);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2829 "parsermodule.c"
      case 3: // $bb3
        var $25=$tree_addr; //@line 2829 "parsermodule.c"
        var $26=$25+20; //@line 2829 "parsermodule.c"
        var $27=HEAP[$26]; //@line 2829 "parsermodule.c"
        var $28=$27; //@line 2829 "parsermodule.c"
        var $29=_validate_test($28); //@line 2829 "parsermodule.c"
        var $30=($29)==0; //@line 2829 "parsermodule.c"
        if ($30) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 2829 "parsermodule.c"
      case 4: // $bb7
        $iftmp_195=1; //@line 2829 "parsermodule.c"
        $res=1; //@line 2829 "parsermodule.c"
        var $31=$nch; //@line 2831 "parsermodule.c"
        var $32=($31)!=2; //@line 2831 "parsermodule.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 2831 "parsermodule.c"
      case 5: // $bb8
        var $33=$tree_addr; //@line 2832 "parsermodule.c"
        var $34=$33+20; //@line 2832 "parsermodule.c"
        var $35=HEAP[$34]; //@line 2832 "parsermodule.c"
        var $36=$35+24; //@line 2832 "parsermodule.c"
        var $37=_validate_comp_for($36); //@line 2832 "parsermodule.c"
        $res=$37; //@line 2832 "parsermodule.c"
        __label__ = 13; break; //@line 2832 "parsermodule.c"
      case 6: // $bb9
        $iftmp_195=0; //@line 2829 "parsermodule.c"
        $res=0; //@line 2829 "parsermodule.c"
        __label__ = 13; break;
      case 7: // $bb10
        var $38=$nch; //@line 2833 "parsermodule.c"
        var $39=($38)==3; //@line 2833 "parsermodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 2833 "parsermodule.c"
      case 8: // $bb11
        var $40=$tree_addr; //@line 2834 "parsermodule.c"
        var $41=$40+20; //@line 2834 "parsermodule.c"
        var $42=HEAP[$41]; //@line 2834 "parsermodule.c"
        var $43=$42+24; //@line 2834 "parsermodule.c"
        var $44=_validate_terminal($43, 22, __str70); //@line 2834 "parsermodule.c"
        var $45=($44)==0; //@line 2834 "parsermodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 2834 "parsermodule.c"
      case 9: // $bb12
        var $46=$tree_addr; //@line 2834 "parsermodule.c"
        var $47=$46+20; //@line 2834 "parsermodule.c"
        var $48=HEAP[$47]; //@line 2834 "parsermodule.c"
        var $49=$48+48; //@line 2834 "parsermodule.c"
        var $50=_validate_test($49); //@line 2834 "parsermodule.c"
        var $51=($50)==0; //@line 2834 "parsermodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2834 "parsermodule.c"
      case 10: // $bb13
        $iftmp_196=1; //@line 2834 "parsermodule.c"
        __label__ = 12; break; //@line 2834 "parsermodule.c"
      case 11: // $bb14
        $iftmp_196=0; //@line 2834 "parsermodule.c"
        __label__ = 12; break; //@line 2834 "parsermodule.c"
      case 12: // $bb15
        var $52=$iftmp_196; //@line 2834 "parsermodule.c"
        $res=$52; //@line 2834 "parsermodule.c"
        __label__ = 13; break; //@line 2834 "parsermodule.c"
      case 13: // $bb16
        var $53=$res; //@line 2837 "parsermodule.c"
        $1=$53; //@line 2837 "parsermodule.c"
        var $54=$1; //@line 2837 "parsermodule.c"
        $retval=$54; //@line 2837 "parsermodule.c"
        var $retval17=$retval; //@line 2837 "parsermodule.c"
        ;
        return $retval17; //@line 2837 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_subscript($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i6_i;
        var $num_addr_i7_i;
        var $name_addr_i8_i;
        var $retval_i9_i;
        var $0;
        var $n_addr_i1_i;
        var $t_addr_i_i;
        var $retval_i2_i;
        var $1;
        var $n_addr_i_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i_i;
        var $2;
        var $tree_addr_i;
        var $retval_i7;
        var $3;
        var $iftmp_202_i;
        var $nch_i;
        var $res_i;
        var $n_addr_i2;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i3;
        var $4;
        var $message_addr_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $5;
        var $tree_addr;
        var $retval;
        var $iftmp_201;
        var $6;
        var $iftmp_200;
        var $offset;
        var $nch;
        var $res;
        var $rem;
        $tree_addr=$tree;
        $offset=0; //@line 2899 "parsermodule.c"
        var $7=$tree_addr; //@line 2900 "parsermodule.c"
        var $8=$7+16; //@line 2900 "parsermodule.c"
        var $9=HEAP[$8]; //@line 2900 "parsermodule.c"
        $nch=$9; //@line 2900 "parsermodule.c"
        var $10=$tree_addr; //@line 2901 "parsermodule.c"
        $n_addr_i=$10;
        $t_addr_i=324;
        var $11=$n_addr_i; //@line 956 "parsermodule.c"
        var $12=$11; //@line 956 "parsermodule.c"
        var $13=HEAP[$12]; //@line 956 "parsermodule.c"
        var $14=($13); //@line 956 "parsermodule.c"
        var $15=$t_addr_i; //@line 956 "parsermodule.c"
        var $16=($14)!=($15); //@line 956 "parsermodule.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 956 "parsermodule.c"
      case 1: // $validate_ntype_exit_thread
        var $17=$n_addr_i; //@line 957 "parsermodule.c"
        var $18=$17; //@line 957 "parsermodule.c"
        var $19=HEAP[$18]; //@line 957 "parsermodule.c"
        var $20=($19); //@line 957 "parsermodule.c"
        var $21=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $22=$t_addr_i; //@line 957 "parsermodule.c"
        var $23=_PyErr_Format($21, __str49, $22, $20); //@line 957 "parsermodule.c"
        $5=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 3; break;
      case 2: // $bb
        $5=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        var $24=$nch; //@line 2901 "parsermodule.c"
        var $25=($24) <= 0; //@line 2901 "parsermodule.c"
        var $26=$nch; //@line 2901 "parsermodule.c"
        var $27=($26) > 4; //@line 2901 "parsermodule.c"
        var $or_cond=($25) | ($27);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2901 "parsermodule.c"
      case 3: // $bb5
        $iftmp_200=0; //@line 2901 "parsermodule.c"
        $res=0; //@line 2901 "parsermodule.c"
        var $28=_PyErr_Occurred(); //@line 2904 "parsermodule.c"
        var $29=($28)==0; //@line 2904 "parsermodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2904 "parsermodule.c"
      case 4: // $bb6
        $message_addr_i=__str168;
        var $30=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $31=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($30, $31); //@line 531 "parsermodule.c"
        __label__ = 5; break; //@line 2905 "parsermodule.c"
      case 5: // $bb7
        $6=0; //@line 2906 "parsermodule.c"
        __label__ = 54; break; //@line 2906 "parsermodule.c"
      case 6: // $bb8
        $iftmp_200=1; //@line 2901 "parsermodule.c"
        $res=1; //@line 2901 "parsermodule.c"
        var $32=$tree_addr; //@line 2908 "parsermodule.c"
        var $33=$32+20; //@line 2908 "parsermodule.c"
        var $34=HEAP[$33]; //@line 2908 "parsermodule.c"
        var $35=$34; //@line 2908 "parsermodule.c"
        var $36=$35; //@line 2908 "parsermodule.c"
        var $37=HEAP[$36]; //@line 2908 "parsermodule.c"
        var $38=($37)==23; //@line 2908 "parsermodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 2908 "parsermodule.c"
      case 7: // $bb9
        var $39=$tree_addr; //@line 2910 "parsermodule.c"
        $n_addr_i2=$39;
        $num_addr_i=3;
        $name_addr_i=__str169;
        var $40=$n_addr_i2; //@line 975 "parsermodule.c"
        var $41=$40+16; //@line 975 "parsermodule.c"
        var $42=HEAP[$41]; //@line 975 "parsermodule.c"
        var $43=$num_addr_i; //@line 975 "parsermodule.c"
        var $44=($42)!=($43); //@line 975 "parsermodule.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 975 "parsermodule.c"
      case 8: // $validate_numnodes_exit_thread
        var $45=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $46=$name_addr_i; //@line 976 "parsermodule.c"
        var $47=_PyErr_Format($45, __str50, $46); //@line 976 "parsermodule.c"
        $4=0; //@line 978 "parsermodule.c"
        $retval_i3=0; //@line 978 "parsermodule.c"
        __label__ = 13; break;
      case 9: // $bb10
        $4=1; //@line 980 "parsermodule.c"
        $retval_i3=1; //@line 978 "parsermodule.c"
        var $48=$tree_addr; //@line 2910 "parsermodule.c"
        var $49=$48+20; //@line 2910 "parsermodule.c"
        var $50=HEAP[$49]; //@line 2910 "parsermodule.c"
        var $51=$50; //@line 2910 "parsermodule.c"
        var $52=_validate_terminal($51, 23, __str114); //@line 2910 "parsermodule.c"
        var $53=($52)==0; //@line 2910 "parsermodule.c"
        if ($53) { __label__ = 13; break; } else { __label__ = 10; break; } //@line 2910 "parsermodule.c"
      case 10: // $bb11
        var $54=$tree_addr; //@line 2910 "parsermodule.c"
        var $55=$54+20; //@line 2910 "parsermodule.c"
        var $56=HEAP[$55]; //@line 2910 "parsermodule.c"
        var $57=$56+24; //@line 2910 "parsermodule.c"
        var $58=_validate_terminal($57, 23, __str114); //@line 2910 "parsermodule.c"
        var $59=($58)==0; //@line 2910 "parsermodule.c"
        if ($59) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 2910 "parsermodule.c"
      case 11: // $bb12
        var $60=$tree_addr; //@line 2910 "parsermodule.c"
        var $61=$60+20; //@line 2910 "parsermodule.c"
        var $62=HEAP[$61]; //@line 2910 "parsermodule.c"
        var $63=$62+48; //@line 2910 "parsermodule.c"
        var $64=_validate_terminal($63, 23, __str114); //@line 2910 "parsermodule.c"
        var $65=($64)==0; //@line 2910 "parsermodule.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2910 "parsermodule.c"
      case 12: // $bb13
        $iftmp_201=1; //@line 2910 "parsermodule.c"
        __label__ = 14; break; //@line 2910 "parsermodule.c"
      case 13: // $bb14
        $iftmp_201=0; //@line 2910 "parsermodule.c"
        __label__ = 14; break; //@line 2910 "parsermodule.c"
      case 14: // $bb15
        var $66=$iftmp_201; //@line 2910 "parsermodule.c"
        $6=$66; //@line 2910 "parsermodule.c"
        __label__ = 54; break; //@line 2910 "parsermodule.c"
      case 15: // $bb16
        var $67=$nch; //@line 2914 "parsermodule.c"
        var $68=($67)==1; //@line 2914 "parsermodule.c"
        var $69=$tree_addr; //@line 2915 "parsermodule.c"
        var $70=$69+20; //@line 2915 "parsermodule.c"
        var $71=HEAP[$70]; //@line 2915 "parsermodule.c"
        var $72=$71; //@line 2915 "parsermodule.c"
        var $73=$72; //@line 2915 "parsermodule.c"
        var $74=HEAP[$73]; //@line 2915 "parsermodule.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 2914 "parsermodule.c"
      case 16: // $bb17
        var $75=($74)==304; //@line 2915 "parsermodule.c"
        var $76=$tree_addr; //@line 2916 "parsermodule.c"
        var $77=$76+20; //@line 2916 "parsermodule.c"
        var $78=HEAP[$77]; //@line 2916 "parsermodule.c"
        var $79=$78; //@line 2916 "parsermodule.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2915 "parsermodule.c"
      case 17: // $bb18
        var $80=_validate_test($79); //@line 2916 "parsermodule.c"
        $res=$80; //@line 2916 "parsermodule.c"
        __label__ = 19; break; //@line 2916 "parsermodule.c"
      case 18: // $bb19
        var $81=_validate_terminal($79, 11, __str54); //@line 2918 "parsermodule.c"
        $res=$81; //@line 2918 "parsermodule.c"
        __label__ = 19; break; //@line 2918 "parsermodule.c"
      case 19: // $bb20
        var $82=$res; //@line 2919 "parsermodule.c"
        $6=$82; //@line 2919 "parsermodule.c"
        __label__ = 54; break; //@line 2919 "parsermodule.c"
      case 20: // $bb21
        var $83=($74)!=11; //@line 2925 "parsermodule.c"
        if ($83) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 2925 "parsermodule.c"
      case 21: // $bb22
        var $84=$nch; //@line 2925 "parsermodule.c"
        var $85=($84)==4; //@line 2925 "parsermodule.c"
        if ($85) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2925 "parsermodule.c"
      case 22: // $bb23
        var $86=$tree_addr; //@line 2926 "parsermodule.c"
        var $87=$86+20; //@line 2926 "parsermodule.c"
        var $88=HEAP[$87]; //@line 2926 "parsermodule.c"
        var $89=$88; //@line 2926 "parsermodule.c"
        var $90=_validate_test($89); //@line 2926 "parsermodule.c"
        $res=$90; //@line 2926 "parsermodule.c"
        $offset=1; //@line 2927 "parsermodule.c"
        __lastLabel__ = 22; __label__ = 24; break; //@line 2927 "parsermodule.c"
      case 23: // $bb24thread_pre_split
        var $_pr=$res;
        __lastLabel__ = 23; __label__ = 24; break;
      case 24: // $bb24
        var $91=__lastLabel__ == 23 ? $_pr : ($90);
        var $92=($91)!=0; //@line 2929 "parsermodule.c"
        if ($92) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2929 "parsermodule.c"
      case 25: // $bb25
        var $93=$tree_addr; //@line 2930 "parsermodule.c"
        var $94=$93+20; //@line 2930 "parsermodule.c"
        var $95=HEAP[$94]; //@line 2930 "parsermodule.c"
        var $96=$offset; //@line 2930 "parsermodule.c"
        var $97=$95+24*$96; //@line 2930 "parsermodule.c"
        var $98=_validate_terminal($97, 11, __str54); //@line 2930 "parsermodule.c"
        $res=$98; //@line 2930 "parsermodule.c"
        __lastLabel__ = 25; __label__ = 27; break; //@line 2930 "parsermodule.c"
      case 26: // $bb26thread_pre_split
        var $_pr10=$res;
        __lastLabel__ = 26; __label__ = 27; break;
      case 27: // $bb26
        var $99=__lastLabel__ == 26 ? $_pr10 : ($98);
        var $100=($99)!=0; //@line 2931 "parsermodule.c"
        if ($100) { __label__ = 28; break; } else { __label__ = 53; break; } //@line 2931 "parsermodule.c"
      case 28: // $bb27
        var $101=$offset; //@line 2932 "parsermodule.c"
        var $102=($101) + 1; //@line 2932 "parsermodule.c"
        $offset=$102; //@line 2932 "parsermodule.c"
        var $103=$nch; //@line 2932 "parsermodule.c"
        var $104=$offset; //@line 2932 "parsermodule.c"
        var $105=($103) - ($104); //@line 2932 "parsermodule.c"
        $rem=$105; //@line 2932 "parsermodule.c"
        var $106=$rem; //@line 2933 "parsermodule.c"
        var $107=($106)!=0; //@line 2933 "parsermodule.c"
        if ($107) { __label__ = 29; break; } else { __label__ = 53; break; } //@line 2933 "parsermodule.c"
      case 29: // $bb28
        var $108=$tree_addr; //@line 2934 "parsermodule.c"
        var $109=$108+20; //@line 2934 "parsermodule.c"
        var $110=HEAP[$109]; //@line 2934 "parsermodule.c"
        var $111=$offset; //@line 2934 "parsermodule.c"
        var $112=$110+24*$111; //@line 2934 "parsermodule.c"
        var $113=$112; //@line 2934 "parsermodule.c"
        var $114=HEAP[$113]; //@line 2934 "parsermodule.c"
        var $115=($114)==304; //@line 2934 "parsermodule.c"
        if ($115) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 2934 "parsermodule.c"
      case 30: // $bb29
        var $116=$tree_addr; //@line 2935 "parsermodule.c"
        var $117=$116+20; //@line 2935 "parsermodule.c"
        var $118=HEAP[$117]; //@line 2935 "parsermodule.c"
        var $119=$offset; //@line 2935 "parsermodule.c"
        var $120=$118+24*$119; //@line 2935 "parsermodule.c"
        var $121=_validate_test($120); //@line 2935 "parsermodule.c"
        $res=$121; //@line 2935 "parsermodule.c"
        var $122=$offset; //@line 2936 "parsermodule.c"
        var $123=($122) + 1; //@line 2936 "parsermodule.c"
        $offset=$123; //@line 2936 "parsermodule.c"
        var $124=$rem; //@line 2937 "parsermodule.c"
        var $125=($124) - 1; //@line 2937 "parsermodule.c"
        $rem=$125; //@line 2937 "parsermodule.c"
        __label__ = 31; break; //@line 2937 "parsermodule.c"
      case 31: // $bb30
        var $126=$res; //@line 2939 "parsermodule.c"
        var $127=($126)!=0; //@line 2939 "parsermodule.c"
        if ($127) { __label__ = 32; break; } else { __label__ = 53; break; } //@line 2939 "parsermodule.c"
      case 32: // $bb31
        var $128=$rem; //@line 2939 "parsermodule.c"
        var $129=($128)!=0; //@line 2939 "parsermodule.c"
        if ($129) { __label__ = 33; break; } else { __label__ = 53; break; } //@line 2939 "parsermodule.c"
      case 33: // $bb32
        var $130=$tree_addr; //@line 2940 "parsermodule.c"
        var $131=$130+20; //@line 2940 "parsermodule.c"
        var $132=HEAP[$131]; //@line 2940 "parsermodule.c"
        var $133=$offset; //@line 2940 "parsermodule.c"
        var $134=$132+24*$133; //@line 2940 "parsermodule.c"
        $tree_addr_i=$134;
        var $135=$tree_addr_i; //@line 2950 "parsermodule.c"
        var $136=$135+16; //@line 2950 "parsermodule.c"
        var $137=HEAP[$136]; //@line 2950 "parsermodule.c"
        $nch_i=$137; //@line 2950 "parsermodule.c"
        var $138=$nch_i; //@line 2952 "parsermodule.c"
        var $139=($138)==1; //@line 2952 "parsermodule.c"
        if ($139) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 2952 "parsermodule.c"
      case 34: // $bb_i8
        var $140=$tree_addr_i; //@line 2952 "parsermodule.c"
        $n_addr_i_i=$140;
        $num_addr_i_i=2;
        $name_addr_i_i=__str170;
        var $141=$n_addr_i_i; //@line 975 "parsermodule.c"
        var $142=$141+16; //@line 975 "parsermodule.c"
        var $143=HEAP[$142]; //@line 975 "parsermodule.c"
        var $144=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $145=($143)!=($144); //@line 975 "parsermodule.c"
        if ($145) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 975 "parsermodule.c"
      case 35: // $validate_numnodes_exit_thread_i
        $2=1; //@line 980 "parsermodule.c"
        $retval_i_i=1; //@line 978 "parsermodule.c"
        __label__ = 37; break;
      case 36: // $validate_numnodes_exit_i
        var $146=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $147=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $148=_PyErr_Format($146, __str50, $147); //@line 976 "parsermodule.c"
        $2=0; //@line 978 "parsermodule.c"
        $retval_i_i=0; //@line 978 "parsermodule.c"
        __label__ = 40; break;
      case 37: // $bb1_i9
        var $149=$tree_addr_i; //@line 2952 "parsermodule.c"
        $n_addr_i1_i=$149;
        $t_addr_i_i=325;
        var $150=$n_addr_i1_i; //@line 956 "parsermodule.c"
        var $151=$150; //@line 956 "parsermodule.c"
        var $152=HEAP[$151]; //@line 956 "parsermodule.c"
        var $153=($152); //@line 956 "parsermodule.c"
        var $154=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $155=($153)!=($154); //@line 956 "parsermodule.c"
        if ($155) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 956 "parsermodule.c"
      case 38: // $validate_ntype_exit_thread_i
        var $156=$n_addr_i1_i; //@line 957 "parsermodule.c"
        var $157=$156; //@line 957 "parsermodule.c"
        var $158=HEAP[$157]; //@line 957 "parsermodule.c"
        var $159=($158); //@line 957 "parsermodule.c"
        var $160=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $161=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $162=_PyErr_Format($160, __str49, $161, $159); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i2_i=0; //@line 959 "parsermodule.c"
        __label__ = 40; break;
      case 39: // $bb7_thread_i
        $1=1; //@line 961 "parsermodule.c"
        $retval_i2_i=1; //@line 959 "parsermodule.c"
        $iftmp_202_i=1; //@line 2952 "parsermodule.c"
        $res_i=1; //@line 2952 "parsermodule.c"
        __label__ = 47; break;
      case 40: // $bb5_i
        $iftmp_202_i=0; //@line 2952 "parsermodule.c"
        $res_i=0; //@line 2952 "parsermodule.c"
        var $163=_PyErr_Occurred(); //@line 2953 "parsermodule.c"
        var $164=($163)==0; //@line 2953 "parsermodule.c"
        if ($164) { __label__ = 41; break; } else { __label__ = 45; break; } //@line 2953 "parsermodule.c"
      case 41: // $bb6_i
        var $165=$tree_addr_i; //@line 2954 "parsermodule.c"
        $n_addr_i6_i=$165;
        $num_addr_i7_i=1;
        $name_addr_i8_i=__str170;
        var $166=$n_addr_i6_i; //@line 975 "parsermodule.c"
        var $167=$166+16; //@line 975 "parsermodule.c"
        var $168=HEAP[$167]; //@line 975 "parsermodule.c"
        var $169=$num_addr_i7_i; //@line 975 "parsermodule.c"
        var $170=($168)!=($169); //@line 975 "parsermodule.c"
        if ($170) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 975 "parsermodule.c"
      case 42: // $bb_i10_i
        var $171=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $172=$name_addr_i8_i; //@line 976 "parsermodule.c"
        var $173=_PyErr_Format($171, __str50, $172); //@line 976 "parsermodule.c"
        $0=0; //@line 978 "parsermodule.c"
        __label__ = 44; break; //@line 978 "parsermodule.c"
      case 43: // $bb1_i11_i
        $0=1; //@line 980 "parsermodule.c"
        __label__ = 44; break; //@line 980 "parsermodule.c"
      case 44: // $validate_numnodes_exit13_i
        var $174=$0; //@line 978 "parsermodule.c"
        $retval_i9_i=$174; //@line 978 "parsermodule.c"
        var $retval3_i12_i=$retval_i9_i; //@line 978 "parsermodule.c"
        $res_i=$retval3_i12_i; //@line 2954 "parsermodule.c"
        __lastLabel__ = 44; __label__ = 46; break; //@line 2954 "parsermodule.c"
      case 45: // $bb7thread_pre_split_i
        var $_pr_i=$res_i;
        __lastLabel__ = 45; __label__ = 46; break;
      case 46: // $bb7_i
        var $175=__lastLabel__ == 45 ? $_pr_i : ($retval3_i12_i);
        var $176=($175)!=0; //@line 2956 "parsermodule.c"
        if ($176) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 2956 "parsermodule.c"
      case 47: // $bb8_i
        var $177=$tree_addr_i; //@line 2957 "parsermodule.c"
        var $178=$177+20; //@line 2957 "parsermodule.c"
        var $179=HEAP[$178]; //@line 2957 "parsermodule.c"
        var $180=$179; //@line 2957 "parsermodule.c"
        var $181=_validate_terminal($180, 11, __str54); //@line 2957 "parsermodule.c"
        $res_i=$181; //@line 2957 "parsermodule.c"
        __lastLabel__ = 47; __label__ = 49; break; //@line 2957 "parsermodule.c"
      case 48: // $bb9thread_pre_split_i
        var $_pr14_i=$res_i;
        __lastLabel__ = 48; __label__ = 49; break;
      case 49: // $bb9_i
        var $182=__lastLabel__ == 48 ? $_pr14_i : ($181);
        var $183=($182)!=0; //@line 2958 "parsermodule.c"
        if ($183) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 2958 "parsermodule.c"
      case 50: // $bb10_i
        var $184=$nch_i; //@line 2958 "parsermodule.c"
        var $185=($184)==2; //@line 2958 "parsermodule.c"
        if ($185) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 2958 "parsermodule.c"
      case 51: // $bb11_i
        var $186=$tree_addr_i; //@line 2959 "parsermodule.c"
        var $187=$186+20; //@line 2959 "parsermodule.c"
        var $188=HEAP[$187]; //@line 2959 "parsermodule.c"
        var $189=$188+24; //@line 2959 "parsermodule.c"
        var $190=_validate_test($189); //@line 2959 "parsermodule.c"
        $res_i=$190; //@line 2959 "parsermodule.c"
        __label__ = 52; break; //@line 2959 "parsermodule.c"
      case 52: // $validate_sliceop_exit
        var $191=$res_i; //@line 2961 "parsermodule.c"
        $3=$191; //@line 2961 "parsermodule.c"
        var $192=$3; //@line 2961 "parsermodule.c"
        $retval_i7=$192; //@line 2961 "parsermodule.c"
        var $retval13_i=$retval_i7; //@line 2961 "parsermodule.c"
        $res=$retval13_i; //@line 2940 "parsermodule.c"
        __label__ = 53; break; //@line 2940 "parsermodule.c"
      case 53: // $bb33
        var $193=$res; //@line 2943 "parsermodule.c"
        $6=$193; //@line 2943 "parsermodule.c"
        __label__ = 54; break; //@line 2943 "parsermodule.c"
      case 54: // $bb34
        var $194=$6; //@line 2906 "parsermodule.c"
        $retval=$194; //@line 2906 "parsermodule.c"
        var $retval35=$retval; //@line 2906 "parsermodule.c"
        ;
        return $retval35; //@line 2906 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_node($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $n_addr_i583;
        var $t_addr_i;
        var $retval_i584;
        var $0;
        var $n_addr_i_i_i542;
        var $t_addr_i_i_i543;
        var $retval_i_i_i544;
        var $1;
        var $tree_addr_i_i545;
        var $retval_i1_i546;
        var $2;
        var $iftmp_183_i_i;
        var $iftmp_182_i_i;
        var $nch_i_i547;
        var $ok_i_i548;
        var $n_addr_i_i549;
        var $t_addr_i_i550;
        var $retval_i_i551;
        var $3;
        var $tree_addr_i552;
        var $retval_i553;
        var $4;
        var $iftmp_184_i;
        var $i_i554;
        var $nch_i555;
        var $ok_i556;
        var $n_addr_i_i_i_i;
        var $t_addr_i_i_i_i;
        var $retval_i_i_i_i;
        var $5;
        var $tree_addr_i_i_i502;
        var $retval_i1_i_i;
        var $6;
        var $iftmp_180_i_i_i;
        var $iftmp_179_i_i_i;
        var $ok_i_i_i;
        var $nch_i_i_i;
        var $n_addr_i_i_i503;
        var $t_addr_i_i_i504;
        var $retval_i_i_i505;
        var $7;
        var $tree_addr_i_i506;
        var $retval_i1_i507;
        var $8;
        var $iftmp_181_i_i;
        var $i_i_i508;
        var $nch_i_i509;
        var $ok_i_i;
        var $n_addr_i_i510;
        var $t_addr_i_i511;
        var $retval_i_i512;
        var $9;
        var $tree_addr_i513;
        var $retval_i514;
        var $10;
        var $iftmp_189_i;
        var $iftmp_188_i;
        var $iftmp_187_i;
        var $nch_i515;
        var $ok_i;
        var $n_addr_i8_i;
        var $num_addr_i9_i;
        var $name_addr_i10_i;
        var $retval_i11_i431;
        var $11;
        var $n_addr_i_i_i;
        var $t_addr_i_i_i;
        var $retval_i_i_i432;
        var $12;
        var $tree_addr_i_i433;
        var $retval_i6_i434;
        var $13;
        var $iftmp_143_i_i;
        var $iftmp_142_i_i;
        var $nch_i_i435;
        var $res_i_i436;
        var $n_addr_i1_i437;
        var $num_addr_i_i438;
        var $name_addr_i_i439;
        var $retval_i2_i440;
        var $14;
        var $n_addr_i_i441;
        var $t_addr_i_i442;
        var $retval_i_i443;
        var $15;
        var $tree_addr_i444;
        var $retval_i445;
        var $iftmp_141_i;
        var $iftmp_140_i;
        var $iftmp_139_i;
        var $16;
        var $iftmp_138_i;
        var $iftmp_136_i;
        var $iftmp_135_i;
        var $nch_i446;
        var $pos_i;
        var $res_i447;
        var $name_i;
        var $tree_addr_i3_i;
        var $retval_i4_i397;
        var $17;
        var $tree_addr_i_i398;
        var $retval_i2_i399;
        var $18;
        var $n_addr_i_i400;
        var $t_addr_i_i401;
        var $retval_i_i402;
        var $19;
        var $tree_addr_i403;
        var $retval_i404;
        var $20;
        var $iftmp_134_i;
        var $iftmp_133_i;
        var $nch_i405;
        var $res_i406;
        var $n_addr_i_i368;
        var $t_addr_i_i369;
        var $retval_i_i370;
        var $21;
        var $tree_addr_i371;
        var $retval_i372;
        var $22;
        var $iftmp_132_i;
        var $iftmp_131_i;
        var $nch_i373;
        var $res_i374;
        var $n_addr_i6_i314;
        var $num_addr_i7_i;
        var $name_addr_i8_i;
        var $retval_i9_i;
        var $23;
        var $n_addr_i1_i315;
        var $num_addr_i_i316;
        var $name_addr_i_i317;
        var $retval_i2_i318;
        var $24;
        var $n_addr_i_i319;
        var $t_addr_i_i320;
        var $retval_i_i321;
        var $25;
        var $tree_addr_i322;
        var $retval_i323;
        var $26;
        var $iftmp_73_i;
        var $iftmp_71_i;
        var $iftmp_70_i;
        var $nch_i324;
        var $res_i325;
        var $j_i326;
        var $message_addr_i_i295;
        var $n_addr_i_i296;
        var $num_addr_i_i297;
        var $name_addr_i_i298;
        var $retval_i_i299;
        var $27;
        var $tree_addr_i300;
        var $retval_i301;
        var $28;
        var $nch_i302;
        var $res_i303;
        var $ntype_i;
        var $tree_addr_i_i276;
        var $retval_i6_i;
        var $29;
        var $iftmp_117_i_i;
        var $iftmp_116_i_i;
        var $nch_i_i;
        var $res_i_i;
        var $i_i_i277;
        var $n_addr_i1_i278;
        var $num_addr_i_i279;
        var $name_addr_i_i280;
        var $retval_i2_i281;
        var $30;
        var $n_addr_i_i282;
        var $t_addr_i_i283;
        var $retval_i_i284;
        var $31;
        var $tree_addr_i285;
        var $retval_i286;
        var $iftmp_119_i;
        var $32;
        var $n_addr_i_i247;
        var $t_addr_i_i248;
        var $retval_i1_i249;
        var $33;
        var $tree_addr_i_i250;
        var $retval_i_i251;
        var $34;
        var $i_i_i;
        var $tree_addr_i252;
        var $retval_i253;
        var $35;
        var $iftmp_121_i;
        var $iftmp_120_i;
        var $nch_i254;
        var $ndots_i;
        var $havename_i;
        var $offset_i;
        var $res_i255;
        var $n_addr_i6_i210;
        var $num_addr_i_i211;
        var $name_addr_i_i212;
        var $retval_i7_i;
        var $36;
        var $n_addr_i_i213;
        var $t_addr_i_i214;
        var $retval_i_i215;
        var $37;
        var $tree_addr_i216;
        var $retval_i217;
        var $38;
        var $iftmp_109_i;
        var $iftmp_108_i;
        var $iftmp_107_i;
        var $iftmp_106_i;
        var $nch_i218;
        var $res_i219;
        var $tree_addr_i_i192;
        var $retval_i2_i193;
        var $39;
        var $n_addr_i_i194;
        var $t_addr_i_i195;
        var $retval_i_i196;
        var $40;
        var $tree_addr_i197;
        var $retval_i198;
        var $41;
        var $iftmp_105_i;
        var $nch_i199;
        var $res_i200;
        var $n_addr_i183;
        var $num_addr_i184;
        var $name_addr_i185;
        var $retval_i186;
        var $42;
        var $n_addr_i174;
        var $num_addr_i175;
        var $name_addr_i176;
        var $retval_i177;
        var $43;
        var $n_addr_i165;
        var $num_addr_i166;
        var $name_addr_i167;
        var $retval_i168;
        var $44;
        var $tree_addr_i_i149;
        var $retval_i1_i150;
        var $45;
        var $n_addr_i_i151;
        var $num_addr_i_i152;
        var $name_addr_i_i153;
        var $retval_i_i154;
        var $46;
        var $tree_addr_i155;
        var $retval_i156;
        var $iftmp_104_i;
        var $47;
        var $n_addr_i13_i;
        var $num_addr_i14_i;
        var $name_addr_i15_i;
        var $retval_i16_i;
        var $48;
        var $n_addr_i6_i;
        var $t_addr_i7_i;
        var $retval_i8_i108;
        var $49;
        var $n_addr_i1_i109;
        var $num_addr_i_i110;
        var $name_addr_i_i111;
        var $retval_i2_i112;
        var $50;
        var $n_addr_i_i113;
        var $t_addr_i_i114;
        var $retval_i_i115;
        var $51;
        var $tree_addr_i116;
        var $retval_i117;
        var $52;
        var $iftmp_103_i;
        var $iftmp_102_i;
        var $iftmp_101_i;
        var $nch_i118;
        var $res_i119;
        var $sym_i;
        var $i_i;
        var $allow_trailing_comma_i;
        var $tree_addr_i_i12_i;
        var $retval_i_i13_i;
        var $53;
        var $tree_addr_i14_i;
        var $retval_i15_i;
        var $54;
        var $message_addr_i_i76;
        var $tree_addr_i_i_i;
        var $retval_i_i_i;
        var $55;
        var $tree_addr_i7_i;
        var $retval_i8_i;
        var $56;
        var $n_addr_i2_i77;
        var $num_addr_i_i78;
        var $name_addr_i_i79;
        var $retval_i3_i;
        var $57;
        var $tree_addr_i_i;
        var $retval_i1_i;
        var $58;
        var $n_addr_i_i80;
        var $t_addr_i_i81;
        var $retval_i_i82;
        var $59;
        var $tree_addr_i83;
        var $retval_i84;
        var $60;
        var $iftmp_100_i;
        var $iftmp_99_i;
        var $iftmp_98_i;
        var $iftmp_97_i;
        var $j_i85;
        var $nch_i86;
        var $res_i87;
        var $s_i;
        var $n_addr_i9_i;
        var $t_addr_i10_i;
        var $retval_i11_i;
        var $61;
        var $n_addr_i2_i;
        var $t_addr_i3_i;
        var $retval_i4_i;
        var $62;
        var $message_addr_i_i49;
        var $n_addr_i_i50;
        var $t_addr_i_i51;
        var $retval_i_i52;
        var $63;
        var $tree_addr_i53;
        var $retval_i54;
        var $64;
        var $iftmp_125_i;
        var $iftmp_124_i;
        var $iftmp_123_i;
        var $j_i;
        var $nch_i55;
        var $res_i56;
        var $message_addr_i_i28;
        var $n_addr_i_i29;
        var $t_addr_i_i30;
        var $retval_i_i31;
        var $65;
        var $tree_addr_i32;
        var $retval_i33;
        var $66;
        var $iftmp_128_i;
        var $iftmp_127_i;
        var $iftmp_126_i;
        var $nch_i34;
        var $res_i35;
        var $n_addr_i1_i;
        var $num_addr_i_i;
        var $name_addr_i_i;
        var $retval_i2_i;
        var $67;
        var $n_addr_i_i18;
        var $t_addr_i_i19;
        var $retval_i_i20;
        var $68;
        var $tree_addr_i21;
        var $retval_i22;
        var $iftmp_111_i;
        var $69;
        var $message_addr_i17;
        var $n_addr_i;
        var $num_addr_i;
        var $name_addr_i;
        var $retval_i13;
        var $70;
        var $message_addr_i_i;
        var $n_addr_i_i;
        var $t_addr_i_i;
        var $retval_i_i;
        var $71;
        var $tree_addr_i9;
        var $retval_i10;
        var $72;
        var $iftmp_130_i;
        var $iftmp_129_i;
        var $nch_i;
        var $res_i;
        var $tree_addr_i6;
        var $retval_i7;
        var $73;
        var $tree_addr_i3;
        var $retval_i4;
        var $74;
        var $tree_addr_i1;
        var $retval_i2;
        var $75;
        var $tree_addr_i;
        var $retval_i;
        var $iftmp_166_i;
        var $76;
        var $message_addr_i;
        var $tree_addr;
        var $retval;
        var $77;
        var $iftmp_212;
        var $iftmp_211;
        var $iftmp_210;
        var $iftmp_209;
        var $nch;
        var $res;
        var $next;
        $tree_addr=$tree;
        $nch=0; //@line 3074 "parsermodule.c"
        $res=1; //@line 3075 "parsermodule.c"
        $next=0; //@line 3076 "parsermodule.c"
        __lastLabel__ = -1; __label__ = 524; break; //@line 3076 "parsermodule.c"
      case 1: // $bb
        var $78=$tree_addr; //@line 3079 "parsermodule.c"
        var $79=$78+16; //@line 3079 "parsermodule.c"
        var $80=HEAP[$79]; //@line 3079 "parsermodule.c"
        $nch=$80; //@line 3079 "parsermodule.c"
        $next=0; //@line 3080 "parsermodule.c"
        var $81=$tree_addr; //@line 3081 "parsermodule.c"
        var $82=$81; //@line 3081 "parsermodule.c"
        var $83=HEAP[$82]; //@line 3081 "parsermodule.c"
        var $84=($83); //@line 3081 "parsermodule.c"
        if ($84 == 261) {
          __label__ = 28; break;
        }
        else if ($84 == 262) {
          __label__ = 2; break;
        }
        else if ($84 == 267) {
          __label__ = 68; break;
        }
        else if ($84 == 268) {
          __label__ = 88; break;
        }
        else if ($84 == 269) {
          __label__ = 69; break;
        }
        else if ($84 == 270) {
          __label__ = 90; break;
        }
        else if ($84 == 272) {
          __label__ = 130; break;
        }
        else if ($84 == 273) {
          __label__ = 168; break;
        }
        else if ($84 == 274) {
          __label__ = 175; break;
        }
        else if ($84 == 275) {
          __label__ = 70; break;
        }
        else if ($84 == 276) {
          __label__ = 181; break;
        }
        else if ($84 == 277) {
          __label__ = 187; break;
        }
        else if ($84 == 278) {
          __label__ = 193; break;
        }
        else if ($84 == 279) {
          __label__ = 80; break;
        }
        else if ($84 == 280) {
          __label__ = 201; break;
        }
        else if ($84 == 281) {
          __label__ = 233; break;
        }
        else if ($84 == 282) {
          __label__ = 240; break;
        }
        else if ($84 == 283) {
          __label__ = 261; break;
        }
        else if ($84 == 289) {
          __label__ = 286; break;
        }
        else if ($84 == 290) {
          __label__ = 309; break;
        }
        else if ($84 == 291) {
          __label__ = 333; break;
        }
        else if ($84 == 292) {
          __label__ = 89; break;
        }
        else if ($84 == 293) {
          __label__ = 349; break;
        }
        else if ($84 == 294) {
          __label__ = 386; break;
        }
        else if ($84 == 295) {
          __label__ = 402; break;
        }
        else if ($84 == 296) {
          __label__ = 420; break;
        }
        else if ($84 == 297) {
          __label__ = 3; break;
        }
        else if ($84 == 300) {
          __label__ = 498; break;
        }
        else if ($84 == 304) {
          __label__ = 502; break;
        }
        else if ($84 == 306) {
          __label__ = 503; break;
        }
        else if ($84 == 307) {
          __label__ = 504; break;
        }
        else if ($84 == 308) {
          __label__ = 505; break;
        }
        else if ($84 == 309) {
          __label__ = 507; break;
        }
        else if ($84 == 310) {
          __label__ = 508; break;
        }
        else if ($84 == 311) {
          __label__ = 509; break;
        }
        else if ($84 == 312) {
          __label__ = 510; break;
        }
        else if ($84 == 313) {
          __label__ = 511; break;
        }
        else if ($84 == 314) {
          __label__ = 517; break;
        }
        else if ($84 == 315) {
          __label__ = 518; break;
        }
        else if ($84 == 316) {
          __label__ = 519; break;
        }
        else if ($84 == 317) {
          __label__ = 520; break;
        }
        else if ($84 == 318) {
          __label__ = 521; break;
        }
        else if ($84 == 326) {
          __label__ = 506; break;
        }
        else if ($84 == 327) {
          __label__ = 499; break;
        }
        else if ($84 == 329) {
          __label__ = 27; break;
        }
        else if ($84 == 338) {
          __label__ = 501; break;
        }
        else if ($84 == 340) {
          __label__ = 500; break;
        }
        else {
        __label__ = 522; break;
        }
        
      case 2: // $bb1
        var $85=$tree_addr; //@line 3086 "parsermodule.c"
        var $86=_validate_funcdef($85); //@line 3086 "parsermodule.c"
        $res=$86; //@line 3086 "parsermodule.c"
        __label__ = 523; break; //@line 3086 "parsermodule.c"
      case 3: // $bb2
        var $87=$tree_addr; //@line 3089 "parsermodule.c"
        $tree_addr_i552=$87;
        var $88=$tree_addr_i552; //@line 2649 "parsermodule.c"
        var $89=$88+16; //@line 2649 "parsermodule.c"
        var $90=HEAP[$89]; //@line 2649 "parsermodule.c"
        $nch_i555=$90; //@line 2649 "parsermodule.c"
        var $91=$tree_addr_i552; //@line 2654 "parsermodule.c"
        $n_addr_i_i549=$91;
        $t_addr_i_i550=297;
        var $92=$n_addr_i_i549; //@line 956 "parsermodule.c"
        var $93=$92; //@line 956 "parsermodule.c"
        var $94=HEAP[$93]; //@line 956 "parsermodule.c"
        var $95=($94); //@line 956 "parsermodule.c"
        var $96=$t_addr_i_i550; //@line 956 "parsermodule.c"
        var $97=($95)!=($96); //@line 956 "parsermodule.c"
        if ($97) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 956 "parsermodule.c"
      case 4: // $validate_ntype_exit_i560_thread
        var $98=$n_addr_i_i549; //@line 957 "parsermodule.c"
        var $99=$98; //@line 957 "parsermodule.c"
        var $100=HEAP[$99]; //@line 957 "parsermodule.c"
        var $101=($100); //@line 957 "parsermodule.c"
        var $102=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $103=$t_addr_i_i550; //@line 957 "parsermodule.c"
        var $104=_PyErr_Format($102, __str49, $103, $101); //@line 957 "parsermodule.c"
        $3=0; //@line 959 "parsermodule.c"
        $retval_i_i551=0; //@line 959 "parsermodule.c"
        __label__ = 10; break;
      case 5: // $bb_i561
        $3=1; //@line 961 "parsermodule.c"
        $retval_i_i551=1; //@line 959 "parsermodule.c"
        var $105=$nch_i555; //@line 2654 "parsermodule.c"
        var $106=($105) & 1; //@line 2654 "parsermodule.c"
        var $107=($106)!=0; //@line 2654 "parsermodule.c"
        if ($107) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 2654 "parsermodule.c"
      case 6: // $bb1_i562
        var $108=$tree_addr_i552; //@line 2654 "parsermodule.c"
        var $109=$108+20; //@line 2654 "parsermodule.c"
        var $110=HEAP[$109]; //@line 2654 "parsermodule.c"
        var $111=$110; //@line 2654 "parsermodule.c"
        var $112=_validate_terminal($111, 1, __str154); //@line 2654 "parsermodule.c"
        var $113=($112)==0; //@line 2654 "parsermodule.c"
        if ($113) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2654 "parsermodule.c"
      case 7: // $bb2_i563
        var $114=$tree_addr_i552; //@line 2654 "parsermodule.c"
        var $115=$114+20; //@line 2654 "parsermodule.c"
        var $116=HEAP[$115]; //@line 2654 "parsermodule.c"
        var $117=$tree_addr_i552; //@line 2654 "parsermodule.c"
        var $118=$117+16; //@line 2654 "parsermodule.c"
        var $119=HEAP[$118]; //@line 2654 "parsermodule.c"
        var $120=($119) + -2; //@line 2654 "parsermodule.c"
        var $121=$116+24*$120; //@line 2654 "parsermodule.c"
        var $122=_validate_terminal($121, 11, __str54); //@line 2654 "parsermodule.c"
        var $123=($122)==0; //@line 2654 "parsermodule.c"
        if ($123) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2654 "parsermodule.c"
      case 8: // $bb3_i564
        var $124=$tree_addr_i552; //@line 2654 "parsermodule.c"
        var $125=$124+20; //@line 2654 "parsermodule.c"
        var $126=HEAP[$125]; //@line 2654 "parsermodule.c"
        var $127=$tree_addr_i552; //@line 2654 "parsermodule.c"
        var $128=$127+16; //@line 2654 "parsermodule.c"
        var $129=HEAP[$128]; //@line 2654 "parsermodule.c"
        var $130=($129) + -1; //@line 2654 "parsermodule.c"
        var $131=$126+24*$130; //@line 2654 "parsermodule.c"
        var $132=_validate_suite($131); //@line 2654 "parsermodule.c"
        var $133=($132)==0; //@line 2654 "parsermodule.c"
        if ($133) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2654 "parsermodule.c"
      case 9: // $bb4_i565
        $iftmp_184_i=1; //@line 2654 "parsermodule.c"
        __label__ = 11; break; //@line 2654 "parsermodule.c"
      case 10: // $bb5_i566
        $iftmp_184_i=0; //@line 2654 "parsermodule.c"
        __label__ = 11; break; //@line 2654 "parsermodule.c"
      case 11: // $bb6_i567
        var $134=$iftmp_184_i; //@line 2654 "parsermodule.c"
        $ok_i556=$134; //@line 2654 "parsermodule.c"
        $i_i554=1; //@line 2655 "parsermodule.c"
        __lastLabel__ = 11; __label__ = 24; break; //@line 2655 "parsermodule.c"
      case 12: // $bb7_i568
        var $135=$tree_addr_i552; //@line 2656 "parsermodule.c"
        var $136=$135+20; //@line 2656 "parsermodule.c"
        var $137=HEAP[$136]; //@line 2656 "parsermodule.c"
        var $138=$i_i554; //@line 2656 "parsermodule.c"
        var $139=$137+24*$138; //@line 2656 "parsermodule.c"
        $tree_addr_i_i545=$139;
        var $140=$tree_addr_i_i545; //@line 2631 "parsermodule.c"
        var $141=$140+16; //@line 2631 "parsermodule.c"
        var $142=HEAP[$141]; //@line 2631 "parsermodule.c"
        $nch_i_i547=$142; //@line 2631 "parsermodule.c"
        var $143=$tree_addr_i_i545; //@line 2634 "parsermodule.c"
        $n_addr_i_i_i542=$143;
        $t_addr_i_i_i543=298;
        var $144=$n_addr_i_i_i542; //@line 956 "parsermodule.c"
        var $145=$144; //@line 956 "parsermodule.c"
        var $146=HEAP[$145]; //@line 956 "parsermodule.c"
        var $147=($146); //@line 956 "parsermodule.c"
        var $148=$t_addr_i_i_i543; //@line 956 "parsermodule.c"
        var $149=($147)!=($148); //@line 956 "parsermodule.c"
        if ($149) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 956 "parsermodule.c"
      case 13: // $validate_ntype_exit_thread_i_i569
        var $150=$n_addr_i_i_i542; //@line 957 "parsermodule.c"
        var $151=$150; //@line 957 "parsermodule.c"
        var $152=HEAP[$151]; //@line 957 "parsermodule.c"
        var $153=($152); //@line 957 "parsermodule.c"
        var $154=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $155=$t_addr_i_i_i543; //@line 957 "parsermodule.c"
        var $156=_PyErr_Format($154, __str49, $155, $153); //@line 957 "parsermodule.c"
        $1=0; //@line 959 "parsermodule.c"
        $retval_i_i_i544=0; //@line 959 "parsermodule.c"
        __label__ = 16; break;
      case 14: // $bb_i2_i571
        $1=1; //@line 961 "parsermodule.c"
        $retval_i_i_i544=1; //@line 959 "parsermodule.c"
        var $157=$nch_i_i547; //@line 2634 "parsermodule.c"
        var $158=($157)==1; //@line 2634 "parsermodule.c"
        var $159=$nch_i_i547; //@line 2634 "parsermodule.c"
        var $160=($159)==3; //@line 2634 "parsermodule.c"
        var $or_cond_i_i570=($158) | ($160);
        if ($or_cond_i_i570) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2634 "parsermodule.c"
      case 15: // $bb2_i_i572
        var $161=$tree_addr_i_i545; //@line 2634 "parsermodule.c"
        var $162=$161+20; //@line 2634 "parsermodule.c"
        var $163=HEAP[$162]; //@line 2634 "parsermodule.c"
        var $164=$163; //@line 2634 "parsermodule.c"
        var $165=_validate_test($164); //@line 2634 "parsermodule.c"
        var $166=($165)==0; //@line 2634 "parsermodule.c"
        if ($166) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2634 "parsermodule.c"
      case 16: // $bb5_i_i573
        $iftmp_182_i_i=0; //@line 2634 "parsermodule.c"
        $ok_i_i548=0; //@line 2634 "parsermodule.c"
        __label__ = 23; break;
      case 17: // $bb6_i_i574
        $iftmp_182_i_i=1; //@line 2634 "parsermodule.c"
        $ok_i_i548=1; //@line 2634 "parsermodule.c"
        var $167=$nch_i_i547; //@line 2635 "parsermodule.c"
        var $168=($167)==3; //@line 2635 "parsermodule.c"
        if ($168) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 2635 "parsermodule.c"
      case 18: // $bb7_i_i575
        var $169=$tree_addr_i_i545; //@line 2636 "parsermodule.c"
        var $170=$169+20; //@line 2636 "parsermodule.c"
        var $171=HEAP[$170]; //@line 2636 "parsermodule.c"
        var $172=$171+24; //@line 2636 "parsermodule.c"
        var $173=_validate_terminal($172, 1, __str112); //@line 2636 "parsermodule.c"
        var $174=($173)==0; //@line 2636 "parsermodule.c"
        if ($174) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 2636 "parsermodule.c"
      case 19: // $bb8_i_i576
        var $175=$tree_addr_i_i545; //@line 2636 "parsermodule.c"
        var $176=$175+20; //@line 2636 "parsermodule.c"
        var $177=HEAP[$176]; //@line 2636 "parsermodule.c"
        var $178=$177+48; //@line 2636 "parsermodule.c"
        var $179=_validate_expr($178); //@line 2636 "parsermodule.c"
        var $180=($179)==0; //@line 2636 "parsermodule.c"
        if ($180) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 2636 "parsermodule.c"
      case 20: // $bb9_i_i577
        $iftmp_183_i_i=1; //@line 2636 "parsermodule.c"
        __label__ = 22; break; //@line 2636 "parsermodule.c"
      case 21: // $bb10_i_i578
        $iftmp_183_i_i=0; //@line 2636 "parsermodule.c"
        __label__ = 22; break; //@line 2636 "parsermodule.c"
      case 22: // $bb11_i_i579
        var $181=$iftmp_183_i_i; //@line 2636 "parsermodule.c"
        $ok_i_i548=$181; //@line 2636 "parsermodule.c"
        __label__ = 23; break; //@line 2636 "parsermodule.c"
      case 23: // $validate_with_item_exit_i
        var $182=$ok_i_i548; //@line 2638 "parsermodule.c"
        $2=$182; //@line 2638 "parsermodule.c"
        var $183=$2; //@line 2638 "parsermodule.c"
        $retval_i1_i546=$183; //@line 2638 "parsermodule.c"
        var $retval13_i_i=$retval_i1_i546; //@line 2638 "parsermodule.c"
        $ok_i556=$retval13_i_i; //@line 2656 "parsermodule.c"
        var $184=$i_i554; //@line 2655 "parsermodule.c"
        var $185=($184) + 2; //@line 2655 "parsermodule.c"
        $i_i554=$185; //@line 2655 "parsermodule.c"
        __lastLabel__ = 23; __label__ = 24; break; //@line 2655 "parsermodule.c"
      case 24: // $bb8_i580
        var $186=__lastLabel__ == 23 ? $retval13_i_i : ($134);
        var $187=($186)==0; //@line 2655 "parsermodule.c"
        if ($187) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 2655 "parsermodule.c"
      case 25: // $bb9_i581
        var $188=$nch_i555; //@line 2655 "parsermodule.c"
        var $189=($188) - 2; //@line 2655 "parsermodule.c"
        var $190=$i_i554; //@line 2655 "parsermodule.c"
        var $191=($189) > ($190); //@line 2655 "parsermodule.c"
        if ($191) { __label__ = 12; break; } else { __label__ = 26; break; } //@line 2655 "parsermodule.c"
      case 26: // $validate_with_stmt_exit
        var $192=$ok_i556; //@line 2657 "parsermodule.c"
        $4=$192; //@line 2657 "parsermodule.c"
        var $193=$4; //@line 2657 "parsermodule.c"
        $retval_i553=$193; //@line 2657 "parsermodule.c"
        var $retval11_i=$retval_i553; //@line 2657 "parsermodule.c"
        $res=$retval11_i; //@line 3089 "parsermodule.c"
        __label__ = 523; break; //@line 3089 "parsermodule.c"
      case 27: // $bb3
        var $194=$tree_addr; //@line 3092 "parsermodule.c"
        var $195=_validate_class($194); //@line 3092 "parsermodule.c"
        $res=$195; //@line 3092 "parsermodule.c"
        __label__ = 523; break; //@line 3092 "parsermodule.c"
      case 28: // $bb4
        var $196=$tree_addr; //@line 3095 "parsermodule.c"
        $tree_addr_i513=$196;
        var $197=$tree_addr_i513; //@line 2686 "parsermodule.c"
        var $198=$197+16; //@line 2686 "parsermodule.c"
        var $199=HEAP[$198]; //@line 2686 "parsermodule.c"
        $nch_i515=$199; //@line 2686 "parsermodule.c"
        var $200=$tree_addr_i513; //@line 2689 "parsermodule.c"
        $n_addr_i_i510=$200;
        $t_addr_i_i511=261;
        var $201=$n_addr_i_i510; //@line 956 "parsermodule.c"
        var $202=$201; //@line 956 "parsermodule.c"
        var $203=HEAP[$202]; //@line 956 "parsermodule.c"
        var $204=($203); //@line 956 "parsermodule.c"
        var $205=$t_addr_i_i511; //@line 956 "parsermodule.c"
        var $206=($204)!=($205); //@line 956 "parsermodule.c"
        if ($206) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 956 "parsermodule.c"
      case 29: // $validate_ntype_exit_i519_thread
        var $207=$n_addr_i_i510; //@line 957 "parsermodule.c"
        var $208=$207; //@line 957 "parsermodule.c"
        var $209=HEAP[$208]; //@line 957 "parsermodule.c"
        var $210=($209); //@line 957 "parsermodule.c"
        var $211=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $212=$t_addr_i_i511; //@line 957 "parsermodule.c"
        var $213=_PyErr_Format($211, __str49, $212, $210); //@line 957 "parsermodule.c"
        $9=0; //@line 959 "parsermodule.c"
        $retval_i_i512=0; //@line 959 "parsermodule.c"
        __label__ = 55; break;
      case 30: // $bb_i520
        $9=1; //@line 961 "parsermodule.c"
        $retval_i_i512=1; //@line 959 "parsermodule.c"
        var $214=$nch_i515; //@line 2689 "parsermodule.c"
        var $215=($214)!=2; //@line 2689 "parsermodule.c"
        if ($215) { __label__ = 55; break; } else { __label__ = 31; break; } //@line 2689 "parsermodule.c"
      case 31: // $bb1_i521
        var $216=$tree_addr_i513; //@line 2689 "parsermodule.c"
        var $217=$216+20; //@line 2689 "parsermodule.c"
        var $218=HEAP[$217]; //@line 2689 "parsermodule.c"
        var $219=$tree_addr_i513; //@line 2689 "parsermodule.c"
        var $220=$219+16; //@line 2689 "parsermodule.c"
        var $221=HEAP[$220]; //@line 2689 "parsermodule.c"
        var $222=($221) + -2; //@line 2689 "parsermodule.c"
        var $223=$218+24*$222; //@line 2689 "parsermodule.c"
        $tree_addr_i_i506=$223;
        var $224=$tree_addr_i_i506; //@line 2616 "parsermodule.c"
        var $225=$224+16; //@line 2616 "parsermodule.c"
        var $226=HEAP[$225]; //@line 2616 "parsermodule.c"
        $nch_i_i509=$226; //@line 2616 "parsermodule.c"
        var $227=$tree_addr_i_i506; //@line 2617 "parsermodule.c"
        $n_addr_i_i_i503=$227;
        $t_addr_i_i_i504=260;
        var $228=$n_addr_i_i_i503; //@line 956 "parsermodule.c"
        var $229=$228; //@line 956 "parsermodule.c"
        var $230=HEAP[$229]; //@line 956 "parsermodule.c"
        var $231=($230); //@line 956 "parsermodule.c"
        var $232=$t_addr_i_i_i504; //@line 956 "parsermodule.c"
        var $233=($231)!=($232); //@line 956 "parsermodule.c"
        if ($233) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 956 "parsermodule.c"
      case 32: // $validate_ntype_exit_thread_i_i522
        var $234=$n_addr_i_i_i503; //@line 957 "parsermodule.c"
        var $235=$234; //@line 957 "parsermodule.c"
        var $236=HEAP[$235]; //@line 957 "parsermodule.c"
        var $237=($236); //@line 957 "parsermodule.c"
        var $238=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $239=$t_addr_i_i_i504; //@line 957 "parsermodule.c"
        var $240=_PyErr_Format($238, __str49, $239, $237); //@line 957 "parsermodule.c"
        $7=0; //@line 959 "parsermodule.c"
        $retval_i_i_i505=0; //@line 959 "parsermodule.c"
        __label__ = 35; break;
      case 33: // $bb_i2_i
        $7=1; //@line 961 "parsermodule.c"
        $retval_i_i_i505=1; //@line 959 "parsermodule.c"
        var $241=$nch_i_i509; //@line 2617 "parsermodule.c"
        var $242=($241) <= 0; //@line 2617 "parsermodule.c"
        if ($242) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 2617 "parsermodule.c"
      case 34: // $bb1_i3_i
        $iftmp_181_i_i=1; //@line 2617 "parsermodule.c"
        __label__ = 36; break; //@line 2617 "parsermodule.c"
      case 35: // $bb2_i_i523
        $iftmp_181_i_i=0; //@line 2617 "parsermodule.c"
        __label__ = 36; break; //@line 2617 "parsermodule.c"
      case 36: // $bb3_i_i524
        var $243=$iftmp_181_i_i; //@line 2617 "parsermodule.c"
        $ok_i_i=$243; //@line 2617 "parsermodule.c"
        $i_i_i508=0; //@line 2619 "parsermodule.c"
        __lastLabel__ = 36; __label__ = 51; break; //@line 2619 "parsermodule.c"
      case 37: // $bb4_i_i525
        var $244=$tree_addr_i_i506; //@line 2620 "parsermodule.c"
        var $245=$244+20; //@line 2620 "parsermodule.c"
        var $246=HEAP[$245]; //@line 2620 "parsermodule.c"
        var $247=$i_i_i508; //@line 2620 "parsermodule.c"
        var $248=$246+24*$247; //@line 2620 "parsermodule.c"
        $tree_addr_i_i_i502=$248;
        var $249=$tree_addr_i_i_i502; //@line 2591 "parsermodule.c"
        var $250=$249+16; //@line 2591 "parsermodule.c"
        var $251=HEAP[$250]; //@line 2591 "parsermodule.c"
        $nch_i_i_i=$251; //@line 2591 "parsermodule.c"
        var $252=$tree_addr_i_i_i502; //@line 2592 "parsermodule.c"
        $n_addr_i_i_i_i=$252;
        $t_addr_i_i_i_i=259;
        var $253=$n_addr_i_i_i_i; //@line 956 "parsermodule.c"
        var $254=$253; //@line 956 "parsermodule.c"
        var $255=HEAP[$254]; //@line 956 "parsermodule.c"
        var $256=($255); //@line 956 "parsermodule.c"
        var $257=$t_addr_i_i_i_i; //@line 956 "parsermodule.c"
        var $258=($256)!=($257); //@line 956 "parsermodule.c"
        if ($258) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 956 "parsermodule.c"
      case 38: // $validate_ntype_exit_thread_i_i_i
        var $259=$n_addr_i_i_i_i; //@line 957 "parsermodule.c"
        var $260=$259; //@line 957 "parsermodule.c"
        var $261=HEAP[$260]; //@line 957 "parsermodule.c"
        var $262=($261); //@line 957 "parsermodule.c"
        var $263=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $264=$t_addr_i_i_i_i; //@line 957 "parsermodule.c"
        var $265=_PyErr_Format($263, __str49, $264, $262); //@line 957 "parsermodule.c"
        $5=0; //@line 959 "parsermodule.c"
        $retval_i_i_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 43; break;
      case 39: // $bb_i2_i_i
        $5=1; //@line 961 "parsermodule.c"
        $retval_i_i_i_i=1; //@line 959 "parsermodule.c"
        var $266=$nch_i_i_i; //@line 2592 "parsermodule.c"
        var $267=($266)==3; //@line 2592 "parsermodule.c"
        var $268=$nch_i_i_i; //@line 2592 "parsermodule.c"
        var $269=($268)==5; //@line 2592 "parsermodule.c"
        var $or_cond_i_i_i=($267) | ($269);
        var $270=$nch_i_i_i; //@line 2592 "parsermodule.c"
        var $271=($270)==6; //@line 2592 "parsermodule.c"
        var $or_cond3_i_i_i=($or_cond_i_i_i) | ($271);
        if ($or_cond3_i_i_i) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 2592 "parsermodule.c"
      case 40: // $bb3_i_i_i
        var $272=$tree_addr_i_i_i502; //@line 2592 "parsermodule.c"
        var $273=$272+20; //@line 2592 "parsermodule.c"
        var $274=HEAP[$273]; //@line 2592 "parsermodule.c"
        var $275=$274; //@line 2592 "parsermodule.c"
        var $276=_validate_terminal($275, 50, __str153); //@line 2592 "parsermodule.c"
        var $277=($276)==0; //@line 2592 "parsermodule.c"
        if ($277) { __label__ = 43; break; } else { __label__ = 41; break; } //@line 2592 "parsermodule.c"
      case 41: // $bb4_i_i_i
        var $278=$tree_addr_i_i_i502; //@line 2592 "parsermodule.c"
        var $279=$278+20; //@line 2592 "parsermodule.c"
        var $280=HEAP[$279]; //@line 2592 "parsermodule.c"
        var $281=$280+24; //@line 2592 "parsermodule.c"
        var $282=_validate_dotted_name($281); //@line 2592 "parsermodule.c"
        var $283=($282)==0; //@line 2592 "parsermodule.c"
        if ($283) { __label__ = 43; break; } else { __label__ = 42; break; } //@line 2592 "parsermodule.c"
      case 42: // $bb5_i_i_i
        var $284=$tree_addr_i_i_i502; //@line 2592 "parsermodule.c"
        var $285=$284+20; //@line 2592 "parsermodule.c"
        var $286=HEAP[$285]; //@line 2592 "parsermodule.c"
        var $287=$tree_addr_i_i_i502; //@line 2592 "parsermodule.c"
        var $288=$287+16; //@line 2592 "parsermodule.c"
        var $289=HEAP[$288]; //@line 2592 "parsermodule.c"
        var $290=($289) + -1; //@line 2592 "parsermodule.c"
        var $291=$286+24*$290; //@line 2592 "parsermodule.c"
        var $292=_validate_terminal($291, 4, 0); //@line 2592 "parsermodule.c"
        var $293=($292)==0; //@line 2592 "parsermodule.c"
        if ($293) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2592 "parsermodule.c"
      case 43: // $bb8_i_i_i
        $iftmp_179_i_i_i=0; //@line 2592 "parsermodule.c"
        $ok_i_i_i=0; //@line 2592 "parsermodule.c"
        __label__ = 50; break;
      case 44: // $bb9_i_i_i
        $iftmp_179_i_i_i=1; //@line 2592 "parsermodule.c"
        $ok_i_i_i=1; //@line 2592 "parsermodule.c"
        var $294=$nch_i_i_i; //@line 2598 "parsermodule.c"
        var $295=($294)!=3; //@line 2598 "parsermodule.c"
        if ($295) { __label__ = 45; break; } else { __label__ = 50; break; } //@line 2598 "parsermodule.c"
      case 45: // $bb10_i_i_i
        var $296=$tree_addr_i_i_i502; //@line 2599 "parsermodule.c"
        var $297=$296+20; //@line 2599 "parsermodule.c"
        var $298=HEAP[$297]; //@line 2599 "parsermodule.c"
        var $299=$298+48; //@line 2599 "parsermodule.c"
        var $300=_validate_terminal($299, 7, __str55); //@line 2599 "parsermodule.c"
        var $301=($300)==0; //@line 2599 "parsermodule.c"
        if ($301) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 2599 "parsermodule.c"
      case 46: // $bb11_i_i_i
        var $302=$tree_addr_i_i_i502; //@line 2599 "parsermodule.c"
        var $303=$302+20; //@line 2599 "parsermodule.c"
        var $304=HEAP[$303]; //@line 2599 "parsermodule.c"
        var $305=$tree_addr_i_i_i502; //@line 2599 "parsermodule.c"
        var $306=$305+16; //@line 2599 "parsermodule.c"
        var $307=HEAP[$306]; //@line 2599 "parsermodule.c"
        var $308=($307) + -2; //@line 2599 "parsermodule.c"
        var $309=$304+24*$308; //@line 2599 "parsermodule.c"
        var $310=_validate_terminal($309, 8, __str56); //@line 2599 "parsermodule.c"
        var $311=($310)==0; //@line 2599 "parsermodule.c"
        if ($311) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 2599 "parsermodule.c"
      case 47: // $bb14_i_i_i
        $iftmp_180_i_i_i=0; //@line 2599 "parsermodule.c"
        $ok_i_i_i=0; //@line 2599 "parsermodule.c"
        __label__ = 50; break;
      case 48: // $bb15_i_i_i
        $iftmp_180_i_i_i=1; //@line 2599 "parsermodule.c"
        $ok_i_i_i=1; //@line 2599 "parsermodule.c"
        var $312=$nch_i_i_i; //@line 2602 "parsermodule.c"
        var $313=($312)==6; //@line 2602 "parsermodule.c"
        if ($313) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 2602 "parsermodule.c"
      case 49: // $bb16_i_i_i
        var $314=$tree_addr_i_i_i502; //@line 2603 "parsermodule.c"
        var $315=$314+20; //@line 2603 "parsermodule.c"
        var $316=HEAP[$315]; //@line 2603 "parsermodule.c"
        var $317=$316+72; //@line 2603 "parsermodule.c"
        var $318=_validate_arglist($317); //@line 2603 "parsermodule.c"
        $ok_i_i_i=$318; //@line 2603 "parsermodule.c"
        __label__ = 50; break; //@line 2603 "parsermodule.c"
      case 50: // $validate_decorator_exit_i_i
        var $319=$ok_i_i_i; //@line 2606 "parsermodule.c"
        $6=$319; //@line 2606 "parsermodule.c"
        var $320=$6; //@line 2606 "parsermodule.c"
        $retval_i1_i_i=$320; //@line 2606 "parsermodule.c"
        var $retval18_i_i_i=$retval_i1_i_i; //@line 2606 "parsermodule.c"
        $ok_i_i=$retval18_i_i_i; //@line 2620 "parsermodule.c"
        var $321=$i_i_i508; //@line 2619 "parsermodule.c"
        var $322=($321) + 1; //@line 2619 "parsermodule.c"
        $i_i_i508=$322; //@line 2619 "parsermodule.c"
        __lastLabel__ = 50; __label__ = 51; break; //@line 2619 "parsermodule.c"
      case 51: // $bb5_i_i526
        var $323=__lastLabel__ == 50 ? $retval18_i_i_i : ($243);
        var $324=($323)==0; //@line 2619 "parsermodule.c"
        if ($324) { __label__ = 53; break; } else { __label__ = 52; break; } //@line 2619 "parsermodule.c"
      case 52: // $bb6_i_i527
        var $325=$i_i_i508; //@line 2619 "parsermodule.c"
        var $326=$nch_i_i509; //@line 2619 "parsermodule.c"
        var $327=($325) < ($326); //@line 2619 "parsermodule.c"
        if ($327) { __label__ = 37; break; } else { __label__ = 53; break; } //@line 2619 "parsermodule.c"
      case 53: // $validate_decorators_exit_i
        var $328=$ok_i_i; //@line 2622 "parsermodule.c"
        $8=$328; //@line 2622 "parsermodule.c"
        $retval_i1_i507=$328; //@line 2622 "parsermodule.c"
        var $329=($328)==0; //@line 2689 "parsermodule.c"
        if ($329) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 2689 "parsermodule.c"
      case 54: // $bb2_i528
        $iftmp_187_i=1; //@line 2689 "parsermodule.c"
        __label__ = 56; break; //@line 2689 "parsermodule.c"
      case 55: // $bb3_i529
        $iftmp_187_i=0; //@line 2689 "parsermodule.c"
        __label__ = 56; break; //@line 2689 "parsermodule.c"
      case 56: // $bb4_i530
        var $330=$iftmp_187_i; //@line 2689 "parsermodule.c"
        $ok_i=$330; //@line 2689 "parsermodule.c"
        var $331=$tree_addr_i513; //@line 2690 "parsermodule.c"
        var $332=$331+20; //@line 2690 "parsermodule.c"
        var $333=HEAP[$332]; //@line 2690 "parsermodule.c"
        var $334=$tree_addr_i513; //@line 2690 "parsermodule.c"
        var $335=$334+16; //@line 2690 "parsermodule.c"
        var $336=HEAP[$335]; //@line 2690 "parsermodule.c"
        var $337=($336) + -1; //@line 2690 "parsermodule.c"
        var $338=$333+24*$337; //@line 2690 "parsermodule.c"
        var $339=$338; //@line 2690 "parsermodule.c"
        var $340=HEAP[$339]; //@line 2690 "parsermodule.c"
        var $341=($340)==262; //@line 2690 "parsermodule.c"
        var $342=$ok_i; //@line 2691 "parsermodule.c"
        var $343=($342)==0; //@line 2691 "parsermodule.c"
        if ($341) { __label__ = 57; break; } else { __label__ = 62; break; } //@line 2690 "parsermodule.c"
      case 57: // $bb5_i531
        if ($343) { __label__ = 60; break; } else { __label__ = 58; break; } //@line 2691 "parsermodule.c"
      case 58: // $bb6_i532
        var $344=$tree_addr_i513; //@line 2691 "parsermodule.c"
        var $345=$344+20; //@line 2691 "parsermodule.c"
        var $346=HEAP[$345]; //@line 2691 "parsermodule.c"
        var $347=$tree_addr_i513; //@line 2691 "parsermodule.c"
        var $348=$347+16; //@line 2691 "parsermodule.c"
        var $349=HEAP[$348]; //@line 2691 "parsermodule.c"
        var $350=($349) + -1; //@line 2691 "parsermodule.c"
        var $351=$346+24*$350; //@line 2691 "parsermodule.c"
        var $352=_validate_funcdef($351); //@line 2691 "parsermodule.c"
        var $353=($352)==0; //@line 2691 "parsermodule.c"
        if ($353) { __label__ = 60; break; } else { __label__ = 59; break; } //@line 2691 "parsermodule.c"
      case 59: // $bb7_i533
        $iftmp_188_i=1; //@line 2691 "parsermodule.c"
        __label__ = 61; break; //@line 2691 "parsermodule.c"
      case 60: // $bb8_i534
        $iftmp_188_i=0; //@line 2691 "parsermodule.c"
        __label__ = 61; break; //@line 2691 "parsermodule.c"
      case 61: // $bb9_i535
        var $354=$iftmp_188_i; //@line 2691 "parsermodule.c"
        $ok_i=$354; //@line 2691 "parsermodule.c"
        __label__ = 67; break; //@line 2691 "parsermodule.c"
      case 62: // $bb10_i536
        if ($343) { __label__ = 65; break; } else { __label__ = 63; break; } //@line 2693 "parsermodule.c"
      case 63: // $bb11_i537
        var $355=$tree_addr_i513; //@line 2693 "parsermodule.c"
        var $356=$355+20; //@line 2693 "parsermodule.c"
        var $357=HEAP[$356]; //@line 2693 "parsermodule.c"
        var $358=$tree_addr_i513; //@line 2693 "parsermodule.c"
        var $359=$358+16; //@line 2693 "parsermodule.c"
        var $360=HEAP[$359]; //@line 2693 "parsermodule.c"
        var $361=($360) + -1; //@line 2693 "parsermodule.c"
        var $362=$357+24*$361; //@line 2693 "parsermodule.c"
        var $363=_validate_class($362); //@line 2693 "parsermodule.c"
        var $364=($363)==0; //@line 2693 "parsermodule.c"
        if ($364) { __label__ = 65; break; } else { __label__ = 64; break; } //@line 2693 "parsermodule.c"
      case 64: // $bb12_i538
        $iftmp_189_i=1; //@line 2693 "parsermodule.c"
        __label__ = 66; break; //@line 2693 "parsermodule.c"
      case 65: // $bb13_i539
        $iftmp_189_i=0; //@line 2693 "parsermodule.c"
        __label__ = 66; break; //@line 2693 "parsermodule.c"
      case 66: // $bb14_i540
        var $365=$iftmp_189_i; //@line 2693 "parsermodule.c"
        $ok_i=$365; //@line 2693 "parsermodule.c"
        __label__ = 67; break; //@line 2693 "parsermodule.c"
      case 67: // $validate_decorated_exit
        var $366=$ok_i; //@line 2694 "parsermodule.c"
        $10=$366; //@line 2694 "parsermodule.c"
        var $367=$10; //@line 2694 "parsermodule.c"
        $retval_i514=$367; //@line 2694 "parsermodule.c"
        var $retval16_i=$retval_i514; //@line 2694 "parsermodule.c"
        $res=$retval16_i; //@line 3095 "parsermodule.c"
        __label__ = 523; break; //@line 3095 "parsermodule.c"
      case 68: // $bb5
        var $368=$tree_addr; //@line 3102 "parsermodule.c"
        var $369=_validate_stmt($368); //@line 3102 "parsermodule.c"
        $res=$369; //@line 3102 "parsermodule.c"
        __label__ = 523; break; //@line 3102 "parsermodule.c"
      case 69: // $bb6
        var $370=$tree_addr; //@line 3109 "parsermodule.c"
        var $371=_validate_small_stmt($370); //@line 3109 "parsermodule.c"
        $res=$371; //@line 3109 "parsermodule.c"
        __label__ = 523; break; //@line 3109 "parsermodule.c"
      case 70: // $bb7
        var $372=$tree_addr; //@line 3112 "parsermodule.c"
        $n_addr_i=$372;
        $num_addr_i=1;
        $name_addr_i=__str176;
        var $373=$n_addr_i; //@line 975 "parsermodule.c"
        var $374=$373+16; //@line 975 "parsermodule.c"
        var $375=HEAP[$374]; //@line 975 "parsermodule.c"
        var $376=$num_addr_i; //@line 975 "parsermodule.c"
        var $377=($375)!=($376); //@line 975 "parsermodule.c"
        if ($377) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 975 "parsermodule.c"
      case 71: // $validate_numnodes_exit_thread
        var $378=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $379=$name_addr_i; //@line 976 "parsermodule.c"
        var $380=_PyErr_Format($378, __str50, $379); //@line 976 "parsermodule.c"
        $70=0; //@line 978 "parsermodule.c"
        $retval_i13=0; //@line 978 "parsermodule.c"
        __label__ = 78; break;
      case 72: // $bb8
        $70=1; //@line 980 "parsermodule.c"
        $retval_i13=1; //@line 978 "parsermodule.c"
        var $381=$tree_addr; //@line 3112 "parsermodule.c"
        var $382=$381+20; //@line 3112 "parsermodule.c"
        var $383=HEAP[$382]; //@line 3112 "parsermodule.c"
        var $384=$383; //@line 3112 "parsermodule.c"
        var $385=$384; //@line 3112 "parsermodule.c"
        var $386=HEAP[$385]; //@line 3112 "parsermodule.c"
        var $387=($386)==276; //@line 3112 "parsermodule.c"
        if ($387) { __label__ = 77; break; } else { __label__ = 73; break; } //@line 3112 "parsermodule.c"
      case 73: // $bb9
        var $388=$tree_addr; //@line 3112 "parsermodule.c"
        var $389=$388+20; //@line 3112 "parsermodule.c"
        var $390=HEAP[$389]; //@line 3112 "parsermodule.c"
        var $391=$390; //@line 3112 "parsermodule.c"
        var $392=$391; //@line 3112 "parsermodule.c"
        var $393=HEAP[$392]; //@line 3112 "parsermodule.c"
        var $394=($393)==277; //@line 3112 "parsermodule.c"
        if ($394) { __label__ = 77; break; } else { __label__ = 74; break; } //@line 3112 "parsermodule.c"
      case 74: // $bb10
        var $395=$tree_addr; //@line 3112 "parsermodule.c"
        var $396=$395+20; //@line 3112 "parsermodule.c"
        var $397=HEAP[$396]; //@line 3112 "parsermodule.c"
        var $398=$397; //@line 3112 "parsermodule.c"
        var $399=$398; //@line 3112 "parsermodule.c"
        var $400=HEAP[$399]; //@line 3112 "parsermodule.c"
        var $401=($400)==279; //@line 3112 "parsermodule.c"
        if ($401) { __label__ = 77; break; } else { __label__ = 75; break; } //@line 3112 "parsermodule.c"
      case 75: // $bb11
        var $402=$tree_addr; //@line 3112 "parsermodule.c"
        var $403=$402+20; //@line 3112 "parsermodule.c"
        var $404=HEAP[$403]; //@line 3112 "parsermodule.c"
        var $405=$404; //@line 3112 "parsermodule.c"
        var $406=$405; //@line 3112 "parsermodule.c"
        var $407=HEAP[$406]; //@line 3112 "parsermodule.c"
        var $408=($407)==278; //@line 3112 "parsermodule.c"
        if ($408) { __label__ = 77; break; } else { __label__ = 76; break; } //@line 3112 "parsermodule.c"
      case 76: // $bb12
        var $409=$tree_addr; //@line 3112 "parsermodule.c"
        var $410=$409+20; //@line 3112 "parsermodule.c"
        var $411=HEAP[$410]; //@line 3112 "parsermodule.c"
        var $412=$411; //@line 3112 "parsermodule.c"
        var $413=$412; //@line 3112 "parsermodule.c"
        var $414=HEAP[$413]; //@line 3112 "parsermodule.c"
        var $415=($414)==280; //@line 3112 "parsermodule.c"
        if ($415) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 3112 "parsermodule.c"
      case 77: // $bb16
        $iftmp_209=1; //@line 3112 "parsermodule.c"
        $res=1; //@line 3112 "parsermodule.c"
        var $416=$tree_addr; //@line 3119 "parsermodule.c"
        var $417=$416+20; //@line 3119 "parsermodule.c"
        var $418=HEAP[$417]; //@line 3119 "parsermodule.c"
        var $419=$418; //@line 3119 "parsermodule.c"
        $next=$419; //@line 3119 "parsermodule.c"
        __label__ = 523; break; //@line 3119 "parsermodule.c"
      case 78: // $bb17
        $iftmp_209=0; //@line 3112 "parsermodule.c"
        $res=0; //@line 3112 "parsermodule.c"
        var $420=$nch; //@line 3120 "parsermodule.c"
        var $421=($420)==1; //@line 3120 "parsermodule.c"
        if ($421) { __label__ = 79; break; } else { __label__ = 523; break; } //@line 3120 "parsermodule.c"
      case 79: // $bb18
        $message_addr_i17=__str177;
        var $422=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $423=$message_addr_i17; //@line 531 "parsermodule.c"
        _PyErr_SetString($422, $423); //@line 531 "parsermodule.c"
        __label__ = 523; break; //@line 3121 "parsermodule.c"
      case 80: // $bb20
        var $424=$tree_addr; //@line 3124 "parsermodule.c"
        $tree_addr_i21=$424;
        var $425=$tree_addr_i21; //@line 1767 "parsermodule.c"
        $n_addr_i_i18=$425;
        $t_addr_i_i19=279;
        var $426=$n_addr_i_i18; //@line 956 "parsermodule.c"
        var $427=$426; //@line 956 "parsermodule.c"
        var $428=HEAP[$427]; //@line 956 "parsermodule.c"
        var $429=($428); //@line 956 "parsermodule.c"
        var $430=$t_addr_i_i19; //@line 956 "parsermodule.c"
        var $431=($429)!=($430); //@line 956 "parsermodule.c"
        if ($431) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 956 "parsermodule.c"
      case 81: // $validate_ntype_exit_thread_i23
        var $432=$n_addr_i_i18; //@line 957 "parsermodule.c"
        var $433=$432; //@line 957 "parsermodule.c"
        var $434=HEAP[$433]; //@line 957 "parsermodule.c"
        var $435=($434); //@line 957 "parsermodule.c"
        var $436=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $437=$t_addr_i_i19; //@line 957 "parsermodule.c"
        var $438=_PyErr_Format($436, __str49, $437, $435); //@line 957 "parsermodule.c"
        $68=0; //@line 959 "parsermodule.c"
        $retval_i_i20=0; //@line 959 "parsermodule.c"
        __label__ = 86; break;
      case 82: // $bb_i24
        $68=1; //@line 961 "parsermodule.c"
        $retval_i_i20=1; //@line 959 "parsermodule.c"
        var $439=$tree_addr_i21; //@line 1767 "parsermodule.c"
        $n_addr_i1_i=$439;
        $num_addr_i_i=1;
        $name_addr_i_i=__str111;
        var $440=$n_addr_i1_i; //@line 975 "parsermodule.c"
        var $441=$440+16; //@line 975 "parsermodule.c"
        var $442=HEAP[$441]; //@line 975 "parsermodule.c"
        var $443=$num_addr_i_i; //@line 975 "parsermodule.c"
        var $444=($442)!=($443); //@line 975 "parsermodule.c"
        if ($444) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 975 "parsermodule.c"
      case 83: // $validate_numnodes_exit_thread_i
        var $445=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $446=$name_addr_i_i; //@line 976 "parsermodule.c"
        var $447=_PyErr_Format($445, __str50, $446); //@line 976 "parsermodule.c"
        $67=0; //@line 978 "parsermodule.c"
        $retval_i2_i=0; //@line 978 "parsermodule.c"
        __label__ = 86; break;
      case 84: // $bb1_i25
        $67=1; //@line 980 "parsermodule.c"
        $retval_i2_i=1; //@line 978 "parsermodule.c"
        var $448=$tree_addr_i21; //@line 1767 "parsermodule.c"
        var $449=$448+20; //@line 1767 "parsermodule.c"
        var $450=HEAP[$449]; //@line 1767 "parsermodule.c"
        var $451=$450; //@line 1767 "parsermodule.c"
        var $452=_validate_yield_expr($451); //@line 1767 "parsermodule.c"
        var $453=($452)==0; //@line 1767 "parsermodule.c"
        if ($453) { __label__ = 86; break; } else { __label__ = 85; break; } //@line 1767 "parsermodule.c"
      case 85: // $bb2_i26
        $iftmp_111_i=1; //@line 1767 "parsermodule.c"
        __label__ = 87; break; //@line 1767 "parsermodule.c"
      case 86: // $bb3_i27
        $iftmp_111_i=0; //@line 1767 "parsermodule.c"
        __label__ = 87; break; //@line 1767 "parsermodule.c"
      case 87: // $validate_yield_stmt_exit
        var $454=$iftmp_111_i; //@line 1767 "parsermodule.c"
        $69=$454; //@line 1767 "parsermodule.c"
        var $455=$69; //@line 1767 "parsermodule.c"
        $retval_i22=$455; //@line 1767 "parsermodule.c"
        var $retval5_i=$retval_i22; //@line 1767 "parsermodule.c"
        $res=$retval5_i; //@line 3124 "parsermodule.c"
        __label__ = 523; break; //@line 3124 "parsermodule.c"
      case 88: // $bb21
        var $456=$tree_addr; //@line 3130 "parsermodule.c"
        var $457=_validate_simple_stmt($456); //@line 3130 "parsermodule.c"
        $res=$457; //@line 3130 "parsermodule.c"
        __label__ = 523; break; //@line 3130 "parsermodule.c"
      case 89: // $bb22
        var $458=$tree_addr; //@line 3133 "parsermodule.c"
        var $459=_validate_compound_stmt($458); //@line 3133 "parsermodule.c"
        $res=$459; //@line 3133 "parsermodule.c"
        __label__ = 523; break; //@line 3133 "parsermodule.c"
      case 90: // $bb23
        var $460=$tree_addr; //@line 3139 "parsermodule.c"
        $tree_addr_i83=$460;
        var $461=$tree_addr_i83; //@line 1606 "parsermodule.c"
        var $462=$461+16; //@line 1606 "parsermodule.c"
        var $463=HEAP[$462]; //@line 1606 "parsermodule.c"
        $nch_i86=$463; //@line 1606 "parsermodule.c"
        var $464=$tree_addr_i83; //@line 1609 "parsermodule.c"
        $n_addr_i_i80=$464;
        $t_addr_i_i81=270;
        var $465=$n_addr_i_i80; //@line 956 "parsermodule.c"
        var $466=$465; //@line 956 "parsermodule.c"
        var $467=HEAP[$466]; //@line 956 "parsermodule.c"
        var $468=($467); //@line 956 "parsermodule.c"
        var $469=$t_addr_i_i81; //@line 956 "parsermodule.c"
        var $470=($468)!=($469); //@line 956 "parsermodule.c"
        if ($470) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 956 "parsermodule.c"
      case 91: // $validate_ntype_exit_thread_i88
        var $471=$n_addr_i_i80; //@line 957 "parsermodule.c"
        var $472=$471; //@line 957 "parsermodule.c"
        var $473=HEAP[$472]; //@line 957 "parsermodule.c"
        var $474=($473); //@line 957 "parsermodule.c"
        var $475=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $476=$t_addr_i_i81; //@line 957 "parsermodule.c"
        var $477=_PyErr_Format($475, __str49, $476, $474); //@line 957 "parsermodule.c"
        $59=0; //@line 959 "parsermodule.c"
        $retval_i_i82=0; //@line 959 "parsermodule.c"
        __label__ = 94; break;
      case 92: // $bb_i89
        $59=1; //@line 961 "parsermodule.c"
        $retval_i_i82=1; //@line 959 "parsermodule.c"
        var $478=$nch_i86; //@line 1609 "parsermodule.c"
        var $479=($478) & 1; //@line 1609 "parsermodule.c"
        var $480=((($479)) & 255); //@line 1609 "parsermodule.c"
        var $toBool_i=($480)!=0; //@line 1609 "parsermodule.c"
        var $toBoolnot_i=($toBool_i) ^ 1; //@line 1609 "parsermodule.c"
        var $toBoolnot1_i=($toBoolnot_i); //@line 1609 "parsermodule.c"
        var $toBool3_i=($toBoolnot1_i)!=0; //@line 1609 "parsermodule.c"
        if ($toBool3_i) { __label__ = 94; break; } else { __label__ = 93; break; } //@line 1609 "parsermodule.c"
      case 93: // $bb4_i90
        var $481=$tree_addr_i83; //@line 1609 "parsermodule.c"
        var $482=$481+20; //@line 1609 "parsermodule.c"
        var $483=HEAP[$482]; //@line 1609 "parsermodule.c"
        var $484=$483; //@line 1609 "parsermodule.c"
        $tree_addr_i_i=$484;
        var $485=$tree_addr_i_i; //@line 1162 "parsermodule.c"
        var $486=_validate_repeating_list($485, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $58=$486; //@line 1162 "parsermodule.c"
        var $487=$58; //@line 1162 "parsermodule.c"
        $retval_i1_i=$487; //@line 1162 "parsermodule.c"
        var $retval1_i_i=$retval_i1_i; //@line 1162 "parsermodule.c"
        var $488=($retval1_i_i)==0; //@line 1609 "parsermodule.c"
        if ($488) { __label__ = 94; break; } else { __label__ = 95; break; } //@line 1609 "parsermodule.c"
      case 94: // $bb7_thread_i91
        $iftmp_97_i=0; //@line 1609 "parsermodule.c"
        $res_i87=0; //@line 1609 "parsermodule.c"
        __label__ = 118; break;
      case 95: // $bb8_i92
        $iftmp_97_i=1; //@line 1609 "parsermodule.c"
        $res_i87=1; //@line 1609 "parsermodule.c"
        var $489=$nch_i86; //@line 1611 "parsermodule.c"
        var $490=($489)!=3; //@line 1611 "parsermodule.c"
        if ($490) { __label__ = 118; break; } else { __label__ = 96; break; } //@line 1611 "parsermodule.c"
      case 96: // $bb9_i93
        var $491=$tree_addr_i83; //@line 1611 "parsermodule.c"
        var $492=$491+20; //@line 1611 "parsermodule.c"
        var $493=HEAP[$492]; //@line 1611 "parsermodule.c"
        var $494=$493+24; //@line 1611 "parsermodule.c"
        var $495=$494; //@line 1611 "parsermodule.c"
        var $496=HEAP[$495]; //@line 1611 "parsermodule.c"
        var $497=($496)!=271; //@line 1611 "parsermodule.c"
        if ($497) { __label__ = 118; break; } else { __label__ = 97; break; } //@line 1611 "parsermodule.c"
      case 97: // $bb10_i94
        var $498=$tree_addr_i83; //@line 1613 "parsermodule.c"
        var $499=$498+20; //@line 1613 "parsermodule.c"
        var $500=HEAP[$499]; //@line 1613 "parsermodule.c"
        var $501=$500+24; //@line 1613 "parsermodule.c"
        $n_addr_i2_i77=$501;
        $num_addr_i_i78=1;
        $name_addr_i_i79=__str90;
        var $502=$n_addr_i2_i77; //@line 975 "parsermodule.c"
        var $503=$502+16; //@line 975 "parsermodule.c"
        var $504=HEAP[$503]; //@line 975 "parsermodule.c"
        var $505=$num_addr_i_i78; //@line 975 "parsermodule.c"
        var $506=($504)!=($505); //@line 975 "parsermodule.c"
        if ($506) { __label__ = 98; break; } else { __label__ = 99; break; } //@line 975 "parsermodule.c"
      case 98: // $validate_numnodes_exit_thread_i95
        var $507=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $508=$name_addr_i_i79; //@line 976 "parsermodule.c"
        var $509=_PyErr_Format($507, __str50, $508); //@line 976 "parsermodule.c"
        $57=0; //@line 978 "parsermodule.c"
        $retval_i3_i=0; //@line 978 "parsermodule.c"
        __label__ = 103; break;
      case 99: // $bb11_i96
        $57=1; //@line 980 "parsermodule.c"
        $retval_i3_i=1; //@line 978 "parsermodule.c"
        var $510=$tree_addr_i83; //@line 1613 "parsermodule.c"
        var $511=$510+20; //@line 1613 "parsermodule.c"
        var $512=HEAP[$511]; //@line 1613 "parsermodule.c"
        var $513=$512+48; //@line 1613 "parsermodule.c"
        $tree_addr_i7_i=$513;
        var $514=$tree_addr_i7_i; //@line 1596 "parsermodule.c"
        var $515=$514; //@line 1596 "parsermodule.c"
        var $516=HEAP[$515]; //@line 1596 "parsermodule.c"
        var $517=($516)==340; //@line 1596 "parsermodule.c"
        var $518=$tree_addr_i7_i; //@line 1597 "parsermodule.c"
        if ($517) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 1596 "parsermodule.c"
      case 100: // $bb_i9_i
        var $519=_validate_yield_expr($518); //@line 1597 "parsermodule.c"
        $56=$519; //@line 1597 "parsermodule.c"
        __lastLabel__ = 100; __label__ = 102; break; //@line 1597 "parsermodule.c"
      case 101: // $bb1_i10_i
        $tree_addr_i_i_i=$518;
        var $520=$tree_addr_i_i_i; //@line 1162 "parsermodule.c"
        var $521=_validate_repeating_list($520, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $55=$521; //@line 1162 "parsermodule.c"
        var $522=$55; //@line 1162 "parsermodule.c"
        $retval_i_i_i=$522; //@line 1162 "parsermodule.c"
        var $retval1_i_i_i=$retval_i_i_i; //@line 1162 "parsermodule.c"
        $56=$retval1_i_i_i; //@line 1599 "parsermodule.c"
        __lastLabel__ = 101; __label__ = 102; break; //@line 1599 "parsermodule.c"
      case 102: // $validate_yield_or_testlist_exit_i
        var $523=__lastLabel__ == 100 ? $519 : ($retval1_i_i_i);
        $retval_i8_i=$523; //@line 1597 "parsermodule.c"
        var $524=($523)==0; //@line 1613 "parsermodule.c"
        if ($524) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 1613 "parsermodule.c"
      case 103: // $bb14_i97
        $iftmp_98_i=0; //@line 1613 "parsermodule.c"
        $res_i87=0; //@line 1613 "parsermodule.c"
        __label__ = 129; break;
      case 104: // $bb15_i98
        $iftmp_98_i=1; //@line 1613 "parsermodule.c"
        $res_i87=1; //@line 1613 "parsermodule.c"
        var $525=$tree_addr_i83; //@line 1617 "parsermodule.c"
        var $526=$525+20; //@line 1617 "parsermodule.c"
        var $527=HEAP[$526]; //@line 1617 "parsermodule.c"
        var $528=$527+24; //@line 1617 "parsermodule.c"
        var $529=$528+20; //@line 1617 "parsermodule.c"
        var $530=HEAP[$529]; //@line 1617 "parsermodule.c"
        var $531=$530; //@line 1617 "parsermodule.c"
        var $532=$531+4; //@line 1617 "parsermodule.c"
        var $533=HEAP[$532]; //@line 1617 "parsermodule.c"
        $s_i=$533; //@line 1617 "parsermodule.c"
        var $534=$s_i; //@line 1619 "parsermodule.c"
        var $535=_strcmp($534, __str91); //@line 1619 "parsermodule.c"
        var $536=($535)==0; //@line 1619 "parsermodule.c"
        if ($536) { __label__ = 116; break; } else { __label__ = 105; break; } //@line 1619 "parsermodule.c"
      case 105: // $bb16_i99
        var $537=$s_i; //@line 1619 "parsermodule.c"
        var $538=_strcmp($537, __str92); //@line 1619 "parsermodule.c"
        var $539=($538)==0; //@line 1619 "parsermodule.c"
        if ($539) { __label__ = 116; break; } else { __label__ = 106; break; } //@line 1619 "parsermodule.c"
      case 106: // $bb17_i100
        var $540=$s_i; //@line 1619 "parsermodule.c"
        var $541=_strcmp($540, __str93); //@line 1619 "parsermodule.c"
        var $542=($541)==0; //@line 1619 "parsermodule.c"
        if ($542) { __label__ = 116; break; } else { __label__ = 107; break; } //@line 1619 "parsermodule.c"
      case 107: // $bb18_i101
        var $543=$s_i; //@line 1619 "parsermodule.c"
        var $544=_strcmp($543, __str94); //@line 1619 "parsermodule.c"
        var $545=($544)==0; //@line 1619 "parsermodule.c"
        if ($545) { __label__ = 116; break; } else { __label__ = 108; break; } //@line 1619 "parsermodule.c"
      case 108: // $bb19_i102
        var $546=$s_i; //@line 1619 "parsermodule.c"
        var $547=_strcmp($546, __str95); //@line 1619 "parsermodule.c"
        var $548=($547)==0; //@line 1619 "parsermodule.c"
        if ($548) { __label__ = 116; break; } else { __label__ = 109; break; } //@line 1619 "parsermodule.c"
      case 109: // $bb20_i103
        var $549=$s_i; //@line 1619 "parsermodule.c"
        var $550=_strcmp($549, __str96); //@line 1619 "parsermodule.c"
        var $551=($550)==0; //@line 1619 "parsermodule.c"
        if ($551) { __label__ = 116; break; } else { __label__ = 110; break; } //@line 1619 "parsermodule.c"
      case 110: // $bb21_i104
        var $552=$s_i; //@line 1619 "parsermodule.c"
        var $553=_strcmp($552, __str97); //@line 1619 "parsermodule.c"
        var $554=($553)==0; //@line 1619 "parsermodule.c"
        if ($554) { __label__ = 116; break; } else { __label__ = 111; break; } //@line 1619 "parsermodule.c"
      case 111: // $bb22_i105
        var $555=$s_i; //@line 1619 "parsermodule.c"
        var $556=_strcmp($555, __str98); //@line 1619 "parsermodule.c"
        var $557=($556)==0; //@line 1619 "parsermodule.c"
        if ($557) { __label__ = 116; break; } else { __label__ = 112; break; } //@line 1619 "parsermodule.c"
      case 112: // $bb23_i106
        var $558=$s_i; //@line 1619 "parsermodule.c"
        var $559=_strcmp($558, __str99); //@line 1619 "parsermodule.c"
        var $560=($559)==0; //@line 1619 "parsermodule.c"
        if ($560) { __label__ = 116; break; } else { __label__ = 113; break; } //@line 1619 "parsermodule.c"
      case 113: // $bb24_i
        var $561=$s_i; //@line 1619 "parsermodule.c"
        var $562=_strcmp($561, __str100); //@line 1619 "parsermodule.c"
        var $563=($562)==0; //@line 1619 "parsermodule.c"
        if ($563) { __label__ = 116; break; } else { __label__ = 114; break; } //@line 1619 "parsermodule.c"
      case 114: // $bb25_i
        var $564=$s_i; //@line 1619 "parsermodule.c"
        var $565=_strcmp($564, __str101); //@line 1619 "parsermodule.c"
        var $566=($565)==0; //@line 1619 "parsermodule.c"
        if ($566) { __label__ = 116; break; } else { __label__ = 115; break; } //@line 1619 "parsermodule.c"
      case 115: // $bb26_i
        var $567=$s_i; //@line 1619 "parsermodule.c"
        var $568=_strcmp($567, __str102); //@line 1619 "parsermodule.c"
        var $569=($568)==0; //@line 1619 "parsermodule.c"
        if ($569) { __label__ = 116; break; } else { __label__ = 117; break; } //@line 1619 "parsermodule.c"
      case 116: // $bb29_i
        $iftmp_99_i=1; //@line 1619 "parsermodule.c"
        $res_i87=1; //@line 1619 "parsermodule.c"
        __label__ = 129; break;
      case 117: // $bb30_i
        $iftmp_99_i=0; //@line 1619 "parsermodule.c"
        $res_i87=0; //@line 1619 "parsermodule.c"
        $message_addr_i_i76=__str103;
        var $570=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $571=$message_addr_i_i76; //@line 531 "parsermodule.c"
        _PyErr_SetString($570, $571); //@line 531 "parsermodule.c"
        __label__ = 129; break; //@line 1632 "parsermodule.c"
      case 118: // $bb32_i
        $j_i85=1; //@line 1636 "parsermodule.c"
        var $_pr_i107=$res_i87;
        __lastLabel__ = 118; __label__ = 127; break; //@line 1636 "parsermodule.c"
      case 119: // $bb33_i
        var $572=$tree_addr_i83; //@line 1637 "parsermodule.c"
        var $573=$572+20; //@line 1637 "parsermodule.c"
        var $574=HEAP[$573]; //@line 1637 "parsermodule.c"
        var $575=$j_i85; //@line 1637 "parsermodule.c"
        var $576=$574+24*$575; //@line 1637 "parsermodule.c"
        var $577=_validate_terminal($576, 22, __str70); //@line 1637 "parsermodule.c"
        var $578=($577)==0; //@line 1637 "parsermodule.c"
        if ($578) { __label__ = 125; break; } else { __label__ = 120; break; } //@line 1637 "parsermodule.c"
      case 120: // $bb34_i
        var $579=$tree_addr_i83; //@line 1637 "parsermodule.c"
        var $580=$579+20; //@line 1637 "parsermodule.c"
        var $581=HEAP[$580]; //@line 1637 "parsermodule.c"
        var $582=$j_i85; //@line 1637 "parsermodule.c"
        var $583=($582) + 1; //@line 1637 "parsermodule.c"
        var $584=$581+24*$583; //@line 1637 "parsermodule.c"
        $tree_addr_i14_i=$584;
        var $585=$tree_addr_i14_i; //@line 1596 "parsermodule.c"
        var $586=$585; //@line 1596 "parsermodule.c"
        var $587=HEAP[$586]; //@line 1596 "parsermodule.c"
        var $588=($587)==340; //@line 1596 "parsermodule.c"
        var $589=$tree_addr_i14_i; //@line 1597 "parsermodule.c"
        if ($588) { __label__ = 121; break; } else { __label__ = 122; break; } //@line 1596 "parsermodule.c"
      case 121: // $bb_i16_i
        var $590=_validate_yield_expr($589); //@line 1597 "parsermodule.c"
        $54=$590; //@line 1597 "parsermodule.c"
        __lastLabel__ = 121; __label__ = 123; break; //@line 1597 "parsermodule.c"
      case 122: // $bb1_i18_i
        $tree_addr_i_i12_i=$589;
        var $591=$tree_addr_i_i12_i; //@line 1162 "parsermodule.c"
        var $592=_validate_repeating_list($591, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $53=$592; //@line 1162 "parsermodule.c"
        var $593=$53; //@line 1162 "parsermodule.c"
        $retval_i_i13_i=$593; //@line 1162 "parsermodule.c"
        var $retval1_i_i17_i=$retval_i_i13_i; //@line 1162 "parsermodule.c"
        $54=$retval1_i_i17_i; //@line 1599 "parsermodule.c"
        __lastLabel__ = 122; __label__ = 123; break; //@line 1599 "parsermodule.c"
      case 123: // $validate_yield_or_testlist_exit20_i
        var $594=__lastLabel__ == 121 ? $590 : ($retval1_i_i17_i);
        $retval_i15_i=$594; //@line 1597 "parsermodule.c"
        var $595=($594)==0; //@line 1637 "parsermodule.c"
        if ($595) { __label__ = 125; break; } else { __label__ = 124; break; } //@line 1637 "parsermodule.c"
      case 124: // $bb35_i
        $iftmp_100_i=1; //@line 1637 "parsermodule.c"
        __label__ = 126; break; //@line 1637 "parsermodule.c"
      case 125: // $bb36_i
        $iftmp_100_i=0; //@line 1637 "parsermodule.c"
        __label__ = 126; break; //@line 1637 "parsermodule.c"
      case 126: // $bb37_i
        var $596=$iftmp_100_i; //@line 1637 "parsermodule.c"
        $res_i87=$596; //@line 1637 "parsermodule.c"
        var $597=$j_i85; //@line 1636 "parsermodule.c"
        var $598=($597) + 2; //@line 1636 "parsermodule.c"
        $j_i85=$598; //@line 1636 "parsermodule.c"
        __lastLabel__ = 126; __label__ = 127; break; //@line 1636 "parsermodule.c"
      case 127: // $bb38_i
        var $599=__lastLabel__ == 126 ? $596 : ($_pr_i107);
        var $600=($599)==0; //@line 1636 "parsermodule.c"
        if ($600) { __label__ = 129; break; } else { __label__ = 128; break; } //@line 1636 "parsermodule.c"
      case 128: // $bb39_i
        var $601=$j_i85; //@line 1636 "parsermodule.c"
        var $602=$nch_i86; //@line 1636 "parsermodule.c"
        var $603=($601) < ($602); //@line 1636 "parsermodule.c"
        if ($603) { __label__ = 119; break; } else { __label__ = 129; break; } //@line 1636 "parsermodule.c"
      case 129: // $validate_expr_stmt_exit
        var $604=$res_i87; //@line 1640 "parsermodule.c"
        $60=$604; //@line 1640 "parsermodule.c"
        var $605=$60; //@line 1640 "parsermodule.c"
        $retval_i84=$605; //@line 1640 "parsermodule.c"
        var $retval41_i=$retval_i84; //@line 1640 "parsermodule.c"
        $res=$retval41_i; //@line 3139 "parsermodule.c"
        __label__ = 523; break; //@line 3139 "parsermodule.c"
      case 130: // $bb24
        var $606=$tree_addr; //@line 3142 "parsermodule.c"
        $tree_addr_i116=$606;
        var $607=$tree_addr_i116; //@line 1652 "parsermodule.c"
        var $608=$607+16; //@line 1652 "parsermodule.c"
        var $609=HEAP[$608]; //@line 1652 "parsermodule.c"
        $nch_i118=$609; //@line 1652 "parsermodule.c"
        var $610=$tree_addr_i116; //@line 1655 "parsermodule.c"
        $n_addr_i_i113=$610;
        $t_addr_i_i114=272;
        var $611=$n_addr_i_i113; //@line 956 "parsermodule.c"
        var $612=$611; //@line 956 "parsermodule.c"
        var $613=HEAP[$612]; //@line 956 "parsermodule.c"
        var $614=($613); //@line 956 "parsermodule.c"
        var $615=$t_addr_i_i114; //@line 956 "parsermodule.c"
        var $616=($614)!=($615); //@line 956 "parsermodule.c"
        if ($616) { __label__ = 131; break; } else { __label__ = 132; break; } //@line 956 "parsermodule.c"
      case 131: // $validate_ntype_exit_thread_i120
        var $617=$n_addr_i_i113; //@line 957 "parsermodule.c"
        var $618=$617; //@line 957 "parsermodule.c"
        var $619=HEAP[$618]; //@line 957 "parsermodule.c"
        var $620=($619); //@line 957 "parsermodule.c"
        var $621=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $622=$t_addr_i_i114; //@line 957 "parsermodule.c"
        var $623=_PyErr_Format($621, __str49, $622, $620); //@line 957 "parsermodule.c"
        $51=0; //@line 959 "parsermodule.c"
        $retval_i_i115=0; //@line 959 "parsermodule.c"
        __label__ = 134; break;
      case 132: // $bb_i121
        $51=1; //@line 961 "parsermodule.c"
        $retval_i_i115=1; //@line 959 "parsermodule.c"
        var $624=$nch_i118; //@line 1655 "parsermodule.c"
        var $625=($624) <= 0; //@line 1655 "parsermodule.c"
        if ($625) { __label__ = 134; break; } else { __label__ = 133; break; } //@line 1655 "parsermodule.c"
      case 133: // $bb1_i122
        var $626=$tree_addr_i116; //@line 1655 "parsermodule.c"
        var $627=$626+20; //@line 1655 "parsermodule.c"
        var $628=HEAP[$627]; //@line 1655 "parsermodule.c"
        var $629=$628; //@line 1655 "parsermodule.c"
        var $630=_validate_terminal($629, 1, __str104); //@line 1655 "parsermodule.c"
        var $631=($630)==0; //@line 1655 "parsermodule.c"
        if ($631) { __label__ = 134; break; } else { __label__ = 135; break; } //@line 1655 "parsermodule.c"
      case 134: // $bb4_i123
        $iftmp_101_i=0; //@line 1655 "parsermodule.c"
        $res_i119=0; //@line 1655 "parsermodule.c"
        __label__ = 167; break;
      case 135: // $bb5_i124
        $iftmp_101_i=1; //@line 1655 "parsermodule.c"
        $res_i119=1; //@line 1655 "parsermodule.c"
        var $632=$nch_i118; //@line 1657 "parsermodule.c"
        var $633=($632) > 1; //@line 1657 "parsermodule.c"
        if ($633) { __label__ = 136; break; } else { __label__ = 167; break; } //@line 1657 "parsermodule.c"
      case 136: // $bb6_i125
        var $634=$tree_addr_i116; //@line 1658 "parsermodule.c"
        var $635=$634+20; //@line 1658 "parsermodule.c"
        var $636=HEAP[$635]; //@line 1658 "parsermodule.c"
        var $637=$636+24; //@line 1658 "parsermodule.c"
        var $638=$637; //@line 1658 "parsermodule.c"
        var $639=HEAP[$638]; //@line 1658 "parsermodule.c"
        var $640=($639); //@line 1658 "parsermodule.c"
        $sym_i=$640; //@line 1658 "parsermodule.c"
        $i_i=1; //@line 1659 "parsermodule.c"
        $allow_trailing_comma_i=1; //@line 1660 "parsermodule.c"
        var $641=$sym_i; //@line 1662 "parsermodule.c"
        var $642=($641)==304; //@line 1662 "parsermodule.c"
        if ($642) { __label__ = 137; break; } else { __label__ = 138; break; } //@line 1662 "parsermodule.c"
      case 137: // $bb7_i126
        var $643=$tree_addr_i116; //@line 1663 "parsermodule.c"
        var $644=$643+20; //@line 1663 "parsermodule.c"
        var $645=HEAP[$644]; //@line 1663 "parsermodule.c"
        var $646=$i_i; //@line 1663 "parsermodule.c"
        var $647=$645+24*$646; //@line 1663 "parsermodule.c"
        var $648=$i_i; //@line 1663 "parsermodule.c"
        var $649=($648) + 1; //@line 1663 "parsermodule.c"
        $i_i=$649; //@line 1663 "parsermodule.c"
        var $650=_validate_test($647); //@line 1663 "parsermodule.c"
        $res_i119=$650; //@line 1663 "parsermodule.c"
        __lastLabel__ = 137; __label__ = 149; break; //@line 1663 "parsermodule.c"
      case 138: // $bb8_i127
        var $651=$nch_i118; //@line 1665 "parsermodule.c"
        var $652=($651) <= 2; //@line 1665 "parsermodule.c"
        var $653=$tree_addr_i116; //@line 1666 "parsermodule.c"
        if ($652) { __label__ = 139; break; } else { __label__ = 143; break; } //@line 1665 "parsermodule.c"
      case 139: // $bb9_i128
        $n_addr_i1_i109=$653;
        $num_addr_i_i110=3;
        $name_addr_i_i111=__str105;
        var $654=$n_addr_i1_i109; //@line 975 "parsermodule.c"
        var $655=$654+16; //@line 975 "parsermodule.c"
        var $656=HEAP[$655]; //@line 975 "parsermodule.c"
        var $657=$num_addr_i_i110; //@line 975 "parsermodule.c"
        var $658=($656)!=($657); //@line 975 "parsermodule.c"
        if ($658) { __label__ = 140; break; } else { __label__ = 141; break; } //@line 975 "parsermodule.c"
      case 140: // $bb_i3_i
        var $659=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $660=$name_addr_i_i111; //@line 976 "parsermodule.c"
        var $661=_PyErr_Format($659, __str50, $660); //@line 976 "parsermodule.c"
        $50=0; //@line 978 "parsermodule.c"
        __label__ = 142; break; //@line 978 "parsermodule.c"
      case 141: // $bb1_i4_i
        $50=1; //@line 980 "parsermodule.c"
        __label__ = 142; break; //@line 980 "parsermodule.c"
      case 142: // $validate_numnodes_exit_i
        var $662=$50; //@line 978 "parsermodule.c"
        $retval_i2_i112=$662; //@line 978 "parsermodule.c"
        var $retval3_i5_i=$retval_i2_i112; //@line 978 "parsermodule.c"
        $res_i119=$retval3_i5_i; //@line 1666 "parsermodule.c"
        __lastLabel__ = 142; __label__ = 149; break; //@line 1666 "parsermodule.c"
      case 143: // $bb10_i129
        var $663=$653+20; //@line 1668 "parsermodule.c"
        var $664=HEAP[$663]; //@line 1668 "parsermodule.c"
        var $665=$i_i; //@line 1668 "parsermodule.c"
        var $666=$664+24*$665; //@line 1668 "parsermodule.c"
        $n_addr_i6_i=$666;
        $t_addr_i7_i=35;
        var $667=$n_addr_i6_i; //@line 956 "parsermodule.c"
        var $668=$667; //@line 956 "parsermodule.c"
        var $669=HEAP[$668]; //@line 956 "parsermodule.c"
        var $670=($669); //@line 956 "parsermodule.c"
        var $671=$t_addr_i7_i; //@line 956 "parsermodule.c"
        var $672=($670)!=($671); //@line 956 "parsermodule.c"
        if ($672) { __label__ = 144; break; } else { __label__ = 145; break; } //@line 956 "parsermodule.c"
      case 144: // $validate_ntype_exit12_thread_i
        var $673=$n_addr_i6_i; //@line 957 "parsermodule.c"
        var $674=$673; //@line 957 "parsermodule.c"
        var $675=HEAP[$674]; //@line 957 "parsermodule.c"
        var $676=($675); //@line 957 "parsermodule.c"
        var $677=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $678=$t_addr_i7_i; //@line 957 "parsermodule.c"
        var $679=_PyErr_Format($677, __str49, $678, $676); //@line 957 "parsermodule.c"
        $49=0; //@line 959 "parsermodule.c"
        $retval_i8_i108=0; //@line 959 "parsermodule.c"
        __label__ = 147; break;
      case 145: // $bb11_i130
        $49=1; //@line 961 "parsermodule.c"
        $retval_i8_i108=1; //@line 959 "parsermodule.c"
        var $680=$tree_addr_i116; //@line 1668 "parsermodule.c"
        var $681=$680+20; //@line 1668 "parsermodule.c"
        var $682=HEAP[$681]; //@line 1668 "parsermodule.c"
        var $683=$i_i; //@line 1668 "parsermodule.c"
        var $684=($683) + 1; //@line 1668 "parsermodule.c"
        var $685=$682+24*$684; //@line 1668 "parsermodule.c"
        var $686=_validate_test($685); //@line 1668 "parsermodule.c"
        var $687=($686)==0; //@line 1668 "parsermodule.c"
        if ($687) { __label__ = 147; break; } else { __label__ = 146; break; } //@line 1668 "parsermodule.c"
      case 146: // $bb12_i131
        $iftmp_102_i=1; //@line 1668 "parsermodule.c"
        __label__ = 148; break; //@line 1668 "parsermodule.c"
      case 147: // $bb13_i132
        $iftmp_102_i=0; //@line 1668 "parsermodule.c"
        __label__ = 148; break; //@line 1668 "parsermodule.c"
      case 148: // $bb14_i133
        var $688=$iftmp_102_i; //@line 1668 "parsermodule.c"
        $res_i119=$688; //@line 1668 "parsermodule.c"
        var $689=$i_i; //@line 1670 "parsermodule.c"
        var $690=($689) + 2; //@line 1670 "parsermodule.c"
        $i_i=$690; //@line 1670 "parsermodule.c"
        $allow_trailing_comma_i=0; //@line 1671 "parsermodule.c"
        __lastLabel__ = 148; __label__ = 149; break; //@line 1671 "parsermodule.c"
      case 149: // $bb15_i134
        var $691=__lastLabel__ == 148 ? $688 : (__lastLabel__ == 142 ? $retval3_i5_i : ($650));
        var $692=($691)!=0; //@line 1674 "parsermodule.c"
        if ($692) { __label__ = 155; break; } else { __label__ = 167; break; } //@line 1674 "parsermodule.c"
      case 150: // $bb17_i135
        var $693=$tree_addr_i116; //@line 1677 "parsermodule.c"
        var $694=$693+20; //@line 1677 "parsermodule.c"
        var $695=HEAP[$694]; //@line 1677 "parsermodule.c"
        var $696=$i_i; //@line 1677 "parsermodule.c"
        var $697=$695+24*$696; //@line 1677 "parsermodule.c"
        var $698=_validate_terminal($697, 12, __str52); //@line 1677 "parsermodule.c"
        var $699=($698)==0; //@line 1677 "parsermodule.c"
        if ($699) { __label__ = 153; break; } else { __label__ = 151; break; } //@line 1677 "parsermodule.c"
      case 151: // $bb18_i136
        var $700=$tree_addr_i116; //@line 1677 "parsermodule.c"
        var $701=$700+20; //@line 1677 "parsermodule.c"
        var $702=HEAP[$701]; //@line 1677 "parsermodule.c"
        var $703=$i_i; //@line 1677 "parsermodule.c"
        var $704=($703) + 1; //@line 1677 "parsermodule.c"
        var $705=$702+24*$704; //@line 1677 "parsermodule.c"
        var $706=_validate_test($705); //@line 1677 "parsermodule.c"
        var $707=($706)==0; //@line 1677 "parsermodule.c"
        if ($707) { __label__ = 153; break; } else { __label__ = 152; break; } //@line 1677 "parsermodule.c"
      case 152: // $bb19_i137
        $iftmp_103_i=1; //@line 1677 "parsermodule.c"
        __label__ = 154; break; //@line 1677 "parsermodule.c"
      case 153: // $bb20_i138
        $iftmp_103_i=0; //@line 1677 "parsermodule.c"
        __label__ = 154; break; //@line 1677 "parsermodule.c"
      case 154: // $bb21_i139
        var $708=$iftmp_103_i; //@line 1677 "parsermodule.c"
        $res_i119=$708; //@line 1677 "parsermodule.c"
        $allow_trailing_comma_i=1; //@line 1679 "parsermodule.c"
        var $709=$i_i; //@line 1680 "parsermodule.c"
        var $710=($709) + 2; //@line 1680 "parsermodule.c"
        $i_i=$710; //@line 1680 "parsermodule.c"
        __lastLabel__ = 154; __label__ = 156; break; //@line 1680 "parsermodule.c"
      case 155: // $bb22thread_pre_split_i
        var $_pr_i140=$res_i119;
        __lastLabel__ = 155; __label__ = 156; break;
      case 156: // $bb22_i141
        var $711=__lastLabel__ == 155 ? $_pr_i140 : ($708);
        var $712=($711)==0; //@line 1676 "parsermodule.c"
        if ($712) { __label__ = 158; break; } else { __label__ = 157; break; } //@line 1676 "parsermodule.c"
      case 157: // $bb23_i142
        var $713=$i_i; //@line 1676 "parsermodule.c"
        var $714=($713) + 2; //@line 1676 "parsermodule.c"
        var $715=$nch_i118; //@line 1676 "parsermodule.c"
        var $716=($714) <= ($715); //@line 1676 "parsermodule.c"
        if ($716) { __label__ = 150; break; } else { __label__ = 158; break; } //@line 1676 "parsermodule.c"
      case 158: // $bb24_i143
        var $717=$res_i119; //@line 1682 "parsermodule.c"
        var $718=($717)==0; //@line 1682 "parsermodule.c"
        if ($718) { __label__ = 167; break; } else { __label__ = 159; break; } //@line 1682 "parsermodule.c"
      case 159: // $bb25_i144
        var $719=$allow_trailing_comma_i; //@line 1682 "parsermodule.c"
        var $720=($719)!=0; //@line 1682 "parsermodule.c"
        if ($720) { __label__ = 164; break; } else { __label__ = 160; break; } //@line 1682 "parsermodule.c"
      case 160: // $bb26_i145
        var $721=$tree_addr_i116; //@line 1683 "parsermodule.c"
        var $722=$i_i; //@line 1683 "parsermodule.c"
        $n_addr_i13_i=$721;
        $num_addr_i14_i=$722;
        $name_addr_i15_i=__str105;
        var $723=$n_addr_i13_i; //@line 975 "parsermodule.c"
        var $724=$723+16; //@line 975 "parsermodule.c"
        var $725=HEAP[$724]; //@line 975 "parsermodule.c"
        var $726=$num_addr_i14_i; //@line 975 "parsermodule.c"
        var $727=($725)!=($726); //@line 975 "parsermodule.c"
        if ($727) { __label__ = 161; break; } else { __label__ = 162; break; } //@line 975 "parsermodule.c"
      case 161: // $bb_i17_i
        var $728=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $729=$name_addr_i15_i; //@line 976 "parsermodule.c"
        var $730=_PyErr_Format($728, __str50, $729); //@line 976 "parsermodule.c"
        $48=0; //@line 978 "parsermodule.c"
        __label__ = 163; break; //@line 978 "parsermodule.c"
      case 162: // $bb1_i18_i146
        $48=1; //@line 980 "parsermodule.c"
        __label__ = 163; break; //@line 980 "parsermodule.c"
      case 163: // $validate_numnodes_exit20_i
        var $731=$48; //@line 978 "parsermodule.c"
        $retval_i16_i=$731; //@line 978 "parsermodule.c"
        var $retval3_i19_i=$retval_i16_i; //@line 978 "parsermodule.c"
        $res_i119=$retval3_i19_i; //@line 1683 "parsermodule.c"
        __label__ = 167; break; //@line 1683 "parsermodule.c"
      case 164: // $bb27_i
        var $_pr21_i=$res_i119;
        var $732=($_pr21_i)!=0; //@line 1684 "parsermodule.c"
        if ($732) { __label__ = 165; break; } else { __label__ = 167; break; } //@line 1684 "parsermodule.c"
      case 165: // $bb28_i
        var $733=$i_i; //@line 1684 "parsermodule.c"
        var $734=$nch_i118; //@line 1684 "parsermodule.c"
        var $735=($733) < ($734); //@line 1684 "parsermodule.c"
        if ($735) { __label__ = 166; break; } else { __label__ = 167; break; } //@line 1684 "parsermodule.c"
      case 166: // $bb29_i147
        var $736=$tree_addr_i116; //@line 1685 "parsermodule.c"
        var $737=$736+20; //@line 1685 "parsermodule.c"
        var $738=HEAP[$737]; //@line 1685 "parsermodule.c"
        var $739=$i_i; //@line 1685 "parsermodule.c"
        var $740=$738+24*$739; //@line 1685 "parsermodule.c"
        var $741=_validate_terminal($740, 12, __str52); //@line 1685 "parsermodule.c"
        $res_i119=$741; //@line 1685 "parsermodule.c"
        __label__ = 167; break; //@line 1685 "parsermodule.c"
      case 167: // $validate_print_stmt_exit
        var $742=$res_i119; //@line 1688 "parsermodule.c"
        $52=$742; //@line 1688 "parsermodule.c"
        var $743=$52; //@line 1688 "parsermodule.c"
        $retval_i117=$743; //@line 1688 "parsermodule.c"
        var $retval31_i=$retval_i117; //@line 1688 "parsermodule.c"
        $res=$retval31_i; //@line 3142 "parsermodule.c"
        __label__ = 523; break; //@line 3142 "parsermodule.c"
      case 168: // $bb25
        var $744=$tree_addr; //@line 3145 "parsermodule.c"
        $tree_addr_i155=$744;
        var $745=$tree_addr_i155; //@line 1695 "parsermodule.c"
        $n_addr_i_i151=$745;
        $num_addr_i_i152=2;
        $name_addr_i_i153=__str106;
        var $746=$n_addr_i_i151; //@line 975 "parsermodule.c"
        var $747=$746+16; //@line 975 "parsermodule.c"
        var $748=HEAP[$747]; //@line 975 "parsermodule.c"
        var $749=$num_addr_i_i152; //@line 975 "parsermodule.c"
        var $750=($748)!=($749); //@line 975 "parsermodule.c"
        if ($750) { __label__ = 169; break; } else { __label__ = 170; break; } //@line 975 "parsermodule.c"
      case 169: // $validate_numnodes_exit_thread_i157
        var $751=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $752=$name_addr_i_i153; //@line 976 "parsermodule.c"
        var $753=_PyErr_Format($751, __str50, $752); //@line 976 "parsermodule.c"
        $46=0; //@line 978 "parsermodule.c"
        $retval_i_i154=0; //@line 978 "parsermodule.c"
        __label__ = 173; break;
      case 170: // $bb_i158
        $46=1; //@line 980 "parsermodule.c"
        $retval_i_i154=1; //@line 978 "parsermodule.c"
        var $754=$tree_addr_i155; //@line 1695 "parsermodule.c"
        var $755=$754+20; //@line 1695 "parsermodule.c"
        var $756=HEAP[$755]; //@line 1695 "parsermodule.c"
        var $757=$756; //@line 1695 "parsermodule.c"
        var $758=_validate_terminal($757, 1, __str107); //@line 1695 "parsermodule.c"
        var $759=($758)==0; //@line 1695 "parsermodule.c"
        if ($759) { __label__ = 173; break; } else { __label__ = 171; break; } //@line 1695 "parsermodule.c"
      case 171: // $bb1_i160
        var $760=$tree_addr_i155; //@line 1695 "parsermodule.c"
        var $761=$760+20; //@line 1695 "parsermodule.c"
        var $762=HEAP[$761]; //@line 1695 "parsermodule.c"
        var $763=$762+24; //@line 1695 "parsermodule.c"
        $tree_addr_i_i149=$763;
        var $764=$tree_addr_i_i149; //@line 2968 "parsermodule.c"
        var $765=_validate_repeating_list($764, 326, (FUNCTION_TABLE_OFFSET + 12), __str171); //@line 2968 "parsermodule.c"
        $45=$765; //@line 2968 "parsermodule.c"
        var $766=$45; //@line 2968 "parsermodule.c"
        $retval_i1_i150=$766; //@line 2968 "parsermodule.c"
        var $retval1_i_i159=$retval_i1_i150; //@line 2968 "parsermodule.c"
        var $767=($retval1_i_i159)==0; //@line 1695 "parsermodule.c"
        if ($767) { __label__ = 173; break; } else { __label__ = 172; break; } //@line 1695 "parsermodule.c"
      case 172: // $bb2_i161
        $iftmp_104_i=1; //@line 1695 "parsermodule.c"
        __label__ = 174; break; //@line 1695 "parsermodule.c"
      case 173: // $bb3_i162
        $iftmp_104_i=0; //@line 1695 "parsermodule.c"
        __label__ = 174; break; //@line 1695 "parsermodule.c"
      case 174: // $validate_del_stmt_exit
        var $768=$iftmp_104_i; //@line 1695 "parsermodule.c"
        $47=$768; //@line 1695 "parsermodule.c"
        var $769=$47; //@line 1695 "parsermodule.c"
        $retval_i156=$769; //@line 1695 "parsermodule.c"
        var $retval5_i163=$retval_i156; //@line 1695 "parsermodule.c"
        $res=$retval5_i163; //@line 3145 "parsermodule.c"
        __label__ = 523; break; //@line 3145 "parsermodule.c"
      case 175: // $bb26
        var $770=$tree_addr; //@line 3148 "parsermodule.c"
        $n_addr_i165=$770;
        $num_addr_i166=1;
        $name_addr_i167=__str178;
        var $771=$n_addr_i165; //@line 975 "parsermodule.c"
        var $772=$771+16; //@line 975 "parsermodule.c"
        var $773=HEAP[$772]; //@line 975 "parsermodule.c"
        var $774=$num_addr_i166; //@line 975 "parsermodule.c"
        var $775=($773)!=($774); //@line 975 "parsermodule.c"
        if ($775) { __label__ = 176; break; } else { __label__ = 177; break; } //@line 975 "parsermodule.c"
      case 176: // $validate_numnodes_exit173_thread
        var $776=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $777=$name_addr_i167; //@line 976 "parsermodule.c"
        var $778=_PyErr_Format($776, __str50, $777); //@line 976 "parsermodule.c"
        $44=0; //@line 978 "parsermodule.c"
        $retval_i168=0; //@line 978 "parsermodule.c"
        __label__ = 179; break;
      case 177: // $bb27
        $44=1; //@line 980 "parsermodule.c"
        $retval_i168=1; //@line 978 "parsermodule.c"
        var $779=$tree_addr; //@line 3148 "parsermodule.c"
        var $780=$779+20; //@line 3148 "parsermodule.c"
        var $781=HEAP[$780]; //@line 3148 "parsermodule.c"
        var $782=$781; //@line 3148 "parsermodule.c"
        var $783=_validate_terminal($782, 1, __str178); //@line 3148 "parsermodule.c"
        var $784=($783)==0; //@line 3148 "parsermodule.c"
        if ($784) { __label__ = 179; break; } else { __label__ = 178; break; } //@line 3148 "parsermodule.c"
      case 178: // $bb28
        $iftmp_210=1; //@line 3148 "parsermodule.c"
        __label__ = 180; break; //@line 3148 "parsermodule.c"
      case 179: // $bb29
        $iftmp_210=0; //@line 3148 "parsermodule.c"
        __label__ = 180; break; //@line 3148 "parsermodule.c"
      case 180: // $bb30
        var $785=$iftmp_210; //@line 3148 "parsermodule.c"
        $res=$785; //@line 3148 "parsermodule.c"
        __label__ = 523; break; //@line 3148 "parsermodule.c"
      case 181: // $bb31
        var $786=$tree_addr; //@line 3152 "parsermodule.c"
        $n_addr_i174=$786;
        $num_addr_i175=1;
        $name_addr_i176=__str179;
        var $787=$n_addr_i174; //@line 975 "parsermodule.c"
        var $788=$787+16; //@line 975 "parsermodule.c"
        var $789=HEAP[$788]; //@line 975 "parsermodule.c"
        var $790=$num_addr_i175; //@line 975 "parsermodule.c"
        var $791=($789)!=($790); //@line 975 "parsermodule.c"
        if ($791) { __label__ = 182; break; } else { __label__ = 183; break; } //@line 975 "parsermodule.c"
      case 182: // $validate_numnodes_exit182_thread
        var $792=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $793=$name_addr_i176; //@line 976 "parsermodule.c"
        var $794=_PyErr_Format($792, __str50, $793); //@line 976 "parsermodule.c"
        $43=0; //@line 978 "parsermodule.c"
        $retval_i177=0; //@line 978 "parsermodule.c"
        __label__ = 185; break;
      case 183: // $bb32
        $43=1; //@line 980 "parsermodule.c"
        $retval_i177=1; //@line 978 "parsermodule.c"
        var $795=$tree_addr; //@line 3152 "parsermodule.c"
        var $796=$795+20; //@line 3152 "parsermodule.c"
        var $797=HEAP[$796]; //@line 3152 "parsermodule.c"
        var $798=$797; //@line 3152 "parsermodule.c"
        var $799=_validate_terminal($798, 1, __str179); //@line 3152 "parsermodule.c"
        var $800=($799)==0; //@line 3152 "parsermodule.c"
        if ($800) { __label__ = 185; break; } else { __label__ = 184; break; } //@line 3152 "parsermodule.c"
      case 184: // $bb33
        $iftmp_211=1; //@line 3152 "parsermodule.c"
        __label__ = 186; break; //@line 3152 "parsermodule.c"
      case 185: // $bb34
        $iftmp_211=0; //@line 3152 "parsermodule.c"
        __label__ = 186; break; //@line 3152 "parsermodule.c"
      case 186: // $bb35
        var $801=$iftmp_211; //@line 3152 "parsermodule.c"
        $res=$801; //@line 3152 "parsermodule.c"
        __label__ = 523; break; //@line 3152 "parsermodule.c"
      case 187: // $bb36
        var $802=$tree_addr; //@line 3156 "parsermodule.c"
        $n_addr_i183=$802;
        $num_addr_i184=1;
        $name_addr_i185=__str180;
        var $803=$n_addr_i183; //@line 975 "parsermodule.c"
        var $804=$803+16; //@line 975 "parsermodule.c"
        var $805=HEAP[$804]; //@line 975 "parsermodule.c"
        var $806=$num_addr_i184; //@line 975 "parsermodule.c"
        var $807=($805)!=($806); //@line 975 "parsermodule.c"
        if ($807) { __label__ = 188; break; } else { __label__ = 189; break; } //@line 975 "parsermodule.c"
      case 188: // $validate_numnodes_exit191_thread
        var $808=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $809=$name_addr_i185; //@line 976 "parsermodule.c"
        var $810=_PyErr_Format($808, __str50, $809); //@line 976 "parsermodule.c"
        $42=0; //@line 978 "parsermodule.c"
        $retval_i186=0; //@line 978 "parsermodule.c"
        __label__ = 191; break;
      case 189: // $bb37
        $42=1; //@line 980 "parsermodule.c"
        $retval_i186=1; //@line 978 "parsermodule.c"
        var $811=$tree_addr; //@line 3156 "parsermodule.c"
        var $812=$811+20; //@line 3156 "parsermodule.c"
        var $813=HEAP[$812]; //@line 3156 "parsermodule.c"
        var $814=$813; //@line 3156 "parsermodule.c"
        var $815=_validate_terminal($814, 1, __str180); //@line 3156 "parsermodule.c"
        var $816=($815)==0; //@line 3156 "parsermodule.c"
        if ($816) { __label__ = 191; break; } else { __label__ = 190; break; } //@line 3156 "parsermodule.c"
      case 190: // $bb38
        $iftmp_212=1; //@line 3156 "parsermodule.c"
        __label__ = 192; break; //@line 3156 "parsermodule.c"
      case 191: // $bb39
        $iftmp_212=0; //@line 3156 "parsermodule.c"
        __label__ = 192; break; //@line 3156 "parsermodule.c"
      case 192: // $bb40
        var $817=$iftmp_212; //@line 3156 "parsermodule.c"
        $res=$817; //@line 3156 "parsermodule.c"
        __label__ = 523; break; //@line 3156 "parsermodule.c"
      case 193: // $bb41
        var $818=$tree_addr; //@line 3160 "parsermodule.c"
        $tree_addr_i197=$818;
        var $819=$tree_addr_i197; //@line 1704 "parsermodule.c"
        var $820=$819+16; //@line 1704 "parsermodule.c"
        var $821=HEAP[$820]; //@line 1704 "parsermodule.c"
        $nch_i199=$821; //@line 1704 "parsermodule.c"
        var $822=$tree_addr_i197; //@line 1707 "parsermodule.c"
        $n_addr_i_i194=$822;
        $t_addr_i_i195=278;
        var $823=$n_addr_i_i194; //@line 956 "parsermodule.c"
        var $824=$823; //@line 956 "parsermodule.c"
        var $825=HEAP[$824]; //@line 956 "parsermodule.c"
        var $826=($825); //@line 956 "parsermodule.c"
        var $827=$t_addr_i_i195; //@line 956 "parsermodule.c"
        var $828=($826)!=($827); //@line 956 "parsermodule.c"
        if ($828) { __label__ = 194; break; } else { __label__ = 195; break; } //@line 956 "parsermodule.c"
      case 194: // $validate_ntype_exit_thread_i201
        var $829=$n_addr_i_i194; //@line 957 "parsermodule.c"
        var $830=$829; //@line 957 "parsermodule.c"
        var $831=HEAP[$830]; //@line 957 "parsermodule.c"
        var $832=($831); //@line 957 "parsermodule.c"
        var $833=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $834=$t_addr_i_i195; //@line 957 "parsermodule.c"
        var $835=_PyErr_Format($833, __str49, $834, $832); //@line 957 "parsermodule.c"
        $40=0; //@line 959 "parsermodule.c"
        $retval_i_i196=0; //@line 959 "parsermodule.c"
        __label__ = 197; break;
      case 195: // $bb_i203
        $40=1; //@line 961 "parsermodule.c"
        $retval_i_i196=1; //@line 959 "parsermodule.c"
        var $836=$nch_i199; //@line 1707 "parsermodule.c"
        var $837=($836)==1; //@line 1707 "parsermodule.c"
        var $838=$nch_i199; //@line 1707 "parsermodule.c"
        var $839=($838)==2; //@line 1707 "parsermodule.c"
        var $or_cond_i202=($837) | ($839);
        if ($or_cond_i202) { __label__ = 196; break; } else { __label__ = 197; break; } //@line 1707 "parsermodule.c"
      case 196: // $bb2_i204
        var $840=$tree_addr_i197; //@line 1707 "parsermodule.c"
        var $841=$840+20; //@line 1707 "parsermodule.c"
        var $842=HEAP[$841]; //@line 1707 "parsermodule.c"
        var $843=$842; //@line 1707 "parsermodule.c"
        var $844=_validate_terminal($843, 1, __str108); //@line 1707 "parsermodule.c"
        var $845=($844)==0; //@line 1707 "parsermodule.c"
        if ($845) { __label__ = 197; break; } else { __label__ = 198; break; } //@line 1707 "parsermodule.c"
      case 197: // $bb5_i205
        $iftmp_105_i=0; //@line 1707 "parsermodule.c"
        $res_i200=0; //@line 1707 "parsermodule.c"
        __label__ = 200; break;
      case 198: // $bb6_i206
        $iftmp_105_i=1; //@line 1707 "parsermodule.c"
        $res_i200=1; //@line 1707 "parsermodule.c"
        var $846=$nch_i199; //@line 1709 "parsermodule.c"
        var $847=($846)==2; //@line 1709 "parsermodule.c"
        if ($847) { __label__ = 199; break; } else { __label__ = 200; break; } //@line 1709 "parsermodule.c"
      case 199: // $bb7_i208
        var $848=$tree_addr_i197; //@line 1710 "parsermodule.c"
        var $849=$848+20; //@line 1710 "parsermodule.c"
        var $850=HEAP[$849]; //@line 1710 "parsermodule.c"
        var $851=$850+24; //@line 1710 "parsermodule.c"
        $tree_addr_i_i192=$851;
        var $852=$tree_addr_i_i192; //@line 1162 "parsermodule.c"
        var $853=_validate_repeating_list($852, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $39=$853; //@line 1162 "parsermodule.c"
        var $854=$39; //@line 1162 "parsermodule.c"
        $retval_i2_i193=$854; //@line 1162 "parsermodule.c"
        var $retval1_i_i207=$retval_i2_i193; //@line 1162 "parsermodule.c"
        $res_i200=$retval1_i_i207; //@line 1710 "parsermodule.c"
        __label__ = 200; break; //@line 1710 "parsermodule.c"
      case 200: // $validate_return_stmt_exit
        var $855=$res_i200; //@line 1712 "parsermodule.c"
        $41=$855; //@line 1712 "parsermodule.c"
        var $856=$41; //@line 1712 "parsermodule.c"
        $retval_i198=$856; //@line 1712 "parsermodule.c"
        var $retval9_i=$retval_i198; //@line 1712 "parsermodule.c"
        $res=$retval9_i; //@line 3160 "parsermodule.c"
        __label__ = 523; break; //@line 3160 "parsermodule.c"
      case 201: // $bb42
        var $857=$tree_addr; //@line 3163 "parsermodule.c"
        $tree_addr_i216=$857;
        var $858=$tree_addr_i216; //@line 1719 "parsermodule.c"
        var $859=$858+16; //@line 1719 "parsermodule.c"
        var $860=HEAP[$859]; //@line 1719 "parsermodule.c"
        $nch_i218=$860; //@line 1719 "parsermodule.c"
        var $861=$tree_addr_i216; //@line 1721 "parsermodule.c"
        $n_addr_i_i213=$861;
        $t_addr_i_i214=280;
        var $862=$n_addr_i_i213; //@line 956 "parsermodule.c"
        var $863=$862; //@line 956 "parsermodule.c"
        var $864=HEAP[$863]; //@line 956 "parsermodule.c"
        var $865=($864); //@line 956 "parsermodule.c"
        var $866=$t_addr_i_i214; //@line 956 "parsermodule.c"
        var $867=($865)!=($866); //@line 956 "parsermodule.c"
        if ($867) { __label__ = 202; break; } else { __label__ = 203; break; } //@line 956 "parsermodule.c"
      case 202: // $validate_ntype_exit_thread_i220
        var $868=$n_addr_i_i213; //@line 957 "parsermodule.c"
        var $869=$868; //@line 957 "parsermodule.c"
        var $870=HEAP[$869]; //@line 957 "parsermodule.c"
        var $871=($870); //@line 957 "parsermodule.c"
        var $872=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $873=$t_addr_i_i214; //@line 957 "parsermodule.c"
        var $874=_PyErr_Format($872, __str49, $873, $871); //@line 957 "parsermodule.c"
        $37=0; //@line 959 "parsermodule.c"
        $retval_i_i215=0; //@line 959 "parsermodule.c"
        __label__ = 219; break;
      case 203: // $bb_i223
        $37=1; //@line 961 "parsermodule.c"
        $retval_i_i215=1; //@line 959 "parsermodule.c"
        var $875=$nch_i218; //@line 1721 "parsermodule.c"
        var $876=($875)==1; //@line 1721 "parsermodule.c"
        var $877=$nch_i218; //@line 1721 "parsermodule.c"
        var $878=($877)==2; //@line 1721 "parsermodule.c"
        var $or_cond_i221=($876) | ($878);
        var $879=$nch_i218; //@line 1721 "parsermodule.c"
        var $880=($879)==4; //@line 1721 "parsermodule.c"
        var $or_cond3_i222=($or_cond_i221) | ($880);
        var $881=$nch_i218; //@line 1721 "parsermodule.c"
        var $882=($881)==6; //@line 1721 "parsermodule.c"
        var $or_cond5_i=($or_cond3_i222) | ($882);
        if ($or_cond5_i) { __label__ = 204; break; } else { __label__ = 219; break; } //@line 1721 "parsermodule.c"
      case 204: // $bb7_i224
        $iftmp_106_i=1; //@line 1721 "parsermodule.c"
        $res_i219=1; //@line 1721 "parsermodule.c"
        var $883=$tree_addr_i216; //@line 1724 "parsermodule.c"
        var $884=$883+20; //@line 1724 "parsermodule.c"
        var $885=HEAP[$884]; //@line 1724 "parsermodule.c"
        var $886=$885; //@line 1724 "parsermodule.c"
        var $887=_validate_terminal($886, 1, __str109); //@line 1724 "parsermodule.c"
        $res_i219=$887; //@line 1724 "parsermodule.c"
        var $888=$res_i219; //@line 1725 "parsermodule.c"
        var $889=($888)!=0; //@line 1725 "parsermodule.c"
        if ($889) { __label__ = 205; break; } else { __label__ = 223; break; } //@line 1725 "parsermodule.c"
      case 205: // $bb8_i225
        var $890=$nch_i218; //@line 1725 "parsermodule.c"
        var $891=($890) > 1; //@line 1725 "parsermodule.c"
        if ($891) { __label__ = 206; break; } else { __label__ = 207; break; } //@line 1725 "parsermodule.c"
      case 206: // $bb9_i226
        var $892=$tree_addr_i216; //@line 1726 "parsermodule.c"
        var $893=$892+20; //@line 1726 "parsermodule.c"
        var $894=HEAP[$893]; //@line 1726 "parsermodule.c"
        var $895=$894+24; //@line 1726 "parsermodule.c"
        var $896=_validate_test($895); //@line 1726 "parsermodule.c"
        $res_i219=$896; //@line 1726 "parsermodule.c"
        __lastLabel__ = 206; __label__ = 208; break; //@line 1726 "parsermodule.c"
      case 207: // $bb10thread_pre_split_i
        var $_pr_i227=$res_i219;
        __lastLabel__ = 207; __label__ = 208; break;
      case 208: // $bb10_i228
        var $897=__lastLabel__ == 207 ? $_pr_i227 : ($896);
        var $898=($897)!=0; //@line 1727 "parsermodule.c"
        if ($898) { __label__ = 209; break; } else { __label__ = 223; break; } //@line 1727 "parsermodule.c"
      case 209: // $bb11_i229
        var $899=$nch_i218; //@line 1727 "parsermodule.c"
        var $900=($899) > 2; //@line 1727 "parsermodule.c"
        if ($900) { __label__ = 210; break; } else { __label__ = 223; break; } //@line 1727 "parsermodule.c"
      case 210: // $bb12_i230
        var $901=$tree_addr_i216; //@line 1728 "parsermodule.c"
        var $902=$901+20; //@line 1728 "parsermodule.c"
        var $903=HEAP[$902]; //@line 1728 "parsermodule.c"
        var $904=$903+48; //@line 1728 "parsermodule.c"
        var $905=_validate_terminal($904, 12, __str52); //@line 1728 "parsermodule.c"
        var $906=($905)==0; //@line 1728 "parsermodule.c"
        if ($906) { __label__ = 212; break; } else { __label__ = 211; break; } //@line 1728 "parsermodule.c"
      case 211: // $bb13_i231
        var $907=$tree_addr_i216; //@line 1728 "parsermodule.c"
        var $908=$907+20; //@line 1728 "parsermodule.c"
        var $909=HEAP[$908]; //@line 1728 "parsermodule.c"
        var $910=$909+72; //@line 1728 "parsermodule.c"
        var $911=_validate_test($910); //@line 1728 "parsermodule.c"
        var $912=($911)==0; //@line 1728 "parsermodule.c"
        if ($912) { __label__ = 212; break; } else { __label__ = 213; break; } //@line 1728 "parsermodule.c"
      case 212: // $bb25_thread12_i
        $iftmp_107_i=0; //@line 1728 "parsermodule.c"
        $res_i219=0; //@line 1728 "parsermodule.c"
        __label__ = 232; break;
      case 213: // $bb17_i232
        $iftmp_107_i=1; //@line 1728 "parsermodule.c"
        $res_i219=1; //@line 1728 "parsermodule.c"
        var $913=$nch_i218; //@line 1730 "parsermodule.c"
        var $914=($913) > 4; //@line 1730 "parsermodule.c"
        if ($914) { __lastLabel__ = 213; __label__ = 214; break; } else { __lastLabel__ = 213; __label__ = 226; break; } //@line 1730 "parsermodule.c"
      case 214: // $bb18_i233
        var $915=$tree_addr_i216; //@line 1731 "parsermodule.c"
        var $916=$915+20; //@line 1731 "parsermodule.c"
        var $917=HEAP[$916]; //@line 1731 "parsermodule.c"
        var $918=$917+96; //@line 1731 "parsermodule.c"
        var $919=_validate_terminal($918, 12, __str52); //@line 1731 "parsermodule.c"
        var $920=($919)==0; //@line 1731 "parsermodule.c"
        if ($920) { __label__ = 217; break; } else { __label__ = 215; break; } //@line 1731 "parsermodule.c"
      case 215: // $bb19_i234
        var $921=$tree_addr_i216; //@line 1731 "parsermodule.c"
        var $922=$921+20; //@line 1731 "parsermodule.c"
        var $923=HEAP[$922]; //@line 1731 "parsermodule.c"
        var $924=$923+120; //@line 1731 "parsermodule.c"
        var $925=_validate_test($924); //@line 1731 "parsermodule.c"
        var $926=($925)==0; //@line 1731 "parsermodule.c"
        if ($926) { __label__ = 217; break; } else { __label__ = 216; break; } //@line 1731 "parsermodule.c"
      case 216: // $bb20_i235
        $iftmp_108_i=1; //@line 1731 "parsermodule.c"
        __label__ = 218; break; //@line 1731 "parsermodule.c"
      case 217: // $bb21_i236
        $iftmp_108_i=0; //@line 1731 "parsermodule.c"
        __label__ = 218; break; //@line 1731 "parsermodule.c"
      case 218: // $bb22_i237
        var $927=$iftmp_108_i; //@line 1731 "parsermodule.c"
        $res_i219=$927; //@line 1731 "parsermodule.c"
        __lastLabel__ = 218; __label__ = 224; break; //@line 1731 "parsermodule.c"
      case 219: // $bb24_i238
        $iftmp_106_i=0; //@line 1721 "parsermodule.c"
        $res_i219=0; //@line 1721 "parsermodule.c"
        var $928=$tree_addr_i216; //@line 1724 "parsermodule.c"
        $n_addr_i6_i210=$928;
        $num_addr_i_i211=2;
        $name_addr_i_i212=__str109;
        var $929=$n_addr_i6_i210; //@line 975 "parsermodule.c"
        var $930=$929+16; //@line 975 "parsermodule.c"
        var $931=HEAP[$930]; //@line 975 "parsermodule.c"
        var $932=$num_addr_i_i211; //@line 975 "parsermodule.c"
        var $933=($931)!=($932); //@line 975 "parsermodule.c"
        if ($933) { __label__ = 220; break; } else { __label__ = 221; break; } //@line 975 "parsermodule.c"
      case 220: // $bb_i8_i
        var $934=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $935=$name_addr_i_i212; //@line 976 "parsermodule.c"
        var $936=_PyErr_Format($934, __str50, $935); //@line 976 "parsermodule.c"
        $36=0; //@line 978 "parsermodule.c"
        __label__ = 222; break; //@line 978 "parsermodule.c"
      case 221: // $bb1_i9_i
        $36=1; //@line 980 "parsermodule.c"
        __label__ = 222; break; //@line 980 "parsermodule.c"
      case 222: // $validate_numnodes_exit_i239
        var $937=$36; //@line 978 "parsermodule.c"
        $retval_i7_i=$937; //@line 978 "parsermodule.c"
        __label__ = 223; break; //@line 1736 "parsermodule.c"
      case 223: // $bb25thread_pre_split_i
        var $_pr11_i=$res_i219;
        __lastLabel__ = 223; __label__ = 224; break;
      case 224: // $bb25_i240
        var $938=__lastLabel__ == 223 ? $_pr11_i : ($927);
        var $939=($938)!=0; //@line 1737 "parsermodule.c"
        if ($939) { __label__ = 225; break; } else { __label__ = 232; break; } //@line 1737 "parsermodule.c"
      case 225: // $bb26thread_pre_split_i
        var $_pr13_i=$nch_i218;
        __lastLabel__ = 225; __label__ = 226; break;
      case 226: // $bb26_i241
        var $940=__lastLabel__ == 225 ? $_pr13_i : ($913);
        var $941=($940)==4; //@line 1737 "parsermodule.c"
        if ($941) { __label__ = 227; break; } else { __label__ = 232; break; } //@line 1737 "parsermodule.c"
      case 227: // $bb27_i242
        var $942=$tree_addr_i216; //@line 1738 "parsermodule.c"
        var $943=$942+20; //@line 1738 "parsermodule.c"
        var $944=HEAP[$943]; //@line 1738 "parsermodule.c"
        var $945=$944+48; //@line 1738 "parsermodule.c"
        var $946=_validate_terminal($945, 12, __str52); //@line 1738 "parsermodule.c"
        var $947=($946)==0; //@line 1738 "parsermodule.c"
        if ($947) { __label__ = 230; break; } else { __label__ = 228; break; } //@line 1738 "parsermodule.c"
      case 228: // $bb28_i243
        var $948=$tree_addr_i216; //@line 1738 "parsermodule.c"
        var $949=$948+20; //@line 1738 "parsermodule.c"
        var $950=HEAP[$949]; //@line 1738 "parsermodule.c"
        var $951=$950+72; //@line 1738 "parsermodule.c"
        var $952=_validate_test($951); //@line 1738 "parsermodule.c"
        var $953=($952)==0; //@line 1738 "parsermodule.c"
        if ($953) { __label__ = 230; break; } else { __label__ = 229; break; } //@line 1738 "parsermodule.c"
      case 229: // $bb29_i244
        $iftmp_109_i=1; //@line 1738 "parsermodule.c"
        __label__ = 231; break; //@line 1738 "parsermodule.c"
      case 230: // $bb30_i245
        $iftmp_109_i=0; //@line 1738 "parsermodule.c"
        __label__ = 231; break; //@line 1738 "parsermodule.c"
      case 231: // $bb31_i
        var $954=$iftmp_109_i; //@line 1738 "parsermodule.c"
        $res_i219=$954; //@line 1738 "parsermodule.c"
        __label__ = 232; break; //@line 1738 "parsermodule.c"
      case 232: // $validate_raise_stmt_exit
        var $955=$res_i219; //@line 1741 "parsermodule.c"
        $38=$955; //@line 1741 "parsermodule.c"
        var $956=$38; //@line 1741 "parsermodule.c"
        $retval_i217=$956; //@line 1741 "parsermodule.c"
        var $retval33_i=$retval_i217; //@line 1741 "parsermodule.c"
        $res=$retval33_i; //@line 3163 "parsermodule.c"
        __label__ = 523; break; //@line 3163 "parsermodule.c"
      case 233: // $bb43
        var $957=$tree_addr; //@line 3166 "parsermodule.c"
        $tree_addr_i300=$957;
        var $958=$tree_addr_i300; //@line 1921 "parsermodule.c"
        var $959=$958+16; //@line 1921 "parsermodule.c"
        var $960=HEAP[$959]; //@line 1921 "parsermodule.c"
        $nch_i302=$960; //@line 1921 "parsermodule.c"
        var $961=$tree_addr_i300; //@line 1922 "parsermodule.c"
        $n_addr_i_i296=$961;
        $num_addr_i_i297=1;
        $name_addr_i_i298=__str119;
        var $962=$n_addr_i_i296; //@line 975 "parsermodule.c"
        var $963=$962+16; //@line 975 "parsermodule.c"
        var $964=HEAP[$963]; //@line 975 "parsermodule.c"
        var $965=$num_addr_i_i297; //@line 975 "parsermodule.c"
        var $966=($964)!=($965); //@line 975 "parsermodule.c"
        if ($966) { __label__ = 237; break; } else { __label__ = 234; break; } //@line 975 "parsermodule.c"
      case 234: // $bb_i308
        $27=1; //@line 980 "parsermodule.c"
        $retval_i_i299=1; //@line 978 "parsermodule.c"
        $res_i303=1; //@line 1922 "parsermodule.c"
        var $967=$tree_addr_i300; //@line 1925 "parsermodule.c"
        var $968=$967+20; //@line 1925 "parsermodule.c"
        var $969=HEAP[$968]; //@line 1925 "parsermodule.c"
        var $970=$969; //@line 1925 "parsermodule.c"
        var $971=$970; //@line 1925 "parsermodule.c"
        var $972=HEAP[$971]; //@line 1925 "parsermodule.c"
        var $973=($972); //@line 1925 "parsermodule.c"
        $ntype_i=$973; //@line 1925 "parsermodule.c"
        var $974=$ntype_i; //@line 1927 "parsermodule.c"
        var $975=($974)==282; //@line 1927 "parsermodule.c"
        var $976=$ntype_i; //@line 1927 "parsermodule.c"
        var $977=($976)==283; //@line 1927 "parsermodule.c"
        var $or_cond_i307=($975) | ($977);
        if ($or_cond_i307) { __label__ = 235; break; } else { __label__ = 236; break; } //@line 1927 "parsermodule.c"
      case 235: // $bb2_i309
        var $978=$tree_addr_i300; //@line 1928 "parsermodule.c"
        var $979=$978+20; //@line 1928 "parsermodule.c"
        var $980=HEAP[$979]; //@line 1928 "parsermodule.c"
        var $981=$980; //@line 1928 "parsermodule.c"
        var $982=_validate_node($981); //@line 1928 "parsermodule.c"
        $res_i303=$982; //@line 1928 "parsermodule.c"
        __label__ = 239; break; //@line 1928 "parsermodule.c"
      case 236: // $bb3_i310
        $res_i303=0; //@line 1930 "parsermodule.c"
        $message_addr_i_i295=__str120;
        var $983=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $984=$message_addr_i_i295; //@line 531 "parsermodule.c"
        _PyErr_SetString($983, $984); //@line 531 "parsermodule.c"
        __label__ = 239; break; //@line 1931 "parsermodule.c"
      case 237: // $bb5_i311
        var $985=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $986=$name_addr_i_i298; //@line 976 "parsermodule.c"
        var $987=_PyErr_Format($985, __str50, $986); //@line 976 "parsermodule.c"
        $27=0; //@line 978 "parsermodule.c"
        $retval_i_i299=0; //@line 978 "parsermodule.c"
        $res_i303=0; //@line 1922 "parsermodule.c"
        var $988=$nch_i302; //@line 1934 "parsermodule.c"
        var $989=($988)==1; //@line 1934 "parsermodule.c"
        if ($989) { __label__ = 238; break; } else { __label__ = 239; break; } //@line 1934 "parsermodule.c"
      case 238: // $bb6_i312
        $res_i303=0; //@line 1935 "parsermodule.c"
        var $990=$tree_addr_i300; //@line 1936 "parsermodule.c"
        var $991=$990+20; //@line 1936 "parsermodule.c"
        var $992=HEAP[$991]; //@line 1936 "parsermodule.c"
        var $993=$992; //@line 1936 "parsermodule.c"
        var $994=$993; //@line 1936 "parsermodule.c"
        var $995=HEAP[$994]; //@line 1936 "parsermodule.c"
        var $996=($995); //@line 1936 "parsermodule.c"
        var $997=HEAP[_parser_error]; //@line 1936 "parsermodule.c"
        var $998=_PyErr_Format($997, __str121, $996); //@line 1936 "parsermodule.c"
        __label__ = 239; break; //@line 1936 "parsermodule.c"
      case 239: // $validate_import_stmt_exit
        var $999=$res_i303; //@line 1940 "parsermodule.c"
        $28=$999; //@line 1940 "parsermodule.c"
        var $1000=$28; //@line 1940 "parsermodule.c"
        $retval_i301=$1000; //@line 1940 "parsermodule.c"
        var $retval8_i=$retval_i301; //@line 1940 "parsermodule.c"
        $res=$retval8_i; //@line 3166 "parsermodule.c"
        __label__ = 523; break; //@line 3166 "parsermodule.c"
      case 240: // $bb44
        var $1001=$tree_addr; //@line 3169 "parsermodule.c"
        $tree_addr_i285=$1001;
        var $1002=$tree_addr_i285; //@line 1870 "parsermodule.c"
        $n_addr_i_i282=$1002;
        $t_addr_i_i283=282;
        var $1003=$n_addr_i_i282; //@line 956 "parsermodule.c"
        var $1004=$1003; //@line 956 "parsermodule.c"
        var $1005=HEAP[$1004]; //@line 956 "parsermodule.c"
        var $1006=($1005); //@line 956 "parsermodule.c"
        var $1007=$t_addr_i_i283; //@line 956 "parsermodule.c"
        var $1008=($1006)!=($1007); //@line 956 "parsermodule.c"
        if ($1008) { __label__ = 241; break; } else { __label__ = 242; break; } //@line 956 "parsermodule.c"
      case 241: // $validate_ntype_exit_thread_i287
        var $1009=$n_addr_i_i282; //@line 957 "parsermodule.c"
        var $1010=$1009; //@line 957 "parsermodule.c"
        var $1011=HEAP[$1010]; //@line 957 "parsermodule.c"
        var $1012=($1011); //@line 957 "parsermodule.c"
        var $1013=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1014=$t_addr_i_i283; //@line 957 "parsermodule.c"
        var $1015=_PyErr_Format($1013, __str49, $1014, $1012); //@line 957 "parsermodule.c"
        $31=0; //@line 959 "parsermodule.c"
        $retval_i_i284=0; //@line 959 "parsermodule.c"
        __label__ = 259; break;
      case 242: // $bb_i288
        $31=1; //@line 961 "parsermodule.c"
        $retval_i_i284=1; //@line 959 "parsermodule.c"
        var $1016=$tree_addr_i285; //@line 1870 "parsermodule.c"
        $n_addr_i1_i278=$1016;
        $num_addr_i_i279=2;
        $name_addr_i_i280=__str116;
        var $1017=$n_addr_i1_i278; //@line 975 "parsermodule.c"
        var $1018=$1017+16; //@line 975 "parsermodule.c"
        var $1019=HEAP[$1018]; //@line 975 "parsermodule.c"
        var $1020=$num_addr_i_i279; //@line 975 "parsermodule.c"
        var $1021=($1019)!=($1020); //@line 975 "parsermodule.c"
        if ($1021) { __label__ = 243; break; } else { __label__ = 244; break; } //@line 975 "parsermodule.c"
      case 243: // $validate_numnodes_exit_thread_i289
        var $1022=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $1023=$name_addr_i_i280; //@line 976 "parsermodule.c"
        var $1024=_PyErr_Format($1022, __str50, $1023); //@line 976 "parsermodule.c"
        $30=0; //@line 978 "parsermodule.c"
        $retval_i2_i281=0; //@line 978 "parsermodule.c"
        __label__ = 259; break;
      case 244: // $bb1_i290
        $30=1; //@line 980 "parsermodule.c"
        $retval_i2_i281=1; //@line 978 "parsermodule.c"
        var $1025=$tree_addr_i285; //@line 1870 "parsermodule.c"
        var $1026=$1025+20; //@line 1870 "parsermodule.c"
        var $1027=HEAP[$1026]; //@line 1870 "parsermodule.c"
        var $1028=$1027; //@line 1870 "parsermodule.c"
        var $1029=_validate_terminal($1028, 1, __str117); //@line 1870 "parsermodule.c"
        var $1030=($1029)==0; //@line 1870 "parsermodule.c"
        if ($1030) { __label__ = 259; break; } else { __label__ = 245; break; } //@line 1870 "parsermodule.c"
      case 245: // $bb2_i291
        var $1031=$tree_addr_i285; //@line 1870 "parsermodule.c"
        var $1032=$1031+20; //@line 1870 "parsermodule.c"
        var $1033=HEAP[$1032]; //@line 1870 "parsermodule.c"
        var $1034=$1033+24; //@line 1870 "parsermodule.c"
        $tree_addr_i_i276=$1034;
        var $1035=$tree_addr_i_i276; //@line 1840 "parsermodule.c"
        var $1036=$1035+16; //@line 1840 "parsermodule.c"
        var $1037=HEAP[$1036]; //@line 1840 "parsermodule.c"
        $nch_i_i=$1037; //@line 1840 "parsermodule.c"
        var $1038=$nch_i_i; //@line 1841 "parsermodule.c"
        var $1039=($1038) & 1; //@line 1841 "parsermodule.c"
        var $1040=((($1039)) & 255); //@line 1841 "parsermodule.c"
        var $toBool_i_i=($1040)!=0; //@line 1841 "parsermodule.c"
        var $toBoolnot_i_i=($toBool_i_i) ^ 1; //@line 1841 "parsermodule.c"
        var $toBoolnot1_i_i=($toBoolnot_i_i); //@line 1841 "parsermodule.c"
        var $toBool3_i_i=($toBoolnot1_i_i)!=0; //@line 1841 "parsermodule.c"
        if ($toBool3_i_i) { __label__ = 248; break; } else { __label__ = 246; break; } //@line 1841 "parsermodule.c"
      case 246: // $bb_i7_i
        var $1041=$tree_addr_i_i276; //@line 1841 "parsermodule.c"
        var $1042=$1041+20; //@line 1841 "parsermodule.c"
        var $1043=HEAP[$1042]; //@line 1841 "parsermodule.c"
        var $1044=$1043; //@line 1841 "parsermodule.c"
        var $1045=_validate_dotted_as_name($1044); //@line 1841 "parsermodule.c"
        var $1046=($1045)==0; //@line 1841 "parsermodule.c"
        if ($1046) { __label__ = 248; break; } else { __label__ = 247; break; } //@line 1841 "parsermodule.c"
      case 247: // $bb4_i_i
        $iftmp_116_i_i=1; //@line 1841 "parsermodule.c"
        __label__ = 249; break; //@line 1841 "parsermodule.c"
      case 248: // $bb5_i_i
        $iftmp_116_i_i=0; //@line 1841 "parsermodule.c"
        __label__ = 249; break; //@line 1841 "parsermodule.c"
      case 249: // $bb6_i_i
        var $1047=$iftmp_116_i_i; //@line 1841 "parsermodule.c"
        $res_i_i=$1047; //@line 1841 "parsermodule.c"
        $i_i_i277=1; //@line 1844 "parsermodule.c"
        __lastLabel__ = 249; __label__ = 255; break; //@line 1844 "parsermodule.c"
      case 250: // $bb7_i_i
        var $1048=$tree_addr_i_i276; //@line 1845 "parsermodule.c"
        var $1049=$1048+20; //@line 1845 "parsermodule.c"
        var $1050=HEAP[$1049]; //@line 1845 "parsermodule.c"
        var $1051=$i_i_i277; //@line 1845 "parsermodule.c"
        var $1052=$1050+24*$1051; //@line 1845 "parsermodule.c"
        var $1053=_validate_terminal($1052, 12, __str52); //@line 1845 "parsermodule.c"
        var $1054=($1053)==0; //@line 1845 "parsermodule.c"
        if ($1054) { __label__ = 253; break; } else { __label__ = 251; break; } //@line 1845 "parsermodule.c"
      case 251: // $bb8_i_i
        var $1055=$tree_addr_i_i276; //@line 1845 "parsermodule.c"
        var $1056=$1055+20; //@line 1845 "parsermodule.c"
        var $1057=HEAP[$1056]; //@line 1845 "parsermodule.c"
        var $1058=$i_i_i277; //@line 1845 "parsermodule.c"
        var $1059=($1058) + 1; //@line 1845 "parsermodule.c"
        var $1060=$1057+24*$1059; //@line 1845 "parsermodule.c"
        var $1061=_validate_dotted_as_name($1060); //@line 1845 "parsermodule.c"
        var $1062=($1061)==0; //@line 1845 "parsermodule.c"
        if ($1062) { __label__ = 253; break; } else { __label__ = 252; break; } //@line 1845 "parsermodule.c"
      case 252: // $bb9_i_i
        $iftmp_117_i_i=1; //@line 1845 "parsermodule.c"
        __label__ = 254; break; //@line 1845 "parsermodule.c"
      case 253: // $bb10_i_i
        $iftmp_117_i_i=0; //@line 1845 "parsermodule.c"
        __label__ = 254; break; //@line 1845 "parsermodule.c"
      case 254: // $bb11_i_i
        var $1063=$iftmp_117_i_i; //@line 1845 "parsermodule.c"
        $res_i_i=$1063; //@line 1845 "parsermodule.c"
        var $1064=$i_i_i277; //@line 1844 "parsermodule.c"
        var $1065=($1064) + 2; //@line 1844 "parsermodule.c"
        $i_i_i277=$1065; //@line 1844 "parsermodule.c"
        __lastLabel__ = 254; __label__ = 255; break; //@line 1844 "parsermodule.c"
      case 255: // $bb12_i_i
        var $1066=__lastLabel__ == 254 ? $1063 : ($1047);
        var $1067=($1066)==0; //@line 1844 "parsermodule.c"
        if ($1067) { __label__ = 257; break; } else { __label__ = 256; break; } //@line 1844 "parsermodule.c"
      case 256: // $bb13_i_i
        var $1068=$i_i_i277; //@line 1844 "parsermodule.c"
        var $1069=$nch_i_i; //@line 1844 "parsermodule.c"
        var $1070=($1068) < ($1069); //@line 1844 "parsermodule.c"
        if ($1070) { __label__ = 250; break; } else { __label__ = 257; break; } //@line 1844 "parsermodule.c"
      case 257: // $validate_dotted_as_names_exit_i
        var $1071=$res_i_i; //@line 1847 "parsermodule.c"
        $29=$1071; //@line 1847 "parsermodule.c"
        $retval_i6_i=$1071; //@line 1847 "parsermodule.c"
        var $1072=($1071)==0; //@line 1870 "parsermodule.c"
        if ($1072) { __label__ = 259; break; } else { __label__ = 258; break; } //@line 1870 "parsermodule.c"
      case 258: // $bb3_i292
        $iftmp_119_i=1; //@line 1870 "parsermodule.c"
        __label__ = 260; break; //@line 1870 "parsermodule.c"
      case 259: // $bb4_i293
        $iftmp_119_i=0; //@line 1870 "parsermodule.c"
        __label__ = 260; break; //@line 1870 "parsermodule.c"
      case 260: // $validate_import_name_exit
        var $1073=$iftmp_119_i; //@line 1870 "parsermodule.c"
        $32=$1073; //@line 1870 "parsermodule.c"
        var $1074=$32; //@line 1870 "parsermodule.c"
        $retval_i286=$1074; //@line 1870 "parsermodule.c"
        var $retval6_i=$retval_i286; //@line 1870 "parsermodule.c"
        $res=$retval6_i; //@line 3169 "parsermodule.c"
        __label__ = 523; break; //@line 3169 "parsermodule.c"
      case 261: // $bb45
        var $1075=$tree_addr; //@line 3172 "parsermodule.c"
        $tree_addr_i252=$1075;
        var $1076=$tree_addr_i252; //@line 1895 "parsermodule.c"
        var $1077=$1076+16; //@line 1895 "parsermodule.c"
        var $1078=HEAP[$1077]; //@line 1895 "parsermodule.c"
        $nch_i254=$1078; //@line 1895 "parsermodule.c"
        var $1079=$tree_addr_i252; //@line 1896 "parsermodule.c"
        $tree_addr_i_i250=$1079;
        $i_i_i=1; //@line 1883 "parsermodule.c"
        __label__ = 264; break; //@line 1883 "parsermodule.c"
      case 262: // $bb_i_i
        var $1080=$tree_addr_i_i250; //@line 1884 "parsermodule.c"
        var $1081=$1080+20; //@line 1884 "parsermodule.c"
        var $1082=HEAP[$1081]; //@line 1884 "parsermodule.c"
        var $1083=$i_i_i; //@line 1884 "parsermodule.c"
        var $1084=$1082+24*$1083; //@line 1884 "parsermodule.c"
        var $1085=$1084; //@line 1884 "parsermodule.c"
        var $1086=HEAP[$1085]; //@line 1884 "parsermodule.c"
        var $1087=($1086)!=23; //@line 1884 "parsermodule.c"
        if ($1087) { __label__ = 265; break; } else { __label__ = 263; break; } //@line 1884 "parsermodule.c"
      case 263: // $bb1_i_i
        var $1088=$i_i_i; //@line 1883 "parsermodule.c"
        var $1089=($1088) + 1; //@line 1883 "parsermodule.c"
        $i_i_i=$1089; //@line 1883 "parsermodule.c"
        __label__ = 264; break; //@line 1883 "parsermodule.c"
      case 264: // $bb2_i_i
        var $1090=$tree_addr_i_i250; //@line 1883 "parsermodule.c"
        var $1091=$1090+16; //@line 1883 "parsermodule.c"
        var $1092=HEAP[$1091]; //@line 1883 "parsermodule.c"
        var $1093=$i_i_i; //@line 1883 "parsermodule.c"
        var $1094=($1092) > ($1093); //@line 1883 "parsermodule.c"
        if ($1094) { __label__ = 262; break; } else { __label__ = 265; break; } //@line 1883 "parsermodule.c"
      case 265: // $count_from_dots_exit_i
        var $1095=$i_i_i; //@line 1886 "parsermodule.c"
        var $1096=($1095) - 1; //@line 1886 "parsermodule.c"
        $34=$1096; //@line 1886 "parsermodule.c"
        var $1097=$34; //@line 1886 "parsermodule.c"
        $retval_i_i251=$1097; //@line 1886 "parsermodule.c"
        var $retval4_i_i=$retval_i_i251; //@line 1886 "parsermodule.c"
        $ndots_i=$retval4_i_i; //@line 1896 "parsermodule.c"
        var $1098=$tree_addr_i252; //@line 1897 "parsermodule.c"
        var $1099=$1098+20; //@line 1897 "parsermodule.c"
        var $1100=HEAP[$1099]; //@line 1897 "parsermodule.c"
        var $1101=$ndots_i; //@line 1897 "parsermodule.c"
        var $1102=($1101) + 1; //@line 1897 "parsermodule.c"
        var $1103=$1100+24*$1102; //@line 1897 "parsermodule.c"
        var $1104=$1103; //@line 1897 "parsermodule.c"
        var $1105=HEAP[$1104]; //@line 1897 "parsermodule.c"
        var $1106=($1105)==288; //@line 1897 "parsermodule.c"
        var $1107=($1106); //@line 1897 "parsermodule.c"
        $havename_i=$1107; //@line 1897 "parsermodule.c"
        var $1108=$ndots_i; //@line 1898 "parsermodule.c"
        var $1109=$havename_i; //@line 1898 "parsermodule.c"
        var $1110=($1109) + ($1108); //@line 1898 "parsermodule.c"
        $offset_i=$1110; //@line 1898 "parsermodule.c"
        var $1111=$tree_addr_i252; //@line 1904 "parsermodule.c"
        $n_addr_i_i247=$1111;
        $t_addr_i_i248=283;
        var $1112=$n_addr_i_i247; //@line 956 "parsermodule.c"
        var $1113=$1112; //@line 956 "parsermodule.c"
        var $1114=HEAP[$1113]; //@line 956 "parsermodule.c"
        var $1115=($1114); //@line 956 "parsermodule.c"
        var $1116=$t_addr_i_i248; //@line 956 "parsermodule.c"
        var $1117=($1115)!=($1116); //@line 956 "parsermodule.c"
        if ($1117) { __label__ = 266; break; } else { __label__ = 267; break; } //@line 956 "parsermodule.c"
      case 266: // $validate_ntype_exit_thread_i256
        var $1118=$n_addr_i_i247; //@line 957 "parsermodule.c"
        var $1119=$1118; //@line 957 "parsermodule.c"
        var $1120=HEAP[$1119]; //@line 957 "parsermodule.c"
        var $1121=($1120); //@line 957 "parsermodule.c"
        var $1122=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1123=$t_addr_i_i248; //@line 957 "parsermodule.c"
        var $1124=_PyErr_Format($1122, __str49, $1123, $1121); //@line 957 "parsermodule.c"
        $33=0; //@line 959 "parsermodule.c"
        $retval_i1_i249=0; //@line 959 "parsermodule.c"
        __label__ = 273; break;
      case 267: // $bb_i257
        $33=1; //@line 961 "parsermodule.c"
        $retval_i1_i249=1; //@line 959 "parsermodule.c"
        var $1125=$offset_i; //@line 1904 "parsermodule.c"
        var $1126=($1125) <= 0; //@line 1904 "parsermodule.c"
        if ($1126) { __label__ = 273; break; } else { __label__ = 268; break; } //@line 1904 "parsermodule.c"
      case 268: // $bb1_i258
        var $1127=$offset_i; //@line 1904 "parsermodule.c"
        var $1128=($1127) + 3; //@line 1904 "parsermodule.c"
        var $1129=$nch_i254; //@line 1904 "parsermodule.c"
        var $1130=($1128) > ($1129); //@line 1904 "parsermodule.c"
        if ($1130) { __label__ = 273; break; } else { __label__ = 269; break; } //@line 1904 "parsermodule.c"
      case 269: // $bb2_i259
        var $1131=$tree_addr_i252; //@line 1904 "parsermodule.c"
        var $1132=$1131+20; //@line 1904 "parsermodule.c"
        var $1133=HEAP[$1132]; //@line 1904 "parsermodule.c"
        var $1134=$1133; //@line 1904 "parsermodule.c"
        var $1135=_validate_terminal($1134, 1, __str118); //@line 1904 "parsermodule.c"
        var $1136=($1135)==0; //@line 1904 "parsermodule.c"
        if ($1136) { __label__ = 273; break; } else { __label__ = 270; break; } //@line 1904 "parsermodule.c"
      case 270: // $bb3_i260
        var $1137=$havename_i; //@line 1904 "parsermodule.c"
        var $1138=($1137)==0; //@line 1904 "parsermodule.c"
        if ($1138) { __label__ = 272; break; } else { __label__ = 271; break; } //@line 1904 "parsermodule.c"
      case 271: // $bb4_i261
        var $1139=$tree_addr_i252; //@line 1904 "parsermodule.c"
        var $1140=$1139+20; //@line 1904 "parsermodule.c"
        var $1141=HEAP[$1140]; //@line 1904 "parsermodule.c"
        var $1142=$ndots_i; //@line 1904 "parsermodule.c"
        var $1143=($1142) + 1; //@line 1904 "parsermodule.c"
        var $1144=$1141+24*$1143; //@line 1904 "parsermodule.c"
        var $1145=_validate_dotted_name($1144); //@line 1904 "parsermodule.c"
        var $1146=($1145)!=0; //@line 1904 "parsermodule.c"
        if ($1146) { __label__ = 272; break; } else { __label__ = 273; break; } //@line 1904 "parsermodule.c"
      case 272: // $bb5_i262
        var $1147=$tree_addr_i252; //@line 1904 "parsermodule.c"
        var $1148=$1147+20; //@line 1904 "parsermodule.c"
        var $1149=HEAP[$1148]; //@line 1904 "parsermodule.c"
        var $1150=$offset_i; //@line 1904 "parsermodule.c"
        var $1151=($1150) + 1; //@line 1904 "parsermodule.c"
        var $1152=$1149+24*$1151; //@line 1904 "parsermodule.c"
        var $1153=_validate_terminal($1152, 1, __str117); //@line 1904 "parsermodule.c"
        var $1154=($1153)==0; //@line 1904 "parsermodule.c"
        if ($1154) { __label__ = 273; break; } else { __label__ = 274; break; } //@line 1904 "parsermodule.c"
      case 273: // $bb17_thread_i
        $iftmp_120_i=0; //@line 1904 "parsermodule.c"
        $res_i255=0; //@line 1904 "parsermodule.c"
        __label__ = 285; break;
      case 274: // $bb9_i263
        $iftmp_120_i=1; //@line 1904 "parsermodule.c"
        $res_i255=1; //@line 1904 "parsermodule.c"
        var $1155=$tree_addr_i252; //@line 1906 "parsermodule.c"
        var $1156=$1155+20; //@line 1906 "parsermodule.c"
        var $1157=HEAP[$1156]; //@line 1906 "parsermodule.c"
        var $1158=$offset_i; //@line 1906 "parsermodule.c"
        var $1159=($1158) + 2; //@line 1906 "parsermodule.c"
        var $1160=$1157+24*$1159; //@line 1906 "parsermodule.c"
        var $1161=$1160; //@line 1906 "parsermodule.c"
        var $1162=HEAP[$1161]; //@line 1906 "parsermodule.c"
        var $1163=($1162)!=7; //@line 1906 "parsermodule.c"
        if ($1163) { __label__ = 282; break; } else { __label__ = 275; break; } //@line 1906 "parsermodule.c"
      case 275: // $bb10_i264
        var $1164=$offset_i; //@line 1907 "parsermodule.c"
        var $1165=($1164) + 5; //@line 1907 "parsermodule.c"
        var $1166=$nch_i254; //@line 1907 "parsermodule.c"
        var $1167=($1165)!=($1166); //@line 1907 "parsermodule.c"
        if ($1167) { __label__ = 280; break; } else { __label__ = 276; break; } //@line 1907 "parsermodule.c"
      case 276: // $bb11_i265
        var $1168=$tree_addr_i252; //@line 1907 "parsermodule.c"
        var $1169=$1168+20; //@line 1907 "parsermodule.c"
        var $1170=HEAP[$1169]; //@line 1907 "parsermodule.c"
        var $1171=$offset_i; //@line 1907 "parsermodule.c"
        var $1172=($1171) + 2; //@line 1907 "parsermodule.c"
        var $1173=$1170+24*$1172; //@line 1907 "parsermodule.c"
        var $1174=_validate_terminal($1173, 7, __str55); //@line 1907 "parsermodule.c"
        var $1175=($1174)==0; //@line 1907 "parsermodule.c"
        if ($1175) { __label__ = 280; break; } else { __label__ = 277; break; } //@line 1907 "parsermodule.c"
      case 277: // $bb12_i266
        var $1176=$tree_addr_i252; //@line 1907 "parsermodule.c"
        var $1177=$1176+20; //@line 1907 "parsermodule.c"
        var $1178=HEAP[$1177]; //@line 1907 "parsermodule.c"
        var $1179=$offset_i; //@line 1907 "parsermodule.c"
        var $1180=($1179) + 3; //@line 1907 "parsermodule.c"
        var $1181=$1178+24*$1180; //@line 1907 "parsermodule.c"
        var $1182=_validate_import_as_names($1181); //@line 1907 "parsermodule.c"
        var $1183=($1182)==0; //@line 1907 "parsermodule.c"
        if ($1183) { __label__ = 280; break; } else { __label__ = 278; break; } //@line 1907 "parsermodule.c"
      case 278: // $bb13_i267
        var $1184=$tree_addr_i252; //@line 1907 "parsermodule.c"
        var $1185=$1184+20; //@line 1907 "parsermodule.c"
        var $1186=HEAP[$1185]; //@line 1907 "parsermodule.c"
        var $1187=$offset_i; //@line 1907 "parsermodule.c"
        var $1188=($1187) + 4; //@line 1907 "parsermodule.c"
        var $1189=$1186+24*$1188; //@line 1907 "parsermodule.c"
        var $1190=_validate_terminal($1189, 8, __str56); //@line 1907 "parsermodule.c"
        var $1191=($1190)==0; //@line 1907 "parsermodule.c"
        if ($1191) { __label__ = 280; break; } else { __label__ = 279; break; } //@line 1907 "parsermodule.c"
      case 279: // $bb14_i268
        $iftmp_121_i=1; //@line 1907 "parsermodule.c"
        __label__ = 281; break; //@line 1907 "parsermodule.c"
      case 280: // $bb15_i269
        $iftmp_121_i=0; //@line 1907 "parsermodule.c"
        __label__ = 281; break; //@line 1907 "parsermodule.c"
      case 281: // $bb16_i270
        var $1192=$iftmp_121_i; //@line 1907 "parsermodule.c"
        $res_i255=$1192; //@line 1907 "parsermodule.c"
        __label__ = 285; break; //@line 1907 "parsermodule.c"
      case 282: // $bb17_i272
        var $_pr_i271=$res_i255;
        var $1193=($_pr_i271)!=0; //@line 1911 "parsermodule.c"
        if ($1193) { __label__ = 283; break; } else { __label__ = 285; break; } //@line 1911 "parsermodule.c"
      case 283: // $bb18_i273
        var $1194=$tree_addr_i252; //@line 1911 "parsermodule.c"
        var $1195=$1194+20; //@line 1911 "parsermodule.c"
        var $1196=HEAP[$1195]; //@line 1911 "parsermodule.c"
        var $1197=$offset_i; //@line 1911 "parsermodule.c"
        var $1198=($1197) + 2; //@line 1911 "parsermodule.c"
        var $1199=$1196+24*$1198; //@line 1911 "parsermodule.c"
        var $1200=$1199; //@line 1911 "parsermodule.c"
        var $1201=HEAP[$1200]; //@line 1911 "parsermodule.c"
        var $1202=($1201)!=16; //@line 1911 "parsermodule.c"
        if ($1202) { __label__ = 284; break; } else { __label__ = 285; break; } //@line 1911 "parsermodule.c"
      case 284: // $bb19_i274
        var $1203=$tree_addr_i252; //@line 1912 "parsermodule.c"
        var $1204=$1203+20; //@line 1912 "parsermodule.c"
        var $1205=HEAP[$1204]; //@line 1912 "parsermodule.c"
        var $1206=$offset_i; //@line 1912 "parsermodule.c"
        var $1207=($1206) + 2; //@line 1912 "parsermodule.c"
        var $1208=$1205+24*$1207; //@line 1912 "parsermodule.c"
        var $1209=_validate_import_as_names($1208); //@line 1912 "parsermodule.c"
        $res_i255=$1209; //@line 1912 "parsermodule.c"
        __label__ = 285; break; //@line 1912 "parsermodule.c"
      case 285: // $validate_import_from_exit
        var $1210=$res_i255; //@line 1913 "parsermodule.c"
        $35=$1210; //@line 1913 "parsermodule.c"
        var $1211=$35; //@line 1913 "parsermodule.c"
        $retval_i253=$1211; //@line 1913 "parsermodule.c"
        var $retval21_i=$retval_i253; //@line 1913 "parsermodule.c"
        $res=$retval21_i; //@line 3172 "parsermodule.c"
        __label__ = 523; break; //@line 3172 "parsermodule.c"
      case 286: // $bb46
        var $1212=$tree_addr; //@line 3175 "parsermodule.c"
        $tree_addr_i53=$1212;
        var $1213=$tree_addr_i53; //@line 1950 "parsermodule.c"
        var $1214=$1213+16; //@line 1950 "parsermodule.c"
        var $1215=HEAP[$1214]; //@line 1950 "parsermodule.c"
        $nch_i55=$1215; //@line 1950 "parsermodule.c"
        var $1216=$tree_addr_i53; //@line 1952 "parsermodule.c"
        $n_addr_i_i50=$1216;
        $t_addr_i_i51=289;
        var $1217=$n_addr_i_i50; //@line 956 "parsermodule.c"
        var $1218=$1217; //@line 956 "parsermodule.c"
        var $1219=HEAP[$1218]; //@line 956 "parsermodule.c"
        var $1220=($1219); //@line 956 "parsermodule.c"
        var $1221=$t_addr_i_i51; //@line 956 "parsermodule.c"
        var $1222=($1220)!=($1221); //@line 956 "parsermodule.c"
        if ($1222) { __label__ = 287; break; } else { __label__ = 288; break; } //@line 956 "parsermodule.c"
      case 287: // $validate_ntype_exit_thread_i57
        var $1223=$n_addr_i_i50; //@line 957 "parsermodule.c"
        var $1224=$1223; //@line 957 "parsermodule.c"
        var $1225=HEAP[$1224]; //@line 957 "parsermodule.c"
        var $1226=($1225); //@line 957 "parsermodule.c"
        var $1227=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1228=$t_addr_i_i51; //@line 957 "parsermodule.c"
        var $1229=_PyErr_Format($1227, __str49, $1228, $1226); //@line 957 "parsermodule.c"
        $63=0; //@line 959 "parsermodule.c"
        $retval_i_i52=0; //@line 959 "parsermodule.c"
        __label__ = 290; break;
      case 288: // $bb_i59
        $63=1; //@line 961 "parsermodule.c"
        $retval_i_i52=1; //@line 959 "parsermodule.c"
        var $1230=$nch_i55; //@line 1952 "parsermodule.c"
        var $1231=($1230) & 1; //@line 1952 "parsermodule.c"
        var $1232=($1231)!=0; //@line 1952 "parsermodule.c"
        var $1233=$nch_i55; //@line 1952 "parsermodule.c"
        var $1234=($1233) <= 1; //@line 1952 "parsermodule.c"
        var $or_cond_i58=($1232) | ($1234);
        if ($or_cond_i58) { __label__ = 290; break; } else { __label__ = 289; break; } //@line 1952 "parsermodule.c"
      case 289: // $bb7_thread_i
        $iftmp_123_i=1; //@line 1952 "parsermodule.c"
        $res_i56=1; //@line 1952 "parsermodule.c"
        __label__ = 293; break;
      case 290: // $bb5_i
        $iftmp_123_i=0; //@line 1952 "parsermodule.c"
        $res_i56=0; //@line 1952 "parsermodule.c"
        var $1235=_PyErr_Occurred(); //@line 1954 "parsermodule.c"
        var $1236=($1235)==0; //@line 1954 "parsermodule.c"
        if ($1236) { __label__ = 291; break; } else { __label__ = 292; break; } //@line 1954 "parsermodule.c"
      case 291: // $bb6_i
        $message_addr_i_i49=__str122;
        var $1237=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $1238=$message_addr_i_i49; //@line 531 "parsermodule.c"
        _PyErr_SetString($1237, $1238); //@line 531 "parsermodule.c"
        __label__ = 292; break; //@line 1955 "parsermodule.c"
      case 292: // $bb7_i61
        var $_pr_i60=$res_i56;
        var $1239=($_pr_i60)!=0; //@line 1957 "parsermodule.c"
        if ($1239) { __label__ = 293; break; } else { __label__ = 299; break; } //@line 1957 "parsermodule.c"
      case 293: // $bb8_i62
        var $1240=$tree_addr_i53; //@line 1958 "parsermodule.c"
        var $1241=$1240+20; //@line 1958 "parsermodule.c"
        var $1242=HEAP[$1241]; //@line 1958 "parsermodule.c"
        var $1243=$1242; //@line 1958 "parsermodule.c"
        var $1244=_validate_terminal($1243, 1, __str123); //@line 1958 "parsermodule.c"
        var $1245=($1244)==0; //@line 1958 "parsermodule.c"
        if ($1245) { __label__ = 297; break; } else { __label__ = 294; break; } //@line 1958 "parsermodule.c"
      case 294: // $bb9_i63
        var $1246=$tree_addr_i53; //@line 1958 "parsermodule.c"
        var $1247=$1246+20; //@line 1958 "parsermodule.c"
        var $1248=HEAP[$1247]; //@line 1958 "parsermodule.c"
        var $1249=$1248+24; //@line 1958 "parsermodule.c"
        $n_addr_i2_i=$1249;
        $t_addr_i3_i=1;
        var $1250=$n_addr_i2_i; //@line 956 "parsermodule.c"
        var $1251=$1250; //@line 956 "parsermodule.c"
        var $1252=HEAP[$1251]; //@line 956 "parsermodule.c"
        var $1253=($1252); //@line 956 "parsermodule.c"
        var $1254=$t_addr_i3_i; //@line 956 "parsermodule.c"
        var $1255=($1253)!=($1254); //@line 956 "parsermodule.c"
        if ($1255) { __label__ = 295; break; } else { __label__ = 296; break; } //@line 956 "parsermodule.c"
      case 295: // $validate_ntype_exit8_thread_i
        var $1256=$n_addr_i2_i; //@line 957 "parsermodule.c"
        var $1257=$1256; //@line 957 "parsermodule.c"
        var $1258=HEAP[$1257]; //@line 957 "parsermodule.c"
        var $1259=($1258); //@line 957 "parsermodule.c"
        var $1260=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1261=$t_addr_i3_i; //@line 957 "parsermodule.c"
        var $1262=_PyErr_Format($1260, __str49, $1261, $1259); //@line 957 "parsermodule.c"
        $62=0; //@line 959 "parsermodule.c"
        $retval_i4_i=0; //@line 959 "parsermodule.c"
        __label__ = 297; break;
      case 296: // $bb10_i64
        $62=1; //@line 961 "parsermodule.c"
        $retval_i4_i=1; //@line 959 "parsermodule.c"
        $iftmp_124_i=1; //@line 1958 "parsermodule.c"
        __label__ = 298; break; //@line 1958 "parsermodule.c"
      case 297: // $bb11_i65
        $iftmp_124_i=0; //@line 1958 "parsermodule.c"
        __label__ = 298; break; //@line 1958 "parsermodule.c"
      case 298: // $bb12_i66
        var $1263=$iftmp_124_i; //@line 1958 "parsermodule.c"
        $res_i56=$1263; //@line 1958 "parsermodule.c"
        __label__ = 299; break; //@line 1958 "parsermodule.c"
      case 299: // $bb13_i67
        $j_i=2; //@line 1960 "parsermodule.c"
        var $_pr16_i=$res_i56;
        __lastLabel__ = 299; __label__ = 306; break; //@line 1960 "parsermodule.c"
      case 300: // $bb14_i68
        var $1264=$tree_addr_i53; //@line 1961 "parsermodule.c"
        var $1265=$1264+20; //@line 1961 "parsermodule.c"
        var $1266=HEAP[$1265]; //@line 1961 "parsermodule.c"
        var $1267=$j_i; //@line 1961 "parsermodule.c"
        var $1268=$1266+24*$1267; //@line 1961 "parsermodule.c"
        var $1269=_validate_terminal($1268, 12, __str52); //@line 1961 "parsermodule.c"
        var $1270=($1269)==0; //@line 1961 "parsermodule.c"
        if ($1270) { __label__ = 304; break; } else { __label__ = 301; break; } //@line 1961 "parsermodule.c"
      case 301: // $bb15_i69
        var $1271=$tree_addr_i53; //@line 1961 "parsermodule.c"
        var $1272=$1271+20; //@line 1961 "parsermodule.c"
        var $1273=HEAP[$1272]; //@line 1961 "parsermodule.c"
        var $1274=$j_i; //@line 1961 "parsermodule.c"
        var $1275=($1274) + 1; //@line 1961 "parsermodule.c"
        var $1276=$1273+24*$1275; //@line 1961 "parsermodule.c"
        $n_addr_i9_i=$1276;
        $t_addr_i10_i=1;
        var $1277=$n_addr_i9_i; //@line 956 "parsermodule.c"
        var $1278=$1277; //@line 956 "parsermodule.c"
        var $1279=HEAP[$1278]; //@line 956 "parsermodule.c"
        var $1280=($1279); //@line 956 "parsermodule.c"
        var $1281=$t_addr_i10_i; //@line 956 "parsermodule.c"
        var $1282=($1280)!=($1281); //@line 956 "parsermodule.c"
        if ($1282) { __label__ = 302; break; } else { __label__ = 303; break; } //@line 956 "parsermodule.c"
      case 302: // $validate_ntype_exit15_thread_i
        var $1283=$n_addr_i9_i; //@line 957 "parsermodule.c"
        var $1284=$1283; //@line 957 "parsermodule.c"
        var $1285=HEAP[$1284]; //@line 957 "parsermodule.c"
        var $1286=($1285); //@line 957 "parsermodule.c"
        var $1287=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1288=$t_addr_i10_i; //@line 957 "parsermodule.c"
        var $1289=_PyErr_Format($1287, __str49, $1288, $1286); //@line 957 "parsermodule.c"
        $61=0; //@line 959 "parsermodule.c"
        $retval_i11_i=0; //@line 959 "parsermodule.c"
        __label__ = 304; break;
      case 303: // $bb16_i70
        $61=1; //@line 961 "parsermodule.c"
        $retval_i11_i=1; //@line 959 "parsermodule.c"
        $iftmp_125_i=1; //@line 1961 "parsermodule.c"
        __label__ = 305; break; //@line 1961 "parsermodule.c"
      case 304: // $bb17_i71
        $iftmp_125_i=0; //@line 1961 "parsermodule.c"
        __label__ = 305; break; //@line 1961 "parsermodule.c"
      case 305: // $bb18_i72
        var $1290=$iftmp_125_i; //@line 1961 "parsermodule.c"
        $res_i56=$1290; //@line 1961 "parsermodule.c"
        var $1291=$j_i; //@line 1960 "parsermodule.c"
        var $1292=($1291) + 2; //@line 1960 "parsermodule.c"
        $j_i=$1292; //@line 1960 "parsermodule.c"
        __lastLabel__ = 305; __label__ = 306; break; //@line 1960 "parsermodule.c"
      case 306: // $bb19_i73
        var $1293=__lastLabel__ == 305 ? $1290 : ($_pr16_i);
        var $1294=($1293)==0; //@line 1960 "parsermodule.c"
        if ($1294) { __label__ = 308; break; } else { __label__ = 307; break; } //@line 1960 "parsermodule.c"
      case 307: // $bb20_i74
        var $1295=$j_i; //@line 1960 "parsermodule.c"
        var $1296=$nch_i55; //@line 1960 "parsermodule.c"
        var $1297=($1295) < ($1296); //@line 1960 "parsermodule.c"
        if ($1297) { __label__ = 300; break; } else { __label__ = 308; break; } //@line 1960 "parsermodule.c"
      case 308: // $validate_global_stmt_exit
        var $1298=$res_i56; //@line 1964 "parsermodule.c"
        $64=$1298; //@line 1964 "parsermodule.c"
        var $1299=$64; //@line 1964 "parsermodule.c"
        $retval_i54=$1299; //@line 1964 "parsermodule.c"
        var $retval22_i=$retval_i54; //@line 1964 "parsermodule.c"
        $res=$retval22_i; //@line 3175 "parsermodule.c"
        __label__ = 523; break; //@line 3175 "parsermodule.c"
      case 309: // $bb47
        var $1300=$tree_addr; //@line 3178 "parsermodule.c"
        $tree_addr_i32=$1300;
        var $1301=$tree_addr_i32; //@line 1975 "parsermodule.c"
        var $1302=$1301+16; //@line 1975 "parsermodule.c"
        var $1303=HEAP[$1302]; //@line 1975 "parsermodule.c"
        $nch_i34=$1303; //@line 1975 "parsermodule.c"
        var $1304=$tree_addr_i32; //@line 1979 "parsermodule.c"
        $n_addr_i_i29=$1304;
        $t_addr_i_i30=290;
        var $1305=$n_addr_i_i29; //@line 956 "parsermodule.c"
        var $1306=$1305; //@line 956 "parsermodule.c"
        var $1307=HEAP[$1306]; //@line 956 "parsermodule.c"
        var $1308=($1307); //@line 956 "parsermodule.c"
        var $1309=$t_addr_i_i30; //@line 956 "parsermodule.c"
        var $1310=($1308)!=($1309); //@line 956 "parsermodule.c"
        if ($1310) { __label__ = 310; break; } else { __label__ = 311; break; } //@line 956 "parsermodule.c"
      case 310: // $validate_ntype_exit_thread_i36
        var $1311=$n_addr_i_i29; //@line 957 "parsermodule.c"
        var $1312=$1311; //@line 957 "parsermodule.c"
        var $1313=HEAP[$1312]; //@line 957 "parsermodule.c"
        var $1314=($1313); //@line 957 "parsermodule.c"
        var $1315=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1316=$t_addr_i_i30; //@line 957 "parsermodule.c"
        var $1317=_PyErr_Format($1315, __str49, $1316, $1314); //@line 957 "parsermodule.c"
        $65=0; //@line 959 "parsermodule.c"
        $retval_i_i31=0; //@line 959 "parsermodule.c"
        __label__ = 315; break;
      case 311: // $bb_i38
        $65=1; //@line 961 "parsermodule.c"
        $retval_i_i31=1; //@line 959 "parsermodule.c"
        var $1318=$nch_i34; //@line 1979 "parsermodule.c"
        var $1319=($1318)==2; //@line 1979 "parsermodule.c"
        var $1320=$nch_i34; //@line 1979 "parsermodule.c"
        var $1321=($1320)==4; //@line 1979 "parsermodule.c"
        var $or_cond_i37=($1319) | ($1321);
        var $1322=$nch_i34; //@line 1979 "parsermodule.c"
        var $1323=($1322)==6; //@line 1979 "parsermodule.c"
        var $or_cond3_i=($or_cond_i37) | ($1323);
        if ($or_cond3_i) { __label__ = 312; break; } else { __label__ = 315; break; } //@line 1979 "parsermodule.c"
      case 312: // $bb3_i39
        var $1324=$tree_addr_i32; //@line 1979 "parsermodule.c"
        var $1325=$1324+20; //@line 1979 "parsermodule.c"
        var $1326=HEAP[$1325]; //@line 1979 "parsermodule.c"
        var $1327=$1326; //@line 1979 "parsermodule.c"
        var $1328=_validate_terminal($1327, 1, __str124); //@line 1979 "parsermodule.c"
        var $1329=($1328)==0; //@line 1979 "parsermodule.c"
        if ($1329) { __label__ = 315; break; } else { __label__ = 313; break; } //@line 1979 "parsermodule.c"
      case 313: // $bb4_i
        var $1330=$tree_addr_i32; //@line 1979 "parsermodule.c"
        var $1331=$1330+20; //@line 1979 "parsermodule.c"
        var $1332=HEAP[$1331]; //@line 1979 "parsermodule.c"
        var $1333=$1332+24; //@line 1979 "parsermodule.c"
        var $1334=_validate_expr($1333); //@line 1979 "parsermodule.c"
        var $1335=($1334)==0; //@line 1979 "parsermodule.c"
        if ($1335) { __label__ = 315; break; } else { __label__ = 314; break; } //@line 1979 "parsermodule.c"
      case 314: // $bb10_thread_i
        $iftmp_126_i=1; //@line 1979 "parsermodule.c"
        $res_i35=1; //@line 1979 "parsermodule.c"
        __label__ = 318; break;
      case 315: // $bb8_i40
        $iftmp_126_i=0; //@line 1979 "parsermodule.c"
        $res_i35=0; //@line 1979 "parsermodule.c"
        var $1336=_PyErr_Occurred(); //@line 1981 "parsermodule.c"
        var $1337=($1336)==0; //@line 1981 "parsermodule.c"
        if ($1337) { __label__ = 316; break; } else { __label__ = 317; break; } //@line 1981 "parsermodule.c"
      case 316: // $bb9_i41
        $message_addr_i_i28=__str125;
        var $1338=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $1339=$message_addr_i_i28; //@line 531 "parsermodule.c"
        _PyErr_SetString($1338, $1339); //@line 531 "parsermodule.c"
        __label__ = 317; break; //@line 1982 "parsermodule.c"
      case 317: // $bb10_i43
        var $_pr_i42=$res_i35;
        var $1340=($_pr_i42)!=0; //@line 1983 "parsermodule.c"
        if ($1340) { __label__ = 318; break; } else { __label__ = 332; break; } //@line 1983 "parsermodule.c"
      case 318: // $bb11_i44
        var $1341=$nch_i34; //@line 1983 "parsermodule.c"
        var $1342=($1341) > 2; //@line 1983 "parsermodule.c"
        if ($1342) { __label__ = 319; break; } else { __label__ = 324; break; } //@line 1983 "parsermodule.c"
      case 319: // $bb12_i45
        var $1343=$tree_addr_i32; //@line 1984 "parsermodule.c"
        var $1344=$1343+20; //@line 1984 "parsermodule.c"
        var $1345=HEAP[$1344]; //@line 1984 "parsermodule.c"
        var $1346=$1345+48; //@line 1984 "parsermodule.c"
        var $1347=_validate_terminal($1346, 1, __str76); //@line 1984 "parsermodule.c"
        var $1348=($1347)==0; //@line 1984 "parsermodule.c"
        if ($1348) { __label__ = 322; break; } else { __label__ = 320; break; } //@line 1984 "parsermodule.c"
      case 320: // $bb13_i46
        var $1349=$tree_addr_i32; //@line 1984 "parsermodule.c"
        var $1350=$1349+20; //@line 1984 "parsermodule.c"
        var $1351=HEAP[$1350]; //@line 1984 "parsermodule.c"
        var $1352=$1351+72; //@line 1984 "parsermodule.c"
        var $1353=_validate_test($1352); //@line 1984 "parsermodule.c"
        var $1354=($1353)==0; //@line 1984 "parsermodule.c"
        if ($1354) { __label__ = 322; break; } else { __label__ = 321; break; } //@line 1984 "parsermodule.c"
      case 321: // $bb14_i47
        $iftmp_127_i=1; //@line 1984 "parsermodule.c"
        __label__ = 323; break; //@line 1984 "parsermodule.c"
      case 322: // $bb15_i48
        $iftmp_127_i=0; //@line 1984 "parsermodule.c"
        __label__ = 323; break; //@line 1984 "parsermodule.c"
      case 323: // $bb16_i
        var $1355=$iftmp_127_i; //@line 1984 "parsermodule.c"
        $res_i35=$1355; //@line 1984 "parsermodule.c"
        __lastLabel__ = 323; __label__ = 325; break; //@line 1984 "parsermodule.c"
      case 324: // $bb17thread_pre_split_i
        var $_pr4_i=$res_i35;
        __lastLabel__ = 324; __label__ = 325; break;
      case 325: // $bb17_i
        var $1356=__lastLabel__ == 324 ? $_pr4_i : ($1355);
        var $1357=($1356)!=0; //@line 1986 "parsermodule.c"
        if ($1357) { __label__ = 326; break; } else { __label__ = 332; break; } //@line 1986 "parsermodule.c"
      case 326: // $bb18_i
        var $1358=$nch_i34; //@line 1986 "parsermodule.c"
        var $1359=($1358)==6; //@line 1986 "parsermodule.c"
        if ($1359) { __label__ = 327; break; } else { __label__ = 332; break; } //@line 1986 "parsermodule.c"
      case 327: // $bb19_i
        var $1360=$tree_addr_i32; //@line 1987 "parsermodule.c"
        var $1361=$1360+20; //@line 1987 "parsermodule.c"
        var $1362=HEAP[$1361]; //@line 1987 "parsermodule.c"
        var $1363=$1362+96; //@line 1987 "parsermodule.c"
        var $1364=_validate_terminal($1363, 12, __str52); //@line 1987 "parsermodule.c"
        var $1365=($1364)==0; //@line 1987 "parsermodule.c"
        if ($1365) { __label__ = 330; break; } else { __label__ = 328; break; } //@line 1987 "parsermodule.c"
      case 328: // $bb20_i
        var $1366=$tree_addr_i32; //@line 1987 "parsermodule.c"
        var $1367=$1366+20; //@line 1987 "parsermodule.c"
        var $1368=HEAP[$1367]; //@line 1987 "parsermodule.c"
        var $1369=$1368+120; //@line 1987 "parsermodule.c"
        var $1370=_validate_test($1369); //@line 1987 "parsermodule.c"
        var $1371=($1370)==0; //@line 1987 "parsermodule.c"
        if ($1371) { __label__ = 330; break; } else { __label__ = 329; break; } //@line 1987 "parsermodule.c"
      case 329: // $bb21_i
        $iftmp_128_i=1; //@line 1987 "parsermodule.c"
        __label__ = 331; break; //@line 1987 "parsermodule.c"
      case 330: // $bb22_i
        $iftmp_128_i=0; //@line 1987 "parsermodule.c"
        __label__ = 331; break; //@line 1987 "parsermodule.c"
      case 331: // $bb23_i
        var $1372=$iftmp_128_i; //@line 1987 "parsermodule.c"
        $res_i35=$1372; //@line 1987 "parsermodule.c"
        __label__ = 332; break; //@line 1987 "parsermodule.c"
      case 332: // $validate_exec_stmt_exit
        var $1373=$res_i35; //@line 1990 "parsermodule.c"
        $66=$1373; //@line 1990 "parsermodule.c"
        var $1374=$66; //@line 1990 "parsermodule.c"
        $retval_i33=$1374; //@line 1990 "parsermodule.c"
        var $retval25_i=$retval_i33; //@line 1990 "parsermodule.c"
        $res=$retval25_i; //@line 3178 "parsermodule.c"
        __label__ = 523; break; //@line 3178 "parsermodule.c"
      case 333: // $bb48
        var $1375=$tree_addr; //@line 3181 "parsermodule.c"
        $tree_addr_i9=$1375;
        var $1376=$tree_addr_i9; //@line 2001 "parsermodule.c"
        var $1377=$1376+16; //@line 2001 "parsermodule.c"
        var $1378=HEAP[$1377]; //@line 2001 "parsermodule.c"
        $nch_i=$1378; //@line 2001 "parsermodule.c"
        var $1379=$tree_addr_i9; //@line 2005 "parsermodule.c"
        $n_addr_i_i=$1379;
        $t_addr_i_i=291;
        var $1380=$n_addr_i_i; //@line 956 "parsermodule.c"
        var $1381=$1380; //@line 956 "parsermodule.c"
        var $1382=HEAP[$1381]; //@line 956 "parsermodule.c"
        var $1383=($1382); //@line 956 "parsermodule.c"
        var $1384=$t_addr_i_i; //@line 956 "parsermodule.c"
        var $1385=($1383)!=($1384); //@line 956 "parsermodule.c"
        if ($1385) { __label__ = 334; break; } else { __label__ = 335; break; } //@line 956 "parsermodule.c"
      case 334: // $validate_ntype_exit_thread_i
        var $1386=$n_addr_i_i; //@line 957 "parsermodule.c"
        var $1387=$1386; //@line 957 "parsermodule.c"
        var $1388=HEAP[$1387]; //@line 957 "parsermodule.c"
        var $1389=($1388); //@line 957 "parsermodule.c"
        var $1390=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1391=$t_addr_i_i; //@line 957 "parsermodule.c"
        var $1392=_PyErr_Format($1390, __str49, $1391, $1389); //@line 957 "parsermodule.c"
        $71=0; //@line 959 "parsermodule.c"
        $retval_i_i=0; //@line 959 "parsermodule.c"
        __label__ = 339; break;
      case 335: // $bb_i11
        $71=1; //@line 961 "parsermodule.c"
        $retval_i_i=1; //@line 959 "parsermodule.c"
        var $1393=$nch_i; //@line 2005 "parsermodule.c"
        var $1394=($1393)==2; //@line 2005 "parsermodule.c"
        var $1395=$nch_i; //@line 2005 "parsermodule.c"
        var $1396=($1395)==4; //@line 2005 "parsermodule.c"
        var $or_cond_i=($1394) | ($1396);
        if ($or_cond_i) { __label__ = 336; break; } else { __label__ = 339; break; } //@line 2005 "parsermodule.c"
      case 336: // $bb2_i12
        var $1397=$tree_addr_i9; //@line 2005 "parsermodule.c"
        var $1398=$1397+20; //@line 2005 "parsermodule.c"
        var $1399=HEAP[$1398]; //@line 2005 "parsermodule.c"
        var $1400=$1399; //@line 2005 "parsermodule.c"
        var $1401=_validate_terminal($1400, 1, __str126); //@line 2005 "parsermodule.c"
        var $1402=($1401)==0; //@line 2005 "parsermodule.c"
        if ($1402) { __label__ = 339; break; } else { __label__ = 337; break; } //@line 2005 "parsermodule.c"
      case 337: // $bb3_i
        var $1403=$tree_addr_i9; //@line 2005 "parsermodule.c"
        var $1404=$1403+20; //@line 2005 "parsermodule.c"
        var $1405=HEAP[$1404]; //@line 2005 "parsermodule.c"
        var $1406=$1405+24; //@line 2005 "parsermodule.c"
        var $1407=_validate_test($1406); //@line 2005 "parsermodule.c"
        var $1408=($1407)==0; //@line 2005 "parsermodule.c"
        if ($1408) { __label__ = 339; break; } else { __label__ = 338; break; } //@line 2005 "parsermodule.c"
      case 338: // $bb9_thread_i
        $iftmp_129_i=1; //@line 2005 "parsermodule.c"
        $res_i=1; //@line 2005 "parsermodule.c"
        __label__ = 342; break;
      case 339: // $bb7_i
        $iftmp_129_i=0; //@line 2005 "parsermodule.c"
        $res_i=0; //@line 2005 "parsermodule.c"
        var $1409=_PyErr_Occurred(); //@line 2007 "parsermodule.c"
        var $1410=($1409)==0; //@line 2007 "parsermodule.c"
        if ($1410) { __label__ = 340; break; } else { __label__ = 341; break; } //@line 2007 "parsermodule.c"
      case 340: // $bb8_i
        $message_addr_i_i=__str127;
        var $1411=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $1412=$message_addr_i_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($1411, $1412); //@line 531 "parsermodule.c"
        __label__ = 341; break; //@line 2008 "parsermodule.c"
      case 341: // $bb9_i
        var $_pr_i=$res_i;
        var $1413=($_pr_i)!=0; //@line 2009 "parsermodule.c"
        if ($1413) { __label__ = 342; break; } else { __label__ = 348; break; } //@line 2009 "parsermodule.c"
      case 342: // $bb10_i
        var $1414=$nch_i; //@line 2009 "parsermodule.c"
        var $1415=($1414) > 2; //@line 2009 "parsermodule.c"
        if ($1415) { __label__ = 343; break; } else { __label__ = 348; break; } //@line 2009 "parsermodule.c"
      case 343: // $bb11_i
        var $1416=$tree_addr_i9; //@line 2010 "parsermodule.c"
        var $1417=$1416+20; //@line 2010 "parsermodule.c"
        var $1418=HEAP[$1417]; //@line 2010 "parsermodule.c"
        var $1419=$1418+48; //@line 2010 "parsermodule.c"
        var $1420=_validate_terminal($1419, 12, __str52); //@line 2010 "parsermodule.c"
        var $1421=($1420)==0; //@line 2010 "parsermodule.c"
        if ($1421) { __label__ = 346; break; } else { __label__ = 344; break; } //@line 2010 "parsermodule.c"
      case 344: // $bb12_i
        var $1422=$tree_addr_i9; //@line 2010 "parsermodule.c"
        var $1423=$1422+20; //@line 2010 "parsermodule.c"
        var $1424=HEAP[$1423]; //@line 2010 "parsermodule.c"
        var $1425=$1424+72; //@line 2010 "parsermodule.c"
        var $1426=_validate_test($1425); //@line 2010 "parsermodule.c"
        var $1427=($1426)==0; //@line 2010 "parsermodule.c"
        if ($1427) { __label__ = 346; break; } else { __label__ = 345; break; } //@line 2010 "parsermodule.c"
      case 345: // $bb13_i
        $iftmp_130_i=1; //@line 2010 "parsermodule.c"
        __label__ = 347; break; //@line 2010 "parsermodule.c"
      case 346: // $bb14_i
        $iftmp_130_i=0; //@line 2010 "parsermodule.c"
        __label__ = 347; break; //@line 2010 "parsermodule.c"
      case 347: // $bb15_i
        var $1428=$iftmp_130_i; //@line 2010 "parsermodule.c"
        $res_i=$1428; //@line 2010 "parsermodule.c"
        __label__ = 348; break; //@line 2010 "parsermodule.c"
      case 348: // $validate_assert_stmt_exit
        var $1429=$res_i; //@line 2013 "parsermodule.c"
        $72=$1429; //@line 2013 "parsermodule.c"
        var $1430=$72; //@line 2013 "parsermodule.c"
        $retval_i10=$1430; //@line 2013 "parsermodule.c"
        var $retval17_i=$retval_i10; //@line 2013 "parsermodule.c"
        $res=$retval17_i; //@line 3181 "parsermodule.c"
        __label__ = 523; break; //@line 3181 "parsermodule.c"
      case 349: // $bb49
        var $1431=$tree_addr; //@line 3184 "parsermodule.c"
        $tree_addr_i322=$1431;
        var $1432=$tree_addr_i322; //@line 1067 "parsermodule.c"
        var $1433=$1432+16; //@line 1067 "parsermodule.c"
        var $1434=HEAP[$1433]; //@line 1067 "parsermodule.c"
        $nch_i324=$1434; //@line 1067 "parsermodule.c"
        var $1435=$tree_addr_i322; //@line 1073 "parsermodule.c"
        $n_addr_i_i319=$1435;
        $t_addr_i_i320=293;
        var $1436=$n_addr_i_i319; //@line 956 "parsermodule.c"
        var $1437=$1436; //@line 956 "parsermodule.c"
        var $1438=HEAP[$1437]; //@line 956 "parsermodule.c"
        var $1439=($1438); //@line 956 "parsermodule.c"
        var $1440=$t_addr_i_i320; //@line 956 "parsermodule.c"
        var $1441=($1439)!=($1440); //@line 956 "parsermodule.c"
        if ($1441) { __label__ = 350; break; } else { __label__ = 351; break; } //@line 956 "parsermodule.c"
      case 350: // $validate_ntype_exit_i_thread
        var $1442=$n_addr_i_i319; //@line 957 "parsermodule.c"
        var $1443=$1442; //@line 957 "parsermodule.c"
        var $1444=HEAP[$1443]; //@line 957 "parsermodule.c"
        var $1445=($1444); //@line 957 "parsermodule.c"
        var $1446=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1447=$t_addr_i_i320; //@line 957 "parsermodule.c"
        var $1448=_PyErr_Format($1446, __str49, $1447, $1445); //@line 957 "parsermodule.c"
        $25=0; //@line 959 "parsermodule.c"
        $retval_i_i321=0; //@line 959 "parsermodule.c"
        __label__ = 363; break;
      case 351: // $bb_i330
        $25=1; //@line 961 "parsermodule.c"
        $retval_i_i321=1; //@line 959 "parsermodule.c"
        var $1449=$nch_i324; //@line 1073 "parsermodule.c"
        var $1450=($1449) <= 3; //@line 1073 "parsermodule.c"
        if ($1450) { __label__ = 363; break; } else { __label__ = 352; break; } //@line 1073 "parsermodule.c"
      case 352: // $bb1_i331
        var $1451=$tree_addr_i322; //@line 1073 "parsermodule.c"
        var $1452=$1451+20; //@line 1073 "parsermodule.c"
        var $1453=HEAP[$1452]; //@line 1073 "parsermodule.c"
        var $1454=$1453; //@line 1073 "parsermodule.c"
        var $1455=_validate_terminal($1454, 1, __str57); //@line 1073 "parsermodule.c"
        var $1456=($1455)==0; //@line 1073 "parsermodule.c"
        if ($1456) { __label__ = 363; break; } else { __label__ = 353; break; } //@line 1073 "parsermodule.c"
      case 353: // $bb2_i332
        var $1457=$tree_addr_i322; //@line 1073 "parsermodule.c"
        var $1458=$1457+20; //@line 1073 "parsermodule.c"
        var $1459=HEAP[$1458]; //@line 1073 "parsermodule.c"
        var $1460=$1459+24; //@line 1073 "parsermodule.c"
        var $1461=_validate_test($1460); //@line 1073 "parsermodule.c"
        var $1462=($1461)==0; //@line 1073 "parsermodule.c"
        if ($1462) { __label__ = 363; break; } else { __label__ = 354; break; } //@line 1073 "parsermodule.c"
      case 354: // $bb3_i333
        var $1463=$tree_addr_i322; //@line 1073 "parsermodule.c"
        var $1464=$1463+20; //@line 1073 "parsermodule.c"
        var $1465=HEAP[$1464]; //@line 1073 "parsermodule.c"
        var $1466=$1465+48; //@line 1073 "parsermodule.c"
        var $1467=_validate_terminal($1466, 11, __str54); //@line 1073 "parsermodule.c"
        var $1468=($1467)==0; //@line 1073 "parsermodule.c"
        if ($1468) { __label__ = 363; break; } else { __label__ = 355; break; } //@line 1073 "parsermodule.c"
      case 355: // $bb4_i334
        var $1469=$tree_addr_i322; //@line 1073 "parsermodule.c"
        var $1470=$1469+20; //@line 1073 "parsermodule.c"
        var $1471=HEAP[$1470]; //@line 1073 "parsermodule.c"
        var $1472=$1471+72; //@line 1073 "parsermodule.c"
        var $1473=_validate_suite($1472); //@line 1073 "parsermodule.c"
        var $1474=($1473)==0; //@line 1073 "parsermodule.c"
        if ($1474) { __label__ = 363; break; } else { __label__ = 356; break; } //@line 1073 "parsermodule.c"
      case 356: // $bb8_i338
        $iftmp_70_i=1; //@line 1073 "parsermodule.c"
        $res_i325=1; //@line 1073 "parsermodule.c"
        var $1475=$nch_i324; //@line 1075 "parsermodule.c"
        var $1476=($1475) % 4; //@line 1075 "parsermodule.c"
        var $1477=($1476)!=3; //@line 1075 "parsermodule.c"
        if ($1477) { __label__ = 368; break; } else { __label__ = 357; break; } //@line 1075 "parsermodule.c"
      case 357: // $bb9_i339
        var $1478=$tree_addr_i322; //@line 1077 "parsermodule.c"
        var $1479=$1478+20; //@line 1077 "parsermodule.c"
        var $1480=HEAP[$1479]; //@line 1077 "parsermodule.c"
        var $1481=$nch_i324; //@line 1077 "parsermodule.c"
        var $1482=($1481) - 3; //@line 1077 "parsermodule.c"
        var $1483=$1480+24*$1482; //@line 1077 "parsermodule.c"
        var $1484=_validate_terminal($1483, 1, __str58); //@line 1077 "parsermodule.c"
        var $1485=($1484)==0; //@line 1077 "parsermodule.c"
        if ($1485) { __label__ = 361; break; } else { __label__ = 358; break; } //@line 1077 "parsermodule.c"
      case 358: // $bb10_i340
        var $1486=$tree_addr_i322; //@line 1077 "parsermodule.c"
        var $1487=$1486+20; //@line 1077 "parsermodule.c"
        var $1488=HEAP[$1487]; //@line 1077 "parsermodule.c"
        var $1489=$nch_i324; //@line 1077 "parsermodule.c"
        var $1490=($1489) - 2; //@line 1077 "parsermodule.c"
        var $1491=$1488+24*$1490; //@line 1077 "parsermodule.c"
        var $1492=_validate_terminal($1491, 11, __str54); //@line 1077 "parsermodule.c"
        var $1493=($1492)==0; //@line 1077 "parsermodule.c"
        if ($1493) { __label__ = 361; break; } else { __label__ = 359; break; } //@line 1077 "parsermodule.c"
      case 359: // $bb11_i341
        var $1494=$tree_addr_i322; //@line 1077 "parsermodule.c"
        var $1495=$1494+20; //@line 1077 "parsermodule.c"
        var $1496=HEAP[$1495]; //@line 1077 "parsermodule.c"
        var $1497=$nch_i324; //@line 1077 "parsermodule.c"
        var $1498=($1497) - 1; //@line 1077 "parsermodule.c"
        var $1499=$1496+24*$1498; //@line 1077 "parsermodule.c"
        var $1500=_validate_suite($1499); //@line 1077 "parsermodule.c"
        var $1501=($1500)==0; //@line 1077 "parsermodule.c"
        if ($1501) { __label__ = 361; break; } else { __label__ = 360; break; } //@line 1077 "parsermodule.c"
      case 360: // $bb12_i342
        $iftmp_71_i=1; //@line 1077 "parsermodule.c"
        __label__ = 362; break; //@line 1077 "parsermodule.c"
      case 361: // $bb13_i343
        $iftmp_71_i=0; //@line 1077 "parsermodule.c"
        __label__ = 362; break; //@line 1077 "parsermodule.c"
      case 362: // $bb14_i344
        var $1502=$iftmp_71_i; //@line 1077 "parsermodule.c"
        $res_i325=$1502; //@line 1077 "parsermodule.c"
        var $1503=$nch_i324; //@line 1080 "parsermodule.c"
        var $1504=($1503) - 3; //@line 1080 "parsermodule.c"
        $nch_i324=$1504; //@line 1080 "parsermodule.c"
        __label__ = 368; break; //@line 1080 "parsermodule.c"
      case 363: // $bb16_i346
        $iftmp_70_i=0; //@line 1073 "parsermodule.c"
        $res_i325=0; //@line 1073 "parsermodule.c"
        var $1505=_PyErr_Occurred(); //@line 1082 "parsermodule.c"
        var $1506=($1505)==0; //@line 1082 "parsermodule.c"
        if ($1506) { __label__ = 364; break; } else { __label__ = 368; break; } //@line 1082 "parsermodule.c"
      case 364: // $bb17_i347
        var $1507=$tree_addr_i322; //@line 1083 "parsermodule.c"
        $n_addr_i1_i315=$1507;
        $num_addr_i_i316=4;
        $name_addr_i_i317=__str57;
        var $1508=$n_addr_i1_i315; //@line 975 "parsermodule.c"
        var $1509=$1508+16; //@line 975 "parsermodule.c"
        var $1510=HEAP[$1509]; //@line 975 "parsermodule.c"
        var $1511=$num_addr_i_i316; //@line 975 "parsermodule.c"
        var $1512=($1510)!=($1511); //@line 975 "parsermodule.c"
        if ($1512) { __label__ = 365; break; } else { __label__ = 366; break; } //@line 975 "parsermodule.c"
      case 365: // $bb_i3_i348
        var $1513=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $1514=$name_addr_i_i317; //@line 976 "parsermodule.c"
        var $1515=_PyErr_Format($1513, __str50, $1514); //@line 976 "parsermodule.c"
        $24=0; //@line 978 "parsermodule.c"
        __label__ = 367; break; //@line 978 "parsermodule.c"
      case 366: // $bb1_i4_i349
        $24=1; //@line 980 "parsermodule.c"
        __label__ = 367; break; //@line 980 "parsermodule.c"
      case 367: // $validate_numnodes_exit_i351
        var $1516=$24; //@line 978 "parsermodule.c"
        $retval_i2_i318=$1516; //@line 978 "parsermodule.c"
        __label__ = 368; break; //@line 1083 "parsermodule.c"
      case 368: // $bb18_i352
        var $1517=$nch_i324; //@line 1084 "parsermodule.c"
        var $1518=($1517) & 3; //@line 1084 "parsermodule.c"
        var $1519=($1518)!=0; //@line 1084 "parsermodule.c"
        if ($1519) { __label__ = 369; break; } else { __label__ = 373; break; } //@line 1084 "parsermodule.c"
      case 369: // $bb19_i353
        var $1520=$tree_addr_i322; //@line 1086 "parsermodule.c"
        $n_addr_i6_i314=$1520;
        $num_addr_i7_i=0;
        $name_addr_i8_i=__str57;
        var $1521=$n_addr_i6_i314; //@line 975 "parsermodule.c"
        var $1522=$1521+16; //@line 975 "parsermodule.c"
        var $1523=HEAP[$1522]; //@line 975 "parsermodule.c"
        var $1524=$num_addr_i7_i; //@line 975 "parsermodule.c"
        var $1525=($1523)!=($1524); //@line 975 "parsermodule.c"
        if ($1525) { __label__ = 370; break; } else { __label__ = 371; break; } //@line 975 "parsermodule.c"
      case 370: // $bb_i10_i
        var $1526=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $1527=$name_addr_i8_i; //@line 976 "parsermodule.c"
        var $1528=_PyErr_Format($1526, __str50, $1527); //@line 976 "parsermodule.c"
        $23=0; //@line 978 "parsermodule.c"
        __label__ = 372; break; //@line 978 "parsermodule.c"
      case 371: // $bb1_i11_i
        $23=1; //@line 980 "parsermodule.c"
        __label__ = 372; break; //@line 980 "parsermodule.c"
      case 372: // $validate_numnodes_exit13_i
        var $1529=$23; //@line 978 "parsermodule.c"
        $retval_i9_i=$1529; //@line 978 "parsermodule.c"
        var $retval3_i12_i=$retval_i9_i; //@line 978 "parsermodule.c"
        $res_i325=$retval3_i12_i; //@line 1086 "parsermodule.c"
        __label__ = 385; break; //@line 1086 "parsermodule.c"
      case 373: // $bb20_i354
        var $1530=$res_i325; //@line 1087 "parsermodule.c"
        var $1531=($1530)!=0; //@line 1087 "parsermodule.c"
        if ($1531) { __label__ = 374; break; } else { __label__ = 385; break; } //@line 1087 "parsermodule.c"
      case 374: // $bb21_i355
        var $1532=$nch_i324; //@line 1087 "parsermodule.c"
        var $1533=($1532) > 4; //@line 1087 "parsermodule.c"
        if ($1533) { __label__ = 375; break; } else { __label__ = 385; break; } //@line 1087 "parsermodule.c"
      case 375: // $bb22_i356
        $j_i326=4; //@line 1089 "parsermodule.c"
        __label__ = 383; break; //@line 1089 "parsermodule.c"
      case 376: // $bb23_i357
        var $1534=$tree_addr_i322; //@line 1091 "parsermodule.c"
        var $1535=$1534+20; //@line 1091 "parsermodule.c"
        var $1536=HEAP[$1535]; //@line 1091 "parsermodule.c"
        var $1537=$j_i326; //@line 1091 "parsermodule.c"
        var $1538=$1536+24*$1537; //@line 1091 "parsermodule.c"
        var $1539=_validate_terminal($1538, 1, __str59); //@line 1091 "parsermodule.c"
        var $1540=($1539)==0; //@line 1091 "parsermodule.c"
        if ($1540) { __label__ = 381; break; } else { __label__ = 377; break; } //@line 1091 "parsermodule.c"
      case 377: // $bb24_i358
        var $1541=$tree_addr_i322; //@line 1091 "parsermodule.c"
        var $1542=$1541+20; //@line 1091 "parsermodule.c"
        var $1543=HEAP[$1542]; //@line 1091 "parsermodule.c"
        var $1544=$j_i326; //@line 1091 "parsermodule.c"
        var $1545=($1544) + 2; //@line 1091 "parsermodule.c"
        var $1546=$1543+24*$1545; //@line 1091 "parsermodule.c"
        var $1547=_validate_terminal($1546, 11, __str54); //@line 1091 "parsermodule.c"
        var $1548=($1547)==0; //@line 1091 "parsermodule.c"
        if ($1548) { __label__ = 381; break; } else { __label__ = 378; break; } //@line 1091 "parsermodule.c"
      case 378: // $bb25_i359
        var $1549=$tree_addr_i322; //@line 1091 "parsermodule.c"
        var $1550=$1549+20; //@line 1091 "parsermodule.c"
        var $1551=HEAP[$1550]; //@line 1091 "parsermodule.c"
        var $1552=$j_i326; //@line 1091 "parsermodule.c"
        var $1553=($1552) + 1; //@line 1091 "parsermodule.c"
        var $1554=$1551+24*$1553; //@line 1091 "parsermodule.c"
        var $1555=_validate_test($1554); //@line 1091 "parsermodule.c"
        var $1556=($1555)==0; //@line 1091 "parsermodule.c"
        if ($1556) { __label__ = 381; break; } else { __label__ = 379; break; } //@line 1091 "parsermodule.c"
      case 379: // $bb26_i360
        var $1557=$tree_addr_i322; //@line 1091 "parsermodule.c"
        var $1558=$1557+20; //@line 1091 "parsermodule.c"
        var $1559=HEAP[$1558]; //@line 1091 "parsermodule.c"
        var $1560=$j_i326; //@line 1091 "parsermodule.c"
        var $1561=($1560) + 3; //@line 1091 "parsermodule.c"
        var $1562=$1559+24*$1561; //@line 1091 "parsermodule.c"
        var $1563=_validate_suite($1562); //@line 1091 "parsermodule.c"
        var $1564=($1563)==0; //@line 1091 "parsermodule.c"
        if ($1564) { __label__ = 381; break; } else { __label__ = 380; break; } //@line 1091 "parsermodule.c"
      case 380: // $bb27_i361
        $iftmp_73_i=1; //@line 1091 "parsermodule.c"
        __label__ = 382; break; //@line 1091 "parsermodule.c"
      case 381: // $bb28_i362
        $iftmp_73_i=0; //@line 1091 "parsermodule.c"
        __label__ = 382; break; //@line 1091 "parsermodule.c"
      case 382: // $bb29_i363
        var $1565=$iftmp_73_i; //@line 1091 "parsermodule.c"
        $res_i325=$1565; //@line 1091 "parsermodule.c"
        var $1566=$j_i326; //@line 1095 "parsermodule.c"
        var $1567=($1566) + 4; //@line 1095 "parsermodule.c"
        $j_i326=$1567; //@line 1095 "parsermodule.c"
        __label__ = 383; break; //@line 1095 "parsermodule.c"
      case 383: // $bb30_i364
        var $1568=$j_i326; //@line 1090 "parsermodule.c"
        var $1569=$nch_i324; //@line 1090 "parsermodule.c"
        var $1570=($1568) >= ($1569); //@line 1090 "parsermodule.c"
        if ($1570) { __label__ = 385; break; } else { __label__ = 384; break; } //@line 1090 "parsermodule.c"
      case 384: // $bb31_i365
        var $1571=$res_i325; //@line 1090 "parsermodule.c"
        var $1572=($1571)!=0; //@line 1090 "parsermodule.c"
        if ($1572) { __label__ = 376; break; } else { __label__ = 385; break; } //@line 1090 "parsermodule.c"
      case 385: // $validate_if_exit
        var $1573=$res_i325; //@line 1098 "parsermodule.c"
        $26=$1573; //@line 1098 "parsermodule.c"
        var $1574=$26; //@line 1098 "parsermodule.c"
        $retval_i323=$1574; //@line 1098 "parsermodule.c"
        var $retval33_i366=$retval_i323; //@line 1098 "parsermodule.c"
        $res=$retval33_i366; //@line 3184 "parsermodule.c"
        __label__ = 523; break; //@line 3184 "parsermodule.c"
      case 386: // $bb50
        var $1575=$tree_addr; //@line 3187 "parsermodule.c"
        $tree_addr_i371=$1575;
        var $1576=$tree_addr_i371; //@line 2020 "parsermodule.c"
        var $1577=$1576+16; //@line 2020 "parsermodule.c"
        var $1578=HEAP[$1577]; //@line 2020 "parsermodule.c"
        $nch_i373=$1578; //@line 2020 "parsermodule.c"
        var $1579=$tree_addr_i371; //@line 2026 "parsermodule.c"
        $n_addr_i_i368=$1579;
        $t_addr_i_i369=294;
        var $1580=$n_addr_i_i368; //@line 956 "parsermodule.c"
        var $1581=$1580; //@line 956 "parsermodule.c"
        var $1582=HEAP[$1581]; //@line 956 "parsermodule.c"
        var $1583=($1582); //@line 956 "parsermodule.c"
        var $1584=$t_addr_i_i369; //@line 956 "parsermodule.c"
        var $1585=($1583)!=($1584); //@line 956 "parsermodule.c"
        if ($1585) { __label__ = 387; break; } else { __label__ = 388; break; } //@line 956 "parsermodule.c"
      case 387: // $validate_ntype_exit_i378_thread
        var $1586=$n_addr_i_i368; //@line 957 "parsermodule.c"
        var $1587=$1586; //@line 957 "parsermodule.c"
        var $1588=HEAP[$1587]; //@line 957 "parsermodule.c"
        var $1589=($1588); //@line 957 "parsermodule.c"
        var $1590=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1591=$t_addr_i_i369; //@line 957 "parsermodule.c"
        var $1592=_PyErr_Format($1590, __str49, $1591, $1589); //@line 957 "parsermodule.c"
        $21=0; //@line 959 "parsermodule.c"
        $retval_i_i370=0; //@line 959 "parsermodule.c"
        __label__ = 393; break;
      case 388: // $bb_i380
        $21=1; //@line 961 "parsermodule.c"
        $retval_i_i370=1; //@line 959 "parsermodule.c"
        var $1593=$nch_i373; //@line 2026 "parsermodule.c"
        var $1594=($1593)==4; //@line 2026 "parsermodule.c"
        var $1595=$nch_i373; //@line 2026 "parsermodule.c"
        var $1596=($1595)==7; //@line 2026 "parsermodule.c"
        var $or_cond_i379=($1594) | ($1596);
        if ($or_cond_i379) { __label__ = 389; break; } else { __label__ = 393; break; } //@line 2026 "parsermodule.c"
      case 389: // $bb2_i381
        var $1597=$tree_addr_i371; //@line 2026 "parsermodule.c"
        var $1598=$1597+20; //@line 2026 "parsermodule.c"
        var $1599=HEAP[$1598]; //@line 2026 "parsermodule.c"
        var $1600=$1599; //@line 2026 "parsermodule.c"
        var $1601=_validate_terminal($1600, 1, __str128); //@line 2026 "parsermodule.c"
        var $1602=($1601)==0; //@line 2026 "parsermodule.c"
        if ($1602) { __label__ = 393; break; } else { __label__ = 390; break; } //@line 2026 "parsermodule.c"
      case 390: // $bb3_i382
        var $1603=$tree_addr_i371; //@line 2026 "parsermodule.c"
        var $1604=$1603+20; //@line 2026 "parsermodule.c"
        var $1605=HEAP[$1604]; //@line 2026 "parsermodule.c"
        var $1606=$1605+24; //@line 2026 "parsermodule.c"
        var $1607=_validate_test($1606); //@line 2026 "parsermodule.c"
        var $1608=($1607)==0; //@line 2026 "parsermodule.c"
        if ($1608) { __label__ = 393; break; } else { __label__ = 391; break; } //@line 2026 "parsermodule.c"
      case 391: // $bb4_i383
        var $1609=$tree_addr_i371; //@line 2026 "parsermodule.c"
        var $1610=$1609+20; //@line 2026 "parsermodule.c"
        var $1611=HEAP[$1610]; //@line 2026 "parsermodule.c"
        var $1612=$1611+48; //@line 2026 "parsermodule.c"
        var $1613=_validate_terminal($1612, 11, __str54); //@line 2026 "parsermodule.c"
        var $1614=($1613)==0; //@line 2026 "parsermodule.c"
        if ($1614) { __label__ = 393; break; } else { __label__ = 392; break; } //@line 2026 "parsermodule.c"
      case 392: // $bb5_i384
        var $1615=$tree_addr_i371; //@line 2026 "parsermodule.c"
        var $1616=$1615+20; //@line 2026 "parsermodule.c"
        var $1617=HEAP[$1616]; //@line 2026 "parsermodule.c"
        var $1618=$1617+72; //@line 2026 "parsermodule.c"
        var $1619=_validate_suite($1618); //@line 2026 "parsermodule.c"
        var $1620=($1619)==0; //@line 2026 "parsermodule.c"
        if ($1620) { __label__ = 393; break; } else { __label__ = 394; break; } //@line 2026 "parsermodule.c"
      case 393: // $bb8_i387
        $iftmp_131_i=0; //@line 2026 "parsermodule.c"
        $res_i374=0; //@line 2026 "parsermodule.c"
        __label__ = 401; break;
      case 394: // $bb9_i388
        $iftmp_131_i=1; //@line 2026 "parsermodule.c"
        $res_i374=1; //@line 2026 "parsermodule.c"
        var $1621=$nch_i373; //@line 2028 "parsermodule.c"
        var $1622=($1621)==7; //@line 2028 "parsermodule.c"
        if ($1622) { __label__ = 395; break; } else { __label__ = 401; break; } //@line 2028 "parsermodule.c"
      case 395: // $bb10_i389
        var $1623=$tree_addr_i371; //@line 2029 "parsermodule.c"
        var $1624=$1623+20; //@line 2029 "parsermodule.c"
        var $1625=HEAP[$1624]; //@line 2029 "parsermodule.c"
        var $1626=$1625+96; //@line 2029 "parsermodule.c"
        var $1627=_validate_terminal($1626, 1, __str58); //@line 2029 "parsermodule.c"
        var $1628=($1627)==0; //@line 2029 "parsermodule.c"
        if ($1628) { __label__ = 399; break; } else { __label__ = 396; break; } //@line 2029 "parsermodule.c"
      case 396: // $bb11_i390
        var $1629=$tree_addr_i371; //@line 2029 "parsermodule.c"
        var $1630=$1629+20; //@line 2029 "parsermodule.c"
        var $1631=HEAP[$1630]; //@line 2029 "parsermodule.c"
        var $1632=$1631+120; //@line 2029 "parsermodule.c"
        var $1633=_validate_terminal($1632, 11, __str54); //@line 2029 "parsermodule.c"
        var $1634=($1633)==0; //@line 2029 "parsermodule.c"
        if ($1634) { __label__ = 399; break; } else { __label__ = 397; break; } //@line 2029 "parsermodule.c"
      case 397: // $bb12_i391
        var $1635=$tree_addr_i371; //@line 2029 "parsermodule.c"
        var $1636=$1635+20; //@line 2029 "parsermodule.c"
        var $1637=HEAP[$1636]; //@line 2029 "parsermodule.c"
        var $1638=$1637+144; //@line 2029 "parsermodule.c"
        var $1639=_validate_suite($1638); //@line 2029 "parsermodule.c"
        var $1640=($1639)==0; //@line 2029 "parsermodule.c"
        if ($1640) { __label__ = 399; break; } else { __label__ = 398; break; } //@line 2029 "parsermodule.c"
      case 398: // $bb13_i392
        $iftmp_132_i=1; //@line 2029 "parsermodule.c"
        __label__ = 400; break; //@line 2029 "parsermodule.c"
      case 399: // $bb14_i393
        $iftmp_132_i=0; //@line 2029 "parsermodule.c"
        __label__ = 400; break; //@line 2029 "parsermodule.c"
      case 400: // $bb15_i394
        var $1641=$iftmp_132_i; //@line 2029 "parsermodule.c"
        $res_i374=$1641; //@line 2029 "parsermodule.c"
        __label__ = 401; break; //@line 2029 "parsermodule.c"
      case 401: // $validate_while_exit
        var $1642=$res_i374; //@line 2033 "parsermodule.c"
        $22=$1642; //@line 2033 "parsermodule.c"
        var $1643=$22; //@line 2033 "parsermodule.c"
        $retval_i372=$1643; //@line 2033 "parsermodule.c"
        var $retval17_i395=$retval_i372; //@line 2033 "parsermodule.c"
        $res=$retval17_i395; //@line 3187 "parsermodule.c"
        __label__ = 523; break; //@line 3187 "parsermodule.c"
      case 402: // $bb51
        var $1644=$tree_addr; //@line 3190 "parsermodule.c"
        $tree_addr_i403=$1644;
        var $1645=$tree_addr_i403; //@line 2040 "parsermodule.c"
        var $1646=$1645+16; //@line 2040 "parsermodule.c"
        var $1647=HEAP[$1646]; //@line 2040 "parsermodule.c"
        $nch_i405=$1647; //@line 2040 "parsermodule.c"
        var $1648=$tree_addr_i403; //@line 2048 "parsermodule.c"
        $n_addr_i_i400=$1648;
        $t_addr_i_i401=295;
        var $1649=$n_addr_i_i400; //@line 956 "parsermodule.c"
        var $1650=$1649; //@line 956 "parsermodule.c"
        var $1651=HEAP[$1650]; //@line 956 "parsermodule.c"
        var $1652=($1651); //@line 956 "parsermodule.c"
        var $1653=$t_addr_i_i401; //@line 956 "parsermodule.c"
        var $1654=($1652)!=($1653); //@line 956 "parsermodule.c"
        if ($1654) { __label__ = 403; break; } else { __label__ = 404; break; } //@line 956 "parsermodule.c"
      case 403: // $validate_ntype_exit_i410_thread
        var $1655=$n_addr_i_i400; //@line 957 "parsermodule.c"
        var $1656=$1655; //@line 957 "parsermodule.c"
        var $1657=HEAP[$1656]; //@line 957 "parsermodule.c"
        var $1658=($1657); //@line 957 "parsermodule.c"
        var $1659=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1660=$t_addr_i_i401; //@line 957 "parsermodule.c"
        var $1661=_PyErr_Format($1659, __str49, $1660, $1658); //@line 957 "parsermodule.c"
        $19=0; //@line 959 "parsermodule.c"
        $retval_i_i402=0; //@line 959 "parsermodule.c"
        __label__ = 411; break;
      case 404: // $bb_i412
        $19=1; //@line 961 "parsermodule.c"
        $retval_i_i402=1; //@line 959 "parsermodule.c"
        var $1662=$nch_i405; //@line 2048 "parsermodule.c"
        var $1663=($1662)==6; //@line 2048 "parsermodule.c"
        var $1664=$nch_i405; //@line 2048 "parsermodule.c"
        var $1665=($1664)==9; //@line 2048 "parsermodule.c"
        var $or_cond_i411=($1663) | ($1665);
        if ($or_cond_i411) { __label__ = 405; break; } else { __label__ = 411; break; } //@line 2048 "parsermodule.c"
      case 405: // $bb2_i413
        var $1666=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1667=$1666+20; //@line 2048 "parsermodule.c"
        var $1668=HEAP[$1667]; //@line 2048 "parsermodule.c"
        var $1669=$1668; //@line 2048 "parsermodule.c"
        var $1670=_validate_terminal($1669, 1, __str75); //@line 2048 "parsermodule.c"
        var $1671=($1670)==0; //@line 2048 "parsermodule.c"
        if ($1671) { __label__ = 411; break; } else { __label__ = 406; break; } //@line 2048 "parsermodule.c"
      case 406: // $bb3_i415
        var $1672=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1673=$1672+20; //@line 2048 "parsermodule.c"
        var $1674=HEAP[$1673]; //@line 2048 "parsermodule.c"
        var $1675=$1674+24; //@line 2048 "parsermodule.c"
        $tree_addr_i_i398=$1675;
        var $1676=$tree_addr_i_i398; //@line 2968 "parsermodule.c"
        var $1677=_validate_repeating_list($1676, 326, (FUNCTION_TABLE_OFFSET + 12), __str171); //@line 2968 "parsermodule.c"
        $18=$1677; //@line 2968 "parsermodule.c"
        var $1678=$18; //@line 2968 "parsermodule.c"
        $retval_i2_i399=$1678; //@line 2968 "parsermodule.c"
        var $retval1_i_i414=$retval_i2_i399; //@line 2968 "parsermodule.c"
        var $1679=($retval1_i_i414)==0; //@line 2048 "parsermodule.c"
        if ($1679) { __label__ = 411; break; } else { __label__ = 407; break; } //@line 2048 "parsermodule.c"
      case 407: // $bb4_i416
        var $1680=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1681=$1680+20; //@line 2048 "parsermodule.c"
        var $1682=HEAP[$1681]; //@line 2048 "parsermodule.c"
        var $1683=$1682+48; //@line 2048 "parsermodule.c"
        var $1684=_validate_terminal($1683, 1, __str76); //@line 2048 "parsermodule.c"
        var $1685=($1684)==0; //@line 2048 "parsermodule.c"
        if ($1685) { __label__ = 411; break; } else { __label__ = 408; break; } //@line 2048 "parsermodule.c"
      case 408: // $bb5_i417
        var $1686=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1687=$1686+20; //@line 2048 "parsermodule.c"
        var $1688=HEAP[$1687]; //@line 2048 "parsermodule.c"
        var $1689=$1688+72; //@line 2048 "parsermodule.c"
        $tree_addr_i3_i=$1689;
        var $1690=$tree_addr_i3_i; //@line 1162 "parsermodule.c"
        var $1691=_validate_repeating_list($1690, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $17=$1691; //@line 1162 "parsermodule.c"
        var $1692=$17; //@line 1162 "parsermodule.c"
        $retval_i4_i397=$1692; //@line 1162 "parsermodule.c"
        var $retval1_i5_i=$retval_i4_i397; //@line 1162 "parsermodule.c"
        var $1693=($retval1_i5_i)==0; //@line 2048 "parsermodule.c"
        if ($1693) { __label__ = 411; break; } else { __label__ = 409; break; } //@line 2048 "parsermodule.c"
      case 409: // $bb6_i418
        var $1694=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1695=$1694+20; //@line 2048 "parsermodule.c"
        var $1696=HEAP[$1695]; //@line 2048 "parsermodule.c"
        var $1697=$1696+96; //@line 2048 "parsermodule.c"
        var $1698=_validate_terminal($1697, 11, __str54); //@line 2048 "parsermodule.c"
        var $1699=($1698)==0; //@line 2048 "parsermodule.c"
        if ($1699) { __label__ = 411; break; } else { __label__ = 410; break; } //@line 2048 "parsermodule.c"
      case 410: // $bb7_i419
        var $1700=$tree_addr_i403; //@line 2048 "parsermodule.c"
        var $1701=$1700+20; //@line 2048 "parsermodule.c"
        var $1702=HEAP[$1701]; //@line 2048 "parsermodule.c"
        var $1703=$1702+120; //@line 2048 "parsermodule.c"
        var $1704=_validate_suite($1703); //@line 2048 "parsermodule.c"
        var $1705=($1704)==0; //@line 2048 "parsermodule.c"
        if ($1705) { __label__ = 411; break; } else { __label__ = 412; break; } //@line 2048 "parsermodule.c"
      case 411: // $bb10_i422
        $iftmp_133_i=0; //@line 2048 "parsermodule.c"
        $res_i406=0; //@line 2048 "parsermodule.c"
        __label__ = 419; break;
      case 412: // $bb11_i423
        $iftmp_133_i=1; //@line 2048 "parsermodule.c"
        $res_i406=1; //@line 2048 "parsermodule.c"
        var $1706=$nch_i405; //@line 2050 "parsermodule.c"
        var $1707=($1706)==9; //@line 2050 "parsermodule.c"
        if ($1707) { __label__ = 413; break; } else { __label__ = 419; break; } //@line 2050 "parsermodule.c"
      case 413: // $bb12_i424
        var $1708=$tree_addr_i403; //@line 2051 "parsermodule.c"
        var $1709=$1708+20; //@line 2051 "parsermodule.c"
        var $1710=HEAP[$1709]; //@line 2051 "parsermodule.c"
        var $1711=$1710+144; //@line 2051 "parsermodule.c"
        var $1712=_validate_terminal($1711, 1, __str58); //@line 2051 "parsermodule.c"
        var $1713=($1712)==0; //@line 2051 "parsermodule.c"
        if ($1713) { __label__ = 417; break; } else { __label__ = 414; break; } //@line 2051 "parsermodule.c"
      case 414: // $bb13_i425
        var $1714=$tree_addr_i403; //@line 2051 "parsermodule.c"
        var $1715=$1714+20; //@line 2051 "parsermodule.c"
        var $1716=HEAP[$1715]; //@line 2051 "parsermodule.c"
        var $1717=$1716+168; //@line 2051 "parsermodule.c"
        var $1718=_validate_terminal($1717, 11, __str54); //@line 2051 "parsermodule.c"
        var $1719=($1718)==0; //@line 2051 "parsermodule.c"
        if ($1719) { __label__ = 417; break; } else { __label__ = 415; break; } //@line 2051 "parsermodule.c"
      case 415: // $bb14_i426
        var $1720=$tree_addr_i403; //@line 2051 "parsermodule.c"
        var $1721=$1720+20; //@line 2051 "parsermodule.c"
        var $1722=HEAP[$1721]; //@line 2051 "parsermodule.c"
        var $1723=$1722+192; //@line 2051 "parsermodule.c"
        var $1724=_validate_suite($1723); //@line 2051 "parsermodule.c"
        var $1725=($1724)==0; //@line 2051 "parsermodule.c"
        if ($1725) { __label__ = 417; break; } else { __label__ = 416; break; } //@line 2051 "parsermodule.c"
      case 416: // $bb15_i427
        $iftmp_134_i=1; //@line 2051 "parsermodule.c"
        __label__ = 418; break; //@line 2051 "parsermodule.c"
      case 417: // $bb16_i428
        $iftmp_134_i=0; //@line 2051 "parsermodule.c"
        __label__ = 418; break; //@line 2051 "parsermodule.c"
      case 418: // $bb17_i429
        var $1726=$iftmp_134_i; //@line 2051 "parsermodule.c"
        $res_i406=$1726; //@line 2051 "parsermodule.c"
        __label__ = 419; break; //@line 2051 "parsermodule.c"
      case 419: // $validate_for_exit
        var $1727=$res_i406; //@line 2055 "parsermodule.c"
        $20=$1727; //@line 2055 "parsermodule.c"
        var $1728=$20; //@line 2055 "parsermodule.c"
        $retval_i404=$1728; //@line 2055 "parsermodule.c"
        var $retval19_i=$retval_i404; //@line 2055 "parsermodule.c"
        $res=$retval19_i; //@line 3190 "parsermodule.c"
        __label__ = 523; break; //@line 3190 "parsermodule.c"
      case 420: // $bb52
        var $1729=$tree_addr; //@line 3193 "parsermodule.c"
        $tree_addr_i444=$1729;
        var $1730=$tree_addr_i444; //@line 2068 "parsermodule.c"
        var $1731=$1730+16; //@line 2068 "parsermodule.c"
        var $1732=HEAP[$1731]; //@line 2068 "parsermodule.c"
        $nch_i446=$1732; //@line 2068 "parsermodule.c"
        $pos_i=3; //@line 2069 "parsermodule.c"
        var $1733=$tree_addr_i444; //@line 2071 "parsermodule.c"
        $n_addr_i_i441=$1733;
        $t_addr_i_i442=296;
        var $1734=$n_addr_i_i441; //@line 956 "parsermodule.c"
        var $1735=$1734; //@line 956 "parsermodule.c"
        var $1736=HEAP[$1735]; //@line 956 "parsermodule.c"
        var $1737=($1736); //@line 956 "parsermodule.c"
        var $1738=$t_addr_i_i442; //@line 956 "parsermodule.c"
        var $1739=($1737)!=($1738); //@line 956 "parsermodule.c"
        if ($1739) { __label__ = 421; break; } else { __label__ = 422; break; } //@line 956 "parsermodule.c"
      case 421: // $validate_ntype_exit_i451_thread
        var $1740=$n_addr_i_i441; //@line 957 "parsermodule.c"
        var $1741=$1740; //@line 957 "parsermodule.c"
        var $1742=HEAP[$1741]; //@line 957 "parsermodule.c"
        var $1743=($1742); //@line 957 "parsermodule.c"
        var $1744=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1745=$t_addr_i_i442; //@line 957 "parsermodule.c"
        var $1746=_PyErr_Format($1744, __str49, $1745, $1743); //@line 957 "parsermodule.c"
        $15=0; //@line 959 "parsermodule.c"
        $retval_i_i443=0; //@line 959 "parsermodule.c"
        __label__ = 432; break;
      case 422: // $bb_i452
        $15=1; //@line 961 "parsermodule.c"
        $retval_i_i443=1; //@line 959 "parsermodule.c"
        var $1747=$nch_i446; //@line 2071 "parsermodule.c"
        var $1748=($1747) <= 5; //@line 2071 "parsermodule.c"
        if ($1748) { __label__ = 432; break; } else { __label__ = 423; break; } //@line 2071 "parsermodule.c"
      case 423: // $bb1_i453
        var $1749=$nch_i446; //@line 2071 "parsermodule.c"
        var $1750=($1749) % 3; //@line 2071 "parsermodule.c"
        var $1751=($1750)!=0; //@line 2071 "parsermodule.c"
        if ($1751) { __label__ = 432; break; } else { __label__ = 424; break; } //@line 2071 "parsermodule.c"
      case 424: // $bb5_i457
        $iftmp_135_i=1; //@line 2071 "parsermodule.c"
        $res_i447=1; //@line 2071 "parsermodule.c"
        var $1752=$tree_addr_i444; //@line 2074 "parsermodule.c"
        var $1753=$1752+20; //@line 2074 "parsermodule.c"
        var $1754=HEAP[$1753]; //@line 2074 "parsermodule.c"
        var $1755=$1754; //@line 2074 "parsermodule.c"
        var $1756=_validate_terminal($1755, 1, __str129); //@line 2074 "parsermodule.c"
        var $1757=($1756)==0; //@line 2074 "parsermodule.c"
        if ($1757) { __label__ = 430; break; } else { __label__ = 425; break; } //@line 2074 "parsermodule.c"
      case 425: // $bb6_i458
        var $1758=$tree_addr_i444; //@line 2074 "parsermodule.c"
        var $1759=$1758+20; //@line 2074 "parsermodule.c"
        var $1760=HEAP[$1759]; //@line 2074 "parsermodule.c"
        var $1761=$1760+24; //@line 2074 "parsermodule.c"
        var $1762=_validate_terminal($1761, 11, __str54); //@line 2074 "parsermodule.c"
        var $1763=($1762)==0; //@line 2074 "parsermodule.c"
        if ($1763) { __label__ = 430; break; } else { __label__ = 426; break; } //@line 2074 "parsermodule.c"
      case 426: // $bb7_i459
        var $1764=$tree_addr_i444; //@line 2074 "parsermodule.c"
        var $1765=$1764+20; //@line 2074 "parsermodule.c"
        var $1766=HEAP[$1765]; //@line 2074 "parsermodule.c"
        var $1767=$1766+48; //@line 2074 "parsermodule.c"
        var $1768=_validate_suite($1767); //@line 2074 "parsermodule.c"
        var $1769=($1768)==0; //@line 2074 "parsermodule.c"
        if ($1769) { __label__ = 430; break; } else { __label__ = 427; break; } //@line 2074 "parsermodule.c"
      case 427: // $bb8_i460
        var $1770=$tree_addr_i444; //@line 2074 "parsermodule.c"
        var $1771=$1770+20; //@line 2074 "parsermodule.c"
        var $1772=HEAP[$1771]; //@line 2074 "parsermodule.c"
        var $1773=$nch_i446; //@line 2074 "parsermodule.c"
        var $1774=($1773) - 2; //@line 2074 "parsermodule.c"
        var $1775=$1772+24*$1774; //@line 2074 "parsermodule.c"
        var $1776=_validate_terminal($1775, 11, __str54); //@line 2074 "parsermodule.c"
        var $1777=($1776)==0; //@line 2074 "parsermodule.c"
        if ($1777) { __label__ = 430; break; } else { __label__ = 428; break; } //@line 2074 "parsermodule.c"
      case 428: // $bb9_i461
        var $1778=$tree_addr_i444; //@line 2074 "parsermodule.c"
        var $1779=$1778+20; //@line 2074 "parsermodule.c"
        var $1780=HEAP[$1779]; //@line 2074 "parsermodule.c"
        var $1781=$nch_i446; //@line 2074 "parsermodule.c"
        var $1782=($1781) - 1; //@line 2074 "parsermodule.c"
        var $1783=$1780+24*$1782; //@line 2074 "parsermodule.c"
        var $1784=_validate_suite($1783); //@line 2074 "parsermodule.c"
        var $1785=($1784)==0; //@line 2074 "parsermodule.c"
        if ($1785) { __label__ = 430; break; } else { __label__ = 429; break; } //@line 2074 "parsermodule.c"
      case 429: // $bb10_i462
        $iftmp_136_i=1; //@line 2074 "parsermodule.c"
        __label__ = 431; break; //@line 2074 "parsermodule.c"
      case 430: // $bb11_i463
        $iftmp_136_i=0; //@line 2074 "parsermodule.c"
        __label__ = 431; break; //@line 2074 "parsermodule.c"
      case 431: // $bb12_i464
        var $1786=$iftmp_136_i; //@line 2074 "parsermodule.c"
        $res_i447=$1786; //@line 2074 "parsermodule.c"
        __lastLabel__ = 431; __label__ = 437; break; //@line 2074 "parsermodule.c"
      case 432: // $bb13_i465
        $iftmp_135_i=0; //@line 2071 "parsermodule.c"
        $res_i447=0; //@line 2071 "parsermodule.c"
        var $1787=_PyErr_Occurred(); //@line 2079 "parsermodule.c"
        var $1788=($1787)==0; //@line 2079 "parsermodule.c"
        if ($1788) { __label__ = 433; break; } else { __label__ = 436; break; } //@line 2079 "parsermodule.c"
      case 433: // $bb14_i466
        $name_i=__str130; //@line 2080 "parsermodule.c"
        var $1789=$tree_addr_i444; //@line 2081 "parsermodule.c"
        var $1790=$1789+20; //@line 2081 "parsermodule.c"
        var $1791=HEAP[$1790]; //@line 2081 "parsermodule.c"
        var $1792=$nch_i446; //@line 2081 "parsermodule.c"
        var $1793=($1792) - 3; //@line 2081 "parsermodule.c"
        var $1794=$1791+24*$1793; //@line 2081 "parsermodule.c"
        var $1795=$1794; //@line 2081 "parsermodule.c"
        var $1796=HEAP[$1795]; //@line 2081 "parsermodule.c"
        var $1797=($1796)!=299; //@line 2081 "parsermodule.c"
        if ($1797) { __label__ = 434; break; } else { __label__ = 435; break; } //@line 2081 "parsermodule.c"
      case 434: // $bb15_i467
        var $1798=$tree_addr_i444; //@line 2082 "parsermodule.c"
        var $1799=$1798+20; //@line 2082 "parsermodule.c"
        var $1800=HEAP[$1799]; //@line 2082 "parsermodule.c"
        var $1801=$nch_i446; //@line 2082 "parsermodule.c"
        var $1802=($1801) - 3; //@line 2082 "parsermodule.c"
        var $1803=$1800+24*$1802; //@line 2082 "parsermodule.c"
        var $1804=$1803+4; //@line 2082 "parsermodule.c"
        var $1805=HEAP[$1804]; //@line 2082 "parsermodule.c"
        $name_i=$1805; //@line 2082 "parsermodule.c"
        __label__ = 435; break; //@line 2082 "parsermodule.c"
      case 435: // $bb16_i468
        var $1806=HEAP[_parser_error]; //@line 2084 "parsermodule.c"
        var $1807=$name_i; //@line 2084 "parsermodule.c"
        var $1808=_PyErr_Format($1806, __str131, $1807); //@line 2084 "parsermodule.c"
        __label__ = 436; break; //@line 2084 "parsermodule.c"
      case 436: // $bb17_i469thread_pre_split
        var $_pr=$res_i447;
        __lastLabel__ = 436; __label__ = 437; break;
      case 437: // $bb17_i469
        var $1809=__lastLabel__ == 436 ? $_pr : ($1786);
        var $1810=($1809)!=0; //@line 2088 "parsermodule.c"
        if ($1810) { __label__ = 438; break; } else { __label__ = 472; break; } //@line 2088 "parsermodule.c"
      case 438: // $bb18_i470
        var $1811=$tree_addr_i444; //@line 2088 "parsermodule.c"
        var $1812=$1811+20; //@line 2088 "parsermodule.c"
        var $1813=HEAP[$1812]; //@line 2088 "parsermodule.c"
        var $1814=$pos_i; //@line 2088 "parsermodule.c"
        var $1815=$1813+24*$1814; //@line 2088 "parsermodule.c"
        var $1816=$1815; //@line 2088 "parsermodule.c"
        var $1817=HEAP[$1816]; //@line 2088 "parsermodule.c"
        var $1818=($1817)==1; //@line 2088 "parsermodule.c"
        if ($1818) { __label__ = 439; break; } else { __label__ = 472; break; } //@line 2088 "parsermodule.c"
      case 439: // $bb19_i471
        var $1819=$tree_addr_i444; //@line 2088 "parsermodule.c"
        var $1820=$1819+20; //@line 2088 "parsermodule.c"
        var $1821=HEAP[$1820]; //@line 2088 "parsermodule.c"
        var $1822=$pos_i; //@line 2088 "parsermodule.c"
        var $1823=$1821+24*$1822; //@line 2088 "parsermodule.c"
        var $1824=$1823+4; //@line 2088 "parsermodule.c"
        var $1825=HEAP[$1824]; //@line 2088 "parsermodule.c"
        var $1826=_strcmp($1825, __str132); //@line 2088 "parsermodule.c"
        var $1827=($1826)==0; //@line 2088 "parsermodule.c"
        if ($1827) { __label__ = 440; break; } else { __label__ = 472; break; } //@line 2088 "parsermodule.c"
      case 440: // $bb20_i472
        var $1828=$tree_addr_i444; //@line 2090 "parsermodule.c"
        $n_addr_i1_i437=$1828;
        $num_addr_i_i438=6;
        $name_addr_i_i439=__str133;
        var $1829=$n_addr_i1_i437; //@line 975 "parsermodule.c"
        var $1830=$1829+16; //@line 975 "parsermodule.c"
        var $1831=HEAP[$1830]; //@line 975 "parsermodule.c"
        var $1832=$num_addr_i_i438; //@line 975 "parsermodule.c"
        var $1833=($1831)!=($1832); //@line 975 "parsermodule.c"
        if ($1833) { __label__ = 441; break; } else { __label__ = 442; break; } //@line 975 "parsermodule.c"
      case 441: // $validate_numnodes_exit_i476_thread
        var $1834=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $1835=$name_addr_i_i439; //@line 976 "parsermodule.c"
        var $1836=_PyErr_Format($1834, __str50, $1835); //@line 976 "parsermodule.c"
        $14=0; //@line 978 "parsermodule.c"
        $retval_i2_i440=0; //@line 978 "parsermodule.c"
        __label__ = 445; break;
      case 442: // $bb21_i477
        $14=1; //@line 980 "parsermodule.c"
        $retval_i2_i440=1; //@line 978 "parsermodule.c"
        var $1837=$tree_addr_i444; //@line 2090 "parsermodule.c"
        var $1838=$1837+20; //@line 2090 "parsermodule.c"
        var $1839=HEAP[$1838]; //@line 2090 "parsermodule.c"
        var $1840=$1839+96; //@line 2090 "parsermodule.c"
        var $1841=_validate_terminal($1840, 11, __str54); //@line 2090 "parsermodule.c"
        var $1842=($1841)==0; //@line 2090 "parsermodule.c"
        if ($1842) { __label__ = 445; break; } else { __label__ = 443; break; } //@line 2090 "parsermodule.c"
      case 443: // $bb22_i478
        var $1843=$tree_addr_i444; //@line 2090 "parsermodule.c"
        var $1844=$1843+20; //@line 2090 "parsermodule.c"
        var $1845=HEAP[$1844]; //@line 2090 "parsermodule.c"
        var $1846=$1845+120; //@line 2090 "parsermodule.c"
        var $1847=_validate_suite($1846); //@line 2090 "parsermodule.c"
        var $1848=($1847)==0; //@line 2090 "parsermodule.c"
        if ($1848) { __label__ = 445; break; } else { __label__ = 444; break; } //@line 2090 "parsermodule.c"
      case 444: // $bb23_i479
        $iftmp_138_i=1; //@line 2090 "parsermodule.c"
        __label__ = 446; break; //@line 2090 "parsermodule.c"
      case 445: // $bb24_i480
        $iftmp_138_i=0; //@line 2090 "parsermodule.c"
        __label__ = 446; break; //@line 2090 "parsermodule.c"
      case 446: // $bb25_i481
        var $1849=$iftmp_138_i; //@line 2090 "parsermodule.c"
        $res_i447=$1849; //@line 2090 "parsermodule.c"
        var $1850=$res_i447; //@line 2093 "parsermodule.c"
        $16=$1850; //@line 2093 "parsermodule.c"
        __label__ = 497; break; //@line 2093 "parsermodule.c"
      case 447: // $bb27_i482
        var $1851=$tree_addr_i444; //@line 2097 "parsermodule.c"
        var $1852=$1851+20; //@line 2097 "parsermodule.c"
        var $1853=HEAP[$1852]; //@line 2097 "parsermodule.c"
        var $1854=$pos_i; //@line 2097 "parsermodule.c"
        var $1855=$1853+24*$1854; //@line 2097 "parsermodule.c"
        $tree_addr_i_i433=$1855;
        var $1856=$tree_addr_i_i433; //@line 2123 "parsermodule.c"
        var $1857=$1856+16; //@line 2123 "parsermodule.c"
        var $1858=HEAP[$1857]; //@line 2123 "parsermodule.c"
        $nch_i_i435=$1858; //@line 2123 "parsermodule.c"
        var $1859=$tree_addr_i_i433; //@line 2126 "parsermodule.c"
        $n_addr_i_i_i=$1859;
        $t_addr_i_i_i=299;
        var $1860=$n_addr_i_i_i; //@line 956 "parsermodule.c"
        var $1861=$1860; //@line 956 "parsermodule.c"
        var $1862=HEAP[$1861]; //@line 956 "parsermodule.c"
        var $1863=($1862); //@line 956 "parsermodule.c"
        var $1864=$t_addr_i_i_i; //@line 956 "parsermodule.c"
        var $1865=($1863)!=($1864); //@line 956 "parsermodule.c"
        if ($1865) { __label__ = 448; break; } else { __label__ = 449; break; } //@line 956 "parsermodule.c"
      case 448: // $validate_ntype_exit_thread_i_i
        var $1866=$n_addr_i_i_i; //@line 957 "parsermodule.c"
        var $1867=$1866; //@line 957 "parsermodule.c"
        var $1868=HEAP[$1867]; //@line 957 "parsermodule.c"
        var $1869=($1868); //@line 957 "parsermodule.c"
        var $1870=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $1871=$t_addr_i_i_i; //@line 957 "parsermodule.c"
        var $1872=_PyErr_Format($1870, __str49, $1871, $1869); //@line 957 "parsermodule.c"
        $12=0; //@line 959 "parsermodule.c"
        $retval_i_i_i432=0; //@line 959 "parsermodule.c"
        __label__ = 451; break;
      case 449: // $bb_i7_i483
        $12=1; //@line 961 "parsermodule.c"
        $retval_i_i_i432=1; //@line 959 "parsermodule.c"
        var $1873=$nch_i_i435; //@line 2126 "parsermodule.c"
        var $1874=($1873)==1; //@line 2126 "parsermodule.c"
        var $1875=$nch_i_i435; //@line 2126 "parsermodule.c"
        var $1876=($1875)==2; //@line 2126 "parsermodule.c"
        var $or_cond_i_i=($1874) | ($1876);
        var $1877=$nch_i_i435; //@line 2126 "parsermodule.c"
        var $1878=($1877)==4; //@line 2126 "parsermodule.c"
        var $or_cond3_i_i=($or_cond_i_i) | ($1878);
        if ($or_cond3_i_i) { __label__ = 450; break; } else { __label__ = 451; break; } //@line 2126 "parsermodule.c"
      case 450: // $bb3_i_i
        var $1879=$tree_addr_i_i433; //@line 2126 "parsermodule.c"
        var $1880=$1879+20; //@line 2126 "parsermodule.c"
        var $1881=HEAP[$1880]; //@line 2126 "parsermodule.c"
        var $1882=$1881; //@line 2126 "parsermodule.c"
        var $1883=_validate_terminal($1882, 1, __str130); //@line 2126 "parsermodule.c"
        var $1884=($1883)==0; //@line 2126 "parsermodule.c"
        if ($1884) { __label__ = 451; break; } else { __label__ = 452; break; } //@line 2126 "parsermodule.c"
      case 451: // $bb9_thread4_i_i
        $iftmp_142_i_i=0; //@line 2126 "parsermodule.c"
        $res_i_i436=0; //@line 2126 "parsermodule.c"
        __label__ = 465; break;
      case 452: // $bb7_i_i484
        $iftmp_142_i_i=1; //@line 2126 "parsermodule.c"
        $res_i_i436=1; //@line 2126 "parsermodule.c"
        var $1885=$nch_i_i435; //@line 2128 "parsermodule.c"
        var $1886=($1885) > 1; //@line 2128 "parsermodule.c"
        if ($1886) { __label__ = 454; break; } else { __label__ = 453; break; } //@line 2128 "parsermodule.c"
      case 453: // $validate_except_clause_exit_i_thread591
        $13=1; //@line 2137 "parsermodule.c"
        $retval_i6_i434=1; //@line 2137 "parsermodule.c"
        __label__ = 467; break;
      case 454: // $bb9_i_i485
        var $1887=$tree_addr_i_i433; //@line 2129 "parsermodule.c"
        var $1888=$1887+20; //@line 2129 "parsermodule.c"
        var $1889=HEAP[$1888]; //@line 2129 "parsermodule.c"
        var $1890=$1889+24; //@line 2129 "parsermodule.c"
        var $1891=_validate_test($1890); //@line 2129 "parsermodule.c"
        $res_i_i436=$1891; //@line 2129 "parsermodule.c"
        var $1892=($1891)!=0; //@line 2130 "parsermodule.c"
        if ($1892) { __label__ = 455; break; } else { __label__ = 465; break; } //@line 2130 "parsermodule.c"
      case 455: // $bb10_i_i486
        var $_pr_i_i=$nch_i_i435;
        var $1893=($_pr_i_i)==4; //@line 2130 "parsermodule.c"
        if ($1893) { __label__ = 456; break; } else { __label__ = 464; break; } //@line 2130 "parsermodule.c"
      case 456: // $bb11_i_i487
        var $1894=$tree_addr_i_i433; //@line 2131 "parsermodule.c"
        var $1895=$1894+20; //@line 2131 "parsermodule.c"
        var $1896=HEAP[$1895]; //@line 2131 "parsermodule.c"
        var $1897=$1896+48; //@line 2131 "parsermodule.c"
        var $1898=$1897; //@line 2131 "parsermodule.c"
        var $1899=HEAP[$1898]; //@line 2131 "parsermodule.c"
        var $1900=($1899)==1; //@line 2131 "parsermodule.c"
        var $1901=$tree_addr_i_i433; //@line 2132 "parsermodule.c"
        var $1902=$1901+20; //@line 2132 "parsermodule.c"
        var $1903=HEAP[$1902]; //@line 2132 "parsermodule.c"
        var $1904=$1903+48; //@line 2132 "parsermodule.c"
        if ($1900) { __label__ = 457; break; } else { __label__ = 458; break; } //@line 2131 "parsermodule.c"
      case 457: // $bb12_i_i488
        var $1905=_validate_terminal($1904, 1, __str112); //@line 2132 "parsermodule.c"
        $res_i_i436=$1905; //@line 2132 "parsermodule.c"
        __lastLabel__ = 457; __label__ = 459; break; //@line 2132 "parsermodule.c"
      case 458: // $bb13_i_i489
        var $1906=_validate_terminal($1904, 12, __str52); //@line 2134 "parsermodule.c"
        $res_i_i436=$1906; //@line 2134 "parsermodule.c"
        __lastLabel__ = 458; __label__ = 459; break; //@line 2134 "parsermodule.c"
      case 459: // $bb14_i_i
        var $1907=__lastLabel__ == 458 ? $1906 : ($1905);
        var $1908=($1907)==0; //@line 2135 "parsermodule.c"
        if ($1908) { __label__ = 462; break; } else { __label__ = 460; break; } //@line 2135 "parsermodule.c"
      case 460: // $bb15_i_i
        var $1909=$tree_addr_i_i433; //@line 2135 "parsermodule.c"
        var $1910=$1909+20; //@line 2135 "parsermodule.c"
        var $1911=HEAP[$1910]; //@line 2135 "parsermodule.c"
        var $1912=$1911+72; //@line 2135 "parsermodule.c"
        var $1913=_validate_test($1912); //@line 2135 "parsermodule.c"
        var $1914=($1913)==0; //@line 2135 "parsermodule.c"
        if ($1914) { __label__ = 462; break; } else { __label__ = 461; break; } //@line 2135 "parsermodule.c"
      case 461: // $bb16_i_i
        $iftmp_143_i_i=1; //@line 2135 "parsermodule.c"
        __label__ = 463; break; //@line 2135 "parsermodule.c"
      case 462: // $bb17_i_i
        $iftmp_143_i_i=0; //@line 2135 "parsermodule.c"
        __label__ = 463; break; //@line 2135 "parsermodule.c"
      case 463: // $bb18_i_i
        var $1915=$iftmp_143_i_i; //@line 2135 "parsermodule.c"
        $res_i_i436=$1915; //@line 2135 "parsermodule.c"
        __lastLabel__ = 463; __label__ = 466; break; //@line 2135 "parsermodule.c"
      case 464: // $validate_except_clause_exit_ithread_pre_split
        var $_pr590=$res_i_i436;
        __lastLabel__ = 464; __label__ = 466; break;
      case 465: // $validate_except_clause_exit_i_thread
        $13=0; //@line 2137 "parsermodule.c"
        $retval_i6_i434=0; //@line 2137 "parsermodule.c"
        __label__ = 470; break;
      case 466: // $validate_except_clause_exit_i
        var $1916=__lastLabel__ == 464 ? $_pr590 : ($1915);
        $13=$1916; //@line 2137 "parsermodule.c"
        $retval_i6_i434=$1916; //@line 2137 "parsermodule.c"
        var $1917=($1916)==0; //@line 2097 "parsermodule.c"
        if ($1917) { __label__ = 470; break; } else { __label__ = 467; break; } //@line 2097 "parsermodule.c"
      case 467: // $bb28_i490
        var $1918=$tree_addr_i444; //@line 2097 "parsermodule.c"
        var $1919=$1918+20; //@line 2097 "parsermodule.c"
        var $1920=HEAP[$1919]; //@line 2097 "parsermodule.c"
        var $1921=$pos_i; //@line 2097 "parsermodule.c"
        var $1922=($1921) + 1; //@line 2097 "parsermodule.c"
        var $1923=$1920+24*$1922; //@line 2097 "parsermodule.c"
        var $1924=_validate_terminal($1923, 11, __str54); //@line 2097 "parsermodule.c"
        var $1925=($1924)==0; //@line 2097 "parsermodule.c"
        if ($1925) { __label__ = 470; break; } else { __label__ = 468; break; } //@line 2097 "parsermodule.c"
      case 468: // $bb29_i491
        var $1926=$tree_addr_i444; //@line 2097 "parsermodule.c"
        var $1927=$1926+20; //@line 2097 "parsermodule.c"
        var $1928=HEAP[$1927]; //@line 2097 "parsermodule.c"
        var $1929=$pos_i; //@line 2097 "parsermodule.c"
        var $1930=($1929) + 2; //@line 2097 "parsermodule.c"
        var $1931=$1928+24*$1930; //@line 2097 "parsermodule.c"
        var $1932=_validate_suite($1931); //@line 2097 "parsermodule.c"
        var $1933=($1932)==0; //@line 2097 "parsermodule.c"
        if ($1933) { __label__ = 470; break; } else { __label__ = 469; break; } //@line 2097 "parsermodule.c"
      case 469: // $bb30_i492
        $iftmp_139_i=1; //@line 2097 "parsermodule.c"
        __label__ = 471; break; //@line 2097 "parsermodule.c"
      case 470: // $bb31_i493
        $iftmp_139_i=0; //@line 2097 "parsermodule.c"
        __label__ = 471; break; //@line 2097 "parsermodule.c"
      case 471: // $bb32_i494
        var $1934=$iftmp_139_i; //@line 2097 "parsermodule.c"
        $res_i447=$1934; //@line 2097 "parsermodule.c"
        var $1935=$pos_i; //@line 2100 "parsermodule.c"
        var $1936=($1935) + 3; //@line 2100 "parsermodule.c"
        $pos_i=$1936; //@line 2100 "parsermodule.c"
        __lastLabel__ = 471; __label__ = 473; break; //@line 2100 "parsermodule.c"
      case 472: // $bb33_i495thread_pre_split
        var $_pr592=$res_i447;
        __lastLabel__ = 472; __label__ = 473; break;
      case 473: // $bb33_i495
        var $1937=__lastLabel__ == 472 ? $_pr592 : ($1934);
        var $1938=($1937)==0; //@line 2096 "parsermodule.c"
        if ($1938) { __label__ = 476; break; } else { __label__ = 474; break; } //@line 2096 "parsermodule.c"
      case 474: // $bb34_i496
        var $1939=$pos_i; //@line 2096 "parsermodule.c"
        var $1940=$nch_i446; //@line 2096 "parsermodule.c"
        var $1941=($1939) >= ($1940); //@line 2096 "parsermodule.c"
        if ($1941) { __label__ = 476; break; } else { __label__ = 475; break; } //@line 2096 "parsermodule.c"
      case 475: // $bb35_i497
        var $1942=$tree_addr_i444; //@line 2096 "parsermodule.c"
        var $1943=$1942+20; //@line 2096 "parsermodule.c"
        var $1944=HEAP[$1943]; //@line 2096 "parsermodule.c"
        var $1945=$pos_i; //@line 2096 "parsermodule.c"
        var $1946=$1944+24*$1945; //@line 2096 "parsermodule.c"
        var $1947=$1946; //@line 2096 "parsermodule.c"
        var $1948=HEAP[$1947]; //@line 2096 "parsermodule.c"
        var $1949=($1948)==299; //@line 2096 "parsermodule.c"
        if ($1949) { __label__ = 447; break; } else { __label__ = 476; break; } //@line 2096 "parsermodule.c"
      case 476: // $bb36_i498
        var $1950=$res_i447; //@line 2103 "parsermodule.c"
        var $1951=($1950)!=0; //@line 2103 "parsermodule.c"
        if ($1951) { __label__ = 477; break; } else { __label__ = 496; break; } //@line 2103 "parsermodule.c"
      case 477: // $bb37_i499
        var $1952=$pos_i; //@line 2103 "parsermodule.c"
        var $1953=$nch_i446; //@line 2103 "parsermodule.c"
        var $1954=($1952) < ($1953); //@line 2103 "parsermodule.c"
        if ($1954) { __label__ = 478; break; } else { __label__ = 485; break; } //@line 2103 "parsermodule.c"
      case 478: // $bb38_i500
        var $1955=$tree_addr_i444; //@line 2103 "parsermodule.c"
        var $1956=$1955+20; //@line 2103 "parsermodule.c"
        var $1957=HEAP[$1956]; //@line 2103 "parsermodule.c"
        var $1958=$pos_i; //@line 2103 "parsermodule.c"
        var $1959=$1957+24*$1958; //@line 2103 "parsermodule.c"
        var $1960=$1959; //@line 2103 "parsermodule.c"
        var $1961=HEAP[$1960]; //@line 2103 "parsermodule.c"
        var $1962=($1961)==1; //@line 2103 "parsermodule.c"
        if ($1962) { __label__ = 479; break; } else { __label__ = 485; break; } //@line 2103 "parsermodule.c"
      case 479: // $bb39_i501
        var $1963=$tree_addr_i444; //@line 2103 "parsermodule.c"
        var $1964=$1963+20; //@line 2103 "parsermodule.c"
        var $1965=HEAP[$1964]; //@line 2103 "parsermodule.c"
        var $1966=$pos_i; //@line 2103 "parsermodule.c"
        var $1967=$1965+24*$1966; //@line 2103 "parsermodule.c"
        var $1968=$1967+4; //@line 2103 "parsermodule.c"
        var $1969=HEAP[$1968]; //@line 2103 "parsermodule.c"
        var $1970=_strcmp($1969, __str58); //@line 2103 "parsermodule.c"
        var $1971=($1970)==0; //@line 2103 "parsermodule.c"
        if ($1971) { __label__ = 480; break; } else { __label__ = 485; break; } //@line 2103 "parsermodule.c"
      case 480: // $bb40_i
        var $1972=$tree_addr_i444; //@line 2105 "parsermodule.c"
        var $1973=$1972+20; //@line 2105 "parsermodule.c"
        var $1974=HEAP[$1973]; //@line 2105 "parsermodule.c"
        var $1975=$pos_i; //@line 2105 "parsermodule.c"
        var $1976=($1975) + 1; //@line 2105 "parsermodule.c"
        var $1977=$1974+24*$1976; //@line 2105 "parsermodule.c"
        var $1978=_validate_terminal($1977, 11, __str54); //@line 2105 "parsermodule.c"
        var $1979=($1978)==0; //@line 2105 "parsermodule.c"
        if ($1979) { __label__ = 483; break; } else { __label__ = 481; break; } //@line 2105 "parsermodule.c"
      case 481: // $bb41_i
        var $1980=$tree_addr_i444; //@line 2105 "parsermodule.c"
        var $1981=$1980+20; //@line 2105 "parsermodule.c"
        var $1982=HEAP[$1981]; //@line 2105 "parsermodule.c"
        var $1983=$pos_i; //@line 2105 "parsermodule.c"
        var $1984=($1983) + 2; //@line 2105 "parsermodule.c"
        var $1985=$1982+24*$1984; //@line 2105 "parsermodule.c"
        var $1986=_validate_suite($1985); //@line 2105 "parsermodule.c"
        var $1987=($1986)==0; //@line 2105 "parsermodule.c"
        if ($1987) { __label__ = 483; break; } else { __label__ = 482; break; } //@line 2105 "parsermodule.c"
      case 482: // $bb42_i
        $iftmp_140_i=1; //@line 2105 "parsermodule.c"
        __label__ = 484; break; //@line 2105 "parsermodule.c"
      case 483: // $bb43_i
        $iftmp_140_i=0; //@line 2105 "parsermodule.c"
        __label__ = 484; break; //@line 2105 "parsermodule.c"
      case 484: // $bb44_i
        var $1988=$iftmp_140_i; //@line 2105 "parsermodule.c"
        $res_i447=$1988; //@line 2105 "parsermodule.c"
        var $1989=$pos_i; //@line 2107 "parsermodule.c"
        var $1990=($1989) + 3; //@line 2107 "parsermodule.c"
        $pos_i=$1990; //@line 2107 "parsermodule.c"
        __lastLabel__ = 484; __label__ = 486; break; //@line 2107 "parsermodule.c"
      case 485: // $bb45_ithread_pre_split
        var $_pr593=$res_i447;
        __lastLabel__ = 485; __label__ = 486; break;
      case 486: // $bb45_i
        var $1991=__lastLabel__ == 485 ? $_pr593 : ($1988);
        var $1992=($1991)!=0; //@line 2109 "parsermodule.c"
        if ($1992) { __label__ = 487; break; } else { __label__ = 496; break; } //@line 2109 "parsermodule.c"
      case 487: // $bb46_i
        var $1993=$pos_i; //@line 2109 "parsermodule.c"
        var $1994=$nch_i446; //@line 2109 "parsermodule.c"
        var $1995=($1993) < ($1994); //@line 2109 "parsermodule.c"
        if ($1995) { __label__ = 488; break; } else { __label__ = 496; break; } //@line 2109 "parsermodule.c"
      case 488: // $bb47_i
        var $1996=$tree_addr_i444; //@line 2111 "parsermodule.c"
        var $1997=$1996+20; //@line 2111 "parsermodule.c"
        var $1998=HEAP[$1997]; //@line 2111 "parsermodule.c"
        var $1999=$pos_i; //@line 2111 "parsermodule.c"
        var $2000=$1998+24*$1999; //@line 2111 "parsermodule.c"
        var $2001=_validate_terminal($2000, 1, __str132); //@line 2111 "parsermodule.c"
        var $2002=($2001)==0; //@line 2111 "parsermodule.c"
        if ($2002) { __label__ = 494; break; } else { __label__ = 489; break; } //@line 2111 "parsermodule.c"
      case 489: // $bb48_i
        var $2003=$pos_i; //@line 2111 "parsermodule.c"
        var $2004=($2003) + 3; //@line 2111 "parsermodule.c"
        var $2005=$tree_addr_i444; //@line 2111 "parsermodule.c"
        $n_addr_i8_i=$2005;
        $num_addr_i9_i=$2004;
        $name_addr_i10_i=__str134;
        var $2006=$n_addr_i8_i; //@line 975 "parsermodule.c"
        var $2007=$2006+16; //@line 975 "parsermodule.c"
        var $2008=HEAP[$2007]; //@line 975 "parsermodule.c"
        var $2009=$num_addr_i9_i; //@line 975 "parsermodule.c"
        var $2010=($2008)!=($2009); //@line 975 "parsermodule.c"
        if ($2010) { __label__ = 490; break; } else { __label__ = 491; break; } //@line 975 "parsermodule.c"
      case 490: // $validate_numnodes_exit15_i_thread
        var $2011=HEAP[_parser_error]; //@line 976 "parsermodule.c"
        var $2012=$name_addr_i10_i; //@line 976 "parsermodule.c"
        var $2013=_PyErr_Format($2011, __str50, $2012); //@line 976 "parsermodule.c"
        $11=0; //@line 978 "parsermodule.c"
        $retval_i11_i431=0; //@line 978 "parsermodule.c"
        __label__ = 494; break;
      case 491: // $bb49_i
        $11=1; //@line 980 "parsermodule.c"
        $retval_i11_i431=1; //@line 978 "parsermodule.c"
        var $2014=$tree_addr_i444; //@line 2111 "parsermodule.c"
        var $2015=$2014+20; //@line 2111 "parsermodule.c"
        var $2016=HEAP[$2015]; //@line 2111 "parsermodule.c"
        var $2017=$pos_i; //@line 2111 "parsermodule.c"
        var $2018=($2017) + 1; //@line 2111 "parsermodule.c"
        var $2019=$2016+24*$2018; //@line 2111 "parsermodule.c"
        var $2020=_validate_terminal($2019, 11, __str54); //@line 2111 "parsermodule.c"
        var $2021=($2020)==0; //@line 2111 "parsermodule.c"
        if ($2021) { __label__ = 494; break; } else { __label__ = 492; break; } //@line 2111 "parsermodule.c"
      case 492: // $bb50_i
        var $2022=$tree_addr_i444; //@line 2111 "parsermodule.c"
        var $2023=$2022+20; //@line 2111 "parsermodule.c"
        var $2024=HEAP[$2023]; //@line 2111 "parsermodule.c"
        var $2025=$pos_i; //@line 2111 "parsermodule.c"
        var $2026=($2025) + 2; //@line 2111 "parsermodule.c"
        var $2027=$2024+24*$2026; //@line 2111 "parsermodule.c"
        var $2028=_validate_suite($2027); //@line 2111 "parsermodule.c"
        var $2029=($2028)==0; //@line 2111 "parsermodule.c"
        if ($2029) { __label__ = 494; break; } else { __label__ = 493; break; } //@line 2111 "parsermodule.c"
      case 493: // $bb51_i
        $iftmp_141_i=1; //@line 2111 "parsermodule.c"
        __label__ = 495; break; //@line 2111 "parsermodule.c"
      case 494: // $bb52_i
        $iftmp_141_i=0; //@line 2111 "parsermodule.c"
        __label__ = 495; break; //@line 2111 "parsermodule.c"
      case 495: // $bb53_i
        var $2030=$iftmp_141_i; //@line 2111 "parsermodule.c"
        $res_i447=$2030; //@line 2111 "parsermodule.c"
        __label__ = 496; break; //@line 2111 "parsermodule.c"
      case 496: // $bb54_i
        var $2031=$res_i447; //@line 2116 "parsermodule.c"
        $16=$2031; //@line 2116 "parsermodule.c"
        __label__ = 497; break; //@line 2116 "parsermodule.c"
      case 497: // $validate_try_exit
        var $2032=$16; //@line 2093 "parsermodule.c"
        $retval_i445=$2032; //@line 2093 "parsermodule.c"
        var $retval56_i=$retval_i445; //@line 2093 "parsermodule.c"
        $res=$retval56_i; //@line 3193 "parsermodule.c"
        __label__ = 523; break; //@line 3193 "parsermodule.c"
      case 498: // $bb53
        var $2033=$tree_addr; //@line 3196 "parsermodule.c"
        var $2034=_validate_suite($2033); //@line 3196 "parsermodule.c"
        $res=$2034; //@line 3196 "parsermodule.c"
        __label__ = 523; break; //@line 3196 "parsermodule.c"
      case 499: // $bb54
        var $2035=$tree_addr; //@line 3202 "parsermodule.c"
        $tree_addr_i6=$2035;
        var $2036=$tree_addr_i6; //@line 1162 "parsermodule.c"
        var $2037=_validate_repeating_list($2036, 327, (FUNCTION_TABLE_OFFSET + 10), __str63); //@line 1162 "parsermodule.c"
        $73=$2037; //@line 1162 "parsermodule.c"
        var $2038=$73; //@line 1162 "parsermodule.c"
        $retval_i7=$2038; //@line 1162 "parsermodule.c"
        var $retval1_i8=$retval_i7; //@line 1162 "parsermodule.c"
        $res=$retval1_i8; //@line 3202 "parsermodule.c"
        __label__ = 523; break; //@line 3202 "parsermodule.c"
      case 500: // $bb55
        var $2039=$tree_addr; //@line 3205 "parsermodule.c"
        var $2040=_validate_yield_expr($2039); //@line 3205 "parsermodule.c"
        $res=$2040; //@line 3205 "parsermodule.c"
        __label__ = 523; break; //@line 3205 "parsermodule.c"
      case 501: // $bb56
        var $2041=$tree_addr; //@line 3208 "parsermodule.c"
        $tree_addr_i3=$2041;
        var $2042=$tree_addr_i3; //@line 1170 "parsermodule.c"
        var $2043=_validate_repeating_list($2042, 338, (FUNCTION_TABLE_OFFSET + 10), __str64); //@line 1170 "parsermodule.c"
        $74=$2043; //@line 1170 "parsermodule.c"
        var $2044=$74; //@line 1170 "parsermodule.c"
        $retval_i4=$2044; //@line 1170 "parsermodule.c"
        var $retval1_i5=$retval_i4; //@line 1170 "parsermodule.c"
        $res=$retval1_i5; //@line 3208 "parsermodule.c"
        __label__ = 523; break; //@line 3208 "parsermodule.c"
      case 502: // $bb57
        var $2045=$tree_addr; //@line 3211 "parsermodule.c"
        var $2046=_validate_test($2045); //@line 3211 "parsermodule.c"
        $res=$2046; //@line 3211 "parsermodule.c"
        __label__ = 523; break; //@line 3211 "parsermodule.c"
      case 503: // $bb58
        var $2047=$tree_addr; //@line 3214 "parsermodule.c"
        var $2048=_validate_and_test($2047); //@line 3214 "parsermodule.c"
        $res=$2048; //@line 3214 "parsermodule.c"
        __label__ = 523; break; //@line 3214 "parsermodule.c"
      case 504: // $bb59
        var $2049=$tree_addr; //@line 3217 "parsermodule.c"
        var $2050=_validate_not_test($2049); //@line 3217 "parsermodule.c"
        $res=$2050; //@line 3217 "parsermodule.c"
        __label__ = 523; break; //@line 3217 "parsermodule.c"
      case 505: // $bb60
        var $2051=$tree_addr; //@line 3220 "parsermodule.c"
        var $2052=_validate_comparison($2051); //@line 3220 "parsermodule.c"
        $res=$2052; //@line 3220 "parsermodule.c"
        __label__ = 523; break; //@line 3220 "parsermodule.c"
      case 506: // $bb61
        var $2053=$tree_addr; //@line 3223 "parsermodule.c"
        $tree_addr_i1=$2053;
        var $2054=$tree_addr_i1; //@line 2968 "parsermodule.c"
        var $2055=_validate_repeating_list($2054, 326, (FUNCTION_TABLE_OFFSET + 12), __str171); //@line 2968 "parsermodule.c"
        $75=$2055; //@line 2968 "parsermodule.c"
        var $2056=$75; //@line 2968 "parsermodule.c"
        $retval_i2=$2056; //@line 2968 "parsermodule.c"
        var $retval1_i=$retval_i2; //@line 2968 "parsermodule.c"
        $res=$retval1_i; //@line 3223 "parsermodule.c"
        __label__ = 523; break; //@line 3223 "parsermodule.c"
      case 507: // $bb62
        var $2057=$tree_addr; //@line 3226 "parsermodule.c"
        var $2058=_validate_comp_op($2057); //@line 3226 "parsermodule.c"
        $res=$2058; //@line 3226 "parsermodule.c"
        __label__ = 523; break; //@line 3226 "parsermodule.c"
      case 508: // $bb63
        var $2059=$tree_addr; //@line 3229 "parsermodule.c"
        var $2060=_validate_expr($2059); //@line 3229 "parsermodule.c"
        $res=$2060; //@line 3229 "parsermodule.c"
        __label__ = 523; break; //@line 3229 "parsermodule.c"
      case 509: // $bb64
        var $2061=$tree_addr; //@line 3232 "parsermodule.c"
        var $2062=_validate_xor_expr($2061); //@line 3232 "parsermodule.c"
        $res=$2062; //@line 3232 "parsermodule.c"
        __label__ = 523; break; //@line 3232 "parsermodule.c"
      case 510: // $bb65
        var $2063=$tree_addr; //@line 3235 "parsermodule.c"
        var $2064=_validate_and_expr($2063); //@line 3235 "parsermodule.c"
        $res=$2064; //@line 3235 "parsermodule.c"
        __label__ = 523; break; //@line 3235 "parsermodule.c"
      case 511: // $bb66
        var $2065=$tree_addr; //@line 3238 "parsermodule.c"
        $tree_addr_i=$2065;
        var $2066=$tree_addr_i; //@line 2366 "parsermodule.c"
        $n_addr_i583=$2066;
        $t_addr_i=313;
        var $2067=$n_addr_i583; //@line 956 "parsermodule.c"
        var $2068=$2067; //@line 956 "parsermodule.c"
        var $2069=HEAP[$2068]; //@line 956 "parsermodule.c"
        var $2070=($2069); //@line 956 "parsermodule.c"
        var $2071=$t_addr_i; //@line 956 "parsermodule.c"
        var $2072=($2070)!=($2071); //@line 956 "parsermodule.c"
        if ($2072) { __label__ = 512; break; } else { __label__ = 513; break; } //@line 956 "parsermodule.c"
      case 512: // $validate_ntype_exit_thread
        var $2073=$n_addr_i583; //@line 957 "parsermodule.c"
        var $2074=$2073; //@line 957 "parsermodule.c"
        var $2075=HEAP[$2074]; //@line 957 "parsermodule.c"
        var $2076=($2075); //@line 957 "parsermodule.c"
        var $2077=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $2078=$t_addr_i; //@line 957 "parsermodule.c"
        var $2079=_PyErr_Format($2077, __str49, $2078, $2076); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i584=0; //@line 959 "parsermodule.c"
        __label__ = 515; break;
      case 513: // $bb_i
        $0=1; //@line 961 "parsermodule.c"
        $retval_i584=1; //@line 959 "parsermodule.c"
        var $2080=$tree_addr_i; //@line 2366 "parsermodule.c"
        var $2081=_validate_chain_two_ops($2080, (FUNCTION_TABLE_OFFSET + 18), 34, 35); //@line 2366 "parsermodule.c"
        var $2082=($2081)==0; //@line 2366 "parsermodule.c"
        if ($2082) { __label__ = 515; break; } else { __label__ = 514; break; } //@line 2366 "parsermodule.c"
      case 514: // $bb1_i
        $iftmp_166_i=1; //@line 2366 "parsermodule.c"
        __label__ = 516; break; //@line 2366 "parsermodule.c"
      case 515: // $bb2_i
        $iftmp_166_i=0; //@line 2366 "parsermodule.c"
        __label__ = 516; break; //@line 2366 "parsermodule.c"
      case 516: // $validate_shift_expr_exit
        var $2083=$iftmp_166_i; //@line 2366 "parsermodule.c"
        $76=$2083; //@line 2366 "parsermodule.c"
        var $2084=$76; //@line 2366 "parsermodule.c"
        $retval_i=$2084; //@line 2366 "parsermodule.c"
        var $retval4_i=$retval_i; //@line 2366 "parsermodule.c"
        $res=$retval4_i; //@line 3238 "parsermodule.c"
        __label__ = 523; break; //@line 3238 "parsermodule.c"
      case 517: // $bb67
        var $2085=$tree_addr; //@line 3241 "parsermodule.c"
        var $2086=_validate_arith_expr($2085); //@line 3241 "parsermodule.c"
        $res=$2086; //@line 3241 "parsermodule.c"
        __label__ = 523; break; //@line 3241 "parsermodule.c"
      case 518: // $bb68
        var $2087=$tree_addr; //@line 3244 "parsermodule.c"
        var $2088=_validate_term($2087); //@line 3244 "parsermodule.c"
        $res=$2088; //@line 3244 "parsermodule.c"
        __label__ = 523; break; //@line 3244 "parsermodule.c"
      case 519: // $bb69
        var $2089=$tree_addr; //@line 3247 "parsermodule.c"
        var $2090=_validate_factor($2089); //@line 3247 "parsermodule.c"
        $res=$2090; //@line 3247 "parsermodule.c"
        __label__ = 523; break; //@line 3247 "parsermodule.c"
      case 520: // $bb70
        var $2091=$tree_addr; //@line 3250 "parsermodule.c"
        var $2092=_validate_power($2091); //@line 3250 "parsermodule.c"
        $res=$2092; //@line 3250 "parsermodule.c"
        __label__ = 523; break; //@line 3250 "parsermodule.c"
      case 521: // $bb71
        var $2093=$tree_addr; //@line 3253 "parsermodule.c"
        var $2094=_validate_atom($2093); //@line 3253 "parsermodule.c"
        $res=$2094; //@line 3253 "parsermodule.c"
        __label__ = 523; break; //@line 3253 "parsermodule.c"
      case 522: // $bb72
        $message_addr_i=__str181;
        var $2095=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $2096=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($2095, $2096); //@line 531 "parsermodule.c"
        $res=0; //@line 3259 "parsermodule.c"
        __label__ = 523; break; //@line 3259 "parsermodule.c"
      case 523: // $bb73
        var $2097=$next; //@line 3262 "parsermodule.c"
        $tree_addr=$2097; //@line 3262 "parsermodule.c"
        var $_pr594=$res;
        __lastLabel__ = 523; __label__ = 524; break; //@line 3262 "parsermodule.c"
      case 524: // $bb74
        var $2098=__lastLabel__ == 523 ? $_pr594 : (1);
        var $2099=($2098)==0; //@line 3078 "parsermodule.c"
        if ($2099) { __label__ = 526; break; } else { __label__ = 525; break; } //@line 3078 "parsermodule.c"
      case 525: // $bb75
        var $2100=$tree_addr; //@line 3078 "parsermodule.c"
        var $2101=($2100)!=0; //@line 3078 "parsermodule.c"
        if ($2101) { __label__ = 1; break; } else { __label__ = 526; break; } //@line 3078 "parsermodule.c"
      case 526: // $bb76
        var $2102=$res; //@line 3264 "parsermodule.c"
        $77=$2102; //@line 3264 "parsermodule.c"
        var $2103=$77; //@line 3264 "parsermodule.c"
        $retval=$2103; //@line 3264 "parsermodule.c"
        var $retval77=$retval; //@line 3264 "parsermodule.c"
        ;
        return $retval77; //@line 3264 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _validate_file_input($tree) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr_i;
        var $n_addr_i;
        var $t_addr_i;
        var $retval_i;
        var $0;
        var $tree_addr;
        var $retval;
        var $1;
        var $iftmp_213;
        var $j;
        var $nch;
        var $res;
        $tree_addr=$tree;
        var $2=$tree_addr; //@line 3287 "parsermodule.c"
        var $3=$2+16; //@line 3287 "parsermodule.c"
        var $4=HEAP[$3]; //@line 3287 "parsermodule.c"
        var $5=($4) - 1; //@line 3287 "parsermodule.c"
        $nch=$5; //@line 3287 "parsermodule.c"
        var $6=$nch; //@line 3289 "parsermodule.c"
        var $7=($6) < 0; //@line 3289 "parsermodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 3289 "parsermodule.c"
      case 1: // $bb
        var $8=$tree_addr; //@line 3289 "parsermodule.c"
        var $9=$8+20; //@line 3289 "parsermodule.c"
        var $10=HEAP[$9]; //@line 3289 "parsermodule.c"
        var $11=$nch; //@line 3289 "parsermodule.c"
        var $12=$10+24*$11; //@line 3289 "parsermodule.c"
        $n_addr_i=$12;
        $t_addr_i=0;
        var $13=$n_addr_i; //@line 956 "parsermodule.c"
        var $14=$13; //@line 956 "parsermodule.c"
        var $15=HEAP[$14]; //@line 956 "parsermodule.c"
        var $16=($15); //@line 956 "parsermodule.c"
        var $17=$t_addr_i; //@line 956 "parsermodule.c"
        var $18=($16)!=($17); //@line 956 "parsermodule.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 956 "parsermodule.c"
      case 2: // $validate_ntype_exit_thread
        var $19=$n_addr_i; //@line 957 "parsermodule.c"
        var $20=$19; //@line 957 "parsermodule.c"
        var $21=HEAP[$20]; //@line 957 "parsermodule.c"
        var $22=($21); //@line 957 "parsermodule.c"
        var $23=HEAP[_parser_error]; //@line 957 "parsermodule.c"
        var $24=$t_addr_i; //@line 957 "parsermodule.c"
        var $25=_PyErr_Format($23, __str49, $24, $22); //@line 957 "parsermodule.c"
        $0=0; //@line 959 "parsermodule.c"
        $retval_i=0; //@line 959 "parsermodule.c"
        __label__ = 4; break;
      case 3: // $bb1
        $0=1; //@line 961 "parsermodule.c"
        $retval_i=1; //@line 959 "parsermodule.c"
        $iftmp_213=1; //@line 3289 "parsermodule.c"
        __label__ = 5; break; //@line 3289 "parsermodule.c"
      case 4: // $bb2
        $iftmp_213=0; //@line 3289 "parsermodule.c"
        __label__ = 5; break; //@line 3289 "parsermodule.c"
      case 5: // $bb3
        var $26=$iftmp_213; //@line 3289 "parsermodule.c"
        $res=$26; //@line 3289 "parsermodule.c"
        $j=0; //@line 3291 "parsermodule.c"
        __lastLabel__ = 5; __label__ = 10; break; //@line 3291 "parsermodule.c"
      case 6: // $bb4
        var $27=$tree_addr; //@line 3292 "parsermodule.c"
        var $28=$27+20; //@line 3292 "parsermodule.c"
        var $29=HEAP[$28]; //@line 3292 "parsermodule.c"
        var $30=$j; //@line 3292 "parsermodule.c"
        var $31=$29+24*$30; //@line 3292 "parsermodule.c"
        var $32=$31; //@line 3292 "parsermodule.c"
        var $33=HEAP[$32]; //@line 3292 "parsermodule.c"
        var $34=($33)==267; //@line 3292 "parsermodule.c"
        var $35=$tree_addr; //@line 3293 "parsermodule.c"
        var $36=$35+20; //@line 3293 "parsermodule.c"
        var $37=HEAP[$36]; //@line 3293 "parsermodule.c"
        var $38=$j; //@line 3293 "parsermodule.c"
        var $39=$37+24*$38; //@line 3293 "parsermodule.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3292 "parsermodule.c"
      case 7: // $bb5
        var $40=_validate_stmt($39); //@line 3293 "parsermodule.c"
        $res=$40; //@line 3293 "parsermodule.c"
        __label__ = 9; break; //@line 3293 "parsermodule.c"
      case 8: // $bb6
        var $41=_validate_terminal($39, 4, 0); //@line 3295 "parsermodule.c"
        $res=$41; //@line 3295 "parsermodule.c"
        __label__ = 9; break; //@line 3295 "parsermodule.c"
      case 9: // $bb7
        var $42=$j; //@line 3291 "parsermodule.c"
        var $43=($42) + 1; //@line 3291 "parsermodule.c"
        $j=$43; //@line 3291 "parsermodule.c"
        var $_pr=$res;
        __lastLabel__ = 9; __label__ = 10; break; //@line 3291 "parsermodule.c"
      case 10: // $bb8
        var $44=__lastLabel__ == 9 ? $_pr : ($26);
        var $45=($44)==0; //@line 3291 "parsermodule.c"
        if ($45) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 3291 "parsermodule.c"
      case 11: // $bb9
        var $46=$j; //@line 3291 "parsermodule.c"
        var $47=$nch; //@line 3291 "parsermodule.c"
        var $48=($46) < ($47); //@line 3291 "parsermodule.c"
        if ($48) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 3291 "parsermodule.c"
      case 12: // $bb10
        var $49=$res; //@line 3301 "parsermodule.c"
        var $50=($49)==0; //@line 3301 "parsermodule.c"
        if ($50) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 3301 "parsermodule.c"
      case 13: // $bb11
        var $51=_PyErr_Occurred(); //@line 3301 "parsermodule.c"
        var $52=($51)==0; //@line 3301 "parsermodule.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3301 "parsermodule.c"
      case 14: // $bb12
        $message_addr_i=__str183;
        var $53=HEAP[_parser_error]; //@line 531 "parsermodule.c"
        var $54=$message_addr_i; //@line 531 "parsermodule.c"
        _PyErr_SetString($53, $54); //@line 531 "parsermodule.c"
        __label__ = 15; break; //@line 3302 "parsermodule.c"
      case 15: // $bb13
        var $55=$res; //@line 3304 "parsermodule.c"
        $1=$55; //@line 3304 "parsermodule.c"
        var $56=$1; //@line 3304 "parsermodule.c"
        $retval=$56; //@line 3304 "parsermodule.c"
        var $retval14=$retval; //@line 3304 "parsermodule.c"
        ;
        return $retval14; //@line 3304 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parser__pickler($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result;
        var $st=__stackBase__;
        var $empty_dict;
        var $newargs;
        var $tuple;
        $self_addr=$self;
        $args_addr=$args;
        $result=0; //@line 3328 "parsermodule.c"
        HEAP[$st]=0; //@line 3329 "parsermodule.c"
        $empty_dict=0; //@line 3330 "parsermodule.c"
        var $1=$args_addr; //@line 3332 "parsermodule.c"
        var $2=_PyArg_ParseTuple($1, __str185, _PyST_Type, $st); //@line 3332 "parsermodule.c"
        var $3=($2)!=0; //@line 3332 "parsermodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 3332 "parsermodule.c"
      case 1: // $bb
        var $4=_PyDict_New(); //@line 3336 "parsermodule.c"
        $empty_dict=$4; //@line 3336 "parsermodule.c"
        var $5=$empty_dict; //@line 3336 "parsermodule.c"
        var $6=($5)==0; //@line 3336 "parsermodule.c"
        if ($6) { __label__ = 13; break; } else { __label__ = 2; break; } //@line 3336 "parsermodule.c"
      case 2: // $bb1
        var $7=HEAP[$st]; //@line 3338 "parsermodule.c"
        var $8=_Py_BuildValue(__str186, $7, 1); //@line 3338 "parsermodule.c"
        $newargs=$8; //@line 3338 "parsermodule.c"
        var $9=$newargs; //@line 3338 "parsermodule.c"
        var $10=($9)==0; //@line 3338 "parsermodule.c"
        if ($10) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 3338 "parsermodule.c"
      case 3: // $bb2
        var $11=$newargs; //@line 3340 "parsermodule.c"
        var $12=$empty_dict; //@line 3340 "parsermodule.c"
        var $13=_parser_st2tuple(0, $11, $12); //@line 3340 "parsermodule.c"
        $tuple=$13; //@line 3340 "parsermodule.c"
        var $14=$tuple; //@line 3341 "parsermodule.c"
        var $15=($14)!=0; //@line 3341 "parsermodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 3341 "parsermodule.c"
      case 4: // $bb3
        var $16=HEAP[_pickle_constructor]; //@line 3342 "parsermodule.c"
        var $17=$tuple; //@line 3342 "parsermodule.c"
        var $18=_Py_BuildValue(__str187, $16, $17); //@line 3342 "parsermodule.c"
        $result=$18; //@line 3342 "parsermodule.c"
        var $19=$tuple; //@line 3343 "parsermodule.c"
        var $20=$19; //@line 3343 "parsermodule.c"
        var $21=HEAP[$20]; //@line 3343 "parsermodule.c"
        var $22=($21) - 1; //@line 3343 "parsermodule.c"
        var $23=$tuple; //@line 3343 "parsermodule.c"
        var $24=$23; //@line 3343 "parsermodule.c"
        HEAP[$24]=$22; //@line 3343 "parsermodule.c"
        var $25=$tuple; //@line 3343 "parsermodule.c"
        var $26=$25; //@line 3343 "parsermodule.c"
        var $27=HEAP[$26]; //@line 3343 "parsermodule.c"
        var $28=($27)==0; //@line 3343 "parsermodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3343 "parsermodule.c"
      case 5: // $bb4
        var $29=$tuple; //@line 3343 "parsermodule.c"
        var $30=$29+4; //@line 3343 "parsermodule.c"
        var $31=HEAP[$30]; //@line 3343 "parsermodule.c"
        var $32=$31+24; //@line 3343 "parsermodule.c"
        var $33=HEAP[$32]; //@line 3343 "parsermodule.c"
        var $34=$tuple; //@line 3343 "parsermodule.c"
        FUNCTION_TABLE[$33]($34); //@line 3343 "parsermodule.c"
        __label__ = 6; break; //@line 3343 "parsermodule.c"
      case 6: // $bb5
        var $35=$empty_dict; //@line 3345 "parsermodule.c"
        var $36=$35; //@line 3345 "parsermodule.c"
        var $37=HEAP[$36]; //@line 3345 "parsermodule.c"
        var $38=($37) - 1; //@line 3345 "parsermodule.c"
        var $39=$empty_dict; //@line 3345 "parsermodule.c"
        var $40=$39; //@line 3345 "parsermodule.c"
        HEAP[$40]=$38; //@line 3345 "parsermodule.c"
        var $41=$empty_dict; //@line 3345 "parsermodule.c"
        var $42=$41; //@line 3345 "parsermodule.c"
        var $43=HEAP[$42]; //@line 3345 "parsermodule.c"
        var $44=($43)==0; //@line 3345 "parsermodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3345 "parsermodule.c"
      case 7: // $bb6
        var $45=$empty_dict; //@line 3345 "parsermodule.c"
        var $46=$45+4; //@line 3345 "parsermodule.c"
        var $47=HEAP[$46]; //@line 3345 "parsermodule.c"
        var $48=$47+24; //@line 3345 "parsermodule.c"
        var $49=HEAP[$48]; //@line 3345 "parsermodule.c"
        var $50=$empty_dict; //@line 3345 "parsermodule.c"
        FUNCTION_TABLE[$49]($50); //@line 3345 "parsermodule.c"
        __label__ = 8; break; //@line 3345 "parsermodule.c"
      case 8: // $bb7
        var $51=$newargs; //@line 3346 "parsermodule.c"
        var $52=$51; //@line 3346 "parsermodule.c"
        var $53=HEAP[$52]; //@line 3346 "parsermodule.c"
        var $54=($53) - 1; //@line 3346 "parsermodule.c"
        var $55=$newargs; //@line 3346 "parsermodule.c"
        var $56=$55; //@line 3346 "parsermodule.c"
        HEAP[$56]=$54; //@line 3346 "parsermodule.c"
        var $57=$newargs; //@line 3346 "parsermodule.c"
        var $58=$57; //@line 3346 "parsermodule.c"
        var $59=HEAP[$58]; //@line 3346 "parsermodule.c"
        var $60=($59)==0; //@line 3346 "parsermodule.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3346 "parsermodule.c"
      case 9: // $bb8
        var $61=$newargs; //@line 3346 "parsermodule.c"
        var $62=$61+4; //@line 3346 "parsermodule.c"
        var $63=HEAP[$62]; //@line 3346 "parsermodule.c"
        var $64=$63+24; //@line 3346 "parsermodule.c"
        var $65=HEAP[$64]; //@line 3346 "parsermodule.c"
        var $66=$newargs; //@line 3346 "parsermodule.c"
        FUNCTION_TABLE[$65]($66); //@line 3346 "parsermodule.c"
        __label__ = 10; break; //@line 3348 "parsermodule.c"
      case 10: // $finally
        var $_pr=$empty_dict;
        var $67=($_pr)!=0; //@line 3349 "parsermodule.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 11: // $bb9
        var $68=$empty_dict; //@line 3349 "parsermodule.c"
        var $69=$68; //@line 3349 "parsermodule.c"
        var $70=HEAP[$69]; //@line 3349 "parsermodule.c"
        var $71=($70) - 1; //@line 3349 "parsermodule.c"
        var $72=$empty_dict; //@line 3349 "parsermodule.c"
        var $73=$72; //@line 3349 "parsermodule.c"
        HEAP[$73]=$71; //@line 3349 "parsermodule.c"
        var $74=$empty_dict; //@line 3349 "parsermodule.c"
        var $75=$74; //@line 3349 "parsermodule.c"
        var $76=HEAP[$75]; //@line 3349 "parsermodule.c"
        var $77=($76)==0; //@line 3349 "parsermodule.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3349 "parsermodule.c"
      case 12: // $bb10
        var $78=$empty_dict; //@line 3349 "parsermodule.c"
        var $79=$78+4; //@line 3349 "parsermodule.c"
        var $80=HEAP[$79]; //@line 3349 "parsermodule.c"
        var $81=$80+24; //@line 3349 "parsermodule.c"
        var $82=HEAP[$81]; //@line 3349 "parsermodule.c"
        var $83=$empty_dict; //@line 3349 "parsermodule.c"
        FUNCTION_TABLE[$82]($83); //@line 3349 "parsermodule.c"
        __label__ = 13; break; //@line 3349 "parsermodule.c"
      case 13: // $bb11
        var $84=$result; //@line 3351 "parsermodule.c"
        $0=$84; //@line 3351 "parsermodule.c"
        var $85=$0; //@line 3351 "parsermodule.c"
        $retval=$85; //@line 3351 "parsermodule.c"
        var $retval12=$retval; //@line 3351 "parsermodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3351 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initparser() {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module;
        var $copyreg;
        var $func;
        var $pickler;
        var $res;
        HEAP[_PyST_Type+4]=_PyType_Type; //@line 3406 "parsermodule.c"
        var $0=_Py_InitModule4(__str209, _parser_functions, 0, 0, 1013); //@line 3407 "parsermodule.c"
        $module=$0; //@line 3407 "parsermodule.c"
        var $1=$module; //@line 3408 "parsermodule.c"
        var $2=($1)==0; //@line 3408 "parsermodule.c"
        if ($2) { __label__ = 24; break; } else { __label__ = 1; break; } //@line 3408 "parsermodule.c"
      case 1: // $bb
        var $3=HEAP[_parser_error]; //@line 3411 "parsermodule.c"
        var $4=($3)==0; //@line 3411 "parsermodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 3411 "parsermodule.c"
      case 2: // $bb2
        var $5=_PyErr_NewException(__str210, 0, 0); //@line 3412 "parsermodule.c"
        HEAP[_parser_error]=$5; //@line 3412 "parsermodule.c"
        var $6=($5)==0; //@line 3414 "parsermodule.c"
        if ($6) { __label__ = 24; break; } else { __label__ = 3; break; } //@line 3414 "parsermodule.c"
      case 3: // $bb3
        var $7=HEAP[_parser_error]; //@line 3423 "parsermodule.c"
        var $8=$7; //@line 3423 "parsermodule.c"
        var $9=HEAP[$8]; //@line 3423 "parsermodule.c"
        var $10=($9) + 1; //@line 3423 "parsermodule.c"
        var $11=$7; //@line 3423 "parsermodule.c"
        HEAP[$11]=$10; //@line 3423 "parsermodule.c"
        var $12=HEAP[_parser_error]; //@line 3424 "parsermodule.c"
        var $13=$module; //@line 3424 "parsermodule.c"
        var $14=_PyModule_AddObject($13, __str211, $12); //@line 3424 "parsermodule.c"
        var $15=($14)!=0; //@line 3424 "parsermodule.c"
        if ($15) { __label__ = 24; break; } else { __label__ = 4; break; } //@line 3424 "parsermodule.c"
      case 4: // $bb4
        var $16=HEAP[_PyST_Type]; //@line 3427 "parsermodule.c"
        var $17=($16) + 1; //@line 3427 "parsermodule.c"
        HEAP[_PyST_Type]=$17; //@line 3427 "parsermodule.c"
        var $18=$module; //@line 3428 "parsermodule.c"
        var $19=_PyModule_AddObject($18, __str212, _PyST_Type); //@line 3428 "parsermodule.c"
        var $20=HEAP[_PyST_Type]; //@line 3429 "parsermodule.c"
        var $21=($20) + 1; //@line 3429 "parsermodule.c"
        HEAP[_PyST_Type]=$21; //@line 3429 "parsermodule.c"
        var $22=$module; //@line 3430 "parsermodule.c"
        var $23=_PyModule_AddObject($22, __str213, _PyST_Type); //@line 3430 "parsermodule.c"
        var $24=$module; //@line 3432 "parsermodule.c"
        var $25=_PyModule_AddStringConstant($24, __str214, _parser_copyright_string); //@line 3432 "parsermodule.c"
        var $26=$module; //@line 3434 "parsermodule.c"
        var $27=_PyModule_AddStringConstant($26, __str215, _parser_doc_string); //@line 3434 "parsermodule.c"
        var $28=$module; //@line 3436 "parsermodule.c"
        var $29=_PyModule_AddStringConstant($28, __str216, _parser_version_string); //@line 3436 "parsermodule.c"
        var $30=_PyImport_ImportModuleNoBlock(__str217); //@line 3443 "parsermodule.c"
        $copyreg=$30; //@line 3443 "parsermodule.c"
        var $31=$copyreg; //@line 3444 "parsermodule.c"
        var $32=($31)!=0; //@line 3444 "parsermodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 24; break; } //@line 3444 "parsermodule.c"
      case 5: // $bb5
        var $33=$copyreg; //@line 3447 "parsermodule.c"
        var $34=_PyObject_GetAttrString($33, __str218); //@line 3447 "parsermodule.c"
        $func=$34; //@line 3447 "parsermodule.c"
        var $35=$module; //@line 3448 "parsermodule.c"
        var $36=_PyObject_GetAttrString($35, __str202); //@line 3448 "parsermodule.c"
        HEAP[_pickle_constructor]=$36; //@line 3448 "parsermodule.c"
        var $37=$module; //@line 3449 "parsermodule.c"
        var $38=_PyObject_GetAttrString($37, __str207); //@line 3449 "parsermodule.c"
        $pickler=$38; //@line 3449 "parsermodule.c"
        var $39=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $40=($39)!=0; //@line 3450 "parsermodule.c"
        if ($40) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3450 "parsermodule.c"
      case 6: // $bb6
        var $41=HEAP[_pickle_constructor]; //@line 3450 "parsermodule.c"
        var $42=$41; //@line 3450 "parsermodule.c"
        var $43=HEAP[$42]; //@line 3450 "parsermodule.c"
        var $44=($43) + 1; //@line 3450 "parsermodule.c"
        var $45=$41; //@line 3450 "parsermodule.c"
        HEAP[$45]=$44; //@line 3450 "parsermodule.c"
        __label__ = 7; break; //@line 3450 "parsermodule.c"
      case 7: // $bb7
        var $46=$func; //@line 3451 "parsermodule.c"
        var $47=($46)!=0; //@line 3451 "parsermodule.c"
        var $48=HEAP[_pickle_constructor]; //@line 3451 "parsermodule.c"
        var $49=($48)!=0; //@line 3451 "parsermodule.c"
        var $or_cond=($47) & ($49);
        if ($or_cond) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 13; break; } //@line 3451 "parsermodule.c"
      case 8: // $bb9
        var $50=$pickler; //@line 3451 "parsermodule.c"
        var $51=($50)!=0; //@line 3451 "parsermodule.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 3451 "parsermodule.c"
      case 9: // $bb10
        var $52=HEAP[_pickle_constructor]; //@line 3455 "parsermodule.c"
        var $53=$func; //@line 3455 "parsermodule.c"
        var $54=$pickler; //@line 3455 "parsermodule.c"
        var $55=_PyObject_CallFunctionObjArgs($53, _PyST_Type, $54, $52, 0); //@line 3455 "parsermodule.c"
        $res=$55; //@line 3455 "parsermodule.c"
        var $56=$res; //@line 3457 "parsermodule.c"
        var $57=($56)!=0; //@line 3457 "parsermodule.c"
        if ($57) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3457 "parsermodule.c"
      case 10: // $bb11
        var $58=$res; //@line 3457 "parsermodule.c"
        var $59=$58; //@line 3457 "parsermodule.c"
        var $60=HEAP[$59]; //@line 3457 "parsermodule.c"
        var $61=($60) - 1; //@line 3457 "parsermodule.c"
        var $62=$res; //@line 3457 "parsermodule.c"
        var $63=$62; //@line 3457 "parsermodule.c"
        HEAP[$63]=$61; //@line 3457 "parsermodule.c"
        var $64=$res; //@line 3457 "parsermodule.c"
        var $65=$64; //@line 3457 "parsermodule.c"
        var $66=HEAP[$65]; //@line 3457 "parsermodule.c"
        var $67=($66)==0; //@line 3457 "parsermodule.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3457 "parsermodule.c"
      case 11: // $bb12
        var $68=$res; //@line 3457 "parsermodule.c"
        var $69=$68+4; //@line 3457 "parsermodule.c"
        var $70=HEAP[$69]; //@line 3457 "parsermodule.c"
        var $71=$70+24; //@line 3457 "parsermodule.c"
        var $72=HEAP[$71]; //@line 3457 "parsermodule.c"
        var $73=$res; //@line 3457 "parsermodule.c"
        FUNCTION_TABLE[$72]($73); //@line 3457 "parsermodule.c"
        __label__ = 12; break; //@line 3457 "parsermodule.c"
      case 12: // $bb13thread_pre_split
        var $_pr=$func;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb13
        var $74=__lastLabel__ == 12 ? $_pr : ($46);
        var $75=($74)!=0; //@line 3459 "parsermodule.c"
        if ($75) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 3459 "parsermodule.c"
      case 14: // $bb14
        var $76=$func; //@line 3459 "parsermodule.c"
        var $77=$76; //@line 3459 "parsermodule.c"
        var $78=HEAP[$77]; //@line 3459 "parsermodule.c"
        var $79=($78) - 1; //@line 3459 "parsermodule.c"
        var $80=$func; //@line 3459 "parsermodule.c"
        var $81=$80; //@line 3459 "parsermodule.c"
        HEAP[$81]=$79; //@line 3459 "parsermodule.c"
        var $82=$func; //@line 3459 "parsermodule.c"
        var $83=$82; //@line 3459 "parsermodule.c"
        var $84=HEAP[$83]; //@line 3459 "parsermodule.c"
        var $85=($84)==0; //@line 3459 "parsermodule.c"
        if ($85) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3459 "parsermodule.c"
      case 15: // $bb15
        var $86=$func; //@line 3459 "parsermodule.c"
        var $87=$86+4; //@line 3459 "parsermodule.c"
        var $88=HEAP[$87]; //@line 3459 "parsermodule.c"
        var $89=$88+24; //@line 3459 "parsermodule.c"
        var $90=HEAP[$89]; //@line 3459 "parsermodule.c"
        var $91=$func; //@line 3459 "parsermodule.c"
        FUNCTION_TABLE[$90]($91); //@line 3459 "parsermodule.c"
        __label__ = 16; break; //@line 3459 "parsermodule.c"
      case 16: // $bb16
        var $92=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $93=($92)!=0; //@line 3460 "parsermodule.c"
        if ($93) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 3460 "parsermodule.c"
      case 17: // $bb17
        var $94=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $95=$94; //@line 3460 "parsermodule.c"
        var $96=HEAP[$95]; //@line 3460 "parsermodule.c"
        var $97=($96) - 1; //@line 3460 "parsermodule.c"
        var $98=$94; //@line 3460 "parsermodule.c"
        HEAP[$98]=$97; //@line 3460 "parsermodule.c"
        var $99=$94; //@line 3460 "parsermodule.c"
        var $100=HEAP[$99]; //@line 3460 "parsermodule.c"
        var $101=($100)==0; //@line 3460 "parsermodule.c"
        if ($101) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3460 "parsermodule.c"
      case 18: // $bb18
        var $102=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        var $103=$102+4; //@line 3460 "parsermodule.c"
        var $104=HEAP[$103]; //@line 3460 "parsermodule.c"
        var $105=$104+24; //@line 3460 "parsermodule.c"
        var $106=HEAP[$105]; //@line 3460 "parsermodule.c"
        var $107=HEAP[_pickle_constructor]; //@line 3460 "parsermodule.c"
        FUNCTION_TABLE[$106]($107); //@line 3460 "parsermodule.c"
        __label__ = 19; break; //@line 3460 "parsermodule.c"
      case 19: // $bb19
        var $108=$pickler; //@line 3461 "parsermodule.c"
        var $109=($108)!=0; //@line 3461 "parsermodule.c"
        if ($109) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 3461 "parsermodule.c"
      case 20: // $bb20
        var $110=$pickler; //@line 3461 "parsermodule.c"
        var $111=$110; //@line 3461 "parsermodule.c"
        var $112=HEAP[$111]; //@line 3461 "parsermodule.c"
        var $113=($112) - 1; //@line 3461 "parsermodule.c"
        var $114=$pickler; //@line 3461 "parsermodule.c"
        var $115=$114; //@line 3461 "parsermodule.c"
        HEAP[$115]=$113; //@line 3461 "parsermodule.c"
        var $116=$pickler; //@line 3461 "parsermodule.c"
        var $117=$116; //@line 3461 "parsermodule.c"
        var $118=HEAP[$117]; //@line 3461 "parsermodule.c"
        var $119=($118)==0; //@line 3461 "parsermodule.c"
        if ($119) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 3461 "parsermodule.c"
      case 21: // $bb21
        var $120=$pickler; //@line 3461 "parsermodule.c"
        var $121=$120+4; //@line 3461 "parsermodule.c"
        var $122=HEAP[$121]; //@line 3461 "parsermodule.c"
        var $123=$122+24; //@line 3461 "parsermodule.c"
        var $124=HEAP[$123]; //@line 3461 "parsermodule.c"
        var $125=$pickler; //@line 3461 "parsermodule.c"
        FUNCTION_TABLE[$124]($125); //@line 3461 "parsermodule.c"
        __label__ = 22; break; //@line 3461 "parsermodule.c"
      case 22: // $bb22
        var $126=$copyreg; //@line 3462 "parsermodule.c"
        var $127=$126; //@line 3462 "parsermodule.c"
        var $128=HEAP[$127]; //@line 3462 "parsermodule.c"
        var $129=($128) - 1; //@line 3462 "parsermodule.c"
        var $130=$copyreg; //@line 3462 "parsermodule.c"
        var $131=$130; //@line 3462 "parsermodule.c"
        HEAP[$131]=$129; //@line 3462 "parsermodule.c"
        var $132=$copyreg; //@line 3462 "parsermodule.c"
        var $133=$132; //@line 3462 "parsermodule.c"
        var $134=HEAP[$133]; //@line 3462 "parsermodule.c"
        var $135=($134)==0; //@line 3462 "parsermodule.c"
        if ($135) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 3462 "parsermodule.c"
      case 23: // $bb23
        var $136=$copyreg; //@line 3462 "parsermodule.c"
        var $137=$136+4; //@line 3462 "parsermodule.c"
        var $138=HEAP[$137]; //@line 3462 "parsermodule.c"
        var $139=$138+24; //@line 3462 "parsermodule.c"
        var $140=HEAP[$139]; //@line 3462 "parsermodule.c"
        var $141=$copyreg; //@line 3462 "parsermodule.c"
        FUNCTION_TABLE[$140]($141); //@line 3462 "parsermodule.c"
        __label__ = 24; break; //@line 3462 "parsermodule.c"
      case 24: // $return
        ;
        return; //@line 3409 "parsermodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initparser"] = _initparser;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyTuple_New,0,_PyTuple_SetItem,0,_PyList_New,0,_PyList_SetItem,0,_validate_test,0,_validate_expr,0,_validate_old_test,0,_validate_fpdef,0,_validate_arith_expr,0,_validate_term,0,_validate_subscript,0,_parser_free,0,_parser_getattr,0,_parser_compare,0,_parser_compilest,0,_parser_isexpr,0,_parser_issuite,0,_parser_st2list,0,_parser_st2tuple,0,_parser_ast2tuple,0,_parser_ast2list,0,_parser_compileast,0,_parser_expr,0,_parser_suite,0,_parser_tuple2ast,0,_parser_tuple2st,0,_parser__pickler,0]);

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
HEAP[_PyST_Type+12]=__str1;
HEAP[_PyST_Type+24]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyST_Type+32]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyST_Type+40]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyST_Type+88]=__str2;
HEAP[_keywords_9402]=__str4;
HEAP[_keywords_9402+4]=__str5;
HEAP[_keywords_9402+8]=__str6;
HEAP[_keywords_9452]=__str4;
HEAP[_keywords_9452+4]=__str5;
HEAP[_keywords_9452+8]=__str6;
HEAP[_keywords_9503]=__str4;
HEAP[_keywords_9503+4]=__str14;
HEAP[_keywords_9551]=__str4;
HEAP[_keywords_9577]=__str4;
HEAP[_parser_methods]=__str21;
HEAP[_parser_methods+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_methods+12]=__str22;
HEAP[_parser_methods+16]=__str23;
HEAP[_parser_methods+20]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_methods+28]=__str24;
HEAP[_parser_methods+32]=__str25;
HEAP[_parser_methods+36]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_methods+44]=__str26;
HEAP[_parser_methods+48]=__str27;
HEAP[_parser_methods+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_methods+60]=__str28;
HEAP[_parser_methods+64]=__str29;
HEAP[_parser_methods+68]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_methods+76]=__str30;
HEAP[_keywords_9618]=__str31;
HEAP[_keywords_9672]=__str35;
HEAP[_parser_functions]=__str188;
HEAP[_parser_functions+4]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_parser_functions+12]=__str189;
HEAP[_parser_functions+16]=__str190;
HEAP[_parser_functions+20]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_parser_functions+28]=__str191;
HEAP[_parser_functions+32]=__str192;
HEAP[_parser_functions+36]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_parser_functions+44]=__str193;
HEAP[_parser_functions+48]=__str194;
HEAP[_parser_functions+52]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_parser_functions+60]=__str193;
HEAP[_parser_functions+64]=__str195;
HEAP[_parser_functions+68]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_parser_functions+76]=__str196;
HEAP[_parser_functions+80]=__str23;
HEAP[_parser_functions+84]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_parser_functions+92]=__str197;
HEAP[_parser_functions+96]=__str25;
HEAP[_parser_functions+100]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_parser_functions+108]=__str198;
HEAP[_parser_functions+112]=__str62;
HEAP[_parser_functions+116]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_parser_functions+124]=__str199;
HEAP[_parser_functions+128]=__str200;
HEAP[_parser_functions+132]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+140]=__str201;
HEAP[_parser_functions+144]=__str202;
HEAP[_parser_functions+148]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+156]=__str201;
HEAP[_parser_functions+160]=__str203;
HEAP[_parser_functions+164]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_parser_functions+172]=__str189;
HEAP[_parser_functions+176]=__str204;
HEAP[_parser_functions+180]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_parser_functions+188]=__str191;
HEAP[_parser_functions+192]=__str205;
HEAP[_parser_functions+196]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_parser_functions+204]=__str201;
HEAP[_parser_functions+208]=__str206;
HEAP[_parser_functions+212]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_parser_functions+220]=__str201;
HEAP[_parser_functions+224]=__str207;
HEAP[_parser_functions+228]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_parser_functions+236]=__str208;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

