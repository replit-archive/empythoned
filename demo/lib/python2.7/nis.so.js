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
  
var $struct_timeval___SIZE = 8; // %struct.timeval
  
var $struct_xdr_ops___SIZE = 40; // %struct.xdr_ops
  
var $struct_ypall_callback___SIZE = 8; // %struct.ypall_callback
  
var $struct_ypcallback_data___SIZE = 12; // %struct.ypcallback_data
  
var $union_anon___SIZE = 8; // %union.anon
  
var $union_des_block___SIZE = 8; // %union.des_block
  
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
var _TIMEOUT;
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


































  function _nis_error($err) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$err_addr]=$err;
        var $1=HEAP[$err_addr]; //@line 52 "nismodule.c"
        var $2=_yperr_string($1); //@line 52 "nismodule.c"
        var $3=HEAP[_NisError]; //@line 52 "nismodule.c"
        _PyErr_SetString($3, $2); //@line 52 "nismodule.c"
        HEAP[$0]=0; //@line 53 "nismodule.c"
        var $4=HEAP[$0]; //@line 53 "nismodule.c"
        HEAP[$retval]=$4; //@line 53 "nismodule.c"
        __label__ = 1; break; //@line 53 "nismodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 53 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 53 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_mapname($map, $pfix) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $map_addr=__stackBase__;
        var $pfix_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$map_addr]=$map;
        HEAP[$pfix_addr]=$pfix;
        var $1=HEAP[$pfix_addr]; //@line 77 "nismodule.c"
        HEAP[$1]=0; //@line 77 "nismodule.c"
        HEAP[$i]=0; //@line 78 "nismodule.c"
        __label__ = 6; break; //@line 78 "nismodule.c"
      case 1: // $bb
        var $2=HEAP[$i]; //@line 79 "nismodule.c"
        var $3=((_aliases+$2*12)&4294967295); //@line 79 "nismodule.c"
        var $4=(($3)&4294967295); //@line 79 "nismodule.c"
        var $5=HEAP[$4]; //@line 79 "nismodule.c"
        var $6=HEAP[$map_addr]; //@line 79 "nismodule.c"
        var $7=_strcmp($5, $6); //@line 79 "nismodule.c"
        var $8=((($7))|0)==0; //@line 79 "nismodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 79 "nismodule.c"
      case 2: // $bb1
        var $9=HEAP[$i]; //@line 80 "nismodule.c"
        var $10=((_aliases+$9*12)&4294967295); //@line 80 "nismodule.c"
        var $11=(($10+8)&4294967295); //@line 80 "nismodule.c"
        var $12=HEAP[$11]; //@line 80 "nismodule.c"
        var $13=HEAP[$pfix_addr]; //@line 80 "nismodule.c"
        HEAP[$13]=$12; //@line 80 "nismodule.c"
        var $14=HEAP[$i]; //@line 81 "nismodule.c"
        var $15=((_aliases+$14*12)&4294967295); //@line 81 "nismodule.c"
        var $16=(($15+4)&4294967295); //@line 81 "nismodule.c"
        var $17=HEAP[$16]; //@line 81 "nismodule.c"
        HEAP[$0]=$17; //@line 81 "nismodule.c"
        __label__ = 8; break; //@line 81 "nismodule.c"
      case 3: // $bb2
        var $18=HEAP[$i]; //@line 83 "nismodule.c"
        var $19=((_aliases+$18*12)&4294967295); //@line 83 "nismodule.c"
        var $20=(($19+4)&4294967295); //@line 83 "nismodule.c"
        var $21=HEAP[$20]; //@line 83 "nismodule.c"
        var $22=HEAP[$map_addr]; //@line 83 "nismodule.c"
        var $23=_strcmp($21, $22); //@line 83 "nismodule.c"
        var $24=((($23))|0)==0; //@line 83 "nismodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 83 "nismodule.c"
      case 4: // $bb3
        var $25=HEAP[$i]; //@line 84 "nismodule.c"
        var $26=((_aliases+$25*12)&4294967295); //@line 84 "nismodule.c"
        var $27=(($26+8)&4294967295); //@line 84 "nismodule.c"
        var $28=HEAP[$27]; //@line 84 "nismodule.c"
        var $29=HEAP[$pfix_addr]; //@line 84 "nismodule.c"
        HEAP[$29]=$28; //@line 84 "nismodule.c"
        var $30=HEAP[$i]; //@line 85 "nismodule.c"
        var $31=((_aliases+$30*12)&4294967295); //@line 85 "nismodule.c"
        var $32=(($31+4)&4294967295); //@line 85 "nismodule.c"
        var $33=HEAP[$32]; //@line 85 "nismodule.c"
        HEAP[$0]=$33; //@line 85 "nismodule.c"
        __label__ = 8; break; //@line 85 "nismodule.c"
      case 5: // $bb4
        var $34=HEAP[$i]; //@line 78 "nismodule.c"
        var $35=((($34) + 1)&4294967295); //@line 78 "nismodule.c"
        HEAP[$i]=$35; //@line 78 "nismodule.c"
        __label__ = 6; break; //@line 78 "nismodule.c"
      case 6: // $bb5
        var $36=HEAP[$i]; //@line 78 "nismodule.c"
        var $37=((_aliases+$36*12)&4294967295); //@line 78 "nismodule.c"
        var $38=(($37)&4294967295); //@line 78 "nismodule.c"
        var $39=HEAP[$38]; //@line 78 "nismodule.c"
        var $40=($39)!=0; //@line 78 "nismodule.c"
        if ($40) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 78 "nismodule.c"
      case 7: // $bb6
        var $41=HEAP[$map_addr]; //@line 89 "nismodule.c"
        HEAP[$0]=$41; //@line 89 "nismodule.c"
        __label__ = 8; break; //@line 89 "nismodule.c"
      case 8: // $bb7
        var $42=HEAP[$0]; //@line 81 "nismodule.c"
        HEAP[$retval]=$42; //@line 81 "nismodule.c"
        __label__ = 9; break; //@line 81 "nismodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 81 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 81 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_foreach($instatus, $inkey, $inkeylen, $inval, $invallen, $indata) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $instatus_addr=__stackBase__;
        var $inkey_addr=__stackBase__+4;
        var $inkeylen_addr=__stackBase__+8;
        var $inval_addr=__stackBase__+12;
        var $invallen_addr=__stackBase__+16;
        var $indata_addr=__stackBase__+20;
        var $retval=__stackBase__+24;
        var $0=__stackBase__+28;
        var $key=__stackBase__+32;
        var $val=__stackBase__+36;
        var $err=__stackBase__+40;
        var $_alloca_point_=0;
        HEAP[$instatus_addr]=$instatus;
        HEAP[$inkey_addr]=$inkey;
        HEAP[$inkeylen_addr]=$inkeylen;
        HEAP[$inval_addr]=$inval;
        HEAP[$invallen_addr]=$invallen;
        HEAP[$indata_addr]=$indata;
        var $1=HEAP[$instatus_addr]; //@line 108 "nismodule.c"
        var $2=((($1))|0)==1; //@line 108 "nismodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 26; break; } //@line 108 "nismodule.c"
      case 1: // $bb
        var $3=HEAP[$indata_addr]; //@line 113 "nismodule.c"
        var $4=(($3+8)&4294967295); //@line 113 "nismodule.c"
        var $5=HEAP[$4]; //@line 113 "nismodule.c"
        _PyEval_RestoreThread($5); //@line 113 "nismodule.c"
        var $6=HEAP[$indata_addr]; //@line 114 "nismodule.c"
        var $7=(($6+4)&4294967295); //@line 114 "nismodule.c"
        var $8=HEAP[$7]; //@line 114 "nismodule.c"
        var $9=((($8))|0)!=0; //@line 114 "nismodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 114 "nismodule.c"
      case 2: // $bb1
        var $10=HEAP[$inkeylen_addr]; //@line 115 "nismodule.c"
        var $11=((($10))|0) > 0; //@line 115 "nismodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 115 "nismodule.c"
      case 3: // $bb2
        var $12=HEAP[$inkeylen_addr]; //@line 115 "nismodule.c"
        var $13=((($12) - 1)&4294967295); //@line 115 "nismodule.c"
        var $14=HEAP[$inkey_addr]; //@line 115 "nismodule.c"
        var $15=(($14+$13)&4294967295); //@line 115 "nismodule.c"
        var $16=HEAP[$15]; //@line 115 "nismodule.c"
        var $17=reSign(($16), 8, 0)==0; //@line 115 "nismodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 115 "nismodule.c"
      case 4: // $bb3
        var $18=HEAP[$inkeylen_addr]; //@line 116 "nismodule.c"
        var $19=((($18) - 1)&4294967295); //@line 116 "nismodule.c"
        HEAP[$inkeylen_addr]=$19; //@line 116 "nismodule.c"
        __label__ = 5; break; //@line 116 "nismodule.c"
      case 5: // $bb4
        var $20=HEAP[$invallen_addr]; //@line 117 "nismodule.c"
        var $21=((($20))|0) > 0; //@line 117 "nismodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 117 "nismodule.c"
      case 6: // $bb5
        var $22=HEAP[$invallen_addr]; //@line 117 "nismodule.c"
        var $23=((($22) - 1)&4294967295); //@line 117 "nismodule.c"
        var $24=HEAP[$inval_addr]; //@line 117 "nismodule.c"
        var $25=(($24+$23)&4294967295); //@line 117 "nismodule.c"
        var $26=HEAP[$25]; //@line 117 "nismodule.c"
        var $27=reSign(($26), 8, 0)==0; //@line 117 "nismodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 117 "nismodule.c"
      case 7: // $bb6
        var $28=HEAP[$invallen_addr]; //@line 118 "nismodule.c"
        var $29=((($28) - 1)&4294967295); //@line 118 "nismodule.c"
        HEAP[$invallen_addr]=$29; //@line 118 "nismodule.c"
        __label__ = 8; break; //@line 118 "nismodule.c"
      case 8: // $bb7
        var $30=HEAP[$inkey_addr]; //@line 120 "nismodule.c"
        var $31=HEAP[$inkeylen_addr]; //@line 120 "nismodule.c"
        var $32=_PyString_FromStringAndSize($30, $31); //@line 120 "nismodule.c"
        HEAP[$key]=$32; //@line 120 "nismodule.c"
        var $33=HEAP[$inval_addr]; //@line 121 "nismodule.c"
        var $34=HEAP[$invallen_addr]; //@line 121 "nismodule.c"
        var $35=_PyString_FromStringAndSize($33, $34); //@line 121 "nismodule.c"
        HEAP[$val]=$35; //@line 121 "nismodule.c"
        var $36=HEAP[$key]; //@line 122 "nismodule.c"
        var $37=($36)==0; //@line 122 "nismodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 122 "nismodule.c"
      case 9: // $bb8
        var $38=HEAP[$val]; //@line 122 "nismodule.c"
        var $39=($38)==0; //@line 122 "nismodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 122 "nismodule.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 124 "nismodule.c"
        var $40=HEAP[$key]; //@line 125 "nismodule.c"
        var $41=($40)!=0; //@line 125 "nismodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 125 "nismodule.c"
      case 11: // $bb10
        var $42=HEAP[$key]; //@line 125 "nismodule.c"
        var $43=(($42)&4294967295); //@line 125 "nismodule.c"
        var $44=HEAP[$43]; //@line 125 "nismodule.c"
        var $45=((($44) - 1)&4294967295); //@line 125 "nismodule.c"
        var $46=HEAP[$key]; //@line 125 "nismodule.c"
        var $47=(($46)&4294967295); //@line 125 "nismodule.c"
        HEAP[$47]=$45; //@line 125 "nismodule.c"
        var $48=HEAP[$key]; //@line 125 "nismodule.c"
        var $49=(($48)&4294967295); //@line 125 "nismodule.c"
        var $50=HEAP[$49]; //@line 125 "nismodule.c"
        var $51=((($50))|0)==0; //@line 125 "nismodule.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 125 "nismodule.c"
      case 12: // $bb11
        var $52=HEAP[$key]; //@line 125 "nismodule.c"
        var $53=(($52+4)&4294967295); //@line 125 "nismodule.c"
        var $54=HEAP[$53]; //@line 125 "nismodule.c"
        var $55=(($54+24)&4294967295); //@line 125 "nismodule.c"
        var $56=HEAP[$55]; //@line 125 "nismodule.c"
        var $57=HEAP[$key]; //@line 125 "nismodule.c"
        FUNCTION_TABLE[$56]($57); //@line 125 "nismodule.c"
        __label__ = 13; break; //@line 125 "nismodule.c"
      case 13: // $bb12
        var $58=HEAP[$val]; //@line 126 "nismodule.c"
        var $59=($58)!=0; //@line 126 "nismodule.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 126 "nismodule.c"
      case 14: // $bb13
        var $60=HEAP[$val]; //@line 126 "nismodule.c"
        var $61=(($60)&4294967295); //@line 126 "nismodule.c"
        var $62=HEAP[$61]; //@line 126 "nismodule.c"
        var $63=((($62) - 1)&4294967295); //@line 126 "nismodule.c"
        var $64=HEAP[$val]; //@line 126 "nismodule.c"
        var $65=(($64)&4294967295); //@line 126 "nismodule.c"
        HEAP[$65]=$63; //@line 126 "nismodule.c"
        var $66=HEAP[$val]; //@line 126 "nismodule.c"
        var $67=(($66)&4294967295); //@line 126 "nismodule.c"
        var $68=HEAP[$67]; //@line 126 "nismodule.c"
        var $69=((($68))|0)==0; //@line 126 "nismodule.c"
        if ($69) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 126 "nismodule.c"
      case 15: // $bb14
        var $70=HEAP[$val]; //@line 126 "nismodule.c"
        var $71=(($70+4)&4294967295); //@line 126 "nismodule.c"
        var $72=HEAP[$71]; //@line 126 "nismodule.c"
        var $73=(($72+24)&4294967295); //@line 126 "nismodule.c"
        var $74=HEAP[$73]; //@line 126 "nismodule.c"
        var $75=HEAP[$val]; //@line 126 "nismodule.c"
        FUNCTION_TABLE[$74]($75); //@line 126 "nismodule.c"
        __label__ = 16; break; //@line 126 "nismodule.c"
      case 16: // $bb15
        var $76=_PyEval_SaveThread(); //@line 127 "nismodule.c"
        var $77=HEAP[$indata_addr]; //@line 127 "nismodule.c"
        var $78=(($77+8)&4294967295); //@line 127 "nismodule.c"
        HEAP[$78]=$76; //@line 127 "nismodule.c"
        HEAP[$0]=1; //@line 128 "nismodule.c"
        __label__ = 27; break; //@line 128 "nismodule.c"
      case 17: // $bb16
        var $79=HEAP[$indata_addr]; //@line 130 "nismodule.c"
        var $80=(($79)&4294967295); //@line 130 "nismodule.c"
        var $81=HEAP[$80]; //@line 130 "nismodule.c"
        var $82=HEAP[$key]; //@line 130 "nismodule.c"
        var $83=HEAP[$val]; //@line 130 "nismodule.c"
        var $84=_PyDict_SetItem($81, $82, $83); //@line 130 "nismodule.c"
        HEAP[$err]=$84; //@line 130 "nismodule.c"
        var $85=HEAP[$key]; //@line 131 "nismodule.c"
        var $86=(($85)&4294967295); //@line 131 "nismodule.c"
        var $87=HEAP[$86]; //@line 131 "nismodule.c"
        var $88=((($87) - 1)&4294967295); //@line 131 "nismodule.c"
        var $89=HEAP[$key]; //@line 131 "nismodule.c"
        var $90=(($89)&4294967295); //@line 131 "nismodule.c"
        HEAP[$90]=$88; //@line 131 "nismodule.c"
        var $91=HEAP[$key]; //@line 131 "nismodule.c"
        var $92=(($91)&4294967295); //@line 131 "nismodule.c"
        var $93=HEAP[$92]; //@line 131 "nismodule.c"
        var $94=((($93))|0)==0; //@line 131 "nismodule.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 131 "nismodule.c"
      case 18: // $bb17
        var $95=HEAP[$key]; //@line 131 "nismodule.c"
        var $96=(($95+4)&4294967295); //@line 131 "nismodule.c"
        var $97=HEAP[$96]; //@line 131 "nismodule.c"
        var $98=(($97+24)&4294967295); //@line 131 "nismodule.c"
        var $99=HEAP[$98]; //@line 131 "nismodule.c"
        var $100=HEAP[$key]; //@line 131 "nismodule.c"
        FUNCTION_TABLE[$99]($100); //@line 131 "nismodule.c"
        __label__ = 19; break; //@line 131 "nismodule.c"
      case 19: // $bb18
        var $101=HEAP[$val]; //@line 132 "nismodule.c"
        var $102=(($101)&4294967295); //@line 132 "nismodule.c"
        var $103=HEAP[$102]; //@line 132 "nismodule.c"
        var $104=((($103) - 1)&4294967295); //@line 132 "nismodule.c"
        var $105=HEAP[$val]; //@line 132 "nismodule.c"
        var $106=(($105)&4294967295); //@line 132 "nismodule.c"
        HEAP[$106]=$104; //@line 132 "nismodule.c"
        var $107=HEAP[$val]; //@line 132 "nismodule.c"
        var $108=(($107)&4294967295); //@line 132 "nismodule.c"
        var $109=HEAP[$108]; //@line 132 "nismodule.c"
        var $110=((($109))|0)==0; //@line 132 "nismodule.c"
        if ($110) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 132 "nismodule.c"
      case 20: // $bb19
        var $111=HEAP[$val]; //@line 132 "nismodule.c"
        var $112=(($111+4)&4294967295); //@line 132 "nismodule.c"
        var $113=HEAP[$112]; //@line 132 "nismodule.c"
        var $114=(($113+24)&4294967295); //@line 132 "nismodule.c"
        var $115=HEAP[$114]; //@line 132 "nismodule.c"
        var $116=HEAP[$val]; //@line 132 "nismodule.c"
        FUNCTION_TABLE[$115]($116); //@line 132 "nismodule.c"
        __label__ = 21; break; //@line 132 "nismodule.c"
      case 21: // $bb20
        var $117=HEAP[$err]; //@line 133 "nismodule.c"
        var $118=((($117))|0)!=0; //@line 133 "nismodule.c"
        if ($118) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 133 "nismodule.c"
      case 22: // $bb21
        _PyErr_Clear(); //@line 134 "nismodule.c"
        __label__ = 23; break; //@line 134 "nismodule.c"
      case 23: // $bb22
        var $119=_PyEval_SaveThread(); //@line 135 "nismodule.c"
        var $120=HEAP[$indata_addr]; //@line 135 "nismodule.c"
        var $121=(($120+8)&4294967295); //@line 135 "nismodule.c"
        HEAP[$121]=$119; //@line 135 "nismodule.c"
        var $122=HEAP[$err]; //@line 136 "nismodule.c"
        var $123=((($122))|0)!=0; //@line 136 "nismodule.c"
        if ($123) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 136 "nismodule.c"
      case 24: // $bb23
        HEAP[$0]=1; //@line 137 "nismodule.c"
        __label__ = 27; break; //@line 137 "nismodule.c"
      case 25: // $bb24
        HEAP[$0]=0; //@line 138 "nismodule.c"
        __label__ = 27; break; //@line 138 "nismodule.c"
      case 26: // $bb25
        HEAP[$0]=1; //@line 140 "nismodule.c"
        __label__ = 27; break; //@line 140 "nismodule.c"
      case 27: // $bb26
        var $124=HEAP[$0]; //@line 128 "nismodule.c"
        HEAP[$retval]=$124; //@line 128 "nismodule.c"
        __label__ = 28; break; //@line 128 "nismodule.c"
      case 28: // $return
        var $retval27=HEAP[$retval]; //@line 128 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 128 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_get_default_domain($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $domain=__stackBase__+12;
        var $err=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_yp_get_default_domain($domain); //@line 150 "nismodule.c"
        HEAP[$err]=$1; //@line 150 "nismodule.c"
        var $2=HEAP[$err]; //@line 150 "nismodule.c"
        var $3=((($2))|0)!=0; //@line 150 "nismodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 150 "nismodule.c"
      case 1: // $bb
        var $4=HEAP[$err]; //@line 151 "nismodule.c"
        var $5=_nis_error($4); //@line 151 "nismodule.c"
        HEAP[$0]=$5; //@line 151 "nismodule.c"
        __label__ = 3; break; //@line 151 "nismodule.c"
      case 2: // $bb1
        var $6=HEAP[$domain]; //@line 153 "nismodule.c"
        var $7=_strlen($6); //@line 153 "nismodule.c"
        var $8=HEAP[$domain]; //@line 153 "nismodule.c"
        var $9=_PyString_FromStringAndSize($8, $7); //@line 153 "nismodule.c"
        HEAP[$res]=$9; //@line 153 "nismodule.c"
        var $10=HEAP[$res]; //@line 154 "nismodule.c"
        HEAP[$0]=$10; //@line 154 "nismodule.c"
        __label__ = 3; break; //@line 154 "nismodule.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 151 "nismodule.c"
        HEAP[$retval]=$11; //@line 151 "nismodule.c"
        __label__ = 4; break; //@line 151 "nismodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 151 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 151 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_match($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwdict_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $match=__stackBase__+20;
        var $domain=__stackBase__+24;
        var $keylen=__stackBase__+28;
        var $len=__stackBase__+32;
        var $key=__stackBase__+36;
        var $map=__stackBase__+40;
        var $err=__stackBase__+44;
        var $res=__stackBase__+48;
        var $fix=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwdict_addr]=$kwdict;
        HEAP[$domain]=0; //@line 161 "nismodule.c"
        var $1=HEAP[$args_addr]; //@line 169 "nismodule.c"
        var $2=HEAP[$kwdict_addr]; //@line 169 "nismodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str16)&4294967295), ((_kwlist_9940)&4294967295), $key, $keylen, $map, $domain); //@line 169 "nismodule.c"
        var $4=((($3))|0)==0; //@line 169 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 169 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 172 "nismodule.c"
        __label__ = 12; break; //@line 172 "nismodule.c"
      case 2: // $bb1
        var $5=HEAP[$domain]; //@line 173 "nismodule.c"
        var $6=($5)==0; //@line 173 "nismodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 173 "nismodule.c"
      case 3: // $bb2
        var $7=_yp_get_default_domain($domain); //@line 173 "nismodule.c"
        HEAP[$err]=$7; //@line 173 "nismodule.c"
        var $8=HEAP[$err]; //@line 173 "nismodule.c"
        var $9=((($8))|0)!=0; //@line 173 "nismodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 173 "nismodule.c"
      case 4: // $bb3
        var $10=HEAP[$err]; //@line 174 "nismodule.c"
        var $11=_nis_error($10); //@line 174 "nismodule.c"
        HEAP[$0]=$11; //@line 174 "nismodule.c"
        __label__ = 12; break; //@line 174 "nismodule.c"
      case 5: // $bb4
        var $12=HEAP[$map]; //@line 175 "nismodule.c"
        var $13=_nis_mapname($12, $fix); //@line 175 "nismodule.c"
        HEAP[$map]=$13; //@line 175 "nismodule.c"
        var $14=HEAP[$fix]; //@line 176 "nismodule.c"
        var $15=((($14))|0)!=0; //@line 176 "nismodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 176 "nismodule.c"
      case 6: // $bb5
        var $16=HEAP[$keylen]; //@line 177 "nismodule.c"
        var $17=((($16) + 1)&4294967295); //@line 177 "nismodule.c"
        HEAP[$keylen]=$17; //@line 177 "nismodule.c"
        __label__ = 7; break; //@line 177 "nismodule.c"
      case 7: // $bb6
        var $18=HEAP[$keylen]; //@line 179 "nismodule.c"
        var $19=HEAP[$key]; //@line 179 "nismodule.c"
        var $20=HEAP[$map]; //@line 179 "nismodule.c"
        var $21=HEAP[$domain]; //@line 179 "nismodule.c"
        var $22=_yp_match($21, $20, $19, $18, $match, $len); //@line 179 "nismodule.c"
        HEAP[$err]=$22; //@line 179 "nismodule.c"
        var $23=HEAP[$fix]; //@line 181 "nismodule.c"
        var $24=((($23))|0)!=0; //@line 181 "nismodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 181 "nismodule.c"
      case 8: // $bb7
        var $25=HEAP[$len]; //@line 182 "nismodule.c"
        var $26=((($25) - 1)&4294967295); //@line 182 "nismodule.c"
        HEAP[$len]=$26; //@line 182 "nismodule.c"
        __label__ = 9; break; //@line 182 "nismodule.c"
      case 9: // $bb8
        var $27=HEAP[$err]; //@line 183 "nismodule.c"
        var $28=((($27))|0)!=0; //@line 183 "nismodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 183 "nismodule.c"
      case 10: // $bb9
        var $29=HEAP[$err]; //@line 184 "nismodule.c"
        var $30=_nis_error($29); //@line 184 "nismodule.c"
        HEAP[$0]=$30; //@line 184 "nismodule.c"
        __label__ = 12; break; //@line 184 "nismodule.c"
      case 11: // $bb10
        var $31=HEAP[$len]; //@line 185 "nismodule.c"
        var $32=HEAP[$match]; //@line 185 "nismodule.c"
        var $33=_PyString_FromStringAndSize($32, $31); //@line 185 "nismodule.c"
        HEAP[$res]=$33; //@line 185 "nismodule.c"
        var $34=HEAP[$match]; //@line 186 "nismodule.c"
        _free($34); //@line 186 "nismodule.c"
        var $35=HEAP[$res]; //@line 187 "nismodule.c"
        HEAP[$0]=$35; //@line 187 "nismodule.c"
        __label__ = 12; break; //@line 187 "nismodule.c"
      case 12: // $bb11
        var $36=HEAP[$0]; //@line 172 "nismodule.c"
        HEAP[$retval]=$36; //@line 172 "nismodule.c"
        __label__ = 13; break; //@line 172 "nismodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 172 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 172 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_cat($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwdict_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $domain=__stackBase__+20;
        var $map=__stackBase__+24;
        var $cb=__stackBase__+28;
        var $data=__stackBase__+36;
        var $dict=__stackBase__+48;
        var $err=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwdict_addr]=$kwdict;
        HEAP[$domain]=0; //@line 193 "nismodule.c"
        var $1=HEAP[$args_addr]; //@line 201 "nismodule.c"
        var $2=HEAP[$kwdict_addr]; //@line 201 "nismodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str20)&4294967295), ((_kwlist_9988)&4294967295), $map, $domain); //@line 201 "nismodule.c"
        var $4=((($3))|0)==0; //@line 201 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 201 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 203 "nismodule.c"
        __label__ = 12; break; //@line 203 "nismodule.c"
      case 2: // $bb1
        var $5=HEAP[$domain]; //@line 204 "nismodule.c"
        var $6=($5)==0; //@line 204 "nismodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 204 "nismodule.c"
      case 3: // $bb2
        var $7=_yp_get_default_domain($domain); //@line 204 "nismodule.c"
        HEAP[$err]=$7; //@line 204 "nismodule.c"
        var $8=HEAP[$err]; //@line 204 "nismodule.c"
        var $9=((($8))|0)!=0; //@line 204 "nismodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 204 "nismodule.c"
      case 4: // $bb3
        var $10=HEAP[$err]; //@line 205 "nismodule.c"
        var $11=_nis_error($10); //@line 205 "nismodule.c"
        HEAP[$0]=$11; //@line 205 "nismodule.c"
        __label__ = 12; break; //@line 205 "nismodule.c"
      case 5: // $bb4
        var $12=_PyDict_New(); //@line 206 "nismodule.c"
        HEAP[$dict]=$12; //@line 206 "nismodule.c"
        var $13=HEAP[$dict]; //@line 207 "nismodule.c"
        var $14=($13)==0; //@line 207 "nismodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 207 "nismodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 208 "nismodule.c"
        __label__ = 12; break; //@line 208 "nismodule.c"
      case 7: // $bb6
        var $15=(($cb)&4294967295); //@line 209 "nismodule.c"
        HEAP[$15]=(FUNCTION_TABLE_OFFSET + 2); //@line 209 "nismodule.c"
        var $16=(($data)&4294967295); //@line 210 "nismodule.c"
        var $17=HEAP[$dict]; //@line 210 "nismodule.c"
        HEAP[$16]=$17; //@line 210 "nismodule.c"
        var $18=HEAP[$map]; //@line 211 "nismodule.c"
        var $19=(($data+4)&4294967295); //@line 211 "nismodule.c"
        var $20=_nis_mapname($18, $19); //@line 211 "nismodule.c"
        HEAP[$map]=$20; //@line 211 "nismodule.c"
        var $data7=$data; //@line 212 "nismodule.c"
        var $21=(($cb+4)&4294967295); //@line 212 "nismodule.c"
        HEAP[$21]=$data7; //@line 212 "nismodule.c"
        var $22=_PyEval_SaveThread(); //@line 213 "nismodule.c"
        var $23=(($data+8)&4294967295); //@line 213 "nismodule.c"
        HEAP[$23]=$22; //@line 213 "nismodule.c"
        var $24=HEAP[$map]; //@line 214 "nismodule.c"
        var $25=HEAP[$domain]; //@line 214 "nismodule.c"
        var $26=_yp_all($25, $24, $cb); //@line 214 "nismodule.c"
        HEAP[$err]=$26; //@line 214 "nismodule.c"
        var $27=(($data+8)&4294967295); //@line 215 "nismodule.c"
        var $28=HEAP[$27]; //@line 215 "nismodule.c"
        _PyEval_RestoreThread($28); //@line 215 "nismodule.c"
        var $29=HEAP[$err]; //@line 216 "nismodule.c"
        var $30=((($29))|0)!=0; //@line 216 "nismodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 216 "nismodule.c"
      case 8: // $bb9
        var $31=HEAP[$dict]; //@line 217 "nismodule.c"
        var $32=(($31)&4294967295); //@line 217 "nismodule.c"
        var $33=HEAP[$32]; //@line 217 "nismodule.c"
        var $34=((($33) - 1)&4294967295); //@line 217 "nismodule.c"
        var $35=HEAP[$dict]; //@line 217 "nismodule.c"
        var $36=(($35)&4294967295); //@line 217 "nismodule.c"
        HEAP[$36]=$34; //@line 217 "nismodule.c"
        var $37=HEAP[$dict]; //@line 217 "nismodule.c"
        var $38=(($37)&4294967295); //@line 217 "nismodule.c"
        var $39=HEAP[$38]; //@line 217 "nismodule.c"
        var $40=((($39))|0)==0; //@line 217 "nismodule.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 217 "nismodule.c"
      case 9: // $bb10
        var $41=HEAP[$dict]; //@line 217 "nismodule.c"
        var $42=(($41+4)&4294967295); //@line 217 "nismodule.c"
        var $43=HEAP[$42]; //@line 217 "nismodule.c"
        var $44=(($43+24)&4294967295); //@line 217 "nismodule.c"
        var $45=HEAP[$44]; //@line 217 "nismodule.c"
        var $46=HEAP[$dict]; //@line 217 "nismodule.c"
        FUNCTION_TABLE[$45]($46); //@line 217 "nismodule.c"
        __label__ = 10; break; //@line 217 "nismodule.c"
      case 10: // $bb11
        var $47=HEAP[$err]; //@line 218 "nismodule.c"
        var $48=_nis_error($47); //@line 218 "nismodule.c"
        HEAP[$0]=$48; //@line 218 "nismodule.c"
        __label__ = 12; break; //@line 218 "nismodule.c"
      case 11: // $bb12
        var $49=HEAP[$dict]; //@line 220 "nismodule.c"
        HEAP[$0]=$49; //@line 220 "nismodule.c"
        __label__ = 12; break; //@line 220 "nismodule.c"
      case 12: // $bb13
        var $50=HEAP[$0]; //@line 203 "nismodule.c"
        HEAP[$retval]=$50; //@line 203 "nismodule.c"
        __label__ = 13; break; //@line 203 "nismodule.c"
      case 13: // $return
        var $retval14=HEAP[$retval]; //@line 203 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 203 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_domainname($xdrs, $objp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr=__stackBase__;
        var $objp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xdrs_addr]=$xdrs;
        HEAP[$objp_addr]=$objp;
        var $1=HEAP[$xdrs_addr]; //@line 271 "nismodule.c"
        var $2=HEAP[$objp_addr]; //@line 271 "nismodule.c"
        var $3=_xdr_string($1, $2, 64); //@line 271 "nismodule.c"
        var $4=((($3))|0)==0; //@line 271 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 271 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 272 "nismodule.c"
        __label__ = 3; break; //@line 272 "nismodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 274 "nismodule.c"
        __label__ = 3; break; //@line 274 "nismodule.c"
      case 3: // $bb2
        var $5=HEAP[$0]; //@line 272 "nismodule.c"
        HEAP[$retval]=$5; //@line 272 "nismodule.c"
        __label__ = 4; break; //@line 272 "nismodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 272 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 272 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_mapname($xdrs, $objp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr=__stackBase__;
        var $objp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xdrs_addr]=$xdrs;
        HEAP[$objp_addr]=$objp;
        var $1=HEAP[$xdrs_addr]; //@line 281 "nismodule.c"
        var $2=HEAP[$objp_addr]; //@line 281 "nismodule.c"
        var $3=_xdr_string($1, $2, 64); //@line 281 "nismodule.c"
        var $4=((($3))|0)==0; //@line 281 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 281 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 282 "nismodule.c"
        __label__ = 3; break; //@line 282 "nismodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 284 "nismodule.c"
        __label__ = 3; break; //@line 284 "nismodule.c"
      case 3: // $bb2
        var $5=HEAP[$0]; //@line 282 "nismodule.c"
        HEAP[$retval]=$5; //@line 282 "nismodule.c"
        __label__ = 4; break; //@line 282 "nismodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 282 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 282 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_ypmaplist($xdrs, $objp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr=__stackBase__;
        var $objp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xdrs_addr]=$xdrs;
        HEAP[$objp_addr]=$objp;
        var $1=HEAP[$objp_addr]; //@line 291 "nismodule.c"
        var $2=(($1)&4294967295); //@line 291 "nismodule.c"
        var $3=HEAP[$xdrs_addr]; //@line 291 "nismodule.c"
        var $4=_nis_xdr_mapname($3, $2); //@line 291 "nismodule.c"
        var $5=((($4))|0)==0; //@line 291 "nismodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 291 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 292 "nismodule.c"
        __label__ = 5; break; //@line 292 "nismodule.c"
      case 2: // $bb1
        var $6=HEAP[$objp_addr]; //@line 294 "nismodule.c"
        var $7=(($6+4)&4294967295); //@line 294 "nismodule.c"
        var $8=$7; //@line 294 "nismodule.c"
        var $9=HEAP[$xdrs_addr]; //@line 294 "nismodule.c"
        var $10=_xdr_pointer($9, $8, 8, (FUNCTION_TABLE_OFFSET + 4)); //@line 294 "nismodule.c"
        var $11=((($10))|0)==0; //@line 294 "nismodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 294 "nismodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 297 "nismodule.c"
        __label__ = 5; break; //@line 297 "nismodule.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 299 "nismodule.c"
        __label__ = 5; break; //@line 299 "nismodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 292 "nismodule.c"
        HEAP[$retval]=$12; //@line 292 "nismodule.c"
        __label__ = 6; break; //@line 292 "nismodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 292 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 292 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_ypstat($xdrs, $objp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr=__stackBase__;
        var $objp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xdrs_addr]=$xdrs;
        HEAP[$objp_addr]=$objp;
        var $1=HEAP[$xdrs_addr]; //@line 306 "nismodule.c"
        var $2=HEAP[$objp_addr]; //@line 306 "nismodule.c"
        var $3=_xdr_enum($1, $2); //@line 306 "nismodule.c"
        var $4=((($3))|0)==0; //@line 306 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 306 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 307 "nismodule.c"
        __label__ = 3; break; //@line 307 "nismodule.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 309 "nismodule.c"
        __label__ = 3; break; //@line 309 "nismodule.c"
      case 3: // $bb2
        var $5=HEAP[$0]; //@line 307 "nismodule.c"
        HEAP[$retval]=$5; //@line 307 "nismodule.c"
        __label__ = 4; break; //@line 307 "nismodule.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 307 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 307 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_xdr_ypresp_maplist($xdrs, $objp) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $xdrs_addr=__stackBase__;
        var $objp_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$xdrs_addr]=$xdrs;
        HEAP[$objp_addr]=$objp;
        var $1=HEAP[$objp_addr]; //@line 317 "nismodule.c"
        var $2=(($1)&4294967295); //@line 317 "nismodule.c"
        var $3=HEAP[$xdrs_addr]; //@line 317 "nismodule.c"
        var $4=_nis_xdr_ypstat($3, $2); //@line 317 "nismodule.c"
        var $5=((($4))|0)==0; //@line 317 "nismodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 317 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 318 "nismodule.c"
        __label__ = 5; break; //@line 318 "nismodule.c"
      case 2: // $bb1
        var $6=HEAP[$objp_addr]; //@line 320 "nismodule.c"
        var $7=(($6+4)&4294967295); //@line 320 "nismodule.c"
        var $8=$7; //@line 320 "nismodule.c"
        var $9=HEAP[$xdrs_addr]; //@line 320 "nismodule.c"
        var $10=_xdr_pointer($9, $8, 8, (FUNCTION_TABLE_OFFSET + 4)); //@line 320 "nismodule.c"
        var $11=((($10))|0)==0; //@line 320 "nismodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 320 "nismodule.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 323 "nismodule.c"
        __label__ = 5; break; //@line 323 "nismodule.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 325 "nismodule.c"
        __label__ = 5; break; //@line 325 "nismodule.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 318 "nismodule.c"
        HEAP[$retval]=$12; //@line 318 "nismodule.c"
        __label__ = 6; break; //@line 318 "nismodule.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 318 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 318 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nisproc_maplist_2($argp, $clnt) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $argp_addr=__stackBase__;
        var $clnt_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$argp_addr]=$argp;
        HEAP[$clnt_addr]=$clnt;
        _llvm_memset_p0i8_i32(_res_10110, 0, 8, 1, 0); //@line 335 "nismodule.c"
        var $1=HEAP[$clnt_addr]; //@line 336 "nismodule.c"
        var $2=(($1+4)&4294967295); //@line 336 "nismodule.c"
        var $3=HEAP[$2]; //@line 336 "nismodule.c"
        var $4=(($3)&4294967295); //@line 336 "nismodule.c"
        var $5=HEAP[$4]; //@line 336 "nismodule.c"
        var $6=HEAP[$argp_addr]; //@line 336 "nismodule.c"
        var $7=$6; //@line 336 "nismodule.c"
        var $8=HEAP[$clnt_addr]; //@line 336 "nismodule.c"
        var $val=HEAP[((_TIMEOUT)&4294967295)]; //@line 336 "nismodule.c"
        var $val1=HEAP[((_TIMEOUT+4)&4294967295)]; //@line 336 "nismodule.c"
        var $9=FUNCTION_TABLE[$5]($8, 11, (FUNCTION_TABLE_OFFSET + 6), $7, (FUNCTION_TABLE_OFFSET + 8), _res_10110, $val, $val1); //@line 336 "nismodule.c"
        var $10=((($9))|0)!=0; //@line 336 "nismodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 336 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 341 "nismodule.c"
        __label__ = 3; break; //@line 341 "nismodule.c"
      case 2: // $bb2
        HEAP[$0]=_res_10110; //@line 343 "nismodule.c"
        __label__ = 3; break; //@line 343 "nismodule.c"
      case 3: // $bb3
        var $11=HEAP[$0]; //@line 341 "nismodule.c"
        HEAP[$retval]=$11; //@line 341 "nismodule.c"
        __label__ = 4; break; //@line 341 "nismodule.c"
      case 4: // $return
        var $retval4=HEAP[$retval]; //@line 341 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval4; //@line 341 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_maplist($dom) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dom_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $list=__stackBase__+12;
        var $cl=__stackBase__+16;
        var $server=__stackBase__+20;
        var $mapi=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$dom_addr]=$dom;
        HEAP[$server]=0; //@line 352 "nismodule.c"
        HEAP[$mapi]=0; //@line 353 "nismodule.c"
        __label__ = 2; break; //@line 353 "nismodule.c"
      case 1: // $bb
        var $1=HEAP[$mapi]; //@line 356 "nismodule.c"
        var $2=((_aliases+$1*12)&4294967295); //@line 356 "nismodule.c"
        var $3=(($2+4)&4294967295); //@line 356 "nismodule.c"
        var $4=HEAP[$3]; //@line 356 "nismodule.c"
        var $5=HEAP[$dom_addr]; //@line 356 "nismodule.c"
        var $6=_yp_master($5, $4, $server); //@line 356 "nismodule.c"
        var $7=HEAP[$mapi]; //@line 357 "nismodule.c"
        var $8=((($7) + 1)&4294967295); //@line 357 "nismodule.c"
        HEAP[$mapi]=$8; //@line 357 "nismodule.c"
        __label__ = 2; break; //@line 357 "nismodule.c"
      case 2: // $bb1
        var $9=HEAP[$server]; //@line 355 "nismodule.c"
        var $10=($9)!=0; //@line 355 "nismodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 355 "nismodule.c"
      case 3: // $bb2
        var $11=HEAP[$mapi]; //@line 355 "nismodule.c"
        var $12=((_aliases+$11*12)&4294967295); //@line 355 "nismodule.c"
        var $13=(($12+4)&4294967295); //@line 355 "nismodule.c"
        var $14=HEAP[$13]; //@line 355 "nismodule.c"
        var $15=($14)!=0; //@line 355 "nismodule.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 355 "nismodule.c"
      case 4: // $bb3
        var $16=HEAP[$server]; //@line 359 "nismodule.c"
        var $17=($16)==0; //@line 359 "nismodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 359 "nismodule.c"
      case 5: // $bb4
        var $18=HEAP[_NisError]; //@line 360 "nismodule.c"
        _PyErr_SetString($18, ((__str21)&4294967295)); //@line 360 "nismodule.c"
        HEAP[$0]=0; //@line 361 "nismodule.c"
        __label__ = 12; break; //@line 361 "nismodule.c"
      case 6: // $bb5
        var $19=HEAP[$server]; //@line 363 "nismodule.c"
        var $20=_clnt_create($19, 100004, 2, ((__str22)&4294967295)); //@line 363 "nismodule.c"
        HEAP[$cl]=$20; //@line 363 "nismodule.c"
        var $21=HEAP[$cl]; //@line 364 "nismodule.c"
        var $22=($21)==0; //@line 364 "nismodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 364 "nismodule.c"
      case 7: // $bb6
        var $23=HEAP[$server]; //@line 365 "nismodule.c"
        var $24=_clnt_spcreateerror($23); //@line 365 "nismodule.c"
        var $25=HEAP[_NisError]; //@line 365 "nismodule.c"
        _PyErr_SetString($25, $24); //@line 365 "nismodule.c"
        __label__ = 11; break; //@line 365 "nismodule.c"
      case 8: // $bb7
        var $26=HEAP[$cl]; //@line 368 "nismodule.c"
        var $27=_nisproc_maplist_2($dom_addr, $26); //@line 368 "nismodule.c"
        HEAP[$list]=$27; //@line 368 "nismodule.c"
        var $28=HEAP[$cl]; //@line 369 "nismodule.c"
        var $29=(($28+4)&4294967295); //@line 369 "nismodule.c"
        var $30=HEAP[$29]; //@line 369 "nismodule.c"
        var $31=(($30+16)&4294967295); //@line 369 "nismodule.c"
        var $32=HEAP[$31]; //@line 369 "nismodule.c"
        var $33=HEAP[$cl]; //@line 369 "nismodule.c"
        FUNCTION_TABLE[$32]($33); //@line 369 "nismodule.c"
        var $34=HEAP[$list]; //@line 370 "nismodule.c"
        var $35=($34)==0; //@line 370 "nismodule.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 370 "nismodule.c"
      case 9: // $bb8
        var $36=HEAP[$list]; //@line 372 "nismodule.c"
        var $37=(($36)&4294967295); //@line 372 "nismodule.c"
        var $38=HEAP[$37]; //@line 372 "nismodule.c"
        var $39=((($38))|0)!=1; //@line 372 "nismodule.c"
        if ($39) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 372 "nismodule.c"
      case 10: // $bb9
        var $40=HEAP[$server]; //@line 375 "nismodule.c"
        _free($40); //@line 375 "nismodule.c"
        var $41=HEAP[$list]; //@line 376 "nismodule.c"
        var $42=(($41+4)&4294967295); //@line 376 "nismodule.c"
        var $43=HEAP[$42]; //@line 376 "nismodule.c"
        HEAP[$0]=$43; //@line 376 "nismodule.c"
        __label__ = 12; break; //@line 376 "nismodule.c"
      case 11: // $finally
        var $44=HEAP[$server]; //@line 379 "nismodule.c"
        _free($44); //@line 379 "nismodule.c"
        HEAP[$0]=0; //@line 380 "nismodule.c"
        __label__ = 12; break; //@line 380 "nismodule.c"
      case 12: // $bb10
        var $45=HEAP[$0]; //@line 361 "nismodule.c"
        HEAP[$retval]=$45; //@line 361 "nismodule.c"
        __label__ = 13; break; //@line 361 "nismodule.c"
      case 13: // $return
        var $retval11=HEAP[$retval]; //@line 361 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 361 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _nis_maps($self, $args, $kwdict) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwdict_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $domain=__stackBase__+20;
        var $maps=__stackBase__+24;
        var $list=__stackBase__+28;
        var $err=__stackBase__+32;
        var $str=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwdict_addr]=$kwdict;
        HEAP[$domain]=0; //@line 386 "nismodule.c"
        var $1=HEAP[$args_addr]; //@line 392 "nismodule.c"
        var $2=HEAP[$kwdict_addr]; //@line 392 "nismodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str23)&4294967295), ((_kwlist_10170)&4294967295), $domain); //@line 392 "nismodule.c"
        var $4=((($3))|0)==0; //@line 392 "nismodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 392 "nismodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 394 "nismodule.c"
        __label__ = 20; break; //@line 394 "nismodule.c"
      case 2: // $bb1
        var $5=HEAP[$domain]; //@line 395 "nismodule.c"
        var $6=($5)==0; //@line 395 "nismodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 395 "nismodule.c"
      case 3: // $bb2
        var $7=_yp_get_default_domain($domain); //@line 395 "nismodule.c"
        HEAP[$err]=$7; //@line 395 "nismodule.c"
        var $8=HEAP[$err]; //@line 395 "nismodule.c"
        var $9=((($8))|0)!=0; //@line 395 "nismodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 395 "nismodule.c"
      case 4: // $bb3
        var $10=HEAP[$err]; //@line 396 "nismodule.c"
        var $11=_nis_error($10); //@line 396 "nismodule.c"
        HEAP[$0]=0; //@line 397 "nismodule.c"
        __label__ = 20; break; //@line 397 "nismodule.c"
      case 5: // $bb4
        var $12=HEAP[$domain]; //@line 400 "nismodule.c"
        var $13=_nis_maplist($12); //@line 400 "nismodule.c"
        HEAP[$maps]=$13; //@line 400 "nismodule.c"
        var $14=HEAP[$maps]; //@line 400 "nismodule.c"
        var $15=($14)==0; //@line 400 "nismodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 400 "nismodule.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 401 "nismodule.c"
        __label__ = 20; break; //@line 401 "nismodule.c"
      case 7: // $bb6
        var $16=_PyList_New(0); //@line 402 "nismodule.c"
        HEAP[$list]=$16; //@line 402 "nismodule.c"
        var $17=HEAP[$list]; //@line 402 "nismodule.c"
        var $18=($17)==0; //@line 402 "nismodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 402 "nismodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 403 "nismodule.c"
        __label__ = 20; break; //@line 403 "nismodule.c"
      case 9: // $bb8
        var $19=HEAP[$maps]; //@line 404 "nismodule.c"
        HEAP[$maps]=$19; //@line 404 "nismodule.c"
        __label__ = 18; break; //@line 404 "nismodule.c"
      case 10: // $bb9
        var $20=HEAP[$maps]; //@line 405 "nismodule.c"
        var $21=(($20)&4294967295); //@line 405 "nismodule.c"
        var $22=HEAP[$21]; //@line 405 "nismodule.c"
        var $23=_PyString_FromString($22); //@line 405 "nismodule.c"
        HEAP[$str]=$23; //@line 405 "nismodule.c"
        var $24=HEAP[$str]; //@line 406 "nismodule.c"
        var $25=($24)==0; //@line 406 "nismodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 406 "nismodule.c"
      case 11: // $bb10
        var $26=HEAP[$list]; //@line 406 "nismodule.c"
        var $27=HEAP[$str]; //@line 406 "nismodule.c"
        var $28=_PyList_Append($26, $27); //@line 406 "nismodule.c"
        var $29=((($28))|0) < 0; //@line 406 "nismodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 406 "nismodule.c"
      case 12: // $bb11
        var $30=HEAP[$list]; //@line 408 "nismodule.c"
        var $31=(($30)&4294967295); //@line 408 "nismodule.c"
        var $32=HEAP[$31]; //@line 408 "nismodule.c"
        var $33=((($32) - 1)&4294967295); //@line 408 "nismodule.c"
        var $34=HEAP[$list]; //@line 408 "nismodule.c"
        var $35=(($34)&4294967295); //@line 408 "nismodule.c"
        HEAP[$35]=$33; //@line 408 "nismodule.c"
        var $36=HEAP[$list]; //@line 408 "nismodule.c"
        var $37=(($36)&4294967295); //@line 408 "nismodule.c"
        var $38=HEAP[$37]; //@line 408 "nismodule.c"
        var $39=((($38))|0)==0; //@line 408 "nismodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 408 "nismodule.c"
      case 13: // $bb12
        var $40=HEAP[$list]; //@line 408 "nismodule.c"
        var $41=(($40+4)&4294967295); //@line 408 "nismodule.c"
        var $42=HEAP[$41]; //@line 408 "nismodule.c"
        var $43=(($42+24)&4294967295); //@line 408 "nismodule.c"
        var $44=HEAP[$43]; //@line 408 "nismodule.c"
        var $45=HEAP[$list]; //@line 408 "nismodule.c"
        FUNCTION_TABLE[$44]($45); //@line 408 "nismodule.c"
        __label__ = 14; break; //@line 408 "nismodule.c"
      case 14: // $bb13
        HEAP[$list]=0; //@line 409 "nismodule.c"
        __label__ = 19; break; //@line 409 "nismodule.c"
      case 15: // $bb14
        var $46=HEAP[$str]; //@line 412 "nismodule.c"
        var $47=(($46)&4294967295); //@line 412 "nismodule.c"
        var $48=HEAP[$47]; //@line 412 "nismodule.c"
        var $49=((($48) - 1)&4294967295); //@line 412 "nismodule.c"
        var $50=HEAP[$str]; //@line 412 "nismodule.c"
        var $51=(($50)&4294967295); //@line 412 "nismodule.c"
        HEAP[$51]=$49; //@line 412 "nismodule.c"
        var $52=HEAP[$str]; //@line 412 "nismodule.c"
        var $53=(($52)&4294967295); //@line 412 "nismodule.c"
        var $54=HEAP[$53]; //@line 412 "nismodule.c"
        var $55=((($54))|0)==0; //@line 412 "nismodule.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 412 "nismodule.c"
      case 16: // $bb15
        var $56=HEAP[$str]; //@line 412 "nismodule.c"
        var $57=(($56+4)&4294967295); //@line 412 "nismodule.c"
        var $58=HEAP[$57]; //@line 412 "nismodule.c"
        var $59=(($58+24)&4294967295); //@line 412 "nismodule.c"
        var $60=HEAP[$59]; //@line 412 "nismodule.c"
        var $61=HEAP[$str]; //@line 412 "nismodule.c"
        FUNCTION_TABLE[$60]($61); //@line 412 "nismodule.c"
        __label__ = 17; break; //@line 412 "nismodule.c"
      case 17: // $bb16
        var $62=HEAP[$maps]; //@line 404 "nismodule.c"
        var $63=(($62+4)&4294967295); //@line 404 "nismodule.c"
        var $64=HEAP[$63]; //@line 404 "nismodule.c"
        HEAP[$maps]=$64; //@line 404 "nismodule.c"
        __label__ = 18; break; //@line 404 "nismodule.c"
      case 18: // $bb17
        var $65=HEAP[$maps]; //@line 404 "nismodule.c"
        var $66=($65)!=0; //@line 404 "nismodule.c"
        if ($66) { __label__ = 10; break; } else { __label__ = 19; break; } //@line 404 "nismodule.c"
      case 19: // $bb18
        var $67=HEAP[$list]; //@line 415 "nismodule.c"
        HEAP[$0]=$67; //@line 415 "nismodule.c"
        __label__ = 20; break; //@line 415 "nismodule.c"
      case 20: // $bb19
        var $68=HEAP[$0]; //@line 394 "nismodule.c"
        HEAP[$retval]=$68; //@line 394 "nismodule.c"
        __label__ = 21; break; //@line 394 "nismodule.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 394 "nismodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 394 "nismodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initnis() {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str28)&4294967295), ((_nis_methods)&4294967295), ((_nis__doc__)&4294967295), 0, 1013); //@line 441 "nismodule.c"
        HEAP[$m]=$0; //@line 441 "nismodule.c"
        var $1=HEAP[$m]; //@line 442 "nismodule.c"
        var $2=($1)==0; //@line 442 "nismodule.c"
        if ($2) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 442 "nismodule.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 444 "nismodule.c"
        var $4=_PyModule_GetDict($3); //@line 444 "nismodule.c"
        HEAP[$d]=$4; //@line 444 "nismodule.c"
        var $5=_PyErr_NewException(((__str29)&4294967295), 0, 0); //@line 445 "nismodule.c"
        HEAP[_NisError]=$5; //@line 445 "nismodule.c"
        var $6=HEAP[_NisError]; //@line 446 "nismodule.c"
        var $7=($6)!=0; //@line 446 "nismodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 446 "nismodule.c"
      case 2: // $bb1
        var $8=HEAP[_NisError]; //@line 447 "nismodule.c"
        var $9=HEAP[$d]; //@line 447 "nismodule.c"
        var $10=_PyDict_SetItemString($9, ((__str30)&4294967295), $8); //@line 447 "nismodule.c"
        __label__ = 3; break; //@line 447 "nismodule.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 443 "nismodule.c"
      case 4: // $return
        STACKTOP = __stackBase__;
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
_TIMEOUT=allocate([25, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
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
HEAP[_aliases]=((__str)&4294967295);
HEAP[_aliases+4]=((__str1)&4294967295);
HEAP[_aliases+12]=((__str2)&4294967295);
HEAP[_aliases+16]=((__str3)&4294967295);
HEAP[_aliases+24]=((__str4)&4294967295);
HEAP[_aliases+28]=((__str5)&4294967295);
HEAP[_aliases+36]=((__str6)&4294967295);
HEAP[_aliases+40]=((__str7)&4294967295);
HEAP[_aliases+48]=((__str8)&4294967295);
HEAP[_aliases+52]=((__str9)&4294967295);
HEAP[_aliases+60]=((__str10)&4294967295);
HEAP[_aliases+64]=((__str11)&4294967295);
HEAP[_aliases+72]=((__str12)&4294967295);
HEAP[_aliases+76]=((__str13)&4294967295);
HEAP[_aliases+84]=((__str14)&4294967295);
HEAP[_aliases+88]=((__str15)&4294967295);
HEAP[_kwlist_9940]=((__str17)&4294967295);
HEAP[_kwlist_9940+4]=((__str18)&4294967295);
HEAP[_kwlist_9940+8]=((__str19)&4294967295);
HEAP[_kwlist_9988]=((__str18)&4294967295);
HEAP[_kwlist_9988+4]=((__str19)&4294967295);
HEAP[_kwlist_10170]=((__str19)&4294967295);
HEAP[_nis_methods]=((__str24)&4294967295);
HEAP[_nis_methods+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_nis_methods+12]=((_match__doc__)&4294967295);
HEAP[_nis_methods+16]=((__str25)&4294967295);
HEAP[_nis_methods+20]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_nis_methods+28]=((_cat__doc__)&4294967295);
HEAP[_nis_methods+32]=((__str26)&4294967295);
HEAP[_nis_methods+36]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_nis_methods+44]=((_maps__doc__)&4294967295);
HEAP[_nis_methods+48]=((__str27)&4294967295);
HEAP[_nis_methods+52]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_nis_methods+60]=((_get_default_domain__doc__)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

