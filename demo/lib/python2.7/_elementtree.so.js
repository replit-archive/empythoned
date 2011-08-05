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



var $0___SIZE = 352; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
var $3___SIZE = 40; // %3
  
var $4___SIZE = 196; // %4
  
var $5___SIZE = 96; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 80; // %7
  
var $struct_ElementObject___SIZE = 24; // %struct.ElementObject
  
var $struct_ElementObjectExtra___SIZE = 32; // %struct.ElementObjectExtra
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyCompilerFlags___SIZE = 4; // %struct.PyCompilerFlags
  
var $struct_PyExpat_CAPI___SIZE = 80; // %struct.PyExpat_CAPI
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 0; // %struct.PyMemberDef
  var $struct_PyMemberDef___FLATTENER = [];
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySliceObject___SIZE = 20; // %struct.PySliceObject
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_TreeBuilderObject___SIZE = 52; // %struct.TreeBuilderObject
  
var $struct_XMLParserObject___SIZE = 52; // %struct.XMLParserObject
  
var $struct_XML_Encoding___SIZE = 1036; // %struct.XML_Encoding
  var $struct_XML_Encoding___FLATTENER = [0,1024,1028,1032];
var $struct_XML_Memory_Handling_Suite___SIZE = 12; // %struct.XML_Memory_Handling_Suite
  
var $struct_XML_ParserStruct___SIZE = 0; // %struct.XML_ParserStruct
  var $struct_XML_ParserStruct___FLATTENER = [];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _elementtree_deepcopy_obj;
var _PyExc_RuntimeError;
var __str;
var __str1;
var __str2;
var __Py_NoneStruct;
var _PyDict_Type;
var _PyList_Type;
var __str3;
var __str4;
var __str5;
var __str6;
var __str7;
var __str8;
var __str9;
var _PyExc_TypeError;
var __str10;
var __str11;
var _elementpath_obj;
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
var _elementtree_iter_obj;
var __str24;
var __str25;
var _elementtree_itertext_obj;
var __str26;
var _PyExc_IndexError;
var __str27;
var __str28;
var __str29;
var __str30;
var __str31;
var __str32;
var _elementtree_copyelement_obj;
var __str33;
var __str34;
var __str35;
var _PyExc_ValueError;
var __str36;
var __str37;
var __str38;
var __str39;
var _PySlice_Type;
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
var __str58;
var _element_methods;
var __str59;
var __str60;
var __str61;
var __str62;
var _PyExc_AttributeError;
var __str63;
var _element_as_sequence;
var _element_as_mapping;
var __str64;
var _Element_Type;
var __str65;
var _elementtree_parseerror_obj;
var __str66;
var _PyString_Type;
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
var _treebuilder_methods;
var __str79;
var _TreeBuilder_Type;
var __str80;
var __str81;
var __str82;
var __str83;
var __str84;
var __str85;
var __str86;
var _expat_capi;
var __str87;
var __str88;
var _kwlist_12208;
var __str89;
var __str90;
var __str91;
var _memory_handler_12205;
var __str92;
var __str93;
var __str94;
var __str95;
var __str96;
var __str97;
var __str98;
var __str99;
var __str100;
var __str101;
var __str102;
var __str103;
var __str104;
var __str105;
var __str106;
var __str107;
var _xmlparser_methods;
var __str108;
var __str109;
var __str110;
var __str111;
var _XMLParser_Type;
var __str112;
var __str113;
var __functions;
var _PyType_Type;
var __str114;
var __str115;
var __str116;
var __str117;
var __str118;
var __str119;
var __str120;
var __str121;
var __str122;
var _PyExc_SyntaxError;
var __str123;
var __str124;































































  function _deepcopy($object, $memo) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $object_addr=__stackBase__;
        var $memo_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $args=__stackBase__+16;
        var $result=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$object_addr]=$object;
        HEAP[$memo_addr]=$memo;
        var $1=HEAP[_elementtree_deepcopy_obj]; //@line 142 "_elementtree.c"
        var $2=($1)==0; //@line 142 "_elementtree.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 142 "_elementtree.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_RuntimeError]; //@line 143 "_elementtree.c"
        _PyErr_SetString($3, ((__str)&4294967295)); //@line 143 "_elementtree.c"
        HEAP[$0]=0; //@line 147 "_elementtree.c"
        __label__ = 7; break; //@line 147 "_elementtree.c"
      case 2: // $bb1
        var $4=_PyTuple_New(2); //@line 150 "_elementtree.c"
        HEAP[$args]=$4; //@line 150 "_elementtree.c"
        var $5=HEAP[$args]; //@line 151 "_elementtree.c"
        var $6=($5)==0; //@line 151 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 151 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 152 "_elementtree.c"
        __label__ = 7; break; //@line 152 "_elementtree.c"
      case 4: // $bb3
        var $7=HEAP[$object_addr]; //@line 154 "_elementtree.c"
        var $8=(($7)&4294967295); //@line 154 "_elementtree.c"
        var $9=HEAP[$8]; //@line 154 "_elementtree.c"
        var $10=((($9) + 1)&4294967295); //@line 154 "_elementtree.c"
        var $11=HEAP[$object_addr]; //@line 154 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 154 "_elementtree.c"
        HEAP[$12]=$10; //@line 154 "_elementtree.c"
        var $13=HEAP[$args]; //@line 154 "_elementtree.c"
        var $14=$13; //@line 154 "_elementtree.c"
        var $15=(($14+12)&4294967295); //@line 154 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 154 "_elementtree.c"
        var $17=HEAP[$object_addr]; //@line 154 "_elementtree.c"
        HEAP[$16]=$17; //@line 154 "_elementtree.c"
        var $18=HEAP[$memo_addr]; //@line 155 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 155 "_elementtree.c"
        var $20=HEAP[$19]; //@line 155 "_elementtree.c"
        var $21=((($20) + 1)&4294967295); //@line 155 "_elementtree.c"
        var $22=HEAP[$memo_addr]; //@line 155 "_elementtree.c"
        var $23=(($22)&4294967295); //@line 155 "_elementtree.c"
        HEAP[$23]=$21; //@line 155 "_elementtree.c"
        var $24=HEAP[$args]; //@line 155 "_elementtree.c"
        var $25=$24; //@line 155 "_elementtree.c"
        var $26=(($25+12)&4294967295); //@line 155 "_elementtree.c"
        var $27=(($26+4)&4294967295); //@line 155 "_elementtree.c"
        var $28=HEAP[$memo_addr]; //@line 155 "_elementtree.c"
        HEAP[$27]=$28; //@line 155 "_elementtree.c"
        var $29=HEAP[_elementtree_deepcopy_obj]; //@line 157 "_elementtree.c"
        var $30=HEAP[$args]; //@line 157 "_elementtree.c"
        var $31=_PyObject_CallObject($29, $30); //@line 157 "_elementtree.c"
        HEAP[$result]=$31; //@line 157 "_elementtree.c"
        var $32=HEAP[$args]; //@line 159 "_elementtree.c"
        var $33=(($32)&4294967295); //@line 159 "_elementtree.c"
        var $34=HEAP[$33]; //@line 159 "_elementtree.c"
        var $35=((($34) - 1)&4294967295); //@line 159 "_elementtree.c"
        var $36=HEAP[$args]; //@line 159 "_elementtree.c"
        var $37=(($36)&4294967295); //@line 159 "_elementtree.c"
        HEAP[$37]=$35; //@line 159 "_elementtree.c"
        var $38=HEAP[$args]; //@line 159 "_elementtree.c"
        var $39=(($38)&4294967295); //@line 159 "_elementtree.c"
        var $40=HEAP[$39]; //@line 159 "_elementtree.c"
        var $41=((($40))|0)==0; //@line 159 "_elementtree.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 159 "_elementtree.c"
      case 5: // $bb4
        var $42=HEAP[$args]; //@line 159 "_elementtree.c"
        var $43=(($42+4)&4294967295); //@line 159 "_elementtree.c"
        var $44=HEAP[$43]; //@line 159 "_elementtree.c"
        var $45=(($44+24)&4294967295); //@line 159 "_elementtree.c"
        var $46=HEAP[$45]; //@line 159 "_elementtree.c"
        var $47=HEAP[$args]; //@line 159 "_elementtree.c"
        FUNCTION_TABLE[$46]($47); //@line 159 "_elementtree.c"
        __label__ = 6; break; //@line 159 "_elementtree.c"
      case 6: // $bb5
        var $48=HEAP[$result]; //@line 161 "_elementtree.c"
        HEAP[$0]=$48; //@line 161 "_elementtree.c"
        __label__ = 7; break; //@line 161 "_elementtree.c"
      case 7: // $bb6
        var $49=HEAP[$0]; //@line 147 "_elementtree.c"
        HEAP[$retval]=$49; //@line 147 "_elementtree.c"
        __label__ = 8; break; //@line 147 "_elementtree.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 147 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 147 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _list_join($list) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $list_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $joiner=__stackBase__+12;
        var $function=__stackBase__+16;
        var $args=__stackBase__+20;
        var $result=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$list_addr]=$list;
        var $1=HEAP[$list_addr]; //@line 174 "_elementtree.c"
        var $2=$1; //@line 174 "_elementtree.c"
        var $3=(($2+8)&4294967295); //@line 174 "_elementtree.c"
        var $4=HEAP[$3]; //@line 174 "_elementtree.c"
        if ($4 == 0) {
          __label__ = 1; break;
        }
        else if ($4 == 1) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $5=HEAP[$list_addr]; //@line 176 "_elementtree.c"
        var $6=(($5)&4294967295); //@line 176 "_elementtree.c"
        var $7=HEAP[$6]; //@line 176 "_elementtree.c"
        var $8=((($7) - 1)&4294967295); //@line 176 "_elementtree.c"
        var $9=HEAP[$list_addr]; //@line 176 "_elementtree.c"
        var $10=(($9)&4294967295); //@line 176 "_elementtree.c"
        HEAP[$10]=$8; //@line 176 "_elementtree.c"
        var $11=HEAP[$list_addr]; //@line 176 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 176 "_elementtree.c"
        var $13=HEAP[$12]; //@line 176 "_elementtree.c"
        var $14=((($13))|0)==0; //@line 176 "_elementtree.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 176 "_elementtree.c"
      case 2: // $bb1
        var $15=HEAP[$list_addr]; //@line 176 "_elementtree.c"
        var $16=(($15+4)&4294967295); //@line 176 "_elementtree.c"
        var $17=HEAP[$16]; //@line 176 "_elementtree.c"
        var $18=(($17+24)&4294967295); //@line 176 "_elementtree.c"
        var $19=HEAP[$18]; //@line 176 "_elementtree.c"
        var $20=HEAP[$list_addr]; //@line 176 "_elementtree.c"
        FUNCTION_TABLE[$19]($20); //@line 176 "_elementtree.c"
        __label__ = 3; break; //@line 176 "_elementtree.c"
      case 3: // $bb2
        var $21=_PyString_FromString(((__str1)&4294967295)); //@line 177 "_elementtree.c"
        HEAP[$0]=$21; //@line 177 "_elementtree.c"
        __label__ = 22; break; //@line 177 "_elementtree.c"
      case 4: // $bb3
        var $22=HEAP[$list_addr]; //@line 179 "_elementtree.c"
        var $23=$22; //@line 179 "_elementtree.c"
        var $24=(($23+12)&4294967295); //@line 179 "_elementtree.c"
        var $25=HEAP[$24]; //@line 179 "_elementtree.c"
        var $26=(($25)&4294967295); //@line 179 "_elementtree.c"
        var $27=HEAP[$26]; //@line 179 "_elementtree.c"
        HEAP[$result]=$27; //@line 179 "_elementtree.c"
        var $28=HEAP[$result]; //@line 180 "_elementtree.c"
        var $29=(($28)&4294967295); //@line 180 "_elementtree.c"
        var $30=HEAP[$29]; //@line 180 "_elementtree.c"
        var $31=((($30) + 1)&4294967295); //@line 180 "_elementtree.c"
        var $32=HEAP[$result]; //@line 180 "_elementtree.c"
        var $33=(($32)&4294967295); //@line 180 "_elementtree.c"
        HEAP[$33]=$31; //@line 180 "_elementtree.c"
        var $34=HEAP[$list_addr]; //@line 181 "_elementtree.c"
        var $35=(($34)&4294967295); //@line 181 "_elementtree.c"
        var $36=HEAP[$35]; //@line 181 "_elementtree.c"
        var $37=((($36) - 1)&4294967295); //@line 181 "_elementtree.c"
        var $38=HEAP[$list_addr]; //@line 181 "_elementtree.c"
        var $39=(($38)&4294967295); //@line 181 "_elementtree.c"
        HEAP[$39]=$37; //@line 181 "_elementtree.c"
        var $40=HEAP[$list_addr]; //@line 181 "_elementtree.c"
        var $41=(($40)&4294967295); //@line 181 "_elementtree.c"
        var $42=HEAP[$41]; //@line 181 "_elementtree.c"
        var $43=((($42))|0)==0; //@line 181 "_elementtree.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 181 "_elementtree.c"
      case 5: // $bb4
        var $44=HEAP[$list_addr]; //@line 181 "_elementtree.c"
        var $45=(($44+4)&4294967295); //@line 181 "_elementtree.c"
        var $46=HEAP[$45]; //@line 181 "_elementtree.c"
        var $47=(($46+24)&4294967295); //@line 181 "_elementtree.c"
        var $48=HEAP[$47]; //@line 181 "_elementtree.c"
        var $49=HEAP[$list_addr]; //@line 181 "_elementtree.c"
        FUNCTION_TABLE[$48]($49); //@line 181 "_elementtree.c"
        __label__ = 6; break; //@line 181 "_elementtree.c"
      case 6: // $bb5
        var $50=HEAP[$result]; //@line 182 "_elementtree.c"
        HEAP[$0]=$50; //@line 182 "_elementtree.c"
        __label__ = 22; break; //@line 182 "_elementtree.c"
      case 7: // $bb6
        var $51=HEAP[$list_addr]; //@line 188 "_elementtree.c"
        var $52=$51; //@line 188 "_elementtree.c"
        var $53=(($52+12)&4294967295); //@line 188 "_elementtree.c"
        var $54=HEAP[$53]; //@line 188 "_elementtree.c"
        var $55=(($54)&4294967295); //@line 188 "_elementtree.c"
        var $56=HEAP[$55]; //@line 188 "_elementtree.c"
        var $57=_PySequence_GetSlice($56, 0, 0); //@line 188 "_elementtree.c"
        HEAP[$joiner]=$57; //@line 188 "_elementtree.c"
        var $58=HEAP[$joiner]; //@line 189 "_elementtree.c"
        var $59=($58)==0; //@line 189 "_elementtree.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 189 "_elementtree.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 190 "_elementtree.c"
        __label__ = 22; break; //@line 190 "_elementtree.c"
      case 9: // $bb8
        var $60=HEAP[$joiner]; //@line 192 "_elementtree.c"
        var $61=_PyObject_GetAttrString($60, ((__str2)&4294967295)); //@line 192 "_elementtree.c"
        HEAP[$function]=$61; //@line 192 "_elementtree.c"
        var $62=HEAP[$function]; //@line 193 "_elementtree.c"
        var $63=($62)==0; //@line 193 "_elementtree.c"
        if ($63) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 193 "_elementtree.c"
      case 10: // $bb9
        var $64=HEAP[$joiner]; //@line 194 "_elementtree.c"
        var $65=(($64)&4294967295); //@line 194 "_elementtree.c"
        var $66=HEAP[$65]; //@line 194 "_elementtree.c"
        var $67=((($66) - 1)&4294967295); //@line 194 "_elementtree.c"
        var $68=HEAP[$joiner]; //@line 194 "_elementtree.c"
        var $69=(($68)&4294967295); //@line 194 "_elementtree.c"
        HEAP[$69]=$67; //@line 194 "_elementtree.c"
        var $70=HEAP[$joiner]; //@line 194 "_elementtree.c"
        var $71=(($70)&4294967295); //@line 194 "_elementtree.c"
        var $72=HEAP[$71]; //@line 194 "_elementtree.c"
        var $73=((($72))|0)==0; //@line 194 "_elementtree.c"
        if ($73) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 194 "_elementtree.c"
      case 11: // $bb10
        var $74=HEAP[$joiner]; //@line 194 "_elementtree.c"
        var $75=(($74+4)&4294967295); //@line 194 "_elementtree.c"
        var $76=HEAP[$75]; //@line 194 "_elementtree.c"
        var $77=(($76+24)&4294967295); //@line 194 "_elementtree.c"
        var $78=HEAP[$77]; //@line 194 "_elementtree.c"
        var $79=HEAP[$joiner]; //@line 194 "_elementtree.c"
        FUNCTION_TABLE[$78]($79); //@line 194 "_elementtree.c"
        __label__ = 12; break; //@line 194 "_elementtree.c"
      case 12: // $bb11
        HEAP[$0]=0; //@line 195 "_elementtree.c"
        __label__ = 22; break; //@line 195 "_elementtree.c"
      case 13: // $bb12
        var $80=_PyTuple_New(1); //@line 198 "_elementtree.c"
        HEAP[$args]=$80; //@line 198 "_elementtree.c"
        var $81=HEAP[$args]; //@line 199 "_elementtree.c"
        var $82=($81)==0; //@line 199 "_elementtree.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 199 "_elementtree.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 200 "_elementtree.c"
        __label__ = 22; break; //@line 200 "_elementtree.c"
      case 15: // $bb14
        var $83=HEAP[$args]; //@line 202 "_elementtree.c"
        var $84=$83; //@line 202 "_elementtree.c"
        var $85=(($84+12)&4294967295); //@line 202 "_elementtree.c"
        var $86=(($85)&4294967295); //@line 202 "_elementtree.c"
        var $87=HEAP[$list_addr]; //@line 202 "_elementtree.c"
        HEAP[$86]=$87; //@line 202 "_elementtree.c"
        var $88=HEAP[$function]; //@line 204 "_elementtree.c"
        var $89=HEAP[$args]; //@line 204 "_elementtree.c"
        var $90=_PyObject_CallObject($88, $89); //@line 204 "_elementtree.c"
        HEAP[$result]=$90; //@line 204 "_elementtree.c"
        var $91=HEAP[$args]; //@line 206 "_elementtree.c"
        var $92=(($91)&4294967295); //@line 206 "_elementtree.c"
        var $93=HEAP[$92]; //@line 206 "_elementtree.c"
        var $94=((($93) - 1)&4294967295); //@line 206 "_elementtree.c"
        var $95=HEAP[$args]; //@line 206 "_elementtree.c"
        var $96=(($95)&4294967295); //@line 206 "_elementtree.c"
        HEAP[$96]=$94; //@line 206 "_elementtree.c"
        var $97=HEAP[$args]; //@line 206 "_elementtree.c"
        var $98=(($97)&4294967295); //@line 206 "_elementtree.c"
        var $99=HEAP[$98]; //@line 206 "_elementtree.c"
        var $100=((($99))|0)==0; //@line 206 "_elementtree.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 206 "_elementtree.c"
      case 16: // $bb15
        var $101=HEAP[$args]; //@line 206 "_elementtree.c"
        var $102=(($101+4)&4294967295); //@line 206 "_elementtree.c"
        var $103=HEAP[$102]; //@line 206 "_elementtree.c"
        var $104=(($103+24)&4294967295); //@line 206 "_elementtree.c"
        var $105=HEAP[$104]; //@line 206 "_elementtree.c"
        var $106=HEAP[$args]; //@line 206 "_elementtree.c"
        FUNCTION_TABLE[$105]($106); //@line 206 "_elementtree.c"
        __label__ = 17; break; //@line 206 "_elementtree.c"
      case 17: // $bb16
        var $107=HEAP[$function]; //@line 207 "_elementtree.c"
        var $108=(($107)&4294967295); //@line 207 "_elementtree.c"
        var $109=HEAP[$108]; //@line 207 "_elementtree.c"
        var $110=((($109) - 1)&4294967295); //@line 207 "_elementtree.c"
        var $111=HEAP[$function]; //@line 207 "_elementtree.c"
        var $112=(($111)&4294967295); //@line 207 "_elementtree.c"
        HEAP[$112]=$110; //@line 207 "_elementtree.c"
        var $113=HEAP[$function]; //@line 207 "_elementtree.c"
        var $114=(($113)&4294967295); //@line 207 "_elementtree.c"
        var $115=HEAP[$114]; //@line 207 "_elementtree.c"
        var $116=((($115))|0)==0; //@line 207 "_elementtree.c"
        if ($116) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 207 "_elementtree.c"
      case 18: // $bb17
        var $117=HEAP[$function]; //@line 207 "_elementtree.c"
        var $118=(($117+4)&4294967295); //@line 207 "_elementtree.c"
        var $119=HEAP[$118]; //@line 207 "_elementtree.c"
        var $120=(($119+24)&4294967295); //@line 207 "_elementtree.c"
        var $121=HEAP[$120]; //@line 207 "_elementtree.c"
        var $122=HEAP[$function]; //@line 207 "_elementtree.c"
        FUNCTION_TABLE[$121]($122); //@line 207 "_elementtree.c"
        __label__ = 19; break; //@line 207 "_elementtree.c"
      case 19: // $bb18
        var $123=HEAP[$joiner]; //@line 208 "_elementtree.c"
        var $124=(($123)&4294967295); //@line 208 "_elementtree.c"
        var $125=HEAP[$124]; //@line 208 "_elementtree.c"
        var $126=((($125) - 1)&4294967295); //@line 208 "_elementtree.c"
        var $127=HEAP[$joiner]; //@line 208 "_elementtree.c"
        var $128=(($127)&4294967295); //@line 208 "_elementtree.c"
        HEAP[$128]=$126; //@line 208 "_elementtree.c"
        var $129=HEAP[$joiner]; //@line 208 "_elementtree.c"
        var $130=(($129)&4294967295); //@line 208 "_elementtree.c"
        var $131=HEAP[$130]; //@line 208 "_elementtree.c"
        var $132=((($131))|0)==0; //@line 208 "_elementtree.c"
        if ($132) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 208 "_elementtree.c"
      case 20: // $bb19
        var $133=HEAP[$joiner]; //@line 208 "_elementtree.c"
        var $134=(($133+4)&4294967295); //@line 208 "_elementtree.c"
        var $135=HEAP[$134]; //@line 208 "_elementtree.c"
        var $136=(($135+24)&4294967295); //@line 208 "_elementtree.c"
        var $137=HEAP[$136]; //@line 208 "_elementtree.c"
        var $138=HEAP[$joiner]; //@line 208 "_elementtree.c"
        FUNCTION_TABLE[$137]($138); //@line 208 "_elementtree.c"
        __label__ = 21; break; //@line 208 "_elementtree.c"
      case 21: // $bb20
        var $139=HEAP[$result]; //@line 210 "_elementtree.c"
        HEAP[$0]=$139; //@line 210 "_elementtree.c"
        __label__ = 22; break; //@line 210 "_elementtree.c"
      case 22: // $bb21
        var $140=HEAP[$0]; //@line 177 "_elementtree.c"
        HEAP[$retval]=$140; //@line 177 "_elementtree.c"
        __label__ = 23; break; //@line 177 "_elementtree.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 177 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 177 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_new_extra($self, $attrib) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $attrib_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$attrib_addr]=$attrib;
        var $1=_PyObject_Malloc(32); //@line 264 "_elementtree.c"
        var $2=$1; //@line 264 "_elementtree.c"
        var $3=HEAP[$self_addr]; //@line 264 "_elementtree.c"
        var $4=(($3+20)&4294967295); //@line 264 "_elementtree.c"
        HEAP[$4]=$2; //@line 264 "_elementtree.c"
        var $5=HEAP[$self_addr]; //@line 265 "_elementtree.c"
        var $6=(($5+20)&4294967295); //@line 265 "_elementtree.c"
        var $7=HEAP[$6]; //@line 265 "_elementtree.c"
        var $8=($7)==0; //@line 265 "_elementtree.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 265 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 266 "_elementtree.c"
        __label__ = 5; break; //@line 266 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[$attrib_addr]; //@line 268 "_elementtree.c"
        var $10=($9)==0; //@line 268 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 268 "_elementtree.c"
      case 3: // $bb2
        HEAP[$attrib_addr]=__Py_NoneStruct; //@line 269 "_elementtree.c"
        __label__ = 4; break; //@line 269 "_elementtree.c"
      case 4: // $bb3
        var $11=HEAP[$attrib_addr]; //@line 271 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 271 "_elementtree.c"
        var $13=HEAP[$12]; //@line 271 "_elementtree.c"
        var $14=((($13) + 1)&4294967295); //@line 271 "_elementtree.c"
        var $15=HEAP[$attrib_addr]; //@line 271 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 271 "_elementtree.c"
        HEAP[$16]=$14; //@line 271 "_elementtree.c"
        var $17=HEAP[$self_addr]; //@line 272 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 272 "_elementtree.c"
        var $19=HEAP[$18]; //@line 272 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 272 "_elementtree.c"
        var $21=HEAP[$attrib_addr]; //@line 272 "_elementtree.c"
        HEAP[$20]=$21; //@line 272 "_elementtree.c"
        var $22=HEAP[$self_addr]; //@line 274 "_elementtree.c"
        var $23=(($22+20)&4294967295); //@line 274 "_elementtree.c"
        var $24=HEAP[$23]; //@line 274 "_elementtree.c"
        var $25=(($24+4)&4294967295); //@line 274 "_elementtree.c"
        HEAP[$25]=0; //@line 274 "_elementtree.c"
        var $26=HEAP[$self_addr]; //@line 275 "_elementtree.c"
        var $27=(($26+20)&4294967295); //@line 275 "_elementtree.c"
        var $28=HEAP[$27]; //@line 275 "_elementtree.c"
        var $29=(($28+8)&4294967295); //@line 275 "_elementtree.c"
        HEAP[$29]=4; //@line 275 "_elementtree.c"
        var $30=HEAP[$self_addr]; //@line 276 "_elementtree.c"
        var $31=(($30+20)&4294967295); //@line 276 "_elementtree.c"
        var $32=HEAP[$31]; //@line 276 "_elementtree.c"
        var $33=HEAP[$self_addr]; //@line 276 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 276 "_elementtree.c"
        var $35=HEAP[$34]; //@line 276 "_elementtree.c"
        var $36=(($35+16)&4294967295); //@line 276 "_elementtree.c"
        var $37=(($36)&4294967295); //@line 276 "_elementtree.c"
        var $38=(($32+12)&4294967295); //@line 276 "_elementtree.c"
        HEAP[$38]=$37; //@line 276 "_elementtree.c"
        HEAP[$0]=0; //@line 278 "_elementtree.c"
        __label__ = 5; break; //@line 278 "_elementtree.c"
      case 5: // $bb4
        var $39=HEAP[$0]; //@line 266 "_elementtree.c"
        HEAP[$retval]=$39; //@line 266 "_elementtree.c"
        __label__ = 6; break; //@line 266 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 266 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 266 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_dealloc_extra($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $i=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 286 "_elementtree.c"
        var $1=(($0+20)&4294967295); //@line 286 "_elementtree.c"
        var $2=HEAP[$1]; //@line 286 "_elementtree.c"
        var $3=(($2)&4294967295); //@line 286 "_elementtree.c"
        var $4=HEAP[$3]; //@line 286 "_elementtree.c"
        var $5=(($4)&4294967295); //@line 286 "_elementtree.c"
        var $6=HEAP[$5]; //@line 286 "_elementtree.c"
        var $7=((($6) - 1)&4294967295); //@line 286 "_elementtree.c"
        var $8=(($4)&4294967295); //@line 286 "_elementtree.c"
        HEAP[$8]=$7; //@line 286 "_elementtree.c"
        var $9=(($4)&4294967295); //@line 286 "_elementtree.c"
        var $10=HEAP[$9]; //@line 286 "_elementtree.c"
        var $11=((($10))|0)==0; //@line 286 "_elementtree.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 286 "_elementtree.c"
      case 1: // $bb
        var $12=HEAP[$self_addr]; //@line 286 "_elementtree.c"
        var $13=(($12+20)&4294967295); //@line 286 "_elementtree.c"
        var $14=HEAP[$13]; //@line 286 "_elementtree.c"
        var $15=(($14)&4294967295); //@line 286 "_elementtree.c"
        var $16=HEAP[$15]; //@line 286 "_elementtree.c"
        var $17=(($16+4)&4294967295); //@line 286 "_elementtree.c"
        var $18=HEAP[$17]; //@line 286 "_elementtree.c"
        var $19=(($18+24)&4294967295); //@line 286 "_elementtree.c"
        var $20=HEAP[$19]; //@line 286 "_elementtree.c"
        var $21=HEAP[$self_addr]; //@line 286 "_elementtree.c"
        var $22=(($21+20)&4294967295); //@line 286 "_elementtree.c"
        var $23=HEAP[$22]; //@line 286 "_elementtree.c"
        var $24=(($23)&4294967295); //@line 286 "_elementtree.c"
        var $25=HEAP[$24]; //@line 286 "_elementtree.c"
        FUNCTION_TABLE[$20]($25); //@line 286 "_elementtree.c"
        __label__ = 2; break; //@line 286 "_elementtree.c"
      case 2: // $bb1
        HEAP[$i]=0; //@line 288 "_elementtree.c"
        __label__ = 6; break; //@line 288 "_elementtree.c"
      case 3: // $bb2
        var $26=HEAP[$self_addr]; //@line 289 "_elementtree.c"
        var $27=(($26+20)&4294967295); //@line 289 "_elementtree.c"
        var $28=HEAP[$27]; //@line 289 "_elementtree.c"
        var $29=(($28+12)&4294967295); //@line 289 "_elementtree.c"
        var $30=HEAP[$29]; //@line 289 "_elementtree.c"
        var $31=HEAP[$i]; //@line 289 "_elementtree.c"
        var $32=(($30+4*$31)&4294967295); //@line 289 "_elementtree.c"
        var $33=HEAP[$32]; //@line 289 "_elementtree.c"
        var $34=(($33)&4294967295); //@line 289 "_elementtree.c"
        var $35=HEAP[$34]; //@line 289 "_elementtree.c"
        var $36=((($35) - 1)&4294967295); //@line 289 "_elementtree.c"
        var $37=(($33)&4294967295); //@line 289 "_elementtree.c"
        HEAP[$37]=$36; //@line 289 "_elementtree.c"
        var $38=(($33)&4294967295); //@line 289 "_elementtree.c"
        var $39=HEAP[$38]; //@line 289 "_elementtree.c"
        var $40=((($39))|0)==0; //@line 289 "_elementtree.c"
        if ($40) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 289 "_elementtree.c"
      case 4: // $bb3
        var $41=HEAP[$self_addr]; //@line 289 "_elementtree.c"
        var $42=(($41+20)&4294967295); //@line 289 "_elementtree.c"
        var $43=HEAP[$42]; //@line 289 "_elementtree.c"
        var $44=(($43+12)&4294967295); //@line 289 "_elementtree.c"
        var $45=HEAP[$44]; //@line 289 "_elementtree.c"
        var $46=HEAP[$i]; //@line 289 "_elementtree.c"
        var $47=(($45+4*$46)&4294967295); //@line 289 "_elementtree.c"
        var $48=HEAP[$47]; //@line 289 "_elementtree.c"
        var $49=(($48+4)&4294967295); //@line 289 "_elementtree.c"
        var $50=HEAP[$49]; //@line 289 "_elementtree.c"
        var $51=(($50+24)&4294967295); //@line 289 "_elementtree.c"
        var $52=HEAP[$51]; //@line 289 "_elementtree.c"
        var $53=HEAP[$self_addr]; //@line 289 "_elementtree.c"
        var $54=(($53+20)&4294967295); //@line 289 "_elementtree.c"
        var $55=HEAP[$54]; //@line 289 "_elementtree.c"
        var $56=(($55+12)&4294967295); //@line 289 "_elementtree.c"
        var $57=HEAP[$56]; //@line 289 "_elementtree.c"
        var $58=HEAP[$i]; //@line 289 "_elementtree.c"
        var $59=(($57+4*$58)&4294967295); //@line 289 "_elementtree.c"
        var $60=HEAP[$59]; //@line 289 "_elementtree.c"
        FUNCTION_TABLE[$52]($60); //@line 289 "_elementtree.c"
        __label__ = 5; break; //@line 289 "_elementtree.c"
      case 5: // $bb4
        var $61=HEAP[$i]; //@line 288 "_elementtree.c"
        var $62=((($61) + 1)&4294967295); //@line 288 "_elementtree.c"
        HEAP[$i]=$62; //@line 288 "_elementtree.c"
        __label__ = 6; break; //@line 288 "_elementtree.c"
      case 6: // $bb5
        var $63=HEAP[$self_addr]; //@line 288 "_elementtree.c"
        var $64=(($63+20)&4294967295); //@line 288 "_elementtree.c"
        var $65=HEAP[$64]; //@line 288 "_elementtree.c"
        var $66=(($65+4)&4294967295); //@line 288 "_elementtree.c"
        var $67=HEAP[$66]; //@line 288 "_elementtree.c"
        var $68=HEAP[$i]; //@line 288 "_elementtree.c"
        var $69=((($67))|0) > ((($68))|0); //@line 288 "_elementtree.c"
        if ($69) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 288 "_elementtree.c"
      case 7: // $bb6
        var $70=HEAP[$self_addr]; //@line 291 "_elementtree.c"
        var $71=(($70+20)&4294967295); //@line 291 "_elementtree.c"
        var $72=HEAP[$71]; //@line 291 "_elementtree.c"
        var $73=(($72+12)&4294967295); //@line 291 "_elementtree.c"
        var $74=HEAP[$73]; //@line 291 "_elementtree.c"
        var $75=HEAP[$self_addr]; //@line 291 "_elementtree.c"
        var $76=(($75+20)&4294967295); //@line 291 "_elementtree.c"
        var $77=HEAP[$76]; //@line 291 "_elementtree.c"
        var $78=(($77+16)&4294967295); //@line 291 "_elementtree.c"
        var $79=(($78)&4294967295); //@line 291 "_elementtree.c"
        var $80=($74)!=($79); //@line 291 "_elementtree.c"
        if ($80) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 291 "_elementtree.c"
      case 8: // $bb7
        var $81=HEAP[$self_addr]; //@line 292 "_elementtree.c"
        var $82=(($81+20)&4294967295); //@line 292 "_elementtree.c"
        var $83=HEAP[$82]; //@line 292 "_elementtree.c"
        var $84=(($83+12)&4294967295); //@line 292 "_elementtree.c"
        var $85=HEAP[$84]; //@line 292 "_elementtree.c"
        var $86=$85; //@line 292 "_elementtree.c"
        _PyObject_Free($86); //@line 292 "_elementtree.c"
        __label__ = 9; break; //@line 292 "_elementtree.c"
      case 9: // $bb8
        var $87=HEAP[$self_addr]; //@line 294 "_elementtree.c"
        var $88=(($87+20)&4294967295); //@line 294 "_elementtree.c"
        var $89=HEAP[$88]; //@line 294 "_elementtree.c"
        var $90=$89; //@line 294 "_elementtree.c"
        _PyObject_Free($90); //@line 294 "_elementtree.c"
        __label__ = 10; break; //@line 295 "_elementtree.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 295 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_new($tag, $attrib) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tag_addr=__stackBase__;
        var $attrib_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$tag_addr]=$tag;
        HEAP[$attrib_addr]=$attrib;
        var $1=__PyObject_New(_Element_Type); //@line 302 "_elementtree.c"
        var $2=$1; //@line 302 "_elementtree.c"
        HEAP[$self]=$2; //@line 302 "_elementtree.c"
        var $3=HEAP[$self]; //@line 303 "_elementtree.c"
        var $4=($3)==0; //@line 303 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 303 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 304 "_elementtree.c"
        __label__ = 10; break; //@line 304 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[$attrib_addr]; //@line 307 "_elementtree.c"
        var $6=(($5+4)&4294967295); //@line 307 "_elementtree.c"
        var $7=HEAP[$6]; //@line 307 "_elementtree.c"
        var $8=($7)==(_PyDict_Type); //@line 307 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 307 "_elementtree.c"
      case 3: // $bb2
        var $9=HEAP[$attrib_addr]; //@line 307 "_elementtree.c"
        var $10=_PyDict_Size($9); //@line 307 "_elementtree.c"
        var $11=((($10))|0)==0; //@line 307 "_elementtree.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 307 "_elementtree.c"
      case 4: // $bb3
        HEAP[$attrib_addr]=__Py_NoneStruct; //@line 308 "_elementtree.c"
        __label__ = 5; break; //@line 308 "_elementtree.c"
      case 5: // $bb4
        var $12=HEAP[$self]; //@line 310 "_elementtree.c"
        var $13=(($12+20)&4294967295); //@line 310 "_elementtree.c"
        HEAP[$13]=0; //@line 310 "_elementtree.c"
        var $14=HEAP[$attrib_addr]; //@line 312 "_elementtree.c"
        var $15=($14)!=(__Py_NoneStruct); //@line 312 "_elementtree.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 312 "_elementtree.c"
      case 6: // $bb5
        var $16=HEAP[$self]; //@line 314 "_elementtree.c"
        var $17=HEAP[$attrib_addr]; //@line 314 "_elementtree.c"
        var $18=_element_new_extra($16, $17); //@line 314 "_elementtree.c"
        var $19=((($18))|0) < 0; //@line 314 "_elementtree.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 314 "_elementtree.c"
      case 7: // $bb6
        var $20=HEAP[$self]; //@line 315 "_elementtree.c"
        var $21=$20; //@line 315 "_elementtree.c"
        _PyObject_Free($21); //@line 315 "_elementtree.c"
        HEAP[$0]=0; //@line 316 "_elementtree.c"
        __label__ = 10; break; //@line 316 "_elementtree.c"
      case 8: // $bb7
        var $22=HEAP[$self]; //@line 319 "_elementtree.c"
        var $23=(($22+20)&4294967295); //@line 319 "_elementtree.c"
        var $24=HEAP[$23]; //@line 319 "_elementtree.c"
        var $25=(($24+4)&4294967295); //@line 319 "_elementtree.c"
        HEAP[$25]=0; //@line 319 "_elementtree.c"
        var $26=HEAP[$self]; //@line 320 "_elementtree.c"
        var $27=(($26+20)&4294967295); //@line 320 "_elementtree.c"
        var $28=HEAP[$27]; //@line 320 "_elementtree.c"
        var $29=(($28+8)&4294967295); //@line 320 "_elementtree.c"
        HEAP[$29]=4; //@line 320 "_elementtree.c"
        var $30=HEAP[$self]; //@line 321 "_elementtree.c"
        var $31=(($30+20)&4294967295); //@line 321 "_elementtree.c"
        var $32=HEAP[$31]; //@line 321 "_elementtree.c"
        var $33=HEAP[$self]; //@line 321 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 321 "_elementtree.c"
        var $35=HEAP[$34]; //@line 321 "_elementtree.c"
        var $36=(($35+16)&4294967295); //@line 321 "_elementtree.c"
        var $37=(($36)&4294967295); //@line 321 "_elementtree.c"
        var $38=(($32+12)&4294967295); //@line 321 "_elementtree.c"
        HEAP[$38]=$37; //@line 321 "_elementtree.c"
        __label__ = 9; break; //@line 321 "_elementtree.c"
      case 9: // $bb8
        var $39=HEAP[$tag_addr]; //@line 325 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 325 "_elementtree.c"
        var $41=HEAP[$40]; //@line 325 "_elementtree.c"
        var $42=((($41) + 1)&4294967295); //@line 325 "_elementtree.c"
        var $43=HEAP[$tag_addr]; //@line 325 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 325 "_elementtree.c"
        HEAP[$44]=$42; //@line 325 "_elementtree.c"
        var $45=HEAP[$self]; //@line 326 "_elementtree.c"
        var $46=(($45+8)&4294967295); //@line 326 "_elementtree.c"
        var $47=HEAP[$tag_addr]; //@line 326 "_elementtree.c"
        HEAP[$46]=$47; //@line 326 "_elementtree.c"
        var $48=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 328 "_elementtree.c"
        var $49=((($48) + 1)&4294967295); //@line 328 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$49; //@line 328 "_elementtree.c"
        var $50=HEAP[$self]; //@line 329 "_elementtree.c"
        var $51=(($50+12)&4294967295); //@line 329 "_elementtree.c"
        HEAP[$51]=__Py_NoneStruct; //@line 329 "_elementtree.c"
        var $52=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 331 "_elementtree.c"
        var $53=((($52) + 1)&4294967295); //@line 331 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$53; //@line 331 "_elementtree.c"
        var $54=HEAP[$self]; //@line 332 "_elementtree.c"
        var $55=(($54+16)&4294967295); //@line 332 "_elementtree.c"
        HEAP[$55]=__Py_NoneStruct; //@line 332 "_elementtree.c"
        var $56=HEAP[$self]; //@line 336 "_elementtree.c"
        var $57=$56; //@line 336 "_elementtree.c"
        HEAP[$0]=$57; //@line 336 "_elementtree.c"
        __label__ = 10; break; //@line 336 "_elementtree.c"
      case 10: // $bb9
        var $58=HEAP[$0]; //@line 304 "_elementtree.c"
        HEAP[$retval]=$58; //@line 304 "_elementtree.c"
        __label__ = 11; break; //@line 304 "_elementtree.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 304 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 304 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_resize($self, $extra) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $extra_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $iftmp_10=__stackBase__+16;
        var $iftmp_9=__stackBase__+20;
        var $size=__stackBase__+24;
        var $children=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$extra_addr]=$extra;
        var $1=HEAP[$self_addr]; //@line 348 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 348 "_elementtree.c"
        var $3=HEAP[$2]; //@line 348 "_elementtree.c"
        var $4=($3)==0; //@line 348 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 348 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 349 "_elementtree.c"
        var $6=_element_new_extra($5, 0); //@line 349 "_elementtree.c"
        __label__ = 2; break; //@line 349 "_elementtree.c"
      case 2: // $bb1
        var $7=HEAP[$self_addr]; //@line 351 "_elementtree.c"
        var $8=(($7+20)&4294967295); //@line 351 "_elementtree.c"
        var $9=HEAP[$8]; //@line 351 "_elementtree.c"
        var $10=(($9+4)&4294967295); //@line 351 "_elementtree.c"
        var $11=HEAP[$10]; //@line 351 "_elementtree.c"
        var $12=HEAP[$extra_addr]; //@line 351 "_elementtree.c"
        var $13=((($11) + ($12))&4294967295); //@line 351 "_elementtree.c"
        HEAP[$size]=$13; //@line 351 "_elementtree.c"
        var $14=HEAP[$self_addr]; //@line 353 "_elementtree.c"
        var $15=(($14+20)&4294967295); //@line 353 "_elementtree.c"
        var $16=HEAP[$15]; //@line 353 "_elementtree.c"
        var $17=(($16+8)&4294967295); //@line 353 "_elementtree.c"
        var $18=HEAP[$17]; //@line 353 "_elementtree.c"
        var $19=HEAP[$size]; //@line 353 "_elementtree.c"
        var $20=((($18))|0) < ((($19))|0); //@line 353 "_elementtree.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 353 "_elementtree.c"
      case 3: // $bb2
        var $21=HEAP[$size]; //@line 355 "_elementtree.c"
        var $22=((($21))|0) >> 3; //@line 355 "_elementtree.c"
        var $23=HEAP[$size]; //@line 355 "_elementtree.c"
        var $24=((($23))|0) <= 8; //@line 355 "_elementtree.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 355 "_elementtree.c"
      case 4: // $bb3
        HEAP[$iftmp_9]=3; //@line 355 "_elementtree.c"
        __label__ = 6; break; //@line 355 "_elementtree.c"
      case 5: // $bb4
        HEAP[$iftmp_9]=6; //@line 355 "_elementtree.c"
        __label__ = 6; break; //@line 355 "_elementtree.c"
      case 6: // $bb5
        var $25=HEAP[$iftmp_9]; //@line 355 "_elementtree.c"
        var $26=((($22) + ($25))&4294967295); //@line 355 "_elementtree.c"
        var $27=HEAP[$size]; //@line 355 "_elementtree.c"
        var $28=((($26) + ($27))&4294967295); //@line 355 "_elementtree.c"
        HEAP[$size]=$28; //@line 355 "_elementtree.c"
        var $29=HEAP[$size]; //@line 361 "_elementtree.c"
        var $30=((($29))|0)!=0; //@line 361 "_elementtree.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 361 "_elementtree.c"
      case 7: // $bb6
        var $31=HEAP[$size]; //@line 361 "_elementtree.c"
        HEAP[$iftmp_10]=$31; //@line 361 "_elementtree.c"
        __label__ = 9; break; //@line 361 "_elementtree.c"
      case 8: // $bb7
        HEAP[$iftmp_10]=1; //@line 361 "_elementtree.c"
        __label__ = 9; break; //@line 361 "_elementtree.c"
      case 9: // $bb8
        var $32=HEAP[$iftmp_10]; //@line 361 "_elementtree.c"
        HEAP[$size]=$32; //@line 361 "_elementtree.c"
        var $33=HEAP[$self_addr]; //@line 362 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 362 "_elementtree.c"
        var $35=HEAP[$34]; //@line 362 "_elementtree.c"
        var $36=(($35+12)&4294967295); //@line 362 "_elementtree.c"
        var $37=HEAP[$36]; //@line 362 "_elementtree.c"
        var $38=HEAP[$self_addr]; //@line 362 "_elementtree.c"
        var $39=(($38+20)&4294967295); //@line 362 "_elementtree.c"
        var $40=HEAP[$39]; //@line 362 "_elementtree.c"
        var $41=(($40+16)&4294967295); //@line 362 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 362 "_elementtree.c"
        var $43=($37)!=($42); //@line 362 "_elementtree.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 362 "_elementtree.c"
      case 10: // $bb9
        var $44=HEAP[$size]; //@line 367 "_elementtree.c"
        var $45=((($44) * 4)&4294967295); //@line 367 "_elementtree.c"
        var $46=HEAP[$self_addr]; //@line 367 "_elementtree.c"
        var $47=(($46+20)&4294967295); //@line 367 "_elementtree.c"
        var $48=HEAP[$47]; //@line 367 "_elementtree.c"
        var $49=(($48+12)&4294967295); //@line 367 "_elementtree.c"
        var $50=HEAP[$49]; //@line 367 "_elementtree.c"
        var $51=$50; //@line 367 "_elementtree.c"
        var $52=_PyObject_Realloc($51, $45); //@line 367 "_elementtree.c"
        var $53=$52; //@line 367 "_elementtree.c"
        HEAP[$children]=$53; //@line 367 "_elementtree.c"
        var $54=HEAP[$children]; //@line 369 "_elementtree.c"
        var $55=($54)==0; //@line 369 "_elementtree.c"
        if ($55) { __label__ = 16; break; } else { __label__ = 11; break; } //@line 369 "_elementtree.c"
      case 11: // $bb10
        __label__ = 14; break; //@line 369 "_elementtree.c"
      case 12: // $bb11
        var $56=HEAP[$size]; //@line 372 "_elementtree.c"
        var $57=((($56) * 4)&4294967295); //@line 372 "_elementtree.c"
        var $58=_PyObject_Malloc($57); //@line 372 "_elementtree.c"
        var $59=$58; //@line 372 "_elementtree.c"
        HEAP[$children]=$59; //@line 372 "_elementtree.c"
        var $60=HEAP[$children]; //@line 373 "_elementtree.c"
        var $61=($60)==0; //@line 373 "_elementtree.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 373 "_elementtree.c"
      case 13: // $bb12
        var $62=HEAP[$self_addr]; //@line 376 "_elementtree.c"
        var $63=(($62+20)&4294967295); //@line 376 "_elementtree.c"
        var $64=HEAP[$63]; //@line 376 "_elementtree.c"
        var $65=(($64+4)&4294967295); //@line 376 "_elementtree.c"
        var $66=HEAP[$65]; //@line 376 "_elementtree.c"
        var $67=((($66) * 4)&4294967295); //@line 376 "_elementtree.c"
        var $68=HEAP[$self_addr]; //@line 376 "_elementtree.c"
        var $69=(($68+20)&4294967295); //@line 376 "_elementtree.c"
        var $70=HEAP[$69]; //@line 376 "_elementtree.c"
        var $71=(($70+12)&4294967295); //@line 376 "_elementtree.c"
        var $72=HEAP[$71]; //@line 376 "_elementtree.c"
        var $73=HEAP[$children]; //@line 376 "_elementtree.c"
        var $74=$73; //@line 376 "_elementtree.c"
        var $75=$72; //@line 376 "_elementtree.c"
        _llvm_memcpy_p0i8_p0i8_i32($74, $75, $67, 1, 0); //@line 376 "_elementtree.c"
        __label__ = 14; break; //@line 376 "_elementtree.c"
      case 14: // $bb13
        var $76=HEAP[$self_addr]; //@line 379 "_elementtree.c"
        var $77=(($76+20)&4294967295); //@line 379 "_elementtree.c"
        var $78=HEAP[$77]; //@line 379 "_elementtree.c"
        var $79=(($78+12)&4294967295); //@line 379 "_elementtree.c"
        var $80=HEAP[$children]; //@line 379 "_elementtree.c"
        HEAP[$79]=$80; //@line 379 "_elementtree.c"
        var $81=HEAP[$self_addr]; //@line 380 "_elementtree.c"
        var $82=(($81+20)&4294967295); //@line 380 "_elementtree.c"
        var $83=HEAP[$82]; //@line 380 "_elementtree.c"
        var $84=(($83+8)&4294967295); //@line 380 "_elementtree.c"
        var $85=HEAP[$size]; //@line 380 "_elementtree.c"
        HEAP[$84]=$85; //@line 380 "_elementtree.c"
        __label__ = 15; break; //@line 380 "_elementtree.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 383 "_elementtree.c"
        __label__ = 17; break; //@line 383 "_elementtree.c"
      case 16: // $nomemory
        var $86=_PyErr_NoMemory(); //@line 386 "_elementtree.c"
        HEAP[$0]=-1; //@line 387 "_elementtree.c"
        __label__ = 17; break; //@line 387 "_elementtree.c"
      case 17: // $bb15
        var $87=HEAP[$0]; //@line 383 "_elementtree.c"
        HEAP[$retval]=$87; //@line 383 "_elementtree.c"
        __label__ = 18; break; //@line 383 "_elementtree.c"
      case 18: // $return
        var $retval16=HEAP[$retval]; //@line 383 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 383 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_add_subelement($self, $element) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $element_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$element_addr]=$element;
        var $1=HEAP[$self_addr]; //@line 395 "_elementtree.c"
        var $2=_element_resize($1, 1); //@line 395 "_elementtree.c"
        var $3=((($2))|0) < 0; //@line 395 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 395 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=-1; //@line 396 "_elementtree.c"
        __label__ = 3; break; //@line 396 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$element_addr]; //@line 398 "_elementtree.c"
        var $5=(($4)&4294967295); //@line 398 "_elementtree.c"
        var $6=HEAP[$5]; //@line 398 "_elementtree.c"
        var $7=((($6) + 1)&4294967295); //@line 398 "_elementtree.c"
        var $8=HEAP[$element_addr]; //@line 398 "_elementtree.c"
        var $9=(($8)&4294967295); //@line 398 "_elementtree.c"
        HEAP[$9]=$7; //@line 398 "_elementtree.c"
        var $10=HEAP[$self_addr]; //@line 399 "_elementtree.c"
        var $11=(($10+20)&4294967295); //@line 399 "_elementtree.c"
        var $12=HEAP[$11]; //@line 399 "_elementtree.c"
        var $13=(($12+12)&4294967295); //@line 399 "_elementtree.c"
        var $14=HEAP[$13]; //@line 399 "_elementtree.c"
        var $15=HEAP[$self_addr]; //@line 399 "_elementtree.c"
        var $16=(($15+20)&4294967295); //@line 399 "_elementtree.c"
        var $17=HEAP[$16]; //@line 399 "_elementtree.c"
        var $18=(($17+4)&4294967295); //@line 399 "_elementtree.c"
        var $19=HEAP[$18]; //@line 399 "_elementtree.c"
        var $20=(($14+4*$19)&4294967295); //@line 399 "_elementtree.c"
        var $21=HEAP[$element_addr]; //@line 399 "_elementtree.c"
        HEAP[$20]=$21; //@line 399 "_elementtree.c"
        var $22=HEAP[$self_addr]; //@line 401 "_elementtree.c"
        var $23=(($22+20)&4294967295); //@line 401 "_elementtree.c"
        var $24=HEAP[$23]; //@line 401 "_elementtree.c"
        var $25=(($24+4)&4294967295); //@line 401 "_elementtree.c"
        var $26=HEAP[$25]; //@line 401 "_elementtree.c"
        var $27=((($26) + 1)&4294967295); //@line 401 "_elementtree.c"
        var $28=(($24+4)&4294967295); //@line 401 "_elementtree.c"
        HEAP[$28]=$27; //@line 401 "_elementtree.c"
        HEAP[$0]=0; //@line 403 "_elementtree.c"
        __label__ = 3; break; //@line 403 "_elementtree.c"
      case 3: // $bb2
        var $29=HEAP[$0]; //@line 396 "_elementtree.c"
        HEAP[$retval]=$29; //@line 396 "_elementtree.c"
        __label__ = 4; break; //@line 396 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 396 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 396 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_attrib($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 412 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 412 "_elementtree.c"
        var $3=HEAP[$2]; //@line 412 "_elementtree.c"
        var $4=(($3)&4294967295); //@line 412 "_elementtree.c"
        var $5=HEAP[$4]; //@line 412 "_elementtree.c"
        HEAP[$res]=$5; //@line 412 "_elementtree.c"
        var $6=HEAP[$res]; //@line 414 "_elementtree.c"
        var $7=($6)==(__Py_NoneStruct); //@line 414 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 414 "_elementtree.c"
      case 1: // $bb
        var $8=HEAP[$res]; //@line 415 "_elementtree.c"
        var $9=(($8)&4294967295); //@line 415 "_elementtree.c"
        var $10=HEAP[$9]; //@line 415 "_elementtree.c"
        var $11=((($10) - 1)&4294967295); //@line 415 "_elementtree.c"
        var $12=HEAP[$res]; //@line 415 "_elementtree.c"
        var $13=(($12)&4294967295); //@line 415 "_elementtree.c"
        HEAP[$13]=$11; //@line 415 "_elementtree.c"
        var $14=HEAP[$res]; //@line 415 "_elementtree.c"
        var $15=(($14)&4294967295); //@line 415 "_elementtree.c"
        var $16=HEAP[$15]; //@line 415 "_elementtree.c"
        var $17=((($16))|0)==0; //@line 415 "_elementtree.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 415 "_elementtree.c"
      case 2: // $bb1
        var $18=HEAP[$res]; //@line 415 "_elementtree.c"
        var $19=(($18+4)&4294967295); //@line 415 "_elementtree.c"
        var $20=HEAP[$19]; //@line 415 "_elementtree.c"
        var $21=(($20+24)&4294967295); //@line 415 "_elementtree.c"
        var $22=HEAP[$21]; //@line 415 "_elementtree.c"
        var $23=HEAP[$res]; //@line 415 "_elementtree.c"
        FUNCTION_TABLE[$22]($23); //@line 415 "_elementtree.c"
        __label__ = 3; break; //@line 415 "_elementtree.c"
      case 3: // $bb2
        var $24=_PyDict_New(); //@line 417 "_elementtree.c"
        HEAP[$res]=$24; //@line 417 "_elementtree.c"
        var $25=HEAP[$res]; //@line 418 "_elementtree.c"
        var $26=($25)==0; //@line 418 "_elementtree.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 418 "_elementtree.c"
      case 4: // $bb3
        HEAP[$0]=0; //@line 419 "_elementtree.c"
        __label__ = 7; break; //@line 419 "_elementtree.c"
      case 5: // $bb4
        var $27=HEAP[$self_addr]; //@line 420 "_elementtree.c"
        var $28=(($27+20)&4294967295); //@line 420 "_elementtree.c"
        var $29=HEAP[$28]; //@line 420 "_elementtree.c"
        var $30=(($29)&4294967295); //@line 420 "_elementtree.c"
        var $31=HEAP[$res]; //@line 420 "_elementtree.c"
        HEAP[$30]=$31; //@line 420 "_elementtree.c"
        __label__ = 6; break; //@line 420 "_elementtree.c"
      case 6: // $bb5
        var $32=HEAP[$res]; //@line 423 "_elementtree.c"
        HEAP[$0]=$32; //@line 423 "_elementtree.c"
        __label__ = 7; break; //@line 423 "_elementtree.c"
      case 7: // $bb6
        var $33=HEAP[$0]; //@line 419 "_elementtree.c"
        HEAP[$retval]=$33; //@line 419 "_elementtree.c"
        __label__ = 8; break; //@line 419 "_elementtree.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 419 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 419 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_text($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 431 "_elementtree.c"
        var $2=(($1+12)&4294967295); //@line 431 "_elementtree.c"
        var $3=HEAP[$2]; //@line 431 "_elementtree.c"
        HEAP[$res]=$3; //@line 431 "_elementtree.c"
        var $4=HEAP[$res]; //@line 433 "_elementtree.c"
        var $5=($4); //@line 433 "_elementtree.c"
        var $6=($5) & 1; //@line 433 "_elementtree.c"
        var $7=((($6)) & 255); //@line 433 "_elementtree.c"
        var $toBool=reSign(($7), 8, 0)!=0; //@line 433 "_elementtree.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 433 "_elementtree.c"
      case 1: // $bb
        var $8=HEAP[$res]; //@line 434 "_elementtree.c"
        var $9=($8); //@line 434 "_elementtree.c"
        var $10=($9) & -2; //@line 434 "_elementtree.c"
        var $11=($10); //@line 434 "_elementtree.c"
        HEAP[$res]=$11; //@line 434 "_elementtree.c"
        var $12=HEAP[$res]; //@line 435 "_elementtree.c"
        var $13=(($12+4)&4294967295); //@line 435 "_elementtree.c"
        var $14=HEAP[$13]; //@line 435 "_elementtree.c"
        var $15=($14)==(_PyList_Type); //@line 435 "_elementtree.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 435 "_elementtree.c"
      case 2: // $bb1
        var $16=HEAP[$res]; //@line 436 "_elementtree.c"
        var $17=_list_join($16); //@line 436 "_elementtree.c"
        HEAP[$res]=$17; //@line 436 "_elementtree.c"
        var $18=HEAP[$res]; //@line 437 "_elementtree.c"
        var $19=($18)==0; //@line 437 "_elementtree.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 437 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 438 "_elementtree.c"
        __label__ = 6; break; //@line 438 "_elementtree.c"
      case 4: // $bb3
        var $20=HEAP[$self_addr]; //@line 439 "_elementtree.c"
        var $21=(($20+12)&4294967295); //@line 439 "_elementtree.c"
        var $22=HEAP[$res]; //@line 439 "_elementtree.c"
        HEAP[$21]=$22; //@line 439 "_elementtree.c"
        __label__ = 5; break; //@line 439 "_elementtree.c"
      case 5: // $bb4
        var $23=HEAP[$res]; //@line 443 "_elementtree.c"
        HEAP[$0]=$23; //@line 443 "_elementtree.c"
        __label__ = 6; break; //@line 443 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$0]; //@line 438 "_elementtree.c"
        HEAP[$retval]=$24; //@line 438 "_elementtree.c"
        __label__ = 7; break; //@line 438 "_elementtree.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 438 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 438 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get_tail($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 451 "_elementtree.c"
        var $2=(($1+16)&4294967295); //@line 451 "_elementtree.c"
        var $3=HEAP[$2]; //@line 451 "_elementtree.c"
        HEAP[$res]=$3; //@line 451 "_elementtree.c"
        var $4=HEAP[$res]; //@line 453 "_elementtree.c"
        var $5=($4); //@line 453 "_elementtree.c"
        var $6=($5) & 1; //@line 453 "_elementtree.c"
        var $7=((($6)) & 255); //@line 453 "_elementtree.c"
        var $toBool=reSign(($7), 8, 0)!=0; //@line 453 "_elementtree.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 453 "_elementtree.c"
      case 1: // $bb
        var $8=HEAP[$res]; //@line 454 "_elementtree.c"
        var $9=($8); //@line 454 "_elementtree.c"
        var $10=($9) & -2; //@line 454 "_elementtree.c"
        var $11=($10); //@line 454 "_elementtree.c"
        HEAP[$res]=$11; //@line 454 "_elementtree.c"
        var $12=HEAP[$res]; //@line 455 "_elementtree.c"
        var $13=(($12+4)&4294967295); //@line 455 "_elementtree.c"
        var $14=HEAP[$13]; //@line 455 "_elementtree.c"
        var $15=($14)==(_PyList_Type); //@line 455 "_elementtree.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 455 "_elementtree.c"
      case 2: // $bb1
        var $16=HEAP[$res]; //@line 456 "_elementtree.c"
        var $17=_list_join($16); //@line 456 "_elementtree.c"
        HEAP[$res]=$17; //@line 456 "_elementtree.c"
        var $18=HEAP[$res]; //@line 457 "_elementtree.c"
        var $19=($18)==0; //@line 457 "_elementtree.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 457 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 458 "_elementtree.c"
        __label__ = 6; break; //@line 458 "_elementtree.c"
      case 4: // $bb3
        var $20=HEAP[$self_addr]; //@line 459 "_elementtree.c"
        var $21=(($20+16)&4294967295); //@line 459 "_elementtree.c"
        var $22=HEAP[$res]; //@line 459 "_elementtree.c"
        HEAP[$21]=$22; //@line 459 "_elementtree.c"
        __label__ = 5; break; //@line 459 "_elementtree.c"
      case 5: // $bb4
        var $23=HEAP[$res]; //@line 463 "_elementtree.c"
        HEAP[$0]=$23; //@line 463 "_elementtree.c"
        __label__ = 6; break; //@line 463 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$0]; //@line 458 "_elementtree.c"
        HEAP[$retval]=$24; //@line 458 "_elementtree.c"
        __label__ = 7; break; //@line 458 "_elementtree.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 458 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 458 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_20=__stackBase__+16;
        var $0=__stackBase__+20;
        var $elem=__stackBase__+24;
        var $tag=__stackBase__+28;
        var $attrib=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$attrib]=0; //@line 472 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 473 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str3)&4294967295), $tag, _PyDict_Type, $attrib); //@line 473 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 473 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 473 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 475 "_elementtree.c"
        __label__ = 16; break; //@line 475 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 477 "_elementtree.c"
        var $5=($4)!=0; //@line 477 "_elementtree.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 477 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[$kw_addr]; //@line 477 "_elementtree.c"
        var $7=($6)!=0; //@line 477 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 477 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$attrib]; //@line 478 "_elementtree.c"
        var $9=($8)!=0; //@line 478 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 478 "_elementtree.c"
      case 5: // $bb4
        var $10=HEAP[$attrib]; //@line 478 "_elementtree.c"
        var $11=_PyDict_Copy($10); //@line 478 "_elementtree.c"
        HEAP[$iftmp_20]=$11; //@line 478 "_elementtree.c"
        __label__ = 7; break; //@line 478 "_elementtree.c"
      case 6: // $bb5
        var $12=_PyDict_New(); //@line 478 "_elementtree.c"
        HEAP[$iftmp_20]=$12; //@line 478 "_elementtree.c"
        __label__ = 7; break; //@line 478 "_elementtree.c"
      case 7: // $bb6
        var $13=HEAP[$iftmp_20]; //@line 478 "_elementtree.c"
        HEAP[$attrib]=$13; //@line 478 "_elementtree.c"
        var $14=HEAP[$attrib]; //@line 479 "_elementtree.c"
        var $15=($14)==0; //@line 479 "_elementtree.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 479 "_elementtree.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 480 "_elementtree.c"
        __label__ = 16; break; //@line 480 "_elementtree.c"
      case 9: // $bb8
        var $16=HEAP[$kw_addr]; //@line 481 "_elementtree.c"
        var $17=($16)!=0; //@line 481 "_elementtree.c"
        if ($17) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 481 "_elementtree.c"
      case 10: // $bb9
        var $18=HEAP[$attrib]; //@line 482 "_elementtree.c"
        var $19=HEAP[$kw_addr]; //@line 482 "_elementtree.c"
        var $20=_PyDict_Update($18, $19); //@line 482 "_elementtree.c"
        __label__ = 11; break; //@line 482 "_elementtree.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 482 "_elementtree.c"
      case 12: // $bb11
        var $21=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 484 "_elementtree.c"
        var $22=((($21) + 1)&4294967295); //@line 484 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$22; //@line 484 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 485 "_elementtree.c"
        __label__ = 13; break; //@line 485 "_elementtree.c"
      case 13: // $bb12
        var $23=HEAP[$attrib]; //@line 488 "_elementtree.c"
        var $24=HEAP[$tag]; //@line 488 "_elementtree.c"
        var $25=_element_new($24, $23); //@line 488 "_elementtree.c"
        HEAP[$elem]=$25; //@line 488 "_elementtree.c"
        var $26=HEAP[$attrib]; //@line 490 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 490 "_elementtree.c"
        var $28=HEAP[$27]; //@line 490 "_elementtree.c"
        var $29=((($28) - 1)&4294967295); //@line 490 "_elementtree.c"
        var $30=(($26)&4294967295); //@line 490 "_elementtree.c"
        HEAP[$30]=$29; //@line 490 "_elementtree.c"
        var $31=(($26)&4294967295); //@line 490 "_elementtree.c"
        var $32=HEAP[$31]; //@line 490 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 490 "_elementtree.c"
        if ($33) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 490 "_elementtree.c"
      case 14: // $bb13
        var $34=HEAP[$attrib]; //@line 490 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 490 "_elementtree.c"
        var $36=HEAP[$35]; //@line 490 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 490 "_elementtree.c"
        var $38=HEAP[$37]; //@line 490 "_elementtree.c"
        var $39=HEAP[$attrib]; //@line 490 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 490 "_elementtree.c"
        __label__ = 15; break; //@line 490 "_elementtree.c"
      case 15: // $bb14
        var $40=HEAP[$elem]; //@line 492 "_elementtree.c"
        HEAP[$0]=$40; //@line 492 "_elementtree.c"
        __label__ = 16; break; //@line 492 "_elementtree.c"
      case 16: // $bb15
        var $41=HEAP[$0]; //@line 475 "_elementtree.c"
        HEAP[$retval]=$41; //@line 475 "_elementtree.c"
        __label__ = 17; break; //@line 475 "_elementtree.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 475 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 475 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _subelement($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_31=__stackBase__+16;
        var $0=__stackBase__+20;
        var $elem=__stackBase__+24;
        var $parent=__stackBase__+28;
        var $tag=__stackBase__+32;
        var $attrib=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$attrib]=0; //@line 502 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 503 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str4)&4294967295), _Element_Type, $parent, $tag, _PyDict_Type, $attrib); //@line 503 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 503 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 503 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 506 "_elementtree.c"
        __label__ = 20; break; //@line 506 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 508 "_elementtree.c"
        var $5=($4)!=0; //@line 508 "_elementtree.c"
        if ($5) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 508 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[$kw_addr]; //@line 508 "_elementtree.c"
        var $7=($6)!=0; //@line 508 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 508 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$attrib]; //@line 509 "_elementtree.c"
        var $9=($8)!=0; //@line 509 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 509 "_elementtree.c"
      case 5: // $bb4
        var $10=HEAP[$attrib]; //@line 509 "_elementtree.c"
        var $11=_PyDict_Copy($10); //@line 509 "_elementtree.c"
        HEAP[$iftmp_31]=$11; //@line 509 "_elementtree.c"
        __label__ = 7; break; //@line 509 "_elementtree.c"
      case 6: // $bb5
        var $12=_PyDict_New(); //@line 509 "_elementtree.c"
        HEAP[$iftmp_31]=$12; //@line 509 "_elementtree.c"
        __label__ = 7; break; //@line 509 "_elementtree.c"
      case 7: // $bb6
        var $13=HEAP[$iftmp_31]; //@line 509 "_elementtree.c"
        HEAP[$attrib]=$13; //@line 509 "_elementtree.c"
        var $14=HEAP[$attrib]; //@line 510 "_elementtree.c"
        var $15=($14)==0; //@line 510 "_elementtree.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 510 "_elementtree.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 511 "_elementtree.c"
        __label__ = 20; break; //@line 511 "_elementtree.c"
      case 9: // $bb8
        var $16=HEAP[$kw_addr]; //@line 512 "_elementtree.c"
        var $17=($16)!=0; //@line 512 "_elementtree.c"
        if ($17) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 512 "_elementtree.c"
      case 10: // $bb9
        var $18=HEAP[$attrib]; //@line 513 "_elementtree.c"
        var $19=HEAP[$kw_addr]; //@line 513 "_elementtree.c"
        var $20=_PyDict_Update($18, $19); //@line 513 "_elementtree.c"
        __label__ = 11; break; //@line 513 "_elementtree.c"
      case 11: // $bb10
        __label__ = 13; break; //@line 513 "_elementtree.c"
      case 12: // $bb11
        var $21=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 515 "_elementtree.c"
        var $22=((($21) + 1)&4294967295); //@line 515 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$22; //@line 515 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 516 "_elementtree.c"
        __label__ = 13; break; //@line 516 "_elementtree.c"
      case 13: // $bb12
        var $23=HEAP[$attrib]; //@line 519 "_elementtree.c"
        var $24=HEAP[$tag]; //@line 519 "_elementtree.c"
        var $25=_element_new($24, $23); //@line 519 "_elementtree.c"
        HEAP[$elem]=$25; //@line 519 "_elementtree.c"
        var $26=HEAP[$attrib]; //@line 521 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 521 "_elementtree.c"
        var $28=HEAP[$27]; //@line 521 "_elementtree.c"
        var $29=((($28) - 1)&4294967295); //@line 521 "_elementtree.c"
        var $30=(($26)&4294967295); //@line 521 "_elementtree.c"
        HEAP[$30]=$29; //@line 521 "_elementtree.c"
        var $31=(($26)&4294967295); //@line 521 "_elementtree.c"
        var $32=HEAP[$31]; //@line 521 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 521 "_elementtree.c"
        if ($33) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 521 "_elementtree.c"
      case 14: // $bb13
        var $34=HEAP[$attrib]; //@line 521 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 521 "_elementtree.c"
        var $36=HEAP[$35]; //@line 521 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 521 "_elementtree.c"
        var $38=HEAP[$37]; //@line 521 "_elementtree.c"
        var $39=HEAP[$attrib]; //@line 521 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 521 "_elementtree.c"
        __label__ = 15; break; //@line 521 "_elementtree.c"
      case 15: // $bb14
        var $40=HEAP[$parent]; //@line 523 "_elementtree.c"
        var $41=HEAP[$elem]; //@line 523 "_elementtree.c"
        var $42=_element_add_subelement($40, $41); //@line 523 "_elementtree.c"
        var $43=((($42))|0) < 0; //@line 523 "_elementtree.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 523 "_elementtree.c"
      case 16: // $bb15
        var $44=HEAP[$elem]; //@line 524 "_elementtree.c"
        var $45=(($44)&4294967295); //@line 524 "_elementtree.c"
        var $46=HEAP[$45]; //@line 524 "_elementtree.c"
        var $47=((($46) - 1)&4294967295); //@line 524 "_elementtree.c"
        var $48=HEAP[$elem]; //@line 524 "_elementtree.c"
        var $49=(($48)&4294967295); //@line 524 "_elementtree.c"
        HEAP[$49]=$47; //@line 524 "_elementtree.c"
        var $50=HEAP[$elem]; //@line 524 "_elementtree.c"
        var $51=(($50)&4294967295); //@line 524 "_elementtree.c"
        var $52=HEAP[$51]; //@line 524 "_elementtree.c"
        var $53=((($52))|0)==0; //@line 524 "_elementtree.c"
        if ($53) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 524 "_elementtree.c"
      case 17: // $bb16
        var $54=HEAP[$elem]; //@line 524 "_elementtree.c"
        var $55=(($54+4)&4294967295); //@line 524 "_elementtree.c"
        var $56=HEAP[$55]; //@line 524 "_elementtree.c"
        var $57=(($56+24)&4294967295); //@line 524 "_elementtree.c"
        var $58=HEAP[$57]; //@line 524 "_elementtree.c"
        var $59=HEAP[$elem]; //@line 524 "_elementtree.c"
        FUNCTION_TABLE[$58]($59); //@line 524 "_elementtree.c"
        __label__ = 18; break; //@line 524 "_elementtree.c"
      case 18: // $bb17
        HEAP[$0]=0; //@line 525 "_elementtree.c"
        __label__ = 20; break; //@line 525 "_elementtree.c"
      case 19: // $bb18
        var $60=HEAP[$elem]; //@line 528 "_elementtree.c"
        HEAP[$0]=$60; //@line 528 "_elementtree.c"
        __label__ = 20; break; //@line 528 "_elementtree.c"
      case 20: // $bb19
        var $61=HEAP[$0]; //@line 506 "_elementtree.c"
        HEAP[$retval]=$61; //@line 506 "_elementtree.c"
        __label__ = 21; break; //@line 506 "_elementtree.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 506 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 506 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 534 "_elementtree.c"
        var $1=(($0+20)&4294967295); //@line 534 "_elementtree.c"
        var $2=HEAP[$1]; //@line 534 "_elementtree.c"
        var $3=($2)!=0; //@line 534 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 534 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 535 "_elementtree.c"
        _element_dealloc_extra($4); //@line 535 "_elementtree.c"
        __label__ = 2; break; //@line 535 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 538 "_elementtree.c"
        var $6=(($5+8)&4294967295); //@line 538 "_elementtree.c"
        var $7=HEAP[$6]; //@line 538 "_elementtree.c"
        var $8=(($7)&4294967295); //@line 538 "_elementtree.c"
        var $9=HEAP[$8]; //@line 538 "_elementtree.c"
        var $10=((($9) - 1)&4294967295); //@line 538 "_elementtree.c"
        var $11=(($7)&4294967295); //@line 538 "_elementtree.c"
        HEAP[$11]=$10; //@line 538 "_elementtree.c"
        var $12=(($7)&4294967295); //@line 538 "_elementtree.c"
        var $13=HEAP[$12]; //@line 538 "_elementtree.c"
        var $14=((($13))|0)==0; //@line 538 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 538 "_elementtree.c"
      case 3: // $bb2
        var $15=HEAP[$self_addr]; //@line 538 "_elementtree.c"
        var $16=(($15+8)&4294967295); //@line 538 "_elementtree.c"
        var $17=HEAP[$16]; //@line 538 "_elementtree.c"
        var $18=(($17+4)&4294967295); //@line 538 "_elementtree.c"
        var $19=HEAP[$18]; //@line 538 "_elementtree.c"
        var $20=(($19+24)&4294967295); //@line 538 "_elementtree.c"
        var $21=HEAP[$20]; //@line 538 "_elementtree.c"
        var $22=HEAP[$self_addr]; //@line 538 "_elementtree.c"
        var $23=(($22+8)&4294967295); //@line 538 "_elementtree.c"
        var $24=HEAP[$23]; //@line 538 "_elementtree.c"
        FUNCTION_TABLE[$21]($24); //@line 538 "_elementtree.c"
        __label__ = 4; break; //@line 538 "_elementtree.c"
      case 4: // $bb3
        var $25=HEAP[$self_addr]; //@line 539 "_elementtree.c"
        var $26=(($25+12)&4294967295); //@line 539 "_elementtree.c"
        var $27=HEAP[$26]; //@line 539 "_elementtree.c"
        var $28=($27); //@line 539 "_elementtree.c"
        var $29=($28) & -2; //@line 539 "_elementtree.c"
        var $30=($29); //@line 539 "_elementtree.c"
        var $31=(($30)&4294967295); //@line 539 "_elementtree.c"
        var $32=HEAP[$31]; //@line 539 "_elementtree.c"
        var $33=((($32) - 1)&4294967295); //@line 539 "_elementtree.c"
        var $34=(($30)&4294967295); //@line 539 "_elementtree.c"
        HEAP[$34]=$33; //@line 539 "_elementtree.c"
        var $35=(($30)&4294967295); //@line 539 "_elementtree.c"
        var $36=HEAP[$35]; //@line 539 "_elementtree.c"
        var $37=((($36))|0)==0; //@line 539 "_elementtree.c"
        if ($37) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 539 "_elementtree.c"
      case 5: // $bb4
        var $38=HEAP[$self_addr]; //@line 539 "_elementtree.c"
        var $39=(($38+12)&4294967295); //@line 539 "_elementtree.c"
        var $40=HEAP[$39]; //@line 539 "_elementtree.c"
        var $41=($40); //@line 539 "_elementtree.c"
        var $42=($41) & -2; //@line 539 "_elementtree.c"
        var $43=($42); //@line 539 "_elementtree.c"
        var $44=(($43+4)&4294967295); //@line 539 "_elementtree.c"
        var $45=HEAP[$44]; //@line 539 "_elementtree.c"
        var $46=(($45+24)&4294967295); //@line 539 "_elementtree.c"
        var $47=HEAP[$46]; //@line 539 "_elementtree.c"
        var $48=HEAP[$self_addr]; //@line 539 "_elementtree.c"
        var $49=(($48+12)&4294967295); //@line 539 "_elementtree.c"
        var $50=HEAP[$49]; //@line 539 "_elementtree.c"
        var $51=($50); //@line 539 "_elementtree.c"
        var $52=($51) & -2; //@line 539 "_elementtree.c"
        var $53=($52); //@line 539 "_elementtree.c"
        FUNCTION_TABLE[$47]($53); //@line 539 "_elementtree.c"
        __label__ = 6; break; //@line 539 "_elementtree.c"
      case 6: // $bb5
        var $54=HEAP[$self_addr]; //@line 540 "_elementtree.c"
        var $55=(($54+16)&4294967295); //@line 540 "_elementtree.c"
        var $56=HEAP[$55]; //@line 540 "_elementtree.c"
        var $57=($56); //@line 540 "_elementtree.c"
        var $58=($57) & -2; //@line 540 "_elementtree.c"
        var $59=($58); //@line 540 "_elementtree.c"
        var $60=(($59)&4294967295); //@line 540 "_elementtree.c"
        var $61=HEAP[$60]; //@line 540 "_elementtree.c"
        var $62=((($61) - 1)&4294967295); //@line 540 "_elementtree.c"
        var $63=(($59)&4294967295); //@line 540 "_elementtree.c"
        HEAP[$63]=$62; //@line 540 "_elementtree.c"
        var $64=(($59)&4294967295); //@line 540 "_elementtree.c"
        var $65=HEAP[$64]; //@line 540 "_elementtree.c"
        var $66=((($65))|0)==0; //@line 540 "_elementtree.c"
        if ($66) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 540 "_elementtree.c"
      case 7: // $bb6
        var $67=HEAP[$self_addr]; //@line 540 "_elementtree.c"
        var $68=(($67+16)&4294967295); //@line 540 "_elementtree.c"
        var $69=HEAP[$68]; //@line 540 "_elementtree.c"
        var $70=($69); //@line 540 "_elementtree.c"
        var $71=($70) & -2; //@line 540 "_elementtree.c"
        var $72=($71); //@line 540 "_elementtree.c"
        var $73=(($72+4)&4294967295); //@line 540 "_elementtree.c"
        var $74=HEAP[$73]; //@line 540 "_elementtree.c"
        var $75=(($74+24)&4294967295); //@line 540 "_elementtree.c"
        var $76=HEAP[$75]; //@line 540 "_elementtree.c"
        var $77=HEAP[$self_addr]; //@line 540 "_elementtree.c"
        var $78=(($77+16)&4294967295); //@line 540 "_elementtree.c"
        var $79=HEAP[$78]; //@line 540 "_elementtree.c"
        var $80=($79); //@line 540 "_elementtree.c"
        var $81=($80) & -2; //@line 540 "_elementtree.c"
        var $82=($81); //@line 540 "_elementtree.c"
        FUNCTION_TABLE[$76]($82); //@line 540 "_elementtree.c"
        __label__ = 8; break; //@line 540 "_elementtree.c"
      case 8: // $bb7
        var $83=HEAP[$self_addr]; //@line 544 "_elementtree.c"
        var $84=$83; //@line 544 "_elementtree.c"
        _PyObject_Free($84); //@line 544 "_elementtree.c"
        __label__ = 9; break; //@line 545 "_elementtree.c"
      case 9: // $return
        STACKTOP = __stackBase__;
        return; //@line 545 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_append($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $element=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 554 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str5)&4294967295), _Element_Type, $element); //@line 554 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 554 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 554 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 555 "_elementtree.c"
        __label__ = 5; break; //@line 555 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$element]; //@line 557 "_elementtree.c"
        var $5=HEAP[$self_addr]; //@line 557 "_elementtree.c"
        var $6=_element_add_subelement($5, $4); //@line 557 "_elementtree.c"
        var $7=((($6))|0) < 0; //@line 557 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 557 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 558 "_elementtree.c"
        __label__ = 5; break; //@line 558 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 560 "_elementtree.c"
        var $9=((($8) + 1)&4294967295); //@line 560 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$9; //@line 560 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 560 "_elementtree.c"
        __label__ = 5; break; //@line 560 "_elementtree.c"
      case 5: // $bb4
        var $10=HEAP[$0]; //@line 555 "_elementtree.c"
        HEAP[$retval]=$10; //@line 555 "_elementtree.c"
        __label__ = 6; break; //@line 555 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 555 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 555 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_clear($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 566 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str6)&4294967295)); //@line 566 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 566 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 566 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 567 "_elementtree.c"
        __label__ = 9; break; //@line 567 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 569 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 569 "_elementtree.c"
        var $6=HEAP[$5]; //@line 569 "_elementtree.c"
        var $7=($6)!=0; //@line 569 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 569 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 570 "_elementtree.c"
        _element_dealloc_extra($8); //@line 570 "_elementtree.c"
        var $9=HEAP[$self_addr]; //@line 571 "_elementtree.c"
        var $10=(($9+20)&4294967295); //@line 571 "_elementtree.c"
        HEAP[$10]=0; //@line 571 "_elementtree.c"
        __label__ = 4; break; //@line 571 "_elementtree.c"
      case 4: // $bb3
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 574 "_elementtree.c"
        var $12=((($11) + 1)&4294967295); //@line 574 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 574 "_elementtree.c"
        var $13=HEAP[$self_addr]; //@line 575 "_elementtree.c"
        var $14=(($13+12)&4294967295); //@line 575 "_elementtree.c"
        var $15=HEAP[$14]; //@line 575 "_elementtree.c"
        var $16=($15); //@line 575 "_elementtree.c"
        var $17=($16) & -2; //@line 575 "_elementtree.c"
        var $18=($17); //@line 575 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 575 "_elementtree.c"
        var $20=HEAP[$19]; //@line 575 "_elementtree.c"
        var $21=((($20) - 1)&4294967295); //@line 575 "_elementtree.c"
        var $22=(($18)&4294967295); //@line 575 "_elementtree.c"
        HEAP[$22]=$21; //@line 575 "_elementtree.c"
        var $23=(($18)&4294967295); //@line 575 "_elementtree.c"
        var $24=HEAP[$23]; //@line 575 "_elementtree.c"
        var $25=((($24))|0)==0; //@line 575 "_elementtree.c"
        if ($25) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 575 "_elementtree.c"
      case 5: // $bb4
        var $26=HEAP[$self_addr]; //@line 575 "_elementtree.c"
        var $27=(($26+12)&4294967295); //@line 575 "_elementtree.c"
        var $28=HEAP[$27]; //@line 575 "_elementtree.c"
        var $29=($28); //@line 575 "_elementtree.c"
        var $30=($29) & -2; //@line 575 "_elementtree.c"
        var $31=($30); //@line 575 "_elementtree.c"
        var $32=(($31+4)&4294967295); //@line 575 "_elementtree.c"
        var $33=HEAP[$32]; //@line 575 "_elementtree.c"
        var $34=(($33+24)&4294967295); //@line 575 "_elementtree.c"
        var $35=HEAP[$34]; //@line 575 "_elementtree.c"
        var $36=HEAP[$self_addr]; //@line 575 "_elementtree.c"
        var $37=(($36+12)&4294967295); //@line 575 "_elementtree.c"
        var $38=HEAP[$37]; //@line 575 "_elementtree.c"
        var $39=($38); //@line 575 "_elementtree.c"
        var $40=($39) & -2; //@line 575 "_elementtree.c"
        var $41=($40); //@line 575 "_elementtree.c"
        FUNCTION_TABLE[$35]($41); //@line 575 "_elementtree.c"
        __label__ = 6; break; //@line 575 "_elementtree.c"
      case 6: // $bb5
        var $42=HEAP[$self_addr]; //@line 576 "_elementtree.c"
        var $43=(($42+12)&4294967295); //@line 576 "_elementtree.c"
        HEAP[$43]=__Py_NoneStruct; //@line 576 "_elementtree.c"
        var $44=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 578 "_elementtree.c"
        var $45=((($44) + 1)&4294967295); //@line 578 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$45; //@line 578 "_elementtree.c"
        var $46=HEAP[$self_addr]; //@line 579 "_elementtree.c"
        var $47=(($46+16)&4294967295); //@line 579 "_elementtree.c"
        var $48=HEAP[$47]; //@line 579 "_elementtree.c"
        var $49=($48); //@line 579 "_elementtree.c"
        var $50=($49) & -2; //@line 579 "_elementtree.c"
        var $51=($50); //@line 579 "_elementtree.c"
        var $52=(($51)&4294967295); //@line 579 "_elementtree.c"
        var $53=HEAP[$52]; //@line 579 "_elementtree.c"
        var $54=((($53) - 1)&4294967295); //@line 579 "_elementtree.c"
        var $55=(($51)&4294967295); //@line 579 "_elementtree.c"
        HEAP[$55]=$54; //@line 579 "_elementtree.c"
        var $56=(($51)&4294967295); //@line 579 "_elementtree.c"
        var $57=HEAP[$56]; //@line 579 "_elementtree.c"
        var $58=((($57))|0)==0; //@line 579 "_elementtree.c"
        if ($58) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 579 "_elementtree.c"
      case 7: // $bb6
        var $59=HEAP[$self_addr]; //@line 579 "_elementtree.c"
        var $60=(($59+16)&4294967295); //@line 579 "_elementtree.c"
        var $61=HEAP[$60]; //@line 579 "_elementtree.c"
        var $62=($61); //@line 579 "_elementtree.c"
        var $63=($62) & -2; //@line 579 "_elementtree.c"
        var $64=($63); //@line 579 "_elementtree.c"
        var $65=(($64+4)&4294967295); //@line 579 "_elementtree.c"
        var $66=HEAP[$65]; //@line 579 "_elementtree.c"
        var $67=(($66+24)&4294967295); //@line 579 "_elementtree.c"
        var $68=HEAP[$67]; //@line 579 "_elementtree.c"
        var $69=HEAP[$self_addr]; //@line 579 "_elementtree.c"
        var $70=(($69+16)&4294967295); //@line 579 "_elementtree.c"
        var $71=HEAP[$70]; //@line 579 "_elementtree.c"
        var $72=($71); //@line 579 "_elementtree.c"
        var $73=($72) & -2; //@line 579 "_elementtree.c"
        var $74=($73); //@line 579 "_elementtree.c"
        FUNCTION_TABLE[$68]($74); //@line 579 "_elementtree.c"
        __label__ = 8; break; //@line 579 "_elementtree.c"
      case 8: // $bb7
        var $75=HEAP[$self_addr]; //@line 580 "_elementtree.c"
        var $76=(($75+16)&4294967295); //@line 580 "_elementtree.c"
        HEAP[$76]=__Py_NoneStruct; //@line 580 "_elementtree.c"
        var $77=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 582 "_elementtree.c"
        var $78=((($77) + 1)&4294967295); //@line 582 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$78; //@line 582 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 582 "_elementtree.c"
        __label__ = 9; break; //@line 582 "_elementtree.c"
      case 9: // $bb8
        var $79=HEAP[$0]; //@line 567 "_elementtree.c"
        HEAP[$retval]=$79; //@line 567 "_elementtree.c"
        __label__ = 10; break; //@line 567 "_elementtree.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 567 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 567 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_copy($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_43=__stackBase__+12;
        var $0=__stackBase__+16;
        var $i=__stackBase__+20;
        var $element=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 591 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str7)&4294967295)); //@line 591 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 591 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 591 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 592 "_elementtree.c"
        __label__ = 21; break; //@line 592 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 594 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 594 "_elementtree.c"
        var $6=HEAP[$5]; //@line 594 "_elementtree.c"
        var $7=($6)!=0; //@line 594 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 594 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 594 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 594 "_elementtree.c"
        var $10=HEAP[$9]; //@line 594 "_elementtree.c"
        var $11=(($10)&4294967295); //@line 594 "_elementtree.c"
        var $12=HEAP[$11]; //@line 594 "_elementtree.c"
        HEAP[$iftmp_43]=$12; //@line 594 "_elementtree.c"
        __label__ = 5; break; //@line 594 "_elementtree.c"
      case 4: // $bb3
        HEAP[$iftmp_43]=__Py_NoneStruct; //@line 594 "_elementtree.c"
        __label__ = 5; break; //@line 594 "_elementtree.c"
      case 5: // $bb4
        var $13=HEAP[$self_addr]; //@line 594 "_elementtree.c"
        var $14=(($13+8)&4294967295); //@line 594 "_elementtree.c"
        var $15=HEAP[$14]; //@line 594 "_elementtree.c"
        var $16=HEAP[$iftmp_43]; //@line 594 "_elementtree.c"
        var $17=_element_new($15, $16); //@line 594 "_elementtree.c"
        var $18=$17; //@line 594 "_elementtree.c"
        HEAP[$element]=$18; //@line 594 "_elementtree.c"
        var $19=HEAP[$element]; //@line 597 "_elementtree.c"
        var $20=($19)==0; //@line 597 "_elementtree.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 597 "_elementtree.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 598 "_elementtree.c"
        __label__ = 21; break; //@line 598 "_elementtree.c"
      case 7: // $bb6
        var $21=HEAP[$element]; //@line 600 "_elementtree.c"
        var $22=(($21+12)&4294967295); //@line 600 "_elementtree.c"
        var $23=HEAP[$22]; //@line 600 "_elementtree.c"
        var $24=($23); //@line 600 "_elementtree.c"
        var $25=($24) & -2; //@line 600 "_elementtree.c"
        var $26=($25); //@line 600 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 600 "_elementtree.c"
        var $28=HEAP[$27]; //@line 600 "_elementtree.c"
        var $29=((($28) - 1)&4294967295); //@line 600 "_elementtree.c"
        var $30=(($26)&4294967295); //@line 600 "_elementtree.c"
        HEAP[$30]=$29; //@line 600 "_elementtree.c"
        var $31=(($26)&4294967295); //@line 600 "_elementtree.c"
        var $32=HEAP[$31]; //@line 600 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 600 "_elementtree.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 600 "_elementtree.c"
      case 8: // $bb7
        var $34=HEAP[$element]; //@line 600 "_elementtree.c"
        var $35=(($34+12)&4294967295); //@line 600 "_elementtree.c"
        var $36=HEAP[$35]; //@line 600 "_elementtree.c"
        var $37=($36); //@line 600 "_elementtree.c"
        var $38=($37) & -2; //@line 600 "_elementtree.c"
        var $39=($38); //@line 600 "_elementtree.c"
        var $40=(($39+4)&4294967295); //@line 600 "_elementtree.c"
        var $41=HEAP[$40]; //@line 600 "_elementtree.c"
        var $42=(($41+24)&4294967295); //@line 600 "_elementtree.c"
        var $43=HEAP[$42]; //@line 600 "_elementtree.c"
        var $44=HEAP[$element]; //@line 600 "_elementtree.c"
        var $45=(($44+12)&4294967295); //@line 600 "_elementtree.c"
        var $46=HEAP[$45]; //@line 600 "_elementtree.c"
        var $47=($46); //@line 600 "_elementtree.c"
        var $48=($47) & -2; //@line 600 "_elementtree.c"
        var $49=($48); //@line 600 "_elementtree.c"
        FUNCTION_TABLE[$43]($49); //@line 600 "_elementtree.c"
        __label__ = 9; break; //@line 600 "_elementtree.c"
      case 9: // $bb8
        var $50=HEAP[$self_addr]; //@line 601 "_elementtree.c"
        var $51=(($50+12)&4294967295); //@line 601 "_elementtree.c"
        var $52=HEAP[$51]; //@line 601 "_elementtree.c"
        var $53=HEAP[$element]; //@line 601 "_elementtree.c"
        var $54=(($53+12)&4294967295); //@line 601 "_elementtree.c"
        HEAP[$54]=$52; //@line 601 "_elementtree.c"
        var $55=HEAP[$element]; //@line 602 "_elementtree.c"
        var $56=(($55+12)&4294967295); //@line 602 "_elementtree.c"
        var $57=HEAP[$56]; //@line 602 "_elementtree.c"
        var $58=($57); //@line 602 "_elementtree.c"
        var $59=($58) & -2; //@line 602 "_elementtree.c"
        var $60=($59); //@line 602 "_elementtree.c"
        var $61=(($60)&4294967295); //@line 602 "_elementtree.c"
        var $62=HEAP[$61]; //@line 602 "_elementtree.c"
        var $63=((($62) + 1)&4294967295); //@line 602 "_elementtree.c"
        var $64=(($60)&4294967295); //@line 602 "_elementtree.c"
        HEAP[$64]=$63; //@line 602 "_elementtree.c"
        var $65=HEAP[$element]; //@line 604 "_elementtree.c"
        var $66=(($65+16)&4294967295); //@line 604 "_elementtree.c"
        var $67=HEAP[$66]; //@line 604 "_elementtree.c"
        var $68=($67); //@line 604 "_elementtree.c"
        var $69=($68) & -2; //@line 604 "_elementtree.c"
        var $70=($69); //@line 604 "_elementtree.c"
        var $71=(($70)&4294967295); //@line 604 "_elementtree.c"
        var $72=HEAP[$71]; //@line 604 "_elementtree.c"
        var $73=((($72) - 1)&4294967295); //@line 604 "_elementtree.c"
        var $74=(($70)&4294967295); //@line 604 "_elementtree.c"
        HEAP[$74]=$73; //@line 604 "_elementtree.c"
        var $75=(($70)&4294967295); //@line 604 "_elementtree.c"
        var $76=HEAP[$75]; //@line 604 "_elementtree.c"
        var $77=((($76))|0)==0; //@line 604 "_elementtree.c"
        if ($77) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 604 "_elementtree.c"
      case 10: // $bb9
        var $78=HEAP[$element]; //@line 604 "_elementtree.c"
        var $79=(($78+16)&4294967295); //@line 604 "_elementtree.c"
        var $80=HEAP[$79]; //@line 604 "_elementtree.c"
        var $81=($80); //@line 604 "_elementtree.c"
        var $82=($81) & -2; //@line 604 "_elementtree.c"
        var $83=($82); //@line 604 "_elementtree.c"
        var $84=(($83+4)&4294967295); //@line 604 "_elementtree.c"
        var $85=HEAP[$84]; //@line 604 "_elementtree.c"
        var $86=(($85+24)&4294967295); //@line 604 "_elementtree.c"
        var $87=HEAP[$86]; //@line 604 "_elementtree.c"
        var $88=HEAP[$element]; //@line 604 "_elementtree.c"
        var $89=(($88+16)&4294967295); //@line 604 "_elementtree.c"
        var $90=HEAP[$89]; //@line 604 "_elementtree.c"
        var $91=($90); //@line 604 "_elementtree.c"
        var $92=($91) & -2; //@line 604 "_elementtree.c"
        var $93=($92); //@line 604 "_elementtree.c"
        FUNCTION_TABLE[$87]($93); //@line 604 "_elementtree.c"
        __label__ = 11; break; //@line 604 "_elementtree.c"
      case 11: // $bb10
        var $94=HEAP[$self_addr]; //@line 605 "_elementtree.c"
        var $95=(($94+16)&4294967295); //@line 605 "_elementtree.c"
        var $96=HEAP[$95]; //@line 605 "_elementtree.c"
        var $97=HEAP[$element]; //@line 605 "_elementtree.c"
        var $98=(($97+16)&4294967295); //@line 605 "_elementtree.c"
        HEAP[$98]=$96; //@line 605 "_elementtree.c"
        var $99=HEAP[$element]; //@line 606 "_elementtree.c"
        var $100=(($99+16)&4294967295); //@line 606 "_elementtree.c"
        var $101=HEAP[$100]; //@line 606 "_elementtree.c"
        var $102=($101); //@line 606 "_elementtree.c"
        var $103=($102) & -2; //@line 606 "_elementtree.c"
        var $104=($103); //@line 606 "_elementtree.c"
        var $105=(($104)&4294967295); //@line 606 "_elementtree.c"
        var $106=HEAP[$105]; //@line 606 "_elementtree.c"
        var $107=((($106) + 1)&4294967295); //@line 606 "_elementtree.c"
        var $108=(($104)&4294967295); //@line 606 "_elementtree.c"
        HEAP[$108]=$107; //@line 606 "_elementtree.c"
        var $109=HEAP[$self_addr]; //@line 608 "_elementtree.c"
        var $110=(($109+20)&4294967295); //@line 608 "_elementtree.c"
        var $111=HEAP[$110]; //@line 608 "_elementtree.c"
        var $112=($111)!=0; //@line 608 "_elementtree.c"
        if ($112) { __label__ = 12; break; } else { __label__ = 20; break; } //@line 608 "_elementtree.c"
      case 12: // $bb11
        var $113=HEAP[$self_addr]; //@line 610 "_elementtree.c"
        var $114=(($113+20)&4294967295); //@line 610 "_elementtree.c"
        var $115=HEAP[$114]; //@line 610 "_elementtree.c"
        var $116=(($115+4)&4294967295); //@line 610 "_elementtree.c"
        var $117=HEAP[$116]; //@line 610 "_elementtree.c"
        var $118=HEAP[$element]; //@line 610 "_elementtree.c"
        var $119=_element_resize($118, $117); //@line 610 "_elementtree.c"
        var $120=((($119))|0) < 0; //@line 610 "_elementtree.c"
        if ($120) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 610 "_elementtree.c"
      case 13: // $bb12
        var $121=HEAP[$element]; //@line 611 "_elementtree.c"
        var $122=$121; //@line 611 "_elementtree.c"
        var $123=(($122)&4294967295); //@line 611 "_elementtree.c"
        var $124=HEAP[$123]; //@line 611 "_elementtree.c"
        var $125=((($124) - 1)&4294967295); //@line 611 "_elementtree.c"
        var $126=(($122)&4294967295); //@line 611 "_elementtree.c"
        HEAP[$126]=$125; //@line 611 "_elementtree.c"
        var $127=(($122)&4294967295); //@line 611 "_elementtree.c"
        var $128=HEAP[$127]; //@line 611 "_elementtree.c"
        var $129=((($128))|0)==0; //@line 611 "_elementtree.c"
        if ($129) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 611 "_elementtree.c"
      case 14: // $bb13
        var $130=HEAP[$element]; //@line 611 "_elementtree.c"
        var $131=$130; //@line 611 "_elementtree.c"
        var $132=(($131+4)&4294967295); //@line 611 "_elementtree.c"
        var $133=HEAP[$132]; //@line 611 "_elementtree.c"
        var $134=(($133+24)&4294967295); //@line 611 "_elementtree.c"
        var $135=HEAP[$134]; //@line 611 "_elementtree.c"
        var $136=HEAP[$element]; //@line 611 "_elementtree.c"
        var $137=$136; //@line 611 "_elementtree.c"
        FUNCTION_TABLE[$135]($137); //@line 611 "_elementtree.c"
        __label__ = 15; break; //@line 611 "_elementtree.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 612 "_elementtree.c"
        __label__ = 21; break; //@line 612 "_elementtree.c"
      case 16: // $bb15
        HEAP[$i]=0; //@line 615 "_elementtree.c"
        __label__ = 18; break; //@line 615 "_elementtree.c"
      case 17: // $bb16
        var $138=HEAP[$self_addr]; //@line 616 "_elementtree.c"
        var $139=(($138+20)&4294967295); //@line 616 "_elementtree.c"
        var $140=HEAP[$139]; //@line 616 "_elementtree.c"
        var $141=(($140+12)&4294967295); //@line 616 "_elementtree.c"
        var $142=HEAP[$141]; //@line 616 "_elementtree.c"
        var $143=HEAP[$i]; //@line 616 "_elementtree.c"
        var $144=(($142+4*$143)&4294967295); //@line 616 "_elementtree.c"
        var $145=HEAP[$144]; //@line 616 "_elementtree.c"
        var $146=(($145)&4294967295); //@line 616 "_elementtree.c"
        var $147=HEAP[$146]; //@line 616 "_elementtree.c"
        var $148=((($147) + 1)&4294967295); //@line 616 "_elementtree.c"
        var $149=(($145)&4294967295); //@line 616 "_elementtree.c"
        HEAP[$149]=$148; //@line 616 "_elementtree.c"
        var $150=HEAP[$element]; //@line 617 "_elementtree.c"
        var $151=(($150+20)&4294967295); //@line 617 "_elementtree.c"
        var $152=HEAP[$151]; //@line 617 "_elementtree.c"
        var $153=(($152+12)&4294967295); //@line 617 "_elementtree.c"
        var $154=HEAP[$153]; //@line 617 "_elementtree.c"
        var $155=HEAP[$self_addr]; //@line 617 "_elementtree.c"
        var $156=(($155+20)&4294967295); //@line 617 "_elementtree.c"
        var $157=HEAP[$156]; //@line 617 "_elementtree.c"
        var $158=(($157+12)&4294967295); //@line 617 "_elementtree.c"
        var $159=HEAP[$158]; //@line 617 "_elementtree.c"
        var $160=HEAP[$i]; //@line 617 "_elementtree.c"
        var $161=(($159+4*$160)&4294967295); //@line 617 "_elementtree.c"
        var $162=HEAP[$161]; //@line 617 "_elementtree.c"
        var $163=HEAP[$i]; //@line 617 "_elementtree.c"
        var $164=(($154+4*$163)&4294967295); //@line 617 "_elementtree.c"
        HEAP[$164]=$162; //@line 617 "_elementtree.c"
        var $165=HEAP[$i]; //@line 615 "_elementtree.c"
        var $166=((($165) + 1)&4294967295); //@line 615 "_elementtree.c"
        HEAP[$i]=$166; //@line 615 "_elementtree.c"
        __label__ = 18; break; //@line 615 "_elementtree.c"
      case 18: // $bb17
        var $167=HEAP[$self_addr]; //@line 615 "_elementtree.c"
        var $168=(($167+20)&4294967295); //@line 615 "_elementtree.c"
        var $169=HEAP[$168]; //@line 615 "_elementtree.c"
        var $170=(($169+4)&4294967295); //@line 615 "_elementtree.c"
        var $171=HEAP[$170]; //@line 615 "_elementtree.c"
        var $172=HEAP[$i]; //@line 615 "_elementtree.c"
        var $173=((($171))|0) > ((($172))|0); //@line 615 "_elementtree.c"
        if ($173) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 615 "_elementtree.c"
      case 19: // $bb18
        var $174=HEAP[$element]; //@line 620 "_elementtree.c"
        var $175=(($174+20)&4294967295); //@line 620 "_elementtree.c"
        var $176=HEAP[$175]; //@line 620 "_elementtree.c"
        var $177=HEAP[$self_addr]; //@line 620 "_elementtree.c"
        var $178=(($177+20)&4294967295); //@line 620 "_elementtree.c"
        var $179=HEAP[$178]; //@line 620 "_elementtree.c"
        var $180=(($179+4)&4294967295); //@line 620 "_elementtree.c"
        var $181=HEAP[$180]; //@line 620 "_elementtree.c"
        var $182=(($176+4)&4294967295); //@line 620 "_elementtree.c"
        HEAP[$182]=$181; //@line 620 "_elementtree.c"
        __label__ = 20; break; //@line 620 "_elementtree.c"
      case 20: // $bb19
        var $183=HEAP[$element]; //@line 624 "_elementtree.c"
        var $184=$183; //@line 624 "_elementtree.c"
        HEAP[$0]=$184; //@line 624 "_elementtree.c"
        __label__ = 21; break; //@line 624 "_elementtree.c"
      case 21: // $bb20
        var $185=HEAP[$0]; //@line 592 "_elementtree.c"
        HEAP[$retval]=$185; //@line 592 "_elementtree.c"
        __label__ = 22; break; //@line 592 "_elementtree.c"
      case 22: // $return
        var $retval21=HEAP[$retval]; //@line 592 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 592 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_deepcopy($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 52; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $element=__stackBase__+20;
        var $tag=__stackBase__+24;
        var $attrib=__stackBase__+28;
        var $text=__stackBase__+32;
        var $tail=__stackBase__+36;
        var $id=__stackBase__+40;
        var $memo=__stackBase__+44;
        var $child=__stackBase__+48;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 639 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str8)&4294967295), $memo); //@line 639 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 639 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 639 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 640 "_elementtree.c"
        __label__ = 39; break; //@line 640 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$memo]; //@line 642 "_elementtree.c"
        var $5=HEAP[$self_addr]; //@line 642 "_elementtree.c"
        var $6=(($5+8)&4294967295); //@line 642 "_elementtree.c"
        var $7=HEAP[$6]; //@line 642 "_elementtree.c"
        var $8=_deepcopy($7, $4); //@line 642 "_elementtree.c"
        HEAP[$tag]=$8; //@line 642 "_elementtree.c"
        var $9=HEAP[$tag]; //@line 643 "_elementtree.c"
        var $10=($9)==0; //@line 643 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 643 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 644 "_elementtree.c"
        __label__ = 39; break; //@line 644 "_elementtree.c"
      case 4: // $bb3
        var $11=HEAP[$self_addr]; //@line 646 "_elementtree.c"
        var $12=(($11+20)&4294967295); //@line 646 "_elementtree.c"
        var $13=HEAP[$12]; //@line 646 "_elementtree.c"
        var $14=($13)!=0; //@line 646 "_elementtree.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 646 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$memo]; //@line 647 "_elementtree.c"
        var $16=HEAP[$self_addr]; //@line 647 "_elementtree.c"
        var $17=(($16+20)&4294967295); //@line 647 "_elementtree.c"
        var $18=HEAP[$17]; //@line 647 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 647 "_elementtree.c"
        var $20=HEAP[$19]; //@line 647 "_elementtree.c"
        var $21=_deepcopy($20, $15); //@line 647 "_elementtree.c"
        HEAP[$attrib]=$21; //@line 647 "_elementtree.c"
        var $22=HEAP[$attrib]; //@line 648 "_elementtree.c"
        var $23=($22)==0; //@line 648 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 648 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$tag]; //@line 649 "_elementtree.c"
        var $25=(($24)&4294967295); //@line 649 "_elementtree.c"
        var $26=HEAP[$25]; //@line 649 "_elementtree.c"
        var $27=((($26) - 1)&4294967295); //@line 649 "_elementtree.c"
        var $28=HEAP[$tag]; //@line 649 "_elementtree.c"
        var $29=(($28)&4294967295); //@line 649 "_elementtree.c"
        HEAP[$29]=$27; //@line 649 "_elementtree.c"
        var $30=HEAP[$tag]; //@line 649 "_elementtree.c"
        var $31=(($30)&4294967295); //@line 649 "_elementtree.c"
        var $32=HEAP[$31]; //@line 649 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 649 "_elementtree.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 649 "_elementtree.c"
      case 7: // $bb6
        var $34=HEAP[$tag]; //@line 649 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 649 "_elementtree.c"
        var $36=HEAP[$35]; //@line 649 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 649 "_elementtree.c"
        var $38=HEAP[$37]; //@line 649 "_elementtree.c"
        var $39=HEAP[$tag]; //@line 649 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 649 "_elementtree.c"
        __label__ = 8; break; //@line 649 "_elementtree.c"
      case 8: // $bb7
        HEAP[$0]=0; //@line 650 "_elementtree.c"
        __label__ = 39; break; //@line 650 "_elementtree.c"
      case 9: // $bb8
        __label__ = 11; break; //@line 650 "_elementtree.c"
      case 10: // $bb9
        var $40=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 653 "_elementtree.c"
        var $41=((($40) + 1)&4294967295); //@line 653 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$41; //@line 653 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 654 "_elementtree.c"
        __label__ = 11; break; //@line 654 "_elementtree.c"
      case 11: // $bb10
        var $42=HEAP[$tag]; //@line 657 "_elementtree.c"
        var $43=HEAP[$attrib]; //@line 657 "_elementtree.c"
        var $44=_element_new($42, $43); //@line 657 "_elementtree.c"
        var $45=$44; //@line 657 "_elementtree.c"
        HEAP[$element]=$45; //@line 657 "_elementtree.c"
        var $46=HEAP[$tag]; //@line 659 "_elementtree.c"
        var $47=(($46)&4294967295); //@line 659 "_elementtree.c"
        var $48=HEAP[$47]; //@line 659 "_elementtree.c"
        var $49=((($48) - 1)&4294967295); //@line 659 "_elementtree.c"
        var $50=HEAP[$tag]; //@line 659 "_elementtree.c"
        var $51=(($50)&4294967295); //@line 659 "_elementtree.c"
        HEAP[$51]=$49; //@line 659 "_elementtree.c"
        var $52=HEAP[$tag]; //@line 659 "_elementtree.c"
        var $53=(($52)&4294967295); //@line 659 "_elementtree.c"
        var $54=HEAP[$53]; //@line 659 "_elementtree.c"
        var $55=((($54))|0)==0; //@line 659 "_elementtree.c"
        if ($55) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 659 "_elementtree.c"
      case 12: // $bb11
        var $56=HEAP[$tag]; //@line 659 "_elementtree.c"
        var $57=(($56+4)&4294967295); //@line 659 "_elementtree.c"
        var $58=HEAP[$57]; //@line 659 "_elementtree.c"
        var $59=(($58+24)&4294967295); //@line 659 "_elementtree.c"
        var $60=HEAP[$59]; //@line 659 "_elementtree.c"
        var $61=HEAP[$tag]; //@line 659 "_elementtree.c"
        FUNCTION_TABLE[$60]($61); //@line 659 "_elementtree.c"
        __label__ = 13; break; //@line 659 "_elementtree.c"
      case 13: // $bb12
        var $62=HEAP[$attrib]; //@line 660 "_elementtree.c"
        var $63=(($62)&4294967295); //@line 660 "_elementtree.c"
        var $64=HEAP[$63]; //@line 660 "_elementtree.c"
        var $65=((($64) - 1)&4294967295); //@line 660 "_elementtree.c"
        var $66=HEAP[$attrib]; //@line 660 "_elementtree.c"
        var $67=(($66)&4294967295); //@line 660 "_elementtree.c"
        HEAP[$67]=$65; //@line 660 "_elementtree.c"
        var $68=HEAP[$attrib]; //@line 660 "_elementtree.c"
        var $69=(($68)&4294967295); //@line 660 "_elementtree.c"
        var $70=HEAP[$69]; //@line 660 "_elementtree.c"
        var $71=((($70))|0)==0; //@line 660 "_elementtree.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 660 "_elementtree.c"
      case 14: // $bb13
        var $72=HEAP[$attrib]; //@line 660 "_elementtree.c"
        var $73=(($72+4)&4294967295); //@line 660 "_elementtree.c"
        var $74=HEAP[$73]; //@line 660 "_elementtree.c"
        var $75=(($74+24)&4294967295); //@line 660 "_elementtree.c"
        var $76=HEAP[$75]; //@line 660 "_elementtree.c"
        var $77=HEAP[$attrib]; //@line 660 "_elementtree.c"
        FUNCTION_TABLE[$76]($77); //@line 660 "_elementtree.c"
        __label__ = 15; break; //@line 660 "_elementtree.c"
      case 15: // $bb14
        var $78=HEAP[$element]; //@line 662 "_elementtree.c"
        var $79=($78)==0; //@line 662 "_elementtree.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 662 "_elementtree.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 663 "_elementtree.c"
        __label__ = 39; break; //@line 663 "_elementtree.c"
      case 17: // $bb16
        var $80=HEAP[$memo]; //@line 665 "_elementtree.c"
        var $81=HEAP[$self_addr]; //@line 665 "_elementtree.c"
        var $82=(($81+12)&4294967295); //@line 665 "_elementtree.c"
        var $83=HEAP[$82]; //@line 665 "_elementtree.c"
        var $84=($83); //@line 665 "_elementtree.c"
        var $85=($84) & -2; //@line 665 "_elementtree.c"
        var $86=($85); //@line 665 "_elementtree.c"
        var $87=_deepcopy($86, $80); //@line 665 "_elementtree.c"
        HEAP[$text]=$87; //@line 665 "_elementtree.c"
        var $88=HEAP[$text]; //@line 666 "_elementtree.c"
        var $89=($88)==0; //@line 666 "_elementtree.c"
        if ($89) { __label__ = 36; break; } else { __label__ = 18; break; } //@line 666 "_elementtree.c"
      case 18: // $bb17
        var $90=HEAP[$element]; //@line 668 "_elementtree.c"
        var $91=(($90+12)&4294967295); //@line 668 "_elementtree.c"
        var $92=HEAP[$91]; //@line 668 "_elementtree.c"
        var $93=(($92)&4294967295); //@line 668 "_elementtree.c"
        var $94=HEAP[$93]; //@line 668 "_elementtree.c"
        var $95=((($94) - 1)&4294967295); //@line 668 "_elementtree.c"
        var $96=(($92)&4294967295); //@line 668 "_elementtree.c"
        HEAP[$96]=$95; //@line 668 "_elementtree.c"
        var $97=(($92)&4294967295); //@line 668 "_elementtree.c"
        var $98=HEAP[$97]; //@line 668 "_elementtree.c"
        var $99=((($98))|0)==0; //@line 668 "_elementtree.c"
        if ($99) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 668 "_elementtree.c"
      case 19: // $bb18
        var $100=HEAP[$element]; //@line 668 "_elementtree.c"
        var $101=(($100+12)&4294967295); //@line 668 "_elementtree.c"
        var $102=HEAP[$101]; //@line 668 "_elementtree.c"
        var $103=(($102+4)&4294967295); //@line 668 "_elementtree.c"
        var $104=HEAP[$103]; //@line 668 "_elementtree.c"
        var $105=(($104+24)&4294967295); //@line 668 "_elementtree.c"
        var $106=HEAP[$105]; //@line 668 "_elementtree.c"
        var $107=HEAP[$element]; //@line 668 "_elementtree.c"
        var $108=(($107+12)&4294967295); //@line 668 "_elementtree.c"
        var $109=HEAP[$108]; //@line 668 "_elementtree.c"
        FUNCTION_TABLE[$106]($109); //@line 668 "_elementtree.c"
        __label__ = 20; break; //@line 668 "_elementtree.c"
      case 20: // $bb19
        var $110=HEAP[$text]; //@line 669 "_elementtree.c"
        var $111=($110); //@line 669 "_elementtree.c"
        var $112=($111) & -2; //@line 669 "_elementtree.c"
        var $113=HEAP[$self_addr]; //@line 669 "_elementtree.c"
        var $114=(($113+12)&4294967295); //@line 669 "_elementtree.c"
        var $115=HEAP[$114]; //@line 669 "_elementtree.c"
        var $116=($115); //@line 669 "_elementtree.c"
        var $117=($116) & 1; //@line 669 "_elementtree.c"
        var $118=($112) | ($117); //@line 669 "_elementtree.c"
        var $119=($118); //@line 669 "_elementtree.c"
        var $120=HEAP[$element]; //@line 669 "_elementtree.c"
        var $121=(($120+12)&4294967295); //@line 669 "_elementtree.c"
        HEAP[$121]=$119; //@line 669 "_elementtree.c"
        var $122=HEAP[$memo]; //@line 671 "_elementtree.c"
        var $123=HEAP[$self_addr]; //@line 671 "_elementtree.c"
        var $124=(($123+16)&4294967295); //@line 671 "_elementtree.c"
        var $125=HEAP[$124]; //@line 671 "_elementtree.c"
        var $126=($125); //@line 671 "_elementtree.c"
        var $127=($126) & -2; //@line 671 "_elementtree.c"
        var $128=($127); //@line 671 "_elementtree.c"
        var $129=_deepcopy($128, $122); //@line 671 "_elementtree.c"
        HEAP[$tail]=$129; //@line 671 "_elementtree.c"
        var $130=HEAP[$tail]; //@line 672 "_elementtree.c"
        var $131=($130)==0; //@line 672 "_elementtree.c"
        if ($131) { __label__ = 36; break; } else { __label__ = 21; break; } //@line 672 "_elementtree.c"
      case 21: // $bb20
        var $132=HEAP[$element]; //@line 674 "_elementtree.c"
        var $133=(($132+16)&4294967295); //@line 674 "_elementtree.c"
        var $134=HEAP[$133]; //@line 674 "_elementtree.c"
        var $135=(($134)&4294967295); //@line 674 "_elementtree.c"
        var $136=HEAP[$135]; //@line 674 "_elementtree.c"
        var $137=((($136) - 1)&4294967295); //@line 674 "_elementtree.c"
        var $138=(($134)&4294967295); //@line 674 "_elementtree.c"
        HEAP[$138]=$137; //@line 674 "_elementtree.c"
        var $139=(($134)&4294967295); //@line 674 "_elementtree.c"
        var $140=HEAP[$139]; //@line 674 "_elementtree.c"
        var $141=((($140))|0)==0; //@line 674 "_elementtree.c"
        if ($141) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 674 "_elementtree.c"
      case 22: // $bb21
        var $142=HEAP[$element]; //@line 674 "_elementtree.c"
        var $143=(($142+16)&4294967295); //@line 674 "_elementtree.c"
        var $144=HEAP[$143]; //@line 674 "_elementtree.c"
        var $145=(($144+4)&4294967295); //@line 674 "_elementtree.c"
        var $146=HEAP[$145]; //@line 674 "_elementtree.c"
        var $147=(($146+24)&4294967295); //@line 674 "_elementtree.c"
        var $148=HEAP[$147]; //@line 674 "_elementtree.c"
        var $149=HEAP[$element]; //@line 674 "_elementtree.c"
        var $150=(($149+16)&4294967295); //@line 674 "_elementtree.c"
        var $151=HEAP[$150]; //@line 674 "_elementtree.c"
        FUNCTION_TABLE[$148]($151); //@line 674 "_elementtree.c"
        __label__ = 23; break; //@line 674 "_elementtree.c"
      case 23: // $bb22
        var $152=HEAP[$tail]; //@line 675 "_elementtree.c"
        var $153=($152); //@line 675 "_elementtree.c"
        var $154=($153) & -2; //@line 675 "_elementtree.c"
        var $155=HEAP[$self_addr]; //@line 675 "_elementtree.c"
        var $156=(($155+16)&4294967295); //@line 675 "_elementtree.c"
        var $157=HEAP[$156]; //@line 675 "_elementtree.c"
        var $158=($157); //@line 675 "_elementtree.c"
        var $159=($158) & 1; //@line 675 "_elementtree.c"
        var $160=($154) | ($159); //@line 675 "_elementtree.c"
        var $161=($160); //@line 675 "_elementtree.c"
        var $162=HEAP[$element]; //@line 675 "_elementtree.c"
        var $163=(($162+16)&4294967295); //@line 675 "_elementtree.c"
        HEAP[$163]=$161; //@line 675 "_elementtree.c"
        var $164=HEAP[$self_addr]; //@line 677 "_elementtree.c"
        var $165=(($164+20)&4294967295); //@line 677 "_elementtree.c"
        var $166=HEAP[$165]; //@line 677 "_elementtree.c"
        var $167=($166)!=0; //@line 677 "_elementtree.c"
        if ($167) { __label__ = 24; break; } else { __label__ = 31; break; } //@line 677 "_elementtree.c"
      case 24: // $bb23
        var $168=HEAP[$self_addr]; //@line 679 "_elementtree.c"
        var $169=(($168+20)&4294967295); //@line 679 "_elementtree.c"
        var $170=HEAP[$169]; //@line 679 "_elementtree.c"
        var $171=(($170+4)&4294967295); //@line 679 "_elementtree.c"
        var $172=HEAP[$171]; //@line 679 "_elementtree.c"
        var $173=HEAP[$element]; //@line 679 "_elementtree.c"
        var $174=_element_resize($173, $172); //@line 679 "_elementtree.c"
        var $175=((($174))|0) < 0; //@line 679 "_elementtree.c"
        if ($175) { __label__ = 36; break; } else { __label__ = 25; break; } //@line 679 "_elementtree.c"
      case 25: // $bb24
        HEAP[$i]=0; //@line 682 "_elementtree.c"
        __label__ = 29; break; //@line 682 "_elementtree.c"
      case 26: // $bb25
        var $176=HEAP[$memo]; //@line 683 "_elementtree.c"
        var $177=HEAP[$self_addr]; //@line 683 "_elementtree.c"
        var $178=(($177+20)&4294967295); //@line 683 "_elementtree.c"
        var $179=HEAP[$178]; //@line 683 "_elementtree.c"
        var $180=(($179+12)&4294967295); //@line 683 "_elementtree.c"
        var $181=HEAP[$180]; //@line 683 "_elementtree.c"
        var $182=HEAP[$i]; //@line 683 "_elementtree.c"
        var $183=(($181+4*$182)&4294967295); //@line 683 "_elementtree.c"
        var $184=HEAP[$183]; //@line 683 "_elementtree.c"
        var $185=_deepcopy($184, $176); //@line 683 "_elementtree.c"
        HEAP[$child]=$185; //@line 683 "_elementtree.c"
        var $186=HEAP[$child]; //@line 684 "_elementtree.c"
        var $187=($186)==0; //@line 684 "_elementtree.c"
        if ($187) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 684 "_elementtree.c"
      case 27: // $bb26
        var $188=HEAP[$element]; //@line 685 "_elementtree.c"
        var $189=(($188+20)&4294967295); //@line 685 "_elementtree.c"
        var $190=HEAP[$189]; //@line 685 "_elementtree.c"
        var $191=(($190+4)&4294967295); //@line 685 "_elementtree.c"
        var $192=HEAP[$i]; //@line 685 "_elementtree.c"
        HEAP[$191]=$192; //@line 685 "_elementtree.c"
        __label__ = 36; break; //@line 685 "_elementtree.c"
      case 28: // $bb27
        var $193=HEAP[$element]; //@line 688 "_elementtree.c"
        var $194=(($193+20)&4294967295); //@line 688 "_elementtree.c"
        var $195=HEAP[$194]; //@line 688 "_elementtree.c"
        var $196=(($195+12)&4294967295); //@line 688 "_elementtree.c"
        var $197=HEAP[$196]; //@line 688 "_elementtree.c"
        var $198=HEAP[$i]; //@line 688 "_elementtree.c"
        var $199=(($197+4*$198)&4294967295); //@line 688 "_elementtree.c"
        var $200=HEAP[$child]; //@line 688 "_elementtree.c"
        HEAP[$199]=$200; //@line 688 "_elementtree.c"
        var $201=HEAP[$i]; //@line 682 "_elementtree.c"
        var $202=((($201) + 1)&4294967295); //@line 682 "_elementtree.c"
        HEAP[$i]=$202; //@line 682 "_elementtree.c"
        __label__ = 29; break; //@line 682 "_elementtree.c"
      case 29: // $bb28
        var $203=HEAP[$self_addr]; //@line 682 "_elementtree.c"
        var $204=(($203+20)&4294967295); //@line 682 "_elementtree.c"
        var $205=HEAP[$204]; //@line 682 "_elementtree.c"
        var $206=(($205+4)&4294967295); //@line 682 "_elementtree.c"
        var $207=HEAP[$206]; //@line 682 "_elementtree.c"
        var $208=HEAP[$i]; //@line 682 "_elementtree.c"
        var $209=((($207))|0) > ((($208))|0); //@line 682 "_elementtree.c"
        if ($209) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 682 "_elementtree.c"
      case 30: // $bb29
        var $210=HEAP[$element]; //@line 691 "_elementtree.c"
        var $211=(($210+20)&4294967295); //@line 691 "_elementtree.c"
        var $212=HEAP[$211]; //@line 691 "_elementtree.c"
        var $213=HEAP[$self_addr]; //@line 691 "_elementtree.c"
        var $214=(($213+20)&4294967295); //@line 691 "_elementtree.c"
        var $215=HEAP[$214]; //@line 691 "_elementtree.c"
        var $216=(($215+4)&4294967295); //@line 691 "_elementtree.c"
        var $217=HEAP[$216]; //@line 691 "_elementtree.c"
        var $218=(($212+4)&4294967295); //@line 691 "_elementtree.c"
        HEAP[$218]=$217; //@line 691 "_elementtree.c"
        __label__ = 31; break; //@line 691 "_elementtree.c"
      case 31: // $bb30
        var $219=HEAP[$self_addr]; //@line 696 "_elementtree.c"
        var $220=($219); //@line 696 "_elementtree.c"
        var $221=_PyInt_FromLong($220); //@line 696 "_elementtree.c"
        HEAP[$id]=$221; //@line 696 "_elementtree.c"
        var $222=HEAP[$id]; //@line 697 "_elementtree.c"
        var $223=($222)==0; //@line 697 "_elementtree.c"
        if ($223) { __label__ = 36; break; } else { __label__ = 32; break; } //@line 697 "_elementtree.c"
      case 32: // $bb31
        var $224=HEAP[$element]; //@line 700 "_elementtree.c"
        var $225=$224; //@line 700 "_elementtree.c"
        var $226=HEAP[$memo]; //@line 700 "_elementtree.c"
        var $227=HEAP[$id]; //@line 700 "_elementtree.c"
        var $228=_PyDict_SetItem($226, $227, $225); //@line 700 "_elementtree.c"
        HEAP[$i]=$228; //@line 700 "_elementtree.c"
        var $229=HEAP[$id]; //@line 702 "_elementtree.c"
        var $230=(($229)&4294967295); //@line 702 "_elementtree.c"
        var $231=HEAP[$230]; //@line 702 "_elementtree.c"
        var $232=((($231) - 1)&4294967295); //@line 702 "_elementtree.c"
        var $233=HEAP[$id]; //@line 702 "_elementtree.c"
        var $234=(($233)&4294967295); //@line 702 "_elementtree.c"
        HEAP[$234]=$232; //@line 702 "_elementtree.c"
        var $235=HEAP[$id]; //@line 702 "_elementtree.c"
        var $236=(($235)&4294967295); //@line 702 "_elementtree.c"
        var $237=HEAP[$236]; //@line 702 "_elementtree.c"
        var $238=((($237))|0)==0; //@line 702 "_elementtree.c"
        if ($238) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 702 "_elementtree.c"
      case 33: // $bb32
        var $239=HEAP[$id]; //@line 702 "_elementtree.c"
        var $240=(($239+4)&4294967295); //@line 702 "_elementtree.c"
        var $241=HEAP[$240]; //@line 702 "_elementtree.c"
        var $242=(($241+24)&4294967295); //@line 702 "_elementtree.c"
        var $243=HEAP[$242]; //@line 702 "_elementtree.c"
        var $244=HEAP[$id]; //@line 702 "_elementtree.c"
        FUNCTION_TABLE[$243]($244); //@line 702 "_elementtree.c"
        __label__ = 34; break; //@line 702 "_elementtree.c"
      case 34: // $bb33
        var $245=HEAP[$i]; //@line 704 "_elementtree.c"
        var $246=((($245))|0) < 0; //@line 704 "_elementtree.c"
        if ($246) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 704 "_elementtree.c"
      case 35: // $bb34
        var $247=HEAP[$element]; //@line 707 "_elementtree.c"
        var $248=$247; //@line 707 "_elementtree.c"
        HEAP[$0]=$248; //@line 707 "_elementtree.c"
        __label__ = 39; break; //@line 707 "_elementtree.c"
      case 36: // $error
        var $249=HEAP[$element]; //@line 710 "_elementtree.c"
        var $250=$249; //@line 710 "_elementtree.c"
        var $251=(($250)&4294967295); //@line 710 "_elementtree.c"
        var $252=HEAP[$251]; //@line 710 "_elementtree.c"
        var $253=((($252) - 1)&4294967295); //@line 710 "_elementtree.c"
        var $254=(($250)&4294967295); //@line 710 "_elementtree.c"
        HEAP[$254]=$253; //@line 710 "_elementtree.c"
        var $255=(($250)&4294967295); //@line 710 "_elementtree.c"
        var $256=HEAP[$255]; //@line 710 "_elementtree.c"
        var $257=((($256))|0)==0; //@line 710 "_elementtree.c"
        if ($257) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 710 "_elementtree.c"
      case 37: // $bb35
        var $258=HEAP[$element]; //@line 710 "_elementtree.c"
        var $259=$258; //@line 710 "_elementtree.c"
        var $260=(($259+4)&4294967295); //@line 710 "_elementtree.c"
        var $261=HEAP[$260]; //@line 710 "_elementtree.c"
        var $262=(($261+24)&4294967295); //@line 710 "_elementtree.c"
        var $263=HEAP[$262]; //@line 710 "_elementtree.c"
        var $264=HEAP[$element]; //@line 710 "_elementtree.c"
        var $265=$264; //@line 710 "_elementtree.c"
        FUNCTION_TABLE[$263]($265); //@line 710 "_elementtree.c"
        __label__ = 38; break; //@line 710 "_elementtree.c"
      case 38: // $bb36
        HEAP[$0]=0; //@line 711 "_elementtree.c"
        __label__ = 39; break; //@line 711 "_elementtree.c"
      case 39: // $bb37
        var $266=HEAP[$0]; //@line 640 "_elementtree.c"
        HEAP[$retval]=$266; //@line 640 "_elementtree.c"
        __label__ = 40; break; //@line 640 "_elementtree.c"
      case 40: // $return
        var $retval38=HEAP[$retval]; //@line 640 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval38; //@line 640 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _checkpath($tag) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $tag_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $i=__stackBase__+12;
        var $check=__stackBase__+16;
        var $p=__stackBase__+20;
        var $p17=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$tag_addr]=$tag;
        HEAP[$check]=1; //@line 718 "_elementtree.c"
        var $1=HEAP[$tag_addr]; //@line 726 "_elementtree.c"
        var $2=(($1+4)&4294967295); //@line 726 "_elementtree.c"
        var $3=HEAP[$2]; //@line 726 "_elementtree.c"
        var $4=(($3+84)&4294967295); //@line 726 "_elementtree.c"
        var $5=HEAP[$4]; //@line 726 "_elementtree.c"
        var $6=($5) & 268435456; //@line 726 "_elementtree.c"
        var $7=((($6))|0)!=0; //@line 726 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 16; break; } //@line 726 "_elementtree.c"
      case 1: // $bb
        var $8=HEAP[$tag_addr]; //@line 727 "_elementtree.c"
        var $9=$8; //@line 727 "_elementtree.c"
        var $10=(($9+12)&4294967295); //@line 727 "_elementtree.c"
        var $11=HEAP[$10]; //@line 727 "_elementtree.c"
        HEAP[$p]=$11; //@line 727 "_elementtree.c"
        HEAP[$i]=0; //@line 728 "_elementtree.c"
        __label__ = 14; break; //@line 728 "_elementtree.c"
      case 2: // $bb1
        var $12=HEAP[$p]; //@line 729 "_elementtree.c"
        var $13=HEAP[$i]; //@line 729 "_elementtree.c"
        var $14=(($12+2*$13)&4294967295); //@line 729 "_elementtree.c"
        var $15=HEAP[$14]; //@line 729 "_elementtree.c"
        var $16=reSign(($15), 16, 0)==123; //@line 729 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 729 "_elementtree.c"
      case 3: // $bb2
        HEAP[$check]=0; //@line 730 "_elementtree.c"
        __label__ = 13; break; //@line 730 "_elementtree.c"
      case 4: // $bb3
        var $17=HEAP[$p]; //@line 731 "_elementtree.c"
        var $18=HEAP[$i]; //@line 731 "_elementtree.c"
        var $19=(($17+2*$18)&4294967295); //@line 731 "_elementtree.c"
        var $20=HEAP[$19]; //@line 731 "_elementtree.c"
        var $21=reSign(($20), 16, 0)==125; //@line 731 "_elementtree.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 731 "_elementtree.c"
      case 5: // $bb4
        HEAP[$check]=1; //@line 732 "_elementtree.c"
        __label__ = 13; break; //@line 732 "_elementtree.c"
      case 6: // $bb5
        var $22=HEAP[$check]; //@line 733 "_elementtree.c"
        var $23=((($22))|0)!=0; //@line 733 "_elementtree.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 733 "_elementtree.c"
      case 7: // $bb6
        var $24=HEAP[$p]; //@line 733 "_elementtree.c"
        var $25=HEAP[$i]; //@line 733 "_elementtree.c"
        var $26=(($24+2*$25)&4294967295); //@line 733 "_elementtree.c"
        var $27=HEAP[$26]; //@line 733 "_elementtree.c"
        var $28=reSign(($27), 16, 0)==47; //@line 733 "_elementtree.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 733 "_elementtree.c"
      case 8: // $bb7
        var $29=HEAP[$p]; //@line 733 "_elementtree.c"
        var $30=HEAP[$i]; //@line 733 "_elementtree.c"
        var $31=(($29+2*$30)&4294967295); //@line 733 "_elementtree.c"
        var $32=HEAP[$31]; //@line 733 "_elementtree.c"
        var $33=reSign(($32), 16, 0)==42; //@line 733 "_elementtree.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 733 "_elementtree.c"
      case 9: // $bb8
        var $34=HEAP[$p]; //@line 733 "_elementtree.c"
        var $35=HEAP[$i]; //@line 733 "_elementtree.c"
        var $36=(($34+2*$35)&4294967295); //@line 733 "_elementtree.c"
        var $37=HEAP[$36]; //@line 733 "_elementtree.c"
        var $38=reSign(($37), 16, 0)==91; //@line 733 "_elementtree.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 733 "_elementtree.c"
      case 10: // $bb9
        var $39=HEAP[$p]; //@line 733 "_elementtree.c"
        var $40=HEAP[$i]; //@line 733 "_elementtree.c"
        var $41=(($39+2*$40)&4294967295); //@line 733 "_elementtree.c"
        var $42=HEAP[$41]; //@line 733 "_elementtree.c"
        var $43=reSign(($42), 16, 0)==64; //@line 733 "_elementtree.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 733 "_elementtree.c"
      case 11: // $bb10
        var $44=HEAP[$p]; //@line 733 "_elementtree.c"
        var $45=HEAP[$i]; //@line 733 "_elementtree.c"
        var $46=(($44+2*$45)&4294967295); //@line 733 "_elementtree.c"
        var $47=HEAP[$46]; //@line 733 "_elementtree.c"
        var $48=reSign(($47), 16, 0)==46; //@line 733 "_elementtree.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 733 "_elementtree.c"
      case 12: // $bb11
        HEAP[$0]=1; //@line 734 "_elementtree.c"
        __label__ = 33; break; //@line 734 "_elementtree.c"
      case 13: // $bb12
        var $49=HEAP[$i]; //@line 728 "_elementtree.c"
        var $50=((($49) + 1)&4294967295); //@line 728 "_elementtree.c"
        HEAP[$i]=$50; //@line 728 "_elementtree.c"
        __label__ = 14; break; //@line 728 "_elementtree.c"
      case 14: // $bb13
        var $51=HEAP[$tag_addr]; //@line 728 "_elementtree.c"
        var $52=$51; //@line 728 "_elementtree.c"
        var $53=(($52+8)&4294967295); //@line 728 "_elementtree.c"
        var $54=HEAP[$53]; //@line 728 "_elementtree.c"
        var $55=HEAP[$i]; //@line 728 "_elementtree.c"
        var $56=((($54))|0) > ((($55))|0); //@line 728 "_elementtree.c"
        if ($56) { __label__ = 2; break; } else { __label__ = 15; break; } //@line 728 "_elementtree.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 736 "_elementtree.c"
        __label__ = 33; break; //@line 736 "_elementtree.c"
      case 16: // $bb15
        var $57=HEAP[$tag_addr]; //@line 739 "_elementtree.c"
        var $58=(($57+4)&4294967295); //@line 739 "_elementtree.c"
        var $59=HEAP[$58]; //@line 739 "_elementtree.c"
        var $60=(($59+84)&4294967295); //@line 739 "_elementtree.c"
        var $61=HEAP[$60]; //@line 739 "_elementtree.c"
        var $62=($61) & 134217728; //@line 739 "_elementtree.c"
        var $63=((($62))|0)!=0; //@line 739 "_elementtree.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 739 "_elementtree.c"
      case 17: // $bb16
        var $64=HEAP[$tag_addr]; //@line 740 "_elementtree.c"
        var $65=$64; //@line 740 "_elementtree.c"
        var $66=(($65+20)&4294967295); //@line 740 "_elementtree.c"
        var $67=(($66)&4294967295); //@line 740 "_elementtree.c"
        HEAP[$p17]=$67; //@line 740 "_elementtree.c"
        HEAP[$i]=0; //@line 741 "_elementtree.c"
        __label__ = 30; break; //@line 741 "_elementtree.c"
      case 18: // $bb18
        var $68=HEAP[$p17]; //@line 742 "_elementtree.c"
        var $69=HEAP[$i]; //@line 742 "_elementtree.c"
        var $70=(($68+$69)&4294967295); //@line 742 "_elementtree.c"
        var $71=HEAP[$70]; //@line 742 "_elementtree.c"
        var $72=reSign(($71), 8, 0)==123; //@line 742 "_elementtree.c"
        if ($72) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 742 "_elementtree.c"
      case 19: // $bb19
        HEAP[$check]=0; //@line 743 "_elementtree.c"
        __label__ = 29; break; //@line 743 "_elementtree.c"
      case 20: // $bb20
        var $73=HEAP[$p17]; //@line 744 "_elementtree.c"
        var $74=HEAP[$i]; //@line 744 "_elementtree.c"
        var $75=(($73+$74)&4294967295); //@line 744 "_elementtree.c"
        var $76=HEAP[$75]; //@line 744 "_elementtree.c"
        var $77=reSign(($76), 8, 0)==125; //@line 744 "_elementtree.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 744 "_elementtree.c"
      case 21: // $bb21
        HEAP[$check]=1; //@line 745 "_elementtree.c"
        __label__ = 29; break; //@line 745 "_elementtree.c"
      case 22: // $bb22
        var $78=HEAP[$check]; //@line 746 "_elementtree.c"
        var $79=((($78))|0)!=0; //@line 746 "_elementtree.c"
        if ($79) { __label__ = 23; break; } else { __label__ = 29; break; } //@line 746 "_elementtree.c"
      case 23: // $bb23
        var $80=HEAP[$p17]; //@line 746 "_elementtree.c"
        var $81=HEAP[$i]; //@line 746 "_elementtree.c"
        var $82=(($80+$81)&4294967295); //@line 746 "_elementtree.c"
        var $83=HEAP[$82]; //@line 746 "_elementtree.c"
        var $84=reSign(($83), 8, 0)==47; //@line 746 "_elementtree.c"
        if ($84) { __label__ = 28; break; } else { __label__ = 24; break; } //@line 746 "_elementtree.c"
      case 24: // $bb24
        var $85=HEAP[$p17]; //@line 746 "_elementtree.c"
        var $86=HEAP[$i]; //@line 746 "_elementtree.c"
        var $87=(($85+$86)&4294967295); //@line 746 "_elementtree.c"
        var $88=HEAP[$87]; //@line 746 "_elementtree.c"
        var $89=reSign(($88), 8, 0)==42; //@line 746 "_elementtree.c"
        if ($89) { __label__ = 28; break; } else { __label__ = 25; break; } //@line 746 "_elementtree.c"
      case 25: // $bb25
        var $90=HEAP[$p17]; //@line 746 "_elementtree.c"
        var $91=HEAP[$i]; //@line 746 "_elementtree.c"
        var $92=(($90+$91)&4294967295); //@line 746 "_elementtree.c"
        var $93=HEAP[$92]; //@line 746 "_elementtree.c"
        var $94=reSign(($93), 8, 0)==91; //@line 746 "_elementtree.c"
        if ($94) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 746 "_elementtree.c"
      case 26: // $bb26
        var $95=HEAP[$p17]; //@line 746 "_elementtree.c"
        var $96=HEAP[$i]; //@line 746 "_elementtree.c"
        var $97=(($95+$96)&4294967295); //@line 746 "_elementtree.c"
        var $98=HEAP[$97]; //@line 746 "_elementtree.c"
        var $99=reSign(($98), 8, 0)==64; //@line 746 "_elementtree.c"
        if ($99) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 746 "_elementtree.c"
      case 27: // $bb27
        var $100=HEAP[$p17]; //@line 746 "_elementtree.c"
        var $101=HEAP[$i]; //@line 746 "_elementtree.c"
        var $102=(($100+$101)&4294967295); //@line 746 "_elementtree.c"
        var $103=HEAP[$102]; //@line 746 "_elementtree.c"
        var $104=reSign(($103), 8, 0)==46; //@line 746 "_elementtree.c"
        if ($104) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 746 "_elementtree.c"
      case 28: // $bb28
        HEAP[$0]=1; //@line 747 "_elementtree.c"
        __label__ = 33; break; //@line 747 "_elementtree.c"
      case 29: // $bb29
        var $105=HEAP[$i]; //@line 741 "_elementtree.c"
        var $106=((($105) + 1)&4294967295); //@line 741 "_elementtree.c"
        HEAP[$i]=$106; //@line 741 "_elementtree.c"
        __label__ = 30; break; //@line 741 "_elementtree.c"
      case 30: // $bb30
        var $107=HEAP[$tag_addr]; //@line 741 "_elementtree.c"
        var $108=$107; //@line 741 "_elementtree.c"
        var $109=(($108+8)&4294967295); //@line 741 "_elementtree.c"
        var $110=HEAP[$109]; //@line 741 "_elementtree.c"
        var $111=HEAP[$i]; //@line 741 "_elementtree.c"
        var $112=((($110))|0) > ((($111))|0); //@line 741 "_elementtree.c"
        if ($112) { __label__ = 18; break; } else { __label__ = 31; break; } //@line 741 "_elementtree.c"
      case 31: // $bb31
        HEAP[$0]=0; //@line 749 "_elementtree.c"
        __label__ = 33; break; //@line 749 "_elementtree.c"
      case 32: // $bb32
        HEAP[$0]=1; //@line 752 "_elementtree.c"
        __label__ = 33; break; //@line 752 "_elementtree.c"
      case 33: // $bb33
        var $113=HEAP[$0]; //@line 734 "_elementtree.c"
        HEAP[$retval]=$113; //@line 734 "_elementtree.c"
        __label__ = 34; break; //@line 734 "_elementtree.c"
      case 34: // $return
        var $retval34=HEAP[$retval]; //@line 734 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 734 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_extend($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $iftmp_69=__stackBase__+12;
        var $0=__stackBase__+16;
        var $seq=__stackBase__+20;
        var $i=__stackBase__+24;
        var $seqlen=__stackBase__+28;
        var $seq_in=__stackBase__+32;
        var $element=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$seqlen]=0; //@line 759 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 762 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str9)&4294967295), $seq_in); //@line 762 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 762 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 762 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 763 "_elementtree.c"
        __label__ = 17; break; //@line 763 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$seq_in]; //@line 765 "_elementtree.c"
        var $5=_PySequence_Fast($4, ((__str1)&4294967295)); //@line 765 "_elementtree.c"
        HEAP[$seq]=$5; //@line 765 "_elementtree.c"
        var $6=HEAP[$seq]; //@line 766 "_elementtree.c"
        var $7=($6)==0; //@line 766 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 766 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$seq_in]; //@line 767 "_elementtree.c"
        var $9=(($8+4)&4294967295); //@line 767 "_elementtree.c"
        var $10=HEAP[$9]; //@line 767 "_elementtree.c"
        var $11=(($10+12)&4294967295); //@line 767 "_elementtree.c"
        var $12=HEAP[$11]; //@line 767 "_elementtree.c"
        var $13=HEAP[_PyExc_TypeError]; //@line 767 "_elementtree.c"
        var $14=_PyErr_Format($13, ((__str10)&4294967295), $12); //@line 767 "_elementtree.c"
        HEAP[$0]=0; //@line 771 "_elementtree.c"
        __label__ = 17; break; //@line 771 "_elementtree.c"
      case 4: // $bb3
        var $15=HEAP[$seq]; //@line 774 "_elementtree.c"
        var $16=_PySequence_Size($15); //@line 774 "_elementtree.c"
        HEAP[$seqlen]=$16; //@line 774 "_elementtree.c"
        HEAP[$i]=0; //@line 775 "_elementtree.c"
        __label__ = 13; break; //@line 775 "_elementtree.c"
      case 5: // $bb4
        var $17=HEAP[$seq]; //@line 776 "_elementtree.c"
        var $18=(($17+4)&4294967295); //@line 776 "_elementtree.c"
        var $19=HEAP[$18]; //@line 776 "_elementtree.c"
        var $20=(($19+84)&4294967295); //@line 776 "_elementtree.c"
        var $21=HEAP[$20]; //@line 776 "_elementtree.c"
        var $22=($21) & 33554432; //@line 776 "_elementtree.c"
        var $23=((($22))|0)!=0; //@line 776 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 776 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$seq]; //@line 776 "_elementtree.c"
        var $25=$24; //@line 776 "_elementtree.c"
        var $26=(($25+12)&4294967295); //@line 776 "_elementtree.c"
        var $27=HEAP[$26]; //@line 776 "_elementtree.c"
        var $28=HEAP[$i]; //@line 776 "_elementtree.c"
        var $29=(($27+4*$28)&4294967295); //@line 776 "_elementtree.c"
        var $30=HEAP[$29]; //@line 776 "_elementtree.c"
        HEAP[$iftmp_69]=$30; //@line 776 "_elementtree.c"
        __label__ = 8; break; //@line 776 "_elementtree.c"
      case 7: // $bb6
        var $31=HEAP[$seq]; //@line 776 "_elementtree.c"
        var $32=$31; //@line 776 "_elementtree.c"
        var $33=HEAP[$i]; //@line 776 "_elementtree.c"
        var $34=(($32+12)&4294967295); //@line 776 "_elementtree.c"
        var $35=(($34+$33*4)&4294967295); //@line 776 "_elementtree.c"
        var $36=HEAP[$35]; //@line 776 "_elementtree.c"
        HEAP[$iftmp_69]=$36; //@line 776 "_elementtree.c"
        __label__ = 8; break; //@line 776 "_elementtree.c"
      case 8: // $bb7
        var $37=HEAP[$iftmp_69]; //@line 776 "_elementtree.c"
        HEAP[$element]=$37; //@line 776 "_elementtree.c"
        var $38=HEAP[$self_addr]; //@line 777 "_elementtree.c"
        var $39=HEAP[$element]; //@line 777 "_elementtree.c"
        var $40=_element_add_subelement($38, $39); //@line 777 "_elementtree.c"
        var $41=((($40))|0) < 0; //@line 777 "_elementtree.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 777 "_elementtree.c"
      case 9: // $bb8
        var $42=HEAP[$seq]; //@line 778 "_elementtree.c"
        var $43=(($42)&4294967295); //@line 778 "_elementtree.c"
        var $44=HEAP[$43]; //@line 778 "_elementtree.c"
        var $45=((($44) - 1)&4294967295); //@line 778 "_elementtree.c"
        var $46=HEAP[$seq]; //@line 778 "_elementtree.c"
        var $47=(($46)&4294967295); //@line 778 "_elementtree.c"
        HEAP[$47]=$45; //@line 778 "_elementtree.c"
        var $48=HEAP[$seq]; //@line 778 "_elementtree.c"
        var $49=(($48)&4294967295); //@line 778 "_elementtree.c"
        var $50=HEAP[$49]; //@line 778 "_elementtree.c"
        var $51=((($50))|0)==0; //@line 778 "_elementtree.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 778 "_elementtree.c"
      case 10: // $bb9
        var $52=HEAP[$seq]; //@line 778 "_elementtree.c"
        var $53=(($52+4)&4294967295); //@line 778 "_elementtree.c"
        var $54=HEAP[$53]; //@line 778 "_elementtree.c"
        var $55=(($54+24)&4294967295); //@line 778 "_elementtree.c"
        var $56=HEAP[$55]; //@line 778 "_elementtree.c"
        var $57=HEAP[$seq]; //@line 778 "_elementtree.c"
        FUNCTION_TABLE[$56]($57); //@line 778 "_elementtree.c"
        __label__ = 11; break; //@line 778 "_elementtree.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 779 "_elementtree.c"
        __label__ = 17; break; //@line 779 "_elementtree.c"
      case 12: // $bb11
        var $58=HEAP[$i]; //@line 775 "_elementtree.c"
        var $59=((($58) + 1)&4294967295); //@line 775 "_elementtree.c"
        HEAP[$i]=$59; //@line 775 "_elementtree.c"
        __label__ = 13; break; //@line 775 "_elementtree.c"
      case 13: // $bb12
        var $60=HEAP[$i]; //@line 775 "_elementtree.c"
        var $61=HEAP[$seqlen]; //@line 775 "_elementtree.c"
        var $62=((($60))|0) < ((($61))|0); //@line 775 "_elementtree.c"
        if ($62) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 775 "_elementtree.c"
      case 14: // $bb13
        var $63=HEAP[$seq]; //@line 783 "_elementtree.c"
        var $64=(($63)&4294967295); //@line 783 "_elementtree.c"
        var $65=HEAP[$64]; //@line 783 "_elementtree.c"
        var $66=((($65) - 1)&4294967295); //@line 783 "_elementtree.c"
        var $67=HEAP[$seq]; //@line 783 "_elementtree.c"
        var $68=(($67)&4294967295); //@line 783 "_elementtree.c"
        HEAP[$68]=$66; //@line 783 "_elementtree.c"
        var $69=HEAP[$seq]; //@line 783 "_elementtree.c"
        var $70=(($69)&4294967295); //@line 783 "_elementtree.c"
        var $71=HEAP[$70]; //@line 783 "_elementtree.c"
        var $72=((($71))|0)==0; //@line 783 "_elementtree.c"
        if ($72) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 783 "_elementtree.c"
      case 15: // $bb14
        var $73=HEAP[$seq]; //@line 783 "_elementtree.c"
        var $74=(($73+4)&4294967295); //@line 783 "_elementtree.c"
        var $75=HEAP[$74]; //@line 783 "_elementtree.c"
        var $76=(($75+24)&4294967295); //@line 783 "_elementtree.c"
        var $77=HEAP[$76]; //@line 783 "_elementtree.c"
        var $78=HEAP[$seq]; //@line 783 "_elementtree.c"
        FUNCTION_TABLE[$77]($78); //@line 783 "_elementtree.c"
        __label__ = 16; break; //@line 783 "_elementtree.c"
      case 16: // $bb15
        var $79=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 785 "_elementtree.c"
        var $80=((($79) + 1)&4294967295); //@line 785 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$80; //@line 785 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 785 "_elementtree.c"
        __label__ = 17; break; //@line 785 "_elementtree.c"
      case 17: // $bb16
        var $81=HEAP[$0]; //@line 763 "_elementtree.c"
        HEAP[$retval]=$81; //@line 763 "_elementtree.c"
        __label__ = 18; break; //@line 763 "_elementtree.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 763 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 763 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_find($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $tag=__stackBase__+20;
        var $namespaces=__stackBase__+24;
        var $item=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 794 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 795 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str11)&4294967295), $tag, $namespaces); //@line 795 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 795 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 795 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 796 "_elementtree.c"
        __label__ = 14; break; //@line 796 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 798 "_elementtree.c"
        var $5=_checkpath($4); //@line 798 "_elementtree.c"
        var $6=((($5))|0)!=0; //@line 798 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 798 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 798 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 798 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 798 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 799 "_elementtree.c"
        var $10=HEAP[$tag]; //@line 799 "_elementtree.c"
        var $11=HEAP[_elementpath_obj]; //@line 799 "_elementtree.c"
        var $12=HEAP[$self_addr]; //@line 799 "_elementtree.c"
        var $13=_PyObject_CallMethod($11, ((__str12)&4294967295), ((__str13)&4294967295), $12, $10, $9); //@line 799 "_elementtree.c"
        HEAP[$0]=$13; //@line 799 "_elementtree.c"
        __label__ = 14; break; //@line 799 "_elementtree.c"
      case 5: // $bb4
        var $14=HEAP[$self_addr]; //@line 803 "_elementtree.c"
        var $15=(($14+20)&4294967295); //@line 803 "_elementtree.c"
        var $16=HEAP[$15]; //@line 803 "_elementtree.c"
        var $17=($16)==0; //@line 803 "_elementtree.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 803 "_elementtree.c"
      case 6: // $bb5
        var $18=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 804 "_elementtree.c"
        var $19=((($18) + 1)&4294967295); //@line 804 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$19; //@line 804 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 804 "_elementtree.c"
        __label__ = 14; break; //@line 804 "_elementtree.c"
      case 7: // $bb6
        HEAP[$i]=0; //@line 806 "_elementtree.c"
        __label__ = 12; break; //@line 806 "_elementtree.c"
      case 8: // $bb7
        var $20=HEAP[$self_addr]; //@line 807 "_elementtree.c"
        var $21=(($20+20)&4294967295); //@line 807 "_elementtree.c"
        var $22=HEAP[$21]; //@line 807 "_elementtree.c"
        var $23=(($22+12)&4294967295); //@line 807 "_elementtree.c"
        var $24=HEAP[$23]; //@line 807 "_elementtree.c"
        var $25=HEAP[$i]; //@line 807 "_elementtree.c"
        var $26=(($24+4*$25)&4294967295); //@line 807 "_elementtree.c"
        var $27=HEAP[$26]; //@line 807 "_elementtree.c"
        HEAP[$item]=$27; //@line 807 "_elementtree.c"
        var $28=HEAP[$item]; //@line 808 "_elementtree.c"
        var $29=(($28+4)&4294967295); //@line 808 "_elementtree.c"
        var $30=HEAP[$29]; //@line 808 "_elementtree.c"
        var $31=($30)==(_Element_Type); //@line 808 "_elementtree.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 808 "_elementtree.c"
      case 9: // $bb8
        var $32=HEAP[$tag]; //@line 808 "_elementtree.c"
        var $33=HEAP[$item]; //@line 808 "_elementtree.c"
        var $34=$33; //@line 808 "_elementtree.c"
        var $35=(($34+8)&4294967295); //@line 808 "_elementtree.c"
        var $36=HEAP[$35]; //@line 808 "_elementtree.c"
        var $37=_PyObject_Compare($36, $32); //@line 808 "_elementtree.c"
        var $38=((($37))|0)==0; //@line 808 "_elementtree.c"
        if ($38) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 808 "_elementtree.c"
      case 10: // $bb9
        var $39=HEAP[$item]; //@line 810 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 810 "_elementtree.c"
        var $41=HEAP[$40]; //@line 810 "_elementtree.c"
        var $42=((($41) + 1)&4294967295); //@line 810 "_elementtree.c"
        var $43=HEAP[$item]; //@line 810 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 810 "_elementtree.c"
        HEAP[$44]=$42; //@line 810 "_elementtree.c"
        var $45=HEAP[$item]; //@line 811 "_elementtree.c"
        HEAP[$0]=$45; //@line 811 "_elementtree.c"
        __label__ = 14; break; //@line 811 "_elementtree.c"
      case 11: // $bb10
        var $46=HEAP[$i]; //@line 806 "_elementtree.c"
        var $47=((($46) + 1)&4294967295); //@line 806 "_elementtree.c"
        HEAP[$i]=$47; //@line 806 "_elementtree.c"
        __label__ = 12; break; //@line 806 "_elementtree.c"
      case 12: // $bb11
        var $48=HEAP[$self_addr]; //@line 806 "_elementtree.c"
        var $49=(($48+20)&4294967295); //@line 806 "_elementtree.c"
        var $50=HEAP[$49]; //@line 806 "_elementtree.c"
        var $51=(($50+4)&4294967295); //@line 806 "_elementtree.c"
        var $52=HEAP[$51]; //@line 806 "_elementtree.c"
        var $53=HEAP[$i]; //@line 806 "_elementtree.c"
        var $54=((($52))|0) > ((($53))|0); //@line 806 "_elementtree.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 806 "_elementtree.c"
      case 13: // $bb12
        var $55=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 815 "_elementtree.c"
        var $56=((($55) + 1)&4294967295); //@line 815 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$56; //@line 815 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 815 "_elementtree.c"
        __label__ = 14; break; //@line 815 "_elementtree.c"
      case 14: // $bb13
        var $57=HEAP[$0]; //@line 796 "_elementtree.c"
        HEAP[$retval]=$57; //@line 796 "_elementtree.c"
        __label__ = 15; break; //@line 796 "_elementtree.c"
      case 15: // $return
        var $retval14=HEAP[$retval]; //@line 796 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 796 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_findtext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $tag=__stackBase__+20;
        var $default_value=__stackBase__+24;
        var $namespaces=__stackBase__+28;
        var $item=__stackBase__+32;
        var $text=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$default_value]=__Py_NoneStruct; //@line 824 "_elementtree.c"
        HEAP[$namespaces]=__Py_NoneStruct; //@line 825 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 826 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str14)&4294967295), $tag, $default_value, $namespaces); //@line 826 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 826 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 826 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 827 "_elementtree.c"
        __label__ = 18; break; //@line 827 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 829 "_elementtree.c"
        var $5=_checkpath($4); //@line 829 "_elementtree.c"
        var $6=((($5))|0)!=0; //@line 829 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 829 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 829 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 829 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 829 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 830 "_elementtree.c"
        var $10=HEAP[$default_value]; //@line 830 "_elementtree.c"
        var $11=HEAP[$tag]; //@line 830 "_elementtree.c"
        var $12=HEAP[_elementpath_obj]; //@line 830 "_elementtree.c"
        var $13=HEAP[$self_addr]; //@line 830 "_elementtree.c"
        var $14=_PyObject_CallMethod($12, ((__str15)&4294967295), ((__str16)&4294967295), $13, $11, $10, $9); //@line 830 "_elementtree.c"
        HEAP[$0]=$14; //@line 830 "_elementtree.c"
        __label__ = 18; break; //@line 830 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$self_addr]; //@line 834 "_elementtree.c"
        var $16=(($15+20)&4294967295); //@line 834 "_elementtree.c"
        var $17=HEAP[$16]; //@line 834 "_elementtree.c"
        var $18=($17)==0; //@line 834 "_elementtree.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 834 "_elementtree.c"
      case 6: // $bb5
        var $19=HEAP[$default_value]; //@line 835 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 835 "_elementtree.c"
        var $21=HEAP[$20]; //@line 835 "_elementtree.c"
        var $22=((($21) + 1)&4294967295); //@line 835 "_elementtree.c"
        var $23=(($19)&4294967295); //@line 835 "_elementtree.c"
        HEAP[$23]=$22; //@line 835 "_elementtree.c"
        var $24=HEAP[$default_value]; //@line 836 "_elementtree.c"
        HEAP[$0]=$24; //@line 836 "_elementtree.c"
        __label__ = 18; break; //@line 836 "_elementtree.c"
      case 7: // $bb6
        HEAP[$i]=0; //@line 839 "_elementtree.c"
        __label__ = 16; break; //@line 839 "_elementtree.c"
      case 8: // $bb7
        var $25=HEAP[$self_addr]; //@line 840 "_elementtree.c"
        var $26=(($25+20)&4294967295); //@line 840 "_elementtree.c"
        var $27=HEAP[$26]; //@line 840 "_elementtree.c"
        var $28=(($27+12)&4294967295); //@line 840 "_elementtree.c"
        var $29=HEAP[$28]; //@line 840 "_elementtree.c"
        var $30=HEAP[$i]; //@line 840 "_elementtree.c"
        var $31=(($29+4*$30)&4294967295); //@line 840 "_elementtree.c"
        var $32=HEAP[$31]; //@line 840 "_elementtree.c"
        var $33=$32; //@line 840 "_elementtree.c"
        HEAP[$item]=$33; //@line 840 "_elementtree.c"
        var $34=HEAP[$item]; //@line 841 "_elementtree.c"
        var $35=$34; //@line 841 "_elementtree.c"
        var $36=(($35+4)&4294967295); //@line 841 "_elementtree.c"
        var $37=HEAP[$36]; //@line 841 "_elementtree.c"
        var $38=($37)==(_Element_Type); //@line 841 "_elementtree.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 841 "_elementtree.c"
      case 9: // $bb8
        var $39=HEAP[$tag]; //@line 841 "_elementtree.c"
        var $40=HEAP[$item]; //@line 841 "_elementtree.c"
        var $41=(($40+8)&4294967295); //@line 841 "_elementtree.c"
        var $42=HEAP[$41]; //@line 841 "_elementtree.c"
        var $43=_PyObject_Compare($42, $39); //@line 841 "_elementtree.c"
        var $44=((($43))|0)==0; //@line 841 "_elementtree.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 841 "_elementtree.c"
      case 10: // $bb9
        var $45=HEAP[$item]; //@line 842 "_elementtree.c"
        var $46=_element_get_text($45); //@line 842 "_elementtree.c"
        HEAP[$text]=$46; //@line 842 "_elementtree.c"
        var $47=HEAP[$text]; //@line 843 "_elementtree.c"
        var $48=($47)==(__Py_NoneStruct); //@line 843 "_elementtree.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 843 "_elementtree.c"
      case 11: // $bb10
        var $49=_PyString_FromString(((__str1)&4294967295)); //@line 844 "_elementtree.c"
        HEAP[$0]=$49; //@line 844 "_elementtree.c"
        __label__ = 18; break; //@line 844 "_elementtree.c"
      case 12: // $bb11
        var $50=HEAP[$text]; //@line 845 "_elementtree.c"
        var $51=($50)!=0; //@line 845 "_elementtree.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 845 "_elementtree.c"
      case 13: // $bb12
        var $52=HEAP[$text]; //@line 845 "_elementtree.c"
        var $53=(($52)&4294967295); //@line 845 "_elementtree.c"
        var $54=HEAP[$53]; //@line 845 "_elementtree.c"
        var $55=((($54) + 1)&4294967295); //@line 845 "_elementtree.c"
        var $56=HEAP[$text]; //@line 845 "_elementtree.c"
        var $57=(($56)&4294967295); //@line 845 "_elementtree.c"
        HEAP[$57]=$55; //@line 845 "_elementtree.c"
        __label__ = 14; break; //@line 845 "_elementtree.c"
      case 14: // $bb13
        var $58=HEAP[$text]; //@line 846 "_elementtree.c"
        HEAP[$0]=$58; //@line 846 "_elementtree.c"
        __label__ = 18; break; //@line 846 "_elementtree.c"
      case 15: // $bb14
        var $59=HEAP[$i]; //@line 839 "_elementtree.c"
        var $60=((($59) + 1)&4294967295); //@line 839 "_elementtree.c"
        HEAP[$i]=$60; //@line 839 "_elementtree.c"
        __label__ = 16; break; //@line 839 "_elementtree.c"
      case 16: // $bb15
        var $61=HEAP[$self_addr]; //@line 839 "_elementtree.c"
        var $62=(($61+20)&4294967295); //@line 839 "_elementtree.c"
        var $63=HEAP[$62]; //@line 839 "_elementtree.c"
        var $64=(($63+4)&4294967295); //@line 839 "_elementtree.c"
        var $65=HEAP[$64]; //@line 839 "_elementtree.c"
        var $66=HEAP[$i]; //@line 839 "_elementtree.c"
        var $67=((($65))|0) > ((($66))|0); //@line 839 "_elementtree.c"
        if ($67) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 839 "_elementtree.c"
      case 17: // $bb16
        var $68=HEAP[$default_value]; //@line 850 "_elementtree.c"
        var $69=(($68)&4294967295); //@line 850 "_elementtree.c"
        var $70=HEAP[$69]; //@line 850 "_elementtree.c"
        var $71=((($70) + 1)&4294967295); //@line 850 "_elementtree.c"
        var $72=(($68)&4294967295); //@line 850 "_elementtree.c"
        HEAP[$72]=$71; //@line 850 "_elementtree.c"
        var $73=HEAP[$default_value]; //@line 851 "_elementtree.c"
        HEAP[$0]=$73; //@line 851 "_elementtree.c"
        __label__ = 18; break; //@line 851 "_elementtree.c"
      case 18: // $bb17
        var $74=HEAP[$0]; //@line 827 "_elementtree.c"
        HEAP[$retval]=$74; //@line 827 "_elementtree.c"
        __label__ = 19; break; //@line 827 "_elementtree.c"
      case 19: // $return
        var $retval18=HEAP[$retval]; //@line 827 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 827 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_findall($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $out=__stackBase__+20;
        var $tag=__stackBase__+24;
        var $namespaces=__stackBase__+28;
        var $item=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 861 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 862 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str17)&4294967295), $tag, $namespaces); //@line 862 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 862 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 862 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 863 "_elementtree.c"
        __label__ = 19; break; //@line 863 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 865 "_elementtree.c"
        var $5=_checkpath($4); //@line 865 "_elementtree.c"
        var $6=((($5))|0)!=0; //@line 865 "_elementtree.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 865 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$namespaces]; //@line 865 "_elementtree.c"
        var $8=($7)!=(__Py_NoneStruct); //@line 865 "_elementtree.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 865 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$namespaces]; //@line 866 "_elementtree.c"
        var $10=HEAP[$tag]; //@line 866 "_elementtree.c"
        var $11=HEAP[_elementpath_obj]; //@line 866 "_elementtree.c"
        var $12=HEAP[$self_addr]; //@line 866 "_elementtree.c"
        var $13=_PyObject_CallMethod($11, ((__str18)&4294967295), ((__str13)&4294967295), $12, $10, $9); //@line 866 "_elementtree.c"
        HEAP[$0]=$13; //@line 866 "_elementtree.c"
        __label__ = 19; break; //@line 866 "_elementtree.c"
      case 5: // $bb4
        var $14=_PyList_New(0); //@line 870 "_elementtree.c"
        HEAP[$out]=$14; //@line 870 "_elementtree.c"
        var $15=HEAP[$out]; //@line 871 "_elementtree.c"
        var $16=($15)==0; //@line 871 "_elementtree.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 871 "_elementtree.c"
      case 6: // $bb5
        HEAP[$0]=0; //@line 872 "_elementtree.c"
        __label__ = 19; break; //@line 872 "_elementtree.c"
      case 7: // $bb6
        var $17=HEAP[$self_addr]; //@line 874 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 874 "_elementtree.c"
        var $19=HEAP[$18]; //@line 874 "_elementtree.c"
        var $20=($19)==0; //@line 874 "_elementtree.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 874 "_elementtree.c"
      case 8: // $bb7
        var $21=HEAP[$out]; //@line 875 "_elementtree.c"
        HEAP[$0]=$21; //@line 875 "_elementtree.c"
        __label__ = 19; break; //@line 875 "_elementtree.c"
      case 9: // $bb8
        HEAP[$i]=0; //@line 877 "_elementtree.c"
        __label__ = 17; break; //@line 877 "_elementtree.c"
      case 10: // $bb9
        var $22=HEAP[$self_addr]; //@line 878 "_elementtree.c"
        var $23=(($22+20)&4294967295); //@line 878 "_elementtree.c"
        var $24=HEAP[$23]; //@line 878 "_elementtree.c"
        var $25=(($24+12)&4294967295); //@line 878 "_elementtree.c"
        var $26=HEAP[$25]; //@line 878 "_elementtree.c"
        var $27=HEAP[$i]; //@line 878 "_elementtree.c"
        var $28=(($26+4*$27)&4294967295); //@line 878 "_elementtree.c"
        var $29=HEAP[$28]; //@line 878 "_elementtree.c"
        HEAP[$item]=$29; //@line 878 "_elementtree.c"
        var $30=HEAP[$item]; //@line 879 "_elementtree.c"
        var $31=(($30+4)&4294967295); //@line 879 "_elementtree.c"
        var $32=HEAP[$31]; //@line 879 "_elementtree.c"
        var $33=($32)==(_Element_Type); //@line 879 "_elementtree.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 879 "_elementtree.c"
      case 11: // $bb10
        var $34=HEAP[$tag]; //@line 879 "_elementtree.c"
        var $35=HEAP[$item]; //@line 879 "_elementtree.c"
        var $36=$35; //@line 879 "_elementtree.c"
        var $37=(($36+8)&4294967295); //@line 879 "_elementtree.c"
        var $38=HEAP[$37]; //@line 879 "_elementtree.c"
        var $39=_PyObject_Compare($38, $34); //@line 879 "_elementtree.c"
        var $40=((($39))|0)==0; //@line 879 "_elementtree.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 879 "_elementtree.c"
      case 12: // $bb11
        var $41=HEAP[$out]; //@line 881 "_elementtree.c"
        var $42=HEAP[$item]; //@line 881 "_elementtree.c"
        var $43=_PyList_Append($41, $42); //@line 881 "_elementtree.c"
        var $44=((($43))|0) < 0; //@line 881 "_elementtree.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 881 "_elementtree.c"
      case 13: // $bb12
        var $45=HEAP[$out]; //@line 882 "_elementtree.c"
        var $46=(($45)&4294967295); //@line 882 "_elementtree.c"
        var $47=HEAP[$46]; //@line 882 "_elementtree.c"
        var $48=((($47) - 1)&4294967295); //@line 882 "_elementtree.c"
        var $49=HEAP[$out]; //@line 882 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 882 "_elementtree.c"
        HEAP[$50]=$48; //@line 882 "_elementtree.c"
        var $51=HEAP[$out]; //@line 882 "_elementtree.c"
        var $52=(($51)&4294967295); //@line 882 "_elementtree.c"
        var $53=HEAP[$52]; //@line 882 "_elementtree.c"
        var $54=((($53))|0)==0; //@line 882 "_elementtree.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 882 "_elementtree.c"
      case 14: // $bb13
        var $55=HEAP[$out]; //@line 882 "_elementtree.c"
        var $56=(($55+4)&4294967295); //@line 882 "_elementtree.c"
        var $57=HEAP[$56]; //@line 882 "_elementtree.c"
        var $58=(($57+24)&4294967295); //@line 882 "_elementtree.c"
        var $59=HEAP[$58]; //@line 882 "_elementtree.c"
        var $60=HEAP[$out]; //@line 882 "_elementtree.c"
        FUNCTION_TABLE[$59]($60); //@line 882 "_elementtree.c"
        __label__ = 15; break; //@line 882 "_elementtree.c"
      case 15: // $bb14
        HEAP[$0]=0; //@line 883 "_elementtree.c"
        __label__ = 19; break; //@line 883 "_elementtree.c"
      case 16: // $bb15
        var $61=HEAP[$i]; //@line 877 "_elementtree.c"
        var $62=((($61) + 1)&4294967295); //@line 877 "_elementtree.c"
        HEAP[$i]=$62; //@line 877 "_elementtree.c"
        __label__ = 17; break; //@line 877 "_elementtree.c"
      case 17: // $bb16
        var $63=HEAP[$self_addr]; //@line 877 "_elementtree.c"
        var $64=(($63+20)&4294967295); //@line 877 "_elementtree.c"
        var $65=HEAP[$64]; //@line 877 "_elementtree.c"
        var $66=(($65+4)&4294967295); //@line 877 "_elementtree.c"
        var $67=HEAP[$66]; //@line 877 "_elementtree.c"
        var $68=HEAP[$i]; //@line 877 "_elementtree.c"
        var $69=((($67))|0) > ((($68))|0); //@line 877 "_elementtree.c"
        if ($69) { __label__ = 10; break; } else { __label__ = 18; break; } //@line 877 "_elementtree.c"
      case 18: // $bb17
        var $70=HEAP[$out]; //@line 888 "_elementtree.c"
        HEAP[$0]=$70; //@line 888 "_elementtree.c"
        __label__ = 19; break; //@line 888 "_elementtree.c"
      case 19: // $bb18
        var $71=HEAP[$0]; //@line 863 "_elementtree.c"
        HEAP[$retval]=$71; //@line 863 "_elementtree.c"
        __label__ = 20; break; //@line 863 "_elementtree.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 863 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 863 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_iterfind($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tag=__stackBase__+16;
        var $namespaces=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$namespaces]=__Py_NoneStruct; //@line 895 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 896 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str19)&4294967295), $tag, $namespaces); //@line 896 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 896 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 896 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 897 "_elementtree.c"
        __label__ = 3; break; //@line 897 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$namespaces]; //@line 899 "_elementtree.c"
        var $5=HEAP[$tag]; //@line 899 "_elementtree.c"
        var $6=HEAP[_elementpath_obj]; //@line 899 "_elementtree.c"
        var $7=HEAP[$self_addr]; //@line 899 "_elementtree.c"
        var $8=_PyObject_CallMethod($6, ((__str20)&4294967295), ((__str13)&4294967295), $7, $5, $4); //@line 899 "_elementtree.c"
        HEAP[$0]=$8; //@line 899 "_elementtree.c"
        __label__ = 3; break; //@line 899 "_elementtree.c"
      case 3: // $bb2
        var $9=HEAP[$0]; //@line 897 "_elementtree.c"
        HEAP[$retval]=$9; //@line 897 "_elementtree.c"
        __label__ = 4; break; //@line 897 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 897 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 897 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_get($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $value=__stackBase__+16;
        var $key=__stackBase__+20;
        var $default_value=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$default_value]=__Py_NoneStruct; //@line 910 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 911 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str21)&4294967295), $key, $default_value); //@line 911 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 911 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 912 "_elementtree.c"
        __label__ = 8; break; //@line 912 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 914 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 914 "_elementtree.c"
        var $6=HEAP[$5]; //@line 914 "_elementtree.c"
        var $7=($6)==0; //@line 914 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 914 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 914 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 914 "_elementtree.c"
        var $10=HEAP[$9]; //@line 914 "_elementtree.c"
        var $11=(($10)&4294967295); //@line 914 "_elementtree.c"
        var $12=HEAP[$11]; //@line 914 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 914 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 914 "_elementtree.c"
      case 4: // $bb3
        var $14=HEAP[$default_value]; //@line 915 "_elementtree.c"
        HEAP[$value]=$14; //@line 915 "_elementtree.c"
        __label__ = 7; break; //@line 915 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$key]; //@line 917 "_elementtree.c"
        var $16=HEAP[$self_addr]; //@line 917 "_elementtree.c"
        var $17=(($16+20)&4294967295); //@line 917 "_elementtree.c"
        var $18=HEAP[$17]; //@line 917 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 917 "_elementtree.c"
        var $20=HEAP[$19]; //@line 917 "_elementtree.c"
        var $21=_PyDict_GetItem($20, $15); //@line 917 "_elementtree.c"
        HEAP[$value]=$21; //@line 917 "_elementtree.c"
        var $22=HEAP[$value]; //@line 918 "_elementtree.c"
        var $23=($22)==0; //@line 918 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 918 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$default_value]; //@line 919 "_elementtree.c"
        HEAP[$value]=$24; //@line 919 "_elementtree.c"
        __label__ = 7; break; //@line 919 "_elementtree.c"
      case 7: // $bb6
        var $25=HEAP[$value]; //@line 922 "_elementtree.c"
        var $26=(($25)&4294967295); //@line 922 "_elementtree.c"
        var $27=HEAP[$26]; //@line 922 "_elementtree.c"
        var $28=((($27) + 1)&4294967295); //@line 922 "_elementtree.c"
        var $29=HEAP[$value]; //@line 922 "_elementtree.c"
        var $30=(($29)&4294967295); //@line 922 "_elementtree.c"
        HEAP[$30]=$28; //@line 922 "_elementtree.c"
        var $31=HEAP[$value]; //@line 923 "_elementtree.c"
        HEAP[$0]=$31; //@line 923 "_elementtree.c"
        __label__ = 8; break; //@line 923 "_elementtree.c"
      case 8: // $bb7
        var $32=HEAP[$0]; //@line 912 "_elementtree.c"
        HEAP[$retval]=$32; //@line 912 "_elementtree.c"
        __label__ = 9; break; //@line 912 "_elementtree.c"
      case 9: // $return
        var $retval8=HEAP[$retval]; //@line 912 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 912 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getchildren($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $list=__stackBase__+20;
        var $item=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 934 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str22)&4294967295)); //@line 934 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 934 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 934 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 935 "_elementtree.c"
        __label__ = 10; break; //@line 935 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 937 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 937 "_elementtree.c"
        var $6=HEAP[$5]; //@line 937 "_elementtree.c"
        var $7=($6)==0; //@line 937 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 937 "_elementtree.c"
      case 3: // $bb2
        var $8=_PyList_New(0); //@line 938 "_elementtree.c"
        HEAP[$0]=$8; //@line 938 "_elementtree.c"
        __label__ = 10; break; //@line 938 "_elementtree.c"
      case 4: // $bb3
        var $9=HEAP[$self_addr]; //@line 940 "_elementtree.c"
        var $10=(($9+20)&4294967295); //@line 940 "_elementtree.c"
        var $11=HEAP[$10]; //@line 940 "_elementtree.c"
        var $12=(($11+4)&4294967295); //@line 940 "_elementtree.c"
        var $13=HEAP[$12]; //@line 940 "_elementtree.c"
        var $14=_PyList_New($13); //@line 940 "_elementtree.c"
        HEAP[$list]=$14; //@line 940 "_elementtree.c"
        var $15=HEAP[$list]; //@line 941 "_elementtree.c"
        var $16=($15)==0; //@line 941 "_elementtree.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 941 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 942 "_elementtree.c"
        __label__ = 10; break; //@line 942 "_elementtree.c"
      case 6: // $bb5
        HEAP[$i]=0; //@line 944 "_elementtree.c"
        __label__ = 8; break; //@line 944 "_elementtree.c"
      case 7: // $bb6
        var $17=HEAP[$self_addr]; //@line 945 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 945 "_elementtree.c"
        var $19=HEAP[$18]; //@line 945 "_elementtree.c"
        var $20=(($19+12)&4294967295); //@line 945 "_elementtree.c"
        var $21=HEAP[$20]; //@line 945 "_elementtree.c"
        var $22=HEAP[$i]; //@line 945 "_elementtree.c"
        var $23=(($21+4*$22)&4294967295); //@line 945 "_elementtree.c"
        var $24=HEAP[$23]; //@line 945 "_elementtree.c"
        HEAP[$item]=$24; //@line 945 "_elementtree.c"
        var $25=HEAP[$item]; //@line 946 "_elementtree.c"
        var $26=(($25)&4294967295); //@line 946 "_elementtree.c"
        var $27=HEAP[$26]; //@line 946 "_elementtree.c"
        var $28=((($27) + 1)&4294967295); //@line 946 "_elementtree.c"
        var $29=HEAP[$item]; //@line 946 "_elementtree.c"
        var $30=(($29)&4294967295); //@line 946 "_elementtree.c"
        HEAP[$30]=$28; //@line 946 "_elementtree.c"
        var $31=HEAP[$list]; //@line 947 "_elementtree.c"
        var $32=$31; //@line 947 "_elementtree.c"
        var $33=(($32+12)&4294967295); //@line 947 "_elementtree.c"
        var $34=HEAP[$33]; //@line 947 "_elementtree.c"
        var $35=HEAP[$i]; //@line 947 "_elementtree.c"
        var $36=(($34+4*$35)&4294967295); //@line 947 "_elementtree.c"
        var $37=HEAP[$item]; //@line 947 "_elementtree.c"
        HEAP[$36]=$37; //@line 947 "_elementtree.c"
        var $38=HEAP[$i]; //@line 944 "_elementtree.c"
        var $39=((($38) + 1)&4294967295); //@line 944 "_elementtree.c"
        HEAP[$i]=$39; //@line 944 "_elementtree.c"
        __label__ = 8; break; //@line 944 "_elementtree.c"
      case 8: // $bb7
        var $40=HEAP[$self_addr]; //@line 944 "_elementtree.c"
        var $41=(($40+20)&4294967295); //@line 944 "_elementtree.c"
        var $42=HEAP[$41]; //@line 944 "_elementtree.c"
        var $43=(($42+4)&4294967295); //@line 944 "_elementtree.c"
        var $44=HEAP[$43]; //@line 944 "_elementtree.c"
        var $45=HEAP[$i]; //@line 944 "_elementtree.c"
        var $46=((($44))|0) > ((($45))|0); //@line 944 "_elementtree.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 944 "_elementtree.c"
      case 9: // $bb8
        var $47=HEAP[$list]; //@line 950 "_elementtree.c"
        HEAP[$0]=$47; //@line 950 "_elementtree.c"
        __label__ = 10; break; //@line 950 "_elementtree.c"
      case 10: // $bb9
        var $48=HEAP[$0]; //@line 935 "_elementtree.c"
        HEAP[$retval]=$48; //@line 935 "_elementtree.c"
        __label__ = 11; break; //@line 935 "_elementtree.c"
      case 11: // $return
        var $retval10=HEAP[$retval]; //@line 935 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 935 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_iter($self, $args) {
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
        var $tag=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$tag]=__Py_NoneStruct; //@line 958 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 959 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str23)&4294967295), $tag); //@line 959 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 959 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 959 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 960 "_elementtree.c"
        __label__ = 9; break; //@line 960 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_iter_obj]; //@line 962 "_elementtree.c"
        var $5=($4)==0; //@line 962 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 962 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 963 "_elementtree.c"
        _PyErr_SetString($6, ((__str24)&4294967295)); //@line 963 "_elementtree.c"
        HEAP[$0]=0; //@line 967 "_elementtree.c"
        __label__ = 9; break; //@line 967 "_elementtree.c"
      case 4: // $bb3
        var $7=_PyTuple_New(2); //@line 970 "_elementtree.c"
        HEAP[$args_addr]=$7; //@line 970 "_elementtree.c"
        var $8=HEAP[$args_addr]; //@line 971 "_elementtree.c"
        var $9=($8)==0; //@line 971 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 971 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 972 "_elementtree.c"
        __label__ = 9; break; //@line 972 "_elementtree.c"
      case 6: // $bb5
        var $10=HEAP[$self_addr]; //@line 974 "_elementtree.c"
        var $11=$10; //@line 974 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 974 "_elementtree.c"
        var $13=HEAP[$12]; //@line 974 "_elementtree.c"
        var $14=((($13) + 1)&4294967295); //@line 974 "_elementtree.c"
        var $15=(($11)&4294967295); //@line 974 "_elementtree.c"
        HEAP[$15]=$14; //@line 974 "_elementtree.c"
        var $16=HEAP[$args_addr]; //@line 974 "_elementtree.c"
        var $17=$16; //@line 974 "_elementtree.c"
        var $18=HEAP[$self_addr]; //@line 974 "_elementtree.c"
        var $19=$18; //@line 974 "_elementtree.c"
        var $20=(($17+12)&4294967295); //@line 974 "_elementtree.c"
        var $21=(($20)&4294967295); //@line 974 "_elementtree.c"
        HEAP[$21]=$19; //@line 974 "_elementtree.c"
        var $22=HEAP[$tag]; //@line 975 "_elementtree.c"
        var $23=(($22)&4294967295); //@line 975 "_elementtree.c"
        var $24=HEAP[$23]; //@line 975 "_elementtree.c"
        var $25=((($24) + 1)&4294967295); //@line 975 "_elementtree.c"
        var $26=(($22)&4294967295); //@line 975 "_elementtree.c"
        HEAP[$26]=$25; //@line 975 "_elementtree.c"
        var $27=HEAP[$args_addr]; //@line 975 "_elementtree.c"
        var $28=$27; //@line 975 "_elementtree.c"
        var $29=HEAP[$tag]; //@line 975 "_elementtree.c"
        var $30=(($28+12)&4294967295); //@line 975 "_elementtree.c"
        var $31=(($30+4)&4294967295); //@line 975 "_elementtree.c"
        HEAP[$31]=$29; //@line 975 "_elementtree.c"
        var $32=HEAP[_elementtree_iter_obj]; //@line 977 "_elementtree.c"
        var $33=HEAP[$args_addr]; //@line 977 "_elementtree.c"
        var $34=_PyObject_CallObject($32, $33); //@line 977 "_elementtree.c"
        HEAP[$result]=$34; //@line 977 "_elementtree.c"
        var $35=HEAP[$args_addr]; //@line 979 "_elementtree.c"
        var $36=(($35)&4294967295); //@line 979 "_elementtree.c"
        var $37=HEAP[$36]; //@line 979 "_elementtree.c"
        var $38=((($37) - 1)&4294967295); //@line 979 "_elementtree.c"
        var $39=HEAP[$args_addr]; //@line 979 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 979 "_elementtree.c"
        HEAP[$40]=$38; //@line 979 "_elementtree.c"
        var $41=HEAP[$args_addr]; //@line 979 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 979 "_elementtree.c"
        var $43=HEAP[$42]; //@line 979 "_elementtree.c"
        var $44=((($43))|0)==0; //@line 979 "_elementtree.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 979 "_elementtree.c"
      case 7: // $bb6
        var $45=HEAP[$args_addr]; //@line 979 "_elementtree.c"
        var $46=(($45+4)&4294967295); //@line 979 "_elementtree.c"
        var $47=HEAP[$46]; //@line 979 "_elementtree.c"
        var $48=(($47+24)&4294967295); //@line 979 "_elementtree.c"
        var $49=HEAP[$48]; //@line 979 "_elementtree.c"
        var $50=HEAP[$args_addr]; //@line 979 "_elementtree.c"
        FUNCTION_TABLE[$49]($50); //@line 979 "_elementtree.c"
        __label__ = 8; break; //@line 979 "_elementtree.c"
      case 8: // $bb7
        var $51=HEAP[$result]; //@line 981 "_elementtree.c"
        HEAP[$0]=$51; //@line 981 "_elementtree.c"
        __label__ = 9; break; //@line 981 "_elementtree.c"
      case 9: // $bb8
        var $52=HEAP[$0]; //@line 960 "_elementtree.c"
        HEAP[$retval]=$52; //@line 960 "_elementtree.c"
        __label__ = 10; break; //@line 960 "_elementtree.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 960 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 960 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_itertext($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $result=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 990 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str25)&4294967295)); //@line 990 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 990 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 990 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 991 "_elementtree.c"
        __label__ = 9; break; //@line 991 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_itertext_obj]; //@line 993 "_elementtree.c"
        var $5=($4)==0; //@line 993 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 993 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 994 "_elementtree.c"
        _PyErr_SetString($6, ((__str26)&4294967295)); //@line 994 "_elementtree.c"
        HEAP[$0]=0; //@line 998 "_elementtree.c"
        __label__ = 9; break; //@line 998 "_elementtree.c"
      case 4: // $bb3
        var $7=_PyTuple_New(1); //@line 1001 "_elementtree.c"
        HEAP[$args_addr]=$7; //@line 1001 "_elementtree.c"
        var $8=HEAP[$args_addr]; //@line 1002 "_elementtree.c"
        var $9=($8)==0; //@line 1002 "_elementtree.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1002 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1003 "_elementtree.c"
        __label__ = 9; break; //@line 1003 "_elementtree.c"
      case 6: // $bb5
        var $10=HEAP[$self_addr]; //@line 1005 "_elementtree.c"
        var $11=$10; //@line 1005 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 1005 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1005 "_elementtree.c"
        var $14=((($13) + 1)&4294967295); //@line 1005 "_elementtree.c"
        var $15=(($11)&4294967295); //@line 1005 "_elementtree.c"
        HEAP[$15]=$14; //@line 1005 "_elementtree.c"
        var $16=HEAP[$args_addr]; //@line 1005 "_elementtree.c"
        var $17=$16; //@line 1005 "_elementtree.c"
        var $18=HEAP[$self_addr]; //@line 1005 "_elementtree.c"
        var $19=$18; //@line 1005 "_elementtree.c"
        var $20=(($17+12)&4294967295); //@line 1005 "_elementtree.c"
        var $21=(($20)&4294967295); //@line 1005 "_elementtree.c"
        HEAP[$21]=$19; //@line 1005 "_elementtree.c"
        var $22=HEAP[_elementtree_itertext_obj]; //@line 1007 "_elementtree.c"
        var $23=HEAP[$args_addr]; //@line 1007 "_elementtree.c"
        var $24=_PyObject_CallObject($22, $23); //@line 1007 "_elementtree.c"
        HEAP[$result]=$24; //@line 1007 "_elementtree.c"
        var $25=HEAP[$args_addr]; //@line 1009 "_elementtree.c"
        var $26=(($25)&4294967295); //@line 1009 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1009 "_elementtree.c"
        var $28=((($27) - 1)&4294967295); //@line 1009 "_elementtree.c"
        var $29=HEAP[$args_addr]; //@line 1009 "_elementtree.c"
        var $30=(($29)&4294967295); //@line 1009 "_elementtree.c"
        HEAP[$30]=$28; //@line 1009 "_elementtree.c"
        var $31=HEAP[$args_addr]; //@line 1009 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 1009 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1009 "_elementtree.c"
        var $34=((($33))|0)==0; //@line 1009 "_elementtree.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1009 "_elementtree.c"
      case 7: // $bb6
        var $35=HEAP[$args_addr]; //@line 1009 "_elementtree.c"
        var $36=(($35+4)&4294967295); //@line 1009 "_elementtree.c"
        var $37=HEAP[$36]; //@line 1009 "_elementtree.c"
        var $38=(($37+24)&4294967295); //@line 1009 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1009 "_elementtree.c"
        var $40=HEAP[$args_addr]; //@line 1009 "_elementtree.c"
        FUNCTION_TABLE[$39]($40); //@line 1009 "_elementtree.c"
        __label__ = 8; break; //@line 1009 "_elementtree.c"
      case 8: // $bb7
        var $41=HEAP[$result]; //@line 1011 "_elementtree.c"
        HEAP[$0]=$41; //@line 1011 "_elementtree.c"
        __label__ = 9; break; //@line 1011 "_elementtree.c"
      case 9: // $bb8
        var $42=HEAP[$0]; //@line 991 "_elementtree.c"
        HEAP[$retval]=$42; //@line 991 "_elementtree.c"
        __label__ = 10; break; //@line 991 "_elementtree.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 991 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 991 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getitem($self_, $index) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $index_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$index_addr]=$index;
        var $1=HEAP[$self__addr]; //@line 1017 "_elementtree.c"
        var $2=$1; //@line 1017 "_elementtree.c"
        HEAP[$self]=$2; //@line 1017 "_elementtree.c"
        var $3=HEAP[$self]; //@line 1019 "_elementtree.c"
        var $4=(($3+20)&4294967295); //@line 1019 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1019 "_elementtree.c"
        var $6=($5)==0; //@line 1019 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1019 "_elementtree.c"
      case 1: // $bb
        var $7=HEAP[$index_addr]; //@line 1019 "_elementtree.c"
        var $8=((($7))|0) < 0; //@line 1019 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1019 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[$self]; //@line 1019 "_elementtree.c"
        var $10=(($9+20)&4294967295); //@line 1019 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1019 "_elementtree.c"
        var $12=(($11+4)&4294967295); //@line 1019 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1019 "_elementtree.c"
        var $14=HEAP[$index_addr]; //@line 1019 "_elementtree.c"
        var $15=((($13))|0) <= ((($14))|0); //@line 1019 "_elementtree.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1019 "_elementtree.c"
      case 3: // $bb2
        var $16=HEAP[_PyExc_IndexError]; //@line 1020 "_elementtree.c"
        _PyErr_SetString($16, ((__str27)&4294967295)); //@line 1020 "_elementtree.c"
        HEAP[$0]=0; //@line 1024 "_elementtree.c"
        __label__ = 5; break; //@line 1024 "_elementtree.c"
      case 4: // $bb3
        var $17=HEAP[$self]; //@line 1027 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 1027 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1027 "_elementtree.c"
        var $20=(($19+12)&4294967295); //@line 1027 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1027 "_elementtree.c"
        var $22=HEAP[$index_addr]; //@line 1027 "_elementtree.c"
        var $23=(($21+4*$22)&4294967295); //@line 1027 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1027 "_elementtree.c"
        var $25=(($24)&4294967295); //@line 1027 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1027 "_elementtree.c"
        var $27=((($26) + 1)&4294967295); //@line 1027 "_elementtree.c"
        var $28=(($24)&4294967295); //@line 1027 "_elementtree.c"
        HEAP[$28]=$27; //@line 1027 "_elementtree.c"
        var $29=HEAP[$self]; //@line 1028 "_elementtree.c"
        var $30=(($29+20)&4294967295); //@line 1028 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1028 "_elementtree.c"
        var $32=(($31+12)&4294967295); //@line 1028 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1028 "_elementtree.c"
        var $34=HEAP[$index_addr]; //@line 1028 "_elementtree.c"
        var $35=(($33+4*$34)&4294967295); //@line 1028 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1028 "_elementtree.c"
        HEAP[$0]=$36; //@line 1028 "_elementtree.c"
        __label__ = 5; break; //@line 1028 "_elementtree.c"
      case 5: // $bb4
        var $37=HEAP[$0]; //@line 1024 "_elementtree.c"
        HEAP[$retval]=$37; //@line 1024 "_elementtree.c"
        __label__ = 6; break; //@line 1024 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1024 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1024 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_insert($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $index=__stackBase__+20;
        var $element=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1038 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str28)&4294967295), $index, _Element_Type, $element); //@line 1038 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1038 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1038 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1040 "_elementtree.c"
        __label__ = 15; break; //@line 1040 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1042 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 1042 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1042 "_elementtree.c"
        var $7=($6)==0; //@line 1042 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 1043 "_elementtree.c"
        var $9=_element_new_extra($8, 0); //@line 1043 "_elementtree.c"
        __label__ = 4; break; //@line 1043 "_elementtree.c"
      case 4: // $bb3
        var $10=HEAP[$index]; //@line 1045 "_elementtree.c"
        var $11=((($10))|0) < 0; //@line 1045 "_elementtree.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1045 "_elementtree.c"
      case 5: // $bb4
        var $12=HEAP[$self_addr]; //@line 1046 "_elementtree.c"
        var $13=(($12+20)&4294967295); //@line 1046 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1046 "_elementtree.c"
        var $15=(($14+4)&4294967295); //@line 1046 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1046 "_elementtree.c"
        var $17=HEAP[$index]; //@line 1046 "_elementtree.c"
        var $18=((($16) + ($17))&4294967295); //@line 1046 "_elementtree.c"
        HEAP[$index]=$18; //@line 1046 "_elementtree.c"
        var $19=HEAP[$index]; //@line 1047 "_elementtree.c"
        var $20=((($19))|0) < 0; //@line 1047 "_elementtree.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1047 "_elementtree.c"
      case 6: // $bb5
        HEAP[$index]=0; //@line 1048 "_elementtree.c"
        __label__ = 7; break; //@line 1048 "_elementtree.c"
      case 7: // $bb6
        var $21=HEAP[$self_addr]; //@line 1050 "_elementtree.c"
        var $22=(($21+20)&4294967295); //@line 1050 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1050 "_elementtree.c"
        var $24=(($23+4)&4294967295); //@line 1050 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1050 "_elementtree.c"
        var $26=HEAP[$index]; //@line 1050 "_elementtree.c"
        var $27=((($25))|0) < ((($26))|0); //@line 1050 "_elementtree.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1050 "_elementtree.c"
      case 8: // $bb7
        var $28=HEAP[$self_addr]; //@line 1051 "_elementtree.c"
        var $29=(($28+20)&4294967295); //@line 1051 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1051 "_elementtree.c"
        var $31=(($30+4)&4294967295); //@line 1051 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1051 "_elementtree.c"
        HEAP[$index]=$32; //@line 1051 "_elementtree.c"
        __label__ = 9; break; //@line 1051 "_elementtree.c"
      case 9: // $bb8
        var $33=HEAP[$self_addr]; //@line 1053 "_elementtree.c"
        var $34=_element_resize($33, 1); //@line 1053 "_elementtree.c"
        var $35=((($34))|0) < 0; //@line 1053 "_elementtree.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1053 "_elementtree.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1054 "_elementtree.c"
        __label__ = 15; break; //@line 1054 "_elementtree.c"
      case 11: // $bb10
        var $36=HEAP[$self_addr]; //@line 1056 "_elementtree.c"
        var $37=(($36+20)&4294967295); //@line 1056 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1056 "_elementtree.c"
        var $39=(($38+4)&4294967295); //@line 1056 "_elementtree.c"
        var $40=HEAP[$39]; //@line 1056 "_elementtree.c"
        HEAP[$i]=$40; //@line 1056 "_elementtree.c"
        __label__ = 13; break; //@line 1056 "_elementtree.c"
      case 12: // $bb11
        var $41=HEAP[$self_addr]; //@line 1057 "_elementtree.c"
        var $42=(($41+20)&4294967295); //@line 1057 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1057 "_elementtree.c"
        var $44=(($43+12)&4294967295); //@line 1057 "_elementtree.c"
        var $45=HEAP[$44]; //@line 1057 "_elementtree.c"
        var $46=HEAP[$self_addr]; //@line 1057 "_elementtree.c"
        var $47=(($46+20)&4294967295); //@line 1057 "_elementtree.c"
        var $48=HEAP[$47]; //@line 1057 "_elementtree.c"
        var $49=(($48+12)&4294967295); //@line 1057 "_elementtree.c"
        var $50=HEAP[$49]; //@line 1057 "_elementtree.c"
        var $51=HEAP[$i]; //@line 1057 "_elementtree.c"
        var $52=((($51) - 1)&4294967295); //@line 1057 "_elementtree.c"
        var $53=(($50+4*$52)&4294967295); //@line 1057 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1057 "_elementtree.c"
        var $55=HEAP[$i]; //@line 1057 "_elementtree.c"
        var $56=(($45+4*$55)&4294967295); //@line 1057 "_elementtree.c"
        HEAP[$56]=$54; //@line 1057 "_elementtree.c"
        var $57=HEAP[$i]; //@line 1056 "_elementtree.c"
        var $58=((($57) - 1)&4294967295); //@line 1056 "_elementtree.c"
        HEAP[$i]=$58; //@line 1056 "_elementtree.c"
        __label__ = 13; break; //@line 1056 "_elementtree.c"
      case 13: // $bb12
        var $59=HEAP[$index]; //@line 1056 "_elementtree.c"
        var $60=HEAP[$i]; //@line 1056 "_elementtree.c"
        var $61=((($60))|0) > ((($59))|0); //@line 1056 "_elementtree.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1056 "_elementtree.c"
      case 14: // $bb13
        var $62=HEAP[$element]; //@line 1059 "_elementtree.c"
        var $63=(($62)&4294967295); //@line 1059 "_elementtree.c"
        var $64=HEAP[$63]; //@line 1059 "_elementtree.c"
        var $65=((($64) + 1)&4294967295); //@line 1059 "_elementtree.c"
        var $66=(($62)&4294967295); //@line 1059 "_elementtree.c"
        HEAP[$66]=$65; //@line 1059 "_elementtree.c"
        var $67=HEAP[$self_addr]; //@line 1060 "_elementtree.c"
        var $68=(($67+20)&4294967295); //@line 1060 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1060 "_elementtree.c"
        var $70=(($69+12)&4294967295); //@line 1060 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1060 "_elementtree.c"
        var $72=HEAP[$index]; //@line 1060 "_elementtree.c"
        var $73=HEAP[$element]; //@line 1060 "_elementtree.c"
        var $74=(($71+4*$72)&4294967295); //@line 1060 "_elementtree.c"
        HEAP[$74]=$73; //@line 1060 "_elementtree.c"
        var $75=HEAP[$self_addr]; //@line 1062 "_elementtree.c"
        var $76=(($75+20)&4294967295); //@line 1062 "_elementtree.c"
        var $77=HEAP[$76]; //@line 1062 "_elementtree.c"
        var $78=(($77+4)&4294967295); //@line 1062 "_elementtree.c"
        var $79=HEAP[$78]; //@line 1062 "_elementtree.c"
        var $80=((($79) + 1)&4294967295); //@line 1062 "_elementtree.c"
        var $81=(($77+4)&4294967295); //@line 1062 "_elementtree.c"
        HEAP[$81]=$80; //@line 1062 "_elementtree.c"
        var $82=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1064 "_elementtree.c"
        var $83=((($82) + 1)&4294967295); //@line 1064 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$83; //@line 1064 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1064 "_elementtree.c"
        __label__ = 15; break; //@line 1064 "_elementtree.c"
      case 15: // $bb14
        var $84=HEAP[$0]; //@line 1040 "_elementtree.c"
        HEAP[$retval]=$84; //@line 1040 "_elementtree.c"
        __label__ = 16; break; //@line 1040 "_elementtree.c"
      case 16: // $return
        var $retval15=HEAP[$retval]; //@line 1040 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1040 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_items($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 1070 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str29)&4294967295)); //@line 1070 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1070 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1070 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1071 "_elementtree.c"
        __label__ = 6; break; //@line 1071 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1073 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 1073 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1073 "_elementtree.c"
        var $7=($6)==0; //@line 1073 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1073 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 1073 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 1073 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1073 "_elementtree.c"
        var $11=(($10)&4294967295); //@line 1073 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1073 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 1073 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1073 "_elementtree.c"
      case 4: // $bb3
        var $14=_PyList_New(0); //@line 1074 "_elementtree.c"
        HEAP[$0]=$14; //@line 1074 "_elementtree.c"
        __label__ = 6; break; //@line 1074 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$self_addr]; //@line 1076 "_elementtree.c"
        var $16=(($15+20)&4294967295); //@line 1076 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1076 "_elementtree.c"
        var $18=(($17)&4294967295); //@line 1076 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1076 "_elementtree.c"
        var $20=_PyDict_Items($19); //@line 1076 "_elementtree.c"
        HEAP[$0]=$20; //@line 1076 "_elementtree.c"
        __label__ = 6; break; //@line 1076 "_elementtree.c"
      case 6: // $bb5
        var $21=HEAP[$0]; //@line 1071 "_elementtree.c"
        HEAP[$retval]=$21; //@line 1071 "_elementtree.c"
        __label__ = 7; break; //@line 1071 "_elementtree.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1071 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1071 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_keys($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 1082 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str30)&4294967295)); //@line 1082 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1082 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1082 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1083 "_elementtree.c"
        __label__ = 6; break; //@line 1083 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1085 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 1085 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1085 "_elementtree.c"
        var $7=($6)==0; //@line 1085 "_elementtree.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1085 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 1085 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 1085 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1085 "_elementtree.c"
        var $11=(($10)&4294967295); //@line 1085 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1085 "_elementtree.c"
        var $13=($12)==(__Py_NoneStruct); //@line 1085 "_elementtree.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1085 "_elementtree.c"
      case 4: // $bb3
        var $14=_PyList_New(0); //@line 1086 "_elementtree.c"
        HEAP[$0]=$14; //@line 1086 "_elementtree.c"
        __label__ = 6; break; //@line 1086 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$self_addr]; //@line 1088 "_elementtree.c"
        var $16=(($15+20)&4294967295); //@line 1088 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1088 "_elementtree.c"
        var $18=(($17)&4294967295); //@line 1088 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1088 "_elementtree.c"
        var $20=_PyDict_Keys($19); //@line 1088 "_elementtree.c"
        HEAP[$0]=$20; //@line 1088 "_elementtree.c"
        __label__ = 6; break; //@line 1088 "_elementtree.c"
      case 6: // $bb5
        var $21=HEAP[$0]; //@line 1083 "_elementtree.c"
        HEAP[$retval]=$21; //@line 1083 "_elementtree.c"
        __label__ = 7; break; //@line 1083 "_elementtree.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 1083 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 1083 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_length($self) {
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
        var $1=HEAP[$self_addr]; //@line 1094 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 1094 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1094 "_elementtree.c"
        var $4=($3)==0; //@line 1094 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1094 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1095 "_elementtree.c"
        __label__ = 3; break; //@line 1095 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[$self_addr]; //@line 1097 "_elementtree.c"
        var $6=(($5+20)&4294967295); //@line 1097 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1097 "_elementtree.c"
        var $8=(($7+4)&4294967295); //@line 1097 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1097 "_elementtree.c"
        HEAP[$0]=$9; //@line 1097 "_elementtree.c"
        __label__ = 3; break; //@line 1097 "_elementtree.c"
      case 3: // $bb2
        var $10=HEAP[$0]; //@line 1095 "_elementtree.c"
        HEAP[$retval]=$10; //@line 1095 "_elementtree.c"
        __label__ = 4; break; //@line 1095 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1095 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1095 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_makeelement($self, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $elem=__stackBase__+20;
        var $tag=__stackBase__+24;
        var $attrib=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        var $1=HEAP[$args_addr]; //@line 1107 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str31)&4294967295), $tag, $attrib); //@line 1107 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1107 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1107 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1108 "_elementtree.c"
        __label__ = 7; break; //@line 1108 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 1110 "_elementtree.c"
        var $5=_PyDict_Copy($4); //@line 1110 "_elementtree.c"
        HEAP[$attrib]=$5; //@line 1110 "_elementtree.c"
        var $6=HEAP[$attrib]; //@line 1111 "_elementtree.c"
        var $7=($6)==0; //@line 1111 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1111 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 1112 "_elementtree.c"
        __label__ = 7; break; //@line 1112 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$attrib]; //@line 1114 "_elementtree.c"
        var $9=HEAP[$tag]; //@line 1114 "_elementtree.c"
        var $10=_element_new($9, $8); //@line 1114 "_elementtree.c"
        HEAP[$elem]=$10; //@line 1114 "_elementtree.c"
        var $11=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 1116 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1116 "_elementtree.c"
        var $14=((($13) - 1)&4294967295); //@line 1116 "_elementtree.c"
        var $15=(($11)&4294967295); //@line 1116 "_elementtree.c"
        HEAP[$15]=$14; //@line 1116 "_elementtree.c"
        var $16=(($11)&4294967295); //@line 1116 "_elementtree.c"
        var $17=HEAP[$16]; //@line 1116 "_elementtree.c"
        var $18=((($17))|0)==0; //@line 1116 "_elementtree.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1116 "_elementtree.c"
      case 5: // $bb4
        var $19=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        var $20=(($19+4)&4294967295); //@line 1116 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1116 "_elementtree.c"
        var $22=(($21+24)&4294967295); //@line 1116 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1116 "_elementtree.c"
        var $24=HEAP[$attrib]; //@line 1116 "_elementtree.c"
        FUNCTION_TABLE[$23]($24); //@line 1116 "_elementtree.c"
        __label__ = 6; break; //@line 1116 "_elementtree.c"
      case 6: // $bb5
        var $25=HEAP[$elem]; //@line 1118 "_elementtree.c"
        HEAP[$0]=$25; //@line 1118 "_elementtree.c"
        __label__ = 7; break; //@line 1118 "_elementtree.c"
      case 7: // $bb6
        var $26=HEAP[$0]; //@line 1108 "_elementtree.c"
        HEAP[$retval]=$26; //@line 1108 "_elementtree.c"
        __label__ = 8; break; //@line 1108 "_elementtree.c"
      case 8: // $return
        var $retval7=HEAP[$retval]; //@line 1108 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1108 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_reduce($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 1124 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str32)&4294967295)); //@line 1124 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1124 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1124 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1125 "_elementtree.c"
        __label__ = 5; break; //@line 1125 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[_elementtree_copyelement_obj]; //@line 1133 "_elementtree.c"
        var $5=($4)==0; //@line 1133 "_elementtree.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1133 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_RuntimeError]; //@line 1134 "_elementtree.c"
        _PyErr_SetString($6, ((__str33)&4294967295)); //@line 1134 "_elementtree.c"
        HEAP[$0]=0; //@line 1138 "_elementtree.c"
        __label__ = 5; break; //@line 1138 "_elementtree.c"
      case 4: // $bb3
        var $7=HEAP[$self_addr]; //@line 1141 "_elementtree.c"
        var $8=HEAP[$args_addr]; //@line 1141 "_elementtree.c"
        var $9=_element_copy($7, $8); //@line 1141 "_elementtree.c"
        var $10=HEAP[_elementtree_copyelement_obj]; //@line 1141 "_elementtree.c"
        var $11=_Py_BuildValue(((__str34)&4294967295), $10, $9); //@line 1141 "_elementtree.c"
        HEAP[$0]=$11; //@line 1141 "_elementtree.c"
        __label__ = 5; break; //@line 1141 "_elementtree.c"
      case 5: // $bb4
        var $12=HEAP[$0]; //@line 1125 "_elementtree.c"
        HEAP[$retval]=$12; //@line 1125 "_elementtree.c"
        __label__ = 6; break; //@line 1125 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1125 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1125 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_remove($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $element=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1152 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str35)&4294967295), _Element_Type, $element); //@line 1152 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1152 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1152 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1153 "_elementtree.c"
        __label__ = 17; break; //@line 1153 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1155 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 1155 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1155 "_elementtree.c"
        var $7=($6)==0; //@line 1155 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1155 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_ValueError]; //@line 1157 "_elementtree.c"
        _PyErr_SetString($8, ((__str36)&4294967295)); //@line 1157 "_elementtree.c"
        HEAP[$0]=0; //@line 1161 "_elementtree.c"
        __label__ = 17; break; //@line 1161 "_elementtree.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 1164 "_elementtree.c"
        __label__ = 8; break; //@line 1164 "_elementtree.c"
      case 5: // $bb4
        var $9=HEAP[$self_addr]; //@line 1165 "_elementtree.c"
        var $10=(($9+20)&4294967295); //@line 1165 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1165 "_elementtree.c"
        var $12=(($11+12)&4294967295); //@line 1165 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1165 "_elementtree.c"
        var $14=HEAP[$i]; //@line 1165 "_elementtree.c"
        var $15=(($13+4*$14)&4294967295); //@line 1165 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1165 "_elementtree.c"
        var $17=HEAP[$element]; //@line 1165 "_elementtree.c"
        var $18=($16)==($17); //@line 1165 "_elementtree.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 1165 "_elementtree.c"
      case 6: // $bb5
        var $19=HEAP[$element]; //@line 1167 "_elementtree.c"
        var $20=HEAP[$self_addr]; //@line 1167 "_elementtree.c"
        var $21=(($20+20)&4294967295); //@line 1167 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1167 "_elementtree.c"
        var $23=(($22+12)&4294967295); //@line 1167 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1167 "_elementtree.c"
        var $25=HEAP[$i]; //@line 1167 "_elementtree.c"
        var $26=(($24+4*$25)&4294967295); //@line 1167 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1167 "_elementtree.c"
        var $28=_PyObject_Compare($27, $19); //@line 1167 "_elementtree.c"
        var $29=((($28))|0)==0; //@line 1167 "_elementtree.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 1167 "_elementtree.c"
      case 7: // $bb6
        var $30=HEAP[$i]; //@line 1164 "_elementtree.c"
        var $31=((($30) + 1)&4294967295); //@line 1164 "_elementtree.c"
        HEAP[$i]=$31; //@line 1164 "_elementtree.c"
        __label__ = 8; break; //@line 1164 "_elementtree.c"
      case 8: // $bb7
        var $32=HEAP[$self_addr]; //@line 1164 "_elementtree.c"
        var $33=(($32+20)&4294967295); //@line 1164 "_elementtree.c"
        var $34=HEAP[$33]; //@line 1164 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 1164 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1164 "_elementtree.c"
        var $37=HEAP[$i]; //@line 1164 "_elementtree.c"
        var $38=((($36))|0) > ((($37))|0); //@line 1164 "_elementtree.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 1164 "_elementtree.c"
      case 9: // $bb8
        var $39=HEAP[$self_addr]; //@line 1171 "_elementtree.c"
        var $40=(($39+20)&4294967295); //@line 1171 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1171 "_elementtree.c"
        var $42=(($41+4)&4294967295); //@line 1171 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1171 "_elementtree.c"
        var $44=HEAP[$i]; //@line 1171 "_elementtree.c"
        var $45=((($43))|0)==((($44))|0); //@line 1171 "_elementtree.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1171 "_elementtree.c"
      case 10: // $bb9
        var $46=HEAP[_PyExc_ValueError]; //@line 1173 "_elementtree.c"
        _PyErr_SetString($46, ((__str36)&4294967295)); //@line 1173 "_elementtree.c"
        HEAP[$0]=0; //@line 1177 "_elementtree.c"
        __label__ = 17; break; //@line 1177 "_elementtree.c"
      case 11: // $bb10
        var $47=HEAP[$self_addr]; //@line 1180 "_elementtree.c"
        var $48=(($47+20)&4294967295); //@line 1180 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1180 "_elementtree.c"
        var $50=(($49+12)&4294967295); //@line 1180 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1180 "_elementtree.c"
        var $52=HEAP[$i]; //@line 1180 "_elementtree.c"
        var $53=(($51+4*$52)&4294967295); //@line 1180 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1180 "_elementtree.c"
        var $55=(($54)&4294967295); //@line 1180 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1180 "_elementtree.c"
        var $57=((($56) - 1)&4294967295); //@line 1180 "_elementtree.c"
        var $58=(($54)&4294967295); //@line 1180 "_elementtree.c"
        HEAP[$58]=$57; //@line 1180 "_elementtree.c"
        var $59=(($54)&4294967295); //@line 1180 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1180 "_elementtree.c"
        var $61=((($60))|0)==0; //@line 1180 "_elementtree.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1180 "_elementtree.c"
      case 12: // $bb11
        var $62=HEAP[$self_addr]; //@line 1180 "_elementtree.c"
        var $63=(($62+20)&4294967295); //@line 1180 "_elementtree.c"
        var $64=HEAP[$63]; //@line 1180 "_elementtree.c"
        var $65=(($64+12)&4294967295); //@line 1180 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1180 "_elementtree.c"
        var $67=HEAP[$i]; //@line 1180 "_elementtree.c"
        var $68=(($66+4*$67)&4294967295); //@line 1180 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1180 "_elementtree.c"
        var $70=(($69+4)&4294967295); //@line 1180 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1180 "_elementtree.c"
        var $72=(($71+24)&4294967295); //@line 1180 "_elementtree.c"
        var $73=HEAP[$72]; //@line 1180 "_elementtree.c"
        var $74=HEAP[$self_addr]; //@line 1180 "_elementtree.c"
        var $75=(($74+20)&4294967295); //@line 1180 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1180 "_elementtree.c"
        var $77=(($76+12)&4294967295); //@line 1180 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1180 "_elementtree.c"
        var $79=HEAP[$i]; //@line 1180 "_elementtree.c"
        var $80=(($78+4*$79)&4294967295); //@line 1180 "_elementtree.c"
        var $81=HEAP[$80]; //@line 1180 "_elementtree.c"
        FUNCTION_TABLE[$73]($81); //@line 1180 "_elementtree.c"
        __label__ = 13; break; //@line 1180 "_elementtree.c"
      case 13: // $bb12
        var $82=HEAP[$self_addr]; //@line 1182 "_elementtree.c"
        var $83=(($82+20)&4294967295); //@line 1182 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1182 "_elementtree.c"
        var $85=(($84+4)&4294967295); //@line 1182 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1182 "_elementtree.c"
        var $87=((($86) - 1)&4294967295); //@line 1182 "_elementtree.c"
        var $88=(($84+4)&4294967295); //@line 1182 "_elementtree.c"
        HEAP[$88]=$87; //@line 1182 "_elementtree.c"
        __label__ = 15; break; //@line 1182 "_elementtree.c"
      case 14: // $bb13
        var $89=HEAP[$self_addr]; //@line 1185 "_elementtree.c"
        var $90=(($89+20)&4294967295); //@line 1185 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1185 "_elementtree.c"
        var $92=(($91+12)&4294967295); //@line 1185 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1185 "_elementtree.c"
        var $94=HEAP[$self_addr]; //@line 1185 "_elementtree.c"
        var $95=(($94+20)&4294967295); //@line 1185 "_elementtree.c"
        var $96=HEAP[$95]; //@line 1185 "_elementtree.c"
        var $97=(($96+12)&4294967295); //@line 1185 "_elementtree.c"
        var $98=HEAP[$97]; //@line 1185 "_elementtree.c"
        var $99=HEAP[$i]; //@line 1185 "_elementtree.c"
        var $100=((($99) + 1)&4294967295); //@line 1185 "_elementtree.c"
        var $101=(($98+4*$100)&4294967295); //@line 1185 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1185 "_elementtree.c"
        var $103=HEAP[$i]; //@line 1185 "_elementtree.c"
        var $104=(($93+4*$103)&4294967295); //@line 1185 "_elementtree.c"
        HEAP[$104]=$102; //@line 1185 "_elementtree.c"
        var $105=HEAP[$i]; //@line 1184 "_elementtree.c"
        var $106=((($105) + 1)&4294967295); //@line 1184 "_elementtree.c"
        HEAP[$i]=$106; //@line 1184 "_elementtree.c"
        __label__ = 15; break; //@line 1184 "_elementtree.c"
      case 15: // $bb14
        var $107=HEAP[$self_addr]; //@line 1184 "_elementtree.c"
        var $108=(($107+20)&4294967295); //@line 1184 "_elementtree.c"
        var $109=HEAP[$108]; //@line 1184 "_elementtree.c"
        var $110=(($109+4)&4294967295); //@line 1184 "_elementtree.c"
        var $111=HEAP[$110]; //@line 1184 "_elementtree.c"
        var $112=HEAP[$i]; //@line 1184 "_elementtree.c"
        var $113=((($111))|0) > ((($112))|0); //@line 1184 "_elementtree.c"
        if ($113) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1184 "_elementtree.c"
      case 16: // $bb15
        var $114=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1187 "_elementtree.c"
        var $115=((($114) + 1)&4294967295); //@line 1187 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$115; //@line 1187 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1187 "_elementtree.c"
        __label__ = 17; break; //@line 1187 "_elementtree.c"
      case 17: // $bb16
        var $116=HEAP[$0]; //@line 1153 "_elementtree.c"
        HEAP[$retval]=$116; //@line 1153 "_elementtree.c"
        __label__ = 18; break; //@line 1153 "_elementtree.c"
      case 18: // $return
        var $retval17=HEAP[$retval]; //@line 1153 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1153 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_repr($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $repr=__stackBase__+12;
        var $tag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1195 "_elementtree.c"
        var $2=(($1+8)&4294967295); //@line 1195 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1195 "_elementtree.c"
        var $4=_PyObject_Repr($3); //@line 1195 "_elementtree.c"
        HEAP[$tag]=$4; //@line 1195 "_elementtree.c"
        var $5=HEAP[$tag]; //@line 1196 "_elementtree.c"
        var $6=($5)==0; //@line 1196 "_elementtree.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1196 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1197 "_elementtree.c"
        __label__ = 5; break; //@line 1197 "_elementtree.c"
      case 2: // $bb1
        var $7=HEAP[$tag]; //@line 1199 "_elementtree.c"
        var $8=$7; //@line 1199 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 1199 "_elementtree.c"
        var $10=(($9)&4294967295); //@line 1199 "_elementtree.c"
        var $11=HEAP[$self_addr]; //@line 1199 "_elementtree.c"
        var $12=_PyString_FromFormat(((__str37)&4294967295), $10, $11); //@line 1199 "_elementtree.c"
        HEAP[$repr]=$12; //@line 1199 "_elementtree.c"
        var $13=HEAP[$tag]; //@line 1202 "_elementtree.c"
        var $14=(($13)&4294967295); //@line 1202 "_elementtree.c"
        var $15=HEAP[$14]; //@line 1202 "_elementtree.c"
        var $16=((($15) - 1)&4294967295); //@line 1202 "_elementtree.c"
        var $17=HEAP[$tag]; //@line 1202 "_elementtree.c"
        var $18=(($17)&4294967295); //@line 1202 "_elementtree.c"
        HEAP[$18]=$16; //@line 1202 "_elementtree.c"
        var $19=HEAP[$tag]; //@line 1202 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 1202 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1202 "_elementtree.c"
        var $22=((($21))|0)==0; //@line 1202 "_elementtree.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1202 "_elementtree.c"
      case 3: // $bb2
        var $23=HEAP[$tag]; //@line 1202 "_elementtree.c"
        var $24=(($23+4)&4294967295); //@line 1202 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1202 "_elementtree.c"
        var $26=(($25+24)&4294967295); //@line 1202 "_elementtree.c"
        var $27=HEAP[$26]; //@line 1202 "_elementtree.c"
        var $28=HEAP[$tag]; //@line 1202 "_elementtree.c"
        FUNCTION_TABLE[$27]($28); //@line 1202 "_elementtree.c"
        __label__ = 4; break; //@line 1202 "_elementtree.c"
      case 4: // $bb3
        var $29=HEAP[$repr]; //@line 1204 "_elementtree.c"
        HEAP[$0]=$29; //@line 1204 "_elementtree.c"
        __label__ = 5; break; //@line 1204 "_elementtree.c"
      case 5: // $bb4
        var $30=HEAP[$0]; //@line 1197 "_elementtree.c"
        HEAP[$retval]=$30; //@line 1197 "_elementtree.c"
        __label__ = 6; break; //@line 1197 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 1197 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 1197 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_set($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $attrib=__stackBase__+16;
        var $key=__stackBase__+20;
        var $value=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1214 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str38)&4294967295), $key, $value); //@line 1214 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1214 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1214 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1215 "_elementtree.c"
        __label__ = 9; break; //@line 1215 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1217 "_elementtree.c"
        var $5=(($4+20)&4294967295); //@line 1217 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1217 "_elementtree.c"
        var $7=($6)==0; //@line 1217 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1217 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$self_addr]; //@line 1218 "_elementtree.c"
        var $9=_element_new_extra($8, 0); //@line 1218 "_elementtree.c"
        __label__ = 4; break; //@line 1218 "_elementtree.c"
      case 4: // $bb3
        var $10=HEAP[$self_addr]; //@line 1220 "_elementtree.c"
        var $11=_element_get_attrib($10); //@line 1220 "_elementtree.c"
        HEAP[$attrib]=$11; //@line 1220 "_elementtree.c"
        var $12=HEAP[$attrib]; //@line 1221 "_elementtree.c"
        var $13=($12)==0; //@line 1221 "_elementtree.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1221 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1222 "_elementtree.c"
        __label__ = 9; break; //@line 1222 "_elementtree.c"
      case 6: // $bb5
        var $14=HEAP[$value]; //@line 1224 "_elementtree.c"
        var $15=HEAP[$key]; //@line 1224 "_elementtree.c"
        var $16=HEAP[$attrib]; //@line 1224 "_elementtree.c"
        var $17=_PyDict_SetItem($16, $15, $14); //@line 1224 "_elementtree.c"
        var $18=((($17))|0) < 0; //@line 1224 "_elementtree.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1224 "_elementtree.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 1225 "_elementtree.c"
        __label__ = 9; break; //@line 1225 "_elementtree.c"
      case 8: // $bb7
        var $19=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1227 "_elementtree.c"
        var $20=((($19) + 1)&4294967295); //@line 1227 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$20; //@line 1227 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1227 "_elementtree.c"
        __label__ = 9; break; //@line 1227 "_elementtree.c"
      case 9: // $bb8
        var $21=HEAP[$0]; //@line 1215 "_elementtree.c"
        HEAP[$retval]=$21; //@line 1215 "_elementtree.c"
        __label__ = 10; break; //@line 1215 "_elementtree.c"
      case 10: // $return
        var $retval9=HEAP[$retval]; //@line 1215 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1215 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_setitem($self_, $index, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $index_addr=__stackBase__+4;
        var $item_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $i=__stackBase__+24;
        var $old=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$index_addr]=$index;
        HEAP[$item_addr]=$item;
        var $1=HEAP[$self__addr]; //@line 1233 "_elementtree.c"
        var $2=$1; //@line 1233 "_elementtree.c"
        HEAP[$self]=$2; //@line 1233 "_elementtree.c"
        var $3=HEAP[$self]; //@line 1237 "_elementtree.c"
        var $4=(($3+20)&4294967295); //@line 1237 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1237 "_elementtree.c"
        var $6=($5)==0; //@line 1237 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 1237 "_elementtree.c"
      case 1: // $bb
        var $7=HEAP[$index_addr]; //@line 1237 "_elementtree.c"
        var $8=((($7))|0) < 0; //@line 1237 "_elementtree.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 1237 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[$self]; //@line 1237 "_elementtree.c"
        var $10=(($9+20)&4294967295); //@line 1237 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1237 "_elementtree.c"
        var $12=(($11+4)&4294967295); //@line 1237 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1237 "_elementtree.c"
        var $14=HEAP[$index_addr]; //@line 1237 "_elementtree.c"
        var $15=((($13))|0) <= ((($14))|0); //@line 1237 "_elementtree.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1237 "_elementtree.c"
      case 3: // $bb2
        var $16=HEAP[_PyExc_IndexError]; //@line 1238 "_elementtree.c"
        _PyErr_SetString($16, ((__str39)&4294967295)); //@line 1238 "_elementtree.c"
        HEAP[$0]=-1; //@line 1241 "_elementtree.c"
        __label__ = 12; break; //@line 1241 "_elementtree.c"
      case 4: // $bb3
        var $17=HEAP[$self]; //@line 1244 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 1244 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1244 "_elementtree.c"
        var $20=(($19+12)&4294967295); //@line 1244 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1244 "_elementtree.c"
        var $22=HEAP[$index_addr]; //@line 1244 "_elementtree.c"
        var $23=(($21+4*$22)&4294967295); //@line 1244 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1244 "_elementtree.c"
        HEAP[$old]=$24; //@line 1244 "_elementtree.c"
        var $25=HEAP[$item_addr]; //@line 1246 "_elementtree.c"
        var $26=($25)!=0; //@line 1246 "_elementtree.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1246 "_elementtree.c"
      case 5: // $bb4
        var $27=HEAP[$item_addr]; //@line 1247 "_elementtree.c"
        var $28=(($27)&4294967295); //@line 1247 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1247 "_elementtree.c"
        var $30=((($29) + 1)&4294967295); //@line 1247 "_elementtree.c"
        var $31=HEAP[$item_addr]; //@line 1247 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 1247 "_elementtree.c"
        HEAP[$32]=$30; //@line 1247 "_elementtree.c"
        var $33=HEAP[$self]; //@line 1248 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 1248 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1248 "_elementtree.c"
        var $36=(($35+12)&4294967295); //@line 1248 "_elementtree.c"
        var $37=HEAP[$36]; //@line 1248 "_elementtree.c"
        var $38=HEAP[$index_addr]; //@line 1248 "_elementtree.c"
        var $39=(($37+4*$38)&4294967295); //@line 1248 "_elementtree.c"
        var $40=HEAP[$item_addr]; //@line 1248 "_elementtree.c"
        HEAP[$39]=$40; //@line 1248 "_elementtree.c"
        __label__ = 9; break; //@line 1248 "_elementtree.c"
      case 6: // $bb5
        var $41=HEAP[$self]; //@line 1250 "_elementtree.c"
        var $42=(($41+20)&4294967295); //@line 1250 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1250 "_elementtree.c"
        var $44=(($43+4)&4294967295); //@line 1250 "_elementtree.c"
        var $45=HEAP[$44]; //@line 1250 "_elementtree.c"
        var $46=((($45) - 1)&4294967295); //@line 1250 "_elementtree.c"
        var $47=(($43+4)&4294967295); //@line 1250 "_elementtree.c"
        HEAP[$47]=$46; //@line 1250 "_elementtree.c"
        var $48=HEAP[$index_addr]; //@line 1251 "_elementtree.c"
        HEAP[$i]=$48; //@line 1251 "_elementtree.c"
        __label__ = 8; break; //@line 1251 "_elementtree.c"
      case 7: // $bb6
        var $49=HEAP[$self]; //@line 1252 "_elementtree.c"
        var $50=(($49+20)&4294967295); //@line 1252 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1252 "_elementtree.c"
        var $52=(($51+12)&4294967295); //@line 1252 "_elementtree.c"
        var $53=HEAP[$52]; //@line 1252 "_elementtree.c"
        var $54=HEAP[$self]; //@line 1252 "_elementtree.c"
        var $55=(($54+20)&4294967295); //@line 1252 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1252 "_elementtree.c"
        var $57=(($56+12)&4294967295); //@line 1252 "_elementtree.c"
        var $58=HEAP[$57]; //@line 1252 "_elementtree.c"
        var $59=HEAP[$i]; //@line 1252 "_elementtree.c"
        var $60=((($59) + 1)&4294967295); //@line 1252 "_elementtree.c"
        var $61=(($58+4*$60)&4294967295); //@line 1252 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1252 "_elementtree.c"
        var $63=HEAP[$i]; //@line 1252 "_elementtree.c"
        var $64=(($53+4*$63)&4294967295); //@line 1252 "_elementtree.c"
        HEAP[$64]=$62; //@line 1252 "_elementtree.c"
        var $65=HEAP[$i]; //@line 1251 "_elementtree.c"
        var $66=((($65) + 1)&4294967295); //@line 1251 "_elementtree.c"
        HEAP[$i]=$66; //@line 1251 "_elementtree.c"
        __label__ = 8; break; //@line 1251 "_elementtree.c"
      case 8: // $bb7
        var $67=HEAP[$self]; //@line 1251 "_elementtree.c"
        var $68=(($67+20)&4294967295); //@line 1251 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1251 "_elementtree.c"
        var $70=(($69+4)&4294967295); //@line 1251 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1251 "_elementtree.c"
        var $72=HEAP[$i]; //@line 1251 "_elementtree.c"
        var $73=((($71))|0) > ((($72))|0); //@line 1251 "_elementtree.c"
        if ($73) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1251 "_elementtree.c"
      case 9: // $bb8
        var $74=HEAP[$old]; //@line 1255 "_elementtree.c"
        var $75=(($74)&4294967295); //@line 1255 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1255 "_elementtree.c"
        var $77=((($76) - 1)&4294967295); //@line 1255 "_elementtree.c"
        var $78=HEAP[$old]; //@line 1255 "_elementtree.c"
        var $79=(($78)&4294967295); //@line 1255 "_elementtree.c"
        HEAP[$79]=$77; //@line 1255 "_elementtree.c"
        var $80=HEAP[$old]; //@line 1255 "_elementtree.c"
        var $81=(($80)&4294967295); //@line 1255 "_elementtree.c"
        var $82=HEAP[$81]; //@line 1255 "_elementtree.c"
        var $83=((($82))|0)==0; //@line 1255 "_elementtree.c"
        if ($83) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1255 "_elementtree.c"
      case 10: // $bb9
        var $84=HEAP[$old]; //@line 1255 "_elementtree.c"
        var $85=(($84+4)&4294967295); //@line 1255 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1255 "_elementtree.c"
        var $87=(($86+24)&4294967295); //@line 1255 "_elementtree.c"
        var $88=HEAP[$87]; //@line 1255 "_elementtree.c"
        var $89=HEAP[$old]; //@line 1255 "_elementtree.c"
        FUNCTION_TABLE[$88]($89); //@line 1255 "_elementtree.c"
        __label__ = 11; break; //@line 1255 "_elementtree.c"
      case 11: // $bb10
        HEAP[$0]=0; //@line 1257 "_elementtree.c"
        __label__ = 12; break; //@line 1257 "_elementtree.c"
      case 12: // $bb11
        var $90=HEAP[$0]; //@line 1241 "_elementtree.c"
        HEAP[$retval]=$90; //@line 1241 "_elementtree.c"
        __label__ = 13; break; //@line 1241 "_elementtree.c"
      case 13: // $return
        var $retval12=HEAP[$retval]; //@line 1241 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1241 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_subscr($self_, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $self=__stackBase__+16;
        var $i=__stackBase__+20;
        var $start=__stackBase__+24;
        var $stop=__stackBase__+28;
        var $step=__stackBase__+32;
        var $slicelen=__stackBase__+36;
        var $cur=__stackBase__+40;
        var $i11=__stackBase__+44;
        var $list=__stackBase__+48;
        var $item21=__stackBase__+52;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$item_addr]=$item;
        var $1=HEAP[$self__addr]; //@line 1263 "_elementtree.c"
        var $2=$1; //@line 1263 "_elementtree.c"
        HEAP[$self]=$2; //@line 1263 "_elementtree.c"
        var $3=HEAP[$item_addr]; //@line 1269 "_elementtree.c"
        var $4=(($3+4)&4294967295); //@line 1269 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1269 "_elementtree.c"
        var $6=(($5+48)&4294967295); //@line 1269 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1269 "_elementtree.c"
        var $8=($7)==0; //@line 1269 "_elementtree.c"
        if ($8) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 1269 "_elementtree.c"
      case 1: // $bb
        var $9=HEAP[$item_addr]; //@line 1269 "_elementtree.c"
        var $10=(($9+4)&4294967295); //@line 1269 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1269 "_elementtree.c"
        var $12=(($11+84)&4294967295); //@line 1269 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1269 "_elementtree.c"
        var $14=($13) & 131072; //@line 1269 "_elementtree.c"
        var $15=((($14))|0)==0; //@line 1269 "_elementtree.c"
        if ($15) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 1269 "_elementtree.c"
      case 2: // $bb1
        var $16=HEAP[$item_addr]; //@line 1269 "_elementtree.c"
        var $17=(($16+4)&4294967295); //@line 1269 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1269 "_elementtree.c"
        var $19=(($18+48)&4294967295); //@line 1269 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1269 "_elementtree.c"
        var $21=(($20+152)&4294967295); //@line 1269 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1269 "_elementtree.c"
        var $23=($22)==0; //@line 1269 "_elementtree.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 1269 "_elementtree.c"
      case 3: // $bb2
        var $24=HEAP[_PyExc_IndexError]; //@line 1270 "_elementtree.c"
        var $25=HEAP[$item_addr]; //@line 1270 "_elementtree.c"
        var $26=_PyNumber_AsSsize_t($25, $24); //@line 1270 "_elementtree.c"
        HEAP[$i]=$26; //@line 1270 "_elementtree.c"
        var $27=HEAP[$i]; //@line 1273 "_elementtree.c"
        var $28=((($27))|0)==-1; //@line 1273 "_elementtree.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1273 "_elementtree.c"
      case 4: // $bb3
        var $29=_PyErr_Occurred(); //@line 1273 "_elementtree.c"
        var $30=($29)!=0; //@line 1273 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1273 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 1274 "_elementtree.c"
        __label__ = 24; break; //@line 1274 "_elementtree.c"
      case 6: // $bb5
        var $31=HEAP[$i]; //@line 1276 "_elementtree.c"
        var $32=((($31))|0) < 0; //@line 1276 "_elementtree.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1276 "_elementtree.c"
      case 7: // $bb6
        var $33=HEAP[$self]; //@line 1276 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 1276 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1276 "_elementtree.c"
        var $36=($35)!=0; //@line 1276 "_elementtree.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1276 "_elementtree.c"
      case 8: // $bb7
        var $37=HEAP[$self]; //@line 1277 "_elementtree.c"
        var $38=(($37+20)&4294967295); //@line 1277 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1277 "_elementtree.c"
        var $40=(($39+4)&4294967295); //@line 1277 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1277 "_elementtree.c"
        var $42=HEAP[$i]; //@line 1277 "_elementtree.c"
        var $43=((($41) + ($42))&4294967295); //@line 1277 "_elementtree.c"
        HEAP[$i]=$43; //@line 1277 "_elementtree.c"
        __label__ = 9; break; //@line 1277 "_elementtree.c"
      case 9: // $bb8
        var $44=HEAP[$self__addr]; //@line 1278 "_elementtree.c"
        var $45=HEAP[$i]; //@line 1278 "_elementtree.c"
        var $46=_element_getitem($44, $45); //@line 1278 "_elementtree.c"
        HEAP[$0]=$46; //@line 1278 "_elementtree.c"
        __label__ = 24; break; //@line 1278 "_elementtree.c"
      case 10: // $bb9
        var $47=HEAP[$item_addr]; //@line 1280 "_elementtree.c"
        var $48=(($47+4)&4294967295); //@line 1280 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1280 "_elementtree.c"
        var $50=($49)==(_PySlice_Type); //@line 1280 "_elementtree.c"
        if ($50) { __label__ = 11; break; } else { __label__ = 23; break; } //@line 1280 "_elementtree.c"
      case 11: // $bb10
        var $51=HEAP[$self]; //@line 1284 "_elementtree.c"
        var $52=(($51+20)&4294967295); //@line 1284 "_elementtree.c"
        var $53=HEAP[$52]; //@line 1284 "_elementtree.c"
        var $54=($53)==0; //@line 1284 "_elementtree.c"
        if ($54) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1284 "_elementtree.c"
      case 12: // $bb12
        var $55=_PyList_New(0); //@line 1285 "_elementtree.c"
        HEAP[$0]=$55; //@line 1285 "_elementtree.c"
        __label__ = 24; break; //@line 1285 "_elementtree.c"
      case 13: // $bb13
        var $56=HEAP[$self]; //@line 1287 "_elementtree.c"
        var $57=(($56+20)&4294967295); //@line 1287 "_elementtree.c"
        var $58=HEAP[$57]; //@line 1287 "_elementtree.c"
        var $59=(($58+4)&4294967295); //@line 1287 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1287 "_elementtree.c"
        var $61=HEAP[$item_addr]; //@line 1287 "_elementtree.c"
        var $62=$61; //@line 1287 "_elementtree.c"
        var $63=_PySlice_GetIndicesEx($62, $60, $start, $stop, $step, $slicelen); //@line 1287 "_elementtree.c"
        var $64=((($63))|0) < 0; //@line 1287 "_elementtree.c"
        if ($64) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1287 "_elementtree.c"
      case 14: // $bb14
        HEAP[$0]=0; //@line 1290 "_elementtree.c"
        __label__ = 24; break; //@line 1290 "_elementtree.c"
      case 15: // $bb15
        var $65=HEAP[$slicelen]; //@line 1293 "_elementtree.c"
        var $66=((($65))|0) <= 0; //@line 1293 "_elementtree.c"
        if ($66) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1293 "_elementtree.c"
      case 16: // $bb16
        var $67=_PyList_New(0); //@line 1294 "_elementtree.c"
        HEAP[$0]=$67; //@line 1294 "_elementtree.c"
        __label__ = 24; break; //@line 1294 "_elementtree.c"
      case 17: // $bb17
        var $68=HEAP[$slicelen]; //@line 1296 "_elementtree.c"
        var $69=_PyList_New($68); //@line 1296 "_elementtree.c"
        HEAP[$list]=$69; //@line 1296 "_elementtree.c"
        var $70=HEAP[$list]; //@line 1297 "_elementtree.c"
        var $71=($70)==0; //@line 1297 "_elementtree.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1297 "_elementtree.c"
      case 18: // $bb18
        HEAP[$0]=0; //@line 1298 "_elementtree.c"
        __label__ = 24; break; //@line 1298 "_elementtree.c"
      case 19: // $bb19
        var $72=HEAP[$start]; //@line 1300 "_elementtree.c"
        HEAP[$cur]=$72; //@line 1300 "_elementtree.c"
        HEAP[$i11]=0; //@line 1300 "_elementtree.c"
        __label__ = 21; break; //@line 1300 "_elementtree.c"
      case 20: // $bb20
        var $73=HEAP[$self]; //@line 1302 "_elementtree.c"
        var $74=(($73+20)&4294967295); //@line 1302 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1302 "_elementtree.c"
        var $76=(($75+12)&4294967295); //@line 1302 "_elementtree.c"
        var $77=HEAP[$76]; //@line 1302 "_elementtree.c"
        var $78=HEAP[$cur]; //@line 1302 "_elementtree.c"
        var $79=(($77+4*$78)&4294967295); //@line 1302 "_elementtree.c"
        var $80=HEAP[$79]; //@line 1302 "_elementtree.c"
        HEAP[$item21]=$80; //@line 1302 "_elementtree.c"
        var $81=HEAP[$item21]; //@line 1303 "_elementtree.c"
        var $82=(($81)&4294967295); //@line 1303 "_elementtree.c"
        var $83=HEAP[$82]; //@line 1303 "_elementtree.c"
        var $84=((($83) + 1)&4294967295); //@line 1303 "_elementtree.c"
        var $85=HEAP[$item21]; //@line 1303 "_elementtree.c"
        var $86=(($85)&4294967295); //@line 1303 "_elementtree.c"
        HEAP[$86]=$84; //@line 1303 "_elementtree.c"
        var $87=HEAP[$list]; //@line 1304 "_elementtree.c"
        var $88=$87; //@line 1304 "_elementtree.c"
        var $89=(($88+12)&4294967295); //@line 1304 "_elementtree.c"
        var $90=HEAP[$89]; //@line 1304 "_elementtree.c"
        var $91=HEAP[$i11]; //@line 1304 "_elementtree.c"
        var $92=(($90+4*$91)&4294967295); //@line 1304 "_elementtree.c"
        var $93=HEAP[$item21]; //@line 1304 "_elementtree.c"
        HEAP[$92]=$93; //@line 1304 "_elementtree.c"
        var $94=HEAP[$step]; //@line 1301 "_elementtree.c"
        var $95=HEAP[$cur]; //@line 1301 "_elementtree.c"
        var $96=((($95) + ($94))&4294967295); //@line 1301 "_elementtree.c"
        HEAP[$cur]=$96; //@line 1301 "_elementtree.c"
        var $97=HEAP[$i11]; //@line 1301 "_elementtree.c"
        var $98=((($97) + 1)&4294967295); //@line 1301 "_elementtree.c"
        HEAP[$i11]=$98; //@line 1301 "_elementtree.c"
        __label__ = 21; break; //@line 1301 "_elementtree.c"
      case 21: // $bb22
        var $99=HEAP[$slicelen]; //@line 1300 "_elementtree.c"
        var $100=HEAP[$i11]; //@line 1300 "_elementtree.c"
        var $101=((($100))|0) < ((($99))|0); //@line 1300 "_elementtree.c"
        if ($101) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 1300 "_elementtree.c"
      case 22: // $bb23
        var $102=HEAP[$list]; //@line 1307 "_elementtree.c"
        HEAP[$0]=$102; //@line 1307 "_elementtree.c"
        __label__ = 24; break; //@line 1307 "_elementtree.c"
      case 23: // $bb24
        var $103=HEAP[_PyExc_TypeError]; //@line 1311 "_elementtree.c"
        _PyErr_SetString($103, ((__str40)&4294967295)); //@line 1311 "_elementtree.c"
        HEAP[$0]=0; //@line 1313 "_elementtree.c"
        __label__ = 24; break; //@line 1313 "_elementtree.c"
      case 24: // $bb25
        var $104=HEAP[$0]; //@line 1274 "_elementtree.c"
        HEAP[$retval]=$104; //@line 1274 "_elementtree.c"
        __label__ = 25; break; //@line 1274 "_elementtree.c"
      case 25: // $return
        var $retval26=HEAP[$retval]; //@line 1274 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1274 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_ass_subscr($self_, $item, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 72; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 72);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $item_addr=__stackBase__+4;
        var $value_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $iftmp_171=__stackBase__+16;
        var $0=__stackBase__+20;
        var $self=__stackBase__+24;
        var $i=__stackBase__+28;
        var $start=__stackBase__+32;
        var $stop=__stackBase__+36;
        var $step=__stackBase__+40;
        var $slicelen=__stackBase__+44;
        var $newlen=__stackBase__+48;
        var $cur=__stackBase__+52;
        var $i11=__stackBase__+56;
        var $recycle=__stackBase__+60;
        var $seq=__stackBase__+64;
        var $element=__stackBase__+68;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$item_addr]=$item;
        HEAP[$value_addr]=$value;
        var $1=HEAP[$self__addr]; //@line 1320 "_elementtree.c"
        var $2=$1; //@line 1320 "_elementtree.c"
        HEAP[$self]=$2; //@line 1320 "_elementtree.c"
        var $3=HEAP[$item_addr]; //@line 1326 "_elementtree.c"
        var $4=(($3+4)&4294967295); //@line 1326 "_elementtree.c"
        var $5=HEAP[$4]; //@line 1326 "_elementtree.c"
        var $6=(($5+48)&4294967295); //@line 1326 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1326 "_elementtree.c"
        var $8=($7)==0; //@line 1326 "_elementtree.c"
        if ($8) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 1326 "_elementtree.c"
      case 1: // $bb
        var $9=HEAP[$item_addr]; //@line 1326 "_elementtree.c"
        var $10=(($9+4)&4294967295); //@line 1326 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1326 "_elementtree.c"
        var $12=(($11+84)&4294967295); //@line 1326 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1326 "_elementtree.c"
        var $14=($13) & 131072; //@line 1326 "_elementtree.c"
        var $15=((($14))|0)==0; //@line 1326 "_elementtree.c"
        if ($15) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 1326 "_elementtree.c"
      case 2: // $bb1
        var $16=HEAP[$item_addr]; //@line 1326 "_elementtree.c"
        var $17=(($16+4)&4294967295); //@line 1326 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1326 "_elementtree.c"
        var $19=(($18+48)&4294967295); //@line 1326 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1326 "_elementtree.c"
        var $21=(($20+152)&4294967295); //@line 1326 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1326 "_elementtree.c"
        var $23=($22)==0; //@line 1326 "_elementtree.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 1326 "_elementtree.c"
      case 3: // $bb2
        var $24=HEAP[_PyExc_IndexError]; //@line 1327 "_elementtree.c"
        var $25=HEAP[$item_addr]; //@line 1327 "_elementtree.c"
        var $26=_PyNumber_AsSsize_t($25, $24); //@line 1327 "_elementtree.c"
        HEAP[$i]=$26; //@line 1327 "_elementtree.c"
        var $27=HEAP[$i]; //@line 1330 "_elementtree.c"
        var $28=((($27))|0)==-1; //@line 1330 "_elementtree.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1330 "_elementtree.c"
      case 4: // $bb3
        var $29=_PyErr_Occurred(); //@line 1330 "_elementtree.c"
        var $30=($29)!=0; //@line 1330 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1330 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=-1; //@line 1331 "_elementtree.c"
        __label__ = 61; break; //@line 1331 "_elementtree.c"
      case 6: // $bb5
        var $31=HEAP[$i]; //@line 1333 "_elementtree.c"
        var $32=((($31))|0) < 0; //@line 1333 "_elementtree.c"
        if ($32) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1333 "_elementtree.c"
      case 7: // $bb6
        var $33=HEAP[$self]; //@line 1333 "_elementtree.c"
        var $34=(($33+20)&4294967295); //@line 1333 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1333 "_elementtree.c"
        var $36=($35)!=0; //@line 1333 "_elementtree.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1333 "_elementtree.c"
      case 8: // $bb7
        var $37=HEAP[$self]; //@line 1334 "_elementtree.c"
        var $38=(($37+20)&4294967295); //@line 1334 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1334 "_elementtree.c"
        var $40=(($39+4)&4294967295); //@line 1334 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1334 "_elementtree.c"
        var $42=HEAP[$i]; //@line 1334 "_elementtree.c"
        var $43=((($41) + ($42))&4294967295); //@line 1334 "_elementtree.c"
        HEAP[$i]=$43; //@line 1334 "_elementtree.c"
        __label__ = 9; break; //@line 1334 "_elementtree.c"
      case 9: // $bb8
        var $44=HEAP[$self__addr]; //@line 1335 "_elementtree.c"
        var $45=HEAP[$i]; //@line 1335 "_elementtree.c"
        var $46=HEAP[$value_addr]; //@line 1335 "_elementtree.c"
        var $47=_element_setitem($44, $45, $46); //@line 1335 "_elementtree.c"
        HEAP[$0]=$47; //@line 1335 "_elementtree.c"
        __label__ = 61; break; //@line 1335 "_elementtree.c"
      case 10: // $bb9
        var $48=HEAP[$item_addr]; //@line 1337 "_elementtree.c"
        var $49=(($48+4)&4294967295); //@line 1337 "_elementtree.c"
        var $50=HEAP[$49]; //@line 1337 "_elementtree.c"
        var $51=($50)==(_PySlice_Type); //@line 1337 "_elementtree.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 60; break; } //@line 1337 "_elementtree.c"
      case 11: // $bb10
        HEAP[$recycle]=0; //@line 1340 "_elementtree.c"
        HEAP[$seq]=0; //@line 1341 "_elementtree.c"
        var $52=HEAP[$self]; //@line 1343 "_elementtree.c"
        var $53=(($52+20)&4294967295); //@line 1343 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1343 "_elementtree.c"
        var $55=($54)==0; //@line 1343 "_elementtree.c"
        if ($55) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1343 "_elementtree.c"
      case 12: // $bb12
        var $56=HEAP[$self]; //@line 1344 "_elementtree.c"
        var $57=_element_new_extra($56, 0); //@line 1344 "_elementtree.c"
        __label__ = 13; break; //@line 1344 "_elementtree.c"
      case 13: // $bb13
        var $58=HEAP[$self]; //@line 1346 "_elementtree.c"
        var $59=(($58+20)&4294967295); //@line 1346 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1346 "_elementtree.c"
        var $61=(($60+4)&4294967295); //@line 1346 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1346 "_elementtree.c"
        var $63=HEAP[$item_addr]; //@line 1346 "_elementtree.c"
        var $64=$63; //@line 1346 "_elementtree.c"
        var $65=_PySlice_GetIndicesEx($64, $62, $start, $stop, $step, $slicelen); //@line 1346 "_elementtree.c"
        var $66=((($65))|0) < 0; //@line 1346 "_elementtree.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1346 "_elementtree.c"
      case 14: // $bb14
        HEAP[$0]=-1; //@line 1349 "_elementtree.c"
        __label__ = 61; break; //@line 1349 "_elementtree.c"
      case 15: // $bb15
        var $67=HEAP[$value_addr]; //@line 1352 "_elementtree.c"
        var $68=($67)==0; //@line 1352 "_elementtree.c"
        if ($68) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1352 "_elementtree.c"
      case 16: // $bb16
        HEAP[$newlen]=0; //@line 1353 "_elementtree.c"
        __label__ = 20; break; //@line 1353 "_elementtree.c"
      case 17: // $bb17
        var $69=HEAP[$value_addr]; //@line 1355 "_elementtree.c"
        var $70=_PySequence_Fast($69, ((__str1)&4294967295)); //@line 1355 "_elementtree.c"
        HEAP[$seq]=$70; //@line 1355 "_elementtree.c"
        var $71=HEAP[$seq]; //@line 1356 "_elementtree.c"
        var $72=($71)==0; //@line 1356 "_elementtree.c"
        if ($72) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1356 "_elementtree.c"
      case 18: // $bb18
        var $73=HEAP[$value_addr]; //@line 1357 "_elementtree.c"
        var $74=(($73+4)&4294967295); //@line 1357 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1357 "_elementtree.c"
        var $76=(($75+12)&4294967295); //@line 1357 "_elementtree.c"
        var $77=HEAP[$76]; //@line 1357 "_elementtree.c"
        var $78=HEAP[_PyExc_TypeError]; //@line 1357 "_elementtree.c"
        var $79=_PyErr_Format($78, ((__str10)&4294967295), $77); //@line 1357 "_elementtree.c"
        HEAP[$0]=-1; //@line 1361 "_elementtree.c"
        __label__ = 61; break; //@line 1361 "_elementtree.c"
      case 19: // $bb19
        var $80=HEAP[$seq]; //@line 1363 "_elementtree.c"
        var $81=_PySequence_Size($80); //@line 1363 "_elementtree.c"
        HEAP[$newlen]=$81; //@line 1363 "_elementtree.c"
        __label__ = 20; break; //@line 1363 "_elementtree.c"
      case 20: // $bb20
        var $82=HEAP[$step]; //@line 1366 "_elementtree.c"
        var $83=((($82))|0)!=1; //@line 1366 "_elementtree.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 1366 "_elementtree.c"
      case 21: // $bb21
        var $84=HEAP[$slicelen]; //@line 1366 "_elementtree.c"
        var $85=HEAP[$newlen]; //@line 1366 "_elementtree.c"
        var $86=((($85))|0)!=((($84))|0); //@line 1366 "_elementtree.c"
        if ($86) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1366 "_elementtree.c"
      case 22: // $bb22
        var $87=HEAP[$slicelen]; //@line 1368 "_elementtree.c"
        var $88=HEAP[_PyExc_ValueError]; //@line 1368 "_elementtree.c"
        var $89=HEAP[$newlen]; //@line 1368 "_elementtree.c"
        var $90=_PyErr_Format($88, ((__str41)&4294967295), $89, $87); //@line 1368 "_elementtree.c"
        HEAP[$0]=-1; //@line 1378 "_elementtree.c"
        __label__ = 61; break; //@line 1378 "_elementtree.c"
      case 23: // $bb23
        var $91=HEAP[$slicelen]; //@line 1383 "_elementtree.c"
        var $92=HEAP[$newlen]; //@line 1383 "_elementtree.c"
        var $93=((($92))|0) > ((($91))|0); //@line 1383 "_elementtree.c"
        if ($93) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1383 "_elementtree.c"
      case 24: // $bb24
        var $94=HEAP[$slicelen]; //@line 1384 "_elementtree.c"
        var $95=HEAP[$newlen]; //@line 1384 "_elementtree.c"
        var $96=((($95) - ($94))&4294967295); //@line 1384 "_elementtree.c"
        var $97=HEAP[$self]; //@line 1384 "_elementtree.c"
        var $98=_element_resize($97, $96); //@line 1384 "_elementtree.c"
        var $99=((($98))|0) < 0; //@line 1384 "_elementtree.c"
        if ($99) { __label__ = 25; break; } else { __label__ = 29; break; } //@line 1384 "_elementtree.c"
      case 25: // $bb25
        var $100=HEAP[$seq]; //@line 1385 "_elementtree.c"
        var $101=($100)!=0; //@line 1385 "_elementtree.c"
        if ($101) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 1385 "_elementtree.c"
      case 26: // $bb26
        var $102=HEAP[$seq]; //@line 1386 "_elementtree.c"
        var $103=(($102)&4294967295); //@line 1386 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1386 "_elementtree.c"
        var $105=((($104) - 1)&4294967295); //@line 1386 "_elementtree.c"
        var $106=HEAP[$seq]; //@line 1386 "_elementtree.c"
        var $107=(($106)&4294967295); //@line 1386 "_elementtree.c"
        HEAP[$107]=$105; //@line 1386 "_elementtree.c"
        var $108=HEAP[$seq]; //@line 1386 "_elementtree.c"
        var $109=(($108)&4294967295); //@line 1386 "_elementtree.c"
        var $110=HEAP[$109]; //@line 1386 "_elementtree.c"
        var $111=((($110))|0)==0; //@line 1386 "_elementtree.c"
        if ($111) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1386 "_elementtree.c"
      case 27: // $bb27
        var $112=HEAP[$seq]; //@line 1386 "_elementtree.c"
        var $113=(($112+4)&4294967295); //@line 1386 "_elementtree.c"
        var $114=HEAP[$113]; //@line 1386 "_elementtree.c"
        var $115=(($114+24)&4294967295); //@line 1386 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1386 "_elementtree.c"
        var $117=HEAP[$seq]; //@line 1386 "_elementtree.c"
        FUNCTION_TABLE[$116]($117); //@line 1386 "_elementtree.c"
        __label__ = 28; break; //@line 1386 "_elementtree.c"
      case 28: // $bb28
        HEAP[$0]=-1; //@line 1388 "_elementtree.c"
        __label__ = 61; break; //@line 1388 "_elementtree.c"
      case 29: // $bb29
        var $118=HEAP[$slicelen]; //@line 1392 "_elementtree.c"
        var $119=((($118))|0) > 0; //@line 1392 "_elementtree.c"
        if ($119) { __label__ = 30; break; } else { __label__ = 38; break; } //@line 1392 "_elementtree.c"
      case 30: // $bb30
        var $120=HEAP[$slicelen]; //@line 1396 "_elementtree.c"
        var $121=_PyList_New($120); //@line 1396 "_elementtree.c"
        HEAP[$recycle]=$121; //@line 1396 "_elementtree.c"
        var $122=HEAP[$recycle]; //@line 1397 "_elementtree.c"
        var $123=($122)==0; //@line 1397 "_elementtree.c"
        if ($123) { __label__ = 31; break; } else { __label__ = 35; break; } //@line 1397 "_elementtree.c"
      case 31: // $bb31
        var $124=HEAP[$seq]; //@line 1398 "_elementtree.c"
        var $125=($124)!=0; //@line 1398 "_elementtree.c"
        if ($125) { __label__ = 32; break; } else { __label__ = 34; break; } //@line 1398 "_elementtree.c"
      case 32: // $bb32
        var $126=HEAP[$seq]; //@line 1399 "_elementtree.c"
        var $127=(($126)&4294967295); //@line 1399 "_elementtree.c"
        var $128=HEAP[$127]; //@line 1399 "_elementtree.c"
        var $129=((($128) - 1)&4294967295); //@line 1399 "_elementtree.c"
        var $130=HEAP[$seq]; //@line 1399 "_elementtree.c"
        var $131=(($130)&4294967295); //@line 1399 "_elementtree.c"
        HEAP[$131]=$129; //@line 1399 "_elementtree.c"
        var $132=HEAP[$seq]; //@line 1399 "_elementtree.c"
        var $133=(($132)&4294967295); //@line 1399 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1399 "_elementtree.c"
        var $135=((($134))|0)==0; //@line 1399 "_elementtree.c"
        if ($135) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1399 "_elementtree.c"
      case 33: // $bb33
        var $136=HEAP[$seq]; //@line 1399 "_elementtree.c"
        var $137=(($136+4)&4294967295); //@line 1399 "_elementtree.c"
        var $138=HEAP[$137]; //@line 1399 "_elementtree.c"
        var $139=(($138+24)&4294967295); //@line 1399 "_elementtree.c"
        var $140=HEAP[$139]; //@line 1399 "_elementtree.c"
        var $141=HEAP[$seq]; //@line 1399 "_elementtree.c"
        FUNCTION_TABLE[$140]($141); //@line 1399 "_elementtree.c"
        __label__ = 34; break; //@line 1399 "_elementtree.c"
      case 34: // $bb34
        HEAP[$0]=-1; //@line 1401 "_elementtree.c"
        __label__ = 61; break; //@line 1401 "_elementtree.c"
      case 35: // $bb35
        var $142=HEAP[$start]; //@line 1403 "_elementtree.c"
        HEAP[$cur]=$142; //@line 1403 "_elementtree.c"
        HEAP[$i11]=0; //@line 1403 "_elementtree.c"
        __label__ = 37; break; //@line 1403 "_elementtree.c"
      case 36: // $bb36
        var $143=HEAP[$recycle]; //@line 1405 "_elementtree.c"
        var $144=$143; //@line 1405 "_elementtree.c"
        var $145=(($144+12)&4294967295); //@line 1405 "_elementtree.c"
        var $146=HEAP[$145]; //@line 1405 "_elementtree.c"
        var $147=HEAP[$self]; //@line 1405 "_elementtree.c"
        var $148=(($147+20)&4294967295); //@line 1405 "_elementtree.c"
        var $149=HEAP[$148]; //@line 1405 "_elementtree.c"
        var $150=(($149+12)&4294967295); //@line 1405 "_elementtree.c"
        var $151=HEAP[$150]; //@line 1405 "_elementtree.c"
        var $152=HEAP[$cur]; //@line 1405 "_elementtree.c"
        var $153=(($151+4*$152)&4294967295); //@line 1405 "_elementtree.c"
        var $154=HEAP[$153]; //@line 1405 "_elementtree.c"
        var $155=HEAP[$i11]; //@line 1405 "_elementtree.c"
        var $156=(($146+4*$155)&4294967295); //@line 1405 "_elementtree.c"
        HEAP[$156]=$154; //@line 1405 "_elementtree.c"
        var $157=HEAP[$step]; //@line 1404 "_elementtree.c"
        var $158=HEAP[$cur]; //@line 1404 "_elementtree.c"
        var $159=((($158) + ($157))&4294967295); //@line 1404 "_elementtree.c"
        HEAP[$cur]=$159; //@line 1404 "_elementtree.c"
        var $160=HEAP[$i11]; //@line 1404 "_elementtree.c"
        var $161=((($160) + 1)&4294967295); //@line 1404 "_elementtree.c"
        HEAP[$i11]=$161; //@line 1404 "_elementtree.c"
        __label__ = 37; break; //@line 1404 "_elementtree.c"
      case 37: // $bb37
        var $162=HEAP[$slicelen]; //@line 1403 "_elementtree.c"
        var $163=HEAP[$i11]; //@line 1403 "_elementtree.c"
        var $164=((($163))|0) < ((($162))|0); //@line 1403 "_elementtree.c"
        if ($164) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 1403 "_elementtree.c"
      case 38: // $bb38
        var $165=HEAP[$slicelen]; //@line 1408 "_elementtree.c"
        var $166=HEAP[$newlen]; //@line 1408 "_elementtree.c"
        var $167=((($166))|0) < ((($165))|0); //@line 1408 "_elementtree.c"
        if ($167) { __label__ = 39; break; } else { __label__ = 43; break; } //@line 1408 "_elementtree.c"
      case 39: // $bb39
        var $168=HEAP[$stop]; //@line 1410 "_elementtree.c"
        HEAP[$i11]=$168; //@line 1410 "_elementtree.c"
        __label__ = 41; break; //@line 1410 "_elementtree.c"
      case 40: // $bb40
        var $169=HEAP[$self]; //@line 1411 "_elementtree.c"
        var $170=(($169+20)&4294967295); //@line 1411 "_elementtree.c"
        var $171=HEAP[$170]; //@line 1411 "_elementtree.c"
        var $172=(($171+12)&4294967295); //@line 1411 "_elementtree.c"
        var $173=HEAP[$172]; //@line 1411 "_elementtree.c"
        var $174=HEAP[$i11]; //@line 1411 "_elementtree.c"
        var $175=HEAP[$newlen]; //@line 1411 "_elementtree.c"
        var $176=((($174) + ($175))&4294967295); //@line 1411 "_elementtree.c"
        var $177=HEAP[$slicelen]; //@line 1411 "_elementtree.c"
        var $178=((($176) - ($177))&4294967295); //@line 1411 "_elementtree.c"
        var $179=HEAP[$self]; //@line 1411 "_elementtree.c"
        var $180=(($179+20)&4294967295); //@line 1411 "_elementtree.c"
        var $181=HEAP[$180]; //@line 1411 "_elementtree.c"
        var $182=(($181+12)&4294967295); //@line 1411 "_elementtree.c"
        var $183=HEAP[$182]; //@line 1411 "_elementtree.c"
        var $184=HEAP[$i11]; //@line 1411 "_elementtree.c"
        var $185=(($183+4*$184)&4294967295); //@line 1411 "_elementtree.c"
        var $186=HEAP[$185]; //@line 1411 "_elementtree.c"
        var $187=(($173+4*$178)&4294967295); //@line 1411 "_elementtree.c"
        HEAP[$187]=$186; //@line 1411 "_elementtree.c"
        var $188=HEAP[$i11]; //@line 1410 "_elementtree.c"
        var $189=((($188) + 1)&4294967295); //@line 1410 "_elementtree.c"
        HEAP[$i11]=$189; //@line 1410 "_elementtree.c"
        __label__ = 41; break; //@line 1410 "_elementtree.c"
      case 41: // $bb41
        var $190=HEAP[$self]; //@line 1410 "_elementtree.c"
        var $191=(($190+20)&4294967295); //@line 1410 "_elementtree.c"
        var $192=HEAP[$191]; //@line 1410 "_elementtree.c"
        var $193=(($192+4)&4294967295); //@line 1410 "_elementtree.c"
        var $194=HEAP[$193]; //@line 1410 "_elementtree.c"
        var $195=HEAP[$i11]; //@line 1410 "_elementtree.c"
        var $196=((($194))|0) > ((($195))|0); //@line 1410 "_elementtree.c"
        if ($196) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 1410 "_elementtree.c"
      case 42: // $bb42
        __label__ = 47; break; //@line 1410 "_elementtree.c"
      case 43: // $bb43
        var $197=HEAP[$slicelen]; //@line 1412 "_elementtree.c"
        var $198=HEAP[$newlen]; //@line 1412 "_elementtree.c"
        var $199=((($198))|0) > ((($197))|0); //@line 1412 "_elementtree.c"
        if ($199) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 1412 "_elementtree.c"
      case 44: // $bb44
        var $200=HEAP[$self]; //@line 1414 "_elementtree.c"
        var $201=(($200+20)&4294967295); //@line 1414 "_elementtree.c"
        var $202=HEAP[$201]; //@line 1414 "_elementtree.c"
        var $203=(($202+4)&4294967295); //@line 1414 "_elementtree.c"
        var $204=HEAP[$203]; //@line 1414 "_elementtree.c"
        var $205=((($204) - 1)&4294967295); //@line 1414 "_elementtree.c"
        HEAP[$i11]=$205; //@line 1414 "_elementtree.c"
        __label__ = 46; break; //@line 1414 "_elementtree.c"
      case 45: // $bb45
        var $206=HEAP[$self]; //@line 1415 "_elementtree.c"
        var $207=(($206+20)&4294967295); //@line 1415 "_elementtree.c"
        var $208=HEAP[$207]; //@line 1415 "_elementtree.c"
        var $209=(($208+12)&4294967295); //@line 1415 "_elementtree.c"
        var $210=HEAP[$209]; //@line 1415 "_elementtree.c"
        var $211=HEAP[$i11]; //@line 1415 "_elementtree.c"
        var $212=HEAP[$newlen]; //@line 1415 "_elementtree.c"
        var $213=((($211) + ($212))&4294967295); //@line 1415 "_elementtree.c"
        var $214=HEAP[$slicelen]; //@line 1415 "_elementtree.c"
        var $215=((($213) - ($214))&4294967295); //@line 1415 "_elementtree.c"
        var $216=HEAP[$self]; //@line 1415 "_elementtree.c"
        var $217=(($216+20)&4294967295); //@line 1415 "_elementtree.c"
        var $218=HEAP[$217]; //@line 1415 "_elementtree.c"
        var $219=(($218+12)&4294967295); //@line 1415 "_elementtree.c"
        var $220=HEAP[$219]; //@line 1415 "_elementtree.c"
        var $221=HEAP[$i11]; //@line 1415 "_elementtree.c"
        var $222=(($220+4*$221)&4294967295); //@line 1415 "_elementtree.c"
        var $223=HEAP[$222]; //@line 1415 "_elementtree.c"
        var $224=(($210+4*$215)&4294967295); //@line 1415 "_elementtree.c"
        HEAP[$224]=$223; //@line 1415 "_elementtree.c"
        var $225=HEAP[$i11]; //@line 1414 "_elementtree.c"
        var $226=((($225) - 1)&4294967295); //@line 1414 "_elementtree.c"
        HEAP[$i11]=$226; //@line 1414 "_elementtree.c"
        __label__ = 46; break; //@line 1414 "_elementtree.c"
      case 46: // $bb46
        var $227=HEAP[$stop]; //@line 1414 "_elementtree.c"
        var $228=HEAP[$i11]; //@line 1414 "_elementtree.c"
        var $229=((($228))|0) >= ((($227))|0); //@line 1414 "_elementtree.c"
        if ($229) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 1414 "_elementtree.c"
      case 47: // $bb47
        var $230=HEAP[$start]; //@line 1419 "_elementtree.c"
        HEAP[$cur]=$230; //@line 1419 "_elementtree.c"
        HEAP[$i11]=0; //@line 1419 "_elementtree.c"
        __label__ = 52; break; //@line 1419 "_elementtree.c"
      case 48: // $bb48
        var $231=HEAP[$seq]; //@line 1421 "_elementtree.c"
        var $232=(($231+4)&4294967295); //@line 1421 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1421 "_elementtree.c"
        var $234=(($233+84)&4294967295); //@line 1421 "_elementtree.c"
        var $235=HEAP[$234]; //@line 1421 "_elementtree.c"
        var $236=($235) & 33554432; //@line 1421 "_elementtree.c"
        var $237=((($236))|0)!=0; //@line 1421 "_elementtree.c"
        if ($237) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1421 "_elementtree.c"
      case 49: // $bb49
        var $238=HEAP[$seq]; //@line 1421 "_elementtree.c"
        var $239=$238; //@line 1421 "_elementtree.c"
        var $240=(($239+12)&4294967295); //@line 1421 "_elementtree.c"
        var $241=HEAP[$240]; //@line 1421 "_elementtree.c"
        var $242=HEAP[$i11]; //@line 1421 "_elementtree.c"
        var $243=(($241+4*$242)&4294967295); //@line 1421 "_elementtree.c"
        var $244=HEAP[$243]; //@line 1421 "_elementtree.c"
        HEAP[$iftmp_171]=$244; //@line 1421 "_elementtree.c"
        __label__ = 51; break; //@line 1421 "_elementtree.c"
      case 50: // $bb50
        var $245=HEAP[$seq]; //@line 1421 "_elementtree.c"
        var $246=$245; //@line 1421 "_elementtree.c"
        var $247=HEAP[$i11]; //@line 1421 "_elementtree.c"
        var $248=(($246+12)&4294967295); //@line 1421 "_elementtree.c"
        var $249=(($248+$247*4)&4294967295); //@line 1421 "_elementtree.c"
        var $250=HEAP[$249]; //@line 1421 "_elementtree.c"
        HEAP[$iftmp_171]=$250; //@line 1421 "_elementtree.c"
        __label__ = 51; break; //@line 1421 "_elementtree.c"
      case 51: // $bb51
        var $251=HEAP[$iftmp_171]; //@line 1421 "_elementtree.c"
        HEAP[$element]=$251; //@line 1421 "_elementtree.c"
        var $252=HEAP[$element]; //@line 1422 "_elementtree.c"
        var $253=(($252)&4294967295); //@line 1422 "_elementtree.c"
        var $254=HEAP[$253]; //@line 1422 "_elementtree.c"
        var $255=((($254) + 1)&4294967295); //@line 1422 "_elementtree.c"
        var $256=HEAP[$element]; //@line 1422 "_elementtree.c"
        var $257=(($256)&4294967295); //@line 1422 "_elementtree.c"
        HEAP[$257]=$255; //@line 1422 "_elementtree.c"
        var $258=HEAP[$self]; //@line 1423 "_elementtree.c"
        var $259=(($258+20)&4294967295); //@line 1423 "_elementtree.c"
        var $260=HEAP[$259]; //@line 1423 "_elementtree.c"
        var $261=(($260+12)&4294967295); //@line 1423 "_elementtree.c"
        var $262=HEAP[$261]; //@line 1423 "_elementtree.c"
        var $263=HEAP[$cur]; //@line 1423 "_elementtree.c"
        var $264=(($262+4*$263)&4294967295); //@line 1423 "_elementtree.c"
        var $265=HEAP[$element]; //@line 1423 "_elementtree.c"
        HEAP[$264]=$265; //@line 1423 "_elementtree.c"
        var $266=HEAP[$step]; //@line 1420 "_elementtree.c"
        var $267=HEAP[$cur]; //@line 1420 "_elementtree.c"
        var $268=((($267) + ($266))&4294967295); //@line 1420 "_elementtree.c"
        HEAP[$cur]=$268; //@line 1420 "_elementtree.c"
        var $269=HEAP[$i11]; //@line 1420 "_elementtree.c"
        var $270=((($269) + 1)&4294967295); //@line 1420 "_elementtree.c"
        HEAP[$i11]=$270; //@line 1420 "_elementtree.c"
        __label__ = 52; break; //@line 1420 "_elementtree.c"
      case 52: // $bb52
        var $271=HEAP[$i11]; //@line 1419 "_elementtree.c"
        var $272=HEAP[$newlen]; //@line 1419 "_elementtree.c"
        var $273=((($271))|0) < ((($272))|0); //@line 1419 "_elementtree.c"
        if ($273) { __label__ = 48; break; } else { __label__ = 53; break; } //@line 1419 "_elementtree.c"
      case 53: // $bb53
        var $274=HEAP[$self]; //@line 1426 "_elementtree.c"
        var $275=(($274+20)&4294967295); //@line 1426 "_elementtree.c"
        var $276=HEAP[$275]; //@line 1426 "_elementtree.c"
        var $277=HEAP[$self]; //@line 1426 "_elementtree.c"
        var $278=(($277+20)&4294967295); //@line 1426 "_elementtree.c"
        var $279=HEAP[$278]; //@line 1426 "_elementtree.c"
        var $280=(($279+4)&4294967295); //@line 1426 "_elementtree.c"
        var $281=HEAP[$280]; //@line 1426 "_elementtree.c"
        var $282=HEAP[$slicelen]; //@line 1426 "_elementtree.c"
        var $283=HEAP[$newlen]; //@line 1426 "_elementtree.c"
        var $284=((($283) - ($282))&4294967295); //@line 1426 "_elementtree.c"
        var $285=((($281) + ($284))&4294967295); //@line 1426 "_elementtree.c"
        var $286=(($276+4)&4294967295); //@line 1426 "_elementtree.c"
        HEAP[$286]=$285; //@line 1426 "_elementtree.c"
        var $287=HEAP[$seq]; //@line 1428 "_elementtree.c"
        var $288=($287)!=0; //@line 1428 "_elementtree.c"
        if ($288) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 1428 "_elementtree.c"
      case 54: // $bb54
        var $289=HEAP[$seq]; //@line 1429 "_elementtree.c"
        var $290=(($289)&4294967295); //@line 1429 "_elementtree.c"
        var $291=HEAP[$290]; //@line 1429 "_elementtree.c"
        var $292=((($291) - 1)&4294967295); //@line 1429 "_elementtree.c"
        var $293=HEAP[$seq]; //@line 1429 "_elementtree.c"
        var $294=(($293)&4294967295); //@line 1429 "_elementtree.c"
        HEAP[$294]=$292; //@line 1429 "_elementtree.c"
        var $295=HEAP[$seq]; //@line 1429 "_elementtree.c"
        var $296=(($295)&4294967295); //@line 1429 "_elementtree.c"
        var $297=HEAP[$296]; //@line 1429 "_elementtree.c"
        var $298=((($297))|0)==0; //@line 1429 "_elementtree.c"
        if ($298) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1429 "_elementtree.c"
      case 55: // $bb55
        var $299=HEAP[$seq]; //@line 1429 "_elementtree.c"
        var $300=(($299+4)&4294967295); //@line 1429 "_elementtree.c"
        var $301=HEAP[$300]; //@line 1429 "_elementtree.c"
        var $302=(($301+24)&4294967295); //@line 1429 "_elementtree.c"
        var $303=HEAP[$302]; //@line 1429 "_elementtree.c"
        var $304=HEAP[$seq]; //@line 1429 "_elementtree.c"
        FUNCTION_TABLE[$303]($304); //@line 1429 "_elementtree.c"
        __label__ = 56; break; //@line 1429 "_elementtree.c"
      case 56: // $bb56
        var $305=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        var $306=($305)!=0; //@line 1433 "_elementtree.c"
        if ($306) { __label__ = 57; break; } else { __label__ = 59; break; } //@line 1433 "_elementtree.c"
      case 57: // $bb57
        var $307=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        var $308=(($307)&4294967295); //@line 1433 "_elementtree.c"
        var $309=HEAP[$308]; //@line 1433 "_elementtree.c"
        var $310=((($309) - 1)&4294967295); //@line 1433 "_elementtree.c"
        var $311=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        var $312=(($311)&4294967295); //@line 1433 "_elementtree.c"
        HEAP[$312]=$310; //@line 1433 "_elementtree.c"
        var $313=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        var $314=(($313)&4294967295); //@line 1433 "_elementtree.c"
        var $315=HEAP[$314]; //@line 1433 "_elementtree.c"
        var $316=((($315))|0)==0; //@line 1433 "_elementtree.c"
        if ($316) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 1433 "_elementtree.c"
      case 58: // $bb58
        var $317=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        var $318=(($317+4)&4294967295); //@line 1433 "_elementtree.c"
        var $319=HEAP[$318]; //@line 1433 "_elementtree.c"
        var $320=(($319+24)&4294967295); //@line 1433 "_elementtree.c"
        var $321=HEAP[$320]; //@line 1433 "_elementtree.c"
        var $322=HEAP[$recycle]; //@line 1433 "_elementtree.c"
        FUNCTION_TABLE[$321]($322); //@line 1433 "_elementtree.c"
        __label__ = 59; break; //@line 1433 "_elementtree.c"
      case 59: // $bb59
        HEAP[$0]=0; //@line 1435 "_elementtree.c"
        __label__ = 61; break; //@line 1435 "_elementtree.c"
      case 60: // $bb60
        var $323=HEAP[_PyExc_TypeError]; //@line 1438 "_elementtree.c"
        _PyErr_SetString($323, ((__str40)&4294967295)); //@line 1438 "_elementtree.c"
        HEAP[$0]=-1; //@line 1440 "_elementtree.c"
        __label__ = 61; break; //@line 1440 "_elementtree.c"
      case 61: // $bb61
        var $324=HEAP[$0]; //@line 1331 "_elementtree.c"
        HEAP[$retval]=$324; //@line 1331 "_elementtree.c"
        __label__ = 62; break; //@line 1331 "_elementtree.c"
      case 62: // $return
        var $retval62=HEAP[$retval]; //@line 1331 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval62; //@line 1331 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$name_addr]; //@line 1496 "_elementtree.c"
        var $2=_strcmp($1, ((__str59)&4294967295)); //@line 1496 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1496 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1496 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1497 "_elementtree.c"
        var $5=(($4+8)&4294967295); //@line 1497 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1497 "_elementtree.c"
        HEAP[$res]=$6; //@line 1497 "_elementtree.c"
        var $7=HEAP[$res]; //@line 1498 "_elementtree.c"
        var $8=(($7)&4294967295); //@line 1498 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1498 "_elementtree.c"
        var $10=((($9) + 1)&4294967295); //@line 1498 "_elementtree.c"
        var $11=HEAP[$res]; //@line 1498 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 1498 "_elementtree.c"
        HEAP[$12]=$10; //@line 1498 "_elementtree.c"
        var $13=HEAP[$res]; //@line 1499 "_elementtree.c"
        HEAP[$0]=$13; //@line 1499 "_elementtree.c"
        __label__ = 16; break; //@line 1499 "_elementtree.c"
      case 2: // $bb1
        var $14=HEAP[$name_addr]; //@line 1500 "_elementtree.c"
        var $15=_strcmp($14, ((__str60)&4294967295)); //@line 1500 "_elementtree.c"
        var $16=((($15))|0)==0; //@line 1500 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1500 "_elementtree.c"
      case 3: // $bb2
        var $17=HEAP[$self_addr]; //@line 1501 "_elementtree.c"
        var $18=_element_get_text($17); //@line 1501 "_elementtree.c"
        HEAP[$res]=$18; //@line 1501 "_elementtree.c"
        var $19=HEAP[$res]; //@line 1502 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 1502 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1502 "_elementtree.c"
        var $22=((($21) + 1)&4294967295); //@line 1502 "_elementtree.c"
        var $23=HEAP[$res]; //@line 1502 "_elementtree.c"
        var $24=(($23)&4294967295); //@line 1502 "_elementtree.c"
        HEAP[$24]=$22; //@line 1502 "_elementtree.c"
        var $25=HEAP[$res]; //@line 1503 "_elementtree.c"
        HEAP[$0]=$25; //@line 1503 "_elementtree.c"
        __label__ = 16; break; //@line 1503 "_elementtree.c"
      case 4: // $bb3
        var $26=HEAP[$self_addr]; //@line 1507 "_elementtree.c"
        var $27=$26; //@line 1507 "_elementtree.c"
        var $28=HEAP[$name_addr]; //@line 1507 "_elementtree.c"
        var $29=_Py_FindMethod(_element_methods, $27, $28); //@line 1507 "_elementtree.c"
        HEAP[$res]=$29; //@line 1507 "_elementtree.c"
        var $30=HEAP[$res]; //@line 1508 "_elementtree.c"
        var $31=($30)!=0; //@line 1508 "_elementtree.c"
        if ($31) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1508 "_elementtree.c"
      case 5: // $bb4
        var $32=HEAP[$res]; //@line 1509 "_elementtree.c"
        HEAP[$0]=$32; //@line 1509 "_elementtree.c"
        __label__ = 16; break; //@line 1509 "_elementtree.c"
      case 6: // $bb5
        _PyErr_Clear(); //@line 1511 "_elementtree.c"
        var $33=HEAP[$name_addr]; //@line 1514 "_elementtree.c"
        var $34=_strcmp($33, ((__str61)&4294967295)); //@line 1514 "_elementtree.c"
        var $35=((($34))|0)==0; //@line 1514 "_elementtree.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1514 "_elementtree.c"
      case 7: // $bb6
        var $36=HEAP[$self_addr]; //@line 1515 "_elementtree.c"
        var $37=_element_get_tail($36); //@line 1515 "_elementtree.c"
        HEAP[$res]=$37; //@line 1515 "_elementtree.c"
        __label__ = 13; break; //@line 1515 "_elementtree.c"
      case 8: // $bb7
        var $38=HEAP[$name_addr]; //@line 1516 "_elementtree.c"
        var $39=_strcmp($38, ((__str62)&4294967295)); //@line 1516 "_elementtree.c"
        var $40=((($39))|0)==0; //@line 1516 "_elementtree.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1516 "_elementtree.c"
      case 9: // $bb8
        var $41=HEAP[$self_addr]; //@line 1517 "_elementtree.c"
        var $42=(($41+20)&4294967295); //@line 1517 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1517 "_elementtree.c"
        var $44=($43)==0; //@line 1517 "_elementtree.c"
        if ($44) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1517 "_elementtree.c"
      case 10: // $bb9
        var $45=HEAP[$self_addr]; //@line 1518 "_elementtree.c"
        var $46=_element_new_extra($45, 0); //@line 1518 "_elementtree.c"
        __label__ = 11; break; //@line 1518 "_elementtree.c"
      case 11: // $bb10
        var $47=HEAP[$self_addr]; //@line 1519 "_elementtree.c"
        var $48=_element_get_attrib($47); //@line 1519 "_elementtree.c"
        HEAP[$res]=$48; //@line 1519 "_elementtree.c"
        __label__ = 13; break; //@line 1519 "_elementtree.c"
      case 12: // $bb11
        var $49=HEAP[_PyExc_AttributeError]; //@line 1521 "_elementtree.c"
        var $50=HEAP[$name_addr]; //@line 1521 "_elementtree.c"
        _PyErr_SetString($49, $50); //@line 1521 "_elementtree.c"
        HEAP[$0]=0; //@line 1522 "_elementtree.c"
        __label__ = 16; break; //@line 1522 "_elementtree.c"
      case 13: // $bb12
        var $51=HEAP[$res]; //@line 1525 "_elementtree.c"
        var $52=($51)==0; //@line 1525 "_elementtree.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1525 "_elementtree.c"
      case 14: // $bb13
        HEAP[$0]=0; //@line 1526 "_elementtree.c"
        __label__ = 16; break; //@line 1526 "_elementtree.c"
      case 15: // $bb14
        var $53=HEAP[$res]; //@line 1528 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 1528 "_elementtree.c"
        var $55=HEAP[$54]; //@line 1528 "_elementtree.c"
        var $56=((($55) + 1)&4294967295); //@line 1528 "_elementtree.c"
        var $57=HEAP[$res]; //@line 1528 "_elementtree.c"
        var $58=(($57)&4294967295); //@line 1528 "_elementtree.c"
        HEAP[$58]=$56; //@line 1528 "_elementtree.c"
        var $59=HEAP[$res]; //@line 1529 "_elementtree.c"
        HEAP[$0]=$59; //@line 1529 "_elementtree.c"
        __label__ = 16; break; //@line 1529 "_elementtree.c"
      case 16: // $bb15
        var $60=HEAP[$0]; //@line 1499 "_elementtree.c"
        HEAP[$retval]=$60; //@line 1499 "_elementtree.c"
        __label__ = 17; break; //@line 1499 "_elementtree.c"
      case 17: // $return
        var $retval16=HEAP[$retval]; //@line 1499 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1499 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _element_setattr($self, $name, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $value_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        HEAP[$value_addr]=$value;
        var $1=HEAP[$value_addr]; //@line 1535 "_elementtree.c"
        var $2=($1)==0; //@line 1535 "_elementtree.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1535 "_elementtree.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_AttributeError]; //@line 1536 "_elementtree.c"
        _PyErr_SetString($3, ((__str63)&4294967295)); //@line 1536 "_elementtree.c"
        HEAP[$0]=-1; //@line 1540 "_elementtree.c"
        __label__ = 22; break; //@line 1540 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$name_addr]; //@line 1543 "_elementtree.c"
        var $5=_strcmp($4, ((__str59)&4294967295)); //@line 1543 "_elementtree.c"
        var $6=((($5))|0)==0; //@line 1543 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1543 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$self_addr]; //@line 1544 "_elementtree.c"
        var $8=(($7+8)&4294967295); //@line 1544 "_elementtree.c"
        var $9=HEAP[$8]; //@line 1544 "_elementtree.c"
        var $10=(($9)&4294967295); //@line 1544 "_elementtree.c"
        var $11=HEAP[$10]; //@line 1544 "_elementtree.c"
        var $12=((($11) - 1)&4294967295); //@line 1544 "_elementtree.c"
        var $13=(($9)&4294967295); //@line 1544 "_elementtree.c"
        HEAP[$13]=$12; //@line 1544 "_elementtree.c"
        var $14=(($9)&4294967295); //@line 1544 "_elementtree.c"
        var $15=HEAP[$14]; //@line 1544 "_elementtree.c"
        var $16=((($15))|0)==0; //@line 1544 "_elementtree.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1544 "_elementtree.c"
      case 4: // $bb3
        var $17=HEAP[$self_addr]; //@line 1544 "_elementtree.c"
        var $18=(($17+8)&4294967295); //@line 1544 "_elementtree.c"
        var $19=HEAP[$18]; //@line 1544 "_elementtree.c"
        var $20=(($19+4)&4294967295); //@line 1544 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1544 "_elementtree.c"
        var $22=(($21+24)&4294967295); //@line 1544 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1544 "_elementtree.c"
        var $24=HEAP[$self_addr]; //@line 1544 "_elementtree.c"
        var $25=(($24+8)&4294967295); //@line 1544 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1544 "_elementtree.c"
        FUNCTION_TABLE[$23]($26); //@line 1544 "_elementtree.c"
        __label__ = 5; break; //@line 1544 "_elementtree.c"
      case 5: // $bb4
        var $27=HEAP[$self_addr]; //@line 1545 "_elementtree.c"
        var $28=(($27+8)&4294967295); //@line 1545 "_elementtree.c"
        var $29=HEAP[$value_addr]; //@line 1545 "_elementtree.c"
        HEAP[$28]=$29; //@line 1545 "_elementtree.c"
        var $30=HEAP[$self_addr]; //@line 1546 "_elementtree.c"
        var $31=(($30+8)&4294967295); //@line 1546 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1546 "_elementtree.c"
        var $33=(($32)&4294967295); //@line 1546 "_elementtree.c"
        var $34=HEAP[$33]; //@line 1546 "_elementtree.c"
        var $35=((($34) + 1)&4294967295); //@line 1546 "_elementtree.c"
        var $36=(($32)&4294967295); //@line 1546 "_elementtree.c"
        HEAP[$36]=$35; //@line 1546 "_elementtree.c"
        __label__ = 21; break; //@line 1546 "_elementtree.c"
      case 6: // $bb5
        var $37=HEAP[$name_addr]; //@line 1547 "_elementtree.c"
        var $38=_strcmp($37, ((__str60)&4294967295)); //@line 1547 "_elementtree.c"
        var $39=((($38))|0)==0; //@line 1547 "_elementtree.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1547 "_elementtree.c"
      case 7: // $bb6
        var $40=HEAP[$self_addr]; //@line 1548 "_elementtree.c"
        var $41=(($40+12)&4294967295); //@line 1548 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1548 "_elementtree.c"
        var $43=($42); //@line 1548 "_elementtree.c"
        var $44=($43) & -2; //@line 1548 "_elementtree.c"
        var $45=($44); //@line 1548 "_elementtree.c"
        var $46=(($45)&4294967295); //@line 1548 "_elementtree.c"
        var $47=HEAP[$46]; //@line 1548 "_elementtree.c"
        var $48=((($47) - 1)&4294967295); //@line 1548 "_elementtree.c"
        var $49=(($45)&4294967295); //@line 1548 "_elementtree.c"
        HEAP[$49]=$48; //@line 1548 "_elementtree.c"
        var $50=(($45)&4294967295); //@line 1548 "_elementtree.c"
        var $51=HEAP[$50]; //@line 1548 "_elementtree.c"
        var $52=((($51))|0)==0; //@line 1548 "_elementtree.c"
        if ($52) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1548 "_elementtree.c"
      case 8: // $bb7
        var $53=HEAP[$self_addr]; //@line 1548 "_elementtree.c"
        var $54=(($53+12)&4294967295); //@line 1548 "_elementtree.c"
        var $55=HEAP[$54]; //@line 1548 "_elementtree.c"
        var $56=($55); //@line 1548 "_elementtree.c"
        var $57=($56) & -2; //@line 1548 "_elementtree.c"
        var $58=($57); //@line 1548 "_elementtree.c"
        var $59=(($58+4)&4294967295); //@line 1548 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1548 "_elementtree.c"
        var $61=(($60+24)&4294967295); //@line 1548 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1548 "_elementtree.c"
        var $63=HEAP[$self_addr]; //@line 1548 "_elementtree.c"
        var $64=(($63+12)&4294967295); //@line 1548 "_elementtree.c"
        var $65=HEAP[$64]; //@line 1548 "_elementtree.c"
        var $66=($65); //@line 1548 "_elementtree.c"
        var $67=($66) & -2; //@line 1548 "_elementtree.c"
        var $68=($67); //@line 1548 "_elementtree.c"
        FUNCTION_TABLE[$62]($68); //@line 1548 "_elementtree.c"
        __label__ = 9; break; //@line 1548 "_elementtree.c"
      case 9: // $bb8
        var $69=HEAP[$self_addr]; //@line 1549 "_elementtree.c"
        var $70=(($69+12)&4294967295); //@line 1549 "_elementtree.c"
        var $71=HEAP[$value_addr]; //@line 1549 "_elementtree.c"
        HEAP[$70]=$71; //@line 1549 "_elementtree.c"
        var $72=HEAP[$self_addr]; //@line 1550 "_elementtree.c"
        var $73=(($72+12)&4294967295); //@line 1550 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1550 "_elementtree.c"
        var $75=(($74)&4294967295); //@line 1550 "_elementtree.c"
        var $76=HEAP[$75]; //@line 1550 "_elementtree.c"
        var $77=((($76) + 1)&4294967295); //@line 1550 "_elementtree.c"
        var $78=(($74)&4294967295); //@line 1550 "_elementtree.c"
        HEAP[$78]=$77; //@line 1550 "_elementtree.c"
        __label__ = 21; break; //@line 1550 "_elementtree.c"
      case 10: // $bb9
        var $79=HEAP[$name_addr]; //@line 1551 "_elementtree.c"
        var $80=_strcmp($79, ((__str61)&4294967295)); //@line 1551 "_elementtree.c"
        var $81=((($80))|0)==0; //@line 1551 "_elementtree.c"
        if ($81) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1551 "_elementtree.c"
      case 11: // $bb10
        var $82=HEAP[$self_addr]; //@line 1552 "_elementtree.c"
        var $83=(($82+16)&4294967295); //@line 1552 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1552 "_elementtree.c"
        var $85=($84); //@line 1552 "_elementtree.c"
        var $86=($85) & -2; //@line 1552 "_elementtree.c"
        var $87=($86); //@line 1552 "_elementtree.c"
        var $88=(($87)&4294967295); //@line 1552 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1552 "_elementtree.c"
        var $90=((($89) - 1)&4294967295); //@line 1552 "_elementtree.c"
        var $91=(($87)&4294967295); //@line 1552 "_elementtree.c"
        HEAP[$91]=$90; //@line 1552 "_elementtree.c"
        var $92=(($87)&4294967295); //@line 1552 "_elementtree.c"
        var $93=HEAP[$92]; //@line 1552 "_elementtree.c"
        var $94=((($93))|0)==0; //@line 1552 "_elementtree.c"
        if ($94) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1552 "_elementtree.c"
      case 12: // $bb11
        var $95=HEAP[$self_addr]; //@line 1552 "_elementtree.c"
        var $96=(($95+16)&4294967295); //@line 1552 "_elementtree.c"
        var $97=HEAP[$96]; //@line 1552 "_elementtree.c"
        var $98=($97); //@line 1552 "_elementtree.c"
        var $99=($98) & -2; //@line 1552 "_elementtree.c"
        var $100=($99); //@line 1552 "_elementtree.c"
        var $101=(($100+4)&4294967295); //@line 1552 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1552 "_elementtree.c"
        var $103=(($102+24)&4294967295); //@line 1552 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1552 "_elementtree.c"
        var $105=HEAP[$self_addr]; //@line 1552 "_elementtree.c"
        var $106=(($105+16)&4294967295); //@line 1552 "_elementtree.c"
        var $107=HEAP[$106]; //@line 1552 "_elementtree.c"
        var $108=($107); //@line 1552 "_elementtree.c"
        var $109=($108) & -2; //@line 1552 "_elementtree.c"
        var $110=($109); //@line 1552 "_elementtree.c"
        FUNCTION_TABLE[$104]($110); //@line 1552 "_elementtree.c"
        __label__ = 13; break; //@line 1552 "_elementtree.c"
      case 13: // $bb12
        var $111=HEAP[$self_addr]; //@line 1553 "_elementtree.c"
        var $112=(($111+16)&4294967295); //@line 1553 "_elementtree.c"
        var $113=HEAP[$value_addr]; //@line 1553 "_elementtree.c"
        HEAP[$112]=$113; //@line 1553 "_elementtree.c"
        var $114=HEAP[$self_addr]; //@line 1554 "_elementtree.c"
        var $115=(($114+16)&4294967295); //@line 1554 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1554 "_elementtree.c"
        var $117=(($116)&4294967295); //@line 1554 "_elementtree.c"
        var $118=HEAP[$117]; //@line 1554 "_elementtree.c"
        var $119=((($118) + 1)&4294967295); //@line 1554 "_elementtree.c"
        var $120=(($116)&4294967295); //@line 1554 "_elementtree.c"
        HEAP[$120]=$119; //@line 1554 "_elementtree.c"
        __label__ = 21; break; //@line 1554 "_elementtree.c"
      case 14: // $bb13
        var $121=HEAP[$name_addr]; //@line 1555 "_elementtree.c"
        var $122=_strcmp($121, ((__str62)&4294967295)); //@line 1555 "_elementtree.c"
        var $123=((($122))|0)==0; //@line 1555 "_elementtree.c"
        if ($123) { __label__ = 15; break; } else { __label__ = 20; break; } //@line 1555 "_elementtree.c"
      case 15: // $bb14
        var $124=HEAP[$self_addr]; //@line 1556 "_elementtree.c"
        var $125=(($124+20)&4294967295); //@line 1556 "_elementtree.c"
        var $126=HEAP[$125]; //@line 1556 "_elementtree.c"
        var $127=($126)==0; //@line 1556 "_elementtree.c"
        if ($127) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1556 "_elementtree.c"
      case 16: // $bb15
        var $128=HEAP[$self_addr]; //@line 1557 "_elementtree.c"
        var $129=_element_new_extra($128, 0); //@line 1557 "_elementtree.c"
        __label__ = 17; break; //@line 1557 "_elementtree.c"
      case 17: // $bb16
        var $130=HEAP[$self_addr]; //@line 1558 "_elementtree.c"
        var $131=(($130+20)&4294967295); //@line 1558 "_elementtree.c"
        var $132=HEAP[$131]; //@line 1558 "_elementtree.c"
        var $133=(($132)&4294967295); //@line 1558 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1558 "_elementtree.c"
        var $135=(($134)&4294967295); //@line 1558 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1558 "_elementtree.c"
        var $137=((($136) - 1)&4294967295); //@line 1558 "_elementtree.c"
        var $138=(($134)&4294967295); //@line 1558 "_elementtree.c"
        HEAP[$138]=$137; //@line 1558 "_elementtree.c"
        var $139=(($134)&4294967295); //@line 1558 "_elementtree.c"
        var $140=HEAP[$139]; //@line 1558 "_elementtree.c"
        var $141=((($140))|0)==0; //@line 1558 "_elementtree.c"
        if ($141) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1558 "_elementtree.c"
      case 18: // $bb17
        var $142=HEAP[$self_addr]; //@line 1558 "_elementtree.c"
        var $143=(($142+20)&4294967295); //@line 1558 "_elementtree.c"
        var $144=HEAP[$143]; //@line 1558 "_elementtree.c"
        var $145=(($144)&4294967295); //@line 1558 "_elementtree.c"
        var $146=HEAP[$145]; //@line 1558 "_elementtree.c"
        var $147=(($146+4)&4294967295); //@line 1558 "_elementtree.c"
        var $148=HEAP[$147]; //@line 1558 "_elementtree.c"
        var $149=(($148+24)&4294967295); //@line 1558 "_elementtree.c"
        var $150=HEAP[$149]; //@line 1558 "_elementtree.c"
        var $151=HEAP[$self_addr]; //@line 1558 "_elementtree.c"
        var $152=(($151+20)&4294967295); //@line 1558 "_elementtree.c"
        var $153=HEAP[$152]; //@line 1558 "_elementtree.c"
        var $154=(($153)&4294967295); //@line 1558 "_elementtree.c"
        var $155=HEAP[$154]; //@line 1558 "_elementtree.c"
        FUNCTION_TABLE[$150]($155); //@line 1558 "_elementtree.c"
        __label__ = 19; break; //@line 1558 "_elementtree.c"
      case 19: // $bb18
        var $156=HEAP[$self_addr]; //@line 1559 "_elementtree.c"
        var $157=(($156+20)&4294967295); //@line 1559 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1559 "_elementtree.c"
        var $159=(($158)&4294967295); //@line 1559 "_elementtree.c"
        var $160=HEAP[$value_addr]; //@line 1559 "_elementtree.c"
        HEAP[$159]=$160; //@line 1559 "_elementtree.c"
        var $161=HEAP[$self_addr]; //@line 1560 "_elementtree.c"
        var $162=(($161+20)&4294967295); //@line 1560 "_elementtree.c"
        var $163=HEAP[$162]; //@line 1560 "_elementtree.c"
        var $164=(($163)&4294967295); //@line 1560 "_elementtree.c"
        var $165=HEAP[$164]; //@line 1560 "_elementtree.c"
        var $166=(($165)&4294967295); //@line 1560 "_elementtree.c"
        var $167=HEAP[$166]; //@line 1560 "_elementtree.c"
        var $168=((($167) + 1)&4294967295); //@line 1560 "_elementtree.c"
        var $169=(($165)&4294967295); //@line 1560 "_elementtree.c"
        HEAP[$169]=$168; //@line 1560 "_elementtree.c"
        __label__ = 21; break; //@line 1560 "_elementtree.c"
      case 20: // $bb19
        var $170=HEAP[_PyExc_AttributeError]; //@line 1562 "_elementtree.c"
        var $171=HEAP[$name_addr]; //@line 1562 "_elementtree.c"
        _PyErr_SetString($170, $171); //@line 1562 "_elementtree.c"
        HEAP[$0]=-1; //@line 1563 "_elementtree.c"
        __label__ = 22; break; //@line 1563 "_elementtree.c"
      case 21: // $bb20
        HEAP[$0]=0; //@line 1566 "_elementtree.c"
        __label__ = 22; break; //@line 1566 "_elementtree.c"
      case 22: // $bb21
        var $172=HEAP[$0]; //@line 1540 "_elementtree.c"
        HEAP[$retval]=$172; //@line 1540 "_elementtree.c"
        __label__ = 23; break; //@line 1540 "_elementtree.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 1540 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1540 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_new() {
    var __stackBase__  = STACKTOP; STACKTOP += 12; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval=__stackBase__;
        var $0=__stackBase__+4;
        var $self=__stackBase__+8;
        var $_alloca_point_=0;
        var $1=__PyObject_New(_TreeBuilder_Type); //@line 1637 "_elementtree.c"
        var $2=$1; //@line 1637 "_elementtree.c"
        HEAP[$self]=$2; //@line 1637 "_elementtree.c"
        var $3=HEAP[$self]; //@line 1638 "_elementtree.c"
        var $4=($3)==0; //@line 1638 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1638 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1639 "_elementtree.c"
        __label__ = 3; break; //@line 1639 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[$self]; //@line 1641 "_elementtree.c"
        var $6=(($5+8)&4294967295); //@line 1641 "_elementtree.c"
        HEAP[$6]=0; //@line 1641 "_elementtree.c"
        var $7=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1643 "_elementtree.c"
        var $8=((($7) + 1)&4294967295); //@line 1643 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$8; //@line 1643 "_elementtree.c"
        var $9=HEAP[$self]; //@line 1644 "_elementtree.c"
        var $10=(($9+12)&4294967295); //@line 1644 "_elementtree.c"
        HEAP[$10]=__Py_NoneStruct; //@line 1644 "_elementtree.c"
        var $11=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1646 "_elementtree.c"
        var $12=((($11) + 1)&4294967295); //@line 1646 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$12; //@line 1646 "_elementtree.c"
        var $13=HEAP[$self]; //@line 1647 "_elementtree.c"
        var $14=(($13+16)&4294967295); //@line 1647 "_elementtree.c"
        HEAP[$14]=__Py_NoneStruct; //@line 1647 "_elementtree.c"
        var $15=HEAP[$self]; //@line 1649 "_elementtree.c"
        var $16=(($15+20)&4294967295); //@line 1649 "_elementtree.c"
        HEAP[$16]=0; //@line 1649 "_elementtree.c"
        var $17=_PyList_New(20); //@line 1651 "_elementtree.c"
        var $18=HEAP[$self]; //@line 1651 "_elementtree.c"
        var $19=(($18+24)&4294967295); //@line 1651 "_elementtree.c"
        HEAP[$19]=$17; //@line 1651 "_elementtree.c"
        var $20=HEAP[$self]; //@line 1652 "_elementtree.c"
        var $21=(($20+28)&4294967295); //@line 1652 "_elementtree.c"
        HEAP[$21]=0; //@line 1652 "_elementtree.c"
        var $22=HEAP[$self]; //@line 1654 "_elementtree.c"
        var $23=(($22+32)&4294967295); //@line 1654 "_elementtree.c"
        HEAP[$23]=0; //@line 1654 "_elementtree.c"
        var $24=HEAP[$self]; //@line 1655 "_elementtree.c"
        var $25=(($24+40)&4294967295); //@line 1655 "_elementtree.c"
        HEAP[$25]=0; //@line 1655 "_elementtree.c"
        var $26=HEAP[$self]; //@line 1655 "_elementtree.c"
        var $27=(($26+40)&4294967295); //@line 1655 "_elementtree.c"
        var $28=HEAP[$27]; //@line 1655 "_elementtree.c"
        var $29=HEAP[$self]; //@line 1655 "_elementtree.c"
        var $30=(($29+36)&4294967295); //@line 1655 "_elementtree.c"
        HEAP[$30]=$28; //@line 1655 "_elementtree.c"
        var $31=HEAP[$self]; //@line 1656 "_elementtree.c"
        var $32=(($31+48)&4294967295); //@line 1656 "_elementtree.c"
        HEAP[$32]=0; //@line 1656 "_elementtree.c"
        var $33=HEAP[$self]; //@line 1656 "_elementtree.c"
        var $34=(($33+48)&4294967295); //@line 1656 "_elementtree.c"
        var $35=HEAP[$34]; //@line 1656 "_elementtree.c"
        var $36=HEAP[$self]; //@line 1656 "_elementtree.c"
        var $37=(($36+44)&4294967295); //@line 1656 "_elementtree.c"
        HEAP[$37]=$35; //@line 1656 "_elementtree.c"
        var $38=HEAP[$self]; //@line 1660 "_elementtree.c"
        var $39=$38; //@line 1660 "_elementtree.c"
        HEAP[$0]=$39; //@line 1660 "_elementtree.c"
        __label__ = 3; break; //@line 1660 "_elementtree.c"
      case 3: // $bb2
        var $40=HEAP[$0]; //@line 1639 "_elementtree.c"
        HEAP[$retval]=$40; //@line 1639 "_elementtree.c"
        __label__ = 4; break; //@line 1639 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1639 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1639 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder($self_, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1666 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str65)&4294967295)); //@line 1666 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1666 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1666 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1667 "_elementtree.c"
        __label__ = 3; break; //@line 1667 "_elementtree.c"
      case 2: // $bb1
        var $4=_treebuilder_new(); //@line 1669 "_elementtree.c"
        HEAP[$0]=$4; //@line 1669 "_elementtree.c"
        __label__ = 3; break; //@line 1669 "_elementtree.c"
      case 3: // $bb2
        var $5=HEAP[$0]; //@line 1667 "_elementtree.c"
        HEAP[$retval]=$5; //@line 1667 "_elementtree.c"
        __label__ = 4; break; //@line 1667 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1667 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1667 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[$self_addr]; //@line 1675 "_elementtree.c"
        var $1=(($0+48)&4294967295); //@line 1675 "_elementtree.c"
        var $2=HEAP[$1]; //@line 1675 "_elementtree.c"
        var $3=($2)!=0; //@line 1675 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1675 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$self_addr]; //@line 1675 "_elementtree.c"
        var $5=(($4+48)&4294967295); //@line 1675 "_elementtree.c"
        var $6=HEAP[$5]; //@line 1675 "_elementtree.c"
        var $7=(($6)&4294967295); //@line 1675 "_elementtree.c"
        var $8=HEAP[$7]; //@line 1675 "_elementtree.c"
        var $9=((($8) - 1)&4294967295); //@line 1675 "_elementtree.c"
        var $10=(($6)&4294967295); //@line 1675 "_elementtree.c"
        HEAP[$10]=$9; //@line 1675 "_elementtree.c"
        var $11=(($6)&4294967295); //@line 1675 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1675 "_elementtree.c"
        var $13=((($12))|0)==0; //@line 1675 "_elementtree.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1675 "_elementtree.c"
      case 2: // $bb1
        var $14=HEAP[$self_addr]; //@line 1675 "_elementtree.c"
        var $15=(($14+48)&4294967295); //@line 1675 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1675 "_elementtree.c"
        var $17=(($16+4)&4294967295); //@line 1675 "_elementtree.c"
        var $18=HEAP[$17]; //@line 1675 "_elementtree.c"
        var $19=(($18+24)&4294967295); //@line 1675 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1675 "_elementtree.c"
        var $21=HEAP[$self_addr]; //@line 1675 "_elementtree.c"
        var $22=(($21+48)&4294967295); //@line 1675 "_elementtree.c"
        var $23=HEAP[$22]; //@line 1675 "_elementtree.c"
        FUNCTION_TABLE[$20]($23); //@line 1675 "_elementtree.c"
        __label__ = 3; break; //@line 1675 "_elementtree.c"
      case 3: // $bb2
        var $24=HEAP[$self_addr]; //@line 1676 "_elementtree.c"
        var $25=(($24+44)&4294967295); //@line 1676 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1676 "_elementtree.c"
        var $27=($26)!=0; //@line 1676 "_elementtree.c"
        if ($27) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1676 "_elementtree.c"
      case 4: // $bb3
        var $28=HEAP[$self_addr]; //@line 1676 "_elementtree.c"
        var $29=(($28+44)&4294967295); //@line 1676 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1676 "_elementtree.c"
        var $31=(($30)&4294967295); //@line 1676 "_elementtree.c"
        var $32=HEAP[$31]; //@line 1676 "_elementtree.c"
        var $33=((($32) - 1)&4294967295); //@line 1676 "_elementtree.c"
        var $34=(($30)&4294967295); //@line 1676 "_elementtree.c"
        HEAP[$34]=$33; //@line 1676 "_elementtree.c"
        var $35=(($30)&4294967295); //@line 1676 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1676 "_elementtree.c"
        var $37=((($36))|0)==0; //@line 1676 "_elementtree.c"
        if ($37) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1676 "_elementtree.c"
      case 5: // $bb4
        var $38=HEAP[$self_addr]; //@line 1676 "_elementtree.c"
        var $39=(($38+44)&4294967295); //@line 1676 "_elementtree.c"
        var $40=HEAP[$39]; //@line 1676 "_elementtree.c"
        var $41=(($40+4)&4294967295); //@line 1676 "_elementtree.c"
        var $42=HEAP[$41]; //@line 1676 "_elementtree.c"
        var $43=(($42+24)&4294967295); //@line 1676 "_elementtree.c"
        var $44=HEAP[$43]; //@line 1676 "_elementtree.c"
        var $45=HEAP[$self_addr]; //@line 1676 "_elementtree.c"
        var $46=(($45+44)&4294967295); //@line 1676 "_elementtree.c"
        var $47=HEAP[$46]; //@line 1676 "_elementtree.c"
        FUNCTION_TABLE[$44]($47); //@line 1676 "_elementtree.c"
        __label__ = 6; break; //@line 1676 "_elementtree.c"
      case 6: // $bb5
        var $48=HEAP[$self_addr]; //@line 1677 "_elementtree.c"
        var $49=(($48+40)&4294967295); //@line 1677 "_elementtree.c"
        var $50=HEAP[$49]; //@line 1677 "_elementtree.c"
        var $51=($50)!=0; //@line 1677 "_elementtree.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1677 "_elementtree.c"
      case 7: // $bb6
        var $52=HEAP[$self_addr]; //@line 1677 "_elementtree.c"
        var $53=(($52+40)&4294967295); //@line 1677 "_elementtree.c"
        var $54=HEAP[$53]; //@line 1677 "_elementtree.c"
        var $55=(($54)&4294967295); //@line 1677 "_elementtree.c"
        var $56=HEAP[$55]; //@line 1677 "_elementtree.c"
        var $57=((($56) - 1)&4294967295); //@line 1677 "_elementtree.c"
        var $58=(($54)&4294967295); //@line 1677 "_elementtree.c"
        HEAP[$58]=$57; //@line 1677 "_elementtree.c"
        var $59=(($54)&4294967295); //@line 1677 "_elementtree.c"
        var $60=HEAP[$59]; //@line 1677 "_elementtree.c"
        var $61=((($60))|0)==0; //@line 1677 "_elementtree.c"
        if ($61) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1677 "_elementtree.c"
      case 8: // $bb7
        var $62=HEAP[$self_addr]; //@line 1677 "_elementtree.c"
        var $63=(($62+40)&4294967295); //@line 1677 "_elementtree.c"
        var $64=HEAP[$63]; //@line 1677 "_elementtree.c"
        var $65=(($64+4)&4294967295); //@line 1677 "_elementtree.c"
        var $66=HEAP[$65]; //@line 1677 "_elementtree.c"
        var $67=(($66+24)&4294967295); //@line 1677 "_elementtree.c"
        var $68=HEAP[$67]; //@line 1677 "_elementtree.c"
        var $69=HEAP[$self_addr]; //@line 1677 "_elementtree.c"
        var $70=(($69+40)&4294967295); //@line 1677 "_elementtree.c"
        var $71=HEAP[$70]; //@line 1677 "_elementtree.c"
        FUNCTION_TABLE[$68]($71); //@line 1677 "_elementtree.c"
        __label__ = 9; break; //@line 1677 "_elementtree.c"
      case 9: // $bb8
        var $72=HEAP[$self_addr]; //@line 1678 "_elementtree.c"
        var $73=(($72+36)&4294967295); //@line 1678 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1678 "_elementtree.c"
        var $75=($74)!=0; //@line 1678 "_elementtree.c"
        if ($75) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 1678 "_elementtree.c"
      case 10: // $bb9
        var $76=HEAP[$self_addr]; //@line 1678 "_elementtree.c"
        var $77=(($76+36)&4294967295); //@line 1678 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1678 "_elementtree.c"
        var $79=(($78)&4294967295); //@line 1678 "_elementtree.c"
        var $80=HEAP[$79]; //@line 1678 "_elementtree.c"
        var $81=((($80) - 1)&4294967295); //@line 1678 "_elementtree.c"
        var $82=(($78)&4294967295); //@line 1678 "_elementtree.c"
        HEAP[$82]=$81; //@line 1678 "_elementtree.c"
        var $83=(($78)&4294967295); //@line 1678 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1678 "_elementtree.c"
        var $85=((($84))|0)==0; //@line 1678 "_elementtree.c"
        if ($85) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1678 "_elementtree.c"
      case 11: // $bb10
        var $86=HEAP[$self_addr]; //@line 1678 "_elementtree.c"
        var $87=(($86+36)&4294967295); //@line 1678 "_elementtree.c"
        var $88=HEAP[$87]; //@line 1678 "_elementtree.c"
        var $89=(($88+4)&4294967295); //@line 1678 "_elementtree.c"
        var $90=HEAP[$89]; //@line 1678 "_elementtree.c"
        var $91=(($90+24)&4294967295); //@line 1678 "_elementtree.c"
        var $92=HEAP[$91]; //@line 1678 "_elementtree.c"
        var $93=HEAP[$self_addr]; //@line 1678 "_elementtree.c"
        var $94=(($93+36)&4294967295); //@line 1678 "_elementtree.c"
        var $95=HEAP[$94]; //@line 1678 "_elementtree.c"
        FUNCTION_TABLE[$92]($95); //@line 1678 "_elementtree.c"
        __label__ = 12; break; //@line 1678 "_elementtree.c"
      case 12: // $bb11
        var $96=HEAP[$self_addr]; //@line 1679 "_elementtree.c"
        var $97=(($96+32)&4294967295); //@line 1679 "_elementtree.c"
        var $98=HEAP[$97]; //@line 1679 "_elementtree.c"
        var $99=($98)!=0; //@line 1679 "_elementtree.c"
        if ($99) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1679 "_elementtree.c"
      case 13: // $bb12
        var $100=HEAP[$self_addr]; //@line 1679 "_elementtree.c"
        var $101=(($100+32)&4294967295); //@line 1679 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1679 "_elementtree.c"
        var $103=(($102)&4294967295); //@line 1679 "_elementtree.c"
        var $104=HEAP[$103]; //@line 1679 "_elementtree.c"
        var $105=((($104) - 1)&4294967295); //@line 1679 "_elementtree.c"
        var $106=(($102)&4294967295); //@line 1679 "_elementtree.c"
        HEAP[$106]=$105; //@line 1679 "_elementtree.c"
        var $107=(($102)&4294967295); //@line 1679 "_elementtree.c"
        var $108=HEAP[$107]; //@line 1679 "_elementtree.c"
        var $109=((($108))|0)==0; //@line 1679 "_elementtree.c"
        if ($109) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1679 "_elementtree.c"
      case 14: // $bb13
        var $110=HEAP[$self_addr]; //@line 1679 "_elementtree.c"
        var $111=(($110+32)&4294967295); //@line 1679 "_elementtree.c"
        var $112=HEAP[$111]; //@line 1679 "_elementtree.c"
        var $113=(($112+4)&4294967295); //@line 1679 "_elementtree.c"
        var $114=HEAP[$113]; //@line 1679 "_elementtree.c"
        var $115=(($114+24)&4294967295); //@line 1679 "_elementtree.c"
        var $116=HEAP[$115]; //@line 1679 "_elementtree.c"
        var $117=HEAP[$self_addr]; //@line 1679 "_elementtree.c"
        var $118=(($117+32)&4294967295); //@line 1679 "_elementtree.c"
        var $119=HEAP[$118]; //@line 1679 "_elementtree.c"
        FUNCTION_TABLE[$116]($119); //@line 1679 "_elementtree.c"
        __label__ = 15; break; //@line 1679 "_elementtree.c"
      case 15: // $bb14
        var $120=HEAP[$self_addr]; //@line 1680 "_elementtree.c"
        var $121=(($120+24)&4294967295); //@line 1680 "_elementtree.c"
        var $122=HEAP[$121]; //@line 1680 "_elementtree.c"
        var $123=(($122)&4294967295); //@line 1680 "_elementtree.c"
        var $124=HEAP[$123]; //@line 1680 "_elementtree.c"
        var $125=((($124) - 1)&4294967295); //@line 1680 "_elementtree.c"
        var $126=(($122)&4294967295); //@line 1680 "_elementtree.c"
        HEAP[$126]=$125; //@line 1680 "_elementtree.c"
        var $127=(($122)&4294967295); //@line 1680 "_elementtree.c"
        var $128=HEAP[$127]; //@line 1680 "_elementtree.c"
        var $129=((($128))|0)==0; //@line 1680 "_elementtree.c"
        if ($129) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1680 "_elementtree.c"
      case 16: // $bb15
        var $130=HEAP[$self_addr]; //@line 1680 "_elementtree.c"
        var $131=(($130+24)&4294967295); //@line 1680 "_elementtree.c"
        var $132=HEAP[$131]; //@line 1680 "_elementtree.c"
        var $133=(($132+4)&4294967295); //@line 1680 "_elementtree.c"
        var $134=HEAP[$133]; //@line 1680 "_elementtree.c"
        var $135=(($134+24)&4294967295); //@line 1680 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1680 "_elementtree.c"
        var $137=HEAP[$self_addr]; //@line 1680 "_elementtree.c"
        var $138=(($137+24)&4294967295); //@line 1680 "_elementtree.c"
        var $139=HEAP[$138]; //@line 1680 "_elementtree.c"
        FUNCTION_TABLE[$136]($139); //@line 1680 "_elementtree.c"
        __label__ = 17; break; //@line 1680 "_elementtree.c"
      case 17: // $bb16
        var $140=HEAP[$self_addr]; //@line 1681 "_elementtree.c"
        var $141=(($140+20)&4294967295); //@line 1681 "_elementtree.c"
        var $142=HEAP[$141]; //@line 1681 "_elementtree.c"
        var $143=($142)!=0; //@line 1681 "_elementtree.c"
        if ($143) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1681 "_elementtree.c"
      case 18: // $bb17
        var $144=HEAP[$self_addr]; //@line 1681 "_elementtree.c"
        var $145=(($144+20)&4294967295); //@line 1681 "_elementtree.c"
        var $146=HEAP[$145]; //@line 1681 "_elementtree.c"
        var $147=(($146)&4294967295); //@line 1681 "_elementtree.c"
        var $148=HEAP[$147]; //@line 1681 "_elementtree.c"
        var $149=((($148) - 1)&4294967295); //@line 1681 "_elementtree.c"
        var $150=(($146)&4294967295); //@line 1681 "_elementtree.c"
        HEAP[$150]=$149; //@line 1681 "_elementtree.c"
        var $151=(($146)&4294967295); //@line 1681 "_elementtree.c"
        var $152=HEAP[$151]; //@line 1681 "_elementtree.c"
        var $153=((($152))|0)==0; //@line 1681 "_elementtree.c"
        if ($153) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1681 "_elementtree.c"
      case 19: // $bb18
        var $154=HEAP[$self_addr]; //@line 1681 "_elementtree.c"
        var $155=(($154+20)&4294967295); //@line 1681 "_elementtree.c"
        var $156=HEAP[$155]; //@line 1681 "_elementtree.c"
        var $157=(($156+4)&4294967295); //@line 1681 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1681 "_elementtree.c"
        var $159=(($158+24)&4294967295); //@line 1681 "_elementtree.c"
        var $160=HEAP[$159]; //@line 1681 "_elementtree.c"
        var $161=HEAP[$self_addr]; //@line 1681 "_elementtree.c"
        var $162=(($161+20)&4294967295); //@line 1681 "_elementtree.c"
        var $163=HEAP[$162]; //@line 1681 "_elementtree.c"
        FUNCTION_TABLE[$160]($163); //@line 1681 "_elementtree.c"
        __label__ = 20; break; //@line 1681 "_elementtree.c"
      case 20: // $bb19
        var $164=HEAP[$self_addr]; //@line 1682 "_elementtree.c"
        var $165=(($164+16)&4294967295); //@line 1682 "_elementtree.c"
        var $166=HEAP[$165]; //@line 1682 "_elementtree.c"
        var $167=$166; //@line 1682 "_elementtree.c"
        var $168=(($167)&4294967295); //@line 1682 "_elementtree.c"
        var $169=HEAP[$168]; //@line 1682 "_elementtree.c"
        var $170=((($169) - 1)&4294967295); //@line 1682 "_elementtree.c"
        var $171=(($167)&4294967295); //@line 1682 "_elementtree.c"
        HEAP[$171]=$170; //@line 1682 "_elementtree.c"
        var $172=(($167)&4294967295); //@line 1682 "_elementtree.c"
        var $173=HEAP[$172]; //@line 1682 "_elementtree.c"
        var $174=((($173))|0)==0; //@line 1682 "_elementtree.c"
        if ($174) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1682 "_elementtree.c"
      case 21: // $bb20
        var $175=HEAP[$self_addr]; //@line 1682 "_elementtree.c"
        var $176=(($175+16)&4294967295); //@line 1682 "_elementtree.c"
        var $177=HEAP[$176]; //@line 1682 "_elementtree.c"
        var $178=$177; //@line 1682 "_elementtree.c"
        var $179=(($178+4)&4294967295); //@line 1682 "_elementtree.c"
        var $180=HEAP[$179]; //@line 1682 "_elementtree.c"
        var $181=(($180+24)&4294967295); //@line 1682 "_elementtree.c"
        var $182=HEAP[$181]; //@line 1682 "_elementtree.c"
        var $183=HEAP[$self_addr]; //@line 1682 "_elementtree.c"
        var $184=(($183+16)&4294967295); //@line 1682 "_elementtree.c"
        var $185=HEAP[$184]; //@line 1682 "_elementtree.c"
        var $186=$185; //@line 1682 "_elementtree.c"
        FUNCTION_TABLE[$182]($186); //@line 1682 "_elementtree.c"
        __label__ = 22; break; //@line 1682 "_elementtree.c"
      case 22: // $bb21
        var $187=HEAP[$self_addr]; //@line 1683 "_elementtree.c"
        var $188=(($187+12)&4294967295); //@line 1683 "_elementtree.c"
        var $189=HEAP[$188]; //@line 1683 "_elementtree.c"
        var $190=$189; //@line 1683 "_elementtree.c"
        var $191=(($190)&4294967295); //@line 1683 "_elementtree.c"
        var $192=HEAP[$191]; //@line 1683 "_elementtree.c"
        var $193=((($192) - 1)&4294967295); //@line 1683 "_elementtree.c"
        var $194=(($190)&4294967295); //@line 1683 "_elementtree.c"
        HEAP[$194]=$193; //@line 1683 "_elementtree.c"
        var $195=(($190)&4294967295); //@line 1683 "_elementtree.c"
        var $196=HEAP[$195]; //@line 1683 "_elementtree.c"
        var $197=((($196))|0)==0; //@line 1683 "_elementtree.c"
        if ($197) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1683 "_elementtree.c"
      case 23: // $bb22
        var $198=HEAP[$self_addr]; //@line 1683 "_elementtree.c"
        var $199=(($198+12)&4294967295); //@line 1683 "_elementtree.c"
        var $200=HEAP[$199]; //@line 1683 "_elementtree.c"
        var $201=$200; //@line 1683 "_elementtree.c"
        var $202=(($201+4)&4294967295); //@line 1683 "_elementtree.c"
        var $203=HEAP[$202]; //@line 1683 "_elementtree.c"
        var $204=(($203+24)&4294967295); //@line 1683 "_elementtree.c"
        var $205=HEAP[$204]; //@line 1683 "_elementtree.c"
        var $206=HEAP[$self_addr]; //@line 1683 "_elementtree.c"
        var $207=(($206+12)&4294967295); //@line 1683 "_elementtree.c"
        var $208=HEAP[$207]; //@line 1683 "_elementtree.c"
        var $209=$208; //@line 1683 "_elementtree.c"
        FUNCTION_TABLE[$205]($209); //@line 1683 "_elementtree.c"
        __label__ = 24; break; //@line 1683 "_elementtree.c"
      case 24: // $bb23
        var $210=HEAP[$self_addr]; //@line 1684 "_elementtree.c"
        var $211=(($210+8)&4294967295); //@line 1684 "_elementtree.c"
        var $212=HEAP[$211]; //@line 1684 "_elementtree.c"
        var $213=($212)!=0; //@line 1684 "_elementtree.c"
        if ($213) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 1684 "_elementtree.c"
      case 25: // $bb24
        var $214=HEAP[$self_addr]; //@line 1684 "_elementtree.c"
        var $215=(($214+8)&4294967295); //@line 1684 "_elementtree.c"
        var $216=HEAP[$215]; //@line 1684 "_elementtree.c"
        var $217=(($216)&4294967295); //@line 1684 "_elementtree.c"
        var $218=HEAP[$217]; //@line 1684 "_elementtree.c"
        var $219=((($218) - 1)&4294967295); //@line 1684 "_elementtree.c"
        var $220=(($216)&4294967295); //@line 1684 "_elementtree.c"
        HEAP[$220]=$219; //@line 1684 "_elementtree.c"
        var $221=(($216)&4294967295); //@line 1684 "_elementtree.c"
        var $222=HEAP[$221]; //@line 1684 "_elementtree.c"
        var $223=((($222))|0)==0; //@line 1684 "_elementtree.c"
        if ($223) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1684 "_elementtree.c"
      case 26: // $bb25
        var $224=HEAP[$self_addr]; //@line 1684 "_elementtree.c"
        var $225=(($224+8)&4294967295); //@line 1684 "_elementtree.c"
        var $226=HEAP[$225]; //@line 1684 "_elementtree.c"
        var $227=(($226+4)&4294967295); //@line 1684 "_elementtree.c"
        var $228=HEAP[$227]; //@line 1684 "_elementtree.c"
        var $229=(($228+24)&4294967295); //@line 1684 "_elementtree.c"
        var $230=HEAP[$229]; //@line 1684 "_elementtree.c"
        var $231=HEAP[$self_addr]; //@line 1684 "_elementtree.c"
        var $232=(($231+8)&4294967295); //@line 1684 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1684 "_elementtree.c"
        FUNCTION_TABLE[$230]($233); //@line 1684 "_elementtree.c"
        __label__ = 27; break; //@line 1684 "_elementtree.c"
      case 27: // $bb26
        var $234=HEAP[$self_addr]; //@line 1688 "_elementtree.c"
        var $235=$234; //@line 1688 "_elementtree.c"
        _PyObject_Free($235); //@line 1688 "_elementtree.c"
        __label__ = 28; break; //@line 1689 "_elementtree.c"
      case 28: // $return
        STACKTOP = __stackBase__;
        return; //@line 1689 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_xml($self, $encoding, $standalone) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $encoding_addr=__stackBase__+4;
        var $standalone_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$encoding_addr]=$encoding;
        HEAP[$standalone_addr]=$standalone;
        var $1=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1698 "_elementtree.c"
        var $2=((($1) + 1)&4294967295); //@line 1698 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$2; //@line 1698 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1698 "_elementtree.c"
        var $3=HEAP[$0]; //@line 1698 "_elementtree.c"
        HEAP[$retval]=$3; //@line 1698 "_elementtree.c"
        __label__ = 1; break; //@line 1698 "_elementtree.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1698 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1698 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_start($self, $tag, $attrib) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tag_addr=__stackBase__+4;
        var $attrib_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $node=__stackBase__+20;
        var $this=__stackBase__+24;
        var $res=__stackBase__+28;
        var $action=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tag_addr]=$tag;
        HEAP[$attrib_addr]=$attrib;
        var $1=HEAP[$self_addr]; //@line 1708 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 1708 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1708 "_elementtree.c"
        var $4=($3)!=0; //@line 1708 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1708 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1709 "_elementtree.c"
        var $6=(($5+12)&4294967295); //@line 1709 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1709 "_elementtree.c"
        var $8=HEAP[$self_addr]; //@line 1709 "_elementtree.c"
        var $9=(($8+16)&4294967295); //@line 1709 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1709 "_elementtree.c"
        var $11=($7)==($10); //@line 1709 "_elementtree.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1709 "_elementtree.c"
      case 2: // $bb1
        var $12=HEAP[$self_addr]; //@line 1710 "_elementtree.c"
        var $13=(($12+16)&4294967295); //@line 1710 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1710 "_elementtree.c"
        var $15=(($14+12)&4294967295); //@line 1710 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1710 "_elementtree.c"
        var $17=($16); //@line 1710 "_elementtree.c"
        var $18=($17) & -2; //@line 1710 "_elementtree.c"
        var $19=($18); //@line 1710 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 1710 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1710 "_elementtree.c"
        var $22=((($21) - 1)&4294967295); //@line 1710 "_elementtree.c"
        var $23=(($19)&4294967295); //@line 1710 "_elementtree.c"
        HEAP[$23]=$22; //@line 1710 "_elementtree.c"
        var $24=(($19)&4294967295); //@line 1710 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1710 "_elementtree.c"
        var $26=((($25))|0)==0; //@line 1710 "_elementtree.c"
        if ($26) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1710 "_elementtree.c"
      case 3: // $bb2
        var $27=HEAP[$self_addr]; //@line 1710 "_elementtree.c"
        var $28=(($27+16)&4294967295); //@line 1710 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1710 "_elementtree.c"
        var $30=(($29+12)&4294967295); //@line 1710 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1710 "_elementtree.c"
        var $32=($31); //@line 1710 "_elementtree.c"
        var $33=($32) & -2; //@line 1710 "_elementtree.c"
        var $34=($33); //@line 1710 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 1710 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1710 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 1710 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1710 "_elementtree.c"
        var $39=HEAP[$self_addr]; //@line 1710 "_elementtree.c"
        var $40=(($39+16)&4294967295); //@line 1710 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1710 "_elementtree.c"
        var $42=(($41+12)&4294967295); //@line 1710 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1710 "_elementtree.c"
        var $44=($43); //@line 1710 "_elementtree.c"
        var $45=($44) & -2; //@line 1710 "_elementtree.c"
        var $46=($45); //@line 1710 "_elementtree.c"
        FUNCTION_TABLE[$38]($46); //@line 1710 "_elementtree.c"
        __label__ = 4; break; //@line 1710 "_elementtree.c"
      case 4: // $bb3
        var $47=HEAP[$self_addr]; //@line 1711 "_elementtree.c"
        var $48=(($47+16)&4294967295); //@line 1711 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1711 "_elementtree.c"
        var $50=HEAP[$self_addr]; //@line 1711 "_elementtree.c"
        var $51=(($50+20)&4294967295); //@line 1711 "_elementtree.c"
        var $52=HEAP[$51]; //@line 1711 "_elementtree.c"
        var $53=($52); //@line 1711 "_elementtree.c"
        var $54=($53) & -2; //@line 1711 "_elementtree.c"
        var $55=HEAP[$self_addr]; //@line 1711 "_elementtree.c"
        var $56=(($55+20)&4294967295); //@line 1711 "_elementtree.c"
        var $57=HEAP[$56]; //@line 1711 "_elementtree.c"
        var $58=(($57+4)&4294967295); //@line 1711 "_elementtree.c"
        var $59=HEAP[$58]; //@line 1711 "_elementtree.c"
        var $60=($59)==(_PyList_Type); //@line 1711 "_elementtree.c"
        var $61=unSign(($60), 1, 0); //@line 1711 "_elementtree.c"
        var $62=($54) | ($61); //@line 1711 "_elementtree.c"
        var $63=($62); //@line 1711 "_elementtree.c"
        var $64=(($49+12)&4294967295); //@line 1711 "_elementtree.c"
        HEAP[$64]=$63; //@line 1711 "_elementtree.c"
        __label__ = 8; break; //@line 1711 "_elementtree.c"
      case 5: // $bb4
        var $65=HEAP[$self_addr]; //@line 1715 "_elementtree.c"
        var $66=(($65+16)&4294967295); //@line 1715 "_elementtree.c"
        var $67=HEAP[$66]; //@line 1715 "_elementtree.c"
        var $68=(($67+16)&4294967295); //@line 1715 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1715 "_elementtree.c"
        var $70=($69); //@line 1715 "_elementtree.c"
        var $71=($70) & -2; //@line 1715 "_elementtree.c"
        var $72=($71); //@line 1715 "_elementtree.c"
        var $73=(($72)&4294967295); //@line 1715 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1715 "_elementtree.c"
        var $75=((($74) - 1)&4294967295); //@line 1715 "_elementtree.c"
        var $76=(($72)&4294967295); //@line 1715 "_elementtree.c"
        HEAP[$76]=$75; //@line 1715 "_elementtree.c"
        var $77=(($72)&4294967295); //@line 1715 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1715 "_elementtree.c"
        var $79=((($78))|0)==0; //@line 1715 "_elementtree.c"
        if ($79) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1715 "_elementtree.c"
      case 6: // $bb5
        var $80=HEAP[$self_addr]; //@line 1715 "_elementtree.c"
        var $81=(($80+16)&4294967295); //@line 1715 "_elementtree.c"
        var $82=HEAP[$81]; //@line 1715 "_elementtree.c"
        var $83=(($82+16)&4294967295); //@line 1715 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1715 "_elementtree.c"
        var $85=($84); //@line 1715 "_elementtree.c"
        var $86=($85) & -2; //@line 1715 "_elementtree.c"
        var $87=($86); //@line 1715 "_elementtree.c"
        var $88=(($87+4)&4294967295); //@line 1715 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1715 "_elementtree.c"
        var $90=(($89+24)&4294967295); //@line 1715 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1715 "_elementtree.c"
        var $92=HEAP[$self_addr]; //@line 1715 "_elementtree.c"
        var $93=(($92+16)&4294967295); //@line 1715 "_elementtree.c"
        var $94=HEAP[$93]; //@line 1715 "_elementtree.c"
        var $95=(($94+16)&4294967295); //@line 1715 "_elementtree.c"
        var $96=HEAP[$95]; //@line 1715 "_elementtree.c"
        var $97=($96); //@line 1715 "_elementtree.c"
        var $98=($97) & -2; //@line 1715 "_elementtree.c"
        var $99=($98); //@line 1715 "_elementtree.c"
        FUNCTION_TABLE[$91]($99); //@line 1715 "_elementtree.c"
        __label__ = 7; break; //@line 1715 "_elementtree.c"
      case 7: // $bb6
        var $100=HEAP[$self_addr]; //@line 1716 "_elementtree.c"
        var $101=(($100+16)&4294967295); //@line 1716 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1716 "_elementtree.c"
        var $103=HEAP[$self_addr]; //@line 1716 "_elementtree.c"
        var $104=(($103+20)&4294967295); //@line 1716 "_elementtree.c"
        var $105=HEAP[$104]; //@line 1716 "_elementtree.c"
        var $106=($105); //@line 1716 "_elementtree.c"
        var $107=($106) & -2; //@line 1716 "_elementtree.c"
        var $108=HEAP[$self_addr]; //@line 1716 "_elementtree.c"
        var $109=(($108+20)&4294967295); //@line 1716 "_elementtree.c"
        var $110=HEAP[$109]; //@line 1716 "_elementtree.c"
        var $111=(($110+4)&4294967295); //@line 1716 "_elementtree.c"
        var $112=HEAP[$111]; //@line 1716 "_elementtree.c"
        var $113=($112)==(_PyList_Type); //@line 1716 "_elementtree.c"
        var $114=unSign(($113), 1, 0); //@line 1716 "_elementtree.c"
        var $115=($107) | ($114); //@line 1716 "_elementtree.c"
        var $116=($115); //@line 1716 "_elementtree.c"
        var $117=(($102+16)&4294967295); //@line 1716 "_elementtree.c"
        HEAP[$117]=$116; //@line 1716 "_elementtree.c"
        __label__ = 8; break; //@line 1716 "_elementtree.c"
      case 8: // $bb7
        var $118=HEAP[$self_addr]; //@line 1720 "_elementtree.c"
        var $119=(($118+20)&4294967295); //@line 1720 "_elementtree.c"
        HEAP[$119]=0; //@line 1720 "_elementtree.c"
        __label__ = 9; break; //@line 1720 "_elementtree.c"
      case 9: // $bb8
        var $120=HEAP[$tag_addr]; //@line 1723 "_elementtree.c"
        var $121=HEAP[$attrib_addr]; //@line 1723 "_elementtree.c"
        var $122=_element_new($120, $121); //@line 1723 "_elementtree.c"
        HEAP[$node]=$122; //@line 1723 "_elementtree.c"
        var $123=HEAP[$node]; //@line 1724 "_elementtree.c"
        var $124=($123)==0; //@line 1724 "_elementtree.c"
        if ($124) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1724 "_elementtree.c"
      case 10: // $bb9
        HEAP[$0]=0; //@line 1725 "_elementtree.c"
        __label__ = 35; break; //@line 1725 "_elementtree.c"
      case 11: // $bb10
        var $125=HEAP[$self_addr]; //@line 1727 "_elementtree.c"
        var $126=(($125+12)&4294967295); //@line 1727 "_elementtree.c"
        var $127=HEAP[$126]; //@line 1727 "_elementtree.c"
        var $128=$127; //@line 1727 "_elementtree.c"
        HEAP[$this]=$128; //@line 1727 "_elementtree.c"
        var $129=HEAP[$this]; //@line 1729 "_elementtree.c"
        var $130=($129)!=(__Py_NoneStruct); //@line 1729 "_elementtree.c"
        if ($130) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1729 "_elementtree.c"
      case 12: // $bb11
        var $131=HEAP[$this]; //@line 1730 "_elementtree.c"
        var $132=$131; //@line 1730 "_elementtree.c"
        var $133=HEAP[$node]; //@line 1730 "_elementtree.c"
        var $134=_element_add_subelement($132, $133); //@line 1730 "_elementtree.c"
        var $135=((($134))|0) < 0; //@line 1730 "_elementtree.c"
        if ($135) { __label__ = 32; break; } else { __label__ = 13; break; } //@line 1730 "_elementtree.c"
      case 13: // $bb12
        __label__ = 17; break; //@line 1730 "_elementtree.c"
      case 14: // $bb13
        var $136=HEAP[$self_addr]; //@line 1733 "_elementtree.c"
        var $137=(($136+8)&4294967295); //@line 1733 "_elementtree.c"
        var $138=HEAP[$137]; //@line 1733 "_elementtree.c"
        var $139=($138)!=0; //@line 1733 "_elementtree.c"
        if ($139) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1733 "_elementtree.c"
      case 15: // $bb14
        var $140=HEAP[_elementtree_parseerror_obj]; //@line 1734 "_elementtree.c"
        _PyErr_SetString($140, ((__str66)&4294967295)); //@line 1734 "_elementtree.c"
        __label__ = 32; break; //@line 1734 "_elementtree.c"
      case 16: // $bb15
        var $141=HEAP[$node]; //@line 1740 "_elementtree.c"
        var $142=(($141)&4294967295); //@line 1740 "_elementtree.c"
        var $143=HEAP[$142]; //@line 1740 "_elementtree.c"
        var $144=((($143) + 1)&4294967295); //@line 1740 "_elementtree.c"
        var $145=HEAP[$node]; //@line 1740 "_elementtree.c"
        var $146=(($145)&4294967295); //@line 1740 "_elementtree.c"
        HEAP[$146]=$144; //@line 1740 "_elementtree.c"
        var $147=HEAP[$self_addr]; //@line 1741 "_elementtree.c"
        var $148=(($147+8)&4294967295); //@line 1741 "_elementtree.c"
        var $149=HEAP[$node]; //@line 1741 "_elementtree.c"
        HEAP[$148]=$149; //@line 1741 "_elementtree.c"
        __label__ = 17; break; //@line 1741 "_elementtree.c"
      case 17: // $bb16
        var $150=HEAP[$self_addr]; //@line 1744 "_elementtree.c"
        var $151=(($150+28)&4294967295); //@line 1744 "_elementtree.c"
        var $152=HEAP[$151]; //@line 1744 "_elementtree.c"
        var $153=HEAP[$self_addr]; //@line 1744 "_elementtree.c"
        var $154=(($153+24)&4294967295); //@line 1744 "_elementtree.c"
        var $155=HEAP[$154]; //@line 1744 "_elementtree.c"
        var $156=$155; //@line 1744 "_elementtree.c"
        var $157=(($156+8)&4294967295); //@line 1744 "_elementtree.c"
        var $158=HEAP[$157]; //@line 1744 "_elementtree.c"
        var $159=((($152))|0) < ((($158))|0); //@line 1744 "_elementtree.c"
        if ($159) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1744 "_elementtree.c"
      case 18: // $bb17
        var $160=HEAP[$self_addr]; //@line 1745 "_elementtree.c"
        var $161=(($160+28)&4294967295); //@line 1745 "_elementtree.c"
        var $162=HEAP[$161]; //@line 1745 "_elementtree.c"
        var $163=HEAP[$self_addr]; //@line 1745 "_elementtree.c"
        var $164=(($163+24)&4294967295); //@line 1745 "_elementtree.c"
        var $165=HEAP[$164]; //@line 1745 "_elementtree.c"
        var $166=HEAP[$this]; //@line 1745 "_elementtree.c"
        var $167=_PyList_SetItem($165, $162, $166); //@line 1745 "_elementtree.c"
        var $168=((($167))|0) < 0; //@line 1745 "_elementtree.c"
        if ($168) { __label__ = 32; break; } else { __label__ = 19; break; } //@line 1745 "_elementtree.c"
      case 19: // $bb18
        var $169=HEAP[$this]; //@line 1747 "_elementtree.c"
        var $170=(($169)&4294967295); //@line 1747 "_elementtree.c"
        var $171=HEAP[$170]; //@line 1747 "_elementtree.c"
        var $172=((($171) + 1)&4294967295); //@line 1747 "_elementtree.c"
        var $173=HEAP[$this]; //@line 1747 "_elementtree.c"
        var $174=(($173)&4294967295); //@line 1747 "_elementtree.c"
        HEAP[$174]=$172; //@line 1747 "_elementtree.c"
        __label__ = 21; break; //@line 1747 "_elementtree.c"
      case 20: // $bb19
        var $175=HEAP[$self_addr]; //@line 1749 "_elementtree.c"
        var $176=(($175+24)&4294967295); //@line 1749 "_elementtree.c"
        var $177=HEAP[$176]; //@line 1749 "_elementtree.c"
        var $178=HEAP[$this]; //@line 1749 "_elementtree.c"
        var $179=_PyList_Append($177, $178); //@line 1749 "_elementtree.c"
        var $180=((($179))|0) < 0; //@line 1749 "_elementtree.c"
        if ($180) { __label__ = 32; break; } else { __label__ = 21; break; } //@line 1749 "_elementtree.c"
      case 21: // $bb20
        var $181=HEAP[$self_addr]; //@line 1752 "_elementtree.c"
        var $182=(($181+28)&4294967295); //@line 1752 "_elementtree.c"
        var $183=HEAP[$182]; //@line 1752 "_elementtree.c"
        var $184=((($183) + 1)&4294967295); //@line 1752 "_elementtree.c"
        var $185=HEAP[$self_addr]; //@line 1752 "_elementtree.c"
        var $186=(($185+28)&4294967295); //@line 1752 "_elementtree.c"
        HEAP[$186]=$184; //@line 1752 "_elementtree.c"
        var $187=HEAP[$this]; //@line 1754 "_elementtree.c"
        var $188=(($187)&4294967295); //@line 1754 "_elementtree.c"
        var $189=HEAP[$188]; //@line 1754 "_elementtree.c"
        var $190=((($189) - 1)&4294967295); //@line 1754 "_elementtree.c"
        var $191=HEAP[$this]; //@line 1754 "_elementtree.c"
        var $192=(($191)&4294967295); //@line 1754 "_elementtree.c"
        HEAP[$192]=$190; //@line 1754 "_elementtree.c"
        var $193=HEAP[$this]; //@line 1754 "_elementtree.c"
        var $194=(($193)&4294967295); //@line 1754 "_elementtree.c"
        var $195=HEAP[$194]; //@line 1754 "_elementtree.c"
        var $196=((($195))|0)==0; //@line 1754 "_elementtree.c"
        if ($196) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1754 "_elementtree.c"
      case 22: // $bb21
        var $197=HEAP[$this]; //@line 1754 "_elementtree.c"
        var $198=(($197+4)&4294967295); //@line 1754 "_elementtree.c"
        var $199=HEAP[$198]; //@line 1754 "_elementtree.c"
        var $200=(($199+24)&4294967295); //@line 1754 "_elementtree.c"
        var $201=HEAP[$200]; //@line 1754 "_elementtree.c"
        var $202=HEAP[$this]; //@line 1754 "_elementtree.c"
        FUNCTION_TABLE[$201]($202); //@line 1754 "_elementtree.c"
        __label__ = 23; break; //@line 1754 "_elementtree.c"
      case 23: // $bb22
        var $203=HEAP[$node]; //@line 1755 "_elementtree.c"
        var $204=(($203)&4294967295); //@line 1755 "_elementtree.c"
        var $205=HEAP[$204]; //@line 1755 "_elementtree.c"
        var $206=((($205) + 1)&4294967295); //@line 1755 "_elementtree.c"
        var $207=HEAP[$node]; //@line 1755 "_elementtree.c"
        var $208=(($207)&4294967295); //@line 1755 "_elementtree.c"
        HEAP[$208]=$206; //@line 1755 "_elementtree.c"
        var $209=HEAP[$node]; //@line 1756 "_elementtree.c"
        var $210=$209; //@line 1756 "_elementtree.c"
        var $211=HEAP[$self_addr]; //@line 1756 "_elementtree.c"
        var $212=(($211+12)&4294967295); //@line 1756 "_elementtree.c"
        HEAP[$212]=$210; //@line 1756 "_elementtree.c"
        var $213=HEAP[$self_addr]; //@line 1758 "_elementtree.c"
        var $214=(($213+16)&4294967295); //@line 1758 "_elementtree.c"
        var $215=HEAP[$214]; //@line 1758 "_elementtree.c"
        var $216=$215; //@line 1758 "_elementtree.c"
        var $217=(($216)&4294967295); //@line 1758 "_elementtree.c"
        var $218=HEAP[$217]; //@line 1758 "_elementtree.c"
        var $219=((($218) - 1)&4294967295); //@line 1758 "_elementtree.c"
        var $220=(($216)&4294967295); //@line 1758 "_elementtree.c"
        HEAP[$220]=$219; //@line 1758 "_elementtree.c"
        var $221=(($216)&4294967295); //@line 1758 "_elementtree.c"
        var $222=HEAP[$221]; //@line 1758 "_elementtree.c"
        var $223=((($222))|0)==0; //@line 1758 "_elementtree.c"
        if ($223) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1758 "_elementtree.c"
      case 24: // $bb23
        var $224=HEAP[$self_addr]; //@line 1758 "_elementtree.c"
        var $225=(($224+16)&4294967295); //@line 1758 "_elementtree.c"
        var $226=HEAP[$225]; //@line 1758 "_elementtree.c"
        var $227=$226; //@line 1758 "_elementtree.c"
        var $228=(($227+4)&4294967295); //@line 1758 "_elementtree.c"
        var $229=HEAP[$228]; //@line 1758 "_elementtree.c"
        var $230=(($229+24)&4294967295); //@line 1758 "_elementtree.c"
        var $231=HEAP[$230]; //@line 1758 "_elementtree.c"
        var $232=HEAP[$self_addr]; //@line 1758 "_elementtree.c"
        var $233=(($232+16)&4294967295); //@line 1758 "_elementtree.c"
        var $234=HEAP[$233]; //@line 1758 "_elementtree.c"
        var $235=$234; //@line 1758 "_elementtree.c"
        FUNCTION_TABLE[$231]($235); //@line 1758 "_elementtree.c"
        __label__ = 25; break; //@line 1758 "_elementtree.c"
      case 25: // $bb24
        var $236=HEAP[$node]; //@line 1759 "_elementtree.c"
        var $237=(($236)&4294967295); //@line 1759 "_elementtree.c"
        var $238=HEAP[$237]; //@line 1759 "_elementtree.c"
        var $239=((($238) + 1)&4294967295); //@line 1759 "_elementtree.c"
        var $240=HEAP[$node]; //@line 1759 "_elementtree.c"
        var $241=(($240)&4294967295); //@line 1759 "_elementtree.c"
        HEAP[$241]=$239; //@line 1759 "_elementtree.c"
        var $242=HEAP[$node]; //@line 1760 "_elementtree.c"
        var $243=$242; //@line 1760 "_elementtree.c"
        var $244=HEAP[$self_addr]; //@line 1760 "_elementtree.c"
        var $245=(($244+16)&4294967295); //@line 1760 "_elementtree.c"
        HEAP[$245]=$243; //@line 1760 "_elementtree.c"
        var $246=HEAP[$self_addr]; //@line 1762 "_elementtree.c"
        var $247=(($246+36)&4294967295); //@line 1762 "_elementtree.c"
        var $248=HEAP[$247]; //@line 1762 "_elementtree.c"
        var $249=($248)!=0; //@line 1762 "_elementtree.c"
        if ($249) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 1762 "_elementtree.c"
      case 26: // $bb25
        var $250=HEAP[$self_addr]; //@line 1764 "_elementtree.c"
        var $251=(($250+36)&4294967295); //@line 1764 "_elementtree.c"
        var $252=HEAP[$251]; //@line 1764 "_elementtree.c"
        HEAP[$action]=$252; //@line 1764 "_elementtree.c"
        var $253=_PyTuple_New(2); //@line 1765 "_elementtree.c"
        HEAP[$res]=$253; //@line 1765 "_elementtree.c"
        var $254=HEAP[$res]; //@line 1766 "_elementtree.c"
        var $255=($254)!=0; //@line 1766 "_elementtree.c"
        if ($255) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1766 "_elementtree.c"
      case 27: // $bb26
        var $256=HEAP[$action]; //@line 1767 "_elementtree.c"
        var $257=(($256)&4294967295); //@line 1767 "_elementtree.c"
        var $258=HEAP[$257]; //@line 1767 "_elementtree.c"
        var $259=((($258) + 1)&4294967295); //@line 1767 "_elementtree.c"
        var $260=HEAP[$action]; //@line 1767 "_elementtree.c"
        var $261=(($260)&4294967295); //@line 1767 "_elementtree.c"
        HEAP[$261]=$259; //@line 1767 "_elementtree.c"
        var $262=HEAP[$res]; //@line 1767 "_elementtree.c"
        var $263=$262; //@line 1767 "_elementtree.c"
        var $264=(($263+12)&4294967295); //@line 1767 "_elementtree.c"
        var $265=(($264)&4294967295); //@line 1767 "_elementtree.c"
        var $266=HEAP[$action]; //@line 1767 "_elementtree.c"
        HEAP[$265]=$266; //@line 1767 "_elementtree.c"
        var $267=HEAP[$node]; //@line 1768 "_elementtree.c"
        var $268=(($267)&4294967295); //@line 1768 "_elementtree.c"
        var $269=HEAP[$268]; //@line 1768 "_elementtree.c"
        var $270=((($269) + 1)&4294967295); //@line 1768 "_elementtree.c"
        var $271=HEAP[$node]; //@line 1768 "_elementtree.c"
        var $272=(($271)&4294967295); //@line 1768 "_elementtree.c"
        HEAP[$272]=$270; //@line 1768 "_elementtree.c"
        var $273=HEAP[$res]; //@line 1768 "_elementtree.c"
        var $274=$273; //@line 1768 "_elementtree.c"
        var $275=(($274+12)&4294967295); //@line 1768 "_elementtree.c"
        var $276=(($275+4)&4294967295); //@line 1768 "_elementtree.c"
        var $277=HEAP[$node]; //@line 1768 "_elementtree.c"
        HEAP[$276]=$277; //@line 1768 "_elementtree.c"
        var $278=HEAP[$self_addr]; //@line 1769 "_elementtree.c"
        var $279=(($278+32)&4294967295); //@line 1769 "_elementtree.c"
        var $280=HEAP[$279]; //@line 1769 "_elementtree.c"
        var $281=HEAP[$res]; //@line 1769 "_elementtree.c"
        var $282=_PyList_Append($280, $281); //@line 1769 "_elementtree.c"
        var $283=HEAP[$res]; //@line 1770 "_elementtree.c"
        var $284=(($283)&4294967295); //@line 1770 "_elementtree.c"
        var $285=HEAP[$284]; //@line 1770 "_elementtree.c"
        var $286=((($285) - 1)&4294967295); //@line 1770 "_elementtree.c"
        var $287=HEAP[$res]; //@line 1770 "_elementtree.c"
        var $288=(($287)&4294967295); //@line 1770 "_elementtree.c"
        HEAP[$288]=$286; //@line 1770 "_elementtree.c"
        var $289=HEAP[$res]; //@line 1770 "_elementtree.c"
        var $290=(($289)&4294967295); //@line 1770 "_elementtree.c"
        var $291=HEAP[$290]; //@line 1770 "_elementtree.c"
        var $292=((($291))|0)==0; //@line 1770 "_elementtree.c"
        if ($292) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1770 "_elementtree.c"
      case 28: // $bb27
        var $293=HEAP[$res]; //@line 1770 "_elementtree.c"
        var $294=(($293+4)&4294967295); //@line 1770 "_elementtree.c"
        var $295=HEAP[$294]; //@line 1770 "_elementtree.c"
        var $296=(($295+24)&4294967295); //@line 1770 "_elementtree.c"
        var $297=HEAP[$296]; //@line 1770 "_elementtree.c"
        var $298=HEAP[$res]; //@line 1770 "_elementtree.c"
        FUNCTION_TABLE[$297]($298); //@line 1770 "_elementtree.c"
        __label__ = 29; break; //@line 1770 "_elementtree.c"
      case 29: // $bb28
        __label__ = 31; break; //@line 1770 "_elementtree.c"
      case 30: // $bb29
        _PyErr_Clear(); //@line 1772 "_elementtree.c"
        __label__ = 31; break; //@line 1772 "_elementtree.c"
      case 31: // $bb30
        var $299=HEAP[$node]; //@line 1775 "_elementtree.c"
        HEAP[$0]=$299; //@line 1775 "_elementtree.c"
        __label__ = 35; break; //@line 1775 "_elementtree.c"
      case 32: // $error
        var $300=HEAP[$node]; //@line 1778 "_elementtree.c"
        var $301=(($300)&4294967295); //@line 1778 "_elementtree.c"
        var $302=HEAP[$301]; //@line 1778 "_elementtree.c"
        var $303=((($302) - 1)&4294967295); //@line 1778 "_elementtree.c"
        var $304=HEAP[$node]; //@line 1778 "_elementtree.c"
        var $305=(($304)&4294967295); //@line 1778 "_elementtree.c"
        HEAP[$305]=$303; //@line 1778 "_elementtree.c"
        var $306=HEAP[$node]; //@line 1778 "_elementtree.c"
        var $307=(($306)&4294967295); //@line 1778 "_elementtree.c"
        var $308=HEAP[$307]; //@line 1778 "_elementtree.c"
        var $309=((($308))|0)==0; //@line 1778 "_elementtree.c"
        if ($309) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1778 "_elementtree.c"
      case 33: // $bb31
        var $310=HEAP[$node]; //@line 1778 "_elementtree.c"
        var $311=(($310+4)&4294967295); //@line 1778 "_elementtree.c"
        var $312=HEAP[$311]; //@line 1778 "_elementtree.c"
        var $313=(($312+24)&4294967295); //@line 1778 "_elementtree.c"
        var $314=HEAP[$313]; //@line 1778 "_elementtree.c"
        var $315=HEAP[$node]; //@line 1778 "_elementtree.c"
        FUNCTION_TABLE[$314]($315); //@line 1778 "_elementtree.c"
        __label__ = 34; break; //@line 1778 "_elementtree.c"
      case 34: // $bb32
        HEAP[$0]=0; //@line 1779 "_elementtree.c"
        __label__ = 35; break; //@line 1779 "_elementtree.c"
      case 35: // $bb33
        var $316=HEAP[$0]; //@line 1725 "_elementtree.c"
        HEAP[$retval]=$316; //@line 1725 "_elementtree.c"
        __label__ = 36; break; //@line 1725 "_elementtree.c"
      case 36: // $return
        var $retval34=HEAP[$retval]; //@line 1725 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 1725 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_data($self, $data) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $data_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $size=__stackBase__+16;
        var $list=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$data_addr]=$data;
        var $1=HEAP[$self_addr]; //@line 1785 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 1785 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1785 "_elementtree.c"
        var $4=($3)==0; //@line 1785 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1785 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1786 "_elementtree.c"
        var $6=(($5+16)&4294967295); //@line 1786 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1786 "_elementtree.c"
        var $8=($7)==(__Py_NoneStruct); //@line 1786 "_elementtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1786 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1788 "_elementtree.c"
        var $10=((($9) + 1)&4294967295); //@line 1788 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$10; //@line 1788 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1788 "_elementtree.c"
        __label__ = 19; break; //@line 1788 "_elementtree.c"
      case 3: // $bb2
        var $11=HEAP[$data_addr]; //@line 1791 "_elementtree.c"
        var $12=(($11)&4294967295); //@line 1791 "_elementtree.c"
        var $13=HEAP[$12]; //@line 1791 "_elementtree.c"
        var $14=((($13) + 1)&4294967295); //@line 1791 "_elementtree.c"
        var $15=HEAP[$data_addr]; //@line 1791 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 1791 "_elementtree.c"
        HEAP[$16]=$14; //@line 1791 "_elementtree.c"
        var $17=HEAP[$self_addr]; //@line 1791 "_elementtree.c"
        var $18=(($17+20)&4294967295); //@line 1791 "_elementtree.c"
        var $19=HEAP[$data_addr]; //@line 1791 "_elementtree.c"
        HEAP[$18]=$19; //@line 1791 "_elementtree.c"
        __label__ = 18; break; //@line 1791 "_elementtree.c"
      case 4: // $bb3
        var $20=HEAP[$self_addr]; //@line 1794 "_elementtree.c"
        var $21=(($20+20)&4294967295); //@line 1794 "_elementtree.c"
        var $22=HEAP[$21]; //@line 1794 "_elementtree.c"
        var $23=(($22+4)&4294967295); //@line 1794 "_elementtree.c"
        var $24=HEAP[$23]; //@line 1794 "_elementtree.c"
        var $25=($24)!=(_PyString_Type); //@line 1794 "_elementtree.c"
        if ($25) { __label__ = 11; break; } else { __label__ = 5; break; } //@line 1794 "_elementtree.c"
      case 5: // $bb4
        var $26=HEAP[$self_addr]; //@line 1794 "_elementtree.c"
        var $27=(($26+20)&4294967295); //@line 1794 "_elementtree.c"
        var $28=HEAP[$27]; //@line 1794 "_elementtree.c"
        var $29=(($28)&4294967295); //@line 1794 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1794 "_elementtree.c"
        var $31=((($30))|0)!=1; //@line 1794 "_elementtree.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 1794 "_elementtree.c"
      case 6: // $bb5
        var $32=HEAP[$data_addr]; //@line 1794 "_elementtree.c"
        var $33=(($32+4)&4294967295); //@line 1794 "_elementtree.c"
        var $34=HEAP[$33]; //@line 1794 "_elementtree.c"
        var $35=($34)!=(_PyString_Type); //@line 1794 "_elementtree.c"
        if ($35) { __label__ = 11; break; } else { __label__ = 7; break; } //@line 1794 "_elementtree.c"
      case 7: // $bb6
        var $36=HEAP[$data_addr]; //@line 1794 "_elementtree.c"
        var $37=$36; //@line 1794 "_elementtree.c"
        var $38=(($37+8)&4294967295); //@line 1794 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1794 "_elementtree.c"
        var $40=((($39))|0)!=1; //@line 1794 "_elementtree.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 1794 "_elementtree.c"
      case 8: // $bb7
        var $41=HEAP[$self_addr]; //@line 1798 "_elementtree.c"
        var $42=(($41+20)&4294967295); //@line 1798 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1798 "_elementtree.c"
        var $44=$43; //@line 1798 "_elementtree.c"
        var $45=(($44+8)&4294967295); //@line 1798 "_elementtree.c"
        var $46=HEAP[$45]; //@line 1798 "_elementtree.c"
        HEAP[$size]=$46; //@line 1798 "_elementtree.c"
        var $47=HEAP[$size]; //@line 1799 "_elementtree.c"
        var $48=((($47) + 1)&4294967295); //@line 1799 "_elementtree.c"
        var $49=HEAP[$self_addr]; //@line 1799 "_elementtree.c"
        var $50=(($49+20)&4294967295); //@line 1799 "_elementtree.c"
        var $51=__PyString_Resize($50, $48); //@line 1799 "_elementtree.c"
        var $52=((($51))|0) < 0; //@line 1799 "_elementtree.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1799 "_elementtree.c"
      case 9: // $bb8
        HEAP[$0]=0; //@line 1800 "_elementtree.c"
        __label__ = 19; break; //@line 1800 "_elementtree.c"
      case 10: // $bb9
        var $53=HEAP[$self_addr]; //@line 1801 "_elementtree.c"
        var $54=(($53+20)&4294967295); //@line 1801 "_elementtree.c"
        var $55=HEAP[$54]; //@line 1801 "_elementtree.c"
        var $56=$55; //@line 1801 "_elementtree.c"
        var $57=HEAP[$size]; //@line 1801 "_elementtree.c"
        var $58=HEAP[$data_addr]; //@line 1801 "_elementtree.c"
        var $59=$58; //@line 1801 "_elementtree.c"
        var $60=(($59+20)&4294967295); //@line 1801 "_elementtree.c"
        var $61=(($60)&4294967295); //@line 1801 "_elementtree.c"
        var $62=HEAP[$61]; //@line 1801 "_elementtree.c"
        var $63=(($56+20)&4294967295); //@line 1801 "_elementtree.c"
        var $64=(($63+$57)&4294967295); //@line 1801 "_elementtree.c"
        HEAP[$64]=$62; //@line 1801 "_elementtree.c"
        __label__ = 18; break; //@line 1801 "_elementtree.c"
      case 11: // $bb10
        var $65=HEAP[$self_addr]; //@line 1802 "_elementtree.c"
        var $66=(($65+20)&4294967295); //@line 1802 "_elementtree.c"
        var $67=HEAP[$66]; //@line 1802 "_elementtree.c"
        var $68=(($67+4)&4294967295); //@line 1802 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1802 "_elementtree.c"
        var $70=($69)==(_PyList_Type); //@line 1802 "_elementtree.c"
        if ($70) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1802 "_elementtree.c"
      case 12: // $bb11
        var $71=HEAP[$self_addr]; //@line 1803 "_elementtree.c"
        var $72=(($71+20)&4294967295); //@line 1803 "_elementtree.c"
        var $73=HEAP[$72]; //@line 1803 "_elementtree.c"
        var $74=HEAP[$data_addr]; //@line 1803 "_elementtree.c"
        var $75=_PyList_Append($73, $74); //@line 1803 "_elementtree.c"
        var $76=((($75))|0) < 0; //@line 1803 "_elementtree.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1803 "_elementtree.c"
      case 13: // $bb12
        HEAP[$0]=0; //@line 1804 "_elementtree.c"
        __label__ = 19; break; //@line 1804 "_elementtree.c"
      case 14: // $bb13
        __label__ = 18; break; //@line 1804 "_elementtree.c"
      case 15: // $bb14
        var $77=_PyList_New(2); //@line 1806 "_elementtree.c"
        HEAP[$list]=$77; //@line 1806 "_elementtree.c"
        var $78=HEAP[$list]; //@line 1807 "_elementtree.c"
        var $79=($78)==0; //@line 1807 "_elementtree.c"
        if ($79) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1807 "_elementtree.c"
      case 16: // $bb15
        HEAP[$0]=0; //@line 1808 "_elementtree.c"
        __label__ = 19; break; //@line 1808 "_elementtree.c"
      case 17: // $bb16
        var $80=HEAP[$list]; //@line 1809 "_elementtree.c"
        var $81=$80; //@line 1809 "_elementtree.c"
        var $82=(($81+12)&4294967295); //@line 1809 "_elementtree.c"
        var $83=HEAP[$82]; //@line 1809 "_elementtree.c"
        var $84=HEAP[$self_addr]; //@line 1809 "_elementtree.c"
        var $85=(($84+20)&4294967295); //@line 1809 "_elementtree.c"
        var $86=HEAP[$85]; //@line 1809 "_elementtree.c"
        var $87=(($83)&4294967295); //@line 1809 "_elementtree.c"
        HEAP[$87]=$86; //@line 1809 "_elementtree.c"
        var $88=HEAP[$data_addr]; //@line 1810 "_elementtree.c"
        var $89=(($88)&4294967295); //@line 1810 "_elementtree.c"
        var $90=HEAP[$89]; //@line 1810 "_elementtree.c"
        var $91=((($90) + 1)&4294967295); //@line 1810 "_elementtree.c"
        var $92=HEAP[$data_addr]; //@line 1810 "_elementtree.c"
        var $93=(($92)&4294967295); //@line 1810 "_elementtree.c"
        HEAP[$93]=$91; //@line 1810 "_elementtree.c"
        var $94=HEAP[$list]; //@line 1810 "_elementtree.c"
        var $95=$94; //@line 1810 "_elementtree.c"
        var $96=(($95+12)&4294967295); //@line 1810 "_elementtree.c"
        var $97=HEAP[$96]; //@line 1810 "_elementtree.c"
        var $98=(($97+4)&4294967295); //@line 1810 "_elementtree.c"
        var $99=HEAP[$data_addr]; //@line 1810 "_elementtree.c"
        HEAP[$98]=$99; //@line 1810 "_elementtree.c"
        var $100=HEAP[$self_addr]; //@line 1811 "_elementtree.c"
        var $101=(($100+20)&4294967295); //@line 1811 "_elementtree.c"
        var $102=HEAP[$list]; //@line 1811 "_elementtree.c"
        HEAP[$101]=$102; //@line 1811 "_elementtree.c"
        __label__ = 18; break; //@line 1811 "_elementtree.c"
      case 18: // $bb17
        var $103=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 1815 "_elementtree.c"
        var $104=((($103) + 1)&4294967295); //@line 1815 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$104; //@line 1815 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 1815 "_elementtree.c"
        __label__ = 19; break; //@line 1815 "_elementtree.c"
      case 19: // $bb18
        var $105=HEAP[$0]; //@line 1788 "_elementtree.c"
        HEAP[$retval]=$105; //@line 1788 "_elementtree.c"
        __label__ = 20; break; //@line 1788 "_elementtree.c"
      case 20: // $return
        var $retval19=HEAP[$retval]; //@line 1788 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 1788 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_end($self, $tag) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tag_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $item=__stackBase__+16;
        var $res=__stackBase__+20;
        var $action=__stackBase__+24;
        var $node=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tag_addr]=$tag;
        var $1=HEAP[$self_addr]; //@line 1823 "_elementtree.c"
        var $2=(($1+20)&4294967295); //@line 1823 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1823 "_elementtree.c"
        var $4=($3)!=0; //@line 1823 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 1823 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1824 "_elementtree.c"
        var $6=(($5+12)&4294967295); //@line 1824 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1824 "_elementtree.c"
        var $8=HEAP[$self_addr]; //@line 1824 "_elementtree.c"
        var $9=(($8+16)&4294967295); //@line 1824 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1824 "_elementtree.c"
        var $11=($7)==($10); //@line 1824 "_elementtree.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1824 "_elementtree.c"
      case 2: // $bb1
        var $12=HEAP[$self_addr]; //@line 1825 "_elementtree.c"
        var $13=(($12+16)&4294967295); //@line 1825 "_elementtree.c"
        var $14=HEAP[$13]; //@line 1825 "_elementtree.c"
        var $15=(($14+12)&4294967295); //@line 1825 "_elementtree.c"
        var $16=HEAP[$15]; //@line 1825 "_elementtree.c"
        var $17=($16); //@line 1825 "_elementtree.c"
        var $18=($17) & -2; //@line 1825 "_elementtree.c"
        var $19=($18); //@line 1825 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 1825 "_elementtree.c"
        var $21=HEAP[$20]; //@line 1825 "_elementtree.c"
        var $22=((($21) - 1)&4294967295); //@line 1825 "_elementtree.c"
        var $23=(($19)&4294967295); //@line 1825 "_elementtree.c"
        HEAP[$23]=$22; //@line 1825 "_elementtree.c"
        var $24=(($19)&4294967295); //@line 1825 "_elementtree.c"
        var $25=HEAP[$24]; //@line 1825 "_elementtree.c"
        var $26=((($25))|0)==0; //@line 1825 "_elementtree.c"
        if ($26) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1825 "_elementtree.c"
      case 3: // $bb2
        var $27=HEAP[$self_addr]; //@line 1825 "_elementtree.c"
        var $28=(($27+16)&4294967295); //@line 1825 "_elementtree.c"
        var $29=HEAP[$28]; //@line 1825 "_elementtree.c"
        var $30=(($29+12)&4294967295); //@line 1825 "_elementtree.c"
        var $31=HEAP[$30]; //@line 1825 "_elementtree.c"
        var $32=($31); //@line 1825 "_elementtree.c"
        var $33=($32) & -2; //@line 1825 "_elementtree.c"
        var $34=($33); //@line 1825 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 1825 "_elementtree.c"
        var $36=HEAP[$35]; //@line 1825 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 1825 "_elementtree.c"
        var $38=HEAP[$37]; //@line 1825 "_elementtree.c"
        var $39=HEAP[$self_addr]; //@line 1825 "_elementtree.c"
        var $40=(($39+16)&4294967295); //@line 1825 "_elementtree.c"
        var $41=HEAP[$40]; //@line 1825 "_elementtree.c"
        var $42=(($41+12)&4294967295); //@line 1825 "_elementtree.c"
        var $43=HEAP[$42]; //@line 1825 "_elementtree.c"
        var $44=($43); //@line 1825 "_elementtree.c"
        var $45=($44) & -2; //@line 1825 "_elementtree.c"
        var $46=($45); //@line 1825 "_elementtree.c"
        FUNCTION_TABLE[$38]($46); //@line 1825 "_elementtree.c"
        __label__ = 4; break; //@line 1825 "_elementtree.c"
      case 4: // $bb3
        var $47=HEAP[$self_addr]; //@line 1826 "_elementtree.c"
        var $48=(($47+16)&4294967295); //@line 1826 "_elementtree.c"
        var $49=HEAP[$48]; //@line 1826 "_elementtree.c"
        var $50=HEAP[$self_addr]; //@line 1826 "_elementtree.c"
        var $51=(($50+20)&4294967295); //@line 1826 "_elementtree.c"
        var $52=HEAP[$51]; //@line 1826 "_elementtree.c"
        var $53=($52); //@line 1826 "_elementtree.c"
        var $54=($53) & -2; //@line 1826 "_elementtree.c"
        var $55=HEAP[$self_addr]; //@line 1826 "_elementtree.c"
        var $56=(($55+20)&4294967295); //@line 1826 "_elementtree.c"
        var $57=HEAP[$56]; //@line 1826 "_elementtree.c"
        var $58=(($57+4)&4294967295); //@line 1826 "_elementtree.c"
        var $59=HEAP[$58]; //@line 1826 "_elementtree.c"
        var $60=($59)==(_PyList_Type); //@line 1826 "_elementtree.c"
        var $61=unSign(($60), 1, 0); //@line 1826 "_elementtree.c"
        var $62=($54) | ($61); //@line 1826 "_elementtree.c"
        var $63=($62); //@line 1826 "_elementtree.c"
        var $64=(($49+12)&4294967295); //@line 1826 "_elementtree.c"
        HEAP[$64]=$63; //@line 1826 "_elementtree.c"
        __label__ = 8; break; //@line 1826 "_elementtree.c"
      case 5: // $bb4
        var $65=HEAP[$self_addr]; //@line 1830 "_elementtree.c"
        var $66=(($65+16)&4294967295); //@line 1830 "_elementtree.c"
        var $67=HEAP[$66]; //@line 1830 "_elementtree.c"
        var $68=(($67+16)&4294967295); //@line 1830 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1830 "_elementtree.c"
        var $70=($69); //@line 1830 "_elementtree.c"
        var $71=($70) & -2; //@line 1830 "_elementtree.c"
        var $72=($71); //@line 1830 "_elementtree.c"
        var $73=(($72)&4294967295); //@line 1830 "_elementtree.c"
        var $74=HEAP[$73]; //@line 1830 "_elementtree.c"
        var $75=((($74) - 1)&4294967295); //@line 1830 "_elementtree.c"
        var $76=(($72)&4294967295); //@line 1830 "_elementtree.c"
        HEAP[$76]=$75; //@line 1830 "_elementtree.c"
        var $77=(($72)&4294967295); //@line 1830 "_elementtree.c"
        var $78=HEAP[$77]; //@line 1830 "_elementtree.c"
        var $79=((($78))|0)==0; //@line 1830 "_elementtree.c"
        if ($79) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1830 "_elementtree.c"
      case 6: // $bb5
        var $80=HEAP[$self_addr]; //@line 1830 "_elementtree.c"
        var $81=(($80+16)&4294967295); //@line 1830 "_elementtree.c"
        var $82=HEAP[$81]; //@line 1830 "_elementtree.c"
        var $83=(($82+16)&4294967295); //@line 1830 "_elementtree.c"
        var $84=HEAP[$83]; //@line 1830 "_elementtree.c"
        var $85=($84); //@line 1830 "_elementtree.c"
        var $86=($85) & -2; //@line 1830 "_elementtree.c"
        var $87=($86); //@line 1830 "_elementtree.c"
        var $88=(($87+4)&4294967295); //@line 1830 "_elementtree.c"
        var $89=HEAP[$88]; //@line 1830 "_elementtree.c"
        var $90=(($89+24)&4294967295); //@line 1830 "_elementtree.c"
        var $91=HEAP[$90]; //@line 1830 "_elementtree.c"
        var $92=HEAP[$self_addr]; //@line 1830 "_elementtree.c"
        var $93=(($92+16)&4294967295); //@line 1830 "_elementtree.c"
        var $94=HEAP[$93]; //@line 1830 "_elementtree.c"
        var $95=(($94+16)&4294967295); //@line 1830 "_elementtree.c"
        var $96=HEAP[$95]; //@line 1830 "_elementtree.c"
        var $97=($96); //@line 1830 "_elementtree.c"
        var $98=($97) & -2; //@line 1830 "_elementtree.c"
        var $99=($98); //@line 1830 "_elementtree.c"
        FUNCTION_TABLE[$91]($99); //@line 1830 "_elementtree.c"
        __label__ = 7; break; //@line 1830 "_elementtree.c"
      case 7: // $bb6
        var $100=HEAP[$self_addr]; //@line 1831 "_elementtree.c"
        var $101=(($100+16)&4294967295); //@line 1831 "_elementtree.c"
        var $102=HEAP[$101]; //@line 1831 "_elementtree.c"
        var $103=HEAP[$self_addr]; //@line 1831 "_elementtree.c"
        var $104=(($103+20)&4294967295); //@line 1831 "_elementtree.c"
        var $105=HEAP[$104]; //@line 1831 "_elementtree.c"
        var $106=($105); //@line 1831 "_elementtree.c"
        var $107=($106) & -2; //@line 1831 "_elementtree.c"
        var $108=HEAP[$self_addr]; //@line 1831 "_elementtree.c"
        var $109=(($108+20)&4294967295); //@line 1831 "_elementtree.c"
        var $110=HEAP[$109]; //@line 1831 "_elementtree.c"
        var $111=(($110+4)&4294967295); //@line 1831 "_elementtree.c"
        var $112=HEAP[$111]; //@line 1831 "_elementtree.c"
        var $113=($112)==(_PyList_Type); //@line 1831 "_elementtree.c"
        var $114=unSign(($113), 1, 0); //@line 1831 "_elementtree.c"
        var $115=($107) | ($114); //@line 1831 "_elementtree.c"
        var $116=($115); //@line 1831 "_elementtree.c"
        var $117=(($102+16)&4294967295); //@line 1831 "_elementtree.c"
        HEAP[$117]=$116; //@line 1831 "_elementtree.c"
        __label__ = 8; break; //@line 1831 "_elementtree.c"
      case 8: // $bb7
        var $118=HEAP[$self_addr]; //@line 1835 "_elementtree.c"
        var $119=(($118+20)&4294967295); //@line 1835 "_elementtree.c"
        HEAP[$119]=0; //@line 1835 "_elementtree.c"
        __label__ = 9; break; //@line 1835 "_elementtree.c"
      case 9: // $bb8
        var $120=HEAP[$self_addr]; //@line 1838 "_elementtree.c"
        var $121=(($120+28)&4294967295); //@line 1838 "_elementtree.c"
        var $122=HEAP[$121]; //@line 1838 "_elementtree.c"
        var $123=((($122))|0)==0; //@line 1838 "_elementtree.c"
        if ($123) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1838 "_elementtree.c"
      case 10: // $bb9
        var $124=HEAP[_PyExc_IndexError]; //@line 1839 "_elementtree.c"
        _PyErr_SetString($124, ((__str67)&4294967295)); //@line 1839 "_elementtree.c"
        HEAP[$0]=0; //@line 1843 "_elementtree.c"
        __label__ = 20; break; //@line 1843 "_elementtree.c"
      case 11: // $bb10
        var $125=HEAP[$self_addr]; //@line 1846 "_elementtree.c"
        var $126=(($125+28)&4294967295); //@line 1846 "_elementtree.c"
        var $127=HEAP[$126]; //@line 1846 "_elementtree.c"
        var $128=((($127) - 1)&4294967295); //@line 1846 "_elementtree.c"
        var $129=HEAP[$self_addr]; //@line 1846 "_elementtree.c"
        var $130=(($129+28)&4294967295); //@line 1846 "_elementtree.c"
        HEAP[$130]=$128; //@line 1846 "_elementtree.c"
        var $131=HEAP[$self_addr]; //@line 1848 "_elementtree.c"
        var $132=(($131+24)&4294967295); //@line 1848 "_elementtree.c"
        var $133=HEAP[$132]; //@line 1848 "_elementtree.c"
        var $134=$133; //@line 1848 "_elementtree.c"
        var $135=(($134+12)&4294967295); //@line 1848 "_elementtree.c"
        var $136=HEAP[$135]; //@line 1848 "_elementtree.c"
        var $137=HEAP[$self_addr]; //@line 1848 "_elementtree.c"
        var $138=(($137+28)&4294967295); //@line 1848 "_elementtree.c"
        var $139=HEAP[$138]; //@line 1848 "_elementtree.c"
        var $140=(($136+4*$139)&4294967295); //@line 1848 "_elementtree.c"
        var $141=HEAP[$140]; //@line 1848 "_elementtree.c"
        HEAP[$item]=$141; //@line 1848 "_elementtree.c"
        var $142=HEAP[$item]; //@line 1849 "_elementtree.c"
        var $143=(($142)&4294967295); //@line 1849 "_elementtree.c"
        var $144=HEAP[$143]; //@line 1849 "_elementtree.c"
        var $145=((($144) + 1)&4294967295); //@line 1849 "_elementtree.c"
        var $146=HEAP[$item]; //@line 1849 "_elementtree.c"
        var $147=(($146)&4294967295); //@line 1849 "_elementtree.c"
        HEAP[$147]=$145; //@line 1849 "_elementtree.c"
        var $148=HEAP[$self_addr]; //@line 1851 "_elementtree.c"
        var $149=(($148+16)&4294967295); //@line 1851 "_elementtree.c"
        var $150=HEAP[$149]; //@line 1851 "_elementtree.c"
        var $151=$150; //@line 1851 "_elementtree.c"
        var $152=(($151)&4294967295); //@line 1851 "_elementtree.c"
        var $153=HEAP[$152]; //@line 1851 "_elementtree.c"
        var $154=((($153) - 1)&4294967295); //@line 1851 "_elementtree.c"
        var $155=(($151)&4294967295); //@line 1851 "_elementtree.c"
        HEAP[$155]=$154; //@line 1851 "_elementtree.c"
        var $156=(($151)&4294967295); //@line 1851 "_elementtree.c"
        var $157=HEAP[$156]; //@line 1851 "_elementtree.c"
        var $158=((($157))|0)==0; //@line 1851 "_elementtree.c"
        if ($158) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1851 "_elementtree.c"
      case 12: // $bb11
        var $159=HEAP[$self_addr]; //@line 1851 "_elementtree.c"
        var $160=(($159+16)&4294967295); //@line 1851 "_elementtree.c"
        var $161=HEAP[$160]; //@line 1851 "_elementtree.c"
        var $162=$161; //@line 1851 "_elementtree.c"
        var $163=(($162+4)&4294967295); //@line 1851 "_elementtree.c"
        var $164=HEAP[$163]; //@line 1851 "_elementtree.c"
        var $165=(($164+24)&4294967295); //@line 1851 "_elementtree.c"
        var $166=HEAP[$165]; //@line 1851 "_elementtree.c"
        var $167=HEAP[$self_addr]; //@line 1851 "_elementtree.c"
        var $168=(($167+16)&4294967295); //@line 1851 "_elementtree.c"
        var $169=HEAP[$168]; //@line 1851 "_elementtree.c"
        var $170=$169; //@line 1851 "_elementtree.c"
        FUNCTION_TABLE[$166]($170); //@line 1851 "_elementtree.c"
        __label__ = 13; break; //@line 1851 "_elementtree.c"
      case 13: // $bb12
        var $171=HEAP[$self_addr]; //@line 1853 "_elementtree.c"
        var $172=(($171+12)&4294967295); //@line 1853 "_elementtree.c"
        var $173=HEAP[$172]; //@line 1853 "_elementtree.c"
        var $174=HEAP[$self_addr]; //@line 1853 "_elementtree.c"
        var $175=(($174+16)&4294967295); //@line 1853 "_elementtree.c"
        HEAP[$175]=$173; //@line 1853 "_elementtree.c"
        var $176=HEAP[$item]; //@line 1854 "_elementtree.c"
        var $177=$176; //@line 1854 "_elementtree.c"
        var $178=HEAP[$self_addr]; //@line 1854 "_elementtree.c"
        var $179=(($178+12)&4294967295); //@line 1854 "_elementtree.c"
        HEAP[$179]=$177; //@line 1854 "_elementtree.c"
        var $180=HEAP[$self_addr]; //@line 1856 "_elementtree.c"
        var $181=(($180+40)&4294967295); //@line 1856 "_elementtree.c"
        var $182=HEAP[$181]; //@line 1856 "_elementtree.c"
        var $183=($182)!=0; //@line 1856 "_elementtree.c"
        if ($183) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 1856 "_elementtree.c"
      case 14: // $bb13
        var $184=HEAP[$self_addr]; //@line 1858 "_elementtree.c"
        var $185=(($184+40)&4294967295); //@line 1858 "_elementtree.c"
        var $186=HEAP[$185]; //@line 1858 "_elementtree.c"
        HEAP[$action]=$186; //@line 1858 "_elementtree.c"
        var $187=HEAP[$self_addr]; //@line 1859 "_elementtree.c"
        var $188=(($187+16)&4294967295); //@line 1859 "_elementtree.c"
        var $189=HEAP[$188]; //@line 1859 "_elementtree.c"
        var $190=$189; //@line 1859 "_elementtree.c"
        HEAP[$node]=$190; //@line 1859 "_elementtree.c"
        var $191=_PyTuple_New(2); //@line 1860 "_elementtree.c"
        HEAP[$res]=$191; //@line 1860 "_elementtree.c"
        var $192=HEAP[$res]; //@line 1861 "_elementtree.c"
        var $193=($192)!=0; //@line 1861 "_elementtree.c"
        if ($193) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 1861 "_elementtree.c"
      case 15: // $bb14
        var $194=HEAP[$action]; //@line 1862 "_elementtree.c"
        var $195=(($194)&4294967295); //@line 1862 "_elementtree.c"
        var $196=HEAP[$195]; //@line 1862 "_elementtree.c"
        var $197=((($196) + 1)&4294967295); //@line 1862 "_elementtree.c"
        var $198=HEAP[$action]; //@line 1862 "_elementtree.c"
        var $199=(($198)&4294967295); //@line 1862 "_elementtree.c"
        HEAP[$199]=$197; //@line 1862 "_elementtree.c"
        var $200=HEAP[$res]; //@line 1862 "_elementtree.c"
        var $201=$200; //@line 1862 "_elementtree.c"
        var $202=(($201+12)&4294967295); //@line 1862 "_elementtree.c"
        var $203=(($202)&4294967295); //@line 1862 "_elementtree.c"
        var $204=HEAP[$action]; //@line 1862 "_elementtree.c"
        HEAP[$203]=$204; //@line 1862 "_elementtree.c"
        var $205=HEAP[$node]; //@line 1863 "_elementtree.c"
        var $206=(($205)&4294967295); //@line 1863 "_elementtree.c"
        var $207=HEAP[$206]; //@line 1863 "_elementtree.c"
        var $208=((($207) + 1)&4294967295); //@line 1863 "_elementtree.c"
        var $209=HEAP[$node]; //@line 1863 "_elementtree.c"
        var $210=(($209)&4294967295); //@line 1863 "_elementtree.c"
        HEAP[$210]=$208; //@line 1863 "_elementtree.c"
        var $211=HEAP[$res]; //@line 1863 "_elementtree.c"
        var $212=$211; //@line 1863 "_elementtree.c"
        var $213=(($212+12)&4294967295); //@line 1863 "_elementtree.c"
        var $214=(($213+4)&4294967295); //@line 1863 "_elementtree.c"
        var $215=HEAP[$node]; //@line 1863 "_elementtree.c"
        HEAP[$214]=$215; //@line 1863 "_elementtree.c"
        var $216=HEAP[$self_addr]; //@line 1864 "_elementtree.c"
        var $217=(($216+32)&4294967295); //@line 1864 "_elementtree.c"
        var $218=HEAP[$217]; //@line 1864 "_elementtree.c"
        var $219=HEAP[$res]; //@line 1864 "_elementtree.c"
        var $220=_PyList_Append($218, $219); //@line 1864 "_elementtree.c"
        var $221=HEAP[$res]; //@line 1865 "_elementtree.c"
        var $222=(($221)&4294967295); //@line 1865 "_elementtree.c"
        var $223=HEAP[$222]; //@line 1865 "_elementtree.c"
        var $224=((($223) - 1)&4294967295); //@line 1865 "_elementtree.c"
        var $225=HEAP[$res]; //@line 1865 "_elementtree.c"
        var $226=(($225)&4294967295); //@line 1865 "_elementtree.c"
        HEAP[$226]=$224; //@line 1865 "_elementtree.c"
        var $227=HEAP[$res]; //@line 1865 "_elementtree.c"
        var $228=(($227)&4294967295); //@line 1865 "_elementtree.c"
        var $229=HEAP[$228]; //@line 1865 "_elementtree.c"
        var $230=((($229))|0)==0; //@line 1865 "_elementtree.c"
        if ($230) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1865 "_elementtree.c"
      case 16: // $bb15
        var $231=HEAP[$res]; //@line 1865 "_elementtree.c"
        var $232=(($231+4)&4294967295); //@line 1865 "_elementtree.c"
        var $233=HEAP[$232]; //@line 1865 "_elementtree.c"
        var $234=(($233+24)&4294967295); //@line 1865 "_elementtree.c"
        var $235=HEAP[$234]; //@line 1865 "_elementtree.c"
        var $236=HEAP[$res]; //@line 1865 "_elementtree.c"
        FUNCTION_TABLE[$235]($236); //@line 1865 "_elementtree.c"
        __label__ = 17; break; //@line 1865 "_elementtree.c"
      case 17: // $bb16
        __label__ = 19; break; //@line 1865 "_elementtree.c"
      case 18: // $bb17
        _PyErr_Clear(); //@line 1867 "_elementtree.c"
        __label__ = 19; break; //@line 1867 "_elementtree.c"
      case 19: // $bb18
        var $237=HEAP[$self_addr]; //@line 1870 "_elementtree.c"
        var $238=(($237+16)&4294967295); //@line 1870 "_elementtree.c"
        var $239=HEAP[$238]; //@line 1870 "_elementtree.c"
        var $240=$239; //@line 1870 "_elementtree.c"
        var $241=(($240)&4294967295); //@line 1870 "_elementtree.c"
        var $242=HEAP[$241]; //@line 1870 "_elementtree.c"
        var $243=((($242) + 1)&4294967295); //@line 1870 "_elementtree.c"
        var $244=(($240)&4294967295); //@line 1870 "_elementtree.c"
        HEAP[$244]=$243; //@line 1870 "_elementtree.c"
        var $245=HEAP[$self_addr]; //@line 1871 "_elementtree.c"
        var $246=(($245+16)&4294967295); //@line 1871 "_elementtree.c"
        var $247=HEAP[$246]; //@line 1871 "_elementtree.c"
        var $248=$247; //@line 1871 "_elementtree.c"
        HEAP[$0]=$248; //@line 1871 "_elementtree.c"
        __label__ = 20; break; //@line 1871 "_elementtree.c"
      case 20: // $bb19
        var $249=HEAP[$0]; //@line 1843 "_elementtree.c"
        HEAP[$retval]=$249; //@line 1843 "_elementtree.c"
        __label__ = 21; break; //@line 1843 "_elementtree.c"
      case 21: // $return
        var $retval20=HEAP[$retval]; //@line 1843 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1843 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_handle_namespace($self, $start, $prefix, $uri) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $start_addr=__stackBase__+4;
        var $prefix_addr=__stackBase__+8;
        var $uri_addr=__stackBase__+12;
        var $res=__stackBase__+16;
        var $action=__stackBase__+20;
        var $parcel=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$start_addr]=$start;
        HEAP[$prefix_addr]=$prefix;
        HEAP[$uri_addr]=$uri;
        var $0=HEAP[$self_addr]; //@line 1882 "_elementtree.c"
        var $1=(($0+32)&4294967295); //@line 1882 "_elementtree.c"
        var $2=HEAP[$1]; //@line 1882 "_elementtree.c"
        var $3=($2)==0; //@line 1882 "_elementtree.c"
        if ($3) { __label__ = 12; break; } else { __label__ = 1; break; } //@line 1882 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$start_addr]; //@line 1885 "_elementtree.c"
        var $5=((($4))|0)!=0; //@line 1885 "_elementtree.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1885 "_elementtree.c"
      case 2: // $bb1
        var $6=HEAP[$self_addr]; //@line 1886 "_elementtree.c"
        var $7=(($6+44)&4294967295); //@line 1886 "_elementtree.c"
        var $8=HEAP[$7]; //@line 1886 "_elementtree.c"
        var $9=($8)==0; //@line 1886 "_elementtree.c"
        if ($9) { __label__ = 12; break; } else { __label__ = 3; break; } //@line 1886 "_elementtree.c"
      case 3: // $bb2
        var $10=HEAP[$self_addr]; //@line 1888 "_elementtree.c"
        var $11=(($10+44)&4294967295); //@line 1888 "_elementtree.c"
        var $12=HEAP[$11]; //@line 1888 "_elementtree.c"
        HEAP[$action]=$12; //@line 1888 "_elementtree.c"
        var $13=HEAP[$prefix_addr]; //@line 1889 "_elementtree.c"
        var $14=HEAP[$uri_addr]; //@line 1889 "_elementtree.c"
        var $15=_Py_BuildValue(((__str68)&4294967295), $13, $14); //@line 1889 "_elementtree.c"
        HEAP[$parcel]=$15; //@line 1889 "_elementtree.c"
        var $16=HEAP[$parcel]; //@line 1890 "_elementtree.c"
        var $17=($16)==0; //@line 1890 "_elementtree.c"
        if ($17) { __label__ = 12; break; } else { __label__ = 4; break; } //@line 1890 "_elementtree.c"
      case 4: // $bb3
        var $18=HEAP[$action]; //@line 1892 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 1892 "_elementtree.c"
        var $20=HEAP[$19]; //@line 1892 "_elementtree.c"
        var $21=((($20) + 1)&4294967295); //@line 1892 "_elementtree.c"
        var $22=HEAP[$action]; //@line 1892 "_elementtree.c"
        var $23=(($22)&4294967295); //@line 1892 "_elementtree.c"
        HEAP[$23]=$21; //@line 1892 "_elementtree.c"
        __label__ = 7; break; //@line 1892 "_elementtree.c"
      case 5: // $bb4
        var $24=HEAP[$self_addr]; //@line 1894 "_elementtree.c"
        var $25=(($24+48)&4294967295); //@line 1894 "_elementtree.c"
        var $26=HEAP[$25]; //@line 1894 "_elementtree.c"
        var $27=($26)==0; //@line 1894 "_elementtree.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 6; break; } //@line 1894 "_elementtree.c"
      case 6: // $bb5
        var $28=HEAP[$self_addr]; //@line 1896 "_elementtree.c"
        var $29=(($28+48)&4294967295); //@line 1896 "_elementtree.c"
        var $30=HEAP[$29]; //@line 1896 "_elementtree.c"
        HEAP[$action]=$30; //@line 1896 "_elementtree.c"
        var $31=HEAP[$action]; //@line 1897 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 1897 "_elementtree.c"
        var $33=HEAP[$32]; //@line 1897 "_elementtree.c"
        var $34=((($33) + 1)&4294967295); //@line 1897 "_elementtree.c"
        var $35=HEAP[$action]; //@line 1897 "_elementtree.c"
        var $36=(($35)&4294967295); //@line 1897 "_elementtree.c"
        HEAP[$36]=$34; //@line 1897 "_elementtree.c"
        HEAP[$parcel]=__Py_NoneStruct; //@line 1898 "_elementtree.c"
        var $37=HEAP[$parcel]; //@line 1899 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 1899 "_elementtree.c"
        var $39=HEAP[$38]; //@line 1899 "_elementtree.c"
        var $40=((($39) + 1)&4294967295); //@line 1899 "_elementtree.c"
        var $41=HEAP[$parcel]; //@line 1899 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 1899 "_elementtree.c"
        HEAP[$42]=$40; //@line 1899 "_elementtree.c"
        __label__ = 7; break; //@line 1899 "_elementtree.c"
      case 7: // $bb6
        var $43=_PyTuple_New(2); //@line 1902 "_elementtree.c"
        HEAP[$res]=$43; //@line 1902 "_elementtree.c"
        var $44=HEAP[$res]; //@line 1904 "_elementtree.c"
        var $45=($44)!=0; //@line 1904 "_elementtree.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1904 "_elementtree.c"
      case 8: // $bb7
        var $46=HEAP[$res]; //@line 1905 "_elementtree.c"
        var $47=$46; //@line 1905 "_elementtree.c"
        var $48=(($47+12)&4294967295); //@line 1905 "_elementtree.c"
        var $49=(($48)&4294967295); //@line 1905 "_elementtree.c"
        var $50=HEAP[$action]; //@line 1905 "_elementtree.c"
        HEAP[$49]=$50; //@line 1905 "_elementtree.c"
        var $51=HEAP[$res]; //@line 1906 "_elementtree.c"
        var $52=$51; //@line 1906 "_elementtree.c"
        var $53=(($52+12)&4294967295); //@line 1906 "_elementtree.c"
        var $54=(($53+4)&4294967295); //@line 1906 "_elementtree.c"
        var $55=HEAP[$parcel]; //@line 1906 "_elementtree.c"
        HEAP[$54]=$55; //@line 1906 "_elementtree.c"
        var $56=HEAP[$self_addr]; //@line 1907 "_elementtree.c"
        var $57=(($56+32)&4294967295); //@line 1907 "_elementtree.c"
        var $58=HEAP[$57]; //@line 1907 "_elementtree.c"
        var $59=HEAP[$res]; //@line 1907 "_elementtree.c"
        var $60=_PyList_Append($58, $59); //@line 1907 "_elementtree.c"
        var $61=HEAP[$res]; //@line 1908 "_elementtree.c"
        var $62=(($61)&4294967295); //@line 1908 "_elementtree.c"
        var $63=HEAP[$62]; //@line 1908 "_elementtree.c"
        var $64=((($63) - 1)&4294967295); //@line 1908 "_elementtree.c"
        var $65=HEAP[$res]; //@line 1908 "_elementtree.c"
        var $66=(($65)&4294967295); //@line 1908 "_elementtree.c"
        HEAP[$66]=$64; //@line 1908 "_elementtree.c"
        var $67=HEAP[$res]; //@line 1908 "_elementtree.c"
        var $68=(($67)&4294967295); //@line 1908 "_elementtree.c"
        var $69=HEAP[$68]; //@line 1908 "_elementtree.c"
        var $70=((($69))|0)==0; //@line 1908 "_elementtree.c"
        if ($70) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1908 "_elementtree.c"
      case 9: // $bb8
        var $71=HEAP[$res]; //@line 1908 "_elementtree.c"
        var $72=(($71+4)&4294967295); //@line 1908 "_elementtree.c"
        var $73=HEAP[$72]; //@line 1908 "_elementtree.c"
        var $74=(($73+24)&4294967295); //@line 1908 "_elementtree.c"
        var $75=HEAP[$74]; //@line 1908 "_elementtree.c"
        var $76=HEAP[$res]; //@line 1908 "_elementtree.c"
        FUNCTION_TABLE[$75]($76); //@line 1908 "_elementtree.c"
        __label__ = 10; break; //@line 1908 "_elementtree.c"
      case 10: // $bb9
        __label__ = 12; break; //@line 1908 "_elementtree.c"
      case 11: // $bb10
        _PyErr_Clear(); //@line 1910 "_elementtree.c"
        __label__ = 12; break; //@line 1910 "_elementtree.c"
      case 12: // $bb11
        __label__ = 13; break; //@line 1883 "_elementtree.c"
      case 13: // $return
        STACKTOP = __stackBase__;
        return; //@line 1883 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_data($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $data=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1920 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str69)&4294967295), $data); //@line 1920 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1920 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1920 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1921 "_elementtree.c"
        __label__ = 3; break; //@line 1921 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$data]; //@line 1923 "_elementtree.c"
        var $5=HEAP[$self_addr]; //@line 1923 "_elementtree.c"
        var $6=_treebuilder_handle_data($5, $4); //@line 1923 "_elementtree.c"
        HEAP[$0]=$6; //@line 1923 "_elementtree.c"
        __label__ = 3; break; //@line 1923 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1921 "_elementtree.c"
        HEAP[$retval]=$7; //@line 1921 "_elementtree.c"
        __label__ = 4; break; //@line 1921 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1921 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1921 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_end($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tag=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1930 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str70)&4294967295), $tag); //@line 1930 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1930 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1930 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1931 "_elementtree.c"
        __label__ = 3; break; //@line 1931 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$tag]; //@line 1933 "_elementtree.c"
        var $5=HEAP[$self_addr]; //@line 1933 "_elementtree.c"
        var $6=_treebuilder_handle_end($5, $4); //@line 1933 "_elementtree.c"
        HEAP[$0]=$6; //@line 1933 "_elementtree.c"
        __label__ = 3; break; //@line 1933 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[$0]; //@line 1931 "_elementtree.c"
        HEAP[$retval]=$7; //@line 1931 "_elementtree.c"
        __label__ = 4; break; //@line 1931 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1931 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1931 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_done($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $retval=__stackBase__+4;
        var $0=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $1=HEAP[$self_addr]; //@line 1943 "_elementtree.c"
        var $2=(($1+8)&4294967295); //@line 1943 "_elementtree.c"
        var $3=HEAP[$2]; //@line 1943 "_elementtree.c"
        var $4=($3)!=0; //@line 1943 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1943 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 1944 "_elementtree.c"
        var $6=(($5+8)&4294967295); //@line 1944 "_elementtree.c"
        var $7=HEAP[$6]; //@line 1944 "_elementtree.c"
        HEAP[$res]=$7; //@line 1944 "_elementtree.c"
        __label__ = 3; break; //@line 1944 "_elementtree.c"
      case 2: // $bb1
        HEAP[$res]=__Py_NoneStruct; //@line 1946 "_elementtree.c"
        __label__ = 3; break; //@line 1946 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$res]; //@line 1948 "_elementtree.c"
        var $9=(($8)&4294967295); //@line 1948 "_elementtree.c"
        var $10=HEAP[$9]; //@line 1948 "_elementtree.c"
        var $11=((($10) + 1)&4294967295); //@line 1948 "_elementtree.c"
        var $12=HEAP[$res]; //@line 1948 "_elementtree.c"
        var $13=(($12)&4294967295); //@line 1948 "_elementtree.c"
        HEAP[$13]=$11; //@line 1948 "_elementtree.c"
        var $14=HEAP[$res]; //@line 1949 "_elementtree.c"
        HEAP[$0]=$14; //@line 1949 "_elementtree.c"
        var $15=HEAP[$0]; //@line 1949 "_elementtree.c"
        HEAP[$retval]=$15; //@line 1949 "_elementtree.c"
        __label__ = 4; break; //@line 1949 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1949 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1949 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_close($self, $args) {
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
        var $1=HEAP[$args_addr]; //@line 1955 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str71)&4294967295)); //@line 1955 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1955 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1955 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1956 "_elementtree.c"
        __label__ = 3; break; //@line 1956 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 1958 "_elementtree.c"
        var $5=_treebuilder_done($4); //@line 1958 "_elementtree.c"
        HEAP[$0]=$5; //@line 1958 "_elementtree.c"
        __label__ = 3; break; //@line 1958 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[$0]; //@line 1956 "_elementtree.c"
        HEAP[$retval]=$6; //@line 1956 "_elementtree.c"
        __label__ = 4; break; //@line 1956 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1956 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1956 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_start($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $tag=__stackBase__+16;
        var $attrib=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$attrib]=__Py_NoneStruct; //@line 1965 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 1966 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str72)&4294967295), $tag, $attrib); //@line 1966 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1966 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1966 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1967 "_elementtree.c"
        __label__ = 3; break; //@line 1967 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$attrib]; //@line 1969 "_elementtree.c"
        var $5=HEAP[$tag]; //@line 1969 "_elementtree.c"
        var $6=HEAP[$self_addr]; //@line 1969 "_elementtree.c"
        var $7=_treebuilder_handle_start($6, $5, $4); //@line 1969 "_elementtree.c"
        HEAP[$0]=$7; //@line 1969 "_elementtree.c"
        __label__ = 3; break; //@line 1969 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 1967 "_elementtree.c"
        HEAP[$retval]=$8; //@line 1967 "_elementtree.c"
        __label__ = 4; break; //@line 1967 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1967 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1967 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_xml($self, $args) {
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
        var $standalone=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 1977 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str73)&4294967295), $encoding, $standalone); //@line 1977 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 1977 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1977 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 1978 "_elementtree.c"
        __label__ = 3; break; //@line 1978 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$standalone]; //@line 1980 "_elementtree.c"
        var $5=HEAP[$encoding]; //@line 1980 "_elementtree.c"
        var $6=HEAP[$self_addr]; //@line 1980 "_elementtree.c"
        var $7=_treebuilder_handle_xml($6, $5, $4); //@line 1980 "_elementtree.c"
        HEAP[$0]=$7; //@line 1980 "_elementtree.c"
        __label__ = 3; break; //@line 1980 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 1978 "_elementtree.c"
        HEAP[$retval]=$8; //@line 1978 "_elementtree.c"
        __label__ = 4; break; //@line 1978 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 1978 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1978 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _treebuilder_getattr($self, $name) {
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
        var $1=HEAP[$self_addr]; //@line 1995 "_elementtree.c"
        var $2=$1; //@line 1995 "_elementtree.c"
        var $3=HEAP[$name_addr]; //@line 1995 "_elementtree.c"
        var $4=_Py_FindMethod(_treebuilder_methods, $2, $3); //@line 1995 "_elementtree.c"
        HEAP[$0]=$4; //@line 1995 "_elementtree.c"
        var $5=HEAP[$0]; //@line 1995 "_elementtree.c"
        HEAP[$retval]=$5; //@line 1995 "_elementtree.c"
        __label__ = 1; break; //@line 1995 "_elementtree.c"
      case 1: // $return
        var $retval1=HEAP[$retval]; //@line 1995 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval1; //@line 1995 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _checkstring($string, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $string_addr=__stackBase__;
        var $size_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$string_addr]=$string;
        HEAP[$size_addr]=$size;
        HEAP[$i]=0; //@line 2056 "_elementtree.c"
        __label__ = 4; break; //@line 2056 "_elementtree.c"
      case 1: // $bb
        var $1=HEAP[$string_addr]; //@line 2057 "_elementtree.c"
        var $2=HEAP[$i]; //@line 2057 "_elementtree.c"
        var $3=(($1+$2)&4294967295); //@line 2057 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2057 "_elementtree.c"
        var $5=reSign(($4), 8, 0) < 0; //@line 2057 "_elementtree.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2057 "_elementtree.c"
      case 2: // $bb1
        HEAP[$0]=1; //@line 2058 "_elementtree.c"
        __label__ = 6; break; //@line 2058 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[$i]; //@line 2056 "_elementtree.c"
        var $7=((($6) + 1)&4294967295); //@line 2056 "_elementtree.c"
        HEAP[$i]=$7; //@line 2056 "_elementtree.c"
        __label__ = 4; break; //@line 2056 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$i]; //@line 2056 "_elementtree.c"
        var $9=HEAP[$size_addr]; //@line 2056 "_elementtree.c"
        var $10=((($8))|0) < ((($9))|0); //@line 2056 "_elementtree.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 2056 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2060 "_elementtree.c"
        __label__ = 6; break; //@line 2060 "_elementtree.c"
      case 6: // $bb5
        var $11=HEAP[$0]; //@line 2058 "_elementtree.c"
        HEAP[$retval]=$11; //@line 2058 "_elementtree.c"
        __label__ = 7; break; //@line 2058 "_elementtree.c"
      case 7: // $return
        var $retval6=HEAP[$retval]; //@line 2058 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 2058 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makestring($string, $size) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $string_addr=__stackBase__;
        var $size_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$string_addr]=$string;
        HEAP[$size_addr]=$size;
        var $1=HEAP[$string_addr]; //@line 2071 "_elementtree.c"
        var $2=HEAP[$size_addr]; //@line 2071 "_elementtree.c"
        var $3=_checkstring($1, $2); //@line 2071 "_elementtree.c"
        var $4=((($3))|0)!=0; //@line 2071 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2071 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$string_addr]; //@line 2072 "_elementtree.c"
        var $6=HEAP[$size_addr]; //@line 2072 "_elementtree.c"
        var $7=_PyUnicodeUCS2_DecodeUTF8($5, $6, ((__str80)&4294967295)); //@line 2072 "_elementtree.c"
        HEAP[$0]=$7; //@line 2072 "_elementtree.c"
        __label__ = 3; break; //@line 2072 "_elementtree.c"
      case 2: // $bb1
        var $8=HEAP[$string_addr]; //@line 2075 "_elementtree.c"
        var $9=HEAP[$size_addr]; //@line 2075 "_elementtree.c"
        var $10=_PyString_FromStringAndSize($8, $9); //@line 2075 "_elementtree.c"
        HEAP[$0]=$10; //@line 2075 "_elementtree.c"
        __label__ = 3; break; //@line 2075 "_elementtree.c"
      case 3: // $bb2
        var $11=HEAP[$0]; //@line 2072 "_elementtree.c"
        HEAP[$retval]=$11; //@line 2072 "_elementtree.c"
        __label__ = 4; break; //@line 2072 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 2072 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 2072 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makeuniversal($self, $string) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $string_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $size=__stackBase__+16;
        var $key=__stackBase__+20;
        var $value=__stackBase__+24;
        var $tag=__stackBase__+28;
        var $p=__stackBase__+32;
        var $i=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$string_addr]=$string;
        var $1=HEAP[$string_addr]; //@line 2084 "_elementtree.c"
        var $2=_strlen($1); //@line 2084 "_elementtree.c"
        HEAP[$size]=$2; //@line 2084 "_elementtree.c"
        var $3=HEAP[$string_addr]; //@line 2089 "_elementtree.c"
        var $4=HEAP[$size]; //@line 2089 "_elementtree.c"
        var $5=_PyString_FromStringAndSize($3, $4); //@line 2089 "_elementtree.c"
        HEAP[$key]=$5; //@line 2089 "_elementtree.c"
        var $6=HEAP[$key]; //@line 2090 "_elementtree.c"
        var $7=($6)==0; //@line 2090 "_elementtree.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2090 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2091 "_elementtree.c"
        __label__ = 29; break; //@line 2091 "_elementtree.c"
      case 2: // $bb1
        var $8=HEAP[$self_addr]; //@line 2093 "_elementtree.c"
        var $9=(($8+20)&4294967295); //@line 2093 "_elementtree.c"
        var $10=HEAP[$9]; //@line 2093 "_elementtree.c"
        var $11=HEAP[$key]; //@line 2093 "_elementtree.c"
        var $12=_PyDict_GetItem($10, $11); //@line 2093 "_elementtree.c"
        HEAP[$value]=$12; //@line 2093 "_elementtree.c"
        var $13=HEAP[$value]; //@line 2095 "_elementtree.c"
        var $14=($13)!=0; //@line 2095 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2095 "_elementtree.c"
      case 3: // $bb2
        var $15=HEAP[$value]; //@line 2096 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 2096 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2096 "_elementtree.c"
        var $18=((($17) + 1)&4294967295); //@line 2096 "_elementtree.c"
        var $19=HEAP[$value]; //@line 2096 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 2096 "_elementtree.c"
        HEAP[$20]=$18; //@line 2096 "_elementtree.c"
        __label__ = 26; break; //@line 2096 "_elementtree.c"
      case 4: // $bb3
        HEAP[$i]=0; //@line 2106 "_elementtree.c"
        __label__ = 7; break; //@line 2106 "_elementtree.c"
      case 5: // $bb4
        var $21=HEAP[$string_addr]; //@line 2107 "_elementtree.c"
        var $22=HEAP[$i]; //@line 2107 "_elementtree.c"
        var $23=(($21+$22)&4294967295); //@line 2107 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2107 "_elementtree.c"
        var $25=reSign(($24), 8, 0)==125; //@line 2107 "_elementtree.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 2107 "_elementtree.c"
      case 6: // $bb5
        var $26=HEAP[$i]; //@line 2106 "_elementtree.c"
        var $27=((($26) + 1)&4294967295); //@line 2106 "_elementtree.c"
        HEAP[$i]=$27; //@line 2106 "_elementtree.c"
        __label__ = 7; break; //@line 2106 "_elementtree.c"
      case 7: // $bb6
        var $28=HEAP[$i]; //@line 2106 "_elementtree.c"
        var $29=HEAP[$size]; //@line 2106 "_elementtree.c"
        var $30=((($28))|0) < ((($29))|0); //@line 2106 "_elementtree.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2106 "_elementtree.c"
      case 8: // $bb7
        var $31=HEAP[$i]; //@line 2109 "_elementtree.c"
        var $32=HEAP[$size]; //@line 2109 "_elementtree.c"
        var $33=((($31))|0)!=((($32))|0); //@line 2109 "_elementtree.c"
        if ($33) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2109 "_elementtree.c"
      case 9: // $bb8
        var $34=HEAP[$size]; //@line 2111 "_elementtree.c"
        var $35=((($34) + 1)&4294967295); //@line 2111 "_elementtree.c"
        var $36=_PyString_FromStringAndSize(0, $35); //@line 2111 "_elementtree.c"
        HEAP[$tag]=$36; //@line 2111 "_elementtree.c"
        var $37=HEAP[$tag]; //@line 2112 "_elementtree.c"
        var $38=$37; //@line 2112 "_elementtree.c"
        var $39=(($38+20)&4294967295); //@line 2112 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 2112 "_elementtree.c"
        HEAP[$p]=$40; //@line 2112 "_elementtree.c"
        var $41=HEAP[$p]; //@line 2113 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 2113 "_elementtree.c"
        HEAP[$42]=123; //@line 2113 "_elementtree.c"
        var $43=HEAP[$size]; //@line 2114 "_elementtree.c"
        var $44=HEAP[$p]; //@line 2114 "_elementtree.c"
        var $45=(($44+1)&4294967295); //@line 2114 "_elementtree.c"
        var $46=HEAP[$string_addr]; //@line 2114 "_elementtree.c"
        _llvm_memcpy_p0i8_p0i8_i32($45, $46, $43, 1, 0); //@line 2114 "_elementtree.c"
        var $47=HEAP[$size]; //@line 2115 "_elementtree.c"
        var $48=((($47) + 1)&4294967295); //@line 2115 "_elementtree.c"
        HEAP[$size]=$48; //@line 2115 "_elementtree.c"
        __label__ = 11; break; //@line 2115 "_elementtree.c"
      case 10: // $bb9
        var $49=HEAP[$key]; //@line 2118 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 2118 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2118 "_elementtree.c"
        var $52=((($51) + 1)&4294967295); //@line 2118 "_elementtree.c"
        var $53=HEAP[$key]; //@line 2118 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2118 "_elementtree.c"
        HEAP[$54]=$52; //@line 2118 "_elementtree.c"
        var $55=HEAP[$key]; //@line 2119 "_elementtree.c"
        HEAP[$tag]=$55; //@line 2119 "_elementtree.c"
        __label__ = 11; break; //@line 2119 "_elementtree.c"
      case 11: // $bb10
        var $56=HEAP[$tag]; //@line 2126 "_elementtree.c"
        var $57=$56; //@line 2126 "_elementtree.c"
        var $58=(($57+20)&4294967295); //@line 2126 "_elementtree.c"
        var $59=(($58)&4294967295); //@line 2126 "_elementtree.c"
        HEAP[$p]=$59; //@line 2126 "_elementtree.c"
        var $60=HEAP[$p]; //@line 2127 "_elementtree.c"
        var $61=HEAP[$size]; //@line 2127 "_elementtree.c"
        var $62=_checkstring($60, $61); //@line 2127 "_elementtree.c"
        var $63=((($62))|0)!=0; //@line 2127 "_elementtree.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 2127 "_elementtree.c"
      case 12: // $bb11
        var $64=HEAP[$p]; //@line 2128 "_elementtree.c"
        var $65=HEAP[$size]; //@line 2128 "_elementtree.c"
        var $66=_PyUnicodeUCS2_DecodeUTF8($64, $65, ((__str80)&4294967295)); //@line 2128 "_elementtree.c"
        HEAP[$value]=$66; //@line 2128 "_elementtree.c"
        var $67=HEAP[$tag]; //@line 2129 "_elementtree.c"
        var $68=(($67)&4294967295); //@line 2129 "_elementtree.c"
        var $69=HEAP[$68]; //@line 2129 "_elementtree.c"
        var $70=((($69) - 1)&4294967295); //@line 2129 "_elementtree.c"
        var $71=HEAP[$tag]; //@line 2129 "_elementtree.c"
        var $72=(($71)&4294967295); //@line 2129 "_elementtree.c"
        HEAP[$72]=$70; //@line 2129 "_elementtree.c"
        var $73=HEAP[$tag]; //@line 2129 "_elementtree.c"
        var $74=(($73)&4294967295); //@line 2129 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2129 "_elementtree.c"
        var $76=((($75))|0)==0; //@line 2129 "_elementtree.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2129 "_elementtree.c"
      case 13: // $bb12
        var $77=HEAP[$tag]; //@line 2129 "_elementtree.c"
        var $78=(($77+4)&4294967295); //@line 2129 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2129 "_elementtree.c"
        var $80=(($79+24)&4294967295); //@line 2129 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2129 "_elementtree.c"
        var $82=HEAP[$tag]; //@line 2129 "_elementtree.c"
        FUNCTION_TABLE[$81]($82); //@line 2129 "_elementtree.c"
        __label__ = 14; break; //@line 2129 "_elementtree.c"
      case 14: // $bb13
        var $83=HEAP[$value]; //@line 2130 "_elementtree.c"
        var $84=($83)==0; //@line 2130 "_elementtree.c"
        if ($84) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 2130 "_elementtree.c"
      case 15: // $bb14
        var $85=HEAP[$key]; //@line 2131 "_elementtree.c"
        var $86=(($85)&4294967295); //@line 2131 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2131 "_elementtree.c"
        var $88=((($87) - 1)&4294967295); //@line 2131 "_elementtree.c"
        var $89=HEAP[$key]; //@line 2131 "_elementtree.c"
        var $90=(($89)&4294967295); //@line 2131 "_elementtree.c"
        HEAP[$90]=$88; //@line 2131 "_elementtree.c"
        var $91=HEAP[$key]; //@line 2131 "_elementtree.c"
        var $92=(($91)&4294967295); //@line 2131 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2131 "_elementtree.c"
        var $94=((($93))|0)==0; //@line 2131 "_elementtree.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2131 "_elementtree.c"
      case 16: // $bb15
        var $95=HEAP[$key]; //@line 2131 "_elementtree.c"
        var $96=(($95+4)&4294967295); //@line 2131 "_elementtree.c"
        var $97=HEAP[$96]; //@line 2131 "_elementtree.c"
        var $98=(($97+24)&4294967295); //@line 2131 "_elementtree.c"
        var $99=HEAP[$98]; //@line 2131 "_elementtree.c"
        var $100=HEAP[$key]; //@line 2131 "_elementtree.c"
        FUNCTION_TABLE[$99]($100); //@line 2131 "_elementtree.c"
        __label__ = 17; break; //@line 2131 "_elementtree.c"
      case 17: // $bb16
        HEAP[$0]=0; //@line 2132 "_elementtree.c"
        __label__ = 29; break; //@line 2132 "_elementtree.c"
      case 18: // $bb17
        __label__ = 20; break; //@line 2132 "_elementtree.c"
      case 19: // $bb18
        var $101=HEAP[$tag]; //@line 2136 "_elementtree.c"
        HEAP[$value]=$101; //@line 2136 "_elementtree.c"
        __label__ = 20; break; //@line 2136 "_elementtree.c"
      case 20: // $bb19
        var $102=HEAP[$self_addr]; //@line 2139 "_elementtree.c"
        var $103=(($102+20)&4294967295); //@line 2139 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2139 "_elementtree.c"
        var $105=HEAP[$key]; //@line 2139 "_elementtree.c"
        var $106=HEAP[$value]; //@line 2139 "_elementtree.c"
        var $107=_PyDict_SetItem($104, $105, $106); //@line 2139 "_elementtree.c"
        var $108=((($107))|0) < 0; //@line 2139 "_elementtree.c"
        if ($108) { __label__ = 21; break; } else { __label__ = 26; break; } //@line 2139 "_elementtree.c"
      case 21: // $bb20
        var $109=HEAP[$key]; //@line 2140 "_elementtree.c"
        var $110=(($109)&4294967295); //@line 2140 "_elementtree.c"
        var $111=HEAP[$110]; //@line 2140 "_elementtree.c"
        var $112=((($111) - 1)&4294967295); //@line 2140 "_elementtree.c"
        var $113=HEAP[$key]; //@line 2140 "_elementtree.c"
        var $114=(($113)&4294967295); //@line 2140 "_elementtree.c"
        HEAP[$114]=$112; //@line 2140 "_elementtree.c"
        var $115=HEAP[$key]; //@line 2140 "_elementtree.c"
        var $116=(($115)&4294967295); //@line 2140 "_elementtree.c"
        var $117=HEAP[$116]; //@line 2140 "_elementtree.c"
        var $118=((($117))|0)==0; //@line 2140 "_elementtree.c"
        if ($118) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2140 "_elementtree.c"
      case 22: // $bb21
        var $119=HEAP[$key]; //@line 2140 "_elementtree.c"
        var $120=(($119+4)&4294967295); //@line 2140 "_elementtree.c"
        var $121=HEAP[$120]; //@line 2140 "_elementtree.c"
        var $122=(($121+24)&4294967295); //@line 2140 "_elementtree.c"
        var $123=HEAP[$122]; //@line 2140 "_elementtree.c"
        var $124=HEAP[$key]; //@line 2140 "_elementtree.c"
        FUNCTION_TABLE[$123]($124); //@line 2140 "_elementtree.c"
        __label__ = 23; break; //@line 2140 "_elementtree.c"
      case 23: // $bb22
        var $125=HEAP[$value]; //@line 2141 "_elementtree.c"
        var $126=(($125)&4294967295); //@line 2141 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2141 "_elementtree.c"
        var $128=((($127) - 1)&4294967295); //@line 2141 "_elementtree.c"
        var $129=HEAP[$value]; //@line 2141 "_elementtree.c"
        var $130=(($129)&4294967295); //@line 2141 "_elementtree.c"
        HEAP[$130]=$128; //@line 2141 "_elementtree.c"
        var $131=HEAP[$value]; //@line 2141 "_elementtree.c"
        var $132=(($131)&4294967295); //@line 2141 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2141 "_elementtree.c"
        var $134=((($133))|0)==0; //@line 2141 "_elementtree.c"
        if ($134) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2141 "_elementtree.c"
      case 24: // $bb23
        var $135=HEAP[$value]; //@line 2141 "_elementtree.c"
        var $136=(($135+4)&4294967295); //@line 2141 "_elementtree.c"
        var $137=HEAP[$136]; //@line 2141 "_elementtree.c"
        var $138=(($137+24)&4294967295); //@line 2141 "_elementtree.c"
        var $139=HEAP[$138]; //@line 2141 "_elementtree.c"
        var $140=HEAP[$value]; //@line 2141 "_elementtree.c"
        FUNCTION_TABLE[$139]($140); //@line 2141 "_elementtree.c"
        __label__ = 25; break; //@line 2141 "_elementtree.c"
      case 25: // $bb24
        HEAP[$0]=0; //@line 2142 "_elementtree.c"
        __label__ = 29; break; //@line 2142 "_elementtree.c"
      case 26: // $bb25
        var $141=HEAP[$key]; //@line 2146 "_elementtree.c"
        var $142=(($141)&4294967295); //@line 2146 "_elementtree.c"
        var $143=HEAP[$142]; //@line 2146 "_elementtree.c"
        var $144=((($143) - 1)&4294967295); //@line 2146 "_elementtree.c"
        var $145=HEAP[$key]; //@line 2146 "_elementtree.c"
        var $146=(($145)&4294967295); //@line 2146 "_elementtree.c"
        HEAP[$146]=$144; //@line 2146 "_elementtree.c"
        var $147=HEAP[$key]; //@line 2146 "_elementtree.c"
        var $148=(($147)&4294967295); //@line 2146 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2146 "_elementtree.c"
        var $150=((($149))|0)==0; //@line 2146 "_elementtree.c"
        if ($150) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 2146 "_elementtree.c"
      case 27: // $bb26
        var $151=HEAP[$key]; //@line 2146 "_elementtree.c"
        var $152=(($151+4)&4294967295); //@line 2146 "_elementtree.c"
        var $153=HEAP[$152]; //@line 2146 "_elementtree.c"
        var $154=(($153+24)&4294967295); //@line 2146 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2146 "_elementtree.c"
        var $156=HEAP[$key]; //@line 2146 "_elementtree.c"
        FUNCTION_TABLE[$155]($156); //@line 2146 "_elementtree.c"
        __label__ = 28; break; //@line 2146 "_elementtree.c"
      case 28: // $bb27
        var $157=HEAP[$value]; //@line 2147 "_elementtree.c"
        HEAP[$0]=$157; //@line 2147 "_elementtree.c"
        __label__ = 29; break; //@line 2147 "_elementtree.c"
      case 29: // $bb28
        var $158=HEAP[$0]; //@line 2091 "_elementtree.c"
        HEAP[$retval]=$158; //@line 2091 "_elementtree.c"
        __label__ = 30; break; //@line 2091 "_elementtree.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 2091 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 2091 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_set_error($message, $line, $column) {
    var __stackBase__  = STACKTOP; STACKTOP += 276; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 276);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $message_addr=__stackBase__;
        var $line_addr=__stackBase__+4;
        var $column_addr=__stackBase__+8;
        var $error=__stackBase__+12;
        var $position=__stackBase__+16;
        var $buffer=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$message_addr]=$message;
        HEAP[$line_addr]=$line;
        HEAP[$column_addr]=$column;
        var $buffer1=$buffer; //@line 2157 "_elementtree.c"
        var $0=HEAP[$message_addr]; //@line 2157 "_elementtree.c"
        var $1=HEAP[$line_addr]; //@line 2157 "_elementtree.c"
        var $2=HEAP[$column_addr]; //@line 2157 "_elementtree.c"
        var $3=_sprintf($buffer1, ((__str81)&4294967295), $0, $1, $2); //@line 2157 "_elementtree.c"
        var $4=HEAP[_elementtree_parseerror_obj]; //@line 2159 "_elementtree.c"
        var $buffer2=$buffer; //@line 2159 "_elementtree.c"
        var $5=_PyObject_CallFunction($4, ((__str82)&4294967295), $buffer2); //@line 2159 "_elementtree.c"
        HEAP[$error]=$5; //@line 2159 "_elementtree.c"
        var $6=HEAP[$error]; //@line 2160 "_elementtree.c"
        var $7=($6)==0; //@line 2160 "_elementtree.c"
        if ($7) { __label__ = 15; break; } else { __label__ = 1; break; } //@line 2160 "_elementtree.c"
      case 1: // $bb
        var $8=HEAP[$line_addr]; //@line 2164 "_elementtree.c"
        var $9=HEAP[$column_addr]; //@line 2164 "_elementtree.c"
        var $10=_Py_BuildValue(((__str83)&4294967295), $8, $9); //@line 2164 "_elementtree.c"
        HEAP[$position]=$10; //@line 2164 "_elementtree.c"
        var $11=HEAP[$position]; //@line 2165 "_elementtree.c"
        var $12=($11)==0; //@line 2165 "_elementtree.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 2165 "_elementtree.c"
      case 2: // $bb3
        var $13=HEAP[$error]; //@line 2166 "_elementtree.c"
        var $14=(($13)&4294967295); //@line 2166 "_elementtree.c"
        var $15=HEAP[$14]; //@line 2166 "_elementtree.c"
        var $16=((($15) - 1)&4294967295); //@line 2166 "_elementtree.c"
        var $17=HEAP[$error]; //@line 2166 "_elementtree.c"
        var $18=(($17)&4294967295); //@line 2166 "_elementtree.c"
        HEAP[$18]=$16; //@line 2166 "_elementtree.c"
        var $19=HEAP[$error]; //@line 2166 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 2166 "_elementtree.c"
        var $21=HEAP[$20]; //@line 2166 "_elementtree.c"
        var $22=((($21))|0)==0; //@line 2166 "_elementtree.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2166 "_elementtree.c"
      case 3: // $bb4
        var $23=HEAP[$error]; //@line 2166 "_elementtree.c"
        var $24=(($23+4)&4294967295); //@line 2166 "_elementtree.c"
        var $25=HEAP[$24]; //@line 2166 "_elementtree.c"
        var $26=(($25+24)&4294967295); //@line 2166 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2166 "_elementtree.c"
        var $28=HEAP[$error]; //@line 2166 "_elementtree.c"
        FUNCTION_TABLE[$27]($28); //@line 2166 "_elementtree.c"
        __label__ = 4; break; //@line 2166 "_elementtree.c"
      case 4: // $bb5
        __label__ = 15; break; //@line 2166 "_elementtree.c"
      case 5: // $bb6
        var $29=HEAP[$error]; //@line 2169 "_elementtree.c"
        var $30=HEAP[$position]; //@line 2169 "_elementtree.c"
        var $31=_PyObject_SetAttrString($29, ((__str84)&4294967295), $30); //@line 2169 "_elementtree.c"
        var $32=((($31))|0)==-1; //@line 2169 "_elementtree.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 2169 "_elementtree.c"
      case 6: // $bb7
        var $33=HEAP[$error]; //@line 2170 "_elementtree.c"
        var $34=(($33)&4294967295); //@line 2170 "_elementtree.c"
        var $35=HEAP[$34]; //@line 2170 "_elementtree.c"
        var $36=((($35) - 1)&4294967295); //@line 2170 "_elementtree.c"
        var $37=HEAP[$error]; //@line 2170 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 2170 "_elementtree.c"
        HEAP[$38]=$36; //@line 2170 "_elementtree.c"
        var $39=HEAP[$error]; //@line 2170 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 2170 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2170 "_elementtree.c"
        var $42=((($41))|0)==0; //@line 2170 "_elementtree.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2170 "_elementtree.c"
      case 7: // $bb8
        var $43=HEAP[$error]; //@line 2170 "_elementtree.c"
        var $44=(($43+4)&4294967295); //@line 2170 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2170 "_elementtree.c"
        var $46=(($45+24)&4294967295); //@line 2170 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2170 "_elementtree.c"
        var $48=HEAP[$error]; //@line 2170 "_elementtree.c"
        FUNCTION_TABLE[$47]($48); //@line 2170 "_elementtree.c"
        __label__ = 8; break; //@line 2170 "_elementtree.c"
      case 8: // $bb9
        var $49=HEAP[$position]; //@line 2171 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 2171 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2171 "_elementtree.c"
        var $52=((($51) - 1)&4294967295); //@line 2171 "_elementtree.c"
        var $53=HEAP[$position]; //@line 2171 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2171 "_elementtree.c"
        HEAP[$54]=$52; //@line 2171 "_elementtree.c"
        var $55=HEAP[$position]; //@line 2171 "_elementtree.c"
        var $56=(($55)&4294967295); //@line 2171 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2171 "_elementtree.c"
        var $58=((($57))|0)==0; //@line 2171 "_elementtree.c"
        if ($58) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2171 "_elementtree.c"
      case 9: // $bb10
        var $59=HEAP[$position]; //@line 2171 "_elementtree.c"
        var $60=(($59+4)&4294967295); //@line 2171 "_elementtree.c"
        var $61=HEAP[$60]; //@line 2171 "_elementtree.c"
        var $62=(($61+24)&4294967295); //@line 2171 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2171 "_elementtree.c"
        var $64=HEAP[$position]; //@line 2171 "_elementtree.c"
        FUNCTION_TABLE[$63]($64); //@line 2171 "_elementtree.c"
        __label__ = 10; break; //@line 2171 "_elementtree.c"
      case 10: // $bb11
        __label__ = 15; break; //@line 2171 "_elementtree.c"
      case 11: // $bb12
        var $65=HEAP[$position]; //@line 2174 "_elementtree.c"
        var $66=(($65)&4294967295); //@line 2174 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2174 "_elementtree.c"
        var $68=((($67) - 1)&4294967295); //@line 2174 "_elementtree.c"
        var $69=HEAP[$position]; //@line 2174 "_elementtree.c"
        var $70=(($69)&4294967295); //@line 2174 "_elementtree.c"
        HEAP[$70]=$68; //@line 2174 "_elementtree.c"
        var $71=HEAP[$position]; //@line 2174 "_elementtree.c"
        var $72=(($71)&4294967295); //@line 2174 "_elementtree.c"
        var $73=HEAP[$72]; //@line 2174 "_elementtree.c"
        var $74=((($73))|0)==0; //@line 2174 "_elementtree.c"
        if ($74) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2174 "_elementtree.c"
      case 12: // $bb13
        var $75=HEAP[$position]; //@line 2174 "_elementtree.c"
        var $76=(($75+4)&4294967295); //@line 2174 "_elementtree.c"
        var $77=HEAP[$76]; //@line 2174 "_elementtree.c"
        var $78=(($77+24)&4294967295); //@line 2174 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2174 "_elementtree.c"
        var $80=HEAP[$position]; //@line 2174 "_elementtree.c"
        FUNCTION_TABLE[$79]($80); //@line 2174 "_elementtree.c"
        __label__ = 13; break; //@line 2174 "_elementtree.c"
      case 13: // $bb14
        var $81=HEAP[_elementtree_parseerror_obj]; //@line 2176 "_elementtree.c"
        var $82=HEAP[$error]; //@line 2176 "_elementtree.c"
        _PyErr_SetObject($81, $82); //@line 2176 "_elementtree.c"
        var $83=HEAP[$error]; //@line 2177 "_elementtree.c"
        var $84=(($83)&4294967295); //@line 2177 "_elementtree.c"
        var $85=HEAP[$84]; //@line 2177 "_elementtree.c"
        var $86=((($85) - 1)&4294967295); //@line 2177 "_elementtree.c"
        var $87=HEAP[$error]; //@line 2177 "_elementtree.c"
        var $88=(($87)&4294967295); //@line 2177 "_elementtree.c"
        HEAP[$88]=$86; //@line 2177 "_elementtree.c"
        var $89=HEAP[$error]; //@line 2177 "_elementtree.c"
        var $90=(($89)&4294967295); //@line 2177 "_elementtree.c"
        var $91=HEAP[$90]; //@line 2177 "_elementtree.c"
        var $92=((($91))|0)==0; //@line 2177 "_elementtree.c"
        if ($92) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2177 "_elementtree.c"
      case 14: // $bb15
        var $93=HEAP[$error]; //@line 2177 "_elementtree.c"
        var $94=(($93+4)&4294967295); //@line 2177 "_elementtree.c"
        var $95=HEAP[$94]; //@line 2177 "_elementtree.c"
        var $96=(($95+24)&4294967295); //@line 2177 "_elementtree.c"
        var $97=HEAP[$96]; //@line 2177 "_elementtree.c"
        var $98=HEAP[$error]; //@line 2177 "_elementtree.c"
        FUNCTION_TABLE[$97]($98); //@line 2177 "_elementtree.c"
        __label__ = 15; break; //@line 2177 "_elementtree.c"
      case 15: // $bb16
        __label__ = 16; break; //@line 2161 "_elementtree.c"
      case 16: // $return
        STACKTOP = __stackBase__;
        return; //@line 2161 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_default_handler($self, $data_in, $data_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 152; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 152);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $data_in_addr=__stackBase__+4;
        var $data_len_addr=__stackBase__+8;
        var $key=__stackBase__+12;
        var $value=__stackBase__+16;
        var $res=__stackBase__+20;
        var $message=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$data_in_addr]=$data_in;
        HEAP[$data_len_addr]=$data_len;
        var $0=HEAP[$data_len_addr]; //@line 2191 "_elementtree.c"
        var $1=((($0))|0) <= 1; //@line 2191 "_elementtree.c"
        if ($1) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2191 "_elementtree.c"
      case 1: // $bb
        var $2=HEAP[$data_in_addr]; //@line 2191 "_elementtree.c"
        var $3=(($2)&4294967295); //@line 2191 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2191 "_elementtree.c"
        var $5=reSign(($4), 8, 0)!=38; //@line 2191 "_elementtree.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2191 "_elementtree.c"
      case 2: // $bb1
        __label__ = 18; break; //@line 2191 "_elementtree.c"
      case 3: // $bb2
        var $6=HEAP[$data_len_addr]; //@line 2194 "_elementtree.c"
        var $7=((($6) - 2)&4294967295); //@line 2194 "_elementtree.c"
        var $8=HEAP[$data_in_addr]; //@line 2194 "_elementtree.c"
        var $9=(($8+1)&4294967295); //@line 2194 "_elementtree.c"
        var $10=_makestring($9, $7); //@line 2194 "_elementtree.c"
        HEAP[$key]=$10; //@line 2194 "_elementtree.c"
        var $11=HEAP[$key]; //@line 2195 "_elementtree.c"
        var $12=($11)==0; //@line 2195 "_elementtree.c"
        if ($12) { __label__ = 18; break; } else { __label__ = 4; break; } //@line 2195 "_elementtree.c"
      case 4: // $bb3
        var $13=HEAP[$self_addr]; //@line 2198 "_elementtree.c"
        var $14=(($13+16)&4294967295); //@line 2198 "_elementtree.c"
        var $15=HEAP[$14]; //@line 2198 "_elementtree.c"
        var $16=HEAP[$key]; //@line 2198 "_elementtree.c"
        var $17=_PyDict_GetItem($15, $16); //@line 2198 "_elementtree.c"
        HEAP[$value]=$17; //@line 2198 "_elementtree.c"
        var $18=HEAP[$value]; //@line 2200 "_elementtree.c"
        var $19=($18)!=0; //@line 2200 "_elementtree.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 2200 "_elementtree.c"
      case 5: // $bb4
        var $20=HEAP[$self_addr]; //@line 2201 "_elementtree.c"
        var $21=(($20+12)&4294967295); //@line 2201 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2201 "_elementtree.c"
        var $23=(($22+4)&4294967295); //@line 2201 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2201 "_elementtree.c"
        var $25=($24)==(_TreeBuilder_Type); //@line 2201 "_elementtree.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2201 "_elementtree.c"
      case 6: // $bb5
        var $26=HEAP[$self_addr]; //@line 2202 "_elementtree.c"
        var $27=(($26+12)&4294967295); //@line 2202 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2202 "_elementtree.c"
        var $29=$28; //@line 2202 "_elementtree.c"
        var $30=HEAP[$value]; //@line 2202 "_elementtree.c"
        var $31=_treebuilder_handle_data($29, $30); //@line 2202 "_elementtree.c"
        HEAP[$res]=$31; //@line 2202 "_elementtree.c"
        __label__ = 10; break; //@line 2202 "_elementtree.c"
      case 7: // $bb6
        var $32=HEAP[$self_addr]; //@line 2205 "_elementtree.c"
        var $33=(($32+32)&4294967295); //@line 2205 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2205 "_elementtree.c"
        var $35=($34)!=0; //@line 2205 "_elementtree.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2205 "_elementtree.c"
      case 8: // $bb7
        var $36=HEAP[$self_addr]; //@line 2206 "_elementtree.c"
        var $37=(($36+32)&4294967295); //@line 2206 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2206 "_elementtree.c"
        var $39=HEAP[$value]; //@line 2206 "_elementtree.c"
        var $40=_PyObject_CallFunction($38, ((__str85)&4294967295), $39); //@line 2206 "_elementtree.c"
        HEAP[$res]=$40; //@line 2206 "_elementtree.c"
        __label__ = 10; break; //@line 2206 "_elementtree.c"
      case 9: // $bb8
        HEAP[$res]=0; //@line 2208 "_elementtree.c"
        __label__ = 10; break; //@line 2208 "_elementtree.c"
      case 10: // $bb9
        var $41=HEAP[$res]; //@line 2209 "_elementtree.c"
        var $42=($41)!=0; //@line 2209 "_elementtree.c"
        if ($42) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2209 "_elementtree.c"
      case 11: // $bb10
        var $43=HEAP[$res]; //@line 2209 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 2209 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2209 "_elementtree.c"
        var $46=((($45) - 1)&4294967295); //@line 2209 "_elementtree.c"
        var $47=HEAP[$res]; //@line 2209 "_elementtree.c"
        var $48=(($47)&4294967295); //@line 2209 "_elementtree.c"
        HEAP[$48]=$46; //@line 2209 "_elementtree.c"
        var $49=HEAP[$res]; //@line 2209 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 2209 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2209 "_elementtree.c"
        var $52=((($51))|0)==0; //@line 2209 "_elementtree.c"
        if ($52) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2209 "_elementtree.c"
      case 12: // $bb11
        var $53=HEAP[$res]; //@line 2209 "_elementtree.c"
        var $54=(($53+4)&4294967295); //@line 2209 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2209 "_elementtree.c"
        var $56=(($55+24)&4294967295); //@line 2209 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2209 "_elementtree.c"
        var $58=HEAP[$res]; //@line 2209 "_elementtree.c"
        FUNCTION_TABLE[$57]($58); //@line 2209 "_elementtree.c"
        __label__ = 13; break; //@line 2209 "_elementtree.c"
      case 13: // $bb12
        __label__ = 16; break; //@line 2209 "_elementtree.c"
      case 14: // $bb13
        var $59=_PyErr_Occurred(); //@line 2210 "_elementtree.c"
        var $60=($59)==0; //@line 2210 "_elementtree.c"
        if ($60) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2210 "_elementtree.c"
      case 15: // $bb14
        var $61=HEAP[$key]; //@line 2213 "_elementtree.c"
        var $62=$61; //@line 2213 "_elementtree.c"
        var $63=(($62+20)&4294967295); //@line 2213 "_elementtree.c"
        var $64=(($63)&4294967295); //@line 2213 "_elementtree.c"
        var $message15=$message; //@line 2213 "_elementtree.c"
        var $65=_sprintf($message15, ((__str86)&4294967295), $64); //@line 2213 "_elementtree.c"
        var $66=HEAP[_expat_capi]; //@line 2214 "_elementtree.c"
        var $67=(($66+28)&4294967295); //@line 2214 "_elementtree.c"
        var $68=HEAP[$67]; //@line 2214 "_elementtree.c"
        var $69=HEAP[$self_addr]; //@line 2214 "_elementtree.c"
        var $70=(($69+8)&4294967295); //@line 2214 "_elementtree.c"
        var $71=HEAP[$70]; //@line 2214 "_elementtree.c"
        var $72=FUNCTION_TABLE[$68]($71); //@line 2214 "_elementtree.c"
        var $73=HEAP[_expat_capi]; //@line 2214 "_elementtree.c"
        var $74=(($73+32)&4294967295); //@line 2214 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2214 "_elementtree.c"
        var $76=HEAP[$self_addr]; //@line 2214 "_elementtree.c"
        var $77=(($76+8)&4294967295); //@line 2214 "_elementtree.c"
        var $78=HEAP[$77]; //@line 2214 "_elementtree.c"
        var $79=FUNCTION_TABLE[$75]($78); //@line 2214 "_elementtree.c"
        var $message16=$message; //@line 2214 "_elementtree.c"
        _expat_set_error($message16, $79, $72); //@line 2214 "_elementtree.c"
        __label__ = 16; break; //@line 2214 "_elementtree.c"
      case 16: // $bb17
        var $80=HEAP[$key]; //@line 2221 "_elementtree.c"
        var $81=(($80)&4294967295); //@line 2221 "_elementtree.c"
        var $82=HEAP[$81]; //@line 2221 "_elementtree.c"
        var $83=((($82) - 1)&4294967295); //@line 2221 "_elementtree.c"
        var $84=HEAP[$key]; //@line 2221 "_elementtree.c"
        var $85=(($84)&4294967295); //@line 2221 "_elementtree.c"
        HEAP[$85]=$83; //@line 2221 "_elementtree.c"
        var $86=HEAP[$key]; //@line 2221 "_elementtree.c"
        var $87=(($86)&4294967295); //@line 2221 "_elementtree.c"
        var $88=HEAP[$87]; //@line 2221 "_elementtree.c"
        var $89=((($88))|0)==0; //@line 2221 "_elementtree.c"
        if ($89) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2221 "_elementtree.c"
      case 17: // $bb18
        var $90=HEAP[$key]; //@line 2221 "_elementtree.c"
        var $91=(($90+4)&4294967295); //@line 2221 "_elementtree.c"
        var $92=HEAP[$91]; //@line 2221 "_elementtree.c"
        var $93=(($92+24)&4294967295); //@line 2221 "_elementtree.c"
        var $94=HEAP[$93]; //@line 2221 "_elementtree.c"
        var $95=HEAP[$key]; //@line 2221 "_elementtree.c"
        FUNCTION_TABLE[$94]($95); //@line 2221 "_elementtree.c"
        __label__ = 18; break; //@line 2221 "_elementtree.c"
      case 18: // $bb19
        __label__ = 19; break; //@line 2192 "_elementtree.c"
      case 19: // $return
        STACKTOP = __stackBase__;
        return; //@line 2192 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_start_handler($self, $tag_in, $attrib_in) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tag_in_addr=__stackBase__+4;
        var $attrib_in_addr=__stackBase__+8;
        var $res=__stackBase__+12;
        var $tag=__stackBase__+16;
        var $attrib=__stackBase__+20;
        var $ok=__stackBase__+24;
        var $key=__stackBase__+28;
        var $value=__stackBase__+32;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tag_in_addr]=$tag_in;
        HEAP[$attrib_in_addr]=$attrib_in;
        var $0=HEAP[$self_addr]; //@line 2234 "_elementtree.c"
        var $1=HEAP[$tag_in_addr]; //@line 2234 "_elementtree.c"
        var $2=_makeuniversal($0, $1); //@line 2234 "_elementtree.c"
        HEAP[$tag]=$2; //@line 2234 "_elementtree.c"
        var $3=HEAP[$tag]; //@line 2235 "_elementtree.c"
        var $4=($3)==0; //@line 2235 "_elementtree.c"
        if ($4) { __label__ = 44; break; } else { __label__ = 1; break; } //@line 2235 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$attrib_in_addr]; //@line 2239 "_elementtree.c"
        var $6=(($5)&4294967295); //@line 2239 "_elementtree.c"
        var $7=HEAP[$6]; //@line 2239 "_elementtree.c"
        var $8=($7)!=0; //@line 2239 "_elementtree.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 27; break; } //@line 2239 "_elementtree.c"
      case 2: // $bb1
        var $9=_PyDict_New(); //@line 2240 "_elementtree.c"
        HEAP[$attrib]=$9; //@line 2240 "_elementtree.c"
        var $10=HEAP[$attrib]; //@line 2241 "_elementtree.c"
        var $11=($10)==0; //@line 2241 "_elementtree.c"
        if ($11) { __label__ = 44; break; } else { __label__ = 3; break; } //@line 2241 "_elementtree.c"
      case 3: // $bb2
        __label__ = 24; break; //@line 2241 "_elementtree.c"
      case 4: // $bb3
        var $12=HEAP[$attrib_in_addr]; //@line 2244 "_elementtree.c"
        var $13=(($12)&4294967295); //@line 2244 "_elementtree.c"
        var $14=HEAP[$13]; //@line 2244 "_elementtree.c"
        var $15=HEAP[$self_addr]; //@line 2244 "_elementtree.c"
        var $16=_makeuniversal($15, $14); //@line 2244 "_elementtree.c"
        HEAP[$key]=$16; //@line 2244 "_elementtree.c"
        var $17=HEAP[$attrib_in_addr]; //@line 2245 "_elementtree.c"
        var $18=(($17+4)&4294967295); //@line 2245 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2245 "_elementtree.c"
        var $20=_strlen($19); //@line 2245 "_elementtree.c"
        var $21=HEAP[$attrib_in_addr]; //@line 2245 "_elementtree.c"
        var $22=(($21+4)&4294967295); //@line 2245 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2245 "_elementtree.c"
        var $24=_makestring($23, $20); //@line 2245 "_elementtree.c"
        HEAP[$value]=$24; //@line 2245 "_elementtree.c"
        var $25=HEAP[$key]; //@line 2246 "_elementtree.c"
        var $26=($25)==0; //@line 2246 "_elementtree.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 2246 "_elementtree.c"
      case 5: // $bb4
        var $27=HEAP[$value]; //@line 2246 "_elementtree.c"
        var $28=($27)==0; //@line 2246 "_elementtree.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 15; break; } //@line 2246 "_elementtree.c"
      case 6: // $bb5
        var $29=HEAP[$value]; //@line 2247 "_elementtree.c"
        var $30=($29)!=0; //@line 2247 "_elementtree.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2247 "_elementtree.c"
      case 7: // $bb6
        var $31=HEAP[$value]; //@line 2247 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 2247 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2247 "_elementtree.c"
        var $34=((($33) - 1)&4294967295); //@line 2247 "_elementtree.c"
        var $35=HEAP[$value]; //@line 2247 "_elementtree.c"
        var $36=(($35)&4294967295); //@line 2247 "_elementtree.c"
        HEAP[$36]=$34; //@line 2247 "_elementtree.c"
        var $37=HEAP[$value]; //@line 2247 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 2247 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2247 "_elementtree.c"
        var $40=((($39))|0)==0; //@line 2247 "_elementtree.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2247 "_elementtree.c"
      case 8: // $bb7
        var $41=HEAP[$value]; //@line 2247 "_elementtree.c"
        var $42=(($41+4)&4294967295); //@line 2247 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2247 "_elementtree.c"
        var $44=(($43+24)&4294967295); //@line 2247 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2247 "_elementtree.c"
        var $46=HEAP[$value]; //@line 2247 "_elementtree.c"
        FUNCTION_TABLE[$45]($46); //@line 2247 "_elementtree.c"
        __label__ = 9; break; //@line 2247 "_elementtree.c"
      case 9: // $bb8
        var $47=HEAP[$key]; //@line 2248 "_elementtree.c"
        var $48=($47)!=0; //@line 2248 "_elementtree.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2248 "_elementtree.c"
      case 10: // $bb9
        var $49=HEAP[$key]; //@line 2248 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 2248 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2248 "_elementtree.c"
        var $52=((($51) - 1)&4294967295); //@line 2248 "_elementtree.c"
        var $53=HEAP[$key]; //@line 2248 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2248 "_elementtree.c"
        HEAP[$54]=$52; //@line 2248 "_elementtree.c"
        var $55=HEAP[$key]; //@line 2248 "_elementtree.c"
        var $56=(($55)&4294967295); //@line 2248 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2248 "_elementtree.c"
        var $58=((($57))|0)==0; //@line 2248 "_elementtree.c"
        if ($58) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2248 "_elementtree.c"
      case 11: // $bb10
        var $59=HEAP[$key]; //@line 2248 "_elementtree.c"
        var $60=(($59+4)&4294967295); //@line 2248 "_elementtree.c"
        var $61=HEAP[$60]; //@line 2248 "_elementtree.c"
        var $62=(($61+24)&4294967295); //@line 2248 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2248 "_elementtree.c"
        var $64=HEAP[$key]; //@line 2248 "_elementtree.c"
        FUNCTION_TABLE[$63]($64); //@line 2248 "_elementtree.c"
        __label__ = 12; break; //@line 2248 "_elementtree.c"
      case 12: // $bb11
        var $65=HEAP[$attrib]; //@line 2249 "_elementtree.c"
        var $66=(($65)&4294967295); //@line 2249 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2249 "_elementtree.c"
        var $68=((($67) - 1)&4294967295); //@line 2249 "_elementtree.c"
        var $69=HEAP[$attrib]; //@line 2249 "_elementtree.c"
        var $70=(($69)&4294967295); //@line 2249 "_elementtree.c"
        HEAP[$70]=$68; //@line 2249 "_elementtree.c"
        var $71=HEAP[$attrib]; //@line 2249 "_elementtree.c"
        var $72=(($71)&4294967295); //@line 2249 "_elementtree.c"
        var $73=HEAP[$72]; //@line 2249 "_elementtree.c"
        var $74=((($73))|0)==0; //@line 2249 "_elementtree.c"
        if ($74) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2249 "_elementtree.c"
      case 13: // $bb12
        var $75=HEAP[$attrib]; //@line 2249 "_elementtree.c"
        var $76=(($75+4)&4294967295); //@line 2249 "_elementtree.c"
        var $77=HEAP[$76]; //@line 2249 "_elementtree.c"
        var $78=(($77+24)&4294967295); //@line 2249 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2249 "_elementtree.c"
        var $80=HEAP[$attrib]; //@line 2249 "_elementtree.c"
        FUNCTION_TABLE[$79]($80); //@line 2249 "_elementtree.c"
        __label__ = 14; break; //@line 2249 "_elementtree.c"
      case 14: // $bb13
        __label__ = 44; break; //@line 2249 "_elementtree.c"
      case 15: // $bb14
        var $81=HEAP[$attrib]; //@line 2252 "_elementtree.c"
        var $82=HEAP[$key]; //@line 2252 "_elementtree.c"
        var $83=HEAP[$value]; //@line 2252 "_elementtree.c"
        var $84=_PyDict_SetItem($81, $82, $83); //@line 2252 "_elementtree.c"
        HEAP[$ok]=$84; //@line 2252 "_elementtree.c"
        var $85=HEAP[$value]; //@line 2253 "_elementtree.c"
        var $86=(($85)&4294967295); //@line 2253 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2253 "_elementtree.c"
        var $88=((($87) - 1)&4294967295); //@line 2253 "_elementtree.c"
        var $89=HEAP[$value]; //@line 2253 "_elementtree.c"
        var $90=(($89)&4294967295); //@line 2253 "_elementtree.c"
        HEAP[$90]=$88; //@line 2253 "_elementtree.c"
        var $91=HEAP[$value]; //@line 2253 "_elementtree.c"
        var $92=(($91)&4294967295); //@line 2253 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2253 "_elementtree.c"
        var $94=((($93))|0)==0; //@line 2253 "_elementtree.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2253 "_elementtree.c"
      case 16: // $bb15
        var $95=HEAP[$value]; //@line 2253 "_elementtree.c"
        var $96=(($95+4)&4294967295); //@line 2253 "_elementtree.c"
        var $97=HEAP[$96]; //@line 2253 "_elementtree.c"
        var $98=(($97+24)&4294967295); //@line 2253 "_elementtree.c"
        var $99=HEAP[$98]; //@line 2253 "_elementtree.c"
        var $100=HEAP[$value]; //@line 2253 "_elementtree.c"
        FUNCTION_TABLE[$99]($100); //@line 2253 "_elementtree.c"
        __label__ = 17; break; //@line 2253 "_elementtree.c"
      case 17: // $bb16
        var $101=HEAP[$key]; //@line 2254 "_elementtree.c"
        var $102=(($101)&4294967295); //@line 2254 "_elementtree.c"
        var $103=HEAP[$102]; //@line 2254 "_elementtree.c"
        var $104=((($103) - 1)&4294967295); //@line 2254 "_elementtree.c"
        var $105=HEAP[$key]; //@line 2254 "_elementtree.c"
        var $106=(($105)&4294967295); //@line 2254 "_elementtree.c"
        HEAP[$106]=$104; //@line 2254 "_elementtree.c"
        var $107=HEAP[$key]; //@line 2254 "_elementtree.c"
        var $108=(($107)&4294967295); //@line 2254 "_elementtree.c"
        var $109=HEAP[$108]; //@line 2254 "_elementtree.c"
        var $110=((($109))|0)==0; //@line 2254 "_elementtree.c"
        if ($110) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2254 "_elementtree.c"
      case 18: // $bb17
        var $111=HEAP[$key]; //@line 2254 "_elementtree.c"
        var $112=(($111+4)&4294967295); //@line 2254 "_elementtree.c"
        var $113=HEAP[$112]; //@line 2254 "_elementtree.c"
        var $114=(($113+24)&4294967295); //@line 2254 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2254 "_elementtree.c"
        var $116=HEAP[$key]; //@line 2254 "_elementtree.c"
        FUNCTION_TABLE[$115]($116); //@line 2254 "_elementtree.c"
        __label__ = 19; break; //@line 2254 "_elementtree.c"
      case 19: // $bb18
        var $117=HEAP[$ok]; //@line 2255 "_elementtree.c"
        var $118=((($117))|0) < 0; //@line 2255 "_elementtree.c"
        if ($118) { __label__ = 20; break; } else { __label__ = 23; break; } //@line 2255 "_elementtree.c"
      case 20: // $bb19
        var $119=HEAP[$attrib]; //@line 2256 "_elementtree.c"
        var $120=(($119)&4294967295); //@line 2256 "_elementtree.c"
        var $121=HEAP[$120]; //@line 2256 "_elementtree.c"
        var $122=((($121) - 1)&4294967295); //@line 2256 "_elementtree.c"
        var $123=HEAP[$attrib]; //@line 2256 "_elementtree.c"
        var $124=(($123)&4294967295); //@line 2256 "_elementtree.c"
        HEAP[$124]=$122; //@line 2256 "_elementtree.c"
        var $125=HEAP[$attrib]; //@line 2256 "_elementtree.c"
        var $126=(($125)&4294967295); //@line 2256 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2256 "_elementtree.c"
        var $128=((($127))|0)==0; //@line 2256 "_elementtree.c"
        if ($128) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2256 "_elementtree.c"
      case 21: // $bb20
        var $129=HEAP[$attrib]; //@line 2256 "_elementtree.c"
        var $130=(($129+4)&4294967295); //@line 2256 "_elementtree.c"
        var $131=HEAP[$130]; //@line 2256 "_elementtree.c"
        var $132=(($131+24)&4294967295); //@line 2256 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2256 "_elementtree.c"
        var $134=HEAP[$attrib]; //@line 2256 "_elementtree.c"
        FUNCTION_TABLE[$133]($134); //@line 2256 "_elementtree.c"
        __label__ = 22; break; //@line 2256 "_elementtree.c"
      case 22: // $bb21
        __label__ = 44; break; //@line 2256 "_elementtree.c"
      case 23: // $bb22
        var $135=HEAP[$attrib_in_addr]; //@line 2259 "_elementtree.c"
        var $136=(($135+8)&4294967295); //@line 2259 "_elementtree.c"
        HEAP[$attrib_in_addr]=$136; //@line 2259 "_elementtree.c"
        __label__ = 24; break; //@line 2259 "_elementtree.c"
      case 24: // $bb23
        var $137=HEAP[$attrib_in_addr]; //@line 2243 "_elementtree.c"
        var $138=(($137)&4294967295); //@line 2243 "_elementtree.c"
        var $139=HEAP[$138]; //@line 2243 "_elementtree.c"
        var $140=($139)==0; //@line 2243 "_elementtree.c"
        if ($140) { __label__ = 26; break; } else { __label__ = 25; break; } //@line 2243 "_elementtree.c"
      case 25: // $bb24
        var $141=HEAP[$attrib_in_addr]; //@line 2243 "_elementtree.c"
        var $142=(($141+4)&4294967295); //@line 2243 "_elementtree.c"
        var $143=HEAP[$142]; //@line 2243 "_elementtree.c"
        var $144=($143)!=0; //@line 2243 "_elementtree.c"
        if ($144) { __label__ = 4; break; } else { __label__ = 26; break; } //@line 2243 "_elementtree.c"
      case 26: // $bb25
        __label__ = 28; break; //@line 2243 "_elementtree.c"
      case 27: // $bb26
        var $145=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2262 "_elementtree.c"
        var $146=((($145) + 1)&4294967295); //@line 2262 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$146; //@line 2262 "_elementtree.c"
        HEAP[$attrib]=__Py_NoneStruct; //@line 2263 "_elementtree.c"
        __label__ = 28; break; //@line 2263 "_elementtree.c"
      case 28: // $bb27
        var $147=HEAP[$self_addr]; //@line 2266 "_elementtree.c"
        var $148=(($147+12)&4294967295); //@line 2266 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2266 "_elementtree.c"
        var $150=(($149+4)&4294967295); //@line 2266 "_elementtree.c"
        var $151=HEAP[$150]; //@line 2266 "_elementtree.c"
        var $152=($151)==(_TreeBuilder_Type); //@line 2266 "_elementtree.c"
        if ($152) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2266 "_elementtree.c"
      case 29: // $bb28
        var $153=HEAP[$self_addr]; //@line 2268 "_elementtree.c"
        var $154=(($153+12)&4294967295); //@line 2268 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2268 "_elementtree.c"
        var $156=$155; //@line 2268 "_elementtree.c"
        var $157=HEAP[$tag]; //@line 2268 "_elementtree.c"
        var $158=HEAP[$attrib]; //@line 2268 "_elementtree.c"
        var $159=_treebuilder_handle_start($156, $157, $158); //@line 2268 "_elementtree.c"
        HEAP[$res]=$159; //@line 2268 "_elementtree.c"
        __label__ = 37; break; //@line 2268 "_elementtree.c"
      case 30: // $bb29
        var $160=HEAP[$self_addr]; //@line 2270 "_elementtree.c"
        var $161=(($160+28)&4294967295); //@line 2270 "_elementtree.c"
        var $162=HEAP[$161]; //@line 2270 "_elementtree.c"
        var $163=($162)!=0; //@line 2270 "_elementtree.c"
        if ($163) { __label__ = 31; break; } else { __label__ = 36; break; } //@line 2270 "_elementtree.c"
      case 31: // $bb30
        var $164=HEAP[$attrib]; //@line 2271 "_elementtree.c"
        var $165=($164)==(__Py_NoneStruct); //@line 2271 "_elementtree.c"
        if ($165) { __label__ = 32; break; } else { __label__ = 35; break; } //@line 2271 "_elementtree.c"
      case 32: // $bb31
        var $166=HEAP[$attrib]; //@line 2272 "_elementtree.c"
        var $167=(($166)&4294967295); //@line 2272 "_elementtree.c"
        var $168=HEAP[$167]; //@line 2272 "_elementtree.c"
        var $169=((($168) - 1)&4294967295); //@line 2272 "_elementtree.c"
        var $170=HEAP[$attrib]; //@line 2272 "_elementtree.c"
        var $171=(($170)&4294967295); //@line 2272 "_elementtree.c"
        HEAP[$171]=$169; //@line 2272 "_elementtree.c"
        var $172=HEAP[$attrib]; //@line 2272 "_elementtree.c"
        var $173=(($172)&4294967295); //@line 2272 "_elementtree.c"
        var $174=HEAP[$173]; //@line 2272 "_elementtree.c"
        var $175=((($174))|0)==0; //@line 2272 "_elementtree.c"
        if ($175) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 2272 "_elementtree.c"
      case 33: // $bb32
        var $176=HEAP[$attrib]; //@line 2272 "_elementtree.c"
        var $177=(($176+4)&4294967295); //@line 2272 "_elementtree.c"
        var $178=HEAP[$177]; //@line 2272 "_elementtree.c"
        var $179=(($178+24)&4294967295); //@line 2272 "_elementtree.c"
        var $180=HEAP[$179]; //@line 2272 "_elementtree.c"
        var $181=HEAP[$attrib]; //@line 2272 "_elementtree.c"
        FUNCTION_TABLE[$180]($181); //@line 2272 "_elementtree.c"
        __label__ = 34; break; //@line 2272 "_elementtree.c"
      case 34: // $bb33
        var $182=_PyDict_New(); //@line 2273 "_elementtree.c"
        HEAP[$attrib]=$182; //@line 2273 "_elementtree.c"
        var $183=HEAP[$attrib]; //@line 2274 "_elementtree.c"
        var $184=($183)==0; //@line 2274 "_elementtree.c"
        if ($184) { __label__ = 44; break; } else { __label__ = 35; break; } //@line 2274 "_elementtree.c"
      case 35: // $bb34
        var $185=HEAP[$self_addr]; //@line 2277 "_elementtree.c"
        var $186=(($185+28)&4294967295); //@line 2277 "_elementtree.c"
        var $187=HEAP[$186]; //@line 2277 "_elementtree.c"
        var $188=HEAP[$tag]; //@line 2277 "_elementtree.c"
        var $189=HEAP[$attrib]; //@line 2277 "_elementtree.c"
        var $190=_PyObject_CallFunction($187, ((__str68)&4294967295), $188, $189); //@line 2277 "_elementtree.c"
        HEAP[$res]=$190; //@line 2277 "_elementtree.c"
        __label__ = 37; break; //@line 2277 "_elementtree.c"
      case 36: // $bb35
        HEAP[$res]=0; //@line 2279 "_elementtree.c"
        __label__ = 37; break; //@line 2279 "_elementtree.c"
      case 37: // $bb36
        var $191=HEAP[$tag]; //@line 2281 "_elementtree.c"
        var $192=(($191)&4294967295); //@line 2281 "_elementtree.c"
        var $193=HEAP[$192]; //@line 2281 "_elementtree.c"
        var $194=((($193) - 1)&4294967295); //@line 2281 "_elementtree.c"
        var $195=HEAP[$tag]; //@line 2281 "_elementtree.c"
        var $196=(($195)&4294967295); //@line 2281 "_elementtree.c"
        HEAP[$196]=$194; //@line 2281 "_elementtree.c"
        var $197=HEAP[$tag]; //@line 2281 "_elementtree.c"
        var $198=(($197)&4294967295); //@line 2281 "_elementtree.c"
        var $199=HEAP[$198]; //@line 2281 "_elementtree.c"
        var $200=((($199))|0)==0; //@line 2281 "_elementtree.c"
        if ($200) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 2281 "_elementtree.c"
      case 38: // $bb37
        var $201=HEAP[$tag]; //@line 2281 "_elementtree.c"
        var $202=(($201+4)&4294967295); //@line 2281 "_elementtree.c"
        var $203=HEAP[$202]; //@line 2281 "_elementtree.c"
        var $204=(($203+24)&4294967295); //@line 2281 "_elementtree.c"
        var $205=HEAP[$204]; //@line 2281 "_elementtree.c"
        var $206=HEAP[$tag]; //@line 2281 "_elementtree.c"
        FUNCTION_TABLE[$205]($206); //@line 2281 "_elementtree.c"
        __label__ = 39; break; //@line 2281 "_elementtree.c"
      case 39: // $bb38
        var $207=HEAP[$attrib]; //@line 2282 "_elementtree.c"
        var $208=(($207)&4294967295); //@line 2282 "_elementtree.c"
        var $209=HEAP[$208]; //@line 2282 "_elementtree.c"
        var $210=((($209) - 1)&4294967295); //@line 2282 "_elementtree.c"
        var $211=HEAP[$attrib]; //@line 2282 "_elementtree.c"
        var $212=(($211)&4294967295); //@line 2282 "_elementtree.c"
        HEAP[$212]=$210; //@line 2282 "_elementtree.c"
        var $213=HEAP[$attrib]; //@line 2282 "_elementtree.c"
        var $214=(($213)&4294967295); //@line 2282 "_elementtree.c"
        var $215=HEAP[$214]; //@line 2282 "_elementtree.c"
        var $216=((($215))|0)==0; //@line 2282 "_elementtree.c"
        if ($216) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 2282 "_elementtree.c"
      case 40: // $bb39
        var $217=HEAP[$attrib]; //@line 2282 "_elementtree.c"
        var $218=(($217+4)&4294967295); //@line 2282 "_elementtree.c"
        var $219=HEAP[$218]; //@line 2282 "_elementtree.c"
        var $220=(($219+24)&4294967295); //@line 2282 "_elementtree.c"
        var $221=HEAP[$220]; //@line 2282 "_elementtree.c"
        var $222=HEAP[$attrib]; //@line 2282 "_elementtree.c"
        FUNCTION_TABLE[$221]($222); //@line 2282 "_elementtree.c"
        __label__ = 41; break; //@line 2282 "_elementtree.c"
      case 41: // $bb40
        var $223=HEAP[$res]; //@line 2284 "_elementtree.c"
        var $224=($223)!=0; //@line 2284 "_elementtree.c"
        if ($224) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 2284 "_elementtree.c"
      case 42: // $bb41
        var $225=HEAP[$res]; //@line 2284 "_elementtree.c"
        var $226=(($225)&4294967295); //@line 2284 "_elementtree.c"
        var $227=HEAP[$226]; //@line 2284 "_elementtree.c"
        var $228=((($227) - 1)&4294967295); //@line 2284 "_elementtree.c"
        var $229=HEAP[$res]; //@line 2284 "_elementtree.c"
        var $230=(($229)&4294967295); //@line 2284 "_elementtree.c"
        HEAP[$230]=$228; //@line 2284 "_elementtree.c"
        var $231=HEAP[$res]; //@line 2284 "_elementtree.c"
        var $232=(($231)&4294967295); //@line 2284 "_elementtree.c"
        var $233=HEAP[$232]; //@line 2284 "_elementtree.c"
        var $234=((($233))|0)==0; //@line 2284 "_elementtree.c"
        if ($234) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2284 "_elementtree.c"
      case 43: // $bb42
        var $235=HEAP[$res]; //@line 2284 "_elementtree.c"
        var $236=(($235+4)&4294967295); //@line 2284 "_elementtree.c"
        var $237=HEAP[$236]; //@line 2284 "_elementtree.c"
        var $238=(($237+24)&4294967295); //@line 2284 "_elementtree.c"
        var $239=HEAP[$238]; //@line 2284 "_elementtree.c"
        var $240=HEAP[$res]; //@line 2284 "_elementtree.c"
        FUNCTION_TABLE[$239]($240); //@line 2284 "_elementtree.c"
        __label__ = 44; break; //@line 2284 "_elementtree.c"
      case 44: // $bb43
        __label__ = 45; break; //@line 2236 "_elementtree.c"
      case 45: // $return
        STACKTOP = __stackBase__;
        return; //@line 2236 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_data_handler($self, $data_in, $data_len) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $data_in_addr=__stackBase__+4;
        var $data_len_addr=__stackBase__+8;
        var $data=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$data_in_addr]=$data_in;
        HEAP[$data_len_addr]=$data_len;
        var $0=HEAP[$data_in_addr]; //@line 2294 "_elementtree.c"
        var $1=HEAP[$data_len_addr]; //@line 2294 "_elementtree.c"
        var $2=_makestring($0, $1); //@line 2294 "_elementtree.c"
        HEAP[$data]=$2; //@line 2294 "_elementtree.c"
        var $3=HEAP[$data]; //@line 2295 "_elementtree.c"
        var $4=($3)==0; //@line 2295 "_elementtree.c"
        if ($4) { __label__ = 11; break; } else { __label__ = 1; break; } //@line 2295 "_elementtree.c"
      case 1: // $bb
        var $5=HEAP[$self_addr]; //@line 2298 "_elementtree.c"
        var $6=(($5+12)&4294967295); //@line 2298 "_elementtree.c"
        var $7=HEAP[$6]; //@line 2298 "_elementtree.c"
        var $8=(($7+4)&4294967295); //@line 2298 "_elementtree.c"
        var $9=HEAP[$8]; //@line 2298 "_elementtree.c"
        var $10=($9)==(_TreeBuilder_Type); //@line 2298 "_elementtree.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2298 "_elementtree.c"
      case 2: // $bb1
        var $11=HEAP[$self_addr]; //@line 2300 "_elementtree.c"
        var $12=(($11+12)&4294967295); //@line 2300 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2300 "_elementtree.c"
        var $14=$13; //@line 2300 "_elementtree.c"
        var $15=HEAP[$data]; //@line 2300 "_elementtree.c"
        var $16=_treebuilder_handle_data($14, $15); //@line 2300 "_elementtree.c"
        HEAP[$res]=$16; //@line 2300 "_elementtree.c"
        __label__ = 6; break; //@line 2300 "_elementtree.c"
      case 3: // $bb2
        var $17=HEAP[$self_addr]; //@line 2301 "_elementtree.c"
        var $18=(($17+32)&4294967295); //@line 2301 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2301 "_elementtree.c"
        var $20=($19)!=0; //@line 2301 "_elementtree.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2301 "_elementtree.c"
      case 4: // $bb3
        var $21=HEAP[$self_addr]; //@line 2302 "_elementtree.c"
        var $22=(($21+32)&4294967295); //@line 2302 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2302 "_elementtree.c"
        var $24=HEAP[$data]; //@line 2302 "_elementtree.c"
        var $25=_PyObject_CallFunction($23, ((__str85)&4294967295), $24); //@line 2302 "_elementtree.c"
        HEAP[$res]=$25; //@line 2302 "_elementtree.c"
        __label__ = 6; break; //@line 2302 "_elementtree.c"
      case 5: // $bb4
        HEAP[$res]=0; //@line 2304 "_elementtree.c"
        __label__ = 6; break; //@line 2304 "_elementtree.c"
      case 6: // $bb5
        var $26=HEAP[$data]; //@line 2306 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 2306 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2306 "_elementtree.c"
        var $29=((($28) - 1)&4294967295); //@line 2306 "_elementtree.c"
        var $30=HEAP[$data]; //@line 2306 "_elementtree.c"
        var $31=(($30)&4294967295); //@line 2306 "_elementtree.c"
        HEAP[$31]=$29; //@line 2306 "_elementtree.c"
        var $32=HEAP[$data]; //@line 2306 "_elementtree.c"
        var $33=(($32)&4294967295); //@line 2306 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2306 "_elementtree.c"
        var $35=((($34))|0)==0; //@line 2306 "_elementtree.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2306 "_elementtree.c"
      case 7: // $bb6
        var $36=HEAP[$data]; //@line 2306 "_elementtree.c"
        var $37=(($36+4)&4294967295); //@line 2306 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2306 "_elementtree.c"
        var $39=(($38+24)&4294967295); //@line 2306 "_elementtree.c"
        var $40=HEAP[$39]; //@line 2306 "_elementtree.c"
        var $41=HEAP[$data]; //@line 2306 "_elementtree.c"
        FUNCTION_TABLE[$40]($41); //@line 2306 "_elementtree.c"
        __label__ = 8; break; //@line 2306 "_elementtree.c"
      case 8: // $bb7
        var $42=HEAP[$res]; //@line 2308 "_elementtree.c"
        var $43=($42)!=0; //@line 2308 "_elementtree.c"
        if ($43) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 2308 "_elementtree.c"
      case 9: // $bb8
        var $44=HEAP[$res]; //@line 2308 "_elementtree.c"
        var $45=(($44)&4294967295); //@line 2308 "_elementtree.c"
        var $46=HEAP[$45]; //@line 2308 "_elementtree.c"
        var $47=((($46) - 1)&4294967295); //@line 2308 "_elementtree.c"
        var $48=HEAP[$res]; //@line 2308 "_elementtree.c"
        var $49=(($48)&4294967295); //@line 2308 "_elementtree.c"
        HEAP[$49]=$47; //@line 2308 "_elementtree.c"
        var $50=HEAP[$res]; //@line 2308 "_elementtree.c"
        var $51=(($50)&4294967295); //@line 2308 "_elementtree.c"
        var $52=HEAP[$51]; //@line 2308 "_elementtree.c"
        var $53=((($52))|0)==0; //@line 2308 "_elementtree.c"
        if ($53) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2308 "_elementtree.c"
      case 10: // $bb9
        var $54=HEAP[$res]; //@line 2308 "_elementtree.c"
        var $55=(($54+4)&4294967295); //@line 2308 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2308 "_elementtree.c"
        var $57=(($56+24)&4294967295); //@line 2308 "_elementtree.c"
        var $58=HEAP[$57]; //@line 2308 "_elementtree.c"
        var $59=HEAP[$res]; //@line 2308 "_elementtree.c"
        FUNCTION_TABLE[$58]($59); //@line 2308 "_elementtree.c"
        __label__ = 11; break; //@line 2308 "_elementtree.c"
      case 11: // $bb10
        __label__ = 12; break; //@line 2296 "_elementtree.c"
      case 12: // $return
        STACKTOP = __stackBase__;
        return; //@line 2296 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_end_handler($self, $tag_in) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $tag_in_addr=__stackBase__+4;
        var $tag=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$tag_in_addr]=$tag_in;
        HEAP[$res]=0; //@line 2315 "_elementtree.c"
        var $0=HEAP[$self_addr]; //@line 2317 "_elementtree.c"
        var $1=(($0+12)&4294967295); //@line 2317 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2317 "_elementtree.c"
        var $3=(($2+4)&4294967295); //@line 2317 "_elementtree.c"
        var $4=HEAP[$3]; //@line 2317 "_elementtree.c"
        var $5=($4)==(_TreeBuilder_Type); //@line 2317 "_elementtree.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2317 "_elementtree.c"
      case 1: // $bb
        var $6=HEAP[$self_addr]; //@line 2320 "_elementtree.c"
        var $7=(($6+12)&4294967295); //@line 2320 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2320 "_elementtree.c"
        var $9=$8; //@line 2320 "_elementtree.c"
        var $10=_treebuilder_handle_end($9, __Py_NoneStruct); //@line 2320 "_elementtree.c"
        HEAP[$res]=$10; //@line 2320 "_elementtree.c"
        __label__ = 6; break; //@line 2320 "_elementtree.c"
      case 2: // $bb1
        var $11=HEAP[$self_addr]; //@line 2323 "_elementtree.c"
        var $12=(($11+36)&4294967295); //@line 2323 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2323 "_elementtree.c"
        var $14=($13)!=0; //@line 2323 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 2323 "_elementtree.c"
      case 3: // $bb2
        var $15=HEAP[$self_addr]; //@line 2324 "_elementtree.c"
        var $16=HEAP[$tag_in_addr]; //@line 2324 "_elementtree.c"
        var $17=_makeuniversal($15, $16); //@line 2324 "_elementtree.c"
        HEAP[$tag]=$17; //@line 2324 "_elementtree.c"
        var $18=HEAP[$tag]; //@line 2325 "_elementtree.c"
        var $19=($18)!=0; //@line 2325 "_elementtree.c"
        if ($19) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2325 "_elementtree.c"
      case 4: // $bb3
        var $20=HEAP[$self_addr]; //@line 2326 "_elementtree.c"
        var $21=(($20+36)&4294967295); //@line 2326 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2326 "_elementtree.c"
        var $23=HEAP[$tag]; //@line 2326 "_elementtree.c"
        var $24=_PyObject_CallFunction($22, ((__str85)&4294967295), $23); //@line 2326 "_elementtree.c"
        HEAP[$res]=$24; //@line 2326 "_elementtree.c"
        var $25=HEAP[$tag]; //@line 2327 "_elementtree.c"
        var $26=(($25)&4294967295); //@line 2327 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2327 "_elementtree.c"
        var $28=((($27) - 1)&4294967295); //@line 2327 "_elementtree.c"
        var $29=HEAP[$tag]; //@line 2327 "_elementtree.c"
        var $30=(($29)&4294967295); //@line 2327 "_elementtree.c"
        HEAP[$30]=$28; //@line 2327 "_elementtree.c"
        var $31=HEAP[$tag]; //@line 2327 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 2327 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2327 "_elementtree.c"
        var $34=((($33))|0)==0; //@line 2327 "_elementtree.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2327 "_elementtree.c"
      case 5: // $bb4
        var $35=HEAP[$tag]; //@line 2327 "_elementtree.c"
        var $36=(($35+4)&4294967295); //@line 2327 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2327 "_elementtree.c"
        var $38=(($37+24)&4294967295); //@line 2327 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2327 "_elementtree.c"
        var $40=HEAP[$tag]; //@line 2327 "_elementtree.c"
        FUNCTION_TABLE[$39]($40); //@line 2327 "_elementtree.c"
        __label__ = 6; break; //@line 2327 "_elementtree.c"
      case 6: // $bb5
        var $41=HEAP[$res]; //@line 2331 "_elementtree.c"
        var $42=($41)!=0; //@line 2331 "_elementtree.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2331 "_elementtree.c"
      case 7: // $bb6
        var $43=HEAP[$res]; //@line 2331 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 2331 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2331 "_elementtree.c"
        var $46=((($45) - 1)&4294967295); //@line 2331 "_elementtree.c"
        var $47=HEAP[$res]; //@line 2331 "_elementtree.c"
        var $48=(($47)&4294967295); //@line 2331 "_elementtree.c"
        HEAP[$48]=$46; //@line 2331 "_elementtree.c"
        var $49=HEAP[$res]; //@line 2331 "_elementtree.c"
        var $50=(($49)&4294967295); //@line 2331 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2331 "_elementtree.c"
        var $52=((($51))|0)==0; //@line 2331 "_elementtree.c"
        if ($52) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2331 "_elementtree.c"
      case 8: // $bb7
        var $53=HEAP[$res]; //@line 2331 "_elementtree.c"
        var $54=(($53+4)&4294967295); //@line 2331 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2331 "_elementtree.c"
        var $56=(($55+24)&4294967295); //@line 2331 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2331 "_elementtree.c"
        var $58=HEAP[$res]; //@line 2331 "_elementtree.c"
        FUNCTION_TABLE[$57]($58); //@line 2331 "_elementtree.c"
        __label__ = 9; break; //@line 2331 "_elementtree.c"
      case 9: // $bb8
        __label__ = 10; break; //@line 2332 "_elementtree.c"
      case 10: // $return
        STACKTOP = __stackBase__;
        return; //@line 2332 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_start_ns_handler($self, $prefix, $uri) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $prefix_addr=__stackBase__+4;
        var $uri_addr=__stackBase__+8;
        var $sprefix=__stackBase__+12;
        var $suri=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$prefix_addr]=$prefix;
        HEAP[$uri_addr]=$uri;
        HEAP[$sprefix]=0; //@line 2338 "_elementtree.c"
        HEAP[$suri]=0; //@line 2339 "_elementtree.c"
        var $0=HEAP[$uri_addr]; //@line 2341 "_elementtree.c"
        var $1=_strlen($0); //@line 2341 "_elementtree.c"
        var $2=HEAP[$uri_addr]; //@line 2341 "_elementtree.c"
        var $3=_makestring($2, $1); //@line 2341 "_elementtree.c"
        HEAP[$suri]=$3; //@line 2341 "_elementtree.c"
        var $4=HEAP[$suri]; //@line 2342 "_elementtree.c"
        var $5=($4)==0; //@line 2342 "_elementtree.c"
        if ($5) { __label__ = 12; break; } else { __label__ = 1; break; } //@line 2342 "_elementtree.c"
      case 1: // $bb
        var $6=HEAP[$prefix_addr]; //@line 2345 "_elementtree.c"
        var $7=($6)!=0; //@line 2345 "_elementtree.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2345 "_elementtree.c"
      case 2: // $bb1
        var $8=HEAP[$prefix_addr]; //@line 2346 "_elementtree.c"
        var $9=_strlen($8); //@line 2346 "_elementtree.c"
        var $10=HEAP[$prefix_addr]; //@line 2346 "_elementtree.c"
        var $11=_makestring($10, $9); //@line 2346 "_elementtree.c"
        HEAP[$sprefix]=$11; //@line 2346 "_elementtree.c"
        __label__ = 4; break; //@line 2346 "_elementtree.c"
      case 3: // $bb2
        var $12=_PyString_FromStringAndSize(((__str1)&4294967295), 0); //@line 2348 "_elementtree.c"
        HEAP[$sprefix]=$12; //@line 2348 "_elementtree.c"
        __label__ = 4; break; //@line 2348 "_elementtree.c"
      case 4: // $bb3
        var $13=HEAP[$sprefix]; //@line 2349 "_elementtree.c"
        var $14=($13)==0; //@line 2349 "_elementtree.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2349 "_elementtree.c"
      case 5: // $bb4
        var $15=HEAP[$suri]; //@line 2350 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 2350 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2350 "_elementtree.c"
        var $18=((($17) - 1)&4294967295); //@line 2350 "_elementtree.c"
        var $19=HEAP[$suri]; //@line 2350 "_elementtree.c"
        var $20=(($19)&4294967295); //@line 2350 "_elementtree.c"
        HEAP[$20]=$18; //@line 2350 "_elementtree.c"
        var $21=HEAP[$suri]; //@line 2350 "_elementtree.c"
        var $22=(($21)&4294967295); //@line 2350 "_elementtree.c"
        var $23=HEAP[$22]; //@line 2350 "_elementtree.c"
        var $24=((($23))|0)==0; //@line 2350 "_elementtree.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2350 "_elementtree.c"
      case 6: // $bb5
        var $25=HEAP[$suri]; //@line 2350 "_elementtree.c"
        var $26=(($25+4)&4294967295); //@line 2350 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2350 "_elementtree.c"
        var $28=(($27+24)&4294967295); //@line 2350 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2350 "_elementtree.c"
        var $30=HEAP[$suri]; //@line 2350 "_elementtree.c"
        FUNCTION_TABLE[$29]($30); //@line 2350 "_elementtree.c"
        __label__ = 7; break; //@line 2350 "_elementtree.c"
      case 7: // $bb6
        __label__ = 12; break; //@line 2350 "_elementtree.c"
      case 8: // $bb7
        var $31=HEAP[$self_addr]; //@line 2354 "_elementtree.c"
        var $32=(($31+12)&4294967295); //@line 2354 "_elementtree.c"
        var $33=HEAP[$32]; //@line 2354 "_elementtree.c"
        var $34=$33; //@line 2354 "_elementtree.c"
        var $35=HEAP[$sprefix]; //@line 2354 "_elementtree.c"
        var $36=HEAP[$suri]; //@line 2354 "_elementtree.c"
        _treebuilder_handle_namespace($34, 1, $35, $36); //@line 2354 "_elementtree.c"
        var $37=HEAP[$sprefix]; //@line 2358 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 2358 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2358 "_elementtree.c"
        var $40=((($39) - 1)&4294967295); //@line 2358 "_elementtree.c"
        var $41=HEAP[$sprefix]; //@line 2358 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 2358 "_elementtree.c"
        HEAP[$42]=$40; //@line 2358 "_elementtree.c"
        var $43=HEAP[$sprefix]; //@line 2358 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 2358 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2358 "_elementtree.c"
        var $46=((($45))|0)==0; //@line 2358 "_elementtree.c"
        if ($46) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2358 "_elementtree.c"
      case 9: // $bb8
        var $47=HEAP[$sprefix]; //@line 2358 "_elementtree.c"
        var $48=(($47+4)&4294967295); //@line 2358 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2358 "_elementtree.c"
        var $50=(($49+24)&4294967295); //@line 2358 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2358 "_elementtree.c"
        var $52=HEAP[$sprefix]; //@line 2358 "_elementtree.c"
        FUNCTION_TABLE[$51]($52); //@line 2358 "_elementtree.c"
        __label__ = 10; break; //@line 2358 "_elementtree.c"
      case 10: // $bb9
        var $53=HEAP[$suri]; //@line 2359 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2359 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2359 "_elementtree.c"
        var $56=((($55) - 1)&4294967295); //@line 2359 "_elementtree.c"
        var $57=HEAP[$suri]; //@line 2359 "_elementtree.c"
        var $58=(($57)&4294967295); //@line 2359 "_elementtree.c"
        HEAP[$58]=$56; //@line 2359 "_elementtree.c"
        var $59=HEAP[$suri]; //@line 2359 "_elementtree.c"
        var $60=(($59)&4294967295); //@line 2359 "_elementtree.c"
        var $61=HEAP[$60]; //@line 2359 "_elementtree.c"
        var $62=((($61))|0)==0; //@line 2359 "_elementtree.c"
        if ($62) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2359 "_elementtree.c"
      case 11: // $bb10
        var $63=HEAP[$suri]; //@line 2359 "_elementtree.c"
        var $64=(($63+4)&4294967295); //@line 2359 "_elementtree.c"
        var $65=HEAP[$64]; //@line 2359 "_elementtree.c"
        var $66=(($65+24)&4294967295); //@line 2359 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2359 "_elementtree.c"
        var $68=HEAP[$suri]; //@line 2359 "_elementtree.c"
        FUNCTION_TABLE[$67]($68); //@line 2359 "_elementtree.c"
        __label__ = 12; break; //@line 2359 "_elementtree.c"
      case 12: // $bb11
        __label__ = 13; break; //@line 2343 "_elementtree.c"
      case 13: // $return
        STACKTOP = __stackBase__;
        return; //@line 2343 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_end_ns_handler($self, $prefix_in) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $prefix_in_addr=__stackBase__+4;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$prefix_in_addr]=$prefix_in;
        var $0=HEAP[$self_addr]; //@line 2365 "_elementtree.c"
        var $1=(($0+12)&4294967295); //@line 2365 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2365 "_elementtree.c"
        var $3=$2; //@line 2365 "_elementtree.c"
        _treebuilder_handle_namespace($3, 0, 0, 0); //@line 2365 "_elementtree.c"
        __label__ = 1; break; //@line 2368 "_elementtree.c"
      case 1: // $return
        STACKTOP = __stackBase__;
        return; //@line 2368 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_comment_handler($self, $comment_in) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $comment_in_addr=__stackBase__+4;
        var $comment=__stackBase__+8;
        var $res=__stackBase__+12;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$comment_in_addr]=$comment_in;
        var $0=HEAP[$self_addr]; //@line 2376 "_elementtree.c"
        var $1=(($0+40)&4294967295); //@line 2376 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2376 "_elementtree.c"
        var $3=($2)!=0; //@line 2376 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 2376 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$comment_in_addr]; //@line 2377 "_elementtree.c"
        var $5=_strlen($4); //@line 2377 "_elementtree.c"
        var $6=HEAP[$comment_in_addr]; //@line 2377 "_elementtree.c"
        var $7=_makestring($6, $5); //@line 2377 "_elementtree.c"
        HEAP[$comment]=$7; //@line 2377 "_elementtree.c"
        var $8=HEAP[$comment]; //@line 2378 "_elementtree.c"
        var $9=($8)!=0; //@line 2378 "_elementtree.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 2378 "_elementtree.c"
      case 2: // $bb1
        var $10=HEAP[$self_addr]; //@line 2379 "_elementtree.c"
        var $11=(($10+40)&4294967295); //@line 2379 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2379 "_elementtree.c"
        var $13=HEAP[$comment]; //@line 2379 "_elementtree.c"
        var $14=_PyObject_CallFunction($12, ((__str85)&4294967295), $13); //@line 2379 "_elementtree.c"
        HEAP[$res]=$14; //@line 2379 "_elementtree.c"
        var $15=HEAP[$res]; //@line 2380 "_elementtree.c"
        var $16=($15)!=0; //@line 2380 "_elementtree.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2380 "_elementtree.c"
      case 3: // $bb2
        var $17=HEAP[$res]; //@line 2380 "_elementtree.c"
        var $18=(($17)&4294967295); //@line 2380 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2380 "_elementtree.c"
        var $20=((($19) - 1)&4294967295); //@line 2380 "_elementtree.c"
        var $21=HEAP[$res]; //@line 2380 "_elementtree.c"
        var $22=(($21)&4294967295); //@line 2380 "_elementtree.c"
        HEAP[$22]=$20; //@line 2380 "_elementtree.c"
        var $23=HEAP[$res]; //@line 2380 "_elementtree.c"
        var $24=(($23)&4294967295); //@line 2380 "_elementtree.c"
        var $25=HEAP[$24]; //@line 2380 "_elementtree.c"
        var $26=((($25))|0)==0; //@line 2380 "_elementtree.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2380 "_elementtree.c"
      case 4: // $bb3
        var $27=HEAP[$res]; //@line 2380 "_elementtree.c"
        var $28=(($27+4)&4294967295); //@line 2380 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2380 "_elementtree.c"
        var $30=(($29+24)&4294967295); //@line 2380 "_elementtree.c"
        var $31=HEAP[$30]; //@line 2380 "_elementtree.c"
        var $32=HEAP[$res]; //@line 2380 "_elementtree.c"
        FUNCTION_TABLE[$31]($32); //@line 2380 "_elementtree.c"
        __label__ = 5; break; //@line 2380 "_elementtree.c"
      case 5: // $bb4
        var $33=HEAP[$comment]; //@line 2381 "_elementtree.c"
        var $34=(($33)&4294967295); //@line 2381 "_elementtree.c"
        var $35=HEAP[$34]; //@line 2381 "_elementtree.c"
        var $36=((($35) - 1)&4294967295); //@line 2381 "_elementtree.c"
        var $37=HEAP[$comment]; //@line 2381 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 2381 "_elementtree.c"
        HEAP[$38]=$36; //@line 2381 "_elementtree.c"
        var $39=HEAP[$comment]; //@line 2381 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 2381 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2381 "_elementtree.c"
        var $42=((($41))|0)==0; //@line 2381 "_elementtree.c"
        if ($42) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2381 "_elementtree.c"
      case 6: // $bb5
        var $43=HEAP[$comment]; //@line 2381 "_elementtree.c"
        var $44=(($43+4)&4294967295); //@line 2381 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2381 "_elementtree.c"
        var $46=(($45+24)&4294967295); //@line 2381 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2381 "_elementtree.c"
        var $48=HEAP[$comment]; //@line 2381 "_elementtree.c"
        FUNCTION_TABLE[$47]($48); //@line 2381 "_elementtree.c"
        __label__ = 7; break; //@line 2381 "_elementtree.c"
      case 7: // $bb6
        __label__ = 8; break; //@line 2384 "_elementtree.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 2384 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_pi_handler($self, $target_in, $data_in) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $target_in_addr=__stackBase__+4;
        var $data_in_addr=__stackBase__+8;
        var $target=__stackBase__+12;
        var $data=__stackBase__+16;
        var $res=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$target_in_addr]=$target_in;
        HEAP[$data_in_addr]=$data_in;
        var $0=HEAP[$self_addr]; //@line 2394 "_elementtree.c"
        var $1=(($0+44)&4294967295); //@line 2394 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2394 "_elementtree.c"
        var $3=($2)!=0; //@line 2394 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 17; break; } //@line 2394 "_elementtree.c"
      case 1: // $bb
        var $4=HEAP[$target_in_addr]; //@line 2395 "_elementtree.c"
        var $5=_strlen($4); //@line 2395 "_elementtree.c"
        var $6=HEAP[$target_in_addr]; //@line 2395 "_elementtree.c"
        var $7=_makestring($6, $5); //@line 2395 "_elementtree.c"
        HEAP[$target]=$7; //@line 2395 "_elementtree.c"
        var $8=HEAP[$data_in_addr]; //@line 2396 "_elementtree.c"
        var $9=_strlen($8); //@line 2396 "_elementtree.c"
        var $10=HEAP[$data_in_addr]; //@line 2396 "_elementtree.c"
        var $11=_makestring($10, $9); //@line 2396 "_elementtree.c"
        HEAP[$data]=$11; //@line 2396 "_elementtree.c"
        var $12=HEAP[$target]; //@line 2397 "_elementtree.c"
        var $13=($12)==0; //@line 2397 "_elementtree.c"
        if ($13) { __label__ = 11; break; } else { __label__ = 2; break; } //@line 2397 "_elementtree.c"
      case 2: // $bb1
        var $14=HEAP[$data]; //@line 2397 "_elementtree.c"
        var $15=($14)==0; //@line 2397 "_elementtree.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 3; break; } //@line 2397 "_elementtree.c"
      case 3: // $bb2
        var $16=HEAP[$self_addr]; //@line 2398 "_elementtree.c"
        var $17=(($16+44)&4294967295); //@line 2398 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2398 "_elementtree.c"
        var $19=HEAP[$target]; //@line 2398 "_elementtree.c"
        var $20=HEAP[$data]; //@line 2398 "_elementtree.c"
        var $21=_PyObject_CallFunction($18, ((__str68)&4294967295), $19, $20); //@line 2398 "_elementtree.c"
        HEAP[$res]=$21; //@line 2398 "_elementtree.c"
        var $22=HEAP[$res]; //@line 2399 "_elementtree.c"
        var $23=($22)!=0; //@line 2399 "_elementtree.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2399 "_elementtree.c"
      case 4: // $bb3
        var $24=HEAP[$res]; //@line 2399 "_elementtree.c"
        var $25=(($24)&4294967295); //@line 2399 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2399 "_elementtree.c"
        var $27=((($26) - 1)&4294967295); //@line 2399 "_elementtree.c"
        var $28=HEAP[$res]; //@line 2399 "_elementtree.c"
        var $29=(($28)&4294967295); //@line 2399 "_elementtree.c"
        HEAP[$29]=$27; //@line 2399 "_elementtree.c"
        var $30=HEAP[$res]; //@line 2399 "_elementtree.c"
        var $31=(($30)&4294967295); //@line 2399 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2399 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 2399 "_elementtree.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2399 "_elementtree.c"
      case 5: // $bb4
        var $34=HEAP[$res]; //@line 2399 "_elementtree.c"
        var $35=(($34+4)&4294967295); //@line 2399 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2399 "_elementtree.c"
        var $37=(($36+24)&4294967295); //@line 2399 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2399 "_elementtree.c"
        var $39=HEAP[$res]; //@line 2399 "_elementtree.c"
        FUNCTION_TABLE[$38]($39); //@line 2399 "_elementtree.c"
        __label__ = 6; break; //@line 2399 "_elementtree.c"
      case 6: // $bb5
        var $40=HEAP[$data]; //@line 2400 "_elementtree.c"
        var $41=(($40)&4294967295); //@line 2400 "_elementtree.c"
        var $42=HEAP[$41]; //@line 2400 "_elementtree.c"
        var $43=((($42) - 1)&4294967295); //@line 2400 "_elementtree.c"
        var $44=HEAP[$data]; //@line 2400 "_elementtree.c"
        var $45=(($44)&4294967295); //@line 2400 "_elementtree.c"
        HEAP[$45]=$43; //@line 2400 "_elementtree.c"
        var $46=HEAP[$data]; //@line 2400 "_elementtree.c"
        var $47=(($46)&4294967295); //@line 2400 "_elementtree.c"
        var $48=HEAP[$47]; //@line 2400 "_elementtree.c"
        var $49=((($48))|0)==0; //@line 2400 "_elementtree.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2400 "_elementtree.c"
      case 7: // $bb6
        var $50=HEAP[$data]; //@line 2400 "_elementtree.c"
        var $51=(($50+4)&4294967295); //@line 2400 "_elementtree.c"
        var $52=HEAP[$51]; //@line 2400 "_elementtree.c"
        var $53=(($52+24)&4294967295); //@line 2400 "_elementtree.c"
        var $54=HEAP[$53]; //@line 2400 "_elementtree.c"
        var $55=HEAP[$data]; //@line 2400 "_elementtree.c"
        FUNCTION_TABLE[$54]($55); //@line 2400 "_elementtree.c"
        __label__ = 8; break; //@line 2400 "_elementtree.c"
      case 8: // $bb7
        var $56=HEAP[$target]; //@line 2401 "_elementtree.c"
        var $57=(($56)&4294967295); //@line 2401 "_elementtree.c"
        var $58=HEAP[$57]; //@line 2401 "_elementtree.c"
        var $59=((($58) - 1)&4294967295); //@line 2401 "_elementtree.c"
        var $60=HEAP[$target]; //@line 2401 "_elementtree.c"
        var $61=(($60)&4294967295); //@line 2401 "_elementtree.c"
        HEAP[$61]=$59; //@line 2401 "_elementtree.c"
        var $62=HEAP[$target]; //@line 2401 "_elementtree.c"
        var $63=(($62)&4294967295); //@line 2401 "_elementtree.c"
        var $64=HEAP[$63]; //@line 2401 "_elementtree.c"
        var $65=((($64))|0)==0; //@line 2401 "_elementtree.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2401 "_elementtree.c"
      case 9: // $bb8
        var $66=HEAP[$target]; //@line 2401 "_elementtree.c"
        var $67=(($66+4)&4294967295); //@line 2401 "_elementtree.c"
        var $68=HEAP[$67]; //@line 2401 "_elementtree.c"
        var $69=(($68+24)&4294967295); //@line 2401 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2401 "_elementtree.c"
        var $71=HEAP[$target]; //@line 2401 "_elementtree.c"
        FUNCTION_TABLE[$70]($71); //@line 2401 "_elementtree.c"
        __label__ = 10; break; //@line 2401 "_elementtree.c"
      case 10: // $bb9
        __label__ = 17; break; //@line 2401 "_elementtree.c"
      case 11: // $bb10
        var $72=HEAP[$data]; //@line 2403 "_elementtree.c"
        var $73=($72)!=0; //@line 2403 "_elementtree.c"
        if ($73) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2403 "_elementtree.c"
      case 12: // $bb11
        var $74=HEAP[$data]; //@line 2403 "_elementtree.c"
        var $75=(($74)&4294967295); //@line 2403 "_elementtree.c"
        var $76=HEAP[$75]; //@line 2403 "_elementtree.c"
        var $77=((($76) - 1)&4294967295); //@line 2403 "_elementtree.c"
        var $78=HEAP[$data]; //@line 2403 "_elementtree.c"
        var $79=(($78)&4294967295); //@line 2403 "_elementtree.c"
        HEAP[$79]=$77; //@line 2403 "_elementtree.c"
        var $80=HEAP[$data]; //@line 2403 "_elementtree.c"
        var $81=(($80)&4294967295); //@line 2403 "_elementtree.c"
        var $82=HEAP[$81]; //@line 2403 "_elementtree.c"
        var $83=((($82))|0)==0; //@line 2403 "_elementtree.c"
        if ($83) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2403 "_elementtree.c"
      case 13: // $bb12
        var $84=HEAP[$data]; //@line 2403 "_elementtree.c"
        var $85=(($84+4)&4294967295); //@line 2403 "_elementtree.c"
        var $86=HEAP[$85]; //@line 2403 "_elementtree.c"
        var $87=(($86+24)&4294967295); //@line 2403 "_elementtree.c"
        var $88=HEAP[$87]; //@line 2403 "_elementtree.c"
        var $89=HEAP[$data]; //@line 2403 "_elementtree.c"
        FUNCTION_TABLE[$88]($89); //@line 2403 "_elementtree.c"
        __label__ = 14; break; //@line 2403 "_elementtree.c"
      case 14: // $bb13
        var $90=HEAP[$target]; //@line 2404 "_elementtree.c"
        var $91=($90)!=0; //@line 2404 "_elementtree.c"
        if ($91) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 2404 "_elementtree.c"
      case 15: // $bb14
        var $92=HEAP[$target]; //@line 2404 "_elementtree.c"
        var $93=(($92)&4294967295); //@line 2404 "_elementtree.c"
        var $94=HEAP[$93]; //@line 2404 "_elementtree.c"
        var $95=((($94) - 1)&4294967295); //@line 2404 "_elementtree.c"
        var $96=HEAP[$target]; //@line 2404 "_elementtree.c"
        var $97=(($96)&4294967295); //@line 2404 "_elementtree.c"
        HEAP[$97]=$95; //@line 2404 "_elementtree.c"
        var $98=HEAP[$target]; //@line 2404 "_elementtree.c"
        var $99=(($98)&4294967295); //@line 2404 "_elementtree.c"
        var $100=HEAP[$99]; //@line 2404 "_elementtree.c"
        var $101=((($100))|0)==0; //@line 2404 "_elementtree.c"
        if ($101) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2404 "_elementtree.c"
      case 16: // $bb15
        var $102=HEAP[$target]; //@line 2404 "_elementtree.c"
        var $103=(($102+4)&4294967295); //@line 2404 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2404 "_elementtree.c"
        var $105=(($104+24)&4294967295); //@line 2404 "_elementtree.c"
        var $106=HEAP[$105]; //@line 2404 "_elementtree.c"
        var $107=HEAP[$target]; //@line 2404 "_elementtree.c"
        FUNCTION_TABLE[$106]($107); //@line 2404 "_elementtree.c"
        __label__ = 17; break; //@line 2404 "_elementtree.c"
      case 17: // $bb16
        __label__ = 18; break; //@line 2407 "_elementtree.c"
      case 18: // $return
        STACKTOP = __stackBase__;
        return; //@line 2407 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_unknown_encoding_handler($self, $name, $info) {
    var __stackBase__  = STACKTOP; STACKTOP += 288; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $info_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $u=__stackBase__+20;
        var $p=__stackBase__+24;
        var $s=__stackBase__+28;
        var $i=__stackBase__+284;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        HEAP[$info_addr]=$info;
        var $1=HEAP[$info_addr]; //@line 2419 "_elementtree.c"
        var $2=$1; //@line 2419 "_elementtree.c"
        _llvm_memset_p0i8_i32($2, 0, 1036, 1, 0); //@line 2419 "_elementtree.c"
        HEAP[$i]=0; //@line 2421 "_elementtree.c"
        __label__ = 2; break; //@line 2421 "_elementtree.c"
      case 1: // $bb
        var $3=HEAP[$i]; //@line 2422 "_elementtree.c"
        var $4=HEAP[$i]; //@line 2422 "_elementtree.c"
        var $5=((($4)) & 255); //@line 2422 "_elementtree.c"
        var $6=(($s+$3)&4294967295); //@line 2422 "_elementtree.c"
        HEAP[$6]=$5; //@line 2422 "_elementtree.c"
        var $7=HEAP[$i]; //@line 2421 "_elementtree.c"
        var $8=((($7) + 1)&4294967295); //@line 2421 "_elementtree.c"
        HEAP[$i]=$8; //@line 2421 "_elementtree.c"
        __label__ = 2; break; //@line 2421 "_elementtree.c"
      case 2: // $bb1
        var $9=HEAP[$i]; //@line 2421 "_elementtree.c"
        var $10=((($9))|0) <= 255; //@line 2421 "_elementtree.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2421 "_elementtree.c"
      case 3: // $bb2
        var $s3=$s; //@line 2424 "_elementtree.c"
        var $11=HEAP[$name_addr]; //@line 2424 "_elementtree.c"
        var $12=_PyUnicodeUCS2_Decode($s3, 256, $11, ((__str87)&4294967295)); //@line 2424 "_elementtree.c"
        HEAP[$u]=$12; //@line 2424 "_elementtree.c"
        var $13=HEAP[$u]; //@line 2425 "_elementtree.c"
        var $14=($13)==0; //@line 2425 "_elementtree.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2425 "_elementtree.c"
      case 4: // $bb5
        HEAP[$0]=0; //@line 2426 "_elementtree.c"
        __label__ = 18; break; //@line 2426 "_elementtree.c"
      case 5: // $bb6
        var $15=HEAP[$u]; //@line 2428 "_elementtree.c"
        var $16=$15; //@line 2428 "_elementtree.c"
        var $17=(($16+8)&4294967295); //@line 2428 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2428 "_elementtree.c"
        var $19=((($18))|0)!=256; //@line 2428 "_elementtree.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 2428 "_elementtree.c"
      case 6: // $bb7
        var $20=HEAP[$u]; //@line 2429 "_elementtree.c"
        var $21=(($20)&4294967295); //@line 2429 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2429 "_elementtree.c"
        var $23=((($22) - 1)&4294967295); //@line 2429 "_elementtree.c"
        var $24=HEAP[$u]; //@line 2429 "_elementtree.c"
        var $25=(($24)&4294967295); //@line 2429 "_elementtree.c"
        HEAP[$25]=$23; //@line 2429 "_elementtree.c"
        var $26=HEAP[$u]; //@line 2429 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 2429 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2429 "_elementtree.c"
        var $29=((($28))|0)==0; //@line 2429 "_elementtree.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2429 "_elementtree.c"
      case 7: // $bb8
        var $30=HEAP[$u]; //@line 2429 "_elementtree.c"
        var $31=(($30+4)&4294967295); //@line 2429 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2429 "_elementtree.c"
        var $33=(($32+24)&4294967295); //@line 2429 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2429 "_elementtree.c"
        var $35=HEAP[$u]; //@line 2429 "_elementtree.c"
        FUNCTION_TABLE[$34]($35); //@line 2429 "_elementtree.c"
        __label__ = 8; break; //@line 2429 "_elementtree.c"
      case 8: // $bb9
        HEAP[$0]=0; //@line 2430 "_elementtree.c"
        __label__ = 18; break; //@line 2430 "_elementtree.c"
      case 9: // $bb10
        var $36=HEAP[$u]; //@line 2433 "_elementtree.c"
        var $37=$36; //@line 2433 "_elementtree.c"
        var $38=(($37+12)&4294967295); //@line 2433 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2433 "_elementtree.c"
        HEAP[$p]=$39; //@line 2433 "_elementtree.c"
        HEAP[$i]=0; //@line 2435 "_elementtree.c"
        __label__ = 14; break; //@line 2435 "_elementtree.c"
      case 10: // $bb11
        var $40=HEAP[$p]; //@line 2436 "_elementtree.c"
        var $41=HEAP[$i]; //@line 2436 "_elementtree.c"
        var $42=(($40+2*$41)&4294967295); //@line 2436 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2436 "_elementtree.c"
        var $44=reSign(($43), 16, 0)!=-3; //@line 2436 "_elementtree.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2436 "_elementtree.c"
      case 11: // $bb12
        var $45=HEAP[$i]; //@line 2437 "_elementtree.c"
        var $46=HEAP[$p]; //@line 2437 "_elementtree.c"
        var $47=HEAP[$i]; //@line 2437 "_elementtree.c"
        var $48=(($46+2*$47)&4294967295); //@line 2437 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2437 "_elementtree.c"
        var $50=unSign(($49), 16, 0); //@line 2437 "_elementtree.c"
        var $51=HEAP[$info_addr]; //@line 2437 "_elementtree.c"
        var $52=(($51)&4294967295); //@line 2437 "_elementtree.c"
        var $53=(($52+$45*4)&4294967295); //@line 2437 "_elementtree.c"
        HEAP[$53]=$50; //@line 2437 "_elementtree.c"
        __label__ = 13; break; //@line 2437 "_elementtree.c"
      case 12: // $bb13
        var $54=HEAP[$i]; //@line 2439 "_elementtree.c"
        var $55=HEAP[$info_addr]; //@line 2439 "_elementtree.c"
        var $56=(($55)&4294967295); //@line 2439 "_elementtree.c"
        var $57=(($56+$54*4)&4294967295); //@line 2439 "_elementtree.c"
        HEAP[$57]=-1; //@line 2439 "_elementtree.c"
        __label__ = 13; break; //@line 2439 "_elementtree.c"
      case 13: // $bb14
        var $58=HEAP[$i]; //@line 2435 "_elementtree.c"
        var $59=((($58) + 1)&4294967295); //@line 2435 "_elementtree.c"
        HEAP[$i]=$59; //@line 2435 "_elementtree.c"
        __label__ = 14; break; //@line 2435 "_elementtree.c"
      case 14: // $bb15
        var $60=HEAP[$i]; //@line 2435 "_elementtree.c"
        var $61=((($60))|0) <= 255; //@line 2435 "_elementtree.c"
        if ($61) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 2435 "_elementtree.c"
      case 15: // $bb16
        var $62=HEAP[$u]; //@line 2442 "_elementtree.c"
        var $63=(($62)&4294967295); //@line 2442 "_elementtree.c"
        var $64=HEAP[$63]; //@line 2442 "_elementtree.c"
        var $65=((($64) - 1)&4294967295); //@line 2442 "_elementtree.c"
        var $66=HEAP[$u]; //@line 2442 "_elementtree.c"
        var $67=(($66)&4294967295); //@line 2442 "_elementtree.c"
        HEAP[$67]=$65; //@line 2442 "_elementtree.c"
        var $68=HEAP[$u]; //@line 2442 "_elementtree.c"
        var $69=(($68)&4294967295); //@line 2442 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2442 "_elementtree.c"
        var $71=((($70))|0)==0; //@line 2442 "_elementtree.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2442 "_elementtree.c"
      case 16: // $bb17
        var $72=HEAP[$u]; //@line 2442 "_elementtree.c"
        var $73=(($72+4)&4294967295); //@line 2442 "_elementtree.c"
        var $74=HEAP[$73]; //@line 2442 "_elementtree.c"
        var $75=(($74+24)&4294967295); //@line 2442 "_elementtree.c"
        var $76=HEAP[$75]; //@line 2442 "_elementtree.c"
        var $77=HEAP[$u]; //@line 2442 "_elementtree.c"
        FUNCTION_TABLE[$76]($77); //@line 2442 "_elementtree.c"
        __label__ = 17; break; //@line 2442 "_elementtree.c"
      case 17: // $bb18
        HEAP[$0]=1; //@line 2444 "_elementtree.c"
        __label__ = 18; break; //@line 2444 "_elementtree.c"
      case 18: // $bb19
        var $78=HEAP[$0]; //@line 2426 "_elementtree.c"
        HEAP[$retval]=$78; //@line 2426 "_elementtree.c"
        __label__ = 19; break; //@line 2426 "_elementtree.c"
      case 19: // $return
        var $retval20=HEAP[$retval]; //@line 2426 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 2426 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser($self_, $args, $kw) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self__addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $kw_addr=__stackBase__+8;
        var $retval=__stackBase__+12;
        var $0=__stackBase__+16;
        var $self=__stackBase__+20;
        var $target=__stackBase__+24;
        var $encoding=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self__addr]=$self_;
        HEAP[$args_addr]=$args;
        HEAP[$kw_addr]=$kw;
        HEAP[$target]=0; //@line 2458 "_elementtree.c"
        HEAP[$encoding]=0; //@line 2459 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 2461 "_elementtree.c"
        var $2=HEAP[$kw_addr]; //@line 2461 "_elementtree.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, ((__str88)&4294967295), ((_kwlist_12208)&4294967295), $target, $encoding); //@line 2461 "_elementtree.c"
        var $4=((($3))|0)==0; //@line 2461 "_elementtree.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2461 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2463 "_elementtree.c"
        __label__ = 22; break; //@line 2463 "_elementtree.c"
      case 2: // $bb1
        var $5=HEAP[_expat_capi]; //@line 2466 "_elementtree.c"
        var $6=($5)==0; //@line 2466 "_elementtree.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2466 "_elementtree.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_RuntimeError]; //@line 2467 "_elementtree.c"
        _PyErr_SetString($7, ((__str91)&4294967295)); //@line 2467 "_elementtree.c"
        HEAP[$0]=0; //@line 2470 "_elementtree.c"
        __label__ = 22; break; //@line 2470 "_elementtree.c"
      case 4: // $bb3
        var $8=__PyObject_New(_XMLParser_Type); //@line 2474 "_elementtree.c"
        var $9=$8; //@line 2474 "_elementtree.c"
        HEAP[$self]=$9; //@line 2474 "_elementtree.c"
        var $10=HEAP[$self]; //@line 2475 "_elementtree.c"
        var $11=($10)==0; //@line 2475 "_elementtree.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2475 "_elementtree.c"
      case 5: // $bb4
        HEAP[$0]=0; //@line 2476 "_elementtree.c"
        __label__ = 22; break; //@line 2476 "_elementtree.c"
      case 6: // $bb5
        var $12=_PyDict_New(); //@line 2478 "_elementtree.c"
        var $13=HEAP[$self]; //@line 2478 "_elementtree.c"
        var $14=(($13+16)&4294967295); //@line 2478 "_elementtree.c"
        HEAP[$14]=$12; //@line 2478 "_elementtree.c"
        var $15=HEAP[$self]; //@line 2479 "_elementtree.c"
        var $16=(($15+16)&4294967295); //@line 2479 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2479 "_elementtree.c"
        var $18=($17)==0; //@line 2479 "_elementtree.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2479 "_elementtree.c"
      case 7: // $bb6
        var $19=HEAP[$self]; //@line 2480 "_elementtree.c"
        var $20=$19; //@line 2480 "_elementtree.c"
        _PyObject_Free($20); //@line 2480 "_elementtree.c"
        HEAP[$0]=0; //@line 2481 "_elementtree.c"
        __label__ = 22; break; //@line 2481 "_elementtree.c"
      case 8: // $bb7
        var $21=_PyDict_New(); //@line 2484 "_elementtree.c"
        var $22=HEAP[$self]; //@line 2484 "_elementtree.c"
        var $23=(($22+20)&4294967295); //@line 2484 "_elementtree.c"
        HEAP[$23]=$21; //@line 2484 "_elementtree.c"
        var $24=HEAP[$self]; //@line 2485 "_elementtree.c"
        var $25=(($24+20)&4294967295); //@line 2485 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2485 "_elementtree.c"
        var $27=($26)==0; //@line 2485 "_elementtree.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2485 "_elementtree.c"
      case 9: // $bb8
        var $28=HEAP[$self]; //@line 2486 "_elementtree.c"
        var $29=(($28+16)&4294967295); //@line 2486 "_elementtree.c"
        var $30=HEAP[$29]; //@line 2486 "_elementtree.c"
        var $31=$30; //@line 2486 "_elementtree.c"
        _PyObject_Free($31); //@line 2486 "_elementtree.c"
        var $32=HEAP[$self]; //@line 2487 "_elementtree.c"
        var $33=$32; //@line 2487 "_elementtree.c"
        _PyObject_Free($33); //@line 2487 "_elementtree.c"
        HEAP[$0]=0; //@line 2488 "_elementtree.c"
        __label__ = 22; break; //@line 2488 "_elementtree.c"
      case 10: // $bb9
        HEAP[((_memory_handler_12205)&4294967295)]=(FUNCTION_TABLE_OFFSET + 2); //@line 2491 "_elementtree.c"
        HEAP[((_memory_handler_12205+4)&4294967295)]=(FUNCTION_TABLE_OFFSET + 4); //@line 2492 "_elementtree.c"
        HEAP[((_memory_handler_12205+8)&4294967295)]=(FUNCTION_TABLE_OFFSET + 6); //@line 2493 "_elementtree.c"
        var $34=HEAP[_expat_capi]; //@line 2495 "_elementtree.c"
        var $35=(($34+40)&4294967295); //@line 2495 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2495 "_elementtree.c"
        var $37=HEAP[$encoding]; //@line 2495 "_elementtree.c"
        var $38=FUNCTION_TABLE[$36]($37, _memory_handler_12205, ((__str92)&4294967295)); //@line 2495 "_elementtree.c"
        var $39=HEAP[$self]; //@line 2495 "_elementtree.c"
        var $40=(($39+8)&4294967295); //@line 2495 "_elementtree.c"
        HEAP[$40]=$38; //@line 2495 "_elementtree.c"
        var $41=HEAP[$self]; //@line 2496 "_elementtree.c"
        var $42=(($41+8)&4294967295); //@line 2496 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2496 "_elementtree.c"
        var $44=($43)==0; //@line 2496 "_elementtree.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2496 "_elementtree.c"
      case 11: // $bb10
        var $45=HEAP[$self]; //@line 2497 "_elementtree.c"
        var $46=(($45+20)&4294967295); //@line 2497 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2497 "_elementtree.c"
        var $48=$47; //@line 2497 "_elementtree.c"
        _PyObject_Free($48); //@line 2497 "_elementtree.c"
        var $49=HEAP[$self]; //@line 2498 "_elementtree.c"
        var $50=(($49+16)&4294967295); //@line 2498 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2498 "_elementtree.c"
        var $52=$51; //@line 2498 "_elementtree.c"
        _PyObject_Free($52); //@line 2498 "_elementtree.c"
        var $53=HEAP[$self]; //@line 2499 "_elementtree.c"
        var $54=$53; //@line 2499 "_elementtree.c"
        _PyObject_Free($54); //@line 2499 "_elementtree.c"
        var $55=_PyErr_NoMemory(); //@line 2500 "_elementtree.c"
        HEAP[$0]=0; //@line 2501 "_elementtree.c"
        __label__ = 22; break; //@line 2501 "_elementtree.c"
      case 12: // $bb11
        var $56=HEAP[$target]; //@line 2505 "_elementtree.c"
        var $57=($56)==0; //@line 2505 "_elementtree.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 2505 "_elementtree.c"
      case 13: // $bb12
        var $58=_treebuilder_new(); //@line 2506 "_elementtree.c"
        HEAP[$target]=$58; //@line 2506 "_elementtree.c"
        var $59=HEAP[$target]; //@line 2507 "_elementtree.c"
        var $60=($59)==0; //@line 2507 "_elementtree.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2507 "_elementtree.c"
      case 14: // $bb13
        var $61=HEAP[_expat_capi]; //@line 2508 "_elementtree.c"
        var $62=(($61+44)&4294967295); //@line 2508 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2508 "_elementtree.c"
        var $64=HEAP[$self]; //@line 2508 "_elementtree.c"
        var $65=(($64+8)&4294967295); //@line 2508 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2508 "_elementtree.c"
        FUNCTION_TABLE[$63]($66); //@line 2508 "_elementtree.c"
        var $67=HEAP[$self]; //@line 2509 "_elementtree.c"
        var $68=(($67+20)&4294967295); //@line 2509 "_elementtree.c"
        var $69=HEAP[$68]; //@line 2509 "_elementtree.c"
        var $70=$69; //@line 2509 "_elementtree.c"
        _PyObject_Free($70); //@line 2509 "_elementtree.c"
        var $71=HEAP[$self]; //@line 2510 "_elementtree.c"
        var $72=(($71+16)&4294967295); //@line 2510 "_elementtree.c"
        var $73=HEAP[$72]; //@line 2510 "_elementtree.c"
        var $74=$73; //@line 2510 "_elementtree.c"
        _PyObject_Free($74); //@line 2510 "_elementtree.c"
        var $75=HEAP[$self]; //@line 2511 "_elementtree.c"
        var $76=$75; //@line 2511 "_elementtree.c"
        _PyObject_Free($76); //@line 2511 "_elementtree.c"
        HEAP[$0]=0; //@line 2512 "_elementtree.c"
        __label__ = 22; break; //@line 2512 "_elementtree.c"
      case 15: // $bb14
        __label__ = 17; break; //@line 2512 "_elementtree.c"
      case 16: // $bb15
        var $77=HEAP[$target]; //@line 2515 "_elementtree.c"
        var $78=(($77)&4294967295); //@line 2515 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2515 "_elementtree.c"
        var $80=((($79) + 1)&4294967295); //@line 2515 "_elementtree.c"
        var $81=(($77)&4294967295); //@line 2515 "_elementtree.c"
        HEAP[$81]=$80; //@line 2515 "_elementtree.c"
        __label__ = 17; break; //@line 2515 "_elementtree.c"
      case 17: // $bb16
        var $82=HEAP[$target]; //@line 2516 "_elementtree.c"
        var $83=HEAP[$self]; //@line 2516 "_elementtree.c"
        var $84=(($83+12)&4294967295); //@line 2516 "_elementtree.c"
        HEAP[$84]=$82; //@line 2516 "_elementtree.c"
        var $85=HEAP[$target]; //@line 2518 "_elementtree.c"
        var $86=_PyObject_GetAttrString($85, ((__str77)&4294967295)); //@line 2518 "_elementtree.c"
        var $87=HEAP[$self]; //@line 2518 "_elementtree.c"
        var $88=(($87+24)&4294967295); //@line 2518 "_elementtree.c"
        HEAP[$88]=$86; //@line 2518 "_elementtree.c"
        var $89=HEAP[$target]; //@line 2519 "_elementtree.c"
        var $90=_PyObject_GetAttrString($89, ((__str75)&4294967295)); //@line 2519 "_elementtree.c"
        var $91=HEAP[$self]; //@line 2519 "_elementtree.c"
        var $92=(($91+28)&4294967295); //@line 2519 "_elementtree.c"
        HEAP[$92]=$90; //@line 2519 "_elementtree.c"
        var $93=HEAP[$target]; //@line 2520 "_elementtree.c"
        var $94=_PyObject_GetAttrString($93, ((__str74)&4294967295)); //@line 2520 "_elementtree.c"
        var $95=HEAP[$self]; //@line 2520 "_elementtree.c"
        var $96=(($95+32)&4294967295); //@line 2520 "_elementtree.c"
        HEAP[$96]=$94; //@line 2520 "_elementtree.c"
        var $97=HEAP[$target]; //@line 2521 "_elementtree.c"
        var $98=_PyObject_GetAttrString($97, ((__str76)&4294967295)); //@line 2521 "_elementtree.c"
        var $99=HEAP[$self]; //@line 2521 "_elementtree.c"
        var $100=(($99+36)&4294967295); //@line 2521 "_elementtree.c"
        HEAP[$100]=$98; //@line 2521 "_elementtree.c"
        var $101=HEAP[$target]; //@line 2522 "_elementtree.c"
        var $102=_PyObject_GetAttrString($101, ((__str93)&4294967295)); //@line 2522 "_elementtree.c"
        var $103=HEAP[$self]; //@line 2522 "_elementtree.c"
        var $104=(($103+40)&4294967295); //@line 2522 "_elementtree.c"
        HEAP[$104]=$102; //@line 2522 "_elementtree.c"
        var $105=HEAP[$target]; //@line 2523 "_elementtree.c"
        var $106=_PyObject_GetAttrString($105, ((__str94)&4294967295)); //@line 2523 "_elementtree.c"
        var $107=HEAP[$self]; //@line 2523 "_elementtree.c"
        var $108=(($107+44)&4294967295); //@line 2523 "_elementtree.c"
        HEAP[$108]=$106; //@line 2523 "_elementtree.c"
        var $109=HEAP[$target]; //@line 2524 "_elementtree.c"
        var $110=_PyObject_GetAttrString($109, ((__str78)&4294967295)); //@line 2524 "_elementtree.c"
        var $111=HEAP[$self]; //@line 2524 "_elementtree.c"
        var $112=(($111+48)&4294967295); //@line 2524 "_elementtree.c"
        HEAP[$112]=$110; //@line 2524 "_elementtree.c"
        _PyErr_Clear(); //@line 2526 "_elementtree.c"
        var $113=HEAP[_expat_capi]; //@line 2529 "_elementtree.c"
        var $114=(($113+76)&4294967295); //@line 2529 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2529 "_elementtree.c"
        var $116=HEAP[$self]; //@line 2529 "_elementtree.c"
        var $117=(($116+8)&4294967295); //@line 2529 "_elementtree.c"
        var $118=HEAP[$117]; //@line 2529 "_elementtree.c"
        var $119=HEAP[$self]; //@line 2529 "_elementtree.c"
        var $120=$119; //@line 2529 "_elementtree.c"
        FUNCTION_TABLE[$115]($118, $120); //@line 2529 "_elementtree.c"
        var $121=HEAP[_expat_capi]; //@line 2530 "_elementtree.c"
        var $122=(($121+60)&4294967295); //@line 2530 "_elementtree.c"
        var $123=HEAP[$122]; //@line 2530 "_elementtree.c"
        var $124=HEAP[$self]; //@line 2530 "_elementtree.c"
        var $125=(($124+8)&4294967295); //@line 2530 "_elementtree.c"
        var $126=HEAP[$125]; //@line 2530 "_elementtree.c"
        FUNCTION_TABLE[$123]($126, (FUNCTION_TABLE_OFFSET + 8), (FUNCTION_TABLE_OFFSET + 10)); //@line 2530 "_elementtree.c"
        var $127=HEAP[_expat_capi]; //@line 2535 "_elementtree.c"
        var $128=(($127+56)&4294967295); //@line 2535 "_elementtree.c"
        var $129=HEAP[$128]; //@line 2535 "_elementtree.c"
        var $130=HEAP[$self]; //@line 2535 "_elementtree.c"
        var $131=(($130+8)&4294967295); //@line 2535 "_elementtree.c"
        var $132=HEAP[$131]; //@line 2535 "_elementtree.c"
        FUNCTION_TABLE[$129]($132, (FUNCTION_TABLE_OFFSET + 12)); //@line 2535 "_elementtree.c"
        var $133=HEAP[_expat_capi]; //@line 2539 "_elementtree.c"
        var $134=(($133+48)&4294967295); //@line 2539 "_elementtree.c"
        var $135=HEAP[$134]; //@line 2539 "_elementtree.c"
        var $136=HEAP[$self]; //@line 2539 "_elementtree.c"
        var $137=(($136+8)&4294967295); //@line 2539 "_elementtree.c"
        var $138=HEAP[$137]; //@line 2539 "_elementtree.c"
        FUNCTION_TABLE[$135]($138, (FUNCTION_TABLE_OFFSET + 14)); //@line 2539 "_elementtree.c"
        var $139=HEAP[$self]; //@line 2543 "_elementtree.c"
        var $140=(($139+40)&4294967295); //@line 2543 "_elementtree.c"
        var $141=HEAP[$140]; //@line 2543 "_elementtree.c"
        var $142=($141)!=0; //@line 2543 "_elementtree.c"
        if ($142) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2543 "_elementtree.c"
      case 18: // $bb17
        var $143=HEAP[_expat_capi]; //@line 2544 "_elementtree.c"
        var $144=(($143+52)&4294967295); //@line 2544 "_elementtree.c"
        var $145=HEAP[$144]; //@line 2544 "_elementtree.c"
        var $146=HEAP[$self]; //@line 2544 "_elementtree.c"
        var $147=(($146+8)&4294967295); //@line 2544 "_elementtree.c"
        var $148=HEAP[$147]; //@line 2544 "_elementtree.c"
        FUNCTION_TABLE[$145]($148, (FUNCTION_TABLE_OFFSET + 16)); //@line 2544 "_elementtree.c"
        __label__ = 19; break; //@line 2544 "_elementtree.c"
      case 19: // $bb18
        var $149=HEAP[$self]; //@line 2548 "_elementtree.c"
        var $150=(($149+44)&4294967295); //@line 2548 "_elementtree.c"
        var $151=HEAP[$150]; //@line 2548 "_elementtree.c"
        var $152=($151)!=0; //@line 2548 "_elementtree.c"
        if ($152) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2548 "_elementtree.c"
      case 20: // $bb19
        var $153=HEAP[_expat_capi]; //@line 2549 "_elementtree.c"
        var $154=(($153+68)&4294967295); //@line 2549 "_elementtree.c"
        var $155=HEAP[$154]; //@line 2549 "_elementtree.c"
        var $156=HEAP[$self]; //@line 2549 "_elementtree.c"
        var $157=(($156+8)&4294967295); //@line 2549 "_elementtree.c"
        var $158=HEAP[$157]; //@line 2549 "_elementtree.c"
        FUNCTION_TABLE[$155]($158, (FUNCTION_TABLE_OFFSET + 18)); //@line 2549 "_elementtree.c"
        __label__ = 21; break; //@line 2549 "_elementtree.c"
      case 21: // $bb20
        var $159=HEAP[_expat_capi]; //@line 2554 "_elementtree.c"
        var $160=(($159+72)&4294967295); //@line 2554 "_elementtree.c"
        var $161=HEAP[$160]; //@line 2554 "_elementtree.c"
        var $162=HEAP[$self]; //@line 2554 "_elementtree.c"
        var $163=(($162+8)&4294967295); //@line 2554 "_elementtree.c"
        var $164=HEAP[$163]; //@line 2554 "_elementtree.c"
        FUNCTION_TABLE[$161]($164, (FUNCTION_TABLE_OFFSET + 20), 0); //@line 2554 "_elementtree.c"
        var $165=HEAP[$self]; //@line 2562 "_elementtree.c"
        var $166=$165; //@line 2562 "_elementtree.c"
        HEAP[$0]=$166; //@line 2562 "_elementtree.c"
        __label__ = 22; break; //@line 2562 "_elementtree.c"
      case 22: // $bb21
        var $167=HEAP[$0]; //@line 2463 "_elementtree.c"
        HEAP[$retval]=$167; //@line 2463 "_elementtree.c"
        __label__ = 23; break; //@line 2463 "_elementtree.c"
      case 23: // $return
        var $retval22=HEAP[$retval]; //@line 2463 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 2463 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        var $0=HEAP[_expat_capi]; //@line 2568 "_elementtree.c"
        var $1=(($0+44)&4294967295); //@line 2568 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2568 "_elementtree.c"
        var $3=HEAP[$self_addr]; //@line 2568 "_elementtree.c"
        var $4=(($3+8)&4294967295); //@line 2568 "_elementtree.c"
        var $5=HEAP[$4]; //@line 2568 "_elementtree.c"
        FUNCTION_TABLE[$2]($5); //@line 2568 "_elementtree.c"
        var $6=HEAP[$self_addr]; //@line 2570 "_elementtree.c"
        var $7=(($6+48)&4294967295); //@line 2570 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2570 "_elementtree.c"
        var $9=($8)!=0; //@line 2570 "_elementtree.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2570 "_elementtree.c"
      case 1: // $bb
        var $10=HEAP[$self_addr]; //@line 2570 "_elementtree.c"
        var $11=(($10+48)&4294967295); //@line 2570 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2570 "_elementtree.c"
        var $13=(($12)&4294967295); //@line 2570 "_elementtree.c"
        var $14=HEAP[$13]; //@line 2570 "_elementtree.c"
        var $15=((($14) - 1)&4294967295); //@line 2570 "_elementtree.c"
        var $16=(($12)&4294967295); //@line 2570 "_elementtree.c"
        HEAP[$16]=$15; //@line 2570 "_elementtree.c"
        var $17=(($12)&4294967295); //@line 2570 "_elementtree.c"
        var $18=HEAP[$17]; //@line 2570 "_elementtree.c"
        var $19=((($18))|0)==0; //@line 2570 "_elementtree.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2570 "_elementtree.c"
      case 2: // $bb1
        var $20=HEAP[$self_addr]; //@line 2570 "_elementtree.c"
        var $21=(($20+48)&4294967295); //@line 2570 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2570 "_elementtree.c"
        var $23=(($22+4)&4294967295); //@line 2570 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2570 "_elementtree.c"
        var $25=(($24+24)&4294967295); //@line 2570 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2570 "_elementtree.c"
        var $27=HEAP[$self_addr]; //@line 2570 "_elementtree.c"
        var $28=(($27+48)&4294967295); //@line 2570 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2570 "_elementtree.c"
        FUNCTION_TABLE[$26]($29); //@line 2570 "_elementtree.c"
        __label__ = 3; break; //@line 2570 "_elementtree.c"
      case 3: // $bb2
        var $30=HEAP[$self_addr]; //@line 2571 "_elementtree.c"
        var $31=(($30+44)&4294967295); //@line 2571 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2571 "_elementtree.c"
        var $33=($32)!=0; //@line 2571 "_elementtree.c"
        if ($33) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2571 "_elementtree.c"
      case 4: // $bb3
        var $34=HEAP[$self_addr]; //@line 2571 "_elementtree.c"
        var $35=(($34+44)&4294967295); //@line 2571 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2571 "_elementtree.c"
        var $37=(($36)&4294967295); //@line 2571 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2571 "_elementtree.c"
        var $39=((($38) - 1)&4294967295); //@line 2571 "_elementtree.c"
        var $40=(($36)&4294967295); //@line 2571 "_elementtree.c"
        HEAP[$40]=$39; //@line 2571 "_elementtree.c"
        var $41=(($36)&4294967295); //@line 2571 "_elementtree.c"
        var $42=HEAP[$41]; //@line 2571 "_elementtree.c"
        var $43=((($42))|0)==0; //@line 2571 "_elementtree.c"
        if ($43) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2571 "_elementtree.c"
      case 5: // $bb4
        var $44=HEAP[$self_addr]; //@line 2571 "_elementtree.c"
        var $45=(($44+44)&4294967295); //@line 2571 "_elementtree.c"
        var $46=HEAP[$45]; //@line 2571 "_elementtree.c"
        var $47=(($46+4)&4294967295); //@line 2571 "_elementtree.c"
        var $48=HEAP[$47]; //@line 2571 "_elementtree.c"
        var $49=(($48+24)&4294967295); //@line 2571 "_elementtree.c"
        var $50=HEAP[$49]; //@line 2571 "_elementtree.c"
        var $51=HEAP[$self_addr]; //@line 2571 "_elementtree.c"
        var $52=(($51+44)&4294967295); //@line 2571 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2571 "_elementtree.c"
        FUNCTION_TABLE[$50]($53); //@line 2571 "_elementtree.c"
        __label__ = 6; break; //@line 2571 "_elementtree.c"
      case 6: // $bb5
        var $54=HEAP[$self_addr]; //@line 2572 "_elementtree.c"
        var $55=(($54+40)&4294967295); //@line 2572 "_elementtree.c"
        var $56=HEAP[$55]; //@line 2572 "_elementtree.c"
        var $57=($56)!=0; //@line 2572 "_elementtree.c"
        if ($57) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2572 "_elementtree.c"
      case 7: // $bb6
        var $58=HEAP[$self_addr]; //@line 2572 "_elementtree.c"
        var $59=(($58+40)&4294967295); //@line 2572 "_elementtree.c"
        var $60=HEAP[$59]; //@line 2572 "_elementtree.c"
        var $61=(($60)&4294967295); //@line 2572 "_elementtree.c"
        var $62=HEAP[$61]; //@line 2572 "_elementtree.c"
        var $63=((($62) - 1)&4294967295); //@line 2572 "_elementtree.c"
        var $64=(($60)&4294967295); //@line 2572 "_elementtree.c"
        HEAP[$64]=$63; //@line 2572 "_elementtree.c"
        var $65=(($60)&4294967295); //@line 2572 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2572 "_elementtree.c"
        var $67=((($66))|0)==0; //@line 2572 "_elementtree.c"
        if ($67) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2572 "_elementtree.c"
      case 8: // $bb7
        var $68=HEAP[$self_addr]; //@line 2572 "_elementtree.c"
        var $69=(($68+40)&4294967295); //@line 2572 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2572 "_elementtree.c"
        var $71=(($70+4)&4294967295); //@line 2572 "_elementtree.c"
        var $72=HEAP[$71]; //@line 2572 "_elementtree.c"
        var $73=(($72+24)&4294967295); //@line 2572 "_elementtree.c"
        var $74=HEAP[$73]; //@line 2572 "_elementtree.c"
        var $75=HEAP[$self_addr]; //@line 2572 "_elementtree.c"
        var $76=(($75+40)&4294967295); //@line 2572 "_elementtree.c"
        var $77=HEAP[$76]; //@line 2572 "_elementtree.c"
        FUNCTION_TABLE[$74]($77); //@line 2572 "_elementtree.c"
        __label__ = 9; break; //@line 2572 "_elementtree.c"
      case 9: // $bb8
        var $78=HEAP[$self_addr]; //@line 2573 "_elementtree.c"
        var $79=(($78+36)&4294967295); //@line 2573 "_elementtree.c"
        var $80=HEAP[$79]; //@line 2573 "_elementtree.c"
        var $81=($80)!=0; //@line 2573 "_elementtree.c"
        if ($81) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2573 "_elementtree.c"
      case 10: // $bb9
        var $82=HEAP[$self_addr]; //@line 2573 "_elementtree.c"
        var $83=(($82+36)&4294967295); //@line 2573 "_elementtree.c"
        var $84=HEAP[$83]; //@line 2573 "_elementtree.c"
        var $85=(($84)&4294967295); //@line 2573 "_elementtree.c"
        var $86=HEAP[$85]; //@line 2573 "_elementtree.c"
        var $87=((($86) - 1)&4294967295); //@line 2573 "_elementtree.c"
        var $88=(($84)&4294967295); //@line 2573 "_elementtree.c"
        HEAP[$88]=$87; //@line 2573 "_elementtree.c"
        var $89=(($84)&4294967295); //@line 2573 "_elementtree.c"
        var $90=HEAP[$89]; //@line 2573 "_elementtree.c"
        var $91=((($90))|0)==0; //@line 2573 "_elementtree.c"
        if ($91) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2573 "_elementtree.c"
      case 11: // $bb10
        var $92=HEAP[$self_addr]; //@line 2573 "_elementtree.c"
        var $93=(($92+36)&4294967295); //@line 2573 "_elementtree.c"
        var $94=HEAP[$93]; //@line 2573 "_elementtree.c"
        var $95=(($94+4)&4294967295); //@line 2573 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2573 "_elementtree.c"
        var $97=(($96+24)&4294967295); //@line 2573 "_elementtree.c"
        var $98=HEAP[$97]; //@line 2573 "_elementtree.c"
        var $99=HEAP[$self_addr]; //@line 2573 "_elementtree.c"
        var $100=(($99+36)&4294967295); //@line 2573 "_elementtree.c"
        var $101=HEAP[$100]; //@line 2573 "_elementtree.c"
        FUNCTION_TABLE[$98]($101); //@line 2573 "_elementtree.c"
        __label__ = 12; break; //@line 2573 "_elementtree.c"
      case 12: // $bb11
        var $102=HEAP[$self_addr]; //@line 2574 "_elementtree.c"
        var $103=(($102+32)&4294967295); //@line 2574 "_elementtree.c"
        var $104=HEAP[$103]; //@line 2574 "_elementtree.c"
        var $105=($104)!=0; //@line 2574 "_elementtree.c"
        if ($105) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2574 "_elementtree.c"
      case 13: // $bb12
        var $106=HEAP[$self_addr]; //@line 2574 "_elementtree.c"
        var $107=(($106+32)&4294967295); //@line 2574 "_elementtree.c"
        var $108=HEAP[$107]; //@line 2574 "_elementtree.c"
        var $109=(($108)&4294967295); //@line 2574 "_elementtree.c"
        var $110=HEAP[$109]; //@line 2574 "_elementtree.c"
        var $111=((($110) - 1)&4294967295); //@line 2574 "_elementtree.c"
        var $112=(($108)&4294967295); //@line 2574 "_elementtree.c"
        HEAP[$112]=$111; //@line 2574 "_elementtree.c"
        var $113=(($108)&4294967295); //@line 2574 "_elementtree.c"
        var $114=HEAP[$113]; //@line 2574 "_elementtree.c"
        var $115=((($114))|0)==0; //@line 2574 "_elementtree.c"
        if ($115) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2574 "_elementtree.c"
      case 14: // $bb13
        var $116=HEAP[$self_addr]; //@line 2574 "_elementtree.c"
        var $117=(($116+32)&4294967295); //@line 2574 "_elementtree.c"
        var $118=HEAP[$117]; //@line 2574 "_elementtree.c"
        var $119=(($118+4)&4294967295); //@line 2574 "_elementtree.c"
        var $120=HEAP[$119]; //@line 2574 "_elementtree.c"
        var $121=(($120+24)&4294967295); //@line 2574 "_elementtree.c"
        var $122=HEAP[$121]; //@line 2574 "_elementtree.c"
        var $123=HEAP[$self_addr]; //@line 2574 "_elementtree.c"
        var $124=(($123+32)&4294967295); //@line 2574 "_elementtree.c"
        var $125=HEAP[$124]; //@line 2574 "_elementtree.c"
        FUNCTION_TABLE[$122]($125); //@line 2574 "_elementtree.c"
        __label__ = 15; break; //@line 2574 "_elementtree.c"
      case 15: // $bb14
        var $126=HEAP[$self_addr]; //@line 2575 "_elementtree.c"
        var $127=(($126+28)&4294967295); //@line 2575 "_elementtree.c"
        var $128=HEAP[$127]; //@line 2575 "_elementtree.c"
        var $129=($128)!=0; //@line 2575 "_elementtree.c"
        if ($129) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2575 "_elementtree.c"
      case 16: // $bb15
        var $130=HEAP[$self_addr]; //@line 2575 "_elementtree.c"
        var $131=(($130+28)&4294967295); //@line 2575 "_elementtree.c"
        var $132=HEAP[$131]; //@line 2575 "_elementtree.c"
        var $133=(($132)&4294967295); //@line 2575 "_elementtree.c"
        var $134=HEAP[$133]; //@line 2575 "_elementtree.c"
        var $135=((($134) - 1)&4294967295); //@line 2575 "_elementtree.c"
        var $136=(($132)&4294967295); //@line 2575 "_elementtree.c"
        HEAP[$136]=$135; //@line 2575 "_elementtree.c"
        var $137=(($132)&4294967295); //@line 2575 "_elementtree.c"
        var $138=HEAP[$137]; //@line 2575 "_elementtree.c"
        var $139=((($138))|0)==0; //@line 2575 "_elementtree.c"
        if ($139) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2575 "_elementtree.c"
      case 17: // $bb16
        var $140=HEAP[$self_addr]; //@line 2575 "_elementtree.c"
        var $141=(($140+28)&4294967295); //@line 2575 "_elementtree.c"
        var $142=HEAP[$141]; //@line 2575 "_elementtree.c"
        var $143=(($142+4)&4294967295); //@line 2575 "_elementtree.c"
        var $144=HEAP[$143]; //@line 2575 "_elementtree.c"
        var $145=(($144+24)&4294967295); //@line 2575 "_elementtree.c"
        var $146=HEAP[$145]; //@line 2575 "_elementtree.c"
        var $147=HEAP[$self_addr]; //@line 2575 "_elementtree.c"
        var $148=(($147+28)&4294967295); //@line 2575 "_elementtree.c"
        var $149=HEAP[$148]; //@line 2575 "_elementtree.c"
        FUNCTION_TABLE[$146]($149); //@line 2575 "_elementtree.c"
        __label__ = 18; break; //@line 2575 "_elementtree.c"
      case 18: // $bb17
        var $150=HEAP[$self_addr]; //@line 2576 "_elementtree.c"
        var $151=(($150+24)&4294967295); //@line 2576 "_elementtree.c"
        var $152=HEAP[$151]; //@line 2576 "_elementtree.c"
        var $153=($152)!=0; //@line 2576 "_elementtree.c"
        if ($153) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2576 "_elementtree.c"
      case 19: // $bb18
        var $154=HEAP[$self_addr]; //@line 2576 "_elementtree.c"
        var $155=(($154+24)&4294967295); //@line 2576 "_elementtree.c"
        var $156=HEAP[$155]; //@line 2576 "_elementtree.c"
        var $157=(($156)&4294967295); //@line 2576 "_elementtree.c"
        var $158=HEAP[$157]; //@line 2576 "_elementtree.c"
        var $159=((($158) - 1)&4294967295); //@line 2576 "_elementtree.c"
        var $160=(($156)&4294967295); //@line 2576 "_elementtree.c"
        HEAP[$160]=$159; //@line 2576 "_elementtree.c"
        var $161=(($156)&4294967295); //@line 2576 "_elementtree.c"
        var $162=HEAP[$161]; //@line 2576 "_elementtree.c"
        var $163=((($162))|0)==0; //@line 2576 "_elementtree.c"
        if ($163) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2576 "_elementtree.c"
      case 20: // $bb19
        var $164=HEAP[$self_addr]; //@line 2576 "_elementtree.c"
        var $165=(($164+24)&4294967295); //@line 2576 "_elementtree.c"
        var $166=HEAP[$165]; //@line 2576 "_elementtree.c"
        var $167=(($166+4)&4294967295); //@line 2576 "_elementtree.c"
        var $168=HEAP[$167]; //@line 2576 "_elementtree.c"
        var $169=(($168+24)&4294967295); //@line 2576 "_elementtree.c"
        var $170=HEAP[$169]; //@line 2576 "_elementtree.c"
        var $171=HEAP[$self_addr]; //@line 2576 "_elementtree.c"
        var $172=(($171+24)&4294967295); //@line 2576 "_elementtree.c"
        var $173=HEAP[$172]; //@line 2576 "_elementtree.c"
        FUNCTION_TABLE[$170]($173); //@line 2576 "_elementtree.c"
        __label__ = 21; break; //@line 2576 "_elementtree.c"
      case 21: // $bb20
        var $174=HEAP[$self_addr]; //@line 2578 "_elementtree.c"
        var $175=(($174+12)&4294967295); //@line 2578 "_elementtree.c"
        var $176=HEAP[$175]; //@line 2578 "_elementtree.c"
        var $177=(($176)&4294967295); //@line 2578 "_elementtree.c"
        var $178=HEAP[$177]; //@line 2578 "_elementtree.c"
        var $179=((($178) - 1)&4294967295); //@line 2578 "_elementtree.c"
        var $180=(($176)&4294967295); //@line 2578 "_elementtree.c"
        HEAP[$180]=$179; //@line 2578 "_elementtree.c"
        var $181=(($176)&4294967295); //@line 2578 "_elementtree.c"
        var $182=HEAP[$181]; //@line 2578 "_elementtree.c"
        var $183=((($182))|0)==0; //@line 2578 "_elementtree.c"
        if ($183) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2578 "_elementtree.c"
      case 22: // $bb21
        var $184=HEAP[$self_addr]; //@line 2578 "_elementtree.c"
        var $185=(($184+12)&4294967295); //@line 2578 "_elementtree.c"
        var $186=HEAP[$185]; //@line 2578 "_elementtree.c"
        var $187=(($186+4)&4294967295); //@line 2578 "_elementtree.c"
        var $188=HEAP[$187]; //@line 2578 "_elementtree.c"
        var $189=(($188+24)&4294967295); //@line 2578 "_elementtree.c"
        var $190=HEAP[$189]; //@line 2578 "_elementtree.c"
        var $191=HEAP[$self_addr]; //@line 2578 "_elementtree.c"
        var $192=(($191+12)&4294967295); //@line 2578 "_elementtree.c"
        var $193=HEAP[$192]; //@line 2578 "_elementtree.c"
        FUNCTION_TABLE[$190]($193); //@line 2578 "_elementtree.c"
        __label__ = 23; break; //@line 2578 "_elementtree.c"
      case 23: // $bb22
        var $194=HEAP[$self_addr]; //@line 2579 "_elementtree.c"
        var $195=(($194+16)&4294967295); //@line 2579 "_elementtree.c"
        var $196=HEAP[$195]; //@line 2579 "_elementtree.c"
        var $197=(($196)&4294967295); //@line 2579 "_elementtree.c"
        var $198=HEAP[$197]; //@line 2579 "_elementtree.c"
        var $199=((($198) - 1)&4294967295); //@line 2579 "_elementtree.c"
        var $200=(($196)&4294967295); //@line 2579 "_elementtree.c"
        HEAP[$200]=$199; //@line 2579 "_elementtree.c"
        var $201=(($196)&4294967295); //@line 2579 "_elementtree.c"
        var $202=HEAP[$201]; //@line 2579 "_elementtree.c"
        var $203=((($202))|0)==0; //@line 2579 "_elementtree.c"
        if ($203) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2579 "_elementtree.c"
      case 24: // $bb23
        var $204=HEAP[$self_addr]; //@line 2579 "_elementtree.c"
        var $205=(($204+16)&4294967295); //@line 2579 "_elementtree.c"
        var $206=HEAP[$205]; //@line 2579 "_elementtree.c"
        var $207=(($206+4)&4294967295); //@line 2579 "_elementtree.c"
        var $208=HEAP[$207]; //@line 2579 "_elementtree.c"
        var $209=(($208+24)&4294967295); //@line 2579 "_elementtree.c"
        var $210=HEAP[$209]; //@line 2579 "_elementtree.c"
        var $211=HEAP[$self_addr]; //@line 2579 "_elementtree.c"
        var $212=(($211+16)&4294967295); //@line 2579 "_elementtree.c"
        var $213=HEAP[$212]; //@line 2579 "_elementtree.c"
        FUNCTION_TABLE[$210]($213); //@line 2579 "_elementtree.c"
        __label__ = 25; break; //@line 2579 "_elementtree.c"
      case 25: // $bb24
        var $214=HEAP[$self_addr]; //@line 2580 "_elementtree.c"
        var $215=(($214+20)&4294967295); //@line 2580 "_elementtree.c"
        var $216=HEAP[$215]; //@line 2580 "_elementtree.c"
        var $217=(($216)&4294967295); //@line 2580 "_elementtree.c"
        var $218=HEAP[$217]; //@line 2580 "_elementtree.c"
        var $219=((($218) - 1)&4294967295); //@line 2580 "_elementtree.c"
        var $220=(($216)&4294967295); //@line 2580 "_elementtree.c"
        HEAP[$220]=$219; //@line 2580 "_elementtree.c"
        var $221=(($216)&4294967295); //@line 2580 "_elementtree.c"
        var $222=HEAP[$221]; //@line 2580 "_elementtree.c"
        var $223=((($222))|0)==0; //@line 2580 "_elementtree.c"
        if ($223) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2580 "_elementtree.c"
      case 26: // $bb25
        var $224=HEAP[$self_addr]; //@line 2580 "_elementtree.c"
        var $225=(($224+20)&4294967295); //@line 2580 "_elementtree.c"
        var $226=HEAP[$225]; //@line 2580 "_elementtree.c"
        var $227=(($226+4)&4294967295); //@line 2580 "_elementtree.c"
        var $228=HEAP[$227]; //@line 2580 "_elementtree.c"
        var $229=(($228+24)&4294967295); //@line 2580 "_elementtree.c"
        var $230=HEAP[$229]; //@line 2580 "_elementtree.c"
        var $231=HEAP[$self_addr]; //@line 2580 "_elementtree.c"
        var $232=(($231+20)&4294967295); //@line 2580 "_elementtree.c"
        var $233=HEAP[$232]; //@line 2580 "_elementtree.c"
        FUNCTION_TABLE[$230]($233); //@line 2580 "_elementtree.c"
        __label__ = 27; break; //@line 2580 "_elementtree.c"
      case 27: // $bb26
        var $234=HEAP[$self_addr]; //@line 2584 "_elementtree.c"
        var $235=$234; //@line 2584 "_elementtree.c"
        _PyObject_Free($235); //@line 2584 "_elementtree.c"
        __label__ = 28; break; //@line 2585 "_elementtree.c"
      case 28: // $return
        STACKTOP = __stackBase__;
        return; //@line 2585 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _expat_parse($self, $data, $data_len, $final) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $data_addr=__stackBase__+4;
        var $data_len_addr=__stackBase__+8;
        var $final_addr=__stackBase__+12;
        var $retval=__stackBase__+16;
        var $0=__stackBase__+20;
        var $ok=__stackBase__+24;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$data_addr]=$data;
        HEAP[$data_len_addr]=$data_len;
        HEAP[$final_addr]=$final;
        var $1=HEAP[_expat_capi]; //@line 2595 "_elementtree.c"
        var $2=(($1+36)&4294967295); //@line 2595 "_elementtree.c"
        var $3=HEAP[$2]; //@line 2595 "_elementtree.c"
        var $4=HEAP[$self_addr]; //@line 2595 "_elementtree.c"
        var $5=(($4+8)&4294967295); //@line 2595 "_elementtree.c"
        var $6=HEAP[$5]; //@line 2595 "_elementtree.c"
        var $7=HEAP[$data_addr]; //@line 2595 "_elementtree.c"
        var $8=HEAP[$data_len_addr]; //@line 2595 "_elementtree.c"
        var $9=HEAP[$final_addr]; //@line 2595 "_elementtree.c"
        var $10=FUNCTION_TABLE[$3]($6, $7, $8, $9); //@line 2595 "_elementtree.c"
        HEAP[$ok]=$10; //@line 2595 "_elementtree.c"
        var $11=_PyErr_Occurred(); //@line 2597 "_elementtree.c"
        var $12=($11)!=0; //@line 2597 "_elementtree.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2597 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2598 "_elementtree.c"
        __label__ = 5; break; //@line 2598 "_elementtree.c"
      case 2: // $bb1
        var $13=HEAP[$ok]; //@line 2600 "_elementtree.c"
        var $14=((($13))|0)==0; //@line 2600 "_elementtree.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2600 "_elementtree.c"
      case 3: // $bb2
        var $15=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $16=(($15+28)&4294967295); //@line 2601 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2601 "_elementtree.c"
        var $18=HEAP[$self_addr]; //@line 2601 "_elementtree.c"
        var $19=(($18+8)&4294967295); //@line 2601 "_elementtree.c"
        var $20=HEAP[$19]; //@line 2601 "_elementtree.c"
        var $21=FUNCTION_TABLE[$17]($20); //@line 2601 "_elementtree.c"
        var $22=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $23=(($22+32)&4294967295); //@line 2601 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2601 "_elementtree.c"
        var $25=HEAP[$self_addr]; //@line 2601 "_elementtree.c"
        var $26=(($25+8)&4294967295); //@line 2601 "_elementtree.c"
        var $27=HEAP[$26]; //@line 2601 "_elementtree.c"
        var $28=FUNCTION_TABLE[$24]($27); //@line 2601 "_elementtree.c"
        var $29=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $30=(($29+20)&4294967295); //@line 2601 "_elementtree.c"
        var $31=HEAP[$30]; //@line 2601 "_elementtree.c"
        var $32=HEAP[_expat_capi]; //@line 2601 "_elementtree.c"
        var $33=(($32+24)&4294967295); //@line 2601 "_elementtree.c"
        var $34=HEAP[$33]; //@line 2601 "_elementtree.c"
        var $35=HEAP[$self_addr]; //@line 2601 "_elementtree.c"
        var $36=(($35+8)&4294967295); //@line 2601 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2601 "_elementtree.c"
        var $38=FUNCTION_TABLE[$34]($37); //@line 2601 "_elementtree.c"
        var $39=FUNCTION_TABLE[$31]($38); //@line 2601 "_elementtree.c"
        _expat_set_error($39, $28, $21); //@line 2601 "_elementtree.c"
        HEAP[$0]=0; //@line 2606 "_elementtree.c"
        __label__ = 5; break; //@line 2606 "_elementtree.c"
      case 4: // $bb3
        var $40=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2609 "_elementtree.c"
        var $41=((($40) + 1)&4294967295); //@line 2609 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$41; //@line 2609 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2609 "_elementtree.c"
        __label__ = 5; break; //@line 2609 "_elementtree.c"
      case 5: // $bb4
        var $42=HEAP[$0]; //@line 2598 "_elementtree.c"
        HEAP[$retval]=$42; //@line 2598 "_elementtree.c"
        __label__ = 6; break; //@line 2598 "_elementtree.c"
      case 6: // $return
        var $retval5=HEAP[$retval]; //@line 2598 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 2598 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_close($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $res=__stackBase__+16;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 2618 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str71)&4294967295)); //@line 2618 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 2618 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2618 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2619 "_elementtree.c"
        __label__ = 13; break; //@line 2619 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 2621 "_elementtree.c"
        var $5=_expat_parse($4, ((__str1)&4294967295), 0, 1); //@line 2621 "_elementtree.c"
        HEAP[$res]=$5; //@line 2621 "_elementtree.c"
        var $6=HEAP[$res]; //@line 2622 "_elementtree.c"
        var $7=($6)==0; //@line 2622 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2622 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2623 "_elementtree.c"
        __label__ = 13; break; //@line 2623 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$self_addr]; //@line 2625 "_elementtree.c"
        var $9=(($8+12)&4294967295); //@line 2625 "_elementtree.c"
        var $10=HEAP[$9]; //@line 2625 "_elementtree.c"
        var $11=(($10+4)&4294967295); //@line 2625 "_elementtree.c"
        var $12=HEAP[$11]; //@line 2625 "_elementtree.c"
        var $13=($12)==(_TreeBuilder_Type); //@line 2625 "_elementtree.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2625 "_elementtree.c"
      case 5: // $bb4
        var $14=HEAP[$res]; //@line 2626 "_elementtree.c"
        var $15=(($14)&4294967295); //@line 2626 "_elementtree.c"
        var $16=HEAP[$15]; //@line 2626 "_elementtree.c"
        var $17=((($16) - 1)&4294967295); //@line 2626 "_elementtree.c"
        var $18=HEAP[$res]; //@line 2626 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 2626 "_elementtree.c"
        HEAP[$19]=$17; //@line 2626 "_elementtree.c"
        var $20=HEAP[$res]; //@line 2626 "_elementtree.c"
        var $21=(($20)&4294967295); //@line 2626 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2626 "_elementtree.c"
        var $23=((($22))|0)==0; //@line 2626 "_elementtree.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2626 "_elementtree.c"
      case 6: // $bb5
        var $24=HEAP[$res]; //@line 2626 "_elementtree.c"
        var $25=(($24+4)&4294967295); //@line 2626 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2626 "_elementtree.c"
        var $27=(($26+24)&4294967295); //@line 2626 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2626 "_elementtree.c"
        var $29=HEAP[$res]; //@line 2626 "_elementtree.c"
        FUNCTION_TABLE[$28]($29); //@line 2626 "_elementtree.c"
        __label__ = 7; break; //@line 2626 "_elementtree.c"
      case 7: // $bb6
        var $30=HEAP[$self_addr]; //@line 2627 "_elementtree.c"
        var $31=(($30+12)&4294967295); //@line 2627 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2627 "_elementtree.c"
        var $33=$32; //@line 2627 "_elementtree.c"
        var $34=_treebuilder_done($33); //@line 2627 "_elementtree.c"
        HEAP[$0]=$34; //@line 2627 "_elementtree.c"
        __label__ = 13; break; //@line 2627 "_elementtree.c"
      case 8: // $bb7
        var $35=HEAP[$self_addr]; //@line 2628 "_elementtree.c"
        var $36=(($35+48)&4294967295); //@line 2628 "_elementtree.c"
        var $37=HEAP[$36]; //@line 2628 "_elementtree.c"
        var $38=($37)!=0; //@line 2628 "_elementtree.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 2628 "_elementtree.c"
      case 9: // $bb8
        var $39=HEAP[$res]; //@line 2629 "_elementtree.c"
        var $40=(($39)&4294967295); //@line 2629 "_elementtree.c"
        var $41=HEAP[$40]; //@line 2629 "_elementtree.c"
        var $42=((($41) - 1)&4294967295); //@line 2629 "_elementtree.c"
        var $43=HEAP[$res]; //@line 2629 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 2629 "_elementtree.c"
        HEAP[$44]=$42; //@line 2629 "_elementtree.c"
        var $45=HEAP[$res]; //@line 2629 "_elementtree.c"
        var $46=(($45)&4294967295); //@line 2629 "_elementtree.c"
        var $47=HEAP[$46]; //@line 2629 "_elementtree.c"
        var $48=((($47))|0)==0; //@line 2629 "_elementtree.c"
        if ($48) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2629 "_elementtree.c"
      case 10: // $bb9
        var $49=HEAP[$res]; //@line 2629 "_elementtree.c"
        var $50=(($49+4)&4294967295); //@line 2629 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2629 "_elementtree.c"
        var $52=(($51+24)&4294967295); //@line 2629 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2629 "_elementtree.c"
        var $54=HEAP[$res]; //@line 2629 "_elementtree.c"
        FUNCTION_TABLE[$53]($54); //@line 2629 "_elementtree.c"
        __label__ = 11; break; //@line 2629 "_elementtree.c"
      case 11: // $bb10
        var $55=HEAP[$self_addr]; //@line 2630 "_elementtree.c"
        var $56=(($55+48)&4294967295); //@line 2630 "_elementtree.c"
        var $57=HEAP[$56]; //@line 2630 "_elementtree.c"
        var $58=_PyObject_CallFunction($57, ((__str1)&4294967295)); //@line 2630 "_elementtree.c"
        HEAP[$0]=$58; //@line 2630 "_elementtree.c"
        __label__ = 13; break; //@line 2630 "_elementtree.c"
      case 12: // $bb11
        var $59=HEAP[$res]; //@line 2632 "_elementtree.c"
        HEAP[$0]=$59; //@line 2632 "_elementtree.c"
        __label__ = 13; break; //@line 2632 "_elementtree.c"
      case 13: // $bb12
        var $60=HEAP[$0]; //@line 2619 "_elementtree.c"
        HEAP[$retval]=$60; //@line 2619 "_elementtree.c"
        __label__ = 14; break; //@line 2619 "_elementtree.c"
      case 14: // $return
        var $retval13=HEAP[$retval]; //@line 2619 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2619 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_feed($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $data=__stackBase__+16;
        var $data_len=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 2642 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str95)&4294967295), $data, $data_len); //@line 2642 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 2642 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2642 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2643 "_elementtree.c"
        __label__ = 3; break; //@line 2643 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$data_len]; //@line 2645 "_elementtree.c"
        var $5=HEAP[$data]; //@line 2645 "_elementtree.c"
        var $6=HEAP[$self_addr]; //@line 2645 "_elementtree.c"
        var $7=_expat_parse($6, $5, $4, 0); //@line 2645 "_elementtree.c"
        HEAP[$0]=$7; //@line 2645 "_elementtree.c"
        __label__ = 3; break; //@line 2645 "_elementtree.c"
      case 3: // $bb2
        var $8=HEAP[$0]; //@line 2643 "_elementtree.c"
        HEAP[$retval]=$8; //@line 2643 "_elementtree.c"
        __label__ = 4; break; //@line 2643 "_elementtree.c"
      case 4: // $return
        var $retval3=HEAP[$retval]; //@line 2643 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 2643 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_parse($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $reader=__stackBase__+16;
        var $buffer=__stackBase__+20;
        var $res=__stackBase__+24;
        var $fileobj=__stackBase__+28;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        var $1=HEAP[$args_addr]; //@line 2658 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str96)&4294967295), $fileobj); //@line 2658 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 2658 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2658 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2659 "_elementtree.c"
        __label__ = 29; break; //@line 2659 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$fileobj]; //@line 2661 "_elementtree.c"
        var $5=_PyObject_GetAttrString($4, ((__str97)&4294967295)); //@line 2661 "_elementtree.c"
        HEAP[$reader]=$5; //@line 2661 "_elementtree.c"
        var $6=HEAP[$reader]; //@line 2662 "_elementtree.c"
        var $7=($6)==0; //@line 2662 "_elementtree.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2662 "_elementtree.c"
      case 3: // $bb2
        HEAP[$0]=0; //@line 2663 "_elementtree.c"
        __label__ = 29; break; //@line 2663 "_elementtree.c"
      case 4: // $bb3
        var $8=HEAP[$reader]; //@line 2668 "_elementtree.c"
        var $9=_PyObject_CallFunction($8, ((__str98)&4294967295), 65536); //@line 2668 "_elementtree.c"
        HEAP[$buffer]=$9; //@line 2668 "_elementtree.c"
        var $10=HEAP[$buffer]; //@line 2670 "_elementtree.c"
        var $11=($10)==0; //@line 2670 "_elementtree.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 2670 "_elementtree.c"
      case 5: // $bb4
        var $12=HEAP[$reader]; //@line 2672 "_elementtree.c"
        var $13=(($12)&4294967295); //@line 2672 "_elementtree.c"
        var $14=HEAP[$13]; //@line 2672 "_elementtree.c"
        var $15=((($14) - 1)&4294967295); //@line 2672 "_elementtree.c"
        var $16=HEAP[$reader]; //@line 2672 "_elementtree.c"
        var $17=(($16)&4294967295); //@line 2672 "_elementtree.c"
        HEAP[$17]=$15; //@line 2672 "_elementtree.c"
        var $18=HEAP[$reader]; //@line 2672 "_elementtree.c"
        var $19=(($18)&4294967295); //@line 2672 "_elementtree.c"
        var $20=HEAP[$19]; //@line 2672 "_elementtree.c"
        var $21=((($20))|0)==0; //@line 2672 "_elementtree.c"
        if ($21) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2672 "_elementtree.c"
      case 6: // $bb5
        var $22=HEAP[$reader]; //@line 2672 "_elementtree.c"
        var $23=(($22+4)&4294967295); //@line 2672 "_elementtree.c"
        var $24=HEAP[$23]; //@line 2672 "_elementtree.c"
        var $25=(($24+24)&4294967295); //@line 2672 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2672 "_elementtree.c"
        var $27=HEAP[$reader]; //@line 2672 "_elementtree.c"
        FUNCTION_TABLE[$26]($27); //@line 2672 "_elementtree.c"
        __label__ = 7; break; //@line 2672 "_elementtree.c"
      case 7: // $bb6
        HEAP[$0]=0; //@line 2673 "_elementtree.c"
        __label__ = 29; break; //@line 2673 "_elementtree.c"
      case 8: // $bb7
        var $28=HEAP[$buffer]; //@line 2676 "_elementtree.c"
        var $29=(($28+4)&4294967295); //@line 2676 "_elementtree.c"
        var $30=HEAP[$29]; //@line 2676 "_elementtree.c"
        var $31=($30)!=(_PyString_Type); //@line 2676 "_elementtree.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2676 "_elementtree.c"
      case 9: // $bb8
        var $32=HEAP[$buffer]; //@line 2676 "_elementtree.c"
        var $33=$32; //@line 2676 "_elementtree.c"
        var $34=(($33+8)&4294967295); //@line 2676 "_elementtree.c"
        var $35=HEAP[$34]; //@line 2676 "_elementtree.c"
        var $36=((($35))|0)==0; //@line 2676 "_elementtree.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 2676 "_elementtree.c"
      case 10: // $bb9
        var $37=HEAP[$buffer]; //@line 2677 "_elementtree.c"
        var $38=(($37)&4294967295); //@line 2677 "_elementtree.c"
        var $39=HEAP[$38]; //@line 2677 "_elementtree.c"
        var $40=((($39) - 1)&4294967295); //@line 2677 "_elementtree.c"
        var $41=HEAP[$buffer]; //@line 2677 "_elementtree.c"
        var $42=(($41)&4294967295); //@line 2677 "_elementtree.c"
        HEAP[$42]=$40; //@line 2677 "_elementtree.c"
        var $43=HEAP[$buffer]; //@line 2677 "_elementtree.c"
        var $44=(($43)&4294967295); //@line 2677 "_elementtree.c"
        var $45=HEAP[$44]; //@line 2677 "_elementtree.c"
        var $46=((($45))|0)==0; //@line 2677 "_elementtree.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2677 "_elementtree.c"
      case 11: // $bb10
        var $47=HEAP[$buffer]; //@line 2677 "_elementtree.c"
        var $48=(($47+4)&4294967295); //@line 2677 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2677 "_elementtree.c"
        var $50=(($49+24)&4294967295); //@line 2677 "_elementtree.c"
        var $51=HEAP[$50]; //@line 2677 "_elementtree.c"
        var $52=HEAP[$buffer]; //@line 2677 "_elementtree.c"
        FUNCTION_TABLE[$51]($52); //@line 2677 "_elementtree.c"
        __label__ = 12; break; //@line 2677 "_elementtree.c"
      case 12: // $bb11
        var $53=HEAP[$reader]; //@line 2695 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2695 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2695 "_elementtree.c"
        var $56=((($55) - 1)&4294967295); //@line 2695 "_elementtree.c"
        var $57=HEAP[$reader]; //@line 2695 "_elementtree.c"
        var $58=(($57)&4294967295); //@line 2695 "_elementtree.c"
        HEAP[$58]=$56; //@line 2695 "_elementtree.c"
        var $59=HEAP[$reader]; //@line 2695 "_elementtree.c"
        var $60=(($59)&4294967295); //@line 2695 "_elementtree.c"
        var $61=HEAP[$60]; //@line 2695 "_elementtree.c"
        var $62=((($61))|0)==0; //@line 2695 "_elementtree.c"
        if ($62) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2695 "_elementtree.c"
      case 13: // $bb12
        var $63=HEAP[$buffer]; //@line 2681 "_elementtree.c"
        var $64=$63; //@line 2681 "_elementtree.c"
        var $65=(($64+8)&4294967295); //@line 2681 "_elementtree.c"
        var $66=HEAP[$65]; //@line 2681 "_elementtree.c"
        var $67=HEAP[$buffer]; //@line 2681 "_elementtree.c"
        var $68=$67; //@line 2681 "_elementtree.c"
        var $69=(($68+20)&4294967295); //@line 2681 "_elementtree.c"
        var $70=(($69)&4294967295); //@line 2681 "_elementtree.c"
        var $71=HEAP[$self_addr]; //@line 2681 "_elementtree.c"
        var $72=_expat_parse($71, $70, $66, 0); //@line 2681 "_elementtree.c"
        HEAP[$res]=$72; //@line 2681 "_elementtree.c"
        var $73=HEAP[$buffer]; //@line 2685 "_elementtree.c"
        var $74=(($73)&4294967295); //@line 2685 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2685 "_elementtree.c"
        var $76=((($75) - 1)&4294967295); //@line 2685 "_elementtree.c"
        var $77=HEAP[$buffer]; //@line 2685 "_elementtree.c"
        var $78=(($77)&4294967295); //@line 2685 "_elementtree.c"
        HEAP[$78]=$76; //@line 2685 "_elementtree.c"
        var $79=HEAP[$buffer]; //@line 2685 "_elementtree.c"
        var $80=(($79)&4294967295); //@line 2685 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2685 "_elementtree.c"
        var $82=((($81))|0)==0; //@line 2685 "_elementtree.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2685 "_elementtree.c"
      case 14: // $bb13
        var $83=HEAP[$buffer]; //@line 2685 "_elementtree.c"
        var $84=(($83+4)&4294967295); //@line 2685 "_elementtree.c"
        var $85=HEAP[$84]; //@line 2685 "_elementtree.c"
        var $86=(($85+24)&4294967295); //@line 2685 "_elementtree.c"
        var $87=HEAP[$86]; //@line 2685 "_elementtree.c"
        var $88=HEAP[$buffer]; //@line 2685 "_elementtree.c"
        FUNCTION_TABLE[$87]($88); //@line 2685 "_elementtree.c"
        __label__ = 15; break; //@line 2685 "_elementtree.c"
      case 15: // $bb14
        var $89=HEAP[$res]; //@line 2687 "_elementtree.c"
        var $90=($89)==0; //@line 2687 "_elementtree.c"
        if ($90) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2687 "_elementtree.c"
      case 16: // $bb15
        var $91=HEAP[$reader]; //@line 2688 "_elementtree.c"
        var $92=(($91)&4294967295); //@line 2688 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2688 "_elementtree.c"
        var $94=((($93) - 1)&4294967295); //@line 2688 "_elementtree.c"
        var $95=HEAP[$reader]; //@line 2688 "_elementtree.c"
        var $96=(($95)&4294967295); //@line 2688 "_elementtree.c"
        HEAP[$96]=$94; //@line 2688 "_elementtree.c"
        var $97=HEAP[$reader]; //@line 2688 "_elementtree.c"
        var $98=(($97)&4294967295); //@line 2688 "_elementtree.c"
        var $99=HEAP[$98]; //@line 2688 "_elementtree.c"
        var $100=((($99))|0)==0; //@line 2688 "_elementtree.c"
        if ($100) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2688 "_elementtree.c"
      case 17: // $bb16
        var $101=HEAP[$reader]; //@line 2688 "_elementtree.c"
        var $102=(($101+4)&4294967295); //@line 2688 "_elementtree.c"
        var $103=HEAP[$102]; //@line 2688 "_elementtree.c"
        var $104=(($103+24)&4294967295); //@line 2688 "_elementtree.c"
        var $105=HEAP[$104]; //@line 2688 "_elementtree.c"
        var $106=HEAP[$reader]; //@line 2688 "_elementtree.c"
        FUNCTION_TABLE[$105]($106); //@line 2688 "_elementtree.c"
        __label__ = 18; break; //@line 2688 "_elementtree.c"
      case 18: // $bb17
        HEAP[$0]=0; //@line 2689 "_elementtree.c"
        __label__ = 29; break; //@line 2689 "_elementtree.c"
      case 19: // $bb18
        var $107=HEAP[$res]; //@line 2691 "_elementtree.c"
        var $108=(($107)&4294967295); //@line 2691 "_elementtree.c"
        var $109=HEAP[$108]; //@line 2691 "_elementtree.c"
        var $110=((($109) - 1)&4294967295); //@line 2691 "_elementtree.c"
        var $111=HEAP[$res]; //@line 2691 "_elementtree.c"
        var $112=(($111)&4294967295); //@line 2691 "_elementtree.c"
        HEAP[$112]=$110; //@line 2691 "_elementtree.c"
        var $113=HEAP[$res]; //@line 2691 "_elementtree.c"
        var $114=(($113)&4294967295); //@line 2691 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2691 "_elementtree.c"
        var $116=((($115))|0)==0; //@line 2691 "_elementtree.c"
        if ($116) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2691 "_elementtree.c"
      case 20: // $bb19
        var $117=HEAP[$res]; //@line 2691 "_elementtree.c"
        var $118=(($117+4)&4294967295); //@line 2691 "_elementtree.c"
        var $119=HEAP[$118]; //@line 2691 "_elementtree.c"
        var $120=(($119+24)&4294967295); //@line 2691 "_elementtree.c"
        var $121=HEAP[$120]; //@line 2691 "_elementtree.c"
        var $122=HEAP[$res]; //@line 2691 "_elementtree.c"
        FUNCTION_TABLE[$121]($122); //@line 2691 "_elementtree.c"
        __label__ = 21; break; //@line 2691 "_elementtree.c"
      case 21: // $bb20
        __label__ = 4; break; //@line 2691 "_elementtree.c"
      case 22: // $bb21
        var $123=HEAP[$reader]; //@line 2695 "_elementtree.c"
        var $124=(($123+4)&4294967295); //@line 2695 "_elementtree.c"
        var $125=HEAP[$124]; //@line 2695 "_elementtree.c"
        var $126=(($125+24)&4294967295); //@line 2695 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2695 "_elementtree.c"
        var $128=HEAP[$reader]; //@line 2695 "_elementtree.c"
        FUNCTION_TABLE[$127]($128); //@line 2695 "_elementtree.c"
        __label__ = 23; break; //@line 2695 "_elementtree.c"
      case 23: // $bb22
        var $129=HEAP[$self_addr]; //@line 2697 "_elementtree.c"
        var $130=_expat_parse($129, ((__str1)&4294967295), 0, 1); //@line 2697 "_elementtree.c"
        HEAP[$res]=$130; //@line 2697 "_elementtree.c"
        var $131=HEAP[$res]; //@line 2699 "_elementtree.c"
        var $132=($131)!=0; //@line 2699 "_elementtree.c"
        if ($132) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 2699 "_elementtree.c"
      case 24: // $bb23
        var $133=HEAP[$self_addr]; //@line 2699 "_elementtree.c"
        var $134=(($133+12)&4294967295); //@line 2699 "_elementtree.c"
        var $135=HEAP[$134]; //@line 2699 "_elementtree.c"
        var $136=(($135+4)&4294967295); //@line 2699 "_elementtree.c"
        var $137=HEAP[$136]; //@line 2699 "_elementtree.c"
        var $138=($137)==(_TreeBuilder_Type); //@line 2699 "_elementtree.c"
        if ($138) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 2699 "_elementtree.c"
      case 25: // $bb24
        var $139=HEAP[$res]; //@line 2700 "_elementtree.c"
        var $140=(($139)&4294967295); //@line 2700 "_elementtree.c"
        var $141=HEAP[$140]; //@line 2700 "_elementtree.c"
        var $142=((($141) - 1)&4294967295); //@line 2700 "_elementtree.c"
        var $143=HEAP[$res]; //@line 2700 "_elementtree.c"
        var $144=(($143)&4294967295); //@line 2700 "_elementtree.c"
        HEAP[$144]=$142; //@line 2700 "_elementtree.c"
        var $145=HEAP[$res]; //@line 2700 "_elementtree.c"
        var $146=(($145)&4294967295); //@line 2700 "_elementtree.c"
        var $147=HEAP[$146]; //@line 2700 "_elementtree.c"
        var $148=((($147))|0)==0; //@line 2700 "_elementtree.c"
        if ($148) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2700 "_elementtree.c"
      case 26: // $bb25
        var $149=HEAP[$res]; //@line 2700 "_elementtree.c"
        var $150=(($149+4)&4294967295); //@line 2700 "_elementtree.c"
        var $151=HEAP[$150]; //@line 2700 "_elementtree.c"
        var $152=(($151+24)&4294967295); //@line 2700 "_elementtree.c"
        var $153=HEAP[$152]; //@line 2700 "_elementtree.c"
        var $154=HEAP[$res]; //@line 2700 "_elementtree.c"
        FUNCTION_TABLE[$153]($154); //@line 2700 "_elementtree.c"
        __label__ = 27; break; //@line 2700 "_elementtree.c"
      case 27: // $bb26
        var $155=HEAP[$self_addr]; //@line 2701 "_elementtree.c"
        var $156=(($155+12)&4294967295); //@line 2701 "_elementtree.c"
        var $157=HEAP[$156]; //@line 2701 "_elementtree.c"
        var $158=$157; //@line 2701 "_elementtree.c"
        var $159=_treebuilder_done($158); //@line 2701 "_elementtree.c"
        HEAP[$0]=$159; //@line 2701 "_elementtree.c"
        __label__ = 29; break; //@line 2701 "_elementtree.c"
      case 28: // $bb27
        var $160=HEAP[$res]; //@line 2704 "_elementtree.c"
        HEAP[$0]=$160; //@line 2704 "_elementtree.c"
        __label__ = 29; break; //@line 2704 "_elementtree.c"
      case 29: // $bb28
        var $161=HEAP[$0]; //@line 2659 "_elementtree.c"
        HEAP[$retval]=$161; //@line 2659 "_elementtree.c"
        __label__ = 30; break; //@line 2659 "_elementtree.c"
      case 30: // $return
        var $retval29=HEAP[$retval]; //@line 2659 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 2659 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_setevents($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 40; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 40);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $args_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $i=__stackBase__+16;
        var $target=__stackBase__+20;
        var $events=__stackBase__+24;
        var $event_set=__stackBase__+28;
        var $item=__stackBase__+32;
        var $event=__stackBase__+36;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$args_addr]=$args;
        HEAP[$event_set]=__Py_NoneStruct; //@line 2716 "_elementtree.c"
        var $1=HEAP[$args_addr]; //@line 2717 "_elementtree.c"
        var $2=_PyArg_ParseTuple($1, ((__str99)&4294967295), _PyList_Type, $events, $event_set); //@line 2717 "_elementtree.c"
        var $3=((($2))|0)==0; //@line 2717 "_elementtree.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2717 "_elementtree.c"
      case 1: // $bb
        HEAP[$0]=0; //@line 2719 "_elementtree.c"
        __label__ = 46; break; //@line 2719 "_elementtree.c"
      case 2: // $bb1
        var $4=HEAP[$self_addr]; //@line 2721 "_elementtree.c"
        var $5=(($4+12)&4294967295); //@line 2721 "_elementtree.c"
        var $6=HEAP[$5]; //@line 2721 "_elementtree.c"
        var $7=(($6+4)&4294967295); //@line 2721 "_elementtree.c"
        var $8=HEAP[$7]; //@line 2721 "_elementtree.c"
        var $9=($8)!=(_TreeBuilder_Type); //@line 2721 "_elementtree.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2721 "_elementtree.c"
      case 3: // $bb2
        var $10=HEAP[_PyExc_TypeError]; //@line 2722 "_elementtree.c"
        _PyErr_SetString($10, ((__str100)&4294967295)); //@line 2722 "_elementtree.c"
        HEAP[$0]=0; //@line 2727 "_elementtree.c"
        __label__ = 46; break; //@line 2727 "_elementtree.c"
      case 4: // $bb3
        var $11=HEAP[$self_addr]; //@line 2730 "_elementtree.c"
        var $12=(($11+12)&4294967295); //@line 2730 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2730 "_elementtree.c"
        var $14=$13; //@line 2730 "_elementtree.c"
        HEAP[$target]=$14; //@line 2730 "_elementtree.c"
        var $15=HEAP[$events]; //@line 2732 "_elementtree.c"
        var $16=(($15)&4294967295); //@line 2732 "_elementtree.c"
        var $17=HEAP[$16]; //@line 2732 "_elementtree.c"
        var $18=((($17) + 1)&4294967295); //@line 2732 "_elementtree.c"
        var $19=(($15)&4294967295); //@line 2732 "_elementtree.c"
        HEAP[$19]=$18; //@line 2732 "_elementtree.c"
        var $20=HEAP[$target]; //@line 2733 "_elementtree.c"
        var $21=(($20+32)&4294967295); //@line 2733 "_elementtree.c"
        var $22=HEAP[$21]; //@line 2733 "_elementtree.c"
        var $23=($22)!=0; //@line 2733 "_elementtree.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 2733 "_elementtree.c"
      case 5: // $bb4
        var $24=HEAP[$target]; //@line 2733 "_elementtree.c"
        var $25=(($24+32)&4294967295); //@line 2733 "_elementtree.c"
        var $26=HEAP[$25]; //@line 2733 "_elementtree.c"
        var $27=(($26)&4294967295); //@line 2733 "_elementtree.c"
        var $28=HEAP[$27]; //@line 2733 "_elementtree.c"
        var $29=((($28) - 1)&4294967295); //@line 2733 "_elementtree.c"
        var $30=(($26)&4294967295); //@line 2733 "_elementtree.c"
        HEAP[$30]=$29; //@line 2733 "_elementtree.c"
        var $31=(($26)&4294967295); //@line 2733 "_elementtree.c"
        var $32=HEAP[$31]; //@line 2733 "_elementtree.c"
        var $33=((($32))|0)==0; //@line 2733 "_elementtree.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2733 "_elementtree.c"
      case 6: // $bb5
        var $34=HEAP[$target]; //@line 2733 "_elementtree.c"
        var $35=(($34+32)&4294967295); //@line 2733 "_elementtree.c"
        var $36=HEAP[$35]; //@line 2733 "_elementtree.c"
        var $37=(($36+4)&4294967295); //@line 2733 "_elementtree.c"
        var $38=HEAP[$37]; //@line 2733 "_elementtree.c"
        var $39=(($38+24)&4294967295); //@line 2733 "_elementtree.c"
        var $40=HEAP[$39]; //@line 2733 "_elementtree.c"
        var $41=HEAP[$target]; //@line 2733 "_elementtree.c"
        var $42=(($41+32)&4294967295); //@line 2733 "_elementtree.c"
        var $43=HEAP[$42]; //@line 2733 "_elementtree.c"
        FUNCTION_TABLE[$40]($43); //@line 2733 "_elementtree.c"
        __label__ = 7; break; //@line 2733 "_elementtree.c"
      case 7: // $bb6
        var $44=HEAP[$events]; //@line 2734 "_elementtree.c"
        var $45=HEAP[$target]; //@line 2734 "_elementtree.c"
        var $46=(($45+32)&4294967295); //@line 2734 "_elementtree.c"
        HEAP[$46]=$44; //@line 2734 "_elementtree.c"
        var $47=HEAP[$target]; //@line 2737 "_elementtree.c"
        var $48=(($47+36)&4294967295); //@line 2737 "_elementtree.c"
        var $49=HEAP[$48]; //@line 2737 "_elementtree.c"
        var $50=($49)!=0; //@line 2737 "_elementtree.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2737 "_elementtree.c"
      case 8: // $bb7
        var $51=HEAP[$target]; //@line 2737 "_elementtree.c"
        var $52=(($51+36)&4294967295); //@line 2737 "_elementtree.c"
        var $53=HEAP[$52]; //@line 2737 "_elementtree.c"
        var $54=(($53)&4294967295); //@line 2737 "_elementtree.c"
        var $55=HEAP[$54]; //@line 2737 "_elementtree.c"
        var $56=((($55) - 1)&4294967295); //@line 2737 "_elementtree.c"
        var $57=(($53)&4294967295); //@line 2737 "_elementtree.c"
        HEAP[$57]=$56; //@line 2737 "_elementtree.c"
        var $58=(($53)&4294967295); //@line 2737 "_elementtree.c"
        var $59=HEAP[$58]; //@line 2737 "_elementtree.c"
        var $60=((($59))|0)==0; //@line 2737 "_elementtree.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2737 "_elementtree.c"
      case 9: // $bb8
        var $61=HEAP[$target]; //@line 2737 "_elementtree.c"
        var $62=(($61+36)&4294967295); //@line 2737 "_elementtree.c"
        var $63=HEAP[$62]; //@line 2737 "_elementtree.c"
        var $64=(($63+4)&4294967295); //@line 2737 "_elementtree.c"
        var $65=HEAP[$64]; //@line 2737 "_elementtree.c"
        var $66=(($65+24)&4294967295); //@line 2737 "_elementtree.c"
        var $67=HEAP[$66]; //@line 2737 "_elementtree.c"
        var $68=HEAP[$target]; //@line 2737 "_elementtree.c"
        var $69=(($68+36)&4294967295); //@line 2737 "_elementtree.c"
        var $70=HEAP[$69]; //@line 2737 "_elementtree.c"
        FUNCTION_TABLE[$67]($70); //@line 2737 "_elementtree.c"
        __label__ = 10; break; //@line 2737 "_elementtree.c"
      case 10: // $bb9
        var $71=HEAP[$target]; //@line 2737 "_elementtree.c"
        var $72=(($71+36)&4294967295); //@line 2737 "_elementtree.c"
        HEAP[$72]=0; //@line 2737 "_elementtree.c"
        var $73=HEAP[$target]; //@line 2738 "_elementtree.c"
        var $74=(($73+40)&4294967295); //@line 2738 "_elementtree.c"
        var $75=HEAP[$74]; //@line 2738 "_elementtree.c"
        var $76=($75)!=0; //@line 2738 "_elementtree.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2738 "_elementtree.c"
      case 11: // $bb10
        var $77=HEAP[$target]; //@line 2738 "_elementtree.c"
        var $78=(($77+40)&4294967295); //@line 2738 "_elementtree.c"
        var $79=HEAP[$78]; //@line 2738 "_elementtree.c"
        var $80=(($79)&4294967295); //@line 2738 "_elementtree.c"
        var $81=HEAP[$80]; //@line 2738 "_elementtree.c"
        var $82=((($81) - 1)&4294967295); //@line 2738 "_elementtree.c"
        var $83=(($79)&4294967295); //@line 2738 "_elementtree.c"
        HEAP[$83]=$82; //@line 2738 "_elementtree.c"
        var $84=(($79)&4294967295); //@line 2738 "_elementtree.c"
        var $85=HEAP[$84]; //@line 2738 "_elementtree.c"
        var $86=((($85))|0)==0; //@line 2738 "_elementtree.c"
        if ($86) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2738 "_elementtree.c"
      case 12: // $bb11
        var $87=HEAP[$target]; //@line 2738 "_elementtree.c"
        var $88=(($87+40)&4294967295); //@line 2738 "_elementtree.c"
        var $89=HEAP[$88]; //@line 2738 "_elementtree.c"
        var $90=(($89+4)&4294967295); //@line 2738 "_elementtree.c"
        var $91=HEAP[$90]; //@line 2738 "_elementtree.c"
        var $92=(($91+24)&4294967295); //@line 2738 "_elementtree.c"
        var $93=HEAP[$92]; //@line 2738 "_elementtree.c"
        var $94=HEAP[$target]; //@line 2738 "_elementtree.c"
        var $95=(($94+40)&4294967295); //@line 2738 "_elementtree.c"
        var $96=HEAP[$95]; //@line 2738 "_elementtree.c"
        FUNCTION_TABLE[$93]($96); //@line 2738 "_elementtree.c"
        __label__ = 13; break; //@line 2738 "_elementtree.c"
      case 13: // $bb12
        var $97=HEAP[$target]; //@line 2738 "_elementtree.c"
        var $98=(($97+40)&4294967295); //@line 2738 "_elementtree.c"
        HEAP[$98]=0; //@line 2738 "_elementtree.c"
        var $99=HEAP[$target]; //@line 2739 "_elementtree.c"
        var $100=(($99+44)&4294967295); //@line 2739 "_elementtree.c"
        var $101=HEAP[$100]; //@line 2739 "_elementtree.c"
        var $102=($101)!=0; //@line 2739 "_elementtree.c"
        if ($102) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2739 "_elementtree.c"
      case 14: // $bb13
        var $103=HEAP[$target]; //@line 2739 "_elementtree.c"
        var $104=(($103+44)&4294967295); //@line 2739 "_elementtree.c"
        var $105=HEAP[$104]; //@line 2739 "_elementtree.c"
        var $106=(($105)&4294967295); //@line 2739 "_elementtree.c"
        var $107=HEAP[$106]; //@line 2739 "_elementtree.c"
        var $108=((($107) - 1)&4294967295); //@line 2739 "_elementtree.c"
        var $109=(($105)&4294967295); //@line 2739 "_elementtree.c"
        HEAP[$109]=$108; //@line 2739 "_elementtree.c"
        var $110=(($105)&4294967295); //@line 2739 "_elementtree.c"
        var $111=HEAP[$110]; //@line 2739 "_elementtree.c"
        var $112=((($111))|0)==0; //@line 2739 "_elementtree.c"
        if ($112) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2739 "_elementtree.c"
      case 15: // $bb14
        var $113=HEAP[$target]; //@line 2739 "_elementtree.c"
        var $114=(($113+44)&4294967295); //@line 2739 "_elementtree.c"
        var $115=HEAP[$114]; //@line 2739 "_elementtree.c"
        var $116=(($115+4)&4294967295); //@line 2739 "_elementtree.c"
        var $117=HEAP[$116]; //@line 2739 "_elementtree.c"
        var $118=(($117+24)&4294967295); //@line 2739 "_elementtree.c"
        var $119=HEAP[$118]; //@line 2739 "_elementtree.c"
        var $120=HEAP[$target]; //@line 2739 "_elementtree.c"
        var $121=(($120+44)&4294967295); //@line 2739 "_elementtree.c"
        var $122=HEAP[$121]; //@line 2739 "_elementtree.c"
        FUNCTION_TABLE[$119]($122); //@line 2739 "_elementtree.c"
        __label__ = 16; break; //@line 2739 "_elementtree.c"
      case 16: // $bb15
        var $123=HEAP[$target]; //@line 2739 "_elementtree.c"
        var $124=(($123+44)&4294967295); //@line 2739 "_elementtree.c"
        HEAP[$124]=0; //@line 2739 "_elementtree.c"
        var $125=HEAP[$target]; //@line 2740 "_elementtree.c"
        var $126=(($125+48)&4294967295); //@line 2740 "_elementtree.c"
        var $127=HEAP[$126]; //@line 2740 "_elementtree.c"
        var $128=($127)!=0; //@line 2740 "_elementtree.c"
        if ($128) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 2740 "_elementtree.c"
      case 17: // $bb16
        var $129=HEAP[$target]; //@line 2740 "_elementtree.c"
        var $130=(($129+48)&4294967295); //@line 2740 "_elementtree.c"
        var $131=HEAP[$130]; //@line 2740 "_elementtree.c"
        var $132=(($131)&4294967295); //@line 2740 "_elementtree.c"
        var $133=HEAP[$132]; //@line 2740 "_elementtree.c"
        var $134=((($133) - 1)&4294967295); //@line 2740 "_elementtree.c"
        var $135=(($131)&4294967295); //@line 2740 "_elementtree.c"
        HEAP[$135]=$134; //@line 2740 "_elementtree.c"
        var $136=(($131)&4294967295); //@line 2740 "_elementtree.c"
        var $137=HEAP[$136]; //@line 2740 "_elementtree.c"
        var $138=((($137))|0)==0; //@line 2740 "_elementtree.c"
        if ($138) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2740 "_elementtree.c"
      case 18: // $bb17
        var $139=HEAP[$target]; //@line 2740 "_elementtree.c"
        var $140=(($139+48)&4294967295); //@line 2740 "_elementtree.c"
        var $141=HEAP[$140]; //@line 2740 "_elementtree.c"
        var $142=(($141+4)&4294967295); //@line 2740 "_elementtree.c"
        var $143=HEAP[$142]; //@line 2740 "_elementtree.c"
        var $144=(($143+24)&4294967295); //@line 2740 "_elementtree.c"
        var $145=HEAP[$144]; //@line 2740 "_elementtree.c"
        var $146=HEAP[$target]; //@line 2740 "_elementtree.c"
        var $147=(($146+48)&4294967295); //@line 2740 "_elementtree.c"
        var $148=HEAP[$147]; //@line 2740 "_elementtree.c"
        FUNCTION_TABLE[$145]($148); //@line 2740 "_elementtree.c"
        __label__ = 19; break; //@line 2740 "_elementtree.c"
      case 19: // $bb18
        var $149=HEAP[$target]; //@line 2740 "_elementtree.c"
        var $150=(($149+48)&4294967295); //@line 2740 "_elementtree.c"
        HEAP[$150]=0; //@line 2740 "_elementtree.c"
        var $151=HEAP[$event_set]; //@line 2742 "_elementtree.c"
        var $152=($151)==(__Py_NoneStruct); //@line 2742 "_elementtree.c"
        if ($152) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2742 "_elementtree.c"
      case 20: // $bb19
        var $153=_PyString_FromString(((__str76)&4294967295)); //@line 2744 "_elementtree.c"
        var $154=HEAP[$target]; //@line 2744 "_elementtree.c"
        var $155=(($154+40)&4294967295); //@line 2744 "_elementtree.c"
        HEAP[$155]=$153; //@line 2744 "_elementtree.c"
        var $156=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2745 "_elementtree.c"
        var $157=((($156) + 1)&4294967295); //@line 2745 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$157; //@line 2745 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2745 "_elementtree.c"
        __label__ = 46; break; //@line 2745 "_elementtree.c"
      case 21: // $bb20
        var $158=HEAP[$event_set]; //@line 2748 "_elementtree.c"
        var $159=(($158+4)&4294967295); //@line 2748 "_elementtree.c"
        var $160=HEAP[$159]; //@line 2748 "_elementtree.c"
        var $161=(($160+84)&4294967295); //@line 2748 "_elementtree.c"
        var $162=HEAP[$161]; //@line 2748 "_elementtree.c"
        var $163=($162) & 67108864; //@line 2748 "_elementtree.c"
        var $164=((($163))|0)==0; //@line 2748 "_elementtree.c"
        if ($164) { __label__ = 45; break; } else { __label__ = 22; break; } //@line 2748 "_elementtree.c"
      case 22: // $bb21
        HEAP[$i]=0; //@line 2751 "_elementtree.c"
        __label__ = 43; break; //@line 2751 "_elementtree.c"
      case 23: // $bb22
        var $165=HEAP[$event_set]; //@line 2752 "_elementtree.c"
        var $166=$165; //@line 2752 "_elementtree.c"
        var $167=HEAP[$i]; //@line 2752 "_elementtree.c"
        var $168=(($166+12)&4294967295); //@line 2752 "_elementtree.c"
        var $169=(($168+$167*4)&4294967295); //@line 2752 "_elementtree.c"
        var $170=HEAP[$169]; //@line 2752 "_elementtree.c"
        HEAP[$item]=$170; //@line 2752 "_elementtree.c"
        var $171=HEAP[$item]; //@line 2754 "_elementtree.c"
        var $172=(($171+4)&4294967295); //@line 2754 "_elementtree.c"
        var $173=HEAP[$172]; //@line 2754 "_elementtree.c"
        var $174=(($173+84)&4294967295); //@line 2754 "_elementtree.c"
        var $175=HEAP[$174]; //@line 2754 "_elementtree.c"
        var $176=($175) & 134217728; //@line 2754 "_elementtree.c"
        var $177=((($176))|0)==0; //@line 2754 "_elementtree.c"
        if ($177) { __label__ = 45; break; } else { __label__ = 24; break; } //@line 2754 "_elementtree.c"
      case 24: // $bb23
        var $178=HEAP[$item]; //@line 2756 "_elementtree.c"
        var $179=$178; //@line 2756 "_elementtree.c"
        var $180=(($179+20)&4294967295); //@line 2756 "_elementtree.c"
        var $181=(($180)&4294967295); //@line 2756 "_elementtree.c"
        HEAP[$event]=$181; //@line 2756 "_elementtree.c"
        var $182=HEAP[$event]; //@line 2757 "_elementtree.c"
        var $183=_strcmp($182, ((__str75)&4294967295)); //@line 2757 "_elementtree.c"
        var $184=((($183))|0)==0; //@line 2757 "_elementtree.c"
        if ($184) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 2757 "_elementtree.c"
      case 25: // $bb24
        var $185=HEAP[$item]; //@line 2758 "_elementtree.c"
        var $186=(($185)&4294967295); //@line 2758 "_elementtree.c"
        var $187=HEAP[$186]; //@line 2758 "_elementtree.c"
        var $188=((($187) + 1)&4294967295); //@line 2758 "_elementtree.c"
        var $189=HEAP[$item]; //@line 2758 "_elementtree.c"
        var $190=(($189)&4294967295); //@line 2758 "_elementtree.c"
        HEAP[$190]=$188; //@line 2758 "_elementtree.c"
        var $191=HEAP[$target]; //@line 2759 "_elementtree.c"
        var $192=(($191+36)&4294967295); //@line 2759 "_elementtree.c"
        var $193=HEAP[$item]; //@line 2759 "_elementtree.c"
        HEAP[$192]=$193; //@line 2759 "_elementtree.c"
        __label__ = 42; break; //@line 2759 "_elementtree.c"
      case 26: // $bb25
        var $194=HEAP[$event]; //@line 2760 "_elementtree.c"
        var $195=_strcmp($194, ((__str76)&4294967295)); //@line 2760 "_elementtree.c"
        var $196=((($195))|0)==0; //@line 2760 "_elementtree.c"
        if ($196) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 2760 "_elementtree.c"
      case 27: // $bb26
        var $197=HEAP[$item]; //@line 2761 "_elementtree.c"
        var $198=(($197)&4294967295); //@line 2761 "_elementtree.c"
        var $199=HEAP[$198]; //@line 2761 "_elementtree.c"
        var $200=((($199) + 1)&4294967295); //@line 2761 "_elementtree.c"
        var $201=HEAP[$item]; //@line 2761 "_elementtree.c"
        var $202=(($201)&4294967295); //@line 2761 "_elementtree.c"
        HEAP[$202]=$200; //@line 2761 "_elementtree.c"
        var $203=HEAP[$target]; //@line 2762 "_elementtree.c"
        var $204=(($203+40)&4294967295); //@line 2762 "_elementtree.c"
        var $205=HEAP[$204]; //@line 2762 "_elementtree.c"
        var $206=($205)!=0; //@line 2762 "_elementtree.c"
        if ($206) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 2762 "_elementtree.c"
      case 28: // $bb27
        var $207=HEAP[$target]; //@line 2762 "_elementtree.c"
        var $208=(($207+40)&4294967295); //@line 2762 "_elementtree.c"
        var $209=HEAP[$208]; //@line 2762 "_elementtree.c"
        var $210=(($209)&4294967295); //@line 2762 "_elementtree.c"
        var $211=HEAP[$210]; //@line 2762 "_elementtree.c"
        var $212=((($211) - 1)&4294967295); //@line 2762 "_elementtree.c"
        var $213=(($209)&4294967295); //@line 2762 "_elementtree.c"
        HEAP[$213]=$212; //@line 2762 "_elementtree.c"
        var $214=(($209)&4294967295); //@line 2762 "_elementtree.c"
        var $215=HEAP[$214]; //@line 2762 "_elementtree.c"
        var $216=((($215))|0)==0; //@line 2762 "_elementtree.c"
        if ($216) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 2762 "_elementtree.c"
      case 29: // $bb28
        var $217=HEAP[$target]; //@line 2762 "_elementtree.c"
        var $218=(($217+40)&4294967295); //@line 2762 "_elementtree.c"
        var $219=HEAP[$218]; //@line 2762 "_elementtree.c"
        var $220=(($219+4)&4294967295); //@line 2762 "_elementtree.c"
        var $221=HEAP[$220]; //@line 2762 "_elementtree.c"
        var $222=(($221+24)&4294967295); //@line 2762 "_elementtree.c"
        var $223=HEAP[$222]; //@line 2762 "_elementtree.c"
        var $224=HEAP[$target]; //@line 2762 "_elementtree.c"
        var $225=(($224+40)&4294967295); //@line 2762 "_elementtree.c"
        var $226=HEAP[$225]; //@line 2762 "_elementtree.c"
        FUNCTION_TABLE[$223]($226); //@line 2762 "_elementtree.c"
        __label__ = 30; break; //@line 2762 "_elementtree.c"
      case 30: // $bb29
        var $227=HEAP[$target]; //@line 2763 "_elementtree.c"
        var $228=(($227+40)&4294967295); //@line 2763 "_elementtree.c"
        var $229=HEAP[$item]; //@line 2763 "_elementtree.c"
        HEAP[$228]=$229; //@line 2763 "_elementtree.c"
        __label__ = 42; break; //@line 2763 "_elementtree.c"
      case 31: // $bb30
        var $230=HEAP[$event]; //@line 2764 "_elementtree.c"
        var $231=_strcmp($230, ((__str101)&4294967295)); //@line 2764 "_elementtree.c"
        var $232=((($231))|0)==0; //@line 2764 "_elementtree.c"
        if ($232) { __label__ = 32; break; } else { __label__ = 36; break; } //@line 2764 "_elementtree.c"
      case 32: // $bb31
        var $233=HEAP[$item]; //@line 2765 "_elementtree.c"
        var $234=(($233)&4294967295); //@line 2765 "_elementtree.c"
        var $235=HEAP[$234]; //@line 2765 "_elementtree.c"
        var $236=((($235) + 1)&4294967295); //@line 2765 "_elementtree.c"
        var $237=HEAP[$item]; //@line 2765 "_elementtree.c"
        var $238=(($237)&4294967295); //@line 2765 "_elementtree.c"
        HEAP[$238]=$236; //@line 2765 "_elementtree.c"
        var $239=HEAP[$target]; //@line 2766 "_elementtree.c"
        var $240=(($239+44)&4294967295); //@line 2766 "_elementtree.c"
        var $241=HEAP[$240]; //@line 2766 "_elementtree.c"
        var $242=($241)!=0; //@line 2766 "_elementtree.c"
        if ($242) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 2766 "_elementtree.c"
      case 33: // $bb32
        var $243=HEAP[$target]; //@line 2766 "_elementtree.c"
        var $244=(($243+44)&4294967295); //@line 2766 "_elementtree.c"
        var $245=HEAP[$244]; //@line 2766 "_elementtree.c"
        var $246=(($245)&4294967295); //@line 2766 "_elementtree.c"
        var $247=HEAP[$246]; //@line 2766 "_elementtree.c"
        var $248=((($247) - 1)&4294967295); //@line 2766 "_elementtree.c"
        var $249=(($245)&4294967295); //@line 2766 "_elementtree.c"
        HEAP[$249]=$248; //@line 2766 "_elementtree.c"
        var $250=(($245)&4294967295); //@line 2766 "_elementtree.c"
        var $251=HEAP[$250]; //@line 2766 "_elementtree.c"
        var $252=((($251))|0)==0; //@line 2766 "_elementtree.c"
        if ($252) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2766 "_elementtree.c"
      case 34: // $bb33
        var $253=HEAP[$target]; //@line 2766 "_elementtree.c"
        var $254=(($253+44)&4294967295); //@line 2766 "_elementtree.c"
        var $255=HEAP[$254]; //@line 2766 "_elementtree.c"
        var $256=(($255+4)&4294967295); //@line 2766 "_elementtree.c"
        var $257=HEAP[$256]; //@line 2766 "_elementtree.c"
        var $258=(($257+24)&4294967295); //@line 2766 "_elementtree.c"
        var $259=HEAP[$258]; //@line 2766 "_elementtree.c"
        var $260=HEAP[$target]; //@line 2766 "_elementtree.c"
        var $261=(($260+44)&4294967295); //@line 2766 "_elementtree.c"
        var $262=HEAP[$261]; //@line 2766 "_elementtree.c"
        FUNCTION_TABLE[$259]($262); //@line 2766 "_elementtree.c"
        __label__ = 35; break; //@line 2766 "_elementtree.c"
      case 35: // $bb34
        var $263=HEAP[$target]; //@line 2767 "_elementtree.c"
        var $264=(($263+44)&4294967295); //@line 2767 "_elementtree.c"
        var $265=HEAP[$item]; //@line 2767 "_elementtree.c"
        HEAP[$264]=$265; //@line 2767 "_elementtree.c"
        var $266=HEAP[_expat_capi]; //@line 2768 "_elementtree.c"
        var $267=(($266+64)&4294967295); //@line 2768 "_elementtree.c"
        var $268=HEAP[$267]; //@line 2768 "_elementtree.c"
        var $269=HEAP[$self_addr]; //@line 2768 "_elementtree.c"
        var $270=(($269+8)&4294967295); //@line 2768 "_elementtree.c"
        var $271=HEAP[$270]; //@line 2768 "_elementtree.c"
        FUNCTION_TABLE[$268]($271, (FUNCTION_TABLE_OFFSET + 22), (FUNCTION_TABLE_OFFSET + 24)); //@line 2768 "_elementtree.c"
        __label__ = 42; break; //@line 2768 "_elementtree.c"
      case 36: // $bb35
        var $272=HEAP[$event]; //@line 2773 "_elementtree.c"
        var $273=_strcmp($272, ((__str102)&4294967295)); //@line 2773 "_elementtree.c"
        var $274=((($273))|0)==0; //@line 2773 "_elementtree.c"
        if ($274) { __label__ = 37; break; } else { __label__ = 41; break; } //@line 2773 "_elementtree.c"
      case 37: // $bb36
        var $275=HEAP[$item]; //@line 2774 "_elementtree.c"
        var $276=(($275)&4294967295); //@line 2774 "_elementtree.c"
        var $277=HEAP[$276]; //@line 2774 "_elementtree.c"
        var $278=((($277) + 1)&4294967295); //@line 2774 "_elementtree.c"
        var $279=HEAP[$item]; //@line 2774 "_elementtree.c"
        var $280=(($279)&4294967295); //@line 2774 "_elementtree.c"
        HEAP[$280]=$278; //@line 2774 "_elementtree.c"
        var $281=HEAP[$target]; //@line 2775 "_elementtree.c"
        var $282=(($281+48)&4294967295); //@line 2775 "_elementtree.c"
        var $283=HEAP[$282]; //@line 2775 "_elementtree.c"
        var $284=($283)!=0; //@line 2775 "_elementtree.c"
        if ($284) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 2775 "_elementtree.c"
      case 38: // $bb37
        var $285=HEAP[$target]; //@line 2775 "_elementtree.c"
        var $286=(($285+48)&4294967295); //@line 2775 "_elementtree.c"
        var $287=HEAP[$286]; //@line 2775 "_elementtree.c"
        var $288=(($287)&4294967295); //@line 2775 "_elementtree.c"
        var $289=HEAP[$288]; //@line 2775 "_elementtree.c"
        var $290=((($289) - 1)&4294967295); //@line 2775 "_elementtree.c"
        var $291=(($287)&4294967295); //@line 2775 "_elementtree.c"
        HEAP[$291]=$290; //@line 2775 "_elementtree.c"
        var $292=(($287)&4294967295); //@line 2775 "_elementtree.c"
        var $293=HEAP[$292]; //@line 2775 "_elementtree.c"
        var $294=((($293))|0)==0; //@line 2775 "_elementtree.c"
        if ($294) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 2775 "_elementtree.c"
      case 39: // $bb38
        var $295=HEAP[$target]; //@line 2775 "_elementtree.c"
        var $296=(($295+48)&4294967295); //@line 2775 "_elementtree.c"
        var $297=HEAP[$296]; //@line 2775 "_elementtree.c"
        var $298=(($297+4)&4294967295); //@line 2775 "_elementtree.c"
        var $299=HEAP[$298]; //@line 2775 "_elementtree.c"
        var $300=(($299+24)&4294967295); //@line 2775 "_elementtree.c"
        var $301=HEAP[$300]; //@line 2775 "_elementtree.c"
        var $302=HEAP[$target]; //@line 2775 "_elementtree.c"
        var $303=(($302+48)&4294967295); //@line 2775 "_elementtree.c"
        var $304=HEAP[$303]; //@line 2775 "_elementtree.c"
        FUNCTION_TABLE[$301]($304); //@line 2775 "_elementtree.c"
        __label__ = 40; break; //@line 2775 "_elementtree.c"
      case 40: // $bb39
        var $305=HEAP[$target]; //@line 2776 "_elementtree.c"
        var $306=(($305+48)&4294967295); //@line 2776 "_elementtree.c"
        var $307=HEAP[$item]; //@line 2776 "_elementtree.c"
        HEAP[$306]=$307; //@line 2776 "_elementtree.c"
        var $308=HEAP[_expat_capi]; //@line 2777 "_elementtree.c"
        var $309=(($308+64)&4294967295); //@line 2777 "_elementtree.c"
        var $310=HEAP[$309]; //@line 2777 "_elementtree.c"
        var $311=HEAP[$self_addr]; //@line 2777 "_elementtree.c"
        var $312=(($311+8)&4294967295); //@line 2777 "_elementtree.c"
        var $313=HEAP[$312]; //@line 2777 "_elementtree.c"
        FUNCTION_TABLE[$310]($313, (FUNCTION_TABLE_OFFSET + 22), (FUNCTION_TABLE_OFFSET + 24)); //@line 2777 "_elementtree.c"
        __label__ = 42; break; //@line 2777 "_elementtree.c"
      case 41: // $bb40
        var $314=HEAP[_PyExc_ValueError]; //@line 2783 "_elementtree.c"
        var $315=HEAP[$event]; //@line 2783 "_elementtree.c"
        var $316=_PyErr_Format($314, ((__str103)&4294967295), $315); //@line 2783 "_elementtree.c"
        HEAP[$0]=0; //@line 2787 "_elementtree.c"
        __label__ = 46; break; //@line 2787 "_elementtree.c"
      case 42: // $bb41
        var $317=HEAP[$i]; //@line 2751 "_elementtree.c"
        var $318=((($317) + 1)&4294967295); //@line 2751 "_elementtree.c"
        HEAP[$i]=$318; //@line 2751 "_elementtree.c"
        __label__ = 43; break; //@line 2751 "_elementtree.c"
      case 43: // $bb42
        var $319=HEAP[$event_set]; //@line 2751 "_elementtree.c"
        var $320=$319; //@line 2751 "_elementtree.c"
        var $321=(($320+8)&4294967295); //@line 2751 "_elementtree.c"
        var $322=HEAP[$321]; //@line 2751 "_elementtree.c"
        var $323=HEAP[$i]; //@line 2751 "_elementtree.c"
        var $324=((($322))|0) > ((($323))|0); //@line 2751 "_elementtree.c"
        if ($324) { __label__ = 23; break; } else { __label__ = 44; break; } //@line 2751 "_elementtree.c"
      case 44: // $bb43
        var $325=HEAP[((__Py_NoneStruct)&4294967295)]; //@line 2791 "_elementtree.c"
        var $326=((($325) + 1)&4294967295); //@line 2791 "_elementtree.c"
        HEAP[((__Py_NoneStruct)&4294967295)]=$326; //@line 2791 "_elementtree.c"
        HEAP[$0]=__Py_NoneStruct; //@line 2791 "_elementtree.c"
        __label__ = 46; break; //@line 2791 "_elementtree.c"
      case 45: // $error
        var $327=HEAP[_PyExc_TypeError]; //@line 2794 "_elementtree.c"
        _PyErr_SetString($327, ((__str104)&4294967295)); //@line 2794 "_elementtree.c"
        HEAP[$0]=0; //@line 2798 "_elementtree.c"
        __label__ = 46; break; //@line 2798 "_elementtree.c"
      case 46: // $bb44
        var $328=HEAP[$0]; //@line 2719 "_elementtree.c"
        HEAP[$retval]=$328; //@line 2719 "_elementtree.c"
        __label__ = 47; break; //@line 2719 "_elementtree.c"
      case 47: // $return
        var $retval45=HEAP[$retval]; //@line 2719 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 2719 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _xmlparser_getattr($self, $name) {
    var __stackBase__  = STACKTOP; STACKTOP += 120; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 120);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr=__stackBase__;
        var $name_addr=__stackBase__+4;
        var $retval=__stackBase__+8;
        var $0=__stackBase__+12;
        var $res=__stackBase__+16;
        var $buffer=__stackBase__+20;
        var $_alloca_point_=0;
        HEAP[$self_addr]=$self;
        HEAP[$name_addr]=$name;
        var $1=HEAP[$self_addr]; //@line 2814 "_elementtree.c"
        var $2=$1; //@line 2814 "_elementtree.c"
        var $3=HEAP[$name_addr]; //@line 2814 "_elementtree.c"
        var $4=_Py_FindMethod(_xmlparser_methods, $2, $3); //@line 2814 "_elementtree.c"
        HEAP[$res]=$4; //@line 2814 "_elementtree.c"
        var $5=HEAP[$res]; //@line 2815 "_elementtree.c"
        var $6=($5)!=0; //@line 2815 "_elementtree.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2815 "_elementtree.c"
      case 1: // $bb
        var $7=HEAP[$res]; //@line 2816 "_elementtree.c"
        HEAP[$0]=$7; //@line 2816 "_elementtree.c"
        __label__ = 10; break; //@line 2816 "_elementtree.c"
      case 2: // $bb1
        _PyErr_Clear(); //@line 2818 "_elementtree.c"
        var $8=HEAP[$name_addr]; //@line 2820 "_elementtree.c"
        var $9=_strcmp($8, ((__str108)&4294967295)); //@line 2820 "_elementtree.c"
        var $10=((($9))|0)==0; //@line 2820 "_elementtree.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2820 "_elementtree.c"
      case 3: // $bb2
        var $11=HEAP[$self_addr]; //@line 2821 "_elementtree.c"
        var $12=(($11+16)&4294967295); //@line 2821 "_elementtree.c"
        var $13=HEAP[$12]; //@line 2821 "_elementtree.c"
        HEAP[$res]=$13; //@line 2821 "_elementtree.c"
        __label__ = 9; break; //@line 2821 "_elementtree.c"
      case 4: // $bb3
        var $14=HEAP[$name_addr]; //@line 2822 "_elementtree.c"
        var $15=_strcmp($14, ((__str89)&4294967295)); //@line 2822 "_elementtree.c"
        var $16=((($15))|0)==0; //@line 2822 "_elementtree.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2822 "_elementtree.c"
      case 5: // $bb4
        var $17=HEAP[$self_addr]; //@line 2823 "_elementtree.c"
        var $18=(($17+12)&4294967295); //@line 2823 "_elementtree.c"
        var $19=HEAP[$18]; //@line 2823 "_elementtree.c"
        HEAP[$res]=$19; //@line 2823 "_elementtree.c"
        __label__ = 9; break; //@line 2823 "_elementtree.c"
      case 6: // $bb5
        var $20=HEAP[$name_addr]; //@line 2824 "_elementtree.c"
        var $21=_strcmp($20, ((__str109)&4294967295)); //@line 2824 "_elementtree.c"
        var $22=((($21))|0)==0; //@line 2824 "_elementtree.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2824 "_elementtree.c"
      case 7: // $bb6
        var $buffer7=$buffer; //@line 2826 "_elementtree.c"
        var $23=_sprintf($buffer7, ((__str110)&4294967295), 2, 0, 1); //@line 2826 "_elementtree.c"
        var $buffer8=$buffer; //@line 2828 "_elementtree.c"
        var $24=_PyString_FromString($buffer8); //@line 2828 "_elementtree.c"
        HEAP[$0]=$24; //@line 2828 "_elementtree.c"
        __label__ = 10; break; //@line 2828 "_elementtree.c"
      case 8: // $bb9
        var $25=HEAP[_PyExc_AttributeError]; //@line 2830 "_elementtree.c"
        var $26=HEAP[$name_addr]; //@line 2830 "_elementtree.c"
        _PyErr_SetString($25, $26); //@line 2830 "_elementtree.c"
        HEAP[$0]=0; //@line 2831 "_elementtree.c"
        __label__ = 10; break; //@line 2831 "_elementtree.c"
      case 9: // $bb10
        var $27=HEAP[$res]; //@line 2834 "_elementtree.c"
        var $28=(($27)&4294967295); //@line 2834 "_elementtree.c"
        var $29=HEAP[$28]; //@line 2834 "_elementtree.c"
        var $30=((($29) + 1)&4294967295); //@line 2834 "_elementtree.c"
        var $31=HEAP[$res]; //@line 2834 "_elementtree.c"
        var $32=(($31)&4294967295); //@line 2834 "_elementtree.c"
        HEAP[$32]=$30; //@line 2834 "_elementtree.c"
        var $33=HEAP[$res]; //@line 2835 "_elementtree.c"
        HEAP[$0]=$33; //@line 2835 "_elementtree.c"
        __label__ = 10; break; //@line 2835 "_elementtree.c"
      case 10: // $bb11
        var $34=HEAP[$0]; //@line 2816 "_elementtree.c"
        HEAP[$retval]=$34; //@line 2816 "_elementtree.c"
        __label__ = 11; break; //@line 2816 "_elementtree.c"
      case 11: // $return
        var $retval12=HEAP[$retval]; //@line 2816 "_elementtree.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 2816 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_elementtree() {
    var __stackBase__  = STACKTOP; STACKTOP += 16; assert(STACKTOP < STACK_MAX); _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m=__stackBase__;
        var $g=__stackBase__+4;
        var $bootstrap=__stackBase__+8;
        var $mp=__stackBase__+12;
        var $_alloca_point_=0;
        var $0=((_TreeBuilder_Type+4)&4294967295); //@line 2871 "_elementtree.c"
        HEAP[$0]=_PyType_Type; //@line 2871 "_elementtree.c"
        var $1=((_TreeBuilder_Type+4)&4294967295); //@line 2871 "_elementtree.c"
        var $2=HEAP[$1]; //@line 2871 "_elementtree.c"
        var $3=((_Element_Type+4)&4294967295); //@line 2871 "_elementtree.c"
        HEAP[$3]=$2; //@line 2871 "_elementtree.c"
        var $4=((_XMLParser_Type+4)&4294967295); //@line 2873 "_elementtree.c"
        HEAP[$4]=_PyType_Type; //@line 2873 "_elementtree.c"
        var $5=_Py_InitModule4(((__str114)&4294967295), __functions, 0, 0, 1013); //@line 2876 "_elementtree.c"
        HEAP[$m]=$5; //@line 2876 "_elementtree.c"
        var $6=HEAP[$m]; //@line 2877 "_elementtree.c"
        var $7=($6)==0; //@line 2877 "_elementtree.c"
        if ($7) { __label__ = 19; break; } else { __label__ = 1; break; } //@line 2877 "_elementtree.c"
      case 1: // $bb
        var $8=_PyDict_New(); //@line 2882 "_elementtree.c"
        HEAP[$g]=$8; //@line 2882 "_elementtree.c"
        var $9=HEAP[$g]; //@line 2883 "_elementtree.c"
        var $10=($9)==0; //@line 2883 "_elementtree.c"
        if ($10) { __label__ = 19; break; } else { __label__ = 2; break; } //@line 2883 "_elementtree.c"
      case 2: // $bb1
        var $11=_PyEval_GetBuiltins(); //@line 2886 "_elementtree.c"
        var $12=HEAP[$g]; //@line 2886 "_elementtree.c"
        var $13=_PyDict_SetItemString($12, ((__str115)&4294967295), $11); //@line 2886 "_elementtree.c"
        HEAP[$bootstrap]=((__str116)&4294967295); //@line 2888 "_elementtree.c"
        var $14=HEAP[$bootstrap]; //@line 3039 "_elementtree.c"
        var $15=HEAP[$g]; //@line 3039 "_elementtree.c"
        var $16=_PyRun_StringFlags($14, 257, $15, 0, 0); //@line 3039 "_elementtree.c"
        var $17=($16)==0; //@line 3039 "_elementtree.c"
        if ($17) { __label__ = 19; break; } else { __label__ = 3; break; } //@line 3039 "_elementtree.c"
      case 3: // $bb2
        var $18=HEAP[$g]; //@line 3042 "_elementtree.c"
        var $19=_PyDict_GetItemString($18, ((__str117)&4294967295)); //@line 3042 "_elementtree.c"
        HEAP[_elementpath_obj]=$19; //@line 3042 "_elementtree.c"
        var $20=HEAP[$g]; //@line 3044 "_elementtree.c"
        var $21=_PyDict_GetItemString($20, ((__str118)&4294967295)); //@line 3044 "_elementtree.c"
        HEAP[_elementtree_copyelement_obj]=$21; //@line 3044 "_elementtree.c"
        var $22=HEAP[_elementtree_copyelement_obj]; //@line 3045 "_elementtree.c"
        var $23=($22)!=0; //@line 3045 "_elementtree.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 3045 "_elementtree.c"
      case 4: // $bb3
        HEAP[$mp]=_element_methods; //@line 3048 "_elementtree.c"
        __label__ = 8; break; //@line 3048 "_elementtree.c"
      case 5: // $bb4
        var $24=HEAP[$mp]; //@line 3049 "_elementtree.c"
        var $25=(($24+4)&4294967295); //@line 3049 "_elementtree.c"
        var $26=HEAP[$25]; //@line 3049 "_elementtree.c"
        var $27=($26)==((FUNCTION_TABLE_OFFSET + 26)); //@line 3049 "_elementtree.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 3049 "_elementtree.c"
      case 6: // $bb5
        var $28=HEAP[$mp]; //@line 3050 "_elementtree.c"
        var $29=(($28)&4294967295); //@line 3050 "_elementtree.c"
        HEAP[$29]=((__str119)&4294967295); //@line 3050 "_elementtree.c"
        __label__ = 9; break; //@line 3050 "_elementtree.c"
      case 7: // $bb6
        var $30=HEAP[$mp]; //@line 3048 "_elementtree.c"
        var $31=(($30+16)&4294967295); //@line 3048 "_elementtree.c"
        HEAP[$mp]=$31; //@line 3048 "_elementtree.c"
        __label__ = 8; break; //@line 3048 "_elementtree.c"
      case 8: // $bb7
        var $32=HEAP[$mp]; //@line 3048 "_elementtree.c"
        var $33=(($32)&4294967295); //@line 3048 "_elementtree.c"
        var $34=HEAP[$33]; //@line 3048 "_elementtree.c"
        var $35=($34)!=0; //@line 3048 "_elementtree.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 3048 "_elementtree.c"
      case 9: // $bb8
        __label__ = 11; break; //@line 3048 "_elementtree.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 3054 "_elementtree.c"
        __label__ = 11; break; //@line 3054 "_elementtree.c"
      case 11: // $bb10
        var $36=HEAP[$g]; //@line 3056 "_elementtree.c"
        var $37=_PyDict_GetItemString($36, ((__str120)&4294967295)); //@line 3056 "_elementtree.c"
        HEAP[_elementtree_deepcopy_obj]=$37; //@line 3056 "_elementtree.c"
        var $38=HEAP[$g]; //@line 3057 "_elementtree.c"
        var $39=_PyDict_GetItemString($38, ((__str49)&4294967295)); //@line 3057 "_elementtree.c"
        HEAP[_elementtree_iter_obj]=$39; //@line 3057 "_elementtree.c"
        var $40=HEAP[$g]; //@line 3058 "_elementtree.c"
        var $41=_PyDict_GetItemString($40, ((__str50)&4294967295)); //@line 3058 "_elementtree.c"
        HEAP[_elementtree_itertext_obj]=$41; //@line 3058 "_elementtree.c"
        var $42=_PyCapsule_Import(((__str121)&4294967295), 0); //@line 3062 "_elementtree.c"
        var $43=$42; //@line 3062 "_elementtree.c"
        HEAP[_expat_capi]=$43; //@line 3062 "_elementtree.c"
        var $44=HEAP[_expat_capi]; //@line 3063 "_elementtree.c"
        var $45=($44)!=0; //@line 3063 "_elementtree.c"
        if ($45) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 3063 "_elementtree.c"
      case 12: // $bb11
        var $46=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $47=(($46)&4294967295); //@line 3065 "_elementtree.c"
        var $48=HEAP[$47]; //@line 3065 "_elementtree.c"
        var $49=_strcmp($48, ((__str122)&4294967295)); //@line 3065 "_elementtree.c"
        var $50=((($49))|0)!=0; //@line 3065 "_elementtree.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 13; break; } //@line 3065 "_elementtree.c"
      case 13: // $bb12
        var $51=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $52=(($51+4)&4294967295); //@line 3065 "_elementtree.c"
        var $53=HEAP[$52]; //@line 3065 "_elementtree.c"
        var $54=((($53))>>>0) <= 79; //@line 3065 "_elementtree.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 3065 "_elementtree.c"
      case 14: // $bb13
        var $55=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $56=(($55+8)&4294967295); //@line 3065 "_elementtree.c"
        var $57=HEAP[$56]; //@line 3065 "_elementtree.c"
        var $58=((($57))|0)!=2; //@line 3065 "_elementtree.c"
        if ($58) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 3065 "_elementtree.c"
      case 15: // $bb14
        var $59=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $60=(($59+12)&4294967295); //@line 3065 "_elementtree.c"
        var $61=HEAP[$60]; //@line 3065 "_elementtree.c"
        var $62=((($61))|0)!=0; //@line 3065 "_elementtree.c"
        if ($62) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 3065 "_elementtree.c"
      case 16: // $bb15
        var $63=HEAP[_expat_capi]; //@line 3065 "_elementtree.c"
        var $64=(($63+16)&4294967295); //@line 3065 "_elementtree.c"
        var $65=HEAP[$64]; //@line 3065 "_elementtree.c"
        var $66=((($65))|0)!=1; //@line 3065 "_elementtree.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 3065 "_elementtree.c"
      case 17: // $bb16
        HEAP[_expat_capi]=0; //@line 3070 "_elementtree.c"
        __label__ = 18; break; //@line 3070 "_elementtree.c"
      case 18: // $bb17
        var $67=HEAP[_PyExc_SyntaxError]; //@line 3074 "_elementtree.c"
        var $68=_PyErr_NewException(((__str123)&4294967295), $67, 0); //@line 3074 "_elementtree.c"
        HEAP[_elementtree_parseerror_obj]=$68; //@line 3074 "_elementtree.c"
        var $69=HEAP[_elementtree_parseerror_obj]; //@line 3077 "_elementtree.c"
        var $70=(($69)&4294967295); //@line 3077 "_elementtree.c"
        var $71=HEAP[$70]; //@line 3077 "_elementtree.c"
        var $72=((($71) + 1)&4294967295); //@line 3077 "_elementtree.c"
        var $73=(($69)&4294967295); //@line 3077 "_elementtree.c"
        HEAP[$73]=$72; //@line 3077 "_elementtree.c"
        var $74=HEAP[_elementtree_parseerror_obj]; //@line 3078 "_elementtree.c"
        var $75=HEAP[$m]; //@line 3078 "_elementtree.c"
        var $76=_PyModule_AddObject($75, ((__str124)&4294967295), $74); //@line 3078 "_elementtree.c"
        __label__ = 19; break; //@line 3078 "_elementtree.c"
      case 19: // $bb18
        __label__ = 20; break; //@line 2878 "_elementtree.c"
      case 20: // $return
        STACKTOP = __stackBase__;
        return; //@line 2878 "_elementtree.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_elementtree"] = _init_elementtree;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyObject_Malloc,0,_PyObject_Realloc,0,_PyObject_Free,0,_expat_start_handler,0,_expat_end_handler,0,_expat_default_handler,0,_expat_data_handler,0,_expat_comment_handler,0,_expat_pi_handler,0,_expat_unknown_encoding_handler,0,_expat_start_ns_handler,0,_expat_end_ns_handler,0,_element_reduce,0,_element_clear,0,_element_get,0,_element_set,0,_element_find,0,_element_findtext,0,_element_findall,0,_element_append,0,_element_extend,0,_element_insert,0,_element_remove,0,_element_iter,0,_element_itertext,0,_element_iterfind,0,_element_getchildren,0,_element_items,0,_element_keys,0,_element_makeelement,0,_element_copy,0,_element_deepcopy,0,_element_length,0,_element_getitem,0,_element_setitem,0,_element_subscr,0,_element_ass_subscr,0,_element_dealloc,0,_element_getattr,0,_element_setattr,0,_element_repr,0,_treebuilder_data,0,_treebuilder_start,0,_treebuilder_end,0,_treebuilder_xml,0,_treebuilder_close,0,_treebuilder_dealloc,0,_treebuilder_getattr,0,_xmlparser_feed,0,_xmlparser_close,0,_xmlparser_parse,0,_xmlparser_setevents,0,_xmlparser_dealloc,0,_xmlparser_getattr,0,_element,0,_subelement,0,_treebuilder,0,_xmlparser,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_elementtree_deepcopy_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([100,101,101,112,99,111,112,121,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* deepcopy helper not  */, "i8", ALLOC_NORMAL);
__str1=allocate(1, "i8", ALLOC_NORMAL);
__str2=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([79,124,79,33,58,69,108,101,109,101,110,116,0] /* O|O!:Element\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([79,33,79,124,79,33,58,83,117,98,69,108,101,109,101,110,116,0] /* O!O|O!:SubElement\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([79,33,58,97,112,112,101,110,100,0] /* O!:append\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([58,99,108,101,97,114,0] /* :clear\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([58,95,95,99,111,112,121,95,95,0] /* :__copy__\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([79,58,95,95,100,101,101,112,99,111,112,121,95,95,0] /* O:__deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([79,58,101,120,116,101,110,100,0] /* O:extend\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([101,120,112,101,99,116,101,100,32,115,101,113,117,101,110,99,101,44,32,110,111,116,32,34,37,46,50,48,48,115,34,0] /* expected sequence, n */, "i8", ALLOC_NORMAL);
__str11=allocate([79,124,79,58,102,105,110,100,0] /* O|O:find\00 */, "i8", ALLOC_NORMAL);
_elementpath_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str12=allocate([102,105,110,100,0] /* find\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([79,79,79,0] /* OOO\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([79,124,79,79,58,102,105,110,100,116,101,120,116,0] /* O|OO:findtext\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([102,105,110,100,116,101,120,116,0] /* findtext\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([79,79,79,79,0] /* OOOO\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([79,124,79,58,102,105,110,100,97,108,108,0] /* O|O:findall\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([102,105,110,100,97,108,108,0] /* findall\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([79,124,79,58,105,116,101,114,102,105,110,100,0] /* O|O:iterfind\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([105,116,101,114,102,105,110,100,0] /* iterfind\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([79,124,79,58,103,101,116,0] /* O|O:get\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([58,103,101,116,99,104,105,108,100,114,101,110,0] /* :getchildren\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([124,79,58,105,116,101,114,0] /* |O:iter\00 */, "i8", ALLOC_NORMAL);
_elementtree_iter_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str24=allocate([105,116,101,114,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* iter helper not foun */, "i8", ALLOC_NORMAL);
__str25=allocate([58,105,116,101,114,116,101,120,116,0] /* :itertext\00 */, "i8", ALLOC_NORMAL);
_elementtree_itertext_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str26=allocate([105,116,101,114,116,101,120,116,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* itertext helper not  */, "i8", ALLOC_NORMAL);
__str27=allocate([99,104,105,108,100,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* child index out of r */, "i8", ALLOC_NORMAL);
__str28=allocate([105,79,33,58,105,110,115,101,114,116,0] /* iO!:insert\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([58,105,116,101,109,115,0] /* :items\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([58,107,101,121,115,0] /* :keys\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([79,79,58,109,97,107,101,101,108,101,109,101,110,116,0] /* OO:makeelement\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([58,95,95,114,101,100,117,99,101,95,95,0] /* :__reduce__\00 */, "i8", ALLOC_NORMAL);
_elementtree_copyelement_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str33=allocate([99,111,112,121,101,108,101,109,101,110,116,32,104,101,108,112,101,114,32,110,111,116,32,102,111,117,110,100,0] /* copyelement helper n */, "i8", ALLOC_NORMAL);
__str34=allocate([79,40,78,41,0] /* O(N)\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([79,33,58,114,101,109,111,118,101,0] /* O!:remove\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([108,105,115,116,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* list.remove(x): x no */, "i8", ALLOC_NORMAL);
__str37=allocate([60,69,108,101,109,101,110,116,32,37,115,32,97,116,32,37,112,62,0] /* <Element %s at %p>\0 */, "i8", ALLOC_NORMAL);
__str38=allocate([79,79,58,115,101,116,0] /* OO:set\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([99,104,105,108,100,32,97,115,115,105,103,110,109,101,110,116,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* child assignment ind */, "i8", ALLOC_NORMAL);
__str40=allocate([101,108,101,109,101,110,116,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0] /* element indices must */, "i8", ALLOC_NORMAL);
__str41=allocate([97,116,116,101,109,112,116,32,116,111,32,97,115,115,105,103,110,32,115,101,113,117,101,110,99,101,32,111,102,32,115,105,122,101,32,37,122,100,32,116,111,32,101,120,116,101,110,100,101,100,32,115,108,105,99,101,32,111,102,32,115,105,122,101,32,37,122,100,0] /* attempt to assign se */, "i8", ALLOC_NORMAL);
__str42=allocate([99,108,101,97,114,0] /* clear\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([103,101,116,0] /* get\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([115,101,116,0] /* set\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([97,112,112,101,110,100,0] /* append\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([101,120,116,101,110,100,0] /* extend\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([114,101,109,111,118,101,0] /* remove\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([105,116,101,114,0] /* iter\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([105,116,101,114,116,101,120,116,0] /* itertext\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([103,101,116,105,116,101,114,97,116,111,114,0] /* getiterator\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([103,101,116,99,104,105,108,100,114,101,110,0] /* getchildren\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([105,116,101,109,115,0] /* items\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([107,101,121,115,0] /* keys\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([109,97,107,101,101,108,101,109,101,110,116,0] /* makeelement\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([95,95,100,101,101,112,99,111,112,121,95,95,0] /* __deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([33,95,95,114,101,100,117,99,101,95,95,0] /* !__reduce__\00 */, "i8", ALLOC_NORMAL);
_element_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str59=allocate([116,97,103,0] /* tag\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([116,101,120,116,0] /* text\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([116,97,105,108,0] /* tail\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,116,116,114,105,98,0] /* attrib\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([99,97,110,39,116,32,100,101,108,101,116,101,32,101,108,101,109,101,110,116,32,97,116,116,114,105,98,117,116,101,115,0] /* can't delete element */, "i8", ALLOC_NORMAL);
_element_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_element_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
__str64=allocate([69,108,101,109,101,110,116,0] /* Element\00 */, "i8", ALLOC_NORMAL);
_Element_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str65=allocate([58,84,114,101,101,66,117,105,108,100,101,114,0] /* :TreeBuilder\00 */, "i8", ALLOC_NORMAL);
_elementtree_parseerror_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str66=allocate([109,117,108,116,105,112,108,101,32,101,108,101,109,101,110,116,115,32,111,110,32,116,111,112,32,108,101,118,101,108,0] /* multiple elements on */, "i8", ALLOC_NORMAL);
__str67=allocate([112,111,112,32,102,114,111,109,32,101,109,112,116,121,32,115,116,97,99,107,0] /* pop from empty stack */, "i8", ALLOC_NORMAL);
__str68=allocate([79,79,0] /* OO\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([79,58,100,97,116,97,0] /* O:data\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([79,58,101,110,100,0] /* O:end\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([58,99,108,111,115,101,0] /* :close\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([79,124,79,58,115,116,97,114,116,0] /* O|O:start\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([79,79,58,120,109,108,0] /* OO:xml\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([115,116,97,114,116,0] /* start\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([101,110,100,0] /* end\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([120,109,108,0] /* xml\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
_treebuilder_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str79=allocate([84,114,101,101,66,117,105,108,100,101,114,0] /* TreeBuilder\00 */, "i8", ALLOC_NORMAL);
_TreeBuilder_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str80=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([37,115,58,32,108,105,110,101,32,37,100,44,32,99,111,108,117,109,110,32,37,100,0] /* %s: line %d, column  */, "i8", ALLOC_NORMAL);
__str82=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([40,105,105,41,0] /* (ii)\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([112,111,115,105,116,105,111,110,0] /* position\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([117,110,100,101,102,105,110,101,100,32,101,110,116,105,116,121,32,38,37,46,49,48,48,115,59,0] /* undefined entity &%. */, "i8", ALLOC_NORMAL);
_expat_capi=allocate(1, "%struct.PyExpat_CAPI*", ALLOC_NORMAL);
__str87=allocate([114,101,112,108,97,99,101,0] /* replace\00 */, "i8", ALLOC_NORMAL);
__str88=allocate([124,79,122,58,88,77,76,80,97,114,115,101,114,0] /* |Oz:XMLParser\00 */, "i8", ALLOC_NORMAL);
_kwlist_12208=allocate(12, "i8*", ALLOC_NORMAL);
__str89=allocate([116,97,114,103,101,116,0] /* target\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([101,110,99,111,100,105,110,103,0] /* encoding\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([99,97,110,110,111,116,32,108,111,97,100,32,100,105,115,112,97,116,99,104,32,116,97,98,108,101,32,102,114,111,109,32,112,121,101,120,112,97,116,0] /* cannot load dispatch */, "i8", ALLOC_NORMAL);
_memory_handler_12205=allocate(12, ["i8* (i32)*",0,0,0,"i8* (i8*, i32)*",0,0,0,"void (i8*)*",0,0,0], ALLOC_NORMAL);
__str92=allocate([125,0] /* }\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([99,111,109,109,101,110,116,0] /* comment\00 */, "i8", ALLOC_NORMAL);
__str94=allocate([112,105,0] /* pi\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([115,35,58,102,101,101,100,0] /* s#:feed\00 */, "i8", ALLOC_NORMAL);
__str96=allocate([79,58,95,112,97,114,115,101,0] /* O:_parse\00 */, "i8", ALLOC_NORMAL);
__str97=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str98=allocate([105,0] /* i\00 */, "i8", ALLOC_NORMAL);
__str99=allocate([79,33,124,79,58,95,115,101,116,101,118,101,110,116,115,0] /* O!|O:_setevents\00 */, "i8", ALLOC_NORMAL);
__str100=allocate([101,118,101,110,116,32,104,97,110,100,108,105,110,103,32,111,110,108,121,32,115,117,112,112,111,114,116,101,100,32,102,111,114,32,99,69,108,101,109,101,110,116,84,114,101,101,46,84,114,101,101,98,117,105,108,100,101,114,32,116,97,114,103,101,116,115,0] /* event handling only  */, "i8", ALLOC_NORMAL);
__str101=allocate([115,116,97,114,116,45,110,115,0] /* start-ns\00 */, "i8", ALLOC_NORMAL);
__str102=allocate([101,110,100,45,110,115,0] /* end-ns\00 */, "i8", ALLOC_NORMAL);
__str103=allocate([117,110,107,110,111,119,110,32,101,118,101,110,116,32,39,37,115,39,0] /* unknown event '%s'\0 */, "i8", ALLOC_NORMAL);
__str104=allocate([105,110,118,97,108,105,100,32,101,118,101,110,116,32,116,117,112,108,101,0] /* invalid event tuple\ */, "i8", ALLOC_NORMAL);
__str105=allocate([102,101,101,100,0] /* feed\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([95,112,97,114,115,101,0] /* _parse\00 */, "i8", ALLOC_NORMAL);
__str107=allocate([95,115,101,116,101,118,101,110,116,115,0] /* _setevents\00 */, "i8", ALLOC_NORMAL);
_xmlparser_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str108=allocate([101,110,116,105,116,121,0] /* entity\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([118,101,114,115,105,111,110,0] /* version\00 */, "i8", ALLOC_NORMAL);
__str110=allocate([69,120,112,97,116,32,37,100,46,37,100,46,37,100,0] /* Expat %d.%d.%d\00 */, "i8", ALLOC_NORMAL);
__str111=allocate([88,77,76,80,97,114,115,101,114,0] /* XMLParser\00 */, "i8", ALLOC_NORMAL);
_XMLParser_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str112=allocate([83,117,98,69,108,101,109,101,110,116,0] /* SubElement\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([88,77,76,84,114,101,101,66,117,105,108,100,101,114,0] /* XMLTreeBuilder\00 */, "i8", ALLOC_NORMAL);
__functions=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str114=allocate([95,101,108,101,109,101,110,116,116,114,101,101,0] /* _elementtree\00 */, "i8", ALLOC_NORMAL);
__str115=allocate([95,95,98,117,105,108,116,105,110,115,95,95,0] /* __builtins__\00 */, "i8", ALLOC_NORMAL);
__str116=allocate([102,114,111,109,32,99,111,112,121,32,105,109,112,111,114,116,32,99,111,112,121,44,32,100,101,101,112,99,111,112,121,10,116,114,121,58,10,32,32,102,114,111,109,32,120,109,108,46,101,116,114,101,101,32,105,109,112,111,114,116,32,69,108,101,109,101,110,116,84,114,101,101,10,101,120,99,101,112,116,32,73,109,112,111,114,116,69,114,114,111,114,58,10,32,32,105,109,112,111,114,116,32,69,108,101,109,101,110,116,84,114,101,101,10,69,84,32,61,32,69,108,101,109,101,110,116,84,114,101,101,10,100,101,108,32,69,108,101,109,101,110,116,84,114,101,101,10,105,109,112,111,114,116,32,95,101,108,101,109,101,110,116,116,114,101,101,32,97,115,32,99,69,108,101,109,101,110,116,84,114,101,101,10,116,114,121,58,10,32,32,99,111,112,121,40,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,39,120,39,41,41,10,101,120,99,101,112,116,58,10,32,32,100,101,102,32,99,111,112,121,101,108,101,109,101,110,116,40,101,108,101,109,41,58,10,32,32,32,32,114,101,116,117,114,110,32,101,108,101,109,10,99,108,97,115,115,32,67,111,109,109,101,110,116,80,114,111,120,121,58,10,32,100,101,102,32,95,95,99,97,108,108,95,95,40,115,101,108,102,44,32,116,101,120,116,61,78,111,110,101,41,58,10,32,32,101,108,101,109,101,110,116,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,69,84,46,67,111,109,109,101,110,116,41,10,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,116,101,120,116,10,32,32,114,101,116,117,114,110,32,101,108,101,109,101,110,116,10,32,100,101,102,32,95,95,99,109,112,95,95,40,115,101,108,102,44,32,111,116,104,101,114,41,58,10,32,32,114,101,116,117,114,110,32,99,109,112,40,69,84,46,67,111,109,109,101,110,116,44,32,111,116,104,101,114,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,67,111,109,109,101,110,116,32,61,32,67,111,109,109,101,110,116,80,114,111,120,121,40,41,10,99,108,97,115,115,32,69,108,101,109,101,110,116,84,114,101,101,40,69,84,46,69,108,101,109,101,110,116,84,114,101,101,41,58,10,32,32,100,101,102,32,112,97,114,115,101,40,115,101,108,102,44,32,115,111,117,114,99,101,44,32,112,97,114,115,101,114,61,78,111,110,101,41,58,10,32,32,32,32,105,102,32,110,111,116,32,104,97,115,97,116,116,114,40,115,111,117,114,99,101,44,32,39,114,101,97,100,39,41,58,10,32,32,32,32,32,32,115,111,117,114,99,101,32,61,32,111,112,101,110,40,115,111,117,114,99,101,44,32,39,114,98,39,41,10,32,32,32,32,105,102,32,112,97,114,115,101,114,32,105,115,32,110,111,116,32,78,111,110,101,58,10,32,32,32,32,32,32,119,104,105,108,101,32,49,58,10,32,32,32,32,32,32,32,32,100,97,116,97,32,61,32,115,111,117,114,99,101,46,114,101,97,100,40,54,53,53,51,54,41,10,32,32,32,32,32,32,32,32,105,102,32,110,111,116,32,100,97,116,97,58,10,32,32,32,32,32,32,32,32,32,32,98,114,101,97,107,10,32,32,32,32,32,32,32,32,112,97,114,115,101,114,46,102,101,101,100,40,100,97,116,97,41,10,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,41,10,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,112,97,114,115,101,114,46,95,112,97,114,115,101,40,115,111,117,114,99,101,41,10,32,32,32,32,114,101,116,117,114,110,32,115,101,108,102,46,95,114,111,111,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,84,114,101,101,32,61,32,69,108,101,109,101,110,116,84,114,101,101,10,100,101,102,32,105,116,101,114,40,110,111,100,101,44,32,116,97,103,61,78,111,110,101,41,58,10,32,32,105,102,32,116,97,103,32,61,61,32,39,42,39,58,10,32,32,32,32,116,97,103,32,61,32,78,111,110,101,10,32,32,105,102,32,116,97,103,32,105,115,32,78,111,110,101,32,111,114,32,110,111,100,101,46,116,97,103,32,61,61,32,116,97,103,58,10,32,32,32,32,121,105,101,108,100,32,110,111,100,101,10,32,32,102,111,114,32,110,111,100,101,32,105,110,32,110,111,100,101,58,10,32,32,32,32,102,111,114,32,110,111,100,101,32,105,110,32,105,116,101,114,40,110,111,100,101,44,32,116,97,103,41,58,10,32,32,32,32,32,32,121,105,101,108,100,32,110,111,100,101,10,100,101,102,32,105,116,101,114,116,101,120,116,40,110,111,100,101,41,58,10,32,32,105,102,32,110,111,100,101,46,116,101,120,116,58,10,32,32,32,32,121,105,101,108,100,32,110,111,100,101,46,116,101,120,116,10,32,32,102,111,114,32,101,32,105,110,32,110,111,100,101,58,10,32,32,32,32,102,111,114,32,115,32,105,110,32,101,46,105,116,101,114,116,101,120,116,40,41,58,10,32,32,32,32,32,32,121,105,101,108,100,32,115,10,32,32,32,32,105,102,32,101,46,116,97,105,108,58,10,32,32,32,32,32,32,121,105,101,108,100,32,101,46,116,97,105,108,10,100,101,102,32,112,97,114,115,101,40,115,111,117,114,99,101,44,32,112,97,114,115,101,114,61,78,111,110,101,41,58,10,32,32,116,114,101,101,32,61,32,69,108,101,109,101,110,116,84,114,101,101,40,41,10,32,32,116,114,101,101,46,112,97,114,115,101,40,115,111,117,114,99,101,44,32,112,97,114,115,101,114,41,10,32,32,114,101,116,117,114,110,32,116,114,101,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,112,97,114,115,101,32,61,32,112,97,114,115,101,10,99,108,97,115,115,32,105,116,101,114,112,97,114,115,101,40,111,98,106,101,99,116,41,58,10,32,114,111,111,116,32,61,32,78,111,110,101,10,32,100,101,102,32,95,95,105,110,105,116,95,95,40,115,101,108,102,44,32,102,105,108,101,44,32,101,118,101,110,116,115,61,78,111,110,101,41,58,10,32,32,105,102,32,110,111,116,32,104,97,115,97,116,116,114,40,102,105,108,101,44,32,39,114,101,97,100,39,41,58,10,32,32,32,32,102,105,108,101,32,61,32,111,112,101,110,40,102,105,108,101,44,32,39,114,98,39,41,10,32,32,115,101,108,102,46,95,102,105,108,101,32,61,32,102,105,108,101,10,32,32,115,101,108,102,46,95,101,118,101,110,116,115,32,61,32,91,93,10,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,48,10,32,32,115,101,108,102,46,114,111,111,116,32,61,32,115,101,108,102,46,95,114,111,111,116,32,61,32,78,111,110,101,10,32,32,98,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,84,114,101,101,66,117,105,108,100,101,114,40,41,10,32,32,115,101,108,102,46,95,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,98,41,10,32,32,115,101,108,102,46,95,112,97,114,115,101,114,46,95,115,101,116,101,118,101,110,116,115,40,115,101,108,102,46,95,101,118,101,110,116,115,44,32,101,118,101,110,116,115,41,10,32,100,101,102,32,110,101,120,116,40,115,101,108,102,41,58,10,32,32,119,104,105,108,101,32,49,58,10,32,32,32,32,116,114,121,58,10,32,32,32,32,32,32,105,116,101,109,32,61,32,115,101,108,102,46,95,101,118,101,110,116,115,91,115,101,108,102,46,95,105,110,100,101,120,93,10,32,32,32,32,101,120,99,101,112,116,32,73,110,100,101,120,69,114,114,111,114,58,10,32,32,32,32,32,32,105,102,32,115,101,108,102,46,95,112,97,114,115,101,114,32,105,115,32,78,111,110,101,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,114,111,111,116,32,61,32,115,101,108,102,46,95,114,111,111,116,10,32,32,32,32,32,32,32,32,114,97,105,115,101,32,83,116,111,112,73,116,101,114,97,116,105,111,110,10,32,32,32,32,32,32,35,32,108,111,97,100,32,101,118,101,110,116,32,98,117,102,102,101,114,10,32,32,32,32,32,32,100,101,108,32,115,101,108,102,46,95,101,118,101,110,116,115,91,58,93,10,32,32,32,32,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,48,10,32,32,32,32,32,32,100,97,116,97,32,61,32,115,101,108,102,46,95,102,105,108,101,46,114,101,97,100,40,49,54,51,56,52,41,10,32,32,32,32,32,32,105,102,32,100,97,116,97,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,112,97,114,115,101,114,46,102,101,101,100,40,100,97,116,97,41,10,32,32,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,114,111,111,116,32,61,32,115,101,108,102,46,95,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,32,32,32,32,32,32,32,32,115,101,108,102,46,95,112,97,114,115,101,114,32,61,32,78,111,110,101,10,32,32,32,32,101,108,115,101,58,10,32,32,32,32,32,32,115,101,108,102,46,95,105,110,100,101,120,32,61,32,115,101,108,102,46,95,105,110,100,101,120,32,43,32,49,10,32,32,32,32,32,32,114,101,116,117,114,110,32,105,116,101,109,10,32,100,101,102,32,95,95,105,116,101,114,95,95,40,115,101,108,102,41,58,10,32,32,114,101,116,117,114,110,32,115,101,108,102,10,99,69,108,101,109,101,110,116,84,114,101,101,46,105,116,101,114,112,97,114,115,101,32,61,32,105,116,101,114,112,97,114,115,101,10,99,108,97,115,115,32,80,73,80,114,111,120,121,58,10,32,100,101,102,32,95,95,99,97,108,108,95,95,40,115,101,108,102,44,32,116,97,114,103,101,116,44,32,116,101,120,116,61,78,111,110,101,41,58,10,32,32,101,108,101,109,101,110,116,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,40,69,84,46,80,73,41,10,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,116,97,114,103,101,116,10,32,32,105,102,32,116,101,120,116,58,10,32,32,32,32,101,108,101,109,101,110,116,46,116,101,120,116,32,61,32,101,108,101,109,101,110,116,46,116,101,120,116,32,43,32,39,32,39,32,43,32,116,101,120,116,10,32,32,114,101,116,117,114,110,32,101,108,101,109,101,110,116,10,32,100,101,102,32,95,95,99,109,112,95,95,40,115,101,108,102,44,32,111,116,104,101,114,41,58,10,32,32,114,101,116,117,114,110,32,99,109,112,40,69,84,46,80,73,44,32,111,116,104,101,114,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,80,73,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,80,114,111,99,101,115,115,105,110,103,73,110,115,116,114,117,99,116,105,111,110,32,61,32,80,73,80,114,111,120,121,40,41,10,100,101,102,32,88,77,76,40,116,101,120,116,41,58,10,32,32,112,97,114,115,101,114,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,80,97,114,115,101,114,40,41,10,32,32,112,97,114,115,101,114,46,102,101,101,100,40,116,101,120,116,41,10,32,32,114,101,116,117,114,110,32,112,97,114,115,101,114,46,99,108,111,115,101,40,41,10,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,32,61,32,99,69,108,101,109,101,110,116,84,114,101,101,46,102,114,111,109,115,116,114,105,110,103,32,61,32,88,77,76,10,100,101,102,32,88,77,76,73,68,40,116,101,120,116,41,58,10,32,32,116,114,101,101,32,61,32,88,77,76,40,116,101,120,116,41,10,32,32,105,100,115,32,61,32,123,125,10,32,32,102,111,114,32,101,108,101,109,32,105,110,32,116,114,101,101,46,105,116,101,114,40,41,58,10,32,32,32,32,105,100,32,61,32,101,108,101,109,46,103,101,116,40,39,105,100,39,41,10,32,32,32,32,105,102,32,105,100,58,10,32,32,32,32,32,32,105,100,115,91,105,100,93,32,61,32,101,108,101,109,10,32,32,114,101,116,117,114,110,32,116,114,101,101,44,32,105,100,115,10,99,69,108,101,109,101,110,116,84,114,101,101,46,88,77,76,73,68,32,61,32,88,77,76,73,68,10,116,114,121,58,10,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,32,61,32,69,84,46,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,10,101,120,99,101,112,116,32,65,116,116,114,105,98,117,116,101,69,114,114,111,114,58,10,32,100,101,102,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,40,112,114,101,102,105,120,44,32,117,114,105,41,58,10,32,32,69,84,46,95,110,97,109,101,115,112,97,99,101,95,109,97,112,91,117,114,105,93,32,61,32,112,114,101,102,105,120,10,99,69,108,101,109,101,110,116,84,114,101,101,46,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,32,61,32,114,101,103,105,115,116,101,114,95,110,97,109,101,115,112,97,99,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,100,117,109,112,32,61,32,69,84,46,100,117,109,112,10,99,69,108,101,109,101,110,116,84,114,101,101,46,69,108,101,109,101,110,116,80,97,116,104,32,61,32,69,108,101,109,101,110,116,80,97,116,104,32,61,32,69,84,46,69,108,101,109,101,110,116,80,97,116,104,10,99,69,108,101,109,101,110,116,84,114,101,101,46,105,115,101,108,101,109,101,110,116,32,61,32,69,84,46,105,115,101,108,101,109,101,110,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,81,78,97,109,101,32,61,32,69,84,46,81,78,97,109,101,10,99,69,108,101,109,101,110,116,84,114,101,101,46,116,111,115,116,114,105,110,103,32,61,32,69,84,46,116,111,115,116,114,105,110,103,10,99,69,108,101,109,101,110,116,84,114,101,101,46,102,114,111,109,115,116,114,105,110,103,108,105,115,116,32,61,32,69,84,46,102,114,111,109,115,116,114,105,110,103,108,105,115,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,116,111,115,116,114,105,110,103,108,105,115,116,32,61,32,69,84,46,116,111,115,116,114,105,110,103,108,105,115,116,10,99,69,108,101,109,101,110,116,84,114,101,101,46,86,69,82,83,73,79,78,32,61,32,39,49,46,48,46,54,39,10,99,69,108,101,109,101,110,116,84,114,101,101,46,95,95,118,101,114,115,105,111,110,95,95,32,61,32,39,49,46,48,46,54,39,10,0] /* from copy import cop */, "i8", ALLOC_NORMAL);
__str117=allocate([69,108,101,109,101,110,116,80,97,116,104,0] /* ElementPath\00 */, "i8", ALLOC_NORMAL);
__str118=allocate([99,111,112,121,101,108,101,109,101,110,116,0] /* copyelement\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str120=allocate([100,101,101,112,99,111,112,121,0] /* deepcopy\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([112,121,101,120,112,97,116,46,101,120,112,97,116,95,67,65,80,73,0] /* pyexpat.expat_CAPI\0 */, "i8", ALLOC_NORMAL);
__str122=allocate([112,121,101,120,112,97,116,46,101,120,112,97,116,95,67,65,80,73,32,49,46,48,0] /* pyexpat.expat_CAPI 1 */, "i8", ALLOC_NORMAL);
__str123=allocate([99,69,108,101,109,101,110,116,84,114,101,101,46,80,97,114,115,101,69,114,114,111,114,0] /* cElementTree.ParseEr */, "i8", ALLOC_NORMAL);
__str124=allocate([80,97,114,115,101,69,114,114,111,114,0] /* ParseError\00 */, "i8", ALLOC_NORMAL);
HEAP[_element_methods]=((__str42)&4294967295);
HEAP[_element_methods+4]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_element_methods+16]=((__str43)&4294967295);
HEAP[_element_methods+20]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_element_methods+32]=((__str44)&4294967295);
HEAP[_element_methods+36]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_element_methods+48]=((__str12)&4294967295);
HEAP[_element_methods+52]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_element_methods+64]=((__str15)&4294967295);
HEAP[_element_methods+68]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_element_methods+80]=((__str18)&4294967295);
HEAP[_element_methods+84]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_element_methods+96]=((__str45)&4294967295);
HEAP[_element_methods+100]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_element_methods+112]=((__str46)&4294967295);
HEAP[_element_methods+116]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_element_methods+128]=((__str47)&4294967295);
HEAP[_element_methods+132]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_element_methods+144]=((__str48)&4294967295);
HEAP[_element_methods+148]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_element_methods+160]=((__str49)&4294967295);
HEAP[_element_methods+164]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_element_methods+176]=((__str50)&4294967295);
HEAP[_element_methods+180]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_element_methods+192]=((__str20)&4294967295);
HEAP[_element_methods+196]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_element_methods+208]=((__str51)&4294967295);
HEAP[_element_methods+212]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_element_methods+224]=((__str52)&4294967295);
HEAP[_element_methods+228]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_element_methods+240]=((__str53)&4294967295);
HEAP[_element_methods+244]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_element_methods+256]=((__str54)&4294967295);
HEAP[_element_methods+260]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_element_methods+272]=((__str55)&4294967295);
HEAP[_element_methods+276]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_element_methods+288]=((__str56)&4294967295);
HEAP[_element_methods+292]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_element_methods+304]=((__str57)&4294967295);
HEAP[_element_methods+308]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_element_methods+320]=((__str58)&4294967295);
HEAP[_element_methods+324]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_element_as_sequence]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_element_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_element_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_element_as_mapping]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_element_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_element_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_Element_Type+12]=((__str64)&4294967295);
HEAP[_Element_Type+24]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_Element_Type+32]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_Element_Type+36]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_Element_Type+44]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_Element_Type+52]=_element_as_sequence;
HEAP[_Element_Type+56]=_element_as_mapping;
HEAP[_treebuilder_methods]=((__str74)&4294967295);
HEAP[_treebuilder_methods+4]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_treebuilder_methods+16]=((__str75)&4294967295);
HEAP[_treebuilder_methods+20]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_treebuilder_methods+32]=((__str76)&4294967295);
HEAP[_treebuilder_methods+36]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_treebuilder_methods+48]=((__str77)&4294967295);
HEAP[_treebuilder_methods+52]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_treebuilder_methods+64]=((__str78)&4294967295);
HEAP[_treebuilder_methods+68]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_TreeBuilder_Type+12]=((__str79)&4294967295);
HEAP[_TreeBuilder_Type+24]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_TreeBuilder_Type+32]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_kwlist_12208]=((__str89)&4294967295);
HEAP[_kwlist_12208+4]=((__str90)&4294967295);
HEAP[_xmlparser_methods]=((__str105)&4294967295);
HEAP[_xmlparser_methods+4]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_xmlparser_methods+16]=((__str78)&4294967295);
HEAP[_xmlparser_methods+20]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_xmlparser_methods+32]=((__str106)&4294967295);
HEAP[_xmlparser_methods+36]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_xmlparser_methods+48]=((__str107)&4294967295);
HEAP[_xmlparser_methods+52]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_XMLParser_Type+12]=((__str111)&4294967295);
HEAP[_XMLParser_Type+24]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_XMLParser_Type+32]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[__functions]=((__str64)&4294967295);
HEAP[__functions+4]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[__functions+16]=((__str112)&4294967295);
HEAP[__functions+20]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[__functions+32]=((__str79)&4294967295);
HEAP[__functions+36]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[__functions+48]=((__str111)&4294967295);
HEAP[__functions+52]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[__functions+64]=((__str113)&4294967295);
HEAP[__functions+68]=(FUNCTION_TABLE_OFFSET + 116);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

