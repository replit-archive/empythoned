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



var $0___SIZE = 1200; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 196; // %3
  
var $4___SIZE = 1168; // %4
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_MEVENT___SIZE = 20; // %struct.MEVENT
  
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCursesWindowObject___SIZE = 12; // %struct.PyCursesWindowObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_WINDOW___SIZE = 100; // %struct.WINDOW
  var $struct_WINDOW___FLATTENER = [0,2,4,6,8,10,12,16,20,24,25,26,27,28,29,30,31,32,36,40,44,46,48,52,56,60,72,76];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_cchar_t___SIZE = 24; // %struct.cchar_t
  
var $struct_ldat___SIZE = 0; // %struct.ldat
  var $struct_ldat___FLATTENER = [];
var $struct_pdat___SIZE = 12; // %struct.pdat
  
var _PyCursesVersion;
var __str;
var _catchall_ERR;
var __str1;
var _catchall_NULL;
var __str2;
var _initialised_setupterm;
var _initialised;
var _initialisedcolors;
var __Py_NoneStruct;
var _PyCursesError;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __Py_ZeroStruct;
var __Py_TrueStruct;
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
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var __str31;
var _stdscr;
var __str32;
var __str33;
var __str34;
var __str35;
var _PyExc_TypeError;
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
var _PyFile_Type;
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
var _PyCursesWindow_Methods;
var __str172;
var _PyCursesWindow_Type;
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
var _newscr;
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
var _acs_map;
var _ModDict;
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
var __str238;
var __str239;
var __str240;
var __str241;
var __str242;
var __str243;
var __str244;
var __str245;
var __str246;
var __str247;
var __str248;
var __str249;
var __str250;
var __str251;
var __str252;
var __str253;
var __str254;
var __str255;
var __str256;
var __str257;
var __str258;
var __str259;
var _LINES;
var __str260;
var _COLS;
var __str261;
var __str262;
var _kwlist_13450;
var __str263;
var __str264;
var __str265;
var __str266;
var __str267;
var __str268;
var __str269;
var __str270;
var __str271;
var __str272;
var __str273;
var _PyExc_ValueError;
var __str274;
var __str275;
var __str276;
var __str277;
var __str278;
var __str279;
var __str280;
var __str281;
var __str282;
var __str283;
var __str284;
var __str285;
var __str286;
var __str287;
var __str288;
var __str289;
var __str290;
var __str291;
var __str292;
var __str293;
var __str294;
var __str295;
var __str296;
var __str297;
var _COLORS;
var __str298;
var _COLOR_PAIRS;
var __str299;
var __str300;
var __str301;
var __str302;
var __str303;
var __str304;
var __str305;
var __str306;
var __str307;
var __str308;
var __str309;
var __str310;
var __str311;
var __str312;
var __str313;
var __str314;
var __str315;
var __str316;
var __str317;
var __str318;
var __str319;
var __str320;
var __str321;
var __str322;
var __str323;
var __str324;
var __str325;
var __str326;
var __str327;
var __str328;
var __str329;
var __str330;
var __str331;
var __str332;
var __str333;
var __str334;
var __str335;
var __str336;
var __str337;
var __str338;
var __str339;
var __str340;
var __str341;
var __str342;
var __str343;
var __str344;
var __str345;
var __str346;
var __str347;
var __str348;
var __str349;
var _PyCurses_methods;
var _PyType_Type;
var _PyCurses_API_14301;
var __str350;
var __str351;
var __str352;
var __str353;
var __str354;
var __str355;
var __str356;
var __str357;
var __str358;
var __str359;
var __str360;
var __str361;
var __str362;
var __str363;
var __str364;
var __str365;
var __str366;
var __str367;
var __str368;
var __str369;
var __str370;
var __str371;
var __str372;
var __str373;
var __str374;
var __str375;
var __str376;
var __str377;
var __str378;
var __str379;
var __str380;
var __str381;
var __str382;
var __str383;
var __str384;
var __str385;
var __str386;
var __str387;
var __str388;
var __str389;
var __str390;
var __str391;
var __str392;
var __str393;
var __str394;
var __str395;
var __str396;
var __str397;
var __str398;
var __str399;
var __str400;
var __str401;
var __str402;
var __str403;
var __str404;
var __str405;
var __str406;
var __str407;
var __str408;
var __str409;
var __str410;
var __str411;
var __str412;
var __str413;
var __str414;





































































































































































  function _PyCursesCheckERR($code, $fname) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $code_addr=__stackBase__;
        var $fname_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$code_addr]=$code;
        HEAP[$fname_addr]=$fname;
        var $1=HEAP[$code_addr]; //@line 181 "_cursesmodule.c"
        var $2=((($1))|0)!=-1; //@line 181 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 181 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 182 "_cursesmodule.c"
        var $4=((($3) + 1)&4294967295); //@line 182 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 182 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 183 "_cursesmodule.c"
        __label__ = 6; break; //@line 183 "_cursesmodule.c"
      case 2: // $bb1
        var $5=HEAP[$fname_addr]; //@line 185 "_cursesmodule.c"
        var $6=($5)==0; //@line 185 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 185 "_cursesmodule.c"
      case 3: // $bb2
        var $7=HEAP[_catchall_ERR]; //@line 186 "_cursesmodule.c"
        var $8=HEAP[_PyCursesError]; //@line 186 "_cursesmodule.c"
        _PyErr_SetString($8, $7); //@line 186 "_cursesmodule.c"
        __label__ = 5; break; //@line 186 "_cursesmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyCursesError]; //@line 188 "_cursesmodule.c"
        var $10=HEAP[$fname_addr]; //@line 188 "_cursesmodule.c"
        var $11=_PyErr_Format($9, ((__str3)&4294967295), $10); //@line 188 "_cursesmodule.c"
        __label__ = 5; break; //@line 188 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 190 "_cursesmodule.c"
        __label__ = 6; break; //@line 190 "_cursesmodule.c"
      case 6: // $bb5
        var $12=HEAP[$0]; //@line 183 "_cursesmodule.c"
        HEAP[$retval]=$12; //@line 183 "_cursesmodule.c"
        __label__ = 7; break; //@line 183 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 183 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 183 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_ConvertToChtype($obj, $ch) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr=__stackBase__;
        var $ch_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$obj_addr]=$obj;
        HEAP[$ch_addr]=$ch;
        var $1=HEAP[$obj_addr]; //@line 197 "_cursesmodule.c"
        var $2=(($1+4)&4294967295); //@line 197 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 197 "_cursesmodule.c"
        var $4=(($3+84)&4294967295); //@line 197 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 197 "_cursesmodule.c"
        var $6=($5) & 8388608; //@line 197 "_cursesmodule.c"
        var $7=((($6))|0)!=0; //@line 197 "_cursesmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 197 "_cursesmodule.c"
      case 1: // $bb
        var $8=HEAP[$obj_addr]; //@line 198 "_cursesmodule.c"
        var $9=_PyInt_AsLong($8); //@line 198 "_cursesmodule.c"
        var $10=HEAP[$ch_addr]; //@line 198 "_cursesmodule.c"
        HEAP[$10]=$9; //@line 198 "_cursesmodule.c"
        __label__ = 6; break; //@line 198 "_cursesmodule.c"
      case 2: // $bb1
        var $11=HEAP[$obj_addr]; //@line 199 "_cursesmodule.c"
        var $12=(($11+4)&4294967295); //@line 199 "_cursesmodule.c"
        var $13=HEAP[$12]; //@line 199 "_cursesmodule.c"
        var $14=(($13+84)&4294967295); //@line 199 "_cursesmodule.c"
        var $15=HEAP[$14]; //@line 199 "_cursesmodule.c"
        var $16=($15) & 134217728; //@line 199 "_cursesmodule.c"
        var $17=((($16))|0)==0; //@line 199 "_cursesmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 199 "_cursesmodule.c"
      case 3: // $bb2
        var $18=HEAP[$obj_addr]; //@line 199 "_cursesmodule.c"
        var $19=_PyString_Size($18); //@line 199 "_cursesmodule.c"
        var $20=((($19))|0)!=1; //@line 199 "_cursesmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 199 "_cursesmodule.c"
      case 4: // $bb3
        var $21=HEAP[$obj_addr]; //@line 201 "_cursesmodule.c"
        var $22=_PyString_AsString($21); //@line 201 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 201 "_cursesmodule.c"
        var $24=reSign(($23), 8, 0); //@line 201 "_cursesmodule.c"
        var $25=HEAP[$ch_addr]; //@line 201 "_cursesmodule.c"
        HEAP[$25]=$24; //@line 201 "_cursesmodule.c"
        __label__ = 6; break; //@line 201 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 203 "_cursesmodule.c"
        __label__ = 7; break; //@line 203 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$0]=1; //@line 205 "_cursesmodule.c"
        __label__ = 7; break; //@line 205 "_cursesmodule.c"
      case 7: // $bb6
        var $26=HEAP[$0]; //@line 203 "_cursesmodule.c"
        HEAP[$retval]=$26; //@line 203 "_cursesmodule.c"
        __label__ = 8; break; //@line 203 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 203 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 203 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _func_PyCursesSetupTermCalled() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialised_setupterm]; //@line 213 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 213 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 213 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 213 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str4)&4294967295)); //@line 213 "_cursesmodule.c"
        HEAP[$0]=0; //@line 213 "_cursesmodule.c"
        __label__ = 3; break; //@line 213 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 214 "_cursesmodule.c"
        __label__ = 3; break; //@line 214 "_cursesmodule.c"
      case 3: // $bb2
        var $4=HEAP[$0]; //@line 213 "_cursesmodule.c"
        HEAP[$retval]=$4; //@line 213 "_cursesmodule.c"
        __label__ = 4; break; //@line 213 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 213 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 213 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _func_PyCursesInitialised() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialised]; //@line 219 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 219 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 219 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 219 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 219 "_cursesmodule.c"
        HEAP[$0]=0; //@line 219 "_cursesmodule.c"
        __label__ = 3; break; //@line 219 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 220 "_cursesmodule.c"
        __label__ = 3; break; //@line 220 "_cursesmodule.c"
      case 3: // $bb2
        var $4=HEAP[$0]; //@line 219 "_cursesmodule.c"
        HEAP[$retval]=$4; //@line 219 "_cursesmodule.c"
        __label__ = 4; break; //@line 219 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 219 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 219 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _func_PyCursesInitialisedColor() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_initialisedcolors]; //@line 225 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 225 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 225 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 225 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str6)&4294967295)); //@line 225 "_cursesmodule.c"
        HEAP[$0]=0; //@line 225 "_cursesmodule.c"
        __label__ = 3; break; //@line 225 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 226 "_cursesmodule.c"
        __label__ = 3; break; //@line 226 "_cursesmodule.c"
      case 3: // $bb2
        var $4=HEAP[$0]; //@line 225 "_cursesmodule.c"
        HEAP[$retval]=$4; //@line 225 "_cursesmodule.c"
        __label__ = 4; break; //@line 225 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 225 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 225 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_untouchwin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_9=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 296 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 296 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 296 "_cursesmodule.c"
        var $4=($3)!=0; //@line 296 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 296 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 296 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 296 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 296 "_cursesmodule.c"
        var $8=(($7+4)&4294967295); //@line 296 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 296 "_cursesmodule.c"
        var $10=reSign(($9), 16, 0); //@line 296 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 296 "_cursesmodule.c"
        HEAP[$iftmp_9]=$11; //@line 296 "_cursesmodule.c"
        __label__ = 3; break; //@line 296 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_9]=-1; //@line 296 "_cursesmodule.c"
        __label__ = 3; break; //@line 296 "_cursesmodule.c"
      case 3: // $bb2
        var $12=HEAP[$self_addr]; //@line 296 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 296 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 296 "_cursesmodule.c"
        var $15=HEAP[$iftmp_9]; //@line 296 "_cursesmodule.c"
        var $16=_wtouchln($14, 0, $15, 0); //@line 296 "_cursesmodule.c"
        var $17=_PyCursesCheckERR($16, ((__str7)&4294967295)); //@line 296 "_cursesmodule.c"
        HEAP[$0]=$17; //@line 296 "_cursesmodule.c"
        var $18=HEAP[$0]; //@line 296 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 296 "_cursesmodule.c"
        __label__ = 4; break; //@line 296 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 296 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 296 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_touchwin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_10=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 297 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 297 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 297 "_cursesmodule.c"
        var $4=($3)!=0; //@line 297 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 297 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 297 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 297 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 297 "_cursesmodule.c"
        var $8=(($7+4)&4294967295); //@line 297 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 297 "_cursesmodule.c"
        var $10=reSign(($9), 16, 0); //@line 297 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 297 "_cursesmodule.c"
        HEAP[$iftmp_10]=$11; //@line 297 "_cursesmodule.c"
        __label__ = 3; break; //@line 297 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_10]=-1; //@line 297 "_cursesmodule.c"
        __label__ = 3; break; //@line 297 "_cursesmodule.c"
      case 3: // $bb2
        var $12=HEAP[$self_addr]; //@line 297 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 297 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 297 "_cursesmodule.c"
        var $15=HEAP[$iftmp_10]; //@line 297 "_cursesmodule.c"
        var $16=_wtouchln($14, 0, $15, 1); //@line 297 "_cursesmodule.c"
        var $17=_PyCursesCheckERR($16, ((__str8)&4294967295)); //@line 297 "_cursesmodule.c"
        HEAP[$0]=$17; //@line 297 "_cursesmodule.c"
        var $18=HEAP[$0]; //@line 297 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 297 "_cursesmodule.c"
        __label__ = 4; break; //@line 297 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 297 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 297 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_redrawwin($self, $args) {
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
        var $1=HEAP[$self_addr]; //@line 298 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 298 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 298 "_cursesmodule.c"
        var $4=(($3+4)&4294967295); //@line 298 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 298 "_cursesmodule.c"
        var $6=reSign(($5), 16, 0); //@line 298 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 298 "_cursesmodule.c"
        var $8=HEAP[$self_addr]; //@line 298 "_cursesmodule.c"
        var $9=(($8+8)&4294967295); //@line 298 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 298 "_cursesmodule.c"
        var $11=_wredrawln($10, 0, $7); //@line 298 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str9)&4294967295)); //@line 298 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 298 "_cursesmodule.c"
        var $13=HEAP[$0]; //@line 298 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 298 "_cursesmodule.c"
        __label__ = 1; break; //@line 298 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 298 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 298 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_winsertln($self, $args) {
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
        var $1=HEAP[$self_addr]; //@line 299 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 299 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 299 "_cursesmodule.c"
        var $4=_winsdelln($3, 1); //@line 299 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str10)&4294967295)); //@line 299 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 299 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 299 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 299 "_cursesmodule.c"
        __label__ = 1; break; //@line 299 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 299 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 299 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_werase($self, $args) {
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
        var $1=HEAP[$self_addr]; //@line 300 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 300 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 300 "_cursesmodule.c"
        var $4=_werase($3); //@line 300 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str11)&4294967295)); //@line 300 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 300 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 300 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 300 "_cursesmodule.c"
        __label__ = 1; break; //@line 300 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 300 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 300 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wdeleteln($self, $args) {
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
        var $1=HEAP[$self_addr]; //@line 301 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 301 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 301 "_cursesmodule.c"
        var $4=_winsdelln($3, -1); //@line 301 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str12)&4294967295)); //@line 301 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 301 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 301 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 301 "_cursesmodule.c"
        __label__ = 1; break; //@line 301 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 301 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 301 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_is_wintouched($self) {
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
        var $1=HEAP[$self_addr]; //@line 303 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 303 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 303 "_cursesmodule.c"
        var $4=_is_wintouched($3); //@line 303 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 303 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 303 "_cursesmodule.c"
        var $toBoolnot1=unSign(($toBoolnot), 1, 0); //@line 303 "_cursesmodule.c"
        var $toBool3=reSign(($toBoolnot1), 8, 0)!=0; //@line 303 "_cursesmodule.c"
        if ($toBool3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 303 "_cursesmodule.c"
      case 1: // $bb
        var $5=((__Py_ZeroStruct)&4294967295); //@line 303 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 303 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 303 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 303 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 303 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 303 "_cursesmodule.c"
        __label__ = 3; break; //@line 303 "_cursesmodule.c"
      case 2: // $bb4
        var $9=((__Py_TrueStruct)&4294967295); //@line 303 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 303 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 303 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 303 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 303 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 303 "_cursesmodule.c"
        __label__ = 3; break; //@line 303 "_cursesmodule.c"
      case 3: // $bb5
        var $13=HEAP[$0]; //@line 303 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 303 "_cursesmodule.c"
        __label__ = 4; break; //@line 303 "_cursesmodule.c"
      case 4: // $return
        var $retval6=HEAP[$retval]; //@line 303 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 303 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wsyncup($self) {
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
        var $1=HEAP[$self_addr]; //@line 305 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 305 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 305 "_cursesmodule.c"
        _wsyncup($3); //@line 305 "_cursesmodule.c"
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 305 "_cursesmodule.c"
        var $5=((($4) + 1)&4294967295); //@line 305 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 305 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 305 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 305 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 305 "_cursesmodule.c"
        __label__ = 1; break; //@line 305 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 305 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 305 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wsyncdown($self) {
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
        var $1=HEAP[$self_addr]; //@line 306 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 306 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 306 "_cursesmodule.c"
        _wsyncdown($3); //@line 306 "_cursesmodule.c"
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 306 "_cursesmodule.c"
        var $5=((($4) + 1)&4294967295); //@line 306 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 306 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 306 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 306 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 306 "_cursesmodule.c"
        __label__ = 1; break; //@line 306 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 306 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 306 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wstandend($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_13=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 307 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 307 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 307 "_cursesmodule.c"
        var $4=($3)!=0; //@line 307 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 307 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 307 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 307 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 307 "_cursesmodule.c"
        var $8=(($7+16)&4294967295); //@line 307 "_cursesmodule.c"
        HEAP[$8]=0; //@line 307 "_cursesmodule.c"
        HEAP[$iftmp_13]=0; //@line 307 "_cursesmodule.c"
        __label__ = 3; break; //@line 307 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_13]=-1; //@line 307 "_cursesmodule.c"
        __label__ = 3; break; //@line 307 "_cursesmodule.c"
      case 3: // $bb2
        var $9=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 307 "_cursesmodule.c"
        var $10=((($9) + 1)&4294967295); //@line 307 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$10; //@line 307 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 307 "_cursesmodule.c"
        var $11=HEAP[$0]; //@line 307 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 307 "_cursesmodule.c"
        __label__ = 4; break; //@line 307 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 307 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 307 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wstandout($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_14=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 308 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 308 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 308 "_cursesmodule.c"
        var $4=($3)!=0; //@line 308 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 308 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 308 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 308 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 308 "_cursesmodule.c"
        var $8=(($7+16)&4294967295); //@line 308 "_cursesmodule.c"
        HEAP[$8]=65536; //@line 308 "_cursesmodule.c"
        HEAP[$iftmp_14]=0; //@line 308 "_cursesmodule.c"
        __label__ = 3; break; //@line 308 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_14]=-1; //@line 308 "_cursesmodule.c"
        __label__ = 3; break; //@line 308 "_cursesmodule.c"
      case 3: // $bb2
        var $9=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 308 "_cursesmodule.c"
        var $10=((($9) + 1)&4294967295); //@line 308 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$10; //@line 308 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 308 "_cursesmodule.c"
        var $11=HEAP[$0]; //@line 308 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 308 "_cursesmodule.c"
        __label__ = 4; break; //@line 308 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 308 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 308 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wcursyncup($self) {
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
        var $1=HEAP[$self_addr]; //@line 309 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 309 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 309 "_cursesmodule.c"
        _wcursyncup($3); //@line 309 "_cursesmodule.c"
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 309 "_cursesmodule.c"
        var $5=((($4) + 1)&4294967295); //@line 309 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 309 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 309 "_cursesmodule.c"
        var $6=HEAP[$0]; //@line 309 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 309 "_cursesmodule.c"
        __label__ = 1; break; //@line 309 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 309 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 309 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wclrtoeol($self) {
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
        var $1=HEAP[$self_addr]; //@line 310 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 310 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 310 "_cursesmodule.c"
        var $4=_wclrtoeol($3); //@line 310 "_cursesmodule.c"
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 310 "_cursesmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 310 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 310 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 310 "_cursesmodule.c"
        var $7=HEAP[$0]; //@line 310 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 310 "_cursesmodule.c"
        __label__ = 1; break; //@line 310 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 310 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 310 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wclrtobot($self) {
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
        var $1=HEAP[$self_addr]; //@line 311 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 311 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 311 "_cursesmodule.c"
        var $4=_wclrtobot($3); //@line 311 "_cursesmodule.c"
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 311 "_cursesmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 311 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 311 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 311 "_cursesmodule.c"
        var $7=HEAP[$0]; //@line 311 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 311 "_cursesmodule.c"
        __label__ = 1; break; //@line 311 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 311 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 311 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wclear($self) {
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
        var $1=HEAP[$self_addr]; //@line 312 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 312 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 312 "_cursesmodule.c"
        var $4=_wclear($3); //@line 312 "_cursesmodule.c"
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 312 "_cursesmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 312 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 312 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 312 "_cursesmodule.c"
        var $7=HEAP[$0]; //@line 312 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 312 "_cursesmodule.c"
        __label__ = 1; break; //@line 312 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 312 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 312 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_idcok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 314 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 314 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 314 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 314 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 314 "_cursesmodule.c"
        __label__ = 3; break; //@line 314 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 314 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 314 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 314 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 314 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 314 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 314 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 314 "_cursesmodule.c"
        _idcok($9, $10); //@line 314 "_cursesmodule.c"
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 314 "_cursesmodule.c"
        var $12=((($11) + 1)&4294967295); //@line 314 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 314 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 314 "_cursesmodule.c"
        __label__ = 3; break; //@line 314 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 314 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 314 "_cursesmodule.c"
        __label__ = 4; break; //@line 314 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 314 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 314 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_immedok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 315 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 315 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 315 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 315 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 315 "_cursesmodule.c"
        __label__ = 3; break; //@line 315 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 315 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 315 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 315 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 315 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 315 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 315 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 315 "_cursesmodule.c"
        _immedok($9, $10); //@line 315 "_cursesmodule.c"
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 315 "_cursesmodule.c"
        var $12=((($11) + 1)&4294967295); //@line 315 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 315 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 315 "_cursesmodule.c"
        __label__ = 3; break; //@line 315 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 315 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 315 "_cursesmodule.c"
        __label__ = 4; break; //@line 315 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 315 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 315 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wtimeout($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 316 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str14)&4294967295), $arg1); //@line 316 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 316 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 316 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 316 "_cursesmodule.c"
        __label__ = 3; break; //@line 316 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 316 "_cursesmodule.c"
        var $5=HEAP[$self_addr]; //@line 316 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 316 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 316 "_cursesmodule.c"
        _wtimeout($7, $4); //@line 316 "_cursesmodule.c"
        var $8=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 316 "_cursesmodule.c"
        var $9=((($8) + 1)&4294967295); //@line 316 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$9; //@line 316 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 316 "_cursesmodule.c"
        __label__ = 3; break; //@line 316 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 316 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 316 "_cursesmodule.c"
        __label__ = 4; break; //@line 316 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 316 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 316 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_getyx($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_19=__stackBase__+12;
        var $iftmp_18=__stackBase__+16;
        var $arg1=__stackBase__+20;
        var $arg2=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 318 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 318 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 318 "_cursesmodule.c"
        var $4=($3)!=0; //@line 318 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 318 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 318 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 318 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 318 "_cursesmodule.c"
        var $8=(($7)&4294967295); //@line 318 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 318 "_cursesmodule.c"
        var $10=reSign(($9), 16, 0); //@line 318 "_cursesmodule.c"
        HEAP[$iftmp_18]=$10; //@line 318 "_cursesmodule.c"
        __label__ = 3; break; //@line 318 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_18]=-1; //@line 318 "_cursesmodule.c"
        __label__ = 3; break; //@line 318 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$iftmp_18]; //@line 318 "_cursesmodule.c"
        HEAP[$arg1]=$11; //@line 318 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 318 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 318 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 318 "_cursesmodule.c"
        var $15=($14)!=0; //@line 318 "_cursesmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 318 "_cursesmodule.c"
      case 4: // $bb3
        var $16=HEAP[$self_addr]; //@line 318 "_cursesmodule.c"
        var $17=(($16+8)&4294967295); //@line 318 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 318 "_cursesmodule.c"
        var $19=(($18+2)&4294967295); //@line 318 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 318 "_cursesmodule.c"
        var $21=reSign(($20), 16, 0); //@line 318 "_cursesmodule.c"
        HEAP[$iftmp_19]=$21; //@line 318 "_cursesmodule.c"
        __label__ = 6; break; //@line 318 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_19]=-1; //@line 318 "_cursesmodule.c"
        __label__ = 6; break; //@line 318 "_cursesmodule.c"
      case 6: // $bb5
        var $22=HEAP[$iftmp_19]; //@line 318 "_cursesmodule.c"
        HEAP[$arg2]=$22; //@line 318 "_cursesmodule.c"
        var $23=HEAP[$arg1]; //@line 318 "_cursesmodule.c"
        var $24=HEAP[$arg2]; //@line 318 "_cursesmodule.c"
        var $25=_Py_BuildValue(((__str15)&4294967295), $23, $24); //@line 318 "_cursesmodule.c"
        HEAP[$0]=$25; //@line 318 "_cursesmodule.c"
        var $26=HEAP[$0]; //@line 318 "_cursesmodule.c"
        HEAP[$retval]=$26; //@line 318 "_cursesmodule.c"
        __label__ = 7; break; //@line 318 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 318 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 318 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_getbegyx($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_21=__stackBase__+12;
        var $iftmp_20=__stackBase__+16;
        var $arg1=__stackBase__+20;
        var $arg2=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 319 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 319 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 319 "_cursesmodule.c"
        var $4=($3)!=0; //@line 319 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 319 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 319 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 319 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 319 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 319 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 319 "_cursesmodule.c"
        var $10=reSign(($9), 16, 0); //@line 319 "_cursesmodule.c"
        HEAP[$iftmp_20]=$10; //@line 319 "_cursesmodule.c"
        __label__ = 3; break; //@line 319 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_20]=-1; //@line 319 "_cursesmodule.c"
        __label__ = 3; break; //@line 319 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$iftmp_20]; //@line 319 "_cursesmodule.c"
        HEAP[$arg1]=$11; //@line 319 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 319 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 319 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 319 "_cursesmodule.c"
        var $15=($14)!=0; //@line 319 "_cursesmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 319 "_cursesmodule.c"
      case 4: // $bb3
        var $16=HEAP[$self_addr]; //@line 319 "_cursesmodule.c"
        var $17=(($16+8)&4294967295); //@line 319 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 319 "_cursesmodule.c"
        var $19=(($18+10)&4294967295); //@line 319 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 319 "_cursesmodule.c"
        var $21=reSign(($20), 16, 0); //@line 319 "_cursesmodule.c"
        HEAP[$iftmp_21]=$21; //@line 319 "_cursesmodule.c"
        __label__ = 6; break; //@line 319 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_21]=-1; //@line 319 "_cursesmodule.c"
        __label__ = 6; break; //@line 319 "_cursesmodule.c"
      case 6: // $bb5
        var $22=HEAP[$iftmp_21]; //@line 319 "_cursesmodule.c"
        HEAP[$arg2]=$22; //@line 319 "_cursesmodule.c"
        var $23=HEAP[$arg1]; //@line 319 "_cursesmodule.c"
        var $24=HEAP[$arg2]; //@line 319 "_cursesmodule.c"
        var $25=_Py_BuildValue(((__str15)&4294967295), $23, $24); //@line 319 "_cursesmodule.c"
        HEAP[$0]=$25; //@line 319 "_cursesmodule.c"
        var $26=HEAP[$0]; //@line 319 "_cursesmodule.c"
        HEAP[$retval]=$26; //@line 319 "_cursesmodule.c"
        __label__ = 7; break; //@line 319 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 319 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 319 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_getmaxyx($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_23=__stackBase__+12;
        var $iftmp_22=__stackBase__+16;
        var $arg1=__stackBase__+20;
        var $arg2=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 320 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 320 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 320 "_cursesmodule.c"
        var $4=($3)!=0; //@line 320 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 320 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 320 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 320 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 320 "_cursesmodule.c"
        var $8=(($7+4)&4294967295); //@line 320 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 320 "_cursesmodule.c"
        var $10=reSign(($9), 16, 0); //@line 320 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 320 "_cursesmodule.c"
        HEAP[$iftmp_22]=$11; //@line 320 "_cursesmodule.c"
        __label__ = 3; break; //@line 320 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_22]=-1; //@line 320 "_cursesmodule.c"
        __label__ = 3; break; //@line 320 "_cursesmodule.c"
      case 3: // $bb2
        var $12=HEAP[$iftmp_22]; //@line 320 "_cursesmodule.c"
        HEAP[$arg1]=$12; //@line 320 "_cursesmodule.c"
        var $13=HEAP[$self_addr]; //@line 320 "_cursesmodule.c"
        var $14=(($13+8)&4294967295); //@line 320 "_cursesmodule.c"
        var $15=HEAP[$14]; //@line 320 "_cursesmodule.c"
        var $16=($15)!=0; //@line 320 "_cursesmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 320 "_cursesmodule.c"
      case 4: // $bb3
        var $17=HEAP[$self_addr]; //@line 320 "_cursesmodule.c"
        var $18=(($17+8)&4294967295); //@line 320 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 320 "_cursesmodule.c"
        var $20=(($19+6)&4294967295); //@line 320 "_cursesmodule.c"
        var $21=HEAP[$20]; //@line 320 "_cursesmodule.c"
        var $22=reSign(($21), 16, 0); //@line 320 "_cursesmodule.c"
        var $23=((($22) + 1)&4294967295); //@line 320 "_cursesmodule.c"
        HEAP[$iftmp_23]=$23; //@line 320 "_cursesmodule.c"
        __label__ = 6; break; //@line 320 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_23]=-1; //@line 320 "_cursesmodule.c"
        __label__ = 6; break; //@line 320 "_cursesmodule.c"
      case 6: // $bb5
        var $24=HEAP[$iftmp_23]; //@line 320 "_cursesmodule.c"
        HEAP[$arg2]=$24; //@line 320 "_cursesmodule.c"
        var $25=HEAP[$arg1]; //@line 320 "_cursesmodule.c"
        var $26=HEAP[$arg2]; //@line 320 "_cursesmodule.c"
        var $27=_Py_BuildValue(((__str15)&4294967295), $25, $26); //@line 320 "_cursesmodule.c"
        HEAP[$0]=$27; //@line 320 "_cursesmodule.c"
        var $28=HEAP[$0]; //@line 320 "_cursesmodule.c"
        HEAP[$retval]=$28; //@line 320 "_cursesmodule.c"
        __label__ = 7; break; //@line 320 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 320 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 320 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_getparyx($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_25=__stackBase__+12;
        var $iftmp_24=__stackBase__+16;
        var $arg1=__stackBase__+20;
        var $arg2=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 321 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 321 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 321 "_cursesmodule.c"
        var $4=($3)!=0; //@line 321 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 321 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 321 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 321 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 321 "_cursesmodule.c"
        var $8=(($7+52)&4294967295); //@line 321 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 321 "_cursesmodule.c"
        HEAP[$iftmp_24]=$9; //@line 321 "_cursesmodule.c"
        __label__ = 3; break; //@line 321 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$iftmp_24]=-1; //@line 321 "_cursesmodule.c"
        __label__ = 3; break; //@line 321 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[$iftmp_24]; //@line 321 "_cursesmodule.c"
        HEAP[$arg1]=$10; //@line 321 "_cursesmodule.c"
        var $11=HEAP[$self_addr]; //@line 321 "_cursesmodule.c"
        var $12=(($11+8)&4294967295); //@line 321 "_cursesmodule.c"
        var $13=HEAP[$12]; //@line 321 "_cursesmodule.c"
        var $14=($13)!=0; //@line 321 "_cursesmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 321 "_cursesmodule.c"
      case 4: // $bb3
        var $15=HEAP[$self_addr]; //@line 321 "_cursesmodule.c"
        var $16=(($15+8)&4294967295); //@line 321 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 321 "_cursesmodule.c"
        var $18=(($17+48)&4294967295); //@line 321 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 321 "_cursesmodule.c"
        HEAP[$iftmp_25]=$19; //@line 321 "_cursesmodule.c"
        __label__ = 6; break; //@line 321 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_25]=-1; //@line 321 "_cursesmodule.c"
        __label__ = 6; break; //@line 321 "_cursesmodule.c"
      case 6: // $bb5
        var $20=HEAP[$iftmp_25]; //@line 321 "_cursesmodule.c"
        HEAP[$arg2]=$20; //@line 321 "_cursesmodule.c"
        var $21=HEAP[$arg1]; //@line 321 "_cursesmodule.c"
        var $22=HEAP[$arg2]; //@line 321 "_cursesmodule.c"
        var $23=_Py_BuildValue(((__str15)&4294967295), $21, $22); //@line 321 "_cursesmodule.c"
        HEAP[$0]=$23; //@line 321 "_cursesmodule.c"
        var $24=HEAP[$0]; //@line 321 "_cursesmodule.c"
        HEAP[$retval]=$24; //@line 321 "_cursesmodule.c"
        __label__ = 7; break; //@line 321 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 321 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 321 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_clearok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 323 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 323 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 323 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 323 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 323 "_cursesmodule.c"
        __label__ = 3; break; //@line 323 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 323 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 323 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 323 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 323 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 323 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 323 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 323 "_cursesmodule.c"
        var $11=_clearok($9, $10); //@line 323 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str16)&4294967295)); //@line 323 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 323 "_cursesmodule.c"
        __label__ = 3; break; //@line 323 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 323 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 323 "_cursesmodule.c"
        __label__ = 4; break; //@line 323 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 323 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 323 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_idlok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 324 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 324 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 324 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 324 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 324 "_cursesmodule.c"
        __label__ = 3; break; //@line 324 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 324 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 324 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 324 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 324 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 324 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 324 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 324 "_cursesmodule.c"
        var $11=_idlok($9, $10); //@line 324 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str17)&4294967295)); //@line 324 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 324 "_cursesmodule.c"
        __label__ = 3; break; //@line 324 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 324 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 324 "_cursesmodule.c"
        __label__ = 4; break; //@line 324 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 324 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 324 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_keypad($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 328 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 328 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 328 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 328 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 328 "_cursesmodule.c"
        __label__ = 3; break; //@line 328 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 328 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 328 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 328 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 328 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 328 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 328 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 328 "_cursesmodule.c"
        var $11=_keypad($9, $10); //@line 328 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str18)&4294967295)); //@line 328 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 328 "_cursesmodule.c"
        __label__ = 3; break; //@line 328 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 328 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 328 "_cursesmodule.c"
        __label__ = 4; break; //@line 328 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 328 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 328 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_leaveok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 330 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 330 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 330 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 330 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 330 "_cursesmodule.c"
        __label__ = 3; break; //@line 330 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 330 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 330 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 330 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 330 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 330 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 330 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 330 "_cursesmodule.c"
        var $11=_leaveok($9, $10); //@line 330 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str19)&4294967295)); //@line 330 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 330 "_cursesmodule.c"
        __label__ = 3; break; //@line 330 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 330 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 330 "_cursesmodule.c"
        __label__ = 4; break; //@line 330 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 330 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 330 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_nodelay($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 334 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 334 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 334 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 334 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 334 "_cursesmodule.c"
        __label__ = 3; break; //@line 334 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 334 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 334 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 334 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 334 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 334 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 334 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 334 "_cursesmodule.c"
        var $11=_nodelay($9, $10); //@line 334 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str20)&4294967295)); //@line 334 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 334 "_cursesmodule.c"
        __label__ = 3; break; //@line 334 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 334 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 334 "_cursesmodule.c"
        __label__ = 4; break; //@line 334 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 334 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 334 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_notimeout($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 336 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 336 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 336 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 336 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 336 "_cursesmodule.c"
        __label__ = 3; break; //@line 336 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 336 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 336 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 336 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 336 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 336 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 336 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 336 "_cursesmodule.c"
        var $11=_notimeout($9, $10); //@line 336 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str21)&4294967295)); //@line 336 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 336 "_cursesmodule.c"
        __label__ = 3; break; //@line 336 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 336 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 336 "_cursesmodule.c"
        __label__ = 4; break; //@line 336 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 336 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 336 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_scrollok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 337 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 337 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 337 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 337 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 337 "_cursesmodule.c"
        __label__ = 3; break; //@line 337 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 337 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 337 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 337 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 337 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 337 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 337 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 337 "_cursesmodule.c"
        var $11=_scrollok($9, $10); //@line 337 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str22)&4294967295)); //@line 337 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 337 "_cursesmodule.c"
        __label__ = 3; break; //@line 337 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 337 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 337 "_cursesmodule.c"
        __label__ = 4; break; //@line 337 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 337 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 337 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_winsdelln($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 338 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str23)&4294967295), $arg1); //@line 338 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 338 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 338 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 338 "_cursesmodule.c"
        __label__ = 3; break; //@line 338 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 338 "_cursesmodule.c"
        var $5=HEAP[$self_addr]; //@line 338 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 338 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 338 "_cursesmodule.c"
        var $8=_winsdelln($7, $4); //@line 338 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str24)&4294967295)); //@line 338 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 338 "_cursesmodule.c"
        __label__ = 3; break; //@line 338 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 338 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 338 "_cursesmodule.c"
        __label__ = 4; break; //@line 338 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 338 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 338 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_syncok($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 339 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str13)&4294967295), $arg1); //@line 339 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 339 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 339 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 339 "_cursesmodule.c"
        __label__ = 3; break; //@line 339 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg1]; //@line 339 "_cursesmodule.c"
        var $5=((($4))|0)!=0; //@line 339 "_cursesmodule.c"
        var $6=unSign(($5), 1, 0); //@line 339 "_cursesmodule.c"
        var $7=HEAP[$self_addr]; //@line 339 "_cursesmodule.c"
        var $8=(($7+8)&4294967295); //@line 339 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 339 "_cursesmodule.c"
        var $10=((($6)) & 255); //@line 339 "_cursesmodule.c"
        var $11=_syncok($9, $10); //@line 339 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str25)&4294967295)); //@line 339 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 339 "_cursesmodule.c"
        __label__ = 3; break; //@line 339 "_cursesmodule.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 339 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 339 "_cursesmodule.c"
        __label__ = 4; break; //@line 339 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 339 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 339 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_mvwin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $arg2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 341 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str26)&4294967295), $arg1, $arg2); //@line 341 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 341 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 341 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 341 "_cursesmodule.c"
        __label__ = 3; break; //@line 341 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg2]; //@line 341 "_cursesmodule.c"
        var $5=HEAP[$arg1]; //@line 341 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 341 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 341 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 341 "_cursesmodule.c"
        var $9=_mvwin($8, $5, $4); //@line 341 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str27)&4294967295)); //@line 341 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 341 "_cursesmodule.c"
        __label__ = 3; break; //@line 341 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 341 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 341 "_cursesmodule.c"
        __label__ = 4; break; //@line 341 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 341 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 341 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_mvderwin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $arg2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 342 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str26)&4294967295), $arg1, $arg2); //@line 342 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 342 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 342 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 342 "_cursesmodule.c"
        __label__ = 3; break; //@line 342 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg2]; //@line 342 "_cursesmodule.c"
        var $5=HEAP[$arg1]; //@line 342 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 342 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 342 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 342 "_cursesmodule.c"
        var $9=_mvderwin($8, $5, $4); //@line 342 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str28)&4294967295)); //@line 342 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 342 "_cursesmodule.c"
        __label__ = 3; break; //@line 342 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 342 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 342 "_cursesmodule.c"
        __label__ = 4; break; //@line 342 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 342 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 342 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wmove($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $arg2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 343 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str26)&4294967295), $arg1, $arg2); //@line 343 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 343 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 343 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 343 "_cursesmodule.c"
        __label__ = 3; break; //@line 343 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg2]; //@line 343 "_cursesmodule.c"
        var $5=HEAP[$arg1]; //@line 343 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 343 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 343 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 343 "_cursesmodule.c"
        var $9=_wmove($8, $5, $4); //@line 343 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str29)&4294967295)); //@line 343 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 343 "_cursesmodule.c"
        __label__ = 3; break; //@line 343 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 343 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 343 "_cursesmodule.c"
        __label__ = 4; break; //@line 343 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 343 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 343 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_wresize($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $arg1=__stackBase__+16;
        var $arg2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 345 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str30)&4294967295), $arg1, $arg2); //@line 345 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 345 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 345 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 345 "_cursesmodule.c"
        __label__ = 3; break; //@line 345 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg2]; //@line 345 "_cursesmodule.c"
        var $5=HEAP[$arg1]; //@line 345 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 345 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 345 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 345 "_cursesmodule.c"
        var $9=_wresize($8, $5, $4); //@line 345 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str31)&4294967295)); //@line 345 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 345 "_cursesmodule.c"
        __label__ = 3; break; //@line 345 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 345 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 345 "_cursesmodule.c"
        __label__ = 4; break; //@line 345 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 345 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 345 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_New($win) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $win_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_44=__stackBase__+12;
        var $iftmp_43=__stackBase__+16;
        var $wo=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$win_addr]=$win;
        var $1=HEAP[((_PyCursesWindow_Type+16)&4294967295)]; //@line 355 "_cursesmodule.c"
        var $2=((($1))|0) >= 0; //@line 355 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 355 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[((_PyCursesWindow_Type+16)&4294967295)]; //@line 355 "_cursesmodule.c"
        var $4=((($3))|0)!=0; //@line 355 "_cursesmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 355 "_cursesmodule.c"
      case 2: // $bb1
        var $5=HEAP[((_PyCursesWindow_Type+16)&4294967295)]; //@line 355 "_cursesmodule.c"
        HEAP[$iftmp_44]=$5; //@line 355 "_cursesmodule.c"
        __label__ = 4; break; //@line 355 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$iftmp_44]=1; //@line 355 "_cursesmodule.c"
        __label__ = 4; break; //@line 355 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$iftmp_44]; //@line 355 "_cursesmodule.c"
        var $7=_malloc($6); //@line 355 "_cursesmodule.c"
        var $8=$7; //@line 355 "_cursesmodule.c"
        HEAP[$iftmp_43]=$8; //@line 355 "_cursesmodule.c"
        __label__ = 6; break; //@line 355 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_43]=0; //@line 355 "_cursesmodule.c"
        __label__ = 6; break; //@line 355 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$iftmp_43]; //@line 355 "_cursesmodule.c"
        var $10=_PyObject_Init($9, _PyCursesWindow_Type); //@line 355 "_cursesmodule.c"
        var $11=$10; //@line 355 "_cursesmodule.c"
        HEAP[$wo]=$11; //@line 355 "_cursesmodule.c"
        var $12=HEAP[$wo]; //@line 356 "_cursesmodule.c"
        var $13=($12)==0; //@line 356 "_cursesmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 356 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 356 "_cursesmodule.c"
        __label__ = 9; break; //@line 356 "_cursesmodule.c"
      case 8: // $bb7
        var $14=HEAP[$wo]; //@line 357 "_cursesmodule.c"
        var $15=(($14+8)&4294967295); //@line 357 "_cursesmodule.c"
        var $16=HEAP[$win_addr]; //@line 357 "_cursesmodule.c"
        HEAP[$15]=$16; //@line 357 "_cursesmodule.c"
        var $17=HEAP[$wo]; //@line 358 "_cursesmodule.c"
        var $18=$17; //@line 358 "_cursesmodule.c"
        HEAP[$0]=$18; //@line 358 "_cursesmodule.c"
        __label__ = 9; break; //@line 358 "_cursesmodule.c"
      case 9: // $bb8
        var $19=HEAP[$0]; //@line 356 "_cursesmodule.c"
        HEAP[$retval]=$19; //@line 356 "_cursesmodule.c"
        __label__ = 10; break; //@line 356 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 356 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 356 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Dealloc($wo) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $wo_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$wo_addr]=$wo;
        var $0=HEAP[$wo_addr]; //@line 364 "_cursesmodule.c"
        var $1=(($0+8)&4294967295); //@line 364 "_cursesmodule.c"
        var $2=HEAP[$1]; //@line 364 "_cursesmodule.c"
        var $3=HEAP[_stdscr]; //@line 364 "_cursesmodule.c"
        var $4=($2)!=($3); //@line 364 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 364 "_cursesmodule.c"
      case 1: // $bb
        var $5=HEAP[$wo_addr]; //@line 364 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 364 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 364 "_cursesmodule.c"
        var $8=_delwin($7); //@line 364 "_cursesmodule.c"
        __label__ = 2; break; //@line 364 "_cursesmodule.c"
      case 2: // $bb1
        var $9=HEAP[$wo_addr]; //@line 365 "_cursesmodule.c"
        var $10=$9; //@line 365 "_cursesmodule.c"
        _free($10); //@line 365 "_cursesmodule.c"
        __label__ = 3; break; //@line 366 "_cursesmodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 366 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AddCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_51=__stackBase__+12;
        var $0=__stackBase__+16;
        var $rtn=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $use_xy=__stackBase__+32;
        var $temp=__stackBase__+36;
        var $ch=__stackBase__+40;
        var $attr=__stackBase__+44;
        var $lattr=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$use_xy]=0; //@line 373 "_cursesmodule.c"
        HEAP[$ch]=0; //@line 375 "_cursesmodule.c"
        HEAP[$attr]=0; //@line 376 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 379 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 379 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else if ($2 == 3) {
          __label__ = 7; break;
        }
        else if ($2 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 381 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str32)&4294967295), $temp); //@line 381 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 381 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 381 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 382 "_cursesmodule.c"
        __label__ = 23; break; //@line 382 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 382 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 385 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str33)&4294967295), $temp, $lattr); //@line 385 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 385 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 385 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 386 "_cursesmodule.c"
        __label__ = 23; break; //@line 386 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 387 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 387 "_cursesmodule.c"
        __label__ = 14; break; //@line 387 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 390 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str34)&4294967295), $y, $x, $temp); //@line 390 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 390 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 390 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 391 "_cursesmodule.c"
        __label__ = 23; break; //@line 391 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 392 "_cursesmodule.c"
        __label__ = 14; break; //@line 392 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 395 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str35)&4294967295), $y, $x, $temp, $lattr); //@line 395 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 395 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 395 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 397 "_cursesmodule.c"
        __label__ = 23; break; //@line 397 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 398 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 398 "_cursesmodule.c"
        HEAP[$use_xy]=1; //@line 399 "_cursesmodule.c"
        __label__ = 14; break; //@line 399 "_cursesmodule.c"
      case 13: // $bb12
        var $17=HEAP[_PyExc_TypeError]; //@line 402 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str36)&4294967295)); //@line 402 "_cursesmodule.c"
        HEAP[$0]=0; //@line 403 "_cursesmodule.c"
        __label__ = 23; break; //@line 403 "_cursesmodule.c"
      case 14: // $bb13
        var $18=HEAP[$temp]; //@line 406 "_cursesmodule.c"
        var $19=_PyCurses_ConvertToChtype($18, $ch); //@line 406 "_cursesmodule.c"
        var $20=((($19))|0)==0; //@line 406 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 406 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[_PyExc_TypeError]; //@line 407 "_cursesmodule.c"
        _PyErr_SetString($21, ((__str37)&4294967295)); //@line 407 "_cursesmodule.c"
        HEAP[$0]=0; //@line 408 "_cursesmodule.c"
        __label__ = 23; break; //@line 408 "_cursesmodule.c"
      case 16: // $bb15
        var $22=HEAP[$use_xy]; //@line 411 "_cursesmodule.c"
        var $23=((($22))|0)==1; //@line 411 "_cursesmodule.c"
        if ($23) { __label__ = 17; break; } else { __label__ = 21; break; } //@line 411 "_cursesmodule.c"
      case 17: // $bb16
        var $24=HEAP[$x]; //@line 412 "_cursesmodule.c"
        var $25=HEAP[$y]; //@line 412 "_cursesmodule.c"
        var $26=HEAP[$self_addr]; //@line 412 "_cursesmodule.c"
        var $27=(($26+8)&4294967295); //@line 412 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 412 "_cursesmodule.c"
        var $29=_wmove($28, $25, $24); //@line 412 "_cursesmodule.c"
        var $30=((($29))|0)!=-1; //@line 412 "_cursesmodule.c"
        if ($30) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 412 "_cursesmodule.c"
      case 18: // $bb17
        var $31=HEAP[$ch]; //@line 412 "_cursesmodule.c"
        var $32=HEAP[$attr]; //@line 412 "_cursesmodule.c"
        var $33=($31) | ($32); //@line 412 "_cursesmodule.c"
        var $34=HEAP[$self_addr]; //@line 412 "_cursesmodule.c"
        var $35=(($34+8)&4294967295); //@line 412 "_cursesmodule.c"
        var $36=HEAP[$35]; //@line 412 "_cursesmodule.c"
        var $37=_waddch($36, $33); //@line 412 "_cursesmodule.c"
        HEAP[$iftmp_51]=$37; //@line 412 "_cursesmodule.c"
        __label__ = 20; break; //@line 412 "_cursesmodule.c"
      case 19: // $bb18
        HEAP[$iftmp_51]=-1; //@line 412 "_cursesmodule.c"
        __label__ = 20; break; //@line 412 "_cursesmodule.c"
      case 20: // $bb19
        var $38=HEAP[$iftmp_51]; //@line 412 "_cursesmodule.c"
        HEAP[$rtn]=$38; //@line 412 "_cursesmodule.c"
        __label__ = 22; break; //@line 412 "_cursesmodule.c"
      case 21: // $bb20
        var $39=HEAP[$ch]; //@line 414 "_cursesmodule.c"
        var $40=HEAP[$attr]; //@line 414 "_cursesmodule.c"
        var $41=($39) | ($40); //@line 414 "_cursesmodule.c"
        var $42=HEAP[$self_addr]; //@line 414 "_cursesmodule.c"
        var $43=(($42+8)&4294967295); //@line 414 "_cursesmodule.c"
        var $44=HEAP[$43]; //@line 414 "_cursesmodule.c"
        var $45=_waddch($44, $41); //@line 414 "_cursesmodule.c"
        HEAP[$rtn]=$45; //@line 414 "_cursesmodule.c"
        __label__ = 22; break; //@line 414 "_cursesmodule.c"
      case 22: // $bb21
        var $46=HEAP[$rtn]; //@line 416 "_cursesmodule.c"
        var $47=_PyCursesCheckERR($46, ((__str38)&4294967295)); //@line 416 "_cursesmodule.c"
        HEAP[$0]=$47; //@line 416 "_cursesmodule.c"
        __label__ = 23; break; //@line 416 "_cursesmodule.c"
      case 23: // $bb22
        var $48=HEAP[$0]; //@line 382 "_cursesmodule.c"
        HEAP[$retval]=$48; //@line 382 "_cursesmodule.c"
        __label__ = 24; break; //@line 382 "_cursesmodule.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 382 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 382 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AddStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_66=__stackBase__+12;
        var $iftmp_61=__stackBase__+16;
        var $iftmp_60=__stackBase__+20;
        var $iftmp_59=__stackBase__+24;
        var $0=__stackBase__+28;
        var $rtn=__stackBase__+32;
        var $x=__stackBase__+36;
        var $y=__stackBase__+40;
        var $str=__stackBase__+44;
        var $attr=__stackBase__+48;
        var $attr_old=__stackBase__+52;
        var $lattr=__stackBase__+56;
        var $use_xy=__stackBase__+60;
        var $use_attr=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 425 "_cursesmodule.c"
        HEAP[$attr_old]=0; //@line 425 "_cursesmodule.c"
        HEAP[$use_xy]=0; //@line 427 "_cursesmodule.c"
        HEAP[$use_attr]=0; //@line 427 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 429 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 429 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else if ($2 == 3) {
          __label__ = 7; break;
        }
        else if ($2 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 431 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str39)&4294967295), $str); //@line 431 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 431 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 431 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 432 "_cursesmodule.c"
        __label__ = 32; break; //@line 432 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 432 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 435 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str40)&4294967295), $str, $lattr); //@line 435 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 435 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 435 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 436 "_cursesmodule.c"
        __label__ = 32; break; //@line 436 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 437 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 437 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 438 "_cursesmodule.c"
        __label__ = 14; break; //@line 438 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 441 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str41)&4294967295), $y, $x, $str); //@line 441 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 441 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 441 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 442 "_cursesmodule.c"
        __label__ = 32; break; //@line 442 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 443 "_cursesmodule.c"
        __label__ = 14; break; //@line 443 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 446 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str42)&4294967295), $y, $x, $str, $lattr); //@line 446 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 446 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 446 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 447 "_cursesmodule.c"
        __label__ = 32; break; //@line 447 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 448 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 448 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 449 "_cursesmodule.c"
        var $17=HEAP[$use_attr]; //@line 449 "_cursesmodule.c"
        HEAP[$use_xy]=$17; //@line 449 "_cursesmodule.c"
        __label__ = 14; break; //@line 449 "_cursesmodule.c"
      case 13: // $bb12
        var $18=HEAP[_PyExc_TypeError]; //@line 452 "_cursesmodule.c"
        _PyErr_SetString($18, ((__str43)&4294967295)); //@line 452 "_cursesmodule.c"
        HEAP[$0]=0; //@line 453 "_cursesmodule.c"
        __label__ = 32; break; //@line 453 "_cursesmodule.c"
      case 14: // $bb13
        var $19=HEAP[$use_attr]; //@line 456 "_cursesmodule.c"
        var $20=((($19))|0)==1; //@line 456 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 21; break; } //@line 456 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[$self_addr]; //@line 457 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 457 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 457 "_cursesmodule.c"
        var $24=($23)!=0; //@line 457 "_cursesmodule.c"
        if ($24) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 457 "_cursesmodule.c"
      case 16: // $bb15
        var $25=HEAP[$self_addr]; //@line 457 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 457 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 457 "_cursesmodule.c"
        var $28=(($27+16)&4294967295); //@line 457 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 457 "_cursesmodule.c"
        HEAP[$iftmp_59]=$29; //@line 457 "_cursesmodule.c"
        __label__ = 18; break; //@line 457 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$iftmp_59]=0; //@line 457 "_cursesmodule.c"
        __label__ = 18; break; //@line 457 "_cursesmodule.c"
      case 18: // $bb17
        var $30=HEAP[$iftmp_59]; //@line 457 "_cursesmodule.c"
        HEAP[$attr_old]=$30; //@line 457 "_cursesmodule.c"
        var $31=HEAP[$self_addr]; //@line 458 "_cursesmodule.c"
        var $32=(($31+8)&4294967295); //@line 458 "_cursesmodule.c"
        var $33=HEAP[$32]; //@line 458 "_cursesmodule.c"
        var $34=($33)!=0; //@line 458 "_cursesmodule.c"
        if ($34) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 458 "_cursesmodule.c"
      case 19: // $bb18
        var $35=HEAP[$self_addr]; //@line 458 "_cursesmodule.c"
        var $36=(($35+8)&4294967295); //@line 458 "_cursesmodule.c"
        var $37=HEAP[$36]; //@line 458 "_cursesmodule.c"
        var $38=(($37+16)&4294967295); //@line 458 "_cursesmodule.c"
        var $39=HEAP[$attr]; //@line 458 "_cursesmodule.c"
        HEAP[$38]=$39; //@line 458 "_cursesmodule.c"
        HEAP[$iftmp_60]=0; //@line 458 "_cursesmodule.c"
        __label__ = 21; break; //@line 458 "_cursesmodule.c"
      case 20: // $bb19
        HEAP[$iftmp_60]=-1; //@line 458 "_cursesmodule.c"
        __label__ = 21; break; //@line 458 "_cursesmodule.c"
      case 21: // $bb20
        var $40=HEAP[$use_xy]; //@line 460 "_cursesmodule.c"
        var $41=((($40))|0)==1; //@line 460 "_cursesmodule.c"
        if ($41) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 460 "_cursesmodule.c"
      case 22: // $bb21
        var $42=HEAP[$x]; //@line 461 "_cursesmodule.c"
        var $43=HEAP[$y]; //@line 461 "_cursesmodule.c"
        var $44=HEAP[$self_addr]; //@line 461 "_cursesmodule.c"
        var $45=(($44+8)&4294967295); //@line 461 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 461 "_cursesmodule.c"
        var $47=_wmove($46, $43, $42); //@line 461 "_cursesmodule.c"
        var $48=((($47))|0)!=-1; //@line 461 "_cursesmodule.c"
        if ($48) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 461 "_cursesmodule.c"
      case 23: // $bb22
        var $49=HEAP[$str]; //@line 461 "_cursesmodule.c"
        var $50=HEAP[$self_addr]; //@line 461 "_cursesmodule.c"
        var $51=(($50+8)&4294967295); //@line 461 "_cursesmodule.c"
        var $52=HEAP[$51]; //@line 461 "_cursesmodule.c"
        var $53=_waddnstr($52, $49, -1); //@line 461 "_cursesmodule.c"
        HEAP[$iftmp_61]=$53; //@line 461 "_cursesmodule.c"
        __label__ = 25; break; //@line 461 "_cursesmodule.c"
      case 24: // $bb23
        HEAP[$iftmp_61]=-1; //@line 461 "_cursesmodule.c"
        __label__ = 25; break; //@line 461 "_cursesmodule.c"
      case 25: // $bb24
        var $54=HEAP[$iftmp_61]; //@line 461 "_cursesmodule.c"
        HEAP[$rtn]=$54; //@line 461 "_cursesmodule.c"
        __label__ = 27; break; //@line 461 "_cursesmodule.c"
      case 26: // $bb25
        var $55=HEAP[$str]; //@line 463 "_cursesmodule.c"
        var $56=HEAP[$self_addr]; //@line 463 "_cursesmodule.c"
        var $57=(($56+8)&4294967295); //@line 463 "_cursesmodule.c"
        var $58=HEAP[$57]; //@line 463 "_cursesmodule.c"
        var $59=_waddnstr($58, $55, -1); //@line 463 "_cursesmodule.c"
        HEAP[$rtn]=$59; //@line 463 "_cursesmodule.c"
        __label__ = 27; break; //@line 463 "_cursesmodule.c"
      case 27: // $bb26
        var $60=HEAP[$use_attr]; //@line 464 "_cursesmodule.c"
        var $61=((($60))|0)==1; //@line 464 "_cursesmodule.c"
        if ($61) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 464 "_cursesmodule.c"
      case 28: // $bb27
        var $62=HEAP[$self_addr]; //@line 465 "_cursesmodule.c"
        var $63=(($62+8)&4294967295); //@line 465 "_cursesmodule.c"
        var $64=HEAP[$63]; //@line 465 "_cursesmodule.c"
        var $65=($64)!=0; //@line 465 "_cursesmodule.c"
        if ($65) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 465 "_cursesmodule.c"
      case 29: // $bb28
        var $66=HEAP[$self_addr]; //@line 465 "_cursesmodule.c"
        var $67=(($66+8)&4294967295); //@line 465 "_cursesmodule.c"
        var $68=HEAP[$67]; //@line 465 "_cursesmodule.c"
        var $69=(($68+16)&4294967295); //@line 465 "_cursesmodule.c"
        var $70=HEAP[$attr_old]; //@line 465 "_cursesmodule.c"
        HEAP[$69]=$70; //@line 465 "_cursesmodule.c"
        HEAP[$iftmp_66]=0; //@line 465 "_cursesmodule.c"
        __label__ = 31; break; //@line 465 "_cursesmodule.c"
      case 30: // $bb29
        HEAP[$iftmp_66]=-1; //@line 465 "_cursesmodule.c"
        __label__ = 31; break; //@line 465 "_cursesmodule.c"
      case 31: // $bb30
        var $71=HEAP[$rtn]; //@line 466 "_cursesmodule.c"
        var $72=_PyCursesCheckERR($71, ((__str44)&4294967295)); //@line 466 "_cursesmodule.c"
        HEAP[$0]=$72; //@line 466 "_cursesmodule.c"
        __label__ = 32; break; //@line 466 "_cursesmodule.c"
      case 32: // $bb31
        var $73=HEAP[$0]; //@line 432 "_cursesmodule.c"
        HEAP[$retval]=$73; //@line 432 "_cursesmodule.c"
        __label__ = 33; break; //@line 432 "_cursesmodule.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 432 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 432 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AddNStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_79=__stackBase__+12;
        var $iftmp_72=__stackBase__+16;
        var $iftmp_71=__stackBase__+20;
        var $iftmp_70=__stackBase__+24;
        var $0=__stackBase__+28;
        var $rtn=__stackBase__+32;
        var $x=__stackBase__+36;
        var $y=__stackBase__+40;
        var $n=__stackBase__+44;
        var $str=__stackBase__+48;
        var $attr=__stackBase__+52;
        var $attr_old=__stackBase__+56;
        var $lattr=__stackBase__+60;
        var $use_xy=__stackBase__+64;
        var $use_attr=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 474 "_cursesmodule.c"
        HEAP[$attr_old]=0; //@line 474 "_cursesmodule.c"
        HEAP[$use_xy]=0; //@line 476 "_cursesmodule.c"
        HEAP[$use_attr]=0; //@line 476 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 478 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 478 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 4; break;
        }
        else if ($2 == 4) {
          __label__ = 7; break;
        }
        else if ($2 == 5) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 480 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str45)&4294967295), $str, $n); //@line 480 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 480 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 480 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 481 "_cursesmodule.c"
        __label__ = 32; break; //@line 481 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 481 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 484 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str46)&4294967295), $str, $n, $lattr); //@line 484 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 484 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 484 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 485 "_cursesmodule.c"
        __label__ = 32; break; //@line 485 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 486 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 486 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 487 "_cursesmodule.c"
        __label__ = 14; break; //@line 487 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 490 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str47)&4294967295), $y, $x, $str, $n); //@line 490 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 490 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 490 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 491 "_cursesmodule.c"
        __label__ = 32; break; //@line 491 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 492 "_cursesmodule.c"
        __label__ = 14; break; //@line 492 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 495 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str48)&4294967295), $y, $x, $str, $n, $lattr); //@line 495 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 495 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 495 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 496 "_cursesmodule.c"
        __label__ = 32; break; //@line 496 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 497 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 497 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 498 "_cursesmodule.c"
        var $17=HEAP[$use_attr]; //@line 498 "_cursesmodule.c"
        HEAP[$use_xy]=$17; //@line 498 "_cursesmodule.c"
        __label__ = 14; break; //@line 498 "_cursesmodule.c"
      case 13: // $bb12
        var $18=HEAP[_PyExc_TypeError]; //@line 501 "_cursesmodule.c"
        _PyErr_SetString($18, ((__str49)&4294967295)); //@line 501 "_cursesmodule.c"
        HEAP[$0]=0; //@line 502 "_cursesmodule.c"
        __label__ = 32; break; //@line 502 "_cursesmodule.c"
      case 14: // $bb13
        var $19=HEAP[$use_attr]; //@line 505 "_cursesmodule.c"
        var $20=((($19))|0)==1; //@line 505 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 21; break; } //@line 505 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[$self_addr]; //@line 506 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 506 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 506 "_cursesmodule.c"
        var $24=($23)!=0; //@line 506 "_cursesmodule.c"
        if ($24) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 506 "_cursesmodule.c"
      case 16: // $bb15
        var $25=HEAP[$self_addr]; //@line 506 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 506 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 506 "_cursesmodule.c"
        var $28=(($27+16)&4294967295); //@line 506 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 506 "_cursesmodule.c"
        HEAP[$iftmp_70]=$29; //@line 506 "_cursesmodule.c"
        __label__ = 18; break; //@line 506 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$iftmp_70]=0; //@line 506 "_cursesmodule.c"
        __label__ = 18; break; //@line 506 "_cursesmodule.c"
      case 18: // $bb17
        var $30=HEAP[$iftmp_70]; //@line 506 "_cursesmodule.c"
        HEAP[$attr_old]=$30; //@line 506 "_cursesmodule.c"
        var $31=HEAP[$self_addr]; //@line 507 "_cursesmodule.c"
        var $32=(($31+8)&4294967295); //@line 507 "_cursesmodule.c"
        var $33=HEAP[$32]; //@line 507 "_cursesmodule.c"
        var $34=($33)!=0; //@line 507 "_cursesmodule.c"
        if ($34) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 507 "_cursesmodule.c"
      case 19: // $bb18
        var $35=HEAP[$self_addr]; //@line 507 "_cursesmodule.c"
        var $36=(($35+8)&4294967295); //@line 507 "_cursesmodule.c"
        var $37=HEAP[$36]; //@line 507 "_cursesmodule.c"
        var $38=(($37+16)&4294967295); //@line 507 "_cursesmodule.c"
        var $39=HEAP[$attr]; //@line 507 "_cursesmodule.c"
        HEAP[$38]=$39; //@line 507 "_cursesmodule.c"
        HEAP[$iftmp_71]=0; //@line 507 "_cursesmodule.c"
        __label__ = 21; break; //@line 507 "_cursesmodule.c"
      case 20: // $bb19
        HEAP[$iftmp_71]=-1; //@line 507 "_cursesmodule.c"
        __label__ = 21; break; //@line 507 "_cursesmodule.c"
      case 21: // $bb20
        var $40=HEAP[$use_xy]; //@line 509 "_cursesmodule.c"
        var $41=((($40))|0)==1; //@line 509 "_cursesmodule.c"
        if ($41) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 509 "_cursesmodule.c"
      case 22: // $bb21
        var $42=HEAP[$x]; //@line 510 "_cursesmodule.c"
        var $43=HEAP[$y]; //@line 510 "_cursesmodule.c"
        var $44=HEAP[$self_addr]; //@line 510 "_cursesmodule.c"
        var $45=(($44+8)&4294967295); //@line 510 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 510 "_cursesmodule.c"
        var $47=_wmove($46, $43, $42); //@line 510 "_cursesmodule.c"
        var $48=((($47))|0)!=-1; //@line 510 "_cursesmodule.c"
        if ($48) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 510 "_cursesmodule.c"
      case 23: // $bb22
        var $49=HEAP[$n]; //@line 510 "_cursesmodule.c"
        var $50=HEAP[$str]; //@line 510 "_cursesmodule.c"
        var $51=HEAP[$self_addr]; //@line 510 "_cursesmodule.c"
        var $52=(($51+8)&4294967295); //@line 510 "_cursesmodule.c"
        var $53=HEAP[$52]; //@line 510 "_cursesmodule.c"
        var $54=_waddnstr($53, $50, $49); //@line 510 "_cursesmodule.c"
        HEAP[$iftmp_72]=$54; //@line 510 "_cursesmodule.c"
        __label__ = 25; break; //@line 510 "_cursesmodule.c"
      case 24: // $bb23
        HEAP[$iftmp_72]=-1; //@line 510 "_cursesmodule.c"
        __label__ = 25; break; //@line 510 "_cursesmodule.c"
      case 25: // $bb24
        var $55=HEAP[$iftmp_72]; //@line 510 "_cursesmodule.c"
        HEAP[$rtn]=$55; //@line 510 "_cursesmodule.c"
        __label__ = 27; break; //@line 510 "_cursesmodule.c"
      case 26: // $bb25
        var $56=HEAP[$n]; //@line 512 "_cursesmodule.c"
        var $57=HEAP[$str]; //@line 512 "_cursesmodule.c"
        var $58=HEAP[$self_addr]; //@line 512 "_cursesmodule.c"
        var $59=(($58+8)&4294967295); //@line 512 "_cursesmodule.c"
        var $60=HEAP[$59]; //@line 512 "_cursesmodule.c"
        var $61=_waddnstr($60, $57, $56); //@line 512 "_cursesmodule.c"
        HEAP[$rtn]=$61; //@line 512 "_cursesmodule.c"
        __label__ = 27; break; //@line 512 "_cursesmodule.c"
      case 27: // $bb26
        var $62=HEAP[$use_attr]; //@line 513 "_cursesmodule.c"
        var $63=((($62))|0)==1; //@line 513 "_cursesmodule.c"
        if ($63) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 513 "_cursesmodule.c"
      case 28: // $bb27
        var $64=HEAP[$self_addr]; //@line 514 "_cursesmodule.c"
        var $65=(($64+8)&4294967295); //@line 514 "_cursesmodule.c"
        var $66=HEAP[$65]; //@line 514 "_cursesmodule.c"
        var $67=($66)!=0; //@line 514 "_cursesmodule.c"
        if ($67) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 514 "_cursesmodule.c"
      case 29: // $bb28
        var $68=HEAP[$self_addr]; //@line 514 "_cursesmodule.c"
        var $69=(($68+8)&4294967295); //@line 514 "_cursesmodule.c"
        var $70=HEAP[$69]; //@line 514 "_cursesmodule.c"
        var $71=(($70+16)&4294967295); //@line 514 "_cursesmodule.c"
        var $72=HEAP[$attr_old]; //@line 514 "_cursesmodule.c"
        HEAP[$71]=$72; //@line 514 "_cursesmodule.c"
        HEAP[$iftmp_79]=0; //@line 514 "_cursesmodule.c"
        __label__ = 31; break; //@line 514 "_cursesmodule.c"
      case 30: // $bb29
        HEAP[$iftmp_79]=-1; //@line 514 "_cursesmodule.c"
        __label__ = 31; break; //@line 514 "_cursesmodule.c"
      case 31: // $bb30
        var $73=HEAP[$rtn]; //@line 515 "_cursesmodule.c"
        var $74=_PyCursesCheckERR($73, ((__str50)&4294967295)); //@line 515 "_cursesmodule.c"
        HEAP[$0]=$74; //@line 515 "_cursesmodule.c"
        __label__ = 32; break; //@line 515 "_cursesmodule.c"
      case 32: // $bb31
        var $75=HEAP[$0]; //@line 481 "_cursesmodule.c"
        HEAP[$retval]=$75; //@line 481 "_cursesmodule.c"
        __label__ = 33; break; //@line 481 "_cursesmodule.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 481 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 481 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Bkgd($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $bkgd=__stackBase__+20;
        var $attr=__stackBase__+24;
        var $lattr=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 523 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 526 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 526 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 528 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str32)&4294967295), $temp); //@line 528 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 528 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 528 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 529 "_cursesmodule.c"
        __label__ = 11; break; //@line 529 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 529 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 532 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str33)&4294967295), $temp, $lattr); //@line 532 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 532 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 532 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 533 "_cursesmodule.c"
        __label__ = 11; break; //@line 533 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 534 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 534 "_cursesmodule.c"
        __label__ = 8; break; //@line 534 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[_PyExc_TypeError]; //@line 537 "_cursesmodule.c"
        _PyErr_SetString($10, ((__str51)&4294967295)); //@line 537 "_cursesmodule.c"
        HEAP[$0]=0; //@line 538 "_cursesmodule.c"
        __label__ = 11; break; //@line 538 "_cursesmodule.c"
      case 8: // $bb7
        var $11=HEAP[$temp]; //@line 541 "_cursesmodule.c"
        var $12=_PyCurses_ConvertToChtype($11, $bkgd); //@line 541 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 541 "_cursesmodule.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 541 "_cursesmodule.c"
      case 9: // $bb8
        var $14=HEAP[_PyExc_TypeError]; //@line 542 "_cursesmodule.c"
        _PyErr_SetString($14, ((__str37)&4294967295)); //@line 542 "_cursesmodule.c"
        HEAP[$0]=0; //@line 543 "_cursesmodule.c"
        __label__ = 11; break; //@line 543 "_cursesmodule.c"
      case 10: // $bb9
        var $15=HEAP[$bkgd]; //@line 546 "_cursesmodule.c"
        var $16=HEAP[$attr]; //@line 546 "_cursesmodule.c"
        var $17=($15) | ($16); //@line 546 "_cursesmodule.c"
        var $18=HEAP[$self_addr]; //@line 546 "_cursesmodule.c"
        var $19=(($18+8)&4294967295); //@line 546 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 546 "_cursesmodule.c"
        var $21=_wbkgd($20, $17); //@line 546 "_cursesmodule.c"
        var $22=_PyCursesCheckERR($21, ((__str52)&4294967295)); //@line 546 "_cursesmodule.c"
        HEAP[$0]=$22; //@line 546 "_cursesmodule.c"
        __label__ = 11; break; //@line 546 "_cursesmodule.c"
      case 11: // $bb10
        var $23=HEAP[$0]; //@line 529 "_cursesmodule.c"
        HEAP[$retval]=$23; //@line 529 "_cursesmodule.c"
        __label__ = 12; break; //@line 529 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 529 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 529 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AttrOff($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $lattr=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 553 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str53)&4294967295), $lattr); //@line 553 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 553 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 553 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 554 "_cursesmodule.c"
        __label__ = 3; break; //@line 554 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$lattr]; //@line 555 "_cursesmodule.c"
        var $5=HEAP[$self_addr]; //@line 555 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 555 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 555 "_cursesmodule.c"
        var $8=_wattr_off($7, $4, 0); //@line 555 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str54)&4294967295)); //@line 555 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 555 "_cursesmodule.c"
        __label__ = 3; break; //@line 555 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 554 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 554 "_cursesmodule.c"
        __label__ = 4; break; //@line 554 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 554 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 554 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AttrOn($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $lattr=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 562 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str53)&4294967295), $lattr); //@line 562 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 562 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 562 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 563 "_cursesmodule.c"
        __label__ = 3; break; //@line 563 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$lattr]; //@line 564 "_cursesmodule.c"
        var $5=HEAP[$self_addr]; //@line 564 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 564 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 564 "_cursesmodule.c"
        var $8=_wattr_on($7, $4, 0); //@line 564 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str55)&4294967295)); //@line 564 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 564 "_cursesmodule.c"
        __label__ = 3; break; //@line 564 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 563 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 563 "_cursesmodule.c"
        __label__ = 4; break; //@line 563 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 563 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 563 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_AttrSet($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_89=__stackBase__+12;
        var $0=__stackBase__+16;
        var $lattr=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 571 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str53)&4294967295), $lattr); //@line 571 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 571 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 571 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 572 "_cursesmodule.c"
        __label__ = 6; break; //@line 572 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 573 "_cursesmodule.c"
        var $5=(($4+8)&4294967295); //@line 573 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 573 "_cursesmodule.c"
        var $7=($6)!=0; //@line 573 "_cursesmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 573 "_cursesmodule.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 573 "_cursesmodule.c"
        var $9=(($8+8)&4294967295); //@line 573 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 573 "_cursesmodule.c"
        var $11=HEAP[$lattr]; //@line 573 "_cursesmodule.c"
        var $12=(($10+16)&4294967295); //@line 573 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 573 "_cursesmodule.c"
        HEAP[$iftmp_89]=0; //@line 573 "_cursesmodule.c"
        __label__ = 5; break; //@line 573 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[$iftmp_89]=-1; //@line 573 "_cursesmodule.c"
        __label__ = 5; break; //@line 573 "_cursesmodule.c"
      case 5: // $bb4
        var $13=HEAP[$iftmp_89]; //@line 573 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str56)&4294967295)); //@line 573 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 573 "_cursesmodule.c"
        __label__ = 6; break; //@line 573 "_cursesmodule.c"
      case 6: // $bb5
        var $15=HEAP[$0]; //@line 572 "_cursesmodule.c"
        HEAP[$retval]=$15; //@line 572 "_cursesmodule.c"
        __label__ = 7; break; //@line 572 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 572 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 572 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_BkgdSet($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $bkgd=__stackBase__+20;
        var $attr=__stackBase__+24;
        var $lattr=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 581 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 584 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 584 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 586 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str32)&4294967295), $temp); //@line 586 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 586 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 586 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 587 "_cursesmodule.c"
        __label__ = 11; break; //@line 587 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 587 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 590 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str33)&4294967295), $temp, $lattr); //@line 590 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 590 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 590 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 591 "_cursesmodule.c"
        __label__ = 11; break; //@line 591 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 592 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 592 "_cursesmodule.c"
        __label__ = 8; break; //@line 592 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[_PyExc_TypeError]; //@line 595 "_cursesmodule.c"
        _PyErr_SetString($10, ((__str57)&4294967295)); //@line 595 "_cursesmodule.c"
        HEAP[$0]=0; //@line 596 "_cursesmodule.c"
        __label__ = 11; break; //@line 596 "_cursesmodule.c"
      case 8: // $bb7
        var $11=HEAP[$temp]; //@line 599 "_cursesmodule.c"
        var $12=_PyCurses_ConvertToChtype($11, $bkgd); //@line 599 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 599 "_cursesmodule.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 599 "_cursesmodule.c"
      case 9: // $bb8
        var $14=HEAP[_PyExc_TypeError]; //@line 600 "_cursesmodule.c"
        _PyErr_SetString($14, ((__str58)&4294967295)); //@line 600 "_cursesmodule.c"
        HEAP[$0]=0; //@line 601 "_cursesmodule.c"
        __label__ = 11; break; //@line 601 "_cursesmodule.c"
      case 10: // $bb9
        var $15=HEAP[$bkgd]; //@line 604 "_cursesmodule.c"
        var $16=HEAP[$attr]; //@line 604 "_cursesmodule.c"
        var $17=($15) | ($16); //@line 604 "_cursesmodule.c"
        var $18=HEAP[$self_addr]; //@line 604 "_cursesmodule.c"
        var $19=(($18+8)&4294967295); //@line 604 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 604 "_cursesmodule.c"
        _wbkgdset($20, $17); //@line 604 "_cursesmodule.c"
        var $21=_PyCursesCheckERR(0, ((__str59)&4294967295)); //@line 605 "_cursesmodule.c"
        HEAP[$0]=$21; //@line 605 "_cursesmodule.c"
        __label__ = 11; break; //@line 605 "_cursesmodule.c"
      case 11: // $bb10
        var $22=HEAP[$0]; //@line 587 "_cursesmodule.c"
        HEAP[$retval]=$22; //@line 587 "_cursesmodule.c"
        __label__ = 12; break; //@line 587 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 587 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 587 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Border($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+48;
        var $i=__stackBase__+80;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$i]=0; //@line 616 "_cursesmodule.c"
        __label__ = 2; break; //@line 616 "_cursesmodule.c"
      case 1: // $bb
        var $1=HEAP[$i]; //@line 617 "_cursesmodule.c"
        var $2=(($temp+$1*4)&4294967295); //@line 617 "_cursesmodule.c"
        HEAP[$2]=0; //@line 617 "_cursesmodule.c"
        var $3=HEAP[$i]; //@line 618 "_cursesmodule.c"
        var $4=(($ch+$3*4)&4294967295); //@line 618 "_cursesmodule.c"
        HEAP[$4]=0; //@line 618 "_cursesmodule.c"
        var $5=HEAP[$i]; //@line 616 "_cursesmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 616 "_cursesmodule.c"
        HEAP[$i]=$6; //@line 616 "_cursesmodule.c"
        __label__ = 2; break; //@line 616 "_cursesmodule.c"
      case 2: // $bb1
        var $7=HEAP[$i]; //@line 616 "_cursesmodule.c"
        var $8=((($7))|0) <= 7; //@line 616 "_cursesmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 616 "_cursesmodule.c"
      case 3: // $bb2
        var $9=HEAP[$args_addr]; //@line 621 "_cursesmodule.c"
        var $10=(($temp)&4294967295); //@line 621 "_cursesmodule.c"
        var $11=(($temp+4)&4294967295); //@line 621 "_cursesmodule.c"
        var $12=(($temp+8)&4294967295); //@line 621 "_cursesmodule.c"
        var $13=(($temp+12)&4294967295); //@line 621 "_cursesmodule.c"
        var $14=(($temp+16)&4294967295); //@line 621 "_cursesmodule.c"
        var $15=(($temp+20)&4294967295); //@line 621 "_cursesmodule.c"
        var $16=(($temp+24)&4294967295); //@line 621 "_cursesmodule.c"
        var $17=(($temp+28)&4294967295); //@line 621 "_cursesmodule.c"
        var $18=_PyArg_ParseTuple($9, ((__str60)&4294967295), $10, $11, $12, $13, $14, $15, $16, $17); //@line 621 "_cursesmodule.c"
        var $19=((($18))|0)==0; //@line 621 "_cursesmodule.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 621 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 624 "_cursesmodule.c"
        __label__ = 12; break; //@line 624 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$i]=0; //@line 626 "_cursesmodule.c"
        __label__ = 10; break; //@line 626 "_cursesmodule.c"
      case 6: // $bb5
        var $20=HEAP[$i]; //@line 627 "_cursesmodule.c"
        var $21=(($temp+$20*4)&4294967295); //@line 627 "_cursesmodule.c"
        var $22=HEAP[$21]; //@line 627 "_cursesmodule.c"
        var $23=($22)!=0; //@line 627 "_cursesmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 627 "_cursesmodule.c"
      case 7: // $bb6
        var $24=HEAP[$i]; //@line 627 "_cursesmodule.c"
        var $25=(($ch+$24*4)&4294967295); //@line 627 "_cursesmodule.c"
        var $26=HEAP[$i]; //@line 627 "_cursesmodule.c"
        var $27=(($temp+$26*4)&4294967295); //@line 627 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 627 "_cursesmodule.c"
        var $29=_PyCurses_ConvertToChtype($28, $25); //@line 627 "_cursesmodule.c"
        var $30=((($29))|0)==0; //@line 627 "_cursesmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 627 "_cursesmodule.c"
      case 8: // $bb7
        var $31=HEAP[$i]; //@line 628 "_cursesmodule.c"
        var $32=((($31) + 1)&4294967295); //@line 628 "_cursesmodule.c"
        var $33=HEAP[_PyExc_TypeError]; //@line 628 "_cursesmodule.c"
        var $34=_PyErr_Format($33, ((__str61)&4294967295), $32); //@line 628 "_cursesmodule.c"
        HEAP[$0]=0; //@line 630 "_cursesmodule.c"
        __label__ = 12; break; //@line 630 "_cursesmodule.c"
      case 9: // $bb8
        var $35=HEAP[$i]; //@line 626 "_cursesmodule.c"
        var $36=((($35) + 1)&4294967295); //@line 626 "_cursesmodule.c"
        HEAP[$i]=$36; //@line 626 "_cursesmodule.c"
        __label__ = 10; break; //@line 626 "_cursesmodule.c"
      case 10: // $bb9
        var $37=HEAP[$i]; //@line 626 "_cursesmodule.c"
        var $38=((($37))|0) <= 7; //@line 626 "_cursesmodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 626 "_cursesmodule.c"
      case 11: // $bb10
        var $39=(($ch+28)&4294967295); //@line 634 "_cursesmodule.c"
        var $40=HEAP[$39]; //@line 634 "_cursesmodule.c"
        var $41=(($ch+24)&4294967295); //@line 634 "_cursesmodule.c"
        var $42=HEAP[$41]; //@line 634 "_cursesmodule.c"
        var $43=(($ch+20)&4294967295); //@line 634 "_cursesmodule.c"
        var $44=HEAP[$43]; //@line 634 "_cursesmodule.c"
        var $45=(($ch+16)&4294967295); //@line 634 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 634 "_cursesmodule.c"
        var $47=(($ch+12)&4294967295); //@line 634 "_cursesmodule.c"
        var $48=HEAP[$47]; //@line 634 "_cursesmodule.c"
        var $49=(($ch+8)&4294967295); //@line 634 "_cursesmodule.c"
        var $50=HEAP[$49]; //@line 634 "_cursesmodule.c"
        var $51=(($ch+4)&4294967295); //@line 634 "_cursesmodule.c"
        var $52=HEAP[$51]; //@line 634 "_cursesmodule.c"
        var $53=(($ch)&4294967295); //@line 634 "_cursesmodule.c"
        var $54=HEAP[$53]; //@line 634 "_cursesmodule.c"
        var $55=HEAP[$self_addr]; //@line 634 "_cursesmodule.c"
        var $56=(($55+8)&4294967295); //@line 634 "_cursesmodule.c"
        var $57=HEAP[$56]; //@line 634 "_cursesmodule.c"
        var $58=_wborder($57, $54, $52, $50, $48, $46, $44, $42, $40); //@line 634 "_cursesmodule.c"
        var $59=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 637 "_cursesmodule.c"
        var $60=((($59) + 1)&4294967295); //@line 637 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$60; //@line 637 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 638 "_cursesmodule.c"
        __label__ = 12; break; //@line 638 "_cursesmodule.c"
      case 12: // $bb11
        var $61=HEAP[$0]; //@line 624 "_cursesmodule.c"
        HEAP[$retval]=$61; //@line 624 "_cursesmodule.c"
        __label__ = 13; break; //@line 624 "_cursesmodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 624 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 624 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Box($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ch1=__stackBase__+16;
        var $ch2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$ch1]=0; //@line 644 "_cursesmodule.c"
        HEAP[$ch2]=0; //@line 644 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 645 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 645 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else {
        __label__ = 2; break;
        }
        
      case 1: // $bb
        __label__ = 4; break; //@line 645 "_cursesmodule.c"
      case 2: // $bb1
        var $3=HEAP[$args_addr]; //@line 648 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str62)&4294967295), $ch1, $ch2); //@line 648 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 648 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 648 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 649 "_cursesmodule.c"
        __label__ = 5; break; //@line 649 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$ch2]; //@line 651 "_cursesmodule.c"
        var $7=HEAP[$ch2]; //@line 651 "_cursesmodule.c"
        var $8=HEAP[$ch1]; //@line 651 "_cursesmodule.c"
        var $9=HEAP[$ch1]; //@line 651 "_cursesmodule.c"
        var $10=HEAP[$self_addr]; //@line 651 "_cursesmodule.c"
        var $11=(($10+8)&4294967295); //@line 651 "_cursesmodule.c"
        var $12=HEAP[$11]; //@line 651 "_cursesmodule.c"
        var $13=_wborder($12, $9, $8, $7, $6, 0, 0, 0, 0); //@line 651 "_cursesmodule.c"
        var $14=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 652 "_cursesmodule.c"
        var $15=((($14) + 1)&4294967295); //@line 652 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$15; //@line 652 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 653 "_cursesmodule.c"
        __label__ = 5; break; //@line 653 "_cursesmodule.c"
      case 5: // $bb4
        var $16=HEAP[$0]; //@line 649 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 649 "_cursesmodule.c"
        __label__ = 6; break; //@line 649 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 649 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 649 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_ChgAt($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 58; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 58);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_118=__stackBase__+12;
        var $iftmp_117=__stackBase__+16;
        var $iftmp_112=__stackBase__+20;
        var $0=__stackBase__+24;
        var $rtn=__stackBase__+28;
        var $x=__stackBase__+32;
        var $y=__stackBase__+36;
        var $num=__stackBase__+40;
        var $color=__stackBase__+44;
        var $attr=__stackBase__+46;
        var $lattr=__stackBase__+50;
        var $use_xy=__stackBase__+54;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$num]=-1; //@line 675 "_cursesmodule.c"
        HEAP[$attr]=0; //@line 677 "_cursesmodule.c"
        HEAP[$use_xy]=0; //@line 679 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 681 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 681 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else if ($2 == 3) {
          __label__ = 7; break;
        }
        else if ($2 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 683 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str53)&4294967295), $lattr); //@line 683 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 683 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 683 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 684 "_cursesmodule.c"
        __label__ = 27; break; //@line 684 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$lattr]; //@line 685 "_cursesmodule.c"
        HEAP[$attr]=$6; //@line 685 "_cursesmodule.c"
        __label__ = 14; break; //@line 685 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 688 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str63)&4294967295), $num, $lattr); //@line 688 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 688 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 689 "_cursesmodule.c"
        __label__ = 27; break; //@line 689 "_cursesmodule.c"
      case 6: // $bb5
        var $10=HEAP[$lattr]; //@line 690 "_cursesmodule.c"
        HEAP[$attr]=$10; //@line 690 "_cursesmodule.c"
        __label__ = 14; break; //@line 690 "_cursesmodule.c"
      case 7: // $bb6
        var $11=HEAP[$args_addr]; //@line 693 "_cursesmodule.c"
        var $12=_PyArg_ParseTuple($11, ((__str64)&4294967295), $y, $x, $lattr); //@line 693 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 693 "_cursesmodule.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 693 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 694 "_cursesmodule.c"
        __label__ = 27; break; //@line 694 "_cursesmodule.c"
      case 9: // $bb8
        var $14=HEAP[$lattr]; //@line 695 "_cursesmodule.c"
        HEAP[$attr]=$14; //@line 695 "_cursesmodule.c"
        HEAP[$use_xy]=1; //@line 696 "_cursesmodule.c"
        __label__ = 14; break; //@line 696 "_cursesmodule.c"
      case 10: // $bb9
        var $15=HEAP[$args_addr]; //@line 699 "_cursesmodule.c"
        var $16=_PyArg_ParseTuple($15, ((__str65)&4294967295), $y, $x, $num, $lattr); //@line 699 "_cursesmodule.c"
        var $17=((($16))|0)==0; //@line 699 "_cursesmodule.c"
        if ($17) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 699 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 700 "_cursesmodule.c"
        __label__ = 27; break; //@line 700 "_cursesmodule.c"
      case 12: // $bb11
        var $18=HEAP[$lattr]; //@line 701 "_cursesmodule.c"
        HEAP[$attr]=$18; //@line 701 "_cursesmodule.c"
        HEAP[$use_xy]=1; //@line 702 "_cursesmodule.c"
        __label__ = 14; break; //@line 702 "_cursesmodule.c"
      case 13: // $bb12
        var $19=HEAP[_PyExc_TypeError]; //@line 705 "_cursesmodule.c"
        _PyErr_SetString($19, ((__str66)&4294967295)); //@line 705 "_cursesmodule.c"
        HEAP[$0]=0; //@line 706 "_cursesmodule.c"
        __label__ = 27; break; //@line 706 "_cursesmodule.c"
      case 14: // $bb13
        var $20=HEAP[$attr]; //@line 709 "_cursesmodule.c"
        var $21=((($20))>>>0) >>> 8; //@line 709 "_cursesmodule.c"
        var $22=((($21)) & 65535); //@line 709 "_cursesmodule.c"
        var $23=($22) & 255; //@line 709 "_cursesmodule.c"
        HEAP[$color]=$23; //@line 709 "_cursesmodule.c"
        var $24=HEAP[$color]; //@line 710 "_cursesmodule.c"
        var $25=reSign(($24), 16, 0); //@line 710 "_cursesmodule.c"
        var $26=($25) << 8; //@line 710 "_cursesmodule.c"
        var $27=HEAP[$attr]; //@line 710 "_cursesmodule.c"
        var $28=((($27) - ($26))&4294967295); //@line 710 "_cursesmodule.c"
        HEAP[$attr]=$28; //@line 710 "_cursesmodule.c"
        var $29=HEAP[$use_xy]; //@line 712 "_cursesmodule.c"
        var $30=((($29))|0)==1; //@line 712 "_cursesmodule.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 712 "_cursesmodule.c"
      case 15: // $bb14
        var $31=HEAP[$x]; //@line 713 "_cursesmodule.c"
        var $32=HEAP[$y]; //@line 713 "_cursesmodule.c"
        var $33=HEAP[$self_addr]; //@line 713 "_cursesmodule.c"
        var $34=(($33+8)&4294967295); //@line 713 "_cursesmodule.c"
        var $35=HEAP[$34]; //@line 713 "_cursesmodule.c"
        var $36=_wmove($35, $32, $31); //@line 713 "_cursesmodule.c"
        var $37=((($36))|0)!=-1; //@line 713 "_cursesmodule.c"
        if ($37) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 713 "_cursesmodule.c"
      case 16: // $bb15
        var $38=HEAP[$color]; //@line 713 "_cursesmodule.c"
        var $39=reSign(($38), 16, 0); //@line 713 "_cursesmodule.c"
        var $40=HEAP[$num]; //@line 713 "_cursesmodule.c"
        var $41=HEAP[$self_addr]; //@line 713 "_cursesmodule.c"
        var $42=(($41+8)&4294967295); //@line 713 "_cursesmodule.c"
        var $43=HEAP[$42]; //@line 713 "_cursesmodule.c"
        var $44=HEAP[$attr]; //@line 713 "_cursesmodule.c"
        var $45=((($39)) & 65535); //@line 713 "_cursesmodule.c"
        var $46=_wchgat($43, $40, $44, $45, 0); //@line 713 "_cursesmodule.c"
        HEAP[$iftmp_112]=$46; //@line 713 "_cursesmodule.c"
        __label__ = 18; break; //@line 713 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$iftmp_112]=-1; //@line 713 "_cursesmodule.c"
        __label__ = 18; break; //@line 713 "_cursesmodule.c"
      case 18: // $bb17
        var $47=HEAP[$iftmp_112]; //@line 713 "_cursesmodule.c"
        HEAP[$rtn]=$47; //@line 713 "_cursesmodule.c"
        var $48=HEAP[$y]; //@line 714 "_cursesmodule.c"
        var $49=HEAP[$self_addr]; //@line 714 "_cursesmodule.c"
        var $50=(($49+8)&4294967295); //@line 714 "_cursesmodule.c"
        var $51=HEAP[$50]; //@line 714 "_cursesmodule.c"
        var $52=_wtouchln($51, $48, 1, 1); //@line 714 "_cursesmodule.c"
        __label__ = 26; break; //@line 714 "_cursesmodule.c"
      case 19: // $bb18
        var $53=HEAP[$self_addr]; //@line 716 "_cursesmodule.c"
        var $54=(($53+8)&4294967295); //@line 716 "_cursesmodule.c"
        var $55=HEAP[$54]; //@line 716 "_cursesmodule.c"
        var $56=($55)!=0; //@line 716 "_cursesmodule.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 716 "_cursesmodule.c"
      case 20: // $bb19
        var $57=HEAP[$self_addr]; //@line 716 "_cursesmodule.c"
        var $58=(($57+8)&4294967295); //@line 716 "_cursesmodule.c"
        var $59=HEAP[$58]; //@line 716 "_cursesmodule.c"
        var $60=(($59)&4294967295); //@line 716 "_cursesmodule.c"
        var $61=HEAP[$60]; //@line 716 "_cursesmodule.c"
        var $62=reSign(($61), 16, 0); //@line 716 "_cursesmodule.c"
        HEAP[$iftmp_117]=$62; //@line 716 "_cursesmodule.c"
        __label__ = 22; break; //@line 716 "_cursesmodule.c"
      case 21: // $bb20
        HEAP[$iftmp_117]=-1; //@line 716 "_cursesmodule.c"
        __label__ = 22; break; //@line 716 "_cursesmodule.c"
      case 22: // $bb21
        var $63=HEAP[$iftmp_117]; //@line 716 "_cursesmodule.c"
        HEAP[$y]=$63; //@line 716 "_cursesmodule.c"
        var $64=HEAP[$self_addr]; //@line 716 "_cursesmodule.c"
        var $65=(($64+8)&4294967295); //@line 716 "_cursesmodule.c"
        var $66=HEAP[$65]; //@line 716 "_cursesmodule.c"
        var $67=($66)!=0; //@line 716 "_cursesmodule.c"
        if ($67) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 716 "_cursesmodule.c"
      case 23: // $bb22
        var $68=HEAP[$self_addr]; //@line 716 "_cursesmodule.c"
        var $69=(($68+8)&4294967295); //@line 716 "_cursesmodule.c"
        var $70=HEAP[$69]; //@line 716 "_cursesmodule.c"
        var $71=(($70+2)&4294967295); //@line 716 "_cursesmodule.c"
        var $72=HEAP[$71]; //@line 716 "_cursesmodule.c"
        var $73=reSign(($72), 16, 0); //@line 716 "_cursesmodule.c"
        HEAP[$iftmp_118]=$73; //@line 716 "_cursesmodule.c"
        __label__ = 25; break; //@line 716 "_cursesmodule.c"
      case 24: // $bb23
        HEAP[$iftmp_118]=-1; //@line 716 "_cursesmodule.c"
        __label__ = 25; break; //@line 716 "_cursesmodule.c"
      case 25: // $bb24
        var $74=HEAP[$iftmp_118]; //@line 716 "_cursesmodule.c"
        HEAP[$x]=$74; //@line 716 "_cursesmodule.c"
        var $75=HEAP[$color]; //@line 717 "_cursesmodule.c"
        var $76=reSign(($75), 16, 0); //@line 717 "_cursesmodule.c"
        var $77=HEAP[$num]; //@line 717 "_cursesmodule.c"
        var $78=HEAP[$self_addr]; //@line 717 "_cursesmodule.c"
        var $79=(($78+8)&4294967295); //@line 717 "_cursesmodule.c"
        var $80=HEAP[$79]; //@line 717 "_cursesmodule.c"
        var $81=HEAP[$attr]; //@line 717 "_cursesmodule.c"
        var $82=((($76)) & 65535); //@line 717 "_cursesmodule.c"
        var $83=_wchgat($80, $77, $81, $82, 0); //@line 717 "_cursesmodule.c"
        HEAP[$rtn]=$83; //@line 717 "_cursesmodule.c"
        var $84=HEAP[$y]; //@line 718 "_cursesmodule.c"
        var $85=HEAP[$self_addr]; //@line 718 "_cursesmodule.c"
        var $86=(($85+8)&4294967295); //@line 718 "_cursesmodule.c"
        var $87=HEAP[$86]; //@line 718 "_cursesmodule.c"
        var $88=_wtouchln($87, $84, 1, 1); //@line 718 "_cursesmodule.c"
        __label__ = 26; break; //@line 718 "_cursesmodule.c"
      case 26: // $bb25
        var $89=HEAP[$rtn]; //@line 720 "_cursesmodule.c"
        var $90=_PyCursesCheckERR($89, ((__str67)&4294967295)); //@line 720 "_cursesmodule.c"
        HEAP[$0]=$90; //@line 720 "_cursesmodule.c"
        __label__ = 27; break; //@line 720 "_cursesmodule.c"
      case 27: // $bb26
        var $91=HEAP[$0]; //@line 684 "_cursesmodule.c"
        HEAP[$retval]=$91; //@line 684 "_cursesmodule.c"
        __label__ = 28; break; //@line 684 "_cursesmodule.c"
      case 28: // $return
        var $retval27=HEAP[$retval]; //@line 684 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 684 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_DelCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_121=__stackBase__+12;
        var $0=__stackBase__+16;
        var $rtn=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 730 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 730 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 2; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 732 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 732 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 732 "_cursesmodule.c"
        var $6=_wdelch($5); //@line 732 "_cursesmodule.c"
        HEAP[$rtn]=$6; //@line 732 "_cursesmodule.c"
        __label__ = 9; break; //@line 732 "_cursesmodule.c"
      case 2: // $bb1
        var $7=HEAP[$args_addr]; //@line 735 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str26)&4294967295), $y, $x); //@line 735 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 735 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 735 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 736 "_cursesmodule.c"
        __label__ = 10; break; //@line 736 "_cursesmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 737 "_cursesmodule.c"
        var $11=HEAP[$y]; //@line 737 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 737 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 737 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 737 "_cursesmodule.c"
        var $15=_wmove($14, $11, $10); //@line 737 "_cursesmodule.c"
        var $16=((($15))|0)!=-1; //@line 737 "_cursesmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 737 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[$self_addr]; //@line 737 "_cursesmodule.c"
        var $18=(($17+8)&4294967295); //@line 737 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 737 "_cursesmodule.c"
        var $20=_wdelch($19); //@line 737 "_cursesmodule.c"
        HEAP[$iftmp_121]=$20; //@line 737 "_cursesmodule.c"
        __label__ = 7; break; //@line 737 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$iftmp_121]=-1; //@line 737 "_cursesmodule.c"
        __label__ = 7; break; //@line 737 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$iftmp_121]; //@line 737 "_cursesmodule.c"
        HEAP[$rtn]=$21; //@line 737 "_cursesmodule.c"
        __label__ = 9; break; //@line 737 "_cursesmodule.c"
      case 8: // $bb7
        var $22=HEAP[_PyExc_TypeError]; //@line 740 "_cursesmodule.c"
        _PyErr_SetString($22, ((__str68)&4294967295)); //@line 740 "_cursesmodule.c"
        HEAP[$0]=0; //@line 741 "_cursesmodule.c"
        __label__ = 10; break; //@line 741 "_cursesmodule.c"
      case 9: // $bb8
        var $23=HEAP[$rtn]; //@line 743 "_cursesmodule.c"
        var $24=_PyCursesCheckERR($23, ((__str69)&4294967295)); //@line 743 "_cursesmodule.c"
        HEAP[$0]=$24; //@line 743 "_cursesmodule.c"
        __label__ = 10; break; //@line 743 "_cursesmodule.c"
      case 10: // $bb9
        var $25=HEAP[$0]; //@line 736 "_cursesmodule.c"
        HEAP[$retval]=$25; //@line 736 "_cursesmodule.c"
        __label__ = 11; break; //@line 736 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 736 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 736 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_DerWin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $nlines=__stackBase__+20;
        var $ncols=__stackBase__+24;
        var $begin_y=__stackBase__+28;
        var $begin_x=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$nlines]=0; //@line 752 "_cursesmodule.c"
        HEAP[$ncols]=0; //@line 753 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 754 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 754 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 4) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 756 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str70)&4294967295), $begin_y, $begin_x); //@line 756 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 756 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 756 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 757 "_cursesmodule.c"
        __label__ = 11; break; //@line 757 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 757 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 760 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str71)&4294967295), $nlines, $ncols, $begin_y, $begin_x); //@line 760 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 760 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 760 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 762 "_cursesmodule.c"
        __label__ = 11; break; //@line 762 "_cursesmodule.c"
      case 6: // $bb5
        __label__ = 8; break; //@line 762 "_cursesmodule.c"
      case 7: // $bb6
        var $9=HEAP[_PyExc_TypeError]; //@line 765 "_cursesmodule.c"
        _PyErr_SetString($9, ((__str72)&4294967295)); //@line 765 "_cursesmodule.c"
        HEAP[$0]=0; //@line 766 "_cursesmodule.c"
        __label__ = 11; break; //@line 766 "_cursesmodule.c"
      case 8: // $bb7
        var $10=HEAP[$begin_x]; //@line 769 "_cursesmodule.c"
        var $11=HEAP[$begin_y]; //@line 769 "_cursesmodule.c"
        var $12=HEAP[$ncols]; //@line 769 "_cursesmodule.c"
        var $13=HEAP[$nlines]; //@line 769 "_cursesmodule.c"
        var $14=HEAP[$self_addr]; //@line 769 "_cursesmodule.c"
        var $15=(($14+8)&4294967295); //@line 769 "_cursesmodule.c"
        var $16=HEAP[$15]; //@line 769 "_cursesmodule.c"
        var $17=_derwin($16, $13, $12, $11, $10); //@line 769 "_cursesmodule.c"
        HEAP[$win]=$17; //@line 769 "_cursesmodule.c"
        var $18=HEAP[$win]; //@line 771 "_cursesmodule.c"
        var $19=($18)==0; //@line 771 "_cursesmodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 771 "_cursesmodule.c"
      case 9: // $bb8
        var $20=HEAP[_catchall_NULL]; //@line 772 "_cursesmodule.c"
        var $21=HEAP[_PyCursesError]; //@line 772 "_cursesmodule.c"
        _PyErr_SetString($21, $20); //@line 772 "_cursesmodule.c"
        HEAP[$0]=0; //@line 773 "_cursesmodule.c"
        __label__ = 11; break; //@line 773 "_cursesmodule.c"
      case 10: // $bb9
        var $22=HEAP[$win]; //@line 776 "_cursesmodule.c"
        var $23=_PyCursesWindow_New($22); //@line 776 "_cursesmodule.c"
        HEAP[$0]=$23; //@line 776 "_cursesmodule.c"
        __label__ = 11; break; //@line 776 "_cursesmodule.c"
      case 11: // $bb10
        var $24=HEAP[$0]; //@line 757 "_cursesmodule.c"
        HEAP[$retval]=$24; //@line 757 "_cursesmodule.c"
        __label__ = 12; break; //@line 757 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 757 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 757 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_EchoChar($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+20;
        var $attr=__stackBase__+24;
        var $lattr=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 784 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 787 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 787 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 789 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str32)&4294967295), $temp); //@line 789 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 789 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 789 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 790 "_cursesmodule.c"
        __label__ = 13; break; //@line 790 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 790 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 793 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str33)&4294967295), $temp, $lattr); //@line 793 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 793 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 793 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 794 "_cursesmodule.c"
        __label__ = 13; break; //@line 794 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 795 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 795 "_cursesmodule.c"
        __label__ = 8; break; //@line 795 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[_PyExc_TypeError]; //@line 798 "_cursesmodule.c"
        _PyErr_SetString($10, ((__str73)&4294967295)); //@line 798 "_cursesmodule.c"
        HEAP[$0]=0; //@line 801 "_cursesmodule.c"
        __label__ = 13; break; //@line 801 "_cursesmodule.c"
      case 8: // $bb7
        var $11=HEAP[$temp]; //@line 804 "_cursesmodule.c"
        var $12=_PyCurses_ConvertToChtype($11, $ch); //@line 804 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 804 "_cursesmodule.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 804 "_cursesmodule.c"
      case 9: // $bb8
        var $14=HEAP[_PyExc_TypeError]; //@line 805 "_cursesmodule.c"
        _PyErr_SetString($14, ((__str58)&4294967295)); //@line 805 "_cursesmodule.c"
        HEAP[$0]=0; //@line 806 "_cursesmodule.c"
        __label__ = 13; break; //@line 806 "_cursesmodule.c"
      case 10: // $bb9
        var $15=HEAP[$self_addr]; //@line 810 "_cursesmodule.c"
        var $16=(($15+8)&4294967295); //@line 810 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 810 "_cursesmodule.c"
        var $18=(($17+12)&4294967295); //@line 810 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 810 "_cursesmodule.c"
        var $20=reSign(($19), 16, 0); //@line 810 "_cursesmodule.c"
        var $21=($20) & 16; //@line 810 "_cursesmodule.c"
        var $22=((($21))|0)!=0; //@line 810 "_cursesmodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 810 "_cursesmodule.c"
      case 11: // $bb10
        var $23=HEAP[$ch]; //@line 811 "_cursesmodule.c"
        var $24=HEAP[$attr]; //@line 811 "_cursesmodule.c"
        var $25=($23) | ($24); //@line 811 "_cursesmodule.c"
        var $26=HEAP[$self_addr]; //@line 811 "_cursesmodule.c"
        var $27=(($26+8)&4294967295); //@line 811 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 811 "_cursesmodule.c"
        var $29=_pechochar($28, $25); //@line 811 "_cursesmodule.c"
        var $30=_PyCursesCheckERR($29, ((__str74)&4294967295)); //@line 811 "_cursesmodule.c"
        HEAP[$0]=$30; //@line 811 "_cursesmodule.c"
        __label__ = 13; break; //@line 811 "_cursesmodule.c"
      case 12: // $bb11
        var $31=HEAP[$ch]; //@line 815 "_cursesmodule.c"
        var $32=HEAP[$attr]; //@line 815 "_cursesmodule.c"
        var $33=($31) | ($32); //@line 815 "_cursesmodule.c"
        var $34=HEAP[$self_addr]; //@line 815 "_cursesmodule.c"
        var $35=(($34+8)&4294967295); //@line 815 "_cursesmodule.c"
        var $36=HEAP[$35]; //@line 815 "_cursesmodule.c"
        var $37=_wechochar($36, $33); //@line 815 "_cursesmodule.c"
        var $38=_PyCursesCheckERR($37, ((__str74)&4294967295)); //@line 815 "_cursesmodule.c"
        HEAP[$0]=$38; //@line 815 "_cursesmodule.c"
        __label__ = 13; break; //@line 815 "_cursesmodule.c"
      case 13: // $bb12
        var $39=HEAP[$0]; //@line 790 "_cursesmodule.c"
        HEAP[$retval]=$39; //@line 790 "_cursesmodule.c"
        __label__ = 14; break; //@line 790 "_cursesmodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 790 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 790 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Enclose($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $y=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 824 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str26)&4294967295), $y, $x); //@line 824 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 824 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 824 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 825 "_cursesmodule.c"
        __label__ = 3; break; //@line 825 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 827 "_cursesmodule.c"
        var $5=HEAP[$y]; //@line 827 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 827 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 827 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 827 "_cursesmodule.c"
        var $9=_wenclose($8, $5, $4); //@line 827 "_cursesmodule.c"
        var $10=unSign(($9), 8, 0); //@line 827 "_cursesmodule.c"
        var $11=_PyInt_FromLong($10); //@line 827 "_cursesmodule.c"
        HEAP[$0]=$11; //@line 827 "_cursesmodule.c"
        __label__ = 3; break; //@line 827 "_cursesmodule.c"
      case 3: // $bb2
        var $12=HEAP[$0]; //@line 825 "_cursesmodule.c"
        HEAP[$retval]=$12; //@line 825 "_cursesmodule.c"
        __label__ = 4; break; //@line 825 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 825 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 825 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_GetBkgd($self) {
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
        var $1=HEAP[$self_addr]; //@line 834 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 834 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 834 "_cursesmodule.c"
        var $4=(($3+20)&4294967295); //@line 834 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 834 "_cursesmodule.c"
        var $6=_PyInt_FromLong($5); //@line 834 "_cursesmodule.c"
        HEAP[$0]=$6; //@line 834 "_cursesmodule.c"
        var $7=HEAP[$0]; //@line 834 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 834 "_cursesmodule.c"
        __label__ = 1; break; //@line 834 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 834 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 834 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_GetCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_140=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $rtn=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 843 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 843 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 2; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 846 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 846 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 846 "_cursesmodule.c"
        var $6=_wgetch($5); //@line 846 "_cursesmodule.c"
        HEAP[$rtn]=$6; //@line 846 "_cursesmodule.c"
        __label__ = 9; break; //@line 846 "_cursesmodule.c"
      case 2: // $bb1
        var $7=HEAP[$args_addr]; //@line 850 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str26)&4294967295), $y, $x); //@line 850 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 850 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 850 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 851 "_cursesmodule.c"
        __label__ = 10; break; //@line 851 "_cursesmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 853 "_cursesmodule.c"
        var $11=HEAP[$y]; //@line 853 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 853 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 853 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 853 "_cursesmodule.c"
        var $15=_wmove($14, $11, $10); //@line 853 "_cursesmodule.c"
        var $16=((($15))|0)!=-1; //@line 853 "_cursesmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 853 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[$self_addr]; //@line 853 "_cursesmodule.c"
        var $18=(($17+8)&4294967295); //@line 853 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 853 "_cursesmodule.c"
        var $20=_wgetch($19); //@line 853 "_cursesmodule.c"
        HEAP[$iftmp_140]=$20; //@line 853 "_cursesmodule.c"
        __label__ = 7; break; //@line 853 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$iftmp_140]=-1; //@line 853 "_cursesmodule.c"
        __label__ = 7; break; //@line 853 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$iftmp_140]; //@line 853 "_cursesmodule.c"
        HEAP[$rtn]=$21; //@line 853 "_cursesmodule.c"
        __label__ = 9; break; //@line 853 "_cursesmodule.c"
      case 8: // $bb7
        var $22=HEAP[_PyExc_TypeError]; //@line 857 "_cursesmodule.c"
        _PyErr_SetString($22, ((__str75)&4294967295)); //@line 857 "_cursesmodule.c"
        HEAP[$0]=0; //@line 858 "_cursesmodule.c"
        __label__ = 10; break; //@line 858 "_cursesmodule.c"
      case 9: // $bb8
        var $23=HEAP[$rtn]; //@line 860 "_cursesmodule.c"
        var $24=_PyInt_FromLong($23); //@line 860 "_cursesmodule.c"
        HEAP[$0]=$24; //@line 860 "_cursesmodule.c"
        __label__ = 10; break; //@line 860 "_cursesmodule.c"
      case 10: // $bb9
        var $25=HEAP[$0]; //@line 851 "_cursesmodule.c"
        HEAP[$retval]=$25; //@line 851 "_cursesmodule.c"
        __label__ = 11; break; //@line 851 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 851 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 851 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_GetKey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_149=__stackBase__+12;
        var $iftmp_144=__stackBase__+16;
        var $0=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $rtn=__stackBase__+32;
        var $knp=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 869 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 869 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 2; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 872 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 872 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 872 "_cursesmodule.c"
        var $6=_wgetch($5); //@line 872 "_cursesmodule.c"
        HEAP[$rtn]=$6; //@line 872 "_cursesmodule.c"
        __label__ = 9; break; //@line 872 "_cursesmodule.c"
      case 2: // $bb1
        var $7=HEAP[$args_addr]; //@line 876 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str26)&4294967295), $y, $x); //@line 876 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 876 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 876 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 877 "_cursesmodule.c"
        __label__ = 17; break; //@line 877 "_cursesmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 879 "_cursesmodule.c"
        var $11=HEAP[$y]; //@line 879 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 879 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 879 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 879 "_cursesmodule.c"
        var $15=_wmove($14, $11, $10); //@line 879 "_cursesmodule.c"
        var $16=((($15))|0)!=-1; //@line 879 "_cursesmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 879 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[$self_addr]; //@line 879 "_cursesmodule.c"
        var $18=(($17+8)&4294967295); //@line 879 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 879 "_cursesmodule.c"
        var $20=_wgetch($19); //@line 879 "_cursesmodule.c"
        HEAP[$iftmp_144]=$20; //@line 879 "_cursesmodule.c"
        __label__ = 7; break; //@line 879 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$iftmp_144]=-1; //@line 879 "_cursesmodule.c"
        __label__ = 7; break; //@line 879 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$iftmp_144]; //@line 879 "_cursesmodule.c"
        HEAP[$rtn]=$21; //@line 879 "_cursesmodule.c"
        __label__ = 9; break; //@line 879 "_cursesmodule.c"
      case 8: // $bb7
        var $22=HEAP[_PyExc_TypeError]; //@line 883 "_cursesmodule.c"
        _PyErr_SetString($22, ((__str76)&4294967295)); //@line 883 "_cursesmodule.c"
        HEAP[$0]=0; //@line 884 "_cursesmodule.c"
        __label__ = 17; break; //@line 884 "_cursesmodule.c"
      case 9: // $bb8
        var $23=HEAP[$rtn]; //@line 886 "_cursesmodule.c"
        var $24=((($23))|0)==-1; //@line 886 "_cursesmodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 886 "_cursesmodule.c"
      case 10: // $bb9
        var $25=HEAP[_PyCursesError]; //@line 888 "_cursesmodule.c"
        _PyErr_SetString($25, ((__str77)&4294967295)); //@line 888 "_cursesmodule.c"
        HEAP[$0]=0; //@line 889 "_cursesmodule.c"
        __label__ = 17; break; //@line 889 "_cursesmodule.c"
      case 11: // $bb10
        var $26=HEAP[$rtn]; //@line 890 "_cursesmodule.c"
        var $27=((($26))|0) <= 255; //@line 890 "_cursesmodule.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 890 "_cursesmodule.c"
      case 12: // $bb11
        var $28=HEAP[$rtn]; //@line 891 "_cursesmodule.c"
        var $29=_Py_BuildValue(((__str78)&4294967295), $28); //@line 891 "_cursesmodule.c"
        HEAP[$0]=$29; //@line 891 "_cursesmodule.c"
        __label__ = 17; break; //@line 891 "_cursesmodule.c"
      case 13: // $bb12
        var $30=HEAP[$rtn]; //@line 897 "_cursesmodule.c"
        var $31=_keyname($30); //@line 897 "_cursesmodule.c"
        HEAP[$knp]=$31; //@line 897 "_cursesmodule.c"
        var $32=HEAP[$knp]; //@line 899 "_cursesmodule.c"
        var $33=($32)!=0; //@line 899 "_cursesmodule.c"
        if ($33) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 899 "_cursesmodule.c"
      case 14: // $bb13
        var $34=HEAP[$knp]; //@line 899 "_cursesmodule.c"
        HEAP[$iftmp_149]=$34; //@line 899 "_cursesmodule.c"
        __label__ = 16; break; //@line 899 "_cursesmodule.c"
      case 15: // $bb14
        HEAP[$iftmp_149]=((__str79)&4294967295); //@line 899 "_cursesmodule.c"
        __label__ = 16; break; //@line 899 "_cursesmodule.c"
      case 16: // $bb15
        var $35=HEAP[$iftmp_149]; //@line 899 "_cursesmodule.c"
        var $36=_PyString_FromString($35); //@line 899 "_cursesmodule.c"
        HEAP[$0]=$36; //@line 899 "_cursesmodule.c"
        __label__ = 17; break; //@line 899 "_cursesmodule.c"
      case 17: // $bb16
        var $37=HEAP[$0]; //@line 877 "_cursesmodule.c"
        HEAP[$retval]=$37; //@line 877 "_cursesmodule.c"
        __label__ = 18; break; //@line 877 "_cursesmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 877 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 877 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_GetStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1064; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1064);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_155=__stackBase__+12;
        var $iftmp_152=__stackBase__+16;
        var $0=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $n=__stackBase__+32;
        var $rtn=__stackBase__+36;
        var $rtn2=__stackBase__+1060;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 910 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 910 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 1) {
          __label__ = 2; break;
        }
        else if ($2 == 2) {
          __label__ = 5; break;
        }
        else if ($2 == 3) {
          __label__ = 11; break;
        }
        else {
        __label__ = 17; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 913 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 913 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 913 "_cursesmodule.c"
        var $rtn1=$rtn; //@line 913 "_cursesmodule.c"
        var $6=_wgetnstr($5, $rtn1, 1023); //@line 913 "_cursesmodule.c"
        HEAP[$rtn2]=$6; //@line 913 "_cursesmodule.c"
        __label__ = 18; break; //@line 913 "_cursesmodule.c"
      case 2: // $bb2
        var $7=HEAP[$args_addr]; //@line 917 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str80)&4294967295), $n); //@line 917 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 917 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 917 "_cursesmodule.c"
      case 3: // $bb3
        HEAP[$0]=0; //@line 918 "_cursesmodule.c"
        __label__ = 21; break; //@line 918 "_cursesmodule.c"
      case 4: // $bb4
        var $10=HEAP[$n]; //@line 920 "_cursesmodule.c"
        var $11=((($10))|0) <= 1023; //@line 920 "_cursesmodule.c"
        var $min=($11) ? ($10) : 1023; //@line 920 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 920 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 920 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 920 "_cursesmodule.c"
        var $rtn6=$rtn; //@line 920 "_cursesmodule.c"
        var $15=_wgetnstr($14, $rtn6, $min); //@line 920 "_cursesmodule.c"
        HEAP[$rtn2]=$15; //@line 920 "_cursesmodule.c"
        __label__ = 18; break; //@line 920 "_cursesmodule.c"
      case 5: // $bb7
        var $16=HEAP[$args_addr]; //@line 924 "_cursesmodule.c"
        var $17=_PyArg_ParseTuple($16, ((__str26)&4294967295), $y, $x); //@line 924 "_cursesmodule.c"
        var $18=((($17))|0)==0; //@line 924 "_cursesmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 924 "_cursesmodule.c"
      case 6: // $bb8
        HEAP[$0]=0; //@line 925 "_cursesmodule.c"
        __label__ = 21; break; //@line 925 "_cursesmodule.c"
      case 7: // $bb9
        var $19=HEAP[$x]; //@line 930 "_cursesmodule.c"
        var $20=HEAP[$y]; //@line 930 "_cursesmodule.c"
        var $21=HEAP[$self_addr]; //@line 930 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 930 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 930 "_cursesmodule.c"
        var $24=_wmove($23, $20, $19); //@line 930 "_cursesmodule.c"
        var $25=((($24))|0)!=-1; //@line 930 "_cursesmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 930 "_cursesmodule.c"
      case 8: // $bb10
        var $26=HEAP[$self_addr]; //@line 930 "_cursesmodule.c"
        var $27=(($26+8)&4294967295); //@line 930 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 930 "_cursesmodule.c"
        var $rtn11=$rtn; //@line 930 "_cursesmodule.c"
        var $29=_wgetnstr($28, $rtn11, 1023); //@line 930 "_cursesmodule.c"
        HEAP[$iftmp_152]=$29; //@line 930 "_cursesmodule.c"
        __label__ = 10; break; //@line 930 "_cursesmodule.c"
      case 9: // $bb12
        HEAP[$iftmp_152]=-1; //@line 930 "_cursesmodule.c"
        __label__ = 10; break; //@line 930 "_cursesmodule.c"
      case 10: // $bb13
        var $30=HEAP[$iftmp_152]; //@line 930 "_cursesmodule.c"
        HEAP[$rtn2]=$30; //@line 930 "_cursesmodule.c"
        __label__ = 18; break; //@line 930 "_cursesmodule.c"
      case 11: // $bb14
        var $31=HEAP[$args_addr]; //@line 935 "_cursesmodule.c"
        var $32=_PyArg_ParseTuple($31, ((__str81)&4294967295), $y, $x, $n); //@line 935 "_cursesmodule.c"
        var $33=((($32))|0)==0; //@line 935 "_cursesmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 935 "_cursesmodule.c"
      case 12: // $bb15
        HEAP[$0]=0; //@line 936 "_cursesmodule.c"
        __label__ = 21; break; //@line 936 "_cursesmodule.c"
      case 13: // $bb16
        var $34=HEAP[$x]; //@line 944 "_cursesmodule.c"
        var $35=HEAP[$y]; //@line 944 "_cursesmodule.c"
        var $36=HEAP[$self_addr]; //@line 944 "_cursesmodule.c"
        var $37=(($36+8)&4294967295); //@line 944 "_cursesmodule.c"
        var $38=HEAP[$37]; //@line 944 "_cursesmodule.c"
        var $39=_wmove($38, $35, $34); //@line 944 "_cursesmodule.c"
        var $40=((($39))|0)!=-1; //@line 944 "_cursesmodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 944 "_cursesmodule.c"
      case 14: // $bb17
        var $41=HEAP[$n]; //@line 944 "_cursesmodule.c"
        var $42=((($41))|0) <= 1023; //@line 944 "_cursesmodule.c"
        var $min18=($42) ? ($41) : 1023; //@line 944 "_cursesmodule.c"
        var $43=HEAP[$self_addr]; //@line 944 "_cursesmodule.c"
        var $44=(($43+8)&4294967295); //@line 944 "_cursesmodule.c"
        var $45=HEAP[$44]; //@line 944 "_cursesmodule.c"
        var $rtn20=$rtn; //@line 944 "_cursesmodule.c"
        var $46=_wgetnstr($45, $rtn20, $min18); //@line 944 "_cursesmodule.c"
        HEAP[$iftmp_155]=$46; //@line 944 "_cursesmodule.c"
        __label__ = 16; break; //@line 944 "_cursesmodule.c"
      case 15: // $bb21
        HEAP[$iftmp_155]=-1; //@line 944 "_cursesmodule.c"
        __label__ = 16; break; //@line 944 "_cursesmodule.c"
      case 16: // $bb22
        var $47=HEAP[$iftmp_155]; //@line 944 "_cursesmodule.c"
        HEAP[$rtn2]=$47; //@line 944 "_cursesmodule.c"
        __label__ = 18; break; //@line 944 "_cursesmodule.c"
      case 17: // $bb23
        var $48=HEAP[_PyExc_TypeError]; //@line 949 "_cursesmodule.c"
        _PyErr_SetString($48, ((__str82)&4294967295)); //@line 949 "_cursesmodule.c"
        HEAP[$0]=0; //@line 950 "_cursesmodule.c"
        __label__ = 21; break; //@line 950 "_cursesmodule.c"
      case 18: // $bb24
        var $49=HEAP[$rtn2]; //@line 952 "_cursesmodule.c"
        var $50=((($49))|0)==-1; //@line 952 "_cursesmodule.c"
        if ($50) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 952 "_cursesmodule.c"
      case 19: // $bb25
        var $51=(($rtn)&4294967295); //@line 953 "_cursesmodule.c"
        HEAP[$51]=0; //@line 953 "_cursesmodule.c"
        __label__ = 20; break; //@line 953 "_cursesmodule.c"
      case 20: // $bb26
        var $rtn27=$rtn; //@line 954 "_cursesmodule.c"
        var $52=_PyString_FromString($rtn27); //@line 954 "_cursesmodule.c"
        HEAP[$0]=$52; //@line 954 "_cursesmodule.c"
        __label__ = 21; break; //@line 954 "_cursesmodule.c"
      case 21: // $bb28
        var $53=HEAP[$0]; //@line 918 "_cursesmodule.c"
        HEAP[$retval]=$53; //@line 918 "_cursesmodule.c"
        __label__ = 22; break; //@line 918 "_cursesmodule.c"
      case 22: // $return
        var $retval29=HEAP[$retval]; //@line 918 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 918 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Hline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+20;
        var $n=__stackBase__+24;
        var $x=__stackBase__+28;
        var $y=__stackBase__+32;
        var $code=__stackBase__+36;
        var $attr=__stackBase__+40;
        var $lattr=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$code]=0; //@line 962 "_cursesmodule.c"
        HEAP[$attr]=0; //@line 963 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 966 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 966 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 4; break;
        }
        else if ($2 == 4) {
          __label__ = 7; break;
        }
        else if ($2 == 5) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 968 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str83)&4294967295), $temp, $n); //@line 968 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 968 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 968 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 969 "_cursesmodule.c"
        __label__ = 19; break; //@line 969 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 969 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 972 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str84)&4294967295), $temp, $n, $lattr); //@line 972 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 972 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 972 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 973 "_cursesmodule.c"
        __label__ = 19; break; //@line 973 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 974 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 974 "_cursesmodule.c"
        __label__ = 14; break; //@line 974 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 977 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str85)&4294967295), $y, $x, $temp, $n); //@line 977 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 977 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 977 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 978 "_cursesmodule.c"
        __label__ = 19; break; //@line 978 "_cursesmodule.c"
      case 9: // $bb8
        var $13=HEAP[$x]; //@line 979 "_cursesmodule.c"
        var $14=HEAP[$y]; //@line 979 "_cursesmodule.c"
        var $15=HEAP[$self_addr]; //@line 979 "_cursesmodule.c"
        var $16=(($15+8)&4294967295); //@line 979 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 979 "_cursesmodule.c"
        var $18=_wmove($17, $14, $13); //@line 979 "_cursesmodule.c"
        HEAP[$code]=$18; //@line 979 "_cursesmodule.c"
        __label__ = 14; break; //@line 979 "_cursesmodule.c"
      case 10: // $bb9
        var $19=HEAP[$args_addr]; //@line 982 "_cursesmodule.c"
        var $20=_PyArg_ParseTuple($19, ((__str86)&4294967295), $y, $x, $temp, $n, $lattr); //@line 982 "_cursesmodule.c"
        var $21=((($20))|0)==0; //@line 982 "_cursesmodule.c"
        if ($21) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 982 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 984 "_cursesmodule.c"
        __label__ = 19; break; //@line 984 "_cursesmodule.c"
      case 12: // $bb11
        var $22=HEAP[$lattr]; //@line 985 "_cursesmodule.c"
        HEAP[$attr]=$22; //@line 985 "_cursesmodule.c"
        var $23=HEAP[$x]; //@line 986 "_cursesmodule.c"
        var $24=HEAP[$y]; //@line 986 "_cursesmodule.c"
        var $25=HEAP[$self_addr]; //@line 986 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 986 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 986 "_cursesmodule.c"
        var $28=_wmove($27, $24, $23); //@line 986 "_cursesmodule.c"
        HEAP[$code]=$28; //@line 986 "_cursesmodule.c"
        __label__ = 14; break; //@line 986 "_cursesmodule.c"
      case 13: // $bb12
        var $29=HEAP[_PyExc_TypeError]; //@line 989 "_cursesmodule.c"
        _PyErr_SetString($29, ((__str87)&4294967295)); //@line 989 "_cursesmodule.c"
        HEAP[$0]=0; //@line 990 "_cursesmodule.c"
        __label__ = 19; break; //@line 990 "_cursesmodule.c"
      case 14: // $bb13
        var $30=HEAP[$code]; //@line 993 "_cursesmodule.c"
        var $31=((($30))|0)!=-1; //@line 993 "_cursesmodule.c"
        if ($31) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 993 "_cursesmodule.c"
      case 15: // $bb14
        var $32=HEAP[$temp]; //@line 994 "_cursesmodule.c"
        var $33=_PyCurses_ConvertToChtype($32, $ch); //@line 994 "_cursesmodule.c"
        var $34=((($33))|0)==0; //@line 994 "_cursesmodule.c"
        if ($34) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 994 "_cursesmodule.c"
      case 16: // $bb15
        var $35=HEAP[_PyExc_TypeError]; //@line 995 "_cursesmodule.c"
        _PyErr_SetString($35, ((__str37)&4294967295)); //@line 995 "_cursesmodule.c"
        HEAP[$0]=0; //@line 997 "_cursesmodule.c"
        __label__ = 19; break; //@line 997 "_cursesmodule.c"
      case 17: // $bb16
        var $36=HEAP[$n]; //@line 999 "_cursesmodule.c"
        var $37=HEAP[$ch]; //@line 999 "_cursesmodule.c"
        var $38=HEAP[$attr]; //@line 999 "_cursesmodule.c"
        var $39=($37) | ($38); //@line 999 "_cursesmodule.c"
        var $40=HEAP[$self_addr]; //@line 999 "_cursesmodule.c"
        var $41=(($40+8)&4294967295); //@line 999 "_cursesmodule.c"
        var $42=HEAP[$41]; //@line 999 "_cursesmodule.c"
        var $43=_whline($42, $39, $36); //@line 999 "_cursesmodule.c"
        var $44=_PyCursesCheckERR($43, ((__str88)&4294967295)); //@line 999 "_cursesmodule.c"
        HEAP[$0]=$44; //@line 999 "_cursesmodule.c"
        __label__ = 19; break; //@line 999 "_cursesmodule.c"
      case 18: // $bb17
        var $45=HEAP[$code]; //@line 1001 "_cursesmodule.c"
        var $46=_PyCursesCheckERR($45, ((__str29)&4294967295)); //@line 1001 "_cursesmodule.c"
        HEAP[$0]=$46; //@line 1001 "_cursesmodule.c"
        __label__ = 19; break; //@line 1001 "_cursesmodule.c"
      case 19: // $bb18
        var $47=HEAP[$0]; //@line 969 "_cursesmodule.c"
        HEAP[$retval]=$47; //@line 969 "_cursesmodule.c"
        __label__ = 20; break; //@line 969 "_cursesmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 969 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 969 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_InsCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_176=__stackBase__+12;
        var $0=__stackBase__+16;
        var $rtn=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $use_xy=__stackBase__+32;
        var $temp=__stackBase__+36;
        var $ch=__stackBase__+40;
        var $attr=__stackBase__+44;
        var $lattr=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$use_xy]=0; //@line 1007 "_cursesmodule.c"
        HEAP[$ch]=0; //@line 1009 "_cursesmodule.c"
        HEAP[$attr]=0; //@line 1010 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1013 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1013 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else if ($2 == 3) {
          __label__ = 7; break;
        }
        else if ($2 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1015 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str32)&4294967295), $temp); //@line 1015 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1015 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1015 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1016 "_cursesmodule.c"
        __label__ = 23; break; //@line 1016 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 1016 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1019 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str33)&4294967295), $temp, $lattr); //@line 1019 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1019 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1019 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1020 "_cursesmodule.c"
        __label__ = 23; break; //@line 1020 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 1021 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 1021 "_cursesmodule.c"
        __label__ = 14; break; //@line 1021 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 1024 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str34)&4294967295), $y, $x, $temp); //@line 1024 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1024 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1024 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1025 "_cursesmodule.c"
        __label__ = 23; break; //@line 1025 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 1026 "_cursesmodule.c"
        __label__ = 14; break; //@line 1026 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 1029 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str35)&4294967295), $y, $x, $temp, $lattr); //@line 1029 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 1029 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1029 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1030 "_cursesmodule.c"
        __label__ = 23; break; //@line 1030 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 1031 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 1031 "_cursesmodule.c"
        HEAP[$use_xy]=1; //@line 1032 "_cursesmodule.c"
        __label__ = 14; break; //@line 1032 "_cursesmodule.c"
      case 13: // $bb12
        var $17=HEAP[_PyExc_TypeError]; //@line 1035 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str89)&4294967295)); //@line 1035 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1036 "_cursesmodule.c"
        __label__ = 23; break; //@line 1036 "_cursesmodule.c"
      case 14: // $bb13
        var $18=HEAP[$temp]; //@line 1039 "_cursesmodule.c"
        var $19=_PyCurses_ConvertToChtype($18, $ch); //@line 1039 "_cursesmodule.c"
        var $20=((($19))|0)==0; //@line 1039 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1039 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[_PyExc_TypeError]; //@line 1040 "_cursesmodule.c"
        _PyErr_SetString($21, ((__str37)&4294967295)); //@line 1040 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1042 "_cursesmodule.c"
        __label__ = 23; break; //@line 1042 "_cursesmodule.c"
      case 16: // $bb15
        var $22=HEAP[$use_xy]; //@line 1045 "_cursesmodule.c"
        var $23=((($22))|0)==1; //@line 1045 "_cursesmodule.c"
        if ($23) { __label__ = 17; break; } else { __label__ = 21; break; } //@line 1045 "_cursesmodule.c"
      case 17: // $bb16
        var $24=HEAP[$x]; //@line 1046 "_cursesmodule.c"
        var $25=HEAP[$y]; //@line 1046 "_cursesmodule.c"
        var $26=HEAP[$self_addr]; //@line 1046 "_cursesmodule.c"
        var $27=(($26+8)&4294967295); //@line 1046 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 1046 "_cursesmodule.c"
        var $29=_wmove($28, $25, $24); //@line 1046 "_cursesmodule.c"
        var $30=((($29))|0)!=-1; //@line 1046 "_cursesmodule.c"
        if ($30) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1046 "_cursesmodule.c"
      case 18: // $bb17
        var $31=HEAP[$ch]; //@line 1046 "_cursesmodule.c"
        var $32=HEAP[$attr]; //@line 1046 "_cursesmodule.c"
        var $33=($31) | ($32); //@line 1046 "_cursesmodule.c"
        var $34=HEAP[$self_addr]; //@line 1046 "_cursesmodule.c"
        var $35=(($34+8)&4294967295); //@line 1046 "_cursesmodule.c"
        var $36=HEAP[$35]; //@line 1046 "_cursesmodule.c"
        var $37=_winsch($36, $33); //@line 1046 "_cursesmodule.c"
        HEAP[$iftmp_176]=$37; //@line 1046 "_cursesmodule.c"
        __label__ = 20; break; //@line 1046 "_cursesmodule.c"
      case 19: // $bb18
        HEAP[$iftmp_176]=-1; //@line 1046 "_cursesmodule.c"
        __label__ = 20; break; //@line 1046 "_cursesmodule.c"
      case 20: // $bb19
        var $38=HEAP[$iftmp_176]; //@line 1046 "_cursesmodule.c"
        HEAP[$rtn]=$38; //@line 1046 "_cursesmodule.c"
        __label__ = 22; break; //@line 1046 "_cursesmodule.c"
      case 21: // $bb20
        var $39=HEAP[$ch]; //@line 1048 "_cursesmodule.c"
        var $40=HEAP[$attr]; //@line 1048 "_cursesmodule.c"
        var $41=($39) | ($40); //@line 1048 "_cursesmodule.c"
        var $42=HEAP[$self_addr]; //@line 1048 "_cursesmodule.c"
        var $43=(($42+8)&4294967295); //@line 1048 "_cursesmodule.c"
        var $44=HEAP[$43]; //@line 1048 "_cursesmodule.c"
        var $45=_winsch($44, $41); //@line 1048 "_cursesmodule.c"
        HEAP[$rtn]=$45; //@line 1048 "_cursesmodule.c"
        __label__ = 22; break; //@line 1048 "_cursesmodule.c"
      case 22: // $bb21
        var $46=HEAP[$rtn]; //@line 1050 "_cursesmodule.c"
        var $47=_PyCursesCheckERR($46, ((__str90)&4294967295)); //@line 1050 "_cursesmodule.c"
        HEAP[$0]=$47; //@line 1050 "_cursesmodule.c"
        __label__ = 23; break; //@line 1050 "_cursesmodule.c"
      case 23: // $bb22
        var $48=HEAP[$0]; //@line 1016 "_cursesmodule.c"
        HEAP[$retval]=$48; //@line 1016 "_cursesmodule.c"
        __label__ = 24; break; //@line 1016 "_cursesmodule.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 1016 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 1016 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_InCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_181=__stackBase__+12;
        var $0=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $rtn=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1058 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1058 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 2; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 1060 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 1060 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 1060 "_cursesmodule.c"
        var $6=_winch($5); //@line 1060 "_cursesmodule.c"
        HEAP[$rtn]=$6; //@line 1060 "_cursesmodule.c"
        __label__ = 9; break; //@line 1060 "_cursesmodule.c"
      case 2: // $bb1
        var $7=HEAP[$args_addr]; //@line 1063 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str26)&4294967295), $y, $x); //@line 1063 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 1063 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1063 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1064 "_cursesmodule.c"
        __label__ = 10; break; //@line 1064 "_cursesmodule.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 1065 "_cursesmodule.c"
        var $11=HEAP[$y]; //@line 1065 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 1065 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 1065 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 1065 "_cursesmodule.c"
        var $15=_wmove($14, $11, $10); //@line 1065 "_cursesmodule.c"
        var $16=((($15))|0)!=-1; //@line 1065 "_cursesmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1065 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[$self_addr]; //@line 1065 "_cursesmodule.c"
        var $18=(($17+8)&4294967295); //@line 1065 "_cursesmodule.c"
        var $19=HEAP[$18]; //@line 1065 "_cursesmodule.c"
        var $20=_winch($19); //@line 1065 "_cursesmodule.c"
        HEAP[$iftmp_181]=$20; //@line 1065 "_cursesmodule.c"
        __label__ = 7; break; //@line 1065 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$iftmp_181]=-1; //@line 1065 "_cursesmodule.c"
        __label__ = 7; break; //@line 1065 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$iftmp_181]; //@line 1065 "_cursesmodule.c"
        HEAP[$rtn]=$21; //@line 1065 "_cursesmodule.c"
        __label__ = 9; break; //@line 1065 "_cursesmodule.c"
      case 8: // $bb7
        var $22=HEAP[_PyExc_TypeError]; //@line 1068 "_cursesmodule.c"
        _PyErr_SetString($22, ((__str91)&4294967295)); //@line 1068 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1069 "_cursesmodule.c"
        __label__ = 10; break; //@line 1069 "_cursesmodule.c"
      case 9: // $bb8
        var $23=HEAP[$rtn]; //@line 1071 "_cursesmodule.c"
        var $24=_PyInt_FromLong($23); //@line 1071 "_cursesmodule.c"
        HEAP[$0]=$24; //@line 1071 "_cursesmodule.c"
        __label__ = 10; break; //@line 1071 "_cursesmodule.c"
      case 10: // $bb9
        var $25=HEAP[$0]; //@line 1064 "_cursesmodule.c"
        HEAP[$retval]=$25; //@line 1064 "_cursesmodule.c"
        __label__ = 11; break; //@line 1064 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1064 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1064 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_InStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1064; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1064);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_189=__stackBase__+12;
        var $iftmp_186=__stackBase__+16;
        var $0=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $n=__stackBase__+32;
        var $rtn=__stackBase__+36;
        var $rtn2=__stackBase__+1060;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1081 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1081 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 1) {
          __label__ = 2; break;
        }
        else if ($2 == 2) {
          __label__ = 5; break;
        }
        else if ($2 == 3) {
          __label__ = 11; break;
        }
        else {
        __label__ = 17; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 1083 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 1083 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 1083 "_cursesmodule.c"
        var $rtn1=$rtn; //@line 1083 "_cursesmodule.c"
        var $6=_winnstr($5, $rtn1, 1023); //@line 1083 "_cursesmodule.c"
        HEAP[$rtn2]=$6; //@line 1083 "_cursesmodule.c"
        __label__ = 18; break; //@line 1083 "_cursesmodule.c"
      case 2: // $bb2
        var $7=HEAP[$args_addr]; //@line 1086 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str80)&4294967295), $n); //@line 1086 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 1086 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1086 "_cursesmodule.c"
      case 3: // $bb3
        HEAP[$0]=0; //@line 1087 "_cursesmodule.c"
        __label__ = 21; break; //@line 1087 "_cursesmodule.c"
      case 4: // $bb4
        var $10=HEAP[$n]; //@line 1088 "_cursesmodule.c"
        var $11=((($10))|0) <= 1023; //@line 1088 "_cursesmodule.c"
        var $min=($11) ? ($10) : 1023; //@line 1088 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 1088 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 1088 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 1088 "_cursesmodule.c"
        var $rtn6=$rtn; //@line 1088 "_cursesmodule.c"
        var $15=_winnstr($14, $rtn6, $min); //@line 1088 "_cursesmodule.c"
        HEAP[$rtn2]=$15; //@line 1088 "_cursesmodule.c"
        __label__ = 18; break; //@line 1088 "_cursesmodule.c"
      case 5: // $bb7
        var $16=HEAP[$args_addr]; //@line 1091 "_cursesmodule.c"
        var $17=_PyArg_ParseTuple($16, ((__str26)&4294967295), $y, $x); //@line 1091 "_cursesmodule.c"
        var $18=((($17))|0)==0; //@line 1091 "_cursesmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1091 "_cursesmodule.c"
      case 6: // $bb8
        HEAP[$0]=0; //@line 1092 "_cursesmodule.c"
        __label__ = 21; break; //@line 1092 "_cursesmodule.c"
      case 7: // $bb9
        var $19=HEAP[$x]; //@line 1093 "_cursesmodule.c"
        var $20=HEAP[$y]; //@line 1093 "_cursesmodule.c"
        var $21=HEAP[$self_addr]; //@line 1093 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 1093 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1093 "_cursesmodule.c"
        var $24=_wmove($23, $20, $19); //@line 1093 "_cursesmodule.c"
        var $25=((($24))|0)!=-1; //@line 1093 "_cursesmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1093 "_cursesmodule.c"
      case 8: // $bb10
        var $26=HEAP[$self_addr]; //@line 1093 "_cursesmodule.c"
        var $27=(($26+8)&4294967295); //@line 1093 "_cursesmodule.c"
        var $28=HEAP[$27]; //@line 1093 "_cursesmodule.c"
        var $rtn11=$rtn; //@line 1093 "_cursesmodule.c"
        var $29=_winnstr($28, $rtn11, 1023); //@line 1093 "_cursesmodule.c"
        HEAP[$iftmp_186]=$29; //@line 1093 "_cursesmodule.c"
        __label__ = 10; break; //@line 1093 "_cursesmodule.c"
      case 9: // $bb12
        HEAP[$iftmp_186]=-1; //@line 1093 "_cursesmodule.c"
        __label__ = 10; break; //@line 1093 "_cursesmodule.c"
      case 10: // $bb13
        var $30=HEAP[$iftmp_186]; //@line 1093 "_cursesmodule.c"
        HEAP[$rtn2]=$30; //@line 1093 "_cursesmodule.c"
        __label__ = 18; break; //@line 1093 "_cursesmodule.c"
      case 11: // $bb14
        var $31=HEAP[$args_addr]; //@line 1096 "_cursesmodule.c"
        var $32=_PyArg_ParseTuple($31, ((__str81)&4294967295), $y, $x, $n); //@line 1096 "_cursesmodule.c"
        var $33=((($32))|0)==0; //@line 1096 "_cursesmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1096 "_cursesmodule.c"
      case 12: // $bb15
        HEAP[$0]=0; //@line 1097 "_cursesmodule.c"
        __label__ = 21; break; //@line 1097 "_cursesmodule.c"
      case 13: // $bb16
        var $34=HEAP[$x]; //@line 1098 "_cursesmodule.c"
        var $35=HEAP[$y]; //@line 1098 "_cursesmodule.c"
        var $36=HEAP[$self_addr]; //@line 1098 "_cursesmodule.c"
        var $37=(($36+8)&4294967295); //@line 1098 "_cursesmodule.c"
        var $38=HEAP[$37]; //@line 1098 "_cursesmodule.c"
        var $39=_wmove($38, $35, $34); //@line 1098 "_cursesmodule.c"
        var $40=((($39))|0)!=-1; //@line 1098 "_cursesmodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1098 "_cursesmodule.c"
      case 14: // $bb17
        var $41=HEAP[$n]; //@line 1098 "_cursesmodule.c"
        var $42=((($41))|0) <= 1023; //@line 1098 "_cursesmodule.c"
        var $min18=($42) ? ($41) : 1023; //@line 1098 "_cursesmodule.c"
        var $43=HEAP[$self_addr]; //@line 1098 "_cursesmodule.c"
        var $44=(($43+8)&4294967295); //@line 1098 "_cursesmodule.c"
        var $45=HEAP[$44]; //@line 1098 "_cursesmodule.c"
        var $rtn20=$rtn; //@line 1098 "_cursesmodule.c"
        var $46=_winnstr($45, $rtn20, $min18); //@line 1098 "_cursesmodule.c"
        HEAP[$iftmp_189]=$46; //@line 1098 "_cursesmodule.c"
        __label__ = 16; break; //@line 1098 "_cursesmodule.c"
      case 15: // $bb21
        HEAP[$iftmp_189]=-1; //@line 1098 "_cursesmodule.c"
        __label__ = 16; break; //@line 1098 "_cursesmodule.c"
      case 16: // $bb22
        var $47=HEAP[$iftmp_189]; //@line 1098 "_cursesmodule.c"
        HEAP[$rtn2]=$47; //@line 1098 "_cursesmodule.c"
        __label__ = 18; break; //@line 1098 "_cursesmodule.c"
      case 17: // $bb23
        var $48=HEAP[_PyExc_TypeError]; //@line 1101 "_cursesmodule.c"
        _PyErr_SetString($48, ((__str92)&4294967295)); //@line 1101 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1102 "_cursesmodule.c"
        __label__ = 21; break; //@line 1102 "_cursesmodule.c"
      case 18: // $bb24
        var $49=HEAP[$rtn2]; //@line 1104 "_cursesmodule.c"
        var $50=((($49))|0)==-1; //@line 1104 "_cursesmodule.c"
        if ($50) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1104 "_cursesmodule.c"
      case 19: // $bb25
        var $51=(($rtn)&4294967295); //@line 1105 "_cursesmodule.c"
        HEAP[$51]=0; //@line 1105 "_cursesmodule.c"
        __label__ = 20; break; //@line 1105 "_cursesmodule.c"
      case 20: // $bb26
        var $rtn27=$rtn; //@line 1106 "_cursesmodule.c"
        var $52=_PyString_FromString($rtn27); //@line 1106 "_cursesmodule.c"
        HEAP[$0]=$52; //@line 1106 "_cursesmodule.c"
        __label__ = 21; break; //@line 1106 "_cursesmodule.c"
      case 21: // $bb28
        var $53=HEAP[$0]; //@line 1087 "_cursesmodule.c"
        HEAP[$retval]=$53; //@line 1087 "_cursesmodule.c"
        __label__ = 22; break; //@line 1087 "_cursesmodule.c"
      case 22: // $return
        var $retval29=HEAP[$retval]; //@line 1087 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 1087 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_InsStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_204=__stackBase__+12;
        var $iftmp_199=__stackBase__+16;
        var $iftmp_198=__stackBase__+20;
        var $iftmp_197=__stackBase__+24;
        var $0=__stackBase__+28;
        var $rtn=__stackBase__+32;
        var $x=__stackBase__+36;
        var $y=__stackBase__+40;
        var $str=__stackBase__+44;
        var $attr=__stackBase__+48;
        var $attr_old=__stackBase__+52;
        var $lattr=__stackBase__+56;
        var $use_xy=__stackBase__+60;
        var $use_attr=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 1115 "_cursesmodule.c"
        HEAP[$attr_old]=0; //@line 1115 "_cursesmodule.c"
        HEAP[$use_xy]=0; //@line 1117 "_cursesmodule.c"
        HEAP[$use_attr]=0; //@line 1117 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1119 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1119 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 4; break;
        }
        else if ($2 == 3) {
          __label__ = 7; break;
        }
        else if ($2 == 4) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1121 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str39)&4294967295), $str); //@line 1121 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1121 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1121 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1122 "_cursesmodule.c"
        __label__ = 32; break; //@line 1122 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 1122 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1125 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str40)&4294967295), $str, $lattr); //@line 1125 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1125 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1125 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1126 "_cursesmodule.c"
        __label__ = 32; break; //@line 1126 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 1127 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 1127 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 1128 "_cursesmodule.c"
        __label__ = 14; break; //@line 1128 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 1131 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str93)&4294967295), $y, $x, $str); //@line 1131 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1131 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1131 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1132 "_cursesmodule.c"
        __label__ = 32; break; //@line 1132 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 1133 "_cursesmodule.c"
        __label__ = 14; break; //@line 1133 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 1136 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str94)&4294967295), $y, $x, $str, $lattr); //@line 1136 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 1136 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1136 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1137 "_cursesmodule.c"
        __label__ = 32; break; //@line 1137 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 1138 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 1138 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 1139 "_cursesmodule.c"
        var $17=HEAP[$use_attr]; //@line 1139 "_cursesmodule.c"
        HEAP[$use_xy]=$17; //@line 1139 "_cursesmodule.c"
        __label__ = 14; break; //@line 1139 "_cursesmodule.c"
      case 13: // $bb12
        var $18=HEAP[_PyExc_TypeError]; //@line 1142 "_cursesmodule.c"
        _PyErr_SetString($18, ((__str95)&4294967295)); //@line 1142 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1143 "_cursesmodule.c"
        __label__ = 32; break; //@line 1143 "_cursesmodule.c"
      case 14: // $bb13
        var $19=HEAP[$use_attr]; //@line 1146 "_cursesmodule.c"
        var $20=((($19))|0)==1; //@line 1146 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 21; break; } //@line 1146 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[$self_addr]; //@line 1147 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 1147 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1147 "_cursesmodule.c"
        var $24=($23)!=0; //@line 1147 "_cursesmodule.c"
        if ($24) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1147 "_cursesmodule.c"
      case 16: // $bb15
        var $25=HEAP[$self_addr]; //@line 1147 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 1147 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 1147 "_cursesmodule.c"
        var $28=(($27+16)&4294967295); //@line 1147 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 1147 "_cursesmodule.c"
        HEAP[$iftmp_197]=$29; //@line 1147 "_cursesmodule.c"
        __label__ = 18; break; //@line 1147 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$iftmp_197]=0; //@line 1147 "_cursesmodule.c"
        __label__ = 18; break; //@line 1147 "_cursesmodule.c"
      case 18: // $bb17
        var $30=HEAP[$iftmp_197]; //@line 1147 "_cursesmodule.c"
        HEAP[$attr_old]=$30; //@line 1147 "_cursesmodule.c"
        var $31=HEAP[$self_addr]; //@line 1148 "_cursesmodule.c"
        var $32=(($31+8)&4294967295); //@line 1148 "_cursesmodule.c"
        var $33=HEAP[$32]; //@line 1148 "_cursesmodule.c"
        var $34=($33)!=0; //@line 1148 "_cursesmodule.c"
        if ($34) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1148 "_cursesmodule.c"
      case 19: // $bb18
        var $35=HEAP[$self_addr]; //@line 1148 "_cursesmodule.c"
        var $36=(($35+8)&4294967295); //@line 1148 "_cursesmodule.c"
        var $37=HEAP[$36]; //@line 1148 "_cursesmodule.c"
        var $38=(($37+16)&4294967295); //@line 1148 "_cursesmodule.c"
        var $39=HEAP[$attr]; //@line 1148 "_cursesmodule.c"
        HEAP[$38]=$39; //@line 1148 "_cursesmodule.c"
        HEAP[$iftmp_198]=0; //@line 1148 "_cursesmodule.c"
        __label__ = 21; break; //@line 1148 "_cursesmodule.c"
      case 20: // $bb19
        HEAP[$iftmp_198]=-1; //@line 1148 "_cursesmodule.c"
        __label__ = 21; break; //@line 1148 "_cursesmodule.c"
      case 21: // $bb20
        var $40=HEAP[$use_xy]; //@line 1150 "_cursesmodule.c"
        var $41=((($40))|0)==1; //@line 1150 "_cursesmodule.c"
        if ($41) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 1150 "_cursesmodule.c"
      case 22: // $bb21
        var $42=HEAP[$x]; //@line 1151 "_cursesmodule.c"
        var $43=HEAP[$y]; //@line 1151 "_cursesmodule.c"
        var $44=HEAP[$self_addr]; //@line 1151 "_cursesmodule.c"
        var $45=(($44+8)&4294967295); //@line 1151 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 1151 "_cursesmodule.c"
        var $47=_wmove($46, $43, $42); //@line 1151 "_cursesmodule.c"
        var $48=((($47))|0)!=-1; //@line 1151 "_cursesmodule.c"
        if ($48) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1151 "_cursesmodule.c"
      case 23: // $bb22
        var $49=HEAP[$str]; //@line 1151 "_cursesmodule.c"
        var $50=HEAP[$self_addr]; //@line 1151 "_cursesmodule.c"
        var $51=(($50+8)&4294967295); //@line 1151 "_cursesmodule.c"
        var $52=HEAP[$51]; //@line 1151 "_cursesmodule.c"
        var $53=_winsnstr($52, $49, -1); //@line 1151 "_cursesmodule.c"
        HEAP[$iftmp_199]=$53; //@line 1151 "_cursesmodule.c"
        __label__ = 25; break; //@line 1151 "_cursesmodule.c"
      case 24: // $bb23
        HEAP[$iftmp_199]=-1; //@line 1151 "_cursesmodule.c"
        __label__ = 25; break; //@line 1151 "_cursesmodule.c"
      case 25: // $bb24
        var $54=HEAP[$iftmp_199]; //@line 1151 "_cursesmodule.c"
        HEAP[$rtn]=$54; //@line 1151 "_cursesmodule.c"
        __label__ = 27; break; //@line 1151 "_cursesmodule.c"
      case 26: // $bb25
        var $55=HEAP[$str]; //@line 1153 "_cursesmodule.c"
        var $56=HEAP[$self_addr]; //@line 1153 "_cursesmodule.c"
        var $57=(($56+8)&4294967295); //@line 1153 "_cursesmodule.c"
        var $58=HEAP[$57]; //@line 1153 "_cursesmodule.c"
        var $59=_winsnstr($58, $55, -1); //@line 1153 "_cursesmodule.c"
        HEAP[$rtn]=$59; //@line 1153 "_cursesmodule.c"
        __label__ = 27; break; //@line 1153 "_cursesmodule.c"
      case 27: // $bb26
        var $60=HEAP[$use_attr]; //@line 1154 "_cursesmodule.c"
        var $61=((($60))|0)==1; //@line 1154 "_cursesmodule.c"
        if ($61) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 1154 "_cursesmodule.c"
      case 28: // $bb27
        var $62=HEAP[$self_addr]; //@line 1155 "_cursesmodule.c"
        var $63=(($62+8)&4294967295); //@line 1155 "_cursesmodule.c"
        var $64=HEAP[$63]; //@line 1155 "_cursesmodule.c"
        var $65=($64)!=0; //@line 1155 "_cursesmodule.c"
        if ($65) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1155 "_cursesmodule.c"
      case 29: // $bb28
        var $66=HEAP[$self_addr]; //@line 1155 "_cursesmodule.c"
        var $67=(($66+8)&4294967295); //@line 1155 "_cursesmodule.c"
        var $68=HEAP[$67]; //@line 1155 "_cursesmodule.c"
        var $69=(($68+16)&4294967295); //@line 1155 "_cursesmodule.c"
        var $70=HEAP[$attr_old]; //@line 1155 "_cursesmodule.c"
        HEAP[$69]=$70; //@line 1155 "_cursesmodule.c"
        HEAP[$iftmp_204]=0; //@line 1155 "_cursesmodule.c"
        __label__ = 31; break; //@line 1155 "_cursesmodule.c"
      case 30: // $bb29
        HEAP[$iftmp_204]=-1; //@line 1155 "_cursesmodule.c"
        __label__ = 31; break; //@line 1155 "_cursesmodule.c"
      case 31: // $bb30
        var $71=HEAP[$rtn]; //@line 1156 "_cursesmodule.c"
        var $72=_PyCursesCheckERR($71, ((__str96)&4294967295)); //@line 1156 "_cursesmodule.c"
        HEAP[$0]=$72; //@line 1156 "_cursesmodule.c"
        __label__ = 32; break; //@line 1156 "_cursesmodule.c"
      case 32: // $bb31
        var $73=HEAP[$0]; //@line 1122 "_cursesmodule.c"
        HEAP[$retval]=$73; //@line 1122 "_cursesmodule.c"
        __label__ = 33; break; //@line 1122 "_cursesmodule.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 1122 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1122 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_InsNStr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_217=__stackBase__+12;
        var $iftmp_210=__stackBase__+16;
        var $iftmp_209=__stackBase__+20;
        var $iftmp_208=__stackBase__+24;
        var $0=__stackBase__+28;
        var $rtn=__stackBase__+32;
        var $x=__stackBase__+36;
        var $y=__stackBase__+40;
        var $n=__stackBase__+44;
        var $str=__stackBase__+48;
        var $attr=__stackBase__+52;
        var $attr_old=__stackBase__+56;
        var $lattr=__stackBase__+60;
        var $use_xy=__stackBase__+64;
        var $use_attr=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attr]=0; //@line 1164 "_cursesmodule.c"
        HEAP[$attr_old]=0; //@line 1164 "_cursesmodule.c"
        HEAP[$use_xy]=0; //@line 1166 "_cursesmodule.c"
        HEAP[$use_attr]=0; //@line 1166 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1168 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1168 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 4; break;
        }
        else if ($2 == 4) {
          __label__ = 7; break;
        }
        else if ($2 == 5) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1170 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str45)&4294967295), $str, $n); //@line 1170 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1170 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1170 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1171 "_cursesmodule.c"
        __label__ = 32; break; //@line 1171 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 1171 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1174 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str46)&4294967295), $str, $n, $lattr); //@line 1174 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1174 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1174 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1175 "_cursesmodule.c"
        __label__ = 32; break; //@line 1175 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 1176 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 1176 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 1177 "_cursesmodule.c"
        __label__ = 14; break; //@line 1177 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 1180 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str47)&4294967295), $y, $x, $str, $n); //@line 1180 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1180 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1180 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1181 "_cursesmodule.c"
        __label__ = 32; break; //@line 1181 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$use_xy]=1; //@line 1182 "_cursesmodule.c"
        __label__ = 14; break; //@line 1182 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$args_addr]; //@line 1185 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str48)&4294967295), $y, $x, $str, $n, $lattr); //@line 1185 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 1185 "_cursesmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1185 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1186 "_cursesmodule.c"
        __label__ = 32; break; //@line 1186 "_cursesmodule.c"
      case 12: // $bb11
        var $16=HEAP[$lattr]; //@line 1187 "_cursesmodule.c"
        HEAP[$attr]=$16; //@line 1187 "_cursesmodule.c"
        HEAP[$use_attr]=1; //@line 1188 "_cursesmodule.c"
        var $17=HEAP[$use_attr]; //@line 1188 "_cursesmodule.c"
        HEAP[$use_xy]=$17; //@line 1188 "_cursesmodule.c"
        __label__ = 14; break; //@line 1188 "_cursesmodule.c"
      case 13: // $bb12
        var $18=HEAP[_PyExc_TypeError]; //@line 1191 "_cursesmodule.c"
        _PyErr_SetString($18, ((__str97)&4294967295)); //@line 1191 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1192 "_cursesmodule.c"
        __label__ = 32; break; //@line 1192 "_cursesmodule.c"
      case 14: // $bb13
        var $19=HEAP[$use_attr]; //@line 1195 "_cursesmodule.c"
        var $20=((($19))|0)==1; //@line 1195 "_cursesmodule.c"
        if ($20) { __label__ = 15; break; } else { __label__ = 21; break; } //@line 1195 "_cursesmodule.c"
      case 15: // $bb14
        var $21=HEAP[$self_addr]; //@line 1196 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 1196 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1196 "_cursesmodule.c"
        var $24=($23)!=0; //@line 1196 "_cursesmodule.c"
        if ($24) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1196 "_cursesmodule.c"
      case 16: // $bb15
        var $25=HEAP[$self_addr]; //@line 1196 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 1196 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 1196 "_cursesmodule.c"
        var $28=(($27+16)&4294967295); //@line 1196 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 1196 "_cursesmodule.c"
        HEAP[$iftmp_208]=$29; //@line 1196 "_cursesmodule.c"
        __label__ = 18; break; //@line 1196 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$iftmp_208]=0; //@line 1196 "_cursesmodule.c"
        __label__ = 18; break; //@line 1196 "_cursesmodule.c"
      case 18: // $bb17
        var $30=HEAP[$iftmp_208]; //@line 1196 "_cursesmodule.c"
        HEAP[$attr_old]=$30; //@line 1196 "_cursesmodule.c"
        var $31=HEAP[$self_addr]; //@line 1197 "_cursesmodule.c"
        var $32=(($31+8)&4294967295); //@line 1197 "_cursesmodule.c"
        var $33=HEAP[$32]; //@line 1197 "_cursesmodule.c"
        var $34=($33)!=0; //@line 1197 "_cursesmodule.c"
        if ($34) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1197 "_cursesmodule.c"
      case 19: // $bb18
        var $35=HEAP[$self_addr]; //@line 1197 "_cursesmodule.c"
        var $36=(($35+8)&4294967295); //@line 1197 "_cursesmodule.c"
        var $37=HEAP[$36]; //@line 1197 "_cursesmodule.c"
        var $38=(($37+16)&4294967295); //@line 1197 "_cursesmodule.c"
        var $39=HEAP[$attr]; //@line 1197 "_cursesmodule.c"
        HEAP[$38]=$39; //@line 1197 "_cursesmodule.c"
        HEAP[$iftmp_209]=0; //@line 1197 "_cursesmodule.c"
        __label__ = 21; break; //@line 1197 "_cursesmodule.c"
      case 20: // $bb19
        HEAP[$iftmp_209]=-1; //@line 1197 "_cursesmodule.c"
        __label__ = 21; break; //@line 1197 "_cursesmodule.c"
      case 21: // $bb20
        var $40=HEAP[$use_xy]; //@line 1199 "_cursesmodule.c"
        var $41=((($40))|0)==1; //@line 1199 "_cursesmodule.c"
        if ($41) { __label__ = 22; break; } else { __label__ = 26; break; } //@line 1199 "_cursesmodule.c"
      case 22: // $bb21
        var $42=HEAP[$x]; //@line 1200 "_cursesmodule.c"
        var $43=HEAP[$y]; //@line 1200 "_cursesmodule.c"
        var $44=HEAP[$self_addr]; //@line 1200 "_cursesmodule.c"
        var $45=(($44+8)&4294967295); //@line 1200 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 1200 "_cursesmodule.c"
        var $47=_wmove($46, $43, $42); //@line 1200 "_cursesmodule.c"
        var $48=((($47))|0)!=-1; //@line 1200 "_cursesmodule.c"
        if ($48) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1200 "_cursesmodule.c"
      case 23: // $bb22
        var $49=HEAP[$n]; //@line 1200 "_cursesmodule.c"
        var $50=HEAP[$str]; //@line 1200 "_cursesmodule.c"
        var $51=HEAP[$self_addr]; //@line 1200 "_cursesmodule.c"
        var $52=(($51+8)&4294967295); //@line 1200 "_cursesmodule.c"
        var $53=HEAP[$52]; //@line 1200 "_cursesmodule.c"
        var $54=_winsnstr($53, $50, $49); //@line 1200 "_cursesmodule.c"
        HEAP[$iftmp_210]=$54; //@line 1200 "_cursesmodule.c"
        __label__ = 25; break; //@line 1200 "_cursesmodule.c"
      case 24: // $bb23
        HEAP[$iftmp_210]=-1; //@line 1200 "_cursesmodule.c"
        __label__ = 25; break; //@line 1200 "_cursesmodule.c"
      case 25: // $bb24
        var $55=HEAP[$iftmp_210]; //@line 1200 "_cursesmodule.c"
        HEAP[$rtn]=$55; //@line 1200 "_cursesmodule.c"
        __label__ = 27; break; //@line 1200 "_cursesmodule.c"
      case 26: // $bb25
        var $56=HEAP[$n]; //@line 1202 "_cursesmodule.c"
        var $57=HEAP[$str]; //@line 1202 "_cursesmodule.c"
        var $58=HEAP[$self_addr]; //@line 1202 "_cursesmodule.c"
        var $59=(($58+8)&4294967295); //@line 1202 "_cursesmodule.c"
        var $60=HEAP[$59]; //@line 1202 "_cursesmodule.c"
        var $61=_winsnstr($60, $57, $56); //@line 1202 "_cursesmodule.c"
        HEAP[$rtn]=$61; //@line 1202 "_cursesmodule.c"
        __label__ = 27; break; //@line 1202 "_cursesmodule.c"
      case 27: // $bb26
        var $62=HEAP[$use_attr]; //@line 1203 "_cursesmodule.c"
        var $63=((($62))|0)==1; //@line 1203 "_cursesmodule.c"
        if ($63) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 1203 "_cursesmodule.c"
      case 28: // $bb27
        var $64=HEAP[$self_addr]; //@line 1204 "_cursesmodule.c"
        var $65=(($64+8)&4294967295); //@line 1204 "_cursesmodule.c"
        var $66=HEAP[$65]; //@line 1204 "_cursesmodule.c"
        var $67=($66)!=0; //@line 1204 "_cursesmodule.c"
        if ($67) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1204 "_cursesmodule.c"
      case 29: // $bb28
        var $68=HEAP[$self_addr]; //@line 1204 "_cursesmodule.c"
        var $69=(($68+8)&4294967295); //@line 1204 "_cursesmodule.c"
        var $70=HEAP[$69]; //@line 1204 "_cursesmodule.c"
        var $71=(($70+16)&4294967295); //@line 1204 "_cursesmodule.c"
        var $72=HEAP[$attr_old]; //@line 1204 "_cursesmodule.c"
        HEAP[$71]=$72; //@line 1204 "_cursesmodule.c"
        HEAP[$iftmp_217]=0; //@line 1204 "_cursesmodule.c"
        __label__ = 31; break; //@line 1204 "_cursesmodule.c"
      case 30: // $bb29
        HEAP[$iftmp_217]=-1; //@line 1204 "_cursesmodule.c"
        __label__ = 31; break; //@line 1204 "_cursesmodule.c"
      case 31: // $bb30
        var $73=HEAP[$rtn]; //@line 1205 "_cursesmodule.c"
        var $74=_PyCursesCheckERR($73, ((__str98)&4294967295)); //@line 1205 "_cursesmodule.c"
        HEAP[$0]=$74; //@line 1205 "_cursesmodule.c"
        __label__ = 32; break; //@line 1205 "_cursesmodule.c"
      case 32: // $bb31
        var $75=HEAP[$0]; //@line 1171 "_cursesmodule.c"
        HEAP[$retval]=$75; //@line 1171 "_cursesmodule.c"
        __label__ = 33; break; //@line 1171 "_cursesmodule.c"
      case 33: // $return
        var $retval32=HEAP[$retval]; //@line 1171 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1171 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Is_LineTouched($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $line=__stackBase__+16;
        var $erg=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1212 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str99)&4294967295), $line); //@line 1212 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 1212 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1212 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1213 "_cursesmodule.c"
        __label__ = 7; break; //@line 1213 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$line]; //@line 1214 "_cursesmodule.c"
        var $5=HEAP[$self_addr]; //@line 1214 "_cursesmodule.c"
        var $6=(($5+8)&4294967295); //@line 1214 "_cursesmodule.c"
        var $7=HEAP[$6]; //@line 1214 "_cursesmodule.c"
        var $8=_is_linetouched($7, $4); //@line 1214 "_cursesmodule.c"
        var $9=unSign(($8), 8, 0); //@line 1214 "_cursesmodule.c"
        HEAP[$erg]=$9; //@line 1214 "_cursesmodule.c"
        var $10=HEAP[$erg]; //@line 1215 "_cursesmodule.c"
        var $11=((($10))|0)==-1; //@line 1215 "_cursesmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1215 "_cursesmodule.c"
      case 3: // $bb2
        var $12=HEAP[_PyExc_TypeError]; //@line 1216 "_cursesmodule.c"
        _PyErr_SetString($12, ((__str100)&4294967295)); //@line 1216 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1218 "_cursesmodule.c"
        __label__ = 7; break; //@line 1218 "_cursesmodule.c"
      case 4: // $bb3
        var $13=HEAP[$erg]; //@line 1220 "_cursesmodule.c"
        var $14=((($13))|0)==0; //@line 1220 "_cursesmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1220 "_cursesmodule.c"
      case 5: // $bb4
        var $15=((__Py_ZeroStruct)&4294967295); //@line 1221 "_cursesmodule.c"
        var $16=HEAP[$15]; //@line 1221 "_cursesmodule.c"
        var $17=((($16) + 1)&4294967295); //@line 1221 "_cursesmodule.c"
        var $18=((__Py_ZeroStruct)&4294967295); //@line 1221 "_cursesmodule.c"
        HEAP[$18]=$17; //@line 1221 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1222 "_cursesmodule.c"
        __label__ = 7; break; //@line 1222 "_cursesmodule.c"
      case 6: // $bb5
        var $19=((__Py_TrueStruct)&4294967295); //@line 1224 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 1224 "_cursesmodule.c"
        var $21=((($20) + 1)&4294967295); //@line 1224 "_cursesmodule.c"
        var $22=((__Py_TrueStruct)&4294967295); //@line 1224 "_cursesmodule.c"
        HEAP[$22]=$21; //@line 1224 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1225 "_cursesmodule.c"
        __label__ = 7; break; //@line 1225 "_cursesmodule.c"
      case 7: // $bb6
        var $23=HEAP[$0]; //@line 1213 "_cursesmodule.c"
        HEAP[$retval]=$23; //@line 1213 "_cursesmodule.c"
        __label__ = 8; break; //@line 1213 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1213 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1213 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_NoOutRefresh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pminrow=__stackBase__+16;
        var $pmincol=__stackBase__+20;
        var $sminrow=__stackBase__+24;
        var $smincol=__stackBase__+28;
        var $smaxrow=__stackBase__+32;
        var $smaxcol=__stackBase__+36;
        var $rtn=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 1238 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 1238 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 1238 "_cursesmodule.c"
        var $4=(($3+12)&4294967295); //@line 1238 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 1238 "_cursesmodule.c"
        var $6=reSign(($5), 16, 0); //@line 1238 "_cursesmodule.c"
        var $7=($6) & 16; //@line 1238 "_cursesmodule.c"
        var $8=((($7))|0)!=0; //@line 1238 "_cursesmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1238 "_cursesmodule.c"
      case 1: // $bb
        var $9=HEAP[$args_addr]; //@line 1241 "_cursesmodule.c"
        var $10=_PyTuple_Size($9); //@line 1241 "_cursesmodule.c"
        if ($10 == 6) {
          __label__ = 2; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 2: // $bb1
        var $11=HEAP[$args_addr]; //@line 1243 "_cursesmodule.c"
        var $12=_PyArg_ParseTuple($11, ((__str101)&4294967295), $pminrow, $pmincol, $sminrow, $smincol, $smaxrow, $smaxcol); //@line 1243 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 1243 "_cursesmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1243 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1248 "_cursesmodule.c"
        __label__ = 9; break; //@line 1248 "_cursesmodule.c"
      case 4: // $bb3
        var $14=HEAP[$smaxcol]; //@line 1250 "_cursesmodule.c"
        var $15=HEAP[$smaxrow]; //@line 1250 "_cursesmodule.c"
        var $16=HEAP[$smincol]; //@line 1250 "_cursesmodule.c"
        var $17=HEAP[$sminrow]; //@line 1250 "_cursesmodule.c"
        var $18=HEAP[$pmincol]; //@line 1250 "_cursesmodule.c"
        var $19=HEAP[$pminrow]; //@line 1250 "_cursesmodule.c"
        var $20=HEAP[$self_addr]; //@line 1250 "_cursesmodule.c"
        var $21=(($20+8)&4294967295); //@line 1250 "_cursesmodule.c"
        var $22=HEAP[$21]; //@line 1250 "_cursesmodule.c"
        var $23=_pnoutrefresh($22, $19, $18, $17, $16, $15, $14); //@line 1250 "_cursesmodule.c"
        HEAP[$rtn]=$23; //@line 1250 "_cursesmodule.c"
        var $24=HEAP[$rtn]; //@line 1254 "_cursesmodule.c"
        var $25=_PyCursesCheckERR($24, ((__str102)&4294967295)); //@line 1254 "_cursesmodule.c"
        HEAP[$0]=$25; //@line 1254 "_cursesmodule.c"
        __label__ = 9; break; //@line 1254 "_cursesmodule.c"
      case 5: // $bb4
        var $26=HEAP[_PyCursesError]; //@line 1256 "_cursesmodule.c"
        _PyErr_SetString($26, ((__str103)&4294967295)); //@line 1256 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1259 "_cursesmodule.c"
        __label__ = 9; break; //@line 1259 "_cursesmodule.c"
      case 6: // $bb5
        var $27=HEAP[$args_addr]; //@line 1262 "_cursesmodule.c"
        var $28=_PyArg_ParseTuple($27, ((__str104)&4294967295)); //@line 1262 "_cursesmodule.c"
        var $29=((($28))|0)==0; //@line 1262 "_cursesmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1262 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1263 "_cursesmodule.c"
        __label__ = 9; break; //@line 1263 "_cursesmodule.c"
      case 8: // $bb7
        var $30=HEAP[$self_addr]; //@line 1266 "_cursesmodule.c"
        var $31=(($30+8)&4294967295); //@line 1266 "_cursesmodule.c"
        var $32=HEAP[$31]; //@line 1266 "_cursesmodule.c"
        var $33=_wnoutrefresh($32); //@line 1266 "_cursesmodule.c"
        HEAP[$rtn]=$33; //@line 1266 "_cursesmodule.c"
        var $34=HEAP[$rtn]; //@line 1268 "_cursesmodule.c"
        var $35=_PyCursesCheckERR($34, ((__str105)&4294967295)); //@line 1268 "_cursesmodule.c"
        HEAP[$0]=$35; //@line 1268 "_cursesmodule.c"
        __label__ = 9; break; //@line 1268 "_cursesmodule.c"
      case 9: // $bb8
        var $36=HEAP[$0]; //@line 1248 "_cursesmodule.c"
        HEAP[$retval]=$36; //@line 1248 "_cursesmodule.c"
        __label__ = 10; break; //@line 1248 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1248 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1248 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Overlay($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $use_copywin=__stackBase__+20;
        var $sminrow=__stackBase__+24;
        var $smincol=__stackBase__+28;
        var $dminrow=__stackBase__+32;
        var $dmincol=__stackBase__+36;
        var $dmaxrow=__stackBase__+40;
        var $dmaxcol=__stackBase__+44;
        var $rtn=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$use_copywin]=0; //@line 1276 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1280 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1280 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 7) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1282 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str106)&4294967295), _PyCursesWindow_Type, $temp); //@line 1282 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1282 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1282 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1284 "_cursesmodule.c"
        __label__ = 11; break; //@line 1284 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 1284 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1287 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str107)&4294967295), _PyCursesWindow_Type, $temp, $sminrow, $smincol, $dminrow, $dmincol, $dmaxrow, $dmaxcol); //@line 1287 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1287 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1287 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1290 "_cursesmodule.c"
        __label__ = 11; break; //@line 1290 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$use_copywin]=1; //@line 1291 "_cursesmodule.c"
        __label__ = 8; break; //@line 1291 "_cursesmodule.c"
      case 7: // $bb6
        var $9=HEAP[_PyExc_TypeError]; //@line 1294 "_cursesmodule.c"
        _PyErr_SetString($9, ((__str108)&4294967295)); //@line 1294 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1296 "_cursesmodule.c"
        __label__ = 11; break; //@line 1296 "_cursesmodule.c"
      case 8: // $bb7
        var $10=HEAP[$use_copywin]; //@line 1299 "_cursesmodule.c"
        var $11=((($10))|0)==1; //@line 1299 "_cursesmodule.c"
        if ($11) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1299 "_cursesmodule.c"
      case 9: // $bb8
        var $12=HEAP[$dmaxcol]; //@line 1300 "_cursesmodule.c"
        var $13=HEAP[$dmaxrow]; //@line 1300 "_cursesmodule.c"
        var $14=HEAP[$dmincol]; //@line 1300 "_cursesmodule.c"
        var $15=HEAP[$dminrow]; //@line 1300 "_cursesmodule.c"
        var $16=HEAP[$smincol]; //@line 1300 "_cursesmodule.c"
        var $17=HEAP[$sminrow]; //@line 1300 "_cursesmodule.c"
        var $18=HEAP[$temp]; //@line 1300 "_cursesmodule.c"
        var $19=(($18+8)&4294967295); //@line 1300 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 1300 "_cursesmodule.c"
        var $21=HEAP[$self_addr]; //@line 1300 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 1300 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1300 "_cursesmodule.c"
        var $24=_copywin($23, $20, $17, $16, $15, $14, $13, $12, 1); //@line 1300 "_cursesmodule.c"
        HEAP[$rtn]=$24; //@line 1300 "_cursesmodule.c"
        var $25=HEAP[$rtn]; //@line 1302 "_cursesmodule.c"
        var $26=_PyCursesCheckERR($25, ((__str109)&4294967295)); //@line 1302 "_cursesmodule.c"
        HEAP[$0]=$26; //@line 1302 "_cursesmodule.c"
        __label__ = 11; break; //@line 1302 "_cursesmodule.c"
      case 10: // $bb9
        var $27=HEAP[$temp]; //@line 1305 "_cursesmodule.c"
        var $28=(($27+8)&4294967295); //@line 1305 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 1305 "_cursesmodule.c"
        var $30=HEAP[$self_addr]; //@line 1305 "_cursesmodule.c"
        var $31=(($30+8)&4294967295); //@line 1305 "_cursesmodule.c"
        var $32=HEAP[$31]; //@line 1305 "_cursesmodule.c"
        var $33=_overlay($32, $29); //@line 1305 "_cursesmodule.c"
        HEAP[$rtn]=$33; //@line 1305 "_cursesmodule.c"
        var $34=HEAP[$rtn]; //@line 1306 "_cursesmodule.c"
        var $35=_PyCursesCheckERR($34, ((__str110)&4294967295)); //@line 1306 "_cursesmodule.c"
        HEAP[$0]=$35; //@line 1306 "_cursesmodule.c"
        __label__ = 11; break; //@line 1306 "_cursesmodule.c"
      case 11: // $bb10
        var $36=HEAP[$0]; //@line 1284 "_cursesmodule.c"
        HEAP[$retval]=$36; //@line 1284 "_cursesmodule.c"
        __label__ = 12; break; //@line 1284 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1284 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1284 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Overwrite($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $use_copywin=__stackBase__+20;
        var $sminrow=__stackBase__+24;
        var $smincol=__stackBase__+28;
        var $dminrow=__stackBase__+32;
        var $dmincol=__stackBase__+36;
        var $dmaxrow=__stackBase__+40;
        var $dmaxcol=__stackBase__+44;
        var $rtn=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$use_copywin]=0; //@line 1314 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1318 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1318 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 7) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1320 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str106)&4294967295), _PyCursesWindow_Type, $temp); //@line 1320 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1320 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1320 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1322 "_cursesmodule.c"
        __label__ = 11; break; //@line 1322 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 1322 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1325 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str107)&4294967295), _PyCursesWindow_Type, $temp, $sminrow, $smincol, $dminrow, $dmincol, $dmaxrow, $dmaxcol); //@line 1325 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1325 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1325 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1328 "_cursesmodule.c"
        __label__ = 11; break; //@line 1328 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$use_copywin]=1; //@line 1329 "_cursesmodule.c"
        __label__ = 8; break; //@line 1329 "_cursesmodule.c"
      case 7: // $bb6
        var $9=HEAP[_PyExc_TypeError]; //@line 1332 "_cursesmodule.c"
        _PyErr_SetString($9, ((__str111)&4294967295)); //@line 1332 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1334 "_cursesmodule.c"
        __label__ = 11; break; //@line 1334 "_cursesmodule.c"
      case 8: // $bb7
        var $10=HEAP[$use_copywin]; //@line 1337 "_cursesmodule.c"
        var $11=((($10))|0)==1; //@line 1337 "_cursesmodule.c"
        if ($11) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1337 "_cursesmodule.c"
      case 9: // $bb8
        var $12=HEAP[$dmaxcol]; //@line 1338 "_cursesmodule.c"
        var $13=HEAP[$dmaxrow]; //@line 1338 "_cursesmodule.c"
        var $14=HEAP[$dmincol]; //@line 1338 "_cursesmodule.c"
        var $15=HEAP[$dminrow]; //@line 1338 "_cursesmodule.c"
        var $16=HEAP[$smincol]; //@line 1338 "_cursesmodule.c"
        var $17=HEAP[$sminrow]; //@line 1338 "_cursesmodule.c"
        var $18=HEAP[$temp]; //@line 1338 "_cursesmodule.c"
        var $19=(($18+8)&4294967295); //@line 1338 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 1338 "_cursesmodule.c"
        var $21=HEAP[$self_addr]; //@line 1338 "_cursesmodule.c"
        var $22=(($21+8)&4294967295); //@line 1338 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1338 "_cursesmodule.c"
        var $24=_copywin($23, $20, $17, $16, $15, $14, $13, $12, 0); //@line 1338 "_cursesmodule.c"
        HEAP[$rtn]=$24; //@line 1338 "_cursesmodule.c"
        var $25=HEAP[$rtn]; //@line 1340 "_cursesmodule.c"
        var $26=_PyCursesCheckERR($25, ((__str109)&4294967295)); //@line 1340 "_cursesmodule.c"
        HEAP[$0]=$26; //@line 1340 "_cursesmodule.c"
        __label__ = 11; break; //@line 1340 "_cursesmodule.c"
      case 10: // $bb9
        var $27=HEAP[$temp]; //@line 1343 "_cursesmodule.c"
        var $28=(($27+8)&4294967295); //@line 1343 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 1343 "_cursesmodule.c"
        var $30=HEAP[$self_addr]; //@line 1343 "_cursesmodule.c"
        var $31=(($30+8)&4294967295); //@line 1343 "_cursesmodule.c"
        var $32=HEAP[$31]; //@line 1343 "_cursesmodule.c"
        var $33=_overwrite($32, $29); //@line 1343 "_cursesmodule.c"
        HEAP[$rtn]=$33; //@line 1343 "_cursesmodule.c"
        var $34=HEAP[$rtn]; //@line 1344 "_cursesmodule.c"
        var $35=_PyCursesCheckERR($34, ((__str112)&4294967295)); //@line 1344 "_cursesmodule.c"
        HEAP[$0]=$35; //@line 1344 "_cursesmodule.c"
        __label__ = 11; break; //@line 1344 "_cursesmodule.c"
      case 11: // $bb10
        var $36=HEAP[$0]; //@line 1322 "_cursesmodule.c"
        HEAP[$retval]=$36; //@line 1322 "_cursesmodule.c"
        __label__ = 12; break; //@line 1322 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 1322 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1322 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_PutWin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1353 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str113)&4294967295), $temp); //@line 1353 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 1353 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1353 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1354 "_cursesmodule.c"
        __label__ = 6; break; //@line 1354 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$temp]; //@line 1355 "_cursesmodule.c"
        var $5=(($4+4)&4294967295); //@line 1355 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1355 "_cursesmodule.c"
        var $7=($6)!=(_PyFile_Type); //@line 1355 "_cursesmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1355 "_cursesmodule.c"
      case 3: // $bb2
        var $8=HEAP[$temp]; //@line 1355 "_cursesmodule.c"
        var $9=(($8+4)&4294967295); //@line 1355 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1355 "_cursesmodule.c"
        var $11=_PyType_IsSubtype($10, _PyFile_Type); //@line 1355 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1355 "_cursesmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1355 "_cursesmodule.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_TypeError]; //@line 1356 "_cursesmodule.c"
        _PyErr_SetString($13, ((__str114)&4294967295)); //@line 1356 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1357 "_cursesmodule.c"
        __label__ = 6; break; //@line 1357 "_cursesmodule.c"
      case 5: // $bb4
        var $14=HEAP[$temp]; //@line 1359 "_cursesmodule.c"
        var $15=_PyFile_AsFile($14); //@line 1359 "_cursesmodule.c"
        var $16=HEAP[$self_addr]; //@line 1359 "_cursesmodule.c"
        var $17=(($16+8)&4294967295); //@line 1359 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 1359 "_cursesmodule.c"
        var $19=_putwin($18, $15); //@line 1359 "_cursesmodule.c"
        var $20=_PyCursesCheckERR($19, ((__str115)&4294967295)); //@line 1359 "_cursesmodule.c"
        HEAP[$0]=$20; //@line 1359 "_cursesmodule.c"
        __label__ = 6; break; //@line 1359 "_cursesmodule.c"
      case 6: // $bb5
        var $21=HEAP[$0]; //@line 1354 "_cursesmodule.c"
        HEAP[$retval]=$21; //@line 1354 "_cursesmodule.c"
        __label__ = 7; break; //@line 1354 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1354 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1354 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_RedrawLine($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $beg=__stackBase__+16;
        var $num=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1367 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str116)&4294967295), $beg, $num); //@line 1367 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 1367 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1367 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1368 "_cursesmodule.c"
        __label__ = 3; break; //@line 1368 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$num]; //@line 1369 "_cursesmodule.c"
        var $5=HEAP[$beg]; //@line 1369 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 1369 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 1369 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 1369 "_cursesmodule.c"
        var $9=_wredrawln($8, $5, $4); //@line 1369 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str117)&4294967295)); //@line 1369 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 1369 "_cursesmodule.c"
        __label__ = 3; break; //@line 1369 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 1368 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 1368 "_cursesmodule.c"
        __label__ = 4; break; //@line 1368 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1368 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1368 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Refresh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pminrow=__stackBase__+16;
        var $pmincol=__stackBase__+20;
        var $sminrow=__stackBase__+24;
        var $smincol=__stackBase__+28;
        var $smaxrow=__stackBase__+32;
        var $smaxcol=__stackBase__+36;
        var $rtn=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$self_addr]; //@line 1381 "_cursesmodule.c"
        var $2=(($1+8)&4294967295); //@line 1381 "_cursesmodule.c"
        var $3=HEAP[$2]; //@line 1381 "_cursesmodule.c"
        var $4=(($3+12)&4294967295); //@line 1381 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 1381 "_cursesmodule.c"
        var $6=reSign(($5), 16, 0); //@line 1381 "_cursesmodule.c"
        var $7=($6) & 16; //@line 1381 "_cursesmodule.c"
        var $8=((($7))|0)!=0; //@line 1381 "_cursesmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1381 "_cursesmodule.c"
      case 1: // $bb
        var $9=HEAP[$args_addr]; //@line 1384 "_cursesmodule.c"
        var $10=_PyTuple_Size($9); //@line 1384 "_cursesmodule.c"
        if ($10 == 6) {
          __label__ = 2; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 2: // $bb1
        var $11=HEAP[$args_addr]; //@line 1386 "_cursesmodule.c"
        var $12=_PyArg_ParseTuple($11, ((__str101)&4294967295), $pminrow, $pmincol, $sminrow, $smincol, $smaxrow, $smaxcol); //@line 1386 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 1386 "_cursesmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1386 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1391 "_cursesmodule.c"
        __label__ = 9; break; //@line 1391 "_cursesmodule.c"
      case 4: // $bb3
        var $14=HEAP[$smaxcol]; //@line 1394 "_cursesmodule.c"
        var $15=HEAP[$smaxrow]; //@line 1394 "_cursesmodule.c"
        var $16=HEAP[$smincol]; //@line 1394 "_cursesmodule.c"
        var $17=HEAP[$sminrow]; //@line 1394 "_cursesmodule.c"
        var $18=HEAP[$pmincol]; //@line 1394 "_cursesmodule.c"
        var $19=HEAP[$pminrow]; //@line 1394 "_cursesmodule.c"
        var $20=HEAP[$self_addr]; //@line 1394 "_cursesmodule.c"
        var $21=(($20+8)&4294967295); //@line 1394 "_cursesmodule.c"
        var $22=HEAP[$21]; //@line 1394 "_cursesmodule.c"
        var $23=_prefresh($22, $19, $18, $17, $16, $15, $14); //@line 1394 "_cursesmodule.c"
        HEAP[$rtn]=$23; //@line 1394 "_cursesmodule.c"
        var $24=HEAP[$rtn]; //@line 1398 "_cursesmodule.c"
        var $25=_PyCursesCheckERR($24, ((__str118)&4294967295)); //@line 1398 "_cursesmodule.c"
        HEAP[$0]=$25; //@line 1398 "_cursesmodule.c"
        __label__ = 9; break; //@line 1398 "_cursesmodule.c"
      case 5: // $bb4
        var $26=HEAP[_PyCursesError]; //@line 1400 "_cursesmodule.c"
        _PyErr_SetString($26, ((__str119)&4294967295)); //@line 1400 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1402 "_cursesmodule.c"
        __label__ = 9; break; //@line 1402 "_cursesmodule.c"
      case 6: // $bb5
        var $27=HEAP[$args_addr]; //@line 1405 "_cursesmodule.c"
        var $28=_PyArg_ParseTuple($27, ((__str120)&4294967295)); //@line 1405 "_cursesmodule.c"
        var $29=((($28))|0)==0; //@line 1405 "_cursesmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1405 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1406 "_cursesmodule.c"
        __label__ = 9; break; //@line 1406 "_cursesmodule.c"
      case 8: // $bb7
        var $30=HEAP[$self_addr]; //@line 1408 "_cursesmodule.c"
        var $31=(($30+8)&4294967295); //@line 1408 "_cursesmodule.c"
        var $32=HEAP[$31]; //@line 1408 "_cursesmodule.c"
        var $33=_wrefresh($32); //@line 1408 "_cursesmodule.c"
        HEAP[$rtn]=$33; //@line 1408 "_cursesmodule.c"
        var $34=HEAP[$rtn]; //@line 1410 "_cursesmodule.c"
        var $35=_PyCursesCheckERR($34, ((__str118)&4294967295)); //@line 1410 "_cursesmodule.c"
        HEAP[$0]=$35; //@line 1410 "_cursesmodule.c"
        __label__ = 9; break; //@line 1410 "_cursesmodule.c"
      case 9: // $bb8
        var $36=HEAP[$0]; //@line 1391 "_cursesmodule.c"
        HEAP[$retval]=$36; //@line 1391 "_cursesmodule.c"
        __label__ = 10; break; //@line 1391 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1391 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1391 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_SetScrollRegion($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x=__stackBase__+16;
        var $y=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1418 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str121)&4294967295), $y, $x); //@line 1418 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 1418 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1418 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1419 "_cursesmodule.c"
        __label__ = 3; break; //@line 1419 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 1420 "_cursesmodule.c"
        var $5=HEAP[$y]; //@line 1420 "_cursesmodule.c"
        var $6=HEAP[$self_addr]; //@line 1420 "_cursesmodule.c"
        var $7=(($6+8)&4294967295); //@line 1420 "_cursesmodule.c"
        var $8=HEAP[$7]; //@line 1420 "_cursesmodule.c"
        var $9=_wsetscrreg($8, $5, $4); //@line 1420 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str122)&4294967295)); //@line 1420 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 1420 "_cursesmodule.c"
        __label__ = 3; break; //@line 1420 "_cursesmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 1419 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 1419 "_cursesmodule.c"
        __label__ = 4; break; //@line 1419 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1419 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1419 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_SubWin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $nlines=__stackBase__+20;
        var $ncols=__stackBase__+24;
        var $begin_y=__stackBase__+28;
        var $begin_x=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$nlines]=0; //@line 1429 "_cursesmodule.c"
        HEAP[$ncols]=0; //@line 1430 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1431 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1431 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 4) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1433 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str70)&4294967295), $begin_y, $begin_x); //@line 1433 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1433 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1433 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1434 "_cursesmodule.c"
        __label__ = 14; break; //@line 1434 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 8; break; //@line 1434 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1437 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str71)&4294967295), $nlines, $ncols, $begin_y, $begin_x); //@line 1437 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1437 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1437 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1439 "_cursesmodule.c"
        __label__ = 14; break; //@line 1439 "_cursesmodule.c"
      case 6: // $bb5
        __label__ = 8; break; //@line 1439 "_cursesmodule.c"
      case 7: // $bb6
        var $9=HEAP[_PyExc_TypeError]; //@line 1442 "_cursesmodule.c"
        _PyErr_SetString($9, ((__str123)&4294967295)); //@line 1442 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1443 "_cursesmodule.c"
        __label__ = 14; break; //@line 1443 "_cursesmodule.c"
      case 8: // $bb7
        var $10=HEAP[$self_addr]; //@line 1448 "_cursesmodule.c"
        var $11=(($10+8)&4294967295); //@line 1448 "_cursesmodule.c"
        var $12=HEAP[$11]; //@line 1448 "_cursesmodule.c"
        var $13=(($12+12)&4294967295); //@line 1448 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 1448 "_cursesmodule.c"
        var $15=reSign(($14), 16, 0); //@line 1448 "_cursesmodule.c"
        var $16=($15) & 16; //@line 1448 "_cursesmodule.c"
        var $17=((($16))|0)!=0; //@line 1448 "_cursesmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1448 "_cursesmodule.c"
      case 9: // $bb8
        var $18=HEAP[$begin_x]; //@line 1449 "_cursesmodule.c"
        var $19=HEAP[$begin_y]; //@line 1449 "_cursesmodule.c"
        var $20=HEAP[$ncols]; //@line 1449 "_cursesmodule.c"
        var $21=HEAP[$nlines]; //@line 1449 "_cursesmodule.c"
        var $22=HEAP[$self_addr]; //@line 1449 "_cursesmodule.c"
        var $23=(($22+8)&4294967295); //@line 1449 "_cursesmodule.c"
        var $24=HEAP[$23]; //@line 1449 "_cursesmodule.c"
        var $25=_subpad($24, $21, $20, $19, $18); //@line 1449 "_cursesmodule.c"
        HEAP[$win]=$25; //@line 1449 "_cursesmodule.c"
        __label__ = 11; break; //@line 1449 "_cursesmodule.c"
      case 10: // $bb9
        var $26=HEAP[$begin_x]; //@line 1452 "_cursesmodule.c"
        var $27=HEAP[$begin_y]; //@line 1452 "_cursesmodule.c"
        var $28=HEAP[$ncols]; //@line 1452 "_cursesmodule.c"
        var $29=HEAP[$nlines]; //@line 1452 "_cursesmodule.c"
        var $30=HEAP[$self_addr]; //@line 1452 "_cursesmodule.c"
        var $31=(($30+8)&4294967295); //@line 1452 "_cursesmodule.c"
        var $32=HEAP[$31]; //@line 1452 "_cursesmodule.c"
        var $33=_subwin($32, $29, $28, $27, $26); //@line 1452 "_cursesmodule.c"
        HEAP[$win]=$33; //@line 1452 "_cursesmodule.c"
        __label__ = 11; break; //@line 1452 "_cursesmodule.c"
      case 11: // $bb10
        var $34=HEAP[$win]; //@line 1454 "_cursesmodule.c"
        var $35=($34)==0; //@line 1454 "_cursesmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1454 "_cursesmodule.c"
      case 12: // $bb11
        var $36=HEAP[_catchall_NULL]; //@line 1455 "_cursesmodule.c"
        var $37=HEAP[_PyCursesError]; //@line 1455 "_cursesmodule.c"
        _PyErr_SetString($37, $36); //@line 1455 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1456 "_cursesmodule.c"
        __label__ = 14; break; //@line 1456 "_cursesmodule.c"
      case 13: // $bb12
        var $38=HEAP[$win]; //@line 1459 "_cursesmodule.c"
        var $39=_PyCursesWindow_New($38); //@line 1459 "_cursesmodule.c"
        HEAP[$0]=$39; //@line 1459 "_cursesmodule.c"
        __label__ = 14; break; //@line 1459 "_cursesmodule.c"
      case 14: // $bb13
        var $40=HEAP[$0]; //@line 1434 "_cursesmodule.c"
        HEAP[$retval]=$40; //@line 1434 "_cursesmodule.c"
        __label__ = 15; break; //@line 1434 "_cursesmodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 1434 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1434 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Scroll($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $nlines=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1466 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1466 "_cursesmodule.c"
        if ($2 == 0) {
          __label__ = 1; break;
        }
        else if ($2 == 1) {
          __label__ = 2; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$self_addr]; //@line 1468 "_cursesmodule.c"
        var $4=(($3+8)&4294967295); //@line 1468 "_cursesmodule.c"
        var $5=HEAP[$4]; //@line 1468 "_cursesmodule.c"
        var $6=_wscrl($5, 1); //@line 1468 "_cursesmodule.c"
        var $7=_PyCursesCheckERR($6, ((__str124)&4294967295)); //@line 1468 "_cursesmodule.c"
        HEAP[$0]=$7; //@line 1468 "_cursesmodule.c"
        __label__ = 6; break; //@line 1468 "_cursesmodule.c"
      case 2: // $bb1
        var $8=HEAP[$args_addr]; //@line 1470 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str23)&4294967295), $nlines); //@line 1470 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 1470 "_cursesmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1470 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1471 "_cursesmodule.c"
        __label__ = 6; break; //@line 1471 "_cursesmodule.c"
      case 4: // $bb3
        var $11=HEAP[$nlines]; //@line 1472 "_cursesmodule.c"
        var $12=HEAP[$self_addr]; //@line 1472 "_cursesmodule.c"
        var $13=(($12+8)&4294967295); //@line 1472 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 1472 "_cursesmodule.c"
        var $15=_wscrl($14, $11); //@line 1472 "_cursesmodule.c"
        var $16=_PyCursesCheckERR($15, ((__str124)&4294967295)); //@line 1472 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 1472 "_cursesmodule.c"
        __label__ = 6; break; //@line 1472 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[_PyExc_TypeError]; //@line 1474 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str125)&4294967295)); //@line 1474 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1475 "_cursesmodule.c"
        __label__ = 6; break; //@line 1475 "_cursesmodule.c"
      case 6: // $bb5
        var $18=HEAP[$0]; //@line 1468 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1468 "_cursesmodule.c"
        __label__ = 7; break; //@line 1468 "_cursesmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1468 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1468 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_TouchLine($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $st=__stackBase__+16;
        var $cnt=__stackBase__+20;
        var $val=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1483 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1483 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1485 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str126)&4294967295), $st, $cnt); //@line 1485 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1485 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1485 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1486 "_cursesmodule.c"
        __label__ = 8; break; //@line 1486 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$cnt]; //@line 1487 "_cursesmodule.c"
        var $7=HEAP[$st]; //@line 1487 "_cursesmodule.c"
        var $8=HEAP[$self_addr]; //@line 1487 "_cursesmodule.c"
        var $9=(($8+8)&4294967295); //@line 1487 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1487 "_cursesmodule.c"
        var $11=_wtouchln($10, $7, $6, 1); //@line 1487 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str127)&4294967295)); //@line 1487 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 1487 "_cursesmodule.c"
        __label__ = 8; break; //@line 1487 "_cursesmodule.c"
      case 4: // $bb3
        var $13=HEAP[$args_addr]; //@line 1489 "_cursesmodule.c"
        var $14=_PyArg_ParseTuple($13, ((__str128)&4294967295), $st, $cnt, $val); //@line 1489 "_cursesmodule.c"
        var $15=((($14))|0)==0; //@line 1489 "_cursesmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1489 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1490 "_cursesmodule.c"
        __label__ = 8; break; //@line 1490 "_cursesmodule.c"
      case 6: // $bb5
        var $16=HEAP[$val]; //@line 1491 "_cursesmodule.c"
        var $17=HEAP[$cnt]; //@line 1491 "_cursesmodule.c"
        var $18=HEAP[$st]; //@line 1491 "_cursesmodule.c"
        var $19=HEAP[$self_addr]; //@line 1491 "_cursesmodule.c"
        var $20=(($19+8)&4294967295); //@line 1491 "_cursesmodule.c"
        var $21=HEAP[$20]; //@line 1491 "_cursesmodule.c"
        var $22=_wtouchln($21, $18, $17, $16); //@line 1491 "_cursesmodule.c"
        var $23=_PyCursesCheckERR($22, ((__str127)&4294967295)); //@line 1491 "_cursesmodule.c"
        HEAP[$0]=$23; //@line 1491 "_cursesmodule.c"
        __label__ = 8; break; //@line 1491 "_cursesmodule.c"
      case 7: // $bb6
        var $24=HEAP[_PyExc_TypeError]; //@line 1493 "_cursesmodule.c"
        _PyErr_SetString($24, ((__str129)&4294967295)); //@line 1493 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1494 "_cursesmodule.c"
        __label__ = 8; break; //@line 1494 "_cursesmodule.c"
      case 8: // $bb7
        var $25=HEAP[$0]; //@line 1486 "_cursesmodule.c"
        HEAP[$retval]=$25; //@line 1486 "_cursesmodule.c"
        __label__ = 9; break; //@line 1486 "_cursesmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1486 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1486 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_Vline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+20;
        var $n=__stackBase__+24;
        var $x=__stackBase__+28;
        var $y=__stackBase__+32;
        var $code=__stackBase__+36;
        var $attr=__stackBase__+40;
        var $lattr=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$code]=0; //@line 1503 "_cursesmodule.c"
        HEAP[$attr]=0; //@line 1504 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 1507 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 1507 "_cursesmodule.c"
        if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 4; break;
        }
        else if ($2 == 4) {
          __label__ = 7; break;
        }
        else if ($2 == 5) {
          __label__ = 10; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 1509 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str83)&4294967295), $temp, $n); //@line 1509 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 1509 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1509 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1510 "_cursesmodule.c"
        __label__ = 19; break; //@line 1510 "_cursesmodule.c"
      case 3: // $bb2
        __label__ = 14; break; //@line 1510 "_cursesmodule.c"
      case 4: // $bb3
        var $6=HEAP[$args_addr]; //@line 1513 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str84)&4294967295), $temp, $n, $lattr); //@line 1513 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 1513 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1513 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1514 "_cursesmodule.c"
        __label__ = 19; break; //@line 1514 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$lattr]; //@line 1515 "_cursesmodule.c"
        HEAP[$attr]=$9; //@line 1515 "_cursesmodule.c"
        __label__ = 14; break; //@line 1515 "_cursesmodule.c"
      case 7: // $bb6
        var $10=HEAP[$args_addr]; //@line 1518 "_cursesmodule.c"
        var $11=_PyArg_ParseTuple($10, ((__str85)&4294967295), $y, $x, $temp, $n); //@line 1518 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1518 "_cursesmodule.c"
        if ($12) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1518 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 1519 "_cursesmodule.c"
        __label__ = 19; break; //@line 1519 "_cursesmodule.c"
      case 9: // $bb8
        var $13=HEAP[$x]; //@line 1520 "_cursesmodule.c"
        var $14=HEAP[$y]; //@line 1520 "_cursesmodule.c"
        var $15=HEAP[$self_addr]; //@line 1520 "_cursesmodule.c"
        var $16=(($15+8)&4294967295); //@line 1520 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 1520 "_cursesmodule.c"
        var $18=_wmove($17, $14, $13); //@line 1520 "_cursesmodule.c"
        HEAP[$code]=$18; //@line 1520 "_cursesmodule.c"
        __label__ = 14; break; //@line 1520 "_cursesmodule.c"
      case 10: // $bb9
        var $19=HEAP[$args_addr]; //@line 1523 "_cursesmodule.c"
        var $20=_PyArg_ParseTuple($19, ((__str86)&4294967295), $y, $x, $temp, $n, $lattr); //@line 1523 "_cursesmodule.c"
        var $21=((($20))|0)==0; //@line 1523 "_cursesmodule.c"
        if ($21) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1523 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1525 "_cursesmodule.c"
        __label__ = 19; break; //@line 1525 "_cursesmodule.c"
      case 12: // $bb11
        var $22=HEAP[$lattr]; //@line 1526 "_cursesmodule.c"
        HEAP[$attr]=$22; //@line 1526 "_cursesmodule.c"
        var $23=HEAP[$x]; //@line 1527 "_cursesmodule.c"
        var $24=HEAP[$y]; //@line 1527 "_cursesmodule.c"
        var $25=HEAP[$self_addr]; //@line 1527 "_cursesmodule.c"
        var $26=(($25+8)&4294967295); //@line 1527 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 1527 "_cursesmodule.c"
        var $28=_wmove($27, $24, $23); //@line 1527 "_cursesmodule.c"
        HEAP[$code]=$28; //@line 1527 "_cursesmodule.c"
        __label__ = 14; break; //@line 1527 "_cursesmodule.c"
      case 13: // $bb12
        var $29=HEAP[_PyExc_TypeError]; //@line 1530 "_cursesmodule.c"
        _PyErr_SetString($29, ((__str130)&4294967295)); //@line 1530 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1531 "_cursesmodule.c"
        __label__ = 19; break; //@line 1531 "_cursesmodule.c"
      case 14: // $bb13
        var $30=HEAP[$code]; //@line 1534 "_cursesmodule.c"
        var $31=((($30))|0)!=-1; //@line 1534 "_cursesmodule.c"
        if ($31) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1534 "_cursesmodule.c"
      case 15: // $bb14
        var $32=HEAP[$temp]; //@line 1535 "_cursesmodule.c"
        var $33=_PyCurses_ConvertToChtype($32, $ch); //@line 1535 "_cursesmodule.c"
        var $34=((($33))|0)==0; //@line 1535 "_cursesmodule.c"
        if ($34) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1535 "_cursesmodule.c"
      case 16: // $bb15
        var $35=HEAP[_PyExc_TypeError]; //@line 1536 "_cursesmodule.c"
        _PyErr_SetString($35, ((__str37)&4294967295)); //@line 1536 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1538 "_cursesmodule.c"
        __label__ = 19; break; //@line 1538 "_cursesmodule.c"
      case 17: // $bb16
        var $36=HEAP[$n]; //@line 1540 "_cursesmodule.c"
        var $37=HEAP[$ch]; //@line 1540 "_cursesmodule.c"
        var $38=HEAP[$attr]; //@line 1540 "_cursesmodule.c"
        var $39=($37) | ($38); //@line 1540 "_cursesmodule.c"
        var $40=HEAP[$self_addr]; //@line 1540 "_cursesmodule.c"
        var $41=(($40+8)&4294967295); //@line 1540 "_cursesmodule.c"
        var $42=HEAP[$41]; //@line 1540 "_cursesmodule.c"
        var $43=_wvline($42, $39, $36); //@line 1540 "_cursesmodule.c"
        var $44=_PyCursesCheckERR($43, ((__str131)&4294967295)); //@line 1540 "_cursesmodule.c"
        HEAP[$0]=$44; //@line 1540 "_cursesmodule.c"
        __label__ = 19; break; //@line 1540 "_cursesmodule.c"
      case 18: // $bb17
        var $45=HEAP[$code]; //@line 1542 "_cursesmodule.c"
        var $46=_PyCursesCheckERR($45, ((__str29)&4294967295)); //@line 1542 "_cursesmodule.c"
        HEAP[$0]=$46; //@line 1542 "_cursesmodule.c"
        __label__ = 19; break; //@line 1542 "_cursesmodule.c"
      case 19: // $bb18
        var $47=HEAP[$0]; //@line 1510 "_cursesmodule.c"
        HEAP[$retval]=$47; //@line 1510 "_cursesmodule.c"
        __label__ = 20; break; //@line 1510 "_cursesmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 1510 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1510 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesWindow_GetAttr($self, $name) {
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
        var $1=HEAP[$self_addr]; //@line 1632 "_cursesmodule.c"
        var $2=$1; //@line 1632 "_cursesmodule.c"
        var $3=HEAP[$name_addr]; //@line 1632 "_cursesmodule.c"
        var $4=_Py_FindMethod(_PyCursesWindow_Methods, $2, $3); //@line 1632 "_cursesmodule.c"
        HEAP[$0]=$4; //@line 1632 "_cursesmodule.c"
        var $5=HEAP[$0]; //@line 1632 "_cursesmodule.c"
        HEAP[$retval]=$5; //@line 1632 "_cursesmodule.c"
        __label__ = 1; break; //@line 1632 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1632 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1632 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_beep($self) {
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
        var $1=HEAP[_initialised]; //@line 1659 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1659 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1659 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1659 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1659 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1659 "_cursesmodule.c"
        __label__ = 3; break; //@line 1659 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_beep(); //@line 1659 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str173)&4294967295)); //@line 1659 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1659 "_cursesmodule.c"
        __label__ = 3; break; //@line 1659 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1659 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1659 "_cursesmodule.c"
        __label__ = 4; break; //@line 1659 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1659 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1659 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_def_prog_mode($self) {
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
        var $1=HEAP[_initialised]; //@line 1660 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1660 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1660 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1660 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1660 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1660 "_cursesmodule.c"
        __label__ = 3; break; //@line 1660 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_def_prog_mode(); //@line 1660 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str174)&4294967295)); //@line 1660 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1660 "_cursesmodule.c"
        __label__ = 3; break; //@line 1660 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1660 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1660 "_cursesmodule.c"
        __label__ = 4; break; //@line 1660 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1660 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1660 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_def_shell_mode($self) {
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
        var $1=HEAP[_initialised]; //@line 1661 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1661 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1661 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1661 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1661 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1661 "_cursesmodule.c"
        __label__ = 3; break; //@line 1661 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_def_shell_mode(); //@line 1661 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str175)&4294967295)); //@line 1661 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1661 "_cursesmodule.c"
        __label__ = 3; break; //@line 1661 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1661 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1661 "_cursesmodule.c"
        __label__ = 4; break; //@line 1661 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1661 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1661 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_doupdate($self) {
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
        var $1=HEAP[_initialised]; //@line 1662 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1662 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1662 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1662 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1662 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1662 "_cursesmodule.c"
        __label__ = 3; break; //@line 1662 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_doupdate(); //@line 1662 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str176)&4294967295)); //@line 1662 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1662 "_cursesmodule.c"
        __label__ = 3; break; //@line 1662 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1662 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1662 "_cursesmodule.c"
        __label__ = 4; break; //@line 1662 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1662 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1662 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_endwin($self) {
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
        var $1=HEAP[_initialised]; //@line 1663 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1663 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1663 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1663 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1663 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1663 "_cursesmodule.c"
        __label__ = 3; break; //@line 1663 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_endwin(); //@line 1663 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str177)&4294967295)); //@line 1663 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1663 "_cursesmodule.c"
        __label__ = 3; break; //@line 1663 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1663 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1663 "_cursesmodule.c"
        __label__ = 4; break; //@line 1663 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1663 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1663 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_flash($self) {
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
        var $1=HEAP[_initialised]; //@line 1664 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1664 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1664 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1664 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1664 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1664 "_cursesmodule.c"
        __label__ = 3; break; //@line 1664 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_flash(); //@line 1664 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str178)&4294967295)); //@line 1664 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1664 "_cursesmodule.c"
        __label__ = 3; break; //@line 1664 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1664 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1664 "_cursesmodule.c"
        __label__ = 4; break; //@line 1664 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1664 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1664 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_nocbreak($self) {
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
        var $1=HEAP[_initialised]; //@line 1665 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1665 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1665 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1665 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1665 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1665 "_cursesmodule.c"
        __label__ = 3; break; //@line 1665 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_nocbreak(); //@line 1665 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str179)&4294967295)); //@line 1665 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1665 "_cursesmodule.c"
        __label__ = 3; break; //@line 1665 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1665 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1665 "_cursesmodule.c"
        __label__ = 4; break; //@line 1665 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1665 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1665 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_noecho($self) {
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
        var $1=HEAP[_initialised]; //@line 1666 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1666 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1666 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1666 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1666 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1666 "_cursesmodule.c"
        __label__ = 3; break; //@line 1666 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_noecho(); //@line 1666 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str180)&4294967295)); //@line 1666 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1666 "_cursesmodule.c"
        __label__ = 3; break; //@line 1666 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1666 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1666 "_cursesmodule.c"
        __label__ = 4; break; //@line 1666 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1666 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1666 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_nonl($self) {
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
        var $1=HEAP[_initialised]; //@line 1667 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1667 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1667 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1667 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1667 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1667 "_cursesmodule.c"
        __label__ = 3; break; //@line 1667 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_nonl(); //@line 1667 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str181)&4294967295)); //@line 1667 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1667 "_cursesmodule.c"
        __label__ = 3; break; //@line 1667 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1667 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1667 "_cursesmodule.c"
        __label__ = 4; break; //@line 1667 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1667 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1667 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_noraw($self) {
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
        var $1=HEAP[_initialised]; //@line 1668 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1668 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1668 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1668 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1668 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1668 "_cursesmodule.c"
        __label__ = 3; break; //@line 1668 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_noraw(); //@line 1668 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str182)&4294967295)); //@line 1668 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1668 "_cursesmodule.c"
        __label__ = 3; break; //@line 1668 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1668 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1668 "_cursesmodule.c"
        __label__ = 4; break; //@line 1668 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1668 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1668 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_reset_prog_mode($self) {
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
        var $1=HEAP[_initialised]; //@line 1669 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1669 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1669 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1669 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1669 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1669 "_cursesmodule.c"
        __label__ = 3; break; //@line 1669 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_reset_prog_mode(); //@line 1669 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str183)&4294967295)); //@line 1669 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1669 "_cursesmodule.c"
        __label__ = 3; break; //@line 1669 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1669 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1669 "_cursesmodule.c"
        __label__ = 4; break; //@line 1669 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1669 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1669 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_reset_shell_mode($self) {
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
        var $1=HEAP[_initialised]; //@line 1670 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1670 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1670 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1670 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1670 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1670 "_cursesmodule.c"
        __label__ = 3; break; //@line 1670 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_reset_shell_mode(); //@line 1670 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str184)&4294967295)); //@line 1670 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1670 "_cursesmodule.c"
        __label__ = 3; break; //@line 1670 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1670 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1670 "_cursesmodule.c"
        __label__ = 4; break; //@line 1670 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1670 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1670 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_resetty($self) {
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
        var $1=HEAP[_initialised]; //@line 1671 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1671 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1671 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1671 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1671 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1671 "_cursesmodule.c"
        __label__ = 3; break; //@line 1671 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_resetty(); //@line 1671 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str185)&4294967295)); //@line 1671 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1671 "_cursesmodule.c"
        __label__ = 3; break; //@line 1671 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1671 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1671 "_cursesmodule.c"
        __label__ = 4; break; //@line 1671 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1671 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1671 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_savetty($self) {
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
        var $1=HEAP[_initialised]; //@line 1672 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1672 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1672 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1672 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1672 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1672 "_cursesmodule.c"
        __label__ = 3; break; //@line 1672 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_savetty(); //@line 1672 "_cursesmodule.c"
        var $5=_PyCursesCheckERR($4, ((__str186)&4294967295)); //@line 1672 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1672 "_cursesmodule.c"
        __label__ = 3; break; //@line 1672 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1672 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1672 "_cursesmodule.c"
        __label__ = 4; break; //@line 1672 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1672 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1672 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_cbreak($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$flag]=0; //@line 1674 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 1674 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1674 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1674 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1674 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1674 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1674 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 1674 "_cursesmodule.c"
        if ($5 == 0) {
          __label__ = 3; break;
        }
        else if ($5 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 3: // $bb2
        var $6=_cbreak(); //@line 1674 "_cursesmodule.c"
        var $7=_PyCursesCheckERR($6, ((__str187)&4294967295)); //@line 1674 "_cursesmodule.c"
        HEAP[$0]=$7; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 1674 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str13)&4294967295), $flag); //@line 1674 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 1674 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1674 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flag]; //@line 1674 "_cursesmodule.c"
        var $12=((($11))|0)!=0; //@line 1674 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1674 "_cursesmodule.c"
      case 7: // $bb6
        var $13=_cbreak(); //@line 1674 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str187)&4294967295)); //@line 1674 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 8: // $bb7
        var $15=_nocbreak(); //@line 1674 "_cursesmodule.c"
        var $16=_PyCursesCheckERR($15, ((__str187)&4294967295)); //@line 1674 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_TypeError]; //@line 1674 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str188)&4294967295)); //@line 1674 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1674 "_cursesmodule.c"
        __label__ = 10; break; //@line 1674 "_cursesmodule.c"
      case 10: // $bb9
        var $18=HEAP[$0]; //@line 1674 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1674 "_cursesmodule.c"
        __label__ = 11; break; //@line 1674 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1674 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1674 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_echo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$flag]=0; //@line 1675 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 1675 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1675 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1675 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1675 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1675 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1675 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 1675 "_cursesmodule.c"
        if ($5 == 0) {
          __label__ = 3; break;
        }
        else if ($5 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 3: // $bb2
        var $6=_echo(); //@line 1675 "_cursesmodule.c"
        var $7=_PyCursesCheckERR($6, ((__str189)&4294967295)); //@line 1675 "_cursesmodule.c"
        HEAP[$0]=$7; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 1675 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str13)&4294967295), $flag); //@line 1675 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 1675 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1675 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flag]; //@line 1675 "_cursesmodule.c"
        var $12=((($11))|0)!=0; //@line 1675 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1675 "_cursesmodule.c"
      case 7: // $bb6
        var $13=_echo(); //@line 1675 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str189)&4294967295)); //@line 1675 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 8: // $bb7
        var $15=_noecho(); //@line 1675 "_cursesmodule.c"
        var $16=_PyCursesCheckERR($15, ((__str189)&4294967295)); //@line 1675 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_TypeError]; //@line 1675 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str190)&4294967295)); //@line 1675 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1675 "_cursesmodule.c"
        __label__ = 10; break; //@line 1675 "_cursesmodule.c"
      case 10: // $bb9
        var $18=HEAP[$0]; //@line 1675 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1675 "_cursesmodule.c"
        __label__ = 11; break; //@line 1675 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1675 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1675 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_nl($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$flag]=0; //@line 1676 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 1676 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1676 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1676 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1676 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1676 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1676 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 1676 "_cursesmodule.c"
        if ($5 == 0) {
          __label__ = 3; break;
        }
        else if ($5 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 3: // $bb2
        var $6=_nl(); //@line 1676 "_cursesmodule.c"
        var $7=_PyCursesCheckERR($6, ((__str191)&4294967295)); //@line 1676 "_cursesmodule.c"
        HEAP[$0]=$7; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 1676 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str13)&4294967295), $flag); //@line 1676 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 1676 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1676 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flag]; //@line 1676 "_cursesmodule.c"
        var $12=((($11))|0)!=0; //@line 1676 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1676 "_cursesmodule.c"
      case 7: // $bb6
        var $13=_nl(); //@line 1676 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str191)&4294967295)); //@line 1676 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 8: // $bb7
        var $15=_nonl(); //@line 1676 "_cursesmodule.c"
        var $16=_PyCursesCheckERR($15, ((__str191)&4294967295)); //@line 1676 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_TypeError]; //@line 1676 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str192)&4294967295)); //@line 1676 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1676 "_cursesmodule.c"
        __label__ = 10; break; //@line 1676 "_cursesmodule.c"
      case 10: // $bb9
        var $18=HEAP[$0]; //@line 1676 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1676 "_cursesmodule.c"
        __label__ = 11; break; //@line 1676 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1676 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1676 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_raw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$flag]=0; //@line 1677 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 1677 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1677 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1677 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1677 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1677 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1677 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 1677 "_cursesmodule.c"
        if ($5 == 0) {
          __label__ = 3; break;
        }
        else if ($5 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 3: // $bb2
        var $6=_raw(); //@line 1677 "_cursesmodule.c"
        var $7=_PyCursesCheckERR($6, ((__str193)&4294967295)); //@line 1677 "_cursesmodule.c"
        HEAP[$0]=$7; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 1677 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str13)&4294967295), $flag); //@line 1677 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 1677 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1677 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flag]; //@line 1677 "_cursesmodule.c"
        var $12=((($11))|0)!=0; //@line 1677 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1677 "_cursesmodule.c"
      case 7: // $bb6
        var $13=_raw(); //@line 1677 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str193)&4294967295)); //@line 1677 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 8: // $bb7
        var $15=_noraw(); //@line 1677 "_cursesmodule.c"
        var $16=_PyCursesCheckERR($15, ((__str193)&4294967295)); //@line 1677 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_TypeError]; //@line 1677 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str194)&4294967295)); //@line 1677 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1677 "_cursesmodule.c"
        __label__ = 10; break; //@line 1677 "_cursesmodule.c"
      case 10: // $bb9
        var $18=HEAP[$0]; //@line 1677 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1677 "_cursesmodule.c"
        __label__ = 11; break; //@line 1677 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 1677 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1677 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_baudrate($self) {
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
        var $1=HEAP[_initialised]; //@line 1679 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1679 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1679 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1679 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1679 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1679 "_cursesmodule.c"
        __label__ = 3; break; //@line 1679 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_baudrate(); //@line 1679 "_cursesmodule.c"
        var $5=_PyInt_FromLong($4); //@line 1679 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1679 "_cursesmodule.c"
        __label__ = 3; break; //@line 1679 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1679 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1679 "_cursesmodule.c"
        __label__ = 4; break; //@line 1679 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1679 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1679 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_termattrs($self) {
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
        var $1=HEAP[_initialised]; //@line 1680 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1680 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1680 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1680 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1680 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1680 "_cursesmodule.c"
        __label__ = 3; break; //@line 1680 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_termattrs(); //@line 1680 "_cursesmodule.c"
        var $5=_PyInt_FromLong($4); //@line 1680 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1680 "_cursesmodule.c"
        __label__ = 3; break; //@line 1680 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1680 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1680 "_cursesmodule.c"
        __label__ = 4; break; //@line 1680 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1680 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1680 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_termname($self) {
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
        var $1=HEAP[_initialised]; //@line 1682 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1682 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1682 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1682 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1682 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1682 "_cursesmodule.c"
        __label__ = 3; break; //@line 1682 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_termname(); //@line 1682 "_cursesmodule.c"
        var $5=_PyString_FromString($4); //@line 1682 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1682 "_cursesmodule.c"
        __label__ = 3; break; //@line 1682 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1682 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1682 "_cursesmodule.c"
        __label__ = 4; break; //@line 1682 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1682 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1682 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_longname($self) {
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
        var $1=HEAP[_initialised]; //@line 1683 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1683 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1683 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1683 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1683 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1683 "_cursesmodule.c"
        __label__ = 3; break; //@line 1683 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_longname(); //@line 1683 "_cursesmodule.c"
        var $5=_PyString_FromString($4); //@line 1683 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1683 "_cursesmodule.c"
        __label__ = 3; break; //@line 1683 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1683 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1683 "_cursesmodule.c"
        __label__ = 4; break; //@line 1683 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1683 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1683 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_can_change_color($self) {
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
        var $1=HEAP[_initialised]; //@line 1685 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1685 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1685 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1685 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1685 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1685 "_cursesmodule.c"
        __label__ = 5; break; //@line 1685 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_can_change_color(); //@line 1685 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 1685 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1685 "_cursesmodule.c"
        var $toBoolnot2=unSign(($toBoolnot), 1, 0); //@line 1685 "_cursesmodule.c"
        var $toBool4=reSign(($toBoolnot2), 8, 0)!=0; //@line 1685 "_cursesmodule.c"
        if ($toBool4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1685 "_cursesmodule.c"
      case 3: // $bb5
        var $5=((__Py_ZeroStruct)&4294967295); //@line 1685 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1685 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1685 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 1685 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 1685 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1685 "_cursesmodule.c"
        __label__ = 5; break; //@line 1685 "_cursesmodule.c"
      case 4: // $bb6
        var $9=((__Py_TrueStruct)&4294967295); //@line 1685 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1685 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1685 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 1685 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 1685 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1685 "_cursesmodule.c"
        __label__ = 5; break; //@line 1685 "_cursesmodule.c"
      case 5: // $bb7
        var $13=HEAP[$0]; //@line 1685 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1685 "_cursesmodule.c"
        __label__ = 6; break; //@line 1685 "_cursesmodule.c"
      case 6: // $return
        var $retval8=HEAP[$retval]; //@line 1685 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1685 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_has_colors($self) {
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
        var $1=HEAP[_initialised]; //@line 1686 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1686 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1686 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1686 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1686 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1686 "_cursesmodule.c"
        __label__ = 5; break; //@line 1686 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_has_colors(); //@line 1686 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 1686 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1686 "_cursesmodule.c"
        var $toBoolnot2=unSign(($toBoolnot), 1, 0); //@line 1686 "_cursesmodule.c"
        var $toBool4=reSign(($toBoolnot2), 8, 0)!=0; //@line 1686 "_cursesmodule.c"
        if ($toBool4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1686 "_cursesmodule.c"
      case 3: // $bb5
        var $5=((__Py_ZeroStruct)&4294967295); //@line 1686 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1686 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1686 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 1686 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 1686 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1686 "_cursesmodule.c"
        __label__ = 5; break; //@line 1686 "_cursesmodule.c"
      case 4: // $bb6
        var $9=((__Py_TrueStruct)&4294967295); //@line 1686 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1686 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1686 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 1686 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 1686 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1686 "_cursesmodule.c"
        __label__ = 5; break; //@line 1686 "_cursesmodule.c"
      case 5: // $bb7
        var $13=HEAP[$0]; //@line 1686 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1686 "_cursesmodule.c"
        __label__ = 6; break; //@line 1686 "_cursesmodule.c"
      case 6: // $return
        var $retval8=HEAP[$retval]; //@line 1686 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1686 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_has_ic($self) {
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
        var $1=HEAP[_initialised]; //@line 1687 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1687 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1687 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1687 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1687 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1687 "_cursesmodule.c"
        __label__ = 5; break; //@line 1687 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_has_ic(); //@line 1687 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 1687 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1687 "_cursesmodule.c"
        var $toBoolnot2=unSign(($toBoolnot), 1, 0); //@line 1687 "_cursesmodule.c"
        var $toBool4=reSign(($toBoolnot2), 8, 0)!=0; //@line 1687 "_cursesmodule.c"
        if ($toBool4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1687 "_cursesmodule.c"
      case 3: // $bb5
        var $5=((__Py_ZeroStruct)&4294967295); //@line 1687 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1687 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1687 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 1687 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 1687 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1687 "_cursesmodule.c"
        __label__ = 5; break; //@line 1687 "_cursesmodule.c"
      case 4: // $bb6
        var $9=((__Py_TrueStruct)&4294967295); //@line 1687 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1687 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1687 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 1687 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 1687 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1687 "_cursesmodule.c"
        __label__ = 5; break; //@line 1687 "_cursesmodule.c"
      case 5: // $bb7
        var $13=HEAP[$0]; //@line 1687 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1687 "_cursesmodule.c"
        __label__ = 6; break; //@line 1687 "_cursesmodule.c"
      case 6: // $return
        var $retval8=HEAP[$retval]; //@line 1687 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1687 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_has_il($self) {
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
        var $1=HEAP[_initialised]; //@line 1688 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1688 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1688 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1688 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1688 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1688 "_cursesmodule.c"
        __label__ = 5; break; //@line 1688 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_has_il(); //@line 1688 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 1688 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1688 "_cursesmodule.c"
        var $toBoolnot2=unSign(($toBoolnot), 1, 0); //@line 1688 "_cursesmodule.c"
        var $toBool4=reSign(($toBoolnot2), 8, 0)!=0; //@line 1688 "_cursesmodule.c"
        if ($toBool4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1688 "_cursesmodule.c"
      case 3: // $bb5
        var $5=((__Py_ZeroStruct)&4294967295); //@line 1688 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1688 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1688 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 1688 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 1688 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1688 "_cursesmodule.c"
        __label__ = 5; break; //@line 1688 "_cursesmodule.c"
      case 4: // $bb6
        var $9=((__Py_TrueStruct)&4294967295); //@line 1688 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1688 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1688 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 1688 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 1688 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1688 "_cursesmodule.c"
        __label__ = 5; break; //@line 1688 "_cursesmodule.c"
      case 5: // $bb7
        var $13=HEAP[$0]; //@line 1688 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1688 "_cursesmodule.c"
        __label__ = 6; break; //@line 1688 "_cursesmodule.c"
      case 6: // $return
        var $retval8=HEAP[$retval]; //@line 1688 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1688 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_isendwin($self) {
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
        var $1=HEAP[_initialised]; //@line 1689 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1689 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1689 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1689 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1689 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1689 "_cursesmodule.c"
        __label__ = 5; break; //@line 1689 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_isendwin(); //@line 1689 "_cursesmodule.c"
        var $toBool=reSign(($4), 8, 0)!=0; //@line 1689 "_cursesmodule.c"
        var $toBoolnot=($toBool) ^ 1; //@line 1689 "_cursesmodule.c"
        var $toBoolnot2=unSign(($toBoolnot), 1, 0); //@line 1689 "_cursesmodule.c"
        var $toBool4=reSign(($toBoolnot2), 8, 0)!=0; //@line 1689 "_cursesmodule.c"
        if ($toBool4) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1689 "_cursesmodule.c"
      case 3: // $bb5
        var $5=((__Py_ZeroStruct)&4294967295); //@line 1689 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1689 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1689 "_cursesmodule.c"
        var $8=((__Py_ZeroStruct)&4294967295); //@line 1689 "_cursesmodule.c"
        HEAP[$8]=$7; //@line 1689 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1689 "_cursesmodule.c"
        __label__ = 5; break; //@line 1689 "_cursesmodule.c"
      case 4: // $bb6
        var $9=((__Py_TrueStruct)&4294967295); //@line 1689 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1689 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1689 "_cursesmodule.c"
        var $12=((__Py_TrueStruct)&4294967295); //@line 1689 "_cursesmodule.c"
        HEAP[$12]=$11; //@line 1689 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1689 "_cursesmodule.c"
        __label__ = 5; break; //@line 1689 "_cursesmodule.c"
      case 5: // $bb7
        var $13=HEAP[$0]; //@line 1689 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1689 "_cursesmodule.c"
        __label__ = 6; break; //@line 1689 "_cursesmodule.c"
      case 6: // $return
        var $retval8=HEAP[$retval]; //@line 1689 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1689 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_flushinp($self) {
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
        var $1=HEAP[_initialised]; //@line 1690 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1690 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1690 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1690 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1690 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1690 "_cursesmodule.c"
        __label__ = 3; break; //@line 1690 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_flushinp(); //@line 1690 "_cursesmodule.c"
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1690 "_cursesmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 1690 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 1690 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1690 "_cursesmodule.c"
        __label__ = 3; break; //@line 1690 "_cursesmodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1690 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 1690 "_cursesmodule.c"
        __label__ = 4; break; //@line 1690 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1690 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1690 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_noqiflush($self) {
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
        var $1=HEAP[_initialised]; //@line 1691 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1691 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1691 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1691 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1691 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1691 "_cursesmodule.c"
        __label__ = 3; break; //@line 1691 "_cursesmodule.c"
      case 2: // $bb1
        _noqiflush(); //@line 1691 "_cursesmodule.c"
        var $4=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1691 "_cursesmodule.c"
        var $5=((($4) + 1)&4294967295); //@line 1691 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$5; //@line 1691 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1691 "_cursesmodule.c"
        __label__ = 3; break; //@line 1691 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1691 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1691 "_cursesmodule.c"
        __label__ = 4; break; //@line 1691 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1691 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1691 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_filter($self) {
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
        _filter(); //@line 1698 "_cursesmodule.c"
        var $1=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1699 "_cursesmodule.c"
        var $2=((($1) + 1)&4294967295); //@line 1699 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$2; //@line 1699 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1700 "_cursesmodule.c"
        var $3=HEAP[$0]; //@line 1700 "_cursesmodule.c"
        HEAP[$retval]=$3; //@line 1700 "_cursesmodule.c"
        __label__ = 1; break; //@line 1700 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1700 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1700 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Color_Content($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $color=__stackBase__+16;
        var $r=__stackBase__+18;
        var $g=__stackBase__+20;
        var $b=__stackBase__+22;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1708 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1708 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1708 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1708 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1708 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1708 "_cursesmodule.c"
        __label__ = 9; break; //@line 1708 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 1709 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 1709 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1709 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 1709 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 1709 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1709 "_cursesmodule.c"
        __label__ = 9; break; //@line 1709 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 1711 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str195)&4294967295), $color); //@line 1711 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 1711 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1711 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1711 "_cursesmodule.c"
        __label__ = 9; break; //@line 1711 "_cursesmodule.c"
      case 6: // $bb5
        var $10=HEAP[$color]; //@line 1713 "_cursesmodule.c"
        var $11=reSign(($10), 16, 0); //@line 1713 "_cursesmodule.c"
        var $12=((($11)) & 65535); //@line 1713 "_cursesmodule.c"
        var $13=_color_content($12, $r, $g, $b); //@line 1713 "_cursesmodule.c"
        var $14=((($13))|0)!=-1; //@line 1713 "_cursesmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1713 "_cursesmodule.c"
      case 7: // $bb6
        var $15=HEAP[$b]; //@line 1714 "_cursesmodule.c"
        var $16=reSign(($15), 16, 0); //@line 1714 "_cursesmodule.c"
        var $17=HEAP[$g]; //@line 1714 "_cursesmodule.c"
        var $18=reSign(($17), 16, 0); //@line 1714 "_cursesmodule.c"
        var $19=HEAP[$r]; //@line 1714 "_cursesmodule.c"
        var $20=reSign(($19), 16, 0); //@line 1714 "_cursesmodule.c"
        var $21=_Py_BuildValue(((__str196)&4294967295), $20, $18, $16); //@line 1714 "_cursesmodule.c"
        HEAP[$0]=$21; //@line 1714 "_cursesmodule.c"
        __label__ = 9; break; //@line 1714 "_cursesmodule.c"
      case 8: // $bb7
        var $22=HEAP[_PyCursesError]; //@line 1716 "_cursesmodule.c"
        _PyErr_SetString($22, ((__str197)&4294967295)); //@line 1716 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1718 "_cursesmodule.c"
        __label__ = 9; break; //@line 1718 "_cursesmodule.c"
      case 9: // $bb8
        var $23=HEAP[$0]; //@line 1708 "_cursesmodule.c"
        HEAP[$retval]=$23; //@line 1708 "_cursesmodule.c"
        __label__ = 10; break; //@line 1708 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1708 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1708 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_color_pair($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1727 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1727 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1727 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1727 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1727 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1727 "_cursesmodule.c"
        __label__ = 7; break; //@line 1727 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 1728 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 1728 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1728 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 1728 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 1728 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1728 "_cursesmodule.c"
        __label__ = 7; break; //@line 1728 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 1730 "_cursesmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str198)&4294967295), $n); //@line 1730 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 1730 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1730 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1730 "_cursesmodule.c"
        __label__ = 7; break; //@line 1730 "_cursesmodule.c"
      case 6: // $bb5
        var $10=HEAP[$n]; //@line 1731 "_cursesmodule.c"
        var $11=($10) << 8; //@line 1731 "_cursesmodule.c"
        var $12=_PyInt_FromLong($11); //@line 1731 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 1731 "_cursesmodule.c"
        __label__ = 7; break; //@line 1731 "_cursesmodule.c"
      case 7: // $bb6
        var $13=HEAP[$0]; //@line 1727 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 1727 "_cursesmodule.c"
        __label__ = 8; break; //@line 1727 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1727 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1727 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Curs_Set($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $vis=__stackBase__+16;
        var $erg=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1739 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1739 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1739 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1739 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1739 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1739 "_cursesmodule.c"
        __label__ = 7; break; //@line 1739 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1741 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str199)&4294967295), $vis); //@line 1741 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 1741 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1741 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1741 "_cursesmodule.c"
        __label__ = 7; break; //@line 1741 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$vis]; //@line 1743 "_cursesmodule.c"
        var $8=_curs_set($7); //@line 1743 "_cursesmodule.c"
        HEAP[$erg]=$8; //@line 1743 "_cursesmodule.c"
        var $9=HEAP[$erg]; //@line 1744 "_cursesmodule.c"
        var $10=((($9))|0)==-1; //@line 1744 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1744 "_cursesmodule.c"
      case 5: // $bb4
        var $11=HEAP[$erg]; //@line 1744 "_cursesmodule.c"
        var $12=_PyCursesCheckERR($11, ((__str200)&4294967295)); //@line 1744 "_cursesmodule.c"
        HEAP[$0]=$12; //@line 1744 "_cursesmodule.c"
        __label__ = 7; break; //@line 1744 "_cursesmodule.c"
      case 6: // $bb5
        var $13=HEAP[$erg]; //@line 1746 "_cursesmodule.c"
        var $14=_PyInt_FromLong($13); //@line 1746 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 1746 "_cursesmodule.c"
        __label__ = 7; break; //@line 1746 "_cursesmodule.c"
      case 7: // $bb6
        var $15=HEAP[$0]; //@line 1739 "_cursesmodule.c"
        HEAP[$retval]=$15; //@line 1739 "_cursesmodule.c"
        __label__ = 8; break; //@line 1739 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1739 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1739 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Delay_Output($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ms=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1754 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1754 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1754 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1754 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1754 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1754 "_cursesmodule.c"
        __label__ = 5; break; //@line 1754 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1756 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str201)&4294967295), $ms); //@line 1756 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 1756 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1756 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1756 "_cursesmodule.c"
        __label__ = 5; break; //@line 1756 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$ms]; //@line 1758 "_cursesmodule.c"
        var $8=_delay_output($7); //@line 1758 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str202)&4294967295)); //@line 1758 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 1758 "_cursesmodule.c"
        __label__ = 5; break; //@line 1758 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 1754 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 1754 "_cursesmodule.c"
        __label__ = 6; break; //@line 1754 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1754 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1754 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_EraseChar($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 13; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 13);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ch=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_initialised]; //@line 1766 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1766 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1766 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1766 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1766 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1766 "_cursesmodule.c"
        __label__ = 3; break; //@line 1766 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_erasechar(); //@line 1768 "_cursesmodule.c"
        HEAP[$ch]=$4; //@line 1768 "_cursesmodule.c"
        var $5=_PyString_FromStringAndSize($ch, 1); //@line 1770 "_cursesmodule.c"
        HEAP[$0]=$5; //@line 1770 "_cursesmodule.c"
        __label__ = 3; break; //@line 1770 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1766 "_cursesmodule.c"
        HEAP[$retval]=$6; //@line 1766 "_cursesmodule.c"
        __label__ = 4; break; //@line 1766 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1766 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1766 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_getsyx($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 29; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 29);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $iftmp_400=__stackBase__+8;
        var $iftmp_397=__stackBase__+12;
        var $iftmp_394=__stackBase__+16;
        var $0=__stackBase__+17;
        var $x=__stackBase__+21;
        var $y=__stackBase__+25;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$x]=0; //@line 1776 "_cursesmodule.c"
        HEAP[$y]=0; //@line 1777 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 1779 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1779 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1779 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1779 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1779 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1779 "_cursesmodule.c"
        __label__ = 16; break; //@line 1779 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $5=($4)!=0; //@line 1781 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 1781 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $7=($6)!=0; //@line 1781 "_cursesmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1781 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $9=(($8+26)&4294967295); //@line 1781 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1781 "_cursesmodule.c"
        HEAP[$iftmp_394]=$10; //@line 1781 "_cursesmodule.c"
        __label__ = 6; break; //@line 1781 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_394]=0; //@line 1781 "_cursesmodule.c"
        __label__ = 6; break; //@line 1781 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$iftmp_394]; //@line 1781 "_cursesmodule.c"
        var $toBool=reSign(($11), 8, 0)!=0; //@line 1781 "_cursesmodule.c"
        if ($toBool) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1781 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$x]=-1; //@line 1781 "_cursesmodule.c"
        var $12=HEAP[$x]; //@line 1781 "_cursesmodule.c"
        HEAP[$y]=$12; //@line 1781 "_cursesmodule.c"
        __label__ = 15; break; //@line 1781 "_cursesmodule.c"
      case 8: // $bb7
        var $13=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $14=($13)!=0; //@line 1781 "_cursesmodule.c"
        if ($14) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1781 "_cursesmodule.c"
      case 9: // $bb8
        var $15=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $16=(($15)&4294967295); //@line 1781 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 1781 "_cursesmodule.c"
        var $18=reSign(($17), 16, 0); //@line 1781 "_cursesmodule.c"
        HEAP[$iftmp_397]=$18; //@line 1781 "_cursesmodule.c"
        __label__ = 11; break; //@line 1781 "_cursesmodule.c"
      case 10: // $bb9
        HEAP[$iftmp_397]=-1; //@line 1781 "_cursesmodule.c"
        __label__ = 11; break; //@line 1781 "_cursesmodule.c"
      case 11: // $bb10
        var $19=HEAP[$iftmp_397]; //@line 1781 "_cursesmodule.c"
        HEAP[$y]=$19; //@line 1781 "_cursesmodule.c"
        var $20=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $21=($20)!=0; //@line 1781 "_cursesmodule.c"
        if ($21) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1781 "_cursesmodule.c"
      case 12: // $bb11
        var $22=HEAP[_newscr]; //@line 1781 "_cursesmodule.c"
        var $23=(($22+2)&4294967295); //@line 1781 "_cursesmodule.c"
        var $24=HEAP[$23]; //@line 1781 "_cursesmodule.c"
        var $25=reSign(($24), 16, 0); //@line 1781 "_cursesmodule.c"
        HEAP[$iftmp_400]=$25; //@line 1781 "_cursesmodule.c"
        __label__ = 14; break; //@line 1781 "_cursesmodule.c"
      case 13: // $bb12
        HEAP[$iftmp_400]=-1; //@line 1781 "_cursesmodule.c"
        __label__ = 14; break; //@line 1781 "_cursesmodule.c"
      case 14: // $bb13
        var $26=HEAP[$iftmp_400]; //@line 1781 "_cursesmodule.c"
        HEAP[$x]=$26; //@line 1781 "_cursesmodule.c"
        __label__ = 15; break; //@line 1781 "_cursesmodule.c"
      case 15: // $bb14
        var $27=HEAP[$y]; //@line 1783 "_cursesmodule.c"
        var $28=HEAP[$x]; //@line 1783 "_cursesmodule.c"
        var $29=_Py_BuildValue(((__str203)&4294967295), $27, $28); //@line 1783 "_cursesmodule.c"
        HEAP[$0]=$29; //@line 1783 "_cursesmodule.c"
        __label__ = 16; break; //@line 1783 "_cursesmodule.c"
      case 16: // $bb15
        var $30=HEAP[$0]; //@line 1779 "_cursesmodule.c"
        HEAP[$retval]=$30; //@line 1779 "_cursesmodule.c"
        __label__ = 17; break; //@line 1779 "_cursesmodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1779 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1779 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_GetMouse($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $rtn=__stackBase__+12;
        var $event=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_initialised]; //@line 1793 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1793 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1793 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1793 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1793 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1793 "_cursesmodule.c"
        __label__ = 5; break; //@line 1793 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_getmouse($event); //@line 1795 "_cursesmodule.c"
        HEAP[$rtn]=$4; //@line 1795 "_cursesmodule.c"
        var $5=HEAP[$rtn]; //@line 1796 "_cursesmodule.c"
        var $6=((($5))|0)==-1; //@line 1796 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1796 "_cursesmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyCursesError]; //@line 1797 "_cursesmodule.c"
        _PyErr_SetString($7, ((__str204)&4294967295)); //@line 1797 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1798 "_cursesmodule.c"
        __label__ = 5; break; //@line 1798 "_cursesmodule.c"
      case 4: // $bb3
        var $8=(($event+16)&4294967295); //@line 1800 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 1800 "_cursesmodule.c"
        var $10=(($event+12)&4294967295); //@line 1800 "_cursesmodule.c"
        var $11=HEAP[$10]; //@line 1800 "_cursesmodule.c"
        var $12=(($event+8)&4294967295); //@line 1800 "_cursesmodule.c"
        var $13=HEAP[$12]; //@line 1800 "_cursesmodule.c"
        var $14=(($event+4)&4294967295); //@line 1800 "_cursesmodule.c"
        var $15=HEAP[$14]; //@line 1800 "_cursesmodule.c"
        var $16=(($event)&4294967295); //@line 1800 "_cursesmodule.c"
        var $17=HEAP[$16]; //@line 1800 "_cursesmodule.c"
        var $18=reSign(($17), 16, 0); //@line 1800 "_cursesmodule.c"
        var $19=_Py_BuildValue(((__str205)&4294967295), $18, $15, $13, $11, $9); //@line 1800 "_cursesmodule.c"
        HEAP[$0]=$19; //@line 1800 "_cursesmodule.c"
        __label__ = 5; break; //@line 1800 "_cursesmodule.c"
      case 5: // $bb4
        var $20=HEAP[$0]; //@line 1793 "_cursesmodule.c"
        HEAP[$retval]=$20; //@line 1793 "_cursesmodule.c"
        __label__ = 6; break; //@line 1793 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1793 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1793 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_UngetMouse($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $event=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1811 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1811 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1811 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1811 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1811 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1811 "_cursesmodule.c"
        __label__ = 5; break; //@line 1811 "_cursesmodule.c"
      case 2: // $bb1
        var $4=(($event+16)&4294967295); //@line 1812 "_cursesmodule.c"
        var $5=HEAP[$args_addr]; //@line 1812 "_cursesmodule.c"
        var $6=(($event)&4294967295); //@line 1812 "_cursesmodule.c"
        var $7=(($event+4)&4294967295); //@line 1812 "_cursesmodule.c"
        var $8=(($event+8)&4294967295); //@line 1812 "_cursesmodule.c"
        var $9=(($event+12)&4294967295); //@line 1812 "_cursesmodule.c"
        var $10=_PyArg_ParseTuple($5, ((__str206)&4294967295), $6, $7, $8, $9, $4); //@line 1812 "_cursesmodule.c"
        var $11=((($10))|0)==0; //@line 1812 "_cursesmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1812 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1816 "_cursesmodule.c"
        __label__ = 5; break; //@line 1816 "_cursesmodule.c"
      case 4: // $bb3
        var $12=_ungetmouse($event); //@line 1818 "_cursesmodule.c"
        var $13=_PyCursesCheckERR($12, ((__str207)&4294967295)); //@line 1818 "_cursesmodule.c"
        HEAP[$0]=$13; //@line 1818 "_cursesmodule.c"
        __label__ = 5; break; //@line 1818 "_cursesmodule.c"
      case 5: // $bb4
        var $14=HEAP[$0]; //@line 1811 "_cursesmodule.c"
        HEAP[$retval]=$14; //@line 1811 "_cursesmodule.c"
        __label__ = 6; break; //@line 1811 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1811 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1811 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_GetWin($self, $temp) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $temp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$temp_addr]=$temp;
        var $1=HEAP[_initialised]; //@line 1827 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1827 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1827 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1827 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1827 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1827 "_cursesmodule.c"
        __label__ = 8; break; //@line 1827 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$temp_addr]; //@line 1829 "_cursesmodule.c"
        var $5=(($4+4)&4294967295); //@line 1829 "_cursesmodule.c"
        var $6=HEAP[$5]; //@line 1829 "_cursesmodule.c"
        var $7=($6)!=(_PyFile_Type); //@line 1829 "_cursesmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1829 "_cursesmodule.c"
      case 3: // $bb2
        var $8=HEAP[$temp_addr]; //@line 1829 "_cursesmodule.c"
        var $9=(($8+4)&4294967295); //@line 1829 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 1829 "_cursesmodule.c"
        var $11=_PyType_IsSubtype($10, _PyFile_Type); //@line 1829 "_cursesmodule.c"
        var $12=((($11))|0)==0; //@line 1829 "_cursesmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1829 "_cursesmodule.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_TypeError]; //@line 1830 "_cursesmodule.c"
        _PyErr_SetString($13, ((__str114)&4294967295)); //@line 1830 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1831 "_cursesmodule.c"
        __label__ = 8; break; //@line 1831 "_cursesmodule.c"
      case 5: // $bb4
        var $14=HEAP[$temp_addr]; //@line 1834 "_cursesmodule.c"
        var $15=_PyFile_AsFile($14); //@line 1834 "_cursesmodule.c"
        var $16=_getwin($15); //@line 1834 "_cursesmodule.c"
        HEAP[$win]=$16; //@line 1834 "_cursesmodule.c"
        var $17=HEAP[$win]; //@line 1836 "_cursesmodule.c"
        var $18=($17)==0; //@line 1836 "_cursesmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1836 "_cursesmodule.c"
      case 6: // $bb5
        var $19=HEAP[_catchall_NULL]; //@line 1837 "_cursesmodule.c"
        var $20=HEAP[_PyCursesError]; //@line 1837 "_cursesmodule.c"
        _PyErr_SetString($20, $19); //@line 1837 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1838 "_cursesmodule.c"
        __label__ = 8; break; //@line 1838 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$win]; //@line 1841 "_cursesmodule.c"
        var $22=_PyCursesWindow_New($21); //@line 1841 "_cursesmodule.c"
        HEAP[$0]=$22; //@line 1841 "_cursesmodule.c"
        __label__ = 8; break; //@line 1841 "_cursesmodule.c"
      case 8: // $bb7
        var $23=HEAP[$0]; //@line 1827 "_cursesmodule.c"
        HEAP[$retval]=$23; //@line 1827 "_cursesmodule.c"
        __label__ = 9; break; //@line 1827 "_cursesmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1827 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1827 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_HalfDelay($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tenths=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1849 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1849 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1849 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1849 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1849 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1849 "_cursesmodule.c"
        __label__ = 5; break; //@line 1849 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1851 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str208)&4294967295), $tenths); //@line 1851 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 1851 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1851 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1851 "_cursesmodule.c"
        __label__ = 5; break; //@line 1851 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$tenths]; //@line 1853 "_cursesmodule.c"
        var $8=unSign(($7), 8, 0); //@line 1853 "_cursesmodule.c"
        var $9=_halfdelay($8); //@line 1853 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str209)&4294967295)); //@line 1853 "_cursesmodule.c"
        HEAP[$0]=$10; //@line 1853 "_cursesmodule.c"
        __label__ = 5; break; //@line 1853 "_cursesmodule.c"
      case 5: // $bb4
        var $11=HEAP[$0]; //@line 1849 "_cursesmodule.c"
        HEAP[$retval]=$11; //@line 1849 "_cursesmodule.c"
        __label__ = 6; break; //@line 1849 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1849 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1849 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_has_key($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ch=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1862 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1862 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1862 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1862 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1862 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1862 "_cursesmodule.c"
        __label__ = 7; break; //@line 1862 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 1864 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str210)&4294967295), $ch); //@line 1864 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 1864 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1864 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1864 "_cursesmodule.c"
        __label__ = 7; break; //@line 1864 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$ch]; //@line 1866 "_cursesmodule.c"
        var $8=_has_key($7); //@line 1866 "_cursesmodule.c"
        var $9=((($8))|0)==0; //@line 1866 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1866 "_cursesmodule.c"
      case 5: // $bb4
        var $10=((__Py_ZeroStruct)&4294967295); //@line 1867 "_cursesmodule.c"
        var $11=HEAP[$10]; //@line 1867 "_cursesmodule.c"
        var $12=((($11) + 1)&4294967295); //@line 1867 "_cursesmodule.c"
        var $13=((__Py_ZeroStruct)&4294967295); //@line 1867 "_cursesmodule.c"
        HEAP[$13]=$12; //@line 1867 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 1868 "_cursesmodule.c"
        __label__ = 7; break; //@line 1868 "_cursesmodule.c"
      case 6: // $bb5
        var $14=((__Py_TrueStruct)&4294967295); //@line 1870 "_cursesmodule.c"
        var $15=HEAP[$14]; //@line 1870 "_cursesmodule.c"
        var $16=((($15) + 1)&4294967295); //@line 1870 "_cursesmodule.c"
        var $17=((__Py_TrueStruct)&4294967295); //@line 1870 "_cursesmodule.c"
        HEAP[$17]=$16; //@line 1870 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 1871 "_cursesmodule.c"
        __label__ = 7; break; //@line 1871 "_cursesmodule.c"
      case 7: // $bb6
        var $18=HEAP[$0]; //@line 1862 "_cursesmodule.c"
        HEAP[$retval]=$18; //@line 1862 "_cursesmodule.c"
        __label__ = 8; break; //@line 1862 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1862 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1862 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Init_Color($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $color=__stackBase__+16;
        var $r=__stackBase__+18;
        var $g=__stackBase__+20;
        var $b=__stackBase__+22;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1880 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1880 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1880 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1880 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1880 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1880 "_cursesmodule.c"
        __label__ = 9; break; //@line 1880 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 1881 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 1881 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1881 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 1881 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 1881 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1881 "_cursesmodule.c"
        __label__ = 9; break; //@line 1881 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 1883 "_cursesmodule.c"
        var $8=_PyTuple_Size($7); //@line 1883 "_cursesmodule.c"
        if ($8 == 4) {
          __label__ = 5; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 5: // $bb4
        var $9=HEAP[$args_addr]; //@line 1885 "_cursesmodule.c"
        var $10=_PyArg_ParseTuple($9, ((__str211)&4294967295), $color, $r, $g, $b); //@line 1885 "_cursesmodule.c"
        var $11=((($10))|0)==0; //@line 1885 "_cursesmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1885 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1885 "_cursesmodule.c"
        __label__ = 9; break; //@line 1885 "_cursesmodule.c"
      case 7: // $bb6
        var $12=HEAP[$b]; //@line 1892 "_cursesmodule.c"
        var $13=reSign(($12), 16, 0); //@line 1892 "_cursesmodule.c"
        var $14=HEAP[$g]; //@line 1892 "_cursesmodule.c"
        var $15=reSign(($14), 16, 0); //@line 1892 "_cursesmodule.c"
        var $16=HEAP[$r]; //@line 1892 "_cursesmodule.c"
        var $17=reSign(($16), 16, 0); //@line 1892 "_cursesmodule.c"
        var $18=HEAP[$color]; //@line 1892 "_cursesmodule.c"
        var $19=reSign(($18), 16, 0); //@line 1892 "_cursesmodule.c"
        var $20=((($19)) & 65535); //@line 1892 "_cursesmodule.c"
        var $21=((($17)) & 65535); //@line 1892 "_cursesmodule.c"
        var $22=((($15)) & 65535); //@line 1892 "_cursesmodule.c"
        var $23=((($13)) & 65535); //@line 1892 "_cursesmodule.c"
        var $24=_init_color($20, $21, $22, $23); //@line 1892 "_cursesmodule.c"
        var $25=_PyCursesCheckERR($24, ((__str212)&4294967295)); //@line 1892 "_cursesmodule.c"
        HEAP[$0]=$25; //@line 1892 "_cursesmodule.c"
        __label__ = 9; break; //@line 1892 "_cursesmodule.c"
      case 8: // $bb7
        var $26=HEAP[_PyExc_TypeError]; //@line 1888 "_cursesmodule.c"
        _PyErr_SetString($26, ((__str213)&4294967295)); //@line 1888 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1889 "_cursesmodule.c"
        __label__ = 9; break; //@line 1889 "_cursesmodule.c"
      case 9: // $bb8
        var $27=HEAP[$0]; //@line 1880 "_cursesmodule.c"
        HEAP[$retval]=$27; //@line 1880 "_cursesmodule.c"
        __label__ = 10; break; //@line 1880 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1880 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1880 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Init_Pair($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pair=__stackBase__+16;
        var $f=__stackBase__+18;
        var $b=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 1900 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 1900 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1900 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 1900 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 1900 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1900 "_cursesmodule.c"
        __label__ = 9; break; //@line 1900 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 1901 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 1901 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1901 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 1901 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 1901 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1901 "_cursesmodule.c"
        __label__ = 9; break; //@line 1901 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 1903 "_cursesmodule.c"
        var $8=_PyTuple_Size($7); //@line 1903 "_cursesmodule.c"
        var $9=((($8))|0)!=3; //@line 1903 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1903 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[_PyExc_TypeError]; //@line 1904 "_cursesmodule.c"
        _PyErr_SetString($10, ((__str214)&4294967295)); //@line 1904 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1905 "_cursesmodule.c"
        __label__ = 9; break; //@line 1905 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$args_addr]; //@line 1908 "_cursesmodule.c"
        var $12=_PyArg_ParseTuple($11, ((__str215)&4294967295), $pair, $f, $b); //@line 1908 "_cursesmodule.c"
        var $13=((($12))|0)==0; //@line 1908 "_cursesmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1908 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1908 "_cursesmodule.c"
        __label__ = 9; break; //@line 1908 "_cursesmodule.c"
      case 8: // $bb7
        var $14=HEAP[$b]; //@line 1910 "_cursesmodule.c"
        var $15=reSign(($14), 16, 0); //@line 1910 "_cursesmodule.c"
        var $16=HEAP[$f]; //@line 1910 "_cursesmodule.c"
        var $17=reSign(($16), 16, 0); //@line 1910 "_cursesmodule.c"
        var $18=HEAP[$pair]; //@line 1910 "_cursesmodule.c"
        var $19=reSign(($18), 16, 0); //@line 1910 "_cursesmodule.c"
        var $20=((($19)) & 65535); //@line 1910 "_cursesmodule.c"
        var $21=((($17)) & 65535); //@line 1910 "_cursesmodule.c"
        var $22=((($15)) & 65535); //@line 1910 "_cursesmodule.c"
        var $23=_init_pair($20, $21, $22); //@line 1910 "_cursesmodule.c"
        var $24=_PyCursesCheckERR($23, ((__str216)&4294967295)); //@line 1910 "_cursesmodule.c"
        HEAP[$0]=$24; //@line 1910 "_cursesmodule.c"
        __label__ = 9; break; //@line 1910 "_cursesmodule.c"
      case 9: // $bb8
        var $25=HEAP[$0]; //@line 1900 "_cursesmodule.c"
        HEAP[$retval]=$25; //@line 1900 "_cursesmodule.c"
        __label__ = 10; break; //@line 1900 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1900 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1900 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_InitScr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 196; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 196);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $win=__stackBase__+12;
        var $o=__stackBase__+16;
        var $o8=__stackBase__+20;
        var $o13=__stackBase__+24;
        var $o18=__stackBase__+28;
        var $o23=__stackBase__+32;
        var $o28=__stackBase__+36;
        var $o33=__stackBase__+40;
        var $o38=__stackBase__+44;
        var $o43=__stackBase__+48;
        var $o48=__stackBase__+52;
        var $o53=__stackBase__+56;
        var $o58=__stackBase__+60;
        var $o63=__stackBase__+64;
        var $o68=__stackBase__+68;
        var $o73=__stackBase__+72;
        var $o78=__stackBase__+76;
        var $o83=__stackBase__+80;
        var $o88=__stackBase__+84;
        var $o93=__stackBase__+88;
        var $o98=__stackBase__+92;
        var $o103=__stackBase__+96;
        var $o108=__stackBase__+100;
        var $o113=__stackBase__+104;
        var $o118=__stackBase__+108;
        var $o123=__stackBase__+112;
        var $o128=__stackBase__+116;
        var $o133=__stackBase__+120;
        var $o138=__stackBase__+124;
        var $o143=__stackBase__+128;
        var $o148=__stackBase__+132;
        var $o153=__stackBase__+136;
        var $o158=__stackBase__+140;
        var $o163=__stackBase__+144;
        var $o168=__stackBase__+148;
        var $o173=__stackBase__+152;
        var $o178=__stackBase__+156;
        var $o183=__stackBase__+160;
        var $o188=__stackBase__+164;
        var $o193=__stackBase__+168;
        var $o198=__stackBase__+172;
        var $o203=__stackBase__+176;
        var $o208=__stackBase__+180;
        var $o213=__stackBase__+184;
        var $o218=__stackBase__+188;
        var $o223=__stackBase__+192;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_initialised]; //@line 1920 "_cursesmodule.c"
        var $2=((($1))|0)==1; //@line 1920 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1920 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_stdscr]; //@line 1921 "_cursesmodule.c"
        var $4=_wrefresh($3); //@line 1921 "_cursesmodule.c"
        var $5=HEAP[_stdscr]; //@line 1922 "_cursesmodule.c"
        var $6=_PyCursesWindow_New($5); //@line 1922 "_cursesmodule.c"
        HEAP[$0]=$6; //@line 1922 "_cursesmodule.c"
        __label__ = 185; break; //@line 1922 "_cursesmodule.c"
      case 2: // $bb1
        var $7=_initscr(); //@line 1925 "_cursesmodule.c"
        HEAP[$win]=$7; //@line 1925 "_cursesmodule.c"
        var $8=HEAP[$win]; //@line 1927 "_cursesmodule.c"
        var $9=($8)==0; //@line 1927 "_cursesmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1927 "_cursesmodule.c"
      case 3: // $bb2
        var $10=HEAP[_catchall_NULL]; //@line 1928 "_cursesmodule.c"
        var $11=HEAP[_PyCursesError]; //@line 1928 "_cursesmodule.c"
        _PyErr_SetString($11, $10); //@line 1928 "_cursesmodule.c"
        HEAP[$0]=0; //@line 1929 "_cursesmodule.c"
        __label__ = 185; break; //@line 1929 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[_initialised_setupterm]=1; //@line 1932 "_cursesmodule.c"
        var $12=HEAP[_initialised_setupterm]; //@line 1932 "_cursesmodule.c"
        HEAP[_initialised]=$12; //@line 1932 "_cursesmodule.c"
        var $13=HEAP[((_acs_map+432)&4294967295)]; //@line 1945 "_cursesmodule.c"
        var $14=_PyInt_FromLong($13); //@line 1945 "_cursesmodule.c"
        HEAP[$o]=$14; //@line 1945 "_cursesmodule.c"
        var $15=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $16=($15)!=0; //@line 1945 "_cursesmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1945 "_cursesmodule.c"
      case 5: // $bb4
        var $17=HEAP[_ModDict]; //@line 1945 "_cursesmodule.c"
        var $18=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $19=_PyDict_SetItemString($17, ((__str217)&4294967295), $18); //@line 1945 "_cursesmodule.c"
        var $20=((($19))|0)==0; //@line 1945 "_cursesmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1945 "_cursesmodule.c"
      case 6: // $bb5
        var $21=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $22=(($21)&4294967295); //@line 1945 "_cursesmodule.c"
        var $23=HEAP[$22]; //@line 1945 "_cursesmodule.c"
        var $24=((($23) - 1)&4294967295); //@line 1945 "_cursesmodule.c"
        var $25=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $26=(($25)&4294967295); //@line 1945 "_cursesmodule.c"
        HEAP[$26]=$24; //@line 1945 "_cursesmodule.c"
        var $27=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $28=(($27)&4294967295); //@line 1945 "_cursesmodule.c"
        var $29=HEAP[$28]; //@line 1945 "_cursesmodule.c"
        var $30=((($29))|0)==0; //@line 1945 "_cursesmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1945 "_cursesmodule.c"
      case 7: // $bb6
        var $31=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        var $32=(($31+4)&4294967295); //@line 1945 "_cursesmodule.c"
        var $33=HEAP[$32]; //@line 1945 "_cursesmodule.c"
        var $34=(($33+24)&4294967295); //@line 1945 "_cursesmodule.c"
        var $35=HEAP[$34]; //@line 1945 "_cursesmodule.c"
        var $36=HEAP[$o]; //@line 1945 "_cursesmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 1945 "_cursesmodule.c"
        __label__ = 8; break; //@line 1945 "_cursesmodule.c"
      case 8: // $bb7
        var $37=HEAP[((_acs_map+436)&4294967295)]; //@line 1946 "_cursesmodule.c"
        var $38=_PyInt_FromLong($37); //@line 1946 "_cursesmodule.c"
        HEAP[$o8]=$38; //@line 1946 "_cursesmodule.c"
        var $39=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $40=($39)!=0; //@line 1946 "_cursesmodule.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1946 "_cursesmodule.c"
      case 9: // $bb9
        var $41=HEAP[_ModDict]; //@line 1946 "_cursesmodule.c"
        var $42=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $43=_PyDict_SetItemString($41, ((__str218)&4294967295), $42); //@line 1946 "_cursesmodule.c"
        var $44=((($43))|0)==0; //@line 1946 "_cursesmodule.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 1946 "_cursesmodule.c"
      case 10: // $bb10
        var $45=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $46=(($45)&4294967295); //@line 1946 "_cursesmodule.c"
        var $47=HEAP[$46]; //@line 1946 "_cursesmodule.c"
        var $48=((($47) - 1)&4294967295); //@line 1946 "_cursesmodule.c"
        var $49=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $50=(($49)&4294967295); //@line 1946 "_cursesmodule.c"
        HEAP[$50]=$48; //@line 1946 "_cursesmodule.c"
        var $51=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $52=(($51)&4294967295); //@line 1946 "_cursesmodule.c"
        var $53=HEAP[$52]; //@line 1946 "_cursesmodule.c"
        var $54=((($53))|0)==0; //@line 1946 "_cursesmodule.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1946 "_cursesmodule.c"
      case 11: // $bb11
        var $55=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        var $56=(($55+4)&4294967295); //@line 1946 "_cursesmodule.c"
        var $57=HEAP[$56]; //@line 1946 "_cursesmodule.c"
        var $58=(($57+24)&4294967295); //@line 1946 "_cursesmodule.c"
        var $59=HEAP[$58]; //@line 1946 "_cursesmodule.c"
        var $60=HEAP[$o8]; //@line 1946 "_cursesmodule.c"
        FUNCTION_TABLE[$59]($60); //@line 1946 "_cursesmodule.c"
        __label__ = 12; break; //@line 1946 "_cursesmodule.c"
      case 12: // $bb12
        var $61=HEAP[((_acs_map+428)&4294967295)]; //@line 1947 "_cursesmodule.c"
        var $62=_PyInt_FromLong($61); //@line 1947 "_cursesmodule.c"
        HEAP[$o13]=$62; //@line 1947 "_cursesmodule.c"
        var $63=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $64=($63)!=0; //@line 1947 "_cursesmodule.c"
        if ($64) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 1947 "_cursesmodule.c"
      case 13: // $bb14
        var $65=HEAP[_ModDict]; //@line 1947 "_cursesmodule.c"
        var $66=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $67=_PyDict_SetItemString($65, ((__str219)&4294967295), $66); //@line 1947 "_cursesmodule.c"
        var $68=((($67))|0)==0; //@line 1947 "_cursesmodule.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1947 "_cursesmodule.c"
      case 14: // $bb15
        var $69=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $70=(($69)&4294967295); //@line 1947 "_cursesmodule.c"
        var $71=HEAP[$70]; //@line 1947 "_cursesmodule.c"
        var $72=((($71) - 1)&4294967295); //@line 1947 "_cursesmodule.c"
        var $73=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $74=(($73)&4294967295); //@line 1947 "_cursesmodule.c"
        HEAP[$74]=$72; //@line 1947 "_cursesmodule.c"
        var $75=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $76=(($75)&4294967295); //@line 1947 "_cursesmodule.c"
        var $77=HEAP[$76]; //@line 1947 "_cursesmodule.c"
        var $78=((($77))|0)==0; //@line 1947 "_cursesmodule.c"
        if ($78) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1947 "_cursesmodule.c"
      case 15: // $bb16
        var $79=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        var $80=(($79+4)&4294967295); //@line 1947 "_cursesmodule.c"
        var $81=HEAP[$80]; //@line 1947 "_cursesmodule.c"
        var $82=(($81+24)&4294967295); //@line 1947 "_cursesmodule.c"
        var $83=HEAP[$82]; //@line 1947 "_cursesmodule.c"
        var $84=HEAP[$o13]; //@line 1947 "_cursesmodule.c"
        FUNCTION_TABLE[$83]($84); //@line 1947 "_cursesmodule.c"
        __label__ = 16; break; //@line 1947 "_cursesmodule.c"
      case 16: // $bb17
        var $85=HEAP[((_acs_map+424)&4294967295)]; //@line 1948 "_cursesmodule.c"
        var $86=_PyInt_FromLong($85); //@line 1948 "_cursesmodule.c"
        HEAP[$o18]=$86; //@line 1948 "_cursesmodule.c"
        var $87=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $88=($87)!=0; //@line 1948 "_cursesmodule.c"
        if ($88) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 1948 "_cursesmodule.c"
      case 17: // $bb19
        var $89=HEAP[_ModDict]; //@line 1948 "_cursesmodule.c"
        var $90=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $91=_PyDict_SetItemString($89, ((__str220)&4294967295), $90); //@line 1948 "_cursesmodule.c"
        var $92=((($91))|0)==0; //@line 1948 "_cursesmodule.c"
        if ($92) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1948 "_cursesmodule.c"
      case 18: // $bb20
        var $93=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $94=(($93)&4294967295); //@line 1948 "_cursesmodule.c"
        var $95=HEAP[$94]; //@line 1948 "_cursesmodule.c"
        var $96=((($95) - 1)&4294967295); //@line 1948 "_cursesmodule.c"
        var $97=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $98=(($97)&4294967295); //@line 1948 "_cursesmodule.c"
        HEAP[$98]=$96; //@line 1948 "_cursesmodule.c"
        var $99=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $100=(($99)&4294967295); //@line 1948 "_cursesmodule.c"
        var $101=HEAP[$100]; //@line 1948 "_cursesmodule.c"
        var $102=((($101))|0)==0; //@line 1948 "_cursesmodule.c"
        if ($102) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1948 "_cursesmodule.c"
      case 19: // $bb21
        var $103=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        var $104=(($103+4)&4294967295); //@line 1948 "_cursesmodule.c"
        var $105=HEAP[$104]; //@line 1948 "_cursesmodule.c"
        var $106=(($105+24)&4294967295); //@line 1948 "_cursesmodule.c"
        var $107=HEAP[$106]; //@line 1948 "_cursesmodule.c"
        var $108=HEAP[$o18]; //@line 1948 "_cursesmodule.c"
        FUNCTION_TABLE[$107]($108); //@line 1948 "_cursesmodule.c"
        __label__ = 20; break; //@line 1948 "_cursesmodule.c"
      case 20: // $bb22
        var $109=HEAP[((_acs_map+464)&4294967295)]; //@line 1949 "_cursesmodule.c"
        var $110=_PyInt_FromLong($109); //@line 1949 "_cursesmodule.c"
        HEAP[$o23]=$110; //@line 1949 "_cursesmodule.c"
        var $111=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $112=($111)!=0; //@line 1949 "_cursesmodule.c"
        if ($112) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 1949 "_cursesmodule.c"
      case 21: // $bb24
        var $113=HEAP[_ModDict]; //@line 1949 "_cursesmodule.c"
        var $114=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $115=_PyDict_SetItemString($113, ((__str221)&4294967295), $114); //@line 1949 "_cursesmodule.c"
        var $116=((($115))|0)==0; //@line 1949 "_cursesmodule.c"
        if ($116) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 1949 "_cursesmodule.c"
      case 22: // $bb25
        var $117=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $118=(($117)&4294967295); //@line 1949 "_cursesmodule.c"
        var $119=HEAP[$118]; //@line 1949 "_cursesmodule.c"
        var $120=((($119) - 1)&4294967295); //@line 1949 "_cursesmodule.c"
        var $121=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $122=(($121)&4294967295); //@line 1949 "_cursesmodule.c"
        HEAP[$122]=$120; //@line 1949 "_cursesmodule.c"
        var $123=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $124=(($123)&4294967295); //@line 1949 "_cursesmodule.c"
        var $125=HEAP[$124]; //@line 1949 "_cursesmodule.c"
        var $126=((($125))|0)==0; //@line 1949 "_cursesmodule.c"
        if ($126) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1949 "_cursesmodule.c"
      case 23: // $bb26
        var $127=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        var $128=(($127+4)&4294967295); //@line 1949 "_cursesmodule.c"
        var $129=HEAP[$128]; //@line 1949 "_cursesmodule.c"
        var $130=(($129+24)&4294967295); //@line 1949 "_cursesmodule.c"
        var $131=HEAP[$130]; //@line 1949 "_cursesmodule.c"
        var $132=HEAP[$o23]; //@line 1949 "_cursesmodule.c"
        FUNCTION_TABLE[$131]($132); //@line 1949 "_cursesmodule.c"
        __label__ = 24; break; //@line 1949 "_cursesmodule.c"
      case 24: // $bb27
        var $133=HEAP[((_acs_map+468)&4294967295)]; //@line 1950 "_cursesmodule.c"
        var $134=_PyInt_FromLong($133); //@line 1950 "_cursesmodule.c"
        HEAP[$o28]=$134; //@line 1950 "_cursesmodule.c"
        var $135=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $136=($135)!=0; //@line 1950 "_cursesmodule.c"
        if ($136) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 1950 "_cursesmodule.c"
      case 25: // $bb29
        var $137=HEAP[_ModDict]; //@line 1950 "_cursesmodule.c"
        var $138=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $139=_PyDict_SetItemString($137, ((__str222)&4294967295), $138); //@line 1950 "_cursesmodule.c"
        var $140=((($139))|0)==0; //@line 1950 "_cursesmodule.c"
        if ($140) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 1950 "_cursesmodule.c"
      case 26: // $bb30
        var $141=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $142=(($141)&4294967295); //@line 1950 "_cursesmodule.c"
        var $143=HEAP[$142]; //@line 1950 "_cursesmodule.c"
        var $144=((($143) - 1)&4294967295); //@line 1950 "_cursesmodule.c"
        var $145=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $146=(($145)&4294967295); //@line 1950 "_cursesmodule.c"
        HEAP[$146]=$144; //@line 1950 "_cursesmodule.c"
        var $147=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $148=(($147)&4294967295); //@line 1950 "_cursesmodule.c"
        var $149=HEAP[$148]; //@line 1950 "_cursesmodule.c"
        var $150=((($149))|0)==0; //@line 1950 "_cursesmodule.c"
        if ($150) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1950 "_cursesmodule.c"
      case 27: // $bb31
        var $151=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        var $152=(($151+4)&4294967295); //@line 1950 "_cursesmodule.c"
        var $153=HEAP[$152]; //@line 1950 "_cursesmodule.c"
        var $154=(($153+24)&4294967295); //@line 1950 "_cursesmodule.c"
        var $155=HEAP[$154]; //@line 1950 "_cursesmodule.c"
        var $156=HEAP[$o28]; //@line 1950 "_cursesmodule.c"
        FUNCTION_TABLE[$155]($156); //@line 1950 "_cursesmodule.c"
        __label__ = 28; break; //@line 1950 "_cursesmodule.c"
      case 28: // $bb32
        var $157=HEAP[((_acs_map+472)&4294967295)]; //@line 1951 "_cursesmodule.c"
        var $158=_PyInt_FromLong($157); //@line 1951 "_cursesmodule.c"
        HEAP[$o33]=$158; //@line 1951 "_cursesmodule.c"
        var $159=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $160=($159)!=0; //@line 1951 "_cursesmodule.c"
        if ($160) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 1951 "_cursesmodule.c"
      case 29: // $bb34
        var $161=HEAP[_ModDict]; //@line 1951 "_cursesmodule.c"
        var $162=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $163=_PyDict_SetItemString($161, ((__str223)&4294967295), $162); //@line 1951 "_cursesmodule.c"
        var $164=((($163))|0)==0; //@line 1951 "_cursesmodule.c"
        if ($164) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1951 "_cursesmodule.c"
      case 30: // $bb35
        var $165=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $166=(($165)&4294967295); //@line 1951 "_cursesmodule.c"
        var $167=HEAP[$166]; //@line 1951 "_cursesmodule.c"
        var $168=((($167) - 1)&4294967295); //@line 1951 "_cursesmodule.c"
        var $169=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $170=(($169)&4294967295); //@line 1951 "_cursesmodule.c"
        HEAP[$170]=$168; //@line 1951 "_cursesmodule.c"
        var $171=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $172=(($171)&4294967295); //@line 1951 "_cursesmodule.c"
        var $173=HEAP[$172]; //@line 1951 "_cursesmodule.c"
        var $174=((($173))|0)==0; //@line 1951 "_cursesmodule.c"
        if ($174) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1951 "_cursesmodule.c"
      case 31: // $bb36
        var $175=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        var $176=(($175+4)&4294967295); //@line 1951 "_cursesmodule.c"
        var $177=HEAP[$176]; //@line 1951 "_cursesmodule.c"
        var $178=(($177+24)&4294967295); //@line 1951 "_cursesmodule.c"
        var $179=HEAP[$178]; //@line 1951 "_cursesmodule.c"
        var $180=HEAP[$o33]; //@line 1951 "_cursesmodule.c"
        FUNCTION_TABLE[$179]($180); //@line 1951 "_cursesmodule.c"
        __label__ = 32; break; //@line 1951 "_cursesmodule.c"
      case 32: // $bb37
        var $181=HEAP[((_acs_map+476)&4294967295)]; //@line 1952 "_cursesmodule.c"
        var $182=_PyInt_FromLong($181); //@line 1952 "_cursesmodule.c"
        HEAP[$o38]=$182; //@line 1952 "_cursesmodule.c"
        var $183=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $184=($183)!=0; //@line 1952 "_cursesmodule.c"
        if ($184) { __label__ = 33; break; } else { __label__ = 36; break; } //@line 1952 "_cursesmodule.c"
      case 33: // $bb39
        var $185=HEAP[_ModDict]; //@line 1952 "_cursesmodule.c"
        var $186=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $187=_PyDict_SetItemString($185, ((__str224)&4294967295), $186); //@line 1952 "_cursesmodule.c"
        var $188=((($187))|0)==0; //@line 1952 "_cursesmodule.c"
        if ($188) { __label__ = 34; break; } else { __label__ = 36; break; } //@line 1952 "_cursesmodule.c"
      case 34: // $bb40
        var $189=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $190=(($189)&4294967295); //@line 1952 "_cursesmodule.c"
        var $191=HEAP[$190]; //@line 1952 "_cursesmodule.c"
        var $192=((($191) - 1)&4294967295); //@line 1952 "_cursesmodule.c"
        var $193=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $194=(($193)&4294967295); //@line 1952 "_cursesmodule.c"
        HEAP[$194]=$192; //@line 1952 "_cursesmodule.c"
        var $195=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $196=(($195)&4294967295); //@line 1952 "_cursesmodule.c"
        var $197=HEAP[$196]; //@line 1952 "_cursesmodule.c"
        var $198=((($197))|0)==0; //@line 1952 "_cursesmodule.c"
        if ($198) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1952 "_cursesmodule.c"
      case 35: // $bb41
        var $199=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        var $200=(($199+4)&4294967295); //@line 1952 "_cursesmodule.c"
        var $201=HEAP[$200]; //@line 1952 "_cursesmodule.c"
        var $202=(($201+24)&4294967295); //@line 1952 "_cursesmodule.c"
        var $203=HEAP[$202]; //@line 1952 "_cursesmodule.c"
        var $204=HEAP[$o38]; //@line 1952 "_cursesmodule.c"
        FUNCTION_TABLE[$203]($204); //@line 1952 "_cursesmodule.c"
        __label__ = 36; break; //@line 1952 "_cursesmodule.c"
      case 36: // $bb42
        var $205=HEAP[((_acs_map+452)&4294967295)]; //@line 1953 "_cursesmodule.c"
        var $206=_PyInt_FromLong($205); //@line 1953 "_cursesmodule.c"
        HEAP[$o43]=$206; //@line 1953 "_cursesmodule.c"
        var $207=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $208=($207)!=0; //@line 1953 "_cursesmodule.c"
        if ($208) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 1953 "_cursesmodule.c"
      case 37: // $bb44
        var $209=HEAP[_ModDict]; //@line 1953 "_cursesmodule.c"
        var $210=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $211=_PyDict_SetItemString($209, ((__str225)&4294967295), $210); //@line 1953 "_cursesmodule.c"
        var $212=((($211))|0)==0; //@line 1953 "_cursesmodule.c"
        if ($212) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 1953 "_cursesmodule.c"
      case 38: // $bb45
        var $213=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $214=(($213)&4294967295); //@line 1953 "_cursesmodule.c"
        var $215=HEAP[$214]; //@line 1953 "_cursesmodule.c"
        var $216=((($215) - 1)&4294967295); //@line 1953 "_cursesmodule.c"
        var $217=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $218=(($217)&4294967295); //@line 1953 "_cursesmodule.c"
        HEAP[$218]=$216; //@line 1953 "_cursesmodule.c"
        var $219=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $220=(($219)&4294967295); //@line 1953 "_cursesmodule.c"
        var $221=HEAP[$220]; //@line 1953 "_cursesmodule.c"
        var $222=((($221))|0)==0; //@line 1953 "_cursesmodule.c"
        if ($222) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1953 "_cursesmodule.c"
      case 39: // $bb46
        var $223=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        var $224=(($223+4)&4294967295); //@line 1953 "_cursesmodule.c"
        var $225=HEAP[$224]; //@line 1953 "_cursesmodule.c"
        var $226=(($225+24)&4294967295); //@line 1953 "_cursesmodule.c"
        var $227=HEAP[$226]; //@line 1953 "_cursesmodule.c"
        var $228=HEAP[$o43]; //@line 1953 "_cursesmodule.c"
        FUNCTION_TABLE[$227]($228); //@line 1953 "_cursesmodule.c"
        __label__ = 40; break; //@line 1953 "_cursesmodule.c"
      case 40: // $bb47
        var $229=HEAP[((_acs_map+480)&4294967295)]; //@line 1954 "_cursesmodule.c"
        var $230=_PyInt_FromLong($229); //@line 1954 "_cursesmodule.c"
        HEAP[$o48]=$230; //@line 1954 "_cursesmodule.c"
        var $231=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $232=($231)!=0; //@line 1954 "_cursesmodule.c"
        if ($232) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 1954 "_cursesmodule.c"
      case 41: // $bb49
        var $233=HEAP[_ModDict]; //@line 1954 "_cursesmodule.c"
        var $234=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $235=_PyDict_SetItemString($233, ((__str226)&4294967295), $234); //@line 1954 "_cursesmodule.c"
        var $236=((($235))|0)==0; //@line 1954 "_cursesmodule.c"
        if ($236) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 1954 "_cursesmodule.c"
      case 42: // $bb50
        var $237=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $238=(($237)&4294967295); //@line 1954 "_cursesmodule.c"
        var $239=HEAP[$238]; //@line 1954 "_cursesmodule.c"
        var $240=((($239) - 1)&4294967295); //@line 1954 "_cursesmodule.c"
        var $241=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $242=(($241)&4294967295); //@line 1954 "_cursesmodule.c"
        HEAP[$242]=$240; //@line 1954 "_cursesmodule.c"
        var $243=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $244=(($243)&4294967295); //@line 1954 "_cursesmodule.c"
        var $245=HEAP[$244]; //@line 1954 "_cursesmodule.c"
        var $246=((($245))|0)==0; //@line 1954 "_cursesmodule.c"
        if ($246) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1954 "_cursesmodule.c"
      case 43: // $bb51
        var $247=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        var $248=(($247+4)&4294967295); //@line 1954 "_cursesmodule.c"
        var $249=HEAP[$248]; //@line 1954 "_cursesmodule.c"
        var $250=(($249+24)&4294967295); //@line 1954 "_cursesmodule.c"
        var $251=HEAP[$250]; //@line 1954 "_cursesmodule.c"
        var $252=HEAP[$o48]; //@line 1954 "_cursesmodule.c"
        FUNCTION_TABLE[$251]($252); //@line 1954 "_cursesmodule.c"
        __label__ = 44; break; //@line 1954 "_cursesmodule.c"
      case 44: // $bb52
        var $253=HEAP[((_acs_map+440)&4294967295)]; //@line 1955 "_cursesmodule.c"
        var $254=_PyInt_FromLong($253); //@line 1955 "_cursesmodule.c"
        HEAP[$o53]=$254; //@line 1955 "_cursesmodule.c"
        var $255=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $256=($255)!=0; //@line 1955 "_cursesmodule.c"
        if ($256) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 1955 "_cursesmodule.c"
      case 45: // $bb54
        var $257=HEAP[_ModDict]; //@line 1955 "_cursesmodule.c"
        var $258=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $259=_PyDict_SetItemString($257, ((__str227)&4294967295), $258); //@line 1955 "_cursesmodule.c"
        var $260=((($259))|0)==0; //@line 1955 "_cursesmodule.c"
        if ($260) { __label__ = 46; break; } else { __label__ = 48; break; } //@line 1955 "_cursesmodule.c"
      case 46: // $bb55
        var $261=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $262=(($261)&4294967295); //@line 1955 "_cursesmodule.c"
        var $263=HEAP[$262]; //@line 1955 "_cursesmodule.c"
        var $264=((($263) - 1)&4294967295); //@line 1955 "_cursesmodule.c"
        var $265=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $266=(($265)&4294967295); //@line 1955 "_cursesmodule.c"
        HEAP[$266]=$264; //@line 1955 "_cursesmodule.c"
        var $267=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $268=(($267)&4294967295); //@line 1955 "_cursesmodule.c"
        var $269=HEAP[$268]; //@line 1955 "_cursesmodule.c"
        var $270=((($269))|0)==0; //@line 1955 "_cursesmodule.c"
        if ($270) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1955 "_cursesmodule.c"
      case 47: // $bb56
        var $271=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        var $272=(($271+4)&4294967295); //@line 1955 "_cursesmodule.c"
        var $273=HEAP[$272]; //@line 1955 "_cursesmodule.c"
        var $274=(($273+24)&4294967295); //@line 1955 "_cursesmodule.c"
        var $275=HEAP[$274]; //@line 1955 "_cursesmodule.c"
        var $276=HEAP[$o53]; //@line 1955 "_cursesmodule.c"
        FUNCTION_TABLE[$275]($276); //@line 1955 "_cursesmodule.c"
        __label__ = 48; break; //@line 1955 "_cursesmodule.c"
      case 48: // $bb57
        var $277=HEAP[((_acs_map+444)&4294967295)]; //@line 1961 "_cursesmodule.c"
        var $278=_PyInt_FromLong($277); //@line 1961 "_cursesmodule.c"
        HEAP[$o58]=$278; //@line 1961 "_cursesmodule.c"
        var $279=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $280=($279)!=0; //@line 1961 "_cursesmodule.c"
        if ($280) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 1961 "_cursesmodule.c"
      case 49: // $bb59
        var $281=HEAP[_ModDict]; //@line 1961 "_cursesmodule.c"
        var $282=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $283=_PyDict_SetItemString($281, ((__str228)&4294967295), $282); //@line 1961 "_cursesmodule.c"
        var $284=((($283))|0)==0; //@line 1961 "_cursesmodule.c"
        if ($284) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 1961 "_cursesmodule.c"
      case 50: // $bb60
        var $285=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $286=(($285)&4294967295); //@line 1961 "_cursesmodule.c"
        var $287=HEAP[$286]; //@line 1961 "_cursesmodule.c"
        var $288=((($287) - 1)&4294967295); //@line 1961 "_cursesmodule.c"
        var $289=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $290=(($289)&4294967295); //@line 1961 "_cursesmodule.c"
        HEAP[$290]=$288; //@line 1961 "_cursesmodule.c"
        var $291=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $292=(($291)&4294967295); //@line 1961 "_cursesmodule.c"
        var $293=HEAP[$292]; //@line 1961 "_cursesmodule.c"
        var $294=((($293))|0)==0; //@line 1961 "_cursesmodule.c"
        if ($294) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1961 "_cursesmodule.c"
      case 51: // $bb61
        var $295=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        var $296=(($295+4)&4294967295); //@line 1961 "_cursesmodule.c"
        var $297=HEAP[$296]; //@line 1961 "_cursesmodule.c"
        var $298=(($297+24)&4294967295); //@line 1961 "_cursesmodule.c"
        var $299=HEAP[$298]; //@line 1961 "_cursesmodule.c"
        var $300=HEAP[$o58]; //@line 1961 "_cursesmodule.c"
        FUNCTION_TABLE[$299]($300); //@line 1961 "_cursesmodule.c"
        __label__ = 52; break; //@line 1961 "_cursesmodule.c"
      case 52: // $bb62
        var $301=HEAP[((_acs_map+460)&4294967295)]; //@line 1962 "_cursesmodule.c"
        var $302=_PyInt_FromLong($301); //@line 1962 "_cursesmodule.c"
        HEAP[$o63]=$302; //@line 1962 "_cursesmodule.c"
        var $303=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $304=($303)!=0; //@line 1962 "_cursesmodule.c"
        if ($304) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 1962 "_cursesmodule.c"
      case 53: // $bb64
        var $305=HEAP[_ModDict]; //@line 1962 "_cursesmodule.c"
        var $306=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $307=_PyDict_SetItemString($305, ((__str229)&4294967295), $306); //@line 1962 "_cursesmodule.c"
        var $308=((($307))|0)==0; //@line 1962 "_cursesmodule.c"
        if ($308) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1962 "_cursesmodule.c"
      case 54: // $bb65
        var $309=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $310=(($309)&4294967295); //@line 1962 "_cursesmodule.c"
        var $311=HEAP[$310]; //@line 1962 "_cursesmodule.c"
        var $312=((($311) - 1)&4294967295); //@line 1962 "_cursesmodule.c"
        var $313=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $314=(($313)&4294967295); //@line 1962 "_cursesmodule.c"
        HEAP[$314]=$312; //@line 1962 "_cursesmodule.c"
        var $315=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $316=(($315)&4294967295); //@line 1962 "_cursesmodule.c"
        var $317=HEAP[$316]; //@line 1962 "_cursesmodule.c"
        var $318=((($317))|0)==0; //@line 1962 "_cursesmodule.c"
        if ($318) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1962 "_cursesmodule.c"
      case 55: // $bb66
        var $319=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        var $320=(($319+4)&4294967295); //@line 1962 "_cursesmodule.c"
        var $321=HEAP[$320]; //@line 1962 "_cursesmodule.c"
        var $322=(($321+24)&4294967295); //@line 1962 "_cursesmodule.c"
        var $323=HEAP[$322]; //@line 1962 "_cursesmodule.c"
        var $324=HEAP[$o63]; //@line 1962 "_cursesmodule.c"
        FUNCTION_TABLE[$323]($324); //@line 1962 "_cursesmodule.c"
        __label__ = 56; break; //@line 1962 "_cursesmodule.c"
      case 56: // $bb67
        var $325=HEAP[((_acs_map+384)&4294967295)]; //@line 1963 "_cursesmodule.c"
        var $326=_PyInt_FromLong($325); //@line 1963 "_cursesmodule.c"
        HEAP[$o68]=$326; //@line 1963 "_cursesmodule.c"
        var $327=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $328=($327)!=0; //@line 1963 "_cursesmodule.c"
        if ($328) { __label__ = 57; break; } else { __label__ = 60; break; } //@line 1963 "_cursesmodule.c"
      case 57: // $bb69
        var $329=HEAP[_ModDict]; //@line 1963 "_cursesmodule.c"
        var $330=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $331=_PyDict_SetItemString($329, ((__str230)&4294967295), $330); //@line 1963 "_cursesmodule.c"
        var $332=((($331))|0)==0; //@line 1963 "_cursesmodule.c"
        if ($332) { __label__ = 58; break; } else { __label__ = 60; break; } //@line 1963 "_cursesmodule.c"
      case 58: // $bb70
        var $333=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $334=(($333)&4294967295); //@line 1963 "_cursesmodule.c"
        var $335=HEAP[$334]; //@line 1963 "_cursesmodule.c"
        var $336=((($335) - 1)&4294967295); //@line 1963 "_cursesmodule.c"
        var $337=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $338=(($337)&4294967295); //@line 1963 "_cursesmodule.c"
        HEAP[$338]=$336; //@line 1963 "_cursesmodule.c"
        var $339=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $340=(($339)&4294967295); //@line 1963 "_cursesmodule.c"
        var $341=HEAP[$340]; //@line 1963 "_cursesmodule.c"
        var $342=((($341))|0)==0; //@line 1963 "_cursesmodule.c"
        if ($342) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1963 "_cursesmodule.c"
      case 59: // $bb71
        var $343=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        var $344=(($343+4)&4294967295); //@line 1963 "_cursesmodule.c"
        var $345=HEAP[$344]; //@line 1963 "_cursesmodule.c"
        var $346=(($345+24)&4294967295); //@line 1963 "_cursesmodule.c"
        var $347=HEAP[$346]; //@line 1963 "_cursesmodule.c"
        var $348=HEAP[$o68]; //@line 1963 "_cursesmodule.c"
        FUNCTION_TABLE[$347]($348); //@line 1963 "_cursesmodule.c"
        __label__ = 60; break; //@line 1963 "_cursesmodule.c"
      case 60: // $bb72
        var $349=HEAP[((_acs_map+388)&4294967295)]; //@line 1964 "_cursesmodule.c"
        var $350=_PyInt_FromLong($349); //@line 1964 "_cursesmodule.c"
        HEAP[$o73]=$350; //@line 1964 "_cursesmodule.c"
        var $351=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $352=($351)!=0; //@line 1964 "_cursesmodule.c"
        if ($352) { __label__ = 61; break; } else { __label__ = 64; break; } //@line 1964 "_cursesmodule.c"
      case 61: // $bb74
        var $353=HEAP[_ModDict]; //@line 1964 "_cursesmodule.c"
        var $354=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $355=_PyDict_SetItemString($353, ((__str231)&4294967295), $354); //@line 1964 "_cursesmodule.c"
        var $356=((($355))|0)==0; //@line 1964 "_cursesmodule.c"
        if ($356) { __label__ = 62; break; } else { __label__ = 64; break; } //@line 1964 "_cursesmodule.c"
      case 62: // $bb75
        var $357=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $358=(($357)&4294967295); //@line 1964 "_cursesmodule.c"
        var $359=HEAP[$358]; //@line 1964 "_cursesmodule.c"
        var $360=((($359) - 1)&4294967295); //@line 1964 "_cursesmodule.c"
        var $361=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $362=(($361)&4294967295); //@line 1964 "_cursesmodule.c"
        HEAP[$362]=$360; //@line 1964 "_cursesmodule.c"
        var $363=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $364=(($363)&4294967295); //@line 1964 "_cursesmodule.c"
        var $365=HEAP[$364]; //@line 1964 "_cursesmodule.c"
        var $366=((($365))|0)==0; //@line 1964 "_cursesmodule.c"
        if ($366) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 1964 "_cursesmodule.c"
      case 63: // $bb76
        var $367=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        var $368=(($367+4)&4294967295); //@line 1964 "_cursesmodule.c"
        var $369=HEAP[$368]; //@line 1964 "_cursesmodule.c"
        var $370=(($369+24)&4294967295); //@line 1964 "_cursesmodule.c"
        var $371=HEAP[$370]; //@line 1964 "_cursesmodule.c"
        var $372=HEAP[$o73]; //@line 1964 "_cursesmodule.c"
        FUNCTION_TABLE[$371]($372); //@line 1964 "_cursesmodule.c"
        __label__ = 64; break; //@line 1964 "_cursesmodule.c"
      case 64: // $bb77
        var $373=HEAP[((_acs_map+408)&4294967295)]; //@line 1965 "_cursesmodule.c"
        var $374=_PyInt_FromLong($373); //@line 1965 "_cursesmodule.c"
        HEAP[$o78]=$374; //@line 1965 "_cursesmodule.c"
        var $375=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $376=($375)!=0; //@line 1965 "_cursesmodule.c"
        if ($376) { __label__ = 65; break; } else { __label__ = 68; break; } //@line 1965 "_cursesmodule.c"
      case 65: // $bb79
        var $377=HEAP[_ModDict]; //@line 1965 "_cursesmodule.c"
        var $378=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $379=_PyDict_SetItemString($377, ((__str232)&4294967295), $378); //@line 1965 "_cursesmodule.c"
        var $380=((($379))|0)==0; //@line 1965 "_cursesmodule.c"
        if ($380) { __label__ = 66; break; } else { __label__ = 68; break; } //@line 1965 "_cursesmodule.c"
      case 66: // $bb80
        var $381=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $382=(($381)&4294967295); //@line 1965 "_cursesmodule.c"
        var $383=HEAP[$382]; //@line 1965 "_cursesmodule.c"
        var $384=((($383) - 1)&4294967295); //@line 1965 "_cursesmodule.c"
        var $385=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $386=(($385)&4294967295); //@line 1965 "_cursesmodule.c"
        HEAP[$386]=$384; //@line 1965 "_cursesmodule.c"
        var $387=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $388=(($387)&4294967295); //@line 1965 "_cursesmodule.c"
        var $389=HEAP[$388]; //@line 1965 "_cursesmodule.c"
        var $390=((($389))|0)==0; //@line 1965 "_cursesmodule.c"
        if ($390) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 1965 "_cursesmodule.c"
      case 67: // $bb81
        var $391=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        var $392=(($391+4)&4294967295); //@line 1965 "_cursesmodule.c"
        var $393=HEAP[$392]; //@line 1965 "_cursesmodule.c"
        var $394=(($393+24)&4294967295); //@line 1965 "_cursesmodule.c"
        var $395=HEAP[$394]; //@line 1965 "_cursesmodule.c"
        var $396=HEAP[$o78]; //@line 1965 "_cursesmodule.c"
        FUNCTION_TABLE[$395]($396); //@line 1965 "_cursesmodule.c"
        __label__ = 68; break; //@line 1965 "_cursesmodule.c"
      case 68: // $bb82
        var $397=HEAP[((_acs_map+412)&4294967295)]; //@line 1966 "_cursesmodule.c"
        var $398=_PyInt_FromLong($397); //@line 1966 "_cursesmodule.c"
        HEAP[$o83]=$398; //@line 1966 "_cursesmodule.c"
        var $399=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $400=($399)!=0; //@line 1966 "_cursesmodule.c"
        if ($400) { __label__ = 69; break; } else { __label__ = 72; break; } //@line 1966 "_cursesmodule.c"
      case 69: // $bb84
        var $401=HEAP[_ModDict]; //@line 1966 "_cursesmodule.c"
        var $402=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $403=_PyDict_SetItemString($401, ((__str233)&4294967295), $402); //@line 1966 "_cursesmodule.c"
        var $404=((($403))|0)==0; //@line 1966 "_cursesmodule.c"
        if ($404) { __label__ = 70; break; } else { __label__ = 72; break; } //@line 1966 "_cursesmodule.c"
      case 70: // $bb85
        var $405=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $406=(($405)&4294967295); //@line 1966 "_cursesmodule.c"
        var $407=HEAP[$406]; //@line 1966 "_cursesmodule.c"
        var $408=((($407) - 1)&4294967295); //@line 1966 "_cursesmodule.c"
        var $409=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $410=(($409)&4294967295); //@line 1966 "_cursesmodule.c"
        HEAP[$410]=$408; //@line 1966 "_cursesmodule.c"
        var $411=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $412=(($411)&4294967295); //@line 1966 "_cursesmodule.c"
        var $413=HEAP[$412]; //@line 1966 "_cursesmodule.c"
        var $414=((($413))|0)==0; //@line 1966 "_cursesmodule.c"
        if ($414) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 1966 "_cursesmodule.c"
      case 71: // $bb86
        var $415=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        var $416=(($415+4)&4294967295); //@line 1966 "_cursesmodule.c"
        var $417=HEAP[$416]; //@line 1966 "_cursesmodule.c"
        var $418=(($417+24)&4294967295); //@line 1966 "_cursesmodule.c"
        var $419=HEAP[$418]; //@line 1966 "_cursesmodule.c"
        var $420=HEAP[$o83]; //@line 1966 "_cursesmodule.c"
        FUNCTION_TABLE[$419]($420); //@line 1966 "_cursesmodule.c"
        __label__ = 72; break; //@line 1966 "_cursesmodule.c"
      case 72: // $bb87
        var $421=HEAP[((_acs_map+504)&4294967295)]; //@line 1967 "_cursesmodule.c"
        var $422=_PyInt_FromLong($421); //@line 1967 "_cursesmodule.c"
        HEAP[$o88]=$422; //@line 1967 "_cursesmodule.c"
        var $423=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $424=($423)!=0; //@line 1967 "_cursesmodule.c"
        if ($424) { __label__ = 73; break; } else { __label__ = 76; break; } //@line 1967 "_cursesmodule.c"
      case 73: // $bb89
        var $425=HEAP[_ModDict]; //@line 1967 "_cursesmodule.c"
        var $426=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $427=_PyDict_SetItemString($425, ((__str234)&4294967295), $426); //@line 1967 "_cursesmodule.c"
        var $428=((($427))|0)==0; //@line 1967 "_cursesmodule.c"
        if ($428) { __label__ = 74; break; } else { __label__ = 76; break; } //@line 1967 "_cursesmodule.c"
      case 74: // $bb90
        var $429=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $430=(($429)&4294967295); //@line 1967 "_cursesmodule.c"
        var $431=HEAP[$430]; //@line 1967 "_cursesmodule.c"
        var $432=((($431) - 1)&4294967295); //@line 1967 "_cursesmodule.c"
        var $433=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $434=(($433)&4294967295); //@line 1967 "_cursesmodule.c"
        HEAP[$434]=$432; //@line 1967 "_cursesmodule.c"
        var $435=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $436=(($435)&4294967295); //@line 1967 "_cursesmodule.c"
        var $437=HEAP[$436]; //@line 1967 "_cursesmodule.c"
        var $438=((($437))|0)==0; //@line 1967 "_cursesmodule.c"
        if ($438) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 1967 "_cursesmodule.c"
      case 75: // $bb91
        var $439=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        var $440=(($439+4)&4294967295); //@line 1967 "_cursesmodule.c"
        var $441=HEAP[$440]; //@line 1967 "_cursesmodule.c"
        var $442=(($441+24)&4294967295); //@line 1967 "_cursesmodule.c"
        var $443=HEAP[$442]; //@line 1967 "_cursesmodule.c"
        var $444=HEAP[$o88]; //@line 1967 "_cursesmodule.c"
        FUNCTION_TABLE[$443]($444); //@line 1967 "_cursesmodule.c"
        __label__ = 76; break; //@line 1967 "_cursesmodule.c"
      case 76: // $bb92
        var $445=HEAP[((_acs_map+176)&4294967295)]; //@line 1968 "_cursesmodule.c"
        var $446=_PyInt_FromLong($445); //@line 1968 "_cursesmodule.c"
        HEAP[$o93]=$446; //@line 1968 "_cursesmodule.c"
        var $447=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $448=($447)!=0; //@line 1968 "_cursesmodule.c"
        if ($448) { __label__ = 77; break; } else { __label__ = 80; break; } //@line 1968 "_cursesmodule.c"
      case 77: // $bb94
        var $449=HEAP[_ModDict]; //@line 1968 "_cursesmodule.c"
        var $450=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $451=_PyDict_SetItemString($449, ((__str235)&4294967295), $450); //@line 1968 "_cursesmodule.c"
        var $452=((($451))|0)==0; //@line 1968 "_cursesmodule.c"
        if ($452) { __label__ = 78; break; } else { __label__ = 80; break; } //@line 1968 "_cursesmodule.c"
      case 78: // $bb95
        var $453=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $454=(($453)&4294967295); //@line 1968 "_cursesmodule.c"
        var $455=HEAP[$454]; //@line 1968 "_cursesmodule.c"
        var $456=((($455) - 1)&4294967295); //@line 1968 "_cursesmodule.c"
        var $457=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $458=(($457)&4294967295); //@line 1968 "_cursesmodule.c"
        HEAP[$458]=$456; //@line 1968 "_cursesmodule.c"
        var $459=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $460=(($459)&4294967295); //@line 1968 "_cursesmodule.c"
        var $461=HEAP[$460]; //@line 1968 "_cursesmodule.c"
        var $462=((($461))|0)==0; //@line 1968 "_cursesmodule.c"
        if ($462) { __label__ = 79; break; } else { __label__ = 80; break; } //@line 1968 "_cursesmodule.c"
      case 79: // $bb96
        var $463=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        var $464=(($463+4)&4294967295); //@line 1968 "_cursesmodule.c"
        var $465=HEAP[$464]; //@line 1968 "_cursesmodule.c"
        var $466=(($465+24)&4294967295); //@line 1968 "_cursesmodule.c"
        var $467=HEAP[$466]; //@line 1968 "_cursesmodule.c"
        var $468=HEAP[$o93]; //@line 1968 "_cursesmodule.c"
        FUNCTION_TABLE[$467]($468); //@line 1968 "_cursesmodule.c"
        __label__ = 80; break; //@line 1968 "_cursesmodule.c"
      case 80: // $bb97
        var $469=HEAP[((_acs_map+172)&4294967295)]; //@line 1969 "_cursesmodule.c"
        var $470=_PyInt_FromLong($469); //@line 1969 "_cursesmodule.c"
        HEAP[$o98]=$470; //@line 1969 "_cursesmodule.c"
        var $471=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $472=($471)!=0; //@line 1969 "_cursesmodule.c"
        if ($472) { __label__ = 81; break; } else { __label__ = 84; break; } //@line 1969 "_cursesmodule.c"
      case 81: // $bb99
        var $473=HEAP[_ModDict]; //@line 1969 "_cursesmodule.c"
        var $474=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $475=_PyDict_SetItemString($473, ((__str236)&4294967295), $474); //@line 1969 "_cursesmodule.c"
        var $476=((($475))|0)==0; //@line 1969 "_cursesmodule.c"
        if ($476) { __label__ = 82; break; } else { __label__ = 84; break; } //@line 1969 "_cursesmodule.c"
      case 82: // $bb100
        var $477=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $478=(($477)&4294967295); //@line 1969 "_cursesmodule.c"
        var $479=HEAP[$478]; //@line 1969 "_cursesmodule.c"
        var $480=((($479) - 1)&4294967295); //@line 1969 "_cursesmodule.c"
        var $481=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $482=(($481)&4294967295); //@line 1969 "_cursesmodule.c"
        HEAP[$482]=$480; //@line 1969 "_cursesmodule.c"
        var $483=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $484=(($483)&4294967295); //@line 1969 "_cursesmodule.c"
        var $485=HEAP[$484]; //@line 1969 "_cursesmodule.c"
        var $486=((($485))|0)==0; //@line 1969 "_cursesmodule.c"
        if ($486) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 1969 "_cursesmodule.c"
      case 83: // $bb101
        var $487=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        var $488=(($487+4)&4294967295); //@line 1969 "_cursesmodule.c"
        var $489=HEAP[$488]; //@line 1969 "_cursesmodule.c"
        var $490=(($489+24)&4294967295); //@line 1969 "_cursesmodule.c"
        var $491=HEAP[$490]; //@line 1969 "_cursesmodule.c"
        var $492=HEAP[$o98]; //@line 1969 "_cursesmodule.c"
        FUNCTION_TABLE[$491]($492); //@line 1969 "_cursesmodule.c"
        __label__ = 84; break; //@line 1969 "_cursesmodule.c"
      case 84: // $bb102
        var $493=HEAP[((_acs_map+184)&4294967295)]; //@line 1970 "_cursesmodule.c"
        var $494=_PyInt_FromLong($493); //@line 1970 "_cursesmodule.c"
        HEAP[$o103]=$494; //@line 1970 "_cursesmodule.c"
        var $495=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $496=($495)!=0; //@line 1970 "_cursesmodule.c"
        if ($496) { __label__ = 85; break; } else { __label__ = 88; break; } //@line 1970 "_cursesmodule.c"
      case 85: // $bb104
        var $497=HEAP[_ModDict]; //@line 1970 "_cursesmodule.c"
        var $498=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $499=_PyDict_SetItemString($497, ((__str237)&4294967295), $498); //@line 1970 "_cursesmodule.c"
        var $500=((($499))|0)==0; //@line 1970 "_cursesmodule.c"
        if ($500) { __label__ = 86; break; } else { __label__ = 88; break; } //@line 1970 "_cursesmodule.c"
      case 86: // $bb105
        var $501=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $502=(($501)&4294967295); //@line 1970 "_cursesmodule.c"
        var $503=HEAP[$502]; //@line 1970 "_cursesmodule.c"
        var $504=((($503) - 1)&4294967295); //@line 1970 "_cursesmodule.c"
        var $505=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $506=(($505)&4294967295); //@line 1970 "_cursesmodule.c"
        HEAP[$506]=$504; //@line 1970 "_cursesmodule.c"
        var $507=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $508=(($507)&4294967295); //@line 1970 "_cursesmodule.c"
        var $509=HEAP[$508]; //@line 1970 "_cursesmodule.c"
        var $510=((($509))|0)==0; //@line 1970 "_cursesmodule.c"
        if ($510) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 1970 "_cursesmodule.c"
      case 87: // $bb106
        var $511=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        var $512=(($511+4)&4294967295); //@line 1970 "_cursesmodule.c"
        var $513=HEAP[$512]; //@line 1970 "_cursesmodule.c"
        var $514=(($513+24)&4294967295); //@line 1970 "_cursesmodule.c"
        var $515=HEAP[$514]; //@line 1970 "_cursesmodule.c"
        var $516=HEAP[$o103]; //@line 1970 "_cursesmodule.c"
        FUNCTION_TABLE[$515]($516); //@line 1970 "_cursesmodule.c"
        __label__ = 88; break; //@line 1970 "_cursesmodule.c"
      case 88: // $bb107
        var $517=HEAP[((_acs_map+180)&4294967295)]; //@line 1971 "_cursesmodule.c"
        var $518=_PyInt_FromLong($517); //@line 1971 "_cursesmodule.c"
        HEAP[$o108]=$518; //@line 1971 "_cursesmodule.c"
        var $519=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $520=($519)!=0; //@line 1971 "_cursesmodule.c"
        if ($520) { __label__ = 89; break; } else { __label__ = 92; break; } //@line 1971 "_cursesmodule.c"
      case 89: // $bb109
        var $521=HEAP[_ModDict]; //@line 1971 "_cursesmodule.c"
        var $522=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $523=_PyDict_SetItemString($521, ((__str238)&4294967295), $522); //@line 1971 "_cursesmodule.c"
        var $524=((($523))|0)==0; //@line 1971 "_cursesmodule.c"
        if ($524) { __label__ = 90; break; } else { __label__ = 92; break; } //@line 1971 "_cursesmodule.c"
      case 90: // $bb110
        var $525=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $526=(($525)&4294967295); //@line 1971 "_cursesmodule.c"
        var $527=HEAP[$526]; //@line 1971 "_cursesmodule.c"
        var $528=((($527) - 1)&4294967295); //@line 1971 "_cursesmodule.c"
        var $529=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $530=(($529)&4294967295); //@line 1971 "_cursesmodule.c"
        HEAP[$530]=$528; //@line 1971 "_cursesmodule.c"
        var $531=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $532=(($531)&4294967295); //@line 1971 "_cursesmodule.c"
        var $533=HEAP[$532]; //@line 1971 "_cursesmodule.c"
        var $534=((($533))|0)==0; //@line 1971 "_cursesmodule.c"
        if ($534) { __label__ = 91; break; } else { __label__ = 92; break; } //@line 1971 "_cursesmodule.c"
      case 91: // $bb111
        var $535=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        var $536=(($535+4)&4294967295); //@line 1971 "_cursesmodule.c"
        var $537=HEAP[$536]; //@line 1971 "_cursesmodule.c"
        var $538=(($537+24)&4294967295); //@line 1971 "_cursesmodule.c"
        var $539=HEAP[$538]; //@line 1971 "_cursesmodule.c"
        var $540=HEAP[$o108]; //@line 1971 "_cursesmodule.c"
        FUNCTION_TABLE[$539]($540); //@line 1971 "_cursesmodule.c"
        __label__ = 92; break; //@line 1971 "_cursesmodule.c"
      case 92: // $bb112
        var $541=HEAP[((_acs_map+416)&4294967295)]; //@line 1972 "_cursesmodule.c"
        var $542=_PyInt_FromLong($541); //@line 1972 "_cursesmodule.c"
        HEAP[$o113]=$542; //@line 1972 "_cursesmodule.c"
        var $543=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $544=($543)!=0; //@line 1972 "_cursesmodule.c"
        if ($544) { __label__ = 93; break; } else { __label__ = 96; break; } //@line 1972 "_cursesmodule.c"
      case 93: // $bb114
        var $545=HEAP[_ModDict]; //@line 1972 "_cursesmodule.c"
        var $546=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $547=_PyDict_SetItemString($545, ((__str239)&4294967295), $546); //@line 1972 "_cursesmodule.c"
        var $548=((($547))|0)==0; //@line 1972 "_cursesmodule.c"
        if ($548) { __label__ = 94; break; } else { __label__ = 96; break; } //@line 1972 "_cursesmodule.c"
      case 94: // $bb115
        var $549=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $550=(($549)&4294967295); //@line 1972 "_cursesmodule.c"
        var $551=HEAP[$550]; //@line 1972 "_cursesmodule.c"
        var $552=((($551) - 1)&4294967295); //@line 1972 "_cursesmodule.c"
        var $553=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $554=(($553)&4294967295); //@line 1972 "_cursesmodule.c"
        HEAP[$554]=$552; //@line 1972 "_cursesmodule.c"
        var $555=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $556=(($555)&4294967295); //@line 1972 "_cursesmodule.c"
        var $557=HEAP[$556]; //@line 1972 "_cursesmodule.c"
        var $558=((($557))|0)==0; //@line 1972 "_cursesmodule.c"
        if ($558) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 1972 "_cursesmodule.c"
      case 95: // $bb116
        var $559=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        var $560=(($559+4)&4294967295); //@line 1972 "_cursesmodule.c"
        var $561=HEAP[$560]; //@line 1972 "_cursesmodule.c"
        var $562=(($561+24)&4294967295); //@line 1972 "_cursesmodule.c"
        var $563=HEAP[$562]; //@line 1972 "_cursesmodule.c"
        var $564=HEAP[$o113]; //@line 1972 "_cursesmodule.c"
        FUNCTION_TABLE[$563]($564); //@line 1972 "_cursesmodule.c"
        __label__ = 96; break; //@line 1972 "_cursesmodule.c"
      case 96: // $bb117
        var $565=HEAP[((_acs_map+420)&4294967295)]; //@line 1973 "_cursesmodule.c"
        var $566=_PyInt_FromLong($565); //@line 1973 "_cursesmodule.c"
        HEAP[$o118]=$566; //@line 1973 "_cursesmodule.c"
        var $567=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $568=($567)!=0; //@line 1973 "_cursesmodule.c"
        if ($568) { __label__ = 97; break; } else { __label__ = 100; break; } //@line 1973 "_cursesmodule.c"
      case 97: // $bb119
        var $569=HEAP[_ModDict]; //@line 1973 "_cursesmodule.c"
        var $570=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $571=_PyDict_SetItemString($569, ((__str240)&4294967295), $570); //@line 1973 "_cursesmodule.c"
        var $572=((($571))|0)==0; //@line 1973 "_cursesmodule.c"
        if ($572) { __label__ = 98; break; } else { __label__ = 100; break; } //@line 1973 "_cursesmodule.c"
      case 98: // $bb120
        var $573=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $574=(($573)&4294967295); //@line 1973 "_cursesmodule.c"
        var $575=HEAP[$574]; //@line 1973 "_cursesmodule.c"
        var $576=((($575) - 1)&4294967295); //@line 1973 "_cursesmodule.c"
        var $577=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $578=(($577)&4294967295); //@line 1973 "_cursesmodule.c"
        HEAP[$578]=$576; //@line 1973 "_cursesmodule.c"
        var $579=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $580=(($579)&4294967295); //@line 1973 "_cursesmodule.c"
        var $581=HEAP[$580]; //@line 1973 "_cursesmodule.c"
        var $582=((($581))|0)==0; //@line 1973 "_cursesmodule.c"
        if ($582) { __label__ = 99; break; } else { __label__ = 100; break; } //@line 1973 "_cursesmodule.c"
      case 99: // $bb121
        var $583=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        var $584=(($583+4)&4294967295); //@line 1973 "_cursesmodule.c"
        var $585=HEAP[$584]; //@line 1973 "_cursesmodule.c"
        var $586=(($585+24)&4294967295); //@line 1973 "_cursesmodule.c"
        var $587=HEAP[$586]; //@line 1973 "_cursesmodule.c"
        var $588=HEAP[$o118]; //@line 1973 "_cursesmodule.c"
        FUNCTION_TABLE[$587]($588); //@line 1973 "_cursesmodule.c"
        __label__ = 100; break; //@line 1973 "_cursesmodule.c"
      case 100: // $bb122
        var $589=HEAP[((_acs_map+192)&4294967295)]; //@line 1974 "_cursesmodule.c"
        var $590=_PyInt_FromLong($589); //@line 1974 "_cursesmodule.c"
        HEAP[$o123]=$590; //@line 1974 "_cursesmodule.c"
        var $591=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $592=($591)!=0; //@line 1974 "_cursesmodule.c"
        if ($592) { __label__ = 101; break; } else { __label__ = 104; break; } //@line 1974 "_cursesmodule.c"
      case 101: // $bb124
        var $593=HEAP[_ModDict]; //@line 1974 "_cursesmodule.c"
        var $594=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $595=_PyDict_SetItemString($593, ((__str241)&4294967295), $594); //@line 1974 "_cursesmodule.c"
        var $596=((($595))|0)==0; //@line 1974 "_cursesmodule.c"
        if ($596) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 1974 "_cursesmodule.c"
      case 102: // $bb125
        var $597=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $598=(($597)&4294967295); //@line 1974 "_cursesmodule.c"
        var $599=HEAP[$598]; //@line 1974 "_cursesmodule.c"
        var $600=((($599) - 1)&4294967295); //@line 1974 "_cursesmodule.c"
        var $601=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $602=(($601)&4294967295); //@line 1974 "_cursesmodule.c"
        HEAP[$602]=$600; //@line 1974 "_cursesmodule.c"
        var $603=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $604=(($603)&4294967295); //@line 1974 "_cursesmodule.c"
        var $605=HEAP[$604]; //@line 1974 "_cursesmodule.c"
        var $606=((($605))|0)==0; //@line 1974 "_cursesmodule.c"
        if ($606) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 1974 "_cursesmodule.c"
      case 103: // $bb126
        var $607=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        var $608=(($607+4)&4294967295); //@line 1974 "_cursesmodule.c"
        var $609=HEAP[$608]; //@line 1974 "_cursesmodule.c"
        var $610=(($609+24)&4294967295); //@line 1974 "_cursesmodule.c"
        var $611=HEAP[$610]; //@line 1974 "_cursesmodule.c"
        var $612=HEAP[$o123]; //@line 1974 "_cursesmodule.c"
        FUNCTION_TABLE[$611]($612); //@line 1974 "_cursesmodule.c"
        __label__ = 104; break; //@line 1974 "_cursesmodule.c"
      case 104: // $bb127
        var $613=HEAP[((_acs_map+432)&4294967295)]; //@line 1976 "_cursesmodule.c"
        var $614=_PyInt_FromLong($613); //@line 1976 "_cursesmodule.c"
        HEAP[$o128]=$614; //@line 1976 "_cursesmodule.c"
        var $615=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $616=($615)!=0; //@line 1976 "_cursesmodule.c"
        if ($616) { __label__ = 105; break; } else { __label__ = 108; break; } //@line 1976 "_cursesmodule.c"
      case 105: // $bb129
        var $617=HEAP[_ModDict]; //@line 1976 "_cursesmodule.c"
        var $618=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $619=_PyDict_SetItemString($617, ((__str242)&4294967295), $618); //@line 1976 "_cursesmodule.c"
        var $620=((($619))|0)==0; //@line 1976 "_cursesmodule.c"
        if ($620) { __label__ = 106; break; } else { __label__ = 108; break; } //@line 1976 "_cursesmodule.c"
      case 106: // $bb130
        var $621=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $622=(($621)&4294967295); //@line 1976 "_cursesmodule.c"
        var $623=HEAP[$622]; //@line 1976 "_cursesmodule.c"
        var $624=((($623) - 1)&4294967295); //@line 1976 "_cursesmodule.c"
        var $625=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $626=(($625)&4294967295); //@line 1976 "_cursesmodule.c"
        HEAP[$626]=$624; //@line 1976 "_cursesmodule.c"
        var $627=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $628=(($627)&4294967295); //@line 1976 "_cursesmodule.c"
        var $629=HEAP[$628]; //@line 1976 "_cursesmodule.c"
        var $630=((($629))|0)==0; //@line 1976 "_cursesmodule.c"
        if ($630) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 1976 "_cursesmodule.c"
      case 107: // $bb131
        var $631=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        var $632=(($631+4)&4294967295); //@line 1976 "_cursesmodule.c"
        var $633=HEAP[$632]; //@line 1976 "_cursesmodule.c"
        var $634=(($633+24)&4294967295); //@line 1976 "_cursesmodule.c"
        var $635=HEAP[$634]; //@line 1976 "_cursesmodule.c"
        var $636=HEAP[$o128]; //@line 1976 "_cursesmodule.c"
        FUNCTION_TABLE[$635]($636); //@line 1976 "_cursesmodule.c"
        __label__ = 108; break; //@line 1976 "_cursesmodule.c"
      case 108: // $bb132
        var $637=HEAP[((_acs_map+436)&4294967295)]; //@line 1977 "_cursesmodule.c"
        var $638=_PyInt_FromLong($637); //@line 1977 "_cursesmodule.c"
        HEAP[$o133]=$638; //@line 1977 "_cursesmodule.c"
        var $639=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $640=($639)!=0; //@line 1977 "_cursesmodule.c"
        if ($640) { __label__ = 109; break; } else { __label__ = 112; break; } //@line 1977 "_cursesmodule.c"
      case 109: // $bb134
        var $641=HEAP[_ModDict]; //@line 1977 "_cursesmodule.c"
        var $642=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $643=_PyDict_SetItemString($641, ((__str243)&4294967295), $642); //@line 1977 "_cursesmodule.c"
        var $644=((($643))|0)==0; //@line 1977 "_cursesmodule.c"
        if ($644) { __label__ = 110; break; } else { __label__ = 112; break; } //@line 1977 "_cursesmodule.c"
      case 110: // $bb135
        var $645=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $646=(($645)&4294967295); //@line 1977 "_cursesmodule.c"
        var $647=HEAP[$646]; //@line 1977 "_cursesmodule.c"
        var $648=((($647) - 1)&4294967295); //@line 1977 "_cursesmodule.c"
        var $649=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $650=(($649)&4294967295); //@line 1977 "_cursesmodule.c"
        HEAP[$650]=$648; //@line 1977 "_cursesmodule.c"
        var $651=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $652=(($651)&4294967295); //@line 1977 "_cursesmodule.c"
        var $653=HEAP[$652]; //@line 1977 "_cursesmodule.c"
        var $654=((($653))|0)==0; //@line 1977 "_cursesmodule.c"
        if ($654) { __label__ = 111; break; } else { __label__ = 112; break; } //@line 1977 "_cursesmodule.c"
      case 111: // $bb136
        var $655=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        var $656=(($655+4)&4294967295); //@line 1977 "_cursesmodule.c"
        var $657=HEAP[$656]; //@line 1977 "_cursesmodule.c"
        var $658=(($657+24)&4294967295); //@line 1977 "_cursesmodule.c"
        var $659=HEAP[$658]; //@line 1977 "_cursesmodule.c"
        var $660=HEAP[$o133]; //@line 1977 "_cursesmodule.c"
        FUNCTION_TABLE[$659]($660); //@line 1977 "_cursesmodule.c"
        __label__ = 112; break; //@line 1977 "_cursesmodule.c"
      case 112: // $bb137
        var $661=HEAP[((_acs_map+428)&4294967295)]; //@line 1978 "_cursesmodule.c"
        var $662=_PyInt_FromLong($661); //@line 1978 "_cursesmodule.c"
        HEAP[$o138]=$662; //@line 1978 "_cursesmodule.c"
        var $663=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $664=($663)!=0; //@line 1978 "_cursesmodule.c"
        if ($664) { __label__ = 113; break; } else { __label__ = 116; break; } //@line 1978 "_cursesmodule.c"
      case 113: // $bb139
        var $665=HEAP[_ModDict]; //@line 1978 "_cursesmodule.c"
        var $666=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $667=_PyDict_SetItemString($665, ((__str244)&4294967295), $666); //@line 1978 "_cursesmodule.c"
        var $668=((($667))|0)==0; //@line 1978 "_cursesmodule.c"
        if ($668) { __label__ = 114; break; } else { __label__ = 116; break; } //@line 1978 "_cursesmodule.c"
      case 114: // $bb140
        var $669=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $670=(($669)&4294967295); //@line 1978 "_cursesmodule.c"
        var $671=HEAP[$670]; //@line 1978 "_cursesmodule.c"
        var $672=((($671) - 1)&4294967295); //@line 1978 "_cursesmodule.c"
        var $673=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $674=(($673)&4294967295); //@line 1978 "_cursesmodule.c"
        HEAP[$674]=$672; //@line 1978 "_cursesmodule.c"
        var $675=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $676=(($675)&4294967295); //@line 1978 "_cursesmodule.c"
        var $677=HEAP[$676]; //@line 1978 "_cursesmodule.c"
        var $678=((($677))|0)==0; //@line 1978 "_cursesmodule.c"
        if ($678) { __label__ = 115; break; } else { __label__ = 116; break; } //@line 1978 "_cursesmodule.c"
      case 115: // $bb141
        var $679=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        var $680=(($679+4)&4294967295); //@line 1978 "_cursesmodule.c"
        var $681=HEAP[$680]; //@line 1978 "_cursesmodule.c"
        var $682=(($681+24)&4294967295); //@line 1978 "_cursesmodule.c"
        var $683=HEAP[$682]; //@line 1978 "_cursesmodule.c"
        var $684=HEAP[$o138]; //@line 1978 "_cursesmodule.c"
        FUNCTION_TABLE[$683]($684); //@line 1978 "_cursesmodule.c"
        __label__ = 116; break; //@line 1978 "_cursesmodule.c"
      case 116: // $bb142
        var $685=HEAP[((_acs_map+424)&4294967295)]; //@line 1979 "_cursesmodule.c"
        var $686=_PyInt_FromLong($685); //@line 1979 "_cursesmodule.c"
        HEAP[$o143]=$686; //@line 1979 "_cursesmodule.c"
        var $687=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $688=($687)!=0; //@line 1979 "_cursesmodule.c"
        if ($688) { __label__ = 117; break; } else { __label__ = 120; break; } //@line 1979 "_cursesmodule.c"
      case 117: // $bb144
        var $689=HEAP[_ModDict]; //@line 1979 "_cursesmodule.c"
        var $690=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $691=_PyDict_SetItemString($689, ((__str245)&4294967295), $690); //@line 1979 "_cursesmodule.c"
        var $692=((($691))|0)==0; //@line 1979 "_cursesmodule.c"
        if ($692) { __label__ = 118; break; } else { __label__ = 120; break; } //@line 1979 "_cursesmodule.c"
      case 118: // $bb145
        var $693=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $694=(($693)&4294967295); //@line 1979 "_cursesmodule.c"
        var $695=HEAP[$694]; //@line 1979 "_cursesmodule.c"
        var $696=((($695) - 1)&4294967295); //@line 1979 "_cursesmodule.c"
        var $697=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $698=(($697)&4294967295); //@line 1979 "_cursesmodule.c"
        HEAP[$698]=$696; //@line 1979 "_cursesmodule.c"
        var $699=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $700=(($699)&4294967295); //@line 1979 "_cursesmodule.c"
        var $701=HEAP[$700]; //@line 1979 "_cursesmodule.c"
        var $702=((($701))|0)==0; //@line 1979 "_cursesmodule.c"
        if ($702) { __label__ = 119; break; } else { __label__ = 120; break; } //@line 1979 "_cursesmodule.c"
      case 119: // $bb146
        var $703=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        var $704=(($703+4)&4294967295); //@line 1979 "_cursesmodule.c"
        var $705=HEAP[$704]; //@line 1979 "_cursesmodule.c"
        var $706=(($705+24)&4294967295); //@line 1979 "_cursesmodule.c"
        var $707=HEAP[$706]; //@line 1979 "_cursesmodule.c"
        var $708=HEAP[$o143]; //@line 1979 "_cursesmodule.c"
        FUNCTION_TABLE[$707]($708); //@line 1979 "_cursesmodule.c"
        __label__ = 120; break; //@line 1979 "_cursesmodule.c"
      case 120: // $bb147
        var $709=HEAP[((_acs_map+468)&4294967295)]; //@line 1980 "_cursesmodule.c"
        var $710=_PyInt_FromLong($709); //@line 1980 "_cursesmodule.c"
        HEAP[$o148]=$710; //@line 1980 "_cursesmodule.c"
        var $711=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $712=($711)!=0; //@line 1980 "_cursesmodule.c"
        if ($712) { __label__ = 121; break; } else { __label__ = 124; break; } //@line 1980 "_cursesmodule.c"
      case 121: // $bb149
        var $713=HEAP[_ModDict]; //@line 1980 "_cursesmodule.c"
        var $714=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $715=_PyDict_SetItemString($713, ((__str246)&4294967295), $714); //@line 1980 "_cursesmodule.c"
        var $716=((($715))|0)==0; //@line 1980 "_cursesmodule.c"
        if ($716) { __label__ = 122; break; } else { __label__ = 124; break; } //@line 1980 "_cursesmodule.c"
      case 122: // $bb150
        var $717=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $718=(($717)&4294967295); //@line 1980 "_cursesmodule.c"
        var $719=HEAP[$718]; //@line 1980 "_cursesmodule.c"
        var $720=((($719) - 1)&4294967295); //@line 1980 "_cursesmodule.c"
        var $721=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $722=(($721)&4294967295); //@line 1980 "_cursesmodule.c"
        HEAP[$722]=$720; //@line 1980 "_cursesmodule.c"
        var $723=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $724=(($723)&4294967295); //@line 1980 "_cursesmodule.c"
        var $725=HEAP[$724]; //@line 1980 "_cursesmodule.c"
        var $726=((($725))|0)==0; //@line 1980 "_cursesmodule.c"
        if ($726) { __label__ = 123; break; } else { __label__ = 124; break; } //@line 1980 "_cursesmodule.c"
      case 123: // $bb151
        var $727=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        var $728=(($727+4)&4294967295); //@line 1980 "_cursesmodule.c"
        var $729=HEAP[$728]; //@line 1980 "_cursesmodule.c"
        var $730=(($729+24)&4294967295); //@line 1980 "_cursesmodule.c"
        var $731=HEAP[$730]; //@line 1980 "_cursesmodule.c"
        var $732=HEAP[$o148]; //@line 1980 "_cursesmodule.c"
        FUNCTION_TABLE[$731]($732); //@line 1980 "_cursesmodule.c"
        __label__ = 124; break; //@line 1980 "_cursesmodule.c"
      case 124: // $bb152
        var $733=HEAP[((_acs_map+464)&4294967295)]; //@line 1981 "_cursesmodule.c"
        var $734=_PyInt_FromLong($733); //@line 1981 "_cursesmodule.c"
        HEAP[$o153]=$734; //@line 1981 "_cursesmodule.c"
        var $735=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $736=($735)!=0; //@line 1981 "_cursesmodule.c"
        if ($736) { __label__ = 125; break; } else { __label__ = 128; break; } //@line 1981 "_cursesmodule.c"
      case 125: // $bb154
        var $737=HEAP[_ModDict]; //@line 1981 "_cursesmodule.c"
        var $738=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $739=_PyDict_SetItemString($737, ((__str247)&4294967295), $738); //@line 1981 "_cursesmodule.c"
        var $740=((($739))|0)==0; //@line 1981 "_cursesmodule.c"
        if ($740) { __label__ = 126; break; } else { __label__ = 128; break; } //@line 1981 "_cursesmodule.c"
      case 126: // $bb155
        var $741=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $742=(($741)&4294967295); //@line 1981 "_cursesmodule.c"
        var $743=HEAP[$742]; //@line 1981 "_cursesmodule.c"
        var $744=((($743) - 1)&4294967295); //@line 1981 "_cursesmodule.c"
        var $745=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $746=(($745)&4294967295); //@line 1981 "_cursesmodule.c"
        HEAP[$746]=$744; //@line 1981 "_cursesmodule.c"
        var $747=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $748=(($747)&4294967295); //@line 1981 "_cursesmodule.c"
        var $749=HEAP[$748]; //@line 1981 "_cursesmodule.c"
        var $750=((($749))|0)==0; //@line 1981 "_cursesmodule.c"
        if ($750) { __label__ = 127; break; } else { __label__ = 128; break; } //@line 1981 "_cursesmodule.c"
      case 127: // $bb156
        var $751=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        var $752=(($751+4)&4294967295); //@line 1981 "_cursesmodule.c"
        var $753=HEAP[$752]; //@line 1981 "_cursesmodule.c"
        var $754=(($753+24)&4294967295); //@line 1981 "_cursesmodule.c"
        var $755=HEAP[$754]; //@line 1981 "_cursesmodule.c"
        var $756=HEAP[$o153]; //@line 1981 "_cursesmodule.c"
        FUNCTION_TABLE[$755]($756); //@line 1981 "_cursesmodule.c"
        __label__ = 128; break; //@line 1981 "_cursesmodule.c"
      case 128: // $bb157
        var $757=HEAP[((_acs_map+472)&4294967295)]; //@line 1982 "_cursesmodule.c"
        var $758=_PyInt_FromLong($757); //@line 1982 "_cursesmodule.c"
        HEAP[$o158]=$758; //@line 1982 "_cursesmodule.c"
        var $759=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $760=($759)!=0; //@line 1982 "_cursesmodule.c"
        if ($760) { __label__ = 129; break; } else { __label__ = 132; break; } //@line 1982 "_cursesmodule.c"
      case 129: // $bb159
        var $761=HEAP[_ModDict]; //@line 1982 "_cursesmodule.c"
        var $762=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $763=_PyDict_SetItemString($761, ((__str248)&4294967295), $762); //@line 1982 "_cursesmodule.c"
        var $764=((($763))|0)==0; //@line 1982 "_cursesmodule.c"
        if ($764) { __label__ = 130; break; } else { __label__ = 132; break; } //@line 1982 "_cursesmodule.c"
      case 130: // $bb160
        var $765=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $766=(($765)&4294967295); //@line 1982 "_cursesmodule.c"
        var $767=HEAP[$766]; //@line 1982 "_cursesmodule.c"
        var $768=((($767) - 1)&4294967295); //@line 1982 "_cursesmodule.c"
        var $769=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $770=(($769)&4294967295); //@line 1982 "_cursesmodule.c"
        HEAP[$770]=$768; //@line 1982 "_cursesmodule.c"
        var $771=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $772=(($771)&4294967295); //@line 1982 "_cursesmodule.c"
        var $773=HEAP[$772]; //@line 1982 "_cursesmodule.c"
        var $774=((($773))|0)==0; //@line 1982 "_cursesmodule.c"
        if ($774) { __label__ = 131; break; } else { __label__ = 132; break; } //@line 1982 "_cursesmodule.c"
      case 131: // $bb161
        var $775=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        var $776=(($775+4)&4294967295); //@line 1982 "_cursesmodule.c"
        var $777=HEAP[$776]; //@line 1982 "_cursesmodule.c"
        var $778=(($777+24)&4294967295); //@line 1982 "_cursesmodule.c"
        var $779=HEAP[$778]; //@line 1982 "_cursesmodule.c"
        var $780=HEAP[$o158]; //@line 1982 "_cursesmodule.c"
        FUNCTION_TABLE[$779]($780); //@line 1982 "_cursesmodule.c"
        __label__ = 132; break; //@line 1982 "_cursesmodule.c"
      case 132: // $bb162
        var $781=HEAP[((_acs_map+476)&4294967295)]; //@line 1983 "_cursesmodule.c"
        var $782=_PyInt_FromLong($781); //@line 1983 "_cursesmodule.c"
        HEAP[$o163]=$782; //@line 1983 "_cursesmodule.c"
        var $783=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $784=($783)!=0; //@line 1983 "_cursesmodule.c"
        if ($784) { __label__ = 133; break; } else { __label__ = 136; break; } //@line 1983 "_cursesmodule.c"
      case 133: // $bb164
        var $785=HEAP[_ModDict]; //@line 1983 "_cursesmodule.c"
        var $786=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $787=_PyDict_SetItemString($785, ((__str249)&4294967295), $786); //@line 1983 "_cursesmodule.c"
        var $788=((($787))|0)==0; //@line 1983 "_cursesmodule.c"
        if ($788) { __label__ = 134; break; } else { __label__ = 136; break; } //@line 1983 "_cursesmodule.c"
      case 134: // $bb165
        var $789=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $790=(($789)&4294967295); //@line 1983 "_cursesmodule.c"
        var $791=HEAP[$790]; //@line 1983 "_cursesmodule.c"
        var $792=((($791) - 1)&4294967295); //@line 1983 "_cursesmodule.c"
        var $793=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $794=(($793)&4294967295); //@line 1983 "_cursesmodule.c"
        HEAP[$794]=$792; //@line 1983 "_cursesmodule.c"
        var $795=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $796=(($795)&4294967295); //@line 1983 "_cursesmodule.c"
        var $797=HEAP[$796]; //@line 1983 "_cursesmodule.c"
        var $798=((($797))|0)==0; //@line 1983 "_cursesmodule.c"
        if ($798) { __label__ = 135; break; } else { __label__ = 136; break; } //@line 1983 "_cursesmodule.c"
      case 135: // $bb166
        var $799=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        var $800=(($799+4)&4294967295); //@line 1983 "_cursesmodule.c"
        var $801=HEAP[$800]; //@line 1983 "_cursesmodule.c"
        var $802=(($801+24)&4294967295); //@line 1983 "_cursesmodule.c"
        var $803=HEAP[$802]; //@line 1983 "_cursesmodule.c"
        var $804=HEAP[$o163]; //@line 1983 "_cursesmodule.c"
        FUNCTION_TABLE[$803]($804); //@line 1983 "_cursesmodule.c"
        __label__ = 136; break; //@line 1983 "_cursesmodule.c"
      case 136: // $bb167
        var $805=HEAP[((_acs_map+452)&4294967295)]; //@line 1984 "_cursesmodule.c"
        var $806=_PyInt_FromLong($805); //@line 1984 "_cursesmodule.c"
        HEAP[$o168]=$806; //@line 1984 "_cursesmodule.c"
        var $807=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $808=($807)!=0; //@line 1984 "_cursesmodule.c"
        if ($808) { __label__ = 137; break; } else { __label__ = 140; break; } //@line 1984 "_cursesmodule.c"
      case 137: // $bb169
        var $809=HEAP[_ModDict]; //@line 1984 "_cursesmodule.c"
        var $810=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $811=_PyDict_SetItemString($809, ((__str250)&4294967295), $810); //@line 1984 "_cursesmodule.c"
        var $812=((($811))|0)==0; //@line 1984 "_cursesmodule.c"
        if ($812) { __label__ = 138; break; } else { __label__ = 140; break; } //@line 1984 "_cursesmodule.c"
      case 138: // $bb170
        var $813=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $814=(($813)&4294967295); //@line 1984 "_cursesmodule.c"
        var $815=HEAP[$814]; //@line 1984 "_cursesmodule.c"
        var $816=((($815) - 1)&4294967295); //@line 1984 "_cursesmodule.c"
        var $817=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $818=(($817)&4294967295); //@line 1984 "_cursesmodule.c"
        HEAP[$818]=$816; //@line 1984 "_cursesmodule.c"
        var $819=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $820=(($819)&4294967295); //@line 1984 "_cursesmodule.c"
        var $821=HEAP[$820]; //@line 1984 "_cursesmodule.c"
        var $822=((($821))|0)==0; //@line 1984 "_cursesmodule.c"
        if ($822) { __label__ = 139; break; } else { __label__ = 140; break; } //@line 1984 "_cursesmodule.c"
      case 139: // $bb171
        var $823=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        var $824=(($823+4)&4294967295); //@line 1984 "_cursesmodule.c"
        var $825=HEAP[$824]; //@line 1984 "_cursesmodule.c"
        var $826=(($825+24)&4294967295); //@line 1984 "_cursesmodule.c"
        var $827=HEAP[$826]; //@line 1984 "_cursesmodule.c"
        var $828=HEAP[$o168]; //@line 1984 "_cursesmodule.c"
        FUNCTION_TABLE[$827]($828); //@line 1984 "_cursesmodule.c"
        __label__ = 140; break; //@line 1984 "_cursesmodule.c"
      case 140: // $bb172
        var $829=HEAP[((_acs_map+480)&4294967295)]; //@line 1985 "_cursesmodule.c"
        var $830=_PyInt_FromLong($829); //@line 1985 "_cursesmodule.c"
        HEAP[$o173]=$830; //@line 1985 "_cursesmodule.c"
        var $831=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $832=($831)!=0; //@line 1985 "_cursesmodule.c"
        if ($832) { __label__ = 141; break; } else { __label__ = 144; break; } //@line 1985 "_cursesmodule.c"
      case 141: // $bb174
        var $833=HEAP[_ModDict]; //@line 1985 "_cursesmodule.c"
        var $834=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $835=_PyDict_SetItemString($833, ((__str251)&4294967295), $834); //@line 1985 "_cursesmodule.c"
        var $836=((($835))|0)==0; //@line 1985 "_cursesmodule.c"
        if ($836) { __label__ = 142; break; } else { __label__ = 144; break; } //@line 1985 "_cursesmodule.c"
      case 142: // $bb175
        var $837=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $838=(($837)&4294967295); //@line 1985 "_cursesmodule.c"
        var $839=HEAP[$838]; //@line 1985 "_cursesmodule.c"
        var $840=((($839) - 1)&4294967295); //@line 1985 "_cursesmodule.c"
        var $841=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $842=(($841)&4294967295); //@line 1985 "_cursesmodule.c"
        HEAP[$842]=$840; //@line 1985 "_cursesmodule.c"
        var $843=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $844=(($843)&4294967295); //@line 1985 "_cursesmodule.c"
        var $845=HEAP[$844]; //@line 1985 "_cursesmodule.c"
        var $846=((($845))|0)==0; //@line 1985 "_cursesmodule.c"
        if ($846) { __label__ = 143; break; } else { __label__ = 144; break; } //@line 1985 "_cursesmodule.c"
      case 143: // $bb176
        var $847=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        var $848=(($847+4)&4294967295); //@line 1985 "_cursesmodule.c"
        var $849=HEAP[$848]; //@line 1985 "_cursesmodule.c"
        var $850=(($849+24)&4294967295); //@line 1985 "_cursesmodule.c"
        var $851=HEAP[$850]; //@line 1985 "_cursesmodule.c"
        var $852=HEAP[$o173]; //@line 1985 "_cursesmodule.c"
        FUNCTION_TABLE[$851]($852); //@line 1985 "_cursesmodule.c"
        __label__ = 144; break; //@line 1985 "_cursesmodule.c"
      case 144: // $bb177
        var $853=HEAP[((_acs_map+440)&4294967295)]; //@line 1986 "_cursesmodule.c"
        var $854=_PyInt_FromLong($853); //@line 1986 "_cursesmodule.c"
        HEAP[$o178]=$854; //@line 1986 "_cursesmodule.c"
        var $855=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $856=($855)!=0; //@line 1986 "_cursesmodule.c"
        if ($856) { __label__ = 145; break; } else { __label__ = 148; break; } //@line 1986 "_cursesmodule.c"
      case 145: // $bb179
        var $857=HEAP[_ModDict]; //@line 1986 "_cursesmodule.c"
        var $858=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $859=_PyDict_SetItemString($857, ((__str252)&4294967295), $858); //@line 1986 "_cursesmodule.c"
        var $860=((($859))|0)==0; //@line 1986 "_cursesmodule.c"
        if ($860) { __label__ = 146; break; } else { __label__ = 148; break; } //@line 1986 "_cursesmodule.c"
      case 146: // $bb180
        var $861=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $862=(($861)&4294967295); //@line 1986 "_cursesmodule.c"
        var $863=HEAP[$862]; //@line 1986 "_cursesmodule.c"
        var $864=((($863) - 1)&4294967295); //@line 1986 "_cursesmodule.c"
        var $865=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $866=(($865)&4294967295); //@line 1986 "_cursesmodule.c"
        HEAP[$866]=$864; //@line 1986 "_cursesmodule.c"
        var $867=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $868=(($867)&4294967295); //@line 1986 "_cursesmodule.c"
        var $869=HEAP[$868]; //@line 1986 "_cursesmodule.c"
        var $870=((($869))|0)==0; //@line 1986 "_cursesmodule.c"
        if ($870) { __label__ = 147; break; } else { __label__ = 148; break; } //@line 1986 "_cursesmodule.c"
      case 147: // $bb181
        var $871=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        var $872=(($871+4)&4294967295); //@line 1986 "_cursesmodule.c"
        var $873=HEAP[$872]; //@line 1986 "_cursesmodule.c"
        var $874=(($873+24)&4294967295); //@line 1986 "_cursesmodule.c"
        var $875=HEAP[$874]; //@line 1986 "_cursesmodule.c"
        var $876=HEAP[$o178]; //@line 1986 "_cursesmodule.c"
        FUNCTION_TABLE[$875]($876); //@line 1986 "_cursesmodule.c"
        __label__ = 148; break; //@line 1986 "_cursesmodule.c"
      case 148: // $bb182
        var $877=HEAP[((_acs_map+448)&4294967295)]; //@line 1990 "_cursesmodule.c"
        var $878=_PyInt_FromLong($877); //@line 1990 "_cursesmodule.c"
        HEAP[$o183]=$878; //@line 1990 "_cursesmodule.c"
        var $879=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $880=($879)!=0; //@line 1990 "_cursesmodule.c"
        if ($880) { __label__ = 149; break; } else { __label__ = 152; break; } //@line 1990 "_cursesmodule.c"
      case 149: // $bb184
        var $881=HEAP[_ModDict]; //@line 1990 "_cursesmodule.c"
        var $882=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $883=_PyDict_SetItemString($881, ((__str253)&4294967295), $882); //@line 1990 "_cursesmodule.c"
        var $884=((($883))|0)==0; //@line 1990 "_cursesmodule.c"
        if ($884) { __label__ = 150; break; } else { __label__ = 152; break; } //@line 1990 "_cursesmodule.c"
      case 150: // $bb185
        var $885=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $886=(($885)&4294967295); //@line 1990 "_cursesmodule.c"
        var $887=HEAP[$886]; //@line 1990 "_cursesmodule.c"
        var $888=((($887) - 1)&4294967295); //@line 1990 "_cursesmodule.c"
        var $889=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $890=(($889)&4294967295); //@line 1990 "_cursesmodule.c"
        HEAP[$890]=$888; //@line 1990 "_cursesmodule.c"
        var $891=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $892=(($891)&4294967295); //@line 1990 "_cursesmodule.c"
        var $893=HEAP[$892]; //@line 1990 "_cursesmodule.c"
        var $894=((($893))|0)==0; //@line 1990 "_cursesmodule.c"
        if ($894) { __label__ = 151; break; } else { __label__ = 152; break; } //@line 1990 "_cursesmodule.c"
      case 151: // $bb186
        var $895=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        var $896=(($895+4)&4294967295); //@line 1990 "_cursesmodule.c"
        var $897=HEAP[$896]; //@line 1990 "_cursesmodule.c"
        var $898=(($897+24)&4294967295); //@line 1990 "_cursesmodule.c"
        var $899=HEAP[$898]; //@line 1990 "_cursesmodule.c"
        var $900=HEAP[$o183]; //@line 1990 "_cursesmodule.c"
        FUNCTION_TABLE[$899]($900); //@line 1990 "_cursesmodule.c"
        __label__ = 152; break; //@line 1990 "_cursesmodule.c"
      case 152: // $bb187
        var $901=HEAP[((_acs_map+456)&4294967295)]; //@line 1993 "_cursesmodule.c"
        var $902=_PyInt_FromLong($901); //@line 1993 "_cursesmodule.c"
        HEAP[$o188]=$902; //@line 1993 "_cursesmodule.c"
        var $903=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $904=($903)!=0; //@line 1993 "_cursesmodule.c"
        if ($904) { __label__ = 153; break; } else { __label__ = 156; break; } //@line 1993 "_cursesmodule.c"
      case 153: // $bb189
        var $905=HEAP[_ModDict]; //@line 1993 "_cursesmodule.c"
        var $906=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $907=_PyDict_SetItemString($905, ((__str254)&4294967295), $906); //@line 1993 "_cursesmodule.c"
        var $908=((($907))|0)==0; //@line 1993 "_cursesmodule.c"
        if ($908) { __label__ = 154; break; } else { __label__ = 156; break; } //@line 1993 "_cursesmodule.c"
      case 154: // $bb190
        var $909=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $910=(($909)&4294967295); //@line 1993 "_cursesmodule.c"
        var $911=HEAP[$910]; //@line 1993 "_cursesmodule.c"
        var $912=((($911) - 1)&4294967295); //@line 1993 "_cursesmodule.c"
        var $913=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $914=(($913)&4294967295); //@line 1993 "_cursesmodule.c"
        HEAP[$914]=$912; //@line 1993 "_cursesmodule.c"
        var $915=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $916=(($915)&4294967295); //@line 1993 "_cursesmodule.c"
        var $917=HEAP[$916]; //@line 1993 "_cursesmodule.c"
        var $918=((($917))|0)==0; //@line 1993 "_cursesmodule.c"
        if ($918) { __label__ = 155; break; } else { __label__ = 156; break; } //@line 1993 "_cursesmodule.c"
      case 155: // $bb191
        var $919=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        var $920=(($919+4)&4294967295); //@line 1993 "_cursesmodule.c"
        var $921=HEAP[$920]; //@line 1993 "_cursesmodule.c"
        var $922=(($921+24)&4294967295); //@line 1993 "_cursesmodule.c"
        var $923=HEAP[$922]; //@line 1993 "_cursesmodule.c"
        var $924=HEAP[$o188]; //@line 1993 "_cursesmodule.c"
        FUNCTION_TABLE[$923]($924); //@line 1993 "_cursesmodule.c"
        __label__ = 156; break; //@line 1993 "_cursesmodule.c"
      case 156: // $bb192
        var $925=HEAP[((_acs_map+484)&4294967295)]; //@line 1996 "_cursesmodule.c"
        var $926=_PyInt_FromLong($925); //@line 1996 "_cursesmodule.c"
        HEAP[$o193]=$926; //@line 1996 "_cursesmodule.c"
        var $927=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $928=($927)!=0; //@line 1996 "_cursesmodule.c"
        if ($928) { __label__ = 157; break; } else { __label__ = 160; break; } //@line 1996 "_cursesmodule.c"
      case 157: // $bb194
        var $929=HEAP[_ModDict]; //@line 1996 "_cursesmodule.c"
        var $930=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $931=_PyDict_SetItemString($929, ((__str255)&4294967295), $930); //@line 1996 "_cursesmodule.c"
        var $932=((($931))|0)==0; //@line 1996 "_cursesmodule.c"
        if ($932) { __label__ = 158; break; } else { __label__ = 160; break; } //@line 1996 "_cursesmodule.c"
      case 158: // $bb195
        var $933=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $934=(($933)&4294967295); //@line 1996 "_cursesmodule.c"
        var $935=HEAP[$934]; //@line 1996 "_cursesmodule.c"
        var $936=((($935) - 1)&4294967295); //@line 1996 "_cursesmodule.c"
        var $937=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $938=(($937)&4294967295); //@line 1996 "_cursesmodule.c"
        HEAP[$938]=$936; //@line 1996 "_cursesmodule.c"
        var $939=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $940=(($939)&4294967295); //@line 1996 "_cursesmodule.c"
        var $941=HEAP[$940]; //@line 1996 "_cursesmodule.c"
        var $942=((($941))|0)==0; //@line 1996 "_cursesmodule.c"
        if ($942) { __label__ = 159; break; } else { __label__ = 160; break; } //@line 1996 "_cursesmodule.c"
      case 159: // $bb196
        var $943=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        var $944=(($943+4)&4294967295); //@line 1996 "_cursesmodule.c"
        var $945=HEAP[$944]; //@line 1996 "_cursesmodule.c"
        var $946=(($945+24)&4294967295); //@line 1996 "_cursesmodule.c"
        var $947=HEAP[$946]; //@line 1996 "_cursesmodule.c"
        var $948=HEAP[$o193]; //@line 1996 "_cursesmodule.c"
        FUNCTION_TABLE[$947]($948); //@line 1996 "_cursesmodule.c"
        __label__ = 160; break; //@line 1996 "_cursesmodule.c"
      case 160: // $bb197
        var $949=HEAP[((_acs_map+488)&4294967295)]; //@line 1999 "_cursesmodule.c"
        var $950=_PyInt_FromLong($949); //@line 1999 "_cursesmodule.c"
        HEAP[$o198]=$950; //@line 1999 "_cursesmodule.c"
        var $951=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $952=($951)!=0; //@line 1999 "_cursesmodule.c"
        if ($952) { __label__ = 161; break; } else { __label__ = 164; break; } //@line 1999 "_cursesmodule.c"
      case 161: // $bb199
        var $953=HEAP[_ModDict]; //@line 1999 "_cursesmodule.c"
        var $954=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $955=_PyDict_SetItemString($953, ((__str256)&4294967295), $954); //@line 1999 "_cursesmodule.c"
        var $956=((($955))|0)==0; //@line 1999 "_cursesmodule.c"
        if ($956) { __label__ = 162; break; } else { __label__ = 164; break; } //@line 1999 "_cursesmodule.c"
      case 162: // $bb200
        var $957=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $958=(($957)&4294967295); //@line 1999 "_cursesmodule.c"
        var $959=HEAP[$958]; //@line 1999 "_cursesmodule.c"
        var $960=((($959) - 1)&4294967295); //@line 1999 "_cursesmodule.c"
        var $961=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $962=(($961)&4294967295); //@line 1999 "_cursesmodule.c"
        HEAP[$962]=$960; //@line 1999 "_cursesmodule.c"
        var $963=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $964=(($963)&4294967295); //@line 1999 "_cursesmodule.c"
        var $965=HEAP[$964]; //@line 1999 "_cursesmodule.c"
        var $966=((($965))|0)==0; //@line 1999 "_cursesmodule.c"
        if ($966) { __label__ = 163; break; } else { __label__ = 164; break; } //@line 1999 "_cursesmodule.c"
      case 163: // $bb201
        var $967=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        var $968=(($967+4)&4294967295); //@line 1999 "_cursesmodule.c"
        var $969=HEAP[$968]; //@line 1999 "_cursesmodule.c"
        var $970=(($969+24)&4294967295); //@line 1999 "_cursesmodule.c"
        var $971=HEAP[$970]; //@line 1999 "_cursesmodule.c"
        var $972=HEAP[$o198]; //@line 1999 "_cursesmodule.c"
        FUNCTION_TABLE[$971]($972); //@line 1999 "_cursesmodule.c"
        __label__ = 164; break; //@line 1999 "_cursesmodule.c"
      case 164: // $bb202
        var $973=HEAP[((_acs_map+492)&4294967295)]; //@line 2002 "_cursesmodule.c"
        var $974=_PyInt_FromLong($973); //@line 2002 "_cursesmodule.c"
        HEAP[$o203]=$974; //@line 2002 "_cursesmodule.c"
        var $975=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $976=($975)!=0; //@line 2002 "_cursesmodule.c"
        if ($976) { __label__ = 165; break; } else { __label__ = 168; break; } //@line 2002 "_cursesmodule.c"
      case 165: // $bb204
        var $977=HEAP[_ModDict]; //@line 2002 "_cursesmodule.c"
        var $978=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $979=_PyDict_SetItemString($977, ((__str257)&4294967295), $978); //@line 2002 "_cursesmodule.c"
        var $980=((($979))|0)==0; //@line 2002 "_cursesmodule.c"
        if ($980) { __label__ = 166; break; } else { __label__ = 168; break; } //@line 2002 "_cursesmodule.c"
      case 166: // $bb205
        var $981=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $982=(($981)&4294967295); //@line 2002 "_cursesmodule.c"
        var $983=HEAP[$982]; //@line 2002 "_cursesmodule.c"
        var $984=((($983) - 1)&4294967295); //@line 2002 "_cursesmodule.c"
        var $985=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $986=(($985)&4294967295); //@line 2002 "_cursesmodule.c"
        HEAP[$986]=$984; //@line 2002 "_cursesmodule.c"
        var $987=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $988=(($987)&4294967295); //@line 2002 "_cursesmodule.c"
        var $989=HEAP[$988]; //@line 2002 "_cursesmodule.c"
        var $990=((($989))|0)==0; //@line 2002 "_cursesmodule.c"
        if ($990) { __label__ = 167; break; } else { __label__ = 168; break; } //@line 2002 "_cursesmodule.c"
      case 167: // $bb206
        var $991=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        var $992=(($991+4)&4294967295); //@line 2002 "_cursesmodule.c"
        var $993=HEAP[$992]; //@line 2002 "_cursesmodule.c"
        var $994=(($993+24)&4294967295); //@line 2002 "_cursesmodule.c"
        var $995=HEAP[$994]; //@line 2002 "_cursesmodule.c"
        var $996=HEAP[$o203]; //@line 2002 "_cursesmodule.c"
        FUNCTION_TABLE[$995]($996); //@line 2002 "_cursesmodule.c"
        __label__ = 168; break; //@line 2002 "_cursesmodule.c"
      case 168: // $bb207
        var $997=HEAP[((_acs_map+496)&4294967295)]; //@line 2005 "_cursesmodule.c"
        var $998=_PyInt_FromLong($997); //@line 2005 "_cursesmodule.c"
        HEAP[$o208]=$998; //@line 2005 "_cursesmodule.c"
        var $999=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1000=($999)!=0; //@line 2005 "_cursesmodule.c"
        if ($1000) { __label__ = 169; break; } else { __label__ = 172; break; } //@line 2005 "_cursesmodule.c"
      case 169: // $bb209
        var $1001=HEAP[_ModDict]; //@line 2005 "_cursesmodule.c"
        var $1002=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1003=_PyDict_SetItemString($1001, ((__str258)&4294967295), $1002); //@line 2005 "_cursesmodule.c"
        var $1004=((($1003))|0)==0; //@line 2005 "_cursesmodule.c"
        if ($1004) { __label__ = 170; break; } else { __label__ = 172; break; } //@line 2005 "_cursesmodule.c"
      case 170: // $bb210
        var $1005=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1006=(($1005)&4294967295); //@line 2005 "_cursesmodule.c"
        var $1007=HEAP[$1006]; //@line 2005 "_cursesmodule.c"
        var $1008=((($1007) - 1)&4294967295); //@line 2005 "_cursesmodule.c"
        var $1009=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1010=(($1009)&4294967295); //@line 2005 "_cursesmodule.c"
        HEAP[$1010]=$1008; //@line 2005 "_cursesmodule.c"
        var $1011=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1012=(($1011)&4294967295); //@line 2005 "_cursesmodule.c"
        var $1013=HEAP[$1012]; //@line 2005 "_cursesmodule.c"
        var $1014=((($1013))|0)==0; //@line 2005 "_cursesmodule.c"
        if ($1014) { __label__ = 171; break; } else { __label__ = 172; break; } //@line 2005 "_cursesmodule.c"
      case 171: // $bb211
        var $1015=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        var $1016=(($1015+4)&4294967295); //@line 2005 "_cursesmodule.c"
        var $1017=HEAP[$1016]; //@line 2005 "_cursesmodule.c"
        var $1018=(($1017+24)&4294967295); //@line 2005 "_cursesmodule.c"
        var $1019=HEAP[$1018]; //@line 2005 "_cursesmodule.c"
        var $1020=HEAP[$o208]; //@line 2005 "_cursesmodule.c"
        FUNCTION_TABLE[$1019]($1020); //@line 2005 "_cursesmodule.c"
        __label__ = 172; break; //@line 2005 "_cursesmodule.c"
      case 172: // $bb212
        var $1021=HEAP[((_acs_map+500)&4294967295)]; //@line 2008 "_cursesmodule.c"
        var $1022=_PyInt_FromLong($1021); //@line 2008 "_cursesmodule.c"
        HEAP[$o213]=$1022; //@line 2008 "_cursesmodule.c"
        var $1023=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1024=($1023)!=0; //@line 2008 "_cursesmodule.c"
        if ($1024) { __label__ = 173; break; } else { __label__ = 176; break; } //@line 2008 "_cursesmodule.c"
      case 173: // $bb214
        var $1025=HEAP[_ModDict]; //@line 2008 "_cursesmodule.c"
        var $1026=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1027=_PyDict_SetItemString($1025, ((__str259)&4294967295), $1026); //@line 2008 "_cursesmodule.c"
        var $1028=((($1027))|0)==0; //@line 2008 "_cursesmodule.c"
        if ($1028) { __label__ = 174; break; } else { __label__ = 176; break; } //@line 2008 "_cursesmodule.c"
      case 174: // $bb215
        var $1029=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1030=(($1029)&4294967295); //@line 2008 "_cursesmodule.c"
        var $1031=HEAP[$1030]; //@line 2008 "_cursesmodule.c"
        var $1032=((($1031) - 1)&4294967295); //@line 2008 "_cursesmodule.c"
        var $1033=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1034=(($1033)&4294967295); //@line 2008 "_cursesmodule.c"
        HEAP[$1034]=$1032; //@line 2008 "_cursesmodule.c"
        var $1035=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1036=(($1035)&4294967295); //@line 2008 "_cursesmodule.c"
        var $1037=HEAP[$1036]; //@line 2008 "_cursesmodule.c"
        var $1038=((($1037))|0)==0; //@line 2008 "_cursesmodule.c"
        if ($1038) { __label__ = 175; break; } else { __label__ = 176; break; } //@line 2008 "_cursesmodule.c"
      case 175: // $bb216
        var $1039=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        var $1040=(($1039+4)&4294967295); //@line 2008 "_cursesmodule.c"
        var $1041=HEAP[$1040]; //@line 2008 "_cursesmodule.c"
        var $1042=(($1041+24)&4294967295); //@line 2008 "_cursesmodule.c"
        var $1043=HEAP[$1042]; //@line 2008 "_cursesmodule.c"
        var $1044=HEAP[$o213]; //@line 2008 "_cursesmodule.c"
        FUNCTION_TABLE[$1043]($1044); //@line 2008 "_cursesmodule.c"
        __label__ = 176; break; //@line 2008 "_cursesmodule.c"
      case 176: // $bb217
        var $1045=HEAP[_LINES]; //@line 2011 "_cursesmodule.c"
        var $1046=_PyInt_FromLong($1045); //@line 2011 "_cursesmodule.c"
        HEAP[$o218]=$1046; //@line 2011 "_cursesmodule.c"
        var $1047=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1048=($1047)!=0; //@line 2011 "_cursesmodule.c"
        if ($1048) { __label__ = 177; break; } else { __label__ = 180; break; } //@line 2011 "_cursesmodule.c"
      case 177: // $bb219
        var $1049=HEAP[_ModDict]; //@line 2011 "_cursesmodule.c"
        var $1050=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1051=_PyDict_SetItemString($1049, ((__str260)&4294967295), $1050); //@line 2011 "_cursesmodule.c"
        var $1052=((($1051))|0)==0; //@line 2011 "_cursesmodule.c"
        if ($1052) { __label__ = 178; break; } else { __label__ = 180; break; } //@line 2011 "_cursesmodule.c"
      case 178: // $bb220
        var $1053=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1054=(($1053)&4294967295); //@line 2011 "_cursesmodule.c"
        var $1055=HEAP[$1054]; //@line 2011 "_cursesmodule.c"
        var $1056=((($1055) - 1)&4294967295); //@line 2011 "_cursesmodule.c"
        var $1057=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1058=(($1057)&4294967295); //@line 2011 "_cursesmodule.c"
        HEAP[$1058]=$1056; //@line 2011 "_cursesmodule.c"
        var $1059=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1060=(($1059)&4294967295); //@line 2011 "_cursesmodule.c"
        var $1061=HEAP[$1060]; //@line 2011 "_cursesmodule.c"
        var $1062=((($1061))|0)==0; //@line 2011 "_cursesmodule.c"
        if ($1062) { __label__ = 179; break; } else { __label__ = 180; break; } //@line 2011 "_cursesmodule.c"
      case 179: // $bb221
        var $1063=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        var $1064=(($1063+4)&4294967295); //@line 2011 "_cursesmodule.c"
        var $1065=HEAP[$1064]; //@line 2011 "_cursesmodule.c"
        var $1066=(($1065+24)&4294967295); //@line 2011 "_cursesmodule.c"
        var $1067=HEAP[$1066]; //@line 2011 "_cursesmodule.c"
        var $1068=HEAP[$o218]; //@line 2011 "_cursesmodule.c"
        FUNCTION_TABLE[$1067]($1068); //@line 2011 "_cursesmodule.c"
        __label__ = 180; break; //@line 2011 "_cursesmodule.c"
      case 180: // $bb222
        var $1069=HEAP[_COLS]; //@line 2012 "_cursesmodule.c"
        var $1070=_PyInt_FromLong($1069); //@line 2012 "_cursesmodule.c"
        HEAP[$o223]=$1070; //@line 2012 "_cursesmodule.c"
        var $1071=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1072=($1071)!=0; //@line 2012 "_cursesmodule.c"
        if ($1072) { __label__ = 181; break; } else { __label__ = 184; break; } //@line 2012 "_cursesmodule.c"
      case 181: // $bb224
        var $1073=HEAP[_ModDict]; //@line 2012 "_cursesmodule.c"
        var $1074=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1075=_PyDict_SetItemString($1073, ((__str261)&4294967295), $1074); //@line 2012 "_cursesmodule.c"
        var $1076=((($1075))|0)==0; //@line 2012 "_cursesmodule.c"
        if ($1076) { __label__ = 182; break; } else { __label__ = 184; break; } //@line 2012 "_cursesmodule.c"
      case 182: // $bb225
        var $1077=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1078=(($1077)&4294967295); //@line 2012 "_cursesmodule.c"
        var $1079=HEAP[$1078]; //@line 2012 "_cursesmodule.c"
        var $1080=((($1079) - 1)&4294967295); //@line 2012 "_cursesmodule.c"
        var $1081=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1082=(($1081)&4294967295); //@line 2012 "_cursesmodule.c"
        HEAP[$1082]=$1080; //@line 2012 "_cursesmodule.c"
        var $1083=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1084=(($1083)&4294967295); //@line 2012 "_cursesmodule.c"
        var $1085=HEAP[$1084]; //@line 2012 "_cursesmodule.c"
        var $1086=((($1085))|0)==0; //@line 2012 "_cursesmodule.c"
        if ($1086) { __label__ = 183; break; } else { __label__ = 184; break; } //@line 2012 "_cursesmodule.c"
      case 183: // $bb226
        var $1087=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        var $1088=(($1087+4)&4294967295); //@line 2012 "_cursesmodule.c"
        var $1089=HEAP[$1088]; //@line 2012 "_cursesmodule.c"
        var $1090=(($1089+24)&4294967295); //@line 2012 "_cursesmodule.c"
        var $1091=HEAP[$1090]; //@line 2012 "_cursesmodule.c"
        var $1092=HEAP[$o223]; //@line 2012 "_cursesmodule.c"
        FUNCTION_TABLE[$1091]($1092); //@line 2012 "_cursesmodule.c"
        __label__ = 184; break; //@line 2012 "_cursesmodule.c"
      case 184: // $bb227
        var $1093=HEAP[$win]; //@line 2014 "_cursesmodule.c"
        var $1094=_PyCursesWindow_New($1093); //@line 2014 "_cursesmodule.c"
        HEAP[$0]=$1094; //@line 2014 "_cursesmodule.c"
        __label__ = 185; break; //@line 2014 "_cursesmodule.c"
      case 185: // $bb228
        var $1095=HEAP[$0]; //@line 1922 "_cursesmodule.c"
        HEAP[$retval]=$1095; //@line 1922 "_cursesmodule.c"
        __label__ = 186; break; //@line 1922 "_cursesmodule.c"
      case 186: // $return
        var $retval229=HEAP[$retval]; //@line 1922 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval229; //@line 1922 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_setupterm($self, $args, $keywds) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $keywds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $fd=__stackBase__+20;
        var $err=__stackBase__+24;
        var $termstr=__stackBase__+28;
        var $sys_stdout=__stackBase__+32;
        var $s=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$keywds_addr]=$keywds;
        HEAP[$fd]=-1; //@line 2020 "_cursesmodule.c"
        HEAP[$termstr]=0; //@line 2022 "_cursesmodule.c"
        var $1=HEAP[$args_addr]; //@line 2026 "_cursesmodule.c"
        var $2=HEAP[$keywds_addr]; //@line 2026 "_cursesmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str262)&4294967295), ((_kwlist_13450)&4294967295), $termstr, $fd); //@line 2026 "_cursesmodule.c"
        var $4=((($3))|0)==0; //@line 2026 "_cursesmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2026 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2028 "_cursesmodule.c"
        __label__ = 15; break; //@line 2028 "_cursesmodule.c"
      case 2: // $bb1
        var $5=HEAP[$fd]; //@line 2031 "_cursesmodule.c"
        var $6=((($5))|0)==-1; //@line 2031 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 2031 "_cursesmodule.c"
      case 3: // $bb2
        var $7=_PySys_GetObject(((__str265)&4294967295)); //@line 2034 "_cursesmodule.c"
        HEAP[$sys_stdout]=$7; //@line 2034 "_cursesmodule.c"
        var $8=HEAP[$sys_stdout]; //@line 2036 "_cursesmodule.c"
        var $9=($8)==0; //@line 2036 "_cursesmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2036 "_cursesmodule.c"
      case 4: // $bb3
        var $10=HEAP[_PyCursesError]; //@line 2037 "_cursesmodule.c"
        _PyErr_SetString($10, ((__str266)&4294967295)); //@line 2037 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2040 "_cursesmodule.c"
        __label__ = 15; break; //@line 2040 "_cursesmodule.c"
      case 5: // $bb4
        var $11=HEAP[$sys_stdout]; //@line 2043 "_cursesmodule.c"
        var $12=_PyObject_AsFileDescriptor($11); //@line 2043 "_cursesmodule.c"
        HEAP[$fd]=$12; //@line 2043 "_cursesmodule.c"
        var $13=HEAP[$fd]; //@line 2045 "_cursesmodule.c"
        var $14=((($13))|0)==-1; //@line 2045 "_cursesmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2045 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 2046 "_cursesmodule.c"
        __label__ = 15; break; //@line 2046 "_cursesmodule.c"
      case 7: // $bb6
        var $15=HEAP[_initialised_setupterm]; //@line 2050 "_cursesmodule.c"
        var $16=((($15))|0)==0; //@line 2050 "_cursesmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 2050 "_cursesmodule.c"
      case 8: // $bb7
        var $17=HEAP[$fd]; //@line 2050 "_cursesmodule.c"
        var $18=HEAP[$termstr]; //@line 2050 "_cursesmodule.c"
        var $19=_setupterm($18, $17, $err); //@line 2050 "_cursesmodule.c"
        var $20=((($19))|0)==-1; //@line 2050 "_cursesmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 2050 "_cursesmodule.c"
      case 9: // $bb8
        HEAP[$s]=((__str267)&4294967295); //@line 2051 "_cursesmodule.c"
        var $21=HEAP[$err]; //@line 2053 "_cursesmodule.c"
        var $22=((($21))|0)==0; //@line 2053 "_cursesmodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2053 "_cursesmodule.c"
      case 10: // $bb9
        HEAP[$s]=((__str268)&4294967295); //@line 2054 "_cursesmodule.c"
        __label__ = 13; break; //@line 2054 "_cursesmodule.c"
      case 11: // $bb10
        var $23=HEAP[$err]; //@line 2055 "_cursesmodule.c"
        var $24=((($23))|0)==-1; //@line 2055 "_cursesmodule.c"
        if ($24) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2055 "_cursesmodule.c"
      case 12: // $bb11
        HEAP[$s]=((__str269)&4294967295); //@line 2056 "_cursesmodule.c"
        __label__ = 13; break; //@line 2056 "_cursesmodule.c"
      case 13: // $bb12
        var $25=HEAP[_PyCursesError]; //@line 2059 "_cursesmodule.c"
        var $26=HEAP[$s]; //@line 2059 "_cursesmodule.c"
        _PyErr_SetString($25, $26); //@line 2059 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2060 "_cursesmodule.c"
        __label__ = 15; break; //@line 2060 "_cursesmodule.c"
      case 14: // $bb13
        HEAP[_initialised_setupterm]=1; //@line 2063 "_cursesmodule.c"
        var $27=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2065 "_cursesmodule.c"
        var $28=((($27) + 1)&4294967295); //@line 2065 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$28; //@line 2065 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2066 "_cursesmodule.c"
        __label__ = 15; break; //@line 2066 "_cursesmodule.c"
      case 15: // $bb14
        var $29=HEAP[$0]; //@line 2028 "_cursesmodule.c"
        HEAP[$retval]=$29; //@line 2028 "_cursesmodule.c"
        __label__ = 16; break; //@line 2028 "_cursesmodule.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 2028 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 2028 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_IntrFlush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ch=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2074 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2074 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2074 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2074 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2074 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2074 "_cursesmodule.c"
        __label__ = 7; break; //@line 2074 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2076 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 2076 "_cursesmodule.c"
        if ($5 == 1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $6=HEAP[$args_addr]; //@line 2078 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str270)&4294967295), $ch); //@line 2078 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 2078 "_cursesmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2078 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 2078 "_cursesmodule.c"
        __label__ = 7; break; //@line 2078 "_cursesmodule.c"
      case 5: // $bb4
        var $9=HEAP[$ch]; //@line 2085 "_cursesmodule.c"
        var $10=((($9))|0)!=0; //@line 2085 "_cursesmodule.c"
        var $11=unSign(($10), 1, 0); //@line 2085 "_cursesmodule.c"
        var $12=((($11)) & 255); //@line 2085 "_cursesmodule.c"
        var $13=_intrflush(0, $12); //@line 2085 "_cursesmodule.c"
        var $14=_PyCursesCheckERR($13, ((__str271)&4294967295)); //@line 2085 "_cursesmodule.c"
        HEAP[$0]=$14; //@line 2085 "_cursesmodule.c"
        __label__ = 7; break; //@line 2085 "_cursesmodule.c"
      case 6: // $bb5
        var $15=HEAP[_PyExc_TypeError]; //@line 2081 "_cursesmodule.c"
        _PyErr_SetString($15, ((__str272)&4294967295)); //@line 2081 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2082 "_cursesmodule.c"
        __label__ = 7; break; //@line 2082 "_cursesmodule.c"
      case 7: // $bb6
        var $16=HEAP[$0]; //@line 2074 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 2074 "_cursesmodule.c"
        __label__ = 8; break; //@line 2074 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2074 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2074 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Is_Term_Resized($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $lines=__stackBase__+16;
        var $columns=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2096 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2096 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2096 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2096 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2096 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2096 "_cursesmodule.c"
        __label__ = 7; break; //@line 2096 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2098 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str273)&4294967295), $lines, $columns); //@line 2098 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2098 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2098 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2099 "_cursesmodule.c"
        __label__ = 7; break; //@line 2099 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$columns]; //@line 2100 "_cursesmodule.c"
        var $8=HEAP[$lines]; //@line 2100 "_cursesmodule.c"
        var $9=_is_term_resized($8, $7); //@line 2100 "_cursesmodule.c"
        var $10=unSign(($9), 8, 0); //@line 2100 "_cursesmodule.c"
        HEAP[$result]=$10; //@line 2100 "_cursesmodule.c"
        var $11=HEAP[$result]; //@line 2101 "_cursesmodule.c"
        var $12=((($11))|0)==1; //@line 2101 "_cursesmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2101 "_cursesmodule.c"
      case 5: // $bb4
        var $13=((__Py_TrueStruct)&4294967295); //@line 2102 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 2102 "_cursesmodule.c"
        var $15=((($14) + 1)&4294967295); //@line 2102 "_cursesmodule.c"
        var $16=((__Py_TrueStruct)&4294967295); //@line 2102 "_cursesmodule.c"
        HEAP[$16]=$15; //@line 2102 "_cursesmodule.c"
        HEAP[$0]=__Py_TrueStruct; //@line 2103 "_cursesmodule.c"
        __label__ = 7; break; //@line 2103 "_cursesmodule.c"
      case 6: // $bb5
        var $17=((__Py_ZeroStruct)&4294967295); //@line 2105 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 2105 "_cursesmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 2105 "_cursesmodule.c"
        var $20=((__Py_ZeroStruct)&4294967295); //@line 2105 "_cursesmodule.c"
        HEAP[$20]=$19; //@line 2105 "_cursesmodule.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 2106 "_cursesmodule.c"
        __label__ = 7; break; //@line 2106 "_cursesmodule.c"
      case 7: // $bb6
        var $21=HEAP[$0]; //@line 2096 "_cursesmodule.c"
        HEAP[$retval]=$21; //@line 2096 "_cursesmodule.c"
        __label__ = 8; break; //@line 2096 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2096 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2096 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_KeyName($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_515=__stackBase__+12;
        var $0=__stackBase__+16;
        var $knp=__stackBase__+20;
        var $ch=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2118 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2118 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2118 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2118 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2118 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2118 "_cursesmodule.c"
        __label__ = 10; break; //@line 2118 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2120 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str210)&4294967295), $ch); //@line 2120 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2120 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2120 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2120 "_cursesmodule.c"
        __label__ = 10; break; //@line 2120 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$ch]; //@line 2122 "_cursesmodule.c"
        var $8=((($7))|0) < 0; //@line 2122 "_cursesmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2122 "_cursesmodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 2123 "_cursesmodule.c"
        _PyErr_SetString($9, ((__str274)&4294967295)); //@line 2123 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2124 "_cursesmodule.c"
        __label__ = 10; break; //@line 2124 "_cursesmodule.c"
      case 6: // $bb5
        var $10=HEAP[$ch]; //@line 2126 "_cursesmodule.c"
        var $11=_keyname($10); //@line 2126 "_cursesmodule.c"
        HEAP[$knp]=$11; //@line 2126 "_cursesmodule.c"
        var $12=HEAP[$knp]; //@line 2128 "_cursesmodule.c"
        var $13=($12)!=0; //@line 2128 "_cursesmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2128 "_cursesmodule.c"
      case 7: // $bb6
        var $14=HEAP[$knp]; //@line 2128 "_cursesmodule.c"
        HEAP[$iftmp_515]=$14; //@line 2128 "_cursesmodule.c"
        __label__ = 9; break; //@line 2128 "_cursesmodule.c"
      case 8: // $bb7
        HEAP[$iftmp_515]=((__str79)&4294967295); //@line 2128 "_cursesmodule.c"
        __label__ = 9; break; //@line 2128 "_cursesmodule.c"
      case 9: // $bb8
        var $15=HEAP[$iftmp_515]; //@line 2128 "_cursesmodule.c"
        var $16=_PyString_FromString($15); //@line 2128 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 2128 "_cursesmodule.c"
        __label__ = 10; break; //@line 2128 "_cursesmodule.c"
      case 10: // $bb9
        var $17=HEAP[$0]; //@line 2118 "_cursesmodule.c"
        HEAP[$retval]=$17; //@line 2118 "_cursesmodule.c"
        __label__ = 11; break; //@line 2118 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 2118 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2118 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_KillChar($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 13; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 13);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $ch=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_killchar(); //@line 2137 "_cursesmodule.c"
        HEAP[$ch]=$1; //@line 2137 "_cursesmodule.c"
        var $2=_PyString_FromStringAndSize($ch, 1); //@line 2139 "_cursesmodule.c"
        HEAP[$0]=$2; //@line 2139 "_cursesmodule.c"
        var $3=HEAP[$0]; //@line 2139 "_cursesmodule.c"
        HEAP[$retval]=$3; //@line 2139 "_cursesmodule.c"
        __label__ = 1; break; //@line 2139 "_cursesmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 2139 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 2139 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Meta($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ch=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2147 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2147 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2147 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2147 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2147 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2147 "_cursesmodule.c"
        __label__ = 7; break; //@line 2147 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2149 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 2149 "_cursesmodule.c"
        if ($5 == 1) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $6=HEAP[$args_addr]; //@line 2151 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str270)&4294967295), $ch); //@line 2151 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 2151 "_cursesmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2151 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 2151 "_cursesmodule.c"
        __label__ = 7; break; //@line 2151 "_cursesmodule.c"
      case 5: // $bb4
        var $9=HEAP[$ch]; //@line 2158 "_cursesmodule.c"
        var $10=((($9))|0)!=0; //@line 2158 "_cursesmodule.c"
        var $11=unSign(($10), 1, 0); //@line 2158 "_cursesmodule.c"
        var $12=HEAP[_stdscr]; //@line 2158 "_cursesmodule.c"
        var $13=((($11)) & 255); //@line 2158 "_cursesmodule.c"
        var $14=_meta($12, $13); //@line 2158 "_cursesmodule.c"
        var $15=_PyCursesCheckERR($14, ((__str275)&4294967295)); //@line 2158 "_cursesmodule.c"
        HEAP[$0]=$15; //@line 2158 "_cursesmodule.c"
        __label__ = 7; break; //@line 2158 "_cursesmodule.c"
      case 6: // $bb5
        var $16=HEAP[_PyExc_TypeError]; //@line 2154 "_cursesmodule.c"
        _PyErr_SetString($16, ((__str276)&4294967295)); //@line 2154 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2155 "_cursesmodule.c"
        __label__ = 7; break; //@line 2155 "_cursesmodule.c"
      case 7: // $bb6
        var $17=HEAP[$0]; //@line 2147 "_cursesmodule.c"
        HEAP[$retval]=$17; //@line 2147 "_cursesmodule.c"
        __label__ = 8; break; //@line 2147 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2147 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2147 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_MouseInterval($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $interval=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2166 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2166 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2166 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2166 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2166 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2166 "_cursesmodule.c"
        __label__ = 5; break; //@line 2166 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2168 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str277)&4294967295), $interval); //@line 2168 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2168 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2168 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2169 "_cursesmodule.c"
        __label__ = 5; break; //@line 2169 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$interval]; //@line 2170 "_cursesmodule.c"
        var $8=_mouseinterval($7); //@line 2170 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str278)&4294967295)); //@line 2170 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 2170 "_cursesmodule.c"
        __label__ = 5; break; //@line 2170 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 2166 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 2166 "_cursesmodule.c"
        __label__ = 6; break; //@line 2166 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2166 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2166 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_MouseMask($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $newmask=__stackBase__+16;
        var $oldmask=__stackBase__+20;
        var $availmask=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2179 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2179 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2179 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2179 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2179 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2179 "_cursesmodule.c"
        __label__ = 5; break; //@line 2179 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2180 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str279)&4294967295), $newmask); //@line 2180 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2180 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2180 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2181 "_cursesmodule.c"
        __label__ = 5; break; //@line 2181 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$newmask]; //@line 2182 "_cursesmodule.c"
        var $8=_mousemask($7, $oldmask); //@line 2182 "_cursesmodule.c"
        HEAP[$availmask]=$8; //@line 2182 "_cursesmodule.c"
        var $9=HEAP[$oldmask]; //@line 2183 "_cursesmodule.c"
        var $10=HEAP[$availmask]; //@line 2183 "_cursesmodule.c"
        var $11=_Py_BuildValue(((__str280)&4294967295), $10, $9); //@line 2183 "_cursesmodule.c"
        HEAP[$0]=$11; //@line 2183 "_cursesmodule.c"
        __label__ = 5; break; //@line 2183 "_cursesmodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 2179 "_cursesmodule.c"
        HEAP[$retval]=$12; //@line 2179 "_cursesmodule.c"
        __label__ = 6; break; //@line 2179 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2179 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2179 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Napms($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $ms=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2192 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2192 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2192 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2192 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2192 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2192 "_cursesmodule.c"
        __label__ = 5; break; //@line 2192 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2193 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str281)&4294967295), $ms); //@line 2193 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2193 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2193 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2193 "_cursesmodule.c"
        __label__ = 5; break; //@line 2193 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$ms]; //@line 2195 "_cursesmodule.c"
        var $8=_napms($7); //@line 2195 "_cursesmodule.c"
        var $9=_Py_BuildValue(((__str210)&4294967295), $8); //@line 2195 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 2195 "_cursesmodule.c"
        __label__ = 5; break; //@line 2195 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 2192 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 2192 "_cursesmodule.c"
        __label__ = 6; break; //@line 2192 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2192 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2192 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_NewPad($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $nlines=__stackBase__+20;
        var $ncols=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2205 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2205 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2205 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2205 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2205 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2205 "_cursesmodule.c"
        __label__ = 7; break; //@line 2205 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2207 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str282)&4294967295), $nlines, $ncols); //@line 2207 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2207 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2207 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2207 "_cursesmodule.c"
        __label__ = 7; break; //@line 2207 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$ncols]; //@line 2209 "_cursesmodule.c"
        var $8=HEAP[$nlines]; //@line 2209 "_cursesmodule.c"
        var $9=_newpad($8, $7); //@line 2209 "_cursesmodule.c"
        HEAP[$win]=$9; //@line 2209 "_cursesmodule.c"
        var $10=HEAP[$win]; //@line 2211 "_cursesmodule.c"
        var $11=($10)==0; //@line 2211 "_cursesmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2211 "_cursesmodule.c"
      case 5: // $bb4
        var $12=HEAP[_catchall_NULL]; //@line 2212 "_cursesmodule.c"
        var $13=HEAP[_PyCursesError]; //@line 2212 "_cursesmodule.c"
        _PyErr_SetString($13, $12); //@line 2212 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2213 "_cursesmodule.c"
        __label__ = 7; break; //@line 2213 "_cursesmodule.c"
      case 6: // $bb5
        var $14=HEAP[$win]; //@line 2216 "_cursesmodule.c"
        var $15=_PyCursesWindow_New($14); //@line 2216 "_cursesmodule.c"
        HEAP[$0]=$15; //@line 2216 "_cursesmodule.c"
        __label__ = 7; break; //@line 2216 "_cursesmodule.c"
      case 7: // $bb6
        var $16=HEAP[$0]; //@line 2205 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 2205 "_cursesmodule.c"
        __label__ = 8; break; //@line 2205 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2205 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2205 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_NewWindow($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $nlines=__stackBase__+20;
        var $ncols=__stackBase__+24;
        var $begin_y=__stackBase__+28;
        var $begin_x=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$begin_y]=0; //@line 2223 "_cursesmodule.c"
        HEAP[$begin_x]=0; //@line 2223 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 2225 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2225 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2225 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2225 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2225 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2225 "_cursesmodule.c"
        __label__ = 13; break; //@line 2225 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2227 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 2227 "_cursesmodule.c"
        if ($5 == 2) {
          __label__ = 3; break;
        }
        else if ($5 == 4) {
          __label__ = 6; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 3: // $bb2
        var $6=HEAP[$args_addr]; //@line 2229 "_cursesmodule.c"
        var $7=_PyArg_ParseTuple($6, ((__str282)&4294967295), $nlines, $ncols); //@line 2229 "_cursesmodule.c"
        var $8=((($7))|0)==0; //@line 2229 "_cursesmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2229 "_cursesmodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 2230 "_cursesmodule.c"
        __label__ = 13; break; //@line 2230 "_cursesmodule.c"
      case 5: // $bb4
        __label__ = 10; break; //@line 2230 "_cursesmodule.c"
      case 6: // $bb5
        var $9=HEAP[$args_addr]; //@line 2233 "_cursesmodule.c"
        var $10=_PyArg_ParseTuple($9, ((__str71)&4294967295), $nlines, $ncols, $begin_y, $begin_x); //@line 2233 "_cursesmodule.c"
        var $11=((($10))|0)==0; //@line 2233 "_cursesmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2233 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 2235 "_cursesmodule.c"
        __label__ = 13; break; //@line 2235 "_cursesmodule.c"
      case 8: // $bb7
        __label__ = 10; break; //@line 2235 "_cursesmodule.c"
      case 9: // $bb8
        var $12=HEAP[_PyExc_TypeError]; //@line 2238 "_cursesmodule.c"
        _PyErr_SetString($12, ((__str283)&4294967295)); //@line 2238 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2239 "_cursesmodule.c"
        __label__ = 13; break; //@line 2239 "_cursesmodule.c"
      case 10: // $bb9
        var $13=HEAP[$begin_x]; //@line 2242 "_cursesmodule.c"
        var $14=HEAP[$begin_y]; //@line 2242 "_cursesmodule.c"
        var $15=HEAP[$ncols]; //@line 2242 "_cursesmodule.c"
        var $16=HEAP[$nlines]; //@line 2242 "_cursesmodule.c"
        var $17=_newwin($16, $15, $14, $13); //@line 2242 "_cursesmodule.c"
        HEAP[$win]=$17; //@line 2242 "_cursesmodule.c"
        var $18=HEAP[$win]; //@line 2243 "_cursesmodule.c"
        var $19=($18)==0; //@line 2243 "_cursesmodule.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2243 "_cursesmodule.c"
      case 11: // $bb10
        var $20=HEAP[_catchall_NULL]; //@line 2244 "_cursesmodule.c"
        var $21=HEAP[_PyCursesError]; //@line 2244 "_cursesmodule.c"
        _PyErr_SetString($21, $20); //@line 2244 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2245 "_cursesmodule.c"
        __label__ = 13; break; //@line 2245 "_cursesmodule.c"
      case 12: // $bb11
        var $22=HEAP[$win]; //@line 2248 "_cursesmodule.c"
        var $23=_PyCursesWindow_New($22); //@line 2248 "_cursesmodule.c"
        HEAP[$0]=$23; //@line 2248 "_cursesmodule.c"
        __label__ = 13; break; //@line 2248 "_cursesmodule.c"
      case 13: // $bb12
        var $24=HEAP[$0]; //@line 2225 "_cursesmodule.c"
        HEAP[$retval]=$24; //@line 2225 "_cursesmodule.c"
        __label__ = 14; break; //@line 2225 "_cursesmodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 2225 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2225 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Pair_Content($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 22; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 22);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pair=__stackBase__+16;
        var $f=__stackBase__+18;
        var $b=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2256 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2256 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2256 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2256 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2256 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2256 "_cursesmodule.c"
        __label__ = 11; break; //@line 2256 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 2257 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 2257 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2257 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 2257 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 2257 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2257 "_cursesmodule.c"
        __label__ = 11; break; //@line 2257 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 2259 "_cursesmodule.c"
        var $8=_PyTuple_Size($7); //@line 2259 "_cursesmodule.c"
        if ($8 == 1) {
          __label__ = 5; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 5: // $bb4
        var $9=HEAP[$args_addr]; //@line 2261 "_cursesmodule.c"
        var $10=_PyArg_ParseTuple($9, ((__str284)&4294967295), $pair); //@line 2261 "_cursesmodule.c"
        var $11=((($10))|0)==0; //@line 2261 "_cursesmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2261 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 2261 "_cursesmodule.c"
        __label__ = 11; break; //@line 2261 "_cursesmodule.c"
      case 7: // $bb6
        var $12=HEAP[$pair]; //@line 2268 "_cursesmodule.c"
        var $13=reSign(($12), 16, 0); //@line 2268 "_cursesmodule.c"
        var $14=((($13)) & 65535); //@line 2268 "_cursesmodule.c"
        var $15=_pair_content($14, $f, $b); //@line 2268 "_cursesmodule.c"
        var $16=((($15))|0)==-1; //@line 2268 "_cursesmodule.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2268 "_cursesmodule.c"
      case 8: // $bb7
        var $17=HEAP[_PyExc_TypeError]; //@line 2264 "_cursesmodule.c"
        _PyErr_SetString($17, ((__str285)&4294967295)); //@line 2264 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2265 "_cursesmodule.c"
        __label__ = 11; break; //@line 2265 "_cursesmodule.c"
      case 9: // $bb8
        var $18=HEAP[_PyCursesError]; //@line 2269 "_cursesmodule.c"
        _PyErr_SetString($18, ((__str286)&4294967295)); //@line 2269 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2271 "_cursesmodule.c"
        __label__ = 11; break; //@line 2271 "_cursesmodule.c"
      case 10: // $bb9
        var $19=HEAP[$b]; //@line 2274 "_cursesmodule.c"
        var $20=reSign(($19), 16, 0); //@line 2274 "_cursesmodule.c"
        var $21=HEAP[$f]; //@line 2274 "_cursesmodule.c"
        var $22=reSign(($21), 16, 0); //@line 2274 "_cursesmodule.c"
        var $23=_Py_BuildValue(((__str203)&4294967295), $22, $20); //@line 2274 "_cursesmodule.c"
        HEAP[$0]=$23; //@line 2274 "_cursesmodule.c"
        __label__ = 11; break; //@line 2274 "_cursesmodule.c"
      case 11: // $bb10
        var $24=HEAP[$0]; //@line 2256 "_cursesmodule.c"
        HEAP[$retval]=$24; //@line 2256 "_cursesmodule.c"
        __label__ = 12; break; //@line 2256 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 2256 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2256 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_pair_number($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $n=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2282 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2282 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2282 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2282 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2282 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2282 "_cursesmodule.c"
        __label__ = 9; break; //@line 2282 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 2283 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 2283 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2283 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 2283 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 2283 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2283 "_cursesmodule.c"
        __label__ = 9; break; //@line 2283 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$args_addr]; //@line 2285 "_cursesmodule.c"
        var $8=_PyTuple_Size($7); //@line 2285 "_cursesmodule.c"
        if ($8 == 1) {
          __label__ = 5; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 5: // $bb4
        var $9=HEAP[$args_addr]; //@line 2287 "_cursesmodule.c"
        var $10=_PyArg_ParseTuple($9, ((__str287)&4294967295), $n); //@line 2287 "_cursesmodule.c"
        var $11=((($10))|0)==0; //@line 2287 "_cursesmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2287 "_cursesmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 2287 "_cursesmodule.c"
        __label__ = 9; break; //@line 2287 "_cursesmodule.c"
      case 7: // $bb6
        var $12=HEAP[$n]; //@line 2295 "_cursesmodule.c"
        var $13=($12) & 65280; //@line 2295 "_cursesmodule.c"
        var $14=((($13))>>>0) >>> 8; //@line 2295 "_cursesmodule.c"
        var $15=_PyInt_FromLong($14); //@line 2295 "_cursesmodule.c"
        HEAP[$0]=$15; //@line 2295 "_cursesmodule.c"
        __label__ = 9; break; //@line 2295 "_cursesmodule.c"
      case 8: // $bb7
        var $16=HEAP[_PyExc_TypeError]; //@line 2290 "_cursesmodule.c"
        _PyErr_SetString($16, ((__str288)&4294967295)); //@line 2290 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2292 "_cursesmodule.c"
        __label__ = 9; break; //@line 2292 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[$0]; //@line 2282 "_cursesmodule.c"
        HEAP[$retval]=$17; //@line 2282 "_cursesmodule.c"
        __label__ = 10; break; //@line 2282 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2282 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2282 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Putp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $str=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 2303 "_cursesmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str39)&4294967295), $str); //@line 2303 "_cursesmodule.c"
        var $3=((($2))|0)==0; //@line 2303 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2303 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2303 "_cursesmodule.c"
        __label__ = 3; break; //@line 2303 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$str]; //@line 2304 "_cursesmodule.c"
        var $5=_putp($4); //@line 2304 "_cursesmodule.c"
        var $6=_PyCursesCheckERR($5, ((__str289)&4294967295)); //@line 2304 "_cursesmodule.c"
        HEAP[$0]=$6; //@line 2304 "_cursesmodule.c"
        __label__ = 3; break; //@line 2304 "_cursesmodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 2303 "_cursesmodule.c"
        HEAP[$retval]=$7; //@line 2303 "_cursesmodule.c"
        __label__ = 4; break; //@line 2303 "_cursesmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 2303 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 2303 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_QiFlush($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$flag]=0; //@line 2310 "_cursesmodule.c"
        var $1=HEAP[_initialised]; //@line 2312 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2312 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2312 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2312 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2312 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2312 "_cursesmodule.c"
        __label__ = 11; break; //@line 2312 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2314 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 2314 "_cursesmodule.c"
        if ($5 == 0) {
          __label__ = 3; break;
        }
        else if ($5 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 3: // $bb2
        _qiflush(); //@line 2316 "_cursesmodule.c"
        var $6=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2317 "_cursesmodule.c"
        var $7=((($6) + 1)&4294967295); //@line 2317 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$7; //@line 2317 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2318 "_cursesmodule.c"
        __label__ = 11; break; //@line 2318 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 2320 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str13)&4294967295), $flag); //@line 2320 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 2320 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2320 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2320 "_cursesmodule.c"
        __label__ = 11; break; //@line 2320 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flag]; //@line 2321 "_cursesmodule.c"
        var $12=((($11))|0)!=0; //@line 2321 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2321 "_cursesmodule.c"
      case 7: // $bb6
        _qiflush(); //@line 2321 "_cursesmodule.c"
        __label__ = 9; break; //@line 2321 "_cursesmodule.c"
      case 8: // $bb7
        _noqiflush(); //@line 2322 "_cursesmodule.c"
        __label__ = 9; break; //@line 2322 "_cursesmodule.c"
      case 9: // $bb8
        var $13=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2323 "_cursesmodule.c"
        var $14=((($13) + 1)&4294967295); //@line 2323 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$14; //@line 2323 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2324 "_cursesmodule.c"
        __label__ = 11; break; //@line 2324 "_cursesmodule.c"
      case 10: // $bb9
        var $15=HEAP[_PyExc_TypeError]; //@line 2326 "_cursesmodule.c"
        _PyErr_SetString($15, ((__str290)&4294967295)); //@line 2326 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2327 "_cursesmodule.c"
        __label__ = 11; break; //@line 2327 "_cursesmodule.c"
      case 11: // $bb10
        var $16=HEAP[$0]; //@line 2312 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 2312 "_cursesmodule.c"
        __label__ = 12; break; //@line 2312 "_cursesmodule.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 2312 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2312 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _update_lines_cols() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $o=__stackBase__+8;
        var $m=__stackBase__+12;
        var $_alloca_point_=0;
        var $1=_PyImport_ImportModuleNoBlock(((__str291)&4294967295)); //@line 2338 "_cursesmodule.c"
        HEAP[$m]=$1; //@line 2338 "_cursesmodule.c"
        var $2=HEAP[$m]; //@line 2340 "_cursesmodule.c"
        var $3=($2)==0; //@line 2340 "_cursesmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2340 "_cursesmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2341 "_cursesmodule.c"
        __label__ = 41; break; //@line 2341 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_LINES]; //@line 2343 "_cursesmodule.c"
        var $5=_PyInt_FromLong($4); //@line 2343 "_cursesmodule.c"
        HEAP[$o]=$5; //@line 2343 "_cursesmodule.c"
        var $6=HEAP[$o]; //@line 2344 "_cursesmodule.c"
        var $7=($6)==0; //@line 2344 "_cursesmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2344 "_cursesmodule.c"
      case 3: // $bb2
        var $8=HEAP[$m]; //@line 2345 "_cursesmodule.c"
        var $9=(($8)&4294967295); //@line 2345 "_cursesmodule.c"
        var $10=HEAP[$9]; //@line 2345 "_cursesmodule.c"
        var $11=((($10) - 1)&4294967295); //@line 2345 "_cursesmodule.c"
        var $12=HEAP[$m]; //@line 2345 "_cursesmodule.c"
        var $13=(($12)&4294967295); //@line 2345 "_cursesmodule.c"
        HEAP[$13]=$11; //@line 2345 "_cursesmodule.c"
        var $14=HEAP[$m]; //@line 2345 "_cursesmodule.c"
        var $15=(($14)&4294967295); //@line 2345 "_cursesmodule.c"
        var $16=HEAP[$15]; //@line 2345 "_cursesmodule.c"
        var $17=((($16))|0)==0; //@line 2345 "_cursesmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2345 "_cursesmodule.c"
      case 4: // $bb3
        var $18=HEAP[$m]; //@line 2345 "_cursesmodule.c"
        var $19=(($18+4)&4294967295); //@line 2345 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 2345 "_cursesmodule.c"
        var $21=(($20+24)&4294967295); //@line 2345 "_cursesmodule.c"
        var $22=HEAP[$21]; //@line 2345 "_cursesmodule.c"
        var $23=HEAP[$m]; //@line 2345 "_cursesmodule.c"
        FUNCTION_TABLE[$22]($23); //@line 2345 "_cursesmodule.c"
        __label__ = 5; break; //@line 2345 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2346 "_cursesmodule.c"
        __label__ = 41; break; //@line 2346 "_cursesmodule.c"
      case 6: // $bb5
        var $24=HEAP[$m]; //@line 2348 "_cursesmodule.c"
        var $25=HEAP[$o]; //@line 2348 "_cursesmodule.c"
        var $26=_PyObject_SetAttrString($24, ((__str260)&4294967295), $25); //@line 2348 "_cursesmodule.c"
        var $27=((($26))|0)!=0; //@line 2348 "_cursesmodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 2348 "_cursesmodule.c"
      case 7: // $bb6
        var $28=HEAP[$m]; //@line 2349 "_cursesmodule.c"
        var $29=(($28)&4294967295); //@line 2349 "_cursesmodule.c"
        var $30=HEAP[$29]; //@line 2349 "_cursesmodule.c"
        var $31=((($30) - 1)&4294967295); //@line 2349 "_cursesmodule.c"
        var $32=HEAP[$m]; //@line 2349 "_cursesmodule.c"
        var $33=(($32)&4294967295); //@line 2349 "_cursesmodule.c"
        HEAP[$33]=$31; //@line 2349 "_cursesmodule.c"
        var $34=HEAP[$m]; //@line 2349 "_cursesmodule.c"
        var $35=(($34)&4294967295); //@line 2349 "_cursesmodule.c"
        var $36=HEAP[$35]; //@line 2349 "_cursesmodule.c"
        var $37=((($36))|0)==0; //@line 2349 "_cursesmodule.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2349 "_cursesmodule.c"
      case 8: // $bb7
        var $38=HEAP[$m]; //@line 2349 "_cursesmodule.c"
        var $39=(($38+4)&4294967295); //@line 2349 "_cursesmodule.c"
        var $40=HEAP[$39]; //@line 2349 "_cursesmodule.c"
        var $41=(($40+24)&4294967295); //@line 2349 "_cursesmodule.c"
        var $42=HEAP[$41]; //@line 2349 "_cursesmodule.c"
        var $43=HEAP[$m]; //@line 2349 "_cursesmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 2349 "_cursesmodule.c"
        __label__ = 9; break; //@line 2349 "_cursesmodule.c"
      case 9: // $bb8
        var $44=HEAP[$o]; //@line 2350 "_cursesmodule.c"
        var $45=(($44)&4294967295); //@line 2350 "_cursesmodule.c"
        var $46=HEAP[$45]; //@line 2350 "_cursesmodule.c"
        var $47=((($46) - 1)&4294967295); //@line 2350 "_cursesmodule.c"
        var $48=HEAP[$o]; //@line 2350 "_cursesmodule.c"
        var $49=(($48)&4294967295); //@line 2350 "_cursesmodule.c"
        HEAP[$49]=$47; //@line 2350 "_cursesmodule.c"
        var $50=HEAP[$o]; //@line 2350 "_cursesmodule.c"
        var $51=(($50)&4294967295); //@line 2350 "_cursesmodule.c"
        var $52=HEAP[$51]; //@line 2350 "_cursesmodule.c"
        var $53=((($52))|0)==0; //@line 2350 "_cursesmodule.c"
        if ($53) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2350 "_cursesmodule.c"
      case 10: // $bb9
        var $54=HEAP[$o]; //@line 2350 "_cursesmodule.c"
        var $55=(($54+4)&4294967295); //@line 2350 "_cursesmodule.c"
        var $56=HEAP[$55]; //@line 2350 "_cursesmodule.c"
        var $57=(($56+24)&4294967295); //@line 2350 "_cursesmodule.c"
        var $58=HEAP[$57]; //@line 2350 "_cursesmodule.c"
        var $59=HEAP[$o]; //@line 2350 "_cursesmodule.c"
        FUNCTION_TABLE[$58]($59); //@line 2350 "_cursesmodule.c"
        __label__ = 11; break; //@line 2350 "_cursesmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 2351 "_cursesmodule.c"
        __label__ = 41; break; //@line 2351 "_cursesmodule.c"
      case 12: // $bb11
        var $60=HEAP[_ModDict]; //@line 2353 "_cursesmodule.c"
        var $61=HEAP[$o]; //@line 2353 "_cursesmodule.c"
        var $62=_PyDict_SetItemString($60, ((__str260)&4294967295), $61); //@line 2353 "_cursesmodule.c"
        var $63=((($62))|0)!=0; //@line 2353 "_cursesmodule.c"
        if ($63) { __label__ = 13; break; } else { __label__ = 18; break; } //@line 2353 "_cursesmodule.c"
      case 13: // $bb12
        var $64=HEAP[$m]; //@line 2354 "_cursesmodule.c"
        var $65=(($64)&4294967295); //@line 2354 "_cursesmodule.c"
        var $66=HEAP[$65]; //@line 2354 "_cursesmodule.c"
        var $67=((($66) - 1)&4294967295); //@line 2354 "_cursesmodule.c"
        var $68=HEAP[$m]; //@line 2354 "_cursesmodule.c"
        var $69=(($68)&4294967295); //@line 2354 "_cursesmodule.c"
        HEAP[$69]=$67; //@line 2354 "_cursesmodule.c"
        var $70=HEAP[$m]; //@line 2354 "_cursesmodule.c"
        var $71=(($70)&4294967295); //@line 2354 "_cursesmodule.c"
        var $72=HEAP[$71]; //@line 2354 "_cursesmodule.c"
        var $73=((($72))|0)==0; //@line 2354 "_cursesmodule.c"
        if ($73) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2354 "_cursesmodule.c"
      case 14: // $bb13
        var $74=HEAP[$m]; //@line 2354 "_cursesmodule.c"
        var $75=(($74+4)&4294967295); //@line 2354 "_cursesmodule.c"
        var $76=HEAP[$75]; //@line 2354 "_cursesmodule.c"
        var $77=(($76+24)&4294967295); //@line 2354 "_cursesmodule.c"
        var $78=HEAP[$77]; //@line 2354 "_cursesmodule.c"
        var $79=HEAP[$m]; //@line 2354 "_cursesmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 2354 "_cursesmodule.c"
        __label__ = 15; break; //@line 2354 "_cursesmodule.c"
      case 15: // $bb14
        var $80=HEAP[$o]; //@line 2355 "_cursesmodule.c"
        var $81=(($80)&4294967295); //@line 2355 "_cursesmodule.c"
        var $82=HEAP[$81]; //@line 2355 "_cursesmodule.c"
        var $83=((($82) - 1)&4294967295); //@line 2355 "_cursesmodule.c"
        var $84=HEAP[$o]; //@line 2355 "_cursesmodule.c"
        var $85=(($84)&4294967295); //@line 2355 "_cursesmodule.c"
        HEAP[$85]=$83; //@line 2355 "_cursesmodule.c"
        var $86=HEAP[$o]; //@line 2355 "_cursesmodule.c"
        var $87=(($86)&4294967295); //@line 2355 "_cursesmodule.c"
        var $88=HEAP[$87]; //@line 2355 "_cursesmodule.c"
        var $89=((($88))|0)==0; //@line 2355 "_cursesmodule.c"
        if ($89) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2355 "_cursesmodule.c"
      case 16: // $bb15
        var $90=HEAP[$o]; //@line 2355 "_cursesmodule.c"
        var $91=(($90+4)&4294967295); //@line 2355 "_cursesmodule.c"
        var $92=HEAP[$91]; //@line 2355 "_cursesmodule.c"
        var $93=(($92+24)&4294967295); //@line 2355 "_cursesmodule.c"
        var $94=HEAP[$93]; //@line 2355 "_cursesmodule.c"
        var $95=HEAP[$o]; //@line 2355 "_cursesmodule.c"
        FUNCTION_TABLE[$94]($95); //@line 2355 "_cursesmodule.c"
        __label__ = 17; break; //@line 2355 "_cursesmodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 2356 "_cursesmodule.c"
        __label__ = 41; break; //@line 2356 "_cursesmodule.c"
      case 18: // $bb17
        var $96=HEAP[$o]; //@line 2358 "_cursesmodule.c"
        var $97=(($96)&4294967295); //@line 2358 "_cursesmodule.c"
        var $98=HEAP[$97]; //@line 2358 "_cursesmodule.c"
        var $99=((($98) - 1)&4294967295); //@line 2358 "_cursesmodule.c"
        var $100=HEAP[$o]; //@line 2358 "_cursesmodule.c"
        var $101=(($100)&4294967295); //@line 2358 "_cursesmodule.c"
        HEAP[$101]=$99; //@line 2358 "_cursesmodule.c"
        var $102=HEAP[$o]; //@line 2358 "_cursesmodule.c"
        var $103=(($102)&4294967295); //@line 2358 "_cursesmodule.c"
        var $104=HEAP[$103]; //@line 2358 "_cursesmodule.c"
        var $105=((($104))|0)==0; //@line 2358 "_cursesmodule.c"
        if ($105) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 2358 "_cursesmodule.c"
      case 19: // $bb18
        var $106=HEAP[$o]; //@line 2358 "_cursesmodule.c"
        var $107=(($106+4)&4294967295); //@line 2358 "_cursesmodule.c"
        var $108=HEAP[$107]; //@line 2358 "_cursesmodule.c"
        var $109=(($108+24)&4294967295); //@line 2358 "_cursesmodule.c"
        var $110=HEAP[$109]; //@line 2358 "_cursesmodule.c"
        var $111=HEAP[$o]; //@line 2358 "_cursesmodule.c"
        FUNCTION_TABLE[$110]($111); //@line 2358 "_cursesmodule.c"
        __label__ = 20; break; //@line 2358 "_cursesmodule.c"
      case 20: // $bb19
        var $112=HEAP[_COLS]; //@line 2359 "_cursesmodule.c"
        var $113=_PyInt_FromLong($112); //@line 2359 "_cursesmodule.c"
        HEAP[$o]=$113; //@line 2359 "_cursesmodule.c"
        var $114=HEAP[$o]; //@line 2360 "_cursesmodule.c"
        var $115=($114)==0; //@line 2360 "_cursesmodule.c"
        if ($115) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 2360 "_cursesmodule.c"
      case 21: // $bb20
        var $116=HEAP[$m]; //@line 2361 "_cursesmodule.c"
        var $117=(($116)&4294967295); //@line 2361 "_cursesmodule.c"
        var $118=HEAP[$117]; //@line 2361 "_cursesmodule.c"
        var $119=((($118) - 1)&4294967295); //@line 2361 "_cursesmodule.c"
        var $120=HEAP[$m]; //@line 2361 "_cursesmodule.c"
        var $121=(($120)&4294967295); //@line 2361 "_cursesmodule.c"
        HEAP[$121]=$119; //@line 2361 "_cursesmodule.c"
        var $122=HEAP[$m]; //@line 2361 "_cursesmodule.c"
        var $123=(($122)&4294967295); //@line 2361 "_cursesmodule.c"
        var $124=HEAP[$123]; //@line 2361 "_cursesmodule.c"
        var $125=((($124))|0)==0; //@line 2361 "_cursesmodule.c"
        if ($125) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2361 "_cursesmodule.c"
      case 22: // $bb21
        var $126=HEAP[$m]; //@line 2361 "_cursesmodule.c"
        var $127=(($126+4)&4294967295); //@line 2361 "_cursesmodule.c"
        var $128=HEAP[$127]; //@line 2361 "_cursesmodule.c"
        var $129=(($128+24)&4294967295); //@line 2361 "_cursesmodule.c"
        var $130=HEAP[$129]; //@line 2361 "_cursesmodule.c"
        var $131=HEAP[$m]; //@line 2361 "_cursesmodule.c"
        FUNCTION_TABLE[$130]($131); //@line 2361 "_cursesmodule.c"
        __label__ = 23; break; //@line 2361 "_cursesmodule.c"
      case 23: // $bb22
        HEAP[$0]=0; //@line 2362 "_cursesmodule.c"
        __label__ = 41; break; //@line 2362 "_cursesmodule.c"
      case 24: // $bb23
        var $132=HEAP[$m]; //@line 2364 "_cursesmodule.c"
        var $133=HEAP[$o]; //@line 2364 "_cursesmodule.c"
        var $134=_PyObject_SetAttrString($132, ((__str261)&4294967295), $133); //@line 2364 "_cursesmodule.c"
        var $135=((($134))|0)!=0; //@line 2364 "_cursesmodule.c"
        if ($135) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 2364 "_cursesmodule.c"
      case 25: // $bb24
        var $136=HEAP[$m]; //@line 2365 "_cursesmodule.c"
        var $137=(($136)&4294967295); //@line 2365 "_cursesmodule.c"
        var $138=HEAP[$137]; //@line 2365 "_cursesmodule.c"
        var $139=((($138) - 1)&4294967295); //@line 2365 "_cursesmodule.c"
        var $140=HEAP[$m]; //@line 2365 "_cursesmodule.c"
        var $141=(($140)&4294967295); //@line 2365 "_cursesmodule.c"
        HEAP[$141]=$139; //@line 2365 "_cursesmodule.c"
        var $142=HEAP[$m]; //@line 2365 "_cursesmodule.c"
        var $143=(($142)&4294967295); //@line 2365 "_cursesmodule.c"
        var $144=HEAP[$143]; //@line 2365 "_cursesmodule.c"
        var $145=((($144))|0)==0; //@line 2365 "_cursesmodule.c"
        if ($145) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2365 "_cursesmodule.c"
      case 26: // $bb25
        var $146=HEAP[$m]; //@line 2365 "_cursesmodule.c"
        var $147=(($146+4)&4294967295); //@line 2365 "_cursesmodule.c"
        var $148=HEAP[$147]; //@line 2365 "_cursesmodule.c"
        var $149=(($148+24)&4294967295); //@line 2365 "_cursesmodule.c"
        var $150=HEAP[$149]; //@line 2365 "_cursesmodule.c"
        var $151=HEAP[$m]; //@line 2365 "_cursesmodule.c"
        FUNCTION_TABLE[$150]($151); //@line 2365 "_cursesmodule.c"
        __label__ = 27; break; //@line 2365 "_cursesmodule.c"
      case 27: // $bb26
        var $152=HEAP[$o]; //@line 2366 "_cursesmodule.c"
        var $153=(($152)&4294967295); //@line 2366 "_cursesmodule.c"
        var $154=HEAP[$153]; //@line 2366 "_cursesmodule.c"
        var $155=((($154) - 1)&4294967295); //@line 2366 "_cursesmodule.c"
        var $156=HEAP[$o]; //@line 2366 "_cursesmodule.c"
        var $157=(($156)&4294967295); //@line 2366 "_cursesmodule.c"
        HEAP[$157]=$155; //@line 2366 "_cursesmodule.c"
        var $158=HEAP[$o]; //@line 2366 "_cursesmodule.c"
        var $159=(($158)&4294967295); //@line 2366 "_cursesmodule.c"
        var $160=HEAP[$159]; //@line 2366 "_cursesmodule.c"
        var $161=((($160))|0)==0; //@line 2366 "_cursesmodule.c"
        if ($161) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 2366 "_cursesmodule.c"
      case 28: // $bb27
        var $162=HEAP[$o]; //@line 2366 "_cursesmodule.c"
        var $163=(($162+4)&4294967295); //@line 2366 "_cursesmodule.c"
        var $164=HEAP[$163]; //@line 2366 "_cursesmodule.c"
        var $165=(($164+24)&4294967295); //@line 2366 "_cursesmodule.c"
        var $166=HEAP[$165]; //@line 2366 "_cursesmodule.c"
        var $167=HEAP[$o]; //@line 2366 "_cursesmodule.c"
        FUNCTION_TABLE[$166]($167); //@line 2366 "_cursesmodule.c"
        __label__ = 29; break; //@line 2366 "_cursesmodule.c"
      case 29: // $bb28
        HEAP[$0]=0; //@line 2367 "_cursesmodule.c"
        __label__ = 41; break; //@line 2367 "_cursesmodule.c"
      case 30: // $bb29
        var $168=HEAP[_ModDict]; //@line 2369 "_cursesmodule.c"
        var $169=HEAP[$o]; //@line 2369 "_cursesmodule.c"
        var $170=_PyDict_SetItemString($168, ((__str261)&4294967295), $169); //@line 2369 "_cursesmodule.c"
        var $171=((($170))|0)!=0; //@line 2369 "_cursesmodule.c"
        if ($171) { __label__ = 31; break; } else { __label__ = 36; break; } //@line 2369 "_cursesmodule.c"
      case 31: // $bb30
        var $172=HEAP[$m]; //@line 2370 "_cursesmodule.c"
        var $173=(($172)&4294967295); //@line 2370 "_cursesmodule.c"
        var $174=HEAP[$173]; //@line 2370 "_cursesmodule.c"
        var $175=((($174) - 1)&4294967295); //@line 2370 "_cursesmodule.c"
        var $176=HEAP[$m]; //@line 2370 "_cursesmodule.c"
        var $177=(($176)&4294967295); //@line 2370 "_cursesmodule.c"
        HEAP[$177]=$175; //@line 2370 "_cursesmodule.c"
        var $178=HEAP[$m]; //@line 2370 "_cursesmodule.c"
        var $179=(($178)&4294967295); //@line 2370 "_cursesmodule.c"
        var $180=HEAP[$179]; //@line 2370 "_cursesmodule.c"
        var $181=((($180))|0)==0; //@line 2370 "_cursesmodule.c"
        if ($181) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 2370 "_cursesmodule.c"
      case 32: // $bb31
        var $182=HEAP[$m]; //@line 2370 "_cursesmodule.c"
        var $183=(($182+4)&4294967295); //@line 2370 "_cursesmodule.c"
        var $184=HEAP[$183]; //@line 2370 "_cursesmodule.c"
        var $185=(($184+24)&4294967295); //@line 2370 "_cursesmodule.c"
        var $186=HEAP[$185]; //@line 2370 "_cursesmodule.c"
        var $187=HEAP[$m]; //@line 2370 "_cursesmodule.c"
        FUNCTION_TABLE[$186]($187); //@line 2370 "_cursesmodule.c"
        __label__ = 33; break; //@line 2370 "_cursesmodule.c"
      case 33: // $bb32
        var $188=HEAP[$o]; //@line 2371 "_cursesmodule.c"
        var $189=(($188)&4294967295); //@line 2371 "_cursesmodule.c"
        var $190=HEAP[$189]; //@line 2371 "_cursesmodule.c"
        var $191=((($190) - 1)&4294967295); //@line 2371 "_cursesmodule.c"
        var $192=HEAP[$o]; //@line 2371 "_cursesmodule.c"
        var $193=(($192)&4294967295); //@line 2371 "_cursesmodule.c"
        HEAP[$193]=$191; //@line 2371 "_cursesmodule.c"
        var $194=HEAP[$o]; //@line 2371 "_cursesmodule.c"
        var $195=(($194)&4294967295); //@line 2371 "_cursesmodule.c"
        var $196=HEAP[$195]; //@line 2371 "_cursesmodule.c"
        var $197=((($196))|0)==0; //@line 2371 "_cursesmodule.c"
        if ($197) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2371 "_cursesmodule.c"
      case 34: // $bb33
        var $198=HEAP[$o]; //@line 2371 "_cursesmodule.c"
        var $199=(($198+4)&4294967295); //@line 2371 "_cursesmodule.c"
        var $200=HEAP[$199]; //@line 2371 "_cursesmodule.c"
        var $201=(($200+24)&4294967295); //@line 2371 "_cursesmodule.c"
        var $202=HEAP[$201]; //@line 2371 "_cursesmodule.c"
        var $203=HEAP[$o]; //@line 2371 "_cursesmodule.c"
        FUNCTION_TABLE[$202]($203); //@line 2371 "_cursesmodule.c"
        __label__ = 35; break; //@line 2371 "_cursesmodule.c"
      case 35: // $bb34
        HEAP[$0]=0; //@line 2372 "_cursesmodule.c"
        __label__ = 41; break; //@line 2372 "_cursesmodule.c"
      case 36: // $bb35
        var $204=HEAP[$o]; //@line 2374 "_cursesmodule.c"
        var $205=(($204)&4294967295); //@line 2374 "_cursesmodule.c"
        var $206=HEAP[$205]; //@line 2374 "_cursesmodule.c"
        var $207=((($206) - 1)&4294967295); //@line 2374 "_cursesmodule.c"
        var $208=HEAP[$o]; //@line 2374 "_cursesmodule.c"
        var $209=(($208)&4294967295); //@line 2374 "_cursesmodule.c"
        HEAP[$209]=$207; //@line 2374 "_cursesmodule.c"
        var $210=HEAP[$o]; //@line 2374 "_cursesmodule.c"
        var $211=(($210)&4294967295); //@line 2374 "_cursesmodule.c"
        var $212=HEAP[$211]; //@line 2374 "_cursesmodule.c"
        var $213=((($212))|0)==0; //@line 2374 "_cursesmodule.c"
        if ($213) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2374 "_cursesmodule.c"
      case 37: // $bb36
        var $214=HEAP[$o]; //@line 2374 "_cursesmodule.c"
        var $215=(($214+4)&4294967295); //@line 2374 "_cursesmodule.c"
        var $216=HEAP[$215]; //@line 2374 "_cursesmodule.c"
        var $217=(($216+24)&4294967295); //@line 2374 "_cursesmodule.c"
        var $218=HEAP[$217]; //@line 2374 "_cursesmodule.c"
        var $219=HEAP[$o]; //@line 2374 "_cursesmodule.c"
        FUNCTION_TABLE[$218]($219); //@line 2374 "_cursesmodule.c"
        __label__ = 38; break; //@line 2374 "_cursesmodule.c"
      case 38: // $bb37
        var $220=HEAP[$m]; //@line 2375 "_cursesmodule.c"
        var $221=(($220)&4294967295); //@line 2375 "_cursesmodule.c"
        var $222=HEAP[$221]; //@line 2375 "_cursesmodule.c"
        var $223=((($222) - 1)&4294967295); //@line 2375 "_cursesmodule.c"
        var $224=HEAP[$m]; //@line 2375 "_cursesmodule.c"
        var $225=(($224)&4294967295); //@line 2375 "_cursesmodule.c"
        HEAP[$225]=$223; //@line 2375 "_cursesmodule.c"
        var $226=HEAP[$m]; //@line 2375 "_cursesmodule.c"
        var $227=(($226)&4294967295); //@line 2375 "_cursesmodule.c"
        var $228=HEAP[$227]; //@line 2375 "_cursesmodule.c"
        var $229=((($228))|0)==0; //@line 2375 "_cursesmodule.c"
        if ($229) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2375 "_cursesmodule.c"
      case 39: // $bb38
        var $230=HEAP[$m]; //@line 2375 "_cursesmodule.c"
        var $231=(($230+4)&4294967295); //@line 2375 "_cursesmodule.c"
        var $232=HEAP[$231]; //@line 2375 "_cursesmodule.c"
        var $233=(($232+24)&4294967295); //@line 2375 "_cursesmodule.c"
        var $234=HEAP[$233]; //@line 2375 "_cursesmodule.c"
        var $235=HEAP[$m]; //@line 2375 "_cursesmodule.c"
        FUNCTION_TABLE[$234]($235); //@line 2375 "_cursesmodule.c"
        __label__ = 40; break; //@line 2375 "_cursesmodule.c"
      case 40: // $bb39
        HEAP[$0]=1; //@line 2376 "_cursesmodule.c"
        __label__ = 41; break; //@line 2376 "_cursesmodule.c"
      case 41: // $bb40
        var $236=HEAP[$0]; //@line 2341 "_cursesmodule.c"
        HEAP[$retval]=$236; //@line 2341 "_cursesmodule.c"
        __label__ = 42; break; //@line 2341 "_cursesmodule.c"
      case 42: // $return
        var $retval41=HEAP[$retval]; //@line 2341 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 2341 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_ResizeTerm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $lines=__stackBase__+16;
        var $columns=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2388 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2388 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2388 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2388 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2388 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2388 "_cursesmodule.c"
        __label__ = 9; break; //@line 2388 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2390 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str292)&4294967295), $lines, $columns); //@line 2390 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2390 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2390 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2391 "_cursesmodule.c"
        __label__ = 9; break; //@line 2391 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$columns]; //@line 2393 "_cursesmodule.c"
        var $8=HEAP[$lines]; //@line 2393 "_cursesmodule.c"
        var $9=_resizeterm($8, $7); //@line 2393 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str293)&4294967295)); //@line 2393 "_cursesmodule.c"
        HEAP[$result]=$10; //@line 2393 "_cursesmodule.c"
        var $11=HEAP[$result]; //@line 2394 "_cursesmodule.c"
        var $12=($11)==0; //@line 2394 "_cursesmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2394 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2395 "_cursesmodule.c"
        __label__ = 9; break; //@line 2395 "_cursesmodule.c"
      case 6: // $bb5
        var $13=_update_lines_cols(); //@line 2396 "_cursesmodule.c"
        var $14=((($13))|0)==0; //@line 2396 "_cursesmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2396 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 2397 "_cursesmodule.c"
        __label__ = 9; break; //@line 2397 "_cursesmodule.c"
      case 8: // $bb7
        var $15=HEAP[$result]; //@line 2398 "_cursesmodule.c"
        HEAP[$0]=$15; //@line 2398 "_cursesmodule.c"
        __label__ = 9; break; //@line 2398 "_cursesmodule.c"
      case 9: // $bb8
        var $16=HEAP[$0]; //@line 2388 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 2388 "_cursesmodule.c"
        __label__ = 10; break; //@line 2388 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2388 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2388 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Resize_Term($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $lines=__stackBase__+16;
        var $columns=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2412 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2412 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2412 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2412 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2412 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2412 "_cursesmodule.c"
        __label__ = 9; break; //@line 2412 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2414 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str294)&4294967295), $lines, $columns); //@line 2414 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2414 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2414 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2415 "_cursesmodule.c"
        __label__ = 9; break; //@line 2415 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$columns]; //@line 2417 "_cursesmodule.c"
        var $8=HEAP[$lines]; //@line 2417 "_cursesmodule.c"
        var $9=_resize_term($8, $7); //@line 2417 "_cursesmodule.c"
        var $10=_PyCursesCheckERR($9, ((__str295)&4294967295)); //@line 2417 "_cursesmodule.c"
        HEAP[$result]=$10; //@line 2417 "_cursesmodule.c"
        var $11=HEAP[$result]; //@line 2418 "_cursesmodule.c"
        var $12=($11)==0; //@line 2418 "_cursesmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2418 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2419 "_cursesmodule.c"
        __label__ = 9; break; //@line 2419 "_cursesmodule.c"
      case 6: // $bb5
        var $13=_update_lines_cols(); //@line 2420 "_cursesmodule.c"
        var $14=((($13))|0)==0; //@line 2420 "_cursesmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2420 "_cursesmodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 2421 "_cursesmodule.c"
        __label__ = 9; break; //@line 2421 "_cursesmodule.c"
      case 8: // $bb7
        var $15=HEAP[$result]; //@line 2422 "_cursesmodule.c"
        HEAP[$0]=$15; //@line 2422 "_cursesmodule.c"
        __label__ = 9; break; //@line 2422 "_cursesmodule.c"
      case 9: // $bb8
        var $16=HEAP[$0]; //@line 2412 "_cursesmodule.c"
        HEAP[$retval]=$16; //@line 2412 "_cursesmodule.c"
        __label__ = 10; break; //@line 2412 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2412 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2412 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_setsyx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $y=__stackBase__+16;
        var $x=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2431 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2431 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2431 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2431 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2431 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2431 "_cursesmodule.c"
        __label__ = 12; break; //@line 2431 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2433 "_cursesmodule.c"
        var $5=_PyTuple_Size($4); //@line 2433 "_cursesmodule.c"
        var $6=((($5))|0)!=2; //@line 2433 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2433 "_cursesmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_TypeError]; //@line 2434 "_cursesmodule.c"
        _PyErr_SetString($7, ((__str296)&4294967295)); //@line 2434 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2435 "_cursesmodule.c"
        __label__ = 12; break; //@line 2435 "_cursesmodule.c"
      case 4: // $bb3
        var $8=HEAP[$args_addr]; //@line 2438 "_cursesmodule.c"
        var $9=_PyArg_ParseTuple($8, ((__str297)&4294967295), $y, $x); //@line 2438 "_cursesmodule.c"
        var $10=((($9))|0)==0; //@line 2438 "_cursesmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2438 "_cursesmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2438 "_cursesmodule.c"
        __label__ = 12; break; //@line 2438 "_cursesmodule.c"
      case 6: // $bb5
        var $11=HEAP[_newscr]; //@line 2440 "_cursesmodule.c"
        var $12=($11)!=0; //@line 2440 "_cursesmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 2440 "_cursesmodule.c"
      case 7: // $bb6
        var $13=HEAP[$y]; //@line 2440 "_cursesmodule.c"
        var $14=((($13))|0)!=-1; //@line 2440 "_cursesmodule.c"
        if ($14) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 2440 "_cursesmodule.c"
      case 8: // $bb7
        var $15=HEAP[$x]; //@line 2440 "_cursesmodule.c"
        var $16=((($15))|0)!=-1; //@line 2440 "_cursesmodule.c"
        if ($16) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2440 "_cursesmodule.c"
      case 9: // $bb8
        var $17=HEAP[_newscr]; //@line 2440 "_cursesmodule.c"
        var $18=_leaveok($17, 1); //@line 2440 "_cursesmodule.c"
        __label__ = 11; break; //@line 2440 "_cursesmodule.c"
      case 10: // $bb9
        var $19=HEAP[_newscr]; //@line 2440 "_cursesmodule.c"
        var $20=_leaveok($19, 0); //@line 2440 "_cursesmodule.c"
        var $21=HEAP[$x]; //@line 2440 "_cursesmodule.c"
        var $22=HEAP[$y]; //@line 2440 "_cursesmodule.c"
        var $23=HEAP[_newscr]; //@line 2440 "_cursesmodule.c"
        var $24=_wmove($23, $22, $21); //@line 2440 "_cursesmodule.c"
        __label__ = 11; break; //@line 2440 "_cursesmodule.c"
      case 11: // $bb10
        var $25=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2442 "_cursesmodule.c"
        var $26=((($25) + 1)&4294967295); //@line 2442 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$26; //@line 2442 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2443 "_cursesmodule.c"
        __label__ = 12; break; //@line 2443 "_cursesmodule.c"
      case 12: // $bb11
        var $27=HEAP[$0]; //@line 2431 "_cursesmodule.c"
        HEAP[$retval]=$27; //@line 2431 "_cursesmodule.c"
        __label__ = 13; break; //@line 2431 "_cursesmodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 2431 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2431 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Start_Color($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $code=__stackBase__+12;
        var $c=__stackBase__+16;
        var $cp=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_initialised]; //@line 2452 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2452 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2452 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2452 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2452 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2452 "_cursesmodule.c"
        __label__ = 9; break; //@line 2452 "_cursesmodule.c"
      case 2: // $bb1
        var $4=_start_color(); //@line 2454 "_cursesmodule.c"
        HEAP[$code]=$4; //@line 2454 "_cursesmodule.c"
        var $5=HEAP[$code]; //@line 2455 "_cursesmodule.c"
        var $6=((($5))|0)!=-1; //@line 2455 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 2455 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[_initialisedcolors]=1; //@line 2456 "_cursesmodule.c"
        var $7=HEAP[_COLORS]; //@line 2457 "_cursesmodule.c"
        var $8=_PyInt_FromLong($7); //@line 2457 "_cursesmodule.c"
        HEAP[$c]=$8; //@line 2457 "_cursesmodule.c"
        var $9=HEAP[_ModDict]; //@line 2458 "_cursesmodule.c"
        var $10=HEAP[$c]; //@line 2458 "_cursesmodule.c"
        var $11=_PyDict_SetItemString($9, ((__str298)&4294967295), $10); //@line 2458 "_cursesmodule.c"
        var $12=HEAP[$c]; //@line 2459 "_cursesmodule.c"
        var $13=(($12)&4294967295); //@line 2459 "_cursesmodule.c"
        var $14=HEAP[$13]; //@line 2459 "_cursesmodule.c"
        var $15=((($14) - 1)&4294967295); //@line 2459 "_cursesmodule.c"
        var $16=HEAP[$c]; //@line 2459 "_cursesmodule.c"
        var $17=(($16)&4294967295); //@line 2459 "_cursesmodule.c"
        HEAP[$17]=$15; //@line 2459 "_cursesmodule.c"
        var $18=HEAP[$c]; //@line 2459 "_cursesmodule.c"
        var $19=(($18)&4294967295); //@line 2459 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 2459 "_cursesmodule.c"
        var $21=((($20))|0)==0; //@line 2459 "_cursesmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2459 "_cursesmodule.c"
      case 4: // $bb3
        var $22=HEAP[$c]; //@line 2459 "_cursesmodule.c"
        var $23=(($22+4)&4294967295); //@line 2459 "_cursesmodule.c"
        var $24=HEAP[$23]; //@line 2459 "_cursesmodule.c"
        var $25=(($24+24)&4294967295); //@line 2459 "_cursesmodule.c"
        var $26=HEAP[$25]; //@line 2459 "_cursesmodule.c"
        var $27=HEAP[$c]; //@line 2459 "_cursesmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 2459 "_cursesmodule.c"
        __label__ = 5; break; //@line 2459 "_cursesmodule.c"
      case 5: // $bb4
        var $28=HEAP[_COLOR_PAIRS]; //@line 2460 "_cursesmodule.c"
        var $29=_PyInt_FromLong($28); //@line 2460 "_cursesmodule.c"
        HEAP[$cp]=$29; //@line 2460 "_cursesmodule.c"
        var $30=HEAP[_ModDict]; //@line 2461 "_cursesmodule.c"
        var $31=HEAP[$cp]; //@line 2461 "_cursesmodule.c"
        var $32=_PyDict_SetItemString($30, ((__str299)&4294967295), $31); //@line 2461 "_cursesmodule.c"
        var $33=HEAP[$cp]; //@line 2462 "_cursesmodule.c"
        var $34=(($33)&4294967295); //@line 2462 "_cursesmodule.c"
        var $35=HEAP[$34]; //@line 2462 "_cursesmodule.c"
        var $36=((($35) - 1)&4294967295); //@line 2462 "_cursesmodule.c"
        var $37=HEAP[$cp]; //@line 2462 "_cursesmodule.c"
        var $38=(($37)&4294967295); //@line 2462 "_cursesmodule.c"
        HEAP[$38]=$36; //@line 2462 "_cursesmodule.c"
        var $39=HEAP[$cp]; //@line 2462 "_cursesmodule.c"
        var $40=(($39)&4294967295); //@line 2462 "_cursesmodule.c"
        var $41=HEAP[$40]; //@line 2462 "_cursesmodule.c"
        var $42=((($41))|0)==0; //@line 2462 "_cursesmodule.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2462 "_cursesmodule.c"
      case 6: // $bb5
        var $43=HEAP[$cp]; //@line 2462 "_cursesmodule.c"
        var $44=(($43+4)&4294967295); //@line 2462 "_cursesmodule.c"
        var $45=HEAP[$44]; //@line 2462 "_cursesmodule.c"
        var $46=(($45+24)&4294967295); //@line 2462 "_cursesmodule.c"
        var $47=HEAP[$46]; //@line 2462 "_cursesmodule.c"
        var $48=HEAP[$cp]; //@line 2462 "_cursesmodule.c"
        FUNCTION_TABLE[$47]($48); //@line 2462 "_cursesmodule.c"
        __label__ = 7; break; //@line 2462 "_cursesmodule.c"
      case 7: // $bb6
        var $49=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2463 "_cursesmodule.c"
        var $50=((($49) + 1)&4294967295); //@line 2463 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$50; //@line 2463 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2464 "_cursesmodule.c"
        __label__ = 9; break; //@line 2464 "_cursesmodule.c"
      case 8: // $bb7
        var $51=HEAP[_PyCursesError]; //@line 2466 "_cursesmodule.c"
        _PyErr_SetString($51, ((__str300)&4294967295)); //@line 2466 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2467 "_cursesmodule.c"
        __label__ = 9; break; //@line 2467 "_cursesmodule.c"
      case 9: // $bb8
        var $52=HEAP[$0]; //@line 2452 "_cursesmodule.c"
        HEAP[$retval]=$52; //@line 2452 "_cursesmodule.c"
        __label__ = 10; break; //@line 2452 "_cursesmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2452 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2452 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_tigetflag($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $capname=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised_setupterm]; //@line 2476 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2476 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2476 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2476 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str4)&4294967295)); //@line 2476 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2476 "_cursesmodule.c"
        __label__ = 5; break; //@line 2476 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2478 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str301)&4294967295), $capname); //@line 2478 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2478 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2478 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2479 "_cursesmodule.c"
        __label__ = 5; break; //@line 2479 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$capname]; //@line 2481 "_cursesmodule.c"
        var $8=_tigetflag($7); //@line 2481 "_cursesmodule.c"
        var $9=_PyInt_FromLong($8); //@line 2481 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 2481 "_cursesmodule.c"
        __label__ = 5; break; //@line 2481 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 2476 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 2476 "_cursesmodule.c"
        __label__ = 6; break; //@line 2476 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2476 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2476 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_tigetnum($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $capname=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised_setupterm]; //@line 2489 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2489 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2489 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2489 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str4)&4294967295)); //@line 2489 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2489 "_cursesmodule.c"
        __label__ = 5; break; //@line 2489 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2491 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str301)&4294967295), $capname); //@line 2491 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2491 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2491 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2492 "_cursesmodule.c"
        __label__ = 5; break; //@line 2492 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$capname]; //@line 2494 "_cursesmodule.c"
        var $8=_tigetnum($7); //@line 2494 "_cursesmodule.c"
        var $9=_PyInt_FromLong($8); //@line 2494 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 2494 "_cursesmodule.c"
        __label__ = 5; break; //@line 2494 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 2489 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 2489 "_cursesmodule.c"
        __label__ = 6; break; //@line 2489 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2489 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2489 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_tigetstr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $capname=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised_setupterm]; //@line 2502 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2502 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2502 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2502 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str4)&4294967295)); //@line 2502 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2502 "_cursesmodule.c"
        __label__ = 8; break; //@line 2502 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2504 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str301)&4294967295), $capname); //@line 2504 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2504 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2504 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2505 "_cursesmodule.c"
        __label__ = 8; break; //@line 2505 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$capname]; //@line 2507 "_cursesmodule.c"
        var $8=_tigetstr($7); //@line 2507 "_cursesmodule.c"
        HEAP[$capname]=$8; //@line 2507 "_cursesmodule.c"
        var $9=HEAP[$capname]; //@line 2508 "_cursesmodule.c"
        var $10=($9)==0; //@line 2508 "_cursesmodule.c"
        if ($10) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2508 "_cursesmodule.c"
      case 5: // $bb4
        var $11=HEAP[$capname]; //@line 2508 "_cursesmodule.c"
        var $12=($11)==4294967295; //@line 2508 "_cursesmodule.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2508 "_cursesmodule.c"
      case 6: // $bb5
        var $13=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2509 "_cursesmodule.c"
        var $14=((($13) + 1)&4294967295); //@line 2509 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$14; //@line 2509 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2510 "_cursesmodule.c"
        __label__ = 8; break; //@line 2510 "_cursesmodule.c"
      case 7: // $bb6
        var $15=HEAP[$capname]; //@line 2512 "_cursesmodule.c"
        var $16=_PyString_FromString($15); //@line 2512 "_cursesmodule.c"
        HEAP[$0]=$16; //@line 2512 "_cursesmodule.c"
        __label__ = 8; break; //@line 2512 "_cursesmodule.c"
      case 8: // $bb7
        var $17=HEAP[$0]; //@line 2502 "_cursesmodule.c"
        HEAP[$retval]=$17; //@line 2502 "_cursesmodule.c"
        __label__ = 9; break; //@line 2502 "_cursesmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 2502 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 2502 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_tparm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $fmt=__stackBase__+16;
        var $result=__stackBase__+20;
        var $i1=__stackBase__+24;
        var $i2=__stackBase__+28;
        var $i3=__stackBase__+32;
        var $i4=__stackBase__+36;
        var $i5=__stackBase__+40;
        var $i6=__stackBase__+44;
        var $i7=__stackBase__+48;
        var $i8=__stackBase__+52;
        var $i9=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 2519 "_cursesmodule.c"
        HEAP[$i1]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i2]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i3]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i4]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i5]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i6]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i7]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i8]=0; //@line 2520 "_cursesmodule.c"
        HEAP[$i9]=0; //@line 2520 "_cursesmodule.c"
        var $1=HEAP[_initialised_setupterm]; //@line 2522 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2522 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2522 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2522 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str4)&4294967295)); //@line 2522 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2522 "_cursesmodule.c"
        __label__ = 7; break; //@line 2522 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2524 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str302)&4294967295), $fmt, $i1, $i2, $i3, $i4, $i5, $i6, $i7, $i8, $i9); //@line 2524 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2524 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2524 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2527 "_cursesmodule.c"
        __label__ = 7; break; //@line 2527 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$i9]; //@line 2530 "_cursesmodule.c"
        var $8=HEAP[$i8]; //@line 2530 "_cursesmodule.c"
        var $9=HEAP[$i7]; //@line 2530 "_cursesmodule.c"
        var $10=HEAP[$i6]; //@line 2530 "_cursesmodule.c"
        var $11=HEAP[$i5]; //@line 2530 "_cursesmodule.c"
        var $12=HEAP[$i4]; //@line 2530 "_cursesmodule.c"
        var $13=HEAP[$i3]; //@line 2530 "_cursesmodule.c"
        var $14=HEAP[$i2]; //@line 2530 "_cursesmodule.c"
        var $15=HEAP[$i1]; //@line 2530 "_cursesmodule.c"
        var $16=HEAP[$fmt]; //@line 2530 "_cursesmodule.c"
        var $17=_tparm($16, $15, $14, $13, $12, $11, $10, $9, $8, $7); //@line 2530 "_cursesmodule.c"
        HEAP[$result]=$17; //@line 2530 "_cursesmodule.c"
        var $18=HEAP[$result]; //@line 2531 "_cursesmodule.c"
        var $19=($18)==0; //@line 2531 "_cursesmodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2531 "_cursesmodule.c"
      case 5: // $bb4
        var $20=HEAP[_PyCursesError]; //@line 2532 "_cursesmodule.c"
        _PyErr_SetString($20, ((__str303)&4294967295)); //@line 2532 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2533 "_cursesmodule.c"
        __label__ = 7; break; //@line 2533 "_cursesmodule.c"
      case 6: // $bb5
        var $21=HEAP[$result]; //@line 2536 "_cursesmodule.c"
        var $22=_PyString_FromString($21); //@line 2536 "_cursesmodule.c"
        HEAP[$0]=$22; //@line 2536 "_cursesmodule.c"
        __label__ = 7; break; //@line 2536 "_cursesmodule.c"
      case 7: // $bb6
        var $23=HEAP[$0]; //@line 2522 "_cursesmodule.c"
        HEAP[$retval]=$23; //@line 2522 "_cursesmodule.c"
        __label__ = 8; break; //@line 2522 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2522 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2522 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_TypeAhead($self, $args) {
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
        var $1=HEAP[_initialised]; //@line 2544 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2544 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2544 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2544 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2544 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2544 "_cursesmodule.c"
        __label__ = 5; break; //@line 2544 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2546 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str304)&4294967295), $fd); //@line 2546 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2546 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2546 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2546 "_cursesmodule.c"
        __label__ = 5; break; //@line 2546 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$fd]; //@line 2548 "_cursesmodule.c"
        var $8=_typeahead($7); //@line 2548 "_cursesmodule.c"
        var $9=_PyCursesCheckERR($8, ((__str305)&4294967295)); //@line 2548 "_cursesmodule.c"
        HEAP[$0]=$9; //@line 2548 "_cursesmodule.c"
        __label__ = 5; break; //@line 2548 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 2544 "_cursesmodule.c"
        HEAP[$retval]=$10; //@line 2544 "_cursesmodule.c"
        __label__ = 6; break; //@line 2544 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2544 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2544 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_UnCtrl($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2557 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2557 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2557 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2557 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2557 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2557 "_cursesmodule.c"
        __label__ = 10; break; //@line 2557 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2559 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str32)&4294967295), $temp); //@line 2559 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2559 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2559 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2559 "_cursesmodule.c"
        __label__ = 10; break; //@line 2559 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$temp]; //@line 2561 "_cursesmodule.c"
        var $8=(($7+4)&4294967295); //@line 2561 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 2561 "_cursesmodule.c"
        var $10=(($9+84)&4294967295); //@line 2561 "_cursesmodule.c"
        var $11=HEAP[$10]; //@line 2561 "_cursesmodule.c"
        var $12=($11) & 8388608; //@line 2561 "_cursesmodule.c"
        var $13=((($12))|0)!=0; //@line 2561 "_cursesmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2561 "_cursesmodule.c"
      case 5: // $bb4
        var $14=HEAP[$temp]; //@line 2562 "_cursesmodule.c"
        var $15=_PyInt_AsLong($14); //@line 2562 "_cursesmodule.c"
        HEAP[$ch]=$15; //@line 2562 "_cursesmodule.c"
        __label__ = 9; break; //@line 2562 "_cursesmodule.c"
      case 6: // $bb5
        var $16=HEAP[$temp]; //@line 2563 "_cursesmodule.c"
        var $17=(($16+4)&4294967295); //@line 2563 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 2563 "_cursesmodule.c"
        var $19=(($18+84)&4294967295); //@line 2563 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 2563 "_cursesmodule.c"
        var $21=($20) & 134217728; //@line 2563 "_cursesmodule.c"
        var $22=((($21))|0)!=0; //@line 2563 "_cursesmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2563 "_cursesmodule.c"
      case 7: // $bb6
        var $23=HEAP[$temp]; //@line 2564 "_cursesmodule.c"
        var $24=_PyString_AsString($23); //@line 2564 "_cursesmodule.c"
        var $25=HEAP[$24]; //@line 2564 "_cursesmodule.c"
        var $26=reSign(($25), 8, 0); //@line 2564 "_cursesmodule.c"
        HEAP[$ch]=$26; //@line 2564 "_cursesmodule.c"
        __label__ = 9; break; //@line 2564 "_cursesmodule.c"
      case 8: // $bb7
        var $27=HEAP[_PyExc_TypeError]; //@line 2566 "_cursesmodule.c"
        _PyErr_SetString($27, ((__str306)&4294967295)); //@line 2566 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2567 "_cursesmodule.c"
        __label__ = 10; break; //@line 2567 "_cursesmodule.c"
      case 9: // $bb8
        var $28=HEAP[$ch]; //@line 2570 "_cursesmodule.c"
        var $29=_unctrl($28); //@line 2570 "_cursesmodule.c"
        var $30=_PyString_FromString($29); //@line 2570 "_cursesmodule.c"
        HEAP[$0]=$30; //@line 2570 "_cursesmodule.c"
        __label__ = 10; break; //@line 2570 "_cursesmodule.c"
      case 10: // $bb9
        var $31=HEAP[$0]; //@line 2557 "_cursesmodule.c"
        HEAP[$retval]=$31; //@line 2557 "_cursesmodule.c"
        __label__ = 11; break; //@line 2557 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 2557 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2557 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_UngetCh($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $temp=__stackBase__+16;
        var $ch=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_initialised]; //@line 2579 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2579 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2579 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2579 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2579 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2579 "_cursesmodule.c"
        __label__ = 10; break; //@line 2579 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[$args_addr]; //@line 2581 "_cursesmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str32)&4294967295), $temp); //@line 2581 "_cursesmodule.c"
        var $6=((($5))|0)==0; //@line 2581 "_cursesmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2581 "_cursesmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2581 "_cursesmodule.c"
        __label__ = 10; break; //@line 2581 "_cursesmodule.c"
      case 4: // $bb3
        var $7=HEAP[$temp]; //@line 2583 "_cursesmodule.c"
        var $8=(($7+4)&4294967295); //@line 2583 "_cursesmodule.c"
        var $9=HEAP[$8]; //@line 2583 "_cursesmodule.c"
        var $10=(($9+84)&4294967295); //@line 2583 "_cursesmodule.c"
        var $11=HEAP[$10]; //@line 2583 "_cursesmodule.c"
        var $12=($11) & 8388608; //@line 2583 "_cursesmodule.c"
        var $13=((($12))|0)!=0; //@line 2583 "_cursesmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2583 "_cursesmodule.c"
      case 5: // $bb4
        var $14=HEAP[$temp]; //@line 2584 "_cursesmodule.c"
        var $15=_PyInt_AsLong($14); //@line 2584 "_cursesmodule.c"
        HEAP[$ch]=$15; //@line 2584 "_cursesmodule.c"
        __label__ = 9; break; //@line 2584 "_cursesmodule.c"
      case 6: // $bb5
        var $16=HEAP[$temp]; //@line 2585 "_cursesmodule.c"
        var $17=(($16+4)&4294967295); //@line 2585 "_cursesmodule.c"
        var $18=HEAP[$17]; //@line 2585 "_cursesmodule.c"
        var $19=(($18+84)&4294967295); //@line 2585 "_cursesmodule.c"
        var $20=HEAP[$19]; //@line 2585 "_cursesmodule.c"
        var $21=($20) & 134217728; //@line 2585 "_cursesmodule.c"
        var $22=((($21))|0)!=0; //@line 2585 "_cursesmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2585 "_cursesmodule.c"
      case 7: // $bb6
        var $23=HEAP[$temp]; //@line 2586 "_cursesmodule.c"
        var $24=_PyString_AsString($23); //@line 2586 "_cursesmodule.c"
        var $25=HEAP[$24]; //@line 2586 "_cursesmodule.c"
        var $26=reSign(($25), 8, 0); //@line 2586 "_cursesmodule.c"
        HEAP[$ch]=$26; //@line 2586 "_cursesmodule.c"
        __label__ = 9; break; //@line 2586 "_cursesmodule.c"
      case 8: // $bb7
        var $27=HEAP[_PyExc_TypeError]; //@line 2588 "_cursesmodule.c"
        _PyErr_SetString($27, ((__str306)&4294967295)); //@line 2588 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2589 "_cursesmodule.c"
        __label__ = 10; break; //@line 2589 "_cursesmodule.c"
      case 9: // $bb8
        var $28=HEAP[$ch]; //@line 2592 "_cursesmodule.c"
        var $29=_ungetch($28); //@line 2592 "_cursesmodule.c"
        var $30=_PyCursesCheckERR($29, ((__str307)&4294967295)); //@line 2592 "_cursesmodule.c"
        HEAP[$0]=$30; //@line 2592 "_cursesmodule.c"
        __label__ = 10; break; //@line 2592 "_cursesmodule.c"
      case 10: // $bb9
        var $31=HEAP[$0]; //@line 2579 "_cursesmodule.c"
        HEAP[$retval]=$31; //@line 2579 "_cursesmodule.c"
        __label__ = 11; break; //@line 2579 "_cursesmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 2579 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2579 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Use_Env($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 2600 "_cursesmodule.c"
        var $2=_PyTuple_Size($1); //@line 2600 "_cursesmodule.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else {
        __label__ = 4; break;
        }
        
      case 1: // $bb
        var $3=HEAP[$args_addr]; //@line 2602 "_cursesmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str270)&4294967295), $flag); //@line 2602 "_cursesmodule.c"
        var $5=((($4))|0)==0; //@line 2602 "_cursesmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2602 "_cursesmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 2603 "_cursesmodule.c"
        __label__ = 5; break; //@line 2603 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[$flag]; //@line 2609 "_cursesmodule.c"
        var $7=((($6))|0)!=0; //@line 2609 "_cursesmodule.c"
        var $8=unSign(($7), 1, 0); //@line 2609 "_cursesmodule.c"
        var $9=((($8)) & 255); //@line 2609 "_cursesmodule.c"
        _use_env($9); //@line 2609 "_cursesmodule.c"
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2610 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 2610 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 2610 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2611 "_cursesmodule.c"
        __label__ = 5; break; //@line 2611 "_cursesmodule.c"
      case 4: // $bb3
        var $12=HEAP[_PyExc_TypeError]; //@line 2606 "_cursesmodule.c"
        _PyErr_SetString($12, ((__str308)&4294967295)); //@line 2606 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2607 "_cursesmodule.c"
        __label__ = 5; break; //@line 2607 "_cursesmodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 2603 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 2603 "_cursesmodule.c"
        __label__ = 6; break; //@line 2603 "_cursesmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2603 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2603 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_Use_Default_Colors($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $code=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_initialised]; //@line 2620 "_cursesmodule.c"
        var $2=((($1))|0)!=1; //@line 2620 "_cursesmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2620 "_cursesmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyCursesError]; //@line 2620 "_cursesmodule.c"
        _PyErr_SetString($3, ((__str5)&4294967295)); //@line 2620 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2620 "_cursesmodule.c"
        __label__ = 7; break; //@line 2620 "_cursesmodule.c"
      case 2: // $bb1
        var $4=HEAP[_initialisedcolors]; //@line 2621 "_cursesmodule.c"
        var $5=((($4))|0)!=1; //@line 2621 "_cursesmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2621 "_cursesmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyCursesError]; //@line 2621 "_cursesmodule.c"
        _PyErr_SetString($6, ((__str6)&4294967295)); //@line 2621 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2621 "_cursesmodule.c"
        __label__ = 7; break; //@line 2621 "_cursesmodule.c"
      case 4: // $bb3
        var $7=_use_default_colors(); //@line 2623 "_cursesmodule.c"
        HEAP[$code]=$7; //@line 2623 "_cursesmodule.c"
        var $8=HEAP[$code]; //@line 2624 "_cursesmodule.c"
        var $9=((($8))|0)!=-1; //@line 2624 "_cursesmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2624 "_cursesmodule.c"
      case 5: // $bb4
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2625 "_cursesmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 2625 "_cursesmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 2625 "_cursesmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2626 "_cursesmodule.c"
        __label__ = 7; break; //@line 2626 "_cursesmodule.c"
      case 6: // $bb5
        var $12=HEAP[_PyCursesError]; //@line 2628 "_cursesmodule.c"
        _PyErr_SetString($12, ((__str309)&4294967295)); //@line 2628 "_cursesmodule.c"
        HEAP[$0]=0; //@line 2629 "_cursesmodule.c"
        __label__ = 7; break; //@line 2629 "_cursesmodule.c"
      case 7: // $bb6
        var $13=HEAP[$0]; //@line 2620 "_cursesmodule.c"
        HEAP[$retval]=$13; //@line 2620 "_cursesmodule.c"
        __label__ = 8; break; //@line 2620 "_cursesmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2620 "_cursesmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2620 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_curses() {
    var __stackBase__  = STACKTOP; STACKTOP += 264; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 264);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $v=__stackBase__+8;
        var $c_api_object=__stackBase__+12;
        var $o=__stackBase__+16;
        var $o10=__stackBase__+20;
        var $o15=__stackBase__+24;
        var $o20=__stackBase__+28;
        var $o25=__stackBase__+32;
        var $o30=__stackBase__+36;
        var $o35=__stackBase__+40;
        var $o40=__stackBase__+44;
        var $o45=__stackBase__+48;
        var $o50=__stackBase__+52;
        var $o55=__stackBase__+56;
        var $o60=__stackBase__+60;
        var $o65=__stackBase__+64;
        var $o70=__stackBase__+68;
        var $o75=__stackBase__+72;
        var $o80=__stackBase__+76;
        var $o85=__stackBase__+80;
        var $o90=__stackBase__+84;
        var $o95=__stackBase__+88;
        var $o100=__stackBase__+92;
        var $o105=__stackBase__+96;
        var $o110=__stackBase__+100;
        var $o115=__stackBase__+104;
        var $o120=__stackBase__+108;
        var $o125=__stackBase__+112;
        var $o130=__stackBase__+116;
        var $o135=__stackBase__+120;
        var $o140=__stackBase__+124;
        var $o145=__stackBase__+128;
        var $o150=__stackBase__+132;
        var $o155=__stackBase__+136;
        var $o160=__stackBase__+140;
        var $o165=__stackBase__+144;
        var $o170=__stackBase__+148;
        var $o175=__stackBase__+152;
        var $o180=__stackBase__+156;
        var $o185=__stackBase__+160;
        var $o190=__stackBase__+164;
        var $o195=__stackBase__+168;
        var $o200=__stackBase__+172;
        var $o205=__stackBase__+176;
        var $o210=__stackBase__+180;
        var $o215=__stackBase__+184;
        var $o220=__stackBase__+188;
        var $o225=__stackBase__+192;
        var $o230=__stackBase__+196;
        var $o235=__stackBase__+200;
        var $o240=__stackBase__+204;
        var $o245=__stackBase__+208;
        var $o250=__stackBase__+212;
        var $o255=__stackBase__+216;
        var $o260=__stackBase__+220;
        var $o265=__stackBase__+224;
        var $o270=__stackBase__+228;
        var $key=__stackBase__+232;
        var $key_n=__stackBase__+236;
        var $key_n2=__stackBase__+240;
        var $p1=__stackBase__+244;
        var $p2=__stackBase__+248;
        var $o289=__stackBase__+252;
        var $o298=__stackBase__+256;
        var $o303=__stackBase__+260;
        var $_alloca_point_=0;
        var $0=((_PyCursesWindow_Type+4)&4294967295); //@line 2738 "_cursesmodule.c"
        HEAP[$0]=_PyType_Type; //@line 2738 "_cursesmodule.c"
        HEAP[((_PyCurses_API_14301)&4294967295)]=_PyCursesWindow_Type; //@line 2741 "_cursesmodule.c"
        HEAP[((_PyCurses_API_14301+4)&4294967295)]=(FUNCTION_TABLE_OFFSET + 2); //@line 2742 "_cursesmodule.c"
        HEAP[((_PyCurses_API_14301+8)&4294967295)]=(FUNCTION_TABLE_OFFSET + 4); //@line 2743 "_cursesmodule.c"
        HEAP[((_PyCurses_API_14301+12)&4294967295)]=(FUNCTION_TABLE_OFFSET + 6); //@line 2744 "_cursesmodule.c"
        var $1=_Py_InitModule4(((__str350)&4294967295), _PyCurses_methods, 0, 0, 1013); //@line 2747 "_cursesmodule.c"
        HEAP[$m]=$1; //@line 2747 "_cursesmodule.c"
        var $2=HEAP[$m]; //@line 2748 "_cursesmodule.c"
        var $3=($2)==0; //@line 2748 "_cursesmodule.c"
        if ($3) { __label__ = 252; break; } else { __label__ = 1; break; } //@line 2748 "_cursesmodule.c"
      case 1: // $bb
        var $4=HEAP[$m]; //@line 2752 "_cursesmodule.c"
        var $5=_PyModule_GetDict($4); //@line 2752 "_cursesmodule.c"
        HEAP[$d]=$5; //@line 2752 "_cursesmodule.c"
        var $6=HEAP[$d]; //@line 2753 "_cursesmodule.c"
        var $7=($6)==0; //@line 2753 "_cursesmodule.c"
        if ($7) { __label__ = 252; break; } else { __label__ = 2; break; } //@line 2753 "_cursesmodule.c"
      case 2: // $bb1
        var $8=HEAP[$d]; //@line 2755 "_cursesmodule.c"
        HEAP[_ModDict]=$8; //@line 2755 "_cursesmodule.c"
        var $9=_PyCapsule_New(_PyCurses_API_14301, ((__str351)&4294967295), 0); //@line 2758 "_cursesmodule.c"
        HEAP[$c_api_object]=$9; //@line 2758 "_cursesmodule.c"
        var $10=HEAP[$d]; //@line 2759 "_cursesmodule.c"
        var $11=HEAP[$c_api_object]; //@line 2759 "_cursesmodule.c"
        var $12=_PyDict_SetItemString($10, ((__str352)&4294967295), $11); //@line 2759 "_cursesmodule.c"
        var $13=HEAP[$c_api_object]; //@line 2760 "_cursesmodule.c"
        var $14=(($13)&4294967295); //@line 2760 "_cursesmodule.c"
        var $15=HEAP[$14]; //@line 2760 "_cursesmodule.c"
        var $16=((($15) - 1)&4294967295); //@line 2760 "_cursesmodule.c"
        var $17=HEAP[$c_api_object]; //@line 2760 "_cursesmodule.c"
        var $18=(($17)&4294967295); //@line 2760 "_cursesmodule.c"
        HEAP[$18]=$16; //@line 2760 "_cursesmodule.c"
        var $19=HEAP[$c_api_object]; //@line 2760 "_cursesmodule.c"
        var $20=(($19)&4294967295); //@line 2760 "_cursesmodule.c"
        var $21=HEAP[$20]; //@line 2760 "_cursesmodule.c"
        var $22=((($21))|0)==0; //@line 2760 "_cursesmodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2760 "_cursesmodule.c"
      case 3: // $bb2
        var $23=HEAP[$c_api_object]; //@line 2760 "_cursesmodule.c"
        var $24=(($23+4)&4294967295); //@line 2760 "_cursesmodule.c"
        var $25=HEAP[$24]; //@line 2760 "_cursesmodule.c"
        var $26=(($25+24)&4294967295); //@line 2760 "_cursesmodule.c"
        var $27=HEAP[$26]; //@line 2760 "_cursesmodule.c"
        var $28=HEAP[$c_api_object]; //@line 2760 "_cursesmodule.c"
        FUNCTION_TABLE[$27]($28); //@line 2760 "_cursesmodule.c"
        __label__ = 4; break; //@line 2760 "_cursesmodule.c"
      case 4: // $bb3
        var $29=_PyErr_NewException(((__str353)&4294967295), 0, 0); //@line 2763 "_cursesmodule.c"
        HEAP[_PyCursesError]=$29; //@line 2763 "_cursesmodule.c"
        var $30=HEAP[_PyCursesError]; //@line 2764 "_cursesmodule.c"
        var $31=HEAP[$d]; //@line 2764 "_cursesmodule.c"
        var $32=_PyDict_SetItemString($31, ((__str354)&4294967295), $30); //@line 2764 "_cursesmodule.c"
        var $33=HEAP[_PyCursesVersion]; //@line 2767 "_cursesmodule.c"
        var $34=_PyString_FromString($33); //@line 2767 "_cursesmodule.c"
        HEAP[$v]=$34; //@line 2767 "_cursesmodule.c"
        var $35=HEAP[$d]; //@line 2768 "_cursesmodule.c"
        var $36=HEAP[$v]; //@line 2768 "_cursesmodule.c"
        var $37=_PyDict_SetItemString($35, ((__str355)&4294967295), $36); //@line 2768 "_cursesmodule.c"
        var $38=HEAP[$d]; //@line 2769 "_cursesmodule.c"
        var $39=HEAP[$v]; //@line 2769 "_cursesmodule.c"
        var $40=_PyDict_SetItemString($38, ((__str356)&4294967295), $39); //@line 2769 "_cursesmodule.c"
        var $41=HEAP[$v]; //@line 2770 "_cursesmodule.c"
        var $42=(($41)&4294967295); //@line 2770 "_cursesmodule.c"
        var $43=HEAP[$42]; //@line 2770 "_cursesmodule.c"
        var $44=((($43) - 1)&4294967295); //@line 2770 "_cursesmodule.c"
        var $45=HEAP[$v]; //@line 2770 "_cursesmodule.c"
        var $46=(($45)&4294967295); //@line 2770 "_cursesmodule.c"
        HEAP[$46]=$44; //@line 2770 "_cursesmodule.c"
        var $47=HEAP[$v]; //@line 2770 "_cursesmodule.c"
        var $48=(($47)&4294967295); //@line 2770 "_cursesmodule.c"
        var $49=HEAP[$48]; //@line 2770 "_cursesmodule.c"
        var $50=((($49))|0)==0; //@line 2770 "_cursesmodule.c"
        if ($50) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2770 "_cursesmodule.c"
      case 5: // $bb4
        var $51=HEAP[$v]; //@line 2770 "_cursesmodule.c"
        var $52=(($51+4)&4294967295); //@line 2770 "_cursesmodule.c"
        var $53=HEAP[$52]; //@line 2770 "_cursesmodule.c"
        var $54=(($53+24)&4294967295); //@line 2770 "_cursesmodule.c"
        var $55=HEAP[$54]; //@line 2770 "_cursesmodule.c"
        var $56=HEAP[$v]; //@line 2770 "_cursesmodule.c"
        FUNCTION_TABLE[$55]($56); //@line 2770 "_cursesmodule.c"
        __label__ = 6; break; //@line 2770 "_cursesmodule.c"
      case 6: // $bb5
        var $57=_PyInt_FromLong(-1); //@line 2772 "_cursesmodule.c"
        HEAP[$o]=$57; //@line 2772 "_cursesmodule.c"
        var $58=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $59=($58)!=0; //@line 2772 "_cursesmodule.c"
        if ($59) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2772 "_cursesmodule.c"
      case 7: // $bb6
        var $60=HEAP[_ModDict]; //@line 2772 "_cursesmodule.c"
        var $61=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $62=_PyDict_SetItemString($60, ((__str357)&4294967295), $61); //@line 2772 "_cursesmodule.c"
        var $63=((($62))|0)==0; //@line 2772 "_cursesmodule.c"
        if ($63) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2772 "_cursesmodule.c"
      case 8: // $bb7
        var $64=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $65=(($64)&4294967295); //@line 2772 "_cursesmodule.c"
        var $66=HEAP[$65]; //@line 2772 "_cursesmodule.c"
        var $67=((($66) - 1)&4294967295); //@line 2772 "_cursesmodule.c"
        var $68=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $69=(($68)&4294967295); //@line 2772 "_cursesmodule.c"
        HEAP[$69]=$67; //@line 2772 "_cursesmodule.c"
        var $70=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $71=(($70)&4294967295); //@line 2772 "_cursesmodule.c"
        var $72=HEAP[$71]; //@line 2772 "_cursesmodule.c"
        var $73=((($72))|0)==0; //@line 2772 "_cursesmodule.c"
        if ($73) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2772 "_cursesmodule.c"
      case 9: // $bb8
        var $74=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        var $75=(($74+4)&4294967295); //@line 2772 "_cursesmodule.c"
        var $76=HEAP[$75]; //@line 2772 "_cursesmodule.c"
        var $77=(($76+24)&4294967295); //@line 2772 "_cursesmodule.c"
        var $78=HEAP[$77]; //@line 2772 "_cursesmodule.c"
        var $79=HEAP[$o]; //@line 2772 "_cursesmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 2772 "_cursesmodule.c"
        __label__ = 10; break; //@line 2772 "_cursesmodule.c"
      case 10: // $bb9
        var $80=_PyInt_FromLong(0); //@line 2773 "_cursesmodule.c"
        HEAP[$o10]=$80; //@line 2773 "_cursesmodule.c"
        var $81=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $82=($81)!=0; //@line 2773 "_cursesmodule.c"
        if ($82) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 2773 "_cursesmodule.c"
      case 11: // $bb11
        var $83=HEAP[_ModDict]; //@line 2773 "_cursesmodule.c"
        var $84=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $85=_PyDict_SetItemString($83, ((__str358)&4294967295), $84); //@line 2773 "_cursesmodule.c"
        var $86=((($85))|0)==0; //@line 2773 "_cursesmodule.c"
        if ($86) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2773 "_cursesmodule.c"
      case 12: // $bb12
        var $87=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $88=(($87)&4294967295); //@line 2773 "_cursesmodule.c"
        var $89=HEAP[$88]; //@line 2773 "_cursesmodule.c"
        var $90=((($89) - 1)&4294967295); //@line 2773 "_cursesmodule.c"
        var $91=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $92=(($91)&4294967295); //@line 2773 "_cursesmodule.c"
        HEAP[$92]=$90; //@line 2773 "_cursesmodule.c"
        var $93=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $94=(($93)&4294967295); //@line 2773 "_cursesmodule.c"
        var $95=HEAP[$94]; //@line 2773 "_cursesmodule.c"
        var $96=((($95))|0)==0; //@line 2773 "_cursesmodule.c"
        if ($96) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2773 "_cursesmodule.c"
      case 13: // $bb13
        var $97=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        var $98=(($97+4)&4294967295); //@line 2773 "_cursesmodule.c"
        var $99=HEAP[$98]; //@line 2773 "_cursesmodule.c"
        var $100=(($99+24)&4294967295); //@line 2773 "_cursesmodule.c"
        var $101=HEAP[$100]; //@line 2773 "_cursesmodule.c"
        var $102=HEAP[$o10]; //@line 2773 "_cursesmodule.c"
        FUNCTION_TABLE[$101]($102); //@line 2773 "_cursesmodule.c"
        __label__ = 14; break; //@line 2773 "_cursesmodule.c"
      case 14: // $bb14
        var $103=_PyInt_FromLong(-256); //@line 2777 "_cursesmodule.c"
        HEAP[$o15]=$103; //@line 2777 "_cursesmodule.c"
        var $104=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $105=($104)!=0; //@line 2777 "_cursesmodule.c"
        if ($105) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 2777 "_cursesmodule.c"
      case 15: // $bb16
        var $106=HEAP[_ModDict]; //@line 2777 "_cursesmodule.c"
        var $107=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $108=_PyDict_SetItemString($106, ((__str359)&4294967295), $107); //@line 2777 "_cursesmodule.c"
        var $109=((($108))|0)==0; //@line 2777 "_cursesmodule.c"
        if ($109) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2777 "_cursesmodule.c"
      case 16: // $bb17
        var $110=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $111=(($110)&4294967295); //@line 2777 "_cursesmodule.c"
        var $112=HEAP[$111]; //@line 2777 "_cursesmodule.c"
        var $113=((($112) - 1)&4294967295); //@line 2777 "_cursesmodule.c"
        var $114=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $115=(($114)&4294967295); //@line 2777 "_cursesmodule.c"
        HEAP[$115]=$113; //@line 2777 "_cursesmodule.c"
        var $116=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $117=(($116)&4294967295); //@line 2777 "_cursesmodule.c"
        var $118=HEAP[$117]; //@line 2777 "_cursesmodule.c"
        var $119=((($118))|0)==0; //@line 2777 "_cursesmodule.c"
        if ($119) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2777 "_cursesmodule.c"
      case 17: // $bb18
        var $120=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        var $121=(($120+4)&4294967295); //@line 2777 "_cursesmodule.c"
        var $122=HEAP[$121]; //@line 2777 "_cursesmodule.c"
        var $123=(($122+24)&4294967295); //@line 2777 "_cursesmodule.c"
        var $124=HEAP[$123]; //@line 2777 "_cursesmodule.c"
        var $125=HEAP[$o15]; //@line 2777 "_cursesmodule.c"
        FUNCTION_TABLE[$124]($125); //@line 2777 "_cursesmodule.c"
        __label__ = 18; break; //@line 2777 "_cursesmodule.c"
      case 18: // $bb19
        var $126=_PyInt_FromLong(0); //@line 2778 "_cursesmodule.c"
        HEAP[$o20]=$126; //@line 2778 "_cursesmodule.c"
        var $127=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $128=($127)!=0; //@line 2778 "_cursesmodule.c"
        if ($128) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 2778 "_cursesmodule.c"
      case 19: // $bb21
        var $129=HEAP[_ModDict]; //@line 2778 "_cursesmodule.c"
        var $130=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $131=_PyDict_SetItemString($129, ((__str360)&4294967295), $130); //@line 2778 "_cursesmodule.c"
        var $132=((($131))|0)==0; //@line 2778 "_cursesmodule.c"
        if ($132) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 2778 "_cursesmodule.c"
      case 20: // $bb22
        var $133=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $134=(($133)&4294967295); //@line 2778 "_cursesmodule.c"
        var $135=HEAP[$134]; //@line 2778 "_cursesmodule.c"
        var $136=((($135) - 1)&4294967295); //@line 2778 "_cursesmodule.c"
        var $137=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $138=(($137)&4294967295); //@line 2778 "_cursesmodule.c"
        HEAP[$138]=$136; //@line 2778 "_cursesmodule.c"
        var $139=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $140=(($139)&4294967295); //@line 2778 "_cursesmodule.c"
        var $141=HEAP[$140]; //@line 2778 "_cursesmodule.c"
        var $142=((($141))|0)==0; //@line 2778 "_cursesmodule.c"
        if ($142) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2778 "_cursesmodule.c"
      case 21: // $bb23
        var $143=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        var $144=(($143+4)&4294967295); //@line 2778 "_cursesmodule.c"
        var $145=HEAP[$144]; //@line 2778 "_cursesmodule.c"
        var $146=(($145+24)&4294967295); //@line 2778 "_cursesmodule.c"
        var $147=HEAP[$146]; //@line 2778 "_cursesmodule.c"
        var $148=HEAP[$o20]; //@line 2778 "_cursesmodule.c"
        FUNCTION_TABLE[$147]($148); //@line 2778 "_cursesmodule.c"
        __label__ = 22; break; //@line 2778 "_cursesmodule.c"
      case 22: // $bb24
        var $149=_PyInt_FromLong(65536); //@line 2779 "_cursesmodule.c"
        HEAP[$o25]=$149; //@line 2779 "_cursesmodule.c"
        var $150=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $151=($150)!=0; //@line 2779 "_cursesmodule.c"
        if ($151) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 2779 "_cursesmodule.c"
      case 23: // $bb26
        var $152=HEAP[_ModDict]; //@line 2779 "_cursesmodule.c"
        var $153=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $154=_PyDict_SetItemString($152, ((__str361)&4294967295), $153); //@line 2779 "_cursesmodule.c"
        var $155=((($154))|0)==0; //@line 2779 "_cursesmodule.c"
        if ($155) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 2779 "_cursesmodule.c"
      case 24: // $bb27
        var $156=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $157=(($156)&4294967295); //@line 2779 "_cursesmodule.c"
        var $158=HEAP[$157]; //@line 2779 "_cursesmodule.c"
        var $159=((($158) - 1)&4294967295); //@line 2779 "_cursesmodule.c"
        var $160=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $161=(($160)&4294967295); //@line 2779 "_cursesmodule.c"
        HEAP[$161]=$159; //@line 2779 "_cursesmodule.c"
        var $162=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $163=(($162)&4294967295); //@line 2779 "_cursesmodule.c"
        var $164=HEAP[$163]; //@line 2779 "_cursesmodule.c"
        var $165=((($164))|0)==0; //@line 2779 "_cursesmodule.c"
        if ($165) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2779 "_cursesmodule.c"
      case 25: // $bb28
        var $166=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        var $167=(($166+4)&4294967295); //@line 2779 "_cursesmodule.c"
        var $168=HEAP[$167]; //@line 2779 "_cursesmodule.c"
        var $169=(($168+24)&4294967295); //@line 2779 "_cursesmodule.c"
        var $170=HEAP[$169]; //@line 2779 "_cursesmodule.c"
        var $171=HEAP[$o25]; //@line 2779 "_cursesmodule.c"
        FUNCTION_TABLE[$170]($171); //@line 2779 "_cursesmodule.c"
        __label__ = 26; break; //@line 2779 "_cursesmodule.c"
      case 26: // $bb29
        var $172=_PyInt_FromLong(131072); //@line 2780 "_cursesmodule.c"
        HEAP[$o30]=$172; //@line 2780 "_cursesmodule.c"
        var $173=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $174=($173)!=0; //@line 2780 "_cursesmodule.c"
        if ($174) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 2780 "_cursesmodule.c"
      case 27: // $bb31
        var $175=HEAP[_ModDict]; //@line 2780 "_cursesmodule.c"
        var $176=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $177=_PyDict_SetItemString($175, ((__str362)&4294967295), $176); //@line 2780 "_cursesmodule.c"
        var $178=((($177))|0)==0; //@line 2780 "_cursesmodule.c"
        if ($178) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 2780 "_cursesmodule.c"
      case 28: // $bb32
        var $179=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $180=(($179)&4294967295); //@line 2780 "_cursesmodule.c"
        var $181=HEAP[$180]; //@line 2780 "_cursesmodule.c"
        var $182=((($181) - 1)&4294967295); //@line 2780 "_cursesmodule.c"
        var $183=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $184=(($183)&4294967295); //@line 2780 "_cursesmodule.c"
        HEAP[$184]=$182; //@line 2780 "_cursesmodule.c"
        var $185=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $186=(($185)&4294967295); //@line 2780 "_cursesmodule.c"
        var $187=HEAP[$186]; //@line 2780 "_cursesmodule.c"
        var $188=((($187))|0)==0; //@line 2780 "_cursesmodule.c"
        if ($188) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2780 "_cursesmodule.c"
      case 29: // $bb33
        var $189=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        var $190=(($189+4)&4294967295); //@line 2780 "_cursesmodule.c"
        var $191=HEAP[$190]; //@line 2780 "_cursesmodule.c"
        var $192=(($191+24)&4294967295); //@line 2780 "_cursesmodule.c"
        var $193=HEAP[$192]; //@line 2780 "_cursesmodule.c"
        var $194=HEAP[$o30]; //@line 2780 "_cursesmodule.c"
        FUNCTION_TABLE[$193]($194); //@line 2780 "_cursesmodule.c"
        __label__ = 30; break; //@line 2780 "_cursesmodule.c"
      case 30: // $bb34
        var $195=_PyInt_FromLong(262144); //@line 2781 "_cursesmodule.c"
        HEAP[$o35]=$195; //@line 2781 "_cursesmodule.c"
        var $196=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $197=($196)!=0; //@line 2781 "_cursesmodule.c"
        if ($197) { __label__ = 31; break; } else { __label__ = 34; break; } //@line 2781 "_cursesmodule.c"
      case 31: // $bb36
        var $198=HEAP[_ModDict]; //@line 2781 "_cursesmodule.c"
        var $199=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $200=_PyDict_SetItemString($198, ((__str363)&4294967295), $199); //@line 2781 "_cursesmodule.c"
        var $201=((($200))|0)==0; //@line 2781 "_cursesmodule.c"
        if ($201) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 2781 "_cursesmodule.c"
      case 32: // $bb37
        var $202=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $203=(($202)&4294967295); //@line 2781 "_cursesmodule.c"
        var $204=HEAP[$203]; //@line 2781 "_cursesmodule.c"
        var $205=((($204) - 1)&4294967295); //@line 2781 "_cursesmodule.c"
        var $206=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $207=(($206)&4294967295); //@line 2781 "_cursesmodule.c"
        HEAP[$207]=$205; //@line 2781 "_cursesmodule.c"
        var $208=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $209=(($208)&4294967295); //@line 2781 "_cursesmodule.c"
        var $210=HEAP[$209]; //@line 2781 "_cursesmodule.c"
        var $211=((($210))|0)==0; //@line 2781 "_cursesmodule.c"
        if ($211) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 2781 "_cursesmodule.c"
      case 33: // $bb38
        var $212=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        var $213=(($212+4)&4294967295); //@line 2781 "_cursesmodule.c"
        var $214=HEAP[$213]; //@line 2781 "_cursesmodule.c"
        var $215=(($214+24)&4294967295); //@line 2781 "_cursesmodule.c"
        var $216=HEAP[$215]; //@line 2781 "_cursesmodule.c"
        var $217=HEAP[$o35]; //@line 2781 "_cursesmodule.c"
        FUNCTION_TABLE[$216]($217); //@line 2781 "_cursesmodule.c"
        __label__ = 34; break; //@line 2781 "_cursesmodule.c"
      case 34: // $bb39
        var $218=_PyInt_FromLong(524288); //@line 2782 "_cursesmodule.c"
        HEAP[$o40]=$218; //@line 2782 "_cursesmodule.c"
        var $219=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $220=($219)!=0; //@line 2782 "_cursesmodule.c"
        if ($220) { __label__ = 35; break; } else { __label__ = 38; break; } //@line 2782 "_cursesmodule.c"
      case 35: // $bb41
        var $221=HEAP[_ModDict]; //@line 2782 "_cursesmodule.c"
        var $222=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $223=_PyDict_SetItemString($221, ((__str364)&4294967295), $222); //@line 2782 "_cursesmodule.c"
        var $224=((($223))|0)==0; //@line 2782 "_cursesmodule.c"
        if ($224) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 2782 "_cursesmodule.c"
      case 36: // $bb42
        var $225=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $226=(($225)&4294967295); //@line 2782 "_cursesmodule.c"
        var $227=HEAP[$226]; //@line 2782 "_cursesmodule.c"
        var $228=((($227) - 1)&4294967295); //@line 2782 "_cursesmodule.c"
        var $229=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $230=(($229)&4294967295); //@line 2782 "_cursesmodule.c"
        HEAP[$230]=$228; //@line 2782 "_cursesmodule.c"
        var $231=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $232=(($231)&4294967295); //@line 2782 "_cursesmodule.c"
        var $233=HEAP[$232]; //@line 2782 "_cursesmodule.c"
        var $234=((($233))|0)==0; //@line 2782 "_cursesmodule.c"
        if ($234) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2782 "_cursesmodule.c"
      case 37: // $bb43
        var $235=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        var $236=(($235+4)&4294967295); //@line 2782 "_cursesmodule.c"
        var $237=HEAP[$236]; //@line 2782 "_cursesmodule.c"
        var $238=(($237+24)&4294967295); //@line 2782 "_cursesmodule.c"
        var $239=HEAP[$238]; //@line 2782 "_cursesmodule.c"
        var $240=HEAP[$o40]; //@line 2782 "_cursesmodule.c"
        FUNCTION_TABLE[$239]($240); //@line 2782 "_cursesmodule.c"
        __label__ = 38; break; //@line 2782 "_cursesmodule.c"
      case 38: // $bb44
        var $241=_PyInt_FromLong(1048576); //@line 2783 "_cursesmodule.c"
        HEAP[$o45]=$241; //@line 2783 "_cursesmodule.c"
        var $242=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $243=($242)!=0; //@line 2783 "_cursesmodule.c"
        if ($243) { __label__ = 39; break; } else { __label__ = 42; break; } //@line 2783 "_cursesmodule.c"
      case 39: // $bb46
        var $244=HEAP[_ModDict]; //@line 2783 "_cursesmodule.c"
        var $245=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $246=_PyDict_SetItemString($244, ((__str365)&4294967295), $245); //@line 2783 "_cursesmodule.c"
        var $247=((($246))|0)==0; //@line 2783 "_cursesmodule.c"
        if ($247) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 2783 "_cursesmodule.c"
      case 40: // $bb47
        var $248=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $249=(($248)&4294967295); //@line 2783 "_cursesmodule.c"
        var $250=HEAP[$249]; //@line 2783 "_cursesmodule.c"
        var $251=((($250) - 1)&4294967295); //@line 2783 "_cursesmodule.c"
        var $252=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $253=(($252)&4294967295); //@line 2783 "_cursesmodule.c"
        HEAP[$253]=$251; //@line 2783 "_cursesmodule.c"
        var $254=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $255=(($254)&4294967295); //@line 2783 "_cursesmodule.c"
        var $256=HEAP[$255]; //@line 2783 "_cursesmodule.c"
        var $257=((($256))|0)==0; //@line 2783 "_cursesmodule.c"
        if ($257) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 2783 "_cursesmodule.c"
      case 41: // $bb48
        var $258=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        var $259=(($258+4)&4294967295); //@line 2783 "_cursesmodule.c"
        var $260=HEAP[$259]; //@line 2783 "_cursesmodule.c"
        var $261=(($260+24)&4294967295); //@line 2783 "_cursesmodule.c"
        var $262=HEAP[$261]; //@line 2783 "_cursesmodule.c"
        var $263=HEAP[$o45]; //@line 2783 "_cursesmodule.c"
        FUNCTION_TABLE[$262]($263); //@line 2783 "_cursesmodule.c"
        __label__ = 42; break; //@line 2783 "_cursesmodule.c"
      case 42: // $bb49
        var $264=_PyInt_FromLong(2097152); //@line 2784 "_cursesmodule.c"
        HEAP[$o50]=$264; //@line 2784 "_cursesmodule.c"
        var $265=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $266=($265)!=0; //@line 2784 "_cursesmodule.c"
        if ($266) { __label__ = 43; break; } else { __label__ = 46; break; } //@line 2784 "_cursesmodule.c"
      case 43: // $bb51
        var $267=HEAP[_ModDict]; //@line 2784 "_cursesmodule.c"
        var $268=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $269=_PyDict_SetItemString($267, ((__str366)&4294967295), $268); //@line 2784 "_cursesmodule.c"
        var $270=((($269))|0)==0; //@line 2784 "_cursesmodule.c"
        if ($270) { __label__ = 44; break; } else { __label__ = 46; break; } //@line 2784 "_cursesmodule.c"
      case 44: // $bb52
        var $271=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $272=(($271)&4294967295); //@line 2784 "_cursesmodule.c"
        var $273=HEAP[$272]; //@line 2784 "_cursesmodule.c"
        var $274=((($273) - 1)&4294967295); //@line 2784 "_cursesmodule.c"
        var $275=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $276=(($275)&4294967295); //@line 2784 "_cursesmodule.c"
        HEAP[$276]=$274; //@line 2784 "_cursesmodule.c"
        var $277=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $278=(($277)&4294967295); //@line 2784 "_cursesmodule.c"
        var $279=HEAP[$278]; //@line 2784 "_cursesmodule.c"
        var $280=((($279))|0)==0; //@line 2784 "_cursesmodule.c"
        if ($280) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 2784 "_cursesmodule.c"
      case 45: // $bb53
        var $281=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        var $282=(($281+4)&4294967295); //@line 2784 "_cursesmodule.c"
        var $283=HEAP[$282]; //@line 2784 "_cursesmodule.c"
        var $284=(($283+24)&4294967295); //@line 2784 "_cursesmodule.c"
        var $285=HEAP[$284]; //@line 2784 "_cursesmodule.c"
        var $286=HEAP[$o50]; //@line 2784 "_cursesmodule.c"
        FUNCTION_TABLE[$285]($286); //@line 2784 "_cursesmodule.c"
        __label__ = 46; break; //@line 2784 "_cursesmodule.c"
      case 46: // $bb54
        var $287=_PyInt_FromLong(4194304); //@line 2785 "_cursesmodule.c"
        HEAP[$o55]=$287; //@line 2785 "_cursesmodule.c"
        var $288=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $289=($288)!=0; //@line 2785 "_cursesmodule.c"
        if ($289) { __label__ = 47; break; } else { __label__ = 50; break; } //@line 2785 "_cursesmodule.c"
      case 47: // $bb56
        var $290=HEAP[_ModDict]; //@line 2785 "_cursesmodule.c"
        var $291=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $292=_PyDict_SetItemString($290, ((__str367)&4294967295), $291); //@line 2785 "_cursesmodule.c"
        var $293=((($292))|0)==0; //@line 2785 "_cursesmodule.c"
        if ($293) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 2785 "_cursesmodule.c"
      case 48: // $bb57
        var $294=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $295=(($294)&4294967295); //@line 2785 "_cursesmodule.c"
        var $296=HEAP[$295]; //@line 2785 "_cursesmodule.c"
        var $297=((($296) - 1)&4294967295); //@line 2785 "_cursesmodule.c"
        var $298=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $299=(($298)&4294967295); //@line 2785 "_cursesmodule.c"
        HEAP[$299]=$297; //@line 2785 "_cursesmodule.c"
        var $300=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $301=(($300)&4294967295); //@line 2785 "_cursesmodule.c"
        var $302=HEAP[$301]; //@line 2785 "_cursesmodule.c"
        var $303=((($302))|0)==0; //@line 2785 "_cursesmodule.c"
        if ($303) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 2785 "_cursesmodule.c"
      case 49: // $bb58
        var $304=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        var $305=(($304+4)&4294967295); //@line 2785 "_cursesmodule.c"
        var $306=HEAP[$305]; //@line 2785 "_cursesmodule.c"
        var $307=(($306+24)&4294967295); //@line 2785 "_cursesmodule.c"
        var $308=HEAP[$307]; //@line 2785 "_cursesmodule.c"
        var $309=HEAP[$o55]; //@line 2785 "_cursesmodule.c"
        FUNCTION_TABLE[$308]($309); //@line 2785 "_cursesmodule.c"
        __label__ = 50; break; //@line 2785 "_cursesmodule.c"
      case 50: // $bb59
        var $310=_PyInt_FromLong(8388608); //@line 2787 "_cursesmodule.c"
        HEAP[$o60]=$310; //@line 2787 "_cursesmodule.c"
        var $311=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $312=($311)!=0; //@line 2787 "_cursesmodule.c"
        if ($312) { __label__ = 51; break; } else { __label__ = 54; break; } //@line 2787 "_cursesmodule.c"
      case 51: // $bb61
        var $313=HEAP[_ModDict]; //@line 2787 "_cursesmodule.c"
        var $314=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $315=_PyDict_SetItemString($313, ((__str368)&4294967295), $314); //@line 2787 "_cursesmodule.c"
        var $316=((($315))|0)==0; //@line 2787 "_cursesmodule.c"
        if ($316) { __label__ = 52; break; } else { __label__ = 54; break; } //@line 2787 "_cursesmodule.c"
      case 52: // $bb62
        var $317=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $318=(($317)&4294967295); //@line 2787 "_cursesmodule.c"
        var $319=HEAP[$318]; //@line 2787 "_cursesmodule.c"
        var $320=((($319) - 1)&4294967295); //@line 2787 "_cursesmodule.c"
        var $321=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $322=(($321)&4294967295); //@line 2787 "_cursesmodule.c"
        HEAP[$322]=$320; //@line 2787 "_cursesmodule.c"
        var $323=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $324=(($323)&4294967295); //@line 2787 "_cursesmodule.c"
        var $325=HEAP[$324]; //@line 2787 "_cursesmodule.c"
        var $326=((($325))|0)==0; //@line 2787 "_cursesmodule.c"
        if ($326) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 2787 "_cursesmodule.c"
      case 53: // $bb63
        var $327=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        var $328=(($327+4)&4294967295); //@line 2787 "_cursesmodule.c"
        var $329=HEAP[$328]; //@line 2787 "_cursesmodule.c"
        var $330=(($329+24)&4294967295); //@line 2787 "_cursesmodule.c"
        var $331=HEAP[$330]; //@line 2787 "_cursesmodule.c"
        var $332=HEAP[$o60]; //@line 2787 "_cursesmodule.c"
        FUNCTION_TABLE[$331]($332); //@line 2787 "_cursesmodule.c"
        __label__ = 54; break; //@line 2787 "_cursesmodule.c"
      case 54: // $bb64
        var $333=_PyInt_FromLong(16777216); //@line 2789 "_cursesmodule.c"
        HEAP[$o65]=$333; //@line 2789 "_cursesmodule.c"
        var $334=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $335=($334)!=0; //@line 2789 "_cursesmodule.c"
        if ($335) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 2789 "_cursesmodule.c"
      case 55: // $bb66
        var $336=HEAP[_ModDict]; //@line 2789 "_cursesmodule.c"
        var $337=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $338=_PyDict_SetItemString($336, ((__str369)&4294967295), $337); //@line 2789 "_cursesmodule.c"
        var $339=((($338))|0)==0; //@line 2789 "_cursesmodule.c"
        if ($339) { __label__ = 56; break; } else { __label__ = 58; break; } //@line 2789 "_cursesmodule.c"
      case 56: // $bb67
        var $340=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $341=(($340)&4294967295); //@line 2789 "_cursesmodule.c"
        var $342=HEAP[$341]; //@line 2789 "_cursesmodule.c"
        var $343=((($342) - 1)&4294967295); //@line 2789 "_cursesmodule.c"
        var $344=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $345=(($344)&4294967295); //@line 2789 "_cursesmodule.c"
        HEAP[$345]=$343; //@line 2789 "_cursesmodule.c"
        var $346=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $347=(($346)&4294967295); //@line 2789 "_cursesmodule.c"
        var $348=HEAP[$347]; //@line 2789 "_cursesmodule.c"
        var $349=((($348))|0)==0; //@line 2789 "_cursesmodule.c"
        if ($349) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 2789 "_cursesmodule.c"
      case 57: // $bb68
        var $350=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        var $351=(($350+4)&4294967295); //@line 2789 "_cursesmodule.c"
        var $352=HEAP[$351]; //@line 2789 "_cursesmodule.c"
        var $353=(($352+24)&4294967295); //@line 2789 "_cursesmodule.c"
        var $354=HEAP[$353]; //@line 2789 "_cursesmodule.c"
        var $355=HEAP[$o65]; //@line 2789 "_cursesmodule.c"
        FUNCTION_TABLE[$354]($355); //@line 2789 "_cursesmodule.c"
        __label__ = 58; break; //@line 2789 "_cursesmodule.c"
      case 58: // $bb69
        var $356=_PyInt_FromLong(255); //@line 2790 "_cursesmodule.c"
        HEAP[$o70]=$356; //@line 2790 "_cursesmodule.c"
        var $357=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $358=($357)!=0; //@line 2790 "_cursesmodule.c"
        if ($358) { __label__ = 59; break; } else { __label__ = 62; break; } //@line 2790 "_cursesmodule.c"
      case 59: // $bb71
        var $359=HEAP[_ModDict]; //@line 2790 "_cursesmodule.c"
        var $360=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $361=_PyDict_SetItemString($359, ((__str370)&4294967295), $360); //@line 2790 "_cursesmodule.c"
        var $362=((($361))|0)==0; //@line 2790 "_cursesmodule.c"
        if ($362) { __label__ = 60; break; } else { __label__ = 62; break; } //@line 2790 "_cursesmodule.c"
      case 60: // $bb72
        var $363=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $364=(($363)&4294967295); //@line 2790 "_cursesmodule.c"
        var $365=HEAP[$364]; //@line 2790 "_cursesmodule.c"
        var $366=((($365) - 1)&4294967295); //@line 2790 "_cursesmodule.c"
        var $367=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $368=(($367)&4294967295); //@line 2790 "_cursesmodule.c"
        HEAP[$368]=$366; //@line 2790 "_cursesmodule.c"
        var $369=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $370=(($369)&4294967295); //@line 2790 "_cursesmodule.c"
        var $371=HEAP[$370]; //@line 2790 "_cursesmodule.c"
        var $372=((($371))|0)==0; //@line 2790 "_cursesmodule.c"
        if ($372) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 2790 "_cursesmodule.c"
      case 61: // $bb73
        var $373=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        var $374=(($373+4)&4294967295); //@line 2790 "_cursesmodule.c"
        var $375=HEAP[$374]; //@line 2790 "_cursesmodule.c"
        var $376=(($375+24)&4294967295); //@line 2790 "_cursesmodule.c"
        var $377=HEAP[$376]; //@line 2790 "_cursesmodule.c"
        var $378=HEAP[$o70]; //@line 2790 "_cursesmodule.c"
        FUNCTION_TABLE[$377]($378); //@line 2790 "_cursesmodule.c"
        __label__ = 62; break; //@line 2790 "_cursesmodule.c"
      case 62: // $bb74
        var $379=_PyInt_FromLong(65280); //@line 2791 "_cursesmodule.c"
        HEAP[$o75]=$379; //@line 2791 "_cursesmodule.c"
        var $380=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $381=($380)!=0; //@line 2791 "_cursesmodule.c"
        if ($381) { __label__ = 63; break; } else { __label__ = 66; break; } //@line 2791 "_cursesmodule.c"
      case 63: // $bb76
        var $382=HEAP[_ModDict]; //@line 2791 "_cursesmodule.c"
        var $383=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $384=_PyDict_SetItemString($382, ((__str371)&4294967295), $383); //@line 2791 "_cursesmodule.c"
        var $385=((($384))|0)==0; //@line 2791 "_cursesmodule.c"
        if ($385) { __label__ = 64; break; } else { __label__ = 66; break; } //@line 2791 "_cursesmodule.c"
      case 64: // $bb77
        var $386=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $387=(($386)&4294967295); //@line 2791 "_cursesmodule.c"
        var $388=HEAP[$387]; //@line 2791 "_cursesmodule.c"
        var $389=((($388) - 1)&4294967295); //@line 2791 "_cursesmodule.c"
        var $390=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $391=(($390)&4294967295); //@line 2791 "_cursesmodule.c"
        HEAP[$391]=$389; //@line 2791 "_cursesmodule.c"
        var $392=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $393=(($392)&4294967295); //@line 2791 "_cursesmodule.c"
        var $394=HEAP[$393]; //@line 2791 "_cursesmodule.c"
        var $395=((($394))|0)==0; //@line 2791 "_cursesmodule.c"
        if ($395) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 2791 "_cursesmodule.c"
      case 65: // $bb78
        var $396=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        var $397=(($396+4)&4294967295); //@line 2791 "_cursesmodule.c"
        var $398=HEAP[$397]; //@line 2791 "_cursesmodule.c"
        var $399=(($398+24)&4294967295); //@line 2791 "_cursesmodule.c"
        var $400=HEAP[$399]; //@line 2791 "_cursesmodule.c"
        var $401=HEAP[$o75]; //@line 2791 "_cursesmodule.c"
        FUNCTION_TABLE[$400]($401); //@line 2791 "_cursesmodule.c"
        __label__ = 66; break; //@line 2791 "_cursesmodule.c"
      case 66: // $bb79
        var $402=_PyInt_FromLong(33554432); //@line 2795 "_cursesmodule.c"
        HEAP[$o80]=$402; //@line 2795 "_cursesmodule.c"
        var $403=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $404=($403)!=0; //@line 2795 "_cursesmodule.c"
        if ($404) { __label__ = 67; break; } else { __label__ = 70; break; } //@line 2795 "_cursesmodule.c"
      case 67: // $bb81
        var $405=HEAP[_ModDict]; //@line 2795 "_cursesmodule.c"
        var $406=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $407=_PyDict_SetItemString($405, ((__str372)&4294967295), $406); //@line 2795 "_cursesmodule.c"
        var $408=((($407))|0)==0; //@line 2795 "_cursesmodule.c"
        if ($408) { __label__ = 68; break; } else { __label__ = 70; break; } //@line 2795 "_cursesmodule.c"
      case 68: // $bb82
        var $409=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $410=(($409)&4294967295); //@line 2795 "_cursesmodule.c"
        var $411=HEAP[$410]; //@line 2795 "_cursesmodule.c"
        var $412=((($411) - 1)&4294967295); //@line 2795 "_cursesmodule.c"
        var $413=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $414=(($413)&4294967295); //@line 2795 "_cursesmodule.c"
        HEAP[$414]=$412; //@line 2795 "_cursesmodule.c"
        var $415=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $416=(($415)&4294967295); //@line 2795 "_cursesmodule.c"
        var $417=HEAP[$416]; //@line 2795 "_cursesmodule.c"
        var $418=((($417))|0)==0; //@line 2795 "_cursesmodule.c"
        if ($418) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 2795 "_cursesmodule.c"
      case 69: // $bb83
        var $419=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        var $420=(($419+4)&4294967295); //@line 2795 "_cursesmodule.c"
        var $421=HEAP[$420]; //@line 2795 "_cursesmodule.c"
        var $422=(($421+24)&4294967295); //@line 2795 "_cursesmodule.c"
        var $423=HEAP[$422]; //@line 2795 "_cursesmodule.c"
        var $424=HEAP[$o80]; //@line 2795 "_cursesmodule.c"
        FUNCTION_TABLE[$423]($424); //@line 2795 "_cursesmodule.c"
        __label__ = 70; break; //@line 2795 "_cursesmodule.c"
      case 70: // $bb84
        var $425=_PyInt_FromLong(67108864); //@line 2798 "_cursesmodule.c"
        HEAP[$o85]=$425; //@line 2798 "_cursesmodule.c"
        var $426=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $427=($426)!=0; //@line 2798 "_cursesmodule.c"
        if ($427) { __label__ = 71; break; } else { __label__ = 74; break; } //@line 2798 "_cursesmodule.c"
      case 71: // $bb86
        var $428=HEAP[_ModDict]; //@line 2798 "_cursesmodule.c"
        var $429=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $430=_PyDict_SetItemString($428, ((__str373)&4294967295), $429); //@line 2798 "_cursesmodule.c"
        var $431=((($430))|0)==0; //@line 2798 "_cursesmodule.c"
        if ($431) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 2798 "_cursesmodule.c"
      case 72: // $bb87
        var $432=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $433=(($432)&4294967295); //@line 2798 "_cursesmodule.c"
        var $434=HEAP[$433]; //@line 2798 "_cursesmodule.c"
        var $435=((($434) - 1)&4294967295); //@line 2798 "_cursesmodule.c"
        var $436=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $437=(($436)&4294967295); //@line 2798 "_cursesmodule.c"
        HEAP[$437]=$435; //@line 2798 "_cursesmodule.c"
        var $438=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $439=(($438)&4294967295); //@line 2798 "_cursesmodule.c"
        var $440=HEAP[$439]; //@line 2798 "_cursesmodule.c"
        var $441=((($440))|0)==0; //@line 2798 "_cursesmodule.c"
        if ($441) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 2798 "_cursesmodule.c"
      case 73: // $bb88
        var $442=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        var $443=(($442+4)&4294967295); //@line 2798 "_cursesmodule.c"
        var $444=HEAP[$443]; //@line 2798 "_cursesmodule.c"
        var $445=(($444+24)&4294967295); //@line 2798 "_cursesmodule.c"
        var $446=HEAP[$445]; //@line 2798 "_cursesmodule.c"
        var $447=HEAP[$o85]; //@line 2798 "_cursesmodule.c"
        FUNCTION_TABLE[$446]($447); //@line 2798 "_cursesmodule.c"
        __label__ = 74; break; //@line 2798 "_cursesmodule.c"
      case 74: // $bb89
        var $448=_PyInt_FromLong(134217728); //@line 2801 "_cursesmodule.c"
        HEAP[$o90]=$448; //@line 2801 "_cursesmodule.c"
        var $449=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $450=($449)!=0; //@line 2801 "_cursesmodule.c"
        if ($450) { __label__ = 75; break; } else { __label__ = 78; break; } //@line 2801 "_cursesmodule.c"
      case 75: // $bb91
        var $451=HEAP[_ModDict]; //@line 2801 "_cursesmodule.c"
        var $452=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $453=_PyDict_SetItemString($451, ((__str374)&4294967295), $452); //@line 2801 "_cursesmodule.c"
        var $454=((($453))|0)==0; //@line 2801 "_cursesmodule.c"
        if ($454) { __label__ = 76; break; } else { __label__ = 78; break; } //@line 2801 "_cursesmodule.c"
      case 76: // $bb92
        var $455=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $456=(($455)&4294967295); //@line 2801 "_cursesmodule.c"
        var $457=HEAP[$456]; //@line 2801 "_cursesmodule.c"
        var $458=((($457) - 1)&4294967295); //@line 2801 "_cursesmodule.c"
        var $459=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $460=(($459)&4294967295); //@line 2801 "_cursesmodule.c"
        HEAP[$460]=$458; //@line 2801 "_cursesmodule.c"
        var $461=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $462=(($461)&4294967295); //@line 2801 "_cursesmodule.c"
        var $463=HEAP[$462]; //@line 2801 "_cursesmodule.c"
        var $464=((($463))|0)==0; //@line 2801 "_cursesmodule.c"
        if ($464) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 2801 "_cursesmodule.c"
      case 77: // $bb93
        var $465=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        var $466=(($465+4)&4294967295); //@line 2801 "_cursesmodule.c"
        var $467=HEAP[$466]; //@line 2801 "_cursesmodule.c"
        var $468=(($467+24)&4294967295); //@line 2801 "_cursesmodule.c"
        var $469=HEAP[$468]; //@line 2801 "_cursesmodule.c"
        var $470=HEAP[$o90]; //@line 2801 "_cursesmodule.c"
        FUNCTION_TABLE[$469]($470); //@line 2801 "_cursesmodule.c"
        __label__ = 78; break; //@line 2801 "_cursesmodule.c"
      case 78: // $bb94
        var $471=_PyInt_FromLong(268435456); //@line 2804 "_cursesmodule.c"
        HEAP[$o95]=$471; //@line 2804 "_cursesmodule.c"
        var $472=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $473=($472)!=0; //@line 2804 "_cursesmodule.c"
        if ($473) { __label__ = 79; break; } else { __label__ = 82; break; } //@line 2804 "_cursesmodule.c"
      case 79: // $bb96
        var $474=HEAP[_ModDict]; //@line 2804 "_cursesmodule.c"
        var $475=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $476=_PyDict_SetItemString($474, ((__str375)&4294967295), $475); //@line 2804 "_cursesmodule.c"
        var $477=((($476))|0)==0; //@line 2804 "_cursesmodule.c"
        if ($477) { __label__ = 80; break; } else { __label__ = 82; break; } //@line 2804 "_cursesmodule.c"
      case 80: // $bb97
        var $478=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $479=(($478)&4294967295); //@line 2804 "_cursesmodule.c"
        var $480=HEAP[$479]; //@line 2804 "_cursesmodule.c"
        var $481=((($480) - 1)&4294967295); //@line 2804 "_cursesmodule.c"
        var $482=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $483=(($482)&4294967295); //@line 2804 "_cursesmodule.c"
        HEAP[$483]=$481; //@line 2804 "_cursesmodule.c"
        var $484=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $485=(($484)&4294967295); //@line 2804 "_cursesmodule.c"
        var $486=HEAP[$485]; //@line 2804 "_cursesmodule.c"
        var $487=((($486))|0)==0; //@line 2804 "_cursesmodule.c"
        if ($487) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 2804 "_cursesmodule.c"
      case 81: // $bb98
        var $488=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        var $489=(($488+4)&4294967295); //@line 2804 "_cursesmodule.c"
        var $490=HEAP[$489]; //@line 2804 "_cursesmodule.c"
        var $491=(($490+24)&4294967295); //@line 2804 "_cursesmodule.c"
        var $492=HEAP[$491]; //@line 2804 "_cursesmodule.c"
        var $493=HEAP[$o95]; //@line 2804 "_cursesmodule.c"
        FUNCTION_TABLE[$492]($493); //@line 2804 "_cursesmodule.c"
        __label__ = 82; break; //@line 2804 "_cursesmodule.c"
      case 82: // $bb99
        var $494=_PyInt_FromLong(536870912); //@line 2807 "_cursesmodule.c"
        HEAP[$o100]=$494; //@line 2807 "_cursesmodule.c"
        var $495=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $496=($495)!=0; //@line 2807 "_cursesmodule.c"
        if ($496) { __label__ = 83; break; } else { __label__ = 86; break; } //@line 2807 "_cursesmodule.c"
      case 83: // $bb101
        var $497=HEAP[_ModDict]; //@line 2807 "_cursesmodule.c"
        var $498=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $499=_PyDict_SetItemString($497, ((__str376)&4294967295), $498); //@line 2807 "_cursesmodule.c"
        var $500=((($499))|0)==0; //@line 2807 "_cursesmodule.c"
        if ($500) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 2807 "_cursesmodule.c"
      case 84: // $bb102
        var $501=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $502=(($501)&4294967295); //@line 2807 "_cursesmodule.c"
        var $503=HEAP[$502]; //@line 2807 "_cursesmodule.c"
        var $504=((($503) - 1)&4294967295); //@line 2807 "_cursesmodule.c"
        var $505=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $506=(($505)&4294967295); //@line 2807 "_cursesmodule.c"
        HEAP[$506]=$504; //@line 2807 "_cursesmodule.c"
        var $507=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $508=(($507)&4294967295); //@line 2807 "_cursesmodule.c"
        var $509=HEAP[$508]; //@line 2807 "_cursesmodule.c"
        var $510=((($509))|0)==0; //@line 2807 "_cursesmodule.c"
        if ($510) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 2807 "_cursesmodule.c"
      case 85: // $bb103
        var $511=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        var $512=(($511+4)&4294967295); //@line 2807 "_cursesmodule.c"
        var $513=HEAP[$512]; //@line 2807 "_cursesmodule.c"
        var $514=(($513+24)&4294967295); //@line 2807 "_cursesmodule.c"
        var $515=HEAP[$514]; //@line 2807 "_cursesmodule.c"
        var $516=HEAP[$o100]; //@line 2807 "_cursesmodule.c"
        FUNCTION_TABLE[$515]($516); //@line 2807 "_cursesmodule.c"
        __label__ = 86; break; //@line 2807 "_cursesmodule.c"
      case 86: // $bb104
        var $517=_PyInt_FromLong(1073741824); //@line 2810 "_cursesmodule.c"
        HEAP[$o105]=$517; //@line 2810 "_cursesmodule.c"
        var $518=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $519=($518)!=0; //@line 2810 "_cursesmodule.c"
        if ($519) { __label__ = 87; break; } else { __label__ = 90; break; } //@line 2810 "_cursesmodule.c"
      case 87: // $bb106
        var $520=HEAP[_ModDict]; //@line 2810 "_cursesmodule.c"
        var $521=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $522=_PyDict_SetItemString($520, ((__str377)&4294967295), $521); //@line 2810 "_cursesmodule.c"
        var $523=((($522))|0)==0; //@line 2810 "_cursesmodule.c"
        if ($523) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 2810 "_cursesmodule.c"
      case 88: // $bb107
        var $524=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $525=(($524)&4294967295); //@line 2810 "_cursesmodule.c"
        var $526=HEAP[$525]; //@line 2810 "_cursesmodule.c"
        var $527=((($526) - 1)&4294967295); //@line 2810 "_cursesmodule.c"
        var $528=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $529=(($528)&4294967295); //@line 2810 "_cursesmodule.c"
        HEAP[$529]=$527; //@line 2810 "_cursesmodule.c"
        var $530=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $531=(($530)&4294967295); //@line 2810 "_cursesmodule.c"
        var $532=HEAP[$531]; //@line 2810 "_cursesmodule.c"
        var $533=((($532))|0)==0; //@line 2810 "_cursesmodule.c"
        if ($533) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 2810 "_cursesmodule.c"
      case 89: // $bb108
        var $534=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        var $535=(($534+4)&4294967295); //@line 2810 "_cursesmodule.c"
        var $536=HEAP[$535]; //@line 2810 "_cursesmodule.c"
        var $537=(($536+24)&4294967295); //@line 2810 "_cursesmodule.c"
        var $538=HEAP[$537]; //@line 2810 "_cursesmodule.c"
        var $539=HEAP[$o105]; //@line 2810 "_cursesmodule.c"
        FUNCTION_TABLE[$538]($539); //@line 2810 "_cursesmodule.c"
        __label__ = 90; break; //@line 2810 "_cursesmodule.c"
      case 90: // $bb109
        var $540=_PyInt_FromLong(0); //@line 2813 "_cursesmodule.c"
        HEAP[$o110]=$540; //@line 2813 "_cursesmodule.c"
        var $541=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $542=($541)!=0; //@line 2813 "_cursesmodule.c"
        if ($542) { __label__ = 91; break; } else { __label__ = 94; break; } //@line 2813 "_cursesmodule.c"
      case 91: // $bb111
        var $543=HEAP[_ModDict]; //@line 2813 "_cursesmodule.c"
        var $544=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $545=_PyDict_SetItemString($543, ((__str378)&4294967295), $544); //@line 2813 "_cursesmodule.c"
        var $546=((($545))|0)==0; //@line 2813 "_cursesmodule.c"
        if ($546) { __label__ = 92; break; } else { __label__ = 94; break; } //@line 2813 "_cursesmodule.c"
      case 92: // $bb112
        var $547=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $548=(($547)&4294967295); //@line 2813 "_cursesmodule.c"
        var $549=HEAP[$548]; //@line 2813 "_cursesmodule.c"
        var $550=((($549) - 1)&4294967295); //@line 2813 "_cursesmodule.c"
        var $551=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $552=(($551)&4294967295); //@line 2813 "_cursesmodule.c"
        HEAP[$552]=$550; //@line 2813 "_cursesmodule.c"
        var $553=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $554=(($553)&4294967295); //@line 2813 "_cursesmodule.c"
        var $555=HEAP[$554]; //@line 2813 "_cursesmodule.c"
        var $556=((($555))|0)==0; //@line 2813 "_cursesmodule.c"
        if ($556) { __label__ = 93; break; } else { __label__ = 94; break; } //@line 2813 "_cursesmodule.c"
      case 93: // $bb113
        var $557=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        var $558=(($557+4)&4294967295); //@line 2813 "_cursesmodule.c"
        var $559=HEAP[$558]; //@line 2813 "_cursesmodule.c"
        var $560=(($559+24)&4294967295); //@line 2813 "_cursesmodule.c"
        var $561=HEAP[$560]; //@line 2813 "_cursesmodule.c"
        var $562=HEAP[$o110]; //@line 2813 "_cursesmodule.c"
        FUNCTION_TABLE[$561]($562); //@line 2813 "_cursesmodule.c"
        __label__ = 94; break; //@line 2813 "_cursesmodule.c"
      case 94: // $bb114
        var $563=_PyInt_FromLong(1); //@line 2814 "_cursesmodule.c"
        HEAP[$o115]=$563; //@line 2814 "_cursesmodule.c"
        var $564=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $565=($564)!=0; //@line 2814 "_cursesmodule.c"
        if ($565) { __label__ = 95; break; } else { __label__ = 98; break; } //@line 2814 "_cursesmodule.c"
      case 95: // $bb116
        var $566=HEAP[_ModDict]; //@line 2814 "_cursesmodule.c"
        var $567=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $568=_PyDict_SetItemString($566, ((__str379)&4294967295), $567); //@line 2814 "_cursesmodule.c"
        var $569=((($568))|0)==0; //@line 2814 "_cursesmodule.c"
        if ($569) { __label__ = 96; break; } else { __label__ = 98; break; } //@line 2814 "_cursesmodule.c"
      case 96: // $bb117
        var $570=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $571=(($570)&4294967295); //@line 2814 "_cursesmodule.c"
        var $572=HEAP[$571]; //@line 2814 "_cursesmodule.c"
        var $573=((($572) - 1)&4294967295); //@line 2814 "_cursesmodule.c"
        var $574=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $575=(($574)&4294967295); //@line 2814 "_cursesmodule.c"
        HEAP[$575]=$573; //@line 2814 "_cursesmodule.c"
        var $576=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $577=(($576)&4294967295); //@line 2814 "_cursesmodule.c"
        var $578=HEAP[$577]; //@line 2814 "_cursesmodule.c"
        var $579=((($578))|0)==0; //@line 2814 "_cursesmodule.c"
        if ($579) { __label__ = 97; break; } else { __label__ = 98; break; } //@line 2814 "_cursesmodule.c"
      case 97: // $bb118
        var $580=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        var $581=(($580+4)&4294967295); //@line 2814 "_cursesmodule.c"
        var $582=HEAP[$581]; //@line 2814 "_cursesmodule.c"
        var $583=(($582+24)&4294967295); //@line 2814 "_cursesmodule.c"
        var $584=HEAP[$583]; //@line 2814 "_cursesmodule.c"
        var $585=HEAP[$o115]; //@line 2814 "_cursesmodule.c"
        FUNCTION_TABLE[$584]($585); //@line 2814 "_cursesmodule.c"
        __label__ = 98; break; //@line 2814 "_cursesmodule.c"
      case 98: // $bb119
        var $586=_PyInt_FromLong(2); //@line 2815 "_cursesmodule.c"
        HEAP[$o120]=$586; //@line 2815 "_cursesmodule.c"
        var $587=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $588=($587)!=0; //@line 2815 "_cursesmodule.c"
        if ($588) { __label__ = 99; break; } else { __label__ = 102; break; } //@line 2815 "_cursesmodule.c"
      case 99: // $bb121
        var $589=HEAP[_ModDict]; //@line 2815 "_cursesmodule.c"
        var $590=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $591=_PyDict_SetItemString($589, ((__str380)&4294967295), $590); //@line 2815 "_cursesmodule.c"
        var $592=((($591))|0)==0; //@line 2815 "_cursesmodule.c"
        if ($592) { __label__ = 100; break; } else { __label__ = 102; break; } //@line 2815 "_cursesmodule.c"
      case 100: // $bb122
        var $593=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $594=(($593)&4294967295); //@line 2815 "_cursesmodule.c"
        var $595=HEAP[$594]; //@line 2815 "_cursesmodule.c"
        var $596=((($595) - 1)&4294967295); //@line 2815 "_cursesmodule.c"
        var $597=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $598=(($597)&4294967295); //@line 2815 "_cursesmodule.c"
        HEAP[$598]=$596; //@line 2815 "_cursesmodule.c"
        var $599=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $600=(($599)&4294967295); //@line 2815 "_cursesmodule.c"
        var $601=HEAP[$600]; //@line 2815 "_cursesmodule.c"
        var $602=((($601))|0)==0; //@line 2815 "_cursesmodule.c"
        if ($602) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 2815 "_cursesmodule.c"
      case 101: // $bb123
        var $603=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        var $604=(($603+4)&4294967295); //@line 2815 "_cursesmodule.c"
        var $605=HEAP[$604]; //@line 2815 "_cursesmodule.c"
        var $606=(($605+24)&4294967295); //@line 2815 "_cursesmodule.c"
        var $607=HEAP[$606]; //@line 2815 "_cursesmodule.c"
        var $608=HEAP[$o120]; //@line 2815 "_cursesmodule.c"
        FUNCTION_TABLE[$607]($608); //@line 2815 "_cursesmodule.c"
        __label__ = 102; break; //@line 2815 "_cursesmodule.c"
      case 102: // $bb124
        var $609=_PyInt_FromLong(3); //@line 2816 "_cursesmodule.c"
        HEAP[$o125]=$609; //@line 2816 "_cursesmodule.c"
        var $610=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $611=($610)!=0; //@line 2816 "_cursesmodule.c"
        if ($611) { __label__ = 103; break; } else { __label__ = 106; break; } //@line 2816 "_cursesmodule.c"
      case 103: // $bb126
        var $612=HEAP[_ModDict]; //@line 2816 "_cursesmodule.c"
        var $613=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $614=_PyDict_SetItemString($612, ((__str381)&4294967295), $613); //@line 2816 "_cursesmodule.c"
        var $615=((($614))|0)==0; //@line 2816 "_cursesmodule.c"
        if ($615) { __label__ = 104; break; } else { __label__ = 106; break; } //@line 2816 "_cursesmodule.c"
      case 104: // $bb127
        var $616=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $617=(($616)&4294967295); //@line 2816 "_cursesmodule.c"
        var $618=HEAP[$617]; //@line 2816 "_cursesmodule.c"
        var $619=((($618) - 1)&4294967295); //@line 2816 "_cursesmodule.c"
        var $620=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $621=(($620)&4294967295); //@line 2816 "_cursesmodule.c"
        HEAP[$621]=$619; //@line 2816 "_cursesmodule.c"
        var $622=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $623=(($622)&4294967295); //@line 2816 "_cursesmodule.c"
        var $624=HEAP[$623]; //@line 2816 "_cursesmodule.c"
        var $625=((($624))|0)==0; //@line 2816 "_cursesmodule.c"
        if ($625) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 2816 "_cursesmodule.c"
      case 105: // $bb128
        var $626=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        var $627=(($626+4)&4294967295); //@line 2816 "_cursesmodule.c"
        var $628=HEAP[$627]; //@line 2816 "_cursesmodule.c"
        var $629=(($628+24)&4294967295); //@line 2816 "_cursesmodule.c"
        var $630=HEAP[$629]; //@line 2816 "_cursesmodule.c"
        var $631=HEAP[$o125]; //@line 2816 "_cursesmodule.c"
        FUNCTION_TABLE[$630]($631); //@line 2816 "_cursesmodule.c"
        __label__ = 106; break; //@line 2816 "_cursesmodule.c"
      case 106: // $bb129
        var $632=_PyInt_FromLong(4); //@line 2817 "_cursesmodule.c"
        HEAP[$o130]=$632; //@line 2817 "_cursesmodule.c"
        var $633=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $634=($633)!=0; //@line 2817 "_cursesmodule.c"
        if ($634) { __label__ = 107; break; } else { __label__ = 110; break; } //@line 2817 "_cursesmodule.c"
      case 107: // $bb131
        var $635=HEAP[_ModDict]; //@line 2817 "_cursesmodule.c"
        var $636=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $637=_PyDict_SetItemString($635, ((__str382)&4294967295), $636); //@line 2817 "_cursesmodule.c"
        var $638=((($637))|0)==0; //@line 2817 "_cursesmodule.c"
        if ($638) { __label__ = 108; break; } else { __label__ = 110; break; } //@line 2817 "_cursesmodule.c"
      case 108: // $bb132
        var $639=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $640=(($639)&4294967295); //@line 2817 "_cursesmodule.c"
        var $641=HEAP[$640]; //@line 2817 "_cursesmodule.c"
        var $642=((($641) - 1)&4294967295); //@line 2817 "_cursesmodule.c"
        var $643=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $644=(($643)&4294967295); //@line 2817 "_cursesmodule.c"
        HEAP[$644]=$642; //@line 2817 "_cursesmodule.c"
        var $645=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $646=(($645)&4294967295); //@line 2817 "_cursesmodule.c"
        var $647=HEAP[$646]; //@line 2817 "_cursesmodule.c"
        var $648=((($647))|0)==0; //@line 2817 "_cursesmodule.c"
        if ($648) { __label__ = 109; break; } else { __label__ = 110; break; } //@line 2817 "_cursesmodule.c"
      case 109: // $bb133
        var $649=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        var $650=(($649+4)&4294967295); //@line 2817 "_cursesmodule.c"
        var $651=HEAP[$650]; //@line 2817 "_cursesmodule.c"
        var $652=(($651+24)&4294967295); //@line 2817 "_cursesmodule.c"
        var $653=HEAP[$652]; //@line 2817 "_cursesmodule.c"
        var $654=HEAP[$o130]; //@line 2817 "_cursesmodule.c"
        FUNCTION_TABLE[$653]($654); //@line 2817 "_cursesmodule.c"
        __label__ = 110; break; //@line 2817 "_cursesmodule.c"
      case 110: // $bb134
        var $655=_PyInt_FromLong(5); //@line 2818 "_cursesmodule.c"
        HEAP[$o135]=$655; //@line 2818 "_cursesmodule.c"
        var $656=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $657=($656)!=0; //@line 2818 "_cursesmodule.c"
        if ($657) { __label__ = 111; break; } else { __label__ = 114; break; } //@line 2818 "_cursesmodule.c"
      case 111: // $bb136
        var $658=HEAP[_ModDict]; //@line 2818 "_cursesmodule.c"
        var $659=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $660=_PyDict_SetItemString($658, ((__str383)&4294967295), $659); //@line 2818 "_cursesmodule.c"
        var $661=((($660))|0)==0; //@line 2818 "_cursesmodule.c"
        if ($661) { __label__ = 112; break; } else { __label__ = 114; break; } //@line 2818 "_cursesmodule.c"
      case 112: // $bb137
        var $662=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $663=(($662)&4294967295); //@line 2818 "_cursesmodule.c"
        var $664=HEAP[$663]; //@line 2818 "_cursesmodule.c"
        var $665=((($664) - 1)&4294967295); //@line 2818 "_cursesmodule.c"
        var $666=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $667=(($666)&4294967295); //@line 2818 "_cursesmodule.c"
        HEAP[$667]=$665; //@line 2818 "_cursesmodule.c"
        var $668=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $669=(($668)&4294967295); //@line 2818 "_cursesmodule.c"
        var $670=HEAP[$669]; //@line 2818 "_cursesmodule.c"
        var $671=((($670))|0)==0; //@line 2818 "_cursesmodule.c"
        if ($671) { __label__ = 113; break; } else { __label__ = 114; break; } //@line 2818 "_cursesmodule.c"
      case 113: // $bb138
        var $672=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        var $673=(($672+4)&4294967295); //@line 2818 "_cursesmodule.c"
        var $674=HEAP[$673]; //@line 2818 "_cursesmodule.c"
        var $675=(($674+24)&4294967295); //@line 2818 "_cursesmodule.c"
        var $676=HEAP[$675]; //@line 2818 "_cursesmodule.c"
        var $677=HEAP[$o135]; //@line 2818 "_cursesmodule.c"
        FUNCTION_TABLE[$676]($677); //@line 2818 "_cursesmodule.c"
        __label__ = 114; break; //@line 2818 "_cursesmodule.c"
      case 114: // $bb139
        var $678=_PyInt_FromLong(6); //@line 2819 "_cursesmodule.c"
        HEAP[$o140]=$678; //@line 2819 "_cursesmodule.c"
        var $679=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $680=($679)!=0; //@line 2819 "_cursesmodule.c"
        if ($680) { __label__ = 115; break; } else { __label__ = 118; break; } //@line 2819 "_cursesmodule.c"
      case 115: // $bb141
        var $681=HEAP[_ModDict]; //@line 2819 "_cursesmodule.c"
        var $682=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $683=_PyDict_SetItemString($681, ((__str384)&4294967295), $682); //@line 2819 "_cursesmodule.c"
        var $684=((($683))|0)==0; //@line 2819 "_cursesmodule.c"
        if ($684) { __label__ = 116; break; } else { __label__ = 118; break; } //@line 2819 "_cursesmodule.c"
      case 116: // $bb142
        var $685=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $686=(($685)&4294967295); //@line 2819 "_cursesmodule.c"
        var $687=HEAP[$686]; //@line 2819 "_cursesmodule.c"
        var $688=((($687) - 1)&4294967295); //@line 2819 "_cursesmodule.c"
        var $689=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $690=(($689)&4294967295); //@line 2819 "_cursesmodule.c"
        HEAP[$690]=$688; //@line 2819 "_cursesmodule.c"
        var $691=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $692=(($691)&4294967295); //@line 2819 "_cursesmodule.c"
        var $693=HEAP[$692]; //@line 2819 "_cursesmodule.c"
        var $694=((($693))|0)==0; //@line 2819 "_cursesmodule.c"
        if ($694) { __label__ = 117; break; } else { __label__ = 118; break; } //@line 2819 "_cursesmodule.c"
      case 117: // $bb143
        var $695=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        var $696=(($695+4)&4294967295); //@line 2819 "_cursesmodule.c"
        var $697=HEAP[$696]; //@line 2819 "_cursesmodule.c"
        var $698=(($697+24)&4294967295); //@line 2819 "_cursesmodule.c"
        var $699=HEAP[$698]; //@line 2819 "_cursesmodule.c"
        var $700=HEAP[$o140]; //@line 2819 "_cursesmodule.c"
        FUNCTION_TABLE[$699]($700); //@line 2819 "_cursesmodule.c"
        __label__ = 118; break; //@line 2819 "_cursesmodule.c"
      case 118: // $bb144
        var $701=_PyInt_FromLong(7); //@line 2820 "_cursesmodule.c"
        HEAP[$o145]=$701; //@line 2820 "_cursesmodule.c"
        var $702=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $703=($702)!=0; //@line 2820 "_cursesmodule.c"
        if ($703) { __label__ = 119; break; } else { __label__ = 122; break; } //@line 2820 "_cursesmodule.c"
      case 119: // $bb146
        var $704=HEAP[_ModDict]; //@line 2820 "_cursesmodule.c"
        var $705=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $706=_PyDict_SetItemString($704, ((__str385)&4294967295), $705); //@line 2820 "_cursesmodule.c"
        var $707=((($706))|0)==0; //@line 2820 "_cursesmodule.c"
        if ($707) { __label__ = 120; break; } else { __label__ = 122; break; } //@line 2820 "_cursesmodule.c"
      case 120: // $bb147
        var $708=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $709=(($708)&4294967295); //@line 2820 "_cursesmodule.c"
        var $710=HEAP[$709]; //@line 2820 "_cursesmodule.c"
        var $711=((($710) - 1)&4294967295); //@line 2820 "_cursesmodule.c"
        var $712=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $713=(($712)&4294967295); //@line 2820 "_cursesmodule.c"
        HEAP[$713]=$711; //@line 2820 "_cursesmodule.c"
        var $714=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $715=(($714)&4294967295); //@line 2820 "_cursesmodule.c"
        var $716=HEAP[$715]; //@line 2820 "_cursesmodule.c"
        var $717=((($716))|0)==0; //@line 2820 "_cursesmodule.c"
        if ($717) { __label__ = 121; break; } else { __label__ = 122; break; } //@line 2820 "_cursesmodule.c"
      case 121: // $bb148
        var $718=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        var $719=(($718+4)&4294967295); //@line 2820 "_cursesmodule.c"
        var $720=HEAP[$719]; //@line 2820 "_cursesmodule.c"
        var $721=(($720+24)&4294967295); //@line 2820 "_cursesmodule.c"
        var $722=HEAP[$721]; //@line 2820 "_cursesmodule.c"
        var $723=HEAP[$o145]; //@line 2820 "_cursesmodule.c"
        FUNCTION_TABLE[$722]($723); //@line 2820 "_cursesmodule.c"
        __label__ = 122; break; //@line 2820 "_cursesmodule.c"
      case 122: // $bb149
        var $724=_PyInt_FromLong(2); //@line 2824 "_cursesmodule.c"
        HEAP[$o150]=$724; //@line 2824 "_cursesmodule.c"
        var $725=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $726=($725)!=0; //@line 2824 "_cursesmodule.c"
        if ($726) { __label__ = 123; break; } else { __label__ = 126; break; } //@line 2824 "_cursesmodule.c"
      case 123: // $bb151
        var $727=HEAP[_ModDict]; //@line 2824 "_cursesmodule.c"
        var $728=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $729=_PyDict_SetItemString($727, ((__str386)&4294967295), $728); //@line 2824 "_cursesmodule.c"
        var $730=((($729))|0)==0; //@line 2824 "_cursesmodule.c"
        if ($730) { __label__ = 124; break; } else { __label__ = 126; break; } //@line 2824 "_cursesmodule.c"
      case 124: // $bb152
        var $731=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $732=(($731)&4294967295); //@line 2824 "_cursesmodule.c"
        var $733=HEAP[$732]; //@line 2824 "_cursesmodule.c"
        var $734=((($733) - 1)&4294967295); //@line 2824 "_cursesmodule.c"
        var $735=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $736=(($735)&4294967295); //@line 2824 "_cursesmodule.c"
        HEAP[$736]=$734; //@line 2824 "_cursesmodule.c"
        var $737=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $738=(($737)&4294967295); //@line 2824 "_cursesmodule.c"
        var $739=HEAP[$738]; //@line 2824 "_cursesmodule.c"
        var $740=((($739))|0)==0; //@line 2824 "_cursesmodule.c"
        if ($740) { __label__ = 125; break; } else { __label__ = 126; break; } //@line 2824 "_cursesmodule.c"
      case 125: // $bb153
        var $741=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        var $742=(($741+4)&4294967295); //@line 2824 "_cursesmodule.c"
        var $743=HEAP[$742]; //@line 2824 "_cursesmodule.c"
        var $744=(($743+24)&4294967295); //@line 2824 "_cursesmodule.c"
        var $745=HEAP[$744]; //@line 2824 "_cursesmodule.c"
        var $746=HEAP[$o150]; //@line 2824 "_cursesmodule.c"
        FUNCTION_TABLE[$745]($746); //@line 2824 "_cursesmodule.c"
        __label__ = 126; break; //@line 2824 "_cursesmodule.c"
      case 126: // $bb154
        var $747=_PyInt_FromLong(1); //@line 2825 "_cursesmodule.c"
        HEAP[$o155]=$747; //@line 2825 "_cursesmodule.c"
        var $748=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $749=($748)!=0; //@line 2825 "_cursesmodule.c"
        if ($749) { __label__ = 127; break; } else { __label__ = 130; break; } //@line 2825 "_cursesmodule.c"
      case 127: // $bb156
        var $750=HEAP[_ModDict]; //@line 2825 "_cursesmodule.c"
        var $751=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $752=_PyDict_SetItemString($750, ((__str387)&4294967295), $751); //@line 2825 "_cursesmodule.c"
        var $753=((($752))|0)==0; //@line 2825 "_cursesmodule.c"
        if ($753) { __label__ = 128; break; } else { __label__ = 130; break; } //@line 2825 "_cursesmodule.c"
      case 128: // $bb157
        var $754=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $755=(($754)&4294967295); //@line 2825 "_cursesmodule.c"
        var $756=HEAP[$755]; //@line 2825 "_cursesmodule.c"
        var $757=((($756) - 1)&4294967295); //@line 2825 "_cursesmodule.c"
        var $758=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $759=(($758)&4294967295); //@line 2825 "_cursesmodule.c"
        HEAP[$759]=$757; //@line 2825 "_cursesmodule.c"
        var $760=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $761=(($760)&4294967295); //@line 2825 "_cursesmodule.c"
        var $762=HEAP[$761]; //@line 2825 "_cursesmodule.c"
        var $763=((($762))|0)==0; //@line 2825 "_cursesmodule.c"
        if ($763) { __label__ = 129; break; } else { __label__ = 130; break; } //@line 2825 "_cursesmodule.c"
      case 129: // $bb158
        var $764=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        var $765=(($764+4)&4294967295); //@line 2825 "_cursesmodule.c"
        var $766=HEAP[$765]; //@line 2825 "_cursesmodule.c"
        var $767=(($766+24)&4294967295); //@line 2825 "_cursesmodule.c"
        var $768=HEAP[$767]; //@line 2825 "_cursesmodule.c"
        var $769=HEAP[$o155]; //@line 2825 "_cursesmodule.c"
        FUNCTION_TABLE[$768]($769); //@line 2825 "_cursesmodule.c"
        __label__ = 130; break; //@line 2825 "_cursesmodule.c"
      case 130: // $bb159
        var $770=_PyInt_FromLong(4); //@line 2826 "_cursesmodule.c"
        HEAP[$o160]=$770; //@line 2826 "_cursesmodule.c"
        var $771=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $772=($771)!=0; //@line 2826 "_cursesmodule.c"
        if ($772) { __label__ = 131; break; } else { __label__ = 134; break; } //@line 2826 "_cursesmodule.c"
      case 131: // $bb161
        var $773=HEAP[_ModDict]; //@line 2826 "_cursesmodule.c"
        var $774=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $775=_PyDict_SetItemString($773, ((__str388)&4294967295), $774); //@line 2826 "_cursesmodule.c"
        var $776=((($775))|0)==0; //@line 2826 "_cursesmodule.c"
        if ($776) { __label__ = 132; break; } else { __label__ = 134; break; } //@line 2826 "_cursesmodule.c"
      case 132: // $bb162
        var $777=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $778=(($777)&4294967295); //@line 2826 "_cursesmodule.c"
        var $779=HEAP[$778]; //@line 2826 "_cursesmodule.c"
        var $780=((($779) - 1)&4294967295); //@line 2826 "_cursesmodule.c"
        var $781=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $782=(($781)&4294967295); //@line 2826 "_cursesmodule.c"
        HEAP[$782]=$780; //@line 2826 "_cursesmodule.c"
        var $783=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $784=(($783)&4294967295); //@line 2826 "_cursesmodule.c"
        var $785=HEAP[$784]; //@line 2826 "_cursesmodule.c"
        var $786=((($785))|0)==0; //@line 2826 "_cursesmodule.c"
        if ($786) { __label__ = 133; break; } else { __label__ = 134; break; } //@line 2826 "_cursesmodule.c"
      case 133: // $bb163
        var $787=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        var $788=(($787+4)&4294967295); //@line 2826 "_cursesmodule.c"
        var $789=HEAP[$788]; //@line 2826 "_cursesmodule.c"
        var $790=(($789+24)&4294967295); //@line 2826 "_cursesmodule.c"
        var $791=HEAP[$790]; //@line 2826 "_cursesmodule.c"
        var $792=HEAP[$o160]; //@line 2826 "_cursesmodule.c"
        FUNCTION_TABLE[$791]($792); //@line 2826 "_cursesmodule.c"
        __label__ = 134; break; //@line 2826 "_cursesmodule.c"
      case 134: // $bb164
        var $793=_PyInt_FromLong(8); //@line 2827 "_cursesmodule.c"
        HEAP[$o165]=$793; //@line 2827 "_cursesmodule.c"
        var $794=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $795=($794)!=0; //@line 2827 "_cursesmodule.c"
        if ($795) { __label__ = 135; break; } else { __label__ = 138; break; } //@line 2827 "_cursesmodule.c"
      case 135: // $bb166
        var $796=HEAP[_ModDict]; //@line 2827 "_cursesmodule.c"
        var $797=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $798=_PyDict_SetItemString($796, ((__str389)&4294967295), $797); //@line 2827 "_cursesmodule.c"
        var $799=((($798))|0)==0; //@line 2827 "_cursesmodule.c"
        if ($799) { __label__ = 136; break; } else { __label__ = 138; break; } //@line 2827 "_cursesmodule.c"
      case 136: // $bb167
        var $800=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $801=(($800)&4294967295); //@line 2827 "_cursesmodule.c"
        var $802=HEAP[$801]; //@line 2827 "_cursesmodule.c"
        var $803=((($802) - 1)&4294967295); //@line 2827 "_cursesmodule.c"
        var $804=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $805=(($804)&4294967295); //@line 2827 "_cursesmodule.c"
        HEAP[$805]=$803; //@line 2827 "_cursesmodule.c"
        var $806=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $807=(($806)&4294967295); //@line 2827 "_cursesmodule.c"
        var $808=HEAP[$807]; //@line 2827 "_cursesmodule.c"
        var $809=((($808))|0)==0; //@line 2827 "_cursesmodule.c"
        if ($809) { __label__ = 137; break; } else { __label__ = 138; break; } //@line 2827 "_cursesmodule.c"
      case 137: // $bb168
        var $810=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        var $811=(($810+4)&4294967295); //@line 2827 "_cursesmodule.c"
        var $812=HEAP[$811]; //@line 2827 "_cursesmodule.c"
        var $813=(($812+24)&4294967295); //@line 2827 "_cursesmodule.c"
        var $814=HEAP[$813]; //@line 2827 "_cursesmodule.c"
        var $815=HEAP[$o165]; //@line 2827 "_cursesmodule.c"
        FUNCTION_TABLE[$814]($815); //@line 2827 "_cursesmodule.c"
        __label__ = 138; break; //@line 2827 "_cursesmodule.c"
      case 138: // $bb169
        var $816=_PyInt_FromLong(16); //@line 2828 "_cursesmodule.c"
        HEAP[$o170]=$816; //@line 2828 "_cursesmodule.c"
        var $817=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $818=($817)!=0; //@line 2828 "_cursesmodule.c"
        if ($818) { __label__ = 139; break; } else { __label__ = 142; break; } //@line 2828 "_cursesmodule.c"
      case 139: // $bb171
        var $819=HEAP[_ModDict]; //@line 2828 "_cursesmodule.c"
        var $820=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $821=_PyDict_SetItemString($819, ((__str390)&4294967295), $820); //@line 2828 "_cursesmodule.c"
        var $822=((($821))|0)==0; //@line 2828 "_cursesmodule.c"
        if ($822) { __label__ = 140; break; } else { __label__ = 142; break; } //@line 2828 "_cursesmodule.c"
      case 140: // $bb172
        var $823=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $824=(($823)&4294967295); //@line 2828 "_cursesmodule.c"
        var $825=HEAP[$824]; //@line 2828 "_cursesmodule.c"
        var $826=((($825) - 1)&4294967295); //@line 2828 "_cursesmodule.c"
        var $827=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $828=(($827)&4294967295); //@line 2828 "_cursesmodule.c"
        HEAP[$828]=$826; //@line 2828 "_cursesmodule.c"
        var $829=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $830=(($829)&4294967295); //@line 2828 "_cursesmodule.c"
        var $831=HEAP[$830]; //@line 2828 "_cursesmodule.c"
        var $832=((($831))|0)==0; //@line 2828 "_cursesmodule.c"
        if ($832) { __label__ = 141; break; } else { __label__ = 142; break; } //@line 2828 "_cursesmodule.c"
      case 141: // $bb173
        var $833=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        var $834=(($833+4)&4294967295); //@line 2828 "_cursesmodule.c"
        var $835=HEAP[$834]; //@line 2828 "_cursesmodule.c"
        var $836=(($835+24)&4294967295); //@line 2828 "_cursesmodule.c"
        var $837=HEAP[$836]; //@line 2828 "_cursesmodule.c"
        var $838=HEAP[$o170]; //@line 2828 "_cursesmodule.c"
        FUNCTION_TABLE[$837]($838); //@line 2828 "_cursesmodule.c"
        __label__ = 142; break; //@line 2828 "_cursesmodule.c"
      case 142: // $bb174
        var $839=_PyInt_FromLong(128); //@line 2830 "_cursesmodule.c"
        HEAP[$o175]=$839; //@line 2830 "_cursesmodule.c"
        var $840=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $841=($840)!=0; //@line 2830 "_cursesmodule.c"
        if ($841) { __label__ = 143; break; } else { __label__ = 146; break; } //@line 2830 "_cursesmodule.c"
      case 143: // $bb176
        var $842=HEAP[_ModDict]; //@line 2830 "_cursesmodule.c"
        var $843=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $844=_PyDict_SetItemString($842, ((__str391)&4294967295), $843); //@line 2830 "_cursesmodule.c"
        var $845=((($844))|0)==0; //@line 2830 "_cursesmodule.c"
        if ($845) { __label__ = 144; break; } else { __label__ = 146; break; } //@line 2830 "_cursesmodule.c"
      case 144: // $bb177
        var $846=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $847=(($846)&4294967295); //@line 2830 "_cursesmodule.c"
        var $848=HEAP[$847]; //@line 2830 "_cursesmodule.c"
        var $849=((($848) - 1)&4294967295); //@line 2830 "_cursesmodule.c"
        var $850=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $851=(($850)&4294967295); //@line 2830 "_cursesmodule.c"
        HEAP[$851]=$849; //@line 2830 "_cursesmodule.c"
        var $852=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $853=(($852)&4294967295); //@line 2830 "_cursesmodule.c"
        var $854=HEAP[$853]; //@line 2830 "_cursesmodule.c"
        var $855=((($854))|0)==0; //@line 2830 "_cursesmodule.c"
        if ($855) { __label__ = 145; break; } else { __label__ = 146; break; } //@line 2830 "_cursesmodule.c"
      case 145: // $bb178
        var $856=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        var $857=(($856+4)&4294967295); //@line 2830 "_cursesmodule.c"
        var $858=HEAP[$857]; //@line 2830 "_cursesmodule.c"
        var $859=(($858+24)&4294967295); //@line 2830 "_cursesmodule.c"
        var $860=HEAP[$859]; //@line 2830 "_cursesmodule.c"
        var $861=HEAP[$o175]; //@line 2830 "_cursesmodule.c"
        FUNCTION_TABLE[$860]($861); //@line 2830 "_cursesmodule.c"
        __label__ = 146; break; //@line 2830 "_cursesmodule.c"
      case 146: // $bb179
        var $862=_PyInt_FromLong(64); //@line 2831 "_cursesmodule.c"
        HEAP[$o180]=$862; //@line 2831 "_cursesmodule.c"
        var $863=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $864=($863)!=0; //@line 2831 "_cursesmodule.c"
        if ($864) { __label__ = 147; break; } else { __label__ = 150; break; } //@line 2831 "_cursesmodule.c"
      case 147: // $bb181
        var $865=HEAP[_ModDict]; //@line 2831 "_cursesmodule.c"
        var $866=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $867=_PyDict_SetItemString($865, ((__str392)&4294967295), $866); //@line 2831 "_cursesmodule.c"
        var $868=((($867))|0)==0; //@line 2831 "_cursesmodule.c"
        if ($868) { __label__ = 148; break; } else { __label__ = 150; break; } //@line 2831 "_cursesmodule.c"
      case 148: // $bb182
        var $869=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $870=(($869)&4294967295); //@line 2831 "_cursesmodule.c"
        var $871=HEAP[$870]; //@line 2831 "_cursesmodule.c"
        var $872=((($871) - 1)&4294967295); //@line 2831 "_cursesmodule.c"
        var $873=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $874=(($873)&4294967295); //@line 2831 "_cursesmodule.c"
        HEAP[$874]=$872; //@line 2831 "_cursesmodule.c"
        var $875=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $876=(($875)&4294967295); //@line 2831 "_cursesmodule.c"
        var $877=HEAP[$876]; //@line 2831 "_cursesmodule.c"
        var $878=((($877))|0)==0; //@line 2831 "_cursesmodule.c"
        if ($878) { __label__ = 149; break; } else { __label__ = 150; break; } //@line 2831 "_cursesmodule.c"
      case 149: // $bb183
        var $879=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        var $880=(($879+4)&4294967295); //@line 2831 "_cursesmodule.c"
        var $881=HEAP[$880]; //@line 2831 "_cursesmodule.c"
        var $882=(($881+24)&4294967295); //@line 2831 "_cursesmodule.c"
        var $883=HEAP[$882]; //@line 2831 "_cursesmodule.c"
        var $884=HEAP[$o180]; //@line 2831 "_cursesmodule.c"
        FUNCTION_TABLE[$883]($884); //@line 2831 "_cursesmodule.c"
        __label__ = 150; break; //@line 2831 "_cursesmodule.c"
      case 150: // $bb184
        var $885=_PyInt_FromLong(256); //@line 2832 "_cursesmodule.c"
        HEAP[$o185]=$885; //@line 2832 "_cursesmodule.c"
        var $886=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $887=($886)!=0; //@line 2832 "_cursesmodule.c"
        if ($887) { __label__ = 151; break; } else { __label__ = 154; break; } //@line 2832 "_cursesmodule.c"
      case 151: // $bb186
        var $888=HEAP[_ModDict]; //@line 2832 "_cursesmodule.c"
        var $889=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $890=_PyDict_SetItemString($888, ((__str393)&4294967295), $889); //@line 2832 "_cursesmodule.c"
        var $891=((($890))|0)==0; //@line 2832 "_cursesmodule.c"
        if ($891) { __label__ = 152; break; } else { __label__ = 154; break; } //@line 2832 "_cursesmodule.c"
      case 152: // $bb187
        var $892=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $893=(($892)&4294967295); //@line 2832 "_cursesmodule.c"
        var $894=HEAP[$893]; //@line 2832 "_cursesmodule.c"
        var $895=((($894) - 1)&4294967295); //@line 2832 "_cursesmodule.c"
        var $896=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $897=(($896)&4294967295); //@line 2832 "_cursesmodule.c"
        HEAP[$897]=$895; //@line 2832 "_cursesmodule.c"
        var $898=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $899=(($898)&4294967295); //@line 2832 "_cursesmodule.c"
        var $900=HEAP[$899]; //@line 2832 "_cursesmodule.c"
        var $901=((($900))|0)==0; //@line 2832 "_cursesmodule.c"
        if ($901) { __label__ = 153; break; } else { __label__ = 154; break; } //@line 2832 "_cursesmodule.c"
      case 153: // $bb188
        var $902=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        var $903=(($902+4)&4294967295); //@line 2832 "_cursesmodule.c"
        var $904=HEAP[$903]; //@line 2832 "_cursesmodule.c"
        var $905=(($904+24)&4294967295); //@line 2832 "_cursesmodule.c"
        var $906=HEAP[$905]; //@line 2832 "_cursesmodule.c"
        var $907=HEAP[$o185]; //@line 2832 "_cursesmodule.c"
        FUNCTION_TABLE[$906]($907); //@line 2832 "_cursesmodule.c"
        __label__ = 154; break; //@line 2832 "_cursesmodule.c"
      case 154: // $bb189
        var $908=_PyInt_FromLong(512); //@line 2833 "_cursesmodule.c"
        HEAP[$o190]=$908; //@line 2833 "_cursesmodule.c"
        var $909=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $910=($909)!=0; //@line 2833 "_cursesmodule.c"
        if ($910) { __label__ = 155; break; } else { __label__ = 158; break; } //@line 2833 "_cursesmodule.c"
      case 155: // $bb191
        var $911=HEAP[_ModDict]; //@line 2833 "_cursesmodule.c"
        var $912=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $913=_PyDict_SetItemString($911, ((__str394)&4294967295), $912); //@line 2833 "_cursesmodule.c"
        var $914=((($913))|0)==0; //@line 2833 "_cursesmodule.c"
        if ($914) { __label__ = 156; break; } else { __label__ = 158; break; } //@line 2833 "_cursesmodule.c"
      case 156: // $bb192
        var $915=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $916=(($915)&4294967295); //@line 2833 "_cursesmodule.c"
        var $917=HEAP[$916]; //@line 2833 "_cursesmodule.c"
        var $918=((($917) - 1)&4294967295); //@line 2833 "_cursesmodule.c"
        var $919=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $920=(($919)&4294967295); //@line 2833 "_cursesmodule.c"
        HEAP[$920]=$918; //@line 2833 "_cursesmodule.c"
        var $921=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $922=(($921)&4294967295); //@line 2833 "_cursesmodule.c"
        var $923=HEAP[$922]; //@line 2833 "_cursesmodule.c"
        var $924=((($923))|0)==0; //@line 2833 "_cursesmodule.c"
        if ($924) { __label__ = 157; break; } else { __label__ = 158; break; } //@line 2833 "_cursesmodule.c"
      case 157: // $bb193
        var $925=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        var $926=(($925+4)&4294967295); //@line 2833 "_cursesmodule.c"
        var $927=HEAP[$926]; //@line 2833 "_cursesmodule.c"
        var $928=(($927+24)&4294967295); //@line 2833 "_cursesmodule.c"
        var $929=HEAP[$928]; //@line 2833 "_cursesmodule.c"
        var $930=HEAP[$o190]; //@line 2833 "_cursesmodule.c"
        FUNCTION_TABLE[$929]($930); //@line 2833 "_cursesmodule.c"
        __label__ = 158; break; //@line 2833 "_cursesmodule.c"
      case 158: // $bb194
        var $931=_PyInt_FromLong(1024); //@line 2834 "_cursesmodule.c"
        HEAP[$o195]=$931; //@line 2834 "_cursesmodule.c"
        var $932=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $933=($932)!=0; //@line 2834 "_cursesmodule.c"
        if ($933) { __label__ = 159; break; } else { __label__ = 162; break; } //@line 2834 "_cursesmodule.c"
      case 159: // $bb196
        var $934=HEAP[_ModDict]; //@line 2834 "_cursesmodule.c"
        var $935=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $936=_PyDict_SetItemString($934, ((__str395)&4294967295), $935); //@line 2834 "_cursesmodule.c"
        var $937=((($936))|0)==0; //@line 2834 "_cursesmodule.c"
        if ($937) { __label__ = 160; break; } else { __label__ = 162; break; } //@line 2834 "_cursesmodule.c"
      case 160: // $bb197
        var $938=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $939=(($938)&4294967295); //@line 2834 "_cursesmodule.c"
        var $940=HEAP[$939]; //@line 2834 "_cursesmodule.c"
        var $941=((($940) - 1)&4294967295); //@line 2834 "_cursesmodule.c"
        var $942=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $943=(($942)&4294967295); //@line 2834 "_cursesmodule.c"
        HEAP[$943]=$941; //@line 2834 "_cursesmodule.c"
        var $944=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $945=(($944)&4294967295); //@line 2834 "_cursesmodule.c"
        var $946=HEAP[$945]; //@line 2834 "_cursesmodule.c"
        var $947=((($946))|0)==0; //@line 2834 "_cursesmodule.c"
        if ($947) { __label__ = 161; break; } else { __label__ = 162; break; } //@line 2834 "_cursesmodule.c"
      case 161: // $bb198
        var $948=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        var $949=(($948+4)&4294967295); //@line 2834 "_cursesmodule.c"
        var $950=HEAP[$949]; //@line 2834 "_cursesmodule.c"
        var $951=(($950+24)&4294967295); //@line 2834 "_cursesmodule.c"
        var $952=HEAP[$951]; //@line 2834 "_cursesmodule.c"
        var $953=HEAP[$o195]; //@line 2834 "_cursesmodule.c"
        FUNCTION_TABLE[$952]($953); //@line 2834 "_cursesmodule.c"
        __label__ = 162; break; //@line 2834 "_cursesmodule.c"
      case 162: // $bb199
        var $954=_PyInt_FromLong(8192); //@line 2836 "_cursesmodule.c"
        HEAP[$o200]=$954; //@line 2836 "_cursesmodule.c"
        var $955=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $956=($955)!=0; //@line 2836 "_cursesmodule.c"
        if ($956) { __label__ = 163; break; } else { __label__ = 166; break; } //@line 2836 "_cursesmodule.c"
      case 163: // $bb201
        var $957=HEAP[_ModDict]; //@line 2836 "_cursesmodule.c"
        var $958=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $959=_PyDict_SetItemString($957, ((__str396)&4294967295), $958); //@line 2836 "_cursesmodule.c"
        var $960=((($959))|0)==0; //@line 2836 "_cursesmodule.c"
        if ($960) { __label__ = 164; break; } else { __label__ = 166; break; } //@line 2836 "_cursesmodule.c"
      case 164: // $bb202
        var $961=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $962=(($961)&4294967295); //@line 2836 "_cursesmodule.c"
        var $963=HEAP[$962]; //@line 2836 "_cursesmodule.c"
        var $964=((($963) - 1)&4294967295); //@line 2836 "_cursesmodule.c"
        var $965=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $966=(($965)&4294967295); //@line 2836 "_cursesmodule.c"
        HEAP[$966]=$964; //@line 2836 "_cursesmodule.c"
        var $967=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $968=(($967)&4294967295); //@line 2836 "_cursesmodule.c"
        var $969=HEAP[$968]; //@line 2836 "_cursesmodule.c"
        var $970=((($969))|0)==0; //@line 2836 "_cursesmodule.c"
        if ($970) { __label__ = 165; break; } else { __label__ = 166; break; } //@line 2836 "_cursesmodule.c"
      case 165: // $bb203
        var $971=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        var $972=(($971+4)&4294967295); //@line 2836 "_cursesmodule.c"
        var $973=HEAP[$972]; //@line 2836 "_cursesmodule.c"
        var $974=(($973+24)&4294967295); //@line 2836 "_cursesmodule.c"
        var $975=HEAP[$974]; //@line 2836 "_cursesmodule.c"
        var $976=HEAP[$o200]; //@line 2836 "_cursesmodule.c"
        FUNCTION_TABLE[$975]($976); //@line 2836 "_cursesmodule.c"
        __label__ = 166; break; //@line 2836 "_cursesmodule.c"
      case 166: // $bb204
        var $977=_PyInt_FromLong(4096); //@line 2837 "_cursesmodule.c"
        HEAP[$o205]=$977; //@line 2837 "_cursesmodule.c"
        var $978=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $979=($978)!=0; //@line 2837 "_cursesmodule.c"
        if ($979) { __label__ = 167; break; } else { __label__ = 170; break; } //@line 2837 "_cursesmodule.c"
      case 167: // $bb206
        var $980=HEAP[_ModDict]; //@line 2837 "_cursesmodule.c"
        var $981=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $982=_PyDict_SetItemString($980, ((__str397)&4294967295), $981); //@line 2837 "_cursesmodule.c"
        var $983=((($982))|0)==0; //@line 2837 "_cursesmodule.c"
        if ($983) { __label__ = 168; break; } else { __label__ = 170; break; } //@line 2837 "_cursesmodule.c"
      case 168: // $bb207
        var $984=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $985=(($984)&4294967295); //@line 2837 "_cursesmodule.c"
        var $986=HEAP[$985]; //@line 2837 "_cursesmodule.c"
        var $987=((($986) - 1)&4294967295); //@line 2837 "_cursesmodule.c"
        var $988=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $989=(($988)&4294967295); //@line 2837 "_cursesmodule.c"
        HEAP[$989]=$987; //@line 2837 "_cursesmodule.c"
        var $990=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $991=(($990)&4294967295); //@line 2837 "_cursesmodule.c"
        var $992=HEAP[$991]; //@line 2837 "_cursesmodule.c"
        var $993=((($992))|0)==0; //@line 2837 "_cursesmodule.c"
        if ($993) { __label__ = 169; break; } else { __label__ = 170; break; } //@line 2837 "_cursesmodule.c"
      case 169: // $bb208
        var $994=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        var $995=(($994+4)&4294967295); //@line 2837 "_cursesmodule.c"
        var $996=HEAP[$995]; //@line 2837 "_cursesmodule.c"
        var $997=(($996+24)&4294967295); //@line 2837 "_cursesmodule.c"
        var $998=HEAP[$997]; //@line 2837 "_cursesmodule.c"
        var $999=HEAP[$o205]; //@line 2837 "_cursesmodule.c"
        FUNCTION_TABLE[$998]($999); //@line 2837 "_cursesmodule.c"
        __label__ = 170; break; //@line 2837 "_cursesmodule.c"
      case 170: // $bb209
        var $1000=_PyInt_FromLong(16384); //@line 2838 "_cursesmodule.c"
        HEAP[$o210]=$1000; //@line 2838 "_cursesmodule.c"
        var $1001=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1002=($1001)!=0; //@line 2838 "_cursesmodule.c"
        if ($1002) { __label__ = 171; break; } else { __label__ = 174; break; } //@line 2838 "_cursesmodule.c"
      case 171: // $bb211
        var $1003=HEAP[_ModDict]; //@line 2838 "_cursesmodule.c"
        var $1004=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1005=_PyDict_SetItemString($1003, ((__str398)&4294967295), $1004); //@line 2838 "_cursesmodule.c"
        var $1006=((($1005))|0)==0; //@line 2838 "_cursesmodule.c"
        if ($1006) { __label__ = 172; break; } else { __label__ = 174; break; } //@line 2838 "_cursesmodule.c"
      case 172: // $bb212
        var $1007=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1008=(($1007)&4294967295); //@line 2838 "_cursesmodule.c"
        var $1009=HEAP[$1008]; //@line 2838 "_cursesmodule.c"
        var $1010=((($1009) - 1)&4294967295); //@line 2838 "_cursesmodule.c"
        var $1011=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1012=(($1011)&4294967295); //@line 2838 "_cursesmodule.c"
        HEAP[$1012]=$1010; //@line 2838 "_cursesmodule.c"
        var $1013=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1014=(($1013)&4294967295); //@line 2838 "_cursesmodule.c"
        var $1015=HEAP[$1014]; //@line 2838 "_cursesmodule.c"
        var $1016=((($1015))|0)==0; //@line 2838 "_cursesmodule.c"
        if ($1016) { __label__ = 173; break; } else { __label__ = 174; break; } //@line 2838 "_cursesmodule.c"
      case 173: // $bb213
        var $1017=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        var $1018=(($1017+4)&4294967295); //@line 2838 "_cursesmodule.c"
        var $1019=HEAP[$1018]; //@line 2838 "_cursesmodule.c"
        var $1020=(($1019+24)&4294967295); //@line 2838 "_cursesmodule.c"
        var $1021=HEAP[$1020]; //@line 2838 "_cursesmodule.c"
        var $1022=HEAP[$o210]; //@line 2838 "_cursesmodule.c"
        FUNCTION_TABLE[$1021]($1022); //@line 2838 "_cursesmodule.c"
        __label__ = 174; break; //@line 2838 "_cursesmodule.c"
      case 174: // $bb214
        var $1023=_PyInt_FromLong(32768); //@line 2839 "_cursesmodule.c"
        HEAP[$o215]=$1023; //@line 2839 "_cursesmodule.c"
        var $1024=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1025=($1024)!=0; //@line 2839 "_cursesmodule.c"
        if ($1025) { __label__ = 175; break; } else { __label__ = 178; break; } //@line 2839 "_cursesmodule.c"
      case 175: // $bb216
        var $1026=HEAP[_ModDict]; //@line 2839 "_cursesmodule.c"
        var $1027=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1028=_PyDict_SetItemString($1026, ((__str399)&4294967295), $1027); //@line 2839 "_cursesmodule.c"
        var $1029=((($1028))|0)==0; //@line 2839 "_cursesmodule.c"
        if ($1029) { __label__ = 176; break; } else { __label__ = 178; break; } //@line 2839 "_cursesmodule.c"
      case 176: // $bb217
        var $1030=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1031=(($1030)&4294967295); //@line 2839 "_cursesmodule.c"
        var $1032=HEAP[$1031]; //@line 2839 "_cursesmodule.c"
        var $1033=((($1032) - 1)&4294967295); //@line 2839 "_cursesmodule.c"
        var $1034=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1035=(($1034)&4294967295); //@line 2839 "_cursesmodule.c"
        HEAP[$1035]=$1033; //@line 2839 "_cursesmodule.c"
        var $1036=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1037=(($1036)&4294967295); //@line 2839 "_cursesmodule.c"
        var $1038=HEAP[$1037]; //@line 2839 "_cursesmodule.c"
        var $1039=((($1038))|0)==0; //@line 2839 "_cursesmodule.c"
        if ($1039) { __label__ = 177; break; } else { __label__ = 178; break; } //@line 2839 "_cursesmodule.c"
      case 177: // $bb218
        var $1040=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        var $1041=(($1040+4)&4294967295); //@line 2839 "_cursesmodule.c"
        var $1042=HEAP[$1041]; //@line 2839 "_cursesmodule.c"
        var $1043=(($1042+24)&4294967295); //@line 2839 "_cursesmodule.c"
        var $1044=HEAP[$1043]; //@line 2839 "_cursesmodule.c"
        var $1045=HEAP[$o215]; //@line 2839 "_cursesmodule.c"
        FUNCTION_TABLE[$1044]($1045); //@line 2839 "_cursesmodule.c"
        __label__ = 178; break; //@line 2839 "_cursesmodule.c"
      case 178: // $bb219
        var $1046=_PyInt_FromLong(65536); //@line 2840 "_cursesmodule.c"
        HEAP[$o220]=$1046; //@line 2840 "_cursesmodule.c"
        var $1047=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1048=($1047)!=0; //@line 2840 "_cursesmodule.c"
        if ($1048) { __label__ = 179; break; } else { __label__ = 182; break; } //@line 2840 "_cursesmodule.c"
      case 179: // $bb221
        var $1049=HEAP[_ModDict]; //@line 2840 "_cursesmodule.c"
        var $1050=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1051=_PyDict_SetItemString($1049, ((__str400)&4294967295), $1050); //@line 2840 "_cursesmodule.c"
        var $1052=((($1051))|0)==0; //@line 2840 "_cursesmodule.c"
        if ($1052) { __label__ = 180; break; } else { __label__ = 182; break; } //@line 2840 "_cursesmodule.c"
      case 180: // $bb222
        var $1053=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1054=(($1053)&4294967295); //@line 2840 "_cursesmodule.c"
        var $1055=HEAP[$1054]; //@line 2840 "_cursesmodule.c"
        var $1056=((($1055) - 1)&4294967295); //@line 2840 "_cursesmodule.c"
        var $1057=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1058=(($1057)&4294967295); //@line 2840 "_cursesmodule.c"
        HEAP[$1058]=$1056; //@line 2840 "_cursesmodule.c"
        var $1059=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1060=(($1059)&4294967295); //@line 2840 "_cursesmodule.c"
        var $1061=HEAP[$1060]; //@line 2840 "_cursesmodule.c"
        var $1062=((($1061))|0)==0; //@line 2840 "_cursesmodule.c"
        if ($1062) { __label__ = 181; break; } else { __label__ = 182; break; } //@line 2840 "_cursesmodule.c"
      case 181: // $bb223
        var $1063=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        var $1064=(($1063+4)&4294967295); //@line 2840 "_cursesmodule.c"
        var $1065=HEAP[$1064]; //@line 2840 "_cursesmodule.c"
        var $1066=(($1065+24)&4294967295); //@line 2840 "_cursesmodule.c"
        var $1067=HEAP[$1066]; //@line 2840 "_cursesmodule.c"
        var $1068=HEAP[$o220]; //@line 2840 "_cursesmodule.c"
        FUNCTION_TABLE[$1067]($1068); //@line 2840 "_cursesmodule.c"
        __label__ = 182; break; //@line 2840 "_cursesmodule.c"
      case 182: // $bb224
        var $1069=_PyInt_FromLong(524288); //@line 2842 "_cursesmodule.c"
        HEAP[$o225]=$1069; //@line 2842 "_cursesmodule.c"
        var $1070=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1071=($1070)!=0; //@line 2842 "_cursesmodule.c"
        if ($1071) { __label__ = 183; break; } else { __label__ = 186; break; } //@line 2842 "_cursesmodule.c"
      case 183: // $bb226
        var $1072=HEAP[_ModDict]; //@line 2842 "_cursesmodule.c"
        var $1073=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1074=_PyDict_SetItemString($1072, ((__str401)&4294967295), $1073); //@line 2842 "_cursesmodule.c"
        var $1075=((($1074))|0)==0; //@line 2842 "_cursesmodule.c"
        if ($1075) { __label__ = 184; break; } else { __label__ = 186; break; } //@line 2842 "_cursesmodule.c"
      case 184: // $bb227
        var $1076=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1077=(($1076)&4294967295); //@line 2842 "_cursesmodule.c"
        var $1078=HEAP[$1077]; //@line 2842 "_cursesmodule.c"
        var $1079=((($1078) - 1)&4294967295); //@line 2842 "_cursesmodule.c"
        var $1080=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1081=(($1080)&4294967295); //@line 2842 "_cursesmodule.c"
        HEAP[$1081]=$1079; //@line 2842 "_cursesmodule.c"
        var $1082=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1083=(($1082)&4294967295); //@line 2842 "_cursesmodule.c"
        var $1084=HEAP[$1083]; //@line 2842 "_cursesmodule.c"
        var $1085=((($1084))|0)==0; //@line 2842 "_cursesmodule.c"
        if ($1085) { __label__ = 185; break; } else { __label__ = 186; break; } //@line 2842 "_cursesmodule.c"
      case 185: // $bb228
        var $1086=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        var $1087=(($1086+4)&4294967295); //@line 2842 "_cursesmodule.c"
        var $1088=HEAP[$1087]; //@line 2842 "_cursesmodule.c"
        var $1089=(($1088+24)&4294967295); //@line 2842 "_cursesmodule.c"
        var $1090=HEAP[$1089]; //@line 2842 "_cursesmodule.c"
        var $1091=HEAP[$o225]; //@line 2842 "_cursesmodule.c"
        FUNCTION_TABLE[$1090]($1091); //@line 2842 "_cursesmodule.c"
        __label__ = 186; break; //@line 2842 "_cursesmodule.c"
      case 186: // $bb229
        var $1092=_PyInt_FromLong(262144); //@line 2843 "_cursesmodule.c"
        HEAP[$o230]=$1092; //@line 2843 "_cursesmodule.c"
        var $1093=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1094=($1093)!=0; //@line 2843 "_cursesmodule.c"
        if ($1094) { __label__ = 187; break; } else { __label__ = 190; break; } //@line 2843 "_cursesmodule.c"
      case 187: // $bb231
        var $1095=HEAP[_ModDict]; //@line 2843 "_cursesmodule.c"
        var $1096=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1097=_PyDict_SetItemString($1095, ((__str402)&4294967295), $1096); //@line 2843 "_cursesmodule.c"
        var $1098=((($1097))|0)==0; //@line 2843 "_cursesmodule.c"
        if ($1098) { __label__ = 188; break; } else { __label__ = 190; break; } //@line 2843 "_cursesmodule.c"
      case 188: // $bb232
        var $1099=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1100=(($1099)&4294967295); //@line 2843 "_cursesmodule.c"
        var $1101=HEAP[$1100]; //@line 2843 "_cursesmodule.c"
        var $1102=((($1101) - 1)&4294967295); //@line 2843 "_cursesmodule.c"
        var $1103=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1104=(($1103)&4294967295); //@line 2843 "_cursesmodule.c"
        HEAP[$1104]=$1102; //@line 2843 "_cursesmodule.c"
        var $1105=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1106=(($1105)&4294967295); //@line 2843 "_cursesmodule.c"
        var $1107=HEAP[$1106]; //@line 2843 "_cursesmodule.c"
        var $1108=((($1107))|0)==0; //@line 2843 "_cursesmodule.c"
        if ($1108) { __label__ = 189; break; } else { __label__ = 190; break; } //@line 2843 "_cursesmodule.c"
      case 189: // $bb233
        var $1109=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        var $1110=(($1109+4)&4294967295); //@line 2843 "_cursesmodule.c"
        var $1111=HEAP[$1110]; //@line 2843 "_cursesmodule.c"
        var $1112=(($1111+24)&4294967295); //@line 2843 "_cursesmodule.c"
        var $1113=HEAP[$1112]; //@line 2843 "_cursesmodule.c"
        var $1114=HEAP[$o230]; //@line 2843 "_cursesmodule.c"
        FUNCTION_TABLE[$1113]($1114); //@line 2843 "_cursesmodule.c"
        __label__ = 190; break; //@line 2843 "_cursesmodule.c"
      case 190: // $bb234
        var $1115=_PyInt_FromLong(1048576); //@line 2844 "_cursesmodule.c"
        HEAP[$o235]=$1115; //@line 2844 "_cursesmodule.c"
        var $1116=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1117=($1116)!=0; //@line 2844 "_cursesmodule.c"
        if ($1117) { __label__ = 191; break; } else { __label__ = 194; break; } //@line 2844 "_cursesmodule.c"
      case 191: // $bb236
        var $1118=HEAP[_ModDict]; //@line 2844 "_cursesmodule.c"
        var $1119=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1120=_PyDict_SetItemString($1118, ((__str403)&4294967295), $1119); //@line 2844 "_cursesmodule.c"
        var $1121=((($1120))|0)==0; //@line 2844 "_cursesmodule.c"
        if ($1121) { __label__ = 192; break; } else { __label__ = 194; break; } //@line 2844 "_cursesmodule.c"
      case 192: // $bb237
        var $1122=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1123=(($1122)&4294967295); //@line 2844 "_cursesmodule.c"
        var $1124=HEAP[$1123]; //@line 2844 "_cursesmodule.c"
        var $1125=((($1124) - 1)&4294967295); //@line 2844 "_cursesmodule.c"
        var $1126=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1127=(($1126)&4294967295); //@line 2844 "_cursesmodule.c"
        HEAP[$1127]=$1125; //@line 2844 "_cursesmodule.c"
        var $1128=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1129=(($1128)&4294967295); //@line 2844 "_cursesmodule.c"
        var $1130=HEAP[$1129]; //@line 2844 "_cursesmodule.c"
        var $1131=((($1130))|0)==0; //@line 2844 "_cursesmodule.c"
        if ($1131) { __label__ = 193; break; } else { __label__ = 194; break; } //@line 2844 "_cursesmodule.c"
      case 193: // $bb238
        var $1132=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        var $1133=(($1132+4)&4294967295); //@line 2844 "_cursesmodule.c"
        var $1134=HEAP[$1133]; //@line 2844 "_cursesmodule.c"
        var $1135=(($1134+24)&4294967295); //@line 2844 "_cursesmodule.c"
        var $1136=HEAP[$1135]; //@line 2844 "_cursesmodule.c"
        var $1137=HEAP[$o235]; //@line 2844 "_cursesmodule.c"
        FUNCTION_TABLE[$1136]($1137); //@line 2844 "_cursesmodule.c"
        __label__ = 194; break; //@line 2844 "_cursesmodule.c"
      case 194: // $bb239
        var $1138=_PyInt_FromLong(2097152); //@line 2845 "_cursesmodule.c"
        HEAP[$o240]=$1138; //@line 2845 "_cursesmodule.c"
        var $1139=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1140=($1139)!=0; //@line 2845 "_cursesmodule.c"
        if ($1140) { __label__ = 195; break; } else { __label__ = 198; break; } //@line 2845 "_cursesmodule.c"
      case 195: // $bb241
        var $1141=HEAP[_ModDict]; //@line 2845 "_cursesmodule.c"
        var $1142=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1143=_PyDict_SetItemString($1141, ((__str404)&4294967295), $1142); //@line 2845 "_cursesmodule.c"
        var $1144=((($1143))|0)==0; //@line 2845 "_cursesmodule.c"
        if ($1144) { __label__ = 196; break; } else { __label__ = 198; break; } //@line 2845 "_cursesmodule.c"
      case 196: // $bb242
        var $1145=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1146=(($1145)&4294967295); //@line 2845 "_cursesmodule.c"
        var $1147=HEAP[$1146]; //@line 2845 "_cursesmodule.c"
        var $1148=((($1147) - 1)&4294967295); //@line 2845 "_cursesmodule.c"
        var $1149=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1150=(($1149)&4294967295); //@line 2845 "_cursesmodule.c"
        HEAP[$1150]=$1148; //@line 2845 "_cursesmodule.c"
        var $1151=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1152=(($1151)&4294967295); //@line 2845 "_cursesmodule.c"
        var $1153=HEAP[$1152]; //@line 2845 "_cursesmodule.c"
        var $1154=((($1153))|0)==0; //@line 2845 "_cursesmodule.c"
        if ($1154) { __label__ = 197; break; } else { __label__ = 198; break; } //@line 2845 "_cursesmodule.c"
      case 197: // $bb243
        var $1155=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        var $1156=(($1155+4)&4294967295); //@line 2845 "_cursesmodule.c"
        var $1157=HEAP[$1156]; //@line 2845 "_cursesmodule.c"
        var $1158=(($1157+24)&4294967295); //@line 2845 "_cursesmodule.c"
        var $1159=HEAP[$1158]; //@line 2845 "_cursesmodule.c"
        var $1160=HEAP[$o240]; //@line 2845 "_cursesmodule.c"
        FUNCTION_TABLE[$1159]($1160); //@line 2845 "_cursesmodule.c"
        __label__ = 198; break; //@line 2845 "_cursesmodule.c"
      case 198: // $bb244
        var $1161=_PyInt_FromLong(4194304); //@line 2846 "_cursesmodule.c"
        HEAP[$o245]=$1161; //@line 2846 "_cursesmodule.c"
        var $1162=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1163=($1162)!=0; //@line 2846 "_cursesmodule.c"
        if ($1163) { __label__ = 199; break; } else { __label__ = 202; break; } //@line 2846 "_cursesmodule.c"
      case 199: // $bb246
        var $1164=HEAP[_ModDict]; //@line 2846 "_cursesmodule.c"
        var $1165=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1166=_PyDict_SetItemString($1164, ((__str405)&4294967295), $1165); //@line 2846 "_cursesmodule.c"
        var $1167=((($1166))|0)==0; //@line 2846 "_cursesmodule.c"
        if ($1167) { __label__ = 200; break; } else { __label__ = 202; break; } //@line 2846 "_cursesmodule.c"
      case 200: // $bb247
        var $1168=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1169=(($1168)&4294967295); //@line 2846 "_cursesmodule.c"
        var $1170=HEAP[$1169]; //@line 2846 "_cursesmodule.c"
        var $1171=((($1170) - 1)&4294967295); //@line 2846 "_cursesmodule.c"
        var $1172=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1173=(($1172)&4294967295); //@line 2846 "_cursesmodule.c"
        HEAP[$1173]=$1171; //@line 2846 "_cursesmodule.c"
        var $1174=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1175=(($1174)&4294967295); //@line 2846 "_cursesmodule.c"
        var $1176=HEAP[$1175]; //@line 2846 "_cursesmodule.c"
        var $1177=((($1176))|0)==0; //@line 2846 "_cursesmodule.c"
        if ($1177) { __label__ = 201; break; } else { __label__ = 202; break; } //@line 2846 "_cursesmodule.c"
      case 201: // $bb248
        var $1178=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        var $1179=(($1178+4)&4294967295); //@line 2846 "_cursesmodule.c"
        var $1180=HEAP[$1179]; //@line 2846 "_cursesmodule.c"
        var $1181=(($1180+24)&4294967295); //@line 2846 "_cursesmodule.c"
        var $1182=HEAP[$1181]; //@line 2846 "_cursesmodule.c"
        var $1183=HEAP[$o245]; //@line 2846 "_cursesmodule.c"
        FUNCTION_TABLE[$1182]($1183); //@line 2846 "_cursesmodule.c"
        __label__ = 202; break; //@line 2846 "_cursesmodule.c"
      case 202: // $bb249
        var $1184=_PyInt_FromLong(33554432); //@line 2848 "_cursesmodule.c"
        HEAP[$o250]=$1184; //@line 2848 "_cursesmodule.c"
        var $1185=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1186=($1185)!=0; //@line 2848 "_cursesmodule.c"
        if ($1186) { __label__ = 203; break; } else { __label__ = 206; break; } //@line 2848 "_cursesmodule.c"
      case 203: // $bb251
        var $1187=HEAP[_ModDict]; //@line 2848 "_cursesmodule.c"
        var $1188=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1189=_PyDict_SetItemString($1187, ((__str406)&4294967295), $1188); //@line 2848 "_cursesmodule.c"
        var $1190=((($1189))|0)==0; //@line 2848 "_cursesmodule.c"
        if ($1190) { __label__ = 204; break; } else { __label__ = 206; break; } //@line 2848 "_cursesmodule.c"
      case 204: // $bb252
        var $1191=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1192=(($1191)&4294967295); //@line 2848 "_cursesmodule.c"
        var $1193=HEAP[$1192]; //@line 2848 "_cursesmodule.c"
        var $1194=((($1193) - 1)&4294967295); //@line 2848 "_cursesmodule.c"
        var $1195=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1196=(($1195)&4294967295); //@line 2848 "_cursesmodule.c"
        HEAP[$1196]=$1194; //@line 2848 "_cursesmodule.c"
        var $1197=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1198=(($1197)&4294967295); //@line 2848 "_cursesmodule.c"
        var $1199=HEAP[$1198]; //@line 2848 "_cursesmodule.c"
        var $1200=((($1199))|0)==0; //@line 2848 "_cursesmodule.c"
        if ($1200) { __label__ = 205; break; } else { __label__ = 206; break; } //@line 2848 "_cursesmodule.c"
      case 205: // $bb253
        var $1201=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        var $1202=(($1201+4)&4294967295); //@line 2848 "_cursesmodule.c"
        var $1203=HEAP[$1202]; //@line 2848 "_cursesmodule.c"
        var $1204=(($1203+24)&4294967295); //@line 2848 "_cursesmodule.c"
        var $1205=HEAP[$1204]; //@line 2848 "_cursesmodule.c"
        var $1206=HEAP[$o250]; //@line 2848 "_cursesmodule.c"
        FUNCTION_TABLE[$1205]($1206); //@line 2848 "_cursesmodule.c"
        __label__ = 206; break; //@line 2848 "_cursesmodule.c"
      case 206: // $bb254
        var $1207=_PyInt_FromLong(16777216); //@line 2849 "_cursesmodule.c"
        HEAP[$o255]=$1207; //@line 2849 "_cursesmodule.c"
        var $1208=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1209=($1208)!=0; //@line 2849 "_cursesmodule.c"
        if ($1209) { __label__ = 207; break; } else { __label__ = 210; break; } //@line 2849 "_cursesmodule.c"
      case 207: // $bb256
        var $1210=HEAP[_ModDict]; //@line 2849 "_cursesmodule.c"
        var $1211=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1212=_PyDict_SetItemString($1210, ((__str407)&4294967295), $1211); //@line 2849 "_cursesmodule.c"
        var $1213=((($1212))|0)==0; //@line 2849 "_cursesmodule.c"
        if ($1213) { __label__ = 208; break; } else { __label__ = 210; break; } //@line 2849 "_cursesmodule.c"
      case 208: // $bb257
        var $1214=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1215=(($1214)&4294967295); //@line 2849 "_cursesmodule.c"
        var $1216=HEAP[$1215]; //@line 2849 "_cursesmodule.c"
        var $1217=((($1216) - 1)&4294967295); //@line 2849 "_cursesmodule.c"
        var $1218=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1219=(($1218)&4294967295); //@line 2849 "_cursesmodule.c"
        HEAP[$1219]=$1217; //@line 2849 "_cursesmodule.c"
        var $1220=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1221=(($1220)&4294967295); //@line 2849 "_cursesmodule.c"
        var $1222=HEAP[$1221]; //@line 2849 "_cursesmodule.c"
        var $1223=((($1222))|0)==0; //@line 2849 "_cursesmodule.c"
        if ($1223) { __label__ = 209; break; } else { __label__ = 210; break; } //@line 2849 "_cursesmodule.c"
      case 209: // $bb258
        var $1224=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        var $1225=(($1224+4)&4294967295); //@line 2849 "_cursesmodule.c"
        var $1226=HEAP[$1225]; //@line 2849 "_cursesmodule.c"
        var $1227=(($1226+24)&4294967295); //@line 2849 "_cursesmodule.c"
        var $1228=HEAP[$1227]; //@line 2849 "_cursesmodule.c"
        var $1229=HEAP[$o255]; //@line 2849 "_cursesmodule.c"
        FUNCTION_TABLE[$1228]($1229); //@line 2849 "_cursesmodule.c"
        __label__ = 210; break; //@line 2849 "_cursesmodule.c"
      case 210: // $bb259
        var $1230=_PyInt_FromLong(67108864); //@line 2850 "_cursesmodule.c"
        HEAP[$o260]=$1230; //@line 2850 "_cursesmodule.c"
        var $1231=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1232=($1231)!=0; //@line 2850 "_cursesmodule.c"
        if ($1232) { __label__ = 211; break; } else { __label__ = 214; break; } //@line 2850 "_cursesmodule.c"
      case 211: // $bb261
        var $1233=HEAP[_ModDict]; //@line 2850 "_cursesmodule.c"
        var $1234=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1235=_PyDict_SetItemString($1233, ((__str408)&4294967295), $1234); //@line 2850 "_cursesmodule.c"
        var $1236=((($1235))|0)==0; //@line 2850 "_cursesmodule.c"
        if ($1236) { __label__ = 212; break; } else { __label__ = 214; break; } //@line 2850 "_cursesmodule.c"
      case 212: // $bb262
        var $1237=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1238=(($1237)&4294967295); //@line 2850 "_cursesmodule.c"
        var $1239=HEAP[$1238]; //@line 2850 "_cursesmodule.c"
        var $1240=((($1239) - 1)&4294967295); //@line 2850 "_cursesmodule.c"
        var $1241=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1242=(($1241)&4294967295); //@line 2850 "_cursesmodule.c"
        HEAP[$1242]=$1240; //@line 2850 "_cursesmodule.c"
        var $1243=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1244=(($1243)&4294967295); //@line 2850 "_cursesmodule.c"
        var $1245=HEAP[$1244]; //@line 2850 "_cursesmodule.c"
        var $1246=((($1245))|0)==0; //@line 2850 "_cursesmodule.c"
        if ($1246) { __label__ = 213; break; } else { __label__ = 214; break; } //@line 2850 "_cursesmodule.c"
      case 213: // $bb263
        var $1247=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        var $1248=(($1247+4)&4294967295); //@line 2850 "_cursesmodule.c"
        var $1249=HEAP[$1248]; //@line 2850 "_cursesmodule.c"
        var $1250=(($1249+24)&4294967295); //@line 2850 "_cursesmodule.c"
        var $1251=HEAP[$1250]; //@line 2850 "_cursesmodule.c"
        var $1252=HEAP[$o260]; //@line 2850 "_cursesmodule.c"
        FUNCTION_TABLE[$1251]($1252); //@line 2850 "_cursesmodule.c"
        __label__ = 214; break; //@line 2850 "_cursesmodule.c"
      case 214: // $bb264
        var $1253=_PyInt_FromLong(134217727); //@line 2852 "_cursesmodule.c"
        HEAP[$o265]=$1253; //@line 2852 "_cursesmodule.c"
        var $1254=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1255=($1254)!=0; //@line 2852 "_cursesmodule.c"
        if ($1255) { __label__ = 215; break; } else { __label__ = 218; break; } //@line 2852 "_cursesmodule.c"
      case 215: // $bb266
        var $1256=HEAP[_ModDict]; //@line 2852 "_cursesmodule.c"
        var $1257=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1258=_PyDict_SetItemString($1256, ((__str409)&4294967295), $1257); //@line 2852 "_cursesmodule.c"
        var $1259=((($1258))|0)==0; //@line 2852 "_cursesmodule.c"
        if ($1259) { __label__ = 216; break; } else { __label__ = 218; break; } //@line 2852 "_cursesmodule.c"
      case 216: // $bb267
        var $1260=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1261=(($1260)&4294967295); //@line 2852 "_cursesmodule.c"
        var $1262=HEAP[$1261]; //@line 2852 "_cursesmodule.c"
        var $1263=((($1262) - 1)&4294967295); //@line 2852 "_cursesmodule.c"
        var $1264=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1265=(($1264)&4294967295); //@line 2852 "_cursesmodule.c"
        HEAP[$1265]=$1263; //@line 2852 "_cursesmodule.c"
        var $1266=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1267=(($1266)&4294967295); //@line 2852 "_cursesmodule.c"
        var $1268=HEAP[$1267]; //@line 2852 "_cursesmodule.c"
        var $1269=((($1268))|0)==0; //@line 2852 "_cursesmodule.c"
        if ($1269) { __label__ = 217; break; } else { __label__ = 218; break; } //@line 2852 "_cursesmodule.c"
      case 217: // $bb268
        var $1270=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        var $1271=(($1270+4)&4294967295); //@line 2852 "_cursesmodule.c"
        var $1272=HEAP[$1271]; //@line 2852 "_cursesmodule.c"
        var $1273=(($1272+24)&4294967295); //@line 2852 "_cursesmodule.c"
        var $1274=HEAP[$1273]; //@line 2852 "_cursesmodule.c"
        var $1275=HEAP[$o265]; //@line 2852 "_cursesmodule.c"
        FUNCTION_TABLE[$1274]($1275); //@line 2852 "_cursesmodule.c"
        __label__ = 218; break; //@line 2852 "_cursesmodule.c"
      case 218: // $bb269
        var $1276=_PyInt_FromLong(134217728); //@line 2853 "_cursesmodule.c"
        HEAP[$o270]=$1276; //@line 2853 "_cursesmodule.c"
        var $1277=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1278=($1277)!=0; //@line 2853 "_cursesmodule.c"
        if ($1278) { __label__ = 219; break; } else { __label__ = 222; break; } //@line 2853 "_cursesmodule.c"
      case 219: // $bb271
        var $1279=HEAP[_ModDict]; //@line 2853 "_cursesmodule.c"
        var $1280=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1281=_PyDict_SetItemString($1279, ((__str410)&4294967295), $1280); //@line 2853 "_cursesmodule.c"
        var $1282=((($1281))|0)==0; //@line 2853 "_cursesmodule.c"
        if ($1282) { __label__ = 220; break; } else { __label__ = 222; break; } //@line 2853 "_cursesmodule.c"
      case 220: // $bb272
        var $1283=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1284=(($1283)&4294967295); //@line 2853 "_cursesmodule.c"
        var $1285=HEAP[$1284]; //@line 2853 "_cursesmodule.c"
        var $1286=((($1285) - 1)&4294967295); //@line 2853 "_cursesmodule.c"
        var $1287=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1288=(($1287)&4294967295); //@line 2853 "_cursesmodule.c"
        HEAP[$1288]=$1286; //@line 2853 "_cursesmodule.c"
        var $1289=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1290=(($1289)&4294967295); //@line 2853 "_cursesmodule.c"
        var $1291=HEAP[$1290]; //@line 2853 "_cursesmodule.c"
        var $1292=((($1291))|0)==0; //@line 2853 "_cursesmodule.c"
        if ($1292) { __label__ = 221; break; } else { __label__ = 222; break; } //@line 2853 "_cursesmodule.c"
      case 221: // $bb273
        var $1293=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        var $1294=(($1293+4)&4294967295); //@line 2853 "_cursesmodule.c"
        var $1295=HEAP[$1294]; //@line 2853 "_cursesmodule.c"
        var $1296=(($1295+24)&4294967295); //@line 2853 "_cursesmodule.c"
        var $1297=HEAP[$1296]; //@line 2853 "_cursesmodule.c"
        var $1298=HEAP[$o270]; //@line 2853 "_cursesmodule.c"
        FUNCTION_TABLE[$1297]($1298); //@line 2853 "_cursesmodule.c"
        __label__ = 222; break; //@line 2853 "_cursesmodule.c"
      case 222: // $bb274
        HEAP[$key]=257; //@line 2861 "_cursesmodule.c"
        __label__ = 243; break; //@line 2861 "_cursesmodule.c"
      case 223: // $bb275
        var $1299=HEAP[$key]; //@line 2862 "_cursesmodule.c"
        var $1300=_keyname($1299); //@line 2862 "_cursesmodule.c"
        HEAP[$key_n]=$1300; //@line 2862 "_cursesmodule.c"
        var $1301=HEAP[$key_n]; //@line 2863 "_cursesmodule.c"
        var $1302=($1301)==0; //@line 2863 "_cursesmodule.c"
        if ($1302) { __label__ = 242; break; } else { __label__ = 224; break; } //@line 2863 "_cursesmodule.c"
      case 224: // $bb276
        var $1303=HEAP[$key_n]; //@line 2863 "_cursesmodule.c"
        var $1304=_strcmp($1303, ((__str411)&4294967295)); //@line 2863 "_cursesmodule.c"
        var $1305=((($1304))|0)==0; //@line 2863 "_cursesmodule.c"
        if ($1305) { __label__ = 242; break; } else { __label__ = 225; break; } //@line 2863 "_cursesmodule.c"
      case 225: // $bb277
        var $1306=HEAP[$key_n]; //@line 2865 "_cursesmodule.c"
        var $1307=_strncmp($1306, ((__str412)&4294967295), 6); //@line 2865 "_cursesmodule.c"
        var $1308=((($1307))|0)==0; //@line 2865 "_cursesmodule.c"
        if ($1308) { __label__ = 226; break; } else { __label__ = 235; break; } //@line 2865 "_cursesmodule.c"
      case 226: // $bb278
        var $1309=HEAP[$key_n]; //@line 2867 "_cursesmodule.c"
        var $1310=_strlen($1309); //@line 2867 "_cursesmodule.c"
        var $1311=((($1310) + 1)&4294967295); //@line 2867 "_cursesmodule.c"
        var $1312=_malloc($1311); //@line 2867 "_cursesmodule.c"
        HEAP[$key_n2]=$1312; //@line 2867 "_cursesmodule.c"
        var $1313=HEAP[$key_n2]; //@line 2868 "_cursesmodule.c"
        var $1314=($1313)==0; //@line 2868 "_cursesmodule.c"
        if ($1314) { __label__ = 227; break; } else { __label__ = 228; break; } //@line 2868 "_cursesmodule.c"
      case 227: // $bb279
        var $1315=_PyErr_NoMemory(); //@line 2869 "_cursesmodule.c"
        __label__ = 244; break; //@line 2869 "_cursesmodule.c"
      case 228: // $bb280
        var $1316=HEAP[$key_n]; //@line 2872 "_cursesmodule.c"
        HEAP[$p1]=$1316; //@line 2872 "_cursesmodule.c"
        var $1317=HEAP[$key_n2]; //@line 2873 "_cursesmodule.c"
        HEAP[$p2]=$1317; //@line 2873 "_cursesmodule.c"
        __label__ = 233; break; //@line 2873 "_cursesmodule.c"
      case 229: // $bb281
        var $1318=HEAP[$p1]; //@line 2875 "_cursesmodule.c"
        var $1319=HEAP[$1318]; //@line 2875 "_cursesmodule.c"
        var $1320=reSign(($1319), 8, 0)!=40; //@line 2875 "_cursesmodule.c"
        if ($1320) { __label__ = 230; break; } else { __label__ = 232; break; } //@line 2875 "_cursesmodule.c"
      case 230: // $bb282
        var $1321=HEAP[$p1]; //@line 2875 "_cursesmodule.c"
        var $1322=HEAP[$1321]; //@line 2875 "_cursesmodule.c"
        var $1323=reSign(($1322), 8, 0)!=41; //@line 2875 "_cursesmodule.c"
        if ($1323) { __label__ = 231; break; } else { __label__ = 232; break; } //@line 2875 "_cursesmodule.c"
      case 231: // $bb283
        var $1324=HEAP[$p1]; //@line 2876 "_cursesmodule.c"
        var $1325=HEAP[$1324]; //@line 2876 "_cursesmodule.c"
        var $1326=HEAP[$p2]; //@line 2876 "_cursesmodule.c"
        HEAP[$1326]=$1325; //@line 2876 "_cursesmodule.c"
        var $1327=HEAP[$p2]; //@line 2877 "_cursesmodule.c"
        var $1328=(($1327+1)&4294967295); //@line 2877 "_cursesmodule.c"
        HEAP[$p2]=$1328; //@line 2877 "_cursesmodule.c"
        __label__ = 232; break; //@line 2877 "_cursesmodule.c"
      case 232: // $bb284
        var $1329=HEAP[$p1]; //@line 2879 "_cursesmodule.c"
        var $1330=(($1329+1)&4294967295); //@line 2879 "_cursesmodule.c"
        HEAP[$p1]=$1330; //@line 2879 "_cursesmodule.c"
        __label__ = 233; break; //@line 2879 "_cursesmodule.c"
      case 233: // $bb285
        var $1331=HEAP[$p1]; //@line 2874 "_cursesmodule.c"
        var $1332=HEAP[$1331]; //@line 2874 "_cursesmodule.c"
        var $1333=reSign(($1332), 8, 0)!=0; //@line 2874 "_cursesmodule.c"
        if ($1333) { __label__ = 229; break; } else { __label__ = 234; break; } //@line 2874 "_cursesmodule.c"
      case 234: // $bb286
        var $1334=HEAP[$p2]; //@line 2881 "_cursesmodule.c"
        HEAP[$1334]=0; //@line 2881 "_cursesmodule.c"
        __label__ = 236; break; //@line 2881 "_cursesmodule.c"
      case 235: // $bb287
        var $1335=HEAP[$key_n]; //@line 2883 "_cursesmodule.c"
        HEAP[$key_n2]=$1335; //@line 2883 "_cursesmodule.c"
        __label__ = 236; break; //@line 2883 "_cursesmodule.c"
      case 236: // $bb288
        var $1336=HEAP[$key]; //@line 2884 "_cursesmodule.c"
        var $1337=_PyInt_FromLong($1336); //@line 2884 "_cursesmodule.c"
        HEAP[$o289]=$1337; //@line 2884 "_cursesmodule.c"
        var $1338=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1339=($1338)!=0; //@line 2884 "_cursesmodule.c"
        if ($1339) { __label__ = 237; break; } else { __label__ = 240; break; } //@line 2884 "_cursesmodule.c"
      case 237: // $bb290
        var $1340=HEAP[_ModDict]; //@line 2884 "_cursesmodule.c"
        var $1341=HEAP[$key_n2]; //@line 2884 "_cursesmodule.c"
        var $1342=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1343=_PyDict_SetItemString($1340, $1341, $1342); //@line 2884 "_cursesmodule.c"
        var $1344=((($1343))|0)==0; //@line 2884 "_cursesmodule.c"
        if ($1344) { __label__ = 238; break; } else { __label__ = 240; break; } //@line 2884 "_cursesmodule.c"
      case 238: // $bb291
        var $1345=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1346=(($1345)&4294967295); //@line 2884 "_cursesmodule.c"
        var $1347=HEAP[$1346]; //@line 2884 "_cursesmodule.c"
        var $1348=((($1347) - 1)&4294967295); //@line 2884 "_cursesmodule.c"
        var $1349=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1350=(($1349)&4294967295); //@line 2884 "_cursesmodule.c"
        HEAP[$1350]=$1348; //@line 2884 "_cursesmodule.c"
        var $1351=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1352=(($1351)&4294967295); //@line 2884 "_cursesmodule.c"
        var $1353=HEAP[$1352]; //@line 2884 "_cursesmodule.c"
        var $1354=((($1353))|0)==0; //@line 2884 "_cursesmodule.c"
        if ($1354) { __label__ = 239; break; } else { __label__ = 240; break; } //@line 2884 "_cursesmodule.c"
      case 239: // $bb292
        var $1355=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        var $1356=(($1355+4)&4294967295); //@line 2884 "_cursesmodule.c"
        var $1357=HEAP[$1356]; //@line 2884 "_cursesmodule.c"
        var $1358=(($1357+24)&4294967295); //@line 2884 "_cursesmodule.c"
        var $1359=HEAP[$1358]; //@line 2884 "_cursesmodule.c"
        var $1360=HEAP[$o289]; //@line 2884 "_cursesmodule.c"
        FUNCTION_TABLE[$1359]($1360); //@line 2884 "_cursesmodule.c"
        __label__ = 240; break; //@line 2884 "_cursesmodule.c"
      case 240: // $bb293
        var $1361=HEAP[$key_n2]; //@line 2885 "_cursesmodule.c"
        var $1362=HEAP[$key_n]; //@line 2885 "_cursesmodule.c"
        var $1363=($1361)!=($1362); //@line 2885 "_cursesmodule.c"
        if ($1363) { __label__ = 241; break; } else { __label__ = 242; break; } //@line 2885 "_cursesmodule.c"
      case 241: // $bb294
        var $1364=HEAP[$key_n2]; //@line 2886 "_cursesmodule.c"
        _free($1364); //@line 2886 "_cursesmodule.c"
        __label__ = 242; break; //@line 2886 "_cursesmodule.c"
      case 242: // $bb295
        var $1365=HEAP[$key]; //@line 2861 "_cursesmodule.c"
        var $1366=((($1365) + 1)&4294967295); //@line 2861 "_cursesmodule.c"
        HEAP[$key]=$1366; //@line 2861 "_cursesmodule.c"
        __label__ = 243; break; //@line 2861 "_cursesmodule.c"
      case 243: // $bb296
        var $1367=HEAP[$key]; //@line 2861 "_cursesmodule.c"
        var $1368=((($1367))|0) <= 510; //@line 2861 "_cursesmodule.c"
        if ($1368) { __label__ = 223; break; } else { __label__ = 244; break; } //@line 2861 "_cursesmodule.c"
      case 244: // $bb297
        var $1369=_PyInt_FromLong(257); //@line 2889 "_cursesmodule.c"
        HEAP[$o298]=$1369; //@line 2889 "_cursesmodule.c"
        var $1370=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1371=($1370)!=0; //@line 2889 "_cursesmodule.c"
        if ($1371) { __label__ = 245; break; } else { __label__ = 248; break; } //@line 2889 "_cursesmodule.c"
      case 245: // $bb299
        var $1372=HEAP[_ModDict]; //@line 2889 "_cursesmodule.c"
        var $1373=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1374=_PyDict_SetItemString($1372, ((__str413)&4294967295), $1373); //@line 2889 "_cursesmodule.c"
        var $1375=((($1374))|0)==0; //@line 2889 "_cursesmodule.c"
        if ($1375) { __label__ = 246; break; } else { __label__ = 248; break; } //@line 2889 "_cursesmodule.c"
      case 246: // $bb300
        var $1376=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1377=(($1376)&4294967295); //@line 2889 "_cursesmodule.c"
        var $1378=HEAP[$1377]; //@line 2889 "_cursesmodule.c"
        var $1379=((($1378) - 1)&4294967295); //@line 2889 "_cursesmodule.c"
        var $1380=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1381=(($1380)&4294967295); //@line 2889 "_cursesmodule.c"
        HEAP[$1381]=$1379; //@line 2889 "_cursesmodule.c"
        var $1382=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1383=(($1382)&4294967295); //@line 2889 "_cursesmodule.c"
        var $1384=HEAP[$1383]; //@line 2889 "_cursesmodule.c"
        var $1385=((($1384))|0)==0; //@line 2889 "_cursesmodule.c"
        if ($1385) { __label__ = 247; break; } else { __label__ = 248; break; } //@line 2889 "_cursesmodule.c"
      case 247: // $bb301
        var $1386=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        var $1387=(($1386+4)&4294967295); //@line 2889 "_cursesmodule.c"
        var $1388=HEAP[$1387]; //@line 2889 "_cursesmodule.c"
        var $1389=(($1388+24)&4294967295); //@line 2889 "_cursesmodule.c"
        var $1390=HEAP[$1389]; //@line 2889 "_cursesmodule.c"
        var $1391=HEAP[$o298]; //@line 2889 "_cursesmodule.c"
        FUNCTION_TABLE[$1390]($1391); //@line 2889 "_cursesmodule.c"
        __label__ = 248; break; //@line 2889 "_cursesmodule.c"
      case 248: // $bb302
        var $1392=_PyInt_FromLong(511); //@line 2890 "_cursesmodule.c"
        HEAP[$o303]=$1392; //@line 2890 "_cursesmodule.c"
        var $1393=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1394=($1393)!=0; //@line 2890 "_cursesmodule.c"
        if ($1394) { __label__ = 249; break; } else { __label__ = 252; break; } //@line 2890 "_cursesmodule.c"
      case 249: // $bb304
        var $1395=HEAP[_ModDict]; //@line 2890 "_cursesmodule.c"
        var $1396=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1397=_PyDict_SetItemString($1395, ((__str414)&4294967295), $1396); //@line 2890 "_cursesmodule.c"
        var $1398=((($1397))|0)==0; //@line 2890 "_cursesmodule.c"
        if ($1398) { __label__ = 250; break; } else { __label__ = 252; break; } //@line 2890 "_cursesmodule.c"
      case 250: // $bb305
        var $1399=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1400=(($1399)&4294967295); //@line 2890 "_cursesmodule.c"
        var $1401=HEAP[$1400]; //@line 2890 "_cursesmodule.c"
        var $1402=((($1401) - 1)&4294967295); //@line 2890 "_cursesmodule.c"
        var $1403=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1404=(($1403)&4294967295); //@line 2890 "_cursesmodule.c"
        HEAP[$1404]=$1402; //@line 2890 "_cursesmodule.c"
        var $1405=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1406=(($1405)&4294967295); //@line 2890 "_cursesmodule.c"
        var $1407=HEAP[$1406]; //@line 2890 "_cursesmodule.c"
        var $1408=((($1407))|0)==0; //@line 2890 "_cursesmodule.c"
        if ($1408) { __label__ = 251; break; } else { __label__ = 252; break; } //@line 2890 "_cursesmodule.c"
      case 251: // $bb306
        var $1409=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        var $1410=(($1409+4)&4294967295); //@line 2890 "_cursesmodule.c"
        var $1411=HEAP[$1410]; //@line 2890 "_cursesmodule.c"
        var $1412=(($1411+24)&4294967295); //@line 2890 "_cursesmodule.c"
        var $1413=HEAP[$1412]; //@line 2890 "_cursesmodule.c"
        var $1414=HEAP[$o303]; //@line 2890 "_cursesmodule.c"
        FUNCTION_TABLE[$1413]($1414); //@line 2890 "_cursesmodule.c"
        __label__ = 252; break; //@line 2890 "_cursesmodule.c"
      case 252: // $bb307
        __label__ = 253; break; //@line 2749 "_cursesmodule.c"
      case 253: // $return
        STACKTOP = __stackBase__;
        return; //@line 2749 "_cursesmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_curses"] = _init_curses;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_func_PyCursesSetupTermCalled,0,_func_PyCursesInitialised,0,_func_PyCursesInitialisedColor,0,_PyCursesWindow_AddCh,0,_PyCursesWindow_AddNStr,0,_PyCursesWindow_AddStr,0,_PyCursesWindow_AttrOff,0,_PyCursesWindow_AttrOn,0,_PyCursesWindow_AttrSet,0,_PyCursesWindow_Bkgd,0,_PyCursesWindow_ChgAt,0,_PyCursesWindow_BkgdSet,0,_PyCursesWindow_Border,0,_PyCursesWindow_Box,0,_PyCursesWindow_wclear,0,_PyCursesWindow_clearok,0,_PyCursesWindow_wclrtobot,0,_PyCursesWindow_wclrtoeol,0,_PyCursesWindow_wcursyncup,0,_PyCursesWindow_DelCh,0,_PyCursesWindow_wdeleteln,0,_PyCursesWindow_DerWin,0,_PyCursesWindow_EchoChar,0,_PyCursesWindow_Enclose,0,_PyCursesWindow_werase,0,_PyCursesWindow_getbegyx,0,_PyCursesWindow_GetBkgd,0,_PyCursesWindow_GetCh,0,_PyCursesWindow_GetKey,0,_PyCursesWindow_getmaxyx,0,_PyCursesWindow_getparyx,0,_PyCursesWindow_GetStr,0,_PyCursesWindow_getyx,0,_PyCursesWindow_Hline,0,_PyCursesWindow_idcok,0,_PyCursesWindow_idlok,0,_PyCursesWindow_immedok,0,_PyCursesWindow_InCh,0,_PyCursesWindow_InsCh,0,_PyCursesWindow_winsdelln,0,_PyCursesWindow_winsertln,0,_PyCursesWindow_InsNStr,0,_PyCursesWindow_InsStr,0,_PyCursesWindow_InStr,0,_PyCursesWindow_Is_LineTouched,0,_PyCursesWindow_is_wintouched,0,_PyCursesWindow_keypad,0,_PyCursesWindow_leaveok,0,_PyCursesWindow_wmove,0,_PyCursesWindow_mvderwin,0,_PyCursesWindow_mvwin,0,_PyCursesWindow_nodelay,0,_PyCursesWindow_notimeout,0,_PyCursesWindow_NoOutRefresh,0,_PyCursesWindow_Overlay,0,_PyCursesWindow_Overwrite,0,_PyCursesWindow_PutWin,0,_PyCursesWindow_RedrawLine,0,_PyCursesWindow_redrawwin,0,_PyCursesWindow_Refresh,0,_PyCursesWindow_wresize,0,_PyCursesWindow_Scroll,0,_PyCursesWindow_scrollok,0,_PyCursesWindow_SetScrollRegion,0,_PyCursesWindow_wstandend,0,_PyCursesWindow_wstandout,0,_PyCursesWindow_SubWin,0,_PyCursesWindow_wsyncdown,0,_PyCursesWindow_syncok,0,_PyCursesWindow_wsyncup,0,_PyCursesWindow_wtimeout,0,_PyCursesWindow_TouchLine,0,_PyCursesWindow_touchwin,0,_PyCursesWindow_untouchwin,0,_PyCursesWindow_Vline,0,_PyCursesWindow_Dealloc,0,_PyCursesWindow_GetAttr,0,_PyCurses_baudrate,0,_PyCurses_beep,0,_PyCurses_can_change_color,0,_PyCurses_cbreak,0,_PyCurses_Color_Content,0,_PyCurses_color_pair,0,_PyCurses_Curs_Set,0,_PyCurses_def_prog_mode,0,_PyCurses_def_shell_mode,0,_PyCurses_Delay_Output,0,_PyCurses_doupdate,0,_PyCurses_echo,0,_PyCurses_endwin,0,_PyCurses_EraseChar,0,_PyCurses_filter,0,_PyCurses_flash,0,_PyCurses_flushinp,0,_PyCurses_GetMouse,0,_PyCurses_UngetMouse,0,_PyCurses_getsyx,0,_PyCurses_GetWin,0,_PyCurses_has_colors,0,_PyCurses_has_ic,0,_PyCurses_has_il,0,_PyCurses_has_key,0,_PyCurses_HalfDelay,0,_PyCurses_Init_Color,0,_PyCurses_Init_Pair,0,_PyCurses_InitScr,0,_PyCurses_IntrFlush,0,_PyCurses_isendwin,0,_PyCurses_Is_Term_Resized,0,_PyCurses_KeyName,0,_PyCurses_KillChar,0,_PyCurses_longname,0,_PyCurses_Meta,0,_PyCurses_MouseInterval,0,_PyCurses_MouseMask,0,_PyCurses_Napms,0,_PyCurses_NewPad,0,_PyCurses_NewWindow,0,_PyCurses_nl,0,_PyCurses_nocbreak,0,_PyCurses_noecho,0,_PyCurses_nonl,0,_PyCurses_noqiflush,0,_PyCurses_noraw,0,_PyCurses_Pair_Content,0,_PyCurses_pair_number,0,_PyCurses_Putp,0,_PyCurses_QiFlush,0,_PyCurses_raw,0,_PyCurses_reset_prog_mode,0,_PyCurses_reset_shell_mode,0,_PyCurses_resetty,0,_PyCurses_ResizeTerm,0,_PyCurses_Resize_Term,0,_PyCurses_savetty,0,_PyCurses_setsyx,0,_PyCurses_setupterm,0,_PyCurses_Start_Color,0,_PyCurses_termattrs,0,_PyCurses_termname,0,_PyCurses_tigetflag,0,_PyCurses_tigetnum,0,_PyCurses_tigetstr,0,_PyCurses_tparm,0,_PyCurses_TypeAhead,0,_PyCurses_UnCtrl,0,_PyCurses_UngetCh,0,_PyCurses_Use_Env,0,_PyCurses_Use_Default_Colors,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_PyCursesVersion=allocate(1, "i8*", ALLOC_NORMAL);
__str=allocate([50,46,50,0] /* 2.2\00 */, "i8", ALLOC_NORMAL);
_catchall_ERR=allocate(1, "i8*", ALLOC_NORMAL);
__str1=allocate([99,117,114,115,101,115,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* curses function retu */, "i8", ALLOC_NORMAL);
_catchall_NULL=allocate(1, "i8*", ALLOC_NORMAL);
__str2=allocate([99,117,114,115,101,115,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,78,85,76,76,0] /* curses function retu */, "i8", ALLOC_NORMAL);
_initialised_setupterm=allocate(1, "i32", ALLOC_NORMAL);
_initialised=allocate(1, "i32", ALLOC_NORMAL);
_initialisedcolors=allocate(1, "i32", ALLOC_NORMAL);
_PyCursesError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([37,115,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* %s() returned ERR\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([109,117,115,116,32,99,97,108,108,32,40,97,116,32,108,101,97,115,116,41,32,115,101,116,117,112,116,101,114,109,40,41,32,102,105,114,115,116,0] /* must call (at least) */, "i8", ALLOC_NORMAL);
__str5=allocate([109,117,115,116,32,99,97,108,108,32,105,110,105,116,115,99,114,40,41,32,102,105,114,115,116,0] /* must call initscr()  */, "i8", ALLOC_NORMAL);
__str6=allocate([109,117,115,116,32,99,97,108,108,32,115,116,97,114,116,95,99,111,108,111,114,40,41,32,102,105,114,115,116,0] /* must call start_colo */, "i8", ALLOC_NORMAL);
__str7=allocate([117,110,116,111,117,99,104,119,105,110,0] /* untouchwin\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([116,111,117,99,104,119,105,110,0] /* touchwin\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([114,101,100,114,97,119,119,105,110,0] /* redrawwin\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([119,105,110,115,101,114,116,108,110,0] /* winsertln\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([119,101,114,97,115,101,0] /* werase\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([119,100,101,108,101,116,101,108,110,0] /* wdeleteln\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([105,59,84,114,117,101,40,49,41,32,111,114,32,70,97,108,115,101,40,48,41,0] /* i;True(1) or False(0 */, "i8", ALLOC_NORMAL);
__str14=allocate([105,59,100,101,108,97,121,0] /* i;delay\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([105,105,0] /* ii\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([99,108,101,97,114,111,107,0] /* clearok\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([105,100,108,111,107,0] /* idlok\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([107,101,121,112,97,100,0] /* keypad\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([108,101,97,118,101,111,107,0] /* leaveok\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([110,111,100,101,108,97,121,0] /* nodelay\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([110,111,116,105,109,101,111,117,116,0] /* notimeout\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([115,99,114,111,108,108,111,107,0] /* scrollok\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([105,59,110,108,105,110,101,115,0] /* i;nlines\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([119,105,110,115,100,101,108,108,110,0] /* winsdelln\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([115,121,110,99,111,107,0] /* syncok\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([105,105,59,121,44,120,0] /* ii;y,x\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([109,118,119,105,110,0] /* mvwin\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([109,118,100,101,114,119,105,110,0] /* mvderwin\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([119,109,111,118,101,0] /* wmove\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([105,105,59,108,105,110,101,115,44,99,111,108,117,109,110,115,0] /* ii;lines,columns\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([119,114,101,115,105,122,101,0] /* wresize\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([79,59,99,104,32,111,114,32,105,110,116,0] /* O;ch or int\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([79,108,59,99,104,32,111,114,32,105,110,116,44,97,116,116,114,0] /* Ol;ch or int,attr\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([105,105,79,59,121,44,120,44,99,104,32,111,114,32,105,110,116,0] /* iiO;y,x,ch or int\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,105,79,108,59,121,44,120,44,99,104,32,111,114,32,105,110,116,44,32,97,116,116,114,0] /* iiOl;y,x,ch or int,  */, "i8", ALLOC_NORMAL);
__str36=allocate([97,100,100,99,104,32,114,101,113,117,105,114,101,115,32,49,32,116,111,32,52,32,97,114,103,117,109,101,110,116,115,0] /* addch requires 1 to  */, "i8", ALLOC_NORMAL);
__str37=allocate([97,114,103,117,109,101,110,116,32,49,32,111,114,32,51,32,109,117,115,116,32,98,101,32,97,32,99,104,32,111,114,32,97,110,32,105,110,116,0] /* argument 1 or 3 must */, "i8", ALLOC_NORMAL);
__str38=allocate([97,100,100,99,104,0] /* addch\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([115,59,115,116,114,0] /* s;str\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([115,108,59,115,116,114,44,97,116,116,114,0] /* sl;str,attr\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([105,105,115,59,105,110,116,44,105,110,116,44,115,116,114,0] /* iis;int,int,str\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([105,105,115,108,59,105,110,116,44,105,110,116,44,115,116,114,44,97,116,116,114,0] /* iisl;int,int,str,att */, "i8", ALLOC_NORMAL);
__str43=allocate([97,100,100,115,116,114,32,114,101,113,117,105,114,101,115,32,49,32,116,111,32,52,32,97,114,103,117,109,101,110,116,115,0] /* addstr requires 1 to */, "i8", ALLOC_NORMAL);
__str44=allocate([97,100,100,115,116,114,0] /* addstr\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([115,105,59,115,116,114,44,110,0] /* si;str,n\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([115,105,108,59,115,116,114,44,110,44,97,116,116,114,0] /* sil;str,n,attr\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([105,105,115,105,59,121,44,120,44,115,116,114,44,110,0] /* iisi;y,x,str,n\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([105,105,115,105,108,59,121,44,120,44,115,116,114,44,110,44,97,116,116,114,0] /* iisil;y,x,str,n,attr */, "i8", ALLOC_NORMAL);
__str49=allocate([97,100,100,110,115,116,114,32,114,101,113,117,105,114,101,115,32,50,32,116,111,32,53,32,97,114,103,117,109,101,110,116,115,0] /* addnstr requires 2 t */, "i8", ALLOC_NORMAL);
__str50=allocate([97,100,100,110,115,116,114,0] /* addnstr\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([98,107,103,100,32,114,101,113,117,105,114,101,115,32,49,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* bkgd requires 1 or 2 */, "i8", ALLOC_NORMAL);
__str52=allocate([98,107,103,100,0] /* bkgd\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([108,59,97,116,116,114,0] /* l;attr\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([97,116,116,114,111,102,102,0] /* attroff\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([97,116,116,114,111,110,0] /* attron\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([97,116,116,114,115,101,116,0] /* attrset\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([98,107,103,100,115,101,116,32,114,101,113,117,105,114,101,115,32,49,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* bkgdset requires 1 o */, "i8", ALLOC_NORMAL);
__str58=allocate([97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,97,32,99,104,32,111,114,32,97,110,32,105,110,116,0] /* argument 1 must be a */, "i8", ALLOC_NORMAL);
__str59=allocate([98,107,103,100,115,101,116,0] /* bkgdset\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([124,79,79,79,79,79,79,79,79,59,108,115,44,114,115,44,116,115,44,98,115,44,116,108,44,116,114,44,98,108,44,98,114,0] /* |OOOOOOOO;ls,rs,ts,b */, "i8", ALLOC_NORMAL);
__str61=allocate([97,114,103,117,109,101,110,116,32,37,105,32,109,117,115,116,32,98,101,32,97,32,99,104,32,111,114,32,97,110,32,105,110,116,0] /* argument %i must be  */, "i8", ALLOC_NORMAL);
__str62=allocate([108,108,59,118,101,114,116,105,110,116,44,104,111,114,105,110,116,0] /* ll;vertint,horint\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([105,108,59,110,44,97,116,116,114,0] /* il;n,attr\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([105,105,108,59,105,110,116,44,105,110,116,44,97,116,116,114,0] /* iil;int,int,attr\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([105,105,105,108,59,105,110,116,44,105,110,116,44,110,44,97,116,116,114,0] /* iiil;int,int,n,attr\ */, "i8", ALLOC_NORMAL);
__str66=allocate([99,104,103,97,116,32,114,101,113,117,105,114,101,115,32,49,32,116,111,32,52,32,97,114,103,117,109,101,110,116,115,0] /* chgat requires 1 to  */, "i8", ALLOC_NORMAL);
__str67=allocate([99,104,103,97,116,0] /* chgat\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([100,101,108,99,104,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* delch requires 0 or  */, "i8", ALLOC_NORMAL);
__str69=allocate([91,109,118,93,119,100,101,108,99,104,0] /* [mv]wdelch\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([105,105,59,98,101,103,105,110,95,121,44,98,101,103,105,110,95,120,0] /* ii;begin_y,begin_x\0 */, "i8", ALLOC_NORMAL);
__str71=allocate([105,105,105,105,59,110,108,105,110,101,115,44,110,99,111,108,115,44,98,101,103,105,110,95,121,44,98,101,103,105,110,95,120,0] /* iiii;nlines,ncols,be */, "i8", ALLOC_NORMAL);
__str72=allocate([100,101,114,119,105,110,32,114,101,113,117,105,114,101,115,32,50,32,111,114,32,52,32,97,114,103,117,109,101,110,116,115,0] /* derwin requires 2 or */, "i8", ALLOC_NORMAL);
__str73=allocate([101,99,104,111,99,104,97,114,32,114,101,113,117,105,114,101,115,32,49,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* echochar requires 1  */, "i8", ALLOC_NORMAL);
__str74=allocate([101,99,104,111,99,104,97,114,0] /* echochar\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([103,101,116,99,104,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* getch requires 0 or  */, "i8", ALLOC_NORMAL);
__str76=allocate([103,101,116,107,101,121,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* getkey requires 0 or */, "i8", ALLOC_NORMAL);
__str77=allocate([110,111,32,105,110,112,117,116,0] /* no input\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([99,0] /* c\00 */, "i8", ALLOC_NORMAL);
__str79=allocate(1, "i8", ALLOC_NORMAL);
__str80=allocate([105,59,110,0] /* i;n\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([105,105,105,59,121,44,120,44,110,0] /* iii;y,x,n\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([103,101,116,115,116,114,32,114,101,113,117,105,114,101,115,32,48,32,116,111,32,51,32,97,114,103,117,109,101,110,116,115,0] /* getstr requires 0 to */, "i8", ALLOC_NORMAL);
__str83=allocate([79,105,59,99,104,32,111,114,32,105,110,116,44,110,0] /* Oi;ch or int,n\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([79,105,108,59,99,104,32,111,114,32,105,110,116,44,110,44,97,116,116,114,0] /* Oil;ch or int,n,attr */, "i8", ALLOC_NORMAL);
__str85=allocate([105,105,79,105,59,121,44,120,44,99,104,32,111,114,32,105,110,116,44,110,0] /* iiOi;y,x,ch or int,n */, "i8", ALLOC_NORMAL);
__str86=allocate([105,105,79,105,108,59,32,121,44,120,44,99,104,32,111,114,32,105,110,116,44,110,44,97,116,116,114,0] /* iiOil; y,x,ch or int */, "i8", ALLOC_NORMAL);
__str87=allocate([104,108,105,110,101,32,114,101,113,117,105,114,101,115,32,50,32,116,111,32,53,32,97,114,103,117,109,101,110,116,115,0] /* hline requires 2 to  */, "i8", ALLOC_NORMAL);
__str88=allocate([104,108,105,110,101,0] /* hline\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([105,110,115,99,104,32,114,101,113,117,105,114,101,115,32,49,32,111,114,32,52,32,97,114,103,117,109,101,110,116,115,0] /* insch requires 1 or  */, "i8", ALLOC_NORMAL);
__str90=allocate([105,110,115,99,104,0] /* insch\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([105,110,99,104,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,50,32,97,114,103,117,109,101,110,116,115,0] /* inch requires 0 or 2 */, "i8", ALLOC_NORMAL);
__str92=allocate([105,110,115,116,114,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,51,32,97,114,103,117,109,101,110,116,115,0] /* instr requires 0 or  */, "i8", ALLOC_NORMAL);
__str93=allocate([105,105,115,59,121,44,120,44,115,116,114,0] /* iis;y,x,str\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([105,105,115,108,59,121,44,120,44,115,116,114,44,97,116,116,114,0] /* iisl;y,x,str,attr\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([105,110,115,115,116,114,32,114,101,113,117,105,114,101,115,32,49,32,116,111,32,52,32,97,114,103,117,109,101,110,116,115,0] /* insstr requires 1 to */, "i8", ALLOC_NORMAL);
__str96=allocate([105,110,115,115,116,114,0] /* insstr\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([105,110,115,110,115,116,114,32,114,101,113,117,105,114,101,115,32,50,32,116,111,32,53,32,97,114,103,117,109,101,110,116,115,0] /* insnstr requires 2 t */, "i8", ALLOC_NORMAL);
__str98=allocate([105,110,115,110,115,116,114,0] /* insnstr\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([105,59,108,105,110,101,0] /* i;line\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([105,115,95,108,105,110,101,116,111,117,99,104,101,100,58,32,108,105,110,101,32,110,117,109,98,101,114,32,111,117,116,115,105,100,101,32,111,102,32,98,111,117,110,100,97,114,105,101,115,0] /* is_linetouched: line */, "i8", ALLOC_NORMAL);
__str101=allocate([105,105,105,105,105,105,59,112,109,105,110,114,111,119,44,112,109,105,110,99,111,108,44,115,109,105,110,114,111,119,44,115,109,105,110,99,111,108,44,115,109,97,120,114,111,119,44,115,109,97,120,99,111,108,0] /* iiiiii;pminrow,pminc */, "i8", ALLOC_NORMAL);
__str102=allocate([112,110,111,117,116,114,101,102,114,101,115,104,0] /* pnoutrefresh\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([110,111,117,116,114,101,102,114,101,115,104,40,41,32,99,97,108,108,101,100,32,102,111,114,32,97,32,112,97,100,32,114,101,113,117,105,114,101,115,32,54,32,97,114,103,117,109,101,110,116,115,0] /* noutrefresh() called */, "i8", ALLOC_NORMAL);
__str104=allocate([58,110,111,117,116,114,101,102,114,101,115,104,0] /* :noutrefresh\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([119,110,111,117,116,114,101,102,114,101,115,104,0] /* wnoutrefresh\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([79,33,59,119,105,110,100,111,119,32,111,98,106,101,99,116,0] /* O!;window object\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([79,33,105,105,105,105,105,105,59,119,105,110,100,111,119,32,111,98,106,101,99,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,44,32,105,110,116,0] /* O!iiiiii;window obje */, "i8", ALLOC_NORMAL);
__str108=allocate([111,118,101,114,108,97,121,32,114,101,113,117,105,114,101,115,32,111,110,101,32,111,114,32,115,101,118,101,110,32,97,114,103,117,109,101,110,116,115,0] /* overlay requires one */, "i8", ALLOC_NORMAL);
__str109=allocate([99,111,112,121,119,105,110,0] /* copywin\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([111,118,101,114,108,97,121,0] /* overlay\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([111,118,101,114,119,114,105,116,101,32,114,101,113,117,105,114,101,115,32,111,110,101,32,111,114,32,115,101,118,101,110,32,97,114,103,117,109,101,110,116,115,0] /* overwrite requires o */, "i8", ALLOC_NORMAL);
__str112=allocate([111,118,101,114,119,114,105,116,101,0] /* overwrite\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([79,59,102,105,108,101,111,98,106,0] /* O;fileobj\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,102,105,108,101,32,111,98,106,101,99,116,0] /* argument must be a f */, "i8", ALLOC_NORMAL);
__str115=allocate([112,117,116,119,105,110,0] /* putwin\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([105,105,59,98,101,103,44,110,117,109,0] /* ii;beg,num\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([114,101,100,114,97,119,108,110,0] /* redrawln\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([112,114,101,102,114,101,115,104,0] /* prefresh\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([114,101,102,114,101,115,104,40,41,32,102,111,114,32,97,32,112,97,100,32,114,101,113,117,105,114,101,115,32,54,32,97,114,103,117,109,101,110,116,115,0] /* refresh() for a pad  */, "i8", ALLOC_NORMAL);
__str120=allocate([58,114,101,102,114,101,115,104,0] /* :refresh\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([105,105,59,116,111,112,44,32,98,111,116,116,111,109,0] /* ii;top, bottom\00 */, "i8", ALLOC_NORMAL);
__str122=allocate([119,115,101,116,115,99,114,114,101,103,0] /* wsetscrreg\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([115,117,98,119,105,110,32,114,101,113,117,105,114,101,115,32,50,32,111,114,32,52,32,97,114,103,117,109,101,110,116,115,0] /* subwin requires 2 or */, "i8", ALLOC_NORMAL);
__str124=allocate([115,99,114,111,108,108,0] /* scroll\00 */, "i8", ALLOC_NORMAL);
__str125=allocate([115,99,114,111,108,108,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* scroll requires 0 or */, "i8", ALLOC_NORMAL);
__str126=allocate([105,105,59,115,116,97,114,116,44,99,111,117,110,116,0] /* ii;start,count\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([116,111,117,99,104,108,105,110,101,0] /* touchline\00 */, "i8", ALLOC_NORMAL);
__str128=allocate([105,105,105,59,115,116,97,114,116,44,99,111,117,110,116,44,118,97,108,0] /* iii;start,count,val\ */, "i8", ALLOC_NORMAL);
__str129=allocate([116,111,117,99,104,108,105,110,101,32,114,101,113,117,105,114,101,115,32,50,32,111,114,32,51,32,97,114,103,117,109,101,110,116,115,0] /* touchline requires 2 */, "i8", ALLOC_NORMAL);
__str130=allocate([118,108,105,110,101,32,114,101,113,117,105,114,101,115,32,50,32,116,111,32,53,32,97,114,103,117,109,101,110,116,115,0] /* vline requires 2 to  */, "i8", ALLOC_NORMAL);
__str131=allocate([118,108,105,110,101,0] /* vline\00 */, "i8", ALLOC_NORMAL);
__str132=allocate([98,111,114,100,101,114,0] /* border\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([98,111,120,0] /* box\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([99,108,101,97,114,0] /* clear\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([99,108,114,116,111,98,111,116,0] /* clrtobot\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([99,108,114,116,111,101,111,108,0] /* clrtoeol\00 */, "i8", ALLOC_NORMAL);
__str137=allocate([99,117,114,115,121,110,99,117,112,0] /* cursyncup\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([100,101,108,99,104,0] /* delch\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([100,101,108,101,116,101,108,110,0] /* deleteln\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([100,101,114,119,105,110,0] /* derwin\00 */, "i8", ALLOC_NORMAL);
__str141=allocate([101,110,99,108,111,115,101,0] /* enclose\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([101,114,97,115,101,0] /* erase\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([103,101,116,98,101,103,121,120,0] /* getbegyx\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([103,101,116,98,107,103,100,0] /* getbkgd\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([103,101,116,99,104,0] /* getch\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([103,101,116,107,101,121,0] /* getkey\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([103,101,116,109,97,120,121,120,0] /* getmaxyx\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([103,101,116,112,97,114,121,120,0] /* getparyx\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([103,101,116,115,116,114,0] /* getstr\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([103,101,116,121,120,0] /* getyx\00 */, "i8", ALLOC_NORMAL);
__str151=allocate([105,100,99,111,107,0] /* idcok\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([105,109,109,101,100,111,107,0] /* immedok\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([105,110,99,104,0] /* inch\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([105,110,115,100,101,108,108,110,0] /* insdelln\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([105,110,115,101,114,116,108,110,0] /* insertln\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([105,110,115,116,114,0] /* instr\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([105,115,95,108,105,110,101,116,111,117,99,104,101,100,0] /* is_linetouched\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([105,115,95,119,105,110,116,111,117,99,104,101,100,0] /* is_wintouched\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([109,111,118,101,0] /* move\00 */, "i8", ALLOC_NORMAL);
__str160=allocate([110,111,117,116,114,101,102,114,101,115,104,0] /* noutrefresh\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([110,111,111,117,116,114,101,102,114,101,115,104,0] /* nooutrefresh\00 */, "i8", ALLOC_NORMAL);
__str162=allocate([114,101,102,114,101,115,104,0] /* refresh\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([114,101,115,105,122,101,0] /* resize\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([115,101,116,115,99,114,114,101,103,0] /* setscrreg\00 */, "i8", ALLOC_NORMAL);
__str165=allocate([115,116,97,110,100,101,110,100,0] /* standend\00 */, "i8", ALLOC_NORMAL);
__str166=allocate([115,116,97,110,100,111,117,116,0] /* standout\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([115,117,98,112,97,100,0] /* subpad\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([115,117,98,119,105,110,0] /* subwin\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([115,121,110,99,100,111,119,110,0] /* syncdown\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([115,121,110,99,117,112,0] /* syncup\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([116,105,109,101,111,117,116,0] /* timeout\00 */, "i8", ALLOC_NORMAL);
_PyCursesWindow_Methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str172=allocate([95,99,117,114,115,101,115,46,99,117,114,115,101,115,32,119,105,110,100,111,119,0] /* _curses.curses windo */, "i8", ALLOC_NORMAL);
_PyCursesWindow_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str173=allocate([98,101,101,112,0] /* beep\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([100,101,102,95,112,114,111,103,95,109,111,100,101,0] /* def_prog_mode\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([100,101,102,95,115,104,101,108,108,95,109,111,100,101,0] /* def_shell_mode\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([100,111,117,112,100,97,116,101,0] /* doupdate\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([101,110,100,119,105,110,0] /* endwin\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([102,108,97,115,104,0] /* flash\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([110,111,99,98,114,101,97,107,0] /* nocbreak\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([110,111,101,99,104,111,0] /* noecho\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([110,111,110,108,0] /* nonl\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([110,111,114,97,119,0] /* noraw\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([114,101,115,101,116,95,112,114,111,103,95,109,111,100,101,0] /* reset_prog_mode\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([114,101,115,101,116,95,115,104,101,108,108,95,109,111,100,101,0] /* reset_shell_mode\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([114,101,115,101,116,116,121,0] /* resetty\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([115,97,118,101,116,116,121,0] /* savetty\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([99,98,114,101,97,107,0] /* cbreak\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([99,98,114,101,97,107,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* cbreak requires 0 or */, "i8", ALLOC_NORMAL);
__str189=allocate([101,99,104,111,0] /* echo\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([101,99,104,111,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* echo requires 0 or 1 */, "i8", ALLOC_NORMAL);
__str191=allocate([110,108,0] /* nl\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([110,108,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* nl requires 0 or 1 a */, "i8", ALLOC_NORMAL);
__str193=allocate([114,97,119,0] /* raw\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([114,97,119,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* raw requires 0 or 1  */, "i8", ALLOC_NORMAL);
__str195=allocate([104,58,99,111,108,111,114,95,99,111,110,116,101,110,116,0] /* h:color_content\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([40,105,105,105,41,0] /* (iii)\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([65,114,103,117,109,101,110,116,32,49,32,119,97,115,32,111,117,116,32,111,102,32,114,97,110,103,101,46,32,67,104,101,99,107,32,118,97,108,117,101,32,111,102,32,67,79,76,79,82,83,46,0] /* Argument 1 was out o */, "i8", ALLOC_NORMAL);
__str198=allocate([105,58,99,111,108,111,114,95,112,97,105,114,0] /* i:color_pair\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([105,58,99,117,114,115,95,115,101,116,0] /* i:curs_set\00 */, "i8", ALLOC_NORMAL);
__str200=allocate([99,117,114,115,95,115,101,116,0] /* curs_set\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([105,58,100,101,108,97,121,95,111,117,116,112,117,116,0] /* i:delay_output\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([100,101,108,97,121,95,111,117,116,112,117,116,0] /* delay_output\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([40,105,105,41,0] /* (ii)\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([103,101,116,109,111,117,115,101,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* getmouse() returned  */, "i8", ALLOC_NORMAL);
__str205=allocate([40,104,105,105,105,108,41,0] /* (hiiil)\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([104,105,105,105,108,0] /* hiiil\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([117,110,103,101,116,109,111,117,115,101,0] /* ungetmouse\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([98,58,104,97,108,102,100,101,108,97,121,0] /* b:halfdelay\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([104,97,108,102,100,101,108,97,121,0] /* halfdelay\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([104,104,104,104,59,99,111,108,111,114,44,114,44,103,44,98,0] /* hhhh;color,r,g,b\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([105,110,105,116,95,99,111,108,111,114,0] /* init_color\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([105,110,105,116,95,99,111,108,111,114,32,114,101,113,117,105,114,101,115,32,52,32,97,114,103,117,109,101,110,116,115,0] /* init_color requires  */, "i8", ALLOC_NORMAL);
__str214=allocate([105,110,105,116,95,112,97,105,114,32,114,101,113,117,105,114,101,115,32,51,32,97,114,103,117,109,101,110,116,115,0] /* init_pair requires 3 */, "i8", ALLOC_NORMAL);
__str215=allocate([104,104,104,59,112,97,105,114,44,32,102,44,32,98,0] /* hhh;pair, f, b\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([105,110,105,116,95,112,97,105,114,0] /* init_pair\00 */, "i8", ALLOC_NORMAL);
_ModDict=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str217=allocate([65,67,83,95,85,76,67,79,82,78,69,82,0] /* ACS_ULCORNER\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([65,67,83,95,76,76,67,79,82,78,69,82,0] /* ACS_LLCORNER\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([65,67,83,95,85,82,67,79,82,78,69,82,0] /* ACS_URCORNER\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([65,67,83,95,76,82,67,79,82,78,69,82,0] /* ACS_LRCORNER\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([65,67,83,95,76,84,69,69,0] /* ACS_LTEE\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([65,67,83,95,82,84,69,69,0] /* ACS_RTEE\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([65,67,83,95,66,84,69,69,0] /* ACS_BTEE\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([65,67,83,95,84,84,69,69,0] /* ACS_TTEE\00 */, "i8", ALLOC_NORMAL);
__str225=allocate([65,67,83,95,72,76,73,78,69,0] /* ACS_HLINE\00 */, "i8", ALLOC_NORMAL);
__str226=allocate([65,67,83,95,86,76,73,78,69,0] /* ACS_VLINE\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([65,67,83,95,80,76,85,83,0] /* ACS_PLUS\00 */, "i8", ALLOC_NORMAL);
__str228=allocate([65,67,83,95,83,49,0] /* ACS_S1\00 */, "i8", ALLOC_NORMAL);
__str229=allocate([65,67,83,95,83,57,0] /* ACS_S9\00 */, "i8", ALLOC_NORMAL);
__str230=allocate([65,67,83,95,68,73,65,77,79,78,68,0] /* ACS_DIAMOND\00 */, "i8", ALLOC_NORMAL);
__str231=allocate([65,67,83,95,67,75,66,79,65,82,68,0] /* ACS_CKBOARD\00 */, "i8", ALLOC_NORMAL);
__str232=allocate([65,67,83,95,68,69,71,82,69,69,0] /* ACS_DEGREE\00 */, "i8", ALLOC_NORMAL);
__str233=allocate([65,67,83,95,80,76,77,73,78,85,83,0] /* ACS_PLMINUS\00 */, "i8", ALLOC_NORMAL);
__str234=allocate([65,67,83,95,66,85,76,76,69,84,0] /* ACS_BULLET\00 */, "i8", ALLOC_NORMAL);
__str235=allocate([65,67,83,95,76,65,82,82,79,87,0] /* ACS_LARROW\00 */, "i8", ALLOC_NORMAL);
__str236=allocate([65,67,83,95,82,65,82,82,79,87,0] /* ACS_RARROW\00 */, "i8", ALLOC_NORMAL);
__str237=allocate([65,67,83,95,68,65,82,82,79,87,0] /* ACS_DARROW\00 */, "i8", ALLOC_NORMAL);
__str238=allocate([65,67,83,95,85,65,82,82,79,87,0] /* ACS_UARROW\00 */, "i8", ALLOC_NORMAL);
__str239=allocate([65,67,83,95,66,79,65,82,68,0] /* ACS_BOARD\00 */, "i8", ALLOC_NORMAL);
__str240=allocate([65,67,83,95,76,65,78,84,69,82,78,0] /* ACS_LANTERN\00 */, "i8", ALLOC_NORMAL);
__str241=allocate([65,67,83,95,66,76,79,67,75,0] /* ACS_BLOCK\00 */, "i8", ALLOC_NORMAL);
__str242=allocate([65,67,83,95,66,83,83,66,0] /* ACS_BSSB\00 */, "i8", ALLOC_NORMAL);
__str243=allocate([65,67,83,95,83,83,66,66,0] /* ACS_SSBB\00 */, "i8", ALLOC_NORMAL);
__str244=allocate([65,67,83,95,66,66,83,83,0] /* ACS_BBSS\00 */, "i8", ALLOC_NORMAL);
__str245=allocate([65,67,83,95,83,66,66,83,0] /* ACS_SBBS\00 */, "i8", ALLOC_NORMAL);
__str246=allocate([65,67,83,95,83,66,83,83,0] /* ACS_SBSS\00 */, "i8", ALLOC_NORMAL);
__str247=allocate([65,67,83,95,83,83,83,66,0] /* ACS_SSSB\00 */, "i8", ALLOC_NORMAL);
__str248=allocate([65,67,83,95,83,83,66,83,0] /* ACS_SSBS\00 */, "i8", ALLOC_NORMAL);
__str249=allocate([65,67,83,95,66,83,83,83,0] /* ACS_BSSS\00 */, "i8", ALLOC_NORMAL);
__str250=allocate([65,67,83,95,66,83,66,83,0] /* ACS_BSBS\00 */, "i8", ALLOC_NORMAL);
__str251=allocate([65,67,83,95,83,66,83,66,0] /* ACS_SBSB\00 */, "i8", ALLOC_NORMAL);
__str252=allocate([65,67,83,95,83,83,83,83,0] /* ACS_SSSS\00 */, "i8", ALLOC_NORMAL);
__str253=allocate([65,67,83,95,83,51,0] /* ACS_S3\00 */, "i8", ALLOC_NORMAL);
__str254=allocate([65,67,83,95,83,55,0] /* ACS_S7\00 */, "i8", ALLOC_NORMAL);
__str255=allocate([65,67,83,95,76,69,81,85,65,76,0] /* ACS_LEQUAL\00 */, "i8", ALLOC_NORMAL);
__str256=allocate([65,67,83,95,71,69,81,85,65,76,0] /* ACS_GEQUAL\00 */, "i8", ALLOC_NORMAL);
__str257=allocate([65,67,83,95,80,73,0] /* ACS_PI\00 */, "i8", ALLOC_NORMAL);
__str258=allocate([65,67,83,95,78,69,81,85,65,76,0] /* ACS_NEQUAL\00 */, "i8", ALLOC_NORMAL);
__str259=allocate([65,67,83,95,83,84,69,82,76,73,78,71,0] /* ACS_STERLING\00 */, "i8", ALLOC_NORMAL);
__str260=allocate([76,73,78,69,83,0] /* LINES\00 */, "i8", ALLOC_NORMAL);
__str261=allocate([67,79,76,83,0] /* COLS\00 */, "i8", ALLOC_NORMAL);
__str262=allocate([124,122,105,58,115,101,116,117,112,116,101,114,109,0] /* |zi:setupterm\00 */, "i8", ALLOC_NORMAL);
_kwlist_13450=allocate(12, "i8*", ALLOC_NORMAL);
__str263=allocate([116,101,114,109,0] /* term\00 */, "i8", ALLOC_NORMAL);
__str264=allocate([102,100,0] /* fd\00 */, "i8", ALLOC_NORMAL);
__str265=allocate([115,116,100,111,117,116,0] /* stdout\00 */, "i8", ALLOC_NORMAL);
__str266=allocate([108,111,115,116,32,115,121,115,46,115,116,100,111,117,116,0] /* lost sys.stdout\00 */, "i8", ALLOC_NORMAL);
__str267=allocate([115,101,116,117,112,116,101,114,109,58,32,117,110,107,110,111,119,110,32,101,114,114,111,114,0] /* setupterm: unknown e */, "i8", ALLOC_NORMAL);
__str268=allocate([115,101,116,117,112,116,101,114,109,58,32,99,111,117,108,100,32,110,111,116,32,102,105,110,100,32,116,101,114,109,105,110,97,108,0] /* setupterm: could not */, "i8", ALLOC_NORMAL);
__str269=allocate([115,101,116,117,112,116,101,114,109,58,32,99,111,117,108,100,32,110,111,116,32,102,105,110,100,32,116,101,114,109,105,110,102,111,32,100,97,116,97,98,97,115,101,0] /* setupterm: could not */, "i8", ALLOC_NORMAL);
__str270=allocate([105,59,84,114,117,101,40,49,41,44,32,70,97,108,115,101,40,48,41,0] /* i;True(1), False(0)\ */, "i8", ALLOC_NORMAL);
__str271=allocate([105,110,116,114,102,108,117,115,104,0] /* intrflush\00 */, "i8", ALLOC_NORMAL);
__str272=allocate([105,110,116,114,102,108,117,115,104,32,114,101,113,117,105,114,101,115,32,49,32,97,114,103,117,109,101,110,116,0] /* intrflush requires 1 */, "i8", ALLOC_NORMAL);
__str273=allocate([105,105,58,105,115,95,116,101,114,109,95,114,101,115,105,122,101,100,0] /* ii:is_term_resized\0 */, "i8", ALLOC_NORMAL);
__str274=allocate([105,110,118,97,108,105,100,32,107,101,121,32,110,117,109,98,101,114,0] /* invalid key number\0 */, "i8", ALLOC_NORMAL);
__str275=allocate([109,101,116,97,0] /* meta\00 */, "i8", ALLOC_NORMAL);
__str276=allocate([109,101,116,97,32,114,101,113,117,105,114,101,115,32,49,32,97,114,103,117,109,101,110,116,0] /* meta requires 1 argu */, "i8", ALLOC_NORMAL);
__str277=allocate([105,59,105,110,116,101,114,118,97,108,0] /* i;interval\00 */, "i8", ALLOC_NORMAL);
__str278=allocate([109,111,117,115,101,105,110,116,101,114,118,97,108,0] /* mouseinterval\00 */, "i8", ALLOC_NORMAL);
__str279=allocate([105,59,109,111,117,115,101,109,97,115,107,0] /* i;mousemask\00 */, "i8", ALLOC_NORMAL);
__str280=allocate([40,108,108,41,0] /* (ll)\00 */, "i8", ALLOC_NORMAL);
__str281=allocate([105,59,109,115,0] /* i;ms\00 */, "i8", ALLOC_NORMAL);
__str282=allocate([105,105,59,110,108,105,110,101,115,44,110,99,111,108,115,0] /* ii;nlines,ncols\00 */, "i8", ALLOC_NORMAL);
__str283=allocate([110,101,119,119,105,110,32,114,101,113,117,105,114,101,115,32,50,32,111,114,32,52,32,97,114,103,117,109,101,110,116,115,0] /* newwin requires 2 or */, "i8", ALLOC_NORMAL);
__str284=allocate([104,59,112,97,105,114,0] /* h;pair\00 */, "i8", ALLOC_NORMAL);
__str285=allocate([112,97,105,114,95,99,111,110,116,101,110,116,32,114,101,113,117,105,114,101,115,32,49,32,97,114,103,117,109,101,110,116,0] /* pair_content require */, "i8", ALLOC_NORMAL);
__str286=allocate([65,114,103,117,109,101,110,116,32,49,32,119,97,115,32,111,117,116,32,111,102,32,114,97,110,103,101,46,32,40,49,46,46,67,79,76,79,82,95,80,65,73,82,83,45,49,41,0] /* Argument 1 was out o */, "i8", ALLOC_NORMAL);
__str287=allocate([105,59,112,97,105,114,118,97,108,117,101,0] /* i;pairvalue\00 */, "i8", ALLOC_NORMAL);
__str288=allocate([112,97,105,114,95,110,117,109,98,101,114,32,114,101,113,117,105,114,101,115,32,49,32,97,114,103,117,109,101,110,116,0] /* pair_number requires */, "i8", ALLOC_NORMAL);
__str289=allocate([112,117,116,112,0] /* putp\00 */, "i8", ALLOC_NORMAL);
__str290=allocate([113,105,102,108,117,115,104,32,114,101,113,117,105,114,101,115,32,48,32,111,114,32,49,32,97,114,103,117,109,101,110,116,115,0] /* qiflush requires 0 o */, "i8", ALLOC_NORMAL);
__str291=allocate([99,117,114,115,101,115,0] /* curses\00 */, "i8", ALLOC_NORMAL);
__str292=allocate([105,105,58,114,101,115,105,122,101,116,101,114,109,0] /* ii:resizeterm\00 */, "i8", ALLOC_NORMAL);
__str293=allocate([114,101,115,105,122,101,116,101,114,109,0] /* resizeterm\00 */, "i8", ALLOC_NORMAL);
__str294=allocate([105,105,58,114,101,115,105,122,101,95,116,101,114,109,0] /* ii:resize_term\00 */, "i8", ALLOC_NORMAL);
__str295=allocate([114,101,115,105,122,101,95,116,101,114,109,0] /* resize_term\00 */, "i8", ALLOC_NORMAL);
__str296=allocate([115,101,116,115,121,120,32,114,101,113,117,105,114,101,115,32,50,32,97,114,103,117,109,101,110,116,115,0] /* setsyx requires 2 ar */, "i8", ALLOC_NORMAL);
__str297=allocate([105,105,59,121,44,32,120,0] /* ii;y, x\00 */, "i8", ALLOC_NORMAL);
__str298=allocate([67,79,76,79,82,83,0] /* COLORS\00 */, "i8", ALLOC_NORMAL);
__str299=allocate([67,79,76,79,82,95,80,65,73,82,83,0] /* COLOR_PAIRS\00 */, "i8", ALLOC_NORMAL);
__str300=allocate([115,116,97,114,116,95,99,111,108,111,114,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* start_color() return */, "i8", ALLOC_NORMAL);
__str301=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str302=allocate([115,124,105,105,105,105,105,105,105,105,105,58,116,112,97,114,109,0] /* s|iiiiiiiii:tparm\00 */, "i8", ALLOC_NORMAL);
__str303=allocate([116,112,97,114,109,40,41,32,114,101,116,117,114,110,101,100,32,78,85,76,76,0] /* tparm() returned NUL */, "i8", ALLOC_NORMAL);
__str304=allocate([105,59,102,100,0] /* i;fd\00 */, "i8", ALLOC_NORMAL);
__str305=allocate([116,121,112,101,97,104,101,97,100,0] /* typeahead\00 */, "i8", ALLOC_NORMAL);
__str306=allocate([97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,99,104,32,111,114,32,97,110,32,105,110,116,0] /* argument must be a c */, "i8", ALLOC_NORMAL);
__str307=allocate([117,110,103,101,116,99,104,0] /* ungetch\00 */, "i8", ALLOC_NORMAL);
__str308=allocate([117,115,101,95,101,110,118,32,114,101,113,117,105,114,101,115,32,49,32,97,114,103,117,109,101,110,116,0] /* use_env requires 1 a */, "i8", ALLOC_NORMAL);
__str309=allocate([117,115,101,95,100,101,102,97,117,108,116,95,99,111,108,111,114,115,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* use_default_colors() */, "i8", ALLOC_NORMAL);
__str310=allocate([98,97,117,100,114,97,116,101,0] /* baudrate\00 */, "i8", ALLOC_NORMAL);
__str311=allocate([99,97,110,95,99,104,97,110,103,101,95,99,111,108,111,114,0] /* can_change_color\00 */, "i8", ALLOC_NORMAL);
__str312=allocate([99,111,108,111,114,95,99,111,110,116,101,110,116,0] /* color_content\00 */, "i8", ALLOC_NORMAL);
__str313=allocate([99,111,108,111,114,95,112,97,105,114,0] /* color_pair\00 */, "i8", ALLOC_NORMAL);
__str314=allocate([101,114,97,115,101,99,104,97,114,0] /* erasechar\00 */, "i8", ALLOC_NORMAL);
__str315=allocate([102,105,108,116,101,114,0] /* filter\00 */, "i8", ALLOC_NORMAL);
__str316=allocate([102,108,117,115,104,105,110,112,0] /* flushinp\00 */, "i8", ALLOC_NORMAL);
__str317=allocate([103,101,116,109,111,117,115,101,0] /* getmouse\00 */, "i8", ALLOC_NORMAL);
__str318=allocate([103,101,116,115,121,120,0] /* getsyx\00 */, "i8", ALLOC_NORMAL);
__str319=allocate([103,101,116,119,105,110,0] /* getwin\00 */, "i8", ALLOC_NORMAL);
__str320=allocate([104,97,115,95,99,111,108,111,114,115,0] /* has_colors\00 */, "i8", ALLOC_NORMAL);
__str321=allocate([104,97,115,95,105,99,0] /* has_ic\00 */, "i8", ALLOC_NORMAL);
__str322=allocate([104,97,115,95,105,108,0] /* has_il\00 */, "i8", ALLOC_NORMAL);
__str323=allocate([104,97,115,95,107,101,121,0] /* has_key\00 */, "i8", ALLOC_NORMAL);
__str324=allocate([105,110,105,116,115,99,114,0] /* initscr\00 */, "i8", ALLOC_NORMAL);
__str325=allocate([105,115,101,110,100,119,105,110,0] /* isendwin\00 */, "i8", ALLOC_NORMAL);
__str326=allocate([105,115,95,116,101,114,109,95,114,101,115,105,122,101,100,0] /* is_term_resized\00 */, "i8", ALLOC_NORMAL);
__str327=allocate([107,101,121,110,97,109,101,0] /* keyname\00 */, "i8", ALLOC_NORMAL);
__str328=allocate([107,105,108,108,99,104,97,114,0] /* killchar\00 */, "i8", ALLOC_NORMAL);
__str329=allocate([108,111,110,103,110,97,109,101,0] /* longname\00 */, "i8", ALLOC_NORMAL);
__str330=allocate([109,111,117,115,101,109,97,115,107,0] /* mousemask\00 */, "i8", ALLOC_NORMAL);
__str331=allocate([110,97,112,109,115,0] /* napms\00 */, "i8", ALLOC_NORMAL);
__str332=allocate([110,101,119,112,97,100,0] /* newpad\00 */, "i8", ALLOC_NORMAL);
__str333=allocate([110,101,119,119,105,110,0] /* newwin\00 */, "i8", ALLOC_NORMAL);
__str334=allocate([110,111,113,105,102,108,117,115,104,0] /* noqiflush\00 */, "i8", ALLOC_NORMAL);
__str335=allocate([112,97,105,114,95,99,111,110,116,101,110,116,0] /* pair_content\00 */, "i8", ALLOC_NORMAL);
__str336=allocate([112,97,105,114,95,110,117,109,98,101,114,0] /* pair_number\00 */, "i8", ALLOC_NORMAL);
__str337=allocate([113,105,102,108,117,115,104,0] /* qiflush\00 */, "i8", ALLOC_NORMAL);
__str338=allocate([115,101,116,115,121,120,0] /* setsyx\00 */, "i8", ALLOC_NORMAL);
__str339=allocate([115,101,116,117,112,116,101,114,109,0] /* setupterm\00 */, "i8", ALLOC_NORMAL);
__str340=allocate([115,116,97,114,116,95,99,111,108,111,114,0] /* start_color\00 */, "i8", ALLOC_NORMAL);
__str341=allocate([116,101,114,109,97,116,116,114,115,0] /* termattrs\00 */, "i8", ALLOC_NORMAL);
__str342=allocate([116,101,114,109,110,97,109,101,0] /* termname\00 */, "i8", ALLOC_NORMAL);
__str343=allocate([116,105,103,101,116,102,108,97,103,0] /* tigetflag\00 */, "i8", ALLOC_NORMAL);
__str344=allocate([116,105,103,101,116,110,117,109,0] /* tigetnum\00 */, "i8", ALLOC_NORMAL);
__str345=allocate([116,105,103,101,116,115,116,114,0] /* tigetstr\00 */, "i8", ALLOC_NORMAL);
__str346=allocate([116,112,97,114,109,0] /* tparm\00 */, "i8", ALLOC_NORMAL);
__str347=allocate([117,110,99,116,114,108,0] /* unctrl\00 */, "i8", ALLOC_NORMAL);
__str348=allocate([117,115,101,95,101,110,118,0] /* use_env\00 */, "i8", ALLOC_NORMAL);
__str349=allocate([117,115,101,95,100,101,102,97,117,108,116,95,99,111,108,111,114,115,0] /* use_default_colors\0 */, "i8", ALLOC_NORMAL);
_PyCurses_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_PyCurses_API_14301=allocate(16, "i8*", ALLOC_NORMAL);
__str350=allocate([95,99,117,114,115,101,115,0] /* _curses\00 */, "i8", ALLOC_NORMAL);
__str351=allocate([95,99,117,114,115,101,115,46,95,67,95,65,80,73,0] /* _curses._C_API\00 */, "i8", ALLOC_NORMAL);
__str352=allocate([95,67,95,65,80,73,0] /* _C_API\00 */, "i8", ALLOC_NORMAL);
__str353=allocate([95,99,117,114,115,101,115,46,101,114,114,111,114,0] /* _curses.error\00 */, "i8", ALLOC_NORMAL);
__str354=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str355=allocate([118,101,114,115,105,111,110,0] /* version\00 */, "i8", ALLOC_NORMAL);
__str356=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str357=allocate([69,82,82,0] /* ERR\00 */, "i8", ALLOC_NORMAL);
__str358=allocate([79,75,0] /* OK\00 */, "i8", ALLOC_NORMAL);
__str359=allocate([65,95,65,84,84,82,73,66,85,84,69,83,0] /* A_ATTRIBUTES\00 */, "i8", ALLOC_NORMAL);
__str360=allocate([65,95,78,79,82,77,65,76,0] /* A_NORMAL\00 */, "i8", ALLOC_NORMAL);
__str361=allocate([65,95,83,84,65,78,68,79,85,84,0] /* A_STANDOUT\00 */, "i8", ALLOC_NORMAL);
__str362=allocate([65,95,85,78,68,69,82,76,73,78,69,0] /* A_UNDERLINE\00 */, "i8", ALLOC_NORMAL);
__str363=allocate([65,95,82,69,86,69,82,83,69,0] /* A_REVERSE\00 */, "i8", ALLOC_NORMAL);
__str364=allocate([65,95,66,76,73,78,75,0] /* A_BLINK\00 */, "i8", ALLOC_NORMAL);
__str365=allocate([65,95,68,73,77,0] /* A_DIM\00 */, "i8", ALLOC_NORMAL);
__str366=allocate([65,95,66,79,76,68,0] /* A_BOLD\00 */, "i8", ALLOC_NORMAL);
__str367=allocate([65,95,65,76,84,67,72,65,82,83,69,84,0] /* A_ALTCHARSET\00 */, "i8", ALLOC_NORMAL);
__str368=allocate([65,95,73,78,86,73,83,0] /* A_INVIS\00 */, "i8", ALLOC_NORMAL);
__str369=allocate([65,95,80,82,79,84,69,67,84,0] /* A_PROTECT\00 */, "i8", ALLOC_NORMAL);
__str370=allocate([65,95,67,72,65,82,84,69,88,84,0] /* A_CHARTEXT\00 */, "i8", ALLOC_NORMAL);
__str371=allocate([65,95,67,79,76,79,82,0] /* A_COLOR\00 */, "i8", ALLOC_NORMAL);
__str372=allocate([65,95,72,79,82,73,90,79,78,84,65,76,0] /* A_HORIZONTAL\00 */, "i8", ALLOC_NORMAL);
__str373=allocate([65,95,76,69,70,84,0] /* A_LEFT\00 */, "i8", ALLOC_NORMAL);
__str374=allocate([65,95,76,79,87,0] /* A_LOW\00 */, "i8", ALLOC_NORMAL);
__str375=allocate([65,95,82,73,71,72,84,0] /* A_RIGHT\00 */, "i8", ALLOC_NORMAL);
__str376=allocate([65,95,84,79,80,0] /* A_TOP\00 */, "i8", ALLOC_NORMAL);
__str377=allocate([65,95,86,69,82,84,73,67,65,76,0] /* A_VERTICAL\00 */, "i8", ALLOC_NORMAL);
__str378=allocate([67,79,76,79,82,95,66,76,65,67,75,0] /* COLOR_BLACK\00 */, "i8", ALLOC_NORMAL);
__str379=allocate([67,79,76,79,82,95,82,69,68,0] /* COLOR_RED\00 */, "i8", ALLOC_NORMAL);
__str380=allocate([67,79,76,79,82,95,71,82,69,69,78,0] /* COLOR_GREEN\00 */, "i8", ALLOC_NORMAL);
__str381=allocate([67,79,76,79,82,95,89,69,76,76,79,87,0] /* COLOR_YELLOW\00 */, "i8", ALLOC_NORMAL);
__str382=allocate([67,79,76,79,82,95,66,76,85,69,0] /* COLOR_BLUE\00 */, "i8", ALLOC_NORMAL);
__str383=allocate([67,79,76,79,82,95,77,65,71,69,78,84,65,0] /* COLOR_MAGENTA\00 */, "i8", ALLOC_NORMAL);
__str384=allocate([67,79,76,79,82,95,67,89,65,78,0] /* COLOR_CYAN\00 */, "i8", ALLOC_NORMAL);
__str385=allocate([67,79,76,79,82,95,87,72,73,84,69,0] /* COLOR_WHITE\00 */, "i8", ALLOC_NORMAL);
__str386=allocate([66,85,84,84,79,78,49,95,80,82,69,83,83,69,68,0] /* BUTTON1_PRESSED\00 */, "i8", ALLOC_NORMAL);
__str387=allocate([66,85,84,84,79,78,49,95,82,69,76,69,65,83,69,68,0] /* BUTTON1_RELEASED\00 */, "i8", ALLOC_NORMAL);
__str388=allocate([66,85,84,84,79,78,49,95,67,76,73,67,75,69,68,0] /* BUTTON1_CLICKED\00 */, "i8", ALLOC_NORMAL);
__str389=allocate([66,85,84,84,79,78,49,95,68,79,85,66,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON1_DOUBLE_CLICK */, "i8", ALLOC_NORMAL);
__str390=allocate([66,85,84,84,79,78,49,95,84,82,73,80,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON1_TRIPLE_CLICK */, "i8", ALLOC_NORMAL);
__str391=allocate([66,85,84,84,79,78,50,95,80,82,69,83,83,69,68,0] /* BUTTON2_PRESSED\00 */, "i8", ALLOC_NORMAL);
__str392=allocate([66,85,84,84,79,78,50,95,82,69,76,69,65,83,69,68,0] /* BUTTON2_RELEASED\00 */, "i8", ALLOC_NORMAL);
__str393=allocate([66,85,84,84,79,78,50,95,67,76,73,67,75,69,68,0] /* BUTTON2_CLICKED\00 */, "i8", ALLOC_NORMAL);
__str394=allocate([66,85,84,84,79,78,50,95,68,79,85,66,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON2_DOUBLE_CLICK */, "i8", ALLOC_NORMAL);
__str395=allocate([66,85,84,84,79,78,50,95,84,82,73,80,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON2_TRIPLE_CLICK */, "i8", ALLOC_NORMAL);
__str396=allocate([66,85,84,84,79,78,51,95,80,82,69,83,83,69,68,0] /* BUTTON3_PRESSED\00 */, "i8", ALLOC_NORMAL);
__str397=allocate([66,85,84,84,79,78,51,95,82,69,76,69,65,83,69,68,0] /* BUTTON3_RELEASED\00 */, "i8", ALLOC_NORMAL);
__str398=allocate([66,85,84,84,79,78,51,95,67,76,73,67,75,69,68,0] /* BUTTON3_CLICKED\00 */, "i8", ALLOC_NORMAL);
__str399=allocate([66,85,84,84,79,78,51,95,68,79,85,66,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON3_DOUBLE_CLICK */, "i8", ALLOC_NORMAL);
__str400=allocate([66,85,84,84,79,78,51,95,84,82,73,80,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON3_TRIPLE_CLICK */, "i8", ALLOC_NORMAL);
__str401=allocate([66,85,84,84,79,78,52,95,80,82,69,83,83,69,68,0] /* BUTTON4_PRESSED\00 */, "i8", ALLOC_NORMAL);
__str402=allocate([66,85,84,84,79,78,52,95,82,69,76,69,65,83,69,68,0] /* BUTTON4_RELEASED\00 */, "i8", ALLOC_NORMAL);
__str403=allocate([66,85,84,84,79,78,52,95,67,76,73,67,75,69,68,0] /* BUTTON4_CLICKED\00 */, "i8", ALLOC_NORMAL);
__str404=allocate([66,85,84,84,79,78,52,95,68,79,85,66,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON4_DOUBLE_CLICK */, "i8", ALLOC_NORMAL);
__str405=allocate([66,85,84,84,79,78,52,95,84,82,73,80,76,69,95,67,76,73,67,75,69,68,0] /* BUTTON4_TRIPLE_CLICK */, "i8", ALLOC_NORMAL);
__str406=allocate([66,85,84,84,79,78,95,83,72,73,70,84,0] /* BUTTON_SHIFT\00 */, "i8", ALLOC_NORMAL);
__str407=allocate([66,85,84,84,79,78,95,67,84,82,76,0] /* BUTTON_CTRL\00 */, "i8", ALLOC_NORMAL);
__str408=allocate([66,85,84,84,79,78,95,65,76,84,0] /* BUTTON_ALT\00 */, "i8", ALLOC_NORMAL);
__str409=allocate([65,76,76,95,77,79,85,83,69,95,69,86,69,78,84,83,0] /* ALL_MOUSE_EVENTS\00 */, "i8", ALLOC_NORMAL);
__str410=allocate([82,69,80,79,82,84,95,77,79,85,83,69,95,80,79,83,73,84,73,79,78,0] /* REPORT_MOUSE_POSITIO */, "i8", ALLOC_NORMAL);
__str411=allocate([85,78,75,78,79,87,78,32,75,69,89,0] /* UNKNOWN KEY\00 */, "i8", ALLOC_NORMAL);
__str412=allocate([75,69,89,95,70,40,0] /* KEY_F(\00 */, "i8", ALLOC_NORMAL);
__str413=allocate([75,69,89,95,77,73,78,0] /* KEY_MIN\00 */, "i8", ALLOC_NORMAL);
__str414=allocate([75,69,89,95,77,65,88,0] /* KEY_MAX\00 */, "i8", ALLOC_NORMAL);
HEAP[_PyCursesVersion]=((__str)&4294967295);
HEAP[_catchall_ERR]=((__str1)&4294967295);
HEAP[_catchall_NULL]=((__str2)&4294967295);
HEAP[_PyCursesWindow_Methods]=((__str38)&4294967295);
HEAP[_PyCursesWindow_Methods+4]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_PyCursesWindow_Methods+16]=((__str50)&4294967295);
HEAP[_PyCursesWindow_Methods+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyCursesWindow_Methods+32]=((__str44)&4294967295);
HEAP[_PyCursesWindow_Methods+36]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyCursesWindow_Methods+48]=((__str54)&4294967295);
HEAP[_PyCursesWindow_Methods+52]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyCursesWindow_Methods+64]=((__str55)&4294967295);
HEAP[_PyCursesWindow_Methods+68]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyCursesWindow_Methods+80]=((__str56)&4294967295);
HEAP[_PyCursesWindow_Methods+84]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyCursesWindow_Methods+96]=((__str52)&4294967295);
HEAP[_PyCursesWindow_Methods+100]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyCursesWindow_Methods+112]=((__str67)&4294967295);
HEAP[_PyCursesWindow_Methods+116]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyCursesWindow_Methods+128]=((__str59)&4294967295);
HEAP[_PyCursesWindow_Methods+132]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyCursesWindow_Methods+144]=((__str132)&4294967295);
HEAP[_PyCursesWindow_Methods+148]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyCursesWindow_Methods+160]=((__str133)&4294967295);
HEAP[_PyCursesWindow_Methods+164]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyCursesWindow_Methods+176]=((__str134)&4294967295);
HEAP[_PyCursesWindow_Methods+180]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyCursesWindow_Methods+192]=((__str16)&4294967295);
HEAP[_PyCursesWindow_Methods+196]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyCursesWindow_Methods+208]=((__str135)&4294967295);
HEAP[_PyCursesWindow_Methods+212]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_PyCursesWindow_Methods+224]=((__str136)&4294967295);
HEAP[_PyCursesWindow_Methods+228]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_PyCursesWindow_Methods+240]=((__str137)&4294967295);
HEAP[_PyCursesWindow_Methods+244]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_PyCursesWindow_Methods+256]=((__str138)&4294967295);
HEAP[_PyCursesWindow_Methods+260]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_PyCursesWindow_Methods+272]=((__str139)&4294967295);
HEAP[_PyCursesWindow_Methods+276]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_PyCursesWindow_Methods+288]=((__str140)&4294967295);
HEAP[_PyCursesWindow_Methods+292]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_PyCursesWindow_Methods+304]=((__str74)&4294967295);
HEAP[_PyCursesWindow_Methods+308]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_PyCursesWindow_Methods+320]=((__str141)&4294967295);
HEAP[_PyCursesWindow_Methods+324]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_PyCursesWindow_Methods+336]=((__str142)&4294967295);
HEAP[_PyCursesWindow_Methods+340]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_PyCursesWindow_Methods+352]=((__str143)&4294967295);
HEAP[_PyCursesWindow_Methods+356]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_PyCursesWindow_Methods+368]=((__str144)&4294967295);
HEAP[_PyCursesWindow_Methods+372]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_PyCursesWindow_Methods+384]=((__str145)&4294967295);
HEAP[_PyCursesWindow_Methods+388]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_PyCursesWindow_Methods+400]=((__str146)&4294967295);
HEAP[_PyCursesWindow_Methods+404]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_PyCursesWindow_Methods+416]=((__str147)&4294967295);
HEAP[_PyCursesWindow_Methods+420]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_PyCursesWindow_Methods+432]=((__str148)&4294967295);
HEAP[_PyCursesWindow_Methods+436]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_PyCursesWindow_Methods+448]=((__str149)&4294967295);
HEAP[_PyCursesWindow_Methods+452]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_PyCursesWindow_Methods+464]=((__str150)&4294967295);
HEAP[_PyCursesWindow_Methods+468]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_PyCursesWindow_Methods+480]=((__str88)&4294967295);
HEAP[_PyCursesWindow_Methods+484]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_PyCursesWindow_Methods+496]=((__str151)&4294967295);
HEAP[_PyCursesWindow_Methods+500]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_PyCursesWindow_Methods+512]=((__str17)&4294967295);
HEAP[_PyCursesWindow_Methods+516]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_PyCursesWindow_Methods+528]=((__str152)&4294967295);
HEAP[_PyCursesWindow_Methods+532]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_PyCursesWindow_Methods+544]=((__str153)&4294967295);
HEAP[_PyCursesWindow_Methods+548]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_PyCursesWindow_Methods+560]=((__str90)&4294967295);
HEAP[_PyCursesWindow_Methods+564]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_PyCursesWindow_Methods+576]=((__str154)&4294967295);
HEAP[_PyCursesWindow_Methods+580]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_PyCursesWindow_Methods+592]=((__str155)&4294967295);
HEAP[_PyCursesWindow_Methods+596]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_PyCursesWindow_Methods+608]=((__str98)&4294967295);
HEAP[_PyCursesWindow_Methods+612]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_PyCursesWindow_Methods+624]=((__str96)&4294967295);
HEAP[_PyCursesWindow_Methods+628]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_PyCursesWindow_Methods+640]=((__str156)&4294967295);
HEAP[_PyCursesWindow_Methods+644]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_PyCursesWindow_Methods+656]=((__str157)&4294967295);
HEAP[_PyCursesWindow_Methods+660]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_PyCursesWindow_Methods+672]=((__str158)&4294967295);
HEAP[_PyCursesWindow_Methods+676]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_PyCursesWindow_Methods+688]=((__str18)&4294967295);
HEAP[_PyCursesWindow_Methods+692]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_PyCursesWindow_Methods+704]=((__str19)&4294967295);
HEAP[_PyCursesWindow_Methods+708]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_PyCursesWindow_Methods+720]=((__str159)&4294967295);
HEAP[_PyCursesWindow_Methods+724]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_PyCursesWindow_Methods+736]=((__str28)&4294967295);
HEAP[_PyCursesWindow_Methods+740]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_PyCursesWindow_Methods+752]=((__str27)&4294967295);
HEAP[_PyCursesWindow_Methods+756]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_PyCursesWindow_Methods+768]=((__str20)&4294967295);
HEAP[_PyCursesWindow_Methods+772]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_PyCursesWindow_Methods+784]=((__str21)&4294967295);
HEAP[_PyCursesWindow_Methods+788]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_PyCursesWindow_Methods+800]=((__str160)&4294967295);
HEAP[_PyCursesWindow_Methods+804]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_PyCursesWindow_Methods+816]=((__str161)&4294967295);
HEAP[_PyCursesWindow_Methods+820]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_PyCursesWindow_Methods+832]=((__str110)&4294967295);
HEAP[_PyCursesWindow_Methods+836]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_PyCursesWindow_Methods+848]=((__str112)&4294967295);
HEAP[_PyCursesWindow_Methods+852]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_PyCursesWindow_Methods+864]=((__str115)&4294967295);
HEAP[_PyCursesWindow_Methods+868]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_PyCursesWindow_Methods+880]=((__str117)&4294967295);
HEAP[_PyCursesWindow_Methods+884]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_PyCursesWindow_Methods+896]=((__str9)&4294967295);
HEAP[_PyCursesWindow_Methods+900]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_PyCursesWindow_Methods+912]=((__str162)&4294967295);
HEAP[_PyCursesWindow_Methods+916]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_PyCursesWindow_Methods+928]=((__str163)&4294967295);
HEAP[_PyCursesWindow_Methods+932]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_PyCursesWindow_Methods+944]=((__str124)&4294967295);
HEAP[_PyCursesWindow_Methods+948]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_PyCursesWindow_Methods+960]=((__str22)&4294967295);
HEAP[_PyCursesWindow_Methods+964]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_PyCursesWindow_Methods+976]=((__str164)&4294967295);
HEAP[_PyCursesWindow_Methods+980]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_PyCursesWindow_Methods+992]=((__str165)&4294967295);
HEAP[_PyCursesWindow_Methods+996]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_PyCursesWindow_Methods+1008]=((__str166)&4294967295);
HEAP[_PyCursesWindow_Methods+1012]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_PyCursesWindow_Methods+1024]=((__str167)&4294967295);
HEAP[_PyCursesWindow_Methods+1028]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_PyCursesWindow_Methods+1040]=((__str168)&4294967295);
HEAP[_PyCursesWindow_Methods+1044]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_PyCursesWindow_Methods+1056]=((__str169)&4294967295);
HEAP[_PyCursesWindow_Methods+1060]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_PyCursesWindow_Methods+1072]=((__str25)&4294967295);
HEAP[_PyCursesWindow_Methods+1076]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_PyCursesWindow_Methods+1088]=((__str170)&4294967295);
HEAP[_PyCursesWindow_Methods+1092]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_PyCursesWindow_Methods+1104]=((__str171)&4294967295);
HEAP[_PyCursesWindow_Methods+1108]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_PyCursesWindow_Methods+1120]=((__str127)&4294967295);
HEAP[_PyCursesWindow_Methods+1124]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_PyCursesWindow_Methods+1136]=((__str8)&4294967295);
HEAP[_PyCursesWindow_Methods+1140]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_PyCursesWindow_Methods+1152]=((__str7)&4294967295);
HEAP[_PyCursesWindow_Methods+1156]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_PyCursesWindow_Methods+1168]=((__str131)&4294967295);
HEAP[_PyCursesWindow_Methods+1172]=(FUNCTION_TABLE_OFFSET + 150);
HEAP[_PyCursesWindow_Type+12]=((__str172)&4294967295);
HEAP[_PyCursesWindow_Type+24]=(FUNCTION_TABLE_OFFSET + 152);
HEAP[_PyCursesWindow_Type+32]=(FUNCTION_TABLE_OFFSET + 154);
HEAP[_kwlist_13450]=((__str263)&4294967295);
HEAP[_kwlist_13450+4]=((__str264)&4294967295);
HEAP[_PyCurses_methods]=((__str310)&4294967295);
HEAP[_PyCurses_methods+4]=(FUNCTION_TABLE_OFFSET + 156);
HEAP[_PyCurses_methods+16]=((__str173)&4294967295);
HEAP[_PyCurses_methods+20]=(FUNCTION_TABLE_OFFSET + 158);
HEAP[_PyCurses_methods+32]=((__str311)&4294967295);
HEAP[_PyCurses_methods+36]=(FUNCTION_TABLE_OFFSET + 160);
HEAP[_PyCurses_methods+48]=((__str187)&4294967295);
HEAP[_PyCurses_methods+52]=(FUNCTION_TABLE_OFFSET + 162);
HEAP[_PyCurses_methods+64]=((__str312)&4294967295);
HEAP[_PyCurses_methods+68]=(FUNCTION_TABLE_OFFSET + 164);
HEAP[_PyCurses_methods+80]=((__str313)&4294967295);
HEAP[_PyCurses_methods+84]=(FUNCTION_TABLE_OFFSET + 166);
HEAP[_PyCurses_methods+96]=((__str200)&4294967295);
HEAP[_PyCurses_methods+100]=(FUNCTION_TABLE_OFFSET + 168);
HEAP[_PyCurses_methods+112]=((__str174)&4294967295);
HEAP[_PyCurses_methods+116]=(FUNCTION_TABLE_OFFSET + 170);
HEAP[_PyCurses_methods+128]=((__str175)&4294967295);
HEAP[_PyCurses_methods+132]=(FUNCTION_TABLE_OFFSET + 172);
HEAP[_PyCurses_methods+144]=((__str202)&4294967295);
HEAP[_PyCurses_methods+148]=(FUNCTION_TABLE_OFFSET + 174);
HEAP[_PyCurses_methods+160]=((__str176)&4294967295);
HEAP[_PyCurses_methods+164]=(FUNCTION_TABLE_OFFSET + 176);
HEAP[_PyCurses_methods+176]=((__str189)&4294967295);
HEAP[_PyCurses_methods+180]=(FUNCTION_TABLE_OFFSET + 178);
HEAP[_PyCurses_methods+192]=((__str177)&4294967295);
HEAP[_PyCurses_methods+196]=(FUNCTION_TABLE_OFFSET + 180);
HEAP[_PyCurses_methods+208]=((__str314)&4294967295);
HEAP[_PyCurses_methods+212]=(FUNCTION_TABLE_OFFSET + 182);
HEAP[_PyCurses_methods+224]=((__str315)&4294967295);
HEAP[_PyCurses_methods+228]=(FUNCTION_TABLE_OFFSET + 184);
HEAP[_PyCurses_methods+240]=((__str178)&4294967295);
HEAP[_PyCurses_methods+244]=(FUNCTION_TABLE_OFFSET + 186);
HEAP[_PyCurses_methods+256]=((__str316)&4294967295);
HEAP[_PyCurses_methods+260]=(FUNCTION_TABLE_OFFSET + 188);
HEAP[_PyCurses_methods+272]=((__str317)&4294967295);
HEAP[_PyCurses_methods+276]=(FUNCTION_TABLE_OFFSET + 190);
HEAP[_PyCurses_methods+288]=((__str207)&4294967295);
HEAP[_PyCurses_methods+292]=(FUNCTION_TABLE_OFFSET + 192);
HEAP[_PyCurses_methods+304]=((__str318)&4294967295);
HEAP[_PyCurses_methods+308]=(FUNCTION_TABLE_OFFSET + 194);
HEAP[_PyCurses_methods+320]=((__str319)&4294967295);
HEAP[_PyCurses_methods+324]=(FUNCTION_TABLE_OFFSET + 196);
HEAP[_PyCurses_methods+336]=((__str320)&4294967295);
HEAP[_PyCurses_methods+340]=(FUNCTION_TABLE_OFFSET + 198);
HEAP[_PyCurses_methods+352]=((__str321)&4294967295);
HEAP[_PyCurses_methods+356]=(FUNCTION_TABLE_OFFSET + 200);
HEAP[_PyCurses_methods+368]=((__str322)&4294967295);
HEAP[_PyCurses_methods+372]=(FUNCTION_TABLE_OFFSET + 202);
HEAP[_PyCurses_methods+384]=((__str323)&4294967295);
HEAP[_PyCurses_methods+388]=(FUNCTION_TABLE_OFFSET + 204);
HEAP[_PyCurses_methods+400]=((__str209)&4294967295);
HEAP[_PyCurses_methods+404]=(FUNCTION_TABLE_OFFSET + 206);
HEAP[_PyCurses_methods+416]=((__str212)&4294967295);
HEAP[_PyCurses_methods+420]=(FUNCTION_TABLE_OFFSET + 208);
HEAP[_PyCurses_methods+432]=((__str216)&4294967295);
HEAP[_PyCurses_methods+436]=(FUNCTION_TABLE_OFFSET + 210);
HEAP[_PyCurses_methods+448]=((__str324)&4294967295);
HEAP[_PyCurses_methods+452]=(FUNCTION_TABLE_OFFSET + 212);
HEAP[_PyCurses_methods+464]=((__str271)&4294967295);
HEAP[_PyCurses_methods+468]=(FUNCTION_TABLE_OFFSET + 214);
HEAP[_PyCurses_methods+480]=((__str325)&4294967295);
HEAP[_PyCurses_methods+484]=(FUNCTION_TABLE_OFFSET + 216);
HEAP[_PyCurses_methods+496]=((__str326)&4294967295);
HEAP[_PyCurses_methods+500]=(FUNCTION_TABLE_OFFSET + 218);
HEAP[_PyCurses_methods+512]=((__str327)&4294967295);
HEAP[_PyCurses_methods+516]=(FUNCTION_TABLE_OFFSET + 220);
HEAP[_PyCurses_methods+528]=((__str328)&4294967295);
HEAP[_PyCurses_methods+532]=(FUNCTION_TABLE_OFFSET + 222);
HEAP[_PyCurses_methods+544]=((__str329)&4294967295);
HEAP[_PyCurses_methods+548]=(FUNCTION_TABLE_OFFSET + 224);
HEAP[_PyCurses_methods+560]=((__str275)&4294967295);
HEAP[_PyCurses_methods+564]=(FUNCTION_TABLE_OFFSET + 226);
HEAP[_PyCurses_methods+576]=((__str278)&4294967295);
HEAP[_PyCurses_methods+580]=(FUNCTION_TABLE_OFFSET + 228);
HEAP[_PyCurses_methods+592]=((__str330)&4294967295);
HEAP[_PyCurses_methods+596]=(FUNCTION_TABLE_OFFSET + 230);
HEAP[_PyCurses_methods+608]=((__str331)&4294967295);
HEAP[_PyCurses_methods+612]=(FUNCTION_TABLE_OFFSET + 232);
HEAP[_PyCurses_methods+624]=((__str332)&4294967295);
HEAP[_PyCurses_methods+628]=(FUNCTION_TABLE_OFFSET + 234);
HEAP[_PyCurses_methods+640]=((__str333)&4294967295);
HEAP[_PyCurses_methods+644]=(FUNCTION_TABLE_OFFSET + 236);
HEAP[_PyCurses_methods+656]=((__str191)&4294967295);
HEAP[_PyCurses_methods+660]=(FUNCTION_TABLE_OFFSET + 238);
HEAP[_PyCurses_methods+672]=((__str179)&4294967295);
HEAP[_PyCurses_methods+676]=(FUNCTION_TABLE_OFFSET + 240);
HEAP[_PyCurses_methods+688]=((__str180)&4294967295);
HEAP[_PyCurses_methods+692]=(FUNCTION_TABLE_OFFSET + 242);
HEAP[_PyCurses_methods+704]=((__str181)&4294967295);
HEAP[_PyCurses_methods+708]=(FUNCTION_TABLE_OFFSET + 244);
HEAP[_PyCurses_methods+720]=((__str334)&4294967295);
HEAP[_PyCurses_methods+724]=(FUNCTION_TABLE_OFFSET + 246);
HEAP[_PyCurses_methods+736]=((__str182)&4294967295);
HEAP[_PyCurses_methods+740]=(FUNCTION_TABLE_OFFSET + 248);
HEAP[_PyCurses_methods+752]=((__str335)&4294967295);
HEAP[_PyCurses_methods+756]=(FUNCTION_TABLE_OFFSET + 250);
HEAP[_PyCurses_methods+768]=((__str336)&4294967295);
HEAP[_PyCurses_methods+772]=(FUNCTION_TABLE_OFFSET + 252);
HEAP[_PyCurses_methods+784]=((__str289)&4294967295);
HEAP[_PyCurses_methods+788]=(FUNCTION_TABLE_OFFSET + 254);
HEAP[_PyCurses_methods+800]=((__str337)&4294967295);
HEAP[_PyCurses_methods+804]=(FUNCTION_TABLE_OFFSET + 256);
HEAP[_PyCurses_methods+816]=((__str193)&4294967295);
HEAP[_PyCurses_methods+820]=(FUNCTION_TABLE_OFFSET + 258);
HEAP[_PyCurses_methods+832]=((__str183)&4294967295);
HEAP[_PyCurses_methods+836]=(FUNCTION_TABLE_OFFSET + 260);
HEAP[_PyCurses_methods+848]=((__str184)&4294967295);
HEAP[_PyCurses_methods+852]=(FUNCTION_TABLE_OFFSET + 262);
HEAP[_PyCurses_methods+864]=((__str185)&4294967295);
HEAP[_PyCurses_methods+868]=(FUNCTION_TABLE_OFFSET + 264);
HEAP[_PyCurses_methods+880]=((__str293)&4294967295);
HEAP[_PyCurses_methods+884]=(FUNCTION_TABLE_OFFSET + 266);
HEAP[_PyCurses_methods+896]=((__str295)&4294967295);
HEAP[_PyCurses_methods+900]=(FUNCTION_TABLE_OFFSET + 268);
HEAP[_PyCurses_methods+912]=((__str186)&4294967295);
HEAP[_PyCurses_methods+916]=(FUNCTION_TABLE_OFFSET + 270);
HEAP[_PyCurses_methods+928]=((__str338)&4294967295);
HEAP[_PyCurses_methods+932]=(FUNCTION_TABLE_OFFSET + 272);
HEAP[_PyCurses_methods+944]=((__str339)&4294967295);
HEAP[_PyCurses_methods+948]=(FUNCTION_TABLE_OFFSET + 274);
HEAP[_PyCurses_methods+960]=((__str340)&4294967295);
HEAP[_PyCurses_methods+964]=(FUNCTION_TABLE_OFFSET + 276);
HEAP[_PyCurses_methods+976]=((__str341)&4294967295);
HEAP[_PyCurses_methods+980]=(FUNCTION_TABLE_OFFSET + 278);
HEAP[_PyCurses_methods+992]=((__str342)&4294967295);
HEAP[_PyCurses_methods+996]=(FUNCTION_TABLE_OFFSET + 280);
HEAP[_PyCurses_methods+1008]=((__str343)&4294967295);
HEAP[_PyCurses_methods+1012]=(FUNCTION_TABLE_OFFSET + 282);
HEAP[_PyCurses_methods+1024]=((__str344)&4294967295);
HEAP[_PyCurses_methods+1028]=(FUNCTION_TABLE_OFFSET + 284);
HEAP[_PyCurses_methods+1040]=((__str345)&4294967295);
HEAP[_PyCurses_methods+1044]=(FUNCTION_TABLE_OFFSET + 286);
HEAP[_PyCurses_methods+1056]=((__str346)&4294967295);
HEAP[_PyCurses_methods+1060]=(FUNCTION_TABLE_OFFSET + 288);
HEAP[_PyCurses_methods+1072]=((__str305)&4294967295);
HEAP[_PyCurses_methods+1076]=(FUNCTION_TABLE_OFFSET + 290);
HEAP[_PyCurses_methods+1088]=((__str347)&4294967295);
HEAP[_PyCurses_methods+1092]=(FUNCTION_TABLE_OFFSET + 292);
HEAP[_PyCurses_methods+1104]=((__str307)&4294967295);
HEAP[_PyCurses_methods+1108]=(FUNCTION_TABLE_OFFSET + 294);
HEAP[_PyCurses_methods+1120]=((__str348)&4294967295);
HEAP[_PyCurses_methods+1124]=(FUNCTION_TABLE_OFFSET + 296);
HEAP[_PyCurses_methods+1136]=((__str349)&4294967295);
HEAP[_PyCurses_methods+1140]=(FUNCTION_TABLE_OFFSET + 298);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

