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



var $0___SIZE = 272; // %0
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _table_a2b_hqx;
var _table_b2a_hqx;
var _table_a2b_base64;
var _table_b2a_base64;
var _crctab_hqx;
var _doc_a2b_uu;
var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8323;
var _Error;
var __str3;
var __str4;
var _doc_b2a_uu;
var __str5;
var __str6;
var _doc_a2b_base64;
var __str7;
var ___PRETTY_FUNCTION___8505;
var __str8;
var __str9;
var _doc_b2a_base64;
var __str10;
var __str11;
var ___PRETTY_FUNCTION___8609;
var __str12;
var _doc_a2b_hqx;
var __str13;
var __str14;
var ___PRETTY_FUNCTION___8689;
var _Incomplete;
var __str15;
var __str16;
var _doc_rlecode_hqx;
var __str17;
var ___PRETTY_FUNCTION___8803;
var _doc_b2a_hqx;
var __str18;
var ___PRETTY_FUNCTION___8876;
var _doc_rledecode_hqx;
var __str19;
var __str20;
var ___PRETTY_FUNCTION___8949;
var __str21;
var _doc_crc_hqx;
var __str22;
var __str23;
var _doc_crc32;
var _crc_32_tab;
var __str24;
var __str25;
var __str26;
var ___PRETTY_FUNCTION___9264;
var _doc_hexlify;
var __str27;
var ___PRETTY_FUNCTION___9339;
var _PyExc_TypeError;
var __str28;
var __str29;
var _doc_unhexlify;
var _table_hex;
var _doc_a2b_qp;
var __str30;
var _kwlist_9405;
var __str31;
var __str32;
var __str33;
var _doc_b2a_qp;
var __str34;
var _kwlist_9526;
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
var _binascii_module_methods;
var _doc_binascii;
var __str53;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;


























  function _binascii_a2b_uu($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 98; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 98);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_1=__stackBase__+12;
        var $0=__stackBase__+13;
        var $pascii=__stackBase__+17;
        var $ascii_data=__stackBase__+69;
        var $bin_data=__stackBase__+73;
        var $leftbits=__stackBase__+77;
        var $this_ch=__stackBase__+81;
        var $leftchar=__stackBase__+82;
        var $rv=__stackBase__+86;
        var $ascii_len=__stackBase__+90;
        var $bin_len=__stackBase__+94;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 193 "binascii.c"
        HEAP[$leftchar]=0; //@line 195 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 199 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str)&4294967295), $pascii); //@line 199 "binascii.c"
        var $3=((($2))|0)==0; //@line 199 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 199 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 200 "binascii.c"
        __label__ = 34; break; //@line 200 "binascii.c"
      case 2: // $bb1
        var $4=(($pascii)&4294967295); //@line 201 "binascii.c"
        var $5=HEAP[$4]; //@line 201 "binascii.c"
        HEAP[$ascii_data]=$5; //@line 201 "binascii.c"
        var $6=(($pascii+8)&4294967295); //@line 202 "binascii.c"
        var $7=HEAP[$6]; //@line 202 "binascii.c"
        HEAP[$ascii_len]=$7; //@line 202 "binascii.c"
        var $8=HEAP[$ascii_len]; //@line 204 "binascii.c"
        var $9=((($8))|0) < 0; //@line 204 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 204 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str1)&4294967295), ((__str2)&4294967295), 204, ((___PRETTY_FUNCTION___8323)&4294967295)); //@line 204 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 173"; //@line 204 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$ascii_data]; //@line 207 "binascii.c"
        var $11=HEAP[$10]; //@line 207 "binascii.c"
        var $12=unSign(($11), 8, 0); //@line 207 "binascii.c"
        var $13=((($12) - 32)&4294967295); //@line 207 "binascii.c"
        var $14=($13) & 63; //@line 207 "binascii.c"
        HEAP[$bin_len]=$14; //@line 207 "binascii.c"
        var $15=HEAP[$ascii_data]; //@line 207 "binascii.c"
        var $16=(($15+1)&4294967295); //@line 207 "binascii.c"
        HEAP[$ascii_data]=$16; //@line 207 "binascii.c"
        var $17=HEAP[$ascii_len]; //@line 208 "binascii.c"
        var $18=((($17) - 1)&4294967295); //@line 208 "binascii.c"
        HEAP[$ascii_len]=$18; //@line 208 "binascii.c"
        var $19=HEAP[$bin_len]; //@line 211 "binascii.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 211 "binascii.c"
        HEAP[$rv]=$20; //@line 211 "binascii.c"
        var $21=HEAP[$rv]; //@line 211 "binascii.c"
        var $22=($21)==0; //@line 211 "binascii.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 211 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 212 "binascii.c"
        HEAP[$0]=0; //@line 213 "binascii.c"
        __label__ = 34; break; //@line 213 "binascii.c"
      case 6: // $bb5
        var $23=HEAP[$rv]; //@line 215 "binascii.c"
        var $24=$23; //@line 215 "binascii.c"
        var $25=(($24+20)&4294967295); //@line 215 "binascii.c"
        var $26=$25; //@line 215 "binascii.c"
        HEAP[$bin_data]=$26; //@line 215 "binascii.c"
        __label__ = 23; break; //@line 215 "binascii.c"
      case 7: // $bb6
        var $27=HEAP[$ascii_len]; //@line 219 "binascii.c"
        var $28=((($27))|0) > 0; //@line 219 "binascii.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 219 "binascii.c"
      case 8: // $bb7
        var $29=HEAP[$ascii_data]; //@line 219 "binascii.c"
        var $30=HEAP[$29]; //@line 219 "binascii.c"
        HEAP[$iftmp_1]=$30; //@line 219 "binascii.c"
        __label__ = 10; break; //@line 219 "binascii.c"
      case 9: // $bb8
        HEAP[$iftmp_1]=0; //@line 219 "binascii.c"
        __label__ = 10; break; //@line 219 "binascii.c"
      case 10: // $bb9
        var $31=HEAP[$iftmp_1]; //@line 219 "binascii.c"
        HEAP[$this_ch]=$31; //@line 219 "binascii.c"
        var $32=HEAP[$this_ch]; //@line 220 "binascii.c"
        var $33=reSign(($32), 8, 0)==10; //@line 220 "binascii.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 220 "binascii.c"
      case 11: // $bb10
        var $34=HEAP[$this_ch]; //@line 220 "binascii.c"
        var $35=reSign(($34), 8, 0)==13; //@line 220 "binascii.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 220 "binascii.c"
      case 12: // $bb11
        var $36=HEAP[$ascii_len]; //@line 220 "binascii.c"
        var $37=((($36))|0) <= 0; //@line 220 "binascii.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 220 "binascii.c"
      case 13: // $bb12
        HEAP[$this_ch]=0; //@line 225 "binascii.c"
        __label__ = 20; break; //@line 225 "binascii.c"
      case 14: // $bb13
        var $38=HEAP[$this_ch]; //@line 232 "binascii.c"
        var $39=unSign(($38), 8, 0) <= 31; //@line 232 "binascii.c"
        if ($39) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 232 "binascii.c"
      case 15: // $bb14
        var $40=HEAP[$this_ch]; //@line 232 "binascii.c"
        var $41=unSign(($40), 8, 0) > 96; //@line 232 "binascii.c"
        if ($41) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 232 "binascii.c"
      case 16: // $bb15
        var $42=HEAP[_Error]; //@line 233 "binascii.c"
        _PyErr_SetString($42, ((__str3)&4294967295)); //@line 233 "binascii.c"
        _PyBuffer_Release($pascii); //@line 234 "binascii.c"
        var $43=HEAP[$rv]; //@line 235 "binascii.c"
        var $44=(($43)&4294967295); //@line 235 "binascii.c"
        var $45=HEAP[$44]; //@line 235 "binascii.c"
        var $46=((($45) - 1)&4294967295); //@line 235 "binascii.c"
        var $47=HEAP[$rv]; //@line 235 "binascii.c"
        var $48=(($47)&4294967295); //@line 235 "binascii.c"
        HEAP[$48]=$46; //@line 235 "binascii.c"
        var $49=HEAP[$rv]; //@line 235 "binascii.c"
        var $50=(($49)&4294967295); //@line 235 "binascii.c"
        var $51=HEAP[$50]; //@line 235 "binascii.c"
        var $52=((($51))|0)==0; //@line 235 "binascii.c"
        if ($52) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 235 "binascii.c"
      case 17: // $bb16
        var $53=HEAP[$rv]; //@line 235 "binascii.c"
        var $54=(($53+4)&4294967295); //@line 235 "binascii.c"
        var $55=HEAP[$54]; //@line 235 "binascii.c"
        var $56=(($55+24)&4294967295); //@line 235 "binascii.c"
        var $57=HEAP[$56]; //@line 235 "binascii.c"
        var $58=HEAP[$rv]; //@line 235 "binascii.c"
        FUNCTION_TABLE[$57]($58); //@line 235 "binascii.c"
        __label__ = 18; break; //@line 235 "binascii.c"
      case 18: // $bb17
        HEAP[$0]=0; //@line 236 "binascii.c"
        __label__ = 34; break; //@line 236 "binascii.c"
      case 19: // $bb18
        var $59=HEAP[$this_ch]; //@line 238 "binascii.c"
        var $60=((($59) - 32)&255); //@line 238 "binascii.c"
        var $61=($60) & 63; //@line 238 "binascii.c"
        HEAP[$this_ch]=$61; //@line 238 "binascii.c"
        __label__ = 20; break; //@line 238 "binascii.c"
      case 20: // $bb19
        var $62=HEAP[$leftchar]; //@line 244 "binascii.c"
        var $63=($62) << 6; //@line 244 "binascii.c"
        var $64=HEAP[$this_ch]; //@line 244 "binascii.c"
        var $65=unSign(($64), 8, 0); //@line 244 "binascii.c"
        var $66=($63) | ($65); //@line 244 "binascii.c"
        HEAP[$leftchar]=$66; //@line 244 "binascii.c"
        var $67=HEAP[$leftbits]; //@line 245 "binascii.c"
        var $68=((($67) + 6)&4294967295); //@line 245 "binascii.c"
        HEAP[$leftbits]=$68; //@line 245 "binascii.c"
        var $69=HEAP[$leftbits]; //@line 246 "binascii.c"
        var $70=((($69))|0) > 7; //@line 246 "binascii.c"
        if ($70) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 246 "binascii.c"
      case 21: // $bb20
        var $71=HEAP[$leftbits]; //@line 247 "binascii.c"
        var $72=((($71) - 8)&4294967295); //@line 247 "binascii.c"
        HEAP[$leftbits]=$72; //@line 247 "binascii.c"
        var $73=HEAP[$leftchar]; //@line 248 "binascii.c"
        var $74=HEAP[$leftbits]; //@line 248 "binascii.c"
        var $75=((($73))>>>0) >>> ((($74))>>>0); //@line 248 "binascii.c"
        var $76=((($75)) & 255); //@line 248 "binascii.c"
        var $77=HEAP[$bin_data]; //@line 248 "binascii.c"
        HEAP[$77]=$76; //@line 248 "binascii.c"
        var $78=HEAP[$bin_data]; //@line 248 "binascii.c"
        var $79=(($78+1)&4294967295); //@line 248 "binascii.c"
        HEAP[$bin_data]=$79; //@line 248 "binascii.c"
        var $80=HEAP[$leftbits]; //@line 249 "binascii.c"
        var $81=1 << ($80); //@line 249 "binascii.c"
        var $82=((($81) - 1)&4294967295); //@line 249 "binascii.c"
        var $83=HEAP[$leftchar]; //@line 249 "binascii.c"
        var $84=($82) & ($83); //@line 249 "binascii.c"
        HEAP[$leftchar]=$84; //@line 249 "binascii.c"
        var $85=HEAP[$bin_len]; //@line 250 "binascii.c"
        var $86=((($85) - 1)&4294967295); //@line 250 "binascii.c"
        HEAP[$bin_len]=$86; //@line 250 "binascii.c"
        __label__ = 22; break; //@line 250 "binascii.c"
      case 22: // $bb21
        var $87=HEAP[$ascii_len]; //@line 217 "binascii.c"
        var $88=((($87) - 1)&4294967295); //@line 217 "binascii.c"
        HEAP[$ascii_len]=$88; //@line 217 "binascii.c"
        var $89=HEAP[$ascii_data]; //@line 217 "binascii.c"
        var $90=(($89+1)&4294967295); //@line 217 "binascii.c"
        HEAP[$ascii_data]=$90; //@line 217 "binascii.c"
        __label__ = 23; break; //@line 217 "binascii.c"
      case 23: // $bb22
        var $91=HEAP[$bin_len]; //@line 217 "binascii.c"
        var $92=((($91))|0) > 0; //@line 217 "binascii.c"
        if ($92) { __label__ = 7; break; } else { __label__ = 24; break; } //@line 217 "binascii.c"
      case 24: // $bb23
        __label__ = 32; break; //@line 217 "binascii.c"
      case 25: // $bb24
        var $93=HEAP[$ascii_data]; //@line 258 "binascii.c"
        var $94=HEAP[$93]; //@line 258 "binascii.c"
        HEAP[$this_ch]=$94; //@line 258 "binascii.c"
        var $95=HEAP[$ascii_data]; //@line 258 "binascii.c"
        var $96=(($95+1)&4294967295); //@line 258 "binascii.c"
        HEAP[$ascii_data]=$96; //@line 258 "binascii.c"
        var $97=HEAP[$this_ch]; //@line 260 "binascii.c"
        var $98=reSign(($97), 8, 0)!=32; //@line 260 "binascii.c"
        if ($98) { __label__ = 26; break; } else { __label__ = 32; break; } //@line 260 "binascii.c"
      case 26: // $bb25
        var $99=HEAP[$this_ch]; //@line 260 "binascii.c"
        var $100=reSign(($99), 8, 0)!=96; //@line 260 "binascii.c"
        if ($100) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 260 "binascii.c"
      case 27: // $bb26
        var $101=HEAP[$this_ch]; //@line 260 "binascii.c"
        var $102=reSign(($101), 8, 0)!=10; //@line 260 "binascii.c"
        if ($102) { __label__ = 28; break; } else { __label__ = 32; break; } //@line 260 "binascii.c"
      case 28: // $bb27
        var $103=HEAP[$this_ch]; //@line 260 "binascii.c"
        var $104=reSign(($103), 8, 0)!=13; //@line 260 "binascii.c"
        if ($104) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 260 "binascii.c"
      case 29: // $bb28
        var $105=HEAP[_Error]; //@line 262 "binascii.c"
        _PyErr_SetString($105, ((__str4)&4294967295)); //@line 262 "binascii.c"
        _PyBuffer_Release($pascii); //@line 263 "binascii.c"
        var $106=HEAP[$rv]; //@line 264 "binascii.c"
        var $107=(($106)&4294967295); //@line 264 "binascii.c"
        var $108=HEAP[$107]; //@line 264 "binascii.c"
        var $109=((($108) - 1)&4294967295); //@line 264 "binascii.c"
        var $110=HEAP[$rv]; //@line 264 "binascii.c"
        var $111=(($110)&4294967295); //@line 264 "binascii.c"
        HEAP[$111]=$109; //@line 264 "binascii.c"
        var $112=HEAP[$rv]; //@line 264 "binascii.c"
        var $113=(($112)&4294967295); //@line 264 "binascii.c"
        var $114=HEAP[$113]; //@line 264 "binascii.c"
        var $115=((($114))|0)==0; //@line 264 "binascii.c"
        if ($115) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 264 "binascii.c"
      case 30: // $bb29
        var $116=HEAP[$rv]; //@line 264 "binascii.c"
        var $117=(($116+4)&4294967295); //@line 264 "binascii.c"
        var $118=HEAP[$117]; //@line 264 "binascii.c"
        var $119=(($118+24)&4294967295); //@line 264 "binascii.c"
        var $120=HEAP[$119]; //@line 264 "binascii.c"
        var $121=HEAP[$rv]; //@line 264 "binascii.c"
        FUNCTION_TABLE[$120]($121); //@line 264 "binascii.c"
        __label__ = 31; break; //@line 264 "binascii.c"
      case 31: // $bb30
        HEAP[$0]=0; //@line 265 "binascii.c"
        __label__ = 34; break; //@line 265 "binascii.c"
      case 32: // $bb31
        var $122=HEAP[$ascii_len]; //@line 257 "binascii.c"
        var $123=((($122))|0) > 0; //@line 257 "binascii.c"
        var $124=unSign(($123), 1, 0); //@line 257 "binascii.c"
        var $125=HEAP[$ascii_len]; //@line 257 "binascii.c"
        var $126=((($125) - 1)&4294967295); //@line 257 "binascii.c"
        HEAP[$ascii_len]=$126; //@line 257 "binascii.c"
        var $toBool=reSign(($124), 8, 0)!=0; //@line 257 "binascii.c"
        if ($toBool) { __label__ = 25; break; } else { __label__ = 33; break; } //@line 257 "binascii.c"
      case 33: // $bb32
        _PyBuffer_Release($pascii); //@line 268 "binascii.c"
        var $127=HEAP[$rv]; //@line 269 "binascii.c"
        HEAP[$0]=$127; //@line 269 "binascii.c"
        __label__ = 34; break; //@line 269 "binascii.c"
      case 34: // $bb33
        var $128=HEAP[$0]; //@line 200 "binascii.c"
        HEAP[$retval]=$128; //@line 200 "binascii.c"
        __label__ = 35; break; //@line 200 "binascii.c"
      case 35: // $return
        var $retval34=HEAP[$retval]; //@line 200 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 200 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_uu($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 93; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pbin=__stackBase__+16;
        var $ascii_data=__stackBase__+68;
        var $bin_data=__stackBase__+72;
        var $leftbits=__stackBase__+76;
        var $this_ch=__stackBase__+80;
        var $leftchar=__stackBase__+81;
        var $rv=__stackBase__+85;
        var $bin_len=__stackBase__+89;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 279 "binascii.c"
        HEAP[$leftchar]=0; //@line 281 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 285 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str5)&4294967295), $pbin); //@line 285 "binascii.c"
        var $3=((($2))|0)==0; //@line 285 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 285 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 286 "binascii.c"
        __label__ = 21; break; //@line 286 "binascii.c"
      case 2: // $bb1
        var $4=(($pbin)&4294967295); //@line 287 "binascii.c"
        var $5=HEAP[$4]; //@line 287 "binascii.c"
        HEAP[$bin_data]=$5; //@line 287 "binascii.c"
        var $6=(($pbin+8)&4294967295); //@line 288 "binascii.c"
        var $7=HEAP[$6]; //@line 288 "binascii.c"
        HEAP[$bin_len]=$7; //@line 288 "binascii.c"
        var $8=HEAP[$bin_len]; //@line 289 "binascii.c"
        var $9=((($8))|0) > 45; //@line 289 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 289 "binascii.c"
      case 3: // $bb2
        var $10=HEAP[_Error]; //@line 291 "binascii.c"
        _PyErr_SetString($10, ((__str6)&4294967295)); //@line 291 "binascii.c"
        _PyBuffer_Release($pbin); //@line 292 "binascii.c"
        HEAP[$0]=0; //@line 293 "binascii.c"
        __label__ = 21; break; //@line 293 "binascii.c"
      case 4: // $bb3
        var $11=HEAP[$bin_len]; //@line 297 "binascii.c"
        var $12=((($11) + 2)&4294967295); //@line 297 "binascii.c"
        var $13=((((($12))|0)/3)|0); //@line 297 "binascii.c"
        var $14=((($13) * 4)&4294967295); //@line 297 "binascii.c"
        var $15=((($14) + 2)&4294967295); //@line 297 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 297 "binascii.c"
        HEAP[$rv]=$16; //@line 297 "binascii.c"
        var $17=HEAP[$rv]; //@line 297 "binascii.c"
        var $18=($17)==0; //@line 297 "binascii.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 297 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbin); //@line 298 "binascii.c"
        HEAP[$0]=0; //@line 299 "binascii.c"
        __label__ = 21; break; //@line 299 "binascii.c"
      case 6: // $bb5
        var $19=HEAP[$rv]; //@line 301 "binascii.c"
        var $20=$19; //@line 301 "binascii.c"
        var $21=(($20+20)&4294967295); //@line 301 "binascii.c"
        var $22=$21; //@line 301 "binascii.c"
        HEAP[$ascii_data]=$22; //@line 301 "binascii.c"
        var $23=HEAP[$bin_len]; //@line 304 "binascii.c"
        var $24=((($23)) & 255); //@line 304 "binascii.c"
        var $25=($24) & 63; //@line 304 "binascii.c"
        var $26=((($25) + 32)&255); //@line 304 "binascii.c"
        var $27=HEAP[$ascii_data]; //@line 304 "binascii.c"
        HEAP[$27]=$26; //@line 304 "binascii.c"
        var $28=HEAP[$ascii_data]; //@line 304 "binascii.c"
        var $29=(($28+1)&4294967295); //@line 304 "binascii.c"
        HEAP[$ascii_data]=$29; //@line 304 "binascii.c"
        __label__ = 14; break; //@line 304 "binascii.c"
      case 7: // $bb6
        var $30=HEAP[$bin_len]; //@line 308 "binascii.c"
        var $31=((($30))|0) > 0; //@line 308 "binascii.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 308 "binascii.c"
      case 8: // $bb7
        var $32=HEAP[$leftchar]; //@line 309 "binascii.c"
        var $33=($32) << 8; //@line 309 "binascii.c"
        var $34=HEAP[$bin_data]; //@line 309 "binascii.c"
        var $35=HEAP[$34]; //@line 309 "binascii.c"
        var $36=unSign(($35), 8, 0); //@line 309 "binascii.c"
        var $37=($33) | ($36); //@line 309 "binascii.c"
        HEAP[$leftchar]=$37; //@line 309 "binascii.c"
        __label__ = 10; break; //@line 309 "binascii.c"
      case 9: // $bb8
        var $38=HEAP[$leftchar]; //@line 311 "binascii.c"
        var $39=($38) << 8; //@line 311 "binascii.c"
        HEAP[$leftchar]=$39; //@line 311 "binascii.c"
        __label__ = 10; break; //@line 311 "binascii.c"
      case 10: // $bb9
        var $40=HEAP[$leftbits]; //@line 312 "binascii.c"
        var $41=((($40) + 8)&4294967295); //@line 312 "binascii.c"
        HEAP[$leftbits]=$41; //@line 312 "binascii.c"
        __label__ = 12; break; //@line 312 "binascii.c"
      case 11: // $bb10
        var $42=HEAP[$leftbits]; //@line 316 "binascii.c"
        var $43=((($42) - 6)&4294967295); //@line 316 "binascii.c"
        var $44=HEAP[$leftchar]; //@line 316 "binascii.c"
        var $45=((($44))>>>0) >>> ((($43))>>>0); //@line 316 "binascii.c"
        var $46=((($45)) & 255); //@line 316 "binascii.c"
        var $47=($46) & 63; //@line 316 "binascii.c"
        HEAP[$this_ch]=$47; //@line 316 "binascii.c"
        var $48=HEAP[$leftbits]; //@line 317 "binascii.c"
        var $49=((($48) - 6)&4294967295); //@line 317 "binascii.c"
        HEAP[$leftbits]=$49; //@line 317 "binascii.c"
        var $50=HEAP[$this_ch]; //@line 318 "binascii.c"
        var $51=((($50) + 32)&255); //@line 318 "binascii.c"
        var $52=HEAP[$ascii_data]; //@line 318 "binascii.c"
        HEAP[$52]=$51; //@line 318 "binascii.c"
        var $53=HEAP[$ascii_data]; //@line 318 "binascii.c"
        var $54=(($53+1)&4294967295); //@line 318 "binascii.c"
        HEAP[$ascii_data]=$54; //@line 318 "binascii.c"
        __label__ = 12; break; //@line 318 "binascii.c"
      case 12: // $bb11
        var $55=HEAP[$leftbits]; //@line 315 "binascii.c"
        var $56=((($55))|0) > 5; //@line 315 "binascii.c"
        if ($56) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 315 "binascii.c"
      case 13: // $bb12
        var $57=HEAP[$bin_len]; //@line 306 "binascii.c"
        var $58=((($57) - 1)&4294967295); //@line 306 "binascii.c"
        HEAP[$bin_len]=$58; //@line 306 "binascii.c"
        var $59=HEAP[$bin_data]; //@line 306 "binascii.c"
        var $60=(($59+1)&4294967295); //@line 306 "binascii.c"
        HEAP[$bin_data]=$60; //@line 306 "binascii.c"
        __label__ = 14; break; //@line 306 "binascii.c"
      case 14: // $bb13
        var $61=HEAP[$bin_len]; //@line 306 "binascii.c"
        var $62=((($61))|0) > 0; //@line 306 "binascii.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 15; break; } //@line 306 "binascii.c"
      case 15: // $bb14
        var $63=HEAP[$leftbits]; //@line 306 "binascii.c"
        var $64=((($63))|0)!=0; //@line 306 "binascii.c"
        if ($64) { __label__ = 7; break; } else { __label__ = 16; break; } //@line 306 "binascii.c"
      case 16: // $bb15
        var $65=HEAP[$ascii_data]; //@line 321 "binascii.c"
        HEAP[$65]=10; //@line 321 "binascii.c"
        var $66=HEAP[$ascii_data]; //@line 321 "binascii.c"
        var $67=(($66+1)&4294967295); //@line 321 "binascii.c"
        HEAP[$ascii_data]=$67; //@line 321 "binascii.c"
        var $68=HEAP[$ascii_data]; //@line 323 "binascii.c"
        var $69=($68); //@line 323 "binascii.c"
        var $70=HEAP[$rv]; //@line 323 "binascii.c"
        var $71=$70; //@line 323 "binascii.c"
        var $72=(($71+20)&4294967295); //@line 323 "binascii.c"
        var $73=($72); //@line 323 "binascii.c"
        var $74=((($69) - ($73))&4294967295); //@line 323 "binascii.c"
        var $75=__PyString_Resize($rv, $74); //@line 323 "binascii.c"
        var $76=((($75))|0) < 0; //@line 323 "binascii.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 323 "binascii.c"
      case 17: // $bb16
        var $77=HEAP[$rv]; //@line 326 "binascii.c"
        var $78=(($77)&4294967295); //@line 326 "binascii.c"
        var $79=HEAP[$78]; //@line 326 "binascii.c"
        var $80=((($79) - 1)&4294967295); //@line 326 "binascii.c"
        var $81=(($77)&4294967295); //@line 326 "binascii.c"
        HEAP[$81]=$80; //@line 326 "binascii.c"
        var $82=(($77)&4294967295); //@line 326 "binascii.c"
        var $83=HEAP[$82]; //@line 326 "binascii.c"
        var $84=((($83))|0)==0; //@line 326 "binascii.c"
        if ($84) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 326 "binascii.c"
      case 18: // $bb17
        var $85=HEAP[$rv]; //@line 326 "binascii.c"
        var $86=(($85+4)&4294967295); //@line 326 "binascii.c"
        var $87=HEAP[$86]; //@line 326 "binascii.c"
        var $88=(($87+24)&4294967295); //@line 326 "binascii.c"
        var $89=HEAP[$88]; //@line 326 "binascii.c"
        var $90=HEAP[$rv]; //@line 326 "binascii.c"
        FUNCTION_TABLE[$89]($90); //@line 326 "binascii.c"
        __label__ = 19; break; //@line 326 "binascii.c"
      case 19: // $bb18
        HEAP[$rv]=0; //@line 327 "binascii.c"
        __label__ = 20; break; //@line 327 "binascii.c"
      case 20: // $bb19
        _PyBuffer_Release($pbin); //@line 329 "binascii.c"
        var $91=HEAP[$rv]; //@line 330 "binascii.c"
        HEAP[$0]=$91; //@line 330 "binascii.c"
        __label__ = 21; break; //@line 330 "binascii.c"
      case 21: // $bb20
        var $92=HEAP[$0]; //@line 286 "binascii.c"
        HEAP[$retval]=$92; //@line 286 "binascii.c"
        __label__ = 22; break; //@line 286 "binascii.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 286 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 286 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_find_valid($s, $slen, $num) {
    var __stackBase__  = STACKTOP; STACKTOP += 26; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 26);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr=__stackBase__;
        var $slen_addr=__stackBase__+4;
        var $num_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $ret=__stackBase__+20;
        var $c=__stackBase__+24;
        var $b64val=__stackBase__+25;
        var $_alloca_point_=0;
        HEAP[$s_addr]=$s;
        HEAP[$slen_addr]=$slen;
        HEAP[$num_addr]=$num;
        HEAP[$ret]=-1; //@line 341 "binascii.c"
        __label__ = 7; break; //@line 341 "binascii.c"
      case 1: // $bb
        var $1=HEAP[$s_addr]; //@line 345 "binascii.c"
        var $2=HEAP[$1]; //@line 345 "binascii.c"
        HEAP[$c]=$2; //@line 345 "binascii.c"
        var $3=HEAP[$c]; //@line 346 "binascii.c"
        var $4=unSign(($3), 8, 0); //@line 346 "binascii.c"
        var $5=($4) & 127; //@line 346 "binascii.c"
        var $6=((_table_a2b_base64+$5)&4294967295); //@line 346 "binascii.c"
        var $7=HEAP[$6]; //@line 346 "binascii.c"
        HEAP[$b64val]=$7; //@line 346 "binascii.c"
        var $8=HEAP[$c]; //@line 347 "binascii.c"
        var $9=reSign(($8), 8, 0) >= 0; //@line 347 "binascii.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 347 "binascii.c"
      case 2: // $bb1
        var $10=HEAP[$b64val]; //@line 347 "binascii.c"
        var $11=reSign(($10), 8, 0)!=-1; //@line 347 "binascii.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 347 "binascii.c"
      case 3: // $bb2
        var $12=HEAP[$num_addr]; //@line 348 "binascii.c"
        var $13=((($12))|0)==0; //@line 348 "binascii.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 348 "binascii.c"
      case 4: // $bb3
        var $14=HEAP[$s_addr]; //@line 349 "binascii.c"
        var $15=HEAP[$14]; //@line 349 "binascii.c"
        var $16=unSign(($15), 8, 0); //@line 349 "binascii.c"
        HEAP[$ret]=$16; //@line 349 "binascii.c"
        __label__ = 5; break; //@line 349 "binascii.c"
      case 5: // $bb4
        var $17=HEAP[$num_addr]; //@line 350 "binascii.c"
        var $18=((($17) - 1)&4294967295); //@line 350 "binascii.c"
        HEAP[$num_addr]=$18; //@line 350 "binascii.c"
        __label__ = 6; break; //@line 350 "binascii.c"
      case 6: // $bb5
        var $19=HEAP[$s_addr]; //@line 353 "binascii.c"
        var $20=(($19+1)&4294967295); //@line 353 "binascii.c"
        HEAP[$s_addr]=$20; //@line 353 "binascii.c"
        var $21=HEAP[$slen_addr]; //@line 354 "binascii.c"
        var $22=((($21) - 1)&4294967295); //@line 354 "binascii.c"
        HEAP[$slen_addr]=$22; //@line 354 "binascii.c"
        __label__ = 7; break; //@line 354 "binascii.c"
      case 7: // $bb6
        var $23=HEAP[$slen_addr]; //@line 344 "binascii.c"
        var $24=((($23))|0) <= 0; //@line 344 "binascii.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 344 "binascii.c"
      case 8: // $bb7
        var $25=HEAP[$ret]; //@line 344 "binascii.c"
        var $26=((($25))|0)==-1; //@line 344 "binascii.c"
        if ($26) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 344 "binascii.c"
      case 9: // $bb8
        var $27=HEAP[$ret]; //@line 356 "binascii.c"
        HEAP[$0]=$27; //@line 356 "binascii.c"
        var $28=HEAP[$0]; //@line 356 "binascii.c"
        HEAP[$retval]=$28; //@line 356 "binascii.c"
        __label__ = 10; break; //@line 356 "binascii.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 356 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 356 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_base64($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 101; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pascii=__stackBase__+16;
        var $ascii_data=__stackBase__+68;
        var $bin_data=__stackBase__+72;
        var $leftbits=__stackBase__+76;
        var $this_ch=__stackBase__+80;
        var $leftchar=__stackBase__+81;
        var $rv=__stackBase__+85;
        var $ascii_len=__stackBase__+89;
        var $bin_len=__stackBase__+93;
        var $quad_pos=__stackBase__+97;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 366 "binascii.c"
        HEAP[$leftchar]=0; //@line 368 "binascii.c"
        HEAP[$quad_pos]=0; //@line 371 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 373 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str7)&4294967295), $pascii); //@line 373 "binascii.c"
        var $3=((($2))|0)==0; //@line 373 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 373 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 374 "binascii.c"
        __label__ = 37; break; //@line 374 "binascii.c"
      case 2: // $bb1
        var $4=(($pascii)&4294967295); //@line 375 "binascii.c"
        var $5=HEAP[$4]; //@line 375 "binascii.c"
        HEAP[$ascii_data]=$5; //@line 375 "binascii.c"
        var $6=(($pascii+8)&4294967295); //@line 376 "binascii.c"
        var $7=HEAP[$6]; //@line 376 "binascii.c"
        HEAP[$ascii_len]=$7; //@line 376 "binascii.c"
        var $8=HEAP[$ascii_len]; //@line 378 "binascii.c"
        var $9=((($8))|0) < 0; //@line 378 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 378 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str1)&4294967295), ((__str2)&4294967295), 378, ((___PRETTY_FUNCTION___8505)&4294967295)); //@line 378 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 821"; //@line 378 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$ascii_len]; //@line 380 "binascii.c"
        var $11=((($10))|0) > 2147483644; //@line 380 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 380 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 381 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 382 "binascii.c"
        HEAP[$0]=$12; //@line 382 "binascii.c"
        __label__ = 37; break; //@line 382 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$ascii_len]; //@line 385 "binascii.c"
        var $14=((($13) + 3)&4294967295); //@line 385 "binascii.c"
        var $15=((((($14))|0)/4)|0); //@line 385 "binascii.c"
        var $16=((($15) * 3)&4294967295); //@line 385 "binascii.c"
        HEAP[$bin_len]=$16; //@line 385 "binascii.c"
        var $17=HEAP[$bin_len]; //@line 388 "binascii.c"
        var $18=_PyString_FromStringAndSize(0, $17); //@line 388 "binascii.c"
        HEAP[$rv]=$18; //@line 388 "binascii.c"
        var $19=HEAP[$rv]; //@line 388 "binascii.c"
        var $20=($19)==0; //@line 388 "binascii.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 388 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pascii); //@line 389 "binascii.c"
        HEAP[$0]=0; //@line 390 "binascii.c"
        __label__ = 37; break; //@line 390 "binascii.c"
      case 8: // $bb7
        var $21=HEAP[$rv]; //@line 392 "binascii.c"
        var $22=$21; //@line 392 "binascii.c"
        var $23=(($22+20)&4294967295); //@line 392 "binascii.c"
        var $24=$23; //@line 392 "binascii.c"
        HEAP[$bin_data]=$24; //@line 392 "binascii.c"
        HEAP[$bin_len]=0; //@line 393 "binascii.c"
        __label__ = 22; break; //@line 393 "binascii.c"
      case 9: // $bb8
        var $25=HEAP[$ascii_data]; //@line 396 "binascii.c"
        var $26=HEAP[$25]; //@line 396 "binascii.c"
        HEAP[$this_ch]=$26; //@line 396 "binascii.c"
        var $27=HEAP[$this_ch]; //@line 398 "binascii.c"
        var $28=reSign(($27), 8, 0) < 0; //@line 398 "binascii.c"
        if ($28) { __label__ = 21; break; } else { __label__ = 10; break; } //@line 398 "binascii.c"
      case 10: // $bb9
        var $29=HEAP[$this_ch]; //@line 398 "binascii.c"
        var $30=reSign(($29), 8, 0)==13; //@line 398 "binascii.c"
        if ($30) { __label__ = 21; break; } else { __label__ = 11; break; } //@line 398 "binascii.c"
      case 11: // $bb10
        var $31=HEAP[$this_ch]; //@line 398 "binascii.c"
        var $32=reSign(($31), 8, 0)==10; //@line 398 "binascii.c"
        if ($32) { __label__ = 21; break; } else { __label__ = 12; break; } //@line 398 "binascii.c"
      case 12: // $bb11
        var $33=HEAP[$this_ch]; //@line 398 "binascii.c"
        var $34=reSign(($33), 8, 0)==32; //@line 398 "binascii.c"
        if ($34) { __label__ = 21; break; } else { __label__ = 13; break; } //@line 398 "binascii.c"
      case 13: // $bb12
        var $35=HEAP[$this_ch]; //@line 405 "binascii.c"
        var $36=reSign(($35), 8, 0)==61; //@line 405 "binascii.c"
        if ($36) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 405 "binascii.c"
      case 14: // $bb13
        var $37=HEAP[$quad_pos]; //@line 406 "binascii.c"
        var $38=((($37))|0) <= 1; //@line 406 "binascii.c"
        if ($38) { __label__ = 21; break; } else { __label__ = 15; break; } //@line 406 "binascii.c"
      case 15: // $bb14
        var $39=HEAP[$quad_pos]; //@line 406 "binascii.c"
        var $40=((($39))|0)!=2; //@line 406 "binascii.c"
        if ($40) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 406 "binascii.c"
      case 16: // $bb15
        var $41=HEAP[$ascii_data]; //@line 406 "binascii.c"
        var $42=HEAP[$ascii_len]; //@line 406 "binascii.c"
        var $43=_binascii_find_valid($41, $42, 1); //@line 406 "binascii.c"
        var $44=((($43))|0)!=61; //@line 406 "binascii.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 17; break; } //@line 406 "binascii.c"
      case 17: // $bb16
        HEAP[$leftbits]=0; //@line 418 "binascii.c"
        __label__ = 23; break; //@line 418 "binascii.c"
      case 18: // $bb17
        var $45=HEAP[$ascii_data]; //@line 423 "binascii.c"
        var $46=HEAP[$45]; //@line 423 "binascii.c"
        var $47=unSign(($46), 8, 0); //@line 423 "binascii.c"
        var $48=((_table_a2b_base64+$47)&4294967295); //@line 423 "binascii.c"
        var $49=HEAP[$48]; //@line 423 "binascii.c"
        HEAP[$this_ch]=$49; //@line 423 "binascii.c"
        var $50=HEAP[$this_ch]; //@line 424 "binascii.c"
        var $51=reSign(($50), 8, 0)==-1; //@line 424 "binascii.c"
        if ($51) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 424 "binascii.c"
      case 19: // $bb18
        var $52=HEAP[$quad_pos]; //@line 431 "binascii.c"
        var $53=((($52) + 1)&4294967295); //@line 431 "binascii.c"
        var $54=($53) & 3; //@line 431 "binascii.c"
        HEAP[$quad_pos]=$54; //@line 431 "binascii.c"
        var $55=HEAP[$leftchar]; //@line 432 "binascii.c"
        var $56=($55) << 6; //@line 432 "binascii.c"
        var $57=HEAP[$this_ch]; //@line 432 "binascii.c"
        var $58=unSign(($57), 8, 0); //@line 432 "binascii.c"
        var $59=($56) | ($58); //@line 432 "binascii.c"
        HEAP[$leftchar]=$59; //@line 432 "binascii.c"
        var $60=HEAP[$leftbits]; //@line 433 "binascii.c"
        var $61=((($60) + 6)&4294967295); //@line 433 "binascii.c"
        HEAP[$leftbits]=$61; //@line 433 "binascii.c"
        var $62=HEAP[$leftbits]; //@line 435 "binascii.c"
        var $63=((($62))|0) > 7; //@line 435 "binascii.c"
        if ($63) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 435 "binascii.c"
      case 20: // $bb19
        var $64=HEAP[$leftbits]; //@line 436 "binascii.c"
        var $65=((($64) - 8)&4294967295); //@line 436 "binascii.c"
        HEAP[$leftbits]=$65; //@line 436 "binascii.c"
        var $66=HEAP[$leftchar]; //@line 437 "binascii.c"
        var $67=HEAP[$leftbits]; //@line 437 "binascii.c"
        var $68=((($66))>>>0) >>> ((($67))>>>0); //@line 437 "binascii.c"
        var $69=((($68)) & 255); //@line 437 "binascii.c"
        var $70=HEAP[$bin_data]; //@line 437 "binascii.c"
        HEAP[$70]=$69; //@line 437 "binascii.c"
        var $71=HEAP[$bin_data]; //@line 437 "binascii.c"
        var $72=(($71+1)&4294967295); //@line 437 "binascii.c"
        HEAP[$bin_data]=$72; //@line 437 "binascii.c"
        var $73=HEAP[$bin_len]; //@line 438 "binascii.c"
        var $74=((($73) + 1)&4294967295); //@line 438 "binascii.c"
        HEAP[$bin_len]=$74; //@line 438 "binascii.c"
        var $75=HEAP[$leftbits]; //@line 439 "binascii.c"
        var $76=1 << ($75); //@line 439 "binascii.c"
        var $77=((($76) - 1)&4294967295); //@line 439 "binascii.c"
        var $78=HEAP[$leftchar]; //@line 439 "binascii.c"
        var $79=($77) & ($78); //@line 439 "binascii.c"
        HEAP[$leftchar]=$79; //@line 439 "binascii.c"
        __label__ = 21; break; //@line 439 "binascii.c"
      case 21: // $bb20
        var $80=HEAP[$ascii_len]; //@line 395 "binascii.c"
        var $81=((($80) - 1)&4294967295); //@line 395 "binascii.c"
        HEAP[$ascii_len]=$81; //@line 395 "binascii.c"
        var $82=HEAP[$ascii_data]; //@line 395 "binascii.c"
        var $83=(($82+1)&4294967295); //@line 395 "binascii.c"
        HEAP[$ascii_data]=$83; //@line 395 "binascii.c"
        __label__ = 22; break; //@line 395 "binascii.c"
      case 22: // $bb21
        var $84=HEAP[$ascii_len]; //@line 395 "binascii.c"
        var $85=((($84))|0) > 0; //@line 395 "binascii.c"
        if ($85) { __label__ = 9; break; } else { __label__ = 23; break; } //@line 395 "binascii.c"
      case 23: // $bb22
        var $86=HEAP[$leftbits]; //@line 443 "binascii.c"
        var $87=((($86))|0)!=0; //@line 443 "binascii.c"
        if ($87) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 443 "binascii.c"
      case 24: // $bb23
        _PyBuffer_Release($pascii); //@line 444 "binascii.c"
        var $88=HEAP[_Error]; //@line 445 "binascii.c"
        _PyErr_SetString($88, ((__str8)&4294967295)); //@line 445 "binascii.c"
        var $89=HEAP[$rv]; //@line 446 "binascii.c"
        var $90=(($89)&4294967295); //@line 446 "binascii.c"
        var $91=HEAP[$90]; //@line 446 "binascii.c"
        var $92=((($91) - 1)&4294967295); //@line 446 "binascii.c"
        var $93=(($89)&4294967295); //@line 446 "binascii.c"
        HEAP[$93]=$92; //@line 446 "binascii.c"
        var $94=(($89)&4294967295); //@line 446 "binascii.c"
        var $95=HEAP[$94]; //@line 446 "binascii.c"
        var $96=((($95))|0)==0; //@line 446 "binascii.c"
        if ($96) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 446 "binascii.c"
      case 25: // $bb24
        var $97=HEAP[$rv]; //@line 446 "binascii.c"
        var $98=(($97+4)&4294967295); //@line 446 "binascii.c"
        var $99=HEAP[$98]; //@line 446 "binascii.c"
        var $100=(($99+24)&4294967295); //@line 446 "binascii.c"
        var $101=HEAP[$100]; //@line 446 "binascii.c"
        var $102=HEAP[$rv]; //@line 446 "binascii.c"
        FUNCTION_TABLE[$101]($102); //@line 446 "binascii.c"
        __label__ = 26; break; //@line 446 "binascii.c"
      case 26: // $bb25
        HEAP[$0]=0; //@line 447 "binascii.c"
        __label__ = 37; break; //@line 447 "binascii.c"
      case 27: // $bb26
        var $103=HEAP[$bin_len]; //@line 454 "binascii.c"
        var $104=((($103))|0) > 0; //@line 454 "binascii.c"
        if ($104) { __label__ = 28; break; } else { __label__ = 33; break; } //@line 454 "binascii.c"
      case 28: // $bb27
        var $105=HEAP[$bin_len]; //@line 455 "binascii.c"
        var $106=__PyString_Resize($rv, $105); //@line 455 "binascii.c"
        var $107=((($106))|0) < 0; //@line 455 "binascii.c"
        if ($107) { __label__ = 29; break; } else { __label__ = 32; break; } //@line 455 "binascii.c"
      case 29: // $bb28
        var $108=HEAP[$rv]; //@line 456 "binascii.c"
        var $109=(($108)&4294967295); //@line 456 "binascii.c"
        var $110=HEAP[$109]; //@line 456 "binascii.c"
        var $111=((($110) - 1)&4294967295); //@line 456 "binascii.c"
        var $112=(($108)&4294967295); //@line 456 "binascii.c"
        HEAP[$112]=$111; //@line 456 "binascii.c"
        var $113=(($108)&4294967295); //@line 456 "binascii.c"
        var $114=HEAP[$113]; //@line 456 "binascii.c"
        var $115=((($114))|0)==0; //@line 456 "binascii.c"
        if ($115) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 456 "binascii.c"
      case 30: // $bb29
        var $116=HEAP[$rv]; //@line 456 "binascii.c"
        var $117=(($116+4)&4294967295); //@line 456 "binascii.c"
        var $118=HEAP[$117]; //@line 456 "binascii.c"
        var $119=(($118+24)&4294967295); //@line 456 "binascii.c"
        var $120=HEAP[$119]; //@line 456 "binascii.c"
        var $121=HEAP[$rv]; //@line 456 "binascii.c"
        FUNCTION_TABLE[$120]($121); //@line 456 "binascii.c"
        __label__ = 31; break; //@line 456 "binascii.c"
      case 31: // $bb30
        HEAP[$rv]=0; //@line 457 "binascii.c"
        __label__ = 32; break; //@line 457 "binascii.c"
      case 32: // $bb31
        __label__ = 36; break; //@line 457 "binascii.c"
      case 33: // $bb32
        var $122=HEAP[$rv]; //@line 461 "binascii.c"
        var $123=(($122)&4294967295); //@line 461 "binascii.c"
        var $124=HEAP[$123]; //@line 461 "binascii.c"
        var $125=((($124) - 1)&4294967295); //@line 461 "binascii.c"
        var $126=(($122)&4294967295); //@line 461 "binascii.c"
        HEAP[$126]=$125; //@line 461 "binascii.c"
        var $127=(($122)&4294967295); //@line 461 "binascii.c"
        var $128=HEAP[$127]; //@line 461 "binascii.c"
        var $129=((($128))|0)==0; //@line 461 "binascii.c"
        if ($129) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 461 "binascii.c"
      case 34: // $bb33
        var $130=HEAP[$rv]; //@line 461 "binascii.c"
        var $131=(($130+4)&4294967295); //@line 461 "binascii.c"
        var $132=HEAP[$131]; //@line 461 "binascii.c"
        var $133=(($132+24)&4294967295); //@line 461 "binascii.c"
        var $134=HEAP[$133]; //@line 461 "binascii.c"
        var $135=HEAP[$rv]; //@line 461 "binascii.c"
        FUNCTION_TABLE[$134]($135); //@line 461 "binascii.c"
        __label__ = 35; break; //@line 461 "binascii.c"
      case 35: // $bb34
        var $136=_PyString_FromStringAndSize(((__str9)&4294967295), 0); //@line 462 "binascii.c"
        HEAP[$rv]=$136; //@line 462 "binascii.c"
        __label__ = 36; break; //@line 462 "binascii.c"
      case 36: // $bb35
        _PyBuffer_Release($pascii); //@line 464 "binascii.c"
        var $137=HEAP[$rv]; //@line 465 "binascii.c"
        HEAP[$0]=$137; //@line 465 "binascii.c"
        __label__ = 37; break; //@line 465 "binascii.c"
      case 37: // $bb36
        var $138=HEAP[$0]; //@line 374 "binascii.c"
        HEAP[$retval]=$138; //@line 374 "binascii.c"
        __label__ = 38; break; //@line 374 "binascii.c"
      case 38: // $return
        var $retval37=HEAP[$retval]; //@line 374 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 374 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_base64($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 93; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pbuf=__stackBase__+16;
        var $ascii_data=__stackBase__+68;
        var $bin_data=__stackBase__+72;
        var $leftbits=__stackBase__+76;
        var $this_ch=__stackBase__+80;
        var $leftchar=__stackBase__+81;
        var $rv=__stackBase__+85;
        var $bin_len=__stackBase__+89;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 475 "binascii.c"
        HEAP[$leftchar]=0; //@line 477 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 481 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str10)&4294967295), $pbuf); //@line 481 "binascii.c"
        var $3=((($2))|0)==0; //@line 481 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 481 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 482 "binascii.c"
        __label__ = 23; break; //@line 482 "binascii.c"
      case 2: // $bb1
        var $4=(($pbuf)&4294967295); //@line 483 "binascii.c"
        var $5=HEAP[$4]; //@line 483 "binascii.c"
        HEAP[$bin_data]=$5; //@line 483 "binascii.c"
        var $6=(($pbuf+8)&4294967295); //@line 484 "binascii.c"
        var $7=HEAP[$6]; //@line 484 "binascii.c"
        HEAP[$bin_len]=$7; //@line 484 "binascii.c"
        var $8=HEAP[$bin_len]; //@line 486 "binascii.c"
        var $9=((($8))|0) < 0; //@line 486 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 486 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str11)&4294967295), ((__str2)&4294967295), 486, ((___PRETTY_FUNCTION___8609)&4294967295)); //@line 486 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 1149"; //@line 486 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$bin_len]; //@line 488 "binascii.c"
        var $11=((($10))>>>0) > 1073741796; //@line 488 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 488 "binascii.c"
      case 5: // $bb4
        var $12=HEAP[_Error]; //@line 489 "binascii.c"
        _PyErr_SetString($12, ((__str12)&4294967295)); //@line 489 "binascii.c"
        _PyBuffer_Release($pbuf); //@line 490 "binascii.c"
        HEAP[$0]=0; //@line 491 "binascii.c"
        __label__ = 23; break; //@line 491 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$bin_len]; //@line 497 "binascii.c"
        var $14=((($13) * 2)&4294967295); //@line 497 "binascii.c"
        var $15=((($14) + 3)&4294967295); //@line 497 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 497 "binascii.c"
        HEAP[$rv]=$16; //@line 497 "binascii.c"
        var $17=HEAP[$rv]; //@line 497 "binascii.c"
        var $18=($17)==0; //@line 497 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 497 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbuf); //@line 498 "binascii.c"
        HEAP[$0]=0; //@line 499 "binascii.c"
        __label__ = 23; break; //@line 499 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 501 "binascii.c"
        var $20=$19; //@line 501 "binascii.c"
        var $21=(($20+20)&4294967295); //@line 501 "binascii.c"
        var $22=$21; //@line 501 "binascii.c"
        HEAP[$ascii_data]=$22; //@line 501 "binascii.c"
        __label__ = 13; break; //@line 501 "binascii.c"
      case 9: // $bb8
        var $23=HEAP[$leftchar]; //@line 505 "binascii.c"
        var $24=($23) << 8; //@line 505 "binascii.c"
        var $25=HEAP[$bin_data]; //@line 505 "binascii.c"
        var $26=HEAP[$25]; //@line 505 "binascii.c"
        var $27=unSign(($26), 8, 0); //@line 505 "binascii.c"
        var $28=($24) | ($27); //@line 505 "binascii.c"
        HEAP[$leftchar]=$28; //@line 505 "binascii.c"
        var $29=HEAP[$leftbits]; //@line 506 "binascii.c"
        var $30=((($29) + 8)&4294967295); //@line 506 "binascii.c"
        HEAP[$leftbits]=$30; //@line 506 "binascii.c"
        __label__ = 11; break; //@line 506 "binascii.c"
      case 10: // $bb9
        var $31=HEAP[$leftbits]; //@line 510 "binascii.c"
        var $32=((($31) - 6)&4294967295); //@line 510 "binascii.c"
        var $33=HEAP[$leftchar]; //@line 510 "binascii.c"
        var $34=((($33))>>>0) >>> ((($32))>>>0); //@line 510 "binascii.c"
        var $35=((($34)) & 255); //@line 510 "binascii.c"
        var $36=($35) & 63; //@line 510 "binascii.c"
        HEAP[$this_ch]=$36; //@line 510 "binascii.c"
        var $37=HEAP[$leftbits]; //@line 511 "binascii.c"
        var $38=((($37) - 6)&4294967295); //@line 511 "binascii.c"
        HEAP[$leftbits]=$38; //@line 511 "binascii.c"
        var $39=HEAP[$this_ch]; //@line 512 "binascii.c"
        var $40=unSign(($39), 8, 0); //@line 512 "binascii.c"
        var $41=((_table_b2a_base64+$40)&4294967295); //@line 512 "binascii.c"
        var $42=HEAP[$41]; //@line 512 "binascii.c"
        var $43=HEAP[$ascii_data]; //@line 512 "binascii.c"
        HEAP[$43]=$42; //@line 512 "binascii.c"
        var $44=HEAP[$ascii_data]; //@line 512 "binascii.c"
        var $45=(($44+1)&4294967295); //@line 512 "binascii.c"
        HEAP[$ascii_data]=$45; //@line 512 "binascii.c"
        __label__ = 11; break; //@line 512 "binascii.c"
      case 11: // $bb10
        var $46=HEAP[$leftbits]; //@line 509 "binascii.c"
        var $47=((($46))|0) > 5; //@line 509 "binascii.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 509 "binascii.c"
      case 12: // $bb11
        var $48=HEAP[$bin_len]; //@line 503 "binascii.c"
        var $49=((($48) - 1)&4294967295); //@line 503 "binascii.c"
        HEAP[$bin_len]=$49; //@line 503 "binascii.c"
        var $50=HEAP[$bin_data]; //@line 503 "binascii.c"
        var $51=(($50+1)&4294967295); //@line 503 "binascii.c"
        HEAP[$bin_data]=$51; //@line 503 "binascii.c"
        __label__ = 13; break; //@line 503 "binascii.c"
      case 13: // $bb12
        var $52=HEAP[$bin_len]; //@line 503 "binascii.c"
        var $53=((($52))|0) > 0; //@line 503 "binascii.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 503 "binascii.c"
      case 14: // $bb13
        var $54=HEAP[$leftbits]; //@line 515 "binascii.c"
        var $55=((($54))|0)==2; //@line 515 "binascii.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 515 "binascii.c"
      case 15: // $bb14
        var $56=HEAP[$leftchar]; //@line 516 "binascii.c"
        var $57=($56) & 3; //@line 516 "binascii.c"
        var $58=($57) << 4; //@line 516 "binascii.c"
        var $59=((_table_b2a_base64+$58)&4294967295); //@line 516 "binascii.c"
        var $60=HEAP[$59]; //@line 516 "binascii.c"
        var $61=HEAP[$ascii_data]; //@line 516 "binascii.c"
        HEAP[$61]=$60; //@line 516 "binascii.c"
        var $62=HEAP[$ascii_data]; //@line 516 "binascii.c"
        var $63=(($62+1)&4294967295); //@line 516 "binascii.c"
        HEAP[$ascii_data]=$63; //@line 516 "binascii.c"
        var $64=HEAP[$ascii_data]; //@line 517 "binascii.c"
        HEAP[$64]=61; //@line 517 "binascii.c"
        var $65=HEAP[$ascii_data]; //@line 517 "binascii.c"
        var $66=(($65+1)&4294967295); //@line 517 "binascii.c"
        HEAP[$ascii_data]=$66; //@line 517 "binascii.c"
        var $67=HEAP[$ascii_data]; //@line 518 "binascii.c"
        HEAP[$67]=61; //@line 518 "binascii.c"
        var $68=HEAP[$ascii_data]; //@line 518 "binascii.c"
        var $69=(($68+1)&4294967295); //@line 518 "binascii.c"
        HEAP[$ascii_data]=$69; //@line 518 "binascii.c"
        __label__ = 18; break; //@line 518 "binascii.c"
      case 16: // $bb15
        var $70=HEAP[$leftbits]; //@line 519 "binascii.c"
        var $71=((($70))|0)==4; //@line 519 "binascii.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 519 "binascii.c"
      case 17: // $bb16
        var $72=HEAP[$leftchar]; //@line 520 "binascii.c"
        var $73=($72) & 15; //@line 520 "binascii.c"
        var $74=($73) << 2; //@line 520 "binascii.c"
        var $75=((_table_b2a_base64+$74)&4294967295); //@line 520 "binascii.c"
        var $76=HEAP[$75]; //@line 520 "binascii.c"
        var $77=HEAP[$ascii_data]; //@line 520 "binascii.c"
        HEAP[$77]=$76; //@line 520 "binascii.c"
        var $78=HEAP[$ascii_data]; //@line 520 "binascii.c"
        var $79=(($78+1)&4294967295); //@line 520 "binascii.c"
        HEAP[$ascii_data]=$79; //@line 520 "binascii.c"
        var $80=HEAP[$ascii_data]; //@line 521 "binascii.c"
        HEAP[$80]=61; //@line 521 "binascii.c"
        var $81=HEAP[$ascii_data]; //@line 521 "binascii.c"
        var $82=(($81+1)&4294967295); //@line 521 "binascii.c"
        HEAP[$ascii_data]=$82; //@line 521 "binascii.c"
        __label__ = 18; break; //@line 521 "binascii.c"
      case 18: // $bb17
        var $83=HEAP[$ascii_data]; //@line 523 "binascii.c"
        HEAP[$83]=10; //@line 523 "binascii.c"
        var $84=HEAP[$ascii_data]; //@line 523 "binascii.c"
        var $85=(($84+1)&4294967295); //@line 523 "binascii.c"
        HEAP[$ascii_data]=$85; //@line 523 "binascii.c"
        var $86=HEAP[$ascii_data]; //@line 525 "binascii.c"
        var $87=($86); //@line 525 "binascii.c"
        var $88=HEAP[$rv]; //@line 525 "binascii.c"
        var $89=$88; //@line 525 "binascii.c"
        var $90=(($89+20)&4294967295); //@line 525 "binascii.c"
        var $91=($90); //@line 525 "binascii.c"
        var $92=((($87) - ($91))&4294967295); //@line 525 "binascii.c"
        var $93=__PyString_Resize($rv, $92); //@line 525 "binascii.c"
        var $94=((($93))|0) < 0; //@line 525 "binascii.c"
        if ($94) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 525 "binascii.c"
      case 19: // $bb18
        var $95=HEAP[$rv]; //@line 528 "binascii.c"
        var $96=(($95)&4294967295); //@line 528 "binascii.c"
        var $97=HEAP[$96]; //@line 528 "binascii.c"
        var $98=((($97) - 1)&4294967295); //@line 528 "binascii.c"
        var $99=(($95)&4294967295); //@line 528 "binascii.c"
        HEAP[$99]=$98; //@line 528 "binascii.c"
        var $100=(($95)&4294967295); //@line 528 "binascii.c"
        var $101=HEAP[$100]; //@line 528 "binascii.c"
        var $102=((($101))|0)==0; //@line 528 "binascii.c"
        if ($102) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 528 "binascii.c"
      case 20: // $bb19
        var $103=HEAP[$rv]; //@line 528 "binascii.c"
        var $104=(($103+4)&4294967295); //@line 528 "binascii.c"
        var $105=HEAP[$104]; //@line 528 "binascii.c"
        var $106=(($105+24)&4294967295); //@line 528 "binascii.c"
        var $107=HEAP[$106]; //@line 528 "binascii.c"
        var $108=HEAP[$rv]; //@line 528 "binascii.c"
        FUNCTION_TABLE[$107]($108); //@line 528 "binascii.c"
        __label__ = 21; break; //@line 528 "binascii.c"
      case 21: // $bb20
        HEAP[$rv]=0; //@line 529 "binascii.c"
        __label__ = 22; break; //@line 529 "binascii.c"
      case 22: // $bb21
        _PyBuffer_Release($pbuf); //@line 531 "binascii.c"
        var $109=HEAP[$rv]; //@line 532 "binascii.c"
        HEAP[$0]=$109; //@line 532 "binascii.c"
        __label__ = 23; break; //@line 532 "binascii.c"
      case 23: // $bb22
        var $110=HEAP[$0]; //@line 482 "binascii.c"
        HEAP[$retval]=$110; //@line 482 "binascii.c"
        __label__ = 24; break; //@line 482 "binascii.c"
      case 24: // $return
        var $retval23=HEAP[$retval]; //@line 482 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 482 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 101; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pascii=__stackBase__+16;
        var $ascii_data=__stackBase__+68;
        var $bin_data=__stackBase__+72;
        var $leftbits=__stackBase__+76;
        var $this_ch=__stackBase__+80;
        var $leftchar=__stackBase__+81;
        var $rv=__stackBase__+85;
        var $len=__stackBase__+89;
        var $done=__stackBase__+93;
        var $rrv=__stackBase__+97;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 542 "binascii.c"
        HEAP[$leftchar]=0; //@line 544 "binascii.c"
        HEAP[$done]=0; //@line 547 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 549 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str13)&4294967295), $pascii); //@line 549 "binascii.c"
        var $3=((($2))|0)==0; //@line 549 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 549 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 550 "binascii.c"
        __label__ = 34; break; //@line 550 "binascii.c"
      case 2: // $bb1
        var $4=(($pascii)&4294967295); //@line 551 "binascii.c"
        var $5=HEAP[$4]; //@line 551 "binascii.c"
        HEAP[$ascii_data]=$5; //@line 551 "binascii.c"
        var $6=(($pascii+8)&4294967295); //@line 552 "binascii.c"
        var $7=HEAP[$6]; //@line 552 "binascii.c"
        HEAP[$len]=$7; //@line 552 "binascii.c"
        var $8=HEAP[$len]; //@line 554 "binascii.c"
        var $9=((($8))|0) < 0; //@line 554 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 554 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str14)&4294967295), ((__str2)&4294967295), 554, ((___PRETTY_FUNCTION___8689)&4294967295)); //@line 554 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 1406"; //@line 554 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$len]; //@line 556 "binascii.c"
        var $11=((($10))|0) > 2147483645; //@line 556 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 556 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pascii); //@line 557 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 558 "binascii.c"
        HEAP[$0]=$12; //@line 558 "binascii.c"
        __label__ = 34; break; //@line 558 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 564 "binascii.c"
        var $14=((($13) + 2)&4294967295); //@line 564 "binascii.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 564 "binascii.c"
        HEAP[$rv]=$15; //@line 564 "binascii.c"
        var $16=HEAP[$rv]; //@line 564 "binascii.c"
        var $17=($16)==0; //@line 564 "binascii.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 564 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pascii); //@line 565 "binascii.c"
        HEAP[$0]=0; //@line 566 "binascii.c"
        __label__ = 34; break; //@line 566 "binascii.c"
      case 8: // $bb7
        var $18=HEAP[$rv]; //@line 568 "binascii.c"
        var $19=$18; //@line 568 "binascii.c"
        var $20=(($19+20)&4294967295); //@line 568 "binascii.c"
        var $21=$20; //@line 568 "binascii.c"
        HEAP[$bin_data]=$21; //@line 568 "binascii.c"
        __label__ = 19; break; //@line 568 "binascii.c"
      case 9: // $bb8
        var $22=HEAP[$ascii_data]; //@line 572 "binascii.c"
        var $23=HEAP[$22]; //@line 572 "binascii.c"
        var $24=unSign(($23), 8, 0); //@line 572 "binascii.c"
        var $25=((_table_a2b_hqx+$24)&4294967295); //@line 572 "binascii.c"
        var $26=HEAP[$25]; //@line 572 "binascii.c"
        HEAP[$this_ch]=$26; //@line 572 "binascii.c"
        var $27=HEAP[$this_ch]; //@line 573 "binascii.c"
        var $28=reSign(($27), 8, 0)==126; //@line 573 "binascii.c"
        if ($28) { __label__ = 18; break; } else { __label__ = 10; break; } //@line 573 "binascii.c"
      case 10: // $bb9
        var $29=HEAP[$this_ch]; //@line 575 "binascii.c"
        var $30=reSign(($29), 8, 0)==125; //@line 575 "binascii.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 575 "binascii.c"
      case 11: // $bb10
        var $31=HEAP[_Error]; //@line 576 "binascii.c"
        _PyErr_SetString($31, ((__str3)&4294967295)); //@line 576 "binascii.c"
        _PyBuffer_Release($pascii); //@line 577 "binascii.c"
        var $32=HEAP[$rv]; //@line 578 "binascii.c"
        var $33=(($32)&4294967295); //@line 578 "binascii.c"
        var $34=HEAP[$33]; //@line 578 "binascii.c"
        var $35=((($34) - 1)&4294967295); //@line 578 "binascii.c"
        var $36=(($32)&4294967295); //@line 578 "binascii.c"
        HEAP[$36]=$35; //@line 578 "binascii.c"
        var $37=(($32)&4294967295); //@line 578 "binascii.c"
        var $38=HEAP[$37]; //@line 578 "binascii.c"
        var $39=((($38))|0)==0; //@line 578 "binascii.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 578 "binascii.c"
      case 12: // $bb11
        var $40=HEAP[$rv]; //@line 578 "binascii.c"
        var $41=(($40+4)&4294967295); //@line 578 "binascii.c"
        var $42=HEAP[$41]; //@line 578 "binascii.c"
        var $43=(($42+24)&4294967295); //@line 578 "binascii.c"
        var $44=HEAP[$43]; //@line 578 "binascii.c"
        var $45=HEAP[$rv]; //@line 578 "binascii.c"
        FUNCTION_TABLE[$44]($45); //@line 578 "binascii.c"
        __label__ = 13; break; //@line 578 "binascii.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 579 "binascii.c"
        __label__ = 34; break; //@line 579 "binascii.c"
      case 14: // $bb13
        var $46=HEAP[$this_ch]; //@line 581 "binascii.c"
        var $47=reSign(($46), 8, 0)==127; //@line 581 "binascii.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 581 "binascii.c"
      case 15: // $bb14
        HEAP[$done]=1; //@line 583 "binascii.c"
        __label__ = 20; break; //@line 583 "binascii.c"
      case 16: // $bb15
        var $48=HEAP[$leftchar]; //@line 588 "binascii.c"
        var $49=($48) << 6; //@line 588 "binascii.c"
        var $50=HEAP[$this_ch]; //@line 588 "binascii.c"
        var $51=unSign(($50), 8, 0); //@line 588 "binascii.c"
        var $52=($49) | ($51); //@line 588 "binascii.c"
        HEAP[$leftchar]=$52; //@line 588 "binascii.c"
        var $53=HEAP[$leftbits]; //@line 589 "binascii.c"
        var $54=((($53) + 6)&4294967295); //@line 589 "binascii.c"
        HEAP[$leftbits]=$54; //@line 589 "binascii.c"
        var $55=HEAP[$leftbits]; //@line 590 "binascii.c"
        var $56=((($55))|0) > 7; //@line 590 "binascii.c"
        if ($56) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 590 "binascii.c"
      case 17: // $bb16
        var $57=HEAP[$leftbits]; //@line 591 "binascii.c"
        var $58=((($57) - 8)&4294967295); //@line 591 "binascii.c"
        HEAP[$leftbits]=$58; //@line 591 "binascii.c"
        var $59=HEAP[$leftchar]; //@line 592 "binascii.c"
        var $60=HEAP[$leftbits]; //@line 592 "binascii.c"
        var $61=((($59))>>>0) >>> ((($60))>>>0); //@line 592 "binascii.c"
        var $62=((($61)) & 255); //@line 592 "binascii.c"
        var $63=HEAP[$bin_data]; //@line 592 "binascii.c"
        HEAP[$63]=$62; //@line 592 "binascii.c"
        var $64=HEAP[$bin_data]; //@line 592 "binascii.c"
        var $65=(($64+1)&4294967295); //@line 592 "binascii.c"
        HEAP[$bin_data]=$65; //@line 592 "binascii.c"
        var $66=HEAP[$leftbits]; //@line 593 "binascii.c"
        var $67=1 << ($66); //@line 593 "binascii.c"
        var $68=((($67) - 1)&4294967295); //@line 593 "binascii.c"
        var $69=HEAP[$leftchar]; //@line 593 "binascii.c"
        var $70=($68) & ($69); //@line 593 "binascii.c"
        HEAP[$leftchar]=$70; //@line 593 "binascii.c"
        __label__ = 18; break; //@line 593 "binascii.c"
      case 18: // $bb17
        var $71=HEAP[$len]; //@line 570 "binascii.c"
        var $72=((($71) - 1)&4294967295); //@line 570 "binascii.c"
        HEAP[$len]=$72; //@line 570 "binascii.c"
        var $73=HEAP[$ascii_data]; //@line 570 "binascii.c"
        var $74=(($73+1)&4294967295); //@line 570 "binascii.c"
        HEAP[$ascii_data]=$74; //@line 570 "binascii.c"
        __label__ = 19; break; //@line 570 "binascii.c"
      case 19: // $bb18
        var $75=HEAP[$len]; //@line 570 "binascii.c"
        var $76=((($75))|0) > 0; //@line 570 "binascii.c"
        if ($76) { __label__ = 9; break; } else { __label__ = 20; break; } //@line 570 "binascii.c"
      case 20: // $bb19
        var $77=HEAP[$leftbits]; //@line 597 "binascii.c"
        var $78=((($77))|0)!=0; //@line 597 "binascii.c"
        if ($78) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 597 "binascii.c"
      case 21: // $bb20
        var $79=HEAP[$done]; //@line 597 "binascii.c"
        var $80=((($79))|0)==0; //@line 597 "binascii.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 597 "binascii.c"
      case 22: // $bb21
        var $81=HEAP[_Incomplete]; //@line 598 "binascii.c"
        _PyErr_SetString($81, ((__str15)&4294967295)); //@line 598 "binascii.c"
        _PyBuffer_Release($pascii); //@line 600 "binascii.c"
        var $82=HEAP[$rv]; //@line 601 "binascii.c"
        var $83=(($82)&4294967295); //@line 601 "binascii.c"
        var $84=HEAP[$83]; //@line 601 "binascii.c"
        var $85=((($84) - 1)&4294967295); //@line 601 "binascii.c"
        var $86=(($82)&4294967295); //@line 601 "binascii.c"
        HEAP[$86]=$85; //@line 601 "binascii.c"
        var $87=(($82)&4294967295); //@line 601 "binascii.c"
        var $88=HEAP[$87]; //@line 601 "binascii.c"
        var $89=((($88))|0)==0; //@line 601 "binascii.c"
        if ($89) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 601 "binascii.c"
      case 23: // $bb22
        var $90=HEAP[$rv]; //@line 601 "binascii.c"
        var $91=(($90+4)&4294967295); //@line 601 "binascii.c"
        var $92=HEAP[$91]; //@line 601 "binascii.c"
        var $93=(($92+24)&4294967295); //@line 601 "binascii.c"
        var $94=HEAP[$93]; //@line 601 "binascii.c"
        var $95=HEAP[$rv]; //@line 601 "binascii.c"
        FUNCTION_TABLE[$94]($95); //@line 601 "binascii.c"
        __label__ = 24; break; //@line 601 "binascii.c"
      case 24: // $bb23
        HEAP[$0]=0; //@line 602 "binascii.c"
        __label__ = 34; break; //@line 602 "binascii.c"
      case 25: // $bb24
        var $96=HEAP[$bin_data]; //@line 604 "binascii.c"
        var $97=($96); //@line 604 "binascii.c"
        var $98=HEAP[$rv]; //@line 604 "binascii.c"
        var $99=$98; //@line 604 "binascii.c"
        var $100=(($99+20)&4294967295); //@line 604 "binascii.c"
        var $101=($100); //@line 604 "binascii.c"
        var $102=((($97) - ($101))&4294967295); //@line 604 "binascii.c"
        var $103=__PyString_Resize($rv, $102); //@line 604 "binascii.c"
        var $104=((($103))|0) < 0; //@line 604 "binascii.c"
        if ($104) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 604 "binascii.c"
      case 26: // $bb25
        var $105=HEAP[$rv]; //@line 607 "binascii.c"
        var $106=(($105)&4294967295); //@line 607 "binascii.c"
        var $107=HEAP[$106]; //@line 607 "binascii.c"
        var $108=((($107) - 1)&4294967295); //@line 607 "binascii.c"
        var $109=(($105)&4294967295); //@line 607 "binascii.c"
        HEAP[$109]=$108; //@line 607 "binascii.c"
        var $110=(($105)&4294967295); //@line 607 "binascii.c"
        var $111=HEAP[$110]; //@line 607 "binascii.c"
        var $112=((($111))|0)==0; //@line 607 "binascii.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 607 "binascii.c"
      case 27: // $bb26
        var $113=HEAP[$rv]; //@line 607 "binascii.c"
        var $114=(($113+4)&4294967295); //@line 607 "binascii.c"
        var $115=HEAP[$114]; //@line 607 "binascii.c"
        var $116=(($115+24)&4294967295); //@line 607 "binascii.c"
        var $117=HEAP[$116]; //@line 607 "binascii.c"
        var $118=HEAP[$rv]; //@line 607 "binascii.c"
        FUNCTION_TABLE[$117]($118); //@line 607 "binascii.c"
        __label__ = 28; break; //@line 607 "binascii.c"
      case 28: // $bb27
        HEAP[$rv]=0; //@line 608 "binascii.c"
        __label__ = 29; break; //@line 608 "binascii.c"
      case 29: // $bb28
        var $119=HEAP[$rv]; //@line 610 "binascii.c"
        var $120=($119)!=0; //@line 610 "binascii.c"
        if ($120) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 610 "binascii.c"
      case 30: // $bb29
        var $121=HEAP[$rv]; //@line 611 "binascii.c"
        var $122=HEAP[$done]; //@line 611 "binascii.c"
        var $123=__Py_BuildValue_SizeT(((__str16)&4294967295), $121, $122); //@line 611 "binascii.c"
        HEAP[$rrv]=$123; //@line 611 "binascii.c"
        _PyBuffer_Release($pascii); //@line 612 "binascii.c"
        var $124=HEAP[$rv]; //@line 613 "binascii.c"
        var $125=(($124)&4294967295); //@line 613 "binascii.c"
        var $126=HEAP[$125]; //@line 613 "binascii.c"
        var $127=((($126) - 1)&4294967295); //@line 613 "binascii.c"
        var $128=(($124)&4294967295); //@line 613 "binascii.c"
        HEAP[$128]=$127; //@line 613 "binascii.c"
        var $129=(($124)&4294967295); //@line 613 "binascii.c"
        var $130=HEAP[$129]; //@line 613 "binascii.c"
        var $131=((($130))|0)==0; //@line 613 "binascii.c"
        if ($131) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 613 "binascii.c"
      case 31: // $bb30
        var $132=HEAP[$rv]; //@line 613 "binascii.c"
        var $133=(($132+4)&4294967295); //@line 613 "binascii.c"
        var $134=HEAP[$133]; //@line 613 "binascii.c"
        var $135=(($134+24)&4294967295); //@line 613 "binascii.c"
        var $136=HEAP[$135]; //@line 613 "binascii.c"
        var $137=HEAP[$rv]; //@line 613 "binascii.c"
        FUNCTION_TABLE[$136]($137); //@line 613 "binascii.c"
        __label__ = 32; break; //@line 613 "binascii.c"
      case 32: // $bb31
        var $138=HEAP[$rrv]; //@line 614 "binascii.c"
        HEAP[$0]=$138; //@line 614 "binascii.c"
        __label__ = 34; break; //@line 614 "binascii.c"
      case 33: // $bb32
        _PyBuffer_Release($pascii); //@line 617 "binascii.c"
        HEAP[$0]=0; //@line 618 "binascii.c"
        __label__ = 34; break; //@line 618 "binascii.c"
      case 34: // $bb33
        var $139=HEAP[$0]; //@line 550 "binascii.c"
        HEAP[$retval]=$139; //@line 550 "binascii.c"
        __label__ = 35; break; //@line 550 "binascii.c"
      case 35: // $return
        var $retval34=HEAP[$retval]; //@line 550 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 550 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_rlecode_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 93; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pbuf=__stackBase__+16;
        var $in_data=__stackBase__+68;
        var $out_data=__stackBase__+72;
        var $rv=__stackBase__+76;
        var $ch=__stackBase__+80;
        var $in=__stackBase__+81;
        var $inend=__stackBase__+85;
        var $len=__stackBase__+89;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 632 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str17)&4294967295), $pbuf); //@line 632 "binascii.c"
        var $3=((($2))|0)==0; //@line 632 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 632 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 633 "binascii.c"
        __label__ = 26; break; //@line 633 "binascii.c"
      case 2: // $bb1
        var $4=(($pbuf)&4294967295); //@line 634 "binascii.c"
        var $5=HEAP[$4]; //@line 634 "binascii.c"
        HEAP[$in_data]=$5; //@line 634 "binascii.c"
        var $6=(($pbuf+8)&4294967295); //@line 635 "binascii.c"
        var $7=HEAP[$6]; //@line 635 "binascii.c"
        HEAP[$len]=$7; //@line 635 "binascii.c"
        var $8=HEAP[$len]; //@line 637 "binascii.c"
        var $9=((($8))|0) < 0; //@line 637 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str14)&4294967295), ((__str2)&4294967295), 637, ((___PRETTY_FUNCTION___8803)&4294967295)); //@line 637 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 1727"; //@line 637 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$len]; //@line 639 "binascii.c"
        var $11=((($10))|0) > 1073741821; //@line 639 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 639 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbuf); //@line 640 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 641 "binascii.c"
        HEAP[$0]=$12; //@line 641 "binascii.c"
        __label__ = 26; break; //@line 641 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 645 "binascii.c"
        var $14=((($13) + 1)&4294967295); //@line 645 "binascii.c"
        var $15=((($14) * 2)&4294967295); //@line 645 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 645 "binascii.c"
        HEAP[$rv]=$16; //@line 645 "binascii.c"
        var $17=HEAP[$rv]; //@line 645 "binascii.c"
        var $18=($17)==0; //@line 645 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 645 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbuf); //@line 646 "binascii.c"
        HEAP[$0]=0; //@line 647 "binascii.c"
        __label__ = 26; break; //@line 647 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 649 "binascii.c"
        var $20=$19; //@line 649 "binascii.c"
        var $21=(($20+20)&4294967295); //@line 649 "binascii.c"
        var $22=$21; //@line 649 "binascii.c"
        HEAP[$out_data]=$22; //@line 649 "binascii.c"
        HEAP[$in]=0; //@line 651 "binascii.c"
        __label__ = 20; break; //@line 651 "binascii.c"
      case 9: // $bb8
        var $23=HEAP[$in_data]; //@line 652 "binascii.c"
        var $24=HEAP[$in]; //@line 652 "binascii.c"
        var $25=(($23+$24)&4294967295); //@line 652 "binascii.c"
        var $26=HEAP[$25]; //@line 652 "binascii.c"
        HEAP[$ch]=$26; //@line 652 "binascii.c"
        var $27=HEAP[$ch]; //@line 653 "binascii.c"
        var $28=reSign(($27), 8, 0)==-112; //@line 653 "binascii.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 653 "binascii.c"
      case 10: // $bb9
        var $29=HEAP[$out_data]; //@line 655 "binascii.c"
        HEAP[$29]=-112; //@line 655 "binascii.c"
        var $30=HEAP[$out_data]; //@line 655 "binascii.c"
        var $31=(($30+1)&4294967295); //@line 655 "binascii.c"
        HEAP[$out_data]=$31; //@line 655 "binascii.c"
        var $32=HEAP[$out_data]; //@line 656 "binascii.c"
        HEAP[$32]=0; //@line 656 "binascii.c"
        var $33=HEAP[$out_data]; //@line 656 "binascii.c"
        var $34=(($33+1)&4294967295); //@line 656 "binascii.c"
        HEAP[$out_data]=$34; //@line 656 "binascii.c"
        __label__ = 19; break; //@line 656 "binascii.c"
      case 11: // $bb10
        var $35=HEAP[$in]; //@line 659 "binascii.c"
        var $36=((($35) + 1)&4294967295); //@line 659 "binascii.c"
        HEAP[$inend]=$36; //@line 659 "binascii.c"
        __label__ = 13; break; //@line 659 "binascii.c"
      case 12: // $bb11
        var $37=HEAP[$inend]; //@line 662 "binascii.c"
        var $38=((($37) + 1)&4294967295); //@line 662 "binascii.c"
        HEAP[$inend]=$38; //@line 662 "binascii.c"
        __label__ = 13; break; //@line 662 "binascii.c"
      case 13: // $bb12
        var $39=HEAP[$inend]; //@line 660 "binascii.c"
        var $40=HEAP[$len]; //@line 660 "binascii.c"
        var $41=((($39))|0) >= ((($40))|0); //@line 660 "binascii.c"
        if ($41) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 660 "binascii.c"
      case 14: // $bb13
        var $42=HEAP[$in_data]; //@line 660 "binascii.c"
        var $43=HEAP[$inend]; //@line 660 "binascii.c"
        var $44=(($42+$43)&4294967295); //@line 660 "binascii.c"
        var $45=HEAP[$44]; //@line 660 "binascii.c"
        var $46=HEAP[$ch]; //@line 660 "binascii.c"
        var $47=reSign(($45), 8, 0)!=reSign(($46), 8, 0); //@line 660 "binascii.c"
        if ($47) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 660 "binascii.c"
      case 15: // $bb14
        var $48=HEAP[$in]; //@line 660 "binascii.c"
        var $49=((($48) + 255)&4294967295); //@line 660 "binascii.c"
        var $50=HEAP[$inend]; //@line 660 "binascii.c"
        var $51=((($49))|0) > ((($50))|0); //@line 660 "binascii.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 660 "binascii.c"
      case 16: // $bb15
        var $52=HEAP[$inend]; //@line 663 "binascii.c"
        var $53=HEAP[$in]; //@line 663 "binascii.c"
        var $54=((($52) - ($53))&4294967295); //@line 663 "binascii.c"
        var $55=((($54))|0) > 3; //@line 663 "binascii.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 663 "binascii.c"
      case 17: // $bb16
        var $56=HEAP[$out_data]; //@line 665 "binascii.c"
        var $57=HEAP[$ch]; //@line 665 "binascii.c"
        HEAP[$56]=$57; //@line 665 "binascii.c"
        var $58=HEAP[$out_data]; //@line 665 "binascii.c"
        var $59=(($58+1)&4294967295); //@line 665 "binascii.c"
        HEAP[$out_data]=$59; //@line 665 "binascii.c"
        var $60=HEAP[$out_data]; //@line 666 "binascii.c"
        HEAP[$60]=-112; //@line 666 "binascii.c"
        var $61=HEAP[$out_data]; //@line 666 "binascii.c"
        var $62=(($61+1)&4294967295); //@line 666 "binascii.c"
        HEAP[$out_data]=$62; //@line 666 "binascii.c"
        var $63=HEAP[$inend]; //@line 667 "binascii.c"
        var $64=((($63)) & 255); //@line 667 "binascii.c"
        var $65=HEAP[$in]; //@line 667 "binascii.c"
        var $66=((($65)) & 255); //@line 667 "binascii.c"
        var $67=((($64) - ($66))&255); //@line 667 "binascii.c"
        var $68=HEAP[$out_data]; //@line 667 "binascii.c"
        HEAP[$68]=$67; //@line 667 "binascii.c"
        var $69=HEAP[$out_data]; //@line 667 "binascii.c"
        var $70=(($69+1)&4294967295); //@line 667 "binascii.c"
        HEAP[$out_data]=$70; //@line 667 "binascii.c"
        var $71=HEAP[$inend]; //@line 668 "binascii.c"
        var $72=((($71) - 1)&4294967295); //@line 668 "binascii.c"
        HEAP[$in]=$72; //@line 668 "binascii.c"
        __label__ = 19; break; //@line 668 "binascii.c"
      case 18: // $bb17
        var $73=HEAP[$out_data]; //@line 671 "binascii.c"
        var $74=HEAP[$ch]; //@line 671 "binascii.c"
        HEAP[$73]=$74; //@line 671 "binascii.c"
        var $75=HEAP[$out_data]; //@line 671 "binascii.c"
        var $76=(($75+1)&4294967295); //@line 671 "binascii.c"
        HEAP[$out_data]=$76; //@line 671 "binascii.c"
        __label__ = 19; break; //@line 671 "binascii.c"
      case 19: // $bb18
        var $77=HEAP[$in]; //@line 651 "binascii.c"
        var $78=((($77) + 1)&4294967295); //@line 651 "binascii.c"
        HEAP[$in]=$78; //@line 651 "binascii.c"
        __label__ = 20; break; //@line 651 "binascii.c"
      case 20: // $bb19
        var $79=HEAP[$in]; //@line 651 "binascii.c"
        var $80=HEAP[$len]; //@line 651 "binascii.c"
        var $81=((($79))|0) < ((($80))|0); //@line 651 "binascii.c"
        if ($81) { __label__ = 9; break; } else { __label__ = 21; break; } //@line 651 "binascii.c"
      case 21: // $bb20
        var $82=HEAP[$out_data]; //@line 675 "binascii.c"
        var $83=($82); //@line 675 "binascii.c"
        var $84=HEAP[$rv]; //@line 675 "binascii.c"
        var $85=$84; //@line 675 "binascii.c"
        var $86=(($85+20)&4294967295); //@line 675 "binascii.c"
        var $87=($86); //@line 675 "binascii.c"
        var $88=((($83) - ($87))&4294967295); //@line 675 "binascii.c"
        var $89=__PyString_Resize($rv, $88); //@line 675 "binascii.c"
        var $90=((($89))|0) < 0; //@line 675 "binascii.c"
        if ($90) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 675 "binascii.c"
      case 22: // $bb21
        var $91=HEAP[$rv]; //@line 678 "binascii.c"
        var $92=(($91)&4294967295); //@line 678 "binascii.c"
        var $93=HEAP[$92]; //@line 678 "binascii.c"
        var $94=((($93) - 1)&4294967295); //@line 678 "binascii.c"
        var $95=(($91)&4294967295); //@line 678 "binascii.c"
        HEAP[$95]=$94; //@line 678 "binascii.c"
        var $96=(($91)&4294967295); //@line 678 "binascii.c"
        var $97=HEAP[$96]; //@line 678 "binascii.c"
        var $98=((($97))|0)==0; //@line 678 "binascii.c"
        if ($98) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 678 "binascii.c"
      case 23: // $bb22
        var $99=HEAP[$rv]; //@line 678 "binascii.c"
        var $100=(($99+4)&4294967295); //@line 678 "binascii.c"
        var $101=HEAP[$100]; //@line 678 "binascii.c"
        var $102=(($101+24)&4294967295); //@line 678 "binascii.c"
        var $103=HEAP[$102]; //@line 678 "binascii.c"
        var $104=HEAP[$rv]; //@line 678 "binascii.c"
        FUNCTION_TABLE[$103]($104); //@line 678 "binascii.c"
        __label__ = 24; break; //@line 678 "binascii.c"
      case 24: // $bb23
        HEAP[$rv]=0; //@line 679 "binascii.c"
        __label__ = 25; break; //@line 679 "binascii.c"
      case 25: // $bb24
        _PyBuffer_Release($pbuf); //@line 681 "binascii.c"
        var $105=HEAP[$rv]; //@line 682 "binascii.c"
        HEAP[$0]=$105; //@line 682 "binascii.c"
        __label__ = 26; break; //@line 682 "binascii.c"
      case 26: // $bb25
        var $106=HEAP[$0]; //@line 633 "binascii.c"
        HEAP[$retval]=$106; //@line 633 "binascii.c"
        __label__ = 27; break; //@line 633 "binascii.c"
      case 27: // $return
        var $retval26=HEAP[$retval]; //@line 633 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 633 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 93; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 93);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pbin=__stackBase__+16;
        var $ascii_data=__stackBase__+68;
        var $bin_data=__stackBase__+72;
        var $leftbits=__stackBase__+76;
        var $this_ch=__stackBase__+80;
        var $leftchar=__stackBase__+81;
        var $rv=__stackBase__+85;
        var $len=__stackBase__+89;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$leftbits]=0; //@line 692 "binascii.c"
        HEAP[$leftchar]=0; //@line 694 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 698 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str18)&4294967295), $pbin); //@line 698 "binascii.c"
        var $3=((($2))|0)==0; //@line 698 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 698 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 699 "binascii.c"
        __label__ = 21; break; //@line 699 "binascii.c"
      case 2: // $bb1
        var $4=(($pbin)&4294967295); //@line 700 "binascii.c"
        var $5=HEAP[$4]; //@line 700 "binascii.c"
        HEAP[$bin_data]=$5; //@line 700 "binascii.c"
        var $6=(($pbin+8)&4294967295); //@line 701 "binascii.c"
        var $7=HEAP[$6]; //@line 701 "binascii.c"
        HEAP[$len]=$7; //@line 701 "binascii.c"
        var $8=HEAP[$len]; //@line 703 "binascii.c"
        var $9=((($8))|0) < 0; //@line 703 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 703 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str14)&4294967295), ((__str2)&4294967295), 703, ((___PRETTY_FUNCTION___8876)&4294967295)); //@line 703 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 1982"; //@line 703 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$len]; //@line 705 "binascii.c"
        var $11=((($10))|0) > 1073741821; //@line 705 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 705 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pbin); //@line 706 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 707 "binascii.c"
        HEAP[$0]=$12; //@line 707 "binascii.c"
        __label__ = 21; break; //@line 707 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 711 "binascii.c"
        var $14=((($13) + 1)&4294967295); //@line 711 "binascii.c"
        var $15=((($14) * 2)&4294967295); //@line 711 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 711 "binascii.c"
        HEAP[$rv]=$16; //@line 711 "binascii.c"
        var $17=HEAP[$rv]; //@line 711 "binascii.c"
        var $18=($17)==0; //@line 711 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 711 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pbin); //@line 712 "binascii.c"
        HEAP[$0]=0; //@line 713 "binascii.c"
        __label__ = 21; break; //@line 713 "binascii.c"
      case 8: // $bb7
        var $19=HEAP[$rv]; //@line 715 "binascii.c"
        var $20=$19; //@line 715 "binascii.c"
        var $21=(($20+20)&4294967295); //@line 715 "binascii.c"
        var $22=$21; //@line 715 "binascii.c"
        HEAP[$ascii_data]=$22; //@line 715 "binascii.c"
        __label__ = 13; break; //@line 715 "binascii.c"
      case 9: // $bb8
        var $23=HEAP[$leftchar]; //@line 719 "binascii.c"
        var $24=($23) << 8; //@line 719 "binascii.c"
        var $25=HEAP[$bin_data]; //@line 719 "binascii.c"
        var $26=HEAP[$25]; //@line 719 "binascii.c"
        var $27=unSign(($26), 8, 0); //@line 719 "binascii.c"
        var $28=($24) | ($27); //@line 719 "binascii.c"
        HEAP[$leftchar]=$28; //@line 719 "binascii.c"
        var $29=HEAP[$leftbits]; //@line 720 "binascii.c"
        var $30=((($29) + 8)&4294967295); //@line 720 "binascii.c"
        HEAP[$leftbits]=$30; //@line 720 "binascii.c"
        __label__ = 11; break; //@line 720 "binascii.c"
      case 10: // $bb9
        var $31=HEAP[$leftbits]; //@line 722 "binascii.c"
        var $32=((($31) - 6)&4294967295); //@line 722 "binascii.c"
        var $33=HEAP[$leftchar]; //@line 722 "binascii.c"
        var $34=((($33))>>>0) >>> ((($32))>>>0); //@line 722 "binascii.c"
        var $35=((($34)) & 255); //@line 722 "binascii.c"
        var $36=($35) & 63; //@line 722 "binascii.c"
        HEAP[$this_ch]=$36; //@line 722 "binascii.c"
        var $37=HEAP[$leftbits]; //@line 723 "binascii.c"
        var $38=((($37) - 6)&4294967295); //@line 723 "binascii.c"
        HEAP[$leftbits]=$38; //@line 723 "binascii.c"
        var $39=HEAP[$this_ch]; //@line 724 "binascii.c"
        var $40=unSign(($39), 8, 0); //@line 724 "binascii.c"
        var $41=((_table_b2a_hqx+$40)&4294967295); //@line 724 "binascii.c"
        var $42=HEAP[$41]; //@line 724 "binascii.c"
        var $43=HEAP[$ascii_data]; //@line 724 "binascii.c"
        HEAP[$43]=$42; //@line 724 "binascii.c"
        var $44=HEAP[$ascii_data]; //@line 724 "binascii.c"
        var $45=(($44+1)&4294967295); //@line 724 "binascii.c"
        HEAP[$ascii_data]=$45; //@line 724 "binascii.c"
        __label__ = 11; break; //@line 724 "binascii.c"
      case 11: // $bb10
        var $46=HEAP[$leftbits]; //@line 721 "binascii.c"
        var $47=((($46))|0) > 5; //@line 721 "binascii.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 721 "binascii.c"
      case 12: // $bb11
        var $48=HEAP[$len]; //@line 717 "binascii.c"
        var $49=((($48) - 1)&4294967295); //@line 717 "binascii.c"
        HEAP[$len]=$49; //@line 717 "binascii.c"
        var $50=HEAP[$bin_data]; //@line 717 "binascii.c"
        var $51=(($50+1)&4294967295); //@line 717 "binascii.c"
        HEAP[$bin_data]=$51; //@line 717 "binascii.c"
        __label__ = 13; break; //@line 717 "binascii.c"
      case 13: // $bb12
        var $52=HEAP[$len]; //@line 717 "binascii.c"
        var $53=((($52))|0) > 0; //@line 717 "binascii.c"
        if ($53) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 717 "binascii.c"
      case 14: // $bb13
        var $54=HEAP[$leftbits]; //@line 728 "binascii.c"
        var $55=((($54))|0)!=0; //@line 728 "binascii.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 728 "binascii.c"
      case 15: // $bb14
        var $56=HEAP[$leftbits]; //@line 729 "binascii.c"
        var $57=((6 - ($56))&4294967295); //@line 729 "binascii.c"
        var $58=HEAP[$leftchar]; //@line 729 "binascii.c"
        var $59=($58) << ($57); //@line 729 "binascii.c"
        HEAP[$leftchar]=$59; //@line 729 "binascii.c"
        var $60=HEAP[$leftchar]; //@line 730 "binascii.c"
        var $61=($60) & 63; //@line 730 "binascii.c"
        var $62=((_table_b2a_hqx+$61)&4294967295); //@line 730 "binascii.c"
        var $63=HEAP[$62]; //@line 730 "binascii.c"
        var $64=HEAP[$ascii_data]; //@line 730 "binascii.c"
        HEAP[$64]=$63; //@line 730 "binascii.c"
        var $65=HEAP[$ascii_data]; //@line 730 "binascii.c"
        var $66=(($65+1)&4294967295); //@line 730 "binascii.c"
        HEAP[$ascii_data]=$66; //@line 730 "binascii.c"
        __label__ = 16; break; //@line 730 "binascii.c"
      case 16: // $bb15
        var $67=HEAP[$ascii_data]; //@line 732 "binascii.c"
        var $68=($67); //@line 732 "binascii.c"
        var $69=HEAP[$rv]; //@line 732 "binascii.c"
        var $70=$69; //@line 732 "binascii.c"
        var $71=(($70+20)&4294967295); //@line 732 "binascii.c"
        var $72=($71); //@line 732 "binascii.c"
        var $73=((($68) - ($72))&4294967295); //@line 732 "binascii.c"
        var $74=__PyString_Resize($rv, $73); //@line 732 "binascii.c"
        var $75=((($74))|0) < 0; //@line 732 "binascii.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 732 "binascii.c"
      case 17: // $bb16
        var $76=HEAP[$rv]; //@line 735 "binascii.c"
        var $77=(($76)&4294967295); //@line 735 "binascii.c"
        var $78=HEAP[$77]; //@line 735 "binascii.c"
        var $79=((($78) - 1)&4294967295); //@line 735 "binascii.c"
        var $80=(($76)&4294967295); //@line 735 "binascii.c"
        HEAP[$80]=$79; //@line 735 "binascii.c"
        var $81=(($76)&4294967295); //@line 735 "binascii.c"
        var $82=HEAP[$81]; //@line 735 "binascii.c"
        var $83=((($82))|0)==0; //@line 735 "binascii.c"
        if ($83) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 735 "binascii.c"
      case 18: // $bb17
        var $84=HEAP[$rv]; //@line 735 "binascii.c"
        var $85=(($84+4)&4294967295); //@line 735 "binascii.c"
        var $86=HEAP[$85]; //@line 735 "binascii.c"
        var $87=(($86+24)&4294967295); //@line 735 "binascii.c"
        var $88=HEAP[$87]; //@line 735 "binascii.c"
        var $89=HEAP[$rv]; //@line 735 "binascii.c"
        FUNCTION_TABLE[$88]($89); //@line 735 "binascii.c"
        __label__ = 19; break; //@line 735 "binascii.c"
      case 19: // $bb18
        HEAP[$rv]=0; //@line 736 "binascii.c"
        __label__ = 20; break; //@line 736 "binascii.c"
      case 20: // $bb19
        _PyBuffer_Release($pbin); //@line 738 "binascii.c"
        var $90=HEAP[$rv]; //@line 739 "binascii.c"
        HEAP[$0]=$90; //@line 739 "binascii.c"
        __label__ = 21; break; //@line 739 "binascii.c"
      case 21: // $bb20
        var $91=HEAP[$0]; //@line 699 "binascii.c"
        HEAP[$retval]=$91; //@line 699 "binascii.c"
        __label__ = 22; break; //@line 699 "binascii.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 699 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 699 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_rledecode_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 94; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 94);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pin=__stackBase__+16;
        var $in_data=__stackBase__+68;
        var $out_data=__stackBase__+72;
        var $in_byte=__stackBase__+76;
        var $in_repeat=__stackBase__+77;
        var $rv=__stackBase__+78;
        var $in_len=__stackBase__+82;
        var $out_len=__stackBase__+86;
        var $out_len_left=__stackBase__+90;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 753 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str19)&4294967295), $pin); //@line 753 "binascii.c"
        var $3=((($2))|0)==0; //@line 753 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 753 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 754 "binascii.c"
        __label__ = 88; break; //@line 754 "binascii.c"
      case 2: // $bb1
        var $4=(($pin)&4294967295); //@line 755 "binascii.c"
        var $5=HEAP[$4]; //@line 755 "binascii.c"
        HEAP[$in_data]=$5; //@line 755 "binascii.c"
        var $6=(($pin+8)&4294967295); //@line 756 "binascii.c"
        var $7=HEAP[$6]; //@line 756 "binascii.c"
        HEAP[$in_len]=$7; //@line 756 "binascii.c"
        var $8=HEAP[$in_len]; //@line 758 "binascii.c"
        var $9=((($8))|0) < 0; //@line 758 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 758 "binascii.c"
      case 3: // $bb2
        ___assert_fail(((__str20)&4294967295), ((__str2)&4294967295), 758, ((___PRETTY_FUNCTION___8949)&4294967295)); //@line 758 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 2200"; //@line 758 "binascii.c"
      case 4: // $bb3
        var $10=HEAP[$in_len]; //@line 761 "binascii.c"
        var $11=((($10))|0)==0; //@line 761 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 761 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pin); //@line 762 "binascii.c"
        var $12=_PyString_FromStringAndSize(((__str9)&4294967295), 0); //@line 763 "binascii.c"
        HEAP[$0]=$12; //@line 763 "binascii.c"
        __label__ = 88; break; //@line 763 "binascii.c"
      case 6: // $bb5
        var $13=HEAP[$in_len]; //@line 765 "binascii.c"
        var $14=((($13))|0) > 1073741823; //@line 765 "binascii.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 765 "binascii.c"
      case 7: // $bb6
        _PyBuffer_Release($pin); //@line 766 "binascii.c"
        var $15=_PyErr_NoMemory(); //@line 767 "binascii.c"
        HEAP[$0]=$15; //@line 767 "binascii.c"
        __label__ = 88; break; //@line 767 "binascii.c"
      case 8: // $bb7
        var $16=HEAP[$in_len]; //@line 771 "binascii.c"
        var $17=((($16) * 2)&4294967295); //@line 771 "binascii.c"
        HEAP[$out_len]=$17; //@line 771 "binascii.c"
        var $18=HEAP[$out_len]; //@line 772 "binascii.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 772 "binascii.c"
        HEAP[$rv]=$19; //@line 772 "binascii.c"
        var $20=HEAP[$rv]; //@line 772 "binascii.c"
        var $21=($20)==0; //@line 772 "binascii.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 772 "binascii.c"
      case 9: // $bb8
        _PyBuffer_Release($pin); //@line 773 "binascii.c"
        HEAP[$0]=0; //@line 774 "binascii.c"
        __label__ = 88; break; //@line 774 "binascii.c"
      case 10: // $bb9
        var $22=HEAP[$out_len]; //@line 776 "binascii.c"
        HEAP[$out_len_left]=$22; //@line 776 "binascii.c"
        var $23=HEAP[$rv]; //@line 777 "binascii.c"
        var $24=$23; //@line 777 "binascii.c"
        var $25=(($24+20)&4294967295); //@line 777 "binascii.c"
        var $26=$25; //@line 777 "binascii.c"
        HEAP[$out_data]=$26; //@line 777 "binascii.c"
        var $27=HEAP[$in_len]; //@line 812 "binascii.c"
        var $28=((($27) - 1)&4294967295); //@line 812 "binascii.c"
        HEAP[$in_len]=$28; //@line 812 "binascii.c"
        var $29=HEAP[$in_len]; //@line 812 "binascii.c"
        var $30=((($29))|0) < 0; //@line 812 "binascii.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 812 "binascii.c"
      case 11: // $bb10
        var $31=HEAP[_Incomplete]; //@line 812 "binascii.c"
        _PyErr_SetString($31, ((__str9)&4294967295)); //@line 812 "binascii.c"
        var $32=HEAP[$rv]; //@line 812 "binascii.c"
        var $33=(($32)&4294967295); //@line 812 "binascii.c"
        var $34=HEAP[$33]; //@line 812 "binascii.c"
        var $35=((($34) - 1)&4294967295); //@line 812 "binascii.c"
        var $36=(($32)&4294967295); //@line 812 "binascii.c"
        HEAP[$36]=$35; //@line 812 "binascii.c"
        var $37=(($32)&4294967295); //@line 812 "binascii.c"
        var $38=HEAP[$37]; //@line 812 "binascii.c"
        var $39=((($38))|0)==0; //@line 812 "binascii.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 812 "binascii.c"
      case 12: // $bb11
        var $40=HEAP[$rv]; //@line 812 "binascii.c"
        var $41=(($40+4)&4294967295); //@line 812 "binascii.c"
        var $42=HEAP[$41]; //@line 812 "binascii.c"
        var $43=(($42+24)&4294967295); //@line 812 "binascii.c"
        var $44=HEAP[$43]; //@line 812 "binascii.c"
        var $45=HEAP[$rv]; //@line 812 "binascii.c"
        FUNCTION_TABLE[$44]($45); //@line 812 "binascii.c"
        __label__ = 13; break; //@line 812 "binascii.c"
      case 13: // $bb12
        _PyBuffer_Release($pin); //@line 812 "binascii.c"
        HEAP[$0]=0; //@line 812 "binascii.c"
        __label__ = 88; break; //@line 812 "binascii.c"
      case 14: // $bb13
        var $46=HEAP[$in_data]; //@line 812 "binascii.c"
        var $47=HEAP[$46]; //@line 812 "binascii.c"
        HEAP[$in_byte]=$47; //@line 812 "binascii.c"
        var $48=HEAP[$in_data]; //@line 812 "binascii.c"
        var $49=(($48+1)&4294967295); //@line 812 "binascii.c"
        HEAP[$in_data]=$49; //@line 812 "binascii.c"
        var $50=HEAP[$in_byte]; //@line 814 "binascii.c"
        var $51=reSign(($50), 8, 0)==-112; //@line 814 "binascii.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 32; break; } //@line 814 "binascii.c"
      case 15: // $bb14
        var $52=HEAP[$in_len]; //@line 815 "binascii.c"
        var $53=((($52) - 1)&4294967295); //@line 815 "binascii.c"
        HEAP[$in_len]=$53; //@line 815 "binascii.c"
        var $54=HEAP[$in_len]; //@line 815 "binascii.c"
        var $55=((($54))|0) < 0; //@line 815 "binascii.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 815 "binascii.c"
      case 16: // $bb15
        var $56=HEAP[_Incomplete]; //@line 815 "binascii.c"
        _PyErr_SetString($56, ((__str9)&4294967295)); //@line 815 "binascii.c"
        var $57=HEAP[$rv]; //@line 815 "binascii.c"
        var $58=(($57)&4294967295); //@line 815 "binascii.c"
        var $59=HEAP[$58]; //@line 815 "binascii.c"
        var $60=((($59) - 1)&4294967295); //@line 815 "binascii.c"
        var $61=(($57)&4294967295); //@line 815 "binascii.c"
        HEAP[$61]=$60; //@line 815 "binascii.c"
        var $62=(($57)&4294967295); //@line 815 "binascii.c"
        var $63=HEAP[$62]; //@line 815 "binascii.c"
        var $64=((($63))|0)==0; //@line 815 "binascii.c"
        if ($64) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 815 "binascii.c"
      case 17: // $bb16
        var $65=HEAP[$rv]; //@line 815 "binascii.c"
        var $66=(($65+4)&4294967295); //@line 815 "binascii.c"
        var $67=HEAP[$66]; //@line 815 "binascii.c"
        var $68=(($67+24)&4294967295); //@line 815 "binascii.c"
        var $69=HEAP[$68]; //@line 815 "binascii.c"
        var $70=HEAP[$rv]; //@line 815 "binascii.c"
        FUNCTION_TABLE[$69]($70); //@line 815 "binascii.c"
        __label__ = 18; break; //@line 815 "binascii.c"
      case 18: // $bb17
        _PyBuffer_Release($pin); //@line 815 "binascii.c"
        HEAP[$0]=0; //@line 815 "binascii.c"
        __label__ = 88; break; //@line 815 "binascii.c"
      case 19: // $bb18
        var $71=HEAP[$in_data]; //@line 815 "binascii.c"
        var $72=HEAP[$71]; //@line 815 "binascii.c"
        HEAP[$in_repeat]=$72; //@line 815 "binascii.c"
        var $73=HEAP[$in_data]; //@line 815 "binascii.c"
        var $74=(($73+1)&4294967295); //@line 815 "binascii.c"
        HEAP[$in_data]=$74; //@line 815 "binascii.c"
        var $75=HEAP[$in_repeat]; //@line 816 "binascii.c"
        var $76=reSign(($75), 8, 0)!=0; //@line 816 "binascii.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 816 "binascii.c"
      case 20: // $bb19
        var $77=HEAP[_Error]; //@line 820 "binascii.c"
        _PyErr_SetString($77, ((__str21)&4294967295)); //@line 820 "binascii.c"
        _PyBuffer_Release($pin); //@line 821 "binascii.c"
        var $78=HEAP[$rv]; //@line 822 "binascii.c"
        var $79=(($78)&4294967295); //@line 822 "binascii.c"
        var $80=HEAP[$79]; //@line 822 "binascii.c"
        var $81=((($80) - 1)&4294967295); //@line 822 "binascii.c"
        var $82=(($78)&4294967295); //@line 822 "binascii.c"
        HEAP[$82]=$81; //@line 822 "binascii.c"
        var $83=(($78)&4294967295); //@line 822 "binascii.c"
        var $84=HEAP[$83]; //@line 822 "binascii.c"
        var $85=((($84))|0)==0; //@line 822 "binascii.c"
        if ($85) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 822 "binascii.c"
      case 21: // $bb20
        var $86=HEAP[$rv]; //@line 822 "binascii.c"
        var $87=(($86+4)&4294967295); //@line 822 "binascii.c"
        var $88=HEAP[$87]; //@line 822 "binascii.c"
        var $89=(($88+24)&4294967295); //@line 822 "binascii.c"
        var $90=HEAP[$89]; //@line 822 "binascii.c"
        var $91=HEAP[$rv]; //@line 822 "binascii.c"
        FUNCTION_TABLE[$90]($91); //@line 822 "binascii.c"
        __label__ = 22; break; //@line 822 "binascii.c"
      case 22: // $bb21
        HEAP[$0]=0; //@line 823 "binascii.c"
        __label__ = 88; break; //@line 823 "binascii.c"
      case 23: // $bb22
        var $92=HEAP[$out_len_left]; //@line 825 "binascii.c"
        var $93=((($92) - 1)&4294967295); //@line 825 "binascii.c"
        HEAP[$out_len_left]=$93; //@line 825 "binascii.c"
        var $94=HEAP[$out_len_left]; //@line 825 "binascii.c"
        var $95=((($94))|0) < 0; //@line 825 "binascii.c"
        if ($95) { __label__ = 24; break; } else { __label__ = 31; break; } //@line 825 "binascii.c"
      case 24: // $bb23
        var $96=HEAP[$out_len]; //@line 825 "binascii.c"
        var $97=((($96))|0) > 1073741823; //@line 825 "binascii.c"
        if ($97) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 825 "binascii.c"
      case 25: // $bb24
        var $98=_PyErr_NoMemory(); //@line 825 "binascii.c"
        HEAP[$0]=$98; //@line 825 "binascii.c"
        __label__ = 88; break; //@line 825 "binascii.c"
      case 26: // $bb25
        var $99=HEAP[$out_len]; //@line 825 "binascii.c"
        var $100=((($99) * 2)&4294967295); //@line 825 "binascii.c"
        var $101=__PyString_Resize($rv, $100); //@line 825 "binascii.c"
        var $102=((($101))|0) < 0; //@line 825 "binascii.c"
        if ($102) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 825 "binascii.c"
      case 27: // $bb26
        var $103=HEAP[$rv]; //@line 825 "binascii.c"
        var $104=(($103)&4294967295); //@line 825 "binascii.c"
        var $105=HEAP[$104]; //@line 825 "binascii.c"
        var $106=((($105) - 1)&4294967295); //@line 825 "binascii.c"
        var $107=(($103)&4294967295); //@line 825 "binascii.c"
        HEAP[$107]=$106; //@line 825 "binascii.c"
        var $108=(($103)&4294967295); //@line 825 "binascii.c"
        var $109=HEAP[$108]; //@line 825 "binascii.c"
        var $110=((($109))|0)==0; //@line 825 "binascii.c"
        if ($110) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 825 "binascii.c"
      case 28: // $bb27
        var $111=HEAP[$rv]; //@line 825 "binascii.c"
        var $112=(($111+4)&4294967295); //@line 825 "binascii.c"
        var $113=HEAP[$112]; //@line 825 "binascii.c"
        var $114=(($113+24)&4294967295); //@line 825 "binascii.c"
        var $115=HEAP[$114]; //@line 825 "binascii.c"
        var $116=HEAP[$rv]; //@line 825 "binascii.c"
        FUNCTION_TABLE[$115]($116); //@line 825 "binascii.c"
        __label__ = 29; break; //@line 825 "binascii.c"
      case 29: // $bb28
        _PyBuffer_Release($pin); //@line 825 "binascii.c"
        HEAP[$0]=0; //@line 825 "binascii.c"
        __label__ = 88; break; //@line 825 "binascii.c"
      case 30: // $bb29
        var $117=HEAP[$rv]; //@line 825 "binascii.c"
        var $118=$117; //@line 825 "binascii.c"
        var $119=(($118+20)&4294967295); //@line 825 "binascii.c"
        var $120=$119; //@line 825 "binascii.c"
        var $121=HEAP[$out_len]; //@line 825 "binascii.c"
        var $122=(($120+$121)&4294967295); //@line 825 "binascii.c"
        HEAP[$out_data]=$122; //@line 825 "binascii.c"
        var $123=HEAP[$out_len]; //@line 825 "binascii.c"
        var $124=((($123) - 1)&4294967295); //@line 825 "binascii.c"
        HEAP[$out_len_left]=$124; //@line 825 "binascii.c"
        var $125=HEAP[$out_len]; //@line 825 "binascii.c"
        var $126=((($125) * 2)&4294967295); //@line 825 "binascii.c"
        HEAP[$out_len]=$126; //@line 825 "binascii.c"
        __label__ = 31; break; //@line 825 "binascii.c"
      case 31: // $bb30
        var $127=HEAP[$out_data]; //@line 825 "binascii.c"
        HEAP[$127]=-112; //@line 825 "binascii.c"
        var $128=HEAP[$out_data]; //@line 825 "binascii.c"
        var $129=(($128+1)&4294967295); //@line 825 "binascii.c"
        HEAP[$out_data]=$129; //@line 825 "binascii.c"
        __label__ = 41; break; //@line 825 "binascii.c"
      case 32: // $bb31
        var $130=HEAP[$out_len_left]; //@line 827 "binascii.c"
        var $131=((($130) - 1)&4294967295); //@line 827 "binascii.c"
        HEAP[$out_len_left]=$131; //@line 827 "binascii.c"
        var $132=HEAP[$out_len_left]; //@line 827 "binascii.c"
        var $133=((($132))|0) < 0; //@line 827 "binascii.c"
        if ($133) { __label__ = 33; break; } else { __label__ = 40; break; } //@line 827 "binascii.c"
      case 33: // $bb32
        var $134=HEAP[$out_len]; //@line 827 "binascii.c"
        var $135=((($134))|0) > 1073741823; //@line 827 "binascii.c"
        if ($135) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 827 "binascii.c"
      case 34: // $bb33
        var $136=_PyErr_NoMemory(); //@line 827 "binascii.c"
        HEAP[$0]=$136; //@line 827 "binascii.c"
        __label__ = 88; break; //@line 827 "binascii.c"
      case 35: // $bb34
        var $137=HEAP[$out_len]; //@line 827 "binascii.c"
        var $138=((($137) * 2)&4294967295); //@line 827 "binascii.c"
        var $139=__PyString_Resize($rv, $138); //@line 827 "binascii.c"
        var $140=((($139))|0) < 0; //@line 827 "binascii.c"
        if ($140) { __label__ = 36; break; } else { __label__ = 39; break; } //@line 827 "binascii.c"
      case 36: // $bb35
        var $141=HEAP[$rv]; //@line 827 "binascii.c"
        var $142=(($141)&4294967295); //@line 827 "binascii.c"
        var $143=HEAP[$142]; //@line 827 "binascii.c"
        var $144=((($143) - 1)&4294967295); //@line 827 "binascii.c"
        var $145=(($141)&4294967295); //@line 827 "binascii.c"
        HEAP[$145]=$144; //@line 827 "binascii.c"
        var $146=(($141)&4294967295); //@line 827 "binascii.c"
        var $147=HEAP[$146]; //@line 827 "binascii.c"
        var $148=((($147))|0)==0; //@line 827 "binascii.c"
        if ($148) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 827 "binascii.c"
      case 37: // $bb36
        var $149=HEAP[$rv]; //@line 827 "binascii.c"
        var $150=(($149+4)&4294967295); //@line 827 "binascii.c"
        var $151=HEAP[$150]; //@line 827 "binascii.c"
        var $152=(($151+24)&4294967295); //@line 827 "binascii.c"
        var $153=HEAP[$152]; //@line 827 "binascii.c"
        var $154=HEAP[$rv]; //@line 827 "binascii.c"
        FUNCTION_TABLE[$153]($154); //@line 827 "binascii.c"
        __label__ = 38; break; //@line 827 "binascii.c"
      case 38: // $bb37
        _PyBuffer_Release($pin); //@line 827 "binascii.c"
        HEAP[$0]=0; //@line 827 "binascii.c"
        __label__ = 88; break; //@line 827 "binascii.c"
      case 39: // $bb38
        var $155=HEAP[$rv]; //@line 827 "binascii.c"
        var $156=$155; //@line 827 "binascii.c"
        var $157=(($156+20)&4294967295); //@line 827 "binascii.c"
        var $158=$157; //@line 827 "binascii.c"
        var $159=HEAP[$out_len]; //@line 827 "binascii.c"
        var $160=(($158+$159)&4294967295); //@line 827 "binascii.c"
        HEAP[$out_data]=$160; //@line 827 "binascii.c"
        var $161=HEAP[$out_len]; //@line 827 "binascii.c"
        var $162=((($161) - 1)&4294967295); //@line 827 "binascii.c"
        HEAP[$out_len_left]=$162; //@line 827 "binascii.c"
        var $163=HEAP[$out_len]; //@line 827 "binascii.c"
        var $164=((($163) * 2)&4294967295); //@line 827 "binascii.c"
        HEAP[$out_len]=$164; //@line 827 "binascii.c"
        __label__ = 40; break; //@line 827 "binascii.c"
      case 40: // $bb39
        var $165=HEAP[$out_data]; //@line 827 "binascii.c"
        var $166=HEAP[$in_byte]; //@line 827 "binascii.c"
        HEAP[$165]=$166; //@line 827 "binascii.c"
        var $167=HEAP[$out_data]; //@line 827 "binascii.c"
        var $168=(($167+1)&4294967295); //@line 827 "binascii.c"
        HEAP[$out_data]=$168; //@line 827 "binascii.c"
        __label__ = 41; break; //@line 827 "binascii.c"
      case 41: // $bb40
        __label__ = 82; break; //@line 827 "binascii.c"
      case 42: // $bb41
        var $169=HEAP[$in_len]; //@line 831 "binascii.c"
        var $170=((($169) - 1)&4294967295); //@line 831 "binascii.c"
        HEAP[$in_len]=$170; //@line 831 "binascii.c"
        var $171=HEAP[$in_len]; //@line 831 "binascii.c"
        var $172=((($171))|0) < 0; //@line 831 "binascii.c"
        if ($172) { __label__ = 43; break; } else { __label__ = 46; break; } //@line 831 "binascii.c"
      case 43: // $bb42
        var $173=HEAP[_Incomplete]; //@line 831 "binascii.c"
        _PyErr_SetString($173, ((__str9)&4294967295)); //@line 831 "binascii.c"
        var $174=HEAP[$rv]; //@line 831 "binascii.c"
        var $175=(($174)&4294967295); //@line 831 "binascii.c"
        var $176=HEAP[$175]; //@line 831 "binascii.c"
        var $177=((($176) - 1)&4294967295); //@line 831 "binascii.c"
        var $178=(($174)&4294967295); //@line 831 "binascii.c"
        HEAP[$178]=$177; //@line 831 "binascii.c"
        var $179=(($174)&4294967295); //@line 831 "binascii.c"
        var $180=HEAP[$179]; //@line 831 "binascii.c"
        var $181=((($180))|0)==0; //@line 831 "binascii.c"
        if ($181) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 831 "binascii.c"
      case 44: // $bb43
        var $182=HEAP[$rv]; //@line 831 "binascii.c"
        var $183=(($182+4)&4294967295); //@line 831 "binascii.c"
        var $184=HEAP[$183]; //@line 831 "binascii.c"
        var $185=(($184+24)&4294967295); //@line 831 "binascii.c"
        var $186=HEAP[$185]; //@line 831 "binascii.c"
        var $187=HEAP[$rv]; //@line 831 "binascii.c"
        FUNCTION_TABLE[$186]($187); //@line 831 "binascii.c"
        __label__ = 45; break; //@line 831 "binascii.c"
      case 45: // $bb44
        _PyBuffer_Release($pin); //@line 831 "binascii.c"
        HEAP[$0]=0; //@line 831 "binascii.c"
        __label__ = 88; break; //@line 831 "binascii.c"
      case 46: // $bb45
        var $188=HEAP[$in_data]; //@line 831 "binascii.c"
        var $189=HEAP[$188]; //@line 831 "binascii.c"
        HEAP[$in_byte]=$189; //@line 831 "binascii.c"
        var $190=HEAP[$in_data]; //@line 831 "binascii.c"
        var $191=(($190+1)&4294967295); //@line 831 "binascii.c"
        HEAP[$in_data]=$191; //@line 831 "binascii.c"
        var $192=HEAP[$in_byte]; //@line 833 "binascii.c"
        var $193=reSign(($192), 8, 0)==-112; //@line 833 "binascii.c"
        if ($193) { __label__ = 47; break; } else { __label__ = 73; break; } //@line 833 "binascii.c"
      case 47: // $bb46
        var $194=HEAP[$in_len]; //@line 834 "binascii.c"
        var $195=((($194) - 1)&4294967295); //@line 834 "binascii.c"
        HEAP[$in_len]=$195; //@line 834 "binascii.c"
        var $196=HEAP[$in_len]; //@line 834 "binascii.c"
        var $197=((($196))|0) < 0; //@line 834 "binascii.c"
        if ($197) { __label__ = 48; break; } else { __label__ = 51; break; } //@line 834 "binascii.c"
      case 48: // $bb47
        var $198=HEAP[_Incomplete]; //@line 834 "binascii.c"
        _PyErr_SetString($198, ((__str9)&4294967295)); //@line 834 "binascii.c"
        var $199=HEAP[$rv]; //@line 834 "binascii.c"
        var $200=(($199)&4294967295); //@line 834 "binascii.c"
        var $201=HEAP[$200]; //@line 834 "binascii.c"
        var $202=((($201) - 1)&4294967295); //@line 834 "binascii.c"
        var $203=(($199)&4294967295); //@line 834 "binascii.c"
        HEAP[$203]=$202; //@line 834 "binascii.c"
        var $204=(($199)&4294967295); //@line 834 "binascii.c"
        var $205=HEAP[$204]; //@line 834 "binascii.c"
        var $206=((($205))|0)==0; //@line 834 "binascii.c"
        if ($206) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 834 "binascii.c"
      case 49: // $bb48
        var $207=HEAP[$rv]; //@line 834 "binascii.c"
        var $208=(($207+4)&4294967295); //@line 834 "binascii.c"
        var $209=HEAP[$208]; //@line 834 "binascii.c"
        var $210=(($209+24)&4294967295); //@line 834 "binascii.c"
        var $211=HEAP[$210]; //@line 834 "binascii.c"
        var $212=HEAP[$rv]; //@line 834 "binascii.c"
        FUNCTION_TABLE[$211]($212); //@line 834 "binascii.c"
        __label__ = 50; break; //@line 834 "binascii.c"
      case 50: // $bb49
        _PyBuffer_Release($pin); //@line 834 "binascii.c"
        HEAP[$0]=0; //@line 834 "binascii.c"
        __label__ = 88; break; //@line 834 "binascii.c"
      case 51: // $bb50
        var $213=HEAP[$in_data]; //@line 834 "binascii.c"
        var $214=HEAP[$213]; //@line 834 "binascii.c"
        HEAP[$in_repeat]=$214; //@line 834 "binascii.c"
        var $215=HEAP[$in_data]; //@line 834 "binascii.c"
        var $216=(($215+1)&4294967295); //@line 834 "binascii.c"
        HEAP[$in_data]=$216; //@line 834 "binascii.c"
        var $217=HEAP[$in_repeat]; //@line 835 "binascii.c"
        var $218=reSign(($217), 8, 0)==0; //@line 835 "binascii.c"
        if ($218) { __label__ = 52; break; } else { __label__ = 61; break; } //@line 835 "binascii.c"
      case 52: // $bb51
        var $219=HEAP[$out_len_left]; //@line 837 "binascii.c"
        var $220=((($219) - 1)&4294967295); //@line 837 "binascii.c"
        HEAP[$out_len_left]=$220; //@line 837 "binascii.c"
        var $221=HEAP[$out_len_left]; //@line 837 "binascii.c"
        var $222=((($221))|0) < 0; //@line 837 "binascii.c"
        if ($222) { __label__ = 53; break; } else { __label__ = 60; break; } //@line 837 "binascii.c"
      case 53: // $bb52
        var $223=HEAP[$out_len]; //@line 837 "binascii.c"
        var $224=((($223))|0) > 1073741823; //@line 837 "binascii.c"
        if ($224) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 837 "binascii.c"
      case 54: // $bb53
        var $225=_PyErr_NoMemory(); //@line 837 "binascii.c"
        HEAP[$0]=$225; //@line 837 "binascii.c"
        __label__ = 88; break; //@line 837 "binascii.c"
      case 55: // $bb54
        var $226=HEAP[$out_len]; //@line 837 "binascii.c"
        var $227=((($226) * 2)&4294967295); //@line 837 "binascii.c"
        var $228=__PyString_Resize($rv, $227); //@line 837 "binascii.c"
        var $229=((($228))|0) < 0; //@line 837 "binascii.c"
        if ($229) { __label__ = 56; break; } else { __label__ = 59; break; } //@line 837 "binascii.c"
      case 56: // $bb55
        var $230=HEAP[$rv]; //@line 837 "binascii.c"
        var $231=(($230)&4294967295); //@line 837 "binascii.c"
        var $232=HEAP[$231]; //@line 837 "binascii.c"
        var $233=((($232) - 1)&4294967295); //@line 837 "binascii.c"
        var $234=(($230)&4294967295); //@line 837 "binascii.c"
        HEAP[$234]=$233; //@line 837 "binascii.c"
        var $235=(($230)&4294967295); //@line 837 "binascii.c"
        var $236=HEAP[$235]; //@line 837 "binascii.c"
        var $237=((($236))|0)==0; //@line 837 "binascii.c"
        if ($237) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 837 "binascii.c"
      case 57: // $bb56
        var $238=HEAP[$rv]; //@line 837 "binascii.c"
        var $239=(($238+4)&4294967295); //@line 837 "binascii.c"
        var $240=HEAP[$239]; //@line 837 "binascii.c"
        var $241=(($240+24)&4294967295); //@line 837 "binascii.c"
        var $242=HEAP[$241]; //@line 837 "binascii.c"
        var $243=HEAP[$rv]; //@line 837 "binascii.c"
        FUNCTION_TABLE[$242]($243); //@line 837 "binascii.c"
        __label__ = 58; break; //@line 837 "binascii.c"
      case 58: // $bb57
        _PyBuffer_Release($pin); //@line 837 "binascii.c"
        HEAP[$0]=0; //@line 837 "binascii.c"
        __label__ = 88; break; //@line 837 "binascii.c"
      case 59: // $bb58
        var $244=HEAP[$rv]; //@line 837 "binascii.c"
        var $245=$244; //@line 837 "binascii.c"
        var $246=(($245+20)&4294967295); //@line 837 "binascii.c"
        var $247=$246; //@line 837 "binascii.c"
        var $248=HEAP[$out_len]; //@line 837 "binascii.c"
        var $249=(($247+$248)&4294967295); //@line 837 "binascii.c"
        HEAP[$out_data]=$249; //@line 837 "binascii.c"
        var $250=HEAP[$out_len]; //@line 837 "binascii.c"
        var $251=((($250) - 1)&4294967295); //@line 837 "binascii.c"
        HEAP[$out_len_left]=$251; //@line 837 "binascii.c"
        var $252=HEAP[$out_len]; //@line 837 "binascii.c"
        var $253=((($252) * 2)&4294967295); //@line 837 "binascii.c"
        HEAP[$out_len]=$253; //@line 837 "binascii.c"
        __label__ = 60; break; //@line 837 "binascii.c"
      case 60: // $bb59
        var $254=HEAP[$out_data]; //@line 837 "binascii.c"
        HEAP[$254]=-112; //@line 837 "binascii.c"
        var $255=HEAP[$out_data]; //@line 837 "binascii.c"
        var $256=(($255+1)&4294967295); //@line 837 "binascii.c"
        HEAP[$out_data]=$256; //@line 837 "binascii.c"
        __label__ = 72; break; //@line 837 "binascii.c"
      case 61: // $bb60
        var $257=HEAP[$out_data]; //@line 840 "binascii.c"
        var $258=(($257+-1)&4294967295); //@line 840 "binascii.c"
        var $259=HEAP[$258]; //@line 840 "binascii.c"
        HEAP[$in_byte]=$259; //@line 840 "binascii.c"
        __label__ = 71; break; //@line 840 "binascii.c"
      case 62: // $bb61
        var $260=HEAP[$out_len_left]; //@line 842 "binascii.c"
        var $261=((($260) - 1)&4294967295); //@line 842 "binascii.c"
        HEAP[$out_len_left]=$261; //@line 842 "binascii.c"
        var $262=HEAP[$out_len_left]; //@line 842 "binascii.c"
        var $263=((($262))|0) < 0; //@line 842 "binascii.c"
        if ($263) { __label__ = 63; break; } else { __label__ = 70; break; } //@line 842 "binascii.c"
      case 63: // $bb62
        var $264=HEAP[$out_len]; //@line 842 "binascii.c"
        var $265=((($264))|0) > 1073741823; //@line 842 "binascii.c"
        if ($265) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 842 "binascii.c"
      case 64: // $bb63
        var $266=_PyErr_NoMemory(); //@line 842 "binascii.c"
        HEAP[$0]=$266; //@line 842 "binascii.c"
        __label__ = 88; break; //@line 842 "binascii.c"
      case 65: // $bb64
        var $267=HEAP[$out_len]; //@line 842 "binascii.c"
        var $268=((($267) * 2)&4294967295); //@line 842 "binascii.c"
        var $269=__PyString_Resize($rv, $268); //@line 842 "binascii.c"
        var $270=((($269))|0) < 0; //@line 842 "binascii.c"
        if ($270) { __label__ = 66; break; } else { __label__ = 69; break; } //@line 842 "binascii.c"
      case 66: // $bb65
        var $271=HEAP[$rv]; //@line 842 "binascii.c"
        var $272=(($271)&4294967295); //@line 842 "binascii.c"
        var $273=HEAP[$272]; //@line 842 "binascii.c"
        var $274=((($273) - 1)&4294967295); //@line 842 "binascii.c"
        var $275=(($271)&4294967295); //@line 842 "binascii.c"
        HEAP[$275]=$274; //@line 842 "binascii.c"
        var $276=(($271)&4294967295); //@line 842 "binascii.c"
        var $277=HEAP[$276]; //@line 842 "binascii.c"
        var $278=((($277))|0)==0; //@line 842 "binascii.c"
        if ($278) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 842 "binascii.c"
      case 67: // $bb66
        var $279=HEAP[$rv]; //@line 842 "binascii.c"
        var $280=(($279+4)&4294967295); //@line 842 "binascii.c"
        var $281=HEAP[$280]; //@line 842 "binascii.c"
        var $282=(($281+24)&4294967295); //@line 842 "binascii.c"
        var $283=HEAP[$282]; //@line 842 "binascii.c"
        var $284=HEAP[$rv]; //@line 842 "binascii.c"
        FUNCTION_TABLE[$283]($284); //@line 842 "binascii.c"
        __label__ = 68; break; //@line 842 "binascii.c"
      case 68: // $bb67
        _PyBuffer_Release($pin); //@line 842 "binascii.c"
        HEAP[$0]=0; //@line 842 "binascii.c"
        __label__ = 88; break; //@line 842 "binascii.c"
      case 69: // $bb68
        var $285=HEAP[$rv]; //@line 842 "binascii.c"
        var $286=$285; //@line 842 "binascii.c"
        var $287=(($286+20)&4294967295); //@line 842 "binascii.c"
        var $288=$287; //@line 842 "binascii.c"
        var $289=HEAP[$out_len]; //@line 842 "binascii.c"
        var $290=(($288+$289)&4294967295); //@line 842 "binascii.c"
        HEAP[$out_data]=$290; //@line 842 "binascii.c"
        var $291=HEAP[$out_len]; //@line 842 "binascii.c"
        var $292=((($291) - 1)&4294967295); //@line 842 "binascii.c"
        HEAP[$out_len_left]=$292; //@line 842 "binascii.c"
        var $293=HEAP[$out_len]; //@line 842 "binascii.c"
        var $294=((($293) * 2)&4294967295); //@line 842 "binascii.c"
        HEAP[$out_len]=$294; //@line 842 "binascii.c"
        __label__ = 70; break; //@line 842 "binascii.c"
      case 70: // $bb69
        var $295=HEAP[$out_data]; //@line 842 "binascii.c"
        var $296=HEAP[$in_byte]; //@line 842 "binascii.c"
        HEAP[$295]=$296; //@line 842 "binascii.c"
        var $297=HEAP[$out_data]; //@line 842 "binascii.c"
        var $298=(($297+1)&4294967295); //@line 842 "binascii.c"
        HEAP[$out_data]=$298; //@line 842 "binascii.c"
        __label__ = 71; break; //@line 842 "binascii.c"
      case 71: // $bb70
        var $299=HEAP[$in_repeat]; //@line 841 "binascii.c"
        var $300=((($299) - 1)&255); //@line 841 "binascii.c"
        HEAP[$in_repeat]=$300; //@line 841 "binascii.c"
        var $301=HEAP[$in_repeat]; //@line 841 "binascii.c"
        var $302=reSign(($301), 8, 0)!=0; //@line 841 "binascii.c"
        if ($302) { __label__ = 62; break; } else { __label__ = 72; break; } //@line 841 "binascii.c"
      case 72: // $bb71
        __label__ = 82; break; //@line 841 "binascii.c"
      case 73: // $bb72
        var $303=HEAP[$out_len_left]; //@line 846 "binascii.c"
        var $304=((($303) - 1)&4294967295); //@line 846 "binascii.c"
        HEAP[$out_len_left]=$304; //@line 846 "binascii.c"
        var $305=HEAP[$out_len_left]; //@line 846 "binascii.c"
        var $306=((($305))|0) < 0; //@line 846 "binascii.c"
        if ($306) { __label__ = 74; break; } else { __label__ = 81; break; } //@line 846 "binascii.c"
      case 74: // $bb73
        var $307=HEAP[$out_len]; //@line 846 "binascii.c"
        var $308=((($307))|0) > 1073741823; //@line 846 "binascii.c"
        if ($308) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 846 "binascii.c"
      case 75: // $bb74
        var $309=_PyErr_NoMemory(); //@line 846 "binascii.c"
        HEAP[$0]=$309; //@line 846 "binascii.c"
        __label__ = 88; break; //@line 846 "binascii.c"
      case 76: // $bb75
        var $310=HEAP[$out_len]; //@line 846 "binascii.c"
        var $311=((($310) * 2)&4294967295); //@line 846 "binascii.c"
        var $312=__PyString_Resize($rv, $311); //@line 846 "binascii.c"
        var $313=((($312))|0) < 0; //@line 846 "binascii.c"
        if ($313) { __label__ = 77; break; } else { __label__ = 80; break; } //@line 846 "binascii.c"
      case 77: // $bb76
        var $314=HEAP[$rv]; //@line 846 "binascii.c"
        var $315=(($314)&4294967295); //@line 846 "binascii.c"
        var $316=HEAP[$315]; //@line 846 "binascii.c"
        var $317=((($316) - 1)&4294967295); //@line 846 "binascii.c"
        var $318=(($314)&4294967295); //@line 846 "binascii.c"
        HEAP[$318]=$317; //@line 846 "binascii.c"
        var $319=(($314)&4294967295); //@line 846 "binascii.c"
        var $320=HEAP[$319]; //@line 846 "binascii.c"
        var $321=((($320))|0)==0; //@line 846 "binascii.c"
        if ($321) { __label__ = 78; break; } else { __label__ = 79; break; } //@line 846 "binascii.c"
      case 78: // $bb77
        var $322=HEAP[$rv]; //@line 846 "binascii.c"
        var $323=(($322+4)&4294967295); //@line 846 "binascii.c"
        var $324=HEAP[$323]; //@line 846 "binascii.c"
        var $325=(($324+24)&4294967295); //@line 846 "binascii.c"
        var $326=HEAP[$325]; //@line 846 "binascii.c"
        var $327=HEAP[$rv]; //@line 846 "binascii.c"
        FUNCTION_TABLE[$326]($327); //@line 846 "binascii.c"
        __label__ = 79; break; //@line 846 "binascii.c"
      case 79: // $bb78
        _PyBuffer_Release($pin); //@line 846 "binascii.c"
        HEAP[$0]=0; //@line 846 "binascii.c"
        __label__ = 88; break; //@line 846 "binascii.c"
      case 80: // $bb79
        var $328=HEAP[$rv]; //@line 846 "binascii.c"
        var $329=$328; //@line 846 "binascii.c"
        var $330=(($329+20)&4294967295); //@line 846 "binascii.c"
        var $331=$330; //@line 846 "binascii.c"
        var $332=HEAP[$out_len]; //@line 846 "binascii.c"
        var $333=(($331+$332)&4294967295); //@line 846 "binascii.c"
        HEAP[$out_data]=$333; //@line 846 "binascii.c"
        var $334=HEAP[$out_len]; //@line 846 "binascii.c"
        var $335=((($334) - 1)&4294967295); //@line 846 "binascii.c"
        HEAP[$out_len_left]=$335; //@line 846 "binascii.c"
        var $336=HEAP[$out_len]; //@line 846 "binascii.c"
        var $337=((($336) * 2)&4294967295); //@line 846 "binascii.c"
        HEAP[$out_len]=$337; //@line 846 "binascii.c"
        __label__ = 81; break; //@line 846 "binascii.c"
      case 81: // $bb80
        var $338=HEAP[$out_data]; //@line 846 "binascii.c"
        var $339=HEAP[$in_byte]; //@line 846 "binascii.c"
        HEAP[$338]=$339; //@line 846 "binascii.c"
        var $340=HEAP[$out_data]; //@line 846 "binascii.c"
        var $341=(($340+1)&4294967295); //@line 846 "binascii.c"
        HEAP[$out_data]=$341; //@line 846 "binascii.c"
        __label__ = 82; break; //@line 846 "binascii.c"
      case 82: // $bb81
        var $342=HEAP[$in_len]; //@line 830 "binascii.c"
        var $343=((($342))|0) > 0; //@line 830 "binascii.c"
        if ($343) { __label__ = 42; break; } else { __label__ = 83; break; } //@line 830 "binascii.c"
      case 83: // $bb82
        var $344=HEAP[$out_data]; //@line 849 "binascii.c"
        var $345=($344); //@line 849 "binascii.c"
        var $346=HEAP[$rv]; //@line 849 "binascii.c"
        var $347=$346; //@line 849 "binascii.c"
        var $348=(($347+20)&4294967295); //@line 849 "binascii.c"
        var $349=($348); //@line 849 "binascii.c"
        var $350=((($345) - ($349))&4294967295); //@line 849 "binascii.c"
        var $351=__PyString_Resize($rv, $350); //@line 849 "binascii.c"
        var $352=((($351))|0) < 0; //@line 849 "binascii.c"
        if ($352) { __label__ = 84; break; } else { __label__ = 87; break; } //@line 849 "binascii.c"
      case 84: // $bb83
        var $353=HEAP[$rv]; //@line 852 "binascii.c"
        var $354=(($353)&4294967295); //@line 852 "binascii.c"
        var $355=HEAP[$354]; //@line 852 "binascii.c"
        var $356=((($355) - 1)&4294967295); //@line 852 "binascii.c"
        var $357=(($353)&4294967295); //@line 852 "binascii.c"
        HEAP[$357]=$356; //@line 852 "binascii.c"
        var $358=(($353)&4294967295); //@line 852 "binascii.c"
        var $359=HEAP[$358]; //@line 852 "binascii.c"
        var $360=((($359))|0)==0; //@line 852 "binascii.c"
        if ($360) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 852 "binascii.c"
      case 85: // $bb84
        var $361=HEAP[$rv]; //@line 852 "binascii.c"
        var $362=(($361+4)&4294967295); //@line 852 "binascii.c"
        var $363=HEAP[$362]; //@line 852 "binascii.c"
        var $364=(($363+24)&4294967295); //@line 852 "binascii.c"
        var $365=HEAP[$364]; //@line 852 "binascii.c"
        var $366=HEAP[$rv]; //@line 852 "binascii.c"
        FUNCTION_TABLE[$365]($366); //@line 852 "binascii.c"
        __label__ = 86; break; //@line 852 "binascii.c"
      case 86: // $bb85
        HEAP[$rv]=0; //@line 853 "binascii.c"
        __label__ = 87; break; //@line 853 "binascii.c"
      case 87: // $bb86
        _PyBuffer_Release($pin); //@line 855 "binascii.c"
        var $367=HEAP[$rv]; //@line 856 "binascii.c"
        HEAP[$0]=$367; //@line 856 "binascii.c"
        __label__ = 88; break; //@line 856 "binascii.c"
      case 88: // $bb87
        var $368=HEAP[$0]; //@line 754 "binascii.c"
        HEAP[$retval]=$368; //@line 754 "binascii.c"
        __label__ = 89; break; //@line 754 "binascii.c"
      case 89: // $return
        var $retval88=HEAP[$retval]; //@line 754 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval88; //@line 754 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_crc_hqx($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pin=__stackBase__+16;
        var $bin_data=__stackBase__+68;
        var $crc=__stackBase__+72;
        var $len=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 870 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str22)&4294967295), $pin, $crc); //@line 870 "binascii.c"
        var $3=((($2))|0)==0; //@line 870 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 870 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 871 "binascii.c"
        __label__ = 6; break; //@line 871 "binascii.c"
      case 2: // $bb1
        var $4=(($pin)&4294967295); //@line 872 "binascii.c"
        var $5=HEAP[$4]; //@line 872 "binascii.c"
        HEAP[$bin_data]=$5; //@line 872 "binascii.c"
        var $6=(($pin+8)&4294967295); //@line 873 "binascii.c"
        var $7=HEAP[$6]; //@line 873 "binascii.c"
        HEAP[$len]=$7; //@line 873 "binascii.c"
        __label__ = 4; break; //@line 873 "binascii.c"
      case 3: // $bb2
        var $8=HEAP[$crc]; //@line 876 "binascii.c"
        var $9=($8) << 8; //@line 876 "binascii.c"
        var $10=($9) & 65280; //@line 876 "binascii.c"
        var $11=HEAP[$crc]; //@line 876 "binascii.c"
        var $12=((($11))>>>0) >>> 8; //@line 876 "binascii.c"
        var $13=($12) & 255; //@line 876 "binascii.c"
        var $14=HEAP[$bin_data]; //@line 876 "binascii.c"
        var $15=HEAP[$14]; //@line 876 "binascii.c"
        var $16=unSign(($15), 8, 0); //@line 876 "binascii.c"
        var $17=($13) ^ ($16); //@line 876 "binascii.c"
        var $18=((_crctab_hqx+$17*2)&4294967295); //@line 876 "binascii.c"
        var $19=HEAP[$18]; //@line 876 "binascii.c"
        var $20=unSign(($19), 16, 0); //@line 876 "binascii.c"
        var $21=($10) ^ ($20); //@line 876 "binascii.c"
        HEAP[$crc]=$21; //@line 876 "binascii.c"
        var $22=HEAP[$bin_data]; //@line 876 "binascii.c"
        var $23=(($22+1)&4294967295); //@line 876 "binascii.c"
        HEAP[$bin_data]=$23; //@line 876 "binascii.c"
        __label__ = 4; break; //@line 876 "binascii.c"
      case 4: // $bb3
        var $24=HEAP[$len]; //@line 875 "binascii.c"
        var $25=((($24))|0) > 0; //@line 875 "binascii.c"
        var $26=unSign(($25), 1, 0); //@line 875 "binascii.c"
        var $27=HEAP[$len]; //@line 875 "binascii.c"
        var $28=((($27) - 1)&4294967295); //@line 875 "binascii.c"
        HEAP[$len]=$28; //@line 875 "binascii.c"
        var $toBool=reSign(($26), 8, 0)!=0; //@line 875 "binascii.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 875 "binascii.c"
      case 5: // $bb4
        _PyBuffer_Release($pin); //@line 879 "binascii.c"
        var $29=HEAP[$crc]; //@line 880 "binascii.c"
        var $30=__Py_BuildValue_SizeT(((__str23)&4294967295), $29); //@line 880 "binascii.c"
        HEAP[$0]=$30; //@line 880 "binascii.c"
        __label__ = 6; break; //@line 880 "binascii.c"
      case 6: // $bb5
        var $31=HEAP[$0]; //@line 871 "binascii.c"
        HEAP[$retval]=$31; //@line 871 "binascii.c"
        __label__ = 7; break; //@line 871 "binascii.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 871 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 871 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_crc32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 84; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 84);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $pbin=__stackBase__+16;
        var $bin_data=__stackBase__+68;
        var $crc=__stackBase__+72;
        var $len=__stackBase__+76;
        var $result=__stackBase__+80;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$crc]=0; //@line 1033 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 1037 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str24)&4294967295), $pbin, $crc); //@line 1037 "binascii.c"
        var $3=((($2))|0)==0; //@line 1037 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1038 "binascii.c"
        __label__ = 6; break; //@line 1038 "binascii.c"
      case 2: // $bb1
        var $4=(($pbin)&4294967295); //@line 1039 "binascii.c"
        var $5=HEAP[$4]; //@line 1039 "binascii.c"
        HEAP[$bin_data]=$5; //@line 1039 "binascii.c"
        var $6=(($pbin+8)&4294967295); //@line 1040 "binascii.c"
        var $7=HEAP[$6]; //@line 1040 "binascii.c"
        HEAP[$len]=$7; //@line 1040 "binascii.c"
        var $8=HEAP[$crc]; //@line 1042 "binascii.c"
        var $not=($8) ^ -1; //@line 1042 "binascii.c"
        HEAP[$crc]=$not; //@line 1042 "binascii.c"
        __label__ = 4; break; //@line 1042 "binascii.c"
      case 3: // $bb3
        var $9=HEAP[$bin_data]; //@line 1044 "binascii.c"
        var $10=HEAP[$9]; //@line 1044 "binascii.c"
        var $11=unSign(($10), 8, 0); //@line 1044 "binascii.c"
        var $12=HEAP[$crc]; //@line 1044 "binascii.c"
        var $13=($11) ^ ($12); //@line 1044 "binascii.c"
        var $14=($13) & 255; //@line 1044 "binascii.c"
        var $15=((_crc_32_tab+$14*4)&4294967295); //@line 1044 "binascii.c"
        var $16=HEAP[$15]; //@line 1044 "binascii.c"
        var $17=HEAP[$crc]; //@line 1044 "binascii.c"
        var $18=((($17))>>>0) >>> 8; //@line 1044 "binascii.c"
        var $19=($16) ^ ($18); //@line 1044 "binascii.c"
        HEAP[$crc]=$19; //@line 1044 "binascii.c"
        var $20=HEAP[$bin_data]; //@line 1044 "binascii.c"
        var $21=(($20+1)&4294967295); //@line 1044 "binascii.c"
        HEAP[$bin_data]=$21; //@line 1044 "binascii.c"
        __label__ = 4; break; //@line 1044 "binascii.c"
      case 4: // $bb4
        var $22=HEAP[$len]; //@line 1043 "binascii.c"
        var $23=((($22))|0) > 0; //@line 1043 "binascii.c"
        var $24=unSign(($23), 1, 0); //@line 1043 "binascii.c"
        var $25=HEAP[$len]; //@line 1043 "binascii.c"
        var $26=((($25) - 1)&4294967295); //@line 1043 "binascii.c"
        HEAP[$len]=$26; //@line 1043 "binascii.c"
        var $toBool=reSign(($24), 8, 0)!=0; //@line 1043 "binascii.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1043 "binascii.c"
      case 5: // $bb5
        var $27=HEAP[$crc]; //@line 1047 "binascii.c"
        var $not6=($27) ^ -1; //@line 1047 "binascii.c"
        HEAP[$result]=$not6; //@line 1047 "binascii.c"
        _PyBuffer_Release($pbin); //@line 1048 "binascii.c"
        var $28=HEAP[$result]; //@line 1049 "binascii.c"
        var $29=_PyInt_FromLong($28); //@line 1049 "binascii.c"
        HEAP[$0]=$29; //@line 1049 "binascii.c"
        __label__ = 6; break; //@line 1049 "binascii.c"
      case 6: // $bb8
        var $30=HEAP[$0]; //@line 1038 "binascii.c"
        HEAP[$retval]=$30; //@line 1038 "binascii.c"
        __label__ = 7; break; //@line 1038 "binascii.c"
      case 7: // $return
        var $retval9=HEAP[$retval]; //@line 1038 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1038 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_hexlify($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 95; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 95);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_145=__stackBase__+12;
        var $iftmp_142=__stackBase__+13;
        var $0=__stackBase__+14;
        var $parg=__stackBase__+18;
        var $argbuf=__stackBase__+70;
        var $arglen=__stackBase__+74;
        var $retval1=__stackBase__+78;
        var $retbuf=__stackBase__+82;
        var $i=__stackBase__+86;
        var $j=__stackBase__+90;
        var $c=__stackBase__+94;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1064 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str25)&4294967295), $parg); //@line 1064 "binascii.c"
        var $3=((($2))|0)==0; //@line 1064 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1064 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1065 "binascii.c"
        __label__ = 18; break; //@line 1065 "binascii.c"
      case 2: // $bb2
        var $4=(($parg)&4294967295); //@line 1066 "binascii.c"
        var $5=HEAP[$4]; //@line 1066 "binascii.c"
        HEAP[$argbuf]=$5; //@line 1066 "binascii.c"
        var $6=(($parg+8)&4294967295); //@line 1067 "binascii.c"
        var $7=HEAP[$6]; //@line 1067 "binascii.c"
        HEAP[$arglen]=$7; //@line 1067 "binascii.c"
        var $8=HEAP[$arglen]; //@line 1069 "binascii.c"
        var $9=((($8))|0) < 0; //@line 1069 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1069 "binascii.c"
      case 3: // $bb3
        ___assert_fail(((__str26)&4294967295), ((__str2)&4294967295), 1069, ((___PRETTY_FUNCTION___9264)&4294967295)); //@line 1069 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 3163"; //@line 1069 "binascii.c"
      case 4: // $bb4
        var $10=HEAP[$arglen]; //@line 1070 "binascii.c"
        var $11=((($10))|0) > 1073741823; //@line 1070 "binascii.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1070 "binascii.c"
      case 5: // $bb5
        _PyBuffer_Release($parg); //@line 1071 "binascii.c"
        var $12=_PyErr_NoMemory(); //@line 1072 "binascii.c"
        HEAP[$0]=$12; //@line 1072 "binascii.c"
        __label__ = 18; break; //@line 1072 "binascii.c"
      case 6: // $bb6
        var $13=HEAP[$arglen]; //@line 1075 "binascii.c"
        var $14=((($13) * 2)&4294967295); //@line 1075 "binascii.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 1075 "binascii.c"
        HEAP[$retval1]=$15; //@line 1075 "binascii.c"
        var $16=HEAP[$retval1]; //@line 1076 "binascii.c"
        var $17=($16)==0; //@line 1076 "binascii.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1076 "binascii.c"
      case 7: // $bb7
        _PyBuffer_Release($parg); //@line 1077 "binascii.c"
        HEAP[$0]=0; //@line 1078 "binascii.c"
        __label__ = 18; break; //@line 1078 "binascii.c"
      case 8: // $bb8
        var $18=HEAP[$retval1]; //@line 1080 "binascii.c"
        var $19=$18; //@line 1080 "binascii.c"
        var $20=(($19+20)&4294967295); //@line 1080 "binascii.c"
        var $21=(($20)&4294967295); //@line 1080 "binascii.c"
        HEAP[$retbuf]=$21; //@line 1080 "binascii.c"
        HEAP[$j]=0; //@line 1083 "binascii.c"
        var $22=HEAP[$j]; //@line 1083 "binascii.c"
        HEAP[$i]=$22; //@line 1083 "binascii.c"
        __label__ = 16; break; //@line 1083 "binascii.c"
      case 9: // $bb9
        var $23=HEAP[$argbuf]; //@line 1085 "binascii.c"
        var $24=HEAP[$i]; //@line 1085 "binascii.c"
        var $25=(($23+$24)&4294967295); //@line 1085 "binascii.c"
        var $26=HEAP[$25]; //@line 1085 "binascii.c"
        var $27=reSign(($26), 8, 0) >> 4; //@line 1085 "binascii.c"
        var $28=($27) & 15; //@line 1085 "binascii.c"
        HEAP[$c]=$28; //@line 1085 "binascii.c"
        var $29=HEAP[$c]; //@line 1086 "binascii.c"
        var $30=reSign(($29), 8, 0) > 9; //@line 1086 "binascii.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1086 "binascii.c"
      case 10: // $bb10
        var $31=HEAP[$c]; //@line 1086 "binascii.c"
        var $32=((($31) + 87)&255); //@line 1086 "binascii.c"
        HEAP[$iftmp_142]=$32; //@line 1086 "binascii.c"
        __label__ = 12; break; //@line 1086 "binascii.c"
      case 11: // $bb11
        var $33=HEAP[$c]; //@line 1086 "binascii.c"
        var $34=((($33) + 48)&255); //@line 1086 "binascii.c"
        HEAP[$iftmp_142]=$34; //@line 1086 "binascii.c"
        __label__ = 12; break; //@line 1086 "binascii.c"
      case 12: // $bb12
        var $35=HEAP[$iftmp_142]; //@line 1086 "binascii.c"
        HEAP[$c]=$35; //@line 1086 "binascii.c"
        var $36=HEAP[$retbuf]; //@line 1087 "binascii.c"
        var $37=HEAP[$j]; //@line 1087 "binascii.c"
        var $38=(($36+$37)&4294967295); //@line 1087 "binascii.c"
        var $39=HEAP[$c]; //@line 1087 "binascii.c"
        HEAP[$38]=$39; //@line 1087 "binascii.c"
        var $40=HEAP[$j]; //@line 1087 "binascii.c"
        var $41=((($40) + 1)&4294967295); //@line 1087 "binascii.c"
        HEAP[$j]=$41; //@line 1087 "binascii.c"
        var $42=HEAP[$argbuf]; //@line 1088 "binascii.c"
        var $43=HEAP[$i]; //@line 1088 "binascii.c"
        var $44=(($42+$43)&4294967295); //@line 1088 "binascii.c"
        var $45=HEAP[$44]; //@line 1088 "binascii.c"
        var $46=($45) & 15; //@line 1088 "binascii.c"
        HEAP[$c]=$46; //@line 1088 "binascii.c"
        var $47=HEAP[$c]; //@line 1089 "binascii.c"
        var $48=reSign(($47), 8, 0) > 9; //@line 1089 "binascii.c"
        if ($48) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1089 "binascii.c"
      case 13: // $bb13
        var $49=HEAP[$c]; //@line 1089 "binascii.c"
        var $50=((($49) + 87)&255); //@line 1089 "binascii.c"
        HEAP[$iftmp_145]=$50; //@line 1089 "binascii.c"
        __label__ = 15; break; //@line 1089 "binascii.c"
      case 14: // $bb14
        var $51=HEAP[$c]; //@line 1089 "binascii.c"
        var $52=((($51) + 48)&255); //@line 1089 "binascii.c"
        HEAP[$iftmp_145]=$52; //@line 1089 "binascii.c"
        __label__ = 15; break; //@line 1089 "binascii.c"
      case 15: // $bb15
        var $53=HEAP[$iftmp_145]; //@line 1089 "binascii.c"
        HEAP[$c]=$53; //@line 1089 "binascii.c"
        var $54=HEAP[$retbuf]; //@line 1090 "binascii.c"
        var $55=HEAP[$j]; //@line 1090 "binascii.c"
        var $56=(($54+$55)&4294967295); //@line 1090 "binascii.c"
        var $57=HEAP[$c]; //@line 1090 "binascii.c"
        HEAP[$56]=$57; //@line 1090 "binascii.c"
        var $58=HEAP[$j]; //@line 1090 "binascii.c"
        var $59=((($58) + 1)&4294967295); //@line 1090 "binascii.c"
        HEAP[$j]=$59; //@line 1090 "binascii.c"
        var $60=HEAP[$i]; //@line 1083 "binascii.c"
        var $61=((($60) + 1)&4294967295); //@line 1083 "binascii.c"
        HEAP[$i]=$61; //@line 1083 "binascii.c"
        __label__ = 16; break; //@line 1083 "binascii.c"
      case 16: // $bb16
        var $62=HEAP[$i]; //@line 1083 "binascii.c"
        var $63=HEAP[$arglen]; //@line 1083 "binascii.c"
        var $64=((($62))|0) < ((($63))|0); //@line 1083 "binascii.c"
        if ($64) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 1083 "binascii.c"
      case 17: // $bb17
        _PyBuffer_Release($parg); //@line 1092 "binascii.c"
        var $65=HEAP[$retval1]; //@line 1093 "binascii.c"
        HEAP[$0]=$65; //@line 1093 "binascii.c"
        __label__ = 18; break; //@line 1093 "binascii.c"
      case 18: // $bb18
        var $66=HEAP[$0]; //@line 1065 "binascii.c"
        HEAP[$retval]=$66; //@line 1065 "binascii.c"
        __label__ = 19; break; //@line 1065 "binascii.c"
      case 19: // $return
        var $retval19=HEAP[$retval]; //@line 1065 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1065 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _to_int($c) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$c_addr]=$c;
        var $1=___ctype_b_loc(); //@line 1105 "binascii.c"
        var $2=HEAP[$1]; //@line 1105 "binascii.c"
        var $3=HEAP[$c_addr]; //@line 1105 "binascii.c"
        var $4=(($2+2*$3)&4294967295); //@line 1105 "binascii.c"
        var $5=HEAP[$4]; //@line 1105 "binascii.c"
        var $6=unSign(($5), 16, 0); //@line 1105 "binascii.c"
        var $7=($6) & 2048; //@line 1105 "binascii.c"
        var $8=((($7))|0)!=0; //@line 1105 "binascii.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1105 "binascii.c"
      case 1: // $bb
        var $9=HEAP[$c_addr]; //@line 1106 "binascii.c"
        var $10=((($9) - 48)&4294967295); //@line 1106 "binascii.c"
        HEAP[$0]=$10; //@line 1106 "binascii.c"
        __label__ = 8; break; //@line 1106 "binascii.c"
      case 2: // $bb1
        var $11=___ctype_b_loc(); //@line 1108 "binascii.c"
        var $12=HEAP[$11]; //@line 1108 "binascii.c"
        var $13=HEAP[$c_addr]; //@line 1108 "binascii.c"
        var $14=(($12+2*$13)&4294967295); //@line 1108 "binascii.c"
        var $15=HEAP[$14]; //@line 1108 "binascii.c"
        var $16=unSign(($15), 16, 0); //@line 1108 "binascii.c"
        var $17=($16) & 256; //@line 1108 "binascii.c"
        var $18=((($17))|0)!=0; //@line 1108 "binascii.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1108 "binascii.c"
      case 3: // $bb2
        var $19=HEAP[$c_addr]; //@line 1109 "binascii.c"
        var $20=_tolower($19); //@line 1109 "binascii.c"
        HEAP[$c_addr]=$20; //@line 1109 "binascii.c"
        __label__ = 4; break; //@line 1109 "binascii.c"
      case 4: // $bb3
        var $21=HEAP[$c_addr]; //@line 1110 "binascii.c"
        var $22=((($21))|0) > 96; //@line 1110 "binascii.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1110 "binascii.c"
      case 5: // $bb4
        var $23=HEAP[$c_addr]; //@line 1110 "binascii.c"
        var $24=((($23))|0) <= 102; //@line 1110 "binascii.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1110 "binascii.c"
      case 6: // $bb5
        var $25=HEAP[$c_addr]; //@line 1111 "binascii.c"
        var $26=((($25) - 87)&4294967295); //@line 1111 "binascii.c"
        HEAP[$0]=$26; //@line 1111 "binascii.c"
        __label__ = 8; break; //@line 1111 "binascii.c"
      case 7: // $bb6
        HEAP[$0]=-1; //@line 1113 "binascii.c"
        __label__ = 8; break; //@line 1113 "binascii.c"
      case 8: // $bb7
        var $27=HEAP[$0]; //@line 1106 "binascii.c"
        HEAP[$retval]=$27; //@line 1106 "binascii.c"
        __label__ = 9; break; //@line 1106 "binascii.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 1106 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1106 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_unhexlify($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 100; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 100);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $parg=__stackBase__+16;
        var $argbuf=__stackBase__+68;
        var $arglen=__stackBase__+72;
        var $retval1=__stackBase__+76;
        var $retbuf=__stackBase__+80;
        var $i=__stackBase__+84;
        var $j=__stackBase__+88;
        var $top=__stackBase__+92;
        var $bot=__stackBase__+96;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1127 "binascii.c"
        var $2=__PyArg_ParseTuple_SizeT($1, ((__str27)&4294967295), $parg); //@line 1127 "binascii.c"
        var $3=((($2))|0)==0; //@line 1127 "binascii.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1127 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1128 "binascii.c"
        __label__ = 18; break; //@line 1128 "binascii.c"
      case 2: // $bb2
        var $4=(($parg)&4294967295); //@line 1129 "binascii.c"
        var $5=HEAP[$4]; //@line 1129 "binascii.c"
        HEAP[$argbuf]=$5; //@line 1129 "binascii.c"
        var $6=(($parg+8)&4294967295); //@line 1130 "binascii.c"
        var $7=HEAP[$6]; //@line 1130 "binascii.c"
        HEAP[$arglen]=$7; //@line 1130 "binascii.c"
        var $8=HEAP[$arglen]; //@line 1132 "binascii.c"
        var $9=((($8))|0) < 0; //@line 1132 "binascii.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1132 "binascii.c"
      case 3: // $bb3
        ___assert_fail(((__str26)&4294967295), ((__str2)&4294967295), 1132, ((___PRETTY_FUNCTION___9339)&4294967295)); //@line 1132 "binascii.c"
        throw "Reached an unreachable! Original .ll line: 3425"; //@line 1132 "binascii.c"
      case 4: // $bb4
        var $10=HEAP[$arglen]; //@line 1138 "binascii.c"
        var $11=($10) & 1; //@line 1138 "binascii.c"
        var $12=((($11)) & 255); //@line 1138 "binascii.c"
        var $toBool=reSign(($12), 8, 0)!=0; //@line 1138 "binascii.c"
        if ($toBool) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1138 "binascii.c"
      case 5: // $bb5
        _PyBuffer_Release($parg); //@line 1139 "binascii.c"
        var $13=HEAP[_PyExc_TypeError]; //@line 1140 "binascii.c"
        _PyErr_SetString($13, ((__str28)&4294967295)); //@line 1140 "binascii.c"
        HEAP[$0]=0; //@line 1141 "binascii.c"
        __label__ = 18; break; //@line 1141 "binascii.c"
      case 6: // $bb6
        var $14=HEAP[$arglen]; //@line 1144 "binascii.c"
        var $15=((((($14))|0)/2)|0); //@line 1144 "binascii.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1144 "binascii.c"
        HEAP[$retval1]=$16; //@line 1144 "binascii.c"
        var $17=HEAP[$retval1]; //@line 1145 "binascii.c"
        var $18=($17)==0; //@line 1145 "binascii.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1145 "binascii.c"
      case 7: // $bb7
        _PyBuffer_Release($parg); //@line 1146 "binascii.c"
        HEAP[$0]=0; //@line 1147 "binascii.c"
        __label__ = 18; break; //@line 1147 "binascii.c"
      case 8: // $bb8
        var $19=HEAP[$retval1]; //@line 1149 "binascii.c"
        var $20=$19; //@line 1149 "binascii.c"
        var $21=(($20+20)&4294967295); //@line 1149 "binascii.c"
        var $22=(($21)&4294967295); //@line 1149 "binascii.c"
        HEAP[$retbuf]=$22; //@line 1149 "binascii.c"
        HEAP[$j]=0; //@line 1151 "binascii.c"
        var $23=HEAP[$j]; //@line 1151 "binascii.c"
        HEAP[$i]=$23; //@line 1151 "binascii.c"
        __label__ = 13; break; //@line 1151 "binascii.c"
      case 9: // $bb9
        var $24=HEAP[$argbuf]; //@line 1152 "binascii.c"
        var $25=HEAP[$i]; //@line 1152 "binascii.c"
        var $26=(($24+$25)&4294967295); //@line 1152 "binascii.c"
        var $27=HEAP[$26]; //@line 1152 "binascii.c"
        var $28=unSign(($27), 8, 0); //@line 1152 "binascii.c"
        var $29=_to_int($28); //@line 1152 "binascii.c"
        HEAP[$top]=$29; //@line 1152 "binascii.c"
        var $30=HEAP[$i]; //@line 1153 "binascii.c"
        var $31=((($30) + 1)&4294967295); //@line 1153 "binascii.c"
        var $32=HEAP[$argbuf]; //@line 1153 "binascii.c"
        var $33=(($32+$31)&4294967295); //@line 1153 "binascii.c"
        var $34=HEAP[$33]; //@line 1153 "binascii.c"
        var $35=unSign(($34), 8, 0); //@line 1153 "binascii.c"
        var $36=_to_int($35); //@line 1153 "binascii.c"
        HEAP[$bot]=$36; //@line 1153 "binascii.c"
        var $37=HEAP[$top]; //@line 1154 "binascii.c"
        var $38=((($37))|0)==-1; //@line 1154 "binascii.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1154 "binascii.c"
      case 10: // $bb10
        var $39=HEAP[$bot]; //@line 1154 "binascii.c"
        var $40=((($39))|0)==-1; //@line 1154 "binascii.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1154 "binascii.c"
      case 11: // $bb11
        var $41=HEAP[_PyExc_TypeError]; //@line 1155 "binascii.c"
        _PyErr_SetString($41, ((__str29)&4294967295)); //@line 1155 "binascii.c"
        __label__ = 15; break; //@line 1155 "binascii.c"
      case 12: // $bb12
        var $42=HEAP[$top]; //@line 1159 "binascii.c"
        var $43=((($42)) & 255); //@line 1159 "binascii.c"
        var $44=($43) << 4; //@line 1159 "binascii.c"
        var $45=HEAP[$bot]; //@line 1159 "binascii.c"
        var $46=((($45)) & 255); //@line 1159 "binascii.c"
        var $47=((($44) + ($46))&255); //@line 1159 "binascii.c"
        var $48=HEAP[$retbuf]; //@line 1159 "binascii.c"
        var $49=HEAP[$j]; //@line 1159 "binascii.c"
        var $50=(($48+$49)&4294967295); //@line 1159 "binascii.c"
        HEAP[$50]=$47; //@line 1159 "binascii.c"
        var $51=HEAP[$j]; //@line 1159 "binascii.c"
        var $52=((($51) + 1)&4294967295); //@line 1159 "binascii.c"
        HEAP[$j]=$52; //@line 1159 "binascii.c"
        var $53=HEAP[$i]; //@line 1151 "binascii.c"
        var $54=((($53) + 2)&4294967295); //@line 1151 "binascii.c"
        HEAP[$i]=$54; //@line 1151 "binascii.c"
        __label__ = 13; break; //@line 1151 "binascii.c"
      case 13: // $bb13
        var $55=HEAP[$i]; //@line 1151 "binascii.c"
        var $56=HEAP[$arglen]; //@line 1151 "binascii.c"
        var $57=((($55))|0) < ((($56))|0); //@line 1151 "binascii.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1151 "binascii.c"
      case 14: // $bb14
        _PyBuffer_Release($parg); //@line 1161 "binascii.c"
        var $58=HEAP[$retval1]; //@line 1162 "binascii.c"
        HEAP[$0]=$58; //@line 1162 "binascii.c"
        __label__ = 18; break; //@line 1162 "binascii.c"
      case 15: // $finally
        _PyBuffer_Release($parg); //@line 1165 "binascii.c"
        var $59=HEAP[$retval1]; //@line 1166 "binascii.c"
        var $60=(($59)&4294967295); //@line 1166 "binascii.c"
        var $61=HEAP[$60]; //@line 1166 "binascii.c"
        var $62=((($61) - 1)&4294967295); //@line 1166 "binascii.c"
        var $63=HEAP[$retval1]; //@line 1166 "binascii.c"
        var $64=(($63)&4294967295); //@line 1166 "binascii.c"
        HEAP[$64]=$62; //@line 1166 "binascii.c"
        var $65=HEAP[$retval1]; //@line 1166 "binascii.c"
        var $66=(($65)&4294967295); //@line 1166 "binascii.c"
        var $67=HEAP[$66]; //@line 1166 "binascii.c"
        var $68=((($67))|0)==0; //@line 1166 "binascii.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1166 "binascii.c"
      case 16: // $bb15
        var $69=HEAP[$retval1]; //@line 1166 "binascii.c"
        var $70=(($69+4)&4294967295); //@line 1166 "binascii.c"
        var $71=HEAP[$70]; //@line 1166 "binascii.c"
        var $72=(($71+24)&4294967295); //@line 1166 "binascii.c"
        var $73=HEAP[$72]; //@line 1166 "binascii.c"
        var $74=HEAP[$retval1]; //@line 1166 "binascii.c"
        FUNCTION_TABLE[$73]($74); //@line 1166 "binascii.c"
        __label__ = 17; break; //@line 1166 "binascii.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 1167 "binascii.c"
        __label__ = 18; break; //@line 1167 "binascii.c"
      case 18: // $bb17
        var $75=HEAP[$0]; //@line 1128 "binascii.c"
        HEAP[$retval]=$75; //@line 1128 "binascii.c"
        __label__ = 19; break; //@line 1128 "binascii.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 1128 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1128 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_a2b_qp($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 101; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 101);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $in=__stackBase__+20;
        var $out=__stackBase__+24;
        var $ch=__stackBase__+28;
        var $pdata=__stackBase__+29;
        var $data=__stackBase__+81;
        var $odata=__stackBase__+85;
        var $datalen=__stackBase__+89;
        var $rv=__stackBase__+93;
        var $header=__stackBase__+97;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$datalen]=0; //@line 1200 "binascii.c"
        HEAP[$header]=0; //@line 1203 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 1205 "binascii.c"
        var $2=HEAP[$kwargs_addr]; //@line 1205 "binascii.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str30)&4294967295), ((_kwlist_9405)&4294967295), $pdata, $header); //@line 1205 "binascii.c"
        var $4=((($3))|0)==0; //@line 1205 "binascii.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1205 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1207 "binascii.c"
        __label__ = 42; break; //@line 1207 "binascii.c"
      case 2: // $bb1
        var $5=(($pdata)&4294967295); //@line 1208 "binascii.c"
        var $6=HEAP[$5]; //@line 1208 "binascii.c"
        HEAP[$data]=$6; //@line 1208 "binascii.c"
        var $7=(($pdata+8)&4294967295); //@line 1209 "binascii.c"
        var $8=HEAP[$7]; //@line 1209 "binascii.c"
        HEAP[$datalen]=$8; //@line 1209 "binascii.c"
        var $9=HEAP[$datalen]; //@line 1215 "binascii.c"
        var $10=_PyMem_Malloc($9); //@line 1215 "binascii.c"
        HEAP[$odata]=$10; //@line 1215 "binascii.c"
        var $11=HEAP[$odata]; //@line 1216 "binascii.c"
        var $12=($11)==0; //@line 1216 "binascii.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1216 "binascii.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 1217 "binascii.c"
        var $13=_PyErr_NoMemory(); //@line 1218 "binascii.c"
        HEAP[$0]=0; //@line 1219 "binascii.c"
        __label__ = 42; break; //@line 1219 "binascii.c"
      case 4: // $bb3
        var $14=HEAP[$datalen]; //@line 1221 "binascii.c"
        var $15=HEAP[$odata]; //@line 1221 "binascii.c"
        _llvm_memset_p0i8_i32($15, 0, $14, 1, 0); //@line 1221 "binascii.c"
        HEAP[$out]=0; //@line 1223 "binascii.c"
        var $16=HEAP[$out]; //@line 1223 "binascii.c"
        HEAP[$in]=$16; //@line 1223 "binascii.c"
        __label__ = 38; break; //@line 1223 "binascii.c"
      case 5: // $bb4
        var $17=HEAP[$data]; //@line 1225 "binascii.c"
        var $18=HEAP[$in]; //@line 1225 "binascii.c"
        var $19=(($17+$18)&4294967295); //@line 1225 "binascii.c"
        var $20=HEAP[$19]; //@line 1225 "binascii.c"
        var $21=reSign(($20), 8, 0)==61; //@line 1225 "binascii.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 34; break; } //@line 1225 "binascii.c"
      case 6: // $bb5
        var $22=HEAP[$in]; //@line 1226 "binascii.c"
        var $23=((($22) + 1)&4294967295); //@line 1226 "binascii.c"
        HEAP[$in]=$23; //@line 1226 "binascii.c"
        var $24=HEAP[$in]; //@line 1227 "binascii.c"
        var $25=HEAP[$datalen]; //@line 1227 "binascii.c"
        var $26=((($24))|0) >= ((($25))|0); //@line 1227 "binascii.c"
        if ($26) { __label__ = 39; break; } else { __label__ = 7; break; } //@line 1227 "binascii.c"
      case 7: // $bb6
        var $27=HEAP[$data]; //@line 1229 "binascii.c"
        var $28=HEAP[$in]; //@line 1229 "binascii.c"
        var $29=(($27+$28)&4294967295); //@line 1229 "binascii.c"
        var $30=HEAP[$29]; //@line 1229 "binascii.c"
        var $31=reSign(($30), 8, 0)==10; //@line 1229 "binascii.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 1229 "binascii.c"
      case 8: // $bb7
        var $32=HEAP[$data]; //@line 1229 "binascii.c"
        var $33=HEAP[$in]; //@line 1229 "binascii.c"
        var $34=(($32+$33)&4294967295); //@line 1229 "binascii.c"
        var $35=HEAP[$34]; //@line 1229 "binascii.c"
        var $36=reSign(($35), 8, 0)==13; //@line 1229 "binascii.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 17; break; } //@line 1229 "binascii.c"
      case 9: // $bb8
        var $37=HEAP[$data]; //@line 1230 "binascii.c"
        var $38=HEAP[$in]; //@line 1230 "binascii.c"
        var $39=(($37+$38)&4294967295); //@line 1230 "binascii.c"
        var $40=HEAP[$39]; //@line 1230 "binascii.c"
        var $41=reSign(($40), 8, 0)!=10; //@line 1230 "binascii.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 1230 "binascii.c"
      case 10: // $bb9
        __label__ = 12; break; //@line 1230 "binascii.c"
      case 11: // $bb10
        var $42=HEAP[$in]; //@line 1231 "binascii.c"
        var $43=((($42) + 1)&4294967295); //@line 1231 "binascii.c"
        HEAP[$in]=$43; //@line 1231 "binascii.c"
        __label__ = 12; break; //@line 1231 "binascii.c"
      case 12: // $bb11
        var $44=HEAP[$in]; //@line 1231 "binascii.c"
        var $45=HEAP[$datalen]; //@line 1231 "binascii.c"
        var $46=((($44))|0) >= ((($45))|0); //@line 1231 "binascii.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1231 "binascii.c"
      case 13: // $bb12
        var $47=HEAP[$data]; //@line 1231 "binascii.c"
        var $48=HEAP[$in]; //@line 1231 "binascii.c"
        var $49=(($47+$48)&4294967295); //@line 1231 "binascii.c"
        var $50=HEAP[$49]; //@line 1231 "binascii.c"
        var $51=reSign(($50), 8, 0)!=10; //@line 1231 "binascii.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1231 "binascii.c"
      case 14: // $bb13
        var $52=HEAP[$in]; //@line 1233 "binascii.c"
        var $53=HEAP[$datalen]; //@line 1233 "binascii.c"
        var $54=((($52))|0) < ((($53))|0); //@line 1233 "binascii.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1233 "binascii.c"
      case 15: // $bb14
        var $55=HEAP[$in]; //@line 1233 "binascii.c"
        var $56=((($55) + 1)&4294967295); //@line 1233 "binascii.c"
        HEAP[$in]=$56; //@line 1233 "binascii.c"
        __label__ = 16; break; //@line 1233 "binascii.c"
      case 16: // $bb15
        __label__ = 33; break; //@line 1233 "binascii.c"
      case 17: // $bb16
        var $57=HEAP[$data]; //@line 1235 "binascii.c"
        var $58=HEAP[$in]; //@line 1235 "binascii.c"
        var $59=(($57+$58)&4294967295); //@line 1235 "binascii.c"
        var $60=HEAP[$59]; //@line 1235 "binascii.c"
        var $61=reSign(($60), 8, 0)==61; //@line 1235 "binascii.c"
        if ($61) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1235 "binascii.c"
      case 18: // $bb17
        var $62=HEAP[$odata]; //@line 1237 "binascii.c"
        var $63=HEAP[$out]; //@line 1237 "binascii.c"
        var $64=(($62+$63)&4294967295); //@line 1237 "binascii.c"
        HEAP[$64]=61; //@line 1237 "binascii.c"
        var $65=HEAP[$out]; //@line 1237 "binascii.c"
        var $66=((($65) + 1)&4294967295); //@line 1237 "binascii.c"
        HEAP[$out]=$66; //@line 1237 "binascii.c"
        var $67=HEAP[$in]; //@line 1238 "binascii.c"
        var $68=((($67) + 1)&4294967295); //@line 1238 "binascii.c"
        HEAP[$in]=$68; //@line 1238 "binascii.c"
        __label__ = 33; break; //@line 1238 "binascii.c"
      case 19: // $bb18
        var $69=HEAP[$data]; //@line 1240 "binascii.c"
        var $70=HEAP[$in]; //@line 1240 "binascii.c"
        var $71=(($69+$70)&4294967295); //@line 1240 "binascii.c"
        var $72=HEAP[$71]; //@line 1240 "binascii.c"
        var $73=unSign(($72), 8, 0) <= 64; //@line 1240 "binascii.c"
        if ($73) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1240 "binascii.c"
      case 20: // $bb19
        var $74=HEAP[$data]; //@line 1240 "binascii.c"
        var $75=HEAP[$in]; //@line 1240 "binascii.c"
        var $76=(($74+$75)&4294967295); //@line 1240 "binascii.c"
        var $77=HEAP[$76]; //@line 1240 "binascii.c"
        var $78=unSign(($77), 8, 0) <= 70; //@line 1240 "binascii.c"
        if ($78) { __label__ = 25; break; } else { __label__ = 21; break; } //@line 1240 "binascii.c"
      case 21: // $bb20
        var $79=HEAP[$data]; //@line 1240 "binascii.c"
        var $80=HEAP[$in]; //@line 1240 "binascii.c"
        var $81=(($79+$80)&4294967295); //@line 1240 "binascii.c"
        var $82=HEAP[$81]; //@line 1240 "binascii.c"
        var $83=unSign(($82), 8, 0) <= 96; //@line 1240 "binascii.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1240 "binascii.c"
      case 22: // $bb21
        var $84=HEAP[$data]; //@line 1240 "binascii.c"
        var $85=HEAP[$in]; //@line 1240 "binascii.c"
        var $86=(($84+$85)&4294967295); //@line 1240 "binascii.c"
        var $87=HEAP[$86]; //@line 1240 "binascii.c"
        var $88=unSign(($87), 8, 0) <= 102; //@line 1240 "binascii.c"
        if ($88) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 1240 "binascii.c"
      case 23: // $bb22
        var $89=HEAP[$data]; //@line 1240 "binascii.c"
        var $90=HEAP[$in]; //@line 1240 "binascii.c"
        var $91=(($89+$90)&4294967295); //@line 1240 "binascii.c"
        var $92=HEAP[$91]; //@line 1240 "binascii.c"
        var $93=unSign(($92), 8, 0) <= 47; //@line 1240 "binascii.c"
        if ($93) { __label__ = 32; break; } else { __label__ = 24; break; } //@line 1240 "binascii.c"
      case 24: // $bb23
        var $94=HEAP[$data]; //@line 1240 "binascii.c"
        var $95=HEAP[$in]; //@line 1240 "binascii.c"
        var $96=(($94+$95)&4294967295); //@line 1240 "binascii.c"
        var $97=HEAP[$96]; //@line 1240 "binascii.c"
        var $98=unSign(($97), 8, 0) <= 57; //@line 1240 "binascii.c"
        if ($98) { __label__ = 25; break; } else { __label__ = 32; break; } //@line 1240 "binascii.c"
      case 25: // $bb24
        var $99=HEAP[$in]; //@line 1240 "binascii.c"
        var $100=((($99) + 1)&4294967295); //@line 1240 "binascii.c"
        var $101=HEAP[$data]; //@line 1240 "binascii.c"
        var $102=(($101+$100)&4294967295); //@line 1240 "binascii.c"
        var $103=HEAP[$102]; //@line 1240 "binascii.c"
        var $104=unSign(($103), 8, 0) <= 64; //@line 1240 "binascii.c"
        if ($104) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 1240 "binascii.c"
      case 26: // $bb25
        var $105=HEAP[$in]; //@line 1240 "binascii.c"
        var $106=((($105) + 1)&4294967295); //@line 1240 "binascii.c"
        var $107=HEAP[$data]; //@line 1240 "binascii.c"
        var $108=(($107+$106)&4294967295); //@line 1240 "binascii.c"
        var $109=HEAP[$108]; //@line 1240 "binascii.c"
        var $110=unSign(($109), 8, 0) <= 70; //@line 1240 "binascii.c"
        if ($110) { __label__ = 31; break; } else { __label__ = 27; break; } //@line 1240 "binascii.c"
      case 27: // $bb26
        var $111=HEAP[$in]; //@line 1240 "binascii.c"
        var $112=((($111) + 1)&4294967295); //@line 1240 "binascii.c"
        var $113=HEAP[$data]; //@line 1240 "binascii.c"
        var $114=(($113+$112)&4294967295); //@line 1240 "binascii.c"
        var $115=HEAP[$114]; //@line 1240 "binascii.c"
        var $116=unSign(($115), 8, 0) <= 96; //@line 1240 "binascii.c"
        if ($116) { __label__ = 29; break; } else { __label__ = 28; break; } //@line 1240 "binascii.c"
      case 28: // $bb27
        var $117=HEAP[$in]; //@line 1240 "binascii.c"
        var $118=((($117) + 1)&4294967295); //@line 1240 "binascii.c"
        var $119=HEAP[$data]; //@line 1240 "binascii.c"
        var $120=(($119+$118)&4294967295); //@line 1240 "binascii.c"
        var $121=HEAP[$120]; //@line 1240 "binascii.c"
        var $122=unSign(($121), 8, 0) <= 102; //@line 1240 "binascii.c"
        if ($122) { __label__ = 31; break; } else { __label__ = 29; break; } //@line 1240 "binascii.c"
      case 29: // $bb28
        var $123=HEAP[$in]; //@line 1240 "binascii.c"
        var $124=((($123) + 1)&4294967295); //@line 1240 "binascii.c"
        var $125=HEAP[$data]; //@line 1240 "binascii.c"
        var $126=(($125+$124)&4294967295); //@line 1240 "binascii.c"
        var $127=HEAP[$126]; //@line 1240 "binascii.c"
        var $128=unSign(($127), 8, 0) <= 47; //@line 1240 "binascii.c"
        if ($128) { __label__ = 32; break; } else { __label__ = 30; break; } //@line 1240 "binascii.c"
      case 30: // $bb29
        var $129=HEAP[$in]; //@line 1240 "binascii.c"
        var $130=((($129) + 1)&4294967295); //@line 1240 "binascii.c"
        var $131=HEAP[$data]; //@line 1240 "binascii.c"
        var $132=(($131+$130)&4294967295); //@line 1240 "binascii.c"
        var $133=HEAP[$132]; //@line 1240 "binascii.c"
        var $134=unSign(($133), 8, 0) <= 57; //@line 1240 "binascii.c"
        if ($134) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1240 "binascii.c"
      case 31: // $bb30
        var $135=HEAP[$data]; //@line 1247 "binascii.c"
        var $136=HEAP[$in]; //@line 1247 "binascii.c"
        var $137=(($135+$136)&4294967295); //@line 1247 "binascii.c"
        var $138=HEAP[$137]; //@line 1247 "binascii.c"
        var $139=unSign(($138), 8, 0); //@line 1247 "binascii.c"
        var $140=((_table_hex+$139*4)&4294967295); //@line 1247 "binascii.c"
        var $141=HEAP[$140]; //@line 1247 "binascii.c"
        var $142=($141) << 4; //@line 1247 "binascii.c"
        var $143=((($142)) & 255); //@line 1247 "binascii.c"
        HEAP[$ch]=$143; //@line 1247 "binascii.c"
        var $144=HEAP[$in]; //@line 1248 "binascii.c"
        var $145=((($144) + 1)&4294967295); //@line 1248 "binascii.c"
        HEAP[$in]=$145; //@line 1248 "binascii.c"
        var $146=HEAP[$data]; //@line 1249 "binascii.c"
        var $147=HEAP[$in]; //@line 1249 "binascii.c"
        var $148=(($146+$147)&4294967295); //@line 1249 "binascii.c"
        var $149=HEAP[$148]; //@line 1249 "binascii.c"
        var $150=unSign(($149), 8, 0); //@line 1249 "binascii.c"
        var $151=((_table_hex+$150*4)&4294967295); //@line 1249 "binascii.c"
        var $152=HEAP[$151]; //@line 1249 "binascii.c"
        var $153=((($152)) & 255); //@line 1249 "binascii.c"
        var $154=HEAP[$ch]; //@line 1249 "binascii.c"
        var $155=($153) | ($154); //@line 1249 "binascii.c"
        HEAP[$ch]=$155; //@line 1249 "binascii.c"
        var $156=HEAP[$in]; //@line 1250 "binascii.c"
        var $157=((($156) + 1)&4294967295); //@line 1250 "binascii.c"
        HEAP[$in]=$157; //@line 1250 "binascii.c"
        var $158=HEAP[$ch]; //@line 1251 "binascii.c"
        var $159=HEAP[$odata]; //@line 1251 "binascii.c"
        var $160=HEAP[$out]; //@line 1251 "binascii.c"
        var $161=(($159+$160)&4294967295); //@line 1251 "binascii.c"
        HEAP[$161]=$158; //@line 1251 "binascii.c"
        var $162=HEAP[$out]; //@line 1251 "binascii.c"
        var $163=((($162) + 1)&4294967295); //@line 1251 "binascii.c"
        HEAP[$out]=$163; //@line 1251 "binascii.c"
        __label__ = 33; break; //@line 1251 "binascii.c"
      case 32: // $bb31
        var $164=HEAP[$odata]; //@line 1254 "binascii.c"
        var $165=HEAP[$out]; //@line 1254 "binascii.c"
        var $166=(($164+$165)&4294967295); //@line 1254 "binascii.c"
        HEAP[$166]=61; //@line 1254 "binascii.c"
        var $167=HEAP[$out]; //@line 1254 "binascii.c"
        var $168=((($167) + 1)&4294967295); //@line 1254 "binascii.c"
        HEAP[$out]=$168; //@line 1254 "binascii.c"
        __label__ = 33; break; //@line 1254 "binascii.c"
      case 33: // $bb32
        __label__ = 38; break; //@line 1254 "binascii.c"
      case 34: // $bb33
        var $169=HEAP[$header]; //@line 1257 "binascii.c"
        var $170=((($169))|0)==0; //@line 1257 "binascii.c"
        if ($170) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 1257 "binascii.c"
      case 35: // $bb34
        var $171=HEAP[$data]; //@line 1257 "binascii.c"
        var $172=HEAP[$in]; //@line 1257 "binascii.c"
        var $173=(($171+$172)&4294967295); //@line 1257 "binascii.c"
        var $174=HEAP[$173]; //@line 1257 "binascii.c"
        var $175=reSign(($174), 8, 0)!=95; //@line 1257 "binascii.c"
        if ($175) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 1257 "binascii.c"
      case 36: // $bb35
        var $176=HEAP[$odata]; //@line 1258 "binascii.c"
        var $177=HEAP[$out]; //@line 1258 "binascii.c"
        var $178=(($176+$177)&4294967295); //@line 1258 "binascii.c"
        HEAP[$178]=32; //@line 1258 "binascii.c"
        var $179=HEAP[$out]; //@line 1258 "binascii.c"
        var $180=((($179) + 1)&4294967295); //@line 1258 "binascii.c"
        HEAP[$out]=$180; //@line 1258 "binascii.c"
        var $181=HEAP[$in]; //@line 1259 "binascii.c"
        var $182=((($181) + 1)&4294967295); //@line 1259 "binascii.c"
        HEAP[$in]=$182; //@line 1259 "binascii.c"
        __label__ = 38; break; //@line 1259 "binascii.c"
      case 37: // $bb36
        var $183=HEAP[$data]; //@line 1262 "binascii.c"
        var $184=HEAP[$in]; //@line 1262 "binascii.c"
        var $185=(($183+$184)&4294967295); //@line 1262 "binascii.c"
        var $186=HEAP[$185]; //@line 1262 "binascii.c"
        var $187=HEAP[$odata]; //@line 1262 "binascii.c"
        var $188=HEAP[$out]; //@line 1262 "binascii.c"
        var $189=(($187+$188)&4294967295); //@line 1262 "binascii.c"
        HEAP[$189]=$186; //@line 1262 "binascii.c"
        var $190=HEAP[$in]; //@line 1263 "binascii.c"
        var $191=((($190) + 1)&4294967295); //@line 1263 "binascii.c"
        HEAP[$in]=$191; //@line 1263 "binascii.c"
        var $192=HEAP[$out]; //@line 1264 "binascii.c"
        var $193=((($192) + 1)&4294967295); //@line 1264 "binascii.c"
        HEAP[$out]=$193; //@line 1264 "binascii.c"
        __label__ = 38; break; //@line 1264 "binascii.c"
      case 38: // $bb37
        var $194=HEAP[$in]; //@line 1224 "binascii.c"
        var $195=HEAP[$datalen]; //@line 1224 "binascii.c"
        var $196=((($194))|0) < ((($195))|0); //@line 1224 "binascii.c"
        if ($196) { __label__ = 5; break; } else { __label__ = 39; break; } //@line 1224 "binascii.c"
      case 39: // $bb38
        var $197=HEAP[$odata]; //@line 1267 "binascii.c"
        var $198=HEAP[$out]; //@line 1267 "binascii.c"
        var $199=_PyString_FromStringAndSize($197, $198); //@line 1267 "binascii.c"
        HEAP[$rv]=$199; //@line 1267 "binascii.c"
        var $200=HEAP[$rv]; //@line 1267 "binascii.c"
        var $201=($200)==0; //@line 1267 "binascii.c"
        if ($201) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1267 "binascii.c"
      case 40: // $bb39
        _PyBuffer_Release($pdata); //@line 1268 "binascii.c"
        var $202=HEAP[$odata]; //@line 1269 "binascii.c"
        _PyMem_Free($202); //@line 1269 "binascii.c"
        HEAP[$0]=0; //@line 1270 "binascii.c"
        __label__ = 42; break; //@line 1270 "binascii.c"
      case 41: // $bb40
        _PyBuffer_Release($pdata); //@line 1272 "binascii.c"
        var $203=HEAP[$odata]; //@line 1273 "binascii.c"
        _PyMem_Free($203); //@line 1273 "binascii.c"
        var $204=HEAP[$rv]; //@line 1274 "binascii.c"
        HEAP[$0]=$204; //@line 1274 "binascii.c"
        __label__ = 42; break; //@line 1274 "binascii.c"
      case 42: // $bb41
        var $205=HEAP[$0]; //@line 1207 "binascii.c"
        HEAP[$retval]=$205; //@line 1207 "binascii.c"
        __label__ = 43; break; //@line 1207 "binascii.c"
      case 43: // $return
        var $retval42=HEAP[$retval]; //@line 1207 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval42; //@line 1207 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _to_hex($ch, $s) {
    var __stackBase__  = STACKTOP; STACKTOP += 17; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 17);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ch_addr=__stackBase__;
        var $s_addr=__stackBase__+1;
        var $retval=__stackBase__+5;
        var $0=__stackBase__+9;
        var $uvalue=__stackBase__+13;
        var $_alloca_point_=0;
        HEAP[$ch_addr]=$ch;
        HEAP[$s_addr]=$s;
        var $1=HEAP[$ch_addr]; //@line 1280 "binascii.c"
        var $2=unSign(($1), 8, 0); //@line 1280 "binascii.c"
        HEAP[$uvalue]=$2; //@line 1280 "binascii.c"
        var $3=HEAP[$uvalue]; //@line 1282 "binascii.c"
        var $4=($3) & 15; //@line 1282 "binascii.c"
        var $5=((__str33+$4)&4294967295); //@line 1282 "binascii.c"
        var $6=HEAP[$5]; //@line 1282 "binascii.c"
        var $7=HEAP[$s_addr]; //@line 1282 "binascii.c"
        var $8=(($7+1)&4294967295); //@line 1282 "binascii.c"
        HEAP[$8]=$6; //@line 1282 "binascii.c"
        var $9=HEAP[$uvalue]; //@line 1283 "binascii.c"
        var $10=Math.floor(((($9))>>>0)/16); //@line 1283 "binascii.c"
        HEAP[$uvalue]=$10; //@line 1283 "binascii.c"
        var $11=HEAP[$uvalue]; //@line 1284 "binascii.c"
        var $12=($11) & 15; //@line 1284 "binascii.c"
        var $13=((__str33+$12)&4294967295); //@line 1284 "binascii.c"
        var $14=HEAP[$13]; //@line 1284 "binascii.c"
        var $15=HEAP[$s_addr]; //@line 1284 "binascii.c"
        var $16=(($15)&4294967295); //@line 1284 "binascii.c"
        HEAP[$16]=$14; //@line 1284 "binascii.c"
        HEAP[$0]=0; //@line 1285 "binascii.c"
        var $17=HEAP[$0]; //@line 1285 "binascii.c"
        HEAP[$retval]=$17; //@line 1285 "binascii.c"
        __label__ = 1; break; //@line 1285 "binascii.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1285 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1285 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _binascii_b2a_qp($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 125; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 125);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwargs_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $in=__stackBase__+20;
        var $out=__stackBase__+24;
        var $pdata=__stackBase__+28;
        var $data=__stackBase__+80;
        var $odata=__stackBase__+84;
        var $datalen=__stackBase__+88;
        var $odatalen=__stackBase__+92;
        var $rv=__stackBase__+96;
        var $linelen=__stackBase__+100;
        var $istext=__stackBase__+104;
        var $quotetabs=__stackBase__+108;
        var $header=__stackBase__+112;
        var $ch=__stackBase__+116;
        var $crlf=__stackBase__+117;
        var $p=__stackBase__+121;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kwargs_addr]=$kwargs;
        HEAP[$datalen]=0; //@line 1305 "binascii.c"
        HEAP[$odatalen]=0; //@line 1305 "binascii.c"
        HEAP[$linelen]=0; //@line 1307 "binascii.c"
        HEAP[$istext]=1; //@line 1310 "binascii.c"
        HEAP[$quotetabs]=0; //@line 1311 "binascii.c"
        HEAP[$header]=0; //@line 1312 "binascii.c"
        HEAP[$crlf]=0; //@line 1314 "binascii.c"
        var $1=HEAP[$args_addr]; //@line 1317 "binascii.c"
        var $2=HEAP[$kwargs_addr]; //@line 1317 "binascii.c"
        var $3=__PyArg_ParseTupleAndKeywords_SizeT($1, $2, ((__str34)&4294967295), ((_kwlist_9526)&4294967295), $pdata, $quotetabs, $istext, $header); //@line 1317 "binascii.c"
        var $4=((($3))|0)==0; //@line 1317 "binascii.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1317 "binascii.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1319 "binascii.c"
        __label__ = 117; break; //@line 1319 "binascii.c"
      case 2: // $bb1
        var $5=(($pdata)&4294967295); //@line 1320 "binascii.c"
        var $6=HEAP[$5]; //@line 1320 "binascii.c"
        HEAP[$data]=$6; //@line 1320 "binascii.c"
        var $7=(($pdata+8)&4294967295); //@line 1321 "binascii.c"
        var $8=HEAP[$7]; //@line 1321 "binascii.c"
        HEAP[$datalen]=$8; //@line 1321 "binascii.c"
        var $9=HEAP[$datalen]; //@line 1327 "binascii.c"
        var $10=HEAP[$data]; //@line 1327 "binascii.c"
        var $11=_memchr($10, 10, $9); //@line 1327 "binascii.c"
        HEAP[$p]=$11; //@line 1327 "binascii.c"
        var $12=HEAP[$p]; //@line 1328 "binascii.c"
        var $13=($12)!=0; //@line 1328 "binascii.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 3: // $bb2
        var $14=HEAP[$p]; //@line 1328 "binascii.c"
        var $15=HEAP[$data]; //@line 1328 "binascii.c"
        var $16=($14) > ($15); //@line 1328 "binascii.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 4: // $bb3
        var $17=HEAP[$p]; //@line 1328 "binascii.c"
        var $18=(($17+-1)&4294967295); //@line 1328 "binascii.c"
        var $19=HEAP[$18]; //@line 1328 "binascii.c"
        var $20=reSign(($19), 8, 0)==13; //@line 1328 "binascii.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1328 "binascii.c"
      case 5: // $bb4
        HEAP[$crlf]=1; //@line 1329 "binascii.c"
        __label__ = 6; break; //@line 1329 "binascii.c"
      case 6: // $bb5
        HEAP[$in]=0; //@line 1332 "binascii.c"
        __label__ = 57; break; //@line 1332 "binascii.c"
      case 7: // $bb6
        var $21=HEAP[$data]; //@line 1334 "binascii.c"
        var $22=HEAP[$in]; //@line 1334 "binascii.c"
        var $23=(($21+$22)&4294967295); //@line 1334 "binascii.c"
        var $24=HEAP[$23]; //@line 1334 "binascii.c"
        var $25=unSign(($24), 8, 0) > 126; //@line 1334 "binascii.c"
        if ($25) { __label__ = 29; break; } else { __label__ = 8; break; } //@line 1334 "binascii.c"
      case 8: // $bb7
        var $26=HEAP[$data]; //@line 1334 "binascii.c"
        var $27=HEAP[$in]; //@line 1334 "binascii.c"
        var $28=(($26+$27)&4294967295); //@line 1334 "binascii.c"
        var $29=HEAP[$28]; //@line 1334 "binascii.c"
        var $30=reSign(($29), 8, 0)==61; //@line 1334 "binascii.c"
        if ($30) { __label__ = 29; break; } else { __label__ = 9; break; } //@line 1334 "binascii.c"
      case 9: // $bb8
        var $31=HEAP[$header]; //@line 1334 "binascii.c"
        var $32=((($31))|0)==0; //@line 1334 "binascii.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1334 "binascii.c"
      case 10: // $bb9
        var $33=HEAP[$data]; //@line 1334 "binascii.c"
        var $34=HEAP[$in]; //@line 1334 "binascii.c"
        var $35=(($33+$34)&4294967295); //@line 1334 "binascii.c"
        var $36=HEAP[$35]; //@line 1334 "binascii.c"
        var $37=reSign(($36), 8, 0)==95; //@line 1334 "binascii.c"
        if ($37) { __label__ = 29; break; } else { __label__ = 11; break; } //@line 1334 "binascii.c"
      case 11: // $bb10
        var $38=HEAP[$data]; //@line 1334 "binascii.c"
        var $39=HEAP[$in]; //@line 1334 "binascii.c"
        var $40=(($38+$39)&4294967295); //@line 1334 "binascii.c"
        var $41=HEAP[$40]; //@line 1334 "binascii.c"
        var $42=reSign(($41), 8, 0)!=46; //@line 1334 "binascii.c"
        if ($42) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 1334 "binascii.c"
      case 12: // $bb11
        var $43=HEAP[$linelen]; //@line 1334 "binascii.c"
        var $44=((($43))|0)!=0; //@line 1334 "binascii.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 1334 "binascii.c"
      case 13: // $bb12
        var $45=HEAP[$in]; //@line 1334 "binascii.c"
        var $46=((($45) + 1)&4294967295); //@line 1334 "binascii.c"
        var $47=HEAP[$data]; //@line 1334 "binascii.c"
        var $48=(($47+$46)&4294967295); //@line 1334 "binascii.c"
        var $49=HEAP[$48]; //@line 1334 "binascii.c"
        var $50=reSign(($49), 8, 0)==10; //@line 1334 "binascii.c"
        if ($50) { __label__ = 29; break; } else { __label__ = 14; break; } //@line 1334 "binascii.c"
      case 14: // $bb13
        var $51=HEAP[$in]; //@line 1334 "binascii.c"
        var $52=((($51) + 1)&4294967295); //@line 1334 "binascii.c"
        var $53=HEAP[$data]; //@line 1334 "binascii.c"
        var $54=(($53+$52)&4294967295); //@line 1334 "binascii.c"
        var $55=HEAP[$54]; //@line 1334 "binascii.c"
        var $56=reSign(($55), 8, 0)==13; //@line 1334 "binascii.c"
        if ($56) { __label__ = 29; break; } else { __label__ = 15; break; } //@line 1334 "binascii.c"
      case 15: // $bb14
        var $57=HEAP[$in]; //@line 1334 "binascii.c"
        var $58=((($57) + 1)&4294967295); //@line 1334 "binascii.c"
        var $59=HEAP[$data]; //@line 1334 "binascii.c"
        var $60=(($59+$58)&4294967295); //@line 1334 "binascii.c"
        var $61=HEAP[$60]; //@line 1334 "binascii.c"
        var $62=reSign(($61), 8, 0)==0; //@line 1334 "binascii.c"
        if ($62) { __label__ = 29; break; } else { __label__ = 16; break; } //@line 1334 "binascii.c"
      case 16: // $bb15
        var $63=HEAP[$istext]; //@line 1334 "binascii.c"
        var $64=((($63))|0)!=0; //@line 1334 "binascii.c"
        if ($64) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1334 "binascii.c"
      case 17: // $bb16
        var $65=HEAP[$data]; //@line 1334 "binascii.c"
        var $66=HEAP[$in]; //@line 1334 "binascii.c"
        var $67=(($65+$66)&4294967295); //@line 1334 "binascii.c"
        var $68=HEAP[$67]; //@line 1334 "binascii.c"
        var $69=reSign(($68), 8, 0)==13; //@line 1334 "binascii.c"
        if ($69) { __label__ = 29; break; } else { __label__ = 18; break; } //@line 1334 "binascii.c"
      case 18: // $bb17
        var $70=HEAP[$data]; //@line 1334 "binascii.c"
        var $71=HEAP[$in]; //@line 1334 "binascii.c"
        var $72=(($70+$71)&4294967295); //@line 1334 "binascii.c"
        var $73=HEAP[$72]; //@line 1334 "binascii.c"
        var $74=reSign(($73), 8, 0)==10; //@line 1334 "binascii.c"
        if ($74) { __label__ = 29; break; } else { __label__ = 19; break; } //@line 1334 "binascii.c"
      case 19: // $bb18
        var $75=HEAP[$data]; //@line 1334 "binascii.c"
        var $76=HEAP[$in]; //@line 1334 "binascii.c"
        var $77=(($75+$76)&4294967295); //@line 1334 "binascii.c"
        var $78=HEAP[$77]; //@line 1334 "binascii.c"
        var $79=reSign(($78), 8, 0)==9; //@line 1334 "binascii.c"
        if ($79) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 1334 "binascii.c"
      case 20: // $bb19
        var $80=HEAP[$data]; //@line 1334 "binascii.c"
        var $81=HEAP[$in]; //@line 1334 "binascii.c"
        var $82=(($80+$81)&4294967295); //@line 1334 "binascii.c"
        var $83=HEAP[$82]; //@line 1334 "binascii.c"
        var $84=reSign(($83), 8, 0)==32; //@line 1334 "binascii.c"
        if ($84) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1334 "binascii.c"
      case 21: // $bb20
        var $85=HEAP[$in]; //@line 1334 "binascii.c"
        var $86=((($85) + 1)&4294967295); //@line 1334 "binascii.c"
        var $87=HEAP[$datalen]; //@line 1334 "binascii.c"
        var $88=((($86))|0)==((($87))|0); //@line 1334 "binascii.c"
        if ($88) { __label__ = 29; break; } else { __label__ = 22; break; } //@line 1334 "binascii.c"
      case 22: // $bb21
        var $89=HEAP[$data]; //@line 1334 "binascii.c"
        var $90=HEAP[$in]; //@line 1334 "binascii.c"
        var $91=(($89+$90)&4294967295); //@line 1334 "binascii.c"
        var $92=HEAP[$91]; //@line 1334 "binascii.c"
        var $93=unSign(($92), 8, 0) > 32; //@line 1334 "binascii.c"
        if ($93) { __label__ = 34; break; } else { __label__ = 23; break; } //@line 1334 "binascii.c"
      case 23: // $bb22
        var $94=HEAP[$data]; //@line 1334 "binascii.c"
        var $95=HEAP[$in]; //@line 1334 "binascii.c"
        var $96=(($94+$95)&4294967295); //@line 1334 "binascii.c"
        var $97=HEAP[$96]; //@line 1334 "binascii.c"
        var $98=reSign(($97), 8, 0)==13; //@line 1334 "binascii.c"
        if ($98) { __label__ = 34; break; } else { __label__ = 24; break; } //@line 1334 "binascii.c"
      case 24: // $bb23
        var $99=HEAP[$data]; //@line 1334 "binascii.c"
        var $100=HEAP[$in]; //@line 1334 "binascii.c"
        var $101=(($99+$100)&4294967295); //@line 1334 "binascii.c"
        var $102=HEAP[$101]; //@line 1334 "binascii.c"
        var $103=reSign(($102), 8, 0)==10; //@line 1334 "binascii.c"
        if ($103) { __label__ = 34; break; } else { __label__ = 25; break; } //@line 1334 "binascii.c"
      case 25: // $bb24
        var $104=HEAP[$quotetabs]; //@line 1334 "binascii.c"
        var $105=((($104))|0)!=0; //@line 1334 "binascii.c"
        if ($105) { __label__ = 29; break; } else { __label__ = 26; break; } //@line 1334 "binascii.c"
      case 26: // $bb25
        var $106=HEAP[$quotetabs]; //@line 1334 "binascii.c"
        var $107=((($106))|0)!=0; //@line 1334 "binascii.c"
        if ($107) { __label__ = 34; break; } else { __label__ = 27; break; } //@line 1334 "binascii.c"
      case 27: // $bb26
        var $108=HEAP[$data]; //@line 1334 "binascii.c"
        var $109=HEAP[$in]; //@line 1334 "binascii.c"
        var $110=(($108+$109)&4294967295); //@line 1334 "binascii.c"
        var $111=HEAP[$110]; //@line 1334 "binascii.c"
        var $112=reSign(($111), 8, 0)==9; //@line 1334 "binascii.c"
        if ($112) { __label__ = 34; break; } else { __label__ = 28; break; } //@line 1334 "binascii.c"
      case 28: // $bb27
        var $113=HEAP[$data]; //@line 1334 "binascii.c"
        var $114=HEAP[$in]; //@line 1334 "binascii.c"
        var $115=(($113+$114)&4294967295); //@line 1334 "binascii.c"
        var $116=HEAP[$115]; //@line 1334 "binascii.c"
        var $117=reSign(($116), 8, 0)!=32; //@line 1334 "binascii.c"
        if ($117) { __label__ = 29; break; } else { __label__ = 34; break; } //@line 1334 "binascii.c"
      case 29: // $bb28
        var $118=HEAP[$linelen]; //@line 1346 "binascii.c"
        var $119=((($118) + 3)&4294967295); //@line 1346 "binascii.c"
        var $120=((($119))>>>0) > 75; //@line 1346 "binascii.c"
        if ($120) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 1346 "binascii.c"
      case 30: // $bb29
        HEAP[$linelen]=0; //@line 1347 "binascii.c"
        var $121=HEAP[$crlf]; //@line 1348 "binascii.c"
        var $122=((($121))|0)!=0; //@line 1348 "binascii.c"
        if ($122) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1348 "binascii.c"
      case 31: // $bb30
        var $123=HEAP[$odatalen]; //@line 1349 "binascii.c"
        var $124=((($123) + 3)&4294967295); //@line 1349 "binascii.c"
        HEAP[$odatalen]=$124; //@line 1349 "binascii.c"
        __label__ = 33; break; //@line 1349 "binascii.c"
      case 32: // $bb31
        var $125=HEAP[$odatalen]; //@line 1351 "binascii.c"
        var $126=((($125) + 2)&4294967295); //@line 1351 "binascii.c"
        HEAP[$odatalen]=$126; //@line 1351 "binascii.c"
        __label__ = 33; break; //@line 1351 "binascii.c"
      case 33: // $bb32
        var $127=HEAP[$linelen]; //@line 1353 "binascii.c"
        var $128=((($127) + 3)&4294967295); //@line 1353 "binascii.c"
        HEAP[$linelen]=$128; //@line 1353 "binascii.c"
        var $129=HEAP[$odatalen]; //@line 1354 "binascii.c"
        var $130=((($129) + 3)&4294967295); //@line 1354 "binascii.c"
        HEAP[$odatalen]=$130; //@line 1354 "binascii.c"
        var $131=HEAP[$in]; //@line 1355 "binascii.c"
        var $132=((($131) + 1)&4294967295); //@line 1355 "binascii.c"
        HEAP[$in]=$132; //@line 1355 "binascii.c"
        __label__ = 57; break; //@line 1355 "binascii.c"
      case 34: // $bb33
        var $133=HEAP[$istext]; //@line 1358 "binascii.c"
        var $134=((($133))|0)==0; //@line 1358 "binascii.c"
        if ($134) { __label__ = 50; break; } else { __label__ = 35; break; } //@line 1358 "binascii.c"
      case 35: // $bb34
        var $135=HEAP[$data]; //@line 1358 "binascii.c"
        var $136=HEAP[$in]; //@line 1358 "binascii.c"
        var $137=(($135+$136)&4294967295); //@line 1358 "binascii.c"
        var $138=HEAP[$137]; //@line 1358 "binascii.c"
        var $139=reSign(($138), 8, 0)==10; //@line 1358 "binascii.c"
        if ($139) { __label__ = 39; break; } else { __label__ = 36; break; } //@line 1358 "binascii.c"
      case 36: // $bb35
        var $140=HEAP[$in]; //@line 1358 "binascii.c"
        var $141=((($140) + 1)&4294967295); //@line 1358 "binascii.c"
        var $142=HEAP[$datalen]; //@line 1358 "binascii.c"
        var $143=((($141))|0) >= ((($142))|0); //@line 1358 "binascii.c"
        if ($143) { __label__ = 50; break; } else { __label__ = 37; break; } //@line 1358 "binascii.c"
      case 37: // $bb36
        var $144=HEAP[$data]; //@line 1358 "binascii.c"
        var $145=HEAP[$in]; //@line 1358 "binascii.c"
        var $146=(($144+$145)&4294967295); //@line 1358 "binascii.c"
        var $147=HEAP[$146]; //@line 1358 "binascii.c"
        var $148=reSign(($147), 8, 0)!=13; //@line 1358 "binascii.c"
        if ($148) { __label__ = 50; break; } else { __label__ = 38; break; } //@line 1358 "binascii.c"
      case 38: // $bb37
        var $149=HEAP[$in]; //@line 1358 "binascii.c"
        var $150=((($149) + 1)&4294967295); //@line 1358 "binascii.c"
        var $151=HEAP[$data]; //@line 1358 "binascii.c"
        var $152=(($151+$150)&4294967295); //@line 1358 "binascii.c"
        var $153=HEAP[$152]; //@line 1358 "binascii.c"
        var $154=reSign(($153), 8, 0)==10; //@line 1358 "binascii.c"
        if ($154) { __label__ = 39; break; } else { __label__ = 50; break; } //@line 1358 "binascii.c"
      case 39: // $bb38
        HEAP[$linelen]=0; //@line 1363 "binascii.c"
        var $155=HEAP[$in]; //@line 1365 "binascii.c"
        var $156=((($155))|0)!=0; //@line 1365 "binascii.c"
        if ($156) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 1365 "binascii.c"
      case 40: // $bb39
        var $157=HEAP[$in]; //@line 1365 "binascii.c"
        var $158=((($157) - 1)&4294967295); //@line 1365 "binascii.c"
        var $159=HEAP[$data]; //@line 1365 "binascii.c"
        var $160=(($159+$158)&4294967295); //@line 1365 "binascii.c"
        var $161=HEAP[$160]; //@line 1365 "binascii.c"
        var $162=reSign(($161), 8, 0)==32; //@line 1365 "binascii.c"
        if ($162) { __label__ = 42; break; } else { __label__ = 41; break; } //@line 1365 "binascii.c"
      case 41: // $bb40
        var $163=HEAP[$in]; //@line 1365 "binascii.c"
        var $164=((($163) - 1)&4294967295); //@line 1365 "binascii.c"
        var $165=HEAP[$data]; //@line 1365 "binascii.c"
        var $166=(($165+$164)&4294967295); //@line 1365 "binascii.c"
        var $167=HEAP[$166]; //@line 1365 "binascii.c"
        var $168=reSign(($167), 8, 0)==9; //@line 1365 "binascii.c"
        if ($168) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1365 "binascii.c"
      case 42: // $bb41
        var $169=HEAP[$odatalen]; //@line 1366 "binascii.c"
        var $170=((($169) + 2)&4294967295); //@line 1366 "binascii.c"
        HEAP[$odatalen]=$170; //@line 1366 "binascii.c"
        __label__ = 43; break; //@line 1366 "binascii.c"
      case 43: // $bb42
        var $171=HEAP[$crlf]; //@line 1367 "binascii.c"
        var $172=((($171))|0)!=0; //@line 1367 "binascii.c"
        if ($172) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1367 "binascii.c"
      case 44: // $bb43
        var $173=HEAP[$odatalen]; //@line 1368 "binascii.c"
        var $174=((($173) + 2)&4294967295); //@line 1368 "binascii.c"
        HEAP[$odatalen]=$174; //@line 1368 "binascii.c"
        __label__ = 46; break; //@line 1368 "binascii.c"
      case 45: // $bb44
        var $175=HEAP[$odatalen]; //@line 1370 "binascii.c"
        var $176=((($175) + 1)&4294967295); //@line 1370 "binascii.c"
        HEAP[$odatalen]=$176; //@line 1370 "binascii.c"
        __label__ = 46; break; //@line 1370 "binascii.c"
      case 46: // $bb45
        var $177=HEAP[$data]; //@line 1371 "binascii.c"
        var $178=HEAP[$in]; //@line 1371 "binascii.c"
        var $179=(($177+$178)&4294967295); //@line 1371 "binascii.c"
        var $180=HEAP[$179]; //@line 1371 "binascii.c"
        var $181=reSign(($180), 8, 0)==13; //@line 1371 "binascii.c"
        if ($181) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1371 "binascii.c"
      case 47: // $bb46
        var $182=HEAP[$in]; //@line 1372 "binascii.c"
        var $183=((($182) + 2)&4294967295); //@line 1372 "binascii.c"
        HEAP[$in]=$183; //@line 1372 "binascii.c"
        __label__ = 49; break; //@line 1372 "binascii.c"
      case 48: // $bb47
        var $184=HEAP[$in]; //@line 1374 "binascii.c"
        var $185=((($184) + 1)&4294967295); //@line 1374 "binascii.c"
        HEAP[$in]=$185; //@line 1374 "binascii.c"
        __label__ = 49; break; //@line 1374 "binascii.c"
      case 49: // $bb48
        __label__ = 57; break; //@line 1374 "binascii.c"
      case 50: // $bb49
        var $186=HEAP[$in]; //@line 1377 "binascii.c"
        var $187=((($186) + 1)&4294967295); //@line 1377 "binascii.c"
        var $188=HEAP[$datalen]; //@line 1377 "binascii.c"
        var $189=((($187))|0)!=((($188))|0); //@line 1377 "binascii.c"
        if ($189) { __label__ = 51; break; } else { __label__ = 56; break; } //@line 1377 "binascii.c"
      case 51: // $bb50
        var $190=HEAP[$in]; //@line 1377 "binascii.c"
        var $191=((($190) + 1)&4294967295); //@line 1377 "binascii.c"
        var $192=HEAP[$data]; //@line 1377 "binascii.c"
        var $193=(($192+$191)&4294967295); //@line 1377 "binascii.c"
        var $194=HEAP[$193]; //@line 1377 "binascii.c"
        var $195=reSign(($194), 8, 0)!=10; //@line 1377 "binascii.c"
        if ($195) { __label__ = 52; break; } else { __label__ = 56; break; } //@line 1377 "binascii.c"
      case 52: // $bb51
        var $196=HEAP[$linelen]; //@line 1377 "binascii.c"
        var $197=((($196) + 1)&4294967295); //@line 1377 "binascii.c"
        var $198=((($197))>>>0) > 75; //@line 1377 "binascii.c"
        if ($198) { __label__ = 53; break; } else { __label__ = 56; break; } //@line 1377 "binascii.c"
      case 53: // $bb52
        HEAP[$linelen]=0; //@line 1380 "binascii.c"
        var $199=HEAP[$crlf]; //@line 1381 "binascii.c"
        var $200=((($199))|0)!=0; //@line 1381 "binascii.c"
        if ($200) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 1381 "binascii.c"
      case 54: // $bb53
        var $201=HEAP[$odatalen]; //@line 1382 "binascii.c"
        var $202=((($201) + 3)&4294967295); //@line 1382 "binascii.c"
        HEAP[$odatalen]=$202; //@line 1382 "binascii.c"
        __label__ = 56; break; //@line 1382 "binascii.c"
      case 55: // $bb54
        var $203=HEAP[$odatalen]; //@line 1384 "binascii.c"
        var $204=((($203) + 2)&4294967295); //@line 1384 "binascii.c"
        HEAP[$odatalen]=$204; //@line 1384 "binascii.c"
        __label__ = 56; break; //@line 1384 "binascii.c"
      case 56: // $bb55
        var $205=HEAP[$linelen]; //@line 1386 "binascii.c"
        var $206=((($205) + 1)&4294967295); //@line 1386 "binascii.c"
        HEAP[$linelen]=$206; //@line 1386 "binascii.c"
        var $207=HEAP[$odatalen]; //@line 1387 "binascii.c"
        var $208=((($207) + 1)&4294967295); //@line 1387 "binascii.c"
        HEAP[$odatalen]=$208; //@line 1387 "binascii.c"
        var $209=HEAP[$in]; //@line 1388 "binascii.c"
        var $210=((($209) + 1)&4294967295); //@line 1388 "binascii.c"
        HEAP[$in]=$210; //@line 1388 "binascii.c"
        __label__ = 57; break; //@line 1388 "binascii.c"
      case 57: // $bb56
        var $211=HEAP[$in]; //@line 1333 "binascii.c"
        var $212=HEAP[$datalen]; //@line 1333 "binascii.c"
        var $213=((($211))|0) < ((($212))|0); //@line 1333 "binascii.c"
        if ($213) { __label__ = 7; break; } else { __label__ = 58; break; } //@line 1333 "binascii.c"
      case 58: // $bb57
        var $214=HEAP[$odatalen]; //@line 1397 "binascii.c"
        var $215=_PyMem_Malloc($214); //@line 1397 "binascii.c"
        HEAP[$odata]=$215; //@line 1397 "binascii.c"
        var $216=HEAP[$odata]; //@line 1398 "binascii.c"
        var $217=($216)==0; //@line 1398 "binascii.c"
        if ($217) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1398 "binascii.c"
      case 59: // $bb58
        _PyBuffer_Release($pdata); //@line 1399 "binascii.c"
        var $218=_PyErr_NoMemory(); //@line 1400 "binascii.c"
        HEAP[$0]=0; //@line 1401 "binascii.c"
        __label__ = 117; break; //@line 1401 "binascii.c"
      case 60: // $bb59
        var $219=HEAP[$odatalen]; //@line 1403 "binascii.c"
        var $220=HEAP[$odata]; //@line 1403 "binascii.c"
        _llvm_memset_p0i8_i32($220, 0, $219, 1, 0); //@line 1403 "binascii.c"
        HEAP[$linelen]=0; //@line 1405 "binascii.c"
        HEAP[$out]=0; //@line 1405 "binascii.c"
        var $221=HEAP[$out]; //@line 1405 "binascii.c"
        HEAP[$in]=$221; //@line 1405 "binascii.c"
        __label__ = 113; break; //@line 1405 "binascii.c"
      case 61: // $bb60
        var $222=HEAP[$data]; //@line 1407 "binascii.c"
        var $223=HEAP[$in]; //@line 1407 "binascii.c"
        var $224=(($222+$223)&4294967295); //@line 1407 "binascii.c"
        var $225=HEAP[$224]; //@line 1407 "binascii.c"
        var $226=unSign(($225), 8, 0) > 126; //@line 1407 "binascii.c"
        if ($226) { __label__ = 83; break; } else { __label__ = 62; break; } //@line 1407 "binascii.c"
      case 62: // $bb61
        var $227=HEAP[$data]; //@line 1407 "binascii.c"
        var $228=HEAP[$in]; //@line 1407 "binascii.c"
        var $229=(($227+$228)&4294967295); //@line 1407 "binascii.c"
        var $230=HEAP[$229]; //@line 1407 "binascii.c"
        var $231=reSign(($230), 8, 0)==61; //@line 1407 "binascii.c"
        if ($231) { __label__ = 83; break; } else { __label__ = 63; break; } //@line 1407 "binascii.c"
      case 63: // $bb62
        var $232=HEAP[$header]; //@line 1407 "binascii.c"
        var $233=((($232))|0)==0; //@line 1407 "binascii.c"
        if ($233) { __label__ = 65; break; } else { __label__ = 64; break; } //@line 1407 "binascii.c"
      case 64: // $bb63
        var $234=HEAP[$data]; //@line 1407 "binascii.c"
        var $235=HEAP[$in]; //@line 1407 "binascii.c"
        var $236=(($234+$235)&4294967295); //@line 1407 "binascii.c"
        var $237=HEAP[$236]; //@line 1407 "binascii.c"
        var $238=reSign(($237), 8, 0)==95; //@line 1407 "binascii.c"
        if ($238) { __label__ = 83; break; } else { __label__ = 65; break; } //@line 1407 "binascii.c"
      case 65: // $bb64
        var $239=HEAP[$data]; //@line 1407 "binascii.c"
        var $240=HEAP[$in]; //@line 1407 "binascii.c"
        var $241=(($239+$240)&4294967295); //@line 1407 "binascii.c"
        var $242=HEAP[$241]; //@line 1407 "binascii.c"
        var $243=reSign(($242), 8, 0)!=46; //@line 1407 "binascii.c"
        if ($243) { __label__ = 70; break; } else { __label__ = 66; break; } //@line 1407 "binascii.c"
      case 66: // $bb65
        var $244=HEAP[$linelen]; //@line 1407 "binascii.c"
        var $245=((($244))|0)!=0; //@line 1407 "binascii.c"
        if ($245) { __label__ = 70; break; } else { __label__ = 67; break; } //@line 1407 "binascii.c"
      case 67: // $bb66
        var $246=HEAP[$in]; //@line 1407 "binascii.c"
        var $247=((($246) + 1)&4294967295); //@line 1407 "binascii.c"
        var $248=HEAP[$data]; //@line 1407 "binascii.c"
        var $249=(($248+$247)&4294967295); //@line 1407 "binascii.c"
        var $250=HEAP[$249]; //@line 1407 "binascii.c"
        var $251=reSign(($250), 8, 0)==10; //@line 1407 "binascii.c"
        if ($251) { __label__ = 83; break; } else { __label__ = 68; break; } //@line 1407 "binascii.c"
      case 68: // $bb67
        var $252=HEAP[$in]; //@line 1407 "binascii.c"
        var $253=((($252) + 1)&4294967295); //@line 1407 "binascii.c"
        var $254=HEAP[$data]; //@line 1407 "binascii.c"
        var $255=(($254+$253)&4294967295); //@line 1407 "binascii.c"
        var $256=HEAP[$255]; //@line 1407 "binascii.c"
        var $257=reSign(($256), 8, 0)==13; //@line 1407 "binascii.c"
        if ($257) { __label__ = 83; break; } else { __label__ = 69; break; } //@line 1407 "binascii.c"
      case 69: // $bb68
        var $258=HEAP[$in]; //@line 1407 "binascii.c"
        var $259=((($258) + 1)&4294967295); //@line 1407 "binascii.c"
        var $260=HEAP[$data]; //@line 1407 "binascii.c"
        var $261=(($260+$259)&4294967295); //@line 1407 "binascii.c"
        var $262=HEAP[$261]; //@line 1407 "binascii.c"
        var $263=reSign(($262), 8, 0)==0; //@line 1407 "binascii.c"
        if ($263) { __label__ = 83; break; } else { __label__ = 70; break; } //@line 1407 "binascii.c"
      case 70: // $bb69
        var $264=HEAP[$istext]; //@line 1407 "binascii.c"
        var $265=((($264))|0)!=0; //@line 1407 "binascii.c"
        if ($265) { __label__ = 73; break; } else { __label__ = 71; break; } //@line 1407 "binascii.c"
      case 71: // $bb70
        var $266=HEAP[$data]; //@line 1407 "binascii.c"
        var $267=HEAP[$in]; //@line 1407 "binascii.c"
        var $268=(($266+$267)&4294967295); //@line 1407 "binascii.c"
        var $269=HEAP[$268]; //@line 1407 "binascii.c"
        var $270=reSign(($269), 8, 0)==13; //@line 1407 "binascii.c"
        if ($270) { __label__ = 83; break; } else { __label__ = 72; break; } //@line 1407 "binascii.c"
      case 72: // $bb71
        var $271=HEAP[$data]; //@line 1407 "binascii.c"
        var $272=HEAP[$in]; //@line 1407 "binascii.c"
        var $273=(($271+$272)&4294967295); //@line 1407 "binascii.c"
        var $274=HEAP[$273]; //@line 1407 "binascii.c"
        var $275=reSign(($274), 8, 0)==10; //@line 1407 "binascii.c"
        if ($275) { __label__ = 83; break; } else { __label__ = 73; break; } //@line 1407 "binascii.c"
      case 73: // $bb72
        var $276=HEAP[$data]; //@line 1407 "binascii.c"
        var $277=HEAP[$in]; //@line 1407 "binascii.c"
        var $278=(($276+$277)&4294967295); //@line 1407 "binascii.c"
        var $279=HEAP[$278]; //@line 1407 "binascii.c"
        var $280=reSign(($279), 8, 0)==9; //@line 1407 "binascii.c"
        if ($280) { __label__ = 75; break; } else { __label__ = 74; break; } //@line 1407 "binascii.c"
      case 74: // $bb73
        var $281=HEAP[$data]; //@line 1407 "binascii.c"
        var $282=HEAP[$in]; //@line 1407 "binascii.c"
        var $283=(($281+$282)&4294967295); //@line 1407 "binascii.c"
        var $284=HEAP[$283]; //@line 1407 "binascii.c"
        var $285=reSign(($284), 8, 0)==32; //@line 1407 "binascii.c"
        if ($285) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 1407 "binascii.c"
      case 75: // $bb74
        var $286=HEAP[$in]; //@line 1407 "binascii.c"
        var $287=((($286) + 1)&4294967295); //@line 1407 "binascii.c"
        var $288=HEAP[$datalen]; //@line 1407 "binascii.c"
        var $289=((($287))|0)==((($288))|0); //@line 1407 "binascii.c"
        if ($289) { __label__ = 83; break; } else { __label__ = 76; break; } //@line 1407 "binascii.c"
      case 76: // $bb75
        var $290=HEAP[$data]; //@line 1407 "binascii.c"
        var $291=HEAP[$in]; //@line 1407 "binascii.c"
        var $292=(($290+$291)&4294967295); //@line 1407 "binascii.c"
        var $293=HEAP[$292]; //@line 1407 "binascii.c"
        var $294=unSign(($293), 8, 0) > 32; //@line 1407 "binascii.c"
        if ($294) { __label__ = 88; break; } else { __label__ = 77; break; } //@line 1407 "binascii.c"
      case 77: // $bb76
        var $295=HEAP[$data]; //@line 1407 "binascii.c"
        var $296=HEAP[$in]; //@line 1407 "binascii.c"
        var $297=(($295+$296)&4294967295); //@line 1407 "binascii.c"
        var $298=HEAP[$297]; //@line 1407 "binascii.c"
        var $299=reSign(($298), 8, 0)==13; //@line 1407 "binascii.c"
        if ($299) { __label__ = 88; break; } else { __label__ = 78; break; } //@line 1407 "binascii.c"
      case 78: // $bb77
        var $300=HEAP[$data]; //@line 1407 "binascii.c"
        var $301=HEAP[$in]; //@line 1407 "binascii.c"
        var $302=(($300+$301)&4294967295); //@line 1407 "binascii.c"
        var $303=HEAP[$302]; //@line 1407 "binascii.c"
        var $304=reSign(($303), 8, 0)==10; //@line 1407 "binascii.c"
        if ($304) { __label__ = 88; break; } else { __label__ = 79; break; } //@line 1407 "binascii.c"
      case 79: // $bb78
        var $305=HEAP[$quotetabs]; //@line 1407 "binascii.c"
        var $306=((($305))|0)!=0; //@line 1407 "binascii.c"
        if ($306) { __label__ = 83; break; } else { __label__ = 80; break; } //@line 1407 "binascii.c"
      case 80: // $bb79
        var $307=HEAP[$quotetabs]; //@line 1407 "binascii.c"
        var $308=((($307))|0)!=0; //@line 1407 "binascii.c"
        if ($308) { __label__ = 88; break; } else { __label__ = 81; break; } //@line 1407 "binascii.c"
      case 81: // $bb80
        var $309=HEAP[$data]; //@line 1407 "binascii.c"
        var $310=HEAP[$in]; //@line 1407 "binascii.c"
        var $311=(($309+$310)&4294967295); //@line 1407 "binascii.c"
        var $312=HEAP[$311]; //@line 1407 "binascii.c"
        var $313=reSign(($312), 8, 0)==9; //@line 1407 "binascii.c"
        if ($313) { __label__ = 88; break; } else { __label__ = 82; break; } //@line 1407 "binascii.c"
      case 82: // $bb81
        var $314=HEAP[$data]; //@line 1407 "binascii.c"
        var $315=HEAP[$in]; //@line 1407 "binascii.c"
        var $316=(($314+$315)&4294967295); //@line 1407 "binascii.c"
        var $317=HEAP[$316]; //@line 1407 "binascii.c"
        var $318=reSign(($317), 8, 0)!=32; //@line 1407 "binascii.c"
        if ($318) { __label__ = 83; break; } else { __label__ = 88; break; } //@line 1407 "binascii.c"
      case 83: // $bb82
        var $319=HEAP[$linelen]; //@line 1419 "binascii.c"
        var $320=((($319) + 3)&4294967295); //@line 1419 "binascii.c"
        var $321=((($320))>>>0) > 75; //@line 1419 "binascii.c"
        if ($321) { __label__ = 84; break; } else { __label__ = 87; break; } //@line 1419 "binascii.c"
      case 84: // $bb83
        var $322=HEAP[$odata]; //@line 1420 "binascii.c"
        var $323=HEAP[$out]; //@line 1420 "binascii.c"
        var $324=(($322+$323)&4294967295); //@line 1420 "binascii.c"
        HEAP[$324]=61; //@line 1420 "binascii.c"
        var $325=HEAP[$out]; //@line 1420 "binascii.c"
        var $326=((($325) + 1)&4294967295); //@line 1420 "binascii.c"
        HEAP[$out]=$326; //@line 1420 "binascii.c"
        var $327=HEAP[$crlf]; //@line 1421 "binascii.c"
        var $328=((($327))|0)!=0; //@line 1421 "binascii.c"
        if ($328) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 1421 "binascii.c"
      case 85: // $bb84
        var $329=HEAP[$odata]; //@line 1421 "binascii.c"
        var $330=HEAP[$out]; //@line 1421 "binascii.c"
        var $331=(($329+$330)&4294967295); //@line 1421 "binascii.c"
        HEAP[$331]=13; //@line 1421 "binascii.c"
        var $332=HEAP[$out]; //@line 1421 "binascii.c"
        var $333=((($332) + 1)&4294967295); //@line 1421 "binascii.c"
        HEAP[$out]=$333; //@line 1421 "binascii.c"
        __label__ = 86; break; //@line 1421 "binascii.c"
      case 86: // $bb85
        var $334=HEAP[$odata]; //@line 1422 "binascii.c"
        var $335=HEAP[$out]; //@line 1422 "binascii.c"
        var $336=(($334+$335)&4294967295); //@line 1422 "binascii.c"
        HEAP[$336]=10; //@line 1422 "binascii.c"
        var $337=HEAP[$out]; //@line 1422 "binascii.c"
        var $338=((($337) + 1)&4294967295); //@line 1422 "binascii.c"
        HEAP[$out]=$338; //@line 1422 "binascii.c"
        HEAP[$linelen]=0; //@line 1423 "binascii.c"
        __label__ = 87; break; //@line 1423 "binascii.c"
      case 87: // $bb86
        var $339=HEAP[$odata]; //@line 1425 "binascii.c"
        var $340=HEAP[$out]; //@line 1425 "binascii.c"
        var $341=(($339+$340)&4294967295); //@line 1425 "binascii.c"
        HEAP[$341]=61; //@line 1425 "binascii.c"
        var $342=HEAP[$out]; //@line 1425 "binascii.c"
        var $343=((($342) + 1)&4294967295); //@line 1425 "binascii.c"
        HEAP[$out]=$343; //@line 1425 "binascii.c"
        var $344=HEAP[$odata]; //@line 1426 "binascii.c"
        var $345=HEAP[$out]; //@line 1426 "binascii.c"
        var $346=(($344+$345)&4294967295); //@line 1426 "binascii.c"
        var $347=HEAP[$data]; //@line 1426 "binascii.c"
        var $348=HEAP[$in]; //@line 1426 "binascii.c"
        var $349=(($347+$348)&4294967295); //@line 1426 "binascii.c"
        var $350=HEAP[$349]; //@line 1426 "binascii.c"
        var $351=unSign(($350), 8, 0); //@line 1426 "binascii.c"
        var $352=((($351)) & 255); //@line 1426 "binascii.c"
        var $353=_to_hex($352, $346); //@line 1426 "binascii.c"
        var $354=HEAP[$out]; //@line 1427 "binascii.c"
        var $355=((($354) + 2)&4294967295); //@line 1427 "binascii.c"
        HEAP[$out]=$355; //@line 1427 "binascii.c"
        var $356=HEAP[$in]; //@line 1428 "binascii.c"
        var $357=((($356) + 1)&4294967295); //@line 1428 "binascii.c"
        HEAP[$in]=$357; //@line 1428 "binascii.c"
        var $358=HEAP[$linelen]; //@line 1429 "binascii.c"
        var $359=((($358) + 3)&4294967295); //@line 1429 "binascii.c"
        HEAP[$linelen]=$359; //@line 1429 "binascii.c"
        __label__ = 113; break; //@line 1429 "binascii.c"
      case 88: // $bb87
        var $360=HEAP[$istext]; //@line 1432 "binascii.c"
        var $361=((($360))|0)==0; //@line 1432 "binascii.c"
        if ($361) { __label__ = 103; break; } else { __label__ = 89; break; } //@line 1432 "binascii.c"
      case 89: // $bb88
        var $362=HEAP[$data]; //@line 1432 "binascii.c"
        var $363=HEAP[$in]; //@line 1432 "binascii.c"
        var $364=(($362+$363)&4294967295); //@line 1432 "binascii.c"
        var $365=HEAP[$364]; //@line 1432 "binascii.c"
        var $366=reSign(($365), 8, 0)==10; //@line 1432 "binascii.c"
        if ($366) { __label__ = 93; break; } else { __label__ = 90; break; } //@line 1432 "binascii.c"
      case 90: // $bb89
        var $367=HEAP[$in]; //@line 1432 "binascii.c"
        var $368=((($367) + 1)&4294967295); //@line 1432 "binascii.c"
        var $369=HEAP[$datalen]; //@line 1432 "binascii.c"
        var $370=((($368))|0) >= ((($369))|0); //@line 1432 "binascii.c"
        if ($370) { __label__ = 103; break; } else { __label__ = 91; break; } //@line 1432 "binascii.c"
      case 91: // $bb90
        var $371=HEAP[$data]; //@line 1432 "binascii.c"
        var $372=HEAP[$in]; //@line 1432 "binascii.c"
        var $373=(($371+$372)&4294967295); //@line 1432 "binascii.c"
        var $374=HEAP[$373]; //@line 1432 "binascii.c"
        var $375=reSign(($374), 8, 0)!=13; //@line 1432 "binascii.c"
        if ($375) { __label__ = 103; break; } else { __label__ = 92; break; } //@line 1432 "binascii.c"
      case 92: // $bb91
        var $376=HEAP[$in]; //@line 1432 "binascii.c"
        var $377=((($376) + 1)&4294967295); //@line 1432 "binascii.c"
        var $378=HEAP[$data]; //@line 1432 "binascii.c"
        var $379=(($378+$377)&4294967295); //@line 1432 "binascii.c"
        var $380=HEAP[$379]; //@line 1432 "binascii.c"
        var $381=reSign(($380), 8, 0)==10; //@line 1432 "binascii.c"
        if ($381) { __label__ = 93; break; } else { __label__ = 103; break; } //@line 1432 "binascii.c"
      case 93: // $bb92
        HEAP[$linelen]=0; //@line 1437 "binascii.c"
        var $382=HEAP[$out]; //@line 1439 "binascii.c"
        var $383=((($382))|0)!=0; //@line 1439 "binascii.c"
        if ($383) { __label__ = 94; break; } else { __label__ = 97; break; } //@line 1439 "binascii.c"
      case 94: // $bb93
        var $384=HEAP[$out]; //@line 1439 "binascii.c"
        var $385=((($384) - 1)&4294967295); //@line 1439 "binascii.c"
        var $386=HEAP[$odata]; //@line 1439 "binascii.c"
        var $387=(($386+$385)&4294967295); //@line 1439 "binascii.c"
        var $388=HEAP[$387]; //@line 1439 "binascii.c"
        var $389=reSign(($388), 8, 0)==32; //@line 1439 "binascii.c"
        if ($389) { __label__ = 96; break; } else { __label__ = 95; break; } //@line 1439 "binascii.c"
      case 95: // $bb94
        var $390=HEAP[$out]; //@line 1439 "binascii.c"
        var $391=((($390) - 1)&4294967295); //@line 1439 "binascii.c"
        var $392=HEAP[$odata]; //@line 1439 "binascii.c"
        var $393=(($392+$391)&4294967295); //@line 1439 "binascii.c"
        var $394=HEAP[$393]; //@line 1439 "binascii.c"
        var $395=reSign(($394), 8, 0)==9; //@line 1439 "binascii.c"
        if ($395) { __label__ = 96; break; } else { __label__ = 97; break; } //@line 1439 "binascii.c"
      case 96: // $bb95
        var $396=HEAP[$out]; //@line 1440 "binascii.c"
        var $397=((($396) - 1)&4294967295); //@line 1440 "binascii.c"
        var $398=HEAP[$odata]; //@line 1440 "binascii.c"
        var $399=(($398+$397)&4294967295); //@line 1440 "binascii.c"
        var $400=HEAP[$399]; //@line 1440 "binascii.c"
        HEAP[$ch]=$400; //@line 1440 "binascii.c"
        var $401=HEAP[$out]; //@line 1441 "binascii.c"
        var $402=((($401) - 1)&4294967295); //@line 1441 "binascii.c"
        var $403=HEAP[$odata]; //@line 1441 "binascii.c"
        var $404=(($403+$402)&4294967295); //@line 1441 "binascii.c"
        HEAP[$404]=61; //@line 1441 "binascii.c"
        var $405=HEAP[$odata]; //@line 1442 "binascii.c"
        var $406=HEAP[$out]; //@line 1442 "binascii.c"
        var $407=(($405+$406)&4294967295); //@line 1442 "binascii.c"
        var $408=HEAP[$ch]; //@line 1442 "binascii.c"
        var $409=unSign(($408), 8, 0); //@line 1442 "binascii.c"
        var $410=((($409)) & 255); //@line 1442 "binascii.c"
        var $411=_to_hex($410, $407); //@line 1442 "binascii.c"
        var $412=HEAP[$out]; //@line 1443 "binascii.c"
        var $413=((($412) + 2)&4294967295); //@line 1443 "binascii.c"
        HEAP[$out]=$413; //@line 1443 "binascii.c"
        __label__ = 97; break; //@line 1443 "binascii.c"
      case 97: // $bb96
        var $414=HEAP[$crlf]; //@line 1446 "binascii.c"
        var $415=((($414))|0)!=0; //@line 1446 "binascii.c"
        if ($415) { __label__ = 98; break; } else { __label__ = 99; break; } //@line 1446 "binascii.c"
      case 98: // $bb97
        var $416=HEAP[$odata]; //@line 1446 "binascii.c"
        var $417=HEAP[$out]; //@line 1446 "binascii.c"
        var $418=(($416+$417)&4294967295); //@line 1446 "binascii.c"
        HEAP[$418]=13; //@line 1446 "binascii.c"
        var $419=HEAP[$out]; //@line 1446 "binascii.c"
        var $420=((($419) + 1)&4294967295); //@line 1446 "binascii.c"
        HEAP[$out]=$420; //@line 1446 "binascii.c"
        __label__ = 99; break; //@line 1446 "binascii.c"
      case 99: // $bb98
        var $421=HEAP[$odata]; //@line 1447 "binascii.c"
        var $422=HEAP[$out]; //@line 1447 "binascii.c"
        var $423=(($421+$422)&4294967295); //@line 1447 "binascii.c"
        HEAP[$423]=10; //@line 1447 "binascii.c"
        var $424=HEAP[$out]; //@line 1447 "binascii.c"
        var $425=((($424) + 1)&4294967295); //@line 1447 "binascii.c"
        HEAP[$out]=$425; //@line 1447 "binascii.c"
        var $426=HEAP[$data]; //@line 1448 "binascii.c"
        var $427=HEAP[$in]; //@line 1448 "binascii.c"
        var $428=(($426+$427)&4294967295); //@line 1448 "binascii.c"
        var $429=HEAP[$428]; //@line 1448 "binascii.c"
        var $430=reSign(($429), 8, 0)==13; //@line 1448 "binascii.c"
        if ($430) { __label__ = 100; break; } else { __label__ = 101; break; } //@line 1448 "binascii.c"
      case 100: // $bb99
        var $431=HEAP[$in]; //@line 1449 "binascii.c"
        var $432=((($431) + 2)&4294967295); //@line 1449 "binascii.c"
        HEAP[$in]=$432; //@line 1449 "binascii.c"
        __label__ = 102; break; //@line 1449 "binascii.c"
      case 101: // $bb100
        var $433=HEAP[$in]; //@line 1451 "binascii.c"
        var $434=((($433) + 1)&4294967295); //@line 1451 "binascii.c"
        HEAP[$in]=$434; //@line 1451 "binascii.c"
        __label__ = 102; break; //@line 1451 "binascii.c"
      case 102: // $bb101
        __label__ = 113; break; //@line 1451 "binascii.c"
      case 103: // $bb102
        var $435=HEAP[$in]; //@line 1454 "binascii.c"
        var $436=((($435) + 1)&4294967295); //@line 1454 "binascii.c"
        var $437=HEAP[$datalen]; //@line 1454 "binascii.c"
        var $438=((($436))|0)!=((($437))|0); //@line 1454 "binascii.c"
        if ($438) { __label__ = 104; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 104: // $bb103
        var $439=HEAP[$in]; //@line 1454 "binascii.c"
        var $440=((($439) + 1)&4294967295); //@line 1454 "binascii.c"
        var $441=HEAP[$data]; //@line 1454 "binascii.c"
        var $442=(($441+$440)&4294967295); //@line 1454 "binascii.c"
        var $443=HEAP[$442]; //@line 1454 "binascii.c"
        var $444=reSign(($443), 8, 0)!=10; //@line 1454 "binascii.c"
        if ($444) { __label__ = 105; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 105: // $bb104
        var $445=HEAP[$linelen]; //@line 1454 "binascii.c"
        var $446=((($445) + 1)&4294967295); //@line 1454 "binascii.c"
        var $447=((($446))>>>0) > 75; //@line 1454 "binascii.c"
        if ($447) { __label__ = 106; break; } else { __label__ = 109; break; } //@line 1454 "binascii.c"
      case 106: // $bb105
        var $448=HEAP[$odata]; //@line 1457 "binascii.c"
        var $449=HEAP[$out]; //@line 1457 "binascii.c"
        var $450=(($448+$449)&4294967295); //@line 1457 "binascii.c"
        HEAP[$450]=61; //@line 1457 "binascii.c"
        var $451=HEAP[$out]; //@line 1457 "binascii.c"
        var $452=((($451) + 1)&4294967295); //@line 1457 "binascii.c"
        HEAP[$out]=$452; //@line 1457 "binascii.c"
        var $453=HEAP[$crlf]; //@line 1458 "binascii.c"
        var $454=((($453))|0)!=0; //@line 1458 "binascii.c"
        if ($454) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 1458 "binascii.c"
      case 107: // $bb106
        var $455=HEAP[$odata]; //@line 1458 "binascii.c"
        var $456=HEAP[$out]; //@line 1458 "binascii.c"
        var $457=(($455+$456)&4294967295); //@line 1458 "binascii.c"
        HEAP[$457]=13; //@line 1458 "binascii.c"
        var $458=HEAP[$out]; //@line 1458 "binascii.c"
        var $459=((($458) + 1)&4294967295); //@line 1458 "binascii.c"
        HEAP[$out]=$459; //@line 1458 "binascii.c"
        __label__ = 108; break; //@line 1458 "binascii.c"
      case 108: // $bb107
        var $460=HEAP[$odata]; //@line 1459 "binascii.c"
        var $461=HEAP[$out]; //@line 1459 "binascii.c"
        var $462=(($460+$461)&4294967295); //@line 1459 "binascii.c"
        HEAP[$462]=10; //@line 1459 "binascii.c"
        var $463=HEAP[$out]; //@line 1459 "binascii.c"
        var $464=((($463) + 1)&4294967295); //@line 1459 "binascii.c"
        HEAP[$out]=$464; //@line 1459 "binascii.c"
        HEAP[$linelen]=0; //@line 1460 "binascii.c"
        __label__ = 109; break; //@line 1460 "binascii.c"
      case 109: // $bb108
        var $465=HEAP[$linelen]; //@line 1462 "binascii.c"
        var $466=((($465) + 1)&4294967295); //@line 1462 "binascii.c"
        HEAP[$linelen]=$466; //@line 1462 "binascii.c"
        var $467=HEAP[$header]; //@line 1463 "binascii.c"
        var $468=((($467))|0)==0; //@line 1463 "binascii.c"
        if ($468) { __label__ = 112; break; } else { __label__ = 110; break; } //@line 1463 "binascii.c"
      case 110: // $bb109
        var $469=HEAP[$data]; //@line 1463 "binascii.c"
        var $470=HEAP[$in]; //@line 1463 "binascii.c"
        var $471=(($469+$470)&4294967295); //@line 1463 "binascii.c"
        var $472=HEAP[$471]; //@line 1463 "binascii.c"
        var $473=reSign(($472), 8, 0)!=32; //@line 1463 "binascii.c"
        if ($473) { __label__ = 112; break; } else { __label__ = 111; break; } //@line 1463 "binascii.c"
      case 111: // $bb110
        var $474=HEAP[$odata]; //@line 1464 "binascii.c"
        var $475=HEAP[$out]; //@line 1464 "binascii.c"
        var $476=(($474+$475)&4294967295); //@line 1464 "binascii.c"
        HEAP[$476]=95; //@line 1464 "binascii.c"
        var $477=HEAP[$out]; //@line 1464 "binascii.c"
        var $478=((($477) + 1)&4294967295); //@line 1464 "binascii.c"
        HEAP[$out]=$478; //@line 1464 "binascii.c"
        var $479=HEAP[$in]; //@line 1465 "binascii.c"
        var $480=((($479) + 1)&4294967295); //@line 1465 "binascii.c"
        HEAP[$in]=$480; //@line 1465 "binascii.c"
        __label__ = 113; break; //@line 1465 "binascii.c"
      case 112: // $bb111
        var $481=HEAP[$data]; //@line 1468 "binascii.c"
        var $482=HEAP[$in]; //@line 1468 "binascii.c"
        var $483=(($481+$482)&4294967295); //@line 1468 "binascii.c"
        var $484=HEAP[$483]; //@line 1468 "binascii.c"
        var $485=HEAP[$odata]; //@line 1468 "binascii.c"
        var $486=HEAP[$out]; //@line 1468 "binascii.c"
        var $487=(($485+$486)&4294967295); //@line 1468 "binascii.c"
        HEAP[$487]=$484; //@line 1468 "binascii.c"
        var $488=HEAP[$out]; //@line 1468 "binascii.c"
        var $489=((($488) + 1)&4294967295); //@line 1468 "binascii.c"
        HEAP[$out]=$489; //@line 1468 "binascii.c"
        var $490=HEAP[$in]; //@line 1468 "binascii.c"
        var $491=((($490) + 1)&4294967295); //@line 1468 "binascii.c"
        HEAP[$in]=$491; //@line 1468 "binascii.c"
        __label__ = 113; break; //@line 1468 "binascii.c"
      case 113: // $bb112
        var $492=HEAP[$in]; //@line 1406 "binascii.c"
        var $493=HEAP[$datalen]; //@line 1406 "binascii.c"
        var $494=((($492))|0) < ((($493))|0); //@line 1406 "binascii.c"
        if ($494) { __label__ = 61; break; } else { __label__ = 114; break; } //@line 1406 "binascii.c"
      case 114: // $bb113
        var $495=HEAP[$odata]; //@line 1473 "binascii.c"
        var $496=HEAP[$out]; //@line 1473 "binascii.c"
        var $497=_PyString_FromStringAndSize($495, $496); //@line 1473 "binascii.c"
        HEAP[$rv]=$497; //@line 1473 "binascii.c"
        var $498=HEAP[$rv]; //@line 1473 "binascii.c"
        var $499=($498)==0; //@line 1473 "binascii.c"
        if ($499) { __label__ = 115; break; } else { __label__ = 116; break; } //@line 1473 "binascii.c"
      case 115: // $bb114
        _PyBuffer_Release($pdata); //@line 1474 "binascii.c"
        var $500=HEAP[$odata]; //@line 1475 "binascii.c"
        _PyMem_Free($500); //@line 1475 "binascii.c"
        HEAP[$0]=0; //@line 1476 "binascii.c"
        __label__ = 117; break; //@line 1476 "binascii.c"
      case 116: // $bb115
        _PyBuffer_Release($pdata); //@line 1478 "binascii.c"
        var $501=HEAP[$odata]; //@line 1479 "binascii.c"
        _PyMem_Free($501); //@line 1479 "binascii.c"
        var $502=HEAP[$rv]; //@line 1480 "binascii.c"
        HEAP[$0]=$502; //@line 1480 "binascii.c"
        __label__ = 117; break; //@line 1480 "binascii.c"
      case 117: // $bb116
        var $503=HEAP[$0]; //@line 1319 "binascii.c"
        HEAP[$retval]=$503; //@line 1319 "binascii.c"
        __label__ = 118; break; //@line 1319 "binascii.c"
      case 118: // $return
        var $retval117=HEAP[$retval]; //@line 1319 "binascii.c"
        STACKTOP = __stackBase__;
        return $retval117; //@line 1319 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initbinascii() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $x=__stackBase__+8;
        var $_alloca_point_=0;
        var $0=_Py_InitModule4(((__str53)&4294967295), ((_binascii_module_methods)&4294967295), 0, 0, 1013); //@line 1518 "binascii.c"
        HEAP[$m]=$0; //@line 1518 "binascii.c"
        var $1=HEAP[$m]; //@line 1519 "binascii.c"
        var $2=($1)==0; //@line 1519 "binascii.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1519 "binascii.c"
      case 1: // $bb
        var $3=HEAP[$m]; //@line 1522 "binascii.c"
        var $4=_PyModule_GetDict($3); //@line 1522 "binascii.c"
        HEAP[$d]=$4; //@line 1522 "binascii.c"
        var $5=_PyString_FromString(((_doc_binascii)&4294967295)); //@line 1523 "binascii.c"
        HEAP[$x]=$5; //@line 1523 "binascii.c"
        var $6=HEAP[$d]; //@line 1524 "binascii.c"
        var $7=HEAP[$x]; //@line 1524 "binascii.c"
        var $8=_PyDict_SetItemString($6, ((__str54)&4294967295), $7); //@line 1524 "binascii.c"
        var $9=HEAP[$x]; //@line 1525 "binascii.c"
        var $10=($9)!=0; //@line 1525 "binascii.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 1525 "binascii.c"
      case 2: // $bb1
        var $11=HEAP[$x]; //@line 1525 "binascii.c"
        var $12=(($11)&4294967295); //@line 1525 "binascii.c"
        var $13=HEAP[$12]; //@line 1525 "binascii.c"
        var $14=((($13) - 1)&4294967295); //@line 1525 "binascii.c"
        var $15=HEAP[$x]; //@line 1525 "binascii.c"
        var $16=(($15)&4294967295); //@line 1525 "binascii.c"
        HEAP[$16]=$14; //@line 1525 "binascii.c"
        var $17=HEAP[$x]; //@line 1525 "binascii.c"
        var $18=(($17)&4294967295); //@line 1525 "binascii.c"
        var $19=HEAP[$18]; //@line 1525 "binascii.c"
        var $20=((($19))|0)==0; //@line 1525 "binascii.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1525 "binascii.c"
      case 3: // $bb2
        var $21=HEAP[$x]; //@line 1525 "binascii.c"
        var $22=(($21+4)&4294967295); //@line 1525 "binascii.c"
        var $23=HEAP[$22]; //@line 1525 "binascii.c"
        var $24=(($23+24)&4294967295); //@line 1525 "binascii.c"
        var $25=HEAP[$24]; //@line 1525 "binascii.c"
        var $26=HEAP[$x]; //@line 1525 "binascii.c"
        FUNCTION_TABLE[$25]($26); //@line 1525 "binascii.c"
        __label__ = 4; break; //@line 1525 "binascii.c"
      case 4: // $bb3
        var $27=_PyErr_NewException(((__str55)&4294967295), 0, 0); //@line 1527 "binascii.c"
        HEAP[_Error]=$27; //@line 1527 "binascii.c"
        var $28=HEAP[_Error]; //@line 1528 "binascii.c"
        var $29=HEAP[$d]; //@line 1528 "binascii.c"
        var $30=_PyDict_SetItemString($29, ((__str56)&4294967295), $28); //@line 1528 "binascii.c"
        var $31=_PyErr_NewException(((__str57)&4294967295), 0, 0); //@line 1529 "binascii.c"
        HEAP[_Incomplete]=$31; //@line 1529 "binascii.c"
        var $32=HEAP[_Incomplete]; //@line 1530 "binascii.c"
        var $33=HEAP[$d]; //@line 1530 "binascii.c"
        var $34=_PyDict_SetItemString($33, ((__str58)&4294967295), $32); //@line 1530 "binascii.c"
        __label__ = 5; break; //@line 1530 "binascii.c"
      case 5: // $bb4
        __label__ = 6; break; //@line 1520 "binascii.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 1520 "binascii.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbinascii"] = _initbinascii;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_binascii_a2b_uu,0,_binascii_b2a_uu,0,_binascii_a2b_base64,0,_binascii_b2a_base64,0,_binascii_a2b_hqx,0,_binascii_b2a_hqx,0,_binascii_hexlify,0,_binascii_unhexlify,0,_binascii_rlecode_hqx,0,_binascii_rledecode_hqx,0,_binascii_crc_hqx,0,_binascii_crc32,0,_binascii_a2b_qp,0,_binascii_b2a_qp,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_table_a2b_hqx=allocate([125,125,125,125,125,125,125,125,125,125,126,125,125,126,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,0,1,2,3,4,5,6,7,8,9,10,11,12,125,125,13,14,15,16,17,18,19,125,20,21,127,125,125,125,125,125,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,125,37,38,39,40,41,42,43,125,44,45,46,47,125,125,125,125,48,49,50,51,52,53,54,125,55,56,57,58,59,60,125,125,61,62,63,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125] /* }}}}}}}}}}~}}~}}}}}} */, "i8", ALLOC_NORMAL);
_table_b2a_hqx=allocate([33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,51,52,53,54,56,57,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,88,89,90,91,96,97,98,99,100,101,102,104,105,106,107,108,109,112,113,114,0] /* !\22#$%&'()_+,-01234 */, "i8", ALLOC_NORMAL);
_table_a2b_base64=allocate([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,62,255,255,255,63,52,53,54,55,56,57,58,59,60,61,255,255,255,0,255,255,255,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,255,255,255,255,255,255,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,255,255,255,255,255] /* \FF\FF\FF\FF\FF\FF\F */, "i8", ALLOC_NORMAL);
_table_b2a_base64=allocate([65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47,0] /* ABCDEFGHIJKLMNOPQRST */, "i8", ALLOC_NORMAL);
_crctab_hqx=allocate([0, 0, 4129, 0, 8258, 0, 12387, 0, 16516, 0, 20645, 0, 24774, 0, 28903, 0, -32504, 0, -28375, 0, -24246, 0, -20117, 0, -15988, 0, -11859, 0, -7730, 0, -3601, 0, 4657, 0, 528, 0, 12915, 0, 8786, 0, 21173, 0, 17044, 0, 29431, 0, 25302, 0, -27847, 0, -31976, 0, -19589, 0, -23718, 0, -11331, 0, -15460, 0, -3073, 0, -7202, 0, 9314, 0, 13379, 0, 1056, 0, 5121, 0, 25830, 0, 29895, 0, 17572, 0, 21637, 0, -23190, 0, -19125, 0, -31448, 0, -27383, 0, -6674, 0, -2609, 0, -14932, 0, -10867, 0, 13907, 0, 9842, 0, 5649, 0, 1584, 0, 30423, 0, 26358, 0, 22165, 0, 18100, 0, -18597, 0, -22662, 0, -26855, 0, -30920, 0, -2081, 0, -6146, 0, -10339, 0, -14404, 0, 18628, 0, 22757, 0, 26758, 0, 30887, 0, 2112, 0, 6241, 0, 10242, 0, 14371, 0, -13876, 0, -9747, 0, -5746, 0, -1617, 0, -30392, 0, -26263, 0, -22262, 0, -18133, 0, 23285, 0, 19156, 0, 31415, 0, 27286, 0, 6769, 0, 2640, 0, 14899, 0, 10770, 0, -9219, 0, -13348, 0, -1089, 0, -5218, 0, -25735, 0, -29864, 0, -17605, 0, -21734, 0, 27814, 0, 31879, 0, 19684, 0, 23749, 0, 11298, 0, 15363, 0, 3168, 0, 7233, 0, -4690, 0, -625, 0, -12820, 0, -8755, 0, -21206, 0, -17141, 0, -29336, 0, -25271, 0, 32407, 0, 28342, 0, 24277, 0, 20212, 0, 15891, 0, 11826, 0, 7761, 0, 3696, 0, -97, 0, -4162, 0, -8227, 0, -12292, 0, -16613, 0, -20678, 0, -24743, 0, -28808, 0, -28280, 0, -32343, 0, -20022, 0, -24085, 0, -12020, 0, -16083, 0, -3762, 0, -7825, 0, 4224, 0, 161, 0, 12482, 0, 8419, 0, 20484, 0, 16421, 0, 28742, 0, 24679, 0, -31815, 0, -27752, 0, -23557, 0, -19494, 0, -15555, 0, -11492, 0, -7297, 0, -3234, 0, 689, 0, 4752, 0, 8947, 0, 13010, 0, 16949, 0, 21012, 0, 25207, 0, 29270, 0, -18966, 0, -23093, 0, -27224, 0, -31351, 0, -2706, 0, -6833, 0, -10964, 0, -15091, 0, 13538, 0, 9411, 0, 5280, 0, 1153, 0, 29798, 0, 25671, 0, 21540, 0, 17413, 0, -22565, 0, -18438, 0, -30823, 0, -26696, 0, -6305, 0, -2178, 0, -14563, 0, -10436, 0, 9939, 0, 14066, 0, 1681, 0, 5808, 0, 26199, 0, 30326, 0, 17941, 0, 22068, 0, -9908, 0, -13971, 0, -1778, 0, -5841, 0, -26168, 0, -30231, 0, -18038, 0, -22101, 0, 22596, 0, 18533, 0, 30726, 0, 26663, 0, 6336, 0, 2273, 0, 14466, 0, 10403, 0, -13443, 0, -9380, 0, -5313, 0, -1250, 0, -29703, 0, -25640, 0, -21573, 0, -17510, 0, 19061, 0, 23124, 0, 27191, 0, 31254, 0, 2801, 0, 6864, 0, 10931, 0, 14994, 0, -722, 0, -4849, 0, -8852, 0, -12979, 0, -16982, 0, -21109, 0, -25112, 0, -29239, 0, 31782, 0, 27655, 0, 23652, 0, 19525, 0, 15522, 0, 11395, 0, 7392, 0, 3265, 0, -4321, 0, -194, 0, -12451, 0, -8324, 0, -20581, 0, -16454, 0, -28711, 0, -24584, 0, 28183, 0, 32310, 0, 20053, 0, 24180, 0, 11923, 0, 16050, 0, 3793, 0, 7920, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_doc_a2b_uu=allocate([40,97,115,99,105,105,41,32,45,62,32,98,105,110,46,32,68,101,99,111,100,101,32,97,32,108,105,110,101,32,111,102,32,117,117,101,110,99,111,100,101,100,32,100,97,116,97,0] /* (ascii) -> bin. Deco */, "i8", ALLOC_NORMAL);
__str=allocate([115,42,58,97,50,98,95,117,117,0] /* s_:a2b_uu\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([97,115,99,105,105,95,108,101,110,32,62,61,32,48,0] /* ascii_len >= 0\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,98,105,110,97,115,99,105,105,46,99,0] /* ../cpython/Modules/b */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8323=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,117,117,0] /* binascii_a2b_uu\00 */, "i8", ALLOC_NORMAL);
_Error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([73,108,108,101,103,97,108,32,99,104,97,114,0] /* Illegal char\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([84,114,97,105,108,105,110,103,32,103,97,114,98,97,103,101,0] /* Trailing garbage\00 */, "i8", ALLOC_NORMAL);
_doc_b2a_uu=allocate([40,98,105,110,41,32,45,62,32,97,115,99,105,105,46,32,85,117,101,110,99,111,100,101,32,108,105,110,101,32,111,102,32,100,97,116,97,0] /* (bin) -> ascii. Uuen */, "i8", ALLOC_NORMAL);
__str5=allocate([115,42,58,98,50,97,95,117,117,0] /* s_:b2a_uu\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([65,116,32,109,111,115,116,32,52,53,32,98,121,116,101,115,32,97,116,32,111,110,99,101,0] /* At most 45 bytes at  */, "i8", ALLOC_NORMAL);
_doc_a2b_base64=allocate([40,97,115,99,105,105,41,32,45,62,32,98,105,110,46,32,68,101,99,111,100,101,32,97,32,108,105,110,101,32,111,102,32,98,97,115,101,54,52,32,100,97,116,97,0] /* (ascii) -> bin. Deco */, "i8", ALLOC_NORMAL);
__str7=allocate([115,42,58,97,50,98,95,98,97,115,101,54,52,0] /* s_:a2b_base64\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8505=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,98,97,115,101,54,52,0] /* binascii_a2b_base64\ */, "i8", ALLOC_NORMAL);
__str8=allocate([73,110,99,111,114,114,101,99,116,32,112,97,100,100,105,110,103,0] /* Incorrect padding\00 */, "i8", ALLOC_NORMAL);
__str9=allocate(1, "i8", ALLOC_NORMAL);
_doc_b2a_base64=allocate([40,98,105,110,41,32,45,62,32,97,115,99,105,105,46,32,66,97,115,101,54,52,45,99,111,100,101,32,108,105,110,101,32,111,102,32,100,97,116,97,0] /* (bin) -> ascii. Base */, "i8", ALLOC_NORMAL);
__str10=allocate([115,42,58,98,50,97,95,98,97,115,101,54,52,0] /* s_:b2a_base64\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([98,105,110,95,108,101,110,32,62,61,32,48,0] /* bin_len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8609=allocate([98,105,110,97,115,99,105,105,95,98,50,97,95,98,97,115,101,54,52,0] /* binascii_b2a_base64\ */, "i8", ALLOC_NORMAL);
__str12=allocate([84,111,111,32,109,117,99,104,32,100,97,116,97,32,102,111,114,32,98,97,115,101,54,52,32,108,105,110,101,0] /* Too much data for ba */, "i8", ALLOC_NORMAL);
_doc_a2b_hqx=allocate([97,115,99,105,105,32,45,62,32,98,105,110,44,32,100,111,110,101,46,32,68,101,99,111,100,101,32,46,104,113,120,32,99,111,100,105,110,103,0] /* ascii -> bin, done.  */, "i8", ALLOC_NORMAL);
__str13=allocate([115,42,58,97,50,98,95,104,113,120,0] /* s_:a2b_hqx\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([108,101,110,32,62,61,32,48,0] /* len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8689=allocate([98,105,110,97,115,99,105,105,95,97,50,98,95,104,113,120,0] /* binascii_a2b_hqx\00 */, "i8", ALLOC_NORMAL);
_Incomplete=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str15=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,109,112,108,101,116,101,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,0] /* String has incomplet */, "i8", ALLOC_NORMAL);
__str16=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
_doc_rlecode_hqx=allocate([66,105,110,104,101,120,32,82,76,69,45,99,111,100,101,32,98,105,110,97,114,121,32,100,97,116,97,0] /* Binhex RLE-code bina */, "i8", ALLOC_NORMAL);
__str17=allocate([115,42,58,114,108,101,99,111,100,101,95,104,113,120,0] /* s_:rlecode_hqx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8803=allocate([98,105,110,97,115,99,105,105,95,114,108,101,99,111,100,101,95,104,113,120,0] /* binascii_rlecode_hqx */, "i8", ALLOC_NORMAL);
_doc_b2a_hqx=allocate([69,110,99,111,100,101,32,46,104,113,120,32,100,97,116,97,0] /* Encode .hqx data\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([115,42,58,98,50,97,95,104,113,120,0] /* s_:b2a_hqx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8876=allocate([98,105,110,97,115,99,105,105,95,98,50,97,95,104,113,120,0] /* binascii_b2a_hqx\00 */, "i8", ALLOC_NORMAL);
_doc_rledecode_hqx=allocate([68,101,99,111,100,101,32,104,101,120,98,105,110,32,82,76,69,45,99,111,100,101,100,32,115,116,114,105,110,103,0] /* Decode hexbin RLE-co */, "i8", ALLOC_NORMAL);
__str19=allocate([115,42,58,114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* s_:rledecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([105,110,95,108,101,110,32,62,61,32,48,0] /* in_len >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8949=allocate([98,105,110,97,115,99,105,105,95,114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* binascii_rledecode_h */, "i8", ALLOC_NORMAL);
__str21=allocate([79,114,112,104,97,110,101,100,32,82,76,69,32,99,111,100,101,32,97,116,32,115,116,97,114,116,0] /* Orphaned RLE code at */, "i8", ALLOC_NORMAL);
_doc_crc_hqx=allocate([40,100,97,116,97,44,32,111,108,100,99,114,99,41,32,45,62,32,110,101,119,99,114,99,46,32,67,111,109,112,117,116,101,32,104,113,120,32,67,82,67,32,105,110,99,114,101,109,101,110,116,97,108,108,121,0] /* (data, oldcrc) -> ne */, "i8", ALLOC_NORMAL);
__str22=allocate([115,42,105,58,99,114,99,95,104,113,120,0] /* s_i:crc_hqx\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
_doc_crc32=allocate([40,100,97,116,97,44,32,111,108,100,99,114,99,32,61,32,48,41,32,45,62,32,110,101,119,99,114,99,46,32,67,111,109,112,117,116,101,32,67,82,67,45,51,50,32,105,110,99,114,101,109,101,110,116,97,108,108,121,0] /* (data, oldcrc = 0) - */, "i8", ALLOC_NORMAL);
_crc_32_tab=allocate([0, 0, 0, 0, 1996959894, 0, 0, 0, -301047508, 0, 0, 0, -1727442502, 0, 0, 0, 124634137, 0, 0, 0, 1886057615, 0, 0, 0, -379345611, 0, 0, 0, -1637575261, 0, 0, 0, 249268274, 0, 0, 0, 2044508324, 0, 0, 0, -522852066, 0, 0, 0, -1747789432, 0, 0, 0, 162941995, 0, 0, 0, 2125561021, 0, 0, 0, -407360249, 0, 0, 0, -1866523247, 0, 0, 0, 498536548, 0, 0, 0, 1789927666, 0, 0, 0, -205950648, 0, 0, 0, -2067906082, 0, 0, 0, 450548861, 0, 0, 0, 1843258603, 0, 0, 0, -187386543, 0, 0, 0, -2083289657, 0, 0, 0, 325883990, 0, 0, 0, 1684777152, 0, 0, 0, -43845254, 0, 0, 0, -1973040660, 0, 0, 0, 335633487, 0, 0, 0, 1661365465, 0, 0, 0, -99664541, 0, 0, 0, -1928851979, 0, 0, 0, 997073096, 0, 0, 0, 1281953886, 0, 0, 0, -715111964, 0, 0, 0, -1570279054, 0, 0, 0, 1006888145, 0, 0, 0, 1258607687, 0, 0, 0, -770865667, 0, 0, 0, -1526024853, 0, 0, 0, 901097722, 0, 0, 0, 1119000684, 0, 0, 0, -608450090, 0, 0, 0, -1396901568, 0, 0, 0, 853044451, 0, 0, 0, 1172266101, 0, 0, 0, -589951537, 0, 0, 0, -1412350631, 0, 0, 0, 651767980, 0, 0, 0, 1373503546, 0, 0, 0, -925412992, 0, 0, 0, -1076862698, 0, 0, 0, 565507253, 0, 0, 0, 1454621731, 0, 0, 0, -809855591, 0, 0, 0, -1195530993, 0, 0, 0, 671266974, 0, 0, 0, 1594198024, 0, 0, 0, -972236366, 0, 0, 0, -1324619484, 0, 0, 0, 795835527, 0, 0, 0, 1483230225, 0, 0, 0, -1050600021, 0, 0, 0, -1234817731, 0, 0, 0, 1994146192, 0, 0, 0, 31158534, 0, 0, 0, -1731059524, 0, 0, 0, -271249366, 0, 0, 0, 1907459465, 0, 0, 0, 112637215, 0, 0, 0, -1614814043, 0, 0, 0, -390540237, 0, 0, 0, 2013776290, 0, 0, 0, 251722036, 0, 0, 0, -1777751922, 0, 0, 0, -519137256, 0, 0, 0, 2137656763, 0, 0, 0, 141376813, 0, 0, 0, -1855689577, 0, 0, 0, -429695999, 0, 0, 0, 1802195444, 0, 0, 0, 476864866, 0, 0, 0, -2056965928, 0, 0, 0, -228458418, 0, 0, 0, 1812370925, 0, 0, 0, 453092731, 0, 0, 0, -2113342271, 0, 0, 0, -183516073, 0, 0, 0, 1706088902, 0, 0, 0, 314042704, 0, 0, 0, -1950435094, 0, 0, 0, -54949764, 0, 0, 0, 1658658271, 0, 0, 0, 366619977, 0, 0, 0, -1932296973, 0, 0, 0, -69972891, 0, 0, 0, 1303535960, 0, 0, 0, 984961486, 0, 0, 0, -1547960204, 0, 0, 0, -725929758, 0, 0, 0, 1256170817, 0, 0, 0, 1037604311, 0, 0, 0, -1529756563, 0, 0, 0, -740887301, 0, 0, 0, 1131014506, 0, 0, 0, 879679996, 0, 0, 0, -1385723834, 0, 0, 0, -631195440, 0, 0, 0, 1141124467, 0, 0, 0, 855842277, 0, 0, 0, -1442165665, 0, 0, 0, -586318647, 0, 0, 0, 1342533948, 0, 0, 0, 654459306, 0, 0, 0, -1106571248, 0, 0, 0, -921952122, 0, 0, 0, 1466479909, 0, 0, 0, 544179635, 0, 0, 0, -1184443383, 0, 0, 0, -832445281, 0, 0, 0, 1591671054, 0, 0, 0, 702138776, 0, 0, 0, -1328506846, 0, 0, 0, -942167884, 0, 0, 0, 1504918807, 0, 0, 0, 783551873, 0, 0, 0, -1212326853, 0, 0, 0, -1061524307, 0, 0, 0, -306674912, 0, 0, 0, -1698712650, 0, 0, 0, 62317068, 0, 0, 0, 1957810842, 0, 0, 0, -355121351, 0, 0, 0, -1647151185, 0, 0, 0, 81470997, 0, 0, 0, 1943803523, 0, 0, 0, -480048366, 0, 0, 0, -1805370492, 0, 0, 0, 225274430, 0, 0, 0, 2053790376, 0, 0, 0, -468791541, 0, 0, 0, -1828061283, 0, 0, 0, 167816743, 0, 0, 0, 2097651377, 0, 0, 0, -267414716, 0, 0, 0, -2029476910, 0, 0, 0, 503444072, 0, 0, 0, 1762050814, 0, 0, 0, -144550051, 0, 0, 0, -2140837941, 0, 0, 0, 426522225, 0, 0, 0, 1852507879, 0, 0, 0, -19653770, 0, 0, 0, -1982649376, 0, 0, 0, 282753626, 0, 0, 0, 1742555852, 0, 0, 0, -105259153, 0, 0, 0, -1900089351, 0, 0, 0, 397917763, 0, 0, 0, 1622183637, 0, 0, 0, -690576408, 0, 0, 0, -1580100738, 0, 0, 0, 953729732, 0, 0, 0, 1340076626, 0, 0, 0, -776247311, 0, 0, 0, -1497606297, 0, 0, 0, 1068828381, 0, 0, 0, 1219638859, 0, 0, 0, -670225446, 0, 0, 0, -1358292148, 0, 0, 0, 906185462, 0, 0, 0, 1090812512, 0, 0, 0, -547295293, 0, 0, 0, -1469587627, 0, 0, 0, 829329135, 0, 0, 0, 1181335161, 0, 0, 0, -882789492, 0, 0, 0, -1134132454, 0, 0, 0, 628085408, 0, 0, 0, 1382605366, 0, 0, 0, -871598187, 0, 0, 0, -1156888829, 0, 0, 0, 570562233, 0, 0, 0, 1426400815, 0, 0, 0, -977650754, 0, 0, 0, -1296233688, 0, 0, 0, 733239954, 0, 0, 0, 1555261956, 0, 0, 0, -1026031705, 0, 0, 0, -1244606671, 0, 0, 0, 752459403, 0, 0, 0, 1541320221, 0, 0, 0, -1687895376, 0, 0, 0, -328994266, 0, 0, 0, 1969922972, 0, 0, 0, 40735498, 0, 0, 0, -1677130071, 0, 0, 0, -351390145, 0, 0, 0, 1913087877, 0, 0, 0, 83908371, 0, 0, 0, -1782625662, 0, 0, 0, -491226604, 0, 0, 0, 2075208622, 0, 0, 0, 213261112, 0, 0, 0, -1831694693, 0, 0, 0, -438977011, 0, 0, 0, 2094854071, 0, 0, 0, 198958881, 0, 0, 0, -2032938284, 0, 0, 0, -237706686, 0, 0, 0, 1759359992, 0, 0, 0, 534414190, 0, 0, 0, -2118248755, 0, 0, 0, -155638181, 0, 0, 0, 1873836001, 0, 0, 0, 414664567, 0, 0, 0, -2012718362, 0, 0, 0, -15766928, 0, 0, 0, 1711684554, 0, 0, 0, 285281116, 0, 0, 0, -1889165569, 0, 0, 0, -127750551, 0, 0, 0, 1634467795, 0, 0, 0, 376229701, 0, 0, 0, -1609899400, 0, 0, 0, -686959890, 0, 0, 0, 1308918612, 0, 0, 0, 956543938, 0, 0, 0, -1486412191, 0, 0, 0, -799009033, 0, 0, 0, 1231636301, 0, 0, 0, 1047427035, 0, 0, 0, -1362007478, 0, 0, 0, -640263460, 0, 0, 0, 1088359270, 0, 0, 0, 936918000, 0, 0, 0, -1447252397, 0, 0, 0, -558129467, 0, 0, 0, 1202900863, 0, 0, 0, 817233897, 0, 0, 0, -1111625188, 0, 0, 0, -893730166, 0, 0, 0, 1404277552, 0, 0, 0, 615818150, 0, 0, 0, -1160759803, 0, 0, 0, -841546093, 0, 0, 0, 1423857449, 0, 0, 0, 601450431, 0, 0, 0, -1285129682, 0, 0, 0, -1000256840, 0, 0, 0, 1567103746, 0, 0, 0, 711928724, 0, 0, 0, -1274298825, 0, 0, 0, -1022587231, 0, 0, 0, 1510334235, 0, 0, 0, 755167117, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str24=allocate([115,42,124,73,58,99,114,99,51,50,0] /* s_|I:crc32\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([115,42,58,98,50,97,95,104,101,120,0] /* s_:b2a_hex\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([97,114,103,108,101,110,32,62,61,32,48,0] /* arglen >= 0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9264=allocate([98,105,110,97,115,99,105,105,95,104,101,120,108,105,102,121,0] /* binascii_hexlify\00 */, "i8", ALLOC_NORMAL);
_doc_hexlify=allocate([98,50,97,95,104,101,120,40,100,97,116,97,41,32,45,62,32,115,59,32,72,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,98,105,110,97,114,121,32,100,97,116,97,46,10,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,105,115,32,97,108,115,111,32,97,118,97,105,108,97,98,108,101,32,97,115,32,34,104,101,120,108,105,102,121,40,41,34,46,0] /* b2a_hex(data) -> s;  */, "i8", ALLOC_NORMAL);
__str27=allocate([115,42,58,97,50,98,95,104,101,120,0] /* s_:a2b_hex\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9339=allocate([98,105,110,97,115,99,105,105,95,117,110,104,101,120,108,105,102,121,0] /* binascii_unhexlify\0 */, "i8", ALLOC_NORMAL);
__str28=allocate([79,100,100,45,108,101,110,103,116,104,32,115,116,114,105,110,103,0] /* Odd-length string\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([78,111,110,45,104,101,120,97,100,101,99,105,109,97,108,32,100,105,103,105,116,32,102,111,117,110,100,0] /* Non-hexadecimal digi */, "i8", ALLOC_NORMAL);
_doc_unhexlify=allocate([97,50,98,95,104,101,120,40,104,101,120,115,116,114,41,32,45,62,32,115,59,32,66,105,110,97,114,121,32,100,97,116,97,32,111,102,32,104,101,120,97,100,101,99,105,109,97,108,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,10,10,104,101,120,115,116,114,32,109,117,115,116,32,99,111,110,116,97,105,110,32,97,110,32,101,118,101,110,32,110,117,109,98,101,114,32,111,102,32,104,101,120,32,100,105,103,105,116,115,32,40,117,112,112,101,114,32,111,114,32,108,111,119,101,114,32,99,97,115,101,41,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,105,115,32,97,108,115,111,32,97,118,97,105,108,97,98,108,101,32,97,115,32,34,117,110,104,101,120,108,105,102,121,40,41,34,0] /* a2b_hex(hexstr) -> s */, "i8", ALLOC_NORMAL);
_table_hex=allocate([-1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 15, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_doc_a2b_qp=allocate([68,101,99,111,100,101,32,97,32,115,116,114,105,110,103,32,111,102,32,113,112,45,101,110,99,111,100,101,100,32,100,97,116,97,0] /* Decode a string of q */, "i8", ALLOC_NORMAL);
__str30=allocate([115,42,124,105,0] /* s_|i\00 */, "i8", ALLOC_NORMAL);
_kwlist_9405=allocate(12, "i8*", ALLOC_NORMAL);
__str31=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([104,101,97,100,101,114,0] /* header\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0] /* 0123456789ABCDEF\00 */, "i8", ALLOC_NORMAL);
_doc_b2a_qp=allocate([98,50,97,95,113,112,40,100,97,116,97,44,32,113,117,111,116,101,116,97,98,115,61,48,44,32,105,115,116,101,120,116,61,49,44,32,104,101,97,100,101,114,61,48,41,32,45,62,32,115,59,32,10,32,69,110,99,111,100,101,32,97,32,115,116,114,105,110,103,32,117,115,105,110,103,32,113,117,111,116,101,100,45,112,114,105,110,116,97,98,108,101,32,101,110,99,111,100,105,110,103,46,32,10,10,79,110,32,101,110,99,111,100,105,110,103,44,32,119,104,101,110,32,105,115,116,101,120,116,32,105,115,32,115,101,116,44,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,32,101,110,99,111,100,101,100,44,32,97,110,100,32,119,104,105,116,101,32,10,115,112,97,99,101,32,97,116,32,101,110,100,32,111,102,32,108,105,110,101,115,32,105,115,46,32,32,87,104,101,110,32,105,115,116,101,120,116,32,105,115,32,110,111,116,32,115,101,116,44,32,92,114,32,97,110,100,32,92,110,32,40,67,82,47,76,70,41,32,97,114,101,32,10,98,111,116,104,32,101,110,99,111,100,101,100,46,32,32,87,104,101,110,32,113,117,111,116,101,116,97,98,115,32,105,115,32,115,101,116,44,32,115,112,97,99,101,32,97,110,100,32,116,97,98,115,32,97,114,101,32,101,110,99,111,100,101,100,46,0] /* b2a_qp(data, quoteta */, "i8", ALLOC_NORMAL);
__str34=allocate([115,42,124,105,105,105,0] /* s_|iii\00 */, "i8", ALLOC_NORMAL);
_kwlist_9526=allocate(20, "i8*", ALLOC_NORMAL);
__str35=allocate([113,117,111,116,101,116,97,98,115,0] /* quotetabs\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([105,115,116,101,120,116,0] /* istext\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([97,50,98,95,117,117,0] /* a2b_uu\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([98,50,97,95,117,117,0] /* b2a_uu\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([97,50,98,95,98,97,115,101,54,52,0] /* a2b_base64\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([98,50,97,95,98,97,115,101,54,52,0] /* b2a_base64\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([97,50,98,95,104,113,120,0] /* a2b_hqx\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([98,50,97,95,104,113,120,0] /* b2a_hqx\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([98,50,97,95,104,101,120,0] /* b2a_hex\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([97,50,98,95,104,101,120,0] /* a2b_hex\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([104,101,120,108,105,102,121,0] /* hexlify\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([117,110,104,101,120,108,105,102,121,0] /* unhexlify\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([114,108,101,99,111,100,101,95,104,113,120,0] /* rlecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([114,108,101,100,101,99,111,100,101,95,104,113,120,0] /* rledecode_hqx\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([99,114,99,95,104,113,120,0] /* crc_hqx\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([99,114,99,51,50,0] /* crc32\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([97,50,98,95,113,112,0] /* a2b_qp\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([98,50,97,95,113,112,0] /* b2a_qp\00 */, "i8", ALLOC_NORMAL);
_binascii_module_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_doc_binascii=allocate([67,111,110,118,101,114,115,105,111,110,32,98,101,116,119,101,101,110,32,98,105,110,97,114,121,32,100,97,116,97,32,97,110,100,32,65,83,67,73,73,0] /* Conversion between b */, "i8", ALLOC_NORMAL);
__str53=allocate([98,105,110,97,115,99,105,105,0] /* binascii\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([95,95,100,111,99,95,95,0] /* __doc__\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([98,105,110,97,115,99,105,105,46,69,114,114,111,114,0] /* binascii.Error\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([98,105,110,97,115,99,105,105,46,73,110,99,111,109,112,108,101,116,101,0] /* binascii.Incomplete\ */, "i8", ALLOC_NORMAL);
__str58=allocate([73,110,99,111,109,112,108,101,116,101,0] /* Incomplete\00 */, "i8", ALLOC_NORMAL);
HEAP[_kwlist_9405]=((__str31)&4294967295);
HEAP[_kwlist_9405+4]=((__str32)&4294967295);
HEAP[_kwlist_9526]=((__str31)&4294967295);
HEAP[_kwlist_9526+4]=((__str35)&4294967295);
HEAP[_kwlist_9526+8]=((__str36)&4294967295);
HEAP[_kwlist_9526+12]=((__str32)&4294967295);
HEAP[_binascii_module_methods]=((__str37)&4294967295);
HEAP[_binascii_module_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_binascii_module_methods+12]=((_doc_a2b_uu)&4294967295);
HEAP[_binascii_module_methods+16]=((__str38)&4294967295);
HEAP[_binascii_module_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_binascii_module_methods+28]=((_doc_b2a_uu)&4294967295);
HEAP[_binascii_module_methods+32]=((__str39)&4294967295);
HEAP[_binascii_module_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_binascii_module_methods+44]=((_doc_a2b_base64)&4294967295);
HEAP[_binascii_module_methods+48]=((__str40)&4294967295);
HEAP[_binascii_module_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_binascii_module_methods+60]=((_doc_b2a_base64)&4294967295);
HEAP[_binascii_module_methods+64]=((__str41)&4294967295);
HEAP[_binascii_module_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_binascii_module_methods+76]=((_doc_a2b_hqx)&4294967295);
HEAP[_binascii_module_methods+80]=((__str42)&4294967295);
HEAP[_binascii_module_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_binascii_module_methods+92]=((_doc_b2a_hqx)&4294967295);
HEAP[_binascii_module_methods+96]=((__str43)&4294967295);
HEAP[_binascii_module_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_binascii_module_methods+108]=((_doc_hexlify)&4294967295);
HEAP[_binascii_module_methods+112]=((__str44)&4294967295);
HEAP[_binascii_module_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_binascii_module_methods+124]=((_doc_unhexlify)&4294967295);
HEAP[_binascii_module_methods+128]=((__str45)&4294967295);
HEAP[_binascii_module_methods+132]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_binascii_module_methods+140]=((_doc_hexlify)&4294967295);
HEAP[_binascii_module_methods+144]=((__str46)&4294967295);
HEAP[_binascii_module_methods+148]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_binascii_module_methods+156]=((_doc_unhexlify)&4294967295);
HEAP[_binascii_module_methods+160]=((__str47)&4294967295);
HEAP[_binascii_module_methods+164]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_binascii_module_methods+172]=((_doc_rlecode_hqx)&4294967295);
HEAP[_binascii_module_methods+176]=((__str48)&4294967295);
HEAP[_binascii_module_methods+180]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_binascii_module_methods+188]=((_doc_rledecode_hqx)&4294967295);
HEAP[_binascii_module_methods+192]=((__str49)&4294967295);
HEAP[_binascii_module_methods+196]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_binascii_module_methods+204]=((_doc_crc_hqx)&4294967295);
HEAP[_binascii_module_methods+208]=((__str50)&4294967295);
HEAP[_binascii_module_methods+212]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_binascii_module_methods+220]=((_doc_crc32)&4294967295);
HEAP[_binascii_module_methods+224]=((__str51)&4294967295);
HEAP[_binascii_module_methods+228]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_binascii_module_methods+236]=((_doc_a2b_qp)&4294967295);
HEAP[_binascii_module_methods+240]=((__str52)&4294967295);
HEAP[_binascii_module_methods+244]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_binascii_module_methods+252]=((_doc_b2a_qp)&4294967295);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

