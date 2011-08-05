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



var $0___SIZE = 112; // %0
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_constant___SIZE = 8; // %struct.constant
  
var $struct_termios___SIZE = 60; // %struct.termios
  var $struct_termios___FLATTENER = [0,4,8,12,16,17,52,56];
var _termios__doc__;
var _termios_tcgetattr__doc__;
var __str;
var _TermiosError;
var _termios_tcsetattr__doc__;
var __str1;
var _PyExc_TypeError;
var __str2;
var __str3;
var __str4;
var __Py_NoneStruct;
var _termios_tcsendbreak__doc__;
var __str5;
var _termios_tcdrain__doc__;
var __str6;
var _termios_tcflush__doc__;
var __str7;
var _termios_tcflow__doc__;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _termios_methods;
var _termios_constants;
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
var __str26;
var __str27;
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
var __str185;
var __str186;
var __str187;
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
var __str219;
var __str220;
var __str221;
var __str222;
var __str223;
var __str224;
var __str225;
var __str226;
var __str227;
var __str228;
var __str229;
var __str230;
var __str231;
var __str232;
var __str233;
var __str234;
var __str235;
var __str236;
var __str237;


































  function _fdconv($obj, $p) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr=__stackBase__;
        var $p_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$obj_addr]=$obj;
        HEAP[$p_addr]=$p;
        var $1=HEAP[$obj_addr]; //@line 49 "termios.c"
        var $2=_PyObject_AsFileDescriptor($1); //@line 49 "termios.c"
        HEAP[$fd]=$2; //@line 49 "termios.c"
        var $3=HEAP[$fd]; //@line 50 "termios.c"
        var $4=((($3))|0) >= 0; //@line 50 "termios.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 50 "termios.c"
      case 1: // $bb
        var $5=HEAP[$p_addr]; //@line 51 "termios.c"
        var $6=$5; //@line 51 "termios.c"
        var $7=HEAP[$fd]; //@line 51 "termios.c"
        HEAP[$6]=$7; //@line 51 "termios.c"
        HEAP[$0]=1; //@line 52 "termios.c"
        __label__ = 3; break; //@line 52 "termios.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 54 "termios.c"
        __label__ = 3; break; //@line 54 "termios.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 52 "termios.c"
        HEAP[$retval]=$8; //@line 52 "termios.c"
        __label__ = 4; break; //@line 52 "termios.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 52 "termios.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 52 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcgetattr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 101; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $mode=__stackBase__+20;
        var $cc=__stackBase__+80;
        var $ispeed=__stackBase__+84;
        var $ospeed=__stackBase__+88;
        var $v=__stackBase__+92;
        var $i=__stackBase__+96;
        var $ch=__stackBase__+100;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 79 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd); //@line 79 "termios.c"
        var $3=((($2))|0)==0; //@line 79 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 81 "termios.c"
        __label__ = 23; break; //@line 81 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$fd]; //@line 83 "termios.c"
        var $5=_tcgetattr($4, $mode); //@line 83 "termios.c"
        var $6=((($5))|0)==-1; //@line 83 "termios.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 83 "termios.c"
      case 3: // $bb2
        var $7=HEAP[_TermiosError]; //@line 84 "termios.c"
        var $8=_PyErr_SetFromErrno($7); //@line 84 "termios.c"
        HEAP[$0]=$8; //@line 84 "termios.c"
        __label__ = 23; break; //@line 84 "termios.c"
      case 4: // $bb3
        var $9=_cfgetispeed($mode); //@line 86 "termios.c"
        HEAP[$ispeed]=$9; //@line 86 "termios.c"
        var $10=_cfgetospeed($mode); //@line 87 "termios.c"
        HEAP[$ospeed]=$10; //@line 87 "termios.c"
        var $11=_PyList_New(32); //@line 89 "termios.c"
        HEAP[$cc]=$11; //@line 89 "termios.c"
        var $12=HEAP[$cc]; //@line 90 "termios.c"
        var $13=($12)==0; //@line 90 "termios.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 90 "termios.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 91 "termios.c"
        __label__ = 23; break; //@line 91 "termios.c"
      case 6: // $bb5
        HEAP[$i]=0; //@line 92 "termios.c"
        __label__ = 9; break; //@line 92 "termios.c"
      case 7: // $bb6
        var $14=HEAP[$i]; //@line 93 "termios.c"
        var $15=(($mode+17)&4294967295); //@line 93 "termios.c"
        var $16=(($15+$14)&4294967295); //@line 93 "termios.c"
        var $17=HEAP[$16]; //@line 93 "termios.c"
        HEAP[$ch]=$17; //@line 93 "termios.c"
        var $18=_PyString_FromStringAndSize($ch, 1); //@line 94 "termios.c"
        HEAP[$v]=$18; //@line 94 "termios.c"
        var $19=HEAP[$v]; //@line 95 "termios.c"
        var $20=($19)==0; //@line 95 "termios.c"
        if ($20) { __label__ = 20; break; } else { __label__ = 8; break; } //@line 95 "termios.c"
      case 8: // $bb7
        var $21=HEAP[$cc]; //@line 97 "termios.c"
        var $22=HEAP[$i]; //@line 97 "termios.c"
        var $23=HEAP[$v]; //@line 97 "termios.c"
        var $24=_PyList_SetItem($21, $22, $23); //@line 97 "termios.c"
        var $25=HEAP[$i]; //@line 92 "termios.c"
        var $26=((($25) + 1)&4294967295); //@line 92 "termios.c"
        HEAP[$i]=$26; //@line 92 "termios.c"
        __label__ = 9; break; //@line 92 "termios.c"
      case 9: // $bb8
        var $27=HEAP[$i]; //@line 92 "termios.c"
        var $28=((($27))|0) <= 31; //@line 92 "termios.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 92 "termios.c"
      case 10: // $bb9
        var $29=(($mode+12)&4294967295); //@line 103 "termios.c"
        var $30=HEAP[$29]; //@line 103 "termios.c"
        var $31=($30) & 2; //@line 103 "termios.c"
        var $32=((($31))|0)==0; //@line 103 "termios.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 103 "termios.c"
      case 11: // $bb10
        var $33=(($mode+17)&4294967295); //@line 104 "termios.c"
        var $34=(($33+6)&4294967295); //@line 104 "termios.c"
        var $35=HEAP[$34]; //@line 104 "termios.c"
        var $36=unSign(($35), 8, 0); //@line 104 "termios.c"
        var $37=_PyInt_FromLong($36); //@line 104 "termios.c"
        HEAP[$v]=$37; //@line 104 "termios.c"
        var $38=HEAP[$v]; //@line 105 "termios.c"
        var $39=($38)==0; //@line 105 "termios.c"
        if ($39) { __label__ = 20; break; } else { __label__ = 12; break; } //@line 105 "termios.c"
      case 12: // $bb11
        var $40=HEAP[$cc]; //@line 107 "termios.c"
        var $41=HEAP[$v]; //@line 107 "termios.c"
        var $42=_PyList_SetItem($40, 6, $41); //@line 107 "termios.c"
        var $43=(($mode+17)&4294967295); //@line 108 "termios.c"
        var $44=(($43+5)&4294967295); //@line 108 "termios.c"
        var $45=HEAP[$44]; //@line 108 "termios.c"
        var $46=unSign(($45), 8, 0); //@line 108 "termios.c"
        var $47=_PyInt_FromLong($46); //@line 108 "termios.c"
        HEAP[$v]=$47; //@line 108 "termios.c"
        var $48=HEAP[$v]; //@line 109 "termios.c"
        var $49=($48)==0; //@line 109 "termios.c"
        if ($49) { __label__ = 20; break; } else { __label__ = 13; break; } //@line 109 "termios.c"
      case 13: // $bb12
        var $50=HEAP[$cc]; //@line 111 "termios.c"
        var $51=HEAP[$v]; //@line 111 "termios.c"
        var $52=_PyList_SetItem($50, 5, $51); //@line 111 "termios.c"
        __label__ = 14; break; //@line 111 "termios.c"
      case 14: // $bb13
        var $53=_PyList_New(7); //@line 114 "termios.c"
        HEAP[$v]=$53; //@line 114 "termios.c"
        var $54=HEAP[$v]; //@line 114 "termios.c"
        var $55=($54)==0; //@line 114 "termios.c"
        if ($55) { __label__ = 20; break; } else { __label__ = 15; break; } //@line 114 "termios.c"
      case 15: // $bb14
        var $56=(($mode)&4294967295); //@line 117 "termios.c"
        var $57=HEAP[$56]; //@line 117 "termios.c"
        var $58=_PyInt_FromLong($57); //@line 117 "termios.c"
        var $59=HEAP[$v]; //@line 117 "termios.c"
        var $60=_PyList_SetItem($59, 0, $58); //@line 117 "termios.c"
        var $61=(($mode+4)&4294967295); //@line 118 "termios.c"
        var $62=HEAP[$61]; //@line 118 "termios.c"
        var $63=_PyInt_FromLong($62); //@line 118 "termios.c"
        var $64=HEAP[$v]; //@line 118 "termios.c"
        var $65=_PyList_SetItem($64, 1, $63); //@line 118 "termios.c"
        var $66=(($mode+8)&4294967295); //@line 119 "termios.c"
        var $67=HEAP[$66]; //@line 119 "termios.c"
        var $68=_PyInt_FromLong($67); //@line 119 "termios.c"
        var $69=HEAP[$v]; //@line 119 "termios.c"
        var $70=_PyList_SetItem($69, 2, $68); //@line 119 "termios.c"
        var $71=(($mode+12)&4294967295); //@line 120 "termios.c"
        var $72=HEAP[$71]; //@line 120 "termios.c"
        var $73=_PyInt_FromLong($72); //@line 120 "termios.c"
        var $74=HEAP[$v]; //@line 120 "termios.c"
        var $75=_PyList_SetItem($74, 3, $73); //@line 120 "termios.c"
        var $76=HEAP[$ispeed]; //@line 121 "termios.c"
        var $77=_PyInt_FromLong($76); //@line 121 "termios.c"
        var $78=HEAP[$v]; //@line 121 "termios.c"
        var $79=_PyList_SetItem($78, 4, $77); //@line 121 "termios.c"
        var $80=HEAP[$ospeed]; //@line 122 "termios.c"
        var $81=_PyInt_FromLong($80); //@line 122 "termios.c"
        var $82=HEAP[$v]; //@line 122 "termios.c"
        var $83=_PyList_SetItem($82, 5, $81); //@line 122 "termios.c"
        var $84=HEAP[$v]; //@line 123 "termios.c"
        var $85=HEAP[$cc]; //@line 123 "termios.c"
        var $86=_PyList_SetItem($84, 6, $85); //@line 123 "termios.c"
        var $87=_PyErr_Occurred(); //@line 124 "termios.c"
        var $88=($87)!=0; //@line 124 "termios.c"
        if ($88) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 124 "termios.c"
      case 16: // $bb15
        var $89=HEAP[$v]; //@line 125 "termios.c"
        var $90=(($89)&4294967295); //@line 125 "termios.c"
        var $91=HEAP[$90]; //@line 125 "termios.c"
        var $92=((($91) - 1)&4294967295); //@line 125 "termios.c"
        var $93=HEAP[$v]; //@line 125 "termios.c"
        var $94=(($93)&4294967295); //@line 125 "termios.c"
        HEAP[$94]=$92; //@line 125 "termios.c"
        var $95=HEAP[$v]; //@line 125 "termios.c"
        var $96=(($95)&4294967295); //@line 125 "termios.c"
        var $97=HEAP[$96]; //@line 125 "termios.c"
        var $98=((($97))|0)==0; //@line 125 "termios.c"
        if ($98) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 125 "termios.c"
      case 17: // $bb16
        var $99=HEAP[$v]; //@line 125 "termios.c"
        var $100=(($99+4)&4294967295); //@line 125 "termios.c"
        var $101=HEAP[$100]; //@line 125 "termios.c"
        var $102=(($101+24)&4294967295); //@line 125 "termios.c"
        var $103=HEAP[$102]; //@line 125 "termios.c"
        var $104=HEAP[$v]; //@line 125 "termios.c"
        FUNCTION_TABLE[$103]($104); //@line 125 "termios.c"
        __label__ = 18; break; //@line 125 "termios.c"
      case 18: // $bb17
        __label__ = 20; break; //@line 125 "termios.c"
      case 19: // $bb18
        var $105=HEAP[$v]; //@line 128 "termios.c"
        HEAP[$0]=$105; //@line 128 "termios.c"
        __label__ = 23; break; //@line 128 "termios.c"
      case 20: // $err
        var $106=HEAP[$cc]; //@line 130 "termios.c"
        var $107=(($106)&4294967295); //@line 130 "termios.c"
        var $108=HEAP[$107]; //@line 130 "termios.c"
        var $109=((($108) - 1)&4294967295); //@line 130 "termios.c"
        var $110=HEAP[$cc]; //@line 130 "termios.c"
        var $111=(($110)&4294967295); //@line 130 "termios.c"
        HEAP[$111]=$109; //@line 130 "termios.c"
        var $112=HEAP[$cc]; //@line 130 "termios.c"
        var $113=(($112)&4294967295); //@line 130 "termios.c"
        var $114=HEAP[$113]; //@line 130 "termios.c"
        var $115=((($114))|0)==0; //@line 130 "termios.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 130 "termios.c"
      case 21: // $bb19
        var $116=HEAP[$cc]; //@line 130 "termios.c"
        var $117=(($116+4)&4294967295); //@line 130 "termios.c"
        var $118=HEAP[$117]; //@line 130 "termios.c"
        var $119=(($118+24)&4294967295); //@line 130 "termios.c"
        var $120=HEAP[$119]; //@line 130 "termios.c"
        var $121=HEAP[$cc]; //@line 130 "termios.c"
        FUNCTION_TABLE[$120]($121); //@line 130 "termios.c"
        __label__ = 22; break; //@line 130 "termios.c"
      case 22: // $bb20
        HEAP[$0]=0; //@line 131 "termios.c"
        __label__ = 23; break; //@line 131 "termios.c"
      case 23: // $bb21
        var $122=HEAP[$0]; //@line 81 "termios.c"
        HEAP[$retval]=$122; //@line 81 "termios.c"
        __label__ = 24; break; //@line 81 "termios.c"
      case 24: // $return
        var $retval22=HEAP[$retval]; //@line 81 "termios.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 81 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcsetattr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 108; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 108);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $when=__stackBase__+20;
        var $mode=__stackBase__+24;
        var $ispeed=__stackBase__+84;
        var $ospeed=__stackBase__+88;
        var $term=__stackBase__+92;
        var $cc=__stackBase__+96;
        var $v=__stackBase__+100;
        var $i=__stackBase__+104;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 154 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str1)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd, $when, $term); //@line 154 "termios.c"
        var $3=((($2))|0)==0; //@line 154 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 154 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 156 "termios.c"
        __label__ = 28; break; //@line 156 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$term]; //@line 157 "termios.c"
        var $5=(($4+4)&4294967295); //@line 157 "termios.c"
        var $6=HEAP[$5]; //@line 157 "termios.c"
        var $7=(($6+84)&4294967295); //@line 157 "termios.c"
        var $8=HEAP[$7]; //@line 157 "termios.c"
        var $9=($8) & 33554432; //@line 157 "termios.c"
        var $10=((($9))|0)==0; //@line 157 "termios.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 157 "termios.c"
      case 3: // $bb2
        var $11=HEAP[$term]; //@line 157 "termios.c"
        var $12=_PyList_Size($11); //@line 157 "termios.c"
        var $13=((($12))|0)!=7; //@line 157 "termios.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 157 "termios.c"
      case 4: // $bb3
        var $14=HEAP[_PyExc_TypeError]; //@line 158 "termios.c"
        _PyErr_SetString($14, ((__str2)&4294967295)); //@line 158 "termios.c"
        HEAP[$0]=0; //@line 160 "termios.c"
        __label__ = 28; break; //@line 160 "termios.c"
      case 5: // $bb4
        var $15=HEAP[$fd]; //@line 164 "termios.c"
        var $16=_tcgetattr($15, $mode); //@line 164 "termios.c"
        var $17=((($16))|0)==-1; //@line 164 "termios.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 164 "termios.c"
      case 6: // $bb5
        var $18=HEAP[_TermiosError]; //@line 165 "termios.c"
        var $19=_PyErr_SetFromErrno($18); //@line 165 "termios.c"
        HEAP[$0]=$19; //@line 165 "termios.c"
        __label__ = 28; break; //@line 165 "termios.c"
      case 7: // $bb6
        var $20=HEAP[$term]; //@line 166 "termios.c"
        var $21=_PyList_GetItem($20, 0); //@line 166 "termios.c"
        var $22=_PyInt_AsLong($21); //@line 166 "termios.c"
        var $23=(($mode)&4294967295); //@line 166 "termios.c"
        HEAP[$23]=$22; //@line 166 "termios.c"
        var $24=HEAP[$term]; //@line 167 "termios.c"
        var $25=_PyList_GetItem($24, 1); //@line 167 "termios.c"
        var $26=_PyInt_AsLong($25); //@line 167 "termios.c"
        var $27=(($mode+4)&4294967295); //@line 167 "termios.c"
        HEAP[$27]=$26; //@line 167 "termios.c"
        var $28=HEAP[$term]; //@line 168 "termios.c"
        var $29=_PyList_GetItem($28, 2); //@line 168 "termios.c"
        var $30=_PyInt_AsLong($29); //@line 168 "termios.c"
        var $31=(($mode+8)&4294967295); //@line 168 "termios.c"
        HEAP[$31]=$30; //@line 168 "termios.c"
        var $32=HEAP[$term]; //@line 169 "termios.c"
        var $33=_PyList_GetItem($32, 3); //@line 169 "termios.c"
        var $34=_PyInt_AsLong($33); //@line 169 "termios.c"
        var $35=(($mode+12)&4294967295); //@line 169 "termios.c"
        HEAP[$35]=$34; //@line 169 "termios.c"
        var $36=HEAP[$term]; //@line 170 "termios.c"
        var $37=_PyList_GetItem($36, 4); //@line 170 "termios.c"
        var $38=_PyInt_AsLong($37); //@line 170 "termios.c"
        HEAP[$ispeed]=$38; //@line 170 "termios.c"
        var $39=HEAP[$term]; //@line 171 "termios.c"
        var $40=_PyList_GetItem($39, 5); //@line 171 "termios.c"
        var $41=_PyInt_AsLong($40); //@line 171 "termios.c"
        HEAP[$ospeed]=$41; //@line 171 "termios.c"
        var $42=HEAP[$term]; //@line 172 "termios.c"
        var $43=_PyList_GetItem($42, 6); //@line 172 "termios.c"
        HEAP[$cc]=$43; //@line 172 "termios.c"
        var $44=_PyErr_Occurred(); //@line 173 "termios.c"
        var $45=($44)!=0; //@line 173 "termios.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 173 "termios.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 174 "termios.c"
        __label__ = 28; break; //@line 174 "termios.c"
      case 9: // $bb8
        var $46=HEAP[$cc]; //@line 176 "termios.c"
        var $47=(($46+4)&4294967295); //@line 176 "termios.c"
        var $48=HEAP[$47]; //@line 176 "termios.c"
        var $49=(($48+84)&4294967295); //@line 176 "termios.c"
        var $50=HEAP[$49]; //@line 176 "termios.c"
        var $51=($50) & 33554432; //@line 176 "termios.c"
        var $52=((($51))|0)==0; //@line 176 "termios.c"
        if ($52) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 176 "termios.c"
      case 10: // $bb9
        var $53=HEAP[$cc]; //@line 176 "termios.c"
        var $54=_PyList_Size($53); //@line 176 "termios.c"
        var $55=((($54))|0)!=32; //@line 176 "termios.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 176 "termios.c"
      case 11: // $bb10
        var $56=HEAP[_PyExc_TypeError]; //@line 177 "termios.c"
        var $57=_PyErr_Format($56, ((__str3)&4294967295), 32); //@line 177 "termios.c"
        HEAP[$0]=0; //@line 180 "termios.c"
        __label__ = 28; break; //@line 180 "termios.c"
      case 12: // $bb11
        HEAP[$i]=0; //@line 183 "termios.c"
        __label__ = 20; break; //@line 183 "termios.c"
      case 13: // $bb12
        var $58=HEAP[$cc]; //@line 184 "termios.c"
        var $59=HEAP[$i]; //@line 184 "termios.c"
        var $60=_PyList_GetItem($58, $59); //@line 184 "termios.c"
        HEAP[$v]=$60; //@line 184 "termios.c"
        var $61=HEAP[$v]; //@line 186 "termios.c"
        var $62=(($61+4)&4294967295); //@line 186 "termios.c"
        var $63=HEAP[$62]; //@line 186 "termios.c"
        var $64=(($63+84)&4294967295); //@line 186 "termios.c"
        var $65=HEAP[$64]; //@line 186 "termios.c"
        var $66=($65) & 134217728; //@line 186 "termios.c"
        var $67=((($66))|0)==0; //@line 186 "termios.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 186 "termios.c"
      case 14: // $bb13
        var $68=HEAP[$v]; //@line 186 "termios.c"
        var $69=_PyString_Size($68); //@line 186 "termios.c"
        var $70=((($69))|0)!=1; //@line 186 "termios.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 186 "termios.c"
      case 15: // $bb14
        var $71=HEAP[$i]; //@line 187 "termios.c"
        var $72=HEAP[$v]; //@line 187 "termios.c"
        var $73=_PyString_AsString($72); //@line 187 "termios.c"
        var $74=HEAP[$73]; //@line 187 "termios.c"
        var $75=(($mode+17)&4294967295); //@line 187 "termios.c"
        var $76=(($75+$71)&4294967295); //@line 187 "termios.c"
        HEAP[$76]=$74; //@line 187 "termios.c"
        __label__ = 19; break; //@line 187 "termios.c"
      case 16: // $bb15
        var $77=HEAP[$v]; //@line 188 "termios.c"
        var $78=(($77+4)&4294967295); //@line 188 "termios.c"
        var $79=HEAP[$78]; //@line 188 "termios.c"
        var $80=(($79+84)&4294967295); //@line 188 "termios.c"
        var $81=HEAP[$80]; //@line 188 "termios.c"
        var $82=($81) & 8388608; //@line 188 "termios.c"
        var $83=((($82))|0)!=0; //@line 188 "termios.c"
        if ($83) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 188 "termios.c"
      case 17: // $bb16
        var $84=HEAP[$i]; //@line 189 "termios.c"
        var $85=HEAP[$v]; //@line 189 "termios.c"
        var $86=_PyInt_AsLong($85); //@line 189 "termios.c"
        var $87=((($86)) & 255); //@line 189 "termios.c"
        var $88=(($mode+17)&4294967295); //@line 189 "termios.c"
        var $89=(($88+$84)&4294967295); //@line 189 "termios.c"
        HEAP[$89]=$87; //@line 189 "termios.c"
        __label__ = 19; break; //@line 189 "termios.c"
      case 18: // $bb17
        var $90=HEAP[_PyExc_TypeError]; //@line 191 "termios.c"
        _PyErr_SetString($90, ((__str4)&4294967295)); //@line 191 "termios.c"
        HEAP[$0]=0; //@line 193 "termios.c"
        __label__ = 28; break; //@line 193 "termios.c"
      case 19: // $bb18
        var $91=HEAP[$i]; //@line 183 "termios.c"
        var $92=((($91) + 1)&4294967295); //@line 183 "termios.c"
        HEAP[$i]=$92; //@line 183 "termios.c"
        __label__ = 20; break; //@line 183 "termios.c"
      case 20: // $bb19
        var $93=HEAP[$i]; //@line 183 "termios.c"
        var $94=((($93))|0) <= 31; //@line 183 "termios.c"
        if ($94) { __label__ = 13; break; } else { __label__ = 21; break; } //@line 183 "termios.c"
      case 21: // $bb20
        var $95=HEAP[$ispeed]; //@line 197 "termios.c"
        var $96=_cfsetispeed($mode, $95); //@line 197 "termios.c"
        var $97=((($96))|0)==-1; //@line 197 "termios.c"
        if ($97) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 197 "termios.c"
      case 22: // $bb21
        var $98=HEAP[_TermiosError]; //@line 198 "termios.c"
        var $99=_PyErr_SetFromErrno($98); //@line 198 "termios.c"
        HEAP[$0]=$99; //@line 198 "termios.c"
        __label__ = 28; break; //@line 198 "termios.c"
      case 23: // $bb22
        var $100=HEAP[$ospeed]; //@line 199 "termios.c"
        var $101=_cfsetospeed($mode, $100); //@line 199 "termios.c"
        var $102=((($101))|0)==-1; //@line 199 "termios.c"
        if ($102) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 199 "termios.c"
      case 24: // $bb23
        var $103=HEAP[_TermiosError]; //@line 200 "termios.c"
        var $104=_PyErr_SetFromErrno($103); //@line 200 "termios.c"
        HEAP[$0]=$104; //@line 200 "termios.c"
        __label__ = 28; break; //@line 200 "termios.c"
      case 25: // $bb24
        var $105=HEAP[$when]; //@line 201 "termios.c"
        var $106=HEAP[$fd]; //@line 201 "termios.c"
        var $107=_tcsetattr($106, $105, $mode); //@line 201 "termios.c"
        var $108=((($107))|0)==-1; //@line 201 "termios.c"
        if ($108) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 201 "termios.c"
      case 26: // $bb25
        var $109=HEAP[_TermiosError]; //@line 202 "termios.c"
        var $110=_PyErr_SetFromErrno($109); //@line 202 "termios.c"
        HEAP[$0]=$110; //@line 202 "termios.c"
        __label__ = 28; break; //@line 202 "termios.c"
      case 27: // $bb26
        var $111=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 204 "termios.c"
        var $112=((($111) + 1)&4294967295); //@line 204 "termios.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$112; //@line 204 "termios.c"
        HEAP[$0]=__Py_NoneStruct; //@line 205 "termios.c"
        __label__ = 28; break; //@line 205 "termios.c"
      case 28: // $bb27
        var $113=HEAP[$0]; //@line 156 "termios.c"
        HEAP[$retval]=$113; //@line 156 "termios.c"
        __label__ = 29; break; //@line 156 "termios.c"
      case 29: // $return
        var $retval28=HEAP[$retval]; //@line 156 "termios.c"
        STACKTOP = __stackBase__;
        return $retval28; //@line 156 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcsendbreak($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $duration=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 220 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str5)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd, $duration); //@line 220 "termios.c"
        var $3=((($2))|0)==0; //@line 220 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 220 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 222 "termios.c"
        __label__ = 5; break; //@line 222 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$duration]; //@line 223 "termios.c"
        var $5=HEAP[$fd]; //@line 223 "termios.c"
        var $6=_tcsendbreak($5, $4); //@line 223 "termios.c"
        var $7=((($6))|0)==-1; //@line 223 "termios.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 223 "termios.c"
      case 3: // $bb2
        var $8=HEAP[_TermiosError]; //@line 224 "termios.c"
        var $9=_PyErr_SetFromErrno($8); //@line 224 "termios.c"
        HEAP[$0]=$9; //@line 224 "termios.c"
        __label__ = 5; break; //@line 224 "termios.c"
      case 4: // $bb3
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 226 "termios.c"
        var $11=((($10) + 1)&4294967295); //@line 226 "termios.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 226 "termios.c"
        HEAP[$0]=__Py_NoneStruct; //@line 227 "termios.c"
        __label__ = 5; break; //@line 227 "termios.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 222 "termios.c"
        HEAP[$retval]=$12; //@line 222 "termios.c"
        __label__ = 6; break; //@line 222 "termios.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 222 "termios.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 222 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcdrain($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 240 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str6)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd); //@line 240 "termios.c"
        var $3=((($2))|0)==0; //@line 240 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 240 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 242 "termios.c"
        __label__ = 5; break; //@line 242 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$fd]; //@line 243 "termios.c"
        var $5=_tcdrain($4); //@line 243 "termios.c"
        var $6=((($5))|0)==-1; //@line 243 "termios.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 243 "termios.c"
      case 3: // $bb2
        var $7=HEAP[_TermiosError]; //@line 244 "termios.c"
        var $8=_PyErr_SetFromErrno($7); //@line 244 "termios.c"
        HEAP[$0]=$8; //@line 244 "termios.c"
        __label__ = 5; break; //@line 244 "termios.c"
      case 4: // $bb3
        var $9=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 246 "termios.c"
        var $10=((($9) + 1)&4294967295); //@line 246 "termios.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$10; //@line 246 "termios.c"
        HEAP[$0]=__Py_NoneStruct; //@line 247 "termios.c"
        __label__ = 5; break; //@line 247 "termios.c"
      case 5: // $bb4
        var $11=HEAP[$0]; //@line 242 "termios.c"
        HEAP[$retval]=$11; //@line 242 "termios.c"
        __label__ = 6; break; //@line 242 "termios.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 242 "termios.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 242 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcflush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $queue=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 263 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str7)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd, $queue); //@line 263 "termios.c"
        var $3=((($2))|0)==0; //@line 263 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 263 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 265 "termios.c"
        __label__ = 5; break; //@line 265 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$queue]; //@line 266 "termios.c"
        var $5=HEAP[$fd]; //@line 266 "termios.c"
        var $6=_tcflush($5, $4); //@line 266 "termios.c"
        var $7=((($6))|0)==-1; //@line 266 "termios.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 266 "termios.c"
      case 3: // $bb2
        var $8=HEAP[_TermiosError]; //@line 267 "termios.c"
        var $9=_PyErr_SetFromErrno($8); //@line 267 "termios.c"
        HEAP[$0]=$9; //@line 267 "termios.c"
        __label__ = 5; break; //@line 267 "termios.c"
      case 4: // $bb3
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 269 "termios.c"
        var $11=((($10) + 1)&4294967295); //@line 269 "termios.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 269 "termios.c"
        HEAP[$0]=__Py_NoneStruct; //@line 270 "termios.c"
        __label__ = 5; break; //@line 270 "termios.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 265 "termios.c"
        HEAP[$retval]=$12; //@line 265 "termios.c"
        __label__ = 6; break; //@line 265 "termios.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 265 "termios.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 265 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _termios_tcflow($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fd=__stackBase__+16;
        var $action=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 286 "termios.c"
        var $2=_PyArg_ParseTuple($1, ((__str8)&4294967295), (FUNCTION_TABLE_OFFSET + 2), $fd, $action); //@line 286 "termios.c"
        var $3=((($2))|0)==0; //@line 286 "termios.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 286 "termios.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 288 "termios.c"
        __label__ = 5; break; //@line 288 "termios.c"
      case 2: // $bb1
        var $4=HEAP[$action]; //@line 289 "termios.c"
        var $5=HEAP[$fd]; //@line 289 "termios.c"
        var $6=_tcflow($5, $4); //@line 289 "termios.c"
        var $7=((($6))|0)==-1; //@line 289 "termios.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 289 "termios.c"
      case 3: // $bb2
        var $8=HEAP[_TermiosError]; //@line 290 "termios.c"
        var $9=_PyErr_SetFromErrno($8); //@line 290 "termios.c"
        HEAP[$0]=$9; //@line 290 "termios.c"
        __label__ = 5; break; //@line 290 "termios.c"
      case 4: // $bb3
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 292 "termios.c"
        var $11=((($10) + 1)&4294967295); //@line 292 "termios.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 292 "termios.c"
        HEAP[$0]=__Py_NoneStruct; //@line 293 "termios.c"
        __label__ = 5; break; //@line 293 "termios.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 288 "termios.c"
        HEAP[$retval]=$12; //@line 288 "termios.c"
        __label__ = 6; break; //@line 288 "termios.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 288 "termios.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 288 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _inittermios() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $constant=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$constant]=((_termios_constants)&4294967295); //@line 912 "termios.c"
        var $0=_Py_InitModule4(((__str235)&4294967295), ((_termios_methods)&4294967295), ((_termios__doc__)&4294967295), 0, 1013); //@line 914 "termios.c"
        HEAP[$m]=$0; //@line 914 "termios.c"
        var $1=HEAP[$m]; //@line 916 "termios.c"
        var $2=($1)==0; //@line 916 "termios.c"
        if ($2) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 916 "termios.c"
      case 1: // $bb
        var $3=HEAP[_TermiosError]; //@line 919 "termios.c"
        var $4=($3)==0; //@line 919 "termios.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 919 "termios.c"
      case 2: // $bb1
        var $5=_PyErr_NewException(((__str236)&4294967295), 0, 0); //@line 920 "termios.c"
        HEAP[_TermiosError]=$5; //@line 920 "termios.c"
        __label__ = 3; break; //@line 920 "termios.c"
      case 3: // $bb2
        var $6=HEAP[_TermiosError]; //@line 922 "termios.c"
        var $7=(($6)&4294967295); //@line 922 "termios.c"
        var $8=HEAP[$7]; //@line 922 "termios.c"
        var $9=((($8) + 1)&4294967295); //@line 922 "termios.c"
        var $10=(($6)&4294967295); //@line 922 "termios.c"
        HEAP[$10]=$9; //@line 922 "termios.c"
        var $11=HEAP[_TermiosError]; //@line 923 "termios.c"
        var $12=HEAP[$m]; //@line 923 "termios.c"
        var $13=_PyModule_AddObject($12, ((__str237)&4294967295), $11); //@line 923 "termios.c"
        __label__ = 5; break; //@line 923 "termios.c"
      case 4: // $bb3
        var $14=HEAP[$constant]; //@line 926 "termios.c"
        var $15=(($14+4)&4294967295); //@line 926 "termios.c"
        var $16=HEAP[$15]; //@line 926 "termios.c"
        var $17=HEAP[$constant]; //@line 926 "termios.c"
        var $18=(($17)&4294967295); //@line 926 "termios.c"
        var $19=HEAP[$18]; //@line 926 "termios.c"
        var $20=HEAP[$m]; //@line 926 "termios.c"
        var $21=_PyModule_AddIntConstant($20, $19, $16); //@line 926 "termios.c"
        var $22=HEAP[$constant]; //@line 927 "termios.c"
        var $23=(($22+8)&4294967295); //@line 927 "termios.c"
        HEAP[$constant]=$23; //@line 927 "termios.c"
        __label__ = 5; break; //@line 927 "termios.c"
      case 5: // $bb4
        var $24=HEAP[$constant]; //@line 925 "termios.c"
        var $25=(($24)&4294967295); //@line 925 "termios.c"
        var $26=HEAP[$25]; //@line 925 "termios.c"
        var $27=($26)!=0; //@line 925 "termios.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 925 "termios.c"
      case 6: // $bb5
        __label__ = 7; break; //@line 917 "termios.c"
      case 7: // $return
        STACKTOP = __stackBase__;
        return; //@line 917 "termios.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_inittermios"] = _inittermios;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_fdconv,0,_termios_tcgetattr,0,_termios_tcsetattr,0,_termios_tcsendbreak,0,_termios_tcdrain,0,_termios_tcflush,0,_termios_tcflow,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_termios__doc__=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,116,104,101,32,80,111,115,105,120,32,99,97,108,108,115,32,102,111,114,32,116,116,121,32,73,47,79,32,99,111,110,116,114,111,108,46,10,70,111,114,32,97,32,99,111,109,112,108,101,116,101,32,100,101,115,99,114,105,112,116,105,111,110,32,111,102,32,116,104,101,115,101,32,99,97,108,108,115,44,32,115,101,101,32,116,104,101,32,80,111,115,105,120,32,111,114,32,85,110,105,120,32,109,97,110,117,97,108,10,112,97,103,101,115,46,32,73,116,32,105,115,32,111,110,108,121,32,97,118,97,105,108,97,98,108,101,32,102,111,114,32,116,104,111,115,101,32,85,110,105,120,32,118,101,114,115,105,111,110,115,32,116,104,97,116,32,115,117,112,112,111,114,116,32,80,111,115,105,120,10,116,101,114,109,105,111,115,32,115,116,121,108,101,32,116,116,121,32,73,47,79,32,99,111,110,116,114,111,108,46,10,10,65,108,108,32,102,117,110,99,116,105,111,110,115,32,105,110,32,116,104,105,115,32,109,111,100,117,108,101,32,116,97,107,101,32,97,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,32,97,115,32,116,104,101,105,114,32,102,105,114,115,116,10,97,114,103,117,109,101,110,116,46,32,84,104,105,115,32,99,97,110,32,98,101,32,97,110,32,105,110,116,101,103,101,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,44,32,115,117,99,104,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,10,115,121,115,46,115,116,100,105,110,46,102,105,108,101,110,111,40,41,44,32,111,114,32,97,32,102,105,108,101,32,111,98,106,101,99,116,44,32,115,117,99,104,32,97,115,32,115,121,115,46,115,116,100,105,110,32,105,116,115,101,108,102,46,0] /* This module provides */, "i8", ALLOC_NORMAL);
_termios_tcgetattr__doc__=allocate([116,99,103,101,116,97,116,116,114,40,102,100,41,32,45,62,32,108,105,115,116,95,111,102,95,97,116,116,114,115,10,10,71,101,116,32,116,104,101,32,116,116,121,32,97,116,116,114,105,98,117,116,101,115,32,102,111,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,44,32,97,115,32,102,111,108,108,111,119,115,58,10,91,105,102,108,97,103,44,32,111,102,108,97,103,44,32,99,102,108,97,103,44,32,108,102,108,97,103,44,32,105,115,112,101,101,100,44,32,111,115,112,101,101,100,44,32,99,99,93,32,119,104,101,114,101,32,99,99,32,105,115,32,97,32,108,105,115,116,10,111,102,32,116,104,101,32,116,116,121,32,115,112,101,99,105,97,108,32,99,104,97,114,97,99,116,101,114,115,32,40,101,97,99,104,32,97,32,115,116,114,105,110,103,32,111,102,32,108,101,110,103,116,104,32,49,44,32,101,120,99,101,112,116,32,116,104,101,32,105,116,101,109,115,10,119,105,116,104,32,105,110,100,105,99,101,115,32,86,77,73,78,32,97,110,100,32,86,84,73,77,69,44,32,119,104,105,99,104,32,97,114,101,32,105,110,116,101,103,101,114,115,32,119,104,101,110,32,116,104,101,115,101,32,102,105,101,108,100,115,32,97,114,101,10,100,101,102,105,110,101,100,41,46,32,32,84,104,101,32,105,110,116,101,114,112,114,101,116,97,116,105,111,110,32,111,102,32,116,104,101,32,102,108,97,103,115,32,97,110,100,32,116,104,101,32,115,112,101,101,100,115,32,97,115,32,119,101,108,108,32,97,115,32,116,104,101,10,105,110,100,101,120,105,110,103,32,105,110,32,116,104,101,32,99,99,32,97,114,114,97,121,32,109,117,115,116,32,98,101,32,100,111,110,101,32,117,115,105,110,103,32,116,104,101,32,115,121,109,98,111,108,105,99,32,99,111,110,115,116,97,110,116,115,32,100,101,102,105,110,101,100,10,105,110,32,116,104,105,115,32,109,111,100,117,108,101,46,0] /* tcgetattr(fd) -> lis */, "i8", ALLOC_NORMAL);
__str=allocate([79,38,58,116,99,103,101,116,97,116,116,114,0] /* O&:tcgetattr\00 */, "i8", ALLOC_NORMAL);
_TermiosError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_termios_tcsetattr__doc__=allocate([116,99,115,101,116,97,116,116,114,40,102,100,44,32,119,104,101,110,44,32,97,116,116,114,105,98,117,116,101,115,41,32,45,62,32,78,111,110,101,10,10,83,101,116,32,116,104,101,32,116,116,121,32,97,116,116,114,105,98,117,116,101,115,32,102,111,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,10,84,104,101,32,97,116,116,114,105,98,117,116,101,115,32,116,111,32,98,101,32,115,101,116,32,97,114,101,32,116,97,107,101,110,32,102,114,111,109,32,116,104,101,32,97,116,116,114,105,98,117,116,101,115,32,97,114,103,117,109,101,110,116,44,32,119,104,105,99,104,10,105,115,32,97,32,108,105,115,116,32,108,105,107,101,32,116,104,101,32,111,110,101,32,114,101,116,117,114,110,101,100,32,98,121,32,116,99,103,101,116,97,116,116,114,40,41,46,32,84,104,101,32,119,104,101,110,32,97,114,103,117,109,101,110,116,10,100,101,116,101,114,109,105,110,101,115,32,119,104,101,110,32,116,104,101,32,97,116,116,114,105,98,117,116,101,115,32,97,114,101,32,99,104,97,110,103,101,100,58,32,116,101,114,109,105,111,115,46,84,67,83,65,78,79,87,32,116,111,10,99,104,97,110,103,101,32,105,109,109,101,100,105,97,116,101,108,121,44,32,116,101,114,109,105,111,115,46,84,67,83,65,68,82,65,73,78,32,116,111,32,99,104,97,110,103,101,32,97,102,116,101,114,32,116,114,97,110,115,109,105,116,116,105,110,103,32,97,108,108,10,113,117,101,117,101,100,32,111,117,116,112,117,116,44,32,111,114,32,116,101,114,109,105,111,115,46,84,67,83,65,70,76,85,83,72,32,116,111,32,99,104,97,110,103,101,32,97,102,116,101,114,32,116,114,97,110,115,109,105,116,116,105,110,103,32,97,108,108,10,113,117,101,117,101,100,32,111,117,116,112,117,116,32,97,110,100,32,100,105,115,99,97,114,100,105,110,103,32,97,108,108,32,113,117,101,117,101,100,32,105,110,112,117,116,46,32,0] /* tcsetattr(fd, when,  */, "i8", ALLOC_NORMAL);
__str1=allocate([79,38,105,79,58,116,99,115,101,116,97,116,116,114,0] /* O&iO:tcsetattr\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([116,99,115,101,116,97,116,116,114,44,32,97,114,103,32,51,58,32,109,117,115,116,32,98,101,32,55,32,101,108,101,109,101,110,116,32,108,105,115,116,0] /* tcsetattr, arg 3: mu */, "i8", ALLOC_NORMAL);
__str3=allocate([116,99,115,101,116,97,116,116,114,58,32,97,116,116,114,105,98,117,116,101,115,91,54,93,32,109,117,115,116,32,98,101,32,37,100,32,101,108,101,109,101,110,116,32,108,105,115,116,0] /* tcsetattr: attribute */, "i8", ALLOC_NORMAL);
__str4=allocate([116,99,115,101,116,97,116,116,114,58,32,101,108,101,109,101,110,116,115,32,111,102,32,97,116,116,114,105,98,117,116,101,115,32,109,117,115,116,32,98,101,32,99,104,97,114,97,99,116,101,114,115,32,111,114,32,105,110,116,101,103,101,114,115,0] /* tcsetattr: elements  */, "i8", ALLOC_NORMAL);
_termios_tcsendbreak__doc__=allocate([116,99,115,101,110,100,98,114,101,97,107,40,102,100,44,32,100,117,114,97,116,105,111,110,41,32,45,62,32,78,111,110,101,10,10,83,101,110,100,32,97,32,98,114,101,97,107,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,10,65,32,122,101,114,111,32,100,117,114,97,116,105,111,110,32,115,101,110,100,115,32,97,32,98,114,101,97,107,32,102,111,114,32,48,46,50,53,45,48,46,53,32,115,101,99,111,110,100,115,59,32,97,32,110,111,110,122,101,114,111,32,100,117,114,97,116,105,111,110,10,104,97,115,32,97,32,115,121,115,116,101,109,32,100,101,112,101,110,100,101,110,116,32,109,101,97,110,105,110,103,46,0] /* tcsendbreak(fd, dura */, "i8", ALLOC_NORMAL);
__str5=allocate([79,38,105,58,116,99,115,101,110,100,98,114,101,97,107,0] /* O&i:tcsendbreak\00 */, "i8", ALLOC_NORMAL);
_termios_tcdrain__doc__=allocate([116,99,100,114,97,105,110,40,102,100,41,32,45,62,32,78,111,110,101,10,10,87,97,105,116,32,117,110,116,105,108,32,97,108,108,32,111,117,116,112,117,116,32,119,114,105,116,116,101,110,32,116,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,32,104,97,115,32,98,101,101,110,32,116,114,97,110,115,109,105,116,116,101,100,46,0] /* tcdrain(fd) -> None\ */, "i8", ALLOC_NORMAL);
__str6=allocate([79,38,58,116,99,100,114,97,105,110,0] /* O&:tcdrain\00 */, "i8", ALLOC_NORMAL);
_termios_tcflush__doc__=allocate([116,99,102,108,117,115,104,40,102,100,44,32,113,117,101,117,101,41,32,45,62,32,78,111,110,101,10,10,68,105,115,99,97,114,100,32,113,117,101,117,101,100,32,100,97,116,97,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,10,84,104,101,32,113,117,101,117,101,32,115,101,108,101,99,116,111,114,32,115,112,101,99,105,102,105,101,115,32,119,104,105,99,104,32,113,117,101,117,101,58,32,116,101,114,109,105,111,115,46,84,67,73,70,76,85,83,72,32,102,111,114,32,116,104,101,32,105,110,112,117,116,10,113,117,101,117,101,44,32,116,101,114,109,105,111,115,46,84,67,79,70,76,85,83,72,32,102,111,114,32,116,104,101,32,111,117,116,112,117,116,32,113,117,101,117,101,44,32,111,114,32,116,101,114,109,105,111,115,46,84,67,73,79,70,76,85,83,72,32,102,111,114,10,98,111,116,104,32,113,117,101,117,101,115,46,32,0] /* tcflush(fd, queue) - */, "i8", ALLOC_NORMAL);
__str7=allocate([79,38,105,58,116,99,102,108,117,115,104,0] /* O&i:tcflush\00 */, "i8", ALLOC_NORMAL);
_termios_tcflow__doc__=allocate([116,99,102,108,111,119,40,102,100,44,32,97,99,116,105,111,110,41,32,45,62,32,78,111,110,101,10,10,83,117,115,112,101,110,100,32,111,114,32,114,101,115,117,109,101,32,105,110,112,117,116,32,111,114,32,111,117,116,112,117,116,32,111,110,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,102,100,46,10,84,104,101,32,97,99,116,105,111,110,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,116,101,114,109,105,111,115,46,84,67,79,79,70,70,32,116,111,32,115,117,115,112,101,110,100,32,111,117,116,112,117,116,44,10,116,101,114,109,105,111,115,46,84,67,79,79,78,32,116,111,32,114,101,115,116,97,114,116,32,111,117,116,112,117,116,44,32,116,101,114,109,105,111,115,46,84,67,73,79,70,70,32,116,111,32,115,117,115,112,101,110,100,32,105,110,112,117,116,44,10,111,114,32,116,101,114,109,105,111,115,46,84,67,73,79,78,32,116,111,32,114,101,115,116,97,114,116,32,105,110,112,117,116,46,0] /* tcflow(fd, action) - */, "i8", ALLOC_NORMAL);
__str8=allocate([79,38,105,58,116,99,102,108,111,119,0] /* O&i:tcflow\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([116,99,103,101,116,97,116,116,114,0] /* tcgetattr\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([116,99,115,101,116,97,116,116,114,0] /* tcsetattr\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([116,99,115,101,110,100,98,114,101,97,107,0] /* tcsendbreak\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([116,99,100,114,97,105,110,0] /* tcdrain\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([116,99,102,108,117,115,104,0] /* tcflush\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([116,99,102,108,111,119,0] /* tcflow\00 */, "i8", ALLOC_NORMAL);
_termios_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_termios_constants=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 4097, 0, 0, 0, 0, 0, 0, 0, 4098, 0, 0, 0, 0, 0, 0, 0, 4099, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 0, 0, 0, 0, 0, 2048, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 0, 0, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 0, 0, 32768, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 0, 0, 0, 0, 0, 1536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2048, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0, 0, 0, 0, 6144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32768, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 0, 0, 0, 0, 0, 2048, 0, 0, 0, 0, 0, 0, 0, 269418496, 0, 0, 0, 0, 0, 0, 0, -2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 0, 0, 0, 1024, 0, 0, 0, 0, 0, 0, 0, 2048, 0, 0, 0, 0, 0, 0, 0, 4096, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 0, 0, 32768, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 4100, 0, 0, 0, 0, 0, 0, 0, 4111, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 127, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 21586, 0, 0, 0, 0, 0, 0, 0, 21585, 0, 0, 0, 0, 0, 0, 0, 21537, 0, 0, 0, 0, 0, 0, 0, 21584, 0, 0, 0, 0, 0, 0, 0, 21531, 0, 0, 0, 0, 0, 0, 0, 1073676288, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21515, 0, 0, 0, 0, 0, 0, 0, 21509, 0, 0, 0, 0, 0, 0, 0, 21505, 0, 0, 0, 0, 0, 0, 0, 21513, 0, 0, 0, 0, 0, 0, 0, 21541, 0, 0, 0, 0, 0, 0, 0, 21510, 0, 0, 0, 0, 0, 0, 0, 21512, 0, 0, 0, 0, 0, 0, 0, 21511, 0, 0, 0, 0, 0, 0, 0, 21506, 0, 0, 0, 0, 0, 0, 0, 21508, 0, 0, 0, 0, 0, 0, 0, 21507, 0, 0, 0, 0, 0, 0, 0, 21514, 0, 0, 0, 0, 0, 0, 0, 21533, 0, 0, 0, 0, 0, 0, 0, 21516, 0, 0, 0, 0, 0, 0, 0, 21540, 0, 0, 0, 0, 0, 0, 0, 21597, 0, 0, 0, 0, 0, 0, 0, 21590, 0, 0, 0, 0, 0, 0, 0, 21519, 0, 0, 0, 0, 0, 0, 0, 21534, 0, 0, 0, 0, 0, 0, 0, 21529, 0, 0, 0, 0, 0, 0, 0, 21523, 0, 0, 0, 0, 0, 0, 0, 21531, 0, 0, 0, 0, 0, 0, 0, 21532, 0, 0, 0, 0, 0, 0, 0, 21527, 0, 0, 0, 0, 0, 0, 0, 21526, 0, 0, 0, 0, 0, 0, 0, 21525, 0, 0, 0, 0, 0, 0, 0, 21596, 0, 0, 0, 0, 0, 0, 0, 21528, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 21538, 0, 0, 0, 0, 0, 0, 0, 21517, 0, 0, 0, 0, 0, 0, 0, 21521, 0, 0, 0, 0, 0, 0, 0, 21536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 21518, 0, 0, 0, 0, 0, 0, 0, 21587, 0, 0, 0, 0, 0, 0, 0, 21593, 0, 0, 0, 0, 0, 0, 0, 21594, 0, 0, 0, 0, 0, 0, 0, 21592, 0, 0, 0, 0, 0, 0, 0, 21588, 0, 0, 0, 0, 0, 0, 0, 21595, 0, 0, 0, 0, 0, 0, 0, 21589, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 21539, 0, 0, 0, 0, 0, 0, 0, 21591, 0, 0, 0, 0, 0, 0, 0, 21520, 0, 0, 0, 0, 0, 0, 0, 21535, 0, 0, 0, 0, 0, 0, 0, 21530, 0, 0, 0, 0, 0, 0, 0, 21522, 0, 0, 0, 0, 0, 0, 0, 21524, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str15=allocate([66,48,0] /* B0\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([66,53,48,0] /* B50\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([66,55,53,0] /* B75\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([66,49,49,48,0] /* B110\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([66,49,51,52,0] /* B134\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([66,49,53,48,0] /* B150\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([66,50,48,48,0] /* B200\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([66,51,48,48,0] /* B300\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([66,54,48,48,0] /* B600\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([66,49,50,48,48,0] /* B1200\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([66,49,56,48,48,0] /* B1800\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([66,50,52,48,48,0] /* B2400\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([66,52,56,48,48,0] /* B4800\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([66,57,54,48,48,0] /* B9600\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([66,49,57,50,48,48,0] /* B19200\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([66,51,56,52,48,48,0] /* B38400\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([66,53,55,54,48,48,0] /* B57600\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([66,49,49,53,50,48,48,0] /* B115200\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([66,50,51,48,52,48,48,0] /* B230400\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([67,66,65,85,68,69,88,0] /* CBAUDEX\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([84,67,83,65,78,79,87,0] /* TCSANOW\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([84,67,83,65,68,82,65,73,78,0] /* TCSADRAIN\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([84,67,83,65,70,76,85,83,72,0] /* TCSAFLUSH\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([84,67,73,70,76,85,83,72,0] /* TCIFLUSH\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([84,67,79,70,76,85,83,72,0] /* TCOFLUSH\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([84,67,73,79,70,76,85,83,72,0] /* TCIOFLUSH\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([84,67,79,79,70,70,0] /* TCOOFF\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([84,67,79,79,78,0] /* TCOON\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([84,67,73,79,70,70,0] /* TCIOFF\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([84,67,73,79,78,0] /* TCION\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([73,71,78,66,82,75,0] /* IGNBRK\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([66,82,75,73,78,84,0] /* BRKINT\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([73,71,78,80,65,82,0] /* IGNPAR\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([80,65,82,77,82,75,0] /* PARMRK\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([73,78,80,67,75,0] /* INPCK\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([73,83,84,82,73,80,0] /* ISTRIP\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([73,78,76,67,82,0] /* INLCR\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([73,71,78,67,82,0] /* IGNCR\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([73,67,82,78,76,0] /* ICRNL\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([73,85,67,76,67,0] /* IUCLC\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([73,88,79,78,0] /* IXON\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([73,88,65,78,89,0] /* IXANY\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([73,88,79,70,70,0] /* IXOFF\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([73,77,65,88,66,69,76,0] /* IMAXBEL\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([79,80,79,83,84,0] /* OPOST\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([79,76,67,85,67,0] /* OLCUC\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([79,78,76,67,82,0] /* ONLCR\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([79,67,82,78,76,0] /* OCRNL\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([79,78,79,67,82,0] /* ONOCR\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([79,78,76,82,69,84,0] /* ONLRET\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([79,70,73,76,76,0] /* OFILL\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([79,70,68,69,76,0] /* OFDEL\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([78,76,68,76,89,0] /* NLDLY\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([67,82,68,76,89,0] /* CRDLY\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([84,65,66,68,76,89,0] /* TABDLY\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([66,83,68,76,89,0] /* BSDLY\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([86,84,68,76,89,0] /* VTDLY\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([70,70,68,76,89,0] /* FFDLY\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([78,76,48,0] /* NL0\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([78,76,49,0] /* NL1\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([67,82,48,0] /* CR0\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([67,82,49,0] /* CR1\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([67,82,50,0] /* CR2\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([67,82,51,0] /* CR3\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([84,65,66,48,0] /* TAB0\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([84,65,66,49,0] /* TAB1\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([84,65,66,50,0] /* TAB2\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([84,65,66,51,0] /* TAB3\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([88,84,65,66,83,0] /* XTABS\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([66,83,48,0] /* BS0\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([66,83,49,0] /* BS1\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([86,84,48,0] /* VT0\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([86,84,49,0] /* VT1\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([70,70,48,0] /* FF0\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([70,70,49,0] /* FF1\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([67,83,73,90,69,0] /* CSIZE\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([67,83,84,79,80,66,0] /* CSTOPB\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([67,82,69,65,68,0] /* CREAD\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([80,65,82,69,78,66,0] /* PARENB\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([80,65,82,79,68,68,0] /* PARODD\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([72,85,80,67,76,0] /* HUPCL\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([67,76,79,67,65,76,0] /* CLOCAL\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([67,73,66,65,85,68,0] /* CIBAUD\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([67,82,84,83,67,84,83,0] /* CRTSCTS\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([67,83,53,0] /* CS5\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([67,83,54,0] /* CS6\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([67,83,55,0] /* CS7\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([67,83,56,0] /* CS8\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([73,83,73,71,0] /* ISIG\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([73,67,65,78,79,78,0] /* ICANON\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([88,67,65,83,69,0] /* XCASE\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([69,67,72,79,0] /* ECHO\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([69,67,72,79,69,0] /* ECHOE\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([69,67,72,79,75,0] /* ECHOK\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([69,67,72,79,78,76,0] /* ECHONL\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([69,67,72,79,67,84,76,0] /* ECHOCTL\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([69,67,72,79,80,82,84,0] /* ECHOPRT\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([69,67,72,79,75,69,0] /* ECHOKE\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([70,76,85,83,72,79,0] /* FLUSHO\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([78,79,70,76,83,72,0] /* NOFLSH\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([84,79,83,84,79,80,0] /* TOSTOP\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([80,69,78,68,73,78,0] /* PENDIN\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([73,69,88,84,69,78,0] /* IEXTEN\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([86,73,78,84,82,0] /* VINTR\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([86,81,85,73,84,0] /* VQUIT\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([86,69,82,65,83,69,0] /* VERASE\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([86,75,73,76,76,0] /* VKILL\00 */, "i8", ALLOC_NORMAL);
__str122=allocate([86,69,79,70,0] /* VEOF\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([86,84,73,77,69,0] /* VTIME\00 */, "i8", ALLOC_NORMAL);
__str124=allocate([86,77,73,78,0] /* VMIN\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([86,83,87,84,67,0] /* VSWTC\00 */, "i8", ALLOC_NORMAL);
__str126=allocate([86,83,87,84,67,72,0] /* VSWTCH\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([86,83,84,65,82,84,0] /* VSTART\00 */, "i8", ALLOC_NORMAL);
__str128=allocate([86,83,84,79,80,0] /* VSTOP\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([86,83,85,83,80,0] /* VSUSP\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([86,69,79,76,0] /* VEOL\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([86,82,69,80,82,73,78,84,0] /* VREPRINT\00 */, "i8", ALLOC_NORMAL);
__str132=allocate([86,68,73,83,67,65,82,68,0] /* VDISCARD\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([86,87,69,82,65,83,69,0] /* VWERASE\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([86,76,78,69,88,84,0] /* VLNEXT\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([86,69,79,76,50,0] /* VEOL2\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([66,52,54,48,56,48,48,0] /* B460800\00 */, "i8", ALLOC_NORMAL);
__str137=allocate([67,66,65,85,68,0] /* CBAUD\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([67,68,83,85,83,80,0] /* CDSUSP\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([67,69,79,70,0] /* CEOF\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([67,69,79,76,0] /* CEOL\00 */, "i8", ALLOC_NORMAL);
__str141=allocate([67,69,79,84,0] /* CEOT\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([67,69,82,65,83,69,0] /* CERASE\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([67,70,76,85,83,72,0] /* CFLUSH\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([67,73,78,84,82,0] /* CINTR\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([67,75,73,76,76,0] /* CKILL\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([67,76,78,69,88,84,0] /* CLNEXT\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([67,81,85,73,84,0] /* CQUIT\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([67,82,80,82,78,84,0] /* CRPRNT\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([67,83,84,65,82,84,0] /* CSTART\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([67,83,84,79,80,0] /* CSTOP\00 */, "i8", ALLOC_NORMAL);
__str151=allocate([67,83,85,83,80,0] /* CSUSP\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([67,87,69,82,65,83,69,0] /* CWERASE\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([69,88,84,65,0] /* EXTA\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([69,88,84,66,0] /* EXTB\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([70,73,79,65,83,89,78,67,0] /* FIOASYNC\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([70,73,79,67,76,69,88,0] /* FIOCLEX\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([70,73,79,78,66,73,79,0] /* FIONBIO\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([70,73,79,78,67,76,69,88,0] /* FIONCLEX\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([70,73,79,78,82,69,65,68,0] /* FIONREAD\00 */, "i8", ALLOC_NORMAL);
__str160=allocate([73,79,67,83,73,90,69,95,77,65,83,75,0] /* IOCSIZE_MASK\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([73,79,67,83,73,90,69,95,83,72,73,70,84,0] /* IOCSIZE_SHIFT\00 */, "i8", ALLOC_NORMAL);
__str162=allocate([78,67,67,0] /* NCC\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([78,67,67,83,0] /* NCCS\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([78,95,77,79,85,83,69,0] /* N_MOUSE\00 */, "i8", ALLOC_NORMAL);
__str165=allocate([78,95,80,80,80,0] /* N_PPP\00 */, "i8", ALLOC_NORMAL);
__str166=allocate([78,95,83,76,73,80,0] /* N_SLIP\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([78,95,83,84,82,73,80,0] /* N_STRIP\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([78,95,84,84,89,0] /* N_TTY\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([84,67,70,76,83,72,0] /* TCFLSH\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([84,67,71,69,84,65,0] /* TCGETA\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([84,67,71,69,84,83,0] /* TCGETS\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([84,67,83,66,82,75,0] /* TCSBRK\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([84,67,83,66,82,75,80,0] /* TCSBRKP\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([84,67,83,69,84,65,0] /* TCSETA\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([84,67,83,69,84,65,70,0] /* TCSETAF\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([84,67,83,69,84,65,87,0] /* TCSETAW\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([84,67,83,69,84,83,0] /* TCSETS\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([84,67,83,69,84,83,70,0] /* TCSETSF\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([84,67,83,69,84,83,87,0] /* TCSETSW\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([84,67,88,79,78,67,0] /* TCXONC\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([84,73,79,67,67,79,78,83,0] /* TIOCCONS\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([84,73,79,67,69,88,67,76,0] /* TIOCEXCL\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([84,73,79,67,71,69,84,68,0] /* TIOCGETD\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([84,73,79,67,71,73,67,79,85,78,84,0] /* TIOCGICOUNT\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([84,73,79,67,71,76,67,75,84,82,77,73,79,83,0] /* TIOCGLCKTRMIOS\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([84,73,79,67,71,80,71,82,80,0] /* TIOCGPGRP\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([84,73,79,67,71,83,69,82,73,65,76,0] /* TIOCGSERIAL\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([84,73,79,67,71,83,79,70,84,67,65,82,0] /* TIOCGSOFTCAR\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([84,73,79,67,71,87,73,78,83,90,0] /* TIOCGWINSZ\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([84,73,79,67,73,78,81,0] /* TIOCINQ\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([84,73,79,67,76,73,78,85,88,0] /* TIOCLINUX\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([84,73,79,67,77,66,73,67,0] /* TIOCMBIC\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([84,73,79,67,77,66,73,83,0] /* TIOCMBIS\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([84,73,79,67,77,71,69,84,0] /* TIOCMGET\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([84,73,79,67,77,73,87,65,73,84,0] /* TIOCMIWAIT\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([84,73,79,67,77,83,69,84,0] /* TIOCMSET\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([84,73,79,67,77,95,67,65,82,0] /* TIOCM_CAR\00 */, "i8", ALLOC_NORMAL);
__str198=allocate([84,73,79,67,77,95,67,68,0] /* TIOCM_CD\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([84,73,79,67,77,95,67,84,83,0] /* TIOCM_CTS\00 */, "i8", ALLOC_NORMAL);
__str200=allocate([84,73,79,67,77,95,68,83,82,0] /* TIOCM_DSR\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([84,73,79,67,77,95,68,84,82,0] /* TIOCM_DTR\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([84,73,79,67,77,95,76,69,0] /* TIOCM_LE\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([84,73,79,67,77,95,82,73,0] /* TIOCM_RI\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([84,73,79,67,77,95,82,78,71,0] /* TIOCM_RNG\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([84,73,79,67,77,95,82,84,83,0] /* TIOCM_RTS\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([84,73,79,67,77,95,83,82,0] /* TIOCM_SR\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([84,73,79,67,77,95,83,84,0] /* TIOCM_ST\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([84,73,79,67,78,79,84,84,89,0] /* TIOCNOTTY\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([84,73,79,67,78,88,67,76,0] /* TIOCNXCL\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([84,73,79,67,79,85,84,81,0] /* TIOCOUTQ\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([84,73,79,67,80,75,84,0] /* TIOCPKT\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([84,73,79,67,80,75,84,95,68,65,84,65,0] /* TIOCPKT_DATA\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([84,73,79,67,80,75,84,95,68,79,83,84,79,80,0] /* TIOCPKT_DOSTOP\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([84,73,79,67,80,75,84,95,70,76,85,83,72,82,69,65,68,0] /* TIOCPKT_FLUSHREAD\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([84,73,79,67,80,75,84,95,70,76,85,83,72,87,82,73,84,69,0] /* TIOCPKT_FLUSHWRITE\0 */, "i8", ALLOC_NORMAL);
__str216=allocate([84,73,79,67,80,75,84,95,78,79,83,84,79,80,0] /* TIOCPKT_NOSTOP\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([84,73,79,67,80,75,84,95,83,84,65,82,84,0] /* TIOCPKT_START\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([84,73,79,67,80,75,84,95,83,84,79,80,0] /* TIOCPKT_STOP\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([84,73,79,67,83,67,84,84,89,0] /* TIOCSCTTY\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([84,73,79,67,83,69,82,67,79,78,70,73,71,0] /* TIOCSERCONFIG\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([84,73,79,67,83,69,82,71,69,84,76,83,82,0] /* TIOCSERGETLSR\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([84,73,79,67,83,69,82,71,69,84,77,85,76,84,73,0] /* TIOCSERGETMULTI\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([84,73,79,67,83,69,82,71,83,84,82,85,67,84,0] /* TIOCSERGSTRUCT\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([84,73,79,67,83,69,82,71,87,73,76,68,0] /* TIOCSERGWILD\00 */, "i8", ALLOC_NORMAL);
__str225=allocate([84,73,79,67,83,69,82,83,69,84,77,85,76,84,73,0] /* TIOCSERSETMULTI\00 */, "i8", ALLOC_NORMAL);
__str226=allocate([84,73,79,67,83,69,82,83,87,73,76,68,0] /* TIOCSERSWILD\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([84,73,79,67,83,69,82,95,84,69,77,84,0] /* TIOCSER_TEMT\00 */, "i8", ALLOC_NORMAL);
__str228=allocate([84,73,79,67,83,69,84,68,0] /* TIOCSETD\00 */, "i8", ALLOC_NORMAL);
__str229=allocate([84,73,79,67,83,76,67,75,84,82,77,73,79,83,0] /* TIOCSLCKTRMIOS\00 */, "i8", ALLOC_NORMAL);
__str230=allocate([84,73,79,67,83,80,71,82,80,0] /* TIOCSPGRP\00 */, "i8", ALLOC_NORMAL);
__str231=allocate([84,73,79,67,83,83,69,82,73,65,76,0] /* TIOCSSERIAL\00 */, "i8", ALLOC_NORMAL);
__str232=allocate([84,73,79,67,83,83,79,70,84,67,65,82,0] /* TIOCSSOFTCAR\00 */, "i8", ALLOC_NORMAL);
__str233=allocate([84,73,79,67,83,84,73,0] /* TIOCSTI\00 */, "i8", ALLOC_NORMAL);
__str234=allocate([84,73,79,67,83,87,73,78,83,90,0] /* TIOCSWINSZ\00 */, "i8", ALLOC_NORMAL);
__str235=allocate([116,101,114,109,105,111,115,0] /* termios\00 */, "i8", ALLOC_NORMAL);
__str236=allocate([116,101,114,109,105,111,115,46,101,114,114,111,114,0] /* termios.error\00 */, "i8", ALLOC_NORMAL);
__str237=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_termios_methods]=((__str9)&4294967295);
HEAP[_termios_methods+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_termios_methods+12]=((_termios_tcgetattr__doc__)&4294967295);
HEAP[_termios_methods+16]=((__str10)&4294967295);
HEAP[_termios_methods+20]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_termios_methods+28]=((_termios_tcsetattr__doc__)&4294967295);
HEAP[_termios_methods+32]=((__str11)&4294967295);
HEAP[_termios_methods+36]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_termios_methods+44]=((_termios_tcsendbreak__doc__)&4294967295);
HEAP[_termios_methods+48]=((__str12)&4294967295);
HEAP[_termios_methods+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_termios_methods+60]=((_termios_tcdrain__doc__)&4294967295);
HEAP[_termios_methods+64]=((__str13)&4294967295);
HEAP[_termios_methods+68]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_termios_methods+76]=((_termios_tcflush__doc__)&4294967295);
HEAP[_termios_methods+80]=((__str14)&4294967295);
HEAP[_termios_methods+84]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_termios_methods+92]=((_termios_tcflow__doc__)&4294967295);
HEAP[_termios_constants]=((__str15)&4294967295);
HEAP[_termios_constants+8]=((__str16)&4294967295);
HEAP[_termios_constants+16]=((__str17)&4294967295);
HEAP[_termios_constants+24]=((__str18)&4294967295);
HEAP[_termios_constants+32]=((__str19)&4294967295);
HEAP[_termios_constants+40]=((__str20)&4294967295);
HEAP[_termios_constants+48]=((__str21)&4294967295);
HEAP[_termios_constants+56]=((__str22)&4294967295);
HEAP[_termios_constants+64]=((__str23)&4294967295);
HEAP[_termios_constants+72]=((__str24)&4294967295);
HEAP[_termios_constants+80]=((__str25)&4294967295);
HEAP[_termios_constants+88]=((__str26)&4294967295);
HEAP[_termios_constants+96]=((__str27)&4294967295);
HEAP[_termios_constants+104]=((__str28)&4294967295);
HEAP[_termios_constants+112]=((__str29)&4294967295);
HEAP[_termios_constants+120]=((__str30)&4294967295);
HEAP[_termios_constants+128]=((__str31)&4294967295);
HEAP[_termios_constants+136]=((__str32)&4294967295);
HEAP[_termios_constants+144]=((__str33)&4294967295);
HEAP[_termios_constants+152]=((__str34)&4294967295);
HEAP[_termios_constants+160]=((__str35)&4294967295);
HEAP[_termios_constants+168]=((__str36)&4294967295);
HEAP[_termios_constants+176]=((__str37)&4294967295);
HEAP[_termios_constants+184]=((__str38)&4294967295);
HEAP[_termios_constants+192]=((__str39)&4294967295);
HEAP[_termios_constants+200]=((__str40)&4294967295);
HEAP[_termios_constants+208]=((__str41)&4294967295);
HEAP[_termios_constants+216]=((__str42)&4294967295);
HEAP[_termios_constants+224]=((__str43)&4294967295);
HEAP[_termios_constants+232]=((__str44)&4294967295);
HEAP[_termios_constants+240]=((__str45)&4294967295);
HEAP[_termios_constants+248]=((__str46)&4294967295);
HEAP[_termios_constants+256]=((__str47)&4294967295);
HEAP[_termios_constants+264]=((__str48)&4294967295);
HEAP[_termios_constants+272]=((__str49)&4294967295);
HEAP[_termios_constants+280]=((__str50)&4294967295);
HEAP[_termios_constants+288]=((__str51)&4294967295);
HEAP[_termios_constants+296]=((__str52)&4294967295);
HEAP[_termios_constants+304]=((__str53)&4294967295);
HEAP[_termios_constants+312]=((__str54)&4294967295);
HEAP[_termios_constants+320]=((__str55)&4294967295);
HEAP[_termios_constants+328]=((__str56)&4294967295);
HEAP[_termios_constants+336]=((__str57)&4294967295);
HEAP[_termios_constants+344]=((__str58)&4294967295);
HEAP[_termios_constants+352]=((__str59)&4294967295);
HEAP[_termios_constants+360]=((__str60)&4294967295);
HEAP[_termios_constants+368]=((__str61)&4294967295);
HEAP[_termios_constants+376]=((__str62)&4294967295);
HEAP[_termios_constants+384]=((__str63)&4294967295);
HEAP[_termios_constants+392]=((__str64)&4294967295);
HEAP[_termios_constants+400]=((__str65)&4294967295);
HEAP[_termios_constants+408]=((__str66)&4294967295);
HEAP[_termios_constants+416]=((__str67)&4294967295);
HEAP[_termios_constants+424]=((__str68)&4294967295);
HEAP[_termios_constants+432]=((__str69)&4294967295);
HEAP[_termios_constants+440]=((__str70)&4294967295);
HEAP[_termios_constants+448]=((__str71)&4294967295);
HEAP[_termios_constants+456]=((__str72)&4294967295);
HEAP[_termios_constants+464]=((__str73)&4294967295);
HEAP[_termios_constants+472]=((__str74)&4294967295);
HEAP[_termios_constants+480]=((__str75)&4294967295);
HEAP[_termios_constants+488]=((__str76)&4294967295);
HEAP[_termios_constants+496]=((__str77)&4294967295);
HEAP[_termios_constants+504]=((__str78)&4294967295);
HEAP[_termios_constants+512]=((__str79)&4294967295);
HEAP[_termios_constants+520]=((__str80)&4294967295);
HEAP[_termios_constants+528]=((__str81)&4294967295);
HEAP[_termios_constants+536]=((__str82)&4294967295);
HEAP[_termios_constants+544]=((__str83)&4294967295);
HEAP[_termios_constants+552]=((__str84)&4294967295);
HEAP[_termios_constants+560]=((__str85)&4294967295);
HEAP[_termios_constants+568]=((__str86)&4294967295);
HEAP[_termios_constants+576]=((__str87)&4294967295);
HEAP[_termios_constants+584]=((__str88)&4294967295);
HEAP[_termios_constants+592]=((__str89)&4294967295);
HEAP[_termios_constants+600]=((__str90)&4294967295);
HEAP[_termios_constants+608]=((__str91)&4294967295);
HEAP[_termios_constants+616]=((__str92)&4294967295);
HEAP[_termios_constants+624]=((__str93)&4294967295);
HEAP[_termios_constants+632]=((__str94)&4294967295);
HEAP[_termios_constants+640]=((__str95)&4294967295);
HEAP[_termios_constants+648]=((__str96)&4294967295);
HEAP[_termios_constants+656]=((__str97)&4294967295);
HEAP[_termios_constants+664]=((__str98)&4294967295);
HEAP[_termios_constants+672]=((__str99)&4294967295);
HEAP[_termios_constants+680]=((__str100)&4294967295);
HEAP[_termios_constants+688]=((__str101)&4294967295);
HEAP[_termios_constants+696]=((__str102)&4294967295);
HEAP[_termios_constants+704]=((__str103)&4294967295);
HEAP[_termios_constants+712]=((__str104)&4294967295);
HEAP[_termios_constants+720]=((__str105)&4294967295);
HEAP[_termios_constants+728]=((__str106)&4294967295);
HEAP[_termios_constants+736]=((__str107)&4294967295);
HEAP[_termios_constants+744]=((__str108)&4294967295);
HEAP[_termios_constants+752]=((__str109)&4294967295);
HEAP[_termios_constants+760]=((__str110)&4294967295);
HEAP[_termios_constants+768]=((__str111)&4294967295);
HEAP[_termios_constants+776]=((__str112)&4294967295);
HEAP[_termios_constants+784]=((__str113)&4294967295);
HEAP[_termios_constants+792]=((__str114)&4294967295);
HEAP[_termios_constants+800]=((__str115)&4294967295);
HEAP[_termios_constants+808]=((__str116)&4294967295);
HEAP[_termios_constants+816]=((__str117)&4294967295);
HEAP[_termios_constants+824]=((__str118)&4294967295);
HEAP[_termios_constants+832]=((__str119)&4294967295);
HEAP[_termios_constants+840]=((__str120)&4294967295);
HEAP[_termios_constants+848]=((__str121)&4294967295);
HEAP[_termios_constants+856]=((__str122)&4294967295);
HEAP[_termios_constants+864]=((__str123)&4294967295);
HEAP[_termios_constants+872]=((__str124)&4294967295);
HEAP[_termios_constants+880]=((__str125)&4294967295);
HEAP[_termios_constants+888]=((__str126)&4294967295);
HEAP[_termios_constants+896]=((__str127)&4294967295);
HEAP[_termios_constants+904]=((__str128)&4294967295);
HEAP[_termios_constants+912]=((__str129)&4294967295);
HEAP[_termios_constants+920]=((__str130)&4294967295);
HEAP[_termios_constants+928]=((__str131)&4294967295);
HEAP[_termios_constants+936]=((__str132)&4294967295);
HEAP[_termios_constants+944]=((__str133)&4294967295);
HEAP[_termios_constants+952]=((__str134)&4294967295);
HEAP[_termios_constants+960]=((__str135)&4294967295);
HEAP[_termios_constants+968]=((__str136)&4294967295);
HEAP[_termios_constants+976]=((__str137)&4294967295);
HEAP[_termios_constants+984]=((__str138)&4294967295);
HEAP[_termios_constants+992]=((__str139)&4294967295);
HEAP[_termios_constants+1000]=((__str140)&4294967295);
HEAP[_termios_constants+1008]=((__str141)&4294967295);
HEAP[_termios_constants+1016]=((__str142)&4294967295);
HEAP[_termios_constants+1024]=((__str143)&4294967295);
HEAP[_termios_constants+1032]=((__str144)&4294967295);
HEAP[_termios_constants+1040]=((__str145)&4294967295);
HEAP[_termios_constants+1048]=((__str146)&4294967295);
HEAP[_termios_constants+1056]=((__str147)&4294967295);
HEAP[_termios_constants+1064]=((__str148)&4294967295);
HEAP[_termios_constants+1072]=((__str149)&4294967295);
HEAP[_termios_constants+1080]=((__str150)&4294967295);
HEAP[_termios_constants+1088]=((__str151)&4294967295);
HEAP[_termios_constants+1096]=((__str152)&4294967295);
HEAP[_termios_constants+1104]=((__str153)&4294967295);
HEAP[_termios_constants+1112]=((__str154)&4294967295);
HEAP[_termios_constants+1120]=((__str155)&4294967295);
HEAP[_termios_constants+1128]=((__str156)&4294967295);
HEAP[_termios_constants+1136]=((__str157)&4294967295);
HEAP[_termios_constants+1144]=((__str158)&4294967295);
HEAP[_termios_constants+1152]=((__str159)&4294967295);
HEAP[_termios_constants+1160]=((__str160)&4294967295);
HEAP[_termios_constants+1168]=((__str161)&4294967295);
HEAP[_termios_constants+1176]=((__str162)&4294967295);
HEAP[_termios_constants+1184]=((__str163)&4294967295);
HEAP[_termios_constants+1192]=((__str164)&4294967295);
HEAP[_termios_constants+1200]=((__str165)&4294967295);
HEAP[_termios_constants+1208]=((__str166)&4294967295);
HEAP[_termios_constants+1216]=((__str167)&4294967295);
HEAP[_termios_constants+1224]=((__str168)&4294967295);
HEAP[_termios_constants+1232]=((__str169)&4294967295);
HEAP[_termios_constants+1240]=((__str170)&4294967295);
HEAP[_termios_constants+1248]=((__str171)&4294967295);
HEAP[_termios_constants+1256]=((__str172)&4294967295);
HEAP[_termios_constants+1264]=((__str173)&4294967295);
HEAP[_termios_constants+1272]=((__str174)&4294967295);
HEAP[_termios_constants+1280]=((__str175)&4294967295);
HEAP[_termios_constants+1288]=((__str176)&4294967295);
HEAP[_termios_constants+1296]=((__str177)&4294967295);
HEAP[_termios_constants+1304]=((__str178)&4294967295);
HEAP[_termios_constants+1312]=((__str179)&4294967295);
HEAP[_termios_constants+1320]=((__str180)&4294967295);
HEAP[_termios_constants+1328]=((__str181)&4294967295);
HEAP[_termios_constants+1336]=((__str182)&4294967295);
HEAP[_termios_constants+1344]=((__str183)&4294967295);
HEAP[_termios_constants+1352]=((__str184)&4294967295);
HEAP[_termios_constants+1360]=((__str185)&4294967295);
HEAP[_termios_constants+1368]=((__str186)&4294967295);
HEAP[_termios_constants+1376]=((__str187)&4294967295);
HEAP[_termios_constants+1384]=((__str188)&4294967295);
HEAP[_termios_constants+1392]=((__str189)&4294967295);
HEAP[_termios_constants+1400]=((__str190)&4294967295);
HEAP[_termios_constants+1408]=((__str191)&4294967295);
HEAP[_termios_constants+1416]=((__str192)&4294967295);
HEAP[_termios_constants+1424]=((__str193)&4294967295);
HEAP[_termios_constants+1432]=((__str194)&4294967295);
HEAP[_termios_constants+1440]=((__str195)&4294967295);
HEAP[_termios_constants+1448]=((__str196)&4294967295);
HEAP[_termios_constants+1456]=((__str197)&4294967295);
HEAP[_termios_constants+1464]=((__str198)&4294967295);
HEAP[_termios_constants+1472]=((__str199)&4294967295);
HEAP[_termios_constants+1480]=((__str200)&4294967295);
HEAP[_termios_constants+1488]=((__str201)&4294967295);
HEAP[_termios_constants+1496]=((__str202)&4294967295);
HEAP[_termios_constants+1504]=((__str203)&4294967295);
HEAP[_termios_constants+1512]=((__str204)&4294967295);
HEAP[_termios_constants+1520]=((__str205)&4294967295);
HEAP[_termios_constants+1528]=((__str206)&4294967295);
HEAP[_termios_constants+1536]=((__str207)&4294967295);
HEAP[_termios_constants+1544]=((__str208)&4294967295);
HEAP[_termios_constants+1552]=((__str209)&4294967295);
HEAP[_termios_constants+1560]=((__str210)&4294967295);
HEAP[_termios_constants+1568]=((__str211)&4294967295);
HEAP[_termios_constants+1576]=((__str212)&4294967295);
HEAP[_termios_constants+1584]=((__str213)&4294967295);
HEAP[_termios_constants+1592]=((__str214)&4294967295);
HEAP[_termios_constants+1600]=((__str215)&4294967295);
HEAP[_termios_constants+1608]=((__str216)&4294967295);
HEAP[_termios_constants+1616]=((__str217)&4294967295);
HEAP[_termios_constants+1624]=((__str218)&4294967295);
HEAP[_termios_constants+1632]=((__str219)&4294967295);
HEAP[_termios_constants+1640]=((__str220)&4294967295);
HEAP[_termios_constants+1648]=((__str221)&4294967295);
HEAP[_termios_constants+1656]=((__str222)&4294967295);
HEAP[_termios_constants+1664]=((__str223)&4294967295);
HEAP[_termios_constants+1672]=((__str224)&4294967295);
HEAP[_termios_constants+1680]=((__str225)&4294967295);
HEAP[_termios_constants+1688]=((__str226)&4294967295);
HEAP[_termios_constants+1696]=((__str227)&4294967295);
HEAP[_termios_constants+1704]=((__str228)&4294967295);
HEAP[_termios_constants+1712]=((__str229)&4294967295);
HEAP[_termios_constants+1720]=((__str230)&4294967295);
HEAP[_termios_constants+1728]=((__str231)&4294967295);
HEAP[_termios_constants+1736]=((__str232)&4294967295);
HEAP[_termios_constants+1744]=((__str233)&4294967295);
HEAP[_termios_constants+1752]=((__str234)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

