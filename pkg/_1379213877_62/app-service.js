	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'handleOpen'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'item']],[3,'tag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showSelect']])
Z([3,'#666'])
Z([3,'handleRegionChange'])
Z([[7],[3,'regionExcludes']])
Z([[7],[3,'regionIncludes']])
Z([[7],[3,'regionLevel']])
Z([[7],[3,'_regionValue']])
Z([[7],[3,'showMap']])
Z([[7],[3,'_tabActiveKey']])
Z([1,false])
Z([3,'handleTabChange'])
Z([3,'tab__header'])
Z([3,'list'])
Z([3,'列表'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'handleListItemTap'])
Z([3,'address-list-item'])
Z([[7],[3,'item']])
Z([3,'view--hover'])
Z([3,'250'])
Z([3,'component-item-class'])
Z(z[19])
Z([3,'title-item-class'])
Z([3,'tab-pane'])
Z([3,'map'])
Z([3,'地图'])
Z([[7],[3,'canShowMap']])
Z([[7],[3,'_activeId']])
Z([3,'handleActiveMarker'])
Z([3,'handleMapUpdate'])
Z([[7],[3,'loadUnit']])
Z(z[15])
Z([[7],[3,'_position']])
Z([3,'map-address-item'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'list']],[[7],[3,'_activeIndex']]]]])
Z([3,'handleMapItemTap'])
Z([3,'address-map-item'])
Z([[6],[[7],[3,'list']],[[7],[3,'_activeIndex']]])
Z([[2,'?:'],[[2,'!=='],[[7],[3,'mode']],[1,'navigator']],[1,'view--hover'],[1,'']])
Z([3,'200'])
Z(z[22])
Z(z[39])
Z(z[24])
Z([[2,'==='],[[7],[3,'mode']],[1,'navigator']])
Z([[2,'>'],[[6],[[6],[[6],[[7],[3,'list']],[[7],[3,'_activeIndex']]],[3,'phone']],[3,'length']],[1,0]])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[15])
Z(z[34])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[41])
Z(z[19])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([3,'agree'])
Z([3,'checkbox__icon--checked'])
Z([3,'32'])
Z([3,'check'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[6],[[7],[3,'buttonList']],[3,'length']],[1,0]])
Z([a,[3,'button-group '],[[2,'?:'],[[7],[3,'fixed']],[1,'button-group--fixed'],[1,'']]])
Z([[7],[3,'agree']])
Z([3,'handleAgreeChange'])
Z([[7],[3,'_agreeChecked']])
Z([3,'agree'])
Z([3,'other'])
Z([a,[3,'button-area button-area--'],[[7],[3,'direction']]])
Z([[7],[3,'secondText']])
Z([[7],[3,'primaryText']])
Z([[2,'>'],[[6],[[7],[3,'buttonList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleMonthSwiper'])
Z([a,[3,'calendar--'],[[7],[3,'_mode']]])
Z([[7],[3,'_current']])
Z([3,'300'])
Z([[2,'==='],[[7],[3,'_mode']],[1,'single']])
Z([[2,'==='],[[7],[3,'_mode']],[1,'multiple']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindtap'])
Z([[2,'+'],[1,'g-card__contain'],[[2,'?:'],[[7],[3,'disabled']],[1,' disabled-class'],[1,'']]])
Z([[2,'!=='],[[7],[3,'iconType']],[1,'none']])
Z([[2,'?:'],[[7],[3,'__radioType']],[1,'radio__icon--checked'],[1,'checkbox__icon--checked']])
Z([3,'48'])
Z([[2,'?:'],[[7],[3,'__radioType']],[1,'circle'],[1,'check']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClose'])
Z([[7],[3,'visible']])
Z([[7],[3,'_tabActiveIndex']])
Z([3,'handleTabChange'])
Z([1,false])
Z([3,'670'])
Z([3,'index'])
Z([[7],[3,'range']])
Z([3,'title'])
Z([[7],[3,'index']])
Z([[2,'||'],[[6],[[6],[[7],[3,'_value']],[[7],[3,'index']]],[3,'name']],[[6],[[7],[3,'item']],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'+'],[[2,'+'],[[7],[3,'label']],[[2,'?:'],[[7],[3,'desc']],[[2,'+'],[1,' '],[[7],[3,'desc']]],[1,'']]],[[2,'?:'],[[7],[3,'disabled']],[1,'已禁用'],[1,'']]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'access']],[[7],[3,'to']]],[1,'button'],[1,'']])
Z([3,'handleTap'])
Z([3,'cell component-class'])
Z([[2,'?:'],[[2,'&&'],[[2,'!'],[[7],[3,'disabled']]],[[2,'||'],[[7],[3,'to']],[[7],[3,'access']]]],[1,'cell--active'],[1,'none']])
Z([3,'cell__wrap'])
Z([a,[3,'cell__content '],[[2,'?:'],[[7],[3,'disabled']],[1,'cell--disabled'],[1,'']]])
Z([3,'cell__content__header'])
Z([3,'prepend'])
Z([[7],[3,'iconType']])
Z([[7],[3,'iconColor']])
Z([[7],[3,'iconSize']])
Z(z[9])
Z([3,'cell__content__wrap'])
Z([[7],[3,'desc']])
Z([3,'content'])
Z([3,'append'])
Z([[2,'||'],[[7],[3,'access']],[[7],[3,'to']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([[7],[3,'_items']])
Z([3,'index'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'name']],[[2,'?:'],[[6],[[6],[[7],[3,'items']],[[7],[3,'index']]],[3,'desc']],[[6],[[6],[[7],[3,'items']],[[7],[3,'index']]],[3,'desc']],[1,'']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,' 选中'],[1,' 未选中']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[1,' 已禁用'],[1,'']]])
Z([3,'button'])
Z([3,'check__container'])
Z([3,'form-item'])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([3,'checkbox__icon--checked'])
Z([3,'48'])
Z([3,'check'])
Z([3,'handleIconTap'])
Z([3,'check__container__icon check__type'])
Z([[7],[3,'item']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'icon']],[1,'info']])
Z([3,'check__type--info'])
Z(z[9])
Z([3,'info-o'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'__items']])
Z([[7],[3,'index']])
Z([3,'bindtap'])
Z([[2,'+'],[1,'g-checkbox-label__item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[1,'g-checkbox-label__disabled-class'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z(z[2])
Z([[2,'+'],[[2,'+'],[1,'g-checkbox-label__box'],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,' g-checkbox-label__checked'],[1,' g-checkbox-label__unchecked']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[1,' g-checkbox-label__disabled'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'checked']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'circle'])
Z([[7],[3,'current']])
Z([[2,'==='],[[7],[3,'status']],[1,'success']])
Z([3,'#03A596'])
Z([3,'69'])
Z([3,'success-o'])
Z([[2,'==='],[[7],[3,'status']],[1,'warn']])
Z([3,'#999999'])
Z(z[4])
Z([3,'warn-o'])
Z([[2,'==='],[[7],[3,'status']],[1,'error']])
Z([3,'#f13939'])
Z(z[4])
Z(z[9])
Z([[2,'==='],[[7],[3,'status']],[1,'wait']])
Z([3,'#C02C38'])
Z(z[4])
Z([3,'wait-o'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'handleSwitchChange'])
Z([3,'使用证件照自动裁剪'])
Z([[7],[3,'_isClip']])
Z([3,'upload__container'])
Z([[6],[[7],[3,'value']],[3,'filePath']])
Z([a,[3,'upload__image__container '],[[2,'&&'],[[6],[[7],[3,'value']],[3,'filePath']],[1,'upload__image__container--uploaded']]])
Z(z[5])
Z([3,'预览图片'])
Z([3,'button'])
Z([3,'handlePreview'])
Z([3,'upload__image'])
Z([3,'widthFix'])
Z(z[5])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'collapse-pane'])
Z([3,'handleToggleCollapse'])
Z([3,'collapse-pane__header'])
Z([3,'collapse-pane__icon'])
Z([3,'#CCC'])
Z([[2,'?:'],[[7],[3,'_isCollapse']],[1,'arrow-down'],[1,'arrow-up']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([[7],[3,'slot']])
Z([[7],[3,'actionText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'form-item__wrap '],[[2,'?:'],[[7],[3,'disabled']],[1,'form-item__wrap--disabled'],[1,'']]])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[7],[3,'_status']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'required']])
Z([[2,'&&'],[[7],[3,'desc']],[[2,'>'],[[6],[[7],[3,'desc']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([[7],[3,'disabled']])
Z([[7],[3,'__id']])
Z([[7],[3,'label']])
Z([[7],[3,'maxLength']])
Z([[7],[3,'placeholder']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([[7],[3,'type']])
Z([[7],[3,'value']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showTips']])
Z([3,'handleTipsClose'])
Z([[7],[3,'_tipsShow']])
Z([3,'fixed'])
Z([3,'warn'])
Z([3,'form'])
Z([3,'content'])
Z([[7],[3,'showAgree']])
Z([[7],[3,'autoAgree']])
Z([3,'handleSubmit'])
Z([3,'handleSecondTap'])
Z([[7],[3,'buttonDirection']])
Z([[7],[3,'disabled']])
Z([[7],[3,'primaryText']])
Z([[7],[3,'secondText']])
Z(z[7])
Z([3,'agree'])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list component-class'])
Z([3,'header'])
Z([[2,'&&'],[[7],[3,'list']],[[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]]])
Z([3,'list__container'])
Z([a,[3,'height: '],[[7],[3,'_scrollViewHeight']],[3,'px']])
Z([3,'list__scrollview'])
Z([[7],[3,'_scrollTop']])
Z([3,'content'])
Z([[7],[3,'_list']])
Z([[6],[[7],[3,'item']],[3,'key']])
Z([3,'subIndex'])
Z([3,'subItem'])
Z([[6],[[7],[3,'item']],[3,'list']])
Z([[7],[3,'subIndex']])
Z([3,'handleChoose'])
Z([3,'list__block'])
Z([[7],[3,'subItem']])
Z([3,'view--hover'])
Z([3,'250'])
Z([[6],[[7],[3,'subItem']],[3,'desc']])
Z([[2,'&&'],[[7],[3,'_currentKey']],[[7],[3,'_isTouch']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'static-item'],[1,'']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'input__containerIcon'],[1,'input__container']])
Z([[7],[3,'prepend']])
Z([3,'slot'])
Z([3,'prepend'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'input__iconInfo__container'],[1,'input__icon__container']])
Z([3,'handleTapClear'])
Z([3,'input__icon input__icon--clear'])
Z([[2,'||'],[[2,'!'],[[7],[3,'clearable']]],[[2,'!'],[[7],[3,'value']]]])
Z([3,'36'])
Z([3,'close-circle'])
Z([[7],[3,'icon']])
Z([3,'handleTapIcon'])
Z([a,[3,'input__icon input__icon--'],z[16]])
Z([[2,'==='],[[7],[3,'icon']],[1,'info']])
Z([[7],[3,'iconDesc']])
Z([3,'topRight'])
Z(z[14])
Z([3,'info-o'])
Z([[7],[3,'append']])
Z(z[8])
Z([3,'append'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'static-item'],[1,'']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'input__containerIcon'],[1,'input__container']])
Z([[7],[3,'prepend']])
Z([3,'slot'])
Z([3,'prepend'])
Z([[2,'?:'],[[2,'==='],[[7],[3,'icon']],[1,'info']],[1,'input__iconInfo__container'],[1,'input__icon__container']])
Z([3,'handleTapClear'])
Z([3,'input__icon input__icon--clear'])
Z([[2,'||'],[[2,'!'],[[7],[3,'clearable']]],[[2,'!'],[[7],[3,'value']]]])
Z([3,'36'])
Z([3,'close-circle'])
Z([[7],[3,'icon']])
Z([3,'handleTapIcon'])
Z([a,[3,'input__icon input__icon--'],z[16]])
Z([[2,'==='],[[7],[3,'icon']],[1,'info']])
Z([[7],[3,'iconDesc']])
Z([3,'topRight'])
Z(z[14])
Z([3,'info-o'])
Z([[7],[3,'append']])
Z(z[8])
Z([3,'append'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleMarkerTap'])
Z([3,'handleRegionChange'])
Z([3,'g-map'])
Z([3,'map'])
Z([[6],[[7],[3,'position']],[3,'latitude']])
Z([[6],[[7],[3,'position']],[3,'longitude']])
Z([[7],[3,'_markers']])
Z([[7],[3,'scale']])
Z([[7],[3,'_showLoad']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'_visible']])
Z([3,'modal'])
Z([[7],[3,'showCancel']])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'msg'])
Z([[7],[3,'status']])
Z([[7],[3,'title']])
Z([3,'msg__btn'])
Z([[7],[3,'primaryText']])
Z([[7],[3,'secondText']])
Z([[7],[3,'footerFixed']])
Z([[7],[3,'sponsor']])
Z([[7],[3,'supportor']])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleTapItem'])
Z([3,'g-nav-box__content-item'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'g-nav-box component-class'])
Z([3,'handleTapTitle'])
Z([3,'g-nav-box__title'])
Z([[7],[3,'icon']])
Z([[7],[3,'to']])
Z(z[4])
Z([[7],[3,'footerText']])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'triggerCancel'])
Z([3,'handleChange'])
Z([3,'triggerColumnchange'])
Z([[7],[3,'customItem']])
Z([[2,'||'],[[7],[3,'disabled']],[[7],[3,'_readonly']]])
Z([[7],[3,'end']])
Z([[7],[3,'fields']])
Z([[7],[3,'mode']])
Z([[7],[3,'range']])
Z([[7],[3,'_rangeKey']])
Z([[7],[3,'start']])
Z([[7],[3,'_valueIndex']])
Z([[2,'==='],[[7],[3,'type']],[1,'formItem']])
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([[2,'&&'],[[7],[3,'desc']],[[2,'>'],[[6],[[7],[3,'desc']],[3,'length']],[1,0]]])
Z([[2,'==='],[[7],[3,'type']],[1,'dropdown']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([3,'_closeKeyboard'])
Z([3,'plate-number-keyboard-box'])
Z([3,'_preventDefault'])
Z([3,'ture'])
Z([a,[3,'pnk-main  '],[[2,'?:'],[[7],[3,'showProvince']],[1,'province'],[1,'']]])
Z([a,[3,'height:'],[[2,'?:'],[[7],[3,'showProvince']],[[2,'+'],[[2,'+'],[[7],[3,'provinceHeight']],[[7],[3,'statusBarHeight']]],[1,'rpx']],[[2,'+'],[[2,'+'],[[7],[3,'numberHieght']],[[7],[3,'statusBarHeight']]],[1,'rpx']]]])
Z([3,'pnk-content'])
Z([[7],[3,'showProvince']])
Z([[7],[3,'provinceList']])
Z([[7],[3,'index']])
Z([3,'line'])
Z([[2,'==='],[[7],[3,'index']],[1,'line5']])
Z([3,'ind'])
Z([3,'it'])
Z([[7],[3,'item']])
Z([[7],[3,'ind']])
Z([[2,'!='],[[7],[3,'index']],[1,'line5']])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[12])
Z(z[12])
Z([[2,'!'],[[7],[3,'showProvince']]])
Z([[7],[3,'letterNumberList']])
Z(z[10])
Z(z[11])
Z([[2,'==='],[[7],[3,'index']],[1,'line4']])
Z(z[28])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onTap'])
Z([3,'container'])
Z([[2,'&&'],[[7],[3,'visible']],[[7],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'preview-item--'],[[7],[3,'type']]])
Z([[7],[3,'label']])
Z([[7],[3,'iconType']])
Z([[7],[3,'iconColor']])
Z([3,'48'])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([[7],[3,'_items']])
Z([[7],[3,'index']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'name']],[[2,'?:'],[[6],[[6],[[7],[3,'items']],[[7],[3,'index']]],[3,'desc']],[[6],[[6],[[7],[3,'items']],[[7],[3,'index']]],[3,'desc']],[1,'']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,' 选中'],[1,' 未选中']]],[[2,'?:'],[[6],[[7],[3,'item']],[3,'disabled']],[1,' 已禁用'],[1,'']]])
Z([3,'button'])
Z([3,'check__container'])
Z([3,'form-item'])
Z([[6],[[7],[3,'item']],[3,'disabled']])
Z([3,'radio__icon--checked'])
Z([3,'48'])
Z([3,'circle'])
Z([3,'handleIconTap'])
Z([3,'check__container__icon check__type'])
Z([[7],[3,'item']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'icon']],[1,'info']])
Z([3,'check__type--info'])
Z(z[9])
Z([3,'info-o'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([3,'handleClose'])
Z([3,'handleColumnChange'])
Z([[7],[3,'_range']])
Z([[7],[3,'value']])
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleColumnChange'])
Z([3,'handleChange'])
Z([3,'multiSelector'])
Z([[7],[3,'range']])
Z([3,'name'])
Z([[7],[3,'valueIndex']])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search'])
Z([a,[3,'search__container '],[[2,'?:'],[[7],[3,'_focus']],[1,'search--focus'],[1,'']],[3,' ']])
Z([3,'search__icon'])
Z([3,'32'])
Z(z[0])
Z([[2,'&&'],[[7],[3,'_isSearch']],[[7],[3,'value']]])
Z([3,'handleClear'])
Z([3,'clear__icon'])
Z([3,'36'])
Z([3,'close-circle'])
Z([[7],[3,'_isSearch']])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClose'])
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'form-item'])
Z([[7],[3,'disabled']])
Z([[7],[3,'required']])
Z([[7],[3,'desc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'g-table'])
Z([[2,'!'],[[7],[3,'scroll']]])
Z([[7],[3,'columns']])
Z(z[2])
Z([[7],[3,'data']])
Z(z[2])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tabs'])
Z([3,'tabs__header tab-header-class'])
Z([3,'tab-header'])
Z([a,[3,'position: '],[[7],[3,'position']]])
Z([[7],[3,'scroll']])
Z([[9],[[8],'_tabs',[[7],[3,'_tabs']]],[[8],'activeKey',[[7],[3,'activeKey']]]])
Z([3,'tabsHeader'])
Z(z[5])
Z(z[6])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([3,'action'])
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'item item--'],[[7],[3,'status']]])
Z([3,'item__head'])
Z([[2,'||'],[[2,'==='],[[7],[3,'status']],[1,'normal']],[[2,'==='],[[7],[3,'status']],[1,'pending']]])
Z([3,'48'])
Z(z[0][2])
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
function gz$gwx_60(){
if( __WXML_GLOBAL__.ops_cached.$gwx_60)return __WXML_GLOBAL__.ops_cached.$gwx_60
__WXML_GLOBAL__.ops_cached.$gwx_60=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'_isShow']])
Z([3,'handleTap'])
Z([a,[3,'tips '],[[2,'?:'],[[7],[3,'position']],[[2,'+'],[1,'tips--'],[[7],[3,'position']]],[1,'']],[3,' tips--'],[[7],[3,'status']],[3,'  '],[[2,'?:'],[[7],[3,'loop']],[1,'tips--loop'],[1,'']],[3,' ']])
Z([[2,'?:'],[[2,'||'],[[7],[3,'to']],[[7],[3,'access']]],[[2,'+'],[[2,'+'],[1,'tips--'],[[7],[3,'status']]],[1,'--hover']],[1,'']])
Z([3,'250'])
Z([[7],[3,'tipsStyle']])
Z([a,[3,'tips__container  '],[[2,'?:'],[[2,'||'],[[7],[3,'to']],[[7],[3,'access']]],[1,'dgdui_tips__access'],[1,'']]])
Z([[7],[3,'closeable']])
Z([3,'handleClose'])
Z([3,'tips__close tips__icon'])
Z([3,'key'])
Z([3,'23'])
Z([3,'close'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'closeable']]],[[2,'||'],[[7],[3,'to']],[[7],[3,'access']]]])
Z([3,'tips__icon'])
Z(z[10])
Z([3,'26'])
Z([3,'ft'])
})(__WXML_GLOBAL__.ops_cached.$gwx_60);return __WXML_GLOBAL__.ops_cached.$gwx_60
}
function gz$gwx_61(){
if( __WXML_GLOBAL__.ops_cached.$gwx_61)return __WXML_GLOBAL__.ops_cached.$gwx_61
__WXML_GLOBAL__.ops_cached.$gwx_61=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'title'])
Z([[2,'||'],[[7],[3,'total']],[[7],[3,'status']]])
Z([[7],[3,'current']])
Z([[7],[3,'status']])
Z([[7],[3,'total']])
})(__WXML_GLOBAL__.ops_cached.$gwx_61);return __WXML_GLOBAL__.ops_cached.$gwx_61
}
function gz$gwx_62(){
if( __WXML_GLOBAL__.ops_cached.$gwx_62)return __WXML_GLOBAL__.ops_cached.$gwx_62
__WXML_GLOBAL__.ops_cached.$gwx_62=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'disabled']])
Z([[7],[3,'label']])
Z([[7],[3,'required']])
Z([[7],[3,'_status']])
Z([[7],[3,'_statusMessage']])
Z([3,'g-upload__container'])
Z([[7],[3,'value']])
Z([3,'filePath'])
Z([3,'handleClickImage'])
Z([[7],[3,'item']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'status']],[[2,'!=='],[[6],[[7],[3,'item']],[3,'status']],[1,'done']]])
Z([3,'g-upload__file__mask'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'uploading']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'error']])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,'maxSize']])
Z([[2,'||'],[[2,'<='],[[7],[3,'maxNumber']],[1,0]],[[2,'<'],[[6],[[7],[3,'value']],[3,'length']],[[7],[3,'maxNumber']]]])
Z([3,'chooseImage'])
Z([3,'g-upload__input-box'])
Z([3,'view--hover'])
Z([3,'50'])
Z([3,'plus'])
})(__WXML_GLOBAL__.ops_cached.$gwx_62);return __WXML_GLOBAL__.ops_cached.$gwx_62
}
function gz$gwx_63(){
if( __WXML_GLOBAL__.ops_cached.$gwx_63)return __WXML_GLOBAL__.ops_cached.$gwx_63
__WXML_GLOBAL__.ops_cached.$gwx_63=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'wrap component-class  '],[[2,'?:'],[[7],[3,'disabled']],[1,'wrap--disabled'],[1,'']]])
Z([[7],[3,'title']])
Z([3,'wrap__title__container title-class'])
Z([[7],[3,'xrequired']])
Z([3,'action'])
Z([3,'wrap--content'])
Z([3,'content'])
Z([[7],[3,'disabled']])
})(__WXML_GLOBAL__.ops_cached.$gwx_63);return __WXML_GLOBAL__.ops_cached.$gwx_63
}
function gz$gwx_64(){
if( __WXML_GLOBAL__.ops_cached.$gwx_64)return __WXML_GLOBAL__.ops_cached.$gwx_64
__WXML_GLOBAL__.ops_cached.$gwx_64=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tips__container'])
Z([3,'tips__icon'])
Z([3,'#FF6969'])
Z([3,'36'])
Z([[7],[3,'status']])
Z([[2,'||'],[[7],[3,'to']],[[7],[3,'access']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_64);return __WXML_GLOBAL__.ops_cached.$gwx_64
}
function gz$gwx_65(){
if( __WXML_GLOBAL__.ops_cached.$gwx_65)return __WXML_GLOBAL__.ops_cached.$gwx_65
__WXML_GLOBAL__.ops_cached.$gwx_65=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'imgSrc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_65);return __WXML_GLOBAL__.ops_cached.$gwx_65
}
function gz$gwx_66(){
if( __WXML_GLOBAL__.ops_cached.$gwx_66)return __WXML_GLOBAL__.ops_cached.$gwx_66
__WXML_GLOBAL__.ops_cached.$gwx_66=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_66);return __WXML_GLOBAL__.ops_cached.$gwx_66
}
function gz$gwx_67(){
if( __WXML_GLOBAL__.ops_cached.$gwx_67)return __WXML_GLOBAL__.ops_cached.$gwx_67
__WXML_GLOBAL__.ops_cached.$gwx_67=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleTouchEnd'])
Z([3,'handleTouchMove'])
Z([3,'handleTouchStart'])
Z([a,[3,'content '],[[2,'?:'],[[7],[3,'animate']],[1,'animate'],[1,'']]])
Z([a,[3,'transform: translateX('],[[2,'*'],[[7],[3,'translateX']],[1,2]],[3,'rpx)']])
})(__WXML_GLOBAL__.ops_cached.$gwx_67);return __WXML_GLOBAL__.ops_cached.$gwx_67
}
function gz$gwx_68(){
if( __WXML_GLOBAL__.ops_cached.$gwx_68)return __WXML_GLOBAL__.ops_cached.$gwx_68
__WXML_GLOBAL__.ops_cached.$gwx_68=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'weui-navigation-bar__inner '],[[2,'?:'],[[7],[3,'ios']],[1,'ios'],[1,'android']]])
Z([a,[3,'padding-top: '],[[7],[3,'statusBarHeight']],[3,'px; color: '],[[7],[3,'color']],[3,';background: '],[[7],[3,'background']],[3,';'],[[7],[3,'displayStyle']],[3,';'],[[7],[3,'innerPaddingRight']],[3,';'],[[7],[3,'innerWidth']],[3,';']])
Z([3,'weui-navigation-bar__left'])
Z([[7],[3,'leftWidth']])
Z([[7],[3,'back']])
Z([3,'left'])
Z([3,'weui-navigation-bar__center'])
Z([[7],[3,'loading']])
Z([[7],[3,'title']])
Z([3,'center'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_68);return __WXML_GLOBAL__.ops_cached.$gwx_68
}
function gz$gwx_69(){
if( __WXML_GLOBAL__.ops_cached.$gwx_69)return __WXML_GLOBAL__.ops_cached.$gwx_69
__WXML_GLOBAL__.ops_cached.$gwx_69=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_69);return __WXML_GLOBAL__.ops_cached.$gwx_69
}
function gz$gwx_70(){
if( __WXML_GLOBAL__.ops_cached.$gwx_70)return __WXML_GLOBAL__.ops_cached.$gwx_70
__WXML_GLOBAL__.ops_cached.$gwx_70=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onCreate'])
Z([3,'onCreateFail'])
Z([3,'onCreateSuccess'])
Z([3,'poster'])
})(__WXML_GLOBAL__.ops_cached.$gwx_70);return __WXML_GLOBAL__.ops_cached.$gwx_70
}
function gz$gwx_71(){
if( __WXML_GLOBAL__.ops_cached.$gwx_71)return __WXML_GLOBAL__.ops_cached.$gwx_71
__WXML_GLOBAL__.ops_cached.$gwx_71=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_71);return __WXML_GLOBAL__.ops_cached.$gwx_71
}
function gz$gwx_72(){
if( __WXML_GLOBAL__.ops_cached.$gwx_72)return __WXML_GLOBAL__.ops_cached.$gwx_72
__WXML_GLOBAL__.ops_cached.$gwx_72=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_72);return __WXML_GLOBAL__.ops_cached.$gwx_72
}
function gz$gwx_73(){
if( __WXML_GLOBAL__.ops_cached.$gwx_73)return __WXML_GLOBAL__.ops_cached.$gwx_73
__WXML_GLOBAL__.ops_cached.$gwx_73=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleChange'])
Z([3,'handleConfirm'])
Z([3,'请输入姓名'])
Z([[7],[3,'searchValue']])
Z([3,'bindChange'])
Z([3,'swiper-box'])
Z([[7],[3,'currentTab']])
Z([3,'300'])
Z([a,[3,'height:'],[[2,'-'],[[7],[3,'winHeight']],[1,31]],[3,'px']])
Z([[6],[[7],[3,'getarray']],[3,'applies']])
Z([[6],[[6],[[7],[3,'getarray']],[3,'applies']],[3,'length']])
Z([[2,'!'],[[6],[[6],[[7],[3,'getarray']],[3,'applies']],[3,'length']]])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[10])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_73);return __WXML_GLOBAL__.ops_cached.$gwx_73
}
function gz$gwx_74(){
if( __WXML_GLOBAL__.ops_cached.$gwx_74)return __WXML_GLOBAL__.ops_cached.$gwx_74
__WXML_GLOBAL__.ops_cached.$gwx_74=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showImg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_74);return __WXML_GLOBAL__.ops_cached.$gwx_74
}
function gz$gwx_75(){
if( __WXML_GLOBAL__.ops_cached.$gwx_75)return __WXML_GLOBAL__.ops_cached.$gwx_75
__WXML_GLOBAL__.ops_cached.$gwx_75=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'appId'])
Z([3,'onTapAccess'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'desc']])
Z([[6],[[7],[3,'item']],[3,'label']])
})(__WXML_GLOBAL__.ops_cached.$gwx_75);return __WXML_GLOBAL__.ops_cached.$gwx_75
}
function gz$gwx_76(){
if( __WXML_GLOBAL__.ops_cached.$gwx_76)return __WXML_GLOBAL__.ops_cached.$gwx_76
__WXML_GLOBAL__.ops_cached.$gwx_76=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlePrimaryTap'])
Z([3,'我要登记'])
})(__WXML_GLOBAL__.ops_cached.$gwx_76);return __WXML_GLOBAL__.ops_cached.$gwx_76
}
function gz$gwx_77(){
if( __WXML_GLOBAL__.ops_cached.$gwx_77)return __WXML_GLOBAL__.ops_cached.$gwx_77
__WXML_GLOBAL__.ops_cached.$gwx_77=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleSubmit'])
Z([[7],[3,'formData']])
Z([3,'提交'])
Z([[7],[3,'rules']])
Z([[7],[3,'validateType']])
Z([3,'content'])
Z([3,'医疗物资'])
Z([[6],[[7],[3,'formData']],[3,'listItems']])
Z([[7],[3,'index']])
Z([3,'material-item'])
Z([3,'handleFormChange'])
Z([a,[3,'listItems['],z[8],[3,'].name']])
Z([3,'捐赠物品'])
Z([3,'请选择捐赠物品'])
Z([[7],[3,'materialRange']])
Z([[6],[[6],[[6],[[7],[3,'formData']],[3,'listItems']],[[7],[3,'index']]],[3,'name']])
Z(z[10])
Z([a,z[11][1],z[8],[3,'].number']])
Z([3,'捐赠数量'])
Z([3,'请填写捐赠数量'])
Z([3,'number'])
Z([[6],[[6],[[6],[[7],[3,'formData']],[3,'listItems']],[[7],[3,'index']]],[3,'number']])
Z([3,'捐赠人信息'])
Z(z[10])
Z([3,'company'])
Z([3,'捐赠单位'])
Z([3,'请输入您的所属单位'])
Z([[6],[[7],[3,'formData']],[3,'company']])
Z(z[10])
Z([3,'user_name'])
Z([3,'联系人'])
Z([3,'填写姓名'])
Z([[6],[[7],[3,'formData']],[3,'user_name']])
Z(z[10])
Z([3,'phone'])
Z([3,'联系电话'])
Z([3,'填写手机号'])
Z([3,'mobile'])
Z([[6],[[7],[3,'formData']],[3,'phone']])
Z(z[10])
Z([3,'desc'])
Z([3,'捐赠说明'])
Z([3,'如有其他物资请详细说明'])
Z([[7],[3,'isNeedDesc']])
Z([[6],[[7],[3,'formData']],[3,'desc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_77);return __WXML_GLOBAL__.ops_cached.$gwx_77
}
function gz$gwx_78(){
if( __WXML_GLOBAL__.ops_cached.$gwx_78)return __WXML_GLOBAL__.ops_cached.$gwx_78
__WXML_GLOBAL__.ops_cached.$gwx_78=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlePrimaryTap'])
Z([3,'查看捐赠渠道'])
})(__WXML_GLOBAL__.ops_cached.$gwx_78);return __WXML_GLOBAL__.ops_cached.$gwx_78
}
function gz$gwx_79(){
if( __WXML_GLOBAL__.ops_cached.$gwx_79)return __WXML_GLOBAL__.ops_cached.$gwx_79
__WXML_GLOBAL__.ops_cached.$gwx_79=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handlePrimaryTap'])
Z([3,'handleSecondTap'])
Z([[7],[3,'msgDesc']])
Z([3,'返回首页'])
Z([3,'继续登记'])
Z([[7],[3,'msgStatus']])
Z([[7],[3,'msgTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_79);return __WXML_GLOBAL__.ops_cached.$gwx_79
}
function gz$gwx_80(){
if( __WXML_GLOBAL__.ops_cached.$gwx_80)return __WXML_GLOBAL__.ops_cached.$gwx_80
__WXML_GLOBAL__.ops_cached.$gwx_80=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'images']])
Z([a,[3,'browse '],[[2,'?:'],[[7],[3,'active']],[1,'active'],[1,'']]])
Z([[2,'!'],[[7],[3,'active']]])
Z([3,'prevIcon'])
Z([3,'arrow-position arrow-left'])
Z([[7],[3,'active']])
Z([3,'#ffffff'])
Z([3,'40'])
Z([3,'arrow-left'])
Z([3,'nextIcon'])
Z([3,'arrow-position arrow-right'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'arrow-right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_80);return __WXML_GLOBAL__.ops_cached.$gwx_80
}
function gz$gwx_81(){
if( __WXML_GLOBAL__.ops_cached.$gwx_81)return __WXML_GLOBAL__.ops_cached.$gwx_81
__WXML_GLOBAL__.ops_cached.$gwx_81=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'chapterLists']])
Z([3,'item'])
Z([3,'sectionindex'])
Z([3,'section'])
Z([[6],[[7],[3,'item']],[3,'sections']])
Z(z[3])
Z([3,'onTapAccess'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'section']],[3,'height']])
Z([[7],[3,'sectionindex']])
})(__WXML_GLOBAL__.ops_cached.$gwx_81);return __WXML_GLOBAL__.ops_cached.$gwx_81
}
function gz$gwx_82(){
if( __WXML_GLOBAL__.ops_cached.$gwx_82)return __WXML_GLOBAL__.ops_cached.$gwx_82
__WXML_GLOBAL__.ops_cached.$gwx_82=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_82);return __WXML_GLOBAL__.ops_cached.$gwx_82
}
function gz$gwx_83(){
if( __WXML_GLOBAL__.ops_cached.$gwx_83)return __WXML_GLOBAL__.ops_cached.$gwx_83
__WXML_GLOBAL__.ops_cached.$gwx_83=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'errorpage']]])
Z([3,'handleChange'])
Z([3,'handleConfirm'])
Z([3,'请输入姓名'])
Z([[7],[3,'searchValue']])
Z([[7],[3,'activeKey']])
Z([3,'true'])
Z([3,'tabChange'])
Z([3,'activeKey'])
Z([3,'relative'])
Z([3,'0'])
Z([a,[3,'待处理('],[[2,'?:'],[[6],[[7],[3,'tab']],[1,0]],[[6],[[7],[3,'tab']],[1,0]],[1,0]],[3,')']])
Z([[9],[[9],[[9],[[8],'name',[1,'进行中']],[[8],'index',[1,'1']]],[[8],'todoType',[[7],[3,'todoType']]]],[[8],'itemList',[[7],[3,'applies']]]])
Z([3,'tabNew'])
Z([3,'1'])
Z([a,[3,'已关联('],[[2,'?:'],[[6],[[7],[3,'tab']],[1,1]],[[6],[[7],[3,'tab']],[1,1]],[1,0]],z[11][3]])
Z(z[12])
Z(z[13])
Z([3,'2'])
Z([a,[3,'不关联('],[[2,'?:'],[[6],[[7],[3,'tab']],[1,2]],[[6],[[7],[3,'tab']],[1,2]],[1,0]],z[11][3]])
Z(z[12])
Z(z[13])
Z(z[13])
Z([[7],[3,'itemList']])
Z([[6],[[7],[3,'itemList']],[3,'length']])
Z([3,'bindChange'])
Z([[7],[3,'item']])
Z([3,'content'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'applyStatus']],[1,0]])
Z([3,'append'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'applyStatus']],[1,0]])
Z([[2,'!'],[[6],[[7],[3,'itemList']],[3,'length']]])
Z([[7],[3,'errorpage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_83);return __WXML_GLOBAL__.ops_cached.$gwx_83
}
function gz$gwx_84(){
if( __WXML_GLOBAL__.ops_cached.$gwx_84)return __WXML_GLOBAL__.ops_cached.$gwx_84
__WXML_GLOBAL__.ops_cached.$gwx_84=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[8],'name',[1,'进行中']],[[8],'index',[1,'1']]],[[8],'todoType',[[7],[3,'todoType']]]],[[8],'itemList',[[7],[3,'itemList']]]])
Z([3,'tabNew'])
Z(z[1])
Z([[7],[3,'itemList']])
Z([3,'companyId'])
Z([[6],[[7],[3,'itemList']],[3,'length']])
Z([3,'handleItem'])
Z([[7],[3,'item']])
Z([3,'append'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'applyStatus']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'applyStatus']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'applyStatus']],[1,2]])
Z([[2,'!'],[[6],[[7],[3,'itemList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_84);return __WXML_GLOBAL__.ops_cached.$gwx_84
}
function gz$gwx_85(){
if( __WXML_GLOBAL__.ops_cached.$gwx_85)return __WXML_GLOBAL__.ops_cached.$gwx_85
__WXML_GLOBAL__.ops_cached.$gwx_85=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list'])
Z([[7],[3,'list']])
Z([[7],[3,'index']])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'extra-info'])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z([[2,'==='],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_85);return __WXML_GLOBAL__.ops_cached.$gwx_85
}
function gz$gwx_86(){
if( __WXML_GLOBAL__.ops_cached.$gwx_86)return __WXML_GLOBAL__.ops_cached.$gwx_86
__WXML_GLOBAL__.ops_cached.$gwx_86=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_86);return __WXML_GLOBAL__.ops_cached.$gwx_86
}
function gz$gwx_87(){
if( __WXML_GLOBAL__.ops_cached.$gwx_87)return __WXML_GLOBAL__.ops_cached.$gwx_87
__WXML_GLOBAL__.ops_cached.$gwx_87=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isAuth']]])
Z([[6],[[7],[3,'userInfo']],[3,'isAuth']])
Z([3,'mine__list'])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]],[[6],[[7],[3,'language']],[3,'isvisible']]])
Z([3,'true'])
Z([[2,'?:'],[[7],[3,'isRealName']],[1,'/packages/health-code/pages/realname-info/index'],[1,'/packages/health-code/pages/realname-submit/index']])
Z([3,'row'])
Z([3,'content'])
Z([[2,'!'],[[7],[3,'isRealName']]])
Z([[7],[3,'isRealName']])
Z([[2,'&&'],[[6],[[7],[3,'userInfo']],[3,'isVolunteer']],[[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]]])
Z(z[4])
Z([[6],[[7],[3,'language']],[3,'myToDo']])
Z([3,'/pages/mine/todo/list/list?todoType\x3daffair'])
Z([[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]])
Z(z[4])
Z([[6],[[7],[3,'language']],[3,'myHealthSelfReport']])
Z([3,'/pages/mine/todo/list/list?todoType\x3dcheck'])
Z([[6],[[7],[3,'userInfo']],[3,'isLeader']])
Z(z[4])
Z([[6],[[7],[3,'language']],[3,'myNews']])
Z([a,[3,'/pages/mine/empty/index?title\x3d'],z[20]])
Z(z[18])
Z(z[4])
Z(z[12])
Z([a,z[21][1],z[12]])
Z([[2,'&&'],[[2,'&&'],[[2,'!=='],[[7],[3,'cityName']],[1,'深圳市']],[[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]]],[[6],[[7],[3,'language']],[3,'isvisible']]])
Z(z[4])
Z([[6],[[7],[3,'language']],[3,'myClue']])
Z([3,'/pages/mine/todo/list/list?todoType\x3dreport'])
Z([1,false])
Z(z[4])
Z([[6],[[7],[3,'language']],[3,'mydonation']])
Z([3,'/pages/mine/donation/index'])
Z([[2,'&&'],[[2,'&&'],[[2,'!=='],[[7],[3,'cityName']],[1,'深圳市']],[[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]]],[[6],[[7],[3,'language']],[3,'isvisible']]])
Z(z[4])
Z([3,'onTapBook'])
Z([[6],[[7],[3,'language']],[3,'myBookings']])
Z([[6],[[7],[3,'language']],[3,'isvisible']])
Z(z[4])
Z([3,'onTapEnterprise'])
Z([[6],[[7],[3,'language']],[3,'correlationInformation']])
Z([[2,'&&'],[[7],[3,'role']],[[6],[[7],[3,'language']],[3,'isvisible']]])
Z(z[4])
Z([3,'onJump'])
Z([[6],[[7],[3,'language']],[3,'myWorkPlace']])
Z(z[30])
Z(z[2])
Z([[6],[[7],[3,'language']],[3,'latestAnnouncement']])
Z([[6],[[7],[3,'language']],[3,'volunteer']])
Z(z[4])
Z([3,'onTapFeedback'])
Z([[6],[[7],[3,'language']],[3,'feedback']])
Z([[2,'!'],[[6],[[7],[3,'language']],[3,'isvisible']]])
Z([[6],[[7],[3,'language']],[3,'guangzhouDisease']])
Z([[6],[[7],[3,'language']],[3,'supportor']])
})(__WXML_GLOBAL__.ops_cached.$gwx_87);return __WXML_GLOBAL__.ops_cached.$gwx_87
}
function gz$gwx_88(){
if( __WXML_GLOBAL__.ops_cached.$gwx_88)return __WXML_GLOBAL__.ops_cached.$gwx_88
__WXML_GLOBAL__.ops_cached.$gwx_88=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isAuth']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_88);return __WXML_GLOBAL__.ops_cached.$gwx_88
}
function gz$gwx_89(){
if( __WXML_GLOBAL__.ops_cached.$gwx_89)return __WXML_GLOBAL__.ops_cached.$gwx_89
__WXML_GLOBAL__.ops_cached.$gwx_89=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'animated']])
Z([1,true])
Z([[7],[3,'background']])
Z([[7],[3,'color']])
Z([3,'ext-class'])
Z([[7],[3,'loading']])
Z([[7],[3,'show']])
Z([[7],[3,'title']])
Z([3,'index'])
Z([3,'value'])
Z([[7],[3,'languagesText']])
Z(z[8])
Z([3,'setLanguageTab'])
Z([[7],[3,'index']])
Z([[7],[3,'value']])
Z([[2,'=='],[[7],[3,'langIndex']],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_89);return __WXML_GLOBAL__.ops_cached.$gwx_89
}
function gz$gwx_90(){
if( __WXML_GLOBAL__.ops_cached.$gwx_90)return __WXML_GLOBAL__.ops_cached.$gwx_90
__WXML_GLOBAL__.ops_cached.$gwx_90=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[9],[[9],[[9],[[8],'message',[[7],[3,'message']]],[[8],'keyMap',[[7],[3,'keyMap']]]],[[8],'keyMapOther',[[7],[3,'keyMapOther']]]],[[8],'reporterKeyMap',[[7],[3,'reporterKeyMap']]]],[[8],'reportedKeyMap',[[7],[3,'reportedKeyMap']]]],[[8],'reportContentKeyMap',[[7],[3,'reportContentKeyMap']]]],[[8],'language',[[7],[3,'language']]]])
Z([3,'tab-template-one'])
Z([[9],[[9],[[9],[[8],'scheduleList',[[6],[[7],[3,'message']],[3,'itemList']]],[[8],'message',[[7],[3,'message']]]],[[8],'keyMap',[[7],[3,'keyMap']]]],[[8],'query',[[7],[3,'query']]]])
Z([3,'tab-template-two'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'userInfo']],[3,'isVolunteer']],[[2,'||'],[[2,'==='],[[6],[[7],[3,'message']],[3,'status']],[1,0]],[[2,'==='],[[6],[[7],[3,'message']],[3,'status']],[1,1]]]],[[2,'==='],[[6],[[7],[3,'query']],[3,'todoType']],[1,'affair']]])
Z([3,'onTapDone'])
Z([3,'onTapReply'])
Z([[7],[3,'formData']])
Z([[6],[[7],[3,'language']],[3,'addReply']])
Z([[7],[3,'rules']])
Z([[6],[[7],[3,'language']],[3,'finish']])
Z([3,'content'])
Z([[6],[[7],[3,'language']],[3,'deal']])
Z([3,'onChangeForm'])
Z(z[11])
Z([[6],[[7],[3,'language']],[3,'replyCon']])
Z([[6],[[7],[3,'formData']],[3,'content']])
Z(z[1])
Z([[2,'!='],[[6],[[7],[3,'message']],[3,'clueType']],[1,1]])
Z([[6],[[7],[3,'language']],[3,'baseMsg']])
Z([3,'right'])
Z([[6],[[7],[3,'language']],[3,'keyMap']])
Z([3,'item.key'])
Z([[6],[[7],[3,'message']],[[6],[[7],[3,'item']],[3,'key']]])
Z([3,'true'])
Z([[6],[[7],[3,'item']],[3,'label']])
Z(z[20])
Z(z[18])
Z([3,'200'])
Z([[6],[[7],[3,'language']],[3,'otherMsg']])
Z(z[20])
Z([[6],[[7],[3,'language']],[3,'keyMapOther']])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[20])
Z([[6],[[7],[3,'message']],[3,'avatarKey']])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'clueType']],[1,1]])
Z([[6],[[7],[3,'language']],[3,'reflectPerson']])
Z(z[20])
Z([[6],[[7],[3,'language']],[3,'reporterKeyMap']])
Z(z[22])
Z(z[23])
Z(z[25])
Z(z[20])
Z(z[38])
Z([[6],[[7],[3,'language']],[3,'involvedPerson']])
Z(z[20])
Z([[6],[[7],[3,'language']],[3,'reportedKeyMap']])
Z(z[22])
Z(z[23])
Z(z[25])
Z(z[20])
Z(z[38])
Z([[6],[[7],[3,'language']],[3,'reflectCon']])
Z(z[20])
Z([[6],[[7],[3,'language']],[3,'reportContentKeyMap']])
Z(z[22])
Z(z[23])
Z(z[25])
Z(z[20])
Z(z[3])
})(__WXML_GLOBAL__.ops_cached.$gwx_90);return __WXML_GLOBAL__.ops_cached.$gwx_90
}
function gz$gwx_91(){
if( __WXML_GLOBAL__.ops_cached.$gwx_91)return __WXML_GLOBAL__.ops_cached.$gwx_91
__WXML_GLOBAL__.ops_cached.$gwx_91=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[9],[[8],'name',[1,'进行中']],[[8],'index',[1,'1']]],[[8],'todoType',[[7],[3,'todoType']]]],[[8],'itemList',[[2,'?:'],[[2,'==='],[[7],[3,'todoType']],[1,'affair']],[[7],[3,'doingAffairList']],[[2,'?:'],[[2,'==='],[[7],[3,'todoType']],[1,'check']],[[7],[3,'doingCheckList']],[[7],[3,'doingReportList']]]]]],[[8],'language',[[7],[3,'language']]]])
Z([3,'tabNew'])
Z(z[1])
Z([[7],[3,'itemList']])
Z([3,'item.id'])
Z([[6],[[7],[3,'itemList']],[3,'length']])
Z([3,'handleItem'])
Z([[7],[3,'item']])
Z([3,'content'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'clueType']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'clueType']],[1,2]])
Z([[2,'!'],[[6],[[7],[3,'itemList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_91);return __WXML_GLOBAL__.ops_cached.$gwx_91
}
function gz$gwx_92(){
if( __WXML_GLOBAL__.ops_cached.$gwx_92)return __WXML_GLOBAL__.ops_cached.$gwx_92
__WXML_GLOBAL__.ops_cached.$gwx_92=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_92);return __WXML_GLOBAL__.ops_cached.$gwx_92
}
function gz$gwx_93(){
if( __WXML_GLOBAL__.ops_cached.$gwx_93)return __WXML_GLOBAL__.ops_cached.$gwx_93
__WXML_GLOBAL__.ops_cached.$gwx_93=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'animated']])
Z([1,true])
Z([[7],[3,'background']])
Z([[7],[3,'color']])
Z([[7],[3,'loading']])
Z([[7],[3,'show']])
Z([[6],[[7],[3,'language']],[3,'suiKang']])
Z([[7],[3,'visible']])
Z([[6],[[7],[3,'language']],[3,'current']])
Z([[6],[[7],[3,'language']],[3,'shangbaoImg']])
Z([3,'onTapAccess'])
Z([3,'/pages/report/index/index?type\x3d1'])
Z([[6],[[7],[3,'language']],[3,'myHealthInfoDesc']])
Z([[6],[[7],[3,'language']],[3,'myHealthInfo']])
Z(z[10])
Z([3,'/pages/report/index/index?type\x3d2'])
Z([[6],[[7],[3,'language']],[3,'theHealthDesc']])
Z([[6],[[7],[3,'language']],[3,'theHealth']])
Z([[6],[[7],[3,'language']],[3,'guangzhouDisease']])
Z([[6],[[7],[3,'language']],[3,'supportor']])
})(__WXML_GLOBAL__.ops_cached.$gwx_93);return __WXML_GLOBAL__.ops_cached.$gwx_93
}
function gz$gwx_94(){
if( __WXML_GLOBAL__.ops_cached.$gwx_94)return __WXML_GLOBAL__.ops_cached.$gwx_94
__WXML_GLOBAL__.ops_cached.$gwx_94=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'language']])
Z([3,'handleSelfSubmit'])
Z([[2,'!'],[[7],[3,'agree']]])
Z([[7],[3,'selfForm']])
Z([[6],[[7],[3,'language']],[3,'submit']])
Z([[7],[3,'selfFormRules']])
Z([[7],[3,'validateType']])
Z([[6],[[7],[3,'language']],[3,'infoBasic']])
Z([3,'handleFormChange'])
Z([3,'selfForm'])
Z([3,'username'])
Z([[6],[[7],[3,'language']],[3,'personName']])
Z([[6],[[7],[3,'language']],[3,'enterName']])
Z([[6],[[7],[3,'selfForm']],[3,'username']])
Z(z[8])
Z(z[9])
Z([3,'phone'])
Z([[6],[[7],[3,'language']],[3,'phone']])
Z([[6],[[7],[3,'language']],[3,'enterPhone']])
Z([3,'number'])
Z([[6],[[7],[3,'selfForm']],[3,'phone']])
Z([[6],[[7],[3,'language']],[3,'select']])
Z(z[8])
Z(z[9])
Z([3,'identityType'])
Z([[6],[[7],[3,'language']],[3,'idType']])
Z([[6],[[7],[3,'language']],[3,'selectTypeId']])
Z([[6],[[7],[3,'language']],[3,'cardTypeRange']])
Z([[6],[[7],[3,'selfForm']],[3,'identityType']])
Z([3,'handleIdentityChange'])
Z(z[9])
Z([3,'identity'])
Z([[6],[[7],[3,'language']],[3,'idNumber']])
Z([[6],[[7],[3,'language']],[3,'enterId']])
Z([[7],[3,'identityInputType']])
Z([[6],[[7],[3,'selfForm']],[3,'identity']])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'gender'])
Z([[6],[[7],[3,'language']],[3,'sex']])
Z([[6],[[7],[3,'language']],[3,'selectGenger']])
Z([[6],[[7],[3,'language']],[3,'sexRange']])
Z([[6],[[7],[3,'selfForm']],[3,'gender']])
Z(z[21])
Z(z[8])
Z(z[9])
Z([[7],[3,'endToday']])
Z([3,'birthday'])
Z([[6],[[7],[3,'language']],[3,'birthData']])
Z([3,'date'])
Z([[6],[[7],[3,'language']],[3,'birthDate']])
Z([[7],[3,'startDay']])
Z([[6],[[7],[3,'selfForm']],[3,'birthday']])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'isChinese'])
Z([[6],[[7],[3,'language']],[3,'nationality']])
Z([3,'请选择国籍/地区'])
Z([[6],[[7],[3,'language']],[3,'nationRange']])
Z([[6],[[7],[3,'selfForm']],[3,'isChinese']])
Z([[2,'=='],[[6],[[7],[3,'selfForm']],[3,'isChinese']],[1,1]])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'domicilePlace'])
Z([[6],[[7],[3,'language']],[3,'placeOfDomicile']])
Z([[6],[[7],[3,'language']],[3,'selectPlaceOfDomicile']])
Z([[6],[[7],[3,'language']],[3,'domicilePlaceRange']])
Z([[6],[[7],[3,'selfForm']],[3,'domicilePlace']])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'selfForm']],[3,'isChinese']],[1,1]],[[2,'=='],[[6],[[7],[3,'selfForm']],[3,'isChinese']],[1,2]]])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'nativePlace'])
Z([[6],[[7],[3,'language']],[3,'nativePlace']])
Z([[6],[[7],[3,'language']],[3,'selectNativePlace']])
Z([[7],[3,'nativePlaceRange']])
Z([[6],[[7],[3,'selfForm']],[3,'nativePlace']])
Z(z[21])
Z([3,'handleOpenRegion'])
Z(z[9])
Z([3,'street'])
Z([[6],[[7],[3,'language']],[3,'address']])
Z([[6],[[7],[3,'language']],[3,'selectAddress']])
Z([[6],[[7],[3,'selfForm']],[3,'street']])
Z([3,'bindSelectData'])
Z(z[8])
Z(z[9])
Z([3,'addr'])
Z([[6],[[7],[3,'language']],[3,'addressDatile']])
Z([[6],[[7],[3,'language']],[3,'selectAddressDatile']])
Z(z[21])
Z([[6],[[7],[3,'selfForm']],[3,'addr']])
Z([[6],[[7],[3,'language']],[3,'isGuangZhou']])
Z([3,'title_container'])
Z([3,'*'])
Z(z[8])
Z(z[9])
Z([3,'residentFlag'])
Z([[6],[[7],[3,'language']],[3,'residentFlagItems']])
Z([[6],[[7],[3,'selfForm']],[3,'residentFlag']])
Z([[6],[[7],[3,'language']],[3,'inGuangzhou']])
Z(z[97])
Z(z[8])
Z(z[9])
Z([3,'residentCondition'])
Z([[6],[[7],[3,'language']],[3,'residentConditionItems']])
Z([[6],[[7],[3,'selfForm']],[3,'residentCondition']])
Z([[2,'=='],[[6],[[7],[3,'selfForm']],[3,'residentCondition']],[1,3]])
Z(z[21])
Z(z[8])
Z(z[9])
Z([[7],[3,'today']])
Z([3,'returnDate'])
Z([[6],[[7],[3,'language']],[3,'inOUtGUangZhouDate']])
Z(z[50])
Z([[6],[[7],[3,'language']],[3,'inOUtGUangZhouDate14']])
Z([[7],[3,'halfMonthAgo']])
Z([[6],[[7],[3,'selfForm']],[3,'returnDate']])
Z([[2,'=='],[[6],[[7],[3,'selfForm']],[3,'residentCondition']],[1,4]])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'recentRegionName'])
Z([[6],[[7],[3,'language']],[3,'currentLocation']])
Z([[6],[[7],[3,'language']],[3,'selectCurrentLocation']])
Z([[7],[3,'residentPlaceItems']])
Z([[6],[[7],[3,'selfForm']],[3,'recentRegionName']])
Z(z[121])
Z(z[21])
Z(z[8])
Z(z[9])
Z([3,'quasiReturnDate'])
Z([[6],[[7],[3,'language']],[3,'outGuanZhou']])
Z(z[50])
Z([[6],[[7],[3,'language']],[3,'selectDate']])
Z(z[114])
Z([[6],[[7],[3,'selfForm']],[3,'quasiReturnDate']])
Z([[2,'!='],[[6],[[7],[3,'selfForm']],[3,'residentCondition']],[1,1]])
Z([[6],[[7],[3,'language']],[3,'monthTraveling']])
Z(z[97])
Z(z[8])
Z(z[9])
Z([3,'travelRegionClass'])
Z([[6],[[7],[3,'language']],[3,'travelRegionClassItems']])
Z([[6],[[7],[3,'selfForm']],[3,'travelRegionClass']])
Z([[6],[[7],[3,'language']],[3,'Recenthistory']])
Z([3,'handleSocialContact1Change'])
Z([[6],[[7],[3,'language']],[3,'RecenthistoryDesc14']])
Z([3,'socialContact1'])
Z([[6],[[7],[3,'language']],[3,'Recenthistory14']])
Z([3,'switch-width'])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact1']])
Z(z[154])
Z(z[21])
Z(z[8])
Z(z[9])
Z(z[114])
Z([3,'contactDateRecent'])
Z([[6],[[7],[3,'language']],[3,'contactDate']])
Z(z[50])
Z([[6],[[7],[3,'language']],[3,'selectDate14']])
Z(z[119])
Z([[6],[[7],[3,'selfForm']],[3,'contactDateRecent']])
Z([3,'handleSocialContact2Change'])
Z([[6],[[7],[3,'language']],[3,'RecenthistoryPersonDesc']])
Z([3,'socialContact2'])
Z([[6],[[7],[3,'language']],[3,'RecenthistoryPerson14']])
Z(z[153])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact2']])
Z(z[171])
Z(z[21])
Z(z[8])
Z(z[9])
Z(z[114])
Z([3,'contactDateLike'])
Z(z[161])
Z(z[50])
Z(z[163])
Z(z[119])
Z([[6],[[7],[3,'selfForm']],[3,'contactDateLike']])
Z([[6],[[7],[3,'language']],[3,'healthStatus']])
Z(z[97])
Z(z[8])
Z(z[9])
Z([3,'healthState'])
Z([[6],[[7],[3,'language']],[3,'healthStateItems']])
Z([3,''])
Z([[6],[[7],[3,'selfForm']],[3,'healthState']])
Z([[6],[[7],[3,'language']],[3,'symptomsTitle']])
Z(z[97])
Z(z[8])
Z(z[9])
Z([3,'symptoms'])
Z([[6],[[7],[3,'language']],[3,'symptomItems']])
Z([[6],[[7],[3,'language']],[3,'symptomsLable']])
Z([[6],[[7],[3,'selfForm']],[3,'symptoms']])
Z(z[8])
Z(z[9])
Z([[7],[3,'disableDetail']])
Z([3,'symptomDscr'])
Z([[6],[[7],[3,'language']],[3,'symptomDscrLable']])
Z([[6],[[7],[3,'language']],[3,'symptomDscrPlaceholder']])
Z([[6],[[7],[3,'selfForm']],[3,'symptomDscr']])
Z([[2,'=='],[[7],[3,'currentType']],[1,'2']])
Z([3,'uploadAvatar'])
Z([[6],[[7],[3,'language']],[3,'portrait']])
Z(z[97])
Z(z[207])
Z([[2,'!'],[[7],[3,'avatarFlag']]])
Z([[7],[3,'avatarFlag']])
Z([3,'#C7C7CC'])
Z([3,'36'])
Z([3,'arrow-right'])
Z([3,'handleAgreeChange'])
Z([[7],[3,'agree']])
Z([3,'handleRegionChange'])
Z([3,'handleRegionClose'])
Z([3,'handleRegionColumnChange'])
Z([[7],[3,'regionRange']])
Z([[7],[3,'showRegionPicker']])
})(__WXML_GLOBAL__.ops_cached.$gwx_94);return __WXML_GLOBAL__.ops_cached.$gwx_94
}
function gz$gwx_95(){
if( __WXML_GLOBAL__.ops_cached.$gwx_95)return __WXML_GLOBAL__.ops_cached.$gwx_95
__WXML_GLOBAL__.ops_cached.$gwx_95=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleSelfSubmit'])
Z([[2,'!'],[[7],[3,'agree']]])
Z([[7],[3,'selfForm']])
Z([3,'提交'])
Z([[7],[3,'selfFormRules']])
Z([[7],[3,'tipsEvent']])
Z([[7],[3,'validateType']])
Z([3,'反映人信息'])
Z([3,'handleFormChange'])
Z([3,'selfForm'])
Z([3,'clueSupplier'])
Z([3,'姓名'])
Z([3,'请填写您的姓名'])
Z([[6],[[7],[3,'selfForm']],[3,'clueSupplier']])
Z(z[9])
Z([3,'clueSupplierPhone'])
Z([3,'联系电话'])
Z([3,'请输入中国大陆手机号码'])
Z([[6],[[7],[3,'userInfo']],[3,'phone']])
Z([3,'涉事人信息（需如实填报）'])
Z(z[8])
Z(z[9])
Z([3,'username'])
Z(z[11])
Z([3,'请填写姓名'])
Z([[6],[[7],[3,'selfForm']],[3,'username']])
Z(z[8])
Z(z[9])
Z([3,'gender'])
Z([3,'性别'])
Z([3,'请选择性别'])
Z([[7],[3,'sexRange']])
Z([[6],[[7],[3,'selfForm']],[3,'gender']])
Z(z[8])
Z(z[9])
Z([3,'phone'])
Z(z[16])
Z(z[17])
Z([3,'number'])
Z([[6],[[7],[3,'selfForm']],[3,'phone']])
Z([3,'选择'])
Z([3,'handleOpenRegion'])
Z(z[9])
Z([3,'street'])
Z([3,'居住地址'])
Z([3,'请选择居住地址'])
Z([[6],[[7],[3,'selfForm']],[3,'street']])
Z([3,'bindSelectData'])
Z(z[8])
Z(z[9])
Z([3,'addr'])
Z([3,'详细住址'])
Z([3,'请填写详细住址（楼栋门牌号）'])
Z([[6],[[7],[3,'selfForm']],[3,'addr']])
Z(z[8])
Z(z[9])
Z([3,'clueVehicle'])
Z([3,'关联车牌'])
Z([3,'请输入车牌号'])
Z([[6],[[7],[3,'selfForm']],[3,'clueVehicle']])
Z([3,'涉事人类型（必选）'])
Z([3,'handleSocialContact1Change'])
Z([3,'socialContact1'])
Z([3,'14日内在湖北旅游居住过的人员'])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact1']])
Z(z[64])
Z(z[8])
Z(z[9])
Z([[7],[3,'today']])
Z([3,'returnDate'])
Z([3,'来或返回广州日期'])
Z([3,'date'])
Z([3,'请选择日期（最近14日内）'])
Z([[7],[3,'halfMonthAgo']])
Z([[6],[[7],[3,'selfForm']],[3,'returnDate']])
Z([3,'handleSocialContact2Change'])
Z([3,'socialContact2'])
Z([3,'14日内曾接触疑似患者'])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact2']])
Z(z[78])
Z(z[8])
Z(z[9])
Z(z[68])
Z([3,'contactDateRecent'])
Z(z[70])
Z(z[71])
Z(z[72])
Z(z[73])
Z([[6],[[7],[3,'selfForm']],[3,'contactDateRecent']])
Z([3,'handleSocialContact3Change'])
Z([3,'socialContact3'])
Z([3,'14日内其他地方来或返回广州人员'])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact3']])
Z(z[92])
Z(z[8])
Z(z[9])
Z(z[68])
Z([3,'quasiReturnDate'])
Z(z[70])
Z(z[71])
Z(z[72])
Z(z[73])
Z([[6],[[7],[3,'selfForm']],[3,'quasiReturnDate']])
Z([3,'handleSocialContact4Change'])
Z([3,'socialContact4'])
Z([3,'其他人员'])
Z([[6],[[7],[3,'selfForm']],[3,'socialContact4']])
Z([3,'反映内容（必选）'])
Z([[2,'!'],[[7],[3,'showVehicleKeyboard']]])
Z(z[8])
Z(z[9])
Z([3,'symptomDscr'])
Z([3,'反映详细内容'])
Z([3,'请详细描述涉事人相关信息，至少5个字'])
Z([[6],[[7],[3,'selfForm']],[3,'symptomDscr']])
Z([3,'handleAgreeChange'])
Z([[7],[3,'agree']])
Z([3,'handleRegionChange'])
Z([3,'handleRegionClose'])
Z([3,'handleRegionColumnChange'])
Z([[7],[3,'regionRange']])
Z([[7],[3,'showRegionPicker']])
Z([3,'handlePlateChange'])
Z([3,'handlePlateClose'])
Z([[6],[[7],[3,'formData']],[3,'clueVehicle']])
Z([[7],[3,'showVehicleKeyboard']])
Z([[7],[3,'fileName']])
Z([[7],[3,'imgSrc']])
Z([[7],[3,'pdfUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_95);return __WXML_GLOBAL__.ops_cached.$gwx_95
}
function gz$gwx_96(){
if( __WXML_GLOBAL__.ops_cached.$gwx_96)return __WXML_GLOBAL__.ops_cached.$gwx_96
__WXML_GLOBAL__.ops_cached.$gwx_96=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'source']],[1,'report']])
Z([3,'handleSecondTap'])
Z([[6],[[7],[3,'language']],[3,'sunccessDesc']])
Z([[6],[[7],[3,'language']],[3,'home']])
Z([[6],[[7],[3,'language']],[3,'sponsor']])
Z([3,'success'])
Z([[6],[[7],[3,'language']],[3,'supportor']])
Z(z[2])
Z([3,'handlePrimaryTap'])
Z(z[1])
Z([[2,'?:'],[[2,'=='],[[7],[3,'isFromBuy']],[1,1]],[[6],[[7],[3,'language']],[3,'sunccessSub']],[[6],[[7],[3,'language']],[3,'sunccessSub2']]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'isFromBuy']],[1,1]],[[6],[[7],[3,'language']],[3,'subscribe']],[[6],[[7],[3,'language']],[3,'generate']]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_96);return __WXML_GLOBAL__.ops_cached.$gwx_96
}
function gz$gwx_97(){
if( __WXML_GLOBAL__.ops_cached.$gwx_97)return __WXML_GLOBAL__.ops_cached.$gwx_97
__WXML_GLOBAL__.ops_cached.$gwx_97=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'errorpage']]])
Z([[7],[3,'errorpage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_97);return __WXML_GLOBAL__.ops_cached.$gwx_97
}
function gz$gwx_98(){
if( __WXML_GLOBAL__.ops_cached.$gwx_98)return __WXML_GLOBAL__.ops_cached.$gwx_98
__WXML_GLOBAL__.ops_cached.$gwx_98=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'language']])
Z([1,false])
Z([[2,'?:'],[[7],[3,'isShowBg']],[1,''],[1,'white']])
Z([[2,'?:'],[[7],[3,'isShowBg']],[1,'white'],[1,'black']])
Z([[6],[[7],[3,'language']],[3,'SuiKang']])
Z([[6],[[7],[3,'userInfo']],[3,'isLeader']])
Z([3,'handleOpenRegion'])
Z([3,'header-region'])
Z([3,'left'])
Z(z[3])
Z([a,[3,'index__container '],[[6],[[7],[3,'language']],[3,'class']]])
Z([[2,'!'],[[6],[[7],[3,'userInfo']],[3,'isLeader']]])
Z([[6],[[6],[[7],[3,'wllConfig']],[3,'home_notice']],[3,'is_open']])
Z([3,'openTipsModal'])
Z([[6],[[6],[[7],[3,'wllConfig']],[3,'home_notice']],[3,'duration']])
Z([3,'warn'])
Z([[6],[[7],[3,'language']],[3,'view']])
Z([[7],[3,'isvisable']])
Z(z[1])
Z(z[17])
Z(z[17])
Z(z[5])
Z([[6],[[7],[3,'language']],[3,'guangzhouDisease']])
Z([[6],[[7],[3,'language']],[3,'supportor']])
Z([3,'handleRegionChange'])
Z([3,'handleRegionClose'])
Z([3,'handleRegionColumnChange'])
Z([[7],[3,'regionRange']])
Z([[7],[3,'visible']])
Z([[7],[3,'fileName']])
Z([[7],[3,'pdfUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_98);return __WXML_GLOBAL__.ops_cached.$gwx_98
}
function gz$gwx_99(){
if( __WXML_GLOBAL__.ops_cached.$gwx_99)return __WXML_GLOBAL__.ops_cached.$gwx_99
__WXML_GLOBAL__.ops_cached.$gwx_99=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_99);return __WXML_GLOBAL__.ops_cached.$gwx_99
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"m_./pages/manage-company/index.wxml:timeOfString":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/manage-company/index.wxml']={};
f_['./pages/manage-company/index.wxml']['timeOfString'] =nv_require("m_./pages/manage-company/index.wxml:timeOfString");
function np_0(){var nv_module={nv_exports:{}};var nv_dateFormatStr = (function (nv_dateStr){return(nv_dateStr.nv_replace('T',' ').nv_split('.')[(0)])});var nv_moneyFormat = (function (nv_money){return(nv_money.nv_toFixed(2))});nv_module.nv_exports = ({nv_dateFormatStr:nv_dateFormatStr,nv_moneyFormat:nv_moneyFormat,});return nv_module.nv_exports;}

var x=['./components/custom-tab-bar/index.wxml','./components/g-speech/index.wxml','./components/gsd-ui/g-address-item/index.wxml','./components/gsd-ui/g-address-map/index.wxml','./components/gsd-ui/g-agree/index.wxml','./components/gsd-ui/g-auth-footer/index.wxml','./components/gsd-ui/g-badge/index.wxml','./components/gsd-ui/g-banner/index.wxml','./components/gsd-ui/g-button-group/index.wxml','./components/gsd-ui/g-calendar/index.wxml','./components/gsd-ui/g-card/index.wxml','./components/gsd-ui/g-cascader/index.wxml','./components/gsd-ui/g-cell/index.wxml','./components/gsd-ui/g-checkbox-group/index.wxml','./components/gsd-ui/g-checkbox-label/index.wxml','./components/gsd-ui/g-circle/index.wxml','./components/gsd-ui/g-clip-photo/index.wxml','./components/gsd-ui/g-collapse-pane/index.wxml','./components/gsd-ui/g-collapse/index.wxml','./components/gsd-ui/g-date-range-picker/index.wxml','./components/gsd-ui/g-dropdown/index.wxml','./components/gsd-ui/g-footer/index.wxml','./components/gsd-ui/g-form-cell/index.wxml','./components/gsd-ui/g-form-item/index.wxml','./components/gsd-ui/g-form-number/index.wxml','./components/gsd-ui/g-form-phoneVCode/index.wxml','./components/gsd-ui/g-form/index.wxml','./components/gsd-ui/g-icon/index.wxml','./components/gsd-ui/g-index-list/index.wxml','./components/gsd-ui/g-input-map/index.wxml','./components/gsd-ui/g-input/index.wxml','./components/gsd-ui/g-map/index.wxml','./components/gsd-ui/g-modal/index.wxml','./components/gsd-ui/g-msg/index.wxml','./components/gsd-ui/g-nav-box-item/index.wxml','./components/gsd-ui/g-nav-box/index.wxml','./components/gsd-ui/g-picker-view/index.wxml','./components/gsd-ui/g-picker/index.wxml','./components/gsd-ui/g-plate-number-keyboard/index.wxml','./components/gsd-ui/g-poplayer/index.wxml','./components/gsd-ui/g-popover/index.wxml','./components/gsd-ui/g-preview-item/index.wxml','./components/gsd-ui/g-preview/index.wxml','./components/gsd-ui/g-radio-group/index.wxml','./components/gsd-ui/g-region-picker/index.wxml','./components/gsd-ui/g-region/index.wxml','./components/gsd-ui/g-search/index.wxml','./components/gsd-ui/g-select/index.wxml','./components/gsd-ui/g-selector/index.wxml','./components/gsd-ui/g-switch/index.wxml','./components/gsd-ui/g-tab-pane/index.wxml','./components/gsd-ui/g-table/index.wxml','./components/gsd-ui/g-table/table-body/index.wxml','./components/gsd-ui/g-table/table-header/index.wxml','./components/gsd-ui/g-table/table-scroll/index.wxml','./components/gsd-ui/g-tabs/index.wxml','./components/gsd-ui/g-textarea/index.wxml','./components/gsd-ui/g-timeline-item/index.wxml','./components/gsd-ui/g-timeline/index.wxml','./components/gsd-ui/g-tips/index.wxml','./components/gsd-ui/g-title/index.wxml','./components/gsd-ui/g-upload/index.wxml','./components/gsd-ui/g-wrapper/index.wxml','./components/home-tips/index.wxml','./components/hover-button/index.wxml','./components/lazy-load/index.wxml','./components/slide-item/index.wxml','./components/weui-miniprogram/navigation-bar/navigation-bar.wxml','./miniprogram_dist/index/index.wxml','./miniprogram_dist/poster/index.wxml','./pages/application/index.wxml','./pages/buy/notice/index.wxml','./pages/company-manage/index.wxml','./pages/cropper-avatar/index.wxml','./pages/diagnosis/index.wxml','./pages/donate/contact/index.wxml','./pages/donate/form/index.wxml','./pages/donate/index/index.wxml','./pages/donate/msg/index.wxml','./pages/health-guide-detail/index.wxml','./pages/health-guide/index.wxml','./pages/index/index.wxml','./pages/manage-company/index.wxml','./pages/mine/company/list/index.wxml','./pages/mine/donation/index.wxml','./pages/mine/empty/index.wxml','./pages/mine/index/index.wxml','./pages/mine/login/index.wxml','./pages/mine/setting/index.wxml','./pages/mine/todo/detail/detail.wxml','./pages/mine/todo/list/list.wxml','./pages/msg/index.wxml','./pages/report/home/index.wxml','./pages/report/index/index.wxml','./pages/report/inform/index.wxml','./pages/report/msg/index.wxml','./pages/share-company-code/index.wxml','./pages/stat/index.wxml','./pages/web-view/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
}
var oD=_n('view')
_rz(z,oD,'catch:tap',1,e,s,gg)
var fE=_n('slot')
_(oD,fE)
_(r,oD)
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var hG=_v()
_(r,hG)
if(_oz(z,0,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_n('view')
var oJ=_v()
_(cI,oJ)
if(_oz(z,0,e,s,gg)){oJ.wxVkey=1
var aL=_n('g-dropdown')
_rz(z,aL,'color',1,e,s,gg)
var tM=_mz(z,'g-region',['bind:change',2,'excludes',1,'includes',2,'level',3,'value',4],[],e,s,gg)
_(aL,tM)
_(oJ,aL)
}
var eN=_n('slot')
_(cI,eN)
var lK=_v()
_(cI,lK)
if(_oz(z,7,e,s,gg)){lK.wxVkey=1
var bO=_mz(z,'g-tabs',['activeKey',8,'animated',1,'bind:change',2,'tabHeaderClass',3],[],e,s,gg)
var oP=_mz(z,'g-tab-pane',['key',12,'tab',1],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,14,e,s,gg)){xQ.wxVkey=1
var oR=_v()
_(xQ,oR)
var fS=function(hU,cT,oV,gg){
var oX=_mz(z,'view',['catch:tap',17,'class',1,'data-item',2,'hoverClass',3,'hoverStayTime',4],[],hU,cT,gg)
var lY=_mz(z,'g-address-item',['componentClass',22,'item',1,'titleClass',2],[],hU,cT,gg)
_(oX,lY)
_(oV,oX)
return oV
}
oR.wxXCkey=4
_2z(z,15,fS,e,s,gg,oR,'item','index','{{item.id}}')
}
else{xQ.wxVkey=2
}
xQ.wxXCkey=1
xQ.wxXCkey=3
_(bO,oP)
var aZ=_mz(z,'g-tab-pane',['id',25,'key',1,'tab',2],[],e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,28,e,s,gg)){t1.wxVkey=1
var e2=_mz(z,'g-map',['activeId',29,'bind:activeMarker',1,'bind:mapUpdate',2,'loadUnit',3,'markers',4,'position',5],[],e,s,gg)
_(t1,e2)
}
var b3=_n('view')
_rz(z,b3,'id',35,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,36,e,s,gg)){o4.wxVkey=1
var x5=_n('view')
var f7=_mz(z,'view',['catch:tap',37,'class',1,'data-item',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var c8=_mz(z,'g-address-item',['componentClass',42,'item',1,'titleClass',2],[],e,s,gg)
_(f7,c8)
_(x5,f7)
var o6=_v()
_(x5,o6)
if(_oz(z,45,e,s,gg)){o6.wxVkey=1
var h9=_v()
_(o6,h9)
if(_oz(z,46,e,s,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
}
o6.wxXCkey=1
_(o4,x5)
}
else{o4.wxVkey=2
}
o4.wxXCkey=1
o4.wxXCkey=3
_(aZ,b3)
t1.wxXCkey=1
t1.wxXCkey=3
_(bO,aZ)
_(lK,bO)
}
else{lK.wxVkey=2
var o0=_n('view')
var oBB=_mz(z,'g-map',['activeId',47,'bind:activeMarker',1,'bind:mapUpdate',2,'markers',3,'position',4],[],e,s,gg)
_(o0,oBB)
var cAB=_v()
_(o0,cAB)
if(_oz(z,52,e,s,gg)){cAB.wxVkey=1
var lCB=_v()
_(cAB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_mz(z,'view',['catch:tap',55,'class',1,'data-item',2,'hoverClass',3,'hoverStayTime',4],[],eFB,tEB,gg)
var oJB=_n('g-address-item')
_rz(z,oJB,'item',60,eFB,tEB,gg)
_(xIB,oJB)
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=4
_2z(z,53,aDB,e,s,gg,lCB,'item','index','{{item.id}}')
}
else{cAB.wxVkey=2
}
cAB.wxXCkey=1
cAB.wxXCkey=3
_(lK,o0)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
lK.wxXCkey=1
lK.wxXCkey=3
lK.wxXCkey=3
_(r,cI)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cLB=_n('checkbox-group')
_rz(z,cLB,'bind:change',0,e,s,gg)
var hMB=_n('label')
_rz(z,hMB,'class',1,e,s,gg)
var oNB=_mz(z,'g-icon',['class',2,'size',1,'type',2],[],e,s,gg)
_(hMB,oNB)
var cOB=_n('slot')
_(hMB,cOB)
_(cLB,hMB)
_(r,cLB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var eTB=_v()
_(r,eTB)
if(_oz(z,0,e,s,gg)){eTB.wxVkey=1
var oVB=_n('view')
_rz(z,oVB,'class',1,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,2,e,s,gg)){xWB.wxVkey=1
var oXB=_mz(z,'g-agree',['catch:change',3,'value',1],[],e,s,gg)
var fYB=_n('slot')
_rz(z,fYB,'name',5,e,s,gg)
_(oXB,fYB)
_(xWB,oXB)
}
var cZB=_n('slot')
_rz(z,cZB,'name',6,e,s,gg)
_(oVB,cZB)
var h1B=_n('view')
_rz(z,h1B,'class',7,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,8,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,9,e,s,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(oVB,h1B)
xWB.wxXCkey=1
xWB.wxXCkey=3
_(eTB,oVB)
}
var bUB=_v()
_(r,bUB)
if(_oz(z,10,e,s,gg)){bUB.wxVkey=1
}
eTB.wxXCkey=1
eTB.wxXCkey=3
bUB.wxXCkey=1
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var l5B=_mz(z,'swiper',['bind:change',0,'class',1,'current',1,'duration',2],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,4,e,s,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,5,e,s,gg)){t7B.wxVkey=1
}
a6B.wxXCkey=1
t7B.wxXCkey=1
_(r,l5B)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var b9B=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,2,e,s,gg)){o0B.wxVkey=1
var xAC=_mz(z,'g-icon',['class',3,'size',1,'type',2],[],e,s,gg)
_(o0B,xAC)
}
var oBC=_n('slot')
_(b9B,oBC)
o0B.wxXCkey=1
o0B.wxXCkey=3
_(r,b9B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cDC=_mz(z,'g-poplayer',['bind:close',0,'visible',1],[],e,s,gg)
var hEC=_mz(z,'g-tabs',['scroll',-1,'activeKey',2,'bind:change',1,'catchtouchmove',2,'paneHeight',3],[],e,s,gg)
var oFC=_v()
_(hEC,oFC)
var cGC=function(lIC,oHC,aJC,gg){
var eLC=_mz(z,'g-tab-pane',['key',9,'tab',1],[],lIC,oHC,gg)
_(aJC,eLC)
return aJC
}
oFC.wxXCkey=4
_2z(z,7,cGC,e,s,gg,oFC,'item','index','title')
_(cDC,hEC)
_(r,cDC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oNC=_mz(z,'view',['ariaLabel',0,'ariaRole',1,'catch:tap',1,'class',2,'hoverClass',3],[],e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',5,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',6,e,s,gg)
var cRC=_n('view')
_rz(z,cRC,'class',7,e,s,gg)
var oTC=_n('slot')
_rz(z,oTC,'name',8,e,s,gg)
_(cRC,oTC)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,9,e,s,gg)){hSC.wxVkey=1
var cUC=_mz(z,'g-icon',['color',10,'size',1,'type',2],[],e,s,gg)
_(hSC,cUC)
}
var oVC=_n('view')
_rz(z,oVC,'class',13,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,14,e,s,gg)){lWC.wxVkey=1
}
var aXC=_n('view')
var tYC=_n('slot')
_(aXC,tYC)
var eZC=_n('slot')
_rz(z,eZC,'name',15,e,s,gg)
_(aXC,eZC)
_(oVC,aXC)
lWC.wxXCkey=1
_(cRC,oVC)
hSC.wxXCkey=1
hSC.wxXCkey=3
_(fQC,cRC)
var b1C=_n('slot')
_rz(z,b1C,'name',16,e,s,gg)
_(fQC,b1C)
_(xOC,fQC)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,17,e,s,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
_(oNC,xOC)
_(r,oNC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var x3C=_n('checkbox-group')
_rz(z,x3C,'bindchange',0,e,s,gg)
var o4C=_v()
_(x3C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'view',['ariaLabel',3,'ariaRole',1,'class',2],[],h7C,c6C,gg)
var lAD=_mz(z,'g-form-item',['componentClass',6,'disabled',1],[],h7C,c6C,gg)
var aBD=_mz(z,'g-icon',['class',8,'size',1,'type',2],[],h7C,c6C,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_mz(z,'view',['catch:tap',11,'class',1,'data-item',2],[],h7C,c6C,gg)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,14,h7C,c6C,gg)){eDD.wxVkey=1
var bED=_mz(z,'g-icon',['class',15,'size',1,'type',2],[],h7C,c6C,gg)
_(eDD,bED)
}
eDD.wxXCkey=1
eDD.wxXCkey=3
_(o0C,tCD)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=4
_2z(z,1,f5C,e,s,gg,o4C,'item','index','index')
_(r,x3C)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var xGD=_v()
_(r,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'view',['bindtap',2,'class',1,'data-change-value',2,'data-disabled',3],[],cJD,fID,gg)
var oND=_mz(z,'view',['bindtap',6,'class',1],[],cJD,fID,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,8,cJD,fID,gg)){lOD.wxVkey=1
}
lOD.wxXCkey=1
_(cMD,oND)
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=2
_2z(z,0,oHD,e,s,gg,xGD,'item','index','{{index}}')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,1,e,s,gg)){eRD.wxVkey=1
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,2,e,s,gg)){bSD.wxVkey=1
var fWD=_mz(z,'g-icon',['color',3,'size',1,'type',2],[],e,s,gg)
_(bSD,fWD)
}
var oTD=_v()
_(tQD,oTD)
if(_oz(z,6,e,s,gg)){oTD.wxVkey=1
var cXD=_mz(z,'g-icon',['color',7,'size',1,'type',2],[],e,s,gg)
_(oTD,cXD)
}
var xUD=_v()
_(tQD,xUD)
if(_oz(z,10,e,s,gg)){xUD.wxVkey=1
var hYD=_mz(z,'g-icon',['color',11,'size',1,'type',2],[],e,s,gg)
_(xUD,hYD)
}
var oVD=_v()
_(tQD,oVD)
if(_oz(z,14,e,s,gg)){oVD.wxVkey=1
var oZD=_mz(z,'g-icon',['color',15,'size',1,'type',2],[],e,s,gg)
_(oVD,oZD)
}
eRD.wxXCkey=1
bSD.wxXCkey=1
bSD.wxXCkey=3
oTD.wxXCkey=1
oTD.wxXCkey=3
xUD.wxXCkey=1
xUD.wxXCkey=3
oVD.wxXCkey=1
oVD.wxXCkey=3
_(r,tQD)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var o2D=_n('view')
_rz(z,o2D,'class',0,e,s,gg)
var l3D=_mz(z,'g-switch',['bind:change',1,'label',1,'value',2],[],e,s,gg)
_(o2D,l3D)
var a4D=_n('view')
_rz(z,a4D,'class',4,e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,5,e,s,gg)){t5D.wxVkey=1
}
var b7D=_n('view')
_rz(z,b7D,'class',6,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,7,e,s,gg)){o8D.wxVkey=1
var x9D=_mz(z,'view',['ariaLabel',8,'ariaRole',1,'catch:tap',2],[],e,s,gg)
var o0D=_mz(z,'g-image',['imageClass',11,'mode',1,'src',2],[],e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
}
else{o8D.wxVkey=2
}
o8D.wxXCkey=1
o8D.wxXCkey=3
_(a4D,b7D)
var e6D=_v()
_(a4D,e6D)
if(_oz(z,14,e,s,gg)){e6D.wxVkey=1
}
t5D.wxXCkey=1
e6D.wxXCkey=1
_(o2D,a4D)
_(r,o2D)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var hCE=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var oDE=_mz(z,'g-icon',['class',3,'color',1,'type',2],[],e,s,gg)
_(hCE,oDE)
_(cBE,hCE)
var cEE=_n('slot')
_(cBE,cEE)
_(r,cBE)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var lGE=_n('slot')
_(r,lGE)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var eJE=_n('slot')
_(r,eJE)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var xME=_mz(z,'g-form-item',['disabled',0,'label',1,'required',1,'status',2,'statusMessage',3],[],e,s,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,5,e,s,gg)){oNE.wxVkey=1
var fOE=_n('slot')
_(oNE,fOE)
}
else{oNE.wxVkey=2
var cPE=_v()
_(oNE,cPE)
if(_oz(z,6,e,s,gg)){cPE.wxVkey=1
}
cPE.wxXCkey=1
}
oNE.wxXCkey=1
_(r,xME)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var cSE=_n('view')
_rz(z,cSE,'class',0,e,s,gg)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,1,e,s,gg)){oTE.wxVkey=1
var lUE=_v()
_(oTE,lUE)
if(_oz(z,2,e,s,gg)){lUE.wxVkey=1
}
lUE.wxXCkey=1
}
var aVE=_n('slot')
_(cSE,aVE)
oTE.wxXCkey=1
_(r,cSE)
var oRE=_v()
_(r,oRE)
if(_oz(z,3,e,s,gg)){oRE.wxVkey=1
}
oRE.wxXCkey=1
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var eXE=_n('g-form-item')
_rz(z,eXE,'disabled',0,e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,1,e,s,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(eXE,oZE)
if(_oz(z,2,e,s,gg)){oZE.wxVkey=1
}
bYE.wxXCkey=1
oZE.wxXCkey=1
_(r,eXE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var o2E=_mz(z,'g-input',['append',-1,'bind:change',0,'disabled',1,'id',1,'label',2,'maxlength',3,'placeholder',4,'status',5,'statusMessage',6,'type',7,'value',8],[],e,s,gg)
_(r,o2E)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var c4E=_n('view')
var h5E=_v()
_(c4E,h5E)
if(_oz(z,0,e,s,gg)){h5E.wxVkey=1
var o6E=_mz(z,'g-tips',['closeable',-1,'catch:close',1,'isShow',1,'position',2,'status',3],[],e,s,gg)
_(h5E,o6E)
}
var c7E=_n('form')
_rz(z,c7E,'class',5,e,s,gg)
var o8E=_n('slot')
_(c7E,o8E)
var l9E=_n('slot')
_rz(z,l9E,'name',6,e,s,gg)
_(c7E,l9E)
var a0E=_mz(z,'g-button-group',['agree',7,'autoAgree',1,'catch:primaryTap',2,'catch:secondTap',3,'direction',4,'disabled',5,'primaryText',6,'secondText',7],[],e,s,gg)
var tAF=_v()
_(a0E,tAF)
if(_oz(z,15,e,s,gg)){tAF.wxVkey=1
var eBF=_n('view')
_rz(z,eBF,'slot',16,e,s,gg)
var bCF=_n('slot')
_rz(z,bCF,'name',17,e,s,gg)
_(eBF,bCF)
_(tAF,eBF)
}
tAF.wxXCkey=1
_(c7E,a0E)
_(c4E,c7E)
h5E.wxXCkey=1
h5E.wxXCkey=3
_(r,c4E)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var oFF=_n('view')
_rz(z,oFF,'class',0,e,s,gg)
var cHF=_n('slot')
_rz(z,cHF,'name',1,e,s,gg)
_(oFF,cHF)
var fGF=_v()
_(oFF,fGF)
if(_oz(z,2,e,s,gg)){fGF.wxVkey=1
var hIF=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var cKF=_mz(z,'scroll-view',['scrollY',-1,'class',5,'scrollTop',1],[],e,s,gg)
var oLF=_n('slot')
_rz(z,oLF,'name',7,e,s,gg)
_(cKF,oLF)
var lMF=_v()
_(cKF,lMF)
var aNF=function(ePF,tOF,bQF,gg){
var xSF=_v()
_(bQF,xSF)
var oTF=function(cVF,fUF,hWF,gg){
var cYF=_mz(z,'view',['catch:tap',14,'class',1,'data-item',2,'hoverClass',3,'hoverStayTime',4],[],cVF,fUF,gg)
var oZF=_v()
_(cYF,oZF)
if(_oz(z,19,cVF,fUF,gg)){oZF.wxVkey=1
}
oZF.wxXCkey=1
_(hWF,cYF)
return hWF
}
xSF.wxXCkey=2
_2z(z,12,oTF,ePF,tOF,gg,xSF,'subItem','subIndex','{{subIndex}}')
return bQF
}
lMF.wxXCkey=2
_2z(z,8,aNF,e,s,gg,lMF,'item','index','{{item.key}}')
_(hIF,cKF)
var oJF=_v()
_(hIF,oJF)
if(_oz(z,20,e,s,gg)){oJF.wxVkey=1
}
oJF.wxXCkey=1
_(fGF,hIF)
}
else{fGF.wxVkey=2
}
fGF.wxXCkey=1
_(r,oFF)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var a2F=_mz(z,'g-form-item',['disabled',0,'label',1,'required',1,'staticItemClass',2,'status',3,'statusMessage',4],[],e,s,gg)
var t3F=_n('view')
_rz(z,t3F,'class',6,e,s,gg)
var e4F=_v()
_(t3F,e4F)
if(_oz(z,7,e,s,gg)){e4F.wxVkey=1
var o6F=_mz(z,'slot',['class',8,'name',1],[],e,s,gg)
_(e4F,o6F)
}
var x7F=_n('view')
_rz(z,x7F,'class',10,e,s,gg)
var f9F=_mz(z,'view',['catch:tap',11,'class',1,'hidden',2],[],e,s,gg)
var c0F=_mz(z,'g-icon',['size',14,'type',1],[],e,s,gg)
_(f9F,c0F)
_(x7F,f9F)
var o8F=_v()
_(x7F,o8F)
if(_oz(z,16,e,s,gg)){o8F.wxVkey=1
var hAG=_mz(z,'view',['catch:tap',17,'class',1],[],e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,19,e,s,gg)){oBG.wxVkey=1
var cCG=_mz(z,'g-popover',['content',20,'placement',1],[],e,s,gg)
var oDG=_mz(z,'g-icon',['size',22,'type',1],[],e,s,gg)
_(cCG,oDG)
_(oBG,cCG)
}
oBG.wxXCkey=1
oBG.wxXCkey=3
_(o8F,hAG)
}
o8F.wxXCkey=1
o8F.wxXCkey=3
_(t3F,x7F)
var b5F=_v()
_(t3F,b5F)
if(_oz(z,24,e,s,gg)){b5F.wxVkey=1
var lEG=_mz(z,'slot',['class',25,'name',1],[],e,s,gg)
_(b5F,lEG)
}
e4F.wxXCkey=1
b5F.wxXCkey=1
_(a2F,t3F)
_(r,a2F)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var tGG=_mz(z,'g-form-item',['disabled',0,'label',1,'required',1,'staticItemClass',2,'status',3,'statusMessage',4],[],e,s,gg)
var eHG=_n('view')
_rz(z,eHG,'class',6,e,s,gg)
var bIG=_v()
_(eHG,bIG)
if(_oz(z,7,e,s,gg)){bIG.wxVkey=1
var xKG=_mz(z,'slot',['class',8,'name',1],[],e,s,gg)
_(bIG,xKG)
}
var oLG=_n('view')
_rz(z,oLG,'class',10,e,s,gg)
var cNG=_mz(z,'view',['catch:tap',11,'class',1,'hidden',2],[],e,s,gg)
var hOG=_mz(z,'g-icon',['size',14,'type',1],[],e,s,gg)
_(cNG,hOG)
_(oLG,cNG)
var fMG=_v()
_(oLG,fMG)
if(_oz(z,16,e,s,gg)){fMG.wxVkey=1
var oPG=_mz(z,'view',['catch:tap',17,'class',1],[],e,s,gg)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,19,e,s,gg)){cQG.wxVkey=1
var oRG=_mz(z,'g-popover',['content',20,'placement',1],[],e,s,gg)
var lSG=_mz(z,'g-icon',['size',22,'type',1],[],e,s,gg)
_(oRG,lSG)
_(cQG,oRG)
}
cQG.wxXCkey=1
cQG.wxXCkey=3
_(fMG,oPG)
}
fMG.wxXCkey=1
fMG.wxXCkey=3
_(eHG,oLG)
var oJG=_v()
_(eHG,oJG)
if(_oz(z,24,e,s,gg)){oJG.wxVkey=1
var aTG=_mz(z,'slot',['class',25,'name',1],[],e,s,gg)
_(oJG,aTG)
}
bIG.wxXCkey=1
oJG.wxXCkey=1
_(tGG,eHG)
_(r,tGG)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var eVG=_mz(z,'map',['showLocation',-1,'bindmarkertap',0,'bindregionchange',1,'class',1,'id',2,'latitude',3,'longitude',4,'markers',5,'scale',6],[],e,s,gg)
var bWG=_v()
_(eVG,bWG)
if(_oz(z,8,e,s,gg)){bWG.wxVkey=1
}
bWG.wxXCkey=1
_(r,eVG)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var xYG=_v()
_(r,xYG)
if(_oz(z,0,e,s,gg)){xYG.wxVkey=1
var f1G=_n('view')
_rz(z,f1G,'class',1,e,s,gg)
var h3G=_n('slot')
_(f1G,h3G)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,2,e,s,gg)){c2G.wxVkey=1
}
c2G.wxXCkey=1
_(xYG,f1G)
}
var oZG=_v()
_(r,oZG)
if(_oz(z,3,e,s,gg)){oZG.wxVkey=1
}
xYG.wxXCkey=1
oZG.wxXCkey=1
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var c5G=_n('view')
_rz(z,c5G,'class',0,e,s,gg)
var o6G=_mz(z,'g-title',['status',1,'title',1],[],e,s,gg)
_(c5G,o6G)
var l7G=_n('slot')
_(c5G,l7G)
var a8G=_n('view')
_rz(z,a8G,'class',3,e,s,gg)
var t9G=_v()
_(a8G,t9G)
if(_oz(z,4,e,s,gg)){t9G.wxVkey=1
}
var e0G=_v()
_(a8G,e0G)
if(_oz(z,5,e,s,gg)){e0G.wxVkey=1
}
t9G.wxXCkey=1
e0G.wxXCkey=1
_(c5G,a8G)
var bAH=_mz(z,'g-footer',['fixed',6,'sponsor',1,'supportor',2],[],e,s,gg)
_(c5G,bAH)
_(r,c5G)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var xCH=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var oDH=_n('slot')
_(xCH,oDH)
_(r,xCH)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var cFH=_n('view')
_rz(z,cFH,'class',0,e,s,gg)
var oHH=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var cIH=_v()
_(oHH,cIH)
if(_oz(z,3,e,s,gg)){cIH.wxVkey=1
}
var oJH=_v()
_(oHH,oJH)
if(_oz(z,4,e,s,gg)){oJH.wxVkey=1
}
var lKH=_v()
_(oHH,lKH)
if(_oz(z,5,e,s,gg)){lKH.wxVkey=1
}
cIH.wxXCkey=1
oJH.wxXCkey=1
lKH.wxXCkey=1
_(cFH,oHH)
var aLH=_n('slot')
_(cFH,aLH)
var hGH=_v()
_(cFH,hGH)
if(_oz(z,6,e,s,gg)){hGH.wxVkey=1
}
hGH.wxXCkey=1
_(r,cFH)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var bOH=_mz(z,'picker',['bindcancel',0,'bindchange',1,'bindcolumnchange',1,'customItem',2,'disabled',3,'end',4,'fields',5,'mode',6,'range',7,'rangeKey',8,'start',9,'value',10],[],e,s,gg)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,12,e,s,gg)){oPH.wxVkey=1
var xQH=_mz(z,'g-form-item',['disabled',13,'label',1,'required',2,'status',3,'statusMessage',4],[],e,s,gg)
var oRH=_v()
_(xQH,oRH)
if(_oz(z,18,e,s,gg)){oRH.wxVkey=1
}
oRH.wxXCkey=1
_(oPH,xQH)
}
else if(_oz(z,19,e,s,gg)){oPH.wxVkey=2
var fSH=_n('g-dropdown')
_(oPH,fSH)
}
oPH.wxXCkey=1
oPH.wxXCkey=3
oPH.wxXCkey=3
_(r,bOH)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var hUH=_v()
_(r,hUH)
if(_oz(z,0,e,s,gg)){hUH.wxVkey=1
var oVH=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var cWH=_mz(z,'view',['catchtap',3,'catchtouchmove',1,'class',2,'style',3],[],e,s,gg)
var oXH=_n('view')
_rz(z,oXH,'class',7,e,s,gg)
var lYH=_v()
_(oXH,lYH)
if(_oz(z,8,e,s,gg)){lYH.wxVkey=1
var t1H=_v()
_(lYH,t1H)
var e2H=function(o4H,b3H,x5H,gg){
var f7H=_n('view')
_rz(z,f7H,'class',11,o4H,b3H,gg)
var c8H=_v()
_(f7H,c8H)
if(_oz(z,12,o4H,b3H,gg)){c8H.wxVkey=1
}
var o0H=_v()
_(f7H,o0H)
var cAI=function(lCI,oBI,aDI,gg){
var eFI=_v()
_(aDI,eFI)
if(_oz(z,17,lCI,oBI,gg)){eFI.wxVkey=1
}
eFI.wxXCkey=1
return aDI
}
o0H.wxXCkey=2
_2z(z,15,cAI,o4H,b3H,gg,o0H,'it','ind','{{ind}}')
var bGI=_v()
_(f7H,bGI)
var oHI=function(oJI,xII,fKI,gg){
var hMI=_v()
_(fKI,hMI)
if(_oz(z,22,oJI,xII,gg)){hMI.wxVkey=1
}
hMI.wxXCkey=1
return fKI
}
bGI.wxXCkey=2
_2z(z,20,oHI,o4H,b3H,gg,bGI,'it','ind','{{ind}}')
var h9H=_v()
_(f7H,h9H)
if(_oz(z,23,o4H,b3H,gg)){h9H.wxVkey=1
}
c8H.wxXCkey=1
h9H.wxXCkey=1
_(x5H,f7H)
return x5H
}
t1H.wxXCkey=2
_2z(z,9,e2H,e,s,gg,t1H,'item','index','{{index}}')
}
var aZH=_v()
_(oXH,aZH)
if(_oz(z,24,e,s,gg)){aZH.wxVkey=1
var oNI=_v()
_(aZH,oNI)
var cOI=function(lQI,oPI,aRI,gg){
var eTI=_n('view')
_rz(z,eTI,'class',27,lQI,oPI,gg)
var bUI=_v()
_(eTI,bUI)
if(_oz(z,28,lQI,oPI,gg)){bUI.wxVkey=1
}
var oVI=_v()
_(eTI,oVI)
if(_oz(z,29,lQI,oPI,gg)){oVI.wxVkey=1
}
bUI.wxXCkey=1
oVI.wxXCkey=1
_(aRI,eTI)
return aRI
}
oNI.wxXCkey=2
_2z(z,25,cOI,e,s,gg,oNI,'item','index','{{index}}')
}
lYH.wxXCkey=1
aZH.wxXCkey=1
_(cWH,oXH)
_(oVH,cWH)
_(hUH,oVH)
}
hUH.wxXCkey=1
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var oXI=_n('slot')
_(r,oXI)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var cZI=_mz(z,'view',['bind:tap',0,'class',1],[],e,s,gg)
var h1I=_v()
_(cZI,h1I)
if(_oz(z,2,e,s,gg)){h1I.wxVkey=1
}
var o2I=_n('slot')
_(cZI,o2I)
h1I.wxXCkey=1
_(r,cZI)
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var o4I=_n('view')
_rz(z,o4I,'class',0,e,s,gg)
var l5I=_v()
_(o4I,l5I)
if(_oz(z,1,e,s,gg)){l5I.wxVkey=1
}
var a6I=_v()
_(o4I,a6I)
if(_oz(z,2,e,s,gg)){a6I.wxVkey=1
var t7I=_mz(z,'g-icon',['color',3,'size',1,'type',2],[],e,s,gg)
_(a6I,t7I)
}
var e8I=_n('slot')
_(o4I,e8I)
l5I.wxXCkey=1
a6I.wxXCkey=1
a6I.wxXCkey=3
_(r,o4I)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var o0I=_n('slot')
_(r,o0I)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var oBJ=_n('radio-group')
_rz(z,oBJ,'bindchange',0,e,s,gg)
var fCJ=_v()
_(oBJ,fCJ)
var cDJ=function(oFJ,hEJ,cGJ,gg){
var lIJ=_mz(z,'view',['ariaLabel',3,'ariaRole',1,'class',2],[],oFJ,hEJ,gg)
var aJJ=_mz(z,'g-form-item',['componentClass',6,'disabled',1],[],oFJ,hEJ,gg)
var tKJ=_mz(z,'g-icon',['class',8,'size',1,'type',2],[],oFJ,hEJ,gg)
_(aJJ,tKJ)
_(lIJ,aJJ)
var eLJ=_mz(z,'view',['catch:tap',11,'class',1,'data-item',2],[],oFJ,hEJ,gg)
var bMJ=_v()
_(eLJ,bMJ)
if(_oz(z,14,oFJ,hEJ,gg)){bMJ.wxVkey=1
var oNJ=_mz(z,'g-icon',['class',15,'size',1,'type',2],[],oFJ,hEJ,gg)
_(bMJ,oNJ)
}
bMJ.wxXCkey=1
bMJ.wxXCkey=3
_(lIJ,eLJ)
_(cGJ,lIJ)
return cGJ
}
fCJ.wxXCkey=4
_2z(z,1,cDJ,e,s,gg,fCJ,'item','index','{{index}}')
_(r,oBJ)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
var oPJ=_mz(z,'g-cascader',['bind:change',0,'bind:close',1,'bind:columnChange',1,'range',2,'value',3,'visible',4],[],e,s,gg)
_(r,oPJ)
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var cRJ=_mz(z,'picker',['bind:columnchange',0,'bindchange',1,'mode',1,'range',2,'rangeKey',3,'value',4],[],e,s,gg)
var hSJ=_n('slot')
_(cRJ,hSJ)
_(r,cRJ)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
var cUJ=_n('view')
_rz(z,cUJ,'class',0,e,s,gg)
var lWJ=_n('view')
_rz(z,lWJ,'class',1,e,s,gg)
var tYJ=_mz(z,'g-icon',['class',2,'size',1,'type',2],[],e,s,gg)
_(lWJ,tYJ)
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,5,e,s,gg)){aXJ.wxVkey=1
var eZJ=_mz(z,'g-icon',['catch:tap',6,'class',1,'size',2,'type',3],[],e,s,gg)
_(aXJ,eZJ)
}
aXJ.wxXCkey=1
aXJ.wxXCkey=3
_(cUJ,lWJ)
var oVJ=_v()
_(cUJ,oVJ)
if(_oz(z,10,e,s,gg)){oVJ.wxVkey=1
}
oVJ.wxXCkey=1
_(r,cUJ)
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
var x3J=_mz(z,'g-poplayer',['bind:close',0,'visible',1],[],e,s,gg)
_(r,x3J)
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
var f5J=_mz(z,'g-form-item',['componentClass',0,'disabled',1,'required',1],[],e,s,gg)
var c6J=_v()
_(f5J,c6J)
if(_oz(z,3,e,s,gg)){c6J.wxVkey=1
}
c6J.wxXCkey=1
_(r,f5J)
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
var o8J=_n('slot')
_(r,o8J)
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var o0J=_n('view')
_rz(z,o0J,'class',0,e,s,gg)
var lAK=_v()
_(o0J,lAK)
if(_oz(z,1,e,s,gg)){lAK.wxVkey=1
var aBK=_n('g-table-header')
_rz(z,aBK,'columns',2,e,s,gg)
_(lAK,aBK)
var tCK=_mz(z,'g-table-body',['columns',3,'data',1],[],e,s,gg)
_(lAK,tCK)
}
else{lAK.wxVkey=2
var eDK=_mz(z,'g-table-scroll',['columns',5,'data',1],[],e,s,gg)
_(lAK,eDK)
}
lAK.wxXCkey=1
lAK.wxXCkey=3
lAK.wxXCkey=3
_(r,o0J)
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
d_[x[55]]["tabsHeader"]=function(e,s,r,gg){
var z=gz$gwx_56()
var b=x[55]+':tabsHeader'
r.wxVkey=b
gg.f=$gdc(f_["./components/gsd-ui/g-tabs/index.wxml"],"",1)
if(p_[b]){_wl(b,x[55]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
var fIK=_n('view')
_rz(z,fIK,'class',0,e,s,gg)
var cJK=_mz(z,'view',['class',1,'id',1,'style',2],[],e,s,gg)
var hKK=_v()
_(cJK,hKK)
if(_oz(z,4,e,s,gg)){hKK.wxVkey=1
var oLK=_v()
_(hKK,oLK)
var cMK=_oz(z,6,e,s,gg)
var oNK=_gd(x[55],cMK,e_,d_)
if(oNK){
var lOK=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
oLK.wxXCkey=3
oNK(lOK,lOK,oLK,gg)
gg.f=cur_globalf
}
else _w(cMK,x[55],7,24)
}
else{hKK.wxVkey=2
var aPK=_v()
_(hKK,aPK)
var tQK=_oz(z,8,e,s,gg)
var eRK=_gd(x[55],tQK,e_,d_)
if(eRK){
var bSK=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
aPK.wxXCkey=3
eRK(bSK,bSK,aPK,gg)
gg.f=cur_globalf
}
else _w(tQK,x[55],13,20)
}
hKK.wxXCkey=1
_(fIK,cJK)
var oTK=_n('slot')
_(fIK,oTK)
_(r,fIK)
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
var oVK=_mz(z,'g-form-item',['disabled',0,'label',1,'required',1,'status',2,'statusMessage',3],[],e,s,gg)
var fWK=_n('slot')
_rz(z,fWK,'name',5,e,s,gg)
_(oVK,fWK)
_(r,oVK)
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
var hYK=_n('view')
_rz(z,hYK,'class',0,e,s,gg)
var oZK=_n('view')
_rz(z,oZK,'class',1,e,s,gg)
var c1K=_v()
_(oZK,c1K)
if(_oz(z,2,e,s,gg)){c1K.wxVkey=1
}
else{c1K.wxVkey=2
var o2K=_mz(z,'g-icon',['size',3,'type',1],[],e,s,gg)
_(c1K,o2K)
}
c1K.wxXCkey=1
c1K.wxXCkey=3
_(hYK,oZK)
var l3K=_n('slot')
_(hYK,l3K)
_(r,hYK)
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
var t5K=_n('slot')
_(r,t5K)
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
d_[x[59]]={}
var m59=function(e,s,r,gg){
var z=gz$gwx_60()
var b7K=_v()
_(r,b7K)
if(_oz(z,0,e,s,gg)){b7K.wxVkey=1
var o8K=_mz(z,'view',['catch:tap',1,'class',1,'hoverClass',2,'hoverStayTime',3,'style',4],[],e,s,gg)
var x9K=_n('view')
_rz(z,x9K,'class',6,e,s,gg)
var cBL=_n('slot')
_(x9K,cBL)
var o0K=_v()
_(x9K,o0K)
if(_oz(z,7,e,s,gg)){o0K.wxVkey=1
var hCL=_mz(z,'g-icon',['catch:tap',8,'class',1,'color',2,'size',3,'type',4],[],e,s,gg)
_(o0K,hCL)
}
var fAL=_v()
_(x9K,fAL)
if(_oz(z,13,e,s,gg)){fAL.wxVkey=1
var oDL=_mz(z,'g-icon',['class',14,'color',1,'size',2,'type',3],[],e,s,gg)
_(fAL,oDL)
}
o0K.wxXCkey=1
o0K.wxXCkey=3
fAL.wxXCkey=1
fAL.wxXCkey=3
_(o8K,x9K)
_(b7K,o8K)
}
b7K.wxXCkey=1
b7K.wxXCkey=3
return r
}
e_[x[59]]={f:m59,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m60=function(e,s,r,gg){
var z=gz$gwx_61()
var oFL=_n('view')
_rz(z,oFL,'class',0,e,s,gg)
var lGL=_v()
_(oFL,lGL)
if(_oz(z,1,e,s,gg)){lGL.wxVkey=1
var aHL=_mz(z,'g-circle',['current',2,'status',1,'total',2],[],e,s,gg)
_(lGL,aHL)
}
var tIL=_n('slot')
_(oFL,tIL)
lGL.wxXCkey=1
lGL.wxXCkey=3
_(r,oFL)
return r
}
e_[x[60]]={f:m60,j:[],i:[],ti:[],ic:[]}
d_[x[61]]={}
var m61=function(e,s,r,gg){
var z=gz$gwx_62()
var bKL=_mz(z,'g-form-item',['disabled',0,'label',1,'required',1,'status',2,'statusMessage',3],[],e,s,gg)
var oLL=_n('view')
_rz(z,oLL,'class',5,e,s,gg)
var oNL=_v()
_(oLL,oNL)
var fOL=function(hQL,cPL,oRL,gg){
var oTL=_mz(z,'view',['catch:tap',8,'data-item',1],[],hQL,cPL,gg)
var lUL=_v()
_(oTL,lUL)
if(_oz(z,10,hQL,cPL,gg)){lUL.wxVkey=1
var aVL=_n('view')
_rz(z,aVL,'class',11,hQL,cPL,gg)
var tWL=_v()
_(aVL,tWL)
if(_oz(z,12,hQL,cPL,gg)){tWL.wxVkey=1
}
var eXL=_v()
_(aVL,eXL)
if(_oz(z,13,hQL,cPL,gg)){eXL.wxVkey=1
}
var bYL=_v()
_(aVL,bYL)
if(_oz(z,14,hQL,cPL,gg)){bYL.wxVkey=1
}
tWL.wxXCkey=1
eXL.wxXCkey=1
bYL.wxXCkey=1
_(lUL,aVL)
}
lUL.wxXCkey=1
_(oRL,oTL)
return oRL
}
oNL.wxXCkey=2
_2z(z,6,fOL,e,s,gg,oNL,'item','index','filePath')
var xML=_v()
_(oLL,xML)
if(_oz(z,15,e,s,gg)){xML.wxVkey=1
var oZL=_mz(z,'view',['bind:tap',16,'class',1,'hoverClass',2],[],e,s,gg)
var x1L=_mz(z,'g-icon',['size',19,'type',1],[],e,s,gg)
_(oZL,x1L)
_(xML,oZL)
}
xML.wxXCkey=1
xML.wxXCkey=3
_(bKL,oLL)
_(r,bKL)
return r
}
e_[x[61]]={f:m61,j:[],i:[],ti:[],ic:[]}
d_[x[62]]={}
var m62=function(e,s,r,gg){
var z=gz$gwx_63()
var f3L=_n('view')
_rz(z,f3L,'class',0,e,s,gg)
var c4L=_v()
_(f3L,c4L)
if(_oz(z,1,e,s,gg)){c4L.wxVkey=1
var o6L=_n('view')
_rz(z,o6L,'class',2,e,s,gg)
var c7L=_v()
_(o6L,c7L)
if(_oz(z,3,e,s,gg)){c7L.wxVkey=1
}
var o8L=_n('slot')
_rz(z,o8L,'name',4,e,s,gg)
_(o6L,o8L)
c7L.wxXCkey=1
_(c4L,o6L)
}
var l9L=_n('view')
_rz(z,l9L,'class',5,e,s,gg)
var a0L=_n('slot')
_rz(z,a0L,'name',6,e,s,gg)
_(l9L,a0L)
var tAM=_n('slot')
_(l9L,tAM)
_(f3L,l9L)
var h5L=_v()
_(f3L,h5L)
if(_oz(z,7,e,s,gg)){h5L.wxVkey=1
}
c4L.wxXCkey=1
h5L.wxXCkey=1
_(r,f3L)
return r
}
e_[x[62]]={f:m62,j:[],i:[],ti:[],ic:[]}
d_[x[63]]={}
var m63=function(e,s,r,gg){
var z=gz$gwx_64()
var bCM=_n('view')
_rz(z,bCM,'class',0,e,s,gg)
var xEM=_mz(z,'g-icon',['class',1,'color',1,'size',2,'type',3],[],e,s,gg)
_(bCM,xEM)
var oFM=_n('slot')
_(bCM,oFM)
var oDM=_v()
_(bCM,oDM)
if(_oz(z,5,e,s,gg)){oDM.wxVkey=1
}
oDM.wxXCkey=1
_(r,bCM)
return r
}
e_[x[63]]={f:m63,j:[],i:[],ti:[],ic:[]}
d_[x[64]]={}
var m64=function(e,s,r,gg){
var z=gz$gwx_65()
var cHM=_n('view')
var hIM=_v()
_(cHM,hIM)
if(_oz(z,0,e,s,gg)){hIM.wxVkey=1
}
var oJM=_n('slot')
_(cHM,oJM)
hIM.wxXCkey=1
_(r,cHM)
return r
}
e_[x[64]]={f:m64,j:[],i:[],ti:[],ic:[]}
d_[x[65]]={}
var m65=function(e,s,r,gg){
var z=gz$gwx_66()
return r
}
e_[x[65]]={f:m65,j:[],i:[],ti:[],ic:[]}
d_[x[66]]={}
var m66=function(e,s,r,gg){
var z=gz$gwx_67()
var lMM=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'style',3],[],e,s,gg)
var aNM=_n('slot')
_(lMM,aNM)
_(r,lMM)
return r
}
e_[x[66]]={f:m66,j:[],i:[],ti:[],ic:[]}
d_[x[67]]={}
var m67=function(e,s,r,gg){
var z=gz$gwx_68()
var ePM=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var bQM=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var oRM=_v()
_(bQM,oRM)
if(_oz(z,4,e,s,gg)){oRM.wxVkey=1
}
else{oRM.wxVkey=2
var xSM=_n('slot')
_rz(z,xSM,'name',5,e,s,gg)
_(oRM,xSM)
}
oRM.wxXCkey=1
_(ePM,bQM)
var oTM=_n('view')
_rz(z,oTM,'class',6,e,s,gg)
var fUM=_v()
_(oTM,fUM)
if(_oz(z,7,e,s,gg)){fUM.wxVkey=1
}
var cVM=_v()
_(oTM,cVM)
if(_oz(z,8,e,s,gg)){cVM.wxVkey=1
}
else{cVM.wxVkey=2
var hWM=_n('slot')
_rz(z,hWM,'name',9,e,s,gg)
_(cVM,hWM)
}
fUM.wxXCkey=1
cVM.wxXCkey=1
_(ePM,oTM)
var oXM=_n('slot')
_rz(z,oXM,'name',10,e,s,gg)
_(ePM,oXM)
_(r,ePM)
return r
}
e_[x[67]]={f:m67,j:[],i:[],ti:[],ic:[]}
d_[x[68]]={}
var m68=function(e,s,r,gg){
var z=gz$gwx_69()
return r
}
e_[x[68]]={f:m68,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m69=function(e,s,r,gg){
var z=gz$gwx_70()
var l1M=_n('view')
_rz(z,l1M,'bindtap',0,e,s,gg)
var a2M=_n('slot')
_(l1M,a2M)
_(r,l1M)
var t3M=_mz(z,'we-canvas',['bind:fail',1,'bind:success',1,'id',2],[],e,s,gg)
_(r,t3M)
return r
}
e_[x[69]]={f:m69,j:[],i:[],ti:[],ic:[]}
d_[x[70]]={}
var m70=function(e,s,r,gg){
var z=gz$gwx_71()
return r
}
e_[x[70]]={f:m70,j:[],i:[],ti:[],ic:[]}
d_[x[71]]={}
var m71=function(e,s,r,gg){
var z=gz$gwx_72()
return r
}
e_[x[71]]={f:m71,j:[],i:[],ti:[],ic:[]}
d_[x[72]]={}
var m72=function(e,s,r,gg){
var z=gz$gwx_73()
var x7M=_mz(z,'g-search',['bind:change',0,'bind:confirm',1,'placeholder',1,'value',2],[],e,s,gg)
_(r,x7M)
var o8M=_mz(z,'swiper',['bindchange',4,'class',1,'current',2,'duration',3,'style',4],[],e,s,gg)
var f9M=_n('swiper-item')
var hAN=_v()
_(f9M,hAN)
var oBN=function(oDN,cCN,lEN,gg){
var tGN=_v()
_(lEN,tGN)
if(_oz(z,10,oDN,cCN,gg)){tGN.wxVkey=1
}
tGN.wxXCkey=1
return lEN
}
hAN.wxXCkey=2
_2z(z,9,oBN,e,s,gg,hAN,'item','index','')
var c0M=_v()
_(f9M,c0M)
if(_oz(z,11,e,s,gg)){c0M.wxVkey=1
}
c0M.wxXCkey=1
_(o8M,f9M)
var eHN=_n('swiper-item')
var oJN=_v()
_(eHN,oJN)
var xKN=function(fMN,oLN,cNN,gg){
var oPN=_v()
_(cNN,oPN)
if(_oz(z,13,fMN,oLN,gg)){oPN.wxVkey=1
}
oPN.wxXCkey=1
return cNN
}
oJN.wxXCkey=2
_2z(z,12,xKN,e,s,gg,oJN,'item','index','')
var bIN=_v()
_(eHN,bIN)
if(_oz(z,14,e,s,gg)){bIN.wxVkey=1
}
bIN.wxXCkey=1
_(o8M,eHN)
var cQN=_n('swiper-item')
var lSN=_v()
_(cQN,lSN)
var aTN=function(eVN,tUN,bWN,gg){
var xYN=_v()
_(bWN,xYN)
if(_oz(z,16,eVN,tUN,gg)){xYN.wxVkey=1
}
xYN.wxXCkey=1
return bWN
}
lSN.wxXCkey=2
_2z(z,15,aTN,e,s,gg,lSN,'item','index','')
var oRN=_v()
_(cQN,oRN)
if(_oz(z,17,e,s,gg)){oRN.wxVkey=1
}
oRN.wxXCkey=1
_(o8M,cQN)
_(r,o8M)
return r
}
e_[x[72]]={f:m72,j:[],i:[],ti:[],ic:[]}
d_[x[73]]={}
var m73=function(e,s,r,gg){
var z=gz$gwx_74()
var f1N=_v()
_(r,f1N)
if(_oz(z,0,e,s,gg)){f1N.wxVkey=1
}
f1N.wxXCkey=1
return r
}
e_[x[73]]={f:m73,j:[],i:[],ti:[],ic:[]}
d_[x[74]]={}
var m74=function(e,s,r,gg){
var z=gz$gwx_75()
var h3N=_n('g-wrapper')
var o4N=_v()
_(h3N,o4N)
var c5N=function(l7N,o6N,a8N,gg){
var e0N=_mz(z,'g-cell',['access',-1,'bind:tap',2,'data-item',1,'desc',2,'label',3],[],l7N,o6N,gg)
_(a8N,e0N)
return a8N
}
o4N.wxXCkey=4
_2z(z,0,c5N,e,s,gg,o4N,'item','index','appId')
_(r,h3N)
return r
}
e_[x[74]]={f:m74,j:[],i:[],ti:[],ic:[]}
d_[x[75]]={}
var m75=function(e,s,r,gg){
var z=gz$gwx_76()
var oBO=_n('g-wrapper')
var xCO=_n('g-cell')
_(oBO,xCO)
var oDO=_n('g-cell')
_(oBO,oDO)
_(r,oBO)
var fEO=_mz(z,'g-button-group',['fixed',-1,'bind:primaryTap',0,'primaryText',1],[],e,s,gg)
_(r,fEO)
return r
}
e_[x[75]]={f:m75,j:[],i:[],ti:[],ic:[]}
d_[x[76]]={}
var m76=function(e,s,r,gg){
var z=gz$gwx_77()
var hGO=_mz(z,'g-form',['bind:submit',0,'model',1,'primaryText',1,'rules',2,'validateType',3],[],e,s,gg)
var oHO=_n('view')
_rz(z,oHO,'slot',5,e,s,gg)
var cIO=_n('g-wrapper')
_rz(z,cIO,'title',6,e,s,gg)
var oJO=_v()
_(cIO,oJO)
var lKO=function(tMO,aLO,eNO,gg){
var oPO=_n('view')
_rz(z,oPO,'class',9,tMO,aLO,gg)
var xQO=_mz(z,'g-picker',['required',-1,'bind:change',10,'id',1,'label',2,'placeholder',3,'range',4,'value',5],[],tMO,aLO,gg)
_(oPO,xQO)
var oRO=_mz(z,'g-input',['required',-1,'bind:change',16,'id',1,'label',2,'placeholder',3,'type',4,'value',5],[],tMO,aLO,gg)
_(oPO,oRO)
_(eNO,oPO)
return eNO
}
oJO.wxXCkey=4
_2z(z,7,lKO,e,s,gg,oJO,'item','index','{{index}}')
_(oHO,cIO)
var fSO=_n('g-wrapper')
_rz(z,fSO,'title',22,e,s,gg)
var cTO=_mz(z,'g-input',['required',-1,'bind:change',23,'id',1,'label',2,'placeholder',3,'value',4],[],e,s,gg)
_(fSO,cTO)
var hUO=_mz(z,'g-input',['required',-1,'bind:change',28,'id',1,'label',2,'placeholder',3,'value',4],[],e,s,gg)
_(fSO,hUO)
var oVO=_mz(z,'g-input',['required',-1,'bind:change',33,'id',1,'label',2,'placeholder',3,'type',4,'value',5],[],e,s,gg)
_(fSO,oVO)
var cWO=_mz(z,'g-textarea',['bind:change',39,'id',1,'label',2,'placeholder',3,'required',4,'value',5],[],e,s,gg)
_(fSO,cWO)
_(oHO,fSO)
_(hGO,oHO)
_(r,hGO)
return r
}
e_[x[76]]={f:m76,j:[],i:[],ti:[],ic:[]}
d_[x[77]]={}
var m77=function(e,s,r,gg){
var z=gz$gwx_78()
var lYO=_mz(z,'g-button-group',['agree',-1,'fixed',-1,'bind:primaryTap',0,'primaryText',1],[],e,s,gg)
_(r,lYO)
return r
}
e_[x[77]]={f:m77,j:[],i:[],ti:[],ic:[]}
d_[x[78]]={}
var m78=function(e,s,r,gg){
var z=gz$gwx_79()
var t1O=_mz(z,'g-msg',['footerFixed',-1,'bind:primaryTap',0,'bind:secondTap',1,'desc',1,'primaryText',2,'secondText',3,'status',4,'title',5],[],e,s,gg)
_(r,t1O)
return r
}
e_[x[78]]={f:m78,j:[],i:[],ti:[],ic:[]}
d_[x[79]]={}
var m79=function(e,s,r,gg){
var z=gz$gwx_80()
var b3O=_n('view')
var o4O=_n('mp-lazy-load')
_rz(z,o4O,'images',0,e,s,gg)
_(b3O,o4O)
var x5O=_n('view')
_rz(z,x5O,'class',1,e,s,gg)
var o6O=_v()
_(x5O,o6O)
if(_oz(z,2,e,s,gg)){o6O.wxVkey=1
}
var f7O=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var c8O=_v()
_(f7O,c8O)
if(_oz(z,5,e,s,gg)){c8O.wxVkey=1
var h9O=_mz(z,'g-icon',['color',6,'size',1,'type',2],[],e,s,gg)
_(c8O,h9O)
}
c8O.wxXCkey=1
c8O.wxXCkey=3
_(x5O,f7O)
var o0O=_mz(z,'view',['bindtap',9,'class',1],[],e,s,gg)
var cAP=_v()
_(o0O,cAP)
if(_oz(z,11,e,s,gg)){cAP.wxVkey=1
var oBP=_mz(z,'g-icon',['color',12,'size',1,'type',2],[],e,s,gg)
_(cAP,oBP)
}
cAP.wxXCkey=1
cAP.wxXCkey=3
_(x5O,o0O)
o6O.wxXCkey=1
_(b3O,x5O)
_(r,b3O)
return r
}
e_[x[79]]={f:m79,j:[],i:[],ti:[],ic:[]}
d_[x[80]]={}
var m80=function(e,s,r,gg){
var z=gz$gwx_81()
var aDP=_v()
_(r,aDP)
var tEP=function(bGP,eFP,oHP,gg){
var oJP=_v()
_(oHP,oJP)
var fKP=function(hMP,cLP,oNP,gg){
var oPP=_mz(z,'g-cell',['access',-1,'bindtap',6,'data-chapterindex',1,'data-imagheight',2,'data-sectionindex',3],[],hMP,cLP,gg)
_(oNP,oPP)
return oNP
}
oJP.wxXCkey=4
_2z(z,4,fKP,bGP,eFP,gg,oJP,'section','sectionindex','section')
return oHP
}
aDP.wxXCkey=4
_2z(z,0,tEP,e,s,gg,aDP,'item','index','item')
return r
}
e_[x[80]]={f:m80,j:[],i:[],ti:[],ic:[]}
d_[x[81]]={}
var m81=function(e,s,r,gg){
var z=gz$gwx_82()
return r
}
e_[x[81]]={f:m81,j:[],i:[],ti:[],ic:[]}
d_[x[82]]={}
d_[x[82]]["tabNew"]=function(e,s,r,gg){
var z=gz$gwx_83()
var b=x[82]+':tabNew'
r.wxVkey=b
gg.f=$gdc(f_["./pages/manage-company/index.wxml"],"",1)
if(p_[b]){_wl(b,x[82]);return}
p_[b]=true
try{
var oB=_n('g-wrapper')
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,24,hG,cF,gg)){oJ.wxVkey=1
var lK=_mz(z,'g-cell',['bindtap',25,'data-item',1],[],hG,cF,gg)
var aL=_n('view')
_rz(z,aL,'slot',27,hG,cF,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,28,hG,cF,gg)){tM.wxVkey=1
}
tM.wxXCkey=1
_(lK,aL)
var eN=_n('view')
_rz(z,eN,'slot',29,hG,cF,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,30,hG,cF,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
_(lK,eN)
_(oJ,lK)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
return oH
}
oD.wxXCkey=4
_2z(z,23,fE,e,s,gg,oD,'item','index','')
var xC=_v()
_(oB,xC)
if(_oz(z,31,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m82=function(e,s,r,gg){
var z=gz$gwx_83()
var tSP=_v()
_(r,tSP)
if(_oz(z,0,e,s,gg)){tSP.wxVkey=1
var bUP=_n('view')
var oVP=_mz(z,'g-search',['bind:change',1,'bind:confirm',1,'placeholder',2,'value',3],[],e,s,gg)
_(bUP,oVP)
var xWP=_mz(z,'g-tabs',['activeKey',5,'animated',1,'bind:change',2,'data-key',3,'position',4],[],e,s,gg)
var oXP=_mz(z,'g-tab-pane',['key',10,'tab',1],[],e,s,gg)
var fYP=_v()
_(oXP,fYP)
var cZP=_oz(z,13,e,s,gg)
var h1P=_gd(x[82],cZP,e_,d_)
if(h1P){
var o2P=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
fYP.wxXCkey=3
h1P(o2P,o2P,fYP,gg)
gg.f=cur_globalf
}
else _w(cZP,x[82],6,18)
_(xWP,oXP)
var c3P=_mz(z,'g-tab-pane',['key',14,'tab',1],[],e,s,gg)
var o4P=_v()
_(c3P,o4P)
var l5P=_oz(z,17,e,s,gg)
var a6P=_gd(x[82],l5P,e_,d_)
if(a6P){
var t7P=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
o4P.wxXCkey=3
a6P(t7P,t7P,o4P,gg)
gg.f=cur_globalf
}
else _w(l5P,x[82],9,18)
_(xWP,c3P)
var e8P=_mz(z,'g-tab-pane',['key',18,'tab',1],[],e,s,gg)
var b9P=_v()
_(e8P,b9P)
var o0P=_oz(z,21,e,s,gg)
var xAQ=_gd(x[82],o0P,e_,d_)
if(xAQ){
var oBQ=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
b9P.wxXCkey=3
xAQ(oBQ,oBQ,b9P,gg)
gg.f=cur_globalf
}
else _w(o0P,x[82],12,18)
_(xWP,e8P)
_(bUP,xWP)
_(tSP,bUP)
}
var eTP=_v()
_(r,eTP)
if(_oz(z,32,e,s,gg)){eTP.wxVkey=1
var fCQ=_n('g-footer')
fCQ.attr['fixed']=true
_(eTP,fCQ)
}
tSP.wxXCkey=1
tSP.wxXCkey=3
eTP.wxXCkey=1
eTP.wxXCkey=3
return r
}
e_[x[82]]={f:m82,j:[],i:[],ti:[],ic:[]}
d_[x[83]]={}
d_[x[83]]["tabNew"]=function(e,s,r,gg){
var z=gz$gwx_84()
var b=x[83]+':tabNew'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mine/company/list/index.wxml"],"",1)
if(p_[b]){_wl(b,x[83]);return}
p_[b]=true
try{
var oB=_n('g-wrapper')
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,5,hG,cF,gg)){oJ.wxVkey=1
var lK=_mz(z,'g-cell',['bindtap',6,'data-item',1],[],hG,cF,gg)
var aL=_n('view')
_rz(z,aL,'slot',8,hG,cF,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,9,hG,cF,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,10,hG,cF,gg)){eN.wxVkey=1
}
var bO=_v()
_(aL,bO)
if(_oz(z,11,hG,cF,gg)){bO.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(lK,aL)
_(oJ,lK)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
return oH
}
oD.wxXCkey=4
_2z(z,3,fE,e,s,gg,oD,'item','index','companyId')
var xC=_v()
_(oB,xC)
if(_oz(z,12,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m83=function(e,s,r,gg){
var z=gz$gwx_84()
var hEQ=_v()
_(r,hEQ)
var oFQ=_oz(z,1,e,s,gg)
var cGQ=_gd(x[83],oFQ,e_,d_)
if(cGQ){
var oHQ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hEQ.wxXCkey=3
cGQ(oHQ,oHQ,hEQ,gg)
gg.f=cur_globalf
}
else _w(oFQ,x[83],1,13)
return r
}
e_[x[83]]={f:m83,j:[],i:[],ti:[],ic:[]}
d_[x[84]]={}
var m84=function(e,s,r,gg){
var z=gz$gwx_85()
var aJQ=_n('view')
_rz(z,aJQ,'class',0,e,s,gg)
var eLQ=_v()
_(aJQ,eLQ)
var bMQ=function(xOQ,oNQ,oPQ,gg){
var cRQ=_v()
_(oPQ,cRQ)
if(_oz(z,3,xOQ,oNQ,gg)){cRQ.wxVkey=1
var hSQ=_n('view')
_rz(z,hSQ,'class',4,xOQ,oNQ,gg)
var oTQ=_v()
_(hSQ,oTQ)
if(_oz(z,5,xOQ,oNQ,gg)){oTQ.wxVkey=1
}
var cUQ=_v()
_(hSQ,cUQ)
if(_oz(z,6,xOQ,oNQ,gg)){cUQ.wxVkey=1
}
var oVQ=_v()
_(hSQ,oVQ)
if(_oz(z,7,xOQ,oNQ,gg)){oVQ.wxVkey=1
}
oTQ.wxXCkey=1
cUQ.wxXCkey=1
oVQ.wxXCkey=1
_(cRQ,hSQ)
}
cRQ.wxXCkey=1
return oPQ
}
eLQ.wxXCkey=2
_2z(z,1,bMQ,e,s,gg,eLQ,'item','index','{{index}}')
var tKQ=_v()
_(aJQ,tKQ)
if(_oz(z,8,e,s,gg)){tKQ.wxVkey=1
}
tKQ.wxXCkey=1
_(r,aJQ)
return r
}
e_[x[84]]={f:m84,j:[],i:[],ti:[],ic:[]}
d_[x[85]]={}
var m85=function(e,s,r,gg){
var z=gz$gwx_86()
return r
}
e_[x[85]]={f:m85,j:[],i:[],ti:[],ic:[]}
d_[x[86]]={}
var m86=function(e,s,r,gg){
var z=gz$gwx_87()
var tYQ=_v()
_(r,tYQ)
if(_oz(z,0,e,s,gg)){tYQ.wxVkey=1
}
var eZQ=_v()
_(r,eZQ)
if(_oz(z,1,e,s,gg)){eZQ.wxVkey=1
var x3Q=_n('view')
_rz(z,x3Q,'class',2,e,s,gg)
var o4Q=_v()
_(x3Q,o4Q)
if(_oz(z,3,e,s,gg)){o4Q.wxVkey=1
var tCR=_mz(z,'g-cell',['access',4,'to',1],[],e,s,gg)
var eDR=_mz(z,'view',['class',6,'slot',1],[],e,s,gg)
var bER=_v()
_(eDR,bER)
if(_oz(z,8,e,s,gg)){bER.wxVkey=1
}
var oFR=_v()
_(eDR,oFR)
if(_oz(z,9,e,s,gg)){oFR.wxVkey=1
}
bER.wxXCkey=1
oFR.wxXCkey=1
_(tCR,eDR)
_(o4Q,tCR)
}
var f5Q=_v()
_(x3Q,f5Q)
if(_oz(z,10,e,s,gg)){f5Q.wxVkey=1
var xGR=_mz(z,'g-cell',['access',11,'label',1,'to',2],[],e,s,gg)
_(f5Q,xGR)
}
var c6Q=_v()
_(x3Q,c6Q)
if(_oz(z,14,e,s,gg)){c6Q.wxVkey=1
var oHR=_mz(z,'g-cell',['access',15,'label',1,'to',2],[],e,s,gg)
_(c6Q,oHR)
}
var h7Q=_v()
_(x3Q,h7Q)
if(_oz(z,18,e,s,gg)){h7Q.wxVkey=1
var fIR=_mz(z,'g-cell',['access',19,'label',1,'to',2],[],e,s,gg)
_(h7Q,fIR)
}
var o8Q=_v()
_(x3Q,o8Q)
if(_oz(z,22,e,s,gg)){o8Q.wxVkey=1
var cJR=_mz(z,'g-cell',['access',23,'label',1,'to',2],[],e,s,gg)
_(o8Q,cJR)
}
var c9Q=_v()
_(x3Q,c9Q)
if(_oz(z,26,e,s,gg)){c9Q.wxVkey=1
var hKR=_mz(z,'g-cell',['access',27,'label',1,'to',2],[],e,s,gg)
_(c9Q,hKR)
}
var o0Q=_v()
_(x3Q,o0Q)
if(_oz(z,30,e,s,gg)){o0Q.wxVkey=1
var oLR=_mz(z,'g-cell',['access',31,'label',1,'to',2],[],e,s,gg)
_(o0Q,oLR)
}
var lAR=_v()
_(x3Q,lAR)
if(_oz(z,34,e,s,gg)){lAR.wxVkey=1
var cMR=_mz(z,'g-cell',['access',35,'bind:tap',1,'label',2],[],e,s,gg)
_(lAR,cMR)
}
var aBR=_v()
_(x3Q,aBR)
if(_oz(z,38,e,s,gg)){aBR.wxVkey=1
var oNR=_mz(z,'g-cell',['access',39,'bind:tap',1,'label',2],[],e,s,gg)
_(aBR,oNR)
}
o4Q.wxXCkey=1
o4Q.wxXCkey=3
f5Q.wxXCkey=1
f5Q.wxXCkey=3
c6Q.wxXCkey=1
c6Q.wxXCkey=3
h7Q.wxXCkey=1
h7Q.wxXCkey=3
o8Q.wxXCkey=1
o8Q.wxXCkey=3
c9Q.wxXCkey=1
c9Q.wxXCkey=3
o0Q.wxXCkey=1
o0Q.wxXCkey=3
lAR.wxXCkey=1
lAR.wxXCkey=3
aBR.wxXCkey=1
aBR.wxXCkey=3
_(eZQ,x3Q)
var b1Q=_v()
_(eZQ,b1Q)
if(_oz(z,42,e,s,gg)){b1Q.wxVkey=1
var lOR=_mz(z,'g-cell',['access',43,'bind:tap',1,'label',2],[],e,s,gg)
_(b1Q,lOR)
}
var o2Q=_v()
_(eZQ,o2Q)
if(_oz(z,46,e,s,gg)){o2Q.wxVkey=1
var aPR=_n('view')
_rz(z,aPR,'class',47,e,s,gg)
var tQR=_mz(z,'g-cell',['access',-1,'label',48],[],e,s,gg)
_(aPR,tQR)
var eRR=_mz(z,'g-cell',['access',-1,'label',49],[],e,s,gg)
_(aPR,eRR)
var bSR=_mz(z,'g-cell',['access',50,'catchtap',1,'label',2],[],e,s,gg)
_(aPR,bSR)
_(o2Q,aPR)
}
var oTR=_mz(z,'g-footer',['fixed',53,'sponsor',1,'supportor',2],[],e,s,gg)
_(eZQ,oTR)
b1Q.wxXCkey=1
b1Q.wxXCkey=3
o2Q.wxXCkey=1
o2Q.wxXCkey=3
}
tYQ.wxXCkey=1
eZQ.wxXCkey=1
eZQ.wxXCkey=3
return r
}
e_[x[86]]={f:m86,j:[],i:[],ti:[],ic:[]}
d_[x[87]]={}
var m87=function(e,s,r,gg){
var z=gz$gwx_88()
var oVR=_v()
_(r,oVR)
if(_oz(z,0,e,s,gg)){oVR.wxVkey=1
}
oVR.wxXCkey=1
return r
}
e_[x[87]]={f:m87,j:[],i:[],ti:[],ic:[]}
d_[x[88]]={}
var m88=function(e,s,r,gg){
var z=gz$gwx_89()
var cXR=_mz(z,'mp-navigation-bar',['animated',0,'back',1,'background',1,'color',2,'extClass',3,'loading',4,'show',5,'title',6],[],e,s,gg)
_(r,cXR)
var hYR=_v()
_(r,hYR)
var oZR=function(o2R,c1R,l3R,gg){
var t5R=_n('g-wrapper')
var e6R=_mz(z,'g-cell',['bind:tap',12,'data-index',1,'label',2],[],o2R,c1R,gg)
var b7R=_v()
_(e6R,b7R)
if(_oz(z,15,o2R,c1R,gg)){b7R.wxVkey=1
}
b7R.wxXCkey=1
_(t5R,e6R)
_(l3R,t5R)
return l3R
}
hYR.wxXCkey=4
_2z(z,10,oZR,e,s,gg,hYR,'value','index','index')
return r
}
e_[x[88]]={f:m88,j:[],i:[],ti:[],ic:[]}
d_[x[89]]={}
d_[x[89]]["tab-template-one"]=function(e,s,r,gg){
var z=gz$gwx_90()
var b=x[89]+':tab-template-one'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mine/todo/detail/detail.wxml"],"",1)
if(p_[b]){_wl(b,x[89]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,18,e,s,gg)){oB.wxVkey=1
var hG=_n('g-wrapper')
_rz(z,hG,'title',19,e,s,gg)
var oH=_n('g-preview')
_rz(z,oH,'textAlign',20,e,s,gg)
var cI=_v()
_(oH,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_v()
_(tM,bO)
if(_oz(z,23,aL,lK,gg)){bO.wxVkey=1
var oP=_mz(z,'g-preview-item',['breakWord',24,'label',1,'textAlign',2],[],aL,lK,gg)
_(bO,oP)
}
bO.wxXCkey=1
bO.wxXCkey=3
return tM
}
cI.wxXCkey=4
_2z(z,21,oJ,e,s,gg,cI,'item','index','item.key')
_(hG,oH)
_(oB,hG)
}
var xC=_v()
_(r,xC)
if(_oz(z,27,e,s,gg)){xC.wxVkey=1
var xQ=_mz(z,'g-wrapper',['labelWidth',28,'title',1],[],e,s,gg)
var fS=_n('g-preview')
_rz(z,fS,'textAlign',30,e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_v()
_(oX,aZ)
if(_oz(z,33,cW,oV,gg)){aZ.wxVkey=1
var t1=_mz(z,'g-preview-item',['breakWord',34,'label',1,'textAlign',2],[],cW,oV,gg)
_(aZ,t1)
}
aZ.wxXCkey=1
aZ.wxXCkey=3
return oX
}
cT.wxXCkey=4
_2z(z,31,hU,e,s,gg,cT,'item','index','item.key')
_(xQ,fS)
var oR=_v()
_(xQ,oR)
if(_oz(z,37,e,s,gg)){oR.wxVkey=1
var e2=_n('g-cell')
e2.attr['hasAppend']=true
_(oR,e2)
}
oR.wxXCkey=1
oR.wxXCkey=3
_(xC,xQ)
}
var oD=_v()
_(r,oD)
if(_oz(z,38,e,s,gg)){oD.wxVkey=1
var b3=_n('g-wrapper')
_rz(z,b3,'title',39,e,s,gg)
var o4=_n('g-preview')
_rz(z,o4,'textAlign',40,e,s,gg)
var x5=_v()
_(o4,x5)
var o6=function(c8,f7,h9,gg){
var cAB=_v()
_(h9,cAB)
if(_oz(z,43,c8,f7,gg)){cAB.wxVkey=1
var oBB=_mz(z,'g-preview-item',['label',44,'textAlign',1],[],c8,f7,gg)
_(cAB,oBB)
}
cAB.wxXCkey=1
cAB.wxXCkey=3
return h9
}
x5.wxXCkey=4
_2z(z,41,o6,e,s,gg,x5,'item','index','item.key')
_(b3,o4)
_(oD,b3)
}
var fE=_v()
_(r,fE)
if(_oz(z,46,e,s,gg)){fE.wxVkey=1
var lCB=_n('g-wrapper')
_rz(z,lCB,'title',47,e,s,gg)
var aDB=_n('g-preview')
_rz(z,aDB,'textAlign',48,e,s,gg)
var tEB=_v()
_(aDB,tEB)
var eFB=function(oHB,bGB,xIB,gg){
var fKB=_v()
_(xIB,fKB)
if(_oz(z,51,oHB,bGB,gg)){fKB.wxVkey=1
var cLB=_mz(z,'g-preview-item',['label',52,'textAlign',1],[],oHB,bGB,gg)
_(fKB,cLB)
}
fKB.wxXCkey=1
fKB.wxXCkey=3
return xIB
}
tEB.wxXCkey=4
_2z(z,49,eFB,e,s,gg,tEB,'item','index','item.key')
_(lCB,aDB)
_(fE,lCB)
}
var cF=_v()
_(r,cF)
if(_oz(z,54,e,s,gg)){cF.wxVkey=1
var hMB=_n('g-wrapper')
_rz(z,hMB,'title',55,e,s,gg)
var oNB=_n('g-preview')
_rz(z,oNB,'textAlign',56,e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_v()
_(tSB,bUB)
if(_oz(z,59,aRB,lQB,gg)){bUB.wxVkey=1
var oVB=_mz(z,'g-preview-item',['label',60,'textAlign',1],[],aRB,lQB,gg)
_(bUB,oVB)
}
bUB.wxXCkey=1
bUB.wxXCkey=3
return tSB
}
cOB.wxXCkey=4
_2z(z,57,oPB,e,s,gg,cOB,'item','index','item.key')
_(hMB,oNB)
_(cF,hMB)
}
var xWB=_n('g-wrapper')
_(r,xWB)
oB.wxXCkey=1
oB.wxXCkey=3
xC.wxXCkey=1
xC.wxXCkey=3
oD.wxXCkey=1
oD.wxXCkey=3
fE.wxXCkey=1
fE.wxXCkey=3
cF.wxXCkey=1
cF.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[89]]["tab-template-two"]=function(e,s,r,gg){
var z=gz$gwx_90()
var b=x[89]+':tab-template-two'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mine/todo/detail/detail.wxml"],"",1)
if(p_[b]){_wl(b,x[89]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m89=function(e,s,r,gg){
var z=gz$gwx_90()
var o0R=_v()
_(r,o0R)
var fAS=_oz(z,1,e,s,gg)
var cBS=_gd(x[89],fAS,e_,d_)
if(cBS){
var hCS=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0R.wxXCkey=3
cBS(hCS,hCS,o0R,gg)
gg.f=cur_globalf
}
else _w(fAS,x[89],1,13)
var oDS=_v()
_(r,oDS)
var cES=_oz(z,3,e,s,gg)
var oFS=_gd(x[89],cES,e_,d_)
if(oFS){
var lGS=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oDS.wxXCkey=3
oFS(lGS,lGS,oDS,gg)
gg.f=cur_globalf
}
else _w(cES,x[89],2,14)
var x9R=_v()
_(r,x9R)
if(_oz(z,4,e,s,gg)){x9R.wxVkey=1
var aHS=_mz(z,'g-form',['bind:second',5,'bind:submit',1,'model',2,'primaryText',3,'rules',4,'secondText',5],[],e,s,gg)
var tIS=_n('view')
_rz(z,tIS,'slot',11,e,s,gg)
var eJS=_n('g-wrapper')
_rz(z,eJS,'title',12,e,s,gg)
var bKS=_mz(z,'g-textarea',['bind:change',13,'id',1,'label',2,'value',3],[],e,s,gg)
_(eJS,bKS)
_(tIS,eJS)
_(aHS,tIS)
_(x9R,aHS)
}
x9R.wxXCkey=1
x9R.wxXCkey=3
return r
}
e_[x[89]]={f:m89,j:[],i:[],ti:[],ic:[]}
d_[x[90]]={}
d_[x[90]]["tabNew"]=function(e,s,r,gg){
var z=gz$gwx_91()
var b=x[90]+':tabNew'
r.wxVkey=b
gg.f=$gdc(f_["./pages/mine/todo/list/list.wxml"],"",1)
if(p_[b]){_wl(b,x[90]);return}
p_[b]=true
try{
var oB=_n('g-wrapper')
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,5,hG,cF,gg)){oJ.wxVkey=1
var lK=_mz(z,'g-cell',['access',-1,'bindtap',6,'data-item',1],[],hG,cF,gg)
var aL=_n('view')
_rz(z,aL,'slot',8,hG,cF,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,9,hG,cF,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,10,hG,cF,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(lK,aL)
_(oJ,lK)
}
oJ.wxXCkey=1
oJ.wxXCkey=3
return oH
}
oD.wxXCkey=4
_2z(z,3,fE,e,s,gg,oD,'item','index','item.id')
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m90=function(e,s,r,gg){
var z=gz$gwx_91()
var xMS=_v()
_(r,xMS)
var oNS=_oz(z,1,e,s,gg)
var fOS=_gd(x[90],oNS,e_,d_)
if(fOS){
var cPS=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
xMS.wxXCkey=3
fOS(cPS,cPS,xMS,gg)
gg.f=cur_globalf
}
else _w(oNS,x[90],36,14)
return r
}
e_[x[90]]={f:m90,j:[],i:[],ti:[],ic:[]}
d_[x[91]]={}
var m91=function(e,s,r,gg){
var z=gz$gwx_92()
return r
}
e_[x[91]]={f:m91,j:[],i:[],ti:[],ic:[]}
d_[x[92]]={}
var m92=function(e,s,r,gg){
var z=gz$gwx_93()
var oTS=_mz(z,'mp-navigation-bar',['animated',0,'back',1,'background',1,'color',2,'loading',3,'show',4,'title',5],[],e,s,gg)
_(r,oTS)
var cSS=_v()
_(r,cSS)
if(_oz(z,7,e,s,gg)){cSS.wxVkey=1
var lUS=_n('view')
var aVS=_mz(z,'g-banner',['current',8,'src',1],[],e,s,gg)
_(lUS,aVS)
var tWS=_n('g-wrapper')
var eXS=_mz(z,'g-cell',['bind:tap',10,'data-url',1,'desc',2,'label',3],[],e,s,gg)
_(tWS,eXS)
var bYS=_mz(z,'g-cell',['bind:tap',14,'data-url',1,'desc',2,'label',3],[],e,s,gg)
_(tWS,bYS)
_(lUS,tWS)
var oZS=_mz(z,'g-footer',['fixed',-1,'sponsor',18,'supportor',1],[],e,s,gg)
_(lUS,oZS)
_(cSS,lUS)
}
cSS.wxXCkey=1
cSS.wxXCkey=3
return r
}
e_[x[92]]={f:m92,j:[],i:[],ti:[],ic:[]}
d_[x[93]]={}
var m93=function(e,s,r,gg){
var z=gz$gwx_94()
var o2S=_v()
_(r,o2S)
if(_oz(z,0,e,s,gg)){o2S.wxVkey=1
var f3S=_mz(z,'g-form',['bind:submit',1,'disabled',1,'model',2,'primaryText',3,'rules',4,'validateType',5],[],e,s,gg)
var o6S=_n('g-wrapper')
_rz(z,o6S,'title',7,e,s,gg)
var l9S=_mz(z,'g-input',['required',-1,'bind:change',8,'data-form',1,'id',2,'label',3,'placeholder',4,'value',5],[],e,s,gg)
_(o6S,l9S)
var a0S=_mz(z,'g-input',['required',-1,'bind:change',14,'data-form',1,'id',2,'label',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(o6S,a0S)
var tAT=_mz(z,'g-picker',['required',-1,'actionText',21,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(o6S,tAT)
var eBT=_mz(z,'g-input',['required',-1,'bind:blur',29,'data-form',1,'id',2,'label',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(o6S,eBT)
var bCT=_mz(z,'g-picker',['required',-1,'actionText',36,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(o6S,bCT)
var oDT=_mz(z,'g-picker',['required',-1,'actionText',44,'bind:change',1,'data-form',2,'end',3,'id',4,'label',5,'mode',6,'placeholder',7,'start',8,'value',9],[],e,s,gg)
_(o6S,oDT)
var xET=_mz(z,'g-picker',['required',-1,'actionText',54,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(o6S,xET)
var c7S=_v()
_(o6S,c7S)
if(_oz(z,62,e,s,gg)){c7S.wxVkey=1
var oFT=_mz(z,'g-picker',['required',-1,'actionText',63,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(c7S,oFT)
}
var o8S=_v()
_(o6S,o8S)
if(_oz(z,71,e,s,gg)){o8S.wxVkey=1
var fGT=_mz(z,'g-picker',['required',-1,'actionText',72,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(o8S,fGT)
}
var cHT=_mz(z,'g-form-cell',['required',-1,'actionText',80,'bind:tap',1,'data-form',2,'id',3,'label',4,'placeholder',5,'value',6],[],e,s,gg)
_(o6S,cHT)
var hIT=_mz(z,'g-input-map',['required',-1,'bind:bindSelect',87,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'selectText',6,'value',7],[],e,s,gg)
_(o6S,hIT)
c7S.wxXCkey=1
c7S.wxXCkey=3
o8S.wxXCkey=1
o8S.wxXCkey=3
_(f3S,o6S)
var oJT=_mz(z,'g-wrapper',['title',95,'titleClass',1,'xrequired',2],[],e,s,gg)
var cKT=_mz(z,'g-radio-group',['bind:change',98,'data-form',1,'id',2,'items',3,'value',4],[],e,s,gg)
_(oJT,cKT)
_(f3S,oJT)
var oLT=_mz(z,'g-wrapper',['title',103,'xrequired',1],[],e,s,gg)
var ePT=_mz(z,'g-radio-group',['bind:change',105,'data-form',1,'id',2,'items',3,'value',4],[],e,s,gg)
_(oLT,ePT)
var lMT=_v()
_(oLT,lMT)
if(_oz(z,110,e,s,gg)){lMT.wxVkey=1
var bQT=_mz(z,'g-picker',['actionText',111,'bind:change',1,'data-form',2,'end',3,'id',4,'label',5,'mode',6,'placeholder',7,'start',8,'value',9],[],e,s,gg)
_(lMT,bQT)
}
var aNT=_v()
_(oLT,aNT)
if(_oz(z,121,e,s,gg)){aNT.wxVkey=1
var oRT=_mz(z,'g-picker',['actionText',122,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'range',6,'value',7],[],e,s,gg)
_(aNT,oRT)
}
var tOT=_v()
_(oLT,tOT)
if(_oz(z,130,e,s,gg)){tOT.wxVkey=1
var xST=_mz(z,'g-picker',['actionText',131,'bind:change',1,'data-form',2,'id',3,'label',4,'mode',5,'placeholder',6,'start',7,'value',8],[],e,s,gg)
_(tOT,xST)
}
lMT.wxXCkey=1
lMT.wxXCkey=3
aNT.wxXCkey=1
aNT.wxXCkey=3
tOT.wxXCkey=1
tOT.wxXCkey=3
_(f3S,oLT)
var c4S=_v()
_(f3S,c4S)
if(_oz(z,140,e,s,gg)){c4S.wxVkey=1
var oTT=_mz(z,'g-wrapper',['title',141,'xrequired',1],[],e,s,gg)
var fUT=_mz(z,'g-radio-group',['bind:change',143,'data-form',1,'id',2,'items',3,'value',4],[],e,s,gg)
_(oTT,fUT)
_(c4S,oTT)
}
var cVT=_n('g-wrapper')
_rz(z,cVT,'title',148,e,s,gg)
var cYT=_mz(z,'g-switch',['bind:change',149,'desc',1,'id',2,'label',3,'myClass',4,'value',5],[],e,s,gg)
_(cVT,cYT)
var hWT=_v()
_(cVT,hWT)
if(_oz(z,155,e,s,gg)){hWT.wxVkey=1
var oZT=_mz(z,'g-picker',['actionText',156,'bind:change',1,'data-form',2,'end',3,'id',4,'label',5,'mode',6,'placeholder',7,'start',8,'value',9],[],e,s,gg)
_(hWT,oZT)
}
var l1T=_mz(z,'g-switch',['bind:change',166,'desc',1,'id',2,'label',3,'myClass',4,'value',5],[],e,s,gg)
_(cVT,l1T)
var oXT=_v()
_(cVT,oXT)
if(_oz(z,172,e,s,gg)){oXT.wxVkey=1
var a2T=_mz(z,'g-picker',['actionText',173,'bind:change',1,'data-form',2,'end',3,'id',4,'label',5,'mode',6,'placeholder',7,'start',8,'value',9],[],e,s,gg)
_(oXT,a2T)
}
hWT.wxXCkey=1
hWT.wxXCkey=3
oXT.wxXCkey=1
oXT.wxXCkey=3
_(f3S,cVT)
var t3T=_mz(z,'g-wrapper',['title',183,'xrequired',1],[],e,s,gg)
var e4T=_mz(z,'g-radio-group',['bind:change',185,'data-form',1,'id',2,'items',3,'label',4,'value',5],[],e,s,gg)
_(t3T,e4T)
_(f3S,t3T)
var b5T=_mz(z,'g-wrapper',['title',191,'xrequired',1],[],e,s,gg)
var o6T=_mz(z,'g-checkbox-group',['bind:change',193,'data-form',1,'id',2,'items',3,'label',4,'value',5],[],e,s,gg)
_(b5T,o6T)
var x7T=_mz(z,'g-textarea',['bind:change',199,'data-form',1,'disabled',2,'id',3,'label',4,'placeholder',5,'value',6],[],e,s,gg)
_(b5T,x7T)
_(f3S,b5T)
var h5S=_v()
_(f3S,h5S)
if(_oz(z,206,e,s,gg)){h5S.wxVkey=1
var o8T=_mz(z,'g-wrapper',['bindtap',207,'title',1,'xrequired',2],[],e,s,gg)
var f9T=_n('g-cell')
_rz(z,f9T,'bindtap',210,e,s,gg)
var c0T=_v()
_(f9T,c0T)
if(_oz(z,211,e,s,gg)){c0T.wxVkey=1
}
var hAU=_v()
_(f9T,hAU)
if(_oz(z,212,e,s,gg)){hAU.wxVkey=1
}
c0T.wxXCkey=1
hAU.wxXCkey=1
_(o8T,f9T)
var oBU=_mz(z,'g-icon',['color',213,'size',1,'type',2],[],e,s,gg)
_(o8T,oBU)
_(h5S,o8T)
}
var cCU=_mz(z,'g-agree',['bind:change',216,'value',1],[],e,s,gg)
_(f3S,cCU)
c4S.wxXCkey=1
c4S.wxXCkey=3
h5S.wxXCkey=1
h5S.wxXCkey=3
_(o2S,f3S)
}
var oDU=_mz(z,'g-cascader',['bind:change',218,'bind:close',1,'bind:columnChange',2,'range',3,'visible',4],[],e,s,gg)
_(r,oDU)
o2S.wxXCkey=1
o2S.wxXCkey=3
return r
}
e_[x[93]]={f:m93,j:[],i:[],ti:[],ic:[]}
d_[x[94]]={}
var m94=function(e,s,r,gg){
var z=gz$gwx_95()
var aFU=_mz(z,'g-form',['bind:submit',0,'disabled',1,'model',1,'primaryText',2,'rules',3,'tipsEvent',4,'validateType',5],[],e,s,gg)
var tGU=_n('g-wrapper')
_rz(z,tGU,'title',7,e,s,gg)
var eHU=_mz(z,'g-input',['bind:change',8,'data-form',1,'id',2,'label',3,'placeholder',4,'value',5],[],e,s,gg)
_(tGU,eHU)
var bIU=_mz(z,'g-form-cell',['data-form',14,'id',1,'label',2,'placeholder',3,'value',4],[],e,s,gg)
_(tGU,bIU)
_(aFU,tGU)
var oJU=_n('g-wrapper')
_rz(z,oJU,'title',19,e,s,gg)
var xKU=_mz(z,'g-input',['bind:change',20,'data-form',1,'id',2,'label',3,'placeholder',4,'value',5],[],e,s,gg)
_(oJU,xKU)
var oLU=_mz(z,'g-picker',['bind:change',26,'data-form',1,'id',2,'label',3,'placeholder',4,'range',5,'value',6],[],e,s,gg)
_(oJU,oLU)
var fMU=_mz(z,'g-input',['bind:change',33,'data-form',1,'id',2,'label',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(oJU,fMU)
var cNU=_mz(z,'g-form-cell',['actionText',40,'bind:tap',1,'data-form',2,'id',3,'label',4,'placeholder',5,'value',6],[],e,s,gg)
_(oJU,cNU)
var hOU=_mz(z,'g-input-map',['bind:bindSelect',47,'bind:change',1,'data-form',2,'id',3,'label',4,'placeholder',5,'value',6],[],e,s,gg)
_(oJU,hOU)
var oPU=_mz(z,'g-input',['bind:change',54,'data-form',1,'id',2,'label',3,'placeholder',4,'value',5],[],e,s,gg)
_(oJU,oPU)
_(aFU,oJU)
var cQU=_n('g-wrapper')
_rz(z,cQU,'title',60,e,s,gg)
var tUU=_mz(z,'g-switch',['bind:change',61,'id',1,'label',2,'value',3],[],e,s,gg)
_(cQU,tUU)
var oRU=_v()
_(cQU,oRU)
if(_oz(z,65,e,s,gg)){oRU.wxVkey=1
var eVU=_mz(z,'g-picker',['bind:change',66,'data-form',1,'end',2,'id',3,'label',4,'mode',5,'placeholder',6,'start',7,'value',8],[],e,s,gg)
_(oRU,eVU)
}
var bWU=_mz(z,'g-switch',['bind:change',75,'id',1,'label',2,'value',3],[],e,s,gg)
_(cQU,bWU)
var lSU=_v()
_(cQU,lSU)
if(_oz(z,79,e,s,gg)){lSU.wxVkey=1
var oXU=_mz(z,'g-picker',['bind:change',80,'data-form',1,'end',2,'id',3,'label',4,'mode',5,'placeholder',6,'start',7,'value',8],[],e,s,gg)
_(lSU,oXU)
}
var xYU=_mz(z,'g-switch',['bind:change',89,'id',1,'label',2,'value',3],[],e,s,gg)
_(cQU,xYU)
var aTU=_v()
_(cQU,aTU)
if(_oz(z,93,e,s,gg)){aTU.wxVkey=1
var oZU=_mz(z,'g-picker',['bind:change',94,'data-form',1,'end',2,'id',3,'label',4,'mode',5,'placeholder',6,'start',7,'value',8],[],e,s,gg)
_(aTU,oZU)
}
var f1U=_mz(z,'g-switch',['bind:change',103,'id',1,'label',2,'value',3],[],e,s,gg)
_(cQU,f1U)
oRU.wxXCkey=1
oRU.wxXCkey=3
lSU.wxXCkey=1
lSU.wxXCkey=3
aTU.wxXCkey=1
aTU.wxXCkey=3
_(aFU,cQU)
var c2U=_n('g-wrapper')
_rz(z,c2U,'title',107,e,s,gg)
var h3U=_v()
_(c2U,h3U)
if(_oz(z,108,e,s,gg)){h3U.wxVkey=1
var o4U=_mz(z,'g-textarea',['bind:change',109,'data-form',1,'id',2,'label',3,'placeholder',4,'value',5],[],e,s,gg)
_(h3U,o4U)
}
h3U.wxXCkey=1
h3U.wxXCkey=3
_(aFU,c2U)
var c5U=_mz(z,'g-agree',['bind:change',115,'value',1],[],e,s,gg)
_(aFU,c5U)
_(r,aFU)
var o6U=_mz(z,'g-cascader',['bind:change',117,'bind:close',1,'bind:columnChange',2,'range',3,'visible',4],[],e,s,gg)
_(r,o6U)
var l7U=_mz(z,'g-plate-number-keyboard',['bind:change',122,'bind:closeKeyBoard',1,'value',2,'visible',3],[],e,s,gg)
_(r,l7U)
var a8U=_mz(z,'my-hover',['fileName',126,'imgSrc',1,'pdfUrl',2],[],e,s,gg)
_(r,a8U)
return r
}
e_[x[94]]={f:m94,j:[],i:[],ti:[],ic:[]}
d_[x[95]]={}
var m95=function(e,s,r,gg){
var z=gz$gwx_96()
var e0U=_v()
_(r,e0U)
if(_oz(z,0,e,s,gg)){e0U.wxVkey=1
var bAV=_mz(z,'g-msg',['footerFixed',-1,'bind:primaryTap',1,'desc',1,'primaryText',2,'sponsor',3,'status',4,'supportor',5,'title',6],[],e,s,gg)
_(e0U,bAV)
}
else{e0U.wxVkey=2
var oBV=_mz(z,'g-msg',['footerFixed',-1,'bind:primaryTap',8,'bind:secondTap',1,'desc',2,'primaryText',3,'secondText',4,'sponsor',5,'status',6,'supportor',7,'title',8],[],e,s,gg)
_(e0U,oBV)
}
e0U.wxXCkey=1
e0U.wxXCkey=3
e0U.wxXCkey=3
return r
}
e_[x[95]]={f:m95,j:[],i:[],ti:[],ic:[]}
d_[x[96]]={}
var m96=function(e,s,r,gg){
var z=gz$gwx_97()
var oDV=_v()
_(r,oDV)
if(_oz(z,0,e,s,gg)){oDV.wxVkey=1
}
var fEV=_v()
_(r,fEV)
if(_oz(z,1,e,s,gg)){fEV.wxVkey=1
var cFV=_n('g-footer')
cFV.attr['fixed']=true
_(fEV,cFV)
}
oDV.wxXCkey=1
fEV.wxXCkey=1
fEV.wxXCkey=3
return r
}
e_[x[96]]={f:m96,j:[],i:[],ti:[],ic:[]}
d_[x[97]]={}
var m97=function(e,s,r,gg){
var z=gz$gwx_98()
var oHV=_v()
_(r,oHV)
if(_oz(z,0,e,s,gg)){oHV.wxVkey=1
var cIV=_n('view')
var oJV=_mz(z,'mp-navigation-bar',['back',1,'background',1,'color',2,'title',3],[],e,s,gg)
var lKV=_v()
_(oJV,lKV)
if(_oz(z,5,e,s,gg)){lKV.wxVkey=1
var aLV=_mz(z,'view',['bind:tap',6,'class',1,'slot',2],[],e,s,gg)
var tMV=_n('g-dropdown')
_rz(z,tMV,'color',9,e,s,gg)
_(aLV,tMV)
_(lKV,aLV)
}
lKV.wxXCkey=1
lKV.wxXCkey=3
_(cIV,oJV)
var eNV=_n('view')
_rz(z,eNV,'class',10,e,s,gg)
var bOV=_v()
_(eNV,bOV)
if(_oz(z,11,e,s,gg)){bOV.wxVkey=1
var xQV=_v()
_(bOV,xQV)
if(_oz(z,12,e,s,gg)){xQV.wxVkey=1
var oVV=_mz(z,'home-tips',['access',-1,'bind:tap',13,'loopDuration',1,'status',2,'text',3],[],e,s,gg)
_(xQV,oVV)
}
var oRV=_v()
_(bOV,oRV)
if(_oz(z,17,e,s,gg)){oRV.wxVkey=1
}
var fSV=_v()
_(bOV,fSV)
if(_oz(z,18,e,s,gg)){fSV.wxVkey=1
}
var cTV=_v()
_(bOV,cTV)
if(_oz(z,19,e,s,gg)){cTV.wxVkey=1
}
var hUV=_v()
_(bOV,hUV)
if(_oz(z,20,e,s,gg)){hUV.wxVkey=1
}
xQV.wxXCkey=1
xQV.wxXCkey=3
oRV.wxXCkey=1
fSV.wxXCkey=1
cTV.wxXCkey=1
hUV.wxXCkey=1
}
var oPV=_v()
_(eNV,oPV)
if(_oz(z,21,e,s,gg)){oPV.wxVkey=1
}
bOV.wxXCkey=1
bOV.wxXCkey=3
oPV.wxXCkey=1
_(cIV,eNV)
var cWV=_mz(z,'g-footer',['sponsor',22,'supportor',1],[],e,s,gg)
_(cIV,cWV)
_(oHV,cIV)
}
var oXV=_mz(z,'g-cascader',['bind:change',24,'bind:close',1,'bind:columnChange',2,'range',3,'visible',4],[],e,s,gg)
_(r,oXV)
var lYV=_mz(z,'my-hover',['fileName',29,'pdfUrl',1],[],e,s,gg)
_(r,lYV)
oHV.wxXCkey=1
oHV.wxXCkey=3
return r
}
e_[x[97]]={f:m97,j:[],i:[],ti:[],ic:[]}
d_[x[98]]={}
var m98=function(e,s,r,gg){
var z=gz$gwx_99()
return r
}
e_[x[98]]={f:m98,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/stat/index","pages/index/index","pages/mine/index/index","pages/mine/todo/list/list","pages/mine/todo/detail/detail","pages/mine/empty/index","pages/report/home/index","pages/report/index/index","pages/donate/index/index","pages/donate/msg/index","pages/donate/form/index","pages/donate/contact/index","pages/report/msg/index","pages/mine/donation/index","pages/report/inform/index","pages/diagnosis/index","pages/buy/notice/index","pages/health-guide/index","pages/health-guide-detail/index","pages/manage-company/index","pages/company-manage/index","pages/share-company-code/index","pages/mine/company/list/index","pages/mine/setting/index","pages/application/index","pages/cropper-avatar/index","packages/health-code/pages/new-workbench/new-workbench","packages/health-code/pages/realname-submit/index","packages/health-code/pages/realname-info/index","packages/health-code/pages/admin-grid/index","packages/health-code/pages/traffic-record/index","packages/health-code/pages/workbench/index","packages/health-code/pages/report-health/index","packages/health-code/pages/manage-code/index","packages/health-code/pages/verification/index","packages/health-code/pages/scan-success/index","packages/health-code/pages/add-grid/index","packages/health-code/pages/add-person/index","packages/health-code/pages/collection-point/index","packages/health-code/pages/toggle-grid/index","packages/health-code/pages/admin/index","packages/health-code/pages/empty/index","packages/health-code/pages/realname-change/index","packages/health-code/pages/inputcode/index","packages/health-code/pages/collection-point-manage/index","packages/health-code/pages/verification-result/index","packages/health-code/pages/mutual-sweep/index","packages/health-code/pages/pass-card/index","packages/health-code/pages/pass-login-qrcode/index","packages/car-code/pages/code-edit/index","packages/car-code/pages/code-manage/index","packages/car-code/pages/code-detail/index","packages/car-code/pages/bus-code/passenger/edit/index","packages/car-code/pages/submit-success/index","packages/car-code/pages/pub-tran-code/index","packages/car-code/pages/bus-code/driver/daba-edit/index","packages/car-code/pages/traffic-police/start/index","packages/car-code/pages/traffic-police/car-check/index","packages/car-code/pages/traffic-police/passenger-infor2/index","packages/car-code/pages/bus-code/passenger/home/index","packages/car-code/pages/bus-code/passenger/scan/index","packages/car-code/pages/bus-code/passenger/commit/index","packages/car-code/pages/bus-code/passenger/detail/index","packages/car-code/pages/bus-code/passenger/fllow/index","packages/car-code/pages/bus-code/car-success/index","packages/car-code/pages/bus-code/driver/daba-code-detail/index","packages/car-code/pages/bus-code/driver/poster/index","packages/buy/pages/over/index","packages/buy/pages/notice/index","packages/buy/pages/form/index","packages/buy/pages/reservation-list/index","packages/buy/pages/result-fail/index","packages/buy/pages/result-ok/index"],"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"穗康码","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"networkTimeout":{"request":15000,"connectSocket":10000,"uploadFile":10000,"downloadFile":10000},"permission":{"scope.userLocation":{"desc":"你的位置信息将用于小程序位置接口的效果展示"}},"tabBar":{"color":"#344356","selectedColor":"#4293F4","backgroundColor":"#FFFFFF","borderStyle":"white","list":[{"pagePath":"pages/stat/index","text":"首页","iconPath":"images/home/home.png","selectedIconPath":"images/home/home-selected.png"},{"pagePath":"pages/mine/index/index","text":"我的","iconPath":"images/home/me.png","selectedIconPath":"images/home/me-selected.png"}],"position":"bottom","custom":false},"debug":true,"navigateToMiniProgramAppIdList":["wxc33e61fdaba5aa01","wx32867b23b69db11e","wx8dd5eba44cda1fa0","wxec6e25de7a4c0994","wx6f0dec88f0a4ce26","wxd65aed3773b30e6d","wx318893774c9bfdd2","wx88736d7d39e2eda6","wx308bd2aeb83d3345"],"sitemapLocation":"sitemap.json","subPackages":[{"root":"packages/health-code/","pages":["packages/health-code/pages/new-workbench/new-workbench","packages/health-code/pages/realname-submit/index","packages/health-code/pages/realname-info/index","packages/health-code/pages/admin-grid/index","packages/health-code/pages/traffic-record/index","packages/health-code/pages/workbench/index","packages/health-code/pages/report-health/index","packages/health-code/pages/manage-code/index","packages/health-code/pages/verification/index","packages/health-code/pages/scan-success/index","packages/health-code/pages/add-grid/index","packages/health-code/pages/add-person/index","packages/health-code/pages/collection-point/index","packages/health-code/pages/toggle-grid/index","packages/health-code/pages/admin/index","packages/health-code/pages/empty/index","packages/health-code/pages/realname-change/index","packages/health-code/pages/inputcode/index","packages/health-code/pages/collection-point-manage/index","packages/health-code/pages/verification-result/index","packages/health-code/pages/mutual-sweep/index","packages/health-code/pages/pass-card/index","packages/health-code/pages/pass-login-qrcode/index"]},{"root":"packages/car-code/","name":"car-code","pages":["packages/car-code/pages/code-edit/index","packages/car-code/pages/code-manage/index","packages/car-code/pages/code-detail/index","packages/car-code/pages/bus-code/passenger/edit/index","packages/car-code/pages/submit-success/index","packages/car-code/pages/pub-tran-code/index","packages/car-code/pages/bus-code/driver/daba-edit/index","packages/car-code/pages/traffic-police/start/index","packages/car-code/pages/traffic-police/car-check/index","packages/car-code/pages/traffic-police/passenger-infor2/index","packages/car-code/pages/bus-code/passenger/home/index","packages/car-code/pages/bus-code/passenger/scan/index","packages/car-code/pages/bus-code/passenger/commit/index","packages/car-code/pages/bus-code/passenger/detail/index","packages/car-code/pages/bus-code/passenger/fllow/index","packages/car-code/pages/bus-code/car-success/index","packages/car-code/pages/bus-code/driver/daba-code-detail/index","packages/car-code/pages/bus-code/driver/poster/index"]},{"root":"packages/buy/","name":"buy","pages":["packages/buy/pages/over/index","packages/buy/pages/notice/index","packages/buy/pages/form/index","packages/buy/pages/reservation-list/index","packages/buy/pages/result-fail/index","packages/buy/pages/result-ok/index"]}],"plugins":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['components/custom-tab-bar/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/custom-tab-bar/index.wxml'] = [$gwx, './components/custom-tab-bar/index.wxml'];else __wxAppCode__['components/custom-tab-bar/index.wxml'] = $gwx( './components/custom-tab-bar/index.wxml' );
		__wxAppCode__['components/g-speech/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/g-speech/index.wxml'] = [$gwx, './components/g-speech/index.wxml'];else __wxAppCode__['components/g-speech/index.wxml'] = $gwx( './components/g-speech/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-address-item/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-address-item/index.wxml'] = [$gwx, './components/gsd-ui/g-address-item/index.wxml'];else __wxAppCode__['components/gsd-ui/g-address-item/index.wxml'] = $gwx( './components/gsd-ui/g-address-item/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-address-map/index.json'] = {"component":true,"usingComponents":{"g-map":"/components/gsd-ui/g-map/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-region":"/components/gsd-ui/g-region/index","g-address-item":"/components/gsd-ui/g-address-item/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-address-map/index.wxml'] = [$gwx, './components/gsd-ui/g-address-map/index.wxml'];else __wxAppCode__['components/gsd-ui/g-address-map/index.wxml'] = $gwx( './components/gsd-ui/g-address-map/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-agree/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-agree/index.wxml'] = [$gwx, './components/gsd-ui/g-agree/index.wxml'];else __wxAppCode__['components/gsd-ui/g-agree/index.wxml'] = $gwx( './components/gsd-ui/g-agree/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-auth-footer/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-auth-footer/index.wxml'] = [$gwx, './components/gsd-ui/g-auth-footer/index.wxml'];else __wxAppCode__['components/gsd-ui/g-auth-footer/index.wxml'] = $gwx( './components/gsd-ui/g-auth-footer/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-badge/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-badge/index.wxml'] = [$gwx, './components/gsd-ui/g-badge/index.wxml'];else __wxAppCode__['components/gsd-ui/g-badge/index.wxml'] = $gwx( './components/gsd-ui/g-badge/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-banner/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-banner/index.wxml'] = [$gwx, './components/gsd-ui/g-banner/index.wxml'];else __wxAppCode__['components/gsd-ui/g-banner/index.wxml'] = $gwx( './components/gsd-ui/g-banner/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-button-group/index.json'] = {"component":true,"usingComponents":{"g-agree":"../g-agree/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-button-group/index.wxml'] = [$gwx, './components/gsd-ui/g-button-group/index.wxml'];else __wxAppCode__['components/gsd-ui/g-button-group/index.wxml'] = $gwx( './components/gsd-ui/g-button-group/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-calendar/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-calendar/index.wxml'] = [$gwx, './components/gsd-ui/g-calendar/index.wxml'];else __wxAppCode__['components/gsd-ui/g-calendar/index.wxml'] = $gwx( './components/gsd-ui/g-calendar/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-card/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-card/index.wxml'] = [$gwx, './components/gsd-ui/g-card/index.wxml'];else __wxAppCode__['components/gsd-ui/g-card/index.wxml'] = $gwx( './components/gsd-ui/g-card/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-cascader/index.json'] = {"component":true,"usingComponents":{"g-poplayer":"/components/gsd-ui/g-poplayer/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-cascader/index.wxml'] = [$gwx, './components/gsd-ui/g-cascader/index.wxml'];else __wxAppCode__['components/gsd-ui/g-cascader/index.wxml'] = $gwx( './components/gsd-ui/g-cascader/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-cell/index.json'] = {"component":true,"usingComponents":{"g-badge":"/components/gsd-ui/g-badge/index","g-icon":"/components/gsd-ui/g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-cell/index.wxml'] = [$gwx, './components/gsd-ui/g-cell/index.wxml'];else __wxAppCode__['components/gsd-ui/g-cell/index.wxml'] = $gwx( './components/gsd-ui/g-cell/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-checkbox-group/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-checkbox-group/index.wxml'] = [$gwx, './components/gsd-ui/g-checkbox-group/index.wxml'];else __wxAppCode__['components/gsd-ui/g-checkbox-group/index.wxml'] = $gwx( './components/gsd-ui/g-checkbox-group/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-checkbox-label/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-checkbox-label/index.wxml'] = [$gwx, './components/gsd-ui/g-checkbox-label/index.wxml'];else __wxAppCode__['components/gsd-ui/g-checkbox-label/index.wxml'] = $gwx( './components/gsd-ui/g-checkbox-label/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-circle/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-circle/index.wxml'] = [$gwx, './components/gsd-ui/g-circle/index.wxml'];else __wxAppCode__['components/gsd-ui/g-circle/index.wxml'] = $gwx( './components/gsd-ui/g-circle/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-clip-photo/index.json'] = {"component":true,"usingComponents":{"g-image":"../g-image/index","g-switch":"../g-switch/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-clip-photo/index.wxml'] = [$gwx, './components/gsd-ui/g-clip-photo/index.wxml'];else __wxAppCode__['components/gsd-ui/g-clip-photo/index.wxml'] = $gwx( './components/gsd-ui/g-clip-photo/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-collapse-pane/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-collapse-pane/index.wxml'] = [$gwx, './components/gsd-ui/g-collapse-pane/index.wxml'];else __wxAppCode__['components/gsd-ui/g-collapse-pane/index.wxml'] = $gwx( './components/gsd-ui/g-collapse-pane/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-collapse/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-collapse/index.wxml'] = [$gwx, './components/gsd-ui/g-collapse/index.wxml'];else __wxAppCode__['components/gsd-ui/g-collapse/index.wxml'] = $gwx( './components/gsd-ui/g-collapse/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-date-range-picker/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-date-range-picker/index.wxml'] = [$gwx, './components/gsd-ui/g-date-range-picker/index.wxml'];else __wxAppCode__['components/gsd-ui/g-date-range-picker/index.wxml'] = $gwx( './components/gsd-ui/g-date-range-picker/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-dropdown/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-dropdown/index.wxml'] = [$gwx, './components/gsd-ui/g-dropdown/index.wxml'];else __wxAppCode__['components/gsd-ui/g-dropdown/index.wxml'] = $gwx( './components/gsd-ui/g-dropdown/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-footer/index.json'] = {"component":true,"usingComponents":{"g-badge":"/components/gsd-ui/g-badge/index","g-icon":"/components/gsd-ui/g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-footer/index.wxml'] = [$gwx, './components/gsd-ui/g-footer/index.wxml'];else __wxAppCode__['components/gsd-ui/g-footer/index.wxml'] = $gwx( './components/gsd-ui/g-footer/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-form-cell/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-form-cell/index.wxml'] = [$gwx, './components/gsd-ui/g-form-cell/index.wxml'];else __wxAppCode__['components/gsd-ui/g-form-cell/index.wxml'] = $gwx( './components/gsd-ui/g-form-cell/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-form-item/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-form-item/index.wxml'] = [$gwx, './components/gsd-ui/g-form-item/index.wxml'];else __wxAppCode__['components/gsd-ui/g-form-item/index.wxml'] = $gwx( './components/gsd-ui/g-form-item/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-form-number/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-form-number/index.wxml'] = [$gwx, './components/gsd-ui/g-form-number/index.wxml'];else __wxAppCode__['components/gsd-ui/g-form-number/index.wxml'] = $gwx( './components/gsd-ui/g-form-number/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-form-phoneVCode/index.json'] = {"component":true,"usingComponents":{"g-input":"../g-input/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-form-phoneVCode/index.wxml'] = [$gwx, './components/gsd-ui/g-form-phoneVCode/index.wxml'];else __wxAppCode__['components/gsd-ui/g-form-phoneVCode/index.wxml'] = $gwx( './components/gsd-ui/g-form-phoneVCode/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-form/index.json'] = {"component":true,"usingComponents":{"g-tips":"../g-tips/index","g-button-group":"../g-button-group/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-form/index.wxml'] = [$gwx, './components/gsd-ui/g-form/index.wxml'];else __wxAppCode__['components/gsd-ui/g-form/index.wxml'] = $gwx( './components/gsd-ui/g-form/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-icon/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-icon/index.wxml'] = [$gwx, './components/gsd-ui/g-icon/index.wxml'];else __wxAppCode__['components/gsd-ui/g-icon/index.wxml'] = $gwx( './components/gsd-ui/g-icon/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-index-list/index.json'] = {"component":true,"usingComponents":{"g-search":"../g-search/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-index-list/index.wxml'] = [$gwx, './components/gsd-ui/g-index-list/index.wxml'];else __wxAppCode__['components/gsd-ui/g-index-list/index.wxml'] = $gwx( './components/gsd-ui/g-index-list/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-input-map/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","g-popover":"../g-popover/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-input-map/index.wxml'] = [$gwx, './components/gsd-ui/g-input-map/index.wxml'];else __wxAppCode__['components/gsd-ui/g-input-map/index.wxml'] = $gwx( './components/gsd-ui/g-input-map/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-input/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","g-popover":"../g-popover/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-input/index.wxml'] = [$gwx, './components/gsd-ui/g-input/index.wxml'];else __wxAppCode__['components/gsd-ui/g-input/index.wxml'] = $gwx( './components/gsd-ui/g-input/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-map/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-map/index.wxml'] = [$gwx, './components/gsd-ui/g-map/index.wxml'];else __wxAppCode__['components/gsd-ui/g-map/index.wxml'] = $gwx( './components/gsd-ui/g-map/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-modal/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-modal/index.wxml'] = [$gwx, './components/gsd-ui/g-modal/index.wxml'];else __wxAppCode__['components/gsd-ui/g-modal/index.wxml'] = $gwx( './components/gsd-ui/g-modal/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-msg/index.json'] = {"component":true,"usingComponents":{"g-title":"../g-title/index","g-footer":"../g-footer/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-msg/index.wxml'] = [$gwx, './components/gsd-ui/g-msg/index.wxml'];else __wxAppCode__['components/gsd-ui/g-msg/index.wxml'] = $gwx( './components/gsd-ui/g-msg/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-nav-box-item/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-nav-box-item/index.wxml'] = [$gwx, './components/gsd-ui/g-nav-box-item/index.wxml'];else __wxAppCode__['components/gsd-ui/g-nav-box-item/index.wxml'] = $gwx( './components/gsd-ui/g-nav-box-item/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-nav-box/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-nav-box/index.wxml'] = [$gwx, './components/gsd-ui/g-nav-box/index.wxml'];else __wxAppCode__['components/gsd-ui/g-nav-box/index.wxml'] = $gwx( './components/gsd-ui/g-nav-box/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-picker-view/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-picker-view/index.wxml'] = [$gwx, './components/gsd-ui/g-picker-view/index.wxml'];else __wxAppCode__['components/gsd-ui/g-picker-view/index.wxml'] = $gwx( './components/gsd-ui/g-picker-view/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-picker/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-dropdown":"../g-dropdown/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-picker/index.wxml'] = [$gwx, './components/gsd-ui/g-picker/index.wxml'];else __wxAppCode__['components/gsd-ui/g-picker/index.wxml'] = $gwx( './components/gsd-ui/g-picker/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-plate-number-keyboard/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-plate-number-keyboard/index.wxml'] = [$gwx, './components/gsd-ui/g-plate-number-keyboard/index.wxml'];else __wxAppCode__['components/gsd-ui/g-plate-number-keyboard/index.wxml'] = $gwx( './components/gsd-ui/g-plate-number-keyboard/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-poplayer/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-poplayer/index.wxml'] = [$gwx, './components/gsd-ui/g-poplayer/index.wxml'];else __wxAppCode__['components/gsd-ui/g-poplayer/index.wxml'] = $gwx( './components/gsd-ui/g-poplayer/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-popover/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-popover/index.wxml'] = [$gwx, './components/gsd-ui/g-popover/index.wxml'];else __wxAppCode__['components/gsd-ui/g-popover/index.wxml'] = $gwx( './components/gsd-ui/g-popover/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-preview-item/index.json'] = {"component":true,"usingComponents":{"g-icon":"/components/gsd-ui/g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-preview-item/index.wxml'] = [$gwx, './components/gsd-ui/g-preview-item/index.wxml'];else __wxAppCode__['components/gsd-ui/g-preview-item/index.wxml'] = $gwx( './components/gsd-ui/g-preview-item/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-preview/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-preview/index.wxml'] = [$gwx, './components/gsd-ui/g-preview/index.wxml'];else __wxAppCode__['components/gsd-ui/g-preview/index.wxml'] = $gwx( './components/gsd-ui/g-preview/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-radio-group/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-radio-group/index.wxml'] = [$gwx, './components/gsd-ui/g-radio-group/index.wxml'];else __wxAppCode__['components/gsd-ui/g-radio-group/index.wxml'] = $gwx( './components/gsd-ui/g-radio-group/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-region-picker/index.json'] = {"component":true,"usingComponents":{"g-cascader":"../g-cascader/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-region-picker/index.wxml'] = [$gwx, './components/gsd-ui/g-region-picker/index.wxml'];else __wxAppCode__['components/gsd-ui/g-region-picker/index.wxml'] = $gwx( './components/gsd-ui/g-region-picker/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-region/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-region/index.wxml'] = [$gwx, './components/gsd-ui/g-region/index.wxml'];else __wxAppCode__['components/gsd-ui/g-region/index.wxml'] = $gwx( './components/gsd-ui/g-region/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-search/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-search/index.wxml'] = [$gwx, './components/gsd-ui/g-search/index.wxml'];else __wxAppCode__['components/gsd-ui/g-search/index.wxml'] = $gwx( './components/gsd-ui/g-search/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-select/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-select/index.wxml'] = [$gwx, './components/gsd-ui/g-select/index.wxml'];else __wxAppCode__['components/gsd-ui/g-select/index.wxml'] = $gwx( './components/gsd-ui/g-select/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-selector/index.json'] = {"component":true,"usingComponents":{"g-poplayer":"../g-poplayer/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-selector/index.wxml'] = [$gwx, './components/gsd-ui/g-selector/index.wxml'];else __wxAppCode__['components/gsd-ui/g-selector/index.wxml'] = $gwx( './components/gsd-ui/g-selector/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-switch/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-cell":"../g-cell/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-switch/index.wxml'] = [$gwx, './components/gsd-ui/g-switch/index.wxml'];else __wxAppCode__['components/gsd-ui/g-switch/index.wxml'] = $gwx( './components/gsd-ui/g-switch/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-tab-pane/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-tab-pane/index.wxml'] = [$gwx, './components/gsd-ui/g-tab-pane/index.wxml'];else __wxAppCode__['components/gsd-ui/g-tab-pane/index.wxml'] = $gwx( './components/gsd-ui/g-tab-pane/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-table/index.json'] = {"component":true,"usingComponents":{"g-table-header":"./table-header/index","g-table-body":"./table-body/index","g-table-scroll":"./table-scroll/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-table/index.wxml'] = [$gwx, './components/gsd-ui/g-table/index.wxml'];else __wxAppCode__['components/gsd-ui/g-table/index.wxml'] = $gwx( './components/gsd-ui/g-table/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-table/table-body/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-table/table-body/index.wxml'] = [$gwx, './components/gsd-ui/g-table/table-body/index.wxml'];else __wxAppCode__['components/gsd-ui/g-table/table-body/index.wxml'] = $gwx( './components/gsd-ui/g-table/table-body/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-table/table-header/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-table/table-header/index.wxml'] = [$gwx, './components/gsd-ui/g-table/table-header/index.wxml'];else __wxAppCode__['components/gsd-ui/g-table/table-header/index.wxml'] = $gwx( './components/gsd-ui/g-table/table-header/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-table/table-scroll/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-table/table-scroll/index.wxml'] = [$gwx, './components/gsd-ui/g-table/table-scroll/index.wxml'];else __wxAppCode__['components/gsd-ui/g-table/table-scroll/index.wxml'] = $gwx( './components/gsd-ui/g-table/table-scroll/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-tabs/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-tabs/index.wxml'] = [$gwx, './components/gsd-ui/g-tabs/index.wxml'];else __wxAppCode__['components/gsd-ui/g-tabs/index.wxml'] = $gwx( './components/gsd-ui/g-tabs/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-textarea/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-textarea/index.wxml'] = [$gwx, './components/gsd-ui/g-textarea/index.wxml'];else __wxAppCode__['components/gsd-ui/g-textarea/index.wxml'] = $gwx( './components/gsd-ui/g-textarea/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-timeline-item/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-timeline-item/index.wxml'] = [$gwx, './components/gsd-ui/g-timeline-item/index.wxml'];else __wxAppCode__['components/gsd-ui/g-timeline-item/index.wxml'] = $gwx( './components/gsd-ui/g-timeline-item/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-timeline/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-timeline/index.wxml'] = [$gwx, './components/gsd-ui/g-timeline/index.wxml'];else __wxAppCode__['components/gsd-ui/g-timeline/index.wxml'] = $gwx( './components/gsd-ui/g-timeline/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-tips/index.json'] = {"component":true,"usingComponents":{"g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-tips/index.wxml'] = [$gwx, './components/gsd-ui/g-tips/index.wxml'];else __wxAppCode__['components/gsd-ui/g-tips/index.wxml'] = $gwx( './components/gsd-ui/g-tips/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-title/index.json'] = {"component":true,"usingComponents":{"g-circle":"../g-circle/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-title/index.wxml'] = [$gwx, './components/gsd-ui/g-title/index.wxml'];else __wxAppCode__['components/gsd-ui/g-title/index.wxml'] = $gwx( './components/gsd-ui/g-title/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-upload/index.json'] = {"component":true,"usingComponents":{"g-form-item":"../g-form-item/index","g-icon":"../g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-upload/index.wxml'] = [$gwx, './components/gsd-ui/g-upload/index.wxml'];else __wxAppCode__['components/gsd-ui/g-upload/index.wxml'] = $gwx( './components/gsd-ui/g-upload/index.wxml' );
		__wxAppCode__['components/gsd-ui/g-wrapper/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gsd-ui/g-wrapper/index.wxml'] = [$gwx, './components/gsd-ui/g-wrapper/index.wxml'];else __wxAppCode__['components/gsd-ui/g-wrapper/index.wxml'] = $gwx( './components/gsd-ui/g-wrapper/index.wxml' );
		__wxAppCode__['components/home-tips/index.json'] = {"component":true,"usingComponents":{"g-icon":"/components/gsd-ui/g-icon/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/home-tips/index.wxml'] = [$gwx, './components/home-tips/index.wxml'];else __wxAppCode__['components/home-tips/index.wxml'] = $gwx( './components/home-tips/index.wxml' );
		__wxAppCode__['components/hover-button/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/hover-button/index.wxml'] = [$gwx, './components/hover-button/index.wxml'];else __wxAppCode__['components/hover-button/index.wxml'] = $gwx( './components/hover-button/index.wxml' );
		__wxAppCode__['components/lazy-load/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/lazy-load/index.wxml'] = [$gwx, './components/lazy-load/index.wxml'];else __wxAppCode__['components/lazy-load/index.wxml'] = $gwx( './components/lazy-load/index.wxml' );
		__wxAppCode__['components/slide-item/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/slide-item/index.wxml'] = [$gwx, './components/slide-item/index.wxml'];else __wxAppCode__['components/slide-item/index.wxml'] = $gwx( './components/slide-item/index.wxml' );
		__wxAppCode__['components/weui-miniprogram/navigation-bar/navigation-bar.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/weui-miniprogram/navigation-bar/navigation-bar.wxml'] = [$gwx, './components/weui-miniprogram/navigation-bar/navigation-bar.wxml'];else __wxAppCode__['components/weui-miniprogram/navigation-bar/navigation-bar.wxml'] = $gwx( './components/weui-miniprogram/navigation-bar/navigation-bar.wxml' );
		__wxAppCode__['components/weui-miniprogram/package.json'] = {
    "name": "weui-miniprogram",
    "version": "0.2.0",
    "description": "",
    "author": "xushengni,tomylin,cunjinli,rockhou",
    "license": "MIT"
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/weui-miniprogram/package.wxml'] = [$gwx, './components/weui-miniprogram/package.wxml'];else __wxAppCode__['components/weui-miniprogram/package.wxml'] = $gwx( './components/weui-miniprogram/package.wxml' );
		__wxAppCode__['miniprogram_dist/index/index.json'] = {"component":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_dist/index/index.wxml'] = [$gwx, './miniprogram_dist/index/index.wxml'];else __wxAppCode__['miniprogram_dist/index/index.wxml'] = $gwx( './miniprogram_dist/index/index.wxml' );
		__wxAppCode__['miniprogram_dist/poster/index.json'] = {"component":true,"usingComponents":{"we-canvas":"../index/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_dist/poster/index.wxml'] = [$gwx, './miniprogram_dist/poster/index.wxml'];else __wxAppCode__['miniprogram_dist/poster/index.wxml'] = $gwx( './miniprogram_dist/poster/index.wxml' );
		__wxAppCode__['package-lock.json'] = {
  "name": "wll",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g\x3d\x3d"
    },
    "miniprogram-api-promise": {
      "version": "1.0.4",
      "resolved": "https://registry.npm.taobao.org/miniprogram-api-promise/download/miniprogram-api-promise-1.0.4.tgz",
      "integrity": "sha1-/v6bcpI/0x+IsSRjtQLLRXyJK0w\x3d"
    },
    "weapp-qrcode": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/weapp-qrcode/-/weapp-qrcode-1.0.0.tgz",
      "integrity": "sha512-4sa3W0rGDVJ9QaeZpAKlAuUxVyjhDwiUqHyGK/jJMsRMXnhb4yO8qWU/pZruMo+iT5J6CraS67lDMFb1VY+RaA\x3d\x3d",
      "requires": {
        "extend": "^3.0.2"
      }
    }
  }
}
;
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package-lock.wxml'] = [$gwx, './package-lock.wxml'];else __wxAppCode__['package-lock.wxml'] = $gwx( './package-lock.wxml' );
		__wxAppCode__['package.json'] = {
  "name": "wll",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "dependencies": {
    "miniprogram-api-promise": "^1.0.4",
    "weapp-qrcode": "^1.0.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" \x26\x26 exit 1"
  },
  "repository": {
    "type": "git",
    "url": "http://git.code.oa.com/ttools/wll.git"
  },
  "author": "",
  "license": "ISC"
}
;
		if (__vd_version_info__.delayedGwx) __wxAppCode__['package.wxml'] = [$gwx, './package.wxml'];else __wxAppCode__['package.wxml'] = $gwx( './package.wxml' );
		__wxAppCode__['pages/application/index.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","navigationBarTitleText":"关联企业","enablePullDownRefresh":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/application/index.wxml'] = [$gwx, './pages/application/index.wxml'];else __wxAppCode__['pages/application/index.wxml'] = $gwx( './pages/application/index.wxml' );
		__wxAppCode__['pages/buy/notice/index.json'] = {"navigationBarTitleText":"口罩预约购买","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/buy/notice/index.wxml'] = [$gwx, './pages/buy/notice/index.wxml'];else __wxAppCode__['pages/buy/notice/index.wxml'] = $gwx( './pages/buy/notice/index.wxml' );
		__wxAppCode__['pages/company-manage/index.json'] = {"navigationBarTitleText":"关联申请审核","usingComponents":{"g-index-list":"/components/gsd-ui/g-index-list/index","g-index-search":"/components/gsd-ui/g-search/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/company-manage/index.wxml'] = [$gwx, './pages/company-manage/index.wxml'];else __wxAppCode__['pages/company-manage/index.wxml'] = $gwx( './pages/company-manage/index.wxml' );
		__wxAppCode__['pages/cropper-avatar/index.json'] = {"navigationBarTitleText":"图片裁剪","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/cropper-avatar/index.wxml'] = [$gwx, './pages/cropper-avatar/index.wxml'];else __wxAppCode__['pages/cropper-avatar/index.wxml'] = $gwx( './pages/cropper-avatar/index.wxml' );
		__wxAppCode__['pages/diagnosis/index.json'] = {"navigationBarTitleText":"在线免费问诊","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/diagnosis/index.wxml'] = [$gwx, './pages/diagnosis/index.wxml'];else __wxAppCode__['pages/diagnosis/index.wxml'] = $gwx( './pages/diagnosis/index.wxml' );
		__wxAppCode__['pages/donate/contact/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"医疗物资捐赠"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/donate/contact/index.wxml'] = [$gwx, './pages/donate/contact/index.wxml'];else __wxAppCode__['pages/donate/contact/index.wxml'] = $gwx( './pages/donate/contact/index.wxml' );
		__wxAppCode__['pages/donate/form/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"医疗物资捐赠"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/donate/form/index.wxml'] = [$gwx, './pages/donate/form/index.wxml'];else __wxAppCode__['pages/donate/form/index.wxml'] = $gwx( './pages/donate/form/index.wxml' );
		__wxAppCode__['pages/donate/index/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"医疗物资捐赠"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/donate/index/index.wxml'] = [$gwx, './pages/donate/index/index.wxml'];else __wxAppCode__['pages/donate/index/index.wxml'] = $gwx( './pages/donate/index/index.wxml' );
		__wxAppCode__['pages/donate/msg/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/donate/msg/index.wxml'] = [$gwx, './pages/donate/msg/index.wxml'];else __wxAppCode__['pages/donate/msg/index.wxml'] = $gwx( './pages/donate/msg/index.wxml' );
		__wxAppCode__['pages/health-guide-detail/index.json'] = {"usingComponents":{"mp-lazy-load":"../../components/lazy-load/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"个人防护指引"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health-guide-detail/index.wxml'] = [$gwx, './pages/health-guide-detail/index.wxml'];else __wxAppCode__['pages/health-guide-detail/index.wxml'] = $gwx( './pages/health-guide-detail/index.wxml' );
		__wxAppCode__['pages/health-guide/index.json'] = {"navigationBarTitleText":"健康防护指引","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/health-guide/index.wxml'] = [$gwx, './pages/health-guide/index.wxml'];else __wxAppCode__['pages/health-guide/index.wxml'] = $gwx( './pages/health-guide/index.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"navigationBarTitleText":"穗康","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/manage-company/index.json'] = {"navigationBarTitleText":"关联申请审核","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/manage-company/index.wxml'] = [$gwx, './pages/manage-company/index.wxml'];else __wxAppCode__['pages/manage-company/index.wxml'] = $gwx( './pages/manage-company/index.wxml' );
		__wxAppCode__['pages/mine/company/list/index.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","navigationBarTitleText":"我的关联信息","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/company/list/index.wxml'] = [$gwx, './pages/mine/company/list/index.wxml'];else __wxAppCode__['pages/mine/company/list/index.wxml'] = $gwx( './pages/mine/company/list/index.wxml' );
		__wxAppCode__['pages/mine/donation/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"我的捐赠"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/donation/index.wxml'] = [$gwx, './pages/mine/donation/index.wxml'];else __wxAppCode__['pages/mine/donation/index.wxml'] = $gwx( './pages/mine/donation/index.wxml' );
		__wxAppCode__['pages/mine/empty/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":""};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/empty/index.wxml'] = [$gwx, './pages/mine/empty/index.wxml'];else __wxAppCode__['pages/mine/empty/index.wxml'] = $gwx( './pages/mine/empty/index.wxml' );
		__wxAppCode__['pages/mine/index/index.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","navigationBarTitleText":"个人中心","enablePullDownRefresh":false,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/index/index.wxml'] = [$gwx, './pages/mine/index/index.wxml'];else __wxAppCode__['pages/mine/index/index.wxml'] = $gwx( './pages/mine/index/index.wxml' );
		__wxAppCode__['pages/mine/login/index.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","navigationBarTitleText":"登录","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/login/index.wxml'] = [$gwx, './pages/mine/login/index.wxml'];else __wxAppCode__['pages/mine/login/index.wxml'] = $gwx( './pages/mine/login/index.wxml' );
		__wxAppCode__['pages/mine/setting/index.json'] = {"usingComponents":{"mp-navigation-bar":"../../../components/weui-miniprogram/navigation-bar/navigation-bar","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationStyle":"custom","navigationBarTitleText":"穗康"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/setting/index.wxml'] = [$gwx, './pages/mine/setting/index.wxml'];else __wxAppCode__['pages/mine/setting/index.wxml'] = $gwx( './pages/mine/setting/index.wxml' );
		__wxAppCode__['pages/mine/todo/detail/detail.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/todo/detail/detail.wxml'] = [$gwx, './pages/mine/todo/detail/detail.wxml'];else __wxAppCode__['pages/mine/todo/detail/detail.wxml'] = $gwx( './pages/mine/todo/detail/detail.wxml' );
		__wxAppCode__['pages/mine/todo/list/list.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mine/todo/list/list.wxml'] = [$gwx, './pages/mine/todo/list/list.wxml'];else __wxAppCode__['pages/mine/todo/list/list.wxml'] = $gwx( './pages/mine/todo/list/list.wxml' );
		__wxAppCode__['pages/msg/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/msg/index.wxml'] = [$gwx, './pages/msg/index.wxml'];else __wxAppCode__['pages/msg/index.wxml'] = $gwx( './pages/msg/index.wxml' );
		__wxAppCode__['pages/report/home/index.json'] = {"usingComponents":{"mp-navigation-bar":"../../../components/weui-miniprogram/navigation-bar/navigation-bar","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationStyle":"custom","navigationBarTitleText":"穗康"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/report/home/index.wxml'] = [$gwx, './pages/report/home/index.wxml'];else __wxAppCode__['pages/report/home/index.wxml'] = $gwx( './pages/report/home/index.wxml' );
		__wxAppCode__['pages/report/index/index.json'] = {"usingComponents":{"g-input-map":"/components/gsd-ui/g-input-map/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":""};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/report/index/index.wxml'] = [$gwx, './pages/report/index/index.wxml'];else __wxAppCode__['pages/report/index/index.wxml'] = $gwx( './pages/report/index/index.wxml' );
		__wxAppCode__['pages/report/inform/index.json'] = {"usingComponents":{"g-input-map":"/components/gsd-ui/g-input-map/index","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationBarTitleText":"疫情线索上报"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/report/inform/index.wxml'] = [$gwx, './pages/report/inform/index.wxml'];else __wxAppCode__['pages/report/inform/index.wxml'] = $gwx( './pages/report/inform/index.wxml' );
		__wxAppCode__['pages/report/msg/index.json'] = {"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/report/msg/index.wxml'] = [$gwx, './pages/report/msg/index.wxml'];else __wxAppCode__['pages/report/msg/index.wxml'] = $gwx( './pages/report/msg/index.wxml' );
		__wxAppCode__['pages/share-company-code/index.json'] = {"navigationBarBackgroundColor":"#ffffff","navigationBarTextStyle":"black","navigationBarTitleText":"关联码","enablePullDownRefresh":true,"usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/share-company-code/index.wxml'] = [$gwx, './pages/share-company-code/index.wxml'];else __wxAppCode__['pages/share-company-code/index.wxml'] = $gwx( './pages/share-company-code/index.wxml' );
		__wxAppCode__['pages/stat/index.json'] = {"usingComponents":{"mp-navigation-bar":"../../components/weui-miniprogram/navigation-bar/navigation-bar","home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"},"navigationStyle":"custom","navigationBarTitleText":"穗康"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/stat/index.wxml'] = [$gwx, './pages/stat/index.wxml'];else __wxAppCode__['pages/stat/index.wxml'] = $gwx( './pages/stat/index.wxml' );
		__wxAppCode__['pages/web-view/index.json'] = {"navigationBarTitleText":"","usingComponents":{"home-tips":"/components/home-tips/index","g-speech":"/components/g-speech/index","g-collapse":"/components/gsd-ui/g-collapse/index","g-collapse-pane":"/components/gsd-ui/g-collapse-pane/index","g-form-number":"/components/gsd-ui/g-form-number/index","g-address-item":"/components/gsd-ui/g-address-item/index","g-address-map":"/components/gsd-ui/g-address-map/index","g-agree":"/components/gsd-ui/g-agree/index","g-auth-footer":"/components/gsd-ui/g-auth-footer/index","g-badge":"/components/gsd-ui/g-badge/index","g-banner":"/components/gsd-ui/g-banner/index","g-button-group":"/components/gsd-ui/g-button-group/index","g-calendar":"/components/gsd-ui/g-calendar/index","g-card":"/components/gsd-ui/g-card/index","g-cascader":"/components/gsd-ui/g-cascader/index","g-cell":"/components/gsd-ui/g-cell/index","g-checkbox-group":"/components/gsd-ui/g-checkbox-group/index","g-checkbox-label":"/components/gsd-ui/g-checkbox-label/index","g-date-range-picker":"/components/gsd-ui/g-date-range-picker/index","g-circle":"/components/gsd-ui/g-circle/index","g-dropdown":"/components/gsd-ui/g-dropdown/index","g-footer":"/components/gsd-ui/g-footer/index","g-form":"/components/gsd-ui/g-form/index","g-plate-number-keyboard":"/components/gsd-ui/g-plate-number-keyboard/index","g-form-item":"/components/gsd-ui/g-form-item/index","g-form-cell":"/components/gsd-ui/g-form-cell/index","g-icon":"/components/gsd-ui/g-icon/index","g-index-list":"/components/gsd-ui/g-index-list/index","g-input":"/components/gsd-ui/g-input/index","g-map":"/components/gsd-ui/g-map/index","g-modal":"/components/gsd-ui/g-modal/index","g-msg":"/components/gsd-ui/g-msg/index","g-form-phoneVCode":"/components/gsd-ui/g-form-phoneVCode/index","g-picker":"/components/gsd-ui/g-picker/index","g-picker-view":"/components/gsd-ui/g-picker-view/index","g-poplayer":"/components/gsd-ui/g-poplayer/index","g-popover":"/components/gsd-ui/g-popover/index","g-preview":"/components/gsd-ui/g-preview/index","g-preview-item":"/components/gsd-ui/g-preview-item/index","g-radio-group":"/components/gsd-ui/g-radio-group/index","g-region":"/components/gsd-ui/g-region/index","g-region-picker":"/components/gsd-ui/g-region-picker/index","g-search":"/components/gsd-ui/g-search/index","g-select":"/components/gsd-ui/g-select/index","g-selector":"/components/gsd-ui/g-selector/index","g-switch":"/components/gsd-ui/g-switch/index","g-tab-pane":"/components/gsd-ui/g-tab-pane/index","g-tabs":"/components/gsd-ui/g-tabs/index","g-textarea":"/components/gsd-ui/g-textarea/index","g-timeline":"/components/gsd-ui/g-timeline/index","g-timeline-item":"/components/gsd-ui/g-timeline-item/index","g-tips":"/components/gsd-ui/g-tips/index","g-title":"/components/gsd-ui/g-title/index","g-upload":"/components/gsd-ui/g-upload/index","g-nav-box":"/components/gsd-ui/g-nav-box/index","g-nav-box-item":"/components/gsd-ui/g-nav-box-item/index","g-table":"/components/gsd-ui/g-table/index","g-wrapper":"/components/gsd-ui/g-wrapper/index","my-hover":"/components/hover-button/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/web-view/index.wxml'] = [$gwx, './pages/web-view/index.wxml'];else __wxAppCode__['pages/web-view/index.wxml'] = $gwx( './pages/web-view/index.wxml' );
		__wxAppCode__['project.config.json'] = {
	"description": "项目配置文件",
	"packOptions": {
		"ignore": []
	},
	"setting": {
		"urlCheck": false,
		"es6": true,
		"postcss": true,
		"minified": true,
		"newFeature": true,
		"coverView": true,
		"nodeModules": true,
		"autoAudits": false,
		"showShadowRootInWxmlPanel": true,
		"scopeDataCheck": false,
		"checkInvalidKey": true,
		"checkSiteMap": true,
		"uploadWithSourceMap": true,
		"babelSetting": {
			"ignore": [],
			"disablePlugins": [],
			"outputPath": ""
		},
		"preloadBackgroundData": false
	},
	"compileType": "miniprogram",
	"libVersion": "2.10.1",
	"appid": "wx2ac2313767a99df9",
	"projectname": "wyj-gz",
	"debugOptions": {
		"hidedInDevtools": []
	},
	"isGameTourist": false,
	"simulatorType": "wechat",
	"simulatorPluginLibVersion": {},
	"condition": {
		"search": {
			"current": -1,
			"list": []
		},
		"conversation": {
			"current": -1,
			"list": []
		},
		"plugin": {
			"current": -1,
			"list": []
		},
		"game": {
			"currentL": -1,
			"list": []
		},
		"gamePlugin": {
			"current": -1,
			"list": []
		},
		"miniprogram": {
			"current": -1,
			"list": [
				{
					"id": 0,
					"name": "pages/report/home/index",
					"pathName": "pages/report/home/index",
					"query": "isFromBuy\x3d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/index/index",
					"pathName": "pages/report/index/index",
					"query": "isFromBuy\x3d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/msg/index",
					"pathName": "pages/report/msg/index",
					"query": "target\x3dcompany",
					"scene": null
				},
				{
					"id": 5,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "",
					"scene": null
				},
				{
					"id": 6,
					"name": "packages/buy/pages/result-ok/index",
					"pathName": "packages/buy/pages/result-ok/index",
					"query": "",
					"scene": null
				},
				{
					"id": 7,
					"name": "packages/buy/pages/result-fail/index",
					"pathName": "packages/buy/pages/result-fail/index",
					"query": "",
					"scene": null
				},
				{
					"id": 8,
					"name": "packages/buy/pages/notice/index",
					"pathName": "packages/buy/pages/notice/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/inform/index",
					"pathName": "pages/report/inform/index",
					"query": "",
					"scene": null
				},
				{
					"id": 8,
					"name": "packages/buy/pages/over/index",
					"pathName": "packages/buy/pages/over/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/donate/contact/index",
					"pathName": "pages/donate/contact/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/diagnosis/index",
					"pathName": "pages/diagnosis/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/index/index",
					"pathName": "pages/report/index/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/mine/index/index",
					"pathName": "pages/mine/index/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/buy/reservation-list/index",
					"pathName": "pages/buy/reservation-list/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/home/index",
					"pathName": "pages/report/home/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/diagnosis/index",
					"pathName": "pages/diagnosis/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/report/msg/index",
					"pathName": "pages/report/msg/index",
					"query": "isFromBuy\x3d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/reservation-list/index",
					"pathName": "packages/buy/pages/reservation-list/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/buy/notice/index",
					"pathName": "pages/buy/notice/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "",
					"scene": null
				},
				{
					"id": 20,
					"name": "pages/report/msg/index",
					"pathName": "pages/report/msg/index",
					"query": "isFromBuy\x3d1",
					"scene": null
				},
				{
					"id": 21,
					"name": "pages/report/msg/index",
					"pathName": "pages/report/msg/index",
					"query": " info\x3d%7B%22username%22%3A%22%E8%B0%AD%E6%B1%9D%E6%B4%BB%22%2C%22gender%22%3A%22%E7%94%B7%22%2C%22isChinese%22%3A1%2C%22nativePlace%22%3A%22%E5%B9%BF%E4%B8%9C%22%2C%22domicilePlace%22%3A2%2C%22phone%22%3A%2215521372774%22%2C%22birthday%22%3A%221989-07-15%22%2C%22identity%22%3A%22441702198907153858%22%2C%22identityType%22%3A1%2C%22street%22%3A%22%E5%A4%A7%E7%9F%B3%E8%A1%97%E9%81%93%22%2C%22addr%22%3A%22401%22%2C%22residentFlag%22%3A1%2C%22residentCondition%22%3A1%2C%22returnDate%22%3A%22%22%2C%22recentRegionName%22%3A%22%22%2C%22travelRegionClass%22%3A%22%22%2C%22socialContact%22%3A%22%22%2C%22socialContact1%22%3A%22%22%2C%22socialContact2%22%3A%22%22%2C%22quasiReturnDate%22%3A%22%22%2C%22contactDateRecent%22%3A%22%22%2C%22contactDateLike%22%3A%22%22%2C%22healthState%22%3A1%2C%22symptoms%22%3A%5B1%5D%2C%22symptomDscr%22%3A%22%22%2C%22clueType%22%3A0%2C%22systemInfo%22%3A%7B%22model%22%3A%22iPhone%206%2F7%2F8%22%2C%22pixelRatio%22%3A2%2C%22windowWidth%22%3A375%2C%22windowHeight%22%3A619%2C%22system%22%3A%22iOS%2010.0.1%22%2C%22language%22%3A%22zh%22%2C%22version%22%3A%227.0.4%22%2C%22screenWidth%22%3A375%2C%22screenHeight%22%3A667%2C%22SDKVersion%22%3A%222.10.1%22%2C%22brand%22%3A%22devtools%22%2C%22fontSizeSetting%22%3A16%2C%22benchmarkLevel%22%3A1%2C%22batteryLevel%22%3A100%2C%22statusBarHeight%22%3A20%2C%22safeArea%22%3A%7B%22right%22%3A375%2C%22bottom%22%3A667%2C%22left%22%3A0%2C%22top%22%3A20%2C%22width%22%3A375%2C%22height%22%3A647%7D%2C%22platform%22%3A%22devtools%22%2C%22devicePixelRatio%22%3A2%7D%2C%22recentInHubei%22%3A0%2C%22areaCode%22%3A%22440113000000%22%2C%22streetCode%22%3A%22440113004000%22%2C%22community%22%3A%22%E5%A4%A7%E7%9F%B3%E7%A4%BE%E5%8C%BA%22%2C%22communityCode%22%3A%22440113004001%22%2C%22area%22%3A%22%E7%95%AA%E7%A6%BA%E5%8C%BA%22%2C%22city%22%3A%22%E5%B9%BF%E5%B7%9E%E5%B8%82%22%2C%22cityCode%22%3A%22440100%22%7D",
					"scene": null
				},
				{
					"id": -1,
					"name": "修改预约",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": 30,
					"name": "packages/buy/pages/form/index",
					"pathName": "packages/buy/pages/form/index",
					"query": "action\x3d2",
					"scene": null
				},
				{
					"id": -1,
					"name": "健康码引导",
					"pathName": "packages/health-code/pages/report-health/index",
					"query": "",
					"scene": null
				},
				{
					"id": -1,
					"name": "packages/health-code/pages/mutual-sweep/index",
					"pathName": "packages/health-code/pages/mutual-sweep/index",
					"query": "scene\x3d43e1eb5da90ce58d15549498d7ae2039",
					"scene": 1011
				},
				{
					"id": -1,
					"name": "葵花码",
					"pathName": "packages/health-code/pages/mutual-sweep/index",
					"query": "scene\x3d43e1eb5da90ce58d15549498d7ae2039",
					"scene": null
				},
				{
					"id": 34,
					"name": "太阳码测试",
					"pathName": "packages/health-code/pages/mutual-sweep/index",
					"query": "scene\x3d43c3aaeb74dd256612820fa0695631d1",
					"scene": null
				},
				{
					"id": -1,
					"name": "pages/stat/index",
					"pathName": "/pages/report/index/index?path\x3d/packages/health-code/pages/mutual-sweep/index?scene\x3d123\x26type\x3d1",
					"query": "",
					"scene": null
				}
			]
		}
	}
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
  "action": "allow",
  "page": "*"
  }]
};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("components/gsd-lib/anim/anim.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"==("undefined"==typeof exports?"undefined":o(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).anim=e()}(void 0,function(){function i(t){return e=t.reduce(function(t,e){return Object.keys(e).forEach(function(n){if(p.includes(n))return t[n].push(e[n]);h.includes(n)?t[n]=Object.assign({},t[n],e[n]):t[n]=e[n]}),t},function(){var t=p.reduce(function(t,e){return t[e]=[],t},{});return Object.assign({mixins:[],data:{}},t)}()),p.reduce(function(t,e){return t[e]&&t[e].length>0?(t["__anim_"+e]=t[e].slice(),t[e]=function(){for(var n=this,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];t["__anim_"+e].forEach(function(t){t.apply(n,o)})}):delete t[e],t},e);var e}function a(t,e,n,r){function o(){a&&clearTimeout(a)}function i(){function i(){u=Date.now(),n.apply(f,l)}var f=this,s=Date.now()-u,l=arguments;c||(r&&!a&&i(),o(),void 0===r&&s>t?i():!0!==e&&(a=setTimeout(r?function(){a=void 0}:i,void 0===r?t-s:t)))}var a,c=!1,u=0;return"boolean"!=typeof e&&(r=n,n=e,e=void 0),i.cancel=function(){o(),c=!0},i}function c(t,e,n){return void 0===n?a(t,e,!1):a(t,n,!1!==e)}function u(t){return String.prototype.split.call(t,/[,[\].]+?/).filter(Boolean)}function f(t){if(t.watch){var e={};Object.keys(t.watch).forEach(function(n){var r=t.watch[n];if("function"==typeof r){var o=u(n).slice(0,-1),i=u(n).slice(-1)[0]||n;e[n]=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return u(e).reduce(function(t,e){return Object.hasOwnProperty.call(t,e)?t[e]:n},t)}(t.data,n);var a=t.data;o.forEach(function(t){a=a[t]});var f=Object.getOwnPropertyDescriptor(a,i);f&&Object.defineProperty(a,i,{configurable:f.configurable,enumerable:f.enumerable,get:function(){return f&&f.get?f.get():e[n]},set:c(10,function(o){var i=e[n];r.call(t,o,i),f&&f.set&&f.set(o),e[n]=o})})}})}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=getCurrentPages().slice(-1)[0],n=void 0;n=t.__anim__query?JSON.parse(decodeURIComponent(t.__anim__query)):{};var r,o={path:e.route,query:n};this.$route=o,this.setData&&this.setData({$route:o}),(r=this).$router={navigateTo:function(t){return t.__anim_route_type="navigateTo",O.length<10?j.navigateTo({url:l(t)}):r.$router.redirectTo(t)},navigateBack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return j.navigateBack({delta:t})},redirectTo:function(t){return t.__anim_route_type="redirectTo",j.redirectTo({url:l(t)})},reLaunch:function(t){return t.__anim_route_type="reLaunch",j.reLaunch({url:l(t)})},switchTab:function(t){return t.__anim_route_type="switchTab",j.switchTab({url:l(t)})},go:function(t){if(t<0)return j.navigateBack({delta:Math.abs(t)})}},"reLaunch"===n.__anim_route_type?O=[o]:O.push(o),this.$routes=O}function l(t){var e=encodeURIComponent(JSON.stringify(Object.assign({},t.query,{__anim_route_type:t.__anim_route_type})));return t.path+"?__anim__query="+e}function d(t){var e=C.slice();Array.isArray(t.mixins)&&(e=e.concat(t.mixins));var n=i(e.concat(t));if(n.store&&"function"==typeof n.store){var r=U(n.store);return Page(r(n))}return Page(n)}var p=["onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onPageScroll","onResize"],h=["data","computed","watch"],y=0,b=function(){function t(){e(this,t),this.subs=[],this.id=++y}return r(t,[{key:"addSub",value:function(t){this.subs.push(t)}},{key:"depend",value:function(){t.target&&t.target.addDep(this)}},{key:"notify",value:function(){this.subs.forEach(function(t){setTimeout(function(){return t.update()})})}}]),t}(),v=0,g=function(){function t(n,r,o){e(this,t),this.id=++v,this.depIdMap={},this.dep=new b,this.vm=n,this.fn=r,this.cb=o,this.value=this.getValue(),this.oldValue=void 0}return r(t,[{key:"getValue",value:function(){b.target=this;var t=this.fn.call(this.vm);return b.target=void 0,t}},{key:"update",value:function(){this.oldValue=this.value,this.value=this.getValue(),this.cb.call(this.vm)}},{key:"addDep",value:function(t){this.depIdMap.hasOwnProperty(t.id)||(t.addSub(this),this.depIdMap[t.id]=t)}},{key:"depend",value:function(){this.dep.depend()}}]),t}(),_={onLoad:function(){var e;"object"==o((e=this).data)&&"null"!==e.data&&Object.keys(e.data).forEach(function(t){var n=Object.assign({},e.data)[t],r=new b;Object.defineProperty(e.data,t,{set:function(t){t===n||t!=t&&n!=n||(n=t,r.notify())},get:function(){return r.depend(),n}})}),function(t){wx.nextTick?wx.nextTick(function(){return f(t)}):setTimeout(function(){return f(t)})}(this),function(e){if(e.computed){var n={};Object.keys(e.computed).forEach(function(r){var o=e.computed[r];if("function"==typeof o){var i=new g(e,o,function(){e.setData&&e.setData(t({},r,i.value))});e.data[r]=i.value,n[r]=i.value,Object.defineProperty(e.data,r,{configurable:!0,enumerable:!0,set:function(t){return t},get:function(){return i.depend(),i.value}})}}),e.setData&&e.setData(n)}}(this)}},m=Object.keys(wx).filter(function(t){return t.endsWith("Sync")}).map(function(t){return t.replace(/Sync$/,"")}).concat(["navigateTo","navigateBack","redirectTo","reLaunch"]).concat(["request","downloadFile","uploadFile"]).reduce(function(t,e){return t[e]=function(t){return function(e){return new Promise(function(n,r){t(Object.assign({},e,{success:function(t){e.success&&e.success(t),n(t)},fail:function(t){e.fail&&e.fail(t),r(t)}}))})}}(wx[e]),t},{}),j=Object.assign({},wx,m),O=[],w={onLoad:function(t){s.call(this,t)},onUnload:function(){(function(){O.pop()}).call(this)}},k={},S=[],x=function t(e,n){if(Object.prototype.toString.call(e)!==Object.prototype.toString.call(n))return!1;if(Object.keys(e).length!==Object.keys(n).length)return!1;var r=!0;return Object.keys(e).forEach(function(o){switch(Object.prototype.toString.call(e[o])){case"[object Object]":t(e[o],n[o])||(r=!1);break;case"[object Array]":T(e[o],n[o])||(r=!1);break;default:e[o]!==n[o]&&(r=!1)}}),r},T=function(t,e){if(Object.prototype.toString.call(t)!==Object.prototype.toString.call(e))return!1;if(t.length!==e.length)return!1;var n=!0;return t.forEach(function(t,r){t!==e[r]&&(n=!1)}),n},P=function t(e,n){var r={};return Object.keys(e).forEach(function(o){if(!n||n.includes(o))switch(Object.prototype.toString.call(e[o])){case"[object Object]":r[o]=t(e[o]);break;case"[object Array]":r[o]=D(e[o]);break;default:r[o]=e[o]}}),r},D=function t(e){return e.map(function(e){switch(Object.prototype.toString.call(e)){case"[object Object]":return P(e);case"[object Array]":return t(e);default:return e}})},E=function(t){var e=Object.prototype.toString.call(t);return"[object Object]"===e||"[object Array]"===e},A=0,L=(wx.getSystemInfoSync().system,void 0);try{L=Proxy}catch(p){L=function(t,e){var n=Object.create(t.constructor.prototype,{__proxyhandler__:{value:e}});return Object.keys(t).forEach(function(e){Object.defineProperty(n,e,{enumerable:!0,get:function(){return this.__proxyhandler__.get(t,e)},set:function(n){return this.__proxyhandler__.set(t,e,n)}})}),n}}var R=L,I=function t(e,r){return Object.keys(e).forEach(function(n){E(e[n])&&(e[n]=t(e[n],r.concat([n])))}),new R(e,{get:function(t,e){if("__isProxy"===e)return!0;if("__data"===e)return q(r);var n=q(r.concat([e]));return void 0!==n?n:Reflect.get(t,e)},set:function(e,o,i){var a=i.__isProxy&&i.__data||i,c=E(a)&&t(P(a),r.concat([o]))||a,u=Reflect.set(e,o,c);return B(r.concat([o]),a),A++,setTimeout(function(){if(0==--A)for(var t=S.length-1;t>=0;t--){var e=n(S[t],3),r=e[0],o=e[1],i=e[2],a=o(k);x(i,a)||(S[t][2]=P(a),r.setData(a))}},5),u}})},q=function(t){return t.reduce(function(t,e){return t&&t[e]||void 0},k)},B=function(t,e){var n=t.length,r=t[n-1],o=k;t.forEach(function(t,e){e!==n-1&&(o=o[t])}),o[r]=e},U=function(t){return function(e){var n=e.onLoad,r=e.onUnload;return e.onLoad=function(){var e=t(k);S.push([this,t,P(e)]),this.setData(e),n&&n.apply(this,arguments)},e.onUnload=function(){S.pop(),r&&r.call(this)},e}},$=Object.freeze({mapToData:U,observe:function(t,e){e=e||t.constructor.name.toLowerCase();var n=Object.getOwnPropertyNames(t);return t.__storeName__=e,k[e]||(k[e]=P(t,n)),I(t,[e])}}),C=[_,w];return d.mixin=function(t){C=C.concat(t)},{App:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return App(t)}),Page:d,wedux:$,wechat:j}}); 
 			}); 
		define("components/gsd-lib/crypto/crypto.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=t||function(t,e){var r={},i=r.lib={},n=function(){},o=i.Base={extend:function(t){n.prototype=this;var e=new n;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var n=0;n<t;n++)e[i+n>>>2]|=(r[n>>>2]>>>24-n%4*8&255)<<24-(i+n)%4*8;else if(65535<r.length)for(n=0;n<t;n+=4)e[i+n>>>2]=r[n>>>2];else e.push.apply(e,r);return this.sigBytes+=t,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r=[],i=0;i<e;i+=4)r.push(4294967296*t.random()|0);return new s.init(r,e)}}),c=r.enc={},a=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++){var n=e[i>>>2]>>>24-i%4*8&255;r.push((n>>>4).toString(16)),r.push((15&n).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new s.init(r,e/2)}},f=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var r=[],i=0;i<t;i++)r.push(String.fromCharCode(e[i>>>2]>>>24-i%4*8&255));return r.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new s.init(r,e)}},h=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=i.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,i=r.words,n=r.sigBytes,o=this.blockSize,c=n/(4*o);if(e=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*o,n=t.min(4*e,n),e){for(var a=0;a<e;a+=o)this._doProcessBlock(i,a);a=i.splice(0,e),r.sigBytes-=n}return new s.init(a,n)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=u.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}});var p=r.algo={};return r}(Math);!function(){var e=t,r=e.lib.WordArray;e.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp(),t=[];for(var n=0;n<r;n+=3)for(var o=(e[n>>>2]>>>24-n%4*8&255)<<16|(e[n+1>>>2]>>>24-(n+1)%4*8&255)<<8|e[n+2>>>2]>>>24-(n+2)%4*8&255,s=0;4>s&&n+.75*s<r;s++)t.push(i.charAt(o>>>6*(3-s)&63));if(e=i.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var e=t.length,i=this._map;(n=i.charAt(64))&&-1!=(n=t.indexOf(n))&&(e=n);for(var n=[],o=0,s=0;s<e;s++)if(s%4){var c=i.indexOf(t.charAt(s-1))<<s%4*2,a=i.indexOf(t.charAt(s))>>>6-s%4*2;n[o>>>2]|=(c|a)<<24-o%4*8,o++}return r.create(n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function r(t,e,r,i,n,o,s){return((t=t+(e&r|~e&i)+n+s)<<o|t>>>32-o)+e}function i(t,e,r,i,n,o,s){return((t=t+(e&i|r&~i)+n+s)<<o|t>>>32-o)+e}function n(t,e,r,i,n,o,s){return((t=t+(e^r^i)+n+s)<<o|t>>>32-o)+e}function o(t,e,r,i,n,o,s){return((t=t+(r^(e|~i))+n+s)<<o|t>>>32-o)+e}for(var s=t,c=(f=s.lib).WordArray,a=f.Hasher,f=s.algo,h=[],u=0;64>u;u++)h[u]=4294967296*e.abs(e.sin(u+1))|0;f=f.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(s=0;16>s;s++){a=t[c=e+s];t[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var s=this._hash.words,c=t[e+0],a=t[e+1],f=t[e+2],u=t[e+3],p=t[e+4],d=t[e+5],l=t[e+6],y=t[e+7],_=t[e+8],v=t[e+9],g=t[e+10],B=t[e+11],k=t[e+12],x=t[e+13],m=t[e+14],S=t[e+15],z=s[0],w=s[1],C=s[2],E=s[3],w=o(w=o(w=o(w=o(w=n(w=n(w=n(w=n(w=i(w=i(w=i(w=i(w=r(w=r(w=r(w=r(w,C=r(C,E=r(E,z=r(z,w,C,E,c,7,h[0]),w,C,a,12,h[1]),z,w,f,17,h[2]),E,z,u,22,h[3]),C=r(C,E=r(E,z=r(z,w,C,E,p,7,h[4]),w,C,d,12,h[5]),z,w,l,17,h[6]),E,z,y,22,h[7]),C=r(C,E=r(E,z=r(z,w,C,E,_,7,h[8]),w,C,v,12,h[9]),z,w,g,17,h[10]),E,z,B,22,h[11]),C=r(C,E=r(E,z=r(z,w,C,E,k,7,h[12]),w,C,x,12,h[13]),z,w,m,17,h[14]),E,z,S,22,h[15]),C=i(C,E=i(E,z=i(z,w,C,E,a,5,h[16]),w,C,l,9,h[17]),z,w,B,14,h[18]),E,z,c,20,h[19]),C=i(C,E=i(E,z=i(z,w,C,E,d,5,h[20]),w,C,g,9,h[21]),z,w,S,14,h[22]),E,z,p,20,h[23]),C=i(C,E=i(E,z=i(z,w,C,E,v,5,h[24]),w,C,m,9,h[25]),z,w,u,14,h[26]),E,z,_,20,h[27]),C=i(C,E=i(E,z=i(z,w,C,E,x,5,h[28]),w,C,f,9,h[29]),z,w,y,14,h[30]),E,z,k,20,h[31]),C=n(C,E=n(E,z=n(z,w,C,E,d,4,h[32]),w,C,_,11,h[33]),z,w,B,16,h[34]),E,z,m,23,h[35]),C=n(C,E=n(E,z=n(z,w,C,E,a,4,h[36]),w,C,p,11,h[37]),z,w,y,16,h[38]),E,z,g,23,h[39]),C=n(C,E=n(E,z=n(z,w,C,E,x,4,h[40]),w,C,c,11,h[41]),z,w,u,16,h[42]),E,z,l,23,h[43]),C=n(C,E=n(E,z=n(z,w,C,E,v,4,h[44]),w,C,k,11,h[45]),z,w,S,16,h[46]),E,z,f,23,h[47]),C=o(C,E=o(E,z=o(z,w,C,E,c,6,h[48]),w,C,y,10,h[49]),z,w,m,15,h[50]),E,z,d,21,h[51]),C=o(C,E=o(E,z=o(z,w,C,E,k,6,h[52]),w,C,u,10,h[53]),z,w,g,15,h[54]),E,z,a,21,h[55]),C=o(C,E=o(E,z=o(z,w,C,E,_,6,h[56]),w,C,S,10,h[57]),z,w,l,15,h[58]),E,z,x,21,h[59]),C=o(C,E=o(E,z=o(z,w,C,E,p,6,h[60]),w,C,B,10,h[61]),z,w,f,15,h[62]),E,z,v,21,h[63]);s[0]=s[0]+z|0,s[1]=s[1]+w|0,s[2]=s[2]+C|0,s[3]=s[3]+E|0},_doFinalize:function(){var t=this._data,r=t.words,i=8*this._nDataBytes,n=8*t.sigBytes;r[n>>>5]|=128<<24-n%32;var o=e.floor(i/4294967296);for(r[15+(n+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(r.length+1),this._process(),r=(t=this._hash).words,i=0;4>i;i++)n=r[i],r[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8);return t},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=a._createHelper(f),s.HmacMD5=a._createHmacHelper(f)}(Math),function(){var e=t,r=e.lib,i=r.Base,n=r.WordArray,o=(r=e.algo).EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:r.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=(c=this.cfg).hasher.create(),i=n.create(),o=i.words,s=c.keySize,c=c.iterations;o.length<s;){a&&r.update(a);var a=r.update(t).finalize(e);r.reset();for(var f=1;f<c;f++)a=r.finalize(a),r.reset();i.concat(a)}return i.sigBytes=4*s,i}});e.EvpKDF=function(t,e,r){return o.create(r).compute(t,e)}}(),t.lib.Cipher||function(e){var r=(l=t).lib,i=r.Base,n=r.WordArray,o=r.BufferedBlockAlgorithm,s=l.enc.Base64,c=l.algo.EvpKDF,a=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,r,i){return("string"==typeof r?y:d).encrypt(t,e,r,i)},decrypt:function(e,r,i){return("string"==typeof r?y:d).decrypt(t,e,r,i)}}}});r.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var f=l.mode={},h=function(t,e,r){var i=this._iv;i?this._iv=void 0:i=this._prevBlock;for(var n=0;n<r;n++)t[e+n]^=i[n]},u=(r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();u.Encryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;h.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),u.Decryptor=u.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),h.call(this,t,e,i),this._prevBlock=n}}),f=f.CBC=u,u=(l.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=(r=r-t.sigBytes%r)<<24|r<<16|r<<8|r,o=[],s=0;s<r;s+=4)o.push(i);r=n.create(o,r),t.concat(r)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},r.BlockCipher=a.extend({cfg:a.cfg.extend({mode:f,padding:u}),reset:function(){a.reset.call(this);var t=(e=this.cfg).iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=e.createEncryptor;else r=e.createDecryptor,this._minBufferSize=1;this._mode=r.call(e,this,t&&t.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var p=r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),f=(l.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(s)},parse:function(t){var e=(t=s.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var r=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return p.create({ciphertext:t,salt:r})}},d=r.SerializableCipher=i.extend({cfg:i.extend({format:f}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i);return e=n.finalize(e),n=n.cfg,p.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),l=(l.kdf={}).OpenSSL={execute:function(t,e,r,i){return i||(i=n.random(8)),t=c.create({keySize:e+r}).compute(t,i),r=n.create(t.words.slice(e),4*r),t.sigBytes=4*e,p.create({key:t,iv:r,salt:i})}},y=r.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:l}),encrypt:function(t,e,r,i){return i=this.cfg.extend(i),r=i.kdf.execute(r,t.keySize,t.ivSize),i.iv=r.iv,(t=d.encrypt.call(this,t,e,r.key,i)).mixIn(r),t},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt),i.iv=r.iv,d.decrypt.call(this,t,e,r.key,i)}})}(),function(){for(var e=t,r=e.lib.BlockCipher,i=e.algo,n=[],o=[],s=[],c=[],a=[],f=[],h=[],u=[],p=[],d=[],l=[],y=0;256>y;y++)l[y]=128>y?y<<1:y<<1^283;for(var _=0,v=0,y=0;256>y;y++){var g=(g=v^v<<1^v<<2^v<<3^v<<4)>>>8^255&g^99;n[_]=g,o[g]=_;var B=l[_],k=l[B],x=l[k],m=257*l[g]^16843008*g;s[_]=m<<24|m>>>8,c[_]=m<<16|m>>>16,a[_]=m<<8|m>>>24,f[_]=m,m=16843009*x^65537*k^257*B^16843008*_,h[g]=m<<24|m>>>8,u[g]=m<<16|m>>>16,p[g]=m<<8|m>>>24,d[g]=m,_?(_=B^l[l[l[x^B]]],v^=l[l[v]]):_=v=1}var S=[0,1,2,4,8,16,32,64,128,27,54],i=i.AES=r.extend({_doReset:function(){for(var t=(r=this._key).words,e=r.sigBytes/4,r=4*((this._nRounds=e+6)+1),i=this._keySchedule=[],o=0;o<r;o++)if(o<e)i[o]=t[o];else{var s=i[o-1];o%e?6<e&&4==o%e&&(s=n[s>>>24]<<24|n[s>>>16&255]<<16|n[s>>>8&255]<<8|n[255&s]):(s=s<<8|s>>>24,s=n[s>>>24]<<24|n[s>>>16&255]<<16|n[s>>>8&255]<<8|n[255&s],s^=S[o/e|0]<<24),i[o]=i[o-e]^s}for(t=this._invKeySchedule=[],e=0;e<r;e++)o=r-e,s=e%4?i[o]:i[o-4],t[e]=4>e||4>=o?s:h[n[s>>>24]]^u[n[s>>>16&255]]^p[n[s>>>8&255]]^d[n[255&s]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,c,a,f,n)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,u,p,d,o),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,c){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++)var y=i[f>>>24]^n[h>>>16&255]^o[u>>>8&255]^s[255&p]^r[d++],_=i[h>>>24]^n[u>>>16&255]^o[p>>>8&255]^s[255&f]^r[d++],v=i[u>>>24]^n[p>>>16&255]^o[f>>>8&255]^s[255&h]^r[d++],p=i[p>>>24]^n[f>>>16&255]^o[h>>>8&255]^s[255&u]^r[d++],f=y,h=_,u=v;y=(c[f>>>24]<<24|c[h>>>16&255]<<16|c[u>>>8&255]<<8|c[255&p])^r[d++],_=(c[h>>>24]<<24|c[u>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],v=(c[u>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&h])^r[d++],p=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[h>>>8&255]<<8|c[255&u])^r[d++],t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=p},keySize:8});e.AES=r._createHelper(i)}(),t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),module.exports=t; 
 			}); 
		define("components/gsd-lib/crypto/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./crypto");e.encryptByAES=function(t,r){if(!r||16!==r.length)throw"密钥 key 必须是十六位字符串";var n=e.enc.Utf8.parse(t);return e.AES.encrypt(n,e.enc.Utf8.parse(r),{mode:e.mode.ECB,padding:e.pad.Pkcs7}).ciphertext.toString().toUpperCase()},e.decryptByAES=function(t,r){if(!r||16!==r.length)throw"密钥 key 必须是十六位字符串";var n=e.enc.Hex.parse(t),c=e.enc.Base64.stringify(n);return e.AES.decrypt(c,e.enc.Utf8.parse(r),{mode:e.mode.ECB,padding:e.pad.Pkcs7}).toString(e.enc.Utf8).toString()},module.exports=e; 
 			}); 
		define("components/gsd-lib/dayjs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.dayjs=n()}(void 0,function(){var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",u="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,c=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+d(n,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),s=e-r<0,i=t.clone().add(n+(s?-1:1),"months");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(o){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[o]||String(o||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},$="en",l={};l[$]=h;var m=function(t){return t instanceof b},y=function(t,e,n){var r=void 0;if(!t)return null;if("string"==typeof t)l[t]&&(r=t),e&&(l[t]=e,r=t);else{var s=t.name;l[s]=t,r=s}return n||($=r),r},p=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new b(n)},S=function(t,e){return p(t,{locale:e.$L})},M=f;M.parseLocale=y,M.isDayjs=m,M.wrapper=S;var b=function(){function h(t){this.parse(t)}var d=h.prototype;return d.parse=function(t){var e=void 0,n=void 0;this.$d=null===(e=t.date)?new Date(NaN):M.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(o))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},d.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||$},d.$utils=function(){return M},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.$compare=function(t){return this.valueOf()-p(t).valueOf()},d.isSame=function(t){return 0===this.$compare(t)},d.isBefore=function(t){return this.$compare(t)<0},d.isAfter=function(t){return this.$compare(t)>0},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var c=this,h=!!M.isUndefined(o)||o,d=function(t,e){var n=S(new Date(c.$y,e,t),c);return h?n:n.endOf(s)},f=function(t,e){return S(c.toDate()[t].apply(c.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),c)};switch(M.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case"date":return f("setHours",0);case r:return f("setMinutes",1);case n:return f("setSeconds",2);case e:return f("setMilliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,o){switch(M.prettyUnit(i)){case s:this.$d.setDate(this.$D+(o-this.$W));break;case"date":this.$d.setDate(o);break;case a:this.$d.setMonth(o);break;case u:this.$d.setFullYear(o);break;case r:this.$d.setHours(o);break;case n:this.$d.setMinutes(o);break;case e:this.$d.setSeconds(o);break;case t:this.$d.setMilliseconds(o)}return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,o){var c=this;t=Number(t);var h=void 0,d=M.prettyUnit(o),f=function(e,n){var r=c.set("date",1).set(e,n+t);return r.set("date",Math.min(c.$D,r.daysInMonth()))};if(d===a)return f(a,this.$M);if(d===u)return f(u,this.$y);switch(d){case n:h=6e4;break;case r:h=36e5;break;case s:h=864e5;break;case i:h=6048e5;break;case e:h=1e3;break;default:h=1}var $=this.valueOf()+t*h;return S($,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",r=M.padZoneStr(this.$d.getTimezoneOffset()),s=this.$locale(),i=s.weekdays,a=s.months,u=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)};return n.replace(c,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return M.padStart(e.$M+1,2,"0");case"MMM":return u(s.monthsShort,e.$M,a,3);case"MMMM":return a[e.$M];case"D":return String(e.$D);case"DD":return M.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(s.weekdaysMin,e.$W,i,2);case"ddd":return u(s.weekdaysShort,e.$W,i,3);case"dddd":return i[e.$W];case"H":return String(e.$H);case"HH":return M.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:M.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return M.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return M.padStart(e.$s,2,"0");case"SSS":return M.padStart(e.$ms,3,"0");case"Z":return r;default:return r.replace(":","")}})},d.diff=function(t,o,c){var h=M.prettyUnit(o),d=p(t),f=this-d,$=M.monthDiff(this,d);switch(h){case u:$/=12;break;case a:break;case"quarter":$/=3;break;case i:$=f/6048e5;break;case s:$=f/864e5;break;case r:$=f/36e5;break;case n:$=f/6e4;break;case e:$=f/1e3;break;default:$=f}return c?$:M.absFloor($)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.toDate().toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},h}();return p.extend=function(t,e){return t(e,b,p),p},p.locale=y,p.isDayjs=m,p.en=l[$],p}); 
 			}); 
		define("components/gsd-lib/event/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){this.listeners={},this.count=0};e.prototype={getGuid:function(e){var s=""+e+this.count;return this.count++,s},addEventListener:function(e,s,t){console.log("Event 监听事件：",e),s._guid=this.getGuid(e);for(var i=[],n=arguments.length,r=0;r<n;r++)i.push(arguments[r]);i=i.length>3?i.splice(3,i.length-1):[],void 0!==this.listeners[e]?this.listeners[e].push({scope:t,callback:s,args:i}):this.listeners[e]=[{scope:t,callback:s,args:i}]},removeEventListener:function(e){void 0!==this.listeners[e]&&(this.listeners[e]=[])},removeSingleEventListener:function(e,s,t){var i=this.listeners[e];if(i&&t){var n=i.findIndex(function(e){return e.scope===t});-1!==n&&this.listeners[e].splice(n,1)}else if(i){var r=i.findIndex(function(e){return e.callback._guid===s._guid});-1!==r&&this.listeners[e].splice(r,1)}},hasEventListener:function(e,s,t){if(void 0!==this.listeners[e]){var i=this.listeners[e].length;if(void 0===s&&void 0===t)return i>0;for(var n=0;n<i;n++){var r=this.listeners[e][n];if((!t||r.scope==t)&&r.callback==s)return!0}}return!1},dispatch:function(e,s){console.log("Event 发布事件：",e,s);for(var t={type:e,target:s},i=[],n=arguments.length,r=0;r<n;r++)i.push(arguments[r]);if(i=i.length>2?i.splice(2,i.length-1):[],i=[t].concat(i),void 0!==this.listeners[e])for(var l=this.listeners[e].slice(),o=l.length,c=0;c<o;c++){var a=l[c];if(a&&a.callback){var h=i.concat(a.args);a.callback.apply(a.scope,h)}}},getEvents:function(){var e="";for(var s in this.listeners)for(var t=this.listeners[s].length,i=0;i<t;i++){var n=this.listeners[s][i];e+=n.scope&&n.scope.className?n.scope.className:"anonymous",e+=" listen for '"+s+"'\n"}return e}},module.exports=new e; 
 			}); 
		define("components/gsd-lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./event/index"),t=require("./map/index"),n=require("./crypto/index"),i=require("./dayjs/index"),a=require("./utils/index"),o=require("./storage/index"),s=require("./anim/anim.min.js"),c=s.wedux,d=Object.assign({Event:r,Map:t,CryptoJS:n,dayjs:i,wedux:c,Anim:s,Storage:o},a);[[["addEventListener","removeEventListener","removeSingleEventListener","hasEventListener","dispatch","getEvents"],r,d],[["search","getSuggestion","reverseGeocoder","geocoder","getCityList","getDistrictByCityId","calculateDistance"],t,d],[["encryptByAES","decryptByAES"],n,d],[["mapToData","observe"],c,d],[["setStorageSync","getStorageSync","removeStorageSync","clearStorageSync","clearExpiredStorage"],o,d]].forEach(function(r){a.extendMethods.apply(a,e(r))}),exports.default=d; 
 			}); 
		define("components/gsd-lib/map/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./qmap");module.exports=new e({key:"ZFDBZ-43YKD-IHC4T-HGXTT-WEZJ6-DLB5G"}); 
 			}); 
		define("components/gsd-lib/map/qmap.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),o={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},i={location2query:function(t){if("string"==typeof t)return t;for(var e="",o=0;o<t.length;o++){var i=t[o];e&&(e+=";"),i.location&&(e=e+i.location.lat+","+i.location.lng),i.latitude&&i.longitude&&(e=e+i.latitude+","+i.longitude)}return e},getWXLocation:function(t,e,o){wx.getLocation({type:"gcj02",success:t,fail:e,complete:o})},getLocationParam:function(t){return"string"==typeof t&&(t=2===t.split(",").length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}),t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(i),t.complete(i),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var i=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+" location参数格式有误");return t.fail(i),t.complete(i),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},buildWxRequestConfig:function(t,e){var i=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var o=e.data;0===o.status?t.success(o):t.fail(o)},e.fail=function(e){e.statusCode=o.WX_ERR_CODE,t.fail(i.buildErrorConfig(o.WX_ERR_CODE,result.errMsg))},e.complete=function(e){switch(+e.statusCode){case o.WX_ERR_CODE:t.complete(i.buildErrorConfig(o.WX_ERR_CODE,e.errMsg));break;case o.WX_OK_CODE:var r=e.data;0===r.status?t.complete(r):t.complete(i.buildErrorConfig(r.status,r.message));break;default:t.complete(i.buildErrorConfig(o.SYSTEM_ERR,o.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,r,a){var n=this;r=r||function(e){e.statusCode=o.WX_ERR_CODE,t.fail(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},a=a||function(e){e.statusCode==o.WX_ERR_CODE&&t.complete(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},t.location?n.checkLocation(t)&&e(i.getLocationParam(t.location)):n.getWXLocation(e,r,a)}},r=function(){function o(e){if(t(this,o),!e.key)throw Error("key值不能为空");this.key=e.key}return e(o,[{key:"search",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:e.key};t.address_format&&(o.address_format=t.address_format),t.filter&&(o.filter=t.filter);var r=t.distance||"1000",a=t.auto_extend||1;i.locationProcess(t,function(e){o.boundary="nearby("+e.latitude+","+e.longitude+","+r+","+a+")",wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/search",data:o}))})}}},{key:"getSuggestion",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),i.checkKeyword(t)){var o={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/place/v1/suggestion",data:o}))}}},{key:"reverseGeocoder",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:e.key};t.poi_options&&(o.poi_options=t.poi_options);i.locationProcess(t,function(e){o.location=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))})}},{key:"geocoder",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"address")){var o={address:t.address,output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/geocoder/v1/",data:o}))}}},{key:"getCityList",value:function(t){var e=this;t=t||{},i.polyfillParam(t);var o={output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/list",data:o}))}},{key:"getDistrictByCityId",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"id")){var o={id:t.id||"",output:"json",key:e.key};wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/district/v1/getchildren",data:o}))}}},{key:"calculateDistance",value:function(t){var e=this;if(t=t||{},i.polyfillParam(t),!i.checkParamKeyEmpty(t,"to")){var o={mode:t.mode||"walking",to:i.location2query(t.to),output:"json",key:e.key};t.from&&(t.location=t.from),i.locationProcess(t,function(e){o.from=e.latitude+","+e.longitude,wx.request(i.buildWxRequestConfig(t,{url:"https://apis.map.qq.com/ws/distance/v1/",data:o}))})}}}]),o}();module.exports=r; 
 			}); 
		define("components/gsd-lib/report/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),r=function(){function r(t){e(this,r),this.originPage=Page,this.originApp=App,this.logTimer=null,this.config={stopReport:!1,isNet:!0,isSys:!0,isError:!1,autoReportPV:!1,autoReportCgi:!0,commonPageEId:"YSS_ALLPAGES_ONSHOW",getRemoteParamsUrl:"",reportUrl:"",intervalTime:3,reportLogsNum:5},this.reportData={openid:"",platform:"",report_type:2,path:"",type:1,code:-711,time:0,apn:"unknow",desc:"",rate:100,system_info:{},create_time:"",channel:"",source:"",expansion1:"",expansion2:"",expansion3:"",appid:"001",eid:"001",scene:"",region:""},this.config=Object.assign(this.config,t||{}),this.reportLogs=[],this._init()}return o(r,[{key:"startReport",value:function(){var e=this;e._logRequest(),e.logTimer=setInterval(function(){e._logRequest()},1e3*e.config.intervalTime)}},{key:"eventClick",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._statpid({report_type:2,type:1,code:200,rate:100,source:"click",eid:e,exp1:t.itemId||"",exp2:t.itemStatus||"",region:t.region||""})}},{key:"cgiSpeed",value:function(e){var t=1;0!==e.code&&(t=2),this._statpid({report_type:1,type:t,code:e.code,path:e.path,time:e.time,rate:100,source:"cgi"})}},{key:"pagePV",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._statpid({report_type:2,type:1,code:200,rate:100,source:"page",eid:e,region:t.region||""})}},{key:"_init",value:function(){this.config.stopReport||(this._spyApp(),this._spyPage(),this.config.autoReportCgi&&this._spyRequest(),this.config.isNet&&this._network(),this.config.isSys&&this._system())}},{key:"_spyApp",value:function(){var e=this,t=this;App=function(o){var r=o.onError||function(){},n=o.onLaunch||function(){},i=o.onHide||function(){};o.onLaunch=function(e){return t.reportData.appid=e.referrerInfo&&e.referrerInfo.appId||"",t.reportData.scene=e.scene,t.config.getRemoteParamsUrl&&wx.request({url:t.config.getRemoteParamsUrl,data:{}}).then(function(e){e.open&&(t.config=Object.assign(t.config,{intervalTime:e.sec||t.config.intervalTime,reportLogsNum:e.num||t.config.reportLogsNum,stopReport:!!e.stop}))}),n.apply(this,arguments)},e.config.isError&&(o.onError=function(e){var o=e.split(/\n/)||[],n=void 0,i=void 0,a=void 0,s=e.match(/\(.+?\)/);return s&&s.length&&(s=s[0]),s=s.replace(/\w.+js/g,function(e){return n=e,""}),(s=s.split(":"))&&s.length>1&&(a=parseInt(s[1]||0)),i=parseInt(s[2]||0),t._reportError(JSON.stringify({col:i,line:a,name:n,msg:o[0]+";"+o[1]+";"+o[2]+";",type:"js"})),r.apply(this,arguments)}),o.onHide=function(){return t.logTimer&&clearInterval(t.logTimer),t._logRequest(!0),i.apply(this,arguments)},t.originApp(o)}}},{key:"_spyPage",value:function(){var e=this;Page=function(t){var o=t.onShow||function(){};t.onShow=function(){return e.config.autoReportPV&&setTimeout(function(){e.pagePV(e.config.commonPageEId)},500),o.apply(this,arguments)},e.originPage(t)}}},{key:"_spyRequest",value:function(){var e=wx.request,t=this;Object.defineProperty(wx,"request",{configurable:!0,enumerable:!0,writable:!0,value:function(){var o=arguments[0]||{},r=Date.now(),n=o.complete||function(e){};return o.complete=function(e){return-1===o.url.indexOf(t.config.reportUrl)&&t.cgiSpeed({code:e.statusCode,time:Date.now()-r,path:o.url}),n.apply(this,arguments)},e.apply(this,arguments)}})}},{key:"_collectLogs",value:function(e){var o=[],r=this.reportLogs;Array.isArray(e)?o=e:o.push(e),o.forEach(function(e){for(var o in e){var r=e[o];(""===r||"object"===(void 0===r?"undefined":t(r))&&0===Object.keys(r).length)&&delete e[o]}}),r.length>100&&r.splice(0,o.length),this.reportLogs=r.concat(o)}},{key:"_statpid",value:function(e){if(!e.path){var t=getCurrentPages();if(t&&t.length){var o=t[t.length-1];e.path=o.__route__,e.ext=o.options||{}}}var r=this._getCookiedReportData(e);this._collectLogs(r)}},{key:"_reportError",value:function(e){this._statpid({report_type:2,type:3,code:-7001,rate:100,source:"click",desc:e})}},{key:"_getCookiedReportData",value:function(e){return Object.assign({},this.reportData,{openid:wx.getStorageSync("openid")||e.openid,type:e.type,report_type:e.report_type,eid:e.eid||"",path:e.path||"",desc:e.desc||"",time:e.time||0,create_time:+new Date,expansion1:e.exp1||"",expansion2:e.exp2||"",expansion3:e.exp3||"",expath:e.expath||"",source:e.source||"",region:e.region||wx.getStorageSync("reportRegion")||"",ext:e.ext||""})}},{key:"_logRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this;if(!t.config.stopReport){var o=t.reportLogs;if(0!==o.length){var r=o.splice(0,t.config.reportLogsNum);wx.request({url:t.config.reportUrl,header:{"x-tif-sid":wx.getStorageSync("tif-sid"),"x-tif-did":wx.getStorageSync("tif-did")},data:r,method:"POST",complete:function(n){e&&n.data&&0===Number(n.data.errcode)&&o.length>0&&t._logRequest(!0),n.data&&0!==Number(n.data.errcode)&&((r=r.filter(function(e){return 1!==e.rate})).forEach(function(e){e.rate=1}),r&&0!==r.length&&t._collectLogs(r))}})}}}},{key:"_network",value:function(){var e=this;wx.getNetworkType({success:function(t){e.reportData.apn=t.networkType}})}},{key:"_system",value:function(){var e=this;wx.getSystemInfo({success:function(t){e.reportData.system_info=t,e.reportData.platform=t.platform}})}}]),r}();module.exports=r; 
 			}); 
		define("components/gsd-lib/storage/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={_storage:wx,_expiration_key_prefix:"__expired___storage__",getTimestamp:function(){return Math.floor((new Date).getTime()/1e3)},setStorageSync:function(e,t,r){try{this._storage.setStorageSync(e,t)}catch(r){this.clearExpiredStorage();try{this._storage.setStorageSync(e,t)}catch(t){return console.error("当前存储的key为"+e+"，其value已超出微信数据缓存限制："),console.error("单个 key 允许存储的最大数据长度为 1MB"),console.error("所有数据存储上限为 10MB。"),t}}this.updateExpiration(e,r||604800)},getStorageSync:function(e){return this.isExpired(e)?(this.removeStorageSync(e),null):this._storage.getStorageSync(e)||null},peek:function(e){var t={value:this._storage.getStorageSync(e),timeLeft:this.getTimeLeft(e)};return t.isExpired=null!==t.timeLeft&&t.timeLeft<=0,t},getTimeLeft:function(e){var t=parseInt(this._storage.getStorageSync(this._expiration_key_prefix+e),10);return t&&!isNaN(t)?t-this.getTimestamp():null},isExpired:function(e){var t=this.getTimeLeft(e);return null!==t&&t<=0},updateExpiration:function(e,t){return this._storage.setStorageSync(this._expiration_key_prefix+e,this.getTimestamp()+t)},removeStorageSync:function(e){this._storage.removeStorageSync(e),this._storage.removeStorageSync(this._expiration_key_prefix+e)},keys:function(e){var t=this,r=[];return this._iterKeys(function(i){0!==i.indexOf(t._expiration_key_prefix)&&(!e&&t.isExpired(i)||r.push(i))}),r},_iterKeys:function(e){var t=wx.getStorageInfoSync();t.keys&&t.keys.forEach(function(t){e(t)})},clearStorageSync:function(){try{this._storage.clearStorageSync()}catch(e){console.log("Storage clear",e)}},clearExpiredStorage:function(){var e=this,t=[];return this._iterKeys(function(r){if(0===r.indexOf(e._expiration_key_prefix)){var i=r.substr(e._expiration_key_prefix.length);e.isExpired(i)&&(e.removeStorageSync(i),t.push(i))}}),t}};module.exports=e; 
 			}); 
		define("components/gsd-lib/utils/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(e){if("object"!==(void 0===e?"undefined":t(e)))return e;if(e instanceof Date)return new Date(e);if(e instanceof Array){for(var r=[],o=0,i=e.length;o<i;o++)r[o]=n(e[o]);return r}if("object"===(void 0===e?"undefined":t(e))){var u={};for(var a in e)e.hasOwnProperty(a)&&(u[a]=n(e[a]));return u}}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};module.exports={debounce:function(n,t,e){var r=void 0,o=void 0,i=void 0,u=void 0,a=void 0,f=function f(){var c=Date.now()-u;c<t&&c>=0?r=setTimeout(f,t-c):(r=void 0,e||(a=n.apply(i,o),r||(i=o=void 0)))};return function(){i=this,o=arguments,u=Date.now();var c=e&&!r;return r||(r=setTimeout(f,t)),c&&(a=n.apply(i,o),i=o=void 0),a}},throttle:function(n,t){var e=void 0,r=Date.now();return function(){var o=this,i=arguments,u=Date.now();clearTimeout(e),u-r>=t?(n.apply(o,i),r=u):e=setTimeout(function(){n.apply(o,i)},t)}},deepClone:n,generateGUID:function(){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=0;e<10;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n},urlJoinParams:function(n,e){return n&&e&&"object"===(void 0===e?"undefined":t(e))?""+n+(-1===n.indexOf("?")?"?":"&")+Object.keys(e).map(function(n){return"object"===t(e[n])&&(e[n]=JSON.stringify(e[n])),void 0!==e[n]?n+"="+e[n]:""}).filter(function(n){return n}).join("&"):n},compareVersion:function(n,t){for(var e=n.split("."),r=t.split("."),o=Math.max(e.length,r.length);e.length<o;)e.push("0");for(;r.length<o;)r.push("0");for(var i=0;i<o;i++){var u=parseInt(e[i],10),a=parseInt(r[i],10);if(u>a)return 1;if(u<a)return-1}return 0},extendMethods:function(n,t,e){n&&n.forEach(function(n){t[n]?e[n]?console.warn("目标对象已存在重复方法：",n):e[n]=t[n].bind(t):console.warn("源对象的方法不存在：",n)})},hideIdCard:function(n,t){if(!n)return n;var e=t||4,r=new RegExp("(^\\w{"+e+"})(\\w+)(\\w{"+e+"}$)","g");return n.replace(r,function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];var r="";if(t[2]&&t[2].length)for(var o=0,i=t[2].length;o<i;o++)r+="*";return t[1]+r+t[3]})},hideName:function(n){return n?n.replace(/(^.{1})(.+)$/g,function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];var r="";return t[2]&&t[2].length&&(r=Array.from({length:t[2].length+1}).join("*")),t[1]+r}):n},navigateBack:function(n){return new Promise(function(t){var e=getCurrentPages().length-n;wx.navigateBack({delta:n,success:function(){!function n(){setTimeout(function(){var r=getCurrentPages().length;e===r||r<=1?(console.log("已回退到指定页面：",getCurrentPages()),t()):n()},100)}()}})})},uniqBy:function(n,t){var e=n.reduce(function(n,e){var r=t(e);return r&&!n[r]&&(n[r]=e),n},{});return Object.keys(e).map(function(n){return e[n]})}}; 
 			}); 
		define("components/gsd-ui/behaviors/formCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=Behavior({properties:{icon:String,disabled:Boolean,items:{type:Array,value:[],observer:function(e){var t=this.properties.value;e=e.map(function(e){return e.checked=!1,Array.isArray(t)&&-1!==t.indexOf(String(e.value))?e.checked=!0:String(t)===String(e.value)&&(e.checked=!0),"string"==typeof e.desc&&(e.desc=e.desc.split("\n")),e}),this.setData({_items:e})}},value:{type:[Array,String],observer:function(e){var t=this.data._items.map(function(t){return t.checked=!1,Array.isArray(e)?-1!==e.indexOf(t.value.toString())&&(t.checked=!0):String(e)===String(t.value)&&(t.checked=!0),t});this.setData({_items:t})}}},data:{_items:[]},methods:{handleChange:function(e){this.triggerEvent("change",e.detail)},handleIconTap:function(e){var t=e.currentTarget.dataset;this.triggerEvent("iconTap",t.item)}}}); 
 			}); 
		define("components/gsd-ui/behaviors/formController.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../gsd-lib/event/index");module.exports=Behavior({relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},properties:{required:Boolean,disabled:Boolean,status:{type:String,observer:function(t){this.setData({_status:t})}},statusMessage:{type:String,observer:function(t){this.setData({_statusMessage:t})}}},data:{_status:"",_statusMessage:""},methods:{getFormNode:function(){var t=this.getRelationNodes("../g-form/index");return t&&t[0]},warn:function(e){this.setData({_status:"warn",_statusMessage:e.message||"填写有误"},function(){t.dispatch("g-form__warn")})}}}); 
 			}); 
		define("components/gsd-ui/behaviors/icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=Behavior({properties:{iconType:String,iconSize:{type:Number,value:36},iconColor:String}}); 
 			}); 
		define("components/gsd-ui/behaviors/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=Behavior({data:{labelWidth:105},methods:{setLabelWidth:function(t){Number.isNaN(t)||this.setData({labelWidth:t})}}}); 
 			}); 
		define("components/gsd-ui/behaviors/navigator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=Behavior({properties:{to:{type:String,value:""},toType:{type:String,value:"to"}},data:{},methods:{navigator:function(){var t=this.properties,e=t.to,r=t.toType;if(!e)return!1;"to"===r&&wx.navigateTo({url:e}),"redirect"===r&&wx.redirectTo({url:e}),"switch"===r&&wx.switchTab({url:e}),"reLaunch"===r&&wx.reLaunch({url:e})}}}); 
 			}); 
		define("components/gsd-ui/behaviors/primarySecondButton.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=Behavior({properties:{primaryText:{type:String,value:"下一步"},secondText:String},methods:{handlePrimaryTap:function(e){this.triggerEvent("primaryTap",e.detail)},handleSecondTap:function(e){this.triggerEvent("secondTap",e.detail)}}}); 
 			}); 
		define("components/gsd-ui/g-calendar/workers/calculate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict"; 
 			}); 
		define("components/gsd-ui/utils/helper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports={standardPath:function(t){var r=".".charCodeAt(0),o=/\\(\\)?/g,n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,e=[];return t.charCodeAt(0)===r&&e.push(""),t.replace(n,function(t,r,n,c){var i=t;return n?i=c.replace(o,"$1"):r&&(i=r.trim()),e.push(i),""}),e.join(".")},get:function(t,r,o){if(void 0===r)throw new Error("请输入正确的 path 参数！");var n=Array.isArray(r)?r:this.standardPath(r).split(".");return n&&""===n[0]&&n.splice(0,1),n.reduce(function(t,r){return(t||{})[r]},t)||o},paths:function(r,o){var n=[],e=void 0,c=void 0;if(o=o||[],"object"!==(void 0===r?"undefined":t(r)))throw new Error("model 属性必须是一个 Object");for(c in r)e=r[c],Array.isArray(e)&&e.length&&"object"===t(e[0])||e&&"[object Object]"===e.toString()?n=n.concat(this.paths(e,o.concat([c]))):n.push(o.concat(c).join("."));return n}}; 
 			}); 
		define("components/gsd-ui/utils/validType.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e=t.substr(6,8),r=new Date;return e<=r.getFullYear()+(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+(r.getDate()<10?"0"+r.getDate():r.getMonth()+1)}function e(t){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r={0:"1",1:"0",2:"X",3:"9",4:"8",5:"7",6:"6",7:"5",8:"4",9:"3",10:"2"},n=t.length,o=t[n-1];if(!/^(\d|X)$/.test(o))return!1;for(var i=0,u=0;u<n-1;u++){if(isNaN(Number(t[u])))return!1;i+=Number(t[u])*e[u]}return console.log(i%11,o),r[i%11]===o}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),cn:/^[\u2E80-\uFE4F]+$/,enName:/^[\da-zA-Z\s]{2,}$/,cnName:/^[\u2E80-\uFE4F]{2,6}(?:·[\u2E80-\uFE4F]{2,6})*$/,userName:/^[\da-zA-Z\u2E80-\uFE4F \s]{2,}$/,carId:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,mobile:/^1[3456789]\d{9}$/,address:/^[\da-zA-Z\u2E80-\uFE4F \s-]{4,400}$/,date:/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/,numVcode:/^[0-9]{4,8}$/,vcode:/^[a-zA-Z0-9]{4,8}$/,code:/^[a-zA-Z0-9]{4,}$/,hkMc:/^[WC][0-9]{8}$/,taiWan:/^T[0-9]{8}$/,passport:/^(1[45][0-9]{7}|([E|e]\d{8})|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10}))$/,num:/^[1-9][0-9]*$/,money:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,id:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,twCome:/^(\d{8}|[a-zA-Z]\d{7})$/,hmHid:/^8[123]0000\d{12}$/};void 0===String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")}),module.exports={required:function(t){return Array.isArray(t)?t.length>0:"object"===(void 0===t?"undefined":r(t))?Object.keys(t).length>0:!(!t&&0!==t)},id:function(r){return"string"==typeof r&&n.id.test(r.trim())&&t(r.trim())&&e(r.trim())},cn:function(t){return"string"==typeof t&&n.cn.test(t.trim())},mobile:function(t){return"string"==typeof t&&n.mobile.test(t.trim())},email:function(t){return"string"==typeof t&&n.email.test(t.trim())},url:function(t){return"string"==typeof t&&n.url.test(t.trim())},carId:function(t){return"string"==typeof t&&n.carId.test(t.trim())},cnName:function(t){return"string"==typeof t&&n.cnName.test(t.trim())},enName:function(t){return"string"==typeof t&&n.enName.test(t.trim())},userName:function(t){return"string"==typeof t&&n.userName.test(t.trim())},address:function(t){return"string"==typeof t&&n.address.test(t.trim())},date:function(t){return"string"==typeof t&&n.date.test(t.trim())},numVcode:function(t){return"string"==typeof t&&n.numVcode.test(t.trim())},vcode:function(t){return"string"==typeof t&&n.vcode.test(t.trim())},code:function(t){return"string"==typeof t&&n.code.test(t.trim())},hkMc:function(t){return"string"==typeof t&&n.hkMc.test(t.trim())},taiWan:function(t){return"string"==typeof t&&n.taiWan.test(t.trim())},passport:function(t){return"string"==typeof t&&n.passport.test(t.trim())},num:function(t){return"string"==typeof t&&n.num.test(t.trim())},money:function(t){return"string"==typeof t&&n.money.test(t.trim())},twCome:function(t){return"string"==typeof t&&n.twCome.test(t.trim())},hmHid:function(t){return"string"==typeof t&&n.hmHid.test(t.trim())}}; 
 			}); 
		define("components/gsd-ui/utils/validator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=require("./validType"),n=require("./helper");module.exports=function(o,i){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t=Object.assign({},t,u),!o||"object"!==(void 0===o?"undefined":r(o)))throw new Error("model 属性必须是一个 Object");if(!i||"object"!==(void 0===i?"undefined":r(i)))throw new Error("rules 属性必须是一个 Object");var f=n.paths(o).reduce(function(r,u){var f=n.get(o,""+u);f&&"string"==typeof f&&(f=f.trim?f.trim():f.replace(/(^\s*)|(\s*$)/g,""));var s=(i=Object.keys(i).reduce(function(r,t){var o=n.standardPath(t);if(!r[o]){var u=e({},o,i[t]);return Object.assign(r,u)}},{}))[u];if(!s||!s.length)return r;var l=s.filter(function(e){return"required"===e.type}).length>0;return s.some(function(e){if(!e.type)throw console.log(e),new Error("验证规则必须配置 type");if(e.name=u,l&&!t.required(f))return r.push(Promise.resolve(e)),!1;if(f)if("function"==typeof t[e.type]){var n=t[e.type];if(e.isAsync){var i=n(f,o).then(function(r){if(!r)return e});return r.push(i),!1}if(!n(f,o,e))return r.push(Promise.resolve(e)),!1}else if("regexp"===e.type){if(!e.pattern.test(f))return r.push(Promise.resolve(e)),!1}else{var s=t[e.type];if(s&&!s(f,o))return r.push(Promise.resolve(e)),!1}}),r},[]);return Promise.all(f).then(function(e){return e.filter(function(e){return void 0!==e})})}; 
 			}); 
		define("config/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={regionCode:"440100000000",cityCode:"440100",wllConfigCacheTime:600,provinceName:"广东省",cityName:"广州市",cityShortName:"穗",env:"prod",domain:"https://sk.gzonline.gov.cn",dev:{pharmacyPath:"/cloudsa3/wyj/ypgg_data_prd2020013101.json",buyDomain:"https://skyy-cs.tgovcloud.com",wllConfigPath:"/cloudsa3/wyj/wll_mp_dev_config.json",regionPath:"/cloudsa3/uc/gz202020201.json",wenzhenPath:"/cloudsa3/wenzhen/config/entry.json",carCodePath:"https://sk-cs.tgovcloud.com/traffic-gate-es",healthCodePath:"/prominent-citizens",realNameSetting:"city"},prod:{pharmacyPath:"/cloudsa3/wyj/ypgg_data_prd2020013101.json",buyDomain:"https://skyy.gzonline.gov.cn",wllConfigPath:"/cloudsa3/wyj/wll_mp_prod_config.json",regionPath:"/cloudsa3/uc/gz202020201.json",wenzhenPath:"/cloudsa3/wenzhen/config/entry.json",carCodePath:"https://sk.gzonline.gov.cn/traffic-gate-es",healthCodePath:"/prominent-citizens",realNameSetting:"city"},cdnDomain:"https://imgcache.gzonline.gov.cn",appid:"microService-GUANGZHOU",regionLevel:[{title:"市"},{title:"区"}]}; 
 			}); 
		define("miniprogram_dist/poster/poster.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];e=r({},t,e);var n=getCurrentPages(),s=n[n.length-1];o&&(s=o);var a=s.selectComponent(e.selector);return delete e.selector,a}var r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},t={selector:"#poster"};e.create=function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(e({},t))return e({},t).onCreate(r);console.error('请设置组件的id="poster"!!!')},exports.Poster=e; 
 			}); 
		define("miniprogram_npm/extend/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(){var r={},e=function(e,o){if(!r[e])return require(o);if(!r[e].status){var n={exports:{}};r[e].status=1,r[e].func(r[e].req,n,n.exports),"object"===t(n.exports)?(r[e].m.exports.__proto__=n.exports.__proto__,Object.keys(n.exports).forEach(function(t){r[e].m.exports[t]=n.exports[t];var o=Object.getOwnPropertyDescriptor(n.exports,t);o&&o.configurable&&Object.defineProperty(n.exports,t,{set:function(o){r[e].m.exports[t]=o},get:function(){return r[e].m.exports[t]}})}),n.exports.__esModule&&Object.defineProperty(r[e].m.exports,"__esModule",{value:!0})):r[e].m.exports=n.exports}return r[e].m.exports};return function(t,e,o){var n={exports:{}};r[t]={status:0,func:e,req:o,m:n}}(1583020842837,function(r,e,o){var n=Object.prototype.hasOwnProperty,u=Object.prototype.toString,c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===u.call(t)},i=function(t){if(!t||"[object Object]"!==u.call(t))return!1;var r=n.call(t,"constructor"),e=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!e)return!1;var o;for(o in t);return void 0===o||n.call(t,o)},s=function(t,r){c&&"__proto__"===r.name?c(t,r.name,{enumerable:!0,configurable:!0,value:r.newValue,writable:!0}):t[r.name]=r.newValue},a=function(t,r){if("__proto__"===r){if(!n.call(t,r))return;if(p)return p(t,r).value}return t[r]};e.exports=function r(){var e,o,n,u,c,p,l=arguments[0],y=1,b=arguments.length,m=!1;for("boolean"==typeof l&&(m=l,l=arguments[1]||{},y=2),(null==l||"object"!==(void 0===l?"undefined":t(l))&&"function"!=typeof l)&&(l={});y<b;++y)if(null!=(e=arguments[y]))for(o in e)n=a(l,o),l!==(u=a(e,o))&&(m&&u&&(i(u)||(c=f(u)))?(c?(c=!1,p=n&&f(n)?n:[]):p=n&&i(n)?n:{},s(l,{name:o,newValue:r(m,p,u)})):void 0!==u&&s(l,{name:o,newValue:u}));return l}},function(t){return e({}[t],t)}),e(1583020842837)}(); 
 			}); 
		define("miniprogram_npm/miniprogram-api-promise/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(){var t={},o=function(e,o,r){var n={exports:{}};t[e]={status:0,func:o,req:r,m:n}},r=function(o,r){if(!t[o])return require(r);if(!t[o].status){var n={exports:{}};t[o].status=1,t[o].func(t[o].req,n,n.exports),"object"===e(n.exports)?(t[o].m.exports.__proto__=n.exports.__proto__,Object.keys(n.exports).forEach(function(e){t[o].m.exports[e]=n.exports[e];var r=Object.getOwnPropertyDescriptor(n.exports,e);r&&r.configurable&&Object.defineProperty(n.exports,e,{set:function(r){t[o].m.exports[e]=r},get:function(){return t[o].m.exports[e]}})}),n.exports.__esModule&&Object.defineProperty(t[o].m.exports,"__esModule",{value:!0})):t[o].m.exports=n.exports}return t[o].m.exports};return o(1583020842838,function(e,t,o){o.__esModule||Object.defineProperty(o,"__esModule",{value:!0});var r=e("./promise");Object.defineProperty(o,"promisify",{enumerable:!0,configurable:!0,get:function(){return r.promisify}}),Object.defineProperty(o,"promisifyAll",{enumerable:!0,configurable:!0,get:function(){return r.promisifyAll}})},function(e){return r({"./promise":1583020842839}[e],e)}),o(1583020842839,function(t,o,r){function n(t){if(!t||"object"!==(void 0===t?"undefined":e(t)))return!1;var o=["success","fail","complete"],r=!0,n=!1,a=void 0;try{for(var i,s=o[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)if("function"==typeof t[i.value])return!0}catch(e){n=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return!1}function a(e){return"function"!=typeof e?fn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(o,r){e(Object.assign(t,{success:o,fail:r}))})}}var i=t("./method").asyncMethods;r.__esModule||Object.defineProperty(r,"__esModule",{value:!0}),r.promisifyAll=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(function(o){var r=e[o];"function"==typeof r&&i.indexOf(o)>=0?t[o]=function(e){if(!n(e))return a(r)(e);r(e)}:t[o]=r})},r.__esModule||Object.defineProperty(r,"__esModule",{value:!0});r.promisify=a},function(e){return r({"./method":1583020842840}[e],e)}),o(1583020842840,function(e,t,o){o.__esModule||Object.defineProperty(o,"__esModule",{value:!0});o.asyncMethods=["canvasGetImageData","canvasPutImageData","canvasToTempFilePath","setEnableDebug","startAccelerometer","stopAccelerometer","getBatteryInfo","getClipboardData","setClipboardData","startCompass","stopCompass","addPhoneContact","startGyroscope","stopGyroscope","startBeaconDiscovery","stopBeaconDiscovery","getBeacons","startLocalServiceDiscovery","stopLocalServiceDiscovery","startDeviceMotionListening","stopDeviceMotionListening","getNetworkType","makePhoneCall","scanCode","getSystemInfo","vibrateShort","vibrateLong","getExtConfig","chooseLocation","getLocation","openLocation","chooseMessageFile","loadFontFace","chooseImage","previewImage","getImageInfo","saveImageToPhotosAlbum","compressImage","chooseVideo","saveVideoToPhotosAlbum","downloadFile","request","connectSocket","closeSocket","sendSocketMessage","uploadFile","login","checkSession","chooseAddress","authorize","addCard","openCard","chooseInvoice","chooseInvoiceTitle","getUserInfo","requestPayment","getWeRunData","showModal","showToast","hideToast","showLoading","hideLoading","showActionSheet","pageScrollTo","startPullDownRefresh","stopPullDownRefresh","setBackgroundColor","setBackgroundTextStyle","setTabBarBadge","removeTabBarBadge","showTabBarRedDot","hideTabBarRedDot","showTabBar","hideTabBar","setTabBarStyle","setTabBarItem","setTopBarText","saveFile","openDocument","getSavedFileList","getSavedFileInfo","removeSavedFile","getFileInfo","getStorage","setStorage","removeStorage","clearStorage","getStorageInfo","closeBLEConnection","closeBluetoothAdapter","createBLEConnection","getBLEDeviceCharacteristics","getBLEDeviceServices","getBluetoothAdapterState","getBluetoothDevices","getConnectedBluetoothDevices","notifyBLECharacteristicValueChange","openBluetoothAdapter","readBLECharacteristicValue","startBluetoothDevicesDiscovery","stopBluetoothDevicesDiscovery","writeBLECharacteristicValue","getHCEState","sendHCEMessage","startHCE","stopHCE","getScreenBrightness","setKeepScreenOn","setScreenBrightness","connectWifi","getConnectedWifi","getWifiList","setWifiList","startWifi","stopWifi","getBackgroundAudioPlayerState","playBackgroundAudio","pauseBackgroundAudio","seekBackgroundAudio","stopBackgroundAudio","getAvailableAudioSources","startRecord","stopRecord","setInnerAudioOption","playVoice","pauseVoice","stopVoice","getSetting","openSetting","getShareInfo","hideShareMenu","showShareMenu","updateShareMenu","checkIsSoterEnrolledInDevice","checkIsSupportSoterAuthentication","startSoterAuthentication","navigateBackMiniProgram","navigateToMiniProgram","setNavigationBarTitle","showNavigationBarLoading","hideNavigationBarLoading","setNavigationBarColor","redirectTo","reLaunch","navigateTo","switchTab","navigateBack"]},function(e){return r({}[e],e)}),r(1583020842838)}(); 
 			}); 
		define("miniprogram_npm/weapp-qrcode/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(){var e={},r=function(r,o){if(!e[r])return require(o);if(!e[r].status){var n={exports:{}};e[r].status=1,e[r].func(e[r].req,n,n.exports),"object"===t(n.exports)?(e[r].m.exports.__proto__=n.exports.__proto__,Object.keys(n.exports).forEach(function(t){e[r].m.exports[t]=n.exports[t];var o=Object.getOwnPropertyDescriptor(n.exports,t);o&&o.configurable&&Object.defineProperty(n.exports,t,{set:function(o){e[r].m.exports[t]=o},get:function(){return e[r].m.exports[t]}})}),n.exports.__esModule&&Object.defineProperty(e[r].m.exports,"__esModule",{value:!0})):e[r].m.exports=n.exports}return e[r].m.exports};return function(t,r,o){var n={exports:{}};e[t]={status:0,func:r,req:o,m:n}}(1583020842841,function(e,r,o){function n(t){this.mode=E.MODE_8BIT_BYTE,this.data=t}function i(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function u(t,e){this.totalCount=t,this.dataCount=e}function s(){this.buffer=new Array,this.length=0}function h(t){var e,r,o,n;for(e="",o=t.length,r=0;r<o;r++)(n=t.charCodeAt(r))>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e}var f=Object.prototype.hasOwnProperty,l=Object.prototype.toString,g=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===l.call(t)},m=function(t){if(!t||"[object Object]"!==l.call(t))return!1;var e,r=f.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&f.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!r&&!o)return!1;for(e in t);return void 0===e||f.call(t,e)},p=function(t,e){g&&"__proto__"===e.name?g(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},v=function(t,e){if("__proto__"===e){if(!f.call(t,e))return;if(c)return c(t,e).value}return t[e]},C=function e(){var r,o,n,i,a,u,s=arguments[0],h=1,f=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},h=2),(null==s||"object"!=(void 0===s?"undefined":t(s))&&"function"!=typeof s)&&(s={});h<f;++h)if(null!=(r=arguments[h]))for(o in r)n=v(s,o),s!==(i=v(r,o))&&(l&&i&&(m(i)||(a=d(i)))?(a?(a=!1,u=n&&d(n)?n:[]):u=n&&m(n)?n:{},p(s,{name:o,newValue:e(l,u,i)})):void 0!==i&&p(s,{name:o,newValue:i}));return s};n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},i.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=u.getRSBlocks(t,this.errorCorrectLevel),r=new s,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++){var i=this.dataList[n];r.put(i.mode,4),r.put(i.getLength(),A.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=i.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=A.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var u=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(u,i),o.lineTo(u+1,i),o.lineTo(u+1,i+1),o.lineTo(u,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=A.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=A.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++)o=!t&&1==(e>>r&1),this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=A.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++)i=!t&&1==(o>>n&1),n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i;this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[o][a-u]){var s=!1;i<t.length&&(s=1==(t[i]>>>n&1)),A.getMask(e,o,a-u)&&(s=!s),this.modules[o][a-u]=s,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},i.PAD0=236,i.PAD1=17,i.createData=function(t,e,r){for(var o=u.getRSBlocks(t,e),n=new s,a=0;a<r.length;a++){var h=r[a];n.put(h.mode,4),n.put(h.getLength(),A.getLengthInBits(h.mode,t)),h.write(n)}var f=0;for(a=0;a<o.length;a++)f+=o[a].dataCount;if(n.getLengthInBits()>8*f)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*f+")");for(n.getLengthInBits()+4<=8*f&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*f||(n.put(i.PAD0,8),n.getLengthInBits()>=8*f));)n.put(i.PAD1,8);return i.createBytes(n,o)},i.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),u=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,f=e[s].totalCount-h;o=Math.max(o,h),n=Math.max(n,f),i[s]=new Array(h);for(var l=0;l<i[s].length;l++)i[s][l]=255&t.buffer[l+r];r+=h;var g=A.getErrorCorrectPolynomial(f),c=new a(i[s],g.getLength()-1).mod(g);for(u[s]=new Array(g.getLength()-1),l=0;l<u[s].length;l++){var d=l+c.getLength()-u[s].length;u[s][l]=d>=0?c.get(d):0}}var m=0;for(l=0;l<e.length;l++)m+=e[l].totalCount;var p=new Array(m),v=0;for(l=0;l<o;l++)for(s=0;s<e.length;s++)l<i[s].length&&(p[v++]=i[s][l]);for(l=0;l<n;l++)for(s=0;s<e.length;s++)l<u[s].length&&(p[v++]=u[s][l]);return p};for(var E={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},y={L:1,M:0,Q:3,H:2},T={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},A={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;A.getBCHDigit(e)-A.getBCHDigit(A.G15)>=0;)e^=A.G15<<A.getBCHDigit(e)-A.getBCHDigit(A.G15);return(t<<10|e)^A.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;A.getBCHDigit(e)-A.getBCHDigit(A.G18)>=0;)e^=A.G18<<A.getBCHDigit(e)-A.getBCHDigit(A.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return A.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case T.PATTERN000:return(e+r)%2==0;case T.PATTERN001:return e%2==0;case T.PATTERN010:return r%3==0;case T.PATTERN011:return(e+r)%3==0;case T.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case T.PATTERN101:return e*r%2+e*r%3==0;case T.PATTERN110:return(e*r%2+e*r%3)%2==0;case T.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),r=0;r<t;r++)e=e.multiply(new a([1,_.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case E.MODE_NUMBER:return 10;case E.MODE_ALPHA_NUM:return 9;case E.MODE_8BIT_BYTE:case E.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case E.MODE_NUMBER:return 12;case E.MODE_ALPHA_NUM:return 11;case E.MODE_8BIT_BYTE:return 16;case E.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case E.MODE_NUMBER:return 14;case E.MODE_ALPHA_NUM:return 13;case E.MODE_8BIT_BYTE:return 16;case E.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),u=-1;u<=1;u++)if(!(o+u<0||e<=o+u))for(var s=-1;s<=1;s++)n+s<0||e<=n+s||0==u&&0==s||a==t.isDark(o+u,n+s)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var f=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&f++;return r+=Math.abs(100*f/e/e-50)/5*10}},_={glog:function(t){if(t<1)throw new Error("glog("+t+")");return _.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return _.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},B=0;B<8;B++)_.EXP_TABLE[B]=1<<B;for(B=8;B<256;B++)_.EXP_TABLE[B]=_.EXP_TABLE[B-4]^_.EXP_TABLE[B-5]^_.EXP_TABLE[B-6]^_.EXP_TABLE[B-8];for(B=0;B<255;B++)_.LOG_TABLE[_.EXP_TABLE[B]]=B;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=_.gexp(_.glog(this.get(r))+_.glog(t.get(o)));return new a(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=_.glog(this.get(0))-_.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=_.gexp(_.glog(t.get(o))+e);return new a(r,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var r=u.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],f=0;f<a;f++)n.push(new u(s,h));return n},u.getRsBlockTable=function(t,e){switch(e){case y.L:return u.RS_BLOCK_TABLE[4*(t-1)+0];case y.M:return u.RS_BLOCK_TABLE[4*(t-1)+1];case y.Q:return u.RS_BLOCK_TABLE[4*(t-1)+2];case y.H:return u.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},s.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},r.exports=function(t){t=t||{},(t=C(!0,{width:256,height:256,x:0,y:0,typeNumber:-1,correctLevel:y.H,background:"#ffffff",foreground:"#000000",image:{imageResource:"",dx:0,dy:0,dWidth:100,dHeight:100}},t)).canvasId||t.ctx?function(){var e,r=new i(t.typeNumber,t.correctLevel);r.addData(h(t.text)),r.make(),e=t.ctx?t.ctx:t._this?wx.createCanvasContext&&wx.createCanvasContext(t.canvasId,t._this):wx.createCanvasContext&&wx.createCanvasContext(t.canvasId);for(var o=t.width/r.getModuleCount(),n=t.height/r.getModuleCount(),a=0;a<r.getModuleCount();a++)for(var u=0;u<r.getModuleCount();u++){var s=r.isDark(a,u)?t.foreground:t.background;e.setFillStyle(s);var f=Math.ceil((u+1)*o)-Math.floor(u*o),l=Math.ceil((a+1)*o)-Math.floor(a*o);e.fillRect(Math.round(u*o)+t.x,Math.round(a*n)+t.y,f,l)}t.image.imageResource&&e.drawImage(t.image.imageResource,t.image.dx,t.image.dy,t.image.dWidth,t.image.dHeight),e.draw(!1,function(e){t.callback&&t.callback(e)})}():console.warn("please set canvasId or ctx!")}},function(t){return r({}[t],t)}),r(1583020842841)}(); 
 			}); 
		define("mixin/localesMixin.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={data:{language:"",commonLocales:require("../utils/commonLocales")},onLoad:function(a){this.setLanguage()},setLanguage:function(){var a=wx.T.getLanguage().languageClass,e=this.data,t=e.commonLocales,s=e.locales,g=Object.keys(s[a]).length?s[a]:s["zh-CN"],n=Object.keys(s[a]).length?t[a]:t["zh-CN"];this.setData({language:Object.assign({},n,g)}),console.log("language",this.data.language)}}; 
 			}); 
		define("pages/diagnosis/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{diagnosisDesc:"广州市民防控新型冠状病毒肺炎健康指引",diagnosisLabel:"市民防控新冠肺炎健康指引",bannerPath:"/cloudsa3/wenzhen/images/banner.png",barTitle:"在线免费问诊",loading:"努力加载中...",crowded:"当前人数较多，请稍后再试"},en:{diagnosisDesc:"Health guidelines on prevention and control of novel coronavirus pneumonia in guangzhou",diagnosisLabel:"Health guidelines on prevention and control of pneumonia",bannerPath:"/cloudsa3/wenzhen/images/banner.png",barTitle:"Free online consultation",loading:"loading...",crowded:"There are more people at present, please try again later"},ja:{diagnosisDesc:"広州市民の新型コロナウイルス肺炎の予防と制御の健康ガイドライン",diagnosisLabel:"市民が新冠肺炎を予防・制御する健康ガイドライン",bannerPath:"/cloudsa3/wenzhen/images/banner.png",barTitle:"オンラインで無料問診",loading:"努力投入中...",crowded:"現在人数が多いので、後ほどお試しください"},kr:{diagnosisDesc:"광저우 시민들, 신형 코로나바이러스 폐렴 건강 지침",diagnosisLabel:"시민방범통제 폐렴 건강지침",bannerPath:"/cloudsa3/wenzhen/images/banner.png",barTitle:"온라인 무료 외래진료",loading:"다시 불러오는 중...",crowded:"현재 인원이 많으니 나중에 다시 시도하십시오."}}; 
 			}); 
		define("pages/health-guide-detail/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{barTitle:"个人防护指引"},en:{barTitle:"Personal protection guidelines"},ja:{barTitle:"個人防護ガイドライン"},kr:{barTitle:"개인보호지침"}}; 
 			}); 
		define("pages/mine/index/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{barTitle:"个人中心",realNameAuthentication:"实名认证",unverified:"未认证",verified:"已认证",myToDo:"我的待办",myHealthSelfReport:"我的健康自查上报",myNews:"我的消息",myClue:"我的疫情线索上报",mydonation:"我的捐赠",myBookings:"我的预约",set:"语言设置（Language setting）",correlationInformation:"我的关联信息",helpAndFeedback:"帮助与反馈",myWorkPlace:"我的工作台",logout:"退出登录",latestAnnouncement:"最新公告",volunteer:"志愿者申请",feedback:"留言反馈",logInFirst:"请先登录账号",logIn:"登录",tryagain:"系统异常，请稍后再试",cancelAuthorization:"取消授权",loading:"努力加载中...",tryagain2:"刷新频率过高，请稍侯再试",refreshsuccess:"刷新成功",refreshfailure:"刷新失败",isvisible:!0,guangzhouDisease:"广州市新冠肺炎防控指挥办",supportor:"腾讯公司/腾讯云提供技术支持"},en:{barTitle:"Me",realNameAuthentication:"Real-name authentication",unverified:"Unauthorized",verified:"certified",myToDo:"My To-do",myHealthSelfReport:"My Health Condition Report",myNews:"My Messages",myClue:"My Report of Epidemic Clues",mydonation:"My Donation",myBookings:"My Reservation",set:"Language setting",correlationInformation:"My association information",helpAndFeedback:"Help and feedback",myWorkPlace:"My Workbench",logout:"Log out",latestAnnouncement:"The latest announcement",volunteer:"Volunteer application",feedback:"Message and feedback",logInFirst:"Please log in first",logIn:"Login",tryagain:"System failure, please try again later",cancelAuthorization:"Cancel the authorization",loading:"Loading...",tryagain2:"Refresh frequency is too high, please try again later",refreshsuccess:"Refresh successful",refreshfailure:"Refresh failed",isvisible:!1,guangzhouDisease:"Guangzhou Epidemic Prevention and Control Office",supportor:"Tencent / Tencent Cloud provides technical support"},ja:{barTitle:"私のセンター",realNameAuthentication:"実名認証",unverified:"未認証",verified:"認証済み",myToDo:"私の処理待ち業務",myHealthSelfReport:"私の健康自己診断を報告",myNews:"私のニュース",myClue:"私の感染の情報を報告しました",mydonation:"私の寄付",myBookings:"私の予約",set:"言語設定",correlationInformation:"私の関連情報",helpAndFeedback:"ヘルプとフィードバック",myWorkPlace:"私の作業台",logout:"ログアウト",latestAnnouncement:"最新公告",volunteer:"ボランティア申請",feedback:"伝言フィードバック",logInFirst:"先にアカウントを登記してください",logIn:"ログイン",tryagain:"システムが異常なので、後ほどやってみてください",cancelAuthorization:"授権を取り消す",loading:"一生懸命にロード中...",tryagain2:"更新頻度高すぎ、後ほどやってみてください",refreshsuccess:"刷新に成功した",refreshfailure:"更新に失敗した",isvisible:!1,guangzhouDisease:"広州市防止制御事務室",supportor:"テンセント·テンセント·クラウドは技術的支援を提供"},kr:{barTitle:"마이홈",realNameAuthentication:"실명 인증",unverified:"인증 안됨",verified:"인증 완료",myToDo:"내가 할 일",myHealthSelfReport:"건강상태 자기점검신고",myNews:"내 소식",myClue:"전염병 단서 제출",mydonation:"내 기부금",myBookings:"내 예약결과",set:"언어 설정（语言设置）",correlationInformation:"나한테 연관된 정보",helpAndFeedback:"도움말과 피드백",myWorkPlace:"마이 테이블",logout:"로그아웃",latestAnnouncement:"새로운 알림",volunteer:"자원봉사 신청",feedback:"피드백 메시지",logInFirst:"먼저 계정으로 로그인 하십시오",logIn:"로그인",tryagain:"시스템에러입니다.잠시후 시도하십시오.",cancelAuthorization:"승인 취소",loading:"로딩 중...",tryagain2:"새로고침이 너무 잦으니 잠시 기다려 주십시오",refreshsuccess:"새로고침 완료",refreshfailure:"새로고침 실패",isvisible:!1,guangzhouDisease:"광저우시방역판공실",supportor:"텐센트/텐센트클라우드에서 기술지원"}}; 
 			}); 
		define("pages/mine/login/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{barTitle:"穗康码",realNameAuthentication:"实名认证",unverified:"未认证",verified:"已认证",myToDo:"我的待办",myHealthSelfReport:"我的健康自查上报",myNews:"我的消息",myClue:"我的疫情线索上报",mydonation:"我的捐赠",myBookings:"我的预约",set:"语言设置（Language Setting）",correlationInformation:"我的关联信息",helpAndFeedback:"帮助与反馈",myWorkPlace:"我的工作台",logout:"退出登录",latestAnnouncement:"最新公告",volunteer:"志愿者申请",feedback:"留言反馈",logInFirst:"请先登录账号",logIn:"登录",tryagain:"系统异常，请稍后再试",cancelAuthorization:"取消授权",loading:"努力加载中...",tryagain2:"刷新频率过高，请稍侯再试",refreshsuccess:"刷新成功",refreshfailure:"刷新失败",isvisible:!0,guangzhouDisease:"广州市新冠肺炎防控指挥办",supportor:"腾讯公司/腾讯云提供技术支持"},en:{barTitle:"Suikang code",realNameAuthentication:"Real-name authentication",unverified:"Unauthorized",verified:"certified",myToDo:"My To-do",myHealthSelfReport:"My Health Condition Report",myNews:"My Messages",myClue:"My Report of Epidemic Clues",mydonation:"My Donation",myBookings:"My Reservation",set:"Language Settings",correlationInformation:"My association information",helpAndFeedback:"Help and feedback",myWorkPlace:"My Workbench",logout:"Log out",latestAnnouncement:"The latest announcement",volunteer:"Volunteer application",feedback:"Message and feedback",logInFirst:"Please log in first",logIn:"Login",tryagain:"System failure, please try again later",cancelAuthorization:"Cancel the authorization",loading:"Loading...",tryagain2:"Refresh frequency is too high, please try again later",refreshsuccess:"Refresh successful",refreshfailure:"Refresh failed",isvisible:!1,guangzhouDisease:"Guangzhou Epidemic Prevention and Control Office",supportor:"Tencent / Tencent Cloud provides technical support"},ja:{barTitle:"穂康コード",realNameAuthentication:"実名認証",unverified:"未認証",verified:"認証済み",myToDo:"私の処理待ち業務",myHealthSelfReport:"私の健康自己診断を報告",myNews:"私のニュース",myClue:"私の感染の情報を報告しました",mydonation:"私の寄付",myBookings:"私の予約",set:"言語設定",correlationInformation:"私の関連情報",helpAndFeedback:"ヘルプとフィードバック",myWorkPlace:"私の作業台",logout:"ログアウト",latestAnnouncement:"最新公告",volunteer:"ボランティア申請",feedback:"伝言フィードバック",logInFirst:"先にアカウントを登記してください",logIn:"ログイン",tryagain:"システムが異常なので、後ほどやってみてください",cancelAuthorization:"授権を取り消す",loading:"一生懸命にロード中...",tryagain2:"更新頻度高すぎ、後ほどやってみてください",refreshsuccess:"刷新に成功した",refreshfailure:"更新に失敗した",isvisible:!1,guangzhouDisease:"広州市防止制御事務室",supportor:"テンセント·テンセント·クラウドは技術的支援を提供"},kr:{barTitle:"수이캉코드",realNameAuthentication:"실명 인증",unverified:"인증 안됨",verified:"인증 완료",myToDo:"내가 할 일",myHealthSelfReport:"건강상태 자기점검신고",myNews:"내 소식",myClue:"전염병 단서 제출",mydonation:"내 기부금",myBookings:"내 예약결과",set:"언어설정",correlationInformation:"나한테 연관된 정보",helpAndFeedback:"도움말과 피드백",myWorkPlace:"마이 테이블",logout:"로그아웃",latestAnnouncement:"새로운 알림",volunteer:"자원봉사 신청",feedback:"피드백 메시지",logInFirst:"먼저 계정으로 로그인 하십시오",logIn:"로그인",tryagain:"시스템에러입니다.잠시후 시도하십시오.",cancelAuthorization:"승인 취소",loading:"로딩 중...",tryagain2:"새로고침이 너무 잦으니 잠시 기다려 주십시오",refreshsuccess:"새로고침 완료",refreshfailure:"새로고침 실패",isvisible:!1,guangzhouDisease:"광저우시방역판공실",supportor:"텐센트/텐센트클라우드에서 기술지원"}}; 
 			}); 
		define("pages/mine/todo/detail/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=require("./localesMap"),o={"zh-CN":{addReply:"添加回复",finish:"办结",deal:"处理",replyCon:"回复内容",baseMsg:"基本信息",otherMsg:"其它信息",reflectPerson:"反映人信息",involvedPerson:"涉事人信息",reflectCon:"反映内容",reportAgain:"重新上报",title:"详情"},en:{addReply:"Add a reply.",finish:"Closed",deal:"Handling",replyCon:"Reply",baseMsg:"Basic information",otherMsg:"Other information",reflectPerson:"Reporter information",involvedPerson:"participants information",reflectCon:"Information reported",reportAgain:"Resubmit",title:"detail"},ja:{addReply:"回答を追加",finish:"処理済み",deal:"処理",replyCon:"回答内容",baseMsg:"基本情報",otherMsg:"その他情報",reflectPerson:"報告者情報",involvedPerson:"渉事人情報",reflectCon:"報告内容",reportAgain:"改めて報告",title:"详细"},kr:{addReply:"답글 추가",finish:"완료",deal:"처리",replyCon:"답복 내역",baseMsg:"프로파일",otherMsg:"기타 정보",reflectPerson:"보고자 정보",involvedPerson:"관련자 정보",reflectCon:"보고 내역",reportAgain:"다시 제출",title:"자세 한 정보"}};Object.keys(r).forEach(function(n){o[n]=e({},o[n],r[n])}),module.exports=o; 
 			}); 
		define("pages/mine/todo/detail/localesMap.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{sexMap:{"男":"男","女":"女"},statusMap:{0:"处理中",1:"进行中",2:"已办结"},nationMap:{1:"中国大陆",2:"中国港澳台地区",3:"外国"},domicilePlaceMap:{1:"广州市",2:"广东其他地市",3:"湖北省",4:"其他"},identityTypeMap:{1:"身份证",3:"护照",4:"军官证",8:"港澳居民来往内地通行证",9:"台湾居民来往内地通行证",6:"港澳居民居住证",7:"台湾居民居住证",11:"出入境通行证"},residentFlagMap:{1:"是，在广州居住了已有半年以上",2:"否，我是临时来广州的"},residentConditionMap:{1:"一直在广州3个月或以上",2:"来/返回广州超过14日",3:"来/返回广州不超过14日（含14日）",4:"目前仍在外地"},travelRegionClassMap:{1:"武汉市",2:"湖北(不含武汉)",4:"中国大陆其他省(自治区)市",3:"中国港澳台地区",5:"其他国家",6:"温州市",7:"韩国",8:"日本"},personTypeMap:{1:"未返穗本地常住居民",2:"持续在穗人员",3:"一月初返穗居民",4:"一月初来穗人员",5:"一月中返穗居民",6:"一月中来穗人员",11:"居家医学观察人员",12:"集中医学观察人员"},socialContactMap:{1:"14日内密切接触近期有湖北旅居史者",2:"自我感觉14日内曾与患者接触过者",11:"14日内在湖北旅游居住过的人员",12:"14日内曾接触疑似患者",13:"14日内其他地方来或返回广州人员",14:"其他人员"},healthStateMap:{1:"正常活动",2:"居家健康服务",3:"集中健康服务",4:"集中医学观察"},symptomTypeMap:{1:"自觉正常",2:"发热",3:"干咳",4:"乏力",5:"腹泻",6:"感冒",7:"头疼头晕",11:"发热37.3 ℃以下",12:"发热37.3 ℃（含）以上",13:"干咳",14:"乏力",15:"其它症状"},booleanMap:{0:"否",1:"是"},keyMap:[{label:"编号",key:"id"},{label:"报告状态",key:"statusStr"},{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"手机号码",key:"phone"},{label:"证件类型",key:"identityTypeStr"},{label:"证件号码",key:"identity"},{label:"国籍/地区",key:"nationStr"},{label:"户籍所在地",key:"domicilePlaceStr"},{label:"籍贯",key:"nativePlace"},{label:"居住地址",key:"address"},{label:"详细地址",key:"addr"}],keyMapOther:[{label:"是否常住广州",key:"residentFlagStr"},{label:"近期是否在广州",key:"residentConditionStr"},{label:"来或返回广州日期",key:"returnDate"},{label:"目前所在地",key:"recentRegionName"},{label:"拟返回广州日期",key:"quasiReturnDate"},{label:"近一个月旅居史",key:"travelRegionClassStr"},{label:"近期接触史",key:"socialContactStr"},{label:"14日内密切接触日期",key:"contactDateRecent"},{label:"14日内感觉接触日期",key:"contactDateLike"},{label:"个人健康状态",key:"healthStateStr"},{label:"症状列表",key:"symptomTypeStr"},{label:"其它症状",key:"symptomDscr"}],reporterKeyMap:[{label:"姓名",key:"clueSupplier"},{label:"联系电话",key:"clueSupplierPhone"}],reportedKeyMap:[{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"联系电话",key:"phone"},{label:"居住地址",key:"street"},{label:"详细住址",key:"addr"},{label:"关联车牌",key:"clueVehicle"},{label:"涉事人类型",key:"socialContact11Str"},{label:"来或返回广州日期",key:"returnDate"},{label:"涉事人类型",key:"socialContact12Str"},{label:"来或返回广州日期",key:"contactDateRecent"},{label:"涉事人类型",key:"socialContact13Str"},{label:"来或返回广州日期",key:"quasiReturnDate"},{label:"涉事人类型",key:"socialContact14Str"}],reportContentKeyMap:[{label:"反映详细内容",key:"symptomDscr"}]},en:{sexMap:{"男":"male","女":"female"},statusMap:{0:"Processing",1:"ongoing",2:"Finished"},nationMap:{1:"Chinese Mainland",2:"Hong Kong, Macao and Taiwan",3:"Foreign countries"},domicilePlaceMap:{1:"Guang Zhou",2:"Other cities in Guangdong Province",3:"Hubei Province",4:"Other"},identityTypeMap:{1:"ID card",3:"Passport",4:"Certificate of officers",8:"Mainland travel permit for Hong Kong and Macao residents",9:"Mainland travel permit for Taiwan residents",6:"Hong Kong and Macao residence permit",7:"Taiwan residence permit",11:"Entry and exit permit"},residentFlagMap:{1:"Yes, I've lived in Guangzhou for more than half a year.",2:"No, I've been in Guangzhou for a short time."},residentConditionMap:{1:"Stay in Guangzhou for over 3 months.",2:"Came or returned to Guangzhou over 14 days ago.",3:"Came or returned to Guangzhou within 14 days.",4:"Still outside of Guangzhou."},travelRegionClassMap:{1:"Wuhan",2:"Hubei (excluding Wuhan)",4:"Other Provinces or Cities in Chinese Mainland",3:"Hong Kong, Macao and Taiwan",5:"Other countries",6:"Wenzhou",7:"South Korea",8:"Japan"},personTypeMap:{1:"Local permanent residents who have not returned to Guangzhou",2:"People always in Guangzhou",3:"Residents who returned to Guangzhou in early January",4:"Non-residents who came to Guangzhou in early January",5:"Residents who returned to Guangzhou in mid January",6:"Non-residents who returned to Guangzhou in mid January",11:"Under medical observation at home",12:"Under centralized medical observation"},socialContactMap:{1:"Have close contact with those who traveled to or lived in Hubei within 14 days.",2:"Feel that you have contacted someone who is infected with COVID-19 within 14 days.",11:"Traveled to or lived in Hubei Province within 14 days.",12:"Contacted with suspected patients within 14 days.",13:"Came or returned to Guangzhou within 14 days.",14:"Others."},healthStateMap:{1:"Normal",2:"Conducting medical observation at home.",3:"Receiving medical observation at centralized designated places.",4:"Receiving centralized medical observation"},symptomTypeMap:{1:"Normal",2:"Fever",3:"Dry cough",4:"Fatigue",5:"Diarrhea",6:"Catch a cold",7:"Headache, dizziness",11:"fever below 37.3 ℃",12:"fever above 37.3 ℃ (including)",13:"Dry cough",14:"Fatigue",15:"Other symptoms"},booleanMap:{0:"No",1:"Yes"},keyMap:[{label:"Number",key:"id"},{label:"Report the status",key:"statusStr"},{label:"Name",key:"username"},{label:"Gender",key:"gender"},{label:"Phone number",key:"phone"},{label:"Type of ID",key:"identityTypeStr"},{label:"ID number",key:"identity"},{label:"Nationality",key:"nationStr"},{label:"Household registration location",key:"domicilePlaceStr"},{label:"Place of origin",key:"nativePlace"},{label:"Current address",key:"address"},{label:"Detailed address",key:"addr"}],keyMapOther:[{label:"Are you a permanent resident of Guangzhou?",key:"residentFlagStr"},{label:"Are you in Guangzhou recently?",key:"residentConditionStr"},{label:"Date of arrival in or return to Guangzhou",key:"returnDate"},{label:"Current location",key:"recentRegionName"},{label:"Planned date of return to Guangzhou",key:"quasiReturnDate"},{label:"Travel or living history within 1 month",key:"travelRegionClassStr"},{label:"Recent contact history",key:"socialContactStr"},{label:"Date of close contact within 14 days",key:"contactDateRecent"},{label:"Feel the contact date within 14 days",key:"contactDateLike"},{label:"Personal health status",key:"healthStateStr"},{label:"List of symptoms",key:"symptomTypeStr"},{label:"Other symptoms",key:"symptomDscr"}],reporterKeyMap:[{label:"Name",key:"clueSupplier"},{label:"Contact Number",key:"clueSupplierPhone"}],reportedKeyMap:[{label:"Name",key:"username"},{label:"Gender",key:"gender"},{label:"Contact Number",key:"phone"},{label:"Current address",key:"street"},{label:"Detailed address",key:"addr"},{label:"Related Plate Number",key:"clueVehicle"},{label:"Type of person involved",key:"socialContact11Str"},{label:"Date of arrival in or return to Guangzhou",key:"returnDate"},{label:"Type of person involved",key:"socialContact12Str"},{label:"Date of arrival in or return to Guangzhou",key:"contactDateRecent"},{label:"Type of person involved",key:"socialContact13Str"},{label:"Date of arrival in or return to Guangzhou",key:"quasiReturnDate"},{label:"Type of person involved",key:"socialContact14Str"}],reportContentKeyMap:[{label:"Reflect the details",key:"symptomDscr"}]},ja:{sexMap:{"男":"男","女":"女"},statusMap:{0:"処理中",1:"進行中",2:"すでに開設した"},nationMap:{1:"中国大陸",2:"中国の香港, マカオと台湾地区",3:"海外"},domicilePlaceMap:{1:"Guang Zhou",2:"広東省他の都市",3:"Hubei Province",4:"その他"},identityTypeMap:{1:"身分証明書.",3:"パスポート",4:"軍官証.",8:"香港とマカオの住民が内陸通行用通行証",9:"台湾住民が内陸通行用通行証",6:"香港とマカオの住民証明書",7:"台湾住民居住証",11:"出入国通行証"},residentFlagMap:{1:"はい、広州に半年以上住んでいます。",2:"いいえ、私は臨時に広州に来ています"},residentConditionMap:{1:"ずっと広州で3ヶ月またはそれ以上います",2:"広州に来て、または戻って十四日以上泊まっていました。",3:"広州に来て、または戻って十四日以内泊まっていました(14日を含む)",4:"現在も他所にあります"},travelRegionClassMap:{1:"武漢市",2:"湖北(武漢を除く)",4:"中国大陸他省(自治区)市",3:"中国の香港, マカオと台湾地区",5:"その他の国",6:"温州市",7:"韓国",8:"日本"},personTypeMap:{1:"広州に戻っていない地元常住住民。",2:"広州継続駐在者",3:"1月初めに広州に戻った住民",4:"一月の初めに広州に来た人員",5:"1月中に広州を戻る住民",6:"1月中に広州に来た人員",11:"在宅医学観察者",12:"集中医学観察者"},socialContactMap:{1:"14日間に湖北省駐在の人と密接に接触しました",2:"自分で14日以内に患者と接触したことがあると感じています",11:"14日に湖北省に滞在した経験のある人",12:"14日以内に擬似患者と接触した",13:"14日以内に他の所から来たか広州に戻った人員",14:"その他の人員"},healthStateMap:{1:"正常に活動します",2:"在宅健康サービス",3:"集中健康サービス",4:"集中医学観察者。"},symptomTypeMap:{1:"自分で正常だど感じています",2:"発熱",3:"からせき",4:"だるい",5:"下痢",6:"風邪",7:"頭痛眩暈",11:"发热37.3 ℃以下",12:"发热37.3 ℃（含）以上",13:"からせき",14:"だるい",15:"他の症状"},booleanMap:{0:"いいえ",1:"は"},keyMap:[{label:"番号",key:"id"},{label:"状態を報告する",key:"statusStr"},{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"携帯電話番号",key:"phone"},{label:"証明書タイプ",key:"identityTypeStr"},{label:"証明書番号",key:"identity"},{label:"国籍·地域",key:"nationStr"},{label:"戸籍所在地",key:"domicilePlaceStr"},{label:"本籍地",key:"nativePlace"},{label:"居住住所",key:"address"},{label:"詳しい住所",key:"addr"}],keyMapOther:[{label:"広州に住んでいますか",key:"residentFlagStr"},{label:"近いうちに広州にいますか",key:"residentConditionStr"},{label:"広州に来るまたはもどる期日",key:"returnDate"},{label:"現在の所在地",key:"recentRegionName"},{label:"広州に戻る予定日",key:"quasiReturnDate"},{label:"ここ1か月の滞在履歴",key:"travelRegionClassStr"},{label:"最近の接触歴",key:"socialContactStr"},{label:"14日以内に日を密接に接触する",key:"contactDateRecent"},{label:"14日以内に接触日を感じる",key:"contactDateLike"},{label:"個人の健康状態",key:"healthStateStr"},{label:"症状の一覧",key:"symptomTypeStr"},{label:"その他の症状",key:"symptomDscr"}],reporterKeyMap:[{label:"姓名",key:"clueSupplier"},{label:"連絡電話",key:"clueSupplierPhone"}],reportedKeyMap:[{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"連絡電話",key:"phone"},{label:"居住住所",key:"street"},{label:"詳しい住所",key:"addr"},{label:"ナンバープレート",key:"clueVehicle"},{label:"人型",key:"socialContact11Str"},{label:"広州に来るまたはもどる期日",key:"returnDate"},{label:"人型",key:"socialContact12Str"},{label:"広州に来るまたはもどる期日",key:"contactDateRecent"},{label:"人型",key:"socialContact13Str"},{label:"広州に来るまたはもどる期日",key:"quasiReturnDate"},{label:"人型",key:"socialContact14Str"}],reportContentKeyMap:[{label:"詳細を反映する",key:"symptomDscr"}]},kr:{sexMap:{"男":"남","女":"녀"},statusMap:{0:"처리중",1:"진행중",2:"완료됨"},nationMap:{1:"중국대륙",2:"중국홍콩마카오대만지역",3:"해외"},domicilePlaceMap:{1:"광저우시",2:"광둥성내 기타 지역",3:"후베이성",4:"기타"},identityTypeMap:{1:"신분증",3:"여권",4:"장교증",8:"홍콩마카오주민대륙통행증",9:"타이완주민대륙통행증",6:"홍콩마카오주민거주증",7:"타이완주민거주증",11:"출입국통행증"},residentFlagMap:{1:"네,광저우에 반년이상 거주하였습니다.",2:"아니요,광저우에 임시 방문중입니다."},residentConditionMap:{1:"광저우에 연속 3개월이상 체류중입니다.",2:"광저우에 방문/복귀한지 14일 넘습니다.",3:"광저우에 방문/복귀한지 14일 미만입니다.",4:"지금 다른 지역에 체류중입니다."},travelRegionClassMap:{1:"우한시",2:"후베이(우한제외)",4:"중국대륙기타성(자치구)시",3:"중국홍콩마카오대만지역",5:"기타 국가",6:"원저우시",7:"한국",8:"일본"},personTypeMap:{1:"광저우에 복귀하지 않은 시민",2:"광저우를 떠난적 없는 시민",3:"1월초에 광저우로 복귀한 시민",4:"1월초에 광저우로 방문온 사람",5:"1월중순에 광저우로 복귀한 시민",6:"1월중순에 광저우로 방문온 사람",11:"자택 격리 중임",12:"집중 격리 중임"},socialContactMap:{1:"최근 14일내, 후베이 여행이력자와 접촉",2:"14일내에 감염환자와 접촉이 있었다고 생각하는 자",11:"14일내 후베이지역 방문했거나 거주했던자",12:"14일내 의심환자 접촉자",13:"14일내 기타 지역출발 광저우도착 복귀자･방문자",14:"기타 인원"},healthStateMap:{1:"정상임",2:"자택건강서비스",3:"집중건강서비스",4:"집중의학관찰"},symptomTypeMap:{1:"자기판단에 정상임",2:"발열",3:"기침",4:"무력감",5:"설사",6:"감기",7:"두통어지럼",11:"발열 37.3 ℃이하",12:"발열 37.3 ℃(포함)이상",13:"기침",14:"무력감",15:"기타 증상"},booleanMap:{0:"아니요",1:"예"},keyMap:[{label:"번호",key:"id"},{label:"보고상태",key:"statusStr"},{label:"성함",key:"username"},{label:"성별",key:"gender"},{label:"휴대전화",key:"phone"},{label:"증서타입",key:"identityTypeStr"},{label:"증서번호",key:"identity"},{label:"국적/지역",key:"nationStr"},{label:"호적 소재지",key:"domicilePlaceStr"},{label:"본관",key:"nativePlace"},{label:"거주지",key:"address"},{label:"상세주소",key:"addr"}],keyMapOther:[{label:"광저우에 거주지인지?",key:"residentFlagStr"},{label:"요즘 광저우에 계셨는지?",key:"residentConditionStr"},{label:"광저우 방문이나 복귀 날자",key:"returnDate"},{label:"당전 거주지",key:"recentRegionName"},{label:"광저우에 복귀하는 날자.",key:"quasiReturnDate"},{label:"최근 한달의 동선",key:"travelRegionClassStr"},{label:"최근 접촉이력",key:"socialContactStr"},{label:"14일내 긴밀 접촉 날자",key:"contactDateRecent"},{label:"14일내 의심 접촉 날자",key:"contactDateLike"},{label:"개인건강상태",key:"healthStateStr"},{label:"증상리스트",key:"symptomTypeStr"},{label:"상세 내역 보고",key:"symptomDscr"}],reporterKeyMap:[{label:"성함",key:"clueSupplier"},{label:"전화번호",key:"clueSupplierPhone"}],reportedKeyMap:[{label:"성함",key:"username"},{label:"성별",key:"gender"},{label:"휴대전화",key:"phone"},{label:"거주지",key:"street"},{label:"상세주소",key:"addr"},{label:"연계번호판",key:"clueVehicle"},{label:"관련자 타입",key:"socialContact11Str"},{label:"광저우 방문이나 복귀 날자",key:"returnDate"},{label:"일에 관계된 사람 유형",key:"socialContact12Str"},{label:"광저우 (廣州)로 오거나 돌아오는 날짜",key:"contactDateRecent"},{label:"일에 관계된 사람 유형",key:"socialContact13Str"},{label:"광저우에 복귀하는 날자",key:"quasiReturnDate"},{label:"일에 관계된 사람 유형",key:"socialContact14Str"}],reportContentKeyMap:[{label:"상세한 내용을 반영하다",key:"symptomDscr"}]}}; 
 			}); 
		define("pages/mine/todo/list/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{noContent:"当前没有事项",reportMyself:"为自己上报",reportOthers:"为他人上报",reportMyselfTit:"我的健康自查上报",reportOthersTit:"我的疫情线索上报",todoList:"我的待办",titleMap:{check:"我的健康自查上报",report:"我的疫情线索上报",affair:"我的待办"}},en:{noContent:"No item for the moment",reportMyself:"Report for myself.",reportOthers:"Report for anyone else.",reportMyselfTit:"My Health Condition Report",reportOthersTit:"My Report of Epidemic Clues",todoList:"My To-do",titleMap:{check:"My Health Condition Report",report:"My Report of Epidemic Clues",affair:"My To-do"}},ja:{noContent:"当面事項がありません",reportMyself:"自分のために報告します",reportOthers:"他人のために報告します",reportMyselfTit:"私の健康自己診断を報告",reportOthersTit:"私の感染の情報を報告しました",todoList:"私の処理待ち業務",titleMap:{check:"私の健康自己診断を報告",report:"私の感染の情報を報告しました",affair:"私の処理待ち業務"}},kr:{noContent:"관련 내역 없음",reportMyself:"스스로 신고",reportOthers:"다른사람 대신 신고",reportMyselfTit:"건강상태 자기점검신고",reportOthersTit:"전염병 단서 제출",todoList:"내가 할 일",titleMap:{check:"건강상태 자기점검신고",report:"전염병 단서 제출",affair:"내가 할 일"}}}; 
 			}); 
		define("pages/report/home/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{suiKang:"穗康",guangzhouDisease:"广州市新冠肺炎防控指挥办",shangbaoImg:["https://imgcache.gzonline.gov.cn/cos/shangbao_dbc3d59b.png"],supportor:"腾讯公司/腾讯云提供技术支持",myHealthInfo:"上报我的健康信息",myHealthInfoDesc:"上报个人健康自查表",theHealth:"为他人上报健康状况",theHealthDesc:"为他人上报健康状态信息",reminder:"温馨提示",isMyHealth:"为他人上报健康情况前，请先为自己上报健康情况",iknow:"知道了",serverCrowded:"服务器拥挤，请稍后再试",current:0},en:{suiKang:"Sui Kang",SuiKang:"Sui Kang",guangzhouDisease:"Guangzhou Disease Control and Prevention Office",shangbaoImg:["https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_en.png"],supportor:"Tencent / Tencent Cloud provides technical support",myHealthInfo:"Report health information",myHealthInfoDesc:"Report to the personal health self-examination form",theHealth:"Report the health status of others",theHealthDesc:"Report health status information for others",reminder:"reminder",isMyHealth:"Please report health status before reporting health conditions to others",iknow:"I Know",serverCrowded:"The server is crowded. Please try again later"},ja:{suiKang:"穂康",guangzhouDisease:"広州市防制御",supportor:"テンセント/テンセント雲は技術サポートを提供している",shangbaoImg:["https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_jap.png"],myHealthInfo:"健康情報を報告する",myHealthInfoDesc:"健康診断表に報告する",theHealth:"健康を報告するために",theHealthDesc:"健康状態情報を他人に報告する",reminder:"温かいヒント",isMyHealth:"人のために健康状態を報告する前に，まず自分のために健康状態を報告してください",iknow:"分かった",serverCrowded:"サーバーが混雑しておりますので、後ほどお試しください"},kr:{suiKang:"호강",guangzhouDisease:"광주시가 통제하여 처리하다.",supportor:"정보기술지원:텐센트/텐센트클라우드",shangbaoImg:["https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_kr.png"],myHealthInfo:"건강 정보를 에스컬레이션하다",myHealthInfoDesc:"개인 건강 자체 조사표를 신고하다",theHealth:"다른 사람을 위해 건강 상태를 신고하다",theHealthDesc:"타인을 위해 건강 상태 정보를 신고하다",reminder:"따뜻한 팁",isMyHealth:"다른 사람을 위해 건강 상태를 신고하기 전에, 먼저 자신을 위해 건강 상태를 신고해 주세요",language:"한국",serverCrowded:"서버가 혼잡합니다. 나중에 다시 시도하십시오"}}; 
 			}); 
		define("pages/report/index/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{select:"选择",personName:"姓名",enterName:"请输入姓名",phone:"手机号码",idType:"证件类型",idNumber:"证件号码",sex:"性别",birthData:"出生日期",nationality:"国籍/地区",selectNationality:"请选择国籍/地区",placeOfDomicile:"户籍所在地",selectPlaceOfDomicile:"请选择户籍所在地",nativePlace:"籍贯",selectNativePlace:"请选择籍贯",address:"居住地址",selectAddress:"请选择居住地址",addressDatile:"详细地址",selectAddressDatile:"请填写详细住址（楼栋门牌号）",inGuangzhou:"近期是否在广州",inOUtGUangZhouDate:"来或返回广州日期",inOUtGUangZhouDate14:"请选择返回日期（最近14日内）",currentLocation:"目前所在地",selectCurrentLocation:"请选择目前所在地点",isGuangZhou:"是否常住广州",outGuangZhou:"拟返回广州日期",selectDate:"请选择日期",monthTraveling:"近一个月旅居史",Recenthistory:"近期接触史（选填）",Recenthistory14:"14日内密切接触近期有湖北旅居史者",RecenthistoryDesc14:"近期有湖北旅居史者指：14日内来自湖北和去过湖北的人员",RecenthistoryPerson14:"自我感觉14日内曾与患者接触过者",RecenthistoryPersonDesc:"近期与确诊患者有接触，如乘搭同一公共交通工具等情况",contactDate:"接触日期",selectDate14:"请选择日期（最近14日内）",healthStatus:"个人健康状态",symptomsTitle:"是否有如下症状（必选）",symptomsLable:"是否有如下症状",symptomDscrLable:"其他症状",symptomDscrPlaceholder:"请简要描述症状情况(不超过10个汉字)",agree:"我已阅知本申报所列事项，并保证以上申报内容正确属实",infoBasic:"基本信息",submit:"提交",getPhone:"获取绑定手机号",enterPhone:"请输入手机号码",selectTypeId:"请选证件类型",enterId:"请输入证件号码",selectGenger:"请选择性别",birthDate:"请选择出生日期",myHealth:"上报我的健康信息",heHealth:"为他人上报健康状况",checkId:"请输入正确的身份证号码",checkHmHid:"请输入正确的证件号码",checRequired:"请输入其他症状",symptomDscrLength:"其他症状描述不超过10个汉字",checkBirthday:"请输入正确的出生日期",requiredmonthTraveling:"请选择近一个月旅居史",selectSymptoms:"请选择症状",loding:"努力加载中...",serverCrowded:"服务器拥挤，请稍后再试",portrait:"他人头像",information:"头像信息",uploadAvatar:"请上传他人头像",completed:"上传完成",upload:"上传",selectRegion:{serverCrowded:"服务器拥挤，请稍后再试",unableLocation:"无法获取定位信息",firstAuthorize:"请先授权获取当前定位信息",street:"街道",area:"区",community:"社区"},sexMap:{"男":"男","女":"女"},nationRange:[{name:"中国大陆",value:1},{name:"中国港澳台地区",value:2},{name:"外国",value:3}],domicilePlaceRange:[{name:"广州市",value:1},{name:"广东其他地市",value:2},{name:"湖北省",value:3},{name:"其他",value:4}],cardTypeRange:[{name:"身份证",value:1},{name:"军官证",value:4},{name:"护照",value:3},{name:"港澳居民来往内地通行证",value:8},{name:"台湾居民来往内地通行证",value:9},{name:"港澳居民居住证",value:6},{name:"台湾居民居住证",value:7},{name:"出入境通行证",value:11}],residentFlagItems:[{name:"是，在广州居住了已有半年以上",value:1},{name:"否，我是临时来广州的",value:2}],residentConditionItems:[{name:"一直在广州3个月或以上",value:1},{name:"来或返回广州超过14日",value:2},{name:"来或返回广州不超过14日（含14日）",value:3},{name:"目前仍在外地",value:4}],travelRegionClassItems:[{name:"武汉市",value:1},{name:"湖北（不含武汉）",value:2},{name:"温州市",value:6},{name:"中国大陆其他省(自治区)市",value:4},{name:"中国港澳台地区",value:3},{name:"韩国",value:7},{name:"日本",value:8},{name:"其他国家",value:5}],personTypeItems:[{name:"未返穗本地常住居民",value:1,desc:"在2020-1-1之后一直没返穗的本地常住居民。"},{name:"持续在穗人员",value:2,desc:"于2020-1-1之前到目前一直在穗人员。"},{name:"一月初返穗居民",value:3,desc:"在2020-1-1至2020-1-15间返穗本地常住居民。"},{name:"一月初来穗人员",value:4,desc:"在2020-1-1至2020-1-15间来穗外地临时人员。"},{name:"一月中返穗居民",value:5,desc:"于2020-1-15后返穗本地常住居民。"},{name:"一月中来穗人员",value:6,desc:"于2020-1-15后来穗外地临时人员。"},{name:"居家医学观察人员 ",value:11},{name:"集中医学观察人员 ",value:12}],symptomItems:[{name:"自觉正常",value:1},{name:"发热37.3 ℃以下",value:11},{name:"发热37.3 ℃（含）以上",value:12},{name:"干咳",value:13},{name:"乏力",value:14},{name:"其他症状",value:15}],socialContactItems:[{name:"14日内密切接触近期有湖北旅居史者",value:1,desc:"近期有湖北旅居史者指：14日内来自湖北和去过湖北的人员"},{name:"自我感觉14日内曾与患者接触过者",value:2,desc:"近期与确诊患者有接触，如乘搭同一交通工具等情况"}],healthStateItems:[{name:"正常活动",value:1,desc:"自觉正常无不适症状"},{name:"居家健康服务",value:2,desc:"广州有固定住处，在家自我健康观察"},{name:"集中健康服务",value:3,desc:"广州无固定住处，如住酒店等实施集中健康观察"},{name:"集中医学观察",value:4,desc:"在医疗机构医学观察"}],selfFormRules:{symptomDscr:[{type:"symptomDscrLength",message:"其他症状描述不超过10个汉字"}],username:[{type:"required",message:"请填写姓名"}],personType:[{type:"required",message:"请选择人员类型"}],phone:[{type:"required",message:"请输入中国大陆手机号码"},{type:"mobile",message:"请输入中国大陆手机号码"}],identityType:[{type:"required",message:"请选择证件类型"}],identity:[{type:"required",message:"请输入证件号码"},{type:"id",message:"请输入正确的身份证号码"}],birthday:[{type:"required",message:"请选择正确的出生日期"},{type:"birthdayLength",message:"请选择正确的出生日期"}],street:[{type:"required",message:"请选择居住地址"}],addr:[{type:"required",message:"请输入详细住址"}],gender:[{type:"required",message:"请选择性别"}],residentFlag:[{type:"required",message:"请选择是否常住广州"}],residentCondition:[{type:"required",message:"请选择近期是否在广州"}],healthState:[{type:"required",message:"请选择个人健康现状"}],avatarKey:[{type:"required",message:"请选择头像"}]},sexRange:[{name:"男",value:"男"},{name:"女",value:"女"}],PROVINCE_LISTS:[{name:"北京",ename:"beijing"},{name:"天津",ename:"tianjin"},{name:"上海",ename:"shanghai"},{name:"重庆",ename:"chongqing"},{name:"中国香港",ename:"xianggang"},{name:"中国澳门",ename:"aomen"},{name:"河北",ename:"hebei"},{name:"山西",ename:"shanxi"},{name:"内蒙古",ename:"neimenggu"},{name:"辽宁",ename:"liaoning"},{name:"吉林",ename:"jilin"},{name:"黑龙江",ename:"heilongjiang"},{name:"江苏",ename:"jiangsu"},{name:"浙江",ename:"zhejiang"},{name:"安徽",ename:"anhui"},{name:"福建",ename:"fujian"},{name:"江西",ename:"jiangxi"},{name:"山东",ename:"shandong"},{name:"河南",ename:"henan"},{name:"湖北",ename:"hubei"},{name:"湖南",ename:"hunan"},{name:"广东",ename:"guangdong"},{name:"广西",ename:"guangxi"},{name:"海南",ename:"hainan"},{name:"四川",ename:"sichuan"},{name:"贵州",ename:"guizhou"},{name:"云南",ename:"yunnan"},{name:"西藏",ename:"xizang"},{name:"陕西",ename:"shanxi1"},{name:"甘肃",ename:"gansu"},{name:"青海",ename:"qinghai"},{name:"宁夏",ename:"ningxia"},{name:"新疆",ename:"xinjiang"},{name:"中国台湾",ename:"taiwan"}],recentRegion_LISTS:[{name:"北京",ename:"beijing"},{name:"天津",ename:"tianjin"},{name:"上海",ename:"shanghai"},{name:"重庆",ename:"chongqing"},{name:"河北",ename:"hebei"},{name:"山西",ename:"shanxi"},{name:"内蒙古",ename:"neimenggu"},{name:"辽宁",ename:"liaoning"},{name:"吉林",ename:"jilin"},{name:"黑龙江",ename:"heilongjiang"},{name:"江苏",ename:"jiangsu"},{name:"浙江",ename:"zhejiang"},{name:"安徽",ename:"anhui"},{name:"福建",ename:"fujian"},{name:"江西",ename:"jiangxi"},{name:"山东",ename:"shandong"},{name:"河南",ename:"henan"},{name:"湖北",ename:"hubei"},{name:"湖南",ename:"hunan"},{name:"广东",ename:"guangdong"},{name:"广西",ename:"guangxi"},{name:"海南",ename:"hainan"},{name:"四川",ename:"sichuan"},{name:"贵州",ename:"guizhou"},{name:"云南",ename:"yunnan"},{name:"西藏",ename:"xizang"},{name:"陕西",ename:"shanxi1"},{name:"甘肃",ename:"gansu"},{name:"青海",ename:"qinghai"},{name:"宁夏",ename:"ningxia"},{name:"新疆",ename:"xinjiang"},{name:"中国香港",ename:"xianggang"},{name:"中国澳门",ename:"aomen"},{name:"中国台湾",ename:"taiwan"},{name:"国外",ename:"guowai"}]},en:{select:"Select",personName:"Name",enterName:"Enter your name",phone:"Phone number",idType:"Type of ID",idNumber:"ID number",sex:"Gender",birthData:"Date of birth",nationality:"Nationality",selectNationality:"Choose your nationality",placeOfDomicile:"Household registration location",selectPlaceOfDomicile:"Choose the place of household registration",nativePlace:"Place of origin",selectNativePlace:"Choose your place of origin",address:"Current address",selectAddress:"Select a residential address",addressDatile:"Detailed address",selectAddressDatile:"Fill in the detailed address (building number)",inGuangzhou:"Are you in Guangzhou recently?",inOUtGUangZhouDate:"Date of arrival in or return to Guangzhou",inOUtGUangZhouDate14:"Please select the return date (within the last 14 days)",currentLocation:"Current location",selectCurrentLocation:"Please select your current location",isGuangZhou:"Are you a permanent resident of Guangzhou?",outGuangZhou:"Planned date of return to Guangzhou",selectDate:"Please select date",monthTraveling:"Travel or living history within 1 month",Recenthistory:"Recent contact history (optional)",Recenthistory14:"Have close contact with those who traveled to or lived in Hubei within 14 days.",RecenthistoryDesc14:"Recent Hubei travel or living history refers to: from and to Hubei within 14 days",RecenthistoryPerson14:"Feel that you have contacted someone who is infected with COVID-19 within 14 days.",RecenthistoryPersonDesc:"Recent contact with a patient infected with COVID-19, such as traveling on the same public transportation vehicle, etc",contactDate:"Contact date",selectDate14:"Please select date (within the last 14 days)",healthStatus:"Personal health status",symptomsTitle:"Do you have any of the following symptoms (required)",symptomsLable:"If you have any of the following symptoms",symptomDscrLable:"Other symptoms",symptomDscrPlaceholder:"Briefly describe the symptoms",agree:"I have read the matters listed in this declaration and guarantee that the above declaration is correct and true",infoBasic:"Basic information",submit:"Submit",getPhone:"link with NO.",enterPhone:"Enter your phone number",selectTypeId:"Please choose the type of certificate",enterId:"Enter the document number",selectGenger:"Select gender",birthDate:"Select date of birth",myHealth:"Report my health information",heHealth:"Report the health status of others",checkId:"Please enter the correct ID number",checkHmHid:"Please enter the correct ID number",checRequired:"Please enter other symptoms",symptomDscrLength:"Other symptoms, describing with not more than 10 Chinese characters",checkBirthday:"Please enter the correct date of birth",requiredmonthTraveling:"Please choose your travel or living History within 1 month",selectSymptoms:"Please select symptoms",loding:"Loading...",serverCrowded:"The server is crowded. Please try again later.",portrait:"Portrait of others",information:"Head information",uploadAvatar:"Upload other people's avatars",completed:"Upload completed",upload:"Upload",selectRegion:{serverCrowded:"The server is crowded. Please try again later.",unableLocation:"Unable to obtain location information",firstAuthorize:"Please first authorize access to the current location information",street:"Sub-district",area:"District",community:"Community"},sexMap:{"男":"Men","女":"women"},nationRange:[{name:"provinces on the Chines\n                 Mainland",value:1},{name:"Hong Kong, Macao and Taiwan",value:2},{name:"Foreign countries",value:3}],domicilePlaceRange:[{name:"Guangzhou",value:1},{name:"Other cities in Guangdong Province",value:2},{name:"Hubei",value:3},{name:"Other",value:4}],cardTypeRange:[{name:"ID card",value:1},{name:"Certificate of officers",value:4},{name:"Passport",value:3},{name:"Mainland travel permit for Hong Kong and Macao residents",value:8},{name:"Mainland travel permit for Taiwan residents",value:9},{name:"Hong Kong and Macao residence permit",value:6},{name:"Taiwan residence permit",value:7},{name:"Entry and exit permit",value:11}],residentFlagItems:[{name:"Yes, I've lived in Guangzhou for more\n                  than half a year.",value:1},{name:"No, I've been in Guangzhou for a short time.",value:2}],residentConditionItems:[{name:"Stay in Guangzhou for over 3 months.",value:1},{name:"Came or returned to Guangzhou over 14 days ago.",value:2},{name:"Came or returned to Guangzhou within 14 days",value:3},{name:"Still outside of Guangzhou.",value:4}],travelRegionClassItems:[{name:"Wuhan",value:1},{name:"Hubei (excluding Wuhan)",value:2},{name:"Wenzhou",value:6},{name:"Other provinces on the Chinese Mainland",value:4},{name:"Hong Kong, Macao and Taiwan",value:3},{name:"South Korea",value:7},{name:"Japan",value:8},{name:"Other countries",value:5}],personTypeItems:[{name:"Local permanent residents who have not returned to Guangzhou",value:1,desc:"Local permanent resident who has not returned to Guangzhou after January 1, 2020。"},{name:"People always in Guangzhou",value:2,desc:"Anyone who has been in Guangzhou from January 1, 2020 to date"},{name:"Residents who returned to Guangzhou in early January",value:3,desc:"Local permanent resident who returned to Guangzhou during January 1-15, 2020"},{name:"Non-residents who came to Guangzhou in early January",value:4,desc:"Non-local temporary staff member who came to Guangzhou during January 1-15, 2020"},{name:"Residents who returned to Guangzhou in mid January",value:5,desc:"Local permanent resident who returned to Guangzhou after January 15, 2020"},{name:"Non-residents who returned to Guangzhou in mid January",value:6,desc:"Non-local temporary staff member who came to Guangzhou after January 15, 2020"},{name:"Under medical observation at home ",value:11},{name:"Under centralized medical observation ",value:12}],symptomItems:[{name:"Normal",value:1},{name:"fever below 37.3 ℃",value:11},{name:"fever above 37.3 ℃ (including)",value:12},{name:"Dry cough",value:13},{name:"Fatigue",value:14},{name:"Other symptoms",value:15}],socialContactItems:[{name:"Have close contact with those who traveled to or lived in Hubei within 14 days.",value:1,desc:"Recent Hubei travel or living history refers to: from and to Hubei within 14 days"},{name:"Feel that you have contacted those who is infected with COVID-19 within 14 days.",value:2,desc:"Recent contact with a patient infected with COVID-19, such as traveling on the same public transportation vehicle, etc"}],healthStateItems:[{name:"Normal",value:1,desc:"Feel normal and have no uncomfortable symptoms"},{name:"Conducting medical observation at home.",value:2,desc:"With a permanent residence in Guangzhou, self health observation at home"},{name:"Receiving medical observation at centralized designated places.",value:3,desc:"Receiving centralized medical observation in Guangzhou, such as staying in a hotel, with no permanent residence"},{name:"Receiving centralized medical observation",value:4,desc:"Medical observation in medical institutions"}],selfFormRules:{symptomDscr:[{type:"symptomDscrLength",message:"Other symptoms, describing with not more than 10 Chinese characters"}],username:[{type:"required",message:"Please fill in your name"}],personType:[{type:"required",message:"Please select the type of person"}],phone:[{type:"required",message:"Please enter your Chinese mainland mobile phone number"},{type:"mobile",message:"Please enter your Chinese mainland mobile phone number"}],identityType:[{type:"required",message:"Please select the type of ID"}],identity:[{type:"required",message:"Please enter the document number"},{type:"id",message:"Please enter the correct ID number"}],birthday:[{type:"required",message:"Please choose the correct date of birth"},{type:"birthdayLength",message:"Please choose the correct date of birth"}],street:[{type:"required",message:"Please select a residential address"}],addr:[{type:"required",message:"Please enter a detailed address"}],gender:[{type:"required",message:"Please select gender"}],residentFlag:[{type:"required",message:"Please choose whether you are a permanent Guangzhou resident or not"}],residentCondition:[{type:"required",message:"Please choose whether you will be in Guangzhou recently"}],healthState:[{type:"required",message:"Please choose your health status"}],avatarKey:[{type:"required",message:"Please select a picture"}]},sexRange:[{name:"men",value:"男"},{name:"women",value:"女"}],PROVINCE_LISTS:[{name:"Beijing",ename:"beijing"},{name:"Tianjin",ename:"tianjin"},{name:"Shanghai",ename:"shanghai"},{name:"Chongqing",ename:"chongqing"},{name:"Hong Kong",ename:"xianggang"},{name:"Macao",ename:"aomen"},{name:"Hebei",ename:"hebei"},{name:"Shanxi",ename:"shanxi"},{name:"Inner Mongolia",ename:"neimenggu"},{name:"Liaoning",ename:"liaoning"},{name:"Jilin",ename:"jilin"},{name:"Heilongjiang",ename:"heilongjiang"},{name:"Jiangsu",ename:"jiangsu"},{name:"Zhejiang",ename:"zhejiang"},{name:"Anhui",ename:"anhui"},{name:"Fujian",ename:"fujian"},{name:"Jiangxi",ename:"jiangxi"},{name:"Shandong",ename:"shandong"},{name:"Henan",ename:"henan"},{name:"Hubei",ename:"hubei"},{name:"Hunan",ename:"hunan"},{name:"Guangdong",ename:"guangdong"},{name:"Guangxi",ename:"guangxi"},{name:"Hainan",ename:"hainan"},{name:"Sichuan",ename:"sichuan"},{name:"Guizhou",ename:"guizhou"},{name:"Yunnan",ename:"yunnan"},{name:"Tibet",ename:"xizang"},{name:"Shaanxi",ename:"shanxi1"},{name:"Gansu",ename:"gansu"},{name:"Qinghai",ename:"qinghai"},{name:"Ningxia",ename:"ningxia"},{name:"Xinjiang",ename:"xinjiang"},{name:"Taiwan",ename:"taiwan"}],recentRegion_LISTS:[{name:"Beijing",ename:"beijing"},{name:"Tianjin",ename:"tianjin"},{name:"Shanghai",ename:"shanghai"},{name:"Chongqing",ename:"chongqing"},{name:"Hebei",ename:"hebei"},{name:"Shanxi",ename:"shanxi"},{name:"Inner Mongolia",ename:"neimenggu"},{name:"Liaoning",ename:"liaoning"},{name:"Jilin",ename:"jilin"},{name:"Heilongjiang",ename:"heilongjiang"},{name:"Jiangsu",ename:"jiangsu"},{name:"Zhejiang",ename:"zhejiang"},{name:"Anhui",ename:"anhui"},{name:"Fujian",ename:"fujian"},{name:"Jiangxi",ename:"jiangxi"},{name:"Shandong",ename:"shandong"},{name:"Henan",ename:"henan"},{name:"Hubei",ename:"hubei"},{name:"Hunan",ename:"hunan"},{name:"Guangdong",ename:"guangdong"},{name:"Guangxi",ename:"guangxi"},{name:"Hainan",ename:"hainan"},{name:"Sichuan",ename:"sichuan"},{name:"Guizhou",ename:"guizhou"},{name:"Yunnan",ename:"yunnan"},{name:"Tibet",ename:"xizang"},{name:"Shaanxi",ename:"shanxi1"},{name:"Gansu",ename:"gansu"},{name:"Qinghai",ename:"qinghai"},{name:"Ningxia",ename:"ningxia"},{name:"Xinjiang",ename:"xinjiang"},{name:"Hong Kong",ename:"xianggang"},{name:"Macao",ename:"aomen"},{name:"Taiwan",ename:"taiwan"},{name:"Foreign countries",ename:"guowai"}]},ja:{select:"選択",personName:"氏名",enterName:"氏名を入力してください",phone:"携帯電話番号",idType:"証書タイプ",idNumber:"証書番号",sex:"性別",birthData:"生年月日",nationality:"国籍/地区",selectNationality:"国籍を選んでください/地区",placeOfDomicile:"戸籍所在地",selectPlaceOfDomicile:"戸籍所在地をお選びください",nativePlace:"本籍地",selectNativePlace:"本籍を選んでください",address:"居住住所",selectAddress:"居住住所を選んでください。",addressDatile:"詳しい住所",selectAddressDatile:"詳細住所(ビル棟番地)をご記入ください",inGuangzhou:"近いうちに広州にいますか",inOUtGUangZhouDate:"広州に来るまたはもどる期日",inOUtGUangZhouDate14:"戻る日を選んでください(直近14日以内)",currentLocation:"現在の所在地",selectCurrentLocation:"現在の所在地を選んでください",isGuangZhou:"広州に住んでいますか",outGuangZhou:"広州に戻る予定日",selectDate:"期日を選んでください",monthTraveling:"ここ1か月の滞在履歴",Recenthistory:"最近の接触歴(選んで記入)",Recenthistory14:"14日間に湖北省駐在の人と密接に接触しました",RecenthistoryDesc14:"最近、湖北省駐在履歴のある人は、14日以内に湖北省行き来したことのある人を指します",RecenthistoryPerson14:"自分で14日以内に患者と接触したことがあると感じています",RecenthistoryPersonDesc:"最近は確診患者と接触したことがあります。例えば、同一公共交通車などに乗ったなど",contactDate:"接触期日",selectDate14:"日付を選んでください(直近14日以内)",healthStatus:"個人の健康状態",symptomsTitle:"次のような症状がありますか(必須選択)",symptomsLable:"次のような症状がありますか",symptomDscrLable:"他の症状",symptomDscrPlaceholder:"症状の概要を述べてください(不超过10个汉字)",agree:"私は既に本申告書に記載されています事項を閲覧し、そして以上の申告内容が正確であることを保証します",infoBasic:"基本情報",submit:"提出",getPhone:"取得",enterPhone:"携帯番号を入力してください",selectTypeId:"証明書の種類を選んでください",enterId:"証明書番号を入力してください",selectGenger:"性別を選んでください。",birthDate:"生年月日を選んでください",myHealth:"私の健康情報を報告します",heHealth:"他人のために健康を報告します",checkId:"正しい身分証明書番号を入力してください",checkHmHid:"正しい証明書番号を入力してください",checRequired:"他の症状を入力してください",symptomDscrLength:"他の症状は10字以内にすること",checkBirthday:"正確な生年月日を入力してください",requiredmonthTraveling:"1ヶ月近くの寄寓履歴を選んでください",selectSymptoms:"症状を選んでください",loding:"一生懸命にロード中...",serverCrowded:"サーバーーが込んでおりますので、後ほどやってみてください",portrait:"他人の顔写真",information:"プロフィール情報",uploadAvatar:"他人の顔写真をアップロードしてください。",completed:"アップロード完了",upload:"アップロード",selectRegion:{serverCrowded:"サーバーーが込んでおりますので、後ほどやってみてください",unableLocation:"位置情報が取得できません",firstAuthorize:"現在位置決め情報の取得を先に授権してください",street:"街",area:"区",community:"コミュニティ"},sexMap:{"男":"男","女":"女"},nationRange:[{name:"中国大陸",value:1},{name:"中国の香港, マカオと台湾地区",value:2},{name:"海外",value:3}],domicilePlaceRange:[{name:"広州市",value:1},{name:"広東省他の都市",value:2},{name:"湖北省",value:3},{name:"その他",value:4}],cardTypeRange:[{name:"身分証明書",value:1},{name:"軍官証",value:4},{name:"パスポート",value:3},{name:"香港とマカオの住民が内陸通行用通行証",value:8},{name:"台湾住民が内陸通行用通行証",value:9},{name:"香港とマカオの住民証明書",value:6},{name:"台湾住民居住証",value:7},{name:"出入国通行証",value:11}],residentFlagItems:[{name:"はい、広州に半年以上住んでいます",value:1},{name:"いいえ、私は臨時に広州に来ています",value:2}],residentConditionItems:[{name:"ずっと広州で3ヶ月またはそれ以上います",value:1},{name:"広州に来て、または戻って十四日以上泊まっていました",value:2},{name:"広州に来て、または戻って十四日以内泊まっていました(14日を含む)",value:3},{name:"現在も他所にあります",value:4}],travelRegionClassItems:[{name:"武漢市",value:1},{name:"湖北(武漢を除く)",value:2},{name:"温州市",value:6},{name:"中国大陸の県",value:4},{name:"中国の香港, マカオと台湾地区",value:3},{name:"韩国",value:7},{name:"日本",value:8},{name:"その他の国",value:5}],personTypeItems:[{name:"広州に戻っていない地元常住住民。",value:1,desc:"2020年1月1日後に、広東に戻っていない現地住民。"},{name:"広州継続駐在者",value:2,desc:"2020年1月1日前に、広東に住んでいる住民。"},{name:"1月初めに広州に戻った住民",value:3,desc:"2020年1月1日〜2020年1月15日の間に広東に帰った現地住民。"},{name:"一月の初めに広州に来た人員",value:4,desc:"2020年1月1日〜2020年1月15日の間に現地以外から広東に来た一時的な滞在者。"},{name:"1月中に広州を戻る住民",value:5,desc:"2020年1月15日後に広東に戻った現地住民。"},{name:"1月中に広州に来た人員",value:6,desc:"2020年1月15日後に現地以外から広東に来た一時的な滞在者。"},{name:"在宅医学観察者 ",value:11},{name:"集中医学観察者",value:12}],symptomItems:[{name:"自分で正常だど感じています",value:1},{name:"发热3热は37.3°c以下",value:11},{name:"発熱37.3%以上",value:12},{name:"からせき",value:13},{name:"だるい",value:14},{name:"他の症状",value:15}],socialContactItems:[{name:"14日間に湖北省駐在の人と密接に接触しました",value:1,desc:"最近、湖北省駐在履歴のある人は、14日以内に湖北省行き来したことのある人を指します"},{name:"自分で14日以内に患者と接触したことがあると感じています",value:2,desc:"最近は確診患者と接触したことがあります。例えば、同一公共交通車などに乗ったなど"}],healthStateItems:[{name:"正常に活動します",value:1,desc:"自分の感じで正常で、不快な症状はありません"},{name:"在宅健康サービス",value:2,desc:"広州には固定住所があり，家では自己健康観察をしています"},{name:"集中健康サービス",value:3,desc:"広州には固定住所がなく，ホテルに泊まるなど集中的な健康観察を実施しています"},{name:"集中医学観察",value:4,desc:"医療機関で医学観察"}],selfFormRules:{symptomDscr:[{type:"symptomDscrLength",message:"他の症状記載は10字以内にすること"}],username:[{type:"required",message:"お名前をご記入ください"}],personType:[{type:"required",message:"人員の種類を選んでください"}],phone:[{type:"required",message:"中国大陸の携帯電話番号を入力してください"},{type:"mobile",message:"中国大陸の携帯電話番号を入力してください"}],identityType:[{type:"required",message:"証明書のタイプを選んでください"}],identity:[{type:"required",message:"証明書番号を入力してください"},{type:"id",message:"正しい身分証明書番号を入力してください"}],birthday:[{type:"required",message:"正しい生年月日を選んでください"},{type:"birthdayLength",message:"正しい生年月日を選んでください"}],street:[{type:"required",message:"住所を選んでください。"}],addr:[{type:"required",message:"詳細な住所を入力してください"}],gender:[{type:"required",message:"性別を選んでください。"}],residentFlag:[{type:"required",message:"広州に常住するかを選んでください"}],residentCondition:[{type:"required",message:"広州に常住するかを選んでください"}],healthState:[{type:"required",message:"個人の健康状態を選んでください"}],avatarKey:[{type:"required",message:"アイコンを選択してください"}]},sexRange:[{name:"男",value:"男"},{name:"女",value:"女"}],PROVINCE_LISTS:[{name:"北京",ename:"beijing"},{name:"天津",ename:"tianjin"},{name:"上海",ename:"shanghai"},{name:"重慶",ename:"chongqing"},{name:"香港",ename:"xianggang"},{name:"マカオ",ename:"aomen"},{name:"河北",ename:"hebei"},{name:"山西",ename:"shanxi"},{name:"内モンゴル",ename:"neimenggu"},{name:"遼寧省",ename:"liaoning"},{name:"吉林",ename:"jilin"},{name:"黒竜江",ename:"heilongjiang"},{name:"江苏省",ename:"jiangsu"},{name:"浙江省",ename:"zhejiang"},{name:"安徽",ename:"anhui"},{name:"福建省",ename:"fujian"},{name:"江西",ename:"jiangxi"},{name:"山東",ename:"shandong"},{name:"河南",ename:"henan"},{name:"湖北",ename:"hubei"},{name:"湖南",ename:"hunan"},{name:"広東",ename:"guangdong"},{name:"広西",ename:"guangxi"},{name:"海南",ename:"hainan"},{name:"四川省",ename:"sichuan"},{name:"貴州",ename:"guizhou"},{name:"雲南",ename:"yunnan"},{name:"チベット",ename:"xizang"},{name:"陝西",ename:"shanxi1"},{name:"甘粛",ename:"gansu"},{name:"青海",ename:"qinghai"},{name:"寧夏",ename:"ningxia"},{name:"新疆",ename:"xinjiang"},{name:"台湾",ename:"taiwan"}],recentRegion_LISTS:[{name:"北京",ename:"beijing"},{name:"天津",ename:"tianjin"},{name:"上海",ename:"shanghai"},{name:"重慶",ename:"chongqing"},{name:"河北",ename:"hebei"},{name:"山西(山西)",ename:"shanxi"},{name:"内モンゴル",ename:"neimenggu"},{name:"遼寧省",ename:"liaoning"},{name:"吉林",ename:"jilin"},{name:"黒竜江",ename:"heilongjiang"},{name:"江苏省",ename:"jiangsu"},{name:"浙江省",ename:"zhejiang"},{name:"安徽",ename:"anhui"},{name:"福建省",ename:"fujian"},{name:"江西",ename:"jiangxi"},{name:"山東",ename:"shandong"},{name:"河南",ename:"henan"},{name:"湖北",ename:"hubei"},{name:"湖南",ename:"hunan"},{name:"広東",ename:"guangdong"},{name:"広西",ename:"guangxi"},{name:"海南",ename:"hainan"},{name:"四川省",ename:"sichuan"},{name:"貴州",ename:"guizhou"},{name:"雲南",ename:"yunnan"},{name:"チベット",ename:"xizang"},{name:"陝西(陝西)",ename:"shanxi1"},{name:"甘粛",ename:"gansu"},{name:"青海",ename:"qinghai"},{name:"寧夏",ename:"ningxia"},{name:"新疆",ename:"xinjiang"},{name:"香港",ename:"xianggang"},{name:"マカオ",ename:"aomen"},{name:"台湾",ename:"taiwan"},{name:"海外",ename:"guowai"}]},kr:{select:"선택",personName:"성함",enterName:"성함을 입력하십시오.",phone:"휴대전화",idType:"증서타입",idNumber:"증서번호",sex:"성별",birthData:"생년월일",nationality:"국적",selectNationality:"국적을 선택하십시오",placeOfDomicile:"호적 소재지",selectPlaceOfDomicile:"호적 소재지를 선택하십시오",nativePlace:"본관",selectNativePlace:"본관을 선택하십시오",address:"거주지",selectAddress:"거주지 주소를 선택하십시오",addressDatile:"상세주소",selectAddressDatile:"상세주소(빌딩넘버)를 기입하십시오",inGuangzhou:"요즘 광저우에 계셨는지?",inOUtGUangZhouDate:"광저우 방문이나 복귀 날자",inOUtGUangZhouDate14:"복귀날자(최근 14일 이내)를 선택하십시오.",currentLocation:"당전 거주지",selectCurrentLocation:"당전 거주지를 선택하십시오.",isGuangZhou:"광저우에 거주지인지",outGuangZhou:"광저우에 복귀하는 날자",selectDate:"날자를 선택하십시오",monthTraveling:"최근 한달의 동선",Recenthistory:"최근 접촉이력(선택사항)",Recenthistory14:"최근 14일내, 후베이 여행이력자와 접촉",RecenthistoryDesc14:"최근 후베이 여행이력자란,14일내 후베이지역에서 왔거나 후베이지역을 방문한 자",RecenthistoryPerson14:"14일내에 감염환자와 접촉이 있었다고 생각하는 자",RecenthistoryPersonDesc:"최근 감염환자와 접촉,예하면 공중교통도구에 같이 승차한 경우",contactDate:"접촉 날자",selectDate14:"날자(최근14일내)를 선택하십시오",healthStatus:"개인건강상태",symptomsTitle:"하기 증상이 있는지(필수사항)",symptomsLable:"하기 증상이 있는지",symptomDscrLable:"기타 증상",symptomDscrPlaceholder:"증상을 간략히 적으십시오",agree:"나는 위의 신고서에 나열한 사항을 확인하였으며 신고내용이 사실임을 보증합니다.",infoBasic:"프로파일",submit:"제출",getPhone:"핸드폰 번호 찾기",enterPhone:"핸드폰 번호를 입력하십시오",selectTypeId:"증서 타입을 선택하십시오",enterId:"증서 번호를 입력하십시오",selectGenger:"성별을 선택하십시오",birthDate:"생년월일을 선택하십시오",myHealth:"개인건강상태신고",heHealth:"타인의 건강상태를 신고한다.",checkId:"올바른 주민등록 번호를 입력하십시오.",checkHmHid:"정확한 증서 번호를 입력하십시오",checRequired:"기타 증상을 입력하십시오",symptomDscrLength:"기타 증상서술은 한자 10자이내로 함",checkBirthday:"정확한 생년월일을 입력하십시오",requiredmonthTraveling:"최근 1개월내 동선을 선택하십시오",selectSymptoms:"증상을 선택하십시오",loding:"로딩 중...",serverCrowded:"서버접속이 안됨",portrait:"타인 의 두상",information:"이미지 정보",uploadAvatar:"다른 사람 프로필 사진 올 려 주세요",completed:"업로드 완료",upload:"업로드",selectRegion:{serverCrowded:"서버접속이 안됨",unableLocation:"위치정보 없음",firstAuthorize:"먼저 당전 지리위치정보를 확인을 허락하십시오.",street:"가도(街道)",area:"구(區)",community:"거주단지(社區)"},sexMap:{"男":"남","女":"녀"},nationRange:[{name:"중국 대륙",value:1},{name:"중국홍콩마카오대만지역",value:2},{name:"해외",value:3}],domicilePlaceRange:[{name:"광저우시",value:1},{name:"광둥성내 기타 지역",value:2},{name:"후베이",value:3},{name:"기타",value:4}],cardTypeRange:[{name:"신분증",value:1},{name:"장교증",value:4},{name:"여권",value:3},{name:"홍콩마카오주민대륙통행증",value:8},{name:"타이완주민대륙통행증",value:9},{name:"홍콩마카오주민거주증",value:6},{name:"타이완주민거주증",value:7},{name:"출입국통행증",value:11}],residentFlagItems:[{name:"네,광저우에 반년이상 거주하였습니다.",value:1},{name:"아니요,광저우에 임시 방문중입니다.",value:2}],residentConditionItems:[{name:"광저우에 연속 3개월이상 체류중입니다.",value:1},{name:"광저우에 방문/복귀한지 14일 넘습니다.",value:2},{name:"광저우에 방문/복귀한지 14일 미만입니다.",value:3},{name:"지금 다른 지역에 체류중입니다.",value:4}],travelRegionClassItems:[{name:"우한시",value:1},{name:"후베이(우한제외)",value:2},{name:"원저우시",value:6},{name:"중국 대륙의 기타 성",value:4},{name:"중국홍콩마카오대만지역",value:3},{name:"한국",value:7},{name:"일본",value:8},{name:"기타 국가",value:5}],personTypeItems:[{name:"멤버타입을 선택하십시오",value:1,desc:"2020-1-1이전부터 광저우에 줄곧 거주한 자"},{name:"광저우를 떠난적 없는 시민",value:2,desc:"2020-1-1에서 2020-1-15사이 광저우에 복귀한 거주민"},{name:"1월초에 광저우로 복귀한 시민",value:3,desc:"2020-1-1에서 2020-1-15사이 다른 지역에서 광저우를 일시 방문 온 자"},{name:"1월초에 광저우로 방문온 사람",value:4,desc:"2020-1-15이후 광저우에 복귀한 거주민"},{name:"1월중순에 광저우로 복귀한 시민",value:5,desc:"2020-1-15이후 다른 지역에서 광저우를 일시 방문 온 자"},{name:"1월중순에 광저우로 방문온 사람",value:6,desc:"于2020-1-15后来穗外地临时人员。"},{name:"자택 격리 중임 ",value:11},{name:"집중 격리 중임 ",value:12}],symptomItems:[{name:"자기판단에 정상임",value:1},{name:"발열 37.3 ℃이하",value:11},{name:"발열 37.3 ℃(포함)이상",value:12},{name:"기침",value:13},{name:"무력감",value:14},{name:"기타 증상",value:15}],socialContactItems:[{name:"최근 14일내, 후베이 여행이력자와 접촉",value:1,desc:"최근 후베이 여행이력자란,14일내 후베이지역에서 왔거나 후베이지역을 방문한 자"},{name:"14일내에 감염환자와 접촉이 있었다고 생각하는 자",value:2,desc:"최근 감염환자와 접촉,예하면 공중교통도구에 같이 승차한 경우"}],healthStateItems:[{name:"정상임",value:1,desc:"자기판단에 건강하고 몸이 아픈데 없음"},{name:"자택건강서비스",value:2,desc:"광저우에 고정 거주지가 있어 자택감시중"},{name:"집중건강서비스",value:3,desc:"광저우에 고정된 거주지가 없고 호텔등 장소에 집중건강감시중"},{name:"집중의학관찰",value:4,desc:"의료기관에서 관찰중"}],selfFormRules:{symptomDscr:[{type:"symptomDscrLength",message:"기타 증상 서술은 한자로 10자이내로 함."}],username:[{type:"required",message:"성함을 입력하십시요"}],personType:[{type:"required",message:"사람 종류를 고르십시오"}],phone:[{type:"required",message:"중국대륙의 핸드폰번호를 입력하십시오"},{type:"mobile",message:"중국대륙의 핸드폰번호를 입력하십시오"}],identityType:[{type:"required",message:"증서 타입을 선택하십시오"}],identity:[{type:"required",message:"증서 번호를 입력하십시오"},{type:"id",message:"올바른 주민등록 번호를 입력하십시오."}],birthday:[{type:"required",message:"정확한 생년월일을 선택하십시오"},{type:"birthdayLength",message:"정확한 생년월일을 선택하십시오"}],street:[{type:"required",message:"주거지 주소를 선택하십시오"}],addr:[{type:"required",message:"상세한 주소를 입력하십시오"}],gender:[{type:"required",message:"성별을 선택하십시오"}],residentFlag:[{type:"required",message:"광저우에 거주하시는지 선택하십시오"}],residentCondition:[{type:"required",message:"최근 광저우에 계셨는지 선택하십시오"}],healthState:[{type:"required",message:"개인건강상태를 선택하십시오"}],avatarKey:[{type:"required",message:"이미지 선택"}]},sexRange:[{name:"남",value:"男"},{name:"녀",value:"女"}],PROVINCE_LISTS:[{name:"베이징",ename:"beijing"},{name:"톈진",ename:"tianjin"},{name:"상하이",ename:"shanghai"},{name:"충 칭",ename:"chongqing"},{name:"홍콩",ename:"xianggang"},{name:"마카오",ename:"aomen"},{name:"허베이",ename:"hebei"},{name:"산시(山西)",ename:"shanxi"},{name:"내몽골",ename:"neimenggu"},{name:"랴오닝",ename:"liaoning"},{name:"지린",ename:"jilin"},{name:"헤이룽쟝",ename:"heilongjiang"},{name:"장쑤",ename:"jiangsu"},{name:"저장",ename:"zhejiang"},{name:"안후이",ename:"anhui"},{name:"푸젠",ename:"fujian"},{name:"장시",ename:"jiangxi"},{name:"산둥",ename:"shandong"},{name:"허난",ename:"henan"},{name:"후베이",ename:"hubei"},{name:"후난",ename:"hunan"},{name:"광둥",ename:"guangdong"},{name:"광시",ename:"guangxi"},{name:"하이난",ename:"hainan"},{name:"쓰촨",ename:"sichuan"},{name:"구이저우",ename:"guizhou"},{name:"윈난",ename:"yunnan"},{name:"시짱",ename:"xizang"},{name:"산시(陝西)",ename:"shanxi1"},{name:"간쑤",ename:"gansu"},{name:"칭하이",ename:"qinghai"},{name:"닝샤",ename:"ningxia"},{name:"신장",ename:"xinjiang"},{name:"타이완",ename:"taiwan"}],recentRegion_LISTS:[{name:"베이징",ename:"beijing"},{name:"톈진",ename:"tianjin"},{name:"상하이",ename:"shanghai"},{name:"충칭",ename:"chongqing"},{name:"허베이",ename:"hebei"},{name:"산시(山西)",ename:"shanxi"},{name:"내몽골",ename:"neimenggu"},{name:"랴오닝",ename:"liaoning"},{name:"지린",ename:"jilin"},{name:"헤이룽장",ename:"heilongjiang"},{name:"장쑤",ename:"jiangsu"},{name:"저장",ename:"zhejiang"},{name:"안후이",ename:"anhui"},{name:"푸젠",ename:"fujian"},{name:"장시",ename:"jiangxi"},{name:"산둥",ename:"shandong"},{name:"허난",ename:"henan"},{name:"후베이",ename:"hubei"},{name:"후안",ename:"hunan"},{name:"광둥",ename:"guangdong"},{name:"광시",ename:"guangxi"},{name:"하이난",ename:"hainan"},{name:"쓰촨",ename:"sichuan"},{name:"구이저우",ename:"guizhou"},{name:"윈난",ename:"yunnan"},{name:"시짱",ename:"xizang"},{name:"산시(陝西)",ename:"shanxi1"},{name:"간쑤",ename:"gansu"},{name:"칭하이",ename:"qinghai"},{name:"닝샤",ename:"ningxia"},{name:"신장",ename:"xinjiang"},{name:"홍콩",ename:"xianggang"},{name:"마카오",ename:"aomen"},{name:"타이완",ename:"taiwan"},{name:"해외",ename:"guowai"}]}}; 
 			}); 
		define("pages/report/msg/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{sunccessDesc:"您已经成功提交。",sunccess:"提交成功",home:"返回首页",sunccessSub:"您已经成功提交，可进行口罩预约。",sunccessSub2:"您已经成功提交，可立即生成穗康码。",subscribe:"立即预约",generate:"立即生成穗康码",title:"穗康码",sponsor:"广州市新冠肺炎防控指挥办主办",supportor:"腾讯云腾讯公司提供技术支持"},en:{sunccessDesc:" You have successfully submitted.",sunccess:"Submitted successfully",home:"Return to homepage",sunccessSub:"You have successfully submitted your mask appointment.",sunccessSub2:"You have successfully submitted, you can immediately generate Suikang code。",subscribe:"Immediately",generate:"Generate Suikang Code",title:"Suikang code",sponsor:"Guangzhou Epidemic Prevention and Control Office",supportor:"Technical support is provided by Tencent / Tencent Cloud."},ja:{sunccessDesc:"正常に送信されました",sunccess:"正常に送信",home:"トップページに戻ります ",sunccessSub:"マスクの予約を正常に送信しました",sunccessSub2:" 送信に成功すると、すぐに穗康コードを生成できます",subscribe:"立即预约",generate:"今すぐ穗康コードを生成",title:"穗康码",sponsor:"広州市防止制御事務室 ",supportor:"テンセント社/テンセントクラウドが技術サポートを提供します "},kr:{sunccessDesc:"성공적으로 전송했습니다.",sunccess:"전송 성공",home:"홈 페이지로 돌아가기",sunccessSub:"접수를 완료했으며, 마스크 예약이 가능합니다.",sunccessSub2:"올바른 접수를 거쳤으므로 지금 생성 가능한 스삭 코드로 만듭니다.",subscribe:"지금 예약",generate:"즉각 이삭코드 생성",title:"호콘코드",sponsor:"광주시방범관리판공실 주최",supportor:"텐센트 회사텐센트 클라우드 기술지원 제공"}}; 
 			}); 
		define("pages/stat/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{home:"首页",suiKang:"穗康",me:"我的",class:"zh-CN",language:"简体中文",SuiKang:"穗康",importantNotice:"重要提示",view:"查看",guangzhouDisease:"广州市新冠肺炎防控指挥办",tatleImg:"https://imgcache.gzonline.gov.cn/cos/images/banner_2020_2_12.png",shangbaoImg:"https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b.png",supportor:"腾讯公司/腾讯云提供技术支持",text:"提示一：2020年2月29日\r\n尊敬的用户：\r\n根据《广州市新型冠状病毒肺炎疫情防控指挥部关于继续推行“穗康码”加强社区和农村疫情防控工作的通知》要求，为做好健康监测等疫情防控工作，同时也方便您的生活出行，请通过“穗康”微信小程序如实申报个人健康和居住信息，及时申领“穗康码”。如申报信息不实，将会影响您的“穗康码”通行认证等使用功能。\r\n感谢您对疫情防控工作的支持与配合！",textTwo:"提示二：2020年2月3日\r\n尊敬的广州市民以及来穗的朋友：\r\n目前，正值防控新型肺炎的关键时期，请大家齐心协力、共克时艰，通过“穗康”微信小程序主动申报离（返）穗情况和健康状况，我们将对主动申报14天之内来自湖北或曾到过湖北（现已返穗）并有发热等相关症状（经排查核实的）的人员，落实“八个一”措施，在居家隔离住户门前张贴一份健康关怀提示，递送一份居家隔离告知书，确定一位社区对口联系服务人，配送一支体温计、一打口罩、一份体温检测表格、一支笔、一份宣传手册。\r\n感谢您的积极配合，祝您身体健康，家庭幸福！",iknow:"知道了",lastOne:"上一条",mySuiKang:"我的穗康码",mySuikangDesc:"社区互信共享，提高出行效率",healthCondition:"健康自查上报",healthConditionDesc:"普查所有市民健康状况，针对特定症状，社区将根据情况安排相关服务",reportClues:"疫情线索上报",reportCluesDesc:"如发现身边与新冠病毒疫情相关线索，请如实上报详细事件情况",DonationMaterials:"医疗物资捐赠",DonationMaterialsDesc:"医疗物资捐赠活动，收集捐赠线索报市红十字会后，统一调配使用",reservationForMasks:"口罩预约购买",reservationForMasksDesc:"为满足广州市民购买口罩的需要，提供线上预约快递到家的服务",SeekFreeMedical:"在线免费问诊",SeekFreeMedicalDesc:"广州多家医院与第三方医疗平台免费为广州市民提供在线疫情问诊服务",nextTips:"下一条",showModal_title:"未实名",showModal_content:"是否需要实名认证？",showModal_cancelText:"取消",showModal_confirmText:"确定",residents_number:"居民数量",members_number:"党员数量",floating_population:"流动人口",epidemic_situation:"疫情统计",deadline:"截止到",cases_today:"今日新增病例",confirmed_case:"确诊病例",cure_case:"治愈病例",death_cases:"死亡病例",epidemic_trend:"社区疫情趋势",confirmed_number:"确诊人数",yisi_case:"疑似病例",myHealth:{myHealthInfo:"上报我的健康信息",myHealthInfoDesc:"上报个人健康自查表",theHealth:"为他人上报健康状况",theHealthDesc:"为他人上报健康状态信息",reminder:"为他人上报健康情况前，请先为自己上报健康情况",isMyHealth:"Please report health status before reporting health conditions to others",iknow:"知道了",serverCrowded:"服务器拥挤，请稍后再试",unableLocation:"无法获取定位信息",firstAuthorize:"请先授权获取当前定位信息",street:"街道",area:"区",community:"社区"}},en:{home:"Home",suiKang:"Sui Kang",me:"Me",class:"en",language:"English",SuiKang:"Sui Kang",importantNotice:"Important notice",guangzhouDisease:"Guangzhou Disease Control and Prevention Office",tatleImg:"https://imgcache.gzonline.gov.cn/cos/images/banner_2020_2_12_en.png",shangbaoImg:"https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_en.png",supportor:"Tencent / Tencent Cloud provides technical support",view:"view",text:"Reminder 1: February 29, 2020\r\nDear users:\r\nAccording to the Notice of the Guangzhou Municipal Command Post for the Prevention and Control of COVID-19 Epidemic on Continuing to Promote the Suikang Code, and Strengthening Epidemic Prevention and Control in Communities and Rural Areas, please declare your personal health and residence information truthfully, and apply for a Suikang code timely through the Suikang WeChat Mini Program in order to facilitate health monitoring, and other aspects of epidemic prevention and control, and to make your life and traffic more convenient. If your declared information is untrue, access authentication and other functions of your Suikang code will be affected.\nThank you for supporting the epidemic prevention and control work!",textTwo:"Reminder 2: February 3, 2020\r\nDear Guangzhou residents and visitors:\r\nWe are now at a key stage COVID-19 prevention and control. Please declare your travel history and health status through the “Suikang” WeChat applet. We will take the following measures for anyone who a travel history to Hubei in the past 14 days, and has any symptoms such as fever (verified through screening): posting a healthcare reminder on the door of any household quarantined, sending a home quarantine notice, appointing a dedicated community service worker, distributing a thermometer, a dozen of face masks, a body temperature monitoring form, a pen and a brochure.\r\nThank you for your strong support. Wish you good health and your family happiness!",iknow:"I Know",lastOne:"Last",nextTips:"Next",mySuiKang:"My Sui Kang",mySuikangDesc:"Fight against the disease to ensure our safety",healthCondition:"Your Health Condition",healthConditionDesc:"Investigation of Guangzhou Residents’ Heath Condition. The local community will provide relevant services based on specific symptoms",reportClues:"Report Clues",reportCluesDesc:"If you find any clues related to COVID-19, please report the details according to the facts",DonationMaterials:"Donation of medical materials",DonationMaterialsDesc:"Medical materials donation activities, collect donation clues and report them to the Municipal Red Cross, then uniformly deploy and use them",showModal_title:"No real name",showModal_content:"Whether real-name authentication is required",showModal_cancelText:"cancel",showModal_confirmText:"determine",reservationForMasks:"Reservation for Masks",reservationForMasksDesc:"Online reservation service to meet your needs for masks.",SeekFreeMedical:"Seek Free Medical Help Online",SeekFreeMedicalDesc:"Multiple hospitals in Guangzhou and third-party medical platforms will provide free online services about COVID-19",residents_number:"Number of residents",members_number:"Number of members of the Communist Party of China",floating_population:"Floating population",epidemic_situation:"Epidemic statistics",deadline:"As of",cases_today:"Cases added today",confirmed_case:"Confirmed cases",cure_case:"Healed cases",death_cases:"Death cases",epidemic_trend:"Community epidemic trend",confirmed_number:"Number of confirmed patients",yisi_case:"Suspected cases",myHealth:{myHealthInfo:"Report health information",myHealthInfoDesc:"Report to the personal health self-examination form",theHealth:"Report the health status of others",theHealthDesc:"Report health status information for others",reminder:"reminder",isMyHealth:"Please report health status before reporting health conditions to others",iknow:"I Know",serverCrowded:"The server is crowded. Please try again later",unableLocation:"Unable to obtain location information",firstAuthorize:"Please first authorize access to the current location information",street:"Street",area:"Area",community:"Community"}},ja:{suiKang:"穂康",home:"トップページ",me:"私の",class:"ja",language:"わご",SuiKang:"穗康",importantNotice:"重要な通知",guangzhouDisease:"広州市防制御",view:"表示",supportor:"テンセント/テンセント雲は技術サポートを提供している",tatleImg:"https://imgcache.gzonline.gov.cn/cos/images/banner_2020_2_12_ja.png",shangbaoImg:"https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_jap.png",text:"提示1：2020年2月29日\r\nユーザーの皆様へ：\r\n《「穂康コード」の継続的推進によるコミュニティ及び農村疫病の予防抑制活動の強化に関する広州市新型コロナウイルス肺炎疫病の予防抑制指揮部の通知》の要求に基づき、健康監視などの疫病の予防抑制活動を確実に実施するとともに、あなたの生活や外出を便利にするためには、WeChatアプレット「穂康」で個人の健康と居住情報を事実通りに報告し、速やかに【穂康コード】を申請してください。報告情報が事実でない場合は、【穂康コード】通行認証などの利用機能に影響を与えます。\r\n疫病の予防抑制活動へのご支持とご協力をありがとうございます。",textTwo:"提示2：2020年2月3日\r\n広州市民と広州に来られる皆様へ：\r\n新型肺炎の予防抑制の正念場となっている今、皆さんが力を合わせて難関を切り抜けるため、WeChatアプレット「穂康」で広州出入りの状況と健康状態を自主的に報告するよう、お願い申し上げます。過去14日間に湖北省から広州へ来られ、または湖北省に行ったことがあり（現在広州に戻られた）、かつ、発熱などの症状（検出で確認済み）がある方に対して、「在宅隔離対象の自宅のドアに健康管理手引き1枚を貼り付け、自宅隔離通知書1部を交付し、コミュニティ担当者1人を指定し、温度計1本、マスク12枚、体温測定表1部、ペン1本、パンフレット1冊を配布する」という対策を実施します。\r\nあなたのご協力に感謝します。あなたとご家族の健康と幸せを心から祈っています。",iknow:"分かった",lastOne:"上一条",nextTips:"次の条",mySuiKang:"私の穂コード",mySuikangDesc:"コミュニティは互いに信頼して共有し、移動効率を向上させる",healthCondition:"健康診断",healthConditionDesc:"すべての市民の健康状況を調査し、特定の症状に対して、コミュニティは状況に応じて関連サービスを手配します",reportClues:"疫病の情報を報告する",reportCluesDesc:"新しいクラウンウイルスの流行に関連する手がかりを発見したら、詳細を報告してください",DonationMaterials:"医療物資の寄付",DonationMaterialsDesc:"医療物資の寄付活動，寄付の手がかりを集めて市赤十字社に報告した後，統一的に融通して使用する",reservationForMasks:"マスク予約購入",reservationForMasksDesc:"広州市民がマスク購入の需要を満たすため、オンライン予約宅配便のサービスを提供しています",SeekFreeMedical:"オンライン無料問診",SeekFreeMedicalDesc:"広州の多くの病院と第三者医療プラットフォームは無料で広州市民にオンライン疫病の問診サービスを提供する",showModal_title:"非実名",showModal_content:"実名認証が必要かどうか",showModal_cancelText:"とりけし",showModal_confirmText:"確定",residents_number:"住民数",members_number:"党員数",floating_population:"流動人口",epidemic_situation:"感染症集計",deadline:"締切",cases_today:"本日新規感染者",confirmed_case:"確定感染者数",cure_case:"治癒数",death_cases:"死亡数",epidemic_trend:"コミュニティ感染症トレンド",confirmed_number:"確定感染者数",yisi_case:"疑似感染者数",myHealth:{myHealthInfo:"健康情報を報告する",myHealthInfoDesc:"健康診断表に報告する",theHealth:"健康を報告するために",theHealthDesc:"健康状態情報を他人に報告する",reminder:"温かいヒント",isMyHealth:"人のために健康状態を報告する前に，まず自分のために健康状態を報告してください",iknow:"分かった",serverCrowded:"サーバーが混雑しておりますので、後ほどお試しください",unableLocation:"位置情報が取得できない",firstAuthorize:"現在位置情報の取得を先に許可してください",street:"街道",area:"エリア",community:"コミュニティ"}},kr:{suiKang:"호강",home:"첫 페이지",me:"내",class:"kr",SuiKang:"호강",language:"한국",importantNotice:"중요한 고지 사항",guangzhouDisease:"광주시가 통제하여 처리하다.",view:"살펴보다",supportor:"정보기술지원:텐센트/텐센트클라우드",tatleImg:"https://imgcache.gzonline.gov.cn/cos/images/banner_2020_2_12_kr.png",shangbaoImg:"https://imgcache.gzonline.gov.cn/cos/images/shangbao_dbc3d59b_kr.png",text:"힌트1: 2020년 2월 29일\r\n존경하는 사용자：\r\n“광저우시 코로나바이러스 전염병 발생상황 예방지휘부의“쑤이캉 코드” 지속 보급, 주민센터 및 농촌 전염병 발생상황 예방 제어작업 강화에 관한 통보”의 요구에 근거하여 다음과 같이 규정합니다.\n건강 감측등 전염병 발생상황에 대한 예방 제어작업을 잘 하고 동시에 당신의 출입 편리를 보장해 주기 위하여 “쑤이캉 코드” 위챗 애플릿을 통해 개인 건강 및 거주 정보를 여실히 신고하여 “쑤이캉 코드”를 제때에 수령하기 바랍니다. 신고한 정보가 부실할 경우 당신의 “쑤이캉 코드” 의 통행인증 등 사용 기능에 양향을 줄 수 있습니다.\r\n전염병 발생상황의 예방 제어 작업에 대한 지지와 협조에 감사의 말씀 드립니다.",textTwo:'힌트 2: 2020년 2월 3일 \r\n존경하는 광저우 시민 및 방문 친구 여러분:\r\n당전 전염병 예방통제의 관건시기에 즈음하여 우리 모두 일심협력으로 어려운 시기를 이겨나갑시다.여러분은 "수이캉"위챗미니프로그램으로 외출(복귀)동선과 건강정보를 스스로 신고하시면 우리는 14일내 후베이성에서 왔거나 후베이성을 방문(현재는 복귀함)했었고 또 발열 등 관련 증상(역학조사에서 확인된)이 있는 분에 한해서 "8개1"의 조치를 실시합니다.즉,자택격리 주택 문전에 건강배려제시1장,자택격리고지서1장,전담연락요원1명,체온기1대,마스크1다스(12매),체온검사표격1장,연필1대,안내서1부를 전달합니다.여러분의 적극적인 호응에 감사드립니다.\r\n 당신의 적극적인 협조에 감사 드리며 몸 건강하시고 가족 행복하세요!',iknow:"알았어요",lastOne:"이전트랙",mySuiKang:"내 스파이크 코드",mySuikangDesc:"지역사회 상호 신뢰 공유, 이동 효율 향상",healthCondition:"건강을 스스로 조사하여 신고하다",healthConditionDesc:"모든 시민 건강상태를 조사하여 특정 증상에 대해 커뮤니티에서 상황에 따라 관련 서비스를 마련할 예정",reportClues:"전염병의 단서를 보고하다",reportCluesDesc:"신 코로나 바이러스와 관련된 단서가 발견되면, 자세한 사건 상황을 사실대로 신고해 주시기 바랍니다",DonationMaterials:"의료물자 기부",DonationMaterialsDesc:"의료물자 기부활동, 기부 단서 모아 적십자사 신고 후 일괄배급해 사용",reservationForMasks:"마스크 예약 구매",reservationForMasksDesc:"광주시민의 마스크 구매 필요성 충족을 위해 온·오프라인으로 택배를 예약해 집까지 예약해주는 서비스 제공",SeekFreeMedical:"온라인 무료 문진",SeekFreeMedicalDesc:"광저우 여러 병원과 제3자 의료 플랫폼, 광주시민에 온라인 전염병 문진 서비스 무료 제공",nextTips:"다음 줄",showModal_title:"실명 인증 없음",showModal_content:"실명 인증 필요한지?",showModal_cancelText:"취소",showModal_confirmText:"확정",residents_number:"거주민수",members_number:"당원수",floating_population:"유동인구",epidemic_situation:"방역집계",deadline:"지금까지",cases_today:"금일 추가 환자",confirmed_case:"확진환자수",cure_case:"치유환자수",death_cases:"사망환자",epidemic_trend:"주거단지방역추이",confirmed_number:"환진환자수",yisi_case:"의심환자수",myHealth:{myHealthInfo:"건강 정보를 에스컬레이션하다",myHealthInfoDesc:"개인 건강 자체 조사표를 신고하다",theHealth:"다른 사람을 위해 건강 상태를 신고하다",theHealthDesc:"타인을 위해 건강 상태 정보를 신고하다",reminder:"따뜻한 팁",isMyHealth:"다른 사람을 위해 건강 상태를 신고하기 전에, 먼저 자신을 위해 건강 상태를 신고해 주세요",language:"한국",serverCrowded:"서버가 혼잡합니다. 나중에 다시 시도하십시오",unableLocation:"위치 정보를 찾을 수 없음",firstAuthorize:"현재 위치 정보를 받을 수 있는 권한을 부여하십시오.",street:"가도",area:"구",community:"커뮤니티"}}}; 
 			}); 
		define("services/car-code/bus-code-driver.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config;e.wxp;exports.saveCheckPointRegister=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/saveCheckPointRegister",method:"POST",data:e})},exports.updateTravelswitchState=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/updateTravelswitchState",method:"POST",data:e})},exports.getTrafficgateInfo=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getTrafficgateInfo",method:"GET",data:e})},exports.getTrafficgateList=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getTrafficgateList",method:"GET",data:e})},exports.getCheckPointRegister=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getCheckPointRegister",method:"GET",data:e})},exports.getRegisterPassengersListCount=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getRegisterPassengersListCount",method:"GET",data:e})},exports.getPointRegisterPassengersList=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getPointRegisterPassengersList",method:"GET",data:e})},exports.deletePassengerById=function(e){return t({url:r[r.env].carCodePath+"/trafficgate/checkpointpassenger/v1/deletePassengerById",method:"POST",data:e})},exports.deletCheckPointRegister=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/deletCheckPointRegister/"+e,method:"DELETE",data:e})},exports.getBusDriverQr=function(e){return t({url:r[r.env].carCodePath+"/checkpointpassenger/v1/busDriverQr",method:"GET",data:e})}; 
 			}); 
		define("services/car-code/code-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config,n=r[r.env].carCodePath;exports.getTrafficgateInfo=function(e){return t({url:n+"/transportRegister/v1/getCheckPointRegisterInfo",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:e})},exports.getPointPassengerList=function(e){return t({url:n+"/transportRegister/v1/getCheckPointPassagerList",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:e})},exports.getPassengersfromLastWeek=function(e){return t({url:n+"/transportRegister/v1/getPassengersfromLastWeek",method:"POST",data:e})}; 
 			}); 
		define("services/car-code/code-edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config;e.wxp;exports.saveOrUpdate=function(e){return t({url:r[r.env].carCodePath+"/transportRegister/v1/saveOrUpdate",method:"POST",data:e})},exports.getCheckPointPassagerList=function(e){return t({url:r[r.env].carCodePath+"/transportRegister/v1/getCheckPointPassagerList",method:"POST",data:e})},exports.getPassengersfromLastWeek=function(e){return t({url:r[r.env].carCodePath+"/transportRegister/v1/getPassengersfromLastWeek",method:"POST",data:e})},exports.getCurrentUserRegisterList=function(e){return t({url:r[r.env].carCodePath+"/transportRegister/v1/getCurrentUserRegisterList",method:"Get",data:e})},exports.getCheckPointRegister=function(e){return t({url:r[r.env].carCodePath+"/busDriver/v1/getCheckPointRegister?key="+e,method:"GET",data:e})},exports.getUserHealthInfo=function(e){return t({url:r[r.env].carCodePath+NaN+e,method:"GET",data:e})},exports.getRelationStateByUser=function(e){return t({url:r[r.env].carCodePath+"/qrcCode/v1/stateByUser/"+e.uid,method:"GET"})}; 
 			}); 
		define("services/car-code/main-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config,o=(e.wxp,r[r.env].carCodePath,r[r.env].healthCodePath);exports.getQrCode=function(e){return t({url:o+"/qrcCode/v1/stateByUser/"+e.uid,method:"GET"})}; 
 			}); 
		define("services/car-code/passenger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config,n=(e.wxp,r[r.env].carCodePath),s=r[r.env].healthCodePath;exports.getTravelswitchState=function(e){return t({url:n+"/busDriver/v1/verificationTravelswitchState",method:"GET",data:e})},exports.deletePassengerById=function(e){return t({url:n+"/trafficgate/checkpointpassenger/v1/deletePassengerById",method:"GET",data:e})},exports.SavePointPassenger=function(e){return t({url:n+"/trafficgate/checkpointpassenger/v1/SavePointPassenger",method:"POST",data:e})},exports.getPointPassengerList=function(e){return t({url:n+"/trafficgate/checkpointpassenger/v1/getPointPassengerList",method:"POST",data:e})},exports.getPointPassengerCount=function(e){return t({url:n+"trafficgate/checkpointpassenger/v1/getPointPassengerCount",method:"POST",data:e})},exports.passengerPushNew=function(e){return t({url:n+"/trafficgate/checkpointpassenger/v1/PassengerPushNew",method:"GET",data:e})},exports.getTravelInfoById=function(e){return t({url:n+"/busDriver/v1/getTrafficgateInfo",method:"GET",data:e})},exports.getQRByRegister=function(e){return t({url:n+"/busDriver/v1/getCheckPointRegister",method:"GET",data:e})},exports.getTrafficgateList=function(e){return t({url:n+"/busDriver/v1/getTrafficgateList",method:"GET",data:e})},exports.getCheckPointRegisterByCarnumber=function(e){return t({url:n+"/busDriver/v1/getCheckPointRegisterByCarnumber",method:"GET",data:e})},exports.getUserHealthInfo=function(e){return t({url:s+"/qrcCode/v1/infoByUser/"+e,method:"GET",data:e})},exports.getPassengersfromLastWeek=function(e){return t({url:n+"/transportRegister/v1/getPassengersfromLastWeek",method:"POST"})},exports.getqrcCodefromLastWeek=function(e){return t({url:s+"/qrcCode/v1/reportUserList",method:"GET"})},exports.getPointPassengerState=function(){return t({url:n+"/trafficgate/checkpointpassenger/v1/getPointPassengerState",method:"GET"})}; 
 			}); 
		define("services/car-code/pub-tran.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config;e.wxp,e.Anim,e.userStore;exports.saveOrUpdate=function(e){return t({url:r[r.env].carCodePath+"/transportRegister/v1/saveOrUpdate",method:"POST",data:e})},exports.getRelationStateByUser=function(e){return t({url:r[r.env].carCodePath+"/qrcCode/v1/stateByUser/"+e.uid,method:"GET"})}; 
 			}); 
		define("services/car-code/traffic-police.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return null==e?"":e}var t=getApp(),r=t.request,c=t.config,i=(t.wxp,c[c.env].carCodePath);exports.getInspection=function(t,c,n){return r({url:i+"/trafficPolice/v1/inspection?registerId="+e(t)+"&uid="+e(c)+"&gridPointId="+e(n),method:"GET"})},exports.getPassenger=function(t,c){return r({url:i+"/trafficPolice/v1/passenger?qrcId="+e(t)+"&registerId="+e(c),method:"GET"})},exports.policeCheck=function(e){return r({url:i+"/trafficPolice/v1/check_point_police_check",method:"POST",data:e})}; 
 			}); 
		define("services/feedback.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),o=e.request,t=e.config,n=e.utils;exports.goFeedback=function(e,i){o({url:t[t.env].buyDomain+"/aisee/urlData",method:"GET",data:{userid:i,type:e}}).then(function(e){wx.hideLoading(),wx.navigateTo({url:n.urlJoinParams("/pages/web-view/index",{webUrl:encodeURIComponent("https://h5.aisee.qq.com/index?"+e),title:"帮助与反馈"})}),console.log("res",e)}).catch(function(e){wx.showModal({title:"温馨提示",content:"服务器拥挤，请稍后再试",showCancel:!1}),wx.hideLoading(),console.log("err",e)})}; 
 			}); 
		define("services/health-code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),r=e.request,t=e.config,o=(e.wxp,t[t.env].healthCodePath);exports.canSaveUserList=function(e){return r({url:o+"/qrcCodeRelation/v1/canSaveUserList",method:"GET",data:e})},exports.getCodeUserList=function(e){return r({url:o+"/qrcCodeRelation/v1/userList",method:"GET",data:e})},exports.getPassRegisterList=function(e){return r({url:o+"/passRecord/v1/list",method:"GET",data:e})},exports.getRelationStateByUser=function(e){return r({url:o+"/qrcCode/v1/relationStateByUser/"+e.uid+"?verCodes="+e.verCodes+"&language="+e.language,method:"GET"})},exports.savePssRegisterList=function(e){return r({url:"/passRegister/v1/save",method:"POST",data:e})},exports.saveCodeUser=function(e){return r({url:o+"/qrcCodeRelation/v1/save",method:"POST",data:e})},exports.removeCodeUser=function(e){return r({url:o+"/qrcCodeRelation/v1/remove/"+e,method:"delete"})},exports.getGridPoint=function(e){return r({url:o+"/grid-operator/v1/points/"+e.opearatorId,method:"GET"})},exports.removeGridPoint=function(e){return r({url:o+"/grid-operator/v1/relieve",method:"POST",data:e})},exports.addGridPoint=function(e){return r({url:o+"/grid-operator/v1/increase",method:"POST",data:e})},exports.passRegisterDays=function(e){return r({url:o+"/passRegister/v1/days",method:"GET"})},exports.passRegisterList=function(e){return r({url:o+"/passRecord/v1/list?qrcId="+e+"&time="+(new Date).getTime(),method:"GET"})},exports.passRegisterSave=function(e){return r({url:o+"/passRecord/v1/save",method:"POST",data:e})},exports.lastUserStatus=function(e){return r({url:o+"/helper/v1/getReportByUid?uid="+e,method:"GET"})},exports.infoByCodeId=function(e){return r({url:o+"/qrcCode/v1/infoByCodeId/"+e,method:"GET"})},exports.getUserInfo=function(e){return r({url:o+"/helper/v1/getUserInfo?uid="+e,method:"GET"})},exports.getloginuserinfo=function(e){return r({url:"/wll/account/getloginuserinfo",method:"GET"})},exports.saveManagePerson=function(e){return r({url:o+"/grid-manage/v1/authorize",method:"POST",data:e})},exports.deleteManagePerson=function(e){return r({url:o+"/grid-manage/v1/relieve",method:"POST",data:e})},exports.getManagePerson=function(e){return r({url:o+"/grid-manage/v1/operators/"+e,method:"GET"})},exports.getManageOperators=function(e){return r({url:o+"/grid-manage/v1/operators/"+e,method:"GET"})},exports.updateGridMonitor=function(e){return r({url:o+"/grid-monitor/v1",method:"POST",data:e})},exports.getGridMonitor=function(e){return r({url:o+"/grid-monitor/v1/"+e,method:"GET"})},exports.saveGridMonitor=function(e){return r({url:o+"/grid-monitor/v1/increase",method:"POST",data:e})},exports.getOperatorID=function(e){return r({url:o+"/grid-operator/v1/"+e,method:"GET"})},exports.getGridMonitorList=function(e){return r({url:o+"/grid-operator/v1/points/"+e,method:"GET"})},exports.getGridMonitorPoints=function(e){return r({url:o+"/grid-monitor/v1/points/"+e,method:"GET"})},exports.tabGrid=function(e){return r({url:o+"/grid-operator/v1/choose",method:"POST",data:e})},exports.gridManageChoose=function(e){return r({url:o+"/grid-manage/v1/choose",method:"POST",data:e})},exports.delGridMonitors=function(e){return r({url:o+"/grid-monitor/v1/relieve",method:"POST",data:e})},exports.getAdmanageId=function(e){return r({url:o+"/grid-manage/v1/"+e,method:"GET"})},exports.getAdmanagePoints=function(e){return r({url:o+"/grid-monitor/v1/points/"+e,method:"GET"})},exports.getOperatorId=function(e){return r({url:o+"/grid-operator/v1/"+e,method:"GET"})},exports.delGridMonitor=function(e){return r({url:o+"/authentication/realname-aut/v1/"+e,method:"GET"})},exports.realnameUser=function(e){return new Promise(function(t,o){r({url:"/authentication/realname-aut/v1/"+e,method:"GET"}).then(function(e){"zh-CN"!==wx.T.locale&&(e.isAut=1),t(e)}).catch(function(e){o(e)})})},exports.wxAut=function(e,t){return r({url:"/authentication/realnameWxAut/v1/wxAut?authCode="+e,method:"POST",data:t})},exports.realnameSave=function(e){return r({url:"/authentication/realname-aut/v1",method:"POST",data:e})},exports.authindexPara=function(e){return r({url:"/authentication/realnameWxAut/v1/authindexPara?openId="+e,method:"GET"})},exports.getUserCodeId=function(e){return r({url:o+"/qrcCode/v1/findCodeIdByInfo",method:"GET",data:e})},exports.verifyVerCode=function(e){return r({url:o+"/qrcCode/v1/verifyVerCode/"+e,method:"GET"})},exports.getPassQrcCode=function(e,t,n){return r({url:o+"/grid-operator/v1/qrcCode?operatorId="+e+"&pointId="+t+"&passRole="+n,method:"GET"})},exports.relationUserList=function(e){return r({url:o+"/qrcCodeRelation/v1/relationUserList",method:"GET",data:e})},exports.findInfoByKey=function(e){return r({url:o+"/grid-operator/v1/findInfoByKey?key="+e,method:"GET"})},exports.relationUserSave=function(e){return r({url:o+"/communityPassReg/v1/save",method:"POST",data:e})},exports.refreshloginuserinfo=function(){return r({url:"/wll/account/refreshloginuserinfo",method:"GET"})},exports.companies=function(){return r({url:"/resumption/manager/companies",method:"GET"})},exports.applies=function(e){return r({url:"/resumption/manager/get/applies",method:"POST",data:e})},exports.createCodeByKey=function(e,t,n){return r({url:o+"/grid-operator/v1/createCodeByKey?key="+e+"&page="+t+"&qrCodeKey="+n,method:"GET"})}; 
 			}); 
		define("services/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.request;t.config;exports.testAPI=function(){return e({url:"https://www.qq.com"})}; 
 			}); 
		define("services/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){return 0===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:2)?Promise.reject(null):new Promise(function(r,o){return i.request(e({},t,{url:t.url,header:e({},t.header,{appid:n}),timeout:t.timeout||15e3})).then(function(t){t.statusCode;var e=t.data;return console.log("map data:",e),e&&0===e.status?r(e):o(e)})})}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},r=getApp(),o=r.config,i=r.wxp,n=require("../config/index").appid,a=(o[o.env].buyDomain,"CS3BZ-HM46F-ZJKJJ-NPNPP-YNN4J-WHFQP");exports.search=function(e){return t({url:"https://apis.map.qq.com/ws/place/v1/search?keyword="+e.keyword+"&boundary=nearby("+e.latitude+","+e.longitude+",1000)&key="+a,method:"GET"})},exports.geocoder=function(e){return t({url:"https://apis.map.qq.com/ws/geocoder/v1/?location="+e.latitude+","+e.longitude+"&get_poi=1&poi_options=radius=500&key="+a,method:"GET"})},exports.districtCode=function(e){return t({url:"https://apis.map.qq.com/ws/district/v1/search?keyword="+e.keyword+"&key="+a,method:"GET"})},exports.district=function(e){return t({url:"https://apis.map.qq.com/ws/district/v1/getchildren?id="+e.id+"&key="+a,method:"GET"})}; 
 			}); 
		define("services/mutual-sweep.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.request,r=e.config,o=(e.wxp,r[r.env].healthCodePath);exports.relationUserList=function(e){return t({url:o+"/qrcCodeRelation/v1/relationUserList",method:"GET",data:e})}; 
 			}); 
		define("services/region.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=r[r.env].regionPath;return console.log(),"zh-CN"!==wx.T.locale&&(e=e.replace(".json","_"+wx.T.locale+".json")),o.request({url:""+r.cdnDomain+e+"?t="+Date.now()}).then(function(e){var n=e.data[0].regionList[0].regionList;return getApp().currentRegionSource=n,n})}var n=getApp(),r=(n.request,n.config),o=n.wxp;exports.getRegionData=function(n,r){r=r||getApp().currentRegionSource;var o=Promise.resolve(r),t=wx.getStorageSync("languageChange")||!1;return console.log("languageChange:",t),r&&!t||(o=e(),wx.removeStorageSync("languageChange")),o.then(function(e){var r=e.find(function(e){return e.regionCode===n});return r&&r.regionList||[]}),o}; 
 			}); 
		define("services/report.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp().request;exports.nCovSave=function(r){return e({url:"/report/pneumonia/save",method:"POST",data:r})},exports.companySave=function(r){return e({url:"/report/enterprise/save",method:"POST",data:r})},exports.hasReported=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=wx.getStorageSync("is_reported");return t?Promise.resolve(t):e({url:"/report/his/pneumonia",method:"GET",data:r}).then(function(e){return wx.setStorageSync("is_reported",!!e),!!e})}; 
 			}); 
		define("store/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var n=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}(),o=require("./wllConfigMock");module.exports=function(t){console.log("app",t);var i=t.Anim,r=(t.request,t.config),l=t.wxp,u=t.storage;return(0,i.wedux.observe)(new(function(){function i(){e(this,i),this.initConfigInfo()}return n(i,[{key:"initConfigInfo",value:function(){this.wllConfig={}}},{key:"requestConfig",value:function(){var e=this;return l.request({url:r.cdnDomain+r[r.env].wllConfigPath+"?t="+Date.now(),method:"GET"}).then(function(n){return e.wllConfig=n.data,"dev"===r.env&&(e.wllConfig=o),t.buyType=e.wllConfig.buy_type,u.setStorageSync("__wll_config__",e.wllConfig,r.wllConfigCacheTime),e.wllConfig})}},{key:"fetchWllConfig",value:function(){var e=u.getStorageSync("__wll_config__"),n=Promise.resolve(e);return e?(this.wllConfig=e,t.buyType=e.buy_type):n=this.requestConfig(),n}},{key:"weGetDecodeURIComponent",value:function(e){decodeURIComponent(e.scene);wx.request({url:"",data:{},header:{"content-type":"application/json"},success:function(e){console.log(e.data)}})}}]),i}()),"config")}; 
 			}); 
		define("store/mine.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();module.exports=function(i){console.log("app",i);var o=i.Anim,n=i.request,r=i.dayjs;return(0,o.wedux.observe)(new(function(){function i(){t(this,i),this.initMineInfo()}return e(i,[{key:"initMineInfo",value:function(){this.reportList=[],this.todoReportList=[],this.doingReportList=[],this.doneReportList=[],this.checkList=[],this.todoCheckList=[],this.doingCheckList=[],this.doneCheckList=[]}},{key:"filterData",value:function(t){t.forEach(function(t){t.createTime=r(t.createTime).format("YYYY/MM/DD HH:mm")})}},{key:"fetchAffairList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{order:"DESC",pageNo:1,pageSize:100,status:0},i=e.status;return wx.showLoading({title:"努力加载中..."}),n({url:"/usercenter/affair/list",method:"POST",data:e}).then(function(e){wx.hideLoading(),console.log("Affair",e);var o=e.pageData;return t.filterData(o),0==+i&&(t.todoAffairList=o),1==+i&&(t.doingAffairList=o),2==+i&&(t.doneAffairList=o),o}).catch(function(t){console.error(t),wx.hideLoading()})}},{key:"fetchCheckSelfList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{clueType:0,order:"DESC",pageNo:1,pageSize:100,status:0},i=e.status;return wx.showLoading({title:"努力加载中..."}),n({url:"/usercenter/report/getPneumoniaList",method:"POST",data:e}).then(function(e){wx.hideLoading(),console.log("getCheckSelfInfo",e);var o=e.pageData;return t.filterData(o),0==+i&&(t.todoCheckList=o),1==+i&&(t.doingCheckList=o),2==+i&&(t.doneCheckList=o),o}).catch(function(t){console.error(t),wx.hideLoading()})}},{key:"fetchReportList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{clueType:1,order:"DESC",pageNo:1,pageSize:100,status:0},i=e.status;return wx.showLoading({title:"努力加载中..."}),n({url:"/usercenter/report/getPneumoniaList",method:"POST",data:e}).then(function(e){wx.hideLoading(),console.log("getReportList",e);var o=e.pageData;return t.filterData(o),0==+i&&(t.todoReportList=o),1==+i&&(t.doingReportList=o),2==+i&&(t.doneReportList=o),o}).catch(function(t){console.error(t),wx.hideLoading()})}}]),i}()),"mine")}; 
 			}); 
		define("store/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},o=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}();module.exports=function(t){var r=t.Anim,i=t.request,s=t.config,u=t.Event,a=r.wedux.observe,l=(s.domain,s.appid,require("../utils/locales.js"));return a(new(function(){function t(){e(this,t),this.initUserInfo()}return o(t,[{key:"initUserInfo",value:function(){this.userInfo={isAuth:!1,phone:"",role:[],isLeader:!1,address:"",name:"",uid:""}}},{key:"fetchUserInfo",value:function(){var e=this;console.log("langIndex:",wx.getStorageSync("langIndex"));var o=wx.getStorageSync("langIndex")||0,t=Object.keys(l),r=l[""+t[o]];return wx.showLoading({title:r.showLoading,mask:!0}),i({url:"/wll/account/getloginuserinfo"}).then(function(o){return wx.hideLoading(),console.log("res",o),e.userInfo=n({},o,{isAuth:!!o.phone,isLeader:o.role&&o.role.includes("LEADER"),isVolunteer:o.role&&o.role.includes("ZHIYUAN")}),u.dispatch("fetchUserInfo",e.userInfo),e.userInfo}).catch(function(e){wx.hideLoading(),console.error(e)})}},{key:"updateUserInfo",value:function(e){this.userInfo=e}},{key:"login",value:function(){console.log("login")}},{key:"checkAuth",value:function(){if(!this.userInfo.isAuth){var e=wx.getStorageSync("langIndex")||0,n=Object.keys(l),o=l[""+n[e]];return wx.showModal({title:o.showModal_title_tips,content:o.showModal_content_login,showCancel:!1,confirmText:o.showModal_confirmText,success:function(){wx.navigateTo({url:"/pages/mine/login/index"})}}),!1}return!0}}]),t}()),"user")}; 
 			}); 
		define("store/wllConfigMock.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={buy_type:"lot",feedback_open:1,buy_feedback_open:1,personal_center_info:{is_open:1,tips:"结果将在每晚8点提交预约申请后显示，可能稍有延迟，请耐心等候。"},home_notice:{is_open:1,title:"重要提示",text:"1111尊敬的广州市民以及来穗的朋友：目前，正值防控新型肺炎的关键时期，请大家齐心协力、共克时艰，通过“穗康”微信小程序主动申报离（返）穗情况和健康状况，我们将对主动申报14天之内来自湖北或曾到过湖北（现已返穗）并有发热等相关症状（经排查核实的）的人员，配备“五个一”（一支温度计、一打口罩、一个表格、一支笔、一份宣传册）。感谢您的积极配合，祝您身体健康，家庭幸福！",duration:60},buy_flow_info:{is_open:1,start_time:"20:00",end_time:"24:00",oveTips:"今日预约还未开始，每晚8点开放，请耐心等候",sellOutTips:"别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",closeTips:"系统异常，请稍后再试。",isNeedReport:1,needReportTips:"为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",probability:20,tmplIds:["kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA"],is_need_subscribe_message:1,interval_day:0,buy_explain:{en:{agree:"I have read the instructions on face mask purchase.",buttonText:"I want to make a reservation.",navTitle:"Reservation for face mask purchase",title:"Instructions on reservation for face mask purchase",desc:["In order that people in Guangzhou purchase face masks conveniently, the Office of the Guangzhou Municipal Command Post for COVID-19 Prevention and Control has entrusted Guangzhou Pharmaceutical Holdings Limited to provide online reservation, lot drawing, door-to-door distribution and in-store purchase services in a unified manner.","From February 22, the system has been further upgraded, and the purchase reservation and lot drawing rules are as follows:"],attention:["1. Anyone in Guangzhou may make a reservation and get registered with his identity card or any other valid identity document.","2. Reservation can be made in the mode of either “online settlement and door-to-door express delivery” or “offline settlement and in-store pickup”. In the latter case, please select a store for pickup.","3. Each person may reserve the purchase of 10 ordinary face masks or ordinary N95 masks each time, and any successful registration is valid within its original period only.","4. One reservation period is 10 days, and no repeated reservation is required within 10 days from the date of registration.","5. Each person has only one chance to win the lot in one period. If you win the lot, you should not participate in lot drawing within 10 days; if you still need to make a reservation after 10 days from lot winning, you should make a reservation and get registered again. For example, if you win the lot on February 18, you cannot get registered until February 27 and participate in lot drawing until February 28. If you have not won the lot, you may participate in lot drawing every day in the period until you win the lot or the period ends; when you make a reservation again after the end of the period, you should get registered again. Anyone aged 65 years or above has to get registered only once.","6. The data of valid reservations and registrations is saved by the system at 22:00 every day, and used for lot drawing at 15:00 on the following day. You can see the results in “Personal Center—My Reservation” at around 18:00.","7. If you win the lot for “online settlement and door-to-door express delivery” successfully, an online payment interface will appear, and you should complete payment as prompted. Guangzhou Jianmin Pharmacy Chain Co., Ltd. will provide door-to-door express delivery for your order (in Guangzhou City only). If you fail to pay within the specified time, the order will become invalid automatically. If you win the lot for “offline settlement and in-store pickup” successfully, an interface of the store name, address, reservation number (including barcode) and effective period of purchase registered at the time of reservation will appear. You can handle settlement and pickup at the registered store with the above information and your registered valid document.","8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.","9. The Guangzhou Notary Office will supervise the lot drawing process.","10. Any user who violates the rules and practices cheating will be disqualified for reservation. In serious cases, the user will be held legally liable according to law."]},chs:{agree:"我已阅读口罩购买说明",buttonText:"我要预约购买",navTitle:"口罩预约购买",title:"关于口罩预约购买的说明",desc:["为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。","2月22日起，系统进一步升级，预约摇号购买规则如下："],attention:["1、在穗人士可凭身份证等有效身份证明进行预约登记。","2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。","3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。","4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。","5、每人每个周期只有1次中签机会。如中签，中签日起10天内不在参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。","6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。","7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州建民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有限期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。","8、由于口罩采购价格存在差异和市场波动，将选取一定时间内+B2的采购平均价合理加成后销售，并由物价监管部门予以监督。","9、广州公证处将对摇号过程进行监督。","10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。"]},ja:{agree:"私はマスク購入手順を確認しました。",buttonText:"私は～を予約購入します。",navTitle:"マスクの予約購入",title:"マスクの予約購入について",desc:["新型コロナウイルス肺炎の予防抑制指揮部の事務室は、広州市に滞留する方がマスクを購入するために、マスクのインライン予約、抽選、自宅配送や店頭での購入サービスをすべて広薬集団に依頼しました。","2月22日から、システムがアップグレードされ、予約番号抽選販売ルールは以下の通りです。"],attention:["1.広州市に滞留する方が身分証などの有効な身分証明書を持参し予約登録を行います。","2.予約は「インライン決済、自宅配送」及び「オフライン決済、店頭受取」の2種類があります。予約の際にはどちらかを選んでください。「オフライン決済、店頭受取」を選択した場合は、引き取りに行く店舗を選択します。","3.お一人様1回につき、一般マスク10枚又は一般N95マスク10枚を予約購入することができ、登録後の設定期間内に有効です。","4.予約登録10日間を1つの期間とし、登録日から10日以内に予約登録を繰り返す必要はありません。","5.お一人様、各期間ごとにつき、1回の当たるチャンスがあります。当たった場合は、当たった日から10日以内に抽選に参加しないこと。当たった日から10日後、予約購入には再度予約登録をしなければなりません。例えば、2月18日に当たった場合、2月27日に再登録し、2月28日に抽選に参加することができます。抽選に外れた場合は、抽選に当たるまで、又は抽選期間が終了するまで、抽選に毎日参加することができます。当該期間が終了し、再度予約購入する際には、もう一度予約登録をしなければなりません。満65歳の方が一度だけ登録すればよい。","6.システムは毎日22：00まで有効な予約登録データを集計し、翌日15：00に抽選を行い、18：00頃に「個人センター-私の予約」で結果をチェックすることができます。","7.「インライン決済、自宅配送」に当たった場合は、インライン支払画面が表示されますので、指示に従って支払を完了してください。注文は広州建民医薬連鎖有限公司が宅配便サービス（広州市内のみ）を提供します。期限まで支払いを完了しない場合は、注文は自動的に無効になります。「オフライン決済、店頭受取」に当たった場合は、予約時に登録された店舗名、住所、予約番号（バーコード含む）及び購入の有効期間を示す画面が表示されます。有効期間内に、上記の情報と予約登録時の有効な証明書を持参して予約時に登録された店舗で決済と受取を行います。","8.マスク購入価格に違いや市場変動があるため、一定期間内の平均調達価格をベースに合理的に計算した価格て販売します。販売は物価監督管理部門の監督を受けます。","9.広州公証処は抽選過程を監督します。","10.規則違反、不正行為を行ったユーザーに対して、予約資格を取り消し、重大な結果を招いた場合は、法的責任を追及する場合があります。"]},kr:{agree:"저는 이미 마스크 구매 설명을 읽었습니다.",buttonText:"저는 예약 구매하겠습니다.",navTitle:"마스크 예약 구매",title:"마스크 예약 구매에 대한 설명",desc:["시（市） 코로나바이러스 예방 제어 지휘부 사무실은 광저우에서 마스크를 구입할 수 있도록 광약그룹에 위탁하여 마스크 온라인 예약, 번호추첨, 주택배달 또는 매장 구매 서비스를 통일적으로 요청했다. ","2일 22일 부터 시스템은 한층 더 업그레이드 되고 예약번호 구매규칙은 다음과 같다:"],attention:["1. 광저우 소재 인사는 신분증 등 유효신분증명으로 예약 등록 할 수 있다. ","2. 예약은 “온라인 결제, 주택 배달”과 “오프라인 결제, 매장 자취” 두 종류로 나누며 예약 시 그중 하나만 선택할 수 있다. “오프라인 결제, 매장 자취”를 선택할 경우 구체적인 자취할 매장을 선택해야 한다. ","3. 인당 1회 일반방호마스크 10개 또는 일반 N95 마스크 10개를 예약 구매할 수 있으며 이미 동록 완료된 경우 기존 주기 내에 유효하다.","4. 예약등록은 10일을 하나의 주기로 하며 등기한 날로부터 10일 내에 중복하여 예약 동록할 필요가 없다. ","5. 매개인은 매주에 단 1회의 당첨기회만 갖는다. 만약 당첨되면 당첨일로부터 10일 내에 추첨에 참여 하지 안는다; 당첨 10일 후 예약 구매 더 필요할 경우 다시 예약 등록해야 한다. 예를 들면 2월 18일 당첨, 2월 27일에야 다시 예약 등록하고 2월 28일 추첨에 참여할 수 있다. 당첨 된지 않을 경우 주기내에 매일 추첨에 참여할 수 있으며 당첨 또는 주기 완료될 때까지 할 수 있다; 주기 완료 후 재 예약 구매할 경우 다시 예약 등록해야 한다. 만 65세 이상인 인사는 한 번만 등록하면 된다. ","6. 매일 22:00 시스템은 유효한 예약 등록 데이터를 봉인하여 보관하고 다음날 15:00 데이터를 추첨하며 18:00 정도는 “개인센터-나의 예약”에서 결과를 조회할 수 있다. ","7. “온라인 결제, 택배 송달”에 성공적으로 당첨되면 온라인 결제 인터페이스가 뜬다. 제시된 대로 결제를 완성하면 된다. 주문은 광저우 건민의약체인유한공사가 택배송달 서비스(광저위시내에만 해당)를 제공한다. 제 시간에 지불 안하면 주문이 자동적으로 효력을 잃는다. 만약 “오프라인 결제 매장 자취”에 성공적으로 당첨되면 예약 시 등록된 매장 이름, 주소, 예약번호 (바코드 포함)와 구매 유효기간 인터페이스가 뜬다. 당신은 제한된 기간 내에 상술 정보와 예약등록 시의 유효증명서를 소지하여 예약  시 등록한 가게에 가서 결제 자취를 할 수 있다. ","8. 마스크 구매 가격 차이와 시장 파동 때문에 일정 시간 내 구매 평균 가격을 합리적으로 추가하여 판매할 것이며 물가감독관리부분의 감독을 받는다. ","9. 광저우공증사무소는 번호추첨과정을감독한다. ","10. 규칙을 위반하고 부정행위가 있는 모든 사용자에 대하여 예약자격을 취소하며 그 정황이 중한 경우 법에 의하여 법적책임을 추궁한다."]}},unCanOrderText:"您的预约申请我们已经收到，请勿重复提交。结果可在“个人中心—我的预约”中查看。"},lot_flow_info:{is_open:1,start_time:"00:00",end_time:"24:00",oveTips:"今日预约还未开始，每晚8点开放，请耐心等候",sellOutTips:"别着急，明晚8点可再次预约。我们一直在努力筹集口罩货源，尽最大努力护您周全",closeTips:"系统异常，请稍后再试。",isNeedReport:1,needReportTips:"为确保能及时了解您的健康情况，预约购买口罩前须先填写健康自查上报表，请点击“确认”进行填写。",probability:100,tmplIds:["kROFAr3lqfJVmdgB2jDS6DQhVTnePC6y-k-c9GiMSiA"],is_need_subscribe_message:1,lot_time:"18:00",modify_start_time:"18:30",modify_end_time:"21:30",modify_order_tips:"您已提交过预约登记，正在参与摇号中，如果填写信息需要修改，在18：30-21：30时间内可以修改，每天只能修改一次，且当天修改数据不能修改",modify_not_in_valid_time_tips:"该时间不能修改，请18:30-21:30时间内修改",modify_has_modify_tips:"当天录入的数据不能修改，且每天只能修改一次",enable_modify_order:!0,interval_day:10,buy_explain:{en:{title:"Notice on Online Reservation for Masks",desc:["To make it convenient for Guangzhou residents to buy masks, Guangzhou Disease Control and Prevention Office entrusted Guangzhou Pharmaceutical Holdings with services of online reservation for masks, masks lottery, delivery of masks or shop at designated drugstores.","From February 16, the new system will be undergoing a test run. Here are the rules of online reservation and purchase of masks."],attention:["1. People living in Guangzhou could make a reservation through their ID card or other valid documentation.","2. You can either choose to pay the bill online and wait for the delivery, or pay the bill offline and fetch the masks at designated drugstores that you selected previously.","3. Each person can reserve and buy 10 ordinary masks or 10 N95 masks at most within a cycle (10 days).","4. The registration and reservation information will be valid for 10 days, so you don’t need to make another reservation during this period.","5. Each person could only win the lottery once in a cycle. If you win the lottery, you shall not reserve the masks within 10 days. If you still need to make reservation 10 days after you win the lottery, then you need to make a new registration. For example, if you win the lottery on February 18, then you may wait until February 27 to register and participate in the lottery on 28. If you don’t win the lottery, then you can participate in it every day until you win it or the end of a cycle. After a cycle ends, you need to make a new registration.","6. Every day at 10 p.m. the system will collect the information registered and select lucky users by lottery at 3p.m the next day. So you may need to check the result at “Personal Center-My Reservation” around 6 p.m. every day since February 17.","7. If you win the lottery of “pay the bill online and wait for the delivery”, you should pay for the masks by following the system prompt, and Guangzhou Pharmaceutical Holdings will arrange for the delivery (within Guangzhou city). You are supposed to pay within the configured timeout, otherwise your reservation will become invalid. If you win the lottery of “pay the bill offline and fetch the masks at designated drugstores”, you will see the information including the name of the designated drugstore you registered, the detailed address, reservation number, and valid period of your purchase. You can pay the bill at the drugstore you registered through valid documentation and above information within the valid period.","8. Due to the differences of the procurement price and market fluctuations, an average purchase price in a certain period will be set for the mask, and be supervised by Office of Price Administration.","9. Guangzhou Notary Public Office will supervise the lottery process.","10. Those who break the rules and conduct cheating behavior will be disqualified from the reservation system. In serious cases, they shall be investigated for legal responsibility according to law."]},chs:{title:"关于口罩预约购买的说明",desc:["为方便在穗人士购买口罩，市新冠肺炎防控指挥部办公室委托广药集团统一提供口罩线上预约、摇号抽签、配送到家或到店购买服务。","2月22日起，系统进一步升级，预约摇号购买规则如下："],attention:["1、在穗人士可凭身份证等有效身份证明进行预约登记。","2、预约分为“线上结算，快递到家”和“线下结算，到店自取”两类，预约时只能选其一。如果选择“线下结算，到店自取”，须选择具体的自取门店。","3、每人每次可预约购买普通防护口罩10个或普通N95口罩10个，已经成功登记的在原周期内有效。","4、预约登记10天为一个周期，自登记之日起10天内无需重复预约登记。","5、每人每个周期只有1次中签机会。如中签，中签日起10天内不再参与摇号；中签10天后，如还需预约购买，须重新预约登记，如：2月18日中签，2月27日方可再次登记，2月28日参加摇号。如未中签，在周期内可每日参加抽签，直至中签或周期结束；周期结束后，再预约购买时，须重新预约登记。年满65周岁的人士只需登记一次。","6、每天22:00系统将有效预约登记的数据封存，次日15:00对数据进行摇号抽签，18:00左右可在“个人中心——我的预约”中查询结果。","7、如果成功中签“线上结算，快递到家”的，将会出现线上付款界面，请按提示完成付款。订单由广州健民医药连锁有限公司提供快递到家服务（仅限于广州市内）。超时未支付的，订单将自动失效。如果成功中签“线下结算，到店自取”的，将出现预约时登记的门店名称、地址、预约号（含条形码）和购买有效期的界面。您可在有效期内，凭上述信息和预约登记时的有效证件到预约时登记的门店办理结算自取。","8、由于口罩采购价格存在差异和市场波动，将选取一定时间内的采购平均价合理加成后销售，并由物价监管部门予以监督。","9、广州公证处将对摇号过程进行监督。","10、对于任何违反规则、存在作弊行为的用户，将取消预约资格，情节严重的，将依法追究法律责任。"]}},lotDelayTips:"数据更新可能稍有延迟，请耐心等候。",express_text:"加包装物流费6元",preorderBth:{isShow:0,text:"查看02月15日抢购预约记录"},result_notice:{is_open:1,title:"2月19日口罩预约摇号公示",short_desc:"2月19日口罩预约摇号公示",content:"1、2020年2月19日，在“穗康”小程序上登记且符合摇号资质合计2,629,006人。\n2、经过组织货源，可预约口罩1,400,000只。其中1,002,370只提供给“穗康”小程序用于今天下午3点预约摇号。另397,630只口罩用于大参林和采芝林自行预约。",version:"2"},unCanOrderText:"您的预约申请我们已收到，请勿重复提交。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。",rgisterSuccessText:"本次预约10天内有效。2月17日起，每天18：00左右系统公布随机摇号中签名单，请耐心等候。",changeableYesText:"您已选择服从分配，将提高中签概率。若当前选择口罩型号未中签，则从所选药店其他有库存的型号中再次摇号。",changeableNoText:"建议您选择“接受”服从分配，将提高中签概率"}}; 
 			}); 
		define("utils/base64src.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function r(r,e){var t=[],n=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(n=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(r){a=!0,i=r}finally{try{!n&&u.return&&u.return()}finally{if(a)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=wx.getFileSystemManager(),t="tmp_base64src";exports.base64src=function(n,a){var i=/data:image\/(\w+);base64,(.*)/.exec(n)||[],o=r(i,3),u=o[1],c=o[2];if(!u)return new Error("ERROR_BASE64SRC_PARSE");var s=wx.env.USER_DATA_PATH+"/"+t+"."+u,f=wx.base64ToArrayBuffer(c);e.writeFile({filePath:s,data:f,encoding:"binary",success:function(){a(s)},fail:function(){return new Error("ERROR_BASE64SRC_WRITE")}})}; 
 			}); 
		define("utils/commonLocales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{warmTips:"温馨提示",orderWait:"预约现场有点拥挤，请您耐心稍候！",btnSure:"确定",btnCancel:"取消",know:"知道了",loading:"努力加载中",systemErr:"系统异常，请稍后再试",supportor:"腾讯公司/腾讯云提供技术支持",submit:"提交",backHome:"返回首页",systemBusy:"服务器繁忙，稍后重试",locationFisrt:"请先授权获取当前定位信息",locationFail:"无法获取定位"},en:{warmTips:"Reminder",orderWait:"Reservation is a bit crowded, please wait patiently！",btnSure:"Confirm",btnCancel:"Cancel",know:"I know",loading:"Loading",systemErr:"System failure, please try again later",supportor:"Tencent / Tencent Cloud provides technical support",submit:"Submit",backHome:"Return to homepage",systemBusy:"The server is busy. Retry later.",locationFisrt:"Please first authorize access to the current location information",locationFail:"Unable to obtain location information"},ja:{warmTips:"ご親切な提示",orderWait:"予約現場は少し込んでいますので、少しお待ちください。",btnSure:"確定",btnCancel:"とりけし",know:"分かりました",loading:"一生懸命にロード中",systemErr:"システムが異常なので、後ほどやってみてください",supportor:"テンセント·テンセント·クラウドは技術的支援を提供",submit:"提出",backHome:"トップページに戻ります",systemBusy:"サーバーが取り込み中です。しばらく待ってからもう一度お試しください",locationFisrt:"先に現在位置情報の取得を授権してください",locationFail:"位置情報が取得できません"},kr:{warmTips:"꿀팁",orderWait:"예약현장이 좀 붐비니 잠간 기다려 주십시오!",btnSure:"확인",btnCancel:"취소",know:"알았어요",loading:"로딩 중",systemErr:"시스템에러입니다.잠시후 시도하십시오.",supportor:"텐센트/텐센트클라우드에서 기술지원",submit:"제출하기",backHome:"홈바로가기",systemBusy:"서버접속이 안됩니다. 잠시후 시도하십시오.",locationFisrt:"먼저 당전 지리위치정보를 확인을 허락하십시오.",locationFail:"위치정보 없음"}}; 
 			}); 
		define("utils/i18n.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e={locale:null,locales:{},langCode:["zh-CN","en","ja","kr"]};e.registerLocale=function(l){e.locales=l},e.setLocale=function(l){e.locale=l},e.setLocaleByIndex=function(l){e.setLocale(e.langCode[l])},e.getLanguage=function(){return e.locales[e.locale]},module.exports=e; 
 			}); 
		define("utils/locales.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"zh-CN":{home:"首页",suiKang:"穗康",languageClass:"zh-CN",me:"我的",showLoading:"努力加载中",showModal_title_tips:"温馨提示",showModal_content_login:"请先进行登录",showModal_confirmText:"去登录"},en:{home:"Home",suiKang:"Sui Kang",languageClass:"en",me:"Me",showLoading:"loading",showModal_title_tips:"reminder",showModal_content_login:"Please log in first",showModal_confirmText:"login"},ja:{suiKang:"穂康",home:"トップページ",languageClass:"ja",me:"私の",showLoading:"努力投入中",showModal_title_tips:"温かいヒント",showModal_content_login:"先に登録してください",showModal_confirmText:"登録"},kr:{suiKang:"호강",home:"첫 페이지",languageClass:"kr",me:"내",showLoading:"다시 불러오는 중",showModal_title_tips:"따뜻한 팁",showModal_content_login:"먼저 로그인하십시오",showModal_confirmText:"로그인"}}; 
 			}); 
		define("utils/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=wx.getRealtimeLogManager?wx.getRealtimeLogManager():null;module.exports={debug:function(){e&&e.debug.apply(e,arguments)},info:function(){e&&e.info.apply(e,arguments)},warn:function(){e&&e.warn.apply(e,arguments)},error:function(){e&&e.error.apply(e,arguments)},setFilterMsg:function(t){e&&e.setFilterMsg&&"string"==typeof t&&e.setFilterMsg(t)},addFilterMsg:function(t){e&&e.addFilterMsg&&"string"==typeof t&&e.addFilterMsg(t)}}; 
 			}); 
		define("utils/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(o){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return 0===i?Promise.reject(null):new Promise(function(a,d){u().then(function(e){return r.request(t({},o,{url:n(o.url),header:t({},o.header,{sessionid:e,appid:s}),timeout:o.timeout||15e3}))}).then(function(n){n.statusCode;var t=n.data,r=t.errcode;return[110001005,110001004,-1].includes(r)?(wx.removeStorageSync("wx-sessionid"),e(o,i-1).then(a)):0===r?a(t.data):(wx.showToast({title:t.errmsg||r&&"服务器繁忙，稍后重试",icon:"none"}),console.log(t.errmsg),d(t))}).catch(function(){return c||(c=!0,wx.showModal({title:"温馨提示",content:"当前人数较多，请稍后再试",showCancel:!1,success:function(){c=!1}})),d(null)})})}function n(e){return 0===e.indexOf("http")?e:""+i+e}var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r=require("./wx-promise"),o=require("../config/index"),i=o.domain,s=o.appid,u=require("./session").getSessionId,c=!1;module.exports={request:e}; 
 			}); 
		define("utils/session.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){return c?new Promise(function(e,n){i.addEventListener("fetchSessionSuccess",function(n){e(n.target)}),i.addEventListener("fetchSessionFail",function(e){n(e.target)})}):(c=!0,new Promise(function(e,o){s.login().then(function(e){var n=e.code;return console.log(n),s.request({url:t+"/wll/account/login?js_code="+n,header:{appid:r}})}).then(function(s){var t=s.data;if(0===t.errcode){c=!1;var r=t.data,a=r.sessionid,d=r.openid;return wx.setStorageSync("wx-openid",d),wx.setStorageSync("wx-sessionid",a),i.dispatch("fetchSessionSuccess",a),i.removeEventListener("fetchSessionSuccess"),i.removeEventListener("fetchSessionFail"),void e(a)}n(o)}).catch(function(e){console.error("wx.login err",e),n(o)})}))}function n(e){c=!1,wx.showModal({title:"温馨提示",content:"当前人数较多，请稍后再试",showCancel:!1}),i.dispatch("fetchSessionFail",null),i.removeEventListener("fetchSessionSuccess"),i.removeEventListener("fetchSessionFail"),e({errcode:-2e4,errmsg:"请求 sessionId 失败"})}var s=require("./wx-promise"),i=require("../components/gsd-lib/event/index"),o=require("../config/index"),t=o.domain,r=o.appid,c=!1;module.exports={fetchSessionId:e,getSessionId:function(){var n=wx.getStorageSync("wx-sessionid");return n?Promise.resolve(n):e()},handleSessionFail:n}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./../config/index");var t=require("../components/gsd-lib/event/index"),e=require("./commonLocales"),n=require("./i18n"),i=Object.assign({},e[n.locale],n.locales[n.locale]);t.addEventListener("languageChanged",function(t){i=Object.assign({},e[n.locale],n.locales[n.locale])},void 0),Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},module.exports={chooseLocation:function(){return new Promise(function(t,e){wx.showLoading(),wx.getSetting({withSubscriptions:!0,success:function(e){wx.hideLoading(),e.authSetting&&!1===e.authSetting["scope.userLocation"]?wx.showModal({title:i.locationFail,content:i.locationFisrt,confirmText:i.btnSure,cancelText:i.btnCancel,success:function(t){t.confirm&&wx.openSetting()}}):wx.getLocation({type:"gcj02",success:function(e){var n=e.latitude,o=e.longitude;wx.chooseLocation({latitude:n,longitude:o,scale:18,success:t,fail:function(t){t.errMsg.includes("fail auth deny")&&wx.showModal({title:i.locationFail,content:i.locationFisrt,confirmText:i.btnSure,cancelText:i.btnCancel,success:function(t){t.confirm&&wx.openSetting()}})}})},fail:function(t){t.errMsg.includes("fail auth deny")&&wx.showModal({title:i.locationFail,content:i.locationFisrt,confirmText:i.btnSure,cancelText:i.btnCancel,success:function(t){t.confirm&&wx.openSetting()}})}})},fail:function(t){wx.hideLoading()}})})}}; 
 			}); 
		define("utils/watch.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var o=e.data,n=e.watch;Object.keys(n).forEach(function(r){for(var c=r.split("."),f=o,u=0;u<c.length-1;u++)f=f[c[u]];t(f,c[c.length-1],n[r].handler||n[r],n[r].deep,e)})}function t(e,n,r,c,f){var u=e[n];c&&null!=u&&"object"===(void 0===u?"undefined":o(u))&&Object.keys(u).forEach(function(e){t(u,e,r,c,f)});Object.defineProperty(e,n,{configurable:!0,enumerable:!0,set:function(o){r.call(f,o,u),u=o,c&&t(e,n,r,c,f)},get:function(){return u}})}Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.setWatcher=e,module.exports={setWatcher:e}; 
 			}); 
		define("utils/wx-promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r={};(0,require("miniprogram-api-promise").promisifyAll)(wx,r),module.exports=r; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("./store/user"),n=require("./store/mine"),t=require("./store/config"),o=require("./components/gsd-lib/anim/anim.min"),s=require("./components/gsd-lib/event/index"),i=require("./config/index"),r=require("./utils/wx-promise"),a=require("./components/gsd-lib/map/index"),c=require("./components/gsd-lib/dayjs/index"),l=require("./components/gsd-lib/utils/index"),g=require("./components/gsd-lib/storage/index"),u=require("./utils/request").request,d=require("./utils/locales"),h=require("./utils/i18n");h.registerLocale(d);var p=wx.getSystemInfoSync().language;console.log("系统语言：",p);var x={zh:0,en:1,ja:2,ko:3},m=void 0;m="zh"===p.substring(0,2)?0:x[p]||1,console.log("sub之后的languageSys:",p.substring(0,2)),h.setLocaleByIndex(wx.getStorageSync("langIndex")||m),wx.getStorageSync("langIndex")||wx.setStorageSync("langIndex",m),wx.getSystemInfo({success:function(e){console.log("------"),console.log(e.model),console.log(e.pixelRatio),console.log(e.windowWidth),console.log(e.windowHeight),console.log(e.language),console.log(e.version),console.log(e.platform)}}),wx.T=h,App({onLaunch:function(){var d=this;this.systemInfo=wx.getSystemInfoSync(),this.utils=l,this.request=u,this.config=i,this.dayjs=c,this.storage=g,this.wxp=r,this.Anim=o,this.Event=s,this.Map=a,this.resetTab=function(){return s.dispatch("g-tabs__resetStyle")},this.userStore=e(this),this.configStore=t(this),this.configStore.fetchWllConfig();var h=wx.getLaunchOptionsSync();["packages/buy/pages/reservation-list/index","packages/health-code/pages/mutual-sweep/index"].includes(h.path)||this.userStore.fetchUserInfo().then(function(){["pages/stat/index","pages/buy/notice/index","pages/mine/index/index","packages/health-code/pages/report-health/index"].includes(h.path)||d.userStore.checkAuth()}),this.mineStore=n(this);var p=wx.getUpdateManager();p.onCheckForUpdate(function(e){console.log("updateManager.onCheckForUpdate 请求完新版本信息",e)}),p.onUpdateReady(function(){console.log("updateManager.onUpdateReady 新版本已准备好"),wx.showModal({title:"更新提示",content:"新版本已经准备好，请重启应用",showCancel:!1,success:function(){p.applyUpdate()}})}),wx.removeStorageSync("selfForm__data")},onShow:function(e){1092===e.scene&&wx.hideHomeButton()}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/custom-tab-bar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/custom-tab-bar/index.js';	define("components/custom-tab-bar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({data:{selected:0,color:"#7A7E83",selectedColor:"#3cc51f",list:[{pagePath:"/index/index",iconPath:"/image/icon_component.png",selectedIconPath:"/image/icon_component_HL.png",text:"组件"},{pagePath:"/index/index2",iconPath:"/image/icon_API.png",selectedIconPath:"/image/icon_API_HL.png",text:"接口"}]},attached:function(){},methods:{switchTab:function(e){var t=e.currentTarget.dataset,n=t.path;wx.switchTab({url:n}),this.setData({selected:t.index})}}}); 
 			}); 	require("components/custom-tab-bar/index.js");
 		__wxRoute = 'components/g-speech/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/g-speech/index.js';	define("components/g-speech/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{show:!1},methods:{handleStart:function(){console.log("start")},handleStop:function(){console.log("stop")},handleOpen:function(){this.setData({show:!0})},handleClose:function(){this.setData({show:!1})}}}); 
 			}); 	require("components/g-speech/index.js");
 		__wxRoute = 'components/gsd-ui/g-address-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-address-item/index.js';	define("components/gsd-ui/g-address-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["component-class","title-class"],properties:{item:Object},data:{},methods:{}}); 
 			}); 	require("components/gsd-ui/g-address-item/index.js");
 		__wxRoute = 'components/gsd-ui/g-address-map/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-address-map/index.js';	define("components/gsd-ui/g-address-map/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../gsd-lib/map/index"),e=require("../../gsd-lib/event/index");Component({externalClasses:["component-item-class","title-item-class"],properties:{list:{type:Array,observer:function(){this.resetTab()},__type__:function(t){return t}},mode:{type:String,value:"navigator"},showMap:{type:Boolean,value:!0},activeId:{type:Number,observer:function(t){this.setActiveId(t)}},emptyText:{type:String,value:"当前范围内无网点"},loadUnit:{type:String,value:"district"},regionLevel:{type:Number,value:3},showSelect:{type:Boolean,value:!0},canShowMap:{type:Boolean,value:!0},regionIncludes:Array,regionExcludes:Array},data:{_regionValue:[],_tabActiveKey:"list",_mapHeight:0,_emptyListHeight:0,_activeIndex:0,_activeId:0,_position:{longitude:113.26436,latitude:23.12908}},ready:function(){this.initLocation(),this.initLayout(),this.setActiveId()},methods:{resetTab:function(){e.dispatch("g-tabs__resetStyle")},initLocation:function(){var t=this;wx.getLocation({type:"gcj02",success:function(e){console.log("成功获取当前定位",e);var i={longitude:e.longitude,latitude:e.latitude};t.setData({_position:i})}})},setActiveId:function(t){var e=this,i=this.properties.list;if(!i||i.length<=0)return!1;t=t||i[0].id,this.setData({_activeId:t},function(){var a=i.findIndex(function(e){return e.id===t}),n=i[a].position;e.setData({_activeIndex:a,_position:n})})},initLayout:function(){var t=this,e=this.properties.showMap,i=this.createSelectorQuery();i.select("#map-address-item").boundingClientRect(),i.selectViewport().boundingClientRect(),i.select("#list-title").boundingClientRect(),i.exec(function(i){var a=i[0]&&i[0].height||0,n=i[1].height||0,s=i[2]&&i[2].height||0,o=i[1].width/750*88,r=n-o-a,c=n-(e?o:s);t.setData({_mapHeight:r,_emptyListHeight:c},function(){t.resetTab()})})},handleTabChange:function(t){this.setData({_tabActiveKey:t.detail.value.key}),this.initLayout()},handleActiveMarker:function(t){this.properties.list;this.setActiveId(t.detail.id)},handleListItemTap:function(t){var e=this.properties.mode,i=t.currentTarget.dataset.item;"selector"===e&&this.triggerEvent("choose",i),"navigator"===e&&(this.setData({_tabActiveKey:"map"}),this.setActiveId(i.item.id))},handleMapItemTap:function(t){console.log(t);var e=this.properties.mode,i=t.currentTarget.dataset.item;"selector"===e&&this.triggerEvent("choose",i)},handleNavigatorTap:function(){var t=this.data._activeIndex,e=this.properties.list[t],i=e.position;wx.openLocation({latitude:i.latitude,longitude:i.longitude,name:e.name,address:e.address})},handlePhoneTap:function(){var t=this.data._activeIndex,e=this.properties.list[t].phone;"string"==typeof e?wx.makePhoneCall({phoneNumber:e}):wx.showActionSheet({itemList:e,success:function(t){wx.makePhoneCall({phoneNumber:e[t.tapIndex]})}})},handleMapUpdate:function(t){if(t.detail.info){var e=t.detail.info,i=[e.province,e.city,e.district];this.setData({_regionValue:i}),this.triggerEvent("mapUpdate",t.detail)}},handleRegionChange:function(i){var a=this,n=this.properties,s=(n.showMap,n.loadUnit);this.data._tabActiveKey;if(Array.isArray(i.detail.value)){var o=i.detail.value;this.setData({_regionValue:o.map(function(t){return t.name})}),t.geocoder({address:o.map(function(t){return t.name}).join(""),success:function(i){if(0===i.status){var n={longitude:i.result.location.lng,latitude:i.result.location.lat};t.reverseGeocoder({location:n,success:function(t){if(0===t.status){var i=t.result.ad_info;e.dispatch("g-map__setLastLocaton",i[s]),a.setData({_position:n}),a.triggerEvent("mapUpdate",{position:n,info:i})}}})}}})}}}}); 
 			}); 	require("components/gsd-ui/g-address-map/index.js");
 		__wxRoute = 'components/gsd-ui/g-agree/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-agree/index.js';	define("components/gsd-ui/g-agree/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{value:Boolean},data:{},methods:{handleChange:function(e){this.triggerEvent("change",{value:e.detail.value.length>0})}}}); 
 			}); 	require("components/gsd-ui/g-agree/index.js");
 		__wxRoute = 'components/gsd-ui/g-auth-footer/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-auth-footer/index.js';	define("components/gsd-ui/g-auth-footer/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{fixed:Boolean},data:{},methods:{}}); 
 			}); 	require("components/gsd-ui/g-auth-footer/index.js");
 		__wxRoute = 'components/gsd-ui/g-badge/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-badge/index.js';	define("components/gsd-ui/g-badge/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["component-class"],properties:{count:{type:[Number,String],observer:function(o){this.isShowOverflowCount(o)}},dot:{type:Boolean,value:!1},overflowCount:{type:Number,value:99},position:{type:String,value:"none"}},data:{showOverflowCount:!1},methods:{isShowOverflowCount:function(o){"number"==typeof o&&o>=this.properties.overflowCount?this.setData({showOverflowCount:!0}):this.setData({showOverflowCount:!1})}}}); 
 			}); 	require("components/gsd-ui/g-badge/index.js");
 		__wxRoute = 'components/gsd-ui/g-banner/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-banner/index.js';	define("components/gsd-ui/g-banner/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{src:{type:Array,observer:function(){this.initBanner()},__type__:function(t){return t}}},data:{_autoplay:!0,_showDots:!1},methods:{initBanner:function(){this.properties.src.length>1?this.setData({_showDots:!0}):this.setData({_showDots:!1})}}}); 
 			}); 	require("components/gsd-ui/g-banner/index.js");
 		__wxRoute = 'components/gsd-ui/g-button-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-button-group/index.js';	define("components/gsd-ui/g-button-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/primarySecondButton");Component({options:{multipleSlots:!0},behaviors:[e],properties:{disabled:Boolean,secondDisabled:Boolean,fixed:Boolean,agree:Boolean,autoAgree:Boolean,buttonList:Array,direction:{type:String,value:"horizontal"}},data:{_agreeChecked:!1},ready:function(){this.properties.autoAgree&&this.setData({_agreeChecked:this.properties.autoAgree})},methods:{handleAgreeChange:function(e){this.setData({_agreeChecked:e.detail.value})},handelButtonListTap:function(e){e.currentTarget.dataset.item&&this.triggerEvent("buttonListTap",{item:e.currentTarget.dataset.item})}}}); 
 			}); 	require("components/gsd-ui/g-button-group/index.js");
 		__wxRoute = 'components/gsd-ui/g-calendar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-calendar/index.js';	define("components/gsd-ui/g-calendar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../gsd-lib/dayjs/index"),t=["周日","周一","周二","周三","周四","周五","周六"];Component({properties:{value:{type:String,value:"",observer:function(e){var t=this;this.setData({_value:e},function(){t.backToActive()})}},start:{type:String,value:e().format("YYYY-MM-DD"),observer:function(){this.initDate()}},end:{type:String,value:e().add(1,"year").format("YYYY-MM-DD"),observer:function(){this.initDate()}},mode:{type:String,value:"multiple",observer:function(e){var t=this;this.setData({_mode:e},function(){t.initDate()})}},options:{type:Array,value:[],observer:function(){this.initDate()},__type__:function(e){return e}},includes:{type:Array,value:[],__type__:function(e){return e}},excludes:{type:Array,value:[],__type__:function(e){return e}}},data:{_mode:"multiple",_value:"",_duration:500,_current:0,_weekName:t,_month:[],_week:[]},methods:{initDate:function(){var e=this.properties,t=e.start,n=e.end,r=this.data._mode;if(!t||!n)return console.warn("日历组件此次 initDate 没有 start / end 属性"),!1;"multiple"===r?this.initMonth():this.initWeek(),this.backToActive()},backToActive:function(){var e=this.data,t=e._value,n=e._week,r=e._month,a=0;a="single"===e._mode?n.findIndex(function(e){return e.some(function(e){return!e.disabled&&e.date===t})}):r.findIndex(function(e){return e.date.some(function(e){return!e.disabled&&e.date===t})}),this.setData({_current:a>=0?a:0})},initWeek:function(){var t=this,n=this.properties,r=n.start,a=n.end,i=e(a).diff(e(r),"week")+1,o=Array.from({length:i}).map(function(n,i){var o=e(r).add(i,"week").startOf("week"),d=t.getDateByWeek(o),s=t.transferWeekDateOptions(d,e(r),e(a)),u=t.mergeIncludesAndExcludes(s,"includes"),c=t.mergeIncludesAndExcludes(u,"excludes");return t.mergeDateOptions(c)});this.setData({_week:o})},initMonth:function(){var t=this,n=this.properties,r=n.start,a=n.end,i=e(a).diff(e(r),"month")+1,o=Array.from({length:i}).map(function(n,i){var o=e(r).add(i,"month").startOf("month"),d=o.clone().format("YYYY年 MM月"),s=t.getDateByMonth(o),u=t.padMonthDate(s),c=t.transferMonthDateOptions(u,o,e(r),e(a)),f=t.mergeIncludesAndExcludes(c,"includes"),l=t.mergeIncludesAndExcludes(f,"excludes");return{month:d,date:t.mergeDateOptions(l)}});this.setData({_month:o})},getDateByMonth:function(e){var t=e.startOf("month"),n=e.endOf("month");return Array.from({length:n.diff(t,"day")+1}).map(function(e,n){return t.add(n,"day")})},getDateByWeek:function(e){return Array.from({length:7}).map(function(t,n){return e.add(n,"day")})},padMonthDate:function(e){var t=e[0],n=e[e.length-1],r=t.startOf("week");e=Array.from({length:t.diff(r,"day")}).map(function(e,n){return t.clone().subtract(n+1,"day")}).reverse().concat(e);var a=n.endOf("week");return e=e.concat(Array.from({length:a.diff(n,"day")}).map(function(e,t){return n.clone().add(t+1,"day")}))},transferMonthDateOptions:function(e,n,r,a){return e.map(function(e){return{date:e.format("YYYY-MM-DD"),day:e.format("DD"),month:e.format("MM"),weekday:t[Number(e.format("d"))],disabled:!n.isSame(e.startOf("month"))||e.isBefore(r)||e.isAfter(a)}})},transferWeekDateOptions:function(e,n,r){return e.map(function(e){return{date:e.format("YYYY-MM-DD"),day:e.format("DD"),month:e.format("MM"),weekday:t[Number(e.format("d"))],disabled:e.isBefore(n)||e.isAfter(r)}})},mergeDateOptions:function(e){var t=this.properties.options;return e.map(function(e){return t.some(function(t){if(t.date===e.date)return e=Object.assign({},e,t),!0}),e})},mergeIncludesAndExcludes:function(e,t){var n=this.properties[t];return n.length?e.map(function(e){var r=n.includes(e.date)||n.includes(e.weekday)||n.includes(e.day);return r||"includes"!==t||(e.disabled=!0),r&&"excludes"===t&&(e.disabled=!0),e}):e},handleMonthSwiper:function(e){console.log("current: ",e.detail.current),this.setData({_current:e.detail.current})},handleTapDate:function(e){var t=e.currentTarget.dataset.option,n=this.data._value;if(!t.disabled&&t.date!==n){var r=t.date;this.triggerEvent("change",{value:r})}},handleToggleMode:function(){var e=this,t="single"===this.data._mode?"multiple":"single";this.triggerEvent("modeChange",{mode:t}),this.setData({_mode:t},function(){e.initDate()})}}}); 
 			}); 	require("components/gsd-ui/g-calendar/index.js");
 		__wxRoute = 'components/gsd-ui/g-card/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-card/index.js';	define("components/gsd-ui/g-card/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{},properties:{iconType:{type:String,value:"radio"},checked:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}},data:{__radioType:!1},ready:function(){"radio"===this.properties.iconType&&this.setData({__radioType:!0})},methods:{bindtap:function(){var e=this.properties,i=e.iconType,t=e.disabled;if("none"!==i&&!t){var o=this.properties.checked;this.triggerEvent("change",{value:!o})}}}}); 
 			}); 	require("components/gsd-ui/g-card/index.js");
 		__wxRoute = 'components/gsd-ui/g-cascader/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-cascader/index.js';	define("components/gsd-ui/g-cascader/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../gsd-lib/event/index"),t=require("../../gsd-lib/utils/index").debounce;Component({properties:{value:{type:Array,observer:function(e){e&&this.setData({_value:e})},__type__:function(e){return e}},visible:{type:Boolean,observer:function(e){!1===e&&this.handleChange()}},range:{type:Array,observer:function(e){var t=this;this.updateTab(),e&&setTimeout(function(){t.setData({_tabActiveIndex:(e.length-1).toString()})},0)}}},data:{_tabActiveIndex:"0",_value:[]},methods:{updateTab:t(function(){setTimeout(function(){e.dispatch("g-tabs__init")},0)},0),handleClose:function(e){this.triggerEvent("close",e.detail)},handleTabChange:function(e){this.setData({_tabActiveIndex:e.detail.value.key})},handleChange:function(){this.triggerEvent("change",{value:this.data._value.map(function(e){return e.value||e})})},handleChoose:t(function(e){var t=this,n=e.currentTarget.dataset,a=n.columnIndex,i=n.item,r=this.properties.range,s=this.data._value;a<r.length-1&&this.setData({_tabActiveIndex:(a+1).toString()});var u=s.slice(0,a);u[a]=i,this.setData({_value:u},function(){t.updateTab(),t.triggerEvent("columnChange",{item:i,index:a})})},500)}}); 
 			}); 	require("components/gsd-ui/g-cascader/index.js");
 		__wxRoute = 'components/gsd-ui/g-cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-cell/index.js';	define("components/gsd-ui/g-cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/navigator"),t=require("../behaviors/icon");Component({behaviors:[e,t],externalClasses:["component-class","prepend-class"],options:{multipleSlots:!0},properties:{label:String,desc:String,access:Boolean,disabled:{type:Boolean,value:!1}},data:{},methods:{handleTap:function(e){this.properties.disabled||(this.navigator(),this.triggerEvent("tap",e.detail))}}}); 
 			}); 	require("components/gsd-ui/g-cell/index.js");
 		__wxRoute = 'components/gsd-ui/g-checkbox-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-checkbox-group/index.js';	define("components/gsd-ui/g-checkbox-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/formCheck"),r=require("../behaviors/formController");Component({behaviors:[e,r],relations:{"../g-form/index":{type:"ancestor"}}}); 
 			}); 	require("components/gsd-ui/g-checkbox-group/index.js");
 		__wxRoute = 'components/gsd-ui/g-checkbox-label/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-checkbox-label/index.js';	define("components/gsd-ui/g-checkbox-label/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{},properties:{value:{type:[Array,String],value:[],observer:function(e){this.init(this.properties.items||[],e)}},items:{type:Object,value:{},observer:function(e){this.init(e,this.properties.value)}},radioType:{type:Boolean,value:!1}},data:{__items:{}},methods:{bindtap:function(e){var t=this.properties,i=t.value,r=t.radioType,a=e.currentTarget.dataset,s=a.changeValue;if(a.disabled||!s)return!1;if(r)this.triggerEvent("change",{value:i===s?"":s});else{var n=Array.isArray(i)?i.slice(0):[i],o=n.indexOf(s);o>-1?n.splice(o,1):n.push(s),this.triggerEvent("change",{value:n})}},init:function(e,t){var i=this.properties.radioType,r=e.map(function(e){return i?Object.assign({},e,{checked:e.value===t}):Object.assign({},e,{checked:t.indexOf(e.value)>-1})});this.setData({__items:r})}}}); 
 			}); 	require("components/gsd-ui/g-checkbox-label/index.js");
 		__wxRoute = 'components/gsd-ui/g-circle/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-circle/index.js';	define("components/gsd-ui/g-circle/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{total:{type:Number,observer:function(){this.calcRotate()}},current:{type:Number,observer:function(){this.calcRotate()}},status:String},data:{leftRotateDeg:45,rightRotateDeg:45},ready:function(){this.calcRotate()},methods:{calcRotate:function(){var t=this.properties,e=void 0,o=void 0,a=t.current/t.total;1===a?(e=45,o=45):a<=.5?(e=-135,o=360*a-135):(e=360*(a-.5)-135,o=45),this.setData({leftRotateDeg:e,rightRotateDeg:o})}}}); 
 			}); 	require("components/gsd-ui/g-circle/index.js");
 		__wxRoute = 'components/gsd-ui/g-clip-photo/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-clip-photo/index.js';	define("components/gsd-ui/g-clip-photo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict"; 
 			}); 	require("components/gsd-ui/g-clip-photo/index.js");
 		__wxRoute = 'components/gsd-ui/g-collapse-pane/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-collapse-pane/index.js';	define("components/gsd-ui/g-collapse-pane/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-collapse/index":{type:"parent"}},properties:{title:String,disabled:Boolean,key:String},data:{_isCollapse:!0},methods:{_getCollapseNode:function(){return this.getRelationNodes("../g-collapse/index")[0]},_setCollapse:function(e){this.properties.key;var t=this.data._isCollapse;this._getCollapseNode();e=void 0===e?!t:e,this.setData({_isCollapse:e})},handleToggleCollapse:function(){var e=this.properties,t=e.disabled,s=e.key,l=this._getCollapseNode();t||l._setPaneCollapse(s)}}}); 
 			}); 	require("components/gsd-ui/g-collapse-pane/index.js");
 		__wxRoute = 'components/gsd-ui/g-collapse/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-collapse/index.js';	define("components/gsd-ui/g-collapse/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-collapse-pane/index":{type:"child"}},properties:{accordion:Boolean,defaultActiveKeys:{type:Array,value:[],__type__:function(e){return e}},activeKeys:{type:Array,value:[],__type__:function(e){return e},observer:function(){this.setByActiveKeys()}}},ready:function(){this.setByActiveKeys()},methods:{_getAllCollapsePane:function(){return this.getRelationNodes("../g-collapse-pane/index")},_setPaneCollapse:function(e){var t=this,n=this.properties.accordion;this._getAllCollapsePane().forEach(function(t){n?t._setCollapse(t.properties.key!==e):t.properties.key===e&&t._setCollapse()}),wx.nextTick?wx.nextTick(function(){return t.triggerChange()}):setTimeout(function(){return t.triggerChange()},0)},setByActiveKeys:function(){var e=this.properties,t=e.defaultActiveKeys,n=e.accordion,i=this.properties.activeKeys,r=this._getAllCollapsePane();i&&0!==i.length||(i=t),n&&(i=i.length>0?[t[0]]:[r[0].properties.key]),r.forEach(function(e){e._setCollapse(!i.includes(e.properties.key))})},triggerChange:function(){var e=this._getAllCollapsePane();this.triggerEvent("change",{value:e.filter(function(e){return!e.data._isCollapse}).map(function(e){return e.properties.key})})}}}); 
 			}); 	require("components/gsd-ui/g-collapse/index.js");
 		__wxRoute = 'components/gsd-ui/g-date-range-picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-date-range-picker/index.js';	define("components/gsd-ui/g-date-range-picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){function t(t,e){var a=[],r=!0,n=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!e||a.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(n)throw i}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../gsd-lib/dayjs/index");Component({externalClasses:[],properties:{start:String,end:String,fields:{type:String,value:"day"},value:{type:Array,value:["",""],observer:function(t,e){this.setDateData()}},startPlaceholder:{type:String,value:"开始日期"},endPlaceholder:{type:String,value:"结束日期"},format:{type:String,value:"YYYY年MM月DD日"}},data:{startValue:"",endValue:"",startDateStr:"",endDateStr:""},ready:function(){this.setDateData()},methods:{setDateData:function(){var a=this.properties,r=a.value,n=a.format,i=t(r,2),o=i[0],l=i[1],u=o||e().format("YYYY-MM-DD"),s=l||e().format("YYYY-MM-DD"),f=o?e(new Date(o)).format(n):"",d=l?e(new Date(l)).format(n):"";this.setData({startValue:u,endValue:s,startDateStr:f,endDateStr:d})},handleStartChange:function(t){var a=this.properties,r=a.value,n=a.format,i=void 0===n?"YYYY年MM月DD日":n,o=t.detail.value,l=e(new Date(o)).format(i),u=r[1]?e(new Date(r[1])).format(i):"";r[0]=o,this.triggerEvent("change",{value:[o,r[1]],format:[l,u]})},handleEndChange:function(t){var a=this.properties,r=a.value,n=a.format,i=void 0===n?"YYYY年MM月DD日":n,o=t.detail.value,l=r[0]?e(new Date(r[0])).format(i):"",u=e(new Date(o)).format(i);r[1]=o,this.triggerEvent("change",{value:[r[0],o],format:[l,u]})}}}); 
 			}); 	require("components/gsd-ui/g-date-range-picker/index.js");
 		__wxRoute = 'components/gsd-ui/g-dropdown/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-dropdown/index.js';	define("components/gsd-ui/g-dropdown/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{color:{type:String,value:"#000"}},data:{},methods:{}}); 
 			}); 	require("components/gsd-ui/g-dropdown/index.js");
 		__wxRoute = 'components/gsd-ui/g-footer/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-footer/index.js';	define("components/gsd-ui/g-footer/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["component-class"],properties:{fixed:{type:Boolean,value:!1},sponsor:{type:String,value:"广州市新冠肺炎防控指挥办"},supportor:{type:String,value:"腾讯公司/腾讯云提供技术支持"}},data:{}}); 
 			}); 	require("components/gsd-ui/g-footer/index.js");
 		__wxRoute = 'components/gsd-ui/g-form-cell/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-form-cell/index.js';	define("components/gsd-ui/g-form-cell/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../behaviors/formController"),i=require("../utils/validator");Component({behaviors:[t],relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},properties:{slot:Boolean,label:String,value:{type:String,value:"",observer:function(e,t){this.resetStatus(),e&&e!==t&&this.validateValue.bind(this)}},placeholder:{type:String,value:"请输入"},disabled:Boolean,icon:String,actionText:String},data:{_status:"",_value:"",_statusMessage:""},methods:{getFormNode:function(){var e=this.getRelationNodes("../g-form/index");return e&&e[0]},resetStatus:function(){this.setData({_status:"",_statusMessage:""})},validateValue:function(){var t=this;if(!this.id)throw new Error("请提供需要校验的组件 ID");var a=e({},this.id,this.properties.value),r=this.getFormNode().properties,s=r.rules,o=void 0===s?{}:s,n=r.validateType;i(a,o,void 0===n?{}:n).then(function(e){console.log("form-field validate: ",a,o,e),e.length>0?t.setData({_status:"warn",_statusMessage:e[0].message}):t.resetStatus()})},handleTapClear:function(e){if(this.properties.disabled)return!1},handleTapIcon:function(){var e=this.properties.icon;this.triggerEvent("iconTap",{type:e})},handleActionTap:function(e){this.triggerEvent("actionTap",e.detail)}}}); 
 			}); 	require("components/gsd-ui/g-form-cell/index.js");
 		__wxRoute = 'components/gsd-ui/g-form-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-form-item/index.js';	define("components/gsd-ui/g-form-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=wx.getSystemInfoSync().brand.toLowerCase();Component({__timer__:void 0,externalClasses:["component-class","static-item-class"],properties:{required:Boolean,label:String,disabled:Boolean,status:{type:String,observer:function(e){var s=this;"iphone"===t?(this.__timer__&&clearTimeout(this.__timer__),this.__timer__=setTimeout(function(){s.setData({_status:e}),s.__timer__=void 0},500)):this.setData({_status:e})}},statusMessage:{type:String,value:"输入有误，请检查后重试",observer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"输入有误，请检查后重试";this.setData({_statusMessage:t})}}},data:{_status:"",_statusMessage:""}}); 
 			}); 	require("components/gsd-ui/g-form-item/index.js");
 		__wxRoute = 'components/gsd-ui/g-form-number/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-form-number/index.js';	define("components/gsd-ui/g-form-number/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,t=require("../behaviors/formController");Component({behaviors:[t],options:{multipleSlots:!0},properties:{label:{type:String,value:""},desc:{type:String,value:""},min:{type:Number,value:-e},max:{type:Number,value:e},value:{type:Number,value:0,observer:function(e){var t=this.properties.fixed;this.setData({_value:e.toFixed(t)})}},step:{type:Number,value:1},fixed:{type:Number,value:0},disabled:{type:Boolean,value:!1}},data:{_value:0},methods:{commanValue:function(e){var t=this.properties,a=t.step,u=t.min,l=t.max,s=this.data._value,i="sub"===e?+s-a:+s+a;("sub"===e&&i>=u||"plus"===e&&i<=l)&&this.triggerEvent("change",{value:i})},subValue:function(){this.commanValue("sub")},plusValue:function(){this.commanValue("plus")}}}); 
 			}); 	require("components/gsd-ui/g-form-number/index.js");
 		__wxRoute = 'components/gsd-ui/g-form-phoneVCode/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-form-phoneVCode/index.js';	define("components/gsd-ui/g-form-phoneVCode/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../behaviors/formController"),i=require("../utils/validator"),r=require("../../gsd-lib/utils/index");Component({timer:void 0,relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},behaviors:[t],properties:{value:String,delaySecond:{type:Number,value:60},mobile:String,mobileID:String,maxLength:{type:Number,value:6},placeholder:{type:String,value:"请输入手机短信验证码"},buttonText:{type:String,value:"发送验证码"},type:String},data:{__id:"",__second:void 0,__reSend:!1},ready:function(){this.setData({__id:this.id})},methods:{bindVerifyAction:r.debounce(function(){var t=this,r=this.properties,n=r.mobile,o=r.mobileID,a=r.delaySecond,d=r.disabled;if(!this.data.__reSend&&!d){var l=this.getFormNode(),s=l.properties,u=s.rules,c=void 0===u?{}:u,v=s.validateType,_=void 0===v?{}:v,m=e({},o,n);i(m,c,_).then(function(e){console.log("form-field validate: ",m,c,e),e.length>0?l.getFormField(o).warn(e[0]):(t.triggerEvent("tapVCode",{value:n,mobile:n}),t.timer&&clearInterval(t.timer),t.setData({__reSend:!0,__second:a}),t.timer=setInterval(function(){var e=t.data.__second;e<=1?(console.log("验证码计时结束"),clearInterval(t.timer),t.setData({__reSend:!1,__second:a})):t.setData({__reSend:!0,__second:void 0===e?a:e-1})},1e3))})}},100),handleChange:function(e){this.triggerEvent("change",e.detail)}}}); 
 			}); 	require("components/gsd-ui/g-form-phoneVCode/index.js");
 		__wxRoute = 'components/gsd-ui/g-form/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-form/index.js';	define("components/gsd-ui/g-form/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/formController"),t=require("../behaviors/primarySecondButton"),i=require("../utils/validator"),n=require("../utils/helper"),o=require("../../gsd-lib/event/index"),r=require("../../gsd-lib/utils/index").debounce;Component({__loading__:!1,options:{multipleSlots:!0},behaviors:[t],relations:{"form-fields":{type:"descendant",target:e}},properties:{model:{type:Object,value:{}},rules:{type:Object,value:{},observer:function(e){e&&this.resetFormFiels()}},showTips:{type:Boolean,value:!0},showAgree:Boolean,autoAgree:Boolean,disabled:Boolean,buttonDirection:{type:String,value:"horizontal"},validateType:{type:Object,value:{}},submitEvent:String,tipsEvent:String,debounceDuration:{type:Number,value:300}},data:{_isAgree:!1,_tipsShow:!1,_tipsMessage:"表单提交失败"},onLoad:function(){this.handleSubmit=r(this.handleSubmit,this.props.debounceDuration)},ready:function(){var e=this,t=this.properties,i=t.submitEvent,n=t.tipsEvent;i&&o.addEventListener(i,function(){return e.handleSubmit()}),n&&o.addEventListener(n,function(t){return e.showTopTips({message:t.target})})},detached:function(){var e=this.properties.submitEvent;e&&o.removeEventListener(e)},methods:{getFormField:function(e){var t=this.getFormFields();if(t&&t.length>0)return t.find(function(t){return n.standardPath(t.id)===n.standardPath(e)})},getFormFields:function(){return this.getRelationNodes("form-fields")},resetFormFiels:function(){(this.getFormFields()||[]).forEach(function(e){e.setData({_status:"",_statusMessage:""})})},noticeFormFiels:function(e){var t=this.getFormFields();this.showTopTips(e[0]),t.length>0&&t.forEach(function(t){e.forEach(function(e){n.standardPath(t.id)===n.standardPath(e.name)&&t.warn&&t.warn(e)})})},showTopTips:function(e){var t=this;console.log("顶部通知框: ",e),e&&this.setData({_tipsShow:!0,_tipsMessage:e.message||"表单输入有误"},function(){setTimeout(function(){t.setData({_tipsShow:!1,_tipsMessage:""})},3e3)})},handleTipsClose:function(e){this.setData({_tipsShow:e.detail.isShow})},handleSecondTap:function(e){this.triggerEvent("second",{event:e})},handleSubmit:function(e){var t=this,n=this.properties,o=n.model,r=n.rules,s=n.validateType;if(this.__loading__)return!1;console.log("g-form 提交表单：",o,r),this.__loading__=!0,i(o,r||{},s||{}).then(function(i){t.__loading__=!1,0===i.length?t.triggerEvent("submit",{validStatus:!0,value:o,formId:e&&e.detail&&e.detail.formId||"no-formID"}):(console.log(i),i=Array.from(new Set(i.map(function(e){return e.name}))).map(function(e){var t=void 0;return i.some(function(i){if(i.name===e)return t=i,!0}),t}),t.noticeFormFiels(i),t.triggerEvent("submit",{validStatus:!1,value:i}))}).catch(function(e){console.log("g-form error：",e),t.__loading__=!1})}}}); 
 			}); 	require("components/gsd-ui/g-form/index.js");
 		__wxRoute = 'components/gsd-ui/g-icon/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-icon/index.js';	define("components/gsd-ui/g-icon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{type:{type:String,value:void 0},spin:{type:Boolean,value:!1},color:{type:String,value:"",observer:function(e){var t=e;"primary"===e&&(t="#C02C38"),this.setData({_color:t})}},size:{type:Number,value:36}},data:{_color:""},methods:{}}); 
 			}); 	require("components/gsd-ui/g-icon/index.js");
 		__wxRoute = 'components/gsd-ui/g-index-list/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-index-list/index.js';	define("components/gsd-ui/g-index-list/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={_list:[],_keys:[],_isTouch:!1,_currentKey:"",_scrollTop:0,_scrollViewHeight:0};Component({__firstIndexTop__:0,__indexHeight__:0,__itemListTop__:[],__headerHeight__:0,options:{multipleSlots:!0},externalClasses:["component-class"],properties:{list:{type:Array,observer:function(){this.initLayout(),this.initList()},__type__:function(t){return t}}},data:t,ready:function(){this.initLayout()},methods:{initLayout:function(){var t=this,e=this.createSelectorQuery();e.selectViewport().boundingClientRect(),e.select(".list__header").boundingClientRect(),e.select(".index__list__key").boundingClientRect(),e.selectAll(".list__item").boundingClientRect(),e.exec(function(e){console.log(e);var i=e[0],s=e[1],_=e[2],n=e[3];if(_&&i&&n){var o=i.height-s.height;t.__firstIndexTop__=_.top,t.__indexHeight__=_.height,t.__headerHeight__=s.height,t.__itemListTop__=n.map(function(t){return t.top}),t.setData({_scrollViewHeight:o})}})},initList:function(){var t=this.properties.list,e=Array.from(new Set(t.map(function(t){return t.key}))),i=e.map(function(e){var i={key:e,list:[]};return t.forEach(function(t){t.key===e&&i.list.push(t)}),i});this.setData({_keys:e,_list:i})},handleTouch:function(t){var e=this.__firstIndexTop__,i=this.__indexHeight__,s=this.__itemListTop__,_=this.data,n=_._currentKey,o=_._keys,r=_._isTouch;if(t.touches.length>0&&e>0&&i>0){var h=t.touches[0].clientY,a=Math.ceil((h-e)/i)-1,c=o[a];c&&(this.setData({_scrollTop:s[a]-this.__headerHeight__}),n!==c&&(wx.vibrateShort(),this.setData({_currentKey:c}))),r||this.setData({_isTouch:!0})}},handleTouchEnd:function(t){this.setData({_isTouch:!1})},handleChoose:function(t){this.triggerEvent("choose",t.currentTarget.dataset.item)}}}),module.exports={}; 
 			}); 	require("components/gsd-ui/g-index-list/index.js");
 		__wxRoute = 'components/gsd-ui/g-input-map/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-input-map/index.js';	define("components/gsd-ui/g-input-map/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../behaviors/formController"),i=require("../utils/validator"),a=require("../../../utils/util");Component({relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},__value__:"",options:{multipleSlots:!0},behaviors:[t],properties:{iconDesc:{type:String,value:""},selectText:{type:String,value:"选择"},label:String,value:{type:String,value:"",observer:function(e){console.log(e,this.__value__),e!==this.__value__&&(this.__value__=e,this.setData({_value:e}),this.data._status&&this.resetStatus())}},placeholder:{type:String,value:"请输入"},validateTrigger:{type:String,value:"blur"},type:{type:String,value:"text"},password:Boolean,clearable:Boolean,disabled:Boolean,prepend:Boolean,append:Boolean,maxlength:{type:Number,value:140},cursorSpacing:{type:Number,value:0},focus:{type:Boolean,value:!1,observer:function(e){this.setData({_focus:e})}},confirmType:{type:String,value:"done"},confirmHold:Boolean,cursor:Number,selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},icon:{type:String,value:""}},data:{_status:"",_value:"",_statusMessage:"",_focus:!1},ready:function(){this.initSlots()},methods:{bindSelect:function(){var e=this;a.chooseLocation().then(function(t){t.address;e.triggerEvent("bindSelect",{address:t.address})})},initSlots:function(){this.createSelectorQuery().selectAll(".slot").boundingClientRect().exec(console.log)},resetStatus:function(){this.setData({_status:"",_statusMessage:""})},validateInput:function(){var t=this;if(!this.id)throw new Error("请提供需要校验的组件 ID");var a=e({},this.id,this.__value__),n=this.getFormNode();if(n){var r=n.properties,s=r.rules,l=void 0===s?{}:s,o=r.validateType;i(a,l,void 0===o?{}:o).then(function(e){console.log("form-field validate: ",a,l,e),e.length>0?t.warn(e[0]):t.resetStatus()})}},handleTap:function(e){this.setData({_focus:!0})},handleInput:function(e){this.data._status&&this.resetStatus(),this.__value__=e.detail.value,this.triggerEvent("input",e.detail),this.triggerEvent("change",e.detail)},handleFocus:function(e){this.setData({_focus:!0}),this.triggerEvent("focus",e.detail)},handleBlur:function(e){"blur"===this.properties.validateTrigger&&this.validateInput(),this.setData({_focus:!1}),this.triggerEvent("blur",e.detail),this.__value__!==e.detail.value&&(this.__value__=e.detail.value,this.triggerEvent("input",e.detail),this.triggerEvent("change",e.detail))},handleConfirm:function(e){this.triggerEvent("confirm",e.detail)},handleTapClear:function(e){var t=this.properties.disabled,i=this.data._focus;if(t)return!1;this.triggerEvent("input",{value:""}),this.triggerEvent("change",{value:""}),i||this.validateInput()},handleTapIcon:function(){var e=this.properties.icon;this.triggerEvent("iconTap",{type:e})}}}); 
 			}); 	require("components/gsd-ui/g-input-map/index.js");
 		__wxRoute = 'components/gsd-ui/g-input/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-input/index.js';	define("components/gsd-ui/g-input/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../behaviors/formController"),i=require("../utils/validator");Component({relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},__value__:"",options:{multipleSlots:!0},behaviors:[t],properties:{iconDesc:{type:String,value:""},label:String,value:{type:String,value:"",observer:function(e){console.log(e,this.__value__),e!==this.__value__&&(this.__value__=e,this.setData({_value:e}),this.data._status&&this.resetStatus())}},placeholder:{type:String,value:"请输入"},validateTrigger:{type:String,value:"blur"},type:{type:String,value:"text"},password:Boolean,clearable:Boolean,disabled:Boolean,prepend:Boolean,append:Boolean,maxlength:{type:Number,value:140},cursorSpacing:{type:Number,value:0},focus:{type:Boolean,value:!1,observer:function(e){this.setData({_focus:e})}},confirmType:{type:String,value:"done"},confirmHold:Boolean,cursor:Number,selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},icon:{type:String,value:""}},data:{_status:"",_value:"",_statusMessage:"",_focus:!1},ready:function(){this.initSlots()},methods:{initSlots:function(){this.createSelectorQuery().selectAll(".slot").boundingClientRect().exec(console.log)},resetStatus:function(){this.setData({_status:"",_statusMessage:""})},validateInput:function(){var t=this;if(!this.id)throw new Error("请提供需要校验的组件 ID");var a=e({},this.id,this.__value__),n=this.getFormNode();if(n){var r=n.properties,s=r.rules,l=void 0===s?{}:s,o=r.validateType;i(a,l,void 0===o?{}:o).then(function(e){console.log("form-field validate: ",a,l,e),e.length>0?t.warn(e[0]):t.resetStatus()})}},handleTap:function(e){this.setData({_focus:!0})},handleInput:function(e){this.data._status&&this.resetStatus(),this.__value__=e.detail.value,this.triggerEvent("input",e.detail),this.triggerEvent("change",e.detail)},handleFocus:function(e){this.setData({_focus:!0}),this.triggerEvent("focus",e.detail)},handleBlur:function(e){"blur"===this.properties.validateTrigger&&this.validateInput(),this.setData({_focus:!1}),this.triggerEvent("blur",e.detail),this.__value__!==e.detail.value&&(this.__value__=e.detail.value,this.triggerEvent("input",e.detail),this.triggerEvent("change",e.detail))},handleConfirm:function(e){this.triggerEvent("confirm",e.detail)},handleTapClear:function(e){var t=this.properties.disabled,i=this.data._focus;if(t)return!1;this.triggerEvent("input",{value:""}),this.triggerEvent("change",{value:""}),i||this.validateInput()},handleTapIcon:function(){var e=this.properties.icon;this.triggerEvent("iconTap",{type:e})}}}); 
 			}); 	require("components/gsd-ui/g-input/index.js");
 		__wxRoute = 'components/gsd-ui/g-map/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-map/index.js';	define("components/gsd-ui/g-map/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={_markers:[],_showLoad:!1},e=require("../../gsd-lib/utils/index").debounce,i=require("../../gsd-lib/event/index"),o=require("../../gsd-lib/map/index");Component({_mapContext:void 0,_lastLocation:"",_tempUpdate:void 0,_tempLocation:"",properties:{scale:{type:Number,value:16},position:{type:Object,value:{longitude:116.39694614768342,latitude:39.909666770172194}},activeId:{type:Number,observer:function(){this._setByActiveId()}},markers:{type:Array,observer:function(t){t.length>0&&this._buildMarkers()},__type__:function(t){return t}},loadUnit:{type:String,value:"district"}},data:t,ready:function(){this._mapContext=wx.createMapContext("map",this),this._initListener()},methods:{_initListener:function(){var t=this;i.addEventListener("g-map__setLastLocaton",function(e){t._lastLocation=e.target})},_setByActiveId:function(){this._buildMarkers()},_buildMarkers:function(){var t=this,e=this.properties,i=e.activeId,o=-1,a=e.markers.map(function(e,a){var n={id:e.id,title:e.name,longitude:e.position.longitude,latitude:e.position.latitude};return Number(i)===Number(e.id)?(console.log("找到激活标记",i),o=a,t._setActiveMarker(n)):t._setNormalMarker(n),n});o>=0&&(a=a.concat(a.splice(o,1))),this.setData({_markers:a})},_setActiveMarker:function(t){return t.iconPath="https://imgcache.gzonline.gov.cn/cos/active_marker_c790abc5.png",t.width=28,t.height=44,t.callout={content:t.title,color:"#ffffff",fontSize:12,bgColor:"#000000",display:"ALWAYS",padding:5,borderRadius:4},t},_setNormalMarker:function(t){return t.iconPath="https://imgcache.gzonline.gov.cn/cos/normal_marker_07b4d625.png",t.width=24,t.height=38,delete t.title,t},_checkLoadUnit:function(){var t=this.properties.loadUnit;if(!["province","city","district"].includes(t))throw Error("loadUnit 的参数必须是 province, city, district。\b你填写的是："+t)},handleRegionChange:e(function(t){var e=this,i=this.data._showLoad,a=this.properties.loadUnit;this._checkLoadUnit(),"start"!==t.type&&this._mapContext.getCenterLocation({success:function(n){o.reverseGeocoder({location:n,success:function(o){var r=o.result.ad_info[a],s={position:n,info:o.result.ad_info};console.log(e._lastLocation,r),e._lastLocation!==r?e._lastLocation?"end"!==t.type&&"updated"!==t.type||e.setData({_showLoad:!0}):(e.triggerEvent("mapUpdate",s),e._lastLocation=r):i&&e.setData({_showLoad:!1}),e._tempLocation=r,e._tempUpdate=s}})},fail:function(t){console.log("g-map error update:",t)}})},200),handleMarkerTap:function(t){this.triggerEvent("activeMarker",{id:t.markerId})},handleLocationTap:function(){this._mapContext.moveToLocation()},handleLoadTap:function(){this._lastLocation=this._tempLocation,this.triggerEvent("mapUpdate",this._tempUpdate),this.setData({_showLoad:!1})}}}),module.exports={}; 
 			}); 	require("components/gsd-ui/g-map/index.js");
 		__wxRoute = 'components/gsd-ui/g-modal/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-modal/index.js';	define("components/gsd-ui/g-modal/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{visible:{type:Boolean,value:!1,observer:function(e){this.setData({_visible:e})}},title:{type:String,value:"提示"},showCancel:{type:Boolean,value:!0},cancelText:{type:String,value:"取消"},cancelColor:{type:String,value:"#000000"},confirmText:{type:String,value:"确定"},confirmColor:{type:String,value:"#4293F4"},confirmInfo:{type:Boolean,value:!1}},data:{_visible:!1},methods:{handleCancel:function(){this.triggerEvent("cancel")},handleConfirm:function(){this.triggerEvent("confirm")}}}),module.exports={}; 
 			}); 	require("components/gsd-ui/g-modal/index.js");
 		__wxRoute = 'components/gsd-ui/g-msg/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-msg/index.js';	define("components/gsd-ui/g-msg/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../behaviors/primarySecondButton");Component({behaviors:[r],properties:{title:String,status:String,desc:String,primaryText:String,secondText:String,footerFixed:Boolean,supportor:String,sponsor:String},data:{}}); 
 			}); 	require("components/gsd-ui/g-msg/index.js");
 		__wxRoute = 'components/gsd-ui/g-nav-box-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-nav-box-item/index.js';	define("components/gsd-ui/g-nav-box-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/navigator");Component({behaviors:[e],externalClasses:["component-class"],properties:{disabled:{type:Boolean,value:!1}},data:{},methods:{handleTapItem:function(){this.properties.disabled||this.navigator()}}}); 
 			}); 	require("components/gsd-ui/g-nav-box-item/index.js");
 		__wxRoute = 'components/gsd-ui/g-nav-box/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-nav-box/index.js';	define("components/gsd-ui/g-nav-box/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/navigator");Component({behaviors:[e],externalClasses:["component-class"],properties:{navId:String,title:String,icon:String,disabled:Boolean,toText:String,footerText:String},data:{},methods:{handleTapTitle:function(e){this.properties.disabled||(this.navigator(),this.triggerEvent("tapTitle",e.currentTarget))}}}); 
 			}); 	require("components/gsd-ui/g-nav-box/index.js");
 		__wxRoute = 'components/gsd-ui/g-picker-view/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-picker-view/index.js';	define("components/gsd-ui/g-picker-view/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{dataList:Object,value:Number},data:{},methods:{bindChange:function(t){this.triggerEvent("change",t.detail)}}}); 
 			}); 	require("components/gsd-ui/g-picker-view/index.js");
 		__wxRoute = 'components/gsd-ui/g-picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-picker/index.js';	define("components/gsd-ui/g-picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/formController");Component({externalClasses:["dropdown-class"],behaviors:[e],relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},properties:{label:String,desc:{type:String,value:""},actionText:{type:String,value:"选择"},range:{type:Array,value:[],__type__:function(e){return e}},rangeKey:{type:String,value:"name",observer:function(e){this.setData({_rangeKey:e})}},value:{type:[String,Array],observer:function(e){this.initStatus(e),this.initValue()}},type:{type:String,value:"formItem"},mode:{type:String,value:"selector"},disabled:{type:Boolean},start:{type:String},end:{type:String},fields:{type:String,value:"day"},customItem:{type:String},splitKey:{type:String,value:",",observer:function(e){this.setData({_splitKey:e})}},placeholder:{type:String,value:"请选择",observer:function(e){this.properties.value||this.setData({_displayName:e})}}},data:{_readonly:!1,_rangeKey:"name",_splitKey:",",_displayName:"请选择",_valueIndex:void 0,_status:"",_statusMessage:"",_isEmpty:!0},ready:function(){var e=this.properties,t=e.mode,a=e.splitKey;"region"===t&&this.setData({_rangeKey:"",_splitKey:","===a?"":a}),"multiSelector"===t&&this.setData({_valueIndex:[]}),this.initValue()},methods:{isValueEmpty:function(e){var t=this.properties.mode;return void 0===e||""===e||("selector"===t||"date"===t||"time"===t||"none"===t?void 0===e||""===e:Array.isArray(e)&&0===e.length)},initStatus:function(e){var t=this.properties.placeholder;this.isValueEmpty(e)?this.setData({_status:"",_statusMessage:"",_isEmpty:!0,_displayName:t,_valueIndex:e||""}):this.setData({_isEmpty:!1,_status:"",_statusMessage:""})},initValue:function(){var e=this.properties,t=e.value,a=e.mode,i=e.splitKey;if(!Array.isArray(t)&&t||Array.isArray(t)&&t.length>0){if("none"===a)return void this.setData({_isEmpty:!1,_readonly:!0,_displayName:Array.isArray(t)?t.join(""):t});if("selector"===a||"multiSelector"===a)Array.isArray(t)?t.length>0&&this.setValue(t):this.setValue(t);else{var r="";"region"===a?Array.isArray(t)&&(r=t.join(i)):r=t,this.setData({_isEmpty:!1,_valueIndex:t,_displayName:r})}}},setValue:function(e){var t=this.properties,a=t.range,i=t.splitKey,r=this.data._rangeKey,n=void 0,s=void 0;if(Array.isArray(e)){var l=[];s=e.map(function(e,t){var i=void 0;return a[t].some(function(t,a){if(t.value===e)return i=a,l.push(t.displayName||t[r]),!1}),i}),n=l.join(i)}else a.some(function(t,a){if(t.value===e)return s=a,n=t.displayName||t[r]||t.value,!1});if(void 0===s)return console.warn("无法检索到选项，请检查传入的 value 值和 range 值是否对应"),!1;this.setData({_isEmpty:!1,_valueIndex:s,_displayName:n})},handleChange:function(e){this.initStatus();var t=this.properties.mode;"selector"===t||"multiSelector"===t?this.triggerRangeChange(e):"time"===t||"date"===t?this.triggerDateTimeChange(e):"region"===t&&this.triggerRegionChange(e)},triggerRangeChange:function(e){var t=e.detail.value,a=this.properties,i=a.range,r=a.splitKey,n=this.data._rangeKey,s=void 0,l=void 0,o=void 0;i.length<1||(Array.isArray(t)?(o=t.map(function(e,t){var a=i[t];return e=e||0,a[e]&&(a.displayName||a[e][n])}),l=t.map(function(e,t){var a=i[t];return e=e||0,a[e]&&a[e].value}),s=o.filter(function(e){return!!e}).join(r)):(s=i[t]._displayName||i[t][n],l=i[t].value),this.setData({_isEmpty:!1,_valueIndex:e.detail.value,_displayName:s}),this.triggerEvent("change",{value:l,index:t}))},triggerDateTimeChange:function(e){this.setData({_isEmpty:!1,_valueIndex:e.detail.value,_displayName:e.detail.value}),this.triggerEvent("change",e.detail)},triggerRegionChange:function(e){var t=new Set(e.detail.value),a=Array.from(t).filter(function(e){return-1===["县","省直辖县级行政区划"].indexOf(e)}).join(this.properties.splitKey);this.setData({_isEmpty:!1,_valueIndex:e.detail.value,_displayName:a}),this.triggerEvent("change",e.detail)},triggerColumnchange:function(e){var t=this.properties.range,a=this.data._valueIndex,i=e.detail,r=i.column,n=i.value,s=t[r][n].value;a[r]=n;for(var l=r+1;l<t.length;l++)a[l]=0;this.setData({_valueIndex:a}),this.triggerEvent("columnchange",{column:r,index:n,value:s})},triggerCancel:function(e){this.triggerEvent("cancel",e.detail)},handleActionTap:function(e){this.triggerEvent("actionTap",e.detail)}}}); 
 			}); 	require("components/gsd-ui/g-picker/index.js");
 		__wxRoute = 'components/gsd-ui/g-plate-number-keyboard/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-plate-number-keyboard/index.js';	define("components/gsd-ui/g-plate-number-keyboard/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({behaviors:[],properties:{visible:{type:Boolean,value:!1,observer:function(){var t=!0;this.data.plateNumber.length>=1&&(t=!1),this.setData({showProvince:t})}},showMain:{type:Boolean,value:!1},value:{type:String,value:"",observer:function(t){this.setData({plateNumber:t})}}},data:{provinceHeight:558,numberHieght:466,statusBarHeight:0,plateNumber:"",provinceList:{line1:["京","沪","鄂","湘","川","渝","粤","闽","晋","黑"],line2:["津","浙","豫","赣","贵","青","琼","宁","吉","蒙"],line3:["冀","苏","皖","桂","云","陕","甘","藏","新","辽"],line4:["鲁","澳","港","学","挂","领","试","超","练","警"],line5:["应急","民航"]},letterNumberList:{line1:[1,2,3,4,5,6,7,8,9,0],line2:["Q","W","E","R","T","Y","U","O","P","L"],line3:["A","S","D","F","G","H","J","K","N","M"],line4:["Z","X","C","V","B"]},showProvince:!0,animationData:{}},lifetimes:{attached:function(){},moved:function(){},detached:function(){}},attached:function(){},ready:function(){var t=this;this.setData({plateNumber:this.data.value?this.data.value:""}),wx.getSystemInfo({success:function(e){console.log(e.statusBarHeight),t.setData({statusBarHeight:e.statusBarHeight})},failure:function(){}})},pageLifetimes:{show:function(){},hide:function(){},resize:function(){}},methods:{_clickChangePlane:function(){this.setData({showProvince:!this.data.showProvince})},_closeKeyboard:function(t){this.setData({visible:!1}),this.triggerEvent("closeKeyBoard",!1)},_handleResult:function(){var t={value:this.data.plateNumber};this.triggerEvent("change",t)},_handleClick:function(t){this.data.showProvince&&this.setData({showProvince:!1});var e=this.data.plateNumber,a=t.currentTarget.dataset.text;e.length<10&&(this.setData({plateNumber:e+a}),this._handleResult())},_handleDelete:function(){var t=this.data.plateNumber;if((t=t.substring(0,t.length-1)).length>=0){var e=!0;t.length>=1&&(e=!1),this.setData({showProvince:e,plateNumber:t}),this._handleResult()}},_preventDefault:function(t){}}}); 
 			}); 	require("components/gsd-ui/g-plate-number-keyboard/index.js");
 		__wxRoute = 'components/gsd-ui/g-poplayer/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-poplayer/index.js';	define("components/gsd-ui/g-poplayer/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../gsd-lib/event/index");Component({externalClasses:["my-class"],properties:{visible:{type:Boolean,observer:function(t,i){t!==i&&(t?e.dispatch("g-textarea__hidden"):setTimeout(function(){e.dispatch("g-textarea__show")},50),this.setData({_visible:t}))}},direction:{type:String,value:"bottom"},maxWidth:{type:String,value:"50%"}},data:{_visible:!1,__levelDirection:!1},ready:function(){var e=this.properties.direction;"left"!==e&&"right"!==e||this.setData({__levelDirection:!0})},methods:{handleCloseSelf:function(e){this.triggerEvent("close",{visible:!1})}}}); 
 			}); 	require("components/gsd-ui/g-poplayer/index.js");
 		__wxRoute = 'components/gsd-ui/g-popover/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-popover/index.js';	define("components/gsd-ui/g-popover/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(){function t(t,e){var i=[],r=!0,o=!1,n=void 0;try{for(var h,l=t[Symbol.iterator]();!(r=(h=l.next()).done)&&(i.push(h.value),!e||i.length!==e);r=!0);}catch(t){o=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw n}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=(wx.getSystemInfoSync().windowHeight,wx.getSystemInfoSync().windowWidth,function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",r=t(e,2),o=r[0],n=r[1],h=(n.width-o.width)/2,l=(n.height-o.height)/2;switch(i){case"top":return{top:-o.height-10,left:h,right:0};case"topLeft":return{top:-o.height-10,left:2,right:0};case"topRight":return{top:-o.height-10,left:0,right:2};case"bottom":return{top:n.height+10,left:h,right:0};case"bottomLeft":return{top:n.height+10,left:2,right:0};case"bottomRight":return{top:n.height+10,left:0,right:2};case"left":return{top:l,left:-o.width-10,right:0};case"leftTop":return{top:2,left:-o.width-10,right:0};case"leftBottom":return{top:n.height-o.height,left:-o.width-10,right:0};case"right":return{top:l,left:n.width+10,right:0};case"rightTop":return{top:2,left:n.width+10,right:0};case"rightBottom":return{top:n.height-o.height,left:n.width+10,right:0};default:return{top:-o.height-10,left:h,right:0}}});Component({options:{multipleSlots:!0},properties:{content:{type:String,value:"tips"},placement:{type:String,value:"top"},visible:{type:Boolean,value:!1},position:{type:String,value:"static"}},data:{_popVisible:!1,_popoStyle:""},ready:function(){this.data.visible&&this.onShow()},methods:{onShow:function(){var t=this,i=wx.createSelectorQuery().in(this);i.select(".popBox").boundingClientRect(),i.select(".popoverItem").boundingClientRect(),i.exec(function(i){if(!i.filter(function(t){return!t}).length){var r=e(i,t.data.placement),o="\n            top: "+r.top+"px;\n            "+(r.left?"left: "+r.left+"px;":"")+"\n            "+(r.right?"right: "+r.right+"px;":"")+"\n          ";t.setData({_popoStyle:o,_popVisible:!0})}})},onTap:function(){var t=this;this.data.visible?this.setData({visible:!1,_popVisible:!1}):this.setData({visible:!0,_popVisible:!1},function(){t.onShow()})}}}); 
 			}); 	require("components/gsd-ui/g-popover/index.js");
 		__wxRoute = 'components/gsd-ui/g-preview-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-preview-item/index.js';	define("components/gsd-ui/g-preview-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/icon");Component({behaviors:[e],relations:{"../g-preview/index":{type:"parent"}},properties:{label:String,textAlign:String,type:{type:String,value:"normal"},breakWord:{type:Boolean,value:!1}},data:{_textAlign:"left",_labelWidth:220},methods:{setPreviewItem:function(e){this.setData(e)}}}); 
 			}); 	require("components/gsd-ui/g-preview-item/index.js");
 		__wxRoute = 'components/gsd-ui/g-preview/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-preview/index.js';	define("components/gsd-ui/g-preview/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-preview-item/index":{type:"child"}},properties:{type:{type:String,value:"normal"},textAlign:{type:String,value:"left"},labelWidth:Number},data:{},ready:function(){this.setAllItemsTextAlign()},methods:{getPreviewItems:function(){return this.getRelationNodes("../g-preview-item/index")},setAllItemsTextAlign:function(){var e=this;this.getPreviewItems().forEach(function(t){t.setPreviewItem({_textAlign:e.properties.textAlign,_labelWidth:e.properties.labelWidth})})}}}); 
 			}); 	require("components/gsd-ui/g-preview/index.js");
 		__wxRoute = 'components/gsd-ui/g-radio-group/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-radio-group/index.js';	define("components/gsd-ui/g-radio-group/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/formCheck"),r=require("../behaviors/formController");Component({behaviors:[e,r],relations:{"../g-form/index":{type:"ancestor"}}}); 
 			}); 	require("components/gsd-ui/g-radio-group/index.js");
 		__wxRoute = 'components/gsd-ui/g-region-picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-region-picker/index.js';	define("components/gsd-ui/g-region-picker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t;!function(t){t[t.province=1]="province",t[t.city=2]="city",t[t.district=3]="district"}(t||(t={}));var e={_range:[]},n=!1;Component({_regionData:void 0,_retry:3,properties:{visible:Boolean,type:{type:String,value:"district",observer:function(){this.initRegionData()}},value:{type:Array,value:[],observer:function(){this.initRegionData()},__type__:function(t){return t}},includes:{type:Array,observer:function(){this.initRegionData()},__type__:function(t){return t}},excludes:{type:Array,observer:function(){this.initRegionData()},__type__:function(t){return t}}},data:e,ready:function(){this.initRegionData()},methods:{initRegionData:function(){var t=this;return this.getStorage("region-data").then(function(e){t._regionData=e,t.initPicker()}).catch(function(e){console.log("init region data error",e),t.getRegionData().then(function(e){t._regionData=e,t.initPicker()})})},initPicker:function(){var t=this.properties,e=(t.type,t.value);if(console.log("value",e),!e.length){var n=this.getDataByParentCode();this.setData({_range:[{title:"省份",data:n}]})}},getRange:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],r=this.properties,a=r.type,o=r.value,s=t[a];if(n+1<parseInt(s)){var c=this.getDataByParentCode(i,n+1);e[n+1]=c;var u=this.findItemByName(c,o[n+1]),g=u&&u.code||c[0].code;e=this.getRange(e,n+1,g)}return e},getDataByParentCode:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.properties,i=n.includes,r=n.excludes;return this._regionData[e].filter(function(n){return!(e>0)||n.parent_code===t}).filter(function(t){return!i[e]||i[e].some(function(e){return t.name===e})}).filter(function(t){return!r[e]||r[e].every(function(e){return t.name!==e})})},findItemByName:function(t,e){var n=void 0;return t.some(function(t){if(-1!==t.name.indexOf(e))return n=t,!0}),n},getRegionData:function(){var t=this;return n=!0,this._retry=3,Promise.all([this.$request("https://fingertip-static.gdbs.gov.cn/static/city/1.json"),this.$request("https://fingertip-static.gdbs.gov.cn/static/city/2.json"),this.$request("https://fingertip-static.gdbs.gov.cn/static/city/3.json")]).then(function(e){return n=!1,t.setStorage("region-data",e).catch(function(t){console.error(t)}),e}).catch(function(e){n=!1,t._retry>0?(t.getRegionData(),t._retry-=1):wx.showToast({title:"服务繁忙",icon:"none"})})},handleColumnChange:function(e){var n=this.properties.type,i=this.data._range,r=e.detail,a=r.index,o=r.item;if(parseInt(a)<parseInt(t[n])-1){var s=this.getDataByParentCode(o.code,a+1);i[a+1]={title:a+1===1?"城市":"区/县",data:s};var c=i.slice(0,a+2);this.setData({_range:c})}else this.handleClose()},handleChange:function(e){var n=this.properties.type,i=t[n];e.detail.value.length===i&&this.triggerEvent("change",e.detail)},checkSpecial:function(t){return["4419","4420"].some(function(e){return-1!==t.indexOf(e)})},getStorage:function(t){return new Promise(function(e,n){wx.getStorage({key:t,success:function(t){e(t.data)},fail:function(t){n(t)}})})},setStorage:function(t,e){return new Promise(function(n,i){wx.setStorage({key:t,data:e,success:function(t){n(t)},fail:function(t){i(t)}})})},handleClose:function(){this.triggerEvent("close")},$request:function(t){return new Promise(function(e,n){wx.request({url:t,success:function(t){e(t.data)},fail:function(t){n(t)}})})}}}),module.exports={}; 
 			}); 	require("components/gsd-ui/g-region-picker/index.js");
 		__wxRoute = 'components/gsd-ui/g-region/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-region/index.js';	define("components/gsd-ui/g-region/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../gsd-lib/utils/index").debounce,e={range:[],valueIndex:[]};Component({_regionData:void 0,_retry:3,properties:{level:{type:Number,value:3},value:{type:Array,value:[],observer:function(){this._regionData?this.initPicker():this.initRegionData()},__type__:function(t){return t}},type:{type:String,value:""},includes:{type:Array,observer:function(){this._regionData?this.initPicker():this.initRegionData()},__type__:function(t){return t}},excludes:{type:Array,observer:function(){this._regionData?this.initPicker():this.initRegionData()},__type__:function(t){return t}}},data:e,methods:{initRegionData:function(){var t=this;return this.getStorage("region-data").then(function(e){t._regionData=e,t.initPicker()}).catch(function(e){console.log("init region data error",e),t.getRegionData().then(function(e){t._regionData=e,t.initPicker()})})},initPicker:function(){var t=this.properties.value,e=this.data.range,n="",i=this.getDataByParentCode("",0);if(t.length>0){var r=this.findItemByName(i,t[0]);n=r?r.code:i[0].code}else n=i[0].code;e[0]=i,e=this.getRange(e,0,n),this.setData({range:e}),t.length>0&&this.setValueIndex()},getRange:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],i=this.properties,r=i.level,a=i.value;if(e+1<r){var o=this.getDataByParentCode(n,e+1);t[e+1]=o;var s=this.findItemByName(o,a[e+1]),u=s&&s.code||o[0].code;t=this.getRange(t,e+1,u)}return t},getDataByParentCode:function(t,e){var n=this.properties,i=n.includes,r=n.excludes;return this._regionData[e].filter(function(n){return!(e>0)||n.parent_code===t}).filter(function(t){return!i[e]||i[e].some(function(e){return t.name===e})}).filter(function(t){return!r[e]||r[e].every(function(e){return t.name!==e})})},setValueIndex:function(){var t=this.properties.value,e=this.data.range,n=t.map(function(t,n){var i=(e[n]||[]).map(function(t){return t.name}).indexOf(t);return-1===i?0:i});this.setData({valueIndex:n})},findItemByName:function(t,e){var n=void 0;return t.some(function(t){if(-1!==t.name.indexOf(e))return n=t,!0}),n},getRegionData:function(){var t=this;return this._retry=3,Promise.all([this.$request("https://fingertip-static.gdbs.gov.cn/static/city/1.json"),this.$request("https://fingertip-static.gdbs.gov.cn/static/city/2.json"),this.$request("https://fingertip-static.gdbs.gov.cn/static/city/3.json")]).then(function(e){return t.setStorage("region-data",e).catch(function(t){console.error(t)}),e}).catch(function(e){t._retry>0?(t.getRegionData(),t._retry-=1):wx.showToast({title:"服务繁忙",icon:"none"})})},handleColumnChange:t(function(t){var e=this.properties.level,n=t.detail,i=n.column,r=n.value,a=this.data,o=a.range,s=a.valueIndex,u=o[i][r].code,c=this.getRange(o,i,u);s[i]=r;for(var g=i+1;g<e;g++)s[g]=0;this.setData({range:c,valueIndex:s})},100),handleChange:function(t){var e=t.detail.value,n=this.data.range,i=e.map(function(t,e){return t=t||0,n[e][t]});this.triggerEvent("change",{value:i})},checkSpecial:function(t){return["4419","4420"].some(function(e){return-1!==t.indexOf(e)})},getStorage:function(t){return new Promise(function(e,n){wx.getStorage({key:t,success:function(t){e(t.data)},fail:function(t){n(t)}})})},setStorage:function(t,e){return new Promise(function(n,i){wx.setStorage({key:t,data:e,success:function(t){n(t)},fail:function(t){i(t)}})})},$request:function(t){return new Promise(function(e,n){wx.request({url:t,success:function(t){e(t.data)},fail:function(t){n(t)}})})}}}); 
 			}); 	require("components/gsd-ui/g-region/index.js");
 		__wxRoute = 'components/gsd-ui/g-search/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-search/index.js';	define("components/gsd-ui/g-search/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../gsd-lib/event/index");Component({properties:{value:String,autofocus:Boolean,placeholder:{type:String,value:"搜索"},fill:Boolean,withText:Boolean,needChoose:Boolean,disabled:{type:Boolean,value:!1}},data:{_isSearch:!1,_focus:!1,_value:""},ready:function(){this.init(),this.initListener()},detached:function(){this.removeListener()},methods:{initListener:function(){var t=this;e.addEventListener("g-search__blur",function(){t.setData({_isSearch:!1,_focus:!1})},this),e.addEventListener("g-search__focus",function(){t.setData({_isSearch:!0,_focus:!0})},this)},removeListener:function(){var t=this;e.removeSingleEventListener("g-search__blur",function(){t.setData({_isSearch:!1,_focus:!1})},this),e.removeSingleEventListener("g-search__focus",function(){t.setData({_isSearch:!0,_focus:!0})},this)},init:function(){var e=this.properties.autofocus;e&&this.setData({_isSearch:e,_focus:e})},handleInput:function(e){this.setData({_value:e.detail.value,value:e.detail.value}),this.triggerEvent("change",e.detail)},handleConfirm:function(e){this.setData({_focus:!1}),this.triggerEvent("confirm",e.detail)},handleInputFocus:function(e){this.setData({_isSearch:!0,_focus:!0}),this.triggerEvent("focus",e.detail)},handleBlur:function(e){this.setData({_focus:!1}),this.triggerEvent("blur",e.detail)},handleClear:function(e){this.setData({_focus:!0,_value:"",value:""}),this.triggerEvent("change",{value:""})},handleCancel:function(e){this.setData({_isSearch:!1,_value:"",value:""}),this.triggerEvent("cancel",e.detail)}}}); 
 			}); 	require("components/gsd-ui/g-search/index.js");
 		__wxRoute = 'components/gsd-ui/g-select/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-select/index.js';	define("components/gsd-ui/g-select/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{dataList:Object,_current:Number,width:{type:String,value:"33.33%"}},externalClasses:["my-class-btn"],data:{},methods:{handleTap:function(t){var e=t.currentTarget.dataset.index;this.setData({_current:e}),this.triggerEvent("selected",t.currentTarget.dataset.index)}}}); 
 			}); 	require("components/gsd-ui/g-select/index.js");
 		__wxRoute = 'components/gsd-ui/g-selector/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-selector/index.js';	define("components/gsd-ui/g-selector/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{dataList:{type:Array,value:[]},visible:{type:Boolean,value:!0},cancelText:{type:String,value:"取消"},cancelStyle:{type:String,value:""},confirmText:{type:String,value:"确定"},confirmStyle:{type:String,value:""},selectorHeaderStyle:{type:String,value:""},indicatorStyle:{type:String,value:""},maskStyle:{type:String,value:""},itemStyle:{type:String,value:""},defaultValue:{type:Array,value:[]}},data:{selectedVal:[]},methods:{bindChange:function(e){var t=this,a=e.detail.value.map(function(e,a){return t.data.dataList[a][e]});this.setData({selectedVal:a})},handleClose:function(){this.setData({visible:!1})},confirm:function(){var e=this.data.selectedVal;this.triggerEvent("select",{value:e.length>0?e:this.defaultSelectedVal()}),this.handleClose()},defaultSelectedVal:function(){var e=this.properties.defaultValue;return this.data.dataList.map(function(t,a){return t[e[a]||0]})}}}); 
 			}); 	require("components/gsd-ui/g-selector/index.js");
 		__wxRoute = 'components/gsd-ui/g-switch/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-switch/index.js';	define("components/gsd-ui/g-switch/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["my-class"],properties:{value:Boolean,label:String,desc:String,disabled:Boolean},data:{},methods:{handleChange:function(){this.properties.disabled||(wx.vibrateShort(),this.triggerEvent("change",{value:!this.properties.value}))}}}); 
 			}); 	require("components/gsd-ui/g-switch/index.js");
 		__wxRoute = 'components/gsd-ui/g-tab-pane/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-tab-pane/index.js';	define("components/gsd-ui/g-tab-pane/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-tabs/index":{type:"parent"}},properties:{tab:{type:String},key:String},data:{tabPaneStyle:""},methods:{calcSelfStyle:function(t){var e="left:"+750*t+"rpx;";this.setData({tabPaneStyle:e})},getCurrentStyle:function(){var t=this;return new Promise(function(e,n){t.createSelectorQuery().select(".tab-pane").boundingClientRect().exec(function(t){e(t&&t[0])})})}}}); 
 			}); 	require("components/gsd-ui/g-tab-pane/index.js");
 		__wxRoute = 'components/gsd-ui/g-table/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-table/index.js';	define("components/gsd-ui/g-table/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:Object,columns:Object,scroll:Boolean},data:{},ready:function(){console.log(this.properties)},methods:{}}); 
 			}); 	require("components/gsd-ui/g-table/index.js");
 		__wxRoute = 'components/gsd-ui/g-table/table-body/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-table/table-body/index.js';	define("components/gsd-ui/g-table/table-body/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:Object,columns:Object},data:{},ready:function(){console.log(this.properties)},methods:{}}); 
 			}); 	require("components/gsd-ui/g-table/table-body/index.js");
 		__wxRoute = 'components/gsd-ui/g-table/table-header/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-table/table-header/index.js';	define("components/gsd-ui/g-table/table-header/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:Object,columns:Object,scroll:Boolean},data:{},ready:function(){console.log(this.properties)},methods:{}}); 
 			}); 	require("components/gsd-ui/g-table/table-header/index.js");
 		__wxRoute = 'components/gsd-ui/g-table/table-scroll/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-table/table-scroll/index.js';	define("components/gsd-ui/g-table/table-scroll/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:Object,columns:Object,scroll:Boolean},data:{},ready:function(){console.log(this.properties)},methods:{}}); 
 			}); 	require("components/gsd-ui/g-table/table-scroll/index.js");
 		__wxRoute = 'components/gsd-ui/g-tabs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-tabs/index.js';	define("components/gsd-ui/g-tabs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../gsd-lib/event/index");Component({relations:{"../g-tab-pane/index":{type:"child"}},externalClasses:["tab-header-class"],properties:{activeKey:{type:String,observer:function(t){this.resetStyle(),this.scrollToActive()}},position:{type:String,value:"fixed"},animated:{type:Boolean,value:!0},scroll:{type:Boolean,value:!1},align:String,paneHeight:String},data:{_tabs:[],_sliderStyle:"",_tabContentStyle:"",_scrollLeft:0},ready:function(){var t=this;this.initListener(),this.initTabs().then(function(){return t.saveInitTabItems()}).then(function(){t.resetStyle(),t.scrollToActive()})},detached:function(){this.removeListener()},methods:{initListener:function(){var e=this;t.addEventListener("g-tabs__resetStyle",function(){e.resetStyle()},this),t.addEventListener("g-tabs__init",function(){e.initTabs().then(function(){return e.saveInitTabItems()}).then(function(){e.resetStyle(),e.scrollToActive()})})},removeListener:function(){var e=this;t.removeSingleEventListener("g-tabs__resetStyle",function(){e.resetStyle()},this)},getTabPanes:function(){return this.getRelationNodes("../g-tab-pane/index")},initTabs:function(){var t=this;return new Promise(function(e){var n=t.getTabPanes().map(function(t,e){return t.calcSelfStyle(e),t.properties});t.setData({_tabs:n},function(){return e(!0)})})},saveInitTabItems:function(){var t=this;return new Promise(function(e,n){t.createSelectorQuery().selectAll(".tabs__item__wrap").boundingClientRect(function(n){n.forEach(function(e,n){t.data._tabs[n].rect=e}),t.setData({_tabs:t.data._tabs},function(){e(!0)})}).exec()})},resetStyle:function(){var t=this;this.getCurrentTabItem().then(function(e){var n=e.node,i=e.index,r=e.scroll;n&&t.calcSliderStyle(n,r),-1!==i&&t.setTapPaneStyle(i)})},setTapPaneStyle:function(t){var e=this,n=this.createSelectorQuery(),i=this.getTabPanes();n.select("#tab-header").boundingClientRect(function(n){i[t].getCurrentStyle().then(function(i){e.calcTabContentStyle(t,i.height,n.height)})}).exec()},getCurrentTabItem:function(){var t=this;return new Promise(function(e,n){t.createSelectorQuery().selectAll(".tabs__item").fields({size:!0,rect:!0,scrollOffset:!0}).exec(function(n){var i=t.properties,r=i.activeKey,a=i.scroll,s=t.data._tabs.findIndex(function(t){return t.key===r}),o=void 0;-1!==s&&(o=n[0]&&n[0][s]),a?t.getScrollView().then(function(t){e({node:o,scroll:t,index:s})}):e({node:o,index:s})})})},getScrollView:function(){var t=this;return new Promise(function(e,n){t.createSelectorQuery().select("#tabs-scroll").scrollOffset().exec(function(t){var n=t&&t[0];e(n)})})},calcSliderStyle:function(t,e){var n=this.properties,i=n.animated,r=n.scroll,a={width:t.width+8,left:t.left-4};r&&(a.left=e.scrollLeft+a.left);var s="width:"+a.width+"px;left:"+a.left+"px;";i&&(s+="transition: all .45s;"),this.setData({_sliderStyle:s})},calcTabContentStyle:function(t,e,n){var i=this.properties,r=i.animated,a=i.paneHeight,s=i.position,o="margin-left: -"+100*t+"%;";r&&(o+="transition: margin-left .45s;"),o+=a?"height:"+a+"rpx;":"height:"+e+"px;","fixed"===s&&(o+="margin-top:"+n+"px;"),this.setData({_tabContentStyle:o})},handleTabItemTab:function(t){var e=t.currentTarget.dataset.key,n=this.properties.activeKey;if(e!==n){var i=this.data._tabs,r=i.findIndex(function(t){return t.key===e});this.resetStyle(),this.triggerEvent("change",{value:i[r]})}},scrollToActive:function(){var t=this.properties,e=t.activeKey;if(t.scroll){var n=this.data._tabs.find(function(t){return t.key===e});n&&n.rect&&this.setData({_scrollLeft:n.rect.left-150})}}}}); 
 			}); 	require("components/gsd-ui/g-tabs/index.js");
 		__wxRoute = 'components/gsd-ui/g-textarea/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-textarea/index.js';	define("components/gsd-ui/g-textarea/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../behaviors/formController"),a=require("../../gsd-lib/event/index"),i=require("../utils/validator");Component({externalClasses:["action-class"],options:{multipleSlots:!0},__value__:"",behaviors:[t],relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},properties:{value:{type:String,observer:function(e){e!==this.__value__&&(this.__value__=e,this.setData({_value:e}))}},placeholder:{type:String,value:"请输入内容"},label:String,disabled:Boolean,maxlength:{type:Number,value:140},autoFocus:{type:Boolean,value:!1},focus:{type:Boolean,value:!1,observer:function(e){this.setData({_focus:e})}},height:{type:Number,value:144},autoHeight:{type:Boolean,value:!1},cursorSpacing:{type:Number,value:72},cursor:{type:Number,value:0},showConfirmBar:{type:Boolean,value:!1},selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},showCount:Boolean},data:{_hideElement:!1,_value:"",_status:"",_statusMessage:"",_focus:!1,_platform:wx.getSystemInfoSync().platform.toLowerCase()},ready:function(){this.initListener()},detached:function(){this.removeListener()},methods:{initListener:function(){var e=this;a.addEventListener("g-textarea__hidden",function(){e.setData({_hideElement:!0})},this),a.addEventListener("g-textarea__show",function(){e.setData({_hideElement:!1})},this)},removeListener:function(){var e=this;a.removeSingleEventListener("g-textarea__hidden",function(){e.setData({_hideElement:!0})},this),a.removeSingleEventListener("g-textarea__show",function(){e.setData({_hideElement:!1})},this)},getFormNode:function(){var e=this.getRelationNodes("../g-form/index");return e&&e[0]},resetStatus:function(){this.setData({_status:"",_statusMessage:""})},handleTap:function(){this.setData({_focus:!0})},validateInput:function(){var t=this;if(!this.id)throw new Error("请提供需要校验的组件 ID");var a=e({},this.id,this.__value__),n=this.getFormNode(),s=n&&n.properties&&n.properties.rules;s&&i(a,s).then(function(e){console.log("form-field validate: ",a,s,e),e.length>0?t.warn(e[0]):t.resetStatus()})},handleInput:function(e){this.data._status&&this.resetStatus(),this.__value__=e.detail.value,this.setData({_value:e.detail.value}),this.triggerEvent("input",e.detail),this.triggerEvent("change",e.detail)},handleFocus:function(e){console.log("textarea focus",e),this.triggerEvent("focus",e.detail)},handleBlur:function(e){console.log("textarea blur",e),this.validateInput(),this.triggerEvent("blur",e.detail)},handleConfirm:function(e){this.triggerEvent("confirm",e.detail)}}}); 
 			}); 	require("components/gsd-ui/g-textarea/index.js");
 		__wxRoute = 'components/gsd-ui/g-timeline-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-timeline-item/index.js';	define("components/gsd-ui/g-timeline-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-timeline/index":{type:"parent"}},properties:{status:{type:String,value:"normal"}},data:{_isLast:!1},methods:{}}); 
 			}); 	require("components/gsd-ui/g-timeline-item/index.js");
 		__wxRoute = 'components/gsd-ui/g-timeline/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-timeline/index.js';	define("components/gsd-ui/g-timeline/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({relations:{"../g-timeline-item/index":{type:"child",linked:function(){console.log("insert"),this.setTimelineItemLast()},unlinked:function(){console.log("changed"),this.setTimelineItemLast()}}},properties:{pending:{type:Boolean}},ready:function(){this.setTimelineItemLast()},data:{},methods:{getTimelineItems:function(){return this.getRelationNodes("../g-timeline-item/index")},setTimelineItemLast:function(){this.getTimelineItems().forEach(function(e,t,i){t===i.length-1?e.setData({_isLast:!0}):e.setData({_isLast:!1})})}}}); 
 			}); 	require("components/gsd-ui/g-timeline/index.js");
 		__wxRoute = 'components/gsd-ui/g-tips/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-tips/index.js';	define("components/gsd-ui/g-tips/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/navigator");Component({_timer:void 0,behaviors:[e],properties:{status:{type:String,value:"default"},isShow:{type:Boolean,value:!0,observer:function(e){this.setData({_isShow:e})}},closeable:Boolean,access:Boolean,position:String,loop:Boolean,duration:Number,tipsStyle:String,loopDuration:Number},data:{_isShow:!0},ready:function(){this.initTimer()},methods:{initTimer:function(){var e=this,t=this.properties.duration;t>0&&(clearTimeout(this._timer),this._timer=setTimeout(function(){e.handleClose()},1e3*t))},handleClose:function(){this.setData({_isShow:!1}),this.triggerEvent("close",{isShow:!1})},handleTap:function(){this.navigator()}}}); 
 			}); 	require("components/gsd-ui/g-tips/index.js");
 		__wxRoute = 'components/gsd-ui/g-title/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-title/index.js';	define("components/gsd-ui/g-title/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{title:String,total:Number,current:Number,status:String},data:{},methods:{}}); 
 			}); 	require("components/gsd-ui/g-title/index.js");
 		__wxRoute = 'components/gsd-ui/g-upload/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-upload/index.js';	define("components/gsd-ui/g-upload/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../behaviors/formController");Component({__value__:[],behaviors:[e],relations:{"../g-form-item/index":{type:"child"},"../g-form/index":{type:"ancestor"}},properties:{label:String,action:String,value:{type:Array,value:[],__type__:function(e){return e},observer:function(e,t){e&&(this.__value__=e)}},maxSize:Number,name:{type:String,name:"file"},header:Object,formData:Object,maxNumber:Number,showCount:Boolean,sizeType:{type:Array,value:["original","compressed"],__type__:function(e){return e}},sourceType:{type:Array,value:["album","camera"],__type__:function(e){return e}}},data:{},methods:{chooseImage:function(){var e=this,t=this.properties,r=t.value,a=t.sizeType,n=t.sourceType,i=t.maxNumber,o=t.maxSize;if(i>0&&r.length>=i)return wx.showModal({title:"温馨提示",content:"图片已超过上限",showCancel:!1}),!1;var u=i-r.length;wx.chooseImage({count:u,sizeType:a,sourceType:n,success:function(t){console.log("选择图片",t);var a=t.tempFiles.map(function(e){var t={filePath:e.path,status:"uploading",progress:0,data:{}};return o&&e.size>o&&(t.status="maxSize"),t}),n=r.concat(a);e.__value__=n,e.triggerEvent("change",{value:n}),e.uploadFiles(a.filter(function(e){return"uploading"===e.status}))},fail:function(e){console.error(e)}})},uploadFiles:function(e){var t=this,r=e.map(function(e){var r=Object.assign({},e);return t._upload(e).then(function(e){return console.log("上传",e),200===e.statusCode?(r.data=e.data,r.status="done",r.progress=100):(r.data=e.data,r.status="error"),r}).catch(function(e){return r.data=e.message,r.status="error",r})});Promise.all(r).then(function(e){return t.__value__=t.__value__.map(function(t){return e.some(function(e){return e.filePath===t.filePath&&(t=e,!0)}),t}),t.__value__}).then(function(e){t.triggerEvent("change",{value:e})}).catch(function(e){console.error(e)})},_upload:function(e){var t=this;return new Promise(function(r,a){var n=t.properties,i=n.action,o=n.name,u=n.formData,s=n.header;return wx.uploadFile({url:i,filePath:e.filePath,name:o,formData:u,header:s,success:function(e){r(e)},fail:function(e){a(e)}})})},removeFile:function(e){var t=e.currentTarget.dataset.item;this.__value__=this.__value__.filter(function(e){return e.filePath!==t.filePath}),this.triggerEvent("remove",{value:t}),this.triggerEvent("change",{value:this.__value__})},handleClickImage:function(e){var t=e.currentTarget.dataset.item,r=this.properties.value;if("error"===t.status){var a=r.map(function(e){return e.filePath===t.filePath?(t.status="uploading",t):e});this.triggerEvent("change",{value:a}),this.uploadFiles([t])}else this.previewImage(t.filePath)},previewImage:function(e){var t=this.properties.value;wx.previewImage({current:e,urls:t.map(function(e){return e.filePath})})}}}); 
 			}); 	require("components/gsd-ui/g-upload/index.js");
 		__wxRoute = 'components/gsd-ui/g-wrapper/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gsd-ui/g-wrapper/index.js';	define("components/gsd-ui/g-wrapper/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{multipleSlots:!0},externalClasses:["component-class","title-class"],properties:{title:String,xrequired:String,disabled:{type:Boolean,value:!1}},data:{},methods:{}}); 
 			}); 	require("components/gsd-ui/g-wrapper/index.js");
 		__wxRoute = 'components/home-tips/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/home-tips/index.js';	define("components/home-tips/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({slot:!0,properties:{status:{type:String,value:"info"},to:String,access:Boolean,loopDuration:Number,loop:Boolean,text:{type:String,value:"查看"}},data:{},methods:{}}); 
 			}); 	require("components/home-tips/index.js");
 		__wxRoute = 'components/hover-button/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/hover-button/index.js';	define("components/hover-button/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["add_icon"],options:{styleIsolation:"shared"},properties:{imgSrc:{type:String,value:""},pdfUrl:{type:String,value:""},fileName:{type:String,value:""}},data:{},methods:{adddetial:function(){var e=this.data.pdfUrl,t=this.data.fileName,a=wx.env.USER_DATA_PATH+"/"+t;wx.showLoading(),wx.downloadFile({url:e,filePath:a,success:function(e){var t=e.filePath;wx.openDocument({filePath:t,fileType:"pdf",success:function(){wx.hideLoading()}})}})}}}); 
 			}); 	require("components/hover-button/index.js");
 		__wxRoute = 'components/lazy-load/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/lazy-load/index.js';	define("components/lazy-load/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{images:{type:Array,required:!0}},data:{placeholder:""},lifetimes:{ready:function(){var e=this,t=this.data.images;for(var i in t)!function(i){wx.createIntersectionObserver(e).relativeToViewport({bottom:20}).observe(".item-"+i,function(r){r.intersectionRatio>0&&(t[i].show=!0),e.setData({images:t})})}(i)}}}); 
 			}); 	require("components/lazy-load/index.js");
 		__wxRoute = 'components/slide-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/slide-item/index.js';	define("components/slide-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{pid:{type:Number,value:0,observer:function(t){var i=this;t&&this.setData({animate:!0},function(){i.setData({translateX:0})})}}},data:{translateX:0,animate:!1},methods:{handleTouchStart:function(t){var i=this;this.setData({animate:!1},function(){i.touchStartX=t.touches[0].pageX,i.touchStartY=t.touches[0].pageY,i.startX=i.data.translateX,i.direction=null})},handleTouchMove:function(t){this.touchMoveX=t.touches[0].pageX,this.touchMoveY=t.touches[0].pageY,this.moveX=this.touchMoveX-this.touchStartX,Math.abs(this.touchMoveY-this.touchStartY)>Math.abs(this.moveX)?this.direction="Y":(this.direction="X",0===this.startX&&this.moveX>0||this.startX===-this.actionWidth&&this.moveX<0||(Math.abs(this.moveX)>=this.actionWidth?(this.moveX=this.moveX<0?-this.actionWidth:this.actionWidth,this.setData({translateX:this.moveX})):this.setData({translateX:this.touchMoveX-this.touchStartX+this.startX})))},handleTouchEnd:function(t){var i=this;if("X"===this.direction){var a=0;a=this.moveX+this.startX>=0?0:this.moveX+this.startX<=-this.actionWidth?-this.actionWidth:0===this.startX&&Math.abs(this.moveX)<this.actionWidth/2||this.startX===-this.actionWidth&&Math.abs(this.moveX)>this.actionWidth/2?0:-this.actionWidth,this.setData({animate:!0},function(){i.setData({translateX:a})})}},handleAction:function(t){var i=t.currentTarget.dataset;this.triggerEvent("action",{type:i.type,id:this.data.pid})}},ready:function(){this.actionWidth=60}}); 
 			}); 	require("components/slide-item/index.js");
 		__wxRoute = 'components/weui-miniprogram/navigation-bar/navigation-bar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/weui-miniprogram/navigation-bar/navigation-bar.js';	define("components/weui-miniprogram/navigation-bar/navigation-bar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function n(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var o={};return n.m=e,n.c=o,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}({3:function(t,e,n){Component({options:{multipleSlots:!0,addGlobalClass:!0},properties:{extClass:{type:String,value:""},title:{type:String,value:""},background:{type:String,value:""},color:{type:String,value:""},back:{type:Boolean,value:!0},loading:{type:Boolean,value:!1},animated:{type:Boolean,value:!0},show:{type:Boolean,value:!0,observer:"_showChange"},delta:{type:Number,value:1}},data:{displayStyle:""},attached:function(){var t=this,e=!!wx.getMenuButtonBoundingClientRect,n=wx.getMenuButtonBoundingClientRect?wx.getMenuButtonBoundingClientRect():null;wx.getSystemInfo({success:function(o){var i=!!(o.system.toLowerCase().search("ios")+1);t.setData({ios:i,statusBarHeight:o.statusBarHeight,innerWidth:e?"width:"+n.left+"px":"",innerPaddingRight:e?"padding-right:"+(o.windowWidth-n.left)+"px":"",leftWidth:e?"width:"+(o.windowWidth-n.left)+"px":""})}})},methods:{_showChange:function(t){var e="";e=this.data.animated?"opacity: "+(t?"1":"0")+";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;":"display: "+(t?"":"none"),this.setData({displayStyle:e})},back:function(){var t=this.data;wx.navigateBack({delta:t.delta}),this.triggerEvent("back",{delta:t.delta},{})}}})}}); 
 			}); 	require("components/weui-miniprogram/navigation-bar/navigation-bar.js");
 		__wxRoute = 'miniprogram_dist/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_dist/index/index.js';	define("miniprogram_dist/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i={drawBlock:function(t){var i=t.text,e=t.width,o=void 0===e?0:e,s=t.height,n=t.x,h=t.y,r=t.paddingLeft,a=void 0===r?0:r,c=t.paddingRight,x=void 0===c?0:c,d=t.borderWidth,l=t.backgroundColor,u=t.borderColor,f=t.borderRadius,g=void 0===f?0:f,P=t.opacity,v=void 0===P?1:P,p=0,m=0,w=0;if(void 0!==i){var b=this._getTextWidth("string"==typeof i.text?i:i.text);p=b>o?b:o,p+=a+a;var y=i.textAlign,I=void 0===y?"left":y;i.text;w=s/2+h,m="left"===I?n+a:"center"===I?p/2+n:n+p-x}else p=o;l&&(this.ctx.save(),this.ctx.setGlobalAlpha(v),this.ctx.setFillStyle(l),g>0?(this._drawRadiusRect(n,h,p,s,g),this.ctx.fill()):this.ctx.fillRect(this.toPx(n),this.toPx(h),this.toPx(p),this.toPx(s)),this.ctx.restore()),d&&(this.ctx.save(),this.ctx.setGlobalAlpha(v),this.ctx.setStrokeStyle(u),this.ctx.setLineWidth(this.toPx(d)),g>0?(this._drawRadiusRect(n,h,p,s,g),this.ctx.stroke()):this.ctx.strokeRect(this.toPx(n),this.toPx(h),this.toPx(p),this.toPx(s)),this.ctx.restore()),i&&this.drawText(Object.assign(i,{x:m,y:w}))},drawText:function(i){var e=this,o=i.x,s=i.y,n=(i.fontSize,i.color,i.baseLine),h=(i.textAlign,i.text);i.opacity,i.width,i.lineNum,i.lineHeight;if("[object Array]"===Object.prototype.toString.call(h)){var r={x:o,y:s,baseLine:n};h.forEach(function(i){r.x+=i.marginLeft||0;var o=e._drawSingleText(Object.assign(i,t({},r)));r.x+=o+(i.marginRight||0)})}else this._drawSingleText(i)},drawImage:function(t){var i=t.imgPath,e=t.x,o=t.y,s=t.w,n=t.h,h=t.sx,r=t.sy,a=t.sw,c=t.sh,x=t.borderRadius,d=void 0===x?0:x,l=t.borderWidth,u=void 0===l?0:l,f=t.borderColor;this.ctx.save(),d>0?(this._drawRadiusRect(e,o,s,n,d),this.ctx.strokeStyle="rgba(255,255,255,0)",this.ctx.stroke(),this.ctx.clip(),this.ctx.drawImage(i,this.toPx(h),this.toPx(r),this.toPx(a),this.toPx(c),this.toPx(e),this.toPx(o),this.toPx(s),this.toPx(n)),u>0&&(this.ctx.setStrokeStyle(f),this.ctx.setLineWidth(this.toPx(u)),this.ctx.stroke())):this.ctx.drawImage(i,this.toPx(h),this.toPx(r),this.toPx(a),this.toPx(c),this.toPx(e),this.toPx(o),this.toPx(s),this.toPx(n)),this.ctx.restore()},drawLine:function(t){var i=t.startX,e=t.startY,o=t.endX,s=t.endY,n=t.color,h=t.width;this.ctx.save(),this.ctx.beginPath(),this.ctx.setStrokeStyle(n),this.ctx.setLineWidth(this.toPx(h)),this.ctx.moveTo(this.toPx(i),this.toPx(e)),this.ctx.lineTo(this.toPx(o),this.toPx(s)),this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()},downloadResource:function(t){var i=this,e=t.images,o=void 0===e?[]:e,s=t.pixelRatio,n=void 0===s?1:s,h=[];return this.drawArr=[],o.forEach(function(t,e){return h.push(i._downloadImageAndInfo(t,e,n))}),Promise.all(h)},initCanvas:function(t,i,e){var o=this;return new Promise(function(s){o.setData({pxWidth:o.toPx(t),pxHeight:o.toPx(i),debug:e},s)})}},e={_drawRadiusRect:function(t,i,e,o,s){var n=s/2;this.ctx.beginPath(),this.ctx.moveTo(this.toPx(t+n),this.toPx(i)),this.ctx.lineTo(this.toPx(t+e-n),this.toPx(i)),this.ctx.arc(this.toPx(t+e-n),this.toPx(i+n),this.toPx(n),2*Math.PI*.75,2*Math.PI*1),this.ctx.lineTo(this.toPx(t+e),this.toPx(i+o-n)),this.ctx.arc(this.toPx(t+e-n),this.toPx(i+o-n),this.toPx(n),0,2*Math.PI*.25),this.ctx.lineTo(this.toPx(t+n),this.toPx(i+o)),this.ctx.arc(this.toPx(t+n),this.toPx(i+o-n),this.toPx(n),2*Math.PI*.25,2*Math.PI*.5),this.ctx.lineTo(this.toPx(t),this.toPx(i+n)),this.ctx.arc(this.toPx(t+n),this.toPx(i+n),this.toPx(n),2*Math.PI*.5,2*Math.PI*.75)},_getTextWidth:function(t){var i=this,e=[];"[object Object]"===Object.prototype.toString.call(t)?e.push(t):e=t;var o=0;return e.forEach(function(t){var e=t.fontSize,s=t.text,n=t.marginLeft,h=void 0===n?0:n,r=t.marginRight,a=void 0===r?0:r;i.ctx.setFontSize(i.toPx(e)),o+=i.ctx.measureText(s).width+h+a}),this.toRpx(o)},_drawSingleText:function(t){var i=this,e=t.x,o=t.y,s=t.fontSize,n=t.color,h=t.baseLine,r=t.textAlign,a=void 0===r?"left":r,c=t.text,x=t.opacity,d=void 0===x?1:x,l=t.textDecoration,u=void 0===l?"none":l,f=t.width,g=t.lineNum,P=void 0===g?1:g,v=t.lineHeight,p=void 0===v?0:v,m=t.fontWeight,w=void 0===m?"normal":m,b=t.fontStyle,y=void 0===b?"normal":b,I=t.fontFamily,R=void 0===I?"sans-serif":I;this.ctx.save(),this.ctx.beginPath(),this.ctx.font=y+" "+w+" "+this.toPx(s,!0)+"px "+R,this.ctx.setGlobalAlpha(d),this.ctx.setFillStyle(n),this.ctx.setTextBaseline(h),this.ctx.setTextAlign(a);var T=this.toRpx(this.ctx.measureText(c).width),S=[];if(T>f){for(var k="",_=1,A=0;A<=c.length-1;A++)k+=c[A],this.toRpx(this.ctx.measureText(k).width)>=f?(_===P&&A!==c.length-1&&(k=k.substring(0,k.length-1)+"..."),_<=P&&S.push(k),k="",_++):_<=P&&A===c.length-1&&S.push(k);T=f}else S.push(c);if(S.forEach(function(t,n){i.ctx.fillText(t,i.toPx(e),i.toPx(o+(p||s)*n))}),this.ctx.restore(),"none"!==u){var z=o;if("line-through"===u){z=o;switch(h){case"top":z+=s/2+5;break;case"middle":break;case"bottom":z-=s/2+5;break;default:z-=s/2-5}}this.ctx.save(),this.ctx.moveTo(this.toPx(e),this.toPx(z)),this.ctx.lineTo(this.toPx(e)+this.toPx(T),this.toPx(z)),this.ctx.setStrokeStyle(n),this.ctx.stroke(),this.ctx.restore()}return T}},o={_downloadImageAndInfo:function(t,i,e){var o=this;return new Promise(function(s,n){var h=t.x,r=t.y,a=t.url,c=t.zIndex,x=a;o._downImage(x,i).then(function(t){return o._getImageInfo(t,i)}).then(function(n){var a=n.imgPath,x=n.imgInfo,d=void 0,l=void 0,u=t.borderRadius||0,f=t.width,g=t.height,P=o.toRpx(x.width/e),v=o.toRpx(x.height/e);P/v<=f/g?(d=0,l=(v-P/f*g)/2):(l=0,d=(P-v/g*f)/2),o.drawArr.push({type:"image",borderRadius:u,borderWidth:t.borderWidth,borderColor:t.borderColor,zIndex:void 0!==c?c:i,imgPath:a,sx:d,sy:l,sw:P-2*d,sh:v-2*l,x:h,y:r,w:f,h:g}),s()}).catch(function(t){return n(t)})})},_downImage:function(t){var i=this;return new Promise(function(e,o){/^http/.test(t)&&!new RegExp(wx.env.USER_DATA_PATH).test(t)?wx.downloadFile({url:i._mapHttpToHttps(t),success:function(t){200===t.statusCode?e(t.tempFilePath):o(t.errMsg)},fail:function(t){o(t)}}):e(t)})},_getImageInfo:function(t,i){return new Promise(function(e,o){wx.getImageInfo({src:t,success:function(o){e({imgPath:t,imgInfo:o,index:i})},fail:function(t){o(t)}})})},toPx:function(t,i){return i?parseInt(t*this.factor*this.pixelRatio):t*this.factor*this.pixelRatio},toRpx:function(t,i){return i?parseInt(t/this.factor):t/this.factor},_mapHttpToHttps:function(t){if(t.indexOf(":")<0)return t;var i=t.split(":");return 2===i.length&&"http"===i[0]?(i[0]="https",i[0]+":"+i[1]):t}};Component({properties:{},created:function(){var t=wx.getSystemInfoSync().screenWidth;this.factor=t/750},methods:Object.assign({getHeight:function(i){var e=function(t){var i=t.lineHeight||t.fontSize;return"top"===t.baseLine?i:"middle"===t.baseLine?i/2:0},o=[];(i.blocks||[]).forEach(function(t){o.push(t.y+t.height)}),(i.texts||[]).forEach(function(i){var s=void 0;"[object Array]"===Object.prototype.toString.call(i.text)?i.text.forEach(function(n){s=e(t({},n,{baseLine:i.baseLine})),o.push(i.y+s)}):(s=e(i),o.push(i.y+s))}),(i.images||[]).forEach(function(t){o.push(t.y+t.height)}),(i.lines||[]).forEach(function(t){o.push(t.startY),o.push(t.endY)});var s=o.sort(function(t,i){return i-t}),n=0;return s.length>0&&(n=s[0]),i.height<n||!i.height?n:i.height},create:function(t){var i=this;this.ctx=wx.createCanvasContext("canvasid",this),this.pixelRatio=t.pixelRatio||1;var e=this.getHeight(t);this.initCanvas(t.width,e,t.debug).then(function(){t.backgroundColor&&(i.ctx.save(),i.ctx.setFillStyle(t.backgroundColor),i.ctx.fillRect(0,0,i.toPx(t.width),i.toPx(e)),i.ctx.restore());var o=t.texts,s=void 0===o?[]:o,n=(t.images,t.blocks),h=void 0===n?[]:n,r=t.lines,a=void 0===r?[]:r,c=i.drawArr.concat(s.map(function(t){return t.type="text",t.zIndex=t.zIndex||0,t})).concat(h.map(function(t){return t.type="block",t.zIndex=t.zIndex||0,t})).concat(a.map(function(t){return t.type="line",t.zIndex=t.zIndex||0,t}));c.sort(function(t,i){return t.zIndex-i.zIndex}),c.forEach(function(t){"image"===t.type?i.drawImage(t):"text"===t.type?i.drawText(t):"block"===t.type?i.drawBlock(t):"line"===t.type&&i.drawLine(t)});var x=0;"android"===wx.getSystemInfoSync().platform&&(x=300),i.ctx.draw(!1,function(){setTimeout(function(){wx.canvasToTempFilePath({canvasId:"canvasid",success:function(t){i.triggerEvent("success",t.tempFilePath)},fail:function(t){i.triggerEvent("fail",t)}},i)},x)})}).catch(function(t){wx.showToast({icon:"none",title:t.errMsg||"生成失败"}),console.error(t)})}},i,e,o)}); 
 			}); 	require("miniprogram_dist/index/index.js");
 		__wxRoute = 'miniprogram_dist/poster/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'miniprogram_dist/poster/index.js';	define("miniprogram_dist/poster/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{config:{type:Object,value:{}},preload:{type:Boolean,value:!1},hideLoading:{type:Boolean,value:!1}},ready:function(){var t=this;if(this.data.preload){var o=this.selectComponent("#poster");this.downloadStatus="doing",o.downloadResource(this.data.config).then(function(){t.downloadStatus="success",t.trigger("downloadSuccess")}).catch(function(o){t.downloadStatus="fail",t.trigger("downloadFail",o)})}},methods:{trigger:function(t,o){this.listener&&"function"==typeof this.listener[t]&&this.listener[t](o)},once:function(t,o){void 0===this.listener&&(this.listener={}),this.listener[t]=o},downloadResource:function(t){var o=this;return new Promise(function(e,n){t&&(o.downloadStatus=null);var i=o.selectComponent("#poster");o.downloadStatus&&"fail"!==o.downloadStatus?"success"===o.downloadStatus?e():(o.once("downloadSuccess",function(){return e()}),o.once("downloadFail",function(t){return n(t)})):i.downloadResource(o.data.config).then(function(){o.downloadStatus="success",e()}).catch(function(t){return n(t)})})},onCreate:function(){var t=this,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!this.data.hideLoading&&wx.showLoading({mask:!0,title:"生成中"}),this.downloadResource("boolean"==typeof o&&o).then(function(){!t.data.hideLoading&&wx.hideLoading(),t.selectComponent("#poster").create(t.data.config)}).catch(function(o){!t.data.hideLoading&&wx.hideLoading(),wx.showToast({icon:"none",title:o.errMsg||"生成失败"}),console.error(o),t.triggerEvent("fail",o)})},onCreateSuccess:function(t){var o=t.detail;this.triggerEvent("success",o)},onCreateFail:function(t){console.error(t),this.triggerEvent("fail",t)}}}); 
 			}); 	require("miniprogram_dist/poster/index.js");
 		__wxRoute = 'pages/mine/login/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/login/index.js';	define("pages/mine/login/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.Anim,n=e.userStore,s=e.request,o=e.config,a=e.wxp,i=require("../../../utils/session").fetchSessionId,c=require("./locales");t.Page({store:function(e){return{isAuth:e.user.userInfo.isAuth,userInfo:e.user.userInfo}},data:{needCheckSession:!0,cityName:o.cityName,authTitle:"请先登录账号",authDesc:"",authBtnText:"登录"},onLoad:function(e){this.setLanguage(),this.checkWxSession()},setLanguage:function(){var e=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(c[e])?c["zh-CN"]:c[e]}),wx.setNavigationBarTitle({title:this.data.language.barTitle})},checkWxSession:function(){var e=this;a.checkSession().then(function(){console.log("当前的 sessionKey 未过期"),e.setData({needCheckSession:!1})}).catch(function(t){console.log("当前的 sessionKey 已过期"),e.setData({needCheckSession:!1}),e.onTapLogout(),i()})},onTapLogin:function(e){var t=e.detail,o=t.iv,a=t.encryptedData;{if(o&&a)return wx.showLoading({title:"努力加载中..."}),s({url:"/wll/account/getphone",method:"POST",data:{encryptedData:a,iv:o}}).then(function(e){wx.hideLoading(),console.log("res",e),e&&e.phone&&n.fetchUserInfo().then(function(){wx.navigateBack()})}).catch(function(e){wx.hideLoading(),console.error(e)});console.error("用户拒绝授权登录")}}}); 
 			}); 	require("pages/mine/login/index.js");
 		__wxRoute = 'pages/msg/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/msg/index.js';	define("pages/msg/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/msg/index.js");
 		__wxRoute = 'pages/web-view/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/web-view/index.js';	define("pages/web-view/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";getApp().utils;Page({data:{webUrl:""},onLoad:function(t){var e=decodeURIComponent(t.webUrl||t.h5Url);console.log("h5 url: ",e),e&&this.setData({webUrl:e}),t.title&&wx.setNavigationBarTitle({title:decodeURIComponent(t.title)})}}); 
 			}); 	require("pages/web-view/index.js");
 		__wxRoute = 'pages/stat/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/stat/index.js';	define("pages/stat/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return(e+Array(t).join("0")).slice(0,t)}var n=getApp(),a=n.Anim,i=n.request,o=n.dayjs,s=(n.wxp,n.config),r=n.userStore,g=n.configStore,l=n.Event,u=require("../../services/region"),c=require("../../services/health-code.js"),d=s.regionLevel.length,h=(require("../../services/report"),require("./locales")),f=!1,m={title:s.regionLevel[0].title,data:[{name:s.cityName,regionCode:t(s.regionCode,12)}]};a.Page({store:function(e){return{isLeader:e.user.userInfo.isLeader,isAuth:e.user.userInfo.isAuth,userInfo:e.user.userInfo,wllConfig:e.config.wllConfig}},computed:{},data:{language:"",isvisable:!0,pdfUrl:"https://imgcache.gzonline.gov.cn/doc/Index_Instructions.pdf",imgSrc:"/images/report/caozuozhiyin.png",fileName:"Index Instructions.pdf",cityName:s.cityName,isShowBg:!0,visible:!1,value:s.cityName,regionCode:t(s.regionCode,12),regionRange:[m],residentCount:0,communistCount:0,floatingCount:0,endTime:"",todayCount:0,confirm:0,suspect:0,cure:0,dead:0,lineVisible:!1,singleLine:{xAxis:{data:[]},series:[{name:"确诊人数",data:[],label:{normal:{show:!0}}}]}},handleRegionChange:function(e){var n=e.detail.value;if(console.log("region+++++++++",n),n&&n.length>0){var a=n[n.length-1].regionCode;this.setData({regionValue:n,value:n[n.length-1].regionName||n[n.length-1].name,regionCode:a}),this.getAffairStat(t(a,12))}},handleRegionColumnChange:function(e){var t=e.detail,n=t.item,a=t.index;a===d-1?this.handleRegionClose():this.getRegionData(n,a+1)},handleOpenRegion:function(){this.setData({visible:!0,regionRange:this.data.regionRange.slice(0,1)})},handleRegionClose:function(e){this.setData({visible:!1})},onShareAppMessage:function(){},getChildrenRegionData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;wx.showLoading(),u.getRegionData(t.regionCode,t.regionList).then(function(t){var a=e.data.regionRange.slice(0,n);a[n]={title:s.regionLevel[n].title,data:t.map(function(e){return{name:e.regionName,value:{regionName:e.regionName,regionCode:e.regionCode},regionList:e.regionList}})},e.setData({regionRange:a},function(){return wx.hideLoading()})}).catch(function(e){return wx.hideLoading()})},getAffairStat:function(t){wx.showLoading();var n=this;f||(f=!0,i({url:"/usercenter/affairStat/detail",method:"GET",data:{regionCode:t}}).then(function(t){var a;wx.hideLoading(),f=!1;var i=t.itemList,s=i&&i.map(function(e){return e.confirmCaseNum}),r=i&&i.map(function(e){return o(e.statTime).format("YYYY/MM/DD")}),g=t.statTime?o(t.statTime).format("YYYY/MM/DD"):o((new Date).getTime()).format("YYYY/MM/DD");n.setData((a={residentCount:t.peopleNum||0,communistCount:t.partyNum||0,floatingCount:t.flowNum||0,endTime:g,todayCount:t.newCaseNum||0,confirm:t.confirmCaseNum||0,suspect:t.suspectedCaseNum||0,cure:t.cureCaseNum||0,dead:t.outCaseNum||0,lineVisible:i&&i.length},e(a,"singleLine.xAxis.data",r||[]),e(a,"singleLine.series[0].data",s||[]),a))}))},watch:{isLeader:function(e){e&&!this.data.lineVisible&&this.getAffairStat(this.data.regionCode)}},onLoad:function(e){var t=this;this.setLanguage(),l.addEventListener("languageChanged",function(e){console.log(e.target),t.setLanguage()},this),Object.keys(this.data.wllConfig).length>0?this.openTipsModal(this.data.wllConfig):g.fetchWllConfig().then(function(e){e&&e.home_notice&&e.home_notice.is_open&&t.openTipsModal(e)})},onShow:function(){wx.setTabBarItem({index:0,text:this.data.language.home,success:function(e){},fail:function(e){}}),wx.setTabBarItem({index:1,text:this.data.language.me})},onPageScroll:function(e){var t=parseInt(e.scrollTop)<80;this.setData({isShowBg:t})},openTipsModal:function(e){var t=this,n=e.home_notice||this.data.wllConfig.home_notice;console.log(n.text),wx.showModal({showCancel:!1,confirmText:t.data.language.nextTips,title:t.data.language.importantNotice,content:t.data.language.text,success:function(n){n.cancel?console.log("您点击了取消"):n.confirm&&wx.showModal({showCancel:!0,cancelText:t.data.language.lastOne,confirmText:t.data.language.iknow,title:t.data.language.importantNotice,content:t.data.language.textTwo,success:function(n){n.cancel?(console.log("您点击了取消"),t.openTipsModal(e)):n.confirm}})}})},onTapAccess:function(e){var t=this;r.checkAuth()&&(e.currentTarget.dataset.real?c.realnameUser(this.data.userInfo.uid).then(function(n){0==n.isAut?wx.showModal({title:t.data.language.showModal_title,content:t.data.language.showModal_content,cancelText:t.data.language.showModal_cancelText,confirmText:t.data.language.showModal_confirmText,confirmColor:"#1890ff",success:function(t){t.cancel||wx.navigateTo({url:"/packages/health-code/pages/realname-submit/index?path="+e.currentTarget.dataset.url})}}):wx.navigateTo({url:e.currentTarget.dataset.url})}):wx.navigateTo({url:e.currentTarget.dataset.url}))},setLanguage:function(){var e=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(h[e])?h["zh-CN"]:h[e]}),"zh-CN"!==e?this.setData({isvisable:!1}):this.setData({isvisable:!0})},setLanguageTab:function(){wx.navigateTo({url:"/pages/mine/setting/index"})}}); 
 			}); 	require("pages/stat/index.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({onLoad:function(){wx.reLaunch({url:"/pages/stat/index",success:function(n){console.log(n)},fail:function(n){console.log(n)}})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/mine/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/index/index.js';	define("pages/mine/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),t=e.Anim,a=e.userStore,n=e.request,o=e.config,i=e.configStore,s=e.wxp,l=e.Event,r=require("../../../services/health-code.js"),u=require("../../../utils/session"),c=require("../../../services/feedback"),g=require("./locales");t.Page({store:function(e){return{isAuth:e.user.userInfo.isAuth,userInfo:e.user.userInfo,wllConfig:e.config.wllConfig}},computed:{role:function(){return(this.data.userInfo.role||[]).some(function(e){return"GRID_MANAGER"==e||"GRID_USER"==e||"RESUMPTION_CHECKER"==e})}},data:{language:"",needCheckSession:!1,cityName:o.cityName,authTitle:"请先登录账号",authDesc:"",authBtnText:"登录",isRealName:!1,refreshtimestamp:0},onLoad:function(e){var t=this;this.checkWxSession(),this.setLanguage(),l.addEventListener("languageChanged",function(e){console.log(e.target),t.setLanguage()},this),this.setData({authTitle:this.data.language.logInFirst,authBtnText:this.data.language.logIn})},checkWxSession:function(){var e=this;this.setData({needCheckSession:!0}),s.checkSession().then(function(){console.log("当前的 sessionKey 未过期"),e.setData({needCheckSession:!1})}).catch(function(t){console.log("当前的 sessionKey 已过期"),e.setData({needCheckSession:!1}),e.onTapLogout()})},onTapNavigateTo:function(e){e.currentTarget.dataset.path&&wx.navigateTo({url:e.currentTarget.dataset.path})},onTabItemTap:function(e){console.log(e.index),console.log(e.pagePath),console.log(e.text),this.setLanguage(),this.setData({authTitle:this.data.language.logInFirst,authBtnText:this.data.language.logIn})},onShow:function(){i.fetchWllConfig(),this.realnameUser()},onJump:function(e){wx.navigateTo({url:"/packages/health-code/pages/new-workbench/new-workbench"})},onTapBook:function(){var e=this.data.wllConfig.personal_center_info||{};e&&1===e.is_open?wx.navigateTo({url:"/packages/buy/pages/reservation-list/index"}):wx.showModal({title:"温馨提示",content:e.tips||this.data.language.tryagain,showCancel:!1})},onTapCompany:function(){wx.navigateTo({url:"pages/mine/company/list/index"})},onTapEnterprise:function(){wx.navigateTo({url:"/pages/mine/company/list/index",fail:function(e){console.log(e)}})},onTapFeedback:function(){c.goFeedback(0,this.data.userInfo.uid)},onTapLogin:function(e){var t=this;this.data.isRealName=!1;var o=e.detail,i=o.iv,s=o.encryptedData;return i&&s?(wx.showLoading({title:this.data.language.loading}),n({url:"/wll/account/getphone",method:"POST",data:{encryptedData:s,iv:i}}).then(function(e){wx.hideLoading(),console.log("res",e),e&&e.phone&&a.fetchUserInfo(),setTimeout(function(){t.realnameUser()},300)}).catch(function(e){wx.hideLoading(),console.error(e)})):(console.error("用户拒绝授权登录"),void wx.showToast({title:this.data.language.cancelAuthorization,icon:"none"}))},onTapLogout:function(){return this.data.isRealName=!1,wx.showLoading({title:this.data.language.loading,mask:!0}),n({url:"/wll/account/logout",method:"POST"}).then(function(){wx.hideLoading(),wx.removeStorageSync("wx-sessionid"),a.initUserInfo(),console.log("我的退出成功了"),u.fetchSessionId()}).catch(function(){wx.hideLoading(),wx.removeStorageSync("wx-sessionid"),a.initUserInfo(),console.log("我的退出成功了"),u.fetchSessionId()})},lifeCycleMethod:function(){},realnameUser:function(){var e=this;if(!this.data.isRealName){var t=this.data.userInfo.uid;console.log("realnameUser",t),t&&r.realnameUser(t).then(function(t){e.data.isRealName=1==t.isAut||2==t.isAut,t.isAut,console.log("isRealName",t.isAut),e.setData({isRealName:e.data.isRealName})},function(e){})}},onPullDownRefresh:function(){var e=this;return console.log("isAuth",this.data.isAuth),this.data.isAuth?(console.log("下拉刷新"),(new Date).getTime()-this.data.refreshtimestamp<2e4?(wx.stopPullDownRefresh(),void wx.showToast({title:this.data.language.tryagain2,icon:"none"})):(this.data.refreshtimestamp=(new Date).getTime(),void r.refreshloginuserinfo().then(function(t){wx.stopPullDownRefresh(),t&&t.phone&&(a.fetchUserInfo(),e.data.isRealName=!1,e.realnameUser()),wx.hideLoading(),setTimeout(function(){wx.showToast({title:thia.data.language.refreshsuccess,icon:"none"})},800)},function(t){wx.stopPullDownRefresh(),wx.showToast({title:e.data.language.refreshfailure+t.errmsg,icon:"none"})}))):(console.log("下拉刷新，未登录"),void wx.stopPullDownRefresh())},setLanguage:function(){var e=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(g[e])?g["zh-CN"]:g[e]}),wx.setNavigationBarTitle({title:this.data.language.barTitle})}}); 
 			}); 	require("pages/mine/index/index.js");
 		__wxRoute = 'pages/mine/todo/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/todo/list/list.js';	define("pages/mine/todo/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},e=getApp(),i=e.Anim,o=e.utils,a=e.mineStore,n=e.resetTab,r=require("../../../../mixin/localesMixin.js");i.Page({mixins:[r],store:function(t){return{todoReportList:t.mine.todoReportList,doingReportList:t.mine.doingReportList,doneReportList:t.mine.doneReportList,todoCheckList:t.mine.todoCheckList,doingCheckList:t.mine.doingCheckList,doneCheckList:t.mine.doneCheckList,todoAffairList:t.mine.todoAffairList,doingAffairList:t.mine.doingAffairList,doneAffairList:t.mine.doneAffairList}},data:{locales:require("./locales"),tabIndex:"0",todoType:"affair"},onLoad:function(t){var e=t.todoType,i=t.index||("affair"===e?"0":"1");this.data.language.titleMap[e]&&wx.setNavigationBarTitle({title:this.data.language.titleMap[e]}),this.setData({tabIndex:i,todoType:e})},onShow:function(){this.fetchData()},fetchData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data.todoType,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.data.tabIndex;return"check"===t?a.fetchCheckSelfList({clueTypes:"0,2",status:+e,order:"DESC",pageNo:1,pageSize:100}).then(function(){n()}).catch(function(t){console.error(t),n()}):"report"===t?a.fetchReportList({clueType:1,status:+e,order:"DESC",pageNo:1,pageSize:100}).then(function(){n()}).catch(function(t){console.error(t),n()}):"affair"===t?a.fetchAffairList({status:+e,order:"DESC",pageNo:1,pageSize:100}).then(function(){n()}).catch(function(t){console.error(t),n()}):void 0},handleTabTap:function(t){var e=t.detail.value.key;this.setData({tabIndex:e}),this.fetchData(this.data.todoType,e)},handleItem:function(e){var i=e.target.dataset.item;console.log("event",i),wx.navigateTo({url:o.urlJoinParams("/pages/mine/todo/detail/detail",t({},i,{todoType:this.data.todoType}))})}}); 
 			}); 	require("pages/mine/todo/list/list.js");
 		__wxRoute = 'pages/mine/todo/detail/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/todo/detail/detail.js';	define("pages/mine/todo/detail/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a=getApp(),n=a.Anim,i=a.request,r=a.dayjs,o=a.utils,l=require("../../../../mixin/localesMixin.js"),s=[{label:"编号",key:"id"},{label:"报告状态",key:"statusStr"},{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"手机号码",key:"phone"},{label:"证件类型",key:"identityTypeStr"},{label:"证件号码",key:"identity"},{label:"国籍/地区",key:"nationStr"},{label:"户籍所在地",key:"domicilePlaceStr"},{label:"籍贯",key:"nativePlace"},{label:"居住地址",key:"address"},{label:"详细地址",key:"addr"}],c=[{label:"是否常住广州",key:"residentFlagStr"},{label:"近期是否在广州",key:"residentConditionStr"},{label:"来或返回广州日期",key:"returnDate"},{label:"目前所在地",key:"recentRegionName"},{label:"拟返回广州日期",key:"quasiReturnDate"},{label:"近一个月旅居史",key:"travelRegionClassStr"},{label:"近期接触史",key:"socialContactStr"},{label:"14日内密切接触日期",key:"contactDateRecent"},{label:"14日内感觉接触日期",key:"contactDateLike"},{label:"个人健康状态",key:"healthStateStr"},{label:"症状列表",key:"symptomTypeStr"},{label:"其它症状",key:"symptomDscr"}],u=[{label:"姓名",key:"clueSupplier"},{label:"联系电话",key:"clueSupplierPhone"}],d=[{label:"姓名",key:"username"},{label:"性别",key:"gender"},{label:"联系电话",key:"phone"},{label:"居住地址",key:"street"},{label:"详细住址",key:"addr"},{label:"关联车牌",key:"clueVehicle"},{label:"涉事人类型",key:"socialContact11Str"},{label:"来或返回广州日期",key:"returnDate"},{label:"涉事人类型",key:"socialContact12Str"},{label:"来或返回广州日期",key:"contactDateRecent"},{label:"涉事人类型",key:"socialContact13Str"},{label:"来或返回广州日期",key:"quasiReturnDate"},{label:"涉事人类型",key:"socialContact14Str"}],y=[{label:"反映详细内容",key:"symptomDscr"}];n.Page({mixins:[l],store:function(e){return{userInfo:e.user.userInfo}},data:{locales:require("./locales"),test:"888888",formData:{content:""},rules:{content:[{type:"required",message:"请输入回复内容"}]},message:{addr:"",area:"",dscr:"",id:0,itemList:[],phone:"",report:"",reportName:"",reportType:0,status:0,username:""},keyMap:s,keyMapOther:c,reporterKeyMap:u,reportedKeyMap:d,reportContentKeyMap:y,query:{}},onLoad:function(e){this.setData({query:e}),this.statusChange(),this.fetchData(e),this.handleTodoType(e.todoType),wx.setNavigationBarTitle({title:this.data.language.title})},handleTodoType:function(){if("report"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data.query.todoType)){var e=this.data.language.keyMap.map(function(e){return"姓名"===e.label?t({},e,{label:"涉事人"}):e});this.setData({keyMap:e})}},onChangeForm:function(t){this.setData(e({},"formData."+t.target.id,t.detail.value))},fetchData:function(e){var t=this;wx.showLoading({title:"努力加载中..."});var a=void 0;return console.log("query",e),a="affair"===e.todoType?0!=+e.reportType?"/usercenter/affair/detail?affairId="+e.id:"/usercenter/affair/detailForPneumonia?affairId="+e.id:"/usercenter/report/detailForPneumonia?reportId="+e.id,i({url:a}).then(function(e){if(wx.hideLoading(),console.log("getCheckSelfInfo",e),e.identityTypeStr=t.data.language.identityTypeMap[e.identityType],e.personTypeStr=t.data.language.personTypeMap[e.personType],e.username=e.username||"-",e.symptomTypeStr=e.symptomList&&e.symptomList.map(function(e){return t.data.language.symptomTypeMap[e]}).join(", "),e.socialContact=e.socialContact||"",e.socialContactStr=e.socialContact&&e.socialContact.split(",").map(function(e){return t.data.language.socialContactMap[e]}).join(", "),e.socialContact){var a=e.socialContact.split(",");["11","12","13","14"].map(function(n){a.indexOf(n)>-1&&(e["socialContact"+n+"Str"]=t.data.language.socialContactMap[n])})}e.healthState=e.healthState||"",e.healthStateStr=e.healthState&&t.data.language.healthStateMap[e.healthState],e.nationStr=t.data.language.nationMap[e.isChinese]||"",e.domicilePlaceStr=t.data.language.domicilePlaceMap[e.domicilePlace]||"",e.residentFlagStr=t.data.language.residentFlagMap[e.residentFlag]||"",e.residentConditionStr=t.data.language.residentConditionMap[e.residentCondition]||"",e.travelRegionClassStr=t.data.language.travelRegionClassMap[e.travelRegionClass]||"",e.returnDate=e.returnDate?r(e.returnDate).format("YYYY/MM/DD"):"",e.quasiReturnDate=e.quasiReturnDate?r(e.quasiReturnDate).format("YYYY/MM/DD"):"",e.contactDateRecent=e.contactDateRecent?r(e.contactDateRecent).format("YYYY/MM/DD"):"",e.contactDateLike=e.contactDateLike?r(e.contactDateLike).format("YYYY/MM/DD"):"",e.avatarKey=e.avatarKey,e.recentInHubeiStr=t.data.language.booleanMap[e.recentInHubei],e.itemList&&e.itemList.forEach(function(e){e.commitTime=e.commitTime&&r(e.commitTime).format("YYYY/MM/DD HH:mm"),e.commiterName=e.commiterName||"管理员"}),e.city&&"zh-CN"!==wx.T.getLanguage().languageClass&&(e.city="Guang Zhou"),e.address=e.city&&e.area&&e.street&&""+e.city+e.area+e.street+e.community,e.statusStr=t.data.language.statusMap[e.status],e.identity=e.identity&&o.hideIdCard(e.identity),e.gender=t.data.language.sexMap[e.gender],1==e.residentCondition&&(e.travelRegionClassStr=""),t.setData({message:e}),console.log("message",t.data.message)}).catch(function(e){wx.hideLoading(),console.log("err",e)})},handleTodoTap:function(e){var t=e.currentTarget.dataset.url;wx.navigateTo({url:t})},statusChange:function(){switch(this.data.message.status){case"warn":this.setData({statusColor:"#f13939"});break;case"wait":this.setData({statusColor:"#009E7E"});break;case"success":this.setData({statusColor:"#1DC350"})}},tabChange:function(e){this.setData({activeKey:e.detail.value.key})},onTapReply:function(e){var t=this;console.log(e);var a=e.detail,n=a.validStatus,r=a.value;n&&(wx.showLoading({title:"努力加载中..."}),i({url:"/usercenter/affair/reply",method:"POST",data:{affairId:this.data.query.id,content:r.content}}).then(function(){wx.hideLoading(),t.setData({"formData.content":""}),t.fetchData(t.data.query)}).catch(function(e){wx.hideLoading()}))},onTapDone:function(){var e=this;wx.showLoading({title:"努力加载中..."}),this.data.formData.content?i({url:"/usercenter/affair/finish",method:"POST",data:{affairId:this.data.query.id,content:this.data.formData.content}}).then(function(){wx.hideLoading(),e.setData({"formData.content":""}),e.fetchData(e.data.query)}).catch(function(e){wx.hideLoading()}):wx.showToast({title:"请输入回复内容"})},handleTap:function(){console.log(1)},clickImg:function(e){var t=e.currentTarget.dataset.imagesrc;wx.previewImage({urls:[t],current:"",success:function(e){},fail:function(e){},complete:function(e){}})},onTapAccess:function(){var e=this.data.message.clueType||0,t="";t=1==e?"/pages/report/inform/index":2==e?"/pages/report/index/index?type=2":"/pages/report/index/index?type=1",wx.navigateTo({url:t})}}); 
 			}); 	require("pages/mine/todo/detail/detail.js");
 		__wxRoute = 'pages/mine/empty/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/empty/index.js';	define("pages/mine/empty/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.Anim;t.request;e.Page({data:{emptyIcon:"https://imgcache.gzonline.gov.cn/cos/empty_0283358d.svg"},onLoad:function(t){var e=t.title;e&&wx.setNavigationBarTitle({title:e})}}); 
 			}); 	require("pages/mine/empty/index.js");
 		__wxRoute = 'pages/report/home/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/report/home/index.js';	define("pages/report/home/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp(),s=e.Anim,a=e.userStore,t=(e.Event,require("../../../services/report")),n=require("./locales");s.Page({store:function(e){return{userInfo:e.user.userInfo}},data:{loading:!1,color:"#000",background:"#f8f8f8",show:!0,animated:!1,language:"",visible:!0,toUrl:"",isReported:wx.getStorageSync("selfForm__submit"),imgUrls:["https://imgcache.gzonline.gov.cn/cos/shangbao_dbc3d59b.png"]},watch:{},onLoad:function(e){this.setLanguage()},checkSelfReport:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",s=this;e.indexOf("type=1")>-1?wx.navigateTo({url:e}):t.hasReported().then(function(a){a?wx.navigateTo({url:e}):wx.showModal({title:s.data.language.reminder,content:s.data.language.isMyHealth,confirmText:s.data.language.language,showCancel:!1})}).catch(function(){wx.hideLoading(),wx.showToast({title:s.data.language.serverCrowded,icon:"none"})})},onTapAccess:function(e){a.checkAuth()&&this.checkSelfReport(e.currentTarget.dataset.url)},setLanguage:function(){var e=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(n[e])?n["zh-CN"]:n[e]}),console.log("sssssssssssssssssssssssssssss",this.data.language)}}); 
 			}); 	require("pages/report/home/index.js");
 		__wxRoute = 'pages/report/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/report/index/index.js';	define("pages/report/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function t(){return{openid:wx.getStorageSync("wx-openid"),sessionid:wx.getStorageSync("wx-sessionid")}}function a(e){return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)}function n(e){var t=[];return e.map(function(e){t.push({name:e.name,value:e.name})}),t}function i(e){return e?g(e).format("YYYY-MM-DD"):e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length,a="";return 15===t?a="19".concat(e.substr(6,6)):18===t&&(a=e.substr(6,8)),a}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length,a="";return 15==t?a=parseInt(e.substr(14,1))%2==1?"男":"女":t>=17&&(a=parseInt(e.substr(16,1))%2==1?"男":"女"),a}var s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=getApp(),d=c.Anim,u=(c.Event,c.resetTab),h=c.config,g=c.dayjs,f=c.request,m=c.systemInfo,D=c.userStore,y=require("../../../utils/util").chooseLocation,p=require("../../../services/report"),v=require("../../../services/region"),C=require("../../../services/health-code.js"),F=require("./locales");d.Page({store:function(e){return{userInfo:e.user.userInfo}},data:{language:"",pdfUrl:"https://imgcache.gzonline.gov.cn/doc/Report_Health_Condition_Instructions.pdf",imgSrc:"/images/report/caozuozhiyin.png",avatarUrl:"",avatarFlag:!1,fileName:"Report Health Condition Instructions.pdf",currentType:"",regionData:[],today:g().format("YYYY-MM-DD"),endToday:g().subtract(1,"day").format("YYYY-MM-DD"),startDay:g().subtract(130,"year").format("YYYY-MM-DD"),halfMonthAgo:g().subtract(15,"day").format("YYYY-MM-DD"),cityName:h.cityName,headers:{},activeTab:"self",showHBCityPicker:!1,showRegionPicker:!1,uploadUrl:h.domain+"/report/uploadfile",identityInputType:"idcard",disableDetail:!0,provinceIncludes:["中国香港","广东省"],regionRange:[],nativePlaceRange:[],residentPlaceItems:[],showNativePlacePicker:!1,agree:!1,selfForm:{username:"",gender:"",isChinese:1,nativePlace:"",domicilePlace:"",phone:"",birthday:"",identity:"",identityType:1,street:"",addr:"",residentFlag:"",residentCondition:"",returnDate:"",recentRegionName:"",travelRegionClass:"",socialContact:"",socialContact1:"",socialContact2:"",quasiReturnDate:"",contactDateRecent:"",contactDateLike:"",healthState:"",symptoms:[],symptomDscr:"",regionData:[],clueType:0,avatarKey:""},validateType:{symptomDscrLength:function(e){return e.length<=10},contentLength:function(e){return e.length>10},titleLength:function(e){return e.length<=20},checkBirthday:function(e){if(!birthday)return!1;var t=g().diff(g(e).format("YYYY-MM-DD"),"year");return t>=0&&t<=130}}},bindSelectData:function(e){this.setData({"selfForm.addr":e.detail.address})},watch:(s={selfForm:function(e){console.log("selfForm Data Change",e)},"selfForm.identityType":function(e){var t=this.data.selfFormRules||[],a="text";switch(parseInt(e)){case 1:a="idcard",t.identity[1]={type:"id",message:this.data.language.checkId};break;case 5:t.identity[1]={type:"twCome",message:this.data.language.checkHmHid};break;case 6:case 7:t.identity[1]={type:"hmHid",message:this.data.language.checkHmHid};break;default:t.identity=t.identity.slice(0,1)}this.setData({identityInputType:a,selfFormRules:t})},"selfForm.symptoms":function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=-1===e.indexOf("15"),a=e.slice(-1)[0],n=!1;if(1!=a?e.forEach(function(t,a){1==t&&(e.splice(a,1),n=!0)}):e.forEach(function(t,a){1!=t&&(e=["1"],n=!0)}),11==a){var i=e.indexOf("12");i>-1&&(e.splice(i,1),n=!0)}else if(12==a){var o=e.indexOf("11");o>-1&&(e.splice(o,1),n=!0)}n&&this.setData({"selfForm.symptoms":e});var r=[];t||(r=[{type:"required",message:this.data.language.checRequired},{type:"symptomDscrLength",message:this.data.language.symptomDscrLength}]),this.setData({disableDetail:t,"selfFormRules.symptomDscr":r})},"selfForm.birthday":function(e){try{if(e&&g(g(e).format("YYYY-MM-DD")).isValid()){var t=o(e);if(g().diff(g(e).format("YYYY-MM-DD"),"year")>130||t&&Math.abs(g(t).format("YYYYMMDD").diff(g(e).format("YYYY-MM-DD"),"year")>1)){var a=this.data.selfFormRules||[];a.birthday.push({type:"checkBirthday",message:this.data.language.checkBirthday}),this.setData({selfFormRules:a})}}}catch(e){}},"selfForm.residentCondition":function(e){var t=[];1!==parseInt(e)&&(t=[{type:"required",message:this.data.language.requiredmonthTraveling}]),this.setData({"selfFormRules.travelRegionClass":t})},"selfForm.healthState":function(e){var t=[];t=[{type:"required",message:this.data.language.selectSymptoms}],this.setData({"selfFormRules.symptoms":t})}},e(s,"selfForm.residentCondition",function(e){var t=[];1!==parseInt(e)&&(t=[{type:"required",message:this.data.language.requiredmonthTraveling}]),this.setData({"selfFormRules.travelRegionClass":t})}),e(s,"selfForm.socialContact",function(e){console.log("selfForm.socialContact",e)}),s),computed:{showContactDateRecent:function(){return this.data.selfForm.socialContact.length>0&&this.data.selfForm.socialContact.indexOf("1")>-1},showContactDateLike:function(){return this.data.selfForm.socialContact.length>0&&this.data.selfForm.socialContact.indexOf("2")>-1}},onLoad:function(e){var a=this,i=wx.T.getLanguage().languageClass;if(this.setData({language:"{}"==JSON.stringify(F[i])?F["zh-CN"]:F[i],selfFormRules:"{}"==JSON.stringify(F[i])?F["zh-CN"].selfFormRules:F[i].selfFormRules}),"1"==e.type){var o=JSON.parse(JSON.stringify(this.data.selfFormRules))||[];delete o.avatarKey,this.setData({selfFormRules:o})}else this.setData({selfFormRules:this.data.selfFormRules});if(this.setData({currentType:e.type,nativePlaceRange:n(this.data.language.PROVINCE_LISTS),residentPlaceItems:n(this.data.language.recentRegion_LISTS)}),1==e.type||2==e.type){var r=["健康自查上报",this.data.language.myHealth,this.data.language.heHealth];console.log("title[options.type]",r[e.type]),wx.setNavigationBarTitle({title:r[e.type]}),this.setData({"selfForm.clueType":2==e.type?2:0})}e.target&&this.setData({activeTab:e.target}),e.isFromBuy&&(this.isFromBuy=parseInt(e.isFromBuy)),this.getRegionData(),this.setData({headers:t()});var s=null;s="1"==e.type?"fromDataKey":"fromOtherKey",this.getStorage(s).then(function(t){"1"==e.type?a.setData({regionData:t.regionData,disableDetail:t.disableDetail,"selfForm.gender":t.formData.gender,"selfForm.username":t.formData.username,"selfForm.isChinese":t.formData.isChinese,"selfForm.domicilePlace":t.formData.domicilePlace,"selfForm.nativePlace":t.formData.nativePlace,"selfForm.phone":t.formData.phone,"selfForm.identityType":t.formData.identityType,"selfForm.identity":t.formData.identity,"selfForm.birthday":t.formData.birthday,"selfForm.street":t.formData.street,"selfForm.addr":t.formData.addr,"selfForm.residentFlag":t.formData.residentFlag,"selfForm.residentCondition":t.formData.residentCondition,"selfForm.returnDate":t.formData.returnDate,"selfForm.recentRegionName":t.formData.recentRegionName,"selfForm.quasiReturnDate":t.formData.quasiReturnDate,"selfForm.travelRegionClass":t.formData.travelRegionClass,"selfForm.socialContact1":t.formData.socialContact1,"selfForm.contactDateRecent":t.formData.contactDateRecent,"selfForm.socialContact2":t.formData.socialContact2,"selfForm.contactDateLike":t.formData.contactDateLike,"selfForm.healthState":t.formData.healthState,"selfForm.symptoms":t.formData.symptoms,"selfForm.symptomDscr":t.formData.symptomDscr}):a.setData({regionData:t.regionData,"selfForm.street":t.formData.street,"selfForm.addr":t.formData.addr})}).catch(function(e){console.log("user data error",e)})},onShow:function(){this.setData({avatarFlag:this.data.avatarFlag}),D.fetchUserInfo().then(function(e){e.uid&&C.realnameUser(e.uid).then(function(e){0===e.isAut&&wx.showModal({title:"未实名",content:"是否需要实名认证？",confirmColor:"#1890ff",success:function(e){e.confirm?wx.navigateTo({url:"/packages/health-code/pages/realname-submit/index?path=/packages/health-code/pages/report-health/index"}):e.cancel&&wx.reLaunch({url:"/pages/stat/index"})}})})})},setStorage:function(e,t){return new Promise(function(a,n){wx.setStorage({key:e,data:t,success:function(e){a(e)},fail:function(e){n(e)}})})},getStorage:function(e){return new Promise(function(t,a){wx.getStorage({key:e,success:function(e){t(e.data)},fail:function(e){a(e)}})})},onShareAppMessage:function(){},handleIdentityChange:function(e){if(a(e.detail.value)){var t=r(e.detail.value),n=o(e.detail.value);n&&g(g(n).format("YYYYMMDD")).isValid()&&g().diff(g(n).format("YYYYMMDD"),"year")<=130&&this.setData({"selfForm.birthday":g(n).format("YYYY-MM-DD")}),this.setData({"selfForm.gender":t,"selfForm.identity":e.detail.value})}else this.setData({"selfForm.identity":e.detail.value})},handleTabChange:function(e){this.setData({activeTab:e.detail.value.key})},handleFormChange:function(t){var a=t.target,n=a.dataset,i=a.id;this.setData(e({},n.form+"."+i,t.detail.value))},handleNationChange:function(e){this.setData({"selfForm.isChinese":e.detail.value?1:0})},handleSocialContact1Change:function(e){this.setData({"selfForm.socialContact1":e.detail.value?"1":""})},handleSocialContact2Change:function(e){this.setData({"selfForm.socialContact2":e.detail.value?"2":""})},handleGetLocation:function(t){var a=this;y().then(function(n){var i;console.log(n);var o=t.target,r=o.dataset,s=o.id;a.setData((i={},e(i,r.form+"."+s,n.address),e(i,r.form+".lng",n.longitude),e(i,r.form+".lat",n.latitude),i),u)})},handleHBPickerChange:function(e){this.setData({"selfForm.hubeiLivingCity":e.detail.value[1].name,"selfForm.hubeiLivingCityCode":e.detail.value[1].code})},handleNativePlaceChange:function(e){this.setData({"selfForm.nativePlace":e.detail.value[0].name})},handleHBPickerOpen:function(){this.setData({showHBCityPicker:!0})},handleHBPickerClose:function(){this.setData({showHBCityPicker:!1})},handleNativePlaceClose:function(){this.setData({showNativePlacePicker:!1})},handleNativePlaceOpen:function(e){this.setData({showNativePlacePicker:!0})},getRegionData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;wx.showLoading(),v.getRegionData(t.regionCode,t.regionList).then(function(t){var n=e.data.regionRange.slice(0,a);n[a]={title:0===a?e.data.language.selectRegion.area:1===a?e.data.language.selectRegion.street:e.data.language.selectRegion.community,data:t.map(function(e){return{name:e.regionName,value:{regionName:e.regionName,regionCode:e.regionCode},regionList:e.regionList}})},e.setData({regionRange:n},function(){return wx.hideLoading()})}).catch(function(e){return wx.hideLoading()})},handleOpenRegion:function(e){this.regionPickerForm=e.target.dataset.form,this.setData({showRegionPicker:!0,regionRange:this.data.regionRange.slice(0,1)})},handleRegionChange:function(t){var a=t.detail.value;if(3===a.length){var n;this.setData((n={},e(n,this.regionPickerForm+".regionData",a),e(n,this.regionPickerForm+".street",a.map(function(e){return e.regionName}).join("")),n))}},handleRegionColumnChange:function(e){var t=e.detail,a=t.item,n=t.index;2===n?this.handleRegionClose():this.getRegionData(a,n+1)},handleRegionClose:function(){this.setData({showRegionPicker:!1})},handleAgreeChange:function(){this.setData({agree:!this.data.agree})},getPhoneNumber:function(e){var t=this,a=e.detail,n=a.iv,i=a.encryptedData;if(console.log(1,n,i),n&&i)return wx.showLoading({title:this.data.language.loding}),f({url:"/wll/account/getphone",method:"POST",data:{encryptedData:i,iv:n}}).then(function(e){wx.hideLoading(),console.log("res",e),e&&e.phone&&t.setData({"selfForm.phone":e.phone})}).catch(function(e){wx.hideLoading(),console.error(e)});console.error("用户拒绝授权登录")},choseAvatar:function(e){wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:e,success:function(e){var t=e.tempFilePaths;wx.navigateTo({url:"/pages/cropper-avatar/index?imageSrc="+t+"&fromPage=memberInfo"})}})},uploadAvatar:function(){var e=this;wx.showActionSheet({itemList:["拍照","从手机相册选择"],success:function(t){0==t.tapIndex?e.choseAvatar(["camera"]):e.choseAvatar(["album"]),console.log("索引拍照从手机相册选择，",t.tapIndex)},fail:function(e){console.log(e.errMsg)}})},handleSelfSubmit:function(e){var t=this;if(e.detail.validStatus){var a=l({},e.detail.value);a.systemInfo=m;var n=a.regionData;0!=n.length&&void 0!=n||(n=this.data.regionData);var o={};o.formData=a,o.disableDetail=this.data.disableDetail,o.regionData=n,"1"==this.data.currentType?this.setStorage("fromDataKey",o).catch(function(e){console.error(e)}):"2"==this.data.currentType&&this.setStorage("fromOtherKey",o).catch(function(e){console.error(e)}),a.recentInHubei=a.recentInHubei?1:0;try{0!=n.length&&(a.areaCode=n[0].regionCode,a.street=n[1].regionName,a.streetCode=n[1].regionCode,a.community=n[2].regionName,a.communityCode=n[2].regionCode,a.area=n[0].regionName)}catch(e){console.log(e)}a.city=h.cityName,a.cityCode=h.cityCode,a.birthday=i(a.birthday),a.returnDate=i(a.returnDate),a.contactDateRecent=i(a.contactDateRecent),a.quasiReturnDate=i(a.quasiReturnDate),a.contactDateLike=i(a.contactDateLike),(a.socialContact1||a.socialContact2)&&(a.socialContact=a.socialContact1||"",a.socialContact2&&(a.socialContact=a.socialContact+(a.socialContact?",":"")+a.socialContact2),delete a.socialContact1,delete a.socialContact2),a.symptoms=a.symptoms.map(function(e){return parseInt(e)}),a.residentFlag&&(a.residentFlag=parseInt(a.residentFlag)),a.residentCondition&&(a.residentCondition=parseInt(a.residentCondition)),a.travelRegionClass&&(a.travelRegionClass=parseInt(a.travelRegionClass)),a.healthState&&(a.healthState=parseInt(a.healthState)),delete a.regionData,wx.showLoading(),p.nCovSave(a).then(function(e){0==a.clueType&&wx.setStorageSync("selfForm__submit",!0),wx.hideLoading(),wx.getStorageSync("reditPath")?wx.redirectTo({url:wx.getStorageSync("reditPath")}):t.isFromBuy?wx.navigateTo({url:"../msg/index?isFromBuy="+t.isFromBuy}):wx.navigateTo({url:"../msg/index?info="+JSON.stringify(a)})}).catch(function(){wx.hideLoading(),wx.showToast({title:t.data.language.serverCrowded,icon:"none"})})}}}); 
 			}); 	require("pages/report/index/index.js");
 		__wxRoute = 'pages/donate/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/donate/index/index.js';	define("pages/donate/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({onShareAppMessage:function(){},handlePrimaryTap:function(){wx.navigateTo({url:"/pages/donate/contact/index"})}}); 
 			}); 	require("pages/donate/index/index.js");
 		__wxRoute = 'pages/donate/msg/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/donate/msg/index.js';	define("pages/donate/msg/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{msgTitle:"",msgStatus:"",msgDesc:""},onLoad:function(a){var t=a.tag;void 0===t||"1"===t?this.setData({msgTitle:"提交成功",msgStatus:"success",msgDesc:"请等待通知"}):"2"===t&&this.setData({msgTitle:"提交失败",msgStatus:"warn",msgDesc:"请稍后再次尝试"})},onShareAppMessage:function(){},handlePrimaryTap:function(){wx.reLaunch({url:"/pages/stat/index"})},handleSecondTap:function(){wx.redirectTo({url:"/pages/donate/form/index"})},handleNav:function(a){console.log(a);var t=a.currentTarget.dataset.index;"1"===t?wx.navigateBack({delta:2}):"2"===t&&wx.navigateBack({delta:1})}}); 
 			}); 	require("pages/donate/msg/index.js");
 		__wxRoute = 'pages/donate/form/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/donate/form/index.js';	define("pages/donate/form/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var a=getApp(),t=a.Anim,s=a.request;t.Page({data:{otherObj:{},formData:{listItems:[{name:"",number:""}],company:"",user_name:"",phone:"",desc:""},materialRange:[{name:"医用快速消毒液",value:"医用快速消毒液",displayName:"医用快速消毒液"},{name:"医用外科口罩",value:"医用外科口罩",displayName:"医用外科口罩"},{name:"医用一次性工作帽",value:"医用一次性工作帽",displayName:"医用一次性工作帽"},{name:"医用防护面屏",value:"医用防护面屏",displayName:"医用防护面屏"},{name:"医用一次性鞋套",value:"医用一次性鞋套",displayName:"医用一次性鞋套"},{name:"其他",value:"其他",displayName:"其他"}],addIconSrc:"https://imgcache.gzonline.gov.cn/cos/add_d7e4b605.svg",isNeedDesc:!1,validateType:{checkLimit:function(e,a){return console.log(e),e+""<="9223372036854775807"}}},computed:{rules:function(){var e=this.data,a=e.formData,t={user_name:[{type:"required",message:"请填写联系人"}],company:[{type:"required",message:"请填写捐赠单位"}],phone:[{type:"required",message:"请填写联系电话"},{type:"mobile",message:"手机号格式不正确"}]};return e.isNeedDesc&&(t.desc=[{type:"required",message:"请填写捐赠说明"}]),a.listItems.forEach(function(e,a){t["listItems."+a+".name"]=[{type:"required",message:"请选择捐赠物品"}],t["listItems."+a+".number"]=[{type:"required",message:"请填写捐赠数量"},{type:"checkLimit",message:"捐赠数量不得超过 9223372036854775807"}]}),t}},handleSubmit:function(e){e.detail.validStatus&&(wx.showLoading(),s({url:"/donation/add",data:this.data.formData,method:"POST"}).then(function(){wx.hideLoading(),wx.redirectTo({url:"/pages/donate/msg/index?tag=1"})}).catch(function(e){wx.hideLoading(),wx.redirectTo({url:"/pages/donate/msg/index?tag=2"})}))},addMaterial:function(){var e=this.data.formData;this.setData({formData:Object.assign({},e,{listItems:e.listItems.concat({name:"",number:""})})})},removeMaterial:function(e){var a=e.currentTarget.dataset.index,t=this.data,s=t.formData,i=t.otherObj;if(1!==s.listItems.length){var n="listItems["+a+"].name";i.hasOwnProperty(n)&&delete i[n],this.setData({otherObj:Object.assign({},i),isNeedDesc:!!Object.keys(i).length}),s.listItems.splice(a,1),this.setData({formData:Object.assign({},s)})}else wx.showToast({title:"请至少填写一项物资",icon:"none"})},handleFormChange:function(a){var t=a.detail.value,s=a.currentTarget.id;if(-1!==s.indexOf("listItems")&&-1!==s.indexOf("name")){var i=this.data.otherObj;"其他"===t?(i[s]=1,this.setData({isNeedDesc:!0,otherObj:Object.assign({},i)})):(i.hasOwnProperty(s)&&delete i[s],this.setData({otherObj:Object.assign({},i),isNeedDesc:!!Object.keys(i).length}))}this.setData(e({},"formData."+a.target.id,t))}}); 
 			}); 	require("pages/donate/form/index.js");
 		__wxRoute = 'pages/donate/contact/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/donate/contact/index.js';	define("pages/donate/contact/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({onShareAppMessage:function(){},handlePrimaryTap:function(){wx.navigateTo({url:"/pages/donate/form/index"})}}); 
 			}); 	require("pages/donate/contact/index.js");
 		__wxRoute = 'pages/report/msg/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/report/msg/index.js';	define("pages/report/msg/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../services/health-code.js"),t=getApp(),a=t.Anim,n=(t.userStore,t.config,require("./locales"));a.Page({store:function(e){return{userInfo:e.user.userInfo}},data:{info:null,source:null,language:""},onLoad:function(e){var t=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(n[t])?n["zh-CN"]:n[t]}),wx.setNavigationBarTitle({title:this.data.language.title}),e.info&&this.setData({info:JSON.parse(e.info)}),e.source&&this.setData({source:e.source}),e.isFromBuy&&this.setData({isFromBuy:e.isFromBuy})},handlePrimaryTap:function(t){var a=this;1===parseInt(this.data.isFromBuy)?wx.navigateTo({url:"/packages/buy/pages/notice/index"}):e.realnameUser(this.data.userInfo.uid).then(function(t){if(0==t.isAut)wx.showModal({title:"未实名",content:"是否需要实名认证？",confirmColor:"#1890ff",success:function(e){e.cancel||wx.navigateTo({url:"/packages/health-code/pages/realname-submit/index?path=/pages/report/msg/index"})}});else{var n=a.data.info,i=n.clueType,o=n.identity,s=n.identityType;e.getUserCodeId({clueType:i,identity:o,identityType:s,uid:a.data.userInfo.uid}).then(function(e){wx.navigateTo({url:"/packages/health-code/pages/report-health/index?codeId="+e.codeId})}).catch(function(e){console.log(e),wx.showToast({title:e.errmsg,icon:"none",duration:2e3})})}}).catch(function(e){console.log(e),wx.showToast({title:e.errmsg||"服务器错误",icon:"none",duration:2e3})})},handleSecondTap:function(e){wx.reLaunch({url:"/pages/stat/index"})}}); 
 			}); 	require("pages/report/msg/index.js");
 		__wxRoute = 'pages/mine/donation/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/donation/index.js';	define("pages/mine/donation/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.Anim,n=t.request;e.Page({data:{emptyIcon:"https://imgcache.gzonline.gov.cn/cos/empty_0283358d.svg",list:[]},onLoad:function(t){var e=this;wx.showLoading(),n({url:"/donation/mylist",data:{pageSize:1e5}}).then(function(t){wx.hideLoading(),console.log(t);var n=t.list;n=n.map(function(t){var e=t.name,n=t.status,a=t.create_time;return{materials:JSON.parse(e),create_time:a,status:n}}),e.setData({list:n})}).catch(function(t){wx.hideLoading(),wx.showToast({title:t.errmsg||"服务器错误",icon:"none"})})},onShow:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/mine/donation/index.js");
 		__wxRoute = 'pages/report/inform/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/report/inform/index.js';	define("pages/report/inform/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function t(){return{openid:wx.getStorageSync("wx-openid"),sessionid:wx.getStorageSync("wx-sessionid")}}function a(e){return e?l(e).format("YYYY-MM-DD"):e}var n,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=getApp(),s=o.Anim,r=o.Event,c=o.config,l=o.dayjs,u=o.userStore,d=require("../../../utils/util").chooseLocation,g=require("../../../services/report"),h=require("../../../services/region"),m=require("../../../services/health-code.js"),f={username:"",reportName:"",phone:"",report:"",pic:[],pictrues:[],street:"",addr:"",orgName:"",identify:""},p={reportName:[{type:"required",message:"请输入报事名称"},{type:"titleLength",message:"输入内容小于 20 个字"}],username:[{type:"required",message:"请输入报事人"}],report:[{type:"required",message:"请输入报事内容"},{type:"contentLength",message:"输入内容需大于 10 个字"}]};s.Page({store:function(e){return{userInfo:e.user.userInfo}},data:{pdfUrl:"https://imgcache.gzonline.gov.cn/doc/Report_Clues_Instructions.pdf",imgSrc:"/images/report/caozuozhiyin.png",fileName:"Report Clues Instructions.pdf",tipsEvent:"form__tips",cityName:c.cityName,headers:{},activeTab:"self",showVehicleKeyboard:!1,showHBCityPicker:!1,showRegionPicker:!1,uploadUrl:c.domain+"/report/uploadfile",today:l().format("YYYY-MM-DD"),startDay:l().subtract(130,"year").format("YYYY-MM-DD"),halfMonthAgo:l().subtract(15,"day").format("YYYY-MM-DD"),identityInputType:"text",regionRange:[],sexRange:[{name:"男",value:"男"},{name:"女",value:"女"},{name:"未知",value:"未知"}],cardTypeRange:[{name:"身份证",value:1},{name:"回乡证",value:2},{name:"护照",value:3},{name:"军官证",value:4},{name:"台胞证",value:5},{name:"港澳居民居住证",value:6},{name:"台湾居民居住证",value:7}],personTypeItems:[{name:"未返穗本地常住居民",value:1,desc:"在2020-1-1之后一直没返穗的本地常住居民。"},{name:"持续在穗人员",value:2,desc:"于2020-1-1之前到目前一直在穗人员。"},{name:"一月初返穗居民",value:3,desc:"在2020-1-1至2020-1-15间返穗本地常住居民。"},{name:"一月初来穗人员",value:4,desc:"在2020-1-1至2020-1-15间来穗外地临时人员。"},{name:"一月中返穗居民",value:5,desc:"于2020-1-15后返穗本地常住居民。"},{name:"一月中来穗人员",value:6,desc:"于2020-1-15后来穗外地临时人员。"},{name:"居家医学观察人员 ",value:11},{name:"集中医学观察人员 ",value:12}],symptomItems:[{name:"自觉正常",value:1},{name:"发热",value:2},{name:"干咳",value:3},{name:"乏力",value:4},{name:"腹泻",value:5},{name:"感冒",value:6},{name:"头疼头晕",value:7}],agree:!1,selfForm:(n={regionData:[],username:"",gender:"",identity:"",identityType:"",hubeiLivingCity:"",hubeiLivingCityCode:"",personType:"",recentInHubei:!1,phone:"",clueVehicle:"",birthday:"",symptomDscr:"",symptoms:[],addr:"",street:"",clueSupplier:"",clueSupplierPhone:""},e(n,"clueVehicle",""),e(n,"socialContact",""),e(n,"socialContact1",""),e(n,"socialContact2",""),e(n,"socialContact3",""),e(n,"socialContact4",""),e(n,"returnDate",""),e(n,"contactDateRecent",""),e(n,"quasiReturnDate",""),n),selfFormRules:{clueSupplier:[{type:"required",message:"请输入您的姓名"},{type:"usernameLength",message:"姓名不能超过50个字符"}],username:[{type:"usernameLength",message:"姓名不能超过50个字符"}],gender:[{type:"required",message:"请选择性别"}],phone:[{type:"mobile",message:"请输入正确的手机号码"}],clueVehicle:[{type:"clueVehicleLength",message:"车牌号码长度必须少于 8"},{type:"checkAnyOne",message:"联系电话，关联车牌，居住地址，三者至少填一个"},{type:"carId",message:"请输入正确的车牌号"}],symptomDscr:[{type:"required",message:"请详细描述涉事人相关信息"},{type:"descLength",message:"描述信息长度不少于5"}]},companyForm:i({},f),companyFormRules:i({},p),validateType:{clueVehicleLength:function(e){return console.log("clueVehicleLength",e),!e||e&&e.length<=8},usernameLength:function(e){return!e||e.length<50},contentLength:function(e){return e.length>10},titleLength:function(e){return e.length<=20},descLength:function(e){return e.length>=5},checkAnyOne:function(e,t){return!!(t.phone||t.street||t.clueVehicle)}}},watch:{"selfForm.identityType":function(e){var t=this.data.selfFormRules||[],a="text";switch(parseInt(e)){case 1:t.identity[1]={type:"id",message:"请输入正确的身份证号码"},a="idcard";break;case 5:t.identity[1]={type:"twCome",message:"请输入正确的证件号码"};break;case 6:case 7:t.identity[1]={type:"hmHid",message:"请输入正确的证件号码"};break;default:t.identity=t.identity.slice(0,1)}this.setData({selfFormRules:t,identityInputType:a})},"selfForm.recentInHubei":function(e){var t=this.data.selfFormRules||[];e?(console.log("动态规则",t),t.hubeiLivingCity=[{type:"required",message:"请选择湖北的城市"}]):delete t.hubeiLivingCity,this.setData({selfFormRules:t})},showVehicleKeyboard:function(e){console.log("键盘事件",e)}},onLoad:function(e){var a=this,n=this;e.target&&this.setData({activeTab:e.target}),u.fetchUserInfo().then(function(e){e.uid&&m.realnameUser(e.uid).then(function(e){0===e.isAut?wx.showModal({title:"未实名",content:"是否需要实名认证？",confirmColor:"#1890ff",success:function(e){e.confirm?wx.navigateTo({url:"/packages/health-code/pages/realname-submit/index?path=/pages/report/inform/index"}):e.cancel&&wx.reLaunch({url:"/pages/stat/index"})}}):(wx.showModal({title:"温馨提示",content:"感谢您提供疫情线索，请如实填报，尽量提供全面详细信息，以便工作人员核实情况",confirmText:"立即上报",success:function(e){e.confirm?(console.log("立即上报"),n.getRegionData()):e.cancel&&(console.log("取消"),wx.reLaunch({url:"/pages/stat/index"}))}}),a.setData({headers:t()}))})})},onShareAppMessage:function(){},handleTabChange:function(e){this.setData({activeTab:e.detail.value.key})},handleOpenVehicleKeyboard:function(e){},handleFormChange:function(t){var a=t.target,n=a.dataset,i=a.id;this.setData(e({},n.form+"."+i,t.detail.value))},bindSelectData:function(e){this.setData({"selfForm.addr":e.detail.address})},handlePlateChange:function(e){console.log(e),this.setData({"selfForm.clueVehicle":e.detail.value})},handlePlateClose:function(e){console.log("解决texteare内容穿透问题",e),this.setData({showVehicleKeyboard:e.detail})},handleGetLocation:function(t){var a=this;d().then(function(n){var i;console.log(n);var o=t.target,s=o.dataset,r=o.id;a.setData((i={},e(i,s.form+"."+r,n.address),e(i,s.form+".lng",n.longitude),e(i,s.form+".lat",n.latitude),i))})},handleHBPickerChange:function(e){console.log(e),this.setData({"selfForm.hubeiLivingCity":e.detail.value[1].name,"selfForm.hubeiLivingCityCode":e.detail.value[1].code})},handleHBPickerOpen:function(){this.setData({showHBCityPicker:!0})},handleHBPickerClose:function(){this.setData({showHBCityPicker:!1})},getRegionData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;wx.showLoading(),h.getRegionData(t.regionCode,t.regionList).then(function(t){var n=e.data.regionRange.slice(0,a);n[a]={title:0===a?"区":1===a?"街道":"社区",data:t.map(function(e){return{name:e.regionName,value:{regionName:e.regionName,regionCode:e.regionCode},regionList:e.regionList}})},e.setData({regionRange:n},function(){return wx.hideLoading()})}).catch(function(e){return wx.hideLoading()})},handleOpenRegion:function(e){this.regionPickerForm=e.target.dataset.form,this.setData({showRegionPicker:!0,regionRange:this.data.regionRange.slice(0,1)})},handleRegionChange:function(t){var a=t.detail.value;if(3===a.length){var n;this.setData((n={},e(n,this.regionPickerForm+".regionData",a),e(n,this.regionPickerForm+".street",a.map(function(e){return e.regionName}).join("")),n))}},handleRegionColumnChange:function(e){var t=e.detail,a=t.item,n=t.index;2===n?this.handleRegionClose():this.getRegionData(a,n+1)},handleRegionClose:function(){this.setData({showRegionPicker:!1})},handleAgreeChange:function(){this.setData({agree:!this.data.agree})},handleSocialContact1Change:function(e){this.setData({"selfForm.socialContact1":e.detail.value?"11":""})},handleSocialContact2Change:function(e){this.setData({"selfForm.socialContact2":e.detail.value?"12":""})},handleSocialContact3Change:function(e){this.setData({"selfForm.socialContact3":e.detail.value?"13":""})},handleSocialContact4Change:function(e){this.setData({"selfForm.socialContact4":e.detail.value?"14":""})},handleSelfSubmit:function(e){if(e.detail.validStatus){var t=i({},e.detail.value);if(!(t.socialContact1||t.socialContact2||t.socialContact3||t.socialContact4))return r.dispatch(this.data.tipsEvent,"请选择涉事人类型");t.recentInHubei=t.recentInHubei?1:0,t.clueSupplierPhone=this.data.userInfo.phone;var n=t.regionData;if(n&&(t.city=c.cityName,t.cityCode=c.cityCode,n.length>0&&(t.area=n[0].regionName,t.areaCode=n[0].regionCode),n.length>1&&(t.street=n[1].regionName,t.streetCode=n[1].regionCode),n.length>2&&(t.community=n[2].regionName,t.communityCode=n[2].regionCode)),t.clueType=1,t.birthday=a(t.birthday),t.returnDate=a(t.returnDate),t.contactDateRecent=a(t.contactDateRecent),t.quasiReturnDate=a(t.quasiReturnDate),t.socialContact1||t.socialContact2||t.socialContact3||t.socialContact4){var o=[];[t.socialContact1,t.socialContact2,t.socialContact3,t.socialContact4].map(function(e){e&&o.push(e)}),t.socialContact=o.join(","),delete t.socialContact1,delete t.socialContact2,delete t.socialContact3,delete t.socialContact4}delete t.regionData,wx.showLoading(),g.nCovSave(t).then(function(e){wx.hideLoading(),wx.navigateTo({url:"../msg/index?source=report"})}).catch(function(){return wx.hideLoading()})}}}); 
 			}); 	require("pages/report/inform/index.js");
 		__wxRoute = 'pages/diagnosis/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/diagnosis/index.js';	define("pages/diagnosis/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=a.Anim,t=(a.request,a.utils),n=(a.dayjs,a.config),i=a.wxp,o=require("./locales");e.Page({store:function(a){return{userInfo:a.user.userInfo}},data:{language:"",list:[],bannerPath:""},onLoad:function(){this.fetchData(),this.setLanguage(),this.setData({bannerPath:n.cdnDomain+this.data.language.bannerPath})},fetchData:function(){var a=this;wx.showLoading({title:this.data.language.loading,mask:!0}),i.request({url:n.cdnDomain+n[n.env].wenzhenPath+"?t="+Date.now()}).then(function(e){wx.hideLoading();var t=e.data.data;t&&t.length&&(t.push({id:"guide",desc:a.data.language.diagnosisDesc,img:"../../images/guidehealth/icon.png",label:a.data.language.diagnosisLabel,path:"/pages/health-guide/index"}),a.setData({list:t}))}).catch(function(e){wx.hideLoading(),wx.showToast({title:a.data.language.crowded,icon:"none"}),console.error(e)})},onTapAccess:function(a){console.log("onTapAccess",a);var e=this,n=a.target.dataset.item,i=n.appId,o=n.path,s=n.label;i?wx.navigateToMiniProgram({appId:i,path:o,extraData:{fromTitle:"健康",fromAppId:"wx2ac2313767a99df9"},envVersion:"release",success:function(a){wx.reportAnalytics("diagnosis_navigate",{title:s,appid:i,path:o,phone:e.data.userInfo.phone||"",openid:wx.getStorageSync("wx-openid")||""}),console.log("打开小程序成功",a)}}):a.target.dataset.item.id?wx.navigateTo({url:t.urlJoinParams(o,{webUrl:encodeURIComponent(o),title:s})}):wx.navigateTo({url:t.urlJoinParams("/pages/web-view/index",{webUrl:encodeURIComponent(o),title:s})})},setLanguage:function(){var a=wx.T.getLanguage().languageClass;this.setData({language:"{}"==JSON.stringify(o[a])?o["zh-CN"]:o[a]}),wx.setNavigationBarTitle({title:this.data.language.barTitle})}}); 
 			}); 	require("pages/diagnosis/index.js");
 		__wxRoute = 'pages/buy/notice/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/buy/notice/index.js';	define("pages/buy/notice/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({onLoad:function(e){wx.redirectTo({url:"/packages/buy/pages/notice/index"})}}); 
 			}); 	require("pages/buy/notice/index.js");
 		__wxRoute = 'pages/health-guide/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/health-guide/index.js';	define("pages/health-guide/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var t=getApp(),a=t.Anim,i=(t.request,t.utils,t.dayjs,t.config);t.wxp;a.Page({store:function(e){return{userInfo:e.user.userInfo}},data:{chapterLists:[{chapterId:"01",chapterName:"个人防护指引",sectionsNmber:9,flag:!0,imgUrl:"../../images/guidehealth/protection.png",sections:[{id:"01",desc:"",img:"",label:"新型冠状病毒传播途径与预防导图",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:5830},{id:"02",desc:"",img:"",label:"密切接触者居家隔离指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:5898},{id:"03",desc:"",img:"",label:"密切接触者集中医学观察指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1978},{id:"04",desc:"",img:"",label:"市民新冠肺炎预防控制指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:7468},{id:"05",desc:"",img:"",label:"口罩、纸巾使用后的废弃处理指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:3678},{id:"06",desc:"",img:"",label:"新冠肺炎防治营养膳食指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:7756},{id:"07",desc:"",img:"",label:"公众心理健康指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1538},{id:"08",desc:"",img:"",label:"流行期间公众就医指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:3084},{id:"09",desc:"",img:"",label:"市民发热就医指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:3678}]},{chapterId:"02",chapterName:"个人出行指引",sectionsNmber:5,flag:!1,imgUrl:"../../images/guidehealth/trip.png",sections:[{id:"01",desc:"",img:"",label:"公共场所自我防护措施",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1386},{id:"02",desc:"",img:"",label:"生鲜市场自我防护措施",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1334},{id:"03",desc:"",img:"",label:"乘坐公共交通工具自我防护措施 ",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1818},{id:"04",desc:"",img:"",label:"乘坐私家车自我防护措施",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:1334},{id:"05",desc:"",img:"",label:"办公场所自我防护措施",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:"3722"}]},{chapterId:"03",chapterName:"家庭、社区指引",sectionsNmber:3,flag:!1,imgUrl:"../../images/guidehealth/family.png",sections:[{id:"01",desc:"",img:"",label:"普通家庭预防新冠肺炎指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:3270},{id:"02",desc:"",img:"",label:"普通居家预防新冠肺炎卫生清洁消毒指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:4360},{id:"03",desc:"",img:"",label:"已出现病例社区的居民健康防护指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:6496}]},{chapterId:"04",chapterName:"特殊人群防控指引",sectionsNmber:3,flag:!1,imgUrl:"../../images/guidehealth/specialGroup.png",sections:[{id:"01",desc:"",img:"",label:"学生防控指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:2216},{id:"02",desc:"",img:"",label:"孕产妇预防指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:6122},{id:"03",desc:"",img:"",label:"疾病流行地区居住旅行人员预防指引",path:"/pages/health-guide/index",total:1,activeIndex:!1,height:4444}]}],bannerPath:i.cdnDomain+"/cos/HealthGuide/banner.png"},onShow:function(){var t=this;this.getStorage("activeLaction").then(function(a){var i=Number(a.chapterindex),h=Number(a.sectionindex);console.log("sectionindex",h),t.data.chapterLists.forEach(function(a,n){if(n==i){var d="chapterLists["+n+"].flag";t.setData(e({},d,!0)),a.sections.forEach(function(a,i){if(h==i){var d="chapterLists["+n+"].sections["+i+"].activeIndex";t.setData(e({},d,!0))}else{var s="chapterLists["+n+"].sections["+i+"].activeIndex";t.setData(e({},s,!1))}})}else{var s="chapterLists["+n+"].flag";t.setData(e({},s,!1)),a.sections.forEach(function(a,i){var h="chapterLists["+n+"].sections["+i+"].activeIndex";t.setData(e({},h,!1))})}})}).catch(function(e){})},onLoad:function(){this.setStorage("healthData",this.data.chapterLists).catch(function(e){console.error(e)})},onTapAccess:function(e){var t=e.target.dataset.chapterindex,a=e.target.dataset.sectionindex,i=e.target.dataset.imagheight;console.log("dddddw22222222222",e),wx.navigateTo({url:"/pages/health-guide-detail/index?chapterindex="+t+"&sectionindex="+a+"&imagheight="+i})},setStorage:function(e,t){return new Promise(function(a,i){wx.setStorage({key:e,data:t,success:function(e){a(e)},fail:function(e){i(e)}})})},getStorage:function(e){return new Promise(function(t,a){wx.getStorage({key:e,success:function(e){t(e.data)},fail:function(e){a(e)}})})},handleShowSection:function(t){var a=this;console.log("点击标题",t);var i=t.currentTarget.dataset.index;this.data.chapterLists.forEach(function(t,h){if(h==i){var n="chapterLists["+i+"].flag";a.setData(e({},n,!a.data.chapterLists[i].flag))}})}}); 
 			}); 	require("pages/health-guide/index.js");
 		__wxRoute = 'pages/health-guide-detail/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/health-guide-detail/index.js';	define("pages/health-guide-detail/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp().config;require("./locales");Page({data:{language:"",title:"",chapter:"",chapterindex:"",sectionindex:"",images:[],active:!0,healthData:[]},onLoad:function(t){var e=this;this.getStorage("healthData").then(function(n){e.setData({healthData:n}),e.getChapter(t)}).catch(function(t){console.error(t)});var n={chapterindex:t.chapterindex,sectionindex:t.sectionindex};this.setStorage("activeLaction",n).catch(function(t){console.error(t)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},showButton:function(){this.setData({active:!this.data.active})},prevIcon:function(){var t=this.data.chapterindex,e=this.data.sectionindex,n=this.data.healthData;0!=t?(0!=e?e--:e=n[--t].sections.length-1,wx.redirectTo({url:"/pages/health-guide-detail/index?chapterindex="+t+"&sectionindex="+e})):0!=e?(e--,wx.redirectTo({url:"/pages/health-guide-detail/index?chapterindex="+t+"&sectionindex="+e})):wx.showToast({icon:"none",title:"前面没有了～"});var i={chapterindex:t,sectionindex:e};this.setStorage("activeLaction",i).catch(function(t){console.error(t)})},nextIcon:function(){var t=this.data.chapterindex,e=this.data.sectionindex,n=this.data.healthData;t!=n.length-1?(e!=n[t].sections.length-1?e++:(t++,e=0),wx.redirectTo({url:"/pages/health-guide-detail/index?chapterindex="+t+"&sectionindex="+e})):e!=n[t].sections.length-1?(e++,wx.redirectTo({url:"/pages/health-guide-detail/index?chapterindex="+t+"&sectionindex="+e})):wx.showToast({icon:"none",title:"已经是最后一节了～"});var i={chapterindex:t,sectionindex:e};console.log("存当前处在哪一张的哪一节",i),this.setStorage("activeLaction",i).catch(function(t){console.error(t)})},setStorage:function(t,e){return new Promise(function(n,i){wx.setStorage({key:t,data:e,success:function(t){n(t)},fail:function(t){i(t)}})})},getStorage:function(t){return new Promise(function(e,n){wx.getStorage({key:t,success:function(t){e(t.data)},fail:function(t){n(t)}})})},getChapter:function(e){var n=e.chapterindex,i=e.sectionindex,a=e.imagheight,o=this.data.healthData,c=[];c.push({src:t.cdnDomain+"/cos/MutliHealthGuide/"+o[n].chapterId+o[n].sections[i].id+".jpg",show:!1,imageheight:a}),this.setData({images:c,chapterindex:n,sectionindex:i})},setLanguage:function(){wx.setNavigationBarTitle({title:this.data.language.barTitle})}}); 
 			}); 	require("pages/health-guide-detail/index.js");
 		__wxRoute = 'pages/manage-company/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/manage-company/index.js';	define("pages/manage-company/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=a.Anim,e=(a.utils,a.mineStore,a.resetTab,a.request),n=a.Event;t.Page({data:{activeKey:"0",applyStatus:0,applyUserName:"",companyId:"",searchValue:"",applies:[],errorpage:!1},tabChange:function(a){if(this.setData({activeKey:a.detail.value.key}),this.data.searchValue)this.getSrachData(this.data.searchValue);else{var t={applyStatus:a.detail.value.key,applyUserName:this.data.searchValue,companyId:this.data.companyId};this.getData(t)}},onLoad:function(a){var t=this;this.checkcompanyId(a.gridPointId).then(function(a){var e={applyStatus:0,applyUserName:t.data.searchValue,companyId:t.data.companyId};t.getData(e)})},backtonew:function(){wx.navigateBack({delta:1})},checkcompanyId:function(a){var t=this;return new Promise(function(n,i){e({url:"/resumption/point/company/"+a,method:"GET"}).then(function(a){a?(t.setData({companyId:a.id}),n()):(t.setData({errorpage:!0}),wx.setNavigationBarTitle({title:"提示"})),wx.hideLoading()}).catch(function(a){console.error(a),wx.hideLoading()})})},handleItem:function(a){var t=this,e=a.target.dataset.item.applyUserName,n=a.target.dataset.item.id;wx.showModal({content:"\r\n是否通过"+e+"的关联申请",confirmText:"通过",confirmColor:"#4293F4",cancelText:"拒绝",success:function(a){var e={applyIds:[n],applyStatus:0};a.confirm?(e.applyStatus=1,console.log("通过")):a.cancel&&(e.applyStatus=2,console.log("拒绝")),t.checkList(e)}})},getData:function(a){var t=this;return wx.showLoading(),e({url:"/resumption/manager/get/applies",method:"POST",data:a}).then(function(a){t.setData({applies:a.applies,tab:a.tab},function(){n.dispatch("g-tabs__init")}),wx.hideLoading()}).catch(function(a){console.error(a),wx.hideLoading()})},checkList:function(a){var t=this;wx.showLoading();var n=this;return e({url:"/resumption/manager/update/apply/status",method:"POST",data:a}).then(function(a){var e={applyStatus:t.data.activeKey,applyUserName:t.data.searchValue,companyId:t.data.companyId};wx.hideLoading(),n.getData(e)}).catch(function(a){var e={applyStatus:t.data.activeKey,applyUserName:t.data.searchValue,companyId:t.data.companyId};wx.hideLoading(),console.error(a),n.getData(e)})},handleConfirm:function(a){this.getSrachData(this.data.searchValue)},handleChange:function(a){this.setData({searchValue:a.detail.value}),this.getSrachData(a.detail.value)},getSrachData:function(a){var t=this;return e({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:this.data.activeKey,applyUserName:a,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),console.log("res",a),t.setData({applies:a.applies,tab:a.tab},function(){n.dispatch("g-tabs__init")})}).catch(function(a){wx.hideLoading(),console.error(a)})},bindChange:function(a){var t=this,e=a.target.dataset.item.id,n=this.data.activeKey;"1"==n&&wx.showActionSheet({itemList:["解除关联"],cancelColor:"#4293F4",success:function(a){console.log(a.tapIndex);var n={applyIds:[e],applyStatus:2};t.checkList(n)},fail:function(a){console.log(a.errMsg)}}),"2"==n&&wx.showActionSheet({itemList:["建立关联"],success:function(a){var n={applyIds:[e],applyStatus:1};t.checkList(n),console.log(a.tapIndex)},fail:function(a){console.log(a.errMsg)}})}}); 
 			}); 	require("pages/manage-company/index.js");
 		__wxRoute = 'pages/company-manage/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/company-manage/index.js';	define("pages/company-manage/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp().request;Page({data:{applyStatus:0,applyUserName:"",companyId:"",searchValue:"",nodo:0,contacted:1,nocontact:2,getarray:{applies:[],tab:{0:3,1:2,2:1}},winWidth:0,winHeight:0,currentTab:0},onLoad:function(){var t=this,e=this;return this.setData({companyId:option.id}),wx.getSystemInfo({success:function(a){e.setData({winWidth:a.windowWidth,winHeight:a.windowHeight})}}),a({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:0,applyUserName:this.data.searchValue,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),t.setData({"getarray.applies":a.applies,"getarray.tab":a.tab})}).catch(function(a){wx.hideLoading(),console.error(a)})},swichNav:function(a){var t=this;this.data.currentTab===a.target.dataset.current?a.target.dataset.current:t.setData({currentTab:a.target.dataset.current})},bindChange:function(t){var e=this;this.setData({currentTab:t.detail.current});var n=t.detail.current;return console.log(n),a({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:n,applyUserName:this.data.searchValue,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),console.log("res",a),e.setData({"getarray.applies":a.applies,"getarray.tab":a.tab})}).catch(function(a){wx.hideLoading(),console.error(a)})},newlists:function(){var t=this;return a({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:this.data.currentTab,applyUserName:this.data.searchValue,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),console.log("res",a),t.setData({"getarray.applies":a.applies,"getarray.tab":a.tab})}).catch(function(a){wx.hideLoading(),console.error(a)})},checkList:function(t){var e=this;return a({url:"/resumption/manager/update/apply/status",method:"POST",data:t}).then(function(a){wx.hideLoading(),console.log("res",a),e.newlists()}).catch(function(a){wx.hideLoading(),console.error(a),e.newlists()})},checkitem:function(a){var t=this,e=a.target.dataset.name.applyUserName,n=a.target.dataset.name.id;wx.showModal({content:"\r\n是否通过"+e+"的关联申请",confirmText:"通过",confirmColor:"#4293F4",cancelText:"拒绝",success:function(a){if(a.confirm){e={applyIds:[n],applyStatus:1};console.log("通过"),t.checkList(e)}else if(a.cancel){console.log("拒绝");var e={applyIds:[n],applyStatus:2};t.checkList(e)}}})},bindconted:function(){console.log(11),wx.showActionSheet({itemList:["解除关联"],cancelColor:"#4293F4",success:function(a){console.log(a.tapIndex)},fail:function(a){console.log(a.errMsg)}})},unbindcont:function(){console.log(11),wx.showActionSheet({itemList:["建立关联"],success:function(a){console.log(a.tapIndex)},fail:function(a){console.log(a.errMsg)}})},handleChange:function(t){var e=this,n=t.detail.value;return console.log(t),this.data.searchValue=n,a({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:this.data.currentTab,applyUserName:n,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),console.log("res",a);for(var t in a.tab)a.tab[t]>0&&e.setData({currentTab:a.tab[t]});e.setData({"getarray.applies":a.applies,"getarray.tab":a.tab})}).catch(function(a){wx.hideLoading(),console.error(a)})},handleConfirm:function(t){var e=this,n=t.detail.value;return console.log(t,n),a({url:"/resumption/manager/get/applies",method:"POST",data:{applyStatus:this.data.currentTab,applyUserName:this.data.searchValue,companyId:this.data.companyId}}).then(function(a){wx.hideLoading(),console.log("res",a);for(var t in a.tab)a.tab[t]>0&&e.setData({currentTab:a.tab[t]});e.setData({"getarray.applies":a.applies,"getarray.tab":a.tab})}).catch(function(a){wx.hideLoading(),console.error(a)})}}); 
 			}); 	require("pages/company-manage/index.js");
 		__wxRoute = 'pages/share-company-code/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/share-company-code/index.js';	define("pages/share-company-code/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../../utils/request").request;Page({data:{companyName:"",imgUrl:"",companyAddress:"",companyCode:"",companyId:"",socialCreditCode:"",errorpage:!1},onLoad:function(o){var t=this;this.checkcompanyId(o.gridPointId).then(function(o){return t.fetchCommpanyInfo(o)}).then(function(o){t.createQrCode()})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(o){return"button"===o.from&&console.log(o.target),{title:"邀请你加入企业："+this.data.companyName,path:"/pages/application/index?socialCreditCode="+this.data.socialCreditCode,imageUrl:this.data.imgUrl}},saveImag:function(){wx.downloadFile({url:this.data.imgUrl,success:function(o){var t=o.tempFilePath;wx.saveImageToPhotosAlbum({filePath:t,success:function(o){wx.showToast({title:"已保存"})},fail:function(o){console.log(o)},complete:function(o){console.log(o)}})},fail:function(o){console.log(o)}})},fetchCommpanyInfo:function(t){var e=this;return wx.showLoading({title:"加载中"}),new Promise(function(n,a){o({url:"/resumption/company/"+t,method:"GET",data:{}}).then(function(o){wx.hideLoading();var t=o;e.setData({companyName:t.companyName,companyAddress:t.companyAddress,companyId:t.id}),n()}).catch(function(o){wx.hideLoading(),console.error(o),a(o)})})},backtonew:function(){wx.navigateBack({delta:1})},checkcompanyId:function(t){var e=this;return new Promise(function(n,a){o({url:"/resumption/point/company/"+t,method:"GET"}).then(function(o){o?(e.setData({socialCreditCode:o.socialCreditCode}),n(o.socialCreditCode)):(e.setData({errorpage:!0}),wx.setNavigationBarTitle({title:"提示"})),wx.hideLoading()}).catch(function(o){console.error(o),wx.hideLoading()})})},createQrCode:function(){var t=this;o({url:"/resumption/manager/createQrCode",method:"POST",data:{socialCreditCode:this.data.socialCreditCode,companyId:this.data.companyId,page:"pages/application/index"}}).then(function(o){t.setData({imgUrl:o.qrCodeKey})}).catch(function(o){console.error(o)}),this.setData({imgUrl:this.data.imgUrl?this.data.imgUrl:"/images/relativecode/correlationcode.png"})}}); 
 			}); 	require("pages/share-company-code/index.js");
 		__wxRoute = 'pages/mine/company/list/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/company/list/index.js';	define("pages/mine/company/list/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.Anim,o=(t.utils,t.mineStore,t.resetTab,t.request);e.Page({usingComponents:{"action-sheet":"wx-miniprogram-actionsheet"},data:{tabIndex:"0",todoType:"affair",itemList:[],actionSheetHidden:!0,actionSheetItems:[{value:"1",txt:"取消关注"}],menu:""},onLoad:function(t){this.getData()},onShow:function(){},handleItem:function(t){var e=this;console.log(t.currentTarget.dataset.item);var n=t.currentTarget.dataset.item,s=n.applyStatus,a=n.id;console.log(a),"1"==s&&(console.log("111"),wx.showActionSheet({itemList:["解除关联"],itemColor:"#DC143C",success:function(t){console.log(t.tapIndex),0==t.tapIndex&&wx.showModal({title:"确定解除关联?",content:"解除后不可恢复,请谨慎操作",success:function(t){t.confirm?(console.log("用户点击确定"),o({url:"/resumption/user/apply/relieve/"+a,method:"GET"}).then(function(t){e.getData(),console.log(t)}).catch(function(t){console.log(t)})):t.cancel&&console.log("用户点击取消")}})},fail:function(t){console.log(t.errMsg)}}))},getData:function(){var t=this;o({url:"/resumption/user/apply/companies",method:"GET"}).then(function(e){console.log("res",e),t.setData({itemList:e})}).catch(function(t){console.log(t)})}}); 
 			}); 	require("pages/mine/company/list/index.js");
 		__wxRoute = 'pages/mine/setting/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mine/setting/index.js';	define("pages/mine/setting/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var e,n=getApp().Event;Page({data:(e={title:"语言设置",loading:!1,color:"#000",background:"#f8f8f8",show:!0,animated:!1,language:"",visible:!0},a(e,"language",""),a(e,"langIndex",0),a(e,"languagesText",{0:"简体中文（中文）",1:"English（英语）",2:"日本語（日语）",3:"한국어（韩语）"}),a(e,"isShow",[!1,!1,!1,!1]),e),onLoad:function(a){this.setData({langIndex:wx.getStorageSync("langIndex")||("ko"==wx.getSystemInfoSync().language?3:0)}),0!==this.data.langIndex?wx.setNavigationBarTitle({title:"请选择语言"}):wx.setNavigationBarTitle({title:"language"})},onShareAppMessage:function(){},setLanguageTab:function(a){var e=a.currentTarget.dataset.index;this.setData({langIndex:e}),wx.setStorageSync("langIndex",e),wx.setStorageSync("languageChange",!0);wx.T.setLocaleByIndex(e),n.dispatch("languageChanged","languageChanged监听成功"),wx.navigateBack({delta:2})}}); 
 			}); 	require("pages/mine/setting/index.js");
 		__wxRoute = 'pages/application/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/application/index.js';	define("pages/application/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../services/car-code/passenger.js"),e=require("../../utils/request").request;getApp().Anim.Page({store:function(t){return{userInfo:t.user.userInfo}},data:{applicationType:"你正在申请关联以下单位",name:"",address:"",companyId:"",socialCreditCode:""},onLoad:function(t){var e=this.data.userInfo.uid;this.fetchHealthStatus(e);var n;t&&t.scene?n=decodeURIComponent(t.scene):t&&t.socialCreditCode&&(n=t.socialCreditCode),this.fetchCommpanyInfo(n)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},fetchHealthStatus:function(e){t.getUserHealthInfo(e).then(function(t){if(t&&t.reportData)JSON.parse(t.reportData);else wx.showModal({title:"提示",content:"请先上报个人健康自查！",showCancel:!1,confirmText:"去上报",success:function(t){t.confirm&&wx.navigateTo({url:"/pages/report/index/index?type=1"})}})})},onShareAppMessage:function(){},handleSubmuit:function(){this.submitApplycation()},submitApplycation:function(){e({url:"/resumption/user/apply",method:"POST",data:{companyId:this.data.companyId,companyName:this.data.name}}).then(function(t){wx.showToast({title:"申请已发送"}),wx.redirectTo({url:"/pages/mine/company/list/index"})}).catch(function(t){wx.showToast({title:"不能重复申请"})})},fetchCommpanyInfo:function(t){var n=this;e({url:"/resumption/company/"+t,method:"GET",data:{}}).then(function(t){var e=t;n.setData({name:e.companyName,address:e.companyAddress,companyId:e.id})}).catch(function(t){wx.hideLoading(),wx.showToast({title:"获取企业信息失败"})})}}); 
 			}); 	require("pages/application/index.js");
 		__wxRoute = 'pages/cropper-avatar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/cropper-avatar/index.js';	define("pages/cropper-avatar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),t=a.systemInfo,e=(a.request,a.config),i=require("../../utils/session").getSessionId,o=t.screenWidth/750,s=t.windowHeight,n=500*o,c=500*o;Page({data:{imgWidth:"",imgHeight:"",showImg:!1,imgTop:0,imgLeft:0,scrollTop:0,scrollLeft:0,movableareaHeight:500*o,movableareaWidth:500*o,scale:1,cutX:0,cutY:0},onLoad:function(a){var t=this;console.log("options",a);var e=this,i=a||"",o="",s="";i&&(o=i.imageSrc||"",s=i.fromPage||""),this.setData({fromPage:s}),o&&wx.downloadFile({url:o,success:function(a){200===a.statusCode&&(t.setData({imageSrc:a.tempFilePath||""}),setTimeout(function(){e.loadImage()},800))},fail:function(a){t.setData({imageSrc:o}),t.loadImage()}})},chooseImg:function(){wx.navigateBack({delta:1})},loadImage:function(){var a=this;wx.showLoading({title:"图片加载中..."}),wx.getImageInfo({src:a.data.imageSrc,success:function(t){var e=t.width/t.height,i="",r="",l="",g="",d=(s-100*o-c)/2,h=(750*o-n)/2;e>=1?(r=c,(i=c*e)<n&&(i=n,r=n/e)):(i=n,r=n/e),l=h-(i-n)/2,g=-(r-436*o)/2,a.setData({scrollTop:d,scrollLeft:h,imgWidth:i,imgHeight:r,imgTop:g,imgLeft:l,showImg:!0,lineBottomTop:d+c}),wx.hideLoading()}})},onChange:function(a){console.log("拖动事件",a.detail),this.setData({cutX:a.detail.x,cutY:a.detail.y})},onScale:function(a){console.log("缩放事件",a);var t=a.detail.scale;this.setData({scale:t,cutX:a.detail.x,cutY:a.detail.y})},creatImage:function(a){var t=this,o=this.data,s=o.fromPage,r=o.imageSrc,l=o.imgWidth,g=o.imgHeight,d=o.scale;wx.showLoading({title:"图片上传中..."}),t.setData({canvasWidth:l*d,canvasHeight:g*d});var h=wx.createCanvasContext("canvasCropper");h.scale(d,d),h.drawImage(r,0,0,l,g),h.draw(!1,function(a){setTimeout(function(){wx.canvasToTempFilePath({x:Math.abs(t.data.cutX),y:Math.abs(t.data.cutY),width:n,height:c,destWidth:4*n,destHeight:4*c,fileType:"jpg",quality:1,canvasId:"canvasCropper",success:function(a){if(wx.setStorageSync("imgcropper",a.tempFilePath),wx.hideLoading(),"memberInfo"==s){var t=getCurrentPages(),o=t[t.length-2];i().then(function(t){wx.uploadFile({url:e.domain+"/report/uploadAvatar",filePath:a.tempFilePath,header:{sessionid:t,appid:e.appid},name:"file",formData:{user:"test"},success:function(t){wx.hideLoading();var e=JSON.parse(t.data);o.setData({avatarUrl:a.tempFilePath,avatarFlag:!0,"selfForm.avatarKey":e.data}),wx.navigateBack({delta:1})},fail:function(){wx.showToast({title:"error!",icon:"none"})}})})}}})},1e3)})}}); 
 			}); 	require("pages/cropper-avatar/index.js");
 	