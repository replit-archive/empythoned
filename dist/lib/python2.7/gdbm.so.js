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



var $0___SIZE = 128; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 196; // %2
  
var $3___SIZE = 32; // %3
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_anon___SIZE = 40; // %struct.anon
  
var $struct_datum___SIZE = 8; // %struct.datum
  
var $struct_dbmobject___SIZE = 16; // %struct.dbmobject
  
var _gdbmmodule__doc__;
var _gdbm_object__doc__;
var _DbmError;
var _gdbm_errno;
var __str;
var __str1;
var _PyExc_KeyError;
var _PyExc_TypeError;
var __str2;
var __str3;
var __str4;
var _dbm_as_sequence;
var _dbm_as_mapping;
var _dbm_close__doc__;
var __Py_NoneStruct;
var _dbm_keys__doc__;
var __str5;
var _dbm_has_key__doc__;
var __str6;
var _dbm_firstkey__doc__;
var _dbm_nextkey__doc__;
var __str7;
var _dbm_reorganize__doc__;
var _dbm_sync__doc__;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _dbm_methods;
var __str15;
var _Dbmtype;
var _dbmopen__doc__;
var __str16;
var __str17;
var __str18;
var __str19;
var _dbmmodule_open_flags;
var __str20;
var _dbmmodule_methods;
var _PyType_Type;
var __str21;
var __str22;
var __str23;
var __str24;





































  function _dbm_dealloc($dp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        $dp_addr=$dp;
        var $0=$dp_addr; //@line 84 "gdbmmodule.c"
        var $1=$0+12; //@line 84 "gdbmmodule.c"
        var $2=HEAP[$1]; //@line 84 "gdbmmodule.c"
        var $3=($2)!=0; //@line 84 "gdbmmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 84 "gdbmmodule.c"
      case 1: // $bb
        var $4=$dp_addr; //@line 85 "gdbmmodule.c"
        var $5=$4+12; //@line 85 "gdbmmodule.c"
        var $6=HEAP[$5]; //@line 85 "gdbmmodule.c"
        _gdbm_close($6); //@line 85 "gdbmmodule.c"
        __label__ = 2; break; //@line 85 "gdbmmodule.c"
      case 2: // $bb1
        var $7=$dp_addr; //@line 86 "gdbmmodule.c"
        var $8=$7; //@line 86 "gdbmmodule.c"
        _PyObject_Free($8); //@line 86 "gdbmmodule.c"
        ;
        return; //@line 87 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_length($dp) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $retval;
        var $0;
        var $key=__stackBase__;
        var $okey=__stackBase__+8;
        var $size;
        var $memtmp=__stackBase__+16;
        $dp_addr=$dp;
        var $1=$dp_addr; //@line 92 "gdbmmodule.c"
        var $2=$1+12; //@line 92 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 92 "gdbmmodule.c"
        var $4=($3)==0; //@line 92 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 92 "gdbmmodule.c"
      case 1: // $bb
        var $5=HEAP[_DbmError]; //@line 93 "gdbmmodule.c"
        _PyErr_SetString($5, __str); //@line 93 "gdbmmodule.c"
        $0=-1; //@line 94 "gdbmmodule.c"
        __label__ = 10; break; //@line 94 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 96 "gdbmmodule.c"
        var $7=$6+8; //@line 96 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 96 "gdbmmodule.c"
        var $9=($8) < 0; //@line 96 "gdbmmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 96 "gdbmmodule.c"
      case 3: // $bb2
        var $10=$okey+4; //@line 99 "gdbmmodule.c"
        HEAP[$10]=0; //@line 99 "gdbmmodule.c"
        var $11=$okey; //@line 100 "gdbmmodule.c"
        HEAP[$11]=0; //@line 100 "gdbmmodule.c"
        $size=0; //@line 102 "gdbmmodule.c"
        var $12=$dp_addr; //@line 103 "gdbmmodule.c"
        var $13=$12+12; //@line 103 "gdbmmodule.c"
        var $14=HEAP[$13]; //@line 103 "gdbmmodule.c"
        _gdbm_firstkey($key, $14); //@line 103 "gdbmmodule.c"
        var $15=$key; //@line 103 "gdbmmodule.c"
        var $16=HEAP[$15]; //@line 103 "gdbmmodule.c"
        var $17=($16)!=0; //@line 103 "gdbmmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 103 "gdbmmodule.c"
      case 4: // $bb3_lr_ph
        var $18=$okey+4; //@line 106 "gdbmmodule.c"
        var $19=$okey; //@line 106 "gdbmmodule.c"
        var $20=$okey; //@line 107 "gdbmmodule.c"
        var $21=$key; //@line 107 "gdbmmodule.c"
        var $22=$okey+4; //@line 107 "gdbmmodule.c"
        var $23=$key+4; //@line 107 "gdbmmodule.c"
        var $elt=$okey; //@line 104 "gdbmmodule.c"
        var $elt6=$okey+4; //@line 104 "gdbmmodule.c"
        var $24=$key; //@line 104 "gdbmmodule.c"
        var $25=$memtmp; //@line 104 "gdbmmodule.c"
        var $26=$key+4; //@line 104 "gdbmmodule.c"
        var $27=$memtmp+4; //@line 104 "gdbmmodule.c"
        __label__ = 5; break;
      case 5: // $bb3
        var $28=$size; //@line 105 "gdbmmodule.c"
        var $29=($28) + 1; //@line 105 "gdbmmodule.c"
        $size=$29; //@line 105 "gdbmmodule.c"
        var $30=HEAP[$18]; //@line 106 "gdbmmodule.c"
        var $31=($30)!=0; //@line 106 "gdbmmodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 106 "gdbmmodule.c"
      case 6: // $bb4
        var $32=HEAP[$19]; //@line 106 "gdbmmodule.c"
        _free($32); //@line 106 "gdbmmodule.c"
        __label__ = 7; break; //@line 106 "gdbmmodule.c"
      case 7: // $bb5
        var $33=HEAP[$21]; //@line 107 "gdbmmodule.c"
        HEAP[$20]=$33; //@line 107 "gdbmmodule.c"
        var $34=HEAP[$23]; //@line 107 "gdbmmodule.c"
        HEAP[$22]=$34; //@line 107 "gdbmmodule.c"
        var $35=$dp_addr; //@line 104 "gdbmmodule.c"
        var $36=$35+12; //@line 104 "gdbmmodule.c"
        var $37=HEAP[$36]; //@line 104 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 104 "gdbmmodule.c"
        var $val7=HEAP[$elt6]; //@line 104 "gdbmmodule.c"
        _gdbm_nextkey($memtmp, $37, $val, $val7); //@line 104 "gdbmmodule.c"
        var $38=HEAP[$25]; //@line 104 "gdbmmodule.c"
        HEAP[$24]=$38; //@line 104 "gdbmmodule.c"
        var $39=HEAP[$27]; //@line 104 "gdbmmodule.c"
        HEAP[$26]=$39; //@line 104 "gdbmmodule.c"
        var $40=HEAP[$15]; //@line 103 "gdbmmodule.c"
        var $41=($40)!=0; //@line 103 "gdbmmodule.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 103 "gdbmmodule.c"
      case 8: // $bb9
        var $42=$dp_addr; //@line 109 "gdbmmodule.c"
        var $43=$42+8; //@line 109 "gdbmmodule.c"
        var $44=$size; //@line 109 "gdbmmodule.c"
        HEAP[$43]=$44; //@line 109 "gdbmmodule.c"
        __label__ = 9; break; //@line 109 "gdbmmodule.c"
      case 9: // $bb10
        var $45=$dp_addr; //@line 111 "gdbmmodule.c"
        var $46=$45+8; //@line 111 "gdbmmodule.c"
        var $47=HEAP[$46]; //@line 111 "gdbmmodule.c"
        $0=$47; //@line 111 "gdbmmodule.c"
        __label__ = 10; break; //@line 111 "gdbmmodule.c"
      case 10: // $bb11
        var $48=$0; //@line 94 "gdbmmodule.c"
        $retval=$48; //@line 94 "gdbmmodule.c"
        var $retval12=$retval; //@line 94 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 94 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_subscript($dp, $key) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $key_addr;
        var $retval;
        var $0;
        var $v;
        var $drec=__stackBase__;
        var $krec=__stackBase__+8;
        $dp_addr=$dp;
        $key_addr=$key;
        var $1=$key_addr; //@line 120 "gdbmmodule.c"
        var $2=$krec; //@line 120 "gdbmmodule.c"
        var $3=$krec+4; //@line 120 "gdbmmodule.c"
        var $4=_PyArg_Parse($1, __str1, $2, $3); //@line 120 "gdbmmodule.c"
        var $5=($4)==0; //@line 120 "gdbmmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 120 "gdbmmodule.c"
      case 1: // $bb
        $0=0; //@line 121 "gdbmmodule.c"
        __label__ = 7; break; //@line 121 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 123 "gdbmmodule.c"
        var $7=$6+12; //@line 123 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 123 "gdbmmodule.c"
        var $9=($8)==0; //@line 123 "gdbmmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 123 "gdbmmodule.c"
      case 3: // $bb2
        var $10=HEAP[_DbmError]; //@line 124 "gdbmmodule.c"
        _PyErr_SetString($10, __str); //@line 124 "gdbmmodule.c"
        $0=0; //@line 126 "gdbmmodule.c"
        __label__ = 7; break; //@line 126 "gdbmmodule.c"
      case 4: // $bb3
        var $11=$dp_addr; //@line 128 "gdbmmodule.c"
        var $12=$11+12; //@line 128 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 128 "gdbmmodule.c"
        var $elt=$krec; //@line 128 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 128 "gdbmmodule.c"
        var $elt4=$krec+4; //@line 128 "gdbmmodule.c"
        var $val5=HEAP[$elt4]; //@line 128 "gdbmmodule.c"
        _gdbm_fetch($drec, $13, $val, $val5); //@line 128 "gdbmmodule.c"
        var $14=$drec; //@line 129 "gdbmmodule.c"
        var $15=HEAP[$14]; //@line 129 "gdbmmodule.c"
        var $16=($15)==0; //@line 129 "gdbmmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 129 "gdbmmodule.c"
      case 5: // $bb6
        var $17=$key_addr; //@line 130 "gdbmmodule.c"
        var $18=$17; //@line 130 "gdbmmodule.c"
        var $19=$18+20; //@line 130 "gdbmmodule.c"
        var $20=$19; //@line 130 "gdbmmodule.c"
        var $21=HEAP[_PyExc_KeyError]; //@line 130 "gdbmmodule.c"
        _PyErr_SetString($21, $20); //@line 130 "gdbmmodule.c"
        $0=0; //@line 132 "gdbmmodule.c"
        __label__ = 7; break; //@line 132 "gdbmmodule.c"
      case 6: // $bb7
        var $22=$drec+4; //@line 134 "gdbmmodule.c"
        var $23=HEAP[$22]; //@line 134 "gdbmmodule.c"
        var $24=$drec; //@line 134 "gdbmmodule.c"
        var $25=HEAP[$24]; //@line 134 "gdbmmodule.c"
        var $26=_PyString_FromStringAndSize($25, $23); //@line 134 "gdbmmodule.c"
        $v=$26; //@line 134 "gdbmmodule.c"
        var $27=$drec; //@line 135 "gdbmmodule.c"
        var $28=HEAP[$27]; //@line 135 "gdbmmodule.c"
        _free($28); //@line 135 "gdbmmodule.c"
        var $29=$v; //@line 136 "gdbmmodule.c"
        $0=$29; //@line 136 "gdbmmodule.c"
        __label__ = 7; break; //@line 136 "gdbmmodule.c"
      case 7: // $bb8
        var $30=$0; //@line 121 "gdbmmodule.c"
        $retval=$30; //@line 121 "gdbmmodule.c"
        var $retval9=$retval; //@line 121 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 121 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_ass_sub($dp, $v, $w) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $v_addr;
        var $w_addr;
        var $retval;
        var $0;
        var $krec=__stackBase__;
        var $drec=__stackBase__+8;
        $dp_addr=$dp;
        $v_addr=$v;
        $w_addr=$w;
        var $1=$v_addr; //@line 144 "gdbmmodule.c"
        var $2=$krec; //@line 144 "gdbmmodule.c"
        var $3=$krec+4; //@line 144 "gdbmmodule.c"
        var $4=_PyArg_Parse($1, __str1, $2, $3); //@line 144 "gdbmmodule.c"
        var $5=($4)==0; //@line 144 "gdbmmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 144 "gdbmmodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_TypeError]; //@line 145 "gdbmmodule.c"
        _PyErr_SetString($6, __str2); //@line 145 "gdbmmodule.c"
        $0=-1; //@line 147 "gdbmmodule.c"
        __label__ = 15; break; //@line 147 "gdbmmodule.c"
      case 2: // $bb1
        var $7=$dp_addr; //@line 149 "gdbmmodule.c"
        var $8=$7+12; //@line 149 "gdbmmodule.c"
        var $9=HEAP[$8]; //@line 149 "gdbmmodule.c"
        var $10=($9)==0; //@line 149 "gdbmmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 149 "gdbmmodule.c"
      case 3: // $bb2
        var $11=HEAP[_DbmError]; //@line 150 "gdbmmodule.c"
        _PyErr_SetString($11, __str); //@line 150 "gdbmmodule.c"
        $0=-1; //@line 152 "gdbmmodule.c"
        __label__ = 15; break; //@line 152 "gdbmmodule.c"
      case 4: // $bb3
        var $12=$dp_addr; //@line 154 "gdbmmodule.c"
        var $13=$12+8; //@line 154 "gdbmmodule.c"
        HEAP[$13]=-1; //@line 154 "gdbmmodule.c"
        var $14=$w_addr; //@line 155 "gdbmmodule.c"
        var $15=($14)==0; //@line 155 "gdbmmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 155 "gdbmmodule.c"
      case 5: // $bb4
        var $16=$dp_addr; //@line 156 "gdbmmodule.c"
        var $17=$16+12; //@line 156 "gdbmmodule.c"
        var $18=HEAP[$17]; //@line 156 "gdbmmodule.c"
        var $elt=$krec; //@line 156 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 156 "gdbmmodule.c"
        var $elt5=$krec+4; //@line 156 "gdbmmodule.c"
        var $val6=HEAP[$elt5]; //@line 156 "gdbmmodule.c"
        var $19=_gdbm_delete($18, $val, $val6); //@line 156 "gdbmmodule.c"
        var $20=($19) < 0; //@line 156 "gdbmmodule.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 156 "gdbmmodule.c"
      case 6: // $bb7
        var $21=$v_addr; //@line 157 "gdbmmodule.c"
        var $22=$21; //@line 157 "gdbmmodule.c"
        var $23=$22+20; //@line 157 "gdbmmodule.c"
        var $24=$23; //@line 157 "gdbmmodule.c"
        var $25=HEAP[_PyExc_KeyError]; //@line 157 "gdbmmodule.c"
        _PyErr_SetString($25, $24); //@line 157 "gdbmmodule.c"
        $0=-1; //@line 159 "gdbmmodule.c"
        __label__ = 15; break; //@line 159 "gdbmmodule.c"
      case 7: // $bb9
        var $26=$w_addr; //@line 163 "gdbmmodule.c"
        var $27=$drec; //@line 163 "gdbmmodule.c"
        var $28=$drec+4; //@line 163 "gdbmmodule.c"
        var $29=_PyArg_Parse($26, __str1, $27, $28); //@line 163 "gdbmmodule.c"
        var $30=($29)==0; //@line 163 "gdbmmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 163 "gdbmmodule.c"
      case 8: // $bb10
        var $31=HEAP[_PyExc_TypeError]; //@line 164 "gdbmmodule.c"
        _PyErr_SetString($31, __str3); //@line 164 "gdbmmodule.c"
        $0=-1; //@line 166 "gdbmmodule.c"
        __label__ = 15; break; //@line 166 "gdbmmodule.c"
      case 9: // $bb11
        var $32=___errno_location(); //@line 168 "gdbmmodule.c"
        HEAP[$32]=0; //@line 168 "gdbmmodule.c"
        var $33=$dp_addr; //@line 169 "gdbmmodule.c"
        var $34=$33+12; //@line 169 "gdbmmodule.c"
        var $35=HEAP[$34]; //@line 169 "gdbmmodule.c"
        var $elt12=$krec; //@line 169 "gdbmmodule.c"
        var $val13=HEAP[$elt12]; //@line 169 "gdbmmodule.c"
        var $elt14=$krec+4; //@line 169 "gdbmmodule.c"
        var $val15=HEAP[$elt14]; //@line 169 "gdbmmodule.c"
        var $elt16=$drec; //@line 169 "gdbmmodule.c"
        var $val17=HEAP[$elt16]; //@line 169 "gdbmmodule.c"
        var $elt18=$drec+4; //@line 169 "gdbmmodule.c"
        var $val19=HEAP[$elt18]; //@line 169 "gdbmmodule.c"
        var $36=_gdbm_store($35, $val13, $val15, $val17, $val19, 1); //@line 169 "gdbmmodule.c"
        var $37=($36) < 0; //@line 169 "gdbmmodule.c"
        if ($37) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 169 "gdbmmodule.c"
      case 10: // $bb20
        var $38=___errno_location(); //@line 170 "gdbmmodule.c"
        var $39=HEAP[$38]; //@line 170 "gdbmmodule.c"
        var $40=($39)!=0; //@line 170 "gdbmmodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 170 "gdbmmodule.c"
      case 11: // $bb21
        var $41=HEAP[_DbmError]; //@line 171 "gdbmmodule.c"
        var $42=_PyErr_SetFromErrno($41); //@line 171 "gdbmmodule.c"
        __label__ = 13; break; //@line 171 "gdbmmodule.c"
      case 12: // $bb22
        var $43=HEAP[_gdbm_errno]; //@line 173 "gdbmmodule.c"
        var $44=_gdbm_strerror($43); //@line 173 "gdbmmodule.c"
        var $45=HEAP[_DbmError]; //@line 173 "gdbmmodule.c"
        _PyErr_SetString($45, $44); //@line 173 "gdbmmodule.c"
        __label__ = 13; break; //@line 173 "gdbmmodule.c"
      case 13: // $bb23
        $0=-1; //@line 175 "gdbmmodule.c"
        __label__ = 15; break; //@line 175 "gdbmmodule.c"
      case 14: // $bb24
        $0=0; //@line 178 "gdbmmodule.c"
        __label__ = 15; break; //@line 178 "gdbmmodule.c"
      case 15: // $bb25
        var $46=$0; //@line 147 "gdbmmodule.c"
        $retval=$46; //@line 147 "gdbmmodule.c"
        var $retval26=$retval; //@line 147 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 147 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_contains($dp, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $key=__stackBase__;
        $dp_addr=$dp;
        $arg_addr=$arg;
        var $1=$dp_addr; //@line 186 "gdbmmodule.c"
        var $2=$1+12; //@line 186 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 186 "gdbmmodule.c"
        var $4=($3)==0; //@line 186 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 186 "gdbmmodule.c"
      case 1: // $bb
        var $5=HEAP[_DbmError]; //@line 187 "gdbmmodule.c"
        _PyErr_SetString($5, __str); //@line 187 "gdbmmodule.c"
        $0=-1; //@line 189 "gdbmmodule.c"
        __label__ = 5; break; //@line 189 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$arg_addr; //@line 191 "gdbmmodule.c"
        var $7=$6+4; //@line 191 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 191 "gdbmmodule.c"
        var $9=$8+84; //@line 191 "gdbmmodule.c"
        var $10=HEAP[$9]; //@line 191 "gdbmmodule.c"
        var $11=($10) & 134217728; //@line 191 "gdbmmodule.c"
        var $12=($11)==0; //@line 191 "gdbmmodule.c"
        var $13=$arg_addr; //@line 192 "gdbmmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 191 "gdbmmodule.c"
      case 3: // $bb2
        var $14=$13+4; //@line 192 "gdbmmodule.c"
        var $15=HEAP[$14]; //@line 192 "gdbmmodule.c"
        var $16=$15+12; //@line 192 "gdbmmodule.c"
        var $17=HEAP[$16]; //@line 192 "gdbmmodule.c"
        var $18=HEAP[_PyExc_TypeError]; //@line 192 "gdbmmodule.c"
        var $19=_PyErr_Format($18, __str4, $17); //@line 192 "gdbmmodule.c"
        $0=-1; //@line 195 "gdbmmodule.c"
        __label__ = 5; break; //@line 195 "gdbmmodule.c"
      case 4: // $bb3
        var $20=$13; //@line 197 "gdbmmodule.c"
        var $21=$20+20; //@line 197 "gdbmmodule.c"
        var $22=$21; //@line 197 "gdbmmodule.c"
        var $23=$key; //@line 197 "gdbmmodule.c"
        HEAP[$23]=$22; //@line 197 "gdbmmodule.c"
        var $24=$arg_addr; //@line 198 "gdbmmodule.c"
        var $25=$24; //@line 198 "gdbmmodule.c"
        var $26=$25+8; //@line 198 "gdbmmodule.c"
        var $27=HEAP[$26]; //@line 198 "gdbmmodule.c"
        var $28=$key+4; //@line 198 "gdbmmodule.c"
        HEAP[$28]=$27; //@line 198 "gdbmmodule.c"
        var $29=$dp_addr; //@line 199 "gdbmmodule.c"
        var $30=$29+12; //@line 199 "gdbmmodule.c"
        var $31=HEAP[$30]; //@line 199 "gdbmmodule.c"
        var $elt=$key; //@line 199 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 199 "gdbmmodule.c"
        var $elt4=$key+4; //@line 199 "gdbmmodule.c"
        var $val5=HEAP[$elt4]; //@line 199 "gdbmmodule.c"
        var $32=_gdbm_exists($31, $val, $val5); //@line 199 "gdbmmodule.c"
        $0=$32; //@line 199 "gdbmmodule.c"
        __label__ = 5; break; //@line 199 "gdbmmodule.c"
      case 5: // $bb6
        var $33=$0; //@line 189 "gdbmmodule.c"
        $retval=$33; //@line 189 "gdbmmodule.c"
        var $retval7=$retval; //@line 189 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 189 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_close($dp, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $dp_addr=$dp;
        $unused_addr=$unused;
        var $1=$dp_addr; //@line 228 "gdbmmodule.c"
        var $2=$1+12; //@line 228 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 228 "gdbmmodule.c"
        var $4=($3)!=0; //@line 228 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 228 "gdbmmodule.c"
      case 1: // $bb
        var $5=$dp_addr; //@line 229 "gdbmmodule.c"
        var $6=$5+12; //@line 229 "gdbmmodule.c"
        var $7=HEAP[$6]; //@line 229 "gdbmmodule.c"
        _gdbm_close($7); //@line 229 "gdbmmodule.c"
        __label__ = 2; break; //@line 229 "gdbmmodule.c"
      case 2: // $bb1
        var $8=$dp_addr; //@line 230 "gdbmmodule.c"
        var $9=$8+12; //@line 230 "gdbmmodule.c"
        HEAP[$9]=0; //@line 230 "gdbmmodule.c"
        var $10=HEAP[__Py_NoneStruct]; //@line 231 "gdbmmodule.c"
        var $11=($10) + 1; //@line 231 "gdbmmodule.c"
        HEAP[__Py_NoneStruct]=$11; //@line 231 "gdbmmodule.c"
        $0=__Py_NoneStruct; //@line 232 "gdbmmodule.c"
        var $12=$0; //@line 232 "gdbmmodule.c"
        $retval=$12; //@line 232 "gdbmmodule.c"
        var $retval2=$retval; //@line 232 "gdbmmodule.c"
        ;
        return $retval2; //@line 232 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_keys($dp, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $v;
        var $item;
        var $key=__stackBase__;
        var $nextkey=__stackBase__+8;
        var $err;
        $dp_addr=$dp;
        $unused_addr=$unused;
        var $1=$dp_addr; //@line 246 "gdbmmodule.c"
        var $2=($1)==0; //@line 246 "gdbmmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 246 "gdbmmodule.c"
      case 1: // $bb
        var $3=$dp_addr; //@line 246 "gdbmmodule.c"
        var $4=$3; //@line 246 "gdbmmodule.c"
        var $5=$4+4; //@line 246 "gdbmmodule.c"
        var $6=HEAP[$5]; //@line 246 "gdbmmodule.c"
        var $7=($6)!=(_Dbmtype); //@line 246 "gdbmmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 246 "gdbmmodule.c"
      case 2: // $bb1
        __PyErr_BadInternalCall(__str5, 247); //@line 247 "gdbmmodule.c"
        $0=0; //@line 248 "gdbmmodule.c"
        __label__ = 21; break; //@line 248 "gdbmmodule.c"
      case 3: // $bb2
        var $8=$dp_addr; //@line 250 "gdbmmodule.c"
        var $9=$8+12; //@line 250 "gdbmmodule.c"
        var $10=HEAP[$9]; //@line 250 "gdbmmodule.c"
        var $11=($10)==0; //@line 250 "gdbmmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 250 "gdbmmodule.c"
      case 4: // $bb3
        var $12=HEAP[_DbmError]; //@line 250 "gdbmmodule.c"
        _PyErr_SetString($12, __str); //@line 250 "gdbmmodule.c"
        $0=0; //@line 250 "gdbmmodule.c"
        __label__ = 21; break; //@line 250 "gdbmmodule.c"
      case 5: // $bb4
        var $13=_PyList_New(0); //@line 252 "gdbmmodule.c"
        $v=$13; //@line 252 "gdbmmodule.c"
        var $14=$v; //@line 253 "gdbmmodule.c"
        var $15=($14)==0; //@line 253 "gdbmmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 253 "gdbmmodule.c"
      case 6: // $bb5
        $0=0; //@line 254 "gdbmmodule.c"
        __label__ = 21; break; //@line 254 "gdbmmodule.c"
      case 7: // $bb6
        var $16=$dp_addr; //@line 256 "gdbmmodule.c"
        var $17=$16+12; //@line 256 "gdbmmodule.c"
        var $18=HEAP[$17]; //@line 256 "gdbmmodule.c"
        _gdbm_firstkey($key, $18); //@line 256 "gdbmmodule.c"
        var $19=$key; //@line 257 "gdbmmodule.c"
        var $20=$key+4; //@line 258 "gdbmmodule.c"
        var $21=$key; //@line 258 "gdbmmodule.c"
        var $elt=$key; //@line 271 "gdbmmodule.c"
        var $elt18=$key+4; //@line 271 "gdbmmodule.c"
        var $22=$key; //@line 272 "gdbmmodule.c"
        var $23=$key; //@line 273 "gdbmmodule.c"
        var $24=$nextkey; //@line 273 "gdbmmodule.c"
        var $25=$key+4; //@line 273 "gdbmmodule.c"
        var $26=$nextkey+4; //@line 273 "gdbmmodule.c"
        __label__ = 19; break; //@line 256 "gdbmmodule.c"
      case 8: // $bb7
        var $27=HEAP[$20]; //@line 258 "gdbmmodule.c"
        var $28=HEAP[$21]; //@line 258 "gdbmmodule.c"
        var $29=_PyString_FromStringAndSize($28, $27); //@line 258 "gdbmmodule.c"
        $item=$29; //@line 258 "gdbmmodule.c"
        var $30=$item; //@line 259 "gdbmmodule.c"
        var $31=($30)==0; //@line 259 "gdbmmodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 259 "gdbmmodule.c"
      case 9: // $bb8
        var $32=$key; //@line 260 "gdbmmodule.c"
        var $33=HEAP[$32]; //@line 260 "gdbmmodule.c"
        _free($33); //@line 260 "gdbmmodule.c"
        var $34=$v; //@line 261 "gdbmmodule.c"
        var $35=$34; //@line 261 "gdbmmodule.c"
        var $36=HEAP[$35]; //@line 261 "gdbmmodule.c"
        var $37=($36) - 1; //@line 261 "gdbmmodule.c"
        var $38=$v; //@line 261 "gdbmmodule.c"
        var $39=$38; //@line 261 "gdbmmodule.c"
        HEAP[$39]=$37; //@line 261 "gdbmmodule.c"
        var $40=$v; //@line 261 "gdbmmodule.c"
        var $41=$40; //@line 261 "gdbmmodule.c"
        var $42=HEAP[$41]; //@line 261 "gdbmmodule.c"
        var $43=($42)==0; //@line 261 "gdbmmodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 261 "gdbmmodule.c"
      case 10: // $bb9
        var $44=$v; //@line 261 "gdbmmodule.c"
        var $45=$44+4; //@line 261 "gdbmmodule.c"
        var $46=HEAP[$45]; //@line 261 "gdbmmodule.c"
        var $47=$46+24; //@line 261 "gdbmmodule.c"
        var $48=HEAP[$47]; //@line 261 "gdbmmodule.c"
        var $49=$v; //@line 261 "gdbmmodule.c"
        FUNCTION_TABLE[$48]($49); //@line 261 "gdbmmodule.c"
        __label__ = 11; break; //@line 261 "gdbmmodule.c"
      case 11: // $bb10
        $0=0; //@line 262 "gdbmmodule.c"
        __label__ = 21; break; //@line 262 "gdbmmodule.c"
      case 12: // $bb11
        var $50=$v; //@line 264 "gdbmmodule.c"
        var $51=$item; //@line 264 "gdbmmodule.c"
        var $52=_PyList_Append($50, $51); //@line 264 "gdbmmodule.c"
        $err=$52; //@line 264 "gdbmmodule.c"
        var $53=$item; //@line 265 "gdbmmodule.c"
        var $54=$53; //@line 265 "gdbmmodule.c"
        var $55=HEAP[$54]; //@line 265 "gdbmmodule.c"
        var $56=($55) - 1; //@line 265 "gdbmmodule.c"
        var $57=$item; //@line 265 "gdbmmodule.c"
        var $58=$57; //@line 265 "gdbmmodule.c"
        HEAP[$58]=$56; //@line 265 "gdbmmodule.c"
        var $59=$item; //@line 265 "gdbmmodule.c"
        var $60=$59; //@line 265 "gdbmmodule.c"
        var $61=HEAP[$60]; //@line 265 "gdbmmodule.c"
        var $62=($61)==0; //@line 265 "gdbmmodule.c"
        if ($62) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 265 "gdbmmodule.c"
      case 13: // $bb12
        var $63=$item; //@line 265 "gdbmmodule.c"
        var $64=$63+4; //@line 265 "gdbmmodule.c"
        var $65=HEAP[$64]; //@line 265 "gdbmmodule.c"
        var $66=$65+24; //@line 265 "gdbmmodule.c"
        var $67=HEAP[$66]; //@line 265 "gdbmmodule.c"
        var $68=$item; //@line 265 "gdbmmodule.c"
        FUNCTION_TABLE[$67]($68); //@line 265 "gdbmmodule.c"
        __label__ = 14; break; //@line 265 "gdbmmodule.c"
      case 14: // $bb13
        var $69=$err; //@line 266 "gdbmmodule.c"
        var $70=($69)!=0; //@line 266 "gdbmmodule.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 266 "gdbmmodule.c"
      case 15: // $bb14
        var $71=$key; //@line 267 "gdbmmodule.c"
        var $72=HEAP[$71]; //@line 267 "gdbmmodule.c"
        _free($72); //@line 267 "gdbmmodule.c"
        var $73=$v; //@line 268 "gdbmmodule.c"
        var $74=$73; //@line 268 "gdbmmodule.c"
        var $75=HEAP[$74]; //@line 268 "gdbmmodule.c"
        var $76=($75) - 1; //@line 268 "gdbmmodule.c"
        var $77=$v; //@line 268 "gdbmmodule.c"
        var $78=$77; //@line 268 "gdbmmodule.c"
        HEAP[$78]=$76; //@line 268 "gdbmmodule.c"
        var $79=$v; //@line 268 "gdbmmodule.c"
        var $80=$79; //@line 268 "gdbmmodule.c"
        var $81=HEAP[$80]; //@line 268 "gdbmmodule.c"
        var $82=($81)==0; //@line 268 "gdbmmodule.c"
        if ($82) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 268 "gdbmmodule.c"
      case 16: // $bb15
        var $83=$v; //@line 268 "gdbmmodule.c"
        var $84=$83+4; //@line 268 "gdbmmodule.c"
        var $85=HEAP[$84]; //@line 268 "gdbmmodule.c"
        var $86=$85+24; //@line 268 "gdbmmodule.c"
        var $87=HEAP[$86]; //@line 268 "gdbmmodule.c"
        var $88=$v; //@line 268 "gdbmmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 268 "gdbmmodule.c"
        __label__ = 17; break; //@line 268 "gdbmmodule.c"
      case 17: // $bb16
        $0=0; //@line 269 "gdbmmodule.c"
        __label__ = 21; break; //@line 269 "gdbmmodule.c"
      case 18: // $bb17
        var $89=$dp_addr; //@line 271 "gdbmmodule.c"
        var $90=$89+12; //@line 271 "gdbmmodule.c"
        var $91=HEAP[$90]; //@line 271 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 271 "gdbmmodule.c"
        var $val19=HEAP[$elt18]; //@line 271 "gdbmmodule.c"
        _gdbm_nextkey($nextkey, $91, $val, $val19); //@line 271 "gdbmmodule.c"
        var $92=HEAP[$22]; //@line 272 "gdbmmodule.c"
        _free($92); //@line 272 "gdbmmodule.c"
        var $93=HEAP[$24]; //@line 273 "gdbmmodule.c"
        HEAP[$23]=$93; //@line 273 "gdbmmodule.c"
        var $94=HEAP[$26]; //@line 273 "gdbmmodule.c"
        HEAP[$25]=$94; //@line 273 "gdbmmodule.c"
        __label__ = 19; break; //@line 273 "gdbmmodule.c"
      case 19: // $bb20
        var $95=HEAP[$19]; //@line 257 "gdbmmodule.c"
        var $96=($95)!=0; //@line 257 "gdbmmodule.c"
        if ($96) { __label__ = 8; break; } else { __label__ = 20; break; } //@line 257 "gdbmmodule.c"
      case 20: // $bb21
        var $97=$v; //@line 275 "gdbmmodule.c"
        $0=$97; //@line 275 "gdbmmodule.c"
        __label__ = 21; break; //@line 275 "gdbmmodule.c"
      case 21: // $bb22
        var $98=$0; //@line 248 "gdbmmodule.c"
        $retval=$98; //@line 248 "gdbmmodule.c"
        var $retval23=$retval; //@line 248 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 248 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_has_key($dp, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $key=__stackBase__;
        $dp_addr=$dp;
        $args_addr=$args;
        var $1=$args_addr; //@line 287 "gdbmmodule.c"
        var $2=$key; //@line 287 "gdbmmodule.c"
        var $3=$key+4; //@line 287 "gdbmmodule.c"
        var $4=_PyArg_ParseTuple($1, __str6, $2, $3); //@line 287 "gdbmmodule.c"
        var $5=($4)==0; //@line 287 "gdbmmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 287 "gdbmmodule.c"
      case 1: // $bb
        $0=0; //@line 288 "gdbmmodule.c"
        __label__ = 5; break; //@line 288 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 289 "gdbmmodule.c"
        var $7=$6+12; //@line 289 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 289 "gdbmmodule.c"
        var $9=($8)==0; //@line 289 "gdbmmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 289 "gdbmmodule.c"
      case 3: // $bb2
        var $10=HEAP[_DbmError]; //@line 289 "gdbmmodule.c"
        _PyErr_SetString($10, __str); //@line 289 "gdbmmodule.c"
        $0=0; //@line 289 "gdbmmodule.c"
        __label__ = 5; break; //@line 289 "gdbmmodule.c"
      case 4: // $bb3
        var $11=$dp_addr; //@line 290 "gdbmmodule.c"
        var $12=$11+12; //@line 290 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 290 "gdbmmodule.c"
        var $elt=$key; //@line 290 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 290 "gdbmmodule.c"
        var $elt4=$key+4; //@line 290 "gdbmmodule.c"
        var $val5=HEAP[$elt4]; //@line 290 "gdbmmodule.c"
        var $14=_gdbm_exists($13, $val, $val5); //@line 290 "gdbmmodule.c"
        var $15=_PyInt_FromLong($14); //@line 290 "gdbmmodule.c"
        $0=$15; //@line 290 "gdbmmodule.c"
        __label__ = 5; break; //@line 290 "gdbmmodule.c"
      case 5: // $bb6
        var $16=$0; //@line 288 "gdbmmodule.c"
        $retval=$16; //@line 288 "gdbmmodule.c"
        var $retval7=$retval; //@line 288 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 288 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_firstkey($dp, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $v;
        var $key=__stackBase__;
        $dp_addr=$dp;
        $unused_addr=$unused;
        var $1=$dp_addr; //@line 306 "gdbmmodule.c"
        var $2=$1+12; //@line 306 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 306 "gdbmmodule.c"
        var $4=($3)==0; //@line 306 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 306 "gdbmmodule.c"
      case 1: // $bb
        var $5=HEAP[_DbmError]; //@line 306 "gdbmmodule.c"
        _PyErr_SetString($5, __str); //@line 306 "gdbmmodule.c"
        $0=0; //@line 306 "gdbmmodule.c"
        __label__ = 5; break; //@line 306 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 307 "gdbmmodule.c"
        var $7=$6+12; //@line 307 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 307 "gdbmmodule.c"
        _gdbm_firstkey($key, $8); //@line 307 "gdbmmodule.c"
        var $9=$key; //@line 308 "gdbmmodule.c"
        var $10=HEAP[$9]; //@line 308 "gdbmmodule.c"
        var $11=($10)!=0; //@line 308 "gdbmmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 308 "gdbmmodule.c"
      case 3: // $bb2
        var $12=$key+4; //@line 309 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 309 "gdbmmodule.c"
        var $14=$key; //@line 309 "gdbmmodule.c"
        var $15=HEAP[$14]; //@line 309 "gdbmmodule.c"
        var $16=_PyString_FromStringAndSize($15, $13); //@line 309 "gdbmmodule.c"
        $v=$16; //@line 309 "gdbmmodule.c"
        var $17=$key; //@line 310 "gdbmmodule.c"
        var $18=HEAP[$17]; //@line 310 "gdbmmodule.c"
        _free($18); //@line 310 "gdbmmodule.c"
        var $19=$v; //@line 311 "gdbmmodule.c"
        $0=$19; //@line 311 "gdbmmodule.c"
        __label__ = 5; break; //@line 311 "gdbmmodule.c"
      case 4: // $bb3
        var $20=HEAP[__Py_NoneStruct]; //@line 314 "gdbmmodule.c"
        var $21=($20) + 1; //@line 314 "gdbmmodule.c"
        HEAP[__Py_NoneStruct]=$21; //@line 314 "gdbmmodule.c"
        $0=__Py_NoneStruct; //@line 315 "gdbmmodule.c"
        __label__ = 5; break; //@line 315 "gdbmmodule.c"
      case 5: // $bb4
        var $22=$0; //@line 306 "gdbmmodule.c"
        $retval=$22; //@line 306 "gdbmmodule.c"
        var $retval5=$retval; //@line 306 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 306 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_nextkey($dp, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $v;
        var $key=__stackBase__;
        var $nextkey=__stackBase__+8;
        $dp_addr=$dp;
        $args_addr=$args;
        var $1=$args_addr; //@line 336 "gdbmmodule.c"
        var $2=$key; //@line 336 "gdbmmodule.c"
        var $3=$key+4; //@line 336 "gdbmmodule.c"
        var $4=_PyArg_ParseTuple($1, __str7, $2, $3); //@line 336 "gdbmmodule.c"
        var $5=($4)==0; //@line 336 "gdbmmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 336 "gdbmmodule.c"
      case 1: // $bb
        $0=0; //@line 337 "gdbmmodule.c"
        __label__ = 7; break; //@line 337 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 338 "gdbmmodule.c"
        var $7=$6+12; //@line 338 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 338 "gdbmmodule.c"
        var $9=($8)==0; //@line 338 "gdbmmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 338 "gdbmmodule.c"
      case 3: // $bb2
        var $10=HEAP[_DbmError]; //@line 338 "gdbmmodule.c"
        _PyErr_SetString($10, __str); //@line 338 "gdbmmodule.c"
        $0=0; //@line 338 "gdbmmodule.c"
        __label__ = 7; break; //@line 338 "gdbmmodule.c"
      case 4: // $bb3
        var $11=$dp_addr; //@line 339 "gdbmmodule.c"
        var $12=$11+12; //@line 339 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 339 "gdbmmodule.c"
        var $elt=$key; //@line 339 "gdbmmodule.c"
        var $val=HEAP[$elt]; //@line 339 "gdbmmodule.c"
        var $elt4=$key+4; //@line 339 "gdbmmodule.c"
        var $val5=HEAP[$elt4]; //@line 339 "gdbmmodule.c"
        _gdbm_nextkey($nextkey, $13, $val, $val5); //@line 339 "gdbmmodule.c"
        var $14=$nextkey; //@line 340 "gdbmmodule.c"
        var $15=HEAP[$14]; //@line 340 "gdbmmodule.c"
        var $16=($15)!=0; //@line 340 "gdbmmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 340 "gdbmmodule.c"
      case 5: // $bb6
        var $17=$nextkey+4; //@line 341 "gdbmmodule.c"
        var $18=HEAP[$17]; //@line 341 "gdbmmodule.c"
        var $19=$nextkey; //@line 341 "gdbmmodule.c"
        var $20=HEAP[$19]; //@line 341 "gdbmmodule.c"
        var $21=_PyString_FromStringAndSize($20, $18); //@line 341 "gdbmmodule.c"
        $v=$21; //@line 341 "gdbmmodule.c"
        var $22=$nextkey; //@line 342 "gdbmmodule.c"
        var $23=HEAP[$22]; //@line 342 "gdbmmodule.c"
        _free($23); //@line 342 "gdbmmodule.c"
        var $24=$v; //@line 343 "gdbmmodule.c"
        $0=$24; //@line 343 "gdbmmodule.c"
        __label__ = 7; break; //@line 343 "gdbmmodule.c"
      case 6: // $bb7
        var $25=HEAP[__Py_NoneStruct]; //@line 346 "gdbmmodule.c"
        var $26=($25) + 1; //@line 346 "gdbmmodule.c"
        HEAP[__Py_NoneStruct]=$26; //@line 346 "gdbmmodule.c"
        $0=__Py_NoneStruct; //@line 347 "gdbmmodule.c"
        __label__ = 7; break; //@line 347 "gdbmmodule.c"
      case 7: // $bb8
        var $27=$0; //@line 337 "gdbmmodule.c"
        $retval=$27; //@line 337 "gdbmmodule.c"
        var $retval9=$retval; //@line 337 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 337 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_reorganize($dp, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $dp_addr=$dp;
        $unused_addr=$unused;
        var $1=$dp_addr; //@line 362 "gdbmmodule.c"
        var $2=$1+12; //@line 362 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 362 "gdbmmodule.c"
        var $4=($3)==0; //@line 362 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 362 "gdbmmodule.c"
      case 1: // $bb
        var $5=HEAP[_DbmError]; //@line 362 "gdbmmodule.c"
        _PyErr_SetString($5, __str); //@line 362 "gdbmmodule.c"
        $0=0; //@line 362 "gdbmmodule.c"
        __label__ = 8; break; //@line 362 "gdbmmodule.c"
      case 2: // $bb1
        var $6=___errno_location(); //@line 363 "gdbmmodule.c"
        HEAP[$6]=0; //@line 363 "gdbmmodule.c"
        var $7=$dp_addr; //@line 364 "gdbmmodule.c"
        var $8=$7+12; //@line 364 "gdbmmodule.c"
        var $9=HEAP[$8]; //@line 364 "gdbmmodule.c"
        var $10=_gdbm_reorganize($9); //@line 364 "gdbmmodule.c"
        var $11=($10) < 0; //@line 364 "gdbmmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 364 "gdbmmodule.c"
      case 3: // $bb2
        var $12=___errno_location(); //@line 365 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 365 "gdbmmodule.c"
        var $14=($13)!=0; //@line 365 "gdbmmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 365 "gdbmmodule.c"
      case 4: // $bb3
        var $15=HEAP[_DbmError]; //@line 366 "gdbmmodule.c"
        var $16=_PyErr_SetFromErrno($15); //@line 366 "gdbmmodule.c"
        __label__ = 6; break; //@line 366 "gdbmmodule.c"
      case 5: // $bb4
        var $17=HEAP[_gdbm_errno]; //@line 368 "gdbmmodule.c"
        var $18=_gdbm_strerror($17); //@line 368 "gdbmmodule.c"
        var $19=HEAP[_DbmError]; //@line 368 "gdbmmodule.c"
        _PyErr_SetString($19, $18); //@line 368 "gdbmmodule.c"
        __label__ = 6; break; //@line 368 "gdbmmodule.c"
      case 6: // $bb5
        $0=0; //@line 369 "gdbmmodule.c"
        __label__ = 8; break; //@line 369 "gdbmmodule.c"
      case 7: // $bb6
        var $20=HEAP[__Py_NoneStruct]; //@line 371 "gdbmmodule.c"
        var $21=($20) + 1; //@line 371 "gdbmmodule.c"
        HEAP[__Py_NoneStruct]=$21; //@line 371 "gdbmmodule.c"
        $0=__Py_NoneStruct; //@line 372 "gdbmmodule.c"
        __label__ = 8; break; //@line 372 "gdbmmodule.c"
      case 8: // $bb7
        var $22=$0; //@line 362 "gdbmmodule.c"
        $retval=$22; //@line 362 "gdbmmodule.c"
        var $retval8=$retval; //@line 362 "gdbmmodule.c"
        ;
        return $retval8; //@line 362 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_sync($dp, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dp_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $dp_addr=$dp;
        $unused_addr=$unused;
        var $1=$dp_addr; //@line 383 "gdbmmodule.c"
        var $2=$1+12; //@line 383 "gdbmmodule.c"
        var $3=HEAP[$2]; //@line 383 "gdbmmodule.c"
        var $4=($3)==0; //@line 383 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 383 "gdbmmodule.c"
      case 1: // $bb
        var $5=HEAP[_DbmError]; //@line 383 "gdbmmodule.c"
        _PyErr_SetString($5, __str); //@line 383 "gdbmmodule.c"
        $0=0; //@line 383 "gdbmmodule.c"
        __label__ = 3; break; //@line 383 "gdbmmodule.c"
      case 2: // $bb1
        var $6=$dp_addr; //@line 384 "gdbmmodule.c"
        var $7=$6+12; //@line 384 "gdbmmodule.c"
        var $8=HEAP[$7]; //@line 384 "gdbmmodule.c"
        _gdbm_sync($8); //@line 384 "gdbmmodule.c"
        var $9=HEAP[__Py_NoneStruct]; //@line 385 "gdbmmodule.c"
        var $10=($9) + 1; //@line 385 "gdbmmodule.c"
        HEAP[__Py_NoneStruct]=$10; //@line 385 "gdbmmodule.c"
        $0=__Py_NoneStruct; //@line 386 "gdbmmodule.c"
        __label__ = 3; break; //@line 386 "gdbmmodule.c"
      case 3: // $bb2
        var $11=$0; //@line 383 "gdbmmodule.c"
        $retval=$11; //@line 383 "gdbmmodule.c"
        var $retval3=$retval; //@line 383 "gdbmmodule.c"
        ;
        return $retval3; //@line 383 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dbm_getattr($dp, $name) {
    ;
    var __label__;
  
    var $dp_addr;
    var $name_addr;
    var $retval;
    var $0;
    $dp_addr=$dp;
    $name_addr=$name;
    var $1=$dp_addr; //@line 403 "gdbmmodule.c"
    var $2=$1; //@line 403 "gdbmmodule.c"
    var $3=$name_addr; //@line 403 "gdbmmodule.c"
    var $4=_Py_FindMethod(_dbm_methods, $2, $3); //@line 403 "gdbmmodule.c"
    $0=$4; //@line 403 "gdbmmodule.c"
    var $5=$0; //@line 403 "gdbmmodule.c"
    $retval=$5; //@line 403 "gdbmmodule.c"
    var $retval1=$retval; //@line 403 "gdbmmodule.c"
    ;
    return $retval1; //@line 403 "gdbmmodule.c"
  }
  

  function _dbmopen($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $file_addr_i;
        var $flags_addr_i;
        var $mode_addr_i;
        var $retval_i;
        var $0;
        var $dp_i;
        var $self_addr;
        var $args_addr;
        var $retval;
        var $1;
        var $name=__stackBase__;
        var $flags=__stackBase__+4;
        var $iflags;
        var $mode=__stackBase__+8;
        var $buf=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$flags]=__str16; //@line 460 "gdbmmodule.c"
        HEAP[$mode]=438; //@line 462 "gdbmmodule.c"
        var $2=$args_addr; //@line 464 "gdbmmodule.c"
        var $3=_PyArg_ParseTuple($2, __str17, $name, $flags, $mode); //@line 464 "gdbmmodule.c"
        var $4=($3)==0; //@line 464 "gdbmmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 464 "gdbmmodule.c"
      case 1: // $bb
        $1=0; //@line 465 "gdbmmodule.c"
        __label__ = 27; break; //@line 465 "gdbmmodule.c"
      case 2: // $bb1
        var $5=HEAP[$flags]; //@line 466 "gdbmmodule.c"
        var $6=$5; //@line 466 "gdbmmodule.c"
        var $7=HEAP[$6]; //@line 466 "gdbmmodule.c"
        var $8=($7); //@line 466 "gdbmmodule.c"
        if ($8 == 99) {
          __label__ = 5; break;
        }
        else if ($8 == 110) {
          __label__ = 6; break;
        }
        else if ($8 == 114) {
          __label__ = 3; break;
        }
        else if ($8 == 119) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 3: // $bb2
        $iflags=0; //@line 468 "gdbmmodule.c"
        __label__ = 8; break; //@line 468 "gdbmmodule.c"
      case 4: // $bb3
        $iflags=1; //@line 471 "gdbmmodule.c"
        __label__ = 8; break; //@line 471 "gdbmmodule.c"
      case 5: // $bb4
        $iflags=2; //@line 474 "gdbmmodule.c"
        __label__ = 8; break; //@line 474 "gdbmmodule.c"
      case 6: // $bb5
        $iflags=3; //@line 477 "gdbmmodule.c"
        __label__ = 8; break; //@line 477 "gdbmmodule.c"
      case 7: // $bb6
        var $9=HEAP[_DbmError]; //@line 480 "gdbmmodule.c"
        _PyErr_SetString($9, __str18); //@line 480 "gdbmmodule.c"
        $1=0; //@line 482 "gdbmmodule.c"
        __label__ = 27; break; //@line 482 "gdbmmodule.c"
      case 8: // $bb7
        var $10=HEAP[$flags]; //@line 484 "gdbmmodule.c"
        var $11=$10+1; //@line 484 "gdbmmodule.c"
        HEAP[$flags]=$11; //@line 484 "gdbmmodule.c"
        __label__ = 15; break; //@line 484 "gdbmmodule.c"
      case 9: // $bb8
        var $12=HEAP[$flags]; //@line 486 "gdbmmodule.c"
        var $13=HEAP[$12]; //@line 486 "gdbmmodule.c"
        var $14=($13); //@line 486 "gdbmmodule.c"
        if ($14 == 102) {
          __label__ = 10; break;
        }
        else if ($14 == 115) {
          __label__ = 11; break;
        }
        else if ($14 == 117) {
          __label__ = 12; break;
        }
        else {
        __label__ = 13; break;
        }
        
      case 10: // $bb9
        var $15=$iflags; //@line 489 "gdbmmodule.c"
        var $16=($15) | 16; //@line 489 "gdbmmodule.c"
        $iflags=$16; //@line 489 "gdbmmodule.c"
        __label__ = 14; break; //@line 489 "gdbmmodule.c"
      case 11: // $bb10
        var $17=$iflags; //@line 494 "gdbmmodule.c"
        var $18=($17) | 32; //@line 494 "gdbmmodule.c"
        $iflags=$18; //@line 494 "gdbmmodule.c"
        __label__ = 14; break; //@line 494 "gdbmmodule.c"
      case 12: // $bb11
        var $19=$iflags; //@line 499 "gdbmmodule.c"
        var $20=($19) | 64; //@line 499 "gdbmmodule.c"
        $iflags=$20; //@line 499 "gdbmmodule.c"
        __label__ = 14; break; //@line 499 "gdbmmodule.c"
      case 13: // $bb12
        var $21=HEAP[$flags]; //@line 503 "gdbmmodule.c"
        var $22=HEAP[$21]; //@line 503 "gdbmmodule.c"
        var $23=($22); //@line 503 "gdbmmodule.c"
        var $buf13=$buf; //@line 503 "gdbmmodule.c"
        var $24=_PyOS_snprintf($buf13, 40, __str19, $23); //@line 503 "gdbmmodule.c"
        var $25=HEAP[_DbmError]; //@line 505 "gdbmmodule.c"
        var $buf14=$buf; //@line 505 "gdbmmodule.c"
        _PyErr_SetString($25, $buf14); //@line 505 "gdbmmodule.c"
        $1=0; //@line 506 "gdbmmodule.c"
        __label__ = 27; break; //@line 506 "gdbmmodule.c"
      case 14: // $bb15
        var $26=HEAP[$flags]; //@line 484 "gdbmmodule.c"
        var $27=$26+1; //@line 484 "gdbmmodule.c"
        HEAP[$flags]=$27; //@line 484 "gdbmmodule.c"
        __label__ = 15; break; //@line 484 "gdbmmodule.c"
      case 15: // $bb16
        var $28=HEAP[$flags]; //@line 484 "gdbmmodule.c"
        var $29=HEAP[$28]; //@line 484 "gdbmmodule.c"
        var $30=($29)!=0; //@line 484 "gdbmmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 484 "gdbmmodule.c"
      case 16: // $bb17
        var $31=HEAP[$mode]; //@line 510 "gdbmmodule.c"
        var $32=HEAP[$name]; //@line 510 "gdbmmodule.c"
        var $33=$iflags; //@line 510 "gdbmmodule.c"
        $file_addr_i=$32;
        $flags_addr_i=$33;
        $mode_addr_i=$31;
        var $34=__PyObject_New(_Dbmtype); //@line 63 "gdbmmodule.c"
        var $35=$34; //@line 63 "gdbmmodule.c"
        $dp_i=$35; //@line 63 "gdbmmodule.c"
        var $36=$dp_i; //@line 64 "gdbmmodule.c"
        var $37=($36)==0; //@line 64 "gdbmmodule.c"
        if ($37) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 64 "gdbmmodule.c"
      case 17: // $bb_i
        $0=0; //@line 65 "gdbmmodule.c"
        __label__ = 26; break; //@line 65 "gdbmmodule.c"
      case 18: // $bb1_i
        var $38=$dp_i; //@line 66 "gdbmmodule.c"
        var $39=$38+8; //@line 66 "gdbmmodule.c"
        HEAP[$39]=-1; //@line 66 "gdbmmodule.c"
        var $40=___errno_location(); //@line 67 "gdbmmodule.c"
        HEAP[$40]=0; //@line 67 "gdbmmodule.c"
        var $41=$file_addr_i; //@line 68 "gdbmmodule.c"
        var $42=$flags_addr_i; //@line 68 "gdbmmodule.c"
        var $43=$mode_addr_i; //@line 68 "gdbmmodule.c"
        var $44=_gdbm_open($41, 0, $42, $43, 0); //@line 68 "gdbmmodule.c"
        var $45=$dp_i; //@line 68 "gdbmmodule.c"
        var $46=$45+12; //@line 68 "gdbmmodule.c"
        HEAP[$46]=$44; //@line 68 "gdbmmodule.c"
        var $47=$dp_i; //@line 68 "gdbmmodule.c"
        var $48=$47+12; //@line 68 "gdbmmodule.c"
        var $49=HEAP[$48]; //@line 68 "gdbmmodule.c"
        var $50=($49)==0; //@line 68 "gdbmmodule.c"
        if ($50) { __label__ = 19; break; } else { __label__ = 25; break; } //@line 68 "gdbmmodule.c"
      case 19: // $bb2_i
        var $51=___errno_location(); //@line 69 "gdbmmodule.c"
        var $52=HEAP[$51]; //@line 69 "gdbmmodule.c"
        var $53=($52)!=0; //@line 69 "gdbmmodule.c"
        if ($53) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 69 "gdbmmodule.c"
      case 20: // $bb3_i
        var $54=HEAP[_DbmError]; //@line 70 "gdbmmodule.c"
        var $55=_PyErr_SetFromErrno($54); //@line 70 "gdbmmodule.c"
        __label__ = 22; break; //@line 70 "gdbmmodule.c"
      case 21: // $bb4_i
        var $56=HEAP[_gdbm_errno]; //@line 72 "gdbmmodule.c"
        var $57=_gdbm_strerror($56); //@line 72 "gdbmmodule.c"
        var $58=HEAP[_DbmError]; //@line 72 "gdbmmodule.c"
        _PyErr_SetString($58, $57); //@line 72 "gdbmmodule.c"
        __label__ = 22; break; //@line 72 "gdbmmodule.c"
      case 22: // $bb5_i
        var $59=$dp_i; //@line 73 "gdbmmodule.c"
        var $60=$59; //@line 73 "gdbmmodule.c"
        var $61=$60; //@line 73 "gdbmmodule.c"
        var $62=HEAP[$61]; //@line 73 "gdbmmodule.c"
        var $63=($62) - 1; //@line 73 "gdbmmodule.c"
        var $64=$60; //@line 73 "gdbmmodule.c"
        HEAP[$64]=$63; //@line 73 "gdbmmodule.c"
        var $65=$60; //@line 73 "gdbmmodule.c"
        var $66=HEAP[$65]; //@line 73 "gdbmmodule.c"
        var $67=($66)==0; //@line 73 "gdbmmodule.c"
        if ($67) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 73 "gdbmmodule.c"
      case 23: // $bb6_i
        var $68=$dp_i; //@line 73 "gdbmmodule.c"
        var $69=$68; //@line 73 "gdbmmodule.c"
        var $70=$69+4; //@line 73 "gdbmmodule.c"
        var $71=HEAP[$70]; //@line 73 "gdbmmodule.c"
        var $72=$71+24; //@line 73 "gdbmmodule.c"
        var $73=HEAP[$72]; //@line 73 "gdbmmodule.c"
        var $74=$dp_i; //@line 73 "gdbmmodule.c"
        var $75=$74; //@line 73 "gdbmmodule.c"
        FUNCTION_TABLE[$73]($75); //@line 73 "gdbmmodule.c"
        __label__ = 24; break; //@line 73 "gdbmmodule.c"
      case 24: // $bb7_i
        $0=0; //@line 74 "gdbmmodule.c"
        __label__ = 26; break; //@line 74 "gdbmmodule.c"
      case 25: // $bb8_i
        var $76=$dp_i; //@line 76 "gdbmmodule.c"
        var $77=$76; //@line 76 "gdbmmodule.c"
        $0=$77; //@line 76 "gdbmmodule.c"
        __label__ = 26; break; //@line 76 "gdbmmodule.c"
      case 26: // $newdbmobject_exit
        var $78=$0; //@line 65 "gdbmmodule.c"
        $retval_i=$78; //@line 65 "gdbmmodule.c"
        var $retval10_i=$retval_i; //@line 65 "gdbmmodule.c"
        $1=$retval10_i; //@line 510 "gdbmmodule.c"
        __label__ = 27; break; //@line 510 "gdbmmodule.c"
      case 27: // $bb18
        var $79=$1; //@line 465 "gdbmmodule.c"
        $retval=$79; //@line 465 "gdbmmodule.c"
        var $retval19=$retval; //@line 465 "gdbmmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 465 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initgdbm() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $s;
        HEAP[_Dbmtype+4]=_PyType_Type; //@line 534 "gdbmmodule.c"
        var $0=_Py_InitModule4(__str21, _dbmmodule_methods, _gdbmmodule__doc__, 0, 1013); //@line 535 "gdbmmodule.c"
        $m=$0; //@line 535 "gdbmmodule.c"
        var $1=$m; //@line 538 "gdbmmodule.c"
        var $2=($1)==0; //@line 538 "gdbmmodule.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 538 "gdbmmodule.c"
      case 1: // $bb
        var $3=$m; //@line 540 "gdbmmodule.c"
        var $4=_PyModule_GetDict($3); //@line 540 "gdbmmodule.c"
        $d=$4; //@line 540 "gdbmmodule.c"
        var $5=_PyErr_NewException(__str22, 0, 0); //@line 541 "gdbmmodule.c"
        HEAP[_DbmError]=$5; //@line 541 "gdbmmodule.c"
        var $6=HEAP[_DbmError]; //@line 542 "gdbmmodule.c"
        var $7=($6)!=0; //@line 542 "gdbmmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 542 "gdbmmodule.c"
      case 2: // $bb1
        var $8=HEAP[_DbmError]; //@line 543 "gdbmmodule.c"
        var $9=$d; //@line 543 "gdbmmodule.c"
        var $10=_PyDict_SetItemString($9, __str23, $8); //@line 543 "gdbmmodule.c"
        var $11=_PyString_FromString(_dbmmodule_open_flags); //@line 544 "gdbmmodule.c"
        $s=$11; //@line 544 "gdbmmodule.c"
        var $12=$d; //@line 545 "gdbmmodule.c"
        var $13=$s; //@line 545 "gdbmmodule.c"
        var $14=_PyDict_SetItemString($12, __str24, $13); //@line 545 "gdbmmodule.c"
        var $15=$s; //@line 546 "gdbmmodule.c"
        var $16=$15; //@line 546 "gdbmmodule.c"
        var $17=HEAP[$16]; //@line 546 "gdbmmodule.c"
        var $18=($17) - 1; //@line 546 "gdbmmodule.c"
        var $19=$s; //@line 546 "gdbmmodule.c"
        var $20=$19; //@line 546 "gdbmmodule.c"
        HEAP[$20]=$18; //@line 546 "gdbmmodule.c"
        var $21=$s; //@line 546 "gdbmmodule.c"
        var $22=$21; //@line 546 "gdbmmodule.c"
        var $23=HEAP[$22]; //@line 546 "gdbmmodule.c"
        var $24=($23)==0; //@line 546 "gdbmmodule.c"
        if ($24) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 546 "gdbmmodule.c"
      case 3: // $bb2
        var $25=$s; //@line 546 "gdbmmodule.c"
        var $26=$25+4; //@line 546 "gdbmmodule.c"
        var $27=HEAP[$26]; //@line 546 "gdbmmodule.c"
        var $28=$27+24; //@line 546 "gdbmmodule.c"
        var $29=HEAP[$28]; //@line 546 "gdbmmodule.c"
        var $30=$s; //@line 546 "gdbmmodule.c"
        FUNCTION_TABLE[$29]($30); //@line 546 "gdbmmodule.c"
        __label__ = 4; break; //@line 546 "gdbmmodule.c"
      case 4: // $return
        ;
        return; //@line 539 "gdbmmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initgdbm"] = _initgdbm;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_dbm_length,0,_dbm_contains,0,_dbm_subscript,0,_dbm_ass_sub,0,_dbm_close,0,_dbm_keys,0,_dbm_has_key,0,_dbm_firstkey,0,_dbm_nextkey,0,_dbm_reorganize,0,_dbm_sync,0,_dbm_dealloc,0,_dbm_getattr,0,_dbmopen,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_gdbmmodule__doc__=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,110,32,105,110,116,101,114,102,97,99,101,32,116,111,32,116,104,101,32,71,78,85,32,68,66,77,32,40,71,68,66,77,41,32,108,105,98,114,97,114,121,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,105,115,32,113,117,105,116,101,32,115,105,109,105,108,97,114,32,116,111,32,116,104,101,32,100,98,109,32,109,111,100,117,108,101,44,32,98,117,116,32,117,115,101,115,32,71,68,66,77,32,105,110,115,116,101,97,100,32,116,111,10,112,114,111,118,105,100,101,32,115,111,109,101,32,97,100,100,105,116,105,111,110,97,108,32,102,117,110,99,116,105,111,110,97,108,105,116,121,46,32,80,108,101,97,115,101,32,110,111,116,101,32,116,104,97,116,32,116,104,101,32,102,105,108,101,32,102,111,114,109,97,116,115,10,99,114,101,97,116,101,100,32,98,121,32,71,68,66,77,32,97,110,100,32,100,98,109,32,97,114,101,32,105,110,99,111,109,112,97,116,105,98,108,101,46,32,10,10,71,68,66,77,32,111,98,106,101,99,116,115,32,98,101,104,97,118,101,32,108,105,107,101,32,109,97,112,112,105,110,103,115,32,40,100,105,99,116,105,111,110,97,114,105,101,115,41,44,32,101,120,99,101,112,116,32,116,104,97,116,32,107,101,121,115,32,97,110,100,10,118,97,108,117,101,115,32,97,114,101,32,97,108,119,97,121,115,32,115,116,114,105,110,103,115,46,32,80,114,105,110,116,105,110,103,32,97,32,71,68,66,77,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,112,114,105,110,116,32,116,104,101,10,107,101,121,115,32,97,110,100,32,118,97,108,117,101,115,44,32,97,110,100,32,116,104,101,32,105,116,101,109,115,40,41,32,97,110,100,32,118,97,108,117,101,115,40,41,32,109,101,116,104,111,100,115,32,97,114,101,32,110,111,116,10,115,117,112,112,111,114,116,101,100,46,0] /* This module provides */, "i8", ALLOC_NORMAL);
_gdbm_object__doc__=allocate([84,104,105,115,32,111,98,106,101,99,116,32,114,101,112,114,101,115,101,110,116,115,32,97,32,71,68,66,77,32,100,97,116,97,98,97,115,101,46,10,71,68,66,77,32,111,98,106,101,99,116,115,32,98,101,104,97,118,101,32,108,105,107,101,32,109,97,112,112,105,110,103,115,32,40,100,105,99,116,105,111,110,97,114,105,101,115,41,44,32,101,120,99,101,112,116,32,116,104,97,116,32,107,101,121,115,32,97,110,100,10,118,97,108,117,101,115,32,97,114,101,32,97,108,119,97,121,115,32,115,116,114,105,110,103,115,46,32,80,114,105,110,116,105,110,103,32,97,32,71,68,66,77,32,111,98,106,101,99,116,32,100,111,101,115,110,39,116,32,112,114,105,110,116,32,116,104,101,10,107,101,121,115,32,97,110,100,32,118,97,108,117,101,115,44,32,97,110,100,32,116,104,101,32,105,116,101,109,115,40,41,32,97,110,100,32,118,97,108,117,101,115,40,41,32,109,101,116,104,111,100,115,32,97,114,101,32,110,111,116,10,115,117,112,112,111,114,116,101,100,46,10,10,71,68,66,77,32,111,98,106,101,99,116,115,32,97,108,115,111,32,115,117,112,112,111,114,116,32,97,100,100,105,116,105,111,110,97,108,32,111,112,101,114,97,116,105,111,110,115,32,115,117,99,104,32,97,115,32,102,105,114,115,116,107,101,121,44,10,110,101,120,116,107,101,121,44,32,114,101,111,114,103,97,110,105,122,101,44,32,97,110,100,32,115,121,110,99,46,0] /* This object represen */, "i8", ALLOC_NORMAL);
_DbmError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([71,68,66,77,32,111,98,106,101,99,116,32,104,97,115,32,97,108,114,101,97,100,121,32,98,101,101,110,32,99,108,111,115,101,100,0] /* GDBM object has alre */, "i8", ALLOC_NORMAL);
__str1=allocate([115,35,0] /* s#\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([103,100,98,109,32,109,97,112,112,105,110,103,115,32,104,97,118,101,32,115,116,114,105,110,103,32,105,110,100,105,99,101,115,32,111,110,108,121,0] /* gdbm mappings have s */, "i8", ALLOC_NORMAL);
__str3=allocate([103,100,98,109,32,109,97,112,112,105,110,103,115,32,104,97,118,101,32,115,116,114,105,110,103,32,101,108,101,109,101,110,116,115,32,111,110,108,121,0] /* gdbm mappings have s */, "i8", ALLOC_NORMAL);
__str4=allocate([103,100,98,109,32,107,101,121,32,109,117,115,116,32,98,101,32,115,116,114,105,110,103,44,32,110,111,116,32,37,46,49,48,48,115,0] /* gdbm key must be str */, "i8", ALLOC_NORMAL);
_dbm_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0], ALLOC_NORMAL);
_dbm_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
_dbm_close__doc__=allocate([99,108,111,115,101,40,41,32,45,62,32,78,111,110,101,10,67,108,111,115,101,115,32,116,104,101,32,100,97,116,97,98,97,115,101,46,0] /* close() -> None\0ACl */, "i8", ALLOC_NORMAL);
_dbm_keys__doc__=allocate([107,101,121,115,40,41,32,45,62,32,108,105,115,116,95,111,102,95,107,101,121,115,10,71,101,116,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,107,101,121,115,32,105,110,32,116,104,101,32,100,97,116,97,98,97,115,101,46,0] /* keys() -> list_of_ke */, "i8", ALLOC_NORMAL);
__str5=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,103,100,98,109,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/g */, "i8", ALLOC_NORMAL);
_dbm_has_key__doc__=allocate([104,97,115,95,107,101,121,40,107,101,121,41,32,45,62,32,98,111,111,108,101,97,110,10,70,105,110,100,32,111,117,116,32,119,104,101,116,104,101,114,32,111,114,32,110,111,116,32,116,104,101,32,100,97,116,97,98,97,115,101,32,99,111,110,116,97,105,110,115,32,97,32,103,105,118,101,110,32,107,101,121,46,0] /* has_key(key) -> bool */, "i8", ALLOC_NORMAL);
__str6=allocate([115,35,58,104,97,115,95,107,101,121,0] /* s#:has_key\00 */, "i8", ALLOC_NORMAL);
_dbm_firstkey__doc__=allocate([102,105,114,115,116,107,101,121,40,41,32,45,62,32,107,101,121,10,73,116,39,115,32,112,111,115,115,105,98,108,101,32,116,111,32,108,111,111,112,32,111,118,101,114,32,101,118,101,114,121,32,107,101,121,32,105,110,32,116,104,101,32,100,97,116,97,98,97,115,101,32,117,115,105,110,103,32,116,104,105,115,32,109,101,116,104,111,100,10,97,110,100,32,116,104,101,32,110,101,120,116,107,101,121,40,41,32,109,101,116,104,111,100,46,32,84,104,101,32,116,114,97,118,101,114,115,97,108,32,105,115,32,111,114,100,101,114,101,100,32,98,121,32,71,68,66,77,39,115,32,105,110,116,101,114,110,97,108,10,104,97,115,104,32,118,97,108,117,101,115,44,32,97,110,100,32,119,111,110,39,116,32,98,101,32,115,111,114,116,101,100,32,98,121,32,116,104,101,32,107,101,121,32,118,97,108,117,101,115,46,32,84,104,105,115,32,109,101,116,104,111,100,10,114,101,116,117,114,110,115,32,116,104,101,32,115,116,97,114,116,105,110,103,32,107,101,121,46,0] /* firstkey() -> key\0A */, "i8", ALLOC_NORMAL);
_dbm_nextkey__doc__=allocate([110,101,120,116,107,101,121,40,107,101,121,41,32,45,62,32,110,101,120,116,95,107,101,121,10,82,101,116,117,114,110,115,32,116,104,101,32,107,101,121,32,116,104,97,116,32,102,111,108,108,111,119,115,32,107,101,121,32,105,110,32,116,104,101,32,116,114,97,118,101,114,115,97,108,46,10,84,104,101,32,102,111,108,108,111,119,105,110,103,32,99,111,100,101,32,112,114,105,110,116,115,32,101,118,101,114,121,32,107,101,121,32,105,110,32,116,104,101,32,100,97,116,97,98,97,115,101,32,100,98,44,32,119,105,116,104,111,117,116,32,104,97,118,105,110,103,10,116,111,32,99,114,101,97,116,101,32,97,32,108,105,115,116,32,105,110,32,109,101,109,111,114,121,32,116,104,97,116,32,99,111,110,116,97,105,110,115,32,116,104,101,109,32,97,108,108,58,10,10,32,32,32,32,32,32,107,32,61,32,100,98,46,102,105,114,115,116,107,101,121,40,41,10,32,32,32,32,32,32,119,104,105,108,101,32,107,32,33,61,32,78,111,110,101,58,10,32,32,32,32,32,32,32,32,32,32,112,114,105,110,116,32,107,10,32,32,32,32,32,32,32,32,32,32,107,32,61,32,100,98,46,110,101,120,116,107,101,121,40,107,41,0] /* nextkey(key) -> next */, "i8", ALLOC_NORMAL);
__str7=allocate([115,35,58,110,101,120,116,107,101,121,0] /* s#:nextkey\00 */, "i8", ALLOC_NORMAL);
_dbm_reorganize__doc__=allocate([114,101,111,114,103,97,110,105,122,101,40,41,32,45,62,32,78,111,110,101,10,73,102,32,121,111,117,32,104,97,118,101,32,99,97,114,114,105,101,100,32,111,117,116,32,97,32,108,111,116,32,111,102,32,100,101,108,101,116,105,111,110,115,32,97,110,100,32,119,111,117,108,100,32,108,105,107,101,32,116,111,32,115,104,114,105,110,107,10,116,104,101,32,115,112,97,99,101,32,117,115,101,100,32,98,121,32,116,104,101,32,71,68,66,77,32,102,105,108,101,44,32,116,104,105,115,32,114,111,117,116,105,110,101,32,119,105,108,108,32,114,101,111,114,103,97,110,105,122,101,32,116,104,101,10,100,97,116,97,98,97,115,101,46,32,71,68,66,77,32,119,105,108,108,32,110,111,116,32,115,104,111,114,116,101,110,32,116,104,101,32,108,101,110,103,116,104,32,111,102,32,97,32,100,97,116,97,98,97,115,101,32,102,105,108,101,32,101,120,99,101,112,116,10,98,121,32,117,115,105,110,103,32,116,104,105,115,32,114,101,111,114,103,97,110,105,122,97,116,105,111,110,59,32,111,116,104,101,114,119,105,115,101,44,32,100,101,108,101,116,101,100,32,102,105,108,101,32,115,112,97,99,101,32,119,105,108,108,32,98,101,10,107,101,112,116,32,97,110,100,32,114,101,117,115,101,100,32,97,115,32,110,101,119,32,40,107,101,121,44,118,97,108,117,101,41,32,112,97,105,114,115,32,97,114,101,32,97,100,100,101,100,46,0] /* reorganize() -> None */, "i8", ALLOC_NORMAL);
_dbm_sync__doc__=allocate([115,121,110,99,40,41,32,45,62,32,78,111,110,101,10,87,104,101,110,32,116,104,101,32,100,97,116,97,98,97,115,101,32,104,97,115,32,98,101,101,110,32,111,112,101,110,101,100,32,105,110,32,102,97,115,116,32,109,111,100,101,44,32,116,104,105,115,32,109,101,116,104,111,100,32,102,111,114,99,101,115,10,97,110,121,32,117,110,119,114,105,116,116,101,110,32,100,97,116,97,32,116,111,32,98,101,32,119,114,105,116,116,101,110,32,116,111,32,116,104,101,32,100,105,115,107,46,0] /* sync() -> None\0AWhe */, "i8", ALLOC_NORMAL);
__str8=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([107,101,121,115,0] /* keys\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([104,97,115,95,107,101,121,0] /* has_key\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([102,105,114,115,116,107,101,121,0] /* firstkey\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([110,101,120,116,107,101,121,0] /* nextkey\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([114,101,111,114,103,97,110,105,122,101,0] /* reorganize\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([115,121,110,99,0] /* sync\00 */, "i8", ALLOC_NORMAL);
_dbm_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str15=allocate([103,100,98,109,46,103,100,98,109,0] /* gdbm.gdbm\00 */, "i8", ALLOC_NORMAL);
_Dbmtype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_dbmopen__doc__=allocate([111,112,101,110,40,102,105,108,101,110,97,109,101,44,32,91,102,108,97,103,115,44,32,91,109,111,100,101,93,93,41,32,32,45,62,32,100,98,109,95,111,98,106,101,99,116,10,79,112,101,110,32,97,32,100,98,109,32,100,97,116,97,98,97,115,101,32,97,110,100,32,114,101,116,117,114,110,32,97,32,100,98,109,32,111,98,106,101,99,116,46,32,84,104,101,32,102,105,108,101,110,97,109,101,32,97,114,103,117,109,101,110,116,32,105,115,10,116,104,101,32,110,97,109,101,32,111,102,32,116,104,101,32,100,97,116,97,98,97,115,101,32,102,105,108,101,46,10,10,84,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,39,114,39,32,40,116,111,32,111,112,101,110,32,97,110,32,101,120,105,115,116,105,110,103,32,100,97,116,97,98,97,115,101,10,102,111,114,32,114,101,97,100,105,110,103,32,111,110,108,121,32,45,45,32,100,101,102,97,117,108,116,41,44,32,39,119,39,32,40,116,111,32,111,112,101,110,32,97,110,32,101,120,105,115,116,105,110,103,32,100,97,116,97,98,97,115,101,32,102,111,114,10,114,101,97,100,105,110,103,32,97,110,100,32,119,114,105,116,105,110,103,41,44,32,39,99,39,32,40,119,104,105,99,104,32,99,114,101,97,116,101,115,32,116,104,101,32,100,97,116,97,98,97,115,101,32,105,102,32,105,116,32,100,111,101,115,110,39,116,10,101,120,105,115,116,41,44,32,111,114,32,39,110,39,32,40,119,104,105,99,104,32,97,108,119,97,121,115,32,99,114,101,97,116,101,115,32,97,32,110,101,119,32,101,109,112,116,121,32,100,97,116,97,98,97,115,101,41,46,10,10,83,111,109,101,32,118,101,114,115,105,111,110,115,32,111,102,32,103,100,98,109,32,115,117,112,112,111,114,116,32,97,100,100,105,116,105,111,110,97,108,32,102,108,97,103,115,32,119,104,105,99,104,32,109,117,115,116,32,98,101,10,97,112,112,101,110,100,101,100,32,116,111,32,111,110,101,32,111,102,32,116,104,101,32,102,108,97,103,115,32,100,101,115,99,114,105,98,101,100,32,97,98,111,118,101,46,32,84,104,101,32,109,111,100,117,108,101,32,99,111,110,115,116,97,110,116,10,39,111,112,101,110,95,102,108,97,103,115,39,32,105,115,32,97,32,115,116,114,105,110,103,32,111,102,32,118,97,108,105,100,32,97,100,100,105,116,105,111,110,97,108,32,102,108,97,103,115,46,32,84,104,101,32,39,102,39,32,102,108,97,103,10,111,112,101,110,115,32,116,104,101,32,100,97,116,97,98,97,115,101,32,105,110,32,102,97,115,116,32,109,111,100,101,59,32,97,108,116,101,114,101,100,32,100,97,116,97,32,119,105,108,108,32,110,111,116,32,97,117,116,111,109,97,116,105,99,97,108,108,121,10,98,101,32,119,114,105,116,116,101,110,32,116,111,32,116,104,101,32,100,105,115,107,32,97,102,116,101,114,32,101,118,101,114,121,32,99,104,97,110,103,101,46,32,84,104,105,115,32,114,101,115,117,108,116,115,32,105,110,32,102,97,115,116,101,114,10,119,114,105,116,101,115,32,116,111,32,116,104,101,32,100,97,116,97,98,97,115,101,44,32,98,117,116,32,109,97,121,32,114,101,115,117,108,116,32,105,110,32,97,110,32,105,110,99,111,110,115,105,115,116,101,110,116,32,100,97,116,97,98,97,115,101,10,105,102,32,116,104,101,32,112,114,111,103,114,97,109,32,99,114,97,115,104,101,115,32,119,104,105,108,101,32,116,104,101,32,100,97,116,97,98,97,115,101,32,105,115,32,115,116,105,108,108,32,111,112,101,110,46,32,85,115,101,32,116,104,101,10,115,121,110,99,40,41,32,109,101,116,104,111,100,32,116,111,32,102,111,114,99,101,32,97,110,121,32,117,110,119,114,105,116,116,101,110,32,100,97,116,97,32,116,111,32,98,101,32,119,114,105,116,116,101,110,32,116,111,32,116,104,101,32,100,105,115,107,46,10,84,104,101,32,39,115,39,32,102,108,97,103,32,99,97,117,115,101,115,32,97,108,108,32,100,97,116,97,98,97,115,101,32,111,112,101,114,97,116,105,111,110,115,32,116,111,32,98,101,32,115,121,110,99,104,114,111,110,105,122,101,100,32,116,111,10,100,105,115,107,46,32,84,104,101,32,39,117,39,32,102,108,97,103,32,100,105,115,97,98,108,101,115,32,108,111,99,107,105,110,103,32,111,102,32,116,104,101,32,100,97,116,97,98,97,115,101,32,102,105,108,101,46,10,10,84,104,101,32,111,112,116,105,111,110,97,108,32,109,111,100,101,32,97,114,103,117,109,101,110,116,32,105,115,32,116,104,101,32,85,110,105,120,32,109,111,100,101,32,111,102,32,116,104,101,32,102,105,108,101,44,32,117,115,101,100,32,111,110,108,121,10,119,104,101,110,32,116,104,101,32,100,97,116,97,98,97,115,101,32,104,97,115,32,116,111,32,98,101,32,99,114,101,97,116,101,100,46,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,111,99,116,97,108,32,48,54,54,54,46,32,0] /* open(filename, [flag */, "i8", ALLOC_NORMAL);
__str16=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([115,124,115,105,58,111,112,101,110,0] /* s|si:open\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([70,105,114,115,116,32,102,108,97,103,32,109,117,115,116,32,98,101,32,111,110,101,32,111,102,32,39,114,39,44,32,39,119,39,44,32,39,99,39,32,111,114,32,39,110,39,0] /* First flag must be o */, "i8", ALLOC_NORMAL);
__str19=allocate([70,108,97,103,32,39,37,99,39,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,46,0] /* Flag '%c' is not sup */, "i8", ALLOC_NORMAL);
_dbmmodule_open_flags=allocate([114,119,99,110,102,115,117,0] /* rwcnfsu\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([111,112,101,110,0] /* open\00 */, "i8", ALLOC_NORMAL);
_dbmmodule_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str21=allocate([103,100,98,109,0] /* gdbm\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([103,100,98,109,46,101,114,114,111,114,0] /* gdbm.error\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([111,112,101,110,95,102,108,97,103,115,0] /* open_flags\00 */, "i8", ALLOC_NORMAL);
HEAP[_dbm_as_sequence]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_dbm_as_sequence+28]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_dbm_as_mapping]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_dbm_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_dbm_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_dbm_methods]=__str8;
HEAP[_dbm_methods+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_dbm_methods+12]=_dbm_close__doc__;
HEAP[_dbm_methods+16]=__str9;
HEAP[_dbm_methods+20]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_dbm_methods+28]=_dbm_keys__doc__;
HEAP[_dbm_methods+32]=__str10;
HEAP[_dbm_methods+36]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_dbm_methods+44]=_dbm_has_key__doc__;
HEAP[_dbm_methods+48]=__str11;
HEAP[_dbm_methods+52]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_dbm_methods+60]=_dbm_firstkey__doc__;
HEAP[_dbm_methods+64]=__str12;
HEAP[_dbm_methods+68]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_dbm_methods+76]=_dbm_nextkey__doc__;
HEAP[_dbm_methods+80]=__str13;
HEAP[_dbm_methods+84]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_dbm_methods+92]=_dbm_reorganize__doc__;
HEAP[_dbm_methods+96]=__str14;
HEAP[_dbm_methods+100]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_dbm_methods+108]=_dbm_sync__doc__;
HEAP[_Dbmtype+12]=__str15;
HEAP[_Dbmtype+24]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_Dbmtype+32]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_Dbmtype+52]=_dbm_as_sequence;
HEAP[_Dbmtype+56]=_dbm_as_mapping;
HEAP[_Dbmtype+88]=_gdbm_object__doc__;
HEAP[_dbmmodule_methods]=__str20;
HEAP[_dbmmodule_methods+4]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_dbmmodule_methods+12]=_dbmopen__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

