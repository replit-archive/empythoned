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



var $0___SIZE = 256; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
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
  
var _PyExc_ValueError;
var __str;
var _ImageopError;
var __str1;
var __str2;
var __str3;
var _ImageopDict;
var _bcos_8350;
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
var _imageop_methods;
var _Py_Py3kWarningFlag;
var _PyExc_DeprecationWarning;
var __str33;
var __str34;
var __str35;
var __str36;





















  function _check_coordonnate($value, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $value_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$value_addr]=$value;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$value_addr]; //@line 36 "imageop.c"
        var $2=((($1))|0) > 0; //@line 36 "imageop.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 36 "imageop.c"
      case 1: // $bb
        HEAP[$0]=1; //@line 37 "imageop.c"
        __label__ = 3; break; //@line 37 "imageop.c"
      case 2: // $bb1
        var $3=HEAP[_PyExc_ValueError]; //@line 38 "imageop.c"
        var $4=HEAP[$name_addr]; //@line 38 "imageop.c"
        var $5=_PyErr_Format($3, ((__str)&4294967295), $4); //@line 38 "imageop.c"
        HEAP[$0]=0; //@line 39 "imageop.c"
        __label__ = 3; break; //@line 39 "imageop.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 37 "imageop.c"
        HEAP[$retval]=$6; //@line 37 "imageop.c"
        __label__ = 4; break; //@line 37 "imageop.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 37 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 37 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_multiply_size($product, $x, $xname, $y, $yname, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $product_addr=__stackBase__;
        var $x_addr=__stackBase__+4;
        var $xname_addr=__stackBase__+8;
        var $y_addr=__stackBase__+12;
        var $yname_addr=__stackBase__+16;
        var $size_addr=__stackBase__+20;
        var $retval=__stackBase__+24;
        var $0=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$product_addr]=$product;
        HEAP[$x_addr]=$x;
        HEAP[$xname_addr]=$xname;
        HEAP[$y_addr]=$y;
        HEAP[$yname_addr]=$yname;
        HEAP[$size_addr]=$size;
        var $1=HEAP[$x_addr]; //@line 49 "imageop.c"
        var $2=HEAP[$xname_addr]; //@line 49 "imageop.c"
        var $3=_check_coordonnate($1, $2); //@line 49 "imageop.c"
        var $4=((($3))|0)==0; //@line 49 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 49 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 50 "imageop.c"
        __label__ = 7; break; //@line 50 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y_addr]; //@line 51 "imageop.c"
        var $6=HEAP[$yname_addr]; //@line 51 "imageop.c"
        var $7=_check_coordonnate($5, $6); //@line 51 "imageop.c"
        var $8=((($7))|0)==0; //@line 51 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 51 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 52 "imageop.c"
        __label__ = 7; break; //@line 52 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$product_addr]; //@line 53 "imageop.c"
        var $10=HEAP[$y_addr]; //@line 53 "imageop.c"
        var $11=((((($9))|0)/((($10))|0))|0); //@line 53 "imageop.c"
        var $12=HEAP[$x_addr]; //@line 53 "imageop.c"
        var $13=((((($11))|0)/((($12))|0))|0); //@line 53 "imageop.c"
        var $14=HEAP[$size_addr]; //@line 53 "imageop.c"
        var $15=((($13))|0)==((($14))|0); //@line 53 "imageop.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 53 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=1; //@line 54 "imageop.c"
        __label__ = 7; break; //@line 54 "imageop.c"
      case 6: // $bb5
        var $16=HEAP[_ImageopError]; //@line 55 "imageop.c"
        _PyErr_SetString($16, ((__str1)&4294967295)); //@line 55 "imageop.c"
        HEAP[$0]=0; //@line 56 "imageop.c"
        __label__ = 7; break; //@line 56 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$0]; //@line 50 "imageop.c"
        HEAP[$retval]=$17; //@line 50 "imageop.c"
        __label__ = 8; break; //@line 50 "imageop.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 50 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 50 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_multiply($product, $x, $y) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $product_addr=__stackBase__;
        var $x_addr=__stackBase__+4;
        var $y_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$product_addr]=$product;
        HEAP[$x_addr]=$x;
        HEAP[$y_addr]=$y;
        var $1=HEAP[$product_addr]; //@line 66 "imageop.c"
        var $2=HEAP[$x_addr]; //@line 66 "imageop.c"
        var $3=HEAP[$y_addr]; //@line 66 "imageop.c"
        var $4=_check_multiply_size($1, $2, ((__str2)&4294967295), $3, ((__str3)&4294967295), 1); //@line 66 "imageop.c"
        HEAP[$0]=$4; //@line 66 "imageop.c"
        var $5=HEAP[$0]; //@line 66 "imageop.c"
        HEAP[$retval]=$5; //@line 66 "imageop.c"
        __label__ = 1; break; //@line 66 "imageop.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 66 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 66 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_backward_compatible() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $bco=__stackBase__+8;
        var $rc=__stackBase__+12;
        var $_alloca_point_=0;
        var $1=HEAP[_ImageopDict]; //@line 93 "imageop.c"
        var $2=($1)==0; //@line 93 "imageop.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "imageop.c"
      case 1: // $bb
        HEAP[$0]=1; //@line 94 "imageop.c"
        __label__ = 12; break; //@line 94 "imageop.c"
      case 2: // $bb1
        var $3=HEAP[_bcos_8350]; //@line 95 "imageop.c"
        var $4=($3)==0; //@line 95 "imageop.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 95 "imageop.c"
      case 3: // $bb2
        var $5=_PyString_FromString(((__str4)&4294967295)); //@line 97 "imageop.c"
        HEAP[_bcos_8350]=$5; //@line 97 "imageop.c"
        var $6=HEAP[_bcos_8350]; //@line 98 "imageop.c"
        var $7=($6)==0; //@line 98 "imageop.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 98 "imageop.c"
      case 4: // $bb3
        HEAP[$0]=1; //@line 99 "imageop.c"
        __label__ = 12; break; //@line 99 "imageop.c"
      case 5: // $bb4
        var $8=HEAP[_bcos_8350]; //@line 101 "imageop.c"
        var $9=HEAP[_ImageopDict]; //@line 101 "imageop.c"
        var $10=_PyDict_GetItem($9, $8); //@line 101 "imageop.c"
        HEAP[$bco]=$10; //@line 101 "imageop.c"
        var $11=HEAP[$bco]; //@line 102 "imageop.c"
        var $12=($11)==0; //@line 102 "imageop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 102 "imageop.c"
      case 6: // $bb5
        HEAP[$0]=1; //@line 103 "imageop.c"
        __label__ = 12; break; //@line 103 "imageop.c"
      case 7: // $bb6
        var $13=HEAP[$bco]; //@line 104 "imageop.c"
        var $14=(($13+4)&4294967295); //@line 104 "imageop.c"
        var $15=HEAP[$14]; //@line 104 "imageop.c"
        var $16=(($15+84)&4294967295); //@line 104 "imageop.c"
        var $17=HEAP[$16]; //@line 104 "imageop.c"
        var $18=($17) & 8388608; //@line 104 "imageop.c"
        var $19=((($18))|0)==0; //@line 104 "imageop.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 104 "imageop.c"
      case 8: // $bb7
        HEAP[$0]=1; //@line 105 "imageop.c"
        __label__ = 12; break; //@line 105 "imageop.c"
      case 9: // $bb8
        var $20=HEAP[$bco]; //@line 106 "imageop.c"
        var $21=_PyInt_AsLong($20); //@line 106 "imageop.c"
        HEAP[$rc]=$21; //@line 106 "imageop.c"
        var $22=_PyErr_Occurred(); //@line 107 "imageop.c"
        var $23=($22)!=0; //@line 107 "imageop.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 107 "imageop.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 109 "imageop.c"
        HEAP[$rc]=1; //@line 110 "imageop.c"
        __label__ = 11; break; //@line 110 "imageop.c"
      case 11: // $bb10
        var $24=HEAP[$rc]; //@line 112 "imageop.c"
        var $25=((($24))|0)!=0; //@line 112 "imageop.c"
        var $26=unSign(($25), 1, 0); //@line 112 "imageop.c"
        HEAP[$0]=$26; //@line 112 "imageop.c"
        __label__ = 12; break; //@line 112 "imageop.c"
      case 12: // $bb11
        var $27=HEAP[$0]; //@line 94 "imageop.c"
        HEAP[$retval]=$27; //@line 94 "imageop.c"
        __label__ = 13; break; //@line 94 "imageop.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 94 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 94 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_crop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 96; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 96);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_18=__stackBase__+12;
        var $iftmp_15=__stackBase__+16;
        var $0=__stackBase__+20;
        var $cp=__stackBase__+24;
        var $ncp=__stackBase__+28;
        var $nsp=__stackBase__+32;
        var $nlp=__stackBase__+36;
        var $len=__stackBase__+40;
        var $size=__stackBase__+44;
        var $x=__stackBase__+48;
        var $y=__stackBase__+52;
        var $newx1=__stackBase__+56;
        var $newx2=__stackBase__+60;
        var $newy1=__stackBase__+64;
        var $newy2=__stackBase__+68;
        var $nlen=__stackBase__+72;
        var $ix=__stackBase__+76;
        var $iy=__stackBase__+80;
        var $xstep=__stackBase__+84;
        var $ystep=__stackBase__+88;
        var $rv=__stackBase__+92;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 125 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str5)&4294967295), $cp, $len, $size, $x, $y, $newx1, $newy1, $newx2, $newy2); //@line 125 "imageop.c"
        var $3=((($2))|0)==0; //@line 125 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 127 "imageop.c"
        __label__ = 38; break; //@line 127 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 129 "imageop.c"
        var $5=((($4))|0)!=1; //@line 129 "imageop.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 129 "imageop.c"
      case 3: // $bb2
        var $6=HEAP[$size]; //@line 129 "imageop.c"
        var $7=((($6))|0)!=2; //@line 129 "imageop.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 129 "imageop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 129 "imageop.c"
        var $9=((($8))|0)!=4; //@line 129 "imageop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 129 "imageop.c"
      case 5: // $bb4
        var $10=HEAP[_ImageopError]; //@line 130 "imageop.c"
        _PyErr_SetString($10, ((__str6)&4294967295)); //@line 130 "imageop.c"
        HEAP[$0]=0; //@line 131 "imageop.c"
        __label__ = 38; break; //@line 131 "imageop.c"
      case 6: // $bb5
        var $11=HEAP[$size]; //@line 133 "imageop.c"
        var $12=HEAP[$y]; //@line 133 "imageop.c"
        var $13=HEAP[$x]; //@line 133 "imageop.c"
        var $14=HEAP[$len]; //@line 133 "imageop.c"
        var $15=_check_multiply_size($14, $13, ((__str2)&4294967295), $12, ((__str3)&4294967295), $11); //@line 133 "imageop.c"
        var $16=((($15))|0)==0; //@line 133 "imageop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 133 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 134 "imageop.c"
        __label__ = 38; break; //@line 134 "imageop.c"
      case 8: // $bb7
        var $17=HEAP[$newx1]; //@line 136 "imageop.c"
        var $18=HEAP[$newx2]; //@line 136 "imageop.c"
        var $19=((($17))|0) < ((($18))|0); //@line 136 "imageop.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 136 "imageop.c"
      case 9: // $bb8
        HEAP[$iftmp_15]=1; //@line 136 "imageop.c"
        __label__ = 11; break; //@line 136 "imageop.c"
      case 10: // $bb9
        HEAP[$iftmp_15]=-1; //@line 136 "imageop.c"
        __label__ = 11; break; //@line 136 "imageop.c"
      case 11: // $bb10
        var $20=HEAP[$iftmp_15]; //@line 136 "imageop.c"
        HEAP[$xstep]=$20; //@line 136 "imageop.c"
        var $21=HEAP[$newy1]; //@line 137 "imageop.c"
        var $22=HEAP[$newy2]; //@line 137 "imageop.c"
        var $23=((($21))|0) < ((($22))|0); //@line 137 "imageop.c"
        if ($23) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 137 "imageop.c"
      case 12: // $bb11
        HEAP[$iftmp_18]=1; //@line 137 "imageop.c"
        __label__ = 14; break; //@line 137 "imageop.c"
      case 13: // $bb12
        HEAP[$iftmp_18]=-1; //@line 137 "imageop.c"
        __label__ = 14; break; //@line 137 "imageop.c"
      case 14: // $bb13
        var $24=HEAP[$iftmp_18]; //@line 137 "imageop.c"
        HEAP[$ystep]=$24; //@line 137 "imageop.c"
        var $25=HEAP[$newx2]; //@line 139 "imageop.c"
        var $26=HEAP[$newx1]; //@line 139 "imageop.c"
        var $27=((($25) - ($26))&4294967295); //@line 139 "imageop.c"
        var $neg=((0 - ($27))&4294967295); //@line 139 "imageop.c"
        var $abscond=((($27))|0) >= 0; //@line 139 "imageop.c"
        var $abs=($abscond) ? ($27) : ($neg); //@line 139 "imageop.c"
        var $28=((($abs) + 1)&4294967295); //@line 139 "imageop.c"
        var $29=HEAP[$newy2]; //@line 139 "imageop.c"
        var $30=HEAP[$newy1]; //@line 139 "imageop.c"
        var $31=((($29) - ($30))&4294967295); //@line 139 "imageop.c"
        var $neg15=((0 - ($31))&4294967295); //@line 139 "imageop.c"
        var $abscond16=((($31))|0) >= 0; //@line 139 "imageop.c"
        var $abs17=($abscond16) ? ($31) : ($neg15); //@line 139 "imageop.c"
        var $32=((($abs17) + 1)&4294967295); //@line 139 "imageop.c"
        var $33=((($28) * ($32))&4294967295); //@line 139 "imageop.c"
        var $34=HEAP[$size]; //@line 139 "imageop.c"
        var $35=((($33) * ($34))&4294967295); //@line 139 "imageop.c"
        HEAP[$nlen]=$35; //@line 139 "imageop.c"
        var $36=HEAP[$size]; //@line 140 "imageop.c"
        var $37=HEAP[$newy2]; //@line 140 "imageop.c"
        var $38=HEAP[$newy1]; //@line 140 "imageop.c"
        var $39=((($37) - ($38))&4294967295); //@line 140 "imageop.c"
        var $neg19=((0 - ($39))&4294967295); //@line 140 "imageop.c"
        var $abscond20=((($39))|0) >= 0; //@line 140 "imageop.c"
        var $abs21=($abscond20) ? ($39) : ($neg19); //@line 140 "imageop.c"
        var $40=((($abs21) + 1)&4294967295); //@line 140 "imageop.c"
        var $41=HEAP[$newx2]; //@line 140 "imageop.c"
        var $42=HEAP[$newx1]; //@line 140 "imageop.c"
        var $43=((($41) - ($42))&4294967295); //@line 140 "imageop.c"
        var $neg23=((0 - ($43))&4294967295); //@line 140 "imageop.c"
        var $abscond24=((($43))|0) >= 0; //@line 140 "imageop.c"
        var $abs25=($abscond24) ? ($43) : ($neg23); //@line 140 "imageop.c"
        var $44=((($abs25) + 1)&4294967295); //@line 140 "imageop.c"
        var $45=HEAP[$nlen]; //@line 140 "imageop.c"
        var $46=_check_multiply_size($45, $44, ((__str7)&4294967295), $40, ((__str8)&4294967295), $36); //@line 140 "imageop.c"
        var $47=((($46))|0)==0; //@line 140 "imageop.c"
        if ($47) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 140 "imageop.c"
      case 15: // $bb27
        HEAP[$0]=0; //@line 141 "imageop.c"
        __label__ = 38; break; //@line 141 "imageop.c"
      case 16: // $bb28
        var $48=HEAP[$nlen]; //@line 142 "imageop.c"
        var $49=_PyString_FromStringAndSize(0, $48); //@line 142 "imageop.c"
        HEAP[$rv]=$49; //@line 142 "imageop.c"
        var $50=HEAP[$rv]; //@line 143 "imageop.c"
        var $51=($50)==0; //@line 143 "imageop.c"
        if ($51) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 143 "imageop.c"
      case 17: // $bb29
        HEAP[$0]=0; //@line 144 "imageop.c"
        __label__ = 38; break; //@line 144 "imageop.c"
      case 18: // $bb30
        var $52=HEAP[$rv]; //@line 145 "imageop.c"
        var $53=_PyString_AsString($52); //@line 145 "imageop.c"
        HEAP[$ncp]=$53; //@line 145 "imageop.c"
        var $54=HEAP[$ncp]; //@line 146 "imageop.c"
        var $55=$54; //@line 146 "imageop.c"
        HEAP[$nsp]=$55; //@line 146 "imageop.c"
        var $56=HEAP[$ncp]; //@line 147 "imageop.c"
        var $57=$56; //@line 147 "imageop.c"
        HEAP[$nlp]=$57; //@line 147 "imageop.c"
        var $58=HEAP[$newy2]; //@line 148 "imageop.c"
        var $59=HEAP[$ystep]; //@line 148 "imageop.c"
        var $60=((($58) + ($59))&4294967295); //@line 148 "imageop.c"
        HEAP[$newy2]=$60; //@line 148 "imageop.c"
        var $61=HEAP[$newx2]; //@line 149 "imageop.c"
        var $62=HEAP[$xstep]; //@line 149 "imageop.c"
        var $63=((($61) + ($62))&4294967295); //@line 149 "imageop.c"
        HEAP[$newx2]=$63; //@line 149 "imageop.c"
        var $64=HEAP[$newy1]; //@line 150 "imageop.c"
        HEAP[$iy]=$64; //@line 150 "imageop.c"
        __label__ = 36; break; //@line 150 "imageop.c"
      case 19: // $bb31
        var $65=HEAP[$newx1]; //@line 151 "imageop.c"
        HEAP[$ix]=$65; //@line 151 "imageop.c"
        __label__ = 34; break; //@line 151 "imageop.c"
      case 20: // $bb32
        var $66=HEAP[$iy]; //@line 152 "imageop.c"
        var $67=((($66))|0) < 0; //@line 152 "imageop.c"
        if ($67) { __label__ = 24; break; } else { __label__ = 21; break; } //@line 152 "imageop.c"
      case 21: // $bb33
        var $68=HEAP[$y]; //@line 152 "imageop.c"
        var $69=HEAP[$iy]; //@line 152 "imageop.c"
        var $70=((($69))|0) >= ((($68))|0); //@line 152 "imageop.c"
        if ($70) { __label__ = 24; break; } else { __label__ = 22; break; } //@line 152 "imageop.c"
      case 22: // $bb34
        var $71=HEAP[$ix]; //@line 152 "imageop.c"
        var $72=((($71))|0) < 0; //@line 152 "imageop.c"
        if ($72) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 152 "imageop.c"
      case 23: // $bb35
        var $73=HEAP[$x]; //@line 152 "imageop.c"
        var $74=HEAP[$ix]; //@line 152 "imageop.c"
        var $75=((($74))|0) >= ((($73))|0); //@line 152 "imageop.c"
        if ($75) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 152 "imageop.c"
      case 24: // $bb36
        var $76=HEAP[$size]; //@line 153 "imageop.c"
        var $77=((($76))|0)==1; //@line 153 "imageop.c"
        if ($77) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 153 "imageop.c"
      case 25: // $bb37
        var $78=HEAP[$ncp]; //@line 154 "imageop.c"
        HEAP[$78]=0; //@line 154 "imageop.c"
        var $79=HEAP[$ncp]; //@line 154 "imageop.c"
        var $80=(($79+1)&4294967295); //@line 154 "imageop.c"
        HEAP[$ncp]=$80; //@line 154 "imageop.c"
        __label__ = 27; break; //@line 154 "imageop.c"
      case 26: // $bb38
        var $81=HEAP[$nlp]; //@line 156 "imageop.c"
        HEAP[$81]=0; //@line 156 "imageop.c"
        var $82=HEAP[$nlp]; //@line 156 "imageop.c"
        var $83=(($82+4)&4294967295); //@line 156 "imageop.c"
        HEAP[$nlp]=$83; //@line 156 "imageop.c"
        __label__ = 27; break; //@line 156 "imageop.c"
      case 27: // $bb39
        __label__ = 33; break; //@line 156 "imageop.c"
      case 28: // $bb40
        var $84=HEAP[$size]; //@line 158 "imageop.c"
        var $85=((($84))|0)==1; //@line 158 "imageop.c"
        if ($85) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 158 "imageop.c"
      case 29: // $bb41
        var $86=HEAP[$cp]; //@line 159 "imageop.c"
        var $87=HEAP[$x]; //@line 159 "imageop.c"
        var $88=HEAP[$iy]; //@line 159 "imageop.c"
        var $89=((($88) * ($87))&4294967295); //@line 159 "imageop.c"
        var $90=(($86+$89)&4294967295); //@line 159 "imageop.c"
        var $91=HEAP[$ix]; //@line 159 "imageop.c"
        var $92=(($90+$91)&4294967295); //@line 159 "imageop.c"
        var $93=HEAP[$92]; //@line 159 "imageop.c"
        var $94=HEAP[$ncp]; //@line 159 "imageop.c"
        HEAP[$94]=$93; //@line 159 "imageop.c"
        var $95=HEAP[$ncp]; //@line 159 "imageop.c"
        var $96=(($95+1)&4294967295); //@line 159 "imageop.c"
        HEAP[$ncp]=$96; //@line 159 "imageop.c"
        __label__ = 33; break; //@line 159 "imageop.c"
      case 30: // $bb42
        var $97=HEAP[$size]; //@line 160 "imageop.c"
        var $98=((($97))|0)==2; //@line 160 "imageop.c"
        if ($98) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 160 "imageop.c"
      case 31: // $bb43
        var $99=HEAP[$cp]; //@line 161 "imageop.c"
        var $100=HEAP[$x]; //@line 161 "imageop.c"
        var $101=HEAP[$iy]; //@line 161 "imageop.c"
        var $102=((($101) * ($100))&4294967295); //@line 161 "imageop.c"
        var $103=HEAP[$ix]; //@line 161 "imageop.c"
        var $104=((($102) + ($103))&4294967295); //@line 161 "imageop.c"
        var $105=((($104) * 2)&4294967295); //@line 161 "imageop.c"
        var $106=(($99+$105)&4294967295); //@line 161 "imageop.c"
        var $107=$106; //@line 161 "imageop.c"
        var $108=HEAP[$107]; //@line 161 "imageop.c"
        var $109=HEAP[$nsp]; //@line 161 "imageop.c"
        HEAP[$109]=$108; //@line 161 "imageop.c"
        var $110=HEAP[$nsp]; //@line 161 "imageop.c"
        var $111=(($110+2)&4294967295); //@line 161 "imageop.c"
        HEAP[$nsp]=$111; //@line 161 "imageop.c"
        __label__ = 33; break; //@line 161 "imageop.c"
      case 32: // $bb44
        var $112=HEAP[$cp]; //@line 163 "imageop.c"
        var $113=HEAP[$x]; //@line 163 "imageop.c"
        var $114=HEAP[$iy]; //@line 163 "imageop.c"
        var $115=((($114) * ($113))&4294967295); //@line 163 "imageop.c"
        var $116=HEAP[$ix]; //@line 163 "imageop.c"
        var $117=((($115) + ($116))&4294967295); //@line 163 "imageop.c"
        var $118=((($117) * 4)&4294967295); //@line 163 "imageop.c"
        var $119=(($112+$118)&4294967295); //@line 163 "imageop.c"
        var $120=$119; //@line 163 "imageop.c"
        var $121=HEAP[$120]; //@line 163 "imageop.c"
        var $122=HEAP[$nlp]; //@line 163 "imageop.c"
        HEAP[$122]=$121; //@line 163 "imageop.c"
        var $123=HEAP[$nlp]; //@line 163 "imageop.c"
        var $124=(($123+4)&4294967295); //@line 163 "imageop.c"
        HEAP[$nlp]=$124; //@line 163 "imageop.c"
        __label__ = 33; break; //@line 163 "imageop.c"
      case 33: // $bb45
        var $125=HEAP[$ix]; //@line 151 "imageop.c"
        var $126=HEAP[$xstep]; //@line 151 "imageop.c"
        var $127=((($125) + ($126))&4294967295); //@line 151 "imageop.c"
        HEAP[$ix]=$127; //@line 151 "imageop.c"
        __label__ = 34; break; //@line 151 "imageop.c"
      case 34: // $bb46
        var $128=HEAP[$newx2]; //@line 151 "imageop.c"
        var $129=HEAP[$ix]; //@line 151 "imageop.c"
        var $130=((($129))|0)!=((($128))|0); //@line 151 "imageop.c"
        if ($130) { __label__ = 20; break; } else { __label__ = 35; break; } //@line 151 "imageop.c"
      case 35: // $bb47
        var $131=HEAP[$iy]; //@line 150 "imageop.c"
        var $132=HEAP[$ystep]; //@line 150 "imageop.c"
        var $133=((($131) + ($132))&4294967295); //@line 150 "imageop.c"
        HEAP[$iy]=$133; //@line 150 "imageop.c"
        __label__ = 36; break; //@line 150 "imageop.c"
      case 36: // $bb48
        var $134=HEAP[$newy2]; //@line 150 "imageop.c"
        var $135=HEAP[$iy]; //@line 150 "imageop.c"
        var $136=((($135))|0)!=((($134))|0); //@line 150 "imageop.c"
        if ($136) { __label__ = 19; break; } else { __label__ = 37; break; } //@line 150 "imageop.c"
      case 37: // $bb49
        var $137=HEAP[$rv]; //@line 167 "imageop.c"
        HEAP[$0]=$137; //@line 167 "imageop.c"
        __label__ = 38; break; //@line 167 "imageop.c"
      case 38: // $bb50
        var $138=HEAP[$0]; //@line 127 "imageop.c"
        HEAP[$retval]=$138; //@line 127 "imageop.c"
        __label__ = 39; break; //@line 127 "imageop.c"
      case 39: // $return
        var $retval51=HEAP[$retval]; //@line 127 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval51; //@line 127 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_scale($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 80; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp=__stackBase__+20;
        var $nsp=__stackBase__+24;
        var $nlp=__stackBase__+28;
        var $len=__stackBase__+32;
        var $size=__stackBase__+36;
        var $x=__stackBase__+40;
        var $y=__stackBase__+44;
        var $newx=__stackBase__+48;
        var $newy=__stackBase__+52;
        var $nlen=__stackBase__+56;
        var $ix=__stackBase__+60;
        var $iy=__stackBase__+64;
        var $oix=__stackBase__+68;
        var $oiy=__stackBase__+72;
        var $rv=__stackBase__+76;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 181 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str9)&4294967295), $cp, $len, $size, $x, $y, $newx, $newy); //@line 181 "imageop.c"
        var $3=((($2))|0)==0; //@line 181 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 181 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 183 "imageop.c"
        __label__ = 24; break; //@line 183 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 185 "imageop.c"
        var $5=((($4))|0)!=1; //@line 185 "imageop.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 185 "imageop.c"
      case 3: // $bb2
        var $6=HEAP[$size]; //@line 185 "imageop.c"
        var $7=((($6))|0)!=2; //@line 185 "imageop.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 185 "imageop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 185 "imageop.c"
        var $9=((($8))|0)!=4; //@line 185 "imageop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 185 "imageop.c"
      case 5: // $bb4
        var $10=HEAP[_ImageopError]; //@line 186 "imageop.c"
        _PyErr_SetString($10, ((__str6)&4294967295)); //@line 186 "imageop.c"
        HEAP[$0]=0; //@line 187 "imageop.c"
        __label__ = 24; break; //@line 187 "imageop.c"
      case 6: // $bb5
        var $11=HEAP[$size]; //@line 189 "imageop.c"
        var $12=HEAP[$y]; //@line 189 "imageop.c"
        var $13=HEAP[$x]; //@line 189 "imageop.c"
        var $14=HEAP[$len]; //@line 189 "imageop.c"
        var $15=_check_multiply_size($14, $13, ((__str2)&4294967295), $12, ((__str3)&4294967295), $11); //@line 189 "imageop.c"
        var $16=((($15))|0)==0; //@line 189 "imageop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 189 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 190 "imageop.c"
        __label__ = 24; break; //@line 190 "imageop.c"
      case 8: // $bb7
        var $17=HEAP[$newx]; //@line 191 "imageop.c"
        var $18=HEAP[$newy]; //@line 191 "imageop.c"
        var $19=((($17) * ($18))&4294967295); //@line 191 "imageop.c"
        var $20=HEAP[$size]; //@line 191 "imageop.c"
        var $21=((($19) * ($20))&4294967295); //@line 191 "imageop.c"
        HEAP[$nlen]=$21; //@line 191 "imageop.c"
        var $22=HEAP[$size]; //@line 192 "imageop.c"
        var $23=HEAP[$newy]; //@line 192 "imageop.c"
        var $24=HEAP[$newx]; //@line 192 "imageop.c"
        var $25=HEAP[$nlen]; //@line 192 "imageop.c"
        var $26=_check_multiply_size($25, $24, ((__str10)&4294967295), $23, ((__str11)&4294967295), $22); //@line 192 "imageop.c"
        var $27=((($26))|0)==0; //@line 192 "imageop.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 192 "imageop.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 193 "imageop.c"
        __label__ = 24; break; //@line 193 "imageop.c"
      case 10: // $bb9
        var $28=HEAP[$nlen]; //@line 195 "imageop.c"
        var $29=_PyString_FromStringAndSize(0, $28); //@line 195 "imageop.c"
        HEAP[$rv]=$29; //@line 195 "imageop.c"
        var $30=HEAP[$rv]; //@line 196 "imageop.c"
        var $31=($30)==0; //@line 196 "imageop.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 196 "imageop.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 197 "imageop.c"
        __label__ = 24; break; //@line 197 "imageop.c"
      case 12: // $bb11
        var $32=HEAP[$rv]; //@line 198 "imageop.c"
        var $33=_PyString_AsString($32); //@line 198 "imageop.c"
        HEAP[$ncp]=$33; //@line 198 "imageop.c"
        var $34=HEAP[$ncp]; //@line 199 "imageop.c"
        var $35=$34; //@line 199 "imageop.c"
        HEAP[$nsp]=$35; //@line 199 "imageop.c"
        var $36=HEAP[$ncp]; //@line 200 "imageop.c"
        var $37=$36; //@line 200 "imageop.c"
        HEAP[$nlp]=$37; //@line 200 "imageop.c"
        HEAP[$iy]=0; //@line 201 "imageop.c"
        __label__ = 22; break; //@line 201 "imageop.c"
      case 13: // $bb12
        HEAP[$ix]=0; //@line 202 "imageop.c"
        __label__ = 20; break; //@line 202 "imageop.c"
      case 14: // $bb13
        var $38=HEAP[$x]; //@line 203 "imageop.c"
        var $39=HEAP[$ix]; //@line 203 "imageop.c"
        var $40=((($39) * ($38))&4294967295); //@line 203 "imageop.c"
        var $41=HEAP[$newx]; //@line 203 "imageop.c"
        var $42=((((($40))|0)/((($41))|0))|0); //@line 203 "imageop.c"
        HEAP[$oix]=$42; //@line 203 "imageop.c"
        var $43=HEAP[$y]; //@line 204 "imageop.c"
        var $44=HEAP[$iy]; //@line 204 "imageop.c"
        var $45=((($44) * ($43))&4294967295); //@line 204 "imageop.c"
        var $46=HEAP[$newy]; //@line 204 "imageop.c"
        var $47=((((($45))|0)/((($46))|0))|0); //@line 204 "imageop.c"
        HEAP[$oiy]=$47; //@line 204 "imageop.c"
        var $48=HEAP[$size]; //@line 205 "imageop.c"
        var $49=((($48))|0)==1; //@line 205 "imageop.c"
        if ($49) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 205 "imageop.c"
      case 15: // $bb14
        var $50=HEAP[$cp]; //@line 206 "imageop.c"
        var $51=HEAP[$x]; //@line 206 "imageop.c"
        var $52=HEAP[$oiy]; //@line 206 "imageop.c"
        var $53=((($52) * ($51))&4294967295); //@line 206 "imageop.c"
        var $54=(($50+$53)&4294967295); //@line 206 "imageop.c"
        var $55=HEAP[$oix]; //@line 206 "imageop.c"
        var $56=(($54+$55)&4294967295); //@line 206 "imageop.c"
        var $57=HEAP[$56]; //@line 206 "imageop.c"
        var $58=HEAP[$ncp]; //@line 206 "imageop.c"
        HEAP[$58]=$57; //@line 206 "imageop.c"
        var $59=HEAP[$ncp]; //@line 206 "imageop.c"
        var $60=(($59+1)&4294967295); //@line 206 "imageop.c"
        HEAP[$ncp]=$60; //@line 206 "imageop.c"
        __label__ = 19; break; //@line 206 "imageop.c"
      case 16: // $bb15
        var $61=HEAP[$size]; //@line 207 "imageop.c"
        var $62=((($61))|0)==2; //@line 207 "imageop.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 207 "imageop.c"
      case 17: // $bb16
        var $63=HEAP[$cp]; //@line 208 "imageop.c"
        var $64=HEAP[$x]; //@line 208 "imageop.c"
        var $65=HEAP[$oiy]; //@line 208 "imageop.c"
        var $66=((($65) * ($64))&4294967295); //@line 208 "imageop.c"
        var $67=HEAP[$oix]; //@line 208 "imageop.c"
        var $68=((($66) + ($67))&4294967295); //@line 208 "imageop.c"
        var $69=((($68) * 2)&4294967295); //@line 208 "imageop.c"
        var $70=(($63+$69)&4294967295); //@line 208 "imageop.c"
        var $71=$70; //@line 208 "imageop.c"
        var $72=HEAP[$71]; //@line 208 "imageop.c"
        var $73=HEAP[$nsp]; //@line 208 "imageop.c"
        HEAP[$73]=$72; //@line 208 "imageop.c"
        var $74=HEAP[$nsp]; //@line 208 "imageop.c"
        var $75=(($74+2)&4294967295); //@line 208 "imageop.c"
        HEAP[$nsp]=$75; //@line 208 "imageop.c"
        __label__ = 19; break; //@line 208 "imageop.c"
      case 18: // $bb17
        var $76=HEAP[$cp]; //@line 210 "imageop.c"
        var $77=HEAP[$x]; //@line 210 "imageop.c"
        var $78=HEAP[$oiy]; //@line 210 "imageop.c"
        var $79=((($78) * ($77))&4294967295); //@line 210 "imageop.c"
        var $80=HEAP[$oix]; //@line 210 "imageop.c"
        var $81=((($79) + ($80))&4294967295); //@line 210 "imageop.c"
        var $82=((($81) * 4)&4294967295); //@line 210 "imageop.c"
        var $83=(($76+$82)&4294967295); //@line 210 "imageop.c"
        var $84=$83; //@line 210 "imageop.c"
        var $85=HEAP[$84]; //@line 210 "imageop.c"
        var $86=HEAP[$nlp]; //@line 210 "imageop.c"
        HEAP[$86]=$85; //@line 210 "imageop.c"
        var $87=HEAP[$nlp]; //@line 210 "imageop.c"
        var $88=(($87+4)&4294967295); //@line 210 "imageop.c"
        HEAP[$nlp]=$88; //@line 210 "imageop.c"
        __label__ = 19; break; //@line 210 "imageop.c"
      case 19: // $bb18
        var $89=HEAP[$ix]; //@line 202 "imageop.c"
        var $90=((($89) + 1)&4294967295); //@line 202 "imageop.c"
        HEAP[$ix]=$90; //@line 202 "imageop.c"
        __label__ = 20; break; //@line 202 "imageop.c"
      case 20: // $bb19
        var $91=HEAP[$newx]; //@line 202 "imageop.c"
        var $92=HEAP[$ix]; //@line 202 "imageop.c"
        var $93=((($92))|0) < ((($91))|0); //@line 202 "imageop.c"
        if ($93) { __label__ = 14; break; } else { __label__ = 21; break; } //@line 202 "imageop.c"
      case 21: // $bb20
        var $94=HEAP[$iy]; //@line 201 "imageop.c"
        var $95=((($94) + 1)&4294967295); //@line 201 "imageop.c"
        HEAP[$iy]=$95; //@line 201 "imageop.c"
        __label__ = 22; break; //@line 201 "imageop.c"
      case 22: // $bb21
        var $96=HEAP[$newy]; //@line 201 "imageop.c"
        var $97=HEAP[$iy]; //@line 201 "imageop.c"
        var $98=((($97))|0) < ((($96))|0); //@line 201 "imageop.c"
        if ($98) { __label__ = 13; break; } else { __label__ = 23; break; } //@line 201 "imageop.c"
      case 23: // $bb22
        var $99=HEAP[$rv]; //@line 213 "imageop.c"
        HEAP[$0]=$99; //@line 213 "imageop.c"
        __label__ = 24; break; //@line 213 "imageop.c"
      case 24: // $bb23
        var $100=HEAP[$0]; //@line 183 "imageop.c"
        HEAP[$retval]=$100; //@line 183 "imageop.c"
        __label__ = 25; break; //@line 183 "imageop.c"
      case 25: // $return
        var $retval24=HEAP[$retval]; //@line 183 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 183 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_tovideo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $maxx=__stackBase__+16;
        var $maxy=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $len=__stackBase__+32;
        var $i=__stackBase__+36;
        var $cp=__stackBase__+40;
        var $ncp=__stackBase__+44;
        var $width=__stackBase__+48;
        var $rv=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 228 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str12)&4294967295), $cp, $len, $width, $maxx, $maxy); //@line 228 "imageop.c"
        var $3=((($2))|0)==0; //@line 228 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 228 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 229 "imageop.c"
        __label__ = 24; break; //@line 229 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$width]; //@line 231 "imageop.c"
        var $5=((($4))|0)!=1; //@line 231 "imageop.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 231 "imageop.c"
      case 3: // $bb2
        var $6=HEAP[$width]; //@line 231 "imageop.c"
        var $7=((($6))|0)!=4; //@line 231 "imageop.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 231 "imageop.c"
      case 4: // $bb3
        var $8=HEAP[_ImageopError]; //@line 232 "imageop.c"
        _PyErr_SetString($8, ((__str13)&4294967295)); //@line 232 "imageop.c"
        HEAP[$0]=0; //@line 233 "imageop.c"
        __label__ = 24; break; //@line 233 "imageop.c"
      case 5: // $bb4
        var $9=HEAP[$width]; //@line 235 "imageop.c"
        var $10=HEAP[$maxy]; //@line 235 "imageop.c"
        var $11=HEAP[$maxx]; //@line 235 "imageop.c"
        var $12=HEAP[$len]; //@line 235 "imageop.c"
        var $13=_check_multiply_size($12, $11, ((__str14)&4294967295), $10, ((__str15)&4294967295), $9); //@line 235 "imageop.c"
        var $14=((($13))|0)==0; //@line 235 "imageop.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 235 "imageop.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 236 "imageop.c"
        __label__ = 24; break; //@line 236 "imageop.c"
      case 7: // $bb6
        var $15=HEAP[$len]; //@line 238 "imageop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 238 "imageop.c"
        HEAP[$rv]=$16; //@line 238 "imageop.c"
        var $17=HEAP[$rv]; //@line 239 "imageop.c"
        var $18=($17)==0; //@line 239 "imageop.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 239 "imageop.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 240 "imageop.c"
        __label__ = 24; break; //@line 240 "imageop.c"
      case 9: // $bb8
        var $19=HEAP[$rv]; //@line 241 "imageop.c"
        var $20=_PyString_AsString($19); //@line 241 "imageop.c"
        HEAP[$ncp]=$20; //@line 241 "imageop.c"
        var $21=HEAP[$width]; //@line 243 "imageop.c"
        var $22=((($21))|0)==1; //@line 243 "imageop.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 243 "imageop.c"
      case 10: // $bb9
        var $23=HEAP[$maxx]; //@line 244 "imageop.c"
        var $24=HEAP[$cp]; //@line 244 "imageop.c"
        var $25=HEAP[$ncp]; //@line 244 "imageop.c"
        _llvm_memcpy_p0i8_p0i8_i32($25, $24, $23, 1, 0); //@line 244 "imageop.c"
        var $26=HEAP[$maxx]; //@line 245 "imageop.c"
        var $27=HEAP[$ncp]; //@line 245 "imageop.c"
        var $28=(($27+$26)&4294967295); //@line 245 "imageop.c"
        HEAP[$ncp]=$28; //@line 245 "imageop.c"
        HEAP[$y]=1; //@line 246 "imageop.c"
        __label__ = 15; break; //@line 246 "imageop.c"
      case 11: // $bb10
        HEAP[$x]=0; //@line 247 "imageop.c"
        __label__ = 13; break; //@line 247 "imageop.c"
      case 12: // $bb11
        var $29=HEAP[$maxx]; //@line 248 "imageop.c"
        var $30=HEAP[$y]; //@line 248 "imageop.c"
        var $31=((($30) * ($29))&4294967295); //@line 248 "imageop.c"
        var $32=HEAP[$x]; //@line 248 "imageop.c"
        var $33=((($31) + ($32))&4294967295); //@line 248 "imageop.c"
        HEAP[$i]=$33; //@line 248 "imageop.c"
        var $34=HEAP[$cp]; //@line 249 "imageop.c"
        var $35=HEAP[$i]; //@line 249 "imageop.c"
        var $36=(($34+$35)&4294967295); //@line 249 "imageop.c"
        var $37=HEAP[$36]; //@line 249 "imageop.c"
        var $38=unSign(($37), 8, 0); //@line 249 "imageop.c"
        var $39=HEAP[$cp]; //@line 249 "imageop.c"
        var $40=HEAP[$maxx]; //@line 249 "imageop.c"
        var $41=HEAP[$i]; //@line 249 "imageop.c"
        var $42=((($41) - ($40))&4294967295); //@line 249 "imageop.c"
        var $43=(($39+$42)&4294967295); //@line 249 "imageop.c"
        var $44=HEAP[$43]; //@line 249 "imageop.c"
        var $45=unSign(($44), 8, 0); //@line 249 "imageop.c"
        var $46=((($38) + ($45))&4294967295); //@line 249 "imageop.c"
        var $47=((($46))|0) >> 1; //@line 249 "imageop.c"
        var $48=((($47)) & 255); //@line 249 "imageop.c"
        var $49=HEAP[$ncp]; //@line 249 "imageop.c"
        HEAP[$49]=$48; //@line 249 "imageop.c"
        var $50=HEAP[$ncp]; //@line 249 "imageop.c"
        var $51=(($50+1)&4294967295); //@line 249 "imageop.c"
        HEAP[$ncp]=$51; //@line 249 "imageop.c"
        var $52=HEAP[$x]; //@line 247 "imageop.c"
        var $53=((($52) + 1)&4294967295); //@line 247 "imageop.c"
        HEAP[$x]=$53; //@line 247 "imageop.c"
        __label__ = 13; break; //@line 247 "imageop.c"
      case 13: // $bb12
        var $54=HEAP[$maxx]; //@line 247 "imageop.c"
        var $55=HEAP[$x]; //@line 247 "imageop.c"
        var $56=((($55))|0) < ((($54))|0); //@line 247 "imageop.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 247 "imageop.c"
      case 14: // $bb13
        var $57=HEAP[$y]; //@line 246 "imageop.c"
        var $58=((($57) + 1)&4294967295); //@line 246 "imageop.c"
        HEAP[$y]=$58; //@line 246 "imageop.c"
        __label__ = 15; break; //@line 246 "imageop.c"
      case 15: // $bb14
        var $59=HEAP[$maxy]; //@line 246 "imageop.c"
        var $60=HEAP[$y]; //@line 246 "imageop.c"
        var $61=((($60))|0) < ((($59))|0); //@line 246 "imageop.c"
        if ($61) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 246 "imageop.c"
      case 16: // $bb15
        __label__ = 23; break; //@line 246 "imageop.c"
      case 17: // $bb16
        var $62=HEAP[$maxx]; //@line 253 "imageop.c"
        var $63=((($62) * 4)&4294967295); //@line 253 "imageop.c"
        var $64=HEAP[$cp]; //@line 253 "imageop.c"
        var $65=HEAP[$ncp]; //@line 253 "imageop.c"
        _llvm_memcpy_p0i8_p0i8_i32($65, $64, $63, 1, 0); //@line 253 "imageop.c"
        var $66=HEAP[$maxx]; //@line 254 "imageop.c"
        var $67=((($66) * 4)&4294967295); //@line 254 "imageop.c"
        var $68=HEAP[$ncp]; //@line 254 "imageop.c"
        var $69=(($68+$67)&4294967295); //@line 254 "imageop.c"
        HEAP[$ncp]=$69; //@line 254 "imageop.c"
        HEAP[$y]=1; //@line 255 "imageop.c"
        __label__ = 22; break; //@line 255 "imageop.c"
      case 18: // $bb17
        HEAP[$x]=0; //@line 256 "imageop.c"
        __label__ = 20; break; //@line 256 "imageop.c"
      case 19: // $bb18
        var $70=HEAP[$maxx]; //@line 257 "imageop.c"
        var $71=HEAP[$y]; //@line 257 "imageop.c"
        var $72=((($71) * ($70))&4294967295); //@line 257 "imageop.c"
        var $73=HEAP[$x]; //@line 257 "imageop.c"
        var $74=((($72) + ($73))&4294967295); //@line 257 "imageop.c"
        var $75=((($74) * 4)&4294967295); //@line 257 "imageop.c"
        var $76=((($75) + 1)&4294967295); //@line 257 "imageop.c"
        HEAP[$i]=$76; //@line 257 "imageop.c"
        var $77=HEAP[$ncp]; //@line 258 "imageop.c"
        HEAP[$77]=0; //@line 258 "imageop.c"
        var $78=HEAP[$ncp]; //@line 258 "imageop.c"
        var $79=(($78+1)&4294967295); //@line 258 "imageop.c"
        HEAP[$ncp]=$79; //@line 258 "imageop.c"
        var $80=HEAP[$cp]; //@line 259 "imageop.c"
        var $81=HEAP[$i]; //@line 259 "imageop.c"
        var $82=(($80+$81)&4294967295); //@line 259 "imageop.c"
        var $83=HEAP[$82]; //@line 259 "imageop.c"
        var $84=unSign(($83), 8, 0); //@line 259 "imageop.c"
        var $85=HEAP[$cp]; //@line 259 "imageop.c"
        var $86=HEAP[$maxx]; //@line 259 "imageop.c"
        var $87=((($86) * 4)&4294967295); //@line 259 "imageop.c"
        var $88=HEAP[$i]; //@line 259 "imageop.c"
        var $89=((($88) - ($87))&4294967295); //@line 259 "imageop.c"
        var $90=(($85+$89)&4294967295); //@line 259 "imageop.c"
        var $91=HEAP[$90]; //@line 259 "imageop.c"
        var $92=unSign(($91), 8, 0); //@line 259 "imageop.c"
        var $93=((($84) + ($92))&4294967295); //@line 259 "imageop.c"
        var $94=((($93))|0) >> 1; //@line 259 "imageop.c"
        var $95=((($94)) & 255); //@line 259 "imageop.c"
        var $96=HEAP[$ncp]; //@line 259 "imageop.c"
        HEAP[$96]=$95; //@line 259 "imageop.c"
        var $97=HEAP[$ncp]; //@line 259 "imageop.c"
        var $98=(($97+1)&4294967295); //@line 259 "imageop.c"
        HEAP[$ncp]=$98; //@line 259 "imageop.c"
        var $99=HEAP[$i]; //@line 260 "imageop.c"
        var $100=((($99) + 1)&4294967295); //@line 260 "imageop.c"
        HEAP[$i]=$100; //@line 260 "imageop.c"
        var $101=HEAP[$cp]; //@line 261 "imageop.c"
        var $102=HEAP[$i]; //@line 261 "imageop.c"
        var $103=(($101+$102)&4294967295); //@line 261 "imageop.c"
        var $104=HEAP[$103]; //@line 261 "imageop.c"
        var $105=unSign(($104), 8, 0); //@line 261 "imageop.c"
        var $106=HEAP[$cp]; //@line 261 "imageop.c"
        var $107=HEAP[$maxx]; //@line 261 "imageop.c"
        var $108=((($107) * 4)&4294967295); //@line 261 "imageop.c"
        var $109=HEAP[$i]; //@line 261 "imageop.c"
        var $110=((($109) - ($108))&4294967295); //@line 261 "imageop.c"
        var $111=(($106+$110)&4294967295); //@line 261 "imageop.c"
        var $112=HEAP[$111]; //@line 261 "imageop.c"
        var $113=unSign(($112), 8, 0); //@line 261 "imageop.c"
        var $114=((($105) + ($113))&4294967295); //@line 261 "imageop.c"
        var $115=((($114))|0) >> 1; //@line 261 "imageop.c"
        var $116=((($115)) & 255); //@line 261 "imageop.c"
        var $117=HEAP[$ncp]; //@line 261 "imageop.c"
        HEAP[$117]=$116; //@line 261 "imageop.c"
        var $118=HEAP[$ncp]; //@line 261 "imageop.c"
        var $119=(($118+1)&4294967295); //@line 261 "imageop.c"
        HEAP[$ncp]=$119; //@line 261 "imageop.c"
        var $120=HEAP[$i]; //@line 262 "imageop.c"
        var $121=((($120) + 1)&4294967295); //@line 262 "imageop.c"
        HEAP[$i]=$121; //@line 262 "imageop.c"
        var $122=HEAP[$cp]; //@line 263 "imageop.c"
        var $123=HEAP[$i]; //@line 263 "imageop.c"
        var $124=(($122+$123)&4294967295); //@line 263 "imageop.c"
        var $125=HEAP[$124]; //@line 263 "imageop.c"
        var $126=unSign(($125), 8, 0); //@line 263 "imageop.c"
        var $127=HEAP[$cp]; //@line 263 "imageop.c"
        var $128=HEAP[$maxx]; //@line 263 "imageop.c"
        var $129=((($128) * 4)&4294967295); //@line 263 "imageop.c"
        var $130=HEAP[$i]; //@line 263 "imageop.c"
        var $131=((($130) - ($129))&4294967295); //@line 263 "imageop.c"
        var $132=(($127+$131)&4294967295); //@line 263 "imageop.c"
        var $133=HEAP[$132]; //@line 263 "imageop.c"
        var $134=unSign(($133), 8, 0); //@line 263 "imageop.c"
        var $135=((($126) + ($134))&4294967295); //@line 263 "imageop.c"
        var $136=((($135))|0) >> 1; //@line 263 "imageop.c"
        var $137=((($136)) & 255); //@line 263 "imageop.c"
        var $138=HEAP[$ncp]; //@line 263 "imageop.c"
        HEAP[$138]=$137; //@line 263 "imageop.c"
        var $139=HEAP[$ncp]; //@line 263 "imageop.c"
        var $140=(($139+1)&4294967295); //@line 263 "imageop.c"
        HEAP[$ncp]=$140; //@line 263 "imageop.c"
        var $141=HEAP[$x]; //@line 256 "imageop.c"
        var $142=((($141) + 1)&4294967295); //@line 256 "imageop.c"
        HEAP[$x]=$142; //@line 256 "imageop.c"
        __label__ = 20; break; //@line 256 "imageop.c"
      case 20: // $bb19
        var $143=HEAP[$maxx]; //@line 256 "imageop.c"
        var $144=HEAP[$x]; //@line 256 "imageop.c"
        var $145=((($144))|0) < ((($143))|0); //@line 256 "imageop.c"
        if ($145) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 256 "imageop.c"
      case 21: // $bb20
        var $146=HEAP[$y]; //@line 255 "imageop.c"
        var $147=((($146) + 1)&4294967295); //@line 255 "imageop.c"
        HEAP[$y]=$147; //@line 255 "imageop.c"
        __label__ = 22; break; //@line 255 "imageop.c"
      case 22: // $bb21
        var $148=HEAP[$maxy]; //@line 255 "imageop.c"
        var $149=HEAP[$y]; //@line 255 "imageop.c"
        var $150=((($149))|0) < ((($148))|0); //@line 255 "imageop.c"
        if ($150) { __label__ = 18; break; } else { __label__ = 23; break; } //@line 255 "imageop.c"
      case 23: // $bb22
        var $151=HEAP[$rv]; //@line 267 "imageop.c"
        HEAP[$0]=$151; //@line 267 "imageop.c"
        __label__ = 24; break; //@line 267 "imageop.c"
      case 24: // $bb23
        var $152=HEAP[$0]; //@line 229 "imageop.c"
        HEAP[$retval]=$152; //@line 229 "imageop.c"
        __label__ = 25; break; //@line 229 "imageop.c"
      case 25: // $return
        var $retval24=HEAP[$retval]; //@line 229 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 229 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2mono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tres=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $len=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $ovalue=__stackBase__+40;
        var $rv=__stackBase__+41;
        var $i=__stackBase__+45;
        var $bit=__stackBase__+49;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 280 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str12)&4294967295), $cp, $len, $x, $y, $tres); //@line 280 "imageop.c"
        var $3=((($2))|0)==0; //@line 280 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 280 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 281 "imageop.c"
        __label__ = 16; break; //@line 281 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 283 "imageop.c"
        var $5=HEAP[$x]; //@line 283 "imageop.c"
        var $6=HEAP[$len]; //@line 283 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 283 "imageop.c"
        var $8=((($7))|0)==0; //@line 283 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 283 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 284 "imageop.c"
        __label__ = 16; break; //@line 284 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 286 "imageop.c"
        var $10=((($9) + 7)&4294967295); //@line 286 "imageop.c"
        var $11=((((($10))|0)/8)|0); //@line 286 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 286 "imageop.c"
        HEAP[$rv]=$12; //@line 286 "imageop.c"
        var $13=HEAP[$rv]; //@line 287 "imageop.c"
        var $14=($13)==0; //@line 287 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 287 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 288 "imageop.c"
        __label__ = 16; break; //@line 288 "imageop.c"
      case 6: // $bb5
        var $15=HEAP[$rv]; //@line 289 "imageop.c"
        var $16=_PyString_AsString($15); //@line 289 "imageop.c"
        HEAP[$ncp]=$16; //@line 289 "imageop.c"
        HEAP[$bit]=128; //@line 291 "imageop.c"
        HEAP[$ovalue]=0; //@line 292 "imageop.c"
        HEAP[$i]=0; //@line 293 "imageop.c"
        __label__ = 12; break; //@line 293 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$cp]; //@line 294 "imageop.c"
        var $18=HEAP[$i]; //@line 294 "imageop.c"
        var $19=(($17+$18)&4294967295); //@line 294 "imageop.c"
        var $20=HEAP[$19]; //@line 294 "imageop.c"
        var $21=unSign(($20), 8, 0); //@line 294 "imageop.c"
        var $22=HEAP[$tres]; //@line 294 "imageop.c"
        var $23=((($21))|0) > ((($22))|0); //@line 294 "imageop.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 294 "imageop.c"
      case 8: // $bb7
        var $24=HEAP[$bit]; //@line 295 "imageop.c"
        var $25=((($24)) & 255); //@line 295 "imageop.c"
        var $26=HEAP[$ovalue]; //@line 295 "imageop.c"
        var $27=($25) | ($26); //@line 295 "imageop.c"
        HEAP[$ovalue]=$27; //@line 295 "imageop.c"
        __label__ = 9; break; //@line 295 "imageop.c"
      case 9: // $bb8
        var $28=HEAP[$bit]; //@line 296 "imageop.c"
        var $29=((($28))|0) >> 1; //@line 296 "imageop.c"
        HEAP[$bit]=$29; //@line 296 "imageop.c"
        var $30=HEAP[$bit]; //@line 297 "imageop.c"
        var $31=((($30))|0)==0; //@line 297 "imageop.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 297 "imageop.c"
      case 10: // $bb9
        var $32=HEAP[$ncp]; //@line 298 "imageop.c"
        var $33=HEAP[$ovalue]; //@line 298 "imageop.c"
        HEAP[$32]=$33; //@line 298 "imageop.c"
        var $34=HEAP[$ncp]; //@line 298 "imageop.c"
        var $35=(($34+1)&4294967295); //@line 298 "imageop.c"
        HEAP[$ncp]=$35; //@line 298 "imageop.c"
        HEAP[$bit]=128; //@line 299 "imageop.c"
        HEAP[$ovalue]=0; //@line 300 "imageop.c"
        __label__ = 11; break; //@line 300 "imageop.c"
      case 11: // $bb10
        var $36=HEAP[$i]; //@line 293 "imageop.c"
        var $37=((($36) + 1)&4294967295); //@line 293 "imageop.c"
        HEAP[$i]=$37; //@line 293 "imageop.c"
        __label__ = 12; break; //@line 293 "imageop.c"
      case 12: // $bb11
        var $38=HEAP[$len]; //@line 293 "imageop.c"
        var $39=HEAP[$i]; //@line 293 "imageop.c"
        var $40=((($39))|0) < ((($38))|0); //@line 293 "imageop.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 293 "imageop.c"
      case 13: // $bb12
        var $41=HEAP[$bit]; //@line 303 "imageop.c"
        var $42=((($41))|0)!=128; //@line 303 "imageop.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 303 "imageop.c"
      case 14: // $bb13
        var $43=HEAP[$ncp]; //@line 304 "imageop.c"
        var $44=HEAP[$ovalue]; //@line 304 "imageop.c"
        HEAP[$43]=$44; //@line 304 "imageop.c"
        var $45=HEAP[$ncp]; //@line 304 "imageop.c"
        var $46=(($45+1)&4294967295); //@line 304 "imageop.c"
        HEAP[$ncp]=$46; //@line 304 "imageop.c"
        __label__ = 15; break; //@line 304 "imageop.c"
      case 15: // $bb14
        var $47=HEAP[$rv]; //@line 305 "imageop.c"
        HEAP[$0]=$47; //@line 305 "imageop.c"
        __label__ = 16; break; //@line 305 "imageop.c"
      case 16: // $bb15
        var $48=HEAP[$0]; //@line 281 "imageop.c"
        HEAP[$retval]=$48; //@line 281 "imageop.c"
        __label__ = 17; break; //@line 281 "imageop.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 281 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 281 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2grey4($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 49; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 49);
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
        var $len=__stackBase__+24;
        var $cp=__stackBase__+28;
        var $ncp=__stackBase__+32;
        var $ovalue=__stackBase__+36;
        var $rv=__stackBase__+37;
        var $i=__stackBase__+41;
        var $pos=__stackBase__+45;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 319 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 319 "imageop.c"
        var $3=((($2))|0)==0; //@line 319 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 319 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 320 "imageop.c"
        __label__ = 14; break; //@line 320 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 322 "imageop.c"
        var $5=HEAP[$x]; //@line 322 "imageop.c"
        var $6=HEAP[$len]; //@line 322 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 322 "imageop.c"
        var $8=((($7))|0)==0; //@line 322 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 322 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 323 "imageop.c"
        __label__ = 14; break; //@line 323 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 325 "imageop.c"
        var $10=((($9) + 1)&4294967295); //@line 325 "imageop.c"
        var $11=((((($10))|0)/2)|0); //@line 325 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 325 "imageop.c"
        HEAP[$rv]=$12; //@line 325 "imageop.c"
        var $13=HEAP[$rv]; //@line 326 "imageop.c"
        var $14=($13)==0; //@line 326 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 326 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 327 "imageop.c"
        __label__ = 14; break; //@line 327 "imageop.c"
      case 6: // $bb5
        var $15=HEAP[$rv]; //@line 328 "imageop.c"
        var $16=_PyString_AsString($15); //@line 328 "imageop.c"
        HEAP[$ncp]=$16; //@line 328 "imageop.c"
        HEAP[$pos]=0; //@line 329 "imageop.c"
        HEAP[$ovalue]=0; //@line 330 "imageop.c"
        HEAP[$i]=0; //@line 331 "imageop.c"
        __label__ = 10; break; //@line 331 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$cp]; //@line 332 "imageop.c"
        var $18=HEAP[$i]; //@line 332 "imageop.c"
        var $19=(($17+$18)&4294967295); //@line 332 "imageop.c"
        var $20=HEAP[$19]; //@line 332 "imageop.c"
        var $21=unSign(($20), 8, 0); //@line 332 "imageop.c"
        var $22=($21) & 240; //@line 332 "imageop.c"
        var $23=HEAP[$pos]; //@line 332 "imageop.c"
        var $24=((($22))|0) >> ((($23))|0); //@line 332 "imageop.c"
        var $25=((($24)) & 255); //@line 332 "imageop.c"
        var $26=HEAP[$ovalue]; //@line 332 "imageop.c"
        var $27=($25) | ($26); //@line 332 "imageop.c"
        HEAP[$ovalue]=$27; //@line 332 "imageop.c"
        var $28=HEAP[$pos]; //@line 333 "imageop.c"
        var $29=((($28) + 4)&4294967295); //@line 333 "imageop.c"
        HEAP[$pos]=$29; //@line 333 "imageop.c"
        var $30=HEAP[$pos]; //@line 334 "imageop.c"
        var $31=((($30))|0)==8; //@line 334 "imageop.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 334 "imageop.c"
      case 8: // $bb7
        var $32=HEAP[$ncp]; //@line 335 "imageop.c"
        var $33=HEAP[$ovalue]; //@line 335 "imageop.c"
        HEAP[$32]=$33; //@line 335 "imageop.c"
        var $34=HEAP[$ncp]; //@line 335 "imageop.c"
        var $35=(($34+1)&4294967295); //@line 335 "imageop.c"
        HEAP[$ncp]=$35; //@line 335 "imageop.c"
        HEAP[$ovalue]=0; //@line 336 "imageop.c"
        HEAP[$pos]=0; //@line 337 "imageop.c"
        __label__ = 9; break; //@line 337 "imageop.c"
      case 9: // $bb8
        var $36=HEAP[$i]; //@line 331 "imageop.c"
        var $37=((($36) + 1)&4294967295); //@line 331 "imageop.c"
        HEAP[$i]=$37; //@line 331 "imageop.c"
        __label__ = 10; break; //@line 331 "imageop.c"
      case 10: // $bb9
        var $38=HEAP[$len]; //@line 331 "imageop.c"
        var $39=HEAP[$i]; //@line 331 "imageop.c"
        var $40=((($39))|0) < ((($38))|0); //@line 331 "imageop.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 331 "imageop.c"
      case 11: // $bb10
        var $41=HEAP[$pos]; //@line 340 "imageop.c"
        var $42=((($41))|0)!=0; //@line 340 "imageop.c"
        if ($42) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 340 "imageop.c"
      case 12: // $bb11
        var $43=HEAP[$ncp]; //@line 341 "imageop.c"
        var $44=HEAP[$ovalue]; //@line 341 "imageop.c"
        HEAP[$43]=$44; //@line 341 "imageop.c"
        var $45=HEAP[$ncp]; //@line 341 "imageop.c"
        var $46=(($45+1)&4294967295); //@line 341 "imageop.c"
        HEAP[$ncp]=$46; //@line 341 "imageop.c"
        __label__ = 13; break; //@line 341 "imageop.c"
      case 13: // $bb12
        var $47=HEAP[$rv]; //@line 342 "imageop.c"
        HEAP[$0]=$47; //@line 342 "imageop.c"
        __label__ = 14; break; //@line 342 "imageop.c"
      case 14: // $bb13
        var $48=HEAP[$0]; //@line 320 "imageop.c"
        HEAP[$retval]=$48; //@line 320 "imageop.c"
        __label__ = 15; break; //@line 320 "imageop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 320 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 320 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2grey2($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 49; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 49);
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
        var $len=__stackBase__+24;
        var $cp=__stackBase__+28;
        var $ncp=__stackBase__+32;
        var $ovalue=__stackBase__+36;
        var $rv=__stackBase__+37;
        var $i=__stackBase__+41;
        var $pos=__stackBase__+45;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 356 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 356 "imageop.c"
        var $3=((($2))|0)==0; //@line 356 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 356 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 357 "imageop.c"
        __label__ = 14; break; //@line 357 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 359 "imageop.c"
        var $5=HEAP[$x]; //@line 359 "imageop.c"
        var $6=HEAP[$len]; //@line 359 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 359 "imageop.c"
        var $8=((($7))|0)==0; //@line 359 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 359 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 360 "imageop.c"
        __label__ = 14; break; //@line 360 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 362 "imageop.c"
        var $10=((($9) + 3)&4294967295); //@line 362 "imageop.c"
        var $11=((((($10))|0)/4)|0); //@line 362 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 362 "imageop.c"
        HEAP[$rv]=$12; //@line 362 "imageop.c"
        var $13=HEAP[$rv]; //@line 363 "imageop.c"
        var $14=($13)==0; //@line 363 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 363 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 364 "imageop.c"
        __label__ = 14; break; //@line 364 "imageop.c"
      case 6: // $bb5
        var $15=HEAP[$rv]; //@line 365 "imageop.c"
        var $16=_PyString_AsString($15); //@line 365 "imageop.c"
        HEAP[$ncp]=$16; //@line 365 "imageop.c"
        HEAP[$pos]=0; //@line 366 "imageop.c"
        HEAP[$ovalue]=0; //@line 367 "imageop.c"
        HEAP[$i]=0; //@line 368 "imageop.c"
        __label__ = 10; break; //@line 368 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$cp]; //@line 369 "imageop.c"
        var $18=HEAP[$i]; //@line 369 "imageop.c"
        var $19=(($17+$18)&4294967295); //@line 369 "imageop.c"
        var $20=HEAP[$19]; //@line 369 "imageop.c"
        var $21=unSign(($20), 8, 0); //@line 369 "imageop.c"
        var $22=($21) & 192; //@line 369 "imageop.c"
        var $23=HEAP[$pos]; //@line 369 "imageop.c"
        var $24=((($22))|0) >> ((($23))|0); //@line 369 "imageop.c"
        var $25=((($24)) & 255); //@line 369 "imageop.c"
        var $26=HEAP[$ovalue]; //@line 369 "imageop.c"
        var $27=($25) | ($26); //@line 369 "imageop.c"
        HEAP[$ovalue]=$27; //@line 369 "imageop.c"
        var $28=HEAP[$pos]; //@line 370 "imageop.c"
        var $29=((($28) + 2)&4294967295); //@line 370 "imageop.c"
        HEAP[$pos]=$29; //@line 370 "imageop.c"
        var $30=HEAP[$pos]; //@line 371 "imageop.c"
        var $31=((($30))|0)==8; //@line 371 "imageop.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 371 "imageop.c"
      case 8: // $bb7
        var $32=HEAP[$ncp]; //@line 372 "imageop.c"
        var $33=HEAP[$ovalue]; //@line 372 "imageop.c"
        HEAP[$32]=$33; //@line 372 "imageop.c"
        var $34=HEAP[$ncp]; //@line 372 "imageop.c"
        var $35=(($34+1)&4294967295); //@line 372 "imageop.c"
        HEAP[$ncp]=$35; //@line 372 "imageop.c"
        HEAP[$ovalue]=0; //@line 373 "imageop.c"
        HEAP[$pos]=0; //@line 374 "imageop.c"
        __label__ = 9; break; //@line 374 "imageop.c"
      case 9: // $bb8
        var $36=HEAP[$i]; //@line 368 "imageop.c"
        var $37=((($36) + 1)&4294967295); //@line 368 "imageop.c"
        HEAP[$i]=$37; //@line 368 "imageop.c"
        __label__ = 10; break; //@line 368 "imageop.c"
      case 10: // $bb9
        var $38=HEAP[$len]; //@line 368 "imageop.c"
        var $39=HEAP[$i]; //@line 368 "imageop.c"
        var $40=((($39))|0) < ((($38))|0); //@line 368 "imageop.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 368 "imageop.c"
      case 11: // $bb10
        var $41=HEAP[$pos]; //@line 377 "imageop.c"
        var $42=((($41))|0)!=0; //@line 377 "imageop.c"
        if ($42) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 377 "imageop.c"
      case 12: // $bb11
        var $43=HEAP[$ncp]; //@line 378 "imageop.c"
        var $44=HEAP[$ovalue]; //@line 378 "imageop.c"
        HEAP[$43]=$44; //@line 378 "imageop.c"
        var $45=HEAP[$ncp]; //@line 378 "imageop.c"
        var $46=(($45+1)&4294967295); //@line 378 "imageop.c"
        HEAP[$ncp]=$46; //@line 378 "imageop.c"
        __label__ = 13; break; //@line 378 "imageop.c"
      case 13: // $bb12
        var $47=HEAP[$rv]; //@line 379 "imageop.c"
        HEAP[$0]=$47; //@line 379 "imageop.c"
        __label__ = 14; break; //@line 379 "imageop.c"
      case 14: // $bb13
        var $48=HEAP[$0]; //@line 357 "imageop.c"
        HEAP[$retval]=$48; //@line 357 "imageop.c"
        __label__ = 15; break; //@line 357 "imageop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 357 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 357 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_dither2mono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $sum=__stackBase__+16;
        var $x=__stackBase__+20;
        var $y=__stackBase__+24;
        var $len=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $ovalue=__stackBase__+40;
        var $rv=__stackBase__+41;
        var $i=__stackBase__+45;
        var $bit=__stackBase__+49;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 392 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 392 "imageop.c"
        var $3=((($2))|0)==0; //@line 392 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 392 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 393 "imageop.c"
        __label__ = 16; break; //@line 393 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 395 "imageop.c"
        var $5=HEAP[$x]; //@line 395 "imageop.c"
        var $6=HEAP[$len]; //@line 395 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 395 "imageop.c"
        var $8=((($7))|0)==0; //@line 395 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 395 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 396 "imageop.c"
        __label__ = 16; break; //@line 396 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 398 "imageop.c"
        var $10=((($9) + 7)&4294967295); //@line 398 "imageop.c"
        var $11=((((($10))|0)/8)|0); //@line 398 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 398 "imageop.c"
        HEAP[$rv]=$12; //@line 398 "imageop.c"
        var $13=HEAP[$rv]; //@line 399 "imageop.c"
        var $14=($13)==0; //@line 399 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 399 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 400 "imageop.c"
        __label__ = 16; break; //@line 400 "imageop.c"
      case 6: // $bb5
        var $15=HEAP[$rv]; //@line 401 "imageop.c"
        var $16=_PyString_AsString($15); //@line 401 "imageop.c"
        HEAP[$ncp]=$16; //@line 401 "imageop.c"
        HEAP[$bit]=128; //@line 403 "imageop.c"
        HEAP[$ovalue]=0; //@line 404 "imageop.c"
        HEAP[$sum]=0; //@line 405 "imageop.c"
        HEAP[$i]=0; //@line 406 "imageop.c"
        __label__ = 12; break; //@line 406 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$cp]; //@line 407 "imageop.c"
        var $18=HEAP[$i]; //@line 407 "imageop.c"
        var $19=(($17+$18)&4294967295); //@line 407 "imageop.c"
        var $20=HEAP[$19]; //@line 407 "imageop.c"
        var $21=unSign(($20), 8, 0); //@line 407 "imageop.c"
        var $22=HEAP[$sum]; //@line 407 "imageop.c"
        var $23=((($21) + ($22))&4294967295); //@line 407 "imageop.c"
        HEAP[$sum]=$23; //@line 407 "imageop.c"
        var $24=HEAP[$sum]; //@line 408 "imageop.c"
        var $25=((($24))|0) > 255; //@line 408 "imageop.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 408 "imageop.c"
      case 8: // $bb7
        var $26=HEAP[$sum]; //@line 409 "imageop.c"
        var $27=((($26) - 256)&4294967295); //@line 409 "imageop.c"
        HEAP[$sum]=$27; //@line 409 "imageop.c"
        var $28=HEAP[$bit]; //@line 410 "imageop.c"
        var $29=((($28)) & 255); //@line 410 "imageop.c"
        var $30=HEAP[$ovalue]; //@line 410 "imageop.c"
        var $31=($29) | ($30); //@line 410 "imageop.c"
        HEAP[$ovalue]=$31; //@line 410 "imageop.c"
        __label__ = 9; break; //@line 410 "imageop.c"
      case 9: // $bb8
        var $32=HEAP[$bit]; //@line 412 "imageop.c"
        var $33=((($32))|0) >> 1; //@line 412 "imageop.c"
        HEAP[$bit]=$33; //@line 412 "imageop.c"
        var $34=HEAP[$bit]; //@line 413 "imageop.c"
        var $35=((($34))|0)==0; //@line 413 "imageop.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 413 "imageop.c"
      case 10: // $bb9
        var $36=HEAP[$ncp]; //@line 414 "imageop.c"
        var $37=HEAP[$ovalue]; //@line 414 "imageop.c"
        HEAP[$36]=$37; //@line 414 "imageop.c"
        var $38=HEAP[$ncp]; //@line 414 "imageop.c"
        var $39=(($38+1)&4294967295); //@line 414 "imageop.c"
        HEAP[$ncp]=$39; //@line 414 "imageop.c"
        HEAP[$bit]=128; //@line 415 "imageop.c"
        HEAP[$ovalue]=0; //@line 416 "imageop.c"
        __label__ = 11; break; //@line 416 "imageop.c"
      case 11: // $bb10
        var $40=HEAP[$i]; //@line 406 "imageop.c"
        var $41=((($40) + 1)&4294967295); //@line 406 "imageop.c"
        HEAP[$i]=$41; //@line 406 "imageop.c"
        __label__ = 12; break; //@line 406 "imageop.c"
      case 12: // $bb11
        var $42=HEAP[$len]; //@line 406 "imageop.c"
        var $43=HEAP[$i]; //@line 406 "imageop.c"
        var $44=((($43))|0) < ((($42))|0); //@line 406 "imageop.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 406 "imageop.c"
      case 13: // $bb12
        var $45=HEAP[$bit]; //@line 419 "imageop.c"
        var $46=((($45))|0)!=128; //@line 419 "imageop.c"
        if ($46) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 419 "imageop.c"
      case 14: // $bb13
        var $47=HEAP[$ncp]; //@line 420 "imageop.c"
        var $48=HEAP[$ovalue]; //@line 420 "imageop.c"
        HEAP[$47]=$48; //@line 420 "imageop.c"
        var $49=HEAP[$ncp]; //@line 420 "imageop.c"
        var $50=(($49+1)&4294967295); //@line 420 "imageop.c"
        HEAP[$ncp]=$50; //@line 420 "imageop.c"
        __label__ = 15; break; //@line 420 "imageop.c"
      case 15: // $bb14
        var $51=HEAP[$rv]; //@line 421 "imageop.c"
        HEAP[$0]=$51; //@line 421 "imageop.c"
        __label__ = 16; break; //@line 421 "imageop.c"
      case 16: // $bb15
        var $52=HEAP[$0]; //@line 393 "imageop.c"
        HEAP[$retval]=$52; //@line 393 "imageop.c"
        __label__ = 17; break; //@line 393 "imageop.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 393 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 393 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_dither2grey2($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 57; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 57);
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
        var $len=__stackBase__+24;
        var $cp=__stackBase__+28;
        var $ncp=__stackBase__+32;
        var $ovalue=__stackBase__+36;
        var $rv=__stackBase__+37;
        var $i=__stackBase__+41;
        var $pos=__stackBase__+45;
        var $sum=__stackBase__+49;
        var $nvalue=__stackBase__+53;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$sum]=0; //@line 433 "imageop.c"
        var $1=HEAP[$args_addr]; //@line 436 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 436 "imageop.c"
        var $3=((($2))|0)==0; //@line 436 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 436 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 437 "imageop.c"
        __label__ = 14; break; //@line 437 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 439 "imageop.c"
        var $5=HEAP[$x]; //@line 439 "imageop.c"
        var $6=HEAP[$len]; //@line 439 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 439 "imageop.c"
        var $8=((($7))|0)==0; //@line 439 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 439 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 440 "imageop.c"
        __label__ = 14; break; //@line 440 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 442 "imageop.c"
        var $10=((($9) + 3)&4294967295); //@line 442 "imageop.c"
        var $11=((((($10))|0)/4)|0); //@line 442 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 442 "imageop.c"
        HEAP[$rv]=$12; //@line 442 "imageop.c"
        var $13=HEAP[$rv]; //@line 443 "imageop.c"
        var $14=($13)==0; //@line 443 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 443 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 444 "imageop.c"
        __label__ = 14; break; //@line 444 "imageop.c"
      case 6: // $bb5
        var $15=HEAP[$rv]; //@line 445 "imageop.c"
        var $16=_PyString_AsString($15); //@line 445 "imageop.c"
        HEAP[$ncp]=$16; //@line 445 "imageop.c"
        HEAP[$pos]=1; //@line 446 "imageop.c"
        HEAP[$ovalue]=0; //@line 447 "imageop.c"
        HEAP[$i]=0; //@line 448 "imageop.c"
        __label__ = 10; break; //@line 448 "imageop.c"
      case 7: // $bb6
        var $17=HEAP[$cp]; //@line 449 "imageop.c"
        var $18=HEAP[$i]; //@line 449 "imageop.c"
        var $19=(($17+$18)&4294967295); //@line 449 "imageop.c"
        var $20=HEAP[$19]; //@line 449 "imageop.c"
        var $21=unSign(($20), 8, 0); //@line 449 "imageop.c"
        var $22=HEAP[$sum]; //@line 449 "imageop.c"
        var $23=((($21) + ($22))&4294967295); //@line 449 "imageop.c"
        HEAP[$sum]=$23; //@line 449 "imageop.c"
        var $24=HEAP[$sum]; //@line 450 "imageop.c"
        var $25=($24) & 384; //@line 450 "imageop.c"
        HEAP[$nvalue]=$25; //@line 450 "imageop.c"
        var $26=HEAP[$sum]; //@line 451 "imageop.c"
        var $27=HEAP[$nvalue]; //@line 451 "imageop.c"
        var $28=((($26) - ($27))&4294967295); //@line 451 "imageop.c"
        HEAP[$sum]=$28; //@line 451 "imageop.c"
        var $29=HEAP[$nvalue]; //@line 452 "imageop.c"
        var $30=HEAP[$pos]; //@line 452 "imageop.c"
        var $31=((($29))|0) >> ((($30))|0); //@line 452 "imageop.c"
        var $32=((($31)) & 255); //@line 452 "imageop.c"
        var $33=HEAP[$ovalue]; //@line 452 "imageop.c"
        var $34=($32) | ($33); //@line 452 "imageop.c"
        HEAP[$ovalue]=$34; //@line 452 "imageop.c"
        var $35=HEAP[$pos]; //@line 453 "imageop.c"
        var $36=((($35) + 2)&4294967295); //@line 453 "imageop.c"
        HEAP[$pos]=$36; //@line 453 "imageop.c"
        var $37=HEAP[$pos]; //@line 454 "imageop.c"
        var $38=((($37))|0)==9; //@line 454 "imageop.c"
        if ($38) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 454 "imageop.c"
      case 8: // $bb7
        var $39=HEAP[$ncp]; //@line 455 "imageop.c"
        var $40=HEAP[$ovalue]; //@line 455 "imageop.c"
        HEAP[$39]=$40; //@line 455 "imageop.c"
        var $41=HEAP[$ncp]; //@line 455 "imageop.c"
        var $42=(($41+1)&4294967295); //@line 455 "imageop.c"
        HEAP[$ncp]=$42; //@line 455 "imageop.c"
        HEAP[$ovalue]=0; //@line 456 "imageop.c"
        HEAP[$pos]=1; //@line 457 "imageop.c"
        __label__ = 9; break; //@line 457 "imageop.c"
      case 9: // $bb8
        var $43=HEAP[$i]; //@line 448 "imageop.c"
        var $44=((($43) + 1)&4294967295); //@line 448 "imageop.c"
        HEAP[$i]=$44; //@line 448 "imageop.c"
        __label__ = 10; break; //@line 448 "imageop.c"
      case 10: // $bb9
        var $45=HEAP[$len]; //@line 448 "imageop.c"
        var $46=HEAP[$i]; //@line 448 "imageop.c"
        var $47=((($46))|0) < ((($45))|0); //@line 448 "imageop.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 448 "imageop.c"
      case 11: // $bb10
        var $48=HEAP[$pos]; //@line 460 "imageop.c"
        var $49=((($48))|0)!=0; //@line 460 "imageop.c"
        if ($49) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 460 "imageop.c"
      case 12: // $bb11
        var $50=HEAP[$ncp]; //@line 461 "imageop.c"
        var $51=HEAP[$ovalue]; //@line 461 "imageop.c"
        HEAP[$50]=$51; //@line 461 "imageop.c"
        var $52=HEAP[$ncp]; //@line 461 "imageop.c"
        var $53=(($52+1)&4294967295); //@line 461 "imageop.c"
        HEAP[$ncp]=$53; //@line 461 "imageop.c"
        __label__ = 13; break; //@line 461 "imageop.c"
      case 13: // $bb12
        var $54=HEAP[$rv]; //@line 462 "imageop.c"
        HEAP[$0]=$54; //@line 462 "imageop.c"
        __label__ = 14; break; //@line 462 "imageop.c"
      case 14: // $bb13
        var $55=HEAP[$0]; //@line 437 "imageop.c"
        HEAP[$retval]=$55; //@line 437 "imageop.c"
        __label__ = 15; break; //@line 437 "imageop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 437 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 437 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_mono2grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $v0=__stackBase__+16;
        var $v1=__stackBase__+20;
        var $x=__stackBase__+24;
        var $y=__stackBase__+28;
        var $len=__stackBase__+32;
        var $nlen=__stackBase__+36;
        var $cp=__stackBase__+40;
        var $ncp=__stackBase__+44;
        var $rv=__stackBase__+48;
        var $i=__stackBase__+52;
        var $bit=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 473 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str17)&4294967295), $cp, $len, $x, $y, $v0, $v1); //@line 473 "imageop.c"
        var $3=((($2))|0)==0; //@line 473 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 473 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 474 "imageop.c"
        __label__ = 17; break; //@line 474 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 476 "imageop.c"
        var $5=HEAP[$y]; //@line 476 "imageop.c"
        var $6=((($4) * ($5))&4294967295); //@line 476 "imageop.c"
        HEAP[$nlen]=$6; //@line 476 "imageop.c"
        var $7=HEAP[$y]; //@line 477 "imageop.c"
        var $8=HEAP[$x]; //@line 477 "imageop.c"
        var $9=HEAP[$nlen]; //@line 477 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 477 "imageop.c"
        var $11=((($10))|0)==0; //@line 477 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 477 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 478 "imageop.c"
        __label__ = 17; break; //@line 478 "imageop.c"
      case 4: // $bb3
        var $12=HEAP[$nlen]; //@line 479 "imageop.c"
        var $13=((($12) + 7)&4294967295); //@line 479 "imageop.c"
        var $14=((((($13))|0)/8)|0); //@line 479 "imageop.c"
        var $15=HEAP[$len]; //@line 479 "imageop.c"
        var $16=((($14))|0)!=((($15))|0); //@line 479 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 479 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 480 "imageop.c"
        _PyErr_SetString($17, ((__str1)&4294967295)); //@line 480 "imageop.c"
        HEAP[$0]=0; //@line 481 "imageop.c"
        __label__ = 17; break; //@line 481 "imageop.c"
      case 6: // $bb5
        var $18=HEAP[$nlen]; //@line 484 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 484 "imageop.c"
        HEAP[$rv]=$19; //@line 484 "imageop.c"
        var $20=HEAP[$rv]; //@line 485 "imageop.c"
        var $21=($20)==0; //@line 485 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 485 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 486 "imageop.c"
        __label__ = 17; break; //@line 486 "imageop.c"
      case 8: // $bb7
        var $22=HEAP[$rv]; //@line 487 "imageop.c"
        var $23=_PyString_AsString($22); //@line 487 "imageop.c"
        HEAP[$ncp]=$23; //@line 487 "imageop.c"
        HEAP[$bit]=128; //@line 489 "imageop.c"
        HEAP[$i]=0; //@line 490 "imageop.c"
        __label__ = 15; break; //@line 490 "imageop.c"
      case 9: // $bb8
        var $24=HEAP[$cp]; //@line 491 "imageop.c"
        var $25=HEAP[$24]; //@line 491 "imageop.c"
        var $26=unSign(($25), 8, 0); //@line 491 "imageop.c"
        var $27=HEAP[$bit]; //@line 491 "imageop.c"
        var $28=($26) & ($27); //@line 491 "imageop.c"
        var $29=((($28))|0)!=0; //@line 491 "imageop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 491 "imageop.c"
      case 10: // $bb9
        var $30=HEAP[$v1]; //@line 492 "imageop.c"
        var $31=((($30)) & 255); //@line 492 "imageop.c"
        var $32=HEAP[$ncp]; //@line 492 "imageop.c"
        HEAP[$32]=$31; //@line 492 "imageop.c"
        var $33=HEAP[$ncp]; //@line 492 "imageop.c"
        var $34=(($33+1)&4294967295); //@line 492 "imageop.c"
        HEAP[$ncp]=$34; //@line 492 "imageop.c"
        __label__ = 12; break; //@line 492 "imageop.c"
      case 11: // $bb10
        var $35=HEAP[$v0]; //@line 494 "imageop.c"
        var $36=((($35)) & 255); //@line 494 "imageop.c"
        var $37=HEAP[$ncp]; //@line 494 "imageop.c"
        HEAP[$37]=$36; //@line 494 "imageop.c"
        var $38=HEAP[$ncp]; //@line 494 "imageop.c"
        var $39=(($38+1)&4294967295); //@line 494 "imageop.c"
        HEAP[$ncp]=$39; //@line 494 "imageop.c"
        __label__ = 12; break; //@line 494 "imageop.c"
      case 12: // $bb11
        var $40=HEAP[$bit]; //@line 495 "imageop.c"
        var $41=((($40))|0) >> 1; //@line 495 "imageop.c"
        HEAP[$bit]=$41; //@line 495 "imageop.c"
        var $42=HEAP[$bit]; //@line 496 "imageop.c"
        var $43=((($42))|0)==0; //@line 496 "imageop.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 496 "imageop.c"
      case 13: // $bb12
        HEAP[$bit]=128; //@line 497 "imageop.c"
        var $44=HEAP[$cp]; //@line 498 "imageop.c"
        var $45=(($44+1)&4294967295); //@line 498 "imageop.c"
        HEAP[$cp]=$45; //@line 498 "imageop.c"
        __label__ = 14; break; //@line 498 "imageop.c"
      case 14: // $bb13
        var $46=HEAP[$i]; //@line 490 "imageop.c"
        var $47=((($46) + 1)&4294967295); //@line 490 "imageop.c"
        HEAP[$i]=$47; //@line 490 "imageop.c"
        __label__ = 15; break; //@line 490 "imageop.c"
      case 15: // $bb14
        var $48=HEAP[$i]; //@line 490 "imageop.c"
        var $49=HEAP[$nlen]; //@line 490 "imageop.c"
        var $50=((($48))|0) < ((($49))|0); //@line 490 "imageop.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 490 "imageop.c"
      case 16: // $bb15
        var $51=HEAP[$rv]; //@line 501 "imageop.c"
        HEAP[$0]=$51; //@line 501 "imageop.c"
        __label__ = 17; break; //@line 501 "imageop.c"
      case 17: // $bb16
        var $52=HEAP[$0]; //@line 474 "imageop.c"
        HEAP[$retval]=$52; //@line 474 "imageop.c"
        __label__ = 18; break; //@line 474 "imageop.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 474 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 474 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey22grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $pos=__stackBase__+48;
        var $value=__stackBase__+52;
        var $nvalue=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$value]=0; //@line 510 "imageop.c"
        var $1=HEAP[$args_addr]; //@line 512 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 512 "imageop.c"
        var $3=((($2))|0)==0; //@line 512 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 512 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 513 "imageop.c"
        __label__ = 14; break; //@line 513 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 515 "imageop.c"
        var $5=HEAP[$y]; //@line 515 "imageop.c"
        var $6=((($4) * ($5))&4294967295); //@line 515 "imageop.c"
        HEAP[$nlen]=$6; //@line 515 "imageop.c"
        var $7=HEAP[$y]; //@line 516 "imageop.c"
        var $8=HEAP[$x]; //@line 516 "imageop.c"
        var $9=HEAP[$nlen]; //@line 516 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 516 "imageop.c"
        var $11=((($10))|0)==0; //@line 516 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 516 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 517 "imageop.c"
        __label__ = 14; break; //@line 517 "imageop.c"
      case 4: // $bb3
        var $12=HEAP[$nlen]; //@line 519 "imageop.c"
        var $13=((($12) + 3)&4294967295); //@line 519 "imageop.c"
        var $14=((((($13))|0)/4)|0); //@line 519 "imageop.c"
        var $15=HEAP[$len]; //@line 519 "imageop.c"
        var $16=((($14))|0)!=((($15))|0); //@line 519 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 519 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 520 "imageop.c"
        _PyErr_SetString($17, ((__str1)&4294967295)); //@line 520 "imageop.c"
        HEAP[$0]=0; //@line 521 "imageop.c"
        __label__ = 14; break; //@line 521 "imageop.c"
      case 6: // $bb5
        var $18=HEAP[$nlen]; //@line 524 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 524 "imageop.c"
        HEAP[$rv]=$19; //@line 524 "imageop.c"
        var $20=HEAP[$rv]; //@line 525 "imageop.c"
        var $21=($20)==0; //@line 525 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 525 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 526 "imageop.c"
        __label__ = 14; break; //@line 526 "imageop.c"
      case 8: // $bb7
        var $22=HEAP[$rv]; //@line 527 "imageop.c"
        var $23=_PyString_AsString($22); //@line 527 "imageop.c"
        HEAP[$ncp]=$23; //@line 527 "imageop.c"
        HEAP[$pos]=0; //@line 529 "imageop.c"
        HEAP[$i]=0; //@line 530 "imageop.c"
        __label__ = 12; break; //@line 530 "imageop.c"
      case 9: // $bb8
        var $24=HEAP[$pos]; //@line 531 "imageop.c"
        var $25=((($24))|0)==0; //@line 531 "imageop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 531 "imageop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 532 "imageop.c"
        var $27=HEAP[$26]; //@line 532 "imageop.c"
        var $28=unSign(($27), 8, 0); //@line 532 "imageop.c"
        HEAP[$value]=$28; //@line 532 "imageop.c"
        var $29=(($26+1)&4294967295); //@line 532 "imageop.c"
        HEAP[$cp]=$29; //@line 532 "imageop.c"
        HEAP[$pos]=8; //@line 533 "imageop.c"
        __label__ = 11; break; //@line 533 "imageop.c"
      case 11: // $bb10
        var $30=HEAP[$pos]; //@line 535 "imageop.c"
        var $31=((($30) - 2)&4294967295); //@line 535 "imageop.c"
        HEAP[$pos]=$31; //@line 535 "imageop.c"
        var $32=HEAP[$value]; //@line 536 "imageop.c"
        var $33=HEAP[$pos]; //@line 536 "imageop.c"
        var $34=((($32))|0) >> ((($33))|0); //@line 536 "imageop.c"
        var $35=($34) & 3; //@line 536 "imageop.c"
        HEAP[$nvalue]=$35; //@line 536 "imageop.c"
        var $36=HEAP[$nvalue]; //@line 537 "imageop.c"
        var $37=($36) << 2; //@line 537 "imageop.c"
        var $38=((($37)) & 255); //@line 537 "imageop.c"
        var $39=HEAP[$nvalue]; //@line 537 "imageop.c"
        var $40=((($39)) & 255); //@line 537 "imageop.c"
        var $41=($38) | ($40); //@line 537 "imageop.c"
        var $42=HEAP[$nvalue]; //@line 537 "imageop.c"
        var $43=($42) << 4; //@line 537 "imageop.c"
        var $44=((($43)) & 255); //@line 537 "imageop.c"
        var $45=($41) | ($44); //@line 537 "imageop.c"
        var $46=HEAP[$nvalue]; //@line 537 "imageop.c"
        var $47=($46) << 6; //@line 537 "imageop.c"
        var $48=((($47)) & 255); //@line 537 "imageop.c"
        var $49=($45) | ($48); //@line 537 "imageop.c"
        var $50=HEAP[$ncp]; //@line 537 "imageop.c"
        HEAP[$50]=$49; //@line 537 "imageop.c"
        var $51=HEAP[$ncp]; //@line 537 "imageop.c"
        var $52=(($51+1)&4294967295); //@line 537 "imageop.c"
        HEAP[$ncp]=$52; //@line 537 "imageop.c"
        var $53=HEAP[$i]; //@line 530 "imageop.c"
        var $54=((($53) + 1)&4294967295); //@line 530 "imageop.c"
        HEAP[$i]=$54; //@line 530 "imageop.c"
        __label__ = 12; break; //@line 530 "imageop.c"
      case 12: // $bb11
        var $55=HEAP[$i]; //@line 530 "imageop.c"
        var $56=HEAP[$nlen]; //@line 530 "imageop.c"
        var $57=((($55))|0) < ((($56))|0); //@line 530 "imageop.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 530 "imageop.c"
      case 13: // $bb12
        var $58=HEAP[$rv]; //@line 540 "imageop.c"
        HEAP[$0]=$58; //@line 540 "imageop.c"
        __label__ = 14; break; //@line 540 "imageop.c"
      case 14: // $bb13
        var $59=HEAP[$0]; //@line 513 "imageop.c"
        HEAP[$retval]=$59; //@line 513 "imageop.c"
        __label__ = 15; break; //@line 513 "imageop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 513 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 513 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey42grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 60);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $pos=__stackBase__+48;
        var $value=__stackBase__+52;
        var $nvalue=__stackBase__+56;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$value]=0; //@line 549 "imageop.c"
        var $1=HEAP[$args_addr]; //@line 551 "imageop.c"
        var $2=_PyArg_ParseTuple($1, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 551 "imageop.c"
        var $3=((($2))|0)==0; //@line 551 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 551 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 552 "imageop.c"
        __label__ = 14; break; //@line 552 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 554 "imageop.c"
        var $5=HEAP[$y]; //@line 554 "imageop.c"
        var $6=((($4) * ($5))&4294967295); //@line 554 "imageop.c"
        HEAP[$nlen]=$6; //@line 554 "imageop.c"
        var $7=HEAP[$y]; //@line 555 "imageop.c"
        var $8=HEAP[$x]; //@line 555 "imageop.c"
        var $9=HEAP[$nlen]; //@line 555 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 555 "imageop.c"
        var $11=((($10))|0)==0; //@line 555 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 555 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 556 "imageop.c"
        __label__ = 14; break; //@line 556 "imageop.c"
      case 4: // $bb3
        var $12=HEAP[$nlen]; //@line 557 "imageop.c"
        var $13=((($12) + 1)&4294967295); //@line 557 "imageop.c"
        var $14=((((($13))|0)/2)|0); //@line 557 "imageop.c"
        var $15=HEAP[$len]; //@line 557 "imageop.c"
        var $16=((($14))|0)!=((($15))|0); //@line 557 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 557 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 558 "imageop.c"
        _PyErr_SetString($17, ((__str1)&4294967295)); //@line 558 "imageop.c"
        HEAP[$0]=0; //@line 559 "imageop.c"
        __label__ = 14; break; //@line 559 "imageop.c"
      case 6: // $bb5
        var $18=HEAP[$nlen]; //@line 562 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 562 "imageop.c"
        HEAP[$rv]=$19; //@line 562 "imageop.c"
        var $20=HEAP[$rv]; //@line 563 "imageop.c"
        var $21=($20)==0; //@line 563 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 563 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 564 "imageop.c"
        __label__ = 14; break; //@line 564 "imageop.c"
      case 8: // $bb7
        var $22=HEAP[$rv]; //@line 565 "imageop.c"
        var $23=_PyString_AsString($22); //@line 565 "imageop.c"
        HEAP[$ncp]=$23; //@line 565 "imageop.c"
        HEAP[$pos]=0; //@line 567 "imageop.c"
        HEAP[$i]=0; //@line 568 "imageop.c"
        __label__ = 12; break; //@line 568 "imageop.c"
      case 9: // $bb8
        var $24=HEAP[$pos]; //@line 569 "imageop.c"
        var $25=((($24))|0)==0; //@line 569 "imageop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 569 "imageop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 570 "imageop.c"
        var $27=HEAP[$26]; //@line 570 "imageop.c"
        var $28=unSign(($27), 8, 0); //@line 570 "imageop.c"
        HEAP[$value]=$28; //@line 570 "imageop.c"
        var $29=(($26+1)&4294967295); //@line 570 "imageop.c"
        HEAP[$cp]=$29; //@line 570 "imageop.c"
        HEAP[$pos]=8; //@line 571 "imageop.c"
        __label__ = 11; break; //@line 571 "imageop.c"
      case 11: // $bb10
        var $30=HEAP[$pos]; //@line 573 "imageop.c"
        var $31=((($30) - 4)&4294967295); //@line 573 "imageop.c"
        HEAP[$pos]=$31; //@line 573 "imageop.c"
        var $32=HEAP[$value]; //@line 574 "imageop.c"
        var $33=HEAP[$pos]; //@line 574 "imageop.c"
        var $34=((($32))|0) >> ((($33))|0); //@line 574 "imageop.c"
        var $35=($34) & 15; //@line 574 "imageop.c"
        HEAP[$nvalue]=$35; //@line 574 "imageop.c"
        var $36=HEAP[$nvalue]; //@line 575 "imageop.c"
        var $37=($36) << 4; //@line 575 "imageop.c"
        var $38=((($37)) & 255); //@line 575 "imageop.c"
        var $39=HEAP[$nvalue]; //@line 575 "imageop.c"
        var $40=((($39)) & 255); //@line 575 "imageop.c"
        var $41=($38) | ($40); //@line 575 "imageop.c"
        var $42=HEAP[$ncp]; //@line 575 "imageop.c"
        HEAP[$42]=$41; //@line 575 "imageop.c"
        var $43=HEAP[$ncp]; //@line 575 "imageop.c"
        var $44=(($43+1)&4294967295); //@line 575 "imageop.c"
        HEAP[$ncp]=$44; //@line 575 "imageop.c"
        var $45=HEAP[$i]; //@line 568 "imageop.c"
        var $46=((($45) + 1)&4294967295); //@line 568 "imageop.c"
        HEAP[$i]=$46; //@line 568 "imageop.c"
        __label__ = 12; break; //@line 568 "imageop.c"
      case 12: // $bb11
        var $47=HEAP[$i]; //@line 568 "imageop.c"
        var $48=HEAP[$nlen]; //@line 568 "imageop.c"
        var $49=((($47))|0) < ((($48))|0); //@line 568 "imageop.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 568 "imageop.c"
      case 13: // $bb12
        var $50=HEAP[$rv]; //@line 577 "imageop.c"
        HEAP[$0]=$50; //@line 577 "imageop.c"
        __label__ = 14; break; //@line 577 "imageop.c"
      case 14: // $bb13
        var $51=HEAP[$0]; //@line 552 "imageop.c"
        HEAP[$retval]=$51; //@line 552 "imageop.c"
        __label__ = 15; break; //@line 552 "imageop.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 552 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 552 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb2rgb8($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 68);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $r=__stackBase__+48;
        var $g=__stackBase__+52;
        var $b=__stackBase__+56;
        var $backward_compatible=__stackBase__+60;
        var $value=__stackBase__+64;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_imageop_backward_compatible(); //@line 588 "imageop.c"
        HEAP[$backward_compatible]=$1; //@line 588 "imageop.c"
        var $2=HEAP[$args_addr]; //@line 590 "imageop.c"
        var $3=_PyArg_ParseTuple($2, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 590 "imageop.c"
        var $4=((($3))|0)==0; //@line 590 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 590 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 591 "imageop.c"
        __label__ = 15; break; //@line 591 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 593 "imageop.c"
        var $6=HEAP[$x]; //@line 593 "imageop.c"
        var $7=HEAP[$len]; //@line 593 "imageop.c"
        var $8=_check_multiply_size($7, $6, ((__str2)&4294967295), $5, ((__str3)&4294967295), 4); //@line 593 "imageop.c"
        var $9=((($8))|0)==0; //@line 593 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 593 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 594 "imageop.c"
        __label__ = 15; break; //@line 594 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 595 "imageop.c"
        var $11=HEAP[$y]; //@line 595 "imageop.c"
        var $12=((($10) * ($11))&4294967295); //@line 595 "imageop.c"
        HEAP[$nlen]=$12; //@line 595 "imageop.c"
        var $13=HEAP[$y]; //@line 596 "imageop.c"
        var $14=HEAP[$x]; //@line 596 "imageop.c"
        var $15=HEAP[$nlen]; //@line 596 "imageop.c"
        var $16=_check_multiply($15, $14, $13); //@line 596 "imageop.c"
        var $17=((($16))|0)==0; //@line 596 "imageop.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 596 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 597 "imageop.c"
        __label__ = 15; break; //@line 597 "imageop.c"
      case 6: // $bb5
        var $18=HEAP[$nlen]; //@line 599 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 599 "imageop.c"
        HEAP[$rv]=$19; //@line 599 "imageop.c"
        var $20=HEAP[$rv]; //@line 600 "imageop.c"
        var $21=($20)==0; //@line 600 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 600 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 601 "imageop.c"
        __label__ = 15; break; //@line 601 "imageop.c"
      case 8: // $bb7
        var $22=HEAP[$rv]; //@line 602 "imageop.c"
        var $23=_PyString_AsString($22); //@line 602 "imageop.c"
        HEAP[$ncp]=$23; //@line 602 "imageop.c"
        HEAP[$i]=0; //@line 604 "imageop.c"
        __label__ = 13; break; //@line 604 "imageop.c"
      case 9: // $bb8
        var $24=HEAP[$backward_compatible]; //@line 606 "imageop.c"
        var $25=((($24))|0)!=0; //@line 606 "imageop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 606 "imageop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 607 "imageop.c"
        var $27=$26; //@line 607 "imageop.c"
        var $28=HEAP[$27]; //@line 607 "imageop.c"
        HEAP[$value]=$28; //@line 607 "imageop.c"
        var $29=HEAP[$cp]; //@line 608 "imageop.c"
        var $30=(($29+4)&4294967295); //@line 608 "imageop.c"
        HEAP[$cp]=$30; //@line 608 "imageop.c"
        var $31=HEAP[$value]; //@line 609 "imageop.c"
        var $32=($31) & 255; //@line 609 "imageop.c"
        var $33=((($32))>>>0); //@line 609 "imageop.c"
        var $34=($33) / 255; //@line 609 "imageop.c"
        var $35=($34) * 7; //@line 609 "imageop.c"
        var $36=($35) + 0.5; //@line 609 "imageop.c"
        var $37=((($36))|0); //@line 609 "imageop.c"
        HEAP[$r]=$37; //@line 609 "imageop.c"
        var $38=HEAP[$value]; //@line 610 "imageop.c"
        var $39=((($38))>>>0) >>> 8; //@line 610 "imageop.c"
        var $40=($39) & 255; //@line 610 "imageop.c"
        var $41=((($40))>>>0); //@line 610 "imageop.c"
        var $42=($41) / 255; //@line 610 "imageop.c"
        var $43=($42) * 7; //@line 610 "imageop.c"
        var $44=($43) + 0.5; //@line 610 "imageop.c"
        var $45=((($44))|0); //@line 610 "imageop.c"
        HEAP[$g]=$45; //@line 610 "imageop.c"
        var $46=HEAP[$value]; //@line 611 "imageop.c"
        var $47=((($46))>>>0) >>> 16; //@line 611 "imageop.c"
        var $48=($47) & 255; //@line 611 "imageop.c"
        var $49=((($48))>>>0); //@line 611 "imageop.c"
        var $50=($49) / 255; //@line 611 "imageop.c"
        var $51=($50) * 3; //@line 611 "imageop.c"
        var $52=($51) + 0.5; //@line 611 "imageop.c"
        var $53=((($52))|0); //@line 611 "imageop.c"
        HEAP[$b]=$53; //@line 611 "imageop.c"
        __label__ = 12; break; //@line 611 "imageop.c"
      case 11: // $bb10
        var $54=HEAP[$cp]; //@line 613 "imageop.c"
        var $55=(($54+1)&4294967295); //@line 613 "imageop.c"
        HEAP[$cp]=$55; //@line 613 "imageop.c"
        var $56=HEAP[$cp]; //@line 614 "imageop.c"
        var $57=HEAP[$56]; //@line 614 "imageop.c"
        var $58=unSign(($57), 8, 0); //@line 614 "imageop.c"
        var $59=((($58))|0); //@line 614 "imageop.c"
        var $60=($59) / 255; //@line 614 "imageop.c"
        var $61=($60) * 3; //@line 614 "imageop.c"
        var $62=($61) + 0.5; //@line 614 "imageop.c"
        var $63=((($62))|0); //@line 614 "imageop.c"
        HEAP[$b]=$63; //@line 614 "imageop.c"
        var $64=(($56+1)&4294967295); //@line 614 "imageop.c"
        HEAP[$cp]=$64; //@line 614 "imageop.c"
        var $65=HEAP[$cp]; //@line 615 "imageop.c"
        var $66=HEAP[$65]; //@line 615 "imageop.c"
        var $67=unSign(($66), 8, 0); //@line 615 "imageop.c"
        var $68=((($67))|0); //@line 615 "imageop.c"
        var $69=($68) / 255; //@line 615 "imageop.c"
        var $70=($69) * 7; //@line 615 "imageop.c"
        var $71=($70) + 0.5; //@line 615 "imageop.c"
        var $72=((($71))|0); //@line 615 "imageop.c"
        HEAP[$g]=$72; //@line 615 "imageop.c"
        var $73=(($65+1)&4294967295); //@line 615 "imageop.c"
        HEAP[$cp]=$73; //@line 615 "imageop.c"
        var $74=HEAP[$cp]; //@line 616 "imageop.c"
        var $75=HEAP[$74]; //@line 616 "imageop.c"
        var $76=unSign(($75), 8, 0); //@line 616 "imageop.c"
        var $77=((($76))|0); //@line 616 "imageop.c"
        var $78=($77) / 255; //@line 616 "imageop.c"
        var $79=($78) * 7; //@line 616 "imageop.c"
        var $80=($79) + 0.5; //@line 616 "imageop.c"
        var $81=((($80))|0); //@line 616 "imageop.c"
        HEAP[$r]=$81; //@line 616 "imageop.c"
        var $82=(($74+1)&4294967295); //@line 616 "imageop.c"
        HEAP[$cp]=$82; //@line 616 "imageop.c"
        __label__ = 12; break; //@line 616 "imageop.c"
      case 12: // $bb11
        var $83=HEAP[$r]; //@line 618 "imageop.c"
        var $84=($83) << 5; //@line 618 "imageop.c"
        var $85=((($84)) & 255); //@line 618 "imageop.c"
        var $86=HEAP[$b]; //@line 618 "imageop.c"
        var $87=($86) << 3; //@line 618 "imageop.c"
        var $88=((($87)) & 255); //@line 618 "imageop.c"
        var $89=($85) | ($88); //@line 618 "imageop.c"
        var $90=HEAP[$g]; //@line 618 "imageop.c"
        var $91=((($90)) & 255); //@line 618 "imageop.c"
        var $92=($89) | ($91); //@line 618 "imageop.c"
        var $93=HEAP[$ncp]; //@line 618 "imageop.c"
        HEAP[$93]=$92; //@line 618 "imageop.c"
        var $94=HEAP[$ncp]; //@line 618 "imageop.c"
        var $95=(($94+1)&4294967295); //@line 618 "imageop.c"
        HEAP[$ncp]=$95; //@line 618 "imageop.c"
        var $96=HEAP[$i]; //@line 604 "imageop.c"
        var $97=((($96) + 1)&4294967295); //@line 604 "imageop.c"
        HEAP[$i]=$97; //@line 604 "imageop.c"
        __label__ = 13; break; //@line 604 "imageop.c"
      case 13: // $bb12
        var $98=HEAP[$i]; //@line 604 "imageop.c"
        var $99=HEAP[$nlen]; //@line 604 "imageop.c"
        var $100=((($98))|0) < ((($99))|0); //@line 604 "imageop.c"
        if ($100) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 604 "imageop.c"
      case 14: // $bb13
        var $101=HEAP[$rv]; //@line 620 "imageop.c"
        HEAP[$0]=$101; //@line 620 "imageop.c"
        __label__ = 15; break; //@line 620 "imageop.c"
      case 15: // $bb14
        var $102=HEAP[$0]; //@line 591 "imageop.c"
        HEAP[$retval]=$102; //@line 591 "imageop.c"
        __label__ = 16; break; //@line 591 "imageop.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 591 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 591 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb82rgb($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 69; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 69);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $r=__stackBase__+48;
        var $g=__stackBase__+52;
        var $b=__stackBase__+56;
        var $value=__stackBase__+60;
        var $backward_compatible=__stackBase__+61;
        var $nvalue=__stackBase__+65;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_imageop_backward_compatible(); //@line 632 "imageop.c"
        HEAP[$backward_compatible]=$1; //@line 632 "imageop.c"
        var $2=HEAP[$args_addr]; //@line 634 "imageop.c"
        var $3=_PyArg_ParseTuple($2, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 634 "imageop.c"
        var $4=((($3))|0)==0; //@line 634 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 634 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 635 "imageop.c"
        __label__ = 15; break; //@line 635 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 637 "imageop.c"
        var $6=HEAP[$x]; //@line 637 "imageop.c"
        var $7=HEAP[$len]; //@line 637 "imageop.c"
        var $8=_check_multiply($7, $6, $5); //@line 637 "imageop.c"
        var $9=((($8))|0)==0; //@line 637 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 638 "imageop.c"
        __label__ = 15; break; //@line 638 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 639 "imageop.c"
        var $11=HEAP[$y]; //@line 639 "imageop.c"
        var $12=((($10) * ($11))&4294967295); //@line 639 "imageop.c"
        var $13=((($12) * 4)&4294967295); //@line 639 "imageop.c"
        HEAP[$nlen]=$13; //@line 639 "imageop.c"
        var $14=HEAP[$y]; //@line 640 "imageop.c"
        var $15=HEAP[$x]; //@line 640 "imageop.c"
        var $16=HEAP[$nlen]; //@line 640 "imageop.c"
        var $17=_check_multiply_size($16, $15, ((__str2)&4294967295), $14, ((__str3)&4294967295), 4); //@line 640 "imageop.c"
        var $18=((($17))|0)==0; //@line 640 "imageop.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 640 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 641 "imageop.c"
        __label__ = 15; break; //@line 641 "imageop.c"
      case 6: // $bb5
        var $19=HEAP[$nlen]; //@line 643 "imageop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 643 "imageop.c"
        HEAP[$rv]=$20; //@line 643 "imageop.c"
        var $21=HEAP[$rv]; //@line 644 "imageop.c"
        var $22=($21)==0; //@line 644 "imageop.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 644 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 645 "imageop.c"
        __label__ = 15; break; //@line 645 "imageop.c"
      case 8: // $bb7
        var $23=HEAP[$rv]; //@line 646 "imageop.c"
        var $24=_PyString_AsString($23); //@line 646 "imageop.c"
        HEAP[$ncp]=$24; //@line 646 "imageop.c"
        HEAP[$i]=0; //@line 648 "imageop.c"
        __label__ = 13; break; //@line 648 "imageop.c"
      case 9: // $bb8
        var $25=HEAP[$cp]; //@line 652 "imageop.c"
        var $26=HEAP[$25]; //@line 652 "imageop.c"
        HEAP[$value]=$26; //@line 652 "imageop.c"
        var $27=(($25+1)&4294967295); //@line 652 "imageop.c"
        HEAP[$cp]=$27; //@line 652 "imageop.c"
        var $28=HEAP[$value]; //@line 653 "imageop.c"
        var $29=unSign(($28), 8, 0) >>> 5; //@line 653 "imageop.c"
        var $30=unSign(($29), 8, 0); //@line 653 "imageop.c"
        var $31=($30) & 7; //@line 653 "imageop.c"
        HEAP[$r]=$31; //@line 653 "imageop.c"
        var $32=HEAP[$value]; //@line 654 "imageop.c"
        var $33=unSign(($32), 8, 0); //@line 654 "imageop.c"
        var $34=($33) & 7; //@line 654 "imageop.c"
        HEAP[$g]=$34; //@line 654 "imageop.c"
        var $35=HEAP[$value]; //@line 655 "imageop.c"
        var $36=unSign(($35), 8, 0) >>> 3; //@line 655 "imageop.c"
        var $37=unSign(($36), 8, 0); //@line 655 "imageop.c"
        var $38=($37) & 3; //@line 655 "imageop.c"
        HEAP[$b]=$38; //@line 655 "imageop.c"
        var $39=HEAP[$r]; //@line 656 "imageop.c"
        var $40=($39) << 5; //@line 656 "imageop.c"
        var $41=HEAP[$r]; //@line 656 "imageop.c"
        var $42=($41) << 3; //@line 656 "imageop.c"
        var $43=($40) | ($42); //@line 656 "imageop.c"
        var $44=HEAP[$r]; //@line 656 "imageop.c"
        var $45=((($44))|0) >> 1; //@line 656 "imageop.c"
        var $46=($43) | ($45); //@line 656 "imageop.c"
        HEAP[$r]=$46; //@line 656 "imageop.c"
        var $47=HEAP[$g]; //@line 657 "imageop.c"
        var $48=($47) << 5; //@line 657 "imageop.c"
        var $49=HEAP[$g]; //@line 657 "imageop.c"
        var $50=($49) << 3; //@line 657 "imageop.c"
        var $51=($48) | ($50); //@line 657 "imageop.c"
        var $52=HEAP[$g]; //@line 657 "imageop.c"
        var $53=((($52))|0) >> 1; //@line 657 "imageop.c"
        var $54=($51) | ($53); //@line 657 "imageop.c"
        HEAP[$g]=$54; //@line 657 "imageop.c"
        var $55=HEAP[$b]; //@line 658 "imageop.c"
        var $56=($55) << 6; //@line 658 "imageop.c"
        var $57=HEAP[$b]; //@line 658 "imageop.c"
        var $58=($57) << 4; //@line 658 "imageop.c"
        var $59=($56) | ($58); //@line 658 "imageop.c"
        var $60=HEAP[$b]; //@line 658 "imageop.c"
        var $61=($60) << 2; //@line 658 "imageop.c"
        var $62=($59) | ($61); //@line 658 "imageop.c"
        var $63=HEAP[$b]; //@line 658 "imageop.c"
        var $64=($62) | ($63); //@line 658 "imageop.c"
        HEAP[$b]=$64; //@line 658 "imageop.c"
        var $65=HEAP[$backward_compatible]; //@line 659 "imageop.c"
        var $66=((($65))|0)!=0; //@line 659 "imageop.c"
        if ($66) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 659 "imageop.c"
      case 10: // $bb9
        var $67=HEAP[$g]; //@line 660 "imageop.c"
        var $68=($67) << 8; //@line 660 "imageop.c"
        var $69=HEAP[$r]; //@line 660 "imageop.c"
        var $70=($68) | ($69); //@line 660 "imageop.c"
        var $71=HEAP[$b]; //@line 660 "imageop.c"
        var $72=($71) << 16; //@line 660 "imageop.c"
        var $73=($70) | ($72); //@line 660 "imageop.c"
        HEAP[$nvalue]=$73; //@line 660 "imageop.c"
        var $74=HEAP[$ncp]; //@line 661 "imageop.c"
        var $75=$74; //@line 661 "imageop.c"
        var $76=HEAP[$nvalue]; //@line 661 "imageop.c"
        HEAP[$75]=$76; //@line 661 "imageop.c"
        var $77=HEAP[$ncp]; //@line 662 "imageop.c"
        var $78=(($77+4)&4294967295); //@line 662 "imageop.c"
        HEAP[$ncp]=$78; //@line 662 "imageop.c"
        __label__ = 12; break; //@line 662 "imageop.c"
      case 11: // $bb10
        var $79=HEAP[$ncp]; //@line 664 "imageop.c"
        HEAP[$79]=0; //@line 664 "imageop.c"
        var $80=HEAP[$ncp]; //@line 664 "imageop.c"
        var $81=(($80+1)&4294967295); //@line 664 "imageop.c"
        HEAP[$ncp]=$81; //@line 664 "imageop.c"
        var $82=HEAP[$b]; //@line 665 "imageop.c"
        var $83=((($82)) & 255); //@line 665 "imageop.c"
        var $84=HEAP[$ncp]; //@line 665 "imageop.c"
        HEAP[$84]=$83; //@line 665 "imageop.c"
        var $85=HEAP[$ncp]; //@line 665 "imageop.c"
        var $86=(($85+1)&4294967295); //@line 665 "imageop.c"
        HEAP[$ncp]=$86; //@line 665 "imageop.c"
        var $87=HEAP[$g]; //@line 666 "imageop.c"
        var $88=((($87)) & 255); //@line 666 "imageop.c"
        var $89=HEAP[$ncp]; //@line 666 "imageop.c"
        HEAP[$89]=$88; //@line 666 "imageop.c"
        var $90=HEAP[$ncp]; //@line 666 "imageop.c"
        var $91=(($90+1)&4294967295); //@line 666 "imageop.c"
        HEAP[$ncp]=$91; //@line 666 "imageop.c"
        var $92=HEAP[$r]; //@line 667 "imageop.c"
        var $93=((($92)) & 255); //@line 667 "imageop.c"
        var $94=HEAP[$ncp]; //@line 667 "imageop.c"
        HEAP[$94]=$93; //@line 667 "imageop.c"
        var $95=HEAP[$ncp]; //@line 667 "imageop.c"
        var $96=(($95+1)&4294967295); //@line 667 "imageop.c"
        HEAP[$ncp]=$96; //@line 667 "imageop.c"
        __label__ = 12; break; //@line 667 "imageop.c"
      case 12: // $bb11
        var $97=HEAP[$i]; //@line 648 "imageop.c"
        var $98=((($97) + 1)&4294967295); //@line 648 "imageop.c"
        HEAP[$i]=$98; //@line 648 "imageop.c"
        __label__ = 13; break; //@line 648 "imageop.c"
      case 13: // $bb12
        var $99=HEAP[$len]; //@line 648 "imageop.c"
        var $100=HEAP[$i]; //@line 648 "imageop.c"
        var $101=((($100))|0) < ((($99))|0); //@line 648 "imageop.c"
        if ($101) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 648 "imageop.c"
      case 14: // $bb13
        var $102=HEAP[$rv]; //@line 670 "imageop.c"
        HEAP[$0]=$102; //@line 670 "imageop.c"
        __label__ = 15; break; //@line 670 "imageop.c"
      case 15: // $bb14
        var $103=HEAP[$0]; //@line 635 "imageop.c"
        HEAP[$retval]=$103; //@line 635 "imageop.c"
        __label__ = 16; break; //@line 635 "imageop.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 635 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 635 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb2grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $r=__stackBase__+48;
        var $g=__stackBase__+52;
        var $b=__stackBase__+56;
        var $nvalue=__stackBase__+60;
        var $backward_compatible=__stackBase__+64;
        var $value=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_imageop_backward_compatible(); //@line 682 "imageop.c"
        HEAP[$backward_compatible]=$1; //@line 682 "imageop.c"
        var $2=HEAP[$args_addr]; //@line 684 "imageop.c"
        var $3=_PyArg_ParseTuple($2, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 684 "imageop.c"
        var $4=((($3))|0)==0; //@line 684 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 684 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 685 "imageop.c"
        __label__ = 17; break; //@line 685 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 687 "imageop.c"
        var $6=HEAP[$x]; //@line 687 "imageop.c"
        var $7=HEAP[$len]; //@line 687 "imageop.c"
        var $8=_check_multiply_size($7, $6, ((__str2)&4294967295), $5, ((__str3)&4294967295), 4); //@line 687 "imageop.c"
        var $9=((($8))|0)==0; //@line 687 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 687 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 688 "imageop.c"
        __label__ = 17; break; //@line 688 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 689 "imageop.c"
        var $11=HEAP[$y]; //@line 689 "imageop.c"
        var $12=((($10) * ($11))&4294967295); //@line 689 "imageop.c"
        HEAP[$nlen]=$12; //@line 689 "imageop.c"
        var $13=HEAP[$y]; //@line 690 "imageop.c"
        var $14=HEAP[$x]; //@line 690 "imageop.c"
        var $15=HEAP[$nlen]; //@line 690 "imageop.c"
        var $16=_check_multiply($15, $14, $13); //@line 690 "imageop.c"
        var $17=((($16))|0)==0; //@line 690 "imageop.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 690 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 691 "imageop.c"
        __label__ = 17; break; //@line 691 "imageop.c"
      case 6: // $bb5
        var $18=HEAP[$nlen]; //@line 693 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 693 "imageop.c"
        HEAP[$rv]=$19; //@line 693 "imageop.c"
        var $20=HEAP[$rv]; //@line 694 "imageop.c"
        var $21=($20)==0; //@line 694 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 694 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 695 "imageop.c"
        __label__ = 17; break; //@line 695 "imageop.c"
      case 8: // $bb7
        var $22=HEAP[$rv]; //@line 696 "imageop.c"
        var $23=_PyString_AsString($22); //@line 696 "imageop.c"
        HEAP[$ncp]=$23; //@line 696 "imageop.c"
        HEAP[$i]=0; //@line 698 "imageop.c"
        __label__ = 15; break; //@line 698 "imageop.c"
      case 9: // $bb8
        var $24=HEAP[$backward_compatible]; //@line 699 "imageop.c"
        var $25=((($24))|0)!=0; //@line 699 "imageop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 699 "imageop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 700 "imageop.c"
        var $27=$26; //@line 700 "imageop.c"
        var $28=HEAP[$27]; //@line 700 "imageop.c"
        HEAP[$value]=$28; //@line 700 "imageop.c"
        var $29=HEAP[$cp]; //@line 701 "imageop.c"
        var $30=(($29+4)&4294967295); //@line 701 "imageop.c"
        HEAP[$cp]=$30; //@line 701 "imageop.c"
        var $31=HEAP[$value]; //@line 702 "imageop.c"
        var $32=($31) & 255; //@line 702 "imageop.c"
        var $33=((($32))>>>0); //@line 702 "imageop.c"
        var $34=($33) / 255; //@line 702 "imageop.c"
        var $35=($34) * 7; //@line 702 "imageop.c"
        var $36=($35) + 0.5; //@line 702 "imageop.c"
        var $37=((($36))|0); //@line 702 "imageop.c"
        HEAP[$r]=$37; //@line 702 "imageop.c"
        var $38=HEAP[$value]; //@line 703 "imageop.c"
        var $39=((($38))>>>0) >>> 8; //@line 703 "imageop.c"
        var $40=($39) & 255; //@line 703 "imageop.c"
        var $41=((($40))>>>0); //@line 703 "imageop.c"
        var $42=($41) / 255; //@line 703 "imageop.c"
        var $43=($42) * 7; //@line 703 "imageop.c"
        var $44=($43) + 0.5; //@line 703 "imageop.c"
        var $45=((($44))|0); //@line 703 "imageop.c"
        HEAP[$g]=$45; //@line 703 "imageop.c"
        var $46=HEAP[$value]; //@line 704 "imageop.c"
        var $47=((($46))>>>0) >>> 16; //@line 704 "imageop.c"
        var $48=($47) & 255; //@line 704 "imageop.c"
        var $49=((($48))>>>0); //@line 704 "imageop.c"
        var $50=($49) / 255; //@line 704 "imageop.c"
        var $51=($50) * 3; //@line 704 "imageop.c"
        var $52=($51) + 0.5; //@line 704 "imageop.c"
        var $53=((($52))|0); //@line 704 "imageop.c"
        HEAP[$b]=$53; //@line 704 "imageop.c"
        __label__ = 12; break; //@line 704 "imageop.c"
      case 11: // $bb10
        var $54=HEAP[$cp]; //@line 706 "imageop.c"
        var $55=(($54+1)&4294967295); //@line 706 "imageop.c"
        HEAP[$cp]=$55; //@line 706 "imageop.c"
        var $56=HEAP[$cp]; //@line 707 "imageop.c"
        var $57=HEAP[$56]; //@line 707 "imageop.c"
        var $58=unSign(($57), 8, 0); //@line 707 "imageop.c"
        HEAP[$b]=$58; //@line 707 "imageop.c"
        var $59=(($56+1)&4294967295); //@line 707 "imageop.c"
        HEAP[$cp]=$59; //@line 707 "imageop.c"
        var $60=HEAP[$cp]; //@line 708 "imageop.c"
        var $61=HEAP[$60]; //@line 708 "imageop.c"
        var $62=unSign(($61), 8, 0); //@line 708 "imageop.c"
        HEAP[$g]=$62; //@line 708 "imageop.c"
        var $63=(($60+1)&4294967295); //@line 708 "imageop.c"
        HEAP[$cp]=$63; //@line 708 "imageop.c"
        var $64=HEAP[$cp]; //@line 709 "imageop.c"
        var $65=HEAP[$64]; //@line 709 "imageop.c"
        var $66=unSign(($65), 8, 0); //@line 709 "imageop.c"
        HEAP[$r]=$66; //@line 709 "imageop.c"
        var $67=(($64+1)&4294967295); //@line 709 "imageop.c"
        HEAP[$cp]=$67; //@line 709 "imageop.c"
        __label__ = 12; break; //@line 709 "imageop.c"
      case 12: // $bb11
        var $68=HEAP[$r]; //@line 711 "imageop.c"
        var $69=((($68))|0); //@line 711 "imageop.c"
        var $70=($69) * 0.3; //@line 711 "imageop.c"
        var $71=HEAP[$g]; //@line 711 "imageop.c"
        var $72=((($71))|0); //@line 711 "imageop.c"
        var $73=($72) * 0.59; //@line 711 "imageop.c"
        var $74=($70) + ($73); //@line 711 "imageop.c"
        var $75=HEAP[$b]; //@line 711 "imageop.c"
        var $76=((($75))|0); //@line 711 "imageop.c"
        var $77=($76) * 0.11; //@line 711 "imageop.c"
        var $78=($74) + ($77); //@line 711 "imageop.c"
        var $79=((($78))|0); //@line 711 "imageop.c"
        HEAP[$nvalue]=$79; //@line 711 "imageop.c"
        var $80=HEAP[$nvalue]; //@line 712 "imageop.c"
        var $81=((($80))|0) > 255; //@line 712 "imageop.c"
        if ($81) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 712 "imageop.c"
      case 13: // $bb12
        HEAP[$nvalue]=255; //@line 712 "imageop.c"
        __label__ = 14; break; //@line 712 "imageop.c"
      case 14: // $bb13
        var $82=HEAP[$nvalue]; //@line 713 "imageop.c"
        var $83=((($82)) & 255); //@line 713 "imageop.c"
        var $84=HEAP[$ncp]; //@line 713 "imageop.c"
        HEAP[$84]=$83; //@line 713 "imageop.c"
        var $85=HEAP[$ncp]; //@line 713 "imageop.c"
        var $86=(($85+1)&4294967295); //@line 713 "imageop.c"
        HEAP[$ncp]=$86; //@line 713 "imageop.c"
        var $87=HEAP[$i]; //@line 698 "imageop.c"
        var $88=((($87) + 1)&4294967295); //@line 698 "imageop.c"
        HEAP[$i]=$88; //@line 698 "imageop.c"
        __label__ = 15; break; //@line 698 "imageop.c"
      case 15: // $bb14
        var $89=HEAP[$i]; //@line 698 "imageop.c"
        var $90=HEAP[$nlen]; //@line 698 "imageop.c"
        var $91=((($89))|0) < ((($90))|0); //@line 698 "imageop.c"
        if ($91) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 698 "imageop.c"
      case 16: // $bb15
        var $92=HEAP[$rv]; //@line 715 "imageop.c"
        HEAP[$0]=$92; //@line 715 "imageop.c"
        __label__ = 17; break; //@line 715 "imageop.c"
      case 17: // $bb16
        var $93=HEAP[$0]; //@line 685 "imageop.c"
        HEAP[$retval]=$93; //@line 685 "imageop.c"
        __label__ = 18; break; //@line 685 "imageop.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 685 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 685 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2rgb($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 53);
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
        var $len=__stackBase__+24;
        var $nlen=__stackBase__+28;
        var $cp=__stackBase__+32;
        var $ncp=__stackBase__+36;
        var $rv=__stackBase__+40;
        var $i=__stackBase__+44;
        var $value=__stackBase__+48;
        var $backward_compatible=__stackBase__+49;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=_imageop_backward_compatible(); //@line 727 "imageop.c"
        HEAP[$backward_compatible]=$1; //@line 727 "imageop.c"
        var $2=HEAP[$args_addr]; //@line 729 "imageop.c"
        var $3=_PyArg_ParseTuple($2, ((__str16)&4294967295), $cp, $len, $x, $y); //@line 729 "imageop.c"
        var $4=((($3))|0)==0; //@line 729 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 729 "imageop.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 730 "imageop.c"
        __label__ = 15; break; //@line 730 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 732 "imageop.c"
        var $6=HEAP[$x]; //@line 732 "imageop.c"
        var $7=HEAP[$len]; //@line 732 "imageop.c"
        var $8=_check_multiply($7, $6, $5); //@line 732 "imageop.c"
        var $9=((($8))|0)==0; //@line 732 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 732 "imageop.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 733 "imageop.c"
        __label__ = 15; break; //@line 733 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 734 "imageop.c"
        var $11=HEAP[$y]; //@line 734 "imageop.c"
        var $12=((($10) * ($11))&4294967295); //@line 734 "imageop.c"
        var $13=((($12) * 4)&4294967295); //@line 734 "imageop.c"
        HEAP[$nlen]=$13; //@line 734 "imageop.c"
        var $14=HEAP[$y]; //@line 735 "imageop.c"
        var $15=HEAP[$x]; //@line 735 "imageop.c"
        var $16=HEAP[$nlen]; //@line 735 "imageop.c"
        var $17=_check_multiply_size($16, $15, ((__str2)&4294967295), $14, ((__str3)&4294967295), 4); //@line 735 "imageop.c"
        var $18=((($17))|0)==0; //@line 735 "imageop.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 735 "imageop.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 736 "imageop.c"
        __label__ = 15; break; //@line 736 "imageop.c"
      case 6: // $bb5
        var $19=HEAP[$nlen]; //@line 738 "imageop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 738 "imageop.c"
        HEAP[$rv]=$20; //@line 738 "imageop.c"
        var $21=HEAP[$rv]; //@line 739 "imageop.c"
        var $22=($21)==0; //@line 739 "imageop.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 739 "imageop.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 740 "imageop.c"
        __label__ = 15; break; //@line 740 "imageop.c"
      case 8: // $bb7
        var $23=HEAP[$rv]; //@line 741 "imageop.c"
        var $24=_PyString_AsString($23); //@line 741 "imageop.c"
        HEAP[$ncp]=$24; //@line 741 "imageop.c"
        HEAP[$i]=0; //@line 743 "imageop.c"
        __label__ = 13; break; //@line 743 "imageop.c"
      case 9: // $bb8
        var $25=HEAP[$cp]; //@line 744 "imageop.c"
        var $26=HEAP[$25]; //@line 744 "imageop.c"
        HEAP[$value]=$26; //@line 744 "imageop.c"
        var $27=(($25+1)&4294967295); //@line 744 "imageop.c"
        HEAP[$cp]=$27; //@line 744 "imageop.c"
        var $28=HEAP[$backward_compatible]; //@line 745 "imageop.c"
        var $29=((($28))|0)!=0; //@line 745 "imageop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 745 "imageop.c"
      case 10: // $bb9
        var $30=HEAP[$ncp]; //@line 746 "imageop.c"
        var $31=$30; //@line 746 "imageop.c"
        var $32=HEAP[$value]; //@line 746 "imageop.c"
        var $33=unSign(($32), 8, 0); //@line 746 "imageop.c"
        var $34=HEAP[$value]; //@line 746 "imageop.c"
        var $35=unSign(($34), 8, 0); //@line 746 "imageop.c"
        var $36=($35) << 8; //@line 746 "imageop.c"
        var $37=($33) | ($36); //@line 746 "imageop.c"
        var $38=HEAP[$value]; //@line 746 "imageop.c"
        var $39=unSign(($38), 8, 0); //@line 746 "imageop.c"
        var $40=($39) << 16; //@line 746 "imageop.c"
        var $41=($37) | ($40); //@line 746 "imageop.c"
        HEAP[$31]=$41; //@line 746 "imageop.c"
        var $42=HEAP[$ncp]; //@line 747 "imageop.c"
        var $43=(($42+4)&4294967295); //@line 747 "imageop.c"
        HEAP[$ncp]=$43; //@line 747 "imageop.c"
        __label__ = 12; break; //@line 747 "imageop.c"
      case 11: // $bb10
        var $44=HEAP[$ncp]; //@line 749 "imageop.c"
        HEAP[$44]=0; //@line 749 "imageop.c"
        var $45=HEAP[$ncp]; //@line 749 "imageop.c"
        var $46=(($45+1)&4294967295); //@line 749 "imageop.c"
        HEAP[$ncp]=$46; //@line 749 "imageop.c"
        var $47=HEAP[$ncp]; //@line 750 "imageop.c"
        var $48=HEAP[$value]; //@line 750 "imageop.c"
        HEAP[$47]=$48; //@line 750 "imageop.c"
        var $49=HEAP[$ncp]; //@line 750 "imageop.c"
        var $50=(($49+1)&4294967295); //@line 750 "imageop.c"
        HEAP[$ncp]=$50; //@line 750 "imageop.c"
        var $51=HEAP[$ncp]; //@line 751 "imageop.c"
        var $52=HEAP[$value]; //@line 751 "imageop.c"
        HEAP[$51]=$52; //@line 751 "imageop.c"
        var $53=HEAP[$ncp]; //@line 751 "imageop.c"
        var $54=(($53+1)&4294967295); //@line 751 "imageop.c"
        HEAP[$ncp]=$54; //@line 751 "imageop.c"
        var $55=HEAP[$ncp]; //@line 752 "imageop.c"
        var $56=HEAP[$value]; //@line 752 "imageop.c"
        HEAP[$55]=$56; //@line 752 "imageop.c"
        var $57=HEAP[$ncp]; //@line 752 "imageop.c"
        var $58=(($57+1)&4294967295); //@line 752 "imageop.c"
        HEAP[$ncp]=$58; //@line 752 "imageop.c"
        __label__ = 12; break; //@line 752 "imageop.c"
      case 12: // $bb11
        var $59=HEAP[$i]; //@line 743 "imageop.c"
        var $60=((($59) + 1)&4294967295); //@line 743 "imageop.c"
        HEAP[$i]=$60; //@line 743 "imageop.c"
        __label__ = 13; break; //@line 743 "imageop.c"
      case 13: // $bb12
        var $61=HEAP[$len]; //@line 743 "imageop.c"
        var $62=HEAP[$i]; //@line 743 "imageop.c"
        var $63=((($62))|0) < ((($61))|0); //@line 743 "imageop.c"
        if ($63) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 743 "imageop.c"
      case 14: // $bb13
        var $64=HEAP[$rv]; //@line 755 "imageop.c"
        HEAP[$0]=$64; //@line 755 "imageop.c"
        __label__ = 15; break; //@line 755 "imageop.c"
      case 15: // $bb14
        var $65=HEAP[$0]; //@line 730 "imageop.c"
        HEAP[$retval]=$65; //@line 730 "imageop.c"
        __label__ = 16; break; //@line 730 "imageop.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 730 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 730 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initimageop() {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $_alloca_point_=0;
        var $0=HEAP[_Py_Py3kWarningFlag]; //@line 783 "imageop.c"
        var $1=((($0))|0)!=0; //@line 783 "imageop.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 783 "imageop.c"
      case 1: // $bb
        var $2=HEAP[_PyExc_DeprecationWarning]; //@line 783 "imageop.c"
        var $3=_PyErr_WarnEx($2, ((__str33)&4294967295), 2); //@line 783 "imageop.c"
        var $4=((($3))|0) < 0; //@line 783 "imageop.c"
        if ($4) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 783 "imageop.c"
      case 2: // $bb1
        var $5=_Py_InitModule4(((__str34)&4294967295), _imageop_methods, 0, 0, 1013); //@line 787 "imageop.c"
        HEAP[$m]=$5; //@line 787 "imageop.c"
        var $6=HEAP[$m]; //@line 788 "imageop.c"
        var $7=($6)==0; //@line 788 "imageop.c"
        if ($7) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 788 "imageop.c"
      case 3: // $bb2
        var $8=HEAP[$m]; //@line 790 "imageop.c"
        var $9=_PyModule_GetDict($8); //@line 790 "imageop.c"
        HEAP[_ImageopDict]=$9; //@line 790 "imageop.c"
        var $10=_PyErr_NewException(((__str35)&4294967295), 0, 0); //@line 791 "imageop.c"
        HEAP[_ImageopError]=$10; //@line 791 "imageop.c"
        var $11=HEAP[_ImageopError]; //@line 792 "imageop.c"
        var $12=($11)!=0; //@line 792 "imageop.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 792 "imageop.c"
      case 4: // $bb3
        var $13=HEAP[_ImageopError]; //@line 793 "imageop.c"
        var $14=HEAP[_ImageopDict]; //@line 793 "imageop.c"
        var $15=_PyDict_SetItemString($14, ((__str36)&4294967295), $13); //@line 793 "imageop.c"
        __label__ = 5; break; //@line 793 "imageop.c"
      case 5: // $bb4
        __label__ = 6; break; //@line 785 "imageop.c"
      case 6: // $return
        STACKTOP = __stackBase__;
        return; //@line 785 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initimageop"] = _initimageop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_imageop_crop,0,_imageop_scale,0,_imageop_grey2mono,0,_imageop_grey2grey2,0,_imageop_grey2grey4,0,_imageop_dither2mono,0,_imageop_dither2grey2,0,_imageop_mono2grey,0,_imageop_grey22grey,0,_imageop_grey42grey,0,_imageop_tovideo,0,_imageop_rgb2rgb8,0,_imageop_rgb82rgb,0,_imageop_rgb2grey,0,_imageop_grey2rgb,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([37,115,32,118,97,108,117,101,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,117,108,0] /* %s value is negative */, "i8", ALLOC_NORMAL);
_ImageopError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str1=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,114,114,101,99,116,32,108,101,110,103,116,104,0] /* String has incorrect */, "i8", ALLOC_NORMAL);
__str2=allocate([120,0] /* x\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([121,0] /* y\00 */, "i8", ALLOC_NORMAL);
_ImageopDict=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_bcos_8350=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str4=allocate([98,97,99,107,119,97,114,100,95,99,111,109,112,97,116,105,98,108,101,0] /* backward_compatible\ */, "i8", ALLOC_NORMAL);
__str5=allocate([115,35,105,105,105,105,105,105,105,0] /* s#iiiiiii\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0] /* Size should be 1, 2  */, "i8", ALLOC_NORMAL);
__str7=allocate([97,98,115,40,110,101,119,120,50,45,110,101,119,120,49,41,43,49,0] /* abs(newx2-newx1)+1\0 */, "i8", ALLOC_NORMAL);
__str8=allocate([97,98,115,40,110,101,119,121,50,45,110,101,119,121,49,41,43,49,0] /* abs(newy2-newy1)+1\0 */, "i8", ALLOC_NORMAL);
__str9=allocate([115,35,105,105,105,105,105,0] /* s#iiiii\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([110,101,119,120,0] /* newx\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([110,101,119,121,0] /* newy\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([115,35,105,105,105,0] /* s#iii\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,32,111,114,32,52,0] /* Size should be 1 or  */, "i8", ALLOC_NORMAL);
__str14=allocate([109,97,120,0] /* max\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([109,97,120,121,0] /* maxy\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([115,35,105,105,0] /* s#ii\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([115,35,105,105,105,105,0] /* s#iiii\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([99,114,111,112,0] /* crop\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([115,99,97,108,101,0] /* scale\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([103,114,101,121,50,109,111,110,111,0] /* grey2mono\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([103,114,101,121,50,103,114,101,121,50,0] /* grey2grey2\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([103,114,101,121,50,103,114,101,121,52,0] /* grey2grey4\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([100,105,116,104,101,114,50,109,111,110,111,0] /* dither2mono\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([100,105,116,104,101,114,50,103,114,101,121,50,0] /* dither2grey2\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([109,111,110,111,50,103,114,101,121,0] /* mono2grey\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([103,114,101,121,50,50,103,114,101,121,0] /* grey22grey\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([103,114,101,121,52,50,103,114,101,121,0] /* grey42grey\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([116,111,118,105,100,101,111,0] /* tovideo\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([114,103,98,50,114,103,98,56,0] /* rgb2rgb8\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([114,103,98,56,50,114,103,98,0] /* rgb82rgb\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([114,103,98,50,103,114,101,121,0] /* rgb2grey\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([103,114,101,121,50,114,103,98,0] /* grey2rgb\00 */, "i8", ALLOC_NORMAL);
_imageop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate([116,104,101,32,105,109,97,103,101,111,112,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,0] /* the imageop module h */, "i8", ALLOC_NORMAL);
__str34=allocate([105,109,97,103,101,111,112,0] /* imageop\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,109,97,103,101,111,112,46,101,114,114,111,114,0] /* imageop.error\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_imageop_methods]=((__str18)&4294967295);
HEAP[_imageop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_imageop_methods+16]=((__str19)&4294967295);
HEAP[_imageop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_imageop_methods+32]=((__str20)&4294967295);
HEAP[_imageop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_imageop_methods+48]=((__str21)&4294967295);
HEAP[_imageop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_imageop_methods+64]=((__str22)&4294967295);
HEAP[_imageop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_imageop_methods+80]=((__str23)&4294967295);
HEAP[_imageop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_imageop_methods+96]=((__str24)&4294967295);
HEAP[_imageop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_imageop_methods+112]=((__str25)&4294967295);
HEAP[_imageop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_imageop_methods+128]=((__str26)&4294967295);
HEAP[_imageop_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_imageop_methods+144]=((__str27)&4294967295);
HEAP[_imageop_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_imageop_methods+160]=((__str28)&4294967295);
HEAP[_imageop_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_imageop_methods+176]=((__str29)&4294967295);
HEAP[_imageop_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_imageop_methods+192]=((__str30)&4294967295);
HEAP[_imageop_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_imageop_methods+208]=((__str31)&4294967295);
HEAP[_imageop_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_imageop_methods+224]=((__str32)&4294967295);
HEAP[_imageop_methods+228]=(FUNCTION_TABLE_OFFSET + 30);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

