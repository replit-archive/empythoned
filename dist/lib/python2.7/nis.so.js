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



var $0___SIZE = 80; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_AUTH___SIZE = 40; // %struct.AUTH
  var $struct_AUTH___FLATTENER = [0,12,24,32,36];
var $struct_CLIENT___SIZE = 12; // %struct.CLIENT
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyInterpreterState___SIZE = 40; // %struct.PyInterpreterState
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyThreadState___SIZE = 84; // %struct.PyThreadState
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_XDR___SIZE = 24; // %struct.XDR
  
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__frame___SIZE = 0; // %struct._frame
  var $struct__frame___FLATTENER = [];
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_anon___SIZE = 8; // %struct.anon
  
var $struct_auth_ops___SIZE = 20; // %struct.auth_ops
  
var $struct_clnt_ops___SIZE = 24; // %struct.clnt_ops
  
var $struct_nis_map___SIZE = 12; // %struct.nis_map
  
var $struct_nismaplist___SIZE = 8; // %struct.nismaplist
  
var $struct_nisresp_maplist___SIZE = 8; // %struct.nisresp_maplist
  
var $struct_opaque_auth___SIZE = 12; // %struct.opaque_auth
  
var $struct_rpc_err___SIZE = 12; // %struct.rpc_err
  
var $struct_xdr_ops___SIZE = 40; // %struct.xdr_ops
  
var $struct_ypall_callback___SIZE = 8; // %struct.ypall_callback
  
var $struct_ypcallback_data___SIZE = 12; // %struct.ypcallback_data
  
var $union_anon___SIZE = 8; // %union.anon
  
var _get_default_domain__doc__;
var _match__doc__;
var _cat__doc__;
var _maps__doc__;
var _NisError;
var _aliases;
var __str;
var __str1;
var __str2;
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
var __str13;
var __str14;
var __str15;
var __str16;
var _kwlist_9940;
var __str17;
var __str18;
var __str19;
var __str20;
var _kwlist_9988;
var _res_10110;
var __str21;
var __str22;
var __str23;
var _kwlist_10170;
var __str24;
var __str25;
var __str26;
var __str27;
var _nis_methods;
var _nis__doc__;
var __str28;
var __str29;
var __str30;


































  function _nis_mapname($map, $pfix) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $map_addr;
        var $pfix_addr;
        var $retval;
        var $0;
        var $i;
        $map_addr=$map;
        $pfix_addr=$pfix;
        var $1=$pfix_addr; //@line 77 "nismodule.c"
        HEAP[$1]=0; //@line 77 "nismodule.c"
        $i=0; //@line 78 "nismodule.c"
        __label__ = 6; break; //@line 78 "nismodule.c"
      case 1: // $bb
        var $2=$i; //@line 79 "nismodule.c"
        var $3=_aliases+$2*12; //@line 79 "nismodule.c"
        var $4=$3; //@line 79 "nismodule.c"
        var $5=HEAP[$4]; //@line 79 "nismodule.c"
        var $6=$map_addr; //@line 79 "nismodule.c"
        var $7=_strcmp($5, $6); //@line 79 "nismodule.c"
        var $8=($7)==0; //@line 79 "nismodule.c"
        var $9=$i; //@line 80 "nismodule.c"
        var $10=_aliases+$9*12; //@line 80 "nismodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 79 "nismodule.c"
      case 2: // $bb1
        var $11=$10+8; //@line 80 "nismodule.c"
        var $12=HEAP[$11]; //@line 80 "nismodule.c"
        var $13=$pfix_addr; //@line 80 "nismodule.c"
        HEAP[$13]=$12; //@line 80 "nismodule.c"
        var $14=$i; //@line 81 "nismodule.c"
        var $15=_aliases+$14*12; //@line 81 "nismodule.c"
        var $16=$15+4; //@line 81 "nismodule.c"
        var $17=HEAP[$16]; //@line 81 "nismodule.c"
        $0=$17; //@line 81 "nismodule.c"
        __label__ = 8; break; //@line 81 "nismodule.c"
      case 3: // $bb2
        var $18=$10+4; //@line 83 "nismodule.c"
        var $19=HEAP[$18]; //@line 83 "nismodule.c"
        var $20=$map_addr; //@line 83 "nismodule.c"
        var $21=_strcmp($19, $20); //@line 83 "nismodule.c"
        var $22=($21)==0; //@line 83 "nismodule.c"
        var $23=$i; //@line 84 "nismodule.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 83 "nismodule.c"
      case 4: // $bb3
        var $24=_aliases+$23*12; //@line 84 "nismodule.c"
        var $25=$24+8; //@line 84 "nismodule.c"
        var $26=HEAP[$25]; //@line 84 "nismodule.c"
        var $27=$pfix_addr; //@line 84 "nismodule.c"
        HEAP[$27]=$26; //@line 84 "nismodule.c"
        var $28=$i; //@line 85 "nismodule.c"
        var $29=_aliases+$28*12; //@line 85 "nismodule.c"
        var $30=$29+4; //@line 85 "nismodule.c"
        var $31=HEAP[$30]; //@line 85 "nismodule.c"
        $0=$31; //@line 85 "nismodule.c"
        __label__ = 8; break; //@line 85 "nismodule.c"
      case 5: // $bb4
        var $32=($23) + 1; //@line 78 "nismodule.c"
        $i=$32; //@line 78 "nismodule.c"
        __label__ = 6; break; //@line 78 "nismodule.c"
      case 6: // $bb5
        var $33=$i; //@line 78 "nismodule.c"
        var $34=_aliases+$33*12; //@line 78 "nismodule.c"
        var $35=$34; //@line 78 "nismodule.c"
        var $36=HEAP[$35]; //@line 78 "nismodule.c"
        var $37=($36)!=0; //@line 78 "nismodule.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 78 "nismodule.c"
      case 7: // $bb6
        var $38=$map_addr; //@line 89 "nismodule.c"
        $0=$38; //@line 89 "nismodule.c"
        __label__ = 8; break; //@line 89 "nismodule.c"
      case 8: // $bb7
        var $39=$0; //@line 81 "nismodule.c"
        $retval=$39; //@line 81 "nismodule.c"
        var $retval8=$retval; //@line 81 "nismodule.c"
        ;
        return $retval8; //@line 81 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_foreach($instatus, $inkey, $inkeylen, $inval, $invallen, $indata) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $instatus_addr;
        var $inkey_addr;
        var $inkeylen_addr;
        var $inval_addr;
        var $invallen_addr;
        var $indata_addr;
        var $retval;
        var $0;
        var $key;
        var $val;
        var $err;
        $instatus_addr=$instatus;
        $inkey_addr=$inkey;
        $inkeylen_addr=$inkeylen;
        $inval_addr=$inval;
        $invallen_addr=$invallen;
        $indata_addr=$indata;
        var $1=$instatus_addr; //@line 108 "nismodule.c"
        var $2=($1)==1; //@line 108 "nismodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 26; break; } //@line 108 "nismodule.c"
      case 1: // $bb
        var $3=$indata_addr; //@line 113 "nismodule.c"
        var $4=$3+8; //@line 113 "nismodule.c"
        var $5=HEAP[$4]; //@line 113 "nismodule.c"
        _PyEval_RestoreThread($5); //@line 113 "nismodule.c"
        var $6=$indata_addr; //@line 114 "nismodule.c"
        var $7=$6+4; //@line 114 "nismodule.c"
        var $8=HEAP[$7]; //@line 114 "nismodule.c"
        var $9=($8)!=0; //@line 114 "nismodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 114 "nismodule.c"
      case 2: // $bb1
        var $10=$inkeylen_addr; //@line 115 "nismodule.c"
        var $11=($10) > 0; //@line 115 "nismodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 115 "nismodule.c"
      case 3: // $bb2
        var $12=$inkeylen_addr; //@line 115 "nismodule.c"
        var $13=($12) - 1; //@line 115 "nismodule.c"
        var $14=$inkey_addr; //@line 115 "nismodule.c"
        var $15=$14+$13; //@line 115 "nismodule.c"
        var $16=HEAP[$15]; //@line 115 "nismodule.c"
        var $17=($16)==0; //@line 115 "nismodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 115 "nismodule.c"
      case 4: // $bb3
        var $18=$inkeylen_addr; //@line 116 "nismodule.c"
        var $19=($18) - 1; //@line 116 "nismodule.c"
        $inkeylen_addr=$19; //@line 116 "nismodule.c"
        __label__ = 5; break; //@line 116 "nismodule.c"
      case 5: // $bb4
        var $20=$invallen_addr; //@line 117 "nismodule.c"
        var $21=($20) > 0; //@line 117 "nismodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 117 "nismodule.c"
      case 6: // $bb5
        var $22=$invallen_addr; //@line 117 "nismodule.c"
        var $23=($22) - 1; //@line 117 "nismodule.c"
        var $24=$inval_addr; //@line 117 "nismodule.c"
        var $25=$24+$23; //@line 117 "nismodule.c"
        var $26=HEAP[$25]; //@line 117 "nismodule.c"
        var $27=($26)==0; //@line 117 "nismodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 117 "nismodule.c"
      case 7: // $bb6
        var $28=$invallen_addr; //@line 118 "nismodule.c"
        var $29=($28) - 1; //@line 118 "nismodule.c"
        $invallen_addr=$29; //@line 118 "nismodule.c"
        __label__ = 8; break; //@line 118 "nismodule.c"
      case 8: // $bb7
        var $30=$inkey_addr; //@line 120 "nismodule.c"
        var $31=$inkeylen_addr; //@line 120 "nismodule.c"
        var $32=_PyString_FromStringAndSize($30, $31); //@line 120 "nismodule.c"
        $key=$32; //@line 120 "nismodule.c"
        var $33=$inval_addr; //@line 121 "nismodule.c"
        var $34=$invallen_addr; //@line 121 "nismodule.c"
        var $35=_PyString_FromStringAndSize($33, $34); //@line 121 "nismodule.c"
        $val=$35; //@line 121 "nismodule.c"
        var $36=$key; //@line 122 "nismodule.c"
        var $37=($36)==0; //@line 122 "nismodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 122 "nismodule.c"
      case 9: // $bb8
        var $38=$val; //@line 122 "nismodule.c"
        var $39=($38)==0; //@line 122 "nismodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 122 "nismodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 124 "nismodule.c"
        var $40=$key; //@line 125 "nismodule.c"
        var $41=($40)!=0; //@line 125 "nismodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 125 "nismodule.c"
      case 11: // $bb10
        var $42=$key; //@line 125 "nismodule.c"
        var $43=$42; //@line 125 "nismodule.c"
        var $44=HEAP[$43]; //@line 125 "nismodule.c"
        var $45=($44) - 1; //@line 125 "nismodule.c"
        var $46=$key; //@line 125 "nismodule.c"
        var $47=$46; //@line 125 "nismodule.c"
        HEAP[$47]=$45; //@line 125 "nismodule.c"
        var $48=$key; //@line 125 "nismodule.c"
        var $49=$48; //@line 125 "nismodule.c"
        var $50=HEAP[$49]; //@line 125 "nismodule.c"
        var $51=($50)==0; //@line 125 "nismodule.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 125 "nismodule.c"
      case 12: // $bb11
        var $52=$key; //@line 125 "nismodule.c"
        var $53=$52+4; //@line 125 "nismodule.c"
        var $54=HEAP[$53]; //@line 125 "nismodule.c"
        var $55=$54+24; //@line 125 "nismodule.c"
        var $56=HEAP[$55]; //@line 125 "nismodule.c"
        var $57=$key; //@line 125 "nismodule.c"
        FUNCTION_TABLE[$56]($57); //@line 125 "nismodule.c"
        __label__ = 13; break; //@line 125 "nismodule.c"
      case 13: // $bb12
        var $58=$val; //@line 126 "nismodule.c"
        var $59=($58)!=0; //@line 126 "nismodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 126 "nismodule.c"
      case 14: // $bb13
        var $60=$val; //@line 126 "nismodule.c"
        var $61=$60; //@line 126 "nismodule.c"
        var $62=HEAP[$61]; //@line 126 "nismodule.c"
        var $63=($62) - 1; //@line 126 "nismodule.c"
        var $64=$val; //@line 126 "nismodule.c"
        var $65=$64; //@line 126 "nismodule.c"
        HEAP[$65]=$63; //@line 126 "nismodule.c"
        var $66=$val; //@line 126 "nismodule.c"
        var $67=$66; //@line 126 "nismodule.c"
        var $68=HEAP[$67]; //@line 126 "nismodule.c"
        var $69=($68)==0; //@line 126 "nismodule.c"
        if ($69) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 126 "nismodule.c"
      case 15: // $bb14
        var $70=$val; //@line 126 "nismodule.c"
        var $71=$70+4; //@line 126 "nismodule.c"
        var $72=HEAP[$71]; //@line 126 "nismodule.c"
        var $73=$72+24; //@line 126 "nismodule.c"
        var $74=HEAP[$73]; //@line 126 "nismodule.c"
        var $75=$val; //@line 126 "nismodule.c"
        FUNCTION_TABLE[$74]($75); //@line 126 "nismodule.c"
        __label__ = 16; break; //@line 126 "nismodule.c"
      case 16: // $bb15
        var $76=_PyEval_SaveThread(); //@line 127 "nismodule.c"
        var $77=$indata_addr; //@line 127 "nismodule.c"
        var $78=$77+8; //@line 127 "nismodule.c"
        HEAP[$78]=$76; //@line 127 "nismodule.c"
        $0=1; //@line 128 "nismodule.c"
        __label__ = 27; break; //@line 128 "nismodule.c"
      case 17: // $bb16
        var $79=$indata_addr; //@line 130 "nismodule.c"
        var $80=$79; //@line 130 "nismodule.c"
        var $81=HEAP[$80]; //@line 130 "nismodule.c"
        var $82=$key; //@line 130 "nismodule.c"
        var $83=$val; //@line 130 "nismodule.c"
        var $84=_PyDict_SetItem($81, $82, $83); //@line 130 "nismodule.c"
        $err=$84; //@line 130 "nismodule.c"
        var $85=$key; //@line 131 "nismodule.c"
        var $86=$85; //@line 131 "nismodule.c"
        var $87=HEAP[$86]; //@line 131 "nismodule.c"
        var $88=($87) - 1; //@line 131 "nismodule.c"
        var $89=$key; //@line 131 "nismodule.c"
        var $90=$89; //@line 131 "nismodule.c"
        HEAP[$90]=$88; //@line 131 "nismodule.c"
        var $91=$key; //@line 131 "nismodule.c"
        var $92=$91; //@line 131 "nismodule.c"
        var $93=HEAP[$92]; //@line 131 "nismodule.c"
        var $94=($93)==0; //@line 131 "nismodule.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 131 "nismodule.c"
      case 18: // $bb17
        var $95=$key; //@line 131 "nismodule.c"
        var $96=$95+4; //@line 131 "nismodule.c"
        var $97=HEAP[$96]; //@line 131 "nismodule.c"
        var $98=$97+24; //@line 131 "nismodule.c"
        var $99=HEAP[$98]; //@line 131 "nismodule.c"
        var $100=$key; //@line 131 "nismodule.c"
        FUNCTION_TABLE[$99]($100); //@line 131 "nismodule.c"
        __label__ = 19; break; //@line 131 "nismodule.c"
      case 19: // $bb18
        var $101=$val; //@line 132 "nismodule.c"
        var $102=$101; //@line 132 "nismodule.c"
        var $103=HEAP[$102]; //@line 132 "nismodule.c"
        var $104=($103) - 1; //@line 132 "nismodule.c"
        var $105=$val; //@line 132 "nismodule.c"
        var $106=$105; //@line 132 "nismodule.c"
        HEAP[$106]=$104; //@line 132 "nismodule.c"
        var $107=$val; //@line 132 "nismodule.c"
        var $108=$107; //@line 132 "nismodule.c"
        var $109=HEAP[$108]; //@line 132 "nismodule.c"
        var $110=($109)==0; //@line 132 "nismodule.c"
        if ($110) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 132 "nismodule.c"
      case 20: // $bb19
        var $111=$val; //@line 132 "nismodule.c"
        var $112=$111+4; //@line 132 "nismodule.c"
        var $113=HEAP[$112]; //@line 132 "nismodule.c"
        var $114=$113+24; //@line 132 "nismodule.c"
        var $115=HEAP[$114]; //@line 132 "nismodule.c"
        var $116=$val; //@line 132 "nismodule.c"
        FUNCTION_TABLE[$115]($116); //@line 132 "nismodule.c"
        __label__ = 21; break; //@line 132 "nismodule.c"
      case 21: // $bb20
        var $117=$err; //@line 133 "nismodule.c"
        var $118=($117)!=0; //@line 133 "nismodule.c"
        if ($118) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 133 "nismodule.c"
      case 22: // $bb21
        _PyErr_Clear(); //@line 134 "nismodule.c"
        __label__ = 23; break; //@line 134 "nismodule.c"
      case 23: // $bb22
        var $119=_PyEval_SaveThread(); //@line 135 "nismodule.c"
        var $120=$indata_addr; //@line 135 "nismodule.c"
        var $121=$120+8; //@line 135 "nismodule.c"
        HEAP[$121]=$119; //@line 135 "nismodule.c"
        var $122=$err; //@line 136 "nismodule.c"
        var $123=($122)!=0; //@line 136 "nismodule.c"
        if ($123) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 136 "nismodule.c"
      case 24: // $bb23
        $0=1; //@line 137 "nismodule.c"
        __label__ = 27; break; //@line 137 "nismodule.c"
      case 25: // $bb24
        $0=0; //@line 138 "nismodule.c"
        __label__ = 27; break; //@line 138 "nismodule.c"
      case 26: // $bb25
        $0=1; //@line 140 "nismodule.c"
        __label__ = 27; break; //@line 140 "nismodule.c"
      case 27: // $bb26
        var $124=$0; //@line 128 "nismodule.c"
        $retval=$124; //@line 128 "nismodule.c"
        var $retval27=$retval; //@line 128 "nismodule.c"
        ;
        return $retval27; //@line 128 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_get_default_domain($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr_i;
        var $retval_i;
        var $0;
        var $self_addr;
        var $retval;
        var $1;
        var $domain=__stackBase__;
        var $err;
        var $res;
        $self_addr=$self;
        var $2=_yp_get_default_domain($domain); //@line 150 "nismodule.c"
        $err=$2; //@line 150 "nismodule.c"
        var $3=$err; //@line 150 "nismodule.c"
        var $4=($3)!=0; //@line 150 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "nismodule.c"
      case 1: // $bb
        var $5=$err; //@line 151 "nismodule.c"
        $err_addr_i=$5;
        var $6=$err_addr_i; //@line 52 "nismodule.c"
        var $7=_yperr_string($6); //@line 52 "nismodule.c"
        var $8=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($8, $7); //@line 52 "nismodule.c"
        $0=0; //@line 53 "nismodule.c"
        var $9=$0; //@line 53 "nismodule.c"
        $retval_i=$9; //@line 53 "nismodule.c"
        var $retval1_i=$retval_i; //@line 53 "nismodule.c"
        $1=$retval1_i; //@line 151 "nismodule.c"
        __label__ = 3; break; //@line 151 "nismodule.c"
      case 2: // $bb1
        var $10=HEAP[$domain]; //@line 153 "nismodule.c"
        var $11=_strlen($10); //@line 153 "nismodule.c"
        var $12=HEAP[$domain]; //@line 153 "nismodule.c"
        var $13=_PyString_FromStringAndSize($12, $11); //@line 153 "nismodule.c"
        $res=$13; //@line 153 "nismodule.c"
        var $14=$res; //@line 154 "nismodule.c"
        $1=$14; //@line 154 "nismodule.c"
        __label__ = 3; break; //@line 154 "nismodule.c"
      case 3: // $bb2
        var $15=$1; //@line 151 "nismodule.c"
        $retval=$15; //@line 151 "nismodule.c"
        var $retval3=$retval; //@line 151 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 151 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_match($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr_i1;
        var $retval_i2;
        var $0;
        var $err_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $kwdict_addr;
        var $retval;
        var $2;
        var $match=__stackBase__;
        var $domain=__stackBase__+4;
        var $keylen=__stackBase__+8;
        var $len=__stackBase__+12;
        var $key=__stackBase__+16;
        var $map=__stackBase__+20;
        var $err;
        var $res;
        var $fix=__stackBase__+24;
        $self_addr=$self;
        $args_addr=$args;
        $kwdict_addr=$kwdict;
        HEAP[$domain]=0; //@line 161 "nismodule.c"
        var $3=$args_addr; //@line 169 "nismodule.c"
        var $4=$kwdict_addr; //@line 169 "nismodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str16, _kwlist_9940, $key, $keylen, $map, $domain); //@line 169 "nismodule.c"
        var $6=($5)==0; //@line 169 "nismodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 169 "nismodule.c"
      case 1: // $bb
        $2=0; //@line 172 "nismodule.c"
        __label__ = 12; break; //@line 172 "nismodule.c"
      case 2: // $bb1
        var $7=HEAP[$domain]; //@line 173 "nismodule.c"
        var $8=($7)==0; //@line 173 "nismodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 173 "nismodule.c"
      case 3: // $bb2
        var $9=_yp_get_default_domain($domain); //@line 173 "nismodule.c"
        $err=$9; //@line 173 "nismodule.c"
        var $10=$err; //@line 173 "nismodule.c"
        var $11=($10)!=0; //@line 173 "nismodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 173 "nismodule.c"
      case 4: // $bb3
        var $12=$err; //@line 174 "nismodule.c"
        $err_addr_i=$12;
        var $13=$err_addr_i; //@line 52 "nismodule.c"
        var $14=_yperr_string($13); //@line 52 "nismodule.c"
        var $15=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($15, $14); //@line 52 "nismodule.c"
        $1=0; //@line 53 "nismodule.c"
        var $16=$1; //@line 53 "nismodule.c"
        $retval_i=$16; //@line 53 "nismodule.c"
        var $retval1_i=$retval_i; //@line 53 "nismodule.c"
        $2=$retval1_i; //@line 174 "nismodule.c"
        __label__ = 12; break; //@line 174 "nismodule.c"
      case 5: // $bb4
        var $17=HEAP[$map]; //@line 175 "nismodule.c"
        var $18=_nis_mapname($17, $fix); //@line 175 "nismodule.c"
        HEAP[$map]=$18; //@line 175 "nismodule.c"
        var $19=HEAP[$fix]; //@line 176 "nismodule.c"
        var $20=($19)!=0; //@line 176 "nismodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 176 "nismodule.c"
      case 6: // $bb5
        var $21=HEAP[$keylen]; //@line 177 "nismodule.c"
        var $22=($21) + 1; //@line 177 "nismodule.c"
        HEAP[$keylen]=$22; //@line 177 "nismodule.c"
        __label__ = 7; break; //@line 177 "nismodule.c"
      case 7: // $bb6
        var $23=HEAP[$keylen]; //@line 179 "nismodule.c"
        var $24=HEAP[$key]; //@line 179 "nismodule.c"
        var $25=HEAP[$map]; //@line 179 "nismodule.c"
        var $26=HEAP[$domain]; //@line 179 "nismodule.c"
        var $27=_yp_match($26, $25, $24, $23, $match, $len); //@line 179 "nismodule.c"
        $err=$27; //@line 179 "nismodule.c"
        var $28=HEAP[$fix]; //@line 181 "nismodule.c"
        var $29=($28)!=0; //@line 181 "nismodule.c"
        if ($29) { __lastLabel__ = 7; __label__ = 8; break; } else { __lastLabel__ = 7; __label__ = 9; break; } //@line 181 "nismodule.c"
      case 8: // $bb7
        var $30=HEAP[$len]; //@line 182 "nismodule.c"
        var $31=($30) - 1; //@line 182 "nismodule.c"
        HEAP[$len]=$31; //@line 182 "nismodule.c"
        var $_pr=$err;
        __lastLabel__ = 8; __label__ = 9; break; //@line 182 "nismodule.c"
      case 9: // $bb8
        var $32=__lastLabel__ == 8 ? $_pr : ($27);
        var $33=($32)!=0; //@line 183 "nismodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 183 "nismodule.c"
      case 10: // $bb9
        var $34=$err; //@line 184 "nismodule.c"
        $err_addr_i1=$34;
        var $35=$err_addr_i1; //@line 52 "nismodule.c"
        var $36=_yperr_string($35); //@line 52 "nismodule.c"
        var $37=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($37, $36); //@line 52 "nismodule.c"
        $0=0; //@line 53 "nismodule.c"
        var $38=$0; //@line 53 "nismodule.c"
        $retval_i2=$38; //@line 53 "nismodule.c"
        var $retval1_i3=$retval_i2; //@line 53 "nismodule.c"
        $2=$retval1_i3; //@line 184 "nismodule.c"
        __label__ = 12; break; //@line 184 "nismodule.c"
      case 11: // $bb10
        var $39=HEAP[$len]; //@line 185 "nismodule.c"
        var $40=HEAP[$match]; //@line 185 "nismodule.c"
        var $41=_PyString_FromStringAndSize($40, $39); //@line 185 "nismodule.c"
        $res=$41; //@line 185 "nismodule.c"
        var $42=HEAP[$match]; //@line 186 "nismodule.c"
        _free($42); //@line 186 "nismodule.c"
        var $43=$res; //@line 187 "nismodule.c"
        $2=$43; //@line 187 "nismodule.c"
        __label__ = 12; break; //@line 187 "nismodule.c"
      case 12: // $bb11
        var $44=$2; //@line 172 "nismodule.c"
        $retval=$44; //@line 172 "nismodule.c"
        var $retval12=$retval; //@line 172 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 172 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_cat($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr_i1;
        var $retval_i2;
        var $0;
        var $err_addr_i;
        var $retval_i;
        var $1;
        var $self_addr;
        var $args_addr;
        var $kwdict_addr;
        var $retval;
        var $2;
        var $domain=__stackBase__;
        var $map=__stackBase__+4;
        var $cb=__stackBase__+8;
        var $data=__stackBase__+16;
        var $dict;
        var $err;
        $self_addr=$self;
        $args_addr=$args;
        $kwdict_addr=$kwdict;
        HEAP[$domain]=0; //@line 193 "nismodule.c"
        var $3=$args_addr; //@line 201 "nismodule.c"
        var $4=$kwdict_addr; //@line 201 "nismodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str20, _kwlist_9988, $map, $domain); //@line 201 "nismodule.c"
        var $6=($5)==0; //@line 201 "nismodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 201 "nismodule.c"
      case 1: // $bb
        $2=0; //@line 203 "nismodule.c"
        __label__ = 12; break; //@line 203 "nismodule.c"
      case 2: // $bb1
        var $7=HEAP[$domain]; //@line 204 "nismodule.c"
        var $8=($7)==0; //@line 204 "nismodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 204 "nismodule.c"
      case 3: // $bb2
        var $9=_yp_get_default_domain($domain); //@line 204 "nismodule.c"
        $err=$9; //@line 204 "nismodule.c"
        var $10=$err; //@line 204 "nismodule.c"
        var $11=($10)!=0; //@line 204 "nismodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 204 "nismodule.c"
      case 4: // $bb3
        var $12=$err; //@line 205 "nismodule.c"
        $err_addr_i=$12;
        var $13=$err_addr_i; //@line 52 "nismodule.c"
        var $14=_yperr_string($13); //@line 52 "nismodule.c"
        var $15=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($15, $14); //@line 52 "nismodule.c"
        $1=0; //@line 53 "nismodule.c"
        var $16=$1; //@line 53 "nismodule.c"
        $retval_i=$16; //@line 53 "nismodule.c"
        var $retval1_i=$retval_i; //@line 53 "nismodule.c"
        $2=$retval1_i; //@line 205 "nismodule.c"
        __label__ = 12; break; //@line 205 "nismodule.c"
      case 5: // $bb4
        var $17=_PyDict_New(); //@line 206 "nismodule.c"
        $dict=$17; //@line 206 "nismodule.c"
        var $18=($17)==0; //@line 207 "nismodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 207 "nismodule.c"
      case 6: // $bb5
        $2=0; //@line 208 "nismodule.c"
        __label__ = 12; break; //@line 208 "nismodule.c"
      case 7: // $bb6
        var $19=$cb; //@line 209 "nismodule.c"
        HEAP[$19]=(FUNCTION_TABLE_OFFSET + 2); //@line 209 "nismodule.c"
        var $20=$data; //@line 210 "nismodule.c"
        var $21=$dict; //@line 210 "nismodule.c"
        HEAP[$20]=$21; //@line 210 "nismodule.c"
        var $22=HEAP[$map]; //@line 211 "nismodule.c"
        var $23=$data+4; //@line 211 "nismodule.c"
        var $24=_nis_mapname($22, $23); //@line 211 "nismodule.c"
        HEAP[$map]=$24; //@line 211 "nismodule.c"
        var $data7=$data; //@line 212 "nismodule.c"
        var $25=$cb+4; //@line 212 "nismodule.c"
        HEAP[$25]=$data7; //@line 212 "nismodule.c"
        var $26=_PyEval_SaveThread(); //@line 213 "nismodule.c"
        var $27=$data+8; //@line 213 "nismodule.c"
        HEAP[$27]=$26; //@line 213 "nismodule.c"
        var $28=HEAP[$map]; //@line 214 "nismodule.c"
        var $29=HEAP[$domain]; //@line 214 "nismodule.c"
        var $30=_yp_all($29, $28, $cb); //@line 214 "nismodule.c"
        $err=$30; //@line 214 "nismodule.c"
        var $31=$data+8; //@line 215 "nismodule.c"
        var $32=HEAP[$31]; //@line 215 "nismodule.c"
        _PyEval_RestoreThread($32); //@line 215 "nismodule.c"
        var $33=$err; //@line 216 "nismodule.c"
        var $34=($33)!=0; //@line 216 "nismodule.c"
        var $35=$dict; //@line 217 "nismodule.c"
        if ($34) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 216 "nismodule.c"
      case 8: // $bb9
        var $36=$35; //@line 217 "nismodule.c"
        var $37=HEAP[$36]; //@line 217 "nismodule.c"
        var $38=($37) - 1; //@line 217 "nismodule.c"
        var $39=$dict; //@line 217 "nismodule.c"
        var $40=$39; //@line 217 "nismodule.c"
        HEAP[$40]=$38; //@line 217 "nismodule.c"
        var $41=$dict; //@line 217 "nismodule.c"
        var $42=$41; //@line 217 "nismodule.c"
        var $43=HEAP[$42]; //@line 217 "nismodule.c"
        var $44=($43)==0; //@line 217 "nismodule.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 217 "nismodule.c"
      case 9: // $bb10
        var $45=$dict; //@line 217 "nismodule.c"
        var $46=$45+4; //@line 217 "nismodule.c"
        var $47=HEAP[$46]; //@line 217 "nismodule.c"
        var $48=$47+24; //@line 217 "nismodule.c"
        var $49=HEAP[$48]; //@line 217 "nismodule.c"
        var $50=$dict; //@line 217 "nismodule.c"
        FUNCTION_TABLE[$49]($50); //@line 217 "nismodule.c"
        __label__ = 10; break; //@line 217 "nismodule.c"
      case 10: // $bb11
        var $51=$err; //@line 218 "nismodule.c"
        $err_addr_i1=$51;
        var $52=$err_addr_i1; //@line 52 "nismodule.c"
        var $53=_yperr_string($52); //@line 52 "nismodule.c"
        var $54=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($54, $53); //@line 52 "nismodule.c"
        $0=0; //@line 53 "nismodule.c"
        var $55=$0; //@line 53 "nismodule.c"
        $retval_i2=$55; //@line 53 "nismodule.c"
        var $retval1_i3=$retval_i2; //@line 53 "nismodule.c"
        $2=$retval1_i3; //@line 218 "nismodule.c"
        __label__ = 12; break; //@line 218 "nismodule.c"
      case 11: // $bb12
        $2=$35; //@line 220 "nismodule.c"
        __label__ = 12; break; //@line 220 "nismodule.c"
      case 12: // $bb13
        var $56=$2; //@line 203 "nismodule.c"
        $retval=$56; //@line 203 "nismodule.c"
        var $retval14=$retval; //@line 203 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 203 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_domainname($xdrs, $objp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr;
        var $objp_addr;
        var $retval;
        var $0;
        $xdrs_addr=$xdrs;
        $objp_addr=$objp;
        var $1=$xdrs_addr; //@line 271 "nismodule.c"
        var $2=$objp_addr; //@line 271 "nismodule.c"
        var $3=_xdr_string($1, $2, 64); //@line 271 "nismodule.c"
        var $4=($3)==0; //@line 271 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 271 "nismodule.c"
      case 1: // $bb
        $0=0; //@line 272 "nismodule.c"
        __label__ = 3; break; //@line 272 "nismodule.c"
      case 2: // $bb1
        $0=1; //@line 274 "nismodule.c"
        __label__ = 3; break; //@line 274 "nismodule.c"
      case 3: // $bb2
        var $5=$0; //@line 272 "nismodule.c"
        $retval=$5; //@line 272 "nismodule.c"
        var $retval3=$retval; //@line 272 "nismodule.c"
        ;
        return $retval3; //@line 272 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_ypmaplist($xdrs, $objp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr_i;
        var $objp_addr_i;
        var $retval_i;
        var $0;
        var $xdrs_addr;
        var $objp_addr;
        var $retval;
        var $1;
        $xdrs_addr=$xdrs;
        $objp_addr=$objp;
        var $2=$objp_addr; //@line 291 "nismodule.c"
        var $3=$2; //@line 291 "nismodule.c"
        var $4=$xdrs_addr; //@line 291 "nismodule.c"
        $xdrs_addr_i=$4;
        $objp_addr_i=$3;
        var $5=$xdrs_addr_i; //@line 281 "nismodule.c"
        var $6=$objp_addr_i; //@line 281 "nismodule.c"
        var $7=_xdr_string($5, $6, 64); //@line 281 "nismodule.c"
        var $8=($7)==0; //@line 281 "nismodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 281 "nismodule.c"
      case 1: // $bb
        $0=0; //@line 282 "nismodule.c"
        $retval_i=0; //@line 282 "nismodule.c"
        $1=0; //@line 292 "nismodule.c"
        __label__ = 5; break; //@line 292 "nismodule.c"
      case 2: // $bb1
        $0=1; //@line 284 "nismodule.c"
        $retval_i=1; //@line 282 "nismodule.c"
        var $9=$objp_addr; //@line 294 "nismodule.c"
        var $10=$9+4; //@line 294 "nismodule.c"
        var $11=$10; //@line 294 "nismodule.c"
        var $12=$xdrs_addr; //@line 294 "nismodule.c"
        var $13=_xdr_pointer($12, $11, 8, (FUNCTION_TABLE_OFFSET + 4)); //@line 294 "nismodule.c"
        var $14=($13)==0; //@line 294 "nismodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 294 "nismodule.c"
      case 3: // $bb2
        $1=0; //@line 297 "nismodule.c"
        __label__ = 5; break; //@line 297 "nismodule.c"
      case 4: // $bb3
        $1=1; //@line 299 "nismodule.c"
        __label__ = 5; break; //@line 299 "nismodule.c"
      case 5: // $bb4
        var $15=$1; //@line 292 "nismodule.c"
        $retval=$15; //@line 292 "nismodule.c"
        var $retval5=$retval; //@line 292 "nismodule.c"
        ;
        return $retval5; //@line 292 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_ypresp_maplist($xdrs, $objp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr_i;
        var $objp_addr_i;
        var $retval_i;
        var $0;
        var $xdrs_addr;
        var $objp_addr;
        var $retval;
        var $1;
        $xdrs_addr=$xdrs;
        $objp_addr=$objp;
        var $2=$objp_addr; //@line 317 "nismodule.c"
        var $3=$2; //@line 317 "nismodule.c"
        var $4=$xdrs_addr; //@line 317 "nismodule.c"
        $xdrs_addr_i=$4;
        $objp_addr_i=$3;
        var $5=$xdrs_addr_i; //@line 306 "nismodule.c"
        var $6=$objp_addr_i; //@line 306 "nismodule.c"
        var $7=_xdr_enum($5, $6); //@line 306 "nismodule.c"
        var $8=($7)==0; //@line 306 "nismodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 306 "nismodule.c"
      case 1: // $bb
        $0=0; //@line 307 "nismodule.c"
        $retval_i=0; //@line 307 "nismodule.c"
        $1=0; //@line 318 "nismodule.c"
        __label__ = 5; break; //@line 318 "nismodule.c"
      case 2: // $bb1
        $0=1; //@line 309 "nismodule.c"
        $retval_i=1; //@line 307 "nismodule.c"
        var $9=$objp_addr; //@line 320 "nismodule.c"
        var $10=$9+4; //@line 320 "nismodule.c"
        var $11=$10; //@line 320 "nismodule.c"
        var $12=$xdrs_addr; //@line 320 "nismodule.c"
        var $13=_xdr_pointer($12, $11, 8, (FUNCTION_TABLE_OFFSET + 4)); //@line 320 "nismodule.c"
        var $14=($13)==0; //@line 320 "nismodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 320 "nismodule.c"
      case 3: // $bb2
        $1=0; //@line 323 "nismodule.c"
        __label__ = 5; break; //@line 323 "nismodule.c"
      case 4: // $bb3
        $1=1; //@line 325 "nismodule.c"
        __label__ = 5; break; //@line 325 "nismodule.c"
      case 5: // $bb4
        var $15=$1; //@line 318 "nismodule.c"
        $retval=$15; //@line 318 "nismodule.c"
        var $retval5=$retval; //@line 318 "nismodule.c"
        ;
        return $retval5; //@line 318 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_maps($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $argp_addr_i_i;
        var $clnt_addr_i_i;
        var $retval_i_i;
        var $0;
        var $dom_addr_i=__stackBase__;
        var $retval_i1;
        var $1;
        var $list_i;
        var $cl_i;
        var $server_i=__stackBase__+4;
        var $mapi_i;
        var $err_addr_i;
        var $retval_i;
        var $2;
        var $self_addr;
        var $args_addr;
        var $kwdict_addr;
        var $retval;
        var $3;
        var $domain=__stackBase__+8;
        var $maps;
        var $list;
        var $err;
        var $str;
        $self_addr=$self;
        $args_addr=$args;
        $kwdict_addr=$kwdict;
        HEAP[$domain]=0; //@line 386 "nismodule.c"
        var $4=$args_addr; //@line 392 "nismodule.c"
        var $5=$kwdict_addr; //@line 392 "nismodule.c"
        var $6=_PyArg_ParseTupleAndKeywords($4, $5, __str23, _kwlist_10170, $domain); //@line 392 "nismodule.c"
        var $7=($6)==0; //@line 392 "nismodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 392 "nismodule.c"
      case 1: // $bb
        $3=0; //@line 394 "nismodule.c"
        __label__ = 35; break; //@line 394 "nismodule.c"
      case 2: // $bb1
        var $8=HEAP[$domain]; //@line 395 "nismodule.c"
        var $9=($8)==0; //@line 395 "nismodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 395 "nismodule.c"
      case 3: // $bb2
        var $10=_yp_get_default_domain($domain); //@line 395 "nismodule.c"
        $err=$10; //@line 395 "nismodule.c"
        var $11=$err; //@line 395 "nismodule.c"
        var $12=($11)!=0; //@line 395 "nismodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 395 "nismodule.c"
      case 4: // $bb3
        var $13=$err; //@line 396 "nismodule.c"
        $err_addr_i=$13;
        var $14=$err_addr_i; //@line 52 "nismodule.c"
        var $15=_yperr_string($14); //@line 52 "nismodule.c"
        var $16=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($16, $15); //@line 52 "nismodule.c"
        $2=0; //@line 53 "nismodule.c"
        var $17=$2; //@line 53 "nismodule.c"
        $retval_i=$17; //@line 53 "nismodule.c"
        $3=0; //@line 397 "nismodule.c"
        __label__ = 35; break; //@line 397 "nismodule.c"
      case 5: // $bb4
        var $18=HEAP[$domain]; //@line 400 "nismodule.c"
        HEAP[$dom_addr_i]=$18;
        HEAP[$server_i]=0; //@line 352 "nismodule.c"
        $mapi_i=0; //@line 353 "nismodule.c"
        __lastLabel__ = 5; __label__ = 7; break; //@line 353 "nismodule.c"
      case 6: // $bb_i
        var $19=$mapi_i; //@line 356 "nismodule.c"
        var $20=_aliases+$19*12; //@line 356 "nismodule.c"
        var $21=$20+4; //@line 356 "nismodule.c"
        var $22=HEAP[$21]; //@line 356 "nismodule.c"
        var $23=HEAP[$dom_addr_i]; //@line 356 "nismodule.c"
        var $24=_yp_master($23, $22, $server_i); //@line 356 "nismodule.c"
        var $25=$mapi_i; //@line 357 "nismodule.c"
        var $26=($25) + 1; //@line 357 "nismodule.c"
        $mapi_i=$26; //@line 357 "nismodule.c"
        var $_pr_i=HEAP[$server_i];
        __lastLabel__ = 6; __label__ = 7; break; //@line 357 "nismodule.c"
      case 7: // $bb1_i
        var $27=__lastLabel__ == 6 ? $_pr_i : (0);
        var $28=($27)!=0; //@line 355 "nismodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 355 "nismodule.c"
      case 8: // $bb2_i
        var $29=$mapi_i; //@line 355 "nismodule.c"
        var $30=_aliases+$29*12; //@line 355 "nismodule.c"
        var $31=$30+4; //@line 355 "nismodule.c"
        var $32=HEAP[$31]; //@line 355 "nismodule.c"
        var $33=($32)!=0; //@line 355 "nismodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 355 "nismodule.c"
      case 9: // $bb3_i
        var $34=HEAP[$server_i]; //@line 359 "nismodule.c"
        var $35=($34)==0; //@line 359 "nismodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 359 "nismodule.c"
      case 10: // $bb4_i
        var $36=HEAP[_NisError]; //@line 360 "nismodule.c"
        _PyErr_SetString($36, __str21); //@line 360 "nismodule.c"
        $1=0; //@line 361 "nismodule.c"
        __label__ = 19; break; //@line 361 "nismodule.c"
      case 11: // $bb5_i
        var $37=HEAP[$server_i]; //@line 363 "nismodule.c"
        var $38=_clnt_create($37, 100004, 2, __str22); //@line 363 "nismodule.c"
        $cl_i=$38; //@line 363 "nismodule.c"
        var $39=$cl_i; //@line 364 "nismodule.c"
        var $40=($39)==0; //@line 364 "nismodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 364 "nismodule.c"
      case 12: // $bb6_i
        var $41=HEAP[$server_i]; //@line 365 "nismodule.c"
        var $42=_clnt_spcreateerror($41); //@line 365 "nismodule.c"
        var $43=HEAP[_NisError]; //@line 365 "nismodule.c"
        _PyErr_SetString($43, $42); //@line 365 "nismodule.c"
        __label__ = 18; break; //@line 365 "nismodule.c"
      case 13: // $bb7_i
        var $44=$cl_i; //@line 368 "nismodule.c"
        $argp_addr_i_i=$dom_addr_i;
        $clnt_addr_i_i=$44;
        _llvm_memset_p0i8_i32(_res_10110, 0, 8, 1, 0); //@line 335 "nismodule.c"
        var $45=$clnt_addr_i_i; //@line 336 "nismodule.c"
        var $46=$45+4; //@line 336 "nismodule.c"
        var $47=HEAP[$46]; //@line 336 "nismodule.c"
        var $48=$47; //@line 336 "nismodule.c"
        var $49=HEAP[$48]; //@line 336 "nismodule.c"
        var $50=$argp_addr_i_i; //@line 336 "nismodule.c"
        var $51=$50; //@line 336 "nismodule.c"
        var $52=$clnt_addr_i_i; //@line 336 "nismodule.c"
        var $53=FUNCTION_TABLE[$49]($52, 11, (FUNCTION_TABLE_OFFSET + 6), $51, (FUNCTION_TABLE_OFFSET + 8), _res_10110, 25, 0); //@line 336 "nismodule.c"
        var $54=($53)!=0; //@line 336 "nismodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 336 "nismodule.c"
      case 14: // $bb_i_i
        $0=0; //@line 341 "nismodule.c"
        __label__ = 16; break; //@line 341 "nismodule.c"
      case 15: // $bb2_i_i
        $0=_res_10110; //@line 343 "nismodule.c"
        __label__ = 16; break; //@line 343 "nismodule.c"
      case 16: // $nisproc_maplist_2_exit_i
        var $55=$0; //@line 341 "nismodule.c"
        $retval_i_i=$55; //@line 341 "nismodule.c"
        var $retval4_i_i=$retval_i_i; //@line 341 "nismodule.c"
        $list_i=$retval4_i_i; //@line 368 "nismodule.c"
        var $56=$cl_i; //@line 369 "nismodule.c"
        var $57=$56+4; //@line 369 "nismodule.c"
        var $58=HEAP[$57]; //@line 369 "nismodule.c"
        var $59=$58+16; //@line 369 "nismodule.c"
        var $60=HEAP[$59]; //@line 369 "nismodule.c"
        var $61=$cl_i; //@line 369 "nismodule.c"
        FUNCTION_TABLE[$60]($61); //@line 369 "nismodule.c"
        var $62=$list_i; //@line 370 "nismodule.c"
        var $63=($62)==0; //@line 370 "nismodule.c"
        if ($63) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 370 "nismodule.c"
      case 17: // $bb8_i
        var $64=$list_i; //@line 372 "nismodule.c"
        var $65=$64; //@line 372 "nismodule.c"
        var $66=HEAP[$65]; //@line 372 "nismodule.c"
        var $67=($66)!=1; //@line 372 "nismodule.c"
        if ($67) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 372 "nismodule.c"
      case 18: // $finally_i
        var $68=HEAP[$server_i]; //@line 379 "nismodule.c"
        _free($68); //@line 379 "nismodule.c"
        $1=0; //@line 380 "nismodule.c"
        __label__ = 19; break; //@line 380 "nismodule.c"
      case 19: // $nis_maplist_exit_thread
        $retval_i1=0; //@line 361 "nismodule.c"
        $maps=0; //@line 400 "nismodule.c"
        __label__ = 21; break;
      case 20: // $nis_maplist_exit
        var $69=HEAP[$server_i]; //@line 375 "nismodule.c"
        _free($69); //@line 375 "nismodule.c"
        var $70=$list_i; //@line 376 "nismodule.c"
        var $71=$70+4; //@line 376 "nismodule.c"
        var $72=HEAP[$71]; //@line 376 "nismodule.c"
        $1=$72; //@line 376 "nismodule.c"
        $retval_i1=$72; //@line 361 "nismodule.c"
        $maps=$72; //@line 400 "nismodule.c"
        var $73=($72)==0; //@line 400 "nismodule.c"
        if ($73) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 400 "nismodule.c"
      case 21: // $bb5
        $3=0; //@line 401 "nismodule.c"
        __label__ = 35; break; //@line 401 "nismodule.c"
      case 22: // $bb6
        var $74=_PyList_New(0); //@line 402 "nismodule.c"
        $list=$74; //@line 402 "nismodule.c"
        var $75=$list; //@line 402 "nismodule.c"
        var $76=($75)==0; //@line 402 "nismodule.c"
        if ($76) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 402 "nismodule.c"
      case 23: // $bb7
        $3=0; //@line 403 "nismodule.c"
        __label__ = 35; break; //@line 403 "nismodule.c"
      case 24: // $bb8
        var $77=$maps; //@line 404 "nismodule.c"
        __lastLabel__ = 24; __label__ = 33; break; //@line 404 "nismodule.c"
      case 25: // $bb9
        var $78=$maps; //@line 405 "nismodule.c"
        var $79=$78; //@line 405 "nismodule.c"
        var $80=HEAP[$79]; //@line 405 "nismodule.c"
        var $81=_PyString_FromString($80); //@line 405 "nismodule.c"
        $str=$81; //@line 405 "nismodule.c"
        var $82=$str; //@line 406 "nismodule.c"
        var $83=($82)==0; //@line 406 "nismodule.c"
        if ($83) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 406 "nismodule.c"
      case 26: // $bb10
        var $84=$list; //@line 406 "nismodule.c"
        var $85=$str; //@line 406 "nismodule.c"
        var $86=_PyList_Append($84, $85); //@line 406 "nismodule.c"
        var $87=($86) < 0; //@line 406 "nismodule.c"
        if ($87) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 406 "nismodule.c"
      case 27: // $bb11
        var $88=$list; //@line 408 "nismodule.c"
        var $89=$88; //@line 408 "nismodule.c"
        var $90=HEAP[$89]; //@line 408 "nismodule.c"
        var $91=($90) - 1; //@line 408 "nismodule.c"
        var $92=$list; //@line 408 "nismodule.c"
        var $93=$92; //@line 408 "nismodule.c"
        HEAP[$93]=$91; //@line 408 "nismodule.c"
        var $94=$list; //@line 408 "nismodule.c"
        var $95=$94; //@line 408 "nismodule.c"
        var $96=HEAP[$95]; //@line 408 "nismodule.c"
        var $97=($96)==0; //@line 408 "nismodule.c"
        if ($97) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 408 "nismodule.c"
      case 28: // $bb12
        var $98=$list; //@line 408 "nismodule.c"
        var $99=$98+4; //@line 408 "nismodule.c"
        var $100=HEAP[$99]; //@line 408 "nismodule.c"
        var $101=$100+24; //@line 408 "nismodule.c"
        var $102=HEAP[$101]; //@line 408 "nismodule.c"
        var $103=$list; //@line 408 "nismodule.c"
        FUNCTION_TABLE[$102]($103); //@line 408 "nismodule.c"
        __label__ = 29; break; //@line 408 "nismodule.c"
      case 29: // $bb13
        $list=0; //@line 409 "nismodule.c"
        __label__ = 34; break; //@line 409 "nismodule.c"
      case 30: // $bb14
        var $104=$str; //@line 412 "nismodule.c"
        var $105=$104; //@line 412 "nismodule.c"
        var $106=HEAP[$105]; //@line 412 "nismodule.c"
        var $107=($106) - 1; //@line 412 "nismodule.c"
        var $108=$str; //@line 412 "nismodule.c"
        var $109=$108; //@line 412 "nismodule.c"
        HEAP[$109]=$107; //@line 412 "nismodule.c"
        var $110=$str; //@line 412 "nismodule.c"
        var $111=$110; //@line 412 "nismodule.c"
        var $112=HEAP[$111]; //@line 412 "nismodule.c"
        var $113=($112)==0; //@line 412 "nismodule.c"
        if ($113) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 412 "nismodule.c"
      case 31: // $bb15
        var $114=$str; //@line 412 "nismodule.c"
        var $115=$114+4; //@line 412 "nismodule.c"
        var $116=HEAP[$115]; //@line 412 "nismodule.c"
        var $117=$116+24; //@line 412 "nismodule.c"
        var $118=HEAP[$117]; //@line 412 "nismodule.c"
        var $119=$str; //@line 412 "nismodule.c"
        FUNCTION_TABLE[$118]($119); //@line 412 "nismodule.c"
        __label__ = 32; break; //@line 412 "nismodule.c"
      case 32: // $bb16
        var $120=$maps; //@line 404 "nismodule.c"
        var $121=$120+4; //@line 404 "nismodule.c"
        var $122=HEAP[$121]; //@line 404 "nismodule.c"
        $maps=$122; //@line 404 "nismodule.c"
        __lastLabel__ = 32; __label__ = 33; break; //@line 404 "nismodule.c"
      case 33: // $bb17
        var $123=__lastLabel__ == 32 ? $122 : ($77);
        var $124=($123)!=0; //@line 404 "nismodule.c"
        if ($124) { __label__ = 25; break; } else { __label__ = 34; break; } //@line 404 "nismodule.c"
      case 34: // $bb18
        var $125=$list; //@line 415 "nismodule.c"
        $3=$125; //@line 415 "nismodule.c"
        __label__ = 35; break; //@line 415 "nismodule.c"
      case 35: // $bb19
        var $126=$3; //@line 394 "nismodule.c"
        $retval=$126; //@line 394 "nismodule.c"
        var $retval20=$retval; //@line 394 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 394 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initnis() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $0=_Py_InitModule4(__str28, _nis_methods, _nis__doc__, 0, 1013); //@line 441 "nismodule.c"
        $m=$0; //@line 441 "nismodule.c"
        var $1=$m; //@line 442 "nismodule.c"
        var $2=($1)==0; //@line 442 "nismodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 442 "nismodule.c"
      case 1: // $bb
        var $3=$m; //@line 444 "nismodule.c"
        var $4=_PyModule_GetDict($3); //@line 444 "nismodule.c"
        $d=$4; //@line 444 "nismodule.c"
        var $5=_PyErr_NewException(__str29, 0, 0); //@line 445 "nismodule.c"
        HEAP[_NisError]=$5; //@line 445 "nismodule.c"
        var $6=HEAP[_NisError]; //@line 446 "nismodule.c"
        var $7=($6)!=0; //@line 446 "nismodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 446 "nismodule.c"
      case 2: // $bb1
        var $8=HEAP[_NisError]; //@line 447 "nismodule.c"
        var $9=$d; //@line 447 "nismodule.c"
        var $10=_PyDict_SetItemString($9, __str30, $8); //@line 447 "nismodule.c"
        __label__ = 3; break; //@line 447 "nismodule.c"
      case 3: // $return
        ;
        return; //@line 443 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initnis"] = _initnis;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_nis_foreach,0,_nis_xdr_ypmaplist,0,_nis_xdr_domainname,0,_nis_xdr_ypresp_maplist,0,_nis_match,0,_nis_cat,0,_nis_maps,0,_nis_get_default_domain,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_get_default_domain__doc__=allocate([103,101,116,95,100,101,102,97,117,108,116,95,100,111,109,97,105,110,40,41,32,45,62,32,115,116,114,10,67,111,114,114,101,115,112,111,110,100,115,32,116,111,32,116,104,101,32,67,32,108,105,98,114,97,114,121,32,121,112,95,103,101,116,95,100,101,102,97,117,108,116,95,100,111,109,97,105,110,40,41,32,99,97,108,108,44,32,114,101,116,117,114,110,105,110,103,10,116,104,101,32,100,101,102,97,117,108,116,32,78,73,83,32,100,111,109,97,105,110,46,10,0] /* get_default_domain() */, "i8", ALLOC_NORMAL);
_match__doc__=allocate([109,97,116,99,104,40,107,101,121,44,32,109,97,112,44,32,100,111,109,97,105,110,32,61,32,100,101,102,97,117,108,116,100,111,109,97,105,110,41,10,67,111,114,114,101,115,112,111,110,100,115,32,116,111,32,116,104,101,32,67,32,108,105,98,114,97,114,121,32,121,112,95,109,97,116,99,104,40,41,32,99,97,108,108,44,32,114,101,116,117,114,110,105,110,103,32,116,104,101,32,118,97,108,117,101,32,111,102,10,107,101,121,32,105,110,32,116,104,101,32,103,105,118,101,110,32,109,97,112,46,32,79,112,116,105,111,110,97,108,108,121,32,100,111,109,97,105,110,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,32,98,117,116,32,105,116,10,100,101,102,97,117,108,116,115,32,116,111,32,116,104,101,32,115,121,115,116,101,109,32,100,101,102,97,117,108,116,32,100,111,109,97,105,110,46,10,0] /* match(key, map, doma */, "i8", ALLOC_NORMAL);
_cat__doc__=allocate([99,97,116,40,109,97,112,44,32,100,111,109,97,105,110,32,61,32,100,101,102,97,117,108,116,100,111,109,97,105,110,41,10,82,101,116,117,114,110,115,32,116,104,101,32,101,110,116,105,114,101,32,109,97,112,32,97,115,32,97,32,100,105,99,116,105,111,110,97,114,121,46,32,79,112,116,105,111,110,97,108,108,121,32,100,111,109,97,105,110,32,99,97,110,32,98,101,10,115,112,101,99,105,102,105,101,100,32,98,117,116,32,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,116,104,101,32,115,121,115,116,101,109,32,100,101,102,97,117,108,116,32,100,111,109,97,105,110,46,10,0] /* cat(map, domain = de */, "i8", ALLOC_NORMAL);
_maps__doc__=allocate([109,97,112,115,40,100,111,109,97,105,110,32,61,32,100,101,102,97,117,108,116,100,111,109,97,105,110,41,10,82,101,116,117,114,110,115,32,97,110,32,97,114,114,97,121,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,78,73,83,32,109,97,112,115,32,119,105,116,104,105,110,32,97,32,100,111,109,97,105,110,46,32,73,102,32,100,111,109,97,105,110,10,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,32,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,116,104,101,32,115,121,115,116,101,109,32,100,101,102,97,117,108,116,32,100,111,109,97,105,110,46,10,0] /* maps(domain = defaul */, "i8", ALLOC_NORMAL);
_NisError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_aliases=allocate([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str=allocate([112,97,115,115,119,100,0] /* passwd\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([112,97,115,115,119,100,46,98,121,110,97,109,101,0] /* passwd.byname\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([103,114,111,117,112,0] /* group\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([103,114,111,117,112,46,98,121,110,97,109,101,0] /* group.byname\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([110,101,116,119,111,114,107,115,0] /* networks\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([110,101,116,119,111,114,107,115,46,98,121,97,100,100,114,0] /* networks.byaddr\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([104,111,115,116,115,0] /* hosts\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([104,111,115,116,115,46,98,121,110,97,109,101,0] /* hosts.byname\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([112,114,111,116,111,99,111,108,115,0] /* protocols\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([112,114,111,116,111,99,111,108,115,46,98,121,110,117,109,98,101,114,0] /* protocols.bynumber\0 */, "i8", ALLOC_NORMAL);
__str10=allocate([115,101,114,118,105,99,101,115,0] /* services\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([115,101,114,118,105,99,101,115,46,98,121,110,97,109,101,0] /* services.byname\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([97,108,105,97,115,101,115,0] /* aliases\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([109,97,105,108,46,97,108,105,97,115,101,115,0] /* mail.aliases\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([101,116,104,101,114,115,0] /* ethers\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([101,116,104,101,114,115,46,98,121,110,97,109,101,0] /* ethers.byname\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([116,35,115,124,115,58,109,97,116,99,104,0] /* t#s|s:match\00 */, "i8", ALLOC_NORMAL);
_kwlist_9940=allocate(16, "i8*", ALLOC_NORMAL);
__str17=allocate([107,101,121,0] /* key\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([109,97,112,0] /* map\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([100,111,109,97,105,110,0] /* domain\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([115,124,115,58,99,97,116,0] /* s|s:cat\00 */, "i8", ALLOC_NORMAL);
_kwlist_9988=allocate(12, "i8*", ALLOC_NORMAL);
_res_10110=allocate(8, ["i32",0,0,0,"%struct.nismaplist*",0,0,0], ALLOC_NORMAL);
__str21=allocate([78,111,32,78,73,83,32,109,97,115,116,101,114,32,102,111,117,110,100,32,102,111,114,32,97,110,121,32,109,97,112,0] /* No NIS master found  */, "i8", ALLOC_NORMAL);
__str22=allocate([116,99,112,0] /* tcp\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([124,115,58,109,97,112,115,0] /* |s:maps\00 */, "i8", ALLOC_NORMAL);
_kwlist_10170=allocate(8, "i8*", ALLOC_NORMAL);
__str24=allocate([109,97,116,99,104,0] /* match\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([99,97,116,0] /* cat\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([109,97,112,115,0] /* maps\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([103,101,116,95,100,101,102,97,117,108,116,95,100,111,109,97,105,110,0] /* get_default_domain\0 */, "i8", ALLOC_NORMAL);
_nis_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_nis__doc__=allocate([84,104,105,115,32,109,111,100,117,108,101,32,99,111,110,116,97,105,110,115,32,102,117,110,99,116,105,111,110,115,32,102,111,114,32,97,99,99,101,115,115,105,110,103,32,78,73,83,32,109,97,112,115,46,10,0] /* This module contains */, "i8", ALLOC_NORMAL);
__str28=allocate([110,105,115,0] /* nis\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([110,105,115,46,101,114,114,111,114,0] /* nis.error\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_aliases]=__str;
HEAP[_aliases+4]=__str1;
HEAP[_aliases+12]=__str2;
HEAP[_aliases+16]=__str3;
HEAP[_aliases+24]=__str4;
HEAP[_aliases+28]=__str5;
HEAP[_aliases+36]=__str6;
HEAP[_aliases+40]=__str7;
HEAP[_aliases+48]=__str8;
HEAP[_aliases+52]=__str9;
HEAP[_aliases+60]=__str10;
HEAP[_aliases+64]=__str11;
HEAP[_aliases+72]=__str12;
HEAP[_aliases+76]=__str13;
HEAP[_aliases+84]=__str14;
HEAP[_aliases+88]=__str15;
HEAP[_kwlist_9940]=__str17;
HEAP[_kwlist_9940+4]=__str18;
HEAP[_kwlist_9940+8]=__str19;
HEAP[_kwlist_9988]=__str18;
HEAP[_kwlist_9988+4]=__str19;
HEAP[_kwlist_10170]=__str19;
HEAP[_nis_methods]=__str24;
HEAP[_nis_methods+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_nis_methods+12]=_match__doc__;
HEAP[_nis_methods+16]=__str25;
HEAP[_nis_methods+20]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_nis_methods+28]=_cat__doc__;
HEAP[_nis_methods+32]=__str26;
HEAP[_nis_methods+36]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_nis_methods+44]=_maps__doc__;
HEAP[_nis_methods+48]=__str27;
HEAP[_nis_methods+52]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_nis_methods+60]=_get_default_domain__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

