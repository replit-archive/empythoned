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



var $0___SIZE = 208; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 196; // %3
  
var $4___SIZE = 80; // %4
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PANEL___SIZE = 16; // %struct.PANEL
  
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCursesPanelObject___SIZE = 16; // %struct.PyCursesPanelObject
  
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
var $struct_list_of_panels___SIZE = 8; // %struct.list_of_panels
  
var $struct_pdat___SIZE = 12; // %struct.pdat
  
var _PyCursesVersion;
var __str;
var _catchall_ERR;
var __str1;
var _catchall_NULL;
var __str2;
var __Py_NoneStruct;
var _PyCursesError;
var __str3;
var _lop;
var _PyExc_RuntimeError;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __Py_ZeroStruct;
var __Py_TrueStruct;
var __str9;
var __str10;
var __str11;
var __str12;
var _PyExc_TypeError;
var __str13;
var _PyCurses_API;
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
var _PyCursesPanel_Methods;
var __str31;
var _PyCursesPanel_Type;
var __str32;
var __str33;
var __str34;
var _PyCurses_methods;
var _PyType_Type;
var __str35;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;


































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
        var $1=HEAP[$code_addr]; //@line 32 "_curses_panel.c"
        var $2=((($1))|0)!=-1; //@line 32 "_curses_panel.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 32 "_curses_panel.c"
      case 1: // $bb
        var $3=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 33 "_curses_panel.c"
        var $4=((($3) + 1)&4294967295); //@line 33 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$4; //@line 33 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 34 "_curses_panel.c"
        __label__ = 6; break; //@line 34 "_curses_panel.c"
      case 2: // $bb1
        var $5=HEAP[$fname_addr]; //@line 36 "_curses_panel.c"
        var $6=($5)==0; //@line 36 "_curses_panel.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 36 "_curses_panel.c"
      case 3: // $bb2
        var $7=HEAP[_catchall_ERR]; //@line 37 "_curses_panel.c"
        var $8=HEAP[_PyCursesError]; //@line 37 "_curses_panel.c"
        _PyErr_SetString($8, $7); //@line 37 "_curses_panel.c"
        __label__ = 5; break; //@line 37 "_curses_panel.c"
      case 4: // $bb3
        var $9=HEAP[_PyCursesError]; //@line 39 "_curses_panel.c"
        var $10=HEAP[$fname_addr]; //@line 39 "_curses_panel.c"
        var $11=_PyErr_Format($9, ((__str3)&4294967295), $10); //@line 39 "_curses_panel.c"
        __label__ = 5; break; //@line 39 "_curses_panel.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 41 "_curses_panel.c"
        __label__ = 6; break; //@line 41 "_curses_panel.c"
      case 6: // $bb5
        var $12=HEAP[$0]; //@line 34 "_curses_panel.c"
        HEAP[$retval]=$12; //@line 34 "_curses_panel.c"
        __label__ = 7; break; //@line 34 "_curses_panel.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 34 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 34 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _insert_lop($po) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $new=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$po_addr]=$po;
        var $1=_malloc(8); //@line 92 "_curses_panel.c"
        var $2=$1; //@line 92 "_curses_panel.c"
        HEAP[$new]=$2; //@line 92 "_curses_panel.c"
        var $3=HEAP[$new]; //@line 92 "_curses_panel.c"
        var $4=($3)==0; //@line 92 "_curses_panel.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 92 "_curses_panel.c"
      case 1: // $bb
        var $5=_PyErr_NoMemory(); //@line 93 "_curses_panel.c"
        HEAP[$0]=-1; //@line 94 "_curses_panel.c"
        __label__ = 3; break; //@line 94 "_curses_panel.c"
      case 2: // $bb1
        var $6=HEAP[$new]; //@line 96 "_curses_panel.c"
        var $7=(($6)&4294967295); //@line 96 "_curses_panel.c"
        var $8=HEAP[$po_addr]; //@line 96 "_curses_panel.c"
        HEAP[$7]=$8; //@line 96 "_curses_panel.c"
        var $9=HEAP[_lop]; //@line 97 "_curses_panel.c"
        var $10=HEAP[$new]; //@line 97 "_curses_panel.c"
        var $11=(($10+4)&4294967295); //@line 97 "_curses_panel.c"
        HEAP[$11]=$9; //@line 97 "_curses_panel.c"
        var $12=HEAP[$new]; //@line 98 "_curses_panel.c"
        HEAP[_lop]=$12; //@line 98 "_curses_panel.c"
        HEAP[$0]=0; //@line 99 "_curses_panel.c"
        __label__ = 3; break; //@line 99 "_curses_panel.c"
      case 3: // $bb2
        var $13=HEAP[$0]; //@line 94 "_curses_panel.c"
        HEAP[$retval]=$13; //@line 94 "_curses_panel.c"
        __label__ = 4; break; //@line 94 "_curses_panel.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 94 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 94 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _remove_lop($po) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr=__stackBase__;
        var $temp=__stackBase__+4;
        var $n=__stackBase__+8;
        var $_alloca_point_=0;
        HEAP[$po_addr]=$po;
        var $0=HEAP[_lop]; //@line 108 "_curses_panel.c"
        HEAP[$temp]=$0; //@line 108 "_curses_panel.c"
        var $1=HEAP[$temp]; //@line 109 "_curses_panel.c"
        var $2=(($1)&4294967295); //@line 109 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 109 "_curses_panel.c"
        var $4=HEAP[$po_addr]; //@line 109 "_curses_panel.c"
        var $5=($3)==($4); //@line 109 "_curses_panel.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 109 "_curses_panel.c"
      case 1: // $bb
        var $6=HEAP[$temp]; //@line 110 "_curses_panel.c"
        var $7=(($6+4)&4294967295); //@line 110 "_curses_panel.c"
        var $8=HEAP[$7]; //@line 110 "_curses_panel.c"
        HEAP[_lop]=$8; //@line 110 "_curses_panel.c"
        var $9=HEAP[$temp]; //@line 111 "_curses_panel.c"
        var $10=$9; //@line 111 "_curses_panel.c"
        _free($10); //@line 111 "_curses_panel.c"
        __label__ = 9; break; //@line 111 "_curses_panel.c"
      case 2: // $bb1
        __label__ = 6; break; //@line 111 "_curses_panel.c"
      case 3: // $bb2
        var $11=HEAP[$temp]; //@line 115 "_curses_panel.c"
        var $12=(($11+4)&4294967295); //@line 115 "_curses_panel.c"
        var $13=HEAP[$12]; //@line 115 "_curses_panel.c"
        var $14=($13)==0; //@line 115 "_curses_panel.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 115 "_curses_panel.c"
      case 4: // $bb3
        var $15=HEAP[_PyExc_RuntimeError]; //@line 116 "_curses_panel.c"
        _PyErr_SetString($15, ((__str4)&4294967295)); //@line 116 "_curses_panel.c"
        __label__ = 9; break; //@line 116 "_curses_panel.c"
      case 5: // $bb4
        var $16=HEAP[$temp]; //@line 120 "_curses_panel.c"
        var $17=(($16+4)&4294967295); //@line 120 "_curses_panel.c"
        var $18=HEAP[$17]; //@line 120 "_curses_panel.c"
        HEAP[$temp]=$18; //@line 120 "_curses_panel.c"
        __label__ = 6; break; //@line 120 "_curses_panel.c"
      case 6: // $bb5
        var $19=HEAP[$temp]; //@line 114 "_curses_panel.c"
        var $20=(($19+4)&4294967295); //@line 114 "_curses_panel.c"
        var $21=HEAP[$20]; //@line 114 "_curses_panel.c"
        var $22=($21)==0; //@line 114 "_curses_panel.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 114 "_curses_panel.c"
      case 7: // $bb6
        var $23=HEAP[$temp]; //@line 114 "_curses_panel.c"
        var $24=(($23+4)&4294967295); //@line 114 "_curses_panel.c"
        var $25=HEAP[$24]; //@line 114 "_curses_panel.c"
        var $26=(($25)&4294967295); //@line 114 "_curses_panel.c"
        var $27=HEAP[$26]; //@line 114 "_curses_panel.c"
        var $28=HEAP[$po_addr]; //@line 114 "_curses_panel.c"
        var $29=($27)!=($28); //@line 114 "_curses_panel.c"
        if ($29) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 114 "_curses_panel.c"
      case 8: // $bb7
        var $30=HEAP[$temp]; //@line 122 "_curses_panel.c"
        var $31=(($30+4)&4294967295); //@line 122 "_curses_panel.c"
        var $32=HEAP[$31]; //@line 122 "_curses_panel.c"
        var $33=(($32+4)&4294967295); //@line 122 "_curses_panel.c"
        var $34=HEAP[$33]; //@line 122 "_curses_panel.c"
        HEAP[$n]=$34; //@line 122 "_curses_panel.c"
        var $35=HEAP[$temp]; //@line 123 "_curses_panel.c"
        var $36=(($35+4)&4294967295); //@line 123 "_curses_panel.c"
        var $37=HEAP[$36]; //@line 123 "_curses_panel.c"
        var $38=$37; //@line 123 "_curses_panel.c"
        _free($38); //@line 123 "_curses_panel.c"
        var $39=HEAP[$temp]; //@line 124 "_curses_panel.c"
        var $40=(($39+4)&4294967295); //@line 124 "_curses_panel.c"
        var $41=HEAP[$n]; //@line 124 "_curses_panel.c"
        HEAP[$40]=$41; //@line 124 "_curses_panel.c"
        __label__ = 9; break; //@line 124 "_curses_panel.c"
      case 9: // $bb8
        __label__ = 10; break; //@line 112 "_curses_panel.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 112 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _find_po($pan) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pan_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $temp=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$pan_addr]=$pan;
        var $1=HEAP[_lop]; //@line 133 "_curses_panel.c"
        HEAP[$temp]=$1; //@line 133 "_curses_panel.c"
        __label__ = 4; break; //@line 133 "_curses_panel.c"
      case 1: // $bb
        var $2=HEAP[$temp]; //@line 134 "_curses_panel.c"
        var $3=(($2+4)&4294967295); //@line 134 "_curses_panel.c"
        var $4=HEAP[$3]; //@line 134 "_curses_panel.c"
        var $5=($4)==0; //@line 134 "_curses_panel.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 134 "_curses_panel.c"
      case 2: // $bb1
        HEAP[$0]=0; //@line 134 "_curses_panel.c"
        __label__ = 6; break; //@line 134 "_curses_panel.c"
      case 3: // $bb2
        var $6=HEAP[$temp]; //@line 133 "_curses_panel.c"
        var $7=(($6+4)&4294967295); //@line 133 "_curses_panel.c"
        var $8=HEAP[$7]; //@line 133 "_curses_panel.c"
        HEAP[$temp]=$8; //@line 133 "_curses_panel.c"
        __label__ = 4; break; //@line 133 "_curses_panel.c"
      case 4: // $bb3
        var $9=HEAP[$temp]; //@line 133 "_curses_panel.c"
        var $10=(($9)&4294967295); //@line 133 "_curses_panel.c"
        var $11=HEAP[$10]; //@line 133 "_curses_panel.c"
        var $12=(($11+8)&4294967295); //@line 133 "_curses_panel.c"
        var $13=HEAP[$12]; //@line 133 "_curses_panel.c"
        var $14=HEAP[$pan_addr]; //@line 133 "_curses_panel.c"
        var $15=($13)!=($14); //@line 133 "_curses_panel.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 133 "_curses_panel.c"
      case 5: // $bb4
        var $16=HEAP[$temp]; //@line 135 "_curses_panel.c"
        var $17=(($16)&4294967295); //@line 135 "_curses_panel.c"
        var $18=HEAP[$17]; //@line 135 "_curses_panel.c"
        HEAP[$0]=$18; //@line 135 "_curses_panel.c"
        __label__ = 6; break; //@line 135 "_curses_panel.c"
      case 6: // $bb5
        var $19=HEAP[$0]; //@line 134 "_curses_panel.c"
        HEAP[$retval]=$19; //@line 134 "_curses_panel.c"
        __label__ = 7; break; //@line 134 "_curses_panel.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 134 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 134 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_bottom_panel($self) {
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
        var $1=HEAP[$self_addr]; //@line 164 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 164 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 164 "_curses_panel.c"
        var $4=_bottom_panel($3); //@line 164 "_curses_panel.c"
        var $5=_PyCursesCheckERR($4, ((__str5)&4294967295)); //@line 164 "_curses_panel.c"
        HEAP[$0]=$5; //@line 164 "_curses_panel.c"
        var $6=HEAP[$0]; //@line 164 "_curses_panel.c"
        HEAP[$retval]=$6; //@line 164 "_curses_panel.c"
        __label__ = 1; break; //@line 164 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 164 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 164 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_hide_panel($self) {
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
        var $1=HEAP[$self_addr]; //@line 165 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 165 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 165 "_curses_panel.c"
        var $4=_hide_panel($3); //@line 165 "_curses_panel.c"
        var $5=_PyCursesCheckERR($4, ((__str6)&4294967295)); //@line 165 "_curses_panel.c"
        HEAP[$0]=$5; //@line 165 "_curses_panel.c"
        var $6=HEAP[$0]; //@line 165 "_curses_panel.c"
        HEAP[$retval]=$6; //@line 165 "_curses_panel.c"
        __label__ = 1; break; //@line 165 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 165 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 165 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_show_panel($self) {
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
        var $1=HEAP[$self_addr]; //@line 166 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 166 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 166 "_curses_panel.c"
        var $4=_show_panel($3); //@line 166 "_curses_panel.c"
        var $5=_PyCursesCheckERR($4, ((__str7)&4294967295)); //@line 166 "_curses_panel.c"
        HEAP[$0]=$5; //@line 166 "_curses_panel.c"
        var $6=HEAP[$0]; //@line 166 "_curses_panel.c"
        HEAP[$retval]=$6; //@line 166 "_curses_panel.c"
        __label__ = 1; break; //@line 166 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 166 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 166 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_top_panel($self) {
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
        var $1=HEAP[$self_addr]; //@line 167 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 167 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 167 "_curses_panel.c"
        var $4=_top_panel($3); //@line 167 "_curses_panel.c"
        var $5=_PyCursesCheckERR($4, ((__str8)&4294967295)); //@line 167 "_curses_panel.c"
        HEAP[$0]=$5; //@line 167 "_curses_panel.c"
        var $6=HEAP[$0]; //@line 167 "_curses_panel.c"
        HEAP[$retval]=$6; //@line 167 "_curses_panel.c"
        __label__ = 1; break; //@line 167 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 167 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 167 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_panel_hidden($self) {
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
        var $1=HEAP[$self_addr]; //@line 168 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 168 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 168 "_curses_panel.c"
        var $4=_panel_hidden($3); //@line 168 "_curses_panel.c"
        var $5=((($4))|0)==0; //@line 168 "_curses_panel.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 168 "_curses_panel.c"
      case 1: // $bb
        var $6=((__Py_ZeroStruct)&4294967295); //@line 168 "_curses_panel.c"
        var $7=HEAP[$6]; //@line 168 "_curses_panel.c"
        var $8=((($7) + 1)&4294967295); //@line 168 "_curses_panel.c"
        var $9=((__Py_ZeroStruct)&4294967295); //@line 168 "_curses_panel.c"
        HEAP[$9]=$8; //@line 168 "_curses_panel.c"
        HEAP[$0]=__Py_ZeroStruct; //@line 168 "_curses_panel.c"
        __label__ = 3; break; //@line 168 "_curses_panel.c"
      case 2: // $bb1
        var $10=((__Py_TrueStruct)&4294967295); //@line 168 "_curses_panel.c"
        var $11=HEAP[$10]; //@line 168 "_curses_panel.c"
        var $12=((($11) + 1)&4294967295); //@line 168 "_curses_panel.c"
        var $13=((__Py_TrueStruct)&4294967295); //@line 168 "_curses_panel.c"
        HEAP[$13]=$12; //@line 168 "_curses_panel.c"
        HEAP[$0]=__Py_TrueStruct; //@line 168 "_curses_panel.c"
        __label__ = 3; break; //@line 168 "_curses_panel.c"
      case 3: // $bb2
        var $14=HEAP[$0]; //@line 168 "_curses_panel.c"
        HEAP[$retval]=$14; //@line 168 "_curses_panel.c"
        __label__ = 4; break; //@line 168 "_curses_panel.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 168 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 168 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_move_panel($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 169 "_curses_panel.c"
        var $2=_PyArg_ParseTuple($1, ((__str9)&4294967295), $arg1, $arg2); //@line 169 "_curses_panel.c"
        var $3=((($2))|0)==0; //@line 169 "_curses_panel.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 169 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 169 "_curses_panel.c"
        __label__ = 3; break; //@line 169 "_curses_panel.c"
      case 2: // $bb1
        var $4=HEAP[$arg2]; //@line 169 "_curses_panel.c"
        var $5=HEAP[$arg1]; //@line 169 "_curses_panel.c"
        var $6=HEAP[$self_addr]; //@line 169 "_curses_panel.c"
        var $7=(($6+8)&4294967295); //@line 169 "_curses_panel.c"
        var $8=HEAP[$7]; //@line 169 "_curses_panel.c"
        var $9=_move_panel($8, $5, $4); //@line 169 "_curses_panel.c"
        var $10=_PyCursesCheckERR($9, ((__str10)&4294967295)); //@line 169 "_curses_panel.c"
        HEAP[$0]=$10; //@line 169 "_curses_panel.c"
        __label__ = 3; break; //@line 169 "_curses_panel.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 169 "_curses_panel.c"
        HEAP[$retval]=$11; //@line 169 "_curses_panel.c"
        __label__ = 4; break; //@line 169 "_curses_panel.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 169 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 169 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_New($pan, $wo) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pan_addr=__stackBase__;
        var $wo_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_10=__stackBase__+16;
        var $iftmp_9=__stackBase__+20;
        var $po=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$pan_addr]=$pan;
        HEAP[$wo_addr]=$wo;
        var $1=HEAP[((_PyCursesPanel_Type+16)&4294967295)]; //@line 178 "_curses_panel.c"
        var $2=((($1))|0) >= 0; //@line 178 "_curses_panel.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 178 "_curses_panel.c"
      case 1: // $bb
        var $3=HEAP[((_PyCursesPanel_Type+16)&4294967295)]; //@line 178 "_curses_panel.c"
        var $4=((($3))|0)!=0; //@line 178 "_curses_panel.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 178 "_curses_panel.c"
      case 2: // $bb1
        var $5=HEAP[((_PyCursesPanel_Type+16)&4294967295)]; //@line 178 "_curses_panel.c"
        HEAP[$iftmp_10]=$5; //@line 178 "_curses_panel.c"
        __label__ = 4; break; //@line 178 "_curses_panel.c"
      case 3: // $bb2
        HEAP[$iftmp_10]=1; //@line 178 "_curses_panel.c"
        __label__ = 4; break; //@line 178 "_curses_panel.c"
      case 4: // $bb3
        var $6=HEAP[$iftmp_10]; //@line 178 "_curses_panel.c"
        var $7=_malloc($6); //@line 178 "_curses_panel.c"
        var $8=$7; //@line 178 "_curses_panel.c"
        HEAP[$iftmp_9]=$8; //@line 178 "_curses_panel.c"
        __label__ = 6; break; //@line 178 "_curses_panel.c"
      case 5: // $bb4
        HEAP[$iftmp_9]=0; //@line 178 "_curses_panel.c"
        __label__ = 6; break; //@line 178 "_curses_panel.c"
      case 6: // $bb5
        var $9=HEAP[$iftmp_9]; //@line 178 "_curses_panel.c"
        var $10=_PyObject_Init($9, _PyCursesPanel_Type); //@line 178 "_curses_panel.c"
        var $11=$10; //@line 178 "_curses_panel.c"
        HEAP[$po]=$11; //@line 178 "_curses_panel.c"
        var $12=HEAP[$po]; //@line 179 "_curses_panel.c"
        var $13=($12)==0; //@line 179 "_curses_panel.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 179 "_curses_panel.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 179 "_curses_panel.c"
        __label__ = 13; break; //@line 179 "_curses_panel.c"
      case 8: // $bb7
        var $14=HEAP[$po]; //@line 180 "_curses_panel.c"
        var $15=(($14+8)&4294967295); //@line 180 "_curses_panel.c"
        var $16=HEAP[$pan_addr]; //@line 180 "_curses_panel.c"
        HEAP[$15]=$16; //@line 180 "_curses_panel.c"
        var $17=HEAP[$po]; //@line 181 "_curses_panel.c"
        var $18=_insert_lop($17); //@line 181 "_curses_panel.c"
        var $19=((($18))|0) < 0; //@line 181 "_curses_panel.c"
        if ($19) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 181 "_curses_panel.c"
      case 9: // $bb8
        var $20=HEAP[$po]; //@line 182 "_curses_panel.c"
        var $21=(($20+12)&4294967295); //@line 182 "_curses_panel.c"
        HEAP[$21]=0; //@line 182 "_curses_panel.c"
        var $22=HEAP[$po]; //@line 183 "_curses_panel.c"
        var $23=$22; //@line 183 "_curses_panel.c"
        var $24=(($23)&4294967295); //@line 183 "_curses_panel.c"
        var $25=HEAP[$24]; //@line 183 "_curses_panel.c"
        var $26=((($25) - 1)&4294967295); //@line 183 "_curses_panel.c"
        var $27=(($23)&4294967295); //@line 183 "_curses_panel.c"
        HEAP[$27]=$26; //@line 183 "_curses_panel.c"
        var $28=(($23)&4294967295); //@line 183 "_curses_panel.c"
        var $29=HEAP[$28]; //@line 183 "_curses_panel.c"
        var $30=((($29))|0)==0; //@line 183 "_curses_panel.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 183 "_curses_panel.c"
      case 10: // $bb9
        var $31=HEAP[$po]; //@line 183 "_curses_panel.c"
        var $32=$31; //@line 183 "_curses_panel.c"
        var $33=(($32+4)&4294967295); //@line 183 "_curses_panel.c"
        var $34=HEAP[$33]; //@line 183 "_curses_panel.c"
        var $35=(($34+24)&4294967295); //@line 183 "_curses_panel.c"
        var $36=HEAP[$35]; //@line 183 "_curses_panel.c"
        var $37=HEAP[$po]; //@line 183 "_curses_panel.c"
        var $38=$37; //@line 183 "_curses_panel.c"
        FUNCTION_TABLE[$36]($38); //@line 183 "_curses_panel.c"
        __label__ = 11; break; //@line 183 "_curses_panel.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 184 "_curses_panel.c"
        __label__ = 13; break; //@line 184 "_curses_panel.c"
      case 12: // $bb11
        var $39=HEAP[$po]; //@line 186 "_curses_panel.c"
        var $40=(($39+12)&4294967295); //@line 186 "_curses_panel.c"
        var $41=HEAP[$wo_addr]; //@line 186 "_curses_panel.c"
        HEAP[$40]=$41; //@line 186 "_curses_panel.c"
        var $42=HEAP[$wo_addr]; //@line 187 "_curses_panel.c"
        var $43=$42; //@line 187 "_curses_panel.c"
        var $44=(($43)&4294967295); //@line 187 "_curses_panel.c"
        var $45=HEAP[$44]; //@line 187 "_curses_panel.c"
        var $46=((($45) + 1)&4294967295); //@line 187 "_curses_panel.c"
        var $47=(($43)&4294967295); //@line 187 "_curses_panel.c"
        HEAP[$47]=$46; //@line 187 "_curses_panel.c"
        var $48=HEAP[$po]; //@line 188 "_curses_panel.c"
        var $49=$48; //@line 188 "_curses_panel.c"
        HEAP[$0]=$49; //@line 188 "_curses_panel.c"
        __label__ = 13; break; //@line 188 "_curses_panel.c"
      case 13: // $bb12
        var $50=HEAP[$0]; //@line 179 "_curses_panel.c"
        HEAP[$retval]=$50; //@line 179 "_curses_panel.c"
        __label__ = 14; break; //@line 179 "_curses_panel.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 179 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 179 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_Dealloc($po) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $po_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$po_addr]=$po;
        var $0=HEAP[$po_addr]; //@line 194 "_curses_panel.c"
        var $1=(($0+8)&4294967295); //@line 194 "_curses_panel.c"
        var $2=HEAP[$1]; //@line 194 "_curses_panel.c"
        var $3=_del_panel($2); //@line 194 "_curses_panel.c"
        var $4=HEAP[$po_addr]; //@line 195 "_curses_panel.c"
        var $5=(($4+12)&4294967295); //@line 195 "_curses_panel.c"
        var $6=HEAP[$5]; //@line 195 "_curses_panel.c"
        var $7=($6)!=0; //@line 195 "_curses_panel.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 195 "_curses_panel.c"
      case 1: // $bb
        var $8=HEAP[$po_addr]; //@line 196 "_curses_panel.c"
        var $9=(($8+12)&4294967295); //@line 196 "_curses_panel.c"
        var $10=HEAP[$9]; //@line 196 "_curses_panel.c"
        var $11=$10; //@line 196 "_curses_panel.c"
        var $12=(($11)&4294967295); //@line 196 "_curses_panel.c"
        var $13=HEAP[$12]; //@line 196 "_curses_panel.c"
        var $14=((($13) - 1)&4294967295); //@line 196 "_curses_panel.c"
        var $15=(($11)&4294967295); //@line 196 "_curses_panel.c"
        HEAP[$15]=$14; //@line 196 "_curses_panel.c"
        var $16=(($11)&4294967295); //@line 196 "_curses_panel.c"
        var $17=HEAP[$16]; //@line 196 "_curses_panel.c"
        var $18=((($17))|0)==0; //@line 196 "_curses_panel.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 196 "_curses_panel.c"
      case 2: // $bb1
        var $19=HEAP[$po_addr]; //@line 196 "_curses_panel.c"
        var $20=(($19+12)&4294967295); //@line 196 "_curses_panel.c"
        var $21=HEAP[$20]; //@line 196 "_curses_panel.c"
        var $22=$21; //@line 196 "_curses_panel.c"
        var $23=(($22+4)&4294967295); //@line 196 "_curses_panel.c"
        var $24=HEAP[$23]; //@line 196 "_curses_panel.c"
        var $25=(($24+24)&4294967295); //@line 196 "_curses_panel.c"
        var $26=HEAP[$25]; //@line 196 "_curses_panel.c"
        var $27=HEAP[$po_addr]; //@line 196 "_curses_panel.c"
        var $28=(($27+12)&4294967295); //@line 196 "_curses_panel.c"
        var $29=HEAP[$28]; //@line 196 "_curses_panel.c"
        var $30=$29; //@line 196 "_curses_panel.c"
        FUNCTION_TABLE[$26]($30); //@line 196 "_curses_panel.c"
        __label__ = 3; break; //@line 196 "_curses_panel.c"
      case 3: // $bb2
        var $31=HEAP[$po_addr]; //@line 197 "_curses_panel.c"
        _remove_lop($31); //@line 197 "_curses_panel.c"
        __label__ = 4; break; //@line 197 "_curses_panel.c"
      case 4: // $bb3
        var $32=HEAP[$po_addr]; //@line 199 "_curses_panel.c"
        var $33=$32; //@line 199 "_curses_panel.c"
        _free($33); //@line 199 "_curses_panel.c"
        __label__ = 5; break; //@line 200 "_curses_panel.c"
      case 5: // $return
        STACKTOP = __stackBase__;
        return; //@line 200 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_above($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pan=__stackBase__+12;
        var $po=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 210 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 210 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 210 "_curses_panel.c"
        var $4=_panel_above($3); //@line 210 "_curses_panel.c"
        HEAP[$pan]=$4; //@line 210 "_curses_panel.c"
        var $5=HEAP[$pan]; //@line 212 "_curses_panel.c"
        var $6=($5)==0; //@line 212 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 212 "_curses_panel.c"
      case 1: // $bb
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 214 "_curses_panel.c"
        var $8=((($7) + 1)&4294967295); //@line 214 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 214 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 215 "_curses_panel.c"
        __label__ = 5; break; //@line 215 "_curses_panel.c"
      case 2: // $bb1
        var $9=HEAP[$pan]; //@line 217 "_curses_panel.c"
        var $10=_find_po($9); //@line 217 "_curses_panel.c"
        HEAP[$po]=$10; //@line 217 "_curses_panel.c"
        var $11=HEAP[$po]; //@line 218 "_curses_panel.c"
        var $12=($11)==0; //@line 218 "_curses_panel.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 218 "_curses_panel.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_RuntimeError]; //@line 219 "_curses_panel.c"
        _PyErr_SetString($13, ((__str11)&4294967295)); //@line 219 "_curses_panel.c"
        HEAP[$0]=0; //@line 221 "_curses_panel.c"
        __label__ = 5; break; //@line 221 "_curses_panel.c"
      case 4: // $bb3
        var $14=HEAP[$po]; //@line 223 "_curses_panel.c"
        var $15=$14; //@line 223 "_curses_panel.c"
        var $16=(($15)&4294967295); //@line 223 "_curses_panel.c"
        var $17=HEAP[$16]; //@line 223 "_curses_panel.c"
        var $18=((($17) + 1)&4294967295); //@line 223 "_curses_panel.c"
        var $19=(($15)&4294967295); //@line 223 "_curses_panel.c"
        HEAP[$19]=$18; //@line 223 "_curses_panel.c"
        var $20=HEAP[$po]; //@line 224 "_curses_panel.c"
        var $21=$20; //@line 224 "_curses_panel.c"
        HEAP[$0]=$21; //@line 224 "_curses_panel.c"
        __label__ = 5; break; //@line 224 "_curses_panel.c"
      case 5: // $bb4
        var $22=HEAP[$0]; //@line 215 "_curses_panel.c"
        HEAP[$retval]=$22; //@line 215 "_curses_panel.c"
        __label__ = 6; break; //@line 215 "_curses_panel.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 215 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 215 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_below($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pan=__stackBase__+12;
        var $po=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 235 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 235 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 235 "_curses_panel.c"
        var $4=_panel_below($3); //@line 235 "_curses_panel.c"
        HEAP[$pan]=$4; //@line 235 "_curses_panel.c"
        var $5=HEAP[$pan]; //@line 237 "_curses_panel.c"
        var $6=($5)==0; //@line 237 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 237 "_curses_panel.c"
      case 1: // $bb
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 239 "_curses_panel.c"
        var $8=((($7) + 1)&4294967295); //@line 239 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 239 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 240 "_curses_panel.c"
        __label__ = 5; break; //@line 240 "_curses_panel.c"
      case 2: // $bb1
        var $9=HEAP[$pan]; //@line 242 "_curses_panel.c"
        var $10=_find_po($9); //@line 242 "_curses_panel.c"
        HEAP[$po]=$10; //@line 242 "_curses_panel.c"
        var $11=HEAP[$po]; //@line 243 "_curses_panel.c"
        var $12=($11)==0; //@line 243 "_curses_panel.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 243 "_curses_panel.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_RuntimeError]; //@line 244 "_curses_panel.c"
        _PyErr_SetString($13, ((__str12)&4294967295)); //@line 244 "_curses_panel.c"
        HEAP[$0]=0; //@line 246 "_curses_panel.c"
        __label__ = 5; break; //@line 246 "_curses_panel.c"
      case 4: // $bb3
        var $14=HEAP[$po]; //@line 248 "_curses_panel.c"
        var $15=$14; //@line 248 "_curses_panel.c"
        var $16=(($15)&4294967295); //@line 248 "_curses_panel.c"
        var $17=HEAP[$16]; //@line 248 "_curses_panel.c"
        var $18=((($17) + 1)&4294967295); //@line 248 "_curses_panel.c"
        var $19=(($15)&4294967295); //@line 248 "_curses_panel.c"
        HEAP[$19]=$18; //@line 248 "_curses_panel.c"
        var $20=HEAP[$po]; //@line 249 "_curses_panel.c"
        var $21=$20; //@line 249 "_curses_panel.c"
        HEAP[$0]=$21; //@line 249 "_curses_panel.c"
        __label__ = 5; break; //@line 249 "_curses_panel.c"
      case 5: // $bb4
        var $22=HEAP[$0]; //@line 240 "_curses_panel.c"
        HEAP[$retval]=$22; //@line 240 "_curses_panel.c"
        __label__ = 6; break; //@line 240 "_curses_panel.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 240 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 240 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_window($self) {
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
        var $1=HEAP[$self_addr]; //@line 255 "_curses_panel.c"
        var $2=(($1+12)&4294967295); //@line 255 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 255 "_curses_panel.c"
        var $4=$3; //@line 255 "_curses_panel.c"
        var $5=(($4)&4294967295); //@line 255 "_curses_panel.c"
        var $6=HEAP[$5]; //@line 255 "_curses_panel.c"
        var $7=((($6) + 1)&4294967295); //@line 255 "_curses_panel.c"
        var $8=(($4)&4294967295); //@line 255 "_curses_panel.c"
        HEAP[$8]=$7; //@line 255 "_curses_panel.c"
        var $9=HEAP[$self_addr]; //@line 256 "_curses_panel.c"
        var $10=(($9+12)&4294967295); //@line 256 "_curses_panel.c"
        var $11=HEAP[$10]; //@line 256 "_curses_panel.c"
        var $12=$11; //@line 256 "_curses_panel.c"
        HEAP[$0]=$12; //@line 256 "_curses_panel.c"
        var $13=HEAP[$0]; //@line 256 "_curses_panel.c"
        HEAP[$retval]=$13; //@line 256 "_curses_panel.c"
        __label__ = 1; break; //@line 256 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 256 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 256 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_replace_panel($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $po=__stackBase__+16;
        var $temp=__stackBase__+20;
        var $rtn=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 266 "_curses_panel.c"
        var $2=_PyTuple_Size($1); //@line 266 "_curses_panel.c"
        var $3=((($2))|0)!=1; //@line 266 "_curses_panel.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 266 "_curses_panel.c"
      case 1: // $bb
        var $4=HEAP[_PyExc_TypeError]; //@line 267 "_curses_panel.c"
        _PyErr_SetString($4, ((__str13)&4294967295)); //@line 267 "_curses_panel.c"
        HEAP[$0]=0; //@line 268 "_curses_panel.c"
        __label__ = 11; break; //@line 268 "_curses_panel.c"
      case 2: // $bb1
        var $5=HEAP[_PyCurses_API]; //@line 270 "_curses_panel.c"
        var $6=(($5)&4294967295); //@line 270 "_curses_panel.c"
        var $7=HEAP[$6]; //@line 270 "_curses_panel.c"
        var $8=$7; //@line 270 "_curses_panel.c"
        var $9=HEAP[$args_addr]; //@line 270 "_curses_panel.c"
        var $10=_PyArg_ParseTuple($9, ((__str14)&4294967295), $8, $temp); //@line 270 "_curses_panel.c"
        var $11=((($10))|0)==0; //@line 270 "_curses_panel.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 270 "_curses_panel.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 272 "_curses_panel.c"
        __label__ = 11; break; //@line 272 "_curses_panel.c"
      case 4: // $bb3
        var $12=HEAP[$self_addr]; //@line 274 "_curses_panel.c"
        var $13=(($12+8)&4294967295); //@line 274 "_curses_panel.c"
        var $14=HEAP[$13]; //@line 274 "_curses_panel.c"
        var $15=_find_po($14); //@line 274 "_curses_panel.c"
        HEAP[$po]=$15; //@line 274 "_curses_panel.c"
        var $16=HEAP[$po]; //@line 275 "_curses_panel.c"
        var $17=($16)==0; //@line 275 "_curses_panel.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 275 "_curses_panel.c"
      case 5: // $bb4
        var $18=HEAP[_PyExc_RuntimeError]; //@line 276 "_curses_panel.c"
        _PyErr_SetString($18, ((__str15)&4294967295)); //@line 276 "_curses_panel.c"
        HEAP[$0]=0; //@line 278 "_curses_panel.c"
        __label__ = 11; break; //@line 278 "_curses_panel.c"
      case 6: // $bb5
        var $19=HEAP[$temp]; //@line 281 "_curses_panel.c"
        var $20=(($19+8)&4294967295); //@line 281 "_curses_panel.c"
        var $21=HEAP[$20]; //@line 281 "_curses_panel.c"
        var $22=HEAP[$self_addr]; //@line 281 "_curses_panel.c"
        var $23=(($22+8)&4294967295); //@line 281 "_curses_panel.c"
        var $24=HEAP[$23]; //@line 281 "_curses_panel.c"
        var $25=_replace_panel($24, $21); //@line 281 "_curses_panel.c"
        HEAP[$rtn]=$25; //@line 281 "_curses_panel.c"
        var $26=HEAP[$rtn]; //@line 282 "_curses_panel.c"
        var $27=((($26))|0)==-1; //@line 282 "_curses_panel.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 282 "_curses_panel.c"
      case 7: // $bb6
        var $28=HEAP[_PyCursesError]; //@line 283 "_curses_panel.c"
        _PyErr_SetString($28, ((__str16)&4294967295)); //@line 283 "_curses_panel.c"
        HEAP[$0]=0; //@line 284 "_curses_panel.c"
        __label__ = 11; break; //@line 284 "_curses_panel.c"
      case 8: // $bb7
        var $29=HEAP[$po]; //@line 286 "_curses_panel.c"
        var $30=(($29+12)&4294967295); //@line 286 "_curses_panel.c"
        var $31=HEAP[$30]; //@line 286 "_curses_panel.c"
        var $32=$31; //@line 286 "_curses_panel.c"
        var $33=(($32)&4294967295); //@line 286 "_curses_panel.c"
        var $34=HEAP[$33]; //@line 286 "_curses_panel.c"
        var $35=((($34) - 1)&4294967295); //@line 286 "_curses_panel.c"
        var $36=(($32)&4294967295); //@line 286 "_curses_panel.c"
        HEAP[$36]=$35; //@line 286 "_curses_panel.c"
        var $37=(($32)&4294967295); //@line 286 "_curses_panel.c"
        var $38=HEAP[$37]; //@line 286 "_curses_panel.c"
        var $39=((($38))|0)==0; //@line 286 "_curses_panel.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 286 "_curses_panel.c"
      case 9: // $bb8
        var $40=HEAP[$po]; //@line 286 "_curses_panel.c"
        var $41=(($40+12)&4294967295); //@line 286 "_curses_panel.c"
        var $42=HEAP[$41]; //@line 286 "_curses_panel.c"
        var $43=$42; //@line 286 "_curses_panel.c"
        var $44=(($43+4)&4294967295); //@line 286 "_curses_panel.c"
        var $45=HEAP[$44]; //@line 286 "_curses_panel.c"
        var $46=(($45+24)&4294967295); //@line 286 "_curses_panel.c"
        var $47=HEAP[$46]; //@line 286 "_curses_panel.c"
        var $48=HEAP[$po]; //@line 286 "_curses_panel.c"
        var $49=(($48+12)&4294967295); //@line 286 "_curses_panel.c"
        var $50=HEAP[$49]; //@line 286 "_curses_panel.c"
        var $51=$50; //@line 286 "_curses_panel.c"
        FUNCTION_TABLE[$47]($51); //@line 286 "_curses_panel.c"
        __label__ = 10; break; //@line 286 "_curses_panel.c"
      case 10: // $bb9
        var $52=HEAP[$temp]; //@line 287 "_curses_panel.c"
        var $53=HEAP[$po]; //@line 287 "_curses_panel.c"
        var $54=(($53+12)&4294967295); //@line 287 "_curses_panel.c"
        HEAP[$54]=$52; //@line 287 "_curses_panel.c"
        var $55=HEAP[$po]; //@line 288 "_curses_panel.c"
        var $56=(($55+12)&4294967295); //@line 288 "_curses_panel.c"
        var $57=HEAP[$56]; //@line 288 "_curses_panel.c"
        var $58=$57; //@line 288 "_curses_panel.c"
        var $59=(($58)&4294967295); //@line 288 "_curses_panel.c"
        var $60=HEAP[$59]; //@line 288 "_curses_panel.c"
        var $61=((($60) + 1)&4294967295); //@line 288 "_curses_panel.c"
        var $62=(($58)&4294967295); //@line 288 "_curses_panel.c"
        HEAP[$62]=$61; //@line 288 "_curses_panel.c"
        var $63=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 289 "_curses_panel.c"
        var $64=((($63) + 1)&4294967295); //@line 289 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$64; //@line 289 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 290 "_curses_panel.c"
        __label__ = 11; break; //@line 290 "_curses_panel.c"
      case 11: // $bb10
        var $65=HEAP[$0]; //@line 268 "_curses_panel.c"
        HEAP[$retval]=$65; //@line 268 "_curses_panel.c"
        __label__ = 12; break; //@line 268 "_curses_panel.c"
      case 12: // $return
        var $retval11=HEAP[$retval]; //@line 268 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 268 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_set_panel_userptr($self, $obj) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $obj_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$obj_addr]=$obj;
        var $1=HEAP[$obj_addr]; //@line 296 "_curses_panel.c"
        var $2=(($1)&4294967295); //@line 296 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 296 "_curses_panel.c"
        var $4=((($3) + 1)&4294967295); //@line 296 "_curses_panel.c"
        var $5=HEAP[$obj_addr]; //@line 296 "_curses_panel.c"
        var $6=(($5)&4294967295); //@line 296 "_curses_panel.c"
        HEAP[$6]=$4; //@line 296 "_curses_panel.c"
        var $7=HEAP[$self_addr]; //@line 297 "_curses_panel.c"
        var $8=(($7+8)&4294967295); //@line 297 "_curses_panel.c"
        var $9=HEAP[$8]; //@line 297 "_curses_panel.c"
        var $10=HEAP[$obj_addr]; //@line 297 "_curses_panel.c"
        var $11=$10; //@line 297 "_curses_panel.c"
        var $12=_set_panel_userptr($9, $11); //@line 297 "_curses_panel.c"
        var $13=_PyCursesCheckERR($12, ((__str17)&4294967295)); //@line 297 "_curses_panel.c"
        HEAP[$0]=$13; //@line 297 "_curses_panel.c"
        var $14=HEAP[$0]; //@line 297 "_curses_panel.c"
        HEAP[$retval]=$14; //@line 297 "_curses_panel.c"
        __label__ = 1; break; //@line 297 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 297 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 297 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_userptr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $obj=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_PyCurses_API]; //@line 305 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 305 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 305 "_curses_panel.c"
        var $4=$3; //@line 305 "_curses_panel.c"
        var $5=FUNCTION_TABLE[$4](); //@line 305 "_curses_panel.c"
        var $6=((($5))|0)==0; //@line 305 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 305 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 305 "_curses_panel.c"
        __label__ = 5; break; //@line 305 "_curses_panel.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 306 "_curses_panel.c"
        var $8=(($7+8)&4294967295); //@line 306 "_curses_panel.c"
        var $9=HEAP[$8]; //@line 306 "_curses_panel.c"
        var $10=_panel_userptr($9); //@line 306 "_curses_panel.c"
        var $11=$10; //@line 306 "_curses_panel.c"
        HEAP[$obj]=$11; //@line 306 "_curses_panel.c"
        var $12=HEAP[$obj]; //@line 307 "_curses_panel.c"
        var $13=($12)==0; //@line 307 "_curses_panel.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 307 "_curses_panel.c"
      case 3: // $bb2
        var $14=HEAP[_PyCursesError]; //@line 308 "_curses_panel.c"
        _PyErr_SetString($14, ((__str18)&4294967295)); //@line 308 "_curses_panel.c"
        HEAP[$0]=0; //@line 309 "_curses_panel.c"
        __label__ = 5; break; //@line 309 "_curses_panel.c"
      case 4: // $bb3
        var $15=HEAP[$obj]; //@line 312 "_curses_panel.c"
        var $16=(($15)&4294967295); //@line 312 "_curses_panel.c"
        var $17=HEAP[$16]; //@line 312 "_curses_panel.c"
        var $18=((($17) + 1)&4294967295); //@line 312 "_curses_panel.c"
        var $19=HEAP[$obj]; //@line 312 "_curses_panel.c"
        var $20=(($19)&4294967295); //@line 312 "_curses_panel.c"
        HEAP[$20]=$18; //@line 312 "_curses_panel.c"
        var $21=HEAP[$obj]; //@line 313 "_curses_panel.c"
        HEAP[$0]=$21; //@line 313 "_curses_panel.c"
        __label__ = 5; break; //@line 313 "_curses_panel.c"
      case 5: // $bb4
        var $22=HEAP[$0]; //@line 305 "_curses_panel.c"
        HEAP[$retval]=$22; //@line 305 "_curses_panel.c"
        __label__ = 6; break; //@line 305 "_curses_panel.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 305 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 305 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCursesPanel_GetAttr($self, $name) {
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
        var $1=HEAP[$self_addr]; //@line 338 "_curses_panel.c"
        var $2=$1; //@line 338 "_curses_panel.c"
        var $3=HEAP[$name_addr]; //@line 338 "_curses_panel.c"
        var $4=_Py_FindMethod(_PyCursesPanel_Methods, $2, $3); //@line 338 "_curses_panel.c"
        HEAP[$0]=$4; //@line 338 "_curses_panel.c"
        var $5=HEAP[$0]; //@line 338 "_curses_panel.c"
        HEAP[$retval]=$5; //@line 338 "_curses_panel.c"
        __label__ = 1; break; //@line 338 "_curses_panel.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 338 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 338 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_bottom_panel($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pan=__stackBase__+12;
        var $po=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_PyCurses_API]; //@line 371 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 371 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 371 "_curses_panel.c"
        var $4=$3; //@line 371 "_curses_panel.c"
        var $5=FUNCTION_TABLE[$4](); //@line 371 "_curses_panel.c"
        var $6=((($5))|0)==0; //@line 371 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 371 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 371 "_curses_panel.c"
        __label__ = 7; break; //@line 371 "_curses_panel.c"
      case 2: // $bb1
        var $7=_panel_above(0); //@line 373 "_curses_panel.c"
        HEAP[$pan]=$7; //@line 373 "_curses_panel.c"
        var $8=HEAP[$pan]; //@line 375 "_curses_panel.c"
        var $9=($8)==0; //@line 375 "_curses_panel.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 375 "_curses_panel.c"
      case 3: // $bb2
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 377 "_curses_panel.c"
        var $11=((($10) + 1)&4294967295); //@line 377 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 377 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 378 "_curses_panel.c"
        __label__ = 7; break; //@line 378 "_curses_panel.c"
      case 4: // $bb3
        var $12=HEAP[$pan]; //@line 380 "_curses_panel.c"
        var $13=_find_po($12); //@line 380 "_curses_panel.c"
        HEAP[$po]=$13; //@line 380 "_curses_panel.c"
        var $14=HEAP[$po]; //@line 381 "_curses_panel.c"
        var $15=($14)==0; //@line 381 "_curses_panel.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 381 "_curses_panel.c"
      case 5: // $bb4
        var $16=HEAP[_PyExc_RuntimeError]; //@line 382 "_curses_panel.c"
        _PyErr_SetString($16, ((__str11)&4294967295)); //@line 382 "_curses_panel.c"
        HEAP[$0]=0; //@line 384 "_curses_panel.c"
        __label__ = 7; break; //@line 384 "_curses_panel.c"
      case 6: // $bb5
        var $17=HEAP[$po]; //@line 386 "_curses_panel.c"
        var $18=$17; //@line 386 "_curses_panel.c"
        var $19=(($18)&4294967295); //@line 386 "_curses_panel.c"
        var $20=HEAP[$19]; //@line 386 "_curses_panel.c"
        var $21=((($20) + 1)&4294967295); //@line 386 "_curses_panel.c"
        var $22=(($18)&4294967295); //@line 386 "_curses_panel.c"
        HEAP[$22]=$21; //@line 386 "_curses_panel.c"
        var $23=HEAP[$po]; //@line 387 "_curses_panel.c"
        var $24=$23; //@line 387 "_curses_panel.c"
        HEAP[$0]=$24; //@line 387 "_curses_panel.c"
        __label__ = 7; break; //@line 387 "_curses_panel.c"
      case 7: // $bb6
        var $25=HEAP[$0]; //@line 371 "_curses_panel.c"
        HEAP[$retval]=$25; //@line 371 "_curses_panel.c"
        __label__ = 8; break; //@line 371 "_curses_panel.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 371 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 371 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_new_panel($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $win=__stackBase__+16;
        var $pan=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[_PyCurses_API]; //@line 396 "_curses_panel.c"
        var $2=(($1)&4294967295); //@line 396 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 396 "_curses_panel.c"
        var $4=$3; //@line 396 "_curses_panel.c"
        var $5=HEAP[$args_addr]; //@line 396 "_curses_panel.c"
        var $6=_PyArg_ParseTuple($5, ((__str32)&4294967295), $4, $win); //@line 396 "_curses_panel.c"
        var $7=((($6))|0)==0; //@line 396 "_curses_panel.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 396 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 397 "_curses_panel.c"
        __label__ = 5; break; //@line 397 "_curses_panel.c"
      case 2: // $bb1
        var $8=HEAP[$win]; //@line 398 "_curses_panel.c"
        var $9=(($8+8)&4294967295); //@line 398 "_curses_panel.c"
        var $10=HEAP[$9]; //@line 398 "_curses_panel.c"
        var $11=_new_panel($10); //@line 398 "_curses_panel.c"
        HEAP[$pan]=$11; //@line 398 "_curses_panel.c"
        var $12=HEAP[$pan]; //@line 399 "_curses_panel.c"
        var $13=($12)==0; //@line 399 "_curses_panel.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 399 "_curses_panel.c"
      case 3: // $bb2
        var $14=HEAP[_catchall_NULL]; //@line 400 "_curses_panel.c"
        var $15=HEAP[_PyCursesError]; //@line 400 "_curses_panel.c"
        _PyErr_SetString($15, $14); //@line 400 "_curses_panel.c"
        HEAP[$0]=0; //@line 401 "_curses_panel.c"
        __label__ = 5; break; //@line 401 "_curses_panel.c"
      case 4: // $bb3
        var $16=HEAP[$win]; //@line 403 "_curses_panel.c"
        var $17=HEAP[$pan]; //@line 403 "_curses_panel.c"
        var $18=_PyCursesPanel_New($17, $16); //@line 403 "_curses_panel.c"
        HEAP[$0]=$18; //@line 403 "_curses_panel.c"
        __label__ = 5; break; //@line 403 "_curses_panel.c"
      case 5: // $bb4
        var $19=HEAP[$0]; //@line 397 "_curses_panel.c"
        HEAP[$retval]=$19; //@line 397 "_curses_panel.c"
        __label__ = 6; break; //@line 397 "_curses_panel.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 397 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 397 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_top_panel($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $pan=__stackBase__+12;
        var $po=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[_PyCurses_API]; //@line 417 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 417 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 417 "_curses_panel.c"
        var $4=$3; //@line 417 "_curses_panel.c"
        var $5=FUNCTION_TABLE[$4](); //@line 417 "_curses_panel.c"
        var $6=((($5))|0)==0; //@line 417 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 417 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 417 "_curses_panel.c"
        __label__ = 7; break; //@line 417 "_curses_panel.c"
      case 2: // $bb1
        var $7=_panel_below(0); //@line 419 "_curses_panel.c"
        HEAP[$pan]=$7; //@line 419 "_curses_panel.c"
        var $8=HEAP[$pan]; //@line 421 "_curses_panel.c"
        var $9=($8)==0; //@line 421 "_curses_panel.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 421 "_curses_panel.c"
      case 3: // $bb2
        var $10=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 423 "_curses_panel.c"
        var $11=((($10) + 1)&4294967295); //@line 423 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$11; //@line 423 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 424 "_curses_panel.c"
        __label__ = 7; break; //@line 424 "_curses_panel.c"
      case 4: // $bb3
        var $12=HEAP[$pan]; //@line 426 "_curses_panel.c"
        var $13=_find_po($12); //@line 426 "_curses_panel.c"
        HEAP[$po]=$13; //@line 426 "_curses_panel.c"
        var $14=HEAP[$po]; //@line 427 "_curses_panel.c"
        var $15=($14)==0; //@line 427 "_curses_panel.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 427 "_curses_panel.c"
      case 5: // $bb4
        var $16=HEAP[_PyExc_RuntimeError]; //@line 428 "_curses_panel.c"
        _PyErr_SetString($16, ((__str12)&4294967295)); //@line 428 "_curses_panel.c"
        HEAP[$0]=0; //@line 430 "_curses_panel.c"
        __label__ = 7; break; //@line 430 "_curses_panel.c"
      case 6: // $bb5
        var $17=HEAP[$po]; //@line 432 "_curses_panel.c"
        var $18=$17; //@line 432 "_curses_panel.c"
        var $19=(($18)&4294967295); //@line 432 "_curses_panel.c"
        var $20=HEAP[$19]; //@line 432 "_curses_panel.c"
        var $21=((($20) + 1)&4294967295); //@line 432 "_curses_panel.c"
        var $22=(($18)&4294967295); //@line 432 "_curses_panel.c"
        HEAP[$22]=$21; //@line 432 "_curses_panel.c"
        var $23=HEAP[$po]; //@line 433 "_curses_panel.c"
        var $24=$23; //@line 433 "_curses_panel.c"
        HEAP[$0]=$24; //@line 433 "_curses_panel.c"
        __label__ = 7; break; //@line 433 "_curses_panel.c"
      case 7: // $bb6
        var $25=HEAP[$0]; //@line 417 "_curses_panel.c"
        HEAP[$retval]=$25; //@line 417 "_curses_panel.c"
        __label__ = 8; break; //@line 417 "_curses_panel.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 417 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 417 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyCurses_update_panels($self) {
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
        var $1=HEAP[_PyCurses_API]; //@line 438 "_curses_panel.c"
        var $2=(($1+8)&4294967295); //@line 438 "_curses_panel.c"
        var $3=HEAP[$2]; //@line 438 "_curses_panel.c"
        var $4=$3; //@line 438 "_curses_panel.c"
        var $5=FUNCTION_TABLE[$4](); //@line 438 "_curses_panel.c"
        var $6=((($5))|0)==0; //@line 438 "_curses_panel.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 438 "_curses_panel.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 438 "_curses_panel.c"
        __label__ = 3; break; //@line 438 "_curses_panel.c"
      case 2: // $bb1
        _update_panels(); //@line 439 "_curses_panel.c"
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 440 "_curses_panel.c"
        var $8=((($7) + 1)&4294967295); //@line 440 "_curses_panel.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 440 "_curses_panel.c"
        HEAP[$0]=__Py_NoneStruct; //@line 441 "_curses_panel.c"
        __label__ = 3; break; //@line 441 "_curses_panel.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 438 "_curses_panel.c"
        HEAP[$retval]=$9; //@line 438 "_curses_panel.c"
        __label__ = 4; break; //@line 438 "_curses_panel.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 438 "_curses_panel.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 438 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_curses_panel() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $d=__stackBase__+4;
        var $v=__stackBase__+8;
        var $_alloca_point_=0;
        var $0=((_PyCursesPanel_Type+4)&4294967295); //@line 463 "_curses_panel.c"
        HEAP[$0]=_PyType_Type; //@line 463 "_curses_panel.c"
        var $1=_PyCapsule_Import(((__str35)&4294967295), 1); //@line 465 "_curses_panel.c"
        var $2=$1; //@line 465 "_curses_panel.c"
        HEAP[_PyCurses_API]=$2; //@line 465 "_curses_panel.c"
        var $3=_Py_InitModule4(((__str36)&4294967295), _PyCurses_methods, 0, 0, 1013); //@line 468 "_curses_panel.c"
        HEAP[$m]=$3; //@line 468 "_curses_panel.c"
        var $4=HEAP[$m]; //@line 469 "_curses_panel.c"
        var $5=($4)==0; //@line 469 "_curses_panel.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 469 "_curses_panel.c"
      case 1: // $bb
        var $6=HEAP[$m]; //@line 471 "_curses_panel.c"
        var $7=_PyModule_GetDict($6); //@line 471 "_curses_panel.c"
        HEAP[$d]=$7; //@line 471 "_curses_panel.c"
        var $8=_PyErr_NewException(((__str37)&4294967295), 0, 0); //@line 474 "_curses_panel.c"
        HEAP[_PyCursesError]=$8; //@line 474 "_curses_panel.c"
        var $9=HEAP[_PyCursesError]; //@line 475 "_curses_panel.c"
        var $10=HEAP[$d]; //@line 475 "_curses_panel.c"
        var $11=_PyDict_SetItemString($10, ((__str38)&4294967295), $9); //@line 475 "_curses_panel.c"
        var $12=HEAP[_PyCursesVersion]; //@line 478 "_curses_panel.c"
        var $13=_PyString_FromString($12); //@line 478 "_curses_panel.c"
        HEAP[$v]=$13; //@line 478 "_curses_panel.c"
        var $14=HEAP[$d]; //@line 479 "_curses_panel.c"
        var $15=HEAP[$v]; //@line 479 "_curses_panel.c"
        var $16=_PyDict_SetItemString($14, ((__str39)&4294967295), $15); //@line 479 "_curses_panel.c"
        var $17=HEAP[$d]; //@line 480 "_curses_panel.c"
        var $18=HEAP[$v]; //@line 480 "_curses_panel.c"
        var $19=_PyDict_SetItemString($17, ((__str40)&4294967295), $18); //@line 480 "_curses_panel.c"
        var $20=HEAP[$v]; //@line 481 "_curses_panel.c"
        var $21=(($20)&4294967295); //@line 481 "_curses_panel.c"
        var $22=HEAP[$21]; //@line 481 "_curses_panel.c"
        var $23=((($22) - 1)&4294967295); //@line 481 "_curses_panel.c"
        var $24=HEAP[$v]; //@line 481 "_curses_panel.c"
        var $25=(($24)&4294967295); //@line 481 "_curses_panel.c"
        HEAP[$25]=$23; //@line 481 "_curses_panel.c"
        var $26=HEAP[$v]; //@line 481 "_curses_panel.c"
        var $27=(($26)&4294967295); //@line 481 "_curses_panel.c"
        var $28=HEAP[$27]; //@line 481 "_curses_panel.c"
        var $29=((($28))|0)==0; //@line 481 "_curses_panel.c"
        if ($29) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 481 "_curses_panel.c"
      case 2: // $bb1
        var $30=HEAP[$v]; //@line 481 "_curses_panel.c"
        var $31=(($30+4)&4294967295); //@line 481 "_curses_panel.c"
        var $32=HEAP[$31]; //@line 481 "_curses_panel.c"
        var $33=(($32+24)&4294967295); //@line 481 "_curses_panel.c"
        var $34=HEAP[$33]; //@line 481 "_curses_panel.c"
        var $35=HEAP[$v]; //@line 481 "_curses_panel.c"
        FUNCTION_TABLE[$34]($35); //@line 481 "_curses_panel.c"
        __label__ = 3; break; //@line 481 "_curses_panel.c"
      case 3: // $bb2
        __label__ = 4; break; //@line 470 "_curses_panel.c"
      case 4: // $return
        STACKTOP = __stackBase__;
        return; //@line 470 "_curses_panel.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_curses_panel"] = _init_curses_panel;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyCursesPanel_above,0,_PyCursesPanel_below,0,_PyCursesPanel_bottom_panel,0,_PyCursesPanel_panel_hidden,0,_PyCursesPanel_hide_panel,0,_PyCursesPanel_move_panel,0,_PyCursesPanel_replace_panel,0,_PyCursesPanel_set_panel_userptr,0,_PyCursesPanel_show_panel,0,_PyCursesPanel_top_panel,0,_PyCursesPanel_userptr,0,_PyCursesPanel_window,0,_PyCursesPanel_Dealloc,0,_PyCursesPanel_GetAttr,0,_PyCurses_bottom_panel,0,_PyCurses_new_panel,0,_PyCurses_top_panel,0,_PyCurses_update_panels,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_PyCursesVersion=allocate(1, "i8*", ALLOC_NORMAL);
__str=allocate([50,46,49,0] /* 2.1\00 */, "i8", ALLOC_NORMAL);
_catchall_ERR=allocate(1, "i8*", ALLOC_NORMAL);
__str1=allocate([99,117,114,115,101,115,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* curses function retu */, "i8", ALLOC_NORMAL);
_catchall_NULL=allocate(1, "i8*", ALLOC_NORMAL);
__str2=allocate([99,117,114,115,101,115,32,102,117,110,99,116,105,111,110,32,114,101,116,117,114,110,101,100,32,78,85,76,76,0] /* curses function retu */, "i8", ALLOC_NORMAL);
_PyCursesError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([37,115,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* %s() returned ERR\00 */, "i8", ALLOC_NORMAL);
_lop=allocate(1, "%struct.list_of_panels*", ALLOC_NORMAL);
__str4=allocate([114,101,109,111,118,101,95,108,111,112,58,32,99,97,110,39,116,32,102,105,110,100,32,80,97,110,101,108,32,79,98,106,101,99,116,0] /* remove_lop: can't fi */, "i8", ALLOC_NORMAL);
__str5=allocate([98,111,116,116,111,109,95,112,97,110,101,108,0] /* bottom_panel\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([104,105,100,101,95,112,97,110,101,108,0] /* hide_panel\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([115,104,111,119,95,112,97,110,101,108,0] /* show_panel\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([116,111,112,95,112,97,110,101,108,0] /* top_panel\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([105,105,59,121,44,120,0] /* ii;y,x\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([109,111,118,101,95,112,97,110,101,108,0] /* move_panel\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([112,97,110,101,108,95,97,98,111,118,101,58,32,99,97,110,39,116,32,102,105,110,100,32,80,97,110,101,108,32,79,98,106,101,99,116,0] /* panel_above: can't f */, "i8", ALLOC_NORMAL);
__str12=allocate([112,97,110,101,108,95,98,101,108,111,119,58,32,99,97,110,39,116,32,102,105,110,100,32,80,97,110,101,108,32,79,98,106,101,99,116,0] /* panel_below: can't f */, "i8", ALLOC_NORMAL);
__str13=allocate([114,101,112,108,97,99,101,32,114,101,113,117,105,114,101,115,32,111,110,101,32,97,114,103,117,109,101,110,116,0] /* replace requires one */, "i8", ALLOC_NORMAL);
_PyCurses_API=allocate(1, "i8**", ALLOC_NORMAL);
__str14=allocate([79,33,59,119,105,110,100,111,119,32,111,98,106,101,99,116,0] /* O!;window object\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([114,101,112,108,97,99,101,95,112,97,110,101,108,58,32,99,97,110,39,116,32,102,105,110,100,32,80,97,110,101,108,32,79,98,106,101,99,116,0] /* replace_panel: can't */, "i8", ALLOC_NORMAL);
__str16=allocate([114,101,112,108,97,99,101,95,112,97,110,101,108,40,41,32,114,101,116,117,114,110,101,100,32,69,82,82,0] /* replace_panel() retu */, "i8", ALLOC_NORMAL);
__str17=allocate([115,101,116,95,112,97,110,101,108,95,117,115,101,114,112,116,114,0] /* set_panel_userptr\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([110,111,32,117,115,101,114,112,116,114,32,115,101,116,0] /* no userptr set\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([97,98,111,118,101,0] /* above\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([98,101,108,111,119,0] /* below\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([98,111,116,116,111,109,0] /* bottom\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([104,105,100,100,101,110,0] /* hidden\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([104,105,100,101,0] /* hide\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([109,111,118,101,0] /* move\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([115,101,116,95,117,115,101,114,112,116,114,0] /* set_userptr\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,104,111,119,0] /* show\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([116,111,112,0] /* top\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([117,115,101,114,112,116,114,0] /* userptr\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([119,105,110,100,111,119,0] /* window\00 */, "i8", ALLOC_NORMAL);
_PyCursesPanel_Methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([95,99,117,114,115,101,115,95,112,97,110,101,108,46,99,117,114,115,101,115,32,112,97,110,101,108,0] /* _curses_panel.curses */, "i8", ALLOC_NORMAL);
_PyCursesPanel_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([79,33,0] /* O!\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([110,101,119,95,112,97,110,101,108,0] /* new_panel\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([117,112,100,97,116,101,95,112,97,110,101,108,115,0] /* update_panels\00 */, "i8", ALLOC_NORMAL);
_PyCurses_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str35=allocate([95,99,117,114,115,101,115,46,95,67,95,65,80,73,0] /* _curses._C_API\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([95,99,117,114,115,101,115,95,112,97,110,101,108,0] /* _curses_panel\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([95,99,117,114,115,101,115,95,112,97,110,101,108,46,101,114,114,111,114,0] /* _curses_panel.error\ */, "i8", ALLOC_NORMAL);
__str38=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([118,101,114,115,105,111,110,0] /* version\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
HEAP[_PyCursesVersion]=((__str)&4294967295);
HEAP[_catchall_ERR]=((__str1)&4294967295);
HEAP[_catchall_NULL]=((__str2)&4294967295);
HEAP[_PyCursesPanel_Methods]=((__str19)&4294967295);
HEAP[_PyCursesPanel_Methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_PyCursesPanel_Methods+16]=((__str20)&4294967295);
HEAP[_PyCursesPanel_Methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_PyCursesPanel_Methods+32]=((__str21)&4294967295);
HEAP[_PyCursesPanel_Methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_PyCursesPanel_Methods+48]=((__str22)&4294967295);
HEAP[_PyCursesPanel_Methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_PyCursesPanel_Methods+64]=((__str23)&4294967295);
HEAP[_PyCursesPanel_Methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyCursesPanel_Methods+80]=((__str24)&4294967295);
HEAP[_PyCursesPanel_Methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyCursesPanel_Methods+96]=((__str25)&4294967295);
HEAP[_PyCursesPanel_Methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyCursesPanel_Methods+112]=((__str26)&4294967295);
HEAP[_PyCursesPanel_Methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyCursesPanel_Methods+128]=((__str27)&4294967295);
HEAP[_PyCursesPanel_Methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyCursesPanel_Methods+144]=((__str28)&4294967295);
HEAP[_PyCursesPanel_Methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_PyCursesPanel_Methods+160]=((__str29)&4294967295);
HEAP[_PyCursesPanel_Methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyCursesPanel_Methods+176]=((__str30)&4294967295);
HEAP[_PyCursesPanel_Methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyCursesPanel_Type+12]=((__str31)&4294967295);
HEAP[_PyCursesPanel_Type+24]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyCursesPanel_Type+32]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyCurses_methods]=((__str5)&4294967295);
HEAP[_PyCurses_methods+4]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyCurses_methods+16]=((__str33)&4294967295);
HEAP[_PyCurses_methods+20]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_PyCurses_methods+32]=((__str8)&4294967295);
HEAP[_PyCurses_methods+36]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_PyCurses_methods+48]=((__str34)&4294967295);
HEAP[_PyCurses_methods+52]=(FUNCTION_TABLE_OFFSET + 36);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

