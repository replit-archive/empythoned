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
  
var $2___SIZE = 196; // %2
  
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
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_RandomObject___SIZE = 2508; // %struct.RandomObject
  var $struct_RandomObject___FLATTENER = [0,4,8,2504];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _mag01_8316;
var __Py_NoneStruct;
var __str;
var __str1;
var __str2;
var ___PRETTY_FUNCTION___8478;
var _PyExc_TypeError;
var __str3;
var _PyExc_ValueError;
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
var __str17;
var __str18;
var __str19;
var _random_methods;
var _random_doc;
var __str20;
var _Random_Type;
var _module_doc;
var __str21;
var __str22;






































  function _genrand_int32($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $y=__stackBase__+12;
        var $mt=__stackBase__+16;
        var $kk=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 102 "_randommodule.c"
        var $2=(($1+8)&4294967295); //@line 102 "_randommodule.c"
        var $3=(($2)&4294967295); //@line 102 "_randommodule.c"
        HEAP[$mt]=$3; //@line 102 "_randommodule.c"
        var $4=HEAP[$self_addr]; //@line 103 "_randommodule.c"
        var $5=(($4+2504)&4294967295); //@line 103 "_randommodule.c"
        var $6=HEAP[$5]; //@line 103 "_randommodule.c"
        var $7=((($6))|0) > 623; //@line 103 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 103 "_randommodule.c"
      case 1: // $bb
        HEAP[$kk]=0; //@line 106 "_randommodule.c"
        __label__ = 3; break; //@line 106 "_randommodule.c"
      case 2: // $bb1
        var $8=HEAP[$mt]; //@line 107 "_randommodule.c"
        var $9=HEAP[$kk]; //@line 107 "_randommodule.c"
        var $10=(($8+4*$9)&4294967295); //@line 107 "_randommodule.c"
        var $11=HEAP[$10]; //@line 107 "_randommodule.c"
        var $12=($11) & -2147483648; //@line 107 "_randommodule.c"
        var $13=HEAP[$kk]; //@line 107 "_randommodule.c"
        var $14=((($13) + 1)&4294967295); //@line 107 "_randommodule.c"
        var $15=HEAP[$mt]; //@line 107 "_randommodule.c"
        var $16=(($15+4*$14)&4294967295); //@line 107 "_randommodule.c"
        var $17=HEAP[$16]; //@line 107 "_randommodule.c"
        var $18=($17) & 2147483647; //@line 107 "_randommodule.c"
        var $19=($12) | ($18); //@line 107 "_randommodule.c"
        HEAP[$y]=$19; //@line 107 "_randommodule.c"
        var $20=HEAP[$kk]; //@line 108 "_randommodule.c"
        var $21=((($20) + 397)&4294967295); //@line 108 "_randommodule.c"
        var $22=HEAP[$mt]; //@line 108 "_randommodule.c"
        var $23=(($22+4*$21)&4294967295); //@line 108 "_randommodule.c"
        var $24=HEAP[$23]; //@line 108 "_randommodule.c"
        var $25=HEAP[$y]; //@line 108 "_randommodule.c"
        var $26=((($25))>>>0) >>> 1; //@line 108 "_randommodule.c"
        var $27=($24) ^ ($26); //@line 108 "_randommodule.c"
        var $28=HEAP[$y]; //@line 108 "_randommodule.c"
        var $29=($28) & 1; //@line 108 "_randommodule.c"
        var $30=((_mag01_8316+$29*4)&4294967295); //@line 108 "_randommodule.c"
        var $31=HEAP[$30]; //@line 108 "_randommodule.c"
        var $32=($27) ^ ($31); //@line 108 "_randommodule.c"
        var $33=HEAP[$mt]; //@line 108 "_randommodule.c"
        var $34=HEAP[$kk]; //@line 108 "_randommodule.c"
        var $35=(($33+4*$34)&4294967295); //@line 108 "_randommodule.c"
        HEAP[$35]=$32; //@line 108 "_randommodule.c"
        var $36=HEAP[$kk]; //@line 106 "_randommodule.c"
        var $37=((($36) + 1)&4294967295); //@line 106 "_randommodule.c"
        HEAP[$kk]=$37; //@line 106 "_randommodule.c"
        __label__ = 3; break; //@line 106 "_randommodule.c"
      case 3: // $bb2
        var $38=HEAP[$kk]; //@line 106 "_randommodule.c"
        var $39=((($38))|0) <= 226; //@line 106 "_randommodule.c"
        if ($39) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 106 "_randommodule.c"
      case 4: // $bb3
        __label__ = 6; break; //@line 106 "_randommodule.c"
      case 5: // $bb4
        var $40=HEAP[$mt]; //@line 111 "_randommodule.c"
        var $41=HEAP[$kk]; //@line 111 "_randommodule.c"
        var $42=(($40+4*$41)&4294967295); //@line 111 "_randommodule.c"
        var $43=HEAP[$42]; //@line 111 "_randommodule.c"
        var $44=($43) & -2147483648; //@line 111 "_randommodule.c"
        var $45=HEAP[$kk]; //@line 111 "_randommodule.c"
        var $46=((($45) + 1)&4294967295); //@line 111 "_randommodule.c"
        var $47=HEAP[$mt]; //@line 111 "_randommodule.c"
        var $48=(($47+4*$46)&4294967295); //@line 111 "_randommodule.c"
        var $49=HEAP[$48]; //@line 111 "_randommodule.c"
        var $50=($49) & 2147483647; //@line 111 "_randommodule.c"
        var $51=($44) | ($50); //@line 111 "_randommodule.c"
        HEAP[$y]=$51; //@line 111 "_randommodule.c"
        var $52=HEAP[$kk]; //@line 112 "_randommodule.c"
        var $53=((($52) + -227)&4294967295); //@line 112 "_randommodule.c"
        var $54=HEAP[$mt]; //@line 112 "_randommodule.c"
        var $55=(($54+4*$53)&4294967295); //@line 112 "_randommodule.c"
        var $56=HEAP[$55]; //@line 112 "_randommodule.c"
        var $57=HEAP[$y]; //@line 112 "_randommodule.c"
        var $58=((($57))>>>0) >>> 1; //@line 112 "_randommodule.c"
        var $59=($56) ^ ($58); //@line 112 "_randommodule.c"
        var $60=HEAP[$y]; //@line 112 "_randommodule.c"
        var $61=($60) & 1; //@line 112 "_randommodule.c"
        var $62=((_mag01_8316+$61*4)&4294967295); //@line 112 "_randommodule.c"
        var $63=HEAP[$62]; //@line 112 "_randommodule.c"
        var $64=($59) ^ ($63); //@line 112 "_randommodule.c"
        var $65=HEAP[$mt]; //@line 112 "_randommodule.c"
        var $66=HEAP[$kk]; //@line 112 "_randommodule.c"
        var $67=(($65+4*$66)&4294967295); //@line 112 "_randommodule.c"
        HEAP[$67]=$64; //@line 112 "_randommodule.c"
        var $68=HEAP[$kk]; //@line 110 "_randommodule.c"
        var $69=((($68) + 1)&4294967295); //@line 110 "_randommodule.c"
        HEAP[$kk]=$69; //@line 110 "_randommodule.c"
        __label__ = 6; break; //@line 110 "_randommodule.c"
      case 6: // $bb5
        var $70=HEAP[$kk]; //@line 110 "_randommodule.c"
        var $71=((($70))|0) <= 622; //@line 110 "_randommodule.c"
        if ($71) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 110 "_randommodule.c"
      case 7: // $bb6
        var $72=HEAP[$mt]; //@line 114 "_randommodule.c"
        var $73=(($72+2492)&4294967295); //@line 114 "_randommodule.c"
        var $74=HEAP[$73]; //@line 114 "_randommodule.c"
        var $75=($74) & -2147483648; //@line 114 "_randommodule.c"
        var $76=HEAP[$mt]; //@line 114 "_randommodule.c"
        var $77=(($76)&4294967295); //@line 114 "_randommodule.c"
        var $78=HEAP[$77]; //@line 114 "_randommodule.c"
        var $79=($78) & 2147483647; //@line 114 "_randommodule.c"
        var $80=($75) | ($79); //@line 114 "_randommodule.c"
        HEAP[$y]=$80; //@line 114 "_randommodule.c"
        var $81=HEAP[$mt]; //@line 115 "_randommodule.c"
        var $82=(($81+1584)&4294967295); //@line 115 "_randommodule.c"
        var $83=HEAP[$82]; //@line 115 "_randommodule.c"
        var $84=HEAP[$y]; //@line 115 "_randommodule.c"
        var $85=((($84))>>>0) >>> 1; //@line 115 "_randommodule.c"
        var $86=($83) ^ ($85); //@line 115 "_randommodule.c"
        var $87=HEAP[$y]; //@line 115 "_randommodule.c"
        var $88=($87) & 1; //@line 115 "_randommodule.c"
        var $89=((_mag01_8316+$88*4)&4294967295); //@line 115 "_randommodule.c"
        var $90=HEAP[$89]; //@line 115 "_randommodule.c"
        var $91=($86) ^ ($90); //@line 115 "_randommodule.c"
        var $92=HEAP[$mt]; //@line 115 "_randommodule.c"
        var $93=(($92+2492)&4294967295); //@line 115 "_randommodule.c"
        HEAP[$93]=$91; //@line 115 "_randommodule.c"
        var $94=HEAP[$self_addr]; //@line 117 "_randommodule.c"
        var $95=(($94+2504)&4294967295); //@line 117 "_randommodule.c"
        HEAP[$95]=0; //@line 117 "_randommodule.c"
        __label__ = 8; break; //@line 117 "_randommodule.c"
      case 8: // $bb7
        var $96=HEAP[$self_addr]; //@line 120 "_randommodule.c"
        var $97=(($96+2504)&4294967295); //@line 120 "_randommodule.c"
        var $98=HEAP[$97]; //@line 120 "_randommodule.c"
        var $99=HEAP[$mt]; //@line 120 "_randommodule.c"
        var $100=(($99+4*$98)&4294967295); //@line 120 "_randommodule.c"
        var $101=HEAP[$100]; //@line 120 "_randommodule.c"
        HEAP[$y]=$101; //@line 120 "_randommodule.c"
        var $102=((($98) + 1)&4294967295); //@line 120 "_randommodule.c"
        var $103=HEAP[$self_addr]; //@line 120 "_randommodule.c"
        var $104=(($103+2504)&4294967295); //@line 120 "_randommodule.c"
        HEAP[$104]=$102; //@line 120 "_randommodule.c"
        var $105=HEAP[$y]; //@line 121 "_randommodule.c"
        var $106=((($105))>>>0) >>> 11; //@line 121 "_randommodule.c"
        var $107=HEAP[$y]; //@line 121 "_randommodule.c"
        var $108=($106) ^ ($107); //@line 121 "_randommodule.c"
        HEAP[$y]=$108; //@line 121 "_randommodule.c"
        var $109=HEAP[$y]; //@line 122 "_randommodule.c"
        var $110=($109) << 7; //@line 122 "_randommodule.c"
        var $111=($110) & -1658038656; //@line 122 "_randommodule.c"
        var $112=HEAP[$y]; //@line 122 "_randommodule.c"
        var $113=($111) ^ ($112); //@line 122 "_randommodule.c"
        HEAP[$y]=$113; //@line 122 "_randommodule.c"
        var $114=HEAP[$y]; //@line 123 "_randommodule.c"
        var $115=($114) << 15; //@line 123 "_randommodule.c"
        var $116=($115) & -272236544; //@line 123 "_randommodule.c"
        var $117=HEAP[$y]; //@line 123 "_randommodule.c"
        var $118=($116) ^ ($117); //@line 123 "_randommodule.c"
        HEAP[$y]=$118; //@line 123 "_randommodule.c"
        var $119=HEAP[$y]; //@line 124 "_randommodule.c"
        var $120=((($119))>>>0) >>> 18; //@line 124 "_randommodule.c"
        var $121=HEAP[$y]; //@line 124 "_randommodule.c"
        var $122=($120) ^ ($121); //@line 124 "_randommodule.c"
        HEAP[$y]=$122; //@line 124 "_randommodule.c"
        var $123=HEAP[$y]; //@line 125 "_randommodule.c"
        HEAP[$0]=$123; //@line 125 "_randommodule.c"
        var $124=HEAP[$0]; //@line 125 "_randommodule.c"
        HEAP[$retval]=$124; //@line 125 "_randommodule.c"
        __label__ = 9; break; //@line 125 "_randommodule.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 125 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 125 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_random($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $a=__stackBase__+12;
        var $b=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 140 "_randommodule.c"
        var $2=_genrand_int32($1); //@line 140 "_randommodule.c"
        var $3=((($2))>>>0) >>> 5; //@line 140 "_randommodule.c"
        HEAP[$a]=$3; //@line 140 "_randommodule.c"
        var $4=HEAP[$self_addr]; //@line 140 "_randommodule.c"
        var $5=_genrand_int32($4); //@line 140 "_randommodule.c"
        var $6=((($5))>>>0) >>> 6; //@line 140 "_randommodule.c"
        HEAP[$b]=$6; //@line 140 "_randommodule.c"
        var $7=HEAP[$a]; //@line 141 "_randommodule.c"
        var $8=((($7))>>>0); //@line 141 "_randommodule.c"
        var $9=($8) * 67108864; //@line 141 "_randommodule.c"
        var $10=HEAP[$b]; //@line 141 "_randommodule.c"
        var $11=((($10))>>>0); //@line 141 "_randommodule.c"
        var $12=($9) + ($11); //@line 141 "_randommodule.c"
        var $13=($12) * 1.1102230246251565e-16; //@line 141 "_randommodule.c"
        var $14=_PyFloat_FromDouble($13); //@line 141 "_randommodule.c"
        HEAP[$0]=$14; //@line 141 "_randommodule.c"
        var $15=HEAP[$0]; //@line 141 "_randommodule.c"
        HEAP[$retval]=$15; //@line 141 "_randommodule.c"
        __label__ = 1; break; //@line 141 "_randommodule.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 141 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 141 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_genrand($self, $s) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $s_addr=__stackBase__+4;
        var $mti=__stackBase__+8;
        var $mt=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$s_addr]=$s;
        var $0=HEAP[$self_addr]; //@line 151 "_randommodule.c"
        var $1=(($0+8)&4294967295); //@line 151 "_randommodule.c"
        var $2=(($1)&4294967295); //@line 151 "_randommodule.c"
        HEAP[$mt]=$2; //@line 151 "_randommodule.c"
        var $3=HEAP[$mt]; //@line 152 "_randommodule.c"
        var $4=(($3)&4294967295); //@line 152 "_randommodule.c"
        var $5=HEAP[$s_addr]; //@line 152 "_randommodule.c"
        HEAP[$4]=$5; //@line 152 "_randommodule.c"
        HEAP[$mti]=1; //@line 153 "_randommodule.c"
        __label__ = 2; break; //@line 153 "_randommodule.c"
      case 1: // $bb
        var $6=HEAP[$mti]; //@line 154 "_randommodule.c"
        var $7=((($6) - 1)&4294967295); //@line 154 "_randommodule.c"
        var $8=HEAP[$mt]; //@line 154 "_randommodule.c"
        var $9=(($8+4*$7)&4294967295); //@line 154 "_randommodule.c"
        var $10=HEAP[$9]; //@line 154 "_randommodule.c"
        var $11=HEAP[$mti]; //@line 154 "_randommodule.c"
        var $12=((($11) - 1)&4294967295); //@line 154 "_randommodule.c"
        var $13=HEAP[$mt]; //@line 154 "_randommodule.c"
        var $14=(($13+4*$12)&4294967295); //@line 154 "_randommodule.c"
        var $15=HEAP[$14]; //@line 154 "_randommodule.c"
        var $16=((($15))>>>0) >>> 30; //@line 154 "_randommodule.c"
        var $17=($10) ^ ($16); //@line 154 "_randommodule.c"
        var $18=((($17) * 1812433253)&4294967295); //@line 154 "_randommodule.c"
        var $19=HEAP[$mti]; //@line 154 "_randommodule.c"
        var $20=((($18) + ($19))&4294967295); //@line 154 "_randommodule.c"
        var $21=HEAP[$mt]; //@line 154 "_randommodule.c"
        var $22=HEAP[$mti]; //@line 154 "_randommodule.c"
        var $23=(($21+4*$22)&4294967295); //@line 154 "_randommodule.c"
        HEAP[$23]=$20; //@line 154 "_randommodule.c"
        var $24=HEAP[$mt]; //@line 160 "_randommodule.c"
        var $25=HEAP[$mti]; //@line 160 "_randommodule.c"
        var $26=(($24+4*$25)&4294967295); //@line 160 "_randommodule.c"
        var $27=HEAP[$26]; //@line 160 "_randommodule.c"
        var $28=HEAP[$mt]; //@line 160 "_randommodule.c"
        var $29=HEAP[$mti]; //@line 160 "_randommodule.c"
        var $30=(($28+4*$29)&4294967295); //@line 160 "_randommodule.c"
        HEAP[$30]=$27; //@line 160 "_randommodule.c"
        var $31=HEAP[$mti]; //@line 153 "_randommodule.c"
        var $32=((($31) + 1)&4294967295); //@line 153 "_randommodule.c"
        HEAP[$mti]=$32; //@line 153 "_randommodule.c"
        __label__ = 2; break; //@line 153 "_randommodule.c"
      case 2: // $bb1
        var $33=HEAP[$mti]; //@line 153 "_randommodule.c"
        var $34=((($33))|0) <= 623; //@line 153 "_randommodule.c"
        if ($34) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 153 "_randommodule.c"
      case 3: // $bb2
        var $35=HEAP[$self_addr]; //@line 163 "_randommodule.c"
        var $36=(($35+2504)&4294967295); //@line 163 "_randommodule.c"
        var $37=HEAP[$mti]; //@line 163 "_randommodule.c"
        HEAP[$36]=$37; //@line 163 "_randommodule.c"
        __label__ = 4; break; //@line 164 "_randommodule.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 164 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_by_array($self, $init_key, $key_length) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $init_key_addr=__stackBase__+4;
        var $key_length_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $i=__stackBase__+20;
        var $j=__stackBase__+24;
        var $k=__stackBase__+28;
        var $mt=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$init_key_addr]=$init_key;
        HEAP[$key_length_addr]=$key_length;
        var $1=HEAP[$self_addr]; //@line 176 "_randommodule.c"
        var $2=(($1+8)&4294967295); //@line 176 "_randommodule.c"
        var $3=(($2)&4294967295); //@line 176 "_randommodule.c"
        HEAP[$mt]=$3; //@line 176 "_randommodule.c"
        var $4=HEAP[$self_addr]; //@line 177 "_randommodule.c"
        _init_genrand($4, 19650218); //@line 177 "_randommodule.c"
        HEAP[$i]=1; //@line 178 "_randommodule.c"
        HEAP[$j]=0; //@line 178 "_randommodule.c"
        var $5=HEAP[$key_length_addr]; //@line 179 "_randommodule.c"
        var $6=((($5))>>>0) >= 624; //@line 179 "_randommodule.c"
        var $max=($6) ? ($5) : 624; //@line 179 "_randommodule.c"
        HEAP[$k]=$max; //@line 179 "_randommodule.c"
        __label__ = 6; break; //@line 179 "_randommodule.c"
      case 1: // $bb
        var $7=HEAP[$mt]; //@line 181 "_randommodule.c"
        var $8=HEAP[$i]; //@line 181 "_randommodule.c"
        var $9=(($7+4*$8)&4294967295); //@line 181 "_randommodule.c"
        var $10=HEAP[$9]; //@line 181 "_randommodule.c"
        var $11=HEAP[$i]; //@line 181 "_randommodule.c"
        var $12=((($11) - 1)&4294967295); //@line 181 "_randommodule.c"
        var $13=HEAP[$mt]; //@line 181 "_randommodule.c"
        var $14=(($13+4*$12)&4294967295); //@line 181 "_randommodule.c"
        var $15=HEAP[$14]; //@line 181 "_randommodule.c"
        var $16=HEAP[$i]; //@line 181 "_randommodule.c"
        var $17=((($16) - 1)&4294967295); //@line 181 "_randommodule.c"
        var $18=HEAP[$mt]; //@line 181 "_randommodule.c"
        var $19=(($18+4*$17)&4294967295); //@line 181 "_randommodule.c"
        var $20=HEAP[$19]; //@line 181 "_randommodule.c"
        var $21=((($20))>>>0) >>> 30; //@line 181 "_randommodule.c"
        var $22=($15) ^ ($21); //@line 181 "_randommodule.c"
        var $23=((($22) * 1664525)&4294967295); //@line 181 "_randommodule.c"
        var $24=($10) ^ ($23); //@line 181 "_randommodule.c"
        var $25=HEAP[$init_key_addr]; //@line 181 "_randommodule.c"
        var $26=HEAP[$j]; //@line 181 "_randommodule.c"
        var $27=(($25+4*$26)&4294967295); //@line 181 "_randommodule.c"
        var $28=HEAP[$27]; //@line 181 "_randommodule.c"
        var $29=((($24) + ($28))&4294967295); //@line 181 "_randommodule.c"
        var $30=HEAP[$j]; //@line 181 "_randommodule.c"
        var $31=((($29) + ($30))&4294967295); //@line 181 "_randommodule.c"
        var $32=HEAP[$mt]; //@line 181 "_randommodule.c"
        var $33=HEAP[$i]; //@line 181 "_randommodule.c"
        var $34=(($32+4*$33)&4294967295); //@line 181 "_randommodule.c"
        HEAP[$34]=$31; //@line 181 "_randommodule.c"
        var $35=HEAP[$mt]; //@line 183 "_randommodule.c"
        var $36=HEAP[$i]; //@line 183 "_randommodule.c"
        var $37=(($35+4*$36)&4294967295); //@line 183 "_randommodule.c"
        var $38=HEAP[$37]; //@line 183 "_randommodule.c"
        var $39=HEAP[$mt]; //@line 183 "_randommodule.c"
        var $40=HEAP[$i]; //@line 183 "_randommodule.c"
        var $41=(($39+4*$40)&4294967295); //@line 183 "_randommodule.c"
        HEAP[$41]=$38; //@line 183 "_randommodule.c"
        var $42=HEAP[$i]; //@line 184 "_randommodule.c"
        var $43=((($42) + 1)&4294967295); //@line 184 "_randommodule.c"
        HEAP[$i]=$43; //@line 184 "_randommodule.c"
        var $44=HEAP[$j]; //@line 184 "_randommodule.c"
        var $45=((($44) + 1)&4294967295); //@line 184 "_randommodule.c"
        HEAP[$j]=$45; //@line 184 "_randommodule.c"
        var $46=HEAP[$i]; //@line 185 "_randommodule.c"
        var $47=((($46))>>>0) > 623; //@line 185 "_randommodule.c"
        if ($47) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 185 "_randommodule.c"
      case 2: // $bb1
        var $48=HEAP[$mt]; //@line 185 "_randommodule.c"
        var $49=(($48+2492)&4294967295); //@line 185 "_randommodule.c"
        var $50=HEAP[$49]; //@line 185 "_randommodule.c"
        var $51=HEAP[$mt]; //@line 185 "_randommodule.c"
        var $52=(($51)&4294967295); //@line 185 "_randommodule.c"
        HEAP[$52]=$50; //@line 185 "_randommodule.c"
        HEAP[$i]=1; //@line 185 "_randommodule.c"
        __label__ = 3; break; //@line 185 "_randommodule.c"
      case 3: // $bb2
        var $53=HEAP[$j]; //@line 186 "_randommodule.c"
        var $54=HEAP[$key_length_addr]; //@line 186 "_randommodule.c"
        var $55=((($53))>>>0) >= ((($54))>>>0); //@line 186 "_randommodule.c"
        if ($55) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 186 "_randommodule.c"
      case 4: // $bb3
        HEAP[$j]=0; //@line 186 "_randommodule.c"
        __label__ = 5; break; //@line 186 "_randommodule.c"
      case 5: // $bb4
        var $56=HEAP[$k]; //@line 180 "_randommodule.c"
        var $57=((($56) - 1)&4294967295); //@line 180 "_randommodule.c"
        HEAP[$k]=$57; //@line 180 "_randommodule.c"
        __label__ = 6; break; //@line 180 "_randommodule.c"
      case 6: // $bb5
        var $58=HEAP[$k]; //@line 180 "_randommodule.c"
        var $59=((($58))|0)!=0; //@line 180 "_randommodule.c"
        if ($59) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 180 "_randommodule.c"
      case 7: // $bb6
        HEAP[$k]=623; //@line 188 "_randommodule.c"
        __label__ = 11; break; //@line 188 "_randommodule.c"
      case 8: // $bb7
        var $60=HEAP[$mt]; //@line 189 "_randommodule.c"
        var $61=HEAP[$i]; //@line 189 "_randommodule.c"
        var $62=(($60+4*$61)&4294967295); //@line 189 "_randommodule.c"
        var $63=HEAP[$62]; //@line 189 "_randommodule.c"
        var $64=HEAP[$i]; //@line 189 "_randommodule.c"
        var $65=((($64) - 1)&4294967295); //@line 189 "_randommodule.c"
        var $66=HEAP[$mt]; //@line 189 "_randommodule.c"
        var $67=(($66+4*$65)&4294967295); //@line 189 "_randommodule.c"
        var $68=HEAP[$67]; //@line 189 "_randommodule.c"
        var $69=HEAP[$i]; //@line 189 "_randommodule.c"
        var $70=((($69) - 1)&4294967295); //@line 189 "_randommodule.c"
        var $71=HEAP[$mt]; //@line 189 "_randommodule.c"
        var $72=(($71+4*$70)&4294967295); //@line 189 "_randommodule.c"
        var $73=HEAP[$72]; //@line 189 "_randommodule.c"
        var $74=((($73))>>>0) >>> 30; //@line 189 "_randommodule.c"
        var $75=($68) ^ ($74); //@line 189 "_randommodule.c"
        var $76=((($75) * 1566083941)&4294967295); //@line 189 "_randommodule.c"
        var $77=($63) ^ ($76); //@line 189 "_randommodule.c"
        var $78=HEAP[$i]; //@line 189 "_randommodule.c"
        var $79=((($77) - ($78))&4294967295); //@line 189 "_randommodule.c"
        var $80=HEAP[$mt]; //@line 189 "_randommodule.c"
        var $81=HEAP[$i]; //@line 189 "_randommodule.c"
        var $82=(($80+4*$81)&4294967295); //@line 189 "_randommodule.c"
        HEAP[$82]=$79; //@line 189 "_randommodule.c"
        var $83=HEAP[$mt]; //@line 191 "_randommodule.c"
        var $84=HEAP[$i]; //@line 191 "_randommodule.c"
        var $85=(($83+4*$84)&4294967295); //@line 191 "_randommodule.c"
        var $86=HEAP[$85]; //@line 191 "_randommodule.c"
        var $87=HEAP[$mt]; //@line 191 "_randommodule.c"
        var $88=HEAP[$i]; //@line 191 "_randommodule.c"
        var $89=(($87+4*$88)&4294967295); //@line 191 "_randommodule.c"
        HEAP[$89]=$86; //@line 191 "_randommodule.c"
        var $90=HEAP[$i]; //@line 192 "_randommodule.c"
        var $91=((($90) + 1)&4294967295); //@line 192 "_randommodule.c"
        HEAP[$i]=$91; //@line 192 "_randommodule.c"
        var $92=HEAP[$i]; //@line 193 "_randommodule.c"
        var $93=((($92))>>>0) > 623; //@line 193 "_randommodule.c"
        if ($93) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 193 "_randommodule.c"
      case 9: // $bb8
        var $94=HEAP[$mt]; //@line 193 "_randommodule.c"
        var $95=(($94+2492)&4294967295); //@line 193 "_randommodule.c"
        var $96=HEAP[$95]; //@line 193 "_randommodule.c"
        var $97=HEAP[$mt]; //@line 193 "_randommodule.c"
        var $98=(($97)&4294967295); //@line 193 "_randommodule.c"
        HEAP[$98]=$96; //@line 193 "_randommodule.c"
        HEAP[$i]=1; //@line 193 "_randommodule.c"
        __label__ = 10; break; //@line 193 "_randommodule.c"
      case 10: // $bb9
        var $99=HEAP[$k]; //@line 188 "_randommodule.c"
        var $100=((($99) - 1)&4294967295); //@line 188 "_randommodule.c"
        HEAP[$k]=$100; //@line 188 "_randommodule.c"
        __label__ = 11; break; //@line 188 "_randommodule.c"
      case 11: // $bb10
        var $101=HEAP[$k]; //@line 188 "_randommodule.c"
        var $102=((($101))|0)!=0; //@line 188 "_randommodule.c"
        if ($102) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 188 "_randommodule.c"
      case 12: // $bb11
        var $103=HEAP[$mt]; //@line 196 "_randommodule.c"
        var $104=(($103)&4294967295); //@line 196 "_randommodule.c"
        HEAP[$104]=-2147483648; //@line 196 "_randommodule.c"
        var $105=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 197 "_randommodule.c"
        var $106=((($105) + 1)&4294967295); //@line 197 "_randommodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$106; //@line 197 "_randommodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 198 "_randommodule.c"
        var $107=HEAP[$0]; //@line 198 "_randommodule.c"
        HEAP[$retval]=$107; //@line 198 "_randommodule.c"
        __label__ = 13; break; //@line 198 "_randommodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 198 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 198 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_seed($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $masklower=__stackBase__+20;
        var $thirtytwo=__stackBase__+24;
        var $n=__stackBase__+28;
        var $key=__stackBase__+32;
        var $keymax=__stackBase__+36;
        var $keyused=__stackBase__+40;
        var $err=__stackBase__+44;
        var $arg=__stackBase__+48;
        var $now=__stackBase__+52;
        var $hash=__stackBase__+56;
        var $newn=__stackBase__+60;
        var $pychunk=__stackBase__+64;
        var $chunk=__stackBase__+68;
        var $bigger=__stackBase__+72;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$result]=0; //@line 209 "_randommodule.c"
        HEAP[$masklower]=0; //@line 210 "_randommodule.c"
        HEAP[$thirtytwo]=0; //@line 211 "_randommodule.c"
        HEAP[$n]=0; //@line 212 "_randommodule.c"
        HEAP[$key]=0; //@line 213 "_randommodule.c"
        HEAP[$arg]=0; //@line 218 "_randommodule.c"
        var $1=HEAP[$args_addr]; //@line 220 "_randommodule.c"
        var $2=_PyArg_UnpackTuple($1, ((__str)&4294967295), 0, 1, $arg); //@line 220 "_randommodule.c"
        var $3=((($2))|0)==0; //@line 220 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 220 "_randommodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 221 "_randommodule.c"
        __label__ = 46; break; //@line 221 "_randommodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg]; //@line 223 "_randommodule.c"
        var $5=($4)==0; //@line 223 "_randommodule.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 223 "_randommodule.c"
      case 3: // $bb2
        var $6=HEAP[$arg]; //@line 223 "_randommodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 223 "_randommodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 223 "_randommodule.c"
      case 4: // $bb3
        var $8=_time($now); //@line 226 "_randommodule.c"
        var $9=HEAP[$now]; //@line 227 "_randommodule.c"
        var $10=HEAP[$self_addr]; //@line 227 "_randommodule.c"
        _init_genrand($10, $9); //@line 227 "_randommodule.c"
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 228 "_randommodule.c"
        var $12=((($11) + 1)&4294967295); //@line 228 "_randommodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 228 "_randommodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 229 "_randommodule.c"
        __label__ = 46; break; //@line 229 "_randommodule.c"
      case 5: // $bb4
        var $13=HEAP[$arg]; //@line 234 "_randommodule.c"
        var $14=(($13+4)&4294967295); //@line 234 "_randommodule.c"
        var $15=HEAP[$14]; //@line 234 "_randommodule.c"
        var $16=(($15+84)&4294967295); //@line 234 "_randommodule.c"
        var $17=HEAP[$16]; //@line 234 "_randommodule.c"
        var $18=($17) & 8388608; //@line 234 "_randommodule.c"
        var $19=((($18))|0)!=0; //@line 234 "_randommodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 234 "_randommodule.c"
      case 6: // $bb5
        var $20=HEAP[$arg]; //@line 234 "_randommodule.c"
        var $21=(($20+4)&4294967295); //@line 234 "_randommodule.c"
        var $22=HEAP[$21]; //@line 234 "_randommodule.c"
        var $23=(($22+84)&4294967295); //@line 234 "_randommodule.c"
        var $24=HEAP[$23]; //@line 234 "_randommodule.c"
        var $25=($24) & 16777216; //@line 234 "_randommodule.c"
        var $26=((($25))|0)!=0; //@line 234 "_randommodule.c"
        if ($26) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 234 "_randommodule.c"
      case 7: // $bb6
        var $27=HEAP[$arg]; //@line 235 "_randommodule.c"
        var $28=_PyNumber_Absolute($27); //@line 235 "_randommodule.c"
        HEAP[$n]=$28; //@line 235 "_randommodule.c"
        __label__ = 10; break; //@line 235 "_randommodule.c"
      case 8: // $bb7
        var $29=HEAP[$arg]; //@line 237 "_randommodule.c"
        var $30=_PyObject_Hash($29); //@line 237 "_randommodule.c"
        HEAP[$hash]=$30; //@line 237 "_randommodule.c"
        var $31=HEAP[$hash]; //@line 238 "_randommodule.c"
        var $32=((($31))|0)==-1; //@line 238 "_randommodule.c"
        if ($32) { __label__ = 36; break; } else { __label__ = 9; break; } //@line 238 "_randommodule.c"
      case 9: // $bb8
        var $33=HEAP[$hash]; //@line 240 "_randommodule.c"
        var $34=_PyLong_FromUnsignedLong($33); //@line 240 "_randommodule.c"
        HEAP[$n]=$34; //@line 240 "_randommodule.c"
        __label__ = 10; break; //@line 240 "_randommodule.c"
      case 10: // $bb9
        var $35=HEAP[$n]; //@line 242 "_randommodule.c"
        var $36=($35)==0; //@line 242 "_randommodule.c"
        if ($36) { __label__ = 36; break; } else { __label__ = 11; break; } //@line 242 "_randommodule.c"
      case 11: // $bb10
        HEAP[$keymax]=8; //@line 253 "_randommodule.c"
        HEAP[$keyused]=0; //@line 254 "_randommodule.c"
        var $37=HEAP[$keymax]; //@line 255 "_randommodule.c"
        var $38=((($37) * 4)&4294967295); //@line 255 "_randommodule.c"
        var $39=_PyMem_Malloc($38); //@line 255 "_randommodule.c"
        var $40=$39; //@line 255 "_randommodule.c"
        HEAP[$key]=$40; //@line 255 "_randommodule.c"
        var $41=HEAP[$key]; //@line 256 "_randommodule.c"
        var $42=($41)==0; //@line 256 "_randommodule.c"
        if ($42) { __label__ = 36; break; } else { __label__ = 12; break; } //@line 256 "_randommodule.c"
      case 12: // $bb11
        var $43=_PyLong_FromUnsignedLong(-1); //@line 259 "_randommodule.c"
        HEAP[$masklower]=$43; //@line 259 "_randommodule.c"
        var $44=HEAP[$masklower]; //@line 260 "_randommodule.c"
        var $45=($44)==0; //@line 260 "_randommodule.c"
        if ($45) { __label__ = 36; break; } else { __label__ = 13; break; } //@line 260 "_randommodule.c"
      case 13: // $bb12
        var $46=_PyInt_FromLong(32); //@line 262 "_randommodule.c"
        HEAP[$thirtytwo]=$46; //@line 262 "_randommodule.c"
        var $47=HEAP[$thirtytwo]; //@line 263 "_randommodule.c"
        var $48=($47)==0; //@line 263 "_randommodule.c"
        if ($48) { __label__ = 36; break; } else { __label__ = 14; break; } //@line 263 "_randommodule.c"
      case 14: // $bb13
        __label__ = 32; break; //@line 263 "_randommodule.c"
      case 15: // $bb14
        var $49=HEAP[$err]; //@line 270 "_randommodule.c"
        var $50=((($49))|0)==-1; //@line 270 "_randommodule.c"
        if ($50) { __label__ = 36; break; } else { __label__ = 16; break; } //@line 270 "_randommodule.c"
      case 16: // $bb15
        var $51=HEAP[$n]; //@line 272 "_randommodule.c"
        var $52=HEAP[$masklower]; //@line 272 "_randommodule.c"
        var $53=_PyNumber_And($51, $52); //@line 272 "_randommodule.c"
        HEAP[$pychunk]=$53; //@line 272 "_randommodule.c"
        var $54=HEAP[$pychunk]; //@line 273 "_randommodule.c"
        var $55=($54)==0; //@line 273 "_randommodule.c"
        if ($55) { __label__ = 36; break; } else { __label__ = 17; break; } //@line 273 "_randommodule.c"
      case 17: // $bb16
        var $56=HEAP[$pychunk]; //@line 275 "_randommodule.c"
        var $57=_PyLong_AsUnsignedLong($56); //@line 275 "_randommodule.c"
        HEAP[$chunk]=$57; //@line 275 "_randommodule.c"
        var $58=HEAP[$pychunk]; //@line 276 "_randommodule.c"
        var $59=(($58)&4294967295); //@line 276 "_randommodule.c"
        var $60=HEAP[$59]; //@line 276 "_randommodule.c"
        var $61=((($60) - 1)&4294967295); //@line 276 "_randommodule.c"
        var $62=HEAP[$pychunk]; //@line 276 "_randommodule.c"
        var $63=(($62)&4294967295); //@line 276 "_randommodule.c"
        HEAP[$63]=$61; //@line 276 "_randommodule.c"
        var $64=HEAP[$pychunk]; //@line 276 "_randommodule.c"
        var $65=(($64)&4294967295); //@line 276 "_randommodule.c"
        var $66=HEAP[$65]; //@line 276 "_randommodule.c"
        var $67=((($66))|0)==0; //@line 276 "_randommodule.c"
        if ($67) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 276 "_randommodule.c"
      case 18: // $bb17
        var $68=HEAP[$pychunk]; //@line 276 "_randommodule.c"
        var $69=(($68+4)&4294967295); //@line 276 "_randommodule.c"
        var $70=HEAP[$69]; //@line 276 "_randommodule.c"
        var $71=(($70+24)&4294967295); //@line 276 "_randommodule.c"
        var $72=HEAP[$71]; //@line 276 "_randommodule.c"
        var $73=HEAP[$pychunk]; //@line 276 "_randommodule.c"
        FUNCTION_TABLE[$72]($73); //@line 276 "_randommodule.c"
        __label__ = 19; break; //@line 276 "_randommodule.c"
      case 19: // $bb18
        var $74=HEAP[$chunk]; //@line 277 "_randommodule.c"
        var $75=((($74))|0)==-1; //@line 277 "_randommodule.c"
        if ($75) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 277 "_randommodule.c"
      case 20: // $bb19
        var $76=_PyErr_Occurred(); //@line 277 "_randommodule.c"
        var $77=($76)!=0; //@line 277 "_randommodule.c"
        if ($77) { __label__ = 36; break; } else { __label__ = 21; break; } //@line 277 "_randommodule.c"
      case 21: // $bb20
        var $78=HEAP[$n]; //@line 279 "_randommodule.c"
        var $79=HEAP[$thirtytwo]; //@line 279 "_randommodule.c"
        var $80=_PyNumber_Rshift($78, $79); //@line 279 "_randommodule.c"
        HEAP[$newn]=$80; //@line 279 "_randommodule.c"
        var $81=HEAP[$newn]; //@line 280 "_randommodule.c"
        var $82=($81)==0; //@line 280 "_randommodule.c"
        if ($82) { __label__ = 36; break; } else { __label__ = 22; break; } //@line 280 "_randommodule.c"
      case 22: // $bb21
        var $83=HEAP[$n]; //@line 282 "_randommodule.c"
        var $84=(($83)&4294967295); //@line 282 "_randommodule.c"
        var $85=HEAP[$84]; //@line 282 "_randommodule.c"
        var $86=((($85) - 1)&4294967295); //@line 282 "_randommodule.c"
        var $87=HEAP[$n]; //@line 282 "_randommodule.c"
        var $88=(($87)&4294967295); //@line 282 "_randommodule.c"
        HEAP[$88]=$86; //@line 282 "_randommodule.c"
        var $89=HEAP[$n]; //@line 282 "_randommodule.c"
        var $90=(($89)&4294967295); //@line 282 "_randommodule.c"
        var $91=HEAP[$90]; //@line 282 "_randommodule.c"
        var $92=((($91))|0)==0; //@line 282 "_randommodule.c"
        if ($92) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 282 "_randommodule.c"
      case 23: // $bb22
        var $93=HEAP[$n]; //@line 282 "_randommodule.c"
        var $94=(($93+4)&4294967295); //@line 282 "_randommodule.c"
        var $95=HEAP[$94]; //@line 282 "_randommodule.c"
        var $96=(($95+24)&4294967295); //@line 282 "_randommodule.c"
        var $97=HEAP[$96]; //@line 282 "_randommodule.c"
        var $98=HEAP[$n]; //@line 282 "_randommodule.c"
        FUNCTION_TABLE[$97]($98); //@line 282 "_randommodule.c"
        __label__ = 24; break; //@line 282 "_randommodule.c"
      case 24: // $bb23
        var $99=HEAP[$newn]; //@line 283 "_randommodule.c"
        HEAP[$n]=$99; //@line 283 "_randommodule.c"
        var $100=HEAP[$keyused]; //@line 284 "_randommodule.c"
        var $101=HEAP[$keymax]; //@line 284 "_randommodule.c"
        var $102=((($100))>>>0) >= ((($101))>>>0); //@line 284 "_randommodule.c"
        if ($102) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 284 "_randommodule.c"
      case 25: // $bb24
        var $103=HEAP[$keymax]; //@line 285 "_randommodule.c"
        var $104=($103) << 1; //@line 285 "_randommodule.c"
        HEAP[$bigger]=$104; //@line 285 "_randommodule.c"
        var $105=HEAP[$bigger]; //@line 286 "_randommodule.c"
        var $106=((($105))>>>0) >>> 1; //@line 286 "_randommodule.c"
        var $107=HEAP[$keymax]; //@line 286 "_randommodule.c"
        var $108=((($106))|0)!=((($107))|0); //@line 286 "_randommodule.c"
        if ($108) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 286 "_randommodule.c"
      case 26: // $bb25
        var $109=_PyErr_NoMemory(); //@line 287 "_randommodule.c"
        __label__ = 36; break; //@line 287 "_randommodule.c"
      case 27: // $bb26
        var $110=HEAP[$bigger]; //@line 290 "_randommodule.c"
        var $111=((($110) * 4)&4294967295); //@line 290 "_randommodule.c"
        var $112=HEAP[$key]; //@line 290 "_randommodule.c"
        var $113=$112; //@line 290 "_randommodule.c"
        var $114=_PyMem_Realloc($113, $111); //@line 290 "_randommodule.c"
        var $115=$114; //@line 290 "_randommodule.c"
        HEAP[$key]=$115; //@line 290 "_randommodule.c"
        var $116=HEAP[$key]; //@line 292 "_randommodule.c"
        var $117=($116)==0; //@line 292 "_randommodule.c"
        if ($117) { __label__ = 36; break; } else { __label__ = 28; break; } //@line 292 "_randommodule.c"
      case 28: // $bb27
        var $118=HEAP[$bigger]; //@line 294 "_randommodule.c"
        HEAP[$keymax]=$118; //@line 294 "_randommodule.c"
        __label__ = 29; break; //@line 294 "_randommodule.c"
      case 29: // $bb28
        var $119=HEAP[$keyused]; //@line 296 "_randommodule.c"
        var $120=HEAP[$keymax]; //@line 296 "_randommodule.c"
        var $121=((($119))>>>0) >= ((($120))>>>0); //@line 296 "_randommodule.c"
        if ($121) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 296 "_randommodule.c"
      case 30: // $bb29
        ___assert_fail(((__str1)&4294967295), ((__str2)&4294967295), 296, ((___PRETTY_FUNCTION___8478)&4294967295)); //@line 296 "_randommodule.c"
        throw "Reached an unreachable! Original .ll line: 845"; //@line 296 "_randommodule.c"
      case 31: // $bb30
        var $122=HEAP[$key]; //@line 297 "_randommodule.c"
        var $123=HEAP[$keyused]; //@line 297 "_randommodule.c"
        var $124=(($122+4*$123)&4294967295); //@line 297 "_randommodule.c"
        var $125=HEAP[$chunk]; //@line 297 "_randommodule.c"
        HEAP[$124]=$125; //@line 297 "_randommodule.c"
        var $126=HEAP[$keyused]; //@line 297 "_randommodule.c"
        var $127=((($126) + 1)&4294967295); //@line 297 "_randommodule.c"
        HEAP[$keyused]=$127; //@line 297 "_randommodule.c"
        __label__ = 32; break; //@line 297 "_randommodule.c"
      case 32: // $bb31
        var $128=HEAP[$n]; //@line 265 "_randommodule.c"
        var $129=_PyObject_IsTrue($128); //@line 265 "_randommodule.c"
        HEAP[$err]=$129; //@line 265 "_randommodule.c"
        var $130=HEAP[$err]; //@line 265 "_randommodule.c"
        var $131=((($130))|0)!=0; //@line 265 "_randommodule.c"
        if ($131) { __label__ = 15; break; } else { __label__ = 33; break; } //@line 265 "_randommodule.c"
      case 33: // $bb32
        var $132=HEAP[$keyused]; //@line 300 "_randommodule.c"
        var $133=((($132))|0)==0; //@line 300 "_randommodule.c"
        if ($133) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 300 "_randommodule.c"
      case 34: // $bb33
        var $134=HEAP[$key]; //@line 301 "_randommodule.c"
        var $135=HEAP[$keyused]; //@line 301 "_randommodule.c"
        var $136=(($134+4*$135)&4294967295); //@line 301 "_randommodule.c"
        HEAP[$136]=0; //@line 301 "_randommodule.c"
        var $137=HEAP[$keyused]; //@line 301 "_randommodule.c"
        var $138=((($137) + 1)&4294967295); //@line 301 "_randommodule.c"
        HEAP[$keyused]=$138; //@line 301 "_randommodule.c"
        __label__ = 35; break; //@line 301 "_randommodule.c"
      case 35: // $bb34
        var $139=HEAP[$self_addr]; //@line 302 "_randommodule.c"
        var $140=HEAP[$key]; //@line 302 "_randommodule.c"
        var $141=HEAP[$keyused]; //@line 302 "_randommodule.c"
        var $142=_init_by_array($139, $140, $141); //@line 302 "_randommodule.c"
        HEAP[$result]=$142; //@line 302 "_randommodule.c"
        __label__ = 36; break; //@line 303 "_randommodule.c"
      case 36: // $Done
        var $143=HEAP[$masklower]; //@line 304 "_randommodule.c"
        var $144=($143)!=0; //@line 304 "_randommodule.c"
        if ($144) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 304 "_randommodule.c"
      case 37: // $bb35
        var $145=HEAP[$masklower]; //@line 304 "_randommodule.c"
        var $146=(($145)&4294967295); //@line 304 "_randommodule.c"
        var $147=HEAP[$146]; //@line 304 "_randommodule.c"
        var $148=((($147) - 1)&4294967295); //@line 304 "_randommodule.c"
        var $149=HEAP[$masklower]; //@line 304 "_randommodule.c"
        var $150=(($149)&4294967295); //@line 304 "_randommodule.c"
        HEAP[$150]=$148; //@line 304 "_randommodule.c"
        var $151=HEAP[$masklower]; //@line 304 "_randommodule.c"
        var $152=(($151)&4294967295); //@line 304 "_randommodule.c"
        var $153=HEAP[$152]; //@line 304 "_randommodule.c"
        var $154=((($153))|0)==0; //@line 304 "_randommodule.c"
        if ($154) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 304 "_randommodule.c"
      case 38: // $bb36
        var $155=HEAP[$masklower]; //@line 304 "_randommodule.c"
        var $156=(($155+4)&4294967295); //@line 304 "_randommodule.c"
        var $157=HEAP[$156]; //@line 304 "_randommodule.c"
        var $158=(($157+24)&4294967295); //@line 304 "_randommodule.c"
        var $159=HEAP[$158]; //@line 304 "_randommodule.c"
        var $160=HEAP[$masklower]; //@line 304 "_randommodule.c"
        FUNCTION_TABLE[$159]($160); //@line 304 "_randommodule.c"
        __label__ = 39; break; //@line 304 "_randommodule.c"
      case 39: // $bb37
        var $161=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        var $162=($161)!=0; //@line 305 "_randommodule.c"
        if ($162) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 305 "_randommodule.c"
      case 40: // $bb38
        var $163=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        var $164=(($163)&4294967295); //@line 305 "_randommodule.c"
        var $165=HEAP[$164]; //@line 305 "_randommodule.c"
        var $166=((($165) - 1)&4294967295); //@line 305 "_randommodule.c"
        var $167=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        var $168=(($167)&4294967295); //@line 305 "_randommodule.c"
        HEAP[$168]=$166; //@line 305 "_randommodule.c"
        var $169=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        var $170=(($169)&4294967295); //@line 305 "_randommodule.c"
        var $171=HEAP[$170]; //@line 305 "_randommodule.c"
        var $172=((($171))|0)==0; //@line 305 "_randommodule.c"
        if ($172) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 305 "_randommodule.c"
      case 41: // $bb39
        var $173=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        var $174=(($173+4)&4294967295); //@line 305 "_randommodule.c"
        var $175=HEAP[$174]; //@line 305 "_randommodule.c"
        var $176=(($175+24)&4294967295); //@line 305 "_randommodule.c"
        var $177=HEAP[$176]; //@line 305 "_randommodule.c"
        var $178=HEAP[$thirtytwo]; //@line 305 "_randommodule.c"
        FUNCTION_TABLE[$177]($178); //@line 305 "_randommodule.c"
        __label__ = 42; break; //@line 305 "_randommodule.c"
      case 42: // $bb40
        var $179=HEAP[$n]; //@line 306 "_randommodule.c"
        var $180=($179)!=0; //@line 306 "_randommodule.c"
        if ($180) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 306 "_randommodule.c"
      case 43: // $bb41
        var $181=HEAP[$n]; //@line 306 "_randommodule.c"
        var $182=(($181)&4294967295); //@line 306 "_randommodule.c"
        var $183=HEAP[$182]; //@line 306 "_randommodule.c"
        var $184=((($183) - 1)&4294967295); //@line 306 "_randommodule.c"
        var $185=HEAP[$n]; //@line 306 "_randommodule.c"
        var $186=(($185)&4294967295); //@line 306 "_randommodule.c"
        HEAP[$186]=$184; //@line 306 "_randommodule.c"
        var $187=HEAP[$n]; //@line 306 "_randommodule.c"
        var $188=(($187)&4294967295); //@line 306 "_randommodule.c"
        var $189=HEAP[$188]; //@line 306 "_randommodule.c"
        var $190=((($189))|0)==0; //@line 306 "_randommodule.c"
        if ($190) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 306 "_randommodule.c"
      case 44: // $bb42
        var $191=HEAP[$n]; //@line 306 "_randommodule.c"
        var $192=(($191+4)&4294967295); //@line 306 "_randommodule.c"
        var $193=HEAP[$192]; //@line 306 "_randommodule.c"
        var $194=(($193+24)&4294967295); //@line 306 "_randommodule.c"
        var $195=HEAP[$194]; //@line 306 "_randommodule.c"
        var $196=HEAP[$n]; //@line 306 "_randommodule.c"
        FUNCTION_TABLE[$195]($196); //@line 306 "_randommodule.c"
        __label__ = 45; break; //@line 306 "_randommodule.c"
      case 45: // $bb43
        var $197=HEAP[$key]; //@line 307 "_randommodule.c"
        var $198=$197; //@line 307 "_randommodule.c"
        _PyMem_Free($198); //@line 307 "_randommodule.c"
        var $199=HEAP[$result]; //@line 308 "_randommodule.c"
        HEAP[$0]=$199; //@line 308 "_randommodule.c"
        __label__ = 46; break; //@line 308 "_randommodule.c"
      case 46: // $bb44
        var $200=HEAP[$0]; //@line 221 "_randommodule.c"
        HEAP[$retval]=$200; //@line 221 "_randommodule.c"
        __label__ = 47; break; //@line 221 "_randommodule.c"
      case 47: // $return
        var $retval45=HEAP[$retval]; //@line 221 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 221 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_getstate($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $state=__stackBase__+12;
        var $element=__stackBase__+16;
        var $i=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=_PyTuple_New(625); //@line 318 "_randommodule.c"
        HEAP[$state]=$1; //@line 318 "_randommodule.c"
        var $2=HEAP[$state]; //@line 319 "_randommodule.c"
        var $3=($2)==0; //@line 319 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 319 "_randommodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 320 "_randommodule.c"
        __label__ = 11; break; //@line 320 "_randommodule.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 321 "_randommodule.c"
        __label__ = 5; break; //@line 321 "_randommodule.c"
      case 3: // $bb2
        var $4=HEAP[$i]; //@line 322 "_randommodule.c"
        var $5=HEAP[$self_addr]; //@line 322 "_randommodule.c"
        var $6=(($5+8)&4294967295); //@line 322 "_randommodule.c"
        var $7=(($6+$4*4)&4294967295); //@line 322 "_randommodule.c"
        var $8=HEAP[$7]; //@line 322 "_randommodule.c"
        var $9=_PyLong_FromUnsignedLong($8); //@line 322 "_randommodule.c"
        HEAP[$element]=$9; //@line 322 "_randommodule.c"
        var $10=HEAP[$element]; //@line 323 "_randommodule.c"
        var $11=($10)==0; //@line 323 "_randommodule.c"
        if ($11) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 323 "_randommodule.c"
      case 4: // $bb3
        var $12=HEAP[$state]; //@line 325 "_randommodule.c"
        var $13=$12; //@line 325 "_randommodule.c"
        var $14=HEAP[$i]; //@line 325 "_randommodule.c"
        var $15=(($13+12)&4294967295); //@line 325 "_randommodule.c"
        var $16=(($15+$14*4)&4294967295); //@line 325 "_randommodule.c"
        var $17=HEAP[$element]; //@line 325 "_randommodule.c"
        HEAP[$16]=$17; //@line 325 "_randommodule.c"
        var $18=HEAP[$i]; //@line 321 "_randommodule.c"
        var $19=((($18) + 1)&4294967295); //@line 321 "_randommodule.c"
        HEAP[$i]=$19; //@line 321 "_randommodule.c"
        __label__ = 5; break; //@line 321 "_randommodule.c"
      case 5: // $bb4
        var $20=HEAP[$i]; //@line 321 "_randommodule.c"
        var $21=((($20))|0) <= 623; //@line 321 "_randommodule.c"
        if ($21) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 321 "_randommodule.c"
      case 6: // $bb5
        var $22=HEAP[$self_addr]; //@line 327 "_randommodule.c"
        var $23=(($22+2504)&4294967295); //@line 327 "_randommodule.c"
        var $24=HEAP[$23]; //@line 327 "_randommodule.c"
        var $25=_PyLong_FromLong($24); //@line 327 "_randommodule.c"
        HEAP[$element]=$25; //@line 327 "_randommodule.c"
        var $26=HEAP[$element]; //@line 328 "_randommodule.c"
        var $27=($26)==0; //@line 328 "_randommodule.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 328 "_randommodule.c"
      case 7: // $bb6
        var $28=HEAP[$state]; //@line 330 "_randommodule.c"
        var $29=$28; //@line 330 "_randommodule.c"
        var $30=HEAP[$i]; //@line 330 "_randommodule.c"
        var $31=(($29+12)&4294967295); //@line 330 "_randommodule.c"
        var $32=(($31+$30*4)&4294967295); //@line 330 "_randommodule.c"
        var $33=HEAP[$element]; //@line 330 "_randommodule.c"
        HEAP[$32]=$33; //@line 330 "_randommodule.c"
        var $34=HEAP[$state]; //@line 331 "_randommodule.c"
        HEAP[$0]=$34; //@line 331 "_randommodule.c"
        __label__ = 11; break; //@line 331 "_randommodule.c"
      case 8: // $Fail
        var $35=HEAP[$state]; //@line 334 "_randommodule.c"
        var $36=(($35)&4294967295); //@line 334 "_randommodule.c"
        var $37=HEAP[$36]; //@line 334 "_randommodule.c"
        var $38=((($37) - 1)&4294967295); //@line 334 "_randommodule.c"
        var $39=HEAP[$state]; //@line 334 "_randommodule.c"
        var $40=(($39)&4294967295); //@line 334 "_randommodule.c"
        HEAP[$40]=$38; //@line 334 "_randommodule.c"
        var $41=HEAP[$state]; //@line 334 "_randommodule.c"
        var $42=(($41)&4294967295); //@line 334 "_randommodule.c"
        var $43=HEAP[$42]; //@line 334 "_randommodule.c"
        var $44=((($43))|0)==0; //@line 334 "_randommodule.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 334 "_randommodule.c"
      case 9: // $bb7
        var $45=HEAP[$state]; //@line 334 "_randommodule.c"
        var $46=(($45+4)&4294967295); //@line 334 "_randommodule.c"
        var $47=HEAP[$46]; //@line 334 "_randommodule.c"
        var $48=(($47+24)&4294967295); //@line 334 "_randommodule.c"
        var $49=HEAP[$48]; //@line 334 "_randommodule.c"
        var $50=HEAP[$state]; //@line 334 "_randommodule.c"
        FUNCTION_TABLE[$49]($50); //@line 334 "_randommodule.c"
        __label__ = 10; break; //@line 334 "_randommodule.c"
      case 10: // $bb8
        HEAP[$0]=0; //@line 335 "_randommodule.c"
        __label__ = 11; break; //@line 335 "_randommodule.c"
      case 11: // $bb9
        var $51=HEAP[$0]; //@line 320 "_randommodule.c"
        HEAP[$retval]=$51; //@line 320 "_randommodule.c"
        __label__ = 12; break; //@line 320 "_randommodule.c"
      case 12: // $return
        var $retval10=HEAP[$retval]; //@line 320 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 320 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_setstate($self, $state) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $state_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $element=__stackBase__+20;
        var $index=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$state_addr]=$state;
        var $1=HEAP[$state_addr]; //@line 345 "_randommodule.c"
        var $2=(($1+4)&4294967295); //@line 345 "_randommodule.c"
        var $3=HEAP[$2]; //@line 345 "_randommodule.c"
        var $4=(($3+84)&4294967295); //@line 345 "_randommodule.c"
        var $5=HEAP[$4]; //@line 345 "_randommodule.c"
        var $6=($5) & 67108864; //@line 345 "_randommodule.c"
        var $7=((($6))|0)==0; //@line 345 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 345 "_randommodule.c"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 346 "_randommodule.c"
        _PyErr_SetString($8, ((__str3)&4294967295)); //@line 346 "_randommodule.c"
        HEAP[$0]=0; //@line 348 "_randommodule.c"
        __label__ = 14; break; //@line 348 "_randommodule.c"
      case 2: // $bb1
        var $9=HEAP[$state_addr]; //@line 350 "_randommodule.c"
        var $10=_PyTuple_Size($9); //@line 350 "_randommodule.c"
        var $11=((($10))|0)!=625; //@line 350 "_randommodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 350 "_randommodule.c"
      case 3: // $bb2
        var $12=HEAP[_PyExc_ValueError]; //@line 351 "_randommodule.c"
        _PyErr_SetString($12, ((__str4)&4294967295)); //@line 351 "_randommodule.c"
        HEAP[$0]=0; //@line 353 "_randommodule.c"
        __label__ = 14; break; //@line 353 "_randommodule.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 356 "_randommodule.c"
        __label__ = 9; break; //@line 356 "_randommodule.c"
      case 5: // $bb4
        var $13=HEAP[$state_addr]; //@line 357 "_randommodule.c"
        var $14=$13; //@line 357 "_randommodule.c"
        var $15=HEAP[$i]; //@line 357 "_randommodule.c"
        var $16=(($14+12)&4294967295); //@line 357 "_randommodule.c"
        var $17=(($16+$15*4)&4294967295); //@line 357 "_randommodule.c"
        var $18=HEAP[$17]; //@line 357 "_randommodule.c"
        var $19=_PyLong_AsUnsignedLong($18); //@line 357 "_randommodule.c"
        HEAP[$element]=$19; //@line 357 "_randommodule.c"
        var $20=HEAP[$element]; //@line 358 "_randommodule.c"
        var $21=((($20))|0)==-1; //@line 358 "_randommodule.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 358 "_randommodule.c"
      case 6: // $bb5
        var $22=_PyErr_Occurred(); //@line 358 "_randommodule.c"
        var $23=($22)!=0; //@line 358 "_randommodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 358 "_randommodule.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 359 "_randommodule.c"
        __label__ = 14; break; //@line 359 "_randommodule.c"
      case 8: // $bb7
        var $24=HEAP[$i]; //@line 360 "_randommodule.c"
        var $25=HEAP[$self_addr]; //@line 360 "_randommodule.c"
        var $26=(($25+8)&4294967295); //@line 360 "_randommodule.c"
        var $27=(($26+$24*4)&4294967295); //@line 360 "_randommodule.c"
        var $28=HEAP[$element]; //@line 360 "_randommodule.c"
        HEAP[$27]=$28; //@line 360 "_randommodule.c"
        var $29=HEAP[$i]; //@line 356 "_randommodule.c"
        var $30=((($29) + 1)&4294967295); //@line 356 "_randommodule.c"
        HEAP[$i]=$30; //@line 356 "_randommodule.c"
        __label__ = 9; break; //@line 356 "_randommodule.c"
      case 9: // $bb8
        var $31=HEAP[$i]; //@line 356 "_randommodule.c"
        var $32=((($31))|0) <= 623; //@line 356 "_randommodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 356 "_randommodule.c"
      case 10: // $bb9
        var $33=HEAP[$state_addr]; //@line 363 "_randommodule.c"
        var $34=$33; //@line 363 "_randommodule.c"
        var $35=HEAP[$i]; //@line 363 "_randommodule.c"
        var $36=(($34+12)&4294967295); //@line 363 "_randommodule.c"
        var $37=(($36+$35*4)&4294967295); //@line 363 "_randommodule.c"
        var $38=HEAP[$37]; //@line 363 "_randommodule.c"
        var $39=_PyLong_AsLong($38); //@line 363 "_randommodule.c"
        HEAP[$index]=$39; //@line 363 "_randommodule.c"
        var $40=HEAP[$index]; //@line 364 "_randommodule.c"
        var $41=((($40))|0)==-1; //@line 364 "_randommodule.c"
        if ($41) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 364 "_randommodule.c"
      case 11: // $bb10
        var $42=_PyErr_Occurred(); //@line 364 "_randommodule.c"
        var $43=($42)!=0; //@line 364 "_randommodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 364 "_randommodule.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 365 "_randommodule.c"
        __label__ = 14; break; //@line 365 "_randommodule.c"
      case 13: // $bb12
        var $44=HEAP[$self_addr]; //@line 366 "_randommodule.c"
        var $45=(($44+2504)&4294967295); //@line 366 "_randommodule.c"
        var $46=HEAP[$index]; //@line 366 "_randommodule.c"
        HEAP[$45]=$46; //@line 366 "_randommodule.c"
        var $47=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 368 "_randommodule.c"
        var $48=((($47) + 1)&4294967295); //@line 368 "_randommodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$48; //@line 368 "_randommodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 369 "_randommodule.c"
        __label__ = 14; break; //@line 369 "_randommodule.c"
      case 14: // $bb13
        var $49=HEAP[$0]; //@line 348 "_randommodule.c"
        HEAP[$retval]=$49; //@line 348 "_randommodule.c"
        __label__ = 15; break; //@line 348 "_randommodule.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 348 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 348 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_jumpahead($self, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $n_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $j=__stackBase__+20;
        var $iobj=__stackBase__+24;
        var $remobj=__stackBase__+28;
        var $mt=__stackBase__+32;
        var $tmp=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$n_addr]=$n;
        var $1=HEAP[$n_addr]; //@line 405 "_randommodule.c"
        var $2=(($1+4)&4294967295); //@line 405 "_randommodule.c"
        var $3=HEAP[$2]; //@line 405 "_randommodule.c"
        var $4=(($3+84)&4294967295); //@line 405 "_randommodule.c"
        var $5=HEAP[$4]; //@line 405 "_randommodule.c"
        var $6=($5) & 8388608; //@line 405 "_randommodule.c"
        var $7=((($6))|0)==0; //@line 405 "_randommodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 405 "_randommodule.c"
      case 1: // $bb
        var $8=HEAP[$n_addr]; //@line 405 "_randommodule.c"
        var $9=(($8+4)&4294967295); //@line 405 "_randommodule.c"
        var $10=HEAP[$9]; //@line 405 "_randommodule.c"
        var $11=(($10+84)&4294967295); //@line 405 "_randommodule.c"
        var $12=HEAP[$11]; //@line 405 "_randommodule.c"
        var $13=($12) & 16777216; //@line 405 "_randommodule.c"
        var $14=((($13))|0)==0; //@line 405 "_randommodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 405 "_randommodule.c"
      case 2: // $bb1
        var $15=HEAP[$n_addr]; //@line 406 "_randommodule.c"
        var $16=(($15+4)&4294967295); //@line 406 "_randommodule.c"
        var $17=HEAP[$16]; //@line 406 "_randommodule.c"
        var $18=(($17+12)&4294967295); //@line 406 "_randommodule.c"
        var $19=HEAP[$18]; //@line 406 "_randommodule.c"
        var $20=HEAP[_PyExc_TypeError]; //@line 406 "_randommodule.c"
        var $21=_PyErr_Format($20, ((__str5)&4294967295), $19); //@line 406 "_randommodule.c"
        HEAP[$0]=0; //@line 409 "_randommodule.c"
        __label__ = 21; break; //@line 409 "_randommodule.c"
      case 3: // $bb2
        var $22=HEAP[$self_addr]; //@line 412 "_randommodule.c"
        var $23=(($22+8)&4294967295); //@line 412 "_randommodule.c"
        var $24=(($23)&4294967295); //@line 412 "_randommodule.c"
        HEAP[$mt]=$24; //@line 412 "_randommodule.c"
        HEAP[$i]=623; //@line 413 "_randommodule.c"
        __label__ = 16; break; //@line 413 "_randommodule.c"
      case 4: // $bb3
        var $25=HEAP[$i]; //@line 414 "_randommodule.c"
        var $26=_PyInt_FromLong($25); //@line 414 "_randommodule.c"
        HEAP[$iobj]=$26; //@line 414 "_randommodule.c"
        var $27=HEAP[$iobj]; //@line 415 "_randommodule.c"
        var $28=($27)==0; //@line 415 "_randommodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 415 "_randommodule.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 416 "_randommodule.c"
        __label__ = 21; break; //@line 416 "_randommodule.c"
      case 6: // $bb5
        var $29=HEAP[$n_addr]; //@line 417 "_randommodule.c"
        var $30=HEAP[$iobj]; //@line 417 "_randommodule.c"
        var $31=_PyNumber_Remainder($29, $30); //@line 417 "_randommodule.c"
        HEAP[$remobj]=$31; //@line 417 "_randommodule.c"
        var $32=HEAP[$iobj]; //@line 418 "_randommodule.c"
        var $33=(($32)&4294967295); //@line 418 "_randommodule.c"
        var $34=HEAP[$33]; //@line 418 "_randommodule.c"
        var $35=((($34) - 1)&4294967295); //@line 418 "_randommodule.c"
        var $36=HEAP[$iobj]; //@line 418 "_randommodule.c"
        var $37=(($36)&4294967295); //@line 418 "_randommodule.c"
        HEAP[$37]=$35; //@line 418 "_randommodule.c"
        var $38=HEAP[$iobj]; //@line 418 "_randommodule.c"
        var $39=(($38)&4294967295); //@line 418 "_randommodule.c"
        var $40=HEAP[$39]; //@line 418 "_randommodule.c"
        var $41=((($40))|0)==0; //@line 418 "_randommodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 418 "_randommodule.c"
      case 7: // $bb6
        var $42=HEAP[$iobj]; //@line 418 "_randommodule.c"
        var $43=(($42+4)&4294967295); //@line 418 "_randommodule.c"
        var $44=HEAP[$43]; //@line 418 "_randommodule.c"
        var $45=(($44+24)&4294967295); //@line 418 "_randommodule.c"
        var $46=HEAP[$45]; //@line 418 "_randommodule.c"
        var $47=HEAP[$iobj]; //@line 418 "_randommodule.c"
        FUNCTION_TABLE[$46]($47); //@line 418 "_randommodule.c"
        __label__ = 8; break; //@line 418 "_randommodule.c"
      case 8: // $bb7
        var $48=HEAP[$remobj]; //@line 419 "_randommodule.c"
        var $49=($48)==0; //@line 419 "_randommodule.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 419 "_randommodule.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 420 "_randommodule.c"
        __label__ = 21; break; //@line 420 "_randommodule.c"
      case 10: // $bb9
        var $50=HEAP[$remobj]; //@line 421 "_randommodule.c"
        var $51=_PyInt_AsLong($50); //@line 421 "_randommodule.c"
        HEAP[$j]=$51; //@line 421 "_randommodule.c"
        var $52=HEAP[$remobj]; //@line 422 "_randommodule.c"
        var $53=(($52)&4294967295); //@line 422 "_randommodule.c"
        var $54=HEAP[$53]; //@line 422 "_randommodule.c"
        var $55=((($54) - 1)&4294967295); //@line 422 "_randommodule.c"
        var $56=HEAP[$remobj]; //@line 422 "_randommodule.c"
        var $57=(($56)&4294967295); //@line 422 "_randommodule.c"
        HEAP[$57]=$55; //@line 422 "_randommodule.c"
        var $58=HEAP[$remobj]; //@line 422 "_randommodule.c"
        var $59=(($58)&4294967295); //@line 422 "_randommodule.c"
        var $60=HEAP[$59]; //@line 422 "_randommodule.c"
        var $61=((($60))|0)==0; //@line 422 "_randommodule.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 422 "_randommodule.c"
      case 11: // $bb10
        var $62=HEAP[$remobj]; //@line 422 "_randommodule.c"
        var $63=(($62+4)&4294967295); //@line 422 "_randommodule.c"
        var $64=HEAP[$63]; //@line 422 "_randommodule.c"
        var $65=(($64+24)&4294967295); //@line 422 "_randommodule.c"
        var $66=HEAP[$65]; //@line 422 "_randommodule.c"
        var $67=HEAP[$remobj]; //@line 422 "_randommodule.c"
        FUNCTION_TABLE[$66]($67); //@line 422 "_randommodule.c"
        __label__ = 12; break; //@line 422 "_randommodule.c"
      case 12: // $bb11
        var $68=HEAP[$j]; //@line 423 "_randommodule.c"
        var $69=((($68))|0)==-1; //@line 423 "_randommodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 423 "_randommodule.c"
      case 13: // $bb12
        var $70=_PyErr_Occurred(); //@line 423 "_randommodule.c"
        var $71=($70)!=0; //@line 423 "_randommodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 423 "_randommodule.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 424 "_randommodule.c"
        __label__ = 21; break; //@line 424 "_randommodule.c"
      case 15: // $bb14
        var $72=HEAP[$mt]; //@line 425 "_randommodule.c"
        var $73=HEAP[$i]; //@line 425 "_randommodule.c"
        var $74=(($72+4*$73)&4294967295); //@line 425 "_randommodule.c"
        var $75=HEAP[$74]; //@line 425 "_randommodule.c"
        HEAP[$tmp]=$75; //@line 425 "_randommodule.c"
        var $76=HEAP[$mt]; //@line 426 "_randommodule.c"
        var $77=HEAP[$j]; //@line 426 "_randommodule.c"
        var $78=(($76+4*$77)&4294967295); //@line 426 "_randommodule.c"
        var $79=HEAP[$78]; //@line 426 "_randommodule.c"
        var $80=HEAP[$mt]; //@line 426 "_randommodule.c"
        var $81=HEAP[$i]; //@line 426 "_randommodule.c"
        var $82=(($80+4*$81)&4294967295); //@line 426 "_randommodule.c"
        HEAP[$82]=$79; //@line 426 "_randommodule.c"
        var $83=HEAP[$mt]; //@line 427 "_randommodule.c"
        var $84=HEAP[$j]; //@line 427 "_randommodule.c"
        var $85=(($83+4*$84)&4294967295); //@line 427 "_randommodule.c"
        var $86=HEAP[$tmp]; //@line 427 "_randommodule.c"
        HEAP[$85]=$86; //@line 427 "_randommodule.c"
        var $87=HEAP[$i]; //@line 413 "_randommodule.c"
        var $88=((($87) - 1)&4294967295); //@line 413 "_randommodule.c"
        HEAP[$i]=$88; //@line 413 "_randommodule.c"
        __label__ = 16; break; //@line 413 "_randommodule.c"
      case 16: // $bb15
        var $89=HEAP[$i]; //@line 413 "_randommodule.c"
        var $90=((($89))|0) > 1; //@line 413 "_randommodule.c"
        if ($90) { __label__ = 4; break; } else { __label__ = 17; break; } //@line 413 "_randommodule.c"
      case 17: // $bb16
        HEAP[$i]=0; //@line 430 "_randommodule.c"
        __label__ = 19; break; //@line 430 "_randommodule.c"
      case 18: // $bb17
        var $91=HEAP[$mt]; //@line 431 "_randommodule.c"
        var $92=HEAP[$i]; //@line 431 "_randommodule.c"
        var $93=(($91+4*$92)&4294967295); //@line 431 "_randommodule.c"
        var $94=HEAP[$93]; //@line 431 "_randommodule.c"
        var $95=HEAP[$i]; //@line 431 "_randommodule.c"
        var $96=((($94) + ($95))&4294967295); //@line 431 "_randommodule.c"
        var $97=((($96) + 1)&4294967295); //@line 431 "_randommodule.c"
        var $98=HEAP[$mt]; //@line 431 "_randommodule.c"
        var $99=HEAP[$i]; //@line 431 "_randommodule.c"
        var $100=(($98+4*$99)&4294967295); //@line 431 "_randommodule.c"
        HEAP[$100]=$97; //@line 431 "_randommodule.c"
        var $101=HEAP[$i]; //@line 430 "_randommodule.c"
        var $102=((($101) + 1)&4294967295); //@line 430 "_randommodule.c"
        HEAP[$i]=$102; //@line 430 "_randommodule.c"
        __label__ = 19; break; //@line 430 "_randommodule.c"
      case 19: // $bb18
        var $103=HEAP[$i]; //@line 430 "_randommodule.c"
        var $104=((($103))|0) <= 623; //@line 430 "_randommodule.c"
        if ($104) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 430 "_randommodule.c"
      case 20: // $bb19
        var $105=HEAP[$self_addr]; //@line 433 "_randommodule.c"
        var $106=(($105+2504)&4294967295); //@line 433 "_randommodule.c"
        HEAP[$106]=624; //@line 433 "_randommodule.c"
        var $107=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 434 "_randommodule.c"
        var $108=((($107) + 1)&4294967295); //@line 434 "_randommodule.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$108; //@line 434 "_randommodule.c"
        HEAP[$0]=__Py_NoneStruct; //@line 435 "_randommodule.c"
        __label__ = 21; break; //@line 435 "_randommodule.c"
      case 21: // $bb20
        var $109=HEAP[$0]; //@line 409 "_randommodule.c"
        HEAP[$retval]=$109; //@line 409 "_randommodule.c"
        __label__ = 22; break; //@line 409 "_randommodule.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 409 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 409 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_getrandbits($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $k=__stackBase__+16;
        var $i=__stackBase__+20;
        var $bytes=__stackBase__+24;
        var $r=__stackBase__+28;
        var $bytearray=__stackBase__+32;
        var $result=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 446 "_randommodule.c"
        var $2=_PyArg_ParseTuple($1, ((__str6)&4294967295), $k); //@line 446 "_randommodule.c"
        var $3=((($2))|0)==0; //@line 446 "_randommodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 446 "_randommodule.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 447 "_randommodule.c"
        __label__ = 12; break; //@line 447 "_randommodule.c"
      case 2: // $bb1
        var $4=HEAP[$k]; //@line 449 "_randommodule.c"
        var $5=((($4))|0) <= 0; //@line 449 "_randommodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 449 "_randommodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 450 "_randommodule.c"
        _PyErr_SetString($6, ((__str7)&4294967295)); //@line 450 "_randommodule.c"
        HEAP[$0]=0; //@line 452 "_randommodule.c"
        __label__ = 12; break; //@line 452 "_randommodule.c"
      case 4: // $bb3
        var $7=HEAP[$k]; //@line 455 "_randommodule.c"
        var $8=((($7) - 1)&4294967295); //@line 455 "_randommodule.c"
        var $9=((((($8))|0)/32)|0); //@line 455 "_randommodule.c"
        var $10=((($9) + 1)&4294967295); //@line 455 "_randommodule.c"
        var $11=((($10) * 4)&4294967295); //@line 455 "_randommodule.c"
        HEAP[$bytes]=$11; //@line 455 "_randommodule.c"
        var $12=HEAP[$bytes]; //@line 456 "_randommodule.c"
        var $13=_PyMem_Malloc($12); //@line 456 "_randommodule.c"
        HEAP[$bytearray]=$13; //@line 456 "_randommodule.c"
        var $14=HEAP[$bytearray]; //@line 457 "_randommodule.c"
        var $15=($14)==0; //@line 457 "_randommodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 457 "_randommodule.c"
      case 5: // $bb4
        var $16=_PyErr_NoMemory(); //@line 458 "_randommodule.c"
        HEAP[$0]=0; //@line 459 "_randommodule.c"
        __label__ = 12; break; //@line 459 "_randommodule.c"
      case 6: // $bb5
        HEAP[$i]=0; //@line 463 "_randommodule.c"
        __label__ = 10; break; //@line 463 "_randommodule.c"
      case 7: // $bb6
        var $17=HEAP[$self_addr]; //@line 464 "_randommodule.c"
        var $18=_genrand_int32($17); //@line 464 "_randommodule.c"
        HEAP[$r]=$18; //@line 464 "_randommodule.c"
        var $19=HEAP[$k]; //@line 465 "_randommodule.c"
        var $20=((($19))|0) <= 31; //@line 465 "_randommodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 465 "_randommodule.c"
      case 8: // $bb7
        var $21=HEAP[$k]; //@line 466 "_randommodule.c"
        var $22=((32 - ($21))&4294967295); //@line 466 "_randommodule.c"
        var $23=HEAP[$r]; //@line 466 "_randommodule.c"
        var $24=((($23))>>>0) >>> ((($22))>>>0); //@line 466 "_randommodule.c"
        HEAP[$r]=$24; //@line 466 "_randommodule.c"
        __label__ = 9; break; //@line 466 "_randommodule.c"
      case 9: // $bb8
        var $25=HEAP[$r]; //@line 467 "_randommodule.c"
        var $26=((($25)) & 255); //@line 467 "_randommodule.c"
        var $27=HEAP[$bytearray]; //@line 467 "_randommodule.c"
        var $28=HEAP[$i]; //@line 467 "_randommodule.c"
        var $29=(($27+$28)&4294967295); //@line 467 "_randommodule.c"
        HEAP[$29]=$26; //@line 467 "_randommodule.c"
        var $30=HEAP[$i]; //@line 468 "_randommodule.c"
        var $31=((($30) + 1)&4294967295); //@line 468 "_randommodule.c"
        var $32=HEAP[$r]; //@line 468 "_randommodule.c"
        var $33=((($32))>>>0) >>> 8; //@line 468 "_randommodule.c"
        var $34=((($33)) & 255); //@line 468 "_randommodule.c"
        var $35=HEAP[$bytearray]; //@line 468 "_randommodule.c"
        var $36=(($35+$31)&4294967295); //@line 468 "_randommodule.c"
        HEAP[$36]=$34; //@line 468 "_randommodule.c"
        var $37=HEAP[$i]; //@line 469 "_randommodule.c"
        var $38=((($37) + 2)&4294967295); //@line 469 "_randommodule.c"
        var $39=HEAP[$r]; //@line 469 "_randommodule.c"
        var $40=((($39))>>>0) >>> 16; //@line 469 "_randommodule.c"
        var $41=((($40)) & 255); //@line 469 "_randommodule.c"
        var $42=HEAP[$bytearray]; //@line 469 "_randommodule.c"
        var $43=(($42+$38)&4294967295); //@line 469 "_randommodule.c"
        HEAP[$43]=$41; //@line 469 "_randommodule.c"
        var $44=HEAP[$i]; //@line 470 "_randommodule.c"
        var $45=((($44) + 3)&4294967295); //@line 470 "_randommodule.c"
        var $46=HEAP[$r]; //@line 470 "_randommodule.c"
        var $47=((($46))>>>0) >>> 24; //@line 470 "_randommodule.c"
        var $48=((($47)) & 255); //@line 470 "_randommodule.c"
        var $49=HEAP[$bytearray]; //@line 470 "_randommodule.c"
        var $50=(($49+$45)&4294967295); //@line 470 "_randommodule.c"
        HEAP[$50]=$48; //@line 470 "_randommodule.c"
        var $51=HEAP[$i]; //@line 463 "_randommodule.c"
        var $52=((($51) + 4)&4294967295); //@line 463 "_randommodule.c"
        HEAP[$i]=$52; //@line 463 "_randommodule.c"
        var $53=HEAP[$k]; //@line 463 "_randommodule.c"
        var $54=((($53) - 32)&4294967295); //@line 463 "_randommodule.c"
        HEAP[$k]=$54; //@line 463 "_randommodule.c"
        __label__ = 10; break; //@line 463 "_randommodule.c"
      case 10: // $bb9
        var $55=HEAP[$i]; //@line 463 "_randommodule.c"
        var $56=HEAP[$bytes]; //@line 463 "_randommodule.c"
        var $57=((($55))|0) < ((($56))|0); //@line 463 "_randommodule.c"
        if ($57) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 463 "_randommodule.c"
      case 11: // $bb10
        var $58=HEAP[$bytes]; //@line 474 "_randommodule.c"
        var $59=HEAP[$bytearray]; //@line 474 "_randommodule.c"
        var $60=__PyLong_FromByteArray($59, $58, 1, 0); //@line 474 "_randommodule.c"
        HEAP[$result]=$60; //@line 474 "_randommodule.c"
        var $61=HEAP[$bytearray]; //@line 475 "_randommodule.c"
        _PyMem_Free($61); //@line 475 "_randommodule.c"
        var $62=HEAP[$result]; //@line 476 "_randommodule.c"
        HEAP[$0]=$62; //@line 476 "_randommodule.c"
        __label__ = 12; break; //@line 476 "_randommodule.c"
      case 12: // $bb11
        var $63=HEAP[$0]; //@line 447 "_randommodule.c"
        HEAP[$retval]=$63; //@line 447 "_randommodule.c"
        __label__ = 13; break; //@line 447 "_randommodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 447 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 447 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _random_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kwds_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $tmp=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$type_addr]=$type;
        HEAP[$args_addr]=$args;
        HEAP[$kwds_addr]=$kwds;
        var $1=HEAP[$type_addr]; //@line 485 "_randommodule.c"
        var $2=($1)==(_Random_Type); //@line 485 "_randommodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 485 "_randommodule.c"
      case 1: // $bb
        var $3=HEAP[$kwds_addr]; //@line 485 "_randommodule.c"
        var $4=__PyArg_NoKeywords(((__str8)&4294967295), $3); //@line 485 "_randommodule.c"
        var $5=((($4))|0)==0; //@line 485 "_randommodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 485 "_randommodule.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 486 "_randommodule.c"
        __label__ = 12; break; //@line 486 "_randommodule.c"
      case 3: // $bb2
        var $6=HEAP[$type_addr]; //@line 488 "_randommodule.c"
        var $7=(($6+152)&4294967295); //@line 488 "_randommodule.c"
        var $8=HEAP[$7]; //@line 488 "_randommodule.c"
        var $9=HEAP[$type_addr]; //@line 488 "_randommodule.c"
        var $10=FUNCTION_TABLE[$8]($9, 0); //@line 488 "_randommodule.c"
        var $11=$10; //@line 488 "_randommodule.c"
        HEAP[$self]=$11; //@line 488 "_randommodule.c"
        var $12=HEAP[$self]; //@line 489 "_randommodule.c"
        var $13=($12)==0; //@line 489 "_randommodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 489 "_randommodule.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 490 "_randommodule.c"
        __label__ = 12; break; //@line 490 "_randommodule.c"
      case 5: // $bb4
        var $14=HEAP[$self]; //@line 491 "_randommodule.c"
        var $15=HEAP[$args_addr]; //@line 491 "_randommodule.c"
        var $16=_random_seed($14, $15); //@line 491 "_randommodule.c"
        HEAP[$tmp]=$16; //@line 491 "_randommodule.c"
        var $17=HEAP[$tmp]; //@line 492 "_randommodule.c"
        var $18=($17)==0; //@line 492 "_randommodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 492 "_randommodule.c"
      case 6: // $bb5
        var $19=HEAP[$self]; //@line 493 "_randommodule.c"
        var $20=$19; //@line 493 "_randommodule.c"
        var $21=(($20)&4294967295); //@line 493 "_randommodule.c"
        var $22=HEAP[$21]; //@line 493 "_randommodule.c"
        var $23=((($22) - 1)&4294967295); //@line 493 "_randommodule.c"
        var $24=(($20)&4294967295); //@line 493 "_randommodule.c"
        HEAP[$24]=$23; //@line 493 "_randommodule.c"
        var $25=(($20)&4294967295); //@line 493 "_randommodule.c"
        var $26=HEAP[$25]; //@line 493 "_randommodule.c"
        var $27=((($26))|0)==0; //@line 493 "_randommodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 493 "_randommodule.c"
      case 7: // $bb6
        var $28=HEAP[$self]; //@line 493 "_randommodule.c"
        var $29=$28; //@line 493 "_randommodule.c"
        var $30=(($29+4)&4294967295); //@line 493 "_randommodule.c"
        var $31=HEAP[$30]; //@line 493 "_randommodule.c"
        var $32=(($31+24)&4294967295); //@line 493 "_randommodule.c"
        var $33=HEAP[$32]; //@line 493 "_randommodule.c"
        var $34=HEAP[$self]; //@line 493 "_randommodule.c"
        var $35=$34; //@line 493 "_randommodule.c"
        FUNCTION_TABLE[$33]($35); //@line 493 "_randommodule.c"
        __label__ = 8; break; //@line 493 "_randommodule.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 494 "_randommodule.c"
        __label__ = 12; break; //@line 494 "_randommodule.c"
      case 9: // $bb8
        var $36=HEAP[$tmp]; //@line 496 "_randommodule.c"
        var $37=(($36)&4294967295); //@line 496 "_randommodule.c"
        var $38=HEAP[$37]; //@line 496 "_randommodule.c"
        var $39=((($38) - 1)&4294967295); //@line 496 "_randommodule.c"
        var $40=HEAP[$tmp]; //@line 496 "_randommodule.c"
        var $41=(($40)&4294967295); //@line 496 "_randommodule.c"
        HEAP[$41]=$39; //@line 496 "_randommodule.c"
        var $42=HEAP[$tmp]; //@line 496 "_randommodule.c"
        var $43=(($42)&4294967295); //@line 496 "_randommodule.c"
        var $44=HEAP[$43]; //@line 496 "_randommodule.c"
        var $45=((($44))|0)==0; //@line 496 "_randommodule.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 496 "_randommodule.c"
      case 10: // $bb9
        var $46=HEAP[$tmp]; //@line 496 "_randommodule.c"
        var $47=(($46+4)&4294967295); //@line 496 "_randommodule.c"
        var $48=HEAP[$47]; //@line 496 "_randommodule.c"
        var $49=(($48+24)&4294967295); //@line 496 "_randommodule.c"
        var $50=HEAP[$49]; //@line 496 "_randommodule.c"
        var $51=HEAP[$tmp]; //@line 496 "_randommodule.c"
        FUNCTION_TABLE[$50]($51); //@line 496 "_randommodule.c"
        __label__ = 11; break; //@line 496 "_randommodule.c"
      case 11: // $bb10
        var $52=HEAP[$self]; //@line 497 "_randommodule.c"
        var $53=$52; //@line 497 "_randommodule.c"
        HEAP[$0]=$53; //@line 497 "_randommodule.c"
        __label__ = 12; break; //@line 497 "_randommodule.c"
      case 12: // $bb11
        var $54=HEAP[$0]; //@line 486 "_randommodule.c"
        HEAP[$retval]=$54; //@line 486 "_randommodule.c"
        __label__ = 13; break; //@line 486 "_randommodule.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 486 "_randommodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 486 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_random() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=_PyType_Ready(_Random_Type); //@line 573 "_randommodule.c"
        var $1=((($0))|0) < 0; //@line 573 "_randommodule.c"
        if ($1) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 573 "_randommodule.c"
      case 1: // $bb
        var $2=_Py_InitModule4(((__str21)&4294967295), 0, ((_module_doc)&4294967295), 0, 1013); //@line 575 "_randommodule.c"
        HEAP[$m]=$2; //@line 575 "_randommodule.c"
        var $3=HEAP[$m]; //@line 576 "_randommodule.c"
        var $4=($3)==0; //@line 576 "_randommodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 576 "_randommodule.c"
      case 2: // $bb1
        var $5=((_Random_Type)&4294967295); //@line 578 "_randommodule.c"
        var $6=HEAP[$5]; //@line 578 "_randommodule.c"
        var $7=((($6) + 1)&4294967295); //@line 578 "_randommodule.c"
        var $8=((_Random_Type)&4294967295); //@line 578 "_randommodule.c"
        HEAP[$8]=$7; //@line 578 "_randommodule.c"
        var $9=HEAP[$m]; //@line 579 "_randommodule.c"
        var $10=_PyModule_AddObject($9, ((__str22)&4294967295), _Random_Type); //@line 579 "_randommodule.c"
        __label__ = 3; break; //@line 579 "_randommodule.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 574 "_randommodule.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 574 "_randommodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_random"] = _init_random;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_random_random,0,_random_seed,0,_random_getstate,0,_random_setstate,0,_random_jumpahead,0,_random_getrandbits,0,_PyObject_GenericGetAttr,0,_random_new,0,_PyObject_Free,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_mag01_8316=allocate([0, 0, 0, 0, -1727483681, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
__str=allocate([115,101,101,100,0] /* seed\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0] /* keyused < keymax\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8478=allocate([114,97,110,100,111,109,95,115,101,101,100,0] /* random_seed\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0] /* state vector must be */, "i8", ALLOC_NORMAL);
__str4=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0] /* state vector is the  */, "i8", ALLOC_NORMAL);
__str5=allocate([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0] /* jumpahead requires a */, "i8", ALLOC_NORMAL);
__str6=allocate([105,58,103,101,116,114,97,110,100,98,105,116,115,0] /* i:getrandbits\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([110,117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* number of bits must  */, "i8", ALLOC_NORMAL);
__str8=allocate([82,97,110,100,111,109,40,41,0] /* Random()\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([114,97,110,100,111,109,0] /* random\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,0] /* random() -> x in the */, "i8", ALLOC_NORMAL);
__str11=allocate([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,117,114,114,101,110,116,32,116,105,109,101,46,0] /* seed([n]) -> None.   */, "i8", ALLOC_NORMAL);
__str12=allocate([103,101,116,115,116,97,116,101,0] /* getstate\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0] /* getstate() -> tuple  */, "i8", ALLOC_NORMAL);
__str14=allocate([115,101,116,115,116,97,116,101,0] /* setstate\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,116,111,114,32,115,116,97,116,101,46,0] /* setstate(state) -> N */, "i8", ALLOC_NORMAL);
__str16=allocate([106,117,109,112,97,104,101,97,100,0] /* jumpahead\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0] /* jumpahead(int) -> No */, "i8", ALLOC_NORMAL);
__str18=allocate([103,101,116,114,97,110,100,98,105,116,115,0] /* getrandbits\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0] /* getrandbits(k) -> x. */, "i8", ALLOC_NORMAL);
_random_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_random_doc=allocate([82,97,110,100,111,109,40,41,32,45,62,32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0] /* Random() -> create a */, "i8", ALLOC_NORMAL);
__str20=allocate([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0] /* _random.Random\00 */, "i8", ALLOC_NORMAL);
_Random_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2508, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0] /* Module implements th */, "i8", ALLOC_NORMAL);
__str21=allocate([95,114,97,110,100,111,109,0] /* _random\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([82,97,110,100,111,109,0] /* Random\00 */, "i8", ALLOC_NORMAL);
HEAP[_random_methods]=((__str9)&4294967295);
HEAP[_random_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_random_methods+12]=((__str10)&4294967295);
HEAP[_random_methods+16]=((__str)&4294967295);
HEAP[_random_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_random_methods+28]=((__str11)&4294967295);
HEAP[_random_methods+32]=((__str12)&4294967295);
HEAP[_random_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_random_methods+44]=((__str13)&4294967295);
HEAP[_random_methods+48]=((__str14)&4294967295);
HEAP[_random_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_random_methods+60]=((__str15)&4294967295);
HEAP[_random_methods+64]=((__str16)&4294967295);
HEAP[_random_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_random_methods+76]=((__str17)&4294967295);
HEAP[_random_methods+80]=((__str18)&4294967295);
HEAP[_random_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_random_methods+92]=((__str19)&4294967295);
HEAP[_Random_Type+12]=((__str20)&4294967295);
HEAP[_Random_Type+72]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_Random_Type+88]=((_random_doc)&4294967295);
HEAP[_Random_Type+116]=((_random_methods)&4294967295);
HEAP[_Random_Type+156]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_Random_Type+160]=(FUNCTION_TABLE_OFFSET + 18);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

