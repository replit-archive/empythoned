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
  
var $2___SIZE = 64; // %2
  
var $3___SIZE = 16; // %3
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyStructSequence___SIZE = 16; // %struct.PyStructSequence
  
var $struct_PyStructSequence_Desc___SIZE = 16; // %struct.PyStructSequence_Desc
  
var $struct_PyStructSequence_Field___SIZE = 8; // %struct.PyStructSequence_Field
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_group___SIZE = 16; // %struct.group
  
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var _struct_group_type_fields;
var _struct_group__doc__;
var _struct_group_type_desc;
var __str8;
var _StructGrpType;
var __Py_NoneStruct;
var _PyExc_KeyError;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var _grp_methods;
var _grp__doc__;
var __str17;
var _initialized;
var __str18;























  function _mkgrent($p) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $setIndex=__stackBase__+12;
        var $v=__stackBase__+16;
        var $w=__stackBase__+20;
        var $member=__stackBase__+24;
        var $x=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$p_addr]=$p;
        HEAP[$setIndex]=0; //@line 38 "grpmodule.c"
        var $1=_PyStructSequence_New(_StructGrpType); //@line 39 "grpmodule.c"
        HEAP[$v]=$1; //@line 39 "grpmodule.c"
        var $2=HEAP[$v]; //@line 42 "grpmodule.c"
        var $3=($2)==0; //@line 42 "grpmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 42 "grpmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 43 "grpmodule.c"
        __label__ = 29; break; //@line 43 "grpmodule.c"
      case 2: // $bb1
        var $4=_PyList_New(0); //@line 45 "grpmodule.c"
        HEAP[$w]=$4; //@line 45 "grpmodule.c"
        var $5=HEAP[$w]; //@line 45 "grpmodule.c"
        var $6=($5)==0; //@line 45 "grpmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 45 "grpmodule.c"
      case 3: // $bb2
        var $7=HEAP[$v]; //@line 46 "grpmodule.c"
        var $8=(($7)&4294967295); //@line 46 "grpmodule.c"
        var $9=HEAP[$8]; //@line 46 "grpmodule.c"
        var $10=((($9) - 1)&4294967295); //@line 46 "grpmodule.c"
        var $11=HEAP[$v]; //@line 46 "grpmodule.c"
        var $12=(($11)&4294967295); //@line 46 "grpmodule.c"
        HEAP[$12]=$10; //@line 46 "grpmodule.c"
        var $13=HEAP[$v]; //@line 46 "grpmodule.c"
        var $14=(($13)&4294967295); //@line 46 "grpmodule.c"
        var $15=HEAP[$14]; //@line 46 "grpmodule.c"
        var $16=((($15))|0)==0; //@line 46 "grpmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 46 "grpmodule.c"
      case 4: // $bb3
        var $17=HEAP[$v]; //@line 46 "grpmodule.c"
        var $18=(($17+4)&4294967295); //@line 46 "grpmodule.c"
        var $19=HEAP[$18]; //@line 46 "grpmodule.c"
        var $20=(($19+24)&4294967295); //@line 46 "grpmodule.c"
        var $21=HEAP[$20]; //@line 46 "grpmodule.c"
        var $22=HEAP[$v]; //@line 46 "grpmodule.c"
        FUNCTION_TABLE[$21]($22); //@line 46 "grpmodule.c"
        __label__ = 5; break; //@line 46 "grpmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 47 "grpmodule.c"
        __label__ = 29; break; //@line 47 "grpmodule.c"
      case 6: // $bb5
        var $23=HEAP[$p_addr]; //@line 49 "grpmodule.c"
        var $24=(($23+12)&4294967295); //@line 49 "grpmodule.c"
        var $25=HEAP[$24]; //@line 49 "grpmodule.c"
        HEAP[$member]=$25; //@line 49 "grpmodule.c"
        __label__ = 20; break; //@line 49 "grpmodule.c"
      case 7: // $bb6
        var $26=HEAP[$member]; //@line 50 "grpmodule.c"
        var $27=HEAP[$26]; //@line 50 "grpmodule.c"
        var $28=_PyString_FromString($27); //@line 50 "grpmodule.c"
        HEAP[$x]=$28; //@line 50 "grpmodule.c"
        var $29=HEAP[$x]; //@line 51 "grpmodule.c"
        var $30=($29)==0; //@line 51 "grpmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 51 "grpmodule.c"
      case 8: // $bb7
        var $31=HEAP[$w]; //@line 51 "grpmodule.c"
        var $32=HEAP[$x]; //@line 51 "grpmodule.c"
        var $33=_PyList_Append($31, $32); //@line 51 "grpmodule.c"
        var $34=((($33))|0)!=0; //@line 51 "grpmodule.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 51 "grpmodule.c"
      case 9: // $bb8
        var $35=HEAP[$x]; //@line 52 "grpmodule.c"
        var $36=($35)!=0; //@line 52 "grpmodule.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 52 "grpmodule.c"
      case 10: // $bb9
        var $37=HEAP[$x]; //@line 52 "grpmodule.c"
        var $38=(($37)&4294967295); //@line 52 "grpmodule.c"
        var $39=HEAP[$38]; //@line 52 "grpmodule.c"
        var $40=((($39) - 1)&4294967295); //@line 52 "grpmodule.c"
        var $41=HEAP[$x]; //@line 52 "grpmodule.c"
        var $42=(($41)&4294967295); //@line 52 "grpmodule.c"
        HEAP[$42]=$40; //@line 52 "grpmodule.c"
        var $43=HEAP[$x]; //@line 52 "grpmodule.c"
        var $44=(($43)&4294967295); //@line 52 "grpmodule.c"
        var $45=HEAP[$44]; //@line 52 "grpmodule.c"
        var $46=((($45))|0)==0; //@line 52 "grpmodule.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 52 "grpmodule.c"
      case 11: // $bb10
        var $47=HEAP[$x]; //@line 52 "grpmodule.c"
        var $48=(($47+4)&4294967295); //@line 52 "grpmodule.c"
        var $49=HEAP[$48]; //@line 52 "grpmodule.c"
        var $50=(($49+24)&4294967295); //@line 52 "grpmodule.c"
        var $51=HEAP[$50]; //@line 52 "grpmodule.c"
        var $52=HEAP[$x]; //@line 52 "grpmodule.c"
        FUNCTION_TABLE[$51]($52); //@line 52 "grpmodule.c"
        __label__ = 12; break; //@line 52 "grpmodule.c"
      case 12: // $bb11
        var $53=HEAP[$w]; //@line 53 "grpmodule.c"
        var $54=(($53)&4294967295); //@line 53 "grpmodule.c"
        var $55=HEAP[$54]; //@line 53 "grpmodule.c"
        var $56=((($55) - 1)&4294967295); //@line 53 "grpmodule.c"
        var $57=HEAP[$w]; //@line 53 "grpmodule.c"
        var $58=(($57)&4294967295); //@line 53 "grpmodule.c"
        HEAP[$58]=$56; //@line 53 "grpmodule.c"
        var $59=HEAP[$w]; //@line 53 "grpmodule.c"
        var $60=(($59)&4294967295); //@line 53 "grpmodule.c"
        var $61=HEAP[$60]; //@line 53 "grpmodule.c"
        var $62=((($61))|0)==0; //@line 53 "grpmodule.c"
        if ($62) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 53 "grpmodule.c"
      case 13: // $bb12
        var $63=HEAP[$w]; //@line 53 "grpmodule.c"
        var $64=(($63+4)&4294967295); //@line 53 "grpmodule.c"
        var $65=HEAP[$64]; //@line 53 "grpmodule.c"
        var $66=(($65+24)&4294967295); //@line 53 "grpmodule.c"
        var $67=HEAP[$66]; //@line 53 "grpmodule.c"
        var $68=HEAP[$w]; //@line 53 "grpmodule.c"
        FUNCTION_TABLE[$67]($68); //@line 53 "grpmodule.c"
        __label__ = 14; break; //@line 53 "grpmodule.c"
      case 14: // $bb13
        var $69=HEAP[$v]; //@line 54 "grpmodule.c"
        var $70=(($69)&4294967295); //@line 54 "grpmodule.c"
        var $71=HEAP[$70]; //@line 54 "grpmodule.c"
        var $72=((($71) - 1)&4294967295); //@line 54 "grpmodule.c"
        var $73=HEAP[$v]; //@line 54 "grpmodule.c"
        var $74=(($73)&4294967295); //@line 54 "grpmodule.c"
        HEAP[$74]=$72; //@line 54 "grpmodule.c"
        var $75=HEAP[$v]; //@line 54 "grpmodule.c"
        var $76=(($75)&4294967295); //@line 54 "grpmodule.c"
        var $77=HEAP[$76]; //@line 54 "grpmodule.c"
        var $78=((($77))|0)==0; //@line 54 "grpmodule.c"
        if ($78) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 54 "grpmodule.c"
      case 15: // $bb14
        var $79=HEAP[$v]; //@line 54 "grpmodule.c"
        var $80=(($79+4)&4294967295); //@line 54 "grpmodule.c"
        var $81=HEAP[$80]; //@line 54 "grpmodule.c"
        var $82=(($81+24)&4294967295); //@line 54 "grpmodule.c"
        var $83=HEAP[$82]; //@line 54 "grpmodule.c"
        var $84=HEAP[$v]; //@line 54 "grpmodule.c"
        FUNCTION_TABLE[$83]($84); //@line 54 "grpmodule.c"
        __label__ = 16; break; //@line 54 "grpmodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 55 "grpmodule.c"
        __label__ = 29; break; //@line 55 "grpmodule.c"
      case 17: // $bb16
        var $85=HEAP[$x]; //@line 57 "grpmodule.c"
        var $86=(($85)&4294967295); //@line 57 "grpmodule.c"
        var $87=HEAP[$86]; //@line 57 "grpmodule.c"
        var $88=((($87) - 1)&4294967295); //@line 57 "grpmodule.c"
        var $89=HEAP[$x]; //@line 57 "grpmodule.c"
        var $90=(($89)&4294967295); //@line 57 "grpmodule.c"
        HEAP[$90]=$88; //@line 57 "grpmodule.c"
        var $91=HEAP[$x]; //@line 57 "grpmodule.c"
        var $92=(($91)&4294967295); //@line 57 "grpmodule.c"
        var $93=HEAP[$92]; //@line 57 "grpmodule.c"
        var $94=((($93))|0)==0; //@line 57 "grpmodule.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 57 "grpmodule.c"
      case 18: // $bb17
        var $95=HEAP[$x]; //@line 57 "grpmodule.c"
        var $96=(($95+4)&4294967295); //@line 57 "grpmodule.c"
        var $97=HEAP[$96]; //@line 57 "grpmodule.c"
        var $98=(($97+24)&4294967295); //@line 57 "grpmodule.c"
        var $99=HEAP[$98]; //@line 57 "grpmodule.c"
        var $100=HEAP[$x]; //@line 57 "grpmodule.c"
        FUNCTION_TABLE[$99]($100); //@line 57 "grpmodule.c"
        __label__ = 19; break; //@line 57 "grpmodule.c"
      case 19: // $bb18
        var $101=HEAP[$member]; //@line 49 "grpmodule.c"
        var $102=(($101+4)&4294967295); //@line 49 "grpmodule.c"
        HEAP[$member]=$102; //@line 49 "grpmodule.c"
        __label__ = 20; break; //@line 49 "grpmodule.c"
      case 20: // $bb19
        var $103=HEAP[$member]; //@line 49 "grpmodule.c"
        var $104=HEAP[$103]; //@line 49 "grpmodule.c"
        var $105=($104)!=0; //@line 49 "grpmodule.c"
        if ($105) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 49 "grpmodule.c"
      case 21: // $bb20
        var $106=HEAP[$v]; //@line 61 "grpmodule.c"
        var $107=$106; //@line 61 "grpmodule.c"
        var $108=HEAP[$setIndex]; //@line 61 "grpmodule.c"
        var $109=HEAP[$p_addr]; //@line 61 "grpmodule.c"
        var $110=(($109)&4294967295); //@line 61 "grpmodule.c"
        var $111=HEAP[$110]; //@line 61 "grpmodule.c"
        var $112=_PyString_FromString($111); //@line 61 "grpmodule.c"
        var $113=(($107+12)&4294967295); //@line 61 "grpmodule.c"
        var $114=(($113+$108*4)&4294967295); //@line 61 "grpmodule.c"
        HEAP[$114]=$112; //@line 61 "grpmodule.c"
        var $115=HEAP[$setIndex]; //@line 61 "grpmodule.c"
        var $116=((($115) + 1)&4294967295); //@line 61 "grpmodule.c"
        HEAP[$setIndex]=$116; //@line 61 "grpmodule.c"
        var $117=HEAP[$p_addr]; //@line 66 "grpmodule.c"
        var $118=(($117+4)&4294967295); //@line 66 "grpmodule.c"
        var $119=HEAP[$118]; //@line 66 "grpmodule.c"
        var $120=($119)!=0; //@line 66 "grpmodule.c"
        if ($120) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 66 "grpmodule.c"
      case 22: // $bb21
        var $121=HEAP[$v]; //@line 67 "grpmodule.c"
        var $122=$121; //@line 67 "grpmodule.c"
        var $123=HEAP[$setIndex]; //@line 67 "grpmodule.c"
        var $124=HEAP[$p_addr]; //@line 67 "grpmodule.c"
        var $125=(($124+4)&4294967295); //@line 67 "grpmodule.c"
        var $126=HEAP[$125]; //@line 67 "grpmodule.c"
        var $127=_PyString_FromString($126); //@line 67 "grpmodule.c"
        var $128=(($122+12)&4294967295); //@line 67 "grpmodule.c"
        var $129=(($128+$123*4)&4294967295); //@line 67 "grpmodule.c"
        HEAP[$129]=$127; //@line 67 "grpmodule.c"
        var $130=HEAP[$setIndex]; //@line 67 "grpmodule.c"
        var $131=((($130) + 1)&4294967295); //@line 67 "grpmodule.c"
        HEAP[$setIndex]=$131; //@line 67 "grpmodule.c"
        __label__ = 24; break; //@line 67 "grpmodule.c"
      case 23: // $bb22
        var $132=HEAP[$v]; //@line 69 "grpmodule.c"
        var $133=$132; //@line 69 "grpmodule.c"
        var $134=HEAP[$setIndex]; //@line 69 "grpmodule.c"
        var $135=(($133+12)&4294967295); //@line 69 "grpmodule.c"
        var $136=(($135+$134*4)&4294967295); //@line 69 "grpmodule.c"
        HEAP[$136]=__Py_NoneStruct; //@line 69 "grpmodule.c"
        var $137=HEAP[$setIndex]; //@line 69 "grpmodule.c"
        var $138=((($137) + 1)&4294967295); //@line 69 "grpmodule.c"
        HEAP[$setIndex]=$138; //@line 69 "grpmodule.c"
        var $139=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 70 "grpmodule.c"
        var $140=((($139) + 1)&4294967295); //@line 70 "grpmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$140; //@line 70 "grpmodule.c"
        __label__ = 24; break; //@line 70 "grpmodule.c"
      case 24: // $bb23
        var $141=HEAP[$v]; //@line 73 "grpmodule.c"
        var $142=$141; //@line 73 "grpmodule.c"
        var $143=HEAP[$setIndex]; //@line 73 "grpmodule.c"
        var $144=HEAP[$p_addr]; //@line 73 "grpmodule.c"
        var $145=(($144+8)&4294967295); //@line 73 "grpmodule.c"
        var $146=HEAP[$145]; //@line 73 "grpmodule.c"
        var $147=_PyInt_FromLong($146); //@line 73 "grpmodule.c"
        var $148=(($142+12)&4294967295); //@line 73 "grpmodule.c"
        var $149=(($148+$143*4)&4294967295); //@line 73 "grpmodule.c"
        HEAP[$149]=$147; //@line 73 "grpmodule.c"
        var $150=HEAP[$setIndex]; //@line 73 "grpmodule.c"
        var $151=((($150) + 1)&4294967295); //@line 73 "grpmodule.c"
        HEAP[$setIndex]=$151; //@line 73 "grpmodule.c"
        var $152=HEAP[$v]; //@line 74 "grpmodule.c"
        var $153=$152; //@line 74 "grpmodule.c"
        var $154=HEAP[$setIndex]; //@line 74 "grpmodule.c"
        var $155=(($153+12)&4294967295); //@line 74 "grpmodule.c"
        var $156=(($155+$154*4)&4294967295); //@line 74 "grpmodule.c"
        var $157=HEAP[$w]; //@line 74 "grpmodule.c"
        HEAP[$156]=$157; //@line 74 "grpmodule.c"
        var $158=HEAP[$setIndex]; //@line 74 "grpmodule.c"
        var $159=((($158) + 1)&4294967295); //@line 74 "grpmodule.c"
        HEAP[$setIndex]=$159; //@line 74 "grpmodule.c"
        var $160=_PyErr_Occurred(); //@line 77 "grpmodule.c"
        var $161=($160)!=0; //@line 77 "grpmodule.c"
        if ($161) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 77 "grpmodule.c"
      case 25: // $bb24
        var $162=HEAP[$v]; //@line 78 "grpmodule.c"
        var $163=(($162)&4294967295); //@line 78 "grpmodule.c"
        var $164=HEAP[$163]; //@line 78 "grpmodule.c"
        var $165=((($164) - 1)&4294967295); //@line 78 "grpmodule.c"
        var $166=HEAP[$v]; //@line 78 "grpmodule.c"
        var $167=(($166)&4294967295); //@line 78 "grpmodule.c"
        HEAP[$167]=$165; //@line 78 "grpmodule.c"
        var $168=HEAP[$v]; //@line 78 "grpmodule.c"
        var $169=(($168)&4294967295); //@line 78 "grpmodule.c"
        var $170=HEAP[$169]; //@line 78 "grpmodule.c"
        var $171=((($170))|0)==0; //@line 78 "grpmodule.c"
        if ($171) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 78 "grpmodule.c"
      case 26: // $bb25
        var $172=HEAP[$v]; //@line 78 "grpmodule.c"
        var $173=(($172+4)&4294967295); //@line 78 "grpmodule.c"
        var $174=HEAP[$173]; //@line 78 "grpmodule.c"
        var $175=(($174+24)&4294967295); //@line 78 "grpmodule.c"
        var $176=HEAP[$175]; //@line 78 "grpmodule.c"
        var $177=HEAP[$v]; //@line 78 "grpmodule.c"
        FUNCTION_TABLE[$176]($177); //@line 78 "grpmodule.c"
        __label__ = 27; break; //@line 78 "grpmodule.c"
      case 27: // $bb26
        HEAP[$0]=0; //@line 79 "grpmodule.c"
        __label__ = 29; break; //@line 79 "grpmodule.c"
      case 28: // $bb27
        var $178=HEAP[$v]; //@line 82 "grpmodule.c"
        HEAP[$0]=$178; //@line 82 "grpmodule.c"
        __label__ = 29; break; //@line 82 "grpmodule.c"
      case 29: // $bb28
        var $179=HEAP[$0]; //@line 43 "grpmodule.c"
        HEAP[$retval]=$179; //@line 43 "grpmodule.c"
        __label__ = 30; break; //@line 43 "grpmodule.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 43 "grpmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 43 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrgid($self, $pyo_id) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $pyo_id_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $py_int_id=__stackBase__+16;
        var $gid=__stackBase__+20;
        var $p=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$pyo_id_addr]=$pyo_id;
        var $1=HEAP[$pyo_id_addr]; //@line 92 "grpmodule.c"
        var $2=_PyNumber_Int($1); //@line 92 "grpmodule.c"
        HEAP[$py_int_id]=$2; //@line 92 "grpmodule.c"
        var $3=HEAP[$py_int_id]; //@line 93 "grpmodule.c"
        var $4=($3)==0; //@line 93 "grpmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "grpmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 94 "grpmodule.c"
        __label__ = 7; break; //@line 94 "grpmodule.c"
      case 2: // $bb1
        var $5=HEAP[$py_int_id]; //@line 95 "grpmodule.c"
        var $6=$5; //@line 95 "grpmodule.c"
        var $7=(($6+8)&4294967295); //@line 95 "grpmodule.c"
        var $8=HEAP[$7]; //@line 95 "grpmodule.c"
        HEAP[$gid]=$8; //@line 95 "grpmodule.c"
        var $9=HEAP[$py_int_id]; //@line 96 "grpmodule.c"
        var $10=(($9)&4294967295); //@line 96 "grpmodule.c"
        var $11=HEAP[$10]; //@line 96 "grpmodule.c"
        var $12=((($11) - 1)&4294967295); //@line 96 "grpmodule.c"
        var $13=HEAP[$py_int_id]; //@line 96 "grpmodule.c"
        var $14=(($13)&4294967295); //@line 96 "grpmodule.c"
        HEAP[$14]=$12; //@line 96 "grpmodule.c"
        var $15=HEAP[$py_int_id]; //@line 96 "grpmodule.c"
        var $16=(($15)&4294967295); //@line 96 "grpmodule.c"
        var $17=HEAP[$16]; //@line 96 "grpmodule.c"
        var $18=((($17))|0)==0; //@line 96 "grpmodule.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 96 "grpmodule.c"
      case 3: // $bb2
        var $19=HEAP[$py_int_id]; //@line 96 "grpmodule.c"
        var $20=(($19+4)&4294967295); //@line 96 "grpmodule.c"
        var $21=HEAP[$20]; //@line 96 "grpmodule.c"
        var $22=(($21+24)&4294967295); //@line 96 "grpmodule.c"
        var $23=HEAP[$22]; //@line 96 "grpmodule.c"
        var $24=HEAP[$py_int_id]; //@line 96 "grpmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 96 "grpmodule.c"
        __label__ = 4; break; //@line 96 "grpmodule.c"
      case 4: // $bb3
        var $25=HEAP[$gid]; //@line 98 "grpmodule.c"
        var $26=_getgrgid($25); //@line 98 "grpmodule.c"
        HEAP[$p]=$26; //@line 98 "grpmodule.c"
        var $27=HEAP[$p]; //@line 98 "grpmodule.c"
        var $28=($27)==0; //@line 98 "grpmodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 98 "grpmodule.c"
      case 5: // $bb4
        var $29=HEAP[_PyExc_KeyError]; //@line 99 "grpmodule.c"
        var $30=HEAP[$gid]; //@line 99 "grpmodule.c"
        var $31=_PyErr_Format($29, ((__str9)&4294967295), $30); //@line 99 "grpmodule.c"
        HEAP[$0]=0; //@line 100 "grpmodule.c"
        __label__ = 7; break; //@line 100 "grpmodule.c"
      case 6: // $bb5
        var $32=HEAP[$p]; //@line 102 "grpmodule.c"
        var $33=_mkgrent($32); //@line 102 "grpmodule.c"
        HEAP[$0]=$33; //@line 102 "grpmodule.c"
        __label__ = 7; break; //@line 102 "grpmodule.c"
      case 7: // $bb6
        var $34=HEAP[$0]; //@line 94 "grpmodule.c"
        HEAP[$retval]=$34; //@line 94 "grpmodule.c"
        __label__ = 8; break; //@line 94 "grpmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 94 "grpmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 94 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrnam($self, $pyo_name) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $pyo_name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $py_str_name=__stackBase__+16;
        var $name=__stackBase__+20;
        var $p=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$pyo_name_addr]=$pyo_name;
        var $1=HEAP[$pyo_name_addr]; //@line 112 "grpmodule.c"
        var $2=_PyObject_Str($1); //@line 112 "grpmodule.c"
        HEAP[$py_str_name]=$2; //@line 112 "grpmodule.c"
        var $3=HEAP[$py_str_name]; //@line 113 "grpmodule.c"
        var $4=($3)==0; //@line 113 "grpmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 113 "grpmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 114 "grpmodule.c"
        __label__ = 9; break; //@line 114 "grpmodule.c"
      case 2: // $bb1
        var $5=HEAP[$py_str_name]; //@line 115 "grpmodule.c"
        var $6=$5; //@line 115 "grpmodule.c"
        var $7=(($6+20)&4294967295); //@line 115 "grpmodule.c"
        var $8=(($7)&4294967295); //@line 115 "grpmodule.c"
        HEAP[$name]=$8; //@line 115 "grpmodule.c"
        var $9=HEAP[$name]; //@line 117 "grpmodule.c"
        var $10=_getgrnam($9); //@line 117 "grpmodule.c"
        HEAP[$p]=$10; //@line 117 "grpmodule.c"
        var $11=HEAP[$p]; //@line 117 "grpmodule.c"
        var $12=($11)==0; //@line 117 "grpmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 117 "grpmodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_KeyError]; //@line 118 "grpmodule.c"
        var $14=HEAP[$name]; //@line 118 "grpmodule.c"
        var $15=_PyErr_Format($13, ((__str10)&4294967295), $14); //@line 118 "grpmodule.c"
        var $16=HEAP[$py_str_name]; //@line 119 "grpmodule.c"
        var $17=(($16)&4294967295); //@line 119 "grpmodule.c"
        var $18=HEAP[$17]; //@line 119 "grpmodule.c"
        var $19=((($18) - 1)&4294967295); //@line 119 "grpmodule.c"
        var $20=HEAP[$py_str_name]; //@line 119 "grpmodule.c"
        var $21=(($20)&4294967295); //@line 119 "grpmodule.c"
        HEAP[$21]=$19; //@line 119 "grpmodule.c"
        var $22=HEAP[$py_str_name]; //@line 119 "grpmodule.c"
        var $23=(($22)&4294967295); //@line 119 "grpmodule.c"
        var $24=HEAP[$23]; //@line 119 "grpmodule.c"
        var $25=((($24))|0)==0; //@line 119 "grpmodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 119 "grpmodule.c"
      case 4: // $bb3
        var $26=HEAP[$py_str_name]; //@line 119 "grpmodule.c"
        var $27=(($26+4)&4294967295); //@line 119 "grpmodule.c"
        var $28=HEAP[$27]; //@line 119 "grpmodule.c"
        var $29=(($28+24)&4294967295); //@line 119 "grpmodule.c"
        var $30=HEAP[$29]; //@line 119 "grpmodule.c"
        var $31=HEAP[$py_str_name]; //@line 119 "grpmodule.c"
        FUNCTION_TABLE[$30]($31); //@line 119 "grpmodule.c"
        __label__ = 5; break; //@line 119 "grpmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 120 "grpmodule.c"
        __label__ = 9; break; //@line 120 "grpmodule.c"
      case 6: // $bb5
        var $32=HEAP[$py_str_name]; //@line 123 "grpmodule.c"
        var $33=(($32)&4294967295); //@line 123 "grpmodule.c"
        var $34=HEAP[$33]; //@line 123 "grpmodule.c"
        var $35=((($34) - 1)&4294967295); //@line 123 "grpmodule.c"
        var $36=HEAP[$py_str_name]; //@line 123 "grpmodule.c"
        var $37=(($36)&4294967295); //@line 123 "grpmodule.c"
        HEAP[$37]=$35; //@line 123 "grpmodule.c"
        var $38=HEAP[$py_str_name]; //@line 123 "grpmodule.c"
        var $39=(($38)&4294967295); //@line 123 "grpmodule.c"
        var $40=HEAP[$39]; //@line 123 "grpmodule.c"
        var $41=((($40))|0)==0; //@line 123 "grpmodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 123 "grpmodule.c"
      case 7: // $bb6
        var $42=HEAP[$py_str_name]; //@line 123 "grpmodule.c"
        var $43=(($42+4)&4294967295); //@line 123 "grpmodule.c"
        var $44=HEAP[$43]; //@line 123 "grpmodule.c"
        var $45=(($44+24)&4294967295); //@line 123 "grpmodule.c"
        var $46=HEAP[$45]; //@line 123 "grpmodule.c"
        var $47=HEAP[$py_str_name]; //@line 123 "grpmodule.c"
        FUNCTION_TABLE[$46]($47); //@line 123 "grpmodule.c"
        __label__ = 8; break; //@line 123 "grpmodule.c"
      case 8: // $bb7
        var $48=HEAP[$p]; //@line 124 "grpmodule.c"
        var $49=_mkgrent($48); //@line 124 "grpmodule.c"
        HEAP[$0]=$49; //@line 124 "grpmodule.c"
        __label__ = 9; break; //@line 124 "grpmodule.c"
      case 9: // $bb8
        var $50=HEAP[$0]; //@line 114 "grpmodule.c"
        HEAP[$retval]=$50; //@line 114 "grpmodule.c"
        __label__ = 10; break; //@line 114 "grpmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 114 "grpmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 114 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _grp_getgrall($self, $ignore) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $ignore_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $d=__stackBase__+16;
        var $p=__stackBase__+20;
        var $v=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$ignore_addr]=$ignore;
        var $1=_PyList_New(0); //@line 133 "grpmodule.c"
        HEAP[$d]=$1; //@line 133 "grpmodule.c"
        var $2=HEAP[$d]; //@line 133 "grpmodule.c"
        var $3=($2)==0; //@line 133 "grpmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 133 "grpmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 134 "grpmodule.c"
        __label__ = 15; break; //@line 134 "grpmodule.c"
      case 2: // $bb1
        _setgrent(); //@line 135 "grpmodule.c"
        __label__ = 13; break; //@line 135 "grpmodule.c"
      case 3: // $bb2
        var $4=HEAP[$p]; //@line 137 "grpmodule.c"
        var $5=_mkgrent($4); //@line 137 "grpmodule.c"
        HEAP[$v]=$5; //@line 137 "grpmodule.c"
        var $6=HEAP[$v]; //@line 138 "grpmodule.c"
        var $7=($6)==0; //@line 138 "grpmodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 138 "grpmodule.c"
      case 4: // $bb3
        var $8=HEAP[$d]; //@line 138 "grpmodule.c"
        var $9=HEAP[$v]; //@line 138 "grpmodule.c"
        var $10=_PyList_Append($8, $9); //@line 138 "grpmodule.c"
        var $11=((($10))|0)!=0; //@line 138 "grpmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 138 "grpmodule.c"
      case 5: // $bb4
        var $12=HEAP[$v]; //@line 139 "grpmodule.c"
        var $13=($12)!=0; //@line 139 "grpmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 139 "grpmodule.c"
      case 6: // $bb5
        var $14=HEAP[$v]; //@line 139 "grpmodule.c"
        var $15=(($14)&4294967295); //@line 139 "grpmodule.c"
        var $16=HEAP[$15]; //@line 139 "grpmodule.c"
        var $17=((($16) - 1)&4294967295); //@line 139 "grpmodule.c"
        var $18=HEAP[$v]; //@line 139 "grpmodule.c"
        var $19=(($18)&4294967295); //@line 139 "grpmodule.c"
        HEAP[$19]=$17; //@line 139 "grpmodule.c"
        var $20=HEAP[$v]; //@line 139 "grpmodule.c"
        var $21=(($20)&4294967295); //@line 139 "grpmodule.c"
        var $22=HEAP[$21]; //@line 139 "grpmodule.c"
        var $23=((($22))|0)==0; //@line 139 "grpmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 139 "grpmodule.c"
      case 7: // $bb6
        var $24=HEAP[$v]; //@line 139 "grpmodule.c"
        var $25=(($24+4)&4294967295); //@line 139 "grpmodule.c"
        var $26=HEAP[$25]; //@line 139 "grpmodule.c"
        var $27=(($26+24)&4294967295); //@line 139 "grpmodule.c"
        var $28=HEAP[$27]; //@line 139 "grpmodule.c"
        var $29=HEAP[$v]; //@line 139 "grpmodule.c"
        FUNCTION_TABLE[$28]($29); //@line 139 "grpmodule.c"
        __label__ = 8; break; //@line 139 "grpmodule.c"
      case 8: // $bb7
        var $30=HEAP[$d]; //@line 140 "grpmodule.c"
        var $31=(($30)&4294967295); //@line 140 "grpmodule.c"
        var $32=HEAP[$31]; //@line 140 "grpmodule.c"
        var $33=((($32) - 1)&4294967295); //@line 140 "grpmodule.c"
        var $34=HEAP[$d]; //@line 140 "grpmodule.c"
        var $35=(($34)&4294967295); //@line 140 "grpmodule.c"
        HEAP[$35]=$33; //@line 140 "grpmodule.c"
        var $36=HEAP[$d]; //@line 140 "grpmodule.c"
        var $37=(($36)&4294967295); //@line 140 "grpmodule.c"
        var $38=HEAP[$37]; //@line 140 "grpmodule.c"
        var $39=((($38))|0)==0; //@line 140 "grpmodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 140 "grpmodule.c"
      case 9: // $bb8
        var $40=HEAP[$d]; //@line 140 "grpmodule.c"
        var $41=(($40+4)&4294967295); //@line 140 "grpmodule.c"
        var $42=HEAP[$41]; //@line 140 "grpmodule.c"
        var $43=(($42+24)&4294967295); //@line 140 "grpmodule.c"
        var $44=HEAP[$43]; //@line 140 "grpmodule.c"
        var $45=HEAP[$d]; //@line 140 "grpmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 140 "grpmodule.c"
        __label__ = 10; break; //@line 140 "grpmodule.c"
      case 10: // $bb9
        _endgrent(); //@line 141 "grpmodule.c"
        HEAP[$0]=0; //@line 142 "grpmodule.c"
        __label__ = 15; break; //@line 142 "grpmodule.c"
      case 11: // $bb10
        var $46=HEAP[$v]; //@line 144 "grpmodule.c"
        var $47=(($46)&4294967295); //@line 144 "grpmodule.c"
        var $48=HEAP[$47]; //@line 144 "grpmodule.c"
        var $49=((($48) - 1)&4294967295); //@line 144 "grpmodule.c"
        var $50=HEAP[$v]; //@line 144 "grpmodule.c"
        var $51=(($50)&4294967295); //@line 144 "grpmodule.c"
        HEAP[$51]=$49; //@line 144 "grpmodule.c"
        var $52=HEAP[$v]; //@line 144 "grpmodule.c"
        var $53=(($52)&4294967295); //@line 144 "grpmodule.c"
        var $54=HEAP[$53]; //@line 144 "grpmodule.c"
        var $55=((($54))|0)==0; //@line 144 "grpmodule.c"
        if ($55) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 144 "grpmodule.c"
      case 12: // $bb11
        var $56=HEAP[$v]; //@line 144 "grpmodule.c"
        var $57=(($56+4)&4294967295); //@line 144 "grpmodule.c"
        var $58=HEAP[$57]; //@line 144 "grpmodule.c"
        var $59=(($58+24)&4294967295); //@line 144 "grpmodule.c"
        var $60=HEAP[$59]; //@line 144 "grpmodule.c"
        var $61=HEAP[$v]; //@line 144 "grpmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 144 "grpmodule.c"
        __label__ = 13; break; //@line 144 "grpmodule.c"
      case 13: // $bb12
        var $62=_getgrent(); //@line 136 "grpmodule.c"
        HEAP[$p]=$62; //@line 136 "grpmodule.c"
        var $63=HEAP[$p]; //@line 136 "grpmodule.c"
        var $64=($63)!=0; //@line 136 "grpmodule.c"
        if ($64) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 136 "grpmodule.c"
      case 14: // $bb13
        _endgrent(); //@line 146 "grpmodule.c"
        var $65=HEAP[$d]; //@line 147 "grpmodule.c"
        HEAP[$0]=$65; //@line 147 "grpmodule.c"
        __label__ = 15; break; //@line 147 "grpmodule.c"
      case 15: // $bb14
        var $66=HEAP[$0]; //@line 134 "grpmodule.c"
        HEAP[$retval]=$66; //@line 134 "grpmodule.c"
        __label__ = 16; break; //@line 134 "grpmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 134 "grpmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 134 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initgrp() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str17)&4294967295), ((_grp_methods)&4294967295), ((_grp__doc__)&4294967295), 0, 1013); //@line 188 "grpmodule.c"
        HEAP[$m]=$0; //@line 188 "grpmodule.c"
        var $1=HEAP[$m]; //@line 189 "grpmodule.c"
        var $2=($1)==0; //@line 189 "grpmodule.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 189 "grpmodule.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 191 "grpmodule.c"
        var $4=_PyModule_GetDict($3); //@line 191 "grpmodule.c"
        HEAP[$d]=$4; //@line 191 "grpmodule.c"
        var $5=HEAP[_initialized]; //@line 192 "grpmodule.c"
        var $6=((($5))|0)==0; //@line 192 "grpmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 192 "grpmodule.c"
      case 2: // $bb1
        _PyStructSequence_InitType(_StructGrpType, _struct_group_type_desc); //@line 193 "grpmodule.c"
        __label__ = 3; break; //@line 193 "grpmodule.c"
      case 3: // $bb2
        var $7=HEAP[$d]; //@line 194 "grpmodule.c"
        var $8=_PyDict_SetItemString($7, ((__str18)&4294967295), _StructGrpType); //@line 194 "grpmodule.c"
        HEAP[_initialized]=1; //@line 195 "grpmodule.c"
        __label__ = 4; break; //@line 195 "grpmodule.c"
      case 4: // $bb3
        __label__ = 5; break; //@line 190 "grpmodule.c"
      case 5: // $return
        STACKTOP = __stackBase__;
        return; //@line 190 "grpmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initgrp"] = _initgrp;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_grp_getgrgid,0,_grp_getgrnam,0,_grp_getgrall,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([103,114,95,110,97,109,101,0] /* gr_name\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([103,114,111,117,112,32,110,97,109,101,0] /* group name\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([103,114,95,112,97,115,115,119,100,0] /* gr_passwd\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([112,97,115,115,119,111,114,100,0] /* password\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([103,114,95,103,105,100,0] /* gr_gid\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([103,114,111,117,112,32,105,100,0] /* group id\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([103,114,95,109,101,109,0] /* gr_mem\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([103,114,111,117,112,32,109,101,109,101,98,101,114,115,0] /* group memebers\00 */, "i8", ALLOC_NORMAL);
_struct_group_type_fields=allocate(40, ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_struct_group__doc__=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,103,114,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,40,103,114,95,110,97,109,101,44,103,114,95,112,97,115,115,119,100,44,103,114,95,103,105,100,44,103,114,95,109,101,109,41,10,111,114,32,118,105,97,32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,10,0] /* grp.struct_group: Re */, "i8", ALLOC_NORMAL);
_struct_group_type_desc=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str8=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,0] /* grp.struct_group\00 */, "i8", ALLOC_NORMAL);
_StructGrpType=allocate(196, ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str9=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,100,0] /* getgrgid(): gid not  */, "i8", ALLOC_NORMAL);
__str10=allocate([103,101,116,103,114,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,58,32,37,115,0] /* getgrnam(): name not */, "i8", ALLOC_NORMAL);
__str11=allocate([103,101,116,103,114,103,105,100,0] /* getgrgid\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,103,114,103,105,100,40,105,100,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,110,117,109,101,114,105,99,32,103,114,111,117,112,32,73,68,46,32,32,73,102,10,105,100,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0] /* getgrgid(id) -> tupl */, "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,103,114,110,97,109,0] /* getgrnam\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([103,101,116,103,114,110,97,109,40,110,97,109,101,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,103,114,111,117,112,32,110,97,109,101,46,32,32,73,102,10,110,97,109,101,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0] /* getgrnam(name) -> tu */, "i8", ALLOC_NORMAL);
__str15=allocate([103,101,116,103,114,97,108,108,0] /* getgrall\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([103,101,116,103,114,97,108,108,40,41,32,45,62,32,108,105,115,116,32,111,102,32,116,117,112,108,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,103,114,111,117,112,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,121,32,111,114,100,101,114,46,10,65,110,32,101,110,116,114,121,32,119,104,111,115,101,32,110,97,109,101,32,115,116,97,114,116,115,32,119,105,116,104,32,39,43,39,32,111,114,32,39,45,39,32,114,101,112,114,101,115,101,110,116,115,32,97,110,32,105,110,115,116,114,117,99,116,105,111,110,10,116,111,32,117,115,101,32,89,80,47,78,73,83,32,97,110,100,32,109,97,121,32,110,111,116,32,98,101,32,97,99,99,101,115,115,105,98,108,101,32,118,105,97,32,103,101,116,103,114,110,97,109,32,111,114,32,103,101,116,103,114,103,105,100,46,0] /* getgrall() -> list o */, "i8", ALLOC_NORMAL);
_grp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_grp__doc__=allocate([65,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,46,10,10,71,114,111,117,112,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,52,45,116,117,112,108,101,115,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,115,10,102,114,111,109,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,44,32,105,110,32,111,114,100,101,114,58,10,10,32,32,110,97,109,101,32,32,32,45,32,110,97,109,101,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,112,97,115,115,119,100,32,45,32,103,114,111,117,112,32,112,97,115,115,119,111,114,100,32,40,101,110,99,114,121,112,116,101,100,41,59,32,111,102,116,101,110,32,101,109,112,116,121,10,32,32,103,105,100,32,32,32,32,45,32,110,117,109,101,114,105,99,32,73,68,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,109,101,109,32,32,32,32,45,32,108,105,115,116,32,111,102,32,109,101,109,98,101,114,115,10,10,84,104,101,32,103,105,100,32,105,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,97,109,101,32,97,110,100,32,112,97,115,115,119,111,114,100,32,97,114,101,32,115,116,114,105,110,103,115,46,32,32,40,78,111,116,101,32,116,104,97,116,32,109,111,115,116,10,117,115,101,114,115,32,97,114,101,32,110,111,116,32,101,120,112,108,105,99,105,116,108,121,32,108,105,115,116,101,100,32,97,115,32,109,101,109,98,101,114,115,32,111,102,32,116,104,101,32,103,114,111,117,112,115,32,116,104,101,121,32,97,114,101,32,105,110,10,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,32,32,67,104,101,99,107,32,98,111,116,104,32,100,97,116,97,98,97,115,101,115,32,116,111,32,103,101,116,10,99,111,109,112,108,101,116,101,32,109,101,109,98,101,114,115,104,105,112,32,105,110,102,111,114,109,97,116,105,111,110,46,41,0] /* Access to the Unix g */, "i8", ALLOC_NORMAL);
__str17=allocate([103,114,112,0] /* grp\00 */, "i8", ALLOC_NORMAL);
_initialized=allocate(1, "i32", ALLOC_NORMAL);
__str18=allocate([115,116,114,117,99,116,95,103,114,111,117,112,0] /* struct_group\00 */, "i8", ALLOC_NORMAL);
HEAP[_struct_group_type_fields]=((__str)&4294967295);
HEAP[_struct_group_type_fields+4]=((__str1)&4294967295);
HEAP[_struct_group_type_fields+8]=((__str2)&4294967295);
HEAP[_struct_group_type_fields+12]=((__str3)&4294967295);
HEAP[_struct_group_type_fields+16]=((__str4)&4294967295);
HEAP[_struct_group_type_fields+20]=((__str5)&4294967295);
HEAP[_struct_group_type_fields+24]=((__str6)&4294967295);
HEAP[_struct_group_type_fields+28]=((__str7)&4294967295);
HEAP[_struct_group_type_desc]=((__str8)&4294967295);
HEAP[_struct_group_type_desc+4]=((_struct_group__doc__)&4294967295);
HEAP[_struct_group_type_desc+8]=((_struct_group_type_fields)&4294967295);
HEAP[_grp_methods]=((__str11)&4294967295);
HEAP[_grp_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_grp_methods+12]=((__str12)&4294967295);
HEAP[_grp_methods+16]=((__str13)&4294967295);
HEAP[_grp_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_grp_methods+28]=((__str14)&4294967295);
HEAP[_grp_methods+32]=((__str15)&4294967295);
HEAP[_grp_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_grp_methods+44]=((__str16)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

