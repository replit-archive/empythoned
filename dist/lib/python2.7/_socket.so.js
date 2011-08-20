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
  
var $struct_sockaddr_in___SIZE = 16; // %struct.sockaddr_in
  var $struct_sockaddr_in___FLATTENER = [0,2,4,8];
var $struct_sockaddr_in6___SIZE = 28; // %struct.sockaddr_in6
  var $struct_sockaddr_in6___FLATTENER = [0,2,4,8,24];
var $struct_sockaddr_ll___SIZE = 20; // %struct.sockaddr_ll
  var $struct_sockaddr_ll___FLATTENER = [0,2,4,8,10,11,12];
var $struct_sockaddr_nl___SIZE = 12; // %struct.sockaddr_nl
  var $struct_sockaddr_nl___FLATTENER = [0,2,4,8];
var $struct_sockaddr_storage___SIZE = 128; // %struct.sockaddr_storage
  
var $struct_sockaddr_tipc___SIZE = 16; // %struct.sockaddr_tipc
  var $struct_sockaddr_tipc___FLATTENER = [0,2,3,4];
var $struct_sockaddr_un___SIZE = 110; // %struct.sockaddr_un
  
var $struct_tipc_name___SIZE = 8; // %struct.tipc_name
  
var $struct_tipc_name_seq___SIZE = 12; // %struct.tipc_name_seq
  
var $union_anon___SIZE = 16; // %union.anon
  
var $union_sock_addr_t___SIZE = 128; // %union.sock_addr_t
  
var _sock_doc;
var _socket_error;
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

































































































  function _set_error() {
    ;
    var __label__;
  
    var $retval;
    var $0;
    var $1=HEAP[_socket_error]; //@line 543 "socketmodule.c"
    var $2=_PyErr_SetFromErrno($1); //@line 543 "socketmodule.c"
    $0=$2; //@line 543 "socketmodule.c"
    var $3=$0; //@line 543 "socketmodule.c"
    $retval=$3; //@line 543 "socketmodule.c"
    var $retval1=$retval; //@line 543 "socketmodule.c"
    ;
    return $retval1; //@line 543 "socketmodule.c"
  }
  

  function _set_gaierror($error) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i;
        var $0;
        var $error_addr;
        var $1;
        var $v;
        $error_addr=$error;
        var $2=$error_addr; //@line 573 "socketmodule.c"
        var $3=($2)==-11; //@line 573 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 573 "socketmodule.c"
      case 1: // $bb
        var $4=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $5=_PyErr_SetFromErrno($4); //@line 543 "socketmodule.c"
        $0=$5; //@line 543 "socketmodule.c"
        var $6=$0; //@line 543 "socketmodule.c"
        $retval_i=$6; //@line 543 "socketmodule.c"
        var $retval1_i=$retval_i; //@line 543 "socketmodule.c"
        $1=$retval1_i; //@line 574 "socketmodule.c"
        __label__ = 6; break; //@line 574 "socketmodule.c"
      case 2: // $bb1
        var $7=$error_addr; //@line 578 "socketmodule.c"
        var $8=_gai_strerror($7); //@line 578 "socketmodule.c"
        var $9=$error_addr; //@line 578 "socketmodule.c"
        var $10=_Py_BuildValue(__str1, $9, $8); //@line 578 "socketmodule.c"
        $v=$10; //@line 578 "socketmodule.c"
        var $11=$v; //@line 582 "socketmodule.c"
        var $12=($11)!=0; //@line 582 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 582 "socketmodule.c"
      case 3: // $bb2
        var $13=HEAP[_socket_gaierror]; //@line 583 "socketmodule.c"
        var $14=$v; //@line 583 "socketmodule.c"
        _PyErr_SetObject($13, $14); //@line 583 "socketmodule.c"
        var $15=$v; //@line 584 "socketmodule.c"
        var $16=$15; //@line 584 "socketmodule.c"
        var $17=HEAP[$16]; //@line 584 "socketmodule.c"
        var $18=($17) - 1; //@line 584 "socketmodule.c"
        var $19=$v; //@line 584 "socketmodule.c"
        var $20=$19; //@line 584 "socketmodule.c"
        HEAP[$20]=$18; //@line 584 "socketmodule.c"
        var $21=$v; //@line 584 "socketmodule.c"
        var $22=$21; //@line 584 "socketmodule.c"
        var $23=HEAP[$22]; //@line 584 "socketmodule.c"
        var $24=($23)==0; //@line 584 "socketmodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 584 "socketmodule.c"
      case 4: // $bb3
        var $25=$v; //@line 584 "socketmodule.c"
        var $26=$25+4; //@line 584 "socketmodule.c"
        var $27=HEAP[$26]; //@line 584 "socketmodule.c"
        var $28=$27+24; //@line 584 "socketmodule.c"
        var $29=HEAP[$28]; //@line 584 "socketmodule.c"
        var $30=$v; //@line 584 "socketmodule.c"
        FUNCTION_TABLE[$29]($30); //@line 584 "socketmodule.c"
        __label__ = 5; break; //@line 584 "socketmodule.c"
      case 5: // $bb4
        $1=0; //@line 587 "socketmodule.c"
        __label__ = 6; break; //@line 587 "socketmodule.c"
      case 6: // $bb5
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_select($s, $writing) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $writing_addr;
        var $retval;
        var $iftmp_4;
        var $0;
        var $n;
        var $pollfd=__stackBase__;
        var $timeout;
        $s_addr=$s;
        $writing_addr=$writing;
        var $1=$s_addr; //@line 673 "socketmodule.c"
        var $2=$1+28; //@line 673 "socketmodule.c"
        var $3=HEAP[$2]; //@line 673 "socketmodule.c"
        var $4=($3) <= 0; //@line 673 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 673 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 674 "socketmodule.c"
        __label__ = 12; break; //@line 674 "socketmodule.c"
      case 2: // $bb1
        var $5=$s_addr; //@line 677 "socketmodule.c"
        var $6=$5+8; //@line 677 "socketmodule.c"
        var $7=HEAP[$6]; //@line 677 "socketmodule.c"
        var $8=($7) < 0; //@line 677 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 677 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 678 "socketmodule.c"
        __label__ = 12; break; //@line 678 "socketmodule.c"
      case 4: // $bb3
        var $9=$s_addr; //@line 687 "socketmodule.c"
        var $10=$9+8; //@line 687 "socketmodule.c"
        var $11=HEAP[$10]; //@line 687 "socketmodule.c"
        var $12=$pollfd; //@line 687 "socketmodule.c"
        HEAP[$12]=$11; //@line 687 "socketmodule.c"
        var $13=$writing_addr; //@line 688 "socketmodule.c"
        var $14=($13)!=0; //@line 688 "socketmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "socketmodule.c"
      case 5: // $bb4
        $iftmp_4=4; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 6: // $bb5
        $iftmp_4=1; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 7: // $bb6
        var $15=$pollfd+4; //@line 688 "socketmodule.c"
        var $16=$iftmp_4; //@line 688 "socketmodule.c"
        HEAP[$15]=$16; //@line 688 "socketmodule.c"
        var $17=$s_addr; //@line 691 "socketmodule.c"
        var $18=$17+28; //@line 691 "socketmodule.c"
        var $19=HEAP[$18]; //@line 691 "socketmodule.c"
        var $20=($19) * 1000; //@line 691 "socketmodule.c"
        var $21=($20) + 0.5; //@line 691 "socketmodule.c"
        var $22=((($21))|0); //@line 691 "socketmodule.c"
        $timeout=$22; //@line 691 "socketmodule.c"
        var $23=$timeout; //@line 692 "socketmodule.c"
        var $24=_poll($pollfd, 1, $23); //@line 692 "socketmodule.c"
        $n=$24; //@line 692 "socketmodule.c"
        var $25=($24) < 0; //@line 712 "socketmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 712 "socketmodule.c"
      case 8: // $bb7
        $0=-1; //@line 713 "socketmodule.c"
        __label__ = 12; break; //@line 713 "socketmodule.c"
      case 9: // $bb8
        var $26=$n; //@line 714 "socketmodule.c"
        var $27=($26)==0; //@line 714 "socketmodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 714 "socketmodule.c"
      case 10: // $bb9
        $0=1; //@line 715 "socketmodule.c"
        __label__ = 12; break; //@line 715 "socketmodule.c"
      case 11: // $bb10
        $0=0; //@line 716 "socketmodule.c"
        __label__ = 12; break; //@line 716 "socketmodule.c"
      case 12: // $bb11
        var $28=$0; //@line 674 "socketmodule.c"
        $retval=$28; //@line 674 "socketmodule.c"
        var $retval12=$retval; //@line 674 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 674 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_sockobject($s, $fd, $family, $type, $proto) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $block_addr_i;
        var $delay_flag_i;
        var $s_addr;
        var $fd_addr;
        var $family_addr;
        var $type_addr;
        var $proto_addr;
        $s_addr=$s;
        $fd_addr=$fd;
        $family_addr=$family;
        $type_addr=$type;
        $proto_addr=$proto;
        var $0=$s_addr; //@line 730 "socketmodule.c"
        var $1=$0+8; //@line 730 "socketmodule.c"
        var $2=$fd_addr; //@line 730 "socketmodule.c"
        HEAP[$1]=$2; //@line 730 "socketmodule.c"
        var $3=$s_addr; //@line 731 "socketmodule.c"
        var $4=$3+12; //@line 731 "socketmodule.c"
        var $5=$family_addr; //@line 731 "socketmodule.c"
        HEAP[$4]=$5; //@line 731 "socketmodule.c"
        var $6=$s_addr; //@line 732 "socketmodule.c"
        var $7=$6+16; //@line 732 "socketmodule.c"
        var $8=$type_addr; //@line 732 "socketmodule.c"
        HEAP[$7]=$8; //@line 732 "socketmodule.c"
        var $9=$s_addr; //@line 733 "socketmodule.c"
        var $10=$9+20; //@line 733 "socketmodule.c"
        var $11=$proto_addr; //@line 733 "socketmodule.c"
        HEAP[$10]=$11; //@line 733 "socketmodule.c"
        var $12=HEAP[_defaulttimeout]; //@line 734 "socketmodule.c"
        var $13=$s_addr; //@line 734 "socketmodule.c"
        var $14=$13+28; //@line 734 "socketmodule.c"
        HEAP[$14]=$12; //@line 734 "socketmodule.c"
        var $15=$s_addr; //@line 736 "socketmodule.c"
        var $16=$15+24; //@line 736 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 736 "socketmodule.c"
        var $17=HEAP[_defaulttimeout]; //@line 738 "socketmodule.c"
        var $18=($17) >= 0; //@line 738 "socketmodule.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 738 "socketmodule.c"
      case 1: // $bb
        var $19=$s_addr; //@line 739 "socketmodule.c"
        $s_addr_i=$19;
        $block_addr_i=0;
        var $20=$s_addr_i; //@line 640 "socketmodule.c"
        var $21=$20+8; //@line 640 "socketmodule.c"
        var $22=HEAP[$21]; //@line 640 "socketmodule.c"
        var $23=_fcntl($22, 3, 0); //@line 640 "socketmodule.c"
        $delay_flag_i=$23; //@line 640 "socketmodule.c"
        var $24=$block_addr_i; //@line 641 "socketmodule.c"
        var $25=($24)!=0; //@line 641 "socketmodule.c"
        var $26=$delay_flag_i; //@line 642 "socketmodule.c"
        if ($25) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 641 "socketmodule.c"
      case 2: // $bb_i
        var $27=($26) & -2049; //@line 642 "socketmodule.c"
        $delay_flag_i=$27; //@line 642 "socketmodule.c"
        __label__ = 4; break; //@line 642 "socketmodule.c"
      case 3: // $bb1_i
        var $28=($26) | 2048; //@line 644 "socketmodule.c"
        $delay_flag_i=$28; //@line 644 "socketmodule.c"
        __label__ = 4; break; //@line 644 "socketmodule.c"
      case 4: // $internal_setblocking_exit
        var $29=$s_addr_i; //@line 645 "socketmodule.c"
        var $30=$29+8; //@line 645 "socketmodule.c"
        var $31=HEAP[$30]; //@line 645 "socketmodule.c"
        var $32=$delay_flag_i; //@line 645 "socketmodule.c"
        var $33=_fcntl($31, 4, $32); //@line 645 "socketmodule.c"
        __label__ = 5; break; //@line 739 "socketmodule.c"
      case 5: // $return
        ;
        return; //@line 745 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setipaddr($name, $addr_ret, $addr_ret_size, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $addr_ret_addr;
        var $addr_ret_size_addr;
        var $af_addr;
        var $retval;
        var $0;
        var $hints=__stackBase__;
        var $res=__stackBase__+32;
        var $error;
        var $d1=__stackBase__+36;
        var $d2=__stackBase__+40;
        var $d3=__stackBase__+44;
        var $d4=__stackBase__+48;
        var $ch=__stackBase__+52;
        var $siz;
        var $sin;
        var $sin28;
        $name_addr=$name;
        $addr_ret_addr=$addr_ret;
        $addr_ret_size_addr=$addr_ret_size;
        $af_addr=$af;
        var $1=$addr_ret_addr; //@line 786 "socketmodule.c"
        var $2=$1; //@line 786 "socketmodule.c"
        _llvm_memset_p0i8_i32($2, 0, 16, 1, 0); //@line 786 "socketmodule.c"
        var $3=$name_addr; //@line 787 "socketmodule.c"
        var $4=$3; //@line 787 "socketmodule.c"
        var $5=HEAP[$4]; //@line 787 "socketmodule.c"
        var $6=($5)==0; //@line 787 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 787 "socketmodule.c"
      case 1: // $bb
        var $hints1=$hints; //@line 789 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints1, 0, 32, 1, 0); //@line 789 "socketmodule.c"
        var $7=$hints+4; //@line 790 "socketmodule.c"
        var $8=$af_addr; //@line 790 "socketmodule.c"
        HEAP[$7]=$8; //@line 790 "socketmodule.c"
        var $9=$hints+8; //@line 791 "socketmodule.c"
        HEAP[$9]=2; //@line 791 "socketmodule.c"
        var $10=$hints; //@line 792 "socketmodule.c"
        HEAP[$10]=1; //@line 792 "socketmodule.c"
        var $11=_getaddrinfo(0, __str2, $hints, $res); //@line 795 "socketmodule.c"
        $error=$11; //@line 795 "socketmodule.c"
        var $12=$error; //@line 802 "socketmodule.c"
        var $13=($12)!=0; //@line 802 "socketmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 802 "socketmodule.c"
      case 2: // $bb2
        var $14=$error; //@line 803 "socketmodule.c"
        _set_gaierror($14); //@line 803 "socketmodule.c"
        $0=-1; //@line 804 "socketmodule.c"
        __label__ = 30; break; //@line 804 "socketmodule.c"
      case 3: // $bb3
        var $15=HEAP[$res]; //@line 806 "socketmodule.c"
        var $16=$15+4; //@line 806 "socketmodule.c"
        var $17=HEAP[$16]; //@line 806 "socketmodule.c"
        if ($17 == 2) {
          __label__ = 4; break;
        }
        else if ($17 == 10) {
          __label__ = 5; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 4: // $bb4
        $siz=4; //@line 808 "socketmodule.c"
        __label__ = 7; break; //@line 808 "socketmodule.c"
      case 5: // $bb5
        $siz=16; //@line 812 "socketmodule.c"
        __label__ = 7; break; //@line 812 "socketmodule.c"
      case 6: // $bb6
        var $18=HEAP[$res]; //@line 816 "socketmodule.c"
        _freeaddrinfo($18); //@line 816 "socketmodule.c"
        var $19=HEAP[_socket_error]; //@line 817 "socketmodule.c"
        _PyErr_SetString($19, __str3); //@line 817 "socketmodule.c"
        $0=-1; //@line 819 "socketmodule.c"
        __label__ = 30; break; //@line 819 "socketmodule.c"
      case 7: // $bb7
        var $20=HEAP[$res]; //@line 821 "socketmodule.c"
        var $21=$20+28; //@line 821 "socketmodule.c"
        var $22=HEAP[$21]; //@line 821 "socketmodule.c"
        var $23=($22)!=0; //@line 821 "socketmodule.c"
        var $24=HEAP[$res]; //@line 822 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 821 "socketmodule.c"
      case 8: // $bb8
        _freeaddrinfo($24); //@line 822 "socketmodule.c"
        var $25=HEAP[_socket_error]; //@line 823 "socketmodule.c"
        _PyErr_SetString($25, __str4); //@line 823 "socketmodule.c"
        $0=-1; //@line 825 "socketmodule.c"
        __label__ = 30; break; //@line 825 "socketmodule.c"
      case 9: // $bb9
        var $26=$24+16; //@line 827 "socketmodule.c"
        var $27=HEAP[$26]; //@line 827 "socketmodule.c"
        var $28=$addr_ret_size_addr; //@line 827 "socketmodule.c"
        var $29=($27) < ($28); //@line 827 "socketmodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 827 "socketmodule.c"
      case 10: // $bb10
        var $30=HEAP[$res]; //@line 828 "socketmodule.c"
        var $31=$30+16; //@line 828 "socketmodule.c"
        var $32=HEAP[$31]; //@line 828 "socketmodule.c"
        $addr_ret_size_addr=$32; //@line 828 "socketmodule.c"
        __label__ = 11; break; //@line 828 "socketmodule.c"
      case 11: // $bb11
        var $33=HEAP[$res]; //@line 829 "socketmodule.c"
        var $34=$33+20; //@line 829 "socketmodule.c"
        var $35=HEAP[$34]; //@line 829 "socketmodule.c"
        var $36=$addr_ret_addr; //@line 829 "socketmodule.c"
        var $37=$addr_ret_size_addr; //@line 829 "socketmodule.c"
        var $38=$36; //@line 829 "socketmodule.c"
        var $39=$35; //@line 829 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($38, $39, $37, 1, 0); //@line 829 "socketmodule.c"
        var $40=HEAP[$res]; //@line 830 "socketmodule.c"
        _freeaddrinfo($40); //@line 830 "socketmodule.c"
        var $41=$siz; //@line 831 "socketmodule.c"
        $0=$41; //@line 831 "socketmodule.c"
        __label__ = 30; break; //@line 831 "socketmodule.c"
      case 12: // $bb12
        var $42=$name_addr; //@line 833 "socketmodule.c"
        var $43=$42; //@line 833 "socketmodule.c"
        var $44=HEAP[$43]; //@line 833 "socketmodule.c"
        var $45=($44)==60; //@line 833 "socketmodule.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 833 "socketmodule.c"
      case 13: // $bb13
        var $46=$name_addr; //@line 833 "socketmodule.c"
        var $47=_strcmp($46, __str5); //@line 833 "socketmodule.c"
        var $48=($47)==0; //@line 833 "socketmodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 833 "socketmodule.c"
      case 14: // $bb14
        var $49=$af_addr; //@line 835 "socketmodule.c"
        var $50=($49)!=2; //@line 835 "socketmodule.c"
        var $51=$af_addr; //@line 835 "socketmodule.c"
        var $52=($51)!=0; //@line 835 "socketmodule.c"
        var $or_cond=($50) & ($52);
        if ($or_cond) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 835 "socketmodule.c"
      case 15: // $bb16
        var $53=HEAP[_socket_error]; //@line 836 "socketmodule.c"
        _PyErr_SetString($53, __str6); //@line 836 "socketmodule.c"
        $0=-1; //@line 838 "socketmodule.c"
        __label__ = 30; break; //@line 838 "socketmodule.c"
      case 16: // $bb17
        var $54=$addr_ret_addr; //@line 840 "socketmodule.c"
        var $55=$54; //@line 840 "socketmodule.c"
        $sin=$55; //@line 840 "socketmodule.c"
        var $56=$sin; //@line 841 "socketmodule.c"
        var $57=$56; //@line 841 "socketmodule.c"
        _llvm_memset_p0i8_i32($57, 0, 16, 1, 0); //@line 841 "socketmodule.c"
        var $58=$sin; //@line 842 "socketmodule.c"
        var $59=$58; //@line 842 "socketmodule.c"
        HEAP[$59]=2; //@line 842 "socketmodule.c"
        var $60=$sin; //@line 846 "socketmodule.c"
        var $61=$60+4; //@line 846 "socketmodule.c"
        var $62=$61; //@line 846 "socketmodule.c"
        HEAP[$62]=-1; //@line 846 "socketmodule.c"
        $0=4; //@line 847 "socketmodule.c"
        __label__ = 30; break; //@line 847 "socketmodule.c"
      case 17: // $bb18
        var $63=$name_addr; //@line 849 "socketmodule.c"
        var $64=_sscanf($63, __str7, $d1, $d2, $d3, $d4, $ch); //@line 849 "socketmodule.c"
        var $65=($64)==4; //@line 849 "socketmodule.c"
        var $66=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $67=($66) >= 0; //@line 849 "socketmodule.c"
        var $or_cond3=($65) & ($67);
        var $68=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $69=($68) <= 255; //@line 849 "socketmodule.c"
        var $or_cond5=($or_cond3) & ($69);
        if ($or_cond5) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 18: // $bb21
        var $70=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $71=($70) >= 0; //@line 849 "socketmodule.c"
        var $72=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $73=($72) <= 255; //@line 849 "socketmodule.c"
        var $or_cond7=($71) & ($73);
        if ($or_cond7) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 19: // $bb23
        var $74=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $75=($74) >= 0; //@line 849 "socketmodule.c"
        var $76=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $77=($76) <= 255; //@line 849 "socketmodule.c"
        var $or_cond9=($75) & ($77);
        if ($or_cond9) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 20: // $bb25
        var $78=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $79=($78) >= 0; //@line 849 "socketmodule.c"
        var $80=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $81=($80) <= 255; //@line 849 "socketmodule.c"
        var $or_cond11=($79) & ($81);
        if ($or_cond11) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 21: // $bb27
        var $82=$addr_ret_addr; //@line 853 "socketmodule.c"
        var $83=$82; //@line 853 "socketmodule.c"
        $sin28=$83; //@line 853 "socketmodule.c"
        var $84=HEAP[$d1]; //@line 854 "socketmodule.c"
        var $85=($84) << 24; //@line 854 "socketmodule.c"
        var $86=HEAP[$d2]; //@line 854 "socketmodule.c"
        var $87=($86) << 16; //@line 854 "socketmodule.c"
        var $88=HEAP[$d3]; //@line 854 "socketmodule.c"
        var $89=($88) << 8; //@line 854 "socketmodule.c"
        var $90=HEAP[$d4]; //@line 854 "socketmodule.c"
        var $91=($87) | ($85); //@line 854 "socketmodule.c"
        var $92=($91) | ($90); //@line 854 "socketmodule.c"
        var $93=($92) | ($89); //@line 854 "socketmodule.c"
        var $94=_htonl($93); //@line 854 "socketmodule.c"
        var $95=$sin28; //@line 854 "socketmodule.c"
        var $96=$95+4; //@line 854 "socketmodule.c"
        var $97=$96; //@line 854 "socketmodule.c"
        HEAP[$97]=$94; //@line 854 "socketmodule.c"
        var $98=$sin28; //@line 857 "socketmodule.c"
        var $99=$98; //@line 857 "socketmodule.c"
        HEAP[$99]=2; //@line 857 "socketmodule.c"
        $0=4; //@line 861 "socketmodule.c"
        __label__ = 30; break; //@line 861 "socketmodule.c"
      case 22: // $bb29
        var $hints30=$hints; //@line 863 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints30, 0, 32, 1, 0); //@line 863 "socketmodule.c"
        var $100=$hints+4; //@line 864 "socketmodule.c"
        var $101=$af_addr; //@line 864 "socketmodule.c"
        HEAP[$100]=$101; //@line 864 "socketmodule.c"
        var $102=$name_addr; //@line 867 "socketmodule.c"
        var $103=_getaddrinfo($102, 0, $hints, $res); //@line 867 "socketmodule.c"
        $error=$103; //@line 867 "socketmodule.c"
        var $104=($103)!=0; //@line 878 "socketmodule.c"
        if ($104) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 878 "socketmodule.c"
      case 23: // $bb31
        var $105=$error; //@line 879 "socketmodule.c"
        _set_gaierror($105); //@line 879 "socketmodule.c"
        $0=-1; //@line 880 "socketmodule.c"
        __label__ = 30; break; //@line 880 "socketmodule.c"
      case 24: // $bb32
        var $106=HEAP[$res]; //@line 882 "socketmodule.c"
        var $107=$106+16; //@line 882 "socketmodule.c"
        var $108=HEAP[$107]; //@line 882 "socketmodule.c"
        var $109=$addr_ret_size_addr; //@line 882 "socketmodule.c"
        var $110=($108) < ($109); //@line 882 "socketmodule.c"
        if ($110) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 882 "socketmodule.c"
      case 25: // $bb33
        var $111=HEAP[$res]; //@line 883 "socketmodule.c"
        var $112=$111+16; //@line 883 "socketmodule.c"
        var $113=HEAP[$112]; //@line 883 "socketmodule.c"
        $addr_ret_size_addr=$113; //@line 883 "socketmodule.c"
        __label__ = 26; break; //@line 883 "socketmodule.c"
      case 26: // $bb34
        var $114=HEAP[$res]; //@line 884 "socketmodule.c"
        var $115=$114+20; //@line 884 "socketmodule.c"
        var $116=HEAP[$115]; //@line 884 "socketmodule.c"
        var $117=$addr_ret_addr; //@line 884 "socketmodule.c"
        var $118=$addr_ret_size_addr; //@line 884 "socketmodule.c"
        var $119=$117; //@line 884 "socketmodule.c"
        var $120=$116; //@line 884 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($119, $120, $118, 1, 0); //@line 884 "socketmodule.c"
        var $121=HEAP[$res]; //@line 885 "socketmodule.c"
        _freeaddrinfo($121); //@line 885 "socketmodule.c"
        var $122=$addr_ret_addr; //@line 886 "socketmodule.c"
        var $123=$122; //@line 886 "socketmodule.c"
        var $124=HEAP[$123]; //@line 886 "socketmodule.c"
        var $125=($124); //@line 886 "socketmodule.c"
        if ($125 == 2) {
          __label__ = 27; break;
        }
        else if ($125 == 10) {
          __label__ = 28; break;
        }
        else {
        __label__ = 29; break;
        }
        
      case 27: // $bb35
        $0=4; //@line 888 "socketmodule.c"
        __label__ = 30; break; //@line 888 "socketmodule.c"
      case 28: // $bb36
        $0=16; //@line 891 "socketmodule.c"
        __label__ = 30; break; //@line 891 "socketmodule.c"
      case 29: // $bb37
        var $126=HEAP[_socket_error]; //@line 894 "socketmodule.c"
        _PyErr_SetString($126, __str8); //@line 894 "socketmodule.c"
        $0=-1; //@line 895 "socketmodule.c"
        __label__ = 30; break; //@line 895 "socketmodule.c"
      case 30: // $bb38
        var $127=$0; //@line 804 "socketmodule.c"
        $retval=$127; //@line 804 "socketmodule.c"
        var $retval39=$retval; //@line 804 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval39; //@line 804 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makeipaddr($addr, $addrlen) {
    var __stackBase__  = STACKTOP; STACKTOP += 1025; _memset(__stackBase__, 0, 1025);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $addr_addr;
        var $addrlen_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $error;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        var $1=$addrlen_addr; //@line 910 "socketmodule.c"
        var $2=$addr_addr; //@line 910 "socketmodule.c"
        var $buf1=$buf; //@line 910 "socketmodule.c"
        var $3=_getnameinfo($2, $1, $buf1, 1025, 0, 0, 1); //@line 910 "socketmodule.c"
        $error=$3; //@line 910 "socketmodule.c"
        var $4=$error; //@line 912 "socketmodule.c"
        var $5=($4)!=0; //@line 912 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 912 "socketmodule.c"
      case 1: // $bb
        var $6=$error; //@line 913 "socketmodule.c"
        _set_gaierror($6); //@line 913 "socketmodule.c"
        $0=0; //@line 914 "socketmodule.c"
        __label__ = 3; break; //@line 914 "socketmodule.c"
      case 2: // $bb2
        var $buf3=$buf; //@line 916 "socketmodule.c"
        var $7=_PyString_FromString($buf3); //@line 916 "socketmodule.c"
        $0=$7; //@line 916 "socketmodule.c"
        __label__ = 3; break; //@line 916 "socketmodule.c"
      case 3: // $bb4
        var $8=$0; //@line 914 "socketmodule.c"
        $retval=$8; //@line 914 "socketmodule.c"
        var $retval5=$retval; //@line 914 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 914 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makesockaddr($sockfd, $addr, $addrlen, $proto) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $sockfd_addr;
        var $addr_addr;
        var $addrlen_addr;
        var $proto_addr;
        var $retval;
        var $0;
        var $a;
        var $addrobj;
        var $ret;
        var $a7;
        var $a11;
        var $a13;
        var $addrobj14;
        var $ret15;
        var $a20;
        var $ifname;
        var $ifr=__stackBase__;
        var $a25;
        $sockfd_addr=$sockfd;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        $proto_addr=$proto;
        var $1=$addrlen_addr; //@line 974 "socketmodule.c"
        var $2=($1)==0; //@line 974 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 974 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 976 "socketmodule.c"
        var $4=($3) + 1; //@line 976 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 976 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 977 "socketmodule.c"
        __label__ = 27; break; //@line 977 "socketmodule.c"
      case 2: // $bb1
        var $5=$addr_addr; //@line 985 "socketmodule.c"
        var $6=$5; //@line 985 "socketmodule.c"
        var $7=HEAP[$6]; //@line 985 "socketmodule.c"
        var $8=($7); //@line 985 "socketmodule.c"
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
        var $9=$addr_addr; //@line 990 "socketmodule.c"
        var $10=_makeipaddr($9, 16); //@line 990 "socketmodule.c"
        $addrobj=$10; //@line 990 "socketmodule.c"
        $ret=0; //@line 991 "socketmodule.c"
        var $11=$addrobj; //@line 992 "socketmodule.c"
        var $12=($11)!=0; //@line 992 "socketmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 992 "socketmodule.c"
      case 4: // $bb3
        var $13=$addr_addr; //@line 993 "socketmodule.c"
        var $14=$13; //@line 993 "socketmodule.c"
        $a=$14; //@line 993 "socketmodule.c"
        var $15=$a; //@line 994 "socketmodule.c"
        var $16=$15+2; //@line 994 "socketmodule.c"
        var $17=HEAP[$16]; //@line 994 "socketmodule.c"
        var $18=($17); //@line 994 "socketmodule.c"
        var $19=((($18)) & 65535); //@line 994 "socketmodule.c"
        var $20=_ntohs($19); //@line 994 "socketmodule.c"
        var $21=($20); //@line 994 "socketmodule.c"
        var $22=$addrobj; //@line 994 "socketmodule.c"
        var $23=_Py_BuildValue(__str9, $22, $21); //@line 994 "socketmodule.c"
        $ret=$23; //@line 994 "socketmodule.c"
        var $24=$addrobj; //@line 995 "socketmodule.c"
        var $25=$24; //@line 995 "socketmodule.c"
        var $26=HEAP[$25]; //@line 995 "socketmodule.c"
        var $27=($26) - 1; //@line 995 "socketmodule.c"
        var $28=$addrobj; //@line 995 "socketmodule.c"
        var $29=$28; //@line 995 "socketmodule.c"
        HEAP[$29]=$27; //@line 995 "socketmodule.c"
        var $30=$addrobj; //@line 995 "socketmodule.c"
        var $31=$30; //@line 995 "socketmodule.c"
        var $32=HEAP[$31]; //@line 995 "socketmodule.c"
        var $33=($32)==0; //@line 995 "socketmodule.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 995 "socketmodule.c"
      case 5: // $bb4
        var $34=$addrobj; //@line 995 "socketmodule.c"
        var $35=$34+4; //@line 995 "socketmodule.c"
        var $36=HEAP[$35]; //@line 995 "socketmodule.c"
        var $37=$36+24; //@line 995 "socketmodule.c"
        var $38=HEAP[$37]; //@line 995 "socketmodule.c"
        var $39=$addrobj; //@line 995 "socketmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 995 "socketmodule.c"
        __label__ = 6; break; //@line 995 "socketmodule.c"
      case 6: // $bb5
        var $40=$ret; //@line 997 "socketmodule.c"
        $0=$40; //@line 997 "socketmodule.c"
        __label__ = 27; break; //@line 997 "socketmodule.c"
      case 7: // $bb6
        var $41=$addr_addr; //@line 1003 "socketmodule.c"
        var $42=$41; //@line 1003 "socketmodule.c"
        $a7=$42; //@line 1003 "socketmodule.c"
        var $43=$a7; //@line 1005 "socketmodule.c"
        var $44=$43+2; //@line 1005 "socketmodule.c"
        var $45=$44; //@line 1005 "socketmodule.c"
        var $46=HEAP[$45]; //@line 1005 "socketmodule.c"
        var $47=($46)==0; //@line 1005 "socketmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1005 "socketmodule.c"
      case 8: // $bb8
        var $48=$addrlen_addr; //@line 1006 "socketmodule.c"
        var $49=($48) - 2; //@line 1006 "socketmodule.c"
        $addrlen_addr=$49; //@line 1006 "socketmodule.c"
        var $50=$a7; //@line 1007 "socketmodule.c"
        var $51=$50+2; //@line 1007 "socketmodule.c"
        var $52=$51; //@line 1007 "socketmodule.c"
        var $53=$addrlen_addr; //@line 1007 "socketmodule.c"
        var $54=_PyString_FromStringAndSize($52, $53); //@line 1007 "socketmodule.c"
        $0=$54; //@line 1007 "socketmodule.c"
        __label__ = 27; break; //@line 1007 "socketmodule.c"
      case 9: // $bb9
        var $55=$a7; //@line 1014 "socketmodule.c"
        var $56=$55+2; //@line 1014 "socketmodule.c"
        var $57=$56; //@line 1014 "socketmodule.c"
        var $58=_PyString_FromString($57); //@line 1014 "socketmodule.c"
        $0=$58; //@line 1014 "socketmodule.c"
        __label__ = 27; break; //@line 1014 "socketmodule.c"
      case 10: // $bb10
        var $59=$addr_addr; //@line 1022 "socketmodule.c"
        var $60=$59; //@line 1022 "socketmodule.c"
        $a11=$60; //@line 1022 "socketmodule.c"
        var $61=$a11; //@line 1023 "socketmodule.c"
        var $62=$61+8; //@line 1023 "socketmodule.c"
        var $63=HEAP[$62]; //@line 1023 "socketmodule.c"
        var $64=$a11; //@line 1023 "socketmodule.c"
        var $65=$64+4; //@line 1023 "socketmodule.c"
        var $66=HEAP[$65]; //@line 1023 "socketmodule.c"
        var $67=_Py_BuildValue(__str10, $66, $63); //@line 1023 "socketmodule.c"
        $0=$67; //@line 1023 "socketmodule.c"
        __label__ = 27; break; //@line 1023 "socketmodule.c"
      case 11: // $bb12
        var $68=$addr_addr; //@line 1031 "socketmodule.c"
        var $69=_makeipaddr($68, 28); //@line 1031 "socketmodule.c"
        $addrobj14=$69; //@line 1031 "socketmodule.c"
        $ret15=0; //@line 1032 "socketmodule.c"
        var $70=$addrobj14; //@line 1033 "socketmodule.c"
        var $71=($70)!=0; //@line 1033 "socketmodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1033 "socketmodule.c"
      case 12: // $bb16
        var $72=$addr_addr; //@line 1034 "socketmodule.c"
        var $73=$72; //@line 1034 "socketmodule.c"
        $a13=$73; //@line 1034 "socketmodule.c"
        var $74=$a13; //@line 1035 "socketmodule.c"
        var $75=$74+24; //@line 1035 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1035 "socketmodule.c"
        var $77=$a13; //@line 1035 "socketmodule.c"
        var $78=$77+4; //@line 1035 "socketmodule.c"
        var $79=HEAP[$78]; //@line 1035 "socketmodule.c"
        var $80=$a13; //@line 1035 "socketmodule.c"
        var $81=$80+2; //@line 1035 "socketmodule.c"
        var $82=HEAP[$81]; //@line 1035 "socketmodule.c"
        var $83=($82); //@line 1035 "socketmodule.c"
        var $84=((($83)) & 65535); //@line 1035 "socketmodule.c"
        var $85=_ntohs($84); //@line 1035 "socketmodule.c"
        var $86=($85); //@line 1035 "socketmodule.c"
        var $87=$addrobj14; //@line 1035 "socketmodule.c"
        var $88=_Py_BuildValue(__str11, $87, $86, $79, $76); //@line 1035 "socketmodule.c"
        $ret15=$88; //@line 1035 "socketmodule.c"
        var $89=$addrobj14; //@line 1040 "socketmodule.c"
        var $90=$89; //@line 1040 "socketmodule.c"
        var $91=HEAP[$90]; //@line 1040 "socketmodule.c"
        var $92=($91) - 1; //@line 1040 "socketmodule.c"
        var $93=$addrobj14; //@line 1040 "socketmodule.c"
        var $94=$93; //@line 1040 "socketmodule.c"
        HEAP[$94]=$92; //@line 1040 "socketmodule.c"
        var $95=$addrobj14; //@line 1040 "socketmodule.c"
        var $96=$95; //@line 1040 "socketmodule.c"
        var $97=HEAP[$96]; //@line 1040 "socketmodule.c"
        var $98=($97)==0; //@line 1040 "socketmodule.c"
        if ($98) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1040 "socketmodule.c"
      case 13: // $bb17
        var $99=$addrobj14; //@line 1040 "socketmodule.c"
        var $100=$99+4; //@line 1040 "socketmodule.c"
        var $101=HEAP[$100]; //@line 1040 "socketmodule.c"
        var $102=$101+24; //@line 1040 "socketmodule.c"
        var $103=HEAP[$102]; //@line 1040 "socketmodule.c"
        var $104=$addrobj14; //@line 1040 "socketmodule.c"
        FUNCTION_TABLE[$103]($104); //@line 1040 "socketmodule.c"
        __label__ = 14; break; //@line 1040 "socketmodule.c"
      case 14: // $bb18
        var $105=$ret15; //@line 1042 "socketmodule.c"
        $0=$105; //@line 1042 "socketmodule.c"
        __label__ = 27; break; //@line 1042 "socketmodule.c"
      case 15: // $bb19
        var $106=$addr_addr; //@line 1108 "socketmodule.c"
        var $107=$106; //@line 1108 "socketmodule.c"
        $a20=$107; //@line 1108 "socketmodule.c"
        $ifname=__str12; //@line 1109 "socketmodule.c"
        var $108=$a20; //@line 1112 "socketmodule.c"
        var $109=$108+4; //@line 1112 "socketmodule.c"
        var $110=HEAP[$109]; //@line 1112 "socketmodule.c"
        var $111=($110)!=0; //@line 1112 "socketmodule.c"
        if ($111) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1112 "socketmodule.c"
      case 16: // $bb21
        var $112=$a20; //@line 1113 "socketmodule.c"
        var $113=$112+4; //@line 1113 "socketmodule.c"
        var $114=HEAP[$113]; //@line 1113 "socketmodule.c"
        var $115=$ifr+16; //@line 1113 "socketmodule.c"
        var $116=$115; //@line 1113 "socketmodule.c"
        var $117=$116; //@line 1113 "socketmodule.c"
        HEAP[$117]=$114; //@line 1113 "socketmodule.c"
        var $118=$sockfd_addr; //@line 1114 "socketmodule.c"
        var $119=_ioctl($118, 35088, $ifr); //@line 1114 "socketmodule.c"
        var $120=($119)==0; //@line 1114 "socketmodule.c"
        if ($120) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1114 "socketmodule.c"
      case 17: // $bb22
        var $121=$ifr; //@line 1115 "socketmodule.c"
        var $122=$121; //@line 1115 "socketmodule.c"
        var $123=$122; //@line 1115 "socketmodule.c"
        $ifname=$123; //@line 1115 "socketmodule.c"
        __label__ = 18; break; //@line 1115 "socketmodule.c"
      case 18: // $bb23
        var $124=$a20; //@line 1117 "socketmodule.c"
        var $125=$124+11; //@line 1117 "socketmodule.c"
        var $126=HEAP[$125]; //@line 1117 "socketmodule.c"
        var $127=($126); //@line 1117 "socketmodule.c"
        var $128=$a20; //@line 1117 "socketmodule.c"
        var $129=$128+12; //@line 1117 "socketmodule.c"
        var $130=$129; //@line 1117 "socketmodule.c"
        var $131=$a20; //@line 1117 "socketmodule.c"
        var $132=$131+8; //@line 1117 "socketmodule.c"
        var $133=HEAP[$132]; //@line 1117 "socketmodule.c"
        var $134=($133); //@line 1117 "socketmodule.c"
        var $135=$a20; //@line 1117 "socketmodule.c"
        var $136=$135+10; //@line 1117 "socketmodule.c"
        var $137=HEAP[$136]; //@line 1117 "socketmodule.c"
        var $138=($137); //@line 1117 "socketmodule.c"
        var $139=$a20; //@line 1117 "socketmodule.c"
        var $140=$139+2; //@line 1117 "socketmodule.c"
        var $141=HEAP[$140]; //@line 1117 "socketmodule.c"
        var $142=($141); //@line 1117 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1117 "socketmodule.c"
        var $144=_ntohs($143); //@line 1117 "socketmodule.c"
        var $145=($144); //@line 1117 "socketmodule.c"
        var $146=$ifname; //@line 1117 "socketmodule.c"
        var $147=_Py_BuildValue(__str13, $146, $145, $138, $134, $130, $127); //@line 1117 "socketmodule.c"
        $0=$147; //@line 1117 "socketmodule.c"
        __label__ = 27; break; //@line 1117 "socketmodule.c"
      case 19: // $bb24
        var $148=$addr_addr; //@line 1130 "socketmodule.c"
        var $149=$148; //@line 1130 "socketmodule.c"
        $a25=$149; //@line 1130 "socketmodule.c"
        var $150=$a25; //@line 1131 "socketmodule.c"
        var $151=$150+2; //@line 1131 "socketmodule.c"
        var $152=HEAP[$151]; //@line 1131 "socketmodule.c"
        var $153=($152)==1; //@line 1131 "socketmodule.c"
        var $154=$a25; //@line 1132 "socketmodule.c"
        if ($153) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1131 "socketmodule.c"
      case 20: // $bb26
        var $155=$154+3; //@line 1132 "socketmodule.c"
        var $156=HEAP[$155]; //@line 1132 "socketmodule.c"
        var $157=($156); //@line 1132 "socketmodule.c"
        var $158=$a25; //@line 1132 "socketmodule.c"
        var $159=$158+4; //@line 1132 "socketmodule.c"
        var $160=$159; //@line 1132 "socketmodule.c"
        var $161=$160+8; //@line 1132 "socketmodule.c"
        var $162=HEAP[$161]; //@line 1132 "socketmodule.c"
        var $163=$a25; //@line 1132 "socketmodule.c"
        var $164=$163+4; //@line 1132 "socketmodule.c"
        var $165=$164; //@line 1132 "socketmodule.c"
        var $166=$165+4; //@line 1132 "socketmodule.c"
        var $167=HEAP[$166]; //@line 1132 "socketmodule.c"
        var $168=$a25; //@line 1132 "socketmodule.c"
        var $169=$168+4; //@line 1132 "socketmodule.c"
        var $170=$169; //@line 1132 "socketmodule.c"
        var $171=$170; //@line 1132 "socketmodule.c"
        var $172=HEAP[$171]; //@line 1132 "socketmodule.c"
        var $173=$a25; //@line 1132 "socketmodule.c"
        var $174=$173+2; //@line 1132 "socketmodule.c"
        var $175=HEAP[$174]; //@line 1132 "socketmodule.c"
        var $176=($175); //@line 1132 "socketmodule.c"
        var $177=_Py_BuildValue(__str14, $176, $172, $167, $162, $157); //@line 1132 "socketmodule.c"
        $0=$177; //@line 1132 "socketmodule.c"
        __label__ = 27; break; //@line 1132 "socketmodule.c"
      case 21: // $bb27
        var $178=$154+2; //@line 1138 "socketmodule.c"
        var $179=HEAP[$178]; //@line 1138 "socketmodule.c"
        var $180=($179)==2; //@line 1138 "socketmodule.c"
        var $181=$a25; //@line 1139 "socketmodule.c"
        if ($180) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1138 "socketmodule.c"
      case 22: // $bb28
        var $182=$181+3; //@line 1139 "socketmodule.c"
        var $183=HEAP[$182]; //@line 1139 "socketmodule.c"
        var $184=($183); //@line 1139 "socketmodule.c"
        var $185=$a25; //@line 1139 "socketmodule.c"
        var $186=$185+4; //@line 1139 "socketmodule.c"
        var $187=$186; //@line 1139 "socketmodule.c"
        var $188=$187; //@line 1139 "socketmodule.c"
        var $189=$188; //@line 1139 "socketmodule.c"
        var $190=$189+4; //@line 1139 "socketmodule.c"
        var $191=HEAP[$190]; //@line 1139 "socketmodule.c"
        var $192=$a25; //@line 1139 "socketmodule.c"
        var $193=$192+4; //@line 1139 "socketmodule.c"
        var $194=$193; //@line 1139 "socketmodule.c"
        var $195=$194; //@line 1139 "socketmodule.c"
        var $196=$195; //@line 1139 "socketmodule.c"
        var $197=$196+4; //@line 1139 "socketmodule.c"
        var $198=HEAP[$197]; //@line 1139 "socketmodule.c"
        var $199=$a25; //@line 1139 "socketmodule.c"
        var $200=$199+4; //@line 1139 "socketmodule.c"
        var $201=$200; //@line 1139 "socketmodule.c"
        var $202=$201; //@line 1139 "socketmodule.c"
        var $203=$202; //@line 1139 "socketmodule.c"
        var $204=$203; //@line 1139 "socketmodule.c"
        var $205=HEAP[$204]; //@line 1139 "socketmodule.c"
        var $206=$a25; //@line 1139 "socketmodule.c"
        var $207=$206+2; //@line 1139 "socketmodule.c"
        var $208=HEAP[$207]; //@line 1139 "socketmodule.c"
        var $209=($208); //@line 1139 "socketmodule.c"
        var $210=_Py_BuildValue(__str14, $209, $205, $198, $191, $184); //@line 1139 "socketmodule.c"
        $0=$210; //@line 1139 "socketmodule.c"
        __label__ = 27; break; //@line 1139 "socketmodule.c"
      case 23: // $bb29
        var $211=$181+2; //@line 1145 "socketmodule.c"
        var $212=HEAP[$211]; //@line 1145 "socketmodule.c"
        var $213=($212)==3; //@line 1145 "socketmodule.c"
        if ($213) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1145 "socketmodule.c"
      case 24: // $bb30
        var $214=$a25; //@line 1146 "socketmodule.c"
        var $215=$214+3; //@line 1146 "socketmodule.c"
        var $216=HEAP[$215]; //@line 1146 "socketmodule.c"
        var $217=($216); //@line 1146 "socketmodule.c"
        var $218=$a25; //@line 1146 "socketmodule.c"
        var $219=$218+4; //@line 1146 "socketmodule.c"
        var $220=$219; //@line 1146 "socketmodule.c"
        var $221=$220; //@line 1146 "socketmodule.c"
        var $222=$221; //@line 1146 "socketmodule.c"
        var $223=HEAP[$222]; //@line 1146 "socketmodule.c"
        var $224=$a25; //@line 1146 "socketmodule.c"
        var $225=$224+4; //@line 1146 "socketmodule.c"
        var $226=$225; //@line 1146 "socketmodule.c"
        var $227=$226; //@line 1146 "socketmodule.c"
        var $228=$227+4; //@line 1146 "socketmodule.c"
        var $229=HEAP[$228]; //@line 1146 "socketmodule.c"
        var $230=$a25; //@line 1146 "socketmodule.c"
        var $231=$230+2; //@line 1146 "socketmodule.c"
        var $232=HEAP[$231]; //@line 1146 "socketmodule.c"
        var $233=($232); //@line 1146 "socketmodule.c"
        var $234=_Py_BuildValue(__str14, $233, $229, $223, 0, $217); //@line 1146 "socketmodule.c"
        $0=$234; //@line 1146 "socketmodule.c"
        __label__ = 27; break; //@line 1146 "socketmodule.c"
      case 25: // $bb31
        var $235=HEAP[_PyExc_ValueError]; //@line 1153 "socketmodule.c"
        _PyErr_SetString($235, __str15); //@line 1153 "socketmodule.c"
        $0=0; //@line 1155 "socketmodule.c"
        __label__ = 27; break; //@line 1155 "socketmodule.c"
      case 26: // $bb32
        var $236=$addr_addr; //@line 1165 "socketmodule.c"
        var $237=$236+2; //@line 1165 "socketmodule.c"
        var $238=$237; //@line 1165 "socketmodule.c"
        var $239=$addr_addr; //@line 1165 "socketmodule.c"
        var $240=$239; //@line 1165 "socketmodule.c"
        var $241=HEAP[$240]; //@line 1165 "socketmodule.c"
        var $242=($241); //@line 1165 "socketmodule.c"
        var $243=_Py_BuildValue(__str16, $242, $238, 14); //@line 1165 "socketmodule.c"
        $0=$243; //@line 1165 "socketmodule.c"
        __label__ = 27; break; //@line 1165 "socketmodule.c"
      case 27: // $bb33
        var $244=$0; //@line 977 "socketmodule.c"
        $retval=$244; //@line 977 "socketmodule.c"
        var $retval34=$retval; //@line 977 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 977 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getsockaddrarg($s, $args, $addr_ret, $len_ret) {
    var __stackBase__  = STACKTOP; STACKTOP += 116; _memset(__stackBase__, 0, 116);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $addr_ret_addr;
        var $len_ret_addr;
        var $retval;
        var $0;
        var $addr;
        var $path=__stackBase__;
        var $len=__stackBase__+4;
        var $addr12;
        var $pid=__stackBase__+8;
        var $groups=__stackBase__+12;
        var $addr18;
        var $host=__stackBase__+16;
        var $port=__stackBase__+20;
        var $result;
        var $addr29;
        var $host30=__stackBase__+24;
        var $port31=__stackBase__+28;
        var $flowinfo=__stackBase__+32;
        var $scope_id=__stackBase__+36;
        var $result32;
        var $addr43;
        var $ifr=__stackBase__+40;
        var $interfaceName=__stackBase__+72;
        var $protoNumber=__stackBase__+76;
        var $hatype=__stackBase__+80;
        var $pkttype=__stackBase__+84;
        var $haddr=__stackBase__+88;
        var $halen=__stackBase__+92;
        var $atype=__stackBase__+96;
        var $v1=__stackBase__+100;
        var $v2=__stackBase__+104;
        var $v3=__stackBase__+108;
        var $scope=__stackBase__+112;
        var $addr58;
        $s_addr=$s;
        $args_addr=$args;
        $addr_ret_addr=$addr_ret;
        $len_ret_addr=$len_ret;
        var $1=$s_addr; //@line 1183 "socketmodule.c"
        var $2=$1+12; //@line 1183 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1183 "socketmodule.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 16; break;
        }
        else if ($3 == 10) {
          __label__ = 25; break;
        }
        else if ($3 == 16) {
          __label__ = 11; break;
        }
        else if ($3 == 17) {
          __label__ = 34; break;
        }
        else if ($3 == 30) {
          __label__ = 47; break;
        }
        else {
        __label__ = 59; break;
        }
        
      case 1: // $bb
        var $4=$args_addr; //@line 1191 "socketmodule.c"
        var $5=_PyArg_Parse($4, __str17, $path, $len); //@line 1191 "socketmodule.c"
        var $6=($5)==0; //@line 1191 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1191 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 1192 "socketmodule.c"
        __label__ = 60; break; //@line 1192 "socketmodule.c"
      case 3: // $bb2
        var $7=$addr_ret_addr; //@line 1194 "socketmodule.c"
        var $8=$7; //@line 1194 "socketmodule.c"
        $addr=$8; //@line 1194 "socketmodule.c"
        var $9=HEAP[$len]; //@line 1196 "socketmodule.c"
        var $10=($9) <= 0; //@line 1196 "socketmodule.c"
        if ($10) { __lastLabel__ = 3; __label__ = 7; break; } else { __lastLabel__ = 3; __label__ = 4; break; } //@line 1196 "socketmodule.c"
      case 4: // $bb3
        var $11=HEAP[$path]; //@line 1196 "socketmodule.c"
        var $12=$11; //@line 1196 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1196 "socketmodule.c"
        var $14=($13)!=0; //@line 1196 "socketmodule.c"
        var $_pr=HEAP[$len];
        if ($14) { __lastLabel__ = 4; __label__ = 7; break; } else { __lastLabel__ = 4; __label__ = 5; break; } //@line 1196 "socketmodule.c"
      case 5: // $bb4
        var $15=($_pr) > 108; //@line 1198 "socketmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1198 "socketmodule.c"
      case 6: // $bb5
        var $16=HEAP[_socket_error]; //@line 1199 "socketmodule.c"
        _PyErr_SetString($16, __str18); //@line 1199 "socketmodule.c"
        $0=0; //@line 1201 "socketmodule.c"
        __label__ = 60; break; //@line 1201 "socketmodule.c"
      case 7: // $bb7
        var $17=__lastLabel__ == 3 ? $9 : ($_pr);
        var $18=($17) > 107; //@line 1208 "socketmodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1208 "socketmodule.c"
      case 8: // $bb8
        var $19=HEAP[_socket_error]; //@line 1209 "socketmodule.c"
        _PyErr_SetString($19, __str18); //@line 1209 "socketmodule.c"
        $0=0; //@line 1211 "socketmodule.c"
        __label__ = 60; break; //@line 1211 "socketmodule.c"
      case 9: // $bb9
        var $20=HEAP[$len]; //@line 1213 "socketmodule.c"
        var $21=$addr; //@line 1213 "socketmodule.c"
        var $22=$21+2; //@line 1213 "socketmodule.c"
        var $23=$22+$20; //@line 1213 "socketmodule.c"
        HEAP[$23]=0; //@line 1213 "socketmodule.c"
        __label__ = 10; break; //@line 1213 "socketmodule.c"
      case 10: // $bb10
        var $24=$s_addr; //@line 1215 "socketmodule.c"
        var $25=$24+12; //@line 1215 "socketmodule.c"
        var $26=HEAP[$25]; //@line 1215 "socketmodule.c"
        var $27=((($26)) & 65535); //@line 1215 "socketmodule.c"
        var $28=$addr; //@line 1215 "socketmodule.c"
        var $29=$28; //@line 1215 "socketmodule.c"
        HEAP[$29]=$27; //@line 1215 "socketmodule.c"
        var $30=HEAP[$len]; //@line 1216 "socketmodule.c"
        var $31=HEAP[$path]; //@line 1216 "socketmodule.c"
        var $32=$addr; //@line 1216 "socketmodule.c"
        var $33=$32+2; //@line 1216 "socketmodule.c"
        var $34=$33; //@line 1216 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($34, $31, $30, 1, 0); //@line 1216 "socketmodule.c"
        var $35=HEAP[$len]; //@line 1220 "socketmodule.c"
        var $36=($35) + 2; //@line 1220 "socketmodule.c"
        var $37=$len_ret_addr; //@line 1220 "socketmodule.c"
        HEAP[$37]=$36; //@line 1220 "socketmodule.c"
        $0=1; //@line 1222 "socketmodule.c"
        __label__ = 60; break; //@line 1222 "socketmodule.c"
      case 11: // $bb11
        var $38=$addr_ret_addr; //@line 1231 "socketmodule.c"
        var $39=$38; //@line 1231 "socketmodule.c"
        $addr12=$39; //@line 1231 "socketmodule.c"
        var $40=$args_addr; //@line 1232 "socketmodule.c"
        var $41=$40+4; //@line 1232 "socketmodule.c"
        var $42=HEAP[$41]; //@line 1232 "socketmodule.c"
        var $43=$42+84; //@line 1232 "socketmodule.c"
        var $44=HEAP[$43]; //@line 1232 "socketmodule.c"
        var $45=($44) & 67108864; //@line 1232 "socketmodule.c"
        var $46=($45)==0; //@line 1232 "socketmodule.c"
        var $47=$args_addr; //@line 1233 "socketmodule.c"
        if ($46) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1232 "socketmodule.c"
      case 12: // $bb13
        var $48=$47+4; //@line 1233 "socketmodule.c"
        var $49=HEAP[$48]; //@line 1233 "socketmodule.c"
        var $50=$49+12; //@line 1233 "socketmodule.c"
        var $51=HEAP[$50]; //@line 1233 "socketmodule.c"
        var $52=HEAP[_PyExc_TypeError]; //@line 1233 "socketmodule.c"
        var $53=_PyErr_Format($52, __str19, $51); //@line 1233 "socketmodule.c"
        $0=0; //@line 1238 "socketmodule.c"
        __label__ = 60; break; //@line 1238 "socketmodule.c"
      case 13: // $bb14
        var $54=_PyArg_ParseTuple($47, __str20, $pid, $groups); //@line 1240 "socketmodule.c"
        var $55=($54)==0; //@line 1240 "socketmodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1240 "socketmodule.c"
      case 14: // $bb15
        $0=0; //@line 1241 "socketmodule.c"
        __label__ = 60; break; //@line 1241 "socketmodule.c"
      case 15: // $bb16
        var $56=$addr12; //@line 1242 "socketmodule.c"
        var $57=$56; //@line 1242 "socketmodule.c"
        HEAP[$57]=16; //@line 1242 "socketmodule.c"
        var $58=HEAP[$pid]; //@line 1243 "socketmodule.c"
        var $59=$addr12; //@line 1243 "socketmodule.c"
        var $60=$59+4; //@line 1243 "socketmodule.c"
        HEAP[$60]=$58; //@line 1243 "socketmodule.c"
        var $61=HEAP[$groups]; //@line 1244 "socketmodule.c"
        var $62=$addr12; //@line 1244 "socketmodule.c"
        var $63=$62+8; //@line 1244 "socketmodule.c"
        HEAP[$63]=$61; //@line 1244 "socketmodule.c"
        var $64=$len_ret_addr; //@line 1245 "socketmodule.c"
        HEAP[$64]=12; //@line 1245 "socketmodule.c"
        $0=1; //@line 1246 "socketmodule.c"
        __label__ = 60; break; //@line 1246 "socketmodule.c"
      case 16: // $bb17
        var $65=$args_addr; //@line 1255 "socketmodule.c"
        var $66=$65+4; //@line 1255 "socketmodule.c"
        var $67=HEAP[$66]; //@line 1255 "socketmodule.c"
        var $68=$67+84; //@line 1255 "socketmodule.c"
        var $69=HEAP[$68]; //@line 1255 "socketmodule.c"
        var $70=($69) & 67108864; //@line 1255 "socketmodule.c"
        var $71=($70)==0; //@line 1255 "socketmodule.c"
        var $72=$args_addr; //@line 1256 "socketmodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1255 "socketmodule.c"
      case 17: // $bb19
        var $73=$72+4; //@line 1256 "socketmodule.c"
        var $74=HEAP[$73]; //@line 1256 "socketmodule.c"
        var $75=$74+12; //@line 1256 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1256 "socketmodule.c"
        var $77=HEAP[_PyExc_TypeError]; //@line 1256 "socketmodule.c"
        var $78=_PyErr_Format($77, __str21, $76); //@line 1256 "socketmodule.c"
        $0=0; //@line 1261 "socketmodule.c"
        __label__ = 60; break; //@line 1261 "socketmodule.c"
      case 18: // $bb20
        var $79=_PyArg_ParseTuple($72, __str22, __str23, $host, $port); //@line 1263 "socketmodule.c"
        var $80=($79)==0; //@line 1263 "socketmodule.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1263 "socketmodule.c"
      case 19: // $bb21
        $0=0; //@line 1265 "socketmodule.c"
        __label__ = 60; break; //@line 1265 "socketmodule.c"
      case 20: // $bb22
        var $81=$addr_ret_addr; //@line 1266 "socketmodule.c"
        var $82=$81; //@line 1266 "socketmodule.c"
        $addr18=$82; //@line 1266 "socketmodule.c"
        var $83=$addr18; //@line 1267 "socketmodule.c"
        var $84=$83; //@line 1267 "socketmodule.c"
        var $85=HEAP[$host]; //@line 1267 "socketmodule.c"
        var $86=_setipaddr($85, $84, 16, 2); //@line 1267 "socketmodule.c"
        $result=$86; //@line 1267 "socketmodule.c"
        var $87=HEAP[$host]; //@line 1269 "socketmodule.c"
        _PyMem_Free($87); //@line 1269 "socketmodule.c"
        var $88=$result; //@line 1270 "socketmodule.c"
        var $89=($88) < 0; //@line 1270 "socketmodule.c"
        if ($89) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1270 "socketmodule.c"
      case 21: // $bb23
        $0=0; //@line 1271 "socketmodule.c"
        __label__ = 60; break; //@line 1271 "socketmodule.c"
      case 22: // $bb24
        var $90=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $91=($90) < 0; //@line 1272 "socketmodule.c"
        var $92=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $93=($92) > 65535; //@line 1272 "socketmodule.c"
        var $or_cond=($91) | ($93);
        if ($or_cond) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1272 "socketmodule.c"
      case 23: // $bb26
        var $94=HEAP[_PyExc_OverflowError]; //@line 1273 "socketmodule.c"
        _PyErr_SetString($94, __str24); //@line 1273 "socketmodule.c"
        $0=0; //@line 1276 "socketmodule.c"
        __label__ = 60; break; //@line 1276 "socketmodule.c"
      case 24: // $bb27
        var $95=$addr18; //@line 1278 "socketmodule.c"
        var $96=$95; //@line 1278 "socketmodule.c"
        HEAP[$96]=2; //@line 1278 "socketmodule.c"
        var $97=HEAP[$port]; //@line 1279 "socketmodule.c"
        var $98=((($97)) & 65535); //@line 1279 "socketmodule.c"
        var $99=($98); //@line 1279 "socketmodule.c"
        var $100=((($99)) & 65535); //@line 1279 "socketmodule.c"
        var $101=_htons($100); //@line 1279 "socketmodule.c"
        var $102=$addr18; //@line 1279 "socketmodule.c"
        var $103=$102+2; //@line 1279 "socketmodule.c"
        HEAP[$103]=$101; //@line 1279 "socketmodule.c"
        var $104=$len_ret_addr; //@line 1280 "socketmodule.c"
        HEAP[$104]=16; //@line 1280 "socketmodule.c"
        $0=1; //@line 1281 "socketmodule.c"
        __label__ = 60; break; //@line 1281 "socketmodule.c"
      case 25: // $bb28
        HEAP[$scope_id]=0; //@line 1290 "socketmodule.c"
        var $105=HEAP[$scope_id]; //@line 1290 "socketmodule.c"
        HEAP[$flowinfo]=$105; //@line 1290 "socketmodule.c"
        var $106=$args_addr; //@line 1291 "socketmodule.c"
        var $107=$106+4; //@line 1291 "socketmodule.c"
        var $108=HEAP[$107]; //@line 1291 "socketmodule.c"
        var $109=$108+84; //@line 1291 "socketmodule.c"
        var $110=HEAP[$109]; //@line 1291 "socketmodule.c"
        var $111=($110) & 67108864; //@line 1291 "socketmodule.c"
        var $112=($111)==0; //@line 1291 "socketmodule.c"
        var $113=$args_addr; //@line 1292 "socketmodule.c"
        if ($112) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1291 "socketmodule.c"
      case 26: // $bb33
        var $114=$113+4; //@line 1292 "socketmodule.c"
        var $115=HEAP[$114]; //@line 1292 "socketmodule.c"
        var $116=$115+12; //@line 1292 "socketmodule.c"
        var $117=HEAP[$116]; //@line 1292 "socketmodule.c"
        var $118=HEAP[_PyExc_TypeError]; //@line 1292 "socketmodule.c"
        var $119=_PyErr_Format($118, __str25, $117); //@line 1292 "socketmodule.c"
        $0=0; //@line 1297 "socketmodule.c"
        __label__ = 60; break; //@line 1297 "socketmodule.c"
      case 27: // $bb34
        var $120=_PyArg_ParseTuple($113, __str26, __str23, $host30, $port31, $flowinfo, $scope_id); //@line 1299 "socketmodule.c"
        var $121=($120)==0; //@line 1299 "socketmodule.c"
        if ($121) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1299 "socketmodule.c"
      case 28: // $bb35
        $0=0; //@line 1302 "socketmodule.c"
        __label__ = 60; break; //@line 1302 "socketmodule.c"
      case 29: // $bb36
        var $122=$addr_ret_addr; //@line 1304 "socketmodule.c"
        var $123=$122; //@line 1304 "socketmodule.c"
        $addr29=$123; //@line 1304 "socketmodule.c"
        var $124=$addr29; //@line 1305 "socketmodule.c"
        var $125=$124; //@line 1305 "socketmodule.c"
        var $126=HEAP[$host30]; //@line 1305 "socketmodule.c"
        var $127=_setipaddr($126, $125, 28, 10); //@line 1305 "socketmodule.c"
        $result32=$127; //@line 1305 "socketmodule.c"
        var $128=HEAP[$host30]; //@line 1307 "socketmodule.c"
        _PyMem_Free($128); //@line 1307 "socketmodule.c"
        var $129=$result32; //@line 1308 "socketmodule.c"
        var $130=($129) < 0; //@line 1308 "socketmodule.c"
        if ($130) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1308 "socketmodule.c"
      case 30: // $bb37
        $0=0; //@line 1309 "socketmodule.c"
        __label__ = 60; break; //@line 1309 "socketmodule.c"
      case 31: // $bb38
        var $131=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $132=($131) < 0; //@line 1310 "socketmodule.c"
        var $133=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $134=($133) > 65535; //@line 1310 "socketmodule.c"
        var $or_cond3=($132) | ($134);
        if ($or_cond3) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1310 "socketmodule.c"
      case 32: // $bb40
        var $135=HEAP[_PyExc_OverflowError]; //@line 1311 "socketmodule.c"
        _PyErr_SetString($135, __str24); //@line 1311 "socketmodule.c"
        $0=0; //@line 1314 "socketmodule.c"
        __label__ = 60; break; //@line 1314 "socketmodule.c"
      case 33: // $bb41
        var $136=$s_addr; //@line 1316 "socketmodule.c"
        var $137=$136+12; //@line 1316 "socketmodule.c"
        var $138=HEAP[$137]; //@line 1316 "socketmodule.c"
        var $139=((($138)) & 65535); //@line 1316 "socketmodule.c"
        var $140=$addr29; //@line 1316 "socketmodule.c"
        var $141=$140; //@line 1316 "socketmodule.c"
        HEAP[$141]=$139; //@line 1316 "socketmodule.c"
        var $142=HEAP[$port31]; //@line 1317 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1317 "socketmodule.c"
        var $144=($143); //@line 1317 "socketmodule.c"
        var $145=((($144)) & 65535); //@line 1317 "socketmodule.c"
        var $146=_htons($145); //@line 1317 "socketmodule.c"
        var $147=$addr29; //@line 1317 "socketmodule.c"
        var $148=$147+2; //@line 1317 "socketmodule.c"
        HEAP[$148]=$146; //@line 1317 "socketmodule.c"
        var $149=HEAP[$flowinfo]; //@line 1318 "socketmodule.c"
        var $150=$addr29; //@line 1318 "socketmodule.c"
        var $151=$150+4; //@line 1318 "socketmodule.c"
        HEAP[$151]=$149; //@line 1318 "socketmodule.c"
        var $152=HEAP[$scope_id]; //@line 1319 "socketmodule.c"
        var $153=$addr29; //@line 1319 "socketmodule.c"
        var $154=$153+24; //@line 1319 "socketmodule.c"
        HEAP[$154]=$152; //@line 1319 "socketmodule.c"
        var $155=$len_ret_addr; //@line 1320 "socketmodule.c"
        HEAP[$155]=28; //@line 1320 "socketmodule.c"
        $0=1; //@line 1321 "socketmodule.c"
        __label__ = 60; break; //@line 1321 "socketmodule.c"
      case 34: // $bb42
        HEAP[$hatype]=0; //@line 1428 "socketmodule.c"
        HEAP[$pkttype]=0; //@line 1429 "socketmodule.c"
        HEAP[$haddr]=0; //@line 1430 "socketmodule.c"
        HEAP[$halen]=0; //@line 1431 "socketmodule.c"
        var $156=$args_addr; //@line 1433 "socketmodule.c"
        var $157=$156+4; //@line 1433 "socketmodule.c"
        var $158=HEAP[$157]; //@line 1433 "socketmodule.c"
        var $159=$158+84; //@line 1433 "socketmodule.c"
        var $160=HEAP[$159]; //@line 1433 "socketmodule.c"
        var $161=($160) & 67108864; //@line 1433 "socketmodule.c"
        var $162=($161)==0; //@line 1433 "socketmodule.c"
        var $163=$args_addr; //@line 1434 "socketmodule.c"
        if ($162) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1433 "socketmodule.c"
      case 35: // $bb44
        var $164=$163+4; //@line 1434 "socketmodule.c"
        var $165=HEAP[$164]; //@line 1434 "socketmodule.c"
        var $166=$165+12; //@line 1434 "socketmodule.c"
        var $167=HEAP[$166]; //@line 1434 "socketmodule.c"
        var $168=HEAP[_PyExc_TypeError]; //@line 1434 "socketmodule.c"
        var $169=_PyErr_Format($168, __str27, $167); //@line 1434 "socketmodule.c"
        $0=0; //@line 1439 "socketmodule.c"
        __label__ = 60; break; //@line 1439 "socketmodule.c"
      case 36: // $bb45
        var $170=_PyArg_ParseTuple($163, __str28, $interfaceName, $protoNumber, $pkttype, $hatype, $haddr, $halen); //@line 1441 "socketmodule.c"
        var $171=($170)==0; //@line 1441 "socketmodule.c"
        if ($171) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1441 "socketmodule.c"
      case 37: // $bb46
        $0=0; //@line 1444 "socketmodule.c"
        __label__ = 60; break; //@line 1444 "socketmodule.c"
      case 38: // $bb47
        var $172=HEAP[$interfaceName]; //@line 1445 "socketmodule.c"
        var $173=$ifr; //@line 1445 "socketmodule.c"
        var $174=$173; //@line 1445 "socketmodule.c"
        var $175=$174; //@line 1445 "socketmodule.c"
        var $176=_strncpy($175, $172, 16); //@line 1445 "socketmodule.c"
        var $177=$ifr; //@line 1446 "socketmodule.c"
        var $178=$177; //@line 1446 "socketmodule.c"
        var $179=$178+15; //@line 1446 "socketmodule.c"
        HEAP[$179]=0; //@line 1446 "socketmodule.c"
        var $180=$s_addr; //@line 1447 "socketmodule.c"
        var $181=$180+8; //@line 1447 "socketmodule.c"
        var $182=HEAP[$181]; //@line 1447 "socketmodule.c"
        var $183=_ioctl($182, 35123, $ifr); //@line 1447 "socketmodule.c"
        var $184=($183) < 0; //@line 1447 "socketmodule.c"
        if ($184) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1447 "socketmodule.c"
      case 39: // $bb48
        var $185=$s_addr; //@line 1448 "socketmodule.c"
        var $186=$185+24; //@line 1448 "socketmodule.c"
        var $187=HEAP[$186]; //@line 1448 "socketmodule.c"
        var $188=FUNCTION_TABLE[$187](); //@line 1448 "socketmodule.c"
        $0=0; //@line 1449 "socketmodule.c"
        __label__ = 60; break; //@line 1449 "socketmodule.c"
      case 40: // $bb49
        var $189=HEAP[$halen]; //@line 1451 "socketmodule.c"
        var $190=($189) > 8; //@line 1451 "socketmodule.c"
        if ($190) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1451 "socketmodule.c"
      case 41: // $bb50
        var $191=HEAP[_PyExc_ValueError]; //@line 1452 "socketmodule.c"
        _PyErr_SetString($191, __str29); //@line 1452 "socketmodule.c"
        $0=0; //@line 1454 "socketmodule.c"
        __label__ = 60; break; //@line 1454 "socketmodule.c"
      case 42: // $bb51
        var $192=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $193=($192) < 0; //@line 1456 "socketmodule.c"
        var $194=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $195=($194) > 65535; //@line 1456 "socketmodule.c"
        var $or_cond5=($193) | ($195);
        if ($or_cond5) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1456 "socketmodule.c"
      case 43: // $bb53
        var $196=HEAP[_PyExc_OverflowError]; //@line 1457 "socketmodule.c"
        _PyErr_SetString($196, __str30); //@line 1457 "socketmodule.c"
        $0=0; //@line 1460 "socketmodule.c"
        __label__ = 60; break; //@line 1460 "socketmodule.c"
      case 44: // $bb54
        var $197=$addr_ret_addr; //@line 1462 "socketmodule.c"
        var $198=$197; //@line 1462 "socketmodule.c"
        $addr43=$198; //@line 1462 "socketmodule.c"
        var $199=$addr43; //@line 1463 "socketmodule.c"
        var $200=$199; //@line 1463 "socketmodule.c"
        HEAP[$200]=17; //@line 1463 "socketmodule.c"
        var $201=HEAP[$protoNumber]; //@line 1464 "socketmodule.c"
        var $202=((($201)) & 65535); //@line 1464 "socketmodule.c"
        var $203=($202); //@line 1464 "socketmodule.c"
        var $204=((($203)) & 65535); //@line 1464 "socketmodule.c"
        var $205=_htons($204); //@line 1464 "socketmodule.c"
        var $206=$addr43; //@line 1464 "socketmodule.c"
        var $207=$206+2; //@line 1464 "socketmodule.c"
        HEAP[$207]=$205; //@line 1464 "socketmodule.c"
        var $208=$ifr+16; //@line 1465 "socketmodule.c"
        var $209=$208; //@line 1465 "socketmodule.c"
        var $210=$209; //@line 1465 "socketmodule.c"
        var $211=HEAP[$210]; //@line 1465 "socketmodule.c"
        var $212=$addr43; //@line 1465 "socketmodule.c"
        var $213=$212+4; //@line 1465 "socketmodule.c"
        HEAP[$213]=$211; //@line 1465 "socketmodule.c"
        var $214=HEAP[$pkttype]; //@line 1466 "socketmodule.c"
        var $215=((($214)) & 255); //@line 1466 "socketmodule.c"
        var $216=$addr43; //@line 1466 "socketmodule.c"
        var $217=$216+10; //@line 1466 "socketmodule.c"
        HEAP[$217]=$215; //@line 1466 "socketmodule.c"
        var $218=HEAP[$hatype]; //@line 1467 "socketmodule.c"
        var $219=((($218)) & 65535); //@line 1467 "socketmodule.c"
        var $220=$addr43; //@line 1467 "socketmodule.c"
        var $221=$220+8; //@line 1467 "socketmodule.c"
        HEAP[$221]=$219; //@line 1467 "socketmodule.c"
        var $222=HEAP[$halen]; //@line 1468 "socketmodule.c"
        var $223=($222)!=0; //@line 1468 "socketmodule.c"
        if ($223) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1468 "socketmodule.c"
      case 45: // $bb55
        var $224=HEAP[$halen]; //@line 1469 "socketmodule.c"
        var $225=HEAP[$haddr]; //@line 1469 "socketmodule.c"
        var $226=$addr43; //@line 1469 "socketmodule.c"
        var $227=$226+12; //@line 1469 "socketmodule.c"
        var $228=$227; //@line 1469 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($228, $225, $224, 1, 0); //@line 1469 "socketmodule.c"
        __label__ = 46; break; //@line 1469 "socketmodule.c"
      case 46: // $bb56
        var $229=HEAP[$halen]; //@line 1471 "socketmodule.c"
        var $230=((($229)) & 255); //@line 1471 "socketmodule.c"
        var $231=$addr43; //@line 1471 "socketmodule.c"
        var $232=$231+11; //@line 1471 "socketmodule.c"
        HEAP[$232]=$230; //@line 1471 "socketmodule.c"
        var $233=$len_ret_addr; //@line 1472 "socketmodule.c"
        HEAP[$233]=20; //@line 1472 "socketmodule.c"
        $0=1; //@line 1473 "socketmodule.c"
        __label__ = 60; break; //@line 1473 "socketmodule.c"
      case 47: // $bb57
        HEAP[$scope]=2; //@line 1481 "socketmodule.c"
        var $234=$args_addr; //@line 1484 "socketmodule.c"
        var $235=$234+4; //@line 1484 "socketmodule.c"
        var $236=HEAP[$235]; //@line 1484 "socketmodule.c"
        var $237=$236+84; //@line 1484 "socketmodule.c"
        var $238=HEAP[$237]; //@line 1484 "socketmodule.c"
        var $239=($238) & 67108864; //@line 1484 "socketmodule.c"
        var $240=($239)==0; //@line 1484 "socketmodule.c"
        var $241=$args_addr; //@line 1485 "socketmodule.c"
        if ($240) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1484 "socketmodule.c"
      case 48: // $bb59
        var $242=$241+4; //@line 1485 "socketmodule.c"
        var $243=HEAP[$242]; //@line 1485 "socketmodule.c"
        var $244=$243+12; //@line 1485 "socketmodule.c"
        var $245=HEAP[$244]; //@line 1485 "socketmodule.c"
        var $246=HEAP[_PyExc_TypeError]; //@line 1485 "socketmodule.c"
        var $247=_PyErr_Format($246, __str31, $245); //@line 1485 "socketmodule.c"
        $0=0; //@line 1490 "socketmodule.c"
        __label__ = 60; break; //@line 1490 "socketmodule.c"
      case 49: // $bb60
        var $248=_PyArg_ParseTuple($241, __str32, $atype, $v1, $v2, $v3, $scope); //@line 1493 "socketmodule.c"
        var $249=($248)==0; //@line 1493 "socketmodule.c"
        if ($249) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1493 "socketmodule.c"
      case 50: // $bb61
        $0=0; //@line 1496 "socketmodule.c"
        __label__ = 60; break; //@line 1496 "socketmodule.c"
      case 51: // $bb62
        var $250=$addr_ret_addr; //@line 1498 "socketmodule.c"
        var $251=$250; //@line 1498 "socketmodule.c"
        $addr58=$251; //@line 1498 "socketmodule.c"
        var $252=$addr58; //@line 1499 "socketmodule.c"
        var $253=$252; //@line 1499 "socketmodule.c"
        _llvm_memset_p0i8_i32($253, 0, 16, 1, 0); //@line 1499 "socketmodule.c"
        var $254=$addr58; //@line 1501 "socketmodule.c"
        var $255=$254; //@line 1501 "socketmodule.c"
        HEAP[$255]=30; //@line 1501 "socketmodule.c"
        var $256=HEAP[$scope]; //@line 1502 "socketmodule.c"
        var $257=((($256)) & 255); //@line 1502 "socketmodule.c"
        var $258=$addr58; //@line 1502 "socketmodule.c"
        var $259=$258+3; //@line 1502 "socketmodule.c"
        HEAP[$259]=$257; //@line 1502 "socketmodule.c"
        var $260=HEAP[$atype]; //@line 1503 "socketmodule.c"
        var $261=((($260)) & 255); //@line 1503 "socketmodule.c"
        var $262=$addr58; //@line 1503 "socketmodule.c"
        var $263=$262+2; //@line 1503 "socketmodule.c"
        HEAP[$263]=$261; //@line 1503 "socketmodule.c"
        var $264=HEAP[$atype]; //@line 1505 "socketmodule.c"
        var $265=($264)==1; //@line 1505 "socketmodule.c"
        if ($265) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1505 "socketmodule.c"
      case 52: // $bb63
        var $266=HEAP[$v1]; //@line 1506 "socketmodule.c"
        var $267=$addr58; //@line 1506 "socketmodule.c"
        var $268=$267+4; //@line 1506 "socketmodule.c"
        var $269=$268; //@line 1506 "socketmodule.c"
        var $270=$269; //@line 1506 "socketmodule.c"
        HEAP[$270]=$266; //@line 1506 "socketmodule.c"
        var $271=HEAP[$v2]; //@line 1507 "socketmodule.c"
        var $272=$addr58; //@line 1507 "socketmodule.c"
        var $273=$272+4; //@line 1507 "socketmodule.c"
        var $274=$273; //@line 1507 "socketmodule.c"
        var $275=$274+4; //@line 1507 "socketmodule.c"
        HEAP[$275]=$271; //@line 1507 "socketmodule.c"
        var $276=HEAP[$v3]; //@line 1508 "socketmodule.c"
        var $277=$addr58; //@line 1508 "socketmodule.c"
        var $278=$277+4; //@line 1508 "socketmodule.c"
        var $279=$278; //@line 1508 "socketmodule.c"
        var $280=$279+8; //@line 1508 "socketmodule.c"
        HEAP[$280]=$276; //@line 1508 "socketmodule.c"
        __label__ = 58; break; //@line 1508 "socketmodule.c"
      case 53: // $bb64
        var $281=HEAP[$atype]; //@line 1509 "socketmodule.c"
        var $282=($281)==2; //@line 1509 "socketmodule.c"
        if ($282) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 1509 "socketmodule.c"
      case 54: // $bb65
        var $283=HEAP[$v1]; //@line 1510 "socketmodule.c"
        var $284=$addr58; //@line 1510 "socketmodule.c"
        var $285=$284+4; //@line 1510 "socketmodule.c"
        var $286=$285; //@line 1510 "socketmodule.c"
        var $287=$286; //@line 1510 "socketmodule.c"
        var $288=$287; //@line 1510 "socketmodule.c"
        var $289=$288; //@line 1510 "socketmodule.c"
        HEAP[$289]=$283; //@line 1510 "socketmodule.c"
        var $290=HEAP[$v2]; //@line 1511 "socketmodule.c"
        var $291=$addr58; //@line 1511 "socketmodule.c"
        var $292=$291+4; //@line 1511 "socketmodule.c"
        var $293=$292; //@line 1511 "socketmodule.c"
        var $294=$293; //@line 1511 "socketmodule.c"
        var $295=$294; //@line 1511 "socketmodule.c"
        var $296=$295+4; //@line 1511 "socketmodule.c"
        HEAP[$296]=$290; //@line 1511 "socketmodule.c"
        __label__ = 58; break; //@line 1511 "socketmodule.c"
      case 55: // $bb66
        var $297=HEAP[$atype]; //@line 1512 "socketmodule.c"
        var $298=($297)==3; //@line 1512 "socketmodule.c"
        if ($298) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 1512 "socketmodule.c"
      case 56: // $bb67
        var $299=HEAP[$v1]; //@line 1513 "socketmodule.c"
        var $300=$addr58; //@line 1513 "socketmodule.c"
        var $301=$300+4; //@line 1513 "socketmodule.c"
        var $302=$301; //@line 1513 "socketmodule.c"
        var $303=$302; //@line 1513 "socketmodule.c"
        var $304=$303+4; //@line 1513 "socketmodule.c"
        HEAP[$304]=$299; //@line 1513 "socketmodule.c"
        var $305=HEAP[$v2]; //@line 1514 "socketmodule.c"
        var $306=$addr58; //@line 1514 "socketmodule.c"
        var $307=$306+4; //@line 1514 "socketmodule.c"
        var $308=$307; //@line 1514 "socketmodule.c"
        var $309=$308; //@line 1514 "socketmodule.c"
        var $310=$309; //@line 1514 "socketmodule.c"
        HEAP[$310]=$305; //@line 1514 "socketmodule.c"
        __label__ = 58; break; //@line 1514 "socketmodule.c"
      case 57: // $bb68
        var $311=HEAP[_PyExc_TypeError]; //@line 1517 "socketmodule.c"
        _PyErr_SetString($311, __str15); //@line 1517 "socketmodule.c"
        $0=0; //@line 1518 "socketmodule.c"
        __label__ = 60; break; //@line 1518 "socketmodule.c"
      case 58: // $bb69
        var $312=$len_ret_addr; //@line 1521 "socketmodule.c"
        HEAP[$312]=16; //@line 1521 "socketmodule.c"
        $0=1; //@line 1523 "socketmodule.c"
        __label__ = 60; break; //@line 1523 "socketmodule.c"
      case 59: // $bb70
        var $313=HEAP[_socket_error]; //@line 1530 "socketmodule.c"
        _PyErr_SetString($313, __str33); //@line 1530 "socketmodule.c"
        $0=0; //@line 1531 "socketmodule.c"
        __label__ = 60; break; //@line 1531 "socketmodule.c"
      case 60: // $bb71
        var $314=$0; //@line 1192 "socketmodule.c"
        $retval=$314; //@line 1192 "socketmodule.c"
        var $retval72=$retval; //@line 1192 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1192 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_accept($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr_i;
        var $family_addr_i;
        var $type_addr_i;
        var $proto_addr_i;
        var $retval_i1;
        var $0;
        var $s_i;
        var $s_addr_i;
        var $len_ret_addr_i;
        var $retval_i;
        var $1;
        var $s_addr;
        var $retval;
        var $2=__stackBase__;
        var $3;
        var $addrbuf=__stackBase__+4;
        var $newfd;
        var $addrlen=__stackBase__+132;
        var $sock;
        var $addr;
        var $res;
        var $timeout;
        $s_addr=$s;
        $sock=0; //@line 1638 "socketmodule.c"
        $addr=0; //@line 1639 "socketmodule.c"
        $res=0; //@line 1640 "socketmodule.c"
        var $4=$s_addr; //@line 1643 "socketmodule.c"
        $s_addr_i=$4;
        $len_ret_addr_i=$addrlen;
        var $5=$s_addr_i; //@line 1544 "socketmodule.c"
        var $6=$5+12; //@line 1544 "socketmodule.c"
        var $7=HEAP[$6]; //@line 1544 "socketmodule.c"
        if ($7 == 1) {
          __label__ = 1; break;
        }
        else if ($7 == 2) {
          __label__ = 3; break;
        }
        else if ($7 == 10) {
          __label__ = 4; break;
        }
        else if ($7 == 16) {
          __label__ = 2; break;
        }
        else if ($7 == 17) {
          __label__ = 5; break;
        }
        else if ($7 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb_i
        var $8=$len_ret_addr_i; //@line 1549 "socketmodule.c"
        HEAP[$8]=110; //@line 1549 "socketmodule.c"
        $1=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1_i
        var $9=$len_ret_addr_i; //@line 1556 "socketmodule.c"
        HEAP[$9]=12; //@line 1556 "socketmodule.c"
        $1=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2_i
        var $10=$len_ret_addr_i; //@line 1563 "socketmodule.c"
        HEAP[$10]=16; //@line 1563 "socketmodule.c"
        $1=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3_i
        var $11=$len_ret_addr_i; //@line 1570 "socketmodule.c"
        HEAP[$11]=28; //@line 1570 "socketmodule.c"
        $1=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4_i
        var $12=$len_ret_addr_i; //@line 1607 "socketmodule.c"
        HEAP[$12]=20; //@line 1607 "socketmodule.c"
        $1=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5_i
        var $13=$len_ret_addr_i; //@line 1615 "socketmodule.c"
        HEAP[$13]=16; //@line 1615 "socketmodule.c"
        $1=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb
        var $14=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($14, __str34); //@line 1623 "socketmodule.c"
        $1=0; //@line 1624 "socketmodule.c"
        $retval_i=0; //@line 1550 "socketmodule.c"
        $3=0; //@line 1644 "socketmodule.c"
        __label__ = 27; break; //@line 1644 "socketmodule.c"
      case 8: // $bb1
        $retval_i=1; //@line 1550 "socketmodule.c"
        var $15=HEAP[$addrlen]; //@line 1645 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 1645 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $15, 1, 0); //@line 1645 "socketmodule.c"
        $newfd=-1; //@line 1650 "socketmodule.c"
        var $16=$s_addr; //@line 1657 "socketmodule.c"
        var $17=_internal_select($16, 0); //@line 1657 "socketmodule.c"
        $timeout=$17; //@line 1657 "socketmodule.c"
        var $18=($17)==0; //@line 1658 "socketmodule.c"
        if ($18) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 10; break; } //@line 1658 "socketmodule.c"
      case 9: // $bb3
        var $addrbuf4=$addrbuf; //@line 1659 "socketmodule.c"
        var $19=$2; //@line 1659 "socketmodule.c"
        HEAP[$19]=$addrbuf4; //@line 1659 "socketmodule.c"
        var $20=$s_addr; //@line 1659 "socketmodule.c"
        var $21=$20+8; //@line 1659 "socketmodule.c"
        var $22=HEAP[$21]; //@line 1659 "socketmodule.c"
        var $elt=$2; //@line 1659 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1659 "socketmodule.c"
        var $23=_accept($22, $val, $addrlen); //@line 1659 "socketmodule.c"
        $newfd=$23; //@line 1659 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 9; __label__ = 10; break; //@line 1659 "socketmodule.c"
      case 10: // $bb6
        var $24=__lastLabel__ == 9 ? $_pr : ($17);
        var $25=($24)==1; //@line 1662 "socketmodule.c"
        if ($25) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1662 "socketmodule.c"
      case 11: // $bb7
        var $26=HEAP[_socket_timeout]; //@line 1663 "socketmodule.c"
        _PyErr_SetString($26, __str35); //@line 1663 "socketmodule.c"
        $3=0; //@line 1664 "socketmodule.c"
        __label__ = 27; break; //@line 1664 "socketmodule.c"
      case 12: // $bb8
        var $27=$newfd; //@line 1670 "socketmodule.c"
        var $28=($27) < 0; //@line 1670 "socketmodule.c"
        var $29=$s_addr; //@line 1672 "socketmodule.c"
        if ($28) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1670 "socketmodule.c"
      case 13: // $bb9
        var $30=$29+24; //@line 1672 "socketmodule.c"
        var $31=HEAP[$30]; //@line 1672 "socketmodule.c"
        var $32=FUNCTION_TABLE[$31](); //@line 1672 "socketmodule.c"
        $3=$32; //@line 1672 "socketmodule.c"
        __label__ = 27; break; //@line 1672 "socketmodule.c"
      case 14: // $bb10
        var $33=$29+20; //@line 1676 "socketmodule.c"
        var $34=HEAP[$33]; //@line 1676 "socketmodule.c"
        var $35=$s_addr; //@line 1676 "socketmodule.c"
        var $36=$35+16; //@line 1676 "socketmodule.c"
        var $37=HEAP[$36]; //@line 1676 "socketmodule.c"
        var $38=$s_addr; //@line 1676 "socketmodule.c"
        var $39=$38+12; //@line 1676 "socketmodule.c"
        var $40=HEAP[$39]; //@line 1676 "socketmodule.c"
        var $41=$newfd; //@line 1676 "socketmodule.c"
        $fd_addr_i=$41;
        $family_addr_i=$40;
        $type_addr_i=$37;
        $proto_addr_i=$34;
        var $42=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $43=$42; //@line 757 "socketmodule.c"
        $s_i=$43; //@line 757 "socketmodule.c"
        var $44=$s_i; //@line 759 "socketmodule.c"
        var $45=($44)!=0; //@line 759 "socketmodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 759 "socketmodule.c"
      case 15: // $bb_i2
        var $46=$s_i; //@line 760 "socketmodule.c"
        var $47=$fd_addr_i; //@line 760 "socketmodule.c"
        var $48=$family_addr_i; //@line 760 "socketmodule.c"
        var $49=$type_addr_i; //@line 760 "socketmodule.c"
        var $50=$proto_addr_i; //@line 760 "socketmodule.c"
        _init_sockobject($46, $47, $48, $49, $50); //@line 760 "socketmodule.c"
        __label__ = 16; break; //@line 760 "socketmodule.c"
      case 16: // $new_sockobject_exit
        var $51=$s_i; //@line 761 "socketmodule.c"
        $0=$51; //@line 761 "socketmodule.c"
        var $52=$0; //@line 761 "socketmodule.c"
        $retval_i1=$52; //@line 761 "socketmodule.c"
        var $retval2_i=$retval_i1; //@line 761 "socketmodule.c"
        var $53=$retval2_i; //@line 1676 "socketmodule.c"
        $sock=$53; //@line 1676 "socketmodule.c"
        var $54=($53)==0; //@line 1681 "socketmodule.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1681 "socketmodule.c"
      case 17: // $bb11
        var $55=$newfd; //@line 1682 "socketmodule.c"
        var $56=_close($55); //@line 1682 "socketmodule.c"
        __label__ = 20; break; //@line 1682 "socketmodule.c"
      case 18: // $bb12
        var $57=$s_addr; //@line 1685 "socketmodule.c"
        var $58=$57+20; //@line 1685 "socketmodule.c"
        var $59=HEAP[$58]; //@line 1685 "socketmodule.c"
        var $60=HEAP[$addrlen]; //@line 1685 "socketmodule.c"
        var $addrbuf13=$addrbuf; //@line 1685 "socketmodule.c"
        var $61=$s_addr; //@line 1685 "socketmodule.c"
        var $62=$61+8; //@line 1685 "socketmodule.c"
        var $63=HEAP[$62]; //@line 1685 "socketmodule.c"
        var $64=_makesockaddr($63, $addrbuf13, $60, $59); //@line 1685 "socketmodule.c"
        $addr=$64; //@line 1685 "socketmodule.c"
        var $65=$addr; //@line 1687 "socketmodule.c"
        var $66=($65)==0; //@line 1687 "socketmodule.c"
        if ($66) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1687 "socketmodule.c"
      case 19: // $bb15
        var $67=$sock; //@line 1690 "socketmodule.c"
        var $68=$addr; //@line 1690 "socketmodule.c"
        var $69=_PyTuple_Pack(2, $67, $68); //@line 1690 "socketmodule.c"
        $res=$69; //@line 1690 "socketmodule.c"
        __label__ = 20; break; //@line 1692 "socketmodule.c"
      case 20: // $finally
        var $70=$sock; //@line 1693 "socketmodule.c"
        var $71=($70)!=0; //@line 1693 "socketmodule.c"
        if ($71) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1693 "socketmodule.c"
      case 21: // $bb16
        var $72=$sock; //@line 1693 "socketmodule.c"
        var $73=$72; //@line 1693 "socketmodule.c"
        var $74=HEAP[$73]; //@line 1693 "socketmodule.c"
        var $75=($74) - 1; //@line 1693 "socketmodule.c"
        var $76=$sock; //@line 1693 "socketmodule.c"
        var $77=$76; //@line 1693 "socketmodule.c"
        HEAP[$77]=$75; //@line 1693 "socketmodule.c"
        var $78=$sock; //@line 1693 "socketmodule.c"
        var $79=$78; //@line 1693 "socketmodule.c"
        var $80=HEAP[$79]; //@line 1693 "socketmodule.c"
        var $81=($80)==0; //@line 1693 "socketmodule.c"
        if ($81) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1693 "socketmodule.c"
      case 22: // $bb17
        var $82=$sock; //@line 1693 "socketmodule.c"
        var $83=$82+4; //@line 1693 "socketmodule.c"
        var $84=HEAP[$83]; //@line 1693 "socketmodule.c"
        var $85=$84+24; //@line 1693 "socketmodule.c"
        var $86=HEAP[$85]; //@line 1693 "socketmodule.c"
        var $87=$sock; //@line 1693 "socketmodule.c"
        FUNCTION_TABLE[$86]($87); //@line 1693 "socketmodule.c"
        __label__ = 23; break; //@line 1693 "socketmodule.c"
      case 23: // $bb18
        var $88=$addr; //@line 1694 "socketmodule.c"
        var $89=($88)!=0; //@line 1694 "socketmodule.c"
        if ($89) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1694 "socketmodule.c"
      case 24: // $bb19
        var $90=$addr; //@line 1694 "socketmodule.c"
        var $91=$90; //@line 1694 "socketmodule.c"
        var $92=HEAP[$91]; //@line 1694 "socketmodule.c"
        var $93=($92) - 1; //@line 1694 "socketmodule.c"
        var $94=$addr; //@line 1694 "socketmodule.c"
        var $95=$94; //@line 1694 "socketmodule.c"
        HEAP[$95]=$93; //@line 1694 "socketmodule.c"
        var $96=$addr; //@line 1694 "socketmodule.c"
        var $97=$96; //@line 1694 "socketmodule.c"
        var $98=HEAP[$97]; //@line 1694 "socketmodule.c"
        var $99=($98)==0; //@line 1694 "socketmodule.c"
        if ($99) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1694 "socketmodule.c"
      case 25: // $bb20
        var $100=$addr; //@line 1694 "socketmodule.c"
        var $101=$100+4; //@line 1694 "socketmodule.c"
        var $102=HEAP[$101]; //@line 1694 "socketmodule.c"
        var $103=$102+24; //@line 1694 "socketmodule.c"
        var $104=HEAP[$103]; //@line 1694 "socketmodule.c"
        var $105=$addr; //@line 1694 "socketmodule.c"
        FUNCTION_TABLE[$104]($105); //@line 1694 "socketmodule.c"
        __label__ = 26; break; //@line 1694 "socketmodule.c"
      case 26: // $bb21
        var $106=$res; //@line 1695 "socketmodule.c"
        $3=$106; //@line 1695 "socketmodule.c"
        __label__ = 27; break; //@line 1695 "socketmodule.c"
      case 27: // $bb22
        var $107=$3; //@line 1644 "socketmodule.c"
        $retval=$107; //@line 1644 "socketmodule.c"
        var $retval23=$retval; //@line 1644 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 1644 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setblocking($s, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $block_addr_i;
        var $delay_flag_i;
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $iftmp_114;
        var $0;
        var $block;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1715 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 1715 "socketmodule.c"
        $block=$2; //@line 1715 "socketmodule.c"
        var $3=$block; //@line 1716 "socketmodule.c"
        var $4=($3)==-1; //@line 1716 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 1716 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1716 "socketmodule.c"
        var $6=($5)!=0; //@line 1716 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1716 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 1717 "socketmodule.c"
        __label__ = 11; break; //@line 1717 "socketmodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$block;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $7=__lastLabel__ == 3 ? $_pr : ($3);
        var $8=($7)!=0; //@line 1719 "socketmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1719 "socketmodule.c"
      case 5: // $bb3
        $iftmp_114=-1; //@line 1719 "socketmodule.c"
        __label__ = 7; break; //@line 1719 "socketmodule.c"
      case 6: // $bb4
        $iftmp_114=0; //@line 1719 "socketmodule.c"
        __label__ = 7; break; //@line 1719 "socketmodule.c"
      case 7: // $bb5
        var $9=$s_addr; //@line 1719 "socketmodule.c"
        var $10=$9+28; //@line 1719 "socketmodule.c"
        var $11=$iftmp_114; //@line 1719 "socketmodule.c"
        HEAP[$10]=$11; //@line 1719 "socketmodule.c"
        var $12=$s_addr; //@line 1720 "socketmodule.c"
        var $13=$block; //@line 1720 "socketmodule.c"
        $s_addr_i=$12;
        $block_addr_i=$13;
        var $14=$s_addr_i; //@line 640 "socketmodule.c"
        var $15=$14+8; //@line 640 "socketmodule.c"
        var $16=HEAP[$15]; //@line 640 "socketmodule.c"
        var $17=_fcntl($16, 3, 0); //@line 640 "socketmodule.c"
        $delay_flag_i=$17; //@line 640 "socketmodule.c"
        var $18=$block_addr_i; //@line 641 "socketmodule.c"
        var $19=($18)!=0; //@line 641 "socketmodule.c"
        var $20=$delay_flag_i; //@line 642 "socketmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 641 "socketmodule.c"
      case 8: // $bb_i
        var $21=($20) & -2049; //@line 642 "socketmodule.c"
        $delay_flag_i=$21; //@line 642 "socketmodule.c"
        __label__ = 10; break; //@line 642 "socketmodule.c"
      case 9: // $bb1_i
        var $22=($20) | 2048; //@line 644 "socketmodule.c"
        $delay_flag_i=$22; //@line 644 "socketmodule.c"
        __label__ = 10; break; //@line 644 "socketmodule.c"
      case 10: // $internal_setblocking_exit
        var $23=$s_addr_i; //@line 645 "socketmodule.c"
        var $24=$23+8; //@line 645 "socketmodule.c"
        var $25=HEAP[$24]; //@line 645 "socketmodule.c"
        var $26=$delay_flag_i; //@line 645 "socketmodule.c"
        var $27=_fcntl($25, 4, $26); //@line 645 "socketmodule.c"
        var $28=HEAP[__Py_NoneStruct]; //@line 1722 "socketmodule.c"
        var $29=($28) + 1; //@line 1722 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$29; //@line 1722 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1723 "socketmodule.c"
        __label__ = 11; break; //@line 1723 "socketmodule.c"
      case 11: // $bb6
        var $30=$0; //@line 1717 "socketmodule.c"
        $retval=$30; //@line 1717 "socketmodule.c"
        var $retval7=$retval; //@line 1717 "socketmodule.c"
        ;
        return $retval7; //@line 1717 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_settimeout($s, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $block_addr_i;
        var $delay_flag_i;
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $timeout;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1744 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1744 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1744 "socketmodule.c"
      case 1: // $bb
        $timeout=-1; //@line 1745 "socketmodule.c"
        __label__ = 6; break; //@line 1745 "socketmodule.c"
      case 2: // $bb1
        var $3=$arg_addr; //@line 1747 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 1747 "socketmodule.c"
        $timeout=$4; //@line 1747 "socketmodule.c"
        var $5=$timeout; //@line 1748 "socketmodule.c"
        var $6=($5) < 0; //@line 1748 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1748 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 1749 "socketmodule.c"
        var $8=($7)==0; //@line 1749 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1749 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 1750 "socketmodule.c"
        _PyErr_SetString($9, __str36); //@line 1750 "socketmodule.c"
        __label__ = 5; break; //@line 1750 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 1752 "socketmodule.c"
        __label__ = 10; break; //@line 1752 "socketmodule.c"
      case 6: // $bb5
        var $10=$s_addr; //@line 1756 "socketmodule.c"
        var $11=$10+28; //@line 1756 "socketmodule.c"
        var $12=$timeout; //@line 1756 "socketmodule.c"
        HEAP[$11]=$12; //@line 1756 "socketmodule.c"
        var $13=$timeout; //@line 1757 "socketmodule.c"
        var $14=($13) < 0; //@line 1757 "socketmodule.c"
        var $15=($14); //@line 1757 "socketmodule.c"
        var $16=$s_addr; //@line 1757 "socketmodule.c"
        $s_addr_i=$16;
        $block_addr_i=$15;
        var $17=$s_addr_i; //@line 640 "socketmodule.c"
        var $18=$17+8; //@line 640 "socketmodule.c"
        var $19=HEAP[$18]; //@line 640 "socketmodule.c"
        var $20=_fcntl($19, 3, 0); //@line 640 "socketmodule.c"
        $delay_flag_i=$20; //@line 640 "socketmodule.c"
        var $21=$block_addr_i; //@line 641 "socketmodule.c"
        var $22=($21)!=0; //@line 641 "socketmodule.c"
        var $23=$delay_flag_i; //@line 642 "socketmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 641 "socketmodule.c"
      case 7: // $bb_i
        var $24=($23) & -2049; //@line 642 "socketmodule.c"
        $delay_flag_i=$24; //@line 642 "socketmodule.c"
        __label__ = 9; break; //@line 642 "socketmodule.c"
      case 8: // $bb1_i
        var $25=($23) | 2048; //@line 644 "socketmodule.c"
        $delay_flag_i=$25; //@line 644 "socketmodule.c"
        __label__ = 9; break; //@line 644 "socketmodule.c"
      case 9: // $internal_setblocking_exit
        var $26=$s_addr_i; //@line 645 "socketmodule.c"
        var $27=$26+8; //@line 645 "socketmodule.c"
        var $28=HEAP[$27]; //@line 645 "socketmodule.c"
        var $29=$delay_flag_i; //@line 645 "socketmodule.c"
        var $30=_fcntl($28, 4, $29); //@line 645 "socketmodule.c"
        var $31=HEAP[__Py_NoneStruct]; //@line 1759 "socketmodule.c"
        var $32=($31) + 1; //@line 1759 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$32; //@line 1759 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1760 "socketmodule.c"
        __label__ = 10; break; //@line 1760 "socketmodule.c"
      case 10: // $bb6
        var $33=$0; //@line 1752 "socketmodule.c"
        $retval=$33; //@line 1752 "socketmodule.c"
        var $retval7=$retval; //@line 1752 "socketmodule.c"
        ;
        return $retval7; //@line 1752 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_gettimeout($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        $s_addr=$s;
        var $1=$s_addr; //@line 1776 "socketmodule.c"
        var $2=$1+28; //@line 1776 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1776 "socketmodule.c"
        var $4=($3) < 0; //@line 1776 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1776 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[__Py_NoneStruct]; //@line 1777 "socketmodule.c"
        var $6=($5) + 1; //@line 1777 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 1777 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1778 "socketmodule.c"
        __label__ = 3; break; //@line 1778 "socketmodule.c"
      case 2: // $bb1
        var $7=$s_addr; //@line 1781 "socketmodule.c"
        var $8=$7+28; //@line 1781 "socketmodule.c"
        var $9=HEAP[$8]; //@line 1781 "socketmodule.c"
        var $10=_PyFloat_FromDouble($9); //@line 1781 "socketmodule.c"
        $0=$10; //@line 1781 "socketmodule.c"
        __label__ = 3; break; //@line 1781 "socketmodule.c"
      case 3: // $bb2
        var $11=$0; //@line 1778 "socketmodule.c"
        $retval=$11; //@line 1778 "socketmodule.c"
        var $retval3=$retval; //@line 1778 "socketmodule.c"
        ;
        return $retval3; //@line 1778 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $level=__stackBase__;
        var $optname=__stackBase__+4;
        var $res;
        var $buf=__stackBase__+8;
        var $buflen=__stackBase__+12;
        var $flag=__stackBase__+16;
        $s_addr=$s;
        $args_addr=$args;
        var $1=$args_addr; //@line 1830 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str37, $level, $optname, $flag); //@line 1830 "socketmodule.c"
        var $3=($2)!=0; //@line 1830 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1830 "socketmodule.c"
      case 1: // $bb
        var $flag1=$flag; //@line 1832 "socketmodule.c"
        HEAP[$buf]=$flag1; //@line 1832 "socketmodule.c"
        HEAP[$buflen]=4; //@line 1833 "socketmodule.c"
        __label__ = 4; break; //@line 1833 "socketmodule.c"
      case 2: // $bb3
        _PyErr_Clear(); //@line 1836 "socketmodule.c"
        var $4=$args_addr; //@line 1837 "socketmodule.c"
        var $5=_PyArg_ParseTuple($4, __str38, $level, $optname, $buf, $buflen); //@line 1837 "socketmodule.c"
        var $6=($5)==0; //@line 1837 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1837 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 1839 "socketmodule.c"
        __label__ = 7; break; //@line 1839 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$buflen]; //@line 1841 "socketmodule.c"
        var $8=HEAP[$buf]; //@line 1841 "socketmodule.c"
        var $9=HEAP[$optname]; //@line 1841 "socketmodule.c"
        var $10=HEAP[$level]; //@line 1841 "socketmodule.c"
        var $11=$s_addr; //@line 1841 "socketmodule.c"
        var $12=$11+8; //@line 1841 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1841 "socketmodule.c"
        var $14=_setsockopt($13, $10, $9, $8, $7); //@line 1841 "socketmodule.c"
        $res=$14; //@line 1841 "socketmodule.c"
        var $15=($14) < 0; //@line 1842 "socketmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1842 "socketmodule.c"
      case 5: // $bb6
        var $16=$s_addr; //@line 1843 "socketmodule.c"
        var $17=$16+24; //@line 1843 "socketmodule.c"
        var $18=HEAP[$17]; //@line 1843 "socketmodule.c"
        var $19=FUNCTION_TABLE[$18](); //@line 1843 "socketmodule.c"
        $0=$19; //@line 1843 "socketmodule.c"
        __label__ = 7; break; //@line 1843 "socketmodule.c"
      case 6: // $bb7
        var $20=HEAP[__Py_NoneStruct]; //@line 1844 "socketmodule.c"
        var $21=($20) + 1; //@line 1844 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$21; //@line 1844 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1845 "socketmodule.c"
        __label__ = 7; break; //@line 1845 "socketmodule.c"
      case 7: // $bb8
        var $22=$0; //@line 1839 "socketmodule.c"
        $retval=$22; //@line 1839 "socketmodule.c"
        var $retval9=$retval; //@line 1839 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1839 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $level=__stackBase__;
        var $optname=__stackBase__+4;
        var $res;
        var $buf=__stackBase__+8;
        var $buflen=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $flagsize=__stackBase__+20;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$buflen]=0; //@line 1867 "socketmodule.c"
        var $1=$args_addr; //@line 1875 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str39, $level, $optname, $buflen); //@line 1875 "socketmodule.c"
        var $3=($2)==0; //@line 1875 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1875 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 1877 "socketmodule.c"
        __label__ = 15; break; //@line 1877 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$buflen]; //@line 1879 "socketmodule.c"
        var $5=($4)==0; //@line 1879 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1879 "socketmodule.c"
      case 3: // $bb2
        HEAP[$flag]=0; //@line 1880 "socketmodule.c"
        HEAP[$flagsize]=4; //@line 1881 "socketmodule.c"
        var $6=HEAP[$optname]; //@line 1882 "socketmodule.c"
        var $7=HEAP[$level]; //@line 1882 "socketmodule.c"
        var $8=$s_addr; //@line 1882 "socketmodule.c"
        var $9=$8+8; //@line 1882 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1882 "socketmodule.c"
        var $flag3=$flag; //@line 1882 "socketmodule.c"
        var $11=_getsockopt($10, $7, $6, $flag3, $flagsize); //@line 1882 "socketmodule.c"
        $res=$11; //@line 1882 "socketmodule.c"
        var $12=$res; //@line 1884 "socketmodule.c"
        var $13=($12) < 0; //@line 1884 "socketmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1884 "socketmodule.c"
      case 4: // $bb4
        var $14=$s_addr; //@line 1885 "socketmodule.c"
        var $15=$14+24; //@line 1885 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1885 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1885 "socketmodule.c"
        $0=$17; //@line 1885 "socketmodule.c"
        __label__ = 15; break; //@line 1885 "socketmodule.c"
      case 5: // $bb5
        var $18=HEAP[$flag]; //@line 1886 "socketmodule.c"
        var $19=_PyInt_FromLong($18); //@line 1886 "socketmodule.c"
        $0=$19; //@line 1886 "socketmodule.c"
        __label__ = 15; break; //@line 1886 "socketmodule.c"
      case 6: // $bb6
        var $20=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $21=($20)==0; //@line 1893 "socketmodule.c"
        var $22=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $23=($22) > 1024; //@line 1893 "socketmodule.c"
        var $or_cond=($21) | ($23);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1893 "socketmodule.c"
      case 7: // $bb8
        var $24=HEAP[_socket_error]; //@line 1895 "socketmodule.c"
        _PyErr_SetString($24, __str40); //@line 1895 "socketmodule.c"
        $0=0; //@line 1897 "socketmodule.c"
        __label__ = 15; break; //@line 1897 "socketmodule.c"
      case 8: // $bb9
        var $25=HEAP[$buflen]; //@line 1899 "socketmodule.c"
        var $26=_PyString_FromStringAndSize(0, $25); //@line 1899 "socketmodule.c"
        HEAP[$buf]=$26; //@line 1899 "socketmodule.c"
        var $27=HEAP[$buf]; //@line 1900 "socketmodule.c"
        var $28=($27)==0; //@line 1900 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1900 "socketmodule.c"
      case 9: // $bb10
        $0=0; //@line 1901 "socketmodule.c"
        __label__ = 15; break; //@line 1901 "socketmodule.c"
      case 10: // $bb11
        var $29=HEAP[$buf]; //@line 1902 "socketmodule.c"
        var $30=$29; //@line 1902 "socketmodule.c"
        var $31=$30+20; //@line 1902 "socketmodule.c"
        var $32=$31; //@line 1902 "socketmodule.c"
        var $33=HEAP[$optname]; //@line 1902 "socketmodule.c"
        var $34=HEAP[$level]; //@line 1902 "socketmodule.c"
        var $35=$s_addr; //@line 1902 "socketmodule.c"
        var $36=$35+8; //@line 1902 "socketmodule.c"
        var $37=HEAP[$36]; //@line 1902 "socketmodule.c"
        var $38=_getsockopt($37, $34, $33, $32, $buflen); //@line 1902 "socketmodule.c"
        $res=$38; //@line 1902 "socketmodule.c"
        var $39=$res; //@line 1904 "socketmodule.c"
        var $40=($39) < 0; //@line 1904 "socketmodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1904 "socketmodule.c"
      case 11: // $bb12
        var $41=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $42=$41; //@line 1905 "socketmodule.c"
        var $43=HEAP[$42]; //@line 1905 "socketmodule.c"
        var $44=($43) - 1; //@line 1905 "socketmodule.c"
        var $45=$41; //@line 1905 "socketmodule.c"
        HEAP[$45]=$44; //@line 1905 "socketmodule.c"
        var $46=$41; //@line 1905 "socketmodule.c"
        var $47=HEAP[$46]; //@line 1905 "socketmodule.c"
        var $48=($47)==0; //@line 1905 "socketmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1905 "socketmodule.c"
      case 12: // $bb13
        var $49=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $50=$49+4; //@line 1905 "socketmodule.c"
        var $51=HEAP[$50]; //@line 1905 "socketmodule.c"
        var $52=$51+24; //@line 1905 "socketmodule.c"
        var $53=HEAP[$52]; //@line 1905 "socketmodule.c"
        var $54=HEAP[$buf]; //@line 1905 "socketmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 1905 "socketmodule.c"
        __label__ = 13; break; //@line 1905 "socketmodule.c"
      case 13: // $bb14
        var $55=$s_addr; //@line 1906 "socketmodule.c"
        var $56=$55+24; //@line 1906 "socketmodule.c"
        var $57=HEAP[$56]; //@line 1906 "socketmodule.c"
        var $58=FUNCTION_TABLE[$57](); //@line 1906 "socketmodule.c"
        $0=$58; //@line 1906 "socketmodule.c"
        __label__ = 15; break; //@line 1906 "socketmodule.c"
      case 14: // $bb15
        var $59=HEAP[$buflen]; //@line 1908 "socketmodule.c"
        var $60=__PyString_Resize($buf, $59); //@line 1908 "socketmodule.c"
        var $61=HEAP[$buf]; //@line 1909 "socketmodule.c"
        $0=$61; //@line 1909 "socketmodule.c"
        __label__ = 15; break; //@line 1909 "socketmodule.c"
      case 15: // $bb16
        var $62=$0; //@line 1877 "socketmodule.c"
        $retval=$62; //@line 1877 "socketmodule.c"
        var $retval17=$retval; //@line 1877 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1877 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_bind($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $addrlen=__stackBase__+132;
        var $res;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 1930 "socketmodule.c"
        var $2=$s_addr; //@line 1930 "socketmodule.c"
        var $3=$addro_addr; //@line 1930 "socketmodule.c"
        var $4=_getsockaddrarg($2, $3, $addrbuf1, $addrlen); //@line 1930 "socketmodule.c"
        var $5=($4)==0; //@line 1930 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1930 "socketmodule.c"
      case 1: // $bb
        $1=0; //@line 1931 "socketmodule.c"
        __label__ = 5; break; //@line 1931 "socketmodule.c"
      case 2: // $bb3
        var $6=HEAP[$addrlen]; //@line 1933 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 1933 "socketmodule.c"
        var $7=$0; //@line 1933 "socketmodule.c"
        HEAP[$7]=$addrbuf4; //@line 1933 "socketmodule.c"
        var $8=$s_addr; //@line 1933 "socketmodule.c"
        var $9=$8+8; //@line 1933 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1933 "socketmodule.c"
        var $elt=$0; //@line 1933 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1933 "socketmodule.c"
        var $11=_bind($10, $val, $6); //@line 1933 "socketmodule.c"
        $res=$11; //@line 1933 "socketmodule.c"
        var $12=$res; //@line 1935 "socketmodule.c"
        var $13=($12) < 0; //@line 1935 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1935 "socketmodule.c"
      case 3: // $bb6
        var $14=$s_addr; //@line 1936 "socketmodule.c"
        var $15=$14+24; //@line 1936 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1936 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1936 "socketmodule.c"
        $1=$17; //@line 1936 "socketmodule.c"
        __label__ = 5; break; //@line 1936 "socketmodule.c"
      case 4: // $bb7
        var $18=HEAP[__Py_NoneStruct]; //@line 1937 "socketmodule.c"
        var $19=($18) + 1; //@line 1937 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$19; //@line 1937 "socketmodule.c"
        $1=__Py_NoneStruct; //@line 1938 "socketmodule.c"
        __label__ = 5; break; //@line 1938 "socketmodule.c"
      case 5: // $bb8
        var $20=$1; //@line 1931 "socketmodule.c"
        $retval=$20; //@line 1931 "socketmodule.c"
        var $retval9=$retval; //@line 1931 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1931 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_close($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        var $fd;
        $s_addr=$s;
        var $1=$s_addr; //@line 1958 "socketmodule.c"
        var $2=$1+8; //@line 1958 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1958 "socketmodule.c"
        $fd=$3; //@line 1958 "socketmodule.c"
        var $4=$fd; //@line 1958 "socketmodule.c"
        var $5=($4)!=-1; //@line 1958 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1958 "socketmodule.c"
      case 1: // $bb
        var $6=$s_addr; //@line 1959 "socketmodule.c"
        var $7=$6+8; //@line 1959 "socketmodule.c"
        HEAP[$7]=-1; //@line 1959 "socketmodule.c"
        var $8=$fd; //@line 1961 "socketmodule.c"
        var $9=_close($8); //@line 1961 "socketmodule.c"
        __label__ = 2; break; //@line 1961 "socketmodule.c"
      case 2: // $bb1
        var $10=HEAP[__Py_NoneStruct]; //@line 1964 "socketmodule.c"
        var $11=($10) + 1; //@line 1964 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$11; //@line 1964 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1965 "socketmodule.c"
        var $12=$0; //@line 1965 "socketmodule.c"
        $retval=$12; //@line 1965 "socketmodule.c"
        var $retval2=$retval; //@line 1965 "socketmodule.c"
        ;
        return $retval2; //@line 1965 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_connect($s, $addr, $addrlen, $timeoutp) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addr_addr;
        var $addrlen_addr;
        var $timeoutp_addr;
        var $retval;
        var $0;
        var $1=__stackBase__;
        var $res=__stackBase__+4;
        var $timeout;
        var $res_size=__stackBase__+8;
        $s_addr=$s;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        $timeoutp_addr=$timeoutp;
        $timeout=0; //@line 1979 "socketmodule.c"
        var $2=$addrlen_addr; //@line 1980 "socketmodule.c"
        var $3=$1; //@line 1980 "socketmodule.c"
        var $4=$addr_addr; //@line 1980 "socketmodule.c"
        HEAP[$3]=$4; //@line 1980 "socketmodule.c"
        var $5=$s_addr; //@line 1980 "socketmodule.c"
        var $6=$5+8; //@line 1980 "socketmodule.c"
        var $7=HEAP[$6]; //@line 1980 "socketmodule.c"
        var $elt=$1; //@line 1980 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1980 "socketmodule.c"
        var $8=_connect($7, $val, $2); //@line 1980 "socketmodule.c"
        HEAP[$res]=$8; //@line 1980 "socketmodule.c"
        var $9=$s_addr; //@line 2030 "socketmodule.c"
        var $10=$9+28; //@line 2030 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2030 "socketmodule.c"
        var $12=($11) > 0; //@line 2030 "socketmodule.c"
        if ($12) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 11; break; } //@line 2030 "socketmodule.c"
      case 1: // $bb
        var $13=HEAP[$res]; //@line 2031 "socketmodule.c"
        var $14=($13) < 0; //@line 2031 "socketmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 13; break; } //@line 2031 "socketmodule.c"
      case 2: // $bb1
        var $15=___errno_location(); //@line 2031 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2031 "socketmodule.c"
        var $17=($16)==115; //@line 2031 "socketmodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2031 "socketmodule.c"
      case 3: // $bb2
        var $18=$s_addr; //@line 2032 "socketmodule.c"
        var $19=_internal_select($18, 1); //@line 2032 "socketmodule.c"
        $timeout=$19; //@line 2032 "socketmodule.c"
        var $20=$timeout; //@line 2033 "socketmodule.c"
        var $21=($20)==0; //@line 2033 "socketmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2033 "socketmodule.c"
      case 4: // $bb3
        HEAP[$res_size]=4; //@line 2037 "socketmodule.c"
        var $22=$s_addr; //@line 2038 "socketmodule.c"
        var $23=$22+8; //@line 2038 "socketmodule.c"
        var $24=HEAP[$23]; //@line 2038 "socketmodule.c"
        var $res4=$res; //@line 2038 "socketmodule.c"
        var $25=_getsockopt($24, 1, 4, $res4, $res_size); //@line 2038 "socketmodule.c"
        var $26=HEAP[$res]; //@line 2040 "socketmodule.c"
        var $27=($26)==106; //@line 2040 "socketmodule.c"
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
        var $30=$timeout; //@line 2044 "socketmodule.c"
        var $31=($30)==-1; //@line 2044 "socketmodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2044 "socketmodule.c"
      case 8: // $bb8
        var $32=___errno_location(); //@line 2045 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2045 "socketmodule.c"
        HEAP[$res]=$33; //@line 2045 "socketmodule.c"
        __lastLabel__ = 8; __label__ = 11; break; //@line 2045 "socketmodule.c"
      case 9: // $bb9
        HEAP[$res]=11; //@line 2048 "socketmodule.c"
        __label__ = 13; break; //@line 2048 "socketmodule.c"
      case 10: // $bb10thread_pre_split
        var $_pr=HEAP[$res];
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb10
        var $34=__lastLabel__ == 10 ? $_pr : (__lastLabel__ == 8 ? $33 : ($8));
        var $35=($34) < 0; //@line 2052 "socketmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2052 "socketmodule.c"
      case 12: // $bb11
        var $36=___errno_location(); //@line 2053 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2053 "socketmodule.c"
        HEAP[$res]=$37; //@line 2053 "socketmodule.c"
        __label__ = 13; break; //@line 2053 "socketmodule.c"
      case 13: // $bb12
        var $38=$timeoutp_addr; //@line 2056 "socketmodule.c"
        var $39=$timeout; //@line 2056 "socketmodule.c"
        HEAP[$38]=$39; //@line 2056 "socketmodule.c"
        var $40=HEAP[$res]; //@line 2058 "socketmodule.c"
        $0=$40; //@line 2058 "socketmodule.c"
        var $41=$0; //@line 2058 "socketmodule.c"
        $retval=$41; //@line 2058 "socketmodule.c"
        var $retval13=$retval; //@line 2058 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2058 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0;
        var $addrbuf=__stackBase__;
        var $addrlen=__stackBase__+128;
        var $res;
        var $timeout=__stackBase__+132;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 2071 "socketmodule.c"
        var $1=$s_addr; //@line 2071 "socketmodule.c"
        var $2=$addro_addr; //@line 2071 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2071 "socketmodule.c"
        var $4=($3)==0; //@line 2071 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2071 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2072 "socketmodule.c"
        __label__ = 7; break; //@line 2072 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2075 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2075 "socketmodule.c"
        var $6=$s_addr; //@line 2075 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2075 "socketmodule.c"
        $res=$7; //@line 2075 "socketmodule.c"
        var $8=HEAP[$timeout]; //@line 2078 "socketmodule.c"
        var $9=($8)==1; //@line 2078 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2078 "socketmodule.c"
      case 3: // $bb6
        var $10=HEAP[_socket_timeout]; //@line 2079 "socketmodule.c"
        _PyErr_SetString($10, __str35); //@line 2079 "socketmodule.c"
        $0=0; //@line 2080 "socketmodule.c"
        __label__ = 7; break; //@line 2080 "socketmodule.c"
      case 4: // $bb7
        var $11=$res; //@line 2082 "socketmodule.c"
        var $12=($11)!=0; //@line 2082 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2082 "socketmodule.c"
      case 5: // $bb8
        var $13=$s_addr; //@line 2083 "socketmodule.c"
        var $14=$13+24; //@line 2083 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2083 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2083 "socketmodule.c"
        $0=$16; //@line 2083 "socketmodule.c"
        __label__ = 7; break; //@line 2083 "socketmodule.c"
      case 6: // $bb9
        var $17=HEAP[__Py_NoneStruct]; //@line 2084 "socketmodule.c"
        var $18=($17) + 1; //@line 2084 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$18; //@line 2084 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2085 "socketmodule.c"
        __label__ = 7; break; //@line 2085 "socketmodule.c"
      case 7: // $bb10
        var $19=$0; //@line 2072 "socketmodule.c"
        $retval=$19; //@line 2072 "socketmodule.c"
        var $retval11=$retval; //@line 2072 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2072 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect_ex($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0;
        var $addrbuf=__stackBase__;
        var $addrlen=__stackBase__+128;
        var $res;
        var $timeout=__stackBase__+132;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 2105 "socketmodule.c"
        var $1=$s_addr; //@line 2105 "socketmodule.c"
        var $2=$addro_addr; //@line 2105 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2105 "socketmodule.c"
        var $4=($3)==0; //@line 2105 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2105 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2106 "socketmodule.c"
        __label__ = 6; break; //@line 2106 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2109 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2109 "socketmodule.c"
        var $6=$s_addr; //@line 2109 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2109 "socketmodule.c"
        $res=$7; //@line 2109 "socketmodule.c"
        var $8=$res; //@line 2115 "socketmodule.c"
        var $9=($8)==4; //@line 2115 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 3: // $bb6
        var $10=_PyErr_CheckSignals(); //@line 2115 "socketmodule.c"
        var $11=($10)!=0; //@line 2115 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 4: // $bb7
        $0=0; //@line 2116 "socketmodule.c"
        __label__ = 6; break; //@line 2116 "socketmodule.c"
      case 5: // $bb8
        var $12=$res; //@line 2119 "socketmodule.c"
        var $13=_PyInt_FromLong($12); //@line 2119 "socketmodule.c"
        $0=$13; //@line 2119 "socketmodule.c"
        __label__ = 6; break; //@line 2119 "socketmodule.c"
      case 6: // $bb9
        var $14=$0; //@line 2106 "socketmodule.c"
        $retval=$14; //@line 2106 "socketmodule.c"
        var $retval10=$retval; //@line 2106 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2106 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_fileno($s) {
    ;
    var __label__;
  
    var $s_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    var $1=$s_addr; //@line 2135 "socketmodule.c"
    var $2=$1+8; //@line 2135 "socketmodule.c"
    var $3=HEAP[$2]; //@line 2135 "socketmodule.c"
    var $4=_PyInt_FromLong($3); //@line 2135 "socketmodule.c"
    $0=$4; //@line 2135 "socketmodule.c"
    var $5=$0; //@line 2135 "socketmodule.c"
    $retval=$5; //@line 2135 "socketmodule.c"
    var $retval1=$retval; //@line 2135 "socketmodule.c"
    ;
    return $retval1; //@line 2135 "socketmodule.c"
  }
  

  function _sock_dup($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr_i;
        var $family_addr_i;
        var $type_addr_i;
        var $proto_addr_i;
        var $retval_i;
        var $0;
        var $s_i;
        var $s_addr;
        var $retval;
        var $1;
        var $newfd;
        var $sock;
        $s_addr=$s;
        var $2=$s_addr; //@line 2156 "socketmodule.c"
        var $3=$2+8; //@line 2156 "socketmodule.c"
        var $4=HEAP[$3]; //@line 2156 "socketmodule.c"
        var $5=_dup($4); //@line 2156 "socketmodule.c"
        $newfd=$5; //@line 2156 "socketmodule.c"
        var $6=$newfd; //@line 2157 "socketmodule.c"
        var $7=($6) < 0; //@line 2157 "socketmodule.c"
        var $8=$s_addr; //@line 2158 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2157 "socketmodule.c"
      case 1: // $bb
        var $9=$8+24; //@line 2158 "socketmodule.c"
        var $10=HEAP[$9]; //@line 2158 "socketmodule.c"
        var $11=FUNCTION_TABLE[$10](); //@line 2158 "socketmodule.c"
        $1=$11; //@line 2158 "socketmodule.c"
        __label__ = 7; break; //@line 2158 "socketmodule.c"
      case 2: // $bb1
        var $12=$8+20; //@line 2159 "socketmodule.c"
        var $13=HEAP[$12]; //@line 2159 "socketmodule.c"
        var $14=$s_addr; //@line 2159 "socketmodule.c"
        var $15=$14+16; //@line 2159 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2159 "socketmodule.c"
        var $17=$s_addr; //@line 2159 "socketmodule.c"
        var $18=$17+12; //@line 2159 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2159 "socketmodule.c"
        var $20=$newfd; //@line 2159 "socketmodule.c"
        $fd_addr_i=$20;
        $family_addr_i=$19;
        $type_addr_i=$16;
        $proto_addr_i=$13;
        var $21=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $22=$21; //@line 757 "socketmodule.c"
        $s_i=$22; //@line 757 "socketmodule.c"
        var $23=$s_i; //@line 759 "socketmodule.c"
        var $24=($23)!=0; //@line 759 "socketmodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 759 "socketmodule.c"
      case 3: // $bb_i
        var $25=$s_i; //@line 760 "socketmodule.c"
        var $26=$fd_addr_i; //@line 760 "socketmodule.c"
        var $27=$family_addr_i; //@line 760 "socketmodule.c"
        var $28=$type_addr_i; //@line 760 "socketmodule.c"
        var $29=$proto_addr_i; //@line 760 "socketmodule.c"
        _init_sockobject($25, $26, $27, $28, $29); //@line 760 "socketmodule.c"
        __label__ = 4; break; //@line 760 "socketmodule.c"
      case 4: // $new_sockobject_exit
        var $30=$s_i; //@line 761 "socketmodule.c"
        $0=$30; //@line 761 "socketmodule.c"
        var $31=$0; //@line 761 "socketmodule.c"
        $retval_i=$31; //@line 761 "socketmodule.c"
        var $retval2_i=$retval_i; //@line 761 "socketmodule.c"
        var $32=$retval2_i; //@line 2159 "socketmodule.c"
        $sock=$32; //@line 2159 "socketmodule.c"
        var $33=($32)==0; //@line 2163 "socketmodule.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2163 "socketmodule.c"
      case 5: // $bb2
        var $34=$newfd; //@line 2164 "socketmodule.c"
        var $35=_close($34); //@line 2164 "socketmodule.c"
        __label__ = 6; break; //@line 2164 "socketmodule.c"
      case 6: // $bb3
        var $36=$sock; //@line 2165 "socketmodule.c"
        $1=$36; //@line 2165 "socketmodule.c"
        __label__ = 7; break; //@line 2165 "socketmodule.c"
      case 7: // $bb4
        var $37=$1; //@line 2158 "socketmodule.c"
        $retval=$37; //@line 2158 "socketmodule.c"
        var $retval5=$retval; //@line 2158 "socketmodule.c"
        ;
        return $retval5; //@line 2158 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockname($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $len_ret_addr_i;
        var $retval_i;
        var $0;
        var $s_addr;
        var $retval;
        var $1=__stackBase__;
        var $2;
        var $addrbuf=__stackBase__+4;
        var $res;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        var $3=$s_addr; //@line 2185 "socketmodule.c"
        $s_addr_i=$3;
        $len_ret_addr_i=$addrlen;
        var $4=$s_addr_i; //@line 1544 "socketmodule.c"
        var $5=$4+12; //@line 1544 "socketmodule.c"
        var $6=HEAP[$5]; //@line 1544 "socketmodule.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 3; break;
        }
        else if ($6 == 10) {
          __label__ = 4; break;
        }
        else if ($6 == 16) {
          __label__ = 2; break;
        }
        else if ($6 == 17) {
          __label__ = 5; break;
        }
        else if ($6 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb_i
        var $7=$len_ret_addr_i; //@line 1549 "socketmodule.c"
        HEAP[$7]=110; //@line 1549 "socketmodule.c"
        $0=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1_i
        var $8=$len_ret_addr_i; //@line 1556 "socketmodule.c"
        HEAP[$8]=12; //@line 1556 "socketmodule.c"
        $0=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2_i
        var $9=$len_ret_addr_i; //@line 1563 "socketmodule.c"
        HEAP[$9]=16; //@line 1563 "socketmodule.c"
        $0=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3_i
        var $10=$len_ret_addr_i; //@line 1570 "socketmodule.c"
        HEAP[$10]=28; //@line 1570 "socketmodule.c"
        $0=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4_i
        var $11=$len_ret_addr_i; //@line 1607 "socketmodule.c"
        HEAP[$11]=20; //@line 1607 "socketmodule.c"
        $0=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5_i
        var $12=$len_ret_addr_i; //@line 1615 "socketmodule.c"
        HEAP[$12]=16; //@line 1615 "socketmodule.c"
        $0=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb
        var $13=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($13, __str34); //@line 1623 "socketmodule.c"
        $0=0; //@line 1624 "socketmodule.c"
        $retval_i=0; //@line 1550 "socketmodule.c"
        $2=0; //@line 2186 "socketmodule.c"
        __label__ = 11; break; //@line 2186 "socketmodule.c"
      case 8: // $bb1
        $retval_i=1; //@line 1550 "socketmodule.c"
        var $14=HEAP[$addrlen]; //@line 2187 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2187 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $14, 1, 0); //@line 2187 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2189 "socketmodule.c"
        var $15=$1; //@line 2189 "socketmodule.c"
        HEAP[$15]=$addrbuf3; //@line 2189 "socketmodule.c"
        var $16=$s_addr; //@line 2189 "socketmodule.c"
        var $17=$16+8; //@line 2189 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2189 "socketmodule.c"
        var $elt=$1; //@line 2189 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2189 "socketmodule.c"
        var $19=_getsockname($18, $val, $addrlen); //@line 2189 "socketmodule.c"
        $res=$19; //@line 2189 "socketmodule.c"
        var $20=($19) < 0; //@line 2191 "socketmodule.c"
        var $21=$s_addr; //@line 2192 "socketmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2191 "socketmodule.c"
      case 9: // $bb5
        var $22=$21+24; //@line 2192 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2192 "socketmodule.c"
        var $24=FUNCTION_TABLE[$23](); //@line 2192 "socketmodule.c"
        $2=$24; //@line 2192 "socketmodule.c"
        __label__ = 11; break; //@line 2192 "socketmodule.c"
      case 10: // $bb6
        var $25=$21+20; //@line 2193 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2193 "socketmodule.c"
        var $27=HEAP[$addrlen]; //@line 2193 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2193 "socketmodule.c"
        var $28=$s_addr; //@line 2193 "socketmodule.c"
        var $29=$28+8; //@line 2193 "socketmodule.c"
        var $30=HEAP[$29]; //@line 2193 "socketmodule.c"
        var $31=_makesockaddr($30, $addrbuf7, $27, $26); //@line 2193 "socketmodule.c"
        $2=$31; //@line 2193 "socketmodule.c"
        __label__ = 11; break; //@line 2193 "socketmodule.c"
      case 11: // $bb9
        var $32=$2; //@line 2186 "socketmodule.c"
        $retval=$32; //@line 2186 "socketmodule.c"
        var $retval10=$retval; //@line 2186 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2186 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getpeername($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $len_ret_addr_i;
        var $retval_i;
        var $0;
        var $s_addr;
        var $retval;
        var $1=__stackBase__;
        var $2;
        var $addrbuf=__stackBase__+4;
        var $res;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        var $3=$s_addr; //@line 2214 "socketmodule.c"
        $s_addr_i=$3;
        $len_ret_addr_i=$addrlen;
        var $4=$s_addr_i; //@line 1544 "socketmodule.c"
        var $5=$4+12; //@line 1544 "socketmodule.c"
        var $6=HEAP[$5]; //@line 1544 "socketmodule.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 3; break;
        }
        else if ($6 == 10) {
          __label__ = 4; break;
        }
        else if ($6 == 16) {
          __label__ = 2; break;
        }
        else if ($6 == 17) {
          __label__ = 5; break;
        }
        else if ($6 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb_i
        var $7=$len_ret_addr_i; //@line 1549 "socketmodule.c"
        HEAP[$7]=110; //@line 1549 "socketmodule.c"
        $0=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1_i
        var $8=$len_ret_addr_i; //@line 1556 "socketmodule.c"
        HEAP[$8]=12; //@line 1556 "socketmodule.c"
        $0=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2_i
        var $9=$len_ret_addr_i; //@line 1563 "socketmodule.c"
        HEAP[$9]=16; //@line 1563 "socketmodule.c"
        $0=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3_i
        var $10=$len_ret_addr_i; //@line 1570 "socketmodule.c"
        HEAP[$10]=28; //@line 1570 "socketmodule.c"
        $0=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4_i
        var $11=$len_ret_addr_i; //@line 1607 "socketmodule.c"
        HEAP[$11]=20; //@line 1607 "socketmodule.c"
        $0=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5_i
        var $12=$len_ret_addr_i; //@line 1615 "socketmodule.c"
        HEAP[$12]=16; //@line 1615 "socketmodule.c"
        $0=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb
        var $13=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($13, __str34); //@line 1623 "socketmodule.c"
        $0=0; //@line 1624 "socketmodule.c"
        $retval_i=0; //@line 1550 "socketmodule.c"
        $2=0; //@line 2215 "socketmodule.c"
        __label__ = 11; break; //@line 2215 "socketmodule.c"
      case 8: // $bb1
        $retval_i=1; //@line 1550 "socketmodule.c"
        var $14=HEAP[$addrlen]; //@line 2216 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2216 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $14, 1, 0); //@line 2216 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2218 "socketmodule.c"
        var $15=$1; //@line 2218 "socketmodule.c"
        HEAP[$15]=$addrbuf3; //@line 2218 "socketmodule.c"
        var $16=$s_addr; //@line 2218 "socketmodule.c"
        var $17=$16+8; //@line 2218 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2218 "socketmodule.c"
        var $elt=$1; //@line 2218 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2218 "socketmodule.c"
        var $19=_getpeername($18, $val, $addrlen); //@line 2218 "socketmodule.c"
        $res=$19; //@line 2218 "socketmodule.c"
        var $20=($19) < 0; //@line 2220 "socketmodule.c"
        var $21=$s_addr; //@line 2221 "socketmodule.c"
        if ($20) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2220 "socketmodule.c"
      case 9: // $bb5
        var $22=$21+24; //@line 2221 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2221 "socketmodule.c"
        var $24=FUNCTION_TABLE[$23](); //@line 2221 "socketmodule.c"
        $2=$24; //@line 2221 "socketmodule.c"
        __label__ = 11; break; //@line 2221 "socketmodule.c"
      case 10: // $bb6
        var $25=$21+20; //@line 2222 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2222 "socketmodule.c"
        var $27=HEAP[$addrlen]; //@line 2222 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2222 "socketmodule.c"
        var $28=$s_addr; //@line 2222 "socketmodule.c"
        var $29=$28+8; //@line 2222 "socketmodule.c"
        var $30=HEAP[$29]; //@line 2222 "socketmodule.c"
        var $31=_makesockaddr($30, $addrbuf7, $27, $26); //@line 2222 "socketmodule.c"
        $2=$31; //@line 2222 "socketmodule.c"
        __label__ = 11; break; //@line 2222 "socketmodule.c"
      case 11: // $bb9
        var $32=$2; //@line 2215 "socketmodule.c"
        $retval=$32; //@line 2215 "socketmodule.c"
        var $retval10=$retval; //@line 2215 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2215 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_listen($s, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $backlog;
        var $res;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 2243 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2243 "socketmodule.c"
        $backlog=$2; //@line 2243 "socketmodule.c"
        var $3=$backlog; //@line 2244 "socketmodule.c"
        var $4=($3)==-1; //@line 2244 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 2244 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2244 "socketmodule.c"
        var $6=($5)!=0; //@line 2244 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2244 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 2245 "socketmodule.c"
        __label__ = 9; break; //@line 2245 "socketmodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$backlog;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $7=__lastLabel__ == 3 ? $_pr : ($3);
        var $8=($7) < 0; //@line 2249 "socketmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2249 "socketmodule.c"
      case 5: // $bb3
        $backlog=0; //@line 2250 "socketmodule.c"
        __label__ = 6; break; //@line 2250 "socketmodule.c"
      case 6: // $bb4
        var $9=$s_addr; //@line 2251 "socketmodule.c"
        var $10=$9+8; //@line 2251 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2251 "socketmodule.c"
        var $12=$backlog; //@line 2251 "socketmodule.c"
        var $13=_listen($11, $12); //@line 2251 "socketmodule.c"
        $res=$13; //@line 2251 "socketmodule.c"
        var $14=($13) < 0; //@line 2253 "socketmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2253 "socketmodule.c"
      case 7: // $bb5
        var $15=$s_addr; //@line 2254 "socketmodule.c"
        var $16=$15+24; //@line 2254 "socketmodule.c"
        var $17=HEAP[$16]; //@line 2254 "socketmodule.c"
        var $18=FUNCTION_TABLE[$17](); //@line 2254 "socketmodule.c"
        $0=$18; //@line 2254 "socketmodule.c"
        __label__ = 9; break; //@line 2254 "socketmodule.c"
      case 8: // $bb6
        var $19=HEAP[__Py_NoneStruct]; //@line 2255 "socketmodule.c"
        var $20=($19) + 1; //@line 2255 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$20; //@line 2255 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2256 "socketmodule.c"
        __label__ = 9; break; //@line 2256 "socketmodule.c"
      case 9: // $bb7
        var $21=$0; //@line 2245 "socketmodule.c"
        $retval=$21; //@line 2245 "socketmodule.c"
        var $retval8=$retval; //@line 2245 "socketmodule.c"
        ;
        return $retval8; //@line 2245 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_makefile($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $mode=__stackBase__;
        var $bufsize=__stackBase__+4;
        var $fd;
        var $fp;
        var $f;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$mode]=__str41; //@line 2280 "socketmodule.c"
        HEAP[$bufsize]=-1; //@line 2281 "socketmodule.c"
        var $1=$args_addr; //@line 2294 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str42, $mode, $bufsize); //@line 2294 "socketmodule.c"
        var $3=($2)==0; //@line 2294 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2294 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2295 "socketmodule.c"
        __label__ = 10; break; //@line 2295 "socketmodule.c"
      case 2: // $bb1
        var $4=$s_addr; //@line 2310 "socketmodule.c"
        var $5=$4+8; //@line 2310 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2310 "socketmodule.c"
        var $7=_dup($6); //@line 2310 "socketmodule.c"
        $fd=$7; //@line 2310 "socketmodule.c"
        var $8=$fd; //@line 2310 "socketmodule.c"
        var $9=($8) < 0; //@line 2310 "socketmodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2310 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[$mode]; //@line 2310 "socketmodule.c"
        var $11=$fd; //@line 2310 "socketmodule.c"
        var $12=_fdopen($11, $10); //@line 2310 "socketmodule.c"
        $fp=$12; //@line 2310 "socketmodule.c"
        var $13=$fp; //@line 2310 "socketmodule.c"
        var $14=($13)==0; //@line 2310 "socketmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2310 "socketmodule.c"
      case 4: // $bb3
        var $_pr=$fd;
        var $15=($_pr) >= 0; //@line 2313 "socketmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2313 "socketmodule.c"
      case 5: // $bb4
        var $16=$fd; //@line 2314 "socketmodule.c"
        var $17=_close($16); //@line 2314 "socketmodule.c"
        __label__ = 6; break; //@line 2314 "socketmodule.c"
      case 6: // $bb5
        var $18=$s_addr; //@line 2315 "socketmodule.c"
        var $19=$18+24; //@line 2315 "socketmodule.c"
        var $20=HEAP[$19]; //@line 2315 "socketmodule.c"
        var $21=FUNCTION_TABLE[$20](); //@line 2315 "socketmodule.c"
        $0=$21; //@line 2315 "socketmodule.c"
        __label__ = 10; break; //@line 2315 "socketmodule.c"
      case 7: // $bb6
        var $22=HEAP[$mode]; //@line 2317 "socketmodule.c"
        var $23=$fp; //@line 2317 "socketmodule.c"
        var $24=_PyFile_FromFile($23, __str43, $22, (FUNCTION_TABLE_OFFSET + 4)); //@line 2317 "socketmodule.c"
        $f=$24; //@line 2317 "socketmodule.c"
        var $25=$f; //@line 2318 "socketmodule.c"
        var $26=($25)!=0; //@line 2318 "socketmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2318 "socketmodule.c"
      case 8: // $bb7
        var $27=HEAP[$bufsize]; //@line 2319 "socketmodule.c"
        var $28=$f; //@line 2319 "socketmodule.c"
        _PyFile_SetBufSize($28, $27); //@line 2319 "socketmodule.c"
        __label__ = 9; break; //@line 2319 "socketmodule.c"
      case 9: // $bb8
        var $29=$f; //@line 2320 "socketmodule.c"
        $0=$29; //@line 2320 "socketmodule.c"
        __label__ = 10; break; //@line 2320 "socketmodule.c"
      case 10: // $bb9
        var $30=$0; //@line 2295 "socketmodule.c"
        $retval=$30; //@line 2295 "socketmodule.c"
        var $retval10=$retval; //@line 2295 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2295 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_guts($s, $cbuf, $len, $flags) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $cbuf_addr;
        var $len_addr;
        var $flags_addr;
        var $retval;
        var $0;
        var $outlen;
        var $timeout;
        $s_addr=$s;
        $cbuf_addr=$cbuf;
        $len_addr=$len;
        $flags_addr=$flags;
        $outlen=-1; //@line 2342 "socketmodule.c"
        var $1=$s_addr; //@line 2356 "socketmodule.c"
        var $2=_internal_select($1, 0); //@line 2356 "socketmodule.c"
        $timeout=$2; //@line 2356 "socketmodule.c"
        var $3=$timeout; //@line 2357 "socketmodule.c"
        var $4=($3)==0; //@line 2357 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 2; break; } //@line 2357 "socketmodule.c"
      case 1: // $bb
        var $5=$len_addr; //@line 2358 "socketmodule.c"
        var $6=$s_addr; //@line 2358 "socketmodule.c"
        var $7=$6+8; //@line 2358 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2358 "socketmodule.c"
        var $9=$cbuf_addr; //@line 2358 "socketmodule.c"
        var $10=$flags_addr; //@line 2358 "socketmodule.c"
        var $11=_recv($8, $9, $5, $10); //@line 2358 "socketmodule.c"
        $outlen=$11; //@line 2358 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 1; __label__ = 2; break; //@line 2358 "socketmodule.c"
      case 2: // $bb1
        var $12=__lastLabel__ == 1 ? $_pr : ($3);
        var $13=($12)==1; //@line 2361 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2361 "socketmodule.c"
      case 3: // $bb2
        var $14=HEAP[_socket_timeout]; //@line 2362 "socketmodule.c"
        _PyErr_SetString($14, __str35); //@line 2362 "socketmodule.c"
        $0=-1; //@line 2363 "socketmodule.c"
        __label__ = 7; break; //@line 2363 "socketmodule.c"
      case 4: // $bb3
        var $15=$outlen; //@line 2365 "socketmodule.c"
        var $16=($15) < 0; //@line 2365 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2365 "socketmodule.c"
      case 5: // $bb4
        var $17=$s_addr; //@line 2368 "socketmodule.c"
        var $18=$17+24; //@line 2368 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2368 "socketmodule.c"
        var $20=FUNCTION_TABLE[$19](); //@line 2368 "socketmodule.c"
        $0=-1; //@line 2369 "socketmodule.c"
        __label__ = 7; break; //@line 2369 "socketmodule.c"
      case 6: // $bb5
        var $21=$outlen; //@line 2411 "socketmodule.c"
        $0=$21; //@line 2411 "socketmodule.c"
        __label__ = 7; break; //@line 2411 "socketmodule.c"
      case 7: // $bb6
        var $22=$0; //@line 2363 "socketmodule.c"
        $retval=$22; //@line 2363 "socketmodule.c"
        var $retval7=$retval; //@line 2363 "socketmodule.c"
        ;
        return $retval7; //@line 2363 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $outlen;
        var $buf=__stackBase__+8;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$flags]=0; //@line 2420 "socketmodule.c"
        var $1=$args_addr; //@line 2424 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str44, $recvlen, $flags); //@line 2424 "socketmodule.c"
        var $3=($2)==0; //@line 2424 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2424 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2425 "socketmodule.c"
        __label__ = 14; break; //@line 2425 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2427 "socketmodule.c"
        var $5=($4) < 0; //@line 2427 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2427 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2428 "socketmodule.c"
        _PyErr_SetString($6, __str45); //@line 2428 "socketmodule.c"
        $0=0; //@line 2430 "socketmodule.c"
        __label__ = 14; break; //@line 2430 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2434 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2434 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2434 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2435 "socketmodule.c"
        var $10=($9)==0; //@line 2435 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2435 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 2436 "socketmodule.c"
        __label__ = 14; break; //@line 2436 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2439 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2439 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2439 "socketmodule.c"
        var $14=$13; //@line 2439 "socketmodule.c"
        var $15=$14+20; //@line 2439 "socketmodule.c"
        var $16=$15; //@line 2439 "socketmodule.c"
        var $17=$s_addr; //@line 2439 "socketmodule.c"
        var $18=_sock_recv_guts($17, $16, $12, $11); //@line 2439 "socketmodule.c"
        $outlen=$18; //@line 2439 "socketmodule.c"
        var $19=$outlen; //@line 2440 "socketmodule.c"
        var $20=($19) < 0; //@line 2440 "socketmodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2440 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $22=$21; //@line 2443 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2443 "socketmodule.c"
        var $24=($23) - 1; //@line 2443 "socketmodule.c"
        var $25=$21; //@line 2443 "socketmodule.c"
        HEAP[$25]=$24; //@line 2443 "socketmodule.c"
        var $26=$21; //@line 2443 "socketmodule.c"
        var $27=HEAP[$26]; //@line 2443 "socketmodule.c"
        var $28=($27)==0; //@line 2443 "socketmodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2443 "socketmodule.c"
      case 8: // $bb7
        var $29=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $30=$29+4; //@line 2443 "socketmodule.c"
        var $31=HEAP[$30]; //@line 2443 "socketmodule.c"
        var $32=$31+24; //@line 2443 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2443 "socketmodule.c"
        var $34=HEAP[$buf]; //@line 2443 "socketmodule.c"
        FUNCTION_TABLE[$33]($34); //@line 2443 "socketmodule.c"
        __label__ = 9; break; //@line 2443 "socketmodule.c"
      case 9: // $bb8
        $0=0; //@line 2444 "socketmodule.c"
        __label__ = 14; break; //@line 2444 "socketmodule.c"
      case 10: // $bb9
        var $35=HEAP[$recvlen]; //@line 2446 "socketmodule.c"
        var $36=$outlen; //@line 2446 "socketmodule.c"
        var $37=($36)!=($35); //@line 2446 "socketmodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2446 "socketmodule.c"
      case 11: // $bb10
        var $38=$outlen; //@line 2449 "socketmodule.c"
        var $39=__PyString_Resize($buf, $38); //@line 2449 "socketmodule.c"
        var $40=($39) < 0; //@line 2449 "socketmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2449 "socketmodule.c"
      case 12: // $bb11
        $0=0; //@line 2451 "socketmodule.c"
        __label__ = 14; break; //@line 2451 "socketmodule.c"
      case 13: // $bb12
        var $41=HEAP[$buf]; //@line 2454 "socketmodule.c"
        $0=$41; //@line 2454 "socketmodule.c"
        __label__ = 14; break; //@line 2454 "socketmodule.c"
      case 14: // $bb13
        var $42=$0; //@line 2425 "socketmodule.c"
        $retval=$42; //@line 2425 "socketmodule.c"
        var $retval14=$retval; //@line 2425 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2425 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $readlen;
        var $buf=__stackBase__+8;
        var $buflen;
        $s_addr=$s;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$recvlen]=0; //@line 2473 "socketmodule.c"
        HEAP[$flags]=0; //@line 2473 "socketmodule.c"
        var $1=$args_addr; //@line 2479 "socketmodule.c"
        var $2=$kwds_addr; //@line 2479 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str46, _kwlist_10873, $buf, $recvlen, $flags); //@line 2479 "socketmodule.c"
        var $4=($3)==0; //@line 2479 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2479 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2481 "socketmodule.c"
        __label__ = 14; break; //@line 2481 "socketmodule.c"
      case 2: // $bb1
        var $5=$buf+8; //@line 2482 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2482 "socketmodule.c"
        $buflen=$6; //@line 2482 "socketmodule.c"
        var $7=$buf; //@line 2483 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2483 "socketmodule.c"
        var $9=($8)==0; //@line 2483 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2483 "socketmodule.c"
      case 3: // $bb2
        var $10=$buflen; //@line 2483 "socketmodule.c"
        var $11=($10) <= 0; //@line 2483 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2483 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(__str50, __str51, 2483, ___PRETTY_FUNCTION___10879); //@line 2483 "socketmodule.c"
        throw "Reached an unreachable!" //@line 2483 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2485 "socketmodule.c"
        var $13=($12) < 0; //@line 2485 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2485 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2486 "socketmodule.c"
        _PyErr_SetString($14, __str52); //@line 2486 "socketmodule.c"
        __label__ = 13; break; //@line 2486 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2490 "socketmodule.c"
        var $16=($15)==0; //@line 2490 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2490 "socketmodule.c"
      case 8: // $bb7
        var $17=$buflen; //@line 2492 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2492 "socketmodule.c"
        __label__ = 9; break; //@line 2492 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$recvlen]; //@line 2496 "socketmodule.c"
        var $19=$buflen; //@line 2496 "socketmodule.c"
        var $20=($19) < ($18); //@line 2496 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2496 "socketmodule.c"
      case 10: // $bb9
        var $21=HEAP[_PyExc_ValueError]; //@line 2497 "socketmodule.c"
        _PyErr_SetString($21, __str53); //@line 2497 "socketmodule.c"
        __label__ = 13; break; //@line 2497 "socketmodule.c"
      case 11: // $bb10
        var $22=HEAP[$flags]; //@line 2503 "socketmodule.c"
        var $23=HEAP[$recvlen]; //@line 2503 "socketmodule.c"
        var $24=$buf; //@line 2503 "socketmodule.c"
        var $25=HEAP[$24]; //@line 2503 "socketmodule.c"
        var $26=$s_addr; //@line 2503 "socketmodule.c"
        var $27=_sock_recv_guts($26, $25, $23, $22); //@line 2503 "socketmodule.c"
        $readlen=$27; //@line 2503 "socketmodule.c"
        var $28=$readlen; //@line 2504 "socketmodule.c"
        var $29=($28) < 0; //@line 2504 "socketmodule.c"
        if ($29) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2504 "socketmodule.c"
      case 12: // $bb11
        _PyBuffer_Release($buf); //@line 2509 "socketmodule.c"
        var $30=$readlen; //@line 2512 "socketmodule.c"
        var $31=_PyInt_FromSsize_t($30); //@line 2512 "socketmodule.c"
        $0=$31; //@line 2512 "socketmodule.c"
        __label__ = 14; break; //@line 2512 "socketmodule.c"
      case 13: // $error
        _PyBuffer_Release($buf); //@line 2515 "socketmodule.c"
        $0=0; //@line 2516 "socketmodule.c"
        __label__ = 14; break; //@line 2516 "socketmodule.c"
      case 14: // $bb12
        var $32=$0; //@line 2481 "socketmodule.c"
        $retval=$32; //@line 2481 "socketmodule.c"
        var $retval13=$retval; //@line 2481 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2481 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_guts($s, $cbuf, $len, $flags, $addr) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr_i;
        var $len_ret_addr_i;
        var $retval_i;
        var $0;
        var $s_addr;
        var $cbuf_addr;
        var $len_addr;
        var $flags_addr;
        var $addr_addr;
        var $retval;
        var $1=__stackBase__;
        var $2;
        var $addrbuf=__stackBase__+4;
        var $timeout;
        var $n;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        $cbuf_addr=$cbuf;
        $len_addr=$len;
        $flags_addr=$flags;
        $addr_addr=$addr;
        $n=-1; //@line 2546 "socketmodule.c"
        var $3=$addr_addr; //@line 2549 "socketmodule.c"
        HEAP[$3]=0; //@line 2549 "socketmodule.c"
        var $4=$s_addr; //@line 2551 "socketmodule.c"
        $s_addr_i=$4;
        $len_ret_addr_i=$addrlen;
        var $5=$s_addr_i; //@line 1544 "socketmodule.c"
        var $6=$5+12; //@line 1544 "socketmodule.c"
        var $7=HEAP[$6]; //@line 1544 "socketmodule.c"
        if ($7 == 1) {
          __label__ = 1; break;
        }
        else if ($7 == 2) {
          __label__ = 3; break;
        }
        else if ($7 == 10) {
          __label__ = 4; break;
        }
        else if ($7 == 16) {
          __label__ = 2; break;
        }
        else if ($7 == 17) {
          __label__ = 5; break;
        }
        else if ($7 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb_i
        var $8=$len_ret_addr_i; //@line 1549 "socketmodule.c"
        HEAP[$8]=110; //@line 1549 "socketmodule.c"
        $0=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1_i
        var $9=$len_ret_addr_i; //@line 1556 "socketmodule.c"
        HEAP[$9]=12; //@line 1556 "socketmodule.c"
        $0=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2_i
        var $10=$len_ret_addr_i; //@line 1563 "socketmodule.c"
        HEAP[$10]=16; //@line 1563 "socketmodule.c"
        $0=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3_i
        var $11=$len_ret_addr_i; //@line 1570 "socketmodule.c"
        HEAP[$11]=28; //@line 1570 "socketmodule.c"
        $0=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4_i
        var $12=$len_ret_addr_i; //@line 1607 "socketmodule.c"
        HEAP[$12]=20; //@line 1607 "socketmodule.c"
        $0=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5_i
        var $13=$len_ret_addr_i; //@line 1615 "socketmodule.c"
        HEAP[$13]=16; //@line 1615 "socketmodule.c"
        $0=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb
        var $14=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($14, __str34); //@line 1623 "socketmodule.c"
        $0=0; //@line 1624 "socketmodule.c"
        $retval_i=0; //@line 1550 "socketmodule.c"
        $2=-1; //@line 2552 "socketmodule.c"
        __label__ = 17; break; //@line 2552 "socketmodule.c"
      case 8: // $bb1
        $retval_i=1; //@line 1550 "socketmodule.c"
        var $15=HEAP[$addrlen]; //@line 2560 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2560 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $15, 1, 0); //@line 2560 "socketmodule.c"
        var $16=$s_addr; //@line 2561 "socketmodule.c"
        var $17=_internal_select($16, 0); //@line 2561 "socketmodule.c"
        $timeout=$17; //@line 2561 "socketmodule.c"
        var $18=($17)==0; //@line 2562 "socketmodule.c"
        if ($18) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 10; break; } //@line 2562 "socketmodule.c"
      case 9: // $bb3
        var $19=$1; //@line 2568 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2568 "socketmodule.c"
        HEAP[$19]=$addrbuf4; //@line 2568 "socketmodule.c"
        var $20=$len_addr; //@line 2568 "socketmodule.c"
        var $21=$s_addr; //@line 2568 "socketmodule.c"
        var $22=$21+8; //@line 2568 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2568 "socketmodule.c"
        var $24=$cbuf_addr; //@line 2568 "socketmodule.c"
        var $25=$flags_addr; //@line 2568 "socketmodule.c"
        var $elt=$1; //@line 2568 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2568 "socketmodule.c"
        var $26=_recvfrom($23, $24, $20, $25, $val, $addrlen); //@line 2568 "socketmodule.c"
        $n=$26; //@line 2568 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 9; __label__ = 10; break; //@line 2568 "socketmodule.c"
      case 10: // $bb5
        var $27=__lastLabel__ == 9 ? $_pr : ($17);
        var $28=($27)==1; //@line 2578 "socketmodule.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2578 "socketmodule.c"
      case 11: // $bb6
        var $29=HEAP[_socket_timeout]; //@line 2579 "socketmodule.c"
        _PyErr_SetString($29, __str35); //@line 2579 "socketmodule.c"
        $2=-1; //@line 2580 "socketmodule.c"
        __label__ = 17; break; //@line 2580 "socketmodule.c"
      case 12: // $bb7
        var $30=$n; //@line 2582 "socketmodule.c"
        var $31=($30) < 0; //@line 2582 "socketmodule.c"
        var $32=$s_addr; //@line 2583 "socketmodule.c"
        if ($31) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2582 "socketmodule.c"
      case 13: // $bb8
        var $33=$32+24; //@line 2583 "socketmodule.c"
        var $34=HEAP[$33]; //@line 2583 "socketmodule.c"
        var $35=FUNCTION_TABLE[$34](); //@line 2583 "socketmodule.c"
        $2=-1; //@line 2584 "socketmodule.c"
        __label__ = 17; break; //@line 2584 "socketmodule.c"
      case 14: // $bb9
        var $36=$32+20; //@line 2587 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2587 "socketmodule.c"
        var $38=HEAP[$addrlen]; //@line 2587 "socketmodule.c"
        var $addrbuf10=$addrbuf; //@line 2587 "socketmodule.c"
        var $39=$s_addr; //@line 2587 "socketmodule.c"
        var $40=$39+8; //@line 2587 "socketmodule.c"
        var $41=HEAP[$40]; //@line 2587 "socketmodule.c"
        var $42=_makesockaddr($41, $addrbuf10, $38, $37); //@line 2587 "socketmodule.c"
        var $43=$addr_addr; //@line 2587 "socketmodule.c"
        HEAP[$43]=$42; //@line 2587 "socketmodule.c"
        var $44=$addr_addr; //@line 2587 "socketmodule.c"
        var $45=HEAP[$44]; //@line 2587 "socketmodule.c"
        var $46=($45)==0; //@line 2587 "socketmodule.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2587 "socketmodule.c"
      case 15: // $bb12
        $2=-1; //@line 2589 "socketmodule.c"
        __label__ = 17; break; //@line 2589 "socketmodule.c"
      case 16: // $bb13
        var $47=$n; //@line 2591 "socketmodule.c"
        $2=$47; //@line 2591 "socketmodule.c"
        __label__ = 17; break; //@line 2591 "socketmodule.c"
      case 17: // $bb14
        var $48=$2; //@line 2552 "socketmodule.c"
        $retval=$48; //@line 2552 "socketmodule.c"
        var $retval15=$retval; //@line 2552 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 2552 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $addr=__stackBase__+4;
        var $ret;
        var $recvlen=__stackBase__+8;
        var $flags=__stackBase__+12;
        var $outlen;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$buf]=0; //@line 2599 "socketmodule.c"
        HEAP[$addr]=0; //@line 2600 "socketmodule.c"
        $ret=0; //@line 2601 "socketmodule.c"
        HEAP[$flags]=0; //@line 2602 "socketmodule.c"
        var $1=$args_addr; //@line 2605 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str54, $recvlen, $flags); //@line 2605 "socketmodule.c"
        var $3=($2)==0; //@line 2605 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2605 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2606 "socketmodule.c"
        __label__ = 17; break; //@line 2606 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2608 "socketmodule.c"
        var $5=($4) < 0; //@line 2608 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2608 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2609 "socketmodule.c"
        _PyErr_SetString($6, __str55); //@line 2609 "socketmodule.c"
        $0=0; //@line 2611 "socketmodule.c"
        __label__ = 17; break; //@line 2611 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2614 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2614 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2614 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2615 "socketmodule.c"
        var $10=($9)==0; //@line 2615 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2615 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 2616 "socketmodule.c"
        __label__ = 17; break; //@line 2616 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2618 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2618 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2618 "socketmodule.c"
        var $14=$13; //@line 2618 "socketmodule.c"
        var $15=$14+20; //@line 2618 "socketmodule.c"
        var $16=$15; //@line 2618 "socketmodule.c"
        var $17=$s_addr; //@line 2618 "socketmodule.c"
        var $18=_sock_recvfrom_guts($17, $16, $12, $11, $addr); //@line 2618 "socketmodule.c"
        $outlen=$18; //@line 2618 "socketmodule.c"
        var $19=$outlen; //@line 2620 "socketmodule.c"
        var $20=($19) < 0; //@line 2620 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2620 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$recvlen]; //@line 2624 "socketmodule.c"
        var $22=$outlen; //@line 2624 "socketmodule.c"
        var $23=($22)!=($21); //@line 2624 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2624 "socketmodule.c"
      case 8: // $bb7
        var $24=$outlen; //@line 2627 "socketmodule.c"
        var $25=__PyString_Resize($buf, $24); //@line 2627 "socketmodule.c"
        var $26=($25) < 0; //@line 2627 "socketmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2627 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$addr]; //@line 2632 "socketmodule.c"
        var $28=HEAP[$buf]; //@line 2632 "socketmodule.c"
        var $29=_PyTuple_Pack(2, $28, $27); //@line 2632 "socketmodule.c"
        $ret=$29; //@line 2632 "socketmodule.c"
        __label__ = 10; break; //@line 2634 "socketmodule.c"
      case 10: // $finally
        var $30=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $31=($30)!=0; //@line 2635 "socketmodule.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 11: // $bb9
        var $32=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $33=$32; //@line 2635 "socketmodule.c"
        var $34=HEAP[$33]; //@line 2635 "socketmodule.c"
        var $35=($34) - 1; //@line 2635 "socketmodule.c"
        var $36=$32; //@line 2635 "socketmodule.c"
        HEAP[$36]=$35; //@line 2635 "socketmodule.c"
        var $37=$32; //@line 2635 "socketmodule.c"
        var $38=HEAP[$37]; //@line 2635 "socketmodule.c"
        var $39=($38)==0; //@line 2635 "socketmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 12: // $bb10
        var $40=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $41=$40+4; //@line 2635 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2635 "socketmodule.c"
        var $43=$42+24; //@line 2635 "socketmodule.c"
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
        var $49=$48; //@line 2636 "socketmodule.c"
        var $50=HEAP[$49]; //@line 2636 "socketmodule.c"
        var $51=($50) - 1; //@line 2636 "socketmodule.c"
        var $52=$48; //@line 2636 "socketmodule.c"
        HEAP[$52]=$51; //@line 2636 "socketmodule.c"
        var $53=$48; //@line 2636 "socketmodule.c"
        var $54=HEAP[$53]; //@line 2636 "socketmodule.c"
        var $55=($54)==0; //@line 2636 "socketmodule.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2636 "socketmodule.c"
      case 15: // $bb13
        var $56=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $57=$56+4; //@line 2636 "socketmodule.c"
        var $58=HEAP[$57]; //@line 2636 "socketmodule.c"
        var $59=$58+24; //@line 2636 "socketmodule.c"
        var $60=HEAP[$59]; //@line 2636 "socketmodule.c"
        var $61=HEAP[$addr]; //@line 2636 "socketmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 2636 "socketmodule.c"
        __label__ = 16; break; //@line 2636 "socketmodule.c"
      case 16: // $bb14
        var $62=$ret; //@line 2637 "socketmodule.c"
        $0=$62; //@line 2637 "socketmodule.c"
        __label__ = 17; break; //@line 2637 "socketmodule.c"
      case 17: // $bb15
        var $63=$0; //@line 2606 "socketmodule.c"
        $retval=$63; //@line 2606 "socketmodule.c"
        var $retval16=$retval; //@line 2606 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2606 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $readlen;
        var $buf=__stackBase__+8;
        var $buflen;
        var $addr=__stackBase__+60;
        $s_addr=$s;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$recvlen]=0; //@line 2653 "socketmodule.c"
        HEAP[$flags]=0; //@line 2653 "socketmodule.c"
        HEAP[$addr]=0; //@line 2658 "socketmodule.c"
        var $1=$args_addr; //@line 2660 "socketmodule.c"
        var $2=$kwds_addr; //@line 2660 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str56, _kwlist_11020, $buf, $recvlen, $flags); //@line 2660 "socketmodule.c"
        var $4=($3)==0; //@line 2660 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2660 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2663 "socketmodule.c"
        __label__ = 15; break; //@line 2663 "socketmodule.c"
      case 2: // $bb1
        var $5=$buf+8; //@line 2664 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2664 "socketmodule.c"
        $buflen=$6; //@line 2664 "socketmodule.c"
        var $7=$buf; //@line 2665 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2665 "socketmodule.c"
        var $9=($8)==0; //@line 2665 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2665 "socketmodule.c"
      case 3: // $bb2
        var $10=$buflen; //@line 2665 "socketmodule.c"
        var $11=($10) <= 0; //@line 2665 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2665 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(__str50, __str51, 2665, ___PRETTY_FUNCTION___11027); //@line 2665 "socketmodule.c"
        throw "Reached an unreachable!" //@line 2665 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2667 "socketmodule.c"
        var $13=($12) < 0; //@line 2667 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2667 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2668 "socketmodule.c"
        _PyErr_SetString($14, __str57); //@line 2668 "socketmodule.c"
        __label__ = 11; break; //@line 2668 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2672 "socketmodule.c"
        var $16=($15)==0; //@line 2672 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2672 "socketmodule.c"
      case 8: // $bb7
        var $17=$buflen; //@line 2674 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2674 "socketmodule.c"
        __label__ = 9; break; //@line 2674 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$flags]; //@line 2677 "socketmodule.c"
        var $19=HEAP[$recvlen]; //@line 2677 "socketmodule.c"
        var $20=$buf; //@line 2677 "socketmodule.c"
        var $21=HEAP[$20]; //@line 2677 "socketmodule.c"
        var $22=$s_addr; //@line 2677 "socketmodule.c"
        var $23=_sock_recvfrom_guts($22, $21, $19, $18, $addr); //@line 2677 "socketmodule.c"
        $readlen=$23; //@line 2677 "socketmodule.c"
        var $24=($23) < 0; //@line 2678 "socketmodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2678 "socketmodule.c"
      case 10: // $bb9
        _PyBuffer_Release($buf); //@line 2683 "socketmodule.c"
        var $25=HEAP[$addr]; //@line 2686 "socketmodule.c"
        var $26=$readlen; //@line 2686 "socketmodule.c"
        var $27=_Py_BuildValue(__str58, $26, $25); //@line 2686 "socketmodule.c"
        $0=$27; //@line 2686 "socketmodule.c"
        __label__ = 15; break; //@line 2686 "socketmodule.c"
      case 11: // $error
        var $28=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $29=($28)!=0; //@line 2689 "socketmodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 12: // $bb10
        var $30=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $31=$30; //@line 2689 "socketmodule.c"
        var $32=HEAP[$31]; //@line 2689 "socketmodule.c"
        var $33=($32) - 1; //@line 2689 "socketmodule.c"
        var $34=$30; //@line 2689 "socketmodule.c"
        HEAP[$34]=$33; //@line 2689 "socketmodule.c"
        var $35=$30; //@line 2689 "socketmodule.c"
        var $36=HEAP[$35]; //@line 2689 "socketmodule.c"
        var $37=($36)==0; //@line 2689 "socketmodule.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 13: // $bb11
        var $38=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $39=$38+4; //@line 2689 "socketmodule.c"
        var $40=HEAP[$39]; //@line 2689 "socketmodule.c"
        var $41=$40+24; //@line 2689 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2689 "socketmodule.c"
        var $43=HEAP[$addr]; //@line 2689 "socketmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 2689 "socketmodule.c"
        __label__ = 14; break; //@line 2689 "socketmodule.c"
      case 14: // $bb12
        _PyBuffer_Release($buf); //@line 2690 "socketmodule.c"
        $0=0; //@line 2691 "socketmodule.c"
        __label__ = 15; break; //@line 2691 "socketmodule.c"
      case 15: // $bb13
        var $44=$0; //@line 2663 "socketmodule.c"
        $retval=$44; //@line 2663 "socketmodule.c"
        var $retval14=$retval; //@line 2663 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2663 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_send($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf;
        var $len;
        var $n;
        var $flags=__stackBase__;
        var $timeout;
        var $pbuf=__stackBase__+4;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2706 "socketmodule.c"
        HEAP[$flags]=0; //@line 2706 "socketmodule.c"
        var $1=$args_addr; //@line 2709 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str59, $pbuf, $flags); //@line 2709 "socketmodule.c"
        var $3=($2)==0; //@line 2709 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2709 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2710 "socketmodule.c"
        __label__ = 9; break; //@line 2710 "socketmodule.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 2716 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2716 "socketmodule.c"
        $buf=$5; //@line 2716 "socketmodule.c"
        var $6=$pbuf+8; //@line 2717 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2717 "socketmodule.c"
        $len=$7; //@line 2717 "socketmodule.c"
        var $8=$s_addr; //@line 2720 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2720 "socketmodule.c"
        $timeout=$9; //@line 2720 "socketmodule.c"
        var $10=$timeout; //@line 2721 "socketmodule.c"
        var $11=($10)==0; //@line 2721 "socketmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2721 "socketmodule.c"
      case 3: // $bb2
        var $12=HEAP[$flags]; //@line 2725 "socketmodule.c"
        var $13=$len; //@line 2725 "socketmodule.c"
        var $14=$s_addr; //@line 2725 "socketmodule.c"
        var $15=$14+8; //@line 2725 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2725 "socketmodule.c"
        var $17=$buf; //@line 2725 "socketmodule.c"
        var $18=_send($16, $17, $13, $12); //@line 2725 "socketmodule.c"
        $n=$18; //@line 2725 "socketmodule.c"
        __label__ = 4; break; //@line 2725 "socketmodule.c"
      case 4: // $bb3
        _PyBuffer_Release($pbuf); //@line 2729 "socketmodule.c"
        var $19=$timeout; //@line 2731 "socketmodule.c"
        var $20=($19)==1; //@line 2731 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2731 "socketmodule.c"
      case 5: // $bb4
        var $21=HEAP[_socket_timeout]; //@line 2732 "socketmodule.c"
        _PyErr_SetString($21, __str35); //@line 2732 "socketmodule.c"
        $0=0; //@line 2733 "socketmodule.c"
        __label__ = 9; break; //@line 2733 "socketmodule.c"
      case 6: // $bb5
        var $22=$n; //@line 2735 "socketmodule.c"
        var $23=($22) < 0; //@line 2735 "socketmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2735 "socketmodule.c"
      case 7: // $bb6
        var $24=$s_addr; //@line 2736 "socketmodule.c"
        var $25=$24+24; //@line 2736 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2736 "socketmodule.c"
        var $27=FUNCTION_TABLE[$26](); //@line 2736 "socketmodule.c"
        $0=$27; //@line 2736 "socketmodule.c"
        __label__ = 9; break; //@line 2736 "socketmodule.c"
      case 8: // $bb7
        var $28=$n; //@line 2737 "socketmodule.c"
        var $29=_PyInt_FromLong($28); //@line 2737 "socketmodule.c"
        $0=$29; //@line 2737 "socketmodule.c"
        __label__ = 9; break; //@line 2737 "socketmodule.c"
      case 9: // $bb8
        var $30=$0; //@line 2710 "socketmodule.c"
        $retval=$30; //@line 2710 "socketmodule.c"
        var $retval9=$retval; //@line 2710 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2710 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendall($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf;
        var $len;
        var $n;
        var $flags=__stackBase__;
        var $timeout;
        var $saved_errno;
        var $pbuf=__stackBase__+4;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2754 "socketmodule.c"
        HEAP[$flags]=0; //@line 2754 "socketmodule.c"
        var $1=$args_addr; //@line 2757 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str60, $pbuf, $flags); //@line 2757 "socketmodule.c"
        var $3=($2)==0; //@line 2757 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2757 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2758 "socketmodule.c"
        __label__ = 17; break; //@line 2758 "socketmodule.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 2759 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2759 "socketmodule.c"
        $buf=$5; //@line 2759 "socketmodule.c"
        var $6=$pbuf+8; //@line 2760 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2760 "socketmodule.c"
        $len=$7; //@line 2760 "socketmodule.c"
        __label__ = 3; break; //@line 2760 "socketmodule.c"
      case 3: // $bb2
        var $8=$s_addr; //@line 2769 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2769 "socketmodule.c"
        $timeout=$9; //@line 2769 "socketmodule.c"
        $n=-1; //@line 2770 "socketmodule.c"
        var $10=($9)==0; //@line 2771 "socketmodule.c"
        if ($10) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 5; break; } //@line 2771 "socketmodule.c"
      case 4: // $bb3
        var $11=HEAP[$flags]; //@line 2775 "socketmodule.c"
        var $12=$len; //@line 2775 "socketmodule.c"
        var $13=$s_addr; //@line 2775 "socketmodule.c"
        var $14=$13+8; //@line 2775 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2775 "socketmodule.c"
        var $16=$buf; //@line 2775 "socketmodule.c"
        var $17=_send($15, $16, $12, $11); //@line 2775 "socketmodule.c"
        $n=$17; //@line 2775 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 4; __label__ = 5; break; //@line 2775 "socketmodule.c"
      case 5: // $bb4
        var $18=__lastLabel__ == 4 ? $_pr : ($9);
        var $19=($18)==1; //@line 2779 "socketmodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2779 "socketmodule.c"
      case 6: // $bb5
        _PyBuffer_Release($pbuf); //@line 2780 "socketmodule.c"
        var $20=HEAP[_socket_timeout]; //@line 2781 "socketmodule.c"
        _PyErr_SetString($20, __str35); //@line 2781 "socketmodule.c"
        $0=0; //@line 2782 "socketmodule.c"
        __label__ = 17; break; //@line 2782 "socketmodule.c"
      case 7: // $bb6
        var $21=___errno_location(); //@line 2785 "socketmodule.c"
        var $22=HEAP[$21]; //@line 2785 "socketmodule.c"
        $saved_errno=$22; //@line 2785 "socketmodule.c"
        var $23=_PyErr_CheckSignals(); //@line 2789 "socketmodule.c"
        var $24=($23)!=0; //@line 2789 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2789 "socketmodule.c"
      case 8: // $bb7
        _PyBuffer_Release($pbuf); //@line 2790 "socketmodule.c"
        $0=0; //@line 2791 "socketmodule.c"
        __label__ = 17; break; //@line 2791 "socketmodule.c"
      case 9: // $bb8
        var $25=$n; //@line 2793 "socketmodule.c"
        var $26=($25) < 0; //@line 2793 "socketmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2793 "socketmodule.c"
      case 10: // $bb9
        var $27=$saved_errno; //@line 2795 "socketmodule.c"
        var $28=($27)==4; //@line 2795 "socketmodule.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2795 "socketmodule.c"
      case 11: // $bb10
        var $29=$buf; //@line 2800 "socketmodule.c"
        var $30=$n; //@line 2800 "socketmodule.c"
        var $31=$29+$30; //@line 2800 "socketmodule.c"
        $buf=$31; //@line 2800 "socketmodule.c"
        var $32=$len; //@line 2801 "socketmodule.c"
        var $33=$n; //@line 2801 "socketmodule.c"
        var $34=($32) - ($33); //@line 2801 "socketmodule.c"
        $len=$34; //@line 2801 "socketmodule.c"
        __lastLabel__ = 11; __label__ = 13; break; //@line 2801 "socketmodule.c"
      case 12: // $bb11thread_pre_split
        var $_pr1=$len;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb11
        var $35=__lastLabel__ == 12 ? $_pr1 : ($34);
        var $36=($35) > 0; //@line 2802 "socketmodule.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 2802 "socketmodule.c"
      case 14: // $bb12
        _PyBuffer_Release($pbuf); //@line 2803 "socketmodule.c"
        var $37=$n; //@line 2805 "socketmodule.c"
        var $38=($37) < 0; //@line 2805 "socketmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2805 "socketmodule.c"
      case 15: // $bb13
        var $39=$s_addr; //@line 2806 "socketmodule.c"
        var $40=$39+24; //@line 2806 "socketmodule.c"
        var $41=HEAP[$40]; //@line 2806 "socketmodule.c"
        var $42=FUNCTION_TABLE[$41](); //@line 2806 "socketmodule.c"
        $0=$42; //@line 2806 "socketmodule.c"
        __label__ = 17; break; //@line 2806 "socketmodule.c"
      case 16: // $bb14
        var $43=HEAP[__Py_NoneStruct]; //@line 2808 "socketmodule.c"
        var $44=($43) + 1; //@line 2808 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$44; //@line 2808 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2809 "socketmodule.c"
        __label__ = 17; break; //@line 2809 "socketmodule.c"
      case 17: // $bb15
        var $45=$0; //@line 2758 "socketmodule.c"
        $retval=$45; //@line 2758 "socketmodule.c"
        var $retval16=$retval; //@line 2758 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2758 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendto($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 196; _memset(__stackBase__, 0, 196);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $pbuf=__stackBase__+4;
        var $addro=__stackBase__+56;
        var $buf;
        var $len;
        var $addrbuf=__stackBase__+60;
        var $addrlen=__stackBase__+188;
        var $n;
        var $flags=__stackBase__+192;
        var $timeout;
        var $arglen;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2831 "socketmodule.c"
        HEAP[$flags]=0; //@line 2834 "socketmodule.c"
        var $2=$args_addr; //@line 2835 "socketmodule.c"
        var $3=_PyTuple_Size($2); //@line 2835 "socketmodule.c"
        $arglen=$3; //@line 2835 "socketmodule.c"
        var $4=$arglen; //@line 2836 "socketmodule.c"
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
        var $5=$args_addr; //@line 2838 "socketmodule.c"
        var $6=_PyArg_ParseTuple($5, __str61, $pbuf, $addro); //@line 2838 "socketmodule.c"
        __label__ = 4; break; //@line 2838 "socketmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 2841 "socketmodule.c"
        var $8=_PyArg_ParseTuple($7, __str62, $pbuf, $flags, $addro); //@line 2841 "socketmodule.c"
        __label__ = 4; break; //@line 2841 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_TypeError]; //@line 2844 "socketmodule.c"
        var $10=$arglen; //@line 2844 "socketmodule.c"
        var $11=_PyErr_Format($9, __str63, $10); //@line 2844 "socketmodule.c"
        __label__ = 4; break; //@line 2844 "socketmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 2847 "socketmodule.c"
        var $13=($12)!=0; //@line 2847 "socketmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2847 "socketmodule.c"
      case 5: // $bb4
        $1=0; //@line 2848 "socketmodule.c"
        __label__ = 15; break; //@line 2848 "socketmodule.c"
      case 6: // $bb5
        var $14=$pbuf; //@line 2850 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2850 "socketmodule.c"
        $buf=$15; //@line 2850 "socketmodule.c"
        var $16=$pbuf+8; //@line 2851 "socketmodule.c"
        var $17=HEAP[$16]; //@line 2851 "socketmodule.c"
        $len=$17; //@line 2851 "socketmodule.c"
        var $addrbuf6=$addrbuf; //@line 2858 "socketmodule.c"
        var $18=HEAP[$addro]; //@line 2858 "socketmodule.c"
        var $19=$s_addr; //@line 2858 "socketmodule.c"
        var $20=_getsockaddrarg($19, $18, $addrbuf6, $addrlen); //@line 2858 "socketmodule.c"
        var $21=($20)==0; //@line 2858 "socketmodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2858 "socketmodule.c"
      case 7: // $bb8
        _PyBuffer_Release($pbuf); //@line 2859 "socketmodule.c"
        $1=0; //@line 2860 "socketmodule.c"
        __label__ = 15; break; //@line 2860 "socketmodule.c"
      case 8: // $bb9
        var $22=$s_addr; //@line 2864 "socketmodule.c"
        var $23=_internal_select($22, 1); //@line 2864 "socketmodule.c"
        $timeout=$23; //@line 2864 "socketmodule.c"
        var $24=$timeout; //@line 2865 "socketmodule.c"
        var $25=($24)==0; //@line 2865 "socketmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2865 "socketmodule.c"
      case 9: // $bb10
        var $26=HEAP[$addrlen]; //@line 2866 "socketmodule.c"
        var $addrbuf11=$addrbuf; //@line 2866 "socketmodule.c"
        var $27=$0; //@line 2866 "socketmodule.c"
        HEAP[$27]=$addrbuf11; //@line 2866 "socketmodule.c"
        var $28=HEAP[$flags]; //@line 2866 "socketmodule.c"
        var $29=$len; //@line 2866 "socketmodule.c"
        var $30=$s_addr; //@line 2866 "socketmodule.c"
        var $31=$30+8; //@line 2866 "socketmodule.c"
        var $32=HEAP[$31]; //@line 2866 "socketmodule.c"
        var $33=$buf; //@line 2866 "socketmodule.c"
        var $elt=$0; //@line 2866 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2866 "socketmodule.c"
        var $34=_sendto($32, $33, $29, $28, $val, $26); //@line 2866 "socketmodule.c"
        $n=$34; //@line 2866 "socketmodule.c"
        __label__ = 10; break; //@line 2866 "socketmodule.c"
      case 10: // $bb13
        _PyBuffer_Release($pbuf); //@line 2869 "socketmodule.c"
        var $35=$timeout; //@line 2870 "socketmodule.c"
        var $36=($35)==1; //@line 2870 "socketmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2870 "socketmodule.c"
      case 11: // $bb14
        var $37=HEAP[_socket_timeout]; //@line 2871 "socketmodule.c"
        _PyErr_SetString($37, __str35); //@line 2871 "socketmodule.c"
        $1=0; //@line 2872 "socketmodule.c"
        __label__ = 15; break; //@line 2872 "socketmodule.c"
      case 12: // $bb15
        var $38=$n; //@line 2874 "socketmodule.c"
        var $39=($38) < 0; //@line 2874 "socketmodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2874 "socketmodule.c"
      case 13: // $bb16
        var $40=$s_addr; //@line 2875 "socketmodule.c"
        var $41=$40+24; //@line 2875 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2875 "socketmodule.c"
        var $43=FUNCTION_TABLE[$42](); //@line 2875 "socketmodule.c"
        $1=$43; //@line 2875 "socketmodule.c"
        __label__ = 15; break; //@line 2875 "socketmodule.c"
      case 14: // $bb17
        var $44=$n; //@line 2876 "socketmodule.c"
        var $45=_PyInt_FromLong($44); //@line 2876 "socketmodule.c"
        $1=$45; //@line 2876 "socketmodule.c"
        __label__ = 15; break; //@line 2876 "socketmodule.c"
      case 15: // $bb18
        var $46=$1; //@line 2848 "socketmodule.c"
        $retval=$46; //@line 2848 "socketmodule.c"
        var $retval19=$retval; //@line 2848 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2848 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_shutdown($s, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $how;
        var $res;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 2894 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2894 "socketmodule.c"
        $how=$2; //@line 2894 "socketmodule.c"
        var $3=$how; //@line 2895 "socketmodule.c"
        var $4=($3)==-1; //@line 2895 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2895 "socketmodule.c"
        var $6=($5)!=0; //@line 2895 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 2896 "socketmodule.c"
        __label__ = 6; break; //@line 2896 "socketmodule.c"
      case 3: // $bb2
        var $7=$s_addr; //@line 2898 "socketmodule.c"
        var $8=$7+8; //@line 2898 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2898 "socketmodule.c"
        var $10=$how; //@line 2898 "socketmodule.c"
        var $11=_shutdown($9, $10); //@line 2898 "socketmodule.c"
        $res=$11; //@line 2898 "socketmodule.c"
        var $12=($11) < 0; //@line 2900 "socketmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2900 "socketmodule.c"
      case 4: // $bb3
        var $13=$s_addr; //@line 2901 "socketmodule.c"
        var $14=$13+24; //@line 2901 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2901 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2901 "socketmodule.c"
        $0=$16; //@line 2901 "socketmodule.c"
        __label__ = 6; break; //@line 2901 "socketmodule.c"
      case 5: // $bb4
        var $17=HEAP[__Py_NoneStruct]; //@line 2902 "socketmodule.c"
        var $18=($17) + 1; //@line 2902 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$18; //@line 2902 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2903 "socketmodule.c"
        __label__ = 6; break; //@line 2903 "socketmodule.c"
      case 6: // $bb5
        var $19=$0; //@line 2896 "socketmodule.c"
        $retval=$19; //@line 2896 "socketmodule.c"
        var $retval6=$retval; //@line 2896 "socketmodule.c"
        ;
        return $retval6; //@line 2896 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_dealloc($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        $s_addr=$s;
        var $0=$s_addr; //@line 3040 "socketmodule.c"
        var $1=$0+8; //@line 3040 "socketmodule.c"
        var $2=HEAP[$1]; //@line 3040 "socketmodule.c"
        var $3=($2)!=-1; //@line 3040 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3040 "socketmodule.c"
      case 1: // $bb
        var $4=$s_addr; //@line 3041 "socketmodule.c"
        var $5=$4+8; //@line 3041 "socketmodule.c"
        var $6=HEAP[$5]; //@line 3041 "socketmodule.c"
        var $7=_close($6); //@line 3041 "socketmodule.c"
        __label__ = 2; break; //@line 3041 "socketmodule.c"
      case 2: // $bb1
        var $8=$s_addr; //@line 3042 "socketmodule.c"
        var $9=$8; //@line 3042 "socketmodule.c"
        var $10=$9+4; //@line 3042 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3042 "socketmodule.c"
        var $12=$11+160; //@line 3042 "socketmodule.c"
        var $13=HEAP[$12]; //@line 3042 "socketmodule.c"
        var $14=$s_addr; //@line 3042 "socketmodule.c"
        var $15=$14; //@line 3042 "socketmodule.c"
        FUNCTION_TABLE[$13]($15); //@line 3042 "socketmodule.c"
        ;
        return; //@line 3043 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_repr($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 512; _memset(__stackBase__, 0, 512);
    var __label__;
  
    var $s_addr;
    var $retval;
    var $0;
    var $buf=__stackBase__;
    $s_addr=$s;
    var $1=$s_addr; //@line 3061 "socketmodule.c"
    var $2=$1+20; //@line 3061 "socketmodule.c"
    var $3=HEAP[$2]; //@line 3061 "socketmodule.c"
    var $4=$s_addr; //@line 3061 "socketmodule.c"
    var $5=$4+16; //@line 3061 "socketmodule.c"
    var $6=HEAP[$5]; //@line 3061 "socketmodule.c"
    var $7=$s_addr; //@line 3061 "socketmodule.c"
    var $8=$7+12; //@line 3061 "socketmodule.c"
    var $9=HEAP[$8]; //@line 3061 "socketmodule.c"
    var $10=$s_addr; //@line 3061 "socketmodule.c"
    var $11=$10+8; //@line 3061 "socketmodule.c"
    var $12=HEAP[$11]; //@line 3061 "socketmodule.c"
    var $buf1=$buf; //@line 3061 "socketmodule.c"
    var $13=_PyOS_snprintf($buf1, 512, __str96, $12, $9, $6, $3); //@line 3061 "socketmodule.c"
    var $buf2=$buf; //@line 3067 "socketmodule.c"
    var $14=_PyString_FromString($buf2); //@line 3067 "socketmodule.c"
    $0=$14; //@line 3067 "socketmodule.c"
    var $15=$0; //@line 3067 "socketmodule.c"
    $retval=$15; //@line 3067 "socketmodule.c"
    var $retval3=$retval; //@line 3067 "socketmodule.c"
    STACKTOP = __stackBase__;
    return $retval3; //@line 3067 "socketmodule.c"
  }
  

  function _sock_new($type, $args, $kwds) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $new;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 3078 "socketmodule.c"
        var $2=$1+152; //@line 3078 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3078 "socketmodule.c"
        var $4=$type_addr; //@line 3078 "socketmodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 3078 "socketmodule.c"
        $new=$5; //@line 3078 "socketmodule.c"
        var $6=$new; //@line 3079 "socketmodule.c"
        var $7=($6)!=0; //@line 3079 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3079 "socketmodule.c"
      case 1: // $bb
        var $8=$new; //@line 3080 "socketmodule.c"
        var $9=$8; //@line 3080 "socketmodule.c"
        var $10=$9+8; //@line 3080 "socketmodule.c"
        HEAP[$10]=-1; //@line 3080 "socketmodule.c"
        var $11=$new; //@line 3081 "socketmodule.c"
        var $12=$11; //@line 3081 "socketmodule.c"
        var $13=$12+28; //@line 3081 "socketmodule.c"
        HEAP[$13]=-1; //@line 3081 "socketmodule.c"
        var $14=$new; //@line 3082 "socketmodule.c"
        var $15=$14; //@line 3082 "socketmodule.c"
        var $16=$15+24; //@line 3082 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 3082 "socketmodule.c"
        __label__ = 2; break; //@line 3082 "socketmodule.c"
      case 2: // $bb1
        var $17=$new; //@line 3084 "socketmodule.c"
        $0=$17; //@line 3084 "socketmodule.c"
        var $18=$0; //@line 3084 "socketmodule.c"
        $retval=$18; //@line 3084 "socketmodule.c"
        var $retval2=$retval; //@line 3084 "socketmodule.c"
        ;
        return $retval2; //@line 3084 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_initobj($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i;
        var $0;
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $1;
        var $s;
        var $fd;
        var $family=__stackBase__;
        var $type=__stackBase__+4;
        var $proto=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $2=$self_addr; //@line 3094 "socketmodule.c"
        var $3=$2; //@line 3094 "socketmodule.c"
        $s=$3; //@line 3094 "socketmodule.c"
        HEAP[$family]=2; //@line 3096 "socketmodule.c"
        HEAP[$type]=1; //@line 3096 "socketmodule.c"
        HEAP[$proto]=0; //@line 3096 "socketmodule.c"
        var $4=$args_addr; //@line 3099 "socketmodule.c"
        var $5=$kwds_addr; //@line 3099 "socketmodule.c"
        var $6=_PyArg_ParseTupleAndKeywords($4, $5, __str97, _keywords_11267, $family, $type, $proto); //@line 3099 "socketmodule.c"
        var $7=($6)==0; //@line 3099 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3099 "socketmodule.c"
      case 1: // $bb
        $1=-1; //@line 3102 "socketmodule.c"
        __label__ = 5; break; //@line 3102 "socketmodule.c"
      case 2: // $bb1
        var $8=HEAP[$proto]; //@line 3105 "socketmodule.c"
        var $9=HEAP[$type]; //@line 3105 "socketmodule.c"
        var $10=HEAP[$family]; //@line 3105 "socketmodule.c"
        var $11=_socket($10, $9, $8); //@line 3105 "socketmodule.c"
        $fd=$11; //@line 3105 "socketmodule.c"
        var $12=$fd; //@line 3111 "socketmodule.c"
        var $13=($12) < 0; //@line 3111 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3111 "socketmodule.c"
      case 3: // $bb2
        var $14=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $15=_PyErr_SetFromErrno($14); //@line 543 "socketmodule.c"
        $0=$15; //@line 543 "socketmodule.c"
        var $16=$0; //@line 543 "socketmodule.c"
        $retval_i=$16; //@line 543 "socketmodule.c"
        $1=-1; //@line 3115 "socketmodule.c"
        __label__ = 5; break; //@line 3115 "socketmodule.c"
      case 4: // $bb3
        var $17=HEAP[$proto]; //@line 3117 "socketmodule.c"
        var $18=HEAP[$type]; //@line 3117 "socketmodule.c"
        var $19=HEAP[$family]; //@line 3117 "socketmodule.c"
        var $20=$s; //@line 3117 "socketmodule.c"
        var $21=$fd; //@line 3117 "socketmodule.c"
        _init_sockobject($20, $21, $19, $18, $17); //@line 3117 "socketmodule.c"
        $1=0; //@line 3119 "socketmodule.c"
        __label__ = 5; break; //@line 3119 "socketmodule.c"
      case 5: // $bb4
        var $22=$1; //@line 3102 "socketmodule.c"
        $retval=$22; //@line 3102 "socketmodule.c"
        var $retval5=$retval; //@line 3102 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3102 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostname($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 1024; _memset(__stackBase__, 0, 1024);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i;
        var $0;
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $1;
        var $buf=__stackBase__;
        var $res;
        $self_addr=$self;
        $unused_addr=$unused;
        var $buf1=$buf; //@line 3178 "socketmodule.c"
        var $2=_gethostname($buf1, 1023); //@line 3178 "socketmodule.c"
        $res=$2; //@line 3178 "socketmodule.c"
        var $3=$res; //@line 3180 "socketmodule.c"
        var $4=($3) < 0; //@line 3180 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3180 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $6=_PyErr_SetFromErrno($5); //@line 543 "socketmodule.c"
        $0=$6; //@line 543 "socketmodule.c"
        var $7=$0; //@line 543 "socketmodule.c"
        $retval_i=$7; //@line 543 "socketmodule.c"
        var $retval1_i=$retval_i; //@line 543 "socketmodule.c"
        $1=$retval1_i; //@line 3181 "socketmodule.c"
        __label__ = 3; break; //@line 3181 "socketmodule.c"
      case 2: // $bb2
        var $8=$buf+1023; //@line 3182 "socketmodule.c"
        HEAP[$8]=0; //@line 3182 "socketmodule.c"
        var $buf3=$buf; //@line 3183 "socketmodule.c"
        var $9=_PyString_FromString($buf3); //@line 3183 "socketmodule.c"
        $1=$9; //@line 3183 "socketmodule.c"
        __label__ = 3; break; //@line 3183 "socketmodule.c"
      case 3: // $bb4
        var $10=$1; //@line 3181 "socketmodule.c"
        $retval=$10; //@line 3181 "socketmodule.c"
        var $retval5=$retval; //@line 3181 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3181 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $addrbuf=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3201 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str99, $name); //@line 3201 "socketmodule.c"
        var $3=($2)==0; //@line 3201 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3201 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3202 "socketmodule.c"
        __label__ = 5; break; //@line 3202 "socketmodule.c"
      case 2: // $bb1
        var $addrbuf2=$addrbuf; //@line 3203 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3203 "socketmodule.c"
        var $5=_setipaddr($4, $addrbuf2, 128, 2); //@line 3203 "socketmodule.c"
        var $6=($5) < 0; //@line 3203 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3203 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 3204 "socketmodule.c"
        __label__ = 5; break; //@line 3204 "socketmodule.c"
      case 4: // $bb5
        var $addrbuf6=$addrbuf; //@line 3205 "socketmodule.c"
        var $7=_makeipaddr($addrbuf6, 16); //@line 3205 "socketmodule.c"
        $0=$7; //@line 3205 "socketmodule.c"
        __label__ = 5; break; //@line 3205 "socketmodule.c"
      case 5: // $bb8
        var $8=$0; //@line 3202 "socketmodule.c"
        $retval=$8; //@line 3202 "socketmodule.c"
        var $retval9=$retval; //@line 3202 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 3202 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gethost_common($h, $addr, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $h_error_addr_i;
        var $v_i;
        var $h_addr;
        var $addr_addr;
        var $alen_addr;
        var $af_addr;
        var $retval;
        var $0;
        var $pch;
        var $rtn_tuple;
        var $name_list;
        var $addr_list;
        var $tmp;
        var $status;
        var $status21;
        var $sin=__stackBase__;
        var $sin6=__stackBase__+16;
        $h_addr=$h;
        $addr_addr=$addr;
        $alen_addr=128;
        $af_addr=$af;
        $rtn_tuple=0; //@line 3220 "socketmodule.c"
        $name_list=0; //@line 3221 "socketmodule.c"
        $addr_list=0; //@line 3222 "socketmodule.c"
        var $1=$h_addr; //@line 3225 "socketmodule.c"
        var $2=($1)==0; //@line 3225 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 3225 "socketmodule.c"
      case 1: // $bb
        var $3=___h_errno_location(); //@line 3228 "socketmodule.c"
        var $4=HEAP[$3]; //@line 3228 "socketmodule.c"
        $h_error_addr_i=$4;
        var $5=$h_error_addr_i; //@line 553 "socketmodule.c"
        var $6=_hstrerror($5); //@line 553 "socketmodule.c"
        var $7=$h_error_addr_i; //@line 553 "socketmodule.c"
        var $8=_Py_BuildValue(__str1, $7, $6); //@line 553 "socketmodule.c"
        $v_i=$8; //@line 553 "socketmodule.c"
        var $9=$v_i; //@line 557 "socketmodule.c"
        var $10=($9)!=0; //@line 557 "socketmodule.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 557 "socketmodule.c"
      case 2: // $bb_i
        var $11=HEAP[_socket_herror]; //@line 558 "socketmodule.c"
        var $12=$v_i; //@line 558 "socketmodule.c"
        _PyErr_SetObject($11, $12); //@line 558 "socketmodule.c"
        var $13=$v_i; //@line 559 "socketmodule.c"
        var $14=$13; //@line 559 "socketmodule.c"
        var $15=HEAP[$14]; //@line 559 "socketmodule.c"
        var $16=($15) - 1; //@line 559 "socketmodule.c"
        var $17=$v_i; //@line 559 "socketmodule.c"
        var $18=$17; //@line 559 "socketmodule.c"
        HEAP[$18]=$16; //@line 559 "socketmodule.c"
        var $19=$v_i; //@line 559 "socketmodule.c"
        var $20=$19; //@line 559 "socketmodule.c"
        var $21=HEAP[$20]; //@line 559 "socketmodule.c"
        var $22=($21)==0; //@line 559 "socketmodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 559 "socketmodule.c"
      case 3: // $bb1_i
        var $23=$v_i; //@line 559 "socketmodule.c"
        var $24=$23+4; //@line 559 "socketmodule.c"
        var $25=HEAP[$24]; //@line 559 "socketmodule.c"
        var $26=$25+24; //@line 559 "socketmodule.c"
        var $27=HEAP[$26]; //@line 559 "socketmodule.c"
        var $28=$v_i; //@line 559 "socketmodule.c"
        FUNCTION_TABLE[$27]($28); //@line 559 "socketmodule.c"
        __label__ = 4; break; //@line 559 "socketmodule.c"
      case 4: // $set_herror_exit
        $0=0; //@line 3232 "socketmodule.c"
        __label__ = 45; break; //@line 3232 "socketmodule.c"
      case 5: // $bb1
        var $29=$h_addr; //@line 3235 "socketmodule.c"
        var $30=$29+8; //@line 3235 "socketmodule.c"
        var $31=HEAP[$30]; //@line 3235 "socketmodule.c"
        var $32=$af_addr; //@line 3235 "socketmodule.c"
        var $33=($31)!=($32); //@line 3235 "socketmodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3235 "socketmodule.c"
      case 6: // $bb2
        var $34=_strerror(97); //@line 3237 "socketmodule.c"
        var $35=HEAP[_socket_error]; //@line 3237 "socketmodule.c"
        _PyErr_SetString($35, $34); //@line 3237 "socketmodule.c"
        $0=0; //@line 3240 "socketmodule.c"
        __label__ = 45; break; //@line 3240 "socketmodule.c"
      case 7: // $bb3
        var $36=$af_addr; //@line 3243 "socketmodule.c"
        if ($36 == 2) {
          __label__ = 8; break;
        }
        else if ($36 == 10) {
          __label__ = 10; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 8: // $bb4
        var $37=$alen_addr; //@line 3246 "socketmodule.c"
        var $38=($37) <= 15; //@line 3246 "socketmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 3246 "socketmodule.c"
      case 9: // $bb5
        $0=0; //@line 3247 "socketmodule.c"
        __label__ = 45; break; //@line 3247 "socketmodule.c"
      case 10: // $bb7
        var $39=$alen_addr; //@line 3252 "socketmodule.c"
        var $40=($39) <= 27; //@line 3252 "socketmodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 3252 "socketmodule.c"
      case 11: // $bb8
        $0=0; //@line 3253 "socketmodule.c"
        __label__ = 45; break; //@line 3253 "socketmodule.c"
      case 12: // $bb9
        var $41=_PyList_New(0); //@line 3259 "socketmodule.c"
        $name_list=$41; //@line 3259 "socketmodule.c"
        var $42=($41)==0; //@line 3259 "socketmodule.c"
        if ($42) { __label__ = 41; break; } else { __label__ = 13; break; } //@line 3259 "socketmodule.c"
      case 13: // $bb10
        var $43=_PyList_New(0); //@line 3262 "socketmodule.c"
        $addr_list=$43; //@line 3262 "socketmodule.c"
        var $44=$addr_list; //@line 3262 "socketmodule.c"
        var $45=($44)==0; //@line 3262 "socketmodule.c"
        if ($45) { __label__ = 38; break; } else { __label__ = 14; break; } //@line 3262 "socketmodule.c"
      case 14: // $bb11
        var $46=$h_addr; //@line 3266 "socketmodule.c"
        var $47=$46+4; //@line 3266 "socketmodule.c"
        var $48=HEAP[$47]; //@line 3266 "socketmodule.c"
        var $49=($48)!=0; //@line 3266 "socketmodule.c"
        if ($49) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 3266 "socketmodule.c"
      case 15: // $bb12
        var $50=$h_addr; //@line 3267 "socketmodule.c"
        var $51=$50+4; //@line 3267 "socketmodule.c"
        var $52=HEAP[$51]; //@line 3267 "socketmodule.c"
        $pch=$52; //@line 3267 "socketmodule.c"
        __label__ = 21; break; //@line 3267 "socketmodule.c"
      case 16: // $bb13
        var $53=$pch; //@line 3269 "socketmodule.c"
        var $54=HEAP[$53]; //@line 3269 "socketmodule.c"
        var $55=_PyString_FromString($54); //@line 3269 "socketmodule.c"
        $tmp=$55; //@line 3269 "socketmodule.c"
        var $56=$tmp; //@line 3270 "socketmodule.c"
        var $57=($56)==0; //@line 3270 "socketmodule.c"
        if ($57) { __label__ = 38; break; } else { __label__ = 17; break; } //@line 3270 "socketmodule.c"
      case 17: // $bb14
        var $58=$name_list; //@line 3273 "socketmodule.c"
        var $59=$tmp; //@line 3273 "socketmodule.c"
        var $60=_PyList_Append($58, $59); //@line 3273 "socketmodule.c"
        $status=$60; //@line 3273 "socketmodule.c"
        var $61=$tmp; //@line 3274 "socketmodule.c"
        var $62=$61; //@line 3274 "socketmodule.c"
        var $63=HEAP[$62]; //@line 3274 "socketmodule.c"
        var $64=($63) - 1; //@line 3274 "socketmodule.c"
        var $65=$tmp; //@line 3274 "socketmodule.c"
        var $66=$65; //@line 3274 "socketmodule.c"
        HEAP[$66]=$64; //@line 3274 "socketmodule.c"
        var $67=$tmp; //@line 3274 "socketmodule.c"
        var $68=$67; //@line 3274 "socketmodule.c"
        var $69=HEAP[$68]; //@line 3274 "socketmodule.c"
        var $70=($69)==0; //@line 3274 "socketmodule.c"
        if ($70) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3274 "socketmodule.c"
      case 18: // $bb15
        var $71=$tmp; //@line 3274 "socketmodule.c"
        var $72=$71+4; //@line 3274 "socketmodule.c"
        var $73=HEAP[$72]; //@line 3274 "socketmodule.c"
        var $74=$73+24; //@line 3274 "socketmodule.c"
        var $75=HEAP[$74]; //@line 3274 "socketmodule.c"
        var $76=$tmp; //@line 3274 "socketmodule.c"
        FUNCTION_TABLE[$75]($76); //@line 3274 "socketmodule.c"
        __label__ = 19; break; //@line 3274 "socketmodule.c"
      case 19: // $bb16
        var $77=$status; //@line 3276 "socketmodule.c"
        var $78=($77)!=0; //@line 3276 "socketmodule.c"
        if ($78) { __label__ = 38; break; } else { __label__ = 20; break; } //@line 3276 "socketmodule.c"
      case 20: // $bb17
        var $79=$pch; //@line 3267 "socketmodule.c"
        var $80=$79+4; //@line 3267 "socketmodule.c"
        $pch=$80; //@line 3267 "socketmodule.c"
        __label__ = 21; break; //@line 3267 "socketmodule.c"
      case 21: // $bb18
        var $81=$pch; //@line 3267 "socketmodule.c"
        var $82=HEAP[$81]; //@line 3267 "socketmodule.c"
        var $83=($82)!=0; //@line 3267 "socketmodule.c"
        if ($83) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 3267 "socketmodule.c"
      case 22: // $bb19
        var $84=$h_addr; //@line 3281 "socketmodule.c"
        var $85=$84+16; //@line 3281 "socketmodule.c"
        var $86=HEAP[$85]; //@line 3281 "socketmodule.c"
        $pch=$86; //@line 3281 "socketmodule.c"
        var $sin23=$sin; //@line 3289 "socketmodule.c"
        var $87=$sin; //@line 3290 "socketmodule.c"
        var $88=$sin+4; //@line 3294 "socketmodule.c"
        var $89=$88; //@line 3294 "socketmodule.c"
        var $sin24=$sin; //@line 3295 "socketmodule.c"
        var $sin28=$sin; //@line 3298 "socketmodule.c"
        var $sin631=$sin6; //@line 3306 "socketmodule.c"
        var $90=$sin6; //@line 3307 "socketmodule.c"
        var $91=$sin6+8; //@line 3311 "socketmodule.c"
        var $92=$91; //@line 3311 "socketmodule.c"
        var $sin632=$sin6; //@line 3312 "socketmodule.c"
        var $sin636=$sin6; //@line 3316 "socketmodule.c"
        __label__ = 36; break; //@line 3281 "socketmodule.c"
      case 23: // $bb20
        var $93=$af_addr; //@line 3284 "socketmodule.c"
        if ($93 == 2) {
          __label__ = 24; break;
        }
        else if ($93 == 10) {
          __label__ = 27; break;
        }
        else {
        __label__ = 30; break;
        }
        
      case 24: // $bb22
        _llvm_memset_p0i8_i32($sin23, 0, 16, 1, 0); //@line 3289 "socketmodule.c"
        var $94=$af_addr; //@line 3290 "socketmodule.c"
        var $95=((($94)) & 65535); //@line 3290 "socketmodule.c"
        HEAP[$87]=$95; //@line 3290 "socketmodule.c"
        var $96=$pch; //@line 3294 "socketmodule.c"
        var $97=HEAP[$96]; //@line 3294 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($89, $97, 4, 1, 0); //@line 3294 "socketmodule.c"
        var $98=_makeipaddr($sin24, 16); //@line 3295 "socketmodule.c"
        $tmp=$98; //@line 3295 "socketmodule.c"
        var $99=$h_addr; //@line 3297 "socketmodule.c"
        var $100=$99+16; //@line 3297 "socketmodule.c"
        var $101=HEAP[$100]; //@line 3297 "socketmodule.c"
        var $102=$pch; //@line 3297 "socketmodule.c"
        var $103=($101)==($102); //@line 3297 "socketmodule.c"
        if ($103) { __label__ = 25; break; } else { __label__ = 31; break; } //@line 3297 "socketmodule.c"
      case 25: // $bb26
        var $104=$alen_addr; //@line 3297 "socketmodule.c"
        var $105=($104) > 15; //@line 3297 "socketmodule.c"
        if ($105) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 3297 "socketmodule.c"
      case 26: // $bb27
        var $106=$addr_addr; //@line 3298 "socketmodule.c"
        var $107=$106; //@line 3298 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($107, $sin28, 16, 1, 0); //@line 3298 "socketmodule.c"
        __label__ = 31; break; //@line 3298 "socketmodule.c"
      case 27: // $bb30
        _llvm_memset_p0i8_i32($sin631, 0, 28, 1, 0); //@line 3306 "socketmodule.c"
        var $108=$af_addr; //@line 3307 "socketmodule.c"
        var $109=((($108)) & 65535); //@line 3307 "socketmodule.c"
        HEAP[$90]=$109; //@line 3307 "socketmodule.c"
        var $110=$pch; //@line 3311 "socketmodule.c"
        var $111=HEAP[$110]; //@line 3311 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($92, $111, 16, 1, 0); //@line 3311 "socketmodule.c"
        var $112=_makeipaddr($sin632, 28); //@line 3312 "socketmodule.c"
        $tmp=$112; //@line 3312 "socketmodule.c"
        var $113=$h_addr; //@line 3315 "socketmodule.c"
        var $114=$113+16; //@line 3315 "socketmodule.c"
        var $115=HEAP[$114]; //@line 3315 "socketmodule.c"
        var $116=$pch; //@line 3315 "socketmodule.c"
        var $117=($115)==($116); //@line 3315 "socketmodule.c"
        if ($117) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 3315 "socketmodule.c"
      case 28: // $bb34
        var $118=$alen_addr; //@line 3315 "socketmodule.c"
        var $119=($118) > 27; //@line 3315 "socketmodule.c"
        if ($119) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 3315 "socketmodule.c"
      case 29: // $bb35
        var $120=$addr_addr; //@line 3316 "socketmodule.c"
        var $121=$120; //@line 3316 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($121, $sin636, 28, 1, 0); //@line 3316 "socketmodule.c"
        __label__ = 31; break; //@line 3316 "socketmodule.c"
      case 30: // $bb38
        var $122=HEAP[_socket_error]; //@line 3322 "socketmodule.c"
        _PyErr_SetString($122, __str3); //@line 3322 "socketmodule.c"
        $0=0; //@line 3324 "socketmodule.c"
        __label__ = 45; break; //@line 3324 "socketmodule.c"
      case 31: // $bb39
        var $123=$tmp; //@line 3327 "socketmodule.c"
        var $124=($123)==0; //@line 3327 "socketmodule.c"
        if ($124) { __label__ = 38; break; } else { __label__ = 32; break; } //@line 3327 "socketmodule.c"
      case 32: // $bb40
        var $125=$addr_list; //@line 3330 "socketmodule.c"
        var $126=$tmp; //@line 3330 "socketmodule.c"
        var $127=_PyList_Append($125, $126); //@line 3330 "socketmodule.c"
        $status21=$127; //@line 3330 "socketmodule.c"
        var $128=$tmp; //@line 3331 "socketmodule.c"
        var $129=$128; //@line 3331 "socketmodule.c"
        var $130=HEAP[$129]; //@line 3331 "socketmodule.c"
        var $131=($130) - 1; //@line 3331 "socketmodule.c"
        var $132=$tmp; //@line 3331 "socketmodule.c"
        var $133=$132; //@line 3331 "socketmodule.c"
        HEAP[$133]=$131; //@line 3331 "socketmodule.c"
        var $134=$tmp; //@line 3331 "socketmodule.c"
        var $135=$134; //@line 3331 "socketmodule.c"
        var $136=HEAP[$135]; //@line 3331 "socketmodule.c"
        var $137=($136)==0; //@line 3331 "socketmodule.c"
        if ($137) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 3331 "socketmodule.c"
      case 33: // $bb41
        var $138=$tmp; //@line 3331 "socketmodule.c"
        var $139=$138+4; //@line 3331 "socketmodule.c"
        var $140=HEAP[$139]; //@line 3331 "socketmodule.c"
        var $141=$140+24; //@line 3331 "socketmodule.c"
        var $142=HEAP[$141]; //@line 3331 "socketmodule.c"
        var $143=$tmp; //@line 3331 "socketmodule.c"
        FUNCTION_TABLE[$142]($143); //@line 3331 "socketmodule.c"
        __label__ = 34; break; //@line 3331 "socketmodule.c"
      case 34: // $bb42
        var $144=$status21; //@line 3333 "socketmodule.c"
        var $145=($144)!=0; //@line 3333 "socketmodule.c"
        if ($145) { __label__ = 38; break; } else { __label__ = 35; break; } //@line 3333 "socketmodule.c"
      case 35: // $bb43
        var $146=$pch; //@line 3281 "socketmodule.c"
        var $147=$146+4; //@line 3281 "socketmodule.c"
        $pch=$147; //@line 3281 "socketmodule.c"
        __label__ = 36; break; //@line 3281 "socketmodule.c"
      case 36: // $bb44
        var $148=$pch; //@line 3281 "socketmodule.c"
        var $149=HEAP[$148]; //@line 3281 "socketmodule.c"
        var $150=($149)!=0; //@line 3281 "socketmodule.c"
        if ($150) { __label__ = 23; break; } else { __label__ = 37; break; } //@line 3281 "socketmodule.c"
      case 37: // $bb45
        var $151=$h_addr; //@line 3337 "socketmodule.c"
        var $152=$151; //@line 3337 "socketmodule.c"
        var $153=HEAP[$152]; //@line 3337 "socketmodule.c"
        var $154=$name_list; //@line 3337 "socketmodule.c"
        var $155=$addr_list; //@line 3337 "socketmodule.c"
        var $156=_Py_BuildValue(__str100, $153, $154, $155); //@line 3337 "socketmodule.c"
        $rtn_tuple=$156; //@line 3337 "socketmodule.c"
        __label__ = 38; break; //@line 3339 "socketmodule.c"
      case 38: // $err
        var $_pr=$name_list;
        var $157=($_pr)!=0; //@line 3340 "socketmodule.c"
        if ($157) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 3340 "socketmodule.c"
      case 39: // $bb46
        var $158=$name_list; //@line 3340 "socketmodule.c"
        var $159=$158; //@line 3340 "socketmodule.c"
        var $160=HEAP[$159]; //@line 3340 "socketmodule.c"
        var $161=($160) - 1; //@line 3340 "socketmodule.c"
        var $162=$name_list; //@line 3340 "socketmodule.c"
        var $163=$162; //@line 3340 "socketmodule.c"
        HEAP[$163]=$161; //@line 3340 "socketmodule.c"
        var $164=$name_list; //@line 3340 "socketmodule.c"
        var $165=$164; //@line 3340 "socketmodule.c"
        var $166=HEAP[$165]; //@line 3340 "socketmodule.c"
        var $167=($166)==0; //@line 3340 "socketmodule.c"
        if ($167) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 3340 "socketmodule.c"
      case 40: // $bb47
        var $168=$name_list; //@line 3340 "socketmodule.c"
        var $169=$168+4; //@line 3340 "socketmodule.c"
        var $170=HEAP[$169]; //@line 3340 "socketmodule.c"
        var $171=$170+24; //@line 3340 "socketmodule.c"
        var $172=HEAP[$171]; //@line 3340 "socketmodule.c"
        var $173=$name_list; //@line 3340 "socketmodule.c"
        FUNCTION_TABLE[$172]($173); //@line 3340 "socketmodule.c"
        __label__ = 41; break; //@line 3340 "socketmodule.c"
      case 41: // $bb48
        var $174=$addr_list; //@line 3341 "socketmodule.c"
        var $175=($174)!=0; //@line 3341 "socketmodule.c"
        if ($175) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 3341 "socketmodule.c"
      case 42: // $bb49
        var $176=$addr_list; //@line 3341 "socketmodule.c"
        var $177=$176; //@line 3341 "socketmodule.c"
        var $178=HEAP[$177]; //@line 3341 "socketmodule.c"
        var $179=($178) - 1; //@line 3341 "socketmodule.c"
        var $180=$addr_list; //@line 3341 "socketmodule.c"
        var $181=$180; //@line 3341 "socketmodule.c"
        HEAP[$181]=$179; //@line 3341 "socketmodule.c"
        var $182=$addr_list; //@line 3341 "socketmodule.c"
        var $183=$182; //@line 3341 "socketmodule.c"
        var $184=HEAP[$183]; //@line 3341 "socketmodule.c"
        var $185=($184)==0; //@line 3341 "socketmodule.c"
        if ($185) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 3341 "socketmodule.c"
      case 43: // $bb50
        var $186=$addr_list; //@line 3341 "socketmodule.c"
        var $187=$186+4; //@line 3341 "socketmodule.c"
        var $188=HEAP[$187]; //@line 3341 "socketmodule.c"
        var $189=$188+24; //@line 3341 "socketmodule.c"
        var $190=HEAP[$189]; //@line 3341 "socketmodule.c"
        var $191=$addr_list; //@line 3341 "socketmodule.c"
        FUNCTION_TABLE[$190]($191); //@line 3341 "socketmodule.c"
        __label__ = 44; break; //@line 3341 "socketmodule.c"
      case 44: // $bb51
        var $192=$rtn_tuple; //@line 3342 "socketmodule.c"
        $0=$192; //@line 3342 "socketmodule.c"
        __label__ = 45; break; //@line 3342 "socketmodule.c"
      case 45: // $bb52
        var $193=$0; //@line 3232 "socketmodule.c"
        $retval=$193; //@line 3232 "socketmodule.c"
        var $retval53=$retval; //@line 3232 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval53; //@line 3232 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname_ex($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $h;
        var $addr=__stackBase__+4;
        var $sa;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3375 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str101, $name); //@line 3375 "socketmodule.c"
        var $3=($2)==0; //@line 3375 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3375 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3376 "socketmodule.c"
        __label__ = 5; break; //@line 3376 "socketmodule.c"
      case 2: // $bb1
        var $addr2=$addr; //@line 3377 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3377 "socketmodule.c"
        var $5=_setipaddr($4, $addr2, 128, 2); //@line 3377 "socketmodule.c"
        var $6=($5) < 0; //@line 3377 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3377 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 3378 "socketmodule.c"
        __label__ = 5; break; //@line 3378 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$name]; //@line 3395 "socketmodule.c"
        var $8=_gethostbyname($7); //@line 3395 "socketmodule.c"
        $h=$8; //@line 3395 "socketmodule.c"
        var $addr6=$addr; //@line 3402 "socketmodule.c"
        $sa=$addr6; //@line 3402 "socketmodule.c"
        var $9=$sa; //@line 3403 "socketmodule.c"
        var $10=$9; //@line 3403 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3403 "socketmodule.c"
        var $12=($11); //@line 3403 "socketmodule.c"
        var $addr7=$addr; //@line 3403 "socketmodule.c"
        var $13=$h; //@line 3403 "socketmodule.c"
        var $14=_gethost_common($13, $addr7, $12); //@line 3403 "socketmodule.c"
        $ret=$14; //@line 3403 "socketmodule.c"
        var $15=$ret; //@line 3408 "socketmodule.c"
        $0=$15; //@line 3408 "socketmodule.c"
        __label__ = 5; break; //@line 3408 "socketmodule.c"
      case 5: // $bb9
        var $16=$0; //@line 3376 "socketmodule.c"
        $retval=$16; //@line 3376 "socketmodule.c"
        var $retval10=$retval; //@line 3376 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 3376 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyaddr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $addr=__stackBase__;
        var $sa;
        var $ip_num=__stackBase__+128;
        var $h;
        var $ret;
        var $ap;
        var $al;
        var $af;
        $self_addr=$self;
        $args_addr=$args;
        var $addr1=$addr; //@line 3429 "socketmodule.c"
        $sa=$addr1; //@line 3429 "socketmodule.c"
        var $1=$args_addr; //@line 3454 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str102, $ip_num); //@line 3454 "socketmodule.c"
        var $3=($2)==0; //@line 3454 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3454 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3455 "socketmodule.c"
        __label__ = 9; break; //@line 3455 "socketmodule.c"
      case 2: // $bb2
        $af=0; //@line 3456 "socketmodule.c"
        var $4=HEAP[$ip_num]; //@line 3457 "socketmodule.c"
        var $5=$sa; //@line 3457 "socketmodule.c"
        var $6=$af; //@line 3457 "socketmodule.c"
        var $7=_setipaddr($4, $5, 128, $6); //@line 3457 "socketmodule.c"
        var $8=($7) < 0; //@line 3457 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3457 "socketmodule.c"
      case 3: // $bb3
        $0=0; //@line 3458 "socketmodule.c"
        __label__ = 9; break; //@line 3458 "socketmodule.c"
      case 4: // $bb4
        var $9=$sa; //@line 3459 "socketmodule.c"
        var $10=$9; //@line 3459 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3459 "socketmodule.c"
        var $12=($11); //@line 3459 "socketmodule.c"
        $af=$12; //@line 3459 "socketmodule.c"
        $ap=0; //@line 3460 "socketmodule.c"
        var $13=$af; //@line 3461 "socketmodule.c"
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
        var $14=$sa; //@line 3463 "socketmodule.c"
        var $15=$14; //@line 3463 "socketmodule.c"
        var $16=$15+4; //@line 3463 "socketmodule.c"
        var $17=$16; //@line 3463 "socketmodule.c"
        $ap=$17; //@line 3463 "socketmodule.c"
        $al=4; //@line 3464 "socketmodule.c"
        __label__ = 8; break; //@line 3464 "socketmodule.c"
      case 6: // $bb6
        var $18=$sa; //@line 3468 "socketmodule.c"
        var $19=$18; //@line 3468 "socketmodule.c"
        var $20=$19+8; //@line 3468 "socketmodule.c"
        var $21=$20; //@line 3468 "socketmodule.c"
        $ap=$21; //@line 3468 "socketmodule.c"
        $al=16; //@line 3469 "socketmodule.c"
        __label__ = 8; break; //@line 3469 "socketmodule.c"
      case 7: // $bb7
        var $22=HEAP[_socket_error]; //@line 3473 "socketmodule.c"
        _PyErr_SetString($22, __str3); //@line 3473 "socketmodule.c"
        $0=0; //@line 3474 "socketmodule.c"
        __label__ = 9; break; //@line 3474 "socketmodule.c"
      case 8: // $bb8
        var $23=$al; //@line 3494 "socketmodule.c"
        var $24=$ap; //@line 3494 "socketmodule.c"
        var $25=$af; //@line 3494 "socketmodule.c"
        var $26=_gethostbyaddr($24, $23, $25); //@line 3494 "socketmodule.c"
        $h=$26; //@line 3494 "socketmodule.c"
        var $addr9=$addr; //@line 3497 "socketmodule.c"
        var $27=$h; //@line 3497 "socketmodule.c"
        var $28=$af; //@line 3497 "socketmodule.c"
        var $29=_gethost_common($27, $addr9, $28); //@line 3497 "socketmodule.c"
        $ret=$29; //@line 3497 "socketmodule.c"
        var $30=$ret; //@line 3501 "socketmodule.c"
        $0=$30; //@line 3501 "socketmodule.c"
        __label__ = 9; break; //@line 3501 "socketmodule.c"
      case 9: // $bb11
        var $31=$0; //@line 3455 "socketmodule.c"
        $retval=$31; //@line 3455 "socketmodule.c"
        var $retval12=$retval; //@line 3455 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3455 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $proto=__stackBase__+4;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3519 "socketmodule.c"
        var $1=$args_addr; //@line 3521 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str103, $name, $proto); //@line 3521 "socketmodule.c"
        var $3=($2)==0; //@line 3521 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3521 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3522 "socketmodule.c"
        __label__ = 5; break; //@line 3522 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$proto]; //@line 3524 "socketmodule.c"
        var $5=HEAP[$name]; //@line 3524 "socketmodule.c"
        var $6=_getservbyname($5, $4); //@line 3524 "socketmodule.c"
        $sp=$6; //@line 3524 "socketmodule.c"
        var $7=$sp; //@line 3526 "socketmodule.c"
        var $8=($7)==0; //@line 3526 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3526 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_socket_error]; //@line 3527 "socketmodule.c"
        _PyErr_SetString($9, __str104); //@line 3527 "socketmodule.c"
        $0=0; //@line 3528 "socketmodule.c"
        __label__ = 5; break; //@line 3528 "socketmodule.c"
      case 4: // $bb3
        var $10=$sp; //@line 3530 "socketmodule.c"
        var $11=$10+8; //@line 3530 "socketmodule.c"
        var $12=HEAP[$11]; //@line 3530 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3530 "socketmodule.c"
        var $14=($13); //@line 3530 "socketmodule.c"
        var $15=((($14)) & 65535); //@line 3530 "socketmodule.c"
        var $16=_ntohs($15); //@line 3530 "socketmodule.c"
        var $17=($16); //@line 3530 "socketmodule.c"
        var $18=_PyInt_FromLong($17); //@line 3530 "socketmodule.c"
        $0=$18; //@line 3530 "socketmodule.c"
        __label__ = 5; break; //@line 3530 "socketmodule.c"
      case 5: // $bb4
        var $19=$0; //@line 3522 "socketmodule.c"
        $retval=$19; //@line 3522 "socketmodule.c"
        var $retval5=$retval; //@line 3522 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3522 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyport($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $port=__stackBase__;
        var $proto=__stackBase__+4;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3550 "socketmodule.c"
        var $1=$args_addr; //@line 3552 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str105, $port, $proto); //@line 3552 "socketmodule.c"
        var $3=($2)==0; //@line 3552 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3552 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3553 "socketmodule.c"
        __label__ = 7; break; //@line 3553 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $5=($4) < 0; //@line 3554 "socketmodule.c"
        var $6=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $7=($6) > 65535; //@line 3554 "socketmodule.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3554 "socketmodule.c"
      case 3: // $bb3
        var $8=HEAP[_PyExc_OverflowError]; //@line 3555 "socketmodule.c"
        _PyErr_SetString($8, __str106); //@line 3555 "socketmodule.c"
        $0=0; //@line 3558 "socketmodule.c"
        __label__ = 7; break; //@line 3558 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[$proto]; //@line 3561 "socketmodule.c"
        var $10=HEAP[$port]; //@line 3561 "socketmodule.c"
        var $11=((($10)) & 65535); //@line 3561 "socketmodule.c"
        var $12=($11); //@line 3561 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3561 "socketmodule.c"
        var $14=_htons($13); //@line 3561 "socketmodule.c"
        var $15=($14); //@line 3561 "socketmodule.c"
        var $16=_getservbyport($15, $9); //@line 3561 "socketmodule.c"
        $sp=$16; //@line 3561 "socketmodule.c"
        var $17=$sp; //@line 3563 "socketmodule.c"
        var $18=($17)==0; //@line 3563 "socketmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3563 "socketmodule.c"
      case 5: // $bb5
        var $19=HEAP[_socket_error]; //@line 3564 "socketmodule.c"
        _PyErr_SetString($19, __str107); //@line 3564 "socketmodule.c"
        $0=0; //@line 3565 "socketmodule.c"
        __label__ = 7; break; //@line 3565 "socketmodule.c"
      case 6: // $bb6
        var $20=$sp; //@line 3567 "socketmodule.c"
        var $21=$20; //@line 3567 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3567 "socketmodule.c"
        var $23=_PyString_FromString($22); //@line 3567 "socketmodule.c"
        $0=$23; //@line 3567 "socketmodule.c"
        __label__ = 7; break; //@line 3567 "socketmodule.c"
      case 7: // $bb7
        var $24=$0; //@line 3553 "socketmodule.c"
        $retval=$24; //@line 3553 "socketmodule.c"
        var $retval8=$retval; //@line 3553 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 3553 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getprotobyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3592 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str108, $name); //@line 3592 "socketmodule.c"
        var $3=($2)==0; //@line 3592 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3592 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3593 "socketmodule.c"
        __label__ = 5; break; //@line 3593 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$name]; //@line 3595 "socketmodule.c"
        var $5=_getprotobyname($4); //@line 3595 "socketmodule.c"
        $sp=$5; //@line 3595 "socketmodule.c"
        var $6=$sp; //@line 3597 "socketmodule.c"
        var $7=($6)==0; //@line 3597 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3597 "socketmodule.c"
      case 3: // $bb2
        var $8=HEAP[_socket_error]; //@line 3598 "socketmodule.c"
        _PyErr_SetString($8, __str109); //@line 3598 "socketmodule.c"
        $0=0; //@line 3599 "socketmodule.c"
        __label__ = 5; break; //@line 3599 "socketmodule.c"
      case 4: // $bb3
        var $9=$sp; //@line 3601 "socketmodule.c"
        var $10=$9+8; //@line 3601 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3601 "socketmodule.c"
        var $12=_PyInt_FromLong($11); //@line 3601 "socketmodule.c"
        $0=$12; //@line 3601 "socketmodule.c"
        __label__ = 5; break; //@line 3601 "socketmodule.c"
      case 5: // $bb4
        var $13=$0; //@line 3593 "socketmodule.c"
        $retval=$13; //@line 3593 "socketmodule.c"
        var $retval5=$retval; //@line 3593 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3593 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_socketpair($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr_i2;
        var $family_addr_i3;
        var $type_addr_i4;
        var $proto_addr_i5;
        var $retval_i6;
        var $0;
        var $s_i7;
        var $fd_addr_i;
        var $family_addr_i;
        var $type_addr_i;
        var $proto_addr_i;
        var $retval_i1;
        var $1;
        var $s_i;
        var $retval_i;
        var $2;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $3;
        var $s0;
        var $s1;
        var $sv=__stackBase__;
        var $family=__stackBase__+8;
        var $type=__stackBase__+12;
        var $proto=__stackBase__+16;
        var $res;
        $self_addr=$self;
        $args_addr=$args;
        $s0=0; //@line 3620 "socketmodule.c"
        $s1=0; //@line 3620 "socketmodule.c"
        HEAP[$type]=1; //@line 3622 "socketmodule.c"
        HEAP[$proto]=0; //@line 3622 "socketmodule.c"
        $res=0; //@line 3623 "socketmodule.c"
        HEAP[$family]=1; //@line 3626 "socketmodule.c"
        var $4=$args_addr; //@line 3630 "socketmodule.c"
        var $5=_PyArg_ParseTuple($4, __str110, $family, $type, $proto); //@line 3630 "socketmodule.c"
        var $6=($5)==0; //@line 3630 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3630 "socketmodule.c"
      case 1: // $bb
        $3=0; //@line 3632 "socketmodule.c"
        __label__ = 24; break; //@line 3632 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$proto]; //@line 3634 "socketmodule.c"
        var $8=HEAP[$type]; //@line 3634 "socketmodule.c"
        var $9=HEAP[$family]; //@line 3634 "socketmodule.c"
        var $sv2=$sv; //@line 3634 "socketmodule.c"
        var $10=_socketpair($9, $8, $7, $sv2); //@line 3634 "socketmodule.c"
        var $11=($10) < 0; //@line 3634 "socketmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3634 "socketmodule.c"
      case 3: // $bb3
        var $12=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $13=_PyErr_SetFromErrno($12); //@line 543 "socketmodule.c"
        $2=$13; //@line 543 "socketmodule.c"
        var $14=$2; //@line 543 "socketmodule.c"
        $retval_i=$14; //@line 543 "socketmodule.c"
        var $retval1_i=$retval_i; //@line 543 "socketmodule.c"
        $3=$retval1_i; //@line 3635 "socketmodule.c"
        __label__ = 24; break; //@line 3635 "socketmodule.c"
      case 4: // $bb4
        var $15=HEAP[$proto]; //@line 3636 "socketmodule.c"
        var $16=HEAP[$type]; //@line 3636 "socketmodule.c"
        var $17=HEAP[$family]; //@line 3636 "socketmodule.c"
        var $18=$sv; //@line 3636 "socketmodule.c"
        var $19=HEAP[$18]; //@line 3636 "socketmodule.c"
        $fd_addr_i=$19;
        $family_addr_i=$17;
        $type_addr_i=$16;
        $proto_addr_i=$15;
        var $20=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $21=$20; //@line 757 "socketmodule.c"
        $s_i=$21; //@line 757 "socketmodule.c"
        var $22=$s_i; //@line 759 "socketmodule.c"
        var $23=($22)!=0; //@line 759 "socketmodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 759 "socketmodule.c"
      case 5: // $new_sockobject_exit_thread
        $1=$22; //@line 761 "socketmodule.c"
        $retval_i1=$22; //@line 761 "socketmodule.c"
        $s0=$22; //@line 3636 "socketmodule.c"
        __label__ = 11; break;
      case 6: // $new_sockobject_exit
        var $24=$s_i; //@line 760 "socketmodule.c"
        var $25=$fd_addr_i; //@line 760 "socketmodule.c"
        var $26=$family_addr_i; //@line 760 "socketmodule.c"
        var $27=$type_addr_i; //@line 760 "socketmodule.c"
        var $28=$proto_addr_i; //@line 760 "socketmodule.c"
        _init_sockobject($24, $25, $26, $27, $28); //@line 760 "socketmodule.c"
        var $_pr=$s_i;
        $1=$_pr; //@line 761 "socketmodule.c"
        $retval_i1=$_pr; //@line 761 "socketmodule.c"
        $s0=$_pr; //@line 3636 "socketmodule.c"
        var $29=($_pr)==0; //@line 3637 "socketmodule.c"
        if ($29) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 3637 "socketmodule.c"
      case 7: // $bb5
        var $30=HEAP[$proto]; //@line 3639 "socketmodule.c"
        var $31=HEAP[$type]; //@line 3639 "socketmodule.c"
        var $32=HEAP[$family]; //@line 3639 "socketmodule.c"
        var $33=$sv+4; //@line 3639 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3639 "socketmodule.c"
        $fd_addr_i2=$34;
        $family_addr_i3=$32;
        $type_addr_i4=$31;
        $proto_addr_i5=$30;
        var $35=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $36=$35; //@line 757 "socketmodule.c"
        $s_i7=$36; //@line 757 "socketmodule.c"
        var $37=$s_i7; //@line 759 "socketmodule.c"
        var $38=($37)!=0; //@line 759 "socketmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 759 "socketmodule.c"
      case 8: // $new_sockobject_exit10_thread
        $0=$37; //@line 761 "socketmodule.c"
        $retval_i6=$37; //@line 761 "socketmodule.c"
        $s1=$37; //@line 3639 "socketmodule.c"
        __label__ = 11; break;
      case 9: // $new_sockobject_exit10
        var $39=$s_i7; //@line 760 "socketmodule.c"
        var $40=$fd_addr_i2; //@line 760 "socketmodule.c"
        var $41=$family_addr_i3; //@line 760 "socketmodule.c"
        var $42=$type_addr_i4; //@line 760 "socketmodule.c"
        var $43=$proto_addr_i5; //@line 760 "socketmodule.c"
        _init_sockobject($39, $40, $41, $42, $43); //@line 760 "socketmodule.c"
        var $_pr11=$s_i7;
        $0=$_pr11; //@line 761 "socketmodule.c"
        $retval_i6=$_pr11; //@line 761 "socketmodule.c"
        $s1=$_pr11; //@line 3639 "socketmodule.c"
        var $44=($_pr11)==0; //@line 3640 "socketmodule.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 3640 "socketmodule.c"
      case 10: // $bb6
        var $45=$s0; //@line 3642 "socketmodule.c"
        var $46=$s1; //@line 3642 "socketmodule.c"
        var $47=_PyTuple_Pack(2, $45, $46); //@line 3642 "socketmodule.c"
        $res=$47; //@line 3642 "socketmodule.c"
        __lastLabel__ = 10; __label__ = 12; break; //@line 3644 "socketmodule.c"
      case 11: // $finallythread_pre_split
        var $_pr12=$res;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $finally
        var $48=__lastLabel__ == 11 ? $_pr12 : ($47);
        var $49=($48)==0; //@line 3645 "socketmodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 3645 "socketmodule.c"
      case 13: // $bb7
        var $50=$s0; //@line 3646 "socketmodule.c"
        var $51=($50)==0; //@line 3646 "socketmodule.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3646 "socketmodule.c"
      case 14: // $bb8
        var $52=$sv; //@line 3647 "socketmodule.c"
        var $53=HEAP[$52]; //@line 3647 "socketmodule.c"
        var $54=_close($53); //@line 3647 "socketmodule.c"
        __label__ = 15; break; //@line 3647 "socketmodule.c"
      case 15: // $bb9
        var $55=$s1; //@line 3648 "socketmodule.c"
        var $56=($55)==0; //@line 3648 "socketmodule.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 3648 "socketmodule.c"
      case 16: // $bb10
        var $57=$sv+4; //@line 3649 "socketmodule.c"
        var $58=HEAP[$57]; //@line 3649 "socketmodule.c"
        var $59=_close($58); //@line 3649 "socketmodule.c"
        __label__ = 17; break; //@line 3649 "socketmodule.c"
      case 17: // $bb11
        var $60=$s0; //@line 3651 "socketmodule.c"
        var $61=($60)!=0; //@line 3651 "socketmodule.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 3651 "socketmodule.c"
      case 18: // $bb12
        var $62=$s0; //@line 3651 "socketmodule.c"
        var $63=$62; //@line 3651 "socketmodule.c"
        var $64=$63; //@line 3651 "socketmodule.c"
        var $65=HEAP[$64]; //@line 3651 "socketmodule.c"
        var $66=($65) - 1; //@line 3651 "socketmodule.c"
        var $67=$63; //@line 3651 "socketmodule.c"
        HEAP[$67]=$66; //@line 3651 "socketmodule.c"
        var $68=$63; //@line 3651 "socketmodule.c"
        var $69=HEAP[$68]; //@line 3651 "socketmodule.c"
        var $70=($69)==0; //@line 3651 "socketmodule.c"
        if ($70) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 3651 "socketmodule.c"
      case 19: // $bb13
        var $71=$s0; //@line 3651 "socketmodule.c"
        var $72=$71; //@line 3651 "socketmodule.c"
        var $73=$72+4; //@line 3651 "socketmodule.c"
        var $74=HEAP[$73]; //@line 3651 "socketmodule.c"
        var $75=$74+24; //@line 3651 "socketmodule.c"
        var $76=HEAP[$75]; //@line 3651 "socketmodule.c"
        var $77=$s0; //@line 3651 "socketmodule.c"
        var $78=$77; //@line 3651 "socketmodule.c"
        FUNCTION_TABLE[$76]($78); //@line 3651 "socketmodule.c"
        __label__ = 20; break; //@line 3651 "socketmodule.c"
      case 20: // $bb14
        var $79=$s1; //@line 3652 "socketmodule.c"
        var $80=($79)!=0; //@line 3652 "socketmodule.c"
        if ($80) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 3652 "socketmodule.c"
      case 21: // $bb15
        var $81=$s1; //@line 3652 "socketmodule.c"
        var $82=$81; //@line 3652 "socketmodule.c"
        var $83=$82; //@line 3652 "socketmodule.c"
        var $84=HEAP[$83]; //@line 3652 "socketmodule.c"
        var $85=($84) - 1; //@line 3652 "socketmodule.c"
        var $86=$82; //@line 3652 "socketmodule.c"
        HEAP[$86]=$85; //@line 3652 "socketmodule.c"
        var $87=$82; //@line 3652 "socketmodule.c"
        var $88=HEAP[$87]; //@line 3652 "socketmodule.c"
        var $89=($88)==0; //@line 3652 "socketmodule.c"
        if ($89) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 3652 "socketmodule.c"
      case 22: // $bb16
        var $90=$s1; //@line 3652 "socketmodule.c"
        var $91=$90; //@line 3652 "socketmodule.c"
        var $92=$91+4; //@line 3652 "socketmodule.c"
        var $93=HEAP[$92]; //@line 3652 "socketmodule.c"
        var $94=$93+24; //@line 3652 "socketmodule.c"
        var $95=HEAP[$94]; //@line 3652 "socketmodule.c"
        var $96=$s1; //@line 3652 "socketmodule.c"
        var $97=$96; //@line 3652 "socketmodule.c"
        FUNCTION_TABLE[$95]($97); //@line 3652 "socketmodule.c"
        __label__ = 23; break; //@line 3652 "socketmodule.c"
      case 23: // $bb17
        var $98=$res; //@line 3653 "socketmodule.c"
        $3=$98; //@line 3653 "socketmodule.c"
        __label__ = 24; break; //@line 3653 "socketmodule.c"
      case 24: // $bb18
        var $99=$3; //@line 3632 "socketmodule.c"
        $retval=$99; //@line 3632 "socketmodule.c"
        var $retval19=$retval; //@line 3632 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 3632 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_fromfd($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr_i;
        var $family_addr_i;
        var $type_addr_i;
        var $proto_addr_i;
        var $retval_i1;
        var $0;
        var $s_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $2;
        var $s;
        var $fd=__stackBase__;
        var $family=__stackBase__+4;
        var $type=__stackBase__+8;
        var $proto=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3678 "socketmodule.c"
        var $3=$args_addr; //@line 3679 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, __str111, $fd, $family, $type, $proto); //@line 3679 "socketmodule.c"
        var $5=($4)==0; //@line 3679 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3679 "socketmodule.c"
      case 1: // $bb
        $2=0; //@line 3681 "socketmodule.c"
        __label__ = 7; break; //@line 3681 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$fd]; //@line 3683 "socketmodule.c"
        var $7=_dup($6); //@line 3683 "socketmodule.c"
        HEAP[$fd]=$7; //@line 3683 "socketmodule.c"
        var $8=HEAP[$fd]; //@line 3684 "socketmodule.c"
        var $9=($8) < 0; //@line 3684 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3684 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[_socket_error]; //@line 543 "socketmodule.c"
        var $11=_PyErr_SetFromErrno($10); //@line 543 "socketmodule.c"
        $1=$11; //@line 543 "socketmodule.c"
        var $12=$1; //@line 543 "socketmodule.c"
        $retval_i=$12; //@line 543 "socketmodule.c"
        var $retval1_i=$retval_i; //@line 543 "socketmodule.c"
        $2=$retval1_i; //@line 3685 "socketmodule.c"
        __label__ = 7; break; //@line 3685 "socketmodule.c"
      case 4: // $bb3
        var $13=HEAP[$proto]; //@line 3686 "socketmodule.c"
        var $14=HEAP[$type]; //@line 3686 "socketmodule.c"
        var $15=HEAP[$family]; //@line 3686 "socketmodule.c"
        var $16=HEAP[$fd]; //@line 3686 "socketmodule.c"
        $fd_addr_i=$16;
        $family_addr_i=$15;
        $type_addr_i=$14;
        $proto_addr_i=$13;
        var $17=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $18=$17; //@line 757 "socketmodule.c"
        $s_i=$18; //@line 757 "socketmodule.c"
        var $19=$s_i; //@line 759 "socketmodule.c"
        var $20=($19)!=0; //@line 759 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 759 "socketmodule.c"
      case 5: // $bb_i
        var $21=$s_i; //@line 760 "socketmodule.c"
        var $22=$fd_addr_i; //@line 760 "socketmodule.c"
        var $23=$family_addr_i; //@line 760 "socketmodule.c"
        var $24=$type_addr_i; //@line 760 "socketmodule.c"
        var $25=$proto_addr_i; //@line 760 "socketmodule.c"
        _init_sockobject($21, $22, $23, $24, $25); //@line 760 "socketmodule.c"
        __label__ = 6; break; //@line 760 "socketmodule.c"
      case 6: // $new_sockobject_exit
        var $26=$s_i; //@line 761 "socketmodule.c"
        $0=$26; //@line 761 "socketmodule.c"
        var $27=$0; //@line 761 "socketmodule.c"
        $retval_i1=$27; //@line 761 "socketmodule.c"
        var $retval2_i=$retval_i1; //@line 761 "socketmodule.c"
        $s=$retval2_i; //@line 3686 "socketmodule.c"
        var $28=$s; //@line 3687 "socketmodule.c"
        var $29=$28; //@line 3687 "socketmodule.c"
        $2=$29; //@line 3687 "socketmodule.c"
        __label__ = 7; break; //@line 3687 "socketmodule.c"
      case 7: // $bb4
        var $30=$2; //@line 3681 "socketmodule.c"
        $retval=$30; //@line 3681 "socketmodule.c"
        var $retval5=$retval; //@line 3681 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3681 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x1=__stackBase__;
        var $x2;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3705 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str112, $x1); //@line 3705 "socketmodule.c"
        var $3=($2)==0; //@line 3705 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3705 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3706 "socketmodule.c"
        __label__ = 5; break; //@line 3706 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3708 "socketmodule.c"
        var $5=($4) < 0; //@line 3708 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3708 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3709 "socketmodule.c"
        _PyErr_SetString($6, __str113); //@line 3709 "socketmodule.c"
        $0=0; //@line 3711 "socketmodule.c"
        __label__ = 5; break; //@line 3711 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3713 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3713 "socketmodule.c"
        var $9=($8); //@line 3713 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3713 "socketmodule.c"
        var $11=_ntohs($10); //@line 3713 "socketmodule.c"
        var $12=($11); //@line 3713 "socketmodule.c"
        $x2=$12; //@line 3713 "socketmodule.c"
        var $13=$x2; //@line 3714 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3714 "socketmodule.c"
        $0=$14; //@line 3714 "socketmodule.c"
        __label__ = 5; break; //@line 3714 "socketmodule.c"
      case 5: // $bb4
        var $15=$0; //@line 3706 "socketmodule.c"
        $retval=$15; //@line 3706 "socketmodule.c"
        var $retval5=$retval; //@line 3706 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3706 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohl($self, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 3728 "socketmodule.c"
        var $2=$1+4; //@line 3728 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3728 "socketmodule.c"
        var $4=$3+84; //@line 3728 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3728 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3728 "socketmodule.c"
        var $7=($6)!=0; //@line 3728 "socketmodule.c"
        var $8=$arg_addr; //@line 3729 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3728 "socketmodule.c"
      case 1: // $bb
        var $9=$8; //@line 3729 "socketmodule.c"
        var $10=$9+8; //@line 3729 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3729 "socketmodule.c"
        $x=$11; //@line 3729 "socketmodule.c"
        var $12=$x; //@line 3730 "socketmodule.c"
        var $13=($12)==-1; //@line 3730 "socketmodule.c"
        if ($13) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 3730 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3730 "socketmodule.c"
        var $15=($14)!=0; //@line 3730 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3730 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 3731 "socketmodule.c"
        __label__ = 16; break; //@line 3731 "socketmodule.c"
      case 4: // $bb3thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb3
        var $16=__lastLabel__ == 4 ? $_pr : ($12);
        var $17=($16) < 0; //@line 3732 "socketmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 3732 "socketmodule.c"
      case 6: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3733 "socketmodule.c"
        _PyErr_SetString($18, __str113); //@line 3733 "socketmodule.c"
        $0=0; //@line 3735 "socketmodule.c"
        __label__ = 16; break; //@line 3735 "socketmodule.c"
      case 7: // $bb6
        var $19=$8+4; //@line 3738 "socketmodule.c"
        var $20=HEAP[$19]; //@line 3738 "socketmodule.c"
        var $21=$20+84; //@line 3738 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3738 "socketmodule.c"
        var $23=($22) & 16777216; //@line 3738 "socketmodule.c"
        var $24=($23)!=0; //@line 3738 "socketmodule.c"
        var $25=$arg_addr; //@line 3739 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 3738 "socketmodule.c"
      case 8: // $bb7
        var $26=_PyLong_AsUnsignedLong($25); //@line 3739 "socketmodule.c"
        $x=$26; //@line 3739 "socketmodule.c"
        var $27=$x; //@line 3740 "socketmodule.c"
        var $28=($27)==-1; //@line 3740 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 3740 "socketmodule.c"
      case 9: // $bb8
        var $29=_PyErr_Occurred(); //@line 3740 "socketmodule.c"
        var $30=($29)!=0; //@line 3740 "socketmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3740 "socketmodule.c"
      case 10: // $bb9
        $0=0; //@line 3741 "socketmodule.c"
        __label__ = 16; break; //@line 3741 "socketmodule.c"
      case 11: // $bb11
        var $31=$25+4; //@line 3755 "socketmodule.c"
        var $32=HEAP[$31]; //@line 3755 "socketmodule.c"
        var $33=$32+12; //@line 3755 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3755 "socketmodule.c"
        var $35=HEAP[_PyExc_TypeError]; //@line 3755 "socketmodule.c"
        var $36=_PyErr_Format($35, __str114, $34); //@line 3755 "socketmodule.c"
        $0=$36; //@line 3755 "socketmodule.c"
        __label__ = 16; break; //@line 3755 "socketmodule.c"
      case 12: // $bb12
        var $_pr1=$x;
        var $37=($_pr1)==-1; //@line 3758 "socketmodule.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 3758 "socketmodule.c"
      case 13: // $bb13
        var $38=_PyErr_Occurred(); //@line 3758 "socketmodule.c"
        var $39=($38)!=0; //@line 3758 "socketmodule.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3758 "socketmodule.c"
      case 14: // $bb14
        $0=0; //@line 3759 "socketmodule.c"
        __label__ = 16; break; //@line 3759 "socketmodule.c"
      case 15: // $bb15
        var $40=$x; //@line 3760 "socketmodule.c"
        var $41=_ntohl($40); //@line 3760 "socketmodule.c"
        var $42=_PyLong_FromUnsignedLong($41); //@line 3760 "socketmodule.c"
        $0=$42; //@line 3760 "socketmodule.c"
        __label__ = 16; break; //@line 3760 "socketmodule.c"
      case 16: // $bb16
        var $43=$0; //@line 3731 "socketmodule.c"
        $retval=$43; //@line 3731 "socketmodule.c"
        var $retval17=$retval; //@line 3731 "socketmodule.c"
        ;
        return $retval17; //@line 3731 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htons($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x1=__stackBase__;
        var $x2;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3774 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str115, $x1); //@line 3774 "socketmodule.c"
        var $3=($2)==0; //@line 3774 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3774 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3775 "socketmodule.c"
        __label__ = 5; break; //@line 3775 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3777 "socketmodule.c"
        var $5=($4) < 0; //@line 3777 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3777 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3778 "socketmodule.c"
        _PyErr_SetString($6, __str113); //@line 3778 "socketmodule.c"
        $0=0; //@line 3780 "socketmodule.c"
        __label__ = 5; break; //@line 3780 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3782 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3782 "socketmodule.c"
        var $9=($8); //@line 3782 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3782 "socketmodule.c"
        var $11=_htons($10); //@line 3782 "socketmodule.c"
        var $12=($11); //@line 3782 "socketmodule.c"
        $x2=$12; //@line 3782 "socketmodule.c"
        var $13=$x2; //@line 3783 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3783 "socketmodule.c"
        $0=$14; //@line 3783 "socketmodule.c"
        __label__ = 5; break; //@line 3783 "socketmodule.c"
      case 5: // $bb4
        var $15=$0; //@line 3775 "socketmodule.c"
        $retval=$15; //@line 3775 "socketmodule.c"
        var $retval5=$retval; //@line 3775 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3775 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htonl($self, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 3797 "socketmodule.c"
        var $2=$1+4; //@line 3797 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3797 "socketmodule.c"
        var $4=$3+84; //@line 3797 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3797 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3797 "socketmodule.c"
        var $7=($6)!=0; //@line 3797 "socketmodule.c"
        var $8=$arg_addr; //@line 3798 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3797 "socketmodule.c"
      case 1: // $bb
        var $9=$8; //@line 3798 "socketmodule.c"
        var $10=$9+8; //@line 3798 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3798 "socketmodule.c"
        $x=$11; //@line 3798 "socketmodule.c"
        var $12=$x; //@line 3799 "socketmodule.c"
        var $13=($12)==-1; //@line 3799 "socketmodule.c"
        if ($13) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 3799 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3799 "socketmodule.c"
        var $15=($14)!=0; //@line 3799 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3799 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 3800 "socketmodule.c"
        __label__ = 13; break; //@line 3800 "socketmodule.c"
      case 4: // $bb3thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb3
        var $16=__lastLabel__ == 4 ? $_pr : ($12);
        var $17=($16) < 0; //@line 3801 "socketmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 3801 "socketmodule.c"
      case 6: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3802 "socketmodule.c"
        _PyErr_SetString($18, __str113); //@line 3802 "socketmodule.c"
        $0=0; //@line 3804 "socketmodule.c"
        __label__ = 13; break; //@line 3804 "socketmodule.c"
      case 7: // $bb6
        var $19=$8+4; //@line 3807 "socketmodule.c"
        var $20=HEAP[$19]; //@line 3807 "socketmodule.c"
        var $21=$20+84; //@line 3807 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3807 "socketmodule.c"
        var $23=($22) & 16777216; //@line 3807 "socketmodule.c"
        var $24=($23)!=0; //@line 3807 "socketmodule.c"
        var $25=$arg_addr; //@line 3808 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 3807 "socketmodule.c"
      case 8: // $bb7
        var $26=_PyLong_AsUnsignedLong($25); //@line 3808 "socketmodule.c"
        $x=$26; //@line 3808 "socketmodule.c"
        var $27=$x; //@line 3809 "socketmodule.c"
        var $28=($27)==-1; //@line 3809 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 3809 "socketmodule.c"
      case 9: // $bb8
        var $29=_PyErr_Occurred(); //@line 3809 "socketmodule.c"
        var $30=($29)!=0; //@line 3809 "socketmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3809 "socketmodule.c"
      case 10: // $bb9
        $0=0; //@line 3810 "socketmodule.c"
        __label__ = 13; break; //@line 3810 "socketmodule.c"
      case 11: // $bb11
        var $31=$25+4; //@line 3824 "socketmodule.c"
        var $32=HEAP[$31]; //@line 3824 "socketmodule.c"
        var $33=$32+12; //@line 3824 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3824 "socketmodule.c"
        var $35=HEAP[_PyExc_TypeError]; //@line 3824 "socketmodule.c"
        var $36=_PyErr_Format($35, __str114, $34); //@line 3824 "socketmodule.c"
        $0=$36; //@line 3824 "socketmodule.c"
        __label__ = 13; break; //@line 3824 "socketmodule.c"
      case 12: // $bb12
        var $37=$x; //@line 3827 "socketmodule.c"
        var $38=_htonl($37); //@line 3827 "socketmodule.c"
        var $39=_PyLong_FromUnsignedLong($38); //@line 3827 "socketmodule.c"
        $0=$39; //@line 3827 "socketmodule.c"
        __label__ = 13; break; //@line 3827 "socketmodule.c"
      case 13: // $bb13
        var $40=$0; //@line 3800 "socketmodule.c"
        $retval=$40; //@line 3800 "socketmodule.c"
        var $retval14=$retval; //@line 3800 "socketmodule.c"
        ;
        return $retval14; //@line 3800 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_aton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $ip_addr=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3862 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str116, $ip_addr); //@line 3862 "socketmodule.c"
        var $3=($2)==0; //@line 3862 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3862 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3863 "socketmodule.c"
        __label__ = 5; break; //@line 3863 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ip_addr]; //@line 3871 "socketmodule.c"
        var $5=_inet_aton($4, $buf); //@line 3871 "socketmodule.c"
        var $6=($5)!=0; //@line 3871 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3871 "socketmodule.c"
      case 3: // $bb2
        var $buf3=$buf; //@line 3872 "socketmodule.c"
        var $7=_PyString_FromStringAndSize($buf3, 4); //@line 3872 "socketmodule.c"
        $0=$7; //@line 3872 "socketmodule.c"
        __label__ = 5; break; //@line 3872 "socketmodule.c"
      case 4: // $bb5
        var $8=HEAP[_socket_error]; //@line 3875 "socketmodule.c"
        _PyErr_SetString($8, __str117); //@line 3875 "socketmodule.c"
        $0=0; //@line 3877 "socketmodule.c"
        __label__ = 5; break; //@line 3877 "socketmodule.c"
      case 5: // $bb6
        var $9=$0; //@line 3863 "socketmodule.c"
        $retval=$9; //@line 3863 "socketmodule.c"
        var $retval7=$retval; //@line 3863 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 3863 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntoa($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $packed_str=__stackBase__;
        var $addr_len=__stackBase__+4;
        var $packed_addr=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3923 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str118, $packed_str, $addr_len); //@line 3923 "socketmodule.c"
        var $3=($2)==0; //@line 3923 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3923 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3924 "socketmodule.c"
        __label__ = 5; break; //@line 3924 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$addr_len]; //@line 3927 "socketmodule.c"
        var $5=($4)!=4; //@line 3927 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3927 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_socket_error]; //@line 3928 "socketmodule.c"
        _PyErr_SetString($6, __str119); //@line 3928 "socketmodule.c"
        $0=0; //@line 3930 "socketmodule.c"
        __label__ = 5; break; //@line 3930 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$addr_len]; //@line 3933 "socketmodule.c"
        var $8=HEAP[$packed_str]; //@line 3933 "socketmodule.c"
        var $packed_addr4=$packed_addr; //@line 3933 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($packed_addr4, $8, $7, 1, 0); //@line 3933 "socketmodule.c"
        var $elt=$packed_addr; //@line 3935 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 3935 "socketmodule.c"
        var $9=_inet_ntoa($val); //@line 3935 "socketmodule.c"
        var $10=_PyString_FromString($9); //@line 3935 "socketmodule.c"
        $0=$10; //@line 3935 "socketmodule.c"
        __label__ = 5; break; //@line 3935 "socketmodule.c"
      case 5: // $bb5
        var $11=$0; //@line 3924 "socketmodule.c"
        $retval=$11; //@line 3924 "socketmodule.c"
        var $retval6=$retval; //@line 3924 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 3924 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_pton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $af=__stackBase__;
        var $ip=__stackBase__+4;
        var $retval1;
        var $packed=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3957 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str120, $af, $ip); //@line 3957 "socketmodule.c"
        var $3=($2)==0; //@line 3957 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3957 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3958 "socketmodule.c"
        __label__ = 11; break; //@line 3958 "socketmodule.c"
      case 2: // $bb2
        var $4=HEAP[$ip]; //@line 3969 "socketmodule.c"
        var $5=HEAP[$af]; //@line 3969 "socketmodule.c"
        var $packed3=$packed; //@line 3969 "socketmodule.c"
        var $6=_inet_pton($5, $4, $packed3); //@line 3969 "socketmodule.c"
        $retval1=$6; //@line 3969 "socketmodule.c"
        var $7=$retval1; //@line 3970 "socketmodule.c"
        var $8=($7) < 0; //@line 3970 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3970 "socketmodule.c"
      case 3: // $bb4
        var $9=HEAP[_socket_error]; //@line 3971 "socketmodule.c"
        var $10=_PyErr_SetFromErrno($9); //@line 3971 "socketmodule.c"
        $0=0; //@line 3972 "socketmodule.c"
        __label__ = 11; break; //@line 3972 "socketmodule.c"
      case 4: // $bb5
        var $11=$retval1; //@line 3973 "socketmodule.c"
        var $12=($11)==0; //@line 3973 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3973 "socketmodule.c"
      case 5: // $bb6
        var $13=HEAP[_socket_error]; //@line 3974 "socketmodule.c"
        _PyErr_SetString($13, __str121); //@line 3974 "socketmodule.c"
        $0=0; //@line 3976 "socketmodule.c"
        __label__ = 11; break; //@line 3976 "socketmodule.c"
      case 6: // $bb7
        var $14=HEAP[$af]; //@line 3977 "socketmodule.c"
        var $15=($14)==2; //@line 3977 "socketmodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3977 "socketmodule.c"
      case 7: // $bb8
        var $packed9=$packed; //@line 3978 "socketmodule.c"
        var $16=_PyString_FromStringAndSize($packed9, 4); //@line 3978 "socketmodule.c"
        $0=$16; //@line 3978 "socketmodule.c"
        __label__ = 11; break; //@line 3978 "socketmodule.c"
      case 8: // $bb10
        var $17=HEAP[$af]; //@line 3981 "socketmodule.c"
        var $18=($17)==10; //@line 3981 "socketmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3981 "socketmodule.c"
      case 9: // $bb11
        var $packed12=$packed; //@line 3982 "socketmodule.c"
        var $19=_PyString_FromStringAndSize($packed12, 16); //@line 3982 "socketmodule.c"
        $0=$19; //@line 3982 "socketmodule.c"
        __label__ = 11; break; //@line 3982 "socketmodule.c"
      case 10: // $bb13
        var $20=HEAP[_socket_error]; //@line 3986 "socketmodule.c"
        _PyErr_SetString($20, __str8); //@line 3986 "socketmodule.c"
        $0=0; //@line 3987 "socketmodule.c"
        __label__ = 11; break; //@line 3987 "socketmodule.c"
      case 11: // $bb14
        var $21=$0; //@line 3958 "socketmodule.c"
        $retval=$21; //@line 3958 "socketmodule.c"
        var $retval15=$retval; //@line 3958 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 3958 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 59; _memset(__stackBase__, 0, 59);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $af=__stackBase__;
        var $packed=__stackBase__+4;
        var $len=__stackBase__+8;
        var $retval1;
        var $ip=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$ip; //@line 4010 "socketmodule.c"
        _llvm_memset_p0i8_i32($1, 0, 47, 1, 0); //@line 4010 "socketmodule.c"
        var $2=$args_addr; //@line 4012 "socketmodule.c"
        var $3=_PyArg_ParseTuple($2, __str122, $af, $packed, $len); //@line 4012 "socketmodule.c"
        var $4=($3)==0; //@line 4012 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4012 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4013 "socketmodule.c"
        __label__ = 12; break; //@line 4013 "socketmodule.c"
      case 2: // $bb2
        var $5=HEAP[$af]; //@line 4016 "socketmodule.c"
        var $6=($5)==2; //@line 4016 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 4016 "socketmodule.c"
      case 3: // $bb3
        var $7=HEAP[$len]; //@line 4017 "socketmodule.c"
        var $8=($7)!=4; //@line 4017 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 4017 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 4018 "socketmodule.c"
        _PyErr_SetString($9, __str123); //@line 4018 "socketmodule.c"
        $0=0; //@line 4020 "socketmodule.c"
        __label__ = 12; break; //@line 4020 "socketmodule.c"
      case 5: // $bb6
        var $10=HEAP[$af]; //@line 4023 "socketmodule.c"
        var $11=($10)==10; //@line 4023 "socketmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 4023 "socketmodule.c"
      case 6: // $bb7
        var $12=HEAP[$len]; //@line 4024 "socketmodule.c"
        var $13=($12)!=16; //@line 4024 "socketmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 4024 "socketmodule.c"
      case 7: // $bb8
        var $14=HEAP[_PyExc_ValueError]; //@line 4025 "socketmodule.c"
        _PyErr_SetString($14, __str123); //@line 4025 "socketmodule.c"
        $0=0; //@line 4027 "socketmodule.c"
        __label__ = 12; break; //@line 4027 "socketmodule.c"
      case 8: // $bb10
        var $15=HEAP[$af]; //@line 4031 "socketmodule.c"
        var $16=HEAP[_PyExc_ValueError]; //@line 4031 "socketmodule.c"
        var $17=_PyErr_Format($16, __str124, $15); //@line 4031 "socketmodule.c"
        $0=0; //@line 4033 "socketmodule.c"
        __label__ = 12; break; //@line 4033 "socketmodule.c"
      case 9: // $bb11
        var $18=HEAP[$packed]; //@line 4036 "socketmodule.c"
        var $19=HEAP[$af]; //@line 4036 "socketmodule.c"
        var $ip12=$ip; //@line 4036 "socketmodule.c"
        var $20=_inet_ntop($19, $18, $ip12, 47); //@line 4036 "socketmodule.c"
        $retval1=$20; //@line 4036 "socketmodule.c"
        var $21=($20)==0; //@line 4037 "socketmodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 4037 "socketmodule.c"
      case 10: // $bb13
        var $22=HEAP[_socket_error]; //@line 4038 "socketmodule.c"
        var $23=_PyErr_SetFromErrno($22); //@line 4038 "socketmodule.c"
        $0=0; //@line 4039 "socketmodule.c"
        __label__ = 12; break; //@line 4039 "socketmodule.c"
      case 11: // $bb14
        var $24=$retval1; //@line 4041 "socketmodule.c"
        var $25=_PyString_FromString($24); //@line 4041 "socketmodule.c"
        $0=$25; //@line 4041 "socketmodule.c"
        __label__ = 12; break; //@line 4041 "socketmodule.c"
      case 12: // $bb15
        var $26=$0; //@line 4013 "socketmodule.c"
        $retval=$26; //@line 4013 "socketmodule.c"
        var $retval16=$retval; //@line 4013 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 4013 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getaddrinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 90; _memset(__stackBase__, 0, 90);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_366;
        var $0;
        var $hints=__stackBase__;
        var $res;
        var $res0=__stackBase__+32;
        var $hobj=__stackBase__+36;
        var $pobj=__stackBase__+40;
        var $pbuf=__stackBase__+44;
        var $hptr;
        var $pptr;
        var $family=__stackBase__+74;
        var $socktype=__stackBase__+78;
        var $protocol=__stackBase__+82;
        var $flags=__stackBase__+86;
        var $error;
        var $all;
        var $single;
        var $idna;
        var $addr;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$res0]=0; //@line 4058 "socketmodule.c"
        HEAP[$hobj]=0; //@line 4059 "socketmodule.c"
        HEAP[$pobj]=0; //@line 4060 "socketmodule.c"
        $all=0; //@line 4065 "socketmodule.c"
        $single=0; //@line 4066 "socketmodule.c"
        $idna=0; //@line 4067 "socketmodule.c"
        HEAP[$flags]=0; //@line 4069 "socketmodule.c"
        var $1=HEAP[$flags]; //@line 4069 "socketmodule.c"
        HEAP[$protocol]=$1; //@line 4069 "socketmodule.c"
        var $2=HEAP[$protocol]; //@line 4069 "socketmodule.c"
        HEAP[$socktype]=$2; //@line 4069 "socketmodule.c"
        HEAP[$family]=0; //@line 4070 "socketmodule.c"
        var $3=$args_addr; //@line 4071 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, __str125, $hobj, $pobj, $family, $socktype, $protocol, $flags); //@line 4071 "socketmodule.c"
        var $5=($4)==0; //@line 4071 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4071 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4074 "socketmodule.c"
        __label__ = 53; break; //@line 4074 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$hobj]; //@line 4076 "socketmodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 4076 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4076 "socketmodule.c"
      case 3: // $bb2
        $hptr=0; //@line 4077 "socketmodule.c"
        __label__ = 11; break; //@line 4077 "socketmodule.c"
      case 4: // $bb3
        var $8=HEAP[$hobj]; //@line 4078 "socketmodule.c"
        var $9=$8+4; //@line 4078 "socketmodule.c"
        var $10=HEAP[$9]; //@line 4078 "socketmodule.c"
        var $11=$10+84; //@line 4078 "socketmodule.c"
        var $12=HEAP[$11]; //@line 4078 "socketmodule.c"
        var $13=($12) & 268435456; //@line 4078 "socketmodule.c"
        var $14=($13)!=0; //@line 4078 "socketmodule.c"
        var $15=HEAP[$hobj]; //@line 4079 "socketmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 4078 "socketmodule.c"
      case 5: // $bb4
        var $16=_PyObject_CallMethod($15, __str126, __str127, __str23); //@line 4079 "socketmodule.c"
        $idna=$16; //@line 4079 "socketmodule.c"
        var $17=$idna; //@line 4080 "socketmodule.c"
        var $18=($17)==0; //@line 4080 "socketmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4080 "socketmodule.c"
      case 6: // $bb5
        $0=0; //@line 4081 "socketmodule.c"
        __label__ = 53; break; //@line 4081 "socketmodule.c"
      case 7: // $bb6
        var $19=$idna; //@line 4082 "socketmodule.c"
        var $20=_PyString_AsString($19); //@line 4082 "socketmodule.c"
        $hptr=$20; //@line 4082 "socketmodule.c"
        __label__ = 11; break; //@line 4082 "socketmodule.c"
      case 8: // $bb7
        var $21=$15+4; //@line 4083 "socketmodule.c"
        var $22=HEAP[$21]; //@line 4083 "socketmodule.c"
        var $23=$22+84; //@line 4083 "socketmodule.c"
        var $24=HEAP[$23]; //@line 4083 "socketmodule.c"
        var $25=($24) & 134217728; //@line 4083 "socketmodule.c"
        var $26=($25)!=0; //@line 4083 "socketmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4083 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$hobj]; //@line 4084 "socketmodule.c"
        var $28=_PyString_AsString($27); //@line 4084 "socketmodule.c"
        $hptr=$28; //@line 4084 "socketmodule.c"
        __label__ = 11; break; //@line 4084 "socketmodule.c"
      case 10: // $bb9
        var $29=HEAP[_PyExc_TypeError]; //@line 4086 "socketmodule.c"
        _PyErr_SetString($29, __str128); //@line 4086 "socketmodule.c"
        $0=0; //@line 4088 "socketmodule.c"
        __label__ = 53; break; //@line 4088 "socketmodule.c"
      case 11: // $bb10
        var $30=HEAP[$pobj]; //@line 4090 "socketmodule.c"
        var $31=$30+4; //@line 4090 "socketmodule.c"
        var $32=HEAP[$31]; //@line 4090 "socketmodule.c"
        var $33=$32+84; //@line 4090 "socketmodule.c"
        var $34=HEAP[$33]; //@line 4090 "socketmodule.c"
        var $35=($34) & 8388608; //@line 4090 "socketmodule.c"
        var $36=($35)!=0; //@line 4090 "socketmodule.c"
        var $37=HEAP[$pobj]; //@line 4091 "socketmodule.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4090 "socketmodule.c"
      case 12: // $bb11
        var $38=_PyInt_AsLong($37); //@line 4091 "socketmodule.c"
        var $pbuf12=$pbuf; //@line 4091 "socketmodule.c"
        var $39=_PyOS_snprintf($pbuf12, 30, __str129, $38); //@line 4091 "socketmodule.c"
        var $pbuf13=$pbuf; //@line 4092 "socketmodule.c"
        $pptr=$pbuf13; //@line 4092 "socketmodule.c"
        __label__ = 18; break; //@line 4092 "socketmodule.c"
      case 13: // $bb14
        var $40=$37+4; //@line 4093 "socketmodule.c"
        var $41=HEAP[$40]; //@line 4093 "socketmodule.c"
        var $42=$41+84; //@line 4093 "socketmodule.c"
        var $43=HEAP[$42]; //@line 4093 "socketmodule.c"
        var $44=($43) & 134217728; //@line 4093 "socketmodule.c"
        var $45=($44)!=0; //@line 4093 "socketmodule.c"
        var $46=HEAP[$pobj]; //@line 4094 "socketmodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 4093 "socketmodule.c"
      case 14: // $bb15
        var $47=_PyString_AsString($46); //@line 4094 "socketmodule.c"
        $pptr=$47; //@line 4094 "socketmodule.c"
        __label__ = 18; break; //@line 4094 "socketmodule.c"
      case 15: // $bb16
        var $48=($46)==(__Py_NoneStruct); //@line 4095 "socketmodule.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 4095 "socketmodule.c"
      case 16: // $bb17
        $pptr=0; //@line 4096 "socketmodule.c"
        __label__ = 18; break; //@line 4096 "socketmodule.c"
      case 17: // $bb18
        var $49=HEAP[_socket_error]; //@line 4098 "socketmodule.c"
        _PyErr_SetString($49, __str130); //@line 4098 "socketmodule.c"
        __label__ = 41; break; //@line 4098 "socketmodule.c"
      case 18: // $bb19
        var $hints20=$hints; //@line 4101 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints20, 0, 32, 1, 0); //@line 4101 "socketmodule.c"
        var $50=HEAP[$family]; //@line 4102 "socketmodule.c"
        var $51=$hints+4; //@line 4102 "socketmodule.c"
        HEAP[$51]=$50; //@line 4102 "socketmodule.c"
        var $52=HEAP[$socktype]; //@line 4103 "socketmodule.c"
        var $53=$hints+8; //@line 4103 "socketmodule.c"
        HEAP[$53]=$52; //@line 4103 "socketmodule.c"
        var $54=HEAP[$protocol]; //@line 4104 "socketmodule.c"
        var $55=$hints+12; //@line 4104 "socketmodule.c"
        HEAP[$55]=$54; //@line 4104 "socketmodule.c"
        var $56=HEAP[$flags]; //@line 4105 "socketmodule.c"
        var $57=$hints; //@line 4105 "socketmodule.c"
        HEAP[$57]=$56; //@line 4105 "socketmodule.c"
        var $58=$hptr; //@line 4108 "socketmodule.c"
        var $59=$pptr; //@line 4108 "socketmodule.c"
        var $60=_getaddrinfo($58, $59, $hints, $res0); //@line 4108 "socketmodule.c"
        $error=$60; //@line 4108 "socketmodule.c"
        var $61=($60)!=0; //@line 4111 "socketmodule.c"
        if ($61) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 4111 "socketmodule.c"
      case 19: // $bb21
        var $62=$error; //@line 4112 "socketmodule.c"
        _set_gaierror($62); //@line 4112 "socketmodule.c"
        __label__ = 41; break; //@line 4112 "socketmodule.c"
      case 20: // $bb22
        var $63=_PyList_New(0); //@line 4116 "socketmodule.c"
        $all=$63; //@line 4116 "socketmodule.c"
        var $64=$all; //@line 4116 "socketmodule.c"
        var $65=($64)==0; //@line 4116 "socketmodule.c"
        if ($65) { __label__ = 41; break; } else { __label__ = 21; break; } //@line 4116 "socketmodule.c"
      case 21: // $bb23
        var $66=HEAP[$res0]; //@line 4118 "socketmodule.c"
        $res=$66; //@line 4118 "socketmodule.c"
        __lastLabel__ = 21; __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 22: // $bb24
        var $67=HEAP[$protocol]; //@line 4120 "socketmodule.c"
        var $68=$res; //@line 4120 "socketmodule.c"
        var $69=$68+16; //@line 4120 "socketmodule.c"
        var $70=HEAP[$69]; //@line 4120 "socketmodule.c"
        var $71=$res; //@line 4120 "socketmodule.c"
        var $72=$71+20; //@line 4120 "socketmodule.c"
        var $73=HEAP[$72]; //@line 4120 "socketmodule.c"
        var $74=_makesockaddr(-1, $73, $70, $67); //@line 4120 "socketmodule.c"
        $addr=$74; //@line 4120 "socketmodule.c"
        var $75=$addr; //@line 4121 "socketmodule.c"
        var $76=($75)==0; //@line 4121 "socketmodule.c"
        if ($76) { __label__ = 41; break; } else { __label__ = 23; break; } //@line 4121 "socketmodule.c"
      case 23: // $bb25
        var $77=$res; //@line 4123 "socketmodule.c"
        var $78=$77+24; //@line 4123 "socketmodule.c"
        var $79=HEAP[$78]; //@line 4123 "socketmodule.c"
        var $80=($79)!=0; //@line 4123 "socketmodule.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 4123 "socketmodule.c"
      case 24: // $bb26
        var $81=$res; //@line 4123 "socketmodule.c"
        var $82=$81+24; //@line 4123 "socketmodule.c"
        var $83=HEAP[$82]; //@line 4123 "socketmodule.c"
        $iftmp_366=$83; //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 25: // $bb27
        $iftmp_366=__str12; //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 26: // $bb28
        var $84=$res; //@line 4123 "socketmodule.c"
        var $85=$84+12; //@line 4123 "socketmodule.c"
        var $86=HEAP[$85]; //@line 4123 "socketmodule.c"
        var $87=$res; //@line 4123 "socketmodule.c"
        var $88=$87+8; //@line 4123 "socketmodule.c"
        var $89=HEAP[$88]; //@line 4123 "socketmodule.c"
        var $90=$res; //@line 4123 "socketmodule.c"
        var $91=$90+4; //@line 4123 "socketmodule.c"
        var $92=HEAP[$91]; //@line 4123 "socketmodule.c"
        var $93=$iftmp_366; //@line 4123 "socketmodule.c"
        var $94=$addr; //@line 4123 "socketmodule.c"
        var $95=_Py_BuildValue(__str131, $92, $89, $86, $93, $94); //@line 4123 "socketmodule.c"
        $single=$95; //@line 4123 "socketmodule.c"
        var $96=$addr; //@line 4127 "socketmodule.c"
        var $97=$96; //@line 4127 "socketmodule.c"
        var $98=HEAP[$97]; //@line 4127 "socketmodule.c"
        var $99=($98) - 1; //@line 4127 "socketmodule.c"
        var $100=$addr; //@line 4127 "socketmodule.c"
        var $101=$100; //@line 4127 "socketmodule.c"
        HEAP[$101]=$99; //@line 4127 "socketmodule.c"
        var $102=$addr; //@line 4127 "socketmodule.c"
        var $103=$102; //@line 4127 "socketmodule.c"
        var $104=HEAP[$103]; //@line 4127 "socketmodule.c"
        var $105=($104)==0; //@line 4127 "socketmodule.c"
        if ($105) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 4127 "socketmodule.c"
      case 27: // $bb29
        var $106=$addr; //@line 4127 "socketmodule.c"
        var $107=$106+4; //@line 4127 "socketmodule.c"
        var $108=HEAP[$107]; //@line 4127 "socketmodule.c"
        var $109=$108+24; //@line 4127 "socketmodule.c"
        var $110=HEAP[$109]; //@line 4127 "socketmodule.c"
        var $111=$addr; //@line 4127 "socketmodule.c"
        FUNCTION_TABLE[$110]($111); //@line 4127 "socketmodule.c"
        __label__ = 28; break; //@line 4127 "socketmodule.c"
      case 28: // $bb30
        var $112=$single; //@line 4128 "socketmodule.c"
        var $113=($112)==0; //@line 4128 "socketmodule.c"
        if ($113) { __label__ = 44; break; } else { __label__ = 29; break; } //@line 4128 "socketmodule.c"
      case 29: // $bb31
        var $114=$all; //@line 4131 "socketmodule.c"
        var $115=$single; //@line 4131 "socketmodule.c"
        var $116=_PyList_Append($114, $115); //@line 4131 "socketmodule.c"
        var $117=($116)!=0; //@line 4131 "socketmodule.c"
        if ($117) { __label__ = 41; break; } else { __label__ = 30; break; } //@line 4131 "socketmodule.c"
      case 30: // $bb32
        var $118=$single; //@line 4133 "socketmodule.c"
        var $119=($118)!=0; //@line 4133 "socketmodule.c"
        if ($119) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 31: // $bb33
        var $120=$single; //@line 4133 "socketmodule.c"
        var $121=$120; //@line 4133 "socketmodule.c"
        var $122=HEAP[$121]; //@line 4133 "socketmodule.c"
        var $123=($122) - 1; //@line 4133 "socketmodule.c"
        var $124=$single; //@line 4133 "socketmodule.c"
        var $125=$124; //@line 4133 "socketmodule.c"
        HEAP[$125]=$123; //@line 4133 "socketmodule.c"
        var $126=$single; //@line 4133 "socketmodule.c"
        var $127=$126; //@line 4133 "socketmodule.c"
        var $128=HEAP[$127]; //@line 4133 "socketmodule.c"
        var $129=($128)==0; //@line 4133 "socketmodule.c"
        if ($129) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 32: // $bb34
        var $130=$single; //@line 4133 "socketmodule.c"
        var $131=$130+4; //@line 4133 "socketmodule.c"
        var $132=HEAP[$131]; //@line 4133 "socketmodule.c"
        var $133=$132+24; //@line 4133 "socketmodule.c"
        var $134=HEAP[$133]; //@line 4133 "socketmodule.c"
        var $135=$single; //@line 4133 "socketmodule.c"
        FUNCTION_TABLE[$134]($135); //@line 4133 "socketmodule.c"
        __label__ = 33; break; //@line 4133 "socketmodule.c"
      case 33: // $bb35
        var $136=$res; //@line 4118 "socketmodule.c"
        var $137=$136+28; //@line 4118 "socketmodule.c"
        var $138=HEAP[$137]; //@line 4118 "socketmodule.c"
        $res=$138; //@line 4118 "socketmodule.c"
        __lastLabel__ = 33; __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 34: // $bb36
        var $139=__lastLabel__ == 33 ? $138 : ($66);
        var $140=($139)!=0; //@line 4118 "socketmodule.c"
        if ($140) { __label__ = 22; break; } else { __label__ = 35; break; } //@line 4118 "socketmodule.c"
      case 35: // $bb37
        var $141=$idna; //@line 4135 "socketmodule.c"
        var $142=($141)!=0; //@line 4135 "socketmodule.c"
        if ($142) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 36: // $bb38
        var $143=$idna; //@line 4135 "socketmodule.c"
        var $144=$143; //@line 4135 "socketmodule.c"
        var $145=HEAP[$144]; //@line 4135 "socketmodule.c"
        var $146=($145) - 1; //@line 4135 "socketmodule.c"
        var $147=$idna; //@line 4135 "socketmodule.c"
        var $148=$147; //@line 4135 "socketmodule.c"
        HEAP[$148]=$146; //@line 4135 "socketmodule.c"
        var $149=$idna; //@line 4135 "socketmodule.c"
        var $150=$149; //@line 4135 "socketmodule.c"
        var $151=HEAP[$150]; //@line 4135 "socketmodule.c"
        var $152=($151)==0; //@line 4135 "socketmodule.c"
        if ($152) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 37: // $bb39
        var $153=$idna; //@line 4135 "socketmodule.c"
        var $154=$153+4; //@line 4135 "socketmodule.c"
        var $155=HEAP[$154]; //@line 4135 "socketmodule.c"
        var $156=$155+24; //@line 4135 "socketmodule.c"
        var $157=HEAP[$156]; //@line 4135 "socketmodule.c"
        var $158=$idna; //@line 4135 "socketmodule.c"
        FUNCTION_TABLE[$157]($158); //@line 4135 "socketmodule.c"
        __label__ = 38; break; //@line 4135 "socketmodule.c"
      case 38: // $bb40
        var $159=HEAP[$res0]; //@line 4136 "socketmodule.c"
        var $160=($159)!=0; //@line 4136 "socketmodule.c"
        if ($160) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 4136 "socketmodule.c"
      case 39: // $bb41
        var $161=HEAP[$res0]; //@line 4137 "socketmodule.c"
        _freeaddrinfo($161); //@line 4137 "socketmodule.c"
        __label__ = 40; break; //@line 4137 "socketmodule.c"
      case 40: // $bb42
        var $162=$all; //@line 4138 "socketmodule.c"
        $0=$162; //@line 4138 "socketmodule.c"
        __label__ = 53; break; //@line 4138 "socketmodule.c"
      case 41: // $err
        var $_pr=$single;
        var $163=($_pr)!=0; //@line 4140 "socketmodule.c"
        if ($163) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 42: // $bb43
        var $164=$single; //@line 4140 "socketmodule.c"
        var $165=$164; //@line 4140 "socketmodule.c"
        var $166=HEAP[$165]; //@line 4140 "socketmodule.c"
        var $167=($166) - 1; //@line 4140 "socketmodule.c"
        var $168=$single; //@line 4140 "socketmodule.c"
        var $169=$168; //@line 4140 "socketmodule.c"
        HEAP[$169]=$167; //@line 4140 "socketmodule.c"
        var $170=$single; //@line 4140 "socketmodule.c"
        var $171=$170; //@line 4140 "socketmodule.c"
        var $172=HEAP[$171]; //@line 4140 "socketmodule.c"
        var $173=($172)==0; //@line 4140 "socketmodule.c"
        if ($173) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 43: // $bb44
        var $174=$single; //@line 4140 "socketmodule.c"
        var $175=$174+4; //@line 4140 "socketmodule.c"
        var $176=HEAP[$175]; //@line 4140 "socketmodule.c"
        var $177=$176+24; //@line 4140 "socketmodule.c"
        var $178=HEAP[$177]; //@line 4140 "socketmodule.c"
        var $179=$single; //@line 4140 "socketmodule.c"
        FUNCTION_TABLE[$178]($179); //@line 4140 "socketmodule.c"
        __label__ = 44; break; //@line 4140 "socketmodule.c"
      case 44: // $bb45
        var $180=$all; //@line 4141 "socketmodule.c"
        var $181=($180)!=0; //@line 4141 "socketmodule.c"
        if ($181) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 45: // $bb46
        var $182=$all; //@line 4141 "socketmodule.c"
        var $183=$182; //@line 4141 "socketmodule.c"
        var $184=HEAP[$183]; //@line 4141 "socketmodule.c"
        var $185=($184) - 1; //@line 4141 "socketmodule.c"
        var $186=$all; //@line 4141 "socketmodule.c"
        var $187=$186; //@line 4141 "socketmodule.c"
        HEAP[$187]=$185; //@line 4141 "socketmodule.c"
        var $188=$all; //@line 4141 "socketmodule.c"
        var $189=$188; //@line 4141 "socketmodule.c"
        var $190=HEAP[$189]; //@line 4141 "socketmodule.c"
        var $191=($190)==0; //@line 4141 "socketmodule.c"
        if ($191) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 46: // $bb47
        var $192=$all; //@line 4141 "socketmodule.c"
        var $193=$192+4; //@line 4141 "socketmodule.c"
        var $194=HEAP[$193]; //@line 4141 "socketmodule.c"
        var $195=$194+24; //@line 4141 "socketmodule.c"
        var $196=HEAP[$195]; //@line 4141 "socketmodule.c"
        var $197=$all; //@line 4141 "socketmodule.c"
        FUNCTION_TABLE[$196]($197); //@line 4141 "socketmodule.c"
        __label__ = 47; break; //@line 4141 "socketmodule.c"
      case 47: // $bb48
        var $198=$idna; //@line 4142 "socketmodule.c"
        var $199=($198)!=0; //@line 4142 "socketmodule.c"
        if ($199) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 48: // $bb49
        var $200=$idna; //@line 4142 "socketmodule.c"
        var $201=$200; //@line 4142 "socketmodule.c"
        var $202=HEAP[$201]; //@line 4142 "socketmodule.c"
        var $203=($202) - 1; //@line 4142 "socketmodule.c"
        var $204=$idna; //@line 4142 "socketmodule.c"
        var $205=$204; //@line 4142 "socketmodule.c"
        HEAP[$205]=$203; //@line 4142 "socketmodule.c"
        var $206=$idna; //@line 4142 "socketmodule.c"
        var $207=$206; //@line 4142 "socketmodule.c"
        var $208=HEAP[$207]; //@line 4142 "socketmodule.c"
        var $209=($208)==0; //@line 4142 "socketmodule.c"
        if ($209) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 49: // $bb50
        var $210=$idna; //@line 4142 "socketmodule.c"
        var $211=$210+4; //@line 4142 "socketmodule.c"
        var $212=HEAP[$211]; //@line 4142 "socketmodule.c"
        var $213=$212+24; //@line 4142 "socketmodule.c"
        var $214=HEAP[$213]; //@line 4142 "socketmodule.c"
        var $215=$idna; //@line 4142 "socketmodule.c"
        FUNCTION_TABLE[$214]($215); //@line 4142 "socketmodule.c"
        __label__ = 50; break; //@line 4142 "socketmodule.c"
      case 50: // $bb51
        var $216=HEAP[$res0]; //@line 4143 "socketmodule.c"
        var $217=($216)!=0; //@line 4143 "socketmodule.c"
        if ($217) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 4143 "socketmodule.c"
      case 51: // $bb52
        var $218=HEAP[$res0]; //@line 4144 "socketmodule.c"
        _freeaddrinfo($218); //@line 4144 "socketmodule.c"
        __label__ = 52; break; //@line 4144 "socketmodule.c"
      case 52: // $bb53
        $0=0; //@line 4145 "socketmodule.c"
        __label__ = 53; break; //@line 4145 "socketmodule.c"
      case 53: // $bb54
        var $219=$0; //@line 4074 "socketmodule.c"
        $retval=$219; //@line 4074 "socketmodule.c"
        var $retval55=$retval; //@line 4074 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 4074 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getnameinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1117; _memset(__stackBase__, 0, 1117);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sa=__stackBase__;
        var $flags=__stackBase__+4;
        var $hostp=__stackBase__+8;
        var $port=__stackBase__+12;
        var $flowinfo=__stackBase__+16;
        var $scope_id=__stackBase__+20;
        var $hbuf=__stackBase__+24;
        var $pbuf=__stackBase__+1049;
        var $hints=__stackBase__+1081;
        var $res=__stackBase__+1113;
        var $error;
        var $ret;
        var $sin6;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sa]=0; //@line 4160 "socketmodule.c"
        HEAP[$res]=0; //@line 4165 "socketmodule.c"
        $ret=0; //@line 4167 "socketmodule.c"
        HEAP[$scope_id]=0; //@line 4169 "socketmodule.c"
        var $1=HEAP[$scope_id]; //@line 4169 "socketmodule.c"
        HEAP[$flowinfo]=$1; //@line 4169 "socketmodule.c"
        var $2=HEAP[$flowinfo]; //@line 4169 "socketmodule.c"
        HEAP[$flags]=$2; //@line 4169 "socketmodule.c"
        var $3=$args_addr; //@line 4170 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, __str132, $sa, $flags); //@line 4170 "socketmodule.c"
        var $5=($4)==0; //@line 4170 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4170 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4171 "socketmodule.c"
        __label__ = 20; break; //@line 4171 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$sa]; //@line 4172 "socketmodule.c"
        var $7=$6+4; //@line 4172 "socketmodule.c"
        var $8=HEAP[$7]; //@line 4172 "socketmodule.c"
        var $9=$8+84; //@line 4172 "socketmodule.c"
        var $10=HEAP[$9]; //@line 4172 "socketmodule.c"
        var $11=($10) & 67108864; //@line 4172 "socketmodule.c"
        var $12=($11)==0; //@line 4172 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4172 "socketmodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_TypeError]; //@line 4173 "socketmodule.c"
        _PyErr_SetString($13, __str133); //@line 4173 "socketmodule.c"
        $0=0; //@line 4175 "socketmodule.c"
        __label__ = 20; break; //@line 4175 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$sa]; //@line 4177 "socketmodule.c"
        var $15=_PyArg_ParseTuple($14, __str134, $hostp, $port, $flowinfo, $scope_id); //@line 4177 "socketmodule.c"
        var $16=($15)==0; //@line 4177 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4177 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 4179 "socketmodule.c"
        __label__ = 20; break; //@line 4179 "socketmodule.c"
      case 6: // $bb5
        var $17=HEAP[$port]; //@line 4180 "socketmodule.c"
        var $pbuf6=$pbuf; //@line 4180 "socketmodule.c"
        var $18=_PyOS_snprintf($pbuf6, 32, __str135, $17); //@line 4180 "socketmodule.c"
        var $19=$hints+8; //@line 4183 "socketmodule.c"
        var $20=$hints;
        _llvm_memset_p0i8_i64($20, 0, 32, 1, 0);
        HEAP[$19]=2; //@line 4183 "socketmodule.c"
        var $21=HEAP[$hostp]; //@line 4186 "socketmodule.c"
        var $pbuf8=$pbuf; //@line 4186 "socketmodule.c"
        var $22=_getaddrinfo($21, $pbuf8, $hints, $res); //@line 4186 "socketmodule.c"
        $error=$22; //@line 4186 "socketmodule.c"
        var $23=$error; //@line 4189 "socketmodule.c"
        var $24=($23)!=0; //@line 4189 "socketmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 4189 "socketmodule.c"
      case 7: // $bb9
        var $25=$error; //@line 4190 "socketmodule.c"
        _set_gaierror($25); //@line 4190 "socketmodule.c"
        __label__ = 17; break; //@line 4190 "socketmodule.c"
      case 8: // $bb10
        var $26=HEAP[$res]; //@line 4193 "socketmodule.c"
        var $27=$26+28; //@line 4193 "socketmodule.c"
        var $28=HEAP[$27]; //@line 4193 "socketmodule.c"
        var $29=($28)!=0; //@line 4193 "socketmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4193 "socketmodule.c"
      case 9: // $bb11
        var $30=HEAP[_socket_error]; //@line 4194 "socketmodule.c"
        _PyErr_SetString($30, __str136); //@line 4194 "socketmodule.c"
        __label__ = 17; break; //@line 4194 "socketmodule.c"
      case 10: // $bb12
        var $31=HEAP[$res]; //@line 4198 "socketmodule.c"
        var $32=$31+4; //@line 4198 "socketmodule.c"
        var $33=HEAP[$32]; //@line 4198 "socketmodule.c"
        if ($33 == 2) {
          __label__ = 11; break;
        }
        else if ($33 == 10) {
          __label__ = 13; break;
        }
        else {
        __label__ = 14; break;
        }
        
      case 11: // $bb13
        var $34=HEAP[$sa]; //@line 4201 "socketmodule.c"
        var $35=$34; //@line 4201 "socketmodule.c"
        var $36=$35+8; //@line 4201 "socketmodule.c"
        var $37=HEAP[$36]; //@line 4201 "socketmodule.c"
        var $38=($37)!=2; //@line 4201 "socketmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 4201 "socketmodule.c"
      case 12: // $bb14
        var $39=HEAP[_socket_error]; //@line 4202 "socketmodule.c"
        _PyErr_SetString($39, __str137); //@line 4202 "socketmodule.c"
        __label__ = 17; break; //@line 4202 "socketmodule.c"
      case 13: // $bb16
        var $40=HEAP[$res]; //@line 4212 "socketmodule.c"
        var $41=$40+20; //@line 4212 "socketmodule.c"
        var $42=HEAP[$41]; //@line 4212 "socketmodule.c"
        var $43=$42; //@line 4212 "socketmodule.c"
        $sin6=$43; //@line 4212 "socketmodule.c"
        var $44=HEAP[$flowinfo]; //@line 4213 "socketmodule.c"
        var $45=$sin6; //@line 4213 "socketmodule.c"
        var $46=$45+4; //@line 4213 "socketmodule.c"
        HEAP[$46]=$44; //@line 4213 "socketmodule.c"
        var $47=HEAP[$scope_id]; //@line 4214 "socketmodule.c"
        var $48=$sin6; //@line 4214 "socketmodule.c"
        var $49=$48+24; //@line 4214 "socketmodule.c"
        HEAP[$49]=$47; //@line 4214 "socketmodule.c"
        __label__ = 14; break; //@line 4214 "socketmodule.c"
      case 14: // $bb17
        var $50=HEAP[$flags]; //@line 4219 "socketmodule.c"
        var $51=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $52=$51+16; //@line 4219 "socketmodule.c"
        var $53=HEAP[$52]; //@line 4219 "socketmodule.c"
        var $54=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $55=$54+20; //@line 4219 "socketmodule.c"
        var $56=HEAP[$55]; //@line 4219 "socketmodule.c"
        var $hbuf18=$hbuf; //@line 4219 "socketmodule.c"
        var $pbuf19=$pbuf; //@line 4219 "socketmodule.c"
        var $57=_getnameinfo($56, $53, $hbuf18, 1025, $pbuf19, 32, $50); //@line 4219 "socketmodule.c"
        $error=$57; //@line 4219 "socketmodule.c"
        var $58=($57)!=0; //@line 4221 "socketmodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 4221 "socketmodule.c"
      case 15: // $bb20
        var $59=$error; //@line 4222 "socketmodule.c"
        _set_gaierror($59); //@line 4222 "socketmodule.c"
        __label__ = 17; break; //@line 4222 "socketmodule.c"
      case 16: // $bb21
        var $hbuf22=$hbuf; //@line 4225 "socketmodule.c"
        var $pbuf23=$pbuf; //@line 4225 "socketmodule.c"
        var $60=_Py_BuildValue(__str138, $hbuf22, $pbuf23); //@line 4225 "socketmodule.c"
        $ret=$60; //@line 4225 "socketmodule.c"
        __label__ = 17; break; //@line 4227 "socketmodule.c"
      case 17: // $fail
        var $61=HEAP[$res]; //@line 4228 "socketmodule.c"
        var $62=($61)!=0; //@line 4228 "socketmodule.c"
        if ($62) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 4228 "socketmodule.c"
      case 18: // $bb24
        var $63=HEAP[$res]; //@line 4229 "socketmodule.c"
        _freeaddrinfo($63); //@line 4229 "socketmodule.c"
        __label__ = 19; break; //@line 4229 "socketmodule.c"
      case 19: // $bb25
        var $64=$ret; //@line 4230 "socketmodule.c"
        $0=$64; //@line 4230 "socketmodule.c"
        __label__ = 20; break; //@line 4230 "socketmodule.c"
      case 20: // $bb26
        var $65=$0; //@line 4171 "socketmodule.c"
        $retval=$65; //@line 4171 "socketmodule.c"
        var $retval27=$retval; //@line 4171 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 4171 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getdefaulttimeout($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=HEAP[_defaulttimeout]; //@line 4244 "socketmodule.c"
        var $2=($1) < 0; //@line 4244 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4244 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 4245 "socketmodule.c"
        var $4=($3) + 1; //@line 4245 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 4245 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 4246 "socketmodule.c"
        __label__ = 3; break; //@line 4246 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[_defaulttimeout]; //@line 4249 "socketmodule.c"
        var $6=_PyFloat_FromDouble($5); //@line 4249 "socketmodule.c"
        $0=$6; //@line 4249 "socketmodule.c"
        __label__ = 3; break; //@line 4249 "socketmodule.c"
      case 3: // $bb2
        var $7=$0; //@line 4246 "socketmodule.c"
        $retval=$7; //@line 4246 "socketmodule.c"
        var $retval3=$retval; //@line 4246 "socketmodule.c"
        ;
        return $retval3; //@line 4246 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_setdefaulttimeout($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $timeout;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 4264 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 4264 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4264 "socketmodule.c"
      case 1: // $bb
        $timeout=-1; //@line 4265 "socketmodule.c"
        __label__ = 6; break; //@line 4265 "socketmodule.c"
      case 2: // $bb1
        var $3=$arg_addr; //@line 4267 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 4267 "socketmodule.c"
        $timeout=$4; //@line 4267 "socketmodule.c"
        var $5=$timeout; //@line 4268 "socketmodule.c"
        var $6=($5) < 0; //@line 4268 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 4268 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 4269 "socketmodule.c"
        var $8=($7)==0; //@line 4269 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4269 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 4270 "socketmodule.c"
        _PyErr_SetString($9, __str36); //@line 4270 "socketmodule.c"
        __label__ = 5; break; //@line 4270 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 4272 "socketmodule.c"
        __label__ = 7; break; //@line 4272 "socketmodule.c"
      case 6: // $bb5
        var $10=$timeout; //@line 4276 "socketmodule.c"
        HEAP[_defaulttimeout]=$10; //@line 4276 "socketmodule.c"
        var $11=HEAP[__Py_NoneStruct]; //@line 4278 "socketmodule.c"
        var $12=($11) + 1; //@line 4278 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$12; //@line 4278 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 4279 "socketmodule.c"
        __label__ = 7; break; //@line 4279 "socketmodule.c"
      case 7: // $bb6
        var $13=$0; //@line 4272 "socketmodule.c"
        $retval=$13; //@line 4272 "socketmodule.c"
        var $retval7=$retval; //@line 4272 "socketmodule.c"
        ;
        return $retval7; //@line 4272 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_socket() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval_i;
        var $0;
        var $m;
        var $has_ipv6;
        $0=1; //@line 4441 "socketmodule.c"
        var $1=$0; //@line 4441 "socketmodule.c"
        $retval_i=$1; //@line 4441 "socketmodule.c"
        var $retval1_i=$retval_i; //@line 4441 "socketmodule.c"
        var $2=($retval1_i)==0; //@line 4479 "socketmodule.c"
        if ($2) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 4479 "socketmodule.c"
      case 1: // $bb
        HEAP[_sock_type+4]=_PyType_Type; //@line 4482 "socketmodule.c"
        var $3=_Py_InitModule4(__str160, _socket_methods, _socket_doc, 0, 1013); //@line 4483 "socketmodule.c"
        $m=$3; //@line 4483 "socketmodule.c"
        var $4=$m; //@line 4486 "socketmodule.c"
        var $5=($4)==0; //@line 4486 "socketmodule.c"
        if ($5) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 4486 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[_PyExc_IOError]; //@line 4489 "socketmodule.c"
        var $7=_PyErr_NewException(__str161, $6, 0); //@line 4489 "socketmodule.c"
        HEAP[_socket_error]=$7; //@line 4489 "socketmodule.c"
        var $8=HEAP[_socket_error]; //@line 4491 "socketmodule.c"
        var $9=($8)==0; //@line 4491 "socketmodule.c"
        if ($9) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 4491 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[_socket_error]; //@line 4493 "socketmodule.c"
        HEAP[_PySocketModuleAPI+4]=$10; //@line 4493 "socketmodule.c"
        var $11=HEAP[_socket_error]; //@line 4494 "socketmodule.c"
        var $12=$11; //@line 4494 "socketmodule.c"
        var $13=HEAP[$12]; //@line 4494 "socketmodule.c"
        var $14=($13) + 1; //@line 4494 "socketmodule.c"
        var $15=$11; //@line 4494 "socketmodule.c"
        HEAP[$15]=$14; //@line 4494 "socketmodule.c"
        var $16=HEAP[_socket_error]; //@line 4495 "socketmodule.c"
        var $17=$m; //@line 4495 "socketmodule.c"
        var $18=_PyModule_AddObject($17, __str162, $16); //@line 4495 "socketmodule.c"
        var $19=HEAP[_socket_error]; //@line 4496 "socketmodule.c"
        var $20=_PyErr_NewException(__str163, $19, 0); //@line 4496 "socketmodule.c"
        HEAP[_socket_herror]=$20; //@line 4496 "socketmodule.c"
        var $21=HEAP[_socket_herror]; //@line 4498 "socketmodule.c"
        var $22=($21)==0; //@line 4498 "socketmodule.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 4498 "socketmodule.c"
      case 4: // $bb3
        var $23=HEAP[_socket_herror]; //@line 4500 "socketmodule.c"
        var $24=$23; //@line 4500 "socketmodule.c"
        var $25=HEAP[$24]; //@line 4500 "socketmodule.c"
        var $26=($25) + 1; //@line 4500 "socketmodule.c"
        var $27=$23; //@line 4500 "socketmodule.c"
        HEAP[$27]=$26; //@line 4500 "socketmodule.c"
        var $28=HEAP[_socket_herror]; //@line 4501 "socketmodule.c"
        var $29=$m; //@line 4501 "socketmodule.c"
        var $30=_PyModule_AddObject($29, __str164, $28); //@line 4501 "socketmodule.c"
        var $31=HEAP[_socket_error]; //@line 4502 "socketmodule.c"
        var $32=_PyErr_NewException(__str165, $31, 0); //@line 4502 "socketmodule.c"
        HEAP[_socket_gaierror]=$32; //@line 4502 "socketmodule.c"
        var $33=HEAP[_socket_gaierror]; //@line 4504 "socketmodule.c"
        var $34=($33)==0; //@line 4504 "socketmodule.c"
        if ($34) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 4504 "socketmodule.c"
      case 5: // $bb4
        var $35=HEAP[_socket_gaierror]; //@line 4506 "socketmodule.c"
        var $36=$35; //@line 4506 "socketmodule.c"
        var $37=HEAP[$36]; //@line 4506 "socketmodule.c"
        var $38=($37) + 1; //@line 4506 "socketmodule.c"
        var $39=$35; //@line 4506 "socketmodule.c"
        HEAP[$39]=$38; //@line 4506 "socketmodule.c"
        var $40=HEAP[_socket_gaierror]; //@line 4507 "socketmodule.c"
        var $41=$m; //@line 4507 "socketmodule.c"
        var $42=_PyModule_AddObject($41, __str166, $40); //@line 4507 "socketmodule.c"
        var $43=HEAP[_socket_error]; //@line 4508 "socketmodule.c"
        var $44=_PyErr_NewException(__str167, $43, 0); //@line 4508 "socketmodule.c"
        HEAP[_socket_timeout]=$44; //@line 4508 "socketmodule.c"
        var $45=HEAP[_socket_timeout]; //@line 4510 "socketmodule.c"
        var $46=($45)==0; //@line 4510 "socketmodule.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 4510 "socketmodule.c"
      case 6: // $bb5
        var $47=HEAP[_socket_timeout]; //@line 4512 "socketmodule.c"
        var $48=$47; //@line 4512 "socketmodule.c"
        var $49=HEAP[$48]; //@line 4512 "socketmodule.c"
        var $50=($49) + 1; //@line 4512 "socketmodule.c"
        var $51=$47; //@line 4512 "socketmodule.c"
        HEAP[$51]=$50; //@line 4512 "socketmodule.c"
        var $52=HEAP[_socket_timeout]; //@line 4513 "socketmodule.c"
        var $53=$m; //@line 4513 "socketmodule.c"
        var $54=_PyModule_AddObject($53, __str94, $52); //@line 4513 "socketmodule.c"
        var $55=HEAP[_sock_type]; //@line 4514 "socketmodule.c"
        var $56=($55) + 1; //@line 4514 "socketmodule.c"
        HEAP[_sock_type]=$56; //@line 4514 "socketmodule.c"
        var $57=$m; //@line 4515 "socketmodule.c"
        var $58=_PyModule_AddObject($57, __str168, _sock_type); //@line 4515 "socketmodule.c"
        var $59=($58)!=0; //@line 4515 "socketmodule.c"
        if ($59) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 4515 "socketmodule.c"
      case 7: // $bb6
        var $60=HEAP[_sock_type]; //@line 4518 "socketmodule.c"
        var $61=($60) + 1; //@line 4518 "socketmodule.c"
        HEAP[_sock_type]=$61; //@line 4518 "socketmodule.c"
        var $62=$m; //@line 4519 "socketmodule.c"
        var $63=_PyModule_AddObject($62, __str169, _sock_type); //@line 4519 "socketmodule.c"
        var $64=($63)!=0; //@line 4519 "socketmodule.c"
        if ($64) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 4519 "socketmodule.c"
      case 8: // $bb7
        $has_ipv6=__Py_TrueStruct; //@line 4524 "socketmodule.c"
        var $65=$has_ipv6; //@line 4528 "socketmodule.c"
        var $66=$65; //@line 4528 "socketmodule.c"
        var $67=HEAP[$66]; //@line 4528 "socketmodule.c"
        var $68=($67) + 1; //@line 4528 "socketmodule.c"
        var $69=$has_ipv6; //@line 4528 "socketmodule.c"
        var $70=$69; //@line 4528 "socketmodule.c"
        HEAP[$70]=$68; //@line 4528 "socketmodule.c"
        var $71=$m; //@line 4529 "socketmodule.c"
        var $72=$has_ipv6; //@line 4529 "socketmodule.c"
        var $73=_PyModule_AddObject($71, __str170, $72); //@line 4529 "socketmodule.c"
        var $74=_PyCapsule_New(_PySocketModuleAPI, __str171, 0); //@line 4532 "socketmodule.c"
        var $75=$m; //@line 4532 "socketmodule.c"
        var $76=_PyModule_AddObject($75, __str172, $74); //@line 4532 "socketmodule.c"
        var $77=($76)!=0; //@line 4532 "socketmodule.c"
        if ($77) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 4532 "socketmodule.c"
      case 9: // $bb8
        var $78=$m; //@line 4539 "socketmodule.c"
        var $79=_PyModule_AddIntConstant($78, __str173, 0); //@line 4539 "socketmodule.c"
        var $80=$m; //@line 4541 "socketmodule.c"
        var $81=_PyModule_AddIntConstant($80, __str174, 2); //@line 4541 "socketmodule.c"
        var $82=$m; //@line 4543 "socketmodule.c"
        var $83=_PyModule_AddIntConstant($82, __str175, 10); //@line 4543 "socketmodule.c"
        var $84=$m; //@line 4546 "socketmodule.c"
        var $85=_PyModule_AddIntConstant($84, __str176, 1); //@line 4546 "socketmodule.c"
        var $86=$m; //@line 4550 "socketmodule.c"
        var $87=_PyModule_AddIntConstant($86, __str177, 3); //@line 4550 "socketmodule.c"
        var $88=$m; //@line 4553 "socketmodule.c"
        var $89=_PyModule_AddIntConstant($88, __str178, 4); //@line 4553 "socketmodule.c"
        var $90=$m; //@line 4557 "socketmodule.c"
        var $91=_PyModule_AddIntConstant($90, __str179, 5); //@line 4557 "socketmodule.c"
        var $92=$m; //@line 4561 "socketmodule.c"
        var $93=_PyModule_AddIntConstant($92, __str180, 6); //@line 4561 "socketmodule.c"
        var $94=$m; //@line 4565 "socketmodule.c"
        var $95=_PyModule_AddIntConstant($94, __str181, 7); //@line 4565 "socketmodule.c"
        var $96=$m; //@line 4569 "socketmodule.c"
        var $97=_PyModule_AddIntConstant($96, __str182, 8); //@line 4569 "socketmodule.c"
        var $98=$m; //@line 4577 "socketmodule.c"
        var $99=_PyModule_AddIntConstant($98, __str183, 9); //@line 4577 "socketmodule.c"
        var $100=$m; //@line 4580 "socketmodule.c"
        var $101=_PyModule_AddIntConstant($100, __str175, 10); //@line 4580 "socketmodule.c"
        var $102=$m; //@line 4584 "socketmodule.c"
        var $103=_PyModule_AddIntConstant($102, __str184, 11); //@line 4584 "socketmodule.c"
        var $104=$m; //@line 4588 "socketmodule.c"
        var $105=_PyModule_AddIntConstant($104, __str185, 12); //@line 4588 "socketmodule.c"
        var $106=$m; //@line 4592 "socketmodule.c"
        var $107=_PyModule_AddIntConstant($106, __str186, 13); //@line 4592 "socketmodule.c"
        var $108=$m; //@line 4596 "socketmodule.c"
        var $109=_PyModule_AddIntConstant($108, __str187, 14); //@line 4596 "socketmodule.c"
        var $110=$m; //@line 4600 "socketmodule.c"
        var $111=_PyModule_AddIntConstant($110, __str188, 15); //@line 4600 "socketmodule.c"
        var $112=$m; //@line 4604 "socketmodule.c"
        var $113=_PyModule_AddIntConstant($112, __str189, 16); //@line 4604 "socketmodule.c"
        var $114=$m; //@line 4605 "socketmodule.c"
        var $115=_PyModule_AddIntConstant($114, __str190, 0); //@line 4605 "socketmodule.c"
        var $116=$m; //@line 4612 "socketmodule.c"
        var $117=_PyModule_AddIntConstant($116, __str191, 2); //@line 4612 "socketmodule.c"
        var $118=$m; //@line 4613 "socketmodule.c"
        var $119=_PyModule_AddIntConstant($118, __str192, 3); //@line 4613 "socketmodule.c"
        var $120=$m; //@line 4618 "socketmodule.c"
        var $121=_PyModule_AddIntConstant($120, __str193, 5); //@line 4618 "socketmodule.c"
        var $122=$m; //@line 4621 "socketmodule.c"
        var $123=_PyModule_AddIntConstant($122, __str194, 6); //@line 4621 "socketmodule.c"
        var $124=$m; //@line 4629 "socketmodule.c"
        var $125=_PyModule_AddIntConstant($124, __str195, 13); //@line 4629 "socketmodule.c"
        var $126=$m; //@line 4631 "socketmodule.c"
        var $127=_PyModule_AddIntConstant($126, __str196, 14); //@line 4631 "socketmodule.c"
        var $128=$m; //@line 4639 "socketmodule.c"
        var $129=_PyModule_AddIntConstant($128, __str197, 16); //@line 4639 "socketmodule.c"
        var $130=$m; //@line 4643 "socketmodule.c"
        var $131=_PyModule_AddIntConstant($130, __str198, 18); //@line 4643 "socketmodule.c"
        var $132=$m; //@line 4647 "socketmodule.c"
        var $133=_PyModule_AddIntConstant($132, __str199, 19); //@line 4647 "socketmodule.c"
        var $134=$m; //@line 4651 "socketmodule.c"
        var $135=_PyModule_AddIntConstant($134, __str200, 20); //@line 4651 "socketmodule.c"
        var $136=$m; //@line 4655 "socketmodule.c"
        var $137=_PyModule_AddIntConstant($136, __str201, 22); //@line 4655 "socketmodule.c"
        var $138=$m; //@line 4659 "socketmodule.c"
        var $139=_PyModule_AddIntConstant($138, __str202, 23); //@line 4659 "socketmodule.c"
        var $140=$m; //@line 4663 "socketmodule.c"
        var $141=_PyModule_AddIntConstant($140, __str203, 24); //@line 4663 "socketmodule.c"
        var $142=$m; //@line 4667 "socketmodule.c"
        var $143=_PyModule_AddIntConstant($142, __str204, 25); //@line 4667 "socketmodule.c"
        var $144=$m; //@line 4671 "socketmodule.c"
        var $145=_PyModule_AddIntConstant($144, __str205, 26); //@line 4671 "socketmodule.c"
        var $146=$m; //@line 4695 "socketmodule.c"
        var $147=_PyModule_AddIntConstant($146, __str206, 17); //@line 4695 "socketmodule.c"
        var $148=$m; //@line 4698 "socketmodule.c"
        var $149=_PyModule_AddIntConstant($148, __str207, 17); //@line 4698 "socketmodule.c"
        var $150=$m; //@line 4701 "socketmodule.c"
        var $151=_PyModule_AddIntConstant($150, __str208, 0); //@line 4701 "socketmodule.c"
        var $152=$m; //@line 4704 "socketmodule.c"
        var $153=_PyModule_AddIntConstant($152, __str209, 1); //@line 4704 "socketmodule.c"
        var $154=$m; //@line 4707 "socketmodule.c"
        var $155=_PyModule_AddIntConstant($154, __str210, 2); //@line 4707 "socketmodule.c"
        var $156=$m; //@line 4710 "socketmodule.c"
        var $157=_PyModule_AddIntConstant($156, __str211, 3); //@line 4710 "socketmodule.c"
        var $158=$m; //@line 4713 "socketmodule.c"
        var $159=_PyModule_AddIntConstant($158, __str212, 4); //@line 4713 "socketmodule.c"
        var $160=$m; //@line 4716 "socketmodule.c"
        var $161=_PyModule_AddIntConstant($160, __str213, 5); //@line 4716 "socketmodule.c"
        var $162=$m; //@line 4719 "socketmodule.c"
        var $163=_PyModule_AddIntConstant($162, __str214, 6); //@line 4719 "socketmodule.c"
        var $164=$m; //@line 4723 "socketmodule.c"
        var $165=_PyModule_AddIntConstant($164, __str215, 30); //@line 4723 "socketmodule.c"
        var $166=$m; //@line 4726 "socketmodule.c"
        var $167=_PyModule_AddIntConstant($166, __str216, 1); //@line 4726 "socketmodule.c"
        var $168=$m; //@line 4727 "socketmodule.c"
        var $169=_PyModule_AddIntConstant($168, __str217, 2); //@line 4727 "socketmodule.c"
        var $170=$m; //@line 4728 "socketmodule.c"
        var $171=_PyModule_AddIntConstant($170, __str218, 3); //@line 4728 "socketmodule.c"
        var $172=$m; //@line 4730 "socketmodule.c"
        var $173=_PyModule_AddIntConstant($172, __str219, 1); //@line 4730 "socketmodule.c"
        var $174=$m; //@line 4731 "socketmodule.c"
        var $175=_PyModule_AddIntConstant($174, __str220, 2); //@line 4731 "socketmodule.c"
        var $176=$m; //@line 4732 "socketmodule.c"
        var $177=_PyModule_AddIntConstant($176, __str221, 3); //@line 4732 "socketmodule.c"
        var $178=$m; //@line 4735 "socketmodule.c"
        var $179=_PyModule_AddIntConstant($178, __str222, 271); //@line 4735 "socketmodule.c"
        var $180=$m; //@line 4736 "socketmodule.c"
        var $181=_PyModule_AddIntConstant($180, __str223, 127); //@line 4736 "socketmodule.c"
        var $182=$m; //@line 4737 "socketmodule.c"
        var $183=_PyModule_AddIntConstant($182, __str224, 128); //@line 4737 "socketmodule.c"
        var $184=$m; //@line 4738 "socketmodule.c"
        var $185=_PyModule_AddIntConstant($184, __str225, 129); //@line 4738 "socketmodule.c"
        var $186=$m; //@line 4740 "socketmodule.c"
        var $187=_PyModule_AddIntConstant($186, __str226, 130); //@line 4740 "socketmodule.c"
        var $188=$m; //@line 4742 "socketmodule.c"
        var $189=_PyModule_AddIntConstant($188, __str227, 0); //@line 4742 "socketmodule.c"
        var $190=$m; //@line 4744 "socketmodule.c"
        var $191=_PyModule_AddIntConstant($190, __str228, 1); //@line 4744 "socketmodule.c"
        var $192=$m; //@line 4746 "socketmodule.c"
        var $193=_PyModule_AddIntConstant($192, __str229, 2); //@line 4746 "socketmodule.c"
        var $194=$m; //@line 4748 "socketmodule.c"
        var $195=_PyModule_AddIntConstant($194, __str230, 3); //@line 4748 "socketmodule.c"
        var $196=$m; //@line 4752 "socketmodule.c"
        var $197=_PyModule_AddIntConstant($196, __str231, 1); //@line 4752 "socketmodule.c"
        var $198=$m; //@line 4753 "socketmodule.c"
        var $199=_PyModule_AddIntConstant($198, __str232, 2); //@line 4753 "socketmodule.c"
        var $200=$m; //@line 4756 "socketmodule.c"
        var $201=_PyModule_AddIntConstant($200, __str233, 4); //@line 4756 "socketmodule.c"
        var $202=$m; //@line 4758 "socketmodule.c"
        var $203=_PyModule_AddIntConstant($202, __str234, -1); //@line 4758 "socketmodule.c"
        var $204=$m; //@line 4759 "socketmodule.c"
        var $205=_PyModule_AddIntConstant($204, __str235, 1); //@line 4759 "socketmodule.c"
        var $206=$m; //@line 4760 "socketmodule.c"
        var $207=_PyModule_AddIntConstant($206, __str236, 2); //@line 4760 "socketmodule.c"
        var $208=$m; //@line 4761 "socketmodule.c"
        var $209=_PyModule_AddIntConstant($208, __str237, 3); //@line 4761 "socketmodule.c"
        var $210=$m; //@line 4762 "socketmodule.c"
        var $211=_PyModule_AddIntConstant($210, __str238, 0); //@line 4762 "socketmodule.c"
        var $212=$m; //@line 4763 "socketmodule.c"
        var $213=_PyModule_AddIntConstant($212, __str239, 1); //@line 4763 "socketmodule.c"
        var $214=$m; //@line 4767 "socketmodule.c"
        var $215=_PyModule_AddIntConstant($214, __str240, 1); //@line 4767 "socketmodule.c"
        var $216=$m; //@line 4768 "socketmodule.c"
        var $217=_PyModule_AddIntConstant($216, __str241, 2); //@line 4768 "socketmodule.c"
        var $218=$m; //@line 4771 "socketmodule.c"
        var $219=_PyModule_AddIntConstant($218, __str242, 3); //@line 4771 "socketmodule.c"
        var $220=$m; //@line 4772 "socketmodule.c"
        var $221=_PyModule_AddIntConstant($220, __str243, 5); //@line 4772 "socketmodule.c"
        var $222=$m; //@line 4774 "socketmodule.c"
        var $223=_PyModule_AddIntConstant($222, __str244, 4); //@line 4774 "socketmodule.c"
        var $224=$m; //@line 4779 "socketmodule.c"
        var $225=_PyModule_AddIntConstant($224, __str245, 1); //@line 4779 "socketmodule.c"
        var $226=$m; //@line 4782 "socketmodule.c"
        var $227=_PyModule_AddIntConstant($226, __str246, 30); //@line 4782 "socketmodule.c"
        var $228=$m; //@line 4785 "socketmodule.c"
        var $229=_PyModule_AddIntConstant($228, __str247, 2); //@line 4785 "socketmodule.c"
        var $230=$m; //@line 4792 "socketmodule.c"
        var $231=_PyModule_AddIntConstant($230, __str248, 9); //@line 4792 "socketmodule.c"
        var $232=$m; //@line 4795 "socketmodule.c"
        var $233=_PyModule_AddIntConstant($232, __str249, 5); //@line 4795 "socketmodule.c"
        var $234=$m; //@line 4798 "socketmodule.c"
        var $235=_PyModule_AddIntConstant($234, __str250, 6); //@line 4798 "socketmodule.c"
        var $236=$m; //@line 4804 "socketmodule.c"
        var $237=_PyModule_AddIntConstant($236, __str251, 13); //@line 4804 "socketmodule.c"
        var $238=$m; //@line 4807 "socketmodule.c"
        var $239=_PyModule_AddIntConstant($238, __str252, 10); //@line 4807 "socketmodule.c"
        var $240=$m; //@line 4813 "socketmodule.c"
        var $241=_PyModule_AddIntConstant($240, __str253, 7); //@line 4813 "socketmodule.c"
        var $242=$m; //@line 4816 "socketmodule.c"
        var $243=_PyModule_AddIntConstant($242, __str254, 8); //@line 4816 "socketmodule.c"
        var $244=$m; //@line 4819 "socketmodule.c"
        var $245=_PyModule_AddIntConstant($244, __str255, 19); //@line 4819 "socketmodule.c"
        var $246=$m; //@line 4822 "socketmodule.c"
        var $247=_PyModule_AddIntConstant($246, __str256, 18); //@line 4822 "socketmodule.c"
        var $248=$m; //@line 4825 "socketmodule.c"
        var $249=_PyModule_AddIntConstant($248, __str257, 21); //@line 4825 "socketmodule.c"
        var $250=$m; //@line 4828 "socketmodule.c"
        var $251=_PyModule_AddIntConstant($250, __str258, 20); //@line 4828 "socketmodule.c"
        var $252=$m; //@line 4831 "socketmodule.c"
        var $253=_PyModule_AddIntConstant($252, __str259, 4); //@line 4831 "socketmodule.c"
        var $254=$m; //@line 4834 "socketmodule.c"
        var $255=_PyModule_AddIntConstant($254, __str260, 3); //@line 4834 "socketmodule.c"
        var $256=$m; //@line 4842 "socketmodule.c"
        var $257=_PyModule_AddIntConstant($256, __str261, 128); //@line 4842 "socketmodule.c"
        var $258=$m; //@line 4849 "socketmodule.c"
        var $259=_PyModule_AddIntConstant($258, __str262, 1); //@line 4849 "socketmodule.c"
        var $260=$m; //@line 4852 "socketmodule.c"
        var $261=_PyModule_AddIntConstant($260, __str263, 2); //@line 4852 "socketmodule.c"
        var $262=$m; //@line 4855 "socketmodule.c"
        var $263=_PyModule_AddIntConstant($262, __str264, 4); //@line 4855 "socketmodule.c"
        var $264=$m; //@line 4858 "socketmodule.c"
        var $265=_PyModule_AddIntConstant($264, __str265, 64); //@line 4858 "socketmodule.c"
        var $266=$m; //@line 4861 "socketmodule.c"
        var $267=_PyModule_AddIntConstant($266, __str266, 128); //@line 4861 "socketmodule.c"
        var $268=$m; //@line 4864 "socketmodule.c"
        var $269=_PyModule_AddIntConstant($268, __str267, 32); //@line 4864 "socketmodule.c"
        var $270=$m; //@line 4867 "socketmodule.c"
        var $271=_PyModule_AddIntConstant($270, __str268, 8); //@line 4867 "socketmodule.c"
        var $272=$m; //@line 4870 "socketmodule.c"
        var $273=_PyModule_AddIntConstant($272, __str269, 256); //@line 4870 "socketmodule.c"
        var $274=$m; //@line 4881 "socketmodule.c"
        var $275=_PyModule_AddIntConstant($274, __str270, 1); //@line 4881 "socketmodule.c"
        var $276=$m; //@line 4884 "socketmodule.c"
        var $277=_PyModule_AddIntConstant($276, __str271, 0); //@line 4884 "socketmodule.c"
        var $278=$m; //@line 4904 "socketmodule.c"
        var $279=_PyModule_AddIntConstant($278, __str272, 6); //@line 4904 "socketmodule.c"
        var $280=$m; //@line 4911 "socketmodule.c"
        var $281=_PyModule_AddIntConstant($280, __str273, 17); //@line 4911 "socketmodule.c"
        var $282=$m; //@line 4914 "socketmodule.c"
        var $283=_PyModule_AddIntConstant($282, __str274, 0); //@line 4914 "socketmodule.c"
        var $284=$m; //@line 4919 "socketmodule.c"
        var $285=_PyModule_AddIntConstant($284, __str275, 0); //@line 4919 "socketmodule.c"
        var $286=$m; //@line 4922 "socketmodule.c"
        var $287=_PyModule_AddIntConstant($286, __str276, 1); //@line 4922 "socketmodule.c"
        var $288=$m; //@line 4927 "socketmodule.c"
        var $289=_PyModule_AddIntConstant($288, __str277, 2); //@line 4927 "socketmodule.c"
        var $290=$m; //@line 4936 "socketmodule.c"
        var $291=_PyModule_AddIntConstant($290, __str278, 41); //@line 4936 "socketmodule.c"
        var $292=$m; //@line 4939 "socketmodule.c"
        var $293=_PyModule_AddIntConstant($292, __str279, 4); //@line 4939 "socketmodule.c"
        var $294=$m; //@line 4942 "socketmodule.c"
        var $295=_PyModule_AddIntConstant($294, __str280, 6); //@line 4942 "socketmodule.c"
        var $296=$m; //@line 4947 "socketmodule.c"
        var $297=_PyModule_AddIntConstant($296, __str281, 8); //@line 4947 "socketmodule.c"
        var $298=$m; //@line 4950 "socketmodule.c"
        var $299=_PyModule_AddIntConstant($298, __str282, 12); //@line 4950 "socketmodule.c"
        var $300=$m; //@line 4953 "socketmodule.c"
        var $301=_PyModule_AddIntConstant($300, __str283, 17); //@line 4953 "socketmodule.c"
        var $302=$m; //@line 4958 "socketmodule.c"
        var $303=_PyModule_AddIntConstant($302, __str284, 22); //@line 4958 "socketmodule.c"
        var $304=$m; //@line 4967 "socketmodule.c"
        var $305=_PyModule_AddIntConstant($304, __str285, 29); //@line 4967 "socketmodule.c"
        var $306=$m; //@line 4970 "socketmodule.c"
        var $307=_PyModule_AddIntConstant($306, __str278, 41); //@line 4970 "socketmodule.c"
        var $308=$m; //@line 4973 "socketmodule.c"
        var $309=_PyModule_AddIntConstant($308, __str286, 43); //@line 4973 "socketmodule.c"
        var $310=$m; //@line 4976 "socketmodule.c"
        var $311=_PyModule_AddIntConstant($310, __str287, 44); //@line 4976 "socketmodule.c"
        var $312=$m; //@line 4979 "socketmodule.c"
        var $313=_PyModule_AddIntConstant($312, __str288, 46); //@line 4979 "socketmodule.c"
        var $314=$m; //@line 4982 "socketmodule.c"
        var $315=_PyModule_AddIntConstant($314, __str289, 47); //@line 4982 "socketmodule.c"
        var $316=$m; //@line 4985 "socketmodule.c"
        var $317=_PyModule_AddIntConstant($316, __str290, 50); //@line 4985 "socketmodule.c"
        var $318=$m; //@line 4988 "socketmodule.c"
        var $319=_PyModule_AddIntConstant($318, __str291, 51); //@line 4988 "socketmodule.c"
        var $320=$m; //@line 4994 "socketmodule.c"
        var $321=_PyModule_AddIntConstant($320, __str292, 58); //@line 4994 "socketmodule.c"
        var $322=$m; //@line 4997 "socketmodule.c"
        var $323=_PyModule_AddIntConstant($322, __str293, 59); //@line 4997 "socketmodule.c"
        var $324=$m; //@line 5000 "socketmodule.c"
        var $325=_PyModule_AddIntConstant($324, __str294, 60); //@line 5000 "socketmodule.c"
        var $326=$m; //@line 5009 "socketmodule.c"
        var $327=_PyModule_AddIntConstant($326, __str295, 103); //@line 5009 "socketmodule.c"
        var $328=$m; //@line 5022 "socketmodule.c"
        var $329=_PyModule_AddIntConstant($328, __str296, 255); //@line 5022 "socketmodule.c"
        var $330=$m; //@line 5032 "socketmodule.c"
        var $331=_PyModule_AddIntConstant($330, __str297, 1024); //@line 5032 "socketmodule.c"
        var $332=$m; //@line 5039 "socketmodule.c"
        var $333=_PyModule_AddIntConstant($332, __str298, 5000); //@line 5039 "socketmodule.c"
        var $334=$m; //@line 5044 "socketmodule.c"
        var $335=_PyModule_AddIntConstant($334, __str299, 0); //@line 5044 "socketmodule.c"
        var $336=$m; //@line 5049 "socketmodule.c"
        var $337=_PyModule_AddIntConstant($336, __str300, -1); //@line 5049 "socketmodule.c"
        var $338=$m; //@line 5054 "socketmodule.c"
        var $339=_PyModule_AddIntConstant($338, __str301, 2130706433); //@line 5054 "socketmodule.c"
        var $340=$m; //@line 5059 "socketmodule.c"
        var $341=_PyModule_AddIntConstant($340, __str302, -536870912); //@line 5059 "socketmodule.c"
        var $342=$m; //@line 5064 "socketmodule.c"
        var $343=_PyModule_AddIntConstant($342, __str303, -536870911); //@line 5064 "socketmodule.c"
        var $344=$m; //@line 5070 "socketmodule.c"
        var $345=_PyModule_AddIntConstant($344, __str304, -536870657); //@line 5070 "socketmodule.c"
        var $346=$m; //@line 5076 "socketmodule.c"
        var $347=_PyModule_AddIntConstant($346, __str305, -1); //@line 5076 "socketmodule.c"
        var $348=$m; //@line 5083 "socketmodule.c"
        var $349=_PyModule_AddIntConstant($348, __str306, 4); //@line 5083 "socketmodule.c"
        var $350=$m; //@line 5086 "socketmodule.c"
        var $351=_PyModule_AddIntConstant($350, __str307, 3); //@line 5086 "socketmodule.c"
        var $352=$m; //@line 5089 "socketmodule.c"
        var $353=_PyModule_AddIntConstant($352, __str308, 1); //@line 5089 "socketmodule.c"
        var $354=$m; //@line 5092 "socketmodule.c"
        var $355=_PyModule_AddIntConstant($354, __str309, 2); //@line 5092 "socketmodule.c"
        var $356=$m; //@line 5095 "socketmodule.c"
        var $357=_PyModule_AddIntConstant($356, __str310, 6); //@line 5095 "socketmodule.c"
        var $358=$m; //@line 5098 "socketmodule.c"
        var $359=_PyModule_AddIntConstant($358, __str311, 7); //@line 5098 "socketmodule.c"
        var $360=$m; //@line 5104 "socketmodule.c"
        var $361=_PyModule_AddIntConstant($360, __str312, 7); //@line 5104 "socketmodule.c"
        var $362=$m; //@line 5107 "socketmodule.c"
        var $363=_PyModule_AddIntConstant($362, __str313, 32); //@line 5107 "socketmodule.c"
        var $364=$m; //@line 5110 "socketmodule.c"
        var $365=_PyModule_AddIntConstant($364, __str314, 33); //@line 5110 "socketmodule.c"
        var $366=$m; //@line 5113 "socketmodule.c"
        var $367=_PyModule_AddIntConstant($366, __str315, 34); //@line 5113 "socketmodule.c"
        var $368=$m; //@line 5116 "socketmodule.c"
        var $369=_PyModule_AddIntConstant($368, __str316, 35); //@line 5116 "socketmodule.c"
        var $370=$m; //@line 5119 "socketmodule.c"
        var $371=_PyModule_AddIntConstant($370, __str317, 36); //@line 5119 "socketmodule.c"
        var $372=$m; //@line 5122 "socketmodule.c"
        var $373=_PyModule_AddIntConstant($372, __str318, 1); //@line 5122 "socketmodule.c"
        var $374=$m; //@line 5126 "socketmodule.c"
        var $375=_PyModule_AddIntConstant($374, __str319, 1); //@line 5126 "socketmodule.c"
        var $376=$m; //@line 5130 "socketmodule.c"
        var $377=_PyModule_AddIntConstant($376, __str320, 20); //@line 5130 "socketmodule.c"
        var $378=$m; //@line 5135 "socketmodule.c"
        var $379=_PyModule_AddIntConstant($378, __str321, 20); //@line 5135 "socketmodule.c"
        var $380=$m; //@line 5138 "socketmodule.c"
        var $381=_PyModule_AddIntConstant($380, __str322, 21); //@line 5138 "socketmodule.c"
        var $382=$m; //@line 5141 "socketmodule.c"
        var $383=_PyModule_AddIntConstant($382, __str323, 18); //@line 5141 "socketmodule.c"
        var $384=$m; //@line 5144 "socketmodule.c"
        var $385=_PyModule_AddIntConstant($384, __str324, 17); //@line 5144 "socketmodule.c"
        var $386=$m; //@line 5147 "socketmodule.c"
        var $387=_PyModule_AddIntConstant($386, __str325, 19); //@line 5147 "socketmodule.c"
        var $388=$m; //@line 5150 "socketmodule.c"
        var $389=_PyModule_AddIntConstant($388, __str326, 16); //@line 5150 "socketmodule.c"
        var $390=$m; //@line 5154 "socketmodule.c"
        var $391=_PyModule_AddIntConstant($390, __str327, 26); //@line 5154 "socketmodule.c"
        var $392=$m; //@line 5158 "socketmodule.c"
        var $393=_PyModule_AddIntConstant($392, __str328, 7); //@line 5158 "socketmodule.c"
        var $394=$m; //@line 5164 "socketmodule.c"
        var $395=_PyModule_AddIntConstant($394, __str329, 59); //@line 5164 "socketmodule.c"
        var $396=$m; //@line 5167 "socketmodule.c"
        var $397=_PyModule_AddIntConstant($396, __str330, 52); //@line 5167 "socketmodule.c"
        var $398=$m; //@line 5170 "socketmodule.c"
        var $399=_PyModule_AddIntConstant($398, __str331, 54); //@line 5170 "socketmodule.c"
        var $400=$m; //@line 5173 "socketmodule.c"
        var $401=_PyModule_AddIntConstant($400, __str332, 9); //@line 5173 "socketmodule.c"
        var $402=$m; //@line 5179 "socketmodule.c"
        var $403=_PyModule_AddIntConstant($402, __str333, 50); //@line 5179 "socketmodule.c"
        var $404=$m; //@line 5182 "socketmodule.c"
        var $405=_PyModule_AddIntConstant($404, __str334, 58); //@line 5182 "socketmodule.c"
        var $406=$m; //@line 5185 "socketmodule.c"
        var $407=_PyModule_AddIntConstant($406, __str335, 51); //@line 5185 "socketmodule.c"
        var $408=$m; //@line 5188 "socketmodule.c"
        var $409=_PyModule_AddIntConstant($408, __str336, 53); //@line 5188 "socketmodule.c"
        var $410=$m; //@line 5191 "socketmodule.c"
        var $411=_PyModule_AddIntConstant($410, __str337, 49); //@line 5191 "socketmodule.c"
        var $412=$m; //@line 5194 "socketmodule.c"
        var $413=_PyModule_AddIntConstant($412, __str338, 56); //@line 5194 "socketmodule.c"
        var $414=$m; //@line 5197 "socketmodule.c"
        var $415=_PyModule_AddIntConstant($414, __str339, 66); //@line 5197 "socketmodule.c"
        var $416=$m; //@line 5200 "socketmodule.c"
        var $417=_PyModule_AddIntConstant($416, __str340, 57); //@line 5200 "socketmodule.c"
        var $418=$m; //@line 5203 "socketmodule.c"
        var $419=_PyModule_AddIntConstant($418, __str341, 55); //@line 5203 "socketmodule.c"
        var $420=$m; //@line 5206 "socketmodule.c"
        var $421=_PyModule_AddIntConstant($420, __str342, 0); //@line 5206 "socketmodule.c"
        var $422=$m; //@line 5212 "socketmodule.c"
        var $423=_PyModule_AddIntConstant($422, __str343, 67); //@line 5212 "socketmodule.c"
        var $424=$m; //@line 5220 "socketmodule.c"
        var $425=_PyModule_AddIntConstant($424, __str344, 1); //@line 5220 "socketmodule.c"
        var $426=$m; //@line 5223 "socketmodule.c"
        var $427=_PyModule_AddIntConstant($426, __str345, 2); //@line 5223 "socketmodule.c"
        var $428=$m; //@line 5226 "socketmodule.c"
        var $429=_PyModule_AddIntConstant($428, __str346, 3); //@line 5226 "socketmodule.c"
        var $430=$m; //@line 5229 "socketmodule.c"
        var $431=_PyModule_AddIntConstant($430, __str347, 4); //@line 5229 "socketmodule.c"
        var $432=$m; //@line 5232 "socketmodule.c"
        var $433=_PyModule_AddIntConstant($432, __str348, 5); //@line 5232 "socketmodule.c"
        var $434=$m; //@line 5235 "socketmodule.c"
        var $435=_PyModule_AddIntConstant($434, __str349, 6); //@line 5235 "socketmodule.c"
        var $436=$m; //@line 5238 "socketmodule.c"
        var $437=_PyModule_AddIntConstant($436, __str350, 7); //@line 5238 "socketmodule.c"
        var $438=$m; //@line 5241 "socketmodule.c"
        var $439=_PyModule_AddIntConstant($438, __str351, 8); //@line 5241 "socketmodule.c"
        var $440=$m; //@line 5244 "socketmodule.c"
        var $441=_PyModule_AddIntConstant($440, __str352, 9); //@line 5244 "socketmodule.c"
        var $442=$m; //@line 5247 "socketmodule.c"
        var $443=_PyModule_AddIntConstant($442, __str353, 10); //@line 5247 "socketmodule.c"
        var $444=$m; //@line 5250 "socketmodule.c"
        var $445=_PyModule_AddIntConstant($444, __str354, 11); //@line 5250 "socketmodule.c"
        var $446=$m; //@line 5253 "socketmodule.c"
        var $447=_PyModule_AddIntConstant($446, __str355, 12); //@line 5253 "socketmodule.c"
        var $448=$m; //@line 5264 "socketmodule.c"
        var $449=_PyModule_AddIntConstant($448, __str356, -9); //@line 5264 "socketmodule.c"
        var $450=$m; //@line 5267 "socketmodule.c"
        var $451=_PyModule_AddIntConstant($450, __str357, -3); //@line 5267 "socketmodule.c"
        var $452=$m; //@line 5270 "socketmodule.c"
        var $453=_PyModule_AddIntConstant($452, __str358, -1); //@line 5270 "socketmodule.c"
        var $454=$m; //@line 5273 "socketmodule.c"
        var $455=_PyModule_AddIntConstant($454, __str359, -4); //@line 5273 "socketmodule.c"
        var $456=$m; //@line 5276 "socketmodule.c"
        var $457=_PyModule_AddIntConstant($456, __str360, -6); //@line 5276 "socketmodule.c"
        var $458=$m; //@line 5279 "socketmodule.c"
        var $459=_PyModule_AddIntConstant($458, __str361, -10); //@line 5279 "socketmodule.c"
        var $460=$m; //@line 5282 "socketmodule.c"
        var $461=_PyModule_AddIntConstant($460, __str362, -5); //@line 5282 "socketmodule.c"
        var $462=$m; //@line 5285 "socketmodule.c"
        var $463=_PyModule_AddIntConstant($462, __str363, -2); //@line 5285 "socketmodule.c"
        var $464=$m; //@line 5288 "socketmodule.c"
        var $465=_PyModule_AddIntConstant($464, __str364, -12); //@line 5288 "socketmodule.c"
        var $466=$m; //@line 5291 "socketmodule.c"
        var $467=_PyModule_AddIntConstant($466, __str365, -8); //@line 5291 "socketmodule.c"
        var $468=$m; //@line 5294 "socketmodule.c"
        var $469=_PyModule_AddIntConstant($468, __str366, -7); //@line 5294 "socketmodule.c"
        var $470=$m; //@line 5297 "socketmodule.c"
        var $471=_PyModule_AddIntConstant($470, __str367, -11); //@line 5297 "socketmodule.c"
        var $472=$m; //@line 5309 "socketmodule.c"
        var $473=_PyModule_AddIntConstant($472, __str368, 1); //@line 5309 "socketmodule.c"
        var $474=$m; //@line 5312 "socketmodule.c"
        var $475=_PyModule_AddIntConstant($474, __str369, 2); //@line 5312 "socketmodule.c"
        var $476=$m; //@line 5315 "socketmodule.c"
        var $477=_PyModule_AddIntConstant($476, __str370, 4); //@line 5315 "socketmodule.c"
        var $478=$m; //@line 5318 "socketmodule.c"
        var $479=_PyModule_AddIntConstant($478, __str371, 1024); //@line 5318 "socketmodule.c"
        var $480=$m; //@line 5324 "socketmodule.c"
        var $481=_PyModule_AddIntConstant($480, __str372, 16); //@line 5324 "socketmodule.c"
        var $482=$m; //@line 5330 "socketmodule.c"
        var $483=_PyModule_AddIntConstant($482, __str373, 32); //@line 5330 "socketmodule.c"
        var $484=$m; //@line 5333 "socketmodule.c"
        var $485=_PyModule_AddIntConstant($484, __str374, 8); //@line 5333 "socketmodule.c"
        var $486=$m; //@line 5339 "socketmodule.c"
        var $487=_PyModule_AddIntConstant($486, __str375, 1025); //@line 5339 "socketmodule.c"
        var $488=$m; //@line 5342 "socketmodule.c"
        var $489=_PyModule_AddIntConstant($488, __str376, 32); //@line 5342 "socketmodule.c"
        var $490=$m; //@line 5345 "socketmodule.c"
        var $491=_PyModule_AddIntConstant($490, __str377, 4); //@line 5345 "socketmodule.c"
        var $492=$m; //@line 5348 "socketmodule.c"
        var $493=_PyModule_AddIntConstant($492, __str378, 1); //@line 5348 "socketmodule.c"
        var $494=$m; //@line 5351 "socketmodule.c"
        var $495=_PyModule_AddIntConstant($494, __str379, 8); //@line 5351 "socketmodule.c"
        var $496=$m; //@line 5354 "socketmodule.c"
        var $497=_PyModule_AddIntConstant($496, __str380, 2); //@line 5354 "socketmodule.c"
        var $498=$m; //@line 5357 "socketmodule.c"
        var $499=_PyModule_AddIntConstant($498, __str381, 16); //@line 5357 "socketmodule.c"
        var $500=$m; //@line 5362 "socketmodule.c"
        var $501=_PyModule_AddIntConstant($500, __str382, 0); //@line 5362 "socketmodule.c"
        var $502=$m; //@line 5369 "socketmodule.c"
        var $503=_PyModule_AddIntConstant($502, __str383, 1); //@line 5369 "socketmodule.c"
        var $504=$m; //@line 5376 "socketmodule.c"
        var $505=_PyModule_AddIntConstant($504, __str384, 2); //@line 5376 "socketmodule.c"
        __label__ = 10; break; //@line 5376 "socketmodule.c"
      case 10: // $return
        ;
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
HEAP[_kwlist_10873]=__str47;
HEAP[_kwlist_10873+4]=__str48;
HEAP[_kwlist_10873+8]=__str49;
HEAP[_kwlist_11020]=__str47;
HEAP[_kwlist_11020+4]=__str48;
HEAP[_kwlist_11020+8]=__str49;
HEAP[_sock_methods]=__str64;
HEAP[_sock_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_sock_methods+12]=_accept_doc;
HEAP[_sock_methods+16]=__str65;
HEAP[_sock_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_sock_methods+28]=_bind_doc;
HEAP[_sock_methods+32]=__str66;
HEAP[_sock_methods+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_sock_methods+44]=_close_doc;
HEAP[_sock_methods+48]=__str67;
HEAP[_sock_methods+52]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_sock_methods+60]=_connect_doc;
HEAP[_sock_methods+64]=__str68;
HEAP[_sock_methods+68]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_sock_methods+76]=_connect_ex_doc;
HEAP[_sock_methods+80]=__str69;
HEAP[_sock_methods+84]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_sock_methods+92]=_dup_doc;
HEAP[_sock_methods+96]=__str70;
HEAP[_sock_methods+100]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_sock_methods+108]=_fileno_doc;
HEAP[_sock_methods+112]=__str71;
HEAP[_sock_methods+116]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_sock_methods+124]=_getpeername_doc;
HEAP[_sock_methods+128]=__str72;
HEAP[_sock_methods+132]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_sock_methods+140]=_getsockname_doc;
HEAP[_sock_methods+144]=__str73;
HEAP[_sock_methods+148]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_sock_methods+156]=_getsockopt_doc;
HEAP[_sock_methods+160]=__str74;
HEAP[_sock_methods+164]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_sock_methods+172]=_listen_doc;
HEAP[_sock_methods+176]=__str75;
HEAP[_sock_methods+180]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_sock_methods+188]=_makefile_doc;
HEAP[_sock_methods+192]=__str76;
HEAP[_sock_methods+196]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_sock_methods+204]=_recv_doc;
HEAP[_sock_methods+208]=__str77;
HEAP[_sock_methods+212]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_sock_methods+220]=_recv_into_doc;
HEAP[_sock_methods+224]=__str78;
HEAP[_sock_methods+228]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_sock_methods+236]=_recvfrom_doc;
HEAP[_sock_methods+240]=__str79;
HEAP[_sock_methods+244]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_sock_methods+252]=_recvfrom_into_doc;
HEAP[_sock_methods+256]=__str80;
HEAP[_sock_methods+260]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_sock_methods+268]=_send_doc;
HEAP[_sock_methods+272]=__str81;
HEAP[_sock_methods+276]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_sock_methods+284]=_sendall_doc;
HEAP[_sock_methods+288]=__str82;
HEAP[_sock_methods+292]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_sock_methods+300]=_sendto_doc;
HEAP[_sock_methods+304]=__str83;
HEAP[_sock_methods+308]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_sock_methods+316]=_setblocking_doc;
HEAP[_sock_methods+320]=__str84;
HEAP[_sock_methods+324]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_sock_methods+332]=_settimeout_doc;
HEAP[_sock_methods+336]=__str85;
HEAP[_sock_methods+340]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_sock_methods+348]=_gettimeout_doc;
HEAP[_sock_methods+352]=__str86;
HEAP[_sock_methods+356]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_sock_methods+364]=_setsockopt_doc;
HEAP[_sock_methods+368]=__str87;
HEAP[_sock_methods+372]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_sock_methods+380]=_shutdown_doc;
HEAP[_sock_memberlist]=__str88;
HEAP[_sock_memberlist+16]=__str89;
HEAP[_sock_memberlist+20]=__str90;
HEAP[_sock_memberlist+36]=__str91;
HEAP[_sock_memberlist+40]=__str92;
HEAP[_sock_memberlist+56]=__str93;
HEAP[_sock_memberlist+60]=__str94;
HEAP[_sock_memberlist+76]=__str95;
HEAP[_keywords_11267]=__str88;
HEAP[_keywords_11267+4]=__str90;
HEAP[_keywords_11267+8]=__str92;
HEAP[_sock_type+12]=__str98;
HEAP[_sock_type+24]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_sock_type+44]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_sock_type+72]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_sock_type+88]=_sock_doc;
HEAP[_sock_type+116]=_sock_methods;
HEAP[_sock_type+120]=_sock_memberlist;
HEAP[_sock_type+148]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_sock_type+152]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_sock_type+156]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_sock_type+160]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_socket_methods]=__str139;
HEAP[_socket_methods+4]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_socket_methods+12]=_gethostbyname_doc;
HEAP[_socket_methods+16]=__str140;
HEAP[_socket_methods+20]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_socket_methods+28]=_ghbn_ex_doc;
HEAP[_socket_methods+32]=__str141;
HEAP[_socket_methods+36]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_socket_methods+44]=_gethostbyaddr_doc;
HEAP[_socket_methods+48]=__str142;
HEAP[_socket_methods+52]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_socket_methods+60]=_gethostname_doc;
HEAP[_socket_methods+64]=__str143;
HEAP[_socket_methods+68]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_socket_methods+76]=_getservbyname_doc;
HEAP[_socket_methods+80]=__str144;
HEAP[_socket_methods+84]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_socket_methods+92]=_getservbyport_doc;
HEAP[_socket_methods+96]=__str145;
HEAP[_socket_methods+100]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_socket_methods+108]=_getprotobyname_doc;
HEAP[_socket_methods+112]=__str146;
HEAP[_socket_methods+116]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_socket_methods+124]=_fromfd_doc;
HEAP[_socket_methods+128]=__str147;
HEAP[_socket_methods+132]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_socket_methods+140]=_socketpair_doc;
HEAP[_socket_methods+144]=__str148;
HEAP[_socket_methods+148]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_socket_methods+156]=_ntohs_doc;
HEAP[_socket_methods+160]=__str149;
HEAP[_socket_methods+164]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_socket_methods+172]=_ntohl_doc;
HEAP[_socket_methods+176]=__str150;
HEAP[_socket_methods+180]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_socket_methods+188]=_htons_doc;
HEAP[_socket_methods+192]=__str151;
HEAP[_socket_methods+196]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_socket_methods+204]=_htonl_doc;
HEAP[_socket_methods+208]=__str152;
HEAP[_socket_methods+212]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_socket_methods+220]=_inet_aton_doc;
HEAP[_socket_methods+224]=__str153;
HEAP[_socket_methods+228]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_socket_methods+236]=_inet_ntoa_doc;
HEAP[_socket_methods+240]=__str154;
HEAP[_socket_methods+244]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_socket_methods+252]=_inet_pton_doc;
HEAP[_socket_methods+256]=__str155;
HEAP[_socket_methods+260]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_socket_methods+268]=_inet_ntop_doc;
HEAP[_socket_methods+272]=__str156;
HEAP[_socket_methods+276]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_socket_methods+284]=_getaddrinfo_doc;
HEAP[_socket_methods+288]=__str157;
HEAP[_socket_methods+292]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_socket_methods+300]=_getnameinfo_doc;
HEAP[_socket_methods+304]=__str158;
HEAP[_socket_methods+308]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_socket_methods+316]=_getdefaulttimeout_doc;
HEAP[_socket_methods+320]=__str159;
HEAP[_socket_methods+324]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_socket_methods+332]=_setdefaulttimeout_doc;
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

