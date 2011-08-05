// Warning: Cannot correct overflows of this many bits: 64 at line 2220
// Warning: Cannot correct overflows of this many bits: 64 at line 2237
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
  
var $1___SIZE = 640; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 300; // %4
  
var $5___SIZE = 20; // %5
  
var $struct__0triple___SIZE = 12; // %struct..0triple
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCodeObject___SIZE = 72; // %struct.PyCodeObject
  
var $struct_PyDateTime_CAPI___SIZE = 44; // %struct.PyDateTime_CAPI
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_all_structmembers___SIZE = 60; // %struct.all_structmembers
  var $struct_all_structmembers___FLATTENER = [0,1,2,4,6,8,12,16,20,24,28,36,44,52];
var $struct_known_capsule___SIZE = 12; // %struct.known_capsule
  
var $struct_test_structmembers___SIZE = 68; // %struct.test_structmembers
  
var _PyDateTimeAPI;
var _TestError;
var __str;
var __str1;
var __str2;
var __Py_NoneStruct;
var __str3;
var __str4;
var __str5;
var __HashInheritanceTester_Type;
var __str6;
var __str7;
var __str8;
var __str9;
var _PyType_Type;
var __str10;
var __str11;
var _memoryviewtester_as_buffer;
var __str12;
var __MemoryViewTester_Type;
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
var _PyExc_OverflowError;
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
var _C_59_9780;
var _fmt_9778;
var __str58;
var _keywords_9777;
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
var __Py_ascii_whitespace;
var _x;
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
var _kwlist_10129;
var __str94;
var __str95;
var _C_92_10205;
var __str96;
var __str97;
var __str98;
var __str99;
var _PyClass_Type;
var _PyExc_TypeError;
var __str100;
var _test_run_counter;
var _PyExc_AssertionError;
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
var _capsule_name;
var __str121;
var _capsule_pointer;
var __str122;
var _capsule_context;
var __str123;
var _capsule_error;
var _capsule_destructor_call_count;
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
var _buffer_10522;
var __str143;
var __str144;
var __str145;
var __str146;
var __str147;
var __str148;
var __str149;
var __str150;
var _kwlist_10723;
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
var _TestMethods;
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
var _test_members;
var _fmt_10763;
var __str198;
var _keywords_10762;
var _PyExc_ValueError;
var __str199;
var __str200;
var __str201;
var __str202;
var _test_structmembersType;
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






















































































  function _raiseTestError($test_name, $msg) {
    var __stackBase__  = STACKTOP; STACKTOP += 2064; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 2064);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $test_name_addr=__stackBase__;
        var $msg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$test_name_addr]=$test_name;
        HEAP[$msg_addr]=$msg;
        var $1=HEAP[$test_name_addr]; //@line 25 "_testcapimodule.c"
        var $2=_strlen($1); //@line 25 "_testcapimodule.c"
        var $3=HEAP[$msg_addr]; //@line 25 "_testcapimodule.c"
        var $4=_strlen($3); //@line 25 "_testcapimodule.c"
        var $5=((($2) + ($4))&4294967295); //@line 25 "_testcapimodule.c"
        var $6=((($5))>>>0) > 1998; //@line 25 "_testcapimodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 25 "_testcapimodule.c"
      case 1: // $bb
        var $7=HEAP[_TestError]; //@line 26 "_testcapimodule.c"
        _PyErr_SetString($7, ((__str)&4294967295)); //@line 26 "_testcapimodule.c"
        __label__ = 3; break; //@line 26 "_testcapimodule.c"
      case 2: // $bb1
        var $buf2=$buf; //@line 28 "_testcapimodule.c"
        var $8=HEAP[$test_name_addr]; //@line 28 "_testcapimodule.c"
        var $9=HEAP[$msg_addr]; //@line 28 "_testcapimodule.c"
        var $10=_PyOS_snprintf($buf2, 2048, ((__str1)&4294967295), $8, $9); //@line 28 "_testcapimodule.c"
        var $11=HEAP[_TestError]; //@line 29 "_testcapimodule.c"
        var $buf3=$buf; //@line 29 "_testcapimodule.c"
        _PyErr_SetString($11, $buf3); //@line 29 "_testcapimodule.c"
        __label__ = 3; break; //@line 29 "_testcapimodule.c"
      case 3: // $bb4
        HEAP[$0]=0; //@line 31 "_testcapimodule.c"
        var $12=HEAP[$0]; //@line 31 "_testcapimodule.c"
        HEAP[$retval]=$12; //@line 31 "_testcapimodule.c"
        __label__ = 4; break; //@line 31 "_testcapimodule.c"
      case 4: // $return
        var $retval5=HEAP[$retval]; //@line 31 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 31 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sizeof_error($fatname, $typname, $expected, $got) {
    var __stackBase__  = STACKTOP; STACKTOP += 1048; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1048);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fatname_addr=__stackBase__;
        var $typname_addr=__stackBase__+4;
        var $expected_addr=__stackBase__+8;
        var $got_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $buf=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$fatname_addr]=$fatname;
        HEAP[$typname_addr]=$typname;
        HEAP[$expected_addr]=$expected;
        HEAP[$got_addr]=$got;
        var $buf1=$buf; //@line 45 "_testcapimodule.c"
        var $1=HEAP[$fatname_addr]; //@line 45 "_testcapimodule.c"
        var $2=HEAP[$expected_addr]; //@line 45 "_testcapimodule.c"
        var $3=HEAP[$typname_addr]; //@line 45 "_testcapimodule.c"
        var $4=HEAP[$got_addr]; //@line 45 "_testcapimodule.c"
        var $5=_PyOS_snprintf($buf1, 1024, ((__str2)&4294967295), $1, $2, $3, $4); //@line 45 "_testcapimodule.c"
        var $6=HEAP[_TestError]; //@line 48 "_testcapimodule.c"
        var $buf2=$buf; //@line 48 "_testcapimodule.c"
        _PyErr_SetString($6, $buf2); //@line 48 "_testcapimodule.c"
        HEAP[$0]=0; //@line 49 "_testcapimodule.c"
        var $7=HEAP[$0]; //@line 49 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 49 "_testcapimodule.c"
        __label__ = 1; break; //@line 49 "_testcapimodule.c"
      case 1: // $return
        var $retval3=HEAP[$retval]; //@line 49 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 49 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_config($self) {
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
        var $1=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 70 "_testcapimodule.c"
        var $2=((($1) + 1)&4294967295); //@line 70 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$2; //@line 70 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 71 "_testcapimodule.c"
        var $3=HEAP[$0]; //@line 71 "_testcapimodule.c"
        HEAP[$retval]=$3; //@line 71 "_testcapimodule.c"
        __label__ = 1; break; //@line 71 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 71 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 71 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_list_api($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $list=__stackBase__+12;
        var $i=__stackBase__+16;
        var $anint=__stackBase__+20;
        var $anint14=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyList_New(30); //@line 82 "_testcapimodule.c"
        HEAP[$list]=$1; //@line 82 "_testcapimodule.c"
        var $2=HEAP[$list]; //@line 83 "_testcapimodule.c"
        var $3=($2)==0; //@line 83 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 83 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 84 "_testcapimodule.c"
        __label__ = 23; break; //@line 84 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 86 "_testcapimodule.c"
        __label__ = 8; break; //@line 86 "_testcapimodule.c"
      case 3: // $bb2
        var $4=HEAP[$i]; //@line 87 "_testcapimodule.c"
        var $5=_PyInt_FromLong($4); //@line 87 "_testcapimodule.c"
        HEAP[$anint]=$5; //@line 87 "_testcapimodule.c"
        var $6=HEAP[$anint]; //@line 88 "_testcapimodule.c"
        var $7=($6)==0; //@line 88 "_testcapimodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 88 "_testcapimodule.c"
      case 4: // $bb3
        var $8=HEAP[$list]; //@line 89 "_testcapimodule.c"
        var $9=(($8)&4294967295); //@line 89 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 89 "_testcapimodule.c"
        var $11=((($10) - 1)&4294967295); //@line 89 "_testcapimodule.c"
        var $12=HEAP[$list]; //@line 89 "_testcapimodule.c"
        var $13=(($12)&4294967295); //@line 89 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 89 "_testcapimodule.c"
        var $14=HEAP[$list]; //@line 89 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 89 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 89 "_testcapimodule.c"
        var $17=((($16))|0)==0; //@line 89 "_testcapimodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 89 "_testcapimodule.c"
      case 5: // $bb4
        var $18=HEAP[$list]; //@line 89 "_testcapimodule.c"
        var $19=(($18+4)&4294967295); //@line 89 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 89 "_testcapimodule.c"
        var $21=(($20+24)&4294967295); //@line 89 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 89 "_testcapimodule.c"
        var $23=HEAP[$list]; //@line 89 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 89 "_testcapimodule.c"
        __label__ = 6; break; //@line 89 "_testcapimodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 90 "_testcapimodule.c"
        __label__ = 23; break; //@line 90 "_testcapimodule.c"
      case 7: // $bb6
        var $24=HEAP[$list]; //@line 92 "_testcapimodule.c"
        var $25=$24; //@line 92 "_testcapimodule.c"
        var $26=(($25+12)&4294967295); //@line 92 "_testcapimodule.c"
        var $27=HEAP[$26]; //@line 92 "_testcapimodule.c"
        var $28=HEAP[$i]; //@line 92 "_testcapimodule.c"
        var $29=(($27+4*$28)&4294967295); //@line 92 "_testcapimodule.c"
        var $30=HEAP[$anint]; //@line 92 "_testcapimodule.c"
        HEAP[$29]=$30; //@line 92 "_testcapimodule.c"
        var $31=HEAP[$i]; //@line 86 "_testcapimodule.c"
        var $32=((($31) + 1)&4294967295); //@line 86 "_testcapimodule.c"
        HEAP[$i]=$32; //@line 86 "_testcapimodule.c"
        __label__ = 8; break; //@line 86 "_testcapimodule.c"
      case 8: // $bb7
        var $33=HEAP[$i]; //@line 86 "_testcapimodule.c"
        var $34=((($33))|0) <= 29; //@line 86 "_testcapimodule.c"
        if ($34) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 86 "_testcapimodule.c"
      case 9: // $bb8
        var $35=HEAP[$list]; //@line 95 "_testcapimodule.c"
        var $36=_PyList_Reverse($35); //@line 95 "_testcapimodule.c"
        HEAP[$i]=$36; //@line 95 "_testcapimodule.c"
        var $37=HEAP[$i]; //@line 96 "_testcapimodule.c"
        var $38=((($37))|0)!=0; //@line 96 "_testcapimodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 96 "_testcapimodule.c"
      case 10: // $bb9
        var $39=HEAP[$list]; //@line 97 "_testcapimodule.c"
        var $40=(($39)&4294967295); //@line 97 "_testcapimodule.c"
        var $41=HEAP[$40]; //@line 97 "_testcapimodule.c"
        var $42=((($41) - 1)&4294967295); //@line 97 "_testcapimodule.c"
        var $43=HEAP[$list]; //@line 97 "_testcapimodule.c"
        var $44=(($43)&4294967295); //@line 97 "_testcapimodule.c"
        HEAP[$44]=$42; //@line 97 "_testcapimodule.c"
        var $45=HEAP[$list]; //@line 97 "_testcapimodule.c"
        var $46=(($45)&4294967295); //@line 97 "_testcapimodule.c"
        var $47=HEAP[$46]; //@line 97 "_testcapimodule.c"
        var $48=((($47))|0)==0; //@line 97 "_testcapimodule.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 97 "_testcapimodule.c"
      case 11: // $bb10
        var $49=HEAP[$list]; //@line 97 "_testcapimodule.c"
        var $50=(($49+4)&4294967295); //@line 97 "_testcapimodule.c"
        var $51=HEAP[$50]; //@line 97 "_testcapimodule.c"
        var $52=(($51+24)&4294967295); //@line 97 "_testcapimodule.c"
        var $53=HEAP[$52]; //@line 97 "_testcapimodule.c"
        var $54=HEAP[$list]; //@line 97 "_testcapimodule.c"
        FUNCTION_TABLE[$53]($54); //@line 97 "_testcapimodule.c"
        __label__ = 12; break; //@line 97 "_testcapimodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 98 "_testcapimodule.c"
        __label__ = 23; break; //@line 98 "_testcapimodule.c"
      case 13: // $bb12
        HEAP[$i]=0; //@line 101 "_testcapimodule.c"
        __label__ = 19; break; //@line 101 "_testcapimodule.c"
      case 14: // $bb13
        var $55=HEAP[$list]; //@line 102 "_testcapimodule.c"
        var $56=$55; //@line 102 "_testcapimodule.c"
        var $57=(($56+12)&4294967295); //@line 102 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 102 "_testcapimodule.c"
        var $59=HEAP[$i]; //@line 102 "_testcapimodule.c"
        var $60=(($58+4*$59)&4294967295); //@line 102 "_testcapimodule.c"
        var $61=HEAP[$60]; //@line 102 "_testcapimodule.c"
        HEAP[$anint14]=$61; //@line 102 "_testcapimodule.c"
        var $62=HEAP[$anint14]; //@line 103 "_testcapimodule.c"
        var $63=$62; //@line 103 "_testcapimodule.c"
        var $64=(($63+8)&4294967295); //@line 103 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 103 "_testcapimodule.c"
        var $66=HEAP[$i]; //@line 103 "_testcapimodule.c"
        var $67=((29 - ($66))&4294967295); //@line 103 "_testcapimodule.c"
        var $68=((($65))|0)!=((($67))|0); //@line 103 "_testcapimodule.c"
        if ($68) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 103 "_testcapimodule.c"
      case 15: // $bb15
        var $69=HEAP[_TestError]; //@line 104 "_testcapimodule.c"
        _PyErr_SetString($69, ((__str3)&4294967295)); //@line 104 "_testcapimodule.c"
        var $70=HEAP[$list]; //@line 106 "_testcapimodule.c"
        var $71=(($70)&4294967295); //@line 106 "_testcapimodule.c"
        var $72=HEAP[$71]; //@line 106 "_testcapimodule.c"
        var $73=((($72) - 1)&4294967295); //@line 106 "_testcapimodule.c"
        var $74=HEAP[$list]; //@line 106 "_testcapimodule.c"
        var $75=(($74)&4294967295); //@line 106 "_testcapimodule.c"
        HEAP[$75]=$73; //@line 106 "_testcapimodule.c"
        var $76=HEAP[$list]; //@line 106 "_testcapimodule.c"
        var $77=(($76)&4294967295); //@line 106 "_testcapimodule.c"
        var $78=HEAP[$77]; //@line 106 "_testcapimodule.c"
        var $79=((($78))|0)==0; //@line 106 "_testcapimodule.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 106 "_testcapimodule.c"
      case 16: // $bb16
        var $80=HEAP[$list]; //@line 106 "_testcapimodule.c"
        var $81=(($80+4)&4294967295); //@line 106 "_testcapimodule.c"
        var $82=HEAP[$81]; //@line 106 "_testcapimodule.c"
        var $83=(($82+24)&4294967295); //@line 106 "_testcapimodule.c"
        var $84=HEAP[$83]; //@line 106 "_testcapimodule.c"
        var $85=HEAP[$list]; //@line 106 "_testcapimodule.c"
        FUNCTION_TABLE[$84]($85); //@line 106 "_testcapimodule.c"
        __label__ = 17; break; //@line 106 "_testcapimodule.c"
      case 17: // $bb17
        HEAP[$0]=0; //@line 107 "_testcapimodule.c"
        __label__ = 23; break; //@line 107 "_testcapimodule.c"
      case 18: // $bb18
        var $86=HEAP[$i]; //@line 101 "_testcapimodule.c"
        var $87=((($86) + 1)&4294967295); //@line 101 "_testcapimodule.c"
        HEAP[$i]=$87; //@line 101 "_testcapimodule.c"
        __label__ = 19; break; //@line 101 "_testcapimodule.c"
      case 19: // $bb19
        var $88=HEAP[$i]; //@line 101 "_testcapimodule.c"
        var $89=((($88))|0) <= 29; //@line 101 "_testcapimodule.c"
        if ($89) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 101 "_testcapimodule.c"
      case 20: // $bb20
        var $90=HEAP[$list]; //@line 110 "_testcapimodule.c"
        var $91=(($90)&4294967295); //@line 110 "_testcapimodule.c"
        var $92=HEAP[$91]; //@line 110 "_testcapimodule.c"
        var $93=((($92) - 1)&4294967295); //@line 110 "_testcapimodule.c"
        var $94=HEAP[$list]; //@line 110 "_testcapimodule.c"
        var $95=(($94)&4294967295); //@line 110 "_testcapimodule.c"
        HEAP[$95]=$93; //@line 110 "_testcapimodule.c"
        var $96=HEAP[$list]; //@line 110 "_testcapimodule.c"
        var $97=(($96)&4294967295); //@line 110 "_testcapimodule.c"
        var $98=HEAP[$97]; //@line 110 "_testcapimodule.c"
        var $99=((($98))|0)==0; //@line 110 "_testcapimodule.c"
        if ($99) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 110 "_testcapimodule.c"
      case 21: // $bb21
        var $100=HEAP[$list]; //@line 110 "_testcapimodule.c"
        var $101=(($100+4)&4294967295); //@line 110 "_testcapimodule.c"
        var $102=HEAP[$101]; //@line 110 "_testcapimodule.c"
        var $103=(($102+24)&4294967295); //@line 110 "_testcapimodule.c"
        var $104=HEAP[$103]; //@line 110 "_testcapimodule.c"
        var $105=HEAP[$list]; //@line 110 "_testcapimodule.c"
        FUNCTION_TABLE[$104]($105); //@line 110 "_testcapimodule.c"
        __label__ = 22; break; //@line 110 "_testcapimodule.c"
      case 22: // $bb22
        var $106=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 113 "_testcapimodule.c"
        var $107=((($106) + 1)&4294967295); //@line 113 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$107; //@line 113 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 114 "_testcapimodule.c"
        __label__ = 23; break; //@line 114 "_testcapimodule.c"
      case 23: // $bb23
        var $108=HEAP[$0]; //@line 84 "_testcapimodule.c"
        HEAP[$retval]=$108; //@line 84 "_testcapimodule.c"
        __label__ = 24; break; //@line 84 "_testcapimodule.c"
      case 24: // $return
        var $retval24=HEAP[$retval]; //@line 84 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 84 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_dict_inner($count) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $count_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pos=__stackBase__+12;
        var $iterations=__stackBase__+16;
        var $i=__stackBase__+20;
        var $dict=__stackBase__+24;
        var $v=__stackBase__+28;
        var $k=__stackBase__+32;
        var $o=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$count_addr]=$count;
        HEAP[$pos]=0; //@line 120 "_testcapimodule.c"
        HEAP[$iterations]=0; //@line 120 "_testcapimodule.c"
        var $1=_PyDict_New(); //@line 122 "_testcapimodule.c"
        HEAP[$dict]=$1; //@line 122 "_testcapimodule.c"
        var $2=HEAP[$dict]; //@line 125 "_testcapimodule.c"
        var $3=($2)==0; //@line 125 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 126 "_testcapimodule.c"
        __label__ = 22; break; //@line 126 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 128 "_testcapimodule.c"
        __label__ = 6; break; //@line 128 "_testcapimodule.c"
      case 3: // $bb2
        var $4=HEAP[$i]; //@line 129 "_testcapimodule.c"
        var $5=_PyInt_FromLong($4); //@line 129 "_testcapimodule.c"
        HEAP[$v]=$5; //@line 129 "_testcapimodule.c"
        var $6=HEAP[$v]; //@line 130 "_testcapimodule.c"
        var $7=HEAP[$v]; //@line 130 "_testcapimodule.c"
        var $8=HEAP[$dict]; //@line 130 "_testcapimodule.c"
        var $9=_PyDict_SetItem($8, $7, $6); //@line 130 "_testcapimodule.c"
        var $10=HEAP[$v]; //@line 131 "_testcapimodule.c"
        var $11=(($10)&4294967295); //@line 131 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 131 "_testcapimodule.c"
        var $13=((($12) - 1)&4294967295); //@line 131 "_testcapimodule.c"
        var $14=(($10)&4294967295); //@line 131 "_testcapimodule.c"
        HEAP[$14]=$13; //@line 131 "_testcapimodule.c"
        var $15=(($10)&4294967295); //@line 131 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 131 "_testcapimodule.c"
        var $17=((($16))|0)==0; //@line 131 "_testcapimodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 131 "_testcapimodule.c"
      case 4: // $bb3
        var $18=HEAP[$v]; //@line 131 "_testcapimodule.c"
        var $19=(($18+4)&4294967295); //@line 131 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 131 "_testcapimodule.c"
        var $21=(($20+24)&4294967295); //@line 131 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 131 "_testcapimodule.c"
        var $23=HEAP[$v]; //@line 131 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 131 "_testcapimodule.c"
        __label__ = 5; break; //@line 131 "_testcapimodule.c"
      case 5: // $bb4
        var $24=HEAP[$i]; //@line 128 "_testcapimodule.c"
        var $25=((($24) + 1)&4294967295); //@line 128 "_testcapimodule.c"
        HEAP[$i]=$25; //@line 128 "_testcapimodule.c"
        __label__ = 6; break; //@line 128 "_testcapimodule.c"
      case 6: // $bb5
        var $26=HEAP[$i]; //@line 128 "_testcapimodule.c"
        var $27=HEAP[$count_addr]; //@line 128 "_testcapimodule.c"
        var $28=((($26))|0) < ((($27))|0); //@line 128 "_testcapimodule.c"
        if ($28) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 128 "_testcapimodule.c"
      case 7: // $bb6
        __label__ = 16; break; //@line 128 "_testcapimodule.c"
      case 8: // $bb7
        var $29=HEAP[$iterations]; //@line 136 "_testcapimodule.c"
        var $30=((($29) + 1)&4294967295); //@line 136 "_testcapimodule.c"
        HEAP[$iterations]=$30; //@line 136 "_testcapimodule.c"
        var $31=HEAP[$v]; //@line 138 "_testcapimodule.c"
        var $32=$31; //@line 138 "_testcapimodule.c"
        var $33=(($32+8)&4294967295); //@line 138 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 138 "_testcapimodule.c"
        var $35=((($34) + 1)&4294967295); //@line 138 "_testcapimodule.c"
        HEAP[$i]=$35; //@line 138 "_testcapimodule.c"
        var $36=HEAP[$i]; //@line 139 "_testcapimodule.c"
        var $37=_PyInt_FromLong($36); //@line 139 "_testcapimodule.c"
        HEAP[$o]=$37; //@line 139 "_testcapimodule.c"
        var $38=HEAP[$o]; //@line 140 "_testcapimodule.c"
        var $39=($38)==0; //@line 140 "_testcapimodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 140 "_testcapimodule.c"
      case 9: // $bb8
        HEAP[$0]=-1; //@line 141 "_testcapimodule.c"
        __label__ = 22; break; //@line 141 "_testcapimodule.c"
      case 10: // $bb9
        var $40=HEAP[$k]; //@line 142 "_testcapimodule.c"
        var $41=HEAP[$dict]; //@line 142 "_testcapimodule.c"
        var $42=HEAP[$o]; //@line 142 "_testcapimodule.c"
        var $43=_PyDict_SetItem($41, $40, $42); //@line 142 "_testcapimodule.c"
        var $44=((($43))|0) < 0; //@line 142 "_testcapimodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 142 "_testcapimodule.c"
      case 11: // $bb10
        var $45=HEAP[$o]; //@line 143 "_testcapimodule.c"
        var $46=(($45)&4294967295); //@line 143 "_testcapimodule.c"
        var $47=HEAP[$46]; //@line 143 "_testcapimodule.c"
        var $48=((($47) - 1)&4294967295); //@line 143 "_testcapimodule.c"
        var $49=HEAP[$o]; //@line 143 "_testcapimodule.c"
        var $50=(($49)&4294967295); //@line 143 "_testcapimodule.c"
        HEAP[$50]=$48; //@line 143 "_testcapimodule.c"
        var $51=HEAP[$o]; //@line 143 "_testcapimodule.c"
        var $52=(($51)&4294967295); //@line 143 "_testcapimodule.c"
        var $53=HEAP[$52]; //@line 143 "_testcapimodule.c"
        var $54=((($53))|0)==0; //@line 143 "_testcapimodule.c"
        if ($54) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 143 "_testcapimodule.c"
      case 12: // $bb11
        var $55=HEAP[$o]; //@line 143 "_testcapimodule.c"
        var $56=(($55+4)&4294967295); //@line 143 "_testcapimodule.c"
        var $57=HEAP[$56]; //@line 143 "_testcapimodule.c"
        var $58=(($57+24)&4294967295); //@line 143 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 143 "_testcapimodule.c"
        var $60=HEAP[$o]; //@line 143 "_testcapimodule.c"
        FUNCTION_TABLE[$59]($60); //@line 143 "_testcapimodule.c"
        __label__ = 13; break; //@line 143 "_testcapimodule.c"
      case 13: // $bb12
        HEAP[$0]=-1; //@line 144 "_testcapimodule.c"
        __label__ = 22; break; //@line 144 "_testcapimodule.c"
      case 14: // $bb13
        var $61=HEAP[$o]; //@line 146 "_testcapimodule.c"
        var $62=(($61)&4294967295); //@line 146 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 146 "_testcapimodule.c"
        var $64=((($63) - 1)&4294967295); //@line 146 "_testcapimodule.c"
        var $65=HEAP[$o]; //@line 146 "_testcapimodule.c"
        var $66=(($65)&4294967295); //@line 146 "_testcapimodule.c"
        HEAP[$66]=$64; //@line 146 "_testcapimodule.c"
        var $67=HEAP[$o]; //@line 146 "_testcapimodule.c"
        var $68=(($67)&4294967295); //@line 146 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 146 "_testcapimodule.c"
        var $70=((($69))|0)==0; //@line 146 "_testcapimodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 146 "_testcapimodule.c"
      case 15: // $bb14
        var $71=HEAP[$o]; //@line 146 "_testcapimodule.c"
        var $72=(($71+4)&4294967295); //@line 146 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 146 "_testcapimodule.c"
        var $74=(($73+24)&4294967295); //@line 146 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 146 "_testcapimodule.c"
        var $76=HEAP[$o]; //@line 146 "_testcapimodule.c"
        FUNCTION_TABLE[$75]($76); //@line 146 "_testcapimodule.c"
        __label__ = 16; break; //@line 146 "_testcapimodule.c"
      case 16: // $bb15
        var $77=HEAP[$dict]; //@line 134 "_testcapimodule.c"
        var $78=_PyDict_Next($77, $pos, $k, $v); //@line 134 "_testcapimodule.c"
        var $79=((($78))|0)!=0; //@line 134 "_testcapimodule.c"
        if ($79) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 134 "_testcapimodule.c"
      case 17: // $bb16
        var $80=HEAP[$dict]; //@line 149 "_testcapimodule.c"
        var $81=(($80)&4294967295); //@line 149 "_testcapimodule.c"
        var $82=HEAP[$81]; //@line 149 "_testcapimodule.c"
        var $83=((($82) - 1)&4294967295); //@line 149 "_testcapimodule.c"
        var $84=HEAP[$dict]; //@line 149 "_testcapimodule.c"
        var $85=(($84)&4294967295); //@line 149 "_testcapimodule.c"
        HEAP[$85]=$83; //@line 149 "_testcapimodule.c"
        var $86=HEAP[$dict]; //@line 149 "_testcapimodule.c"
        var $87=(($86)&4294967295); //@line 149 "_testcapimodule.c"
        var $88=HEAP[$87]; //@line 149 "_testcapimodule.c"
        var $89=((($88))|0)==0; //@line 149 "_testcapimodule.c"
        if ($89) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 149 "_testcapimodule.c"
      case 18: // $bb17
        var $90=HEAP[$dict]; //@line 149 "_testcapimodule.c"
        var $91=(($90+4)&4294967295); //@line 149 "_testcapimodule.c"
        var $92=HEAP[$91]; //@line 149 "_testcapimodule.c"
        var $93=(($92+24)&4294967295); //@line 149 "_testcapimodule.c"
        var $94=HEAP[$93]; //@line 149 "_testcapimodule.c"
        var $95=HEAP[$dict]; //@line 149 "_testcapimodule.c"
        FUNCTION_TABLE[$94]($95); //@line 149 "_testcapimodule.c"
        __label__ = 19; break; //@line 149 "_testcapimodule.c"
      case 19: // $bb18
        var $96=HEAP[$iterations]; //@line 151 "_testcapimodule.c"
        var $97=HEAP[$count_addr]; //@line 151 "_testcapimodule.c"
        var $98=((($96))|0)!=((($97))|0); //@line 151 "_testcapimodule.c"
        if ($98) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 151 "_testcapimodule.c"
      case 20: // $bb19
        var $99=HEAP[_TestError]; //@line 152 "_testcapimodule.c"
        _PyErr_SetString($99, ((__str4)&4294967295)); //@line 152 "_testcapimodule.c"
        HEAP[$0]=-1; //@line 155 "_testcapimodule.c"
        __label__ = 22; break; //@line 155 "_testcapimodule.c"
      case 21: // $bb20
        HEAP[$0]=0; //@line 157 "_testcapimodule.c"
        __label__ = 22; break; //@line 157 "_testcapimodule.c"
      case 22: // $bb21
        var $100=HEAP[$0]; //@line 126 "_testcapimodule.c"
        HEAP[$retval]=$100; //@line 126 "_testcapimodule.c"
        __label__ = 23; break; //@line 126 "_testcapimodule.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 126 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 126 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_dict_iteration($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$i]=0; //@line 166 "_testcapimodule.c"
        __label__ = 4; break; //@line 166 "_testcapimodule.c"
      case 1: // $bb
        var $1=HEAP[$i]; //@line 167 "_testcapimodule.c"
        var $2=_test_dict_inner($1); //@line 167 "_testcapimodule.c"
        var $3=((($2))|0) < 0; //@line 167 "_testcapimodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 167 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 168 "_testcapimodule.c"
        __label__ = 6; break; //@line 168 "_testcapimodule.c"
      case 3: // $bb2
        var $4=HEAP[$i]; //@line 166 "_testcapimodule.c"
        var $5=((($4) + 1)&4294967295); //@line 166 "_testcapimodule.c"
        HEAP[$i]=$5; //@line 166 "_testcapimodule.c"
        __label__ = 4; break; //@line 166 "_testcapimodule.c"
      case 4: // $bb3
        var $6=HEAP[$i]; //@line 166 "_testcapimodule.c"
        var $7=((($6))|0) <= 199; //@line 166 "_testcapimodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 166 "_testcapimodule.c"
      case 5: // $bb4
        var $8=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 172 "_testcapimodule.c"
        var $9=((($8) + 1)&4294967295); //@line 172 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$9; //@line 172 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 173 "_testcapimodule.c"
        __label__ = 6; break; //@line 173 "_testcapimodule.c"
      case 6: // $bb5
        var $10=HEAP[$0]; //@line 168 "_testcapimodule.c"
        HEAP[$retval]=$10; //@line 168 "_testcapimodule.c"
        __label__ = 7; break; //@line 168 "_testcapimodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 168 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 168 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_lazy_hash_inheritance($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $type=__stackBase__+12;
        var $obj=__stackBase__+16;
        var $hash=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$type]=__HashInheritanceTester_Type; //@line 229 "_testcapimodule.c"
        var $1=HEAP[$type]; //@line 231 "_testcapimodule.c"
        var $2=(($1+132)&4294967295); //@line 231 "_testcapimodule.c"
        var $3=HEAP[$2]; //@line 231 "_testcapimodule.c"
        var $4=($3)!=0; //@line 231 "_testcapimodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 231 "_testcapimodule.c"
      case 1: // $bb
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 234 "_testcapimodule.c"
        var $6=((($5) + 1)&4294967295); //@line 234 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 234 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 234 "_testcapimodule.c"
        __label__ = 24; break; //@line 234 "_testcapimodule.c"
      case 2: // $bb1
        var $7=HEAP[$type]; //@line 237 "_testcapimodule.c"
        var $8=__PyObject_New($7); //@line 237 "_testcapimodule.c"
        HEAP[$obj]=$8; //@line 237 "_testcapimodule.c"
        var $9=HEAP[$obj]; //@line 238 "_testcapimodule.c"
        var $10=($9)==0; //@line 238 "_testcapimodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 238 "_testcapimodule.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 239 "_testcapimodule.c"
        var $11=HEAP[_TestError]; //@line 240 "_testcapimodule.c"
        _PyErr_SetString($11, ((__str6)&4294967295)); //@line 240 "_testcapimodule.c"
        HEAP[$0]=0; //@line 243 "_testcapimodule.c"
        __label__ = 24; break; //@line 243 "_testcapimodule.c"
      case 4: // $bb3
        var $12=HEAP[$type]; //@line 246 "_testcapimodule.c"
        var $13=(($12+132)&4294967295); //@line 246 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 246 "_testcapimodule.c"
        var $15=($14)!=0; //@line 246 "_testcapimodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 246 "_testcapimodule.c"
      case 5: // $bb4
        var $16=HEAP[_TestError]; //@line 247 "_testcapimodule.c"
        _PyErr_SetString($16, ((__str7)&4294967295)); //@line 247 "_testcapimodule.c"
        var $17=HEAP[$obj]; //@line 250 "_testcapimodule.c"
        var $18=(($17)&4294967295); //@line 250 "_testcapimodule.c"
        var $19=HEAP[$18]; //@line 250 "_testcapimodule.c"
        var $20=((($19) - 1)&4294967295); //@line 250 "_testcapimodule.c"
        var $21=HEAP[$obj]; //@line 250 "_testcapimodule.c"
        var $22=(($21)&4294967295); //@line 250 "_testcapimodule.c"
        HEAP[$22]=$20; //@line 250 "_testcapimodule.c"
        var $23=HEAP[$obj]; //@line 250 "_testcapimodule.c"
        var $24=(($23)&4294967295); //@line 250 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 250 "_testcapimodule.c"
        var $26=((($25))|0)==0; //@line 250 "_testcapimodule.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 250 "_testcapimodule.c"
      case 6: // $bb5
        var $27=HEAP[$obj]; //@line 250 "_testcapimodule.c"
        var $28=(($27+4)&4294967295); //@line 250 "_testcapimodule.c"
        var $29=HEAP[$28]; //@line 250 "_testcapimodule.c"
        var $30=(($29+24)&4294967295); //@line 250 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 250 "_testcapimodule.c"
        var $32=HEAP[$obj]; //@line 250 "_testcapimodule.c"
        FUNCTION_TABLE[$31]($32); //@line 250 "_testcapimodule.c"
        __label__ = 7; break; //@line 250 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 251 "_testcapimodule.c"
        __label__ = 24; break; //@line 251 "_testcapimodule.c"
      case 8: // $bb7
        var $33=HEAP[$obj]; //@line 254 "_testcapimodule.c"
        var $34=_PyObject_Hash($33); //@line 254 "_testcapimodule.c"
        HEAP[$hash]=$34; //@line 254 "_testcapimodule.c"
        var $35=HEAP[$hash]; //@line 255 "_testcapimodule.c"
        var $36=((($35))|0)==-1; //@line 255 "_testcapimodule.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 255 "_testcapimodule.c"
      case 9: // $bb8
        var $37=_PyErr_Occurred(); //@line 255 "_testcapimodule.c"
        var $38=($37)!=0; //@line 255 "_testcapimodule.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 255 "_testcapimodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 256 "_testcapimodule.c"
        var $39=HEAP[_TestError]; //@line 257 "_testcapimodule.c"
        _PyErr_SetString($39, ((__str8)&4294967295)); //@line 257 "_testcapimodule.c"
        var $40=HEAP[$obj]; //@line 260 "_testcapimodule.c"
        var $41=(($40)&4294967295); //@line 260 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 260 "_testcapimodule.c"
        var $43=((($42) - 1)&4294967295); //@line 260 "_testcapimodule.c"
        var $44=HEAP[$obj]; //@line 260 "_testcapimodule.c"
        var $45=(($44)&4294967295); //@line 260 "_testcapimodule.c"
        HEAP[$45]=$43; //@line 260 "_testcapimodule.c"
        var $46=HEAP[$obj]; //@line 260 "_testcapimodule.c"
        var $47=(($46)&4294967295); //@line 260 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 260 "_testcapimodule.c"
        var $49=((($48))|0)==0; //@line 260 "_testcapimodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 260 "_testcapimodule.c"
      case 11: // $bb10
        var $50=HEAP[$obj]; //@line 260 "_testcapimodule.c"
        var $51=(($50+4)&4294967295); //@line 260 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 260 "_testcapimodule.c"
        var $53=(($52+24)&4294967295); //@line 260 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 260 "_testcapimodule.c"
        var $55=HEAP[$obj]; //@line 260 "_testcapimodule.c"
        FUNCTION_TABLE[$54]($55); //@line 260 "_testcapimodule.c"
        __label__ = 12; break; //@line 260 "_testcapimodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 261 "_testcapimodule.c"
        __label__ = 24; break; //@line 261 "_testcapimodule.c"
      case 13: // $bb12
        var $56=HEAP[$type]; //@line 264 "_testcapimodule.c"
        var $57=(($56+132)&4294967295); //@line 264 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 264 "_testcapimodule.c"
        var $59=($58)==0; //@line 264 "_testcapimodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 264 "_testcapimodule.c"
      case 14: // $bb13
        var $60=HEAP[_TestError]; //@line 265 "_testcapimodule.c"
        _PyErr_SetString($60, ((__str9)&4294967295)); //@line 265 "_testcapimodule.c"
        var $61=HEAP[$obj]; //@line 268 "_testcapimodule.c"
        var $62=(($61)&4294967295); //@line 268 "_testcapimodule.c"
        var $63=HEAP[$62]; //@line 268 "_testcapimodule.c"
        var $64=((($63) - 1)&4294967295); //@line 268 "_testcapimodule.c"
        var $65=HEAP[$obj]; //@line 268 "_testcapimodule.c"
        var $66=(($65)&4294967295); //@line 268 "_testcapimodule.c"
        HEAP[$66]=$64; //@line 268 "_testcapimodule.c"
        var $67=HEAP[$obj]; //@line 268 "_testcapimodule.c"
        var $68=(($67)&4294967295); //@line 268 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 268 "_testcapimodule.c"
        var $70=((($69))|0)==0; //@line 268 "_testcapimodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 268 "_testcapimodule.c"
      case 15: // $bb14
        var $71=HEAP[$obj]; //@line 268 "_testcapimodule.c"
        var $72=(($71+4)&4294967295); //@line 268 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 268 "_testcapimodule.c"
        var $74=(($73+24)&4294967295); //@line 268 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 268 "_testcapimodule.c"
        var $76=HEAP[$obj]; //@line 268 "_testcapimodule.c"
        FUNCTION_TABLE[$75]($76); //@line 268 "_testcapimodule.c"
        __label__ = 16; break; //@line 268 "_testcapimodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 269 "_testcapimodule.c"
        __label__ = 24; break; //@line 269 "_testcapimodule.c"
      case 17: // $bb16
        var $77=HEAP[$type]; //@line 272 "_testcapimodule.c"
        var $78=(($77+60)&4294967295); //@line 272 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 272 "_testcapimodule.c"
        var $80=HEAP[((_PyType_Type+60)&4294967295)]; //@line 272 "_testcapimodule.c"
        var $81=($79)!=($80); //@line 272 "_testcapimodule.c"
        if ($81) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 272 "_testcapimodule.c"
      case 18: // $bb17
        var $82=HEAP[_TestError]; //@line 273 "_testcapimodule.c"
        _PyErr_SetString($82, ((__str10)&4294967295)); //@line 273 "_testcapimodule.c"
        var $83=HEAP[$obj]; //@line 276 "_testcapimodule.c"
        var $84=(($83)&4294967295); //@line 276 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 276 "_testcapimodule.c"
        var $86=((($85) - 1)&4294967295); //@line 276 "_testcapimodule.c"
        var $87=HEAP[$obj]; //@line 276 "_testcapimodule.c"
        var $88=(($87)&4294967295); //@line 276 "_testcapimodule.c"
        HEAP[$88]=$86; //@line 276 "_testcapimodule.c"
        var $89=HEAP[$obj]; //@line 276 "_testcapimodule.c"
        var $90=(($89)&4294967295); //@line 276 "_testcapimodule.c"
        var $91=HEAP[$90]; //@line 276 "_testcapimodule.c"
        var $92=((($91))|0)==0; //@line 276 "_testcapimodule.c"
        if ($92) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 276 "_testcapimodule.c"
      case 19: // $bb18
        var $93=HEAP[$obj]; //@line 276 "_testcapimodule.c"
        var $94=(($93+4)&4294967295); //@line 276 "_testcapimodule.c"
        var $95=HEAP[$94]; //@line 276 "_testcapimodule.c"
        var $96=(($95+24)&4294967295); //@line 276 "_testcapimodule.c"
        var $97=HEAP[$96]; //@line 276 "_testcapimodule.c"
        var $98=HEAP[$obj]; //@line 276 "_testcapimodule.c"
        FUNCTION_TABLE[$97]($98); //@line 276 "_testcapimodule.c"
        __label__ = 20; break; //@line 276 "_testcapimodule.c"
      case 20: // $bb19
        HEAP[$0]=0; //@line 277 "_testcapimodule.c"
        __label__ = 24; break; //@line 277 "_testcapimodule.c"
      case 21: // $bb20
        var $99=HEAP[$obj]; //@line 280 "_testcapimodule.c"
        var $100=(($99)&4294967295); //@line 280 "_testcapimodule.c"
        var $101=HEAP[$100]; //@line 280 "_testcapimodule.c"
        var $102=((($101) - 1)&4294967295); //@line 280 "_testcapimodule.c"
        var $103=HEAP[$obj]; //@line 280 "_testcapimodule.c"
        var $104=(($103)&4294967295); //@line 280 "_testcapimodule.c"
        HEAP[$104]=$102; //@line 280 "_testcapimodule.c"
        var $105=HEAP[$obj]; //@line 280 "_testcapimodule.c"
        var $106=(($105)&4294967295); //@line 280 "_testcapimodule.c"
        var $107=HEAP[$106]; //@line 280 "_testcapimodule.c"
        var $108=((($107))|0)==0; //@line 280 "_testcapimodule.c"
        if ($108) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 280 "_testcapimodule.c"
      case 22: // $bb21
        var $109=HEAP[$obj]; //@line 280 "_testcapimodule.c"
        var $110=(($109+4)&4294967295); //@line 280 "_testcapimodule.c"
        var $111=HEAP[$110]; //@line 280 "_testcapimodule.c"
        var $112=(($111+24)&4294967295); //@line 280 "_testcapimodule.c"
        var $113=HEAP[$112]; //@line 280 "_testcapimodule.c"
        var $114=HEAP[$obj]; //@line 280 "_testcapimodule.c"
        FUNCTION_TABLE[$113]($114); //@line 280 "_testcapimodule.c"
        __label__ = 23; break; //@line 280 "_testcapimodule.c"
      case 23: // $bb22
        var $115=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 282 "_testcapimodule.c"
        var $116=((($115) + 1)&4294967295); //@line 282 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$116; //@line 282 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 282 "_testcapimodule.c"
        __label__ = 24; break; //@line 282 "_testcapimodule.c"
      case 24: // $bb23
        var $117=HEAP[$0]; //@line 234 "_testcapimodule.c"
        HEAP[$retval]=$117; //@line 234 "_testcapimodule.c"
        __label__ = 25; break; //@line 234 "_testcapimodule.c"
      case 25: // $return
        var $retval24=HEAP[$retval]; //@line 234 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 234 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _broken_buffer_getbuffer($self, $view, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $view_addr=__stackBase__+4;
        var $flags_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$view_addr]=$view;
        HEAP[$flags_addr]=$flags;
        var $1=HEAP[_TestError]; //@line 293 "_testcapimodule.c"
        _PyErr_SetString($1, ((__str11)&4294967295)); //@line 293 "_testcapimodule.c"
        HEAP[$0]=-1; //@line 296 "_testcapimodule.c"
        var $2=HEAP[$0]; //@line 296 "_testcapimodule.c"
        HEAP[$retval]=$2; //@line 296 "_testcapimodule.c"
        __label__ = 1; break; //@line 296 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 296 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 296 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_broken_memoryview($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $obj=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=__PyObject_New(__MemoryViewTester_Type); //@line 353 "_testcapimodule.c"
        HEAP[$obj]=$1; //@line 353 "_testcapimodule.c"
        var $2=HEAP[$obj]; //@line 356 "_testcapimodule.c"
        var $3=($2)==0; //@line 356 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 356 "_testcapimodule.c"
      case 1: // $bb
        _PyErr_Clear(); //@line 357 "_testcapimodule.c"
        var $4=HEAP[_TestError]; //@line 358 "_testcapimodule.c"
        _PyErr_SetString($4, ((__str13)&4294967295)); //@line 358 "_testcapimodule.c"
        HEAP[$0]=0; //@line 361 "_testcapimodule.c"
        __label__ = 13; break; //@line 361 "_testcapimodule.c"
      case 2: // $bb1
        var $5=HEAP[$obj]; //@line 364 "_testcapimodule.c"
        var $6=_PyMemoryView_FromObject($5); //@line 364 "_testcapimodule.c"
        HEAP[$res]=$6; //@line 364 "_testcapimodule.c"
        var $7=HEAP[$res]; //@line 365 "_testcapimodule.c"
        var $8=($7)!=0; //@line 365 "_testcapimodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 365 "_testcapimodule.c"
      case 3: // $bb2
        var $9=_PyErr_Occurred(); //@line 365 "_testcapimodule.c"
        var $10=($9)==0; //@line 365 "_testcapimodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 365 "_testcapimodule.c"
      case 4: // $bb3
        var $11=HEAP[_TestError]; //@line 366 "_testcapimodule.c"
        _PyErr_SetString($11, ((__str14)&4294967295)); //@line 366 "_testcapimodule.c"
        var $12=HEAP[$res]; //@line 369 "_testcapimodule.c"
        var $13=($12)!=0; //@line 369 "_testcapimodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 369 "_testcapimodule.c"
      case 5: // $bb4
        var $14=HEAP[$res]; //@line 369 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 369 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 369 "_testcapimodule.c"
        var $17=((($16) - 1)&4294967295); //@line 369 "_testcapimodule.c"
        var $18=HEAP[$res]; //@line 369 "_testcapimodule.c"
        var $19=(($18)&4294967295); //@line 369 "_testcapimodule.c"
        HEAP[$19]=$17; //@line 369 "_testcapimodule.c"
        var $20=HEAP[$res]; //@line 369 "_testcapimodule.c"
        var $21=(($20)&4294967295); //@line 369 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 369 "_testcapimodule.c"
        var $23=((($22))|0)==0; //@line 369 "_testcapimodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 369 "_testcapimodule.c"
      case 6: // $bb5
        var $24=HEAP[$res]; //@line 369 "_testcapimodule.c"
        var $25=(($24+4)&4294967295); //@line 369 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 369 "_testcapimodule.c"
        var $27=(($26+24)&4294967295); //@line 369 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 369 "_testcapimodule.c"
        var $29=HEAP[$res]; //@line 369 "_testcapimodule.c"
        FUNCTION_TABLE[$28]($29); //@line 369 "_testcapimodule.c"
        __label__ = 7; break; //@line 369 "_testcapimodule.c"
      case 7: // $bb6
        var $30=HEAP[$obj]; //@line 370 "_testcapimodule.c"
        var $31=(($30)&4294967295); //@line 370 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 370 "_testcapimodule.c"
        var $33=((($32) - 1)&4294967295); //@line 370 "_testcapimodule.c"
        var $34=HEAP[$obj]; //@line 370 "_testcapimodule.c"
        var $35=(($34)&4294967295); //@line 370 "_testcapimodule.c"
        HEAP[$35]=$33; //@line 370 "_testcapimodule.c"
        var $36=HEAP[$obj]; //@line 370 "_testcapimodule.c"
        var $37=(($36)&4294967295); //@line 370 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 370 "_testcapimodule.c"
        var $39=((($38))|0)==0; //@line 370 "_testcapimodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 370 "_testcapimodule.c"
      case 8: // $bb7
        var $40=HEAP[$obj]; //@line 370 "_testcapimodule.c"
        var $41=(($40+4)&4294967295); //@line 370 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 370 "_testcapimodule.c"
        var $43=(($42+24)&4294967295); //@line 370 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 370 "_testcapimodule.c"
        var $45=HEAP[$obj]; //@line 370 "_testcapimodule.c"
        FUNCTION_TABLE[$44]($45); //@line 370 "_testcapimodule.c"
        __label__ = 9; break; //@line 370 "_testcapimodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 371 "_testcapimodule.c"
        __label__ = 13; break; //@line 371 "_testcapimodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 374 "_testcapimodule.c"
        var $46=HEAP[$obj]; //@line 375 "_testcapimodule.c"
        var $47=(($46)&4294967295); //@line 375 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 375 "_testcapimodule.c"
        var $49=((($48) - 1)&4294967295); //@line 375 "_testcapimodule.c"
        var $50=HEAP[$obj]; //@line 375 "_testcapimodule.c"
        var $51=(($50)&4294967295); //@line 375 "_testcapimodule.c"
        HEAP[$51]=$49; //@line 375 "_testcapimodule.c"
        var $52=HEAP[$obj]; //@line 375 "_testcapimodule.c"
        var $53=(($52)&4294967295); //@line 375 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 375 "_testcapimodule.c"
        var $55=((($54))|0)==0; //@line 375 "_testcapimodule.c"
        if ($55) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 375 "_testcapimodule.c"
      case 11: // $bb10
        var $56=HEAP[$obj]; //@line 375 "_testcapimodule.c"
        var $57=(($56+4)&4294967295); //@line 375 "_testcapimodule.c"
        var $58=HEAP[$57]; //@line 375 "_testcapimodule.c"
        var $59=(($58+24)&4294967295); //@line 375 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 375 "_testcapimodule.c"
        var $61=HEAP[$obj]; //@line 375 "_testcapimodule.c"
        FUNCTION_TABLE[$60]($61); //@line 375 "_testcapimodule.c"
        __label__ = 12; break; //@line 375 "_testcapimodule.c"
      case 12: // $bb11
        var $62=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 376 "_testcapimodule.c"
        var $63=((($62) + 1)&4294967295); //@line 376 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$63; //@line 376 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 376 "_testcapimodule.c"
        __label__ = 13; break; //@line 376 "_testcapimodule.c"
      case 13: // $bb12
        var $64=HEAP[$0]; //@line 361 "_testcapimodule.c"
        HEAP[$retval]=$64; //@line 361 "_testcapimodule.c"
        __label__ = 14; break; //@line 361 "_testcapimodule.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 361 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 361 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_test_long_error($msg) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $msg_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$msg_addr]=$msg;
        var $1=HEAP[$msg_addr]; //@line 400 "_testcapimodule.c"
        var $2=_raiseTestError(((__str15)&4294967295), $1); //@line 400 "_testcapimodule.c"
        HEAP[$0]=$2; //@line 400 "_testcapimodule.c"
        var $3=HEAP[$0]; //@line 400 "_testcapimodule.c"
        HEAP[$retval]=$3; //@line 400 "_testcapimodule.c"
        __label__ = 1; break; //@line 400 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 400 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 400 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_api_inner($error) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $error_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_24=__stackBase__+12;
        var $NBITS=__stackBase__+16;
        var $base=__stackBase__+20;
        var $pyresult=__stackBase__+24;
        var $i=__stackBase__+28;
        var $j=__stackBase__+32;
        var $in=__stackBase__+36;
        var $out=__stackBase__+40;
        var $uin=__stackBase__+44;
        var $uout=__stackBase__+48;
        var $one=__stackBase__+52;
        var $x=__stackBase__+56;
        var $y=__stackBase__+60;
        var $out27=__stackBase__+64;
        var $uout28=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$error_addr]=$error;
        HEAP[$NBITS]=32; //@line 13 "testcapi_long.h"
        HEAP[$base]=1; //@line 25 "testcapi_long.h"
        HEAP[$i]=0; //@line 26 "testcapi_long.h"
        __label__ = 26; break; //@line 26 "testcapi_long.h"
      case 1: // $bb
        HEAP[$j]=0; //@line 31 "testcapi_long.h"
        __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 2: // $bb1
        var $1=HEAP[$j]; //@line 36 "testcapi_long.h"
        var $2=((($1))|0) > 2; //@line 36 "testcapi_long.h"
        if ($2) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 36 "testcapi_long.h"
      case 3: // $bb2
        var $3=HEAP[$base]; //@line 36 "testcapi_long.h"
        var $4=((0 - ($3))&4294967295); //@line 36 "testcapi_long.h"
        HEAP[$iftmp_24]=$4; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 4: // $bb3
        var $5=HEAP[$base]; //@line 36 "testcapi_long.h"
        HEAP[$iftmp_24]=$5; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 5: // $bb4
        var $6=HEAP[$iftmp_24]; //@line 36 "testcapi_long.h"
        HEAP[$uin]=$6; //@line 36 "testcapi_long.h"
        var $7=HEAP[$j]; //@line 43 "testcapi_long.h"
        var $8=((($7))|0) % 3; //@line 43 "testcapi_long.h"
        var $9=HEAP[$uin]; //@line 43 "testcapi_long.h"
        var $10=((($8) + ($9))&4294967295); //@line 43 "testcapi_long.h"
        var $11=((($10) - 1)&4294967295); //@line 43 "testcapi_long.h"
        HEAP[$uin]=$11; //@line 43 "testcapi_long.h"
        var $12=HEAP[$uin]; //@line 45 "testcapi_long.h"
        var $13=_PyLong_FromUnsignedLong($12); //@line 45 "testcapi_long.h"
        HEAP[$pyresult]=$13; //@line 45 "testcapi_long.h"
        var $14=HEAP[$pyresult]; //@line 46 "testcapi_long.h"
        var $15=($14)==0; //@line 46 "testcapi_long.h"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 46 "testcapi_long.h"
      case 6: // $bb5
        var $16=HEAP[$error_addr]; //@line 47 "testcapi_long.h"
        var $17=FUNCTION_TABLE[$16](((__str16)&4294967295)); //@line 47 "testcapi_long.h"
        HEAP[$0]=$17; //@line 47 "testcapi_long.h"
        __label__ = 82; break; //@line 47 "testcapi_long.h"
      case 7: // $bb6
        var $18=HEAP[$pyresult]; //@line 50 "testcapi_long.h"
        var $19=_PyLong_AsUnsignedLong($18); //@line 50 "testcapi_long.h"
        HEAP[$uout]=$19; //@line 50 "testcapi_long.h"
        var $20=HEAP[$uout]; //@line 51 "testcapi_long.h"
        var $21=((($20))|0)==-1; //@line 51 "testcapi_long.h"
        if ($21) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 8: // $bb7
        var $22=_PyErr_Occurred(); //@line 51 "testcapi_long.h"
        var $23=($22)!=0; //@line 51 "testcapi_long.h"
        if ($23) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 9: // $bb8
        var $24=HEAP[$error_addr]; //@line 52 "testcapi_long.h"
        var $25=FUNCTION_TABLE[$24](((__str17)&4294967295)); //@line 52 "testcapi_long.h"
        HEAP[$0]=$25; //@line 52 "testcapi_long.h"
        __label__ = 82; break; //@line 52 "testcapi_long.h"
      case 10: // $bb9
        var $26=HEAP[$uout]; //@line 54 "testcapi_long.h"
        var $27=HEAP[$uin]; //@line 54 "testcapi_long.h"
        var $28=((($26))|0)!=((($27))|0); //@line 54 "testcapi_long.h"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 54 "testcapi_long.h"
      case 11: // $bb10
        var $29=HEAP[$error_addr]; //@line 55 "testcapi_long.h"
        var $30=FUNCTION_TABLE[$29](((__str18)&4294967295)); //@line 55 "testcapi_long.h"
        HEAP[$0]=$30; //@line 55 "testcapi_long.h"
        __label__ = 82; break; //@line 55 "testcapi_long.h"
      case 12: // $bb11
        var $31=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $32=(($31)&4294967295); //@line 57 "testcapi_long.h"
        var $33=HEAP[$32]; //@line 57 "testcapi_long.h"
        var $34=((($33) - 1)&4294967295); //@line 57 "testcapi_long.h"
        var $35=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $36=(($35)&4294967295); //@line 57 "testcapi_long.h"
        HEAP[$36]=$34; //@line 57 "testcapi_long.h"
        var $37=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $38=(($37)&4294967295); //@line 57 "testcapi_long.h"
        var $39=HEAP[$38]; //@line 57 "testcapi_long.h"
        var $40=((($39))|0)==0; //@line 57 "testcapi_long.h"
        if ($40) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 57 "testcapi_long.h"
      case 13: // $bb12
        var $41=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $42=(($41+4)&4294967295); //@line 57 "testcapi_long.h"
        var $43=HEAP[$42]; //@line 57 "testcapi_long.h"
        var $44=(($43+24)&4294967295); //@line 57 "testcapi_long.h"
        var $45=HEAP[$44]; //@line 57 "testcapi_long.h"
        var $46=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        FUNCTION_TABLE[$45]($46); //@line 57 "testcapi_long.h"
        __label__ = 14; break; //@line 57 "testcapi_long.h"
      case 14: // $bb13
        HEAP[$pyresult]=0; //@line 57 "testcapi_long.h"
        var $47=HEAP[$uin]; //@line 59 "testcapi_long.h"
        HEAP[$in]=$47; //@line 59 "testcapi_long.h"
        var $48=HEAP[$in]; //@line 60 "testcapi_long.h"
        var $49=_PyLong_FromLong($48); //@line 60 "testcapi_long.h"
        HEAP[$pyresult]=$49; //@line 60 "testcapi_long.h"
        var $50=HEAP[$pyresult]; //@line 61 "testcapi_long.h"
        var $51=($50)==0; //@line 61 "testcapi_long.h"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 61 "testcapi_long.h"
      case 15: // $bb14
        var $52=HEAP[$error_addr]; //@line 62 "testcapi_long.h"
        var $53=FUNCTION_TABLE[$52](((__str19)&4294967295)); //@line 62 "testcapi_long.h"
        HEAP[$0]=$53; //@line 62 "testcapi_long.h"
        __label__ = 82; break; //@line 62 "testcapi_long.h"
      case 16: // $bb15
        var $54=HEAP[$pyresult]; //@line 65 "testcapi_long.h"
        var $55=_PyLong_AsLong($54); //@line 65 "testcapi_long.h"
        HEAP[$out]=$55; //@line 65 "testcapi_long.h"
        var $56=HEAP[$out]; //@line 66 "testcapi_long.h"
        var $57=((($56))|0)==-1; //@line 66 "testcapi_long.h"
        if ($57) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 17: // $bb16
        var $58=_PyErr_Occurred(); //@line 66 "testcapi_long.h"
        var $59=($58)!=0; //@line 66 "testcapi_long.h"
        if ($59) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 18: // $bb17
        var $60=HEAP[$error_addr]; //@line 67 "testcapi_long.h"
        var $61=FUNCTION_TABLE[$60](((__str20)&4294967295)); //@line 67 "testcapi_long.h"
        HEAP[$0]=$61; //@line 67 "testcapi_long.h"
        __label__ = 82; break; //@line 67 "testcapi_long.h"
      case 19: // $bb18
        var $62=HEAP[$out]; //@line 69 "testcapi_long.h"
        var $63=HEAP[$in]; //@line 69 "testcapi_long.h"
        var $64=((($62))|0)!=((($63))|0); //@line 69 "testcapi_long.h"
        if ($64) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 69 "testcapi_long.h"
      case 20: // $bb19
        var $65=HEAP[$error_addr]; //@line 70 "testcapi_long.h"
        var $66=FUNCTION_TABLE[$65](((__str21)&4294967295)); //@line 70 "testcapi_long.h"
        HEAP[$0]=$66; //@line 70 "testcapi_long.h"
        __label__ = 82; break; //@line 70 "testcapi_long.h"
      case 21: // $bb20
        var $67=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $68=(($67)&4294967295); //@line 72 "testcapi_long.h"
        var $69=HEAP[$68]; //@line 72 "testcapi_long.h"
        var $70=((($69) - 1)&4294967295); //@line 72 "testcapi_long.h"
        var $71=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $72=(($71)&4294967295); //@line 72 "testcapi_long.h"
        HEAP[$72]=$70; //@line 72 "testcapi_long.h"
        var $73=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $74=(($73)&4294967295); //@line 72 "testcapi_long.h"
        var $75=HEAP[$74]; //@line 72 "testcapi_long.h"
        var $76=((($75))|0)==0; //@line 72 "testcapi_long.h"
        if ($76) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 72 "testcapi_long.h"
      case 22: // $bb21
        var $77=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $78=(($77+4)&4294967295); //@line 72 "testcapi_long.h"
        var $79=HEAP[$78]; //@line 72 "testcapi_long.h"
        var $80=(($79+24)&4294967295); //@line 72 "testcapi_long.h"
        var $81=HEAP[$80]; //@line 72 "testcapi_long.h"
        var $82=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        FUNCTION_TABLE[$81]($82); //@line 72 "testcapi_long.h"
        __label__ = 23; break; //@line 72 "testcapi_long.h"
      case 23: // $bb22
        HEAP[$pyresult]=0; //@line 72 "testcapi_long.h"
        var $83=HEAP[$j]; //@line 31 "testcapi_long.h"
        var $84=((($83) + 1)&4294967295); //@line 31 "testcapi_long.h"
        HEAP[$j]=$84; //@line 31 "testcapi_long.h"
        __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 24: // $bb23
        var $85=HEAP[$j]; //@line 31 "testcapi_long.h"
        var $86=((($85))|0) <= 5; //@line 31 "testcapi_long.h"
        if ($86) { __label__ = 2; break; } else { __label__ = 25; break; } //@line 31 "testcapi_long.h"
      case 25: // $bb24
        var $87=HEAP[$i]; //@line 28 "testcapi_long.h"
        var $88=((($87) + 1)&4294967295); //@line 28 "testcapi_long.h"
        HEAP[$i]=$88; //@line 28 "testcapi_long.h"
        var $89=HEAP[$base]; //@line 28 "testcapi_long.h"
        var $90=($89) << 1; //@line 28 "testcapi_long.h"
        HEAP[$base]=$90; //@line 28 "testcapi_long.h"
        __label__ = 26; break; //@line 28 "testcapi_long.h"
      case 26: // $bb25
        var $91=HEAP[$NBITS]; //@line 27 "testcapi_long.h"
        var $92=((($91) + 1)&4294967295); //@line 27 "testcapi_long.h"
        var $93=HEAP[$i]; //@line 27 "testcapi_long.h"
        var $94=((($92))|0) > ((($93))|0); //@line 27 "testcapi_long.h"
        if ($94) { __label__ = 1; break; } else { __label__ = 27; break; } //@line 27 "testcapi_long.h"
      case 27: // $bb26
        var $95=_PyLong_FromLong(1); //@line 85 "testcapi_long.h"
        HEAP[$one]=$95; //@line 85 "testcapi_long.h"
        var $96=HEAP[$one]; //@line 86 "testcapi_long.h"
        var $97=($96)==0; //@line 86 "testcapi_long.h"
        if ($97) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 86 "testcapi_long.h"
      case 28: // $bb29
        var $98=HEAP[$error_addr]; //@line 87 "testcapi_long.h"
        var $99=FUNCTION_TABLE[$98](((__str22)&4294967295)); //@line 87 "testcapi_long.h"
        HEAP[$0]=$99; //@line 87 "testcapi_long.h"
        __label__ = 82; break; //@line 87 "testcapi_long.h"
      case 29: // $bb30
        var $100=HEAP[$one]; //@line 91 "testcapi_long.h"
        var $101=_PyNumber_Negative($100); //@line 91 "testcapi_long.h"
        HEAP[$x]=$101; //@line 91 "testcapi_long.h"
        var $102=HEAP[$x]; //@line 92 "testcapi_long.h"
        var $103=($102)==0; //@line 92 "testcapi_long.h"
        if ($103) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 92 "testcapi_long.h"
      case 30: // $bb31
        var $104=HEAP[$error_addr]; //@line 93 "testcapi_long.h"
        var $105=FUNCTION_TABLE[$104](((__str23)&4294967295)); //@line 93 "testcapi_long.h"
        HEAP[$0]=$105; //@line 93 "testcapi_long.h"
        __label__ = 82; break; //@line 93 "testcapi_long.h"
      case 31: // $bb32
        var $106=HEAP[$x]; //@line 96 "testcapi_long.h"
        var $107=_PyLong_AsUnsignedLong($106); //@line 96 "testcapi_long.h"
        HEAP[$uout28]=$107; //@line 96 "testcapi_long.h"
        var $108=HEAP[$uout28]; //@line 97 "testcapi_long.h"
        var $109=((($108))|0)!=-1; //@line 97 "testcapi_long.h"
        if ($109) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 97 "testcapi_long.h"
      case 32: // $bb33
        var $110=_PyErr_Occurred(); //@line 97 "testcapi_long.h"
        var $111=($110)==0; //@line 97 "testcapi_long.h"
        if ($111) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 97 "testcapi_long.h"
      case 33: // $bb34
        var $112=HEAP[$error_addr]; //@line 98 "testcapi_long.h"
        var $113=FUNCTION_TABLE[$112](((__str24)&4294967295)); //@line 98 "testcapi_long.h"
        HEAP[$0]=$113; //@line 98 "testcapi_long.h"
        __label__ = 82; break; //@line 98 "testcapi_long.h"
      case 34: // $bb35
        var $114=HEAP[_PyExc_OverflowError]; //@line 100 "testcapi_long.h"
        var $115=_PyErr_ExceptionMatches($114); //@line 100 "testcapi_long.h"
        var $116=((($115))|0)==0; //@line 100 "testcapi_long.h"
        if ($116) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 100 "testcapi_long.h"
      case 35: // $bb36
        var $117=HEAP[$error_addr]; //@line 101 "testcapi_long.h"
        var $118=FUNCTION_TABLE[$117](((__str25)&4294967295)); //@line 101 "testcapi_long.h"
        HEAP[$0]=$118; //@line 101 "testcapi_long.h"
        __label__ = 82; break; //@line 101 "testcapi_long.h"
      case 36: // $bb37
        _PyErr_Clear(); //@line 104 "testcapi_long.h"
        var $119=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $120=(($119)&4294967295); //@line 105 "testcapi_long.h"
        var $121=HEAP[$120]; //@line 105 "testcapi_long.h"
        var $122=((($121) - 1)&4294967295); //@line 105 "testcapi_long.h"
        var $123=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $124=(($123)&4294967295); //@line 105 "testcapi_long.h"
        HEAP[$124]=$122; //@line 105 "testcapi_long.h"
        var $125=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $126=(($125)&4294967295); //@line 105 "testcapi_long.h"
        var $127=HEAP[$126]; //@line 105 "testcapi_long.h"
        var $128=((($127))|0)==0; //@line 105 "testcapi_long.h"
        if ($128) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 105 "testcapi_long.h"
      case 37: // $bb38
        var $129=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $130=(($129+4)&4294967295); //@line 105 "testcapi_long.h"
        var $131=HEAP[$130]; //@line 105 "testcapi_long.h"
        var $132=(($131+24)&4294967295); //@line 105 "testcapi_long.h"
        var $133=HEAP[$132]; //@line 105 "testcapi_long.h"
        var $134=HEAP[$x]; //@line 105 "testcapi_long.h"
        FUNCTION_TABLE[$133]($134); //@line 105 "testcapi_long.h"
        __label__ = 38; break; //@line 105 "testcapi_long.h"
      case 38: // $bb39
        HEAP[$x]=0; //@line 105 "testcapi_long.h"
        var $135=HEAP[$NBITS]; //@line 108 "testcapi_long.h"
        var $136=_PyLong_FromLong($135); //@line 108 "testcapi_long.h"
        HEAP[$y]=$136; //@line 108 "testcapi_long.h"
        var $137=HEAP[$y]; //@line 109 "testcapi_long.h"
        var $138=($137)==0; //@line 109 "testcapi_long.h"
        if ($138) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 109 "testcapi_long.h"
      case 39: // $bb40
        var $139=HEAP[$error_addr]; //@line 110 "testcapi_long.h"
        var $140=FUNCTION_TABLE[$139](((__str22)&4294967295)); //@line 110 "testcapi_long.h"
        HEAP[$0]=$140; //@line 110 "testcapi_long.h"
        __label__ = 82; break; //@line 110 "testcapi_long.h"
      case 40: // $bb41
        var $141=HEAP[$one]; //@line 113 "testcapi_long.h"
        var $142=HEAP[$y]; //@line 113 "testcapi_long.h"
        var $143=_PyNumber_Lshift($141, $142); //@line 113 "testcapi_long.h"
        HEAP[$x]=$143; //@line 113 "testcapi_long.h"
        var $144=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $145=(($144)&4294967295); //@line 114 "testcapi_long.h"
        var $146=HEAP[$145]; //@line 114 "testcapi_long.h"
        var $147=((($146) - 1)&4294967295); //@line 114 "testcapi_long.h"
        var $148=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $149=(($148)&4294967295); //@line 114 "testcapi_long.h"
        HEAP[$149]=$147; //@line 114 "testcapi_long.h"
        var $150=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $151=(($150)&4294967295); //@line 114 "testcapi_long.h"
        var $152=HEAP[$151]; //@line 114 "testcapi_long.h"
        var $153=((($152))|0)==0; //@line 114 "testcapi_long.h"
        if ($153) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 114 "testcapi_long.h"
      case 41: // $bb42
        var $154=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $155=(($154+4)&4294967295); //@line 114 "testcapi_long.h"
        var $156=HEAP[$155]; //@line 114 "testcapi_long.h"
        var $157=(($156+24)&4294967295); //@line 114 "testcapi_long.h"
        var $158=HEAP[$157]; //@line 114 "testcapi_long.h"
        var $159=HEAP[$y]; //@line 114 "testcapi_long.h"
        FUNCTION_TABLE[$158]($159); //@line 114 "testcapi_long.h"
        __label__ = 42; break; //@line 114 "testcapi_long.h"
      case 42: // $bb43
        HEAP[$y]=0; //@line 114 "testcapi_long.h"
        var $160=HEAP[$x]; //@line 115 "testcapi_long.h"
        var $161=($160)==0; //@line 115 "testcapi_long.h"
        if ($161) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 115 "testcapi_long.h"
      case 43: // $bb44
        var $162=HEAP[$error_addr]; //@line 116 "testcapi_long.h"
        var $163=FUNCTION_TABLE[$162](((__str26)&4294967295)); //@line 116 "testcapi_long.h"
        HEAP[$0]=$163; //@line 116 "testcapi_long.h"
        __label__ = 82; break; //@line 116 "testcapi_long.h"
      case 44: // $bb45
        var $164=HEAP[$x]; //@line 119 "testcapi_long.h"
        var $165=_PyLong_AsUnsignedLong($164); //@line 119 "testcapi_long.h"
        HEAP[$uout28]=$165; //@line 119 "testcapi_long.h"
        var $166=HEAP[$uout28]; //@line 120 "testcapi_long.h"
        var $167=((($166))|0)!=-1; //@line 120 "testcapi_long.h"
        if ($167) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 120 "testcapi_long.h"
      case 45: // $bb46
        var $168=_PyErr_Occurred(); //@line 120 "testcapi_long.h"
        var $169=($168)==0; //@line 120 "testcapi_long.h"
        if ($169) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 120 "testcapi_long.h"
      case 46: // $bb47
        var $170=HEAP[$error_addr]; //@line 121 "testcapi_long.h"
        var $171=FUNCTION_TABLE[$170](((__str27)&4294967295)); //@line 121 "testcapi_long.h"
        HEAP[$0]=$171; //@line 121 "testcapi_long.h"
        __label__ = 82; break; //@line 121 "testcapi_long.h"
      case 47: // $bb48
        var $172=HEAP[_PyExc_OverflowError]; //@line 124 "testcapi_long.h"
        var $173=_PyErr_ExceptionMatches($172); //@line 124 "testcapi_long.h"
        var $174=((($173))|0)==0; //@line 124 "testcapi_long.h"
        if ($174) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 124 "testcapi_long.h"
      case 48: // $bb49
        var $175=HEAP[$error_addr]; //@line 125 "testcapi_long.h"
        var $176=FUNCTION_TABLE[$175](((__str28)&4294967295)); //@line 125 "testcapi_long.h"
        HEAP[$0]=$176; //@line 125 "testcapi_long.h"
        __label__ = 82; break; //@line 125 "testcapi_long.h"
      case 49: // $bb50
        _PyErr_Clear(); //@line 128 "testcapi_long.h"
        var $177=HEAP[$x]; //@line 132 "testcapi_long.h"
        var $178=HEAP[$one]; //@line 132 "testcapi_long.h"
        var $179=_PyNumber_Rshift($177, $178); //@line 132 "testcapi_long.h"
        HEAP[$y]=$179; //@line 132 "testcapi_long.h"
        var $180=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $181=(($180)&4294967295); //@line 133 "testcapi_long.h"
        var $182=HEAP[$181]; //@line 133 "testcapi_long.h"
        var $183=((($182) - 1)&4294967295); //@line 133 "testcapi_long.h"
        var $184=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $185=(($184)&4294967295); //@line 133 "testcapi_long.h"
        HEAP[$185]=$183; //@line 133 "testcapi_long.h"
        var $186=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $187=(($186)&4294967295); //@line 133 "testcapi_long.h"
        var $188=HEAP[$187]; //@line 133 "testcapi_long.h"
        var $189=((($188))|0)==0; //@line 133 "testcapi_long.h"
        if ($189) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 133 "testcapi_long.h"
      case 50: // $bb51
        var $190=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $191=(($190+4)&4294967295); //@line 133 "testcapi_long.h"
        var $192=HEAP[$191]; //@line 133 "testcapi_long.h"
        var $193=(($192+24)&4294967295); //@line 133 "testcapi_long.h"
        var $194=HEAP[$193]; //@line 133 "testcapi_long.h"
        var $195=HEAP[$x]; //@line 133 "testcapi_long.h"
        FUNCTION_TABLE[$194]($195); //@line 133 "testcapi_long.h"
        __label__ = 51; break; //@line 133 "testcapi_long.h"
      case 51: // $bb52
        HEAP[$x]=0; //@line 133 "testcapi_long.h"
        var $196=HEAP[$y]; //@line 134 "testcapi_long.h"
        var $197=($196)==0; //@line 134 "testcapi_long.h"
        if ($197) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 134 "testcapi_long.h"
      case 52: // $bb53
        var $198=HEAP[$error_addr]; //@line 135 "testcapi_long.h"
        var $199=FUNCTION_TABLE[$198](((__str29)&4294967295)); //@line 135 "testcapi_long.h"
        HEAP[$0]=$199; //@line 135 "testcapi_long.h"
        __label__ = 82; break; //@line 135 "testcapi_long.h"
      case 53: // $bb54
        var $200=HEAP[$y]; //@line 138 "testcapi_long.h"
        var $201=_PyLong_AsLong($200); //@line 138 "testcapi_long.h"
        HEAP[$out27]=$201; //@line 138 "testcapi_long.h"
        var $202=HEAP[$out27]; //@line 139 "testcapi_long.h"
        var $203=((($202))|0)!=-1; //@line 139 "testcapi_long.h"
        if ($203) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 139 "testcapi_long.h"
      case 54: // $bb55
        var $204=_PyErr_Occurred(); //@line 139 "testcapi_long.h"
        var $205=($204)==0; //@line 139 "testcapi_long.h"
        if ($205) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 139 "testcapi_long.h"
      case 55: // $bb56
        var $206=HEAP[$error_addr]; //@line 140 "testcapi_long.h"
        var $207=FUNCTION_TABLE[$206](((__str30)&4294967295)); //@line 140 "testcapi_long.h"
        HEAP[$0]=$207; //@line 140 "testcapi_long.h"
        __label__ = 82; break; //@line 140 "testcapi_long.h"
      case 56: // $bb57
        var $208=HEAP[_PyExc_OverflowError]; //@line 143 "testcapi_long.h"
        var $209=_PyErr_ExceptionMatches($208); //@line 143 "testcapi_long.h"
        var $210=((($209))|0)==0; //@line 143 "testcapi_long.h"
        if ($210) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 143 "testcapi_long.h"
      case 57: // $bb58
        var $211=HEAP[$error_addr]; //@line 144 "testcapi_long.h"
        var $212=FUNCTION_TABLE[$211](((__str31)&4294967295)); //@line 144 "testcapi_long.h"
        HEAP[$0]=$212; //@line 144 "testcapi_long.h"
        __label__ = 82; break; //@line 144 "testcapi_long.h"
      case 58: // $bb59
        _PyErr_Clear(); //@line 147 "testcapi_long.h"
        var $213=HEAP[$y]; //@line 151 "testcapi_long.h"
        var $214=_PyNumber_Negative($213); //@line 151 "testcapi_long.h"
        HEAP[$x]=$214; //@line 151 "testcapi_long.h"
        var $215=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $216=(($215)&4294967295); //@line 152 "testcapi_long.h"
        var $217=HEAP[$216]; //@line 152 "testcapi_long.h"
        var $218=((($217) - 1)&4294967295); //@line 152 "testcapi_long.h"
        var $219=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $220=(($219)&4294967295); //@line 152 "testcapi_long.h"
        HEAP[$220]=$218; //@line 152 "testcapi_long.h"
        var $221=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $222=(($221)&4294967295); //@line 152 "testcapi_long.h"
        var $223=HEAP[$222]; //@line 152 "testcapi_long.h"
        var $224=((($223))|0)==0; //@line 152 "testcapi_long.h"
        if ($224) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 152 "testcapi_long.h"
      case 59: // $bb60
        var $225=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $226=(($225+4)&4294967295); //@line 152 "testcapi_long.h"
        var $227=HEAP[$226]; //@line 152 "testcapi_long.h"
        var $228=(($227+24)&4294967295); //@line 152 "testcapi_long.h"
        var $229=HEAP[$228]; //@line 152 "testcapi_long.h"
        var $230=HEAP[$y]; //@line 152 "testcapi_long.h"
        FUNCTION_TABLE[$229]($230); //@line 152 "testcapi_long.h"
        __label__ = 60; break; //@line 152 "testcapi_long.h"
      case 60: // $bb61
        HEAP[$y]=0; //@line 152 "testcapi_long.h"
        var $231=HEAP[$x]; //@line 153 "testcapi_long.h"
        var $232=($231)==0; //@line 153 "testcapi_long.h"
        if ($232) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 153 "testcapi_long.h"
      case 61: // $bb62
        var $233=HEAP[$error_addr]; //@line 154 "testcapi_long.h"
        var $234=FUNCTION_TABLE[$233](((__str23)&4294967295)); //@line 154 "testcapi_long.h"
        HEAP[$0]=$234; //@line 154 "testcapi_long.h"
        __label__ = 82; break; //@line 154 "testcapi_long.h"
      case 62: // $bb63
        var $235=HEAP[$x]; //@line 157 "testcapi_long.h"
        var $236=HEAP[$one]; //@line 157 "testcapi_long.h"
        var $237=_PyNumber_Subtract($235, $236); //@line 157 "testcapi_long.h"
        HEAP[$y]=$237; //@line 157 "testcapi_long.h"
        var $238=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $239=(($238)&4294967295); //@line 158 "testcapi_long.h"
        var $240=HEAP[$239]; //@line 158 "testcapi_long.h"
        var $241=((($240) - 1)&4294967295); //@line 158 "testcapi_long.h"
        var $242=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $243=(($242)&4294967295); //@line 158 "testcapi_long.h"
        HEAP[$243]=$241; //@line 158 "testcapi_long.h"
        var $244=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $245=(($244)&4294967295); //@line 158 "testcapi_long.h"
        var $246=HEAP[$245]; //@line 158 "testcapi_long.h"
        var $247=((($246))|0)==0; //@line 158 "testcapi_long.h"
        if ($247) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 158 "testcapi_long.h"
      case 63: // $bb64
        var $248=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $249=(($248+4)&4294967295); //@line 158 "testcapi_long.h"
        var $250=HEAP[$249]; //@line 158 "testcapi_long.h"
        var $251=(($250+24)&4294967295); //@line 158 "testcapi_long.h"
        var $252=HEAP[$251]; //@line 158 "testcapi_long.h"
        var $253=HEAP[$x]; //@line 158 "testcapi_long.h"
        FUNCTION_TABLE[$252]($253); //@line 158 "testcapi_long.h"
        __label__ = 64; break; //@line 158 "testcapi_long.h"
      case 64: // $bb65
        HEAP[$x]=0; //@line 158 "testcapi_long.h"
        var $254=HEAP[$y]; //@line 159 "testcapi_long.h"
        var $255=($254)==0; //@line 159 "testcapi_long.h"
        if ($255) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 159 "testcapi_long.h"
      case 65: // $bb66
        var $256=HEAP[$error_addr]; //@line 160 "testcapi_long.h"
        var $257=FUNCTION_TABLE[$256](((__str32)&4294967295)); //@line 160 "testcapi_long.h"
        HEAP[$0]=$257; //@line 160 "testcapi_long.h"
        __label__ = 82; break; //@line 160 "testcapi_long.h"
      case 66: // $bb67
        var $258=HEAP[$y]; //@line 163 "testcapi_long.h"
        var $259=_PyLong_AsLong($258); //@line 163 "testcapi_long.h"
        HEAP[$out27]=$259; //@line 163 "testcapi_long.h"
        var $260=HEAP[$out27]; //@line 164 "testcapi_long.h"
        var $261=((($260))|0)!=-1; //@line 164 "testcapi_long.h"
        if ($261) { __label__ = 68; break; } else { __label__ = 67; break; } //@line 164 "testcapi_long.h"
      case 67: // $bb68
        var $262=_PyErr_Occurred(); //@line 164 "testcapi_long.h"
        var $263=($262)==0; //@line 164 "testcapi_long.h"
        if ($263) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 164 "testcapi_long.h"
      case 68: // $bb69
        var $264=HEAP[$error_addr]; //@line 165 "testcapi_long.h"
        var $265=FUNCTION_TABLE[$264](((__str33)&4294967295)); //@line 165 "testcapi_long.h"
        HEAP[$0]=$265; //@line 165 "testcapi_long.h"
        __label__ = 82; break; //@line 165 "testcapi_long.h"
      case 69: // $bb70
        var $266=HEAP[_PyExc_OverflowError]; //@line 168 "testcapi_long.h"
        var $267=_PyErr_ExceptionMatches($266); //@line 168 "testcapi_long.h"
        var $268=((($267))|0)==0; //@line 168 "testcapi_long.h"
        if ($268) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 168 "testcapi_long.h"
      case 70: // $bb71
        var $269=HEAP[$error_addr]; //@line 169 "testcapi_long.h"
        var $270=FUNCTION_TABLE[$269](((__str34)&4294967295)); //@line 169 "testcapi_long.h"
        HEAP[$0]=$270; //@line 169 "testcapi_long.h"
        __label__ = 82; break; //@line 169 "testcapi_long.h"
      case 71: // $bb72
        _PyErr_Clear(); //@line 172 "testcapi_long.h"
        var $271=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $272=(($271)&4294967295); //@line 173 "testcapi_long.h"
        var $273=HEAP[$272]; //@line 173 "testcapi_long.h"
        var $274=((($273) - 1)&4294967295); //@line 173 "testcapi_long.h"
        var $275=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $276=(($275)&4294967295); //@line 173 "testcapi_long.h"
        HEAP[$276]=$274; //@line 173 "testcapi_long.h"
        var $277=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $278=(($277)&4294967295); //@line 173 "testcapi_long.h"
        var $279=HEAP[$278]; //@line 173 "testcapi_long.h"
        var $280=((($279))|0)==0; //@line 173 "testcapi_long.h"
        if ($280) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 173 "testcapi_long.h"
      case 72: // $bb73
        var $281=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $282=(($281+4)&4294967295); //@line 173 "testcapi_long.h"
        var $283=HEAP[$282]; //@line 173 "testcapi_long.h"
        var $284=(($283+24)&4294967295); //@line 173 "testcapi_long.h"
        var $285=HEAP[$284]; //@line 173 "testcapi_long.h"
        var $286=HEAP[$y]; //@line 173 "testcapi_long.h"
        FUNCTION_TABLE[$285]($286); //@line 173 "testcapi_long.h"
        __label__ = 73; break; //@line 173 "testcapi_long.h"
      case 73: // $bb74
        HEAP[$y]=0; //@line 173 "testcapi_long.h"
        var $287=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $288=($287)!=0; //@line 175 "testcapi_long.h"
        if ($288) { __label__ = 74; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 74: // $bb75
        var $289=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $290=(($289)&4294967295); //@line 175 "testcapi_long.h"
        var $291=HEAP[$290]; //@line 175 "testcapi_long.h"
        var $292=((($291) - 1)&4294967295); //@line 175 "testcapi_long.h"
        var $293=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $294=(($293)&4294967295); //@line 175 "testcapi_long.h"
        HEAP[$294]=$292; //@line 175 "testcapi_long.h"
        var $295=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $296=(($295)&4294967295); //@line 175 "testcapi_long.h"
        var $297=HEAP[$296]; //@line 175 "testcapi_long.h"
        var $298=((($297))|0)==0; //@line 175 "testcapi_long.h"
        if ($298) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 75: // $bb76
        var $299=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $300=(($299+4)&4294967295); //@line 175 "testcapi_long.h"
        var $301=HEAP[$300]; //@line 175 "testcapi_long.h"
        var $302=(($301+24)&4294967295); //@line 175 "testcapi_long.h"
        var $303=HEAP[$302]; //@line 175 "testcapi_long.h"
        var $304=HEAP[$x]; //@line 175 "testcapi_long.h"
        FUNCTION_TABLE[$303]($304); //@line 175 "testcapi_long.h"
        __label__ = 76; break; //@line 175 "testcapi_long.h"
      case 76: // $bb77
        var $305=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $306=($305)!=0; //@line 176 "testcapi_long.h"
        if ($306) { __label__ = 77; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 77: // $bb78
        var $307=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $308=(($307)&4294967295); //@line 176 "testcapi_long.h"
        var $309=HEAP[$308]; //@line 176 "testcapi_long.h"
        var $310=((($309) - 1)&4294967295); //@line 176 "testcapi_long.h"
        var $311=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $312=(($311)&4294967295); //@line 176 "testcapi_long.h"
        HEAP[$312]=$310; //@line 176 "testcapi_long.h"
        var $313=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $314=(($313)&4294967295); //@line 176 "testcapi_long.h"
        var $315=HEAP[$314]; //@line 176 "testcapi_long.h"
        var $316=((($315))|0)==0; //@line 176 "testcapi_long.h"
        if ($316) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 78: // $bb79
        var $317=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $318=(($317+4)&4294967295); //@line 176 "testcapi_long.h"
        var $319=HEAP[$318]; //@line 176 "testcapi_long.h"
        var $320=(($319+24)&4294967295); //@line 176 "testcapi_long.h"
        var $321=HEAP[$320]; //@line 176 "testcapi_long.h"
        var $322=HEAP[$y]; //@line 176 "testcapi_long.h"
        FUNCTION_TABLE[$321]($322); //@line 176 "testcapi_long.h"
        __label__ = 79; break; //@line 176 "testcapi_long.h"
      case 79: // $bb80
        var $323=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $324=(($323)&4294967295); //@line 177 "testcapi_long.h"
        var $325=HEAP[$324]; //@line 177 "testcapi_long.h"
        var $326=((($325) - 1)&4294967295); //@line 177 "testcapi_long.h"
        var $327=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $328=(($327)&4294967295); //@line 177 "testcapi_long.h"
        HEAP[$328]=$326; //@line 177 "testcapi_long.h"
        var $329=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $330=(($329)&4294967295); //@line 177 "testcapi_long.h"
        var $331=HEAP[$330]; //@line 177 "testcapi_long.h"
        var $332=((($331))|0)==0; //@line 177 "testcapi_long.h"
        if ($332) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 177 "testcapi_long.h"
      case 80: // $bb81
        var $333=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $334=(($333+4)&4294967295); //@line 177 "testcapi_long.h"
        var $335=HEAP[$334]; //@line 177 "testcapi_long.h"
        var $336=(($335+24)&4294967295); //@line 177 "testcapi_long.h"
        var $337=HEAP[$336]; //@line 177 "testcapi_long.h"
        var $338=HEAP[$one]; //@line 177 "testcapi_long.h"
        FUNCTION_TABLE[$337]($338); //@line 177 "testcapi_long.h"
        __label__ = 81; break; //@line 177 "testcapi_long.h"
      case 81: // $bb82
        var $339=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 180 "testcapi_long.h"
        var $340=((($339) + 1)&4294967295); //@line 180 "testcapi_long.h"
        HEAP[((__Py_NoneStruct)&4294967295)]=$340; //@line 180 "testcapi_long.h"
        HEAP[$0]=__Py_NoneStruct; //@line 181 "testcapi_long.h"
        __label__ = 82; break; //@line 181 "testcapi_long.h"
      case 82: // $bb83
        var $341=HEAP[$0]; //@line 47 "testcapi_long.h"
        HEAP[$retval]=$341; //@line 47 "testcapi_long.h"
        __label__ = 83; break; //@line 47 "testcapi_long.h"
      case 83: // $return
        var $retval84=HEAP[$retval]; //@line 47 "testcapi_long.h"
        STACKTOP = __stackBase__;
        return $retval84; //@line 47 "testcapi_long.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_api($self) {
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
        var $1=_test_long_api_inner((FUNCTION_TABLE_OFFSET + 2)); //@line 415 "_testcapimodule.c"
        HEAP[$0]=$1; //@line 415 "_testcapimodule.c"
        var $2=HEAP[$0]; //@line 415 "_testcapimodule.c"
        HEAP[$retval]=$2; //@line 415 "_testcapimodule.c"
        __label__ = 1; break; //@line 415 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 415 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 415 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_test_longlong_error($msg) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $msg_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$msg_addr]=$msg;
        var $1=HEAP[$msg_addr]; //@line 430 "_testcapimodule.c"
        var $2=_raiseTestError(((__str35)&4294967295), $1); //@line 430 "_testcapimodule.c"
        HEAP[$0]=$2; //@line 430 "_testcapimodule.c"
        var $3=HEAP[$0]; //@line 430 "_testcapimodule.c"
        HEAP[$retval]=$3; //@line 430 "_testcapimodule.c"
        __label__ = 1; break; //@line 430 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 430 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 430 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_longlong_api_inner($error) {
    var __stackBase__  = STACKTOP; STACKTOP += 104; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $error_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $iftmp_30=__stackBase__+12;
        var $NBITS=__stackBase__+20;
        var $base=__stackBase__+24;
        var $pyresult=__stackBase__+32;
        var $i=__stackBase__+36;
        var $j=__stackBase__+40;
        var $in=__stackBase__+44;
        var $out=__stackBase__+52;
        var $uin=__stackBase__+60;
        var $uout=__stackBase__+68;
        var $one=__stackBase__+76;
        var $x=__stackBase__+80;
        var $y=__stackBase__+84;
        var $out27=__stackBase__+88;
        var $uout28=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$error_addr]=$error;
        HEAP[$NBITS]=64; //@line 13 "testcapi_long.h"
        HEAP[$base]=1; //@line 25 "testcapi_long.h"
        HEAP[$i]=0; //@line 26 "testcapi_long.h"
        __label__ = 26; break; //@line 26 "testcapi_long.h"
      case 1: // $bb
        HEAP[$j]=0; //@line 31 "testcapi_long.h"
        __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 2: // $bb1
        var $1=HEAP[$j]; //@line 36 "testcapi_long.h"
        var $2=((($1))|0) > 2; //@line 36 "testcapi_long.h"
        if ($2) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 36 "testcapi_long.h"
      case 3: // $bb2
        var $3=HEAP[$base]; //@line 36 "testcapi_long.h"
        var $4=0 - ($3); //@line 36 "testcapi_long.h"
        HEAP[$iftmp_30]=$4; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 4: // $bb3
        var $5=HEAP[$base]; //@line 36 "testcapi_long.h"
        HEAP[$iftmp_30]=$5; //@line 36 "testcapi_long.h"
        __label__ = 5; break; //@line 36 "testcapi_long.h"
      case 5: // $bb4
        var $6=HEAP[$iftmp_30]; //@line 36 "testcapi_long.h"
        HEAP[$uin]=$6; //@line 36 "testcapi_long.h"
        var $7=HEAP[$j]; //@line 43 "testcapi_long.h"
        var $8=((($7))|0) % 3; //@line 43 "testcapi_long.h"
        var $9=((($8) - 1)&4294967295); //@line 43 "testcapi_long.h"
        var $10=((($9))|0); //@line 43 "testcapi_long.h"
        var $11=HEAP[$uin]; //@line 43 "testcapi_long.h"
        var $12=($10) + ($11); //@line 43 "testcapi_long.h"
        HEAP[$uin]=$12; //@line 43 "testcapi_long.h"
        var $13=HEAP[$uin]; //@line 45 "testcapi_long.h"
        var $14=_PyLong_FromUnsignedLongLong($13); //@line 45 "testcapi_long.h"
        HEAP[$pyresult]=$14; //@line 45 "testcapi_long.h"
        var $15=HEAP[$pyresult]; //@line 46 "testcapi_long.h"
        var $16=($15)==0; //@line 46 "testcapi_long.h"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 46 "testcapi_long.h"
      case 6: // $bb5
        var $17=HEAP[$error_addr]; //@line 47 "testcapi_long.h"
        var $18=FUNCTION_TABLE[$17](((__str16)&4294967295)); //@line 47 "testcapi_long.h"
        HEAP[$0]=$18; //@line 47 "testcapi_long.h"
        __label__ = 82; break; //@line 47 "testcapi_long.h"
      case 7: // $bb6
        var $19=HEAP[$pyresult]; //@line 50 "testcapi_long.h"
        var $20=_PyLong_AsUnsignedLongLong($19); //@line 50 "testcapi_long.h"
        HEAP[$uout]=$20; //@line 50 "testcapi_long.h"
        var $21=HEAP[$uout]; //@line 51 "testcapi_long.h"
        var $22=reSign(($21), 64, 0)==-1; //@line 51 "testcapi_long.h"
        if ($22) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 8: // $bb7
        var $23=_PyErr_Occurred(); //@line 51 "testcapi_long.h"
        var $24=($23)!=0; //@line 51 "testcapi_long.h"
        if ($24) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 51 "testcapi_long.h"
      case 9: // $bb8
        var $25=HEAP[$error_addr]; //@line 52 "testcapi_long.h"
        var $26=FUNCTION_TABLE[$25](((__str17)&4294967295)); //@line 52 "testcapi_long.h"
        HEAP[$0]=$26; //@line 52 "testcapi_long.h"
        __label__ = 82; break; //@line 52 "testcapi_long.h"
      case 10: // $bb9
        var $27=HEAP[$uout]; //@line 54 "testcapi_long.h"
        var $28=HEAP[$uin]; //@line 54 "testcapi_long.h"
        var $29=reSign(($27), 64, 0)!=reSign(($28), 64, 0); //@line 54 "testcapi_long.h"
        if ($29) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 54 "testcapi_long.h"
      case 11: // $bb10
        var $30=HEAP[$error_addr]; //@line 55 "testcapi_long.h"
        var $31=FUNCTION_TABLE[$30](((__str18)&4294967295)); //@line 55 "testcapi_long.h"
        HEAP[$0]=$31; //@line 55 "testcapi_long.h"
        __label__ = 82; break; //@line 55 "testcapi_long.h"
      case 12: // $bb11
        var $32=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $33=(($32)&4294967295); //@line 57 "testcapi_long.h"
        var $34=HEAP[$33]; //@line 57 "testcapi_long.h"
        var $35=((($34) - 1)&4294967295); //@line 57 "testcapi_long.h"
        var $36=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $37=(($36)&4294967295); //@line 57 "testcapi_long.h"
        HEAP[$37]=$35; //@line 57 "testcapi_long.h"
        var $38=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $39=(($38)&4294967295); //@line 57 "testcapi_long.h"
        var $40=HEAP[$39]; //@line 57 "testcapi_long.h"
        var $41=((($40))|0)==0; //@line 57 "testcapi_long.h"
        if ($41) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 57 "testcapi_long.h"
      case 13: // $bb12
        var $42=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        var $43=(($42+4)&4294967295); //@line 57 "testcapi_long.h"
        var $44=HEAP[$43]; //@line 57 "testcapi_long.h"
        var $45=(($44+24)&4294967295); //@line 57 "testcapi_long.h"
        var $46=HEAP[$45]; //@line 57 "testcapi_long.h"
        var $47=HEAP[$pyresult]; //@line 57 "testcapi_long.h"
        FUNCTION_TABLE[$46]($47); //@line 57 "testcapi_long.h"
        __label__ = 14; break; //@line 57 "testcapi_long.h"
      case 14: // $bb13
        HEAP[$pyresult]=0; //@line 57 "testcapi_long.h"
        var $48=HEAP[$uin]; //@line 59 "testcapi_long.h"
        HEAP[$in]=$48; //@line 59 "testcapi_long.h"
        var $49=HEAP[$in]; //@line 60 "testcapi_long.h"
        var $50=_PyLong_FromLongLong($49); //@line 60 "testcapi_long.h"
        HEAP[$pyresult]=$50; //@line 60 "testcapi_long.h"
        var $51=HEAP[$pyresult]; //@line 61 "testcapi_long.h"
        var $52=($51)==0; //@line 61 "testcapi_long.h"
        if ($52) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 61 "testcapi_long.h"
      case 15: // $bb14
        var $53=HEAP[$error_addr]; //@line 62 "testcapi_long.h"
        var $54=FUNCTION_TABLE[$53](((__str19)&4294967295)); //@line 62 "testcapi_long.h"
        HEAP[$0]=$54; //@line 62 "testcapi_long.h"
        __label__ = 82; break; //@line 62 "testcapi_long.h"
      case 16: // $bb15
        var $55=HEAP[$pyresult]; //@line 65 "testcapi_long.h"
        var $56=_PyLong_AsLongLong($55); //@line 65 "testcapi_long.h"
        HEAP[$out]=$56; //@line 65 "testcapi_long.h"
        var $57=HEAP[$out]; //@line 66 "testcapi_long.h"
        var $58=reSign(($57), 64, 0)==-1; //@line 66 "testcapi_long.h"
        if ($58) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 17: // $bb16
        var $59=_PyErr_Occurred(); //@line 66 "testcapi_long.h"
        var $60=($59)!=0; //@line 66 "testcapi_long.h"
        if ($60) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 66 "testcapi_long.h"
      case 18: // $bb17
        var $61=HEAP[$error_addr]; //@line 67 "testcapi_long.h"
        var $62=FUNCTION_TABLE[$61](((__str20)&4294967295)); //@line 67 "testcapi_long.h"
        HEAP[$0]=$62; //@line 67 "testcapi_long.h"
        __label__ = 82; break; //@line 67 "testcapi_long.h"
      case 19: // $bb18
        var $63=HEAP[$out]; //@line 69 "testcapi_long.h"
        var $64=HEAP[$in]; //@line 69 "testcapi_long.h"
        var $65=reSign(($63), 64, 0)!=reSign(($64), 64, 0); //@line 69 "testcapi_long.h"
        if ($65) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 69 "testcapi_long.h"
      case 20: // $bb19
        var $66=HEAP[$error_addr]; //@line 70 "testcapi_long.h"
        var $67=FUNCTION_TABLE[$66](((__str21)&4294967295)); //@line 70 "testcapi_long.h"
        HEAP[$0]=$67; //@line 70 "testcapi_long.h"
        __label__ = 82; break; //@line 70 "testcapi_long.h"
      case 21: // $bb20
        var $68=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $69=(($68)&4294967295); //@line 72 "testcapi_long.h"
        var $70=HEAP[$69]; //@line 72 "testcapi_long.h"
        var $71=((($70) - 1)&4294967295); //@line 72 "testcapi_long.h"
        var $72=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $73=(($72)&4294967295); //@line 72 "testcapi_long.h"
        HEAP[$73]=$71; //@line 72 "testcapi_long.h"
        var $74=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $75=(($74)&4294967295); //@line 72 "testcapi_long.h"
        var $76=HEAP[$75]; //@line 72 "testcapi_long.h"
        var $77=((($76))|0)==0; //@line 72 "testcapi_long.h"
        if ($77) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 72 "testcapi_long.h"
      case 22: // $bb21
        var $78=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        var $79=(($78+4)&4294967295); //@line 72 "testcapi_long.h"
        var $80=HEAP[$79]; //@line 72 "testcapi_long.h"
        var $81=(($80+24)&4294967295); //@line 72 "testcapi_long.h"
        var $82=HEAP[$81]; //@line 72 "testcapi_long.h"
        var $83=HEAP[$pyresult]; //@line 72 "testcapi_long.h"
        FUNCTION_TABLE[$82]($83); //@line 72 "testcapi_long.h"
        __label__ = 23; break; //@line 72 "testcapi_long.h"
      case 23: // $bb22
        HEAP[$pyresult]=0; //@line 72 "testcapi_long.h"
        var $84=HEAP[$j]; //@line 31 "testcapi_long.h"
        var $85=((($84) + 1)&4294967295); //@line 31 "testcapi_long.h"
        HEAP[$j]=$85; //@line 31 "testcapi_long.h"
        __label__ = 24; break; //@line 31 "testcapi_long.h"
      case 24: // $bb23
        var $86=HEAP[$j]; //@line 31 "testcapi_long.h"
        var $87=((($86))|0) <= 5; //@line 31 "testcapi_long.h"
        if ($87) { __label__ = 2; break; } else { __label__ = 25; break; } //@line 31 "testcapi_long.h"
      case 25: // $bb24
        var $88=HEAP[$i]; //@line 28 "testcapi_long.h"
        var $89=((($88) + 1)&4294967295); //@line 28 "testcapi_long.h"
        HEAP[$i]=$89; //@line 28 "testcapi_long.h"
        var $90=HEAP[$base]; //@line 28 "testcapi_long.h"
        var $91=($90)*Math.pow(2,1); //@line 28 "testcapi_long.h"
        HEAP[$base]=$91; //@line 28 "testcapi_long.h"
        __label__ = 26; break; //@line 28 "testcapi_long.h"
      case 26: // $bb25
        var $92=HEAP[$NBITS]; //@line 27 "testcapi_long.h"
        var $93=((($92) + 1)&4294967295); //@line 27 "testcapi_long.h"
        var $94=HEAP[$i]; //@line 27 "testcapi_long.h"
        var $95=((($93))|0) > ((($94))|0); //@line 27 "testcapi_long.h"
        if ($95) { __label__ = 1; break; } else { __label__ = 27; break; } //@line 27 "testcapi_long.h"
      case 27: // $bb26
        var $96=_PyLong_FromLong(1); //@line 85 "testcapi_long.h"
        HEAP[$one]=$96; //@line 85 "testcapi_long.h"
        var $97=HEAP[$one]; //@line 86 "testcapi_long.h"
        var $98=($97)==0; //@line 86 "testcapi_long.h"
        if ($98) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 86 "testcapi_long.h"
      case 28: // $bb29
        var $99=HEAP[$error_addr]; //@line 87 "testcapi_long.h"
        var $100=FUNCTION_TABLE[$99](((__str22)&4294967295)); //@line 87 "testcapi_long.h"
        HEAP[$0]=$100; //@line 87 "testcapi_long.h"
        __label__ = 82; break; //@line 87 "testcapi_long.h"
      case 29: // $bb30
        var $101=HEAP[$one]; //@line 91 "testcapi_long.h"
        var $102=_PyNumber_Negative($101); //@line 91 "testcapi_long.h"
        HEAP[$x]=$102; //@line 91 "testcapi_long.h"
        var $103=HEAP[$x]; //@line 92 "testcapi_long.h"
        var $104=($103)==0; //@line 92 "testcapi_long.h"
        if ($104) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 92 "testcapi_long.h"
      case 30: // $bb31
        var $105=HEAP[$error_addr]; //@line 93 "testcapi_long.h"
        var $106=FUNCTION_TABLE[$105](((__str23)&4294967295)); //@line 93 "testcapi_long.h"
        HEAP[$0]=$106; //@line 93 "testcapi_long.h"
        __label__ = 82; break; //@line 93 "testcapi_long.h"
      case 31: // $bb32
        var $107=HEAP[$x]; //@line 96 "testcapi_long.h"
        var $108=_PyLong_AsUnsignedLongLong($107); //@line 96 "testcapi_long.h"
        HEAP[$uout28]=$108; //@line 96 "testcapi_long.h"
        var $109=HEAP[$uout28]; //@line 97 "testcapi_long.h"
        var $110=reSign(($109), 64, 0)!=-1; //@line 97 "testcapi_long.h"
        if ($110) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 97 "testcapi_long.h"
      case 32: // $bb33
        var $111=_PyErr_Occurred(); //@line 97 "testcapi_long.h"
        var $112=($111)==0; //@line 97 "testcapi_long.h"
        if ($112) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 97 "testcapi_long.h"
      case 33: // $bb34
        var $113=HEAP[$error_addr]; //@line 98 "testcapi_long.h"
        var $114=FUNCTION_TABLE[$113](((__str24)&4294967295)); //@line 98 "testcapi_long.h"
        HEAP[$0]=$114; //@line 98 "testcapi_long.h"
        __label__ = 82; break; //@line 98 "testcapi_long.h"
      case 34: // $bb35
        var $115=HEAP[_PyExc_OverflowError]; //@line 100 "testcapi_long.h"
        var $116=_PyErr_ExceptionMatches($115); //@line 100 "testcapi_long.h"
        var $117=((($116))|0)==0; //@line 100 "testcapi_long.h"
        if ($117) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 100 "testcapi_long.h"
      case 35: // $bb36
        var $118=HEAP[$error_addr]; //@line 101 "testcapi_long.h"
        var $119=FUNCTION_TABLE[$118](((__str25)&4294967295)); //@line 101 "testcapi_long.h"
        HEAP[$0]=$119; //@line 101 "testcapi_long.h"
        __label__ = 82; break; //@line 101 "testcapi_long.h"
      case 36: // $bb37
        _PyErr_Clear(); //@line 104 "testcapi_long.h"
        var $120=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $121=(($120)&4294967295); //@line 105 "testcapi_long.h"
        var $122=HEAP[$121]; //@line 105 "testcapi_long.h"
        var $123=((($122) - 1)&4294967295); //@line 105 "testcapi_long.h"
        var $124=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $125=(($124)&4294967295); //@line 105 "testcapi_long.h"
        HEAP[$125]=$123; //@line 105 "testcapi_long.h"
        var $126=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $127=(($126)&4294967295); //@line 105 "testcapi_long.h"
        var $128=HEAP[$127]; //@line 105 "testcapi_long.h"
        var $129=((($128))|0)==0; //@line 105 "testcapi_long.h"
        if ($129) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 105 "testcapi_long.h"
      case 37: // $bb38
        var $130=HEAP[$x]; //@line 105 "testcapi_long.h"
        var $131=(($130+4)&4294967295); //@line 105 "testcapi_long.h"
        var $132=HEAP[$131]; //@line 105 "testcapi_long.h"
        var $133=(($132+24)&4294967295); //@line 105 "testcapi_long.h"
        var $134=HEAP[$133]; //@line 105 "testcapi_long.h"
        var $135=HEAP[$x]; //@line 105 "testcapi_long.h"
        FUNCTION_TABLE[$134]($135); //@line 105 "testcapi_long.h"
        __label__ = 38; break; //@line 105 "testcapi_long.h"
      case 38: // $bb39
        HEAP[$x]=0; //@line 105 "testcapi_long.h"
        var $136=HEAP[$NBITS]; //@line 108 "testcapi_long.h"
        var $137=_PyLong_FromLong($136); //@line 108 "testcapi_long.h"
        HEAP[$y]=$137; //@line 108 "testcapi_long.h"
        var $138=HEAP[$y]; //@line 109 "testcapi_long.h"
        var $139=($138)==0; //@line 109 "testcapi_long.h"
        if ($139) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 109 "testcapi_long.h"
      case 39: // $bb40
        var $140=HEAP[$error_addr]; //@line 110 "testcapi_long.h"
        var $141=FUNCTION_TABLE[$140](((__str22)&4294967295)); //@line 110 "testcapi_long.h"
        HEAP[$0]=$141; //@line 110 "testcapi_long.h"
        __label__ = 82; break; //@line 110 "testcapi_long.h"
      case 40: // $bb41
        var $142=HEAP[$one]; //@line 113 "testcapi_long.h"
        var $143=HEAP[$y]; //@line 113 "testcapi_long.h"
        var $144=_PyNumber_Lshift($142, $143); //@line 113 "testcapi_long.h"
        HEAP[$x]=$144; //@line 113 "testcapi_long.h"
        var $145=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $146=(($145)&4294967295); //@line 114 "testcapi_long.h"
        var $147=HEAP[$146]; //@line 114 "testcapi_long.h"
        var $148=((($147) - 1)&4294967295); //@line 114 "testcapi_long.h"
        var $149=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $150=(($149)&4294967295); //@line 114 "testcapi_long.h"
        HEAP[$150]=$148; //@line 114 "testcapi_long.h"
        var $151=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $152=(($151)&4294967295); //@line 114 "testcapi_long.h"
        var $153=HEAP[$152]; //@line 114 "testcapi_long.h"
        var $154=((($153))|0)==0; //@line 114 "testcapi_long.h"
        if ($154) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 114 "testcapi_long.h"
      case 41: // $bb42
        var $155=HEAP[$y]; //@line 114 "testcapi_long.h"
        var $156=(($155+4)&4294967295); //@line 114 "testcapi_long.h"
        var $157=HEAP[$156]; //@line 114 "testcapi_long.h"
        var $158=(($157+24)&4294967295); //@line 114 "testcapi_long.h"
        var $159=HEAP[$158]; //@line 114 "testcapi_long.h"
        var $160=HEAP[$y]; //@line 114 "testcapi_long.h"
        FUNCTION_TABLE[$159]($160); //@line 114 "testcapi_long.h"
        __label__ = 42; break; //@line 114 "testcapi_long.h"
      case 42: // $bb43
        HEAP[$y]=0; //@line 114 "testcapi_long.h"
        var $161=HEAP[$x]; //@line 115 "testcapi_long.h"
        var $162=($161)==0; //@line 115 "testcapi_long.h"
        if ($162) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 115 "testcapi_long.h"
      case 43: // $bb44
        var $163=HEAP[$error_addr]; //@line 116 "testcapi_long.h"
        var $164=FUNCTION_TABLE[$163](((__str26)&4294967295)); //@line 116 "testcapi_long.h"
        HEAP[$0]=$164; //@line 116 "testcapi_long.h"
        __label__ = 82; break; //@line 116 "testcapi_long.h"
      case 44: // $bb45
        var $165=HEAP[$x]; //@line 119 "testcapi_long.h"
        var $166=_PyLong_AsUnsignedLongLong($165); //@line 119 "testcapi_long.h"
        HEAP[$uout28]=$166; //@line 119 "testcapi_long.h"
        var $167=HEAP[$uout28]; //@line 120 "testcapi_long.h"
        var $168=reSign(($167), 64, 0)!=-1; //@line 120 "testcapi_long.h"
        if ($168) { __label__ = 46; break; } else { __label__ = 45; break; } //@line 120 "testcapi_long.h"
      case 45: // $bb46
        var $169=_PyErr_Occurred(); //@line 120 "testcapi_long.h"
        var $170=($169)==0; //@line 120 "testcapi_long.h"
        if ($170) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 120 "testcapi_long.h"
      case 46: // $bb47
        var $171=HEAP[$error_addr]; //@line 121 "testcapi_long.h"
        var $172=FUNCTION_TABLE[$171](((__str27)&4294967295)); //@line 121 "testcapi_long.h"
        HEAP[$0]=$172; //@line 121 "testcapi_long.h"
        __label__ = 82; break; //@line 121 "testcapi_long.h"
      case 47: // $bb48
        var $173=HEAP[_PyExc_OverflowError]; //@line 124 "testcapi_long.h"
        var $174=_PyErr_ExceptionMatches($173); //@line 124 "testcapi_long.h"
        var $175=((($174))|0)==0; //@line 124 "testcapi_long.h"
        if ($175) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 124 "testcapi_long.h"
      case 48: // $bb49
        var $176=HEAP[$error_addr]; //@line 125 "testcapi_long.h"
        var $177=FUNCTION_TABLE[$176](((__str28)&4294967295)); //@line 125 "testcapi_long.h"
        HEAP[$0]=$177; //@line 125 "testcapi_long.h"
        __label__ = 82; break; //@line 125 "testcapi_long.h"
      case 49: // $bb50
        _PyErr_Clear(); //@line 128 "testcapi_long.h"
        var $178=HEAP[$x]; //@line 132 "testcapi_long.h"
        var $179=HEAP[$one]; //@line 132 "testcapi_long.h"
        var $180=_PyNumber_Rshift($178, $179); //@line 132 "testcapi_long.h"
        HEAP[$y]=$180; //@line 132 "testcapi_long.h"
        var $181=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $182=(($181)&4294967295); //@line 133 "testcapi_long.h"
        var $183=HEAP[$182]; //@line 133 "testcapi_long.h"
        var $184=((($183) - 1)&4294967295); //@line 133 "testcapi_long.h"
        var $185=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $186=(($185)&4294967295); //@line 133 "testcapi_long.h"
        HEAP[$186]=$184; //@line 133 "testcapi_long.h"
        var $187=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $188=(($187)&4294967295); //@line 133 "testcapi_long.h"
        var $189=HEAP[$188]; //@line 133 "testcapi_long.h"
        var $190=((($189))|0)==0; //@line 133 "testcapi_long.h"
        if ($190) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 133 "testcapi_long.h"
      case 50: // $bb51
        var $191=HEAP[$x]; //@line 133 "testcapi_long.h"
        var $192=(($191+4)&4294967295); //@line 133 "testcapi_long.h"
        var $193=HEAP[$192]; //@line 133 "testcapi_long.h"
        var $194=(($193+24)&4294967295); //@line 133 "testcapi_long.h"
        var $195=HEAP[$194]; //@line 133 "testcapi_long.h"
        var $196=HEAP[$x]; //@line 133 "testcapi_long.h"
        FUNCTION_TABLE[$195]($196); //@line 133 "testcapi_long.h"
        __label__ = 51; break; //@line 133 "testcapi_long.h"
      case 51: // $bb52
        HEAP[$x]=0; //@line 133 "testcapi_long.h"
        var $197=HEAP[$y]; //@line 134 "testcapi_long.h"
        var $198=($197)==0; //@line 134 "testcapi_long.h"
        if ($198) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 134 "testcapi_long.h"
      case 52: // $bb53
        var $199=HEAP[$error_addr]; //@line 135 "testcapi_long.h"
        var $200=FUNCTION_TABLE[$199](((__str29)&4294967295)); //@line 135 "testcapi_long.h"
        HEAP[$0]=$200; //@line 135 "testcapi_long.h"
        __label__ = 82; break; //@line 135 "testcapi_long.h"
      case 53: // $bb54
        var $201=HEAP[$y]; //@line 138 "testcapi_long.h"
        var $202=_PyLong_AsLongLong($201); //@line 138 "testcapi_long.h"
        HEAP[$out27]=$202; //@line 138 "testcapi_long.h"
        var $203=HEAP[$out27]; //@line 139 "testcapi_long.h"
        var $204=reSign(($203), 64, 0)!=-1; //@line 139 "testcapi_long.h"
        if ($204) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 139 "testcapi_long.h"
      case 54: // $bb55
        var $205=_PyErr_Occurred(); //@line 139 "testcapi_long.h"
        var $206=($205)==0; //@line 139 "testcapi_long.h"
        if ($206) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 139 "testcapi_long.h"
      case 55: // $bb56
        var $207=HEAP[$error_addr]; //@line 140 "testcapi_long.h"
        var $208=FUNCTION_TABLE[$207](((__str30)&4294967295)); //@line 140 "testcapi_long.h"
        HEAP[$0]=$208; //@line 140 "testcapi_long.h"
        __label__ = 82; break; //@line 140 "testcapi_long.h"
      case 56: // $bb57
        var $209=HEAP[_PyExc_OverflowError]; //@line 143 "testcapi_long.h"
        var $210=_PyErr_ExceptionMatches($209); //@line 143 "testcapi_long.h"
        var $211=((($210))|0)==0; //@line 143 "testcapi_long.h"
        if ($211) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 143 "testcapi_long.h"
      case 57: // $bb58
        var $212=HEAP[$error_addr]; //@line 144 "testcapi_long.h"
        var $213=FUNCTION_TABLE[$212](((__str31)&4294967295)); //@line 144 "testcapi_long.h"
        HEAP[$0]=$213; //@line 144 "testcapi_long.h"
        __label__ = 82; break; //@line 144 "testcapi_long.h"
      case 58: // $bb59
        _PyErr_Clear(); //@line 147 "testcapi_long.h"
        var $214=HEAP[$y]; //@line 151 "testcapi_long.h"
        var $215=_PyNumber_Negative($214); //@line 151 "testcapi_long.h"
        HEAP[$x]=$215; //@line 151 "testcapi_long.h"
        var $216=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $217=(($216)&4294967295); //@line 152 "testcapi_long.h"
        var $218=HEAP[$217]; //@line 152 "testcapi_long.h"
        var $219=((($218) - 1)&4294967295); //@line 152 "testcapi_long.h"
        var $220=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $221=(($220)&4294967295); //@line 152 "testcapi_long.h"
        HEAP[$221]=$219; //@line 152 "testcapi_long.h"
        var $222=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $223=(($222)&4294967295); //@line 152 "testcapi_long.h"
        var $224=HEAP[$223]; //@line 152 "testcapi_long.h"
        var $225=((($224))|0)==0; //@line 152 "testcapi_long.h"
        if ($225) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 152 "testcapi_long.h"
      case 59: // $bb60
        var $226=HEAP[$y]; //@line 152 "testcapi_long.h"
        var $227=(($226+4)&4294967295); //@line 152 "testcapi_long.h"
        var $228=HEAP[$227]; //@line 152 "testcapi_long.h"
        var $229=(($228+24)&4294967295); //@line 152 "testcapi_long.h"
        var $230=HEAP[$229]; //@line 152 "testcapi_long.h"
        var $231=HEAP[$y]; //@line 152 "testcapi_long.h"
        FUNCTION_TABLE[$230]($231); //@line 152 "testcapi_long.h"
        __label__ = 60; break; //@line 152 "testcapi_long.h"
      case 60: // $bb61
        HEAP[$y]=0; //@line 152 "testcapi_long.h"
        var $232=HEAP[$x]; //@line 153 "testcapi_long.h"
        var $233=($232)==0; //@line 153 "testcapi_long.h"
        if ($233) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 153 "testcapi_long.h"
      case 61: // $bb62
        var $234=HEAP[$error_addr]; //@line 154 "testcapi_long.h"
        var $235=FUNCTION_TABLE[$234](((__str23)&4294967295)); //@line 154 "testcapi_long.h"
        HEAP[$0]=$235; //@line 154 "testcapi_long.h"
        __label__ = 82; break; //@line 154 "testcapi_long.h"
      case 62: // $bb63
        var $236=HEAP[$x]; //@line 157 "testcapi_long.h"
        var $237=HEAP[$one]; //@line 157 "testcapi_long.h"
        var $238=_PyNumber_Subtract($236, $237); //@line 157 "testcapi_long.h"
        HEAP[$y]=$238; //@line 157 "testcapi_long.h"
        var $239=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $240=(($239)&4294967295); //@line 158 "testcapi_long.h"
        var $241=HEAP[$240]; //@line 158 "testcapi_long.h"
        var $242=((($241) - 1)&4294967295); //@line 158 "testcapi_long.h"
        var $243=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $244=(($243)&4294967295); //@line 158 "testcapi_long.h"
        HEAP[$244]=$242; //@line 158 "testcapi_long.h"
        var $245=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $246=(($245)&4294967295); //@line 158 "testcapi_long.h"
        var $247=HEAP[$246]; //@line 158 "testcapi_long.h"
        var $248=((($247))|0)==0; //@line 158 "testcapi_long.h"
        if ($248) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 158 "testcapi_long.h"
      case 63: // $bb64
        var $249=HEAP[$x]; //@line 158 "testcapi_long.h"
        var $250=(($249+4)&4294967295); //@line 158 "testcapi_long.h"
        var $251=HEAP[$250]; //@line 158 "testcapi_long.h"
        var $252=(($251+24)&4294967295); //@line 158 "testcapi_long.h"
        var $253=HEAP[$252]; //@line 158 "testcapi_long.h"
        var $254=HEAP[$x]; //@line 158 "testcapi_long.h"
        FUNCTION_TABLE[$253]($254); //@line 158 "testcapi_long.h"
        __label__ = 64; break; //@line 158 "testcapi_long.h"
      case 64: // $bb65
        HEAP[$x]=0; //@line 158 "testcapi_long.h"
        var $255=HEAP[$y]; //@line 159 "testcapi_long.h"
        var $256=($255)==0; //@line 159 "testcapi_long.h"
        if ($256) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 159 "testcapi_long.h"
      case 65: // $bb66
        var $257=HEAP[$error_addr]; //@line 160 "testcapi_long.h"
        var $258=FUNCTION_TABLE[$257](((__str32)&4294967295)); //@line 160 "testcapi_long.h"
        HEAP[$0]=$258; //@line 160 "testcapi_long.h"
        __label__ = 82; break; //@line 160 "testcapi_long.h"
      case 66: // $bb67
        var $259=HEAP[$y]; //@line 163 "testcapi_long.h"
        var $260=_PyLong_AsLongLong($259); //@line 163 "testcapi_long.h"
        HEAP[$out27]=$260; //@line 163 "testcapi_long.h"
        var $261=HEAP[$out27]; //@line 164 "testcapi_long.h"
        var $262=reSign(($261), 64, 0)!=-1; //@line 164 "testcapi_long.h"
        if ($262) { __label__ = 68; break; } else { __label__ = 67; break; } //@line 164 "testcapi_long.h"
      case 67: // $bb68
        var $263=_PyErr_Occurred(); //@line 164 "testcapi_long.h"
        var $264=($263)==0; //@line 164 "testcapi_long.h"
        if ($264) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 164 "testcapi_long.h"
      case 68: // $bb69
        var $265=HEAP[$error_addr]; //@line 165 "testcapi_long.h"
        var $266=FUNCTION_TABLE[$265](((__str33)&4294967295)); //@line 165 "testcapi_long.h"
        HEAP[$0]=$266; //@line 165 "testcapi_long.h"
        __label__ = 82; break; //@line 165 "testcapi_long.h"
      case 69: // $bb70
        var $267=HEAP[_PyExc_OverflowError]; //@line 168 "testcapi_long.h"
        var $268=_PyErr_ExceptionMatches($267); //@line 168 "testcapi_long.h"
        var $269=((($268))|0)==0; //@line 168 "testcapi_long.h"
        if ($269) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 168 "testcapi_long.h"
      case 70: // $bb71
        var $270=HEAP[$error_addr]; //@line 169 "testcapi_long.h"
        var $271=FUNCTION_TABLE[$270](((__str34)&4294967295)); //@line 169 "testcapi_long.h"
        HEAP[$0]=$271; //@line 169 "testcapi_long.h"
        __label__ = 82; break; //@line 169 "testcapi_long.h"
      case 71: // $bb72
        _PyErr_Clear(); //@line 172 "testcapi_long.h"
        var $272=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $273=(($272)&4294967295); //@line 173 "testcapi_long.h"
        var $274=HEAP[$273]; //@line 173 "testcapi_long.h"
        var $275=((($274) - 1)&4294967295); //@line 173 "testcapi_long.h"
        var $276=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $277=(($276)&4294967295); //@line 173 "testcapi_long.h"
        HEAP[$277]=$275; //@line 173 "testcapi_long.h"
        var $278=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $279=(($278)&4294967295); //@line 173 "testcapi_long.h"
        var $280=HEAP[$279]; //@line 173 "testcapi_long.h"
        var $281=((($280))|0)==0; //@line 173 "testcapi_long.h"
        if ($281) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 173 "testcapi_long.h"
      case 72: // $bb73
        var $282=HEAP[$y]; //@line 173 "testcapi_long.h"
        var $283=(($282+4)&4294967295); //@line 173 "testcapi_long.h"
        var $284=HEAP[$283]; //@line 173 "testcapi_long.h"
        var $285=(($284+24)&4294967295); //@line 173 "testcapi_long.h"
        var $286=HEAP[$285]; //@line 173 "testcapi_long.h"
        var $287=HEAP[$y]; //@line 173 "testcapi_long.h"
        FUNCTION_TABLE[$286]($287); //@line 173 "testcapi_long.h"
        __label__ = 73; break; //@line 173 "testcapi_long.h"
      case 73: // $bb74
        HEAP[$y]=0; //@line 173 "testcapi_long.h"
        var $288=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $289=($288)!=0; //@line 175 "testcapi_long.h"
        if ($289) { __label__ = 74; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 74: // $bb75
        var $290=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $291=(($290)&4294967295); //@line 175 "testcapi_long.h"
        var $292=HEAP[$291]; //@line 175 "testcapi_long.h"
        var $293=((($292) - 1)&4294967295); //@line 175 "testcapi_long.h"
        var $294=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $295=(($294)&4294967295); //@line 175 "testcapi_long.h"
        HEAP[$295]=$293; //@line 175 "testcapi_long.h"
        var $296=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $297=(($296)&4294967295); //@line 175 "testcapi_long.h"
        var $298=HEAP[$297]; //@line 175 "testcapi_long.h"
        var $299=((($298))|0)==0; //@line 175 "testcapi_long.h"
        if ($299) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 175 "testcapi_long.h"
      case 75: // $bb76
        var $300=HEAP[$x]; //@line 175 "testcapi_long.h"
        var $301=(($300+4)&4294967295); //@line 175 "testcapi_long.h"
        var $302=HEAP[$301]; //@line 175 "testcapi_long.h"
        var $303=(($302+24)&4294967295); //@line 175 "testcapi_long.h"
        var $304=HEAP[$303]; //@line 175 "testcapi_long.h"
        var $305=HEAP[$x]; //@line 175 "testcapi_long.h"
        FUNCTION_TABLE[$304]($305); //@line 175 "testcapi_long.h"
        __label__ = 76; break; //@line 175 "testcapi_long.h"
      case 76: // $bb77
        var $306=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $307=($306)!=0; //@line 176 "testcapi_long.h"
        if ($307) { __label__ = 77; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 77: // $bb78
        var $308=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $309=(($308)&4294967295); //@line 176 "testcapi_long.h"
        var $310=HEAP[$309]; //@line 176 "testcapi_long.h"
        var $311=((($310) - 1)&4294967295); //@line 176 "testcapi_long.h"
        var $312=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $313=(($312)&4294967295); //@line 176 "testcapi_long.h"
        HEAP[$313]=$311; //@line 176 "testcapi_long.h"
        var $314=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $315=(($314)&4294967295); //@line 176 "testcapi_long.h"
        var $316=HEAP[$315]; //@line 176 "testcapi_long.h"
        var $317=((($316))|0)==0; //@line 176 "testcapi_long.h"
        if ($317) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 176 "testcapi_long.h"
      case 78: // $bb79
        var $318=HEAP[$y]; //@line 176 "testcapi_long.h"
        var $319=(($318+4)&4294967295); //@line 176 "testcapi_long.h"
        var $320=HEAP[$319]; //@line 176 "testcapi_long.h"
        var $321=(($320+24)&4294967295); //@line 176 "testcapi_long.h"
        var $322=HEAP[$321]; //@line 176 "testcapi_long.h"
        var $323=HEAP[$y]; //@line 176 "testcapi_long.h"
        FUNCTION_TABLE[$322]($323); //@line 176 "testcapi_long.h"
        __label__ = 79; break; //@line 176 "testcapi_long.h"
      case 79: // $bb80
        var $324=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $325=(($324)&4294967295); //@line 177 "testcapi_long.h"
        var $326=HEAP[$325]; //@line 177 "testcapi_long.h"
        var $327=((($326) - 1)&4294967295); //@line 177 "testcapi_long.h"
        var $328=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $329=(($328)&4294967295); //@line 177 "testcapi_long.h"
        HEAP[$329]=$327; //@line 177 "testcapi_long.h"
        var $330=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $331=(($330)&4294967295); //@line 177 "testcapi_long.h"
        var $332=HEAP[$331]; //@line 177 "testcapi_long.h"
        var $333=((($332))|0)==0; //@line 177 "testcapi_long.h"
        if ($333) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 177 "testcapi_long.h"
      case 80: // $bb81
        var $334=HEAP[$one]; //@line 177 "testcapi_long.h"
        var $335=(($334+4)&4294967295); //@line 177 "testcapi_long.h"
        var $336=HEAP[$335]; //@line 177 "testcapi_long.h"
        var $337=(($336+24)&4294967295); //@line 177 "testcapi_long.h"
        var $338=HEAP[$337]; //@line 177 "testcapi_long.h"
        var $339=HEAP[$one]; //@line 177 "testcapi_long.h"
        FUNCTION_TABLE[$338]($339); //@line 177 "testcapi_long.h"
        __label__ = 81; break; //@line 177 "testcapi_long.h"
      case 81: // $bb82
        var $340=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 180 "testcapi_long.h"
        var $341=((($340) + 1)&4294967295); //@line 180 "testcapi_long.h"
        HEAP[((__Py_NoneStruct)&4294967295)]=$341; //@line 180 "testcapi_long.h"
        HEAP[$0]=__Py_NoneStruct; //@line 181 "testcapi_long.h"
        __label__ = 82; break; //@line 181 "testcapi_long.h"
      case 82: // $bb83
        var $342=HEAP[$0]; //@line 47 "testcapi_long.h"
        HEAP[$retval]=$342; //@line 47 "testcapi_long.h"
        __label__ = 83; break; //@line 47 "testcapi_long.h"
      case 83: // $return
        var $retval84=HEAP[$retval]; //@line 47 "testcapi_long.h"
        STACKTOP = __stackBase__;
        return $retval84; //@line 47 "testcapi_long.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_longlong_api($self, $args) {
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
        var $1=_test_longlong_api_inner((FUNCTION_TABLE_OFFSET + 4)); //@line 445 "_testcapimodule.c"
        HEAP[$0]=$1; //@line 445 "_testcapimodule.c"
        var $2=HEAP[$0]; //@line 445 "_testcapimodule.c"
        HEAP[$retval]=$2; //@line 445 "_testcapimodule.c"
        __label__ = 1; break; //@line 445 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 445 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 445 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_and_overflow($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $num=__stackBase__+12;
        var $one=__stackBase__+16;
        var $temp=__stackBase__+20;
        var $value=__stackBase__+24;
        var $overflow=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyLong_FromString(((__str36)&4294967295), 0, 16); //@line 469 "_testcapimodule.c"
        HEAP[$num]=$1; //@line 469 "_testcapimodule.c"
        var $2=HEAP[$num]; //@line 470 "_testcapimodule.c"
        var $3=($2)==0; //@line 470 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 470 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 471 "_testcapimodule.c"
        __label__ = 109; break; //@line 471 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$overflow]=1234; //@line 472 "_testcapimodule.c"
        var $4=HEAP[$num]; //@line 473 "_testcapimodule.c"
        var $5=_PyLong_AsLongAndOverflow($4, $overflow); //@line 473 "_testcapimodule.c"
        HEAP[$value]=$5; //@line 473 "_testcapimodule.c"
        var $6=HEAP[$num]; //@line 474 "_testcapimodule.c"
        var $7=(($6)&4294967295); //@line 474 "_testcapimodule.c"
        var $8=HEAP[$7]; //@line 474 "_testcapimodule.c"
        var $9=((($8) - 1)&4294967295); //@line 474 "_testcapimodule.c"
        var $10=HEAP[$num]; //@line 474 "_testcapimodule.c"
        var $11=(($10)&4294967295); //@line 474 "_testcapimodule.c"
        HEAP[$11]=$9; //@line 474 "_testcapimodule.c"
        var $12=HEAP[$num]; //@line 474 "_testcapimodule.c"
        var $13=(($12)&4294967295); //@line 474 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 474 "_testcapimodule.c"
        var $15=((($14))|0)==0; //@line 474 "_testcapimodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 474 "_testcapimodule.c"
      case 3: // $bb2
        var $16=HEAP[$num]; //@line 474 "_testcapimodule.c"
        var $17=(($16+4)&4294967295); //@line 474 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 474 "_testcapimodule.c"
        var $19=(($18+24)&4294967295); //@line 474 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 474 "_testcapimodule.c"
        var $21=HEAP[$num]; //@line 474 "_testcapimodule.c"
        FUNCTION_TABLE[$20]($21); //@line 474 "_testcapimodule.c"
        __label__ = 4; break; //@line 474 "_testcapimodule.c"
      case 4: // $bb3
        var $22=HEAP[$value]; //@line 475 "_testcapimodule.c"
        var $23=((($22))|0)==-1; //@line 475 "_testcapimodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 475 "_testcapimodule.c"
      case 5: // $bb4
        var $24=_PyErr_Occurred(); //@line 475 "_testcapimodule.c"
        var $25=($24)!=0; //@line 475 "_testcapimodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 475 "_testcapimodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 476 "_testcapimodule.c"
        __label__ = 109; break; //@line 476 "_testcapimodule.c"
      case 7: // $bb6
        var $26=HEAP[$value]; //@line 477 "_testcapimodule.c"
        var $27=((($26))|0)!=-1; //@line 477 "_testcapimodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 477 "_testcapimodule.c"
      case 8: // $bb7
        var $28=_raiseTestError(((__str37)&4294967295), ((__str38)&4294967295)); //@line 478 "_testcapimodule.c"
        HEAP[$0]=$28; //@line 478 "_testcapimodule.c"
        __label__ = 109; break; //@line 478 "_testcapimodule.c"
      case 9: // $bb8
        var $29=HEAP[$overflow]; //@line 480 "_testcapimodule.c"
        var $30=((($29))|0)!=1; //@line 480 "_testcapimodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 480 "_testcapimodule.c"
      case 10: // $bb9
        var $31=_raiseTestError(((__str37)&4294967295), ((__str39)&4294967295)); //@line 481 "_testcapimodule.c"
        HEAP[$0]=$31; //@line 481 "_testcapimodule.c"
        __label__ = 109; break; //@line 481 "_testcapimodule.c"
      case 11: // $bb10
        var $32=_PyLong_FromLong(2147483647); //@line 485 "_testcapimodule.c"
        HEAP[$num]=$32; //@line 485 "_testcapimodule.c"
        var $33=HEAP[$num]; //@line 486 "_testcapimodule.c"
        var $34=($33)==0; //@line 486 "_testcapimodule.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 486 "_testcapimodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 487 "_testcapimodule.c"
        __label__ = 109; break; //@line 487 "_testcapimodule.c"
      case 13: // $bb12
        var $35=_PyLong_FromLong(1); //@line 488 "_testcapimodule.c"
        HEAP[$one]=$35; //@line 488 "_testcapimodule.c"
        var $36=HEAP[$one]; //@line 489 "_testcapimodule.c"
        var $37=($36)==0; //@line 489 "_testcapimodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 489 "_testcapimodule.c"
      case 14: // $bb13
        var $38=HEAP[$num]; //@line 490 "_testcapimodule.c"
        var $39=(($38)&4294967295); //@line 490 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 490 "_testcapimodule.c"
        var $41=((($40) - 1)&4294967295); //@line 490 "_testcapimodule.c"
        var $42=HEAP[$num]; //@line 490 "_testcapimodule.c"
        var $43=(($42)&4294967295); //@line 490 "_testcapimodule.c"
        HEAP[$43]=$41; //@line 490 "_testcapimodule.c"
        var $44=HEAP[$num]; //@line 490 "_testcapimodule.c"
        var $45=(($44)&4294967295); //@line 490 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 490 "_testcapimodule.c"
        var $47=((($46))|0)==0; //@line 490 "_testcapimodule.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 490 "_testcapimodule.c"
      case 15: // $bb14
        var $48=HEAP[$num]; //@line 490 "_testcapimodule.c"
        var $49=(($48+4)&4294967295); //@line 490 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 490 "_testcapimodule.c"
        var $51=(($50+24)&4294967295); //@line 490 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 490 "_testcapimodule.c"
        var $53=HEAP[$num]; //@line 490 "_testcapimodule.c"
        FUNCTION_TABLE[$52]($53); //@line 490 "_testcapimodule.c"
        __label__ = 16; break; //@line 490 "_testcapimodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 491 "_testcapimodule.c"
        __label__ = 109; break; //@line 491 "_testcapimodule.c"
      case 17: // $bb16
        var $54=HEAP[$num]; //@line 493 "_testcapimodule.c"
        var $55=HEAP[$one]; //@line 493 "_testcapimodule.c"
        var $56=_PyNumber_Add($54, $55); //@line 493 "_testcapimodule.c"
        HEAP[$temp]=$56; //@line 493 "_testcapimodule.c"
        var $57=HEAP[$one]; //@line 494 "_testcapimodule.c"
        var $58=(($57)&4294967295); //@line 494 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 494 "_testcapimodule.c"
        var $60=((($59) - 1)&4294967295); //@line 494 "_testcapimodule.c"
        var $61=HEAP[$one]; //@line 494 "_testcapimodule.c"
        var $62=(($61)&4294967295); //@line 494 "_testcapimodule.c"
        HEAP[$62]=$60; //@line 494 "_testcapimodule.c"
        var $63=HEAP[$one]; //@line 494 "_testcapimodule.c"
        var $64=(($63)&4294967295); //@line 494 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 494 "_testcapimodule.c"
        var $66=((($65))|0)==0; //@line 494 "_testcapimodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 494 "_testcapimodule.c"
      case 18: // $bb17
        var $67=HEAP[$one]; //@line 494 "_testcapimodule.c"
        var $68=(($67+4)&4294967295); //@line 494 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 494 "_testcapimodule.c"
        var $70=(($69+24)&4294967295); //@line 494 "_testcapimodule.c"
        var $71=HEAP[$70]; //@line 494 "_testcapimodule.c"
        var $72=HEAP[$one]; //@line 494 "_testcapimodule.c"
        FUNCTION_TABLE[$71]($72); //@line 494 "_testcapimodule.c"
        __label__ = 19; break; //@line 494 "_testcapimodule.c"
      case 19: // $bb18
        var $73=HEAP[$num]; //@line 495 "_testcapimodule.c"
        var $74=(($73)&4294967295); //@line 495 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 495 "_testcapimodule.c"
        var $76=((($75) - 1)&4294967295); //@line 495 "_testcapimodule.c"
        var $77=HEAP[$num]; //@line 495 "_testcapimodule.c"
        var $78=(($77)&4294967295); //@line 495 "_testcapimodule.c"
        HEAP[$78]=$76; //@line 495 "_testcapimodule.c"
        var $79=HEAP[$num]; //@line 495 "_testcapimodule.c"
        var $80=(($79)&4294967295); //@line 495 "_testcapimodule.c"
        var $81=HEAP[$80]; //@line 495 "_testcapimodule.c"
        var $82=((($81))|0)==0; //@line 495 "_testcapimodule.c"
        if ($82) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 495 "_testcapimodule.c"
      case 20: // $bb19
        var $83=HEAP[$num]; //@line 495 "_testcapimodule.c"
        var $84=(($83+4)&4294967295); //@line 495 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 495 "_testcapimodule.c"
        var $86=(($85+24)&4294967295); //@line 495 "_testcapimodule.c"
        var $87=HEAP[$86]; //@line 495 "_testcapimodule.c"
        var $88=HEAP[$num]; //@line 495 "_testcapimodule.c"
        FUNCTION_TABLE[$87]($88); //@line 495 "_testcapimodule.c"
        __label__ = 21; break; //@line 495 "_testcapimodule.c"
      case 21: // $bb20
        var $89=HEAP[$temp]; //@line 496 "_testcapimodule.c"
        HEAP[$num]=$89; //@line 496 "_testcapimodule.c"
        var $90=HEAP[$num]; //@line 497 "_testcapimodule.c"
        var $91=($90)==0; //@line 497 "_testcapimodule.c"
        if ($91) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 497 "_testcapimodule.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 498 "_testcapimodule.c"
        __label__ = 109; break; //@line 498 "_testcapimodule.c"
      case 23: // $bb22
        HEAP[$overflow]=0; //@line 499 "_testcapimodule.c"
        var $92=HEAP[$num]; //@line 500 "_testcapimodule.c"
        var $93=_PyLong_AsLongAndOverflow($92, $overflow); //@line 500 "_testcapimodule.c"
        HEAP[$value]=$93; //@line 500 "_testcapimodule.c"
        var $94=HEAP[$num]; //@line 501 "_testcapimodule.c"
        var $95=(($94)&4294967295); //@line 501 "_testcapimodule.c"
        var $96=HEAP[$95]; //@line 501 "_testcapimodule.c"
        var $97=((($96) - 1)&4294967295); //@line 501 "_testcapimodule.c"
        var $98=HEAP[$num]; //@line 501 "_testcapimodule.c"
        var $99=(($98)&4294967295); //@line 501 "_testcapimodule.c"
        HEAP[$99]=$97; //@line 501 "_testcapimodule.c"
        var $100=HEAP[$num]; //@line 501 "_testcapimodule.c"
        var $101=(($100)&4294967295); //@line 501 "_testcapimodule.c"
        var $102=HEAP[$101]; //@line 501 "_testcapimodule.c"
        var $103=((($102))|0)==0; //@line 501 "_testcapimodule.c"
        if ($103) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 501 "_testcapimodule.c"
      case 24: // $bb23
        var $104=HEAP[$num]; //@line 501 "_testcapimodule.c"
        var $105=(($104+4)&4294967295); //@line 501 "_testcapimodule.c"
        var $106=HEAP[$105]; //@line 501 "_testcapimodule.c"
        var $107=(($106+24)&4294967295); //@line 501 "_testcapimodule.c"
        var $108=HEAP[$107]; //@line 501 "_testcapimodule.c"
        var $109=HEAP[$num]; //@line 501 "_testcapimodule.c"
        FUNCTION_TABLE[$108]($109); //@line 501 "_testcapimodule.c"
        __label__ = 25; break; //@line 501 "_testcapimodule.c"
      case 25: // $bb24
        var $110=HEAP[$value]; //@line 502 "_testcapimodule.c"
        var $111=((($110))|0)==-1; //@line 502 "_testcapimodule.c"
        if ($111) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 502 "_testcapimodule.c"
      case 26: // $bb25
        var $112=_PyErr_Occurred(); //@line 502 "_testcapimodule.c"
        var $113=($112)!=0; //@line 502 "_testcapimodule.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 502 "_testcapimodule.c"
      case 27: // $bb26
        HEAP[$0]=0; //@line 503 "_testcapimodule.c"
        __label__ = 109; break; //@line 503 "_testcapimodule.c"
      case 28: // $bb27
        var $114=HEAP[$value]; //@line 504 "_testcapimodule.c"
        var $115=((($114))|0)!=-1; //@line 504 "_testcapimodule.c"
        if ($115) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 504 "_testcapimodule.c"
      case 29: // $bb28
        var $116=_raiseTestError(((__str37)&4294967295), ((__str38)&4294967295)); //@line 505 "_testcapimodule.c"
        HEAP[$0]=$116; //@line 505 "_testcapimodule.c"
        __label__ = 109; break; //@line 505 "_testcapimodule.c"
      case 30: // $bb29
        var $117=HEAP[$overflow]; //@line 507 "_testcapimodule.c"
        var $118=((($117))|0)!=1; //@line 507 "_testcapimodule.c"
        if ($118) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 507 "_testcapimodule.c"
      case 31: // $bb30
        var $119=_raiseTestError(((__str37)&4294967295), ((__str39)&4294967295)); //@line 508 "_testcapimodule.c"
        HEAP[$0]=$119; //@line 508 "_testcapimodule.c"
        __label__ = 109; break; //@line 508 "_testcapimodule.c"
      case 32: // $bb31
        var $120=_PyLong_FromString(((__str40)&4294967295), 0, 16); //@line 513 "_testcapimodule.c"
        HEAP[$num]=$120; //@line 513 "_testcapimodule.c"
        var $121=HEAP[$num]; //@line 514 "_testcapimodule.c"
        var $122=($121)==0; //@line 514 "_testcapimodule.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 514 "_testcapimodule.c"
      case 33: // $bb32
        HEAP[$0]=0; //@line 515 "_testcapimodule.c"
        __label__ = 109; break; //@line 515 "_testcapimodule.c"
      case 34: // $bb33
        HEAP[$overflow]=1234; //@line 516 "_testcapimodule.c"
        var $123=HEAP[$num]; //@line 517 "_testcapimodule.c"
        var $124=_PyLong_AsLongAndOverflow($123, $overflow); //@line 517 "_testcapimodule.c"
        HEAP[$value]=$124; //@line 517 "_testcapimodule.c"
        var $125=HEAP[$num]; //@line 518 "_testcapimodule.c"
        var $126=(($125)&4294967295); //@line 518 "_testcapimodule.c"
        var $127=HEAP[$126]; //@line 518 "_testcapimodule.c"
        var $128=((($127) - 1)&4294967295); //@line 518 "_testcapimodule.c"
        var $129=HEAP[$num]; //@line 518 "_testcapimodule.c"
        var $130=(($129)&4294967295); //@line 518 "_testcapimodule.c"
        HEAP[$130]=$128; //@line 518 "_testcapimodule.c"
        var $131=HEAP[$num]; //@line 518 "_testcapimodule.c"
        var $132=(($131)&4294967295); //@line 518 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 518 "_testcapimodule.c"
        var $134=((($133))|0)==0; //@line 518 "_testcapimodule.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 518 "_testcapimodule.c"
      case 35: // $bb34
        var $135=HEAP[$num]; //@line 518 "_testcapimodule.c"
        var $136=(($135+4)&4294967295); //@line 518 "_testcapimodule.c"
        var $137=HEAP[$136]; //@line 518 "_testcapimodule.c"
        var $138=(($137+24)&4294967295); //@line 518 "_testcapimodule.c"
        var $139=HEAP[$138]; //@line 518 "_testcapimodule.c"
        var $140=HEAP[$num]; //@line 518 "_testcapimodule.c"
        FUNCTION_TABLE[$139]($140); //@line 518 "_testcapimodule.c"
        __label__ = 36; break; //@line 518 "_testcapimodule.c"
      case 36: // $bb35
        var $141=HEAP[$value]; //@line 519 "_testcapimodule.c"
        var $142=((($141))|0)==-1; //@line 519 "_testcapimodule.c"
        if ($142) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 519 "_testcapimodule.c"
      case 37: // $bb36
        var $143=_PyErr_Occurred(); //@line 519 "_testcapimodule.c"
        var $144=($143)!=0; //@line 519 "_testcapimodule.c"
        if ($144) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 519 "_testcapimodule.c"
      case 38: // $bb37
        HEAP[$0]=0; //@line 520 "_testcapimodule.c"
        __label__ = 109; break; //@line 520 "_testcapimodule.c"
      case 39: // $bb38
        var $145=HEAP[$value]; //@line 521 "_testcapimodule.c"
        var $146=((($145))|0)!=-1; //@line 521 "_testcapimodule.c"
        if ($146) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 521 "_testcapimodule.c"
      case 40: // $bb39
        var $147=_raiseTestError(((__str37)&4294967295), ((__str38)&4294967295)); //@line 522 "_testcapimodule.c"
        HEAP[$0]=$147; //@line 522 "_testcapimodule.c"
        __label__ = 109; break; //@line 522 "_testcapimodule.c"
      case 41: // $bb40
        var $148=HEAP[$overflow]; //@line 524 "_testcapimodule.c"
        var $149=((($148))|0)!=-1; //@line 524 "_testcapimodule.c"
        if ($149) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 524 "_testcapimodule.c"
      case 42: // $bb41
        var $150=_raiseTestError(((__str37)&4294967295), ((__str41)&4294967295)); //@line 525 "_testcapimodule.c"
        HEAP[$0]=$150; //@line 525 "_testcapimodule.c"
        __label__ = 109; break; //@line 525 "_testcapimodule.c"
      case 43: // $bb42
        var $151=_PyLong_FromLong(-2147483648); //@line 529 "_testcapimodule.c"
        HEAP[$num]=$151; //@line 529 "_testcapimodule.c"
        var $152=HEAP[$num]; //@line 530 "_testcapimodule.c"
        var $153=($152)==0; //@line 530 "_testcapimodule.c"
        if ($153) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 530 "_testcapimodule.c"
      case 44: // $bb43
        HEAP[$0]=0; //@line 531 "_testcapimodule.c"
        __label__ = 109; break; //@line 531 "_testcapimodule.c"
      case 45: // $bb44
        var $154=_PyLong_FromLong(1); //@line 532 "_testcapimodule.c"
        HEAP[$one]=$154; //@line 532 "_testcapimodule.c"
        var $155=HEAP[$one]; //@line 533 "_testcapimodule.c"
        var $156=($155)==0; //@line 533 "_testcapimodule.c"
        if ($156) { __label__ = 46; break; } else { __label__ = 49; break; } //@line 533 "_testcapimodule.c"
      case 46: // $bb45
        var $157=HEAP[$num]; //@line 534 "_testcapimodule.c"
        var $158=(($157)&4294967295); //@line 534 "_testcapimodule.c"
        var $159=HEAP[$158]; //@line 534 "_testcapimodule.c"
        var $160=((($159) - 1)&4294967295); //@line 534 "_testcapimodule.c"
        var $161=HEAP[$num]; //@line 534 "_testcapimodule.c"
        var $162=(($161)&4294967295); //@line 534 "_testcapimodule.c"
        HEAP[$162]=$160; //@line 534 "_testcapimodule.c"
        var $163=HEAP[$num]; //@line 534 "_testcapimodule.c"
        var $164=(($163)&4294967295); //@line 534 "_testcapimodule.c"
        var $165=HEAP[$164]; //@line 534 "_testcapimodule.c"
        var $166=((($165))|0)==0; //@line 534 "_testcapimodule.c"
        if ($166) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 534 "_testcapimodule.c"
      case 47: // $bb46
        var $167=HEAP[$num]; //@line 534 "_testcapimodule.c"
        var $168=(($167+4)&4294967295); //@line 534 "_testcapimodule.c"
        var $169=HEAP[$168]; //@line 534 "_testcapimodule.c"
        var $170=(($169+24)&4294967295); //@line 534 "_testcapimodule.c"
        var $171=HEAP[$170]; //@line 534 "_testcapimodule.c"
        var $172=HEAP[$num]; //@line 534 "_testcapimodule.c"
        FUNCTION_TABLE[$171]($172); //@line 534 "_testcapimodule.c"
        __label__ = 48; break; //@line 534 "_testcapimodule.c"
      case 48: // $bb47
        HEAP[$0]=0; //@line 535 "_testcapimodule.c"
        __label__ = 109; break; //@line 535 "_testcapimodule.c"
      case 49: // $bb48
        var $173=HEAP[$num]; //@line 537 "_testcapimodule.c"
        var $174=HEAP[$one]; //@line 537 "_testcapimodule.c"
        var $175=_PyNumber_Subtract($173, $174); //@line 537 "_testcapimodule.c"
        HEAP[$temp]=$175; //@line 537 "_testcapimodule.c"
        var $176=HEAP[$one]; //@line 538 "_testcapimodule.c"
        var $177=(($176)&4294967295); //@line 538 "_testcapimodule.c"
        var $178=HEAP[$177]; //@line 538 "_testcapimodule.c"
        var $179=((($178) - 1)&4294967295); //@line 538 "_testcapimodule.c"
        var $180=HEAP[$one]; //@line 538 "_testcapimodule.c"
        var $181=(($180)&4294967295); //@line 538 "_testcapimodule.c"
        HEAP[$181]=$179; //@line 538 "_testcapimodule.c"
        var $182=HEAP[$one]; //@line 538 "_testcapimodule.c"
        var $183=(($182)&4294967295); //@line 538 "_testcapimodule.c"
        var $184=HEAP[$183]; //@line 538 "_testcapimodule.c"
        var $185=((($184))|0)==0; //@line 538 "_testcapimodule.c"
        if ($185) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 538 "_testcapimodule.c"
      case 50: // $bb49
        var $186=HEAP[$one]; //@line 538 "_testcapimodule.c"
        var $187=(($186+4)&4294967295); //@line 538 "_testcapimodule.c"
        var $188=HEAP[$187]; //@line 538 "_testcapimodule.c"
        var $189=(($188+24)&4294967295); //@line 538 "_testcapimodule.c"
        var $190=HEAP[$189]; //@line 538 "_testcapimodule.c"
        var $191=HEAP[$one]; //@line 538 "_testcapimodule.c"
        FUNCTION_TABLE[$190]($191); //@line 538 "_testcapimodule.c"
        __label__ = 51; break; //@line 538 "_testcapimodule.c"
      case 51: // $bb50
        var $192=HEAP[$num]; //@line 539 "_testcapimodule.c"
        var $193=(($192)&4294967295); //@line 539 "_testcapimodule.c"
        var $194=HEAP[$193]; //@line 539 "_testcapimodule.c"
        var $195=((($194) - 1)&4294967295); //@line 539 "_testcapimodule.c"
        var $196=HEAP[$num]; //@line 539 "_testcapimodule.c"
        var $197=(($196)&4294967295); //@line 539 "_testcapimodule.c"
        HEAP[$197]=$195; //@line 539 "_testcapimodule.c"
        var $198=HEAP[$num]; //@line 539 "_testcapimodule.c"
        var $199=(($198)&4294967295); //@line 539 "_testcapimodule.c"
        var $200=HEAP[$199]; //@line 539 "_testcapimodule.c"
        var $201=((($200))|0)==0; //@line 539 "_testcapimodule.c"
        if ($201) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 539 "_testcapimodule.c"
      case 52: // $bb51
        var $202=HEAP[$num]; //@line 539 "_testcapimodule.c"
        var $203=(($202+4)&4294967295); //@line 539 "_testcapimodule.c"
        var $204=HEAP[$203]; //@line 539 "_testcapimodule.c"
        var $205=(($204+24)&4294967295); //@line 539 "_testcapimodule.c"
        var $206=HEAP[$205]; //@line 539 "_testcapimodule.c"
        var $207=HEAP[$num]; //@line 539 "_testcapimodule.c"
        FUNCTION_TABLE[$206]($207); //@line 539 "_testcapimodule.c"
        __label__ = 53; break; //@line 539 "_testcapimodule.c"
      case 53: // $bb52
        var $208=HEAP[$temp]; //@line 540 "_testcapimodule.c"
        HEAP[$num]=$208; //@line 540 "_testcapimodule.c"
        var $209=HEAP[$num]; //@line 541 "_testcapimodule.c"
        var $210=($209)==0; //@line 541 "_testcapimodule.c"
        if ($210) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 541 "_testcapimodule.c"
      case 54: // $bb53
        HEAP[$0]=0; //@line 542 "_testcapimodule.c"
        __label__ = 109; break; //@line 542 "_testcapimodule.c"
      case 55: // $bb54
        HEAP[$overflow]=0; //@line 543 "_testcapimodule.c"
        var $211=HEAP[$num]; //@line 544 "_testcapimodule.c"
        var $212=_PyLong_AsLongAndOverflow($211, $overflow); //@line 544 "_testcapimodule.c"
        HEAP[$value]=$212; //@line 544 "_testcapimodule.c"
        var $213=HEAP[$num]; //@line 545 "_testcapimodule.c"
        var $214=(($213)&4294967295); //@line 545 "_testcapimodule.c"
        var $215=HEAP[$214]; //@line 545 "_testcapimodule.c"
        var $216=((($215) - 1)&4294967295); //@line 545 "_testcapimodule.c"
        var $217=HEAP[$num]; //@line 545 "_testcapimodule.c"
        var $218=(($217)&4294967295); //@line 545 "_testcapimodule.c"
        HEAP[$218]=$216; //@line 545 "_testcapimodule.c"
        var $219=HEAP[$num]; //@line 545 "_testcapimodule.c"
        var $220=(($219)&4294967295); //@line 545 "_testcapimodule.c"
        var $221=HEAP[$220]; //@line 545 "_testcapimodule.c"
        var $222=((($221))|0)==0; //@line 545 "_testcapimodule.c"
        if ($222) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 545 "_testcapimodule.c"
      case 56: // $bb55
        var $223=HEAP[$num]; //@line 545 "_testcapimodule.c"
        var $224=(($223+4)&4294967295); //@line 545 "_testcapimodule.c"
        var $225=HEAP[$224]; //@line 545 "_testcapimodule.c"
        var $226=(($225+24)&4294967295); //@line 545 "_testcapimodule.c"
        var $227=HEAP[$226]; //@line 545 "_testcapimodule.c"
        var $228=HEAP[$num]; //@line 545 "_testcapimodule.c"
        FUNCTION_TABLE[$227]($228); //@line 545 "_testcapimodule.c"
        __label__ = 57; break; //@line 545 "_testcapimodule.c"
      case 57: // $bb56
        var $229=HEAP[$value]; //@line 546 "_testcapimodule.c"
        var $230=((($229))|0)==-1; //@line 546 "_testcapimodule.c"
        if ($230) { __label__ = 58; break; } else { __label__ = 60; break; } //@line 546 "_testcapimodule.c"
      case 58: // $bb57
        var $231=_PyErr_Occurred(); //@line 546 "_testcapimodule.c"
        var $232=($231)!=0; //@line 546 "_testcapimodule.c"
        if ($232) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 546 "_testcapimodule.c"
      case 59: // $bb58
        HEAP[$0]=0; //@line 547 "_testcapimodule.c"
        __label__ = 109; break; //@line 547 "_testcapimodule.c"
      case 60: // $bb59
        var $233=HEAP[$value]; //@line 548 "_testcapimodule.c"
        var $234=((($233))|0)!=-1; //@line 548 "_testcapimodule.c"
        if ($234) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 548 "_testcapimodule.c"
      case 61: // $bb60
        var $235=_raiseTestError(((__str37)&4294967295), ((__str38)&4294967295)); //@line 549 "_testcapimodule.c"
        HEAP[$0]=$235; //@line 549 "_testcapimodule.c"
        __label__ = 109; break; //@line 549 "_testcapimodule.c"
      case 62: // $bb61
        var $236=HEAP[$overflow]; //@line 551 "_testcapimodule.c"
        var $237=((($236))|0)!=-1; //@line 551 "_testcapimodule.c"
        if ($237) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 551 "_testcapimodule.c"
      case 63: // $bb62
        var $238=_raiseTestError(((__str37)&4294967295), ((__str41)&4294967295)); //@line 552 "_testcapimodule.c"
        HEAP[$0]=$238; //@line 552 "_testcapimodule.c"
        __label__ = 109; break; //@line 552 "_testcapimodule.c"
      case 64: // $bb63
        var $239=_PyLong_FromString(((__str42)&4294967295), 0, 16); //@line 556 "_testcapimodule.c"
        HEAP[$num]=$239; //@line 556 "_testcapimodule.c"
        var $240=HEAP[$num]; //@line 557 "_testcapimodule.c"
        var $241=($240)==0; //@line 557 "_testcapimodule.c"
        if ($241) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 557 "_testcapimodule.c"
      case 65: // $bb64
        HEAP[$0]=0; //@line 558 "_testcapimodule.c"
        __label__ = 109; break; //@line 558 "_testcapimodule.c"
      case 66: // $bb65
        HEAP[$overflow]=1234; //@line 559 "_testcapimodule.c"
        var $242=HEAP[$num]; //@line 560 "_testcapimodule.c"
        var $243=_PyLong_AsLongAndOverflow($242, $overflow); //@line 560 "_testcapimodule.c"
        HEAP[$value]=$243; //@line 560 "_testcapimodule.c"
        var $244=HEAP[$num]; //@line 561 "_testcapimodule.c"
        var $245=(($244)&4294967295); //@line 561 "_testcapimodule.c"
        var $246=HEAP[$245]; //@line 561 "_testcapimodule.c"
        var $247=((($246) - 1)&4294967295); //@line 561 "_testcapimodule.c"
        var $248=HEAP[$num]; //@line 561 "_testcapimodule.c"
        var $249=(($248)&4294967295); //@line 561 "_testcapimodule.c"
        HEAP[$249]=$247; //@line 561 "_testcapimodule.c"
        var $250=HEAP[$num]; //@line 561 "_testcapimodule.c"
        var $251=(($250)&4294967295); //@line 561 "_testcapimodule.c"
        var $252=HEAP[$251]; //@line 561 "_testcapimodule.c"
        var $253=((($252))|0)==0; //@line 561 "_testcapimodule.c"
        if ($253) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 561 "_testcapimodule.c"
      case 67: // $bb66
        var $254=HEAP[$num]; //@line 561 "_testcapimodule.c"
        var $255=(($254+4)&4294967295); //@line 561 "_testcapimodule.c"
        var $256=HEAP[$255]; //@line 561 "_testcapimodule.c"
        var $257=(($256+24)&4294967295); //@line 561 "_testcapimodule.c"
        var $258=HEAP[$257]; //@line 561 "_testcapimodule.c"
        var $259=HEAP[$num]; //@line 561 "_testcapimodule.c"
        FUNCTION_TABLE[$258]($259); //@line 561 "_testcapimodule.c"
        __label__ = 68; break; //@line 561 "_testcapimodule.c"
      case 68: // $bb67
        var $260=HEAP[$value]; //@line 562 "_testcapimodule.c"
        var $261=((($260))|0)==-1; //@line 562 "_testcapimodule.c"
        if ($261) { __label__ = 69; break; } else { __label__ = 71; break; } //@line 562 "_testcapimodule.c"
      case 69: // $bb68
        var $262=_PyErr_Occurred(); //@line 562 "_testcapimodule.c"
        var $263=($262)!=0; //@line 562 "_testcapimodule.c"
        if ($263) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 562 "_testcapimodule.c"
      case 70: // $bb69
        HEAP[$0]=0; //@line 563 "_testcapimodule.c"
        __label__ = 109; break; //@line 563 "_testcapimodule.c"
      case 71: // $bb70
        var $264=HEAP[$value]; //@line 564 "_testcapimodule.c"
        var $265=((($264))|0)!=255; //@line 564 "_testcapimodule.c"
        if ($265) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 564 "_testcapimodule.c"
      case 72: // $bb71
        var $266=_raiseTestError(((__str37)&4294967295), ((__str43)&4294967295)); //@line 565 "_testcapimodule.c"
        HEAP[$0]=$266; //@line 565 "_testcapimodule.c"
        __label__ = 109; break; //@line 565 "_testcapimodule.c"
      case 73: // $bb72
        var $267=HEAP[$overflow]; //@line 567 "_testcapimodule.c"
        var $268=((($267))|0)!=0; //@line 567 "_testcapimodule.c"
        if ($268) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 567 "_testcapimodule.c"
      case 74: // $bb73
        var $269=_raiseTestError(((__str37)&4294967295), ((__str44)&4294967295)); //@line 568 "_testcapimodule.c"
        HEAP[$0]=$269; //@line 568 "_testcapimodule.c"
        __label__ = 109; break; //@line 568 "_testcapimodule.c"
      case 75: // $bb74
        var $270=_PyLong_FromString(((__str45)&4294967295), 0, 16); //@line 571 "_testcapimodule.c"
        HEAP[$num]=$270; //@line 571 "_testcapimodule.c"
        var $271=HEAP[$num]; //@line 572 "_testcapimodule.c"
        var $272=($271)==0; //@line 572 "_testcapimodule.c"
        if ($272) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 572 "_testcapimodule.c"
      case 76: // $bb75
        HEAP[$0]=0; //@line 573 "_testcapimodule.c"
        __label__ = 109; break; //@line 573 "_testcapimodule.c"
      case 77: // $bb76
        HEAP[$overflow]=0; //@line 574 "_testcapimodule.c"
        var $273=HEAP[$num]; //@line 575 "_testcapimodule.c"
        var $274=_PyLong_AsLongAndOverflow($273, $overflow); //@line 575 "_testcapimodule.c"
        HEAP[$value]=$274; //@line 575 "_testcapimodule.c"
        var $275=HEAP[$num]; //@line 576 "_testcapimodule.c"
        var $276=(($275)&4294967295); //@line 576 "_testcapimodule.c"
        var $277=HEAP[$276]; //@line 576 "_testcapimodule.c"
        var $278=((($277) - 1)&4294967295); //@line 576 "_testcapimodule.c"
        var $279=HEAP[$num]; //@line 576 "_testcapimodule.c"
        var $280=(($279)&4294967295); //@line 576 "_testcapimodule.c"
        HEAP[$280]=$278; //@line 576 "_testcapimodule.c"
        var $281=HEAP[$num]; //@line 576 "_testcapimodule.c"
        var $282=(($281)&4294967295); //@line 576 "_testcapimodule.c"
        var $283=HEAP[$282]; //@line 576 "_testcapimodule.c"
        var $284=((($283))|0)==0; //@line 576 "_testcapimodule.c"
        if ($284) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 576 "_testcapimodule.c"
      case 78: // $bb77
        var $285=HEAP[$num]; //@line 576 "_testcapimodule.c"
        var $286=(($285+4)&4294967295); //@line 576 "_testcapimodule.c"
        var $287=HEAP[$286]; //@line 576 "_testcapimodule.c"
        var $288=(($287+24)&4294967295); //@line 576 "_testcapimodule.c"
        var $289=HEAP[$288]; //@line 576 "_testcapimodule.c"
        var $290=HEAP[$num]; //@line 576 "_testcapimodule.c"
        FUNCTION_TABLE[$289]($290); //@line 576 "_testcapimodule.c"
        __label__ = 79; break; //@line 576 "_testcapimodule.c"
      case 79: // $bb78
        var $291=HEAP[$value]; //@line 577 "_testcapimodule.c"
        var $292=((($291))|0)==-1; //@line 577 "_testcapimodule.c"
        if ($292) { __label__ = 80; break; } else { __label__ = 82; break; } //@line 577 "_testcapimodule.c"
      case 80: // $bb79
        var $293=_PyErr_Occurred(); //@line 577 "_testcapimodule.c"
        var $294=($293)!=0; //@line 577 "_testcapimodule.c"
        if ($294) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 577 "_testcapimodule.c"
      case 81: // $bb80
        HEAP[$0]=0; //@line 578 "_testcapimodule.c"
        __label__ = 109; break; //@line 578 "_testcapimodule.c"
      case 82: // $bb81
        var $295=HEAP[$value]; //@line 579 "_testcapimodule.c"
        var $296=((($295))|0)!=-255; //@line 579 "_testcapimodule.c"
        if ($296) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 579 "_testcapimodule.c"
      case 83: // $bb82
        var $297=_raiseTestError(((__str37)&4294967295), ((__str43)&4294967295)); //@line 580 "_testcapimodule.c"
        HEAP[$0]=$297; //@line 580 "_testcapimodule.c"
        __label__ = 109; break; //@line 580 "_testcapimodule.c"
      case 84: // $bb83
        var $298=HEAP[$overflow]; //@line 582 "_testcapimodule.c"
        var $299=((($298))|0)!=0; //@line 582 "_testcapimodule.c"
        if ($299) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 582 "_testcapimodule.c"
      case 85: // $bb84
        var $300=_raiseTestError(((__str37)&4294967295), ((__str46)&4294967295)); //@line 583 "_testcapimodule.c"
        HEAP[$0]=$300; //@line 583 "_testcapimodule.c"
        __label__ = 109; break; //@line 583 "_testcapimodule.c"
      case 86: // $bb85
        var $301=_PyLong_FromLong(2147483647); //@line 586 "_testcapimodule.c"
        HEAP[$num]=$301; //@line 586 "_testcapimodule.c"
        var $302=HEAP[$num]; //@line 587 "_testcapimodule.c"
        var $303=($302)==0; //@line 587 "_testcapimodule.c"
        if ($303) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 587 "_testcapimodule.c"
      case 87: // $bb86
        HEAP[$0]=0; //@line 588 "_testcapimodule.c"
        __label__ = 109; break; //@line 588 "_testcapimodule.c"
      case 88: // $bb87
        HEAP[$overflow]=1234; //@line 589 "_testcapimodule.c"
        var $304=HEAP[$num]; //@line 590 "_testcapimodule.c"
        var $305=_PyLong_AsLongAndOverflow($304, $overflow); //@line 590 "_testcapimodule.c"
        HEAP[$value]=$305; //@line 590 "_testcapimodule.c"
        var $306=HEAP[$num]; //@line 591 "_testcapimodule.c"
        var $307=(($306)&4294967295); //@line 591 "_testcapimodule.c"
        var $308=HEAP[$307]; //@line 591 "_testcapimodule.c"
        var $309=((($308) - 1)&4294967295); //@line 591 "_testcapimodule.c"
        var $310=HEAP[$num]; //@line 591 "_testcapimodule.c"
        var $311=(($310)&4294967295); //@line 591 "_testcapimodule.c"
        HEAP[$311]=$309; //@line 591 "_testcapimodule.c"
        var $312=HEAP[$num]; //@line 591 "_testcapimodule.c"
        var $313=(($312)&4294967295); //@line 591 "_testcapimodule.c"
        var $314=HEAP[$313]; //@line 591 "_testcapimodule.c"
        var $315=((($314))|0)==0; //@line 591 "_testcapimodule.c"
        if ($315) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 591 "_testcapimodule.c"
      case 89: // $bb88
        var $316=HEAP[$num]; //@line 591 "_testcapimodule.c"
        var $317=(($316+4)&4294967295); //@line 591 "_testcapimodule.c"
        var $318=HEAP[$317]; //@line 591 "_testcapimodule.c"
        var $319=(($318+24)&4294967295); //@line 591 "_testcapimodule.c"
        var $320=HEAP[$319]; //@line 591 "_testcapimodule.c"
        var $321=HEAP[$num]; //@line 591 "_testcapimodule.c"
        FUNCTION_TABLE[$320]($321); //@line 591 "_testcapimodule.c"
        __label__ = 90; break; //@line 591 "_testcapimodule.c"
      case 90: // $bb89
        var $322=HEAP[$value]; //@line 592 "_testcapimodule.c"
        var $323=((($322))|0)==-1; //@line 592 "_testcapimodule.c"
        if ($323) { __label__ = 91; break; } else { __label__ = 93; break; } //@line 592 "_testcapimodule.c"
      case 91: // $bb90
        var $324=_PyErr_Occurred(); //@line 592 "_testcapimodule.c"
        var $325=($324)!=0; //@line 592 "_testcapimodule.c"
        if ($325) { __label__ = 92; break; } else { __label__ = 93; break; } //@line 592 "_testcapimodule.c"
      case 92: // $bb91
        HEAP[$0]=0; //@line 593 "_testcapimodule.c"
        __label__ = 109; break; //@line 593 "_testcapimodule.c"
      case 93: // $bb92
        var $326=HEAP[$value]; //@line 594 "_testcapimodule.c"
        var $327=((($326))|0)!=2147483647; //@line 594 "_testcapimodule.c"
        if ($327) { __label__ = 94; break; } else { __label__ = 95; break; } //@line 594 "_testcapimodule.c"
      case 94: // $bb93
        var $328=_raiseTestError(((__str37)&4294967295), ((__str47)&4294967295)); //@line 595 "_testcapimodule.c"
        HEAP[$0]=$328; //@line 595 "_testcapimodule.c"
        __label__ = 109; break; //@line 595 "_testcapimodule.c"
      case 95: // $bb94
        var $329=HEAP[$overflow]; //@line 597 "_testcapimodule.c"
        var $330=((($329))|0)!=0; //@line 597 "_testcapimodule.c"
        if ($330) { __label__ = 96; break; } else { __label__ = 97; break; } //@line 597 "_testcapimodule.c"
      case 96: // $bb95
        var $331=_raiseTestError(((__str37)&4294967295), ((__str44)&4294967295)); //@line 598 "_testcapimodule.c"
        HEAP[$0]=$331; //@line 598 "_testcapimodule.c"
        __label__ = 109; break; //@line 598 "_testcapimodule.c"
      case 97: // $bb96
        var $332=_PyLong_FromLong(-2147483648); //@line 601 "_testcapimodule.c"
        HEAP[$num]=$332; //@line 601 "_testcapimodule.c"
        var $333=HEAP[$num]; //@line 602 "_testcapimodule.c"
        var $334=($333)==0; //@line 602 "_testcapimodule.c"
        if ($334) { __label__ = 98; break; } else { __label__ = 99; break; } //@line 602 "_testcapimodule.c"
      case 98: // $bb97
        HEAP[$0]=0; //@line 603 "_testcapimodule.c"
        __label__ = 109; break; //@line 603 "_testcapimodule.c"
      case 99: // $bb98
        HEAP[$overflow]=0; //@line 604 "_testcapimodule.c"
        var $335=HEAP[$num]; //@line 605 "_testcapimodule.c"
        var $336=_PyLong_AsLongAndOverflow($335, $overflow); //@line 605 "_testcapimodule.c"
        HEAP[$value]=$336; //@line 605 "_testcapimodule.c"
        var $337=HEAP[$num]; //@line 606 "_testcapimodule.c"
        var $338=(($337)&4294967295); //@line 606 "_testcapimodule.c"
        var $339=HEAP[$338]; //@line 606 "_testcapimodule.c"
        var $340=((($339) - 1)&4294967295); //@line 606 "_testcapimodule.c"
        var $341=HEAP[$num]; //@line 606 "_testcapimodule.c"
        var $342=(($341)&4294967295); //@line 606 "_testcapimodule.c"
        HEAP[$342]=$340; //@line 606 "_testcapimodule.c"
        var $343=HEAP[$num]; //@line 606 "_testcapimodule.c"
        var $344=(($343)&4294967295); //@line 606 "_testcapimodule.c"
        var $345=HEAP[$344]; //@line 606 "_testcapimodule.c"
        var $346=((($345))|0)==0; //@line 606 "_testcapimodule.c"
        if ($346) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 606 "_testcapimodule.c"
      case 100: // $bb99
        var $347=HEAP[$num]; //@line 606 "_testcapimodule.c"
        var $348=(($347+4)&4294967295); //@line 606 "_testcapimodule.c"
        var $349=HEAP[$348]; //@line 606 "_testcapimodule.c"
        var $350=(($349+24)&4294967295); //@line 606 "_testcapimodule.c"
        var $351=HEAP[$350]; //@line 606 "_testcapimodule.c"
        var $352=HEAP[$num]; //@line 606 "_testcapimodule.c"
        FUNCTION_TABLE[$351]($352); //@line 606 "_testcapimodule.c"
        __label__ = 101; break; //@line 606 "_testcapimodule.c"
      case 101: // $bb100
        var $353=HEAP[$value]; //@line 607 "_testcapimodule.c"
        var $354=((($353))|0)==-1; //@line 607 "_testcapimodule.c"
        if ($354) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 607 "_testcapimodule.c"
      case 102: // $bb101
        var $355=_PyErr_Occurred(); //@line 607 "_testcapimodule.c"
        var $356=($355)!=0; //@line 607 "_testcapimodule.c"
        if ($356) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 607 "_testcapimodule.c"
      case 103: // $bb102
        HEAP[$0]=0; //@line 608 "_testcapimodule.c"
        __label__ = 109; break; //@line 608 "_testcapimodule.c"
      case 104: // $bb103
        var $357=HEAP[$value]; //@line 609 "_testcapimodule.c"
        var $358=((($357))|0)!=-2147483648; //@line 609 "_testcapimodule.c"
        if ($358) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 609 "_testcapimodule.c"
      case 105: // $bb104
        var $359=_raiseTestError(((__str37)&4294967295), ((__str48)&4294967295)); //@line 610 "_testcapimodule.c"
        HEAP[$0]=$359; //@line 610 "_testcapimodule.c"
        __label__ = 109; break; //@line 610 "_testcapimodule.c"
      case 106: // $bb105
        var $360=HEAP[$overflow]; //@line 612 "_testcapimodule.c"
        var $361=((($360))|0)!=0; //@line 612 "_testcapimodule.c"
        if ($361) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 612 "_testcapimodule.c"
      case 107: // $bb106
        var $362=_raiseTestError(((__str37)&4294967295), ((__str44)&4294967295)); //@line 613 "_testcapimodule.c"
        HEAP[$0]=$362; //@line 613 "_testcapimodule.c"
        __label__ = 109; break; //@line 613 "_testcapimodule.c"
      case 108: // $bb107
        var $363=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 616 "_testcapimodule.c"
        var $364=((($363) + 1)&4294967295); //@line 616 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$364; //@line 616 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 617 "_testcapimodule.c"
        __label__ = 109; break; //@line 617 "_testcapimodule.c"
      case 109: // $bb108
        var $365=HEAP[$0]; //@line 471 "_testcapimodule.c"
        HEAP[$retval]=$365; //@line 471 "_testcapimodule.c"
        __label__ = 110; break; //@line 471 "_testcapimodule.c"
      case 110: // $return
        var $retval109=HEAP[$retval]; //@line 471 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 471 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_long_and_overflow($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $num=__stackBase__+12;
        var $one=__stackBase__+16;
        var $temp=__stackBase__+20;
        var $value=__stackBase__+24;
        var $overflow=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyLong_FromString(((__str36)&4294967295), 0, 16); //@line 634 "_testcapimodule.c"
        HEAP[$num]=$1; //@line 634 "_testcapimodule.c"
        var $2=HEAP[$num]; //@line 635 "_testcapimodule.c"
        var $3=($2)==0; //@line 635 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 635 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 636 "_testcapimodule.c"
        __label__ = 109; break; //@line 636 "_testcapimodule.c"
      case 2: // $bb1
        HEAP[$overflow]=1234; //@line 637 "_testcapimodule.c"
        var $4=HEAP[$num]; //@line 638 "_testcapimodule.c"
        var $5=_PyLong_AsLongLongAndOverflow($4, $overflow); //@line 638 "_testcapimodule.c"
        HEAP[$value]=$5; //@line 638 "_testcapimodule.c"
        var $6=HEAP[$num]; //@line 639 "_testcapimodule.c"
        var $7=(($6)&4294967295); //@line 639 "_testcapimodule.c"
        var $8=HEAP[$7]; //@line 639 "_testcapimodule.c"
        var $9=((($8) - 1)&4294967295); //@line 639 "_testcapimodule.c"
        var $10=HEAP[$num]; //@line 639 "_testcapimodule.c"
        var $11=(($10)&4294967295); //@line 639 "_testcapimodule.c"
        HEAP[$11]=$9; //@line 639 "_testcapimodule.c"
        var $12=HEAP[$num]; //@line 639 "_testcapimodule.c"
        var $13=(($12)&4294967295); //@line 639 "_testcapimodule.c"
        var $14=HEAP[$13]; //@line 639 "_testcapimodule.c"
        var $15=((($14))|0)==0; //@line 639 "_testcapimodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 639 "_testcapimodule.c"
      case 3: // $bb2
        var $16=HEAP[$num]; //@line 639 "_testcapimodule.c"
        var $17=(($16+4)&4294967295); //@line 639 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 639 "_testcapimodule.c"
        var $19=(($18+24)&4294967295); //@line 639 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 639 "_testcapimodule.c"
        var $21=HEAP[$num]; //@line 639 "_testcapimodule.c"
        FUNCTION_TABLE[$20]($21); //@line 639 "_testcapimodule.c"
        __label__ = 4; break; //@line 639 "_testcapimodule.c"
      case 4: // $bb3
        var $22=HEAP[$value]; //@line 640 "_testcapimodule.c"
        var $23=reSign(($22), 64, 0)==-1; //@line 640 "_testcapimodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 640 "_testcapimodule.c"
      case 5: // $bb4
        var $24=_PyErr_Occurred(); //@line 640 "_testcapimodule.c"
        var $25=($24)!=0; //@line 640 "_testcapimodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 640 "_testcapimodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 641 "_testcapimodule.c"
        __label__ = 109; break; //@line 641 "_testcapimodule.c"
      case 7: // $bb6
        var $26=HEAP[$value]; //@line 642 "_testcapimodule.c"
        var $27=reSign(($26), 64, 0)!=-1; //@line 642 "_testcapimodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 642 "_testcapimodule.c"
      case 8: // $bb7
        var $28=_raiseTestError(((__str49)&4294967295), ((__str38)&4294967295)); //@line 643 "_testcapimodule.c"
        HEAP[$0]=$28; //@line 643 "_testcapimodule.c"
        __label__ = 109; break; //@line 643 "_testcapimodule.c"
      case 9: // $bb8
        var $29=HEAP[$overflow]; //@line 645 "_testcapimodule.c"
        var $30=((($29))|0)!=1; //@line 645 "_testcapimodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 645 "_testcapimodule.c"
      case 10: // $bb9
        var $31=_raiseTestError(((__str49)&4294967295), ((__str39)&4294967295)); //@line 646 "_testcapimodule.c"
        HEAP[$0]=$31; //@line 646 "_testcapimodule.c"
        __label__ = 109; break; //@line 646 "_testcapimodule.c"
      case 11: // $bb10
        var $32=_PyLong_FromLongLong(9223372036854776000); //@line 650 "_testcapimodule.c"
        HEAP[$num]=$32; //@line 650 "_testcapimodule.c"
        var $33=HEAP[$num]; //@line 651 "_testcapimodule.c"
        var $34=($33)==0; //@line 651 "_testcapimodule.c"
        if ($34) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 651 "_testcapimodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 652 "_testcapimodule.c"
        __label__ = 109; break; //@line 652 "_testcapimodule.c"
      case 13: // $bb12
        var $35=_PyLong_FromLong(1); //@line 653 "_testcapimodule.c"
        HEAP[$one]=$35; //@line 653 "_testcapimodule.c"
        var $36=HEAP[$one]; //@line 654 "_testcapimodule.c"
        var $37=($36)==0; //@line 654 "_testcapimodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 654 "_testcapimodule.c"
      case 14: // $bb13
        var $38=HEAP[$num]; //@line 655 "_testcapimodule.c"
        var $39=(($38)&4294967295); //@line 655 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 655 "_testcapimodule.c"
        var $41=((($40) - 1)&4294967295); //@line 655 "_testcapimodule.c"
        var $42=HEAP[$num]; //@line 655 "_testcapimodule.c"
        var $43=(($42)&4294967295); //@line 655 "_testcapimodule.c"
        HEAP[$43]=$41; //@line 655 "_testcapimodule.c"
        var $44=HEAP[$num]; //@line 655 "_testcapimodule.c"
        var $45=(($44)&4294967295); //@line 655 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 655 "_testcapimodule.c"
        var $47=((($46))|0)==0; //@line 655 "_testcapimodule.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 655 "_testcapimodule.c"
      case 15: // $bb14
        var $48=HEAP[$num]; //@line 655 "_testcapimodule.c"
        var $49=(($48+4)&4294967295); //@line 655 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 655 "_testcapimodule.c"
        var $51=(($50+24)&4294967295); //@line 655 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 655 "_testcapimodule.c"
        var $53=HEAP[$num]; //@line 655 "_testcapimodule.c"
        FUNCTION_TABLE[$52]($53); //@line 655 "_testcapimodule.c"
        __label__ = 16; break; //@line 655 "_testcapimodule.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 656 "_testcapimodule.c"
        __label__ = 109; break; //@line 656 "_testcapimodule.c"
      case 17: // $bb16
        var $54=HEAP[$num]; //@line 658 "_testcapimodule.c"
        var $55=HEAP[$one]; //@line 658 "_testcapimodule.c"
        var $56=_PyNumber_Add($54, $55); //@line 658 "_testcapimodule.c"
        HEAP[$temp]=$56; //@line 658 "_testcapimodule.c"
        var $57=HEAP[$one]; //@line 659 "_testcapimodule.c"
        var $58=(($57)&4294967295); //@line 659 "_testcapimodule.c"
        var $59=HEAP[$58]; //@line 659 "_testcapimodule.c"
        var $60=((($59) - 1)&4294967295); //@line 659 "_testcapimodule.c"
        var $61=HEAP[$one]; //@line 659 "_testcapimodule.c"
        var $62=(($61)&4294967295); //@line 659 "_testcapimodule.c"
        HEAP[$62]=$60; //@line 659 "_testcapimodule.c"
        var $63=HEAP[$one]; //@line 659 "_testcapimodule.c"
        var $64=(($63)&4294967295); //@line 659 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 659 "_testcapimodule.c"
        var $66=((($65))|0)==0; //@line 659 "_testcapimodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 659 "_testcapimodule.c"
      case 18: // $bb17
        var $67=HEAP[$one]; //@line 659 "_testcapimodule.c"
        var $68=(($67+4)&4294967295); //@line 659 "_testcapimodule.c"
        var $69=HEAP[$68]; //@line 659 "_testcapimodule.c"
        var $70=(($69+24)&4294967295); //@line 659 "_testcapimodule.c"
        var $71=HEAP[$70]; //@line 659 "_testcapimodule.c"
        var $72=HEAP[$one]; //@line 659 "_testcapimodule.c"
        FUNCTION_TABLE[$71]($72); //@line 659 "_testcapimodule.c"
        __label__ = 19; break; //@line 659 "_testcapimodule.c"
      case 19: // $bb18
        var $73=HEAP[$num]; //@line 660 "_testcapimodule.c"
        var $74=(($73)&4294967295); //@line 660 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 660 "_testcapimodule.c"
        var $76=((($75) - 1)&4294967295); //@line 660 "_testcapimodule.c"
        var $77=HEAP[$num]; //@line 660 "_testcapimodule.c"
        var $78=(($77)&4294967295); //@line 660 "_testcapimodule.c"
        HEAP[$78]=$76; //@line 660 "_testcapimodule.c"
        var $79=HEAP[$num]; //@line 660 "_testcapimodule.c"
        var $80=(($79)&4294967295); //@line 660 "_testcapimodule.c"
        var $81=HEAP[$80]; //@line 660 "_testcapimodule.c"
        var $82=((($81))|0)==0; //@line 660 "_testcapimodule.c"
        if ($82) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 660 "_testcapimodule.c"
      case 20: // $bb19
        var $83=HEAP[$num]; //@line 660 "_testcapimodule.c"
        var $84=(($83+4)&4294967295); //@line 660 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 660 "_testcapimodule.c"
        var $86=(($85+24)&4294967295); //@line 660 "_testcapimodule.c"
        var $87=HEAP[$86]; //@line 660 "_testcapimodule.c"
        var $88=HEAP[$num]; //@line 660 "_testcapimodule.c"
        FUNCTION_TABLE[$87]($88); //@line 660 "_testcapimodule.c"
        __label__ = 21; break; //@line 660 "_testcapimodule.c"
      case 21: // $bb20
        var $89=HEAP[$temp]; //@line 661 "_testcapimodule.c"
        HEAP[$num]=$89; //@line 661 "_testcapimodule.c"
        var $90=HEAP[$num]; //@line 662 "_testcapimodule.c"
        var $91=($90)==0; //@line 662 "_testcapimodule.c"
        if ($91) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 662 "_testcapimodule.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 663 "_testcapimodule.c"
        __label__ = 109; break; //@line 663 "_testcapimodule.c"
      case 23: // $bb22
        HEAP[$overflow]=0; //@line 664 "_testcapimodule.c"
        var $92=HEAP[$num]; //@line 665 "_testcapimodule.c"
        var $93=_PyLong_AsLongLongAndOverflow($92, $overflow); //@line 665 "_testcapimodule.c"
        HEAP[$value]=$93; //@line 665 "_testcapimodule.c"
        var $94=HEAP[$num]; //@line 666 "_testcapimodule.c"
        var $95=(($94)&4294967295); //@line 666 "_testcapimodule.c"
        var $96=HEAP[$95]; //@line 666 "_testcapimodule.c"
        var $97=((($96) - 1)&4294967295); //@line 666 "_testcapimodule.c"
        var $98=HEAP[$num]; //@line 666 "_testcapimodule.c"
        var $99=(($98)&4294967295); //@line 666 "_testcapimodule.c"
        HEAP[$99]=$97; //@line 666 "_testcapimodule.c"
        var $100=HEAP[$num]; //@line 666 "_testcapimodule.c"
        var $101=(($100)&4294967295); //@line 666 "_testcapimodule.c"
        var $102=HEAP[$101]; //@line 666 "_testcapimodule.c"
        var $103=((($102))|0)==0; //@line 666 "_testcapimodule.c"
        if ($103) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 666 "_testcapimodule.c"
      case 24: // $bb23
        var $104=HEAP[$num]; //@line 666 "_testcapimodule.c"
        var $105=(($104+4)&4294967295); //@line 666 "_testcapimodule.c"
        var $106=HEAP[$105]; //@line 666 "_testcapimodule.c"
        var $107=(($106+24)&4294967295); //@line 666 "_testcapimodule.c"
        var $108=HEAP[$107]; //@line 666 "_testcapimodule.c"
        var $109=HEAP[$num]; //@line 666 "_testcapimodule.c"
        FUNCTION_TABLE[$108]($109); //@line 666 "_testcapimodule.c"
        __label__ = 25; break; //@line 666 "_testcapimodule.c"
      case 25: // $bb24
        var $110=HEAP[$value]; //@line 667 "_testcapimodule.c"
        var $111=reSign(($110), 64, 0)==-1; //@line 667 "_testcapimodule.c"
        if ($111) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 667 "_testcapimodule.c"
      case 26: // $bb25
        var $112=_PyErr_Occurred(); //@line 667 "_testcapimodule.c"
        var $113=($112)!=0; //@line 667 "_testcapimodule.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 667 "_testcapimodule.c"
      case 27: // $bb26
        HEAP[$0]=0; //@line 668 "_testcapimodule.c"
        __label__ = 109; break; //@line 668 "_testcapimodule.c"
      case 28: // $bb27
        var $114=HEAP[$value]; //@line 669 "_testcapimodule.c"
        var $115=reSign(($114), 64, 0)!=-1; //@line 669 "_testcapimodule.c"
        if ($115) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 669 "_testcapimodule.c"
      case 29: // $bb28
        var $116=_raiseTestError(((__str49)&4294967295), ((__str38)&4294967295)); //@line 670 "_testcapimodule.c"
        HEAP[$0]=$116; //@line 670 "_testcapimodule.c"
        __label__ = 109; break; //@line 670 "_testcapimodule.c"
      case 30: // $bb29
        var $117=HEAP[$overflow]; //@line 672 "_testcapimodule.c"
        var $118=((($117))|0)!=1; //@line 672 "_testcapimodule.c"
        if ($118) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 672 "_testcapimodule.c"
      case 31: // $bb30
        var $119=_raiseTestError(((__str49)&4294967295), ((__str39)&4294967295)); //@line 673 "_testcapimodule.c"
        HEAP[$0]=$119; //@line 673 "_testcapimodule.c"
        __label__ = 109; break; //@line 673 "_testcapimodule.c"
      case 32: // $bb31
        var $120=_PyLong_FromString(((__str40)&4294967295), 0, 16); //@line 678 "_testcapimodule.c"
        HEAP[$num]=$120; //@line 678 "_testcapimodule.c"
        var $121=HEAP[$num]; //@line 679 "_testcapimodule.c"
        var $122=($121)==0; //@line 679 "_testcapimodule.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 679 "_testcapimodule.c"
      case 33: // $bb32
        HEAP[$0]=0; //@line 680 "_testcapimodule.c"
        __label__ = 109; break; //@line 680 "_testcapimodule.c"
      case 34: // $bb33
        HEAP[$overflow]=1234; //@line 681 "_testcapimodule.c"
        var $123=HEAP[$num]; //@line 682 "_testcapimodule.c"
        var $124=_PyLong_AsLongLongAndOverflow($123, $overflow); //@line 682 "_testcapimodule.c"
        HEAP[$value]=$124; //@line 682 "_testcapimodule.c"
        var $125=HEAP[$num]; //@line 683 "_testcapimodule.c"
        var $126=(($125)&4294967295); //@line 683 "_testcapimodule.c"
        var $127=HEAP[$126]; //@line 683 "_testcapimodule.c"
        var $128=((($127) - 1)&4294967295); //@line 683 "_testcapimodule.c"
        var $129=HEAP[$num]; //@line 683 "_testcapimodule.c"
        var $130=(($129)&4294967295); //@line 683 "_testcapimodule.c"
        HEAP[$130]=$128; //@line 683 "_testcapimodule.c"
        var $131=HEAP[$num]; //@line 683 "_testcapimodule.c"
        var $132=(($131)&4294967295); //@line 683 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 683 "_testcapimodule.c"
        var $134=((($133))|0)==0; //@line 683 "_testcapimodule.c"
        if ($134) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 683 "_testcapimodule.c"
      case 35: // $bb34
        var $135=HEAP[$num]; //@line 683 "_testcapimodule.c"
        var $136=(($135+4)&4294967295); //@line 683 "_testcapimodule.c"
        var $137=HEAP[$136]; //@line 683 "_testcapimodule.c"
        var $138=(($137+24)&4294967295); //@line 683 "_testcapimodule.c"
        var $139=HEAP[$138]; //@line 683 "_testcapimodule.c"
        var $140=HEAP[$num]; //@line 683 "_testcapimodule.c"
        FUNCTION_TABLE[$139]($140); //@line 683 "_testcapimodule.c"
        __label__ = 36; break; //@line 683 "_testcapimodule.c"
      case 36: // $bb35
        var $141=HEAP[$value]; //@line 684 "_testcapimodule.c"
        var $142=reSign(($141), 64, 0)==-1; //@line 684 "_testcapimodule.c"
        if ($142) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 684 "_testcapimodule.c"
      case 37: // $bb36
        var $143=_PyErr_Occurred(); //@line 684 "_testcapimodule.c"
        var $144=($143)!=0; //@line 684 "_testcapimodule.c"
        if ($144) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 684 "_testcapimodule.c"
      case 38: // $bb37
        HEAP[$0]=0; //@line 685 "_testcapimodule.c"
        __label__ = 109; break; //@line 685 "_testcapimodule.c"
      case 39: // $bb38
        var $145=HEAP[$value]; //@line 686 "_testcapimodule.c"
        var $146=reSign(($145), 64, 0)!=-1; //@line 686 "_testcapimodule.c"
        if ($146) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 686 "_testcapimodule.c"
      case 40: // $bb39
        var $147=_raiseTestError(((__str49)&4294967295), ((__str38)&4294967295)); //@line 687 "_testcapimodule.c"
        HEAP[$0]=$147; //@line 687 "_testcapimodule.c"
        __label__ = 109; break; //@line 687 "_testcapimodule.c"
      case 41: // $bb40
        var $148=HEAP[$overflow]; //@line 689 "_testcapimodule.c"
        var $149=((($148))|0)!=-1; //@line 689 "_testcapimodule.c"
        if ($149) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 689 "_testcapimodule.c"
      case 42: // $bb41
        var $150=_raiseTestError(((__str49)&4294967295), ((__str41)&4294967295)); //@line 690 "_testcapimodule.c"
        HEAP[$0]=$150; //@line 690 "_testcapimodule.c"
        __label__ = 109; break; //@line 690 "_testcapimodule.c"
      case 43: // $bb42
        var $151=_PyLong_FromLongLong(-9223372036854776000); //@line 694 "_testcapimodule.c"
        HEAP[$num]=$151; //@line 694 "_testcapimodule.c"
        var $152=HEAP[$num]; //@line 695 "_testcapimodule.c"
        var $153=($152)==0; //@line 695 "_testcapimodule.c"
        if ($153) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 695 "_testcapimodule.c"
      case 44: // $bb43
        HEAP[$0]=0; //@line 696 "_testcapimodule.c"
        __label__ = 109; break; //@line 696 "_testcapimodule.c"
      case 45: // $bb44
        var $154=_PyLong_FromLong(1); //@line 697 "_testcapimodule.c"
        HEAP[$one]=$154; //@line 697 "_testcapimodule.c"
        var $155=HEAP[$one]; //@line 698 "_testcapimodule.c"
        var $156=($155)==0; //@line 698 "_testcapimodule.c"
        if ($156) { __label__ = 46; break; } else { __label__ = 49; break; } //@line 698 "_testcapimodule.c"
      case 46: // $bb45
        var $157=HEAP[$num]; //@line 699 "_testcapimodule.c"
        var $158=(($157)&4294967295); //@line 699 "_testcapimodule.c"
        var $159=HEAP[$158]; //@line 699 "_testcapimodule.c"
        var $160=((($159) - 1)&4294967295); //@line 699 "_testcapimodule.c"
        var $161=HEAP[$num]; //@line 699 "_testcapimodule.c"
        var $162=(($161)&4294967295); //@line 699 "_testcapimodule.c"
        HEAP[$162]=$160; //@line 699 "_testcapimodule.c"
        var $163=HEAP[$num]; //@line 699 "_testcapimodule.c"
        var $164=(($163)&4294967295); //@line 699 "_testcapimodule.c"
        var $165=HEAP[$164]; //@line 699 "_testcapimodule.c"
        var $166=((($165))|0)==0; //@line 699 "_testcapimodule.c"
        if ($166) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 699 "_testcapimodule.c"
      case 47: // $bb46
        var $167=HEAP[$num]; //@line 699 "_testcapimodule.c"
        var $168=(($167+4)&4294967295); //@line 699 "_testcapimodule.c"
        var $169=HEAP[$168]; //@line 699 "_testcapimodule.c"
        var $170=(($169+24)&4294967295); //@line 699 "_testcapimodule.c"
        var $171=HEAP[$170]; //@line 699 "_testcapimodule.c"
        var $172=HEAP[$num]; //@line 699 "_testcapimodule.c"
        FUNCTION_TABLE[$171]($172); //@line 699 "_testcapimodule.c"
        __label__ = 48; break; //@line 699 "_testcapimodule.c"
      case 48: // $bb47
        HEAP[$0]=0; //@line 700 "_testcapimodule.c"
        __label__ = 109; break; //@line 700 "_testcapimodule.c"
      case 49: // $bb48
        var $173=HEAP[$num]; //@line 702 "_testcapimodule.c"
        var $174=HEAP[$one]; //@line 702 "_testcapimodule.c"
        var $175=_PyNumber_Subtract($173, $174); //@line 702 "_testcapimodule.c"
        HEAP[$temp]=$175; //@line 702 "_testcapimodule.c"
        var $176=HEAP[$one]; //@line 703 "_testcapimodule.c"
        var $177=(($176)&4294967295); //@line 703 "_testcapimodule.c"
        var $178=HEAP[$177]; //@line 703 "_testcapimodule.c"
        var $179=((($178) - 1)&4294967295); //@line 703 "_testcapimodule.c"
        var $180=HEAP[$one]; //@line 703 "_testcapimodule.c"
        var $181=(($180)&4294967295); //@line 703 "_testcapimodule.c"
        HEAP[$181]=$179; //@line 703 "_testcapimodule.c"
        var $182=HEAP[$one]; //@line 703 "_testcapimodule.c"
        var $183=(($182)&4294967295); //@line 703 "_testcapimodule.c"
        var $184=HEAP[$183]; //@line 703 "_testcapimodule.c"
        var $185=((($184))|0)==0; //@line 703 "_testcapimodule.c"
        if ($185) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 703 "_testcapimodule.c"
      case 50: // $bb49
        var $186=HEAP[$one]; //@line 703 "_testcapimodule.c"
        var $187=(($186+4)&4294967295); //@line 703 "_testcapimodule.c"
        var $188=HEAP[$187]; //@line 703 "_testcapimodule.c"
        var $189=(($188+24)&4294967295); //@line 703 "_testcapimodule.c"
        var $190=HEAP[$189]; //@line 703 "_testcapimodule.c"
        var $191=HEAP[$one]; //@line 703 "_testcapimodule.c"
        FUNCTION_TABLE[$190]($191); //@line 703 "_testcapimodule.c"
        __label__ = 51; break; //@line 703 "_testcapimodule.c"
      case 51: // $bb50
        var $192=HEAP[$num]; //@line 704 "_testcapimodule.c"
        var $193=(($192)&4294967295); //@line 704 "_testcapimodule.c"
        var $194=HEAP[$193]; //@line 704 "_testcapimodule.c"
        var $195=((($194) - 1)&4294967295); //@line 704 "_testcapimodule.c"
        var $196=HEAP[$num]; //@line 704 "_testcapimodule.c"
        var $197=(($196)&4294967295); //@line 704 "_testcapimodule.c"
        HEAP[$197]=$195; //@line 704 "_testcapimodule.c"
        var $198=HEAP[$num]; //@line 704 "_testcapimodule.c"
        var $199=(($198)&4294967295); //@line 704 "_testcapimodule.c"
        var $200=HEAP[$199]; //@line 704 "_testcapimodule.c"
        var $201=((($200))|0)==0; //@line 704 "_testcapimodule.c"
        if ($201) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 704 "_testcapimodule.c"
      case 52: // $bb51
        var $202=HEAP[$num]; //@line 704 "_testcapimodule.c"
        var $203=(($202+4)&4294967295); //@line 704 "_testcapimodule.c"
        var $204=HEAP[$203]; //@line 704 "_testcapimodule.c"
        var $205=(($204+24)&4294967295); //@line 704 "_testcapimodule.c"
        var $206=HEAP[$205]; //@line 704 "_testcapimodule.c"
        var $207=HEAP[$num]; //@line 704 "_testcapimodule.c"
        FUNCTION_TABLE[$206]($207); //@line 704 "_testcapimodule.c"
        __label__ = 53; break; //@line 704 "_testcapimodule.c"
      case 53: // $bb52
        var $208=HEAP[$temp]; //@line 705 "_testcapimodule.c"
        HEAP[$num]=$208; //@line 705 "_testcapimodule.c"
        var $209=HEAP[$num]; //@line 706 "_testcapimodule.c"
        var $210=($209)==0; //@line 706 "_testcapimodule.c"
        if ($210) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 706 "_testcapimodule.c"
      case 54: // $bb53
        HEAP[$0]=0; //@line 707 "_testcapimodule.c"
        __label__ = 109; break; //@line 707 "_testcapimodule.c"
      case 55: // $bb54
        HEAP[$overflow]=0; //@line 708 "_testcapimodule.c"
        var $211=HEAP[$num]; //@line 709 "_testcapimodule.c"
        var $212=_PyLong_AsLongLongAndOverflow($211, $overflow); //@line 709 "_testcapimodule.c"
        HEAP[$value]=$212; //@line 709 "_testcapimodule.c"
        var $213=HEAP[$num]; //@line 710 "_testcapimodule.c"
        var $214=(($213)&4294967295); //@line 710 "_testcapimodule.c"
        var $215=HEAP[$214]; //@line 710 "_testcapimodule.c"
        var $216=((($215) - 1)&4294967295); //@line 710 "_testcapimodule.c"
        var $217=HEAP[$num]; //@line 710 "_testcapimodule.c"
        var $218=(($217)&4294967295); //@line 710 "_testcapimodule.c"
        HEAP[$218]=$216; //@line 710 "_testcapimodule.c"
        var $219=HEAP[$num]; //@line 710 "_testcapimodule.c"
        var $220=(($219)&4294967295); //@line 710 "_testcapimodule.c"
        var $221=HEAP[$220]; //@line 710 "_testcapimodule.c"
        var $222=((($221))|0)==0; //@line 710 "_testcapimodule.c"
        if ($222) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 710 "_testcapimodule.c"
      case 56: // $bb55
        var $223=HEAP[$num]; //@line 710 "_testcapimodule.c"
        var $224=(($223+4)&4294967295); //@line 710 "_testcapimodule.c"
        var $225=HEAP[$224]; //@line 710 "_testcapimodule.c"
        var $226=(($225+24)&4294967295); //@line 710 "_testcapimodule.c"
        var $227=HEAP[$226]; //@line 710 "_testcapimodule.c"
        var $228=HEAP[$num]; //@line 710 "_testcapimodule.c"
        FUNCTION_TABLE[$227]($228); //@line 710 "_testcapimodule.c"
        __label__ = 57; break; //@line 710 "_testcapimodule.c"
      case 57: // $bb56
        var $229=HEAP[$value]; //@line 711 "_testcapimodule.c"
        var $230=reSign(($229), 64, 0)==-1; //@line 711 "_testcapimodule.c"
        if ($230) { __label__ = 58; break; } else { __label__ = 60; break; } //@line 711 "_testcapimodule.c"
      case 58: // $bb57
        var $231=_PyErr_Occurred(); //@line 711 "_testcapimodule.c"
        var $232=($231)!=0; //@line 711 "_testcapimodule.c"
        if ($232) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 711 "_testcapimodule.c"
      case 59: // $bb58
        HEAP[$0]=0; //@line 712 "_testcapimodule.c"
        __label__ = 109; break; //@line 712 "_testcapimodule.c"
      case 60: // $bb59
        var $233=HEAP[$value]; //@line 713 "_testcapimodule.c"
        var $234=reSign(($233), 64, 0)!=-1; //@line 713 "_testcapimodule.c"
        if ($234) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 713 "_testcapimodule.c"
      case 61: // $bb60
        var $235=_raiseTestError(((__str49)&4294967295), ((__str38)&4294967295)); //@line 714 "_testcapimodule.c"
        HEAP[$0]=$235; //@line 714 "_testcapimodule.c"
        __label__ = 109; break; //@line 714 "_testcapimodule.c"
      case 62: // $bb61
        var $236=HEAP[$overflow]; //@line 716 "_testcapimodule.c"
        var $237=((($236))|0)!=-1; //@line 716 "_testcapimodule.c"
        if ($237) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 716 "_testcapimodule.c"
      case 63: // $bb62
        var $238=_raiseTestError(((__str49)&4294967295), ((__str41)&4294967295)); //@line 717 "_testcapimodule.c"
        HEAP[$0]=$238; //@line 717 "_testcapimodule.c"
        __label__ = 109; break; //@line 717 "_testcapimodule.c"
      case 64: // $bb63
        var $239=_PyLong_FromString(((__str42)&4294967295), 0, 16); //@line 721 "_testcapimodule.c"
        HEAP[$num]=$239; //@line 721 "_testcapimodule.c"
        var $240=HEAP[$num]; //@line 722 "_testcapimodule.c"
        var $241=($240)==0; //@line 722 "_testcapimodule.c"
        if ($241) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 722 "_testcapimodule.c"
      case 65: // $bb64
        HEAP[$0]=0; //@line 723 "_testcapimodule.c"
        __label__ = 109; break; //@line 723 "_testcapimodule.c"
      case 66: // $bb65
        HEAP[$overflow]=1234; //@line 724 "_testcapimodule.c"
        var $242=HEAP[$num]; //@line 725 "_testcapimodule.c"
        var $243=_PyLong_AsLongLongAndOverflow($242, $overflow); //@line 725 "_testcapimodule.c"
        HEAP[$value]=$243; //@line 725 "_testcapimodule.c"
        var $244=HEAP[$num]; //@line 726 "_testcapimodule.c"
        var $245=(($244)&4294967295); //@line 726 "_testcapimodule.c"
        var $246=HEAP[$245]; //@line 726 "_testcapimodule.c"
        var $247=((($246) - 1)&4294967295); //@line 726 "_testcapimodule.c"
        var $248=HEAP[$num]; //@line 726 "_testcapimodule.c"
        var $249=(($248)&4294967295); //@line 726 "_testcapimodule.c"
        HEAP[$249]=$247; //@line 726 "_testcapimodule.c"
        var $250=HEAP[$num]; //@line 726 "_testcapimodule.c"
        var $251=(($250)&4294967295); //@line 726 "_testcapimodule.c"
        var $252=HEAP[$251]; //@line 726 "_testcapimodule.c"
        var $253=((($252))|0)==0; //@line 726 "_testcapimodule.c"
        if ($253) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 726 "_testcapimodule.c"
      case 67: // $bb66
        var $254=HEAP[$num]; //@line 726 "_testcapimodule.c"
        var $255=(($254+4)&4294967295); //@line 726 "_testcapimodule.c"
        var $256=HEAP[$255]; //@line 726 "_testcapimodule.c"
        var $257=(($256+24)&4294967295); //@line 726 "_testcapimodule.c"
        var $258=HEAP[$257]; //@line 726 "_testcapimodule.c"
        var $259=HEAP[$num]; //@line 726 "_testcapimodule.c"
        FUNCTION_TABLE[$258]($259); //@line 726 "_testcapimodule.c"
        __label__ = 68; break; //@line 726 "_testcapimodule.c"
      case 68: // $bb67
        var $260=HEAP[$value]; //@line 727 "_testcapimodule.c"
        var $261=reSign(($260), 64, 0)==-1; //@line 727 "_testcapimodule.c"
        if ($261) { __label__ = 69; break; } else { __label__ = 71; break; } //@line 727 "_testcapimodule.c"
      case 69: // $bb68
        var $262=_PyErr_Occurred(); //@line 727 "_testcapimodule.c"
        var $263=($262)!=0; //@line 727 "_testcapimodule.c"
        if ($263) { __label__ = 70; break; } else { __label__ = 71; break; } //@line 727 "_testcapimodule.c"
      case 70: // $bb69
        HEAP[$0]=0; //@line 728 "_testcapimodule.c"
        __label__ = 109; break; //@line 728 "_testcapimodule.c"
      case 71: // $bb70
        var $264=HEAP[$value]; //@line 729 "_testcapimodule.c"
        var $265=reSign(($264), 64, 0)!=255; //@line 729 "_testcapimodule.c"
        if ($265) { __label__ = 72; break; } else { __label__ = 73; break; } //@line 729 "_testcapimodule.c"
      case 72: // $bb71
        var $266=_raiseTestError(((__str49)&4294967295), ((__str43)&4294967295)); //@line 730 "_testcapimodule.c"
        HEAP[$0]=$266; //@line 730 "_testcapimodule.c"
        __label__ = 109; break; //@line 730 "_testcapimodule.c"
      case 73: // $bb72
        var $267=HEAP[$overflow]; //@line 732 "_testcapimodule.c"
        var $268=((($267))|0)!=0; //@line 732 "_testcapimodule.c"
        if ($268) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 732 "_testcapimodule.c"
      case 74: // $bb73
        var $269=_raiseTestError(((__str49)&4294967295), ((__str44)&4294967295)); //@line 733 "_testcapimodule.c"
        HEAP[$0]=$269; //@line 733 "_testcapimodule.c"
        __label__ = 109; break; //@line 733 "_testcapimodule.c"
      case 75: // $bb74
        var $270=_PyLong_FromString(((__str45)&4294967295), 0, 16); //@line 736 "_testcapimodule.c"
        HEAP[$num]=$270; //@line 736 "_testcapimodule.c"
        var $271=HEAP[$num]; //@line 737 "_testcapimodule.c"
        var $272=($271)==0; //@line 737 "_testcapimodule.c"
        if ($272) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 737 "_testcapimodule.c"
      case 76: // $bb75
        HEAP[$0]=0; //@line 738 "_testcapimodule.c"
        __label__ = 109; break; //@line 738 "_testcapimodule.c"
      case 77: // $bb76
        HEAP[$overflow]=0; //@line 739 "_testcapimodule.c"
        var $273=HEAP[$num]; //@line 740 "_testcapimodule.c"
        var $274=_PyLong_AsLongLongAndOverflow($273, $overflow); //@line 740 "_testcapimodule.c"
        HEAP[$value]=$274; //@line 740 "_testcapimodule.c"
        var $275=HEAP[$num]; //@line 741 "_testcapimodule.c"
        var $276=(($275)&4294967295); //@line 741 "_testcapimodule.c"
        var $277=HEAP[$276]; //@line 741 "_testcapimodule.c"
        var $278=((($277) - 1)&4294967295); //@line 741 "_testcapimodule.c"
        var $279=HEAP[$num]; //@line 741 "_testcapimodule.c"
        var $280=(($279)&4294967295); //@line 741 "_testcapimodule.c"
        HEAP[$280]=$278; //@line 741 "_testcapimodule.c"
        var $281=HEAP[$num]; //@line 741 "_testcapimodule.c"
        var $282=(($281)&4294967295); //@line 741 "_testcapimodule.c"
        var $283=HEAP[$282]; //@line 741 "_testcapimodule.c"
        var $284=((($283))|0)==0; //@line 741 "_testcapimodule.c"
        if ($284) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 741 "_testcapimodule.c"
      case 78: // $bb77
        var $285=HEAP[$num]; //@line 741 "_testcapimodule.c"
        var $286=(($285+4)&4294967295); //@line 741 "_testcapimodule.c"
        var $287=HEAP[$286]; //@line 741 "_testcapimodule.c"
        var $288=(($287+24)&4294967295); //@line 741 "_testcapimodule.c"
        var $289=HEAP[$288]; //@line 741 "_testcapimodule.c"
        var $290=HEAP[$num]; //@line 741 "_testcapimodule.c"
        FUNCTION_TABLE[$289]($290); //@line 741 "_testcapimodule.c"
        __label__ = 79; break; //@line 741 "_testcapimodule.c"
      case 79: // $bb78
        var $291=HEAP[$value]; //@line 742 "_testcapimodule.c"
        var $292=reSign(($291), 64, 0)==-1; //@line 742 "_testcapimodule.c"
        if ($292) { __label__ = 80; break; } else { __label__ = 82; break; } //@line 742 "_testcapimodule.c"
      case 80: // $bb79
        var $293=_PyErr_Occurred(); //@line 742 "_testcapimodule.c"
        var $294=($293)!=0; //@line 742 "_testcapimodule.c"
        if ($294) { __label__ = 81; break; } else { __label__ = 82; break; } //@line 742 "_testcapimodule.c"
      case 81: // $bb80
        HEAP[$0]=0; //@line 743 "_testcapimodule.c"
        __label__ = 109; break; //@line 743 "_testcapimodule.c"
      case 82: // $bb81
        var $295=HEAP[$value]; //@line 744 "_testcapimodule.c"
        var $296=reSign(($295), 64, 0)!=-255; //@line 744 "_testcapimodule.c"
        if ($296) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 744 "_testcapimodule.c"
      case 83: // $bb82
        var $297=_raiseTestError(((__str49)&4294967295), ((__str43)&4294967295)); //@line 745 "_testcapimodule.c"
        HEAP[$0]=$297; //@line 745 "_testcapimodule.c"
        __label__ = 109; break; //@line 745 "_testcapimodule.c"
      case 84: // $bb83
        var $298=HEAP[$overflow]; //@line 747 "_testcapimodule.c"
        var $299=((($298))|0)!=0; //@line 747 "_testcapimodule.c"
        if ($299) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 747 "_testcapimodule.c"
      case 85: // $bb84
        var $300=_raiseTestError(((__str49)&4294967295), ((__str46)&4294967295)); //@line 748 "_testcapimodule.c"
        HEAP[$0]=$300; //@line 748 "_testcapimodule.c"
        __label__ = 109; break; //@line 748 "_testcapimodule.c"
      case 86: // $bb85
        var $301=_PyLong_FromLongLong(9223372036854776000); //@line 751 "_testcapimodule.c"
        HEAP[$num]=$301; //@line 751 "_testcapimodule.c"
        var $302=HEAP[$num]; //@line 752 "_testcapimodule.c"
        var $303=($302)==0; //@line 752 "_testcapimodule.c"
        if ($303) { __label__ = 87; break; } else { __label__ = 88; break; } //@line 752 "_testcapimodule.c"
      case 87: // $bb86
        HEAP[$0]=0; //@line 753 "_testcapimodule.c"
        __label__ = 109; break; //@line 753 "_testcapimodule.c"
      case 88: // $bb87
        HEAP[$overflow]=1234; //@line 754 "_testcapimodule.c"
        var $304=HEAP[$num]; //@line 755 "_testcapimodule.c"
        var $305=_PyLong_AsLongLongAndOverflow($304, $overflow); //@line 755 "_testcapimodule.c"
        HEAP[$value]=$305; //@line 755 "_testcapimodule.c"
        var $306=HEAP[$num]; //@line 756 "_testcapimodule.c"
        var $307=(($306)&4294967295); //@line 756 "_testcapimodule.c"
        var $308=HEAP[$307]; //@line 756 "_testcapimodule.c"
        var $309=((($308) - 1)&4294967295); //@line 756 "_testcapimodule.c"
        var $310=HEAP[$num]; //@line 756 "_testcapimodule.c"
        var $311=(($310)&4294967295); //@line 756 "_testcapimodule.c"
        HEAP[$311]=$309; //@line 756 "_testcapimodule.c"
        var $312=HEAP[$num]; //@line 756 "_testcapimodule.c"
        var $313=(($312)&4294967295); //@line 756 "_testcapimodule.c"
        var $314=HEAP[$313]; //@line 756 "_testcapimodule.c"
        var $315=((($314))|0)==0; //@line 756 "_testcapimodule.c"
        if ($315) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 756 "_testcapimodule.c"
      case 89: // $bb88
        var $316=HEAP[$num]; //@line 756 "_testcapimodule.c"
        var $317=(($316+4)&4294967295); //@line 756 "_testcapimodule.c"
        var $318=HEAP[$317]; //@line 756 "_testcapimodule.c"
        var $319=(($318+24)&4294967295); //@line 756 "_testcapimodule.c"
        var $320=HEAP[$319]; //@line 756 "_testcapimodule.c"
        var $321=HEAP[$num]; //@line 756 "_testcapimodule.c"
        FUNCTION_TABLE[$320]($321); //@line 756 "_testcapimodule.c"
        __label__ = 90; break; //@line 756 "_testcapimodule.c"
      case 90: // $bb89
        var $322=HEAP[$value]; //@line 757 "_testcapimodule.c"
        var $323=reSign(($322), 64, 0)==-1; //@line 757 "_testcapimodule.c"
        if ($323) { __label__ = 91; break; } else { __label__ = 93; break; } //@line 757 "_testcapimodule.c"
      case 91: // $bb90
        var $324=_PyErr_Occurred(); //@line 757 "_testcapimodule.c"
        var $325=($324)!=0; //@line 757 "_testcapimodule.c"
        if ($325) { __label__ = 92; break; } else { __label__ = 93; break; } //@line 757 "_testcapimodule.c"
      case 92: // $bb91
        HEAP[$0]=0; //@line 758 "_testcapimodule.c"
        __label__ = 109; break; //@line 758 "_testcapimodule.c"
      case 93: // $bb92
        var $326=HEAP[$value]; //@line 759 "_testcapimodule.c"
        var $327=reSign(($326), 64, 0)!=-9223372036854776000; //@line 759 "_testcapimodule.c"
        if ($327) { __label__ = 94; break; } else { __label__ = 95; break; } //@line 759 "_testcapimodule.c"
      case 94: // $bb93
        var $328=_raiseTestError(((__str49)&4294967295), ((__str50)&4294967295)); //@line 760 "_testcapimodule.c"
        HEAP[$0]=$328; //@line 760 "_testcapimodule.c"
        __label__ = 109; break; //@line 760 "_testcapimodule.c"
      case 95: // $bb94
        var $329=HEAP[$overflow]; //@line 762 "_testcapimodule.c"
        var $330=((($329))|0)!=0; //@line 762 "_testcapimodule.c"
        if ($330) { __label__ = 96; break; } else { __label__ = 97; break; } //@line 762 "_testcapimodule.c"
      case 96: // $bb95
        var $331=_raiseTestError(((__str49)&4294967295), ((__str44)&4294967295)); //@line 763 "_testcapimodule.c"
        HEAP[$0]=$331; //@line 763 "_testcapimodule.c"
        __label__ = 109; break; //@line 763 "_testcapimodule.c"
      case 97: // $bb96
        var $332=_PyLong_FromLongLong(-9223372036854776000); //@line 766 "_testcapimodule.c"
        HEAP[$num]=$332; //@line 766 "_testcapimodule.c"
        var $333=HEAP[$num]; //@line 767 "_testcapimodule.c"
        var $334=($333)==0; //@line 767 "_testcapimodule.c"
        if ($334) { __label__ = 98; break; } else { __label__ = 99; break; } //@line 767 "_testcapimodule.c"
      case 98: // $bb97
        HEAP[$0]=0; //@line 768 "_testcapimodule.c"
        __label__ = 109; break; //@line 768 "_testcapimodule.c"
      case 99: // $bb98
        HEAP[$overflow]=0; //@line 769 "_testcapimodule.c"
        var $335=HEAP[$num]; //@line 770 "_testcapimodule.c"
        var $336=_PyLong_AsLongLongAndOverflow($335, $overflow); //@line 770 "_testcapimodule.c"
        HEAP[$value]=$336; //@line 770 "_testcapimodule.c"
        var $337=HEAP[$num]; //@line 771 "_testcapimodule.c"
        var $338=(($337)&4294967295); //@line 771 "_testcapimodule.c"
        var $339=HEAP[$338]; //@line 771 "_testcapimodule.c"
        var $340=((($339) - 1)&4294967295); //@line 771 "_testcapimodule.c"
        var $341=HEAP[$num]; //@line 771 "_testcapimodule.c"
        var $342=(($341)&4294967295); //@line 771 "_testcapimodule.c"
        HEAP[$342]=$340; //@line 771 "_testcapimodule.c"
        var $343=HEAP[$num]; //@line 771 "_testcapimodule.c"
        var $344=(($343)&4294967295); //@line 771 "_testcapimodule.c"
        var $345=HEAP[$344]; //@line 771 "_testcapimodule.c"
        var $346=((($345))|0)==0; //@line 771 "_testcapimodule.c"
        if ($346) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 771 "_testcapimodule.c"
      case 100: // $bb99
        var $347=HEAP[$num]; //@line 771 "_testcapimodule.c"
        var $348=(($347+4)&4294967295); //@line 771 "_testcapimodule.c"
        var $349=HEAP[$348]; //@line 771 "_testcapimodule.c"
        var $350=(($349+24)&4294967295); //@line 771 "_testcapimodule.c"
        var $351=HEAP[$350]; //@line 771 "_testcapimodule.c"
        var $352=HEAP[$num]; //@line 771 "_testcapimodule.c"
        FUNCTION_TABLE[$351]($352); //@line 771 "_testcapimodule.c"
        __label__ = 101; break; //@line 771 "_testcapimodule.c"
      case 101: // $bb100
        var $353=HEAP[$value]; //@line 772 "_testcapimodule.c"
        var $354=reSign(($353), 64, 0)==-1; //@line 772 "_testcapimodule.c"
        if ($354) { __label__ = 102; break; } else { __label__ = 104; break; } //@line 772 "_testcapimodule.c"
      case 102: // $bb101
        var $355=_PyErr_Occurred(); //@line 772 "_testcapimodule.c"
        var $356=($355)!=0; //@line 772 "_testcapimodule.c"
        if ($356) { __label__ = 103; break; } else { __label__ = 104; break; } //@line 772 "_testcapimodule.c"
      case 103: // $bb102
        HEAP[$0]=0; //@line 773 "_testcapimodule.c"
        __label__ = 109; break; //@line 773 "_testcapimodule.c"
      case 104: // $bb103
        var $357=HEAP[$value]; //@line 774 "_testcapimodule.c"
        var $358=reSign(($357), 64, 0)!=-9223372036854776000; //@line 774 "_testcapimodule.c"
        if ($358) { __label__ = 105; break; } else { __label__ = 106; break; } //@line 774 "_testcapimodule.c"
      case 105: // $bb104
        var $359=_raiseTestError(((__str49)&4294967295), ((__str51)&4294967295)); //@line 775 "_testcapimodule.c"
        HEAP[$0]=$359; //@line 775 "_testcapimodule.c"
        __label__ = 109; break; //@line 775 "_testcapimodule.c"
      case 106: // $bb105
        var $360=HEAP[$overflow]; //@line 777 "_testcapimodule.c"
        var $361=((($360))|0)!=0; //@line 777 "_testcapimodule.c"
        if ($361) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 777 "_testcapimodule.c"
      case 107: // $bb106
        var $362=_raiseTestError(((__str49)&4294967295), ((__str44)&4294967295)); //@line 778 "_testcapimodule.c"
        HEAP[$0]=$362; //@line 778 "_testcapimodule.c"
        __label__ = 109; break; //@line 778 "_testcapimodule.c"
      case 108: // $bb107
        var $363=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 781 "_testcapimodule.c"
        var $364=((($363) + 1)&4294967295); //@line 781 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$364; //@line 781 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 782 "_testcapimodule.c"
        __label__ = 109; break; //@line 782 "_testcapimodule.c"
      case 109: // $bb108
        var $365=HEAP[$0]; //@line 636 "_testcapimodule.c"
        HEAP[$retval]=$365; //@line 636 "_testcapimodule.c"
        __label__ = 110; break; //@line 636 "_testcapimodule.c"
      case 110: // $return
        var $retval109=HEAP[$retval]; //@line 636 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 636 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_L_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $tuple=__stackBase__+12;
        var $num=__stackBase__+16;
        var $value=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyTuple_New(1); //@line 795 "_testcapimodule.c"
        HEAP[$tuple]=$1; //@line 795 "_testcapimodule.c"
        var $2=HEAP[$tuple]; //@line 796 "_testcapimodule.c"
        var $3=($2)==0; //@line 796 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 796 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 797 "_testcapimodule.c"
        __label__ = 19; break; //@line 797 "_testcapimodule.c"
      case 2: // $bb1
        var $4=_PyLong_FromLong(42); //@line 799 "_testcapimodule.c"
        HEAP[$num]=$4; //@line 799 "_testcapimodule.c"
        var $5=HEAP[$num]; //@line 800 "_testcapimodule.c"
        var $6=($5)==0; //@line 800 "_testcapimodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 800 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 801 "_testcapimodule.c"
        __label__ = 19; break; //@line 801 "_testcapimodule.c"
      case 4: // $bb3
        var $7=HEAP[$tuple]; //@line 803 "_testcapimodule.c"
        var $8=$7; //@line 803 "_testcapimodule.c"
        var $9=(($8+12)&4294967295); //@line 803 "_testcapimodule.c"
        var $10=(($9)&4294967295); //@line 803 "_testcapimodule.c"
        var $11=HEAP[$num]; //@line 803 "_testcapimodule.c"
        HEAP[$10]=$11; //@line 803 "_testcapimodule.c"
        HEAP[$value]=-1; //@line 805 "_testcapimodule.c"
        var $12=HEAP[$tuple]; //@line 806 "_testcapimodule.c"
        var $13=_PyArg_ParseTuple($12, ((__str52)&4294967295), $value); //@line 806 "_testcapimodule.c"
        var $14=((($13))|0) < 0; //@line 806 "_testcapimodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 806 "_testcapimodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 807 "_testcapimodule.c"
        __label__ = 19; break; //@line 807 "_testcapimodule.c"
      case 6: // $bb5
        var $15=HEAP[$value]; //@line 808 "_testcapimodule.c"
        var $16=reSign(($15), 64, 0)!=42; //@line 808 "_testcapimodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 808 "_testcapimodule.c"
      case 7: // $bb6
        var $17=_raiseTestError(((__str53)&4294967295), ((__str54)&4294967295)); //@line 809 "_testcapimodule.c"
        HEAP[$0]=$17; //@line 809 "_testcapimodule.c"
        __label__ = 19; break; //@line 809 "_testcapimodule.c"
      case 8: // $bb7
        var $18=HEAP[$num]; //@line 812 "_testcapimodule.c"
        var $19=(($18)&4294967295); //@line 812 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 812 "_testcapimodule.c"
        var $21=((($20) - 1)&4294967295); //@line 812 "_testcapimodule.c"
        var $22=HEAP[$num]; //@line 812 "_testcapimodule.c"
        var $23=(($22)&4294967295); //@line 812 "_testcapimodule.c"
        HEAP[$23]=$21; //@line 812 "_testcapimodule.c"
        var $24=HEAP[$num]; //@line 812 "_testcapimodule.c"
        var $25=(($24)&4294967295); //@line 812 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 812 "_testcapimodule.c"
        var $27=((($26))|0)==0; //@line 812 "_testcapimodule.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 812 "_testcapimodule.c"
      case 9: // $bb8
        var $28=HEAP[$num]; //@line 812 "_testcapimodule.c"
        var $29=(($28+4)&4294967295); //@line 812 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 812 "_testcapimodule.c"
        var $31=(($30+24)&4294967295); //@line 812 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 812 "_testcapimodule.c"
        var $33=HEAP[$num]; //@line 812 "_testcapimodule.c"
        FUNCTION_TABLE[$32]($33); //@line 812 "_testcapimodule.c"
        __label__ = 10; break; //@line 812 "_testcapimodule.c"
      case 10: // $bb9
        var $34=_PyInt_FromLong(42); //@line 813 "_testcapimodule.c"
        HEAP[$num]=$34; //@line 813 "_testcapimodule.c"
        var $35=HEAP[$num]; //@line 814 "_testcapimodule.c"
        var $36=($35)==0; //@line 814 "_testcapimodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 814 "_testcapimodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 815 "_testcapimodule.c"
        __label__ = 19; break; //@line 815 "_testcapimodule.c"
      case 12: // $bb11
        var $37=HEAP[$tuple]; //@line 817 "_testcapimodule.c"
        var $38=$37; //@line 817 "_testcapimodule.c"
        var $39=(($38+12)&4294967295); //@line 817 "_testcapimodule.c"
        var $40=(($39)&4294967295); //@line 817 "_testcapimodule.c"
        var $41=HEAP[$num]; //@line 817 "_testcapimodule.c"
        HEAP[$40]=$41; //@line 817 "_testcapimodule.c"
        HEAP[$value]=-1; //@line 819 "_testcapimodule.c"
        var $42=HEAP[$tuple]; //@line 820 "_testcapimodule.c"
        var $43=_PyArg_ParseTuple($42, ((__str52)&4294967295), $value); //@line 820 "_testcapimodule.c"
        var $44=((($43))|0) < 0; //@line 820 "_testcapimodule.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 820 "_testcapimodule.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 821 "_testcapimodule.c"
        __label__ = 19; break; //@line 821 "_testcapimodule.c"
      case 14: // $bb13
        var $45=HEAP[$value]; //@line 822 "_testcapimodule.c"
        var $46=reSign(($45), 64, 0)!=42; //@line 822 "_testcapimodule.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 822 "_testcapimodule.c"
      case 15: // $bb14
        var $47=_raiseTestError(((__str53)&4294967295), ((__str55)&4294967295)); //@line 823 "_testcapimodule.c"
        HEAP[$0]=$47; //@line 823 "_testcapimodule.c"
        __label__ = 19; break; //@line 823 "_testcapimodule.c"
      case 16: // $bb15
        var $48=HEAP[$tuple]; //@line 826 "_testcapimodule.c"
        var $49=(($48)&4294967295); //@line 826 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 826 "_testcapimodule.c"
        var $51=((($50) - 1)&4294967295); //@line 826 "_testcapimodule.c"
        var $52=HEAP[$tuple]; //@line 826 "_testcapimodule.c"
        var $53=(($52)&4294967295); //@line 826 "_testcapimodule.c"
        HEAP[$53]=$51; //@line 826 "_testcapimodule.c"
        var $54=HEAP[$tuple]; //@line 826 "_testcapimodule.c"
        var $55=(($54)&4294967295); //@line 826 "_testcapimodule.c"
        var $56=HEAP[$55]; //@line 826 "_testcapimodule.c"
        var $57=((($56))|0)==0; //@line 826 "_testcapimodule.c"
        if ($57) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 826 "_testcapimodule.c"
      case 17: // $bb16
        var $58=HEAP[$tuple]; //@line 826 "_testcapimodule.c"
        var $59=(($58+4)&4294967295); //@line 826 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 826 "_testcapimodule.c"
        var $61=(($60+24)&4294967295); //@line 826 "_testcapimodule.c"
        var $62=HEAP[$61]; //@line 826 "_testcapimodule.c"
        var $63=HEAP[$tuple]; //@line 826 "_testcapimodule.c"
        FUNCTION_TABLE[$62]($63); //@line 826 "_testcapimodule.c"
        __label__ = 18; break; //@line 826 "_testcapimodule.c"
      case 18: // $bb17
        var $64=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 827 "_testcapimodule.c"
        var $65=((($64) + 1)&4294967295); //@line 827 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$65; //@line 827 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 828 "_testcapimodule.c"
        __label__ = 19; break; //@line 828 "_testcapimodule.c"
      case 19: // $bb18
        var $66=HEAP[$0]; //@line 797 "_testcapimodule.c"
        HEAP[$retval]=$66; //@line 797 "_testcapimodule.c"
        __label__ = 20; break; //@line 797 "_testcapimodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 797 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 797 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_tuple($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $a=__stackBase__+16;
        var $b=__stackBase__+20;
        var $c=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 838 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str56)&4294967295), $a, $b, $c); //@line 838 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 838 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 838 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 839 "_testcapimodule.c"
        __label__ = 3; break; //@line 839 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$c]; //@line 840 "_testcapimodule.c"
        var $5=HEAP[$b]; //@line 840 "_testcapimodule.c"
        var $6=HEAP[$a]; //@line 840 "_testcapimodule.c"
        var $7=_Py_BuildValue(((__str57)&4294967295), $6, $5, $4); //@line 840 "_testcapimodule.c"
        HEAP[$0]=$7; //@line 840 "_testcapimodule.c"
        __label__ = 3; break; //@line 840 "_testcapimodule.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 839 "_testcapimodule.c"
        HEAP[$retval]=$8; //@line 839 "_testcapimodule.c"
        __label__ = 4; break; //@line 839 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 839 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 839 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_keywords($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $int_args=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        var $int_args1=$int_args; //@line 848 "_testcapimodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($int_args1, _C_59_9780, 40, 4, 0); //@line 848 "_testcapimodule.c"
        var $1=HEAP[_fmt_9778]; //@line 850 "_testcapimodule.c"
        var $2=HEAP[$args_addr]; //@line 850 "_testcapimodule.c"
        var $3=HEAP[$kwargs_addr]; //@line 850 "_testcapimodule.c"
        var $4=(($int_args)&4294967295); //@line 850 "_testcapimodule.c"
        var $5=(($int_args+4)&4294967295); //@line 850 "_testcapimodule.c"
        var $6=(($int_args+8)&4294967295); //@line 850 "_testcapimodule.c"
        var $7=(($int_args+12)&4294967295); //@line 850 "_testcapimodule.c"
        var $8=(($int_args+16)&4294967295); //@line 850 "_testcapimodule.c"
        var $9=(($int_args+20)&4294967295); //@line 850 "_testcapimodule.c"
        var $10=(($int_args+24)&4294967295); //@line 850 "_testcapimodule.c"
        var $11=(($int_args+28)&4294967295); //@line 850 "_testcapimodule.c"
        var $12=(($int_args+32)&4294967295); //@line 850 "_testcapimodule.c"
        var $13=(($int_args+36)&4294967295); //@line 850 "_testcapimodule.c"
        var $14=_PyArg_ParseTupleAndKeywords($2, $3, $1, ((_keywords_9777)&4294967295), $4, $5, $6, $7, $8, $9, $10, $11, $12, $13); //@line 850 "_testcapimodule.c"
        var $15=((($14))|0)==0; //@line 850 "_testcapimodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 850 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 853 "_testcapimodule.c"
        __label__ = 3; break; //@line 853 "_testcapimodule.c"
      case 2: // $bb2
        var $16=(($int_args+36)&4294967295); //@line 854 "_testcapimodule.c"
        var $17=HEAP[$16]; //@line 854 "_testcapimodule.c"
        var $18=(($int_args+32)&4294967295); //@line 854 "_testcapimodule.c"
        var $19=HEAP[$18]; //@line 854 "_testcapimodule.c"
        var $20=(($int_args+28)&4294967295); //@line 854 "_testcapimodule.c"
        var $21=HEAP[$20]; //@line 854 "_testcapimodule.c"
        var $22=(($int_args+24)&4294967295); //@line 854 "_testcapimodule.c"
        var $23=HEAP[$22]; //@line 854 "_testcapimodule.c"
        var $24=(($int_args+20)&4294967295); //@line 854 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 854 "_testcapimodule.c"
        var $26=(($int_args+16)&4294967295); //@line 854 "_testcapimodule.c"
        var $27=HEAP[$26]; //@line 854 "_testcapimodule.c"
        var $28=(($int_args+12)&4294967295); //@line 854 "_testcapimodule.c"
        var $29=HEAP[$28]; //@line 854 "_testcapimodule.c"
        var $30=(($int_args+8)&4294967295); //@line 854 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 854 "_testcapimodule.c"
        var $32=(($int_args+4)&4294967295); //@line 854 "_testcapimodule.c"
        var $33=HEAP[$32]; //@line 854 "_testcapimodule.c"
        var $34=(($int_args)&4294967295); //@line 854 "_testcapimodule.c"
        var $35=HEAP[$34]; //@line 854 "_testcapimodule.c"
        var $36=_Py_BuildValue(((__str64)&4294967295), $35, $33, $31, $29, $27, $25, $23, $21, $19, $17); //@line 854 "_testcapimodule.c"
        HEAP[$0]=$36; //@line 854 "_testcapimodule.c"
        __label__ = 3; break; //@line 854 "_testcapimodule.c"
      case 3: // $bb3
        var $37=HEAP[$0]; //@line 853 "_testcapimodule.c"
        HEAP[$retval]=$37; //@line 853 "_testcapimodule.c"
        __label__ = 4; break; //@line 853 "_testcapimodule.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 853 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 853 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_b($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 866 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str65)&4294967295), $value); //@line 866 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 866 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 866 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 867 "_testcapimodule.c"
        __label__ = 3; break; //@line 867 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 868 "_testcapimodule.c"
        var $5=unSign(($4), 8, 0); //@line 868 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 868 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 868 "_testcapimodule.c"
        __label__ = 3; break; //@line 868 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 867 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 867 "_testcapimodule.c"
        __label__ = 4; break; //@line 867 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 867 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 867 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_B($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 875 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str66)&4294967295), $value); //@line 875 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 875 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 875 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 876 "_testcapimodule.c"
        __label__ = 3; break; //@line 876 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 877 "_testcapimodule.c"
        var $5=unSign(($4), 8, 0); //@line 877 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 877 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 877 "_testcapimodule.c"
        __label__ = 3; break; //@line 877 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 876 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 876 "_testcapimodule.c"
        __label__ = 4; break; //@line 876 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 876 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 876 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_h($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 884 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str67)&4294967295), $value); //@line 884 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 884 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 884 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 885 "_testcapimodule.c"
        __label__ = 3; break; //@line 885 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 886 "_testcapimodule.c"
        var $5=reSign(($4), 16, 0); //@line 886 "_testcapimodule.c"
        var $6=_PyLong_FromLong($5); //@line 886 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 886 "_testcapimodule.c"
        __label__ = 3; break; //@line 886 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 885 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 885 "_testcapimodule.c"
        __label__ = 4; break; //@line 885 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 885 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 885 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_H($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 18; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 18);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 893 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str68)&4294967295), $value); //@line 893 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 893 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 893 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 894 "_testcapimodule.c"
        __label__ = 3; break; //@line 894 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 895 "_testcapimodule.c"
        var $5=unSign(($4), 16, 0); //@line 895 "_testcapimodule.c"
        var $6=_PyLong_FromUnsignedLong($5); //@line 895 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 895 "_testcapimodule.c"
        __label__ = 3; break; //@line 895 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 894 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 894 "_testcapimodule.c"
        __label__ = 4; break; //@line 894 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 894 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 894 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_I($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 902 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str69)&4294967295), $value); //@line 902 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 902 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 902 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 903 "_testcapimodule.c"
        __label__ = 3; break; //@line 903 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 904 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLong($4); //@line 904 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 904 "_testcapimodule.c"
        __label__ = 3; break; //@line 904 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 903 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 903 "_testcapimodule.c"
        __label__ = 4; break; //@line 903 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 903 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 903 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_k($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 911 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str70)&4294967295), $value); //@line 911 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 911 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 912 "_testcapimodule.c"
        __label__ = 3; break; //@line 912 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 913 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLong($4); //@line 913 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 913 "_testcapimodule.c"
        __label__ = 3; break; //@line 913 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 912 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 912 "_testcapimodule.c"
        __label__ = 4; break; //@line 912 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 912 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 912 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_i($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 920 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str71)&4294967295), $value); //@line 920 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 920 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 920 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 921 "_testcapimodule.c"
        __label__ = 3; break; //@line 921 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 922 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 922 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 922 "_testcapimodule.c"
        __label__ = 3; break; //@line 922 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 921 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 921 "_testcapimodule.c"
        __label__ = 4; break; //@line 921 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 921 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 921 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_l($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 929 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str72)&4294967295), $value); //@line 929 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 929 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 929 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 930 "_testcapimodule.c"
        __label__ = 3; break; //@line 930 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 931 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 931 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 931 "_testcapimodule.c"
        __label__ = 3; break; //@line 931 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 930 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 930 "_testcapimodule.c"
        __label__ = 4; break; //@line 930 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 930 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 930 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_n($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 938 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str73)&4294967295), $value); //@line 938 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 938 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 938 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 939 "_testcapimodule.c"
        __label__ = 3; break; //@line 939 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 940 "_testcapimodule.c"
        var $5=_PyInt_FromSsize_t($4); //@line 940 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 940 "_testcapimodule.c"
        __label__ = 3; break; //@line 940 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 939 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 939 "_testcapimodule.c"
        __label__ = 4; break; //@line 939 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 939 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 939 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_L($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 948 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str74)&4294967295), $value); //@line 948 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 948 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 948 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 949 "_testcapimodule.c"
        __label__ = 3; break; //@line 949 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 950 "_testcapimodule.c"
        var $5=_PyLong_FromLongLong($4); //@line 950 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 950 "_testcapimodule.c"
        __label__ = 3; break; //@line 950 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 949 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 949 "_testcapimodule.c"
        __label__ = 4; break; //@line 949 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 949 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 949 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getargs_K($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 957 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str75)&4294967295), $value); //@line 957 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 957 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 957 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 958 "_testcapimodule.c"
        __label__ = 3; break; //@line 958 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$value]; //@line 959 "_testcapimodule.c"
        var $5=_PyLong_FromUnsignedLongLong($4); //@line 959 "_testcapimodule.c"
        HEAP[$0]=$5; //@line 959 "_testcapimodule.c"
        __label__ = 3; break; //@line 959 "_testcapimodule.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 958 "_testcapimodule.c"
        HEAP[$retval]=$6; //@line 958 "_testcapimodule.c"
        __label__ = 4; break; //@line 958 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 958 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 958 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_k_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $tuple=__stackBase__+12;
        var $num=__stackBase__+16;
        var $value=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyTuple_New(1); //@line 971 "_testcapimodule.c"
        HEAP[$tuple]=$1; //@line 971 "_testcapimodule.c"
        var $2=HEAP[$tuple]; //@line 972 "_testcapimodule.c"
        var $3=($2)==0; //@line 972 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 972 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 973 "_testcapimodule.c"
        __label__ = 23; break; //@line 973 "_testcapimodule.c"
      case 2: // $bb1
        var $4=_PyLong_FromString(((__str36)&4294967295), 0, 16); //@line 976 "_testcapimodule.c"
        HEAP[$num]=$4; //@line 976 "_testcapimodule.c"
        var $5=HEAP[$num]; //@line 977 "_testcapimodule.c"
        var $6=($5)==0; //@line 977 "_testcapimodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 977 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 978 "_testcapimodule.c"
        __label__ = 23; break; //@line 978 "_testcapimodule.c"
      case 4: // $bb3
        var $7=HEAP[$num]; //@line 980 "_testcapimodule.c"
        var $8=_PyInt_AsUnsignedLongMask($7); //@line 980 "_testcapimodule.c"
        HEAP[$value]=$8; //@line 980 "_testcapimodule.c"
        var $9=HEAP[$value]; //@line 981 "_testcapimodule.c"
        var $10=((($9))|0)!=-1; //@line 981 "_testcapimodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 981 "_testcapimodule.c"
      case 5: // $bb4
        var $11=_raiseTestError(((__str76)&4294967295), ((__str77)&4294967295)); //@line 982 "_testcapimodule.c"
        HEAP[$0]=$11; //@line 982 "_testcapimodule.c"
        __label__ = 23; break; //@line 982 "_testcapimodule.c"
      case 6: // $bb5
        var $12=HEAP[$tuple]; //@line 985 "_testcapimodule.c"
        var $13=$12; //@line 985 "_testcapimodule.c"
        var $14=(($13+12)&4294967295); //@line 985 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 985 "_testcapimodule.c"
        var $16=HEAP[$num]; //@line 985 "_testcapimodule.c"
        HEAP[$15]=$16; //@line 985 "_testcapimodule.c"
        HEAP[$value]=0; //@line 987 "_testcapimodule.c"
        var $17=HEAP[$tuple]; //@line 988 "_testcapimodule.c"
        var $18=_PyArg_ParseTuple($17, ((__str78)&4294967295), $value); //@line 988 "_testcapimodule.c"
        var $19=((($18))|0) < 0; //@line 988 "_testcapimodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 988 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 989 "_testcapimodule.c"
        __label__ = 23; break; //@line 989 "_testcapimodule.c"
      case 8: // $bb7
        var $20=HEAP[$value]; //@line 990 "_testcapimodule.c"
        var $21=((($20))|0)!=-1; //@line 990 "_testcapimodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 990 "_testcapimodule.c"
      case 9: // $bb8
        var $22=_raiseTestError(((__str76)&4294967295), ((__str79)&4294967295)); //@line 991 "_testcapimodule.c"
        HEAP[$0]=$22; //@line 991 "_testcapimodule.c"
        __label__ = 23; break; //@line 991 "_testcapimodule.c"
      case 10: // $bb9
        var $23=HEAP[$num]; //@line 994 "_testcapimodule.c"
        var $24=(($23)&4294967295); //@line 994 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 994 "_testcapimodule.c"
        var $26=((($25) - 1)&4294967295); //@line 994 "_testcapimodule.c"
        var $27=HEAP[$num]; //@line 994 "_testcapimodule.c"
        var $28=(($27)&4294967295); //@line 994 "_testcapimodule.c"
        HEAP[$28]=$26; //@line 994 "_testcapimodule.c"
        var $29=HEAP[$num]; //@line 994 "_testcapimodule.c"
        var $30=(($29)&4294967295); //@line 994 "_testcapimodule.c"
        var $31=HEAP[$30]; //@line 994 "_testcapimodule.c"
        var $32=((($31))|0)==0; //@line 994 "_testcapimodule.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 994 "_testcapimodule.c"
      case 11: // $bb10
        var $33=HEAP[$num]; //@line 994 "_testcapimodule.c"
        var $34=(($33+4)&4294967295); //@line 994 "_testcapimodule.c"
        var $35=HEAP[$34]; //@line 994 "_testcapimodule.c"
        var $36=(($35+24)&4294967295); //@line 994 "_testcapimodule.c"
        var $37=HEAP[$36]; //@line 994 "_testcapimodule.c"
        var $38=HEAP[$num]; //@line 994 "_testcapimodule.c"
        FUNCTION_TABLE[$37]($38); //@line 994 "_testcapimodule.c"
        __label__ = 12; break; //@line 994 "_testcapimodule.c"
      case 12: // $bb11
        var $39=_PyLong_FromString(((__str80)&4294967295), 0, 16); //@line 995 "_testcapimodule.c"
        HEAP[$num]=$39; //@line 995 "_testcapimodule.c"
        var $40=HEAP[$num]; //@line 996 "_testcapimodule.c"
        var $41=($40)==0; //@line 996 "_testcapimodule.c"
        if ($41) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 996 "_testcapimodule.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 997 "_testcapimodule.c"
        __label__ = 23; break; //@line 997 "_testcapimodule.c"
      case 14: // $bb13
        var $42=HEAP[$num]; //@line 999 "_testcapimodule.c"
        var $43=_PyInt_AsUnsignedLongMask($42); //@line 999 "_testcapimodule.c"
        HEAP[$value]=$43; //@line 999 "_testcapimodule.c"
        var $44=HEAP[$value]; //@line 1000 "_testcapimodule.c"
        var $45=((($44))|0)!=-66; //@line 1000 "_testcapimodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1000 "_testcapimodule.c"
      case 15: // $bb14
        var $46=_raiseTestError(((__str76)&4294967295), ((__str77)&4294967295)); //@line 1001 "_testcapimodule.c"
        HEAP[$0]=$46; //@line 1001 "_testcapimodule.c"
        __label__ = 23; break; //@line 1001 "_testcapimodule.c"
      case 16: // $bb15
        var $47=HEAP[$tuple]; //@line 1004 "_testcapimodule.c"
        var $48=$47; //@line 1004 "_testcapimodule.c"
        var $49=(($48+12)&4294967295); //@line 1004 "_testcapimodule.c"
        var $50=(($49)&4294967295); //@line 1004 "_testcapimodule.c"
        var $51=HEAP[$num]; //@line 1004 "_testcapimodule.c"
        HEAP[$50]=$51; //@line 1004 "_testcapimodule.c"
        HEAP[$value]=0; //@line 1006 "_testcapimodule.c"
        var $52=HEAP[$tuple]; //@line 1007 "_testcapimodule.c"
        var $53=_PyArg_ParseTuple($52, ((__str78)&4294967295), $value); //@line 1007 "_testcapimodule.c"
        var $54=((($53))|0) < 0; //@line 1007 "_testcapimodule.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1007 "_testcapimodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 1008 "_testcapimodule.c"
        __label__ = 23; break; //@line 1008 "_testcapimodule.c"
      case 18: // $bb17
        var $55=HEAP[$value]; //@line 1009 "_testcapimodule.c"
        var $56=((($55))|0)!=-66; //@line 1009 "_testcapimodule.c"
        if ($56) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1009 "_testcapimodule.c"
      case 19: // $bb18
        var $57=_raiseTestError(((__str76)&4294967295), ((__str81)&4294967295)); //@line 1010 "_testcapimodule.c"
        HEAP[$0]=$57; //@line 1010 "_testcapimodule.c"
        __label__ = 23; break; //@line 1010 "_testcapimodule.c"
      case 20: // $bb19
        var $58=HEAP[$tuple]; //@line 1013 "_testcapimodule.c"
        var $59=(($58)&4294967295); //@line 1013 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 1013 "_testcapimodule.c"
        var $61=((($60) - 1)&4294967295); //@line 1013 "_testcapimodule.c"
        var $62=HEAP[$tuple]; //@line 1013 "_testcapimodule.c"
        var $63=(($62)&4294967295); //@line 1013 "_testcapimodule.c"
        HEAP[$63]=$61; //@line 1013 "_testcapimodule.c"
        var $64=HEAP[$tuple]; //@line 1013 "_testcapimodule.c"
        var $65=(($64)&4294967295); //@line 1013 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 1013 "_testcapimodule.c"
        var $67=((($66))|0)==0; //@line 1013 "_testcapimodule.c"
        if ($67) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1013 "_testcapimodule.c"
      case 21: // $bb20
        var $68=HEAP[$tuple]; //@line 1013 "_testcapimodule.c"
        var $69=(($68+4)&4294967295); //@line 1013 "_testcapimodule.c"
        var $70=HEAP[$69]; //@line 1013 "_testcapimodule.c"
        var $71=(($70+24)&4294967295); //@line 1013 "_testcapimodule.c"
        var $72=HEAP[$71]; //@line 1013 "_testcapimodule.c"
        var $73=HEAP[$tuple]; //@line 1013 "_testcapimodule.c"
        FUNCTION_TABLE[$72]($73); //@line 1013 "_testcapimodule.c"
        __label__ = 22; break; //@line 1013 "_testcapimodule.c"
      case 22: // $bb21
        var $74=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1014 "_testcapimodule.c"
        var $75=((($74) + 1)&4294967295); //@line 1014 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$75; //@line 1014 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1015 "_testcapimodule.c"
        __label__ = 23; break; //@line 1015 "_testcapimodule.c"
      case 23: // $bb22
        var $76=HEAP[$0]; //@line 973 "_testcapimodule.c"
        HEAP[$retval]=$76; //@line 973 "_testcapimodule.c"
        __label__ = 24; break; //@line 973 "_testcapimodule.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 973 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 973 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_u_code($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $tuple=__stackBase__+12;
        var $obj=__stackBase__+16;
        var $value=__stackBase__+20;
        var $len=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[((__Py_ascii_whitespace+25)&4294967295)]; //@line 1034 "_testcapimodule.c"
        var $2=unSign(($1), 8, 0); //@line 1034 "_testcapimodule.c"
        HEAP[_x]=$2; //@line 1034 "_testcapimodule.c"
        var $3=_PyTuple_New(1); //@line 1036 "_testcapimodule.c"
        HEAP[$tuple]=$3; //@line 1036 "_testcapimodule.c"
        var $4=HEAP[$tuple]; //@line 1037 "_testcapimodule.c"
        var $5=($4)==0; //@line 1037 "_testcapimodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1038 "_testcapimodule.c"
        __label__ = 16; break; //@line 1038 "_testcapimodule.c"
      case 2: // $bb1
        var $6=_PyUnicodeUCS2_Decode(((__str82)&4294967295), 4, ((__str83)&4294967295), 0); //@line 1040 "_testcapimodule.c"
        HEAP[$obj]=$6; //@line 1040 "_testcapimodule.c"
        var $7=HEAP[$obj]; //@line 1042 "_testcapimodule.c"
        var $8=($7)==0; //@line 1042 "_testcapimodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1043 "_testcapimodule.c"
        __label__ = 16; break; //@line 1043 "_testcapimodule.c"
      case 4: // $bb3
        var $9=HEAP[$tuple]; //@line 1045 "_testcapimodule.c"
        var $10=$9; //@line 1045 "_testcapimodule.c"
        var $11=(($10+12)&4294967295); //@line 1045 "_testcapimodule.c"
        var $12=(($11)&4294967295); //@line 1045 "_testcapimodule.c"
        var $13=HEAP[$obj]; //@line 1045 "_testcapimodule.c"
        HEAP[$12]=$13; //@line 1045 "_testcapimodule.c"
        HEAP[$value]=0; //@line 1047 "_testcapimodule.c"
        var $14=HEAP[$tuple]; //@line 1048 "_testcapimodule.c"
        var $15=_PyArg_ParseTuple($14, ((__str84)&4294967295), $value); //@line 1048 "_testcapimodule.c"
        var $16=((($15))|0) < 0; //@line 1048 "_testcapimodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1048 "_testcapimodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1049 "_testcapimodule.c"
        __label__ = 16; break; //@line 1049 "_testcapimodule.c"
      case 6: // $bb5
        var $17=HEAP[$obj]; //@line 1050 "_testcapimodule.c"
        var $18=$17; //@line 1050 "_testcapimodule.c"
        var $19=(($18+12)&4294967295); //@line 1050 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1050 "_testcapimodule.c"
        var $21=HEAP[$value]; //@line 1050 "_testcapimodule.c"
        var $22=($20)!=($21); //@line 1050 "_testcapimodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1050 "_testcapimodule.c"
      case 7: // $bb6
        var $23=_raiseTestError(((__str85)&4294967295), ((__str86)&4294967295)); //@line 1051 "_testcapimodule.c"
        HEAP[$0]=$23; //@line 1051 "_testcapimodule.c"
        __label__ = 16; break; //@line 1051 "_testcapimodule.c"
      case 8: // $bb7
        HEAP[$value]=0; //@line 1053 "_testcapimodule.c"
        var $24=HEAP[$tuple]; //@line 1054 "_testcapimodule.c"
        var $25=_PyArg_ParseTuple($24, ((__str87)&4294967295), $value, $len); //@line 1054 "_testcapimodule.c"
        var $26=((($25))|0) < 0; //@line 1054 "_testcapimodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1054 "_testcapimodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1055 "_testcapimodule.c"
        __label__ = 16; break; //@line 1055 "_testcapimodule.c"
      case 10: // $bb9
        var $27=HEAP[$obj]; //@line 1056 "_testcapimodule.c"
        var $28=$27; //@line 1056 "_testcapimodule.c"
        var $29=(($28+12)&4294967295); //@line 1056 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 1056 "_testcapimodule.c"
        var $31=HEAP[$value]; //@line 1056 "_testcapimodule.c"
        var $32=($30)!=($31); //@line 1056 "_testcapimodule.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1056 "_testcapimodule.c"
      case 11: // $bb10
        var $33=HEAP[$obj]; //@line 1056 "_testcapimodule.c"
        var $34=$33; //@line 1056 "_testcapimodule.c"
        var $35=(($34+8)&4294967295); //@line 1056 "_testcapimodule.c"
        var $36=HEAP[$35]; //@line 1056 "_testcapimodule.c"
        var $37=HEAP[$len]; //@line 1056 "_testcapimodule.c"
        var $38=((($36))|0)!=((($37))|0); //@line 1056 "_testcapimodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1056 "_testcapimodule.c"
      case 12: // $bb11
        var $39=_raiseTestError(((__str85)&4294967295), ((__str88)&4294967295)); //@line 1058 "_testcapimodule.c"
        HEAP[$0]=$39; //@line 1058 "_testcapimodule.c"
        __label__ = 16; break; //@line 1058 "_testcapimodule.c"
      case 13: // $bb12
        var $40=HEAP[$tuple]; //@line 1061 "_testcapimodule.c"
        var $41=(($40)&4294967295); //@line 1061 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 1061 "_testcapimodule.c"
        var $43=((($42) - 1)&4294967295); //@line 1061 "_testcapimodule.c"
        var $44=HEAP[$tuple]; //@line 1061 "_testcapimodule.c"
        var $45=(($44)&4294967295); //@line 1061 "_testcapimodule.c"
        HEAP[$45]=$43; //@line 1061 "_testcapimodule.c"
        var $46=HEAP[$tuple]; //@line 1061 "_testcapimodule.c"
        var $47=(($46)&4294967295); //@line 1061 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 1061 "_testcapimodule.c"
        var $49=((($48))|0)==0; //@line 1061 "_testcapimodule.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1061 "_testcapimodule.c"
      case 14: // $bb13
        var $50=HEAP[$tuple]; //@line 1061 "_testcapimodule.c"
        var $51=(($50+4)&4294967295); //@line 1061 "_testcapimodule.c"
        var $52=HEAP[$51]; //@line 1061 "_testcapimodule.c"
        var $53=(($52+24)&4294967295); //@line 1061 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 1061 "_testcapimodule.c"
        var $55=HEAP[$tuple]; //@line 1061 "_testcapimodule.c"
        FUNCTION_TABLE[$54]($55); //@line 1061 "_testcapimodule.c"
        __label__ = 15; break; //@line 1061 "_testcapimodule.c"
      case 15: // $bb14
        var $56=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1062 "_testcapimodule.c"
        var $57=((($56) + 1)&4294967295); //@line 1062 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$57; //@line 1062 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1063 "_testcapimodule.c"
        __label__ = 16; break; //@line 1063 "_testcapimodule.c"
      case 16: // $bb15
        var $58=HEAP[$0]; //@line 1038 "_testcapimodule.c"
        HEAP[$retval]=$58; //@line 1038 "_testcapimodule.c"
        __label__ = 17; break; //@line 1038 "_testcapimodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1038 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1038 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_widechar($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $wtext=__stackBase__+12;
        var $wtextlen=__stackBase__+20;
        var $wide=__stackBase__+24;
        var $utf8=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=(($wtext)&4294967295); //@line 1070 "_testcapimodule.c"
        HEAP[$1]=0; //@line 1070 "_testcapimodule.c"
        var $2=(($wtext+4)&4294967295); //@line 1070 "_testcapimodule.c"
        HEAP[$2]=0; //@line 1070 "_testcapimodule.c"
        var $3=(($wtext)&4294967295); //@line 1070 "_testcapimodule.c"
        HEAP[$3]=1092557; //@line 1070 "_testcapimodule.c"
        HEAP[$wtextlen]=1; //@line 1071 "_testcapimodule.c"
        var $4=HEAP[$wtextlen]; //@line 1078 "_testcapimodule.c"
        var $wtext1=$wtext; //@line 1078 "_testcapimodule.c"
        var $5=_PyUnicodeUCS2_FromWideChar($wtext1, $4); //@line 1078 "_testcapimodule.c"
        HEAP[$wide]=$5; //@line 1078 "_testcapimodule.c"
        var $6=HEAP[$wide]; //@line 1079 "_testcapimodule.c"
        var $7=($6)==0; //@line 1079 "_testcapimodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1079 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1080 "_testcapimodule.c"
        __label__ = 25; break; //@line 1080 "_testcapimodule.c"
      case 2: // $bb2
        var $8=_PyUnicodeUCS2_FromString(((__str89)&4294967295)); //@line 1082 "_testcapimodule.c"
        HEAP[$utf8]=$8; //@line 1082 "_testcapimodule.c"
        var $9=HEAP[$utf8]; //@line 1083 "_testcapimodule.c"
        var $10=($9)==0; //@line 1083 "_testcapimodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1083 "_testcapimodule.c"
      case 3: // $bb3
        var $11=HEAP[$wide]; //@line 1084 "_testcapimodule.c"
        var $12=(($11)&4294967295); //@line 1084 "_testcapimodule.c"
        var $13=HEAP[$12]; //@line 1084 "_testcapimodule.c"
        var $14=((($13) - 1)&4294967295); //@line 1084 "_testcapimodule.c"
        var $15=HEAP[$wide]; //@line 1084 "_testcapimodule.c"
        var $16=(($15)&4294967295); //@line 1084 "_testcapimodule.c"
        HEAP[$16]=$14; //@line 1084 "_testcapimodule.c"
        var $17=HEAP[$wide]; //@line 1084 "_testcapimodule.c"
        var $18=(($17)&4294967295); //@line 1084 "_testcapimodule.c"
        var $19=HEAP[$18]; //@line 1084 "_testcapimodule.c"
        var $20=((($19))|0)==0; //@line 1084 "_testcapimodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1084 "_testcapimodule.c"
      case 4: // $bb4
        var $21=HEAP[$wide]; //@line 1084 "_testcapimodule.c"
        var $22=(($21+4)&4294967295); //@line 1084 "_testcapimodule.c"
        var $23=HEAP[$22]; //@line 1084 "_testcapimodule.c"
        var $24=(($23+24)&4294967295); //@line 1084 "_testcapimodule.c"
        var $25=HEAP[$24]; //@line 1084 "_testcapimodule.c"
        var $26=HEAP[$wide]; //@line 1084 "_testcapimodule.c"
        FUNCTION_TABLE[$25]($26); //@line 1084 "_testcapimodule.c"
        __label__ = 5; break; //@line 1084 "_testcapimodule.c"
      case 5: // $bb5
        HEAP[$0]=0; //@line 1085 "_testcapimodule.c"
        __label__ = 25; break; //@line 1085 "_testcapimodule.c"
      case 6: // $bb6
        var $27=HEAP[$wide]; //@line 1088 "_testcapimodule.c"
        var $28=$27; //@line 1088 "_testcapimodule.c"
        var $29=(($28+8)&4294967295); //@line 1088 "_testcapimodule.c"
        var $30=HEAP[$29]; //@line 1088 "_testcapimodule.c"
        var $31=HEAP[$utf8]; //@line 1088 "_testcapimodule.c"
        var $32=$31; //@line 1088 "_testcapimodule.c"
        var $33=(($32+8)&4294967295); //@line 1088 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1088 "_testcapimodule.c"
        var $35=((($30))|0)!=((($34))|0); //@line 1088 "_testcapimodule.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1088 "_testcapimodule.c"
      case 7: // $bb7
        var $36=HEAP[$wide]; //@line 1089 "_testcapimodule.c"
        var $37=(($36)&4294967295); //@line 1089 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 1089 "_testcapimodule.c"
        var $39=((($38) - 1)&4294967295); //@line 1089 "_testcapimodule.c"
        var $40=HEAP[$wide]; //@line 1089 "_testcapimodule.c"
        var $41=(($40)&4294967295); //@line 1089 "_testcapimodule.c"
        HEAP[$41]=$39; //@line 1089 "_testcapimodule.c"
        var $42=HEAP[$wide]; //@line 1089 "_testcapimodule.c"
        var $43=(($42)&4294967295); //@line 1089 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1089 "_testcapimodule.c"
        var $45=((($44))|0)==0; //@line 1089 "_testcapimodule.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1089 "_testcapimodule.c"
      case 8: // $bb8
        var $46=HEAP[$wide]; //@line 1089 "_testcapimodule.c"
        var $47=(($46+4)&4294967295); //@line 1089 "_testcapimodule.c"
        var $48=HEAP[$47]; //@line 1089 "_testcapimodule.c"
        var $49=(($48+24)&4294967295); //@line 1089 "_testcapimodule.c"
        var $50=HEAP[$49]; //@line 1089 "_testcapimodule.c"
        var $51=HEAP[$wide]; //@line 1089 "_testcapimodule.c"
        FUNCTION_TABLE[$50]($51); //@line 1089 "_testcapimodule.c"
        __label__ = 9; break; //@line 1089 "_testcapimodule.c"
      case 9: // $bb9
        var $52=HEAP[$utf8]; //@line 1090 "_testcapimodule.c"
        var $53=(($52)&4294967295); //@line 1090 "_testcapimodule.c"
        var $54=HEAP[$53]; //@line 1090 "_testcapimodule.c"
        var $55=((($54) - 1)&4294967295); //@line 1090 "_testcapimodule.c"
        var $56=HEAP[$utf8]; //@line 1090 "_testcapimodule.c"
        var $57=(($56)&4294967295); //@line 1090 "_testcapimodule.c"
        HEAP[$57]=$55; //@line 1090 "_testcapimodule.c"
        var $58=HEAP[$utf8]; //@line 1090 "_testcapimodule.c"
        var $59=(($58)&4294967295); //@line 1090 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 1090 "_testcapimodule.c"
        var $61=((($60))|0)==0; //@line 1090 "_testcapimodule.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1090 "_testcapimodule.c"
      case 10: // $bb10
        var $62=HEAP[$utf8]; //@line 1090 "_testcapimodule.c"
        var $63=(($62+4)&4294967295); //@line 1090 "_testcapimodule.c"
        var $64=HEAP[$63]; //@line 1090 "_testcapimodule.c"
        var $65=(($64+24)&4294967295); //@line 1090 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 1090 "_testcapimodule.c"
        var $67=HEAP[$utf8]; //@line 1090 "_testcapimodule.c"
        FUNCTION_TABLE[$66]($67); //@line 1090 "_testcapimodule.c"
        __label__ = 11; break; //@line 1090 "_testcapimodule.c"
      case 11: // $bb11
        var $68=_raiseTestError(((__str90)&4294967295), ((__str91)&4294967295)); //@line 1091 "_testcapimodule.c"
        HEAP[$0]=$68; //@line 1091 "_testcapimodule.c"
        __label__ = 25; break; //@line 1091 "_testcapimodule.c"
      case 12: // $bb12
        var $69=HEAP[$wide]; //@line 1094 "_testcapimodule.c"
        var $70=HEAP[$utf8]; //@line 1094 "_testcapimodule.c"
        var $71=_PyUnicodeUCS2_Compare($69, $70); //@line 1094 "_testcapimodule.c"
        var $72=((($71))|0)!=0; //@line 1094 "_testcapimodule.c"
        if ($72) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 1094 "_testcapimodule.c"
      case 13: // $bb13
        var $73=HEAP[$wide]; //@line 1095 "_testcapimodule.c"
        var $74=(($73)&4294967295); //@line 1095 "_testcapimodule.c"
        var $75=HEAP[$74]; //@line 1095 "_testcapimodule.c"
        var $76=((($75) - 1)&4294967295); //@line 1095 "_testcapimodule.c"
        var $77=HEAP[$wide]; //@line 1095 "_testcapimodule.c"
        var $78=(($77)&4294967295); //@line 1095 "_testcapimodule.c"
        HEAP[$78]=$76; //@line 1095 "_testcapimodule.c"
        var $79=HEAP[$wide]; //@line 1095 "_testcapimodule.c"
        var $80=(($79)&4294967295); //@line 1095 "_testcapimodule.c"
        var $81=HEAP[$80]; //@line 1095 "_testcapimodule.c"
        var $82=((($81))|0)==0; //@line 1095 "_testcapimodule.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1095 "_testcapimodule.c"
      case 14: // $bb14
        var $83=HEAP[$wide]; //@line 1095 "_testcapimodule.c"
        var $84=(($83+4)&4294967295); //@line 1095 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 1095 "_testcapimodule.c"
        var $86=(($85+24)&4294967295); //@line 1095 "_testcapimodule.c"
        var $87=HEAP[$86]; //@line 1095 "_testcapimodule.c"
        var $88=HEAP[$wide]; //@line 1095 "_testcapimodule.c"
        FUNCTION_TABLE[$87]($88); //@line 1095 "_testcapimodule.c"
        __label__ = 15; break; //@line 1095 "_testcapimodule.c"
      case 15: // $bb15
        var $89=HEAP[$utf8]; //@line 1096 "_testcapimodule.c"
        var $90=(($89)&4294967295); //@line 1096 "_testcapimodule.c"
        var $91=HEAP[$90]; //@line 1096 "_testcapimodule.c"
        var $92=((($91) - 1)&4294967295); //@line 1096 "_testcapimodule.c"
        var $93=HEAP[$utf8]; //@line 1096 "_testcapimodule.c"
        var $94=(($93)&4294967295); //@line 1096 "_testcapimodule.c"
        HEAP[$94]=$92; //@line 1096 "_testcapimodule.c"
        var $95=HEAP[$utf8]; //@line 1096 "_testcapimodule.c"
        var $96=(($95)&4294967295); //@line 1096 "_testcapimodule.c"
        var $97=HEAP[$96]; //@line 1096 "_testcapimodule.c"
        var $98=((($97))|0)==0; //@line 1096 "_testcapimodule.c"
        if ($98) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1096 "_testcapimodule.c"
      case 16: // $bb16
        var $99=HEAP[$utf8]; //@line 1096 "_testcapimodule.c"
        var $100=(($99+4)&4294967295); //@line 1096 "_testcapimodule.c"
        var $101=HEAP[$100]; //@line 1096 "_testcapimodule.c"
        var $102=(($101+24)&4294967295); //@line 1096 "_testcapimodule.c"
        var $103=HEAP[$102]; //@line 1096 "_testcapimodule.c"
        var $104=HEAP[$utf8]; //@line 1096 "_testcapimodule.c"
        FUNCTION_TABLE[$103]($104); //@line 1096 "_testcapimodule.c"
        __label__ = 17; break; //@line 1096 "_testcapimodule.c"
      case 17: // $bb17
        var $105=_PyErr_Occurred(); //@line 1097 "_testcapimodule.c"
        var $106=($105)!=0; //@line 1097 "_testcapimodule.c"
        if ($106) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1097 "_testcapimodule.c"
      case 18: // $bb18
        HEAP[$0]=0; //@line 1098 "_testcapimodule.c"
        __label__ = 25; break; //@line 1098 "_testcapimodule.c"
      case 19: // $bb19
        var $107=_raiseTestError(((__str90)&4294967295), ((__str92)&4294967295)); //@line 1099 "_testcapimodule.c"
        HEAP[$0]=$107; //@line 1099 "_testcapimodule.c"
        __label__ = 25; break; //@line 1099 "_testcapimodule.c"
      case 20: // $bb20
        var $108=HEAP[$wide]; //@line 1103 "_testcapimodule.c"
        var $109=(($108)&4294967295); //@line 1103 "_testcapimodule.c"
        var $110=HEAP[$109]; //@line 1103 "_testcapimodule.c"
        var $111=((($110) - 1)&4294967295); //@line 1103 "_testcapimodule.c"
        var $112=HEAP[$wide]; //@line 1103 "_testcapimodule.c"
        var $113=(($112)&4294967295); //@line 1103 "_testcapimodule.c"
        HEAP[$113]=$111; //@line 1103 "_testcapimodule.c"
        var $114=HEAP[$wide]; //@line 1103 "_testcapimodule.c"
        var $115=(($114)&4294967295); //@line 1103 "_testcapimodule.c"
        var $116=HEAP[$115]; //@line 1103 "_testcapimodule.c"
        var $117=((($116))|0)==0; //@line 1103 "_testcapimodule.c"
        if ($117) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1103 "_testcapimodule.c"
      case 21: // $bb21
        var $118=HEAP[$wide]; //@line 1103 "_testcapimodule.c"
        var $119=(($118+4)&4294967295); //@line 1103 "_testcapimodule.c"
        var $120=HEAP[$119]; //@line 1103 "_testcapimodule.c"
        var $121=(($120+24)&4294967295); //@line 1103 "_testcapimodule.c"
        var $122=HEAP[$121]; //@line 1103 "_testcapimodule.c"
        var $123=HEAP[$wide]; //@line 1103 "_testcapimodule.c"
        FUNCTION_TABLE[$122]($123); //@line 1103 "_testcapimodule.c"
        __label__ = 22; break; //@line 1103 "_testcapimodule.c"
      case 22: // $bb22
        var $124=HEAP[$utf8]; //@line 1104 "_testcapimodule.c"
        var $125=(($124)&4294967295); //@line 1104 "_testcapimodule.c"
        var $126=HEAP[$125]; //@line 1104 "_testcapimodule.c"
        var $127=((($126) - 1)&4294967295); //@line 1104 "_testcapimodule.c"
        var $128=HEAP[$utf8]; //@line 1104 "_testcapimodule.c"
        var $129=(($128)&4294967295); //@line 1104 "_testcapimodule.c"
        HEAP[$129]=$127; //@line 1104 "_testcapimodule.c"
        var $130=HEAP[$utf8]; //@line 1104 "_testcapimodule.c"
        var $131=(($130)&4294967295); //@line 1104 "_testcapimodule.c"
        var $132=HEAP[$131]; //@line 1104 "_testcapimodule.c"
        var $133=((($132))|0)==0; //@line 1104 "_testcapimodule.c"
        if ($133) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1104 "_testcapimodule.c"
      case 23: // $bb23
        var $134=HEAP[$utf8]; //@line 1104 "_testcapimodule.c"
        var $135=(($134+4)&4294967295); //@line 1104 "_testcapimodule.c"
        var $136=HEAP[$135]; //@line 1104 "_testcapimodule.c"
        var $137=(($136+24)&4294967295); //@line 1104 "_testcapimodule.c"
        var $138=HEAP[$137]; //@line 1104 "_testcapimodule.c"
        var $139=HEAP[$utf8]; //@line 1104 "_testcapimodule.c"
        FUNCTION_TABLE[$138]($139); //@line 1104 "_testcapimodule.c"
        __label__ = 24; break; //@line 1104 "_testcapimodule.c"
      case 24: // $bb24
        var $140=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1105 "_testcapimodule.c"
        var $141=((($140) + 1)&4294967295); //@line 1105 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$141; //@line 1105 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1105 "_testcapimodule.c"
        __label__ = 25; break; //@line 1105 "_testcapimodule.c"
      case 25: // $bb25
        var $142=HEAP[$0]; //@line 1080 "_testcapimodule.c"
        HEAP[$retval]=$142; //@line 1080 "_testcapimodule.c"
        __label__ = 26; break; //@line 1080 "_testcapimodule.c"
      case 26: // $return
        var $retval26=HEAP[$retval]; //@line 1080 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1080 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_empty_argparse($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $tuple=__stackBase__+12;
        var $dict=__stackBase__+16;
        var $result=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$dict]=0; //@line 1112 "_testcapimodule.c"
        var $1=_PyTuple_New(0); //@line 1115 "_testcapimodule.c"
        HEAP[$tuple]=$1; //@line 1115 "_testcapimodule.c"
        var $2=HEAP[$tuple]; //@line 1116 "_testcapimodule.c"
        var $3=($2)==0; //@line 1116 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1116 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1117 "_testcapimodule.c"
        __label__ = 13; break; //@line 1117 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$tuple]; //@line 1118 "_testcapimodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str93)&4294967295)); //@line 1118 "_testcapimodule.c"
        HEAP[$result]=$5; //@line 1118 "_testcapimodule.c"
        var $6=HEAP[$result]; //@line 1118 "_testcapimodule.c"
        var $7=((($6))|0) < 0; //@line 1118 "_testcapimodule.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1118 "_testcapimodule.c"
      case 3: // $bb2
        var $8=_PyDict_New(); //@line 1120 "_testcapimodule.c"
        HEAP[$dict]=$8; //@line 1120 "_testcapimodule.c"
        var $9=HEAP[$dict]; //@line 1121 "_testcapimodule.c"
        var $10=($9)==0; //@line 1121 "_testcapimodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1121 "_testcapimodule.c"
      case 4: // $bb3
        var $11=HEAP[$tuple]; //@line 1123 "_testcapimodule.c"
        var $12=HEAP[$dict]; //@line 1123 "_testcapimodule.c"
        var $13=_PyArg_ParseTupleAndKeywords($11, $12, ((__str93)&4294967295), ((_kwlist_10129)&4294967295)); //@line 1123 "_testcapimodule.c"
        HEAP[$result]=$13; //@line 1123 "_testcapimodule.c"
        __label__ = 5; break; //@line 1124 "_testcapimodule.c"
      case 5: // $done
        var $14=HEAP[$tuple]; //@line 1125 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 1125 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1125 "_testcapimodule.c"
        var $17=((($16) - 1)&4294967295); //@line 1125 "_testcapimodule.c"
        var $18=HEAP[$tuple]; //@line 1125 "_testcapimodule.c"
        var $19=(($18)&4294967295); //@line 1125 "_testcapimodule.c"
        HEAP[$19]=$17; //@line 1125 "_testcapimodule.c"
        var $20=HEAP[$tuple]; //@line 1125 "_testcapimodule.c"
        var $21=(($20)&4294967295); //@line 1125 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1125 "_testcapimodule.c"
        var $23=((($22))|0)==0; //@line 1125 "_testcapimodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1125 "_testcapimodule.c"
      case 6: // $bb4
        var $24=HEAP[$tuple]; //@line 1125 "_testcapimodule.c"
        var $25=(($24+4)&4294967295); //@line 1125 "_testcapimodule.c"
        var $26=HEAP[$25]; //@line 1125 "_testcapimodule.c"
        var $27=(($26+24)&4294967295); //@line 1125 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 1125 "_testcapimodule.c"
        var $29=HEAP[$tuple]; //@line 1125 "_testcapimodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1125 "_testcapimodule.c"
        __label__ = 7; break; //@line 1125 "_testcapimodule.c"
      case 7: // $bb5
        var $30=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        var $31=($30)!=0; //@line 1126 "_testcapimodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1126 "_testcapimodule.c"
      case 8: // $bb6
        var $32=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        var $33=(($32)&4294967295); //@line 1126 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1126 "_testcapimodule.c"
        var $35=((($34) - 1)&4294967295); //@line 1126 "_testcapimodule.c"
        var $36=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        var $37=(($36)&4294967295); //@line 1126 "_testcapimodule.c"
        HEAP[$37]=$35; //@line 1126 "_testcapimodule.c"
        var $38=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        var $39=(($38)&4294967295); //@line 1126 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 1126 "_testcapimodule.c"
        var $41=((($40))|0)==0; //@line 1126 "_testcapimodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1126 "_testcapimodule.c"
      case 9: // $bb7
        var $42=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        var $43=(($42+4)&4294967295); //@line 1126 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1126 "_testcapimodule.c"
        var $45=(($44+24)&4294967295); //@line 1126 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 1126 "_testcapimodule.c"
        var $47=HEAP[$dict]; //@line 1126 "_testcapimodule.c"
        FUNCTION_TABLE[$46]($47); //@line 1126 "_testcapimodule.c"
        __label__ = 10; break; //@line 1126 "_testcapimodule.c"
      case 10: // $bb8
        var $48=HEAP[$result]; //@line 1127 "_testcapimodule.c"
        var $49=((($48))|0) < 0; //@line 1127 "_testcapimodule.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1127 "_testcapimodule.c"
      case 11: // $bb9
        HEAP[$0]=0; //@line 1128 "_testcapimodule.c"
        __label__ = 13; break; //@line 1128 "_testcapimodule.c"
      case 12: // $bb10
        var $50=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1130 "_testcapimodule.c"
        var $51=((($50) + 1)&4294967295); //@line 1130 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$51; //@line 1130 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1130 "_testcapimodule.c"
        __label__ = 13; break; //@line 1130 "_testcapimodule.c"
      case 13: // $bb11
        var $52=HEAP[$0]; //@line 1117 "_testcapimodule.c"
        HEAP[$retval]=$52; //@line 1117 "_testcapimodule.c"
        __label__ = 14; break; //@line 1117 "_testcapimodule.c"
      case 14: // $return
        var $retval12=HEAP[$retval]; //@line 1117 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1117 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codec_incrementalencoder($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $encoding=__stackBase__+16;
        var $errors=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$errors]=0; //@line 1137 "_testcapimodule.c"
        var $1=HEAP[$args_addr]; //@line 1138 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str94)&4294967295), $encoding, $errors); //@line 1138 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 1138 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1138 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1140 "_testcapimodule.c"
        __label__ = 3; break; //@line 1140 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$errors]; //@line 1141 "_testcapimodule.c"
        var $5=HEAP[$encoding]; //@line 1141 "_testcapimodule.c"
        var $6=_PyCodec_IncrementalEncoder($5, $4); //@line 1141 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 1141 "_testcapimodule.c"
        __label__ = 3; break; //@line 1141 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1140 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 1140 "_testcapimodule.c"
        __label__ = 4; break; //@line 1140 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1140 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1140 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _codec_incrementaldecoder($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $encoding=__stackBase__+16;
        var $errors=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$errors]=0; //@line 1147 "_testcapimodule.c"
        var $1=HEAP[$args_addr]; //@line 1148 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str95)&4294967295), $encoding, $errors); //@line 1148 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 1148 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1148 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1150 "_testcapimodule.c"
        __label__ = 3; break; //@line 1150 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$errors]; //@line 1151 "_testcapimodule.c"
        var $5=HEAP[$encoding]; //@line 1151 "_testcapimodule.c"
        var $6=_PyCodec_IncrementalDecoder($5, $4); //@line 1151 "_testcapimodule.c"
        HEAP[$0]=$6; //@line 1151 "_testcapimodule.c"
        __label__ = 3; break; //@line 1151 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1150 "_testcapimodule.c"
        HEAP[$retval]=$7; //@line 1150 "_testcapimodule.c"
        __label__ = 4; break; //@line 1150 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1150 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1150 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_long_numbits($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 208; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 208);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $testcases=__stackBase__+12;
        var $i=__stackBase__+192;
        var $plong=__stackBase__+196;
        var $nbits=__stackBase__+200;
        var $sign=__stackBase__+204;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $testcases1=$testcases; //@line 1178 "_testcapimodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($testcases1, _C_92_10205, 180, 4, 0); //@line 1178 "_testcapimodule.c"
        HEAP[$i]=0; //@line 1181 "_testcapimodule.c"
        __label__ = 8; break; //@line 1181 "_testcapimodule.c"
      case 1: // $bb
        var $1=HEAP[$i]; //@line 1182 "_testcapimodule.c"
        var $2=(($testcases+$1*12)&4294967295); //@line 1182 "_testcapimodule.c"
        var $3=(($2)&4294967295); //@line 1182 "_testcapimodule.c"
        var $4=HEAP[$3]; //@line 1182 "_testcapimodule.c"
        var $5=_PyLong_FromLong($4); //@line 1182 "_testcapimodule.c"
        HEAP[$plong]=$5; //@line 1182 "_testcapimodule.c"
        var $6=HEAP[$plong]; //@line 1183 "_testcapimodule.c"
        var $7=__PyLong_NumBits($6); //@line 1183 "_testcapimodule.c"
        HEAP[$nbits]=$7; //@line 1183 "_testcapimodule.c"
        var $8=HEAP[$plong]; //@line 1184 "_testcapimodule.c"
        var $9=__PyLong_Sign($8); //@line 1184 "_testcapimodule.c"
        HEAP[$sign]=$9; //@line 1184 "_testcapimodule.c"
        var $10=HEAP[$plong]; //@line 1186 "_testcapimodule.c"
        var $11=(($10)&4294967295); //@line 1186 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 1186 "_testcapimodule.c"
        var $13=((($12) - 1)&4294967295); //@line 1186 "_testcapimodule.c"
        var $14=HEAP[$plong]; //@line 1186 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 1186 "_testcapimodule.c"
        HEAP[$15]=$13; //@line 1186 "_testcapimodule.c"
        var $16=HEAP[$plong]; //@line 1186 "_testcapimodule.c"
        var $17=(($16)&4294967295); //@line 1186 "_testcapimodule.c"
        var $18=HEAP[$17]; //@line 1186 "_testcapimodule.c"
        var $19=((($18))|0)==0; //@line 1186 "_testcapimodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1186 "_testcapimodule.c"
      case 2: // $bb2
        var $20=HEAP[$plong]; //@line 1186 "_testcapimodule.c"
        var $21=(($20+4)&4294967295); //@line 1186 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1186 "_testcapimodule.c"
        var $23=(($22+24)&4294967295); //@line 1186 "_testcapimodule.c"
        var $24=HEAP[$23]; //@line 1186 "_testcapimodule.c"
        var $25=HEAP[$plong]; //@line 1186 "_testcapimodule.c"
        FUNCTION_TABLE[$24]($25); //@line 1186 "_testcapimodule.c"
        __label__ = 3; break; //@line 1186 "_testcapimodule.c"
      case 3: // $bb3
        var $26=HEAP[$i]; //@line 1187 "_testcapimodule.c"
        var $27=(($testcases+$26*12)&4294967295); //@line 1187 "_testcapimodule.c"
        var $28=(($27+4)&4294967295); //@line 1187 "_testcapimodule.c"
        var $29=HEAP[$28]; //@line 1187 "_testcapimodule.c"
        var $30=HEAP[$nbits]; //@line 1187 "_testcapimodule.c"
        var $31=((($29))|0)!=((($30))|0); //@line 1187 "_testcapimodule.c"
        if ($31) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1187 "_testcapimodule.c"
      case 4: // $bb4
        var $32=_raiseTestError(((__str96)&4294967295), ((__str97)&4294967295)); //@line 1188 "_testcapimodule.c"
        HEAP[$0]=$32; //@line 1188 "_testcapimodule.c"
        __label__ = 10; break; //@line 1188 "_testcapimodule.c"
      case 5: // $bb5
        var $33=HEAP[$i]; //@line 1190 "_testcapimodule.c"
        var $34=(($testcases+$33*12)&4294967295); //@line 1190 "_testcapimodule.c"
        var $35=(($34+8)&4294967295); //@line 1190 "_testcapimodule.c"
        var $36=HEAP[$35]; //@line 1190 "_testcapimodule.c"
        var $37=HEAP[$sign]; //@line 1190 "_testcapimodule.c"
        var $38=((($36))|0)!=((($37))|0); //@line 1190 "_testcapimodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1190 "_testcapimodule.c"
      case 6: // $bb6
        var $39=_raiseTestError(((__str96)&4294967295), ((__str98)&4294967295)); //@line 1191 "_testcapimodule.c"
        HEAP[$0]=$39; //@line 1191 "_testcapimodule.c"
        __label__ = 10; break; //@line 1191 "_testcapimodule.c"
      case 7: // $bb7
        var $40=HEAP[$i]; //@line 1181 "_testcapimodule.c"
        var $41=((($40) + 1)&4294967295); //@line 1181 "_testcapimodule.c"
        HEAP[$i]=$41; //@line 1181 "_testcapimodule.c"
        __label__ = 8; break; //@line 1181 "_testcapimodule.c"
      case 8: // $bb8
        var $42=HEAP[$i]; //@line 1181 "_testcapimodule.c"
        var $43=((($42))>>>0) <= 14; //@line 1181 "_testcapimodule.c"
        if ($43) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1181 "_testcapimodule.c"
      case 9: // $bb9
        var $44=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1194 "_testcapimodule.c"
        var $45=((($44) + 1)&4294967295); //@line 1194 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$45; //@line 1194 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1195 "_testcapimodule.c"
        __label__ = 10; break; //@line 1195 "_testcapimodule.c"
      case 10: // $bb10
        var $46=HEAP[$0]; //@line 1188 "_testcapimodule.c"
        HEAP[$retval]=$46; //@line 1188 "_testcapimodule.c"
        __label__ = 11; break; //@line 1188 "_testcapimodule.c"
      case 11: // $return
        var $retval11=HEAP[$retval]; //@line 1188 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1188 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_null_strings($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $o1=__stackBase__+12;
        var $o2=__stackBase__+16;
        var $tuple=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyObject_Str(0); //@line 1203 "_testcapimodule.c"
        HEAP[$o1]=$1; //@line 1203 "_testcapimodule.c"
        var $2=_PyObject_Unicode(0); //@line 1203 "_testcapimodule.c"
        HEAP[$o2]=$2; //@line 1203 "_testcapimodule.c"
        var $3=HEAP[$o1]; //@line 1204 "_testcapimodule.c"
        var $4=HEAP[$o2]; //@line 1204 "_testcapimodule.c"
        var $5=_PyTuple_Pack(2, $3, $4); //@line 1204 "_testcapimodule.c"
        HEAP[$tuple]=$5; //@line 1204 "_testcapimodule.c"
        var $6=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        var $7=($6)!=0; //@line 1205 "_testcapimodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1205 "_testcapimodule.c"
      case 1: // $bb
        var $8=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        var $9=(($8)&4294967295); //@line 1205 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1205 "_testcapimodule.c"
        var $11=((($10) - 1)&4294967295); //@line 1205 "_testcapimodule.c"
        var $12=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        var $13=(($12)&4294967295); //@line 1205 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 1205 "_testcapimodule.c"
        var $14=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 1205 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1205 "_testcapimodule.c"
        var $17=((($16))|0)==0; //@line 1205 "_testcapimodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1205 "_testcapimodule.c"
      case 2: // $bb1
        var $18=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        var $19=(($18+4)&4294967295); //@line 1205 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1205 "_testcapimodule.c"
        var $21=(($20+24)&4294967295); //@line 1205 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1205 "_testcapimodule.c"
        var $23=HEAP[$o1]; //@line 1205 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1205 "_testcapimodule.c"
        __label__ = 3; break; //@line 1205 "_testcapimodule.c"
      case 3: // $bb2
        var $24=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        var $25=($24)!=0; //@line 1206 "_testcapimodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1206 "_testcapimodule.c"
      case 4: // $bb3
        var $26=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        var $27=(($26)&4294967295); //@line 1206 "_testcapimodule.c"
        var $28=HEAP[$27]; //@line 1206 "_testcapimodule.c"
        var $29=((($28) - 1)&4294967295); //@line 1206 "_testcapimodule.c"
        var $30=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        var $31=(($30)&4294967295); //@line 1206 "_testcapimodule.c"
        HEAP[$31]=$29; //@line 1206 "_testcapimodule.c"
        var $32=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        var $33=(($32)&4294967295); //@line 1206 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1206 "_testcapimodule.c"
        var $35=((($34))|0)==0; //@line 1206 "_testcapimodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1206 "_testcapimodule.c"
      case 5: // $bb4
        var $36=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        var $37=(($36+4)&4294967295); //@line 1206 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 1206 "_testcapimodule.c"
        var $39=(($38+24)&4294967295); //@line 1206 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 1206 "_testcapimodule.c"
        var $41=HEAP[$o2]; //@line 1206 "_testcapimodule.c"
        FUNCTION_TABLE[$40]($41); //@line 1206 "_testcapimodule.c"
        __label__ = 6; break; //@line 1206 "_testcapimodule.c"
      case 6: // $bb5
        var $42=HEAP[$tuple]; //@line 1207 "_testcapimodule.c"
        HEAP[$0]=$42; //@line 1207 "_testcapimodule.c"
        var $43=HEAP[$0]; //@line 1207 "_testcapimodule.c"
        HEAP[$retval]=$43; //@line 1207 "_testcapimodule.c"
        __label__ = 7; break; //@line 1207 "_testcapimodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1207 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1207 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_exception($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $exc=__stackBase__+16;
        var $exc_args=__stackBase__+20;
        var $v=__stackBase__+24;
        var $num_args=__stackBase__+28;
        var $i=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1217 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str99)&4294967295), $exc, $num_args); //@line 1217 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 1217 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1217 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1219 "_testcapimodule.c"
        __label__ = 18; break; //@line 1219 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $5=(($4+4)&4294967295); //@line 1220 "_testcapimodule.c"
        var $6=HEAP[$5]; //@line 1220 "_testcapimodule.c"
        var $7=($6)!=(_PyClass_Type); //@line 1220 "_testcapimodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1220 "_testcapimodule.c"
      case 3: // $bb2
        var $8=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $9=(($8+4)&4294967295); //@line 1220 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1220 "_testcapimodule.c"
        var $11=(($10+84)&4294967295); //@line 1220 "_testcapimodule.c"
        var $12=HEAP[$11]; //@line 1220 "_testcapimodule.c"
        var $13=((($12))|0) >= 0; //@line 1220 "_testcapimodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1220 "_testcapimodule.c"
      case 4: // $bb3
        var $14=HEAP[$exc]; //@line 1220 "_testcapimodule.c"
        var $15=$14; //@line 1220 "_testcapimodule.c"
        var $16=(($15+84)&4294967295); //@line 1220 "_testcapimodule.c"
        var $17=HEAP[$16]; //@line 1220 "_testcapimodule.c"
        var $18=($17) & 1073741824; //@line 1220 "_testcapimodule.c"
        var $19=((($18))|0)==0; //@line 1220 "_testcapimodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1220 "_testcapimodule.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 1221 "_testcapimodule.c"
        var $21=_PyErr_Format($20, ((__str100)&4294967295)); //@line 1221 "_testcapimodule.c"
        HEAP[$0]=0; //@line 1222 "_testcapimodule.c"
        __label__ = 18; break; //@line 1222 "_testcapimodule.c"
      case 6: // $bb5
        var $22=HEAP[$num_args]; //@line 1225 "_testcapimodule.c"
        var $23=_PyTuple_New($22); //@line 1225 "_testcapimodule.c"
        HEAP[$exc_args]=$23; //@line 1225 "_testcapimodule.c"
        var $24=HEAP[$exc_args]; //@line 1226 "_testcapimodule.c"
        var $25=($24)==0; //@line 1226 "_testcapimodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1226 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1227 "_testcapimodule.c"
        __label__ = 18; break; //@line 1227 "_testcapimodule.c"
      case 8: // $bb7
        HEAP[$i]=0; //@line 1228 "_testcapimodule.c"
        __label__ = 14; break; //@line 1228 "_testcapimodule.c"
      case 9: // $bb8
        var $26=HEAP[$i]; //@line 1229 "_testcapimodule.c"
        var $27=_PyInt_FromLong($26); //@line 1229 "_testcapimodule.c"
        HEAP[$v]=$27; //@line 1229 "_testcapimodule.c"
        var $28=HEAP[$v]; //@line 1230 "_testcapimodule.c"
        var $29=($28)==0; //@line 1230 "_testcapimodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1230 "_testcapimodule.c"
      case 10: // $bb9
        var $30=HEAP[$exc_args]; //@line 1231 "_testcapimodule.c"
        var $31=(($30)&4294967295); //@line 1231 "_testcapimodule.c"
        var $32=HEAP[$31]; //@line 1231 "_testcapimodule.c"
        var $33=((($32) - 1)&4294967295); //@line 1231 "_testcapimodule.c"
        var $34=HEAP[$exc_args]; //@line 1231 "_testcapimodule.c"
        var $35=(($34)&4294967295); //@line 1231 "_testcapimodule.c"
        HEAP[$35]=$33; //@line 1231 "_testcapimodule.c"
        var $36=HEAP[$exc_args]; //@line 1231 "_testcapimodule.c"
        var $37=(($36)&4294967295); //@line 1231 "_testcapimodule.c"
        var $38=HEAP[$37]; //@line 1231 "_testcapimodule.c"
        var $39=((($38))|0)==0; //@line 1231 "_testcapimodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1231 "_testcapimodule.c"
      case 11: // $bb10
        var $40=HEAP[$exc_args]; //@line 1231 "_testcapimodule.c"
        var $41=(($40+4)&4294967295); //@line 1231 "_testcapimodule.c"
        var $42=HEAP[$41]; //@line 1231 "_testcapimodule.c"
        var $43=(($42+24)&4294967295); //@line 1231 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1231 "_testcapimodule.c"
        var $45=HEAP[$exc_args]; //@line 1231 "_testcapimodule.c"
        FUNCTION_TABLE[$44]($45); //@line 1231 "_testcapimodule.c"
        __label__ = 12; break; //@line 1231 "_testcapimodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 1232 "_testcapimodule.c"
        __label__ = 18; break; //@line 1232 "_testcapimodule.c"
      case 13: // $bb12
        var $46=HEAP[$exc_args]; //@line 1234 "_testcapimodule.c"
        var $47=$46; //@line 1234 "_testcapimodule.c"
        var $48=HEAP[$i]; //@line 1234 "_testcapimodule.c"
        var $49=(($47+12)&4294967295); //@line 1234 "_testcapimodule.c"
        var $50=(($49+$48*4)&4294967295); //@line 1234 "_testcapimodule.c"
        var $51=HEAP[$v]; //@line 1234 "_testcapimodule.c"
        HEAP[$50]=$51; //@line 1234 "_testcapimodule.c"
        var $52=HEAP[$i]; //@line 1228 "_testcapimodule.c"
        var $53=((($52) + 1)&4294967295); //@line 1228 "_testcapimodule.c"
        HEAP[$i]=$53; //@line 1228 "_testcapimodule.c"
        __label__ = 14; break; //@line 1228 "_testcapimodule.c"
      case 14: // $bb13
        var $54=HEAP[$num_args]; //@line 1228 "_testcapimodule.c"
        var $55=HEAP[$i]; //@line 1228 "_testcapimodule.c"
        var $56=((($55))|0) < ((($54))|0); //@line 1228 "_testcapimodule.c"
        if ($56) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 1228 "_testcapimodule.c"
      case 15: // $bb14
        var $57=HEAP[$exc]; //@line 1236 "_testcapimodule.c"
        var $58=HEAP[$exc_args]; //@line 1236 "_testcapimodule.c"
        _PyErr_SetObject($57, $58); //@line 1236 "_testcapimodule.c"
        var $59=HEAP[$exc_args]; //@line 1237 "_testcapimodule.c"
        var $60=(($59)&4294967295); //@line 1237 "_testcapimodule.c"
        var $61=HEAP[$60]; //@line 1237 "_testcapimodule.c"
        var $62=((($61) - 1)&4294967295); //@line 1237 "_testcapimodule.c"
        var $63=HEAP[$exc_args]; //@line 1237 "_testcapimodule.c"
        var $64=(($63)&4294967295); //@line 1237 "_testcapimodule.c"
        HEAP[$64]=$62; //@line 1237 "_testcapimodule.c"
        var $65=HEAP[$exc_args]; //@line 1237 "_testcapimodule.c"
        var $66=(($65)&4294967295); //@line 1237 "_testcapimodule.c"
        var $67=HEAP[$66]; //@line 1237 "_testcapimodule.c"
        var $68=((($67))|0)==0; //@line 1237 "_testcapimodule.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1237 "_testcapimodule.c"
      case 16: // $bb15
        var $69=HEAP[$exc_args]; //@line 1237 "_testcapimodule.c"
        var $70=(($69+4)&4294967295); //@line 1237 "_testcapimodule.c"
        var $71=HEAP[$70]; //@line 1237 "_testcapimodule.c"
        var $72=(($71+24)&4294967295); //@line 1237 "_testcapimodule.c"
        var $73=HEAP[$72]; //@line 1237 "_testcapimodule.c"
        var $74=HEAP[$exc_args]; //@line 1237 "_testcapimodule.c"
        FUNCTION_TABLE[$73]($74); //@line 1237 "_testcapimodule.c"
        __label__ = 17; break; //@line 1237 "_testcapimodule.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 1238 "_testcapimodule.c"
        __label__ = 18; break; //@line 1238 "_testcapimodule.c"
      case 18: // $bb17
        var $75=HEAP[$0]; //@line 1219 "_testcapimodule.c"
        HEAP[$retval]=$75; //@line 1219 "_testcapimodule.c"
        __label__ = 19; break; //@line 1219 "_testcapimodule.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 1219 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1219 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_datetime_capi($self, $args) {
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
        var $1=HEAP[_PyDateTimeAPI]; //@line 1246 "_testcapimodule.c"
        var $2=($1)!=0; //@line 1246 "_testcapimodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1246 "_testcapimodule.c"
      case 1: // $bb
        var $3=HEAP[_test_run_counter]; //@line 1247 "_testcapimodule.c"
        var $4=((($3))|0)!=0; //@line 1247 "_testcapimodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1247 "_testcapimodule.c"
      case 2: // $bb1
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1249 "_testcapimodule.c"
        var $6=((($5) + 1)&4294967295); //@line 1249 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 1249 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1249 "_testcapimodule.c"
        __label__ = 7; break; //@line 1249 "_testcapimodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_AssertionError]; //@line 1252 "_testcapimodule.c"
        _PyErr_SetString($7, ((__str101)&4294967295)); //@line 1252 "_testcapimodule.c"
        HEAP[$0]=0; //@line 1254 "_testcapimodule.c"
        __label__ = 7; break; //@line 1254 "_testcapimodule.c"
      case 4: // $bb3
        var $8=HEAP[_test_run_counter]; //@line 1257 "_testcapimodule.c"
        var $9=((($8) + 1)&4294967295); //@line 1257 "_testcapimodule.c"
        HEAP[_test_run_counter]=$9; //@line 1257 "_testcapimodule.c"
        var $10=_PyCapsule_Import(((__str102)&4294967295), 0); //@line 1258 "_testcapimodule.c"
        var $11=$10; //@line 1258 "_testcapimodule.c"
        HEAP[_PyDateTimeAPI]=$11; //@line 1258 "_testcapimodule.c"
        var $12=HEAP[_PyDateTimeAPI]; //@line 1259 "_testcapimodule.c"
        var $13=($12)!=0; //@line 1259 "_testcapimodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1259 "_testcapimodule.c"
      case 5: // $bb4
        var $14=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1260 "_testcapimodule.c"
        var $15=((($14) + 1)&4294967295); //@line 1260 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$15; //@line 1260 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1260 "_testcapimodule.c"
        __label__ = 7; break; //@line 1260 "_testcapimodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 1262 "_testcapimodule.c"
        __label__ = 7; break; //@line 1262 "_testcapimodule.c"
      case 7: // $bb6
        var $16=HEAP[$0]; //@line 1249 "_testcapimodule.c"
        HEAP[$retval]=$16; //@line 1249 "_testcapimodule.c"
        __label__ = 8; break; //@line 1249 "_testcapimodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1249 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1249 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_string_from_format($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $msg=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_PyString_FromFormat(((__str103)&4294967295), 1); //@line 1406 "_testcapimodule.c"
        HEAP[$result]=$1; //@line 1406 "_testcapimodule.c"
        var $2=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $3=($2)==0; //@line 1406 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1406 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1406 "_testcapimodule.c"
        __label__ = 53; break; //@line 1406 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $5=_PyString_AsString($4); //@line 1406 "_testcapimodule.c"
        var $6=_strcmp($5, ((__str104)&4294967295)); //@line 1406 "_testcapimodule.c"
        var $7=((($6))|0)!=0; //@line 1406 "_testcapimodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1406 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[$msg]=((__str105)&4294967295); //@line 1406 "_testcapimodule.c"
        __label__ = 49; break; //@line 1406 "_testcapimodule.c"
      case 4: // $bb3
        var $8=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $9=(($8)&4294967295); //@line 1406 "_testcapimodule.c"
        var $10=HEAP[$9]; //@line 1406 "_testcapimodule.c"
        var $11=((($10) - 1)&4294967295); //@line 1406 "_testcapimodule.c"
        var $12=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $13=(($12)&4294967295); //@line 1406 "_testcapimodule.c"
        HEAP[$13]=$11; //@line 1406 "_testcapimodule.c"
        var $14=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $15=(($14)&4294967295); //@line 1406 "_testcapimodule.c"
        var $16=HEAP[$15]; //@line 1406 "_testcapimodule.c"
        var $17=((($16))|0)==0; //@line 1406 "_testcapimodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1406 "_testcapimodule.c"
      case 5: // $bb4
        var $18=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        var $19=(($18+4)&4294967295); //@line 1406 "_testcapimodule.c"
        var $20=HEAP[$19]; //@line 1406 "_testcapimodule.c"
        var $21=(($20+24)&4294967295); //@line 1406 "_testcapimodule.c"
        var $22=HEAP[$21]; //@line 1406 "_testcapimodule.c"
        var $23=HEAP[$result]; //@line 1406 "_testcapimodule.c"
        FUNCTION_TABLE[$22]($23); //@line 1406 "_testcapimodule.c"
        __label__ = 6; break; //@line 1406 "_testcapimodule.c"
      case 6: // $bb5
        var $24=_PyString_FromFormat(((__str106)&4294967295), 1); //@line 1407 "_testcapimodule.c"
        HEAP[$result]=$24; //@line 1407 "_testcapimodule.c"
        var $25=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $26=($25)==0; //@line 1407 "_testcapimodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1407 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1407 "_testcapimodule.c"
        __label__ = 53; break; //@line 1407 "_testcapimodule.c"
      case 8: // $bb7
        var $27=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $28=_PyString_AsString($27); //@line 1407 "_testcapimodule.c"
        var $29=_strcmp($28, ((__str104)&4294967295)); //@line 1407 "_testcapimodule.c"
        var $30=((($29))|0)!=0; //@line 1407 "_testcapimodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1407 "_testcapimodule.c"
      case 9: // $bb8
        HEAP[$msg]=((__str107)&4294967295); //@line 1407 "_testcapimodule.c"
        __label__ = 49; break; //@line 1407 "_testcapimodule.c"
      case 10: // $bb9
        var $31=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $32=(($31)&4294967295); //@line 1407 "_testcapimodule.c"
        var $33=HEAP[$32]; //@line 1407 "_testcapimodule.c"
        var $34=((($33) - 1)&4294967295); //@line 1407 "_testcapimodule.c"
        var $35=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $36=(($35)&4294967295); //@line 1407 "_testcapimodule.c"
        HEAP[$36]=$34; //@line 1407 "_testcapimodule.c"
        var $37=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $38=(($37)&4294967295); //@line 1407 "_testcapimodule.c"
        var $39=HEAP[$38]; //@line 1407 "_testcapimodule.c"
        var $40=((($39))|0)==0; //@line 1407 "_testcapimodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1407 "_testcapimodule.c"
      case 11: // $bb10
        var $41=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        var $42=(($41+4)&4294967295); //@line 1407 "_testcapimodule.c"
        var $43=HEAP[$42]; //@line 1407 "_testcapimodule.c"
        var $44=(($43+24)&4294967295); //@line 1407 "_testcapimodule.c"
        var $45=HEAP[$44]; //@line 1407 "_testcapimodule.c"
        var $46=HEAP[$result]; //@line 1407 "_testcapimodule.c"
        FUNCTION_TABLE[$45]($46); //@line 1407 "_testcapimodule.c"
        __label__ = 12; break; //@line 1407 "_testcapimodule.c"
      case 12: // $bb11
        var $47=_PyString_FromFormat(((__str108)&4294967295), 1); //@line 1409 "_testcapimodule.c"
        HEAP[$result]=$47; //@line 1409 "_testcapimodule.c"
        var $48=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $49=($48)==0; //@line 1409 "_testcapimodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1409 "_testcapimodule.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 1409 "_testcapimodule.c"
        __label__ = 53; break; //@line 1409 "_testcapimodule.c"
      case 14: // $bb13
        var $50=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $51=_PyString_AsString($50); //@line 1409 "_testcapimodule.c"
        var $52=_strcmp($51, ((__str104)&4294967295)); //@line 1409 "_testcapimodule.c"
        var $53=((($52))|0)!=0; //@line 1409 "_testcapimodule.c"
        if ($53) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1409 "_testcapimodule.c"
      case 15: // $bb14
        HEAP[$msg]=((__str109)&4294967295); //@line 1409 "_testcapimodule.c"
        __label__ = 49; break; //@line 1409 "_testcapimodule.c"
      case 16: // $bb15
        var $54=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $55=(($54)&4294967295); //@line 1409 "_testcapimodule.c"
        var $56=HEAP[$55]; //@line 1409 "_testcapimodule.c"
        var $57=((($56) - 1)&4294967295); //@line 1409 "_testcapimodule.c"
        var $58=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $59=(($58)&4294967295); //@line 1409 "_testcapimodule.c"
        HEAP[$59]=$57; //@line 1409 "_testcapimodule.c"
        var $60=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $61=(($60)&4294967295); //@line 1409 "_testcapimodule.c"
        var $62=HEAP[$61]; //@line 1409 "_testcapimodule.c"
        var $63=((($62))|0)==0; //@line 1409 "_testcapimodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1409 "_testcapimodule.c"
      case 17: // $bb16
        var $64=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        var $65=(($64+4)&4294967295); //@line 1409 "_testcapimodule.c"
        var $66=HEAP[$65]; //@line 1409 "_testcapimodule.c"
        var $67=(($66+24)&4294967295); //@line 1409 "_testcapimodule.c"
        var $68=HEAP[$67]; //@line 1409 "_testcapimodule.c"
        var $69=HEAP[$result]; //@line 1409 "_testcapimodule.c"
        FUNCTION_TABLE[$68]($69); //@line 1409 "_testcapimodule.c"
        __label__ = 18; break; //@line 1409 "_testcapimodule.c"
      case 18: // $bb17
        var $70=_PyString_FromFormat(((__str110)&4294967295), 1); //@line 1412 "_testcapimodule.c"
        HEAP[$result]=$70; //@line 1412 "_testcapimodule.c"
        var $71=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $72=($71)==0; //@line 1412 "_testcapimodule.c"
        if ($72) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1412 "_testcapimodule.c"
      case 19: // $bb18
        HEAP[$0]=0; //@line 1412 "_testcapimodule.c"
        __label__ = 53; break; //@line 1412 "_testcapimodule.c"
      case 20: // $bb19
        var $73=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $74=_PyString_AsString($73); //@line 1412 "_testcapimodule.c"
        var $75=_strcmp($74, ((__str104)&4294967295)); //@line 1412 "_testcapimodule.c"
        var $76=((($75))|0)!=0; //@line 1412 "_testcapimodule.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1412 "_testcapimodule.c"
      case 21: // $bb20
        HEAP[$msg]=((__str111)&4294967295); //@line 1412 "_testcapimodule.c"
        __label__ = 49; break; //@line 1412 "_testcapimodule.c"
      case 22: // $bb21
        var $77=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $78=(($77)&4294967295); //@line 1412 "_testcapimodule.c"
        var $79=HEAP[$78]; //@line 1412 "_testcapimodule.c"
        var $80=((($79) - 1)&4294967295); //@line 1412 "_testcapimodule.c"
        var $81=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $82=(($81)&4294967295); //@line 1412 "_testcapimodule.c"
        HEAP[$82]=$80; //@line 1412 "_testcapimodule.c"
        var $83=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $84=(($83)&4294967295); //@line 1412 "_testcapimodule.c"
        var $85=HEAP[$84]; //@line 1412 "_testcapimodule.c"
        var $86=((($85))|0)==0; //@line 1412 "_testcapimodule.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1412 "_testcapimodule.c"
      case 23: // $bb22
        var $87=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        var $88=(($87+4)&4294967295); //@line 1412 "_testcapimodule.c"
        var $89=HEAP[$88]; //@line 1412 "_testcapimodule.c"
        var $90=(($89+24)&4294967295); //@line 1412 "_testcapimodule.c"
        var $91=HEAP[$90]; //@line 1412 "_testcapimodule.c"
        var $92=HEAP[$result]; //@line 1412 "_testcapimodule.c"
        FUNCTION_TABLE[$91]($92); //@line 1412 "_testcapimodule.c"
        __label__ = 24; break; //@line 1412 "_testcapimodule.c"
      case 24: // $bb23
        var $93=_PyString_FromFormat(((__str112)&4294967295), 1); //@line 1413 "_testcapimodule.c"
        HEAP[$result]=$93; //@line 1413 "_testcapimodule.c"
        var $94=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $95=($94)==0; //@line 1413 "_testcapimodule.c"
        if ($95) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1413 "_testcapimodule.c"
      case 25: // $bb24
        HEAP[$0]=0; //@line 1413 "_testcapimodule.c"
        __label__ = 53; break; //@line 1413 "_testcapimodule.c"
      case 26: // $bb25
        var $96=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $97=_PyString_AsString($96); //@line 1413 "_testcapimodule.c"
        var $98=_strcmp($97, ((__str104)&4294967295)); //@line 1413 "_testcapimodule.c"
        var $99=((($98))|0)!=0; //@line 1413 "_testcapimodule.c"
        if ($99) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1413 "_testcapimodule.c"
      case 27: // $bb26
        HEAP[$msg]=((__str113)&4294967295); //@line 1413 "_testcapimodule.c"
        __label__ = 49; break; //@line 1413 "_testcapimodule.c"
      case 28: // $bb27
        var $100=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $101=(($100)&4294967295); //@line 1413 "_testcapimodule.c"
        var $102=HEAP[$101]; //@line 1413 "_testcapimodule.c"
        var $103=((($102) - 1)&4294967295); //@line 1413 "_testcapimodule.c"
        var $104=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $105=(($104)&4294967295); //@line 1413 "_testcapimodule.c"
        HEAP[$105]=$103; //@line 1413 "_testcapimodule.c"
        var $106=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $107=(($106)&4294967295); //@line 1413 "_testcapimodule.c"
        var $108=HEAP[$107]; //@line 1413 "_testcapimodule.c"
        var $109=((($108))|0)==0; //@line 1413 "_testcapimodule.c"
        if ($109) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1413 "_testcapimodule.c"
      case 29: // $bb28
        var $110=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        var $111=(($110+4)&4294967295); //@line 1413 "_testcapimodule.c"
        var $112=HEAP[$111]; //@line 1413 "_testcapimodule.c"
        var $113=(($112+24)&4294967295); //@line 1413 "_testcapimodule.c"
        var $114=HEAP[$113]; //@line 1413 "_testcapimodule.c"
        var $115=HEAP[$result]; //@line 1413 "_testcapimodule.c"
        FUNCTION_TABLE[$114]($115); //@line 1413 "_testcapimodule.c"
        __label__ = 30; break; //@line 1413 "_testcapimodule.c"
      case 30: // $bb29
        var $116=_PyString_FromFormat(((__str114)&4294967295), 1); //@line 1414 "_testcapimodule.c"
        HEAP[$result]=$116; //@line 1414 "_testcapimodule.c"
        var $117=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $118=($117)==0; //@line 1414 "_testcapimodule.c"
        if ($118) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1414 "_testcapimodule.c"
      case 31: // $bb30
        HEAP[$0]=0; //@line 1414 "_testcapimodule.c"
        __label__ = 53; break; //@line 1414 "_testcapimodule.c"
      case 32: // $bb31
        var $119=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $120=_PyString_AsString($119); //@line 1414 "_testcapimodule.c"
        var $121=_strcmp($120, ((__str104)&4294967295)); //@line 1414 "_testcapimodule.c"
        var $122=((($121))|0)!=0; //@line 1414 "_testcapimodule.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1414 "_testcapimodule.c"
      case 33: // $bb32
        HEAP[$msg]=((__str115)&4294967295); //@line 1414 "_testcapimodule.c"
        __label__ = 49; break; //@line 1414 "_testcapimodule.c"
      case 34: // $bb33
        var $123=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $124=(($123)&4294967295); //@line 1414 "_testcapimodule.c"
        var $125=HEAP[$124]; //@line 1414 "_testcapimodule.c"
        var $126=((($125) - 1)&4294967295); //@line 1414 "_testcapimodule.c"
        var $127=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $128=(($127)&4294967295); //@line 1414 "_testcapimodule.c"
        HEAP[$128]=$126; //@line 1414 "_testcapimodule.c"
        var $129=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $130=(($129)&4294967295); //@line 1414 "_testcapimodule.c"
        var $131=HEAP[$130]; //@line 1414 "_testcapimodule.c"
        var $132=((($131))|0)==0; //@line 1414 "_testcapimodule.c"
        if ($132) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1414 "_testcapimodule.c"
      case 35: // $bb34
        var $133=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        var $134=(($133+4)&4294967295); //@line 1414 "_testcapimodule.c"
        var $135=HEAP[$134]; //@line 1414 "_testcapimodule.c"
        var $136=(($135+24)&4294967295); //@line 1414 "_testcapimodule.c"
        var $137=HEAP[$136]; //@line 1414 "_testcapimodule.c"
        var $138=HEAP[$result]; //@line 1414 "_testcapimodule.c"
        FUNCTION_TABLE[$137]($138); //@line 1414 "_testcapimodule.c"
        __label__ = 36; break; //@line 1414 "_testcapimodule.c"
      case 36: // $bb35
        var $139=_PyString_FromFormat(((__str116)&4294967295), 1); //@line 1418 "_testcapimodule.c"
        HEAP[$result]=$139; //@line 1418 "_testcapimodule.c"
        var $140=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $141=($140)==0; //@line 1418 "_testcapimodule.c"
        if ($141) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1418 "_testcapimodule.c"
      case 37: // $bb36
        HEAP[$0]=0; //@line 1418 "_testcapimodule.c"
        __label__ = 53; break; //@line 1418 "_testcapimodule.c"
      case 38: // $bb37
        var $142=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $143=_PyString_AsString($142); //@line 1418 "_testcapimodule.c"
        var $144=_strcmp($143, ((__str104)&4294967295)); //@line 1418 "_testcapimodule.c"
        var $145=((($144))|0)!=0; //@line 1418 "_testcapimodule.c"
        if ($145) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1418 "_testcapimodule.c"
      case 39: // $bb38
        HEAP[$msg]=((__str117)&4294967295); //@line 1418 "_testcapimodule.c"
        __label__ = 49; break; //@line 1418 "_testcapimodule.c"
      case 40: // $bb39
        var $146=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $147=(($146)&4294967295); //@line 1418 "_testcapimodule.c"
        var $148=HEAP[$147]; //@line 1418 "_testcapimodule.c"
        var $149=((($148) - 1)&4294967295); //@line 1418 "_testcapimodule.c"
        var $150=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $151=(($150)&4294967295); //@line 1418 "_testcapimodule.c"
        HEAP[$151]=$149; //@line 1418 "_testcapimodule.c"
        var $152=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $153=(($152)&4294967295); //@line 1418 "_testcapimodule.c"
        var $154=HEAP[$153]; //@line 1418 "_testcapimodule.c"
        var $155=((($154))|0)==0; //@line 1418 "_testcapimodule.c"
        if ($155) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1418 "_testcapimodule.c"
      case 41: // $bb40
        var $156=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        var $157=(($156+4)&4294967295); //@line 1418 "_testcapimodule.c"
        var $158=HEAP[$157]; //@line 1418 "_testcapimodule.c"
        var $159=(($158+24)&4294967295); //@line 1418 "_testcapimodule.c"
        var $160=HEAP[$159]; //@line 1418 "_testcapimodule.c"
        var $161=HEAP[$result]; //@line 1418 "_testcapimodule.c"
        FUNCTION_TABLE[$160]($161); //@line 1418 "_testcapimodule.c"
        __label__ = 42; break; //@line 1418 "_testcapimodule.c"
      case 42: // $bb41
        var $162=_PyString_FromFormat(((__str118)&4294967295), 1); //@line 1419 "_testcapimodule.c"
        HEAP[$result]=$162; //@line 1419 "_testcapimodule.c"
        var $163=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $164=($163)==0; //@line 1419 "_testcapimodule.c"
        if ($164) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1419 "_testcapimodule.c"
      case 43: // $bb42
        HEAP[$0]=0; //@line 1419 "_testcapimodule.c"
        __label__ = 53; break; //@line 1419 "_testcapimodule.c"
      case 44: // $bb43
        var $165=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $166=_PyString_AsString($165); //@line 1419 "_testcapimodule.c"
        var $167=_strcmp($166, ((__str104)&4294967295)); //@line 1419 "_testcapimodule.c"
        var $168=((($167))|0)!=0; //@line 1419 "_testcapimodule.c"
        if ($168) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1419 "_testcapimodule.c"
      case 45: // $bb44
        HEAP[$msg]=((__str119)&4294967295); //@line 1419 "_testcapimodule.c"
        __label__ = 49; break; //@line 1419 "_testcapimodule.c"
      case 46: // $bb45
        var $169=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $170=(($169)&4294967295); //@line 1419 "_testcapimodule.c"
        var $171=HEAP[$170]; //@line 1419 "_testcapimodule.c"
        var $172=((($171) - 1)&4294967295); //@line 1419 "_testcapimodule.c"
        var $173=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $174=(($173)&4294967295); //@line 1419 "_testcapimodule.c"
        HEAP[$174]=$172; //@line 1419 "_testcapimodule.c"
        var $175=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $176=(($175)&4294967295); //@line 1419 "_testcapimodule.c"
        var $177=HEAP[$176]; //@line 1419 "_testcapimodule.c"
        var $178=((($177))|0)==0; //@line 1419 "_testcapimodule.c"
        if ($178) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1419 "_testcapimodule.c"
      case 47: // $bb46
        var $179=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        var $180=(($179+4)&4294967295); //@line 1419 "_testcapimodule.c"
        var $181=HEAP[$180]; //@line 1419 "_testcapimodule.c"
        var $182=(($181+24)&4294967295); //@line 1419 "_testcapimodule.c"
        var $183=HEAP[$182]; //@line 1419 "_testcapimodule.c"
        var $184=HEAP[$result]; //@line 1419 "_testcapimodule.c"
        FUNCTION_TABLE[$183]($184); //@line 1419 "_testcapimodule.c"
        __label__ = 48; break; //@line 1419 "_testcapimodule.c"
      case 48: // $bb47
        var $185=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1422 "_testcapimodule.c"
        var $186=((($185) + 1)&4294967295); //@line 1422 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$186; //@line 1422 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1422 "_testcapimodule.c"
        __label__ = 53; break; //@line 1422 "_testcapimodule.c"
      case 49: // $Fail
        var $187=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        var $188=($187)!=0; //@line 1425 "_testcapimodule.c"
        if ($188) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 1425 "_testcapimodule.c"
      case 50: // $bb48
        var $189=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        var $190=(($189)&4294967295); //@line 1425 "_testcapimodule.c"
        var $191=HEAP[$190]; //@line 1425 "_testcapimodule.c"
        var $192=((($191) - 1)&4294967295); //@line 1425 "_testcapimodule.c"
        var $193=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        var $194=(($193)&4294967295); //@line 1425 "_testcapimodule.c"
        HEAP[$194]=$192; //@line 1425 "_testcapimodule.c"
        var $195=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        var $196=(($195)&4294967295); //@line 1425 "_testcapimodule.c"
        var $197=HEAP[$196]; //@line 1425 "_testcapimodule.c"
        var $198=((($197))|0)==0; //@line 1425 "_testcapimodule.c"
        if ($198) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1425 "_testcapimodule.c"
      case 51: // $bb49
        var $199=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        var $200=(($199+4)&4294967295); //@line 1425 "_testcapimodule.c"
        var $201=HEAP[$200]; //@line 1425 "_testcapimodule.c"
        var $202=(($201+24)&4294967295); //@line 1425 "_testcapimodule.c"
        var $203=HEAP[$202]; //@line 1425 "_testcapimodule.c"
        var $204=HEAP[$result]; //@line 1425 "_testcapimodule.c"
        FUNCTION_TABLE[$203]($204); //@line 1425 "_testcapimodule.c"
        __label__ = 52; break; //@line 1425 "_testcapimodule.c"
      case 52: // $bb50
        var $205=HEAP[$msg]; //@line 1426 "_testcapimodule.c"
        var $206=_raiseTestError(((__str120)&4294967295), $205); //@line 1426 "_testcapimodule.c"
        HEAP[$0]=$206; //@line 1426 "_testcapimodule.c"
        __label__ = 53; break; //@line 1426 "_testcapimodule.c"
      case 53: // $bb51
        var $207=HEAP[$0]; //@line 1406 "_testcapimodule.c"
        HEAP[$retval]=$207; //@line 1406 "_testcapimodule.c"
        __label__ = 54; break; //@line 1406 "_testcapimodule.c"
      case 54: // $return
        var $retval52=HEAP[$retval]; //@line 1406 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval52; //@line 1406 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _capsule_destructor($o) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$o_addr]=$o;
        var $0=HEAP[_capsule_destructor_call_count]; //@line 1442 "_testcapimodule.c"
        var $1=((($0) + 1)&4294967295); //@line 1442 "_testcapimodule.c"
        HEAP[_capsule_destructor_call_count]=$1; //@line 1442 "_testcapimodule.c"
        var $2=HEAP[$o_addr]; //@line 1443 "_testcapimodule.c"
        var $3=_PyCapsule_GetContext($2); //@line 1443 "_testcapimodule.c"
        var $4=HEAP[_capsule_context]; //@line 1443 "_testcapimodule.c"
        var $5=($3)!=($4); //@line 1443 "_testcapimodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "_testcapimodule.c"
      case 1: // $bb
        HEAP[_capsule_error]=((__str124)&4294967295); //@line 1444 "_testcapimodule.c"
        __label__ = 8; break; //@line 1444 "_testcapimodule.c"
      case 2: // $bb1
        var $6=HEAP[$o_addr]; //@line 1445 "_testcapimodule.c"
        var $7=_PyCapsule_GetDestructor($6); //@line 1445 "_testcapimodule.c"
        var $8=($7)!=((FUNCTION_TABLE_OFFSET + 6)); //@line 1445 "_testcapimodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1445 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[_capsule_error]=((__str125)&4294967295); //@line 1446 "_testcapimodule.c"
        __label__ = 8; break; //@line 1446 "_testcapimodule.c"
      case 4: // $bb3
        var $9=HEAP[$o_addr]; //@line 1447 "_testcapimodule.c"
        var $10=_PyCapsule_GetName($9); //@line 1447 "_testcapimodule.c"
        var $11=HEAP[_capsule_name]; //@line 1447 "_testcapimodule.c"
        var $12=($10)!=($11); //@line 1447 "_testcapimodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1447 "_testcapimodule.c"
      case 5: // $bb4
        HEAP[_capsule_error]=((__str126)&4294967295); //@line 1448 "_testcapimodule.c"
        __label__ = 8; break; //@line 1448 "_testcapimodule.c"
      case 6: // $bb5
        var $13=HEAP[_capsule_name]; //@line 1449 "_testcapimodule.c"
        var $14=HEAP[$o_addr]; //@line 1449 "_testcapimodule.c"
        var $15=_PyCapsule_GetPointer($14, $13); //@line 1449 "_testcapimodule.c"
        var $16=HEAP[_capsule_pointer]; //@line 1449 "_testcapimodule.c"
        var $17=($15)!=($16); //@line 1449 "_testcapimodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1449 "_testcapimodule.c"
      case 7: // $bb6
        HEAP[_capsule_error]=((__str127)&4294967295); //@line 1450 "_testcapimodule.c"
        __label__ = 8; break; //@line 1450 "_testcapimodule.c"
      case 8: // $bb7
        __label__ = 9; break; //@line 1452 "_testcapimodule.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 1452 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_capsule($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 88; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $object=__stackBase__+16;
        var $error=__stackBase__+20;
        var $pointer=__stackBase__+24;
        var $pointer2=__stackBase__+28;
        var $known_capsules=__stackBase__+32;
        var $known=__stackBase__+80;
        var $module=__stackBase__+84;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$error]=0; //@line 1464 "_testcapimodule.c"
        var $known_capsules1=$known_capsules; //@line 1473 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($known_capsules1, 0, 48, 4, 0); //@line 1473 "_testcapimodule.c"
        var $1=(($known_capsules)&4294967295); //@line 1473 "_testcapimodule.c"
        var $2=(($1)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$2]=((__str128)&4294967295); //@line 1473 "_testcapimodule.c"
        var $3=(($known_capsules)&4294967295); //@line 1473 "_testcapimodule.c"
        var $4=(($3+4)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$4]=((__str129)&4294967295); //@line 1473 "_testcapimodule.c"
        var $5=(($known_capsules)&4294967295); //@line 1473 "_testcapimodule.c"
        var $6=(($5+8)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$6]=((__str130)&4294967295); //@line 1473 "_testcapimodule.c"
        var $7=(($known_capsules+12)&4294967295); //@line 1473 "_testcapimodule.c"
        var $8=(($7)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$8]=((__str131)&4294967295); //@line 1473 "_testcapimodule.c"
        var $9=(($known_capsules+12)&4294967295); //@line 1473 "_testcapimodule.c"
        var $10=(($9+4)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$10]=((__str132)&4294967295); //@line 1473 "_testcapimodule.c"
        var $11=(($known_capsules+12)&4294967295); //@line 1473 "_testcapimodule.c"
        var $12=(($11+8)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$12]=((__str133)&4294967295); //@line 1473 "_testcapimodule.c"
        var $13=(($known_capsules+24)&4294967295); //@line 1473 "_testcapimodule.c"
        var $14=(($13)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$14]=((__str102)&4294967295); //@line 1473 "_testcapimodule.c"
        var $15=(($known_capsules+24)&4294967295); //@line 1473 "_testcapimodule.c"
        var $16=(($15+4)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$16]=((__str134)&4294967295); //@line 1473 "_testcapimodule.c"
        var $17=(($known_capsules+24)&4294967295); //@line 1473 "_testcapimodule.c"
        var $18=(($17+8)&4294967295); //@line 1473 "_testcapimodule.c"
        HEAP[$18]=((__str135)&4294967295); //@line 1473 "_testcapimodule.c"
        var $19=(($known_capsules)&4294967295); //@line 1474 "_testcapimodule.c"
        HEAP[$known]=$19; //@line 1474 "_testcapimodule.c"
        var $20=HEAP[_capsule_name]; //@line 1487 "_testcapimodule.c"
        var $21=HEAP[_capsule_pointer]; //@line 1487 "_testcapimodule.c"
        var $22=_PyCapsule_New($21, $20, (FUNCTION_TABLE_OFFSET + 6)); //@line 1487 "_testcapimodule.c"
        HEAP[$object]=$22; //@line 1487 "_testcapimodule.c"
        var $23=HEAP[_capsule_context]; //@line 1488 "_testcapimodule.c"
        var $24=HEAP[$object]; //@line 1488 "_testcapimodule.c"
        var $25=_PyCapsule_SetContext($24, $23); //@line 1488 "_testcapimodule.c"
        var $26=HEAP[$object]; //@line 1489 "_testcapimodule.c"
        _capsule_destructor($26); //@line 1489 "_testcapimodule.c"
        var $27=HEAP[_capsule_error]; //@line 1490 "_testcapimodule.c"
        var $28=($27)!=0; //@line 1490 "_testcapimodule.c"
        if ($28) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1490 "_testcapimodule.c"
      case 1: // $bb
        var $29=HEAP[_capsule_error]; //@line 1490 "_testcapimodule.c"
        HEAP[$error]=$29; //@line 1490 "_testcapimodule.c"
        __label__ = 56; break; //@line 1490 "_testcapimodule.c"
      case 2: // $bb2
        var $30=HEAP[_capsule_destructor_call_count]; //@line 1490 "_testcapimodule.c"
        var $31=((($30))|0)==0; //@line 1490 "_testcapimodule.c"
        if ($31) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1490 "_testcapimodule.c"
      case 3: // $bb3
        HEAP[$error]=((__str136)&4294967295); //@line 1490 "_testcapimodule.c"
        __label__ = 56; break; //@line 1490 "_testcapimodule.c"
      case 4: // $bb4
        HEAP[_capsule_destructor_call_count]=0; //@line 1490 "_testcapimodule.c"
        var $32=HEAP[$object]; //@line 1491 "_testcapimodule.c"
        var $33=(($32)&4294967295); //@line 1491 "_testcapimodule.c"
        var $34=HEAP[$33]; //@line 1491 "_testcapimodule.c"
        var $35=((($34) - 1)&4294967295); //@line 1491 "_testcapimodule.c"
        var $36=HEAP[$object]; //@line 1491 "_testcapimodule.c"
        var $37=(($36)&4294967295); //@line 1491 "_testcapimodule.c"
        HEAP[$37]=$35; //@line 1491 "_testcapimodule.c"
        var $38=HEAP[$object]; //@line 1491 "_testcapimodule.c"
        var $39=(($38)&4294967295); //@line 1491 "_testcapimodule.c"
        var $40=HEAP[$39]; //@line 1491 "_testcapimodule.c"
        var $41=((($40))|0)==0; //@line 1491 "_testcapimodule.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1491 "_testcapimodule.c"
      case 5: // $bb5
        var $42=HEAP[$object]; //@line 1491 "_testcapimodule.c"
        var $43=(($42+4)&4294967295); //@line 1491 "_testcapimodule.c"
        var $44=HEAP[$43]; //@line 1491 "_testcapimodule.c"
        var $45=(($44+24)&4294967295); //@line 1491 "_testcapimodule.c"
        var $46=HEAP[$45]; //@line 1491 "_testcapimodule.c"
        var $47=HEAP[$object]; //@line 1491 "_testcapimodule.c"
        FUNCTION_TABLE[$46]($47); //@line 1491 "_testcapimodule.c"
        __label__ = 6; break; //@line 1491 "_testcapimodule.c"
      case 6: // $bb6
        var $48=HEAP[_capsule_error]; //@line 1492 "_testcapimodule.c"
        var $49=($48)!=0; //@line 1492 "_testcapimodule.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1492 "_testcapimodule.c"
      case 7: // $bb7
        var $50=HEAP[_capsule_error]; //@line 1492 "_testcapimodule.c"
        HEAP[$error]=$50; //@line 1492 "_testcapimodule.c"
        __label__ = 56; break; //@line 1492 "_testcapimodule.c"
      case 8: // $bb8
        var $51=HEAP[_capsule_destructor_call_count]; //@line 1492 "_testcapimodule.c"
        var $52=((($51))|0)==0; //@line 1492 "_testcapimodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1492 "_testcapimodule.c"
      case 9: // $bb9
        HEAP[$error]=((__str136)&4294967295); //@line 1492 "_testcapimodule.c"
        __label__ = 56; break; //@line 1492 "_testcapimodule.c"
      case 10: // $bb10
        HEAP[_capsule_destructor_call_count]=0; //@line 1492 "_testcapimodule.c"
        var $53=HEAP[$known]; //@line 1494 "_testcapimodule.c"
        var $54=$53; //@line 1494 "_testcapimodule.c"
        var $55=_PyCapsule_New($54, ((__str137)&4294967295), 0); //@line 1494 "_testcapimodule.c"
        HEAP[$object]=$55; //@line 1494 "_testcapimodule.c"
        var $56=HEAP[_capsule_pointer]; //@line 1495 "_testcapimodule.c"
        var $57=HEAP[$object]; //@line 1495 "_testcapimodule.c"
        var $58=_PyCapsule_SetPointer($57, $56); //@line 1495 "_testcapimodule.c"
        var $59=HEAP[_capsule_name]; //@line 1496 "_testcapimodule.c"
        var $60=HEAP[$object]; //@line 1496 "_testcapimodule.c"
        var $61=_PyCapsule_SetName($60, $59); //@line 1496 "_testcapimodule.c"
        var $62=HEAP[$object]; //@line 1497 "_testcapimodule.c"
        var $63=_PyCapsule_SetDestructor($62, (FUNCTION_TABLE_OFFSET + 6)); //@line 1497 "_testcapimodule.c"
        var $64=HEAP[_capsule_context]; //@line 1498 "_testcapimodule.c"
        var $65=HEAP[$object]; //@line 1498 "_testcapimodule.c"
        var $66=_PyCapsule_SetContext($65, $64); //@line 1498 "_testcapimodule.c"
        var $67=HEAP[$object]; //@line 1499 "_testcapimodule.c"
        _capsule_destructor($67); //@line 1499 "_testcapimodule.c"
        var $68=HEAP[_capsule_error]; //@line 1500 "_testcapimodule.c"
        var $69=($68)!=0; //@line 1500 "_testcapimodule.c"
        if ($69) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1500 "_testcapimodule.c"
      case 11: // $bb11
        var $70=HEAP[_capsule_error]; //@line 1500 "_testcapimodule.c"
        HEAP[$error]=$70; //@line 1500 "_testcapimodule.c"
        __label__ = 56; break; //@line 1500 "_testcapimodule.c"
      case 12: // $bb12
        var $71=HEAP[_capsule_destructor_call_count]; //@line 1500 "_testcapimodule.c"
        var $72=((($71))|0)==0; //@line 1500 "_testcapimodule.c"
        if ($72) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1500 "_testcapimodule.c"
      case 13: // $bb13
        HEAP[$error]=((__str136)&4294967295); //@line 1500 "_testcapimodule.c"
        __label__ = 56; break; //@line 1500 "_testcapimodule.c"
      case 14: // $bb14
        HEAP[_capsule_destructor_call_count]=0; //@line 1500 "_testcapimodule.c"
        var $73=HEAP[$object]; //@line 1502 "_testcapimodule.c"
        var $74=_PyCapsule_GetPointer($73, ((__str138)&4294967295)); //@line 1502 "_testcapimodule.c"
        HEAP[$pointer2]=$74; //@line 1502 "_testcapimodule.c"
        var $75=_PyErr_Occurred(); //@line 1503 "_testcapimodule.c"
        var $76=($75)==0; //@line 1503 "_testcapimodule.c"
        if ($76) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1503 "_testcapimodule.c"
      case 15: // $bb15
        HEAP[$error]=((__str139)&4294967295); //@line 1504 "_testcapimodule.c"
        __label__ = 56; break; //@line 1504 "_testcapimodule.c"
      case 16: // $bb16
        _PyErr_Clear(); //@line 1506 "_testcapimodule.c"
        var $77=HEAP[$pointer2]; //@line 1507 "_testcapimodule.c"
        var $78=($77)!=0; //@line 1507 "_testcapimodule.c"
        if ($78) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 1507 "_testcapimodule.c"
      case 17: // $bb17
        var $79=HEAP[_capsule_pointer]; //@line 1508 "_testcapimodule.c"
        var $80=HEAP[$pointer2]; //@line 1508 "_testcapimodule.c"
        var $81=($80)==($79); //@line 1508 "_testcapimodule.c"
        if ($81) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1508 "_testcapimodule.c"
      case 18: // $bb18
        HEAP[$error]=((__str140)&4294967295); //@line 1509 "_testcapimodule.c"
        __label__ = 56; break; //@line 1509 "_testcapimodule.c"
      case 19: // $bb19
        HEAP[$error]=((__str141)&4294967295); //@line 1512 "_testcapimodule.c"
        __label__ = 56; break; //@line 1512 "_testcapimodule.c"
      case 20: // $bb20
        var $82=HEAP[$object]; //@line 1516 "_testcapimodule.c"
        var $83=_PyCapsule_SetDestructor($82, 0); //@line 1516 "_testcapimodule.c"
        var $84=HEAP[$object]; //@line 1517 "_testcapimodule.c"
        var $85=(($84)&4294967295); //@line 1517 "_testcapimodule.c"
        var $86=HEAP[$85]; //@line 1517 "_testcapimodule.c"
        var $87=((($86) - 1)&4294967295); //@line 1517 "_testcapimodule.c"
        var $88=HEAP[$object]; //@line 1517 "_testcapimodule.c"
        var $89=(($88)&4294967295); //@line 1517 "_testcapimodule.c"
        HEAP[$89]=$87; //@line 1517 "_testcapimodule.c"
        var $90=HEAP[$object]; //@line 1517 "_testcapimodule.c"
        var $91=(($90)&4294967295); //@line 1517 "_testcapimodule.c"
        var $92=HEAP[$91]; //@line 1517 "_testcapimodule.c"
        var $93=((($92))|0)==0; //@line 1517 "_testcapimodule.c"
        if ($93) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1517 "_testcapimodule.c"
      case 21: // $bb21
        var $94=HEAP[$object]; //@line 1517 "_testcapimodule.c"
        var $95=(($94+4)&4294967295); //@line 1517 "_testcapimodule.c"
        var $96=HEAP[$95]; //@line 1517 "_testcapimodule.c"
        var $97=(($96+24)&4294967295); //@line 1517 "_testcapimodule.c"
        var $98=HEAP[$97]; //@line 1517 "_testcapimodule.c"
        var $99=HEAP[$object]; //@line 1517 "_testcapimodule.c"
        FUNCTION_TABLE[$98]($99); //@line 1517 "_testcapimodule.c"
        __label__ = 22; break; //@line 1517 "_testcapimodule.c"
      case 22: // $bb22
        var $100=HEAP[_capsule_destructor_call_count]; //@line 1518 "_testcapimodule.c"
        var $101=((($100))|0)!=0; //@line 1518 "_testcapimodule.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1518 "_testcapimodule.c"
      case 23: // $bb23
        HEAP[$error]=((__str142)&4294967295); //@line 1519 "_testcapimodule.c"
        __label__ = 56; break; //@line 1519 "_testcapimodule.c"
      case 24: // $bb24
        var $102=(($known_capsules)&4294967295); //@line 1522 "_testcapimodule.c"
        HEAP[$known]=$102; //@line 1522 "_testcapimodule.c"
        __label__ = 55; break; //@line 1522 "_testcapimodule.c"
      case 25: // $bb25
        var $103=HEAP[$known]; //@line 1536 "_testcapimodule.c"
        var $104=(($103+4)&4294967295); //@line 1536 "_testcapimodule.c"
        var $105=HEAP[$104]; //@line 1536 "_testcapimodule.c"
        var $106=_PyImport_ImportModule($105); //@line 1536 "_testcapimodule.c"
        HEAP[$module]=$106; //@line 1536 "_testcapimodule.c"
        var $107=HEAP[$module]; //@line 1537 "_testcapimodule.c"
        var $108=($107)!=0; //@line 1537 "_testcapimodule.c"
        if ($108) { __label__ = 26; break; } else { __label__ = 53; break; } //@line 1537 "_testcapimodule.c"
      case 26: // $bb26
        var $109=HEAP[$known]; //@line 1538 "_testcapimodule.c"
        var $110=(($109)&4294967295); //@line 1538 "_testcapimodule.c"
        var $111=HEAP[$110]; //@line 1538 "_testcapimodule.c"
        var $112=_PyCapsule_Import($111, 0); //@line 1538 "_testcapimodule.c"
        HEAP[$pointer]=$112; //@line 1538 "_testcapimodule.c"
        var $113=HEAP[$pointer]; //@line 1539 "_testcapimodule.c"
        var $114=($113)==0; //@line 1539 "_testcapimodule.c"
        if ($114) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1539 "_testcapimodule.c"
      case 27: // $bb27
        var $115=HEAP[$module]; //@line 1540 "_testcapimodule.c"
        var $116=(($115)&4294967295); //@line 1540 "_testcapimodule.c"
        var $117=HEAP[$116]; //@line 1540 "_testcapimodule.c"
        var $118=((($117) - 1)&4294967295); //@line 1540 "_testcapimodule.c"
        var $119=HEAP[$module]; //@line 1540 "_testcapimodule.c"
        var $120=(($119)&4294967295); //@line 1540 "_testcapimodule.c"
        HEAP[$120]=$118; //@line 1540 "_testcapimodule.c"
        var $121=HEAP[$module]; //@line 1540 "_testcapimodule.c"
        var $122=(($121)&4294967295); //@line 1540 "_testcapimodule.c"
        var $123=HEAP[$122]; //@line 1540 "_testcapimodule.c"
        var $124=((($123))|0)==0; //@line 1540 "_testcapimodule.c"
        if ($124) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1540 "_testcapimodule.c"
      case 28: // $bb28
        var $125=HEAP[$module]; //@line 1540 "_testcapimodule.c"
        var $126=(($125+4)&4294967295); //@line 1540 "_testcapimodule.c"
        var $127=HEAP[$126]; //@line 1540 "_testcapimodule.c"
        var $128=(($127+24)&4294967295); //@line 1540 "_testcapimodule.c"
        var $129=HEAP[$128]; //@line 1540 "_testcapimodule.c"
        var $130=HEAP[$module]; //@line 1540 "_testcapimodule.c"
        FUNCTION_TABLE[$129]($130); //@line 1540 "_testcapimodule.c"
        __label__ = 29; break; //@line 1540 "_testcapimodule.c"
      case 29: // $bb29
        var $131=HEAP[$known]; //@line 1541 "_testcapimodule.c"
        var $132=(($131+8)&4294967295); //@line 1541 "_testcapimodule.c"
        var $133=HEAP[$132]; //@line 1541 "_testcapimodule.c"
        var $134=HEAP[$known]; //@line 1541 "_testcapimodule.c"
        var $135=(($134+4)&4294967295); //@line 1541 "_testcapimodule.c"
        var $136=HEAP[$135]; //@line 1541 "_testcapimodule.c"
        var $137=_sprintf(((_buffer_10522)&4294967295), ((__str143)&4294967295), ((__str144)&4294967295), $136, $133); //@line 1541 "_testcapimodule.c"
        HEAP[$error]=((_buffer_10522)&4294967295); //@line 1541 "_testcapimodule.c"
        __label__ = 56; break; //@line 1541 "_testcapimodule.c"
      case 30: // $bb30
        var $138=HEAP[$known]; //@line 1543 "_testcapimodule.c"
        var $139=(($138+8)&4294967295); //@line 1543 "_testcapimodule.c"
        var $140=HEAP[$139]; //@line 1543 "_testcapimodule.c"
        var $141=HEAP[$module]; //@line 1543 "_testcapimodule.c"
        var $142=_PyObject_GetAttrString($141, $140); //@line 1543 "_testcapimodule.c"
        HEAP[$object]=$142; //@line 1543 "_testcapimodule.c"
        var $143=HEAP[$object]; //@line 1544 "_testcapimodule.c"
        var $144=($143)==0; //@line 1544 "_testcapimodule.c"
        if ($144) { __label__ = 31; break; } else { __label__ = 34; break; } //@line 1544 "_testcapimodule.c"
      case 31: // $bb31
        var $145=HEAP[$module]; //@line 1545 "_testcapimodule.c"
        var $146=(($145)&4294967295); //@line 1545 "_testcapimodule.c"
        var $147=HEAP[$146]; //@line 1545 "_testcapimodule.c"
        var $148=((($147) - 1)&4294967295); //@line 1545 "_testcapimodule.c"
        var $149=HEAP[$module]; //@line 1545 "_testcapimodule.c"
        var $150=(($149)&4294967295); //@line 1545 "_testcapimodule.c"
        HEAP[$150]=$148; //@line 1545 "_testcapimodule.c"
        var $151=HEAP[$module]; //@line 1545 "_testcapimodule.c"
        var $152=(($151)&4294967295); //@line 1545 "_testcapimodule.c"
        var $153=HEAP[$152]; //@line 1545 "_testcapimodule.c"
        var $154=((($153))|0)==0; //@line 1545 "_testcapimodule.c"
        if ($154) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1545 "_testcapimodule.c"
      case 32: // $bb32
        var $155=HEAP[$module]; //@line 1545 "_testcapimodule.c"
        var $156=(($155+4)&4294967295); //@line 1545 "_testcapimodule.c"
        var $157=HEAP[$156]; //@line 1545 "_testcapimodule.c"
        var $158=(($157+24)&4294967295); //@line 1545 "_testcapimodule.c"
        var $159=HEAP[$158]; //@line 1545 "_testcapimodule.c"
        var $160=HEAP[$module]; //@line 1545 "_testcapimodule.c"
        FUNCTION_TABLE[$159]($160); //@line 1545 "_testcapimodule.c"
        __label__ = 33; break; //@line 1545 "_testcapimodule.c"
      case 33: // $bb33
        HEAP[$0]=0; //@line 1546 "_testcapimodule.c"
        __label__ = 59; break; //@line 1546 "_testcapimodule.c"
      case 34: // $bb34
        var $161=HEAP[$object]; //@line 1548 "_testcapimodule.c"
        var $162=_PyCapsule_GetPointer($161, ((__str145)&4294967295)); //@line 1548 "_testcapimodule.c"
        HEAP[$pointer2]=$162; //@line 1548 "_testcapimodule.c"
        var $163=_PyErr_Occurred(); //@line 1550 "_testcapimodule.c"
        var $164=($163)==0; //@line 1550 "_testcapimodule.c"
        if ($164) { __label__ = 35; break; } else { __label__ = 40; break; } //@line 1550 "_testcapimodule.c"
      case 35: // $bb35
        var $165=HEAP[$object]; //@line 1551 "_testcapimodule.c"
        var $166=(($165)&4294967295); //@line 1551 "_testcapimodule.c"
        var $167=HEAP[$166]; //@line 1551 "_testcapimodule.c"
        var $168=((($167) - 1)&4294967295); //@line 1551 "_testcapimodule.c"
        var $169=HEAP[$object]; //@line 1551 "_testcapimodule.c"
        var $170=(($169)&4294967295); //@line 1551 "_testcapimodule.c"
        HEAP[$170]=$168; //@line 1551 "_testcapimodule.c"
        var $171=HEAP[$object]; //@line 1551 "_testcapimodule.c"
        var $172=(($171)&4294967295); //@line 1551 "_testcapimodule.c"
        var $173=HEAP[$172]; //@line 1551 "_testcapimodule.c"
        var $174=((($173))|0)==0; //@line 1551 "_testcapimodule.c"
        if ($174) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1551 "_testcapimodule.c"
      case 36: // $bb36
        var $175=HEAP[$object]; //@line 1551 "_testcapimodule.c"
        var $176=(($175+4)&4294967295); //@line 1551 "_testcapimodule.c"
        var $177=HEAP[$176]; //@line 1551 "_testcapimodule.c"
        var $178=(($177+24)&4294967295); //@line 1551 "_testcapimodule.c"
        var $179=HEAP[$178]; //@line 1551 "_testcapimodule.c"
        var $180=HEAP[$object]; //@line 1551 "_testcapimodule.c"
        FUNCTION_TABLE[$179]($180); //@line 1551 "_testcapimodule.c"
        __label__ = 37; break; //@line 1551 "_testcapimodule.c"
      case 37: // $bb37
        var $181=HEAP[$module]; //@line 1552 "_testcapimodule.c"
        var $182=(($181)&4294967295); //@line 1552 "_testcapimodule.c"
        var $183=HEAP[$182]; //@line 1552 "_testcapimodule.c"
        var $184=((($183) - 1)&4294967295); //@line 1552 "_testcapimodule.c"
        var $185=HEAP[$module]; //@line 1552 "_testcapimodule.c"
        var $186=(($185)&4294967295); //@line 1552 "_testcapimodule.c"
        HEAP[$186]=$184; //@line 1552 "_testcapimodule.c"
        var $187=HEAP[$module]; //@line 1552 "_testcapimodule.c"
        var $188=(($187)&4294967295); //@line 1552 "_testcapimodule.c"
        var $189=HEAP[$188]; //@line 1552 "_testcapimodule.c"
        var $190=((($189))|0)==0; //@line 1552 "_testcapimodule.c"
        if ($190) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1552 "_testcapimodule.c"
      case 38: // $bb38
        var $191=HEAP[$module]; //@line 1552 "_testcapimodule.c"
        var $192=(($191+4)&4294967295); //@line 1552 "_testcapimodule.c"
        var $193=HEAP[$192]; //@line 1552 "_testcapimodule.c"
        var $194=(($193+24)&4294967295); //@line 1552 "_testcapimodule.c"
        var $195=HEAP[$194]; //@line 1552 "_testcapimodule.c"
        var $196=HEAP[$module]; //@line 1552 "_testcapimodule.c"
        FUNCTION_TABLE[$195]($196); //@line 1552 "_testcapimodule.c"
        __label__ = 39; break; //@line 1552 "_testcapimodule.c"
      case 39: // $bb39
        var $197=HEAP[$known]; //@line 1553 "_testcapimodule.c"
        var $198=(($197+8)&4294967295); //@line 1553 "_testcapimodule.c"
        var $199=HEAP[$198]; //@line 1553 "_testcapimodule.c"
        var $200=HEAP[$known]; //@line 1553 "_testcapimodule.c"
        var $201=(($200+4)&4294967295); //@line 1553 "_testcapimodule.c"
        var $202=HEAP[$201]; //@line 1553 "_testcapimodule.c"
        var $203=_sprintf(((_buffer_10522)&4294967295), ((__str143)&4294967295), ((__str139)&4294967295), $202, $199); //@line 1553 "_testcapimodule.c"
        HEAP[$error]=((_buffer_10522)&4294967295); //@line 1553 "_testcapimodule.c"
        __label__ = 56; break; //@line 1553 "_testcapimodule.c"
      case 40: // $bb40
        _PyErr_Clear(); //@line 1555 "_testcapimodule.c"
        var $204=HEAP[$pointer2]; //@line 1556 "_testcapimodule.c"
        var $205=($204)!=0; //@line 1556 "_testcapimodule.c"
        if ($205) { __label__ = 41; break; } else { __label__ = 48; break; } //@line 1556 "_testcapimodule.c"
      case 41: // $bb41
        var $206=HEAP[$module]; //@line 1557 "_testcapimodule.c"
        var $207=(($206)&4294967295); //@line 1557 "_testcapimodule.c"
        var $208=HEAP[$207]; //@line 1557 "_testcapimodule.c"
        var $209=((($208) - 1)&4294967295); //@line 1557 "_testcapimodule.c"
        var $210=HEAP[$module]; //@line 1557 "_testcapimodule.c"
        var $211=(($210)&4294967295); //@line 1557 "_testcapimodule.c"
        HEAP[$211]=$209; //@line 1557 "_testcapimodule.c"
        var $212=HEAP[$module]; //@line 1557 "_testcapimodule.c"
        var $213=(($212)&4294967295); //@line 1557 "_testcapimodule.c"
        var $214=HEAP[$213]; //@line 1557 "_testcapimodule.c"
        var $215=((($214))|0)==0; //@line 1557 "_testcapimodule.c"
        if ($215) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1557 "_testcapimodule.c"
      case 42: // $bb42
        var $216=HEAP[$module]; //@line 1557 "_testcapimodule.c"
        var $217=(($216+4)&4294967295); //@line 1557 "_testcapimodule.c"
        var $218=HEAP[$217]; //@line 1557 "_testcapimodule.c"
        var $219=(($218+24)&4294967295); //@line 1557 "_testcapimodule.c"
        var $220=HEAP[$219]; //@line 1557 "_testcapimodule.c"
        var $221=HEAP[$module]; //@line 1557 "_testcapimodule.c"
        FUNCTION_TABLE[$220]($221); //@line 1557 "_testcapimodule.c"
        __label__ = 43; break; //@line 1557 "_testcapimodule.c"
      case 43: // $bb43
        var $222=HEAP[$object]; //@line 1558 "_testcapimodule.c"
        var $223=(($222)&4294967295); //@line 1558 "_testcapimodule.c"
        var $224=HEAP[$223]; //@line 1558 "_testcapimodule.c"
        var $225=((($224) - 1)&4294967295); //@line 1558 "_testcapimodule.c"
        var $226=HEAP[$object]; //@line 1558 "_testcapimodule.c"
        var $227=(($226)&4294967295); //@line 1558 "_testcapimodule.c"
        HEAP[$227]=$225; //@line 1558 "_testcapimodule.c"
        var $228=HEAP[$object]; //@line 1558 "_testcapimodule.c"
        var $229=(($228)&4294967295); //@line 1558 "_testcapimodule.c"
        var $230=HEAP[$229]; //@line 1558 "_testcapimodule.c"
        var $231=((($230))|0)==0; //@line 1558 "_testcapimodule.c"
        if ($231) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1558 "_testcapimodule.c"
      case 44: // $bb44
        var $232=HEAP[$object]; //@line 1558 "_testcapimodule.c"
        var $233=(($232+4)&4294967295); //@line 1558 "_testcapimodule.c"
        var $234=HEAP[$233]; //@line 1558 "_testcapimodule.c"
        var $235=(($234+24)&4294967295); //@line 1558 "_testcapimodule.c"
        var $236=HEAP[$235]; //@line 1558 "_testcapimodule.c"
        var $237=HEAP[$object]; //@line 1558 "_testcapimodule.c"
        FUNCTION_TABLE[$236]($237); //@line 1558 "_testcapimodule.c"
        __label__ = 45; break; //@line 1558 "_testcapimodule.c"
      case 45: // $bb45
        var $238=HEAP[$pointer2]; //@line 1559 "_testcapimodule.c"
        var $239=HEAP[$pointer]; //@line 1559 "_testcapimodule.c"
        var $240=($238)==($239); //@line 1559 "_testcapimodule.c"
        if ($240) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1559 "_testcapimodule.c"
      case 46: // $bb46
        var $241=HEAP[$known]; //@line 1560 "_testcapimodule.c"
        var $242=(($241+8)&4294967295); //@line 1560 "_testcapimodule.c"
        var $243=HEAP[$242]; //@line 1560 "_testcapimodule.c"
        var $244=HEAP[$known]; //@line 1560 "_testcapimodule.c"
        var $245=(($244+4)&4294967295); //@line 1560 "_testcapimodule.c"
        var $246=HEAP[$245]; //@line 1560 "_testcapimodule.c"
        var $247=_sprintf(((_buffer_10522)&4294967295), ((__str143)&4294967295), ((__str146)&4294967295), $246, $243); //@line 1560 "_testcapimodule.c"
        HEAP[$error]=((_buffer_10522)&4294967295); //@line 1560 "_testcapimodule.c"
        __label__ = 56; break; //@line 1560 "_testcapimodule.c"
      case 47: // $bb47
        var $248=HEAP[$known]; //@line 1563 "_testcapimodule.c"
        var $249=(($248+8)&4294967295); //@line 1563 "_testcapimodule.c"
        var $250=HEAP[$249]; //@line 1563 "_testcapimodule.c"
        var $251=HEAP[$known]; //@line 1563 "_testcapimodule.c"
        var $252=(($251+4)&4294967295); //@line 1563 "_testcapimodule.c"
        var $253=HEAP[$252]; //@line 1563 "_testcapimodule.c"
        var $254=_sprintf(((_buffer_10522)&4294967295), ((__str143)&4294967295), ((__str141)&4294967295), $253, $250); //@line 1563 "_testcapimodule.c"
        HEAP[$error]=((_buffer_10522)&4294967295); //@line 1563 "_testcapimodule.c"
        __label__ = 56; break; //@line 1563 "_testcapimodule.c"
      case 48: // $bb48
        var $255=HEAP[$object]; //@line 1567 "_testcapimodule.c"
        var $256=(($255)&4294967295); //@line 1567 "_testcapimodule.c"
        var $257=HEAP[$256]; //@line 1567 "_testcapimodule.c"
        var $258=((($257) - 1)&4294967295); //@line 1567 "_testcapimodule.c"
        var $259=HEAP[$object]; //@line 1567 "_testcapimodule.c"
        var $260=(($259)&4294967295); //@line 1567 "_testcapimodule.c"
        HEAP[$260]=$258; //@line 1567 "_testcapimodule.c"
        var $261=HEAP[$object]; //@line 1567 "_testcapimodule.c"
        var $262=(($261)&4294967295); //@line 1567 "_testcapimodule.c"
        var $263=HEAP[$262]; //@line 1567 "_testcapimodule.c"
        var $264=((($263))|0)==0; //@line 1567 "_testcapimodule.c"
        if ($264) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1567 "_testcapimodule.c"
      case 49: // $bb49
        var $265=HEAP[$object]; //@line 1567 "_testcapimodule.c"
        var $266=(($265+4)&4294967295); //@line 1567 "_testcapimodule.c"
        var $267=HEAP[$266]; //@line 1567 "_testcapimodule.c"
        var $268=(($267+24)&4294967295); //@line 1567 "_testcapimodule.c"
        var $269=HEAP[$268]; //@line 1567 "_testcapimodule.c"
        var $270=HEAP[$object]; //@line 1567 "_testcapimodule.c"
        FUNCTION_TABLE[$269]($270); //@line 1567 "_testcapimodule.c"
        __label__ = 50; break; //@line 1567 "_testcapimodule.c"
      case 50: // $bb50
        var $271=HEAP[$module]; //@line 1568 "_testcapimodule.c"
        var $272=(($271)&4294967295); //@line 1568 "_testcapimodule.c"
        var $273=HEAP[$272]; //@line 1568 "_testcapimodule.c"
        var $274=((($273) - 1)&4294967295); //@line 1568 "_testcapimodule.c"
        var $275=HEAP[$module]; //@line 1568 "_testcapimodule.c"
        var $276=(($275)&4294967295); //@line 1568 "_testcapimodule.c"
        HEAP[$276]=$274; //@line 1568 "_testcapimodule.c"
        var $277=HEAP[$module]; //@line 1568 "_testcapimodule.c"
        var $278=(($277)&4294967295); //@line 1568 "_testcapimodule.c"
        var $279=HEAP[$278]; //@line 1568 "_testcapimodule.c"
        var $280=((($279))|0)==0; //@line 1568 "_testcapimodule.c"
        if ($280) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 1568 "_testcapimodule.c"
      case 51: // $bb51
        var $281=HEAP[$module]; //@line 1568 "_testcapimodule.c"
        var $282=(($281+4)&4294967295); //@line 1568 "_testcapimodule.c"
        var $283=HEAP[$282]; //@line 1568 "_testcapimodule.c"
        var $284=(($283+24)&4294967295); //@line 1568 "_testcapimodule.c"
        var $285=HEAP[$284]; //@line 1568 "_testcapimodule.c"
        var $286=HEAP[$module]; //@line 1568 "_testcapimodule.c"
        FUNCTION_TABLE[$285]($286); //@line 1568 "_testcapimodule.c"
        __label__ = 52; break; //@line 1568 "_testcapimodule.c"
      case 52: // $bb52
        __label__ = 54; break; //@line 1568 "_testcapimodule.c"
      case 53: // $bb53
        _PyErr_Clear(); //@line 1571 "_testcapimodule.c"
        __label__ = 54; break; //@line 1571 "_testcapimodule.c"
      case 54: // $bb54
        var $287=HEAP[$known]; //@line 1522 "_testcapimodule.c"
        var $288=(($287+12)&4294967295); //@line 1522 "_testcapimodule.c"
        HEAP[$known]=$288; //@line 1522 "_testcapimodule.c"
        __label__ = 55; break; //@line 1522 "_testcapimodule.c"
      case 55: // $bb55
        var $289=HEAP[$known]; //@line 1522 "_testcapimodule.c"
        var $290=(($289+4)&4294967295); //@line 1522 "_testcapimodule.c"
        var $291=HEAP[$290]; //@line 1522 "_testcapimodule.c"
        var $292=($291)!=0; //@line 1522 "_testcapimodule.c"
        if ($292) { __label__ = 25; break; } else { __label__ = 56; break; } //@line 1522 "_testcapimodule.c"
      case 56: // $exit
        var $293=HEAP[$error]; //@line 1575 "_testcapimodule.c"
        var $294=($293)!=0; //@line 1575 "_testcapimodule.c"
        if ($294) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1575 "_testcapimodule.c"
      case 57: // $bb56
        var $295=HEAP[$error]; //@line 1576 "_testcapimodule.c"
        var $296=_raiseTestError(((__str147)&4294967295), $295); //@line 1576 "_testcapimodule.c"
        HEAP[$0]=$296; //@line 1576 "_testcapimodule.c"
        __label__ = 59; break; //@line 1576 "_testcapimodule.c"
      case 58: // $bb57
        var $297=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1578 "_testcapimodule.c"
        var $298=((($297) + 1)&4294967295); //@line 1578 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$298; //@line 1578 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1578 "_testcapimodule.c"
        __label__ = 59; break; //@line 1578 "_testcapimodule.c"
      case 59: // $bb58
        var $299=HEAP[$0]; //@line 1546 "_testcapimodule.c"
        HEAP[$retval]=$299; //@line 1546 "_testcapimodule.c"
        __label__ = 60; break; //@line 1546 "_testcapimodule.c"
      case 60: // $return
        var $retval59=HEAP[$retval]; //@line 1546 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval59; //@line 1546 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_with_docstring($self) {
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
        var $1=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1586 "_testcapimodule.c"
        var $2=((($1) + 1)&4294967295); //@line 1586 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$2; //@line 1586 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1586 "_testcapimodule.c"
        var $3=HEAP[$0]; //@line 1586 "_testcapimodule.c"
        HEAP[$retval]=$3; //@line 1586 "_testcapimodule.c"
        __label__ = 1; break; //@line 1586 "_testcapimodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1586 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1586 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _traceback_print($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $file=__stackBase__+16;
        var $traceback=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1597 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str148)&4294967295), $traceback, $file); //@line 1597 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 1597 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1597 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1599 "_testcapimodule.c"
        __label__ = 5; break; //@line 1599 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$file]; //@line 1601 "_testcapimodule.c"
        var $5=HEAP[$traceback]; //@line 1601 "_testcapimodule.c"
        var $6=_PyTraceBack_Print($5, $4); //@line 1601 "_testcapimodule.c"
        HEAP[$result]=$6; //@line 1601 "_testcapimodule.c"
        var $7=HEAP[$result]; //@line 1602 "_testcapimodule.c"
        var $8=((($7))|0) < 0; //@line 1602 "_testcapimodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1602 "_testcapimodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1603 "_testcapimodule.c"
        __label__ = 5; break; //@line 1603 "_testcapimodule.c"
      case 4: // $bb3
        var $9=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1604 "_testcapimodule.c"
        var $10=((($9) + 1)&4294967295); //@line 1604 "_testcapimodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$10; //@line 1604 "_testcapimodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1604 "_testcapimodule.c"
        __label__ = 5; break; //@line 1604 "_testcapimodule.c"
      case 5: // $bb4
        var $11=HEAP[$0]; //@line 1599 "_testcapimodule.c"
        HEAP[$retval]=$11; //@line 1599 "_testcapimodule.c"
        __label__ = 6; break; //@line 1599 "_testcapimodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1599 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1599 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _code_newempty($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $filename=__stackBase__+16;
        var $funcname=__stackBase__+20;
        var $firstlineno=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1615 "_testcapimodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str149)&4294967295), $filename, $funcname, $firstlineno); //@line 1615 "_testcapimodule.c"
        var $3=((($2))|0)==0; //@line 1615 "_testcapimodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1615 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1617 "_testcapimodule.c"
        __label__ = 3; break; //@line 1617 "_testcapimodule.c"
      case 2: // $bb1
        var $4=HEAP[$firstlineno]; //@line 1619 "_testcapimodule.c"
        var $5=HEAP[$funcname]; //@line 1619 "_testcapimodule.c"
        var $6=HEAP[$filename]; //@line 1619 "_testcapimodule.c"
        var $7=_PyCode_NewEmpty($6, $5, $4); //@line 1619 "_testcapimodule.c"
        var $8=$7; //@line 1619 "_testcapimodule.c"
        HEAP[$0]=$8; //@line 1619 "_testcapimodule.c"
        __label__ = 3; break; //@line 1619 "_testcapimodule.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 1617 "_testcapimodule.c"
        HEAP[$retval]=$9; //@line 1617 "_testcapimodule.c"
        __label__ = 4; break; //@line 1617 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1617 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1617 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _make_exception_with_doc($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $name=__stackBase__+20;
        var $doc=__stackBase__+24;
        var $base=__stackBase__+28;
        var $dict=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$doc]=0; //@line 1628 "_testcapimodule.c"
        HEAP[$base]=0; //@line 1629 "_testcapimodule.c"
        HEAP[$dict]=0; //@line 1630 "_testcapimodule.c"
        var $1=HEAP[$args_addr]; //@line 1634 "_testcapimodule.c"
        var $2=HEAP[$kwargs_addr]; //@line 1634 "_testcapimodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str150)&4294967295), ((_kwlist_10723)&4294967295), $name, $doc, $base, $dict); //@line 1634 "_testcapimodule.c"
        var $4=((($3))|0)==0; //@line 1634 "_testcapimodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1634 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1637 "_testcapimodule.c"
        __label__ = 3; break; //@line 1637 "_testcapimodule.c"
      case 2: // $bb1
        var $5=HEAP[$dict]; //@line 1639 "_testcapimodule.c"
        var $6=HEAP[$base]; //@line 1639 "_testcapimodule.c"
        var $7=HEAP[$doc]; //@line 1639 "_testcapimodule.c"
        var $8=HEAP[$name]; //@line 1639 "_testcapimodule.c"
        var $9=_PyErr_NewExceptionWithDoc($8, $7, $6, $5); //@line 1639 "_testcapimodule.c"
        HEAP[$0]=$9; //@line 1639 "_testcapimodule.c"
        __label__ = 3; break; //@line 1639 "_testcapimodule.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 1637 "_testcapimodule.c"
        HEAP[$retval]=$10; //@line 1637 "_testcapimodule.c"
        __label__ = 4; break; //@line 1637 "_testcapimodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1637 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1637 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_structmembers_new($type, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $ob=__stackBase__+20;
        var $s=__stackBase__+24;
        var $string_len=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$s]=0; //@line 1765 "_testcapimodule.c"
        HEAP[$string_len]=0; //@line 1766 "_testcapimodule.c"
        var $1=HEAP[$type_addr]; //@line 1767 "_testcapimodule.c"
        var $2=__PyObject_New($1); //@line 1767 "_testcapimodule.c"
        var $3=$2; //@line 1767 "_testcapimodule.c"
        HEAP[$ob]=$3; //@line 1767 "_testcapimodule.c"
        var $4=HEAP[$ob]; //@line 1768 "_testcapimodule.c"
        var $5=($4)==0; //@line 1768 "_testcapimodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1768 "_testcapimodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1769 "_testcapimodule.c"
        __label__ = 14; break; //@line 1769 "_testcapimodule.c"
      case 2: // $bb1
        var $6=HEAP[$ob]; //@line 1770 "_testcapimodule.c"
        var $7=(($6+8)&4294967295); //@line 1770 "_testcapimodule.c"
        var $8=$7; //@line 1770 "_testcapimodule.c"
        _llvm_memset_p0i8_i32($8, 0, 60, 1, 0); //@line 1770 "_testcapimodule.c"
        var $9=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $10=(($9+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $11=(($10+52)&4294967295); //@line 1771 "_testcapimodule.c"
        var $12=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $13=(($12+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $14=(($13+44)&4294967295); //@line 1771 "_testcapimodule.c"
        var $15=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $16=(($15+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $17=(($16+28)&4294967295); //@line 1771 "_testcapimodule.c"
        var $18=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $19=(($18+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $20=(($19+24)&4294967295); //@line 1771 "_testcapimodule.c"
        var $21=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $22=(($21+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $23=(($22+20)&4294967295); //@line 1771 "_testcapimodule.c"
        var $24=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $25=(($24+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $26=(($25+16)&4294967295); //@line 1771 "_testcapimodule.c"
        var $27=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $28=(($27+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $29=(($28+12)&4294967295); //@line 1771 "_testcapimodule.c"
        var $30=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $31=(($30+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $32=(($31+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $33=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $34=(($33+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $35=(($34+6)&4294967295); //@line 1771 "_testcapimodule.c"
        var $36=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $37=(($36+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $38=(($37+4)&4294967295); //@line 1771 "_testcapimodule.c"
        var $39=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $40=(($39+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $41=(($40+2)&4294967295); //@line 1771 "_testcapimodule.c"
        var $42=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $43=(($42+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $44=(($43+1)&4294967295); //@line 1771 "_testcapimodule.c"
        var $45=HEAP[$ob]; //@line 1771 "_testcapimodule.c"
        var $46=(($45+8)&4294967295); //@line 1771 "_testcapimodule.c"
        var $47=(($46)&4294967295); //@line 1771 "_testcapimodule.c"
        var $48=HEAP[_fmt_10763]; //@line 1771 "_testcapimodule.c"
        var $49=HEAP[$args_addr]; //@line 1771 "_testcapimodule.c"
        var $50=HEAP[$kwargs_addr]; //@line 1771 "_testcapimodule.c"
        var $51=_PyArg_ParseTupleAndKeywords($49, $50, $48, ((_keywords_10762)&4294967295), $47, $44, $41, $38, $35, $32, $29, $26, $23, $20, $17, $s, $string_len, $14, $11); //@line 1771 "_testcapimodule.c"
        var $52=((($51))|0)==0; //@line 1771 "_testcapimodule.c"
        if ($52) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1771 "_testcapimodule.c"
      case 3: // $bb2
        var $53=HEAP[$ob]; //@line 1789 "_testcapimodule.c"
        var $54=$53; //@line 1789 "_testcapimodule.c"
        var $55=(($54)&4294967295); //@line 1789 "_testcapimodule.c"
        var $56=HEAP[$55]; //@line 1789 "_testcapimodule.c"
        var $57=((($56) - 1)&4294967295); //@line 1789 "_testcapimodule.c"
        var $58=(($54)&4294967295); //@line 1789 "_testcapimodule.c"
        HEAP[$58]=$57; //@line 1789 "_testcapimodule.c"
        var $59=(($54)&4294967295); //@line 1789 "_testcapimodule.c"
        var $60=HEAP[$59]; //@line 1789 "_testcapimodule.c"
        var $61=((($60))|0)==0; //@line 1789 "_testcapimodule.c"
        if ($61) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1789 "_testcapimodule.c"
      case 4: // $bb3
        var $62=HEAP[$ob]; //@line 1789 "_testcapimodule.c"
        var $63=$62; //@line 1789 "_testcapimodule.c"
        var $64=(($63+4)&4294967295); //@line 1789 "_testcapimodule.c"
        var $65=HEAP[$64]; //@line 1789 "_testcapimodule.c"
        var $66=(($65+24)&4294967295); //@line 1789 "_testcapimodule.c"
        var $67=HEAP[$66]; //@line 1789 "_testcapimodule.c"
        var $68=HEAP[$ob]; //@line 1789 "_testcapimodule.c"
        var $69=$68; //@line 1789 "_testcapimodule.c"
        FUNCTION_TABLE[$67]($69); //@line 1789 "_testcapimodule.c"
        __label__ = 5; break; //@line 1789 "_testcapimodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1790 "_testcapimodule.c"
        __label__ = 14; break; //@line 1790 "_testcapimodule.c"
      case 6: // $bb5
        var $70=HEAP[$s]; //@line 1792 "_testcapimodule.c"
        var $71=($70)!=0; //@line 1792 "_testcapimodule.c"
        if ($71) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1792 "_testcapimodule.c"
      case 7: // $bb6
        var $72=HEAP[$string_len]; //@line 1793 "_testcapimodule.c"
        var $73=((($72))|0) > 5; //@line 1793 "_testcapimodule.c"
        if ($73) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1793 "_testcapimodule.c"
      case 8: // $bb7
        var $74=HEAP[$ob]; //@line 1794 "_testcapimodule.c"
        var $75=$74; //@line 1794 "_testcapimodule.c"
        var $76=(($75)&4294967295); //@line 1794 "_testcapimodule.c"
        var $77=HEAP[$76]; //@line 1794 "_testcapimodule.c"
        var $78=((($77) - 1)&4294967295); //@line 1794 "_testcapimodule.c"
        var $79=(($75)&4294967295); //@line 1794 "_testcapimodule.c"
        HEAP[$79]=$78; //@line 1794 "_testcapimodule.c"
        var $80=(($75)&4294967295); //@line 1794 "_testcapimodule.c"
        var $81=HEAP[$80]; //@line 1794 "_testcapimodule.c"
        var $82=((($81))|0)==0; //@line 1794 "_testcapimodule.c"
        if ($82) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1794 "_testcapimodule.c"
      case 9: // $bb8
        var $83=HEAP[$ob]; //@line 1794 "_testcapimodule.c"
        var $84=$83; //@line 1794 "_testcapimodule.c"
        var $85=(($84+4)&4294967295); //@line 1794 "_testcapimodule.c"
        var $86=HEAP[$85]; //@line 1794 "_testcapimodule.c"
        var $87=(($86+24)&4294967295); //@line 1794 "_testcapimodule.c"
        var $88=HEAP[$87]; //@line 1794 "_testcapimodule.c"
        var $89=HEAP[$ob]; //@line 1794 "_testcapimodule.c"
        var $90=$89; //@line 1794 "_testcapimodule.c"
        FUNCTION_TABLE[$88]($90); //@line 1794 "_testcapimodule.c"
        __label__ = 10; break; //@line 1794 "_testcapimodule.c"
      case 10: // $bb9
        var $91=HEAP[_PyExc_ValueError]; //@line 1795 "_testcapimodule.c"
        _PyErr_SetString($91, ((__str199)&4294967295)); //@line 1795 "_testcapimodule.c"
        HEAP[$0]=0; //@line 1796 "_testcapimodule.c"
        __label__ = 14; break; //@line 1796 "_testcapimodule.c"
      case 11: // $bb10
        var $92=HEAP[$s]; //@line 1798 "_testcapimodule.c"
        var $93=HEAP[$ob]; //@line 1798 "_testcapimodule.c"
        var $94=(($93+8)&4294967295); //@line 1798 "_testcapimodule.c"
        var $95=(($94+36)&4294967295); //@line 1798 "_testcapimodule.c"
        var $96=(($95)&4294967295); //@line 1798 "_testcapimodule.c"
        var $97=_strcpy($96, $92); //@line 1798 "_testcapimodule.c"
        __label__ = 13; break; //@line 1798 "_testcapimodule.c"
      case 12: // $bb11
        var $98=HEAP[$ob]; //@line 1801 "_testcapimodule.c"
        var $99=(($98+8)&4294967295); //@line 1801 "_testcapimodule.c"
        var $100=(($99+36)&4294967295); //@line 1801 "_testcapimodule.c"
        var $101=(($100)&4294967295); //@line 1801 "_testcapimodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($101, ((__str200)&4294967295), 1, 1, 0); //@line 1801 "_testcapimodule.c"
        __label__ = 13; break; //@line 1801 "_testcapimodule.c"
      case 13: // $bb12
        var $102=HEAP[$ob]; //@line 1803 "_testcapimodule.c"
        var $103=$102; //@line 1803 "_testcapimodule.c"
        HEAP[$0]=$103; //@line 1803 "_testcapimodule.c"
        __label__ = 14; break; //@line 1803 "_testcapimodule.c"
      case 14: // $bb13
        var $104=HEAP[$0]; //@line 1769 "_testcapimodule.c"
        HEAP[$retval]=$104; //@line 1769 "_testcapimodule.c"
        __label__ = 15; break; //@line 1769 "_testcapimodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 1769 "_testcapimodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1769 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _test_structmembers_free($ob) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ob_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$ob_addr]=$ob;
        var $0=HEAP[$ob_addr]; //@line 1809 "_testcapimodule.c"
        var $1=$0; //@line 1809 "_testcapimodule.c"
        _free($1); //@line 1809 "_testcapimodule.c"
        __label__ = 1; break; //@line 1810 "_testcapimodule.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 1810 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_testcapi() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str203)&4294967295), _TestMethods, 0, 0, 1013); //@line 1859 "_testcapimodule.c"
        HEAP[$m]=$0; //@line 1859 "_testcapimodule.c"
        var $1=HEAP[$m]; //@line 1860 "_testcapimodule.c"
        var $2=($1)==0; //@line 1860 "_testcapimodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1860 "_testcapimodule.c"
      case 1: // $bb
        var $3=((__HashInheritanceTester_Type+4)&4294967295); //@line 1863 "_testcapimodule.c"
        HEAP[$3]=_PyType_Type; //@line 1863 "_testcapimodule.c"
        var $4=((_test_structmembersType+4)&4294967295); //@line 1865 "_testcapimodule.c"
        HEAP[$4]=_PyType_Type; //@line 1865 "_testcapimodule.c"
        var $5=((_test_structmembersType)&4294967295); //@line 1866 "_testcapimodule.c"
        var $6=HEAP[$5]; //@line 1866 "_testcapimodule.c"
        var $7=((($6) + 1)&4294967295); //@line 1866 "_testcapimodule.c"
        var $8=((_test_structmembersType)&4294967295); //@line 1866 "_testcapimodule.c"
        HEAP[$8]=$7; //@line 1866 "_testcapimodule.c"
        var $9=HEAP[$m]; //@line 1869 "_testcapimodule.c"
        var $10=_PyModule_AddObject($9, ((__str204)&4294967295), _test_structmembersType); //@line 1869 "_testcapimodule.c"
        var $11=_PyInt_FromLong(127); //@line 1871 "_testcapimodule.c"
        var $12=HEAP[$m]; //@line 1871 "_testcapimodule.c"
        var $13=_PyModule_AddObject($12, ((__str205)&4294967295), $11); //@line 1871 "_testcapimodule.c"
        var $14=_PyInt_FromLong(-128); //@line 1872 "_testcapimodule.c"
        var $15=HEAP[$m]; //@line 1872 "_testcapimodule.c"
        var $16=_PyModule_AddObject($15, ((__str206)&4294967295), $14); //@line 1872 "_testcapimodule.c"
        var $17=_PyInt_FromLong(255); //@line 1873 "_testcapimodule.c"
        var $18=HEAP[$m]; //@line 1873 "_testcapimodule.c"
        var $19=_PyModule_AddObject($18, ((__str207)&4294967295), $17); //@line 1873 "_testcapimodule.c"
        var $20=_PyInt_FromLong(32767); //@line 1874 "_testcapimodule.c"
        var $21=HEAP[$m]; //@line 1874 "_testcapimodule.c"
        var $22=_PyModule_AddObject($21, ((__str208)&4294967295), $20); //@line 1874 "_testcapimodule.c"
        var $23=_PyInt_FromLong(-32768); //@line 1875 "_testcapimodule.c"
        var $24=HEAP[$m]; //@line 1875 "_testcapimodule.c"
        var $25=_PyModule_AddObject($24, ((__str209)&4294967295), $23); //@line 1875 "_testcapimodule.c"
        var $26=_PyInt_FromLong(65535); //@line 1876 "_testcapimodule.c"
        var $27=HEAP[$m]; //@line 1876 "_testcapimodule.c"
        var $28=_PyModule_AddObject($27, ((__str210)&4294967295), $26); //@line 1876 "_testcapimodule.c"
        var $29=_PyLong_FromLong(2147483647); //@line 1877 "_testcapimodule.c"
        var $30=HEAP[$m]; //@line 1877 "_testcapimodule.c"
        var $31=_PyModule_AddObject($30, ((__str211)&4294967295), $29); //@line 1877 "_testcapimodule.c"
        var $32=_PyLong_FromLong(-2147483648); //@line 1878 "_testcapimodule.c"
        var $33=HEAP[$m]; //@line 1878 "_testcapimodule.c"
        var $34=_PyModule_AddObject($33, ((__str212)&4294967295), $32); //@line 1878 "_testcapimodule.c"
        var $35=_PyLong_FromUnsignedLong(-1); //@line 1879 "_testcapimodule.c"
        var $36=HEAP[$m]; //@line 1879 "_testcapimodule.c"
        var $37=_PyModule_AddObject($36, ((__str213)&4294967295), $35); //@line 1879 "_testcapimodule.c"
        var $38=_PyInt_FromLong(2147483647); //@line 1880 "_testcapimodule.c"
        var $39=HEAP[$m]; //@line 1880 "_testcapimodule.c"
        var $40=_PyModule_AddObject($39, ((__str214)&4294967295), $38); //@line 1880 "_testcapimodule.c"
        var $41=_PyInt_FromLong(-2147483648); //@line 1881 "_testcapimodule.c"
        var $42=HEAP[$m]; //@line 1881 "_testcapimodule.c"
        var $43=_PyModule_AddObject($42, ((__str215)&4294967295), $41); //@line 1881 "_testcapimodule.c"
        var $44=_PyLong_FromUnsignedLong(-1); //@line 1882 "_testcapimodule.c"
        var $45=HEAP[$m]; //@line 1882 "_testcapimodule.c"
        var $46=_PyModule_AddObject($45, ((__str216)&4294967295), $44); //@line 1882 "_testcapimodule.c"
        var $47=_PyFloat_FromDouble(3.4028234663852886e+38); //@line 1883 "_testcapimodule.c"
        var $48=HEAP[$m]; //@line 1883 "_testcapimodule.c"
        var $49=_PyModule_AddObject($48, ((__str217)&4294967295), $47); //@line 1883 "_testcapimodule.c"
        var $50=_PyFloat_FromDouble(1.1754943508222875e-38); //@line 1884 "_testcapimodule.c"
        var $51=HEAP[$m]; //@line 1884 "_testcapimodule.c"
        var $52=_PyModule_AddObject($51, ((__str218)&4294967295), $50); //@line 1884 "_testcapimodule.c"
        var $53=_PyFloat_FromDouble(1.7976931348623157e+308); //@line 1885 "_testcapimodule.c"
        var $54=HEAP[$m]; //@line 1885 "_testcapimodule.c"
        var $55=_PyModule_AddObject($54, ((__str219)&4294967295), $53); //@line 1885 "_testcapimodule.c"
        var $56=_PyFloat_FromDouble(2.2250738585072014e-308); //@line 1886 "_testcapimodule.c"
        var $57=HEAP[$m]; //@line 1886 "_testcapimodule.c"
        var $58=_PyModule_AddObject($57, ((__str220)&4294967295), $56); //@line 1886 "_testcapimodule.c"
        var $59=_PyLong_FromLongLong(9223372036854776000); //@line 1887 "_testcapimodule.c"
        var $60=HEAP[$m]; //@line 1887 "_testcapimodule.c"
        var $61=_PyModule_AddObject($60, ((__str221)&4294967295), $59); //@line 1887 "_testcapimodule.c"
        var $62=_PyLong_FromLongLong(-9223372036854776000); //@line 1888 "_testcapimodule.c"
        var $63=HEAP[$m]; //@line 1888 "_testcapimodule.c"
        var $64=_PyModule_AddObject($63, ((__str222)&4294967295), $62); //@line 1888 "_testcapimodule.c"
        var $65=_PyLong_FromUnsignedLongLong(-1); //@line 1889 "_testcapimodule.c"
        var $66=HEAP[$m]; //@line 1889 "_testcapimodule.c"
        var $67=_PyModule_AddObject($66, ((__str223)&4294967295), $65); //@line 1889 "_testcapimodule.c"
        var $68=_PyInt_FromSsize_t(2147483647); //@line 1890 "_testcapimodule.c"
        var $69=HEAP[$m]; //@line 1890 "_testcapimodule.c"
        var $70=_PyModule_AddObject($69, ((__str224)&4294967295), $68); //@line 1890 "_testcapimodule.c"
        var $71=_PyInt_FromSsize_t(-2147483648); //@line 1891 "_testcapimodule.c"
        var $72=HEAP[$m]; //@line 1891 "_testcapimodule.c"
        var $73=_PyModule_AddObject($72, ((__str225)&4294967295), $71); //@line 1891 "_testcapimodule.c"
        var $74=_PyInt_FromSsize_t(12); //@line 1892 "_testcapimodule.c"
        var $75=HEAP[$m]; //@line 1892 "_testcapimodule.c"
        var $76=_PyModule_AddObject($75, ((__str226)&4294967295), $74); //@line 1892 "_testcapimodule.c"
        var $77=_PyErr_NewException(((__str227)&4294967295), 0, 0); //@line 1894 "_testcapimodule.c"
        HEAP[_TestError]=$77; //@line 1894 "_testcapimodule.c"
        var $78=HEAP[_TestError]; //@line 1895 "_testcapimodule.c"
        var $79=(($78)&4294967295); //@line 1895 "_testcapimodule.c"
        var $80=HEAP[$79]; //@line 1895 "_testcapimodule.c"
        var $81=((($80) + 1)&4294967295); //@line 1895 "_testcapimodule.c"
        var $82=(($78)&4294967295); //@line 1895 "_testcapimodule.c"
        HEAP[$82]=$81; //@line 1895 "_testcapimodule.c"
        var $83=HEAP[_TestError]; //@line 1896 "_testcapimodule.c"
        var $84=HEAP[$m]; //@line 1896 "_testcapimodule.c"
        var $85=_PyModule_AddObject($84, ((__str228)&4294967295), $83); //@line 1896 "_testcapimodule.c"
        __label__ = 2; break; //@line 1896 "_testcapimodule.c"
      case 2: // $bb1
        __label__ = 3; break; //@line 1861 "_testcapimodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 1861 "_testcapimodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_testcapi"] = _init_testcapi;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_raise_test_long_error,0,_raise_test_longlong_error,0,_capsule_destructor,0,_PyObject_Free,0,_PyObject_GenericGetAttr,0,_PyType_GenericNew,0,_broken_buffer_getbuffer,0,_raise_exception,0,_test_config,0,_test_datetime_capi,0,_test_list_api,0,_test_dict_iteration,0,_test_lazy_hash_inheritance,0,_test_broken_memoryview,0,_test_long_api,0,_test_long_and_overflow,0,_test_long_numbits,0,_test_k_code,0,_test_empty_argparse,0,_test_null_strings,0,_test_string_from_format,0,_test_with_docstring,0,_getargs_tuple,0,_getargs_keywords,0,_getargs_b,0,_getargs_B,0,_getargs_h,0,_getargs_H,0,_getargs_I,0,_getargs_k,0,_getargs_i,0,_getargs_l,0,_getargs_n,0,_getargs_L,0,_getargs_K,0,_test_longlong_api,0,_test_long_long_and_overflow,0,_test_L_code,0,_codec_incrementalencoder,0,_codec_incrementaldecoder,0,_test_u_code,0,_test_widechar,0,_test_capsule,0,_traceback_print,0,_code_newempty,0,_make_exception_with_doc,0,_test_structmembers_free,0,_PyObject_GenericSetAttr,0,_test_structmembers_new,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_PyDateTimeAPI=allocate(1, "%struct.PyDateTime_CAPI*", ALLOC_NORMAL);
_TestError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([105,110,116,101,114,110,97,108,32,101,114,114,111,114,32,109,115,103,32,116,111,111,32,108,97,114,103,101,0] /* internal error msg t */, "i8", ALLOC_NORMAL);
__str1=allocate([37,115,58,32,37,115,0] /* %s: %s\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([37,46,50,48,48,115,32,35,100,101,102,105,110,101,32,61,61,32,37,100,32,98,117,116,32,115,105,122,101,111,102,40,37,46,50,48,48,115,41,32,61,61,32,37,100,0] /* %.200s #define == %d */, "i8", ALLOC_NORMAL);
__str3=allocate([116,101,115,116,95,108,105,115,116,95,97,112,105,58,32,114,101,118,101,114,115,101,32,115,99,114,101,119,101,100,32,117,112,0] /* test_list_api: rever */, "i8", ALLOC_NORMAL);
__str4=allocate([116,101,115,116,95,100,105,99,116,95,105,116,101,114,97,116,105,111,110,58,32,100,105,99,116,32,105,116,101,114,97,116,105,111,110,32,119,101,110,116,32,119,114,111,110,103,32,0] /* test_dict_iteration: */, "i8", ALLOC_NORMAL);
__str5=allocate([104,97,115,104,105,110,104,101,114,105,116,97,110,99,101,116,101,115,116,101,114,0] /* hashinheritanceteste */, "i8", ALLOC_NORMAL);
__HashInheritanceTester_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str6=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,102,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,111,98,106,101,99,116,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str7=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,116,121,112,101,32,105,110,105,116,105,97,108,105,115,101,100,32,116,111,111,32,115,111,111,110,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str8=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,99,111,117,108,100,32,110,111,116,32,104,97,115,104,32,111,98,106,101,99,116,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str9=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,116,121,112,101,32,110,111,116,32,105,110,105,116,105,97,108,105,115,101,100,32,98,121,32,104,97,115,104,40,41,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str10=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,58,32,117,110,101,120,112,101,99,116,101,100,32,104,97,115,104,32,102,117,110,99,116,105,111,110,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str11=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,101,120,112,101,99,116,101,100,32,101,114,114,111,114,32,105,110,32,98,102,95,103,101,116,98,117,102,102,101,114,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
_memoryviewtester_as_buffer=allocate(24, ["i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, %struct.Py_buffer*, i32)*",0,0,0,"void (%struct.PyObject*, %struct.Py_buffer*)*",0,0,0], ALLOC_NORMAL);
__str12=allocate([109,101,109,111,114,121,118,105,101,119,116,101,115,116,101,114,0] /* memoryviewtester\00 */, "i8", ALLOC_NORMAL);
__MemoryViewTester_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2228715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,102,97,105,108,101,100,32,116,111,32,99,114,101,97,116,101,32,111,98,106,101,99,116,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str14=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,58,32,109,101,109,111,114,121,118,105,101,119,40,41,32,100,105,100,110,39,116,32,114,97,105,115,101,32,97,110,32,69,120,99,101,112,116,105,111,110,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str15=allocate([116,101,115,116,95,108,111,110,103,95,97,112,105,0] /* test_long_api\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([117,110,115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,110,117,108,108,32,114,101,115,117,108,116,0] /* unsigned unexpected  */, "i8", ALLOC_NORMAL);
__str17=allocate([117,110,115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,45,49,32,114,101,115,117,108,116,0] /* unsigned unexpected  */, "i8", ALLOC_NORMAL);
__str18=allocate([117,110,115,105,103,110,101,100,32,111,117,116,112,117,116,32,33,61,32,105,110,112,117,116,0] /* unsigned output != i */, "i8", ALLOC_NORMAL);
__str19=allocate([115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,110,117,108,108,32,114,101,115,117,108,116,0] /* signed unexpected nu */, "i8", ALLOC_NORMAL);
__str20=allocate([115,105,103,110,101,100,32,117,110,101,120,112,101,99,116,101,100,32,45,49,32,114,101,115,117,108,116,0] /* signed unexpected -1 */, "i8", ALLOC_NORMAL);
__str21=allocate([115,105,103,110,101,100,32,111,117,116,112,117,116,32,33,61,32,105,110,112,117,116,0] /* signed output != inp */, "i8", ALLOC_NORMAL);
__str22=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,76,111,110,103,95,70,114,111,109,76,111,110,103,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str23=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,78,101,103,97,116,105,118,101,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str24=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,45,49,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str25=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,45,49,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str26=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,76,115,104,105,102,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str27=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,50,42,42,78,66,73,84,83,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str28=allocate([80,121,76,111,110,103,95,65,115,85,110,115,105,103,110,101,100,88,88,88,40,50,42,42,78,66,73,84,83,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsUnsignedXXX */, "i8", ALLOC_NORMAL);
__str29=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,82,115,104,105,102,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str30=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,50,42,42,40,78,66,73,84,83,45,49,41,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsXXX(2__(NBI */, "i8", ALLOC_NORMAL);
__str31=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,50,42,42,40,78,66,73,84,83,45,49,41,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsXXX(2__(NBI */, "i8", ALLOC_NORMAL);
__str32=allocate([117,110,101,120,112,101,99,116,101,100,32,78,85,76,76,32,102,114,111,109,32,80,121,78,117,109,98,101,114,95,83,117,98,116,114,97,99,116,0] /* unexpected NULL from */, "i8", ALLOC_NORMAL);
__str33=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,45,50,42,42,40,78,66,73,84,83,45,49,41,45,49,41,32,100,105,100,110,39,116,32,99,111,109,112,108,97,105,110,0] /* PyLong_AsXXX(-2__(NB */, "i8", ALLOC_NORMAL);
__str34=allocate([80,121,76,111,110,103,95,65,115,88,88,88,40,45,50,42,42,40,78,66,73,84,83,45,49,41,45,49,41,32,114,97,105,115,101,100,32,115,111,109,101,116,104,105,110,103,32,111,116,104,101,114,32,116,104,97,110,32,79,118,101,114,102,108,111,119,69,114,114,111,114,0] /* PyLong_AsXXX(-2__(NB */, "i8", ALLOC_NORMAL);
__str35=allocate([116,101,115,116,95,108,111,110,103,108,111,110,103,95,97,112,105,0] /* test_longlong_api\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,0] /* FFFFFFFFFFFFFFFFFFFF */, "i8", ALLOC_NORMAL);
__str37=allocate([116,101,115,116,95,108,111,110,103,95,97,110,100,95,111,118,101,114,102,108,111,119,0] /* test_long_and_overfl */, "i8", ALLOC_NORMAL);
__str38=allocate([114,101,116,117,114,110,32,118,97,108,117,101,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,45,49,0] /* return value was not */, "i8", ALLOC_NORMAL);
__str39=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,49,0] /* overflow was not set */, "i8", ALLOC_NORMAL);
__str40=allocate([45,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,70,0] /* -FFFFFFFFFFFFFFFFFFF */, "i8", ALLOC_NORMAL);
__str41=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,115,101,116,32,116,111,32,45,49,0] /* overflow was not set */, "i8", ALLOC_NORMAL);
__str42=allocate([70,70,0] /* FF\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,48,120,70,70,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str44=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,110,111,116,32,99,108,101,97,114,101,100,0] /* overflow was not cle */, "i8", ALLOC_NORMAL);
__str45=allocate([45,70,70,0] /* -FF\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([111,118,101,114,102,108,111,119,32,119,97,115,32,115,101,116,32,105,110,99,111,114,114,101,99,116,108,121,0] /* overflow was set inc */, "i8", ALLOC_NORMAL);
__str47=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,76,79,78,71,95,77,65,88,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str48=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,76,79,78,71,95,77,73,78,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str49=allocate([116,101,115,116,95,108,111,110,103,95,108,111,110,103,95,97,110,100,95,111,118,101,114,102,108,111,119,0] /* test_long_long_and_o */, "i8", ALLOC_NORMAL);
__str50=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,80,89,95,76,76,79,78,71,95,77,65,88,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str51=allocate([101,120,112,101,99,116,101,100,32,114,101,116,117,114,110,32,118,97,108,117,101,32,80,89,95,76,76,79,78,71,95,77,73,78,0] /* expected return valu */, "i8", ALLOC_NORMAL);
__str52=allocate([76,58,116,101,115,116,95,76,95,99,111,100,101,0] /* L:test_L_code\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([116,101,115,116,95,76,95,99,111,100,101,0] /* test_L_code\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([76,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,52,50,0] /* L code returned wron */, "i8", ALLOC_NORMAL);
__str55=allocate([76,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,105,110,116,32,52,50,0] /* L code returned wron */, "i8", ALLOC_NORMAL);
__str56=allocate([105,40,105,105,41,0] /* i(ii)\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([105,105,105,0] /* iii\00 */, "i8", ALLOC_NORMAL);
_C_59_9780=allocate([-1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_fmt_9778=allocate(1, "i8*", ALLOC_NORMAL);
__str58=allocate([40,105,105,41,105,124,40,105,40,105,105,41,41,40,105,105,105,41,105,0] /* (ii)i|(i(ii))(iii)i\ */, "i8", ALLOC_NORMAL);
_keywords_9777=allocate(24, "i8*", ALLOC_NORMAL);
__str59=allocate([97,114,103,49,0] /* arg1\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([97,114,103,50,0] /* arg2\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([97,114,103,51,0] /* arg3\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,114,103,52,0] /* arg4\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([97,114,103,53,0] /* arg5\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([105,105,105,105,105,105,105,105,105,105,0] /* iiiiiiiiii\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([98,0] /* b\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([66,0] /* B\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([104,0] /* h\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([72,0] /* H\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([73,0] /* I\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([107,0] /* k\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([108,0] /* l\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([110,0] /* n\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([76,0] /* L\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([75,0] /* K\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([116,101,115,116,95,107,95,99,111,100,101,0] /* test_k_code\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([80,121,73,110,116,95,65,115,85,110,115,105,103,110,101,100,76,111,110,103,77,97,115,107,40,41,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,48,120,70,70,70,46,46,46,70,70,70,0] /* PyInt_AsUnsignedLong */, "i8", ALLOC_NORMAL);
__str78=allocate([107,58,116,101,115,116,95,107,95,99,111,100,101,0] /* k:test_k_code\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([107,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,48,120,70,70,70,46,46,46,70,70,70,0] /* k code returned wron */, "i8", ALLOC_NORMAL);
__str80=allocate([45,70,70,70,70,70,70,70,70,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,52,50,0] /* -FFFFFFFF00000000000 */, "i8", ALLOC_NORMAL);
__str81=allocate([107,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,108,111,110,103,32,45,48,120,70,70,70,46,46,48,48,48,48,52,50,0] /* k code returned wron */, "i8", ALLOC_NORMAL);
_x=allocate(1, "i32", ALLOC_NORMAL);
__str82=allocate([116,101,115,116,0] /* test\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([97,115,99,105,105,0] /* ascii\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([117,58,116,101,115,116,95,117,95,99,111,100,101,0] /* u:test_u_code\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([116,101,115,116,95,117,95,99,111,100,101,0] /* test_u_code\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([117,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,32,102,111,114,32,117,39,116,101,115,116,39,0] /* u code returned wron */, "i8", ALLOC_NORMAL);
__str87=allocate([117,35,58,116,101,115,116,95,117,95,99,111,100,101,0] /* u#:test_u_code\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([117,35,32,99,111,100,101,32,114,101,116,117,114,110,101,100,32,119,114,111,110,103,32,118,97,108,117,101,115,32,102,111,114,32,117,39,116,101,115,116,39,0] /* u# code returned wro */, "i8", ALLOC_NORMAL);
__str89=allocate([244,138,175,141,0] /* \F4\8A\AF\8D\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([116,101,115,116,95,119,105,100,101,99,104,97,114,0] /* test_widechar\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([119,105,100,101,32,115,116,114,105,110,103,32,97,110,100,32,117,116,102,56,32,115,116,114,105,110,103,32,104,97,118,101,32,100,105,102,102,101,114,101,110,116,32,108,101,110,103,116,104,0] /* wide string and utf8 */, "i8", ALLOC_NORMAL);
__str92=allocate([119,105,100,101,32,115,116,114,105,110,103,32,97,110,100,32,117,116,102,56,32,115,116,114,105,110,103,32,97,114,101,32,100,105,102,102,101,114,101,110,116,115,0] /* wide string and utf8 */, "i8", ALLOC_NORMAL);
__str93=allocate([124,58,116,101,115,116,95,101,109,112,116,121,95,97,114,103,112,97,114,115,101,0] /* |:test_empty_argpars */, "i8", ALLOC_NORMAL);
_kwlist_10129=allocate(4, "i8*", ALLOC_NORMAL);
__str94=allocate([115,124,115,58,116,101,115,116,95,105,110,99,114,101,109,101,110,116,97,108,101,110,99,111,100,101,114,0] /* s|s:test_incremental */, "i8", ALLOC_NORMAL);
__str95=allocate([115,124,115,58,116,101,115,116,95,105,110,99,114,101,109,101,110,116,97,108,100,101,99,111,100,101,114,0] /* s|s:test_incremental */, "i8", ALLOC_NORMAL);
_C_92_10205=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -2, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, -3, 0, 0, 0, 2, 0, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -1, 0, 0, 0, 32767, 0, 0, 0, 15, 0, 0, 0, 1, 0, 0, 0, -32767, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, 65535, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, -65535, 0, 0, 0, 16, 0, 0, 0, -1, 0, 0, 0, 268435455, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, -268435455, 0, 0, 0, 28, 0, 0, 0, -1, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str96=allocate([116,101,115,116,95,108,111,110,103,95,110,117,109,98,105,116,115,0] /* test_long_numbits\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([119,114,111,110,103,32,114,101,115,117,108,116,32,102,111,114,32,95,80,121,76,111,110,103,95,78,117,109,66,105,116,115,0] /* wrong result for _Py */, "i8", ALLOC_NORMAL);
__str98=allocate([119,114,111,110,103,32,114,101,115,117,108,116,32,102,111,114,32,95,80,121,76,111,110,103,95,83,105,103,110,0] /* wrong result for _Py */, "i8", ALLOC_NORMAL);
__str99=allocate([79,105,58,114,97,105,115,101,95,101,120,99,101,112,116,105,111,110,0] /* Oi:raise_exception\0 */, "i8", ALLOC_NORMAL);
__str100=allocate([97,110,32,101,120,99,101,112,116,105,111,110,32,99,108,97,115,115,32,105,115,32,114,101,113,117,105,114,101,100,0] /* an exception class i */, "i8", ALLOC_NORMAL);
_test_run_counter=allocate(1, "i32", ALLOC_NORMAL);
__str101=allocate([80,121,68,97,116,101,84,105,109,101,95,67,65,80,73,32,115,111,109,101,104,111,119,32,105,110,105,116,105,97,108,105,122,101,100,0] /* PyDateTime_CAPI some */, "i8", ALLOC_NORMAL);
__str102=allocate([100,97,116,101,116,105,109,101,46,100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime.datetime_CA */, "i8", ALLOC_NORMAL);
__str103=allocate([37,100,0] /* %d\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([49,0] /* 1\00 */, "i8", ALLOC_NORMAL);
__str105=allocate([37,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %d failed at 1\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([37,108,100,0] /* %ld\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([37,108,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %ld failed at 1\00 */, "i8", ALLOC_NORMAL);
__str108=allocate([37,122,100,0] /* %zd\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([37,122,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %zd failed at 1\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([37,117,0] /* %u\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([37,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %u failed at 1\00 */, "i8", ALLOC_NORMAL);
__str112=allocate([37,108,117,0] /* %lu\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([37,108,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %lu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str114=allocate([37,122,117,0] /* %zu\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([37,122,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %zu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([37,108,108,117,0] /* %llu\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([37,108,108,117,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %llu failed at 1\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([37,108,108,100,0] /* %lld\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([37,108,108,100,32,102,97,105,108,101,100,32,97,116,32,49,0] /* %lld failed at 1\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([116,101,115,116,95,115,116,114,105,110,103,95,102,114,111,109,95,102,111,114,109,97,116,0] /* test_string_from_for */, "i8", ALLOC_NORMAL);
_capsule_name=allocate(1, "i8*", ALLOC_NORMAL);
__str121=allocate([99,97,112,115,117,108,101,32,110,97,109,101,0] /* capsule name\00 */, "i8", ALLOC_NORMAL);
_capsule_pointer=allocate(1, "i8*", ALLOC_NORMAL);
__str122=allocate([99,97,112,115,117,108,101,32,112,111,105,110,116,101,114,0] /* capsule pointer\00 */, "i8", ALLOC_NORMAL);
_capsule_context=allocate(1, "i8*", ALLOC_NORMAL);
__str123=allocate([99,97,112,115,117,108,101,32,99,111,110,116,101,120,116,0] /* capsule context\00 */, "i8", ALLOC_NORMAL);
_capsule_error=allocate(1, "i8*", ALLOC_NORMAL);
_capsule_destructor_call_count=allocate(1, "i32", ALLOC_NORMAL);
__str124=allocate([99,111,110,116,101,120,116,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* context did not matc */, "i8", ALLOC_NORMAL);
__str125=allocate([100,101,115,116,114,117,99,116,111,114,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,32,32,40,119,111,97,104,33,41,0] /* destructor did not m */, "i8", ALLOC_NORMAL);
__str126=allocate([110,97,109,101,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* name did not match i */, "i8", ALLOC_NORMAL);
__str127=allocate([112,111,105,110,116,101,114,32,100,105,100,32,110,111,116,32,109,97,116,99,104,32,105,110,32,100,101,115,116,114,117,99,116,111,114,33,0] /* pointer did not matc */, "i8", ALLOC_NORMAL);
__str128=allocate([95,115,111,99,107,101,116,46,67,65,80,73,0] /* _socket.CAPI\00 */, "i8", ALLOC_NORMAL);
__str129=allocate([95,115,111,99,107,101,116,0] /* _socket\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([67,65,80,73,0] /* CAPI\00 */, "i8", ALLOC_NORMAL);
__str131=allocate([95,99,117,114,115,101,115,46,95,67,95,65,80,73,0] /* _curses._C_API\00 */, "i8", ALLOC_NORMAL);
__str132=allocate([95,99,117,114,115,101,115,0] /* _curses\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([95,67,95,65,80,73,0] /* _C_API\00 */, "i8", ALLOC_NORMAL);
__str134=allocate([100,97,116,101,116,105,109,101,0] /* datetime\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([100,97,116,101,116,105,109,101,95,67,65,80,73,0] /* datetime_CAPI\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([100,101,115,116,114,117,99,116,111,114,32,110,111,116,32,99,97,108,108,101,100,33,0] /* destructor not calle */, "i8", ALLOC_NORMAL);
__str137=allocate([105,103,110,111,114,101,100,0] /* ignored\00 */, "i8", ALLOC_NORMAL);
__str138=allocate([116,104,101,32,119,114,111,110,103,32,110,97,109,101,0] /* the wrong name\00 */, "i8", ALLOC_NORMAL);
__str139=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,104,97,118,101,32,102,97,105,108,101,100,32,98,117,116,32,100,105,100,32,110,111,116,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str140=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,116,104,101,32,105,110,116,101,114,110,97,108,32,112,111,105,110,116,101,114,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str141=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,78,85,76,76,32,112,111,105,110,116,101,114,32,98,117,116,32,100,105,100,32,110,111,116,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str142=allocate([100,101,115,116,114,117,99,116,111,114,32,99,97,108,108,101,100,32,119,104,101,110,32,105,116,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,98,101,101,110,33,0] /* destructor called wh */, "i8", ALLOC_NORMAL);
_buffer_10522=allocate(256, "i8", ALLOC_NORMAL);
__str143=allocate([37,115,32,109,111,100,117,108,101,58,32,34,37,115,34,32,97,116,116,114,105,98,117,116,101,58,32,34,37,115,34,0] /* %s module: \22%s\22  */, "i8", ALLOC_NORMAL);
__str144=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,114,101,116,117,114,110,101,100,32,78,85,76,76,32,117,110,101,120,112,101,99,116,101,100,108,121,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str145=allocate([119,101,101,98,108,101,115,32,119,111,98,98,108,101,32,98,117,116,32,116,104,101,121,32,100,111,110,39,116,32,102,97,108,108,32,100,111,119,110,0] /* weebles wobble but t */, "i8", ALLOC_NORMAL);
__str146=allocate([80,121,67,97,112,115,117,108,101,95,71,101,116,80,111,105,110,116,101,114,32,115,104,111,117,108,100,32,110,111,116,32,104,97,118,101,32,114,101,116,117,114,110,101,100,32,105,116,115,32,105,110,116,101,114,110,97,108,32,112,111,105,110,116,101,114,33,0] /* PyCapsule_GetPointer */, "i8", ALLOC_NORMAL);
__str147=allocate([116,101,115,116,95,99,97,112,115,117,108,101,0] /* test_capsule\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([79,79,58,116,114,97,99,101,98,97,99,107,95,112,114,105,110,116,0] /* OO:traceback_print\0 */, "i8", ALLOC_NORMAL);
__str149=allocate([115,115,105,58,99,111,100,101,95,110,101,119,101,109,112,116,121,0] /* ssi:code_newempty\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([115,124,115,79,79,58,109,97,107,101,95,101,120,99,101,112,116,105,111,110,95,119,105,116,104,95,100,111,99,0] /* s|sOO:make_exception */, "i8", ALLOC_NORMAL);
_kwlist_10723=allocate(20, "i8*", ALLOC_NORMAL);
__str151=allocate([110,97,109,101,0] /* name\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([100,111,99,0] /* doc\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([98,97,115,101,0] /* base\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([100,105,99,116,0] /* dict\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([114,97,105,115,101,95,101,120,99,101,112,116,105,111,110,0] /* raise_exception\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([116,101,115,116,95,99,111,110,102,105,103,0] /* test_config\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([116,101,115,116,95,100,97,116,101,116,105,109,101,95,99,97,112,105,0] /* test_datetime_capi\0 */, "i8", ALLOC_NORMAL);
__str158=allocate([116,101,115,116,95,108,105,115,116,95,97,112,105,0] /* test_list_api\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([116,101,115,116,95,100,105,99,116,95,105,116,101,114,97,116,105,111,110,0] /* test_dict_iteration\ */, "i8", ALLOC_NORMAL);
__str160=allocate([116,101,115,116,95,108,97,122,121,95,104,97,115,104,95,105,110,104,101,114,105,116,97,110,99,101,0] /* test_lazy_hash_inher */, "i8", ALLOC_NORMAL);
__str161=allocate([116,101,115,116,95,98,114,111,107,101,110,95,109,101,109,111,114,121,118,105,101,119,0] /* test_broken_memoryvi */, "i8", ALLOC_NORMAL);
__str162=allocate([116,101,115,116,95,101,109,112,116,121,95,97,114,103,112,97,114,115,101,0] /* test_empty_argparse\ */, "i8", ALLOC_NORMAL);
__str163=allocate([116,101,115,116,95,110,117,108,108,95,115,116,114,105,110,103,115,0] /* test_null_strings\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([116,101,115,116,95,119,105,116,104,95,100,111,99,115,116,114,105,110,103,0] /* test_with_docstring\ */, "i8", ALLOC_NORMAL);
__str165=allocate([84,104,105,115,32,105,115,32,97,32,112,114,101,116,116,121,32,110,111,114,109,97,108,32,100,111,99,115,116,114,105,110,103,46,0] /* This is a pretty nor */, "i8", ALLOC_NORMAL);
__str166=allocate([103,101,116,97,114,103,115,95,116,117,112,108,101,0] /* getargs_tuple\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([103,101,116,97,114,103,115,95,107,101,121,119,111,114,100,115,0] /* getargs_keywords\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([103,101,116,97,114,103,115,95,98,0] /* getargs_b\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([103,101,116,97,114,103,115,95,66,0] /* getargs_B\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([103,101,116,97,114,103,115,95,104,0] /* getargs_h\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([103,101,116,97,114,103,115,95,72,0] /* getargs_H\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([103,101,116,97,114,103,115,95,73,0] /* getargs_I\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([103,101,116,97,114,103,115,95,107,0] /* getargs_k\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([103,101,116,97,114,103,115,95,105,0] /* getargs_i\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([103,101,116,97,114,103,115,95,108,0] /* getargs_l\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([103,101,116,97,114,103,115,95,110,0] /* getargs_n\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([103,101,116,97,114,103,115,95,76,0] /* getargs_L\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([103,101,116,97,114,103,115,95,75,0] /* getargs_K\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([99,111,100,101,99,95,105,110,99,114,101,109,101,110,116,97,108,101,110,99,111,100,101,114,0] /* codec_incrementalenc */, "i8", ALLOC_NORMAL);
__str180=allocate([99,111,100,101,99,95,105,110,99,114,101,109,101,110,116,97,108,100,101,99,111,100,101,114,0] /* codec_incrementaldec */, "i8", ALLOC_NORMAL);
__str181=allocate([116,114,97,99,101,98,97,99,107,95,112,114,105,110,116,0] /* traceback_print\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([99,111,100,101,95,110,101,119,101,109,112,116,121,0] /* code_newempty\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([109,97,107,101,95,101,120,99,101,112,116,105,111,110,95,119,105,116,104,95,100,111,99,0] /* make_exception_with_ */, "i8", ALLOC_NORMAL);
_TestMethods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str184=allocate([84,95,66,79,79,76,0] /* T_BOOL\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([84,95,66,89,84,69,0] /* T_BYTE\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([84,95,85,66,89,84,69,0] /* T_UBYTE\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([84,95,83,72,79,82,84,0] /* T_SHORT\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([84,95,85,83,72,79,82,84,0] /* T_USHORT\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([84,95,73,78,84,0] /* T_INT\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([84,95,85,73,78,84,0] /* T_UINT\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([84,95,76,79,78,71,0] /* T_LONG\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([84,95,85,76,79,78,71,0] /* T_ULONG\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([84,95,70,76,79,65,84,0] /* T_FLOAT\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([84,95,68,79,85,66,76,69,0] /* T_DOUBLE\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([84,95,83,84,82,73,78,71,95,73,78,80,76,65,67,69,0] /* T_STRING_INPLACE\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([84,95,76,79,78,71,76,79,78,71,0] /* T_LONGLONG\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([84,95,85,76,79,78,71,76,79,78,71,0] /* T_ULONGLONG\00 */, "i8", ALLOC_NORMAL);
_test_members=allocate([0, 0, 0, 0, 14, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_fmt_10763=allocate(1, "i8*", ALLOC_NORMAL);
__str198=allocate([124,98,98,66,104,72,105,73,108,107,102,100,115,35,76,75,0] /* |bbBhHiIlkfds#LK\00 */, "i8", ALLOC_NORMAL);
_keywords_10762=allocate(60, "i8*", ALLOC_NORMAL);
__str199=allocate([115,116,114,105,110,103,32,116,111,111,32,108,111,110,103,0] /* string too long\00 */, "i8", ALLOC_NORMAL);
__str200=allocate(1, "i8", ALLOC_NORMAL);
__str201=allocate([116,101,115,116,95,115,116,114,117,99,116,109,101,109,98,101,114,115,84,121,112,101,0] /* test_structmembersTy */, "i8", ALLOC_NORMAL);
__str202=allocate([84,121,112,101,32,99,111,110,116,97,105,110,105,110,103,32,97,108,108,32,115,116,114,117,99,116,109,101,109,98,101,114,32,116,121,112,101,115,0] /* Type containing all  */, "i8", ALLOC_NORMAL);
_test_structmembersType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str203=allocate([95,116,101,115,116,99,97,112,105,0] /* _testcapi\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([95,116,101,115,116,95,115,116,114,117,99,116,109,101,109,98,101,114,115,84,121,112,101,0] /* _test_structmembersT */, "i8", ALLOC_NORMAL);
__str205=allocate([67,72,65,82,95,77,65,88,0] /* CHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([67,72,65,82,95,77,73,78,0] /* CHAR_MIN\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([85,67,72,65,82,95,77,65,88,0] /* UCHAR_MAX\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([83,72,82,84,95,77,65,88,0] /* SHRT_MAX\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([83,72,82,84,95,77,73,78,0] /* SHRT_MIN\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([85,83,72,82,84,95,77,65,88,0] /* USHRT_MAX\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([73,78,84,95,77,65,88,0] /* INT_MAX\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([73,78,84,95,77,73,78,0] /* INT_MIN\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([85,73,78,84,95,77,65,88,0] /* UINT_MAX\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([76,79,78,71,95,77,65,88,0] /* LONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([76,79,78,71,95,77,73,78,0] /* LONG_MIN\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([85,76,79,78,71,95,77,65,88,0] /* ULONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([70,76,84,95,77,65,88,0] /* FLT_MAX\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([70,76,84,95,77,73,78,0] /* FLT_MIN\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([68,66,76,95,77,65,88,0] /* DBL_MAX\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([68,66,76,95,77,73,78,0] /* DBL_MIN\00 */, "i8", ALLOC_NORMAL);
__str221=allocate([76,76,79,78,71,95,77,65,88,0] /* LLONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([76,76,79,78,71,95,77,73,78,0] /* LLONG_MIN\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([85,76,76,79,78,71,95,77,65,88,0] /* ULLONG_MAX\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([80,89,95,83,83,73,90,69,95,84,95,77,65,88,0] /* PY_SSIZE_T_MAX\00 */, "i8", ALLOC_NORMAL);
__str225=allocate([80,89,95,83,83,73,90,69,95,84,95,77,73,78,0] /* PY_SSIZE_T_MIN\00 */, "i8", ALLOC_NORMAL);
__str226=allocate([83,73,90,69,79,70,95,80,89,71,67,95,72,69,65,68,0] /* SIZEOF_PYGC_HEAD\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([95,116,101,115,116,99,97,112,105,46,101,114,114,111,114,0] /* _testcapi.error\00 */, "i8", ALLOC_NORMAL);
__str228=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[__HashInheritanceTester_Type+12]=((__str5)&4294967295);
HEAP[__HashInheritanceTester_Type+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[__HashInheritanceTester_Type+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[__HashInheritanceTester_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_memoryviewtester_as_buffer+16]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[__MemoryViewTester_Type+12]=((__str12)&4294967295);
HEAP[__MemoryViewTester_Type+24]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[__MemoryViewTester_Type+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[__MemoryViewTester_Type+80]=_memoryviewtester_as_buffer;
HEAP[__MemoryViewTester_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_fmt_9778]=((__str58)&4294967295);
HEAP[_keywords_9777]=((__str59)&4294967295);
HEAP[_keywords_9777+4]=((__str60)&4294967295);
HEAP[_keywords_9777+8]=((__str61)&4294967295);
HEAP[_keywords_9777+12]=((__str62)&4294967295);
HEAP[_keywords_9777+16]=((__str63)&4294967295);
HEAP[_capsule_name]=((__str121)&4294967295);
HEAP[_capsule_pointer]=((__str122)&4294967295);
HEAP[_capsule_context]=((__str123)&4294967295);
HEAP[_kwlist_10723]=((__str151)&4294967295);
HEAP[_kwlist_10723+4]=((__str152)&4294967295);
HEAP[_kwlist_10723+8]=((__str153)&4294967295);
HEAP[_kwlist_10723+12]=((__str154)&4294967295);
HEAP[_TestMethods]=((__str155)&4294967295);
HEAP[_TestMethods+4]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_TestMethods+16]=((__str156)&4294967295);
HEAP[_TestMethods+20]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_TestMethods+32]=((__str157)&4294967295);
HEAP[_TestMethods+36]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_TestMethods+48]=((__str158)&4294967295);
HEAP[_TestMethods+52]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_TestMethods+64]=((__str159)&4294967295);
HEAP[_TestMethods+68]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_TestMethods+80]=((__str160)&4294967295);
HEAP[_TestMethods+84]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_TestMethods+96]=((__str161)&4294967295);
HEAP[_TestMethods+100]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_TestMethods+112]=((__str15)&4294967295);
HEAP[_TestMethods+116]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_TestMethods+128]=((__str37)&4294967295);
HEAP[_TestMethods+132]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_TestMethods+144]=((__str96)&4294967295);
HEAP[_TestMethods+148]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_TestMethods+160]=((__str76)&4294967295);
HEAP[_TestMethods+164]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_TestMethods+176]=((__str162)&4294967295);
HEAP[_TestMethods+180]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_TestMethods+192]=((__str163)&4294967295);
HEAP[_TestMethods+196]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_TestMethods+208]=((__str120)&4294967295);
HEAP[_TestMethods+212]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_TestMethods+224]=((__str164)&4294967295);
HEAP[_TestMethods+228]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_TestMethods+236]=((__str165)&4294967295);
HEAP[_TestMethods+240]=((__str166)&4294967295);
HEAP[_TestMethods+244]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_TestMethods+256]=((__str167)&4294967295);
HEAP[_TestMethods+260]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_TestMethods+272]=((__str168)&4294967295);
HEAP[_TestMethods+276]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_TestMethods+288]=((__str169)&4294967295);
HEAP[_TestMethods+292]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_TestMethods+304]=((__str170)&4294967295);
HEAP[_TestMethods+308]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_TestMethods+320]=((__str171)&4294967295);
HEAP[_TestMethods+324]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_TestMethods+336]=((__str172)&4294967295);
HEAP[_TestMethods+340]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_TestMethods+352]=((__str173)&4294967295);
HEAP[_TestMethods+356]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_TestMethods+368]=((__str174)&4294967295);
HEAP[_TestMethods+372]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_TestMethods+384]=((__str175)&4294967295);
HEAP[_TestMethods+388]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_TestMethods+400]=((__str176)&4294967295);
HEAP[_TestMethods+404]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_TestMethods+416]=((__str177)&4294967295);
HEAP[_TestMethods+420]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_TestMethods+432]=((__str178)&4294967295);
HEAP[_TestMethods+436]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_TestMethods+448]=((__str35)&4294967295);
HEAP[_TestMethods+452]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_TestMethods+464]=((__str49)&4294967295);
HEAP[_TestMethods+468]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_TestMethods+480]=((__str53)&4294967295);
HEAP[_TestMethods+484]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_TestMethods+496]=((__str179)&4294967295);
HEAP[_TestMethods+500]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_TestMethods+512]=((__str180)&4294967295);
HEAP[_TestMethods+516]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_TestMethods+528]=((__str85)&4294967295);
HEAP[_TestMethods+532]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_TestMethods+544]=((__str90)&4294967295);
HEAP[_TestMethods+548]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_TestMethods+560]=((__str147)&4294967295);
HEAP[_TestMethods+564]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_TestMethods+576]=((__str181)&4294967295);
HEAP[_TestMethods+580]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_TestMethods+592]=((__str182)&4294967295);
HEAP[_TestMethods+596]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_TestMethods+608]=((__str183)&4294967295);
HEAP[_TestMethods+612]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_test_members]=((__str184)&4294967295);
HEAP[_test_members+20]=((__str185)&4294967295);
HEAP[_test_members+40]=((__str186)&4294967295);
HEAP[_test_members+60]=((__str187)&4294967295);
HEAP[_test_members+80]=((__str188)&4294967295);
HEAP[_test_members+100]=((__str189)&4294967295);
HEAP[_test_members+120]=((__str190)&4294967295);
HEAP[_test_members+140]=((__str191)&4294967295);
HEAP[_test_members+160]=((__str192)&4294967295);
HEAP[_test_members+180]=((__str193)&4294967295);
HEAP[_test_members+200]=((__str194)&4294967295);
HEAP[_test_members+220]=((__str195)&4294967295);
HEAP[_test_members+240]=((__str196)&4294967295);
HEAP[_test_members+260]=((__str197)&4294967295);
HEAP[_fmt_10763]=((__str198)&4294967295);
HEAP[_keywords_10762]=((__str184)&4294967295);
HEAP[_keywords_10762+4]=((__str185)&4294967295);
HEAP[_keywords_10762+8]=((__str186)&4294967295);
HEAP[_keywords_10762+12]=((__str187)&4294967295);
HEAP[_keywords_10762+16]=((__str188)&4294967295);
HEAP[_keywords_10762+20]=((__str189)&4294967295);
HEAP[_keywords_10762+24]=((__str190)&4294967295);
HEAP[_keywords_10762+28]=((__str191)&4294967295);
HEAP[_keywords_10762+32]=((__str192)&4294967295);
HEAP[_keywords_10762+36]=((__str193)&4294967295);
HEAP[_keywords_10762+40]=((__str194)&4294967295);
HEAP[_keywords_10762+44]=((__str195)&4294967295);
HEAP[_keywords_10762+48]=((__str196)&4294967295);
HEAP[_keywords_10762+52]=((__str197)&4294967295);
HEAP[_test_structmembersType+12]=((__str201)&4294967295);
HEAP[_test_structmembersType+24]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_test_structmembersType+72]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_test_structmembersType+76]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_test_structmembersType+88]=((__str202)&4294967295);
HEAP[_test_structmembersType+120]=((_test_members)&4294967295);
HEAP[_test_structmembersType+156]=(FUNCTION_TABLE_OFFSET + 98);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

