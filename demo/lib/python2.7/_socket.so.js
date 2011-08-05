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



var $0___SIZE = 16; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 12; // %2
  
var $3___SIZE = 400; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 100; // %5
  
var $6___SIZE = 20; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 352; // %8
  
var $9___SIZE = 4; // %9
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySocketModule_APIObject___SIZE = 8; // %struct.PySocketModule_APIObject
  
var $struct_PySocketSockObject___SIZE = 36; // %struct.PySocketSockObject
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_addrinfo___SIZE = 32; // %struct.addrinfo
  
var $struct_anon___SIZE = 12; // %struct.anon
  
var $struct_hostent___SIZE = 20; // %struct.hostent
  
var $struct_ifmap___SIZE = 16; // %struct.ifmap
  var $struct_ifmap___FLATTENER = [0,4,8,10,11,12];
var $struct_ifreq___SIZE = 32; // %struct.ifreq
  
var $struct_in6_addr___SIZE = 16; // %struct.in6_addr
  
var $struct_in_addr___SIZE = 4; // %struct.in_addr
  
var $struct_pollfd___SIZE = 8; // %struct.pollfd
  var $struct_pollfd___FLATTENER = [0,4,6];
var $struct_protoent___SIZE = 12; // %struct.protoent
  
var $struct_servent___SIZE = 16; // %struct.servent
  
var $struct_sockaddr___SIZE = 16; // %struct.sockaddr
  
var $struct_sockaddr_at___SIZE = 0; // %struct.sockaddr_at
  var $struct_sockaddr_at___FLATTENER = [];
var $struct_sockaddr_ax25___SIZE = 0; // %struct.sockaddr_ax25
  var $struct_sockaddr_ax25___FLATTENER = [];
var $struct_sockaddr_dl___SIZE = 0; // %struct.sockaddr_dl
  var $struct_sockaddr_dl___FLATTENER = [];
var $struct_sockaddr_eon___SIZE = 0; // %struct.sockaddr_eon
  var $struct_sockaddr_eon___FLATTENER = [];
var $struct_sockaddr_in___SIZE = 16; // %struct.sockaddr_in
  var $struct_sockaddr_in___FLATTENER = [0,2,4,8];
var $struct_sockaddr_in6___SIZE = 28; // %struct.sockaddr_in6
  var $struct_sockaddr_in6___FLATTENER = [0,2,4,8,24];
var $struct_sockaddr_inarp___SIZE = 0; // %struct.sockaddr_inarp
  var $struct_sockaddr_inarp___FLATTENER = [];
var $struct_sockaddr_ipx___SIZE = 0; // %struct.sockaddr_ipx
  var $struct_sockaddr_ipx___FLATTENER = [];
var $struct_sockaddr_iso___SIZE = 0; // %struct.sockaddr_iso
  var $struct_sockaddr_iso___FLATTENER = [];
var $struct_sockaddr_ll___SIZE = 20; // %struct.sockaddr_ll
  var $struct_sockaddr_ll___FLATTENER = [0,2,4,8,10,11,12];
var $struct_sockaddr_nl___SIZE = 12; // %struct.sockaddr_nl
  var $struct_sockaddr_nl___FLATTENER = [0,2,4,8];
var $struct_sockaddr_ns___SIZE = 0; // %struct.sockaddr_ns
  var $struct_sockaddr_ns___FLATTENER = [];
var $struct_sockaddr_storage___SIZE = 128; // %struct.sockaddr_storage
  
var $struct_sockaddr_tipc___SIZE = 16; // %struct.sockaddr_tipc
  var $struct_sockaddr_tipc___FLATTENER = [0,2,3,4];
var $struct_sockaddr_un___SIZE = 110; // %struct.sockaddr_un
  
var $struct_sockaddr_x25___SIZE = 0; // %struct.sockaddr_x25
  var $struct_sockaddr_x25___FLATTENER = [];
var $struct_tipc_name___SIZE = 8; // %struct.tipc_name
  
var $struct_tipc_name_seq___SIZE = 12; // %struct.tipc_name_seq
  
var $struct_tipc_portid___SIZE = 8; // %struct.tipc_portid
  
var $union_anon___SIZE = 16; // %union.anon
  
var $union_sock_addr_t___SIZE = 128; // %union.sock_addr_t
  
var _sock_doc;
var _socket_error;
var __str;
var __str1;
var _socket_herror;
var _socket_gaierror;
var _defaulttimeout;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __Py_NoneStruct;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _PyExc_ValueError;
var __str15;
var __str16;
var __str17;
var __str18;
var _PyExc_TypeError;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var _PyExc_OverflowError;
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
var _socket_timeout;
var __str35;
var _accept_doc;
var _setblocking_doc;
var __str36;
var _settimeout_doc;
var _gettimeout_doc;
var __str37;
var __str38;
var _setsockopt_doc;
var __str39;
var __str40;
var _getsockopt_doc;
var _bind_doc;
var _close_doc;
var _connect_doc;
var _connect_ex_doc;
var _fileno_doc;
var _dup_doc;
var _getsockname_doc;
var _getpeername_doc;
var _listen_doc;
var __str41;
var __str42;
var __str43;
var _makefile_doc;
var __str44;
var __str45;
var _recv_doc;
var __str46;
var _kwlist_10873;
var __str47;
var __str48;
var __str49;
var __str50;
var __str51;
var ___PRETTY_FUNCTION___10879;
var __str52;
var __str53;
var _recv_into_doc;
var __str54;
var __str55;
var _recvfrom_doc;
var __str56;
var _kwlist_11020;
var ___PRETTY_FUNCTION___11027;
var __str57;
var __str58;
var _recvfrom_into_doc;
var __str59;
var _send_doc;
var __str60;
var _sendall_doc;
var __str61;
var __str62;
var __str63;
var _sendto_doc;
var _shutdown_doc;
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
var _sock_methods;
var __str88;
var __str89;
var __str90;
var __str91;
var __str92;
var __str93;
var __str94;
var __str95;
var _sock_memberlist;
var __str96;
var __str97;
var _keywords_11267;
var __str98;
var _sock_type;
var _gethostname_doc;
var __str99;
var _gethostbyname_doc;
var __str100;
var __str101;
var _ghbn_ex_doc;
var __str102;
var _gethostbyaddr_doc;
var __str103;
var __str104;
var _getservbyname_doc;
var __str105;
var __str106;
var __str107;
var _getservbyport_doc;
var __str108;
var __str109;
var _getprotobyname_doc;
var __str110;
var _socketpair_doc;
var __str111;
var _fromfd_doc;
var __str112;
var __str113;
var _ntohs_doc;
var __str114;
var _ntohl_doc;
var __str115;
var _htons_doc;
var _htonl_doc;
var _inet_aton_doc;
var __str116;
var __str117;
var _inet_ntoa_doc;
var __str118;
var __str119;
var _inet_pton_doc;
var __str120;
var __str121;
var _inet_ntop_doc;
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
var _getaddrinfo_doc;
var __str132;
var __str133;
var __str134;
var __str135;
var __str136;
var __str137;
var __str138;
var _getnameinfo_doc;
var _getdefaulttimeout_doc;
var _setdefaulttimeout_doc;
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
var _socket_methods;
var _PySocketModuleAPI;
var _socket_doc;
var _PyType_Type;
var __str160;
var _PyExc_IOError;
var __str161;
var __str162;
var __str163;
var __str164;
var __str165;
var __str166;
var __str167;
var __str168;
var __str169;
var __Py_TrueStruct;
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
var __str260;
var __str261;
var __str262;
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
var __str298;
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
































































































  function _select_error() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_socket_error]; //@line 476 "socketmodule.c"
        _PyErr_SetString($1, ((__str)&4294967295)); //@line 476 "socketmodule.c"
        HEAP[$0]=0; //@line 477 "socketmodule.c"
        var $2=HEAP[$0]; //@line 477 "socketmodule.c"
        HEAP[$retval]=$2; //@line 477 "socketmodule.c"
        __label__ = 1; break; //@line 477 "socketmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 477 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 477 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _set_error() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        var $1=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $2=_PyErr_SetFromErrno($1); //@line 543 "socketmodule.c"
        HEAP[$0]=$2; //@line 543 "socketmodule.c"
        var $3=HEAP[$0]; //@line 543 "socketmodule.c"
        HEAP[$retval]=$3; //@line 543 "socketmodule.c"
        __label__ = 1; break; //@line 543 "socketmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 543 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 543 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _set_herror($h_error) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $h_error_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $v=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$h_error_addr]=$h_error;
        var $1=HEAP[$h_error_addr]; //@line 553 "socketmodule.c"
        var $2=_hstrerror($1); //@line 553 "socketmodule.c"
        var $3=HEAP[$h_error_addr]; //@line 553 "socketmodule.c"
        var $4=_Py_BuildValue(((__str1)&4294967295), $3, $2); //@line 553 "socketmodule.c"
        HEAP[$v]=$4; //@line 553 "socketmodule.c"
        var $5=HEAP[$v]; //@line 557 "socketmodule.c"
        var $6=($5)!=0; //@line 557 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 557 "socketmodule.c"
      case 1: // $bb
        var $7=HEAP[_socket_herror]; //@line 558 "socketmodule.c"
        var $8=HEAP[$v]; //@line 558 "socketmodule.c"
        _PyErr_SetObject($7, $8); //@line 558 "socketmodule.c"
        var $9=HEAP[$v]; //@line 559 "socketmodule.c"
        var $10=(($9)&4294967295); //@line 559 "socketmodule.c"
        var $11=HEAP[$10]; //@line 559 "socketmodule.c"
        var $12=((($11) - 1)&4294967295); //@line 559 "socketmodule.c"
        var $13=HEAP[$v]; //@line 559 "socketmodule.c"
        var $14=(($13)&4294967295); //@line 559 "socketmodule.c"
        HEAP[$14]=$12; //@line 559 "socketmodule.c"
        var $15=HEAP[$v]; //@line 559 "socketmodule.c"
        var $16=(($15)&4294967295); //@line 559 "socketmodule.c"
        var $17=HEAP[$16]; //@line 559 "socketmodule.c"
        var $18=((($17))|0)==0; //@line 559 "socketmodule.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 559 "socketmodule.c"
      case 2: // $bb1
        var $19=HEAP[$v]; //@line 559 "socketmodule.c"
        var $20=(($19+4)&4294967295); //@line 559 "socketmodule.c"
        var $21=HEAP[$20]; //@line 559 "socketmodule.c"
        var $22=(($21+24)&4294967295); //@line 559 "socketmodule.c"
        var $23=HEAP[$22]; //@line 559 "socketmodule.c"
        var $24=HEAP[$v]; //@line 559 "socketmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 559 "socketmodule.c"
        __label__ = 3; break; //@line 559 "socketmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 562 "socketmodule.c"
        var $25=HEAP[$0]; //@line 562 "socketmodule.c"
        HEAP[$retval]=$25; //@line 562 "socketmodule.c"
        __label__ = 4; break; //@line 562 "socketmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 562 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 562 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _set_gaierror($error) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $error_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $v=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$error_addr]=$error;
        var $1=HEAP[$error_addr]; //@line 573 "socketmodule.c"
        var $2=((($1))|0)==-11; //@line 573 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 573 "socketmodule.c"
      case 1: // $bb
        var $3=_set_error(); //@line 574 "socketmodule.c"
        HEAP[$0]=$3; //@line 574 "socketmodule.c"
        __label__ = 6; break; //@line 574 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$error_addr]; //@line 578 "socketmodule.c"
        var $5=_gai_strerror($4); //@line 578 "socketmodule.c"
        var $6=HEAP[$error_addr]; //@line 578 "socketmodule.c"
        var $7=_Py_BuildValue(((__str1)&4294967295), $6, $5); //@line 578 "socketmodule.c"
        HEAP[$v]=$7; //@line 578 "socketmodule.c"
        var $8=HEAP[$v]; //@line 582 "socketmodule.c"
        var $9=($8)!=0; //@line 582 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 582 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[_socket_gaierror]; //@line 583 "socketmodule.c"
        var $11=HEAP[$v]; //@line 583 "socketmodule.c"
        _PyErr_SetObject($10, $11); //@line 583 "socketmodule.c"
        var $12=HEAP[$v]; //@line 584 "socketmodule.c"
        var $13=(($12)&4294967295); //@line 584 "socketmodule.c"
        var $14=HEAP[$13]; //@line 584 "socketmodule.c"
        var $15=((($14) - 1)&4294967295); //@line 584 "socketmodule.c"
        var $16=HEAP[$v]; //@line 584 "socketmodule.c"
        var $17=(($16)&4294967295); //@line 584 "socketmodule.c"
        HEAP[$17]=$15; //@line 584 "socketmodule.c"
        var $18=HEAP[$v]; //@line 584 "socketmodule.c"
        var $19=(($18)&4294967295); //@line 584 "socketmodule.c"
        var $20=HEAP[$19]; //@line 584 "socketmodule.c"
        var $21=((($20))|0)==0; //@line 584 "socketmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 584 "socketmodule.c"
      case 4: // $bb3
        var $22=HEAP[$v]; //@line 584 "socketmodule.c"
        var $23=(($22+4)&4294967295); //@line 584 "socketmodule.c"
        var $24=HEAP[$23]; //@line 584 "socketmodule.c"
        var $25=(($24+24)&4294967295); //@line 584 "socketmodule.c"
        var $26=HEAP[$25]; //@line 584 "socketmodule.c"
        var $27=HEAP[$v]; //@line 584 "socketmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 584 "socketmodule.c"
        __label__ = 5; break; //@line 584 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 587 "socketmodule.c"
        __label__ = 6; break; //@line 587 "socketmodule.c"
      case 6: // $bb5
        var $28=HEAP[$0]; //@line 574 "socketmodule.c"
        HEAP[$retval]=$28; //@line 574 "socketmodule.c"
        __label__ = 7; break; //@line 574 "socketmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 574 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 574 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_setblocking($s, $block) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $block_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $delay_flag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$block_addr]=$block;
        var $1=HEAP[$s_addr]; //@line 640 "socketmodule.c"
        var $2=(($1+8)&4294967295); //@line 640 "socketmodule.c"
        var $3=HEAP[$2]; //@line 640 "socketmodule.c"
        var $4=_fcntl($3, 3, 0); //@line 640 "socketmodule.c"
        HEAP[$delay_flag]=$4; //@line 640 "socketmodule.c"
        var $5=HEAP[$block_addr]; //@line 641 "socketmodule.c"
        var $6=((($5))|0)!=0; //@line 641 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 641 "socketmodule.c"
      case 1: // $bb
        var $7=HEAP[$delay_flag]; //@line 642 "socketmodule.c"
        var $8=($7) & -2049; //@line 642 "socketmodule.c"
        HEAP[$delay_flag]=$8; //@line 642 "socketmodule.c"
        __label__ = 3; break; //@line 642 "socketmodule.c"
      case 2: // $bb1
        var $9=HEAP[$delay_flag]; //@line 644 "socketmodule.c"
        var $10=($9) | 2048; //@line 644 "socketmodule.c"
        HEAP[$delay_flag]=$10; //@line 644 "socketmodule.c"
        __label__ = 3; break; //@line 644 "socketmodule.c"
      case 3: // $bb2
        var $11=HEAP[$s_addr]; //@line 645 "socketmodule.c"
        var $12=(($11+8)&4294967295); //@line 645 "socketmodule.c"
        var $13=HEAP[$12]; //@line 645 "socketmodule.c"
        var $14=HEAP[$delay_flag]; //@line 645 "socketmodule.c"
        var $15=_fcntl($13, 4, $14); //@line 645 "socketmodule.c"
        HEAP[$0]=1; //@line 659 "socketmodule.c"
        var $16=HEAP[$0]; //@line 659 "socketmodule.c"
        HEAP[$retval]=$16; //@line 659 "socketmodule.c"
        __label__ = 4; break; //@line 659 "socketmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 659 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 659 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_select($s, $writing) {
    var __stackBase__  = STACKTOP; STACKTOP += 34; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 34);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $writing_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_4=__stackBase__+12;
        var $0=__stackBase__+14;
        var $n=__stackBase__+18;
        var $pollfd=__stackBase__+22;
        var $timeout=__stackBase__+30;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$writing_addr]=$writing;
        var $1=HEAP[$s_addr]; //@line 673 "socketmodule.c"
        var $2=(($1+28)&4294967295); //@line 673 "socketmodule.c"
        var $3=HEAP[$2]; //@line 673 "socketmodule.c"
        var $4=($3) <= 0; //@line 673 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 673 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 674 "socketmodule.c"
        __label__ = 12; break; //@line 674 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$s_addr]; //@line 677 "socketmodule.c"
        var $6=(($5+8)&4294967295); //@line 677 "socketmodule.c"
        var $7=HEAP[$6]; //@line 677 "socketmodule.c"
        var $8=((($7))|0) < 0; //@line 677 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 677 "socketmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 678 "socketmodule.c"
        __label__ = 12; break; //@line 678 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[$s_addr]; //@line 687 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 687 "socketmodule.c"
        var $11=HEAP[$10]; //@line 687 "socketmodule.c"
        var $12=(($pollfd)&4294967295); //@line 687 "socketmodule.c"
        HEAP[$12]=$11; //@line 687 "socketmodule.c"
        var $13=HEAP[$writing_addr]; //@line 688 "socketmodule.c"
        var $14=((($13))|0)!=0; //@line 688 "socketmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "socketmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_4]=4; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 6: // $bb5
        HEAP[$iftmp_4]=1; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 7: // $bb6
        var $15=(($pollfd+4)&4294967295); //@line 688 "socketmodule.c"
        var $16=HEAP[$iftmp_4]; //@line 688 "socketmodule.c"
        HEAP[$15]=$16; //@line 688 "socketmodule.c"
        var $17=HEAP[$s_addr]; //@line 691 "socketmodule.c"
        var $18=(($17+28)&4294967295); //@line 691 "socketmodule.c"
        var $19=HEAP[$18]; //@line 691 "socketmodule.c"
        var $20=($19) * 1000; //@line 691 "socketmodule.c"
        var $21=($20) + 0.5; //@line 691 "socketmodule.c"
        var $22=((($21))|0); //@line 691 "socketmodule.c"
        HEAP[$timeout]=$22; //@line 691 "socketmodule.c"
        var $23=HEAP[$timeout]; //@line 692 "socketmodule.c"
        var $24=_poll($pollfd, 1, $23); //@line 692 "socketmodule.c"
        HEAP[$n]=$24; //@line 692 "socketmodule.c"
        var $25=HEAP[$n]; //@line 712 "socketmodule.c"
        var $26=((($25))|0) < 0; //@line 712 "socketmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 712 "socketmodule.c"
      case 8: // $bb7
        HEAP[$0]=-1; //@line 713 "socketmodule.c"
        __label__ = 12; break; //@line 713 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$n]; //@line 714 "socketmodule.c"
        var $28=((($27))|0)==0; //@line 714 "socketmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 714 "socketmodule.c"
      case 10: // $bb9
        HEAP[$0]=1; //@line 715 "socketmodule.c"
        __label__ = 12; break; //@line 715 "socketmodule.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 716 "socketmodule.c"
        __label__ = 12; break; //@line 716 "socketmodule.c"
      case 12: // $bb11
        var $29=HEAP[$0]; //@line 674 "socketmodule.c"
        HEAP[$retval]=$29; //@line 674 "socketmodule.c"
        __label__ = 13; break; //@line 674 "socketmodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 674 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 674 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_sockobject($s, $fd, $family, $type, $proto) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $fd_addr=__stackBase__+4;
        var $family_addr=__stackBase__+8;
        var $type_addr=__stackBase__+12;
        var $proto_addr=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$fd_addr]=$fd;
        HEAP[$family_addr]=$family;
        HEAP[$type_addr]=$type;
        HEAP[$proto_addr]=$proto;
        var $0=HEAP[$s_addr]; //@line 730 "socketmodule.c"
        var $1=(($0+8)&4294967295); //@line 730 "socketmodule.c"
        var $2=HEAP[$fd_addr]; //@line 730 "socketmodule.c"
        HEAP[$1]=$2; //@line 730 "socketmodule.c"
        var $3=HEAP[$s_addr]; //@line 731 "socketmodule.c"
        var $4=(($3+12)&4294967295); //@line 731 "socketmodule.c"
        var $5=HEAP[$family_addr]; //@line 731 "socketmodule.c"
        HEAP[$4]=$5; //@line 731 "socketmodule.c"
        var $6=HEAP[$s_addr]; //@line 732 "socketmodule.c"
        var $7=(($6+16)&4294967295); //@line 732 "socketmodule.c"
        var $8=HEAP[$type_addr]; //@line 732 "socketmodule.c"
        HEAP[$7]=$8; //@line 732 "socketmodule.c"
        var $9=HEAP[$s_addr]; //@line 733 "socketmodule.c"
        var $10=(($9+20)&4294967295); //@line 733 "socketmodule.c"
        var $11=HEAP[$proto_addr]; //@line 733 "socketmodule.c"
        HEAP[$10]=$11; //@line 733 "socketmodule.c"
        var $12=HEAP[_defaulttimeout]; //@line 734 "socketmodule.c"
        var $13=HEAP[$s_addr]; //@line 734 "socketmodule.c"
        var $14=(($13+28)&4294967295); //@line 734 "socketmodule.c"
        HEAP[$14]=$12; //@line 734 "socketmodule.c"
        var $15=HEAP[$s_addr]; //@line 736 "socketmodule.c"
        var $16=(($15+24)&4294967295); //@line 736 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 736 "socketmodule.c"
        var $17=HEAP[_defaulttimeout]; //@line 738 "socketmodule.c"
        var $18=($17) >= 0; //@line 738 "socketmodule.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "socketmodule.c"
      case 1: // $bb
        var $19=HEAP[$s_addr]; //@line 739 "socketmodule.c"
        var $20=_internal_setblocking($19, 0); //@line 739 "socketmodule.c"
        __label__ = 2; break; //@line 739 "socketmodule.c"
      case 2: // $bb1
        __label__ = 3; break; //@line 745 "socketmodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 745 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_sockobject($fd, $family, $type, $proto) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr=__stackBase__;
        var $family_addr=__stackBase__+4;
        var $type_addr=__stackBase__+8;
        var $proto_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $s=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$fd_addr]=$fd;
        HEAP[$family_addr]=$family;
        HEAP[$type_addr]=$type;
        HEAP[$proto_addr]=$proto;
        var $1=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $2=$1; //@line 757 "socketmodule.c"
        HEAP[$s]=$2; //@line 757 "socketmodule.c"
        var $3=HEAP[$s]; //@line 759 "socketmodule.c"
        var $4=($3)!=0; //@line 759 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 759 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[$s]; //@line 760 "socketmodule.c"
        var $6=HEAP[$fd_addr]; //@line 760 "socketmodule.c"
        var $7=HEAP[$family_addr]; //@line 760 "socketmodule.c"
        var $8=HEAP[$type_addr]; //@line 760 "socketmodule.c"
        var $9=HEAP[$proto_addr]; //@line 760 "socketmodule.c"
        _init_sockobject($5, $6, $7, $8, $9); //@line 760 "socketmodule.c"
        __label__ = 2; break; //@line 760 "socketmodule.c"
      case 2: // $bb1
        var $10=HEAP[$s]; //@line 761 "socketmodule.c"
        HEAP[$0]=$10; //@line 761 "socketmodule.c"
        var $11=HEAP[$0]; //@line 761 "socketmodule.c"
        HEAP[$retval]=$11; //@line 761 "socketmodule.c"
        __label__ = 3; break; //@line 761 "socketmodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 761 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 761 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setipaddr($name, $addr_ret, $addr_ret_size, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 93; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr=__stackBase__;
        var $addr_ret_addr=__stackBase__+4;
        var $addr_ret_size_addr=__stackBase__+8;
        var $af_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $hints=__stackBase__+24;
        var $res=__stackBase__+56;
        var $error=__stackBase__+60;
        var $d1=__stackBase__+64;
        var $d2=__stackBase__+68;
        var $d3=__stackBase__+72;
        var $d4=__stackBase__+76;
        var $ch=__stackBase__+80;
        var $siz=__stackBase__+81;
        var $sin=__stackBase__+85;
        var $sin28=__stackBase__+89;
        var $_alloca_point_=0;
        HEAP[$name_addr]=$name;
        HEAP[$addr_ret_addr]=$addr_ret;
        HEAP[$addr_ret_size_addr]=$addr_ret_size;
        HEAP[$af_addr]=$af;
        var $1=HEAP[$addr_ret_addr]; //@line 786 "socketmodule.c"
        var $2=$1; //@line 786 "socketmodule.c"
        _llvm_memset_p0i8_i32($2, 0, 16, 1, 0); //@line 786 "socketmodule.c"
        var $3=HEAP[$name_addr]; //@line 787 "socketmodule.c"
        var $4=(($3)&4294967295); //@line 787 "socketmodule.c"
        var $5=HEAP[$4]; //@line 787 "socketmodule.c"
        var $6=reSign(($5), 8, 0)==0; //@line 787 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 787 "socketmodule.c"
      case 1: // $bb
        var $hints1=$hints; //@line 789 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints1, 0, 32, 1, 0); //@line 789 "socketmodule.c"
        var $7=(($hints+4)&4294967295); //@line 790 "socketmodule.c"
        var $8=HEAP[$af_addr]; //@line 790 "socketmodule.c"
        HEAP[$7]=$8; //@line 790 "socketmodule.c"
        var $9=(($hints+8)&4294967295); //@line 791 "socketmodule.c"
        HEAP[$9]=2; //@line 791 "socketmodule.c"
        var $10=(($hints)&4294967295); //@line 792 "socketmodule.c"
        HEAP[$10]=1; //@line 792 "socketmodule.c"
        var $11=_getaddrinfo(0, ((__str2)&4294967295), $hints, $res); //@line 795 "socketmodule.c"
        HEAP[$error]=$11; //@line 795 "socketmodule.c"
        var $12=HEAP[$error]; //@line 802 "socketmodule.c"
        var $13=((($12))|0)!=0; //@line 802 "socketmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 802 "socketmodule.c"
      case 2: // $bb2
        var $14=HEAP[$error]; //@line 803 "socketmodule.c"
        var $15=_set_gaierror($14); //@line 803 "socketmodule.c"
        HEAP[$0]=-1; //@line 804 "socketmodule.c"
        __label__ = 36; break; //@line 804 "socketmodule.c"
      case 3: // $bb3
        var $16=HEAP[$res]; //@line 806 "socketmodule.c"
        var $17=(($16+4)&4294967295); //@line 806 "socketmodule.c"
        var $18=HEAP[$17]; //@line 806 "socketmodule.c"
        if ($18 == 2) {
          __label__ = 4; break;
        }
        else if ($18 == 10) {
          __label__ = 5; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 4: // $bb4
        HEAP[$siz]=4; //@line 808 "socketmodule.c"
        __label__ = 7; break; //@line 808 "socketmodule.c"
      case 5: // $bb5
        HEAP[$siz]=16; //@line 812 "socketmodule.c"
        __label__ = 7; break; //@line 812 "socketmodule.c"
      case 6: // $bb6
        var $19=HEAP[$res]; //@line 816 "socketmodule.c"
        _freeaddrinfo($19); //@line 816 "socketmodule.c"
        var $20=HEAP[_socket_error]; //@line 817 "socketmodule.c"
        _PyErr_SetString($20, ((__str3)&4294967295)); //@line 817 "socketmodule.c"
        HEAP[$0]=-1; //@line 819 "socketmodule.c"
        __label__ = 36; break; //@line 819 "socketmodule.c"
      case 7: // $bb7
        var $21=HEAP[$res]; //@line 821 "socketmodule.c"
        var $22=(($21+28)&4294967295); //@line 821 "socketmodule.c"
        var $23=HEAP[$22]; //@line 821 "socketmodule.c"
        var $24=($23)!=0; //@line 821 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 821 "socketmodule.c"
      case 8: // $bb8
        var $25=HEAP[$res]; //@line 822 "socketmodule.c"
        _freeaddrinfo($25); //@line 822 "socketmodule.c"
        var $26=HEAP[_socket_error]; //@line 823 "socketmodule.c"
        _PyErr_SetString($26, ((__str4)&4294967295)); //@line 823 "socketmodule.c"
        HEAP[$0]=-1; //@line 825 "socketmodule.c"
        __label__ = 36; break; //@line 825 "socketmodule.c"
      case 9: // $bb9
        var $27=HEAP[$res]; //@line 827 "socketmodule.c"
        var $28=(($27+16)&4294967295); //@line 827 "socketmodule.c"
        var $29=HEAP[$28]; //@line 827 "socketmodule.c"
        var $30=HEAP[$addr_ret_size_addr]; //@line 827 "socketmodule.c"
        var $31=((($29))>>>0) < ((($30))>>>0); //@line 827 "socketmodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 827 "socketmodule.c"
      case 10: // $bb10
        var $32=HEAP[$res]; //@line 828 "socketmodule.c"
        var $33=(($32+16)&4294967295); //@line 828 "socketmodule.c"
        var $34=HEAP[$33]; //@line 828 "socketmodule.c"
        HEAP[$addr_ret_size_addr]=$34; //@line 828 "socketmodule.c"
        __label__ = 11; break; //@line 828 "socketmodule.c"
      case 11: // $bb11
        var $35=HEAP[$res]; //@line 829 "socketmodule.c"
        var $36=(($35+20)&4294967295); //@line 829 "socketmodule.c"
        var $37=HEAP[$36]; //@line 829 "socketmodule.c"
        var $38=HEAP[$addr_ret_addr]; //@line 829 "socketmodule.c"
        var $39=HEAP[$addr_ret_size_addr]; //@line 829 "socketmodule.c"
        var $40=$38; //@line 829 "socketmodule.c"
        var $41=$37; //@line 829 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($40, $41, $39, 1, 0); //@line 829 "socketmodule.c"
        var $42=HEAP[$res]; //@line 830 "socketmodule.c"
        _freeaddrinfo($42); //@line 830 "socketmodule.c"
        var $43=HEAP[$siz]; //@line 831 "socketmodule.c"
        HEAP[$0]=$43; //@line 831 "socketmodule.c"
        __label__ = 36; break; //@line 831 "socketmodule.c"
      case 12: // $bb12
        var $44=HEAP[$name_addr]; //@line 833 "socketmodule.c"
        var $45=(($44)&4294967295); //@line 833 "socketmodule.c"
        var $46=HEAP[$45]; //@line 833 "socketmodule.c"
        var $47=reSign(($46), 8, 0)==60; //@line 833 "socketmodule.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 18; break; } //@line 833 "socketmodule.c"
      case 13: // $bb13
        var $48=HEAP[$name_addr]; //@line 833 "socketmodule.c"
        var $49=_strcmp($48, ((__str5)&4294967295)); //@line 833 "socketmodule.c"
        var $50=((($49))|0)==0; //@line 833 "socketmodule.c"
        if ($50) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 833 "socketmodule.c"
      case 14: // $bb14
        var $51=HEAP[$af_addr]; //@line 835 "socketmodule.c"
        var $52=((($51))|0)!=2; //@line 835 "socketmodule.c"
        if ($52) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 835 "socketmodule.c"
      case 15: // $bb15
        var $53=HEAP[$af_addr]; //@line 835 "socketmodule.c"
        var $54=((($53))|0)!=0; //@line 835 "socketmodule.c"
        if ($54) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 835 "socketmodule.c"
      case 16: // $bb16
        var $55=HEAP[_socket_error]; //@line 836 "socketmodule.c"
        _PyErr_SetString($55, ((__str6)&4294967295)); //@line 836 "socketmodule.c"
        HEAP[$0]=-1; //@line 838 "socketmodule.c"
        __label__ = 36; break; //@line 838 "socketmodule.c"
      case 17: // $bb17
        var $56=HEAP[$addr_ret_addr]; //@line 840 "socketmodule.c"
        var $57=$56; //@line 840 "socketmodule.c"
        HEAP[$sin]=$57; //@line 840 "socketmodule.c"
        var $58=HEAP[$sin]; //@line 841 "socketmodule.c"
        var $59=$58; //@line 841 "socketmodule.c"
        _llvm_memset_p0i8_i32($59, 0, 16, 1, 0); //@line 841 "socketmodule.c"
        var $60=HEAP[$sin]; //@line 842 "socketmodule.c"
        var $61=(($60)&4294967295); //@line 842 "socketmodule.c"
        HEAP[$61]=2; //@line 842 "socketmodule.c"
        var $62=HEAP[$sin]; //@line 846 "socketmodule.c"
        var $63=(($62+4)&4294967295); //@line 846 "socketmodule.c"
        var $64=(($63)&4294967295); //@line 846 "socketmodule.c"
        HEAP[$64]=-1; //@line 846 "socketmodule.c"
        HEAP[$0]=4; //@line 847 "socketmodule.c"
        __label__ = 36; break; //@line 847 "socketmodule.c"
      case 18: // $bb18
        var $65=HEAP[$name_addr]; //@line 849 "socketmodule.c"
        var $66=_sscanf($65, ((__str7)&4294967295), $d1, $d2, $d3, $d4, $ch); //@line 849 "socketmodule.c"
        var $67=((($66))|0)==4; //@line 849 "socketmodule.c"
        if ($67) { __label__ = 19; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 19: // $bb19
        var $68=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $69=((($68))|0) >= 0; //@line 849 "socketmodule.c"
        if ($69) { __label__ = 20; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 20: // $bb20
        var $70=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $71=((($70))|0) <= 255; //@line 849 "socketmodule.c"
        if ($71) { __label__ = 21; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 21: // $bb21
        var $72=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $73=((($72))|0) >= 0; //@line 849 "socketmodule.c"
        if ($73) { __label__ = 22; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 22: // $bb22
        var $74=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $75=((($74))|0) <= 255; //@line 849 "socketmodule.c"
        if ($75) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 23: // $bb23
        var $76=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $77=((($76))|0) >= 0; //@line 849 "socketmodule.c"
        if ($77) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 24: // $bb24
        var $78=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $79=((($78))|0) <= 255; //@line 849 "socketmodule.c"
        if ($79) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 25: // $bb25
        var $80=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $81=((($80))|0) >= 0; //@line 849 "socketmodule.c"
        if ($81) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 26: // $bb26
        var $82=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $83=((($82))|0) <= 255; //@line 849 "socketmodule.c"
        if ($83) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 849 "socketmodule.c"
      case 27: // $bb27
        var $84=HEAP[$addr_ret_addr]; //@line 853 "socketmodule.c"
        var $85=$84; //@line 853 "socketmodule.c"
        HEAP[$sin28]=$85; //@line 853 "socketmodule.c"
        var $86=HEAP[$d1]; //@line 854 "socketmodule.c"
        var $87=($86) << 24; //@line 854 "socketmodule.c"
        var $88=HEAP[$d2]; //@line 854 "socketmodule.c"
        var $89=($88) << 16; //@line 854 "socketmodule.c"
        var $90=($87) | ($89); //@line 854 "socketmodule.c"
        var $91=HEAP[$d3]; //@line 854 "socketmodule.c"
        var $92=($91) << 8; //@line 854 "socketmodule.c"
        var $93=($90) | ($92); //@line 854 "socketmodule.c"
        var $94=HEAP[$d4]; //@line 854 "socketmodule.c"
        var $95=($93) | ($94); //@line 854 "socketmodule.c"
        var $96=_htonl($95); //@line 854 "socketmodule.c"
        var $97=HEAP[$sin28]; //@line 854 "socketmodule.c"
        var $98=(($97+4)&4294967295); //@line 854 "socketmodule.c"
        var $99=(($98)&4294967295); //@line 854 "socketmodule.c"
        HEAP[$99]=$96; //@line 854 "socketmodule.c"
        var $100=HEAP[$sin28]; //@line 857 "socketmodule.c"
        var $101=(($100)&4294967295); //@line 857 "socketmodule.c"
        HEAP[$101]=2; //@line 857 "socketmodule.c"
        HEAP[$0]=4; //@line 861 "socketmodule.c"
        __label__ = 36; break; //@line 861 "socketmodule.c"
      case 28: // $bb29
        var $hints30=$hints; //@line 863 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints30, 0, 32, 1, 0); //@line 863 "socketmodule.c"
        var $102=(($hints+4)&4294967295); //@line 864 "socketmodule.c"
        var $103=HEAP[$af_addr]; //@line 864 "socketmodule.c"
        HEAP[$102]=$103; //@line 864 "socketmodule.c"
        var $104=HEAP[$name_addr]; //@line 867 "socketmodule.c"
        var $105=_getaddrinfo($104, 0, $hints, $res); //@line 867 "socketmodule.c"
        HEAP[$error]=$105; //@line 867 "socketmodule.c"
        var $106=HEAP[$error]; //@line 878 "socketmodule.c"
        var $107=((($106))|0)!=0; //@line 878 "socketmodule.c"
        if ($107) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 878 "socketmodule.c"
      case 29: // $bb31
        var $108=HEAP[$error]; //@line 879 "socketmodule.c"
        var $109=_set_gaierror($108); //@line 879 "socketmodule.c"
        HEAP[$0]=-1; //@line 880 "socketmodule.c"
        __label__ = 36; break; //@line 880 "socketmodule.c"
      case 30: // $bb32
        var $110=HEAP[$res]; //@line 882 "socketmodule.c"
        var $111=(($110+16)&4294967295); //@line 882 "socketmodule.c"
        var $112=HEAP[$111]; //@line 882 "socketmodule.c"
        var $113=HEAP[$addr_ret_size_addr]; //@line 882 "socketmodule.c"
        var $114=((($112))>>>0) < ((($113))>>>0); //@line 882 "socketmodule.c"
        if ($114) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 882 "socketmodule.c"
      case 31: // $bb33
        var $115=HEAP[$res]; //@line 883 "socketmodule.c"
        var $116=(($115+16)&4294967295); //@line 883 "socketmodule.c"
        var $117=HEAP[$116]; //@line 883 "socketmodule.c"
        HEAP[$addr_ret_size_addr]=$117; //@line 883 "socketmodule.c"
        __label__ = 32; break; //@line 883 "socketmodule.c"
      case 32: // $bb34
        var $118=HEAP[$res]; //@line 884 "socketmodule.c"
        var $119=(($118+20)&4294967295); //@line 884 "socketmodule.c"
        var $120=HEAP[$119]; //@line 884 "socketmodule.c"
        var $121=HEAP[$addr_ret_addr]; //@line 884 "socketmodule.c"
        var $122=HEAP[$addr_ret_size_addr]; //@line 884 "socketmodule.c"
        var $123=$121; //@line 884 "socketmodule.c"
        var $124=$120; //@line 884 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($123, $124, $122, 1, 0); //@line 884 "socketmodule.c"
        var $125=HEAP[$res]; //@line 885 "socketmodule.c"
        _freeaddrinfo($125); //@line 885 "socketmodule.c"
        var $126=HEAP[$addr_ret_addr]; //@line 886 "socketmodule.c"
        var $127=(($126)&4294967295); //@line 886 "socketmodule.c"
        var $128=HEAP[$127]; //@line 886 "socketmodule.c"
        var $129=unSign(($128), 16, 0); //@line 886 "socketmodule.c"
        if ($129 == 2) {
          __label__ = 33; break;
        }
        else if ($129 == 10) {
          __label__ = 34; break;
        }
        else {
        __label__ = 35; break;
        }
        
      case 33: // $bb35
        HEAP[$0]=4; //@line 888 "socketmodule.c"
        __label__ = 36; break; //@line 888 "socketmodule.c"
      case 34: // $bb36
        HEAP[$0]=16; //@line 891 "socketmodule.c"
        __label__ = 36; break; //@line 891 "socketmodule.c"
      case 35: // $bb37
        var $130=HEAP[_socket_error]; //@line 894 "socketmodule.c"
        _PyErr_SetString($130, ((__str8)&4294967295)); //@line 894 "socketmodule.c"
        HEAP[$0]=-1; //@line 895 "socketmodule.c"
        __label__ = 36; break; //@line 895 "socketmodule.c"
      case 36: // $bb38
        var $131=HEAP[$0]; //@line 804 "socketmodule.c"
        HEAP[$retval]=$131; //@line 804 "socketmodule.c"
        __label__ = 37; break; //@line 804 "socketmodule.c"
      case 37: // $return
        var $retval39=HEAP[$retval]; //@line 804 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval39; //@line 804 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makeipaddr($addr, $addrlen) {
    var __stackBase__  = STACKTOP; STACKTOP += 1045; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1045);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $addr_addr=__stackBase__;
        var $addrlen_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $error=__stackBase__+1041;
        var $_alloca_point_=0;
        HEAP[$addr_addr]=$addr;
        HEAP[$addrlen_addr]=$addrlen;
        var $1=HEAP[$addrlen_addr]; //@line 910 "socketmodule.c"
        var $2=HEAP[$addr_addr]; //@line 910 "socketmodule.c"
        var $buf1=$buf; //@line 910 "socketmodule.c"
        var $3=_getnameinfo($2, $1, $buf1, 1025, 0, 0, 1); //@line 910 "socketmodule.c"
        HEAP[$error]=$3; //@line 910 "socketmodule.c"
        var $4=HEAP[$error]; //@line 912 "socketmodule.c"
        var $5=((($4))|0)!=0; //@line 912 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 912 "socketmodule.c"
      case 1: // $bb
        var $6=HEAP[$error]; //@line 913 "socketmodule.c"
        var $7=_set_gaierror($6); //@line 913 "socketmodule.c"
        HEAP[$0]=0; //@line 914 "socketmodule.c"
        __label__ = 3; break; //@line 914 "socketmodule.c"
      case 2: // $bb2
        var $buf3=$buf; //@line 916 "socketmodule.c"
        var $8=_PyString_FromString($buf3); //@line 916 "socketmodule.c"
        HEAP[$0]=$8; //@line 916 "socketmodule.c"
        __label__ = 3; break; //@line 916 "socketmodule.c"
      case 3: // $bb4
        var $9=HEAP[$0]; //@line 914 "socketmodule.c"
        HEAP[$retval]=$9; //@line 914 "socketmodule.c"
        __label__ = 4; break; //@line 914 "socketmodule.c"
      case 4: // $return
        var $retval5=HEAP[$retval]; //@line 914 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 914 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makesockaddr($sockfd, $addr, $addrlen, $proto) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $sockfd_addr=__stackBase__;
        var $addr_addr=__stackBase__+4;
        var $addrlen_addr=__stackBase__+8;
        var $proto_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $a=__stackBase__+24;
        var $addrobj=__stackBase__+28;
        var $ret=__stackBase__+32;
        var $a7=__stackBase__+36;
        var $a11=__stackBase__+40;
        var $a13=__stackBase__+44;
        var $addrobj14=__stackBase__+48;
        var $ret15=__stackBase__+52;
        var $a20=__stackBase__+56;
        var $ifname=__stackBase__+60;
        var $ifr=__stackBase__+64;
        var $a25=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$sockfd_addr]=$sockfd;
        HEAP[$addr_addr]=$addr;
        HEAP[$addrlen_addr]=$addrlen;
        HEAP[$proto_addr]=$proto;
        var $1=HEAP[$addrlen_addr]; //@line 974 "socketmodule.c"
        var $2=((($1))|0)==0; //@line 974 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 974 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 976 "socketmodule.c"
        var $4=((($3) + 1)&4294967295); //@line 976 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 976 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 977 "socketmodule.c"
        __label__ = 27; break; //@line 977 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addr_addr]; //@line 985 "socketmodule.c"
        var $6=(($5)&4294967295); //@line 985 "socketmodule.c"
        var $7=HEAP[$6]; //@line 985 "socketmodule.c"
        var $8=unSign(($7), 16, 0); //@line 985 "socketmodule.c"
        if ($8 == 1) {
          __label__ = 7; break;
        }
        else if ($8 == 2) {
          __label__ = 3; break;
        }
        else if ($8 == 10) {
          __label__ = 11; break;
        }
        else if ($8 == 16) {
          __label__ = 10; break;
        }
        else if ($8 == 17) {
          __label__ = 15; break;
        }
        else if ($8 == 30) {
          __label__ = 19; break;
        }
        else {
        __label__ = 26; break;
        }
        
      case 3: // $bb2
        var $9=HEAP[$addr_addr]; //@line 990 "socketmodule.c"
        var $10=_makeipaddr($9, 16); //@line 990 "socketmodule.c"
        HEAP[$addrobj]=$10; //@line 990 "socketmodule.c"
        HEAP[$ret]=0; //@line 991 "socketmodule.c"
        var $11=HEAP[$addrobj]; //@line 992 "socketmodule.c"
        var $12=($11)!=0; //@line 992 "socketmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 992 "socketmodule.c"
      case 4: // $bb3
        var $13=HEAP[$addr_addr]; //@line 993 "socketmodule.c"
        var $14=$13; //@line 993 "socketmodule.c"
        HEAP[$a]=$14; //@line 993 "socketmodule.c"
        var $15=HEAP[$a]; //@line 994 "socketmodule.c"
        var $16=(($15+2)&4294967295); //@line 994 "socketmodule.c"
        var $17=HEAP[$16]; //@line 994 "socketmodule.c"
        var $18=unSign(($17), 16, 0); //@line 994 "socketmodule.c"
        var $19=((($18)) & 65535); //@line 994 "socketmodule.c"
        var $20=_ntohs($19); //@line 994 "socketmodule.c"
        var $21=unSign(($20), 16, 0); //@line 994 "socketmodule.c"
        var $22=HEAP[$addrobj]; //@line 994 "socketmodule.c"
        var $23=_Py_BuildValue(((__str9)&4294967295), $22, $21); //@line 994 "socketmodule.c"
        HEAP[$ret]=$23; //@line 994 "socketmodule.c"
        var $24=HEAP[$addrobj]; //@line 995 "socketmodule.c"
        var $25=(($24)&4294967295); //@line 995 "socketmodule.c"
        var $26=HEAP[$25]; //@line 995 "socketmodule.c"
        var $27=((($26) - 1)&4294967295); //@line 995 "socketmodule.c"
        var $28=HEAP[$addrobj]; //@line 995 "socketmodule.c"
        var $29=(($28)&4294967295); //@line 995 "socketmodule.c"
        HEAP[$29]=$27; //@line 995 "socketmodule.c"
        var $30=HEAP[$addrobj]; //@line 995 "socketmodule.c"
        var $31=(($30)&4294967295); //@line 995 "socketmodule.c"
        var $32=HEAP[$31]; //@line 995 "socketmodule.c"
        var $33=((($32))|0)==0; //@line 995 "socketmodule.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 995 "socketmodule.c"
      case 5: // $bb4
        var $34=HEAP[$addrobj]; //@line 995 "socketmodule.c"
        var $35=(($34+4)&4294967295); //@line 995 "socketmodule.c"
        var $36=HEAP[$35]; //@line 995 "socketmodule.c"
        var $37=(($36+24)&4294967295); //@line 995 "socketmodule.c"
        var $38=HEAP[$37]; //@line 995 "socketmodule.c"
        var $39=HEAP[$addrobj]; //@line 995 "socketmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 995 "socketmodule.c"
        __label__ = 6; break; //@line 995 "socketmodule.c"
      case 6: // $bb5
        var $40=HEAP[$ret]; //@line 997 "socketmodule.c"
        HEAP[$0]=$40; //@line 997 "socketmodule.c"
        __label__ = 27; break; //@line 997 "socketmodule.c"
      case 7: // $bb6
        var $41=HEAP[$addr_addr]; //@line 1003 "socketmodule.c"
        var $42=$41; //@line 1003 "socketmodule.c"
        HEAP[$a7]=$42; //@line 1003 "socketmodule.c"
        var $43=HEAP[$a7]; //@line 1005 "socketmodule.c"
        var $44=(($43+2)&4294967295); //@line 1005 "socketmodule.c"
        var $45=(($44)&4294967295); //@line 1005 "socketmodule.c"
        var $46=HEAP[$45]; //@line 1005 "socketmodule.c"
        var $47=reSign(($46), 8, 0)==0; //@line 1005 "socketmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1005 "socketmodule.c"
      case 8: // $bb8
        var $48=HEAP[$addrlen_addr]; //@line 1006 "socketmodule.c"
        var $49=((($48) - 2)&4294967295); //@line 1006 "socketmodule.c"
        HEAP[$addrlen_addr]=$49; //@line 1006 "socketmodule.c"
        var $50=HEAP[$a7]; //@line 1007 "socketmodule.c"
        var $51=(($50+2)&4294967295); //@line 1007 "socketmodule.c"
        var $52=(($51)&4294967295); //@line 1007 "socketmodule.c"
        var $53=HEAP[$addrlen_addr]; //@line 1007 "socketmodule.c"
        var $54=_PyString_FromStringAndSize($52, $53); //@line 1007 "socketmodule.c"
        HEAP[$0]=$54; //@line 1007 "socketmodule.c"
        __label__ = 27; break; //@line 1007 "socketmodule.c"
      case 9: // $bb9
        var $55=HEAP[$a7]; //@line 1014 "socketmodule.c"
        var $56=(($55+2)&4294967295); //@line 1014 "socketmodule.c"
        var $57=(($56)&4294967295); //@line 1014 "socketmodule.c"
        var $58=_PyString_FromString($57); //@line 1014 "socketmodule.c"
        HEAP[$0]=$58; //@line 1014 "socketmodule.c"
        __label__ = 27; break; //@line 1014 "socketmodule.c"
      case 10: // $bb10
        var $59=HEAP[$addr_addr]; //@line 1022 "socketmodule.c"
        var $60=$59; //@line 1022 "socketmodule.c"
        HEAP[$a11]=$60; //@line 1022 "socketmodule.c"
        var $61=HEAP[$a11]; //@line 1023 "socketmodule.c"
        var $62=(($61+8)&4294967295); //@line 1023 "socketmodule.c"
        var $63=HEAP[$62]; //@line 1023 "socketmodule.c"
        var $64=HEAP[$a11]; //@line 1023 "socketmodule.c"
        var $65=(($64+4)&4294967295); //@line 1023 "socketmodule.c"
        var $66=HEAP[$65]; //@line 1023 "socketmodule.c"
        var $67=_Py_BuildValue(((__str10)&4294967295), $66, $63); //@line 1023 "socketmodule.c"
        HEAP[$0]=$67; //@line 1023 "socketmodule.c"
        __label__ = 27; break; //@line 1023 "socketmodule.c"
      case 11: // $bb12
        var $68=HEAP[$addr_addr]; //@line 1031 "socketmodule.c"
        var $69=_makeipaddr($68, 28); //@line 1031 "socketmodule.c"
        HEAP[$addrobj14]=$69; //@line 1031 "socketmodule.c"
        HEAP[$ret15]=0; //@line 1032 "socketmodule.c"
        var $70=HEAP[$addrobj14]; //@line 1033 "socketmodule.c"
        var $71=($70)!=0; //@line 1033 "socketmodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1033 "socketmodule.c"
      case 12: // $bb16
        var $72=HEAP[$addr_addr]; //@line 1034 "socketmodule.c"
        var $73=$72; //@line 1034 "socketmodule.c"
        HEAP[$a13]=$73; //@line 1034 "socketmodule.c"
        var $74=HEAP[$a13]; //@line 1035 "socketmodule.c"
        var $75=(($74+24)&4294967295); //@line 1035 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1035 "socketmodule.c"
        var $77=HEAP[$a13]; //@line 1035 "socketmodule.c"
        var $78=(($77+4)&4294967295); //@line 1035 "socketmodule.c"
        var $79=HEAP[$78]; //@line 1035 "socketmodule.c"
        var $80=HEAP[$a13]; //@line 1035 "socketmodule.c"
        var $81=(($80+2)&4294967295); //@line 1035 "socketmodule.c"
        var $82=HEAP[$81]; //@line 1035 "socketmodule.c"
        var $83=unSign(($82), 16, 0); //@line 1035 "socketmodule.c"
        var $84=((($83)) & 65535); //@line 1035 "socketmodule.c"
        var $85=_ntohs($84); //@line 1035 "socketmodule.c"
        var $86=unSign(($85), 16, 0); //@line 1035 "socketmodule.c"
        var $87=HEAP[$addrobj14]; //@line 1035 "socketmodule.c"
        var $88=_Py_BuildValue(((__str11)&4294967295), $87, $86, $79, $76); //@line 1035 "socketmodule.c"
        HEAP[$ret15]=$88; //@line 1035 "socketmodule.c"
        var $89=HEAP[$addrobj14]; //@line 1040 "socketmodule.c"
        var $90=(($89)&4294967295); //@line 1040 "socketmodule.c"
        var $91=HEAP[$90]; //@line 1040 "socketmodule.c"
        var $92=((($91) - 1)&4294967295); //@line 1040 "socketmodule.c"
        var $93=HEAP[$addrobj14]; //@line 1040 "socketmodule.c"
        var $94=(($93)&4294967295); //@line 1040 "socketmodule.c"
        HEAP[$94]=$92; //@line 1040 "socketmodule.c"
        var $95=HEAP[$addrobj14]; //@line 1040 "socketmodule.c"
        var $96=(($95)&4294967295); //@line 1040 "socketmodule.c"
        var $97=HEAP[$96]; //@line 1040 "socketmodule.c"
        var $98=((($97))|0)==0; //@line 1040 "socketmodule.c"
        if ($98) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1040 "socketmodule.c"
      case 13: // $bb17
        var $99=HEAP[$addrobj14]; //@line 1040 "socketmodule.c"
        var $100=(($99+4)&4294967295); //@line 1040 "socketmodule.c"
        var $101=HEAP[$100]; //@line 1040 "socketmodule.c"
        var $102=(($101+24)&4294967295); //@line 1040 "socketmodule.c"
        var $103=HEAP[$102]; //@line 1040 "socketmodule.c"
        var $104=HEAP[$addrobj14]; //@line 1040 "socketmodule.c"
        FUNCTION_TABLE[$103]($104); //@line 1040 "socketmodule.c"
        __label__ = 14; break; //@line 1040 "socketmodule.c"
      case 14: // $bb18
        var $105=HEAP[$ret15]; //@line 1042 "socketmodule.c"
        HEAP[$0]=$105; //@line 1042 "socketmodule.c"
        __label__ = 27; break; //@line 1042 "socketmodule.c"
      case 15: // $bb19
        var $106=HEAP[$addr_addr]; //@line 1108 "socketmodule.c"
        var $107=$106; //@line 1108 "socketmodule.c"
        HEAP[$a20]=$107; //@line 1108 "socketmodule.c"
        HEAP[$ifname]=((__str12)&4294967295); //@line 1109 "socketmodule.c"
        var $108=HEAP[$a20]; //@line 1112 "socketmodule.c"
        var $109=(($108+4)&4294967295); //@line 1112 "socketmodule.c"
        var $110=HEAP[$109]; //@line 1112 "socketmodule.c"
        var $111=((($110))|0)!=0; //@line 1112 "socketmodule.c"
        if ($111) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1112 "socketmodule.c"
      case 16: // $bb21
        var $112=HEAP[$a20]; //@line 1113 "socketmodule.c"
        var $113=(($112+4)&4294967295); //@line 1113 "socketmodule.c"
        var $114=HEAP[$113]; //@line 1113 "socketmodule.c"
        var $115=(($ifr+16)&4294967295); //@line 1113 "socketmodule.c"
        var $116=(($115)&4294967295); //@line 1113 "socketmodule.c"
        var $117=$116; //@line 1113 "socketmodule.c"
        HEAP[$117]=$114; //@line 1113 "socketmodule.c"
        var $118=HEAP[$sockfd_addr]; //@line 1114 "socketmodule.c"
        var $119=_ioctl($118, 35088, $ifr); //@line 1114 "socketmodule.c"
        var $120=((($119))|0)==0; //@line 1114 "socketmodule.c"
        if ($120) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1114 "socketmodule.c"
      case 17: // $bb22
        var $121=(($ifr)&4294967295); //@line 1115 "socketmodule.c"
        var $122=(($121)&4294967295); //@line 1115 "socketmodule.c"
        var $123=(($122)&4294967295); //@line 1115 "socketmodule.c"
        HEAP[$ifname]=$123; //@line 1115 "socketmodule.c"
        __label__ = 18; break; //@line 1115 "socketmodule.c"
      case 18: // $bb23
        var $124=HEAP[$a20]; //@line 1117 "socketmodule.c"
        var $125=(($124+11)&4294967295); //@line 1117 "socketmodule.c"
        var $126=HEAP[$125]; //@line 1117 "socketmodule.c"
        var $127=unSign(($126), 8, 0); //@line 1117 "socketmodule.c"
        var $128=HEAP[$a20]; //@line 1117 "socketmodule.c"
        var $129=(($128+12)&4294967295); //@line 1117 "socketmodule.c"
        var $130=(($129)&4294967295); //@line 1117 "socketmodule.c"
        var $131=HEAP[$a20]; //@line 1117 "socketmodule.c"
        var $132=(($131+8)&4294967295); //@line 1117 "socketmodule.c"
        var $133=HEAP[$132]; //@line 1117 "socketmodule.c"
        var $134=unSign(($133), 16, 0); //@line 1117 "socketmodule.c"
        var $135=HEAP[$a20]; //@line 1117 "socketmodule.c"
        var $136=(($135+10)&4294967295); //@line 1117 "socketmodule.c"
        var $137=HEAP[$136]; //@line 1117 "socketmodule.c"
        var $138=unSign(($137), 8, 0); //@line 1117 "socketmodule.c"
        var $139=HEAP[$a20]; //@line 1117 "socketmodule.c"
        var $140=(($139+2)&4294967295); //@line 1117 "socketmodule.c"
        var $141=HEAP[$140]; //@line 1117 "socketmodule.c"
        var $142=unSign(($141), 16, 0); //@line 1117 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1117 "socketmodule.c"
        var $144=_ntohs($143); //@line 1117 "socketmodule.c"
        var $145=unSign(($144), 16, 0); //@line 1117 "socketmodule.c"
        var $146=HEAP[$ifname]; //@line 1117 "socketmodule.c"
        var $147=_Py_BuildValue(((__str13)&4294967295), $146, $145, $138, $134, $130, $127); //@line 1117 "socketmodule.c"
        HEAP[$0]=$147; //@line 1117 "socketmodule.c"
        __label__ = 27; break; //@line 1117 "socketmodule.c"
      case 19: // $bb24
        var $148=HEAP[$addr_addr]; //@line 1130 "socketmodule.c"
        var $149=$148; //@line 1130 "socketmodule.c"
        HEAP[$a25]=$149; //@line 1130 "socketmodule.c"
        var $150=HEAP[$a25]; //@line 1131 "socketmodule.c"
        var $151=(($150+2)&4294967295); //@line 1131 "socketmodule.c"
        var $152=HEAP[$151]; //@line 1131 "socketmodule.c"
        var $153=reSign(($152), 8, 0)==1; //@line 1131 "socketmodule.c"
        if ($153) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1131 "socketmodule.c"
      case 20: // $bb26
        var $154=HEAP[$a25]; //@line 1132 "socketmodule.c"
        var $155=(($154+3)&4294967295); //@line 1132 "socketmodule.c"
        var $156=HEAP[$155]; //@line 1132 "socketmodule.c"
        var $157=reSign(($156), 8, 0); //@line 1132 "socketmodule.c"
        var $158=HEAP[$a25]; //@line 1132 "socketmodule.c"
        var $159=(($158+4)&4294967295); //@line 1132 "socketmodule.c"
        var $160=(($159)&4294967295); //@line 1132 "socketmodule.c"
        var $161=(($160+8)&4294967295); //@line 1132 "socketmodule.c"
        var $162=HEAP[$161]; //@line 1132 "socketmodule.c"
        var $163=HEAP[$a25]; //@line 1132 "socketmodule.c"
        var $164=(($163+4)&4294967295); //@line 1132 "socketmodule.c"
        var $165=(($164)&4294967295); //@line 1132 "socketmodule.c"
        var $166=(($165+4)&4294967295); //@line 1132 "socketmodule.c"
        var $167=HEAP[$166]; //@line 1132 "socketmodule.c"
        var $168=HEAP[$a25]; //@line 1132 "socketmodule.c"
        var $169=(($168+4)&4294967295); //@line 1132 "socketmodule.c"
        var $170=(($169)&4294967295); //@line 1132 "socketmodule.c"
        var $171=(($170)&4294967295); //@line 1132 "socketmodule.c"
        var $172=HEAP[$171]; //@line 1132 "socketmodule.c"
        var $173=HEAP[$a25]; //@line 1132 "socketmodule.c"
        var $174=(($173+2)&4294967295); //@line 1132 "socketmodule.c"
        var $175=HEAP[$174]; //@line 1132 "socketmodule.c"
        var $176=unSign(($175), 8, 0); //@line 1132 "socketmodule.c"
        var $177=_Py_BuildValue(((__str14)&4294967295), $176, $172, $167, $162, $157); //@line 1132 "socketmodule.c"
        HEAP[$0]=$177; //@line 1132 "socketmodule.c"
        __label__ = 27; break; //@line 1132 "socketmodule.c"
      case 21: // $bb27
        var $178=HEAP[$a25]; //@line 1138 "socketmodule.c"
        var $179=(($178+2)&4294967295); //@line 1138 "socketmodule.c"
        var $180=HEAP[$179]; //@line 1138 "socketmodule.c"
        var $181=reSign(($180), 8, 0)==2; //@line 1138 "socketmodule.c"
        if ($181) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1138 "socketmodule.c"
      case 22: // $bb28
        var $182=HEAP[$a25]; //@line 1139 "socketmodule.c"
        var $183=(($182+3)&4294967295); //@line 1139 "socketmodule.c"
        var $184=HEAP[$183]; //@line 1139 "socketmodule.c"
        var $185=reSign(($184), 8, 0); //@line 1139 "socketmodule.c"
        var $186=HEAP[$a25]; //@line 1139 "socketmodule.c"
        var $187=(($186+4)&4294967295); //@line 1139 "socketmodule.c"
        var $188=(($187)&4294967295); //@line 1139 "socketmodule.c"
        var $189=$188; //@line 1139 "socketmodule.c"
        var $190=(($189)&4294967295); //@line 1139 "socketmodule.c"
        var $191=(($190+4)&4294967295); //@line 1139 "socketmodule.c"
        var $192=HEAP[$191]; //@line 1139 "socketmodule.c"
        var $193=HEAP[$a25]; //@line 1139 "socketmodule.c"
        var $194=(($193+4)&4294967295); //@line 1139 "socketmodule.c"
        var $195=(($194)&4294967295); //@line 1139 "socketmodule.c"
        var $196=$195; //@line 1139 "socketmodule.c"
        var $197=(($196)&4294967295); //@line 1139 "socketmodule.c"
        var $198=(($197+4)&4294967295); //@line 1139 "socketmodule.c"
        var $199=HEAP[$198]; //@line 1139 "socketmodule.c"
        var $200=HEAP[$a25]; //@line 1139 "socketmodule.c"
        var $201=(($200+4)&4294967295); //@line 1139 "socketmodule.c"
        var $202=(($201)&4294967295); //@line 1139 "socketmodule.c"
        var $203=$202; //@line 1139 "socketmodule.c"
        var $204=(($203)&4294967295); //@line 1139 "socketmodule.c"
        var $205=(($204)&4294967295); //@line 1139 "socketmodule.c"
        var $206=HEAP[$205]; //@line 1139 "socketmodule.c"
        var $207=HEAP[$a25]; //@line 1139 "socketmodule.c"
        var $208=(($207+2)&4294967295); //@line 1139 "socketmodule.c"
        var $209=HEAP[$208]; //@line 1139 "socketmodule.c"
        var $210=unSign(($209), 8, 0); //@line 1139 "socketmodule.c"
        var $211=_Py_BuildValue(((__str14)&4294967295), $210, $206, $199, $192, $185); //@line 1139 "socketmodule.c"
        HEAP[$0]=$211; //@line 1139 "socketmodule.c"
        __label__ = 27; break; //@line 1139 "socketmodule.c"
      case 23: // $bb29
        var $212=HEAP[$a25]; //@line 1145 "socketmodule.c"
        var $213=(($212+2)&4294967295); //@line 1145 "socketmodule.c"
        var $214=HEAP[$213]; //@line 1145 "socketmodule.c"
        var $215=reSign(($214), 8, 0)==3; //@line 1145 "socketmodule.c"
        if ($215) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1145 "socketmodule.c"
      case 24: // $bb30
        var $216=HEAP[$a25]; //@line 1146 "socketmodule.c"
        var $217=(($216+3)&4294967295); //@line 1146 "socketmodule.c"
        var $218=HEAP[$217]; //@line 1146 "socketmodule.c"
        var $219=reSign(($218), 8, 0); //@line 1146 "socketmodule.c"
        var $220=HEAP[$a25]; //@line 1146 "socketmodule.c"
        var $221=(($220+4)&4294967295); //@line 1146 "socketmodule.c"
        var $222=(($221)&4294967295); //@line 1146 "socketmodule.c"
        var $223=$222; //@line 1146 "socketmodule.c"
        var $224=(($223)&4294967295); //@line 1146 "socketmodule.c"
        var $225=HEAP[$224]; //@line 1146 "socketmodule.c"
        var $226=HEAP[$a25]; //@line 1146 "socketmodule.c"
        var $227=(($226+4)&4294967295); //@line 1146 "socketmodule.c"
        var $228=(($227)&4294967295); //@line 1146 "socketmodule.c"
        var $229=$228; //@line 1146 "socketmodule.c"
        var $230=(($229+4)&4294967295); //@line 1146 "socketmodule.c"
        var $231=HEAP[$230]; //@line 1146 "socketmodule.c"
        var $232=HEAP[$a25]; //@line 1146 "socketmodule.c"
        var $233=(($232+2)&4294967295); //@line 1146 "socketmodule.c"
        var $234=HEAP[$233]; //@line 1146 "socketmodule.c"
        var $235=unSign(($234), 8, 0); //@line 1146 "socketmodule.c"
        var $236=_Py_BuildValue(((__str14)&4294967295), $235, $231, $225, 0, $219); //@line 1146 "socketmodule.c"
        HEAP[$0]=$236; //@line 1146 "socketmodule.c"
        __label__ = 27; break; //@line 1146 "socketmodule.c"
      case 25: // $bb31
        var $237=HEAP[_PyExc_ValueError]; //@line 1153 "socketmodule.c"
        _PyErr_SetString($237, ((__str15)&4294967295)); //@line 1153 "socketmodule.c"
        HEAP[$0]=0; //@line 1155 "socketmodule.c"
        __label__ = 27; break; //@line 1155 "socketmodule.c"
      case 26: // $bb32
        var $238=HEAP[$addr_addr]; //@line 1165 "socketmodule.c"
        var $239=(($238+2)&4294967295); //@line 1165 "socketmodule.c"
        var $240=(($239)&4294967295); //@line 1165 "socketmodule.c"
        var $241=HEAP[$addr_addr]; //@line 1165 "socketmodule.c"
        var $242=(($241)&4294967295); //@line 1165 "socketmodule.c"
        var $243=HEAP[$242]; //@line 1165 "socketmodule.c"
        var $244=unSign(($243), 16, 0); //@line 1165 "socketmodule.c"
        var $245=_Py_BuildValue(((__str16)&4294967295), $244, $240, 14); //@line 1165 "socketmodule.c"
        HEAP[$0]=$245; //@line 1165 "socketmodule.c"
        __label__ = 27; break; //@line 1165 "socketmodule.c"
      case 27: // $bb33
        var $246=HEAP[$0]; //@line 977 "socketmodule.c"
        HEAP[$retval]=$246; //@line 977 "socketmodule.c"
        __label__ = 28; break; //@line 977 "socketmodule.c"
      case 28: // $return
        var $retval34=HEAP[$retval]; //@line 977 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 977 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getsockaddrarg($s, $args, $addr_ret, $len_ret) {
    var __stackBase__  = STACKTOP; STACKTOP += 172; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $addr_ret_addr=__stackBase__+8;
        var $len_ret_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $addr=__stackBase__+24;
        var $path=__stackBase__+28;
        var $len=__stackBase__+32;
        var $addr12=__stackBase__+36;
        var $pid=__stackBase__+40;
        var $groups=__stackBase__+44;
        var $addr18=__stackBase__+48;
        var $host=__stackBase__+52;
        var $port=__stackBase__+56;
        var $result=__stackBase__+60;
        var $addr29=__stackBase__+64;
        var $host30=__stackBase__+68;
        var $port31=__stackBase__+72;
        var $flowinfo=__stackBase__+76;
        var $scope_id=__stackBase__+80;
        var $result32=__stackBase__+84;
        var $addr43=__stackBase__+88;
        var $ifr=__stackBase__+92;
        var $interfaceName=__stackBase__+124;
        var $protoNumber=__stackBase__+128;
        var $hatype=__stackBase__+132;
        var $pkttype=__stackBase__+136;
        var $haddr=__stackBase__+140;
        var $halen=__stackBase__+144;
        var $atype=__stackBase__+148;
        var $v1=__stackBase__+152;
        var $v2=__stackBase__+156;
        var $v3=__stackBase__+160;
        var $scope=__stackBase__+164;
        var $addr58=__stackBase__+168;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$addr_ret_addr]=$addr_ret;
        HEAP[$len_ret_addr]=$len_ret;
        var $1=HEAP[$s_addr]; //@line 1183 "socketmodule.c"
        var $2=(($1+12)&4294967295); //@line 1183 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1183 "socketmodule.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 17; break;
        }
        else if ($3 == 10) {
          __label__ = 27; break;
        }
        else if ($3 == 16) {
          __label__ = 12; break;
        }
        else if ($3 == 17) {
          __label__ = 37; break;
        }
        else if ($3 == 30) {
          __label__ = 51; break;
        }
        else {
        __label__ = 63; break;
        }
        
      case 1: // $bb
        var $4=HEAP[$args_addr]; //@line 1191 "socketmodule.c"
        var $5=_PyArg_Parse($4, ((__str17)&4294967295), $path, $len); //@line 1191 "socketmodule.c"
        var $6=((($5))|0)==0; //@line 1191 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1191 "socketmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1192 "socketmodule.c"
        __label__ = 64; break; //@line 1192 "socketmodule.c"
      case 3: // $bb2
        var $7=HEAP[$addr_ret_addr]; //@line 1194 "socketmodule.c"
        var $8=$7; //@line 1194 "socketmodule.c"
        HEAP[$addr]=$8; //@line 1194 "socketmodule.c"
        var $9=HEAP[$len]; //@line 1196 "socketmodule.c"
        var $10=((($9))|0) <= 0; //@line 1196 "socketmodule.c"
        if ($10) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1196 "socketmodule.c"
      case 4: // $bb3
        var $11=HEAP[$path]; //@line 1196 "socketmodule.c"
        var $12=(($11)&4294967295); //@line 1196 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1196 "socketmodule.c"
        var $14=reSign(($13), 8, 0)!=0; //@line 1196 "socketmodule.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 1196 "socketmodule.c"
      case 5: // $bb4
        var $15=HEAP[$len]; //@line 1198 "socketmodule.c"
        var $16=((($15))>>>0) > 108; //@line 1198 "socketmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1198 "socketmodule.c"
      case 6: // $bb5
        var $17=HEAP[_socket_error]; //@line 1199 "socketmodule.c"
        _PyErr_SetString($17, ((__str18)&4294967295)); //@line 1199 "socketmodule.c"
        HEAP[$0]=0; //@line 1201 "socketmodule.c"
        __label__ = 64; break; //@line 1201 "socketmodule.c"
      case 7: // $bb6
        __label__ = 11; break; //@line 1201 "socketmodule.c"
      case 8: // $bb7
        var $18=HEAP[$len]; //@line 1208 "socketmodule.c"
        var $19=((($18))>>>0) > 107; //@line 1208 "socketmodule.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1208 "socketmodule.c"
      case 9: // $bb8
        var $20=HEAP[_socket_error]; //@line 1209 "socketmodule.c"
        _PyErr_SetString($20, ((__str18)&4294967295)); //@line 1209 "socketmodule.c"
        HEAP[$0]=0; //@line 1211 "socketmodule.c"
        __label__ = 64; break; //@line 1211 "socketmodule.c"
      case 10: // $bb9
        var $21=HEAP[$len]; //@line 1213 "socketmodule.c"
        var $22=HEAP[$addr]; //@line 1213 "socketmodule.c"
        var $23=(($22+2)&4294967295); //@line 1213 "socketmodule.c"
        var $24=(($23+$21)&4294967295); //@line 1213 "socketmodule.c"
        HEAP[$24]=0; //@line 1213 "socketmodule.c"
        __label__ = 11; break; //@line 1213 "socketmodule.c"
      case 11: // $bb10
        var $25=HEAP[$s_addr]; //@line 1215 "socketmodule.c"
        var $26=(($25+12)&4294967295); //@line 1215 "socketmodule.c"
        var $27=HEAP[$26]; //@line 1215 "socketmodule.c"
        var $28=((($27)) & 65535); //@line 1215 "socketmodule.c"
        var $29=HEAP[$addr]; //@line 1215 "socketmodule.c"
        var $30=(($29)&4294967295); //@line 1215 "socketmodule.c"
        HEAP[$30]=$28; //@line 1215 "socketmodule.c"
        var $31=HEAP[$len]; //@line 1216 "socketmodule.c"
        var $32=HEAP[$path]; //@line 1216 "socketmodule.c"
        var $33=HEAP[$addr]; //@line 1216 "socketmodule.c"
        var $34=(($33+2)&4294967295); //@line 1216 "socketmodule.c"
        var $35=(($34)&4294967295); //@line 1216 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($35, $32, $31, 1, 0); //@line 1216 "socketmodule.c"
        var $36=HEAP[$len]; //@line 1220 "socketmodule.c"
        var $37=((($36) + 2)&4294967295); //@line 1220 "socketmodule.c"
        var $38=HEAP[$len_ret_addr]; //@line 1220 "socketmodule.c"
        HEAP[$38]=$37; //@line 1220 "socketmodule.c"
        HEAP[$0]=1; //@line 1222 "socketmodule.c"
        __label__ = 64; break; //@line 1222 "socketmodule.c"
      case 12: // $bb11
        var $39=HEAP[$addr_ret_addr]; //@line 1231 "socketmodule.c"
        var $40=$39; //@line 1231 "socketmodule.c"
        HEAP[$addr12]=$40; //@line 1231 "socketmodule.c"
        var $41=HEAP[$args_addr]; //@line 1232 "socketmodule.c"
        var $42=(($41+4)&4294967295); //@line 1232 "socketmodule.c"
        var $43=HEAP[$42]; //@line 1232 "socketmodule.c"
        var $44=(($43+84)&4294967295); //@line 1232 "socketmodule.c"
        var $45=HEAP[$44]; //@line 1232 "socketmodule.c"
        var $46=($45) & 67108864; //@line 1232 "socketmodule.c"
        var $47=((($46))|0)==0; //@line 1232 "socketmodule.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1232 "socketmodule.c"
      case 13: // $bb13
        var $48=HEAP[$args_addr]; //@line 1233 "socketmodule.c"
        var $49=(($48+4)&4294967295); //@line 1233 "socketmodule.c"
        var $50=HEAP[$49]; //@line 1233 "socketmodule.c"
        var $51=(($50+12)&4294967295); //@line 1233 "socketmodule.c"
        var $52=HEAP[$51]; //@line 1233 "socketmodule.c"
        var $53=HEAP[_PyExc_TypeError]; //@line 1233 "socketmodule.c"
        var $54=_PyErr_Format($53, ((__str19)&4294967295), $52); //@line 1233 "socketmodule.c"
        HEAP[$0]=0; //@line 1238 "socketmodule.c"
        __label__ = 64; break; //@line 1238 "socketmodule.c"
      case 14: // $bb14
        var $55=HEAP[$args_addr]; //@line 1240 "socketmodule.c"
        var $56=_PyArg_ParseTuple($55, ((__str20)&4294967295), $pid, $groups); //@line 1240 "socketmodule.c"
        var $57=((($56))|0)==0; //@line 1240 "socketmodule.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1240 "socketmodule.c"
      case 15: // $bb15
        HEAP[$0]=0; //@line 1241 "socketmodule.c"
        __label__ = 64; break; //@line 1241 "socketmodule.c"
      case 16: // $bb16
        var $58=HEAP[$addr12]; //@line 1242 "socketmodule.c"
        var $59=(($58)&4294967295); //@line 1242 "socketmodule.c"
        HEAP[$59]=16; //@line 1242 "socketmodule.c"
        var $60=HEAP[$pid]; //@line 1243 "socketmodule.c"
        var $61=HEAP[$addr12]; //@line 1243 "socketmodule.c"
        var $62=(($61+4)&4294967295); //@line 1243 "socketmodule.c"
        HEAP[$62]=$60; //@line 1243 "socketmodule.c"
        var $63=HEAP[$groups]; //@line 1244 "socketmodule.c"
        var $64=HEAP[$addr12]; //@line 1244 "socketmodule.c"
        var $65=(($64+8)&4294967295); //@line 1244 "socketmodule.c"
        HEAP[$65]=$63; //@line 1244 "socketmodule.c"
        var $66=HEAP[$len_ret_addr]; //@line 1245 "socketmodule.c"
        HEAP[$66]=12; //@line 1245 "socketmodule.c"
        HEAP[$0]=1; //@line 1246 "socketmodule.c"
        __label__ = 64; break; //@line 1246 "socketmodule.c"
      case 17: // $bb17
        var $67=HEAP[$args_addr]; //@line 1255 "socketmodule.c"
        var $68=(($67+4)&4294967295); //@line 1255 "socketmodule.c"
        var $69=HEAP[$68]; //@line 1255 "socketmodule.c"
        var $70=(($69+84)&4294967295); //@line 1255 "socketmodule.c"
        var $71=HEAP[$70]; //@line 1255 "socketmodule.c"
        var $72=($71) & 67108864; //@line 1255 "socketmodule.c"
        var $73=((($72))|0)==0; //@line 1255 "socketmodule.c"
        if ($73) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1255 "socketmodule.c"
      case 18: // $bb19
        var $74=HEAP[$args_addr]; //@line 1256 "socketmodule.c"
        var $75=(($74+4)&4294967295); //@line 1256 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1256 "socketmodule.c"
        var $77=(($76+12)&4294967295); //@line 1256 "socketmodule.c"
        var $78=HEAP[$77]; //@line 1256 "socketmodule.c"
        var $79=HEAP[_PyExc_TypeError]; //@line 1256 "socketmodule.c"
        var $80=_PyErr_Format($79, ((__str21)&4294967295), $78); //@line 1256 "socketmodule.c"
        HEAP[$0]=0; //@line 1261 "socketmodule.c"
        __label__ = 64; break; //@line 1261 "socketmodule.c"
      case 19: // $bb20
        var $81=HEAP[$args_addr]; //@line 1263 "socketmodule.c"
        var $82=_PyArg_ParseTuple($81, ((__str22)&4294967295), ((__str23)&4294967295), $host, $port); //@line 1263 "socketmodule.c"
        var $83=((($82))|0)==0; //@line 1263 "socketmodule.c"
        if ($83) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1263 "socketmodule.c"
      case 20: // $bb21
        HEAP[$0]=0; //@line 1265 "socketmodule.c"
        __label__ = 64; break; //@line 1265 "socketmodule.c"
      case 21: // $bb22
        var $84=HEAP[$addr_ret_addr]; //@line 1266 "socketmodule.c"
        var $85=$84; //@line 1266 "socketmodule.c"
        HEAP[$addr18]=$85; //@line 1266 "socketmodule.c"
        var $86=HEAP[$addr18]; //@line 1267 "socketmodule.c"
        var $87=$86; //@line 1267 "socketmodule.c"
        var $88=HEAP[$host]; //@line 1267 "socketmodule.c"
        var $89=_setipaddr($88, $87, 16, 2); //@line 1267 "socketmodule.c"
        HEAP[$result]=$89; //@line 1267 "socketmodule.c"
        var $90=HEAP[$host]; //@line 1269 "socketmodule.c"
        _PyMem_Free($90); //@line 1269 "socketmodule.c"
        var $91=HEAP[$result]; //@line 1270 "socketmodule.c"
        var $92=((($91))|0) < 0; //@line 1270 "socketmodule.c"
        if ($92) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1270 "socketmodule.c"
      case 22: // $bb23
        HEAP[$0]=0; //@line 1271 "socketmodule.c"
        __label__ = 64; break; //@line 1271 "socketmodule.c"
      case 23: // $bb24
        var $93=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $94=((($93))|0) < 0; //@line 1272 "socketmodule.c"
        if ($94) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1272 "socketmodule.c"
      case 24: // $bb25
        var $95=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $96=((($95))|0) > 65535; //@line 1272 "socketmodule.c"
        if ($96) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1272 "socketmodule.c"
      case 25: // $bb26
        var $97=HEAP[_PyExc_OverflowError]; //@line 1273 "socketmodule.c"
        _PyErr_SetString($97, ((__str24)&4294967295)); //@line 1273 "socketmodule.c"
        HEAP[$0]=0; //@line 1276 "socketmodule.c"
        __label__ = 64; break; //@line 1276 "socketmodule.c"
      case 26: // $bb27
        var $98=HEAP[$addr18]; //@line 1278 "socketmodule.c"
        var $99=(($98)&4294967295); //@line 1278 "socketmodule.c"
        HEAP[$99]=2; //@line 1278 "socketmodule.c"
        var $100=HEAP[$port]; //@line 1279 "socketmodule.c"
        var $101=((($100)) & 65535); //@line 1279 "socketmodule.c"
        var $102=unSign(($101), 16, 0); //@line 1279 "socketmodule.c"
        var $103=((($102)) & 65535); //@line 1279 "socketmodule.c"
        var $104=_htons($103); //@line 1279 "socketmodule.c"
        var $105=HEAP[$addr18]; //@line 1279 "socketmodule.c"
        var $106=(($105+2)&4294967295); //@line 1279 "socketmodule.c"
        HEAP[$106]=$104; //@line 1279 "socketmodule.c"
        var $107=HEAP[$len_ret_addr]; //@line 1280 "socketmodule.c"
        HEAP[$107]=16; //@line 1280 "socketmodule.c"
        HEAP[$0]=1; //@line 1281 "socketmodule.c"
        __label__ = 64; break; //@line 1281 "socketmodule.c"
      case 27: // $bb28
        HEAP[$scope_id]=0; //@line 1290 "socketmodule.c"
        var $108=HEAP[$scope_id]; //@line 1290 "socketmodule.c"
        HEAP[$flowinfo]=$108; //@line 1290 "socketmodule.c"
        var $109=HEAP[$args_addr]; //@line 1291 "socketmodule.c"
        var $110=(($109+4)&4294967295); //@line 1291 "socketmodule.c"
        var $111=HEAP[$110]; //@line 1291 "socketmodule.c"
        var $112=(($111+84)&4294967295); //@line 1291 "socketmodule.c"
        var $113=HEAP[$112]; //@line 1291 "socketmodule.c"
        var $114=($113) & 67108864; //@line 1291 "socketmodule.c"
        var $115=((($114))|0)==0; //@line 1291 "socketmodule.c"
        if ($115) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1291 "socketmodule.c"
      case 28: // $bb33
        var $116=HEAP[$args_addr]; //@line 1292 "socketmodule.c"
        var $117=(($116+4)&4294967295); //@line 1292 "socketmodule.c"
        var $118=HEAP[$117]; //@line 1292 "socketmodule.c"
        var $119=(($118+12)&4294967295); //@line 1292 "socketmodule.c"
        var $120=HEAP[$119]; //@line 1292 "socketmodule.c"
        var $121=HEAP[_PyExc_TypeError]; //@line 1292 "socketmodule.c"
        var $122=_PyErr_Format($121, ((__str25)&4294967295), $120); //@line 1292 "socketmodule.c"
        HEAP[$0]=0; //@line 1297 "socketmodule.c"
        __label__ = 64; break; //@line 1297 "socketmodule.c"
      case 29: // $bb34
        var $123=HEAP[$args_addr]; //@line 1299 "socketmodule.c"
        var $124=_PyArg_ParseTuple($123, ((__str26)&4294967295), ((__str23)&4294967295), $host30, $port31, $flowinfo, $scope_id); //@line 1299 "socketmodule.c"
        var $125=((($124))|0)==0; //@line 1299 "socketmodule.c"
        if ($125) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1299 "socketmodule.c"
      case 30: // $bb35
        HEAP[$0]=0; //@line 1302 "socketmodule.c"
        __label__ = 64; break; //@line 1302 "socketmodule.c"
      case 31: // $bb36
        var $126=HEAP[$addr_ret_addr]; //@line 1304 "socketmodule.c"
        var $127=$126; //@line 1304 "socketmodule.c"
        HEAP[$addr29]=$127; //@line 1304 "socketmodule.c"
        var $128=HEAP[$addr29]; //@line 1305 "socketmodule.c"
        var $129=$128; //@line 1305 "socketmodule.c"
        var $130=HEAP[$host30]; //@line 1305 "socketmodule.c"
        var $131=_setipaddr($130, $129, 28, 10); //@line 1305 "socketmodule.c"
        HEAP[$result32]=$131; //@line 1305 "socketmodule.c"
        var $132=HEAP[$host30]; //@line 1307 "socketmodule.c"
        _PyMem_Free($132); //@line 1307 "socketmodule.c"
        var $133=HEAP[$result32]; //@line 1308 "socketmodule.c"
        var $134=((($133))|0) < 0; //@line 1308 "socketmodule.c"
        if ($134) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1308 "socketmodule.c"
      case 32: // $bb37
        HEAP[$0]=0; //@line 1309 "socketmodule.c"
        __label__ = 64; break; //@line 1309 "socketmodule.c"
      case 33: // $bb38
        var $135=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $136=((($135))|0) < 0; //@line 1310 "socketmodule.c"
        if ($136) { __label__ = 35; break; } else { __label__ = 34; break; } //@line 1310 "socketmodule.c"
      case 34: // $bb39
        var $137=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $138=((($137))|0) > 65535; //@line 1310 "socketmodule.c"
        if ($138) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1310 "socketmodule.c"
      case 35: // $bb40
        var $139=HEAP[_PyExc_OverflowError]; //@line 1311 "socketmodule.c"
        _PyErr_SetString($139, ((__str24)&4294967295)); //@line 1311 "socketmodule.c"
        HEAP[$0]=0; //@line 1314 "socketmodule.c"
        __label__ = 64; break; //@line 1314 "socketmodule.c"
      case 36: // $bb41
        var $140=HEAP[$s_addr]; //@line 1316 "socketmodule.c"
        var $141=(($140+12)&4294967295); //@line 1316 "socketmodule.c"
        var $142=HEAP[$141]; //@line 1316 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1316 "socketmodule.c"
        var $144=HEAP[$addr29]; //@line 1316 "socketmodule.c"
        var $145=(($144)&4294967295); //@line 1316 "socketmodule.c"
        HEAP[$145]=$143; //@line 1316 "socketmodule.c"
        var $146=HEAP[$port31]; //@line 1317 "socketmodule.c"
        var $147=((($146)) & 65535); //@line 1317 "socketmodule.c"
        var $148=unSign(($147), 16, 0); //@line 1317 "socketmodule.c"
        var $149=((($148)) & 65535); //@line 1317 "socketmodule.c"
        var $150=_htons($149); //@line 1317 "socketmodule.c"
        var $151=HEAP[$addr29]; //@line 1317 "socketmodule.c"
        var $152=(($151+2)&4294967295); //@line 1317 "socketmodule.c"
        HEAP[$152]=$150; //@line 1317 "socketmodule.c"
        var $153=HEAP[$flowinfo]; //@line 1318 "socketmodule.c"
        var $154=HEAP[$addr29]; //@line 1318 "socketmodule.c"
        var $155=(($154+4)&4294967295); //@line 1318 "socketmodule.c"
        HEAP[$155]=$153; //@line 1318 "socketmodule.c"
        var $156=HEAP[$scope_id]; //@line 1319 "socketmodule.c"
        var $157=HEAP[$addr29]; //@line 1319 "socketmodule.c"
        var $158=(($157+24)&4294967295); //@line 1319 "socketmodule.c"
        HEAP[$158]=$156; //@line 1319 "socketmodule.c"
        var $159=HEAP[$len_ret_addr]; //@line 1320 "socketmodule.c"
        HEAP[$159]=28; //@line 1320 "socketmodule.c"
        HEAP[$0]=1; //@line 1321 "socketmodule.c"
        __label__ = 64; break; //@line 1321 "socketmodule.c"
      case 37: // $bb42
        HEAP[$hatype]=0; //@line 1428 "socketmodule.c"
        HEAP[$pkttype]=0; //@line 1429 "socketmodule.c"
        HEAP[$haddr]=0; //@line 1430 "socketmodule.c"
        HEAP[$halen]=0; //@line 1431 "socketmodule.c"
        var $160=HEAP[$args_addr]; //@line 1433 "socketmodule.c"
        var $161=(($160+4)&4294967295); //@line 1433 "socketmodule.c"
        var $162=HEAP[$161]; //@line 1433 "socketmodule.c"
        var $163=(($162+84)&4294967295); //@line 1433 "socketmodule.c"
        var $164=HEAP[$163]; //@line 1433 "socketmodule.c"
        var $165=($164) & 67108864; //@line 1433 "socketmodule.c"
        var $166=((($165))|0)==0; //@line 1433 "socketmodule.c"
        if ($166) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1433 "socketmodule.c"
      case 38: // $bb44
        var $167=HEAP[$args_addr]; //@line 1434 "socketmodule.c"
        var $168=(($167+4)&4294967295); //@line 1434 "socketmodule.c"
        var $169=HEAP[$168]; //@line 1434 "socketmodule.c"
        var $170=(($169+12)&4294967295); //@line 1434 "socketmodule.c"
        var $171=HEAP[$170]; //@line 1434 "socketmodule.c"
        var $172=HEAP[_PyExc_TypeError]; //@line 1434 "socketmodule.c"
        var $173=_PyErr_Format($172, ((__str27)&4294967295), $171); //@line 1434 "socketmodule.c"
        HEAP[$0]=0; //@line 1439 "socketmodule.c"
        __label__ = 64; break; //@line 1439 "socketmodule.c"
      case 39: // $bb45
        var $174=HEAP[$args_addr]; //@line 1441 "socketmodule.c"
        var $175=_PyArg_ParseTuple($174, ((__str28)&4294967295), $interfaceName, $protoNumber, $pkttype, $hatype, $haddr, $halen); //@line 1441 "socketmodule.c"
        var $176=((($175))|0)==0; //@line 1441 "socketmodule.c"
        if ($176) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1441 "socketmodule.c"
      case 40: // $bb46
        HEAP[$0]=0; //@line 1444 "socketmodule.c"
        __label__ = 64; break; //@line 1444 "socketmodule.c"
      case 41: // $bb47
        var $177=HEAP[$interfaceName]; //@line 1445 "socketmodule.c"
        var $178=(($ifr)&4294967295); //@line 1445 "socketmodule.c"
        var $179=(($178)&4294967295); //@line 1445 "socketmodule.c"
        var $180=(($179)&4294967295); //@line 1445 "socketmodule.c"
        var $181=_strncpy($180, $177, 16); //@line 1445 "socketmodule.c"
        var $182=(($ifr)&4294967295); //@line 1446 "socketmodule.c"
        var $183=(($182)&4294967295); //@line 1446 "socketmodule.c"
        var $184=(($183+15)&4294967295); //@line 1446 "socketmodule.c"
        HEAP[$184]=0; //@line 1446 "socketmodule.c"
        var $185=HEAP[$s_addr]; //@line 1447 "socketmodule.c"
        var $186=(($185+8)&4294967295); //@line 1447 "socketmodule.c"
        var $187=HEAP[$186]; //@line 1447 "socketmodule.c"
        var $188=_ioctl($187, 35123, $ifr); //@line 1447 "socketmodule.c"
        var $189=((($188))|0) < 0; //@line 1447 "socketmodule.c"
        if ($189) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1447 "socketmodule.c"
      case 42: // $bb48
        var $190=HEAP[$s_addr]; //@line 1448 "socketmodule.c"
        var $191=(($190+24)&4294967295); //@line 1448 "socketmodule.c"
        var $192=HEAP[$191]; //@line 1448 "socketmodule.c"
        var $193=FUNCTION_TABLE[$192](); //@line 1448 "socketmodule.c"
        HEAP[$0]=0; //@line 1449 "socketmodule.c"
        __label__ = 64; break; //@line 1449 "socketmodule.c"
      case 43: // $bb49
        var $194=HEAP[$halen]; //@line 1451 "socketmodule.c"
        var $195=((($194))>>>0) > 8; //@line 1451 "socketmodule.c"
        if ($195) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1451 "socketmodule.c"
      case 44: // $bb50
        var $196=HEAP[_PyExc_ValueError]; //@line 1452 "socketmodule.c"
        _PyErr_SetString($196, ((__str29)&4294967295)); //@line 1452 "socketmodule.c"
        HEAP[$0]=0; //@line 1454 "socketmodule.c"
        __label__ = 64; break; //@line 1454 "socketmodule.c"
      case 45: // $bb51
        var $197=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $198=((($197))|0) < 0; //@line 1456 "socketmodule.c"
        if ($198) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 1456 "socketmodule.c"
      case 46: // $bb52
        var $199=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $200=((($199))|0) > 65535; //@line 1456 "socketmodule.c"
        if ($200) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1456 "socketmodule.c"
      case 47: // $bb53
        var $201=HEAP[_PyExc_OverflowError]; //@line 1457 "socketmodule.c"
        _PyErr_SetString($201, ((__str30)&4294967295)); //@line 1457 "socketmodule.c"
        HEAP[$0]=0; //@line 1460 "socketmodule.c"
        __label__ = 64; break; //@line 1460 "socketmodule.c"
      case 48: // $bb54
        var $202=HEAP[$addr_ret_addr]; //@line 1462 "socketmodule.c"
        var $203=$202; //@line 1462 "socketmodule.c"
        HEAP[$addr43]=$203; //@line 1462 "socketmodule.c"
        var $204=HEAP[$addr43]; //@line 1463 "socketmodule.c"
        var $205=(($204)&4294967295); //@line 1463 "socketmodule.c"
        HEAP[$205]=17; //@line 1463 "socketmodule.c"
        var $206=HEAP[$protoNumber]; //@line 1464 "socketmodule.c"
        var $207=((($206)) & 65535); //@line 1464 "socketmodule.c"
        var $208=unSign(($207), 16, 0); //@line 1464 "socketmodule.c"
        var $209=((($208)) & 65535); //@line 1464 "socketmodule.c"
        var $210=_htons($209); //@line 1464 "socketmodule.c"
        var $211=HEAP[$addr43]; //@line 1464 "socketmodule.c"
        var $212=(($211+2)&4294967295); //@line 1464 "socketmodule.c"
        HEAP[$212]=$210; //@line 1464 "socketmodule.c"
        var $213=(($ifr+16)&4294967295); //@line 1465 "socketmodule.c"
        var $214=(($213)&4294967295); //@line 1465 "socketmodule.c"
        var $215=$214; //@line 1465 "socketmodule.c"
        var $216=HEAP[$215]; //@line 1465 "socketmodule.c"
        var $217=HEAP[$addr43]; //@line 1465 "socketmodule.c"
        var $218=(($217+4)&4294967295); //@line 1465 "socketmodule.c"
        HEAP[$218]=$216; //@line 1465 "socketmodule.c"
        var $219=HEAP[$pkttype]; //@line 1466 "socketmodule.c"
        var $220=((($219)) & 255); //@line 1466 "socketmodule.c"
        var $221=HEAP[$addr43]; //@line 1466 "socketmodule.c"
        var $222=(($221+10)&4294967295); //@line 1466 "socketmodule.c"
        HEAP[$222]=$220; //@line 1466 "socketmodule.c"
        var $223=HEAP[$hatype]; //@line 1467 "socketmodule.c"
        var $224=((($223)) & 65535); //@line 1467 "socketmodule.c"
        var $225=HEAP[$addr43]; //@line 1467 "socketmodule.c"
        var $226=(($225+8)&4294967295); //@line 1467 "socketmodule.c"
        HEAP[$226]=$224; //@line 1467 "socketmodule.c"
        var $227=HEAP[$halen]; //@line 1468 "socketmodule.c"
        var $228=((($227))|0)!=0; //@line 1468 "socketmodule.c"
        if ($228) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1468 "socketmodule.c"
      case 49: // $bb55
        var $229=HEAP[$halen]; //@line 1469 "socketmodule.c"
        var $230=HEAP[$haddr]; //@line 1469 "socketmodule.c"
        var $231=HEAP[$addr43]; //@line 1469 "socketmodule.c"
        var $232=(($231+12)&4294967295); //@line 1469 "socketmodule.c"
        var $233=$232; //@line 1469 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($233, $230, $229, 1, 0); //@line 1469 "socketmodule.c"
        __label__ = 50; break; //@line 1469 "socketmodule.c"
      case 50: // $bb56
        var $234=HEAP[$halen]; //@line 1471 "socketmodule.c"
        var $235=((($234)) & 255); //@line 1471 "socketmodule.c"
        var $236=HEAP[$addr43]; //@line 1471 "socketmodule.c"
        var $237=(($236+11)&4294967295); //@line 1471 "socketmodule.c"
        HEAP[$237]=$235; //@line 1471 "socketmodule.c"
        var $238=HEAP[$len_ret_addr]; //@line 1472 "socketmodule.c"
        HEAP[$238]=20; //@line 1472 "socketmodule.c"
        HEAP[$0]=1; //@line 1473 "socketmodule.c"
        __label__ = 64; break; //@line 1473 "socketmodule.c"
      case 51: // $bb57
        HEAP[$scope]=2; //@line 1481 "socketmodule.c"
        var $239=HEAP[$args_addr]; //@line 1484 "socketmodule.c"
        var $240=(($239+4)&4294967295); //@line 1484 "socketmodule.c"
        var $241=HEAP[$240]; //@line 1484 "socketmodule.c"
        var $242=(($241+84)&4294967295); //@line 1484 "socketmodule.c"
        var $243=HEAP[$242]; //@line 1484 "socketmodule.c"
        var $244=($243) & 67108864; //@line 1484 "socketmodule.c"
        var $245=((($244))|0)==0; //@line 1484 "socketmodule.c"
        if ($245) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1484 "socketmodule.c"
      case 52: // $bb59
        var $246=HEAP[$args_addr]; //@line 1485 "socketmodule.c"
        var $247=(($246+4)&4294967295); //@line 1485 "socketmodule.c"
        var $248=HEAP[$247]; //@line 1485 "socketmodule.c"
        var $249=(($248+12)&4294967295); //@line 1485 "socketmodule.c"
        var $250=HEAP[$249]; //@line 1485 "socketmodule.c"
        var $251=HEAP[_PyExc_TypeError]; //@line 1485 "socketmodule.c"
        var $252=_PyErr_Format($251, ((__str31)&4294967295), $250); //@line 1485 "socketmodule.c"
        HEAP[$0]=0; //@line 1490 "socketmodule.c"
        __label__ = 64; break; //@line 1490 "socketmodule.c"
      case 53: // $bb60
        var $253=HEAP[$args_addr]; //@line 1493 "socketmodule.c"
        var $254=_PyArg_ParseTuple($253, ((__str32)&4294967295), $atype, $v1, $v2, $v3, $scope); //@line 1493 "socketmodule.c"
        var $255=((($254))|0)==0; //@line 1493 "socketmodule.c"
        if ($255) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 1493 "socketmodule.c"
      case 54: // $bb61
        HEAP[$0]=0; //@line 1496 "socketmodule.c"
        __label__ = 64; break; //@line 1496 "socketmodule.c"
      case 55: // $bb62
        var $256=HEAP[$addr_ret_addr]; //@line 1498 "socketmodule.c"
        var $257=$256; //@line 1498 "socketmodule.c"
        HEAP[$addr58]=$257; //@line 1498 "socketmodule.c"
        var $258=HEAP[$addr58]; //@line 1499 "socketmodule.c"
        var $259=$258; //@line 1499 "socketmodule.c"
        _llvm_memset_p0i8_i32($259, 0, 16, 1, 0); //@line 1499 "socketmodule.c"
        var $260=HEAP[$addr58]; //@line 1501 "socketmodule.c"
        var $261=(($260)&4294967295); //@line 1501 "socketmodule.c"
        HEAP[$261]=30; //@line 1501 "socketmodule.c"
        var $262=HEAP[$scope]; //@line 1502 "socketmodule.c"
        var $263=((($262)) & 255); //@line 1502 "socketmodule.c"
        var $264=HEAP[$addr58]; //@line 1502 "socketmodule.c"
        var $265=(($264+3)&4294967295); //@line 1502 "socketmodule.c"
        HEAP[$265]=$263; //@line 1502 "socketmodule.c"
        var $266=HEAP[$atype]; //@line 1503 "socketmodule.c"
        var $267=((($266)) & 255); //@line 1503 "socketmodule.c"
        var $268=HEAP[$addr58]; //@line 1503 "socketmodule.c"
        var $269=(($268+2)&4294967295); //@line 1503 "socketmodule.c"
        HEAP[$269]=$267; //@line 1503 "socketmodule.c"
        var $270=HEAP[$atype]; //@line 1505 "socketmodule.c"
        var $271=((($270))|0)==1; //@line 1505 "socketmodule.c"
        if ($271) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 1505 "socketmodule.c"
      case 56: // $bb63
        var $272=HEAP[$v1]; //@line 1506 "socketmodule.c"
        var $273=HEAP[$addr58]; //@line 1506 "socketmodule.c"
        var $274=(($273+4)&4294967295); //@line 1506 "socketmodule.c"
        var $275=(($274)&4294967295); //@line 1506 "socketmodule.c"
        var $276=(($275)&4294967295); //@line 1506 "socketmodule.c"
        HEAP[$276]=$272; //@line 1506 "socketmodule.c"
        var $277=HEAP[$v2]; //@line 1507 "socketmodule.c"
        var $278=HEAP[$addr58]; //@line 1507 "socketmodule.c"
        var $279=(($278+4)&4294967295); //@line 1507 "socketmodule.c"
        var $280=(($279)&4294967295); //@line 1507 "socketmodule.c"
        var $281=(($280+4)&4294967295); //@line 1507 "socketmodule.c"
        HEAP[$281]=$277; //@line 1507 "socketmodule.c"
        var $282=HEAP[$v3]; //@line 1508 "socketmodule.c"
        var $283=HEAP[$addr58]; //@line 1508 "socketmodule.c"
        var $284=(($283+4)&4294967295); //@line 1508 "socketmodule.c"
        var $285=(($284)&4294967295); //@line 1508 "socketmodule.c"
        var $286=(($285+8)&4294967295); //@line 1508 "socketmodule.c"
        HEAP[$286]=$282; //@line 1508 "socketmodule.c"
        __label__ = 62; break; //@line 1508 "socketmodule.c"
      case 57: // $bb64
        var $287=HEAP[$atype]; //@line 1509 "socketmodule.c"
        var $288=((($287))|0)==2; //@line 1509 "socketmodule.c"
        if ($288) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 1509 "socketmodule.c"
      case 58: // $bb65
        var $289=HEAP[$v1]; //@line 1510 "socketmodule.c"
        var $290=HEAP[$addr58]; //@line 1510 "socketmodule.c"
        var $291=(($290+4)&4294967295); //@line 1510 "socketmodule.c"
        var $292=(($291)&4294967295); //@line 1510 "socketmodule.c"
        var $293=$292; //@line 1510 "socketmodule.c"
        var $294=(($293)&4294967295); //@line 1510 "socketmodule.c"
        var $295=(($294)&4294967295); //@line 1510 "socketmodule.c"
        HEAP[$295]=$289; //@line 1510 "socketmodule.c"
        var $296=HEAP[$v2]; //@line 1511 "socketmodule.c"
        var $297=HEAP[$addr58]; //@line 1511 "socketmodule.c"
        var $298=(($297+4)&4294967295); //@line 1511 "socketmodule.c"
        var $299=(($298)&4294967295); //@line 1511 "socketmodule.c"
        var $300=$299; //@line 1511 "socketmodule.c"
        var $301=(($300)&4294967295); //@line 1511 "socketmodule.c"
        var $302=(($301+4)&4294967295); //@line 1511 "socketmodule.c"
        HEAP[$302]=$296; //@line 1511 "socketmodule.c"
        __label__ = 62; break; //@line 1511 "socketmodule.c"
      case 59: // $bb66
        var $303=HEAP[$atype]; //@line 1512 "socketmodule.c"
        var $304=((($303))|0)==3; //@line 1512 "socketmodule.c"
        if ($304) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 1512 "socketmodule.c"
      case 60: // $bb67
        var $305=HEAP[$v1]; //@line 1513 "socketmodule.c"
        var $306=HEAP[$addr58]; //@line 1513 "socketmodule.c"
        var $307=(($306+4)&4294967295); //@line 1513 "socketmodule.c"
        var $308=(($307)&4294967295); //@line 1513 "socketmodule.c"
        var $309=$308; //@line 1513 "socketmodule.c"
        var $310=(($309+4)&4294967295); //@line 1513 "socketmodule.c"
        HEAP[$310]=$305; //@line 1513 "socketmodule.c"
        var $311=HEAP[$v2]; //@line 1514 "socketmodule.c"
        var $312=HEAP[$addr58]; //@line 1514 "socketmodule.c"
        var $313=(($312+4)&4294967295); //@line 1514 "socketmodule.c"
        var $314=(($313)&4294967295); //@line 1514 "socketmodule.c"
        var $315=$314; //@line 1514 "socketmodule.c"
        var $316=(($315)&4294967295); //@line 1514 "socketmodule.c"
        HEAP[$316]=$311; //@line 1514 "socketmodule.c"
        __label__ = 62; break; //@line 1514 "socketmodule.c"
      case 61: // $bb68
        var $317=HEAP[_PyExc_TypeError]; //@line 1517 "socketmodule.c"
        _PyErr_SetString($317, ((__str15)&4294967295)); //@line 1517 "socketmodule.c"
        HEAP[$0]=0; //@line 1518 "socketmodule.c"
        __label__ = 64; break; //@line 1518 "socketmodule.c"
      case 62: // $bb69
        var $318=HEAP[$len_ret_addr]; //@line 1521 "socketmodule.c"
        HEAP[$318]=16; //@line 1521 "socketmodule.c"
        HEAP[$0]=1; //@line 1523 "socketmodule.c"
        __label__ = 64; break; //@line 1523 "socketmodule.c"
      case 63: // $bb70
        var $319=HEAP[_socket_error]; //@line 1530 "socketmodule.c"
        _PyErr_SetString($319, ((__str33)&4294967295)); //@line 1530 "socketmodule.c"
        HEAP[$0]=0; //@line 1531 "socketmodule.c"
        __label__ = 64; break; //@line 1531 "socketmodule.c"
      case 64: // $bb71
        var $320=HEAP[$0]; //@line 1192 "socketmodule.c"
        HEAP[$retval]=$320; //@line 1192 "socketmodule.c"
        __label__ = 65; break; //@line 1192 "socketmodule.c"
      case 65: // $return
        var $retval72=HEAP[$retval]; //@line 1192 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1192 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getsockaddrlen($s, $len_ret) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $len_ret_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$len_ret_addr]=$len_ret;
        var $1=HEAP[$s_addr]; //@line 1544 "socketmodule.c"
        var $2=(($1+12)&4294967295); //@line 1544 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1544 "socketmodule.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 3; break;
        }
        else if ($3 == 10) {
          __label__ = 4; break;
        }
        else if ($3 == 16) {
          __label__ = 2; break;
        }
        else if ($3 == 17) {
          __label__ = 5; break;
        }
        else if ($3 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $4=HEAP[$len_ret_addr]; //@line 1549 "socketmodule.c"
        HEAP[$4]=110; //@line 1549 "socketmodule.c"
        HEAP[$0]=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$len_ret_addr]; //@line 1556 "socketmodule.c"
        HEAP[$5]=12; //@line 1556 "socketmodule.c"
        HEAP[$0]=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[$len_ret_addr]; //@line 1563 "socketmodule.c"
        HEAP[$6]=16; //@line 1563 "socketmodule.c"
        HEAP[$0]=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$len_ret_addr]; //@line 1570 "socketmodule.c"
        HEAP[$7]=28; //@line 1570 "socketmodule.c"
        HEAP[$0]=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4
        var $8=HEAP[$len_ret_addr]; //@line 1607 "socketmodule.c"
        HEAP[$8]=20; //@line 1607 "socketmodule.c"
        HEAP[$0]=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5
        var $9=HEAP[$len_ret_addr]; //@line 1615 "socketmodule.c"
        HEAP[$9]=16; //@line 1615 "socketmodule.c"
        HEAP[$0]=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb6
        var $10=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($10, ((__str34)&4294967295)); //@line 1623 "socketmodule.c"
        HEAP[$0]=0; //@line 1624 "socketmodule.c"
        __label__ = 8; break; //@line 1624 "socketmodule.c"
      case 8: // $bb7
        var $11=HEAP[$0]; //@line 1550 "socketmodule.c"
        HEAP[$retval]=$11; //@line 1550 "socketmodule.c"
        __label__ = 9; break; //@line 1550 "socketmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1550 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1550 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_accept($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 168; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 168);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $1=__stackBase__+12;
        var $addrbuf=__stackBase__+16;
        var $newfd=__stackBase__+144;
        var $addrlen=__stackBase__+148;
        var $sock=__stackBase__+152;
        var $addr=__stackBase__+156;
        var $res=__stackBase__+160;
        var $timeout=__stackBase__+164;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$sock]=0; //@line 1638 "socketmodule.c"
        HEAP[$addr]=0; //@line 1639 "socketmodule.c"
        HEAP[$res]=0; //@line 1640 "socketmodule.c"
        var $2=HEAP[$s_addr]; //@line 1643 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 1643 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 1643 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1643 "socketmodule.c"
      case 1: // $bb
        HEAP[$1]=0; //@line 1644 "socketmodule.c"
        __label__ = 19; break; //@line 1644 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 1645 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 1645 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 1645 "socketmodule.c"
        HEAP[$newfd]=-1; //@line 1650 "socketmodule.c"
        var $6=HEAP[$s_addr]; //@line 1657 "socketmodule.c"
        var $7=_internal_select($6, 0); //@line 1657 "socketmodule.c"
        HEAP[$timeout]=$7; //@line 1657 "socketmodule.c"
        var $8=HEAP[$timeout]; //@line 1658 "socketmodule.c"
        var $9=((($8))|0)==0; //@line 1658 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1658 "socketmodule.c"
      case 3: // $bb3
        var $addrbuf4=$addrbuf; //@line 1659 "socketmodule.c"
        var $10=(($0)&4294967295); //@line 1659 "socketmodule.c"
        HEAP[$10]=$addrbuf4; //@line 1659 "socketmodule.c"
        var $11=HEAP[$s_addr]; //@line 1659 "socketmodule.c"
        var $12=(($11+8)&4294967295); //@line 1659 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1659 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 1659 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1659 "socketmodule.c"
        var $14=_accept($13, $val, $addrlen); //@line 1659 "socketmodule.c"
        HEAP[$newfd]=$14; //@line 1659 "socketmodule.c"
        __label__ = 4; break; //@line 1659 "socketmodule.c"
      case 4: // $bb6
        var $15=HEAP[$timeout]; //@line 1662 "socketmodule.c"
        var $16=((($15))|0)==1; //@line 1662 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1662 "socketmodule.c"
      case 5: // $bb7
        var $17=HEAP[_socket_timeout]; //@line 1663 "socketmodule.c"
        _PyErr_SetString($17, ((__str35)&4294967295)); //@line 1663 "socketmodule.c"
        HEAP[$1]=0; //@line 1664 "socketmodule.c"
        __label__ = 19; break; //@line 1664 "socketmodule.c"
      case 6: // $bb8
        var $18=HEAP[$newfd]; //@line 1670 "socketmodule.c"
        var $19=((($18))|0) < 0; //@line 1670 "socketmodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1670 "socketmodule.c"
      case 7: // $bb9
        var $20=HEAP[$s_addr]; //@line 1672 "socketmodule.c"
        var $21=(($20+24)&4294967295); //@line 1672 "socketmodule.c"
        var $22=HEAP[$21]; //@line 1672 "socketmodule.c"
        var $23=FUNCTION_TABLE[$22](); //@line 1672 "socketmodule.c"
        HEAP[$1]=$23; //@line 1672 "socketmodule.c"
        __label__ = 19; break; //@line 1672 "socketmodule.c"
      case 8: // $bb10
        var $24=HEAP[$s_addr]; //@line 1676 "socketmodule.c"
        var $25=(($24+20)&4294967295); //@line 1676 "socketmodule.c"
        var $26=HEAP[$25]; //@line 1676 "socketmodule.c"
        var $27=HEAP[$s_addr]; //@line 1676 "socketmodule.c"
        var $28=(($27+16)&4294967295); //@line 1676 "socketmodule.c"
        var $29=HEAP[$28]; //@line 1676 "socketmodule.c"
        var $30=HEAP[$s_addr]; //@line 1676 "socketmodule.c"
        var $31=(($30+12)&4294967295); //@line 1676 "socketmodule.c"
        var $32=HEAP[$31]; //@line 1676 "socketmodule.c"
        var $33=HEAP[$newfd]; //@line 1676 "socketmodule.c"
        var $34=_new_sockobject($33, $32, $29, $26); //@line 1676 "socketmodule.c"
        var $35=$34; //@line 1676 "socketmodule.c"
        HEAP[$sock]=$35; //@line 1676 "socketmodule.c"
        var $36=HEAP[$sock]; //@line 1681 "socketmodule.c"
        var $37=($36)==0; //@line 1681 "socketmodule.c"
        if ($37) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1681 "socketmodule.c"
      case 9: // $bb11
        var $38=HEAP[$newfd]; //@line 1682 "socketmodule.c"
        var $39=_close($38); //@line 1682 "socketmodule.c"
        __label__ = 12; break; //@line 1682 "socketmodule.c"
      case 10: // $bb12
        var $40=HEAP[$s_addr]; //@line 1685 "socketmodule.c"
        var $41=(($40+20)&4294967295); //@line 1685 "socketmodule.c"
        var $42=HEAP[$41]; //@line 1685 "socketmodule.c"
        var $43=HEAP[$addrlen]; //@line 1685 "socketmodule.c"
        var $addrbuf13=$addrbuf; //@line 1685 "socketmodule.c"
        var $44=HEAP[$s_addr]; //@line 1685 "socketmodule.c"
        var $45=(($44+8)&4294967295); //@line 1685 "socketmodule.c"
        var $46=HEAP[$45]; //@line 1685 "socketmodule.c"
        var $47=_makesockaddr($46, $addrbuf13, $43, $42); //@line 1685 "socketmodule.c"
        HEAP[$addr]=$47; //@line 1685 "socketmodule.c"
        var $48=HEAP[$addr]; //@line 1687 "socketmodule.c"
        var $49=($48)==0; //@line 1687 "socketmodule.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1687 "socketmodule.c"
      case 11: // $bb15
        var $50=HEAP[$sock]; //@line 1690 "socketmodule.c"
        var $51=HEAP[$addr]; //@line 1690 "socketmodule.c"
        var $52=_PyTuple_Pack(2, $50, $51); //@line 1690 "socketmodule.c"
        HEAP[$res]=$52; //@line 1690 "socketmodule.c"
        __label__ = 12; break; //@line 1692 "socketmodule.c"
      case 12: // $finally
        var $53=HEAP[$sock]; //@line 1693 "socketmodule.c"
        var $54=($53)!=0; //@line 1693 "socketmodule.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1693 "socketmodule.c"
      case 13: // $bb16
        var $55=HEAP[$sock]; //@line 1693 "socketmodule.c"
        var $56=(($55)&4294967295); //@line 1693 "socketmodule.c"
        var $57=HEAP[$56]; //@line 1693 "socketmodule.c"
        var $58=((($57) - 1)&4294967295); //@line 1693 "socketmodule.c"
        var $59=HEAP[$sock]; //@line 1693 "socketmodule.c"
        var $60=(($59)&4294967295); //@line 1693 "socketmodule.c"
        HEAP[$60]=$58; //@line 1693 "socketmodule.c"
        var $61=HEAP[$sock]; //@line 1693 "socketmodule.c"
        var $62=(($61)&4294967295); //@line 1693 "socketmodule.c"
        var $63=HEAP[$62]; //@line 1693 "socketmodule.c"
        var $64=((($63))|0)==0; //@line 1693 "socketmodule.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1693 "socketmodule.c"
      case 14: // $bb17
        var $65=HEAP[$sock]; //@line 1693 "socketmodule.c"
        var $66=(($65+4)&4294967295); //@line 1693 "socketmodule.c"
        var $67=HEAP[$66]; //@line 1693 "socketmodule.c"
        var $68=(($67+24)&4294967295); //@line 1693 "socketmodule.c"
        var $69=HEAP[$68]; //@line 1693 "socketmodule.c"
        var $70=HEAP[$sock]; //@line 1693 "socketmodule.c"
        FUNCTION_TABLE[$69]($70); //@line 1693 "socketmodule.c"
        __label__ = 15; break; //@line 1693 "socketmodule.c"
      case 15: // $bb18
        var $71=HEAP[$addr]; //@line 1694 "socketmodule.c"
        var $72=($71)!=0; //@line 1694 "socketmodule.c"
        if ($72) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1694 "socketmodule.c"
      case 16: // $bb19
        var $73=HEAP[$addr]; //@line 1694 "socketmodule.c"
        var $74=(($73)&4294967295); //@line 1694 "socketmodule.c"
        var $75=HEAP[$74]; //@line 1694 "socketmodule.c"
        var $76=((($75) - 1)&4294967295); //@line 1694 "socketmodule.c"
        var $77=HEAP[$addr]; //@line 1694 "socketmodule.c"
        var $78=(($77)&4294967295); //@line 1694 "socketmodule.c"
        HEAP[$78]=$76; //@line 1694 "socketmodule.c"
        var $79=HEAP[$addr]; //@line 1694 "socketmodule.c"
        var $80=(($79)&4294967295); //@line 1694 "socketmodule.c"
        var $81=HEAP[$80]; //@line 1694 "socketmodule.c"
        var $82=((($81))|0)==0; //@line 1694 "socketmodule.c"
        if ($82) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1694 "socketmodule.c"
      case 17: // $bb20
        var $83=HEAP[$addr]; //@line 1694 "socketmodule.c"
        var $84=(($83+4)&4294967295); //@line 1694 "socketmodule.c"
        var $85=HEAP[$84]; //@line 1694 "socketmodule.c"
        var $86=(($85+24)&4294967295); //@line 1694 "socketmodule.c"
        var $87=HEAP[$86]; //@line 1694 "socketmodule.c"
        var $88=HEAP[$addr]; //@line 1694 "socketmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 1694 "socketmodule.c"
        __label__ = 18; break; //@line 1694 "socketmodule.c"
      case 18: // $bb21
        var $89=HEAP[$res]; //@line 1695 "socketmodule.c"
        HEAP[$1]=$89; //@line 1695 "socketmodule.c"
        __label__ = 19; break; //@line 1695 "socketmodule.c"
      case 19: // $bb22
        var $90=HEAP[$1]; //@line 1644 "socketmodule.c"
        HEAP[$retval]=$90; //@line 1644 "socketmodule.c"
        __label__ = 20; break; //@line 1644 "socketmodule.c"
      case 20: // $return
        var $retval23=HEAP[$retval]; //@line 1644 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 1644 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setblocking($s, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_114=__stackBase__+12;
        var $0=__stackBase__+20;
        var $block=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1715 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 1715 "socketmodule.c"
        HEAP[$block]=$2; //@line 1715 "socketmodule.c"
        var $3=HEAP[$block]; //@line 1716 "socketmodule.c"
        var $4=((($3))|0)==-1; //@line 1716 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1716 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1716 "socketmodule.c"
        var $6=($5)!=0; //@line 1716 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1716 "socketmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 1717 "socketmodule.c"
        __label__ = 7; break; //@line 1717 "socketmodule.c"
      case 3: // $bb2
        var $7=HEAP[$block]; //@line 1719 "socketmodule.c"
        var $8=((($7))|0)!=0; //@line 1719 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1719 "socketmodule.c"
      case 4: // $bb3
        HEAP[$iftmp_114]=-1; //@line 1719 "socketmodule.c"
        __label__ = 6; break; //@line 1719 "socketmodule.c"
      case 5: // $bb4
        HEAP[$iftmp_114]=0; //@line 1719 "socketmodule.c"
        __label__ = 6; break; //@line 1719 "socketmodule.c"
      case 6: // $bb5
        var $9=HEAP[$s_addr]; //@line 1719 "socketmodule.c"
        var $10=(($9+28)&4294967295); //@line 1719 "socketmodule.c"
        var $11=HEAP[$iftmp_114]; //@line 1719 "socketmodule.c"
        HEAP[$10]=$11; //@line 1719 "socketmodule.c"
        var $12=HEAP[$s_addr]; //@line 1720 "socketmodule.c"
        var $13=HEAP[$block]; //@line 1720 "socketmodule.c"
        var $14=_internal_setblocking($12, $13); //@line 1720 "socketmodule.c"
        var $15=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1722 "socketmodule.c"
        var $16=((($15) + 1)&4294967295); //@line 1722 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$16; //@line 1722 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1723 "socketmodule.c"
        __label__ = 7; break; //@line 1723 "socketmodule.c"
      case 7: // $bb6
        var $17=HEAP[$0]; //@line 1717 "socketmodule.c"
        HEAP[$retval]=$17; //@line 1717 "socketmodule.c"
        __label__ = 8; break; //@line 1717 "socketmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1717 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1717 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_settimeout($s, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $timeout=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 1744 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1744 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1744 "socketmodule.c"
      case 1: // $bb
        HEAP[$timeout]=-1; //@line 1745 "socketmodule.c"
        __label__ = 6; break; //@line 1745 "socketmodule.c"
      case 2: // $bb1
        var $3=HEAP[$arg_addr]; //@line 1747 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 1747 "socketmodule.c"
        HEAP[$timeout]=$4; //@line 1747 "socketmodule.c"
        var $5=HEAP[$timeout]; //@line 1748 "socketmodule.c"
        var $6=($5) < 0; //@line 1748 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1748 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 1749 "socketmodule.c"
        var $8=($7)==0; //@line 1749 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1749 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 1750 "socketmodule.c"
        _PyErr_SetString($9, ((__str36)&4294967295)); //@line 1750 "socketmodule.c"
        __label__ = 5; break; //@line 1750 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1752 "socketmodule.c"
        __label__ = 7; break; //@line 1752 "socketmodule.c"
      case 6: // $bb5
        var $10=HEAP[$s_addr]; //@line 1756 "socketmodule.c"
        var $11=(($10+28)&4294967295); //@line 1756 "socketmodule.c"
        var $12=HEAP[$timeout]; //@line 1756 "socketmodule.c"
        HEAP[$11]=$12; //@line 1756 "socketmodule.c"
        var $13=HEAP[$timeout]; //@line 1757 "socketmodule.c"
        var $14=($13) < 0; //@line 1757 "socketmodule.c"
        var $15=unSign(($14), 1, 0); //@line 1757 "socketmodule.c"
        var $16=HEAP[$s_addr]; //@line 1757 "socketmodule.c"
        var $17=_internal_setblocking($16, $15); //@line 1757 "socketmodule.c"
        var $18=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1759 "socketmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 1759 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$19; //@line 1759 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1760 "socketmodule.c"
        __label__ = 7; break; //@line 1760 "socketmodule.c"
      case 7: // $bb6
        var $20=HEAP[$0]; //@line 1752 "socketmodule.c"
        HEAP[$retval]=$20; //@line 1752 "socketmodule.c"
        __label__ = 8; break; //@line 1752 "socketmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1752 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1752 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_gettimeout($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 1776 "socketmodule.c"
        var $2=(($1+28)&4294967295); //@line 1776 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1776 "socketmodule.c"
        var $4=($3) < 0; //@line 1776 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1776 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1777 "socketmodule.c"
        var $6=((($5) + 1)&4294967295); //@line 1777 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$6; //@line 1777 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1778 "socketmodule.c"
        __label__ = 3; break; //@line 1778 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$s_addr]; //@line 1781 "socketmodule.c"
        var $8=(($7+28)&4294967295); //@line 1781 "socketmodule.c"
        var $9=HEAP[$8]; //@line 1781 "socketmodule.c"
        var $10=_PyFloat_FromDouble($9); //@line 1781 "socketmodule.c"
        HEAP[$0]=$10; //@line 1781 "socketmodule.c"
        __label__ = 3; break; //@line 1781 "socketmodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 1778 "socketmodule.c"
        HEAP[$retval]=$11; //@line 1778 "socketmodule.c"
        __label__ = 4; break; //@line 1778 "socketmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1778 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1778 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $level=__stackBase__+16;
        var $optname=__stackBase__+20;
        var $res=__stackBase__+24;
        var $buf=__stackBase__+28;
        var $buflen=__stackBase__+32;
        var $flag=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1830 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str37)&4294967295), $level, $optname, $flag); //@line 1830 "socketmodule.c"
        var $3=((($2))|0)!=0; //@line 1830 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1830 "socketmodule.c"
      case 1: // $bb
        var $flag1=$flag; //@line 1832 "socketmodule.c"
        HEAP[$buf]=$flag1; //@line 1832 "socketmodule.c"
        HEAP[$buflen]=4; //@line 1833 "socketmodule.c"
        __label__ = 4; break; //@line 1833 "socketmodule.c"
      case 2: // $bb3
        _PyErr_Clear(); //@line 1836 "socketmodule.c"
        var $4=HEAP[$args_addr]; //@line 1837 "socketmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str38)&4294967295), $level, $optname, $buf, $buflen); //@line 1837 "socketmodule.c"
        var $6=((($5))|0)==0; //@line 1837 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1837 "socketmodule.c"
      case 3: // $bb4
        HEAP[$0]=0; //@line 1839 "socketmodule.c"
        __label__ = 7; break; //@line 1839 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$buflen]; //@line 1841 "socketmodule.c"
        var $8=HEAP[$buf]; //@line 1841 "socketmodule.c"
        var $9=HEAP[$optname]; //@line 1841 "socketmodule.c"
        var $10=HEAP[$level]; //@line 1841 "socketmodule.c"
        var $11=HEAP[$s_addr]; //@line 1841 "socketmodule.c"
        var $12=(($11+8)&4294967295); //@line 1841 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1841 "socketmodule.c"
        var $14=_setsockopt($13, $10, $9, $8, $7); //@line 1841 "socketmodule.c"
        HEAP[$res]=$14; //@line 1841 "socketmodule.c"
        var $15=HEAP[$res]; //@line 1842 "socketmodule.c"
        var $16=((($15))|0) < 0; //@line 1842 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1842 "socketmodule.c"
      case 5: // $bb6
        var $17=HEAP[$s_addr]; //@line 1843 "socketmodule.c"
        var $18=(($17+24)&4294967295); //@line 1843 "socketmodule.c"
        var $19=HEAP[$18]; //@line 1843 "socketmodule.c"
        var $20=FUNCTION_TABLE[$19](); //@line 1843 "socketmodule.c"
        HEAP[$0]=$20; //@line 1843 "socketmodule.c"
        __label__ = 7; break; //@line 1843 "socketmodule.c"
      case 6: // $bb7
        var $21=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1844 "socketmodule.c"
        var $22=((($21) + 1)&4294967295); //@line 1844 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$22; //@line 1844 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1845 "socketmodule.c"
        __label__ = 7; break; //@line 1845 "socketmodule.c"
      case 7: // $bb8
        var $23=HEAP[$0]; //@line 1839 "socketmodule.c"
        HEAP[$retval]=$23; //@line 1839 "socketmodule.c"
        __label__ = 8; break; //@line 1839 "socketmodule.c"
      case 8: // $return
        var $retval9=HEAP[$retval]; //@line 1839 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1839 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $level=__stackBase__+16;
        var $optname=__stackBase__+20;
        var $res=__stackBase__+24;
        var $buf=__stackBase__+28;
        var $buflen=__stackBase__+32;
        var $flag=__stackBase__+36;
        var $flagsize=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$buflen]=0; //@line 1867 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 1875 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str39)&4294967295), $level, $optname, $buflen); //@line 1875 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 1875 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1875 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1877 "socketmodule.c"
        __label__ = 16; break; //@line 1877 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$buflen]; //@line 1879 "socketmodule.c"
        var $5=((($4))|0)==0; //@line 1879 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1879 "socketmodule.c"
      case 3: // $bb2
        HEAP[$flag]=0; //@line 1880 "socketmodule.c"
        HEAP[$flagsize]=4; //@line 1881 "socketmodule.c"
        var $6=HEAP[$optname]; //@line 1882 "socketmodule.c"
        var $7=HEAP[$level]; //@line 1882 "socketmodule.c"
        var $8=HEAP[$s_addr]; //@line 1882 "socketmodule.c"
        var $9=(($8+8)&4294967295); //@line 1882 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1882 "socketmodule.c"
        var $flag3=$flag; //@line 1882 "socketmodule.c"
        var $11=_getsockopt($10, $7, $6, $flag3, $flagsize); //@line 1882 "socketmodule.c"
        HEAP[$res]=$11; //@line 1882 "socketmodule.c"
        var $12=HEAP[$res]; //@line 1884 "socketmodule.c"
        var $13=((($12))|0) < 0; //@line 1884 "socketmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1884 "socketmodule.c"
      case 4: // $bb4
        var $14=HEAP[$s_addr]; //@line 1885 "socketmodule.c"
        var $15=(($14+24)&4294967295); //@line 1885 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1885 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1885 "socketmodule.c"
        HEAP[$0]=$17; //@line 1885 "socketmodule.c"
        __label__ = 16; break; //@line 1885 "socketmodule.c"
      case 5: // $bb5
        var $18=HEAP[$flag]; //@line 1886 "socketmodule.c"
        var $19=_PyInt_FromLong($18); //@line 1886 "socketmodule.c"
        HEAP[$0]=$19; //@line 1886 "socketmodule.c"
        __label__ = 16; break; //@line 1886 "socketmodule.c"
      case 6: // $bb6
        var $20=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $21=((($20))|0)==0; //@line 1893 "socketmodule.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1893 "socketmodule.c"
      case 7: // $bb7
        var $22=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $23=((($22))>>>0) > 1024; //@line 1893 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1893 "socketmodule.c"
      case 8: // $bb8
        var $24=HEAP[_socket_error]; //@line 1895 "socketmodule.c"
        _PyErr_SetString($24, ((__str40)&4294967295)); //@line 1895 "socketmodule.c"
        HEAP[$0]=0; //@line 1897 "socketmodule.c"
        __label__ = 16; break; //@line 1897 "socketmodule.c"
      case 9: // $bb9
        var $25=HEAP[$buflen]; //@line 1899 "socketmodule.c"
        var $26=_PyString_FromStringAndSize(0, $25); //@line 1899 "socketmodule.c"
        HEAP[$buf]=$26; //@line 1899 "socketmodule.c"
        var $27=HEAP[$buf]; //@line 1900 "socketmodule.c"
        var $28=($27)==0; //@line 1900 "socketmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1900 "socketmodule.c"
      case 10: // $bb10
        HEAP[$0]=0; //@line 1901 "socketmodule.c"
        __label__ = 16; break; //@line 1901 "socketmodule.c"
      case 11: // $bb11
        var $29=HEAP[$buf]; //@line 1902 "socketmodule.c"
        var $30=$29; //@line 1902 "socketmodule.c"
        var $31=(($30+20)&4294967295); //@line 1902 "socketmodule.c"
        var $32=(($31)&4294967295); //@line 1902 "socketmodule.c"
        var $33=HEAP[$optname]; //@line 1902 "socketmodule.c"
        var $34=HEAP[$level]; //@line 1902 "socketmodule.c"
        var $35=HEAP[$s_addr]; //@line 1902 "socketmodule.c"
        var $36=(($35+8)&4294967295); //@line 1902 "socketmodule.c"
        var $37=HEAP[$36]; //@line 1902 "socketmodule.c"
        var $38=_getsockopt($37, $34, $33, $32, $buflen); //@line 1902 "socketmodule.c"
        HEAP[$res]=$38; //@line 1902 "socketmodule.c"
        var $39=HEAP[$res]; //@line 1904 "socketmodule.c"
        var $40=((($39))|0) < 0; //@line 1904 "socketmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1904 "socketmodule.c"
      case 12: // $bb12
        var $41=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $42=(($41)&4294967295); //@line 1905 "socketmodule.c"
        var $43=HEAP[$42]; //@line 1905 "socketmodule.c"
        var $44=((($43) - 1)&4294967295); //@line 1905 "socketmodule.c"
        var $45=(($41)&4294967295); //@line 1905 "socketmodule.c"
        HEAP[$45]=$44; //@line 1905 "socketmodule.c"
        var $46=(($41)&4294967295); //@line 1905 "socketmodule.c"
        var $47=HEAP[$46]; //@line 1905 "socketmodule.c"
        var $48=((($47))|0)==0; //@line 1905 "socketmodule.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1905 "socketmodule.c"
      case 13: // $bb13
        var $49=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $50=(($49+4)&4294967295); //@line 1905 "socketmodule.c"
        var $51=HEAP[$50]; //@line 1905 "socketmodule.c"
        var $52=(($51+24)&4294967295); //@line 1905 "socketmodule.c"
        var $53=HEAP[$52]; //@line 1905 "socketmodule.c"
        var $54=HEAP[$buf]; //@line 1905 "socketmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 1905 "socketmodule.c"
        __label__ = 14; break; //@line 1905 "socketmodule.c"
      case 14: // $bb14
        var $55=HEAP[$s_addr]; //@line 1906 "socketmodule.c"
        var $56=(($55+24)&4294967295); //@line 1906 "socketmodule.c"
        var $57=HEAP[$56]; //@line 1906 "socketmodule.c"
        var $58=FUNCTION_TABLE[$57](); //@line 1906 "socketmodule.c"
        HEAP[$0]=$58; //@line 1906 "socketmodule.c"
        __label__ = 16; break; //@line 1906 "socketmodule.c"
      case 15: // $bb15
        var $59=HEAP[$buflen]; //@line 1908 "socketmodule.c"
        var $60=__PyString_Resize($buf, $59); //@line 1908 "socketmodule.c"
        var $61=HEAP[$buf]; //@line 1909 "socketmodule.c"
        HEAP[$0]=$61; //@line 1909 "socketmodule.c"
        __label__ = 16; break; //@line 1909 "socketmodule.c"
      case 16: // $bb16
        var $62=HEAP[$0]; //@line 1877 "socketmodule.c"
        HEAP[$retval]=$62; //@line 1877 "socketmodule.c"
        __label__ = 17; break; //@line 1877 "socketmodule.c"
      case 17: // $return
        var $retval17=HEAP[$retval]; //@line 1877 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1877 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_bind($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 156; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $addro_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $1=__stackBase__+16;
        var $addrbuf=__stackBase__+20;
        var $addrlen=__stackBase__+148;
        var $res=__stackBase__+152;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$addro_addr]=$addro;
        var $addrbuf1=$addrbuf; //@line 1930 "socketmodule.c"
        var $2=HEAP[$s_addr]; //@line 1930 "socketmodule.c"
        var $3=HEAP[$addro_addr]; //@line 1930 "socketmodule.c"
        var $4=_getsockaddrarg($2, $3, $addrbuf1, $addrlen); //@line 1930 "socketmodule.c"
        var $5=((($4))|0)==0; //@line 1930 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1930 "socketmodule.c"
      case 1: // $bb
        HEAP[$1]=0; //@line 1931 "socketmodule.c"
        __label__ = 5; break; //@line 1931 "socketmodule.c"
      case 2: // $bb3
        var $6=HEAP[$addrlen]; //@line 1933 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 1933 "socketmodule.c"
        var $7=(($0)&4294967295); //@line 1933 "socketmodule.c"
        HEAP[$7]=$addrbuf4; //@line 1933 "socketmodule.c"
        var $8=HEAP[$s_addr]; //@line 1933 "socketmodule.c"
        var $9=(($8+8)&4294967295); //@line 1933 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1933 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 1933 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1933 "socketmodule.c"
        var $11=_bind($10, $val, $6); //@line 1933 "socketmodule.c"
        HEAP[$res]=$11; //@line 1933 "socketmodule.c"
        var $12=HEAP[$res]; //@line 1935 "socketmodule.c"
        var $13=((($12))|0) < 0; //@line 1935 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1935 "socketmodule.c"
      case 3: // $bb6
        var $14=HEAP[$s_addr]; //@line 1936 "socketmodule.c"
        var $15=(($14+24)&4294967295); //@line 1936 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1936 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1936 "socketmodule.c"
        HEAP[$1]=$17; //@line 1936 "socketmodule.c"
        __label__ = 5; break; //@line 1936 "socketmodule.c"
      case 4: // $bb7
        var $18=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1937 "socketmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 1937 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$19; //@line 1937 "socketmodule.c"
        HEAP[$1]=__Py_NoneStruct; //@line 1938 "socketmodule.c"
        __label__ = 5; break; //@line 1938 "socketmodule.c"
      case 5: // $bb8
        var $20=HEAP[$1]; //@line 1931 "socketmodule.c"
        HEAP[$retval]=$20; //@line 1931 "socketmodule.c"
        __label__ = 6; break; //@line 1931 "socketmodule.c"
      case 6: // $return
        var $retval9=HEAP[$retval]; //@line 1931 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1931 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_close($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $fd=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 1958 "socketmodule.c"
        var $2=(($1+8)&4294967295); //@line 1958 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1958 "socketmodule.c"
        HEAP[$fd]=$3; //@line 1958 "socketmodule.c"
        var $4=HEAP[$fd]; //@line 1958 "socketmodule.c"
        var $5=((($4))|0)!=-1; //@line 1958 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1958 "socketmodule.c"
      case 1: // $bb
        var $6=HEAP[$s_addr]; //@line 1959 "socketmodule.c"
        var $7=(($6+8)&4294967295); //@line 1959 "socketmodule.c"
        HEAP[$7]=-1; //@line 1959 "socketmodule.c"
        var $8=HEAP[$fd]; //@line 1961 "socketmodule.c"
        var $9=_close($8); //@line 1961 "socketmodule.c"
        __label__ = 2; break; //@line 1961 "socketmodule.c"
      case 2: // $bb1
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1964 "socketmodule.c"
        var $11=((($10) + 1)&4294967295); //@line 1964 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 1964 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1965 "socketmodule.c"
        var $12=HEAP[$0]; //@line 1965 "socketmodule.c"
        HEAP[$retval]=$12; //@line 1965 "socketmodule.c"
        __label__ = 3; break; //@line 1965 "socketmodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 1965 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 1965 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_connect($s, $addr, $addrlen, $timeoutp) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $addr_addr=__stackBase__+4;
        var $addrlen_addr=__stackBase__+8;
        var $timeoutp_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $1=__stackBase__+24;
        var $res=__stackBase__+28;
        var $timeout=__stackBase__+32;
        var $res_size=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$addr_addr]=$addr;
        HEAP[$addrlen_addr]=$addrlen;
        HEAP[$timeoutp_addr]=$timeoutp;
        HEAP[$timeout]=0; //@line 1979 "socketmodule.c"
        var $2=HEAP[$addrlen_addr]; //@line 1980 "socketmodule.c"
        var $3=(($1)&4294967295); //@line 1980 "socketmodule.c"
        var $4=HEAP[$addr_addr]; //@line 1980 "socketmodule.c"
        HEAP[$3]=$4; //@line 1980 "socketmodule.c"
        var $5=HEAP[$s_addr]; //@line 1980 "socketmodule.c"
        var $6=(($5+8)&4294967295); //@line 1980 "socketmodule.c"
        var $7=HEAP[$6]; //@line 1980 "socketmodule.c"
        var $elt=(($1)&4294967295); //@line 1980 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1980 "socketmodule.c"
        var $8=_connect($7, $val, $2); //@line 1980 "socketmodule.c"
        HEAP[$res]=$8; //@line 1980 "socketmodule.c"
        var $9=HEAP[$s_addr]; //@line 2030 "socketmodule.c"
        var $10=(($9+28)&4294967295); //@line 2030 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2030 "socketmodule.c"
        var $12=($11) > 0; //@line 2030 "socketmodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 2030 "socketmodule.c"
      case 1: // $bb
        var $13=HEAP[$res]; //@line 2031 "socketmodule.c"
        var $14=((($13))|0) < 0; //@line 2031 "socketmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 10; break; } //@line 2031 "socketmodule.c"
      case 2: // $bb1
        var $15=___errno_location(); //@line 2031 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2031 "socketmodule.c"
        var $17=((($16))|0)==115; //@line 2031 "socketmodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2031 "socketmodule.c"
      case 3: // $bb2
        var $18=HEAP[$s_addr]; //@line 2032 "socketmodule.c"
        var $19=_internal_select($18, 1); //@line 2032 "socketmodule.c"
        HEAP[$timeout]=$19; //@line 2032 "socketmodule.c"
        var $20=HEAP[$timeout]; //@line 2033 "socketmodule.c"
        var $21=((($20))|0)==0; //@line 2033 "socketmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2033 "socketmodule.c"
      case 4: // $bb3
        HEAP[$res_size]=4; //@line 2037 "socketmodule.c"
        var $22=HEAP[$s_addr]; //@line 2038 "socketmodule.c"
        var $23=(($22+8)&4294967295); //@line 2038 "socketmodule.c"
        var $24=HEAP[$23]; //@line 2038 "socketmodule.c"
        var $res4=$res; //@line 2038 "socketmodule.c"
        var $25=_getsockopt($24, 1, 4, $res4, $res_size); //@line 2038 "socketmodule.c"
        var $26=HEAP[$res]; //@line 2040 "socketmodule.c"
        var $27=((($26))|0)==106; //@line 2040 "socketmodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2040 "socketmodule.c"
      case 5: // $bb5
        HEAP[$res]=0; //@line 2041 "socketmodule.c"
        __label__ = 6; break; //@line 2041 "socketmodule.c"
      case 6: // $bb6
        var $28=___errno_location(); //@line 2042 "socketmodule.c"
        var $29=HEAP[$res]; //@line 2042 "socketmodule.c"
        HEAP[$28]=$29; //@line 2042 "socketmodule.c"
        __label__ = 10; break; //@line 2042 "socketmodule.c"
      case 7: // $bb7
        var $30=HEAP[$timeout]; //@line 2044 "socketmodule.c"
        var $31=((($30))|0)==-1; //@line 2044 "socketmodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2044 "socketmodule.c"
      case 8: // $bb8
        var $32=___errno_location(); //@line 2045 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2045 "socketmodule.c"
        HEAP[$res]=$33; //@line 2045 "socketmodule.c"
        __label__ = 10; break; //@line 2045 "socketmodule.c"
      case 9: // $bb9
        HEAP[$res]=11; //@line 2048 "socketmodule.c"
        __label__ = 10; break; //@line 2048 "socketmodule.c"
      case 10: // $bb10
        var $34=HEAP[$res]; //@line 2052 "socketmodule.c"
        var $35=((($34))|0) < 0; //@line 2052 "socketmodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2052 "socketmodule.c"
      case 11: // $bb11
        var $36=___errno_location(); //@line 2053 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2053 "socketmodule.c"
        HEAP[$res]=$37; //@line 2053 "socketmodule.c"
        __label__ = 12; break; //@line 2053 "socketmodule.c"
      case 12: // $bb12
        var $38=HEAP[$timeoutp_addr]; //@line 2056 "socketmodule.c"
        var $39=HEAP[$timeout]; //@line 2056 "socketmodule.c"
        HEAP[$38]=$39; //@line 2056 "socketmodule.c"
        var $40=HEAP[$res]; //@line 2058 "socketmodule.c"
        HEAP[$0]=$40; //@line 2058 "socketmodule.c"
        var $41=HEAP[$0]; //@line 2058 "socketmodule.c"
        HEAP[$retval]=$41; //@line 2058 "socketmodule.c"
        __label__ = 13; break; //@line 2058 "socketmodule.c"
      case 13: // $return
        var $retval13=HEAP[$retval]; //@line 2058 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2058 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 156; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $addro_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $addrbuf=__stackBase__+16;
        var $addrlen=__stackBase__+144;
        var $res=__stackBase__+148;
        var $timeout=__stackBase__+152;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$addro_addr]=$addro;
        var $addrbuf1=$addrbuf; //@line 2071 "socketmodule.c"
        var $1=HEAP[$s_addr]; //@line 2071 "socketmodule.c"
        var $2=HEAP[$addro_addr]; //@line 2071 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2071 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2071 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2071 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2072 "socketmodule.c"
        __label__ = 7; break; //@line 2072 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2075 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2075 "socketmodule.c"
        var $6=HEAP[$s_addr]; //@line 2075 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2075 "socketmodule.c"
        HEAP[$res]=$7; //@line 2075 "socketmodule.c"
        var $8=HEAP[$timeout]; //@line 2078 "socketmodule.c"
        var $9=((($8))|0)==1; //@line 2078 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2078 "socketmodule.c"
      case 3: // $bb6
        var $10=HEAP[_socket_timeout]; //@line 2079 "socketmodule.c"
        _PyErr_SetString($10, ((__str35)&4294967295)); //@line 2079 "socketmodule.c"
        HEAP[$0]=0; //@line 2080 "socketmodule.c"
        __label__ = 7; break; //@line 2080 "socketmodule.c"
      case 4: // $bb7
        var $11=HEAP[$res]; //@line 2082 "socketmodule.c"
        var $12=((($11))|0)!=0; //@line 2082 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2082 "socketmodule.c"
      case 5: // $bb8
        var $13=HEAP[$s_addr]; //@line 2083 "socketmodule.c"
        var $14=(($13+24)&4294967295); //@line 2083 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2083 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2083 "socketmodule.c"
        HEAP[$0]=$16; //@line 2083 "socketmodule.c"
        __label__ = 7; break; //@line 2083 "socketmodule.c"
      case 6: // $bb9
        var $17=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2084 "socketmodule.c"
        var $18=((($17) + 1)&4294967295); //@line 2084 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$18; //@line 2084 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2085 "socketmodule.c"
        __label__ = 7; break; //@line 2085 "socketmodule.c"
      case 7: // $bb10
        var $19=HEAP[$0]; //@line 2072 "socketmodule.c"
        HEAP[$retval]=$19; //@line 2072 "socketmodule.c"
        __label__ = 8; break; //@line 2072 "socketmodule.c"
      case 8: // $return
        var $retval11=HEAP[$retval]; //@line 2072 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2072 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect_ex($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 156; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $addro_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $addrbuf=__stackBase__+16;
        var $addrlen=__stackBase__+144;
        var $res=__stackBase__+148;
        var $timeout=__stackBase__+152;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$addro_addr]=$addro;
        var $addrbuf1=$addrbuf; //@line 2105 "socketmodule.c"
        var $1=HEAP[$s_addr]; //@line 2105 "socketmodule.c"
        var $2=HEAP[$addro_addr]; //@line 2105 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2105 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2105 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2105 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2106 "socketmodule.c"
        __label__ = 6; break; //@line 2106 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2109 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2109 "socketmodule.c"
        var $6=HEAP[$s_addr]; //@line 2109 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2109 "socketmodule.c"
        HEAP[$res]=$7; //@line 2109 "socketmodule.c"
        var $8=HEAP[$res]; //@line 2115 "socketmodule.c"
        var $9=((($8))|0)==4; //@line 2115 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 3: // $bb6
        var $10=_PyErr_CheckSignals(); //@line 2115 "socketmodule.c"
        var $11=((($10))|0)!=0; //@line 2115 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 4: // $bb7
        HEAP[$0]=0; //@line 2116 "socketmodule.c"
        __label__ = 6; break; //@line 2116 "socketmodule.c"
      case 5: // $bb8
        var $12=HEAP[$res]; //@line 2119 "socketmodule.c"
        var $13=_PyInt_FromLong($12); //@line 2119 "socketmodule.c"
        HEAP[$0]=$13; //@line 2119 "socketmodule.c"
        __label__ = 6; break; //@line 2119 "socketmodule.c"
      case 6: // $bb9
        var $14=HEAP[$0]; //@line 2106 "socketmodule.c"
        HEAP[$retval]=$14; //@line 2106 "socketmodule.c"
        __label__ = 7; break; //@line 2106 "socketmodule.c"
      case 7: // $return
        var $retval10=HEAP[$retval]; //@line 2106 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2106 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_fileno($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 2135 "socketmodule.c"
        var $2=(($1+8)&4294967295); //@line 2135 "socketmodule.c"
        var $3=HEAP[$2]; //@line 2135 "socketmodule.c"
        var $4=_PyInt_FromLong($3); //@line 2135 "socketmodule.c"
        HEAP[$0]=$4; //@line 2135 "socketmodule.c"
        var $5=HEAP[$0]; //@line 2135 "socketmodule.c"
        HEAP[$retval]=$5; //@line 2135 "socketmodule.c"
        __label__ = 1; break; //@line 2135 "socketmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 2135 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 2135 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_dup($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $newfd=__stackBase__+12;
        var $sock=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 2156 "socketmodule.c"
        var $2=(($1+8)&4294967295); //@line 2156 "socketmodule.c"
        var $3=HEAP[$2]; //@line 2156 "socketmodule.c"
        var $4=_dup($3); //@line 2156 "socketmodule.c"
        HEAP[$newfd]=$4; //@line 2156 "socketmodule.c"
        var $5=HEAP[$newfd]; //@line 2157 "socketmodule.c"
        var $6=((($5))|0) < 0; //@line 2157 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2157 "socketmodule.c"
      case 1: // $bb
        var $7=HEAP[$s_addr]; //@line 2158 "socketmodule.c"
        var $8=(($7+24)&4294967295); //@line 2158 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2158 "socketmodule.c"
        var $10=FUNCTION_TABLE[$9](); //@line 2158 "socketmodule.c"
        HEAP[$0]=$10; //@line 2158 "socketmodule.c"
        __label__ = 5; break; //@line 2158 "socketmodule.c"
      case 2: // $bb1
        var $11=HEAP[$s_addr]; //@line 2159 "socketmodule.c"
        var $12=(($11+20)&4294967295); //@line 2159 "socketmodule.c"
        var $13=HEAP[$12]; //@line 2159 "socketmodule.c"
        var $14=HEAP[$s_addr]; //@line 2159 "socketmodule.c"
        var $15=(($14+16)&4294967295); //@line 2159 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2159 "socketmodule.c"
        var $17=HEAP[$s_addr]; //@line 2159 "socketmodule.c"
        var $18=(($17+12)&4294967295); //@line 2159 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2159 "socketmodule.c"
        var $20=HEAP[$newfd]; //@line 2159 "socketmodule.c"
        var $21=_new_sockobject($20, $19, $16, $13); //@line 2159 "socketmodule.c"
        var $22=$21; //@line 2159 "socketmodule.c"
        HEAP[$sock]=$22; //@line 2159 "socketmodule.c"
        var $23=HEAP[$sock]; //@line 2163 "socketmodule.c"
        var $24=($23)==0; //@line 2163 "socketmodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2163 "socketmodule.c"
      case 3: // $bb2
        var $25=HEAP[$newfd]; //@line 2164 "socketmodule.c"
        var $26=_close($25); //@line 2164 "socketmodule.c"
        __label__ = 4; break; //@line 2164 "socketmodule.c"
      case 4: // $bb3
        var $27=HEAP[$sock]; //@line 2165 "socketmodule.c"
        HEAP[$0]=$27; //@line 2165 "socketmodule.c"
        __label__ = 5; break; //@line 2165 "socketmodule.c"
      case 5: // $bb4
        var $28=HEAP[$0]; //@line 2158 "socketmodule.c"
        HEAP[$retval]=$28; //@line 2158 "socketmodule.c"
        __label__ = 6; break; //@line 2158 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2158 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2158 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockname($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 152; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $1=__stackBase__+12;
        var $addrbuf=__stackBase__+16;
        var $res=__stackBase__+144;
        var $addrlen=__stackBase__+148;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $2=HEAP[$s_addr]; //@line 2185 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 2185 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2185 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2185 "socketmodule.c"
      case 1: // $bb
        HEAP[$1]=0; //@line 2186 "socketmodule.c"
        __label__ = 5; break; //@line 2186 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 2187 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2187 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 2187 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2189 "socketmodule.c"
        var $6=(($0)&4294967295); //@line 2189 "socketmodule.c"
        HEAP[$6]=$addrbuf3; //@line 2189 "socketmodule.c"
        var $7=HEAP[$s_addr]; //@line 2189 "socketmodule.c"
        var $8=(($7+8)&4294967295); //@line 2189 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2189 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 2189 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2189 "socketmodule.c"
        var $10=_getsockname($9, $val, $addrlen); //@line 2189 "socketmodule.c"
        HEAP[$res]=$10; //@line 2189 "socketmodule.c"
        var $11=HEAP[$res]; //@line 2191 "socketmodule.c"
        var $12=((($11))|0) < 0; //@line 2191 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2191 "socketmodule.c"
      case 3: // $bb5
        var $13=HEAP[$s_addr]; //@line 2192 "socketmodule.c"
        var $14=(($13+24)&4294967295); //@line 2192 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2192 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2192 "socketmodule.c"
        HEAP[$1]=$16; //@line 2192 "socketmodule.c"
        __label__ = 5; break; //@line 2192 "socketmodule.c"
      case 4: // $bb6
        var $17=HEAP[$s_addr]; //@line 2193 "socketmodule.c"
        var $18=(($17+20)&4294967295); //@line 2193 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2193 "socketmodule.c"
        var $20=HEAP[$addrlen]; //@line 2193 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2193 "socketmodule.c"
        var $21=HEAP[$s_addr]; //@line 2193 "socketmodule.c"
        var $22=(($21+8)&4294967295); //@line 2193 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2193 "socketmodule.c"
        var $24=_makesockaddr($23, $addrbuf7, $20, $19); //@line 2193 "socketmodule.c"
        HEAP[$1]=$24; //@line 2193 "socketmodule.c"
        __label__ = 5; break; //@line 2193 "socketmodule.c"
      case 5: // $bb9
        var $25=HEAP[$1]; //@line 2186 "socketmodule.c"
        HEAP[$retval]=$25; //@line 2186 "socketmodule.c"
        __label__ = 6; break; //@line 2186 "socketmodule.c"
      case 6: // $return
        var $retval10=HEAP[$retval]; //@line 2186 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2186 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getpeername($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 152; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $1=__stackBase__+12;
        var $addrbuf=__stackBase__+16;
        var $res=__stackBase__+144;
        var $addrlen=__stackBase__+148;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $2=HEAP[$s_addr]; //@line 2214 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 2214 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2214 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2214 "socketmodule.c"
      case 1: // $bb
        HEAP[$1]=0; //@line 2215 "socketmodule.c"
        __label__ = 5; break; //@line 2215 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 2216 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2216 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 2216 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2218 "socketmodule.c"
        var $6=(($0)&4294967295); //@line 2218 "socketmodule.c"
        HEAP[$6]=$addrbuf3; //@line 2218 "socketmodule.c"
        var $7=HEAP[$s_addr]; //@line 2218 "socketmodule.c"
        var $8=(($7+8)&4294967295); //@line 2218 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2218 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 2218 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2218 "socketmodule.c"
        var $10=_getpeername($9, $val, $addrlen); //@line 2218 "socketmodule.c"
        HEAP[$res]=$10; //@line 2218 "socketmodule.c"
        var $11=HEAP[$res]; //@line 2220 "socketmodule.c"
        var $12=((($11))|0) < 0; //@line 2220 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2220 "socketmodule.c"
      case 3: // $bb5
        var $13=HEAP[$s_addr]; //@line 2221 "socketmodule.c"
        var $14=(($13+24)&4294967295); //@line 2221 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2221 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2221 "socketmodule.c"
        HEAP[$1]=$16; //@line 2221 "socketmodule.c"
        __label__ = 5; break; //@line 2221 "socketmodule.c"
      case 4: // $bb6
        var $17=HEAP[$s_addr]; //@line 2222 "socketmodule.c"
        var $18=(($17+20)&4294967295); //@line 2222 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2222 "socketmodule.c"
        var $20=HEAP[$addrlen]; //@line 2222 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2222 "socketmodule.c"
        var $21=HEAP[$s_addr]; //@line 2222 "socketmodule.c"
        var $22=(($21+8)&4294967295); //@line 2222 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2222 "socketmodule.c"
        var $24=_makesockaddr($23, $addrbuf7, $20, $19); //@line 2222 "socketmodule.c"
        HEAP[$1]=$24; //@line 2222 "socketmodule.c"
        __label__ = 5; break; //@line 2222 "socketmodule.c"
      case 5: // $bb9
        var $25=HEAP[$1]; //@line 2215 "socketmodule.c"
        HEAP[$retval]=$25; //@line 2215 "socketmodule.c"
        __label__ = 6; break; //@line 2215 "socketmodule.c"
      case 6: // $return
        var $retval10=HEAP[$retval]; //@line 2215 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2215 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_listen($s, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $backlog=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 2243 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2243 "socketmodule.c"
        HEAP[$backlog]=$2; //@line 2243 "socketmodule.c"
        var $3=HEAP[$backlog]; //@line 2244 "socketmodule.c"
        var $4=((($3))|0)==-1; //@line 2244 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2244 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2244 "socketmodule.c"
        var $6=($5)!=0; //@line 2244 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2244 "socketmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 2245 "socketmodule.c"
        __label__ = 8; break; //@line 2245 "socketmodule.c"
      case 3: // $bb2
        var $7=HEAP[$backlog]; //@line 2249 "socketmodule.c"
        var $8=((($7))|0) < 0; //@line 2249 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2249 "socketmodule.c"
      case 4: // $bb3
        HEAP[$backlog]=0; //@line 2250 "socketmodule.c"
        __label__ = 5; break; //@line 2250 "socketmodule.c"
      case 5: // $bb4
        var $9=HEAP[$s_addr]; //@line 2251 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 2251 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2251 "socketmodule.c"
        var $12=HEAP[$backlog]; //@line 2251 "socketmodule.c"
        var $13=_listen($11, $12); //@line 2251 "socketmodule.c"
        HEAP[$res]=$13; //@line 2251 "socketmodule.c"
        var $14=HEAP[$res]; //@line 2253 "socketmodule.c"
        var $15=((($14))|0) < 0; //@line 2253 "socketmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2253 "socketmodule.c"
      case 6: // $bb5
        var $16=HEAP[$s_addr]; //@line 2254 "socketmodule.c"
        var $17=(($16+24)&4294967295); //@line 2254 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2254 "socketmodule.c"
        var $19=FUNCTION_TABLE[$18](); //@line 2254 "socketmodule.c"
        HEAP[$0]=$19; //@line 2254 "socketmodule.c"
        __label__ = 8; break; //@line 2254 "socketmodule.c"
      case 7: // $bb6
        var $20=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2255 "socketmodule.c"
        var $21=((($20) + 1)&4294967295); //@line 2255 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$21; //@line 2255 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2256 "socketmodule.c"
        __label__ = 8; break; //@line 2256 "socketmodule.c"
      case 8: // $bb7
        var $22=HEAP[$0]; //@line 2245 "socketmodule.c"
        HEAP[$retval]=$22; //@line 2245 "socketmodule.c"
        __label__ = 9; break; //@line 2245 "socketmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 2245 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 2245 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_makefile($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $mode=__stackBase__+16;
        var $bufsize=__stackBase__+20;
        var $fd=__stackBase__+24;
        var $fp=__stackBase__+28;
        var $f=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$mode]=((__str41)&4294967295); //@line 2280 "socketmodule.c"
        HEAP[$bufsize]=-1; //@line 2281 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2294 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str42)&4294967295), $mode, $bufsize); //@line 2294 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 2294 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2294 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2295 "socketmodule.c"
        __label__ = 10; break; //@line 2295 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$s_addr]; //@line 2310 "socketmodule.c"
        var $5=(($4+8)&4294967295); //@line 2310 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2310 "socketmodule.c"
        var $7=_dup($6); //@line 2310 "socketmodule.c"
        HEAP[$fd]=$7; //@line 2310 "socketmodule.c"
        var $8=HEAP[$fd]; //@line 2310 "socketmodule.c"
        var $9=((($8))|0) < 0; //@line 2310 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2310 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[$mode]; //@line 2310 "socketmodule.c"
        var $11=HEAP[$fd]; //@line 2310 "socketmodule.c"
        var $12=_fdopen($11, $10); //@line 2310 "socketmodule.c"
        HEAP[$fp]=$12; //@line 2310 "socketmodule.c"
        var $13=HEAP[$fp]; //@line 2310 "socketmodule.c"
        var $14=($13)==0; //@line 2310 "socketmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2310 "socketmodule.c"
      case 4: // $bb3
        var $15=HEAP[$fd]; //@line 2313 "socketmodule.c"
        var $16=((($15))|0) >= 0; //@line 2313 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2313 "socketmodule.c"
      case 5: // $bb4
        var $17=HEAP[$fd]; //@line 2314 "socketmodule.c"
        var $18=_close($17); //@line 2314 "socketmodule.c"
        __label__ = 6; break; //@line 2314 "socketmodule.c"
      case 6: // $bb5
        var $19=HEAP[$s_addr]; //@line 2315 "socketmodule.c"
        var $20=(($19+24)&4294967295); //@line 2315 "socketmodule.c"
        var $21=HEAP[$20]; //@line 2315 "socketmodule.c"
        var $22=FUNCTION_TABLE[$21](); //@line 2315 "socketmodule.c"
        HEAP[$0]=$22; //@line 2315 "socketmodule.c"
        __label__ = 10; break; //@line 2315 "socketmodule.c"
      case 7: // $bb6
        var $23=HEAP[$mode]; //@line 2317 "socketmodule.c"
        var $24=HEAP[$fp]; //@line 2317 "socketmodule.c"
        var $25=_PyFile_FromFile($24, ((__str43)&4294967295), $23, (FUNCTION_TABLE_OFFSET + 4)); //@line 2317 "socketmodule.c"
        HEAP[$f]=$25; //@line 2317 "socketmodule.c"
        var $26=HEAP[$f]; //@line 2318 "socketmodule.c"
        var $27=($26)!=0; //@line 2318 "socketmodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2318 "socketmodule.c"
      case 8: // $bb7
        var $28=HEAP[$bufsize]; //@line 2319 "socketmodule.c"
        var $29=HEAP[$f]; //@line 2319 "socketmodule.c"
        _PyFile_SetBufSize($29, $28); //@line 2319 "socketmodule.c"
        __label__ = 9; break; //@line 2319 "socketmodule.c"
      case 9: // $bb8
        var $30=HEAP[$f]; //@line 2320 "socketmodule.c"
        HEAP[$0]=$30; //@line 2320 "socketmodule.c"
        __label__ = 10; break; //@line 2320 "socketmodule.c"
      case 10: // $bb9
        var $31=HEAP[$0]; //@line 2295 "socketmodule.c"
        HEAP[$retval]=$31; //@line 2295 "socketmodule.c"
        __label__ = 11; break; //@line 2295 "socketmodule.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 2295 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2295 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_guts($s, $cbuf, $len, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $cbuf_addr=__stackBase__+4;
        var $len_addr=__stackBase__+8;
        var $flags_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $outlen=__stackBase__+24;
        var $timeout=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$cbuf_addr]=$cbuf;
        HEAP[$len_addr]=$len;
        HEAP[$flags_addr]=$flags;
        HEAP[$outlen]=-1; //@line 2342 "socketmodule.c"
        var $1=HEAP[$s_addr]; //@line 2356 "socketmodule.c"
        var $2=_internal_select($1, 0); //@line 2356 "socketmodule.c"
        HEAP[$timeout]=$2; //@line 2356 "socketmodule.c"
        var $3=HEAP[$timeout]; //@line 2357 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2357 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2357 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[$len_addr]; //@line 2358 "socketmodule.c"
        var $6=HEAP[$s_addr]; //@line 2358 "socketmodule.c"
        var $7=(($6+8)&4294967295); //@line 2358 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2358 "socketmodule.c"
        var $9=HEAP[$cbuf_addr]; //@line 2358 "socketmodule.c"
        var $10=HEAP[$flags_addr]; //@line 2358 "socketmodule.c"
        var $11=_recv($8, $9, $5, $10); //@line 2358 "socketmodule.c"
        HEAP[$outlen]=$11; //@line 2358 "socketmodule.c"
        __label__ = 2; break; //@line 2358 "socketmodule.c"
      case 2: // $bb1
        var $12=HEAP[$timeout]; //@line 2361 "socketmodule.c"
        var $13=((($12))|0)==1; //@line 2361 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2361 "socketmodule.c"
      case 3: // $bb2
        var $14=HEAP[_socket_timeout]; //@line 2362 "socketmodule.c"
        _PyErr_SetString($14, ((__str35)&4294967295)); //@line 2362 "socketmodule.c"
        HEAP[$0]=-1; //@line 2363 "socketmodule.c"
        __label__ = 7; break; //@line 2363 "socketmodule.c"
      case 4: // $bb3
        var $15=HEAP[$outlen]; //@line 2365 "socketmodule.c"
        var $16=((($15))|0) < 0; //@line 2365 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2365 "socketmodule.c"
      case 5: // $bb4
        var $17=HEAP[$s_addr]; //@line 2368 "socketmodule.c"
        var $18=(($17+24)&4294967295); //@line 2368 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2368 "socketmodule.c"
        var $20=FUNCTION_TABLE[$19](); //@line 2368 "socketmodule.c"
        HEAP[$0]=-1; //@line 2369 "socketmodule.c"
        __label__ = 7; break; //@line 2369 "socketmodule.c"
      case 6: // $bb5
        var $21=HEAP[$outlen]; //@line 2411 "socketmodule.c"
        HEAP[$0]=$21; //@line 2411 "socketmodule.c"
        __label__ = 7; break; //@line 2411 "socketmodule.c"
      case 7: // $bb6
        var $22=HEAP[$0]; //@line 2363 "socketmodule.c"
        HEAP[$retval]=$22; //@line 2363 "socketmodule.c"
        __label__ = 8; break; //@line 2363 "socketmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 2363 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 2363 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $recvlen=__stackBase__+16;
        var $flags=__stackBase__+20;
        var $outlen=__stackBase__+24;
        var $buf=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$flags]=0; //@line 2420 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2424 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str44)&4294967295), $recvlen, $flags); //@line 2424 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 2424 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2424 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2425 "socketmodule.c"
        __label__ = 14; break; //@line 2425 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2427 "socketmodule.c"
        var $5=((($4))|0) < 0; //@line 2427 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2427 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2428 "socketmodule.c"
        _PyErr_SetString($6, ((__str45)&4294967295)); //@line 2428 "socketmodule.c"
        HEAP[$0]=0; //@line 2430 "socketmodule.c"
        __label__ = 14; break; //@line 2430 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2434 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2434 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2434 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2435 "socketmodule.c"
        var $10=($9)==0; //@line 2435 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2435 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2436 "socketmodule.c"
        __label__ = 14; break; //@line 2436 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2439 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2439 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2439 "socketmodule.c"
        var $14=$13; //@line 2439 "socketmodule.c"
        var $15=(($14+20)&4294967295); //@line 2439 "socketmodule.c"
        var $16=(($15)&4294967295); //@line 2439 "socketmodule.c"
        var $17=HEAP[$s_addr]; //@line 2439 "socketmodule.c"
        var $18=_sock_recv_guts($17, $16, $12, $11); //@line 2439 "socketmodule.c"
        HEAP[$outlen]=$18; //@line 2439 "socketmodule.c"
        var $19=HEAP[$outlen]; //@line 2440 "socketmodule.c"
        var $20=((($19))|0) < 0; //@line 2440 "socketmodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2440 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $22=(($21)&4294967295); //@line 2443 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2443 "socketmodule.c"
        var $24=((($23) - 1)&4294967295); //@line 2443 "socketmodule.c"
        var $25=(($21)&4294967295); //@line 2443 "socketmodule.c"
        HEAP[$25]=$24; //@line 2443 "socketmodule.c"
        var $26=(($21)&4294967295); //@line 2443 "socketmodule.c"
        var $27=HEAP[$26]; //@line 2443 "socketmodule.c"
        var $28=((($27))|0)==0; //@line 2443 "socketmodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2443 "socketmodule.c"
      case 8: // $bb7
        var $29=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $30=(($29+4)&4294967295); //@line 2443 "socketmodule.c"
        var $31=HEAP[$30]; //@line 2443 "socketmodule.c"
        var $32=(($31+24)&4294967295); //@line 2443 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2443 "socketmodule.c"
        var $34=HEAP[$buf]; //@line 2443 "socketmodule.c"
        FUNCTION_TABLE[$33]($34); //@line 2443 "socketmodule.c"
        __label__ = 9; break; //@line 2443 "socketmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 2444 "socketmodule.c"
        __label__ = 14; break; //@line 2444 "socketmodule.c"
      case 10: // $bb9
        var $35=HEAP[$recvlen]; //@line 2446 "socketmodule.c"
        var $36=HEAP[$outlen]; //@line 2446 "socketmodule.c"
        var $37=((($36))|0)!=((($35))|0); //@line 2446 "socketmodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2446 "socketmodule.c"
      case 11: // $bb10
        var $38=HEAP[$outlen]; //@line 2449 "socketmodule.c"
        var $39=__PyString_Resize($buf, $38); //@line 2449 "socketmodule.c"
        var $40=((($39))|0) < 0; //@line 2449 "socketmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2449 "socketmodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 2451 "socketmodule.c"
        __label__ = 14; break; //@line 2451 "socketmodule.c"
      case 13: // $bb12
        var $41=HEAP[$buf]; //@line 2454 "socketmodule.c"
        HEAP[$0]=$41; //@line 2454 "socketmodule.c"
        __label__ = 14; break; //@line 2454 "socketmodule.c"
      case 14: // $bb13
        var $42=HEAP[$0]; //@line 2425 "socketmodule.c"
        HEAP[$retval]=$42; //@line 2425 "socketmodule.c"
        __label__ = 15; break; //@line 2425 "socketmodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 2425 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2425 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 88; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $recvlen=__stackBase__+20;
        var $flags=__stackBase__+24;
        var $readlen=__stackBase__+28;
        var $buf=__stackBase__+32;
        var $buflen=__stackBase__+84;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$recvlen]=0; //@line 2473 "socketmodule.c"
        HEAP[$flags]=0; //@line 2473 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2479 "socketmodule.c"
        var $2=HEAP[$kwds_addr]; //@line 2479 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str46)&4294967295), ((_kwlist_10873)&4294967295), $buf, $recvlen, $flags); //@line 2479 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2479 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2479 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2481 "socketmodule.c"
        __label__ = 14; break; //@line 2481 "socketmodule.c"
      case 2: // $bb1
        var $5=(($buf+8)&4294967295); //@line 2482 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2482 "socketmodule.c"
        HEAP[$buflen]=$6; //@line 2482 "socketmodule.c"
        var $7=(($buf)&4294967295); //@line 2483 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2483 "socketmodule.c"
        var $9=($8)==0; //@line 2483 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2483 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[$buflen]; //@line 2483 "socketmodule.c"
        var $11=((($10))|0) <= 0; //@line 2483 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2483 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(((__str50)&4294967295), ((__str51)&4294967295), 2483, ((___PRETTY_FUNCTION___10879)&4294967295)); //@line 2483 "socketmodule.c"
        throw "Reached an unreachable! Original .ll line: 4355"; //@line 2483 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2485 "socketmodule.c"
        var $13=((($12))|0) < 0; //@line 2485 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2485 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2486 "socketmodule.c"
        _PyErr_SetString($14, ((__str52)&4294967295)); //@line 2486 "socketmodule.c"
        __label__ = 13; break; //@line 2486 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2490 "socketmodule.c"
        var $16=((($15))|0)==0; //@line 2490 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2490 "socketmodule.c"
      case 8: // $bb7
        var $17=HEAP[$buflen]; //@line 2492 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2492 "socketmodule.c"
        __label__ = 9; break; //@line 2492 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$recvlen]; //@line 2496 "socketmodule.c"
        var $19=HEAP[$buflen]; //@line 2496 "socketmodule.c"
        var $20=((($19))|0) < ((($18))|0); //@line 2496 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2496 "socketmodule.c"
      case 10: // $bb9
        var $21=HEAP[_PyExc_ValueError]; //@line 2497 "socketmodule.c"
        _PyErr_SetString($21, ((__str53)&4294967295)); //@line 2497 "socketmodule.c"
        __label__ = 13; break; //@line 2497 "socketmodule.c"
      case 11: // $bb10
        var $22=HEAP[$flags]; //@line 2503 "socketmodule.c"
        var $23=HEAP[$recvlen]; //@line 2503 "socketmodule.c"
        var $24=(($buf)&4294967295); //@line 2503 "socketmodule.c"
        var $25=HEAP[$24]; //@line 2503 "socketmodule.c"
        var $26=HEAP[$s_addr]; //@line 2503 "socketmodule.c"
        var $27=_sock_recv_guts($26, $25, $23, $22); //@line 2503 "socketmodule.c"
        HEAP[$readlen]=$27; //@line 2503 "socketmodule.c"
        var $28=HEAP[$readlen]; //@line 2504 "socketmodule.c"
        var $29=((($28))|0) < 0; //@line 2504 "socketmodule.c"
        if ($29) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2504 "socketmodule.c"
      case 12: // $bb11
        _PyBuffer_Release($buf); //@line 2509 "socketmodule.c"
        var $30=HEAP[$readlen]; //@line 2512 "socketmodule.c"
        var $31=_PyInt_FromSsize_t($30); //@line 2512 "socketmodule.c"
        HEAP[$0]=$31; //@line 2512 "socketmodule.c"
        __label__ = 14; break; //@line 2512 "socketmodule.c"
      case 13: // $error
        _PyBuffer_Release($buf); //@line 2515 "socketmodule.c"
        HEAP[$0]=0; //@line 2516 "socketmodule.c"
        __label__ = 14; break; //@line 2516 "socketmodule.c"
      case 14: // $bb12
        var $32=HEAP[$0]; //@line 2481 "socketmodule.c"
        HEAP[$retval]=$32; //@line 2481 "socketmodule.c"
        __label__ = 15; break; //@line 2481 "socketmodule.c"
      case 15: // $return
        var $retval13=HEAP[$retval]; //@line 2481 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2481 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_guts($s, $cbuf, $len, $flags, $addr) {
    var __stackBase__  = STACKTOP; STACKTOP += 172; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $cbuf_addr=__stackBase__+4;
        var $len_addr=__stackBase__+8;
        var $flags_addr=__stackBase__+12;
        var $addr_addr=__stackBase__+16;
        var $retval=__stackBase__+20;
        var $0=__stackBase__+24;
        var $1=__stackBase__+28;
        var $addrbuf=__stackBase__+32;
        var $timeout=__stackBase__+160;
        var $n=__stackBase__+164;
        var $addrlen=__stackBase__+168;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$cbuf_addr]=$cbuf;
        HEAP[$len_addr]=$len;
        HEAP[$flags_addr]=$flags;
        HEAP[$addr_addr]=$addr;
        HEAP[$n]=-1; //@line 2546 "socketmodule.c"
        var $2=HEAP[$addr_addr]; //@line 2549 "socketmodule.c"
        HEAP[$2]=0; //@line 2549 "socketmodule.c"
        var $3=HEAP[$s_addr]; //@line 2551 "socketmodule.c"
        var $4=_getsockaddrlen($3, $addrlen); //@line 2551 "socketmodule.c"
        var $5=((($4))|0)==0; //@line 2551 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2551 "socketmodule.c"
      case 1: // $bb
        HEAP[$1]=-1; //@line 2552 "socketmodule.c"
        __label__ = 11; break; //@line 2552 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$addrlen]; //@line 2560 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2560 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $6, 1, 0); //@line 2560 "socketmodule.c"
        var $7=HEAP[$s_addr]; //@line 2561 "socketmodule.c"
        var $8=_internal_select($7, 0); //@line 2561 "socketmodule.c"
        HEAP[$timeout]=$8; //@line 2561 "socketmodule.c"
        var $9=HEAP[$timeout]; //@line 2562 "socketmodule.c"
        var $10=((($9))|0)==0; //@line 2562 "socketmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2562 "socketmodule.c"
      case 3: // $bb3
        var $11=(($0)&4294967295); //@line 2568 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2568 "socketmodule.c"
        HEAP[$11]=$addrbuf4; //@line 2568 "socketmodule.c"
        var $12=HEAP[$len_addr]; //@line 2568 "socketmodule.c"
        var $13=HEAP[$s_addr]; //@line 2568 "socketmodule.c"
        var $14=(($13+8)&4294967295); //@line 2568 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2568 "socketmodule.c"
        var $16=HEAP[$cbuf_addr]; //@line 2568 "socketmodule.c"
        var $17=HEAP[$flags_addr]; //@line 2568 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 2568 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2568 "socketmodule.c"
        var $18=_recvfrom($15, $16, $12, $17, $val, $addrlen); //@line 2568 "socketmodule.c"
        HEAP[$n]=$18; //@line 2568 "socketmodule.c"
        __label__ = 4; break; //@line 2568 "socketmodule.c"
      case 4: // $bb5
        var $19=HEAP[$timeout]; //@line 2578 "socketmodule.c"
        var $20=((($19))|0)==1; //@line 2578 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2578 "socketmodule.c"
      case 5: // $bb6
        var $21=HEAP[_socket_timeout]; //@line 2579 "socketmodule.c"
        _PyErr_SetString($21, ((__str35)&4294967295)); //@line 2579 "socketmodule.c"
        HEAP[$1]=-1; //@line 2580 "socketmodule.c"
        __label__ = 11; break; //@line 2580 "socketmodule.c"
      case 6: // $bb7
        var $22=HEAP[$n]; //@line 2582 "socketmodule.c"
        var $23=((($22))|0) < 0; //@line 2582 "socketmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2582 "socketmodule.c"
      case 7: // $bb8
        var $24=HEAP[$s_addr]; //@line 2583 "socketmodule.c"
        var $25=(($24+24)&4294967295); //@line 2583 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2583 "socketmodule.c"
        var $27=FUNCTION_TABLE[$26](); //@line 2583 "socketmodule.c"
        HEAP[$1]=-1; //@line 2584 "socketmodule.c"
        __label__ = 11; break; //@line 2584 "socketmodule.c"
      case 8: // $bb9
        var $28=HEAP[$s_addr]; //@line 2587 "socketmodule.c"
        var $29=(($28+20)&4294967295); //@line 2587 "socketmodule.c"
        var $30=HEAP[$29]; //@line 2587 "socketmodule.c"
        var $31=HEAP[$addrlen]; //@line 2587 "socketmodule.c"
        var $addrbuf10=$addrbuf; //@line 2587 "socketmodule.c"
        var $32=HEAP[$s_addr]; //@line 2587 "socketmodule.c"
        var $33=(($32+8)&4294967295); //@line 2587 "socketmodule.c"
        var $34=HEAP[$33]; //@line 2587 "socketmodule.c"
        var $35=_makesockaddr($34, $addrbuf10, $31, $30); //@line 2587 "socketmodule.c"
        var $36=HEAP[$addr_addr]; //@line 2587 "socketmodule.c"
        HEAP[$36]=$35; //@line 2587 "socketmodule.c"
        var $37=HEAP[$addr_addr]; //@line 2587 "socketmodule.c"
        var $38=HEAP[$37]; //@line 2587 "socketmodule.c"
        var $39=($38)==0; //@line 2587 "socketmodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2587 "socketmodule.c"
      case 9: // $bb12
        HEAP[$1]=-1; //@line 2589 "socketmodule.c"
        __label__ = 11; break; //@line 2589 "socketmodule.c"
      case 10: // $bb13
        var $40=HEAP[$n]; //@line 2591 "socketmodule.c"
        HEAP[$1]=$40; //@line 2591 "socketmodule.c"
        __label__ = 11; break; //@line 2591 "socketmodule.c"
      case 11: // $bb14
        var $41=HEAP[$1]; //@line 2552 "socketmodule.c"
        HEAP[$retval]=$41; //@line 2552 "socketmodule.c"
        __label__ = 12; break; //@line 2552 "socketmodule.c"
      case 12: // $return
        var $retval15=HEAP[$retval]; //@line 2552 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 2552 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $addr=__stackBase__+20;
        var $ret=__stackBase__+24;
        var $recvlen=__stackBase__+28;
        var $flags=__stackBase__+32;
        var $outlen=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$buf]=0; //@line 2599 "socketmodule.c"
        HEAP[$addr]=0; //@line 2600 "socketmodule.c"
        HEAP[$ret]=0; //@line 2601 "socketmodule.c"
        HEAP[$flags]=0; //@line 2602 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2605 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str54)&4294967295), $recvlen, $flags); //@line 2605 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 2605 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2605 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2606 "socketmodule.c"
        __label__ = 17; break; //@line 2606 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2608 "socketmodule.c"
        var $5=((($4))|0) < 0; //@line 2608 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2608 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2609 "socketmodule.c"
        _PyErr_SetString($6, ((__str55)&4294967295)); //@line 2609 "socketmodule.c"
        HEAP[$0]=0; //@line 2611 "socketmodule.c"
        __label__ = 17; break; //@line 2611 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2614 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2614 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2614 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2615 "socketmodule.c"
        var $10=($9)==0; //@line 2615 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2615 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2616 "socketmodule.c"
        __label__ = 17; break; //@line 2616 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2618 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2618 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2618 "socketmodule.c"
        var $14=$13; //@line 2618 "socketmodule.c"
        var $15=(($14+20)&4294967295); //@line 2618 "socketmodule.c"
        var $16=(($15)&4294967295); //@line 2618 "socketmodule.c"
        var $17=HEAP[$s_addr]; //@line 2618 "socketmodule.c"
        var $18=_sock_recvfrom_guts($17, $16, $12, $11, $addr); //@line 2618 "socketmodule.c"
        HEAP[$outlen]=$18; //@line 2618 "socketmodule.c"
        var $19=HEAP[$outlen]; //@line 2620 "socketmodule.c"
        var $20=((($19))|0) < 0; //@line 2620 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2620 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$recvlen]; //@line 2624 "socketmodule.c"
        var $22=HEAP[$outlen]; //@line 2624 "socketmodule.c"
        var $23=((($22))|0)!=((($21))|0); //@line 2624 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2624 "socketmodule.c"
      case 8: // $bb7
        var $24=HEAP[$outlen]; //@line 2627 "socketmodule.c"
        var $25=__PyString_Resize($buf, $24); //@line 2627 "socketmodule.c"
        var $26=((($25))|0) < 0; //@line 2627 "socketmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2627 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$addr]; //@line 2632 "socketmodule.c"
        var $28=HEAP[$buf]; //@line 2632 "socketmodule.c"
        var $29=_PyTuple_Pack(2, $28, $27); //@line 2632 "socketmodule.c"
        HEAP[$ret]=$29; //@line 2632 "socketmodule.c"
        __label__ = 10; break; //@line 2634 "socketmodule.c"
      case 10: // $finally
        var $30=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $31=($30)!=0; //@line 2635 "socketmodule.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 11: // $bb9
        var $32=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $33=(($32)&4294967295); //@line 2635 "socketmodule.c"
        var $34=HEAP[$33]; //@line 2635 "socketmodule.c"
        var $35=((($34) - 1)&4294967295); //@line 2635 "socketmodule.c"
        var $36=(($32)&4294967295); //@line 2635 "socketmodule.c"
        HEAP[$36]=$35; //@line 2635 "socketmodule.c"
        var $37=(($32)&4294967295); //@line 2635 "socketmodule.c"
        var $38=HEAP[$37]; //@line 2635 "socketmodule.c"
        var $39=((($38))|0)==0; //@line 2635 "socketmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 12: // $bb10
        var $40=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $41=(($40+4)&4294967295); //@line 2635 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2635 "socketmodule.c"
        var $43=(($42+24)&4294967295); //@line 2635 "socketmodule.c"
        var $44=HEAP[$43]; //@line 2635 "socketmodule.c"
        var $45=HEAP[$buf]; //@line 2635 "socketmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 2635 "socketmodule.c"
        __label__ = 13; break; //@line 2635 "socketmodule.c"
      case 13: // $bb11
        var $46=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $47=($46)!=0; //@line 2636 "socketmodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2636 "socketmodule.c"
      case 14: // $bb12
        var $48=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $49=(($48)&4294967295); //@line 2636 "socketmodule.c"
        var $50=HEAP[$49]; //@line 2636 "socketmodule.c"
        var $51=((($50) - 1)&4294967295); //@line 2636 "socketmodule.c"
        var $52=(($48)&4294967295); //@line 2636 "socketmodule.c"
        HEAP[$52]=$51; //@line 2636 "socketmodule.c"
        var $53=(($48)&4294967295); //@line 2636 "socketmodule.c"
        var $54=HEAP[$53]; //@line 2636 "socketmodule.c"
        var $55=((($54))|0)==0; //@line 2636 "socketmodule.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2636 "socketmodule.c"
      case 15: // $bb13
        var $56=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $57=(($56+4)&4294967295); //@line 2636 "socketmodule.c"
        var $58=HEAP[$57]; //@line 2636 "socketmodule.c"
        var $59=(($58+24)&4294967295); //@line 2636 "socketmodule.c"
        var $60=HEAP[$59]; //@line 2636 "socketmodule.c"
        var $61=HEAP[$addr]; //@line 2636 "socketmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 2636 "socketmodule.c"
        __label__ = 16; break; //@line 2636 "socketmodule.c"
      case 16: // $bb14
        var $62=HEAP[$ret]; //@line 2637 "socketmodule.c"
        HEAP[$0]=$62; //@line 2637 "socketmodule.c"
        __label__ = 17; break; //@line 2637 "socketmodule.c"
      case 17: // $bb15
        var $63=HEAP[$0]; //@line 2606 "socketmodule.c"
        HEAP[$retval]=$63; //@line 2606 "socketmodule.c"
        __label__ = 18; break; //@line 2606 "socketmodule.c"
      case 18: // $return
        var $retval16=HEAP[$retval]; //@line 2606 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2606 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 92; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $recvlen=__stackBase__+20;
        var $flags=__stackBase__+24;
        var $readlen=__stackBase__+28;
        var $buf=__stackBase__+32;
        var $buflen=__stackBase__+84;
        var $addr=__stackBase__+88;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        HEAP[$recvlen]=0; //@line 2653 "socketmodule.c"
        HEAP[$flags]=0; //@line 2653 "socketmodule.c"
        HEAP[$addr]=0; //@line 2658 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2660 "socketmodule.c"
        var $2=HEAP[$kwds_addr]; //@line 2660 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str56)&4294967295), ((_kwlist_11020)&4294967295), $buf, $recvlen, $flags); //@line 2660 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 2660 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2660 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2663 "socketmodule.c"
        __label__ = 15; break; //@line 2663 "socketmodule.c"
      case 2: // $bb1
        var $5=(($buf+8)&4294967295); //@line 2664 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2664 "socketmodule.c"
        HEAP[$buflen]=$6; //@line 2664 "socketmodule.c"
        var $7=(($buf)&4294967295); //@line 2665 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2665 "socketmodule.c"
        var $9=($8)==0; //@line 2665 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2665 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[$buflen]; //@line 2665 "socketmodule.c"
        var $11=((($10))|0) <= 0; //@line 2665 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2665 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(((__str50)&4294967295), ((__str51)&4294967295), 2665, ((___PRETTY_FUNCTION___11027)&4294967295)); //@line 2665 "socketmodule.c"
        throw "Reached an unreachable! Original .ll line: 4784"; //@line 2665 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2667 "socketmodule.c"
        var $13=((($12))|0) < 0; //@line 2667 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2667 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2668 "socketmodule.c"
        _PyErr_SetString($14, ((__str57)&4294967295)); //@line 2668 "socketmodule.c"
        __label__ = 11; break; //@line 2668 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2672 "socketmodule.c"
        var $16=((($15))|0)==0; //@line 2672 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2672 "socketmodule.c"
      case 8: // $bb7
        var $17=HEAP[$buflen]; //@line 2674 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2674 "socketmodule.c"
        __label__ = 9; break; //@line 2674 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$flags]; //@line 2677 "socketmodule.c"
        var $19=HEAP[$recvlen]; //@line 2677 "socketmodule.c"
        var $20=(($buf)&4294967295); //@line 2677 "socketmodule.c"
        var $21=HEAP[$20]; //@line 2677 "socketmodule.c"
        var $22=HEAP[$s_addr]; //@line 2677 "socketmodule.c"
        var $23=_sock_recvfrom_guts($22, $21, $19, $18, $addr); //@line 2677 "socketmodule.c"
        HEAP[$readlen]=$23; //@line 2677 "socketmodule.c"
        var $24=HEAP[$readlen]; //@line 2678 "socketmodule.c"
        var $25=((($24))|0) < 0; //@line 2678 "socketmodule.c"
        if ($25) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2678 "socketmodule.c"
      case 10: // $bb9
        _PyBuffer_Release($buf); //@line 2683 "socketmodule.c"
        var $26=HEAP[$addr]; //@line 2686 "socketmodule.c"
        var $27=HEAP[$readlen]; //@line 2686 "socketmodule.c"
        var $28=_Py_BuildValue(((__str58)&4294967295), $27, $26); //@line 2686 "socketmodule.c"
        HEAP[$0]=$28; //@line 2686 "socketmodule.c"
        __label__ = 15; break; //@line 2686 "socketmodule.c"
      case 11: // $error
        var $29=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $30=($29)!=0; //@line 2689 "socketmodule.c"
        if ($30) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 12: // $bb10
        var $31=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $32=(($31)&4294967295); //@line 2689 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2689 "socketmodule.c"
        var $34=((($33) - 1)&4294967295); //@line 2689 "socketmodule.c"
        var $35=(($31)&4294967295); //@line 2689 "socketmodule.c"
        HEAP[$35]=$34; //@line 2689 "socketmodule.c"
        var $36=(($31)&4294967295); //@line 2689 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2689 "socketmodule.c"
        var $38=((($37))|0)==0; //@line 2689 "socketmodule.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 13: // $bb11
        var $39=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $40=(($39+4)&4294967295); //@line 2689 "socketmodule.c"
        var $41=HEAP[$40]; //@line 2689 "socketmodule.c"
        var $42=(($41+24)&4294967295); //@line 2689 "socketmodule.c"
        var $43=HEAP[$42]; //@line 2689 "socketmodule.c"
        var $44=HEAP[$addr]; //@line 2689 "socketmodule.c"
        FUNCTION_TABLE[$43]($44); //@line 2689 "socketmodule.c"
        __label__ = 14; break; //@line 2689 "socketmodule.c"
      case 14: // $bb12
        _PyBuffer_Release($buf); //@line 2690 "socketmodule.c"
        HEAP[$0]=0; //@line 2691 "socketmodule.c"
        __label__ = 15; break; //@line 2691 "socketmodule.c"
      case 15: // $bb13
        var $45=HEAP[$0]; //@line 2663 "socketmodule.c"
        HEAP[$retval]=$45; //@line 2663 "socketmodule.c"
        __label__ = 16; break; //@line 2663 "socketmodule.c"
      case 16: // $return
        var $retval14=HEAP[$retval]; //@line 2663 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2663 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_send($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 88; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 88);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $len=__stackBase__+20;
        var $n=__stackBase__+24;
        var $flags=__stackBase__+28;
        var $timeout=__stackBase__+32;
        var $pbuf=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$n]=-1; //@line 2706 "socketmodule.c"
        HEAP[$flags]=0; //@line 2706 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2709 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str59)&4294967295), $pbuf, $flags); //@line 2709 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 2709 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2709 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2710 "socketmodule.c"
        __label__ = 9; break; //@line 2710 "socketmodule.c"
      case 2: // $bb1
        var $4=(($pbuf)&4294967295); //@line 2716 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2716 "socketmodule.c"
        HEAP[$buf]=$5; //@line 2716 "socketmodule.c"
        var $6=(($pbuf+8)&4294967295); //@line 2717 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2717 "socketmodule.c"
        HEAP[$len]=$7; //@line 2717 "socketmodule.c"
        var $8=HEAP[$s_addr]; //@line 2720 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2720 "socketmodule.c"
        HEAP[$timeout]=$9; //@line 2720 "socketmodule.c"
        var $10=HEAP[$timeout]; //@line 2721 "socketmodule.c"
        var $11=((($10))|0)==0; //@line 2721 "socketmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2721 "socketmodule.c"
      case 3: // $bb2
        var $12=HEAP[$flags]; //@line 2725 "socketmodule.c"
        var $13=HEAP[$len]; //@line 2725 "socketmodule.c"
        var $14=HEAP[$s_addr]; //@line 2725 "socketmodule.c"
        var $15=(($14+8)&4294967295); //@line 2725 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2725 "socketmodule.c"
        var $17=HEAP[$buf]; //@line 2725 "socketmodule.c"
        var $18=_send($16, $17, $13, $12); //@line 2725 "socketmodule.c"
        HEAP[$n]=$18; //@line 2725 "socketmodule.c"
        __label__ = 4; break; //@line 2725 "socketmodule.c"
      case 4: // $bb3
        _PyBuffer_Release($pbuf); //@line 2729 "socketmodule.c"
        var $19=HEAP[$timeout]; //@line 2731 "socketmodule.c"
        var $20=((($19))|0)==1; //@line 2731 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2731 "socketmodule.c"
      case 5: // $bb4
        var $21=HEAP[_socket_timeout]; //@line 2732 "socketmodule.c"
        _PyErr_SetString($21, ((__str35)&4294967295)); //@line 2732 "socketmodule.c"
        HEAP[$0]=0; //@line 2733 "socketmodule.c"
        __label__ = 9; break; //@line 2733 "socketmodule.c"
      case 6: // $bb5
        var $22=HEAP[$n]; //@line 2735 "socketmodule.c"
        var $23=((($22))|0) < 0; //@line 2735 "socketmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2735 "socketmodule.c"
      case 7: // $bb6
        var $24=HEAP[$s_addr]; //@line 2736 "socketmodule.c"
        var $25=(($24+24)&4294967295); //@line 2736 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2736 "socketmodule.c"
        var $27=FUNCTION_TABLE[$26](); //@line 2736 "socketmodule.c"
        HEAP[$0]=$27; //@line 2736 "socketmodule.c"
        __label__ = 9; break; //@line 2736 "socketmodule.c"
      case 8: // $bb7
        var $28=HEAP[$n]; //@line 2737 "socketmodule.c"
        var $29=_PyInt_FromLong($28); //@line 2737 "socketmodule.c"
        HEAP[$0]=$29; //@line 2737 "socketmodule.c"
        __label__ = 9; break; //@line 2737 "socketmodule.c"
      case 9: // $bb8
        var $30=HEAP[$0]; //@line 2710 "socketmodule.c"
        HEAP[$retval]=$30; //@line 2710 "socketmodule.c"
        __label__ = 10; break; //@line 2710 "socketmodule.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 2710 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2710 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendall($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 92; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 92);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $len=__stackBase__+20;
        var $n=__stackBase__+24;
        var $flags=__stackBase__+28;
        var $timeout=__stackBase__+32;
        var $saved_errno=__stackBase__+36;
        var $pbuf=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$n]=-1; //@line 2754 "socketmodule.c"
        HEAP[$flags]=0; //@line 2754 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 2757 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str60)&4294967295), $pbuf, $flags); //@line 2757 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 2757 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2757 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2758 "socketmodule.c"
        __label__ = 16; break; //@line 2758 "socketmodule.c"
      case 2: // $bb1
        var $4=(($pbuf)&4294967295); //@line 2759 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2759 "socketmodule.c"
        HEAP[$buf]=$5; //@line 2759 "socketmodule.c"
        var $6=(($pbuf+8)&4294967295); //@line 2760 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2760 "socketmodule.c"
        HEAP[$len]=$7; //@line 2760 "socketmodule.c"
        __label__ = 3; break; //@line 2760 "socketmodule.c"
      case 3: // $bb2
        var $8=HEAP[$s_addr]; //@line 2769 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2769 "socketmodule.c"
        HEAP[$timeout]=$9; //@line 2769 "socketmodule.c"
        HEAP[$n]=-1; //@line 2770 "socketmodule.c"
        var $10=HEAP[$timeout]; //@line 2771 "socketmodule.c"
        var $11=((($10))|0)==0; //@line 2771 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2771 "socketmodule.c"
      case 4: // $bb3
        var $12=HEAP[$flags]; //@line 2775 "socketmodule.c"
        var $13=HEAP[$len]; //@line 2775 "socketmodule.c"
        var $14=HEAP[$s_addr]; //@line 2775 "socketmodule.c"
        var $15=(($14+8)&4294967295); //@line 2775 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2775 "socketmodule.c"
        var $17=HEAP[$buf]; //@line 2775 "socketmodule.c"
        var $18=_send($16, $17, $13, $12); //@line 2775 "socketmodule.c"
        HEAP[$n]=$18; //@line 2775 "socketmodule.c"
        __label__ = 5; break; //@line 2775 "socketmodule.c"
      case 5: // $bb4
        var $19=HEAP[$timeout]; //@line 2779 "socketmodule.c"
        var $20=((($19))|0)==1; //@line 2779 "socketmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2779 "socketmodule.c"
      case 6: // $bb5
        _PyBuffer_Release($pbuf); //@line 2780 "socketmodule.c"
        var $21=HEAP[_socket_timeout]; //@line 2781 "socketmodule.c"
        _PyErr_SetString($21, ((__str35)&4294967295)); //@line 2781 "socketmodule.c"
        HEAP[$0]=0; //@line 2782 "socketmodule.c"
        __label__ = 16; break; //@line 2782 "socketmodule.c"
      case 7: // $bb6
        var $22=___errno_location(); //@line 2785 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2785 "socketmodule.c"
        HEAP[$saved_errno]=$23; //@line 2785 "socketmodule.c"
        var $24=_PyErr_CheckSignals(); //@line 2789 "socketmodule.c"
        var $25=((($24))|0)!=0; //@line 2789 "socketmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2789 "socketmodule.c"
      case 8: // $bb7
        _PyBuffer_Release($pbuf); //@line 2790 "socketmodule.c"
        HEAP[$0]=0; //@line 2791 "socketmodule.c"
        __label__ = 16; break; //@line 2791 "socketmodule.c"
      case 9: // $bb8
        var $26=HEAP[$n]; //@line 2793 "socketmodule.c"
        var $27=((($26))|0) < 0; //@line 2793 "socketmodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2793 "socketmodule.c"
      case 10: // $bb9
        var $28=HEAP[$saved_errno]; //@line 2795 "socketmodule.c"
        var $29=((($28))|0)==4; //@line 2795 "socketmodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2795 "socketmodule.c"
      case 11: // $bb10
        var $30=HEAP[$buf]; //@line 2800 "socketmodule.c"
        var $31=HEAP[$n]; //@line 2800 "socketmodule.c"
        var $32=(($30+$31)&4294967295); //@line 2800 "socketmodule.c"
        HEAP[$buf]=$32; //@line 2800 "socketmodule.c"
        var $33=HEAP[$len]; //@line 2801 "socketmodule.c"
        var $34=HEAP[$n]; //@line 2801 "socketmodule.c"
        var $35=((($33) - ($34))&4294967295); //@line 2801 "socketmodule.c"
        HEAP[$len]=$35; //@line 2801 "socketmodule.c"
        __label__ = 12; break; //@line 2801 "socketmodule.c"
      case 12: // $bb11
        var $36=HEAP[$len]; //@line 2802 "socketmodule.c"
        var $37=((($36))|0) > 0; //@line 2802 "socketmodule.c"
        if ($37) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 2802 "socketmodule.c"
      case 13: // $bb12
        _PyBuffer_Release($pbuf); //@line 2803 "socketmodule.c"
        var $38=HEAP[$n]; //@line 2805 "socketmodule.c"
        var $39=((($38))|0) < 0; //@line 2805 "socketmodule.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2805 "socketmodule.c"
      case 14: // $bb13
        var $40=HEAP[$s_addr]; //@line 2806 "socketmodule.c"
        var $41=(($40+24)&4294967295); //@line 2806 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2806 "socketmodule.c"
        var $43=FUNCTION_TABLE[$42](); //@line 2806 "socketmodule.c"
        HEAP[$0]=$43; //@line 2806 "socketmodule.c"
        __label__ = 16; break; //@line 2806 "socketmodule.c"
      case 15: // $bb14
        var $44=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2808 "socketmodule.c"
        var $45=((($44) + 1)&4294967295); //@line 2808 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$45; //@line 2808 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2809 "socketmodule.c"
        __label__ = 16; break; //@line 2809 "socketmodule.c"
      case 16: // $bb15
        var $46=HEAP[$0]; //@line 2758 "socketmodule.c"
        HEAP[$retval]=$46; //@line 2758 "socketmodule.c"
        __label__ = 17; break; //@line 2758 "socketmodule.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 2758 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2758 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendto($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 232; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 232);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $1=__stackBase__+16;
        var $pbuf=__stackBase__+20;
        var $addro=__stackBase__+72;
        var $buf=__stackBase__+76;
        var $len=__stackBase__+80;
        var $addrbuf=__stackBase__+84;
        var $addrlen=__stackBase__+212;
        var $n=__stackBase__+216;
        var $flags=__stackBase__+220;
        var $timeout=__stackBase__+224;
        var $arglen=__stackBase__+228;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$args_addr]=$args;
        HEAP[$n]=-1; //@line 2831 "socketmodule.c"
        HEAP[$flags]=0; //@line 2834 "socketmodule.c"
        var $2=HEAP[$args_addr]; //@line 2835 "socketmodule.c"
        var $3=_PyTuple_Size($2); //@line 2835 "socketmodule.c"
        HEAP[$arglen]=$3; //@line 2835 "socketmodule.c"
        var $4=HEAP[$arglen]; //@line 2836 "socketmodule.c"
        if ($4 == 2) {
          __label__ = 1; break;
        }
        else if ($4 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $5=HEAP[$args_addr]; //@line 2838 "socketmodule.c"
        var $6=_PyArg_ParseTuple($5, ((__str61)&4294967295), $pbuf, $addro); //@line 2838 "socketmodule.c"
        __label__ = 4; break; //@line 2838 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$args_addr]; //@line 2841 "socketmodule.c"
        var $8=_PyArg_ParseTuple($7, ((__str62)&4294967295), $pbuf, $flags, $addro); //@line 2841 "socketmodule.c"
        __label__ = 4; break; //@line 2841 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_TypeError]; //@line 2844 "socketmodule.c"
        var $10=HEAP[$arglen]; //@line 2844 "socketmodule.c"
        var $11=_PyErr_Format($9, ((__str63)&4294967295), $10); //@line 2844 "socketmodule.c"
        __label__ = 4; break; //@line 2844 "socketmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 2847 "socketmodule.c"
        var $13=($12)!=0; //@line 2847 "socketmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2847 "socketmodule.c"
      case 5: // $bb4
        HEAP[$1]=0; //@line 2848 "socketmodule.c"
        __label__ = 15; break; //@line 2848 "socketmodule.c"
      case 6: // $bb5
        var $14=(($pbuf)&4294967295); //@line 2850 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2850 "socketmodule.c"
        HEAP[$buf]=$15; //@line 2850 "socketmodule.c"
        var $16=(($pbuf+8)&4294967295); //@line 2851 "socketmodule.c"
        var $17=HEAP[$16]; //@line 2851 "socketmodule.c"
        HEAP[$len]=$17; //@line 2851 "socketmodule.c"
        var $addrbuf6=$addrbuf; //@line 2858 "socketmodule.c"
        var $18=HEAP[$addro]; //@line 2858 "socketmodule.c"
        var $19=HEAP[$s_addr]; //@line 2858 "socketmodule.c"
        var $20=_getsockaddrarg($19, $18, $addrbuf6, $addrlen); //@line 2858 "socketmodule.c"
        var $21=((($20))|0)==0; //@line 2858 "socketmodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2858 "socketmodule.c"
      case 7: // $bb8
        _PyBuffer_Release($pbuf); //@line 2859 "socketmodule.c"
        HEAP[$1]=0; //@line 2860 "socketmodule.c"
        __label__ = 15; break; //@line 2860 "socketmodule.c"
      case 8: // $bb9
        var $22=HEAP[$s_addr]; //@line 2864 "socketmodule.c"
        var $23=_internal_select($22, 1); //@line 2864 "socketmodule.c"
        HEAP[$timeout]=$23; //@line 2864 "socketmodule.c"
        var $24=HEAP[$timeout]; //@line 2865 "socketmodule.c"
        var $25=((($24))|0)==0; //@line 2865 "socketmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2865 "socketmodule.c"
      case 9: // $bb10
        var $26=HEAP[$addrlen]; //@line 2866 "socketmodule.c"
        var $addrbuf11=$addrbuf; //@line 2866 "socketmodule.c"
        var $27=(($0)&4294967295); //@line 2866 "socketmodule.c"
        HEAP[$27]=$addrbuf11; //@line 2866 "socketmodule.c"
        var $28=HEAP[$flags]; //@line 2866 "socketmodule.c"
        var $29=HEAP[$len]; //@line 2866 "socketmodule.c"
        var $30=HEAP[$s_addr]; //@line 2866 "socketmodule.c"
        var $31=(($30+8)&4294967295); //@line 2866 "socketmodule.c"
        var $32=HEAP[$31]; //@line 2866 "socketmodule.c"
        var $33=HEAP[$buf]; //@line 2866 "socketmodule.c"
        var $elt=(($0)&4294967295); //@line 2866 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2866 "socketmodule.c"
        var $34=_sendto($32, $33, $29, $28, $val, $26); //@line 2866 "socketmodule.c"
        HEAP[$n]=$34; //@line 2866 "socketmodule.c"
        __label__ = 10; break; //@line 2866 "socketmodule.c"
      case 10: // $bb13
        _PyBuffer_Release($pbuf); //@line 2869 "socketmodule.c"
        var $35=HEAP[$timeout]; //@line 2870 "socketmodule.c"
        var $36=((($35))|0)==1; //@line 2870 "socketmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2870 "socketmodule.c"
      case 11: // $bb14
        var $37=HEAP[_socket_timeout]; //@line 2871 "socketmodule.c"
        _PyErr_SetString($37, ((__str35)&4294967295)); //@line 2871 "socketmodule.c"
        HEAP[$1]=0; //@line 2872 "socketmodule.c"
        __label__ = 15; break; //@line 2872 "socketmodule.c"
      case 12: // $bb15
        var $38=HEAP[$n]; //@line 2874 "socketmodule.c"
        var $39=((($38))|0) < 0; //@line 2874 "socketmodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2874 "socketmodule.c"
      case 13: // $bb16
        var $40=HEAP[$s_addr]; //@line 2875 "socketmodule.c"
        var $41=(($40+24)&4294967295); //@line 2875 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2875 "socketmodule.c"
        var $43=FUNCTION_TABLE[$42](); //@line 2875 "socketmodule.c"
        HEAP[$1]=$43; //@line 2875 "socketmodule.c"
        __label__ = 15; break; //@line 2875 "socketmodule.c"
      case 14: // $bb17
        var $44=HEAP[$n]; //@line 2876 "socketmodule.c"
        var $45=_PyInt_FromLong($44); //@line 2876 "socketmodule.c"
        HEAP[$1]=$45; //@line 2876 "socketmodule.c"
        __label__ = 15; break; //@line 2876 "socketmodule.c"
      case 15: // $bb18
        var $46=HEAP[$1]; //@line 2848 "socketmodule.c"
        HEAP[$retval]=$46; //@line 2848 "socketmodule.c"
        __label__ = 16; break; //@line 2848 "socketmodule.c"
      case 16: // $return
        var $retval19=HEAP[$retval]; //@line 2848 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2848 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_shutdown($s, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $how=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 2894 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2894 "socketmodule.c"
        HEAP[$how]=$2; //@line 2894 "socketmodule.c"
        var $3=HEAP[$how]; //@line 2895 "socketmodule.c"
        var $4=((($3))|0)==-1; //@line 2895 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2895 "socketmodule.c"
        var $6=($5)!=0; //@line 2895 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 2896 "socketmodule.c"
        __label__ = 6; break; //@line 2896 "socketmodule.c"
      case 3: // $bb2
        var $7=HEAP[$s_addr]; //@line 2898 "socketmodule.c"
        var $8=(($7+8)&4294967295); //@line 2898 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2898 "socketmodule.c"
        var $10=HEAP[$how]; //@line 2898 "socketmodule.c"
        var $11=_shutdown($9, $10); //@line 2898 "socketmodule.c"
        HEAP[$res]=$11; //@line 2898 "socketmodule.c"
        var $12=HEAP[$res]; //@line 2900 "socketmodule.c"
        var $13=((($12))|0) < 0; //@line 2900 "socketmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2900 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$s_addr]; //@line 2901 "socketmodule.c"
        var $15=(($14+24)&4294967295); //@line 2901 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2901 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 2901 "socketmodule.c"
        HEAP[$0]=$17; //@line 2901 "socketmodule.c"
        __label__ = 6; break; //@line 2901 "socketmodule.c"
      case 5: // $bb4
        var $18=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2902 "socketmodule.c"
        var $19=((($18) + 1)&4294967295); //@line 2902 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$19; //@line 2902 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2903 "socketmodule.c"
        __label__ = 6; break; //@line 2903 "socketmodule.c"
      case 6: // $bb5
        var $20=HEAP[$0]; //@line 2896 "socketmodule.c"
        HEAP[$retval]=$20; //@line 2896 "socketmodule.c"
        __label__ = 7; break; //@line 2896 "socketmodule.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 2896 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 2896 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_dealloc($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $0=HEAP[$s_addr]; //@line 3040 "socketmodule.c"
        var $1=(($0+8)&4294967295); //@line 3040 "socketmodule.c"
        var $2=HEAP[$1]; //@line 3040 "socketmodule.c"
        var $3=((($2))|0)!=-1; //@line 3040 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3040 "socketmodule.c"
      case 1: // $bb
        var $4=HEAP[$s_addr]; //@line 3041 "socketmodule.c"
        var $5=(($4+8)&4294967295); //@line 3041 "socketmodule.c"
        var $6=HEAP[$5]; //@line 3041 "socketmodule.c"
        var $7=_close($6); //@line 3041 "socketmodule.c"
        __label__ = 2; break; //@line 3041 "socketmodule.c"
      case 2: // $bb1
        var $8=HEAP[$s_addr]; //@line 3042 "socketmodule.c"
        var $9=$8; //@line 3042 "socketmodule.c"
        var $10=(($9+4)&4294967295); //@line 3042 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3042 "socketmodule.c"
        var $12=(($11+160)&4294967295); //@line 3042 "socketmodule.c"
        var $13=HEAP[$12]; //@line 3042 "socketmodule.c"
        var $14=HEAP[$s_addr]; //@line 3042 "socketmodule.c"
        var $15=$14; //@line 3042 "socketmodule.c"
        FUNCTION_TABLE[$13]($15); //@line 3042 "socketmodule.c"
        __label__ = 3; break; //@line 3043 "socketmodule.c"
      case 3: // $return
        STACKTOP = __stackBase__;
        return; //@line 3043 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_repr($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 524; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 524);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $buf=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$s_addr]; //@line 3061 "socketmodule.c"
        var $2=(($1+20)&4294967295); //@line 3061 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3061 "socketmodule.c"
        var $4=HEAP[$s_addr]; //@line 3061 "socketmodule.c"
        var $5=(($4+16)&4294967295); //@line 3061 "socketmodule.c"
        var $6=HEAP[$5]; //@line 3061 "socketmodule.c"
        var $7=HEAP[$s_addr]; //@line 3061 "socketmodule.c"
        var $8=(($7+12)&4294967295); //@line 3061 "socketmodule.c"
        var $9=HEAP[$8]; //@line 3061 "socketmodule.c"
        var $10=HEAP[$s_addr]; //@line 3061 "socketmodule.c"
        var $11=(($10+8)&4294967295); //@line 3061 "socketmodule.c"
        var $12=HEAP[$11]; //@line 3061 "socketmodule.c"
        var $buf1=$buf; //@line 3061 "socketmodule.c"
        var $13=_PyOS_snprintf($buf1, 512, ((__str96)&4294967295), $12, $9, $6, $3); //@line 3061 "socketmodule.c"
        var $buf2=$buf; //@line 3067 "socketmodule.c"
        var $14=_PyString_FromString($buf2); //@line 3067 "socketmodule.c"
        HEAP[$0]=$14; //@line 3067 "socketmodule.c"
        var $15=HEAP[$0]; //@line 3067 "socketmodule.c"
        HEAP[$retval]=$15; //@line 3067 "socketmodule.c"
        __label__ = 1; break; //@line 3067 "socketmodule.c"
      case 1: // $return
        var $retval3=HEAP[$retval]; //@line 3067 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 3067 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $new=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$type_addr]; //@line 3078 "socketmodule.c"
        var $2=(($1+152)&4294967295); //@line 3078 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3078 "socketmodule.c"
        var $4=HEAP[$type_addr]; //@line 3078 "socketmodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 3078 "socketmodule.c"
        HEAP[$new]=$5; //@line 3078 "socketmodule.c"
        var $6=HEAP[$new]; //@line 3079 "socketmodule.c"
        var $7=($6)!=0; //@line 3079 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3079 "socketmodule.c"
      case 1: // $bb
        var $8=HEAP[$new]; //@line 3080 "socketmodule.c"
        var $9=$8; //@line 3080 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 3080 "socketmodule.c"
        HEAP[$10]=-1; //@line 3080 "socketmodule.c"
        var $11=HEAP[$new]; //@line 3081 "socketmodule.c"
        var $12=$11; //@line 3081 "socketmodule.c"
        var $13=(($12+28)&4294967295); //@line 3081 "socketmodule.c"
        HEAP[$13]=-1; //@line 3081 "socketmodule.c"
        var $14=HEAP[$new]; //@line 3082 "socketmodule.c"
        var $15=$14; //@line 3082 "socketmodule.c"
        var $16=(($15+24)&4294967295); //@line 3082 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 3082 "socketmodule.c"
        __label__ = 2; break; //@line 3082 "socketmodule.c"
      case 2: // $bb1
        var $17=HEAP[$new]; //@line 3084 "socketmodule.c"
        HEAP[$0]=$17; //@line 3084 "socketmodule.c"
        var $18=HEAP[$0]; //@line 3084 "socketmodule.c"
        HEAP[$retval]=$18; //@line 3084 "socketmodule.c"
        __label__ = 3; break; //@line 3084 "socketmodule.c"
      case 3: // $return
        var $retval2=HEAP[$retval]; //@line 3084 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval2; //@line 3084 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_initobj($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $s=__stackBase__+20;
        var $fd=__stackBase__+24;
        var $family=__stackBase__+28;
        var $type=__stackBase__+32;
        var $proto=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$self_addr]; //@line 3094 "socketmodule.c"
        var $2=$1; //@line 3094 "socketmodule.c"
        HEAP[$s]=$2; //@line 3094 "socketmodule.c"
        HEAP[$family]=2; //@line 3096 "socketmodule.c"
        HEAP[$type]=1; //@line 3096 "socketmodule.c"
        HEAP[$proto]=0; //@line 3096 "socketmodule.c"
        var $3=HEAP[$args_addr]; //@line 3099 "socketmodule.c"
        var $4=HEAP[$kwds_addr]; //@line 3099 "socketmodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, ((__str97)&4294967295), ((_keywords_11267)&4294967295), $family, $type, $proto); //@line 3099 "socketmodule.c"
        var $6=((($5))|0)==0; //@line 3099 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3099 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 3102 "socketmodule.c"
        __label__ = 5; break; //@line 3102 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$proto]; //@line 3105 "socketmodule.c"
        var $8=HEAP[$type]; //@line 3105 "socketmodule.c"
        var $9=HEAP[$family]; //@line 3105 "socketmodule.c"
        var $10=_socket($9, $8, $7); //@line 3105 "socketmodule.c"
        HEAP[$fd]=$10; //@line 3105 "socketmodule.c"
        var $11=HEAP[$fd]; //@line 3111 "socketmodule.c"
        var $12=((($11))|0) < 0; //@line 3111 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3111 "socketmodule.c"
      case 3: // $bb2
        var $13=_set_error(); //@line 3114 "socketmodule.c"
        HEAP[$0]=-1; //@line 3115 "socketmodule.c"
        __label__ = 5; break; //@line 3115 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$proto]; //@line 3117 "socketmodule.c"
        var $15=HEAP[$type]; //@line 3117 "socketmodule.c"
        var $16=HEAP[$family]; //@line 3117 "socketmodule.c"
        var $17=HEAP[$s]; //@line 3117 "socketmodule.c"
        var $18=HEAP[$fd]; //@line 3117 "socketmodule.c"
        _init_sockobject($17, $18, $16, $15, $14); //@line 3117 "socketmodule.c"
        HEAP[$0]=0; //@line 3119 "socketmodule.c"
        __label__ = 5; break; //@line 3119 "socketmodule.c"
      case 5: // $bb4
        var $19=HEAP[$0]; //@line 3102 "socketmodule.c"
        HEAP[$retval]=$19; //@line 3102 "socketmodule.c"
        __label__ = 6; break; //@line 3102 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3102 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3102 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostname($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 1044; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1044);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $unused_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $res=__stackBase__+1040;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$unused_addr]=$unused;
        var $buf1=$buf; //@line 3178 "socketmodule.c"
        var $1=_gethostname($buf1, 1023); //@line 3178 "socketmodule.c"
        HEAP[$res]=$1; //@line 3178 "socketmodule.c"
        var $2=HEAP[$res]; //@line 3180 "socketmodule.c"
        var $3=((($2))|0) < 0; //@line 3180 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3180 "socketmodule.c"
      case 1: // $bb
        var $4=_set_error(); //@line 3181 "socketmodule.c"
        HEAP[$0]=$4; //@line 3181 "socketmodule.c"
        __label__ = 3; break; //@line 3181 "socketmodule.c"
      case 2: // $bb2
        var $5=(($buf+1023)&4294967295); //@line 3182 "socketmodule.c"
        HEAP[$5]=0; //@line 3182 "socketmodule.c"
        var $buf3=$buf; //@line 3183 "socketmodule.c"
        var $6=_PyString_FromString($buf3); //@line 3183 "socketmodule.c"
        HEAP[$0]=$6; //@line 3183 "socketmodule.c"
        __label__ = 3; break; //@line 3183 "socketmodule.c"
      case 3: // $bb4
        var $7=HEAP[$0]; //@line 3181 "socketmodule.c"
        HEAP[$retval]=$7; //@line 3181 "socketmodule.c"
        __label__ = 4; break; //@line 3181 "socketmodule.c"
      case 4: // $return
        var $retval5=HEAP[$retval]; //@line 3181 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3181 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 148; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 148);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $addrbuf=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3201 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str99)&4294967295), $name); //@line 3201 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3201 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3201 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3202 "socketmodule.c"
        __label__ = 5; break; //@line 3202 "socketmodule.c"
      case 2: // $bb1
        var $addrbuf2=$addrbuf; //@line 3203 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3203 "socketmodule.c"
        var $5=_setipaddr($4, $addrbuf2, 128, 2); //@line 3203 "socketmodule.c"
        var $6=((($5))|0) < 0; //@line 3203 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3203 "socketmodule.c"
      case 3: // $bb4
        HEAP[$0]=0; //@line 3204 "socketmodule.c"
        __label__ = 5; break; //@line 3204 "socketmodule.c"
      case 4: // $bb5
        var $addrbuf6=$addrbuf; //@line 3205 "socketmodule.c"
        var $7=_makeipaddr($addrbuf6, 16); //@line 3205 "socketmodule.c"
        HEAP[$0]=$7; //@line 3205 "socketmodule.c"
        __label__ = 5; break; //@line 3205 "socketmodule.c"
      case 5: // $bb8
        var $8=HEAP[$0]; //@line 3202 "socketmodule.c"
        HEAP[$retval]=$8; //@line 3202 "socketmodule.c"
        __label__ = 6; break; //@line 3202 "socketmodule.c"
      case 6: // $return
        var $retval9=HEAP[$retval]; //@line 3202 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 3202 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gethost_common($h, $addr, $alen, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 96; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $h_addr=__stackBase__;
        var $addr_addr=__stackBase__+4;
        var $alen_addr=__stackBase__+8;
        var $af_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $pch=__stackBase__+24;
        var $rtn_tuple=__stackBase__+28;
        var $name_list=__stackBase__+32;
        var $addr_list=__stackBase__+36;
        var $tmp=__stackBase__+40;
        var $status=__stackBase__+44;
        var $status21=__stackBase__+48;
        var $sin=__stackBase__+52;
        var $sin6=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$h_addr]=$h;
        HEAP[$addr_addr]=$addr;
        HEAP[$alen_addr]=$alen;
        HEAP[$af_addr]=$af;
        HEAP[$rtn_tuple]=0; //@line 3220 "socketmodule.c"
        HEAP[$name_list]=0; //@line 3221 "socketmodule.c"
        HEAP[$addr_list]=0; //@line 3222 "socketmodule.c"
        var $1=HEAP[$h_addr]; //@line 3225 "socketmodule.c"
        var $2=($1)==0; //@line 3225 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3225 "socketmodule.c"
      case 1: // $bb
        var $3=___h_errno_location(); //@line 3228 "socketmodule.c"
        var $4=HEAP[$3]; //@line 3228 "socketmodule.c"
        var $5=_set_herror($4); //@line 3228 "socketmodule.c"
        HEAP[$0]=0; //@line 3232 "socketmodule.c"
        __label__ = 45; break; //@line 3232 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$h_addr]; //@line 3235 "socketmodule.c"
        var $7=(($6+8)&4294967295); //@line 3235 "socketmodule.c"
        var $8=HEAP[$7]; //@line 3235 "socketmodule.c"
        var $9=HEAP[$af_addr]; //@line 3235 "socketmodule.c"
        var $10=((($8))|0)!=((($9))|0); //@line 3235 "socketmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3235 "socketmodule.c"
      case 3: // $bb2
        var $11=_strerror(97); //@line 3237 "socketmodule.c"
        var $12=HEAP[_socket_error]; //@line 3237 "socketmodule.c"
        _PyErr_SetString($12, $11); //@line 3237 "socketmodule.c"
        HEAP[$0]=0; //@line 3240 "socketmodule.c"
        __label__ = 45; break; //@line 3240 "socketmodule.c"
      case 4: // $bb3
        var $13=HEAP[$af_addr]; //@line 3243 "socketmodule.c"
        if ($13 == 2) {
          __label__ = 5; break;
        }
        else if ($13 == 10) {
          __label__ = 8; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 5: // $bb4
        var $14=HEAP[$alen_addr]; //@line 3246 "socketmodule.c"
        var $15=((($14))>>>0) <= 15; //@line 3246 "socketmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3246 "socketmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 3247 "socketmodule.c"
        __label__ = 45; break; //@line 3247 "socketmodule.c"
      case 7: // $bb6
        __label__ = 10; break; //@line 3247 "socketmodule.c"
      case 8: // $bb7
        var $16=HEAP[$alen_addr]; //@line 3252 "socketmodule.c"
        var $17=((($16))>>>0) <= 27; //@line 3252 "socketmodule.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3252 "socketmodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 3253 "socketmodule.c"
        __label__ = 45; break; //@line 3253 "socketmodule.c"
      case 10: // $bb9
        var $18=_PyList_New(0); //@line 3259 "socketmodule.c"
        HEAP[$name_list]=$18; //@line 3259 "socketmodule.c"
        var $19=HEAP[$name_list]; //@line 3259 "socketmodule.c"
        var $20=($19)==0; //@line 3259 "socketmodule.c"
        if ($20) { __label__ = 38; break; } else { __label__ = 11; break; } //@line 3259 "socketmodule.c"
      case 11: // $bb10
        var $21=_PyList_New(0); //@line 3262 "socketmodule.c"
        HEAP[$addr_list]=$21; //@line 3262 "socketmodule.c"
        var $22=HEAP[$addr_list]; //@line 3262 "socketmodule.c"
        var $23=($22)==0; //@line 3262 "socketmodule.c"
        if ($23) { __label__ = 38; break; } else { __label__ = 12; break; } //@line 3262 "socketmodule.c"
      case 12: // $bb11
        var $24=HEAP[$h_addr]; //@line 3266 "socketmodule.c"
        var $25=(($24+4)&4294967295); //@line 3266 "socketmodule.c"
        var $26=HEAP[$25]; //@line 3266 "socketmodule.c"
        var $27=($26)!=0; //@line 3266 "socketmodule.c"
        if ($27) { __label__ = 13; break; } else { __label__ = 20; break; } //@line 3266 "socketmodule.c"
      case 13: // $bb12
        var $28=HEAP[$h_addr]; //@line 3267 "socketmodule.c"
        var $29=(($28+4)&4294967295); //@line 3267 "socketmodule.c"
        var $30=HEAP[$29]; //@line 3267 "socketmodule.c"
        HEAP[$pch]=$30; //@line 3267 "socketmodule.c"
        __label__ = 19; break; //@line 3267 "socketmodule.c"
      case 14: // $bb13
        var $31=HEAP[$pch]; //@line 3269 "socketmodule.c"
        var $32=HEAP[$31]; //@line 3269 "socketmodule.c"
        var $33=_PyString_FromString($32); //@line 3269 "socketmodule.c"
        HEAP[$tmp]=$33; //@line 3269 "socketmodule.c"
        var $34=HEAP[$tmp]; //@line 3270 "socketmodule.c"
        var $35=($34)==0; //@line 3270 "socketmodule.c"
        if ($35) { __label__ = 38; break; } else { __label__ = 15; break; } //@line 3270 "socketmodule.c"
      case 15: // $bb14
        var $36=HEAP[$name_list]; //@line 3273 "socketmodule.c"
        var $37=HEAP[$tmp]; //@line 3273 "socketmodule.c"
        var $38=_PyList_Append($36, $37); //@line 3273 "socketmodule.c"
        HEAP[$status]=$38; //@line 3273 "socketmodule.c"
        var $39=HEAP[$tmp]; //@line 3274 "socketmodule.c"
        var $40=(($39)&4294967295); //@line 3274 "socketmodule.c"
        var $41=HEAP[$40]; //@line 3274 "socketmodule.c"
        var $42=((($41) - 1)&4294967295); //@line 3274 "socketmodule.c"
        var $43=HEAP[$tmp]; //@line 3274 "socketmodule.c"
        var $44=(($43)&4294967295); //@line 3274 "socketmodule.c"
        HEAP[$44]=$42; //@line 3274 "socketmodule.c"
        var $45=HEAP[$tmp]; //@line 3274 "socketmodule.c"
        var $46=(($45)&4294967295); //@line 3274 "socketmodule.c"
        var $47=HEAP[$46]; //@line 3274 "socketmodule.c"
        var $48=((($47))|0)==0; //@line 3274 "socketmodule.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3274 "socketmodule.c"
      case 16: // $bb15
        var $49=HEAP[$tmp]; //@line 3274 "socketmodule.c"
        var $50=(($49+4)&4294967295); //@line 3274 "socketmodule.c"
        var $51=HEAP[$50]; //@line 3274 "socketmodule.c"
        var $52=(($51+24)&4294967295); //@line 3274 "socketmodule.c"
        var $53=HEAP[$52]; //@line 3274 "socketmodule.c"
        var $54=HEAP[$tmp]; //@line 3274 "socketmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 3274 "socketmodule.c"
        __label__ = 17; break; //@line 3274 "socketmodule.c"
      case 17: // $bb16
        var $55=HEAP[$status]; //@line 3276 "socketmodule.c"
        var $56=((($55))|0)!=0; //@line 3276 "socketmodule.c"
        if ($56) { __label__ = 38; break; } else { __label__ = 18; break; } //@line 3276 "socketmodule.c"
      case 18: // $bb17
        var $57=HEAP[$pch]; //@line 3267 "socketmodule.c"
        var $58=(($57+4)&4294967295); //@line 3267 "socketmodule.c"
        HEAP[$pch]=$58; //@line 3267 "socketmodule.c"
        __label__ = 19; break; //@line 3267 "socketmodule.c"
      case 19: // $bb18
        var $59=HEAP[$pch]; //@line 3267 "socketmodule.c"
        var $60=HEAP[$59]; //@line 3267 "socketmodule.c"
        var $61=($60)!=0; //@line 3267 "socketmodule.c"
        if ($61) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 3267 "socketmodule.c"
      case 20: // $bb19
        var $62=HEAP[$h_addr]; //@line 3281 "socketmodule.c"
        var $63=(($62+16)&4294967295); //@line 3281 "socketmodule.c"
        var $64=HEAP[$63]; //@line 3281 "socketmodule.c"
        HEAP[$pch]=$64; //@line 3281 "socketmodule.c"
        __label__ = 36; break; //@line 3281 "socketmodule.c"
      case 21: // $bb20
        var $65=HEAP[$af_addr]; //@line 3284 "socketmodule.c"
        if ($65 == 2) {
          __label__ = 22; break;
        }
        else if ($65 == 10) {
          __label__ = 26; break;
        }
        else {
        __label__ = 30; break;
        }
        
      case 22: // $bb22
        var $sin23=$sin; //@line 3289 "socketmodule.c"
        _llvm_memset_p0i8_i32($sin23, 0, 16, 1, 0); //@line 3289 "socketmodule.c"
        var $66=HEAP[$af_addr]; //@line 3290 "socketmodule.c"
        var $67=((($66)) & 65535); //@line 3290 "socketmodule.c"
        var $68=(($sin)&4294967295); //@line 3290 "socketmodule.c"
        HEAP[$68]=$67; //@line 3290 "socketmodule.c"
        var $69=HEAP[$pch]; //@line 3294 "socketmodule.c"
        var $70=HEAP[$69]; //@line 3294 "socketmodule.c"
        var $71=(($sin+4)&4294967295); //@line 3294 "socketmodule.c"
        var $72=$71; //@line 3294 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($72, $70, 4, 1, 0); //@line 3294 "socketmodule.c"
        var $sin24=$sin; //@line 3295 "socketmodule.c"
        var $73=_makeipaddr($sin24, 16); //@line 3295 "socketmodule.c"
        HEAP[$tmp]=$73; //@line 3295 "socketmodule.c"
        var $74=HEAP[$h_addr]; //@line 3297 "socketmodule.c"
        var $75=(($74+16)&4294967295); //@line 3297 "socketmodule.c"
        var $76=HEAP[$75]; //@line 3297 "socketmodule.c"
        var $77=HEAP[$pch]; //@line 3297 "socketmodule.c"
        var $78=($76)==($77); //@line 3297 "socketmodule.c"
        if ($78) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 3297 "socketmodule.c"
      case 23: // $bb26
        var $79=HEAP[$alen_addr]; //@line 3297 "socketmodule.c"
        var $80=((($79))>>>0) > 15; //@line 3297 "socketmodule.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 3297 "socketmodule.c"
      case 24: // $bb27
        var $81=HEAP[$addr_addr]; //@line 3298 "socketmodule.c"
        var $82=$81; //@line 3298 "socketmodule.c"
        var $sin28=$sin; //@line 3298 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($82, $sin28, 16, 1, 0); //@line 3298 "socketmodule.c"
        __label__ = 25; break; //@line 3298 "socketmodule.c"
      case 25: // $bb29
        __label__ = 31; break; //@line 3298 "socketmodule.c"
      case 26: // $bb30
        var $sin631=$sin6; //@line 3306 "socketmodule.c"
        _llvm_memset_p0i8_i32($sin631, 0, 28, 1, 0); //@line 3306 "socketmodule.c"
        var $83=HEAP[$af_addr]; //@line 3307 "socketmodule.c"
        var $84=((($83)) & 65535); //@line 3307 "socketmodule.c"
        var $85=(($sin6)&4294967295); //@line 3307 "socketmodule.c"
        HEAP[$85]=$84; //@line 3307 "socketmodule.c"
        var $86=HEAP[$pch]; //@line 3311 "socketmodule.c"
        var $87=HEAP[$86]; //@line 3311 "socketmodule.c"
        var $88=(($sin6+8)&4294967295); //@line 3311 "socketmodule.c"
        var $89=$88; //@line 3311 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($89, $87, 16, 1, 0); //@line 3311 "socketmodule.c"
        var $sin632=$sin6; //@line 3312 "socketmodule.c"
        var $90=_makeipaddr($sin632, 28); //@line 3312 "socketmodule.c"
        HEAP[$tmp]=$90; //@line 3312 "socketmodule.c"
        var $91=HEAP[$h_addr]; //@line 3315 "socketmodule.c"
        var $92=(($91+16)&4294967295); //@line 3315 "socketmodule.c"
        var $93=HEAP[$92]; //@line 3315 "socketmodule.c"
        var $94=HEAP[$pch]; //@line 3315 "socketmodule.c"
        var $95=($93)==($94); //@line 3315 "socketmodule.c"
        if ($95) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 3315 "socketmodule.c"
      case 27: // $bb34
        var $96=HEAP[$alen_addr]; //@line 3315 "socketmodule.c"
        var $97=((($96))>>>0) > 27; //@line 3315 "socketmodule.c"
        if ($97) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 3315 "socketmodule.c"
      case 28: // $bb35
        var $98=HEAP[$addr_addr]; //@line 3316 "socketmodule.c"
        var $99=$98; //@line 3316 "socketmodule.c"
        var $sin636=$sin6; //@line 3316 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($99, $sin636, 28, 1, 0); //@line 3316 "socketmodule.c"
        __label__ = 29; break; //@line 3316 "socketmodule.c"
      case 29: // $bb37
        __label__ = 31; break; //@line 3316 "socketmodule.c"
      case 30: // $bb38
        var $100=HEAP[_socket_error]; //@line 3322 "socketmodule.c"
        _PyErr_SetString($100, ((__str3)&4294967295)); //@line 3322 "socketmodule.c"
        HEAP[$0]=0; //@line 3324 "socketmodule.c"
        __label__ = 45; break; //@line 3324 "socketmodule.c"
      case 31: // $bb39
        var $101=HEAP[$tmp]; //@line 3327 "socketmodule.c"
        var $102=($101)==0; //@line 3327 "socketmodule.c"
        if ($102) { __label__ = 38; break; } else { __label__ = 32; break; } //@line 3327 "socketmodule.c"
      case 32: // $bb40
        var $103=HEAP[$addr_list]; //@line 3330 "socketmodule.c"
        var $104=HEAP[$tmp]; //@line 3330 "socketmodule.c"
        var $105=_PyList_Append($103, $104); //@line 3330 "socketmodule.c"
        HEAP[$status21]=$105; //@line 3330 "socketmodule.c"
        var $106=HEAP[$tmp]; //@line 3331 "socketmodule.c"
        var $107=(($106)&4294967295); //@line 3331 "socketmodule.c"
        var $108=HEAP[$107]; //@line 3331 "socketmodule.c"
        var $109=((($108) - 1)&4294967295); //@line 3331 "socketmodule.c"
        var $110=HEAP[$tmp]; //@line 3331 "socketmodule.c"
        var $111=(($110)&4294967295); //@line 3331 "socketmodule.c"
        HEAP[$111]=$109; //@line 3331 "socketmodule.c"
        var $112=HEAP[$tmp]; //@line 3331 "socketmodule.c"
        var $113=(($112)&4294967295); //@line 3331 "socketmodule.c"
        var $114=HEAP[$113]; //@line 3331 "socketmodule.c"
        var $115=((($114))|0)==0; //@line 3331 "socketmodule.c"
        if ($115) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 3331 "socketmodule.c"
      case 33: // $bb41
        var $116=HEAP[$tmp]; //@line 3331 "socketmodule.c"
        var $117=(($116+4)&4294967295); //@line 3331 "socketmodule.c"
        var $118=HEAP[$117]; //@line 3331 "socketmodule.c"
        var $119=(($118+24)&4294967295); //@line 3331 "socketmodule.c"
        var $120=HEAP[$119]; //@line 3331 "socketmodule.c"
        var $121=HEAP[$tmp]; //@line 3331 "socketmodule.c"
        FUNCTION_TABLE[$120]($121); //@line 3331 "socketmodule.c"
        __label__ = 34; break; //@line 3331 "socketmodule.c"
      case 34: // $bb42
        var $122=HEAP[$status21]; //@line 3333 "socketmodule.c"
        var $123=((($122))|0)!=0; //@line 3333 "socketmodule.c"
        if ($123) { __label__ = 38; break; } else { __label__ = 35; break; } //@line 3333 "socketmodule.c"
      case 35: // $bb43
        var $124=HEAP[$pch]; //@line 3281 "socketmodule.c"
        var $125=(($124+4)&4294967295); //@line 3281 "socketmodule.c"
        HEAP[$pch]=$125; //@line 3281 "socketmodule.c"
        __label__ = 36; break; //@line 3281 "socketmodule.c"
      case 36: // $bb44
        var $126=HEAP[$pch]; //@line 3281 "socketmodule.c"
        var $127=HEAP[$126]; //@line 3281 "socketmodule.c"
        var $128=($127)!=0; //@line 3281 "socketmodule.c"
        if ($128) { __label__ = 21; break; } else { __label__ = 37; break; } //@line 3281 "socketmodule.c"
      case 37: // $bb45
        var $129=HEAP[$h_addr]; //@line 3337 "socketmodule.c"
        var $130=(($129)&4294967295); //@line 3337 "socketmodule.c"
        var $131=HEAP[$130]; //@line 3337 "socketmodule.c"
        var $132=HEAP[$name_list]; //@line 3337 "socketmodule.c"
        var $133=HEAP[$addr_list]; //@line 3337 "socketmodule.c"
        var $134=_Py_BuildValue(((__str100)&4294967295), $131, $132, $133); //@line 3337 "socketmodule.c"
        HEAP[$rtn_tuple]=$134; //@line 3337 "socketmodule.c"
        __label__ = 38; break; //@line 3339 "socketmodule.c"
      case 38: // $err
        var $135=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        var $136=($135)!=0; //@line 3340 "socketmodule.c"
        if ($136) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 3340 "socketmodule.c"
      case 39: // $bb46
        var $137=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        var $138=(($137)&4294967295); //@line 3340 "socketmodule.c"
        var $139=HEAP[$138]; //@line 3340 "socketmodule.c"
        var $140=((($139) - 1)&4294967295); //@line 3340 "socketmodule.c"
        var $141=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        var $142=(($141)&4294967295); //@line 3340 "socketmodule.c"
        HEAP[$142]=$140; //@line 3340 "socketmodule.c"
        var $143=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        var $144=(($143)&4294967295); //@line 3340 "socketmodule.c"
        var $145=HEAP[$144]; //@line 3340 "socketmodule.c"
        var $146=((($145))|0)==0; //@line 3340 "socketmodule.c"
        if ($146) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 3340 "socketmodule.c"
      case 40: // $bb47
        var $147=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        var $148=(($147+4)&4294967295); //@line 3340 "socketmodule.c"
        var $149=HEAP[$148]; //@line 3340 "socketmodule.c"
        var $150=(($149+24)&4294967295); //@line 3340 "socketmodule.c"
        var $151=HEAP[$150]; //@line 3340 "socketmodule.c"
        var $152=HEAP[$name_list]; //@line 3340 "socketmodule.c"
        FUNCTION_TABLE[$151]($152); //@line 3340 "socketmodule.c"
        __label__ = 41; break; //@line 3340 "socketmodule.c"
      case 41: // $bb48
        var $153=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        var $154=($153)!=0; //@line 3341 "socketmodule.c"
        if ($154) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 3341 "socketmodule.c"
      case 42: // $bb49
        var $155=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        var $156=(($155)&4294967295); //@line 3341 "socketmodule.c"
        var $157=HEAP[$156]; //@line 3341 "socketmodule.c"
        var $158=((($157) - 1)&4294967295); //@line 3341 "socketmodule.c"
        var $159=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        var $160=(($159)&4294967295); //@line 3341 "socketmodule.c"
        HEAP[$160]=$158; //@line 3341 "socketmodule.c"
        var $161=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        var $162=(($161)&4294967295); //@line 3341 "socketmodule.c"
        var $163=HEAP[$162]; //@line 3341 "socketmodule.c"
        var $164=((($163))|0)==0; //@line 3341 "socketmodule.c"
        if ($164) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 3341 "socketmodule.c"
      case 43: // $bb50
        var $165=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        var $166=(($165+4)&4294967295); //@line 3341 "socketmodule.c"
        var $167=HEAP[$166]; //@line 3341 "socketmodule.c"
        var $168=(($167+24)&4294967295); //@line 3341 "socketmodule.c"
        var $169=HEAP[$168]; //@line 3341 "socketmodule.c"
        var $170=HEAP[$addr_list]; //@line 3341 "socketmodule.c"
        FUNCTION_TABLE[$169]($170); //@line 3341 "socketmodule.c"
        __label__ = 44; break; //@line 3341 "socketmodule.c"
      case 44: // $bb51
        var $171=HEAP[$rtn_tuple]; //@line 3342 "socketmodule.c"
        HEAP[$0]=$171; //@line 3342 "socketmodule.c"
        __label__ = 45; break; //@line 3342 "socketmodule.c"
      case 45: // $bb52
        var $172=HEAP[$0]; //@line 3232 "socketmodule.c"
        HEAP[$retval]=$172; //@line 3232 "socketmodule.c"
        __label__ = 46; break; //@line 3232 "socketmodule.c"
      case 46: // $return
        var $retval53=HEAP[$retval]; //@line 3232 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval53; //@line 3232 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname_ex($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 160; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 160);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $h=__stackBase__+20;
        var $addr=__stackBase__+24;
        var $sa=__stackBase__+152;
        var $ret=__stackBase__+156;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3375 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str101)&4294967295), $name); //@line 3375 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3375 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3375 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3376 "socketmodule.c"
        __label__ = 5; break; //@line 3376 "socketmodule.c"
      case 2: // $bb1
        var $addr2=$addr; //@line 3377 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3377 "socketmodule.c"
        var $5=_setipaddr($4, $addr2, 128, 2); //@line 3377 "socketmodule.c"
        var $6=((($5))|0) < 0; //@line 3377 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3377 "socketmodule.c"
      case 3: // $bb4
        HEAP[$0]=0; //@line 3378 "socketmodule.c"
        __label__ = 5; break; //@line 3378 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$name]; //@line 3395 "socketmodule.c"
        var $8=_gethostbyname($7); //@line 3395 "socketmodule.c"
        HEAP[$h]=$8; //@line 3395 "socketmodule.c"
        var $addr6=$addr; //@line 3402 "socketmodule.c"
        HEAP[$sa]=$addr6; //@line 3402 "socketmodule.c"
        var $9=HEAP[$sa]; //@line 3403 "socketmodule.c"
        var $10=(($9)&4294967295); //@line 3403 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3403 "socketmodule.c"
        var $12=unSign(($11), 16, 0); //@line 3403 "socketmodule.c"
        var $addr7=$addr; //@line 3403 "socketmodule.c"
        var $13=HEAP[$h]; //@line 3403 "socketmodule.c"
        var $14=_gethost_common($13, $addr7, 128, $12); //@line 3403 "socketmodule.c"
        HEAP[$ret]=$14; //@line 3403 "socketmodule.c"
        var $15=HEAP[$ret]; //@line 3408 "socketmodule.c"
        HEAP[$0]=$15; //@line 3408 "socketmodule.c"
        __label__ = 5; break; //@line 3408 "socketmodule.c"
      case 5: // $bb9
        var $16=HEAP[$0]; //@line 3376 "socketmodule.c"
        HEAP[$retval]=$16; //@line 3376 "socketmodule.c"
        __label__ = 6; break; //@line 3376 "socketmodule.c"
      case 6: // $return
        var $retval10=HEAP[$retval]; //@line 3376 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 3376 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyaddr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 172; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 172);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $addr=__stackBase__+16;
        var $sa=__stackBase__+144;
        var $ip_num=__stackBase__+148;
        var $h=__stackBase__+152;
        var $ret=__stackBase__+156;
        var $ap=__stackBase__+160;
        var $al=__stackBase__+164;
        var $af=__stackBase__+168;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $addr1=$addr; //@line 3429 "socketmodule.c"
        HEAP[$sa]=$addr1; //@line 3429 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 3454 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str102)&4294967295), $ip_num); //@line 3454 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3454 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3454 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3455 "socketmodule.c"
        __label__ = 9; break; //@line 3455 "socketmodule.c"
      case 2: // $bb2
        HEAP[$af]=0; //@line 3456 "socketmodule.c"
        var $4=HEAP[$ip_num]; //@line 3457 "socketmodule.c"
        var $5=HEAP[$sa]; //@line 3457 "socketmodule.c"
        var $6=HEAP[$af]; //@line 3457 "socketmodule.c"
        var $7=_setipaddr($4, $5, 128, $6); //@line 3457 "socketmodule.c"
        var $8=((($7))|0) < 0; //@line 3457 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3457 "socketmodule.c"
      case 3: // $bb3
        HEAP[$0]=0; //@line 3458 "socketmodule.c"
        __label__ = 9; break; //@line 3458 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[$sa]; //@line 3459 "socketmodule.c"
        var $10=(($9)&4294967295); //@line 3459 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3459 "socketmodule.c"
        var $12=unSign(($11), 16, 0); //@line 3459 "socketmodule.c"
        HEAP[$af]=$12; //@line 3459 "socketmodule.c"
        HEAP[$ap]=0; //@line 3460 "socketmodule.c"
        var $13=HEAP[$af]; //@line 3461 "socketmodule.c"
        if ($13 == 2) {
          __label__ = 5; break;
        }
        else if ($13 == 10) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 5: // $bb5
        var $14=HEAP[$sa]; //@line 3463 "socketmodule.c"
        var $15=$14; //@line 3463 "socketmodule.c"
        var $16=(($15+4)&4294967295); //@line 3463 "socketmodule.c"
        var $17=$16; //@line 3463 "socketmodule.c"
        HEAP[$ap]=$17; //@line 3463 "socketmodule.c"
        HEAP[$al]=4; //@line 3464 "socketmodule.c"
        __label__ = 8; break; //@line 3464 "socketmodule.c"
      case 6: // $bb6
        var $18=HEAP[$sa]; //@line 3468 "socketmodule.c"
        var $19=$18; //@line 3468 "socketmodule.c"
        var $20=(($19+8)&4294967295); //@line 3468 "socketmodule.c"
        var $21=$20; //@line 3468 "socketmodule.c"
        HEAP[$ap]=$21; //@line 3468 "socketmodule.c"
        HEAP[$al]=16; //@line 3469 "socketmodule.c"
        __label__ = 8; break; //@line 3469 "socketmodule.c"
      case 7: // $bb7
        var $22=HEAP[_socket_error]; //@line 3473 "socketmodule.c"
        _PyErr_SetString($22, ((__str3)&4294967295)); //@line 3473 "socketmodule.c"
        HEAP[$0]=0; //@line 3474 "socketmodule.c"
        __label__ = 9; break; //@line 3474 "socketmodule.c"
      case 8: // $bb8
        var $23=HEAP[$al]; //@line 3494 "socketmodule.c"
        var $24=HEAP[$ap]; //@line 3494 "socketmodule.c"
        var $25=HEAP[$af]; //@line 3494 "socketmodule.c"
        var $26=_gethostbyaddr($24, $23, $25); //@line 3494 "socketmodule.c"
        HEAP[$h]=$26; //@line 3494 "socketmodule.c"
        var $addr9=$addr; //@line 3497 "socketmodule.c"
        var $27=HEAP[$h]; //@line 3497 "socketmodule.c"
        var $28=HEAP[$af]; //@line 3497 "socketmodule.c"
        var $29=_gethost_common($27, $addr9, 128, $28); //@line 3497 "socketmodule.c"
        HEAP[$ret]=$29; //@line 3497 "socketmodule.c"
        var $30=HEAP[$ret]; //@line 3501 "socketmodule.c"
        HEAP[$0]=$30; //@line 3501 "socketmodule.c"
        __label__ = 9; break; //@line 3501 "socketmodule.c"
      case 9: // $bb11
        var $31=HEAP[$0]; //@line 3455 "socketmodule.c"
        HEAP[$retval]=$31; //@line 3455 "socketmodule.c"
        __label__ = 10; break; //@line 3455 "socketmodule.c"
      case 10: // $return
        var $retval12=HEAP[$retval]; //@line 3455 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3455 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $proto=__stackBase__+20;
        var $sp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$proto]=0; //@line 3519 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 3521 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str103)&4294967295), $name, $proto); //@line 3521 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3521 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3521 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3522 "socketmodule.c"
        __label__ = 5; break; //@line 3522 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$proto]; //@line 3524 "socketmodule.c"
        var $5=HEAP[$name]; //@line 3524 "socketmodule.c"
        var $6=_getservbyname($5, $4); //@line 3524 "socketmodule.c"
        HEAP[$sp]=$6; //@line 3524 "socketmodule.c"
        var $7=HEAP[$sp]; //@line 3526 "socketmodule.c"
        var $8=($7)==0; //@line 3526 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3526 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_socket_error]; //@line 3527 "socketmodule.c"
        _PyErr_SetString($9, ((__str104)&4294967295)); //@line 3527 "socketmodule.c"
        HEAP[$0]=0; //@line 3528 "socketmodule.c"
        __label__ = 5; break; //@line 3528 "socketmodule.c"
      case 4: // $bb3
        var $10=HEAP[$sp]; //@line 3530 "socketmodule.c"
        var $11=(($10+8)&4294967295); //@line 3530 "socketmodule.c"
        var $12=HEAP[$11]; //@line 3530 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3530 "socketmodule.c"
        var $14=unSign(($13), 16, 0); //@line 3530 "socketmodule.c"
        var $15=((($14)) & 65535); //@line 3530 "socketmodule.c"
        var $16=_ntohs($15); //@line 3530 "socketmodule.c"
        var $17=unSign(($16), 16, 0); //@line 3530 "socketmodule.c"
        var $18=_PyInt_FromLong($17); //@line 3530 "socketmodule.c"
        HEAP[$0]=$18; //@line 3530 "socketmodule.c"
        __label__ = 5; break; //@line 3530 "socketmodule.c"
      case 5: // $bb4
        var $19=HEAP[$0]; //@line 3522 "socketmodule.c"
        HEAP[$retval]=$19; //@line 3522 "socketmodule.c"
        __label__ = 6; break; //@line 3522 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3522 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3522 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyport($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $port=__stackBase__+16;
        var $proto=__stackBase__+20;
        var $sp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$proto]=0; //@line 3550 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 3552 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str105)&4294967295), $port, $proto); //@line 3552 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3552 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3552 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3553 "socketmodule.c"
        __label__ = 8; break; //@line 3553 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $5=((($4))|0) < 0; //@line 3554 "socketmodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 3554 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $7=((($6))|0) > 65535; //@line 3554 "socketmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 3554 "socketmodule.c"
      case 4: // $bb3
        var $8=HEAP[_PyExc_OverflowError]; //@line 3555 "socketmodule.c"
        _PyErr_SetString($8, ((__str106)&4294967295)); //@line 3555 "socketmodule.c"
        HEAP[$0]=0; //@line 3558 "socketmodule.c"
        __label__ = 8; break; //@line 3558 "socketmodule.c"
      case 5: // $bb4
        var $9=HEAP[$proto]; //@line 3561 "socketmodule.c"
        var $10=HEAP[$port]; //@line 3561 "socketmodule.c"
        var $11=((($10)) & 65535); //@line 3561 "socketmodule.c"
        var $12=unSign(($11), 16, 0); //@line 3561 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3561 "socketmodule.c"
        var $14=_htons($13); //@line 3561 "socketmodule.c"
        var $15=unSign(($14), 16, 0); //@line 3561 "socketmodule.c"
        var $16=_getservbyport($15, $9); //@line 3561 "socketmodule.c"
        HEAP[$sp]=$16; //@line 3561 "socketmodule.c"
        var $17=HEAP[$sp]; //@line 3563 "socketmodule.c"
        var $18=($17)==0; //@line 3563 "socketmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3563 "socketmodule.c"
      case 6: // $bb5
        var $19=HEAP[_socket_error]; //@line 3564 "socketmodule.c"
        _PyErr_SetString($19, ((__str107)&4294967295)); //@line 3564 "socketmodule.c"
        HEAP[$0]=0; //@line 3565 "socketmodule.c"
        __label__ = 8; break; //@line 3565 "socketmodule.c"
      case 7: // $bb6
        var $20=HEAP[$sp]; //@line 3567 "socketmodule.c"
        var $21=(($20)&4294967295); //@line 3567 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3567 "socketmodule.c"
        var $23=_PyString_FromString($22); //@line 3567 "socketmodule.c"
        HEAP[$0]=$23; //@line 3567 "socketmodule.c"
        __label__ = 8; break; //@line 3567 "socketmodule.c"
      case 8: // $bb7
        var $24=HEAP[$0]; //@line 3553 "socketmodule.c"
        HEAP[$retval]=$24; //@line 3553 "socketmodule.c"
        __label__ = 9; break; //@line 3553 "socketmodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 3553 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 3553 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getprotobyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $name=__stackBase__+16;
        var $sp=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3592 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str108)&4294967295), $name); //@line 3592 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3592 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3592 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3593 "socketmodule.c"
        __label__ = 5; break; //@line 3593 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$name]; //@line 3595 "socketmodule.c"
        var $5=_getprotobyname($4); //@line 3595 "socketmodule.c"
        HEAP[$sp]=$5; //@line 3595 "socketmodule.c"
        var $6=HEAP[$sp]; //@line 3597 "socketmodule.c"
        var $7=($6)==0; //@line 3597 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3597 "socketmodule.c"
      case 3: // $bb2
        var $8=HEAP[_socket_error]; //@line 3598 "socketmodule.c"
        _PyErr_SetString($8, ((__str109)&4294967295)); //@line 3598 "socketmodule.c"
        HEAP[$0]=0; //@line 3599 "socketmodule.c"
        __label__ = 5; break; //@line 3599 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[$sp]; //@line 3601 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 3601 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3601 "socketmodule.c"
        var $12=_PyInt_FromLong($11); //@line 3601 "socketmodule.c"
        HEAP[$0]=$12; //@line 3601 "socketmodule.c"
        __label__ = 5; break; //@line 3601 "socketmodule.c"
      case 5: // $bb4
        var $13=HEAP[$0]; //@line 3593 "socketmodule.c"
        HEAP[$retval]=$13; //@line 3593 "socketmodule.c"
        __label__ = 6; break; //@line 3593 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3593 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3593 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_socketpair($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 48);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $s0=__stackBase__+16;
        var $s1=__stackBase__+20;
        var $sv=__stackBase__+24;
        var $family=__stackBase__+32;
        var $type=__stackBase__+36;
        var $proto=__stackBase__+40;
        var $res=__stackBase__+44;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$s0]=0; //@line 3620 "socketmodule.c"
        HEAP[$s1]=0; //@line 3620 "socketmodule.c"
        HEAP[$type]=1; //@line 3622 "socketmodule.c"
        HEAP[$proto]=0; //@line 3622 "socketmodule.c"
        HEAP[$res]=0; //@line 3623 "socketmodule.c"
        HEAP[$family]=1; //@line 3626 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 3630 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str110)&4294967295), $family, $type, $proto); //@line 3630 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3630 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3630 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3632 "socketmodule.c"
        __label__ = 19; break; //@line 3632 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$proto]; //@line 3634 "socketmodule.c"
        var $5=HEAP[$type]; //@line 3634 "socketmodule.c"
        var $6=HEAP[$family]; //@line 3634 "socketmodule.c"
        var $sv2=$sv; //@line 3634 "socketmodule.c"
        var $7=_socketpair($6, $5, $4, $sv2); //@line 3634 "socketmodule.c"
        var $8=((($7))|0) < 0; //@line 3634 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3634 "socketmodule.c"
      case 3: // $bb3
        var $9=_set_error(); //@line 3635 "socketmodule.c"
        HEAP[$0]=$9; //@line 3635 "socketmodule.c"
        __label__ = 19; break; //@line 3635 "socketmodule.c"
      case 4: // $bb4
        var $10=HEAP[$proto]; //@line 3636 "socketmodule.c"
        var $11=HEAP[$type]; //@line 3636 "socketmodule.c"
        var $12=HEAP[$family]; //@line 3636 "socketmodule.c"
        var $13=(($sv)&4294967295); //@line 3636 "socketmodule.c"
        var $14=HEAP[$13]; //@line 3636 "socketmodule.c"
        var $15=_new_sockobject($14, $12, $11, $10); //@line 3636 "socketmodule.c"
        HEAP[$s0]=$15; //@line 3636 "socketmodule.c"
        var $16=HEAP[$s0]; //@line 3637 "socketmodule.c"
        var $17=($16)==0; //@line 3637 "socketmodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 3637 "socketmodule.c"
      case 5: // $bb5
        var $18=HEAP[$proto]; //@line 3639 "socketmodule.c"
        var $19=HEAP[$type]; //@line 3639 "socketmodule.c"
        var $20=HEAP[$family]; //@line 3639 "socketmodule.c"
        var $21=(($sv+4)&4294967295); //@line 3639 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3639 "socketmodule.c"
        var $23=_new_sockobject($22, $20, $19, $18); //@line 3639 "socketmodule.c"
        HEAP[$s1]=$23; //@line 3639 "socketmodule.c"
        var $24=HEAP[$s1]; //@line 3640 "socketmodule.c"
        var $25=($24)==0; //@line 3640 "socketmodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 3640 "socketmodule.c"
      case 6: // $bb6
        var $26=HEAP[$s0]; //@line 3642 "socketmodule.c"
        var $27=HEAP[$s1]; //@line 3642 "socketmodule.c"
        var $28=_PyTuple_Pack(2, $26, $27); //@line 3642 "socketmodule.c"
        HEAP[$res]=$28; //@line 3642 "socketmodule.c"
        __label__ = 7; break; //@line 3644 "socketmodule.c"
      case 7: // $finally
        var $29=HEAP[$res]; //@line 3645 "socketmodule.c"
        var $30=($29)==0; //@line 3645 "socketmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 3645 "socketmodule.c"
      case 8: // $bb7
        var $31=HEAP[$s0]; //@line 3646 "socketmodule.c"
        var $32=($31)==0; //@line 3646 "socketmodule.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3646 "socketmodule.c"
      case 9: // $bb8
        var $33=(($sv)&4294967295); //@line 3647 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3647 "socketmodule.c"
        var $35=_close($34); //@line 3647 "socketmodule.c"
        __label__ = 10; break; //@line 3647 "socketmodule.c"
      case 10: // $bb9
        var $36=HEAP[$s1]; //@line 3648 "socketmodule.c"
        var $37=($36)==0; //@line 3648 "socketmodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3648 "socketmodule.c"
      case 11: // $bb10
        var $38=(($sv+4)&4294967295); //@line 3649 "socketmodule.c"
        var $39=HEAP[$38]; //@line 3649 "socketmodule.c"
        var $40=_close($39); //@line 3649 "socketmodule.c"
        __label__ = 12; break; //@line 3649 "socketmodule.c"
      case 12: // $bb11
        var $41=HEAP[$s0]; //@line 3651 "socketmodule.c"
        var $42=($41)!=0; //@line 3651 "socketmodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 3651 "socketmodule.c"
      case 13: // $bb12
        var $43=HEAP[$s0]; //@line 3651 "socketmodule.c"
        var $44=$43; //@line 3651 "socketmodule.c"
        var $45=(($44)&4294967295); //@line 3651 "socketmodule.c"
        var $46=HEAP[$45]; //@line 3651 "socketmodule.c"
        var $47=((($46) - 1)&4294967295); //@line 3651 "socketmodule.c"
        var $48=(($44)&4294967295); //@line 3651 "socketmodule.c"
        HEAP[$48]=$47; //@line 3651 "socketmodule.c"
        var $49=(($44)&4294967295); //@line 3651 "socketmodule.c"
        var $50=HEAP[$49]; //@line 3651 "socketmodule.c"
        var $51=((($50))|0)==0; //@line 3651 "socketmodule.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3651 "socketmodule.c"
      case 14: // $bb13
        var $52=HEAP[$s0]; //@line 3651 "socketmodule.c"
        var $53=$52; //@line 3651 "socketmodule.c"
        var $54=(($53+4)&4294967295); //@line 3651 "socketmodule.c"
        var $55=HEAP[$54]; //@line 3651 "socketmodule.c"
        var $56=(($55+24)&4294967295); //@line 3651 "socketmodule.c"
        var $57=HEAP[$56]; //@line 3651 "socketmodule.c"
        var $58=HEAP[$s0]; //@line 3651 "socketmodule.c"
        var $59=$58; //@line 3651 "socketmodule.c"
        FUNCTION_TABLE[$57]($59); //@line 3651 "socketmodule.c"
        __label__ = 15; break; //@line 3651 "socketmodule.c"
      case 15: // $bb14
        var $60=HEAP[$s1]; //@line 3652 "socketmodule.c"
        var $61=($60)!=0; //@line 3652 "socketmodule.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 3652 "socketmodule.c"
      case 16: // $bb15
        var $62=HEAP[$s1]; //@line 3652 "socketmodule.c"
        var $63=$62; //@line 3652 "socketmodule.c"
        var $64=(($63)&4294967295); //@line 3652 "socketmodule.c"
        var $65=HEAP[$64]; //@line 3652 "socketmodule.c"
        var $66=((($65) - 1)&4294967295); //@line 3652 "socketmodule.c"
        var $67=(($63)&4294967295); //@line 3652 "socketmodule.c"
        HEAP[$67]=$66; //@line 3652 "socketmodule.c"
        var $68=(($63)&4294967295); //@line 3652 "socketmodule.c"
        var $69=HEAP[$68]; //@line 3652 "socketmodule.c"
        var $70=((($69))|0)==0; //@line 3652 "socketmodule.c"
        if ($70) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3652 "socketmodule.c"
      case 17: // $bb16
        var $71=HEAP[$s1]; //@line 3652 "socketmodule.c"
        var $72=$71; //@line 3652 "socketmodule.c"
        var $73=(($72+4)&4294967295); //@line 3652 "socketmodule.c"
        var $74=HEAP[$73]; //@line 3652 "socketmodule.c"
        var $75=(($74+24)&4294967295); //@line 3652 "socketmodule.c"
        var $76=HEAP[$75]; //@line 3652 "socketmodule.c"
        var $77=HEAP[$s1]; //@line 3652 "socketmodule.c"
        var $78=$77; //@line 3652 "socketmodule.c"
        FUNCTION_TABLE[$76]($78); //@line 3652 "socketmodule.c"
        __label__ = 18; break; //@line 3652 "socketmodule.c"
      case 18: // $bb17
        var $79=HEAP[$res]; //@line 3653 "socketmodule.c"
        HEAP[$0]=$79; //@line 3653 "socketmodule.c"
        __label__ = 19; break; //@line 3653 "socketmodule.c"
      case 19: // $bb18
        var $80=HEAP[$0]; //@line 3632 "socketmodule.c"
        HEAP[$retval]=$80; //@line 3632 "socketmodule.c"
        __label__ = 20; break; //@line 3632 "socketmodule.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 3632 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 3632 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_fromfd($self, $args) {
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
        var $fd=__stackBase__+20;
        var $family=__stackBase__+24;
        var $type=__stackBase__+28;
        var $proto=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$proto]=0; //@line 3678 "socketmodule.c"
        var $1=HEAP[$args_addr]; //@line 3679 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str111)&4294967295), $fd, $family, $type, $proto); //@line 3679 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3679 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3679 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3681 "socketmodule.c"
        __label__ = 5; break; //@line 3681 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$fd]; //@line 3683 "socketmodule.c"
        var $5=_dup($4); //@line 3683 "socketmodule.c"
        HEAP[$fd]=$5; //@line 3683 "socketmodule.c"
        var $6=HEAP[$fd]; //@line 3684 "socketmodule.c"
        var $7=((($6))|0) < 0; //@line 3684 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3684 "socketmodule.c"
      case 3: // $bb2
        var $8=_set_error(); //@line 3685 "socketmodule.c"
        HEAP[$0]=$8; //@line 3685 "socketmodule.c"
        __label__ = 5; break; //@line 3685 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[$proto]; //@line 3686 "socketmodule.c"
        var $10=HEAP[$type]; //@line 3686 "socketmodule.c"
        var $11=HEAP[$family]; //@line 3686 "socketmodule.c"
        var $12=HEAP[$fd]; //@line 3686 "socketmodule.c"
        var $13=_new_sockobject($12, $11, $10, $9); //@line 3686 "socketmodule.c"
        HEAP[$s]=$13; //@line 3686 "socketmodule.c"
        var $14=HEAP[$s]; //@line 3687 "socketmodule.c"
        var $15=$14; //@line 3687 "socketmodule.c"
        HEAP[$0]=$15; //@line 3687 "socketmodule.c"
        __label__ = 5; break; //@line 3687 "socketmodule.c"
      case 5: // $bb4
        var $16=HEAP[$0]; //@line 3681 "socketmodule.c"
        HEAP[$retval]=$16; //@line 3681 "socketmodule.c"
        __label__ = 6; break; //@line 3681 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3681 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3681 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x1=__stackBase__+16;
        var $x2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3705 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str112)&4294967295), $x1); //@line 3705 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3705 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3705 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3706 "socketmodule.c"
        __label__ = 5; break; //@line 3706 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3708 "socketmodule.c"
        var $5=((($4))|0) < 0; //@line 3708 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3708 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3709 "socketmodule.c"
        _PyErr_SetString($6, ((__str113)&4294967295)); //@line 3709 "socketmodule.c"
        HEAP[$0]=0; //@line 3711 "socketmodule.c"
        __label__ = 5; break; //@line 3711 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3713 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3713 "socketmodule.c"
        var $9=unSign(($8), 16, 0); //@line 3713 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3713 "socketmodule.c"
        var $11=_ntohs($10); //@line 3713 "socketmodule.c"
        var $12=unSign(($11), 16, 0); //@line 3713 "socketmodule.c"
        HEAP[$x2]=$12; //@line 3713 "socketmodule.c"
        var $13=HEAP[$x2]; //@line 3714 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3714 "socketmodule.c"
        HEAP[$0]=$14; //@line 3714 "socketmodule.c"
        __label__ = 5; break; //@line 3714 "socketmodule.c"
      case 5: // $bb4
        var $15=HEAP[$0]; //@line 3706 "socketmodule.c"
        HEAP[$retval]=$15; //@line 3706 "socketmodule.c"
        __label__ = 6; break; //@line 3706 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3706 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3706 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohl($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
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
        var $1=HEAP[$arg_addr]; //@line 3728 "socketmodule.c"
        var $2=(($1+4)&4294967295); //@line 3728 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3728 "socketmodule.c"
        var $4=(($3+84)&4294967295); //@line 3728 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3728 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3728 "socketmodule.c"
        var $7=((($6))|0)!=0; //@line 3728 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3728 "socketmodule.c"
      case 1: // $bb
        var $8=HEAP[$arg_addr]; //@line 3729 "socketmodule.c"
        var $9=$8; //@line 3729 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 3729 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3729 "socketmodule.c"
        HEAP[$x]=$11; //@line 3729 "socketmodule.c"
        var $12=HEAP[$x]; //@line 3730 "socketmodule.c"
        var $13=((($12))|0)==-1; //@line 3730 "socketmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 3730 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3730 "socketmodule.c"
        var $15=($14)!=0; //@line 3730 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3730 "socketmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 3731 "socketmodule.c"
        __label__ = 17; break; //@line 3731 "socketmodule.c"
      case 4: // $bb3
        var $16=HEAP[$x]; //@line 3732 "socketmodule.c"
        var $17=((($16))|0) < 0; //@line 3732 "socketmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3732 "socketmodule.c"
      case 5: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3733 "socketmodule.c"
        _PyErr_SetString($18, ((__str113)&4294967295)); //@line 3733 "socketmodule.c"
        HEAP[$0]=0; //@line 3735 "socketmodule.c"
        __label__ = 17; break; //@line 3735 "socketmodule.c"
      case 6: // $bb5
        __label__ = 13; break; //@line 3735 "socketmodule.c"
      case 7: // $bb6
        var $19=HEAP[$arg_addr]; //@line 3738 "socketmodule.c"
        var $20=(($19+4)&4294967295); //@line 3738 "socketmodule.c"
        var $21=HEAP[$20]; //@line 3738 "socketmodule.c"
        var $22=(($21+84)&4294967295); //@line 3738 "socketmodule.c"
        var $23=HEAP[$22]; //@line 3738 "socketmodule.c"
        var $24=($23) & 16777216; //@line 3738 "socketmodule.c"
        var $25=((($24))|0)!=0; //@line 3738 "socketmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 3738 "socketmodule.c"
      case 8: // $bb7
        var $26=HEAP[$arg_addr]; //@line 3739 "socketmodule.c"
        var $27=_PyLong_AsUnsignedLong($26); //@line 3739 "socketmodule.c"
        HEAP[$x]=$27; //@line 3739 "socketmodule.c"
        var $28=HEAP[$x]; //@line 3740 "socketmodule.c"
        var $29=((($28))|0)==-1; //@line 3740 "socketmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 3740 "socketmodule.c"
      case 9: // $bb8
        var $30=_PyErr_Occurred(); //@line 3740 "socketmodule.c"
        var $31=($30)!=0; //@line 3740 "socketmodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3740 "socketmodule.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 3741 "socketmodule.c"
        __label__ = 17; break; //@line 3741 "socketmodule.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 3741 "socketmodule.c"
      case 12: // $bb11
        var $32=HEAP[$arg_addr]; //@line 3755 "socketmodule.c"
        var $33=(($32+4)&4294967295); //@line 3755 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3755 "socketmodule.c"
        var $35=(($34+12)&4294967295); //@line 3755 "socketmodule.c"
        var $36=HEAP[$35]; //@line 3755 "socketmodule.c"
        var $37=HEAP[_PyExc_TypeError]; //@line 3755 "socketmodule.c"
        var $38=_PyErr_Format($37, ((__str114)&4294967295), $36); //@line 3755 "socketmodule.c"
        HEAP[$0]=$38; //@line 3755 "socketmodule.c"
        __label__ = 17; break; //@line 3755 "socketmodule.c"
      case 13: // $bb12
        var $39=HEAP[$x]; //@line 3758 "socketmodule.c"
        var $40=((($39))|0)==-1; //@line 3758 "socketmodule.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 3758 "socketmodule.c"
      case 14: // $bb13
        var $41=_PyErr_Occurred(); //@line 3758 "socketmodule.c"
        var $42=($41)!=0; //@line 3758 "socketmodule.c"
        if ($42) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3758 "socketmodule.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 3759 "socketmodule.c"
        __label__ = 17; break; //@line 3759 "socketmodule.c"
      case 16: // $bb15
        var $43=HEAP[$x]; //@line 3760 "socketmodule.c"
        var $44=_ntohl($43); //@line 3760 "socketmodule.c"
        var $45=_PyLong_FromUnsignedLong($44); //@line 3760 "socketmodule.c"
        HEAP[$0]=$45; //@line 3760 "socketmodule.c"
        __label__ = 17; break; //@line 3760 "socketmodule.c"
      case 17: // $bb16
        var $46=HEAP[$0]; //@line 3731 "socketmodule.c"
        HEAP[$retval]=$46; //@line 3731 "socketmodule.c"
        __label__ = 18; break; //@line 3731 "socketmodule.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 3731 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 3731 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htons($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $x1=__stackBase__+16;
        var $x2=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3774 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str115)&4294967295), $x1); //@line 3774 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3774 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3774 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3775 "socketmodule.c"
        __label__ = 5; break; //@line 3775 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3777 "socketmodule.c"
        var $5=((($4))|0) < 0; //@line 3777 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3777 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3778 "socketmodule.c"
        _PyErr_SetString($6, ((__str113)&4294967295)); //@line 3778 "socketmodule.c"
        HEAP[$0]=0; //@line 3780 "socketmodule.c"
        __label__ = 5; break; //@line 3780 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3782 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3782 "socketmodule.c"
        var $9=unSign(($8), 16, 0); //@line 3782 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3782 "socketmodule.c"
        var $11=_htons($10); //@line 3782 "socketmodule.c"
        var $12=unSign(($11), 16, 0); //@line 3782 "socketmodule.c"
        HEAP[$x2]=$12; //@line 3782 "socketmodule.c"
        var $13=HEAP[$x2]; //@line 3783 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3783 "socketmodule.c"
        HEAP[$0]=$14; //@line 3783 "socketmodule.c"
        __label__ = 5; break; //@line 3783 "socketmodule.c"
      case 5: // $bb4
        var $15=HEAP[$0]; //@line 3775 "socketmodule.c"
        HEAP[$retval]=$15; //@line 3775 "socketmodule.c"
        __label__ = 6; break; //@line 3775 "socketmodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 3775 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3775 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htonl($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
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
        var $1=HEAP[$arg_addr]; //@line 3797 "socketmodule.c"
        var $2=(($1+4)&4294967295); //@line 3797 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3797 "socketmodule.c"
        var $4=(($3+84)&4294967295); //@line 3797 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3797 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3797 "socketmodule.c"
        var $7=((($6))|0)!=0; //@line 3797 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3797 "socketmodule.c"
      case 1: // $bb
        var $8=HEAP[$arg_addr]; //@line 3798 "socketmodule.c"
        var $9=$8; //@line 3798 "socketmodule.c"
        var $10=(($9+8)&4294967295); //@line 3798 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3798 "socketmodule.c"
        HEAP[$x]=$11; //@line 3798 "socketmodule.c"
        var $12=HEAP[$x]; //@line 3799 "socketmodule.c"
        var $13=((($12))|0)==-1; //@line 3799 "socketmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 3799 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3799 "socketmodule.c"
        var $15=($14)!=0; //@line 3799 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3799 "socketmodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 3800 "socketmodule.c"
        __label__ = 14; break; //@line 3800 "socketmodule.c"
      case 4: // $bb3
        var $16=HEAP[$x]; //@line 3801 "socketmodule.c"
        var $17=((($16))|0) < 0; //@line 3801 "socketmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3801 "socketmodule.c"
      case 5: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3802 "socketmodule.c"
        _PyErr_SetString($18, ((__str113)&4294967295)); //@line 3802 "socketmodule.c"
        HEAP[$0]=0; //@line 3804 "socketmodule.c"
        __label__ = 14; break; //@line 3804 "socketmodule.c"
      case 6: // $bb5
        __label__ = 13; break; //@line 3804 "socketmodule.c"
      case 7: // $bb6
        var $19=HEAP[$arg_addr]; //@line 3807 "socketmodule.c"
        var $20=(($19+4)&4294967295); //@line 3807 "socketmodule.c"
        var $21=HEAP[$20]; //@line 3807 "socketmodule.c"
        var $22=(($21+84)&4294967295); //@line 3807 "socketmodule.c"
        var $23=HEAP[$22]; //@line 3807 "socketmodule.c"
        var $24=($23) & 16777216; //@line 3807 "socketmodule.c"
        var $25=((($24))|0)!=0; //@line 3807 "socketmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 3807 "socketmodule.c"
      case 8: // $bb7
        var $26=HEAP[$arg_addr]; //@line 3808 "socketmodule.c"
        var $27=_PyLong_AsUnsignedLong($26); //@line 3808 "socketmodule.c"
        HEAP[$x]=$27; //@line 3808 "socketmodule.c"
        var $28=HEAP[$x]; //@line 3809 "socketmodule.c"
        var $29=((($28))|0)==-1; //@line 3809 "socketmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 3809 "socketmodule.c"
      case 9: // $bb8
        var $30=_PyErr_Occurred(); //@line 3809 "socketmodule.c"
        var $31=($30)!=0; //@line 3809 "socketmodule.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3809 "socketmodule.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 3810 "socketmodule.c"
        __label__ = 14; break; //@line 3810 "socketmodule.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 3810 "socketmodule.c"
      case 12: // $bb11
        var $32=HEAP[$arg_addr]; //@line 3824 "socketmodule.c"
        var $33=(($32+4)&4294967295); //@line 3824 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3824 "socketmodule.c"
        var $35=(($34+12)&4294967295); //@line 3824 "socketmodule.c"
        var $36=HEAP[$35]; //@line 3824 "socketmodule.c"
        var $37=HEAP[_PyExc_TypeError]; //@line 3824 "socketmodule.c"
        var $38=_PyErr_Format($37, ((__str114)&4294967295), $36); //@line 3824 "socketmodule.c"
        HEAP[$0]=$38; //@line 3824 "socketmodule.c"
        __label__ = 14; break; //@line 3824 "socketmodule.c"
      case 13: // $bb12
        var $39=HEAP[$x]; //@line 3827 "socketmodule.c"
        var $40=_htonl($39); //@line 3827 "socketmodule.c"
        var $41=_PyLong_FromUnsignedLong($40); //@line 3827 "socketmodule.c"
        HEAP[$0]=$41; //@line 3827 "socketmodule.c"
        __label__ = 14; break; //@line 3827 "socketmodule.c"
      case 14: // $bb13
        var $42=HEAP[$0]; //@line 3800 "socketmodule.c"
        HEAP[$retval]=$42; //@line 3800 "socketmodule.c"
        __label__ = 15; break; //@line 3800 "socketmodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 3800 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 3800 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_aton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $buf=__stackBase__+16;
        var $ip_addr=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3862 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str116)&4294967295), $ip_addr); //@line 3862 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3862 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3862 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3863 "socketmodule.c"
        __label__ = 5; break; //@line 3863 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ip_addr]; //@line 3871 "socketmodule.c"
        var $5=_inet_aton($4, $buf); //@line 3871 "socketmodule.c"
        var $6=((($5))|0)!=0; //@line 3871 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3871 "socketmodule.c"
      case 3: // $bb2
        var $buf3=$buf; //@line 3872 "socketmodule.c"
        var $7=_PyString_FromStringAndSize($buf3, 4); //@line 3872 "socketmodule.c"
        HEAP[$0]=$7; //@line 3872 "socketmodule.c"
        __label__ = 5; break; //@line 3872 "socketmodule.c"
      case 4: // $bb5
        var $8=HEAP[_socket_error]; //@line 3875 "socketmodule.c"
        _PyErr_SetString($8, ((__str117)&4294967295)); //@line 3875 "socketmodule.c"
        HEAP[$0]=0; //@line 3877 "socketmodule.c"
        __label__ = 5; break; //@line 3877 "socketmodule.c"
      case 5: // $bb6
        var $9=HEAP[$0]; //@line 3863 "socketmodule.c"
        HEAP[$retval]=$9; //@line 3863 "socketmodule.c"
        __label__ = 6; break; //@line 3863 "socketmodule.c"
      case 6: // $return
        var $retval7=HEAP[$retval]; //@line 3863 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 3863 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntoa($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $packed_str=__stackBase__+16;
        var $addr_len=__stackBase__+20;
        var $packed_addr=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3923 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str118)&4294967295), $packed_str, $addr_len); //@line 3923 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3923 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3923 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3924 "socketmodule.c"
        __label__ = 5; break; //@line 3924 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$addr_len]; //@line 3927 "socketmodule.c"
        var $5=((($4))|0)!=4; //@line 3927 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3927 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_socket_error]; //@line 3928 "socketmodule.c"
        _PyErr_SetString($6, ((__str119)&4294967295)); //@line 3928 "socketmodule.c"
        HEAP[$0]=0; //@line 3930 "socketmodule.c"
        __label__ = 5; break; //@line 3930 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$addr_len]; //@line 3933 "socketmodule.c"
        var $8=HEAP[$packed_str]; //@line 3933 "socketmodule.c"
        var $packed_addr4=$packed_addr; //@line 3933 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($packed_addr4, $8, $7, 1, 0); //@line 3933 "socketmodule.c"
        var $elt=(($packed_addr)&4294967295); //@line 3935 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 3935 "socketmodule.c"
        var $9=_inet_ntoa($val); //@line 3935 "socketmodule.c"
        var $10=_PyString_FromString($9); //@line 3935 "socketmodule.c"
        HEAP[$0]=$10; //@line 3935 "socketmodule.c"
        __label__ = 5; break; //@line 3935 "socketmodule.c"
      case 5: // $bb5
        var $11=HEAP[$0]; //@line 3924 "socketmodule.c"
        HEAP[$retval]=$11; //@line 3924 "socketmodule.c"
        __label__ = 6; break; //@line 3924 "socketmodule.c"
      case 6: // $return
        var $retval6=HEAP[$retval]; //@line 3924 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 3924 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_pton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $af=__stackBase__+16;
        var $ip=__stackBase__+20;
        var $retval1=__stackBase__+24;
        var $packed=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 3957 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str120)&4294967295), $af, $ip); //@line 3957 "socketmodule.c"
        var $3=((($2))|0)==0; //@line 3957 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3957 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 3958 "socketmodule.c"
        __label__ = 11; break; //@line 3958 "socketmodule.c"
      case 2: // $bb2
        var $4=HEAP[$ip]; //@line 3969 "socketmodule.c"
        var $5=HEAP[$af]; //@line 3969 "socketmodule.c"
        var $packed3=$packed; //@line 3969 "socketmodule.c"
        var $6=_inet_pton($5, $4, $packed3); //@line 3969 "socketmodule.c"
        HEAP[$retval1]=$6; //@line 3969 "socketmodule.c"
        var $7=HEAP[$retval1]; //@line 3970 "socketmodule.c"
        var $8=((($7))|0) < 0; //@line 3970 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3970 "socketmodule.c"
      case 3: // $bb4
        var $9=HEAP[_socket_error]; //@line 3971 "socketmodule.c"
        var $10=_PyErr_SetFromErrno($9); //@line 3971 "socketmodule.c"
        HEAP[$0]=0; //@line 3972 "socketmodule.c"
        __label__ = 11; break; //@line 3972 "socketmodule.c"
      case 4: // $bb5
        var $11=HEAP[$retval1]; //@line 3973 "socketmodule.c"
        var $12=((($11))|0)==0; //@line 3973 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3973 "socketmodule.c"
      case 5: // $bb6
        var $13=HEAP[_socket_error]; //@line 3974 "socketmodule.c"
        _PyErr_SetString($13, ((__str121)&4294967295)); //@line 3974 "socketmodule.c"
        HEAP[$0]=0; //@line 3976 "socketmodule.c"
        __label__ = 11; break; //@line 3976 "socketmodule.c"
      case 6: // $bb7
        var $14=HEAP[$af]; //@line 3977 "socketmodule.c"
        var $15=((($14))|0)==2; //@line 3977 "socketmodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3977 "socketmodule.c"
      case 7: // $bb8
        var $packed9=$packed; //@line 3978 "socketmodule.c"
        var $16=_PyString_FromStringAndSize($packed9, 4); //@line 3978 "socketmodule.c"
        HEAP[$0]=$16; //@line 3978 "socketmodule.c"
        __label__ = 11; break; //@line 3978 "socketmodule.c"
      case 8: // $bb10
        var $17=HEAP[$af]; //@line 3981 "socketmodule.c"
        var $18=((($17))|0)==10; //@line 3981 "socketmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3981 "socketmodule.c"
      case 9: // $bb11
        var $packed12=$packed; //@line 3982 "socketmodule.c"
        var $19=_PyString_FromStringAndSize($packed12, 16); //@line 3982 "socketmodule.c"
        HEAP[$0]=$19; //@line 3982 "socketmodule.c"
        __label__ = 11; break; //@line 3982 "socketmodule.c"
      case 10: // $bb13
        var $20=HEAP[_socket_error]; //@line 3986 "socketmodule.c"
        _PyErr_SetString($20, ((__str8)&4294967295)); //@line 3986 "socketmodule.c"
        HEAP[$0]=0; //@line 3987 "socketmodule.c"
        __label__ = 11; break; //@line 3987 "socketmodule.c"
      case 11: // $bb14
        var $21=HEAP[$0]; //@line 3958 "socketmodule.c"
        HEAP[$retval]=$21; //@line 3958 "socketmodule.c"
        __label__ = 12; break; //@line 3958 "socketmodule.c"
      case 12: // $return
        var $retval15=HEAP[$retval]; //@line 3958 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 3958 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 79; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 79);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $af=__stackBase__+16;
        var $packed=__stackBase__+20;
        var $len=__stackBase__+24;
        var $retval1=__stackBase__+28;
        var $ip=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=(($ip)&4294967295); //@line 4010 "socketmodule.c"
        _llvm_memset_p0i8_i32($1, 0, 47, 1, 0); //@line 4010 "socketmodule.c"
        var $2=HEAP[$args_addr]; //@line 4012 "socketmodule.c"
        var $3=_PyArg_ParseTuple($2, ((__str122)&4294967295), $af, $packed, $len); //@line 4012 "socketmodule.c"
        var $4=((($3))|0)==0; //@line 4012 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4012 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 4013 "socketmodule.c"
        __label__ = 14; break; //@line 4013 "socketmodule.c"
      case 2: // $bb2
        var $5=HEAP[$af]; //@line 4016 "socketmodule.c"
        var $6=((($5))|0)==2; //@line 4016 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 4016 "socketmodule.c"
      case 3: // $bb3
        var $7=HEAP[$len]; //@line 4017 "socketmodule.c"
        var $8=((($7))|0)!=4; //@line 4017 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4017 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 4018 "socketmodule.c"
        _PyErr_SetString($9, ((__str123)&4294967295)); //@line 4018 "socketmodule.c"
        HEAP[$0]=0; //@line 4020 "socketmodule.c"
        __label__ = 14; break; //@line 4020 "socketmodule.c"
      case 5: // $bb5
        __label__ = 11; break; //@line 4020 "socketmodule.c"
      case 6: // $bb6
        var $10=HEAP[$af]; //@line 4023 "socketmodule.c"
        var $11=((($10))|0)==10; //@line 4023 "socketmodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 4023 "socketmodule.c"
      case 7: // $bb7
        var $12=HEAP[$len]; //@line 4024 "socketmodule.c"
        var $13=((($12))|0)!=16; //@line 4024 "socketmodule.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 4024 "socketmodule.c"
      case 8: // $bb8
        var $14=HEAP[_PyExc_ValueError]; //@line 4025 "socketmodule.c"
        _PyErr_SetString($14, ((__str123)&4294967295)); //@line 4025 "socketmodule.c"
        HEAP[$0]=0; //@line 4027 "socketmodule.c"
        __label__ = 14; break; //@line 4027 "socketmodule.c"
      case 9: // $bb9
        __label__ = 11; break; //@line 4027 "socketmodule.c"
      case 10: // $bb10
        var $15=HEAP[$af]; //@line 4031 "socketmodule.c"
        var $16=HEAP[_PyExc_ValueError]; //@line 4031 "socketmodule.c"
        var $17=_PyErr_Format($16, ((__str124)&4294967295), $15); //@line 4031 "socketmodule.c"
        HEAP[$0]=0; //@line 4033 "socketmodule.c"
        __label__ = 14; break; //@line 4033 "socketmodule.c"
      case 11: // $bb11
        var $18=HEAP[$packed]; //@line 4036 "socketmodule.c"
        var $19=HEAP[$af]; //@line 4036 "socketmodule.c"
        var $ip12=$ip; //@line 4036 "socketmodule.c"
        var $20=_inet_ntop($19, $18, $ip12, 47); //@line 4036 "socketmodule.c"
        HEAP[$retval1]=$20; //@line 4036 "socketmodule.c"
        var $21=HEAP[$retval1]; //@line 4037 "socketmodule.c"
        var $22=($21)==0; //@line 4037 "socketmodule.c"
        if ($22) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4037 "socketmodule.c"
      case 12: // $bb13
        var $23=HEAP[_socket_error]; //@line 4038 "socketmodule.c"
        var $24=_PyErr_SetFromErrno($23); //@line 4038 "socketmodule.c"
        HEAP[$0]=0; //@line 4039 "socketmodule.c"
        __label__ = 14; break; //@line 4039 "socketmodule.c"
      case 13: // $bb14
        var $25=HEAP[$retval1]; //@line 4041 "socketmodule.c"
        var $26=_PyString_FromString($25); //@line 4041 "socketmodule.c"
        HEAP[$0]=$26; //@line 4041 "socketmodule.c"
        __label__ = 14; break; //@line 4041 "socketmodule.c"
      case 14: // $bb15
        var $27=HEAP[$0]; //@line 4013 "socketmodule.c"
        HEAP[$retval]=$27; //@line 4013 "socketmodule.c"
        __label__ = 15; break; //@line 4013 "socketmodule.c"
      case 15: // $return
        var $retval16=HEAP[$retval]; //@line 4013 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 4013 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getaddrinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 142; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 142);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_366=__stackBase__+12;
        var $0=__stackBase__+16;
        var $hints=__stackBase__+20;
        var $res=__stackBase__+52;
        var $res0=__stackBase__+56;
        var $hobj=__stackBase__+60;
        var $pobj=__stackBase__+64;
        var $pbuf=__stackBase__+68;
        var $hptr=__stackBase__+98;
        var $pptr=__stackBase__+102;
        var $family=__stackBase__+106;
        var $socktype=__stackBase__+110;
        var $protocol=__stackBase__+114;
        var $flags=__stackBase__+118;
        var $error=__stackBase__+122;
        var $all=__stackBase__+126;
        var $single=__stackBase__+130;
        var $idna=__stackBase__+134;
        var $addr=__stackBase__+138;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$res0]=0; //@line 4058 "socketmodule.c"
        HEAP[$hobj]=0; //@line 4059 "socketmodule.c"
        HEAP[$pobj]=0; //@line 4060 "socketmodule.c"
        HEAP[$all]=0; //@line 4065 "socketmodule.c"
        HEAP[$single]=0; //@line 4066 "socketmodule.c"
        HEAP[$idna]=0; //@line 4067 "socketmodule.c"
        HEAP[$flags]=0; //@line 4069 "socketmodule.c"
        var $1=HEAP[$flags]; //@line 4069 "socketmodule.c"
        HEAP[$protocol]=$1; //@line 4069 "socketmodule.c"
        var $2=HEAP[$protocol]; //@line 4069 "socketmodule.c"
        HEAP[$socktype]=$2; //@line 4069 "socketmodule.c"
        var $3=HEAP[$socktype]; //@line 4069 "socketmodule.c"
        HEAP[$family]=$3; //@line 4069 "socketmodule.c"
        HEAP[$family]=0; //@line 4070 "socketmodule.c"
        var $4=HEAP[$args_addr]; //@line 4071 "socketmodule.c"
        var $5=_PyArg_ParseTuple($4, ((__str125)&4294967295), $hobj, $pobj, $family, $socktype, $protocol, $flags); //@line 4071 "socketmodule.c"
        var $6=((($5))|0)==0; //@line 4071 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4071 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 4074 "socketmodule.c"
        __label__ = 53; break; //@line 4074 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$hobj]; //@line 4076 "socketmodule.c"
        var $8=($7)==(__Py_NoneStruct); //@line 4076 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4076 "socketmodule.c"
      case 3: // $bb2
        HEAP[$hptr]=0; //@line 4077 "socketmodule.c"
        __label__ = 11; break; //@line 4077 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[$hobj]; //@line 4078 "socketmodule.c"
        var $10=(($9+4)&4294967295); //@line 4078 "socketmodule.c"
        var $11=HEAP[$10]; //@line 4078 "socketmodule.c"
        var $12=(($11+84)&4294967295); //@line 4078 "socketmodule.c"
        var $13=HEAP[$12]; //@line 4078 "socketmodule.c"
        var $14=($13) & 268435456; //@line 4078 "socketmodule.c"
        var $15=((($14))|0)!=0; //@line 4078 "socketmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 4078 "socketmodule.c"
      case 5: // $bb4
        var $16=HEAP[$hobj]; //@line 4079 "socketmodule.c"
        var $17=_PyObject_CallMethod($16, ((__str126)&4294967295), ((__str127)&4294967295), ((__str23)&4294967295)); //@line 4079 "socketmodule.c"
        HEAP[$idna]=$17; //@line 4079 "socketmodule.c"
        var $18=HEAP[$idna]; //@line 4080 "socketmodule.c"
        var $19=($18)==0; //@line 4080 "socketmodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4080 "socketmodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 4081 "socketmodule.c"
        __label__ = 53; break; //@line 4081 "socketmodule.c"
      case 7: // $bb6
        var $20=HEAP[$idna]; //@line 4082 "socketmodule.c"
        var $21=_PyString_AsString($20); //@line 4082 "socketmodule.c"
        HEAP[$hptr]=$21; //@line 4082 "socketmodule.c"
        __label__ = 11; break; //@line 4082 "socketmodule.c"
      case 8: // $bb7
        var $22=HEAP[$hobj]; //@line 4083 "socketmodule.c"
        var $23=(($22+4)&4294967295); //@line 4083 "socketmodule.c"
        var $24=HEAP[$23]; //@line 4083 "socketmodule.c"
        var $25=(($24+84)&4294967295); //@line 4083 "socketmodule.c"
        var $26=HEAP[$25]; //@line 4083 "socketmodule.c"
        var $27=($26) & 134217728; //@line 4083 "socketmodule.c"
        var $28=((($27))|0)!=0; //@line 4083 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4083 "socketmodule.c"
      case 9: // $bb8
        var $29=HEAP[$hobj]; //@line 4084 "socketmodule.c"
        var $30=_PyString_AsString($29); //@line 4084 "socketmodule.c"
        HEAP[$hptr]=$30; //@line 4084 "socketmodule.c"
        __label__ = 11; break; //@line 4084 "socketmodule.c"
      case 10: // $bb9
        var $31=HEAP[_PyExc_TypeError]; //@line 4086 "socketmodule.c"
        _PyErr_SetString($31, ((__str128)&4294967295)); //@line 4086 "socketmodule.c"
        HEAP[$0]=0; //@line 4088 "socketmodule.c"
        __label__ = 53; break; //@line 4088 "socketmodule.c"
      case 11: // $bb10
        var $32=HEAP[$pobj]; //@line 4090 "socketmodule.c"
        var $33=(($32+4)&4294967295); //@line 4090 "socketmodule.c"
        var $34=HEAP[$33]; //@line 4090 "socketmodule.c"
        var $35=(($34+84)&4294967295); //@line 4090 "socketmodule.c"
        var $36=HEAP[$35]; //@line 4090 "socketmodule.c"
        var $37=($36) & 8388608; //@line 4090 "socketmodule.c"
        var $38=((($37))|0)!=0; //@line 4090 "socketmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4090 "socketmodule.c"
      case 12: // $bb11
        var $39=HEAP[$pobj]; //@line 4091 "socketmodule.c"
        var $40=_PyInt_AsLong($39); //@line 4091 "socketmodule.c"
        var $pbuf12=$pbuf; //@line 4091 "socketmodule.c"
        var $41=_PyOS_snprintf($pbuf12, 30, ((__str129)&4294967295), $40); //@line 4091 "socketmodule.c"
        var $pbuf13=$pbuf; //@line 4092 "socketmodule.c"
        HEAP[$pptr]=$pbuf13; //@line 4092 "socketmodule.c"
        __label__ = 18; break; //@line 4092 "socketmodule.c"
      case 13: // $bb14
        var $42=HEAP[$pobj]; //@line 4093 "socketmodule.c"
        var $43=(($42+4)&4294967295); //@line 4093 "socketmodule.c"
        var $44=HEAP[$43]; //@line 4093 "socketmodule.c"
        var $45=(($44+84)&4294967295); //@line 4093 "socketmodule.c"
        var $46=HEAP[$45]; //@line 4093 "socketmodule.c"
        var $47=($46) & 134217728; //@line 4093 "socketmodule.c"
        var $48=((($47))|0)!=0; //@line 4093 "socketmodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 4093 "socketmodule.c"
      case 14: // $bb15
        var $49=HEAP[$pobj]; //@line 4094 "socketmodule.c"
        var $50=_PyString_AsString($49); //@line 4094 "socketmodule.c"
        HEAP[$pptr]=$50; //@line 4094 "socketmodule.c"
        __label__ = 18; break; //@line 4094 "socketmodule.c"
      case 15: // $bb16
        var $51=HEAP[$pobj]; //@line 4095 "socketmodule.c"
        var $52=($51)==(__Py_NoneStruct); //@line 4095 "socketmodule.c"
        if ($52) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 4095 "socketmodule.c"
      case 16: // $bb17
        HEAP[$pptr]=0; //@line 4096 "socketmodule.c"
        __label__ = 18; break; //@line 4096 "socketmodule.c"
      case 17: // $bb18
        var $53=HEAP[_socket_error]; //@line 4098 "socketmodule.c"
        _PyErr_SetString($53, ((__str130)&4294967295)); //@line 4098 "socketmodule.c"
        __label__ = 41; break; //@line 4098 "socketmodule.c"
      case 18: // $bb19
        var $hints20=$hints; //@line 4101 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints20, 0, 32, 1, 0); //@line 4101 "socketmodule.c"
        var $54=HEAP[$family]; //@line 4102 "socketmodule.c"
        var $55=(($hints+4)&4294967295); //@line 4102 "socketmodule.c"
        HEAP[$55]=$54; //@line 4102 "socketmodule.c"
        var $56=HEAP[$socktype]; //@line 4103 "socketmodule.c"
        var $57=(($hints+8)&4294967295); //@line 4103 "socketmodule.c"
        HEAP[$57]=$56; //@line 4103 "socketmodule.c"
        var $58=HEAP[$protocol]; //@line 4104 "socketmodule.c"
        var $59=(($hints+12)&4294967295); //@line 4104 "socketmodule.c"
        HEAP[$59]=$58; //@line 4104 "socketmodule.c"
        var $60=HEAP[$flags]; //@line 4105 "socketmodule.c"
        var $61=(($hints)&4294967295); //@line 4105 "socketmodule.c"
        HEAP[$61]=$60; //@line 4105 "socketmodule.c"
        var $62=HEAP[$hptr]; //@line 4108 "socketmodule.c"
        var $63=HEAP[$pptr]; //@line 4108 "socketmodule.c"
        var $64=_getaddrinfo($62, $63, $hints, $res0); //@line 4108 "socketmodule.c"
        HEAP[$error]=$64; //@line 4108 "socketmodule.c"
        var $65=HEAP[$error]; //@line 4111 "socketmodule.c"
        var $66=((($65))|0)!=0; //@line 4111 "socketmodule.c"
        if ($66) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 4111 "socketmodule.c"
      case 19: // $bb21
        var $67=HEAP[$error]; //@line 4112 "socketmodule.c"
        var $68=_set_gaierror($67); //@line 4112 "socketmodule.c"
        __label__ = 41; break; //@line 4112 "socketmodule.c"
      case 20: // $bb22
        var $69=_PyList_New(0); //@line 4116 "socketmodule.c"
        HEAP[$all]=$69; //@line 4116 "socketmodule.c"
        var $70=HEAP[$all]; //@line 4116 "socketmodule.c"
        var $71=($70)==0; //@line 4116 "socketmodule.c"
        if ($71) { __label__ = 41; break; } else { __label__ = 21; break; } //@line 4116 "socketmodule.c"
      case 21: // $bb23
        var $72=HEAP[$res0]; //@line 4118 "socketmodule.c"
        HEAP[$res]=$72; //@line 4118 "socketmodule.c"
        __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 22: // $bb24
        var $73=HEAP[$protocol]; //@line 4120 "socketmodule.c"
        var $74=HEAP[$res]; //@line 4120 "socketmodule.c"
        var $75=(($74+16)&4294967295); //@line 4120 "socketmodule.c"
        var $76=HEAP[$75]; //@line 4120 "socketmodule.c"
        var $77=HEAP[$res]; //@line 4120 "socketmodule.c"
        var $78=(($77+20)&4294967295); //@line 4120 "socketmodule.c"
        var $79=HEAP[$78]; //@line 4120 "socketmodule.c"
        var $80=_makesockaddr(-1, $79, $76, $73); //@line 4120 "socketmodule.c"
        HEAP[$addr]=$80; //@line 4120 "socketmodule.c"
        var $81=HEAP[$addr]; //@line 4121 "socketmodule.c"
        var $82=($81)==0; //@line 4121 "socketmodule.c"
        if ($82) { __label__ = 41; break; } else { __label__ = 23; break; } //@line 4121 "socketmodule.c"
      case 23: // $bb25
        var $83=HEAP[$res]; //@line 4123 "socketmodule.c"
        var $84=(($83+24)&4294967295); //@line 4123 "socketmodule.c"
        var $85=HEAP[$84]; //@line 4123 "socketmodule.c"
        var $86=($85)!=0; //@line 4123 "socketmodule.c"
        if ($86) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 4123 "socketmodule.c"
      case 24: // $bb26
        var $87=HEAP[$res]; //@line 4123 "socketmodule.c"
        var $88=(($87+24)&4294967295); //@line 4123 "socketmodule.c"
        var $89=HEAP[$88]; //@line 4123 "socketmodule.c"
        HEAP[$iftmp_366]=$89; //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 25: // $bb27
        HEAP[$iftmp_366]=((__str12)&4294967295); //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 26: // $bb28
        var $90=HEAP[$res]; //@line 4123 "socketmodule.c"
        var $91=(($90+12)&4294967295); //@line 4123 "socketmodule.c"
        var $92=HEAP[$91]; //@line 4123 "socketmodule.c"
        var $93=HEAP[$res]; //@line 4123 "socketmodule.c"
        var $94=(($93+8)&4294967295); //@line 4123 "socketmodule.c"
        var $95=HEAP[$94]; //@line 4123 "socketmodule.c"
        var $96=HEAP[$res]; //@line 4123 "socketmodule.c"
        var $97=(($96+4)&4294967295); //@line 4123 "socketmodule.c"
        var $98=HEAP[$97]; //@line 4123 "socketmodule.c"
        var $99=HEAP[$iftmp_366]; //@line 4123 "socketmodule.c"
        var $100=HEAP[$addr]; //@line 4123 "socketmodule.c"
        var $101=_Py_BuildValue(((__str131)&4294967295), $98, $95, $92, $99, $100); //@line 4123 "socketmodule.c"
        HEAP[$single]=$101; //@line 4123 "socketmodule.c"
        var $102=HEAP[$addr]; //@line 4127 "socketmodule.c"
        var $103=(($102)&4294967295); //@line 4127 "socketmodule.c"
        var $104=HEAP[$103]; //@line 4127 "socketmodule.c"
        var $105=((($104) - 1)&4294967295); //@line 4127 "socketmodule.c"
        var $106=HEAP[$addr]; //@line 4127 "socketmodule.c"
        var $107=(($106)&4294967295); //@line 4127 "socketmodule.c"
        HEAP[$107]=$105; //@line 4127 "socketmodule.c"
        var $108=HEAP[$addr]; //@line 4127 "socketmodule.c"
        var $109=(($108)&4294967295); //@line 4127 "socketmodule.c"
        var $110=HEAP[$109]; //@line 4127 "socketmodule.c"
        var $111=((($110))|0)==0; //@line 4127 "socketmodule.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 4127 "socketmodule.c"
      case 27: // $bb29
        var $112=HEAP[$addr]; //@line 4127 "socketmodule.c"
        var $113=(($112+4)&4294967295); //@line 4127 "socketmodule.c"
        var $114=HEAP[$113]; //@line 4127 "socketmodule.c"
        var $115=(($114+24)&4294967295); //@line 4127 "socketmodule.c"
        var $116=HEAP[$115]; //@line 4127 "socketmodule.c"
        var $117=HEAP[$addr]; //@line 4127 "socketmodule.c"
        FUNCTION_TABLE[$116]($117); //@line 4127 "socketmodule.c"
        __label__ = 28; break; //@line 4127 "socketmodule.c"
      case 28: // $bb30
        var $118=HEAP[$single]; //@line 4128 "socketmodule.c"
        var $119=($118)==0; //@line 4128 "socketmodule.c"
        if ($119) { __label__ = 41; break; } else { __label__ = 29; break; } //@line 4128 "socketmodule.c"
      case 29: // $bb31
        var $120=HEAP[$all]; //@line 4131 "socketmodule.c"
        var $121=HEAP[$single]; //@line 4131 "socketmodule.c"
        var $122=_PyList_Append($120, $121); //@line 4131 "socketmodule.c"
        var $123=((($122))|0)!=0; //@line 4131 "socketmodule.c"
        if ($123) { __label__ = 41; break; } else { __label__ = 30; break; } //@line 4131 "socketmodule.c"
      case 30: // $bb32
        var $124=HEAP[$single]; //@line 4133 "socketmodule.c"
        var $125=($124)!=0; //@line 4133 "socketmodule.c"
        if ($125) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 31: // $bb33
        var $126=HEAP[$single]; //@line 4133 "socketmodule.c"
        var $127=(($126)&4294967295); //@line 4133 "socketmodule.c"
        var $128=HEAP[$127]; //@line 4133 "socketmodule.c"
        var $129=((($128) - 1)&4294967295); //@line 4133 "socketmodule.c"
        var $130=HEAP[$single]; //@line 4133 "socketmodule.c"
        var $131=(($130)&4294967295); //@line 4133 "socketmodule.c"
        HEAP[$131]=$129; //@line 4133 "socketmodule.c"
        var $132=HEAP[$single]; //@line 4133 "socketmodule.c"
        var $133=(($132)&4294967295); //@line 4133 "socketmodule.c"
        var $134=HEAP[$133]; //@line 4133 "socketmodule.c"
        var $135=((($134))|0)==0; //@line 4133 "socketmodule.c"
        if ($135) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 32: // $bb34
        var $136=HEAP[$single]; //@line 4133 "socketmodule.c"
        var $137=(($136+4)&4294967295); //@line 4133 "socketmodule.c"
        var $138=HEAP[$137]; //@line 4133 "socketmodule.c"
        var $139=(($138+24)&4294967295); //@line 4133 "socketmodule.c"
        var $140=HEAP[$139]; //@line 4133 "socketmodule.c"
        var $141=HEAP[$single]; //@line 4133 "socketmodule.c"
        FUNCTION_TABLE[$140]($141); //@line 4133 "socketmodule.c"
        __label__ = 33; break; //@line 4133 "socketmodule.c"
      case 33: // $bb35
        var $142=HEAP[$res]; //@line 4118 "socketmodule.c"
        var $143=(($142+28)&4294967295); //@line 4118 "socketmodule.c"
        var $144=HEAP[$143]; //@line 4118 "socketmodule.c"
        HEAP[$res]=$144; //@line 4118 "socketmodule.c"
        __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 34: // $bb36
        var $145=HEAP[$res]; //@line 4118 "socketmodule.c"
        var $146=($145)!=0; //@line 4118 "socketmodule.c"
        if ($146) { __label__ = 22; break; } else { __label__ = 35; break; } //@line 4118 "socketmodule.c"
      case 35: // $bb37
        var $147=HEAP[$idna]; //@line 4135 "socketmodule.c"
        var $148=($147)!=0; //@line 4135 "socketmodule.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 36: // $bb38
        var $149=HEAP[$idna]; //@line 4135 "socketmodule.c"
        var $150=(($149)&4294967295); //@line 4135 "socketmodule.c"
        var $151=HEAP[$150]; //@line 4135 "socketmodule.c"
        var $152=((($151) - 1)&4294967295); //@line 4135 "socketmodule.c"
        var $153=HEAP[$idna]; //@line 4135 "socketmodule.c"
        var $154=(($153)&4294967295); //@line 4135 "socketmodule.c"
        HEAP[$154]=$152; //@line 4135 "socketmodule.c"
        var $155=HEAP[$idna]; //@line 4135 "socketmodule.c"
        var $156=(($155)&4294967295); //@line 4135 "socketmodule.c"
        var $157=HEAP[$156]; //@line 4135 "socketmodule.c"
        var $158=((($157))|0)==0; //@line 4135 "socketmodule.c"
        if ($158) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 37: // $bb39
        var $159=HEAP[$idna]; //@line 4135 "socketmodule.c"
        var $160=(($159+4)&4294967295); //@line 4135 "socketmodule.c"
        var $161=HEAP[$160]; //@line 4135 "socketmodule.c"
        var $162=(($161+24)&4294967295); //@line 4135 "socketmodule.c"
        var $163=HEAP[$162]; //@line 4135 "socketmodule.c"
        var $164=HEAP[$idna]; //@line 4135 "socketmodule.c"
        FUNCTION_TABLE[$163]($164); //@line 4135 "socketmodule.c"
        __label__ = 38; break; //@line 4135 "socketmodule.c"
      case 38: // $bb40
        var $165=HEAP[$res0]; //@line 4136 "socketmodule.c"
        var $166=($165)!=0; //@line 4136 "socketmodule.c"
        if ($166) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 4136 "socketmodule.c"
      case 39: // $bb41
        var $167=HEAP[$res0]; //@line 4137 "socketmodule.c"
        _freeaddrinfo($167); //@line 4137 "socketmodule.c"
        __label__ = 40; break; //@line 4137 "socketmodule.c"
      case 40: // $bb42
        var $168=HEAP[$all]; //@line 4138 "socketmodule.c"
        HEAP[$0]=$168; //@line 4138 "socketmodule.c"
        __label__ = 53; break; //@line 4138 "socketmodule.c"
      case 41: // $err
        var $169=HEAP[$single]; //@line 4140 "socketmodule.c"
        var $170=($169)!=0; //@line 4140 "socketmodule.c"
        if ($170) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 42: // $bb43
        var $171=HEAP[$single]; //@line 4140 "socketmodule.c"
        var $172=(($171)&4294967295); //@line 4140 "socketmodule.c"
        var $173=HEAP[$172]; //@line 4140 "socketmodule.c"
        var $174=((($173) - 1)&4294967295); //@line 4140 "socketmodule.c"
        var $175=HEAP[$single]; //@line 4140 "socketmodule.c"
        var $176=(($175)&4294967295); //@line 4140 "socketmodule.c"
        HEAP[$176]=$174; //@line 4140 "socketmodule.c"
        var $177=HEAP[$single]; //@line 4140 "socketmodule.c"
        var $178=(($177)&4294967295); //@line 4140 "socketmodule.c"
        var $179=HEAP[$178]; //@line 4140 "socketmodule.c"
        var $180=((($179))|0)==0; //@line 4140 "socketmodule.c"
        if ($180) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 43: // $bb44
        var $181=HEAP[$single]; //@line 4140 "socketmodule.c"
        var $182=(($181+4)&4294967295); //@line 4140 "socketmodule.c"
        var $183=HEAP[$182]; //@line 4140 "socketmodule.c"
        var $184=(($183+24)&4294967295); //@line 4140 "socketmodule.c"
        var $185=HEAP[$184]; //@line 4140 "socketmodule.c"
        var $186=HEAP[$single]; //@line 4140 "socketmodule.c"
        FUNCTION_TABLE[$185]($186); //@line 4140 "socketmodule.c"
        __label__ = 44; break; //@line 4140 "socketmodule.c"
      case 44: // $bb45
        var $187=HEAP[$all]; //@line 4141 "socketmodule.c"
        var $188=($187)!=0; //@line 4141 "socketmodule.c"
        if ($188) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 45: // $bb46
        var $189=HEAP[$all]; //@line 4141 "socketmodule.c"
        var $190=(($189)&4294967295); //@line 4141 "socketmodule.c"
        var $191=HEAP[$190]; //@line 4141 "socketmodule.c"
        var $192=((($191) - 1)&4294967295); //@line 4141 "socketmodule.c"
        var $193=HEAP[$all]; //@line 4141 "socketmodule.c"
        var $194=(($193)&4294967295); //@line 4141 "socketmodule.c"
        HEAP[$194]=$192; //@line 4141 "socketmodule.c"
        var $195=HEAP[$all]; //@line 4141 "socketmodule.c"
        var $196=(($195)&4294967295); //@line 4141 "socketmodule.c"
        var $197=HEAP[$196]; //@line 4141 "socketmodule.c"
        var $198=((($197))|0)==0; //@line 4141 "socketmodule.c"
        if ($198) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 46: // $bb47
        var $199=HEAP[$all]; //@line 4141 "socketmodule.c"
        var $200=(($199+4)&4294967295); //@line 4141 "socketmodule.c"
        var $201=HEAP[$200]; //@line 4141 "socketmodule.c"
        var $202=(($201+24)&4294967295); //@line 4141 "socketmodule.c"
        var $203=HEAP[$202]; //@line 4141 "socketmodule.c"
        var $204=HEAP[$all]; //@line 4141 "socketmodule.c"
        FUNCTION_TABLE[$203]($204); //@line 4141 "socketmodule.c"
        __label__ = 47; break; //@line 4141 "socketmodule.c"
      case 47: // $bb48
        var $205=HEAP[$idna]; //@line 4142 "socketmodule.c"
        var $206=($205)!=0; //@line 4142 "socketmodule.c"
        if ($206) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 48: // $bb49
        var $207=HEAP[$idna]; //@line 4142 "socketmodule.c"
        var $208=(($207)&4294967295); //@line 4142 "socketmodule.c"
        var $209=HEAP[$208]; //@line 4142 "socketmodule.c"
        var $210=((($209) - 1)&4294967295); //@line 4142 "socketmodule.c"
        var $211=HEAP[$idna]; //@line 4142 "socketmodule.c"
        var $212=(($211)&4294967295); //@line 4142 "socketmodule.c"
        HEAP[$212]=$210; //@line 4142 "socketmodule.c"
        var $213=HEAP[$idna]; //@line 4142 "socketmodule.c"
        var $214=(($213)&4294967295); //@line 4142 "socketmodule.c"
        var $215=HEAP[$214]; //@line 4142 "socketmodule.c"
        var $216=((($215))|0)==0; //@line 4142 "socketmodule.c"
        if ($216) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 49: // $bb50
        var $217=HEAP[$idna]; //@line 4142 "socketmodule.c"
        var $218=(($217+4)&4294967295); //@line 4142 "socketmodule.c"
        var $219=HEAP[$218]; //@line 4142 "socketmodule.c"
        var $220=(($219+24)&4294967295); //@line 4142 "socketmodule.c"
        var $221=HEAP[$220]; //@line 4142 "socketmodule.c"
        var $222=HEAP[$idna]; //@line 4142 "socketmodule.c"
        FUNCTION_TABLE[$221]($222); //@line 4142 "socketmodule.c"
        __label__ = 50; break; //@line 4142 "socketmodule.c"
      case 50: // $bb51
        var $223=HEAP[$res0]; //@line 4143 "socketmodule.c"
        var $224=($223)!=0; //@line 4143 "socketmodule.c"
        if ($224) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 4143 "socketmodule.c"
      case 51: // $bb52
        var $225=HEAP[$res0]; //@line 4144 "socketmodule.c"
        _freeaddrinfo($225); //@line 4144 "socketmodule.c"
        __label__ = 52; break; //@line 4144 "socketmodule.c"
      case 52: // $bb53
        HEAP[$0]=0; //@line 4145 "socketmodule.c"
        __label__ = 53; break; //@line 4145 "socketmodule.c"
      case 53: // $bb54
        var $226=HEAP[$0]; //@line 4074 "socketmodule.c"
        HEAP[$retval]=$226; //@line 4074 "socketmodule.c"
        __label__ = 54; break; //@line 4074 "socketmodule.c"
      case 54: // $return
        var $retval55=HEAP[$retval]; //@line 4074 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 4074 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getnameinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1145; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 1145);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sa=__stackBase__+16;
        var $flags=__stackBase__+20;
        var $hostp=__stackBase__+24;
        var $port=__stackBase__+28;
        var $flowinfo=__stackBase__+32;
        var $scope_id=__stackBase__+36;
        var $hbuf=__stackBase__+40;
        var $pbuf=__stackBase__+1065;
        var $hints=__stackBase__+1097;
        var $res=__stackBase__+1129;
        var $error=__stackBase__+1133;
        var $ret=__stackBase__+1137;
        var $sin6=__stackBase__+1141;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sa]=0; //@line 4160 "socketmodule.c"
        HEAP[$res]=0; //@line 4165 "socketmodule.c"
        HEAP[$ret]=0; //@line 4167 "socketmodule.c"
        HEAP[$scope_id]=0; //@line 4169 "socketmodule.c"
        var $1=HEAP[$scope_id]; //@line 4169 "socketmodule.c"
        HEAP[$flowinfo]=$1; //@line 4169 "socketmodule.c"
        var $2=HEAP[$flowinfo]; //@line 4169 "socketmodule.c"
        HEAP[$flags]=$2; //@line 4169 "socketmodule.c"
        var $3=HEAP[$args_addr]; //@line 4170 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, ((__str132)&4294967295), $sa, $flags); //@line 4170 "socketmodule.c"
        var $5=((($4))|0)==0; //@line 4170 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4170 "socketmodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 4171 "socketmodule.c"
        __label__ = 21; break; //@line 4171 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$sa]; //@line 4172 "socketmodule.c"
        var $7=(($6+4)&4294967295); //@line 4172 "socketmodule.c"
        var $8=HEAP[$7]; //@line 4172 "socketmodule.c"
        var $9=(($8+84)&4294967295); //@line 4172 "socketmodule.c"
        var $10=HEAP[$9]; //@line 4172 "socketmodule.c"
        var $11=($10) & 67108864; //@line 4172 "socketmodule.c"
        var $12=((($11))|0)==0; //@line 4172 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4172 "socketmodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_TypeError]; //@line 4173 "socketmodule.c"
        _PyErr_SetString($13, ((__str133)&4294967295)); //@line 4173 "socketmodule.c"
        HEAP[$0]=0; //@line 4175 "socketmodule.c"
        __label__ = 21; break; //@line 4175 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$sa]; //@line 4177 "socketmodule.c"
        var $15=_PyArg_ParseTuple($14, ((__str134)&4294967295), $hostp, $port, $flowinfo, $scope_id); //@line 4177 "socketmodule.c"
        var $16=((($15))|0)==0; //@line 4177 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4177 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 4179 "socketmodule.c"
        __label__ = 21; break; //@line 4179 "socketmodule.c"
      case 6: // $bb5
        var $17=HEAP[$port]; //@line 4180 "socketmodule.c"
        var $pbuf6=$pbuf; //@line 4180 "socketmodule.c"
        var $18=_PyOS_snprintf($pbuf6, 32, ((__str135)&4294967295), $17); //@line 4180 "socketmodule.c"
        var $hints7=$hints; //@line 4181 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints7, 0, 32, 1, 0); //@line 4181 "socketmodule.c"
        var $19=(($hints+4)&4294967295); //@line 4182 "socketmodule.c"
        HEAP[$19]=0; //@line 4182 "socketmodule.c"
        var $20=(($hints+8)&4294967295); //@line 4183 "socketmodule.c"
        HEAP[$20]=2; //@line 4183 "socketmodule.c"
        var $21=HEAP[$hostp]; //@line 4186 "socketmodule.c"
        var $pbuf8=$pbuf; //@line 4186 "socketmodule.c"
        var $22=_getaddrinfo($21, $pbuf8, $hints, $res); //@line 4186 "socketmodule.c"
        HEAP[$error]=$22; //@line 4186 "socketmodule.c"
        var $23=HEAP[$error]; //@line 4189 "socketmodule.c"
        var $24=((($23))|0)!=0; //@line 4189 "socketmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 4189 "socketmodule.c"
      case 7: // $bb9
        var $25=HEAP[$error]; //@line 4190 "socketmodule.c"
        var $26=_set_gaierror($25); //@line 4190 "socketmodule.c"
        __label__ = 18; break; //@line 4190 "socketmodule.c"
      case 8: // $bb10
        var $27=HEAP[$res]; //@line 4193 "socketmodule.c"
        var $28=(($27+28)&4294967295); //@line 4193 "socketmodule.c"
        var $29=HEAP[$28]; //@line 4193 "socketmodule.c"
        var $30=($29)!=0; //@line 4193 "socketmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4193 "socketmodule.c"
      case 9: // $bb11
        var $31=HEAP[_socket_error]; //@line 4194 "socketmodule.c"
        _PyErr_SetString($31, ((__str136)&4294967295)); //@line 4194 "socketmodule.c"
        __label__ = 18; break; //@line 4194 "socketmodule.c"
      case 10: // $bb12
        var $32=HEAP[$res]; //@line 4198 "socketmodule.c"
        var $33=(($32+4)&4294967295); //@line 4198 "socketmodule.c"
        var $34=HEAP[$33]; //@line 4198 "socketmodule.c"
        if ($34 == 2) {
          __label__ = 11; break;
        }
        else if ($34 == 10) {
          __label__ = 14; break;
        }
        else {
        __label__ = 15; break;
        }
        
      case 11: // $bb13
        var $35=HEAP[$sa]; //@line 4201 "socketmodule.c"
        var $36=$35; //@line 4201 "socketmodule.c"
        var $37=(($36+8)&4294967295); //@line 4201 "socketmodule.c"
        var $38=HEAP[$37]; //@line 4201 "socketmodule.c"
        var $39=((($38))|0)!=2; //@line 4201 "socketmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4201 "socketmodule.c"
      case 12: // $bb14
        var $40=HEAP[_socket_error]; //@line 4202 "socketmodule.c"
        _PyErr_SetString($40, ((__str137)&4294967295)); //@line 4202 "socketmodule.c"
        __label__ = 18; break; //@line 4202 "socketmodule.c"
      case 13: // $bb15
        __label__ = 15; break; //@line 4202 "socketmodule.c"
      case 14: // $bb16
        var $41=HEAP[$res]; //@line 4212 "socketmodule.c"
        var $42=(($41+20)&4294967295); //@line 4212 "socketmodule.c"
        var $43=HEAP[$42]; //@line 4212 "socketmodule.c"
        var $44=$43; //@line 4212 "socketmodule.c"
        HEAP[$sin6]=$44; //@line 4212 "socketmodule.c"
        var $45=HEAP[$flowinfo]; //@line 4213 "socketmodule.c"
        var $46=HEAP[$sin6]; //@line 4213 "socketmodule.c"
        var $47=(($46+4)&4294967295); //@line 4213 "socketmodule.c"
        HEAP[$47]=$45; //@line 4213 "socketmodule.c"
        var $48=HEAP[$scope_id]; //@line 4214 "socketmodule.c"
        var $49=HEAP[$sin6]; //@line 4214 "socketmodule.c"
        var $50=(($49+24)&4294967295); //@line 4214 "socketmodule.c"
        HEAP[$50]=$48; //@line 4214 "socketmodule.c"
        __label__ = 15; break; //@line 4214 "socketmodule.c"
      case 15: // $bb17
        var $51=HEAP[$flags]; //@line 4219 "socketmodule.c"
        var $52=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $53=(($52+16)&4294967295); //@line 4219 "socketmodule.c"
        var $54=HEAP[$53]; //@line 4219 "socketmodule.c"
        var $55=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $56=(($55+20)&4294967295); //@line 4219 "socketmodule.c"
        var $57=HEAP[$56]; //@line 4219 "socketmodule.c"
        var $hbuf18=$hbuf; //@line 4219 "socketmodule.c"
        var $pbuf19=$pbuf; //@line 4219 "socketmodule.c"
        var $58=_getnameinfo($57, $54, $hbuf18, 1025, $pbuf19, 32, $51); //@line 4219 "socketmodule.c"
        HEAP[$error]=$58; //@line 4219 "socketmodule.c"
        var $59=HEAP[$error]; //@line 4221 "socketmodule.c"
        var $60=((($59))|0)!=0; //@line 4221 "socketmodule.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 4221 "socketmodule.c"
      case 16: // $bb20
        var $61=HEAP[$error]; //@line 4222 "socketmodule.c"
        var $62=_set_gaierror($61); //@line 4222 "socketmodule.c"
        __label__ = 18; break; //@line 4222 "socketmodule.c"
      case 17: // $bb21
        var $hbuf22=$hbuf; //@line 4225 "socketmodule.c"
        var $pbuf23=$pbuf; //@line 4225 "socketmodule.c"
        var $63=_Py_BuildValue(((__str138)&4294967295), $hbuf22, $pbuf23); //@line 4225 "socketmodule.c"
        HEAP[$ret]=$63; //@line 4225 "socketmodule.c"
        __label__ = 18; break; //@line 4227 "socketmodule.c"
      case 18: // $fail
        var $64=HEAP[$res]; //@line 4228 "socketmodule.c"
        var $65=($64)!=0; //@line 4228 "socketmodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 4228 "socketmodule.c"
      case 19: // $bb24
        var $66=HEAP[$res]; //@line 4229 "socketmodule.c"
        _freeaddrinfo($66); //@line 4229 "socketmodule.c"
        __label__ = 20; break; //@line 4229 "socketmodule.c"
      case 20: // $bb25
        var $67=HEAP[$ret]; //@line 4230 "socketmodule.c"
        HEAP[$0]=$67; //@line 4230 "socketmodule.c"
        __label__ = 21; break; //@line 4230 "socketmodule.c"
      case 21: // $bb26
        var $68=HEAP[$0]; //@line 4171 "socketmodule.c"
        HEAP[$retval]=$68; //@line 4171 "socketmodule.c"
        __label__ = 22; break; //@line 4171 "socketmodule.c"
      case 22: // $return
        var $retval27=HEAP[$retval]; //@line 4171 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 4171 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getdefaulttimeout($self) {
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
        var $1=HEAP[_defaulttimeout]; //@line 4244 "socketmodule.c"
        var $2=($1) < 0; //@line 4244 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4244 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 4245 "socketmodule.c"
        var $4=((($3) + 1)&4294967295); //@line 4245 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 4245 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 4246 "socketmodule.c"
        __label__ = 3; break; //@line 4246 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[_defaulttimeout]; //@line 4249 "socketmodule.c"
        var $6=_PyFloat_FromDouble($5); //@line 4249 "socketmodule.c"
        HEAP[$0]=$6; //@line 4249 "socketmodule.c"
        __label__ = 3; break; //@line 4249 "socketmodule.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 4246 "socketmodule.c"
        HEAP[$retval]=$7; //@line 4246 "socketmodule.c"
        __label__ = 4; break; //@line 4246 "socketmodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 4246 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 4246 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_setdefaulttimeout($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $arg_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $timeout=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$arg_addr]=$arg;
        var $1=HEAP[$arg_addr]; //@line 4264 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 4264 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4264 "socketmodule.c"
      case 1: // $bb
        HEAP[$timeout]=-1; //@line 4265 "socketmodule.c"
        __label__ = 6; break; //@line 4265 "socketmodule.c"
      case 2: // $bb1
        var $3=HEAP[$arg_addr]; //@line 4267 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 4267 "socketmodule.c"
        HEAP[$timeout]=$4; //@line 4267 "socketmodule.c"
        var $5=HEAP[$timeout]; //@line 4268 "socketmodule.c"
        var $6=($5) < 0; //@line 4268 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 4268 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 4269 "socketmodule.c"
        var $8=($7)==0; //@line 4269 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4269 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 4270 "socketmodule.c"
        _PyErr_SetString($9, ((__str36)&4294967295)); //@line 4270 "socketmodule.c"
        __label__ = 5; break; //@line 4270 "socketmodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 4272 "socketmodule.c"
        __label__ = 7; break; //@line 4272 "socketmodule.c"
      case 6: // $bb5
        var $10=HEAP[$timeout]; //@line 4276 "socketmodule.c"
        HEAP[_defaulttimeout]=$10; //@line 4276 "socketmodule.c"
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 4278 "socketmodule.c"
        var $12=((($11) + 1)&4294967295); //@line 4278 "socketmodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 4278 "socketmodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 4279 "socketmodule.c"
        __label__ = 7; break; //@line 4279 "socketmodule.c"
      case 7: // $bb6
        var $13=HEAP[$0]; //@line 4272 "socketmodule.c"
        HEAP[$retval]=$13; //@line 4272 "socketmodule.c"
        __label__ = 8; break; //@line 4272 "socketmodule.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 4272 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 4272 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _os_init() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$0]=1; //@line 4441 "socketmodule.c"
        var $1=HEAP[$0]; //@line 4441 "socketmodule.c"
        HEAP[$retval]=$1; //@line 4441 "socketmodule.c"
        __label__ = 1; break; //@line 4441 "socketmodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 4441 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 4441 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_socket() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $has_ipv6=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_os_init(); //@line 4479 "socketmodule.c"
        var $1=((($0))|0)==0; //@line 4479 "socketmodule.c"
        if ($1) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 4479 "socketmodule.c"
      case 1: // $bb
        var $2=((_sock_type+4)&4294967295); //@line 4482 "socketmodule.c"
        HEAP[$2]=_PyType_Type; //@line 4482 "socketmodule.c"
        var $3=_Py_InitModule4(((__str160)&4294967295), ((_socket_methods)&4294967295), ((_socket_doc)&4294967295), 0, 1013); //@line 4483 "socketmodule.c"
        HEAP[$m]=$3; //@line 4483 "socketmodule.c"
        var $4=HEAP[$m]; //@line 4486 "socketmodule.c"
        var $5=($4)==0; //@line 4486 "socketmodule.c"
        if ($5) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 4486 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[_PyExc_IOError]; //@line 4489 "socketmodule.c"
        var $7=_PyErr_NewException(((__str161)&4294967295), $6, 0); //@line 4489 "socketmodule.c"
        HEAP[_socket_error]=$7; //@line 4489 "socketmodule.c"
        var $8=HEAP[_socket_error]; //@line 4491 "socketmodule.c"
        var $9=($8)==0; //@line 4491 "socketmodule.c"
        if ($9) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 4491 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[_socket_error]; //@line 4493 "socketmodule.c"
        HEAP[((_PySocketModuleAPI+4)&4294967295)]=$10; //@line 4493 "socketmodule.c"
        var $11=HEAP[_socket_error]; //@line 4494 "socketmodule.c"
        var $12=(($11)&4294967295); //@line 4494 "socketmodule.c"
        var $13=HEAP[$12]; //@line 4494 "socketmodule.c"
        var $14=((($13) + 1)&4294967295); //@line 4494 "socketmodule.c"
        var $15=(($11)&4294967295); //@line 4494 "socketmodule.c"
        HEAP[$15]=$14; //@line 4494 "socketmodule.c"
        var $16=HEAP[_socket_error]; //@line 4495 "socketmodule.c"
        var $17=HEAP[$m]; //@line 4495 "socketmodule.c"
        var $18=_PyModule_AddObject($17, ((__str162)&4294967295), $16); //@line 4495 "socketmodule.c"
        var $19=HEAP[_socket_error]; //@line 4496 "socketmodule.c"
        var $20=_PyErr_NewException(((__str163)&4294967295), $19, 0); //@line 4496 "socketmodule.c"
        HEAP[_socket_herror]=$20; //@line 4496 "socketmodule.c"
        var $21=HEAP[_socket_herror]; //@line 4498 "socketmodule.c"
        var $22=($21)==0; //@line 4498 "socketmodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 4498 "socketmodule.c"
      case 4: // $bb3
        var $23=HEAP[_socket_herror]; //@line 4500 "socketmodule.c"
        var $24=(($23)&4294967295); //@line 4500 "socketmodule.c"
        var $25=HEAP[$24]; //@line 4500 "socketmodule.c"
        var $26=((($25) + 1)&4294967295); //@line 4500 "socketmodule.c"
        var $27=(($23)&4294967295); //@line 4500 "socketmodule.c"
        HEAP[$27]=$26; //@line 4500 "socketmodule.c"
        var $28=HEAP[_socket_herror]; //@line 4501 "socketmodule.c"
        var $29=HEAP[$m]; //@line 4501 "socketmodule.c"
        var $30=_PyModule_AddObject($29, ((__str164)&4294967295), $28); //@line 4501 "socketmodule.c"
        var $31=HEAP[_socket_error]; //@line 4502 "socketmodule.c"
        var $32=_PyErr_NewException(((__str165)&4294967295), $31, 0); //@line 4502 "socketmodule.c"
        HEAP[_socket_gaierror]=$32; //@line 4502 "socketmodule.c"
        var $33=HEAP[_socket_gaierror]; //@line 4504 "socketmodule.c"
        var $34=($33)==0; //@line 4504 "socketmodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 4504 "socketmodule.c"
      case 5: // $bb4
        var $35=HEAP[_socket_gaierror]; //@line 4506 "socketmodule.c"
        var $36=(($35)&4294967295); //@line 4506 "socketmodule.c"
        var $37=HEAP[$36]; //@line 4506 "socketmodule.c"
        var $38=((($37) + 1)&4294967295); //@line 4506 "socketmodule.c"
        var $39=(($35)&4294967295); //@line 4506 "socketmodule.c"
        HEAP[$39]=$38; //@line 4506 "socketmodule.c"
        var $40=HEAP[_socket_gaierror]; //@line 4507 "socketmodule.c"
        var $41=HEAP[$m]; //@line 4507 "socketmodule.c"
        var $42=_PyModule_AddObject($41, ((__str166)&4294967295), $40); //@line 4507 "socketmodule.c"
        var $43=HEAP[_socket_error]; //@line 4508 "socketmodule.c"
        var $44=_PyErr_NewException(((__str167)&4294967295), $43, 0); //@line 4508 "socketmodule.c"
        HEAP[_socket_timeout]=$44; //@line 4508 "socketmodule.c"
        var $45=HEAP[_socket_timeout]; //@line 4510 "socketmodule.c"
        var $46=($45)==0; //@line 4510 "socketmodule.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 4510 "socketmodule.c"
      case 6: // $bb5
        var $47=HEAP[_socket_timeout]; //@line 4512 "socketmodule.c"
        var $48=(($47)&4294967295); //@line 4512 "socketmodule.c"
        var $49=HEAP[$48]; //@line 4512 "socketmodule.c"
        var $50=((($49) + 1)&4294967295); //@line 4512 "socketmodule.c"
        var $51=(($47)&4294967295); //@line 4512 "socketmodule.c"
        HEAP[$51]=$50; //@line 4512 "socketmodule.c"
        var $52=HEAP[_socket_timeout]; //@line 4513 "socketmodule.c"
        var $53=HEAP[$m]; //@line 4513 "socketmodule.c"
        var $54=_PyModule_AddObject($53, ((__str94)&4294967295), $52); //@line 4513 "socketmodule.c"
        var $55=((_sock_type)&4294967295); //@line 4514 "socketmodule.c"
        var $56=HEAP[$55]; //@line 4514 "socketmodule.c"
        var $57=((($56) + 1)&4294967295); //@line 4514 "socketmodule.c"
        var $58=((_sock_type)&4294967295); //@line 4514 "socketmodule.c"
        HEAP[$58]=$57; //@line 4514 "socketmodule.c"
        var $59=HEAP[$m]; //@line 4515 "socketmodule.c"
        var $60=_PyModule_AddObject($59, ((__str168)&4294967295), _sock_type); //@line 4515 "socketmodule.c"
        var $61=((($60))|0)!=0; //@line 4515 "socketmodule.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 4515 "socketmodule.c"
      case 7: // $bb6
        var $62=((_sock_type)&4294967295); //@line 4518 "socketmodule.c"
        var $63=HEAP[$62]; //@line 4518 "socketmodule.c"
        var $64=((($63) + 1)&4294967295); //@line 4518 "socketmodule.c"
        var $65=((_sock_type)&4294967295); //@line 4518 "socketmodule.c"
        HEAP[$65]=$64; //@line 4518 "socketmodule.c"
        var $66=HEAP[$m]; //@line 4519 "socketmodule.c"
        var $67=_PyModule_AddObject($66, ((__str169)&4294967295), _sock_type); //@line 4519 "socketmodule.c"
        var $68=((($67))|0)!=0; //@line 4519 "socketmodule.c"
        if ($68) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 4519 "socketmodule.c"
      case 8: // $bb7
        HEAP[$has_ipv6]=__Py_TrueStruct; //@line 4524 "socketmodule.c"
        var $69=HEAP[$has_ipv6]; //@line 4528 "socketmodule.c"
        var $70=(($69)&4294967295); //@line 4528 "socketmodule.c"
        var $71=HEAP[$70]; //@line 4528 "socketmodule.c"
        var $72=((($71) + 1)&4294967295); //@line 4528 "socketmodule.c"
        var $73=HEAP[$has_ipv6]; //@line 4528 "socketmodule.c"
        var $74=(($73)&4294967295); //@line 4528 "socketmodule.c"
        HEAP[$74]=$72; //@line 4528 "socketmodule.c"
        var $75=HEAP[$m]; //@line 4529 "socketmodule.c"
        var $76=HEAP[$has_ipv6]; //@line 4529 "socketmodule.c"
        var $77=_PyModule_AddObject($75, ((__str170)&4294967295), $76); //@line 4529 "socketmodule.c"
        var $78=_PyCapsule_New(_PySocketModuleAPI, ((__str171)&4294967295), 0); //@line 4532 "socketmodule.c"
        var $79=HEAP[$m]; //@line 4532 "socketmodule.c"
        var $80=_PyModule_AddObject($79, ((__str172)&4294967295), $78); //@line 4532 "socketmodule.c"
        var $81=((($80))|0)!=0; //@line 4532 "socketmodule.c"
        if ($81) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 4532 "socketmodule.c"
      case 9: // $bb8
        var $82=HEAP[$m]; //@line 4539 "socketmodule.c"
        var $83=_PyModule_AddIntConstant($82, ((__str173)&4294967295), 0); //@line 4539 "socketmodule.c"
        var $84=HEAP[$m]; //@line 4541 "socketmodule.c"
        var $85=_PyModule_AddIntConstant($84, ((__str174)&4294967295), 2); //@line 4541 "socketmodule.c"
        var $86=HEAP[$m]; //@line 4543 "socketmodule.c"
        var $87=_PyModule_AddIntConstant($86, ((__str175)&4294967295), 10); //@line 4543 "socketmodule.c"
        var $88=HEAP[$m]; //@line 4546 "socketmodule.c"
        var $89=_PyModule_AddIntConstant($88, ((__str176)&4294967295), 1); //@line 4546 "socketmodule.c"
        var $90=HEAP[$m]; //@line 4550 "socketmodule.c"
        var $91=_PyModule_AddIntConstant($90, ((__str177)&4294967295), 3); //@line 4550 "socketmodule.c"
        var $92=HEAP[$m]; //@line 4553 "socketmodule.c"
        var $93=_PyModule_AddIntConstant($92, ((__str178)&4294967295), 4); //@line 4553 "socketmodule.c"
        var $94=HEAP[$m]; //@line 4557 "socketmodule.c"
        var $95=_PyModule_AddIntConstant($94, ((__str179)&4294967295), 5); //@line 4557 "socketmodule.c"
        var $96=HEAP[$m]; //@line 4561 "socketmodule.c"
        var $97=_PyModule_AddIntConstant($96, ((__str180)&4294967295), 6); //@line 4561 "socketmodule.c"
        var $98=HEAP[$m]; //@line 4565 "socketmodule.c"
        var $99=_PyModule_AddIntConstant($98, ((__str181)&4294967295), 7); //@line 4565 "socketmodule.c"
        var $100=HEAP[$m]; //@line 4569 "socketmodule.c"
        var $101=_PyModule_AddIntConstant($100, ((__str182)&4294967295), 8); //@line 4569 "socketmodule.c"
        var $102=HEAP[$m]; //@line 4577 "socketmodule.c"
        var $103=_PyModule_AddIntConstant($102, ((__str183)&4294967295), 9); //@line 4577 "socketmodule.c"
        var $104=HEAP[$m]; //@line 4580 "socketmodule.c"
        var $105=_PyModule_AddIntConstant($104, ((__str175)&4294967295), 10); //@line 4580 "socketmodule.c"
        var $106=HEAP[$m]; //@line 4584 "socketmodule.c"
        var $107=_PyModule_AddIntConstant($106, ((__str184)&4294967295), 11); //@line 4584 "socketmodule.c"
        var $108=HEAP[$m]; //@line 4588 "socketmodule.c"
        var $109=_PyModule_AddIntConstant($108, ((__str185)&4294967295), 12); //@line 4588 "socketmodule.c"
        var $110=HEAP[$m]; //@line 4592 "socketmodule.c"
        var $111=_PyModule_AddIntConstant($110, ((__str186)&4294967295), 13); //@line 4592 "socketmodule.c"
        var $112=HEAP[$m]; //@line 4596 "socketmodule.c"
        var $113=_PyModule_AddIntConstant($112, ((__str187)&4294967295), 14); //@line 4596 "socketmodule.c"
        var $114=HEAP[$m]; //@line 4600 "socketmodule.c"
        var $115=_PyModule_AddIntConstant($114, ((__str188)&4294967295), 15); //@line 4600 "socketmodule.c"
        var $116=HEAP[$m]; //@line 4604 "socketmodule.c"
        var $117=_PyModule_AddIntConstant($116, ((__str189)&4294967295), 16); //@line 4604 "socketmodule.c"
        var $118=HEAP[$m]; //@line 4605 "socketmodule.c"
        var $119=_PyModule_AddIntConstant($118, ((__str190)&4294967295), 0); //@line 4605 "socketmodule.c"
        var $120=HEAP[$m]; //@line 4612 "socketmodule.c"
        var $121=_PyModule_AddIntConstant($120, ((__str191)&4294967295), 2); //@line 4612 "socketmodule.c"
        var $122=HEAP[$m]; //@line 4613 "socketmodule.c"
        var $123=_PyModule_AddIntConstant($122, ((__str192)&4294967295), 3); //@line 4613 "socketmodule.c"
        var $124=HEAP[$m]; //@line 4618 "socketmodule.c"
        var $125=_PyModule_AddIntConstant($124, ((__str193)&4294967295), 5); //@line 4618 "socketmodule.c"
        var $126=HEAP[$m]; //@line 4621 "socketmodule.c"
        var $127=_PyModule_AddIntConstant($126, ((__str194)&4294967295), 6); //@line 4621 "socketmodule.c"
        var $128=HEAP[$m]; //@line 4629 "socketmodule.c"
        var $129=_PyModule_AddIntConstant($128, ((__str195)&4294967295), 13); //@line 4629 "socketmodule.c"
        var $130=HEAP[$m]; //@line 4631 "socketmodule.c"
        var $131=_PyModule_AddIntConstant($130, ((__str196)&4294967295), 14); //@line 4631 "socketmodule.c"
        var $132=HEAP[$m]; //@line 4639 "socketmodule.c"
        var $133=_PyModule_AddIntConstant($132, ((__str197)&4294967295), 16); //@line 4639 "socketmodule.c"
        var $134=HEAP[$m]; //@line 4643 "socketmodule.c"
        var $135=_PyModule_AddIntConstant($134, ((__str198)&4294967295), 18); //@line 4643 "socketmodule.c"
        var $136=HEAP[$m]; //@line 4647 "socketmodule.c"
        var $137=_PyModule_AddIntConstant($136, ((__str199)&4294967295), 19); //@line 4647 "socketmodule.c"
        var $138=HEAP[$m]; //@line 4651 "socketmodule.c"
        var $139=_PyModule_AddIntConstant($138, ((__str200)&4294967295), 20); //@line 4651 "socketmodule.c"
        var $140=HEAP[$m]; //@line 4655 "socketmodule.c"
        var $141=_PyModule_AddIntConstant($140, ((__str201)&4294967295), 22); //@line 4655 "socketmodule.c"
        var $142=HEAP[$m]; //@line 4659 "socketmodule.c"
        var $143=_PyModule_AddIntConstant($142, ((__str202)&4294967295), 23); //@line 4659 "socketmodule.c"
        var $144=HEAP[$m]; //@line 4663 "socketmodule.c"
        var $145=_PyModule_AddIntConstant($144, ((__str203)&4294967295), 24); //@line 4663 "socketmodule.c"
        var $146=HEAP[$m]; //@line 4667 "socketmodule.c"
        var $147=_PyModule_AddIntConstant($146, ((__str204)&4294967295), 25); //@line 4667 "socketmodule.c"
        var $148=HEAP[$m]; //@line 4671 "socketmodule.c"
        var $149=_PyModule_AddIntConstant($148, ((__str205)&4294967295), 26); //@line 4671 "socketmodule.c"
        var $150=HEAP[$m]; //@line 4695 "socketmodule.c"
        var $151=_PyModule_AddIntConstant($150, ((__str206)&4294967295), 17); //@line 4695 "socketmodule.c"
        var $152=HEAP[$m]; //@line 4698 "socketmodule.c"
        var $153=_PyModule_AddIntConstant($152, ((__str207)&4294967295), 17); //@line 4698 "socketmodule.c"
        var $154=HEAP[$m]; //@line 4701 "socketmodule.c"
        var $155=_PyModule_AddIntConstant($154, ((__str208)&4294967295), 0); //@line 4701 "socketmodule.c"
        var $156=HEAP[$m]; //@line 4704 "socketmodule.c"
        var $157=_PyModule_AddIntConstant($156, ((__str209)&4294967295), 1); //@line 4704 "socketmodule.c"
        var $158=HEAP[$m]; //@line 4707 "socketmodule.c"
        var $159=_PyModule_AddIntConstant($158, ((__str210)&4294967295), 2); //@line 4707 "socketmodule.c"
        var $160=HEAP[$m]; //@line 4710 "socketmodule.c"
        var $161=_PyModule_AddIntConstant($160, ((__str211)&4294967295), 3); //@line 4710 "socketmodule.c"
        var $162=HEAP[$m]; //@line 4713 "socketmodule.c"
        var $163=_PyModule_AddIntConstant($162, ((__str212)&4294967295), 4); //@line 4713 "socketmodule.c"
        var $164=HEAP[$m]; //@line 4716 "socketmodule.c"
        var $165=_PyModule_AddIntConstant($164, ((__str213)&4294967295), 5); //@line 4716 "socketmodule.c"
        var $166=HEAP[$m]; //@line 4719 "socketmodule.c"
        var $167=_PyModule_AddIntConstant($166, ((__str214)&4294967295), 6); //@line 4719 "socketmodule.c"
        var $168=HEAP[$m]; //@line 4723 "socketmodule.c"
        var $169=_PyModule_AddIntConstant($168, ((__str215)&4294967295), 30); //@line 4723 "socketmodule.c"
        var $170=HEAP[$m]; //@line 4726 "socketmodule.c"
        var $171=_PyModule_AddIntConstant($170, ((__str216)&4294967295), 1); //@line 4726 "socketmodule.c"
        var $172=HEAP[$m]; //@line 4727 "socketmodule.c"
        var $173=_PyModule_AddIntConstant($172, ((__str217)&4294967295), 2); //@line 4727 "socketmodule.c"
        var $174=HEAP[$m]; //@line 4728 "socketmodule.c"
        var $175=_PyModule_AddIntConstant($174, ((__str218)&4294967295), 3); //@line 4728 "socketmodule.c"
        var $176=HEAP[$m]; //@line 4730 "socketmodule.c"
        var $177=_PyModule_AddIntConstant($176, ((__str219)&4294967295), 1); //@line 4730 "socketmodule.c"
        var $178=HEAP[$m]; //@line 4731 "socketmodule.c"
        var $179=_PyModule_AddIntConstant($178, ((__str220)&4294967295), 2); //@line 4731 "socketmodule.c"
        var $180=HEAP[$m]; //@line 4732 "socketmodule.c"
        var $181=_PyModule_AddIntConstant($180, ((__str221)&4294967295), 3); //@line 4732 "socketmodule.c"
        var $182=HEAP[$m]; //@line 4735 "socketmodule.c"
        var $183=_PyModule_AddIntConstant($182, ((__str222)&4294967295), 271); //@line 4735 "socketmodule.c"
        var $184=HEAP[$m]; //@line 4736 "socketmodule.c"
        var $185=_PyModule_AddIntConstant($184, ((__str223)&4294967295), 127); //@line 4736 "socketmodule.c"
        var $186=HEAP[$m]; //@line 4737 "socketmodule.c"
        var $187=_PyModule_AddIntConstant($186, ((__str224)&4294967295), 128); //@line 4737 "socketmodule.c"
        var $188=HEAP[$m]; //@line 4738 "socketmodule.c"
        var $189=_PyModule_AddIntConstant($188, ((__str225)&4294967295), 129); //@line 4738 "socketmodule.c"
        var $190=HEAP[$m]; //@line 4740 "socketmodule.c"
        var $191=_PyModule_AddIntConstant($190, ((__str226)&4294967295), 130); //@line 4740 "socketmodule.c"
        var $192=HEAP[$m]; //@line 4742 "socketmodule.c"
        var $193=_PyModule_AddIntConstant($192, ((__str227)&4294967295), 0); //@line 4742 "socketmodule.c"
        var $194=HEAP[$m]; //@line 4744 "socketmodule.c"
        var $195=_PyModule_AddIntConstant($194, ((__str228)&4294967295), 1); //@line 4744 "socketmodule.c"
        var $196=HEAP[$m]; //@line 4746 "socketmodule.c"
        var $197=_PyModule_AddIntConstant($196, ((__str229)&4294967295), 2); //@line 4746 "socketmodule.c"
        var $198=HEAP[$m]; //@line 4748 "socketmodule.c"
        var $199=_PyModule_AddIntConstant($198, ((__str230)&4294967295), 3); //@line 4748 "socketmodule.c"
        var $200=HEAP[$m]; //@line 4752 "socketmodule.c"
        var $201=_PyModule_AddIntConstant($200, ((__str231)&4294967295), 1); //@line 4752 "socketmodule.c"
        var $202=HEAP[$m]; //@line 4753 "socketmodule.c"
        var $203=_PyModule_AddIntConstant($202, ((__str232)&4294967295), 2); //@line 4753 "socketmodule.c"
        var $204=HEAP[$m]; //@line 4756 "socketmodule.c"
        var $205=_PyModule_AddIntConstant($204, ((__str233)&4294967295), 4); //@line 4756 "socketmodule.c"
        var $206=HEAP[$m]; //@line 4758 "socketmodule.c"
        var $207=_PyModule_AddIntConstant($206, ((__str234)&4294967295), -1); //@line 4758 "socketmodule.c"
        var $208=HEAP[$m]; //@line 4759 "socketmodule.c"
        var $209=_PyModule_AddIntConstant($208, ((__str235)&4294967295), 1); //@line 4759 "socketmodule.c"
        var $210=HEAP[$m]; //@line 4760 "socketmodule.c"
        var $211=_PyModule_AddIntConstant($210, ((__str236)&4294967295), 2); //@line 4760 "socketmodule.c"
        var $212=HEAP[$m]; //@line 4761 "socketmodule.c"
        var $213=_PyModule_AddIntConstant($212, ((__str237)&4294967295), 3); //@line 4761 "socketmodule.c"
        var $214=HEAP[$m]; //@line 4762 "socketmodule.c"
        var $215=_PyModule_AddIntConstant($214, ((__str238)&4294967295), 0); //@line 4762 "socketmodule.c"
        var $216=HEAP[$m]; //@line 4763 "socketmodule.c"
        var $217=_PyModule_AddIntConstant($216, ((__str239)&4294967295), 1); //@line 4763 "socketmodule.c"
        var $218=HEAP[$m]; //@line 4767 "socketmodule.c"
        var $219=_PyModule_AddIntConstant($218, ((__str240)&4294967295), 1); //@line 4767 "socketmodule.c"
        var $220=HEAP[$m]; //@line 4768 "socketmodule.c"
        var $221=_PyModule_AddIntConstant($220, ((__str241)&4294967295), 2); //@line 4768 "socketmodule.c"
        var $222=HEAP[$m]; //@line 4771 "socketmodule.c"
        var $223=_PyModule_AddIntConstant($222, ((__str242)&4294967295), 3); //@line 4771 "socketmodule.c"
        var $224=HEAP[$m]; //@line 4772 "socketmodule.c"
        var $225=_PyModule_AddIntConstant($224, ((__str243)&4294967295), 5); //@line 4772 "socketmodule.c"
        var $226=HEAP[$m]; //@line 4774 "socketmodule.c"
        var $227=_PyModule_AddIntConstant($226, ((__str244)&4294967295), 4); //@line 4774 "socketmodule.c"
        var $228=HEAP[$m]; //@line 4779 "socketmodule.c"
        var $229=_PyModule_AddIntConstant($228, ((__str245)&4294967295), 1); //@line 4779 "socketmodule.c"
        var $230=HEAP[$m]; //@line 4782 "socketmodule.c"
        var $231=_PyModule_AddIntConstant($230, ((__str246)&4294967295), 30); //@line 4782 "socketmodule.c"
        var $232=HEAP[$m]; //@line 4785 "socketmodule.c"
        var $233=_PyModule_AddIntConstant($232, ((__str247)&4294967295), 2); //@line 4785 "socketmodule.c"
        var $234=HEAP[$m]; //@line 4792 "socketmodule.c"
        var $235=_PyModule_AddIntConstant($234, ((__str248)&4294967295), 9); //@line 4792 "socketmodule.c"
        var $236=HEAP[$m]; //@line 4795 "socketmodule.c"
        var $237=_PyModule_AddIntConstant($236, ((__str249)&4294967295), 5); //@line 4795 "socketmodule.c"
        var $238=HEAP[$m]; //@line 4798 "socketmodule.c"
        var $239=_PyModule_AddIntConstant($238, ((__str250)&4294967295), 6); //@line 4798 "socketmodule.c"
        var $240=HEAP[$m]; //@line 4804 "socketmodule.c"
        var $241=_PyModule_AddIntConstant($240, ((__str251)&4294967295), 13); //@line 4804 "socketmodule.c"
        var $242=HEAP[$m]; //@line 4807 "socketmodule.c"
        var $243=_PyModule_AddIntConstant($242, ((__str252)&4294967295), 10); //@line 4807 "socketmodule.c"
        var $244=HEAP[$m]; //@line 4813 "socketmodule.c"
        var $245=_PyModule_AddIntConstant($244, ((__str253)&4294967295), 7); //@line 4813 "socketmodule.c"
        var $246=HEAP[$m]; //@line 4816 "socketmodule.c"
        var $247=_PyModule_AddIntConstant($246, ((__str254)&4294967295), 8); //@line 4816 "socketmodule.c"
        var $248=HEAP[$m]; //@line 4819 "socketmodule.c"
        var $249=_PyModule_AddIntConstant($248, ((__str255)&4294967295), 19); //@line 4819 "socketmodule.c"
        var $250=HEAP[$m]; //@line 4822 "socketmodule.c"
        var $251=_PyModule_AddIntConstant($250, ((__str256)&4294967295), 18); //@line 4822 "socketmodule.c"
        var $252=HEAP[$m]; //@line 4825 "socketmodule.c"
        var $253=_PyModule_AddIntConstant($252, ((__str257)&4294967295), 21); //@line 4825 "socketmodule.c"
        var $254=HEAP[$m]; //@line 4828 "socketmodule.c"
        var $255=_PyModule_AddIntConstant($254, ((__str258)&4294967295), 20); //@line 4828 "socketmodule.c"
        var $256=HEAP[$m]; //@line 4831 "socketmodule.c"
        var $257=_PyModule_AddIntConstant($256, ((__str259)&4294967295), 4); //@line 4831 "socketmodule.c"
        var $258=HEAP[$m]; //@line 4834 "socketmodule.c"
        var $259=_PyModule_AddIntConstant($258, ((__str260)&4294967295), 3); //@line 4834 "socketmodule.c"
        var $260=HEAP[$m]; //@line 4842 "socketmodule.c"
        var $261=_PyModule_AddIntConstant($260, ((__str261)&4294967295), 128); //@line 4842 "socketmodule.c"
        var $262=HEAP[$m]; //@line 4849 "socketmodule.c"
        var $263=_PyModule_AddIntConstant($262, ((__str262)&4294967295), 1); //@line 4849 "socketmodule.c"
        var $264=HEAP[$m]; //@line 4852 "socketmodule.c"
        var $265=_PyModule_AddIntConstant($264, ((__str263)&4294967295), 2); //@line 4852 "socketmodule.c"
        var $266=HEAP[$m]; //@line 4855 "socketmodule.c"
        var $267=_PyModule_AddIntConstant($266, ((__str264)&4294967295), 4); //@line 4855 "socketmodule.c"
        var $268=HEAP[$m]; //@line 4858 "socketmodule.c"
        var $269=_PyModule_AddIntConstant($268, ((__str265)&4294967295), 64); //@line 4858 "socketmodule.c"
        var $270=HEAP[$m]; //@line 4861 "socketmodule.c"
        var $271=_PyModule_AddIntConstant($270, ((__str266)&4294967295), 128); //@line 4861 "socketmodule.c"
        var $272=HEAP[$m]; //@line 4864 "socketmodule.c"
        var $273=_PyModule_AddIntConstant($272, ((__str267)&4294967295), 32); //@line 4864 "socketmodule.c"
        var $274=HEAP[$m]; //@line 4867 "socketmodule.c"
        var $275=_PyModule_AddIntConstant($274, ((__str268)&4294967295), 8); //@line 4867 "socketmodule.c"
        var $276=HEAP[$m]; //@line 4870 "socketmodule.c"
        var $277=_PyModule_AddIntConstant($276, ((__str269)&4294967295), 256); //@line 4870 "socketmodule.c"
        var $278=HEAP[$m]; //@line 4881 "socketmodule.c"
        var $279=_PyModule_AddIntConstant($278, ((__str270)&4294967295), 1); //@line 4881 "socketmodule.c"
        var $280=HEAP[$m]; //@line 4884 "socketmodule.c"
        var $281=_PyModule_AddIntConstant($280, ((__str271)&4294967295), 0); //@line 4884 "socketmodule.c"
        var $282=HEAP[$m]; //@line 4904 "socketmodule.c"
        var $283=_PyModule_AddIntConstant($282, ((__str272)&4294967295), 6); //@line 4904 "socketmodule.c"
        var $284=HEAP[$m]; //@line 4911 "socketmodule.c"
        var $285=_PyModule_AddIntConstant($284, ((__str273)&4294967295), 17); //@line 4911 "socketmodule.c"
        var $286=HEAP[$m]; //@line 4914 "socketmodule.c"
        var $287=_PyModule_AddIntConstant($286, ((__str274)&4294967295), 0); //@line 4914 "socketmodule.c"
        var $288=HEAP[$m]; //@line 4919 "socketmodule.c"
        var $289=_PyModule_AddIntConstant($288, ((__str275)&4294967295), 0); //@line 4919 "socketmodule.c"
        var $290=HEAP[$m]; //@line 4922 "socketmodule.c"
        var $291=_PyModule_AddIntConstant($290, ((__str276)&4294967295), 1); //@line 4922 "socketmodule.c"
        var $292=HEAP[$m]; //@line 4927 "socketmodule.c"
        var $293=_PyModule_AddIntConstant($292, ((__str277)&4294967295), 2); //@line 4927 "socketmodule.c"
        var $294=HEAP[$m]; //@line 4936 "socketmodule.c"
        var $295=_PyModule_AddIntConstant($294, ((__str278)&4294967295), 41); //@line 4936 "socketmodule.c"
        var $296=HEAP[$m]; //@line 4939 "socketmodule.c"
        var $297=_PyModule_AddIntConstant($296, ((__str279)&4294967295), 4); //@line 4939 "socketmodule.c"
        var $298=HEAP[$m]; //@line 4942 "socketmodule.c"
        var $299=_PyModule_AddIntConstant($298, ((__str280)&4294967295), 6); //@line 4942 "socketmodule.c"
        var $300=HEAP[$m]; //@line 4947 "socketmodule.c"
        var $301=_PyModule_AddIntConstant($300, ((__str281)&4294967295), 8); //@line 4947 "socketmodule.c"
        var $302=HEAP[$m]; //@line 4950 "socketmodule.c"
        var $303=_PyModule_AddIntConstant($302, ((__str282)&4294967295), 12); //@line 4950 "socketmodule.c"
        var $304=HEAP[$m]; //@line 4953 "socketmodule.c"
        var $305=_PyModule_AddIntConstant($304, ((__str283)&4294967295), 17); //@line 4953 "socketmodule.c"
        var $306=HEAP[$m]; //@line 4958 "socketmodule.c"
        var $307=_PyModule_AddIntConstant($306, ((__str284)&4294967295), 22); //@line 4958 "socketmodule.c"
        var $308=HEAP[$m]; //@line 4967 "socketmodule.c"
        var $309=_PyModule_AddIntConstant($308, ((__str285)&4294967295), 29); //@line 4967 "socketmodule.c"
        var $310=HEAP[$m]; //@line 4970 "socketmodule.c"
        var $311=_PyModule_AddIntConstant($310, ((__str278)&4294967295), 41); //@line 4970 "socketmodule.c"
        var $312=HEAP[$m]; //@line 4973 "socketmodule.c"
        var $313=_PyModule_AddIntConstant($312, ((__str286)&4294967295), 43); //@line 4973 "socketmodule.c"
        var $314=HEAP[$m]; //@line 4976 "socketmodule.c"
        var $315=_PyModule_AddIntConstant($314, ((__str287)&4294967295), 44); //@line 4976 "socketmodule.c"
        var $316=HEAP[$m]; //@line 4979 "socketmodule.c"
        var $317=_PyModule_AddIntConstant($316, ((__str288)&4294967295), 46); //@line 4979 "socketmodule.c"
        var $318=HEAP[$m]; //@line 4982 "socketmodule.c"
        var $319=_PyModule_AddIntConstant($318, ((__str289)&4294967295), 47); //@line 4982 "socketmodule.c"
        var $320=HEAP[$m]; //@line 4985 "socketmodule.c"
        var $321=_PyModule_AddIntConstant($320, ((__str290)&4294967295), 50); //@line 4985 "socketmodule.c"
        var $322=HEAP[$m]; //@line 4988 "socketmodule.c"
        var $323=_PyModule_AddIntConstant($322, ((__str291)&4294967295), 51); //@line 4988 "socketmodule.c"
        var $324=HEAP[$m]; //@line 4994 "socketmodule.c"
        var $325=_PyModule_AddIntConstant($324, ((__str292)&4294967295), 58); //@line 4994 "socketmodule.c"
        var $326=HEAP[$m]; //@line 4997 "socketmodule.c"
        var $327=_PyModule_AddIntConstant($326, ((__str293)&4294967295), 59); //@line 4997 "socketmodule.c"
        var $328=HEAP[$m]; //@line 5000 "socketmodule.c"
        var $329=_PyModule_AddIntConstant($328, ((__str294)&4294967295), 60); //@line 5000 "socketmodule.c"
        var $330=HEAP[$m]; //@line 5009 "socketmodule.c"
        var $331=_PyModule_AddIntConstant($330, ((__str295)&4294967295), 103); //@line 5009 "socketmodule.c"
        var $332=HEAP[$m]; //@line 5022 "socketmodule.c"
        var $333=_PyModule_AddIntConstant($332, ((__str296)&4294967295), 255); //@line 5022 "socketmodule.c"
        var $334=HEAP[$m]; //@line 5032 "socketmodule.c"
        var $335=_PyModule_AddIntConstant($334, ((__str297)&4294967295), 1024); //@line 5032 "socketmodule.c"
        var $336=HEAP[$m]; //@line 5039 "socketmodule.c"
        var $337=_PyModule_AddIntConstant($336, ((__str298)&4294967295), 5000); //@line 5039 "socketmodule.c"
        var $338=HEAP[$m]; //@line 5044 "socketmodule.c"
        var $339=_PyModule_AddIntConstant($338, ((__str299)&4294967295), 0); //@line 5044 "socketmodule.c"
        var $340=HEAP[$m]; //@line 5049 "socketmodule.c"
        var $341=_PyModule_AddIntConstant($340, ((__str300)&4294967295), -1); //@line 5049 "socketmodule.c"
        var $342=HEAP[$m]; //@line 5054 "socketmodule.c"
        var $343=_PyModule_AddIntConstant($342, ((__str301)&4294967295), 2130706433); //@line 5054 "socketmodule.c"
        var $344=HEAP[$m]; //@line 5059 "socketmodule.c"
        var $345=_PyModule_AddIntConstant($344, ((__str302)&4294967295), -536870912); //@line 5059 "socketmodule.c"
        var $346=HEAP[$m]; //@line 5064 "socketmodule.c"
        var $347=_PyModule_AddIntConstant($346, ((__str303)&4294967295), -536870911); //@line 5064 "socketmodule.c"
        var $348=HEAP[$m]; //@line 5070 "socketmodule.c"
        var $349=_PyModule_AddIntConstant($348, ((__str304)&4294967295), -536870657); //@line 5070 "socketmodule.c"
        var $350=HEAP[$m]; //@line 5076 "socketmodule.c"
        var $351=_PyModule_AddIntConstant($350, ((__str305)&4294967295), -1); //@line 5076 "socketmodule.c"
        var $352=HEAP[$m]; //@line 5083 "socketmodule.c"
        var $353=_PyModule_AddIntConstant($352, ((__str306)&4294967295), 4); //@line 5083 "socketmodule.c"
        var $354=HEAP[$m]; //@line 5086 "socketmodule.c"
        var $355=_PyModule_AddIntConstant($354, ((__str307)&4294967295), 3); //@line 5086 "socketmodule.c"
        var $356=HEAP[$m]; //@line 5089 "socketmodule.c"
        var $357=_PyModule_AddIntConstant($356, ((__str308)&4294967295), 1); //@line 5089 "socketmodule.c"
        var $358=HEAP[$m]; //@line 5092 "socketmodule.c"
        var $359=_PyModule_AddIntConstant($358, ((__str309)&4294967295), 2); //@line 5092 "socketmodule.c"
        var $360=HEAP[$m]; //@line 5095 "socketmodule.c"
        var $361=_PyModule_AddIntConstant($360, ((__str310)&4294967295), 6); //@line 5095 "socketmodule.c"
        var $362=HEAP[$m]; //@line 5098 "socketmodule.c"
        var $363=_PyModule_AddIntConstant($362, ((__str311)&4294967295), 7); //@line 5098 "socketmodule.c"
        var $364=HEAP[$m]; //@line 5104 "socketmodule.c"
        var $365=_PyModule_AddIntConstant($364, ((__str312)&4294967295), 7); //@line 5104 "socketmodule.c"
        var $366=HEAP[$m]; //@line 5107 "socketmodule.c"
        var $367=_PyModule_AddIntConstant($366, ((__str313)&4294967295), 32); //@line 5107 "socketmodule.c"
        var $368=HEAP[$m]; //@line 5110 "socketmodule.c"
        var $369=_PyModule_AddIntConstant($368, ((__str314)&4294967295), 33); //@line 5110 "socketmodule.c"
        var $370=HEAP[$m]; //@line 5113 "socketmodule.c"
        var $371=_PyModule_AddIntConstant($370, ((__str315)&4294967295), 34); //@line 5113 "socketmodule.c"
        var $372=HEAP[$m]; //@line 5116 "socketmodule.c"
        var $373=_PyModule_AddIntConstant($372, ((__str316)&4294967295), 35); //@line 5116 "socketmodule.c"
        var $374=HEAP[$m]; //@line 5119 "socketmodule.c"
        var $375=_PyModule_AddIntConstant($374, ((__str317)&4294967295), 36); //@line 5119 "socketmodule.c"
        var $376=HEAP[$m]; //@line 5122 "socketmodule.c"
        var $377=_PyModule_AddIntConstant($376, ((__str318)&4294967295), 1); //@line 5122 "socketmodule.c"
        var $378=HEAP[$m]; //@line 5126 "socketmodule.c"
        var $379=_PyModule_AddIntConstant($378, ((__str319)&4294967295), 1); //@line 5126 "socketmodule.c"
        var $380=HEAP[$m]; //@line 5130 "socketmodule.c"
        var $381=_PyModule_AddIntConstant($380, ((__str320)&4294967295), 20); //@line 5130 "socketmodule.c"
        var $382=HEAP[$m]; //@line 5135 "socketmodule.c"
        var $383=_PyModule_AddIntConstant($382, ((__str321)&4294967295), 20); //@line 5135 "socketmodule.c"
        var $384=HEAP[$m]; //@line 5138 "socketmodule.c"
        var $385=_PyModule_AddIntConstant($384, ((__str322)&4294967295), 21); //@line 5138 "socketmodule.c"
        var $386=HEAP[$m]; //@line 5141 "socketmodule.c"
        var $387=_PyModule_AddIntConstant($386, ((__str323)&4294967295), 18); //@line 5141 "socketmodule.c"
        var $388=HEAP[$m]; //@line 5144 "socketmodule.c"
        var $389=_PyModule_AddIntConstant($388, ((__str324)&4294967295), 17); //@line 5144 "socketmodule.c"
        var $390=HEAP[$m]; //@line 5147 "socketmodule.c"
        var $391=_PyModule_AddIntConstant($390, ((__str325)&4294967295), 19); //@line 5147 "socketmodule.c"
        var $392=HEAP[$m]; //@line 5150 "socketmodule.c"
        var $393=_PyModule_AddIntConstant($392, ((__str326)&4294967295), 16); //@line 5150 "socketmodule.c"
        var $394=HEAP[$m]; //@line 5154 "socketmodule.c"
        var $395=_PyModule_AddIntConstant($394, ((__str327)&4294967295), 26); //@line 5154 "socketmodule.c"
        var $396=HEAP[$m]; //@line 5158 "socketmodule.c"
        var $397=_PyModule_AddIntConstant($396, ((__str328)&4294967295), 7); //@line 5158 "socketmodule.c"
        var $398=HEAP[$m]; //@line 5164 "socketmodule.c"
        var $399=_PyModule_AddIntConstant($398, ((__str329)&4294967295), 59); //@line 5164 "socketmodule.c"
        var $400=HEAP[$m]; //@line 5167 "socketmodule.c"
        var $401=_PyModule_AddIntConstant($400, ((__str330)&4294967295), 52); //@line 5167 "socketmodule.c"
        var $402=HEAP[$m]; //@line 5170 "socketmodule.c"
        var $403=_PyModule_AddIntConstant($402, ((__str331)&4294967295), 54); //@line 5170 "socketmodule.c"
        var $404=HEAP[$m]; //@line 5173 "socketmodule.c"
        var $405=_PyModule_AddIntConstant($404, ((__str332)&4294967295), 9); //@line 5173 "socketmodule.c"
        var $406=HEAP[$m]; //@line 5179 "socketmodule.c"
        var $407=_PyModule_AddIntConstant($406, ((__str333)&4294967295), 50); //@line 5179 "socketmodule.c"
        var $408=HEAP[$m]; //@line 5182 "socketmodule.c"
        var $409=_PyModule_AddIntConstant($408, ((__str334)&4294967295), 58); //@line 5182 "socketmodule.c"
        var $410=HEAP[$m]; //@line 5185 "socketmodule.c"
        var $411=_PyModule_AddIntConstant($410, ((__str335)&4294967295), 51); //@line 5185 "socketmodule.c"
        var $412=HEAP[$m]; //@line 5188 "socketmodule.c"
        var $413=_PyModule_AddIntConstant($412, ((__str336)&4294967295), 53); //@line 5188 "socketmodule.c"
        var $414=HEAP[$m]; //@line 5191 "socketmodule.c"
        var $415=_PyModule_AddIntConstant($414, ((__str337)&4294967295), 49); //@line 5191 "socketmodule.c"
        var $416=HEAP[$m]; //@line 5194 "socketmodule.c"
        var $417=_PyModule_AddIntConstant($416, ((__str338)&4294967295), 56); //@line 5194 "socketmodule.c"
        var $418=HEAP[$m]; //@line 5197 "socketmodule.c"
        var $419=_PyModule_AddIntConstant($418, ((__str339)&4294967295), 66); //@line 5197 "socketmodule.c"
        var $420=HEAP[$m]; //@line 5200 "socketmodule.c"
        var $421=_PyModule_AddIntConstant($420, ((__str340)&4294967295), 57); //@line 5200 "socketmodule.c"
        var $422=HEAP[$m]; //@line 5203 "socketmodule.c"
        var $423=_PyModule_AddIntConstant($422, ((__str341)&4294967295), 55); //@line 5203 "socketmodule.c"
        var $424=HEAP[$m]; //@line 5206 "socketmodule.c"
        var $425=_PyModule_AddIntConstant($424, ((__str342)&4294967295), 0); //@line 5206 "socketmodule.c"
        var $426=HEAP[$m]; //@line 5212 "socketmodule.c"
        var $427=_PyModule_AddIntConstant($426, ((__str343)&4294967295), 67); //@line 5212 "socketmodule.c"
        var $428=HEAP[$m]; //@line 5220 "socketmodule.c"
        var $429=_PyModule_AddIntConstant($428, ((__str344)&4294967295), 1); //@line 5220 "socketmodule.c"
        var $430=HEAP[$m]; //@line 5223 "socketmodule.c"
        var $431=_PyModule_AddIntConstant($430, ((__str345)&4294967295), 2); //@line 5223 "socketmodule.c"
        var $432=HEAP[$m]; //@line 5226 "socketmodule.c"
        var $433=_PyModule_AddIntConstant($432, ((__str346)&4294967295), 3); //@line 5226 "socketmodule.c"
        var $434=HEAP[$m]; //@line 5229 "socketmodule.c"
        var $435=_PyModule_AddIntConstant($434, ((__str347)&4294967295), 4); //@line 5229 "socketmodule.c"
        var $436=HEAP[$m]; //@line 5232 "socketmodule.c"
        var $437=_PyModule_AddIntConstant($436, ((__str348)&4294967295), 5); //@line 5232 "socketmodule.c"
        var $438=HEAP[$m]; //@line 5235 "socketmodule.c"
        var $439=_PyModule_AddIntConstant($438, ((__str349)&4294967295), 6); //@line 5235 "socketmodule.c"
        var $440=HEAP[$m]; //@line 5238 "socketmodule.c"
        var $441=_PyModule_AddIntConstant($440, ((__str350)&4294967295), 7); //@line 5238 "socketmodule.c"
        var $442=HEAP[$m]; //@line 5241 "socketmodule.c"
        var $443=_PyModule_AddIntConstant($442, ((__str351)&4294967295), 8); //@line 5241 "socketmodule.c"
        var $444=HEAP[$m]; //@line 5244 "socketmodule.c"
        var $445=_PyModule_AddIntConstant($444, ((__str352)&4294967295), 9); //@line 5244 "socketmodule.c"
        var $446=HEAP[$m]; //@line 5247 "socketmodule.c"
        var $447=_PyModule_AddIntConstant($446, ((__str353)&4294967295), 10); //@line 5247 "socketmodule.c"
        var $448=HEAP[$m]; //@line 5250 "socketmodule.c"
        var $449=_PyModule_AddIntConstant($448, ((__str354)&4294967295), 11); //@line 5250 "socketmodule.c"
        var $450=HEAP[$m]; //@line 5253 "socketmodule.c"
        var $451=_PyModule_AddIntConstant($450, ((__str355)&4294967295), 12); //@line 5253 "socketmodule.c"
        var $452=HEAP[$m]; //@line 5264 "socketmodule.c"
        var $453=_PyModule_AddIntConstant($452, ((__str356)&4294967295), -9); //@line 5264 "socketmodule.c"
        var $454=HEAP[$m]; //@line 5267 "socketmodule.c"
        var $455=_PyModule_AddIntConstant($454, ((__str357)&4294967295), -3); //@line 5267 "socketmodule.c"
        var $456=HEAP[$m]; //@line 5270 "socketmodule.c"
        var $457=_PyModule_AddIntConstant($456, ((__str358)&4294967295), -1); //@line 5270 "socketmodule.c"
        var $458=HEAP[$m]; //@line 5273 "socketmodule.c"
        var $459=_PyModule_AddIntConstant($458, ((__str359)&4294967295), -4); //@line 5273 "socketmodule.c"
        var $460=HEAP[$m]; //@line 5276 "socketmodule.c"
        var $461=_PyModule_AddIntConstant($460, ((__str360)&4294967295), -6); //@line 5276 "socketmodule.c"
        var $462=HEAP[$m]; //@line 5279 "socketmodule.c"
        var $463=_PyModule_AddIntConstant($462, ((__str361)&4294967295), -10); //@line 5279 "socketmodule.c"
        var $464=HEAP[$m]; //@line 5282 "socketmodule.c"
        var $465=_PyModule_AddIntConstant($464, ((__str362)&4294967295), -5); //@line 5282 "socketmodule.c"
        var $466=HEAP[$m]; //@line 5285 "socketmodule.c"
        var $467=_PyModule_AddIntConstant($466, ((__str363)&4294967295), -2); //@line 5285 "socketmodule.c"
        var $468=HEAP[$m]; //@line 5288 "socketmodule.c"
        var $469=_PyModule_AddIntConstant($468, ((__str364)&4294967295), -12); //@line 5288 "socketmodule.c"
        var $470=HEAP[$m]; //@line 5291 "socketmodule.c"
        var $471=_PyModule_AddIntConstant($470, ((__str365)&4294967295), -8); //@line 5291 "socketmodule.c"
        var $472=HEAP[$m]; //@line 5294 "socketmodule.c"
        var $473=_PyModule_AddIntConstant($472, ((__str366)&4294967295), -7); //@line 5294 "socketmodule.c"
        var $474=HEAP[$m]; //@line 5297 "socketmodule.c"
        var $475=_PyModule_AddIntConstant($474, ((__str367)&4294967295), -11); //@line 5297 "socketmodule.c"
        var $476=HEAP[$m]; //@line 5309 "socketmodule.c"
        var $477=_PyModule_AddIntConstant($476, ((__str368)&4294967295), 1); //@line 5309 "socketmodule.c"
        var $478=HEAP[$m]; //@line 5312 "socketmodule.c"
        var $479=_PyModule_AddIntConstant($478, ((__str369)&4294967295), 2); //@line 5312 "socketmodule.c"
        var $480=HEAP[$m]; //@line 5315 "socketmodule.c"
        var $481=_PyModule_AddIntConstant($480, ((__str370)&4294967295), 4); //@line 5315 "socketmodule.c"
        var $482=HEAP[$m]; //@line 5318 "socketmodule.c"
        var $483=_PyModule_AddIntConstant($482, ((__str371)&4294967295), 1024); //@line 5318 "socketmodule.c"
        var $484=HEAP[$m]; //@line 5324 "socketmodule.c"
        var $485=_PyModule_AddIntConstant($484, ((__str372)&4294967295), 16); //@line 5324 "socketmodule.c"
        var $486=HEAP[$m]; //@line 5330 "socketmodule.c"
        var $487=_PyModule_AddIntConstant($486, ((__str373)&4294967295), 32); //@line 5330 "socketmodule.c"
        var $488=HEAP[$m]; //@line 5333 "socketmodule.c"
        var $489=_PyModule_AddIntConstant($488, ((__str374)&4294967295), 8); //@line 5333 "socketmodule.c"
        var $490=HEAP[$m]; //@line 5339 "socketmodule.c"
        var $491=_PyModule_AddIntConstant($490, ((__str375)&4294967295), 1025); //@line 5339 "socketmodule.c"
        var $492=HEAP[$m]; //@line 5342 "socketmodule.c"
        var $493=_PyModule_AddIntConstant($492, ((__str376)&4294967295), 32); //@line 5342 "socketmodule.c"
        var $494=HEAP[$m]; //@line 5345 "socketmodule.c"
        var $495=_PyModule_AddIntConstant($494, ((__str377)&4294967295), 4); //@line 5345 "socketmodule.c"
        var $496=HEAP[$m]; //@line 5348 "socketmodule.c"
        var $497=_PyModule_AddIntConstant($496, ((__str378)&4294967295), 1); //@line 5348 "socketmodule.c"
        var $498=HEAP[$m]; //@line 5351 "socketmodule.c"
        var $499=_PyModule_AddIntConstant($498, ((__str379)&4294967295), 8); //@line 5351 "socketmodule.c"
        var $500=HEAP[$m]; //@line 5354 "socketmodule.c"
        var $501=_PyModule_AddIntConstant($500, ((__str380)&4294967295), 2); //@line 5354 "socketmodule.c"
        var $502=HEAP[$m]; //@line 5357 "socketmodule.c"
        var $503=_PyModule_AddIntConstant($502, ((__str381)&4294967295), 16); //@line 5357 "socketmodule.c"
        var $504=HEAP[$m]; //@line 5362 "socketmodule.c"
        var $505=_PyModule_AddIntConstant($504, ((__str382)&4294967295), 0); //@line 5362 "socketmodule.c"
        var $506=HEAP[$m]; //@line 5369 "socketmodule.c"
        var $507=_PyModule_AddIntConstant($506, ((__str383)&4294967295), 1); //@line 5369 "socketmodule.c"
        var $508=HEAP[$m]; //@line 5376 "socketmodule.c"
        var $509=_PyModule_AddIntConstant($508, ((__str384)&4294967295), 2); //@line 5376 "socketmodule.c"
        __label__ = 10; break; //@line 5376 "socketmodule.c"
      case 10: // $bb9
        __label__ = 11; break; //@line 4480 "socketmodule.c"
      case 11: // $return
        STACKTOP = __stackBase__;
        return; //@line 4480 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_socket"] = _init_socket;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_set_error,0,_fclose,0,_sock_accept,0,_sock_bind,0,_sock_close,0,_sock_connect,0,_sock_connect_ex,0,_sock_dup,0,_sock_fileno,0,_sock_getpeername,0,_sock_getsockname,0,_sock_getsockopt,0,_sock_listen,0,_sock_makefile,0,_sock_recv,0,_sock_recv_into,0,_sock_recvfrom,0,_sock_recvfrom_into,0,_sock_send,0,_sock_sendall,0,_sock_sendto,0,_sock_setblocking,0,_sock_settimeout,0,_sock_gettimeout,0,_sock_setsockopt,0,_sock_shutdown,0,_sock_dealloc,0,_sock_repr,0,_PyObject_GenericGetAttr,0,_sock_initobj,0,_PyType_GenericAlloc,0,_sock_new,0,_PyObject_Free,0,_socket_gethostbyname,0,_socket_gethostbyname_ex,0,_socket_gethostbyaddr,0,_socket_gethostname,0,_socket_getservbyname,0,_socket_getservbyport,0,_socket_getprotobyname,0,_socket_fromfd,0,_socket_socketpair,0,_socket_ntohs,0,_socket_ntohl,0,_socket_htons,0,_socket_htonl,0,_socket_inet_aton,0,_socket_inet_ntoa,0,_socket_inet_pton,0,_socket_inet_ntop,0,_socket_getaddrinfo,0,_socket_getnameinfo,0,_socket_getdefaulttimeout,0,_socket_setdefaulttimeout,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_sock_doc=allocate([115,111,99,107,101,116,40,91,102,97,109,105,108,121,91,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,93,93,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,79,112,101,110,32,97,32,115,111,99,107,101,116,32,111,102,32,116,104,101,32,103,105,118,101,110,32,116,121,112,101,46,32,32,84,104,101,32,102,97,109,105,108,121,32,97,114,103,117,109,101,110,116,32,115,112,101,99,105,102,105,101,115,32,116,104,101,10,97,100,100,114,101,115,115,32,102,97,109,105,108,121,59,32,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,65,70,95,73,78,69,84,46,32,32,84,104,101,32,116,121,112,101,32,97,114,103,117,109,101,110,116,32,115,112,101,99,105,102,105,101,115,10,119,104,101,116,104,101,114,32,116,104,105,115,32,105,115,32,97,32,115,116,114,101,97,109,32,40,83,79,67,75,95,83,84,82,69,65,77,44,32,116,104,105,115,32,105,115,32,116,104,101,32,100,101,102,97,117,108,116,41,10,111,114,32,100,97,116,97,103,114,97,109,32,40,83,79,67,75,95,68,71,82,65,77,41,32,115,111,99,107,101,116,46,32,32,84,104,101,32,112,114,111,116,111,99,111,108,32,97,114,103,117,109,101,110,116,32,100,101,102,97,117,108,116,115,32,116,111,32,48,44,10,115,112,101,99,105,102,121,105,110,103,32,116,104,101,32,100,101,102,97,117,108,116,32,112,114,111,116,111,99,111,108,46,32,32,75,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,97,99,99,101,112,116,101,100,46,10,10,65,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,114,101,112,114,101,115,101,110,116,115,32,111,110,101,32,101,110,100,112,111,105,110,116,32,111,102,32,97,32,110,101,116,119,111,114,107,32,99,111,110,110,101,99,116,105,111,110,46,10,10,77,101,116,104,111,100,115,32,111,102,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,40,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,110,111,116,32,97,108,108,111,119,101,100,41,58,10,10,97,99,99,101,112,116,40,41,32,45,45,32,97,99,99,101,112,116,32,97,32,99,111,110,110,101,99,116,105,111,110,44,32,114,101,116,117,114,110,105,110,103,32,110,101,119,32,115,111,99,107,101,116,32,97,110,100,32,99,108,105,101,110,116,32,97,100,100,114,101,115,115,10,98,105,110,100,40,97,100,100,114,41,32,45,45,32,98,105,110,100,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,108,111,99,97,108,32,97,100,100,114,101,115,115,10,99,108,111,115,101,40,41,32,45,45,32,99,108,111,115,101,32,116,104,101,32,115,111,99,107,101,116,10,99,111,110,110,101,99,116,40,97,100,100,114,41,32,45,45,32,99,111,110,110,101,99,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,10,99,111,110,110,101,99,116,95,101,120,40,97,100,100,114,41,32,45,45,32,99,111,110,110,101,99,116,44,32,114,101,116,117,114,110,32,97,110,32,101,114,114,111,114,32,99,111,100,101,32,105,110,115,116,101,97,100,32,111,102,32,97,110,32,101,120,99,101,112,116,105,111,110,10,100,117,112,40,41,32,45,45,32,114,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,105,100,101,110,116,105,99,97,108,32,116,111,32,116,104,101,32,99,117,114,114,101,110,116,32,111,110,101,32,91,42,93,10,102,105,108,101,110,111,40,41,32,45,45,32,114,101,116,117,114,110,32,117,110,100,101,114,108,121,105,110,103,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,10,103,101,116,112,101,101,114,110,97,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,32,91,42,93,10,103,101,116,115,111,99,107,110,97,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,108,111,99,97,108,32,97,100,100,114,101,115,115,10,103,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,110,97,109,101,91,44,32,98,117,102,108,101,110,93,41,32,45,45,32,103,101,116,32,115,111,99,107,101,116,32,111,112,116,105,111,110,115,10,103,101,116,116,105,109,101,111,117,116,40,41,32,45,45,32,114,101,116,117,114,110,32,116,105,109,101,111,117,116,32,111,114,32,78,111,110,101,10,108,105,115,116,101,110,40,110,41,32,45,45,32,115,116,97,114,116,32,108,105,115,116,101,110,105,110,103,32,102,111,114,32,105,110,99,111,109,105,110,103,32,99,111,110,110,101,99,116,105,111,110,115,10,109,97,107,101,102,105,108,101,40,91,109,111,100,101,44,32,91,98,117,102,115,105,122,101,93,93,41,32,45,45,32,114,101,116,117,114,110,32,97,32,102,105,108,101,32,111,98,106,101,99,116,32,102,111,114,32,116,104,101,32,115,111,99,107,101,116,32,91,42,93,10,114,101,99,118,40,98,117,102,108,101,110,91,44,32,102,108,97,103,115,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,10,114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,40,105,110,116,111,32,97,32,98,117,102,102,101,114,41,10,114,101,99,118,102,114,111,109,40,98,117,102,108,101,110,91,44,32,102,108,97,103,115,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,97,110,100,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,10,114,101,99,118,102,114,111,109,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,44,32,91,44,32,102,108,97,103,115,93,41,10,32,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,97,110,100,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,40,105,110,116,111,32,97,32,98,117,102,102,101,114,41,10,115,101,110,100,97,108,108,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,45,32,115,101,110,100,32,97,108,108,32,100,97,116,97,10,115,101,110,100,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,45,32,115,101,110,100,32,100,97,116,97,44,32,109,97,121,32,110,111,116,32,115,101,110,100,32,97,108,108,32,111,102,32,105,116,10,115,101,110,100,116,111,40,100,97,116,97,91,44,32,102,108,97,103,115,93,44,32,97,100,100,114,41,32,45,45,32,115,101,110,100,32,100,97,116,97,32,116,111,32,97,32,103,105,118,101,110,32,97,100,100,114,101,115,115,10,115,101,116,98,108,111,99,107,105,110,103,40,48,32,124,32,49,41,32,45,45,32,115,101,116,32,111,114,32,99,108,101,97,114,32,116,104,101,32,98,108,111,99,107,105,110,103,32,73,47,79,32,102,108,97,103,10,115,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,110,97,109,101,44,32,118,97,108,117,101,41,32,45,45,32,115,101,116,32,115,111,99,107,101,116,32,111,112,116,105,111,110,115,10,115,101,116,116,105,109,101,111,117,116,40,78,111,110,101,32,124,32,102,108,111,97,116,41,32,45,45,32,115,101,116,32,111,114,32,99,108,101,97,114,32,116,104,101,32,116,105,109,101,111,117,116,10,115,104,117,116,100,111,119,110,40,104,111,119,41,32,45,45,32,115,104,117,116,32,100,111,119,110,32,116,114,97,102,102,105,99,32,105,110,32,111,110,101,32,111,114,32,98,111,116,104,32,100,105,114,101,99,116,105,111,110,115,10,10,32,91,42,93,32,110,111,116,32,97,118,97,105,108,97,98,108,101,32,111,110,32,97,108,108,32,112,108,97,116,102,111,114,109,115,33,0] /* socket([family[, typ */, "i8", ALLOC_NORMAL);
_socket_error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([117,110,97,98,108,101,32,116,111,32,115,101,108,101,99,116,32,111,110,32,115,111,99,107,101,116,0] /* unable to select on  */, "i8", ALLOC_NORMAL);
__str1=allocate([40,105,115,41,0] /* (is)\00 */, "i8", ALLOC_NORMAL);
_socket_herror=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_socket_gaierror=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_defaulttimeout=allocate([-1], "double", ALLOC_NORMAL);
__str2=allocate([48,0] /* 0\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([117,110,115,117,112,112,111,114,116,101,100,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,0] /* unsupported address  */, "i8", ALLOC_NORMAL);
__str4=allocate([119,105,108,100,99,97,114,100,32,114,101,115,111,108,118,101,100,32,116,111,32,109,117,108,116,105,112,108,101,32,97,100,100,114,101,115,115,0] /* wildcard resolved to */, "i8", ALLOC_NORMAL);
__str5=allocate([60,98,114,111,97,100,99,97,115,116,62,0] /* <broadcast>\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([97,100,100,114,101,115,115,32,102,97,109,105,108,121,32,109,105,115,109,97,116,99,104,101,100,0] /* address family misma */, "i8", ALLOC_NORMAL);
__str7=allocate([37,100,46,37,100,46,37,100,46,37,100,37,99,0] /* %d.%d.%d.%d%c\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([117,110,107,110,111,119,110,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,0] /* unknown address fami */, "i8", ALLOC_NORMAL);
__str9=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([73,73,0] /* II\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([79,105,105,105,0] /* Oiii\00 */, "i8", ALLOC_NORMAL);
__str12=allocate(1, "i8", ALLOC_NORMAL);
__str13=allocate([115,104,98,104,115,35,0] /* shbhs#\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([73,73,73,73,73,0] /* IIIII\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([73,110,118,97,108,105,100,32,97,100,100,114,101,115,115,32,116,121,112,101,0] /* Invalid address type */, "i8", ALLOC_NORMAL);
__str16=allocate([105,115,35,0] /* is#\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([116,35,0] /* t#\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([65,70,95,85,78,73,88,32,112,97,116,104,32,116,111,111,32,108,111,110,103,0] /* AF_UNIX path too lon */, "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,78,69,84,76,73,78,75,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_N */, "i8", ALLOC_NORMAL);
__str20=allocate([73,73,58,103,101,116,115,111,99,107,97,100,100,114,97,114,103,0] /* II:getsockaddrarg\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,73,78,69,84,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_I */, "i8", ALLOC_NORMAL);
__str22=allocate([101,116,105,58,103,101,116,115,111,99,107,97,100,100,114,97,114,103,0] /* eti:getsockaddrarg\0 */, "i8", ALLOC_NORMAL);
__str23=allocate([105,100,110,97,0] /* idna\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,112,111,114,116,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getsockaddrarg: port */, "i8", ALLOC_NORMAL);
__str25=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,73,78,69,84,54,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_I */, "i8", ALLOC_NORMAL);
__str26=allocate([101,116,105,124,105,105,0] /* eti|ii\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,80,65,67,75,69,84,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_P */, "i8", ALLOC_NORMAL);
__str28=allocate([115,105,124,105,105,115,35,0] /* si|iis#\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([72,97,114,100,119,97,114,101,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,56,32,98,121,116,101,115,32,111,114,32,108,101,115,115,0] /* Hardware address mus */, "i8", ALLOC_NORMAL);
__str30=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,112,114,111,116,111,78,117,109,98,101,114,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getsockaddrarg: prot */, "i8", ALLOC_NORMAL);
__str31=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,84,73,80,67,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_T */, "i8", ALLOC_NORMAL);
__str32=allocate([73,73,73,73,124,73,59,73,110,118,97,108,105,100,32,84,73,80,67,32,97,100,100,114,101,115,115,32,102,111,114,109,97,116,0] /* IIII|I;Invalid TIPC  */, "i8", ALLOC_NORMAL);
__str33=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,98,97,100,32,102,97,109,105,108,121,0] /* getsockaddrarg: bad  */, "i8", ALLOC_NORMAL);
__str34=allocate([103,101,116,115,111,99,107,97,100,100,114,108,101,110,58,32,98,97,100,32,102,97,109,105,108,121,0] /* getsockaddrlen: bad  */, "i8", ALLOC_NORMAL);
_socket_timeout=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str35=allocate([116,105,109,101,100,32,111,117,116,0] /* timed out\00 */, "i8", ALLOC_NORMAL);
_accept_doc=allocate([97,99,99,101,112,116,40,41,32,45,62,32,40,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,87,97,105,116,32,102,111,114,32,97,110,32,105,110,99,111,109,105,110,103,32,99,111,110,110,101,99,116,105,111,110,46,32,32,82,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,114,101,112,114,101,115,101,110,116,105,110,103,32,116,104,101,10,99,111,110,110,101,99,116,105,111,110,44,32,97,110,100,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,99,108,105,101,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* accept() -> (socket  */, "i8", ALLOC_NORMAL);
_setblocking_doc=allocate([115,101,116,98,108,111,99,107,105,110,103,40,102,108,97,103,41,10,10,83,101,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,98,108,111,99,107,105,110,103,32,40,102,108,97,103,32,105,115,32,116,114,117,101,41,32,111,114,32,110,111,110,45,98,108,111,99,107,105,110,103,32,40,102,97,108,115,101,41,46,10,115,101,116,98,108,111,99,107,105,110,103,40,84,114,117,101,41,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,116,105,109,101,111,117,116,40,78,111,110,101,41,59,10,115,101,116,98,108,111,99,107,105,110,103,40,70,97,108,115,101,41,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,116,105,109,101,111,117,116,40,48,46,48,41,46,0] /* setblocking(flag)\0A */, "i8", ALLOC_NORMAL);
__str36=allocate([84,105,109,101,111,117,116,32,118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* Timeout value out of */, "i8", ALLOC_NORMAL);
_settimeout_doc=allocate([115,101,116,116,105,109,101,111,117,116,40,116,105,109,101,111,117,116,41,10,10,83,101,116,32,97,32,116,105,109,101,111,117,116,32,111,110,32,115,111,99,107,101,116,32,111,112,101,114,97,116,105,111,110,115,46,32,32,39,116,105,109,101,111,117,116,39,32,99,97,110,32,98,101,32,97,32,102,108,111,97,116,44,10,103,105,118,105,110,103,32,105,110,32,115,101,99,111,110,100,115,44,32,111,114,32,78,111,110,101,46,32,32,83,101,116,116,105,110,103,32,97,32,116,105,109,101,111,117,116,32,111,102,32,78,111,110,101,32,100,105,115,97,98,108,101,115,10,116,104,101,32,116,105,109,101,111,117,116,32,102,101,97,116,117,114,101,32,97,110,100,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,98,108,111,99,107,105,110,103,40,49,41,46,10,83,101,116,116,105,110,103,32,97,32,116,105,109,101,111,117,116,32,111,102,32,122,101,114,111,32,105,115,32,116,104,101,32,115,97,109,101,32,97,115,32,115,101,116,98,108,111,99,107,105,110,103,40,48,41,46,0] /* settimeout(timeout)\ */, "i8", ALLOC_NORMAL);
_gettimeout_doc=allocate([103,101,116,116,105,109,101,111,117,116,40,41,32,45,62,32,116,105,109,101,111,117,116,10,10,82,101,116,117,114,110,115,32,116,104,101,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,115,111,99,107,101,116,32,10,111,112,101,114,97,116,105,111,110,115,46,32,65,32,116,105,109,101,111,117,116,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,116,105,109,101,111,117,116,115,32,111,110,32,115,111,99,107,101,116,32,10,111,112,101,114,97,116,105,111,110,115,32,97,114,101,32,100,105,115,97,98,108,101,100,46,0] /* gettimeout() -> time */, "i8", ALLOC_NORMAL);
__str37=allocate([105,105,105,58,115,101,116,115,111,99,107,111,112,116,0] /* iii:setsockopt\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([105,105,115,35,58,115,101,116,115,111,99,107,111,112,116,0] /* iis#:setsockopt\00 */, "i8", ALLOC_NORMAL);
_setsockopt_doc=allocate([115,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,105,111,110,44,32,118,97,108,117,101,41,10,10,83,101,116,32,97,32,115,111,99,107,101,116,32,111,112,116,105,111,110,46,32,32,83,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,32,102,111,114,32,108,101,118,101,108,32,97,110,100,32,111,112,116,105,111,110,46,10,84,104,101,32,118,97,108,117,101,32,97,114,103,117,109,101,110,116,32,99,97,110,32,101,105,116,104,101,114,32,98,101,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,97,32,115,116,114,105,110,103,46,0] /* setsockopt(level, op */, "i8", ALLOC_NORMAL);
__str39=allocate([105,105,124,105,58,103,101,116,115,111,99,107,111,112,116,0] /* ii|i:getsockopt\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([103,101,116,115,111,99,107,111,112,116,32,98,117,102,108,101,110,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* getsockopt buflen ou */, "i8", ALLOC_NORMAL);
_getsockopt_doc=allocate([103,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,105,111,110,91,44,32,98,117,102,102,101,114,115,105,122,101,93,41,32,45,62,32,118,97,108,117,101,10,10,71,101,116,32,97,32,115,111,99,107,101,116,32,111,112,116,105,111,110,46,32,32,83,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,32,102,111,114,32,108,101,118,101,108,32,97,110,100,32,111,112,116,105,111,110,46,10,73,102,32,97,32,110,111,110,122,101,114,111,32,98,117,102,102,101,114,115,105,122,101,32,97,114,103,117,109,101,110,116,32,105,115,32,103,105,118,101,110,44,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,115,32,97,10,115,116,114,105,110,103,32,111,102,32,116,104,97,116,32,108,101,110,103,116,104,59,32,111,116,104,101,114,119,105,115,101,32,105,116,32,105,115,32,97,110,32,105,110,116,101,103,101,114,46,0] /* getsockopt(level, op */, "i8", ALLOC_NORMAL);
_bind_doc=allocate([98,105,110,100,40,97,100,100,114,101,115,115,41,10,10,66,105,110,100,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,108,111,99,97,108,32,97,100,100,114,101,115,115,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,10,112,97,105,114,32,40,104,111,115,116,44,32,112,111,114,116,41,59,32,116,104,101,32,104,111,115,116,32,109,117,115,116,32,114,101,102,101,114,32,116,111,32,116,104,101,32,108,111,99,97,108,32,104,111,115,116,46,32,70,111,114,32,114,97,119,32,112,97,99,107,101,116,10,115,111,99,107,101,116,115,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,32,116,117,112,108,101,32,40,105,102,110,97,109,101,44,32,112,114,111,116,111,32,91,44,112,107,116,116,121,112,101,32,91,44,104,97,116,121,112,101,93,93,41,0] /* bind(address)\0A\0AB */, "i8", ALLOC_NORMAL);
_close_doc=allocate([99,108,111,115,101,40,41,10,10,67,108,111,115,101,32,116,104,101,32,115,111,99,107,101,116,46,32,32,73,116,32,99,97,110,110,111,116,32,98,101,32,117,115,101,100,32,97,102,116,101,114,32,116,104,105,115,32,99,97,108,108,46,0] /* close()\0A\0AClose t */, "i8", ALLOC_NORMAL);
_connect_doc=allocate([99,111,110,110,101,99,116,40,97,100,100,114,101,115,115,41,10,10,67,111,110,110,101,99,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,44,32,112,111,114,116,41,46,0] /* connect(address)\0A\ */, "i8", ALLOC_NORMAL);
_connect_ex_doc=allocate([99,111,110,110,101,99,116,95,101,120,40,97,100,100,114,101,115,115,41,32,45,62,32,101,114,114,110,111,10,10,84,104,105,115,32,105,115,32,108,105,107,101,32,99,111,110,110,101,99,116,40,97,100,100,114,101,115,115,41,44,32,98,117,116,32,114,101,116,117,114,110,115,32,97,110,32,101,114,114,111,114,32,99,111,100,101,32,40,116,104,101,32,101,114,114,110,111,32,118,97,108,117,101,41,10,105,110,115,116,101,97,100,32,111,102,32,114,97,105,115,105,110,103,32,97,110,32,101,120,99,101,112,116,105,111,110,32,119,104,101,110,32,97,110,32,101,114,114,111,114,32,111,99,99,117,114,115,46,0] /* connect_ex(address)  */, "i8", ALLOC_NORMAL);
_fileno_doc=allocate([102,105,108,101,110,111,40,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,116,101,103,101,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,111,102,32,116,104,101,32,115,111,99,107,101,116,46,0] /* fileno() -> integer\ */, "i8", ALLOC_NORMAL);
_dup_doc=allocate([100,117,112,40,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,99,111,110,110,101,99,116,101,100,32,116,111,32,116,104,101,32,115,97,109,101,32,115,121,115,116,101,109,32,114,101,115,111,117,114,99,101,46,0] /* dup() -> socket obje */, "i8", ALLOC_NORMAL);
_getsockname_doc=allocate([103,101,116,115,111,99,107,110,97,109,101,40,41,32,45,62,32,97,100,100,114,101,115,115,32,105,110,102,111,10,10,82,101,116,117,114,110,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,108,111,99,97,108,32,101,110,100,112,111,105,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* getsockname() -> add */, "i8", ALLOC_NORMAL);
_getpeername_doc=allocate([103,101,116,112,101,101,114,110,97,109,101,40,41,32,45,62,32,97,100,100,114,101,115,115,32,105,110,102,111,10,10,82,101,116,117,114,110,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,114,101,109,111,116,101,32,101,110,100,112,111,105,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* getpeername() -> add */, "i8", ALLOC_NORMAL);
_listen_doc=allocate([108,105,115,116,101,110,40,98,97,99,107,108,111,103,41,10,10,69,110,97,98,108,101,32,97,32,115,101,114,118,101,114,32,116,111,32,97,99,99,101,112,116,32,99,111,110,110,101,99,116,105,111,110,115,46,32,32,84,104,101,32,98,97,99,107,108,111,103,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,116,10,108,101,97,115,116,32,48,32,40,105,102,32,105,116,32,105,115,32,108,111,119,101,114,44,32,105,116,32,105,115,32,115,101,116,32,116,111,32,48,41,59,32,105,116,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,110,117,109,98,101,114,32,111,102,10,117,110,97,99,99,101,112,116,101,100,32,99,111,110,110,101,99,116,105,111,110,115,32,116,104,97,116,32,116,104,101,32,115,121,115,116,101,109,32,119,105,108,108,32,97,108,108,111,119,32,98,101,102,111,114,101,32,114,101,102,117,115,105,110,103,32,110,101,119,10,99,111,110,110,101,99,116,105,111,110,115,46,0] /* listen(backlog)\0A\0 */, "i8", ALLOC_NORMAL);
__str41=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([124,115,105,58,109,97,107,101,102,105,108,101,0] /* |si:makefile\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([60,115,111,99,107,101,116,62,0] /* <socket>\00 */, "i8", ALLOC_NORMAL);
_makefile_doc=allocate([109,97,107,101,102,105,108,101,40,91,109,111,100,101,91,44,32,98,117,102,102,101,114,115,105,122,101,93,93,41,32,45,62,32,102,105,108,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,114,101,103,117,108,97,114,32,102,105,108,101,32,111,98,106,101,99,116,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,10,84,104,101,32,109,111,100,101,32,97,110,100,32,98,117,102,102,101,114,115,105,122,101,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,97,115,32,102,111,114,32,116,104,101,32,98,117,105,108,116,45,105,110,32,111,112,101,110,40,41,32,102,117,110,99,116,105,111,110,46,0] /* makefile([mode[, buf */, "i8", ALLOC_NORMAL);
__str44=allocate([105,124,105,58,114,101,99,118,0] /* i|i:recv\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
_recv_doc=allocate([114,101,99,118,40,98,117,102,102,101,114,115,105,122,101,91,44,32,102,108,97,103,115,93,41,32,45,62,32,100,97,116,97,10,10,82,101,99,101,105,118,101,32,117,112,32,116,111,32,98,117,102,102,101,114,115,105,122,101,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,87,104,101,110,32,110,111,32,100,97,116,97,32,105,115,32,97,118,97,105,108,97,98,108,101,44,32,98,108,111,99,107,32,117,110,116,105,108,10,97,116,32,108,101,97,115,116,32,111,110,101,32,98,121,116,101,32,105,115,32,97,118,97,105,108,97,98,108,101,32,111,114,32,117,110,116,105,108,32,116,104,101,32,114,101,109,111,116,101,32,101,110,100,32,105,115,32,99,108,111,115,101,100,46,32,32,87,104,101,110,10,116,104,101,32,114,101,109,111,116,101,32,101,110,100,32,105,115,32,99,108,111,115,101,100,32,97,110,100,32,97,108,108,32,100,97,116,97,32,105,115,32,114,101,97,100,44,32,114,101,116,117,114,110,32,116,104,101,32,101,109,112,116,121,32,115,116,114,105,110,103,46,0] /* recv(buffersize[, fl */, "i8", ALLOC_NORMAL);
__str46=allocate([119,42,124,105,105,58,114,101,99,118,95,105,110,116,111,0] /* w_|ii:recv_into\00 */, "i8", ALLOC_NORMAL);
_kwlist_10873=allocate(16, "i8*", ALLOC_NORMAL);
__str47=allocate([98,117,102,102,101,114,0] /* buffer\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([110,98,121,116,101,115,0] /* nbytes\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([102,108,97,103,115,0] /* flags\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([98,117,102,46,98,117,102,32,33,61,32,48,32,38,38,32,98,117,102,108,101,110,32,62,32,48,0] /* buf.buf != 0 && bufl */, "i8", ALLOC_NORMAL);
__str51=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,115,111,99,107,101,116,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/s */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10879=allocate([115,111,99,107,95,114,101,99,118,95,105,110,116,111,0] /* sock_recv_into\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,95,105,110,116,111,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
__str53=allocate([98,117,102,102,101,114,32,116,111,111,32,115,109,97,108,108,32,102,111,114,32,114,101,113,117,101,115,116,101,100,32,98,121,116,101,115,0] /* buffer too small for */, "i8", ALLOC_NORMAL);
_recv_into_doc=allocate([114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,44,32,91,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,62,32,110,98,121,116,101,115,95,114,101,97,100,10,10,65,32,118,101,114,115,105,111,110,32,111,102,32,114,101,99,118,40,41,32,116,104,97,116,32,115,116,111,114,101,115,32,105,116,115,32,100,97,116,97,32,105,110,116,111,32,97,32,98,117,102,102,101,114,32,114,97,116,104,101,114,32,116,104,97,110,32,99,114,101,97,116,105,110,103,32,10,97,32,110,101,119,32,115,116,114,105,110,103,46,32,32,82,101,99,101,105,118,101,32,117,112,32,116,111,32,98,117,102,102,101,114,115,105,122,101,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,46,32,32,73,102,32,98,117,102,102,101,114,115,105,122,101,32,10,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,32,40,111,114,32,48,41,44,32,114,101,99,101,105,118,101,32,117,112,32,116,111,32,116,104,101,32,115,105,122,101,32,97,118,97,105,108,97,98,108,101,32,105,110,32,116,104,101,32,103,105,118,101,110,32,98,117,102,102,101,114,46,10,10,83,101,101,32,114,101,99,118,40,41,32,102,111,114,32,100,111,99,117,109,101,110,116,97,116,105,111,110,32,97,98,111,117,116,32,116,104,101,32,102,108,97,103,115,46,0] /* recv_into(buffer, [n */, "i8", ALLOC_NORMAL);
__str54=allocate([105,124,105,58,114,101,99,118,102,114,111,109,0] /* i|i:recvfrom\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,102,114,111,109,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
_recvfrom_doc=allocate([114,101,99,118,102,114,111,109,40,98,117,102,102,101,114,115,105,122,101,91,44,32,102,108,97,103,115,93,41,32,45,62,32,40,100,97,116,97,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,76,105,107,101,32,114,101,99,118,40,98,117,102,102,101,114,115,105,122,101,44,32,102,108,97,103,115,41,32,98,117,116,32,97,108,115,111,32,114,101,116,117,114,110,32,116,104,101,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,105,110,102,111,46,0] /* recvfrom(buffersize[ */, "i8", ALLOC_NORMAL);
__str56=allocate([119,42,124,105,105,58,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* w_|ii:recvfrom_into\ */, "i8", ALLOC_NORMAL);
_kwlist_11020=allocate(16, "i8*", ALLOC_NORMAL);
___PRETTY_FUNCTION___11027=allocate([115,111,99,107,95,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* sock_recvfrom_into\0 */, "i8", ALLOC_NORMAL);
__str57=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
__str58=allocate([108,78,0] /* lN\00 */, "i8", ALLOC_NORMAL);
_recvfrom_into_doc=allocate([114,101,99,118,102,114,111,109,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,62,32,40,110,98,121,116,101,115,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,76,105,107,101,32,114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,98,117,116,32,97,108,115,111,32,114,101,116,117,114,110,32,116,104,101,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,105,110,102,111,46,0] /* recvfrom_into(buffer */, "i8", ALLOC_NORMAL);
__str59=allocate([115,42,124,105,58,115,101,110,100,0] /* s_|i:send\00 */, "i8", ALLOC_NORMAL);
_send_doc=allocate([115,101,110,100,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,62,32,99,111,117,110,116,10,10,83,101,110,100,32,97,32,100,97,116,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,82,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,10,115,101,110,116,59,32,116,104,105,115,32,109,97,121,32,98,101,32,108,101,115,115,32,116,104,97,110,32,108,101,110,40,100,97,116,97,41,32,105,102,32,116,104,101,32,110,101,116,119,111,114,107,32,105,115,32,98,117,115,121,46,0] /* send(data[, flags])  */, "i8", ALLOC_NORMAL);
__str60=allocate([115,42,124,105,58,115,101,110,100,97,108,108,0] /* s_|i:sendall\00 */, "i8", ALLOC_NORMAL);
_sendall_doc=allocate([115,101,110,100,97,108,108,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,10,10,83,101,110,100,32,97,32,100,97,116,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,84,104,105,115,32,99,97,108,108,115,32,115,101,110,100,40,41,32,114,101,112,101,97,116,101,100,108,121,10,117,110,116,105,108,32,97,108,108,32,100,97,116,97,32,105,115,32,115,101,110,116,46,32,32,73,102,32,97,110,32,101,114,114,111,114,32,111,99,99,117,114,115,44,32,105,116,39,115,32,105,109,112,111,115,115,105,98,108,101,10,116,111,32,116,101,108,108,32,104,111,119,32,109,117,99,104,32,100,97,116,97,32,104,97,115,32,98,101,101,110,32,115,101,110,116,46,0] /* sendall(data[, flags */, "i8", ALLOC_NORMAL);
__str61=allocate([115,42,79,58,115,101,110,100,116,111,0] /* s_O:sendto\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([115,42,105,79,58,115,101,110,100,116,111,0] /* s_iO:sendto\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([115,101,110,100,116,111,40,41,32,116,97,107,101,115,32,50,32,111,114,32,51,32,97,114,103,117,109,101,110,116,115,32,40,37,100,32,103,105,118,101,110,41,0] /* sendto() takes 2 or  */, "i8", ALLOC_NORMAL);
_sendto_doc=allocate([115,101,110,100,116,111,40,100,97,116,97,91,44,32,102,108,97,103,115,93,44,32,97,100,100,114,101,115,115,41,32,45,62,32,99,111,117,110,116,10,10,76,105,107,101,32,115,101,110,100,40,100,97,116,97,44,32,102,108,97,103,115,41,32,98,117,116,32,97,108,108,111,119,115,32,115,112,101,99,105,102,121,105,110,103,32,116,104,101,32,100,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,46,10,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* sendto(data[, flags] */, "i8", ALLOC_NORMAL);
_shutdown_doc=allocate([115,104,117,116,100,111,119,110,40,102,108,97,103,41,10,10,83,104,117,116,32,100,111,119,110,32,116,104,101,32,114,101,97,100,105,110,103,32,115,105,100,101,32,111,102,32,116,104,101,32,115,111,99,107,101,116,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,82,68,41,44,32,116,104,101,32,119,114,105,116,105,110,103,32,115,105,100,101,10,111,102,32,116,104,101,32,115,111,99,107,101,116,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,87,82,41,44,32,111,114,32,98,111,116,104,32,101,110,100,115,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,82,68,87,82,41,46,0] /* shutdown(flag)\0A\0A */, "i8", ALLOC_NORMAL);
__str64=allocate([97,99,99,101,112,116,0] /* accept\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([98,105,110,100,0] /* bind\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([99,111,110,110,101,99,116,0] /* connect\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([99,111,110,110,101,99,116,95,101,120,0] /* connect_ex\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([100,117,112,0] /* dup\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([102,105,108,101,110,111,0] /* fileno\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([103,101,116,112,101,101,114,110,97,109,101,0] /* getpeername\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([103,101,116,115,111,99,107,110,97,109,101,0] /* getsockname\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([103,101,116,115,111,99,107,111,112,116,0] /* getsockopt\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([108,105,115,116,101,110,0] /* listen\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([109,97,107,101,102,105,108,101,0] /* makefile\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([114,101,99,118,0] /* recv\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([114,101,99,118,95,105,110,116,111,0] /* recv_into\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([114,101,99,118,102,114,111,109,0] /* recvfrom\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* recvfrom_into\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([115,101,110,100,0] /* send\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([115,101,110,100,97,108,108,0] /* sendall\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([115,101,110,100,116,111,0] /* sendto\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([115,101,116,98,108,111,99,107,105,110,103,0] /* setblocking\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([115,101,116,116,105,109,101,111,117,116,0] /* settimeout\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([103,101,116,116,105,109,101,111,117,116,0] /* gettimeout\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([115,101,116,115,111,99,107,111,112,116,0] /* setsockopt\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([115,104,117,116,100,111,119,110,0] /* shutdown\00 */, "i8", ALLOC_NORMAL);
_sock_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str88=allocate([102,97,109,105,108,121,0] /* family\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([116,104,101,32,115,111,99,107,101,116,32,102,97,109,105,108,121,0] /* the socket family\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([116,121,112,101,0] /* type\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([116,104,101,32,115,111,99,107,101,116,32,116,121,112,101,0] /* the socket type\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([112,114,111,116,111,0] /* proto\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([116,104,101,32,115,111,99,107,101,116,32,112,114,111,116,111,99,111,108,0] /* the socket protocol\ */, "i8", ALLOC_NORMAL);
__str94=allocate([116,105,109,101,111,117,116,0] /* timeout\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([116,104,101,32,115,111,99,107,101,116,32,116,105,109,101,111,117,116,0] /* the socket timeout\0 */, "i8", ALLOC_NORMAL);
_sock_memberlist=allocate([0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str96=allocate([60,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,102,100,61,37,108,100,44,32,102,97,109,105,108,121,61,37,100,44,32,116,121,112,101,61,37,100,44,32,112,114,111,116,111,99,111,108,61,37,100,62,0] /* <socket object, fd=% */, "i8", ALLOC_NORMAL);
__str97=allocate([124,105,105,105,58,115,111,99,107,101,116,0] /* |iii:socket\00 */, "i8", ALLOC_NORMAL);
_keywords_11267=allocate(16, "i8*", ALLOC_NORMAL);
__str98=allocate([95,115,111,99,107,101,116,46,115,111,99,107,101,116,0] /* _socket.socket\00 */, "i8", ALLOC_NORMAL);
_sock_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_gethostname_doc=allocate([103,101,116,104,111,115,116,110,97,109,101,40,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,104,111,115,116,32,110,97,109,101,46,0] /* gethostname() -> str */, "i8", ALLOC_NORMAL);
__str99=allocate([115,58,103,101,116,104,111,115,116,98,121,110,97,109,101,0] /* s:gethostbyname\00 */, "i8", ALLOC_NORMAL);
_gethostbyname_doc=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,40,104,111,115,116,41,32,45,62,32,97,100,100,114,101,115,115,10,10,82,101,116,117,114,110,32,116,104,101,32,73,80,32,97,100,100,114,101,115,115,32,40,97,32,115,116,114,105,110,103,32,111,102,32,116,104,101,32,102,111,114,109,32,39,50,53,53,46,50,53,53,46,50,53,53,46,50,53,53,39,41,32,102,111,114,32,97,32,104,111,115,116,46,0] /* gethostbyname(host)  */, "i8", ALLOC_NORMAL);
__str100=allocate([115,79,79,0] /* sOO\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([115,58,103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,0] /* s:gethostbyname_ex\0 */, "i8", ALLOC_NORMAL);
_ghbn_ex_doc=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,40,104,111,115,116,41,32,45,62,32,40,110,97,109,101,44,32,97,108,105,97,115,108,105,115,116,44,32,97,100,100,114,101,115,115,108,105,115,116,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,114,117,101,32,104,111,115,116,32,110,97,109,101,44,32,97,32,108,105,115,116,32,111,102,32,97,108,105,97,115,101,115,44,32,97,110,100,32,97,32,108,105,115,116,32,111,102,32,73,80,32,97,100,100,114,101,115,115,101,115,44,10,102,111,114,32,97,32,104,111,115,116,46,32,32,84,104,101,32,104,111,115,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,32,103,105,118,105,110,103,32,97,32,104,111,115,116,32,110,97,109,101,32,111,114,32,73,80,32,110,117,109,98,101,114,46,0] /* gethostbyname_ex(hos */, "i8", ALLOC_NORMAL);
__str102=allocate([115,58,103,101,116,104,111,115,116,98,121,97,100,100,114,0] /* s:gethostbyaddr\00 */, "i8", ALLOC_NORMAL);
_gethostbyaddr_doc=allocate([103,101,116,104,111,115,116,98,121,97,100,100,114,40,104,111,115,116,41,32,45,62,32,40,110,97,109,101,44,32,97,108,105,97,115,108,105,115,116,44,32,97,100,100,114,101,115,115,108,105,115,116,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,114,117,101,32,104,111,115,116,32,110,97,109,101,44,32,97,32,108,105,115,116,32,111,102,32,97,108,105,97,115,101,115,44,32,97,110,100,32,97,32,108,105,115,116,32,111,102,32,73,80,32,97,100,100,114,101,115,115,101,115,44,10,102,111,114,32,97,32,104,111,115,116,46,32,32,84,104,101,32,104,111,115,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,32,103,105,118,105,110,103,32,97,32,104,111,115,116,32,110,97,109,101,32,111,114,32,73,80,32,110,117,109,98,101,114,46,0] /* gethostbyaddr(host)  */, "i8", ALLOC_NORMAL);
__str103=allocate([115,124,115,58,103,101,116,115,101,114,118,98,121,110,97,109,101,0] /* s|s:getservbyname\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([115,101,114,118,105,99,101,47,112,114,111,116,111,32,110,111,116,32,102,111,117,110,100,0] /* service/proto not fo */, "i8", ALLOC_NORMAL);
_getservbyname_doc=allocate([103,101,116,115,101,114,118,98,121,110,97,109,101,40,115,101,114,118,105,99,101,110,97,109,101,91,44,32,112,114,111,116,111,99,111,108,110,97,109,101,93,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,97,32,112,111,114,116,32,110,117,109,98,101,114,32,102,114,111,109,32,97,32,115,101,114,118,105,99,101,32,110,97,109,101,32,97,110,100,32,112,114,111,116,111,99,111,108,32,110,97,109,101,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,112,114,111,116,111,99,111,108,32,110,97,109,101,44,32,105,102,32,103,105,118,101,110,44,32,115,104,111,117,108,100,32,98,101,32,39,116,99,112,39,32,111,114,32,39,117,100,112,39,44,10,111,116,104,101,114,119,105,115,101,32,97,110,121,32,112,114,111,116,111,99,111,108,32,119,105,108,108,32,109,97,116,99,104,46,0] /* getservbyname(servic */, "i8", ALLOC_NORMAL);
__str105=allocate([105,124,115,58,103,101,116,115,101,114,118,98,121,112,111,114,116,0] /* i|s:getservbyport\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,58,32,112,111,114,116,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getservbyport: port  */, "i8", ALLOC_NORMAL);
__str107=allocate([112,111,114,116,47,112,114,111,116,111,32,110,111,116,32,102,111,117,110,100,0] /* port/proto not found */, "i8", ALLOC_NORMAL);
_getservbyport_doc=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,40,112,111,114,116,91,44,32,112,114,111,116,111,99,111,108,110,97,109,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,115,101,114,118,105,99,101,32,110,97,109,101,32,102,114,111,109,32,97,32,112,111,114,116,32,110,117,109,98,101,114,32,97,110,100,32,112,114,111,116,111,99,111,108,32,110,97,109,101,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,112,114,111,116,111,99,111,108,32,110,97,109,101,44,32,105,102,32,103,105,118,101,110,44,32,115,104,111,117,108,100,32,98,101,32,39,116,99,112,39,32,111,114,32,39,117,100,112,39,44,10,111,116,104,101,114,119,105,115,101,32,97,110,121,32,112,114,111,116,111,99,111,108,32,119,105,108,108,32,109,97,116,99,104,46,0] /* getservbyport(port[, */, "i8", ALLOC_NORMAL);
__str108=allocate([115,58,103,101,116,112,114,111,116,111,98,121,110,97,109,101,0] /* s:getprotobyname\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([112,114,111,116,111,99,111,108,32,110,111,116,32,102,111,117,110,100,0] /* protocol not found\0 */, "i8", ALLOC_NORMAL);
_getprotobyname_doc=allocate([103,101,116,112,114,111,116,111,98,121,110,97,109,101,40,110,97,109,101,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,112,114,111,116,111,99,111,108,32,110,117,109,98,101,114,32,102,111,114,32,116,104,101,32,110,97,109,101,100,32,112,114,111,116,111,99,111,108,46,32,32,40,82,97,114,101,108,121,32,117,115,101,100,46,41,0] /* getprotobyname(name) */, "i8", ALLOC_NORMAL);
__str110=allocate([124,105,105,105,58,115,111,99,107,101,116,112,97,105,114,0] /* |iii:socketpair\00 */, "i8", ALLOC_NORMAL);
_socketpair_doc=allocate([115,111,99,107,101,116,112,97,105,114,40,91,102,97,109,105,108,121,91,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,93,93,41,32,45,62,32,40,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,115,111,99,107,101,116,32,111,98,106,101,99,116,41,10,10,67,114,101,97,116,101,32,97,32,112,97,105,114,32,111,102,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,115,32,114,101,116,117,114,110,101,100,32,98,121,32,116,104,101,32,112,108,97,116,102,111,114,109,10,115,111,99,107,101,116,112,97,105,114,40,41,32,102,117,110,99,116,105,111,110,46,10,84,104,101,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,116,104,101,32,115,97,109,101,32,97,115,32,102,111,114,32,115,111,99,107,101,116,40,41,32,101,120,99,101,112,116,32,116,104,101,32,100,101,102,97,117,108,116,32,102,97,109,105,108,121,32,105,115,10,65,70,95,85,78,73,88,32,105,102,32,100,101,102,105,110,101,100,32,111,110,32,116,104,101,32,112,108,97,116,102,111,114,109,59,32,111,116,104,101,114,119,105,115,101,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,65,70,95,73,78,69,84,46,0] /* socketpair([family[, */, "i8", ALLOC_NORMAL);
__str111=allocate([105,105,105,124,105,58,102,114,111,109,102,100,0] /* iii|i:fromfd\00 */, "i8", ALLOC_NORMAL);
_fromfd_doc=allocate([102,114,111,109,102,100,40,102,100,44,32,102,97,109,105,108,121,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,100,117,112,108,105,99,97,116,101,32,111,102,32,116,104,101,32,103,105,118,101,110,10,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,46,10,84,104,101,32,114,101,109,97,105,110,105,110,103,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,116,104,101,32,115,97,109,101,32,97,115,32,102,111,114,32,115,111,99,107,101,116,40,41,46,0] /* fromfd(fd, family, t */, "i8", ALLOC_NORMAL);
__str112=allocate([105,58,110,116,111,104,115,0] /* i:ntohs\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([99,97,110,39,116,32,99,111,110,118,101,114,116,32,110,101,103,97,116,105,118,101,32,110,117,109,98,101,114,32,116,111,32,117,110,115,105,103,110,101,100,32,108,111,110,103,0] /* can't convert negati */, "i8", ALLOC_NORMAL);
_ntohs_doc=allocate([110,116,111,104,115,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,49,54,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,110,101,116,119,111,114,107,32,116,111,32,104,111,115,116,32,98,121,116,101,32,111,114,100,101,114,46,0] /* ntohs(integer) -> in */, "i8", ALLOC_NORMAL);
__str114=allocate([101,120,112,101,99,116,101,100,32,105,110,116,47,108,111,110,103,44,32,37,115,32,102,111,117,110,100,0] /* expected int/long, % */, "i8", ALLOC_NORMAL);
_ntohl_doc=allocate([110,116,111,104,108,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,51,50,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,110,101,116,119,111,114,107,32,116,111,32,104,111,115,116,32,98,121,116,101,32,111,114,100,101,114,46,0] /* ntohl(integer) -> in */, "i8", ALLOC_NORMAL);
__str115=allocate([105,58,104,116,111,110,115,0] /* i:htons\00 */, "i8", ALLOC_NORMAL);
_htons_doc=allocate([104,116,111,110,115,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,49,54,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,104,111,115,116,32,116,111,32,110,101,116,119,111,114,107,32,98,121,116,101,32,111,114,100,101,114,46,0] /* htons(integer) -> in */, "i8", ALLOC_NORMAL);
_htonl_doc=allocate([104,116,111,110,108,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,51,50,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,104,111,115,116,32,116,111,32,110,101,116,119,111,114,107,32,98,121,116,101,32,111,114,100,101,114,46,0] /* htonl(integer) -> in */, "i8", ALLOC_NORMAL);
_inet_aton_doc=allocate([105,110,101,116,95,97,116,111,110,40,115,116,114,105,110,103,41,32,45,62,32,112,97,99,107,101,100,32,51,50,45,98,105,116,32,73,80,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,105,110,32,115,116,114,105,110,103,32,102,111,114,109,97,116,32,40,49,50,51,46,52,53,46,54,55,46,56,57,41,32,116,111,32,116,104,101,32,51,50,45,98,105,116,32,112,97,99,107,101,100,10,98,105,110,97,114,121,32,102,111,114,109,97,116,32,117,115,101,100,32,105,110,32,108,111,119,45,108,101,118,101,108,32,110,101,116,119,111,114,107,32,102,117,110,99,116,105,111,110,115,46,0] /* inet_aton(string) -> */, "i8", ALLOC_NORMAL);
__str116=allocate([115,58,105,110,101,116,95,97,116,111,110,0] /* s:inet_aton\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([105,108,108,101,103,97,108,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,32,112,97,115,115,101,100,32,116,111,32,105,110,101,116,95,97,116,111,110,0] /* illegal IP address s */, "i8", ALLOC_NORMAL);
_inet_ntoa_doc=allocate([105,110,101,116,95,110,116,111,97,40,112,97,99,107,101,100,95,105,112,41,32,45,62,32,105,112,95,97,100,100,114,101,115,115,95,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,102,114,111,109,32,51,50,45,98,105,116,32,112,97,99,107,101,100,32,98,105,110,97,114,121,32,102,111,114,109,97,116,32,116,111,32,115,116,114,105,110,103,32,102,111,114,109,97,116,0] /* inet_ntoa(packed_ip) */, "i8", ALLOC_NORMAL);
__str118=allocate([115,35,58,105,110,101,116,95,110,116,111,97,0] /* s#:inet_ntoa\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([112,97,99,107,101,100,32,73,80,32,119,114,111,110,103,32,108,101,110,103,116,104,32,102,111,114,32,105,110,101,116,95,110,116,111,97,0] /* packed IP wrong leng */, "i8", ALLOC_NORMAL);
_inet_pton_doc=allocate([105,110,101,116,95,112,116,111,110,40,97,102,44,32,105,112,41,32,45,62,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,102,114,111,109,32,115,116,114,105,110,103,32,102,111,114,109,97,116,32,116,111,32,97,32,112,97,99,107,101,100,32,115,116,114,105,110,103,32,115,117,105,116,97,98,108,101,10,102,111,114,32,117,115,101,32,119,105,116,104,32,108,111,119,45,108,101,118,101,108,32,110,101,116,119,111,114,107,32,102,117,110,99,116,105,111,110,115,46,0] /* inet_pton(af, ip) -> */, "i8", ALLOC_NORMAL);
__str120=allocate([105,115,58,105,110,101,116,95,112,116,111,110,0] /* is:inet_pton\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([105,108,108,101,103,97,108,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,32,112,97,115,115,101,100,32,116,111,32,105,110,101,116,95,112,116,111,110,0] /* illegal IP address s */, "i8", ALLOC_NORMAL);
_inet_ntop_doc=allocate([105,110,101,116,95,110,116,111,112,40,97,102,44,32,112,97,99,107,101,100,95,105,112,41,32,45,62,32,115,116,114,105,110,103,32,102,111,114,109,97,116,116,101,100,32,73,80,32,97,100,100,114,101,115,115,10,10,67,111,110,118,101,114,116,32,97,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,103,105,118,101,110,32,102,97,109,105,108,121,32,116,111,32,115,116,114,105,110,103,32,102,111,114,109,97,116,46,0] /* inet_ntop(af, packed */, "i8", ALLOC_NORMAL);
__str122=allocate([105,115,35,58,105,110,101,116,95,110,116,111,112,0] /* is#:inet_ntop\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([105,110,118,97,108,105,100,32,108,101,110,103,116,104,32,111,102,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,0] /* invalid length of pa */, "i8", ALLOC_NORMAL);
__str124=allocate([117,110,107,110,111,119,110,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,32,37,100,0] /* unknown address fami */, "i8", ALLOC_NORMAL);
__str125=allocate([79,79,124,105,105,105,105,58,103,101,116,97,100,100,114,105,110,102,111,0] /* OO|iiii:getaddrinfo\ */, "i8", ALLOC_NORMAL);
__str126=allocate([101,110,99,111,100,101,0] /* encode\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str128=allocate([103,101,116,97,100,100,114,105,110,102,111,40,41,32,97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0] /* getaddrinfo() argume */, "i8", ALLOC_NORMAL);
__str129=allocate([37,108,100,0] /* %ld\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([73,110,116,32,111,114,32,83,116,114,105,110,103,32,101,120,112,101,99,116,101,100,0] /* Int or String expect */, "i8", ALLOC_NORMAL);
__str131=allocate([105,105,105,115,79,0] /* iiisO\00 */, "i8", ALLOC_NORMAL);
_getaddrinfo_doc=allocate([103,101,116,97,100,100,114,105,110,102,111,40,104,111,115,116,44,32,112,111,114,116,32,91,44,32,102,97,109,105,108,121,44,32,115,111,99,107,116,121,112,101,44,32,112,114,111,116,111,44,32,102,108,97,103,115,93,41,10,32,32,32,32,45,62,32,108,105,115,116,32,111,102,32,40,102,97,109,105,108,121,44,32,115,111,99,107,116,121,112,101,44,32,112,114,111,116,111,44,32,99,97,110,111,110,110,97,109,101,44,32,115,111,99,107,97,100,100,114,41,10,10,82,101,115,111,108,118,101,32,104,111,115,116,32,97,110,100,32,112,111,114,116,32,105,110,116,111,32,97,100,100,114,105,110,102,111,32,115,116,114,117,99,116,46,0] /* getaddrinfo(host, po */, "i8", ALLOC_NORMAL);
__str132=allocate([79,105,58,103,101,116,110,97,109,101,105,110,102,111,0] /* Oi:getnameinfo\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([103,101,116,110,97,109,101,105,110,102,111,40,41,32,97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0] /* getnameinfo() argume */, "i8", ALLOC_NORMAL);
__str134=allocate([115,105,124,105,105,0] /* si|ii\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([37,100,0] /* %d\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([115,111,99,107,97,100,100,114,32,114,101,115,111,108,118,101,100,32,116,111,32,109,117,108,116,105,112,108,101,32,97,100,100,114,101,115,115,101,115,0] /* sockaddr resolved to */, "i8", ALLOC_NORMAL);
__str137=allocate([73,80,118,52,32,115,111,99,107,97,100,100,114,32,109,117,115,116,32,98,101,32,50,32,116,117,112,108,101,0] /* IPv4 sockaddr must b */, "i8", ALLOC_NORMAL);
__str138=allocate([115,115,0] /* ss\00 */, "i8", ALLOC_NORMAL);
_getnameinfo_doc=allocate([103,101,116,110,97,109,101,105,110,102,111,40,115,111,99,107,97,100,100,114,44,32,102,108,97,103,115,41,32,45,45,62,32,40,104,111,115,116,44,32,112,111,114,116,41,10,10,71,101,116,32,104,111,115,116,32,97,110,100,32,112,111,114,116,32,102,111,114,32,97,32,115,111,99,107,97,100,100,114,46,0] /* getnameinfo(sockaddr */, "i8", ALLOC_NORMAL);
_getdefaulttimeout_doc=allocate([103,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,40,41,32,45,62,32,116,105,109,101,111,117,116,10,10,82,101,116,117,114,110,115,32,116,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,102,111,114,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,46,10,65,32,118,97,108,117,101,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,104,97,118,101,32,110,111,32,116,105,109,101,111,117,116,46,10,87,104,101,110,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,105,115,32,102,105,114,115,116,32,105,109,112,111,114,116,101,100,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,78,111,110,101,46,0] /* getdefaulttimeout()  */, "i8", ALLOC_NORMAL);
_setdefaulttimeout_doc=allocate([115,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,40,116,105,109,101,111,117,116,41,10,10,83,101,116,32,116,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,102,111,114,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,46,10,65,32,118,97,108,117,101,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,104,97,118,101,32,110,111,32,116,105,109,101,111,117,116,46,10,87,104,101,110,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,105,115,32,102,105,114,115,116,32,105,109,112,111,114,116,101,100,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,78,111,110,101,46,0] /* setdefaulttimeout(ti */, "i8", ALLOC_NORMAL);
__str139=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,0] /* gethostbyname\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,0] /* gethostbyname_ex\00 */, "i8", ALLOC_NORMAL);
__str141=allocate([103,101,116,104,111,115,116,98,121,97,100,100,114,0] /* gethostbyaddr\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([103,101,116,104,111,115,116,110,97,109,101,0] /* gethostname\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([103,101,116,115,101,114,118,98,121,110,97,109,101,0] /* getservbyname\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,0] /* getservbyport\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([103,101,116,112,114,111,116,111,98,121,110,97,109,101,0] /* getprotobyname\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([102,114,111,109,102,100,0] /* fromfd\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([115,111,99,107,101,116,112,97,105,114,0] /* socketpair\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([110,116,111,104,115,0] /* ntohs\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([110,116,111,104,108,0] /* ntohl\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([104,116,111,110,115,0] /* htons\00 */, "i8", ALLOC_NORMAL);
__str151=allocate([104,116,111,110,108,0] /* htonl\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([105,110,101,116,95,97,116,111,110,0] /* inet_aton\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([105,110,101,116,95,110,116,111,97,0] /* inet_ntoa\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([105,110,101,116,95,112,116,111,110,0] /* inet_pton\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([105,110,101,116,95,110,116,111,112,0] /* inet_ntop\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([103,101,116,97,100,100,114,105,110,102,111,0] /* getaddrinfo\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([103,101,116,110,97,109,101,105,110,102,111,0] /* getnameinfo\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([103,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,0] /* getdefaulttimeout\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([115,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,0] /* setdefaulttimeout\00 */, "i8", ALLOC_NORMAL);
_socket_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_PySocketModuleAPI=allocate(8, ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_NORMAL);
_socket_doc=allocate([73,109,112,108,101,109,101,110,116,97,116,105,111,110,32,109,111,100,117,108,101,32,102,111,114,32,115,111,99,107,101,116,32,111,112,101,114,97,116,105,111,110,115,46,10,10,83,101,101,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,102,111,114,32,100,111,99,117,109,101,110,116,97,116,105,111,110,46,0] /* Implementation modul */, "i8", ALLOC_NORMAL);
__str160=allocate([95,115,111,99,107,101,116,0] /* _socket\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([115,111,99,107,101,116,46,101,114,114,111,114,0] /* socket.error\00 */, "i8", ALLOC_NORMAL);
__str162=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([115,111,99,107,101,116,46,104,101,114,114,111,114,0] /* socket.herror\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([104,101,114,114,111,114,0] /* herror\00 */, "i8", ALLOC_NORMAL);
__str165=allocate([115,111,99,107,101,116,46,103,97,105,101,114,114,111,114,0] /* socket.gaierror\00 */, "i8", ALLOC_NORMAL);
__str166=allocate([103,97,105,101,114,114,111,114,0] /* gaierror\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([115,111,99,107,101,116,46,116,105,109,101,111,117,116,0] /* socket.timeout\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([83,111,99,107,101,116,84,121,112,101,0] /* SocketType\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([115,111,99,107,101,116,0] /* socket\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([104,97,115,95,105,112,118,54,0] /* has_ipv6\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([95,115,111,99,107,101,116,46,67,65,80,73,0] /* _socket.CAPI\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([67,65,80,73,0] /* CAPI\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([65,70,95,85,78,83,80,69,67,0] /* AF_UNSPEC\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([65,70,95,73,78,69,84,0] /* AF_INET\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([65,70,95,73,78,69,84,54,0] /* AF_INET6\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([65,70,95,85,78,73,88,0] /* AF_UNIX\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([65,70,95,65,88,50,53,0] /* AF_AX25\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([65,70,95,73,80,88,0] /* AF_IPX\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([65,70,95,65,80,80,76,69,84,65,76,75,0] /* AF_APPLETALK\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([65,70,95,78,69,84,82,79,77,0] /* AF_NETROM\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([65,70,95,66,82,73,68,71,69,0] /* AF_BRIDGE\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([65,70,95,65,84,77,80,86,67,0] /* AF_ATMPVC\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([65,70,95,88,50,53,0] /* AF_X25\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([65,70,95,82,79,83,69,0] /* AF_ROSE\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([65,70,95,68,69,67,110,101,116,0] /* AF_DECnet\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([65,70,95,78,69,84,66,69,85,73,0] /* AF_NETBEUI\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([65,70,95,83,69,67,85,82,73,84,89,0] /* AF_SECURITY\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([65,70,95,75,69,89,0] /* AF_KEY\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([65,70,95,78,69,84,76,73,78,75,0] /* AF_NETLINK\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([78,69,84,76,73,78,75,95,82,79,85,84,69,0] /* NETLINK_ROUTE\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([78,69,84,76,73,78,75,95,85,83,69,82,83,79,67,75,0] /* NETLINK_USERSOCK\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([78,69,84,76,73,78,75,95,70,73,82,69,87,65,76,76,0] /* NETLINK_FIREWALL\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([78,69,84,76,73,78,75,95,78,70,76,79,71,0] /* NETLINK_NFLOG\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([78,69,84,76,73,78,75,95,88,70,82,77,0] /* NETLINK_XFRM\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([78,69,84,76,73,78,75,95,73,80,54,95,70,87,0] /* NETLINK_IP6_FW\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([78,69,84,76,73,78,75,95,68,78,82,84,77,83,71,0] /* NETLINK_DNRTMSG\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([65,70,95,82,79,85,84,69,0] /* AF_ROUTE\00 */, "i8", ALLOC_NORMAL);
__str198=allocate([65,70,95,65,83,72,0] /* AF_ASH\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([65,70,95,69,67,79,78,69,84,0] /* AF_ECONET\00 */, "i8", ALLOC_NORMAL);
__str200=allocate([65,70,95,65,84,77,83,86,67,0] /* AF_ATMSVC\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([65,70,95,83,78,65,0] /* AF_SNA\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([65,70,95,73,82,68,65,0] /* AF_IRDA\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([65,70,95,80,80,80,79,88,0] /* AF_PPPOX\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([65,70,95,87,65,78,80,73,80,69,0] /* AF_WANPIPE\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([65,70,95,76,76,67,0] /* AF_LLC\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([65,70,95,80,65,67,75,69,84,0] /* AF_PACKET\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([80,70,95,80,65,67,75,69,84,0] /* PF_PACKET\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([80,65,67,75,69,84,95,72,79,83,84,0] /* PACKET_HOST\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([80,65,67,75,69,84,95,66,82,79,65,68,67,65,83,84,0] /* PACKET_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([80,65,67,75,69,84,95,77,85,76,84,73,67,65,83,84,0] /* PACKET_MULTICAST\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([80,65,67,75,69,84,95,79,84,72,69,82,72,79,83,84,0] /* PACKET_OTHERHOST\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([80,65,67,75,69,84,95,79,85,84,71,79,73,78,71,0] /* PACKET_OUTGOING\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([80,65,67,75,69,84,95,76,79,79,80,66,65,67,75,0] /* PACKET_LOOPBACK\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([80,65,67,75,69,84,95,70,65,83,84,82,79,85,84,69,0] /* PACKET_FASTROUTE\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([65,70,95,84,73,80,67,0] /* AF_TIPC\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([84,73,80,67,95,65,68,68,82,95,78,65,77,69,83,69,81,0] /* TIPC_ADDR_NAMESEQ\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([84,73,80,67,95,65,68,68,82,95,78,65,77,69,0] /* TIPC_ADDR_NAME\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([84,73,80,67,95,65,68,68,82,95,73,68,0] /* TIPC_ADDR_ID\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([84,73,80,67,95,90,79,78,69,95,83,67,79,80,69,0] /* TIPC_ZONE_SCOPE\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([84,73,80,67,95,67,76,85,83,84,69,82,95,83,67,79,80,69,0] /* TIPC_CLUSTER_SCOPE\0 */, "i8", ALLOC_NORMAL);
__str221=allocate([84,73,80,67,95,78,79,68,69,95,83,67,79,80,69,0] /* TIPC_NODE_SCOPE\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([83,79,76,95,84,73,80,67,0] /* SOL_TIPC\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([84,73,80,67,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_IMPORTANCE\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([84,73,80,67,95,83,82,67,95,68,82,79,80,80,65,66,76,69,0] /* TIPC_SRC_DROPPABLE\0 */, "i8", ALLOC_NORMAL);
__str225=allocate([84,73,80,67,95,68,69,83,84,95,68,82,79,80,80,65,66,76,69,0] /* TIPC_DEST_DROPPABLE\ */, "i8", ALLOC_NORMAL);
__str226=allocate([84,73,80,67,95,67,79,78,78,95,84,73,77,69,79,85,84,0] /* TIPC_CONN_TIMEOUT\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([84,73,80,67,95,76,79,87,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_LOW_IMPORTANCE\ */, "i8", ALLOC_NORMAL);
__str228=allocate([84,73,80,67,95,77,69,68,73,85,77,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_MEDIUM_IMPORTAN */, "i8", ALLOC_NORMAL);
__str229=allocate([84,73,80,67,95,72,73,71,72,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_HIGH_IMPORTANCE */, "i8", ALLOC_NORMAL);
__str230=allocate([84,73,80,67,95,67,82,73,84,73,67,65,76,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_CRITICAL_IMPORT */, "i8", ALLOC_NORMAL);
__str231=allocate([84,73,80,67,95,83,85,66,95,80,79,82,84,83,0] /* TIPC_SUB_PORTS\00 */, "i8", ALLOC_NORMAL);
__str232=allocate([84,73,80,67,95,83,85,66,95,83,69,82,86,73,67,69,0] /* TIPC_SUB_SERVICE\00 */, "i8", ALLOC_NORMAL);
__str233=allocate([84,73,80,67,95,83,85,66,95,67,65,78,67,69,76,0] /* TIPC_SUB_CANCEL\00 */, "i8", ALLOC_NORMAL);
__str234=allocate([84,73,80,67,95,87,65,73,84,95,70,79,82,69,86,69,82,0] /* TIPC_WAIT_FOREVER\00 */, "i8", ALLOC_NORMAL);
__str235=allocate([84,73,80,67,95,80,85,66,76,73,83,72,69,68,0] /* TIPC_PUBLISHED\00 */, "i8", ALLOC_NORMAL);
__str236=allocate([84,73,80,67,95,87,73,84,72,68,82,65,87,78,0] /* TIPC_WITHDRAWN\00 */, "i8", ALLOC_NORMAL);
__str237=allocate([84,73,80,67,95,83,85,66,83,67,82,95,84,73,77,69,79,85,84,0] /* TIPC_SUBSCR_TIMEOUT\ */, "i8", ALLOC_NORMAL);
__str238=allocate([84,73,80,67,95,67,70,71,95,83,82,86,0] /* TIPC_CFG_SRV\00 */, "i8", ALLOC_NORMAL);
__str239=allocate([84,73,80,67,95,84,79,80,95,83,82,86,0] /* TIPC_TOP_SRV\00 */, "i8", ALLOC_NORMAL);
__str240=allocate([83,79,67,75,95,83,84,82,69,65,77,0] /* SOCK_STREAM\00 */, "i8", ALLOC_NORMAL);
__str241=allocate([83,79,67,75,95,68,71,82,65,77,0] /* SOCK_DGRAM\00 */, "i8", ALLOC_NORMAL);
__str242=allocate([83,79,67,75,95,82,65,87,0] /* SOCK_RAW\00 */, "i8", ALLOC_NORMAL);
__str243=allocate([83,79,67,75,95,83,69,81,80,65,67,75,69,84,0] /* SOCK_SEQPACKET\00 */, "i8", ALLOC_NORMAL);
__str244=allocate([83,79,67,75,95,82,68,77,0] /* SOCK_RDM\00 */, "i8", ALLOC_NORMAL);
__str245=allocate([83,79,95,68,69,66,85,71,0] /* SO_DEBUG\00 */, "i8", ALLOC_NORMAL);
__str246=allocate([83,79,95,65,67,67,69,80,84,67,79,78,78,0] /* SO_ACCEPTCONN\00 */, "i8", ALLOC_NORMAL);
__str247=allocate([83,79,95,82,69,85,83,69,65,68,68,82,0] /* SO_REUSEADDR\00 */, "i8", ALLOC_NORMAL);
__str248=allocate([83,79,95,75,69,69,80,65,76,73,86,69,0] /* SO_KEEPALIVE\00 */, "i8", ALLOC_NORMAL);
__str249=allocate([83,79,95,68,79,78,84,82,79,85,84,69,0] /* SO_DONTROUTE\00 */, "i8", ALLOC_NORMAL);
__str250=allocate([83,79,95,66,82,79,65,68,67,65,83,84,0] /* SO_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str251=allocate([83,79,95,76,73,78,71,69,82,0] /* SO_LINGER\00 */, "i8", ALLOC_NORMAL);
__str252=allocate([83,79,95,79,79,66,73,78,76,73,78,69,0] /* SO_OOBINLINE\00 */, "i8", ALLOC_NORMAL);
__str253=allocate([83,79,95,83,78,68,66,85,70,0] /* SO_SNDBUF\00 */, "i8", ALLOC_NORMAL);
__str254=allocate([83,79,95,82,67,86,66,85,70,0] /* SO_RCVBUF\00 */, "i8", ALLOC_NORMAL);
__str255=allocate([83,79,95,83,78,68,76,79,87,65,84,0] /* SO_SNDLOWAT\00 */, "i8", ALLOC_NORMAL);
__str256=allocate([83,79,95,82,67,86,76,79,87,65,84,0] /* SO_RCVLOWAT\00 */, "i8", ALLOC_NORMAL);
__str257=allocate([83,79,95,83,78,68,84,73,77,69,79,0] /* SO_SNDTIMEO\00 */, "i8", ALLOC_NORMAL);
__str258=allocate([83,79,95,82,67,86,84,73,77,69,79,0] /* SO_RCVTIMEO\00 */, "i8", ALLOC_NORMAL);
__str259=allocate([83,79,95,69,82,82,79,82,0] /* SO_ERROR\00 */, "i8", ALLOC_NORMAL);
__str260=allocate([83,79,95,84,89,80,69,0] /* SO_TYPE\00 */, "i8", ALLOC_NORMAL);
__str261=allocate([83,79,77,65,88,67,79,78,78,0] /* SOMAXCONN\00 */, "i8", ALLOC_NORMAL);
__str262=allocate([77,83,71,95,79,79,66,0] /* MSG_OOB\00 */, "i8", ALLOC_NORMAL);
__str263=allocate([77,83,71,95,80,69,69,75,0] /* MSG_PEEK\00 */, "i8", ALLOC_NORMAL);
__str264=allocate([77,83,71,95,68,79,78,84,82,79,85,84,69,0] /* MSG_DONTROUTE\00 */, "i8", ALLOC_NORMAL);
__str265=allocate([77,83,71,95,68,79,78,84,87,65,73,84,0] /* MSG_DONTWAIT\00 */, "i8", ALLOC_NORMAL);
__str266=allocate([77,83,71,95,69,79,82,0] /* MSG_EOR\00 */, "i8", ALLOC_NORMAL);
__str267=allocate([77,83,71,95,84,82,85,78,67,0] /* MSG_TRUNC\00 */, "i8", ALLOC_NORMAL);
__str268=allocate([77,83,71,95,67,84,82,85,78,67,0] /* MSG_CTRUNC\00 */, "i8", ALLOC_NORMAL);
__str269=allocate([77,83,71,95,87,65,73,84,65,76,76,0] /* MSG_WAITALL\00 */, "i8", ALLOC_NORMAL);
__str270=allocate([83,79,76,95,83,79,67,75,69,84,0] /* SOL_SOCKET\00 */, "i8", ALLOC_NORMAL);
__str271=allocate([83,79,76,95,73,80,0] /* SOL_IP\00 */, "i8", ALLOC_NORMAL);
__str272=allocate([83,79,76,95,84,67,80,0] /* SOL_TCP\00 */, "i8", ALLOC_NORMAL);
__str273=allocate([83,79,76,95,85,68,80,0] /* SOL_UDP\00 */, "i8", ALLOC_NORMAL);
__str274=allocate([73,80,80,82,79,84,79,95,73,80,0] /* IPPROTO_IP\00 */, "i8", ALLOC_NORMAL);
__str275=allocate([73,80,80,82,79,84,79,95,72,79,80,79,80,84,83,0] /* IPPROTO_HOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str276=allocate([73,80,80,82,79,84,79,95,73,67,77,80,0] /* IPPROTO_ICMP\00 */, "i8", ALLOC_NORMAL);
__str277=allocate([73,80,80,82,79,84,79,95,73,71,77,80,0] /* IPPROTO_IGMP\00 */, "i8", ALLOC_NORMAL);
__str278=allocate([73,80,80,82,79,84,79,95,73,80,86,54,0] /* IPPROTO_IPV6\00 */, "i8", ALLOC_NORMAL);
__str279=allocate([73,80,80,82,79,84,79,95,73,80,73,80,0] /* IPPROTO_IPIP\00 */, "i8", ALLOC_NORMAL);
__str280=allocate([73,80,80,82,79,84,79,95,84,67,80,0] /* IPPROTO_TCP\00 */, "i8", ALLOC_NORMAL);
__str281=allocate([73,80,80,82,79,84,79,95,69,71,80,0] /* IPPROTO_EGP\00 */, "i8", ALLOC_NORMAL);
__str282=allocate([73,80,80,82,79,84,79,95,80,85,80,0] /* IPPROTO_PUP\00 */, "i8", ALLOC_NORMAL);
__str283=allocate([73,80,80,82,79,84,79,95,85,68,80,0] /* IPPROTO_UDP\00 */, "i8", ALLOC_NORMAL);
__str284=allocate([73,80,80,82,79,84,79,95,73,68,80,0] /* IPPROTO_IDP\00 */, "i8", ALLOC_NORMAL);
__str285=allocate([73,80,80,82,79,84,79,95,84,80,0] /* IPPROTO_TP\00 */, "i8", ALLOC_NORMAL);
__str286=allocate([73,80,80,82,79,84,79,95,82,79,85,84,73,78,71,0] /* IPPROTO_ROUTING\00 */, "i8", ALLOC_NORMAL);
__str287=allocate([73,80,80,82,79,84,79,95,70,82,65,71,77,69,78,84,0] /* IPPROTO_FRAGMENT\00 */, "i8", ALLOC_NORMAL);
__str288=allocate([73,80,80,82,79,84,79,95,82,83,86,80,0] /* IPPROTO_RSVP\00 */, "i8", ALLOC_NORMAL);
__str289=allocate([73,80,80,82,79,84,79,95,71,82,69,0] /* IPPROTO_GRE\00 */, "i8", ALLOC_NORMAL);
__str290=allocate([73,80,80,82,79,84,79,95,69,83,80,0] /* IPPROTO_ESP\00 */, "i8", ALLOC_NORMAL);
__str291=allocate([73,80,80,82,79,84,79,95,65,72,0] /* IPPROTO_AH\00 */, "i8", ALLOC_NORMAL);
__str292=allocate([73,80,80,82,79,84,79,95,73,67,77,80,86,54,0] /* IPPROTO_ICMPV6\00 */, "i8", ALLOC_NORMAL);
__str293=allocate([73,80,80,82,79,84,79,95,78,79,78,69,0] /* IPPROTO_NONE\00 */, "i8", ALLOC_NORMAL);
__str294=allocate([73,80,80,82,79,84,79,95,68,83,84,79,80,84,83,0] /* IPPROTO_DSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str295=allocate([73,80,80,82,79,84,79,95,80,73,77,0] /* IPPROTO_PIM\00 */, "i8", ALLOC_NORMAL);
__str296=allocate([73,80,80,82,79,84,79,95,82,65,87,0] /* IPPROTO_RAW\00 */, "i8", ALLOC_NORMAL);
__str297=allocate([73,80,80,79,82,84,95,82,69,83,69,82,86,69,68,0] /* IPPORT_RESERVED\00 */, "i8", ALLOC_NORMAL);
__str298=allocate([73,80,80,79,82,84,95,85,83,69,82,82,69,83,69,82,86,69,68,0] /* IPPORT_USERRESERVED\ */, "i8", ALLOC_NORMAL);
__str299=allocate([73,78,65,68,68,82,95,65,78,89,0] /* INADDR_ANY\00 */, "i8", ALLOC_NORMAL);
__str300=allocate([73,78,65,68,68,82,95,66,82,79,65,68,67,65,83,84,0] /* INADDR_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str301=allocate([73,78,65,68,68,82,95,76,79,79,80,66,65,67,75,0] /* INADDR_LOOPBACK\00 */, "i8", ALLOC_NORMAL);
__str302=allocate([73,78,65,68,68,82,95,85,78,83,80,69,67,95,71,82,79,85,80,0] /* INADDR_UNSPEC_GROUP\ */, "i8", ALLOC_NORMAL);
__str303=allocate([73,78,65,68,68,82,95,65,76,76,72,79,83,84,83,95,71,82,79,85,80,0] /* INADDR_ALLHOSTS_GROU */, "i8", ALLOC_NORMAL);
__str304=allocate([73,78,65,68,68,82,95,77,65,88,95,76,79,67,65,76,95,71,82,79,85,80,0] /* INADDR_MAX_LOCAL_GRO */, "i8", ALLOC_NORMAL);
__str305=allocate([73,78,65,68,68,82,95,78,79,78,69,0] /* INADDR_NONE\00 */, "i8", ALLOC_NORMAL);
__str306=allocate([73,80,95,79,80,84,73,79,78,83,0] /* IP_OPTIONS\00 */, "i8", ALLOC_NORMAL);
__str307=allocate([73,80,95,72,68,82,73,78,67,76,0] /* IP_HDRINCL\00 */, "i8", ALLOC_NORMAL);
__str308=allocate([73,80,95,84,79,83,0] /* IP_TOS\00 */, "i8", ALLOC_NORMAL);
__str309=allocate([73,80,95,84,84,76,0] /* IP_TTL\00 */, "i8", ALLOC_NORMAL);
__str310=allocate([73,80,95,82,69,67,86,79,80,84,83,0] /* IP_RECVOPTS\00 */, "i8", ALLOC_NORMAL);
__str311=allocate([73,80,95,82,69,67,86,82,69,84,79,80,84,83,0] /* IP_RECVRETOPTS\00 */, "i8", ALLOC_NORMAL);
__str312=allocate([73,80,95,82,69,84,79,80,84,83,0] /* IP_RETOPTS\00 */, "i8", ALLOC_NORMAL);
__str313=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,73,70,0] /* IP_MULTICAST_IF\00 */, "i8", ALLOC_NORMAL);
__str314=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,84,84,76,0] /* IP_MULTICAST_TTL\00 */, "i8", ALLOC_NORMAL);
__str315=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IP_MULTICAST_LOOP\00 */, "i8", ALLOC_NORMAL);
__str316=allocate([73,80,95,65,68,68,95,77,69,77,66,69,82,83,72,73,80,0] /* IP_ADD_MEMBERSHIP\00 */, "i8", ALLOC_NORMAL);
__str317=allocate([73,80,95,68,82,79,80,95,77,69,77,66,69,82,83,72,73,80,0] /* IP_DROP_MEMBERSHIP\0 */, "i8", ALLOC_NORMAL);
__str318=allocate([73,80,95,68,69,70,65,85,76,84,95,77,85,76,84,73,67,65,83,84,95,84,84,76,0] /* IP_DEFAULT_MULTICAST */, "i8", ALLOC_NORMAL);
__str319=allocate([73,80,95,68,69,70,65,85,76,84,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IP_DEFAULT_MULTICAST */, "i8", ALLOC_NORMAL);
__str320=allocate([73,80,95,77,65,88,95,77,69,77,66,69,82,83,72,73,80,83,0] /* IP_MAX_MEMBERSHIPS\0 */, "i8", ALLOC_NORMAL);
__str321=allocate([73,80,86,54,95,74,79,73,78,95,71,82,79,85,80,0] /* IPV6_JOIN_GROUP\00 */, "i8", ALLOC_NORMAL);
__str322=allocate([73,80,86,54,95,76,69,65,86,69,95,71,82,79,85,80,0] /* IPV6_LEAVE_GROUP\00 */, "i8", ALLOC_NORMAL);
__str323=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,72,79,80,83,0] /* IPV6_MULTICAST_HOPS\ */, "i8", ALLOC_NORMAL);
__str324=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,73,70,0] /* IPV6_MULTICAST_IF\00 */, "i8", ALLOC_NORMAL);
__str325=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IPV6_MULTICAST_LOOP\ */, "i8", ALLOC_NORMAL);
__str326=allocate([73,80,86,54,95,85,78,73,67,65,83,84,95,72,79,80,83,0] /* IPV6_UNICAST_HOPS\00 */, "i8", ALLOC_NORMAL);
__str327=allocate([73,80,86,54,95,86,54,79,78,76,89,0] /* IPV6_V6ONLY\00 */, "i8", ALLOC_NORMAL);
__str328=allocate([73,80,86,54,95,67,72,69,67,75,83,85,77,0] /* IPV6_CHECKSUM\00 */, "i8", ALLOC_NORMAL);
__str329=allocate([73,80,86,54,95,68,83,84,79,80,84,83,0] /* IPV6_DSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str330=allocate([73,80,86,54,95,72,79,80,76,73,77,73,84,0] /* IPV6_HOPLIMIT\00 */, "i8", ALLOC_NORMAL);
__str331=allocate([73,80,86,54,95,72,79,80,79,80,84,83,0] /* IPV6_HOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str332=allocate([73,80,86,54,95,78,69,88,84,72,79,80,0] /* IPV6_NEXTHOP\00 */, "i8", ALLOC_NORMAL);
__str333=allocate([73,80,86,54,95,80,75,84,73,78,70,79,0] /* IPV6_PKTINFO\00 */, "i8", ALLOC_NORMAL);
__str334=allocate([73,80,86,54,95,82,69,67,86,68,83,84,79,80,84,83,0] /* IPV6_RECVDSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str335=allocate([73,80,86,54,95,82,69,67,86,72,79,80,76,73,77,73,84,0] /* IPV6_RECVHOPLIMIT\00 */, "i8", ALLOC_NORMAL);
__str336=allocate([73,80,86,54,95,82,69,67,86,72,79,80,79,80,84,83,0] /* IPV6_RECVHOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str337=allocate([73,80,86,54,95,82,69,67,86,80,75,84,73,78,70,79,0] /* IPV6_RECVPKTINFO\00 */, "i8", ALLOC_NORMAL);
__str338=allocate([73,80,86,54,95,82,69,67,86,82,84,72,68,82,0] /* IPV6_RECVRTHDR\00 */, "i8", ALLOC_NORMAL);
__str339=allocate([73,80,86,54,95,82,69,67,86,84,67,76,65,83,83,0] /* IPV6_RECVTCLASS\00 */, "i8", ALLOC_NORMAL);
__str340=allocate([73,80,86,54,95,82,84,72,68,82,0] /* IPV6_RTHDR\00 */, "i8", ALLOC_NORMAL);
__str341=allocate([73,80,86,54,95,82,84,72,68,82,68,83,84,79,80,84,83,0] /* IPV6_RTHDRDSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str342=allocate([73,80,86,54,95,82,84,72,68,82,95,84,89,80,69,95,48,0] /* IPV6_RTHDR_TYPE_0\00 */, "i8", ALLOC_NORMAL);
__str343=allocate([73,80,86,54,95,84,67,76,65,83,83,0] /* IPV6_TCLASS\00 */, "i8", ALLOC_NORMAL);
__str344=allocate([84,67,80,95,78,79,68,69,76,65,89,0] /* TCP_NODELAY\00 */, "i8", ALLOC_NORMAL);
__str345=allocate([84,67,80,95,77,65,88,83,69,71,0] /* TCP_MAXSEG\00 */, "i8", ALLOC_NORMAL);
__str346=allocate([84,67,80,95,67,79,82,75,0] /* TCP_CORK\00 */, "i8", ALLOC_NORMAL);
__str347=allocate([84,67,80,95,75,69,69,80,73,68,76,69,0] /* TCP_KEEPIDLE\00 */, "i8", ALLOC_NORMAL);
__str348=allocate([84,67,80,95,75,69,69,80,73,78,84,86,76,0] /* TCP_KEEPINTVL\00 */, "i8", ALLOC_NORMAL);
__str349=allocate([84,67,80,95,75,69,69,80,67,78,84,0] /* TCP_KEEPCNT\00 */, "i8", ALLOC_NORMAL);
__str350=allocate([84,67,80,95,83,89,78,67,78,84,0] /* TCP_SYNCNT\00 */, "i8", ALLOC_NORMAL);
__str351=allocate([84,67,80,95,76,73,78,71,69,82,50,0] /* TCP_LINGER2\00 */, "i8", ALLOC_NORMAL);
__str352=allocate([84,67,80,95,68,69,70,69,82,95,65,67,67,69,80,84,0] /* TCP_DEFER_ACCEPT\00 */, "i8", ALLOC_NORMAL);
__str353=allocate([84,67,80,95,87,73,78,68,79,87,95,67,76,65,77,80,0] /* TCP_WINDOW_CLAMP\00 */, "i8", ALLOC_NORMAL);
__str354=allocate([84,67,80,95,73,78,70,79,0] /* TCP_INFO\00 */, "i8", ALLOC_NORMAL);
__str355=allocate([84,67,80,95,81,85,73,67,75,65,67,75,0] /* TCP_QUICKACK\00 */, "i8", ALLOC_NORMAL);
__str356=allocate([69,65,73,95,65,68,68,82,70,65,77,73,76,89,0] /* EAI_ADDRFAMILY\00 */, "i8", ALLOC_NORMAL);
__str357=allocate([69,65,73,95,65,71,65,73,78,0] /* EAI_AGAIN\00 */, "i8", ALLOC_NORMAL);
__str358=allocate([69,65,73,95,66,65,68,70,76,65,71,83,0] /* EAI_BADFLAGS\00 */, "i8", ALLOC_NORMAL);
__str359=allocate([69,65,73,95,70,65,73,76,0] /* EAI_FAIL\00 */, "i8", ALLOC_NORMAL);
__str360=allocate([69,65,73,95,70,65,77,73,76,89,0] /* EAI_FAMILY\00 */, "i8", ALLOC_NORMAL);
__str361=allocate([69,65,73,95,77,69,77,79,82,89,0] /* EAI_MEMORY\00 */, "i8", ALLOC_NORMAL);
__str362=allocate([69,65,73,95,78,79,68,65,84,65,0] /* EAI_NODATA\00 */, "i8", ALLOC_NORMAL);
__str363=allocate([69,65,73,95,78,79,78,65,77,69,0] /* EAI_NONAME\00 */, "i8", ALLOC_NORMAL);
__str364=allocate([69,65,73,95,79,86,69,82,70,76,79,87,0] /* EAI_OVERFLOW\00 */, "i8", ALLOC_NORMAL);
__str365=allocate([69,65,73,95,83,69,82,86,73,67,69,0] /* EAI_SERVICE\00 */, "i8", ALLOC_NORMAL);
__str366=allocate([69,65,73,95,83,79,67,75,84,89,80,69,0] /* EAI_SOCKTYPE\00 */, "i8", ALLOC_NORMAL);
__str367=allocate([69,65,73,95,83,89,83,84,69,77,0] /* EAI_SYSTEM\00 */, "i8", ALLOC_NORMAL);
__str368=allocate([65,73,95,80,65,83,83,73,86,69,0] /* AI_PASSIVE\00 */, "i8", ALLOC_NORMAL);
__str369=allocate([65,73,95,67,65,78,79,78,78,65,77,69,0] /* AI_CANONNAME\00 */, "i8", ALLOC_NORMAL);
__str370=allocate([65,73,95,78,85,77,69,82,73,67,72,79,83,84,0] /* AI_NUMERICHOST\00 */, "i8", ALLOC_NORMAL);
__str371=allocate([65,73,95,78,85,77,69,82,73,67,83,69,82,86,0] /* AI_NUMERICSERV\00 */, "i8", ALLOC_NORMAL);
__str372=allocate([65,73,95,65,76,76,0] /* AI_ALL\00 */, "i8", ALLOC_NORMAL);
__str373=allocate([65,73,95,65,68,68,82,67,79,78,70,73,71,0] /* AI_ADDRCONFIG\00 */, "i8", ALLOC_NORMAL);
__str374=allocate([65,73,95,86,52,77,65,80,80,69,68,0] /* AI_V4MAPPED\00 */, "i8", ALLOC_NORMAL);
__str375=allocate([78,73,95,77,65,88,72,79,83,84,0] /* NI_MAXHOST\00 */, "i8", ALLOC_NORMAL);
__str376=allocate([78,73,95,77,65,88,83,69,82,86,0] /* NI_MAXSERV\00 */, "i8", ALLOC_NORMAL);
__str377=allocate([78,73,95,78,79,70,81,68,78,0] /* NI_NOFQDN\00 */, "i8", ALLOC_NORMAL);
__str378=allocate([78,73,95,78,85,77,69,82,73,67,72,79,83,84,0] /* NI_NUMERICHOST\00 */, "i8", ALLOC_NORMAL);
__str379=allocate([78,73,95,78,65,77,69,82,69,81,68,0] /* NI_NAMEREQD\00 */, "i8", ALLOC_NORMAL);
__str380=allocate([78,73,95,78,85,77,69,82,73,67,83,69,82,86,0] /* NI_NUMERICSERV\00 */, "i8", ALLOC_NORMAL);
__str381=allocate([78,73,95,68,71,82,65,77,0] /* NI_DGRAM\00 */, "i8", ALLOC_NORMAL);
__str382=allocate([83,72,85,84,95,82,68,0] /* SHUT_RD\00 */, "i8", ALLOC_NORMAL);
__str383=allocate([83,72,85,84,95,87,82,0] /* SHUT_WR\00 */, "i8", ALLOC_NORMAL);
__str384=allocate([83,72,85,84,95,82,68,87,82,0] /* SHUT_RDWR\00 */, "i8", ALLOC_NORMAL);
HEAP[_kwlist_10873]=((__str47)&4294967295);
HEAP[_kwlist_10873+4]=((__str48)&4294967295);
HEAP[_kwlist_10873+8]=((__str49)&4294967295);
HEAP[_kwlist_11020]=((__str47)&4294967295);
HEAP[_kwlist_11020+4]=((__str48)&4294967295);
HEAP[_kwlist_11020+8]=((__str49)&4294967295);
HEAP[_sock_methods]=((__str64)&4294967295);
HEAP[_sock_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_sock_methods+12]=((_accept_doc)&4294967295);
HEAP[_sock_methods+16]=((__str65)&4294967295);
HEAP[_sock_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_sock_methods+28]=((_bind_doc)&4294967295);
HEAP[_sock_methods+32]=((__str66)&4294967295);
HEAP[_sock_methods+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_sock_methods+44]=((_close_doc)&4294967295);
HEAP[_sock_methods+48]=((__str67)&4294967295);
HEAP[_sock_methods+52]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_sock_methods+60]=((_connect_doc)&4294967295);
HEAP[_sock_methods+64]=((__str68)&4294967295);
HEAP[_sock_methods+68]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_sock_methods+76]=((_connect_ex_doc)&4294967295);
HEAP[_sock_methods+80]=((__str69)&4294967295);
HEAP[_sock_methods+84]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_sock_methods+92]=((_dup_doc)&4294967295);
HEAP[_sock_methods+96]=((__str70)&4294967295);
HEAP[_sock_methods+100]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_sock_methods+108]=((_fileno_doc)&4294967295);
HEAP[_sock_methods+112]=((__str71)&4294967295);
HEAP[_sock_methods+116]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_sock_methods+124]=((_getpeername_doc)&4294967295);
HEAP[_sock_methods+128]=((__str72)&4294967295);
HEAP[_sock_methods+132]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_sock_methods+140]=((_getsockname_doc)&4294967295);
HEAP[_sock_methods+144]=((__str73)&4294967295);
HEAP[_sock_methods+148]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_sock_methods+156]=((_getsockopt_doc)&4294967295);
HEAP[_sock_methods+160]=((__str74)&4294967295);
HEAP[_sock_methods+164]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_sock_methods+172]=((_listen_doc)&4294967295);
HEAP[_sock_methods+176]=((__str75)&4294967295);
HEAP[_sock_methods+180]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_sock_methods+188]=((_makefile_doc)&4294967295);
HEAP[_sock_methods+192]=((__str76)&4294967295);
HEAP[_sock_methods+196]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_sock_methods+204]=((_recv_doc)&4294967295);
HEAP[_sock_methods+208]=((__str77)&4294967295);
HEAP[_sock_methods+212]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_sock_methods+220]=((_recv_into_doc)&4294967295);
HEAP[_sock_methods+224]=((__str78)&4294967295);
HEAP[_sock_methods+228]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_sock_methods+236]=((_recvfrom_doc)&4294967295);
HEAP[_sock_methods+240]=((__str79)&4294967295);
HEAP[_sock_methods+244]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_sock_methods+252]=((_recvfrom_into_doc)&4294967295);
HEAP[_sock_methods+256]=((__str80)&4294967295);
HEAP[_sock_methods+260]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_sock_methods+268]=((_send_doc)&4294967295);
HEAP[_sock_methods+272]=((__str81)&4294967295);
HEAP[_sock_methods+276]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_sock_methods+284]=((_sendall_doc)&4294967295);
HEAP[_sock_methods+288]=((__str82)&4294967295);
HEAP[_sock_methods+292]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_sock_methods+300]=((_sendto_doc)&4294967295);
HEAP[_sock_methods+304]=((__str83)&4294967295);
HEAP[_sock_methods+308]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_sock_methods+316]=((_setblocking_doc)&4294967295);
HEAP[_sock_methods+320]=((__str84)&4294967295);
HEAP[_sock_methods+324]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_sock_methods+332]=((_settimeout_doc)&4294967295);
HEAP[_sock_methods+336]=((__str85)&4294967295);
HEAP[_sock_methods+340]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_sock_methods+348]=((_gettimeout_doc)&4294967295);
HEAP[_sock_methods+352]=((__str86)&4294967295);
HEAP[_sock_methods+356]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_sock_methods+364]=((_setsockopt_doc)&4294967295);
HEAP[_sock_methods+368]=((__str87)&4294967295);
HEAP[_sock_methods+372]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_sock_methods+380]=((_shutdown_doc)&4294967295);
HEAP[_sock_memberlist]=((__str88)&4294967295);
HEAP[_sock_memberlist+16]=((__str89)&4294967295);
HEAP[_sock_memberlist+20]=((__str90)&4294967295);
HEAP[_sock_memberlist+36]=((__str91)&4294967295);
HEAP[_sock_memberlist+40]=((__str92)&4294967295);
HEAP[_sock_memberlist+56]=((__str93)&4294967295);
HEAP[_sock_memberlist+60]=((__str94)&4294967295);
HEAP[_sock_memberlist+76]=((__str95)&4294967295);
HEAP[_keywords_11267]=((__str88)&4294967295);
HEAP[_keywords_11267+4]=((__str90)&4294967295);
HEAP[_keywords_11267+8]=((__str92)&4294967295);
HEAP[_sock_type+12]=((__str98)&4294967295);
HEAP[_sock_type+24]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_sock_type+44]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_sock_type+72]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_sock_type+88]=((_sock_doc)&4294967295);
HEAP[_sock_type+116]=((_sock_methods)&4294967295);
HEAP[_sock_type+120]=((_sock_memberlist)&4294967295);
HEAP[_sock_type+148]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_sock_type+152]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_sock_type+156]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_sock_type+160]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_socket_methods]=((__str139)&4294967295);
HEAP[_socket_methods+4]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_socket_methods+12]=((_gethostbyname_doc)&4294967295);
HEAP[_socket_methods+16]=((__str140)&4294967295);
HEAP[_socket_methods+20]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_socket_methods+28]=((_ghbn_ex_doc)&4294967295);
HEAP[_socket_methods+32]=((__str141)&4294967295);
HEAP[_socket_methods+36]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_socket_methods+44]=((_gethostbyaddr_doc)&4294967295);
HEAP[_socket_methods+48]=((__str142)&4294967295);
HEAP[_socket_methods+52]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_socket_methods+60]=((_gethostname_doc)&4294967295);
HEAP[_socket_methods+64]=((__str143)&4294967295);
HEAP[_socket_methods+68]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_socket_methods+76]=((_getservbyname_doc)&4294967295);
HEAP[_socket_methods+80]=((__str144)&4294967295);
HEAP[_socket_methods+84]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_socket_methods+92]=((_getservbyport_doc)&4294967295);
HEAP[_socket_methods+96]=((__str145)&4294967295);
HEAP[_socket_methods+100]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_socket_methods+108]=((_getprotobyname_doc)&4294967295);
HEAP[_socket_methods+112]=((__str146)&4294967295);
HEAP[_socket_methods+116]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_socket_methods+124]=((_fromfd_doc)&4294967295);
HEAP[_socket_methods+128]=((__str147)&4294967295);
HEAP[_socket_methods+132]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_socket_methods+140]=((_socketpair_doc)&4294967295);
HEAP[_socket_methods+144]=((__str148)&4294967295);
HEAP[_socket_methods+148]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_socket_methods+156]=((_ntohs_doc)&4294967295);
HEAP[_socket_methods+160]=((__str149)&4294967295);
HEAP[_socket_methods+164]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_socket_methods+172]=((_ntohl_doc)&4294967295);
HEAP[_socket_methods+176]=((__str150)&4294967295);
HEAP[_socket_methods+180]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_socket_methods+188]=((_htons_doc)&4294967295);
HEAP[_socket_methods+192]=((__str151)&4294967295);
HEAP[_socket_methods+196]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_socket_methods+204]=((_htonl_doc)&4294967295);
HEAP[_socket_methods+208]=((__str152)&4294967295);
HEAP[_socket_methods+212]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_socket_methods+220]=((_inet_aton_doc)&4294967295);
HEAP[_socket_methods+224]=((__str153)&4294967295);
HEAP[_socket_methods+228]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_socket_methods+236]=((_inet_ntoa_doc)&4294967295);
HEAP[_socket_methods+240]=((__str154)&4294967295);
HEAP[_socket_methods+244]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_socket_methods+252]=((_inet_pton_doc)&4294967295);
HEAP[_socket_methods+256]=((__str155)&4294967295);
HEAP[_socket_methods+260]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_socket_methods+268]=((_inet_ntop_doc)&4294967295);
HEAP[_socket_methods+272]=((__str156)&4294967295);
HEAP[_socket_methods+276]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_socket_methods+284]=((_getaddrinfo_doc)&4294967295);
HEAP[_socket_methods+288]=((__str157)&4294967295);
HEAP[_socket_methods+292]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_socket_methods+300]=((_getnameinfo_doc)&4294967295);
HEAP[_socket_methods+304]=((__str158)&4294967295);
HEAP[_socket_methods+308]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_socket_methods+316]=((_getdefaulttimeout_doc)&4294967295);
HEAP[_socket_methods+320]=((__str159)&4294967295);
HEAP[_socket_methods+324]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_socket_methods+332]=((_setdefaulttimeout_doc)&4294967295);
HEAP[_PySocketModuleAPI]=_sock_type;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

